# AI CLI Tools Community Digest 2026-07-08

> Generated: 2026-07-08 02:51 UTC | Tools covered: 9

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
**Date:** 2026-07-08

---

## 1. Ecosystem Overview

The AI CLI tools landscape on July 8, 2026 shows a market in active maturation, dominated by two distinct camps: established players (Claude Code, OpenAI Codex) investing heavily in stability and plugin ecosystems, and fast-followers (Qwen Code, OpenCode, CodeWhale) racing to close feature gaps while managing growing pains. A clear stratification is emerging: Claude Code and Codex command the most community engagement and developer mindshare, while Gemini CLI and Kimi Code show warning signs of stagnation with low PR velocity and unresolved critical bugs. GitHub Copilot CLI occupies a unique position as the incumbent's answer to AI-native tooling, but its closed-source nature and slow response to community feedback have led to organic alternatives gaining traction. Cross-cutting concerns around cost transparency, Windows parity, session management reliability, and MCP ecosystem maturity appear across virtually every tool community — indicating these are industry-wide challenges rather than vendor-specific issues.

---

## 2. Activity Comparison

| Metric | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | CodeWhale |
|--------|------------|-------------|------------|-------------|-----------|----------|-----|-----------|-----------|
| **New Issues (24h)** | ~10+ | ~8+ | ~2 | ~6 | ~1 | ~6 | ~5 | ~8 | ~5 |
| **Open Hot Issues** | 10 (high engagement) | 10 (very high) | 10 (low activity) | 10 (moderate) | 1 (stale) | 10 (active) | 10 (active) | 10 (active) | 10 (active) |
| **Active PRs (24h)** | 2 (low) | 10 (high) | 10 (moderate) | 0 (none) | 0 (none) | 10 (high) | 10 (high) | 10 (high) | 10 (high) |
| **Releases Today** | 2 (patches) | 1 (stable) + 2 alphas | 0 | 2 (patches) | 0 | 1 (stable) | 0 | 3 (stable + nightly + preview) | 1 (stable) |
| **Community Engagement** | Very High | Very High | Low | Moderate | Very Low | High | High | High | High |
| **Primary Activity Signal** | Cost explosion crisis (#41506: 54 comments) | GPT-5.5 reasoning token clustering (#30364: 156 comments) | Caretaker triage agent infra | v1.0.69 sandbox workflow improvements | Figma MCP (1 issue, 2 upvotes) | Memory megathread (#20695: 108 comments) | Reasoning model null content (#6259: closed) | Multi-workspace daemon RFC (#6378: 19 comments) | v0.8.68 dogfood pipeline (#4092: 11 comments) |

**Key observations:**
- **Claude Code** has moderate PR velocity but exceptionally high issue engagement — the community is focused on reporting problems rather than contributing fixes, reflecting a "waiting for Anthropic" dynamic.
- **OpenAI Codex** leads in both PR velocity and community engagement volume, with 252 upvotes on a single issue. The engineering team is actively shipping infrastructure PRs alongside addressing bugs.
- **Gemini CLI** shows maintenance activity (triage bot, security patches) but low community enthusiasm — issues have few upvotes and stale timelines.
- **Copilot CLI** has zero PR activity, suggesting the team is either in a planning phase or resource-constrained. Patch releases continue from automated pipelines.
- **Kimi Code** is effectively dormant with only 1 issue updated in 24 hours and zero PRs — a clear warning signal for users evaluating long-term viability.
- **Qwen Code, OpenCode, Pi, and CodeWhale** all show healthy dual-track activity: both high issue volume and high PR throughput, indicating active development alongside community growth.

---

## 3. Shared Feature Directions

The following requirements appear across **multiple** tool communities, indicating industry-wide demand:

| Requirement | Tools Where Requested | Specific Community Expression |
|------------|----------------------|-------------------------------|
| **Cost transparency & token budgets** | Claude Code (#41506, #74803), CodeWhale (#2953), Qwen Code (#6264), Pi (#6378) | Real-time per-session counters, proactive limit warnings, configurable token caps |
| **Windows platform parity** | Claude Code (#47327, #73365), OpenAI Codex (#31499, #31511), Gemini CLI (#23848), Copilot CLI (#4001), OpenCode (#35327, #35828), CodeWhale (#1812, #1835), Qwen Code (#6298) | TUI freeze fixes, IME support, PowerShell compatibility, sandbox stability |
| **MCP/Plugin ecosystem hardening** | Claude Code (#75502, #42765), OpenAI Codex (#24103, #31499), Copilot CLI (#4048, #4056), Kimi Code (#1604), CodeWhale (implicit via catalog work) | Pre-release testing, OAuth compliance, process leak prevention, skill discoverability |
| **Session management reliability** | Claude Code (#75496, #75521), OpenAI Codex (#24077, #29868), Copilot CLI (#4054), Pi (#6234), Qwen Code (#6318) | Resume-after-restart, ghost session cleanup, non-git directory support |
| **Hook/event lifecycle parity** | OpenAI Codex (#21753), Copilot CLI (#2643), Qwen Code (#6488), Pi (#6175) | Pre/post hooks, mid-turn streaming events, extension notification on state changes |
| **Agent/Sub-agent visibility** | CodeWhale (#4094), Claude Code (implicit), Qwen Code (#6440) | Live panel population, sub-agent task status, final summary/handoff |
| **Multi-workspace support** | Claude Code (#74066), Qwen Code (#6378), OpenCode (implicit) | Session/cache isolation, single daemon for multiple projects |
| **Safety classifier resilience** | Claude Code (#63819), multiple tools implicitly | Graceful degradation when classifier unavailable; fallback to manual approval |

**Most cross-cutting:** Windows platform parity appears in **7 of 9** tools. Cost/token management appears in **4 tools**. Session management reliability appears in **5 tools**.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Qwen Code | CodeWhale (DeepSeek) |
|-----------|------------|-------------|------------|-------------|-----------|---------------------|
| **Primary User Base** | Power users, CI/CD pipelines | Broader developer ecosystem | Enterprise GCP/Workspace | GitHub-centric teams | Open-source ML community | Frugal/self-hosted developers |
| **Key Technical Strengths** | Hook system maturity, headless sessions, MCP ecosystem | Plugin catalog (npm), web search, SDK feature parity | Google Cloud integration, security-hardened | GitHub Copilot ecosystem integration, sandbox policies | Channel integrations (WeCom, DingTalk), SDK quality | Multi-model routing, Fleet, WhaleFlow workflows |
| **Key Weaknesses** | Cost explosion (3-5x), TUI regressions, Windows second-class | Windows stability crisis, conversation data loss | Stale bugs, subscription misdetection, slow development | Plugin ecosystem instability, closed-source, slow community response | Token management inefficiency, memory system instability, Windows gaps | Windows TUI freezes, streaming timeouts, rebranding confusion |
| **Target Use Case** | Production daily driver, complex multi-step tasks | Feature-rich IDE/CLI hybrid, plugin extensibility | Enterprise CI/CD with Google infra | GitHub-native workflows | APAC developer ecosystem, channel-based workflows | Cost-optimized local/remote hybrid setups |
| **Architecture Approach** | Monolithic agent with hook system | Plugin-first, npm marketplace | SaaS-backed with daemon management | Extension-based, sandbox-enforced | Multi-channel daemon, SDK-first | Multi-model routing, Fleet coordination |
| **Community Contribution Model** | Bug reports only (low PR volume) | Active community + corporate contributions | Corporate-driven + triage automation | Closed-source, feedback-only | Community PRs welcome | Active maintainer + community PRs |
| **Maturity Signal** | Mature but regressing (high tech debt) | Most feature-complete, highest PR velocity | Security-focused but stagnant | Incumbent response, slow iteration | Rapidly maturing, active PR pipeline | High innovation velocity, early stability issues |

---

## 5. Community Momentum & Maturity

**High Momentum (Rapid Iteration):**
- **OpenAI Codex** — Highest combined signal: 252-upvote issue, 10 active PRs today, 3 releases, and substantial infrastructure work (hosted code mode, SQLite degraded mode, web search metadata). The team is shipping both features and stability fixes simultaneously.
- **Qwen Code** — 3 releases today, 10 active PRs, active community RFC process. The `/learn` skill creation command and Fleet View indicate genuine feature innovation, not just bugfixing.
- **OpenCode** — Strong V2 migration progress with 10 PRs today, but the Memory Megathread (#20695 at 108 comments) is a persistent drag. Active community contributions (Portuguese translation, iconv-lite fix) signal grassroots health.
- **CodeWhale (DeepSeek)** — Highest per-release innovation velocity: Fleet, WhaleFlow workflows, catalog system. The maintainer is personally driving the v0.8.68 train with 10 PRs today. Rebranding risk but strong execution.
- **Pi** — Solid PR throughput (10 today) focused on TUI stability and extension documentation. Lower issue engagement but consistent improvement.

**Moderate Momentum (Stable but Not Accelerating):**
- **Claude Code** — Despite 2 patch releases, the project is in a defensive posture: fixing regressions, not shipping features. The cost explosion (#41506) and TUI input regression (#75496, #75521) are eroding trust. Low PR volume (2) from community is concerning.
- **Copilot CLI** — Zero PR activity but 2 patch releases. The v1.0.69 sandbox improvements are meaningful, but the silence on issue #53 (6+ months, 75 upvotes) signals a disconnect between community and maintainers.

**Low Momentum (Stagnation Signals):**
- **Gemini CLI** — 10 PRs today, but these are dominated by the Caretaker triage bot (automation) rather than fixing the 3-month-old P1 bugs (#23973, #24835, #23848). Subscription misdetection and credential corruption are unfixed. The PR velocity is a mirage — it's infrastructure for issue management, not issue resolution.
- **Kimi Code** — Effectively dormant. 1 issue updated in 24 hours, 0 PRs, 0 releases. The Figma MCP request (#1604) is the only sign of life, and it has only 2 upvotes. Users evaluating a long-term tool should consider this a red flag.

---

## 6. Trend Signals

**1. Cost Transparency Is the Defining Competitive Differentiator**
The Claude Code cost explosion (#41506, 54 comments) is not an isolated incident — it's a canary in the coal mine. Across 4 tools, users are demanding real-time token counters, per-session billing, and proactive cost warnings. The tool that ships first-class cost visibility will win trust from budget-conscious developers and enterprises.

**2. Windows Parity Is No Longer Optional**
With 7 of 9 tools having active Windows-specific bugs — including TUI freezes, input leaks, IME deadlocks, and sandbox failures — the market has reached an inflection point. CLI tools that cannot reliably serve Windows developers will face an increasingly vocal backlash, especially as enterprise adoption grows.

**3. Plugin/MCP Ecosystems Are Entering the "Messy Middle"**
Every tool with a plugin system (Claude Code, Codex, Copilot CLI, Kimi Code) is experiencing the same growing pains: process leaks, OAuth failures, skill discoverability problems, and routing inconsistencies. The winners will be those that invest in pre-release testing infrastructure and clear API contracts — not just feature surface area.

**4. Session Management Is the New Reliability Baseline**
Ghost conversations, resume failures, non-git directory incompatibility, and compression-corrupted history are appearing across 5 tools. As AI CLI tools become daily drivers, session durability is evolving from a nice-to-have to a fundamental reliability requirement. Users cannot trust tools that lose work.

**5. The "Second-Tier" Tools Are Closing the Feature Gap**
Qwen Code's Fleet View (Claude Code parity), CodeWhale's WhaleFlow workflows (parallel agent execution), and OpenCode's V2 migration are all chasing the feature set established by Claude Code and Codex. The gap is narrowing — and at lower cost. Qwen Code in particular is worth watching for developers in the APAC ecosystem who need channel integration and multi-language support.

**6. Model-Specific Optimization Is Becoming a Liability**
CodeWhale's cache-maximal context (leveraging DeepSeek V4's cheap cached input), Pi's reasoning model null content crashes, and the GPT-5.5 token clustering debate (#30364) all point to the same trend: tools that abstract away model-specific quirks will win. Users want model-agnostic reliability, not vendor lock-in.

**7. Community Health Metrics Are Diverging Sharply**
The ecosystem is splitting into three tiers: (1) high-velocity communities with active PR contribution (Codex, Qwen Code, OpenCode, Pi, CodeWhale), (2) defensive communities with high issue volume but low contribution (Claude Code), and (3) stagnant communities with unresolved critical bugs (Gemini CLI, Kimi Code). Developers choosing a platform should weigh these dynamics carefully — community momentum is a leading indicator of long-term tool viability.

---

*Report generated from community digest data for 2026-07-08. Metrics reflect available issue tracker data and may undercount some community interactions.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data snapshot: 2026-07-08 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

Below are the 5 most-discussed Skill submissions (PRs), ranked by community attention and comment activity.

### #1 — skill-creator: run_eval.py always reports 0% recall
**PR #1298** | [View on GitHub](https://github.com/anthropics/skills/pull/1298) | **Status: Open** | Author: MartinCajiao

**Functionality:** Fixes the core evaluation script used by the `skill-creator` meta-skill. The `run_eval.py` script calculates whether a skill description triggers correctly on test queries; this PR addresses a systemic bug causing `recall=0%` for every description, rendering the optimization loop useless.

**Discussion highlights:** References issue #556 with 10+ independent reproductions. The fix installs the eval artifact as a real skill (rather than a command file), fixes Windows stream reading, corrects tool trigger detection, and parallelizes workers. This is the most-watched PR because it unblocks the entire skill authoring feedback loop.

---

### #2 — Add document-typography skill
**PR #514** | [View on GitHub](https://github.com/anthropics/skills/pull/514) | **Status: Open** | Author: PGTBoos

**Functionality:** Detects and fixes orphan word wrap (1–6 words stranded on a new line), widow paragraphs (section headers at page bottom), and numbering misalignment in AI-generated documents.

**Discussion highlights:** Addresses a universal pain point — typographic quality in Claude's output. The community recognizes this as a "plumbing" skill that should be default behavior. Discussion focuses on edge cases with mixed RTL/LTR text and whether to integrate with the existing `pdf` and `docx` skills.

---

### #3 — fix(pdf): correct case-sensitive file references in SKILL.md
**PR #538** | [View on GitHub](https://github.com/anthropics/skills/pull/538) | **Status: Open** | Author: Lubrsy706

**Functionality:** Fixes 8 case-sensitivity mismatches where `SKILL.md` referenced files in uppercase (`REFERENCE.md`, `FORMS.md`) but the actual files were lowercase. This broke skill loading on Linux/macOS case-sensitive file systems.

**Discussion highlights:** A seemingly small fix that generated significant attention because it exposed a broader issue: the repo has no standardized file-naming convention. Community members discuss whether to enforce lowercase-only references via CI.

---

### #4 — Add ODT skill — OpenDocument text creation
**PR #486** | [View on GitHub](https://github.com/anthropics/skills/pull/486) | **Status: Open** | Author: GitHubNewbie0

**Functionality:** Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods). Supports LibreOffice document generation, template filling, and ODT-to-HTML conversion.

**Discussion highlights:** High demand from enterprise users with LibreOffice/OpenOffice infrastructure. Discussion centers on parsing complexity (ZIP-based XML format) and whether to split into separate `odt` and `ods` skills. The author is responsive to feedback, keeping momentum high.

---

### #5 — Improve frontend-design skill clarity and actionability
**PR #210** | [View on GitHub](https://github.com/anthropics/skills/pull/210) | **Status: Open** | Author: justinwetch

**Functionality:** Revises the existing `frontend-design` skill to ensure every instruction is concrete and executable within a single conversation. Removes vague guidance, adds specific design constraints.

**Discussion highlights:** Sparks a meta-debate about skill design philosophy: should skills be "educational" (teaching Claude principles) or "operational" (direct commands)? The author argues for the latter, citing token efficiency. Several commenters request similar treatment for other skills.

---

### #6 — Add skill-quality-analyzer and skill-security-analyzer
**PR #83** | [View on GitHub](https://github.com/anthropics/skills/pull/83) | **Status: Open** | Author: eovidiu

**Functionality:** Two meta-skills: (1) a 5-dimension quality analyzer for skill descriptions, and (2) a security analyzer checking for prompt injection vectors, dangerous capabilities, and trust boundary violations.

**Discussion highlights:** Early but sustained interest. The security analyzer touches on the controversial topic of trust boundaries in community skills (see Issue #492). Some question whether security analysis should be built into the `skill-creator` itself rather than a separate skill.

---

## 2. Community Demand Trends

From community Issues (sorted by comment count), the following demand clusters emerge:

| Demand Cluster | Evidence | Key Issues |
|---|---|---|
| **Skill Authoring Tooling** | Highest activity. The `skill-creator` pipeline has multiple bugs on Windows, subprocess handling, and YAML parsing. Community wants a reliable authoring loop. | #556, #1061, #1169, #202 |
| **Security & Trust Boundaries** | Strong demand for security guardrails. Issues raise concerns about community skills impersonating official Anthropic skills and running arbitrary code. | #492 (34 comments), #412 |
| **Enterprise & Org Features** | Enterprise users want org-wide skill sharing, not manual `.skill` file distribution. Also: SharePoint/SPO document handling with access control. | #228 (14 comments), #1175 |
| **Cross-Platform Compatibility** | Windows users are blocked by Unix-first assumptions in `run_eval.py`, `run_loop.py`, and subprocess handling. | #1061, #556 (Windows reproduction reports) |
| **Memory & State Management** | Emerging interest in compact state representation for long-running agents — symbolic notation, structured memory. | #1329 |

**Underappreciated signal:** The "compact-memory" proposal (Issue #1329) and the "sensory" skill (PR #806, macOS AppleScript automation) suggest the community is pushing beyond document-generation toward **autonomous agent capabilities**.

---

## 3. High-Potential Pending Skills

These PRs have active discussion and are likely to land in the near future:

| PR | Skill | Author | Status | Why it matters |
|---|---|---|---|---|
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** — mechanical verification + reasoning quality gate | YuhaoLin2005 | Open, recently updated | Universal output auditing: verifies claimed files exist, then runs 4-dimension reasoning audit. Works with any project/stack/model. |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** — color naming, spaces, contrast, accessibility | meodai | Open, recently updated | Comprehensive color knowledge (ISCC-NBS, Munsell, OKLCH, CAM16) with practical tables and accessibility guidance. |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** — full-stack testing guide | 4444J99 | Open, active | Covers Testing Trophy model, AAA pattern, React Testing Library, Playwright E2E. Addresses a clear gap in testing expertise. |
| [#806](https://github.com/anthropics/skills/pull/806) | **sensory** — macOS automation via AppleScript | AdelElo13 | Open, active | Native macOS automation without screenshot-based computer use. Two-tier permission system. |
| [#1362](https://github.com/anthropics/skills/pull/1362) | **web-artifacts-builder** fixes (issue → likely PR) | astradevkin | Issue filed | Three independent bugs in the web-artifacts-builder scripts blocking pnpm ≥10.1. Fixes proposed by the reporter. |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliable, cross-platform skill-authoring infrastructure** — the `skill-creator` pipeline's evaluation loop, Windows compatibility, and YAML validation collectively generate more discussion and contribution activity than any individual domain skill, indicating that the ecosystem's bottleneck is not *what* skills exist, but *how reliably* new skills can be built and validated.

**Secondary demand cluster:** Skills that move Claude from document generation toward autonomous action — macOS automation (PR #806), self-audit logic (PR #1367), and compact agent memory (Issue #1329) all signal an appetite for agentic, not just reactive, capabilities.

---

# Claude Code Community Digest — 2026-07-08

## Today's Highlights

Anthropic shipped two patch releases (v2.1.203 and v2.1.204) addressing critical session-termination bugs in headless and background workflows, including a fix for remote workers being idle-reaped mid-hook. However, the community is experiencing a major regression cascade — the v2.1.204 `--resume` flag is broken across macOS, Windows, and WSL2, rendering the agent view unresponsive to keyboard input in several environments. Cost concerns continue to dominate discussion, with the most-upvoted issue (54 comments) describing a 3–5x token consumption spike on the Max plan that has persisted unresolved since late March.

---

## Releases

**v2.1.204** — *Bugfix*
- Fixed hook events not streaming during `SessionStart` hooks in headless sessions, which could cause remote workers to be idle-reaped mid-hook. *(Critical for CI/CD and automated pipeline use.)*

**v2.1.203** — *Minor features + UX polish*
- Added a warning when login is about to expire, allowing re-authentication before background sessions are interrupted.
- Added a grey ⏸ badge to the footer when in manual permission mode, making the active permission mode always visible.
- Added the session's additional working directories to the footer display.

*No new feature releases; both versions focus on stability and visibility.*

---

## Hot Issues

*Top 10 noteworthy issues, ranked by community engagement and impact.*

1. **[#41506 — Max Plan: Token usage increased ~3-5x without any configuration change](https://github.com/anthropics/claude-code/issues/41506)**  
   *Status:* Open · 54 comments · 26 👍  
   The highest-signal issue in the repository. Users on the $100/month Max plan report token consumption spiking 3–5x since late March, with no configuration changes. Sessions that previously lasted 5+ hours are now exhausting quota rapidly. No official fix or root cause acknowledged yet — this is the community's top pain point.

2. **[#73365 — Advisor always "unavailable" with Fable 5 advisor (Opus 4.8 main) across all sessions](https://github.com/anthropics/claude-code/issues/73365)**  
   *Status:* Open · 12 comments · 31 👍  
   Windows users report the Advisor feature is completely broken with the Fable 5 model on v2.1.198+, showing persistent "unavailable" errors. High upvote count suggests widespread impact on Windows workflows.

3. **[#63819 — Auto mode classifier (claude-opus-4-8) repeatedly unavailable — blocks Bash/Write/Edit](https://github.com/anthropics/claude-code/issues/63819)**  
   *Status:* Open · 14 comments · 18 👍  
   On Windows 10, auto mode fails with "claude-opus-4-8 is temporarily unavailable," blocking all tool execution. Users forced into manual permission mode or stuck entirely. Linked to backend safety classifier availability.

4. **[#39678 — Claude Code Review incorrectly reports overage limit reached when spend is $0/$250](https://github.com/anthropics/claude-code/issues/39678)**  
   *Status:* Open · 17 comments · 13 👍  
   GitHub Code Review integration shows false "overage spend limit reached" errors despite $0 spend. Blocks CI/CD review workflows. Affects organizations with paid plans.

5. **[#47327 — Cowork tab disabled — "unsupported" on Windows 11 Pro x64](https://github.com/anthropics/claude-code/issues/47327)**  
   *Status:* Open · 18 comments · 3 👍  
   Cowork (remote pairing) feature has been blocked on Windows since March 2026. Users on Windows 11 Pro x64 see the tab grayed out with "unsupported" label. No ETA for resolution.

6. **[#74066 — Potential session/cache leakage between workspace instances or consumer accounts](https://github.com/anthropics/claude-code/issues/74066)**  
   *Status:* Open · 17 comments · 0 👍  
   A concerning security report: an Enterprise user's agent started describing building a Minecraft temple, apparently leaking session context from another workspace or user account. Suggests cache isolation failures between workspaces.

7. **[#42765 — OAuth redirect_uri uses localhost instead of 127.0.0.1, violating RFC 8252](https://github.com/anthropics/claude-code/issues/42765)**  
   *Status:* Open · 6 comments · 17 👍  
   Linux users report OAuth flow violations that may cause security warnings or breakage in strict network environments. Impact on MCP authentication workflows.

8. **[#75496 — `claude --resume` renders a screen that accepts no keyboard input on WSL2](https://github.com/anthropics/claude-code/issues/75496)**  
   *Status:* Open · 4 comments · 0 👍  
   Newly filed today (v2.1.204 regression). Cold-start resume on WSL2 renders a frozen screen. Combined with macOS reports, this appears to be a widespread TUI input regression.

9. **[#75521 — Agents view ignores all keyboard input on macOS (2.1.204)](https://github.com/anthropics/claude-code/issues/75521)**  
   *Status:* Open · 1 comment · 0 👍  
   Fresh report: `claude --resume` on macOS opens the agent dashboard but ignores all keyboard input — arrows, Enter, typing. The identical symptom to #75496 on WSL2 suggests a common TUI input handler bug in 2.1.204.

10. **[#74803 — Burning through more tokens, while doing nothing different](https://github.com/anthropics/claude-code/issues/74803)**  
    *Status:* Open · 7 comments · 4 👍  
    Another cost spike report, filed as duplicate of #41506 but reinforcing the pattern. Users report normal workflows now consuming tokens at an unsustainable rate.

---

## Key PR Progress

*Only 2 PRs were active in the last 24 hours — the repository remains in a maintenance-heavy cycle with few contributions.*

1. **[#73476 — docs: fix GitHub capitalization in README](https://github.com/anthropics/claude-code/pull/73476)**  
   *Status:* Open · 0 comments  
   Community documentation fix: corrects "Github" → "GitHub" in README.md. Trivial but demonstrates active community polish.

2. **[#75252 — docs: clarify plugin MCP configuration scope](https://github.com/anthropics/claude-code/pull/75252)**  
   *Status:* Open · 0 comments  
   Clarifies that plugin `mcpServers` configuration is separate from user-level MCP allow/deny lists in `~/.claude.json`. Helpful for developers configuring MCP tools alongside plugins.

*Low PR volume suggests the community is focused on filing bugs rather than contributing code — a common pattern when core stability is the primary concern.*

---

## Feature Request Trends

Distilled from the day's 50 open issues, the most-requested feature directions are:

1. **Cost transparency & quota controls** — Multiple issues request better visibility into token consumption per session, per model, and per tool. Users want real-time cost counters and proactive warnings before hitting limits, not retrospective surprises.

2. **Cross-platform parity for Cowork** — Cowork (remote pairing) remains Windows-excluded and mobile-desktop pairing (Dispatch) has platform-specific bugs. The community wants feature parity across macOS, Windows, and mobile.

3. **Session/cache isolation for multi-workspace users** — The session leakage bug (#74066) has prompted requests for stronger workspace sandboxing, especially for Enterprise users managing multiple clients or environments.

4. **Model availability resilience** — Repeated issues with "classifier unavailable" blocking all tool execution are driving requests for graceful degradation: when the safety classifier is down, users want a fallback to manual permission mode rather than a hard block.

5. **Pinned chat sort modes** — A specific UX request (#75511) for configurable sort orders (recency vs. manual) across mobile and desktop, indicating growing demand for cross-device consistency in the Chat UI.

---

## Developer Pain Points

Recurring frustrations from the day's issue data:

1. **Cost explosion without warning** — The #1 pain point. Multiple reports of 3–5x token consumption increases on Max plan with no configuration changes, no official root cause, and no fix since late March. Developers feel trapped by unpredictable billing.

2. **v2.1.204 `--resume` regression** — A freshly shipped patch that breaks the most common workflow entrypoint (`claude --resume`) on macOS, Windows, and WSL2. The TUI agent view renders but rejects all input — a classic last-mile regression that blocks session recovery.

3. **Safety classifier as a single point of failure** — Auto mode is repeatedly crippled by backend classifier unavailability. Developers report that core tools (Bash, Write, Edit) become completely unusable during classifier outages, with no offline fallback.

4. **Windows as a second-class platform** — Cowork, Advisor, Dispatch, and plugin scoping all have distinct Windows-specific bugs. Combine this with the Windows-exclusive TUI freeze (#59720) and text selection regression (#61021), and Windows developers face a consistently degraded experience.

5. **MCP connector quality inconsistencies** — Issues like #75502 (Zoho Books attachment broken) and #42765 (OAuth RFC violation) suggest that MCP connector implementations lack pre-release testing against real-world API specs, causing integration friction for developers building on Claude Code's tool ecosystem.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-08

## Today's Highlights

The Codex ecosystem shipped **rust-v0.143.0** with remote plugins enabled by default and richer plugin catalog infrastructure, while the community buzzes around a deeply technical analysis of GPT-5.5 reasoning-token clustering at fixed boundaries (516/1034/1552) potentially degrading complex-task performance. Simultaneously, a wave of Windows sandbox and MCP process-management bugs has emerged, with multiple reports of runaway memory consumption and false file-length errors under restricted permission profiles.

---

## Releases

**rust-v0.143.0** (stable)
- Remote plugins are now **enabled by default**, with richer catalog rows, npm marketplace sources, and visible remote/local version indicators.
- Codex can now route authentication and Responses API traffic through **macOS and Windows system proxies**, including PAC file support.

*Two alpha releases (v0.143.0-alpha.38, v0.143.0-alpha.39) also published, with no detailed changelogs.*

---

## Hot Issues (Top 10 by Community Activity)

### 1. [BUG] GPT-5.5 Reasoning-Token Clustering at Fixed Boundaries
**#30364** — 252 👍, 156 comments  
*[openai/codex Issue #30364](https://github.com/openai/codex/issues/30364)*  
**Why it matters:** A user discovered that GPT-5.5 responses disproportionately land at `reasoning_output_tokens = 516`, with additional spikes at 1034 and 1552. The clustering pattern is model-specific and coincides with reports of degraded performance on complex multi-step tasks. If this is a quantized internal buffer or parallelization boundary, it could affect how Codex handles long inferential chains. Community reaction is intense—developers are comparing log entries and metadata dumps to isolate the root cause.

### 2. [BUG] VS Code Codex Extension: 1M inotify Watches on Large Workspaces
**#23574** — 9 👍, 9 comments  
*[openai/codex Issue #23574](https://github.com/openai/codex/issues/23574)*  
**Why it matters:** On Linux, the Codex VS Code extension can allocate a million inotify watches on large workspaces, hitting system limits and causing the extension or even the editor to freeze. This is a critical performance regression for monorepo users.

### 3. [BUG] Official Meta Ads MCP Fails OAuth Login
**#24103** — 2 👍, 12 comments  
*[openai/codex Issue #24103](https://github.com/openai/codex/issues/24103)*  
**Why it matters:** The official Meta Ads MCP server fails with `invalid_client_metadata` before the OAuth consent flow even opens, blocking an entire class of marketing-automation integrations. Users report this as a blocker for production workflows.

### 4. [BUG] Locked Computer Use Fails with `cgWindowNotFound` on Mac mini M4
**#24086** — 9 👍, 10 comments  
*[openai/codex Issue #24086](https://github.com/openai/codex/issues/24086)*  
**Why it matters:** Locked Computer Use fails exclusively when the Mac is locked; normal unlocked usage works. The issue persists across reinstalls and reboots. Community suspects a macOS permission lifecycle or accessibility API regression.

### 5. [BUG] Duplicate MCP stdio Process Pools on Windows (183 node.exe / 13GB)
**#31499** — 0 👍, 3 comments  
*[openai/codex Issue #31499](https://github.com/openai/codex/issues/31499)*  
**Why it matters:** Codex Desktop on Windows repeatedly spawns duplicate stdio MCP process pools under `codex.exe app-server`, causing 183 `node.exe` processes and 13GB private memory. This is a severe resource leak that can render machines unusable.

### 6. [BUG] Codex App Session List Hides Sessions with Empty Diff-Comment Wrapper
**#24077** — 0 👍, 4 comments  
*[openai/codex Issue #24077](https://github.com/openai/codex/issues/24077)*  
**Why it matters:** A subtle data-loss bug: sessions whose first user message is an empty diff-comment wrapper silently disappear from the normal session list. Affected users lose chat history without warning.

### 7. [BUG] Stale Ghost Conversations in Codex Desktop
**#29868** — 0 👍, 4 comments  
*[openai/codex Issue #29868](https://github.com/openai/codex/issues/29868)*  
**Why it matters:** Ghost conversation IDs persist in the UI, but are absent from the local thread index, causing "no rollout found" errors. Archiving also fails, leaving users with unremovable clutter.

### 8. [BUG] Windows Sandbox `apply_patch` / `view_image` False "Filename Too Long" Errors
**#31511** — 0 👍, 3 comments  
*[openai/codex Issue #31511](https://github.com/openai/codex/issues/31511)*  
**Why it matters:** Under custom restricted permission profiles, `apply_patch` and `view_image` fail with spurious "os error 206" even though paths are only 60-70 characters (well under Windows' 260-char limit). PowerShell access to the same files works fine.

### 9. [BUG] Windows Codex App Freezes Taskbar / Alt+Tab / Explorer
**#31236** — 0 👍, 2 comments  
*[openai/codex Issue #31236](https://github.com/openai/codex/issues/31236)*  
**Why it matters:** The Codex app freezes the entire Windows shell—taskbar, Start menu, Alt+Tab—when spawning PowerShell for local tasks. This is a system-level stability issue, not just an app crash.

### 10. [FEATURE] Full Claude Code Hook Parity
**#21753** — 19 👍, 26 comments  
*[openai/codex Issue #21753](https://github.com/openai/codex/issues/21753)*  
**Why it matters:** An umbrella tracker for achieving full Claude Code–style hook parity, covering every major lifecycle event. Community interest is high among automation engineers building CI/CD pipelines and custom workflows.

---

## Key PR Progress (Top 10 by Significance)

### 1. Migrate Plugin Commands into Skills
**#31482** — *[openai/codex PR #31482](https://github.com/openai/codex/pull/31482)*  
Moves command-to-skill conversion into `codex-core-plugins`, avoiding a dependency cycle during plugin installation. Commands are now converted during atomic install staging, enabling skill-based execution alongside manifest-based ones.

### 2. Code Mode: Move to Hosted Mode by Default
**#31500** — *[openai/codex PR #31500](https://github.com/openai/codex/pull/31500)*  
Promotes `code_mode_host` to stable and enabled by default, with `features.code_mode_host = false` as an opt-out. Core code-mode tests now run through the standalone host. Significant architectural shift toward out-of-process execution.

### 3. Return Standalone Web Search Previews to Clients
**#31516** — *[openai/codex PR #31516](https://github.com/openai/codex/pull/31516)*  
Parses URL, title, and snippet previews from standalone search output, deduplicates them, and attaches them to client-facing web search items. Persists previews through the foundation API. Stacked on #31515.

### 4. Add Client-Only Web Search Result Metadata
**#31515** — *[openai/codex PR #31515](https://github.com/openai/codex/pull/31515)*  
Adds bounded metadata (URL, title, snippet) to client-facing web search items, persisted in rollout events and exposed through app-server v2 and exec JSONL output. Foundation for richer search UIs.

### 5. Detect Codex Installs Managed by pnpm
**#31503** — *[openai/codex PR #31503](https://github.com/openai/codex/pull/31503)*  
The JS shim now detects pnpm global installs instead of falling back to npm. Fixes incorrect `codex doctor` and update-flow reporting.

### 6. Reduce Redundant Filesystem Syscalls
**#31514** — *[openai/codex PR #31514](https://github.com/openai/codex/pull/31514)*  
Significant performance optimization: writes through already-open temp files, retains directory classifications from file-search walks, and replaces stat-based results with cached metadata. Targets I/O-heavy workspace operations.

### 7. Add Import Failure Sub-Error Telemetry
**#31518** — *[openai/codex PR #31518](https://github.com/openai/codex/pull/31518)*  
Adds `sub_error_type` fields to plugin-install and external-agent import failure analytics, classifying failures by privacy-safe operation context and lifecycle step.

### 8. Support SQLite-Disabled Degraded Mode
**#31509** — *[openai/codex PR #31509](https://github.com/openai/codex/pull/31509)*  
Restores `features.sqlite = false` as a supported escape hatch for NFS-mounted Codex homes. Skips all state-database initialization, recovery, and integrity checks when disabled.

### 9. Add Delayed Exec-Server Transport
**#31427** — *[openai/codex PR #31427](https://github.com/openai/codex/pull/31427)*  
Adds a minimal delayed transport for macrobenchmarking remote-executor latency without Docker dependency. Designed as a first cut—expandable to more robust network shaping.

### 10. Capture Tool Search Pipeline Diagnostics in /feedback
**#31466** — *[openai/codex PR #31466](https://github.com/openai/codex/pull/31466)*  
Replaces RUST_LOG diagnostics with an always-on, bounded, per-thread tool-search snapshot, exposed via the `/feedback` endpoint. No public API changes.

---

## Feature Request Trends

- **Claude Code Hook Parity (#21753)** — The most vocal feature request; developers want full lifecycle hooks for automation (pre-commit, post-turn, error recovery, file-change watchers). Community expects native hook names and payloads, not just a port of Claude's API.
- **Dynamic Nested AGENTS.md Loading (#12115)** — Second most-upvoted feature (83 👍). Users want on-demand loading of AGENTS.md files in child directories, like Claude's CLAUDE.md approach, rather than requiring a single root-level configuration.
- **Plugin Commands as Skills** — Multiple recent PRs (#31482, #31518) indicate internal migration toward treating plugins as composable skills, aligning with community requests for more flexible plugin architecture.
- **Web Search Metadata Exposure** — PRs #31515 and #31516 suggest the team is building first-class web search result previews, responding to long-standing requests for richer search integration in code-mode workflows.

---

## Developer Pain Points

- **Windows Stability Crisis** — The highest concentration of fresh bugs: duplicate MCP process pools (13GB memory), taskbar/Explorer freezes, false "filename too long" errors, Git Bash sandbox failures. Windows users are experiencing systemic stability regression.
- **Conversation Data Loss** — Multiple reports (#24077, #29868, #25397) of sessions disappearing, ghost conversations, and non-archivable stale entries. Users are losing work and history.
- **macOS Computer Use Degradation** — Locked Computer Use fails on M4 Macs (#24086), and the app fails to show a window on macOS 26.4 (#31208). Platform-specific Computer Use reliability is declining.
- **Sandbox Restriction Mapping** — Issues #31511 and #15016 highlight that sandboxed execution under custom permission profiles generates wrong error codes (false file-too-long, bogus signal-pipe errors), making debugging impossible without sandbox insights.
- **App After-Update Failures** — Multiple reports (#29787, #30608) of the app failing to restart after update, or becoming "damaged" and hanging on macOS verification. Update flow reliability is broken for some users.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-08

## 1. Today's Highlights

The Gemini CLI project is seeing significant infrastructure investment with the rollout of a new Caretaker Triage Agent for automated issue management, alongside security patches for SSRF during OAuth metadata discovery and socket reuse vulnerabilities. However, a large backlog of unresolved bugs persists, with ongoing complaints about credential corruption, subscription tier misdetection, excessive project scanning, and agent context leaks — many issues have been stale for months with no fix committed.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

1. **[#23973] Pro account treated as standard-tier**  
   *Opened Mar 27 | 11 comments | P2, Enterprise*  
   User with a valid Google AI Pro account cannot use Gemini CLI because the tool detects only "standard-tier." This affects anyone paying for premium access.  
   [Issue Link](https://github.com/google-gemini/gemini-cli/issues/23973)

2. **[#25672] Excessive project-wide scanning makes simple code patches fail**  
   *Opened Apr 19 | 9 comments | P2, Agent*  
   Gemini CLI scans the entire workspace (including Go stdlib, cgo, vulnerability checks) before applying even trivial patches. Community is frustrated by latency.  
   [Issue Link](https://github.com/google-gemini/gemini-cli/issues/25672)

3. **[#24835] Corrupted credentials file on macOS**  
   *Opened Apr 7 | 6 comments | P1, Enterprise*  
   ZDR API key users on macOS Tahoe get "corrupted credentials" errors daily. Requires re-authentication. Possibly duplicate with other auth bugs.  
   [Issue Link](https://github.com/google-gemini/gemini-cli/issues/24835)

4. **[#23848] v0.35 fails to authenticate on WSL**  
   *Opened Mar 26 | 6 comments | P1, Enterprise*  
   After upgrading to 0.35.x, Google account authentication breaks on Windows Subsystem for Linux.  
   [Issue Link](https://github.com/google-gemini/gemini-cli/issues/23848)

5. **[#24112] Google AI Ultra subscription not recognized in CLI OAuth**  
   *Opened Mar 28 | 4 comments | P2, Enterprise*  
   Active Ultra subscribers see only Flash models after OAuth login. Multiple reports of subscription tier mismatches.  
   [Issue Link](https://github.com/google-gemini/gemini-cli/issues/24112)

6. **[#24062] Extremely slow access when using VPN**  
   *Opened Mar 27 | 4 comments | P2, Enterprise*  
   Pro account users report 429 errors and sluggish performance behind VPNs. Turning VPN off resolves immediately.  
   [Issue Link](https://github.com/google-gemini/gemini-cli/issues/24062)

7. **[#25667] Stuck in "Thinking..." for 15 hours**  
   *Opened Apr 19 | 3 comments | P1, Agent*  
   Agent got stuck in infinite thinking loop using `gemini-3.1-flash-lite-preview`. No progress for 15 hours.  
   [Issue Link](https://github.com/google-gemini/gemini-cli/issues/25667)

8. **[#25595] Subagents leaking context even when not enabled**  
   *Opened Apr 17 | 3 comments | P1, Agent*  
   Locally defined subagents appear in context even when subagents are disabled, causing unwanted tool interactions.  
   [Issue Link](https://github.com/google-gemini/gemini-cli/issues/25595)

9. **[#25688] Insanely large context after restart**  
   *Opened Apr 20 | 3 comments | P1, Agent*  
   After restarting to free RAM (which had 24G usage at 40% context), tool reports >200% context and `/compress` fails.  
   [Issue Link](https://github.com/google-gemini/gemini-cli/issues/25688)

10. **[#25837] Pre-flight secret/credential scanning requested**  
    *Opened Apr 23 | 3 comments | P2, Security*  
    Community requests a pre-flight scanner to redact API keys and PII before sending context to the API, to prevent accidental exposure.  
    [Issue Link](https://github.com/google-gemini/gemini-cli/issues/25837)

## 4. Key PR Progress

1. **[#28307] LLM triage orchestrator, GCS debug logger, and container build**  
   *CLOSED (Jul 8)* — Implements LLM inference for auto-triage of issues using Antigravity SDK, structured logging, and Docker build. Part of the Caretaker automation initiative.  
   [PR Link](https://github.com/google-gemini/gemini-cli/pull/28307)

2. **[#28306] Caretaker triage worker: main loop and egress action publisher**  
   *OPEN (Jul 7)* — Cloud Run Job execution loop with Pub/Sub egress for automated issue labeling and commenting.  
   [PR Link](https://github.com/google-gemini/gemini-cli/pull/28306)

3. **[#28304] Show clear message when account has no Code Assist tier**  
   *OPEN (Jul 7)* — Replaces raw backend errors with user-friendly messages for enterprise/Workspace accounts running `/privacy`.  
   [PR Link](https://github.com/google-gemini/gemini-cli/pull/28304)

4. **[#28303] Octokit GitHub action handler for egress service**  
   *CLOSED (Jul 8)* — Enables automated issue comments and label assignment via GitHub API for the Caretaker agent.  
   [PR Link](https://github.com/google-gemini/gemini-cli/pull/28303)

5. **[#28224] Avoid splitting emoji when truncating display strings**  
   *OPEN (Jul 1)* — Fixes Unicode surrogate pair splitting in terminal output that rendered broken emoji characters.  
   [PR Link](https://github.com/google-gemini/gemini-cli/pull/28224)

6. **[#28223] Bypass LLM correction for JSON and IPYNB files**  
   *OPEN (Jun 30)* — Resolves corruption of `.ipynb` and `.json` files during `write_file` and `replace` operations by skipping LLM corrections that break structured formats.  
   [PR Link](https://github.com/google-gemini/gemini-cli/pull/28223)

7. **[#28219] Parse commented settings.json in memory bootstrap**  
   *OPEN (Jun 30)* — Fixes silent fallback to default memory config when `settings.json` contains comments (e.g., JSONC).  
   [PR Link](https://github.com/google-gemini/gemini-cli/pull/28219)

8. **[#28112] SSRF protection for OAuth metadata discovery**  
   *CLOSED (Jun 23)* — Adds SSRF validation when fetching OAuth URLs from MCP server responses, closing a security gap.  
   [PR Link](https://github.com/google-gemini/gemini-cli/pull/28112)

9. **[#28103] Avoid keep-alive socket reuse during OAuth token exchange**  
   *CLOSED (Jun 23)* — Fixes CVE-2026-48931 related premature close errors on Node.js 24.17.0, 22.23.0, and 26.3.x.  
   [PR Link](https://github.com/google-gemini/gemini-cli/pull/28103)

10. **[#27971] Strip thoughts from scrubbed history to fix thought leakage**  
    *CLOSED (Jun 16)* — Prevents Gemini's internal reasoning from leaking into subsequent turns, which caused infinite monologue loops.  
    [PR Link](https://github.com/google-gemini/gemini-cli/pull/27971)

## 5. Feature Request Trends

The most requested feature directions from the issue tracker include:

- **Secret/credential pre-flight scanning** (#25837): Community wants automatic redaction of API keys, PII, and connection strings before context is sent to the API.
- **Better .gitignore / file exclusion support** (#23085): Users expect `readManyFiles` to honor `.gitignore` patterns, especially for cache and build directories.
- **Documentation completeness** (#19344, #23085): Requests for documenting file size limits (20MB for `read_file`) and clarifying tool behavior.
- **Subagent isolation** (#25595): Need for clean separation when subagents are disabled — they should not leak into active context.
- **Non-interactive ACP mode fixes** (#22647): Requests for proper JSON-RPC output without plain-text log contamination.

## 6. Developer Pain Points

Recurring frustrations visible across the open issue backlog:

- **Authentication failures across platforms**: Multiple P1 bugs for WSL, macOS, and enterprise ZDR credentials — a top source of churn for enterprise adopters.
- **Subscription tier misdetection**: Pro/Ultra subscribers repeatedly downgraded to standard-tier, making CLI unusable for paying users.
- **Excessive resource usage**: Agent scanning entire projects (including Go stdlib, cgo, vulnerabilities) for simple edits, plus memory leaks requiring restarts that break context.
- **Context corruption and thought leaks**: Model reasoning leaking into history, causing infinite loops and broken compression.
- **VPN incompatibility**: Pro users behind VPNs hit 429 rate limits and extreme latency — a significant blocker for remote/enterprise developers.
- **Stale bugs with no resolution**: Many P1/P2 bugs open for 3+ months with no fix committed, eroding trust in the project's maintenance velocity.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-08

## Today’s Highlights
A new patch release (v1.0.69) improves sandbox policy labeling and plugin lifecycle management, while the community remains vocal about the long-unaddressed #53 (breaking CLI workflows). Multiple fresh triage issues surface plugin routing bugs, NFS startup hangs, and session resume failures on non-git directories. The plugin and MCP ecosystems continue to be the primary source of both innovation and friction.

## Releases
**v1.0.69** (2026-07-07) — [Release link](https://github.com/github/copilot-cli/releases/tag/v1.0.69)
- Built-in file edits now show a `(sandbox policy)` badge instead of `(sandboxed)` to clarify best-effort policy enforcement.
- Installed plugin extensions can be reloaded without restarting a session.
- New `/plugins` dashboard for managing plugins.

**v1.0.69-3** (2026-07-07) — [Release link](https://github.com/github/copilot-cli/releases/tag/v1.0.69-3)
- Built-in file edits can bypass the sandbox when explicitly approved.
- `web_fetch` tool now respects the active sandbox network policy and supports a one-time bypass if the host opts in via `sandbox.allowBypass`.

## Hot Issues (10 Notable)
1. **[#53 — Bring back GitHub Copilot in the CLI to not break workflows](https://github.com/github/copilot-cli/issues/53)**  
   *Opened 2025-09-26, 75 👍, 37 comments*  
   The most-reacted open issue. The community has begun rolling their own alternatives (e.g., `shell-ai`) due to 6+ months of silence from GitHub. Directly impacts daily automation scripts.

2. **[#2643 — preToolUse hook silent command rewrite shows confirmation dialog despite `permissionDecision: allow`](https://github.com/github/copilot-cli/issues/2643)**  
   *Opened 2026-04-11, 2 👍*  
   Plugin developers cannot achieve truly silent command rewrites. Every hook-triggered command still prompts the user, breaking automation flows.

3. **[#3123 — /research can't write its research report](https://github.com/github/copilot-cli/issues/3123)**  
   *Opened 2026-05-05, 5 👍*  
   The `/research` agent tries to use a "create" tool that's unavailable, leaving users with a markdown file that was never saved. Core usability bug for agent workflows.

4. **[#2729 — /delegate ignores specified source branch or branch name](https://github.com/github/copilot-cli/issues/2729)**  
   *Opened 2026-04-15, 2 👍*  
   Delegation workflows are effectively broken for branch-precise tasks, forcing manual branch management.

5. **[#4001 — .claude/settings.json hooks fail on Windows via PowerShell, $CLAUDE_PROJECT_DIR not set](https://github.com/github/copilot-cli/issues/4001)**  
   *Opened 2026-07-01, 0 👍 but critical platform gap*  
   Windows hooks execute via PowerShell instead of bash, violating the Claude Code hook contract. Fail-closed behavior blocks all sessions. High priority for Windows users.

6. **[#4053 — TUI hangs at 'Loading: N skills' on NFS/GPFS due to SIGCHLD race](https://github.com/github/copilot-cli/issues/4053)**  
   *Opened 2026-07-07, 0 👍*  
   Fresh triage issue. MCP servers that exit before completing handshake cause indefinite hangs on shared filesystems. Affects enterprise Linux environments.

7. **[#4054 — /resume broken for all non-git sessions](https://github.com/github/copilot-cli/issues/4054)**  
   *Opened 2026-07-07, 0 👍*  
   Sessions created outside git repos store `repository = '/'`, making them unselectable in the resume picker. Catch-22 bug for non-git workflows.

8. **[#4038 — Non-interactive mode: late-connecting MCP server injects empty user message](https://github.com/github/copilot-cli/issues/4038)**  
   *Opened 2026-07-06, 0 👍*  
   Running `copilot -p "..."` with an MCP server exposing 7+ tools triggers an empty user turn. Model echoes system-prompt fragments instead of answering. Script-breaking.

9. **[#4056 — Project-scoped extension canvases not routable by open_canvas](https://github.com/github/copilot-cli/issues/4056)**  
   *Opened 2026-07-08, 0 👍*  
   Canvases from `.github/extensions/` are declared but never added to the routing table, making them invisible to agents. Plugin extension integrity issue.

10. **[#4048 — Skills not invocable as slash commands for repo-level plugins](https://github.com/github/copilot-cli/issues/4048)**  
    *Opened 2026-07-07, 0 👍*  
    Plugins auto-installed via repo settings have skills that don't appear in `/skills` or as slash commands, though they work via natural language. UX inconsistency.

## Key PR Progress
*No pull requests were updated in the last 24 hours.*

## Feature Request Trends
The most requested directions across all open issues:
- **BYOK / Custom models in ACP server mode** (#4037) — Enterprises want to use their own LLM endpoints, especially in JetBrains integrations.
- **Interactive input variables for plugins** (#4042, `(${input:...}`) — Plugin authors need runtime prompts for API keys/config without hardcoding.
- **Branch prefix control exposed to agents** (#4044) — Programmatic `create_project`/`create_session` needs git branch naming configurability.
- **`ask_user` tool supporting Ctrl-G for $EDITOR composition** (#4050) — Users want long-form, multi-paragraph freeform answers.
- **System requirement docs for sandboxing across platforms** (#4046) — Incomplete sandbox stability on Windows and some Linux environments blocks enterprise adoption.

## Developer Pain Points
- **Plugin/MCP ecosystem instability**: Duplicate Docker MCP clients on `/resume` (#4049), late-connecting servers injecting empty messages (#4038), unreachable canvases (#4056), and invisible slash commands (#4048) make the plugin experience unreliable.
- **Platform-specific breakage**: Windows hooks (#4001) and NFS/GPFS hangs (#4053) show the CLI is not thoroughly tested outside macOS/Linux standard setups.
- **Core session mechanics broken**: `/resume` fails on non-git dirs (#4054), `/delegate` ignores branch arguments (#2729), and `/research` can't write files (#3123).
- **Silent rewrite impossible**: Plugin developers cannot suppress confirmation dialogs after `permissionDecision: allow` (#2643), breaking automation scenarios.
- **Model/encoding surprises**: `explore` tool hardcodes `gpt-5.4-mini` (#3954), file edits silently convert Windows-1252 to UTF-8 (#3604) — both violate user expectations.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-07-08

---

## 1. Today's Highlights
No new releases or pull requests were recorded in the last 24 hours. Community activity remains focused on a long-standing feature request for **Figma MCP (Model Context Protocol) support**, which has been open since late March but saw recent updates, indicating sustained interest. Currently, there is only one open issue updated in the past 24 hours, suggesting a quiet period but a clear unmet demand around design tool integration.

---

## 2. Releases
**No new releases or version changes in the last 24 hours.** The repository's latest release data shows no activity.

---

## 3. Hot Issues

**Note:** Only 1 issue was updated in the last 24 hours. I have analyzed it, along with broader Issue themes from the repository, to highlight patterns and provide context.

| # | Issue Title | Status | Why It Matters & Community Reaction |
|---|------------|--------|--------------------------------------|
| 1 | **[#1604] Figma MCP Support** | OPEN | **Figma MCP** enables AI-powered workflows within Figma (e.g., generating design specs or components from CLI). The request has 2 upvotes but only 1 comment, suggesting a niche but vocal use case. The author specifically requests pre-registration support, a common pain point when bridging SaaS tools to local CLI environments. [Link](https://github.com/MoonshotAI/kimi-cli/issues/1604) |

---

**No other issues were updated in the last 24 hours.** Based on historical analysis, the following recurring themes dominate:

- **API Key & Authentication** – Users frequently request better handling of API keys, especially for enterprise SSO or multi-key management.
- **Windows Compatibility** – Long-running bugs related to terminal rendering and file path handling on Windows.
- **Performance with Large Outputs** – Requests for streaming, pagination, or truncation of long responses in terminal output.
- **Plugin/Extension System** – Desire for a modular plugin architecture to extend CLI capabilities.

---

## 4. Key PR Progress
**No pull requests were updated in the last 24 hours.** The repository shows zero PR activity.

*Note: In a typical digest, this section would track merged, open, or draft PRs with technical summaries. Today, repository activity is static.*

---

## 5. Feature Request Trends

Despite low daily volume, the most-requested feature directions across the repository (based on historical data) include:

1. **Design Tool Integration** – Figma MCP (Issue #1604) represents a growing demand for AI CLI tools to interface with design systems and design tokens.
2. **Plugin/Extension System** – Developers want the ability to write custom scripts or integrate third-party services (e.g., Notion, Jira, Slack) without forking the CLI.
3. **Multi-Model Backend Support** – Users request switching between different LLM providers (OpenAI, Anthropic, local models) from a single CLI.
4. **Batch & Pipeline Mode** – Running Kimi Code across multiple files or in CI/CD pipelines (non-interactive mode).
5. **Advanced Output Formatting** – JSON, Markdown, or diff-friendly output for programmatic consumption.

---

## 6. Developer Pain Points

Recurring frustrations visible from open issues and community discussions:

- **MCP Configuration Complexity** – Setting up Model Context Protocol (MCP) servers, especially for external tools like Figma, requires manual pre-registration and token management, which many developers find cumbersome.
- **Windows Terminal Anomalies** – Inconsistent rendering of Unicode, emoji, or ANSI escape codes on Windows, leading to garbled output.
- **Lack of Offline/Fallback Mode** – Reliance on always-on network connectivity; developers working in air-gapped or low-connectivity environments express frustration.
- **Unclear Error Messages** – Ambiguous error codes when API rate limits or authentication failures occur, without actionable fix suggestions.
- **Slow Iteration on Small Issues** – Long-standing minor bugs (e.g., tab-completion quirks, config file path resolution) remain unresolved, eroding long-term user trust.

---

*Digest generated automatically. For full context, visit [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-08

**Project:** [anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## Today's Highlights

A **release v1.17.15** shipped with critical bugfixes for context-window overflow classification and config directory handling on Windows. The V2 migration (#34359) and the Memory Megathread (#20695) remain the dominant community concerns, now at 108 comments. Multiple PRs landed today fixing daemon election (#35826), session restart recovery (#35820), and a Portuguese (Brazil) translation (#35836) — signaling both stability and community growth.

---

## Releases

### [v1.17.15](https://github.com/anomalyco/opencode/releases/tag/v1.17.15)

**Core**
- Better classification of Z.ai context-window overflow errors so oversized requests surface the correct failure mode (by @fengjikui)
- Graceful handling of unavailable config directories when reading config files

**Desktop**
- Restored model details tooltips in the model picker UI

---

## Hot Issues

1. **#20695 — Memory Megathread**  
   [Issue](https://github.com/anomalyco/opencode/issues/20695) — **108 comments | 82 👍**  
   *Central hub for all memory-related reports.* Still the most active thread. Community is explicitly asked to collect heap snapshots rather than speculate. High engagement indicates this is a systemic concern for desktop users.

2. **#26063 — Tool execution aborted/terminated**  
   [Issue](https://github.com/anomalyco/opencode/issues/26063) — **29 comments**  
   *Local LM Studio + Qwen models hit persistent tool abort errors.* Provider-specific integration quality remains a pain point for self-hosted setups.

3. **#34359 — Track TUI migration to @opencode-ai/client**  
   [Issue](https://github.com/anomalyco/opencode/issues/34359) — **9 comments**  
   *V2 TUI must shift from legacy SDK to the new Promise client.* Core tracking issue for the entire V2 UI refresh — high visibility, maintained by @kitlangton.

4. **#35556 — V2: first Location can expose an empty plugin generation**  
   [Issue](https://github.com/anomalyco/opencode/issues/35556) — **8 comments**  
   *Race condition: PluginSupervisor exposes service before initial reload completes.* Affects initial request behavior in fresh workspaces.

5. **#35772 — Desktop v1.17.14 Provider.list() TypeError crash**  
   [Issue](https://github.com/anomalyco/opencode/issues/35772) — **4 comments**  
   *Windows startup crash: “Cannot read properties of undefined”.* Breaks model/provider list on every launch — high user impact, likely a regression from recent provider handling changes.

6. **#35327 — /exit command closes parent terminal on Windows**  
   [Issue](https://github.com/anomalyco/opencode/issues/35327) — **4 comments | 1 👍**  
   *`process.exit()` triggers `CTRL_CLOSE_EVENT` to the entire console group.* Session-killing UX bug specific to Windows.

7. **#35839 — Third OpenCode instance removes global CLI on Windows**  
   [Issue](https://github.com/anomalyco/opencode/issues/35839) — **3 comments**  
   *Reproducible: launching a third instance uninstalls the `opencode` CLI.* Alarming behavior reported by a 2-month user — likely a global binary path collision.

8. **#34712 — Input tokens inconsistent with circle context**  
   [Issue](https://github.com/anomalyco/opencode/issues/34712) — **2 comments | 4 👍**  
   *Token counts increase without corresponding decrease after compaction.* Token tracking distrust erodes user confidence; voted up by power users.

9. **#35831 — i18n / Locale support (Portuguese and other languages)**  
   [Issue](https://github.com/anomalyco/opencode/issues/35831) — **3 comments**  
   *User discovers existing i18n infrastructure and requests completion.* Leads directly to today’s PR #35836. Community-driven localization.

10. **#35828 — Windows TUI fails in v1.17.15 when .opencode already exists**  
    [Issue](https://github.com/anomalyco/opencode/issues/35828) — **2 comments | 1 👍**  
    *Unexpected server error from `Config.loadInstanceState` failing to create already-existing `.opencode` directory.* Fresh regression in v1.17.15 on Windows.

---

## Key PR Progress

1. **#35826 — fix(cli): elect one managed daemon**  
   [PR](https://github.com/anomalyco/opencode/pull/35826) — *@kitlangton*  
   *Acquires a channel-scoped process-lifetime lock so only one daemon serves.* Addresses #35801; prerequisite for multi-instance stability. Clean concurrent exit is enforced.

2. **#35820 — fix(core): resume sessions after restart**  
   [PR](https://github.com/anomalyco/opencode/pull/35820) — *@kitlangton*  
   *Durable session execution outcomes, recovery after server shutdown, serialized startup.* Closes the long-standing restart loss issue (#35646). Already merged.

3. **#35817 — fix(core): preserve provider metadata namespaces**  
   [PR](https://github.com/anomalyco/opencode/pull/35817) — *opencode-agent[bot]*  
   *Preserves complete provider metadata across start/delta/end events by namespace.* Fixes reasoning metadata loss in the native and AI SDK routes. Merged.

4. **#35838 — fix(tool): decode webfetch bodies using declared charset via iconv-lite**  
   [PR](https://github.com/anomalyco/opencode/pull/35838) — *@C0d3N1nja97342*  
   *Previously hardcoded to UTF-8; now respects `charset` in `Content-Type`.* Fixes non-UTF-8 page decoding (e.g., `windows-1251`). Closes #35752.

5. **#35836 — feat(i18n): complete Portuguese (Brazil) translation for UI and app**  
   [PR](https://github.com/anomalyco/opencode/pull/35836) — *@RicSchonfelder*  
   *Adds 23 missing UI strings and 142 missing app strings.* Full parity with English source. Community localization win — likely will inspire other languages.

6. **#35755 — fix(core): wait for plugin readiness**  
   [PR](https://github.com/anomalyco/opencode/pull/35755) — *@kitlangton*  
   *Fixed-target readiness barrier before V2 session agent resolution.* Fails closed with `Session.AgentNotFoundError`. Prevents partial initial-generation race.

7. **#35812 — fix(core): preserve AI SDK provider metadata**  
   [PR](https://github.com/anomalyco/opencode/pull/35812) — *@kitlangton*  
   *Preserves content-level provider metadata when lowering canonical messages into AI SDK prompts.* Keeps thought signatures and item IDs alive for continuations.

8. **#35793 — refactor(schema): apply session review decisions**  
   [PR](https://github.com/anomalyco/opencode/pull/35793) — *@kitlangton*  
   *Normalizes V2 session schemas: flat shell messages, streaming tool state, status-discriminated compaction.* Major schema consolidation. Merged.

9. **#35829 — feat(app): add inline file browser tabs**  
   [PR](https://github.com/anomalyco/opencode/pull/35829) — *@Hona*  
   *Adds inline Open File tab, project tree, and TanStack file search to the V2 review pane.* UX improvement for file navigation in review context.

10. **#35188 — feat(core): implement models fallback**  
    [PR](https://github.com/anomalyco/opencode/pull/35188) — *@ReStranger*  
    *Adds fallback model specification for agents.* Enables graceful degradation if primary model is unavailable. Long-requested feature.

---

## Feature Request Trends

The most requested feature directions from recent issues are:

- **V2 Feature Parity** (dominant theme): File attachments in prompts (#34497), @-tagged files/folders (#34387), provider login flows (Copilot #34779, Snowflake #34780, xAI Grok #34778) — users expect V2 to match V1 capabilities before full adoption.
- **Internationalization (i18n)**: Portuguese translation is live, but the pattern suggests broader demand for Spanish, French, Japanese, and other languages.
- **Plugin Ecosystem Expansion**: Requests to add third-party plugins to official docs (#35768 for Copilot Quota plugin) and improve skill discoverability (#33896).
- **Content Filter UX**: Better handling of provider content-finish stops (#34835) — users want graceful feedback when providers block output.

---

## Developer Pain Points

Recurring frustrations and high-frequency requests:

1. **Memory management** — The Memory Megathread (#20695 at 108 comments) dwarfs all others. Token accounting inconsistency (#34712) and unmanaged memory growth are the top concerns across desktop and CLI users.

2. **Windows-specific regressions** — `/exit` kills parent terminal (#35327), third OpenCode instance removes the global binary (#35839), TUI fails on existing `.opencode` (#35828), TUI blank code parts on CentOS (#28656). Windows stability is a clear weak spot in the current release cycle.

3. **V2 migration friction** — TUI migration (#34359), session route flashing (#32535), stale npm package cache (#35777), and empty plugin generation (#35556) all indicate early-V2 rough edges that slow adoption.

4. **Local model provider integration** — LM Studio/Qwen tool abort (#26063) and inconsistent token fallback pricing (#30706) highlight that third-party/self-hosted providers get less test coverage than cloud LLM endpoints.

5. **Plugin system reliability** — Undiscoverable skills via `/skills` (#33896), plugin readiness races (#35556), and MCP event schema rejection causing daemon restarts (#35379) show the plugin mechanism needs hardening before external authors depend on it.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-08

## Today's Highlights
The community is buzzing around two critical reliability issues: reasoning models returning null content during tool use breaking downstream iteration (#6259), and the Escape key leaving the TUI stuck in "Working..." when extension hooks don't settle (#6234). Meanwhile, a major workflow improvement is materializing through contributor xl0's stream of PRs stabilizing the TUI's markdown and working status rendering. An important API limitation was also flagged: the `max_tokens` clamping fix from last month now inadvertently prevents users from setting artificial context limits smaller than the reported window (#6206).

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#6259 — `content is not iterable` when reasoning models return null content during tool use](https://github.com/earendil-works/pi/issues/6259)** (CLOSED, 12 comments)  
   **Why it matters:** Reasoning models like GLM-5.2 on Fireworks can return `reasoning_content` + `tool_calls` but no text `content`, causing `AssistantMessage.content` to be `null`. Multiple code paths lack null guards, cascading into hard crashes. This affects any user leveraging reasoning models with tool-calling workflows. Community reaction: high engagement and quick closure, indicating effective triage.

2. **[#5501 — Tolerate extra keys on edit tool edits[] items](https://github.com/earendil-works/pi/issues/5501)** (CLOSED, 11 comments)  
   **Why it matters:** Models frequently append stray near-duplicate keys (e.g., `newText_strip`, `newText_2`) after long `newText` fields. The strict `additionalProperties: false` on inner `replaceEditSchema` causes edit failures. The proposed fix restricts strict validation to the outer schema only. Pragmatic robustness fix that directly improves model compatibility.

3. **[#6234 — Escape leaves Pi stuck in Working when extension context hook never settles](https://github.com/earendil-works/pi/issues/6234)** (OPEN, 10 comments)  
   **Why it matters:** Pressing Escape during an active run can permanently freeze the TUI in "Working..." state when extension event/context hooks don't settle. The first Escape is meant to abort, but the run keeps streaming, requiring double-Escape swallowed by the abort logic. This is a critical UX bug for interactive users with extensions.

4. **[#6206 — Clamping to context window prevents artificial context limits](https://github.com/earendil-works/pi/issues/6206)** (OPEN, 5 comments)  
   **Why it matters:** The recent fix that clamps `max_tokens` to the reported context window prevents users from setting *smaller* artificial limits. This breaks use cases where users want to reserve token budget for other processing or enforce cost caps. The fix solved one bug but introduced a regression for legitimate configuration patterns.

5. **[#6210 — `/scoped-models` cannot select model ids containing brackets](https://github.com/earendil-works/pi/issues/6210)** (OPEN, 5 comments)  
   **Why it matters:** Custom model IDs containing brackets (e.g., `custom/bracketed-model[1m]`) fail pattern matching with a "No models match" warning. This is a parsing/escaping issue that blocks users with non-standard provider model names from using scoped model selection.

6. **[#6362 — Paste counter not reverted when pasted content is removed](https://github.com/earendil-works/pi/issues/6362)** (CLOSED, 5 comments)  
   **Why it matters:** After pressing backspace to remove a paste marker (e.g., `[Paste #2 +12 lines]`), the counter does not decrement, causing the next paste to continue as `[Paste #3...]` instead of properly reusing `[Paste #2...]`. Minor but annoying UX inconsistency in the editor.

7. **[#6226 — "Streams end without finish_reason" error when provider omits finish_reason for tool calls](https://github.com/earendil-works/pi/issues/6226)** (CLOSED, 4 comments)  
   **Why it matters:** Providers like GLM 5.1 on NVIDIA NIM close the stream without emitting `finish_reason` during tool call responses. Pi currently hard-errors instead of gracefully handling this. Quick community fix expected.

8. **[#6318 — pi-keyrouter doesn't see its config](https://github.com/earendil-works/pi/issues/6318)** (CLOSED, 4 comments)  
   **Why it matters:** The `pi-keyrouter` extension fails to detect its expected configuration file after creation. Reported as potentially unsafe behavior (malicious detection), though likely just a path resolution issue.

9. **[#6360 — Defer extension loading: three preload modes (lazy/async/sync)](https://github.com/earendil-works/pi/issues/6360)** (CLOSED, 3 comments)  
   **Why it matters:** With 30+ extensions, eager loading significantly slows startup. Proposal to replace with three-tier strategy: default lazy (load on first tool invocation), optional async, optional sync. Directly addresses a scalability pain point for power users.

10. **[#6378 — "nothing I can do to fix this error" — token limit exceeded](https://github.com/earendil-works/pi/issues/6378)** (OPEN, 2 comments)  
    **Why it matters:** User hits 400 error for exceeding 262,000 token context (requested ~263,390 tokens). Error message suggests using context-compression plugin, but user reports inability to proceed. Highlights the need for better automatic context management or clearer user guidance when approaching limits.

## Key PR Progress

1. **[#6405 — Update extensions documentation to point to npm/git install locations](https://github.com/earendil-works/pi/pull/6405)** (CLOSED)  
   **What it is:** Documentation update clarifying that extensions installed via npm/git reside in specific directories, since Pi's LLM sometimes fails to locate them when asked to self-examine. Addresses #6400.

2. **[#6402 — Support opaque custom metadata in JSONL session header](https://github.com/earendil-works/pi/pull/6402)** (CLOSED)  
   **What it is:** Adds optional `metadata?: Record<string, unknown>` to the v3 JSONL session header, enabling custom metadata passthrough in the harness module's session storage.

3. **[#6175 — Emit session name changes to extensions](https://github.com/earendil-works/pi/pull/6175)** (CLOSED)  
   **What it is:** Fixes extensions not being notified when session names change. Essential for extensions that display or react to session identity.

4. **[#6026 — Stabilize working status row](https://github.com/earendil-works/pi/pull/6026)** (CLOSED)  
   **What it is:** Fixes the TUI's working status row flickering/jittering during active runs. Part of a series from xl0 improving TUI stability.

5. **[#5913 — Stable markdown working](https://github.com/earendil-works/pi/pull/5913)** (CLOSED)  
   **What it is:** Stabilizes markdown rendering in the TUI, particularly for streaming output. Complements the code fence rendering fix in #5846.

6. **[#6030 — Print benchmark timings after TUI stop](https://github.com/earendil-works/pi/pull/6030)** (CLOSED)  
   **What it is:** Ensures benchmark timing output appears after the TUI stops, not during active rendering where it gets obscured. Improves developer debugging experience.

7. **[#5708 — Wrap question extension text instead of truncating](https://github.com/earendil-works/pi/pull/5708)** (CLOSED)  
   **What it is:** Changes the TUI layout for extension questions from truncation to text wrapping, improving readability of long prompts.

8. **[#5306 — Add system prompt options to extension commands](https://github.com/earendil-works/pi/pull/5306)** (CLOSED)  
   **What it is:** Allows extension commands to specify custom system prompt overrides, giving extension authors more control over model behavior.

9. **[#6063 — Extension stats](https://github.com/earendil-works/pi/pull/6063)** (CLOSED)  
   **What it is:** Adds per-extension timing/usage statistics. Also fixes a bug where OSC terminal garbage was printed after `PI_STARTUP_BENCHMARK=1 PI_TIMING=1 pi` exits.

10. **[#5869 — Export config dirname](https://github.com/earendil-works/pi/pull/5869)** (CLOSED)  
    **What it is:** Exposes the configuration directory path for extensions, enabling them to properly locate config files relative to Pi's install.

## Feature Request Trends

1. **Provider Ecosystem Expansion** — Multiple requests to add first-class support for additional providers: **Eden AI** (#6403, OpenAI-compatible EU gateway), **Azure OpenAI Responses** (#6409, reasoning model store behavior), and **DeepInfra** (#6399, corrupted output for Kimi-K2.7-Code). The community increasingly expects Pi to handle provider-specific quirks gracefully rather than requiring custom configurations.

2. **Extension Loading Performance** — Issue #6360 requesting lazy/async/sync preload modes for extensions has strong support. Users with 30+ extensions report significant startup delays due to eager loading. This is the most notable emerging performance concern.

3. **Session and CLI Flexibility** — Several requests target better session management: support for starting a "no-session" even with `-r` flag (#6401), opaque custom metadata in session headers (#6402), and better error handling for `--session-id` with unknown IDs (#6407).

4. **Inline Settings Hooks** — Request for passing inline settings factories to `main()` (#6398) indicates developers want to build CLI harnesses that reuse Pi's main entry point without forking configuration management.

## Developer Pain Points

1. **Reasoning Model Incompatibility** — The most significant recurring pain point is reasoning models (GLM-5.x, Kimi-K2.7) returning malformed or incomplete responses (#6259, #6226, #6399). These models often omit `content`, `finish_reason`, or return corrupted output. The community is spending significant effort on handling non-standard provider behavior.

2. **Extension Discovery and Path Confusion** — Extensions installed via npm/git cannot be found by Pi's LLM when it tries to self-examine (#6400). The documentation doesn't match actual install locations, causing a frustrating cycle where users ask Pi to fix extensions but Pi can't locate them.

3. **Context Window Clamping Regression** — The fix for #5595 introduced a new problem (#6206): clamping `max_tokens` to the full context window prevents users from setting smaller artificial limits. This is a classic fix-introducing-regression pattern that blocks legitimate use cases (cost caps, token budgeting for parallel processing).

4. **TUI Freeze / State Management** — Escape key freezing (#6234), the paste counter not reverting (#6362), and cursor staying active when terminal loses focus (#3896) all point to brittle TUI state management that breaks under specific interaction patterns. These are high-frequency UX frustrations for interactive users.

5. **Credential and Config File Locking** — Read-only config directories cause credential read failures because Pi locks files even for reads (#6406). Several users report configuration persistence issues that only manifest in restrictive environments (RHEL containers, read-only mounts).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-08

## Today's Highlights

The team shipped **v0.19.7** with strengthened PR triage and a new `review` feature, plus multiple nightly fixes. Community discussion centered on **multi-workspace daemon support** (19 comments) and **token management pain points** — specifically the `/review` skill's high token consumption and a hard-limit bug when env-configured models reserve full output windows. Several welcome-PR-ready bug fixes and feature PRs (memory refresh, permission badges, WeCom channel) were merged or opened, signaling steady progress on quality-of-life improvements.

## Releases

- **v0.19.7** (stable) — Includes `fix(triage): strengthen PR gate with batch detection, problem existence check, and red flag patterns` and `feat(review): rou…` (partial changelog). [Full Changelog](https://github.com/QwenLM/qwen-code/compare/v0.19.6...v0.19.7)
- **v0.19.7-nightly.20260708.394c1a289** — Nightly build with `docs(channels): add WeCom to channels overview` by @DragonnZhang. [Changelog](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.7-nightly.20260708.394c1a289)
- **v0.19.6-preview.0** — Preview release with same WeCom docs addition.

## Hot Issues (Top 10 by Activity)

1. **#6378 — RFC: Support multiple workspaces in one `qwen serve` daemon**  
   *19 comments* — Proposes a 1-daemon-N-workspaces model while preserving backward compatibility. Active design discussion on session isolation and lifecycle. [Issue](https://github.com/QwenLM/qwen-code/issues/6378)

2. **#6264 — `/review` skill consumes large amount of tokens**  
   *8 comments* — Users report heavy token usage from the review skill, with screenshots showing hundreds of thousands of tokens per invocation. Community requests optimization or token-budget controls. [Issue](https://github.com/QwenLM/qwen-code/issues/6264)

3. **#6384 — Hard limit: 0 when env-configured model reserves full context window for output**  
   *5 comments* — Critical bug: Qwen Code fails before any request with "hard limit: 0" after automatic compression, when a model reserves its full context for output. Affects environment-configured setups. [Issue](https://github.com/QwenLM/qwen-code/issues/6384)

4. **#6312 — Tracking: reduce per-session overhead on daemon session-creation path**  
   *5 comments* — Performance tracking issue for reducing synchronous I/O and object reconstruction on every `session/new` in the daemon. [Issue](https://github.com/QwenLM/qwen-code/issues/6312)

5. **#6298 — Shell tool fails on Windows when command produces stdout**  
   *5 comments* — Windows-specific bug: `run_shell_command` pipes output through `cat`, which isn't available in `cmd.exe`. **CLOSED** — fix merged. [Issue](https://github.com/QwenLM/qwen-code/issues/6298)

6. **#6265 — `tool_search` invalidates LLM server KV-cache on every deferred-tool load**  
   *5 comments* — Performance bug: Each deferred-tool discovery triggers `setTools()`, which discards the server-side KV-cache, degrading latency. **CLOSED** — welcome-PR label indicates community could help. [Issue](https://github.com/QwenLM/qwen-code/issues/6265)

7. **#6414 — VS Code: Failed to connect to Qwen agent**  
   *4 comments* — Connectivity issue in the VS Code extension, user reports inability to establish agent connection. Needs triage. [Issue](https://github.com/QwenLM/qwen-code/issues/6414)

8. **#6318 — Unable to `/rewind` after `/compress` even when rewinding to non-compressed position**  
   *4 comments* — Session rewind is blocked after compression even when the target position precedes the compression point. **CLOSED**. [Issue](https://github.com/QwenLM/qwen-code/issues/6318)

9. **#5176 — Request: allow sub-agent max parallel count setting and queue**  
   *4 comments, 👍1* — Feature request to limit parallel sub-agents and queue excess tasks. Important for local LLM users with constrained resources. **CLOSED**. [Issue](https://github.com/QwenLM/qwen-code/issues/5176)

10. **#6488 — Feat: add MessageDisplay hook event for mid-turn streaming (CLI + ACP)**  
    *3 comments* — Request for a hook that fires *during* assistant streaming, enabling real-time UI reactions (e.g., progress indicators or incremental output). [Issue](https://github.com/QwenLM/qwen-code/issues/6488)

## Key PR Progress (Top 10)

1. **#6377 — fix(shell): block kill commands using pgrep command substitution**  
   Prevents malicious `kill -9 $(pgrep node)` commands from killing Qwen Code itself. Addresses security issue #6246. [PR](https://github.com/QwenLM/qwen-code/pull/6377)

2. **#6498 — feat(cli): Show permission mode badge in footer for DEFAULT mode**  
   Always displays the current approval mode, removing visual ambiguity when in default mode. [PR](https://github.com/QwenLM/qwen-code/pull/6498)

3. **#6500 — fix(web-shell): refine markdown table interactions**  
   Coalesces resize drag updates, prevents keyboard shortcut conflicts, clears active handles on focus loss. [PR](https://github.com/QwenLM/qwen-code/pull/6500)

4. **#6451 — feat(cli): add Fleet View for multi-session management**  
   New fullscreen TUI inspired by Claude Code's agent view — trigger with double left-arrow, shows session list with status icons, thumbnail, and inline rename/delete. [PR](https://github.com/QwenLM/qwen-code/pull/6451)

5. **#6497 — fix(memory): refresh instructions after remember**  
   Reloads hierarchical memory and refreshes system instruction after `/remember` completes, fixing stale memory index issue (#6487). [PR](https://github.com/QwenLM/qwen-code/pull/6497)

6. **#6491 — feat(sdk): expose transport and query options in both SDKs**  
   Adds 11 new `QueryOptions` fields (fork_session, max_tokens, stop, metadata, etc.) to Python and TypeScript SDKs, all backward compatible. [PR](https://github.com/QwenLM/qwen-code/pull/6491)

7. **#6440 — feat(cli): add `/learn` command for user-initiated skill creation**  
   Creates reusable skills from local dirs, URLs, conversation history, or freetext — saved as SKILL.md under `.qwen/skills/`. [PR](https://github.com/QwenLM/qwen-code/pull/6440)

8. **#6495 — feat(channels): support webhook-triggered channel tasks**  
   Allows external webhook POST events to trigger `qwen serve` responses, delivered to configured chat platforms. [PR](https://github.com/QwenLM/qwen-code/pull/6495)

9. **#6456 — feat(core): add working_dir to Agent tool for pinning subagents to worktree**  
   Sub-agents can be pinned to an existing git worktree, isolating file/shell operations to that directory. [PR](https://github.com/QwenLM/qwen-code/pull/6456)

10. **#6492 — feat(sdk): add control request methods for effort, models, usage, context**  
    Adds `set_effort()`, `set_model()`, `get_usage()`, and `get_context()` to both SDKs with corresponding CLI control handlers. [PR](https://github.com/QwenLM/qwen-code/pull/6492)

## Feature Request Trends

- **Multi-workspace & multi-session management** — Users want a single daemon to manage multiple workspaces (#6378) and richer session management (Fleet View #6451, session reorder fix #6438).
- **Channel integrations** — WeCom intelligent robot (#6208, now documented), DingTalk interactive cards (#6443), and webhook-triggered channels (#6495) are in active development.
- **Skill/workflow improvements** — `/learn` command (#6440), skill deduplication (#6427), and prompt-as-code workflow enhancements (#6452) reflect growing demand for reusable, versionable skill tooling.
- **Observability & UX** — Permission mode badges (#6496), mid-turn streaming hooks (#6488), OSC 8 hyperlinks for auth URLs (#6428), and hotkey model toggling (#6442) show focus on polish and accessibility.
- **SDK feature parity** — Multiple PRs expose CLI control methods (effort, model switching, usage queries) to the Python and TypeScript SDKs (#6491, #6492).

## Developer Pain Points

1. **Token management is the #1 friction point** — The `/review` skill (#6264), hard‑limit zero bug (#6384), large PDF reads overflowing context (#6408), and KV-cache invalidation on tool search (#6265) all indicate developers are hitting token ceilings and inefficiencies daily.

2. **Memory system instability** — Stale memory index after `/remember` (#6487), worktree memory pollution (#6449), and session auto-title polluted by startup context (#6419) erode trust in persistent memory across long sessions.

3. **Windows compatibility gaps** — Shell tool fails due to `cat` dependency (#6298), and Windows-style artifact paths are not rejected consistently (#6483). These block Windows-first developers.

4. **Session management quirks** — Inability to `/rewind` after `/compress` (#6318), daemon session list reordering (#6438), and silent `/clear` failure after task cancellation (#6499) disrupt developer flow.

5. **Authentication friction** — Hard-wrapped auth URLs (#6428) and subscription issues (#6477, #6475) create onboarding barriers, especially for non-English-speaking users.

6. **Channel integration maturity** — While WeCom and DingTalk are being added, relay of ACP permission requests through channels (#6446) and non‑SSE response detection (#6465) show the channel system still has rough edges in production.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-07-08
**Project:** CodeWhale (formerly DeepSeek-TUI) — `github.com/Hmbown/DeepSeek-TUI`

---

## 1. Today's Highlights

The project has fully rebranded to **CodeWhale** with the v0.8.67 release; the legacy `deepseek-tui` npm package is officially deprecated. A major **v0.8.68 milestone** is in active dogfood, with maintainers merging fixes for a blank sub-agent detail panel (#4094) and raw Ctrl+C normalization for PTY sessions (#4090). The community is heavily focused on **Windows stability** (input freeze, IME deadlock) and **workflow automation**, with six open PRs targeting the v0.8.68 train.

---

## 2. Releases

- **v0.8.67** — *CodeWhale rebranding release*
  - The canonical project name, command, npm package, and release assets are now **CodeWhale**.
  - Legacy `deepseek-tui` npm package is deprecated and receives no further updates.
  - Migration guide available at `docs/REBRAND.md`.
  - No new features or fixes beyond the rename.
  - [Release Link](https://github.com/Hmbown/DeepSeek-TUI/releases/tag/v0.8.67)

---

## 3. Hot Issues (Top 10)

### 1. [#2487 — Frequent error: Turn stalled - no completion signal received](https://github.com/Hmbown/CodeWhale/issues/2487)
- **Status:** CLOSED | 20 comments | 1 👍
- **Why it matters:** A critical reliability bug in `yolo` mode that freezes the TUI and requires manual intervention. The high comment count shows this is a widespread pain point.
- **Community sentiment:** Users report the `continue` command fails to resume operations, making `yolo` mode essentially unusable for long-running tasks.

### 2. [#4092 — v0.8.68 execution board: lane order, dependencies, and agent protocol](https://github.com/Hmbown/CodeWhale/issues/4092)
- **Status:** OPEN | 11 comments
- **Why it matters:** This is the canonical triage packet for the v0.8.68 milestone. It defines execution lanes (stopship → catalog → workflow UI → release gate) and serves as the single entry point for agents working this milestone.
- **Community sentiment:** Maintainer-driven; reflects a maturing release management process.

### 3. [#4094 — Sub-agent detail panel is empty and can freeze the TUI during active work](https://github.com/Hmbown/CodeWhale/issues/4094)
- **Status:** OPEN | 4 comments | lane-stopship
- **Why it matters:** A release-blocking bug discovered during v0.8.68 dogfood. The sub-agent panel shows no useful information for running workers, and under certain conditions can freeze the entire TUI.
- **Community sentiment:** Already fixed in PR #4182 (closed today), so the community response is proactive.

### 4. [#3144 — Add natural-language auto-review policy and a pre-push review gate](https://github.com/Hmbown/CodeWhale/issues/3144)
- **Status:** CLOSED | 14 comments
- **Why it matters:** Inspired by Cursor's SDK/review features, this enhancement would add automated code review policies and pre-push gates — a significant security and code-quality improvement.
- **Community sentiment:** Positive; community members see this as a competitive differentiator from basic AI coding assistants.

### 5. [#1812 — TUI freezes intermittently on Windows 11 (crossterm poll)](https://github.com/Hmbown/CodeWhale/issues/1812)
- **Status:** CLOSED | 11 comments
- **Why it matters:** One of the longest-running Windows stability issues. The TUI becomes completely unresponsive — no keyboard input, no screen updates — but the process stays alive.
- **Community sentiment:** High frustration; users provided detailed logs and thread-state analysis. Now closed after multiple fix attempts.

### 6. [#2261 — TUI crashes and leaks input to PowerShell terminal](https://github.com/Hmbown/CodeWhale/issues/2261)
- **Status:** CLOSED | 6 comments
- **Why it matters:** A security-concerning bug where TUI input is leaked to the parent PowerShell process after a crash, potentially exposing API keys or commands.
- **Community sentiment:** Users in China report this as a blocker for production use on Windows.

### 7. [#1835 — Windows: Input field unresponsive to keystrokes (IME composition deadlock)](https://github.com/Hmbown/CodeWhale/issues/1835)
- **Status:** CLOSED | 5 comments | 1 👍
- **Why it matters:** Affects Chinese IME (Sogou) users on Windows 10. Complete input unresponsiveness makes the TUI unusable for East Asian users — a significant accessibility gap.
- **Community sentiment:** Reported with detailed reproduction steps; community hopes for a permanent fix after multiple attempts.

### 8. [#1060 — Error: Stream stalled: no data received for 90s](https://github.com/Hmbown/CodeWhale/issues/1060)
- **Status:** CLOSED | 5 comments
- **Why it matters:** Network reliability issue during streaming inference. The 90-second timeout causes abrupt task failures, especially on slower API backends.
- **Community sentiment:** Users request configurable timeout or retry logic.

### 9. [#528 — Cache-maximal context mode: re-read active files instead of summarizing](https://github.com/Hmbown/CodeWhale/issues/528)
- **Status:** CLOSED | 4 comments
- **Why it matters:** A forward-looking performance enhancement leveraging DeepSeek V4's cheap cached input. Instead of summarizing old context, the engine re-reads full file contents each turn — potentially saving tokens while preserving accuracy.
- **Community sentiment:** Highly anticipated by power users working on large codebases.

### 10. [#2721 — v0.9.0 Stabilization gate: Windows, large-repo, subagent, and live-state blockers](https://github.com/Hmbown/CodeWhale/issues/2721)
- **Status:** CLOSED | 2 comments
- **Why it matters:** Defines the release-blocking stabilization lane for v0.9.0, ensuring old Windows and sub-agent bugs don't ship with major new features.
- **Community sentiment:** Maintainer-driven; community appreciates the explicit quality gate.

---

## 4. Key PR Progress (Top 10)

### 1. [#4182 — fix(tui): populate sub-agent detail panel with live activity](https://github.com/Hmbown/CodeWhale/pull/4182)
- **Author:** Hmbown | **Status:** CLOSED
- **Fixes:** #4094 (release-blocker, TUI freeze)
- **Key changes:** Populates the sub-agent detail panel with live tool call names, status, compact result state, and final summary/handoff. Bounded to prevent infinite scroll.
- **Impact:** Directly unblocks the v0.8.68 dogfood pipeline.

### 2. [#4180 — fix(tui): normalize raw Ctrl+C byte for PTY quit-arm flow](https://github.com/Hmbown/CodeWhale/pull/4180)
- **Author:** Hmbown | **Status:** CLOSED
- **Fixes:** #4090
- **Key changes:** Normalizes raw ETX (0x03) to canonical Ctrl+C in PTY/raw-mode sessions. Adds regression tests for double Ctrl+C idle exit.
- **Impact:** Prevents accidental exits and stuck sessions in Windows terminals.

### 3. [#4181 — fix(tui): Fleet setup role/profile roster editor](https://github.com/Hmbown/CodeWhale/pull/4181)
- **Author:** Hmbown | **Status:** OPEN
- **Fixes:** #4093
- **Key changes:** Aligns Fleet setup with role/profile editing instead of provider-scoped model picker. Persists unambiguous provider+model route identity.
- **Impact:** Critical for multi-model workflow configuration in v0.8.68.

### 4. [#4163 — feat(workflows): v0.8.68 agent execution lanes and milestone sync](https://github.com/Hmbown/CodeWhale/pull/4163)
- **Author:** Hmbown | **Status:** CLOSED (merged to main)
- **Key changes:** Adds wave-based agent workflow files for v0.8.68 (stopship → catalog → workflow UI → TUI copy → release gate). Adds `docs/AGENT_WORKFLOWS_0868.md` playbook.
- **Impact:** Production milestone management; forces organized feature delivery.

### 5. [#4099 — 0.8.68 train: workflow correctness, TUI stability, modes & permissions, security hardening](https://github.com/Hmbown/CodeWhale/pull/4099)
- **Author:** Hmbown | **Status:** CLOSED
- **Key changes:** Six commits addressing release blockers (completion polling fail-close, cancel interruption, session safety), TUI performance, and permission/proxy security.
- **Impact:** The core stabilization train for v0.8.68.

### 6. [#4191 — fix(catalog): accept current live Models.dev schema in parser](https://github.com/Hmbown/CodeWhale/pull/4191)
- **Author:** Hmbown | **Status:** OPEN
- **Fixes:** #4185
- **Key changes:** Handles `interleaved` field in two shapes (boolean or string) from the live Models.dev catalog. Critical for provider catalog accuracy.
- **Impact:** Unblocks the four-PR catalog chain (#4184→#4185→#4187→#4186→#4188).

### 7. [#3902 — perf(tui): fix the five render/input hot paths](https://github.com/Hmbown/CodeWhale/pull/3902)
- **Author:** Hmbown | **Status:** OPEN
- **Fixes:** #3896–#3900 (performance issues)
- **Key changes:** Five commits addressing duplicate row computations, wasteful frame re-renders, and excessive serialization in the TUI render/input loop.
- **Impact:** Directly improves TUI responsiveness on low-end hardware.

### 8. [#3818 — fix(tui): expand active tool run summaries](https://github.com/Hmbown/CodeWhale/pull/3818)
- **Author:** cyq1017 | **Status:** CLOSED (merged)
- **Key changes:** Includes active in-flight entries when resolving dense tool-run expansion. Adds regression test for toggling active summaries.
- **Impact:** Fixes a transcript-collapse edge case where active tool runs weren't expandable.

### 9. [#4044 — fix(onboarding): localize dynamic welcome steps](https://github.com/Hmbown/CodeWhale/pull/4044)
- **Author:** nightt5879 | **Status:** OPEN
- **Key changes:** Localizes first-run welcome through MessageId registry. Renders welcome prompts from actual onboarding gates for preconfigured users.
- **Impact:** Improves internationalization — welcome copy now available in zh-Hant and other sparse locales.

### 10. [#4035 — docs(readme): link CodeWhale for VS Code GUI frontend](https://github.com/Hmbown/CodeWhale/pull/4035)
- **Author:** gaord | **Status:** CLOSED (merged)
- **Key changes:** Adds a "CodeWhale for VS Code — GUI frontend" section to both English and Chinese READMEs.
- **Impact:** Community-maintained GUI frontend receives official visibility, potentially growing the contributor base.

---

## 5. Feature Request Trends

1. **Multi-model & Provider Routing** — Issues like #2300 and PRs #4181 show strong demand for automatic Fleet loadout selection, provider-agnostic model routing, and docs clarifying `provider = vllm` vs `provider = openai`. The community wants to use CodeWhale with local (vLLM) and remote (OpenAI-compatible) endpoints interchangeably.

2. **Cache-Maximal Context Management** — Issues #528 and #2956 push for treating cached input as "resident source" rather than summarized memory. Users working on large codebases want full file re-reads each turn to preserve accuracy, capitalizing on DeepSeek V4's cheap cached input.

3. **Workflow Automation (WhaleFlow)** — PRs #4163 and #4099, plus EPIC #2981, signal heavy community interest in programmatic branch/leaf workflow execution, cooperative cancellation, token/cost budgets, and TUI monitoring surfaces. This is the v0.9.0 flagship feature.

4. **GUI Frontends** — PR #4035 from the community linking a VS Code GUI shows demand for non-TUI interfaces. Users want CodeWhale as a backend with optional GUI, especially for complex workflow visualization.

5. **Auto-Review & Pre-Push Gates** — Issue #3144 requests natural-language auto-review policies and pre-push gates inspired by Cursor. This would integrate security review directly into the development workflow.

---

## 6. Developer Pain Points

1. **Windows Terminal Stability** — Dominates the bug tracker: TUI freezes (#1812), input leak to PowerShell (#2261), IME deadlock (#1835), and PTY quit-arm issues (#4090). Windows users report CodeWhale is nearly unusable for daily driving.

2. **Streaming/Completion Timeouts** — Issues #2487 ("Turn stalled") and #1060 ("Stream stalled") show that the TUI frequently hangs during API calls, especially in `yolo` mode. Users cannot recover without killing the process, and the 90-second timeout is too long for slow connections.

3. **Sub-Agent Panel Opaqueness** — Issue #4094 (fixed today) highlights a broader pain: during multi-agent workflows, users have no visibility into what sub-agents are doing. The panel shows "running" but no detail, making debugging impossible.

4. **Rebranding Confusion** — The sudden switch to "CodeWhale" with no migration period (#v0.8.67) has created confusion. The legacy `deepseek-tui` npm package is deprecated, but users still reference old docs and scripts. The rebranding docs (`docs/REBRAND.md`) are new and untested.

5. **High Input/Output Token Consumption** — Issues #2953, #2956, and #2957 compare CodeWhale's prompt footprint unfavorably to Codex CLI. Users running benchmarks pay 100k+ extra tokens per task. The base prompt is "significantly larger" than competitors, and repeated tool-output payloads inflate costs.

6. **Chinese IME Support** — Issues #1835 and #2261 are specific to East Asian input methods. The TUI's terminal handling conflicts with IME composition, causing complete input freeze or character corruption. This is a blocker for the significant Chinese-speaking user base.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*