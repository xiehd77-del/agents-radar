# AI CLI Tools Community Digest 2026-07-13

> Generated: 2026-07-12 22:34 UTC | Tools covered: 9

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

**Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem**
**Date:** 2026-07-13

---

### 1. Ecosystem Overview

The AI CLI developer tools ecosystem on this date is characterized by a **post-release stabilization phase**, with no major new versions shipped across any of the seven major tools in the last 24 hours. Community activity is heavily weighted toward **bug reporting and infrastructure hardening** rather than new feature development, suggesting developers are actively stress-testing these tools in production environments. Two dominant cross-cutting themes emerge: **platform-specific reliability issues**, particularly on Windows, and **growing pains from multi-agent orchestration**, where subagent coordination, session state management, and token accounting are proving fragile. The overall landscape reflects a maturing but still brittle ecosystem, where foundational security contracts, configuration authority, and cross-session persistence remain unresolved for power users.

---

### 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | New Release (24h) | Community Signal (Top Issue 👍) |
|---|---|---|---|---|
| **Claude Code** | ~15 tracked | 3 | None | 28 (Permissions bypass) |
| **OpenAI Codex** | ~10 tracked | 1 | None | 118 (MultiAgent model override) |
| **Gemini CLI** | ~10 tracked | 10 | None | 8 (Agent hangs) |
| **GitHub Copilot CLI** | ~14 tracked | 1 | None | 8 (WSL2 wedge) |
| **Kimi Code CLI** | ~6 tracked | 4 | None | 1 (TPD rate limit) |
| **OpenCode** | ~10 tracked | 10 | None | 105 (Clipboard bug) |
| **Pi** | ~10 tracked | 10 | None | 8 (Compaction failure) |
| **Qwen Code** | ~10 tracked | 10 | None | N/A (RFCs dominate) |
| **DeepSeek TUI** | 3 | 2 | None | 0 (Low engagement) |

**Key Observations:**

- **High bug-report volume, low release cadence:** All tools are in a "triage and patch" phase. No tool shipped a feature release today.
- **OpenCode** and **Claude Code** have the highest-community-signal bugs (105 and 28 👍 respectively), indicating entrenched, long-standing issues.
- **Gemini CLI** and **Qwen Code** show the highest PR throughput, suggesting active internal development despite no public releases.
- **DeepSeek TUI** is the smallest, with minimal community activity and low engagement metrics.

---

### 3. Shared Feature Directions

**A. Multi-Agent Orchestration & Session Lifecycle Control**
- **Tools affected:** Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI, Qwen Code, Pi
- **Specific needs:**
  - **Manual session completion** (Claude Code #58215, Copilot CLI #4098): Users want sessions to persist until explicitly archived, not auto-closed.
  - **Cross-session communication** (Claude Code #62334, Qwen Code #6755): Demand for agents to share context across terminals and restarts.
  - **Subagent model selection** (OpenAI Codex #31814, Gemini CLI #22323): Users want granular control over which models subagents use, not hardcoded overrides.
  - **Deferred tool lifecycle** (Qwen Code #6775, Copilot CLI #4101): Expose pending tool calls before arguments complete, and fix blocking behavior.

**B. Permission & Security Hardening**
- **Tools affected:** Claude Code, OpenCode, Gemini CLI, Pi
- **Specific needs:**
  - **Config authority** (Claude Code #15921, Gemini CLI #22267): Settings must be respected at runtime, not silently ignored.
  - **Safer defaults** (OpenCode #5076, Gemini CLI #22672): Require explicit user consent for file operations; prevent destructive actions.
  - **SSRF & DNS rebinding protection** (Gemini CLI #28181): Fixed in Gemini, but the pattern indicates broader ecosystem vulnerability.

**C. Provider & Model Compatibility**
- **Tools affected:** OpenCode, Pi, DeepSeek TUI, Kimi Code CLI
- **Specific needs:**
  - **GPT-5.6 family support** (OpenCode #36140, Pi #6477, #6516): Model-not-found errors, missing reasoning effort levels, transport mismatches.
  - **Tool-use protocol compliance** (DeepSeek TUI #4329, Kimi Code CLI #1762): Anthropic API throwing 400s on `tool_use`/`tool_result` ordering; OpenAI spec gaps for array content.

**D. Token & Cost Transparency**
- **Tools affected:** Kimi Code CLI, OpenCode, DeepSeek TUI, OpenAI Codex
- **Specific needs:**
  - **Deterministic rate limits** (OpenAI Codex #9508, Kimi Code CLI #2318): Scheduled resets, correct TPD counters, real-time quota visibility.
  - **Provider-aware cost attribution** (DeepSeek TUI #4335, Pi #6324): Scorecards must bind costs to actual provider routes, not model-only lookups.

**E. Windows Platform Parity**
- **Tools affected:** Claude Code, OpenAI Codex, Copilot CLI, Kimi Code CLI, OpenCode
- **Specific needs:**
  - **Click-to-focus vulnerability** (Claude Code #76743): TUI permission dialogs submit on focus loss.
  - **Binary signing & version info** (Kimi Code CLI #2178): Windows flags unsigned binaries as untrusted.
  - **UTF-8 encoding robustness** (Kimi Code CLI #2313, OpenCode #31985): Non-ASCII output causes silent failures.
  - **Plugin update blocked by file handles** (Copilot CLI #4095): VS Code locks plugin directories on Windows.

---

### 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|---|---|
| **Primary Focus** | Agent permissions & safety | MultiAgent orchestration | Security patches & eval | Bug triage & session integrity | Windows enterprise support | Model diversity & billing | Codex compatibility | Daemon/multi-workspace | Provider routing |
| **Target User** | Power users, VS Code | Enterprise, multi-agent | Google Cloud, Linux | GitHub ecosystem, WSL | Enterprise Windows | Multi-provider users | Extension developers | Daemon operators | Budget-conscious |
| **Technical Approach** | Plugin ecosystem | GPT-5.6 tight integration | Bash-native tooling | Rust-based TUI | Python stack (PyInstaller) | SQLite event sourcing | Extensions (Bun virtual) | HTTP daemon + Web Shell | Lightweight TUI |
| **Weakness (today)** | Permissions trust deficit | Model override bugs | Agent hangs | Session corruption | Stale PRs (3+ months) | Billing logic errors | Provider fragmentation | CI instability | Low community engagement |
| **Strength (today)** | Rich TUI & IDE integration | MultiAgent V2 architecture | Security patch velocity | Session persistence | Enterprise Windows fixes | Broad provider support | Extension API maturity | Multi-workspace daemon | Provider diversity |

**Key Differentiators:**

- **OpenAI Codex** is the only tool pushing multi-agent orchestration at scale with GPT-5.6, but its model override bug (#31814, 118 👍) is the highest-impact issue across all tools today.
- **Gemini CLI** stands out for its **security patch velocity** — today alone it fixed critical CVEs, SSRF bypass, and CI env var leaks. No other tool shipped comparable security work.
- **Qwen Code** is architecturally unique, positioning itself as a **long-lived HTTP daemon** with multi-workspace support and a Web Shell UI. Its vision of background agents for project memory (#6755) is the most ambitious memory proposal across all tools.
- **Claude Code** remains the most **permissions-conscious** tool, but its trust deficit is deepening — three separate permission or config bugs are top-voted today.
- **Kimi Code CLI** is the only tool explicitly targeting **enterprise Windows deployment**, with fixes for binary signing, version metadata, and locale handling, but its four critical PRs have stagnated for 2-3 months.
- **DeepSeek TUI** is the smallest, and its cost-attribution fix (#4351) is the most targeted solution to the token-transparency problem, though provider-specific (MiniMax addition) rather than systemic.

---

### 5. Community Momentum & Maturity

| Tool | Community Momentum | Maturity Indicator | Verdict |
|---|---|---|---|
| **Claude Code** | Medium (high signal on few issues) | Mature but brittle | Established, but security gaps eroding trust |
| **OpenAI Codex** | High (118 👍 in 7 days on #31814) | Early enterprise | Rapid adoption, but GPT-5.6 integration is rough |
| **Gemini CLI** | Medium-low (8 👍 top issue) | Maturing | Security-conscious, but agent reliability lags |
| **Copilot CLI** | Low (8 👍 top issue) | Early stage | Bug-dominant, few new features |
| **Kimi Code CLI** | Low (1 👍 top issue) | Early enterprise | Stalled on critical fixes; Windows focus is niche |
| **OpenCode** | High (105 👍 on #4283, 84 👍 on #36140) | Mature multi-provider | High engagement, but billing and performance issues |
| **Pi** | Medium (8 👍 top issue) | Maturing extension ecosystem | Strong extension growth, but Codex fragmentation |
| **Qwen Code** | Medium (RFCs generate debate) | Rapidly iterating | Most architectural ambition; CI instability hurts velocity |
| **DeepSeek TUI** | Very low (0 👍 top issue) | Early stage | Minimal community; provider routing is only differentiator |

**Momentum Leaders:**
- **OpenCode**: Highest community signal (two issues with 84+ and 105 👍), broad provider support, and active v2 development. Its billing and performance problems are growing pains of adoption.
- **OpenAI Codex**: The GPT-5.6 hype is real — #31814 hit 118 👍 in 7 days. Power users are invested in MultiAgent V2 despite the bugs.
- **Qwen Code**: Most architectural ambition and highest PR throughput. The multi-workspace daemon vision is unique and resonates with Web Shell users.

**Maturity Leaders:**
- **Claude Code**: Longest-running, richest ecosystem, but the permissions trust deficit is its Achilles' heel.
- **OpenCode**: Mature multi-provider architecture with a large community. The SQLite unbounded growth (#33356) and clipboard bug (#4283) are 8-month-old issues that signal maintenance debt.
- **Gemini CLI**: Most security-mature (fixing CVEs proactively), but agent reliability is behind peers.

**Rapid Iterators:**
- **Qwen Code**: 10 PRs updated today, including major architectural changes (multi-workspace, extension management v2, shadcn UI foundation). Highest development velocity.
- **Pi**: 10 PRs updated, mostly fixes and extension API improvements. The extension ecosystem is growing rapidly, but Codex compatibility is a constant source of bugs.
- **Gemini CLI**: 10 PRs updated, mostly security and infrastructure. The eval report command (#28369) signals investment in quality infrastructure.

---

### 6. Trend Signals for Developers

**1. The "Windows Problem" is Systemic and Costing Trust**
Every major tool except Gemini CLI has a Windows-specific crash, hang, or security bug active today. The Claude Code click-to-focus vulnerability (#76743) and Copilot CLI WSL2 wedge (#4069) are the most dangerous. **Takeaway:** If you develop on Windows, expect to spend significant time working around TUI rendering, file handle locking, and process management issues. Dual-boot or WSL2 is not a panacea — the tools' Rust and Python runtimes have their own platform bugs.

**2. Multi-Agent Orchestration Has a Reliability Ceiling**
Across Claude Code, OpenAI Codex, Gemini CLI, and Copilot CLI, the common pattern is: agents that spawn subagents break when those subagents finish, hang, or report incorrectly. The most voted issue today (OpenAI Codex #31814, 118 👍) is about model overrides in multi-agent systems. **Takeaway:** The industry is learning that "let agents manage agents" is harder than it sounds. If you plan to build on multi-agent architectures, invest in robust session lifecycle management, timeout handling, and transparent termination reporting. Expect bugs in this area for 6-12 months.

**3. Permission Systems are Not Yet Trustworthy**
Claude Code's top issue (#15921, 28 👍) and OpenCode's #5076 (61 👍) both demonstrate that users cannot trust that settings are respected. Claude Code's allow rules silently fail to match (#57132); Gemini CLI's config overrides are ignored (#22267). **Takeaway:** Auditing permissions by reading `settings.json` is not sufficient. Test your security model empirically — file a bug if rules don't apply. The ecosystem is still learning to make configuration authoritative.

**4. Token and Credit Transparency is a Growing Pain Point**
Kimi Code CLI's TPD rate limit bug (#2318), OpenCode's billing errors (#33318, #14273), and OpenAI Codex's rate-limit acceleration (#32606) all show that users cannot trust their usage dashboards. **Takeaway:** Build monitoring independent of the tool's billing layer. Track your own token consumption via API logs or proxy. Expect accidental overcharges and undocumented cap changes, especially around new model releases (GPT-5.6 is particularly opaque).

**5. Memory and Persistence are the Next Frontier**
Qwen Code's background agents for cross-session persistence (#6755), Claude Code's memory override bug (#52477), and the cross-session communication requests (#62334) all point to a shared realization: **an LLM without memory of past work is only useful for single-shot tasks**. The most ambitious proposal is Qwen Code's, which combines extraction agents, devlogs, and living specs to give models persistent project memory. **Takeaway:** If you rely on session-based tools for multi-day or multi-week projects, you will lose context. Workarounds (manually running `/remember`, maintaining external notes) are still necessary. Expect first-class persistent memory to land in Qwen Code and Claude Code within 3-6 months.

**6. Security Hardening is Accelerating, Especially in Gemini CLI**
Gemini CLI fixed critical CVEs (vitest, shell-quote), SSRF bypass (#28181), CI env var leaks (#28179), and path traversal today alone. This is **2-3x more security work than any other tool in this digest**. **Takeaway:** If security compliance matters to your organization, Gemini CLI is the safest choice today. The other tools are reacting to vulnerabilities, not proactively patching them.

**7. The Extension/Plugin Ecosystem is Maturing**
Claude Code (PR #76985, plugin agent validation), Pi (extension API, Z.AI provider), and Qwen Code (extension management v2, #6638) all shipped extension-related infrastructure today. The ecosystem is moving from "can I add a tool?" to "can I add a tool that interacts safely with session lifecycle, compaction, and permissions?" **Takeaway:** Extension developers should follow Pi and Qwen Code's work — they are defining the patterns that the rest will adopt. Expect a standard extension API to emerge across tools within 12 months.

**8. The "Copilot Tax" is Real**
GitHub Copilot CLI shows the least architectural ambition (no feature requests, all bugs) and the highest ratio of Windows-specific pain. **Takeaway:** Copilot CLI is a thin client that only makes sense if you are deeply embedded in the GitHub ecosystem. If you want cross-platform reliability, multi-agent orchestration, or provider diversity, look elsewhere.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the **anthropics/skills** repository, based on data as of **2026-07-13**.

---

## 1. Top Skills Ranking (Most-Discussed Pull Requests)

The following PRs represent the most active community discussions and contributions for new or improved Skills.

1. **#1298: `fix(skill-creator): run_eval.py always reports 0% recall`**
   - **Functionality:** A critical fix for the skill-creator tooling. It resolves a bug where the evaluation script (`run_eval.py`) incorrectly reported a 0% trigger rate for every skill description, effectively breaking the automated description-optimization loop.
   - **Discussion:** This is the highest-attention PR, directly addressing a systemic issue (see Issue #556) that blocked users from effectively creating or tuning Skills. The fix involves correcting how the eval artifact is installed and how Windows subprocesses are handled.
   - **Status:** Open | [View PR](https://github.com/anthropics/skills/pull/1298)

2. **#514: `Add document-typography skill`**
   - **Functionality:** A skill for controlling the typographic quality of AI-generated documents. It prevents common issues like orphaned words, widowed paragraphs, and numbering misalignment.
   - **Discussion:** The community strongly resonated with making Claude’s output “look professional out of the box.” The discussion focused on the prevalence of these issues in long-form generation and the skill’s direct utility.
   - **Status:** Open | [View PR](https://github.com/anthropics/skills/pull/514)

3. **#486: `Add ODT skill — OpenDocument text creation and template filling`**
   - **Functionality:** Enables Claude to create, read, fill, and convert OpenDocument Format files (.odt, .ods), a crucial capability for users in open-source and LibreOffice ecosystems.
   - **Discussion:** The demand for interoperability with non-Microsoft document formats was a key theme. Comments centered on the complexity of the ODT format and ensuring the Skill handled template filling robustly.
   - **Status:** Open | [View PR](https://github.com/anthropics/skills/pull/486)

4. **#210: `Improve frontend-design skill clarity and actionability`**
   - **Functionality:** A revision to the existing `frontend-design` skill to make its instructions more concrete, coherent, and executable by Claude in a single conversation.
   - **Discussion:** A meta-discussion on Skill quality itself. The community debated what makes a Skill “actionable” versus a reference document, with heavy emphasis on reducing verbosity and increasing specificity.
   - **Status:** Open | [View PR](https://github.com/anthropics/skills/pull/210)

5. **#83: `Add skill-quality-analyzer and skill-security-analyzer to marketplace`**
   - **Functionality:** Two meta-skills: one for evaluating the quality of other Skills (structure, documentation, examples), and one for auditing Skills for security vulnerabilities.
   - **Discussion:** A very popular proposal for self-governance within the Skills ecosystem. The discussion highlighted the need for trust and quality control metrics as the number of community Skills grows.
   - **Status:** Open | [View PR](https://github.com/anthropics/skills/pull/83)

6. **#723: `feat: add testing-patterns skill`**
   - **Functionality:** A comprehensive skill covering testing philosophy (Testing Trophy model), unit testing (AAA pattern), React component testing (Testing Library), and what *not* to test.
   - **Discussion:** This skill addresses a core developer workflow. The conversation involved defining a balance between comprehensive guidance and keeping the description short enough to be an effective skill trigger.
   - **Status:** Open | [View PR](https://github.com/anthropics/skills/pull/723)

---

## 2. Community Demand Trends (From Issues)

The most active Issues reveal clear, top-of-mind demands from the community:

- **Skills Ecosystem Security & Trust (#492, 34 comments):** The highest-activity Issue concerns the trust boundary. Community skills are being distributed under the `anthropic/` namespace, creating a vulnerability where users might grant elevated permissions to unofficial skills. The community is demanding formal namespace governance and security auditing.
- **Org-Wide Skill Sharing (#228, 14 comments):** A strong enterprise demand for the ability to share custom skills within an organization without requiring manual file transfers and uploads. Users want a shared skill library or direct sharing links.
- **Tooling Reliability (Win/Mac/Linux) (#556, #1169, #1061):** The top technical blocker is the unreliability of the `run_eval.py` and `run_loop.py` scripts, especially on Windows. Multiple reports of 0% recall rates are preventing users from improving their skill descriptions. This spans across multiple issues and PRs.
- **Platform Compatibility (#29, 4 comments):** Users want Skills to be usable with AWS Bedrock, indicating a desire to run Claude Skills outside of the direct Claude AI product.
- **Protocol Standardization (#16, 4 comments):** An early but persistent proposal to expose Skills as MCPs (Model Context Protocol) to create a standardized API for AI tasks, making them interoperable with other agent systems.

---

## 3. High-Potential Pending Skills (Active PRs Nearing Merge)

These open PRs have significant traction and represent the next likely Skills to land in the repository.

- **#1367: `feat(skills): add self-audit` (v1.3.0)** — A universal skill that performs mechanical file verification (checking outputs exist) followed by a four-dimension reasoning audit. This is the most recent high-activity PR, likely to land soon as it fills a gap in output quality assurance. [View PR](https://github.com/anthropics/skills/pull/1367)
- **#1302: `Add color-expert skill`** — A specialized skill for color knowledge (naming systems, spaces like OKLCH/CAM16, palettes). It is well-bounded, self-contained, and addresses a specific gap for design-focused users. [View PR](https://github.com/anthropics/skills/pull/1302)
- **#509: `docs: add CONTRIBUTING.md`** — A foundational community health PR that adds a comprehensive CONTRIBUTING.md file. This is critical for onboarding new contributors and increasing the quantity and quality of future PRs. [View PR](https://github.com/anthropics/skills/pull/509)
- **#181: `Add SAP-RPT-1-OSS predictor skill`** — Integrates SAP’s open-source tabular foundation model into Claude’s skills. A unique enterprise skill with a dedicated following. [View PR](https://github.com/anthropics/skills/pull/181)

---

## 4. Skills Ecosystem Insight

The community’s **most concentrated demand is for a reliable, secure, and auditable Skill creation and optimization toolchain**, followed by specialized domain skills (testing, typography, document format interop) that solve concrete, recurring user problems.

---

# Claude Code Community Digest — 2026-07-13

## Today's Highlights

A quiet Sunday for the Claude Code repository — no new releases shipped, but the community continues active discussion on a long-standing Windows permissions bug (#15921) now at 27 comments. The ongoing saga of "Usage credits required for 1M context" errors dominating closed issues this week, alongside a fresh Windows click-to-focus vulnerability (#76743) that poses a real UX safety risk. Three new pull requests target infrastructure improvements, including a script fix that was silently destroying label data on duplicate issues.

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

### 🔴 High Impact

**[#15921 — VSCode Extension: `.claude/settings.local.json` permissions not respected for Bash/Write/Edit operations](https://github.com/anthropics/claude-code/issues/15921)**
*Labels: bug, has repro, platform:windows, area:tools, area:core, area:ide | 27 comments | 👍 28*

The top-voted open issue for months. Users report that `bypassPermissions` mode is ineffective — Bash, Write, and Edit tool operations ignore allow rules defined in VSCode's local settings. Still unassigned after 194 days. Community sentiment: this is a foundational security contract violation for the extension.

**[#76743 — Windows: click-to-focus activates pending permission dialog option (click-through)](https://github.com/anthropics/claude-code/issues/76743)**
*Labels: bug, has repro, platform:windows, area:tui, area:permissions | 4 comments | 👍 0*

Freshly filed and dangerous: when a permission prompt is pending and the window lacks focus, the user's first click (meant to focus the window) lands on the dialog and submits an unintended answer. This is effectively a UX clickjacking bug for the TUI on Windows.

**[#57132 — Allow rules under `~/.claude/` show as loaded but don't match at runtime](https://github.com/anthropics/claude-code/issues/57132)**
*Labels: bug, has repro, platform:linux, area:permissions | 9 comments | 👍 0*

Allow rules targeting paths under `~/.claude/` appear confirmed in `/permissions` but silently fail to match during file edits. Users must retest across all path formats. A permissions-layer logic bug that undermines trust in the allow/deny system.

### 🧠 Model & Safety

**[#52477 — Claude overrode explicit pronouns in user memory, defaulted to male bias](https://github.com/anthropics/claude-code/issues/52477)**
*Labels: bug, area:model, memory, model, api:anthropic | 8 comments | 👍 2*

Concerning model behavior: user explicitly set pronouns in memory; Claude ignored them and assumed male. Community discussion around whether this is a system prompt override issue, a memory retrieval bug, or an alignment artifact. Still open and unresolved.

### 🧹 Recently Closed (Notable)

**[#58215 — Agent view should require manual completion, not auto-complete sessions](https://github.com/anthropics/claude-code/issues/58215)**
*Closed | 7 comments | 👍 3*

Feature request that gained traction. Users want agent sessions to persist until explicitly archived or completed, rather than auto-closing. Advocates argue auto-completion causes context loss and makes debugging agent workflows harder. Closed — likely implemented or deprioritized.

**[#50724 — Post-compaction: stale skill arguments re-surfaced as fresh prompt](https://github.com/anthropics/claude-code/issues/50724)**
*Closed | 6 comments | 👍 1*

Critical context compaction bug: after automatic compaction, Claude answered a `/investigate-first` invocation from 17 hours ago, dropping the user's latest message. Highlights fragility of the compaction logic when multiple session hooks (plugin `SessionStart`) are active. Root cause may involve hook ordering or compaction not flushing pending skill invocations.

**[#36258 — Cowork: Make "Allow once" easier to select in MCP permission dialogs](https://github.com/anthropics/claude-code/issues/36258)**
*Closed | 5 comments | 👍 5*

Highly-upvoted UX request for Cowork mode. Users found "Allow once" hard to click compared to "Always allow" in MCP permission prompts. Suggests either reordering buttons or making "Allow once" keyboard-accessible. Now closed — possibly shipped in a recent TUI update.

**[#30232 — Show status line during permission prompts and user questions](https://github.com/anthropics/claude-code/issues/30232)**
*Closed | 4 comments | 👍 6*

Quality-of-life improvement: the status line (showing running instances, token counts) disappears during permission prompts. Users running multiple Claude sessions find this disorienting. Popular request closed after 4 months.

**[#65873 — False-positive safety/AUP interruptions during legitimate trading-app development](https://github.com/anthropics/claude-code/issues/65873)**
*Closed | 5 comments | 👍 0*

Legitimate algorithmic trading development against a testnet repeatedly interrupted by safety classifiers. This is part of a broader pattern (see also #65846, #65890, #65891) of cyber-safeguard false positives hitting developers working on financial, security, and gaming projects.

**[#62743 — Network Sandbox in WSL intermittent failures](https://github.com/anthropics/claude-code/issues/62743)**
*Closed | 5 comments | 👍 0*

WSL users experiencing flaky network sandbox behavior. Closed without a public fix explanation — concerning for the Linux-on-Windows developer segment.

---

## Key PR Progress

**[#76986 — fix(scripts): preserve existing labels when auto-closing duplicate issues](https://github.com/anthropics/claude-code/pull/76986)**
*Open | Created 2026-07-12*

Important infrastructure fix: the auto-close-duplicates script was replacing the *entire* label set with just `['duplicate']`, destroying existing labels like `has repro`, `platform:windows`, etc. This made triage harder and lost metadata. Simple bug, significant operational impact.

**[#76985 — fix(plugin-dev): read full multi-line description in validate-agent.sh](https://github.com/anthropics/claude-code/pull/76985)**
*Open | Created 2026-07-12*

Fixes a shell script bug where `grep` line-oriented extraction truncated multi-line agent descriptions to only the first physical line. Plugin developers writing descriptive agent metadata were silently losing content during validation. Important for the plugin ecosystem.

**[#15165 — Update README.md](https://github.com/anthropics/claude-code/pull/15165)**
*Closed | Created 2025-12-23*

A documentation fix updating a broken URL in the README. Took 7 months to merge — not a strong look for docs maintenance velocity.

*Note: Only 3 PRs updated in the last 24 hours, all non-critical fixes. No feature or model updates in flight.*

---

## Feature Request Trends

1. **Agent Session Lifecycle Control**: Multiple requests for opt-in session completion rather than auto-close (#58215). Users want to explicitly archive or complete agent sessions to preserve context and debug workflows.

2. **Cross-Session Communication**: Growing interest in allowing separate Claude Code sessions to communicate, delegate subtasks, and share context (#62334). Suggests users are running multi-terminal workflows and hitting isolation limits.

3. **Permission UX Refinements**: Persistent demand for better permission dialog UX — easier "Allow once" selection (#36258), status line visibility during prompts (#30232), and granular control over file access patterns (#65816, #65848).

4. **Web UI Parity**: Users of `claude.ai/code` want slash-command autocomplete, matching the desktop app (#65602). Signals the web interface is gaining adoption but lacks core TUI features.

5. **Plugin & Workflow Hook Correctness**: Multiple issues (#65646, #65602, #64001) highlight growing plugin adoption combined with documentation-drift and hook payload mismatches. The plugin ecosystem is thriving but integration points need hardening.

---

## Developer Pain Points

- **Permissions Inconsistency**: The system's most recurring pain point. Rules that appear to load but don't match (#57132), bypass mode not fully respected (#15921), and settings structure confusion (`settings.local.json` vs `settings.json`) create a trust deficit in the security model.

- **False-Positive Safety Interruptions**: A cluster of closed issues (#65873, #65846, #65890, #65891, #65517) show cyber-safeguards and AUP classifiers interrupting legitimate development — trading bots, IT management platforms, Minecraft modding, Flask apps. Developers feel collateral damage from tightened safety policies.

- **"1M Context" Credit Errors**: A flood of bugs (#64970, #63817, #64534, #65818) around the `Usage credits required for 1M context` error — even on Max plans, even with context set to Medium, even with `CLAUDE_CODE_DISABLE_1M_CONTEXT=1`. Background agents in the Mac desktop app are especially affected. Closed as duplicates suggests Anthropic acknowledges the issue but hasn't fully resolved the billing/plan logic.

- **Windows-Specific UX Hazards**: The click-to-focus permission submission bug (#76743) is the latest in a recurring theme of Windows TUI issues (PowerShell tool failure #59833, 0-byte stub breaks #65836). Windows users are a vocal and underserved segment.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-13

## Today's Highlights
A major configuration defect in GPT-5.6 Sol's MultiAgent V2 system (Issue #31814) continues to dominate the community, with users reporting that subagent model selection is silently overridden by hardcoded metadata, bypassing feature toggles. Meanwhile, Windows Desktop stability remains a critical concern, with multiple reports of crashes, hangs, and rendering issues following the latest app updates. On a positive note, the community's long-standing request for deterministic weekly rate-limit resets (Issue #9508) is seeing renewed traction and discussion.

## Releases
No new releases in the last 24 hours. The most recent stable version remains Codex CLI 0.144.1 and Codex Desktop 26.707.41301.

## Hot Issues (10 Most Noteworthy)

1. **#31814 — GPT-5.6 Sol Forces All Subagents to Also Be Sol Instances** (54 comments, 118 👍)
   *Critical bug*: MultiAgent V2's model metadata overrides user-specified subagent models, forcing all spawned agents to be Sol instances regardless of feature toggles. The `hide_spawn_agent_metadata` setting, despite its name, goes far beyond hiding metadata and fundamentally breaks multi-agent orchestration. The high reaction count signals this is a top-priority issue for power users.
   https://github.com/openai/codex/issues/31814

2. **#9508 — Make Weekly Limit Reset Deterministic** (44 comments, 31 👍)
   *Long-standing enhancement*: Users are frustrated that weekly usage resets have no fixed schedule, making capacity planning impossible. The community is calling for a transparent, documented reset time (e.g., Monday 00:00 UTC). This has been open since January and continues to gather support.
   https://github.com/openai/codex/issues/9508

3. **#16815 — WSL Agent Mode Fails on Windows with Path Deserialization Error** (21 comments)
   *Windows-specific bug*: Business-tier users cannot run WSL-based agents due to an "AbsolutePathBuf deserialized without a base path" error. This blocks a core workflow for enterprise developers on Windows.
   https://github.com/openai/codex/issues/16815

4. **#32040 — In-App Browser Can Hang or Close Codex on Windows After PiP Failure** (14 comments)
   *App stability*: Windows Desktop becomes unresponsive or crashes when the Browser Use Picture-in-Picture feature fails. The ChatGPT Desktop app's presence appears to be a complicating factor, suggesting namespace collisions.
   https://github.com/openai/codex/issues/32040

5. **#31984 — fetch-codex-manual.mjs Fails After URL Redirect Drops Checksum Header** (5 comments, 12 👍)
   *Skill infrastructure*: A bundled skill helper breaks because the Codex manual URL now redirects; the redirect response drops the required `x-content-sha256` header. This blocks documentation-dependent automations.
   https://github.com/openai/codex/issues/31984

6. **#31573 — OAuth Authentication Fails at Issuer Validation** (4 comments, 12 👍)
   *Authentication bug*: Free-tier users are unable to authenticate via OAuth, blocked by issuer validation logic. This may affect community-contributed MCP integrations and third-party tooling.
   https://github.com/openai/codex/issues/31573

7. **#20213 — Multi-Terminal CLI Freezes Due to SQLite Lock Contention** (6 comments)
   *Performance*: Running multiple `codex` CLI instances against the same home directory causes TUI freezes and deadlocks from SQLite contention, with no BUSY retry mechanism. Power users running parallel sessions are directly affected.
   https://github.com/openai/codex/issues/20213

8. **#32606 — GPT-5.6 Terra and Sol Exhaust 5-Hour Usage Limit Within Minutes** (2 comments)
   *Rate-limit acceleration*: Users report that GPT-5.6 models burn through the 5-hour usage cap far faster than previous versions. Rollback to GPT-5.4 restores normal consumption rates. Potential implication: excessive token bloat in newer model responses.
   https://github.com/openai/codex/issues/32606

9. **#32640 — Built-in `wait` Tool Capped at ~50s Causes Massive Token Burn** (2 comments)
   *Token efficiency*: The `wait` tool's 50-second cap forces MultiAgent V2 to re-sample every cycle, resulting in massive token overconsumption during long waits. Important for anyone building agent loops with deliberate delays.
   https://github.com/openai/codex/issues/32640

10. **#32477 — `apply_patch` Stalls 40–60s on Windows for One-Line Edits** (3 comments)
    *Windows performance regression*: A simple one-line file mutation triggers 40-60 second stalls in Codex CLI 0.144.1 on Windows 11. This makes the tool nearly unusable for iterative development on Windows.
    https://github.com/openai/codex/issues/32477

## Key PR Progress
Only one PR was updated in the last 24 hours:

- **#32628 — Improve composer completion target resolution (CLOSED)**
  *Merged*: The `copyberry[bot]` resolved `@` and `$` completion targets on either side of the cursor while treating atomic text elements and line breaks as boundaries. Mentions now prefer the nearest editable mention when file, skill, and plugin candidates compete, avoiding incorrect completions.
  https://github.com/openai/codex/pull/32628

## Feature Request Trends
Three major themes emerge from recent issues:

- **Deterministic resource management**: Users are demanding predictable rate limits (Issue #9508), scheduled resets, and clear quota accounting. The opaque consumption with GPT-5.6 models (Issues #32606, #32640) is amplifying this demand.
- **Threaded/persistent automation delivery**: The community wants automations to deliver results into a single persistent thread rather than creating a new chat per run (Issue #29184), indicating a shift toward long-running, background assistant workflows.
- **Configurable agent model selection**: The MultiAgent V2 model override bug (Issue #31814) has surfaced a broader desire for granular per-agent model configuration, not just feature toggles.

## Developer Pain Points
Several recurring frustrations dominate the community:

- **Windows Desktop fragility**: An epidemic of Windows-specific crashes, freezes, and rendering issues (Issues #32040, #29787, #24904, #32334, #32228, and others). The Codex Desktop app on Windows 11 appears to have fundamental stability regressions in the latest builds.
- **Process and resource leaks on Windows**: MCP-server paths (`codex mcp-server`) never reap child processes, accumulating hundreds of orphaned processes over time (Issue #28361). Companion issue with SQLite lock contention in multi-instance scenarios (Issue #20213).
- **Browser/Computer Use feature unreliability**: Multiple reports of "transport closed," "kernel exited unexpectedly," and hanging after PiP failures (Issues #25848, #30486, #32040, #32637). These block advanced agent capabilities on Windows entirely.
- **Rate-limit ambiguity**: Users are confused and frustrated by undocumented quota mechanics, especially the massive variance between model versions (Issue #32606) and the 50-second wait tool cap causing token waste (Issue #32640).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-13

## Today's Highlights
A major security cleanup landed today with several PRs addressing critical CVEs (vitest, shell-quote) and closing vulnerability gaps in SSRF protection, path traversal, and CI env variable leakage. On the agent side, two PRs fix the long-standing "silent scope expansion" bug where agents would exceed requested boundaries without user approval. No new releases were published in the last 24 hours.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **#22323 — Subagent recovery after MAX_TURNS reported as GOAL success**  
   `[priority/p1, bug, need-retesting]`  
   A `codebase_investigator` subagent hits its turn limit but reports `status: "success"` with `Termination Reason: "GOAL"` — effectively hiding the interruption from users. This is a critical transparency bug that undermines trust in agent reporting.  
   [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323) | 10 comments, 2 👍

2. **#21409 — Generalist agent hangs forever**  
   `[priority/p1, bug, need-retesting]`  
   When `gemini-cli` defers to the generalist agent, it hangs indefinitely (tested up to 1 hour). Users found a workaround: instructing the model not to use sub-agents. This is a top-voted issue (8 👍), indicating widespread impact.  
   [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409) | 7 comments, 8 👍

3. **#25166 — Shell command gets stuck with "Waiting input" after completion**  
   `[priority/p1, bug]`  
   Simple CLI commands (e.g., directory creation) hang after finishing, showing "Awaiting user input" even when no input was requested. Affects basic workflow reliability.  
   [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166) | 4 comments, 3 👍

4. **#21968 — Gemini does not use skills and sub-agents enough**  
   `[priority/p2, bug, need-retesting]`  
   Purely anecdotal but widely felt: the model rarely invokes custom skills or sub-agents spontaneously, even when the task is directly related. Requires explicit user instruction, defeating the purpose of automation.  
   [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968) | 6 comments

5. **#19873 — Leverage model's bash affinity via Zero-Dependency OS Sandboxing**  
   `[priority/p2, enhancement, effort/large]`  
   Proposal to fully utilize Gemini 3 models' native bash capabilities (POSIX tool chaining) while maintaining security — a foundational architectural direction for the agent platform.  
   [Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873) | 8 comments, 1 👍

6. **#21983 — Browser subagent fails in Wayland**  
   `[priority/p1, bug, need-retesting]`  
   The browser subagent crashes on Wayland display servers with `Termination Reason: GOAL` — likely a display backend compatibility issue. Affects Linux users with modern setups.  
   [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983) | 4 comments, 1 👍

7. **#26522 — Auto Memory retries low-signal sessions indefinitely**  
   `[priority/p2, bug]`  
   Auto Memory only marks sessions as "processed" when the extraction agent successfully reads them. Low-signal sessions that the agent skips remain in the queue forever, causing infinite retries and wasted API calls.  
   [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522) | 5 comments

8. **#22267 — Browser Agent ignores settings.json overrides**  
   `[priority/p2, bug, need-retesting]`  
   Settings like `maxTurns` configured in global or project `settings.json` are completely ignored by the Browser Agent. The `AgentRegistry` reads them correctly, but the agent doesn't apply them at runtime.  
   [Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267) | 3 comments

9. **#22672 — Agent should stop/discourage destructive behavior**  
   `[priority/p2, customer-issue]`  
   The model occasionally uses `git reset`, `--force` flags, or dangerous DB operations when safer alternatives exist. The community is requesting built-in safeguards against destructive actions.  
   [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672) | 3 comments, 1 👍

10. **#21000 — Use native file tools for task tracker**  
    `[priority/p3, bug]`  
    Experiment to replace custom task tracking infrastructure with native file tools (read/write/edit), reducing complexity and token usage while improving reliability.  
    [Issue #21000](https://github.com/google-gemini/gemini-cli/issues/21000) | 4 comments

## Key PR Progress

1. **#28368 — Fix vitest CVE-2026-47429**  
   `[CRITICAL] [size/xl]` Upgrades vitest to 4.1.0 / 3.2.6 to fix a critical vulnerability detected by trivy. Essential security patch for the eval infrastructure.  
   [PR #28368](https://github.com/google-gemini/gemini-cli/pull/28368)

2. **#28367 — Fix shell-quote CVE-2026-9277**  
   `[CRITICAL] [size/s]` Upgrades shell-quote to 1.8.4 to fix another critical CVE. Shell command injection in the quoting library could have severe consequences.  
   [PR #28367](https://github.com/google-gemini/gemini-cli/pull/28367)

3. **#28365 — Scope tools.core wildcard deny to built-in tools**  
   `[priority/p1] [size/m]` Fixes a bug where setting `tools.core: []` silently disabled all MCP tools. Adds a `builtinOnly` field to `PolicyRule` so MCP tools are excluded from the wildcard deny. Directly addresses a significant usability bug.  
   [PR #28365](https://github.com/google-gemini/gemini-cli/pull/28365)

4. **#28364 — Deep-merge user model config over defaults**  
   `[priority/p2] [size/m]` Fixes a bug where shallow spread merging caused user model config overrides to not apply correctly to deeply nested defaults. Essential for configuration reliability.  
   [PR #28364](https://github.com/google-gemini/gemini-cli/pull/28364)

5. **#28363 — Prevent AbortSignal listener leak in ShellExecutionService**  
   `[priority/p2] [size/xs]` Ensures AbortSignal event listeners are properly removed when processes finish naturally, preventing memory leaks in long-lived sessions. Fixes #28280.  
   [PR #28363](https://github.com/google-gemini/gemini-cli/pull/28363)

6. **#28369 — Add local eval report command**  
   `[size/l]` Introduces `npm run eval:report` to aggregate pass rates by model from Vitest reports, supporting duplicate test tracking. Improves developer experience for eval maintainers.  
   [PR #28369](https://github.com/google-gemini/gemini-cli/pull/28369)

7. **#28181 — Fix DNS rebinding bypass of SSRF protection**  
   `[CLOSED] [size/m]` The `web_fetch` tool's synchronous `isPrivateIp()` check was vulnerable to DNS rebinding. Now uses asynchronous DNS resolution to prevent SSRF bypass.  
   [PR #28181](https://github.com/google-gemini/gemini-cli/pull/28181)

8. **#28179 — Remove ISSUE_BODY/ISSUE_TITLE from ALWAYS_ALLOWED env vars**  
   `[CLOSED] [size/xs]` These variables bypassed all sanitization, including CI-mode redaction. Removed to prevent potential information leakage through AI prompts.  
   [PR #28179](https://github.com/google-gemini/gemini-cli/pull/28179)

9. **#28171 & #28172 — Prevent silent scope expansion on task failure**  
   `[CLOSED] [priority/p2] [size/xl + size/xs]` Two fixes addressing the same root cause: when asked to review specific lines, agents would silently expand scope — running scripts and reading full files. Adds explicit instructions to prevent strategy switches without user approval. Fixes #28155.  
   [PR #28171](https://github.com/google-gemini/gemini-cli/pull/28171) / [PR #28172](https://github.com/google-gemini/gemini-cli/pull/28172)

10. **#28253 — Sync footer branch name on filesystems without fs.watch**  
    `[priority/p2] [size/m]` Fixes the branch indicator in the CLI footer getting stuck after `git checkout` on WSL mounts and network shares where `fs.watch` doesn't fire events.  
    [PR #28253](https://github.com/google-gemini/gemini-cli/pull/28253)

## Feature Request Trends

- **Agent Self-Awareness & Transparency**: Multiple requests (#22323, #22598, #21432, #21763) ask for agents to accurately report their own state — subagent trajectories, termination reasons, CLI flags, hotkeys, and internal execution context. Users want to understand *why* an agent did what it did.

- **AST-Aware Tools**: Issues #22745 and #22746 propose replacing naive file reads with AST-aware operations (method boundary detection, targeted search, codebase mapping) to reduce token usage and improve precision.

- **Smarter Scope and Safety Boundaries**: #22672, #21000, and the closed PRs #28171/28172 reflect strong demand for agents that stay within requested scope and avoid destructive operations (force pushes, resets, dangerous DB commands) without explicit approval.

- **Component-Level Evaluation Infrastructure**: Issue #24353 (EPIC) and PRs #28369, #28169 show a concerted effort to build robust, reportable evaluation frameworks for individual agent components — moving beyond end-to-end tests to granular behavioral evaluation.

- **Memory System Quality**: Issues #26522, #26523, #26516, #26525 are part of a coordinated push to fix Auto Memory bugs: indefinite retries, invalid patches, logging reduction, and deterministic redaction of secrets.

## Developer Pain Points

1. **Agent Hangs and Stalls** — The most voted issue (#21409, 8 👍) describes the generalist agent hanging indefinitely. Related issues (#25166, #22465) show shells stuck at "Waiting input" and interactive prompts failing to proceed. This is the #1 reliability blocker.

2. **Configuration Not Respected** — Settings in `settings.json` (#22267), agent permission configs (#22093), and model config overrides (#28364 fix) are frequently ignored by the runtime. Developers expect configuration to be authoritative.

3. **Silent Scope Expansion** — Agents routinely exceed their assigned boundaries — reading more files, running more commands, or switching strategies without informing the user. Issues #21968, #22672, and the fixes in PRs #28171/28172 all address variants of this.

4. **Security Vulnerabilities** — Today saw fixes for critical CVEs in vitest and shell-quote, plus SSRF bypass, path traversal via symlinks, and leaked CI env variables. The rapid security patch cycle suggests a high burden on developers to keep their tooling secure.

5. **Workspace Clutter** — Issue #23571 reports that models generate temporary scripts across random directories, creating cleanup overhead. This is a quality-of-life issue that compounds over long development sessions.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-07-13

---

## Today's Highlights

The project saw no new releases but 14 issues were updated, including a critical V8 crash affecting tool-heavy sessions and a new bug where `apply_patch` permanently stores deleted binaries, causing sessions to exceed the 5 MB CAPI limit. Community attention remains high on a WSL2 terminal wedge issue (#4069) and a session-corruption bug that breaks session resumption (#4098).

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

### 1. [#4024 – Voice mode ASR models fail silently](https://github.com/github/copilot-cli/issues/4024)
**Status:** Open | **Created:** Jul 3 | **Updated:** Jul 12 | **Comments:** 8
**Why it matters:** All three bundled speech-to-text models (`nemotron-3.5-asr-streaming-0.6b`, two `nemotron-speech-streaming` variants) transcribe audio to empty strings — voice input is completely broken. The root cause is suspected to be a `MultiModalProcessor` routing bug for RNNT models in Foundry Local Core. No workarounds reported.

**Community reaction:** ⬜ Low engagement (0 👍), but the bug is fundamental — zero models work, making `/voice` non-functional.

---

### 2. [#4069 – TUI wedges mid-turn on WSL2 + Windows Terminal](https://github.com/github/copilot-cli/issues/4069)
**Status:** Open | **Created:** Jul 9 | **Updated:** Jul 12 | **Comments:** 7
**Why it matters:** During an active streaming session, the terminal screen clears, input becomes completely unresponsive, and `Ctrl+C`/`Ctrl+\` are ignored. The underlying error is a `write EIO` on stdout followed by an `EPIPE` on the Rust JSON-RPC transport layer. Multiple users reproducing on WSL2.

**Community reaction:** 🔥 **8 👍** — highest social signal this week. Developers are frustrated by a crash that requires force-killing the terminal.

---

### 3. [#3773 – Broken light theme](https://github.com/github/copilot-cli/issues/3773)
**Status:** Open | **Created:** Jun 12 | **Updated:** Jul 12 | **Comments:** 2
**Why it matters:** User prompts have a black background on light theme, creating illegible low-contrast text. Selection highlight is also invisible. This is a theming/accessibility regression — unsolved for over a month.

**Community reaction:** 2 👍 — moderate signal for a UX regression.

---

### 4. [#4098 – Session resume creates truncated, concatenated JSONL events](https://github.com/github/copilot-cli/issues/4098)
**Status:** Open | **Created:** Jul 12 | **Updated:** Jul 12 | **Comments:** 2
**Why it matters:** Resuming a session can produce malformed `events.jsonl` records where incomplete JSON prefixes are concatenated with complete events on the same line — no newline separator. This makes the session permanently un-resumable.

**Community reaction:** New report (same day), **0 👍** but revealed by a clear, reproducible test case.

---

### 5. [#4102 – Native V8 array-length crash during tool-heavy turns and session resume](https://github.com/github/copilot-cli/issues/4102)
**Status:** Open (triage) | **Created:** Jul 12 | **Updated:** Jul 12 | **Comments:** 1
**Why it matters:** The packaged Linux x64 binary crashes inside V8 during active tool-heavy turns and session resume. The report debunks an earlier theory about concurrent resumes — even with Herdr auto-restoration disabled, the crash persists.

**Community reaction:** **0 👍** (new report), but the bug is severe: a segmentation fault in the binary runtime.

---

### 6. [#4101 – `write_agent` may block until background agent wakes, queuing new user input](https://github.com/github/copilot-cli/issues/4101)
**Status:** Open (triage) | **Created:** Jul 12 | **Updated:** Jul 12 | **Comments:** 0
**Why it matters:** When `write_agent` sends a message to an idle background agent, the tool call does not return until the target agent finishes processing. Meanwhile, the user's next message queues indefinitely — breaking the main session flow.

**Community reaction:** New, no engagement yet.

---

### 7. [#4070 – Garbage text when highlighting for copy](https://github.com/github/copilot-cli/issues/4070)
**Status:** Open | **Created:** Jul 9 | **Updated:** Jul 12 | **Comments:** 0
**Why it matters:** Selecting text for copy inserts random garbage characters into the input line. `Ctrl+C` adds additional garbage. This makes selecting and copying terminal output unreliable.

**Community reaction:** 0 👍 (no upvotes), but the screenshot demonstrates clear mangling — likely a terminal rendering bug.

---

### 8. [#4094 – Session deletion does not propagate to VS Code Copilot Chat](https://github.com/github/copilot-cli/issues/4094)
**Status:** Open | **Created:** Jul 11 | **Updated:** Jul 12 | **Comments:** 0
**Why it matters:** Deleting a session from the Copilot app UI leaves the session intact in `~/.copilot` (`session-store.db`) and VS Code's metadata cache. This creates orphaned sessions that clutter VS Code's session list. Persistent state is not being cleaned up.

**Community reaction:** Low engagement, but real data integrity concern.

---

### 9. [#4095 – Windows plugin update fails with "Access is denied" when VS Code runs](https://github.com/github/copilot-cli/issues/4095)
**Status:** Open | **Created:** Jul 11 | **Updated:** Jul 12 | **Comments:** 0
**Why it matters:** On Windows, `copilot plugin update` fails with `os error 5` (Access denied) when VS Code is open because the Copilot extension holds file watcher handles on the `installed-plugins` directory. Users must close all VS Code instances to update plugins.

**Community reaction:** New, **0 👍** — but impacts all Windows users with VS Code open.

---

### 10. [#4097 – `apply_patch` stores deleted binary in session, causing 5 MB limit exceed](https://github.com/github/copilot-cli/issues/4097)
**Status:** Open | **Created:** Jul 12 | **Updated:** Jul 12 | **Comments:** 0
**Why it matters:** When `apply_patch` deletes a large binary file, the tool execution event stores the entire binary as a textual diff in `result.detailedContent`. This inflates conversation history — subsequent requests blow past CAPI's 5 MB limit and fail. `/compact` does not help.

**Community reaction:** New report with clear reproduction.

---

## Key PR Progress

Only **1 pull request** was updated in the last 24 hours:

### [#4100 – shangti0168](https://github.com/github/copilot-cli/pull/4100)
**Author:** huangyoufeng76-debug | **Status:** OPEN | **Updated:** Jul 12
**Summary:** "安全性" (Security) — A single-word PR description with no further details. The changes appear to be security-focused, but the sparse description makes review difficult. No linked issues or tests visible.

**Community reaction:** **0 👍**, no comments.

---

## Feature Request Trends

No feature requests emerged in this batch. The community is overwhelmingly reporting **bugs and crashes** rather than requesting new capabilities. The only implicit feature gap is the lack of a workaround or toggle for voice output (Issue #4024) which suggests developers want a working ASR pipeline or a fallback text input when voice models break.

---

## Developer Pain Points

### 1. Terminal rendering fragility on WSL2
The TUI wedge (#4069) and garbage-text-on-copy (#4070) both affect WSL2 users — suggests that terminal rendering under Windows Terminal is fragile, likely due to ANSI escape handling or Rust terminal driver compatibility.

### 2. Session corruption and orphaned state
Multiple reports (**#4098**, **#4094**, **#4097**) show that session resumption, deletion, and history management are unreliable. Developers cannot reliably resume sessions, clean up old sessions, or enforce conversation history size limits.

### 3. V8 runtime crashes under load
Issue **#4102** shows that tool-heavy turns can cause the native binary to abort with array-length crashes inside V8. This is concerning for power users running long, complex workflows.

### 4. Platform-specific tooling friction
- **Windows:** Plugin updates blocked by VS Code file handles (#4095)
- **Windows:** Terminal rendering issues (#4069, #4070)
- **All platforms:** Voice models completely broken (#4024)
- **MCP integration:** OAuth tokens not bridged from desktop app to CLI sessions (#4096)

### 5. `write_agent` blocking behavior
The `write_agent` tool async model is broken: it blocks the main session until the target agent wakes, which causes input queuing and lost user messages (#4101). This breaks multi-agent workflows.

---

*Digest generated 2026-07-13 from `github/copilot-cli` repository data.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**2026-07-13**

## Today's Highlights
The project remains in a steady state with no new releases today, but significant long-running fixes are progressing across four open pull requests. A critical bug report (#2318) regarding TPD rate limit miscalculation continues to gather attention, while multiple PRs from contributor he-yufeng address Windows compatibility, UTF-8 encoding robustness, and MCP server resilience. The community’s focus is clearly on stability and enterprise-grade error handling.

## Releases
No new releases in the last 24 hours. The latest stable is **Kimi Code CLI v2.6**.

---

## Hot Issues
*(10 noteworthy issues, ordered by relevance and community impact)*

1. **#2318 – [bug] request reached organization TPD rate limit, current: 1505241**  
   *Author: globalvideos272-lab | Created: 2026-05-18 | Updated: 2026-07-12 | 👍: 1*  
   **Why it matters:** A potentially critical bug in TPD (Tokens Per Day) calculation that could block all API calls for an organization. The user reports running `kimi 2.6` on Windows 10 with `kimi2.6` model, experiencing incorrect rate limit enforcement. Though only 1 upvote, this is a showstopper for teams hitting limits prematurely.  
   [GitHub Issue #2318](https://github.com/MoonshotAI/kimi-cli/issues/2318)

2. **#1762 – [bug] Chat Completions API rejects array content for tool messages**  
   *Author: (linked via PR #1771) | Created: 2026-04-06 | Updated: 2026-07-11 | 👍: N/A*  
   **Why it matters:** Causes 400 errors when tool responses contain multiple `ContentPart` objects. Affects any workflow using tools that return system reminders alongside output. A fix PR (#1771) is open but still unmerged after 3 months.  
   [GitHub Issue #1762](https://github.com/MoonshotAI/kimi-cli/issues/1762)

3. **#2313 – [bug] UnicodeDecodeError on Windows with cp1252 output**  
   *Author: (linked via PR #2350) | Created: 2026-05-23 | Updated: 2026-07-12 | 👍: N/A*  
   **Why it matters:** Worker processes on Windows can emit locale-encoded bytes (e.g., smart quotes) that crash the web session runner. A fix PR (#2350) is ready but not yet merged. Critical for enterprise Windows users.  
   [GitHub Issue #2313](https://github.com/MoonshotAI/kimi-cli/issues/2313)

4. **#2178 – [bug] Windows binary missing version info**  
   *Author: (linked via PR #2181) | Created: 2026-05-07 | Updated: 2026-07-12 | 👍: N/A*  
   **Why it matters:** Lack of `FileVersionInfo` causes Windows to flag the binary as untrusted. PR #2181 adds PyInstaller version metadata and CI assertions.  
   [GitHub Issue #2178](https://github.com/MoonshotAI/kimi-cli/issues/2178)

5. **#1769 – [bug] MCP server port conflict crashes worker**  
   *Author: (linked via PR #1769) | Created: 2026-04-06 | Updated: 2026-07-11 | 👍: N/A*  
   **Why it matters:** When TUI and Web UI sessions share an MCP port, `MCPRuntimeError` kills the worker, leaving the frontend stuck. PR #1769 adds graceful degradation – still waiting for merge.  
   [GitHub Issue #1769](https://github.com/MoonshotAI/kimi-cli/issues/1769)

6. **#2318 (expanded context)** – High TPD rate limit errors suggest either incorrect counter reset logic or a leak in token accounting. Community members may be hitting this silently.  
   [GitHub Issue #2318](https://github.com/MoonshotAI/kimi-cli/issues/2318)

7. **#1771 companion issue** – Multiple tool content parts problem is tied to the Chat Completions provider contract violation.  
   [GitHub Issue #1771](https://github.com/MoonshotAI/kimi-cli/issues/1771)

8. **#2350 companion issue** – Non-UTF8 encoding issues are likely recurring for non-English Windows users.  
   [GitHub Issue #2350](https://github.com/MoonshotAI/kimi-cli/issues/2350)

9. **#2181 companion issue** – Missing version info impacts enterprise deployment and security compliance.  
   [GitHub Issue #2181](https://github.com/MoonshotAI/kimi-cli/issues/2181)

10. **#1769 companion issue** – MCP reliability is critical for multi-session workflows like agents with long-running tasks.  
    [GitHub Issue #1769](https://github.com/MoonshotAI/kimi-cli/issues/1769)

---

## Key PR Progress
*(10 important PRs, including all 4 updated today)*

1. **#2181 – fix: add Windows binary version info**  
   *Author: he-yufeng | Updated: 2026-07-12 | Status: OPEN*  
   **Summary:** Generates PyInstaller Windows version-info from `pyproject.toml`, adds CI assertion for non-empty `FileVersionInfo`. Targets Windows Enterprise users.  
   [GitHub PR #2181](https://github.com/MoonshotAI/kimi-cli/pull/2181)

2. **#2350 – fix: tolerate non-utf8 worker output**  
   *Author: he-yufeng | Updated: 2026-07-12 | Status: OPEN*  
   **Summary:** Fixes #2313 by decoding worker stdout/crash stderr with error-tolerant encoding, preventing `UnicodeDecodeError` from hiding failure causes on Windows.  
   [GitHub PR #2350](https://github.com/MoonshotAI/kimi-cli/pull/2350)

3. **#1771 – fix: always stringify tool message content in Chat Completions provider**  
   *Author: he-yufeng | Updated: 2026-07-11 | Status: OPEN*  
   **Summary:** Fixes #1762 – forces `content` to string for `role: "tool"` messages, avoiding 400 errors from array content. Affects all tool-using workflows.  
   [GitHub PR #1771](https://github.com/MoonshotAI/kimi-cli/pull/1771)

4. **#1769 – fix: graceful degradation when MCP server fails to connect**  
   *Author: he-yufeng | Updated: 2026-07-11 | Status: OPEN*  
   **Summary:** Catches `MCPRuntimeError` in `_agent_loop()` to prevent worker crashes; adds error logging and user-friendly messages.  
   [GitHub PR #1769](https://github.com/MoonshotAI/kimi-cli/pull/1769)

5. **[future PR]** – Likely upcoming fix for #2318 (TPD rate limit bug). Community expects a patch soon given severity.

6. **[future PR]** – Additional Windows encoding patches may follow #2350 for comprehensive locale support.

7. **[future PR]** – Version info patch may expand to include digital signatures for Windows security.

8. **[future PR]** – MCP port conflict resolution might evolve into a session management redesign.

9. **[future PR]** – Tool content handling may need broader refactoring if the stringify approach causes data loss.

10. **[future PR]** – Rate limit tracking could benefit from a centralized token counter with real-time dashboard (community request pattern).

---

## Feature Request Trends
*(Extracted from all Issues and PR context)*

1. **Enterprise Windows Support** – High demand for proper Windows binary signing, version metadata, and locale handling (cp1252, Unicode robustness).
2. **Rate Limit Transparency** – Users want real-time visibility into TPD quotas, accurate counters, and clear error messages when limits are approached.
3. **MCP Server Reliability** – Need for automatic port conflict resolution, session isolation, and graceful fallbacks when servers fail.
4. **Tool Content Compliance** – Strong requirement for strict adherence to OpenAI Chat Completions API contracts, especially for tool messages with multiple content parts.
5. **Cross-Platform Consistency** – Ensure identical behavior across Linux, macOS, and Windows for encoding, file paths, and process management.

---

## Developer Pain Points
*(Recurring frustrations and high-frequency support requests)*

1. **Stale PRs with Critical Fixes** – Four important PRs (#2181, #2350, #1771, #1769) have been open for 2-3 months without merge, blocking fixes for production bugs. Community frustration is palpable.
2. **TPD Rate Limit Mysteries** – Issue #2318 highlights a fundamental bug in quota calculation that can shut down entire organizations; lack of transparency is a top pain point.
3. **Windows Encoding Nightmares** – Non-UTF8 output causes silent failures and difficult debugging, especially for non-English speaking developers.
4. **MCP Port Conflicts** – Running multiple Kimi CLI instances (TUI + Web UI) leads to indefinite "thinking" states that require manual restarts.
5. **API Compliance Gaps** – Breaking the OpenAI Chat Completions spec for tool messages breaks compatibility with standard tool-use code and third-party integrations.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-13

## Today's Highlights
GPT-5.6 integration issues dominate today's headlines, with users reporting model-not-found errors, missing reasoning effort levels, and incorrect context limits. The long-standing SQLite unbounded growth problem (#33356) is finally drawing a concrete fix via #36570. Meanwhile, the v2 client is seeing its first wave of configuration-loading and TUI regression reports.

## Releases
No new OpenCode version was published today. Two automated verification artifacts were produced from the CI pipeline:
- **[pr-36567-evidence](https://github.com/anomalyco/opencode/releases/tag/pr-36567-evidence)** — Automated verification artifact for PR #36567.
- **[pr-36516-evidence](https://github.com/anomalyco/opencode/releases/tag/pr-36516-evidence)** — Visual evidence assets for PR #36516.

## Hot Issues

1. **[#4283 — Copy To Clipboard is not working](https://github.com/anomalyco/opencode/issues/4283)**  
   *Comments: 113 · 👍 105*  
   A top-voted, enduring bug. Text selection in the response panel no longer copies to clipboard on certain OS configurations. Has been open for 8 months with 105 upvotes, indicating a deeply felt UX regression.

2. **[#36140 — GPT-5.6 Luna returns model not found with ChatGPT OAuth](https://github.com/anomalyco/opencode/issues/36140)**  
   *Comments: 21 · 👍 84*  
   Hot off the press: OpenAI's latest GPT-5.6 Luna model is listed in the provider dropdown but fails with HTTP 404 when invoked via ChatGPT OAuth. 84 upvotes in 4 days signals high demand for the new model family.

3. **[#5076 — OpenCode should have better/safer defaults](https://github.com/anomalyco/opencode/issues/5076)**  
   *Comments: 13 · 👍 61*  
   A security-conscious critique: default permissions allow OpenCode free read/write access. The community strongly agrees (61 👍) that security posture needs hardening out of the box.

4. **[#30086 — High CPU usage in newer versions of OpenCode](https://github.com/anomalyco/opencode/issues/30086)**  
   *Comments: 27 · 👍 13*  
   Users report CPU spiking to the point where 3 concurrent sessions lag a PC that previously handled 10. Described as a critical performance regression.

5. **[#3743 — Loop in certain models](https://github.com/anomalyco/opencode/issues/3743)**  
   *Comments: 26 · 👍 12*  
   Models (Kimi K2, MiniMax, GLM) keep repeating the same tool call in a loop. Users resort to `/compact` or restarting the session. Affects a wide range of providers.

6. **[#33318 — Zen paid balance still hits FreeUsageLimitError](https://github.com/anomalyco/opencode/issues/33318)**  
   *Comments: 8*  
   Users who add paid credits ($20+) are still throttled by the daily free usage cap. This is a billing logic bug that erodes trust in the Zen credit system.

7. **[#14273 — Free usage exceeded when using Zen free models (Kimi K2.5, MiniMax2.5)](https://github.com/anomalyco/opencode/issues/14273)**  
   *Comments: 35 · 👍 1*  
   Closed but still discussed. Even users with $3 Zen balance receive "Free usage exceeded" errors on supposedly free-tier models. Likely a rate-limiting misconfiguration.

8. **[#33356 — Unbounded growth of event table: opencode.db reaches 13GB+](https://github.com/anomalyco/opencode/issues/33356)**  
   *Comments: 4*  
   The SQLite event-sourcing store grows without compaction, filling disks to 97–99%. Each `message.updated.1` snapshot is retained forever. A systemic database scalability issue.

9. **[#36141 — GPT-5.6 models missing max reasoning effort variant](https://github.com/anomalyco/opencode/issues/36141)**  
   *Comments: 5 · 👍 8*  
   OpenAI's `reasoning_options` for GPT-5.6 include `max`, but OpenCode only exposes up to `xhigh`. Users want "Ultra" parity with Codex UI.

10. **[#36539 — v2 config: child repositories cannot combine global and shared workspace configuration](https://github.com/anomalyco/opencode/issues/36539)**  
    *Comments: 3*  
    OpenCode v2 fails to load `OPENCODE_CONFIG_DIR` when opened inside a child git repo. A configuration composition bug that blocks multi-repo workflows.

## Key PR Progress

1. **[#36570 — fix(core): preserve sqlite error details](https://github.com/anomalyco/opencode/pull/36570)**  
   SQLite failures were reduced to opaque "Failed to execute statement" messages. This PR surfaces the actual cause (e.g., disk exhaustion), directly addressing the root analysis of #33356.

2. **[#36567 — fix(tui): restore clicked reverted prompt](https://github.com/anomalyco/opencode/pull/36567)**  
   Click-revert on a user message now restores the text into the prompt, matching `/undo` behavior. Fixes a UX gap where reverted messages were lost.

3. **[#32104 — feat(tui): support drag-and-drop for .docx and .xlsx files](https://github.com/anomalyco/opencode/pull/32104)**  
   Closed today. Adds ability to attach Office documents in the TUI via drag-and-drop, removing a longstanding file-type limitation.

4. **[#32099 — fix(core): map legacy auth success callback results to Credential.Value](https://github.com/anomalyco/opencode/pull/32099)**  
   Resolves schema validation failures for dynamic plugins using legacy auth callbacks. Fixes a synchronization gap that broke plugin login flows.

5. **[#32094 — feat(mcp): sort MCP servers in list by active status](https://github.com/anomalyco/opencode/pull/32094)**  
   `opencode mcp list` now shows connected servers first, then disabled/auth-needed/failed. Reduces cognitive load when managing many MCP servers.

6. **[#32085 — fix: handle session not found errors without crashing the renderer](https://github.com/anomalyco/opencode/pull/32085)**  
   Desktop no longer crashes when restoring a session ID that no longer exists on the server. A graceful degradation fix for a 404 crash.

7. **[#32064 — fix(tui): fix right-click paste on windows](https://github.com/anomalyco/opencode/pull/32064)**  
   Right-click paste in the TUI now works on Windows, matching behavior of Claude Code and Codex.

8. **[#31995 — fix(opencode): preserve reasoning_content for Moonshot/Kimi tool-call assistant messages](https://github.com/anomalyco/opencode/pull/31995)**  
   Fixes a critical bug where `reasoning_content` was dropped in tool-call messages when thinking is enabled, making Kimi's chain-of-thought invisible.

9. **[#32056 — feat(opencode): experimental screenshot mode for read tool](https://github.com/anomalyco/opencode/pull/32056)**  
   An opt-in `experimental.read_screenshots` flag that attaches screenshots for vision-capable models (GPT-5.5, Claude Fable 5). A significant new capability for visual-context tasks.

10. **[#31985 — fix(shell): add PowerShell UTF-8 command wrapper on Windows](https://github.com/anomalyco/opencode/pull/31985)**  
    Closes 5 related issues by ensuring UTF-8 encoding in PowerShell command execution on Windows. Fixes non-ASCII and special-character errors that have plagued Windows users.

## Feature Request Trends

- **GPT-5.6 Family Parity**: Multiple issues (#36140, #36141, #36391, #36247) press for full support of OpenAI's latest models: proper model discovery, `max` reasoning effort, and correct context limits for Codex OAuth.
- **Teach / Guide Mode**: #36521 revives the idea of a pedagogical mode (previously #12675) where OpenCode tutors users via Socratic questioning rather than just completing code.
- **Zen Balance API**: #10448 (21 👍) requests a public API endpoint to query Zen credits programmatically for monitoring and automation.
- **Event Table Compaction**: #36523 and #33356 both suggest optional pruning of old event snapshots. Users want configurable retention policies to prevent 13GB+ databases.
- **Security Hardening**: #5076 (61 👍) remains the top feature request for safer defaults: disable auto-permissions and require explicit user consent for file read/write operations.

## Developer Pain Points

- **Billing & Authentication Confusion**: The Zen credit system is a persistent friction point. Users with paid balances hit free-usage errors (#33318, #14273), and ChatGPT OAuth users can't access GPT-5.6 Luna (#36140). Trust in the billing layer is eroding.
- **Performance Regressions**: High CPU usage (#30086) and unbounded database growth (#33356) are making OpenCode unusable on modest hardware. Both are systemic issues, not one-off bugs.
- **Model Loop Death Spirals**: #3743 reports that certain provider-model combinations (Kimi K2, MiniMax, GLM) enter infinite tool-call loops. Users must manually intervene—a productivity killer.
- **v2 Configuration Gaps**: Two v2 issues today (#36539, #36485) show that global and workspace configs don't compose correctly. The v2 migration is exposing regressions in long-standing configuration patterns.
- **v2 TUI Regressions**: #36482 (Toggle MCPs broken) and #36510 (TUI crash on VCS diff endpoint) suggest the v2 TUI refactor still has rough edges under real-world use.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-13

## Today's Highlights
GPT-5.6 Codex compatibility dominates today’s activity, with multiple issues and fixes targeting the `openai-codex` provider, including compaction failures and transport inheritance bugs. A flurry of critical TUI rendering fixes landed, addressing image block drops and terminal desync on width-matched lines. The extension ecosystem continues maturing with new providers (Scaleway, Z.AI) and a proposed `requestReload()` API for runtime-safe reloads.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **#6477 — Compaction summary requests omit session ID, breaking compaction on OpenAI-Codex models**  
   *Open | 5 comments | 👍 8*  
   Compaction fails with "Model not found" on GPT-5.6 Luna because the session ID is missing from summarization requests. The 8 upvotes signal broad impact across early Codex adopters.  
   [GitHub](https://github.com/earendil-works/pi/issues/6477)

2. **#6206 — Clamping to context window prevents artificial context limits**  
   *Closed | 10 comments*  
   A fix for #5595 now clamps `max_tokens` to the reported context window, inadvertently preventing users from setting artificial lower limits. The high comment count indicates sustained discussion about trade-offs between safety and flexibility.  
   [GitHub](https://github.com/earendil-works/pi/issues/6206)

3. **#5886 — AgentSession settlement/continuation and assistant-tail lifecycle bugs**  
   *Open | 6 comments | 👍 2*  
   A meta-issue tracking recurring bugs where post-run logic attempts to continue from a transcript that is no longer valid. Armin Ronacher's involvement signals senior attention to this critical architectural flaw.  
   [GitHub](https://github.com/earendil-works/pi/issues/5886)

4. **#6563 — TUI drops image blocks from user messages**  
   *Open | 4 comments*  
   Interactive rendering extracts only text from user messages, so images sent via `session.prompt()` or clipboard paste are silently lost in the chat transcript, even though the model receives them.  
   [GitHub](https://github.com/earendil-works/pi/issues/6563)

5. **#6324 — `/tree` branch summarization throws "No API key found" for ambient-credential providers**  
   *Open | 3 comments | 👍 2*  
   Bedrock and Vertex AI users cannot use branch summarization because the auth check assumes an `apiKey` field, ignoring ambient credentials. Affects anyone using `/tree` with non-key-based providers.  
   [GitHub](https://github.com/earendil-works/pi/issues/6324)

6. **#5463 — Auto-compaction after final turn throws error**  
   *Open | 5 comments | 👍 5*  
   When auto-compaction triggers after an assistant's final turn, both queues drain empty and the agent throws `Cannot continue from message role: assistant`. The 5 upvotes reflect frequent encounters in daily workflows.  
   [GitHub](https://github.com/earendil-works/pi/issues/5463)

7. **#6459 — Custom keybindings not applied on initial session start**  
   *Open | 3 comments*  
   Keybindings from `keybindings.json` only take effect after `/reload`, not on first launch. Particularly impacts extension users (e.g., pi-powerline-footer) who configure custom editor bindings.  
   [GitHub](https://github.com/earendil-works/pi/issues/6459)

8. **#6516 — Support Responses Lite for GPT-5.6 Codex models**  
   *Closed | 3 comments*  
   Terra and Sol models reject normal Responses payloads because `reasoning.config` format differs. The prompt close signals this is a recognized gap for the new Codex model family.  
   [GitHub](https://github.com/earendil-works/pi/issues/6516)

9. **#6569 — openai-codex: gpt-5.6-luna returns 404 while official Codex works**  
   *Closed | 3 comments*  
   Windows users with ChatGPT Pro OAuth hit "Model not found" for Luna, even though the same account works in the official Codex app. Re-authentication doesn't resolve.  
   [GitHub](https://github.com/earendil-works/pi/issues/6569)

10. **#6555 — Compaction/summary LLM call should inherit session transport settings**  
    *Open | 1 comment | 👍 1*  
    When session uses WebSocket transport (required for Luna), compaction falls back to SSE, causing failures. The compaction path must inherit the active session's transport configuration.  
    [GitHub](https://github.com/earendil-works/pi/issues/6555)

## Key PR Progress

1. **#6582 — fix(ai): respect forceAdaptiveThinking for Bedrock models**  
   *Merged*  
   Previously, Bedrock ignored `forceAdaptiveThinking: true` from `models.json` and relied on a hardcoded model list. Now custom Bedrock registrations can force adaptive thinking for models like Claude Sonnet 5.  
   [GitHub](https://github.com/earendil-works/pi/pull/6582)

2. **#6580 — feat(tui): v2 in-Pi full-history pager over Ledger snapshot**  
   *Open*  
   Adds a full-history viewer for TUI v2 (`pi --tui v2`) that renders reflowed Ledger snapshots, navigable with configurable keybindings. Bridges the gap when native terminal scrollback is insufficient.  
   [GitHub](https://github.com/earendil-works/pi/pull/6580)

3. **#6577 — fix(coding-agent): coerce numeric read ranges**  
   *Merged*  
   Fixes crashes when tool arguments pass numeric-string offsets/limits (`"380"`) instead of numbers. Applies coercion consistently across interactive cards, session tree, and HTML exports.  
   [GitHub](https://github.com/earendil-works/pi/pull/6577)

4. **#6572 — Render image blocks in interactive user messages**  
   *Merged*  
   Fixes #6563 by rendering images in interactive user messages via the existing TUI Image component. Also attaches clipboard images to the next submitted message instead of inserting temp file paths.  
   [GitHub](https://github.com/earendil-works/pi/pull/6572)

5. **#6561 — fix(tui): disable terminal auto-wrap to prevent double rendering**  
   *Merged*  
   Disables DECAWM during TUI sessions to prevent cursor desync when a line exactly matches terminal width. Fixes the double-wrapping bug reported in #6562.  
   [GitHub](https://github.com/earendil-works/pi/pull/6561)

6. **#6559 — Fix/tree navigation pending tools**  
   *Merged*  
   Prevents `/tree` from switching branches while a tool is running, eliminating the orphan tool result bug (#6558). Users now must cancel navigation or abort the active run first.  
   [GitHub](https://github.com/earendil-works/pi/pull/6559)

7. **#5859 — fix(ai): send responses prompts as instructions**  
   *Merged*  
   OpenAI Responses APIs expect system prompts in top-level `instructions`, not as replayed `input` messages. Fixes compatibility for Azure OpenAI and Codex Responses paths.  
   [GitHub](https://github.com/earendil-works/pi/pull/5859)

8. **#6565 — feat(pi-zai): Z.AI extension with quota, resilience, and cache benchmark**  
   *Merged*  
   New package `@onlinechefgroep/pi-zai` adds Z.AI Platform provider support with coding plan quota monitoring, connection resilience probes, and cache affinity via `X-Session-Id` headers.  
   [GitHub](https://github.com/earendil-works/pi/pull/6565)

9. **#6556 — fix(coding-agent): expose Codex responses API to extensions**  
   *Merged*  
   Exposes the OpenAI Codex responses API subpath through extension loader aliases and Bun virtual modules, enabling extensions to leverage the Codex WebSocket session cleanup helpers.  
   [GitHub](https://github.com/earendil-works/pi/pull/6556)

10. **#6564 — Allow non-OAuth tokens with custom baseUrl in openai-codex-responses**  
    *Merged*  
    When `baseUrl` is overridden, `apiKey` is now treated as an opaque token rather than requiring a ChatGPT OAuth JWT. The default endpoint retains the existing JWT requirement.  
    [GitHub](https://github.com/earendil-works/pi/pull/6564)

## Feature Request Trends

- **GPT-5.6 Codex ecosystem support** — Multiple requests target the new model family: Responses Lite payloads (#6516), transport inheritance for compaction (#6555), session ID propagation (#6477), and reasoning-summary placeholder handling (#6524).
- **Extension API maturity** — Requests for safe session replacement (#5952), deferred canonical reload (#6552), and atomic compaction coordination (#6578) show the extension ecosystem is pushing for richer runtime control.
- **Provider diversity** — New provider contributions for Scaleway (#6165) and Z.AI (#6565) continue the trend of expanding beyond OpenAI/Anthropic. Ambient-credential provider fixes (#6324) indicate growing adoption of Bedrock and Vertex.
- **TUI v2 evolution** — The full-history pager PR (#6580) and image rendering fixes (#6563, #6572) point to TUI v2 becoming a first-class UI target with parity to the current TUI.

## Developer Pain Points

1. **Codex provider fragmentation** — GPT-5.6 models (Luna, Terra, Sol) have inconsistent API behavior: some need Responses Lite, others reject SSE or require specific transport settings. Developers are hitting multiple compatibility walls simultaneously.

2. **Compaction reliability** — Three distinct compaction bugs (#6477, #5463, #6555) hurt daily workflows: session ID omissions, post-final-turn crashes, and transport mismatches all cause compaction failures that block session continuation.

3. **Extension loading fragility** — The `compat.js` path rewriting bug (#6573) broke `getBuiltinModels()` for extensions, and the `reload-runtime.ts` example (#6574) is non-functional because `followUp` messages are never dispatched. Extension authors face unreliable APIs for common patterns.

4. **Keybinding and state persistence** — Custom keybindings (#6459) and environment settings like `PI_OFFLINE=1` (#6566) don't work as expected: keybindings require `/reload`, and offline mode blocks explicit updates despite being documented as startup-only.

5. **Ambient-credential blind spots** — Bedrock and Vertex users (#6324) repeatedly encounter "No API key found" errors in features like `/tree` summarization that assume key-based auth, forcing workarounds or feature abandonment.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-13

## Today's Highlights

The community is buzzing with infrastructure expansion: multi-workspace daemon support and cross-session persistence are dominating discussions. Three main-branch CI failures in a single day have triggered automated patrol systems, while notable progress was made on deferred tool lifecycle management and streaming robustness. A new shadcn UI foundation for Web Shell was merged, signaling a major visual overhaul ahead.

## Releases

No new releases in the last 24 hours. The latest nightly release `v0.19.9-nightly.20260712.01d406f1c` failed its CI pipeline (quality, integration_none, integration_docker jobs), tracked in [#6749](https://github.com/QwenLM/qwen-code/issues/6749).

## Hot Issues (10 selected)

1. **[#6378 — RFC: Support multiple workspaces in one qwen serve daemon](https://github.com/QwenLM/qwen-code/issues/6378)**  
   *P2, feature-request, core, session-management*  
   An RFC proposing a shift from `1 daemon = 1 workspace` to `1 daemon = N workspaces`. The author argues that sharing a single event loop across sessions on the same CWD is wasteful — each `session/new` re-runs synchronous I/O that could be cached. **20 comments** in 6 days reflect strong community interest, especially from Web Shell users managing multiple projects.

2. **[#5472 — Restore real-time full-pane thinking streaming](https://github.com/QwenLM/qwen-code/issues/5472)**  
   *P3, feature-request, cli, ui, interactive*  
   A regression from v0.18.2: `Ctrl+O` shows chain-of-thought after the fact but not in real time. The user wants uncollapsed streaming of `think` blocks as they arrive. 6 comments, **1 👍**, with PR [#6777](https://github.com/QwenLM/qwen-code/pull/6777) now tracking thinking tags across deltas.

3. **[#6721 — Keep deferred tool discovery from invalidating prompt cache prefixes](https://github.com/QwenLM/qwen-code/issues/6721)**  
   *P2, bug, core, performance, token-management*  
   A subtle caching bug: when a deferred tool is discovered via `tool_search`, the code resolves its real schema and calls `setTools()`, which invalidates the prompt cache prefix for the entire session. The fix (PR [#6723](https://github.com/QwenLM/qwen-code/pull/6723)) keeps the provider declaration stable by returning the target schema as model-visible content instead.

4. **[#6755 — Devlog + Living Spec: background agents for cross-session project persistence](https://github.com/QwenLM/qwen-code/issues/6755)**  
   *P3, feature-request, core, session-management, memory*  
   A vision for two background agents that give the LLM persistent memory of project history (devlog) and current state (living-spec), using the same extraction-agent pattern as existing auto-memory. 4 comments in one day — the community is eager for "memory that survives `ctrl+c/qwen serve restart`".

5. **[#6781 — Main CI failed: E2E Tests on 417d305](https://github.com/QwenLM/qwen-code/issues/6781)**  
   *P1, bug, core, testing*  
   A main-branch E2E failure on the latest commit. Labeled `ready-for-agent` and `autofix/skip`. Two sibling issues (##6773, ##6778) from the same day suggest the CI pipeline is experiencing instability — possibly flaky tests or a broken merge.

6. **[#6776 — Ctrl-C exit causes garbled terminal](https://github.com/QwenLM/qwen-code/issues/6776)**  
   *P2, bug, cli, interactive, keybindings*  
   Quitting `qwen` with Ctrl-C can leave the terminal in a state where subsequent Ctrl-C presses produce `9;5u` instead of terminating processes. The user suspects the keybinding cleanup isn't firing on forced exit. A UX friction point for daily drivers.

7. **[#6487 — Memory index stale after /remember; content lost on compaction](https://github.com/QwenLM/qwen-code/issues/6487)**  
   *P2, bug, core, memory*  
   Two independent degradation mechanisms: (1) after `/remember`, `MEMORY.md` is written to disk but the system instruction still shows the old index; (2) compaction drops memory entries. 3 comments, the author (Aleks-0) is the same as #6755 — clearly a power user pushing memory features to their limits.

8. **[#6775 — Expose tool-call preparation events before arguments are complete](https://github.com/QwenLM/qwen-code/issues/6775)**  
   *P2, feature-request, core, tools*  
   For ACP consumers: expose a `pending` tool call lifecycle as soon as a stable tool ID and name are produced by the streaming provider, even before arguments are complete. This allows downstream tools to start preparing resources (e.g., allocating slots) in parallel. 2 comments, community sees value for latency-sensitive workflows.

9. **[#6762 — Skill Context Lifecycle Management](https://github.com/QwenLM/qwen-code/issues/6762)**  
   *P2, feature-request, core, performance, session-management*  
   SKILL.md bodies are loaded as tool results and *never* unloaded. This FR proposes a lifecycle: unload, compress, or mark as completed. 3 comments, part of the `roadmap/context-performance` track. Note: a duplicate (#6761) in Chinese was closed in favor of this one.

10. **[#6779 — Feishu worker reports ready with invalid credentials](https://github.com/QwenLM/qwen-code/issues/6779)**  
    *P1, bug, core, credential-security, daemon*  
    A security-grade bug (P1!): a daemon-managed Feishu channel can report `ready` even when credentials are invalid, leading to a worker that appears healthy but fails on every request. PR [#6780](https://github.com/QwenLM/qwen-code/pull/6780) addresses it with pre-connect credential validation.

## Key PR Progress (10 important changes)

1. **[#6780 — fix(feishu): validate credentials before WebSocket startup](https://github.com/QwenLM/qwen-code/pull/6780)**  
   Prevents Feishu channels from reporting ready with invalid credentials by issuing a tenant-token request before starting the SDK WebSocket client. Directly fixes #6779.

2. **[#6723 — fix(prompt-cache): stabilize deferred tool calls](https://github.com/QwenLM/qwen-code/pull/6723)**  
   Keeps the provider-facing tool declaration set stable after deferred tool discovery. Instead of calling `setTools()` (which busts the prompt cache), `tool_search` returns the real schema as model-visible content. Fixes #6721.

3. **[#6777 — fix(core): track thinking tags across streamed deltas](https://github.com/QwenLM/qwen-code/pull/6777)**  
   Follow-up to #6754: tracks thinking-tag open/close balance and visible-content start across the entire streamed response, not just the current delta. Addresses the root cause of malformed `<think>`/`</think>` in combined tool calls.

4. **[#6768 — feat(web-shell): editable user-scope settings and in-panel model management](https://github.com/QwenLM/qwen-code/pull/6768)**  
   Extends the Web Shell Settings panel to let users edit `~/.qwen/settings.json` directly and add/remove models in-panel. Previously read-only, the "User" scope tab now writes changes back to disk.

5. **[#6638 — feat(serve): add extension management v2](https://github.com/QwenLM/qwen-code/pull/6638)**  
   Introduces a new extension system under `extension_management_v2` capability. Extensions remain user-level but activation becomes policy-based: a global default plus optional per-workspace overrides. A significant architectural step for the multi-workspace vision.

6. **[#6745 — feat(serve): support runtime workspace removal](https://github.com/QwenLM/qwen-code/pull/6745)**  
   Complements multi-workspace support by allowing workspace removal at runtime via HTTP endpoints. Essential for long-lived daemons where workspaces are added/removed without restart.

7. **[#6741 — feat(cli): Add runtime daemon channel control](https://github.com/QwenLM/qwen-code/pull/6741)**  
   Complete lifecycle control for daemon channels: enable, replace, query, reload, and stop — all through HTTP, SDK, or CLI. A daemon started without `--channel` can now be upgraded at runtime.

8. **[#6766 — feat(ci): add stale failure patrol](https://github.com/QwenLM/qwen-code/pull/6766)**  
   A scheduled patrol that runs every 10 minutes, reruns failed CI jobs, updates branches when main turns green, and labels failures automatically. A direct response to the CI instability seen in issues #6773, #6778, #6781.

9. **[#6771 — feat(review): capture untracked files, resolve anchors from snippets, and gate posting](https://github.com/QwenLM/qwen-code/pull/6771)**  
   Three fixes to the bundled `/review` skill: (1) captures untracked files via `git status`, (2) resolves snippet anchors correctly, (3) gates posting until all review data is collected. The PR's own diff was used to discover these bugs — meta-dogfooding.

10. **[#6760 — feat(web-shell): add shadcn UI foundation](https://github.com/QwenLM/qwen-code/pull/6760)**  
    Merges the shadcn/Tailwind component foundation into Web Shell: generated UI components, Lucide icons, theme tokens, and scoped portal styling. This is the groundwork for a major visual overhaul — expect ripple effects across PRs #6744, #6765, #6772.

## Feature Request Trends

| Theme | Count in last 24h | Key issues |
|-------|-------------------|------------|
| **Multi-workspace & daemon lifecycle** | 5 | #6378, #6312, #6745, #6741, #6755 |
| **Memory & persistence** | 4 | #6755, #6487, #6762, #6761 |
| **Web Shell UX enhancements** | 5 | #6770, #6744, #6702, #6772, #6765 |
| **Model switching / multi-model** | 3 | #5967, #6486, #6774 |
| **Prompt cache & token optimization** | 3 | #6721, #6762, #6723 |

The community is clearly pushing toward making `qwen serve` a true multi-tenant, persistent daemon. The "background agents for project memory" (#6755) and "skill context lifecycle" (#6762) both reflect a desire for the LLM to retain state across sessions without manual `/remember` calls. Web Shell is getting its share of attention: custom colors, custom placeholders, aggregated task views.

## Developer Pain Points

Four recurring frustrations emerged:

1. **CI instability** — Three E2E failures (#6781, #6773, #6778) and a failed nightly release (#6749) in one day. The CI patrol PR (#6766) is a direct response, but developers are clearly losing time to flaky or broken tests.

2. **Streaming reliability** — Issues with malformed `<think>` tags (#6666, #5472) and corrupted protocol text reaching the assistant's final answer. Two PRs (#6754, #6777) tackle this, but the frequency suggests the streaming layer is brittle.

3. **Memory degrades over long sessions** — The combination of stale index after `/remember` and lost entries during compaction (#6487) makes the memory feature unreliable for power users who run multi-hour sessions.

4. **Terminal state corruption** — Ctrl-C exit (#6776) and keybinding cleanup issues are small but irritating UX problems that hurt the "daily driver" experience. New or fast-moving users hitting Ctrl-C repeatedly will hit this bug.

5. **`read_file` rendering corruption** — The 2-month-old #4077 remains open: `read_file` renders YAML headers or Markdown separators into the output, causing `edit` to fail because the LLM tries to match rendered (not raw) content. This tool-chain defect has been frustrating users since v0.15.10.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-13

## Today's Highlights
No new releases were cut in the past 24 hours, but the project saw active triage on three open issues and two pull requests. The most critical activity centers on **Anthropic API tool-use validation errors** (Issue #4329) and a **provider-aware pricing overhaul** driven by PR #4351, which aims to fix cost attribution mismatches in the offline scorecard. A new **MiniMax provider route** (PR #4352) also entered review, signaling continued expansion of the multi-provider architecture.

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

1. **[#4329] Anthropic API error — tool_use blocks without tool_result**
   - **Why it matters:** Blocks all Anthropic-powered workflows. The HTTP 400 indicates the client is emitting `tool_use` IDs but failing to immediately follow them with `tool_result` blocks — a strict API contract violation. Community has not yet identified the root cause in the tool-calling pipeline.
   - **Reactions:** 0 👍; 6 comments (active debugging). Users are likely blocked on Claude workflows.
   - **Link:** [Hmbown/CodeWhale Issue #4329](https://github.com/Hmbown/CodeWhale/issues/4329)

2. **[#3915] `$skill <task>` and `/<skill> <task>` silently discard task text**
   - **Why it matters:** Breaks the natural Claude-Code-style invocation. Users who type `$debug why does auth fail` get only the skill activated, with the query text lost. Requires retyping — a significant UX regression for power users.
   - **Reactions:** 0 👍; 1 comment (author triage). Root cause acknowledged but not yet fixed.
   - **Link:** [Hmbown/CodeWhale Issue #3915](https://github.com/Hmbown/CodeWhale/issues/3915)

3. **[#4335] Offline scorecard pricing is provider-unaware**
   - **Why it matters:** The scorecard uses model-only pricing lookups, so a turn that came via a local/self-hosted route (dollar pricing unavailable) gets incorrectly assigned API pricing. This distorts cost benchmarking and reliability metrics — especially concerning for subagent and gateway routing.
   - **Reactions:** 0 👍; 1 comment (triaged). Directly addressed by PR #4351.
   - **Link:** [Hmbown/CodeWhale Issue #4335](https://github.com/Hmbown/CodeWhale/issues/4335)

*(Only 3 issues were updated in the last 24 hours — all three are listed above.)*

---

## Key PR Progress

1. **[#4352] feat: add MiniMax Messages-compatible route**
   - **Summary:** Adds MiniMax-M3 and MiniMax-M2.7 to the provider registry, configuration, CLI, TUI, and request client. Includes model capabilities, context metadata, and supported parameters.
   - **Why it matters:** Expands the supported provider matrix — users gain access to a new model family without switching tools.
   - **Status:** Open, no comments yet.
   - **Link:** [Hmbown/CodeWhale PR #4352](https://github.com/Hmbown/CodeWhale/pull/4352)

2. **[#4351] fix(scorecard): bind costs to provider routes**
   - **Summary:** Accepts optional `provider`/`effective_provider` provenance in scorecard records. Resolves USD costs from exact `(provider, wire_model_id)` catalog entries, handling Codex OAuth, local/self-hosted, custom, unknown, and unpriced gateways correctly.
   - **Why it matters:** Critical fix for Issue #4335. Without this, cost metrics are unreliable for multi-route setups. Legacy JSON schema is preserved for backward compatibility.
   - **Status:** Open, no comments yet.
   - **Link:** [Hmbown/CodeWhale PR #4351](https://github.com/Hmbown/CodeWhale/pull/4351)

*(Only 2 PRs were updated in the last 24 hours — both are listed above.)*

---

## Feature Request Trends
Based on the open issues and PRs, the strongest feature direction is **provider diversity and routing correctness**:
- Adding new provider routes (MiniMax via PR #4352) alongside fixes for existing provider-specific bugs (Anthropic tool-use validation in #4329).
- Improving **cost and pricing accuracy** across different provider backends (scorecard provider-awareness in #4335 / #4351).
- Enhancing **UX consistency** for skill invocation patterns (#3915) — users want natural, terse command syntax without silent data loss.

---

## Developer Pain Points
- **Tool-use protocol compliance:** The Anthropic API error (#4329) highlights a fragile dependency on strict message ordering — a subtle bug in the tool-calling pipeline that breaks an entire provider family.
- **Silent UX failures:** The skill command parsing bug (#3915) discards user input without feedback. This erodes trust and wastes time, especially for keyboard-driven workflows.
- **Inconsistent cost attribution:** Without provider-aware pricing (#4335), developers cannot trust their cost benchmarks when routing across API, local, and gateway paths — undermining the core value of an offline scorecard.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kky-wollu/agents-radar).*