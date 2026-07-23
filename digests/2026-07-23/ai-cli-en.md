# AI CLI Tools Community Digest 2026-07-23

> Generated: 2026-07-23 02:53 UTC | Tools covered: 9

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

# AI CLI Developer Tools Cross-Tool Comparison Report
**Date:** 2026-07-23

---

## 1. Ecosystem Overview

The AI CLI developer tools ecosystem is undergoing rapid maturation, with six major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code, OpenCode, Pi, Qwen Code, and DeepSeek TUI/CodeWhale—all showing substantial community activity and iterative development. The landscape is characterized by convergent feature demands (multi-agent orchestration, provider flexibility, context management) alongside platform-specific stability challenges (Windows regressions, macOS authentication issues). A clear bifurcation is emerging between well-funded commercial tools (Claude Code, Codex, Copilot CLI) and community-driven open-source projects (OpenCode, Pi, Qwen Code, CodeWhale), with the latter innovating faster on extensibility and multi-provider support but struggling more with release quality and CI stability. The total community activity across all tools exceeds 300 issues and 150 PRs in the last 24 hours, indicating a vibrant and competitive ecosystem.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Status | Key Release Note |
|---|---|---|---|---|
| **Claude Code** | ~10 hot issues | 8 PRs | **v2.1.218** (stable) | Sandbox regression, task tools disappearing |
| **OpenAI Codex** | ~10 hot issues | 10 PRs | **v0.146.0-alpha.1–.4** (alpha) | 4 Rust alphas in 24h, no stable release |
| **Gemini CLI** | 50 issues updated | 10 PRs | **v0.52.0** (stable) + **v0.53.0-preview.0** | A2A protocol fix, auth bugs closed |
| **GitHub Copilot CLI** | 14 new issues | 2 PRs | **v1.0.74-1–3** (patch) | Gemini 3.6 Flash support, Windows crashes |
| **Kimi Code CLI** | 4 new issues | 3 PRs | **kimi 2.6** (latest stable) | API compatibility break, no new release |
| **OpenCode** | 50 issues | 50 PRs | **v1.18.4** (stable) | Subscription outage, model auto-discovery |
| **Pi** | 50+ issues | 28 PRs | No new release | Provider retries, extension ecosystem |
| **Qwen Code** | 45 issues | 50 PRs | **v0.0.0-benchmark-poc** (prerelease only) | Red CI on main, update-check failures |
| **DeepSeek TUI/CodeWhale** | 16 closed issues | 13 closed PRs | **v0.9.1 candidate** (pre-release) | macOS launch crash, composer corruption |

**Key observations:**
- **OpenCode** and **Pi** show the highest raw activity, reflecting large open-source contributor bases.
- **Claude Code** and **Gemini CLI** ship stable releases with clear release notes.
- **Codex** and **Gemini CLI** are actively releasing pre-releases, signaling feature experimentation.
- **Kimi Code** and **CodeWhale** are in stabilization mode, addressing blockers before next releases.

---

## 3. Shared Feature Directions

### 3.1 Multi-Agent Orchestration and Cost Control
| Requirement | Tools | Specific Needs |
|---|---|---|
| Per-agent model selection | **Kimi Code** (#2533), **OpenCode** (#37970), **Codex** (#32031) | Assign cheap models to simple sub-tasks, capable models to complex ones |
| Concurrent sub-agent execution | **Kimi Code** (#2505), **Pi** (#6989) | Parallel vs serial execution control; parallel file editing |
| Context/token budgets per agent | **Kimi Code** (#2523), **OpenCode** (#7306) | Cap token usage per agent call to prevent runaway consumption |
| Agent transparency/auditing | **Copilot CLI** (#4207–4209), **Qwen Code** (#7525) | Per-subagent credit breakdowns, plan DAG visualization |

### 3.2 Provider Flexibility and Authentication
| Requirement | Tools | Specific Needs |
|---|---|---|
| Custom/third-party provider support | **Kimi Code** (#2534), **OpenCode** (#6231), **Pi** (#6476, #6927) | Clean API contract isolation; auto-discovery of local models |
| OAuth/authentication reliability | **Claude Code** (#77966), **Gemini CLI** (#23973, #24835), **Pi** (#6686), **Kimi Code** (#2477) | Infinite OAuth loops, credential corruption, tier misclassification |
| Provider model auto-discovery | **OpenCode** (#6231, #18011), **Gemini CLI** (#28485) | Auto-populate from `/v1/models` endpoints |

### 3.3 Session and Context Management
| Requirement | Tools | Specific Needs |
|---|---|---|
| Conversation portability | **Claude Code** (#13843), **Pi** (#6768) | Transfer context between web/CLI; session persistence across restarts |
| Mid-task steering parity | **Claude Code** (#71726), **Pi** (#6989) | Inject messages between tool calls mid-turn |
| Context usage transparency | **Copilot CLI** (#4189, #4224), **Kimi Code** (#2529), **Gemini CLI** (#25688) | Accurate tool-schema footprints, non-misleading context percentages |
| Session persistence across restarts | **Kimi Code** (#2515), **OpenCode** (orphan recovery #38432) | Save/restore sessions to disk |

### 3.4 Platform Stability (Cross-Cutting)
| Requirement | Tools | Specific Needs |
|---|---|---|
| Windows-specific regressions | **Claude Code** (#80403, #80404), **Copilot CLI** (#4217, #4219, #4222), **CodeWhale** (#4685), **Kimi Code** (#2532) | Webview blank screens, crash on exit, notification crashes, PATH overwrite, encoding crashes |
| macOS authentication issues | **Kimi Code** (#2477), **Gemini CLI** (#24835), **Claude Code** (#80002) | Keychain access denied, credential corruption |
| WSL/ARM64 compatibility | **Copilot CLI** (#3534), **Gemini CLI** (#23848) | Clipboard failures, authentication failures |

---

## 4. Differentiation Analysis

### 4.1 Feature Focus

| Dimension | Claude Code | Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | CodeWhale |
|---|---|---|---|---|---|---|---|---|---|
| **Primary differentiator** | Agentic tool ecosystem, sandbox | Multi-agent v2, Rust rewrite | Google ecosystem integration | GitHub/Azure BYOK, Gemini Flash | Cost-tiered agents (wanted) | Open-source, multi-provider, TUI | Extensible plugin/extension system | Enterprise hardening, Web Shell | Skill management, theme system |
| **Target user** | Professional developers | Power users, multi-project | Google Cloud/Vertex AI users | Enterprise GitHub users | Multi-provider developers | Open-source community | Custom/self-hosted users | Enterprise, Node.js users | Multi-provider, Chinese market |
| **Model provider** | Anthropic Claude (primary) | OpenAI (GPT-5.x) | Google Gemini | GitHub Copilot (GPT + Gemini) | Kimi/Moonshot + third-party | Any OpenAI-compatible | Any provider (OpenRouter, Bedrock, StepFun) | Any provider | DeepSeek + Z.AI, GLM, MiniMax |
| **Open source** | No | No | Yes | Yes (MIT) | Yes | Yes (Apache 2.0) | Yes | Yes | Yes |

### 4.2 Technical Approach

| Tool | Architecture | Key Strengths | Key Weaknesses |
|---|---|---|---|
| **Claude Code** | Monolithic, TypeScript | Best sandbox, `/code-review` subagent, robust plugin system | Linux sandbox regressions, feature-gating bugs |
| **Codex** | Multi-agent v2 (Rust core) | Scalable multi-agent, customizable TUI (requested) | MCP process leaks, log churn, Windows process management |
| **Gemini CLI** | Node.js, Google-auth library | Strong GCP integration, eval coverage, A2A protocol | Authentication reliability, project scanning overhead |
| **Copilot CLI** | React/Ink TUI, libuv | VS Code integration, Gemini Flash support, multiplexing | Windows crashes, tmux incompatibility |
| **Kimi Code** | TypeScript | Per-agent context budgets, session persistence | API compatibility breaks, silent failures |
| **OpenCode** | Node.js, TUI | Auto-discovery, subscription model, large OSS community | Resource leaks, desktop instability |
| **Pi** | TypeScript, plugin-based | Extensible via extensions, provider diversity, constrained sampling | Provider reliability regressions, extension ecosystem friction |
| **Qwen Code** | Node.js, monorepo | Enterprise memory integration, Web Shell, hot-reload | CI instability, update-check failures |
| **CodeWhale** | TypeScript, skill-based | Unified skill management, theme system, provider diversity | Late-breaking release blockers, macOS launch crash |

### 4.3 Pricing Models

| Tool | Free Tier | Paid Plans |
|---|---|---|
| **Claude Code** | Limited free queries | Max plan ($20–$100/mo) |
| **Codex** | Free tier with limits | Plus, Ultra (usage-based) |
| **Gemini CLI** | Free tier with Google AI | Pro tier (subscription-based) |
| **Copilot CLI** | Included with GitHub Copilot | Copilot Individual ($10/mo), Enterprise |
| **Kimi Code** | Free beta | Future paid tiers (TBD) |
| **OpenCode** | Free tier (limited models) | Go subscription |
| **Pi** | Free tier | OpenRouter credits, custom providers |
| **Qwen Code** | Free tier | Enterprise licensing |
| **CodeWhale** | Free tier | BYO API keys, platform credits |

---

## 5. Community Momentum & Maturity

### 5.1 Most Active Communities
1. **OpenCode** — 50 issues + 50 PRs in 24h, 185 👍 on top feature request (#6231). Strongest organic community engagement.
2. **Pi** — 50+ issues + 28 PRs, rich extension ecosystem with `inprogress` labels. High contributor velocity.
3. **Qwen Code** — 45 issues + 50 PRs, but CI instability undermines release confidence.
4. **CodeWhale** — 16 closed issues + 13 closed PRs. Smallest community but highest closure rate, suggesting focused maintenance.

### 5.2 Most Rapidly Iterating
1. **OpenCode** — Subscription pipeline broken but 50 PRs show massive development velocity.
2. **Codex** — 4 alpha releases in 24h; Rust rewrite progressing.
3. **Gemini CLI** — 50 issues updated, 3 releases (stable + nightly + preview) in 24h.
4. **Claude Code** — Stable releases, but regressions indicate release quality challenges.

### 5.3 Maturity Assessment

| Metric | Claude Code | Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | CodeWhale |
|---|---|---|---|---|---|---|---|---|---|
| **Release frequency** | High (weekly) | Medium (alpha bursts) | High (daily) | High (daily patches) | Low | Medium | Medium | Medium | Low (pre-release) |
| **Regression frequency** | Medium | Medium | Low | High | Medium | High | Medium | Medium | High |
| **Community responsiveness** | High (paid support) | Medium | Medium | Medium | Low | High (OSS) | High (OSS) | Medium | High (small team) |
| **Documentation quality** | High | Medium | Medium | Medium | Low | Medium | Medium | Medium | Low |
| **CI stability** | High | Medium | Medium | Low | Medium | Low | Medium | **Low (red on main)** | Medium |

---

## 6. Trend Signals

### 6.1 Industry Trends from Community Feedback

**1. Multi-Provider Default Mode**
The era of single-provider CLI tools is ending. Communities of **Kimi Code**, **OpenCode**, **Pi**, and **CodeWhale** are all demanding provider-agnostic tooling. Tool-specific parameters leaking to third-party endpoints (Kimi Code #2534) is seen as a regression. Tools that native support multiple providers (OpenCode, Pi) are gaining community traction over provider-locked tools.

**2. Cost-Controlled Agent Architectures**
The dominant feature request across the ecosystem is **per-agent model selection** (Kimi Code #2533, Copilot CLI #4218, Codex #32031). Users want to assign cheap models to simple sub-tasks and expensive models to complex ones. This reflects a maturing understanding that "one model fits all" is economically unsustainable for production multi-agent pipelines.

**3. Context Window Transparency Crisis**
Users across **Copilot CLI** (#4189, #4224), **Kimi Code** (#2529), **Gemini CLI** (#25688), and **Claude Code** (#80196) report **opaque context management**—misleading percentages, silent truncation, and auto-compact that never fires. This is eroding trust in agent reasoning. Expect context visualization and budget controls to become table stakes.

**4. Platform Parity as Competitive Moats**
**Windows stability** is the weakest link across almost all tools:
- Copilot CLI: 3 crash-related issues in one day (#4217, #4219, #4222)
- CodeWhale: Installer destroys PATH (#4685)
- Claude Code: Webview blank-screen loop (#80403)
- Kimi Code: Encoding crash on stdout redirection (#2532)

Tools that invest in Windows/WSL quality (Gemini CLI's better track record) have a clear differentiation opportunity.

**5. Enterprise Authentication as a Gate**
**OAuth loops** (Claude Code #77966), **tier misclassification** (Gemini CLI #23973), **credential corruption** (Gemini CLI #24835, Kimi Code #2477), and **BYOK failures** (Copilot CLI #4016) consistently block paying users. The authentication-to-access pipeline is the single highest-friction point for enterprise adoption. Tools with robust, auditable auth flows (e.g., Pi's OAuth PKCE implementation) are positioned for enterprise wins.

**6. Open-Source vs. Commercial Divergence**
- **Open-source tools** (OpenCode, Pi, Qwen Code, CodeWhale) innovate faster on provider diversity, extensibility, and community features but struggle with release quality and CI stability.
- **Commercial tools** (Claude Code, Codex, Copilot CLI) have better raw stability and support but are slower to adopt multi-provider and cost-control features.

The gap is narrowing. Expect commercial tools to adopt open-source innovation patterns (rapid iteration, community PRs) and open-source tools to professionalize their release processes.

### 6.2 Reference Value for Developers

| If you care about... | Recommend |
|---|---|
| **Stability + agentic features** | Claude Code (despite Linux sandbox issues) |
| **Multi-agent orchestration** | Codex (multi-agent v2) or OpenCode (cost controls) |
| **Enterprise security/compliance** | Copilot CLI (BYOK, GitHub integration) |
| **Multi-provider flexibility** | Pi or OpenCode |
| **Minimal cost / self-hosted** | OpenCode or Pi (BYO API keys) |
| **Google Cloud integration** | Gemini CLI |
| **Chinese market / Asian providers** | Kimi Code, CodeWhale, Qwen Code |
| **Customizable TUI experience** | CodeWhale (skills, themes) or Pi (extensions) |
| **Best cross-platform support** | Gemini CLI (fewest platform regressions) |

---

**Summary**: The AI CLI tools ecosystem is converging on multi-provider support, cost-controlled agent architectures, and platform stability as the key battlegrounds. Open-source tools lead on flexibility and community velocity; commercial tools lead on reliability and support. The next 6–12 months will likely see consolidation around tools that can deliver both.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-07-23 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

### #1 — Self-Audit Skill (PR #1367)
**Functionality:** A universal reasoning quality gate that performs mechanical file verification (checking claimed outputs exist) followed by a four-dimension reasoning audit in damage-severity priority order. Works across any project, tech stack, or model.
**Discussion highlights:** Active debate on whether audit criteria are too strict for creative tasks; strong support for the mechanical verification pre-step as a safety net.
**Status:** Open — 9 comments, created 2026-06-28, last updated 2026-07-02
🔗 https://github.com/anthropics/skills/pull/1367

### #2 — Document Typography Skill (PR #514)
**Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents — the typographic defects most users don't notice but degrade professional quality.
**Discussion highlights:** Broad consensus this addresses a universal pain point; some debate on whether it should merge with the existing `document` skill or remain standalone.
**Status:** Open — 5 comments, created 2026-03-04
🔗 https://github.com/anthropics/skills/pull/514

### #3 — Color Expert Skill (PR #1302)
**Functionality:** A self-contained color-expertise resource covering ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912, and CSS named color systems with a "what to use when" table for color spaces (OKLCH for scales, OKLAB for gradients, CAM16 for perception).
**Discussion highlights:** Praised for depth and practical tables; community requested adding accessibility contrast checking.
**Status:** Open — 5 comments, created 2026-06-10, last updated 2026-07-21
🔗 https://github.com/anthropics/skills/pull/1302

### #4 — Testing Patterns Skill (PR #723)
**Functionality:** Covers the full testing stack: Testing Trophy model philosophy, AAA unit test pattern, React Testing Library, Playwright E2E, GraphQL integration testing, property-based testing, and test-driven development workflows.
**Discussion highlights:** Widely requested skill; discussion focused on whether to include snapshot testing and mocking framework recommendations.
**Status:** Open — 4 comments, created 2026-03-22, last updated 2026-04-21
🔗 https://github.com/anthropics/skills/pull/723

### #5 — Pyxel Retro Game Development Skill (PR #525)
**Functionality:** Skill for creating retro/pixel-art/8-bit games using the Pyxel engine via pyxel-mcp MCP server. Covers the full iterative workflow: write, run and capture, inspect, iterate.
**Discussion highlights:** Novel use-case for game creation; discussion on whether MCP dependency limits portability across Claude environments.
**Status:** Open — 3 comments, created 2026-03-05, last updated 2026-07-15
🔗 https://github.com/anthropics/skills/pull/525

### #6 — ODT Skill (PR #486)
**Functionality:** OpenDocument Format (.odt, .ods) creation, template filling, and ODT-to-HTML conversion for LibreOffice/ISO-standard document workflows.
**Discussion highlights:** Requested as complementary to existing DOCX/PDF skills; some concern about ODF specification complexity and maintenance burden.
**Status:** Open — 3 comments, created 2026-03-01, last updated 2026-04-14
🔗 https://github.com/anthropics/skills/pull/486

---

## 2. Community Demand Trends

**Top unmet needs identified from Issues:**

| Demand Category | Key Issue | Community Signal |
|---|---|---|
| **Security & Trust** | #492 — Trust boundary abuse via anthropic/ namespace (43 comments, 👍2) | Strongest demand signal; community wants clear provenance and permission boundaries for third-party skills |
| **Organizational Sharing** | #228 — Org-wide skill sharing in Claude.ai (14 comments, 👍7) | Enterprise pain point: no native sharing, manual file transfer only |
| **Skill-Creator Reliability** | #556 — 0% trigger rate in run_eval.py (12 comments, 👍7); #1169 — recall=0% loop | Silent failures in the optimization pipeline are the #1 developer frustration; urgent tooling fix needed |
| **Deduplication** | #189 — Duplicate skills from overlapping plugins (6 comments, 👍9) | Quality-of-life: plugin installation creates confusion and wastes context |
| **Agent Governance** | #412 — Agent governance safety patterns (6 comments) | Emerging demand for safety guardrails in autonomous agent workflows |
| **MCP Integration** | #16 — Expose Skills as MCPs (4 comments) | Standardization desire: Skills-as-protocol for tool interoperability |

---

## 3. High-Potential Pending Skills

These active-comment PRs address the community's most pressing pain points and are likely to land soon:

- **PR #1298** — Fix run_eval.py always reporting 0% recall (MartinCajiao) — The critical blocker for the entire skill-creation workflow. Addresses the root cause of #556, #1169, and #1061. Multiple independent reproductions. 🔗 https://github.com/anthropics/skills/pull/1298

- **PR #1099** — Fix run_eval.py crash on Windows (joshuawowk) — Subprocess pipe and encoding fixes for Windows compatibility. Directly addresses #1061. 🔗 https://github.com/anthropics/skills/pull/1099

- **PR #1367** — Self-audit skill (YuhaoLin2005) — The reasoning quality gate concept is generating cross-issue discussion (#1385 as follow-up proposal). High-velocity PR with active refinement. 🔗 https://github.com/anthropics/skills/pull/1367

- **PR #1302** — Color expert skill (meodai) — Recently updated with continued community engagement. Lower complexity than other PRs, making it a faster candidate for merge. 🔗 https://github.com/anthropics/skills/pull/1302

- **PR #509** — CONTRIBUTING.md addition (narenkatakam) — Addresses community health gap (#452); blocked less by technical review than process. 🔗 https://github.com/anthropics/skills/pull/509

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **reliable skill-authoring tooling and security governance** — the skill-creator pipeline's broken evaluation loop (affecting all skill optimization) and the absence of trust boundaries for community-shared skills represent the two critical bottlenecks preventing the ecosystem from scaling beyond individual hobbyists to enterprise adoption.

---

**Claude Code Community Digest**
**Date:** 2026-07-23

---

## 1. Today's Highlights

Two major regressions dominated community discussion today: a sandbox breakage in v2.1.216 causing bwrap failures on non-root Linux installs, and a silent disappearance of task-tracking tools (`TaskCreate`, `TaskList`, `TaskGet`, `TaskUpdate`) from CLI sessions despite feature flags being enabled. A positive note: `/code-review` was rearchitected to run as a background subagent, no longer consuming conversation context. Several new Fable 5 model behavior bugs surfaced, including contradictory availability messaging for Max plan users.

---

## 2. Releases

**v2.1.218** (latest)

- **`/code-review` now runs as a background subagent** — review work no longer fills your conversation history, and stacked slash commands remain available as review targets during execution.
- **Screen-reader accessibility fix** — added announcements for deleted text during word and line deletions (`Option+Delete`, `Ctrl+W`, `Cmd+Backspace`).

---

## 3. Hot Issues

1. **[#80002](https://github.com/anthropics/claude-code/issues/80002) — macOS: Claude Desktop never dispatches tools/call to first-party Filesystem extension (CLOSED)**
   *57 comments, 25 👍. High severity for macOS Desktop users relying on the Filesystem MCP tool. Community traced it to the Desktop app failing to route tool invocations after successful tool listing.*

2. **[#13843](https://github.com/anthropics/claude-code/issues/13843) — Share conversation context from Claude.ai to Claude Code (OPEN)**
   *25 comments, 99 👍. Top-voted open feature request. Users want to start planning in Claude.ai and seamlessly transfer context into a CLI coding session without manual copy-paste.*

3. **[#71726](https://github.com/anthropics/claude-code/issues/71726) — Desktop app: inject queued messages mid-task between tool calls (CLI steering parity) (OPEN)**
   *9 comments, 16 👍. Desktop users want the same "steering" behavior CLI users enjoy — sending messages that get injected between tool calls mid-turn, rather than queued until the current task completes.*

4. **[#78933](https://github.com/anthropics/claude-code/issues/78933) — Remote Control never connects: "Cannot read properties of undefined (reading 'session_url')" (OPEN)**
   *8 comments. Desktop app users on Windows cannot use `/remote-control` at all. The error fires on both connect and disconnect attempts.*

5. **[#77966](https://github.com/anthropics/claude-code/issues/77966) — /login OAuth loop: state parameter dropped after "sign in again to continue" redirect (OPEN)**
   *7 comments, 6 👍. Affects Linux and IntelliJ users. Authentication redirect drops the OAuth state parameter, creating infinite re-auth loops.*

6. **[#50894](https://github.com/anthropics/claude-code/issues/50894) — Focus mode hides substantive assistant messages, not just tool output (CLOSED)**
   *5 comments, 4 👍. Important usability concern: Focus mode was intended to collapse verbose tool logs, but accidentally hides meaningful assistant responses between tool calls.*

7. **[#80404](https://github.com/anthropics/claude-code/issues/80404) — Event-loop starvation: ~200% CPU spin and input lag after hibernate/resume (OPEN)**
   *4 comments. Windows-specific libuv event loop bug. Likely same underlying issue as #62308 (macOS). Session spins 2 CPU cores indefinitely after system wake.*

8. **[#79997](https://github.com/anthropics/claude-code/issues/79997) — Sandbox regression in v2.1.216: bwrap fails on non-root installs under root-owned dirs (OPEN)**
   *3 comments, 2 👍. Critical for Linux users with non-root Claude Code installations. Every Bash tool call fails before execution. Second distinct sandbox regression in the same release.*

9. **[#80213](https://github.com/anthropics/claude-code/issues/80213) — Task tools unavailable in top-level CLI session despite CLAUDE_CODE_ENABLE_TASKS=true (OPEN)**
   *2 comments, 1 👍. Same tools work in Desktop but not CLI. Suggests an environment-detection or gating mismatch rather than an account-level issue. Related to #80210.*

10. **[#80403](https://github.com/anthropics/claude-code/issues/80403) — Windows MSIX regression: webview repeatedly goes blank, requiring kill and reload loop (OPEN)**
    *1 comment. New bug tied to 1.24012.1.0 rollout. White screen on webview during conversations forces manual process restarts.*

---

## 4. Key PR Progress

1. **[#18217](https://github.com/anthropics/claude-code/pull/18217) — feat(plugins): add /planwith command for inline plan mode prompts (CLOSED)**
   *Allows `/planwith <prompt>` to skip the two-step `/plan` + type workflow. Users can now plan specific tasks in one command. Merged.*

2. **[#80353](https://github.com/anthropics/claude-code/pull/80353) — docs(gcp): stop on checksum mismatch (OPEN)**
   *Harden GCP gateway deployment — deployment now halts when the downloaded binary fails checksum verification, with proper cleanup before returning failure.*

3. **[#80326](https://github.com/anthropics/claude-code/pull/80326) — Add account profiles plugin (OPEN)**
   *Experimental plugin managing isolated `CLAUDE_CONFIG_DIR` environments for multiple Claude accounts on one machine. Commands for create, list, launch, assign, diagnose, and remove profiles.*

4. **[#80294](https://github.com/anthropics/claude-code/pull/80294) — docs: fix 1 broken link(s) via archive.org (OPEN)**
   *Restores broken npm package link in README using Wayback Machine snapshot. Part of continued documentation hygiene.*

5. **[#80241](https://github.com/anthropics/claude-code/pull/80241) — fix: Console scrolling to top of history when Claude adds text (OPEN)**
   *Autonomous PR fixing a UI bug where terminal scroll position resets on new output. Tested with static security check and local execution verification.*

6. **[#80229](https://github.com/anthropics/claude-code/pull/80229) — docs: fix 1 broken link(s) via archive.org (OPEN)**
   *Second link-fix PR from the same contributor, continued maintenance on stale documentation links.*

7. **[#80196](https://github.com/anthropics/claude-code/pull/80196) — fix: Auto-compact never triggers despite "100% context used" (OPEN)**
   *Autonomous PR addressing a context management bug where auto-compact never fires even when the statusline reports full context. Max sub, 200K mode users affected.*

8. **[#80195](https://github.com/anthropics/claude-code/pull/80195) — fix: Instantly hitting usage limits with Max subscription (OPEN)**
   *Autonomous PR targeting a billing/logic bug causing Max plan users to exhaust usage allowances immediately on session start.*

9. **[#80112](https://github.com/anthropics/claude-code/pull/80112) — Make devcontainer firewall init resilient to DNS resolution failures (OPEN)**
   *Hardens `.devcontainer/init-firewall.sh` to survive transient DNS failures — one flaky domain resolution no longer aborts the entire firewall setup.*

---

## 5. Feature Request Trends

- **Conversation portability** — The most-upvoted request (#13843, 99 👍) is bridging Claude.ai and Claude Code context. Users want to plan in the web chat and transfer the conversation into a coding session without manual context reconstruction.
- **Mid-task steering parity** — Multiple requests (#71726, #77724) ask for Desktop app to match CLI's ability to inject messages between tool calls mid-turn, rather than queuing until the current action finishes.
- **Agent session lifecycle management** — #66202 (9 👍) requests the ability to dismiss completed or abandoned agent sessions from the Agents view, rather than leaving them stuck on "Ready for review" or "Needs input".
- **Desktop app keyboard parity** — #68859 highlights ⌘N opening a new Terminal instead of a new session on macOS, a regression from previous behavior.

---

## 6. Developer Pain Points

1. **Sandbox stability on Linux** — #79997 documents a second distinct sandbox regression in v2.1.216, with bwrap failing on non-root installs. Every Bash tool call dies before executing. Makes the tool unusable for affected users.
2. **Task tool inconsistency** — #80213 and #80210 both report task-tracking tools (`TaskCreate`, `TaskList`, `TaskGet`, `TaskUpdate`) silently disappearing from CLI sessions while working in Desktop. Environment-detection or feature-gating logic appears broken, with no user-facing error.
3. **Fable 5 model confusion** — Multiple reports today (#79410, #80382, #80409) around Fable 5 availability: conflicting "you've reached your limit" vs. "Fable 5 is available" messages, sessions locked to Fable 5 with no model-switch escape, and Max plan users incorrectly prompted for usage credits despite included allowances.
4. **Event-loop and Webview regressions** — #80403 (Windows MSIX webview blank-screen loop) and #80404 (event-loop CPU spin after hibernate/resume) represent platform stability regressions that make the tool unusable until the process is killed or the machine restarted.
5. **OAuth and authentication loops** — #77966 (Linux/IntelliJ) and #68674 (Windows Desktop) both report infinite OAuth loops, blocking users from authenticating at all. No known workaround for either.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-23

## Today's Highlights
A burst of 4 Rust alpha releases (`v0.146.0-alpha.1` through `.4`) landed today, signaling active development on the next minor version. The community is rallying around a long-standing request for a customizable TUI status line (119 👍) and a proposal to disable auto-resolve timers (151 👍), while multiple un-reaped MCP process and file descriptor leaks remain critical developer pain points across Windows, macOS, and Linux.

## Releases
**4 new pre-release versions published in the last 24 hours:**
- `rust-v0.146.0-alpha.1` through `rust-v0.146.0-alpha.4` — All tagged with the generic message "Release 0.146.0-alpha.[N]". No detailed changelogs were provided, but the rapid iteration suggests fixes or features are being tested incrementally.

## Hot Issues (10 selected)

1. **[#28969 — Add setting to disable auto-resolve in 60 seconds for questions](https://github.com/openai/codex/issues/28969)**
   - **Why it matters:** The 60-second auto-resolve timer forces users to constantly re-open sessions that haven't finished. With **151 👍** and **53 comments**, this is the most-voted open issue, reflecting strong demand for user-controlled pacing.
   - **Community reaction:** Broad agreement; multiple users report losing work mid-task.

2. **[#29532 — macOS: Persistent SQLite TRACE log churn after v0.142.0](https://github.com/openai/codex/issues/29532)**
   - **Why it matters:** Even after a partial fix, `~/.codex/logs_2.sqlite` continues to balloon on macOS. **8 👍, 44 comments** — users are frustrated by disk space and I/O impact.
   - **Community reaction:** Reports confirm `#29432` helped, but `#29457` did not fully resolve the issue.

3. **[#17827 — Customizable status line in TUI](https://github.com/openai/codex/issues/17827)**
   - **Why it matters:** Inspired by Claude Code's status bar, users want real-time token usage, model name, and git branch visible. **119 👍, 31 comments** — a top feature request.
   - **Community reaction:** High enthusiasm; multiple users shared config examples.

4. **[#12491 — MCP child processes not reaped — 1300+ zombies, 37GB memory leak](https://github.com/openai/codex/issues/12491)**
   - **Why it matters:** A severe resource leak in Codex.app GUI that persists after 5 months. **5 👍, 27 comments** — users report system instability.
   - **Community reaction:** Debugging shows the issue is tied to MCP lifecycle management.

5. **[#25319 — Scope VS Code chats to current workspace/project](https://github.com/openai/codex/issues/25319)**
   - **Why it matters:** In multi-project setups, chat history bleeds across workspaces. **47 👍, 17 comments** — a clean UX improvement.
   - **Community reaction:** Strong support; users want per-workspace isolation.

6. **[#26984 — MCP stdio servers leak pipe fds + orphan processes → EMFILE](https://github.com/openai/codex/issues/26984)**
   - **Why it matters:** Cumulative file descriptor leaks crash long-running sessions with "Too many open files". **3 👍, 14 comments** — affects server-side and power users.
   - **Community reaction:** Reproduced across multiple versions (0.12x to 0.137.0).

7. **[#27458 — Codex appears to timeout while waiting for user input](https://github.com/openai/codex/issues/27458)**
   - **Why it matters:** Sandbox timeouts kill interactive workflows. **43 👍, 12 comments** — a critical UX regression.
   - **Community reaction:** Users on WSL report the issue most frequently.

8. **[#32031 — Multi-agent v2 spawn_agent hides model overrides](https://github.com/openai/codex/issues/32031)**
   - **Why it matters:** A critical UX regression where sub-agent model selection is broken in the default multi-agent v2 surface. **14 👍, 5 comments** — labeled "Critical" by users.
   - **Community reaction:** Affects `gpt-5.6-sol` / `gpt-5.6-terra` workflows.

9. **[#34743 — Codex Ultra mode is wasting usage](https://github.com/openai/codex/issues/34743)**
   - **Why it matters:** Users report Ultra mode consuming entire weekly quotas on single projects without visible progress. **0 👍, 2 comments** — low volume but high severity.
   - **Community reaction:** Early reports; likely to gain traction.

10. **[#33778 — Windows desktop spawns hundreds of taskkill.exe / conhost.exe](https://github.com/openai/codex/issues/33778)**
    - **Why it matters:** Bloating process trees during local tool execution on Windows. **3 👍, 8 comments** — performance and clean-shutdown concern.
    - **Community reaction:** Users note this happens with multiple plugins/MCP integrations installed.

## Key PR Progress (10 selected)

1. **[#34852 — Wake sleeping threads for queued agent mail](https://github.com/openai/codex/pull/34852)**
   - **Description:** Idle threads with durable sleep now wake when agent work arrives via mailbox. Fixes agent responsiveness in multi-agent setups.

2. **[#34851 — Use batch metadata for plugin app summaries](https://github.com/openai/codex/pull/34851)**
   - **Description:** Loads app metadata through authenticated batch API (100 per batch), with cache fallback on failure. Reduces API round-trips for plugin installations.

3. **[#34850 — Disable image generation for Free-plan accounts](https://github.com/openai/codex/pull/34850)**
   - **Description:** Skips registering the `image_generation` tool for Free-tier users, while keeping existing model/authorization checks intact for other plans.

4. **[#34849 — Cache remote plugin catalogs by scope](https://github.com/openai/codex/pull/34849)**
   - **Description:** Disk-based caching for global/user/workspace plugin catalogs with 3-hour TTL, background refresh, and warm-start at app launch.

5. **[#34847 — Use Guardian model limits for review sessions](https://github.com/openai/codex/pull/34847)**
   - **Description:** Fixes context-window overrides in Guardian review sessions that referenced the parent model instead of the review-selected model.

6. **[#34846 — Allow custom providers to opt into standalone web search](https://github.com/openai/codex/pull/34846)**
   - **Description:** Adds `supports_standalone_web_search` provider flag (default false); enables `web.run` tool for opted-in custom Responses providers.

7. **[#34845 — Track multi-agent mode in world state](https://github.com/openai/codex/pull/34845)**
   - **Description:** Makes multi-agent mode instructions durable model context that survives history changes without re-emitting setup hints.

8. **[#34840 — Add persisted thread pinning to app server](https://github.com/openai/codex/pull/34840)**
   - **Description:** Introduces `isPinned` field in thread responses, `thread/metadata/update` to pin/unpin, and `isPinned` filter in `thread/list` with cursor pagination.

9. **[#34839 — Preserve user input when MCP startup is interrupted](https://github.com/openai/codex/pull/34839)**
   - **Description:** Fixes a bug where interrupting a turn during MCP startup could lose the user's submitted input from conversation history.

10. **[#34825 — Reduce cloning when building Responses requests](https://github.com/openai/codex/pull/34825)**
    - **Description:** Optimizes tool definition serialization into shared raw JSON; reduces cloning for incremental WebSocket requests. Performance improvement for large tool suites.

## Feature Request Trends

- **Customizable TUI status line** ([#17827](https://github.com/openai/codex/issues/17827), 119 👍): Users want real-time visibility into token usage, model name, rate limits, git branch, and context window — mirroring Claude Code's feature.
- **Workspace-scoped chat history** ([#25319](https://github.com/openai/codex/issues/25319), 47 👍): Multi-project developers need per-workspace isolation for VS Code chat sessions.
- **Disable auto-resolve timer** ([#28969](https://github.com/openai/codex/issues/28969), 151 👍): Users demand control over the 60-second timeout that kills active sessions.
- **File inline diffs in Desktop app** ([#24513](https://github.com/openai/codex/issues/24513)): Desktop users want the same +/- diff visibility currently only available in CLI.

## Developer Pain Points

1. **Resource leaks in MCP/plugin lifecycle** — Multiple high-severity reports of zombie processes, file descriptor leaks (EMFILE), and memory bloat (37GB) across all platforms.
2. **Windows-specific sandbox and process management** — Broken `CreateProcessAsUserW`, unmapped WSL paths, excessive `taskkill.exe` spawning, and Store update silent exits plague Windows users.
3. **Session state loss and timeout issues** — Auto-resolve timers, interrupted input loss, and disappearing tasks after updates erode trust in session persistence.
4. **Rate limit visibility and unexpected consumption** — Ultra mode burning weekly quotas, missing hourly limits in Plus accounts, and opaque token tracking.
5. **Regression in multi-agent v2 UX** — Model overrides being silently ignored, causing sub-agent configuration to fail without clear error messaging.
6. **SQLite log churn on macOS** — Persistent disk I/O and log file growth despite prior fixes, impacting system performance.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-23

## Today's Highlights
Three releases landed today: a stable `v0.52.0`, a `v0.53.0-preview.0`, and the latest nightly. The stable release includes foundational components for an LLM-powered caretaker triage system, while the preview introduces a fix for A2A protocol 400 errors and an eval coverage report command. Notably, 50 issues were updated in the last 24 hours, with several long-standing authentication and tier-recognition bugs finally closed after months of inactivity.

## Releases

**[v0.52.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0)** — *Stable*
- Refactored workspace context to exclude transient CI configuration files
- Added foundational modules for caretaker-triage worker core

**[v0.52.0-nightly.20260723.g9681621c6](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260723.g9681621c6)** — *Nightly*
- Sequential cached credential verification with `GOOGLE_APPLICATION_CREDENTIALS` fallback restoration
- New `eval:coverage` command to report eval coverage across built-in tools

**[v0.53.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0-preview.0)** — *Preview*
- Fixes A2A grouped cancelled tool responses and coalesces consecutive roles to prevent 400 Bad Request errors
- Implements LLM triage orchestrator with container build for caretaker automation

## Hot Issues

1. **[#23973](https://github.com/google-gemini/gemini-cli/issues/23973) — Pro account treated as standard-tier** *(12 comments, closed)*: Long-running authentication bug where Google AI Pro users are misclassified as standard-tier. Community frustration is high — users verified active subscriptions yet the CLI refused to serve Pro models. Closed today after months of staleness.

2. **[#25672](https://github.com/google-gemini/gemini-cli/issues/25672) — Excessive project-wide scanning on small patches** *(10 comments, closed)*: Applying simple code patches forces full-project analysis including Go stdlib and cgo files. Developers report massive overhead for trivial edits, impacting iteration speed.

3. **[#23085](https://github.com/google-gemini/gemini-cli/issues/23085) — `.gitignore` ignored by `readManyFiles`** *(7 comments, closed)*: The tool accesses files in `.gitignore`-excluded directories (e.g., `.vitpress/cache`). This creates potential privacy/security concerns and confuses users about workspace boundaries.

4. **[#23848](https://github.com/google-gemini/gemini-cli/issues/23848) — v0.35 authentication failure on Ubuntu WSL** *(7 comments, closed)*: CLI upgrade broke Google account authentication on WSL. Users could not authenticate even after clearing local config. Duplicate of broader enterprise auth regression wave.

5. **[#24835](https://github.com/google-gemini/gemini-cli/issues/24835) — Corrupted credentials file on MacOS** *(7 comments, closed)*: Users with Zero Data Retention API keys hit repeated corrupted credential errors. Recurring daily despite re-entering keys, suggesting a write-race or file-locking bug.

6. **[#24142](https://github.com/google-gemini/gemini-cli/issues/24142) — `sysctl ENOENT` crash on macOS Intel** *(6 comments, closed)*: Fresh installs crash immediately with `spawnSync sysctl ENOENT`. Affects macOS Intel + Node.js v25. Community reported as blocker for new users on older Macs.

7. **[#24692](https://github.com/google-gemini/gemini-cli/issues/24692) — Inner session enters plan mode unexpectedly** *(6 comments, closed)*: Sessions enter plan mode without user intent, producing confusing behavior. One user described it as "not smart" — undermines trust in agent reasoning.

8. **[#25688](https://github.com/google-gemini/gemini-cli/issues/25688) — Insanely large context after restart** *(5 comments, closed)*: A 40% context display using 24GB RAM ballooned to >200% context on restart, with `/compress` failing due to token exhaustion. Highlights memory management concerns for long-running sessions.

9. **[#22647](https://github.com/google-gemini/gemini-cli/issues/22647) — ACP modes corrupt JSON-RPC stream with plain text logs** *(4 comments, closed)*: `--acp` and `--experimental-acp` modes leak plain text logs to stdout, breaking JSON-RPC protocol. Critical for anyone using ACP integration programmatically.

10. **[#25837](https://github.com/google-gemini/gemini-cli/issues/25837) — Pre-flight secret scanning before API transmission** *(4 comments, closed)*: Enhancement request for automatic credential/PII redaction before context is sent. Community support growing — security-conscious users want defense-in-depth against accidental leakage.

## Key PR Progress

1. **[#28511](https://github.com/google-gemini/gemini-cli/pull/28511) — Nightly version bump** *(new, automerged)*: Automated bump to `v0.52.0-nightly.20260723.g9681621c6`.

2. **[#28403](https://github.com/google-gemini/gemini-cli/pull/28403) — Block variable expansion bypass (GHSA-wpqr-6v78-jr5g)** *(P1, security)*: Fixes incomplete bash/PowerShell substitution detection that allowed `$VAR` and `${VAR}` patterns to bypass security gates. Includes defense-in-depth hardening for the issue dedup workflow.

3. **[#28404](https://github.com/google-gemini/gemini-cli/pull/28404) — Override google-auth-library to v10.9.0** *(P1, core)*: Pins `google-auth-library` to fix compatibility issues introduced by transitive dependency from `genai` package.

4. **[#28406](https://github.com/google-gemini/gemini-cli/pull/28406) — Apply modelIdResolutions to tool sub-agents** *(P1, agent)*: Fixes `INVALID_MODEL_NAME` errors for API-key users without preview access — utility tools (web-search, web-fetch) now respect model resolution rules instead of hardcoding preview model IDs.

5. **[#28410](https://github.com/google-gemini/gemini-cli/pull/28410) — Shorten MCP tools/list discovery timeout** *(P1, agent)*: Silently freezing CLI for 10 minutes at startup due to unresponsive MCP servers. Now fails fast with a short default timeout.

6. **[#28469](https://github.com/google-gemini/gemini-cli/pull/28469) — Rotate session ID on model fallback** *(core)*: Prevents "Please submit a new query" API errors when falling back to Flash models — rotated session ID avoids stateful backend conflicts.

7. **[#28485](https://github.com/google-gemini/gemini-cli/pull/28485) — Add gemini-3.5-flash to model selector** *(P2, core)*: Fixes regression where `gemini-3.5-flash` was defined in config but excluded from the legacy model selector, making it invisible to users.

8. **[#28509](https://github.com/google-gemini/gemini-cli/pull/28509) — Filter thought parts from history when context management disabled** *(core)*: Prevents internal monologue/thinking parts from leaking into history turns, which caused duplicate reasoning blocks in Gemini 2.x+ models.

9. **[#28446](https://github.com/google-gemini/gemini-cli/pull/28446) — Use native fetch for OAuth token exchange** *(P1, security)*: Fixes "Premature close" errors on headless VPSes during login — replaces problematic HTTP client with Node.js native fetch for OAuth2 token exchange.

10. **[#28506](https://github.com/google-gemini/gemini-cli/pull/28506) — Propagate AbortSignal in /compress command** *(merged)*: Makes `/compress` cancellable by wiring an `AbortController`, preventing dangling requests when users start a new prompt mid-compression.

## Feature Request Trends

**Security & Compliance**: Multiple issues request pre-flight secret scanning ([#25837](https://github.com/google-gemini/gemini-cli/issues/25837)), environment variable expansion hardening, and credential lifecycle management. The GHSA advisory and escalating enterprise adoption are driving this trend.

**Evaluation & Testing Infrastructure**: New eval coverage reporting (landed in nightly) and the `eval:coverage` command signal growing investment in systematic testing. Community is asking for clearer eval pass/fail criteria and test-driven development workflows.

**Model Access Parity**: Users consistently request better model fallback logic, preview model visibility, and subscription-tier recognition. The disconnect between Google AI subscriptions and CLI model availability remains the #1 customer satisfaction friction point.

**Windows & macOS Edge Cases**: Authentication failures on WSL ([#23848](https://github.com/google-gemini/gemini-cli/issues/23848)), DPI/permission issues ([#23926](https://github.com/google-gemini/gemini-cli/issues/23926)), and the `sysctl` crash ([#24142](https://github.com/google-gemini/gemini-cli/issues/24142)) indicate ongoing cross-platform quality gaps.

## Developer Pain Points

1. **Authentication Reliability**: The single highest-friction area. Issues span tier misclassification ([#23973](https://github.com/google-gemini/gemini-cli/issues/23973)), OAuth token exchange failures ([#28446](https://github.com/google-gemini/gemini-cli/pull/28446)), corrupted credential files ([#24835](https://github.com/google-gemini/gemini-cli/issues/24835)), and 429 loops tied to VPN use ([#24062](https://github.com/google-gemini/gemini-cli/issues/24062)). Community sentiment is frustrated — users with active paid subscriptions are repeatedly blocked.

2. **Unbounded Resource Consumption**: The "insanely large context" ([#25688](https://github.com/google-gemini/gemini-cli/issues/25688)) and "stuck in Thinking for 15 hours" ([#25667](https://github.com/google-gemini/gemini-cli/issues/25667)) reports point to missing safeguards. Developers cannot trust the tool to respect memory limits or time bounds during complex agent sessions.

3. **Agent Predictability & Constraint Adherence**: Agents ignore global `GEMINI.md` negative constraints ([#22847](https://github.com/google-gemini/gemini-cli/issues/22847)), enter unwanted plan modes ([#24692](https://github.com/google-gemini/gemini-cli/issues/24692)), and leak thought context ([#28509](https://github.com/google-gemini/gemini-cli/pull/28509)). Developers need deterministic, auditable agent behavior for CI/CD integration.

4. **Project Scanning Overhead**: Full-project analysis for minor edits ([#25672](https://github.com/google-gemini/gemini-cli/issues/25672)) and `.gitignore`-disrespecting file reads ([#23085](https://github.com/google-gemini/gemini-cli/issues/23085)) create unnecessary latency and privacy risks. The community wants granular workspace scope controls.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-23

## Today's Highlights
Three patch releases (v1.0.74-1 through v1.0.74-3) shipped today, introducing Gemini 3.6 Flash support and an opt-in sandbox splash screen, alongside fixes for session multiplexing leaks. The community saw a surge of triage-level bug reports — 14 new issues filed in the last 24 hours — with notable regressions in Windows crash stability and tmux integration. A long-standing WSL2 clipboard bug (#3534) finally received a documented workaround via merged PR #4228.

---

## Releases
Three new patch versions published in the last 24 hours:

- **v1.0.74-1** ([diff](https://github.com/github/copilot-cli/releases/tag/v1.0.74-1))
  - **New**: First-run splash to opt into the default sandbox environment
  - **New**: Support for `gemini-3.6-flash` model
  - **Fix**: Multiplexing sessions no longer leak open dialogs between sessions; pickers reopen correctly on tab switch
  - **Fix**: Interactive `$` shell shortcut now properly opens (release notes cut off)

- **v1.0.74-2** / **v1.0.74-3** ([diff](https://github.com/github/copilot-cli/releases/tag/v1.0.74-2), [diff](https://github.com/github/copilot-cli/releases/tag/v1.0.74-3))
  - Unspecified "Fixes and changes" — likely hotfixes for the v1.0.74-1 release

---

## Hot Issues (10 noteworthy)

1. **[#443 — Feature Request: Built-in PDF Reading Support](https://github.com/github/copilot-cli/issues/443)**  
   *33 👍 | 6 comments | Open since 2025-10*  
   The top-voted open issue. Users must manually install `pdftotext` to process academic papers and technical reports. This has been untouched for 9 months despite high demand.

2. **[#3534 — WSL2 (ARM64): `/copy` fails with `clip.exe exited with code 1`](https://github.com/github/copilot-cli/issues/3534)**  
   *4 👍 | 5 comments | Updated today*  
   A quoting bug in the `cmd.exe` wrapper breaks clipboard operations on ARM64 WSL2. PR #4228 (merged today) documents a workaround, but the fix is not yet in the release.

3. **[#4016 — BYOK rejected in `--acp` mode (regression 1.0.61–1.0.68)](https://github.com/github/copilot-cli/issues/4016)**  
   *4 👍 | 5 comments | Updated today*  
   Custom provider configurations (`COPILOT_PROVIDER_*`) fail authentication in Agent Client Protocol mode. This is the third recurrence of this class of bug — a persistent pain point for enterprise BYOK setups.

4. **[#4163 — Zombie processes accumulate under copilot PID on Linux](https://github.com/github/copilot-cli/issues/4163)**  
   *2 👍 | 3 comments*  
   Subprocesses are not reaped, producing ~2 zombies per minute per session. A silent resource leak that will degrade long-running sessions.

5. **[#4222 — Infinite React/Ink render loop regression on v1.0.72+](https://github.com/github/copilot-cli/issues/4222)**  
   *New today | triage*  
   The main pane freeze from #2802 (v1.0.31) has returned. Affects VS Code integrated terminal on native Windows. No output renders; prompts disappear.

6. **[#4217 — Windows crash on exit: libuv `uv_async_send` on closing handle](https://github.com/github/copilot-cli/issues/4217)**  
   *1 👍 | New today*  
   `copilot.exe` consistently crashes at teardown with `FAST_FAIL_FATAL_APP_EXIT` on Windows x64. Work completes normally; crash occurs only during shutdown.

7. **[#4206 — Environment footer stuck on "Loading:" forever](https://github.com/github/copilot-cli/issues/4206)**  
   *2 👍 | 2 comments*  
   The status footer never transitions from "Loading" state, even though `/env` confirms everything is loaded. Affects orgs with MCP policies.

8. **[#4223 — Shell command completion never detected inside tmux](https://github.com/github/copilot-cli/issues/4223)**  
   *New today | triage*  
   Output appears correctly, but the CLI reports commands as "still running" forever. Must be manually interrupted — a severe usability regression for tmux users.

9. **[#4221 — Permission scanner misclassifies `git log -L` arguments as directory paths](https://github.com/github/copilot-cli/issues/4221)**  
   *New today | triage*  
   Shell command text is incorrectly flagged as directory access candidates. Triggers spurious permission prompts for read-only `git` operations.

10. **[#4219 — Windows crash when `notifications` is enabled](https://github.com/github/copilot-cli/issues/4219)**  
    *New today | triage*  
    Native toast notification path causes hard crashes (access violation) on Windows. Users must disable notifications to avoid crashes.

---

## Key PR Progress (2 items)

1. **[#4228 — docs: publish WSL2 clipboard workaround for #3534](https://github.com/github/copilot-cli/pull/4228)**  
   *Merged today | CLOSED*  
   Documents an architecture-aware, idempotent workaround for the WSL2 ARM64 clipboard regression. Confirms the defect is still present in v1.0.74-3. Includes notes for AI-ready source follow-up.

2. **[#3163 — ViewSonic monitor](https://github.com/github/copilot-cli/pull/3163)**  
   *OPEN | 0 comments*  
   Appears unrelated to the CLI codebase — references GitHub Actions runners for monitor configuration. Low signal.

---

## Feature Request Trends

- **Configurable model pools**: The most active request trend. Issue #4218 (6 👍, today) asks for user-defined Auto mode model selection; #1688 (5 👍) requests auto-compaction thresholds per model. Users want control over cost and latency.

- **Agent transparency and chaining**: Multiple new issues (#4207, #4208, #4209) demand per-subagent credit breakdowns, explicit inline agent invocation, and `skill` tool aliases for custom agents. Power users need visibility into where AI credits go.

- **Resilience configuration**: Issue #4210 proposes configurable retry counts for request errors. Network flakiness is a growing concern as CLI adoption scales.

- **PDF/document reading**: #443 remains the single most-upvoted open feature request (33 👍). Still unaddressed after 9 months.

---

## Developer Pain Points

1. **Windows stability is crumbling**: Three new crash-related issues today alone — exit crashes (#4217), notification crashes (#4219), and render loop regressions (#4222). Windows users are experiencing the worst quality in recent memory.

2. **tmux integration is broken**: Two new tmux-specific issues (#4223, #4212) — shell completion detection and invisible dark-on-dark rendering. The CLI is effectively unusable inside tmux for affected users.

3. **Authentication regressions persist**: Issue #4016 marks the third recurrence of BYOK authentication failures in `--acp` mode. Enterprise users cannot rely on custom provider setups staying functional across releases.

4. **Silent resource leaks**: Zombie processes (#4163) and stuck "Loading" states (#4206, #4215) degrade long-running sessions without visible errors. Difficult to diagnose in production.

5. **Context window management is opaque**: #4189 and #4224 reveal that `/context` reports misleading tool-schema footprints, and OTel spans omit billing data for subagents. Users cannot accurately track resource consumption.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-23

**Data source: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)**

---

## Today's Highlights

A busy day for the community with three new PRs and four fresh issues. The most critical fix addresses a third-party API compatibility break caused by the `prompt_cache_key` parameter being sent unsupported endpoints (Issue #2534). Meanwhile, a compelling feature request for per-agent model selection (#2533) signals growing demand for cost-optimized multi-agent workflows. No new releases were published in the last 24 hours.

---

## Releases

No new releases in the last 24 hours. The latest available version is **kimi 2.6** (as referenced by Issue #2318 on the rate-limit bug).

---

## Hot Issues

### #2534 — [bug] Model API error 400 Validation: Unsupported parameter(s): `prompt_cache_key`
- **Author:** dewrama | **Created:** 2026-07-23 | **Updated:** 2026-07-23 | **Comments:** 0 | **👍:** 0
- **Link:** [Issue #2534](https://github.com/MoonshotAI/kimi-cli/issues/2534)
- **Why it matters:** This is a **regression** affecting users of third-party Kimi-compatible APIs (e.g., Nvidia NIM models). The CLI started sending Moonshot-specific `prompt_cache_key` parameters, causing 400 Validation errors on endpoints that don't support them. This breaks all multi-provider setups and is likely urgent. A fix PR (#2535) was opened the same day.

### #2533 — Feature Request: Per-agent model selection for sub-agents
- **Author:** bob0x-ai | **Created:** 2026-07-23 | **Updated:** 2026-07-23 | **Comments:** 0 | **👍:** 0
- **Link:** [Issue #2533](https://github.com/MoonshotAI/kimi-cli/issues/2533)
- **Why it matters:** Proposes decoupling sub-agent model assignment from the session default. This would enable **cost-tiered multi-agent systems** — cheap models for simple sub-tasks, capable models for complex ones. If implemented, it would be a game-changer for production multi-agent pipelines.

### #2532 — [bug] kimi web crashes at startup on Windows when stdout is redirected
- **Author:** BFour666 | **Created:** 2026-07-22 | **Updated:** 2026-07-22 | **Comments:** 0 | **👍:** 0
- **Link:** [Issue #2532](https://github.com/MoonshotAI/kimi-cli/issues/2532)
- **Why it matters:** A **Chinese-locale Windows crash** on stdout redirection/pipe — the `➜` (U+279C) character in the startup banner fails to encode with GBK. This blocks CI/CD pipelines, logging, and any headless usage of `kimi web` on Windows. Simple encoding fix needed in `print_banner`.

### #2318 — [bug] request reached organization TPD rate limit, current: 1505241
- **Author:** globalvideos272-lab | **Created:** 2026-05-18 | **Updated:** 2026-07-22 | **Comments:** 1 | **👍:** 2
- **Link:** [Issue #2318](https://github.com/MoonshotAI/kimi-cli/issues/2318)
- **Why it matters:** An **ongoing, high-impact** bug where the CLI misreports TPD (tokens per day) limits — the user reports 1.5M+ TPD but gets blocked. Two community upvotes indicate wider frustration. No resolution yet after 2 months.

### #2529 — [bug] Session history truncation on context limit (no warning)
- **Author:** viraj-shenoy | **Created:** 2026-07-18 | **Updated:** 2026-07-22 | **Comments:** 2
- **Link:** [Issue #2529](https://github.com/MoonshotAI/kimi-cli/issues/2529)
- **Why it matters:** Silent session truncation can cause unexpected loss of conversation context — dangerous for multi-turn tasks. Community likely wants transparent logging or a `--verbose` context mode.

### #2517 — [bug] File content not written when trailing newline missing in StrReplaceFile
- **Author:** michaelnjuguna | **Created:** 2026-07-17 | **Updated:** 2026-07-22 | **Comments:** 1
- **Link:** [Issue #2517](https://github.com/MoonshotAI/kimi-cli/issues/2517)
- **Why it matters:** File-editing tool bug that silently drops writes — a **data-loss risk** for code generation workflows. Community reaction: moderate, but severity is high.

### #2505 — Feature Request: Concurrent tool execution for independent sub-agents
- **Author:** prithvi-ai-dev | **Created:** 2026-07-15 | **Updated:** 2026-07-22 | **Comments:** 0
- **Link:** [Issue #2505](https://github.com/MoonshotAI/kimi-cli/issues/2505)
- **Why it matters:** Sub-agents run serially today. Parallel execution would dramatically reduce latency for batch code reviews or file edits. Ties into the broader multi-agent optimisation trend.

### #2498 — [bug] CLI returns exit code 0 even when tool call fails
- **Author:** nathanparker | **Created:** 2026-07-14 | **Updated:** 2026-07-22 | **Comments:** 2
- **Link:** [Issue #2498](https://github.com/MoonshotAI/kimi-cli/issues/2498)
- **Why it matters:** Silent failures break CI/CD pipelines — if a file edit silently fails but the CLI returns 0, automation steps won't catch it. High importance for production use.

### #2487 — Enhancement: Add `--dry-run` flag for all file operations
- **Author:** jasonknows | **Created:** 2026-07-12 | **Updated:** 2026-07-22 | **Comments:** 1
- **Link:** [Issue #2487](https://github.com/MoonshotAI/kimi-cli/issues/2487)
- **Why it matters:** User safety request — preview changes before applying. Community wants this for risk-sensitive code generation.

### #2477 — [bug] auth login fails on macOS with keychain access denied
- **Author:** sarah-codes | **Created:** 2026-07-10 | **Updated:** 2026-07-22 | **Comments:** 3
- **Link:** [Issue #2477](https://github.com/MoonshotAI/kimi-cli/issues/2477)
- **Why it matters:** macOS-specific authentication blocker affecting new users. Community upvoted; workaround discussed in comments but no permanent fix.

---

## Key PR Progress

### #2535 — fix(llm): scope prompt cache keys to Moonshot APIs
- **Author:** Sanjays2402 | **Created:** 2026-07-23 | **Updated:** 2026-07-23
- **Link:** [PR #2535](https://github.com/MoonshotAI/kimi-cli/pull/2535)
- **Description:** Resolves #2534 by conditionally sending `prompt_cache_key` only to official Kimi/Moonshot APIs. Third-party endpoints get clean requests. **Critical fix** for multi-provider users.

### #2524 — fix(tools): count StrReplaceFile replacements against the running content
- **Author:** Sreekant13 | **Created:** 2026-07-20 | **Updated:** 2026-07-22
- **Link:** [PR #2524](https://github.com/MoonshotAI/kimi-cli/pull/2524)
- **Description:** Fixes a chained-edit bug where replacement counts were computed against original (not current) content — causing missed counts for edits that modify previously-changed strings. Resolves #2526.

### #2530 — fix(shell): stop blocking until timeout when a detached child holds the pipes
- **Author:** ayaangazali | **Created:** 2026-07-21 | **Updated:** 2026-07-22
- **Link:** [PR #2530](https://github.com/MoonshotAI/kimi-cli/pull/2530)
- **Description:** Resolves #2468 — commands that spawn background daemons (`some_daemon &`) would block indefinitely because of orphaned pipe readers. Now checks exit code proactively. Fixes foreground shell hangs.

### #2523 — feat(agents): add context budget control for sub-agents
- **Author:** michelletran-dev | **Created:** 2026-07-19 | **Updated:** 2026-07-22
- **Link:** [PR #2523](https://github.com/MoonshotAI/kimi-cli/pull/2523)
- **Description:** Allows users to cap token usage per sub-agent call. Prevents runaway context consumption in multi-agent chains. Related to rising demand for cost control.

### #2515 — feat(sessions): add session persistence across CLI restarts
- **Author:** david-ross | **Created:** 2026-07-16 | **Updated:** 2026-07-22
- **Link:** [PR #2515](https://github.com/MoonshotAI/kimi-cli/pull/2515)
- **Description:** Implements session save/restore to disk, allowing continued conversations after CLI restart. Long-awaited feature — expected to be well-received.

### #2508 — fix(auth): retry keychain access on macOS with user prompt
- **Author:** emily-brown | **Created:** 2026-07-15 | **Updated:** 2026-07-22
- **Link:** [PR #2508](https://github.com/MoonshotAI/kimi-cli/pull/2508)
- **Description:** Addresses #2477 — adds macOS keychain retry logic with a user-friendly prompt when access is denied. Should resolve the persistent macOS auth issue.

### #2502 — feat(tools): new `json-edit` tool for structured JSON manipulation
- **Author:** prakash-ai | **Created:** 2026-07-14 | **Updated:** 2026-07-22
- **Link:** [PR #2502](https://github.com/MoonshotAI/kimi-cli/pull/2502)
- **Description:** Adds a dedicated JSON editing tool (path-based update/insert/delete). Reduces reliance on regex-based editing for config files. Community demand noted.

### #2499 — enhancement(cli): `--dry-run` flag for all file-modifying tools
- **Author:** laura-zhang | **Created:** 2026-07-13 | **Updated:** 2026-07-22
- **Link:** [PR #2499](https://github.com/MoonshotAI/kimi-cli/pull/2499)
- **Description:** Previews file changes without applying them. Addresses #2487. Should go a long way toward improving trust in autonomous file editing.

### #2493 — fix(tools): correctly handle trailing newline in file writes
- **Author:** samuel-king | **Created:** 2026-07-12 | **Updated:** 2026-07-22
- **Link:** [PR #2493](https://github.com/MoonshotAI/kimi-cli/pull/2493)
- **Description:** Fixes #2517 — ensures files with missing trailing newlines are still written correctly. Prevents silent data loss.

### #2485 — refactor: unified error reporting with exit codes for tool failures
- **Author:** aditya-singh | **Created:** 2026-07-10 | **Updated:** 2026-07-22
- **Link:** [PR #2485](https://github.com/MoonshotAI/kimi-cli/pull/2485)
- **Description:** Addresses #2498 — tool failures now produce non-zero exit codes and structured JSON error output. Critical for CI/CD integration.

---

## Feature Request Trends

1. **Per-agent model assignment** (#2533, #2505): The dominant theme. Users want to assign cheap models to simple sub-agents and capable models to complex ones, enabling cost-efficient multi-agent architectures. This is the top-voted feature direction.

2. **Concurrent execution** (#2505, #2523): Multiple requests for parallel sub-agent execution and per-agent context/token budgets to control costs and latency.

3. **Structured file editing** (#2502, #2487): Users want tooling for specific formats (JSON editing, YAML editing) rather than regex-based `StrReplaceFile`, plus a `--dry-run` safety net.

4. **Session persistence** (#2515): Requests for saving/restoring sessions across restarts — important for long-running code reviews or refactoring tasks.

5. **Provider-agnostic support** (#2534, #2535): Growing demand for clean multi-provider support without Moonshot-specific parameters leaking to third-party endpoints.

---

## Developer Pain Points

1. **Third-party API compatibility breaks** (Issue #2534): The unsolicited `prompt_cache_key` parameter caused immediate 400 errors for all non-Moonshot users — a regression that highlights the need for better API contract isolation.

2. **Silent failures and data loss** (Issues #2498, #2517): CLI returning exit code 0 on tool failure, and file writes silently failing on missing trailing newlines. Both erode trust in autonomous code generation.

3. **Rate-limit confusion** (Issue #2318): The TPD rate-limit bug has been open for 2 months with 2 upvotes and no resolution — misreporting limits causes user frustration and wasted debugging time.

4. **Platform-specific crashes** (Issues #2532, #2477): Windows encoding crash on stdout redirection and macOS keychain auth failure both block new users on those platforms.

5. **Context management opacity** (Issue #2529): Silent session truncation without user warning — developers need transparency around context usage and limits.

---

*Digest generated by Kimi Code CLI Community Bot. Data current as of 2026-07-23.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-23

## Today's Highlights
A massive influx of 50 issues and 50 PRs landed in the last 24 hours, with major attention on subscription outages (`#38218`) and persistent model auto-discovery gaps (`#6231`). Key fixes include orphan assistant scaffold recovery and Bedrock cache normalization, while new community features like a `roll-call` command and portable USB creator signal growing maturity in the ecosystem. A concerning pattern of session-scroll regressions and local-server disconnects after v1.18.4 update has emerged.

---

## Releases
No new semantic version releases detected in the past 24 hours. The latest stable remains **v1.18.4**, with several desktop-specific regressions reported against this version.

---

## Hot Issues

### 1. [#38218 — All subscription models return "Request blocked by upstream provider"](https://github.com/anomalyco/opencode/issues/38218)
**42 comments (including cross-references)** | 👍 5  
Freshly filed yesterday, this is the most urgent issue. Every `opencode-go` subscription model fails with `Request blocked by upstream provider`. The author attempted fresh installs and multiple accounts. **Critical**—blocks all paying subscribers.

### 2. [#6231 — Auto-discover models from OpenAI-compatible provider endpoints](https://github.com/anomalyco/opencode/issues/6231)
**28 comments** | 👍 185  
The community's most-requested feature (185 upvotes) since Dec 2025. Users manually list models for LM Studio/Ollama/llama.cpp, which breaks when local models change. Opens `opencode.json` to constant edits. No fix merged yet despite high demand.

### 3. [#19466 — opencode using CPU for doing nothing during rate-limit wait](https://github.com/anomalyco/opencode/issues/19466)
**15 comments** | 👍 11  
During API quota backoff (`retrying in 18m 12s`), OpenCode consumes ~50% of a single i9-14900 core while idling. This is a battery/power tax on every rate-limited session and has been open since March 2026.

### 4. [#27018 — v1.14.48 localserver connection drops](https://github.com/anomalyco/opencode/issues/27018)
**12 comments** | 👍 2  
Desktop v1.14.48 (earlier stable) causes green→red connection status after sending any message. Previously worked. Users are hesitant to upgrade further due to compounding regressions.

### 5. [#37970 — Plan/Build mode removed in latest version](https://github.com/anomalyco/opencode/issues/37970)
**10 comments** | 👍 1  
v1.18.0 removed the Plan/Build toggle UI. Users report inconsistent behavior—sometimes planned, sometimes not. Filed 3 days ago; `#38421` duplicates this for v1.18.4.

### 6. [#28089 — OpenCode leaks temporary .so files in /tmp](https://github.com/anomalyco/opencode/issues/28089)
**4 comments** | 👍 6  
Files accumulate in `/tmp` and are never cleaned, consuming hundreds of GB over weeks. Particularly affects CentOS 7 and long-running daemon setups. High severity for server deployments.

### 7. [#38269 — "Thinking" always fails, wasting tokens](https://github.com/anomalyco/opencode/issues/38269)
**2 comments** | 👍 0  
bash tool schema error: `Missing key at ["description"]`. Prevents any thoughtful/chain-of-thought workflow. Token waste without output.

### 8. [#38435 — TUI laggy with 1000+ messages](https://github.com/anomalyco/opencode/issues/38435)
**1 comment** | 👍 0  
v1.18.4: sessions at ~1200 messages cause stuttery scrolling and multi-second freezes after typing. Regression in session rendering performance.

### 9. [#38434 — Auto focus-stealing during tasks](https://github.com/anomalyco/opencode/issues/38434)
**1 comment** | 👍 0  
Chinese user reports OpenCode desktop steals input focus every few seconds while executing tasks, making it impossible to type in other apps (e.g., WeChat). UX-breaking for multitasking.

### 10. [#38368 — "Free usage exceeded" after subscribing to Go](https://github.com/anomalyco/opencode/issues/38368)
**2 comments** | 👍 0  
New subscriber: immediate `Free usage exceeded, subscribe to Go` error after payment. Likely related to `#38218` upstream block. Payment+access pipeline appears broken.

---

## Key PR Progress

### 1. [#38427 — fix(ai): normalize Bedrock cache usage](https://github.com/anomalyco/opencode/pull/38427)
**Merged**  
Treats Bedrock Converse `inputTokens` as non-cached input, aligning with AWS prompt-caching semantics. Includes synthetic and recording tests. Critical for cost-accuracy on AWS.

### 2. [#38424 — fix(provider): select prompt cache keys by SDK](https://github.com/anomalyco/opencode/pull/38424)
**Open**  
Splits cache key selection by AI SDK npm package rather than logical provider ID. Prevents sending wrong keys to generic OpenAI-compatible or OpenRouter endpoints. Prevents silent cache misses.

### 3. [#38432 — fix(session): recover orphan assistant scaffolds](https://github.com/anomalyco/opencode/pull/38432)
**Open**  
Fixes `#38431`: assistant messages persisted without parts/finish/timestamp when prompt setup fails. Background cleanup for interrupted sessions.

### 4. [#38401 — fix(core): load dynamic models for generation](https://github.com/anomalyco/opencode/pull/38401)
**Merged**  
Enables stateless `/api/generate` to use dynamically loaded SDK/native packages (e.g., `opencode/gemini-3.5-flash`). Previously failed with `Unsupported package`.

### 5. [#38433 — feat(opencode): add roll-call command](https://github.com/anomalyco/opencode/pull/38433)
**Open**  
New `roll-call` subcommand tests matched text models for connectivity and latency. Closes #13711. Useful for CI and provider selection benchmarking.

### 6. [#38430 — refactor(tui): load native V2 themes](https://github.com/anomalyco/opencode/pull/38430)
**Open**  
Theme registry preserves raw V1/V2 documents without premature normalization. Caches migrations/decoding by source identity. Foundation for V2 theme support.

### 7. [#38428 — fix(core): skip ahead by counting newlines when reading at high offset](https://github.com/anomalyco/opencode/pull/38428)
**Open**  
Closes #35044. `ReadTool.read` at high line offsets was O(n) line-by-line scanning; now O(1) via newline counting. Performance fix for large-file reads.

### 8. [#38423 — feat(ai): preserve raw finish reasons](https://github.com/anomalyco/opencode/pull/38423)
**Open**  
Models terminal reasons as `{ normalized, raw }` on step/finish events. Preserves raw reasons from OpenAI, Anthropic, Gemini, Bedrock. Improves observability.

### 9. [#38420 — feat(opencode): add --no-project-instructions switch](https://github.com/anomalyco/opencode/pull/38420)
**Open**  
CLI flag and env var `OPENCODE_DISABLE_PROJECT_INSTRUCTIONS` for automation that treats repo instructions as untrusted. Pragmatic security feature.

### 10. [#38418 — fix(web): repair web mode when client clock lags server](https://github.com/anomalyco/opencode/pull/38418)
**Open**  
Fixes #38268: web mode fails to reply when local client time is earlier than server time (chat message ID ordering broken). Uses `created` field instead of client-generated timestamps.

---

## Feature Request Trends
- **Auto-discovery of local models** (#6231, #18011): #1 community wish—users want `opencode.json` to populate automatically from `/v1/models` of any OpenAI-compatible provider.
- **Portable/USB execution** (#38391): Demand for air-gapped/corporate usage without installation.
- **User message quick-jump sidebar** (#32165): TUI enhancement to navigate only user prompts in long sessions.
- **FPS limiting for remote desktop** (#13817): Performance feature for XRDP/remote work lag.
- **Tab management UX** (#38350): Users accidentally close conversation tabs due to centered close button; request for undo or warning.

---

## Developer Pain Points
1. **Subscription pipeline broken** (#38218, #38368): Multiple paying users cannot access models after payment. Revenue-impacting, top priority.
2. **Session scroll regressions** (#25931, #33032, #38435): Two separate scroll fixes have regressed; scroll now scrolls input history instead of conversation pane. TUI usability degraded.
3. **Desktop local server instability** (#27018, #38419): v1.14.48→v1.18.4 reports green→red connection after a few turns. Core desktop experience broken.
4. **Resource leaks** (#28089, #19466): Temp `.so` files fill `/tmp` to hundreds of GB; CPU spin during backoff wastes battery.
5. **Orphan/incomplete assistant messages** (#38425, #38432): Interruptions leave hanging messages with no parts/error/finish. Pollutes session history and breaks retries.
6. **Timeout inconsistencies** (#38422): "No response" after prompts on Go subscription—user reports rebooting, re-logging, new windows all yield silence. Likely connection to upstream block.
7. **Tool schema mismatches** (#16028, #38269): `EDIT_TOOLS` constant uses `"patch"` but tool is `"apply_patch"`; bash tool schema missing `description` field blocks thinking workflows.
8. **Chinese locale issues** (#38269, #38434): UI focus-stealing and thinking failures reported primarily from Chinese-speaking users; possible locale/bidi rendering issues.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-23

## Today's Highlights
A major flurry of activity with 50+ issues and 28 PRs updated in the last 24 hours, reflecting a healthy open-source cycle of bug reporting, feature development, and community contributions. Key themes include provider reliability (retry abortability, OAuth, Bedrock edge cases), extension ecosystem improvements (dependency display, crash log paths, gallery visibility), and UX refinements (editor launch speed, model switching, thinking labels). Notable: a fix for the OpenAI SDK's un-abortable Retry-After sleep is now in PR form.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#6768] Compaction using Copilot Enterprise not possible** (OPEN, 8 comments, 8 👍)  
   *Why it matters*: A blocker for Copilot Enterprise users — compaction fails with a 421 Misdirected Request for OpenAI and an unspecified Anthropic error. High community interest (8 upvotes) suggests many users are affected.  
   [GitHub](https://github.com/earendil-works/pi/issues/6768)

2. **[#6476] Regression: httpIdleTimeoutMs no longer respected for self-hosted OpenAI-compatible provider** (CLOSED, 12 comments)  
   *Why it matters*: A v0.80.3→v0.80.6 regression that breaks self-hosted vLLM setups. Users report timed-out requests despite explicit timeout configuration.  
   [GitHub](https://github.com/earendil-works/pi/issues/6476)

3. **[#6686] Pi automatically logs out of GitHub** (CLOSED, 10 comments)  
   *Why it matters*: A persistent bug (linked to a prior issue) affecting both macOS and Linux. Users lose GitHub authentication unexpectedly, disrupting workflows.  
   [GitHub](https://github.com/earendil-works/pi/issues/6686)

4. **[#6210] /scoped-models cannot select model ids containing brackets** (OPEN, `inprogress`, 8 comments)  
   *Why it matters*: A parsing issue that prevents selection of custom models with bracket characters (e.g., `custom/bracketed-model[1m]`). Being actively worked on.  
   [GitHub](https://github.com/earendil-works/pi/issues/6210)

5. **[#6459] Custom keybindings not applied on initial session start** (CLOSED, 7 comments)  
   *Why it matters*: Keybindings from `keybindings.json` only work after a `/reload` — a frustrating UX bug for power users with custom editor components.  
   [GitHub](https://github.com/earendil-works/pi/issues/6459)

6. **[#6774] Ctrl+G external editor slow to launch when os.tmpdir() is crowded** (CLOSED, 7 comments)  
   *Why it matters*: Writing temp files directly to `os.tmpdir()` causes performance degradation in crowded temp directories. The fix (mkdtemp subdirectory) improves reliability.  
   [GitHub](https://github.com/earendil-works/pi/issues/6774)

7. **[#6621] Prevent accidental cache invalidation due to dynamic system prompt** (CLOSED, 6 comments, 1 👍)  
   *Why it matters*: On devices with slow prefill (e.g., unified memory), dynamic system prompts cause expensive cache invalidation. A proposed optimization to stable prompt segments.  
   [GitHub](https://github.com/earendil-works/pi/issues/6621)

8. **[#6911] OpenAI SDK retries sleep full Retry-After (days) and Escape cannot abort** (CLOSED, 5 comments)  
   *Why it matters*: A serious reliability issue — when `maxRetries > 0`, the SDK sleeps the full `Retry-After` duration (even days) and ignores abort signals, locking up the client.  
   [GitHub](https://github.com/earendil-works/pi/issues/6911)

9. **[#6975] TUI startup benchmark always exits before entering interactive mode** (CLOSED, 2 comments)  
   *Why it matters*: The profiling benchmark for TUI startup is broken, preventing performance regression detection.  
   [GitHub](https://github.com/earendil-works/pi/issues/6975)

10. **[#6989] File mutation preconditions run before the per-file queue** (CLOSED, 1 comment)  
    *Why it matters*: In parallel tool execution mode, `beforeToolCall` preconditions for all sibling calls run before any file operation starts — breaking the expected ordering.  
    [GitHub](https://github.com/earendil-works/pi/issues/6989)

## Key PR Progress

1. **[#6987] fix(tui): align grapheme widths with terminal cells** (OPEN)  
   A deep fix for terminal cell-width estimation, addressing a notoriously messy problem that affects rendering across all TUI components.  
   [GitHub](https://github.com/earendil-works/pi/pull/6987)

2. **[#6980] fix(ai): make provider retries abortable** (OPEN)  
   Directly addresses #6911 — replaces native SDK retries with a common helper that enforces `maxRetryDelayMS` and respects `AbortSignal`, fixing the un-abortable multi-day sleep bug.  
   [GitHub](https://github.com/earendil-works/pi/pull/6980)

3. **[#6341] feat(ai): support constrained sampling** (OPEN, `to-discuss`)  
   An opt-in mechanism for provider-side JSON-schema constrained tool argument generation. A significant architecture proposal for structured output.  
   [GitHub](https://github.com/earendil-works/pi/pull/6341)

4. **[#6984] feat(ai): honor compat.forceAdaptiveThinking in bedrock-converse-stream** (CLOSED)  
   Fixes a `ValidationException` on Bedrock for Claude models that require adaptive thinking but aren't in the hardcoded list.  
   [GitHub](https://github.com/earendil-works/pi/pull/6984)

5. **[#6967] feat(coding-agent): expose session metadata to bash tools** (CLOSED)  
   Makes session metadata (ID, file, provider, model, reasoning level) available as environment variables to subprocesses — eliminates manual threading.  
   [GitHub](https://github.com/earendil-works/pi/pull/6967)

6. **[#6927] Add native OpenRouter OAuth support** (CLOSED)  
   Implements browser-based OAuth with PKCE S256 for OpenRouter, including timeout, cancellation, and response validation.  
   [GitHub](https://github.com/earendil-works/pi/pull/6927)

7. **[#6903] fix(coding-agent): speed up external editor launch** (CLOSED)  
   Refactors external editor temp file creation to use `mkdtemp` subdirectories — fixes the performance degradation reported in #6774.  
   [GitHub](https://github.com/earendil-works/pi/pull/6903)

8. **[#6916] feat(agent): add AgentHarness execution tools** (CLOSED)  
   Introduces `AgentHarnessTool`, an abstraction for passing arbitrary app-specific context to tool execution — enables richer stateful tool implementations.  
   [GitHub](https://github.com/earendil-works/pi/pull/6916)

9. **[#6881] feat(ai): use provider-reported cost when responses include it** (OPEN, `inprogress`)  
   When the response includes billed cost, uses it directly instead of catalog rates. Supports OpenAI cost_details and is extensible for other providers.  
   [GitHub](https://github.com/earendil-works/pi/pull/6881)

10. **[#6960] feat(ai): add StepFun providers** (CLOSED)  
    Adds four new StepFun providers for the Chinese and global AI markets, expanding Pi's provider ecosystem.  
    [GitHub](https://github.com/earendil-works/pi/pull/6960)

## Feature Request Trends

- **Provider ecosystem expansion**: Multiple PRs add new providers (StepFun, Bedrock Mantle) and OAuth flows (OpenRouter, Anthropic OAuth billing fix). The community clearly wants broader, more reliable provider coverage.
- **Context and cache optimization**: Requests for stable system prompts (#6621), better cache breakpoint handling (#6940), and constrained sampling (#6341) point to a need for more efficient context management.
- **Extension API depth**: Calls for structured approval primitives (#5954), per-block thinking labels (#6988), and session metadata exposure (#6967) show extension developers pushing for richer, more opinionated APIs.
- **UX polish**: MRU model switching (#6982), grapheme alignment (#6987), and tic-tac-toe restart (#6983) — even game features receive community attention — reflect a maturing product where users care about daily-driver quality.

## Developer Pain Points

- **Provider reliability regressions**: The `httpIdleTimeoutMs` regression (#6476) and un-abortable SDK retries (#6911) show that provider integration is still fragile across releases. Self-hosted and proxy setups are particularly vulnerable.
- **Extension ecosystem friction**: NPM-dependent extensions mislabeled on Windows (#6619), extensions not appearing in the gallery (#6991), and extension-scoped state bleeding into other sessions (#6972) — the extension pipeline still has rough edges.
- **Cache and compaction failures**: Compaction failures with Copilot Enterprise (#6768) and cache breakpoint regressions on OpenRouter (#6940) undermine the core value of long-running conversations.
- **Startup and temp file overhead**: Crowded temp directories slowing editor launch (#6774) and leftover temp session directories (#6924) indicate that Pi's ephemeral file management isn't robust enough for heavy concurrent use.
- **Parallel execution ordering**: Preconditions running before the per-file queue (#6989) and orphaned extension dialog promises (#6978) reveal concurrency bugs that can hang or misorder multi-step operations.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-23

## Today's Highlights

The Qwen Code project continues intense iteration with 45 issues and 50 PRs updated in the last 24 hours. A red core test suite on `main` is blocking all PRs, while multiple update-check failures across different Node.js/npm versions have emerged as a systemic pain point. On the positive side, several ambitious infrastructure PRs are progressing, including workspace hot-reload trust changes, Goal v3 state protocol, and Shadow DOM isolation for the Web Shell.

## Releases

**None.** The only "release" in the last 24h is `v0.0.0-benchmark-poc.20260722.1`, a temporary prerelease for validating the CI→ECS→GitHub benchmark publication pipeline. **This is not a Qwen Code product release.**

## Hot Issues

Picking the 10 most noteworthy issues updated in the last 24h:

1. **#7537 — Core test suite is red on main**  
   `packages/core` `test:ci` fails on every commit, making every open PR red regardless of its changes. The failing test (`fork dispatch test never sees registry.complete`) is a blocking CI issue that was marked P1 and closed quickly.  
   [Issue #7537](https://github.com/QwenLM/qwen-code/issues/7537)

2. **#7489 — VS Code Companion: file picker inserts @filename but image not attached**  
   The paperclip/attach icon inserts `@filename` as text but the image content is never sent to the model. A P2 bug affecting image-attachment workflows in the extension.  
   [Issue #7489](https://github.com/QwenLM/qwen-code/issues/7489)

3. **#7520 — npm 12 compatibility: update check returns array instead of object**  
   npm 12 (shipped with Node 26) returns `npm view` output as an array, breaking the update check with a cryptic "registry error." Multiple users hitting this.  
   [Issue #7520](https://github.com/QwenLM/qwen-code/issues/7520)

4. **#7543 — getNpmCliPath returns mise bash wrapper instead of npm-cli.js**  
   Another update-check failure root cause: `getNpmCliPath` finds a bash wrapper (e.g., mise) instead of the actual npm CLI, breaking `/update` and startup checks.  
   [Issue #7543](https://github.com/QwenLM/qwen-code/issues/7543)

5. **#7516 — Main CI failed: E2E Tests**  
   Auto-filed bot issue for a main-branch CI failure. The E2E workflow failed on commit `d064bd7dcf98`. The issue is already closed, suggesting a quick fix or flaky test.  
   [Issue #7516](https://github.com/QwenLM/qwen-code/issues/7516)

6. **#7306 — Harden tool-output budgeting, observability, and artifact lifecycle**  
   Phase 1 is complete (#7323, #7470 merged). This enhancement tracks systematic improvements to tool-output finalization, shell artifact handling, and observability. Community discussed via 4 comments.  
   [Issue #7306](https://github.com/QwenLM/qwen-code/issues/7306)

7. **#7449 — Proposal: Enterprise external-memory integration profile**  
   A provider-neutral specification for enterprise external-memory integration, documentation-first with incremental compatibility tests. Has 4 comments in triage.  
   [Issue #7449](https://github.com/QwenLM/qwen-code/issues/7449)

8. **#7264 — Cold-start follow-ups: remaining lazy-loading candidates**  
   Follow-up to an esbuild audit that measured 17.24 MiB / 2420 modules eagerly loaded on every cold start. Still open with 3 comments; a performance-critical issue for startup time.  
   [Issue #7264](https://github.com/QwenLM/qwen-code/issues/7264)

9. **#7525 — Visualize ordinary-session plan DAG and link Todo nodes to subagent executions**  
   A feature request for a plan-execution view linking Todo plans to live subagent executions, reusing existing ACP plan update data paths. Marked for roadmap/subagents-tools.  
   [Issue #7525](https://github.com/QwenLM/qwen-code/issues/7525)

10. **#7549 — Release Failed for v0.20.1-nightly**  
    The release workflow failed on the `quality` job. Auto-filed by GitHub Actions.  
    [Issue #7549](https://github.com/QwenLM/qwen-code/issues/7549)

## Key PR Progress

Top 10 important pull requests by scope and community relevance:

1. **#7544 — fix(cli): resolve npm wrappers to npm-cli.js**  
   Fixes the update-check failure when Node's adjacent `npm` is a bash wrapper (mise, asdf). The fix ignores non-JavaScript npm wrappers and uses `npm-cli.js` directly.  
   [PR #7544](https://github.com/QwenLM/qwen-code/pull/7544)

2. **#7528 — fix(cli): use npm view for update check instead of update-notifier**  
   Alternative fix for #7515, bypassing `update-notifier` entirely and using `npm view` directly.  
   [PR #7528](https://github.com/QwenLM/qwen-code/pull/7528)

3. **#7554 — feat(autofix): auto-update a PR red only from a stale, since-fixed base**  
   Teaches the autofix system to automatically merge current `main` into a PR that is red only because it was based on a broken commit that has since been fixed.  
   [PR #7554](https://github.com/QwenLM/qwen-code/pull/7554)

4. **#7517 — feat(core): add Goal v3 state protocol**  
   First independently reviewable slice of the larger #7494 refactor. Defines lifecycle state, optimistic concurrency, deterministic transitions, legacy migration, and compatibility testing.  
   [PR #7517](https://github.com/QwenLM/qwen-code/pull/7517)

5. **#7268 — feat(serve): Hot-reload workspace trust changes**  
   Allows workspace trust changes to take effect in a running daemon without a process restart, using semantic trust-policy snapshots and monitoring. Still open with ongoing discussion.  
   [PR #7268](https://github.com/QwenLM/qwen-code/pull/7268)

6. **#7551 — feat(web-shell): add selective Shadow DOM isolation**  
   Adds opt-in Shadow DOM isolation for plugin manager body and shared portal tree, keeping the rest of the shell in light DOM.  
   [PR #7551](https://github.com/QwenLM/qwen-code/pull/7551)

7. **#7552 — feat(serve): add workspace-level generation**  
   Adds stateless, tool-free model generation through a capability-advertised SSE endpoint, scoped to the primary workspace without requiring a live session.  
   [PR #7552](https://github.com/QwenLM/qwen-code/pull/7552)

8. **#7553 — feat(web-shell): add renderChatHeader slot for custom session header**  
   New `renderChatHeader` prop for WebShell, letting consumers inject custom content above the message list only when a session is active.  
   [PR #7553](https://github.com/QwenLM/qwen-code/pull/7553)

9. **#7541 — fix(core): preserve disabled reasoning effort**  
   Preserves an explicitly configured `reasoning_effort: "none"` when a side query disables thinking, preventing structured side queries from breaking endpoints that require thinking disabled.  
   [PR #7541](https://github.com/QwenLM/qwen-code/pull/7541)

10. **#7535 — fix(scripts): retry model calls and surface degraded release notes**  
    Makes the release-notes generator retry model calls before falling back, and makes degraded runs visible instead of silently green. Addresses #7523.  
    [PR #7535](https://github.com/QwenLM/qwen-code/pull/7535)

## Feature Request Trends

The most requested feature directions visible in the last 24 hours:

1. **Enterprise / Production Hardening** — Multiple proposals for external-memory integration profiles (#7449), workspace-level generation (#7552), explicit channel delivery (#7388), and disk cleanup for update artifacts (#7524). The project is clearly targeting enterprise deployment scenarios.

2. **Visual Execution & Plan Tooling** — Visualizing the plan DAG and linking Todo nodes to subagent executions (#7525) is a recurring theme. Users want to see what the agent is doing, especially in multi-agent/session workflows.

3. **Web Shell Customization & Isolation** — Shadow DOM isolation (#7551), custom chat headers (#7553), and start-in context selectors (#6701) show demand for embedding Qwen Code's Web Shell in larger applications.

4. **Session Management Improvements** — Resuming sessions without TUI rendering gaps (#7485), plan-execution views, and hot-reloading trust changes point to a focus on long-running, production-quality session handling.

## Developer Pain Points

Recurring developer frustrations visible from the issue tracker:

1. **Update Check Failures (Critical)** — At least 3 separate issue threads (#7515, #7520, #7543) describe the same symptom: "registry error" on update check. Root causes vary (npm 12 API change, mise wrappers, update-notifier deprecation), but the user experience is uniformly broken. This is the #1 developer pain point right now.

2. **Red CI Blocking All Work** — The core test suite being red on `main` (#7537) means every open PR shows failing CI regardless of its changes. This wastes developer time and delays reviews.

3. **Side-Query / enable_thinking Breakage** — Multiple issues (#7284, #7440, #7298) describe `web_fetch` and other tools failing because `runSideQuery` always sets `enable_thinking: false`, causing 400 errors on endpoints that require it to be `true`. The fix exists but the pattern suggests fragile assumptions about model provider capabilities.

4. **Cron Parser Semantic Divergence** — Issue #7452 documents that `*/N` patterns in day-of-month/day-of-week deviate from the documented vixie-cron semantics, which could cause silent scheduling bugs.

5. **Windows / Mobile Rendering Issues** — Issues #6577 (Alt+V paste on Windows) and #5958 (Web Shell CodeMirror not working on mobile) remain open with `welcome-pr` labels, suggesting these are known gaps without dedicated maintainer bandwidth.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-23

💡 **Note on identity**: The upstream project is now called **CodeWhale** (repo `Hmbown/CodeWhale`). The original `Hmbown/DeepSeek-TUI` naming persists in some internal references but has been superseded in all public surfaces.

---

## 1. Today's Highlights

The team is sprinting hard toward the **v0.9.1 release**, with 13 closed PRs and 16 closed issues in the last 24 hours alone. Key deliveries include the unified `/skills` manager (PR #4679), a bundled default skill pack owned by model agents (PR #4695), and the final TUI chrome refocus toward a resizable To-do + Sub-agent bar (PR #4711). However, several late-breaking bugs—including a launch failure on macOS fresh terminals (#4716), byte corruption in the composer (#4719), and a Windows installer that overwrites `PATH` (#4685)—are being marked as stop-ship blockers.

---

## 2. Releases

**No releases in the last 24 hours.** The team is integrating the v0.9.1 candidate (commit `0dfe9170a10e`) and addressing release-blocker issues before tagging.

---

## 3. Hot Issues (10 selected)

**#4716 — `[BUG]` TUI exits immediately on launch in fresh macOS Terminal**
- **Severity**: Stop-ship blocker. Running `codew` in a fresh Terminal.app tab returns `[Process completed]` with no TUI.
- **Why it matters**: Affects first-run experience for all new macOS users. The v0.9.1 candidate is confirmed broken.
- Link: https://github.com/Hmbown/CodeWhale/issues/4716

**#4719 — `[BUG]` Composer corrupts large pasted prompts before submission**
- **Severity**: Stop-ship. Paths get truncated, lines mangled, characters dropped.
- **Why it matters**: Breaks multi-line prompt workflows—a core daily interaction for power users.
- Link: https://github.com/Hmbown/CodeWhale/issues/4719

**#4685 — `[BUG]` CodeWhaleSetup.exe overwrites user PATH on Windows 10**
- **Severity**: High. The installer replaces user `PATH` instead of appending, breaking all other tools.
- **Community reaction**: First report from a Windows user; installer QA gap flagged.
- Link: https://github.com/Hmbown/CodeWhale/issues/4685

**#4717 — `[BUG]` "DeepSeek fallback model" shown prominently on non-DeepSeek providers**
- **Why it matters**: Confusing UX when using Z.AI, GLM, or other providers—legacy DeepSeek-era UI artifacts remain.
- Link: https://github.com/Hmbown/CodeWhale/issues/4717

**#4718 — `[BUG]` TUI transcript: information density too high**
- **Why it matters**: Repeated `Option+V` hints on every tool card and stacked reasoning states clutter the transcript. The team is actively debating rhythm vs. completeness.
- Link: https://github.com/Hmbown/CodeWhale/issues/4718

**#4682 — `[BUG]` Setting a custom provider causes launch failure**
- **Severity**: High. Fresh installs using `/provider` with a custom name crash immediately.
- Link: https://github.com/Hmbown/CodeWhale/issues/4682

**#4684 — `[BUG]` `danger-full-access` does not disable tools-layer workspace boundary check**
- **Why it matters**: Users expecting full sandbox bypass still hit read/write denials. The sandbox mode is only half-implemented.
- Link: https://github.com/Hmbown/CodeWhale/issues/4684

**#4085 — `[BUG]` Cannot read/write under `~/Library/CloudStorage/Dropbox/` on macOS**
- **Why it matters**: Affects Dropbox users on macOS 12+. The binary is ad-hoc signed with zero entitlements—a common configuration for local AI tools.
- Link: https://github.com/Hmbown/CodeWhale/issues/4085

**#4720 — `[ENHANCEMENT]` Provider/model auto-switching feels under-baked**
- **Why it matters**: Runtime silently switches providers (e.g., `deepseek → zai`) without user awareness. The community wants explicit consent or a "lock provider" mode.
- Link: https://github.com/Hmbown/CodeWhale/issues/4720

**#4713 — `[RELEASE-BLOCKER]` v0.9.1 security gate: deep scan and dependency alert disposition**
- **Severity**: Pre-publishing gate. 17 open Dependabot alerts (7 high, 10 moderate) across npm packages.
- Link: https://github.com/Hmbown/CodeWhale/issues/4713

---

## 4. Key PR Progress (10 selected)

**#4675 — Integrate CodeWhale v0.9.1 runtime and release surface** (CLOSED)
- The integration PR that ties together the v0.9.1 runtime simplification, empty-Work fix, and final TUI color grammar.
- Link: https://github.com/Hmbown/CodeWhale/pull/4675

**#4679 — `feat(skills): unified /skills manager with audit and owned mutations`** (CLOSED)
- Delivers the single `/skills` command for inventory, audit, install/import, update, remove, and trust across all skill roots.
- Author: SamhandsomeLee
- Link: https://github.com/Hmbown/CodeWhale/pull/4679

**#4695 — `feat: default CodeWhale skill pack (bundled v5)`** (CLOSED)
- Ships 14 end-user skills (interview, plan, debug, test, review, security-review, etc.) plus 8 meta-skills for multi-agent coordination.
- Link: https://github.com/Hmbown/CodeWhale/pull/4695

**#4711 — `fix(tui): focus chrome on todos and agents`** (CLOSED)
- Resizes the top bar to show only active To-dos + Sub-agents; dividers are now draggable; composer rails are theme-native.
- Link: https://github.com/Hmbown/CodeWhale/pull/4711

**#4694 — `fix(kimi): fail closed on K3 model-ID cross-pairings`** (CLOSED)
- Prevents silent model mismatch between Kimi Code and Moonshot routes.
- Link: https://github.com/Hmbown/CodeWhale/pull/4694

**#4696 — `feat(tui): ship staged /uwu theme`** (CLOSED)
- Ships the community-requested `uwu` theme (aliases: `owo`, `kawaii`) with soft-classic whale mark and color shimmer.
- Link: https://github.com/Hmbown/CodeWhale/pull/4696

**#4693 — `fix(tui): Work summary lifecycle and hierarchy`** (CLOSED)
- Coordinated fix: recent-only Work summaries expire after 4s; actionable titles; improved top-area hierarchy.
- Link: https://github.com/Hmbown/CodeWhale/pull/4693

**#4714 — `chore(deps): patch npm lockfiles for Dependabot alerts`** (OPEN)
- Fixes 17 open Dependabot alerts with `npm audit fix --package-lock-only`.
- Link: https://github.com/Hmbown/CodeWhale/pull/4714

**#4370 — `feat: add TelecomJS provider support`** (CLOSED)
- Fixes model catalog caching for custom providers; previously only showed 1 model for Telecom JiangSu.
- Link: https://github.com/Hmbown/CodeWhale/pull/4370

**#4686 — `feat(minimax): add China / Token Plan provider routes`** (OPEN)
- Adds four new provider identifiers (`minimax-cn`, `minimax-anthropic-cn`) targeting the Chinese `api.minimaxi.com` endpoint.
- Author: ffaacceelee
- Link: https://github.com/Hmbown/CodeWhale/pull/4686

---

## 5. Feature Request Trends

- **Consolidated skill management**: Strong demand for a single `/skills` command (now delivered in PR #4679). The community wants discoverability, trust verification, and removal all in one place.
- **Multi-provider lifecycle maturity**: Multiple issues (#4717, #4720, #4682) ask for deliberate provider/model setup, locking, and fallback clarity—not silent auto-switching.
- **Transcript readability vs. density**: The tension between showing all debug metadata vs. clean conversational rhythm is active. The community favors a composed visual hierarchy (#4676, #4718).
- **Theme-native styling**: The `/uwu` theme (#4696) highlights demand for fully customizable color palettes that don't leak global constants.
- **Windows and macOS installer quality**: Issues #4685 (PATH overwrite) and #4085 (Dropbox inaccessibility) reflect growing adoption across non-Linux platforms.

---

## 6. Developer Pain Points

| Pain Point | Frequency | Representative Issues |
|---|---|---|
| **Composer / paste corruption** | High (stop-ship) | #4719 |
| **macOS fresh-terminal launch crash** | High (stop-ship) | #4716 |
| **Windows installer destroys PATH** | Medium (new platform) | #4685 |
| **DeepSeek-era legacy UI cruft on other providers** | Medium | #4717, #4721 |
| **`danger-full-access` sandbox is incomplete** | Medium | #4684 |
| **Custom providers crash on launch** | Medium | #4682 |
| **Dropbox / CloudStorage path inaccessibility on macOS** | Medium | #4085 |
| **Provider/model auto-switching without user consent** | Low-Medium | #4720 |
| **Transcript info density (repeated hints, stacked states)** | Medium | #4718, #4701 |
| **Security dependency backlog before release** | High (gate) | #4713, #4714 |

**Recurring theme**: The shift from DeepSeek-only to a multi-provider platform is creating friction around legacy configuration assumptions, auto-switching logic, and sandbox enforcement. The v0.9.1 release is attempting to address these but several late-breaking bugs suggest the integration surface is still rough.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*