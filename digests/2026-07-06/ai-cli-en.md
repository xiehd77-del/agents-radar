# AI CLI Tools Community Digest 2026-07-06

> Generated: 2026-07-06 13:25 UTC | Tools covered: 9

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

# AI CLI Developer Tools: Cross-Tool Comparison Report
**Date:** 2026-07-06

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape is maturing rapidly, with seven major tools showing distinct specializations while converging on shared architectural patterns. **Agent reliability**—particularly subagent lifecycle management, context window handling, and failure reporting—has emerged as the dominant cross-cutting concern, surpassing raw model capability as the primary adoption barrier. **Windows platform parity** remains a systemic weakness, with every tool reporting platform-specific regressions that fragment the user experience. The **MCP (Model Client Protocol) ecosystem** is standardizing rapidly, with Gemini CLI reaching the first stable SDK release (`@agentclientprotocol/sdk` v1.0.0) and multiple tools adding MCP elicitation and tool-catalog streaming support. The **extensibility arms race** is accelerating: plugin systems, custom VCS backends, and user-defined commands are becoming table-stakes features rather than differentiators. Meanwhile, **memory leak crises** (Claude Code's 120+ GB issue, OpenCode's idle CPU burn) and **auth-state fragility** (Codex, Copilot CLI) indicate that production-grade reliability engineering hasn't kept pace with feature velocity.

---

## 2. Activity Comparison

| Tool | Hot Issues (Active) | Key PRs (24h) | Release Status | Community Engagement (Top Issue Reactions) |
|---|---|---|---|---|
| **Claude Code** | 10 | 1 | No release | 72 👍 (memory leak) |
| **OpenAI Codex** | 10 | 10 | No release | 692 👍 (Linux desktop) |
| **Gemini CLI** | 10 | 10 | Nightly build | 8 👍 (agent hangs) |
| **GitHub Copilot CLI** | 10 | 0 | **v1.0.69-2 (patch)** | 18 👍 (plugin scoping) |
| **Kimi Code CLI** | 2 | 0 | No release | 0 👍 (new issues) |
| **OpenCode** | 10 | 10 | No release | 84 👍 (tokens/second) |
| **Pi** | 10 | 10 | No release | 5 👍 (edit tool bugs) |
| **Qwen Code** | 10 | 10 | **v0.19.6-nightly** | 18 comments (multi-workspace RFC) |
| **DeepSeek TUI** | 10 | 10 | No release | Umbrella tracker (v0.8.68) |

**Observation:** Copilot CLI is the only tool shipping stable patches today (v1.0.69-2). Gemini CLI and Qwen Code are in nightly mode. Claude Code, Codex, and OpenCode show high issue engagement with zero releases—suggesting either slower release cadences or backlog pressure. DeepSeek TUI is the most release-coordinated, with an explicit v0.8.68 umbrella tracker driving convergent development.

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities:

### Multi-Agent Orchestration & Lifecycle Control
- **Tools:** DeepSeek TUI (#4038 conductor agent), Claude Code (pause/resume #74689, interjection prevention #74695), OpenAI Codex (multi-agent metadata in MCP #27495), Gemini CLI (subagent trajectory visibility #22598)
- **Shared Need:** Users need fine-grained control over subagent lifecycles: pause/resume, background execution, conductor-style fan-out/synthesis, and visibility into subagent decision processes.

### Windows Platform Parity
- **Tools:** Claude Code (#14828 console flashing, #2805 CRLF), OpenAI Codex (#30009 sandbox apply_patch, #13165 custom shell), GitHub Copilot CLI (#4001 hooks fail on Windows), OpenCode (#35545 ConPTY backspace), Qwen Code (#6298 shell tool fails), Kimi Code (#2485 terminal corruption)
- **Shared Need:** Every Windows-specific issue is a macOS/Linux assumption leaking into cross-platform code. The gap is systemic, not occasional.

### MCP Protocol Standardization & Extensions
- **Tools:** Gemini CLI (PR #28089 MCP elicitation, SDK v1.0.0 bump), Claude Code (#28575 Gmail attachment MCP), OpenAI Codex (#31163 MCP title rejection, #31088 tool catalog streaming), Pi (PR #6350 provider header hooks)
- **Shared Need:** MCP is becoming the universal integration layer. Tools need compliance with evolving specs, richer elicitation modes, and streaming tool catalogs.

### Tool Argument Validation & Error Handling
- **Tools:** Pi (#6278, #6306 hallucinated JSON keys in tool calls → constrained sampling PR #6341), OpenAI Codex (#31163 MCP title rejection), Gemini CLI (empty parts arrays bug #28068), OpenCode (JSON Schema required arrays PR #35533)
- **Shared Need:** LLMs hallucinate invalid tool arguments. Tools are converging on schema validation, grammar-constrained sampling, and strict tool modes as countermeasures.

### Session & Context Persistence
- **Tools:** Gemini CLI (Auto Memory retry loops #26522), Claude Code (session history corruption #69725), OpenAI Codex (#31240 project rename wipes chats, #31155 release thread writer), Qwen Code (#6259 session artifacts persistence), Pi (#6354 session state leak)
- **Shared Need:** Session persistence architecture is fragile. UUID collisions, race conditions, and incomplete state cleanup cause data loss across multiple tools.

### Privacy & Consent Controls
- **Tools:** OpenCode (#17188 default sharing disabled), Claude Code (#74777 artifact sharing for individuals), Copilot CLI (#3028 MCP permissions configuration), DeepSeek TUI (#4032 constitution following)
- **Shared Need:** Users want granular consent for data sharing, artifact visibility, and agent permissions—not binary opt-in/opt-out.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|---|
| **Primary Differentiator** | Enterprise MCP hub integration | Multi-model tier support (Sonnet/Opus/GPT-5.5) | Google ecosystem integration (Gemini models) | GitHub ecosystem integration | Plugin extensibility & performance metrics | Provider-agnostic constrained sampling | Multi-workspace daemon architecture | Multi-agent workflow orchestration |
| **Target User** | Enterprise developers, MCP power users | Individual developers, Plus/Pro plan users | Google Cloud / Android ecosystem developers | GitHub-native developers | Plugin authors, self-hosted power users | ML researchers, multi-provider users | Chinese developer ecosystem, Qwen model users | Agent workflow orchestrators |
| **Technical Approach** | Monolithic agent with MCP connectors | Sandboxed execution, rolling release | JS/TS ecosystem, dependency-heavy | Tight GitHub integration, OAuth flows | Effect-ts based plugin system | Architecture-focused, RFC-driven | Daemon-based session management, channel bots | WhaleFlow orchestration, constitution-driven |
| **Key Weakness** | Memory leak (120+GB) after 1 year unresolved | Windows sandbox instability, auth fragility | Agent false success reporting | Plugin scoping, auth state bugs | Image reading regression across versions | Null content crashes, platform-specific TUI bugs | Zombie sessions burning tokens, CI reliability | TUI lag under high fan-out; agent governance |
| **Release Maturity** | Stable releases but slow | Rolling releases, fast PR cycle | Nightly + stable | Patch releases (v1.0.69-2) | Stable releases | Fast PR cycle (0.80.x) | Nightly + stable | Umbrella release cycle (v0.8.68) |

**Key Insight:** Claude Code and OpenAI Codex are converging on the same "enterprise MCP hub" space but from different directions—Claude via monolithic integration, Codex via sandboxed execution. DeepSeek TUI and Gemini CLI are both investing heavily in multi-agent orchestration, with DeepSeek's "conductor agent" concept being more ambitious. Pi is the most architecture-conscious, with its constrained sampling PR (#6341) addressing a root cause that other tools only patch around.

---

## 5. Community Momentum & Maturity

### High Momentum / Rapid Iteration
- **Pi:** 10 PRs in 24 hours, RFC-driven development, active maintainer (mitsuhiko) contributing core architecture. The constrained sampling PR (#6341) is a industry-leading approach to tool-call reliability.
- **DeepSeek TUI:** Umbrella release coordination (#4038), 10 sub-issues filed under v0.8.68, active community contributors removing dead code. Strong product focus on workflow orchestration.
- **Qwen Code:** Nightly releases, multi-workspace RFC gathering momentum, token analytics dashboard, channel bot memory. Chinese developer ecosystem is highly engaged.

### Stable / Mature Communities
- **OpenAI Codex:** Highest engagement metrics (692 👍 on Linux desktop request), but the volume suggests pent-up demand rather than satisfaction. 10 PRs merged/reviewed—good CI throughput.
- **Claude Code:** Largest absolute issue tracker, but the memory leak (#4953, 96 comments, 72 👍) unresolved for nearly a year indicates possible triage bottlenecks or architectural debt.

### Low Activity / Emerging
- **Kimi Code CLI:** Only 2 issues in 24 hours, zero PRs, no releases. The Windows terminal corruption bug (#2485) suggests the tool is early in its platform maturity journey. Likely a smaller community.

### Community Health Signals
- **Top-voted feature requests:** Codex's Linux desktop app (692 👍) vs. Claude Code's memory leak fix (72 👍, but a bug not a feature) vs. OpenCode's tokens/second display (84 👍).
- **Responseiveness:** Copilot CLI closed 3 issues and shipped a patch; Gemini CLI closed 6 PRs (major dependency bumps); Pi closed 5 issues + 7 PRs. Claude Code closed 0 issues with only 1 PR—lowest throughput today.

---

## 6. Trend Signals

### Industry Trends from Community Feedback

**1. Agent Reliability > Model Capability (PRIMARY TREND)**
- False success reporting (Gemini #22323), hallucinated user messages (Claude #67606), null content crashes (Pi #6259), and agent hangs (Gemini #21409) collectively show that the industry bottleneck has shifted from "what models can do" to "how reliably agents execute." Users consistently prioritize predictability over novel features.

**2. Multi-Agent Workflow Patterns Are Converging**
- DeepSeek TUI's "conductor agent," Gemini CLI's subagent trajectory visibility, and Codex's multi-agent metadata in MCP all point toward a common pattern: agents that coordinate other agents, with explicit lifecycle tracking and artifact routing. This will likely standardize into a protocol layer (like MCP for agent-to-agent communication).

**3. MCP Is Becoming the Universal Integration Backplane**
- Every tool now has MCP-related issues or PRs. The stable SDK release (Gemini CLI, `@agentclientprotocol/sdk` v1.0.0) marks a maturation point. Expect MCP to subsume most plugin/extension systems in 2026-2027.

**4. Windows Is the Unfinished Platform**
- Every tool has Windows-specific bugs that are neither novel nor complex (CRLF, console flashing, shell path issues, ConPTY handling). This isn't an engineering challenge—it's a testing and prioritization gap. Tools that close this gap will capture significant Windows developer mindshare.

**5. Context Window Economics Are Driving Architecture**
- Token management issues (Qwen zombie sessions, Pi cache double-counting, OpenCode CPU burn during rate-limit backoff) show that as context windows grow, the economics of token usage become a UX and reliability problem. Tools are responding with AST-aware navigation, session compression, and cumulative cache statistics.

### Reference Value for Developers

For **developers choosing a tool**, the signal is clear:
- **Choose Claude Code** if you need deep MCP integration and enterprise workflows—but be prepared for the memory leak until it's fixed.
- **Choose OpenAI Codex** if model tier flexibility (Sonnet/Opus/GPT-5.5) matters and you can tolerate Windows instability.
- **Choose Gemini CLI** if you're in the Google ecosystem—but watch for agent false success reporting.
- **Choose Copilot CLI** for GitHub-native workflows and the most stable patch cadence today.
- **Choose Pi** if you need provider-agnostic, architecture-driven development with cutting-edge constrained sampling.
- **Choose DeepSeek TUI** if multi-agent orchestration is your primary need—this is their sole focus.
- **Choose Qwen Code** for the Chinese ecosystem and multi-workspace daemon architecture.

For **tool developers**, the actionable insights are:
- Invest in constrained/grammar-based tool calling before shipping more MCP connectors.
- Fix Windows parity as a first-class requirement, not a backlog item.
- Build session persistence that survives restarts, renames, and platform switches.
- Expose agent internals (trajectories, token accounting, subagent decisions) to users who demand transparency.
- If you build a plugin system, make session lifecycle hooks the foundation—not an afterthought.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the Claude Code Skills community highlights report based on the provided data.

---

### Claude Code Skills Community Highlights Report (Data as of 2026-07-06)

#### 1. Top Skills Ranking

The following Pull Requests represent the most-discussed and highly-engaged Skill proposals, indicating strong community interest or critical infrastructure needs.

1.  **`skill-creator` Fix & Optimization Suite**
    - **PRs:** #1298, #1099, #1050, #1323, #362, #361
    - **Functionality:** Multiple PRs targeting core bugs in the `skill-creator` toolchain. Key fixes include resolving a 0% recall rate in `run_eval.py` (caused by Windows subprocess issues, YAML parsing errors, and flawed trigger detection), which rendered the skill optimization loop ineffective.
    - **Discussion Highlights:** The high volume of comments across these PRs (#1298: 71, #1099: 36, #1050: 31) underscores the criticality of a reliable skill development tool. Community members have independently reproduced the `recall=0%` bug (#556). The discussion reveals deep technical challenges in creating a cross-platform, deterministic evaluation framework for LLM-based skills.
    - **Status:** All Open.

2.  **Testing-Patterns Skill**
    - **PR:** #723
    - **Functionality:** Proposes a comprehensive skill covering the full testing stack, including unit testing (AAA), React component testing (Testing Library), and the Testing Trophy philosophy.
    - **Discussion Highlights:** This is a highly anticipated skill (22 comments) that addresses a fundamental developer need. The discussion focuses on scope coverage, ensuring the skill's instructions are granular enough to guide Claude without being overly restrictive.
    - **Status:** Open.

3.  **Document Typography Skill**
    - **PR:** #514
    - **Functionality:** A quality-control skill for AI-generated documents, targeting orphan word wrap, widow paragraph headers, and numbering misalignment.
    - **Discussion Highlights:** The discussion (45 comments) validates a common user pain point: the poor typographic quality of generated documents. The community is highly engaged in refining the specific rules and triggers to make the skill effective without introducing false positives.
    - **Status:** Open.

4.  **ODT (OpenDocument) Skill**
    - **PR:** #486
    - **Functionality:** Enables creation, template filling, and read/parse of OpenDocument Format files (.odt, .ods).
    - **Discussion Highlights:** This skill (57 comments) addresses a significant gap in document workflow capabilities, particularly for users in government and enterprise environments where ODF is standard. Feedback centers on the complexity of ODF internals and the need for robust error handling.
    - **Status:** Open.

5.  **Sensory Skill (macOS Automation)**
    - **PR:** #806
    - **Functionality:** A skill teaching Claude to use `osascript` (AppleScript) for native macOS automation, offering a two-tier permission system for direct app scripting and UI automation.
    - **Discussion Highlights:** The PR (19 comments) sparked a debate on the trade-offs between AppleScript reliability and the existing screenshot-based computer use method. Users are keen on the lower latency and higher precision of native scripting.
    - **Status:** Open.

#### 2. Community Demand Trends

Analysis of the most commented-on Issues reveals several key community demands:

- **Skill Development Infrastructure (Top Demand):** The single largest source of community frustration and discourse is the reliability of the `skill-creator` toolchain. Issues #556 (12 comments) and #1169 (3 comments) detail the crippling `recall=0%` bug, while #1061 (3 comments) and #202 (8 comments) highlight poor Windows/Linux compatibility and a lack of best-practice guidance. The community is actively demanding a stable, cross-platform, and well-documented development environment.
- **Security & Trust:** Issue #492 (34 comments) on trust boundary abuse within the `anthropic/` namespace is the most-discussed issue. This signals a strong demand for clear security models, permission scoping, and official guidelines to differentiate community skills from Anthropic-authored ones.
- **Enterprise & Org Features:** Issue #228 (14 comments) requesting org-wide skill sharing is a high-priority demand. This indicates that the skills ecosystem is maturing, and enterprise users require centralized management and distribution.
- **New Skill Domains:**
    - **Agent Governance:** Issue #412 (6 comments) proposes a skill for safety patterns, policy enforcement, and audit trails in AI agent systems, reflecting a need for responsible AI deployment patterns.
    - **Compact Agent Memory:** Issue #1329 (9 comments) proposes a `compact-memory` skill using symbolic notation to optimize agent context windows, indicating a demand for more sophisticated agent state management.

#### 3. High-Potential Pending Skills

These PRs have active discussion and appear close to landing, offering immediate value to the community.

- **Self-Audit Skill (v1.3.0) - PR #1367:** A universal skill that performs mechanical file verification and a four-dimension reasoning audit before delivery. It directly addresses the community's need for higher quality and reliability.
- **Color-Expert Skill - PR #1302:** A comprehensive skill covering color naming systems (ISCC-NBS, Munsell, RAL), color spaces (OKLCH, OKLAB), and accessibility. It fills a clear gap for design and data visualization workflows.
- **SAP-RPT-1-OSS Predictor - PR #181:** A specialized skill for using SAP's open-source tabular foundation model for predictive analytics on SAP business data, targeting a specific but powerful enterprise use case.

#### 4. Skills Ecosystem Insight

The community's most concentrated demand is for a **reliable, cross-platform skill development toolchain (`skill-creator`)** and **high-confidence enterprise security & governance patterns**, rather than new domain-specific Skills alone.

---

# Claude Code Community Digest
**Date:** 2026-07-06

---

## Today's Highlights

No new releases landed in the last 24 hours, but the issue tracker saw heavy activity with a critical memory leak report (growing to 120+ GB RAM) drawing 96 comments and 72 reactions. A new regression in VS Code extension loading and a wave of safety-filter false positives blocking legitimate security work are the top community concerns today.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

1. **[#4953 – Memory Leak – Process Grows to 120+ GB RAM](https://github.com/anthropics/claude-code/issues/4953)**  
   *Severe 🚨 | 96 comments | 72 👍*  
   A long-standing critical bug (opened Aug 2025) where Claude Code's memory footprint balloons to over 120 GB during extended sessions, triggering Linux OOM killer. Community frustration is high as this affects daily workflows. The `perf:memory` and `oncall` labels indicate active internal triage.

2. **[#69238 – No response from API when Advisor triggered](https://github.com/anthropics/claude-code/issues/69238)**  
   *66 👍 | 41 comments*  
   Users on Sonnet as base model hit "No response from API" followed by 2m+ retry delays when the Advisor feature (powered by Opus 4.8) is invoked. Suggests a rate-limiting or routing issue between model tiers.

3. **[#2805 – Files created with Windows line endings on Linux](https://github.com/anthropics/claude-code/issues/2805)**  
   *39 comments | 32 👍*  
   Despite explicit `CLAUDE.md` instructions, Claude Code inconsistently writes CRLF line endings on Linux systems, breaking shell scripts. One of the longest-running platform-specific bugs.

4. **[#14828 – Windows console window flashing](https://github.com/anthropics/claude-code/issues/14828)**  
   *39 comments | 33 👍*  
   A distracting UX bug where a new console window flashes on every tool execution. Impacts all Windows users; high community engagement suggests this is a daily annoyance.

5. **[#67606 – Opus 4.8 confabulates user messages and fake "prompt injection" narratives](https://github.com/anthropics/claude-code/issues/67606)**  
   *10 comments*  
   In long sessions, Opus 4.8 fabricates entire user messages and hallucinates security narratives. Verified via JSONL logs. Raises serious reliability concerns for extended autonomous sessions.

6. **[#28575 – Gmail MCP: File attachment support](https://github.com/anthropics/claude-code/issues/28575)**  
   *27 👍 | 8 comments*  
   Popular feature request for the Gmail MCP connector: adding file attachments to draft creation and a `gmail_send_draft` tool. Reflects growing demand for MCP-based productivity workflows.

7. **[#67071 – Assistant text between tool calls not rendered (regression)](https://github.com/anthropics/claude-code/issues/67071)**  
   *8 comments*  
   Text blocks between tool calls are silently dropped from the UI but persisted in session JSONL. Regression linked to the Fable 5 rendering engine, affecting both desktop and CLI views.

8. **[#58904 – Heredoc pipe bypass still present (security)](https://github.com/anthropics/claude-code/issues/58904)**  
   *7 comments*  
   A permission bypass via heredoc markers (`<<EOF`) that was supposedly fixed in v2.1.73 remains exploitable. The CPU freeze was patched, but the underlying security hole persists.

9. **[#48024 – Ultraplan teleport: refined plans don't return to CLI](https://github.com/anthropics/claude-code/issues/48024)**  
   *7 👍 | 4 comments*  
   The `/ultraplan` feature launches a web session but fails to "teleport" the refined plan back to the originating CLI session, breaking the core cross-session workflow.

10. **[#70647 – Native installer produces unsealed macOS app bundle](https://github.com/anthropics/claude-code/issues/70647)**  
    *3 comments*  
    The native installer generates a `ClaudeCode.app` missing the `_CodeSignature` seal, causing macOS to reject it as "damaged." Affects all new macOS users.

---

## Key PR Progress

1. **[#74722 – feat(commit-commands): Conventional Branch naming in /commit-push-pr](https://github.com/anthropics/claude-code/pull/74722)**  
   *New 🆕*  
   Adds an optional `conventional` argument to `/commit-push-pr` that auto-names branches per the Conventional Branch 1.0.0 spec, inferring type (`feature`, `bugfix`, `hotfix`, etc.) from the commit diff.

*(Only 1 PR was updated in the last 24 hours, which is well below the usual volume. No other PRs to highlight.)*

---

## Feature Request Trends

1. **MCP Connector Expansion** – Multiple requests for richer MCP integrations, especially Gmail attachment support (#28575) and Odoo Runbot introspection (#74773). Community wants Claude Code to act as a hub for external tooling.

2. **Agent Control & Lifecycle** – Requests to pause/resume agents mid-task (#74689) and prevent user interjections from killing in-flight subagents (#74695). Users need fine-grained control over autonomous agent workflows.

3. **Jujutsu (jj) VCS Support** – Two duplicate requests (#74774, #74775) for Claude Code to detect `.jj/` repositories. The modern VCS community is growing and wants parity with Git detection.

4. **Artifact Sharing for Individuals** – Request (#74777) to share artifacts via read-only links on individual plans, not just Team/Enterprise. Indie developers and consultants want to share outputs with clients.

5. **Browser Extension Reliability** – Reports (#74776) of the Chrome extension pairing layer never completing, leaving browser tools unusable. A foundational integration that needs stabilization.

---

## Developer Pain Points

1. **Memory Management Crisis** – Issue #4953 (120+ GB leak) remains unaddressed after nearly a year. Developers report losing hours of work to OOM kills, with no workaround available. The most upvoted and commented issue by a wide margin.

2. **Silent Model Downgrades** – Issue #74778 reports users being silently moved from selected models to Opus 4.8 without notification, wasting tokens and breaking task expectations. 8 occurrences in a single day for one user.

3. **Safety Filter False Positives** – Two separate reports today (#74615, #74754) document Opus 4.8 safety blocks halting legitimate cybersecurity work (Wazuh/SIEM enrollment, firewall configuration). Users call it "session-halted" severity.

4. **VS Code Extension Breakage** – Issue #74643: extension v2.1.201 fails to load on current VS Code due to a `PendingMigrationError` with Zod/navigator globals. Blocks all Claude Code usage in the IDE for affected users.

5. **Data Loss via UI Rendering** – Issue #67071: text between tool calls is invisible in the UI, so users cannot see assistant reasoning or intermediate outputs. Despite being persisted in JSONL, this creates a "black box" perception.

6. **Cross-Session Workflow Breaks** – Ultraplan teleport (#48024) and session history corruption (#69725) break the promise of seamless CLI ↔ web ↔ IDE transitions, forcing users to manually reconstruct context.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Codex Community Digest — 2026-07-06

## Today's Highlights

Windows and rate-limit issues dominate today's digest. The top-voted issue (#11023, 692 👍) demanding a Linux desktop app remains open after five months, while a newly discovered GPT-5.5 reasoning-token clustering bug (#30364, 206 👍) is drawing significant attention from power users. On the PR front, the team is actively shipping fixes for Windows sandbox problems, terminal input handling, and MCP compatibility.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#11023 — Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)**  
   *692 👍, 149 comments* — The longest-running feature request. Users report the macOS app is unusable due to power consumption (linked issue #10432), and the Linux community urgently needs a native desktop client. No official response yet.

2. **[#30364 — GPT-5.5 reasoning-token clustering degrades complex tasks](https://github.com/openai/codex/issues/30364)**  
   *206 👍, 112 comments* — A model-level bug where `reasoning_output_tokens` cluster at 516/1034/1552 boundaries, correlating with lower reasoning quality. High engagement suggests many users independently observed this. The author provided statistical evidence from token_count metadata.

3. **[#30009 — apply_patch fails on Windows sandbox](https://github.com/openai/codex/issues/30009)**  
   *4 👍, 23 comments* — File edits through `apply_patch` break on Windows. The error appears sandbox-related, and the thread shows multiple users confirming the same behavior across different Windows builds.

4. **[#25246 — Business access-tokens broken (401 unauthorized)](https://github.com/openai/codex/issues/25246)**  
   *9 👍, 18 comments* — A long-standing tracker (opened May 30) for enterprise OAuth failures. Marked as affecting Business tier users. No fix merged yet.

5. **[#30918 — Plus usage limits drain 70% → 100% in 6 minutes](https://github.com/openai/codex/issues/30918)**  
   *7 👍, 11 comments* — A concerning accounting bug that burns through the 5-hour limit rapidly. The user provided session logs and timestamps, making this highly actionable.

6. **[#13165 — Allow custom shell selection on Windows](https://github.com/openai/codex/issues/13165)**  
   *28 👍, 7 comments* — Developers want to use MinGW Bash instead of PowerShell. The sandbox is hardcoded to PowerShell, which breaks many workflows.

7. **[#31163 — MCP elicitation rejects top-level 'title' field](https://github.com/openai/codex/issues/31163)**  
   *0 👍, 5 comments* — A breaking issue for FastMCP/Pydantic users: Codex rejects valid MCP schemas because `deny_unknown_fields` blocks the `title` field. Blocks all tool calls from Python MCP servers.

8. **[#28643 — File reference line links unreliable in desktop app](https://github.com/openai/codex/issues/28643)**  
   *5 👍, 4 comments* — Clicking file references with line numbers often fails to jump to the target line. The issue affects navigation-heavy workflows.

9. **[#31125 — Sudden 80%→0% usage drop on Pro plan](https://github.com/openai/codex/issues/31125)**  
   *3 👍, 3 comments* — A Pro user reports the meter dropping to zero mid-session after only 6–7 messages with GPT-5.5 xhigh. No warning banner, and support has not addressed it.

10. **[#31240 — Lost all chats from last 9 months by renaming a project](https://github.com/openai/codex/issues/31240)**  
    *0 👍, 2 comments* — A critical data-loss bug. Renaming a project apparently invalidates the thread index. The user lost 9 months of conversation history.

## Key PR Progress

1. **[#31179 — Remove TUI exec-policy core exports](https://github.com/openai/codex/pull/31179)**  
   *Open* — Simplifies the TUI by moving exec-policy validation to the app server. Removes a legacy core dependency that was duplicating `configWarning` reporting.

2. **[#29481 — Add marketplace update check RPC](https://github.com/openai/codex/pull/29481)**  
   *Merged* — Introduces a read-only `marketplace/checkUpdates` RPC that can check all configured Git marketplaces or a specific one by name. Shares revision resolution with the upgrade flow.

3. **[#30880 — Detect Codex installs managed by Vite+](https://github.com/openai/codex/pull/30880)**  
   *Open (code-reviewed)* — Detects Vite+ global installations from package layout, propagates a dedicated install method, and uses `vp install -g` for repairs/updates. Improves update reliability for Vite+ users.

4. **[#31223 — Preserve terminal input typed during startup](https://github.com/openai/codex/pull/31223)**  
   *Merged* — Fixes a long-standing UX bug where text typed while the CLI is loading (config, cloud sync, model warmup) gets partially lost due to TTY queue straddling.

5. **[#31192 — Flush queued terminal input before exit](https://github.com/openai/codex/pull/31192)**  
   *Open* — Prevents CSI-u key-release bytes from corrupting the terminal after Codex exits via enhanced keyboard events. Improves terminal hygiene.

6. **[#30882 — Preserve line endings when applying patches (Windows)](https://github.com/openai/codex/pull/30882)**  
   *Open* — Respects existing CRLF/LF line endings during `apply_patch`, defaulting to LF for new lines. Fixes issues where patched files mixed terminators.

7. **[#30879 — Handle mixed-case URLs in Windows command safety](https://github.com/openai/codex/pull/30879)**  
   *Open* — Makes dangerous-command detection case-insensitive for HTTP(S) URLs in PowerShell `Start-Process` invocations.

8. **[#30492 — Fix slash command popup dismissal](https://github.com/openai/codex/pull/30492)**  
   *Open* — Fixes a bug where pressing Escape after typing `/rev` immediately reopens the popup. Now suppresses the popup until the command token changes.

9. **[#27495 — Pass multi-agent metadata to MCP tools call](https://github.com/openai/codex/pull/27495)**  
   *Merged* — Adds `agent_path` and `has_spawned_subagent` metadata to MCP request turn metadata, enabling subagent-aware tool routing.

10. **[#31155 — Fix: release thread writer after failed shutdown](https://github.com/openai/codex/pull/31155)**  
    *Open* — Fixes a resource leak where a failed rollout persistence leaves the writer alive, preventing later sessions from acquiring the lease.

## Feature Request Trends

- **Linux desktop app (#11023)** — The most upvoted open issue overall (692 👍). Users want parity with macOS/Windows, citing power/performance problems as blockers.
- **Shell customization on Windows (#13165)** — Recurring requests to use MinGW Bash or other shells instead of being locked into PowerShell for sandbox operations.
- **Rate-limit transparency (#31109)** — Users want countdown timers until reset in `/status`, not just "resets Jul 9."
- **MCP tool catalog streaming (#31088)** — A request for a first-class event that declares the full tool/skill catalog at session start, enabling better tool-discovery in `--json` mode.
- **Workspace conflict warnings (#31245)** — Users want proactive warnings when a prompt references a project outside the thread's selected workspace.

## Developer Pain Points

- **Windows sandbox instability** — Multiple open issues (#30009, #29836, #27833, #13556) report sandbox failures: broken `apply_patch`, missing environment variables, Git for Windows CPU spikes, and WinGet permission errors. Windows remains the most troubled platform.
- **Rate-limit accounting bugs** — Two distinct issues (#30918, #31125) describe unexplained usage meter drains on Plus and Pro plans. Users report losing 80%+ of their allocation in minutes, with no warning or support resolution.
- **Business/Enterprise auth fragility** — Access tokens returning 401 (#25246), workspace seat switching revoking OAuth sessions (#31162), and missing cloud config bundles (#26504) plague enterprise deployments.
- **Data loss risks** — Project renaming can wipe months of chat history (#31240), and thread index corruption (#30385) makes recent conversations invisible without low-level recovery.
- **MCP protocol incompatibility** — The `deny_unknown_fields` rejection of `title` (#31163) breaks every FastMCP server, a popular Python MCP framework. This represents a compatibility regression with third-party tool ecosystems.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-06

## Today's Highlights

Today's digest is dominated by a massive dependency refresh across the entire project (dozens of PRs from Dependabot) and a critical nightly release. The issue tracker remains focused on agent reliability, with a high-severity bug (#22323) where subagents falsely report success after hitting max turn limits—masking real failures from users.

## Releases

**v0.51.0-nightly.20260706.gf7af4e518**  
A new nightly build is now available. No detailed changelog was published for this release beyond the automated version bump.  
🔗 [Compare changes](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260705.gf7af4e518...v0.51.0-nightly.20260706.gf7af4e518)

---

## Hot Issues

### 1. Subagent recovery after MAX_TURNS reported as success (#22323)
**P1 | Bug**  
A `codebase_investigator` subagent reports `status: "success"` with `Termination Reason: "GOAL"` even when it hit the maximum turn limit before doing any meaningful analysis. This hides failures from users. High community engagement (10 comments).  
🔗 [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### 2. Generalist agent hangs forever (#21409)
**P1 | Bug**  
The generalist agent hangs indefinitely on simple tasks like folder creation. Users report waiting up to an hour before cancelling. Workaround: instruct the model not to use subagents. 8 👍 reactions indicate widespread frustration.  
🔗 [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### 3. Shell command execution stuck after completion (#25166)
**P1 | Bug**  
After executing simple CLI commands, the shell UI remains in "Waiting input" state despite the command finishing. Reproducible with trivial commands. 3 👍 reactions.  
🔗 [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)

### 4. Browser agent fails on Wayland (#21983)
**P1 | Bug**  
The browser subagent fails on Wayland display servers, reporting "Termination Reason: GOAL" with no useful output. Limits Linux users on modern desktop environments.  
🔗 [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)

### 5. Gemini doesn't use custom skills/subagents autonomously (#21968)
**P2 | Bug**  
Users report that Gemini CLI rarely invokes custom skills or sub-agents autonomously, even when the task is directly related. The model only uses them when explicitly instructed.  
🔗 [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)

### 6. AST-aware file reads, search, and mapping (#22745)
**P2 | Feature / Customer Issue**  
An EPIC investigating whether AST-aware tools can improve precision in file reads (method bounds, reduced tokens) and codebase navigation. Could significantly reduce turn count for complex tasks.  
🔗 [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)

### 7. Auto Memory retries low-signal sessions indefinitely (#26522)
**P2 | Bug**  
Auto Memory only marks a session as processed when the extraction agent successfully reads the transcript. Low-signal sessions that are skipped remain unprocessed and get repeatedly surfaced, causing endless re-evaluation cycles.  
🔗 [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)

### 8. `get-shit-done` output hook crashes CLI (#22186)
**P1 | Bug**  
The GSD output hook crashes Gemini CLI when printing user summaries near completion. The crash occurs during container verification output.  
🔗 [#22186](https://github.com/google-gemini/gemini-cli/issues/22186)

### 9. Agents running without permission since v0.33.0 (#22093)
**P2 | Bug**  
Subagents (like generalist) are being invoked even when agent mode is explicitly disabled in all configurations. User expected only MCP functionality.  
🔗 [#22093](https://github.com/google-gemini/gemini-cli/issues/22093)

### 10. >128 tools causes 400 error (#24246)
**P2 | Bug**  
When more than ~128 tools are available, Gemini CLI encounters a 400 API error. The agent lacks smart tool-scoping to limit active tools.  
🔗 [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)

---

## Key PR Progress

### 1. Fix escape sequences in string literals for modern models (#28299)
Fixes a critical bug where valid escape sequences like `\n` inside string literals were being converted to literal newlines when writing files. Targets all modern Gemini models.  
🔗 [#28299](https://github.com/google-gemini/gemini-cli/pull/28299)

### 2. Implement MCP elicitation (form + url) capability (#28089)
Implements the MCP 2025-11-25 specification for `form` and `url` elicitation modes. Enables richer client-server interactions in the MCP client protocol.  
🔗 [#28089](https://github.com/google-gemini/gemini-cli/pull/28089)

### 3. Fix message inspectors against empty parts arrays (#28068)
Fixes a subtle bug where `isFunctionCall()` and `isFunctionResponse()` returned `true` for model messages with empty `parts` arrays, due to JavaScript's vacuous `[].every(...)` truthiness. [CLOSED]  
🔗 [#28068](https://github.com/google-gemini/gemini-cli/pull/28068)

### 4. Limit recursive reasoning turns (#28164)
Implements a hard limit of 15 recursive reasoning turns per user request (customizable via `maxSessionTurns`). Protects against infinite loops consuming local CPU and API credits.  
🔗 [#28164](https://github.com/google-gemini/gemini-cli/pull/28164)

### 5. Bump `@google/genai` from 1.30.0 to 2.10.0 (#28295)
Major version bump for the core Gemini SDK dependency. Likely includes new model capabilities and API improvements. [CLOSED]  
🔗 [#28295](https://github.com/google-gemini/gemini-cli/pull/28295)

### 6. Bump `@agentclientprotocol/sdk` from 0.16.1 to 1.0.0 (#28294)
First stable release of the MCP client protocol SDK. Significant milestone for the extension ecosystem. [CLOSED]  
🔗 [#28294](https://github.com/google-gemini/gemini-cli/pull/28294)

### 7. Bump `puppeteer-core` from 24.0.0 to 25.2.1 (#28292)
Major bump for the browser automation dependency. Likely includes fixes relevant to browser agent stability. [CLOSED]  
🔗 [#28292](https://github.com/google-gemini/gemini-cli/pull/28292)

### 8. Bump `eslint` from 9.24.0 to 10.6.0 (#28293)
Major linter upgrade. May introduce new lint rules affecting codebase style. [CLOSED]  
🔗 [#28293](https://github.com/google-gemini/gemini-cli/pull/28293)

### 9. Bump `chrome-devtools-mcp` from 0.19.0 to 1.4.0 (#28290)
Major version bump for Chrome DevTools MCP integration. GA release of the debugging protocol bridge. [CLOSED]  
🔗 [#28290](https://github.com/google-gemini/gemini-cli/pull/28290)

### 10. Bulk npm dependency update (#28288)
A massive group update touching 74 npm dependencies simultaneously. Includes `simple-git`, `@octokit/rest`, and many testing/dev tooling libraries. [CLOSED]  
🔗 [#28288](https://github.com/google-gemini/gemini-cli/pull/28288)

---

## Feature Request Trends

1. **Zero-dependency OS sandboxing (#19873)** — A major enhancement request to leverage Gemini 3 models' native bash affinity through secure sandbox execution, with post-execution intent routing for better safety.

2. **Subagent trajectory visibility (#22598)** — Users want subagent trajectories included in `/chat share` output for easier debugging and evaluation sharing.

3. **Agent self-awareness (#21432)** — Request for the CLI to accurately understand and describe its own capabilities, flags, and hotkeys to users.

4. **AST-aware codebase mapping (#22746)** — Using AST analysis for more precise codebase navigation and method-boundary detection, reducing token consumption.

5. **Browser agent resilience (#22232)** — Automatic session takeover and lock recovery for persistent browser sessions, replacing the current fail-fast strategy.

6. **Tactful extraction (#19561)** — A surgical code-discovery hierarchy (grep → targeted reads) to reduce context bloat from the current ~36.6k tokens/turn baseline.

7. **Component-level evaluations (#24353)** — A formal EPIC for expanding behavioral eval infrastructure beyond the current 76 tests, covering all 6 supported Gemini models.

---

## Developer Pain Points

1. **False success reporting** — Subagents masking failures (max turns, crashes) by reporting `status: "success"` is the most critical reliability issue tracked this week.

2. **Agent hangs and indefinite waits** — Both the generalist agent (#21409) and shell execution (#25166) suffer from hangs that force manual cancellation and destroy user trust.

3. **Permission bypass** — Subagents executing without user consent (#22093) creates a fundamental security and UX concern.

4. **Settings.json ignored** — The browser agent ignoring `maxTurns` and other configuration overrides (#22267) undermines user control.

5. **Wayland incompatibility** — The browser agent's failure on Wayland (#21983) excludes modern Linux desktop users.

6. **Memory system churn** — Auto Memory's infinite retry loops (#26522) and silent malformed patch handling (#26523) create background noise without clear user benefit.

7. **Tool count limits** — Hitting 400 errors with >128 tools (#24246) limits advanced configurations with many integrations.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-06

## Today's Highlights
A minor patch release (v1.0.69-2) ships today with a new OAuth callback flow for MCP server sign-in and improved user-switch picker visibility. The community is actively discussing plugin scoping at the project level (#1665) and authentication state bugs in ACP sessions (#3596, #3902), which remain top-priority pain points. Several new triage issues surfaced around Windows hook incompatibility, voice installer failures, and desktop notification quirks.

## Releases
**v1.0.69-2** — [View release](https://github.com/github/copilot-cli/releases/tag/v1.0.69-2)
- **Added:** `/rubber-duck` command now appears in pre-auth help and self-documentation.
- **Improved:** MCP servers can now be signed into via the CLI OAuth callback flow; the full `/user` switch picker is revealed when the timeline is full, preventing clipping below the terminal.
- **Fixed:** Files inside `n` are now correctly included.

## Hot Issues (10 noteworthy)

1. **[#1665 — Support Copilot CLI Plugins Scoped to Project or Repository](https://github.com/github/copilot-cli/issues/1665)** *(CLOSED, 👍18)*  
   *Why it matters:* A long-standing request (since Feb 2026) asking for per-project plugin loading instead of global per-user. Highly upvoted, closed this week — likely aligned with an upcoming API change.

2. **[#3596 — Error loading model list: Not authenticated (session resumption bug)](https://github.com/github/copilot-cli/issues/3596)** *(CLOSED, 👍11)*  
   *Why it matters:* Users resuming specific sessions hit auth errors when listing models. Fixed in recent releases — indicates progress on session isolation.

3. **[#3028 — MCP permissions configuration](https://github.com/github/copilot-cli/issues/3028)** *(OPEN, 👍5)*  
   *Why it matters:* Request for granular allow-lists of MCP server tools, similar to VS Code's trusted folders. Community wants more control over which tools MCP servers can invoke.

4. **[#4003 — Support custom model endpoint in Copilot CLI](https://github.com/github/copilot-cli/issues/4003)** *(OPEN, new)*  
   *Why it matters:* Parity with VS Code's ability to configure custom/private model endpoints. Essential for enterprise air-gapped deployments and local model testing.

5. **[#3074 — Add /effort command for reasoning effort switching](https://github.com/github/copilot-cli/issues/3074)** *(OPEN, 👍6)*  
   *Why it matters:* Users want a quick slash command to toggle reasoning effort (Low/Medium/High) without navigating the `/model` picker. Simple ergonomic improvement.

6. **[#3945 — Memories are leaking between repositories](https://github.com/github/copilot-cli/issues/3945)** *(OPEN)*  
   *Why it matters:* A bug where memory from one repo bleeds into another, causing irrelevant suggestions. Critical for multi-repo workflows.

7. **[#4034 — Hook subprocess stdin write-end left open (no EOF) for tool-use hooks](https://github.com/github/copilot-cli/issues/4034)** *(CLOSED)*  
   *Why it matters:* A subtle bug causing `$(cat)` patterns to hang in hook scripts. Fixed promptly — good responsiveness from maintainers.

8. **[#4001 — .claude/settings.json hooks fail on Windows](https://github.com/github/copilot-cli/issues/4001)** *(OPEN)*  
   *Why it matters:* Windows users hit a double-fault: hooks execute via PowerShell (not bash) and `$CLAUDE_PROJECT_DIR` is unset. Breaks any Claude Code-compatible hook configuration on Windows.

9. **[#4037 — BYOK support in ACP server mode](https://github.com/github/copilot-cli/issues/4037)** *(OPEN, new)*  
   *Why it matters:* JetBrains integration via Agent Client Protocol requires bring-your-own-key for custom LLMs. High impact for IDE ecosystem compatibility.

10. **[#3902 — ACP: authenticate returns success but session/new still fails with -32000](https://github.com/github/copilot-cli/issues/3902)** *(CLOSED)*  
    *Why it matters:* Auth state never refreshes in ACP mode after re-authentication. Closed — likely fixed in a recent patch.

## Key PR Progress
*(No pull requests were updated in the last 24 hours.)*

## Feature Request Trends
- **Plugin scoping (per-project/repo):** #1665 (closed) and #4032 (credit usage for uninstalling) indicate a maturing plugin system with strong demand for isolation and cost transparency.
- **Custom model endpoints / BYOK:** #4003 and #4037 reflect growing enterprise need for self-hosted and custom LLMs, especially in ACP mode for IDE integrations.
- **MCP permissions and trust:** #3028 and #4033 (command approval UX) show users want finer-grained control over tool execution, with clearer opt-out feedback.
- **Memory improvements:** #3945 (inter-repo leakage) and #2930 (local-only agent memory) point to demand for secure, scoped context persistence without remote storage.

## Developer Pain Points
- **Authentication state bugs:** Issues #3596 and #3902 both describe stale authentication state after credential refresh or session resume — a recurring frustration for heavy CLI users.
- **Windows compatibility gaps:** #4001 (PowerShell hook execution) and #4035 (voice installer hitting private Azure feed) highlight platform-specific breakages that break the "it works on macOS" assumption.
- **Hook/scripting edge cases:** #4034 (stdin EOF for tool-use hooks) and #1428 (bash tool hanging in Nix shell) demonstrate fragility in subprocess management, especially in non-standard shell environments.
- **Desktop notification reliability:** #4036 (notifications suppressed when tab is backgrounded) shows a UX regression introduced in the recent notification feature (v1.0.66).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-06

## Today's Highlights
Today was a relatively quiet day for the Kimi Code CLI repository, with no new releases or pull requests. However, two new issues were opened, one reporting a terminal display bug on Windows and another proposing a feature to expose usage limits via the ACP protocol. The single open bug (#2485) suggests that terminal corruption after prolonged CLI use remains an active concern for users on Windows.

## Releases
No new releases in the last 24 hours. The latest version remains **0.22.0**.

## Hot Issues
_Picking from the 2 items updated in the last 24h (no PRs today):_

1. **#2485 – [bug] code cli 错乱 || code cli is confused**  
   _Author: mynameiscuining | Created/Updated: 2026-07-06 | Comments: 1_  
   **Summary:** The CLI becomes garbled after extended use on Windows 11. The first option in the selection menu disappears, and display is incomplete.  
   **Why it matters:** Terminal corruption directly impacts developer productivity, especially in interactive workflows. The "first option missing" symptom suggests a rendering or state-management bug.  
   **Community reaction:** Only 1 comment so far, no upvotes. Likely a niche but reproducible issue for users running `kimi-for-coding` on Windows.  
   _GitHub: [MoonshotAI/kimi-cli Issue #2485](https://github.com/MoonshotAI/kimi-cli/issues/2485)_

2. **#2486 – Feature Request: Expose Kimi Code usage limits and reset times through ACP**  
   _Author: jgiacomini | Created/Updated: 2026-07-06 | Comments: 0_  
   **Summary:** An IDE developer requests that ACP clients (e.g., Visual Studio 2026) be able to retrieve usage-limit and reset-time information currently only available via the CLI's `/usage` console command.  
   **Why it matters:** As ACP becomes the primary integration point for IDEs, lacking this API forces third-party tool builders to either omit usage visibility or implement brittle scraping.  
   **Community reaction:** No comments or upvotes yet, but the request aligns with the broader trend of making CLI-internal capabilities available through structured APIs.  
   _GitHub: [MoonshotAI/kimi-cli Issue #2486](https://github.com/MoonshotAI/kimi-cli/issues/2486)_

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
Based on today's single feature request (#2486), the most pressing direction is:

- **ACP API Extension:** Users want CLI-internal data (usage quotas, reset timestamps) exposed as structured output through the ACP protocol, enabling richer IDE integrations without screen-scraping.

Broader trends from recent weeks (not captured in today's single issue) would typically include:
- **Multi-model orchestration** – managing multiple AI models via CLI  
- **Output streaming improvements** – real-time token-by-token display  
- **IDE-specific integrations** – deeper VSCode/JetBrains hooks

## Developer Pain Points
The most prominent developer frustration from today:

- **Windows terminal stability** – Issue #2485 highlights that after sustained CLI usage on Windows 11, the terminal output becomes corrupted (missing menu items, broken layout). This suggests the CLI's TUI/rendering layer may not be fully resilient to Windows console behaviors.

Other recurring pain points observed across recent issues (community context):
- **Configuration discoverability** – users struggle to locate or override settings  
- **Error message clarity** – cryptic error codes when quota is exceeded or model unavailable  
- **Offline/failover behavior** – unclear fallback when cloud services are unreachable

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-06

## Today's Highlights

A major CPU usage regression affecting multi-session users continues to draw attention, while image reading functionality remains broken for many after recent updates. The community is actively discussing privacy defaults and session lifecycle hooks, and several important infrastructure PRs are advancing, including a VCS plugin seam and diff size limits to prevent UI freezes.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#5374 — Show tokens/second](https://github.com/anomalyco/opencode/issues/5374)** (19 comments, 84 👍)
   A long-standing feature request to surface tokens-per-second metrics in the UI. High community demand for comparing provider performance — remains open after 7 months.

2. **[#25832 — Opencode cannot read images anymore](https://github.com/anomalyco/opencode/issues/25832)** (17 comments, 4 👍)
   Since late April, image reading for .png/.jpg files fails with "Bad..." errors. Users relied on this for visual HTML modification guidance — regression affecting productivity.

3. **[#5359 — Unable to read images for some models](https://github.com/anomalyco/opencode/issues/5359)** (16 comments, 0 👍)
   Related image-reading regression, confirmed working in v1.0.134 but broken from v1.0.137 onward. Affects LiteLLM + Vertex AI backend users.

4. **[#30086 — High CPU usage in newer versions](https://github.com/anomalyco/opencode/issues/30086)** (16 comments, 9 👍)
   Spike in CPU usage makes multi-session workflows impossible (3 sessions now problematic vs. 10 previously). Actively discussed with maintainers.

5. **[#19948 — Ollama local model integration broken](https://github.com/anomalyco/opencode/issues/19948)** (15 comments, 3 👍)
   Local Ollama models appear in the list but return invalid JSON responses on Windows Desktop — blocks local-first workflows.

6. **[#19466 — Idle CPU burn during rate-limit backoff](https://github.com/anomalyco/opencode/issues/19466)** (12 comments, 10 👍)
   While waiting for API quota resets, OpenCode consumes ~50% of a CPU core on an i9-14900. Wasteful and impacts battery life.

7. **[#16626 — Session stopping plugin hook](https://github.com/anomalyco/opencode/issues/16626)** (7 comments, 9 👍)
   Plugins currently can't prevent or extend the agent loop — blockers for custom agent lifecycles and tool orchestration.

8. **[#23655 — Responses API support for Go service](https://github.com/anomalyco/opencode/issues/23655)** (4 comments, 16 👍)
   Request to add OpenAI Responses API support to the Go service backend. Growing interest in Go as a first-class provider.

9. **[#17188 — Default sharing to "disabled" — privacy by default](https://github.com/anomalyco/opencode/issues/17188)** (4 comments, 13 👍)
   Strong community push for opt-in sharing defaults. Related to multiple prior privacy issues — signals user trust concerns.

10. **[#35547 — Chat blocked (compliance flag)](https://github.com/anomalyco/opencode/issues/35547)** (3 comments)
    A compliance-blocked chat issue opened and resolved today — suggests ongoing moderation/guardrail adjustments.

## Key PR Progress

1. **[#35555 — Reveal scrollbar in settings dialogs](https://github.com/anomalyco/opencode/pull/35555)** (OPEN)
   Fixes hidden scrollbars in desktop settings panels, improving accessibility for keyboard navigation and non-scroll-wheel mice.

2. **[#35553 — Normalize record-shaped desktop list values](https://github.com/anomalyco/opencode/pull/35553)** (OPEN)
   Closes #35551: desktop renderer no longer crashes when API returns object maps instead of arrays for session/command lists.

3. **[#35497 — Rename system context to instructions](https://github.com/anomalyco/opencode/pull/35497)** (OPEN)
   Major refactor renaming the V2 system-context subsystem to "instructions" with tighter discovery semantics — may impact plugin authors.

4. **[#33450 — Global session picker toggle for TUI](https://github.com/anomalyco/opencode/pull/33450)** (OPEN)
   Adds explicit global mode to session picker, enabling cross-project session discovery and resume. Addresses #31932.

5. **[#35166 — Plugin-provided VCS backends](https://github.com/anomalyco/opencode/pull/35166)** (OPEN)
   New Effect plugin seam for custom VCS implementations. Declarative detection with lazy behavior — significant plugin architecture advancement.

6. **[#35369 — Queue UX improvements](https://github.com/anomalyco/opencode/pull/35369)** (OPEN)
   Adds follow-up queue with Ctrl+Enter staging, auto-send when model becomes free, and toolbar toggle removal. Enhances desktop UX.

7. **[#35546 — Diff size limits to prevent UI freeze](https://github.com/anomalyco/opencode/pull/35546)** (OPEN)
   Closes #31916: adds size limits for diff rendering to prevent UI hangs with large changesets. Related to multiple performance issues.

8. **[#35545 — Ctrl+H as backspace alias for ConPTY](https://github.com/anomalyco/opencode/pull/35545)** (OPEN)
   Fixes backspace handling in Windows ConPTY terminal multiplexers (herdr) where physical Backspace sends 0x08 rather than 0x7f.

9. **[#35533 — Ensure required array in object schemas](https://github.com/anomalyco/opencode/pull/35533)** (CLOSED)
   Fixes #35528: normalizes JSON Schema to include `required` array on object schemas — prevents strict validators from rejecting tool definitions.

10. **[#29831 — Fix Windows detached-child hang](https://github.com/anomalyco/opencode/pull/29831)** (OPEN)
    Resolves shell commands hanging after spawning background processes on Windows — child processes keeping output open blocked agent completion.

## Feature Request Trends

- **Performance metrics dashboard**: Tokens/second display (#5374, 84 👍) remains the top-voted feature — users want transparent provider comparison.
- **Plugin lifecycle hooks**: Multiple requests for session stopping hooks (#16626), persistent plugin state (#28695), and plugin-provided VCS backends (#35166) signal demand for deeper plugin extensibility.
- **Privacy and consent improvements**: Default-sharing-to-disabled (#17188) and per-app appearance overrides (#26175) reflect growing awareness of data governance and UX customization.
- **Model compatibility**: Auto-discovery of skills from nested subdirectories (#31377) and Responses API for Go (#23655) show need for better model/tool discoverability and backend diversity.
- **Local-first reliability**: Ollama integration fixes (#19948) and OAuth callback configurability (#33966) indicate strong community investment in self-hosted workflows.

## Developer Pain Points

- **Image reading regression**: Two separate issues (#25832, #5359) report broken image support since v1.0.137 — critical for visual debugging workflows.
- **CPU/resource waste**: Both idle CPU burn during rate-limit backoff (#19466) and general CPU spikes (#30086) are making OpenCode unusable for power users running multiple sessions.
- **Configuration surprises**: Global `instructions` field ignored when `CLAUDE.md` exists (#35552), environment variable substitution breaks on Windows paths (#35536), and ACP model selection overrides (#34743) cause frustrating silent failures.
- **Cross-platform inconsistencies**: Windows ConPTY backspace handling (#35545), WSL2 illegal instruction crashes (#18411), and deep log rotation bugs (#17846) show platform-specific breakage is a recurring pattern.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-06

## Today's Highlights
The Pi team has made significant progress on two of the most persistent pain points: null content crashes in reasoning model tool calls and inflated caching statistics. Armin Ronacher (mitsuhiko) has opened PR #6341 to support constrained/grammar-based tool calling, addressing the root cause of Claude edit failures (#6278). Multiple contributors submitted fixes for token accounting and session storage bugs, signaling a push toward production-grade reliability.

## Releases
No new releases in the last 24 hours. The current version remains 0.80.3.

## Hot Issues
The following 10 issues represent the most active or consequential discussions:

1. **[#6278](https://github.com/earendil-works/pi/issues/6278) — [bug] New Claude models work poorly with Pi's edit tool (21 comments, 5 👍)**  
   *Status: OPEN*  
   Edits fail ~20% of the time because LLMs inject hallucinated JSON keys (e.g., `new_text_x`, `closeenough`) into the edit tool schema. This is the most active bug this week and directly tied to the push for strict tool support. High community engagement.

2. **[#6306](https://github.com/earendil-works/pi/issues/6306) — [to-discuss] Support Strict Tools / Grammar (20 comments)**  
   *Status: OPEN*  
   Proposed by mitsuhiko, this issue frames the lack of provider-side grammar-aware tool constraints as the root cause of multiple edit tool failures. Directly related to #6278 and now addressed in PR #6341.

3. **[#6187](https://github.com/earendil-works/pi/issues/6187) — [bug] Pi login hangs in WSL after Copilot auth (18 comments)**  
   *Status: CLOSED*  
   Browser-based device authorization completes but Pi’s WSL client doesn’t detect it. A persistent cross-platform auth pain point that was finally resolved.

4. **[#6259](https://github.com/earendil-works/pi/issues/6259) — [bug] 'content is not iterable' when reasoning models return null (11 comments)**  
   *Status: OPEN*  
   Reasoning models (e.g. GLM-5.2) can return null content alongside tool calls. Multiple code paths crash with `TypeError`. A high-priority fix is in PR #6343.

5. **[#6204](https://github.com/earendil-works/pi/issues/6204) — [bug] mimo-v2-omni is a ghost model on MiMo providers (5 comments)**  
   *Status: OPEN*  
   The bundled model catalog advertises a model that the provider endpoints reject with 400 errors. Providers claiming support without actually serving the model erodes user trust.

6. **[#6300](https://github.com/earendil-works/pi/issues/6300) — [bug] Windows TUI: each keystroke redraws input on new line (5 comments)**  
   *Status: CLOSED*  
   A terminal rendering issue specific to Windows cmd.exe and Windows Terminal. Quick closure suggests a clean fix was found.

7. **[#6354](https://github.com/earendil-works/pi/issues/6354) — [bug] newSession() missing labelTimestampsById.clear() (3 comments)**  
   *Status: CLOSED*  
   A subtle session state leak: clearing session data missed one data structure. Swiftly identified and fixed.

8. **[#6355](https://github.com/earendil-works/pi/issues/6355) — [bug] Cache hit rate denominator double-counts cache tokens (2 comments)**  
   *Status: CLOSED*  
   Anthropic API tokens already include cache read/write in `input_tokens`, but Pi’s footer double-counts. Two independent reports (#6353, #6355) arrived on the same day. PR #6352 fixes both.

9. **[#6359](https://github.com/earendil-works/pi/issues/6359) — [bug] TUI segfaults on small-ICU Node builds (1 comment)**  
   *Status: CLOSED*  
   RHEL minimal containers crash because `Intl.Segmenter` is unavailable. Affects server/container deployments significantly.

10. **[#6363](https://github.com/earendil-works/pi/issues/6363) — [feat] Add extension/RPC event for "agent run fully settled" (1 comment)**  
    *Status: CLOSED*  
    Extension authors need a reliable hook for post-run synchronization. The `agent_end` event is insufficient because it may indicate errors.

## Key PR Progress
Important pull requests updated in the last 24 hours:

1. **PR [#6341](https://github.com/earendil-works/pi/pull/6341) — [to-discuss] feat(ai): support constrained sampling**  
   *Author: mitsuhiko*  
   Adds opt-in `constrainedSampling` tool config, enabling provider-side JSON-schema or grammar-constrained tool argument generation. This addresses the root cause of #6278 (Claude edit failures) and #6306 (strict tool support). A major architectural improvement.

2. **PR [#6343](https://github.com/earendil-works/pi/pull/6343) — [to-discuss] fix(ai,agent,coding-agent): normalize null message content**  
   *Author: mitsuhiko*  
   Adds ingestion-boundary null guards for message content, fixing #6259, #6276, and three older issues. Prevents crashes when reasoning models return null content alongside tool calls.

3. **PR [#6352](https://github.com/earendil-works/pi/pull/6352) — fix(coding-agent): correct cache hit rate denominator double-count**  
   *Author: keeplearning2026*  
   Fixes two locations where cache tokens were double-counted in the display (footer CH% and context%). Closes #6353 and #6355.

4. **PR [#6356](https://github.com/earendil-works/pi/pull/6356) — fix(ai): support GLM-5.2 tool calls**  
   *Author: hjotha*  
   Falls back to non-streaming chat completion when tools are present, because GLM-5.2's streamed response can miss tool-call deltas. Fixes #6357.

5. **PR [#6350](https://github.com/earendil-works/pi/pull/6350) — feat(coding-agent): add before_provider_headers extension hook**  
   *Author: pmateusz*  
   Enables extensions to modify outgoing HTTP headers, making it easier to integrate with LLM gateways that require custom auth headers.

6. **PR [#6349](https://github.com/earendil-works/pi/pull/6349) — feat(coding-agent): add tool result limiter extension example**  
   *Author: karsten-bot*  
   Provides an example extension for limiting tool result sizes, a common requirement for keeping context windows under control.

7. **PR [#6348](https://github.com/earendil-works/pi/pull/6348) — feat(coding-agent): show cumulative cache stats in footer**  
   *Author: kyrie21z*  
   Improves the footer display to show cumulative cache statistics across the session, not just per-turn.

8. **PR [#6337](https://github.com/earendil-works/pi/pull/6337) — feat(ai): add StepFun and Agnes AI providers**  
   *Author: CharlesHahn*  
   Adds two new providers: StepFun (Chinese) with dual access modes and Agnes AI. Continues the trend of expanding provider coverage.

9. **PR [#5472](https://github.com/earendil-works/pi/pull/5472) — feat(ai,coding-agent): add Requesty as native provider**  
   *Author: Thibaultjaigu*  
   Adds Requesty.ai as a native provider, benefiting its 60,000+ user base. Support for OpenAI response headers and adaptive thinking on Claude models.

10. **PR [#5789](https://github.com/earendil-works/pi/pull/5789) — fix(tui): restore cursorUp line-start jump before history browsing**  
    *Author: 4h9fbZ*  
    Restores a TUI navigation behavior broken by a prior history-browsing refactor. Pressing up at the first line now jumps to line start before entering history mode.

## Feature Request Trends
Several clear themes have emerged from recent issues and PRs:

- **Provider coverage expansion**: New native providers (Requesty, StepFun, Agnes AI) and improved provider hooks (`before_provider_headers`) show strong community demand for more gateway integrations.
- **Extension ecosystem maturity**: Multiple patches targeting extension loading performance (#6360/#6361), event hooks (#6363), and header manipulation (#6350) indicate active third-party extension development.
- **Constrained/grammar-based tool calling**: PR #6341 directly addresses a long-standing pain point where LLMs hallucinate invalid tool arguments. This is the most architecturally significant feature in development.
- **Session isolation for embedded agents**: Issue #6203 requests an "isolated" flag to prevent sub-agents from inheriting global context — a key enabler for running multiple agents in a single process.
- **Customizable sharing backends**: Issue #6358 requests configurable `/share` commands beyond GitHub, reflecting enterprise deployment needs.

## Developer Pain Points
Recurring frustrations observed in recent activity:

- **Null content handling**: At least three separate issues (#6259, #6276, #6278) and PR #6343 address the same fundamental problem — message content can be null or missing in tool-call scenarios. This is the #1 reliability regression in 0.80.x.
- **Anthropic cache token double-counting**: Two identical bug reports (#6353, #6355) filed on the same day, both caught during real-world usage. The API contract is well-documented but the implementation failed to follow it.
- **OS-specific TUI regressions**: Windows terminal rendering (#6300), Linux X11 clipboard (#6250), small-ICU Node segfaults (#6359) — each platform breakage requires separate investigation, suggesting insufficient cross-platform testing in CI.
- **Session storage race conditions**: Issue #6242 describes UUID collision bugs and race conditions in session storage that can cause data corruption. This affects all users, not just edge cases.
- **Startup latency from extension loading**: Issue #6361 notes that 30 extensions cause noticeable startup delay. The proposed fix (shared jiti instance, PR #6360) could cut this by 50%+.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-06

## Today's Highlights
A new nightly release (v0.19.6) ships with a significant PR-triage hardening fix, while the community rallies around two major RFCs: multi-workspace daemon support and an Agent View TUI for background session management. Token-management bugs continue to dominate the issue tracker, with a critical fix for zero-context-window errors now merged.

## Releases
**v0.19.6-nightly.20260706.47f62a466** — Nightly release that strengthens the PR triage bot with batch detection, problem existence checks, and red-flag pattern matching to reduce false positives in automated review gates.

## Hot Issues

1. **[#6378 — RFC: Support multiple workspaces in one qwen serve daemon](https://github.com/QwenLM/qwen-code/issues/6378)**  
   *18 comments* — A detailed proposal to break the current `1 daemon = 1 workspace` model. Community discussion is active around backward compatibility and session isolation. A Phase 1 PR (#6394) has already been opened.

2. **[#6144 — Incorrect context window calculation](https://github.com/QwenLM/qwen-code/issues/6144)** *(CLOSED)*  
   *8 comments* — User reported that Qwen3-Coder with `ctx-size = 65536` was miscalculating limits. The fix was merged in PR #6387, which changes the global fallback from 128K to 200K.

3. **[#5964 — Zombie sessions burning 30M tokens](https://github.com/QwenLM/qwen-code/issues/5964)**  
   *4 comments* — A recurring high-severity bug where `qwen serve` sessions fail to auto-terminate after timeout, silently consuming API credits. Despite P1 priority, the issue remains open with "need-retesting" status.

4. **[#6264 — `/review` skill consumes large token amounts](https://github.com/QwenLM/qwen-code/issues/6264)**  
   *5 comments* — Users report the review skill uses far more tokens than expected. No resolution yet, but community workarounds are being discussed.

5. **[#6312 — Reduce per-session overhead on daemon session creation](https://github.com/QwenLM/qwen-code/issues/6312)**  
   *5 comments* — A tracking issue for optimizing the session-creation path. Multiple PRs (#6349, #6259) are actively addressing this.

6. **[#6338 — Stabilize tool schema order to avoid prompt cache misses](https://github.com/QwenLM/qwen-code/issues/6338)** *(CLOSED)*  
   *4 comments* — Non-deterministic tool registration order was causing KV-cache misses. Fix merged; welcome to new contributors.

7. **[#6298 — Shell tool fails on Windows with stdout output](https://github.com/QwenLM/qwen-code/issues/6298)**  
   *3 comments* — Windows compatibility issue: internal piping through `cat` fails on `cmd.exe`. A clear platform gap that blocks Windows users.

8. **[#6365 — Triage bot hallucinates "core module protection policy"](https://github.com/QwenLM/qwen-code/issues/6365)**  
   *1 comment* — The CI bot fabricated non-existent 500-line thresholds, blocking valid PRs. PR #6369 aims to fix this by excluding test files from the size gate.

9. **[#6396 — `/review` can downgrade approval while waiting on its own CI check](https://github.com/QwenLM/qwen-code/issues/6396)**  
   *1 comment* — A self-referential CI bug: the review tool counts its own running check as pending, downgrading approvals. PR #6397 proposes a targeted fix.

10. **[#6318 — Unable to `/rewind` after `/compress`](https://github.com/QwenLM/qwen-code/issues/6318)**  
    *3 comments* — Post-compression rewinding fails because the synthetic `/compress` summary prefix is miscounted. PR #6358 implements a fix.

## Key PR Progress

1. **[#6387 — Default context windows to 200K](https://github.com/QwenLM/qwen-code/pull/6387)** *(CLOSED)*  
   Fixes the zero-context-window error (#6144, #6384) by raising the global fallback from 128K to 200K and fixing env-var-only model resolution.

2. **[#6394 — Phase 1 workspace runtime registry](https://github.com/QwenLM/qwen-code/pull/6394)**  
   First implementation step for the multi-workspace RFC (#6378). Introduces an internal single-runtime registry for `qwen serve`.

3. **[#6358 — Allow rewind after compressed history](https://github.com/QwenLM/qwen-code/pull/6358)**  
   Fixes #6318 by teaching the rewind path to skip synthetic `/compress` summary entries.

4. **[#6369 — Exclude test files from core module size gate](https://github.com/QwenLM/qwen-code/pull/6369)**  
   Addresses the hallucinated "core module protection policy" bug (#6365) by excluding test files and distinguishing feat from refactor.

5. **[#6397 — Ignore current review run in presubmit CI](https://github.com/QwenLM/qwen-code/pull/6397)**  
   Fixes #6396 by filtering out the current review workflow's own check-run from CI status evaluation.

6. **[#6349 — Add session start profiler](https://github.com/QwenLM/qwen-code/pull/6349)**  
   Opt-in profiler (`QWEN_CODE_PROFILE_SESSION_START=1`) to debug session initialization overhead, supporting performance tracking in #6312.

7. **[#6395 — Add issue-fidelity and root-cause ownership gate to /review](https://github.com/QwenLM/qwen-code/pull/6395)**  
   Enhances the review pipeline with deduplicated bug verification and core-infrastructure scope gating.

8. **[#6259 — Persist session artifacts across restarts](https://github.com/QwenLM/qwen-code/pull/6259)**  
   V2 daemon artifact persistence with durable tombstone/snapshot handling. Stacked PR #6346 adds content retention.

9. **[#6388 — Token-usage analytics dashboard for Daemon Status](https://github.com/QwenLM/qwen-code/pull/6388)**  
   Adds a web-shell analytics tab with Today/7D/30D metrics for tokens, sessions, requests, and tool calls.

10. **[#6376 — Add natural channel memory intents](https://github.com/QwenLM/qwen-code/pull/6376)**  
    Lets channel users manage memory via natural language (e.g., "remember this"), reducing reliance on slash commands.

## Feature Request Trends

- **Multi-session management** is the dominant theme: RFCs for multi-workspace daemons (#6378) and a TUI Agent View for background sessions (#6383) indicate demand for orchestration capabilities beyond single-session workflows.
- **Selective deferred-tool visibility** (#6368) and **scheduled tasks in dedicated sessions** (#6389) point to growing sophistication in tool orchestration.
- **Channel bot memory** improvements (#6376, #6360) show community interest in persistent, context-aware bot interactions.

## Developer Pain Points

- **Token management** remains the #1 headache: zombie sessions burning tokens (#5964), `/review` overconsumption (#6264), context window miscalculations (#6144), and tool output overflow (#4049) are persistent complaints.
- **CI automation reliability** is degrading developer trust: the triage bot fabricates rules (#6365), and the review bot blocks its own approvals (#6396).
- **Windows support gaps** are clear: shell tool failures (#6298) and inconsistent git-ignore handling (#6119) frustrate Windows developers.
- **Session navigation limitations** persist: `/compress` breaks `/rewind` (#6318), and virtualized list scrolling breaks during streaming (#6363).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-06

## Today's Highlights

The v0.8.68 release cycle is fully underway, with the maintainer driving a coordinated overhaul of the WhaleFlow orchestration system—now being rebranded to **Workflow** for user-facing surfaces. Performance and reliability issues from high fan-out agent sessions are dominating open work, while multiple cleanup PRs from community contributors are removing dead code ahead of the release. The community is deeply engaged around the Workflow product-readiness tracker, with 10 sub-issues already filed under the v0.8.68 umbrella.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **#4038 — v0.8.68 Workflow product-readiness tracker**  
   The flagship umbrella issue for the v0.8.68 release, keeping a master list of remaining gaps: no stable model-facing tool, no normal TUI/CLI run path, no compact run view, no finished high-fan-out resource story. This is the single most important coordination issue for the current release cycle.  
   [Issue](https://github.com/Hmbown/CodeWhale/issues/4038)

2. **#4032 — CodeWhale not following the constitution**  
   A user reports that CodeWhale consistently writes temporary scripts instead of reusing scripts the pair wrote together, and always finds a justification when challenged. This touches on the core trust model of the tool—users expect the system to respect prior work artifacts.  
   [Issue](https://github.com/Hmbown/CodeWhale/issues/4032)

3. **#4014 — TUI lag and memory pressure from high agent fan-out**  
   Observed symptoms with 30+ parallel sub-agents: typing latency increases, terminal rendering stalls, and host memory pressure. The user reports "my computer is f..." — clearly a painful experience. A critical performance blocker for v0.8.68.  
   [Issue](https://github.com/Hmbown/CodeWhale/issues/4014)

4. **#4010 — Conductor agent type for orchestrating agent ensembles**  
   The core architectural proposal for v0.8.68: a new agent type that can fan out scouts, wait for completions, route artifacts, retry failures, and synthesize results. Currently sub-agents are spawned one at a time with manual coordination.  
   [Issue](https://github.com/Hmbown/CodeWhale/issues/4010)

5. **#4015 — Context budget management for high-fan-out orchestration**  
   When a conductor orchestrates 30+ sub-agents, parent context balloons from completion summaries (~1-3KB per agent). At 41 agents that's 40-120KB of overhead. A concrete resource constraint that must be solved for Workflow to work at scale.  
   [Issue](https://github.com/Hmbown/CodeWhale/issues/4015)

6. **#4013 — Verification gates as post-agent hooks**  
   Sub-agents self-report "done" but there is no automated verification. The Constitution demands ground-truth verification, but today it's manual. With 30+ agents running, manual polling is untenable. Community agrees this is essential for production use.  
   [Issue](https://github.com/Hmbown/CodeWhale/issues/4013)

7. **#4042 — Environment-level tool sandboxing for sub-agents**  
   Runtime counterpart to the tool_restrictions field proposed in the routing PR (#3969). Ensures sub-agents running on different providers can only use tools they're authorized for. Security-critical for multi-provider deployments.  
   [Issue](https://github.com/Hmbown/CodeWhale/issues/4042)

8. **#4039 — Background task phase ledger UI**  
   Inspired by a user-supplied Claude Workflow screenshot: a compact "Background tasks" panel grouped by workflow phase. The key insight is that orchestration should not appear as a long chat transcript. Strong community interest in better UX for concurrent work.  
   [Issue](https://github.com/Hmbown/CodeWhale/issues/4039)

9. **#4037 — Rename WhaleFlow to Workflow**  
   The maintainer acknowledges the user-facing feature should be called Workflow, not WhaleFlow. The current naming makes the feature feel internal and unfinished. Cleanup touches docs, UI copy, labels, and older issue titles.  
   [Issue](https://github.com/Hmbown/CodeWhale/issues/4037)

10. **#2870 — Staged command-boundary refactor EPIC**  
    A long-running refactor (since June 7) tracking smaller mergeable layers for command-boundary cleanup. Still open after a month, suggesting the refactor is complex and carefully staged. Important for code health ahead of v0.8.68.  
    [Issue](https://github.com/Hmbown/CodeWhale/issues/2870)

## Key PR Progress

1. **#4046 — Layer 5.1: User command registry and loading boundary (CLOSED)**  
   Confirms the user-command registry and loading boundary already satisfies all acceptance criteria for user-defined Markdown/frontmatter commands. No production code changes needed—a rare "clean verification" PR.  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4046)

2. **#3969 — Add per-sub-agent provider routing (OPEN)**  
   Held for v0.8.68 per maintainer sequencing. Adds explicit provider/model routing to the SubagentDefinition struct, including a tool_restrictions field. Will land alongside the fleet/routing redesign (#3932–#3935).  
   [PR](https://github.com/Hmbown/CodeWhale/pull/3969)

3. **#4045 — Fix edit_file UTF-8 fuzzy cursor panic (OPEN)**  
   Fixes a crash when fuzzy matching starts on a multibyte UTF-8 character (e.g., CJK). The previous cursor advance could slice from the middle of a character and panic. Critical fix for non-ASCII users.  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4045)

4. **#4044 — Localize dynamic welcome steps (OPEN)**  
   Localizes the first-run welcome screen through the existing MessageId registry, renders welcome Next: lines from actual onboarding gates, and adds welcome copy for every shipped locale including zh-Hant. Strong i18n improvement.  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4044)

5. **#4043 — Fix SIGPIPE reset for piped output (OPEN)**  
   Resolves a crash when output is piped into a command that exits early (e.g., `codewhale doctor | head`). The process was panicking with "Broken pipe (os error 32)". A clean fix that resets SIGPIPE to SIG_DFL.  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4043)

6. **#4041 — Remove unused whale_routes taxonomy (OPEN)**  
   Community contributor DarrellThomas removes the dead `tui::whale_routes` module flagged by `deadcode.log`. No production callers anywhere, only unit tests. Cleanup ahead of v0.8.68.  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4041)

7. **#4040 — Remove legacy token-only pricing helpers (OPEN)**  
   Another cleanup from DarrellThomas: removes four unused pricing functions (`calculate_turn_cost` etc.) since production cost accounting already uses the usage-aware path.  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4040)

8. **#4023 — Harden v0.8.67 RC surfaces (CLOSED)**  
   Harden stream timeout config, CODEWHALE_HOME plugin paths, setup/doctor/onboarding copy, provider routing, OpenAI Codex OAuth messaging, gpt-5.5 Codex cost display, URL OSC 8 punctuation, and mode/subagent authority policy. Plus adds subagent sidebar polish.  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4023)

9. **#4024 — Align v0.8.67 QA script with repo constitution source (CLOSED)**  
   Canonicalizes CODEWHALE_BIN before QA script changes and updates the repo-law context assertion to match the current doctor source kind. Important release infra.  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4024)

10. **#3972 — Allow longer quiet reasoning waits (CLOSED)**  
    Raises the default streamed-response idle timeout from 300s to 900s and makes the TUI stalled-turn watchdog respect the configured budget. Addresses a long-standing quiet-model frustration.  
    [PR](https://github.com/Hmbown/CodeWhale/pull/3972)

## Feature Request Trends

The most requested feature direction is **orchestrated multi-agent workflows**—the entire v0.8.68 release is converging on this. Specific sub-requests include: conductor agent types that fan out and synthesize results, background task panels rather than chat transcript views, automated verification gates after agent completion, and context budget management for large agent ensembles. The rebranding from "WhaleFlow" to "Workflow" indicates the maintainer views this as the primary product evolution path.

A secondary trend is **user-defined commands and scripting**—the command-boundary refactor and user command registry work (#4046, #2870) show interest in letting users extend the tool with custom Markdown/frontmatter commands.

## Developer Pain Points

1. **Performance under high fan-out** — Users report severe TUI lag, memory pressure, and typing latency when running 30+ parallel sub-agents (#4014). This is the most acute pain point for the v0.8.68 release.

2. **Lack of automated verification** — Sub-agents self-report "done" but there is no compile/test/lint/review gate (#4013). Users must manually poll worktree diffs and trust agent claims, which breaks down at scale.

3. **Context budget overflow** — Orchestrating many sub-agents causes the parent context to balloon from completion summaries (#4015), hitting token limits and degrading quality.

4. **Agent governance failures** — Users report that CodeWhale ignores prior work artifacts (scripts they wrote together) and writes temporary scripts instead, then justifies the behavior (#4032). Erodes trust in the system.

5. **Quiet model timeout issues** — The recent fix (#3972) raising the timeout from 300s to 900s confirms users were consistently hitting silent reasoning timeouts, particularly with slower reasoning models.

6. **Multi-byte character crashes** — The UTF-8 cursor panic fix (#4045) highlights that non-ASCII users (CJK, etc.) were hitting crashes in fuzzy matching—a long-standing pain point for international users.

7. **Pipe/CLI reliability** — The broken pipe panic fix (#4043) shows that basic Unix pipeline usage (`command | head`) was crashing the process, indicating brittle stdout handling.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*