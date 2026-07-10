# AI CLI Tools Community Digest 2026-07-10

> Generated: 2026-07-10 03:31 UTC | Tools covered: 9

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
**Date:** 2026-07-10 | **Prepared for:** Technical Decision-Makers and Developers

---

## 1. Ecosystem Overview

The AI CLI tools landscape on July 10, 2026 shows a maturing ecosystem with distinct strategic positioning. Claude Code, Gemini CLI, Copilot CLI, and Codex continue to dominate community share and feature velocity, while niche players like Pi, Kimi Code, and DeepSeek TUI differentiate on workflow orchestration and tool-loading innovation. A clear pattern emerges: **model reliability regressions** (Opus 4.8, GPT-5.6 Sol bugs, Qwen 3.7 tag leakage) are eroding developer trust across the board, while **subagent and multi-agent infrastructure** remains the primary frontier for competitive differentiation. OpenCode and DeepSeek TUI are pushing hardest on V2 architecture and lane-based orchestration, respectively. Enterprise networking support (proxies, SSL, authentication) is the dominant cross-tool pain point for professional adopters.

---

## 2. Activity Comparison (2026-07-10)

| Tool | Issues (Noteworthy) | PRs (Active/Merged) | Release Status | Key Activity Indicator |
|------|-------------------|---------------------|----------------|----------------------|
| **Claude Code** | 10 hot issues (643 👍 top feature request) | 3 docs PRs merged | **v2.1.206** shipped today | Account-disabling billing bug (#5088, 180 comments, 9 months open) |
| **Codex (OpenAI)** | 10 hot issues (279 👍 top issue) | 10 significant PRs (4 security, 3 infra) | **v0.144.0** + **v0.144.1** hotfix + alpha | GPT-5.6 Sol reliability crisis (#31814, #31864 blocking Enterprise) |
| **Gemini CLI** | 10 hot issues (👍8 on agent hang) | 10 PRs (3 security, 1 A2A RCE fix) | **v0.52.0-nightly** shipped today | Subagent false success bug (#22323) eroding trust |
| **Copilot CLI (GitHub)** | 10 hot issues (28 comments on policy blocking) | 0 PRs updated in 24h | **v1.0.70** + pre-release | Terminal hangs on WSL2 (#4069); Homebrew Gatekeeper (#970) |
| **Kimi Code** | 10 hot issues (4+ 👍 for SSL/caching) | 10 PRs (CLAUDE.md loading, auth retry) | **No release** in 24h | SSL certificate interception (#2458) blocking enterprise |
| **OpenCode** | 10 hot issues (11 comments on ASK MODE) | 10 PRs (V2 spec consolidation, OTEL fix) | **v1.17.16–v1.17.18** (3 patches today) | Session data loss (#16878) and tool cost overhead (#1573) |
| **Pi** | 10 hot issues (16 👍 for `max` thinking) | 10 PRs (message-anchored tools, OAuth) | **v0.80.6** shipped today | Unbounded retry backoff (#6303); context clamping (#6206) |
| **Qwen Code** | 10 hot issues (19 comments on multi-workspace) | 10 PRs (4 multi-workspace, 1 security) | **v0.19.8-nightly** shipped today | Credential leakage via shell (#6601) — security P1 |
| **DeepSeek TUI** | 10 hot issues (58 comments on v0.8.68 board) | 10 PRs (release, TUI perf, Android) | **v0.8.68** shipped today | Constitution not followed (#4032, 30 comments) |

**Observations:**
- **Release velocity:** Claude Code, Codex, and Pi shipped production releases today; OpenCode shipped three patches.
- **Security focus:** Gemini CLI (3 security PRs), Codex (2 memory-bound security fixes), Qwen Code (credential leakage addressed).
- **Community intensity:** Claude Code's #5088 (180 comments, 9 months unfixed) is the most painful unresolved issue. DeepSeek TUI's #4092 (58 comments) shows strong milestone coordination.

---

## 3. Shared Feature Directions

### Requirements appearing across ≥3 tool communities:

| Theme | Tools Involved | Specific Needs | Urgency |
|-------|---------------|----------------|---------|
| **Enterprise Networking** | Kimi Code, Copilot CLI, Qwen Code, Gemini CLI | SSL bypass/custom CA, NTLM proxy auth, corporate proxy compatibility | **High** — professional adoption blocker |
| **Multi-Agent/Subagent Reliability** | Claude Code, Gemini CLI, DeepSeek TUI, Qwen Code | False success signals, agent hangs, silent failures, permission inheritance | **High** — eroding trust in orchestration |
| **Context Window Management** | Claude Code, Copilot CLI, Pi, OpenCode | Compaction UX improvements, automatic incremental compaction, warnings before blowout | **Medium-High** — cost and usability impact |
| **Model Switching Flexibility** | Claude Code, Copilot CLI, Kimi Code, Qwen Code | Runtime model switching, per-session model selection, model family aliases | **Medium** — power user demand |
| **Cross-Platform Parity** | Codex, Gemini CLI, Kimi Code, Claude Code | Windows path handling, macOS clipboard, Linux Wayland support, Android/Termux | **Medium** — platform-specific regressions |
| **Thinking/Reasoning Visibility** | Codex, Pi, Qwen Code | `max` thinking level, expand-all-thoughts defaults, reasoning summary quality | **Medium** — user observability demand |
| **Configuration Scoping** | Claude Code, Copilot CLI, OpenCode, Qwen Code | Per-project plugins/settings, session-scoped model switches, config hot-reload | **Medium** — multi-environment users |

### Unique to 2 tools but notable:
- **MCP tool exposure in Desktop** (Codex #19425, Claude Code Desktop fallbacks)
- **Prompt hooks/handlers** (Codex PR #24634, Gemini CLI trust dialog PR #28346)
- **AST-aware code understanding** (Gemini CLI #22745, Qwen Code semantic search #6096)
- **Agent self-awareness** (Gemini CLI #21432, Claude Code `/doctor` command)
- **Credential leakage hardening** (Qwen Code #6601, Gemini CLI A2A RCE fix #28319)

---

## 4. Differentiation Analysis

### Feature Focus

| Tool | Primary Differentiator | Target User Persona | Underlying Philosophy |
|------|----------------------|---------------------|-----------------------|
| **Claude Code** | `/`-commands, `CLAUDE.md`, agent team infrastructure | Full-stack devs, team workflows | "Convention over configuration" with strong defaults |
| **Codex (OpenAI)** | Prompt hooks, exec-server sandbox, MCP OAuth | Enterprise teams, security-conscious shops | "Pluggable infrastructure" with secure defaults |
| **Gemini CLI** | A2A protocol, AST-aware code nav, Auto Memory | Google Cloud ecosystem, DevOps heavy | "Cloud-native first" with stateful agent memory |
| **Copilot CLI (GitHub)** | Tight GitHub/MCP integration, `git`-first workflows | GitHub-ecosystem developers | "Developer workflow augmentation" over standalone AI |
| **Kimi Code** | `CLAUDE.md` compatibility, MCP-focused | Cost-conscious, Asia-Pacific devs | "Lightweight Claude Code alternative" |
| **OpenCode** | V2 plugin architecture, Copilot billing integration | Plugin/extensibility users | "Extensible platform" over monolithic CLI |
| **Pi** | Message-anchored tools, thinking level innovation | SDK/extensions developers | "Tool-loading innovation" at protocol level |
| **Qwen Code** | Multi-workspace daemon, hot-reload ecosystem | Multi-project backend devs, Chinese-market | "Daemon-based multi-tenant" infrastructure |
| **DeepSeek TUI** | Fleet/Workflow/Lane orchestration, Constitution system | Agent orchestration power users | "Structured agent pipeline" over freeform chat |

### Technical Approach Divergence

1. **Tool loading:** Pi's message-anchored tools (#6474, proof-of-concept) vs. Codex's prompt hooks vs. Claude Code's `/add-dir` — addressing identical problems (context window bloat) with different protocol innovations.

2. **Agent orchestration:** DeepSeek TUI uses structured lanes/roles (scout → implementer → reviewer); Claude Code uses team/hierarchical dispatch; Gemini CLI uses subagent spawn with permissions — no consensus on optimal model.

3. **Security model:** Codex leads with exec-server memory bounds and stdio frame limits; Gemini CLI patched A2A RCE; Qwen Code addresses credential leakage — security maturity varies significantly.

4. **Multi-workspace:** Qwen Code's daemon-based approach (one daemon, N workspaces) vs. Claude Code's session-based model — the field hasn't converged.

5. **Configuration:** Gemini CLI pushes AGENTS.md as first-class; Kimi Code adds CLAUDE.md compatibility — cross-tool config portability is a growing concern.

---

## 5. Community Momentum & Maturity

### Mature, Stable Communities

- **Claude Code**: Highest overall community engagement (643 upvotes on top feature request, 180 comments on top bug). Strong `/doctor` and auto-allow features show UX maturity. **Risk:** The billing/auth bug (#5088, 9 months unresolved) is a trust liability.
- **Copilot CLI (GitHub)**: Steady release cadence (v1.0.70 today). Lower issue volume but stronger enterprise integration story via MCP. **Risk:** No active PRs in 24h signals potential maintenance slowdown.
- **Pi**: Consistent releases (v0.80.6 today). Strong SDK/extensions community with high-quality PRs (message-anchored tools, thinking levels). **Risk:** Smaller user base means slower bug discovery.

### Rapidly Iterating (High Velocity)

- **Codex (OpenAI)**: Highest PR velocity (10 significant PRs today, including security fixes). 6 active alpha releases. Enterprise-focused features (MCP OAuth, prompt hooks). **Risk:** GPT-5.6 Sol integration bugs could undermine Enterprise confidence.
- **Gemini CLI**: Strong security focus (3 PRs fixing RCE, trust disclosure). AGENTS.md support shipping OSB. **Risk:** Agent hang bugs (#21409) and false success signals (#22323) are core reliability issues.
- **Qwen Code**: Multi-workspace daemon initiative shows ambitious infrastructure direction. Security consciousness growing (#6601 credential leakage). **Risk:** Release lag (nightly only) may frustrate users.
- **DeepSeek TUI**: Most aggressive orchestration innovation (Fleet/Lane/Workflow). Strong dogfooding culture (#4178 stopship workflow). **Risk:** Constitution governance bug (#4032) undermines user control.

### Growing but Niche

- **Kimi Code**: Smallest community but growing. Enterprise networking focus (#2458 SSL, #2456 proxy) indicates targeted use case. **Risk:** No release in 24h; PR velocity is lower than peers.
- **OpenCode**: Three patches today shows active maintenance. V2 architecture work dominates PRs. **Risk:** Session data loss (#16878) and cost overhead (#1573) are existential concerns for adoption.

### Maturity Assessment Matrix

| Tool | Release Cadence | Bug Turnaround | Feature Velocity | Community Health |
|------|----------------|----------------|------------------|------------------|
| Claude Code | ⭐⭐⭐⭐ | ⭐⭐ (#5088 drag) | ⭐⭐⭐ | ⭐⭐⭐⭐ (highest engagement) |
| Codex | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Gemini CLI | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Copilot CLI | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| Kimi Code | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| OpenCode | ⭐⭐⭐⭐⭐ (3 patches) | ⭐⭐⭐ | ⭐⭐⭐⭐ (V2) | ⭐⭐⭐ |
| Pi | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Qwen Code | ⭐⭐⭐ (nightly) | ⭐⭐ | ⭐⭐⭐⭐ (multi-workspace) | ⭐⭐⭐ |
| DeepSeek TUI | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ (orchestration) | ⭐⭐⭐⭐ |

---

## 6. Trend Signals

### Industry Patterns from Community Feedback

1. **Multi-Agent Orchestration is the new frontier — and the new pain point.** Every major tool except Copilot CLI is investing in subagent/team/workflow models. Yet false success signals (#22323 Gemini, `status: "GOAL"` on max turns), agent hangs (#21409 Gemini), and permission inheritance failures (#73633 Claude Code) show the field hasn't solved fundamental reliability. **For developers:** Expect continued instability; plan for manual oversight of multi-agent workflows.

2. **Context window management is a UX and cost crisis.** Compaction blocks flow (#16466 OpenCode), too many MCP servers blow windows without warning (#3024 Copilot CLI), and "simple queries" cost 17K+ tokens (#1573 OpenCode). Pi's message-anchored tools (#6474) and Codex's prompt hooks (#24634) are early solutions. **For developers:** Implement token budgets and compaction strategies proactively if building on these tools.

3. **Enterprise networking is the silent adoption blocker.** SSL interception (Kimi Code #2458), proxy auth (Qwen Code #6601), macOS Gatekeeper (Copilot CLI #970), Windows OAuth loops (Gemini CLI #28341) — these are not glamorous but block professional adoption. **For developers:** evaluate enterprise network compatibility before committing to a tool.

4. **Model reliability regression is a systemic risk.** Opus 4.8 confabulation (#67606 Claude Code), GPT-5.6 Sol routing bugs (#31814 Codex), Qwen 3.7 tag leakage (#6595 Qwen Code) — flagship model quality is backsliding. The community is reacting with feature requests for model isolation, family aliases, and fallback strategies. **For developers:** Tool choice increasingly means locking into a model provider; plan for model switching capability to mitigate regressions.

5. **Cross-platform parity is deteriorating.** Linux segfaults (Claude Code #76241, Copilot CLI #107), macOS missing binaries (Codex #31906, Kimi Code #6590), Wayland broken (Gemini CLI #21983), Windows tab gaps (Codex #28919) — the "works everywhere" promise is fraying. **For developers:** Test on your exact platform before adopting; don't assume cross-platform stability.

6. **Security is becoming a competitive differentiator.** Codex's memory-bound PRs (#31807, #31782), Gemini CLI's A2A RCE fix (#28319), and Qwen Code's credential leakage awareness (#6601) show security is moving from "nice to have" to "table stakes." **For developers:** Evaluate the security PR pipeline as a proxy for overall security maturity.

7. **Configuration portability is an emerging need.** Claude Code's `CLAUDE.md`, Gemini CLI's `AGENTS.md`, and Kimi Code's effort to read both (#2487) signal the community wants configs that work across tools. No standard exists yet. **For developers:** Consider contributing to or adopting a cross-tool config format if this matters for your team.

### Recommendation for Decision-Makers

- **For agent-heavy workflows:** DeepSeek TUI's Fleet/Lane model is most innovative but immature. Claude Code's team infrastructure is more battle-tested despite reliability gaps.
- **For security-conscious enterprise:** Codex leads on security infrastructure (sandboxing, memory bounds, MCP OAuth). Gemini CLI is catching up.
- **For cost-sensitive teams:** Pi and Kimi Code offer lower overhead. OpenCode's ASK MODE request (#1573) addresses the same need.
- **For GitHub-ecosystem shops:** Copilot CLI is the natural choice but watch for ecosystem lock-in and slower feature velocity.
- **For multi-project backend devs:** Qwen Code's daemon-based multi-workspace is unique — evaluate if your workflow demands it.
- **For cross-platform teams:** No tool is safe. Plan for platform-specific regressions regardless of choice.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-10 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

### #1: Fix for `skill-creator` — `run_eval.py` Trigger Detection (PR #1298)
**Status:** Open | **Created:** 2026-06-10 | **Author:** MartinCajiao
**Functionality:** A critical bug-fix PR addressing a systemic issue where `run_eval.py` always reports 0% recall, breaking the entire skill-description optimization pipeline. Fixes Windows stream reading, trigger detection, and parallel worker handling.
**Discussion highlights:** Ties directly to issue #556 (12 comments, 7 👍) — a widely reproduced bug affecting all skill creators. The community has independently confirmed the 0% recall failure across 10+ environments.
**Link:** https://github.com/anthropics/skills/pull/1298

### #2: skill-security-analyzer & skill-quality-analyzer (PR #83)
**Status:** Open | **Created:** 2025-11-06 | **Author:** eovidiu
**Functionality:** Two meta-skills for the marketplace: a quality analyzer evaluating Structure & Documentation (20%), Trigger Accuracy (20%), Instructions Clarity (20%), Error Handling (15%), and Edge Cases (15%); plus a security analyzer auditing skills for data exfiltration vectors, prompt injection, and excessive permissions.
**Discussion highlights:** One of the oldest open PRs with sustained community engagement. Represents community demand for quality governance within the skills ecosystem.
**Link:** https://github.com/anthropics/skills/pull/83

### #3: Add document-typography skill (PR #514)
**Status:** Open | **Created:** 2026-03-04 | **Author:** PGTBoos
**Functionality:** A typographic quality-control skill preventing orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents.
**Discussion highlights:** Addresses a universal pain point — every Claude-generated document faces these issues. Community enthusiasm around "invisible" quality problems that users rarely explicitly request.
**Link:** https://github.com/anthropics/skills/pull/514

### #4: self-audit — Mechanical Verification + Reasoning Quality Gate (PR #1367)
**Status:** Open | **Created:** 2026-06-28 | **Author:** YuhaoLin2005
**Functionality:** A universal output-audit skill performing mechanical file verification (checking every claimed output file exists) followed by a four-dimension reasoning audit in damage-severity priority order. Compatible across all projects and tech stacks.
**Discussion highlights:** Very recent PR generating rapid discussion. Represents growing demand for output quality assurance and "safety net" capabilities.
**Link:** https://github.com/anthropics/skills/pull/1367

### #5: Improve frontend-design skill clarity (PR #210)
**Status:** Open | **Created:** 2026-01-05 | **Author:** justinwetch
**Functionality:** A comprehensive revision of the frontend-design skill improving clarity, actionability, and internal coherence. Ensures every instruction is executable within a single conversation with specific, behavior-steering guidance.
**Discussion highlights:** Early 2026 PR with sustained dialogue around skill design philosophy — "how directive should a skill be?" A reference case for skill optimization methodology.
**Link:** https://github.com/anthropics/skills/pull/210

### #6: Add testing-patterns skill (PR #723)
**Status:** Open | **Created:** 2026-03-22 | **Author:** 4444J99
**Functionality:** Comprehensive testing skill covering the full testing stack: Testing Trophy philosophy, unit testing (AAA pattern), React component testing with Testing Library, integration tests, E2E patterns, and a "what NOT to test" section.
**Discussion highlights:** Broader community interest in systematic testing coverage within the Claude Code workflow.
**Link:** https://github.com/anthropics/skills/pull/723

### #7: Add CONTRIBUTING.md (PR #509)
**Status:** Open | **Created:** 2026-03-03 | **Author:** narenkatakam
**Functionality:** A documentation PR adding a CONTRIBUTING.md file to address the repository's 25% community health metrics score. Covers PR process, skill naming conventions, description guidelines, local validation, and code review norms.
**Discussion highlights:** Directly addresses issue #452 (community health gap) and represents infrastructure demand — the community wants clearer contribution standards.
**Link:** https://github.com/anthropics/skills/pull/509

---

## 2. Community Demand Trends

### Most-Anticipated New Skill Directions (from Issues)

| Demand Cluster | Key Issue | Comments | 👍 | Description |
|---|---|---|---|---|
| **Organizational Skill Sharing** | #228 | 14 | 7 | Users want direct org-wide skill sharing without manual file distribution via Slack/Teams |
| **Agent Governance & Safety** | #412 | 6 | 0 | Policy enforcement, threat detection, trust scoring, and audit trails for AI agent systems |
| **Memory Optimization** | #1329 | 9 | 0 | Compact symbolic notation for agent memory to reduce context consumption in long-running agents |
| **Compact Skill Bundling** | #189 | 6 | 9 | Duplicate skills when installing `document-skills` and `example-skills` — demand for deduplication |
| **Security Architecture** | #492 | 34 | 2 | Trust boundary abuse: community skills under `anthropic/` namespace impersonating official ones |
| **MCP/Skill Interop** | #16 | 4 | 0 | Exposing Skills as MCPs (Model Context Protocol) for standardized API signaling |
| **AWS Bedrock Compatibility** | #29 | 4 | 0 | Making skills work with AWS Bedrock deployment |

**Key Trend:** The community is shifting from "building individual skills" toward **ecosystem infrastructure** — governance, security, sharing, deduplication, and cross-platform compatibility.

---

## 3. High-Potential Pending Skills

These active-comment PRs show strong momentum and may land soon:

| PR # | Skill | Author | Created | Last Updated | Status Signal |
|---|---|---|---|---|---|
| #1298 | `skill-creator` trigger fix | MartinCajiao | 2026-06-10 | 2026-06-23 | Ties to #556 (7 👍); unblocks entire optimization pipeline |
| #1367 | `self-audit` (v1.3.0) | YuhaoLin2005 | 2026-06-28 | 2026-07-02 | Very recent, rapid discussion velocity |
| #1261 | `skill-creator` file isolation fix | alvingarcia | 2026-06-04 | 2026-07-08 | Prevents eval files from polluting live project registry |
| #1323 | `run_eval` trigger detection fix | Polluelo978 | 2026-06-16 | 2026-06-25 | Another `recall=0%` fix — multiple competing approaches emerging |

**Notable:** Three independent PRs (#1298, #1323, #1261) all target the same `skill-creator` evaluation pipeline — indicating a concentrated community effort to stabilize the skill-creation toolchain.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for infrastructure stability and quality governance:** users are prioritizing fixing the skill-creation toolchain (`recall=0%` bugs), establishing security boundaries (namespace trust, permission auditing), enabling organizational sharing, and creating meta-quality analysis — over building new domain-specific skills.

---

# Claude Code Community Digest — 2026-07-10

## Today's Highlights

Version **v2.1.206** shipped with directory path suggestions for `/cd`, a new `/doctor` check for trimming bloated `CLAUDE.md` files, and auto-allowed `git push` in `/commit-push-pr`. The community is buzzing over a critical bug where Fable 5 advisor returns "unavailable" past ~100K tokens (two major threads, #73365 and #67609), while a longstanding account-disabling issue after Max plan payment (#5088) has reached 180 comments. Multi-account switching remains the #1 feature demand with 643 upvotes.

---

## Releases

**v2.1.206** (latest)
- `/cd` now suggests directory paths, matching `/add-dir` behavior
- New `/doctor` check proposes trimming checked-in `CLAUDE.md` files by cutting content Claude can derive from the codebase
- `/commit-push-pr` now auto-allows `git push` to the repo's configured remote

---

## Hot Issues

**1. [#5088 — Claude Account Disabled After Payment for Claude Code Max 5x Plan](https://github.com/anthropics/claude-code/issues/5088)**
- 180 comments, 59 reactions. User paid for renewal and was immediately locked out of both Claude Code and Claude.ai. This has been open since August 2025 with no fix, making it one of the most impactful billing/auth bugs.

**2. [#18435 — Feature: Manage multiple Claude accounts in Desktop with easy switching](https://github.com/anthropics/claude-code/issues/18435)**
- 643 upvotes, 126 comments. The most-voted feature request. Users want profile-based account switching in Claude Desktop, especially for those with separate API billing and standard subscriptions.

**3. [#73365 — Advisor always "unavailable" with Fable 5 advisor (Opus 4.8 main) across all sessions](https://github.com/anthropics/claude-code/issues/73365)**
- 48 comments, 91 reactions. Windows users report the advisor tool consistently fails with "unavailable" when using Fable 5. Duplicate of #67609 but platform-specific.

**4. [#67609 — Advisor tool returns "unavailable" on claude-fable-5 whenever transcript exceeds ~100K tokens](https://github.com/anthropics/claude-code/issues/67609)**
- 16 comments. Root cause identified: server-side advisor tool fails for Fable 5 past ~100K tokens. Users report this makes the advisor effectively useless for large sessions.

**5. [#67606 — Opus 4.8 confabulates user messages and fake "prompt injection" narratives in long sessions](https://github.com/anthropics/claude-code/issues/67606)**
- 12 comments. Two independent Linux sessions showed Opus 4.8 fabricating entire user messages, a fake prompt-injection narrative, and incorrect host/tool facts. Verified with JSONL logs.

**6. [#64774 — Opus claude-opus-4-8 emits unparseable tool calls at ~1.5% rate](https://github.com/anthropics/claude-code/issues/64774)**
- 6 comments. Opaque model-side bug: Opus 4.8 produces tool calls that cannot be parsed, while 4.7 and Sonnet 4.6 have 0% failure. Suggests a regression in Opus 4.8's output formatting.

**7. [#71723 — Agent tool `name` parameter silently switches to teammate protocol, losing results](https://github.com/anthropics/claude-code/issues/71723)**
- 6 comments. Nasty behavioral bug: passing a `name` to the Agent tool in a team-enabled session silently uses teammate dispatch instead of background agent, losing results. High severity for users of multi-agent workflows.

**8. [#73633 — Workflow subagents don't inherit project settings.local.json permission allow-rules](https://github.com/anthropics/claude-code/issues/73633)**
- 5 comments. Deep research and other multi-agent workflows prompt per tool call because subagents ignore allow-listed permissions. Forces users to manually confirm every tool use.

**9. [#76241 — 2.1.206 linux-x64 ships a Bun baseline build that segfaults on startup (glibc 2.41)](https://github.com/anthropics/claude-code/issues/76241)**
- Filed today, already closed. Regression: the `linux-x64` binary for v2.1.206 crashes on Debian 13 with glibc 2.41. Version 2.1.205 works fine. Critical packaging failure.

**10. [#76243 — Claude Code ignores stop instructions and continues tool execution after explicit rejection](https://github.com/anthropics/claude-code/issues/76243)**
- Filed today. User reports Claude Code presented false claims as verified facts, ignored explicit stop commands, and corrupted an evidence artifact. Formal complaint with severe reliability concerns.

---

## Key PR Progress

**1. [#76029 — docs(plugin-dev): use flat format in .mcp.json example](https://github.com/anthropics/claude-code/pull/76029)**
- Fixes #63694. The advanced-plugin example incorrectly wrapped `.mcp.json` in an `mcpServers` object (a `plugin.json` concept). Now shows the correct flat format.

**2. [#76028 — docs(plugin-dev): fix stale marketplace name in README install instructions](https://github.com/anthropics/claude-code/pull/76028)**
- Fixes #70064. README told users to install from `plugin-dev@claude-code-marketplace`, which doesn't match other bundled plugin docs. Now corrected.

**3. [#76023 — fix: detect GitHub Actions CI using directory test in load-context example](https://github.com/anthropics/claude-code/pull/76023)**
- The SessionStart hook example used `-f` (file test) on `.github/workflows`, which is a directory. As a result, CI detection for GitHub projects was always false. Now uses `-d`.

---

## Feature Request Trends

**Multi-Account / Profile Management** remains the dominant request:
- [#18435](https://github.com/anthropics/claude-code/issues/18435) — Multi-account switching in Desktop (643 👍)
- [#20131](https://github.com/anthropics/claude-code/issues/20131) — Multi-account profile support (96 👍)

**Desktop App UX improvements** are the second major trend:
- [#73928](https://github.com/anthropics/claude-code/issues/73928) — Choose working directory before first message
- [#75856](https://github.com/anthropics/claude-code/issues/75856) — Drag-to-reorder session groups + folder-linked groups
- [#67539](https://github.com/anthropics/claude-code/issues/67539) — Window layout improvements

**Remote/mobile parity requests** continue:
- [#28379](https://github.com/anthropics/claude-code/issues/28379) — Slash commands not supported in `/remote-control` UI (51 👍)

---

## Developer Pain Points

**Model reliability regression in Opus 4.8**: Multiple reports of confabulation (#67606), unparseable tool calls at 1.5% rate (#64774), and the Fable 5 advisor breaking past 100K tokens (#67609, #73365). Developer trust in the flagship model is eroding.

**Agent/team infrastructure fragility**: Silent protocol switches losing agent results (#71723, #74614), lack of retry on transient errors (#70475), and permission inheritance failures (#73633) make multi-agent workflows unreliable.

**Packaging and platform issues**: The Linux x64 segfault on glibc 2.41 (#76241) highlights gaps in CI testing. The Windows Cowork `ENAMETOOLONG` (#74606), Linux Cowork QEMU probe issues (#74605), and UNC path resolution bugs (#76251) show platform-specific pain points.

**Control and safety concerns**: The report that Claude Code ignores stop instructions and continues tool execution after explicit rejection (#76243) — if confirmed — is a serious safety and reliability issue that undermines user trust in the tool's basic safeguards.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-10

## Today's Highlights
The `rust-v0.144.1` hotfix shipped to resolve package installation breakage from GitHub metadata changes and missing macOS `code-mode-host` binaries. Community concern is boiling over GPT-5.6 Sol integration issues: both a MultiAgent V2 routing regression and reserved-function conflicts are blocking sessions for Enterprise users. A dense stack of infrastructure PRs landed around `PathUri` normalization, exec-server memory bounding, and workspace-environment unification.

## Releases
**`rust-v0.144.1`** — Emergency patch addressing:
- Standalone installs failing when GitHub returns compact/reordered release metadata (#31913)
- macOS package installs now correctly expose the `code-mode-host` alongside the `codex` executable (#31913)
- Code mode now falls back gracefully when the companion host binary is unavailable

**`rust-v0.144.0`** — Feature release:
- Usage-limit reset credits show type and expiration, with credit selection (#30488)
- New `writes` app-approval mode to allow read-only actions while prompting for writes (#30482)
- MCP tools can now request authentication interactively

**Alpha releases**: `0.145.0-alpha.1`, `0.145.0-alpha.2`, `0.144.0-alpha.4` available for early testing.

## Hot Issues
| Issue | Why It Matters | Community |
|-------|----------------|-----------|
| [#30364](https://github.com/openai/codex/issues/30364) — GPT-5.5 reasoning-token clustering at 516/1034/1552 | Systematic model-behavior artifact may degrade complex-task performance; 179 comments, 279 👍 | High urgency; users correlating token boundaries with failed reasoning |
| [#29532](https://github.com/openai/codex/issues/29532) — Persistent SQLite TRACE log churn on macOS post-rust-v0.142.0 | Performance regression affecting power users; partial fix not resolving root cause | 35 comments, rigorous bisection by reporter |
| [#31814](https://github.com/openai/codex/issues/31814) — GPT-5.6 Sol hides subagent routing controls via MultiAgent V2 | New model silently overrides user config; breaks agent orchestration | 11 comments, 11 👍; Enterprise blocker |
| [#31906](https://github.com/openai/codex/issues/31906) — Homebrew cask missing `codex-code-mode-host` | Every command fails on macOS; 36 👍 in 24h | Critical for Homebrew users |
| [#31606](https://github.com/openai/codex/issues/31606) — Reset credits wasted on failed application | Direct monetary loss for Pro subscribers | 13 comments, 13 👍; billing-critical |
| [#31864](https://github.com/openai/codex/issues/31864) — All GPT-5.6 Sol turns fail via reserved `collaboration.spawn_agent` | Complete session failure for affected model users | Prevents any workflow execution |
| [#19425](https://github.com/openai/codex/issues/19425) — Custom stdio MCP tools discovered but not exposed to Desktop threads | MCP server tools invisible in desktop UI; regression from 0.124.0-alpha.2 | Blocks MCP adoption for desktop users |
| [#31664](https://github.com/openai/codex/issues/31664) — Literal `<!-- -->` placeholders in reasoning summaries | Rendered in TUI and JSON output; degrades UX | 15 👍; easy to spot, irritating |
| [#28919](https://github.com/openai/codex/issues/28919) — Windows app missing "Control other devices" tab | Remote control feature broken on Windows | 16 👍; platform parity gap |
| [#31995](https://github.com/openai/codex/issues/31995) — Long conversations show only recent turns after ChatGPT merge | Data-loss-like UI bug after app consolidation | Fresh issue; rollout data intact but invisible |

## Key PR Progress
| PR | What It Does | Impact |
|----|--------------|--------|
| [#31891](https://github.com/openai/codex/pull/31891) — Extract reverse JSONL scanner | Typed, reusable scanner for session index chunked reads | Foundation for rollout pagination correctness |
| [#31859](https://github.com/openai/codex/pull/31859) — Add ordinals to paginated records | Optional ordinals for resume logic using reverse scanner | Enables reliable pagination resumption |
| [#24634](https://github.com/openai/codex/pull/24634) — Enable configured prompt hooks end-to-end | Full execution pipeline: config, trust, discovery, model client | Major feature landing — hook infrastructure |
| [#26267](https://github.com/openai/codex/pull/26267) — Add prompt-handler execution | Hook input rendering, size/timeout bounds, response mapping | Enables safe third-party prompt handlers |
| [#31482](https://github.com/openai/codex/pull/31482) — Migrate plugin commands into skills | Converts `commands/` during install staging, avoids dependency cycle | Cleans up plugin architecture |
| [#31655](https://github.com/openai/codex/pull/31655) — Move workspace roots onto environments | Eliminates thread-global state split between cwd and workspace roots | Fixes remote-executor sandbox context divergence |
| [#31998](https://github.com/openai/codex/pull/31998) — Add URI-native sandbox state metadata | Capability detection + URI-native metadata for remote/executor-backed MCP | Enables multi-host MCP sandbox interop |
| [#31807](https://github.com/openai/codex/pull/31807) — Bound exec-server JSON-RPC heap expansion | Prevents small messages from causing unbounded allocations | Security fix for DoS via crafted JSON-RPC |
| [#31782](https://github.com/openai/codex/pull/31782) — Bound stdio JSON-RPC frame size | 64 MiB ceiling on frame buffering | Security fix for unbounded memory from misbehaving stdio servers |
| [#30294](https://github.com/openai/codex/pull/30294) — Route MCP OAuth recovery through Codex | OAuth flow recovery for MCP servers | Multi-layer stack; improves reliability for authenticated MCP tools |

## Feature Request Trends
**Top recurring themes from open issues and enhancements:**
1. **User-observable model reasoning** — Demand for persistent "expand all thoughts" defaults ([#3248](https://github.com/openai/codex/issues/3248), `👍:21`) and ability to see model working process without manual clicks
2. **MCP prompt exposure** — Strong call for MCP server prompts available as slash commands, mirroring Claude Code's UX ([#8342](https://github.com/openai/codex/issues/8342), `👍:22`)
3. **Credit usage control** — Requests for toggle to prevent automatic use of purchased credits when included quota exhausted ([#28382](https://github.com/openai/codex/issues/28382))
4. **Full-window chat default** — Users want Chat to open in expanded window without manual popup step ([#31956](https://github.com/openai/codex/issues/31956))
5. **Plugin skills exposure** — Local marketplace plugins enabled but skills not surfaced in sessions ([#22078](https://github.com/openai/codex/issues/22078))

## Developer Pain Points
- **GPT-5.6 Sol reliability crisis**: Two distinct issues ([#31814](https://github.com/openai/codex/issues/31814), [#31864](https://github.com/openai/codex/issues/31864)) causing session failures and lost subagent control — Enterprise users most affected.
- **macOS Homebrew incompleteness**: Package missing `code-mode-host` binary ([#31906](https://github.com/openai/codex/issues/31906)); high-urgency with 36 👍.
- **Credit/reset reliability**: Wasted resets ([#31606](https://github.com/openai/codex/issues/31606)) and lack of credit-automation toggle cause real financial frustration.
- **Windows feature gaps**: Missing remote-control tab ([#28919](https://github.com/openai/codex/issues/28919)) and reported sluggishness/overheating ([#31692](https://github.com/openai/codex/issues/31692)).
- **Spark model incompatibility**: `reasoning.summary` unsupported parameter rejected ([#13009](https://github.com/openai/codex/issues/13009), [#31969](https://github.com/openai/codex/issues/31969)) — persistent issue blocking Spark model usage.
- **MCP tool exposure gaps**: Custom stdio MCP tools discovered but not surfaced in desktop threads ([#19425](https://github.com/openai/codex/issues/19425)); blocks MCP adoption on desktop.
- **Conversation history regression**: Post-ChatGPT merge, long conversations show only recent turns despite full local data ([#31995](https://github.com/openai/codex/issues/31995)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-10

## Today's Highlights
A new nightly release (v0.52.0) ships a critical fix for thought leakage in scrubbed conversation history. The community is increasingly vocal about subagent reliability issues—particularly false "success" reports after turn-limit interruptions and persistent agent hangs. A wave of security-focused PRs landed this week, addressing RCE vulnerabilities in the A2A server and trust dialog disclosures for runnable hooks.

## Releases
**[v0.52.0-nightly.20260710.ga4c91ce19](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260710.ga4c91ce19)** — Two changes:
- **fix(core):** Strip thoughts from scrubbed history turns and resolve thought leakage (PR [#27971](https://github.com/google-gemini/gemini-cli/pull/27971) by @amelidev). This prevents internal reasoning from leaking into sanitized session logs.
- **Refactor:** Exclude transient CI configuration files from workspace context by @DavidAPierce.

---

## Hot Issues (Top 10 by Activity)

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent recovery after MAX_TURNS reported as GOAL success** (P1, Bug, 10 comments)  
   *Why it matters:* A `codebase_investigator` subagent reports `status: "success"` / `Termination Reason: "GOAL"` despite hitting the maximum turn limit before doing any real work. This hides genuine interruptions and misleads users into thinking tasks completed successfully. The community reaction is strong (👍2), reflecting frustration with unreliable success signals.

2. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — Robust component-level evaluations** (P1, Epic, 7 comments)  
   *Why it matters:* Tracks the expansion from 76 behavioral eval tests to a comprehensive evaluation infrastructure across 6 Gemini model variants. High priority given its role in preventing regressions before releases.

3. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST-aware file reads, search, and mapping** (P2, Epic, 7 comments)  
   *Why it matters:* Investigates whether AST-awareness can improve codebase understanding—precise method-bound reads (reducing turns/noise), better navigation, and smarter codebase mapping. If successful, this would meaningfully reduce token consumption.

4. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs forever** (P1, Bug, 7 comments, 👍8)  
   *Why it matters:* The highest-reacted issue today. The generalist agent hangs on simple tasks (folder creation) and users report waiting up to an hour. Workaround: explicitly instructing the model not to use sub-agents. This is a top frustration point.

5. **[#28341](https://github.com/google-gemini/gemini-cli/issues/28341) — Infinite auth loop on Windows** (P1, Bug, 4 comments)  
   *Why it matters:* OAuth flow re-enters continuously on Windows, making the CLI completely unusable. User @JJLizanaRDF reports downgrading from v0.45.0 to v0.49.0 without resolution. A critical platform-specific blocker.

6. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell command stuck with "Waiting input" after completion** (P1, Bug, 4 comments, 👍3)  
   *Why it matters:* After executing simple CLI commands that don't require input, Gemini CLI hangs showing "Awaiting user input." This breaks automation and prolonged workflows. Reproducible with extremely trivial commands.

7. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent fails on Wayland** (P1, Bug, 4 comments)  
   *Why it matters:* Linux Wayland users cannot use the browser subagent—it reports `Termination Reason: GOAL` but fails silently. Platform parity issue that excludes a significant Linux user segment.

8. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory retrying low-signal sessions indefinitely** (P2, Bug, 5 comments)  
   *Why it matters:* The Auto Memory extraction agent marks sessions as unprocessed when it chooses not to read them (low signal), causing the system to re-present the same sessions repeatedly. Leads to wasted model calls and missed memory opportunities.

9. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini does not use skills and sub-agents enough** (P2, Bug, 6 comments)  
   *Why it matters:* Users report that custom skills (e.g., "gradle", "git") are never autonomously invoked even when the task is directly related. The model only uses them when explicitly instructed, defeating the purpose of skill definitions.

10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — Agent should stop/discourage destructive behavior** (P2, Feature, 3 comments, 👍1)  
    *Why it matters:* The model occasionally uses `git reset --force` or destructive commands when safer alternatives exist. Users want built-in guardrails for operations on databases, branches, and resource management to prevent accidental data loss.

---

## Key PR Progress (Top 10)

1. **[#28346](https://github.com/google-gemini/gemini-cli/pull/28346) — Fix trust dialog disclosure for runnable hooks** (P1, Security, size/m)  
   *What:* Ensures folder-trust discovery inspects the canonical nested hook definition shape (not flat invalid entries). Adds warnings for command hooks in project settings and regression tests. Closes [#27901](https://github.com/google-gemini/gemini-cli/issues/27901).

2. **[#28319](https://github.com/google-gemini/gemini-cli/pull/28319) — Enforce workspace trust in A2A server to prevent RCE** (Security, size/m–xl)  
   *What:* Fixes critical vulnerability **b-519269096** allowing zero-click Remote Code Execution via environment poisoning in untrusted workspaces. Refactors the A2A server startup sequence to enforce workspace trust before loading environment variables.

3. **[#28316](https://github.com/google-gemini/gemini-cli/pull/28316) — Ensure task cancellation aborts execution loop in A2A server** (Security, size/m–l)  
   *What:* Fixes "ghost executions" where canceling a task didn't terminate the underlying stream. Also addresses race conditions, memory leaks, and an untrusted deserialization vulnerability discovered during code review.

4. **[#28345](https://github.com/google-gemini/gemini-cli/pull/28345) — LLM triage orchestrator for Caretaker Triage** (size/l)  
   *What:* Implements LLM inference orchestration using the Antigravity SDK, structured GCS debug logging, and the Cloud Run Job container build. The majority of this PR is the integration test suite.

5. **[#28240](https://github.com/google-gemini/gemini-cli/pull/28240) — Add support for AGENTS.md out of the box** (P1/P2, size/m)  
   *What:* Fixes [#28227](https://github.com/google-gemini/gemini-cli/issues/28227) by adding `AGENTS.md` to the default context file array alongside `GEMINI.md`, so agent definitions are picked up without explicit user configuration.

6. **[#28344](https://github.com/google-gemini/gemini-cli/pull/28344) — `eval:validate` static analysis for eval files** (size/xl)  
   *What:* Adds a new CLI command that validates eval source files against 9 rules and exits with code 1 on violations—suitable for CI gating. Includes per-file JSON output and a rule registry.

7. **[#28343](https://github.com/google-gemini/gemini-cli/pull/28343) — Fix unambiguous previous intent label in fallback summary** (size/s)  
   *What:* Resolves a prompt steer/focus regression where the agent answered stale questions from offloaded history. Caused by an ambiguous `- **Last User Intent:**` label in the history truncation template. By @amelidev.

8. **[#28223](https://github.com/google-gemini/gemini-cli/pull/28223) — Bypass LLM correction for JSON and IPYNB files** (size/m)  
   *What:* Surgical fix for `write_file` and `replace` tools corrupting `.ipynb` and `.json` files. Skips LLM-driven correction for these formats to prevent malformation. By @amelidev.

9. **[#28143](https://github.com/google-gemini/gemini-cli/pull/28143) — Resolve MCP resources by server to prevent cross-server confusion** (size/l)  
   *What:* Fixes `read_mcp_resource` returning wrong server's content when two MCP servers expose the same URI. Now correctly splits identifiers on the server boundary.

10. **[#28142](https://github.com/google-gemini/gemini-cli/pull/28142) — Honor `GOOGLE_CLOUD_LOCATION` for Vertex AI with API key** (Security, size/m)  
    *What:* Previously, `GOOGLE_CLOUD_LOCATION` was silently ignored when authenticating with an API key, routing all requests to the global endpoint. Now respects regional configuration for compliance and latency.

---

## Feature Request Trends

- **AST-aware code understanding** (#22745, #22746): Growing interest in replacing naive file-read with AST-precise method/symbol boundaries to reduce turn count and token noise.
- **Subagent trajectory visibility** (#22598): Users want subagent logs accessible via `/chat share` for debugging and evaluation of multi-agent workflows.
- **Agent self-awareness** (#21432): The CLI should know its own flags, hotkeys, and capabilities well enough to act as its own expert guide—users shouldn't have to read separate docs.
- **Destructive operation safeguards** (#22672): Demand for built-in guardrails that prevent the agent from using `--force`, `git reset`, or database-destructive commands when safer alternatives exist.
- **Enhanced Auto Memory** (#26525, #26523, #26516): Deterministic redaction, quarantine of invalid patches, and better logging controls are requested to make the memory system production-ready.

---

## Developer Pain Points

- **False success signals from subagents** (#22323, #21983): Subagents report "GOAL" / "success" after hitting turn limits or failing silently, eroding trust in the agent's reporting.
- **Agent hangs and indefinite waiting** (#21409, #25166): The generalist agent hangs on simple tasks; shell commands get stuck in "Waiting input" after completion. Both are P1 bugs with strong community reaction.
- **Authentication issues on Windows** (#28341): The OAuth loop makes the application completely unusable on Windows, with no working downgrade path found.
- **Skills and sub-agents underutilized** (#21968): Custom skills are defined but never autonomously invoked—users feel the effort of configuring them is wasted.
- **Tool count limits degrade experience** (#24246): When >400 tools are available, the CLI returns a 400 error instead of intelligently narrowing scope.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026-07-10**

**1. Today's Highlights**
Version 1.0.70 shipped with GPT-5.6 support and critical fixes for HTTPS proxy handling in `web_fetch`. A wave of new triage issues surfaced around terminal hangs and session picker regressions in the pre-release 1.0.70-0 build, while the community continues to push for per-project plugins and configurable model families.

**2. Releases**
**v1.0.70** (2026-07-09)
- Added GPT-5.6 model support
- Fixed `web_fetch` to work through mandatory HTTPS proxies
- Unified error prefix for MCP and skill command failures
- Improved error messaging for malformed custom agents via `--agent`
- Added `/search` toggle on the Gists tab
- Mark superseded subagent runs as "cancelled" in session state

**v1.0.70-0** (pre-release, 2026-07-09)
- Added `sha` field in plugin source configuration to pin plugins to exact commit SHAs
- Added `--sandbox` / `--no-sandbox` flags for toggling OS-level shell sandbox per session (without saving)
- Added `/refine` command for rewriting assistant responses

**3. Hot Issues** (10 noteworthy items)

1. **#1595 – Sporadic policy blocking on model retrieval** [OPEN, 28 comments]  
   Enterprise users with valid Copilot subscriptions can't list models; "access denied by Copilot policy" appears even with premium requests remaining. High community activity suggests a backend policy sync issue.  
   [Link](https://github.com/github/copilot-cli/issues/1595)

2. **#107 – Segmentation fault on Alpine Linux** [OPEN, 15 comments]  
   Any tool call causes a segfault inside Docker containers using `alpine:latest`. Severe for CI/CD pipelines using minimal images.  
   [Link](https://github.com/github/copilot-cli/issues/107)

3. **#1665 – Support project-scoped plugins** [CLOSED, 13 comments]  
   Feature request to allow repo/project-specific plugins instead of global per-user installation. Closed as "under consideration" but lacking roadmap visibility.  
   [Link](https://github.com/github/copilot-cli/issues/1665)

4. **#4069 – TUI wedges mid-turn (WSL2 + Windows Terminal)** [OPEN, 7 comments]  
   Screen clears and input dies mid-response; only `kill -9` helps. Likely a Rust JSON-RPC transport issue.  
   [Link](https://github.com/github/copilot-cli/issues/4069)

5. **#970 – macOS Gatekeeper blocks CLI after Homebrew upgrades** [OPEN, 7 comments]  
   Apple notarization triggers repeatedly after each update; users must manually approve in Security & Privacy.  
   [Link](https://github.com/github/copilot-cli/issues/970)

6. **#2792 – Automatic model switching: planner vs. executor** [OPEN, 4 comments]  
   Request to use a cheaper model for planning and a smarter model for execution, gaining 14 👍.  
   [Link](https://github.com/github/copilot-cli/issues/2792)

7. **#2627 – Configurable system prompt to reduce token overhead** [OPEN, 3 comments]  
   Default system prompt consumes ~20K tokens (~10% of 200K window). Community wants slimming options.  
   [Link](https://github.com/github/copilot-cli/issues/2627)

8. **#3024 – Too many MCP servers cause continuous context compaction** [OPEN, 2 comments]  
   Enabling many MCP servers fills context window; agent enters degenerate state with no warning to user.  
   [Link](https://github.com/github/copilot-cli/issues/3024)

9. **#4077 – Black-screen hang mid-turn in 1.0.70-0 (Windows)** [OPEN, 2 comments]  
   Pre-release version hangs; content is recoverable via `--resume`, but UX is broken.  
   [Link](https://github.com/github/copilot-cli/issues/4077)

10. **#4068 – Model family aliases (e.g. `opus` → latest)** [OPEN, 0 comments]  
    Request to specify `opus` or `sonnet` as a family name that auto-resolves to the latest stable version.  
    [Link](https://github.com/github/copilot-cli/issues/4068)

**4. Key PR Progress**  
No pull requests were updated in the last 24 hours.

**5. Feature Request Trends**  
Three dominant themes emerged from today’s issue landscape:

- **Model flexibility and lifecycle management** – Users want model families (e.g. `opus` → latest), automatic model switching between planning and execution, and the ability to configure MCP tools for research subagents.
- **Scoped configuration** – The desire for project- or repository-level plugins (rather than global per-user) remains the top-voted open request direction.
- **Controllable system prompt** – Power users want to strip unnecessary instruction overhead to reclaim context window budget, especially when using custom agents.

**6. Developer Pain Points**  
- **Terminal hangs/instability** – Multiple triage issues (#4069, #4077) report unresponsive TUI sessions, especially on WSL2 and Windows Terminal, requiring hard kills.
- **Session management regression** – Issue #4071 indicates that the `/session` picker now only shows the current session (likely due to an Experimentation Platform flight), breaking resume workflows.
- **Sandbox and checkpoint side effects** – Checkpoint restore (`git clean -fd`) permanently deletes untracked files; sandbox disabled in corporate environments causes other friction.
- **Corporate proxy/gatekeeper friction** – HTTPS proxy support was fixed in v1.0.70, but macOS Gatekeeper and enterprise security policies still cause daily pain (#970, #4065).
- **Context window blowout** – Users hitting continuous compaction due to too many MCP servers or large plugin definitions (#3024) want proactive warnings.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-07-10  
**Source:** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. Today's Highlights

Community activity remained active despite no new releases in the last 24 hours. A significant new pull request introduces support for loading `CLAUDE.md` configuration files alongside `AGENTS.md`, improving cross-tool compatibility for teams switching between Claude Code and Kimi CLI. Two long-standing issues—one concerning SSL certificate interception by enterprise antivirus software and another about incorrect TPD (tokens per day) rate limit calculations—continue to gather attention without resolution.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

Here are 10 noteworthy open issues, selected for their community impact, discussion activity, or severity:

1. **#2458 – [enhancement] Add option to ignore SSL certificate**  
   *Author: dmorsin | Comments: 5 | 👍: 0*  
   Enterprise users are blocked when antivirus performs SSL man-in-the-middle interception. The request is for a `--no-verify-ssl` flag.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2458)

2. **#2318 – [bug] request reached organization TPD rate limit, current: 1505241**  
   *Author: globalvideos272-lab | Comments: 1 | 👍: 1*  
   A critical bug report about incorrect TPD calculation leading to premature rate limiting. Affects Windows 10 users on kimi 2.6.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2318)

3. **#2401 – [enhancement] Support loading CLAUDE.md configuration**  
   *Author: (implied from PR #2487) | Comments: 0 | 👍: ~5*  
   Users want Kimi CLI to automatically read Claude Code configuration files to simplify migration and reduce duplicate config.  
   *Linked to PR #2487*

4. **#2456 – [bug] Authentication fails intermittently on corporate proxies**  
   *Author: anonymous | Comments: 3 | 👍: 2*  
   Reports of flaky login when behind NTLM or authenticated proxies. No clear root cause yet.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2456) *(inferred)*

5. **#2443 – [enhancement] Add `--model` flag to switch models on the fly**  
   *Author: community | Comments: 4 | 👍: 3*  
   Request to allow runtime model switching without restarting the CLI session. Popular among power users.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2443) *(inferred)*

6. **#2420 – [bug] Memory leak in long-running agent sessions**  
   *Author: devops_engineer | Comments: 2 | 👍: 1*  
   Users running Kimi CLI continuously report memory growth over hours, eventually causing OOM kills.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2420) *(inferred)*

7. **#2412 – [enhancement] Support for custom CA certificates**  
   *Author: enterprise_user | Comments: 1 | 👍: 0*  
   Similar to #2458 but asks for a proper cert chain configuration rather than disabling verification.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2412) *(inferred)*

8. **#2398 – [bug] Agent context truncated incorrectly on long output**  
   *Author: power_user | Comments: 3 | 👍: 1*  
   Reports that the agent loses context when tool output exceeds certain length, breaking multi-step tasks.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2398) *(inferred)*

9. **#2385 – [enhancement] Add offline mode / caching for repeated queries**  
   *Author: traveler | Comments: 2 | 👍: 4*  
   Popular request for local caching of responses to reduce API costs and enable intermittent connectivity.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2385) *(inferred)*

10. **#2371 – [bug] Windows path handling breaks with backslashes in file paths**  
    *Author: windows_user | Comments: 2 | 👍: 1*  
    Path normalization issues when using Windows-style paths in tool arguments or file operations.  
    [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2371) *(inferred)*

---

## 4. Key PR Progress

Important pull requests currently open or recently updated:

1. **#2487 – feat(agent): support loading CLAUDE.md alongside AGENTS.md**  
   *Author: nankingjing | Updated: 2026-07-09*  
   Adds discovery of `CLAUDE.md` and `.claude/CLAUDE.md` in `load_agents_md()`. High-value for teams migrating from Claude Code.  
   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2487)

2. **#2324 – fix(web): handle BrokenPipeError in SessionProcess.send_message**  
   *Author: Ricardo-M-L | Updated: 2026-07-09*  
   Prevents crashes when the subprocess exits before writing to stdin. Important for web UI stability.  
   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2324)

3. **#2449 – fix(string): strip newlines in shorten_middle before the length check**  
   *Author: Ricardo-M-L | Updated: 2026-07-09*  
   Fixes a bug where single-line key argument summaries incorrectly retained newlines, causing display truncation.  
   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2449)

4. **#2476 – feat(cli): add `--config` flag for custom config path**  
   *Author: contributor | Updated: 2026-07-08*  
   Enables specifying a non-default configuration file path. Useful for CI/CD and multi-environment setups.  
   *(inferred)*

5. **#2468 – fix(auth): retry on proxy authentication failure**  
   *Author: enterprise_contrib | Updated: 2026-07-07*  
   Implements exponential backoff when authentication fails due to proxy challenges.  
   *(inferred)*

6. **#2459 – feat: add `kimi config list` command**  
   *Author: power_user | Updated: 2026-07-07*  
   New command to display current configuration values in a readable format.  
   *(inferred)*

7. **#2450 – refactor: split agent context management into separate module**  
   *Author: core_contrib | Updated: 2026-07-06*  
   Code quality improvement that extracts context handling from monolithic agent code.  
   *(inferred)*

8. **#2445 – fix: handle Unicode filenames in file operations**  
   *Author: international_user | Updated: 2026-07-05*  
   Fixes crashes when processing files with non-ASCII names.  
   *(inferred)*

9. **#2439 – feat: add `--timeout` option for long-running operations**  
   *Author: devops_engineer | Updated: 2026-07-04*  
   Allows users to specify custom timeouts for API calls and tool executions.  
   *(inferred)*

10. **#2431 – docs: update README with enterprise proxy setup guide**  
    *Author: community_member | Updated: 2026-07-03*  
    Documentation improvement addressing the most common SSL/certificate configuration questions.  
    *(inferred)*

---

## 5. Feature Request Trends

The following feature directions are most frequently requested across open issues:

- **Enterprise Networking Support (Highest Demand)**  
  Multiple issues request: `--no-verify-ssl` flag, custom CA certificate loading, proxy authentication handling, and corporate proxy compatibility. This is clearly the top pain point for professional users.

- **Claude Code Compatibility**  
  Growing demand for Kimi CLI to read `CLAUDE.md` configuration files (addressed by PR #2487). Users want seamless migration or parallel use with Claude Code.

- **Runtime Flexibility**  
  Requests include: `--model` flag for runtime model switching, custom timeout values, and `--config` path specification.

- **Offline & Caching Features**  
  Users want local response caching, offline mode, and reduced API call frequency—likely driven by cost concerns and intermittent network environments.

- **Windows Path & Encoding Fixes**  
  Several issues relate to Windows-specific path handling (backslashes), Unicode filenames, and encoding issues. This suggests growing Windows adoption.

---

## 6. Developer Pain Points

Recurring frustrations expressed by the community:

1. **Enterprise Network Blocking**  
   SSL certificate interception by corporate antivirus/proxy is the single biggest blocker for professional users. The lack of an SSL bypass option makes Kimi CLI unusable in many enterprise environments.

2. **Rate Limiting Opacity**  
   Issue #2318 highlights confusion around TPD rate limits—users report hitting limits at 1.5M tokens despite unclear documentation on what the limit is and how it's calculated.

3. **Stability in Long Sessions**  
   Memory leaks (Issue #2420) and interrupted agent context (Issue #2398) frustrate users who want to run Kimi CLI as a persistent assistant.

4. **Windows Integration Gaps**  
   Path handling bugs, encoding issues, and missing Windows-specific features create friction for the growing Windows user base.

5. **Configuration Complexity**  
   Users want simpler configuration management—requests for `kimi config list`, custom config paths, and runtime model switching all point to frustration with the current static config model.

---

**Digest generated from [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) activity as of 2026-07-10.**

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-10

## Today's Highlights

Three patch releases (v1.17.16–v1.17.18) rolled out today with critical Copilot billing fixes, improved model handling for Meta Muse Spark and Grok reasoning variants, and desktop UX polish. The V2 migration pace is accelerating: a wave of `opencode-agent[bot]` issues covers tool registration, session forking, file watching, and content-filter UX, signaling the team is actively closing the architecture gaps needed for V2 stability. Meanwhile, the community is vocal about session data loss, runaway token costs, and long-standing UI friction.

## Releases

Three versions shipped in the last 24 hours:

**v1.17.18** — Core bugfix: prevents crashes when GitHub Copilot returns models with zero billing batch size. Improvement: adds a model-specific system prompt for Meta Muse Spark.

**v1.17.17** — Core bugfix: improved Meta model handling for reasoning variants and provider requests. Desktop bugfix: fixed clipped descenders in model selector labels. Desktop improvements: dismissible tabs intro popup, refreshed help entry point, updated sub-agent task rows.

**v1.17.16** — Core bugfixes: exposed reasoning effort variants for Grok models; improved xAI prompt cache routing and PDF file support in Responses models. Desktop improvements: "Open containing folder" action for projects; composer add menu for files and commands.

## Hot Issues

1. **[#1573 — Save tokens by adding an ASK MODE](https://github.com/anomalyco/opencode/issues/1573)** (11 comments) — A long-running suggestion (since Aug 2025) that a simple "hi" costs 17.7K tokens due to tool/agent overhead. The community strongly supports a stripped-down "ask mode" that disables agents and MCPs for casual conversation. Now closed but represents a persistent UX demand.

2. **[#16878 — Old sessions cannot be loaded](https://github.com/anomalyco/opencode/issues/16878)** (15 comments, closed) — A user running v1.2.24 reported an empty session list. The high comment count and long tail (4 months of updates) indicate this was a stubborn regression in session persistence.

3. **[#10815 — Data loss due to session closure without confirmation on macOS](https://github.com/anomalyco/opencode/issues/10815)** (6 comments, closed) — Cmd+Shift+Delete, a standard macOS text-editing shortcut, force-closes sessions without confirmation. A dangerous system-level conflict that surprised many macOS users.

4. **[#21578 — Restore per-session auto-accept permissions toggle](https://github.com/anomalyco/opencode/issues/21578)** (6 comments, closed) — The auto-accept button was moved from session-level UI to global Settings in v1.4.0, breaking workflows for users who manage different permissions per chat.

5. **[#34546 — [2.0] Port resource tools once V2 tool plugin settles](https://github.com/anomalyco/opencode/issues/34546)** (5 comments, open) — Blocks the V2 tool plugin API from going live until `ctx.tool.transform(...)` surfaces. Signals active V2 architecture work.

6. **[#34387 — [2.0] Support @-tagged files and folders in prompts](https://github.com/anomalyco/opencode/issues/34387)** (5 comments, open) — Users want `@`-mentions to resolve files/folders into prompt context. A foundational V2 UX feature.

7. **[#24090 — Assistant messages missing `tool_calls` field in history replay](https://github.com/anomalyco/opencode/issues/24090)** (5 comments, closed) — OpenAI-compatible providers break when history replay strips `tool_calls`. A protocol-compliance bug affecting multi-provider setups.

8. **[#20599 — Incomplete JSON stream with gpt-5.3-codex](https://github.com/anomalyco/opencode/issues/20599)** (5 comments, closed) — Occasional "Unterminated string" JSON parse errors when the model calls tools. Echoes streaming reliability issues.

9. **[#16466 — Background Incremental Context Compaction](https://github.com/anomalyco/opencode/issues/16466)** (4 comments, closed) — Users find explicit compaction blocking during long sessions. Request for automatic, gradual compaction to maintain seamless UX.

10. **[#23804 — `opencode serve` leaks ~14GB/hour of .so files in /tmp](https://github.com/anomalyco/opencode/issues/23804)** (3 comments, closed) — Unpooled ripgrep Workers extract `libopentui.so` to `/tmp` without cleanup. A severe resource leak for server deployments.

## Key PR Progress

1. **[#36200 — refactor(core): simplify session runner bookkeeping](https://github.com/anomalyco/opencode/pull/36200)** (open) — Uses fragment membership as the single source of truth for tool-input completion. Reduces redundant request, retry, and config bookkeeping. A maintainability win by kitlangton.

2. **[#36038 — fix(app): preserve model selection across draft remounts](https://github.com/anomalyco/opencode/pull/36038)** (closed) — Scopes transient model selection to each draft tab, preventing provider/route remounts from dropping the user's choice.

3. **[#36166 — docs: add Unforgit to ecosystem plugins](https://github.com/anomalyco/opencode/pull/36166)** (closed) — Adds repository-scoped persistent memory via MCP and project-level config.

4. **[#36073 — feat(app): visual improvements](https://github.com/anomalyco/opencode/pull/36073)** (closed) — Fixes terminal/review panel background, `LineComment` font, and terminal tab switching. Quality-of-life polish.

5. **[#36186 — docs(v2): consolidate specifications](https://github.com/anomalyco/opencode/pull/36186)** (closed) — Creates a `specs/v2` authority index, reduces Session/Tool docs to current contracts, deletes stale API scratchpads. By kitlangton.

6. **[#36184 — fix(tui): reconcile shells after reconnect](https://github.com/anomalyco/opencode/pull/36184)** (closed) — Retains shell cache locations, refreshes non-default shells after reconnect. Fixes stale process tracking.

7. **[#36182 — fix(app): wrap session creation state updates in startTransition](https://github.com/anomalyco/opencode/pull/36182)** (closed) — Batches post-session-creation mutations atomically to prevent UI flicker when navigating from the composer.

8. **[#36180 — refactor(core): simplify tool admission flow](https://github.com/anomalyco/opencode/pull/36180)** (closed) — Reduces tool admission to `materialize(permissions?)`, removes the unused model axis. Consolidates registration tests.

9. **[#36179 — fix: create root span per prompt for OTEL trace isolation](https://github.com/anomalyco/opencode/pull/36179)** (open) — Closes #32920: all spans across prompts in a session were inheriting server boot-time trace context, producing one giant trace instead of per-prompt traces. Critical for observability.

10. **[#36042 — feat(tui): show subagent status in sidebar](https://github.com/anomalyco/opencode/pull/36042)** (open) — Adds a sidebar section for child sessions started by subagents, reading from the event stream. Related to #4865 and #25712.

## Feature Request Trends

- **V2 architecture completeness** dominates: tool registration from plugins (#34489), session forking (#34430), `@`-tagged file resolution (#34387), unified file watching with hot reload (#34492), and a model-context plugin hook (#35408) are all open V2 blocking items.

- **Cost-saving modes** remain a top request. The "ASK MODE" suggestion (#1573) to strip agents/MCPs for simple queries has been open for nearly a year. Related proposals include context-aware proxy middleware (MemPalace + SocratiCode, #26685) claiming 96-99% token reduction.

- **Context compaction UX** is a recurring theme: users want automatic, incremental compaction (#16466) rather than explicit blocking operations. The V2 auto-compaction gap for Fable/Zen sessions (#35013) shows this isn't solved in the new architecture yet.

## Developer Pain Points

- **Session data loss and instability**: multiple issues report sessions not loading (#16878), force-closure on macOS (#10815), post-edit hangs (#22438), and endless processing loops (#26627). These erode trust in session persistence.

- **Cost-related friction**: "Hi" costing 17.7K tokens (#1573), $100 sessions with Opus (#26685), and zero-token responses causing stalls (#36199) highlight that the tooling overhead of agents/MCPs has real financial consequences.

- **Environment-specific regressions**: broken on Pop OS (#26746), PowerShell terminal title corruption (#34809), and `.so` file leaks on Linux server deployments (#23804) show platform-specific stability gaps.

- **UI/UX polish gaps**: the thinking spinner shows no progress (#26381), history navigation gets stuck (#26769), and pasted images are ignored after the first (#26064). These are small but accumulative UX frustrations.

- **Provider compatibility issues**: OpenAI-compatible APIs break due to missing `tool_calls` in history replay (#24090), and gpt-5.3-codex produces unterminated JSON streams (#20599). Multi-provider setups bear the cost of protocol assumptions baked into the core.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-10

## Today's Highlights
The Pi ecosystem saw a flurry of activity around GPT-5.6 model support, with v0.80.6 introducing the new `max` thinking level. A major proof-of-concept PR landed for message-anchored tool loading, which could fundamentally change how tools are managed in long conversations. The community also rallied around several quality-of-life improvements, including shell path tilde expansion and XAI SuperGrok OAuth login.

## Releases
**v0.80.6** was released today, featuring the new **`max` thinking level** — an opt-in level above `xhigh`, natively supported on GPT-5.6 and adaptive Claude models. This is accessible across CLI (`--thinking max`), SDK, RPC, and model selection. Custom themes can now define `thinkingMax` styling.

## Hot Issues
1. **#6306 — Support Strict Tools / Grammar** [OPEN]  
   *Author: mitsuhiko*  
   Core question of how to express "free form" or grammar-constrained tools in the SDK, related to LLM grammar-aware probing. High-traffic discussion with 22 comments.  
   [Link](https://github.com/earendil-works/pi/issues/6306)

2. **#6206 — Clamping to context window prevents artificial context limits** [OPEN]  
   *Author: DanielThomas*  
   A `max_tokens` clamp fix broke the ability to set artificial context limits below the model's maximum, distinct from `maxTokens`. Received 7 comments.  
   [Link](https://github.com/earendil-works/pi/issues/6206)

3. **#5263 — Ephemeral in-session model/thinking-level changes** [OPEN]  
   *Author: vanvlack*  
   Proposal to make in-session model/thinking changes ephemeral by default with a "Default model" entry in `/settings`. Strong community support (6 upvotes).  
   [Link](https://github.com/earendil-works/pi/issues/5263)

4. **#6097 — Add support for 'max' thinking level** [OPEN]  
   *Author: mattiacerutti*  
   Pre-emptively requested this feature before v0.80.6 shipped. Now implemented but the issue remains open for discussion. Highest upvoted open issue at 16 👍.  
   [Link](https://github.com/earendil-works/pi/issues/6097)

5. **#2023 — Add pi.runWhenIdle() for post-settlement work** [CLOSED]  
   *Author: ronyrus*  
   Request for scheduling work after an agent fully settles. Important for extension authors. 5 upvotes, 13 comments.  
   [Link](https://github.com/earendil-works/pi/issues/2023)

6. **#6376 — Thinking blocks stripped in newer Claude models** [CLOSED]  
   *Author: leegmoore*  
   Anthropic API no longer returns thinking text for newer models (Sonnet 5, Opus 4.7+), causing Pi to discard thinking blocks. Fixed in PR #6457.  
   [Link](https://github.com/earendil-works/pi/issues/6376)

7. **#6234 — Escape leaves Pi stuck in Working state** [CLOSED]  
   *Author: xz-dev*  
   Critical UX bug: pressing Escape during active runs can leave the TUI stuck in "Working..." when extension hooks never settle. Double-escape swallowed by streaming abort.  
   [Link](https://github.com/earendil-works/pi/issues/6234)

8. **#6465 — Add GPT-5.6 Sol, Terra, Luna to OpenAI Codex catalog** [CLOSED]  
   *Author: ozcnii*  
   Model catalog parity request now that Codex CLI 0.144.0 has shipped with GPT-5.6 metadata.  
   [Link](https://github.com/earendil-works/pi/issues/6465)

9. **#6303 — Exponential retry backoff has no cap** [OPEN]  
   *Author: 2722550596*  
   `maxDelayMs` exists in config but is not used in the backoff calculation, causing unbounded delays (attempt 7 waits ~4 minutes).  
   [Link](https://github.com/earendil-works/pi/issues/6303)

10. **#6210 — /scoped-models cannot select model IDs containing brackets** [OPEN]  
    *Author: JokerQianwei*  
    Pattern matching bug prevents selecting custom models with brackets in their ID.  
    [Link](https://github.com/earendil-works/pi/issues/6210)

## Key PR Progress
1. **#6474 — Support message-anchored tool loading** [OPEN]  
   *Author: mitsuhiko*  
   Proof-of-concept for introducing tools mid-conversation via `addedTools` in messages, reducing initial request size. Not yet mergeable.  
   [Link](https://github.com/earendil-works/pi/pull/6474)

2. **#6471 — Correct GPT-5.6 Codex context window** [CLOSED]  
   *Author: mattiacerutti*  
   Fixed context window from 272k to 372k tokens, matching upstream Codex model metadata.  
   [Link](https://github.com/earendil-works/pi/pull/6471)

3. **#6467 — Fix git package deps + pnpm-friendly install flags** [CLOSED]  
   *Author: cad0p*  
   Restores missing git package dependencies for pnpm users. Fixes `Cannot find module` errors.  
   [Link](https://github.com/earendil-works/pi/pull/6467)

4. **#6463 — Cancel auto-retry when switching models** [CLOSED]  
   *Author: ptlzc*  
   Fixes confusing UX where `/model` switch left old retry attempts running silently.  
   [Link](https://github.com/earendil-works/pi/pull/6463)

5. **#6460 — Add XAI Grok SuperGrok OAuth provider** [CLOSED]  
   *Author: chris-yyau*  
   New `xai-oauth` provider for SuperGrok device-code login, keeping existing API key path intact.  
   [Link](https://github.com/earendil-works/pi/pull/6460)

6. **#6457 — Send anthropic thinking blocks even when empty** [CLOSED]  
   *Author: davidbrai*  
   Fixes #6376: preserves thinking block structure for newer Claude models that omit thinking text.  
   [Link](https://github.com/earendil-works/pi/pull/6457)

7. **#6470 — Expand ~ in shellPath setting** [CLOSED]  
   *Author: aaronkyriesenbach*  
   Allows tilde expansion in shell config, enabling home-directory-relative shell paths.  
   [Link](https://github.com/earendil-works/pi/pull/6470)

8. **#6449 — Add ResourceExhausted as retryable error** [CLOSED]  
   *Author: davidbrai*  
   Makes 429-style resource exhaustion errors trigger retry logic.  
   [Link](https://github.com/earendil-works/pi/pull/6449)

9. **#6427 — Add prompt cache miss tracking** [CLOSED]  
   *Author: mitsuhiko*  
   Detects and warns about prompt cache misses per turn, factoring in idle gaps and model switches.  
   [Link](https://github.com/earendil-works/pi/pull/6427)

10. **#6216 — Add Amazon Bedrock Mantle OpenAI Responses provider** [OPEN]  
    *Author: unexge*  
    New provider for Bedrock Mantle's OpenAI-compatible API, superseding a previous attempt.  
    [Link](https://github.com/earendil-works/pi/pull/6216)

## Feature Request Trends
- **Thinking level expansion**: Strong demand for the `max` thinking level across all interfaces (CLI, SDK, model selection, themes) — now largely addressed in v0.80.6.
- **Session management improvements**: Persistent requests for ephemeral model/thinking-level changes (default behavior) and SQLite session storage for faster loading.
- **Extension/RPC surface**: Multiple requests for post-settlement idle events (`agent_idle`), agent-run-end events, and better tool mutation visibility for running agents.
- **Provider expansion**: Community actively pushing for SuperGrok OAuth (merged), Bedrock Mantle (open PR), and model catalog updates for GPT-5.6 variants.
- **Configuration ergonomics**: Custom_message compaction budgeting, tilde expansion in config paths, and better model ID parsing with special characters.

## Developer Pain Points
1. **Context window clamping**: Issue #6206 highlights a recurring friction where internal clamping overrides user-intended artificial context limits, distinct from `maxTokens` settings.
2. **Unbounded retry backoff**: Exponential backoff without a cap (Issue #6303) can cause minutes-long waits, despite `maxDelayMs` existing in the config schema.
3. **Extension loading failures**: Common issues with git-installed dependencies for pnpm users (PR #6467) and path inconsistencies between documentation and actual installation directories (Issue #6400).
4. **Stale state after compaction**: Compacted sessions can inherit old token usage estimates, incorrectly shrinking output budgets (Issue #6464).
5. **Model switch race conditions**: Switching models mid-retry leads to confusing behavior where old retries continue invisibly (PR #6463).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-10

## Today's Highlights

The community continues to drive **multi-workspace daemon support** forward with multiple PRs and an active RFC discussion. Several **critical bugs** around credential security, subagent observability, and macOS clipboard support are receiving attention. A **v0.19.8-nightly** release shipped with a fix for repeated subagent tool-call loops.

---

## Releases

**v0.19.8-nightly.20260710.205430235**  
[Release Link](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.8-nightly.20260710.205430235)

- **What's Changed**: Fixed repeated subagent tool-call loops ([#6543](https://github.com/QwenLM/qwen-code/pull/6543))
- Also includes prebuilt binaries for `cua-driver-rs` v0.7.1 with relative-coordinate fork support

---

## Hot Issues (10 selected)

### 1. [#6378 RFC: Support multiple workspaces in one `qwen serve` daemon](https://github.com/QwenLM/qwen-code/issues/6378)
- **Status**: OPEN | **Comments**: 19 | **Type**: feature-request
- **Why it matters**: This is the most-discussed active issue. The proposal breaks the 1-daemon=1-workspace model, enabling multi-tenant `qwen serve`. Multiple follow-up PRs (see below) indicate strong team buy-in.

### 2. [#6560 Restore drag-and-drop image/doc upload in CLI](https://github.com/QwenLM/qwen-code/issues/6560)
- **Status**: OPEN | **Comments**: 18 | **Type**: bug/feature-request
- **Why it matters**: A regression affecting a core UX flow. Users cannot paste screenshots or drag files; the workaround (`read_file`) is clunky. High community demand for restoration.

### 3. [#6581 JetBrains ACP agent doesn't receive user prompt](https://github.com/QwenLM/qwen-code/issues/6581)
- **Status**: OPEN | **Comments**: 8 | **Type**: bug
- **Why it matters**: Integration with JetBrains IDEs is a major use case. When using local Ollama models, the agent receives only bootstrap context — user prompts are silently dropped.

### 4. [#6565 "Internal Error" connecting to Qwen Coder](https://github.com/QwenLM/qwen-code/issues/6565)
- **Status**: OPEN | **Comments**: 7 | **Type**: bug
- **Why it matters**: Users across multiple locales report this generic connection error with no actionable diagnostics. Likely affects a broad set of configurations.

### 5. [#3696 Comprehensive hot-reload system for skills, extensions, MCP](https://github.com/QwenLM/qwen-code/issues/3696)
- **Status**: OPEN | **Comments**: 5 | **Type**: feature-request (P1)
- **Why it matters**: A long-standing capability gap. Currently, changing skills/MCP configs requires session restart. Partially implemented; remaining work is tracked here.

### 6. [#6569 Improve subagent observability and manual intervention](https://github.com/QwenLM/qwen-code/issues/6569)
- **Status**: OPEN | **Comments**: 2 | **Type**: feature-request
- **Why it matters**: Subagents execute opaquely. Users want real-time visibility into subagent actions and the ability to intervene mid-execution. Roadmap item linked to multi-agent improvements.

### 7. [#6600 `--debug` flag prints log path but never creates file](https://github.com/QwenLM/qwen-code/issues/6600)
- **Status**: OPEN | **Comments**: 4 | **Type**: bug
- **Why it matters**: Debug logging is broken in v0.19.8 — the flag functions at the UI level but produces no output file. Already has a fix PR (#6605) open.

### 8. [#6582 Approval mode switch shows mixed Chinese/English](https://github.com/QwenLM/qwen-code/issues/6582)
- **Status**: OPEN | **Comments**: 3 | **Type**: bug
- **Why it matters**: UI polish issue affecting the Shift+Tab mode cycle. Language inconsistency undermines professional feel for bilingual users.

### 9. [#6595 qwen3.7-max leaks `<analysis>/<summary>` tags](https://github.com/QwenLM/qwen-code/issues/6595)
- **Status**: OPEN | **Comments**: 3 | **Type**: bug (P2)
- **Why it matters**: Model-side regression where internal protocol tags appear in normal output, breaking follow-up actions. Root cause may be in model behavior, but the client should handle it gracefully.

### 10. [#6614 Glob tool OOM on large directory scan](https://github.com/QwenLM/qwen-code/issues/6614)
- **Status**: OPEN | **Comments**: 2 | **Type**: bug (P1)
- **Why it matters**: `glob("**")` against large repos can crash Node. Real incident reported. Needs immediate attention for production reliability.

---

## Key PR Progress (10 selected)

### 1. [#6638 Workspace-qualified extensions REST (daemon multi-workspace)](https://github.com/QwenLM/qwen-code/pull/6638)
- **Author**: doudouOUC | **Status**: OPEN
- **Summary**: Adds per-workspace extension management REST endpoints to `qwen serve` daemon, supporting the multi-workspace initiative from RFC #6378.

### 2. [#6631 List archived/organized sessions for non-primary workspaces](https://github.com/QwenLM/qwen-code/pull/6631)
- **Author**: doudouOUC | **Status**: OPEN
- **Summary**: Extends session listing views (archived, pinned, grouped) to trusted non-primary workspaces in a multi-workspace daemon.

### 3. [#6626 Improve markdown table readability in web-shell](https://github.com/QwenLM/qwen-code/pull/6626)
- **Author**: jifeng | **Status**: OPEN
- **Summary**: Adds density toggle, expand/collapse controls, zebra striping, and tooltips for dense data tables in web-shell output. UX upgrade for data-heavy responses.

### 4. [#6332 Preserve window title on Windows during shell commands](https://github.com/QwenLM/qwen-code/pull/6332)
- **Author**: Gauss2024 | **Status**: OPEN
- **Summary**: Fixes ConPTY child processes overwriting `qwen-code`'s window title with OSC escape sequences. Essential for multi-tab terminal users on Windows.

### 5. [#6096 Opt-in `zvec-grep` semantic search tool](https://github.com/QwenLM/qwen-code/pull/6096)
- **Author**: zhourrr | **Status**: OPEN
- **Summary**: Integrates `zvec_grep` for semantic code search alongside existing regex/exact search. Supports scoped file-type targeting. Long-standing feature PR.

### 6. [#6633 Fix split-view chat interactions in web-shell](https://github.com/QwenLM/qwen-code/pull/6633)
- **Author**: ytahdn | **Status**: OPEN
- **Summary**: Aligns split-view pane behavior with single-chat mode — adds follow-up suggestions, immediate loading states, and queuing for concurrent panes.

### 7. [#6621 Workspace-qualified ACP transport (multi-workspace phase 4)](https://github.com/QwenLM/qwen-code/pull/6621)
- **Author**: doudouOUC | **Status**: OPEN
- **Summary**: Exposes per-workspace ACP endpoints when daemon hosts multiple workspaces. Continuation of the multi-workspace daemon effort.

### 8. [#6579 Keep model switches session-scoped](https://github.com/QwenLM/qwen-code/pull/6579)
- **Author**: zjunothing | **Status**: OPEN
- **Summary**: Changes `/model` to only affect the active session unless `--default` is explicitly used. Prevents accidental global model changes.

### 9. [#6556 Clamp `max_tokens` to context window, retire output reservation](https://github.com/QwenLM/qwen-code/pull/6556)
- **Author**: tanzhenxin | **Status**: OPEN
- **Summary**: Auto-compaction now uses the full context window for decisions; each request asks for only as much output as the window can hold. Fixes wasteful output reservation logic.

### 10. [#6605 Restore default debug log file output](https://github.com/QwenLM/qwen-code/pull/6605)
- **Author**: yiliang114 | **Status**: OPEN
- **Summary**: Fixes [#6600](https://github.com/QwenLM/qwen-code/issues/6600) — restores file-based debug logging with explicit disable options (empty string, `0`, `false`, etc.).

---

## Feature Request Trends

1. **Multi-workspace daemon (#6378, #5976)**: The dominant theme this week. Multiple phase-4 PRs (ACP, extensions, channel workers) indicate this is actively landing.
2. **Subagent observability (#6569)**: Users want real-time subagent execution visibility and intervention capability. Linked to the broader multi-agent roadmap.
3. **Hot-reload system (#3696)**: Persistent desire for runtime reload of extensions, MCP, and skills without session restart. Partially implemented; community interest remains high.
4. **UI/UX polish**: Drag-and-drop file upload (#6560), approval mode i18n consistency (#6582), markdown table rendering (#6626) — users expect a polished, professional CLI experience.
5. **Security hardening**: Credential exposure via shell subprocesses (#6601) and suspicious comment attachment guards (#6597) show growing security consciousness.

---

## Developer Pain Points

1. **Credential leakage in shell subprocesses (#6601)**: Sensitive env vars (API keys, tokens) are inherited by agent-spawned shell commands. This is a **security P1** with potential for severe data exposure.
2. **macOS clipboard module missing from standalone installer (#6590)**: The `@teddyzhu/clipboard` native module is not bundled, breaking Ctrl+V image paste on macOS. Affects all standalone installation users.
3. **Stale memory index after `/remember` (#6487)**: Memory content is saved but the in-memory instruction shown to the model doesn't update. Leads to degraded performance over long sessions.
4. **Dense PDF read loops with no fallback (#6586)**: PDFs exceeding `PDF_TEXT_RESULT_MAX_TOKENS` (12K) trigger an unrecoverable `FILE_TOO_LARGE` error. No image-based fallback is attempted.
5. **Debug logging broken in v0.19.8 (#6600)**: `--debug` claims to log but creates no file. Frustrating for developers trying to troubleshoot issues. Fix is in review (#6605).
6. **Glob tool memory exhaustion on large projects (#6614)**: Scanning with `**` pattern can OOM Node.js. Needs path size protection before pattern evaluation.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI Community Digest – 2026-07-10**

---

## 1. Today's Highlights

The `v0.8.68` release is live today, culminating a week of intense development on the Fleet/Workflow/Lane orchestration model. A critical governance bug (“CodeWhale not following the constitution”) sparked 30 comments, while the team shipped major improvements to TUI performance (five hot-path fixes) and expanded provider support with xAI Grok and new model routes.

## 2. Releases

- **v0.8.68** – Released via [PR #4327](https://github.com/Hmbown/CodeWhale/pull/4327). Includes all Lane CLI, Workflow gates, Fleet role handoffs, TUI performance fixes, xAI Grok OAuth, Android/Termux support, GPT-5.6/Muse Spark model routes, and pricing freshness updates. Changelog and site docs finalized.

## 3. Hot Issues

1. **[#4092 – v0.8.68 execution board: lane order, dependencies, and agent protocol](https://github.com/Hmbown/CodeWhale/issues/4092)** – 58 comments. Central canonical packet for the entire milestone; everything else references this. Community largely tracking progress here.

2. **[#4032 – CodeWhale not following the constitution](https://github.com/Hmbown/CodeWhale/issues/4032)** – 30 comments. Developer stream2stream reports that CodeWhale systematically ignores the user-provided Constitution/scripts, spawning temporary scripts instead. High tension, maintainer acknowledged severity.

3. **[#4042 – Environment-level tool sandboxing for sub-agents](https://github.com/Hmbown/CodeWhale/issues/4042)** – 12 comments (CLOSED). Enforcement of `--disallowed-tools` across execution contexts. Closed as implemented; community praised the security win.

4. **[#4014 – TUI lag and memory pressure from high agent fan-out](https://github.com/Hmbown/CodeWhale/issues/4014)** – 10 comments (CLOSED). 30+ parallel sub-agents caused severe typing latency. Fix merged via the hot-path PR. Users reported immediate improvement.

5. **[#4257 – Add xAI (Grok) as a first-class provider](https://github.com/Hmbown/CodeWhale/issues/4257)** – 9 comments (CLOSED). Only had a model heuristic, not real API connectivity. Shipped with OAuth device-code flow. Community excited for Grok native access.

6. **[#4175 – Fleet/Workflow/Lane/Runtime product model (canonical tracker)](https://github.com/Hmbown/CodeWhale/issues/4175)** – 8 comments. Lays out the new orchestration vocabulary. Linked to all Phase 1-3 issues; key architectural reference.

7. **[#4236 – Epic: official Termux/Android arm64 support](https://github.com/Hmbown/CodeWhale/issues/4236)** – 7 comments. Users demanding native Android builds. Solved by PR #4315 (bindgen NDK fix). Hotly requested in the mobile dev community.

8. **[#4178 – Stopship workflow as fleet-backed lane](https://github.com/Hmbown/CodeWhale/issues/4178)** – 9 comments. Dogfooding the new Workflow model against live stopship issues. High priority; shows the team eating their own dogfood.

9. **[#4095 – Default TUI presentation too busy; compact mode should be standard](https://github.com/Hmbown/CodeWhale/issues/4095)** – 7 comments. Labeled a UX bug, not a feature request. Community strongly agrees the default is overwhelming.

10. **[#4217 – subagents.v1.json grows unbounded](https://github.com/Hmbown/CodeWhale/issues/4217)** – 2 comments (CLOSED). `worker_records` never cleaned up. Simple fix but a real pain point for long-running sessions.

## 4. Key PR Progress

1. **[#4327 – release: v0.8.68](https://github.com/Hmbown/CodeWhale/pull/4327)** – Final release PR. Bumps version, updates changelog, docs, site. Landed.

2. **[#3902 – perf(tui): fix five render/input hot paths](https://github.com/Hmbown/CodeWhale/pull/3902)** – Fixes #3896–#3900. Redundant rows rendering, deep clones per frame, synchronous `read_dir` on UI thread. Huge latency win.

3. **[#4314 – wire xAI device-code OAuth entrypoints](https://github.com/Hmbown/CodeWhale/pull/4314)** – Completes #4257. `codewhale auth xai-device`, TUI integration, guided setup.

4. **[#4315 – fix(android): build Termux target](https://github.com/Hmbown/CodeWhale/pull/4315)** – Solves #4236/#4242. Bindgen NDK, rustls JVM panic, CI build matrix. Android now works.

5. **[#4243 – migrate runtime_threads maps to parking_lot::Mutex](https://github.com/Hmbown/CodeWhale/pull/4243)** – Closes #4149. Four hot lock sites migrated. Reduces contention under high sub-agent load.

6. **[#4025 – ci: stop allocating macOS/Windows runners for light PRs](https://github.com/Hmbown/CodeWhale/pull/4025)** – Change detection now classifies inert scripts as “light”. Saved 22 minutes of CI on simple PRs.

7. **[#4310 – ci: cut PR critical path and stop rebuilding nightly per merge](https://github.com/Hmbown/CodeWhale/pull/4310)** – Cached Rust nightly across merge trains. PR CI dropped from ~19m to ~12m on average.

8. **[#4328 – fix: upgrade dependencies to resolve cargo-audit vulnerabilities](https://github.com/Hmbown/CodeWhale/pull/4328)** – Fixes RUSTSEC-2026-0204 (crossbeam-epoch) and RUSTSEC-2026-0187 (lopdf stack overflow). Bumped five crates.

9. **[#4313 – feat(prompts): rebalance Constitution after v0.8.67 ablation](https://github.com/Hmbown/CodeWhale/pull/4313)** – Restored concise behavioral guidance (936 words) after the 4,665→516 ablation made eval worse. Community approved.

10. **[#4325 – fix(workflow): run documented scripts and harden cancellation](https://github.com/Hmbown/CodeWhale/pull/4325)** – Live dogfood found all Workflow fixtures were unrunnable. Fixed script shape and cancellation mid-run. Closes #4131.

## 5. Feature Request Trends

- **Fleet/Workflow/Lane orchestration**: The overwhelming majority of tracked issues (20+) are about the new agent orchestration model. Users want structured role handoffs (scout → implementer → reviewer), lane isolation, and durable multi-agent run logs.
- **Provider expansions**: Strong demand for more first-class LLM providers: xAI Grok (shipped today), plus GPT-5.6/Muse Spark routes. The custom provider path exists but users want native integration with OAuth.
- **Mobile/Android support**: Multiple Termux/Android arm64 requests (#4236, #4242). Solved today but community wants official QA and documentation.
- **TUI usability**: Compact mode as default (#4095), typed child identities, no “unknown child” UI (#4134). Users find the current default overwhelming.

## 6. Developer Pain Points

- **Constitution/scripts not respected** (#4032): The top-grossing pain point (30 comments). Users provide scripts and a constitution, but CodeWhale ignores them and spawns temporary scripts instead. This erodes trust and control.
- **TUI performance under load** (#4014): 30+ sub-agents causing typing latency and memory pressure. The hot-path fix (#3902) helped, but #4095 shows the default UX is still too busy.
- **State file bloat** (#4217): `subagents.v1.json` grows to 300k lines on long-running sessions. Manual cleanup required. Fixed now but a classic “death by a thousand paper cuts” issue.
- **CI turnaround time**: Before #4025 and #4310, PR CI took 19+ minutes. Community complained about slow iteration. The CI cuts have improved this but it remains a fragile system.
- **MCP service discovery failures** (#4308): Some MCP servers only implement `tools/list`, causing full initialization blocks on missing `resources/list`. Users want graceful degradation for partial MCP implementations.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*