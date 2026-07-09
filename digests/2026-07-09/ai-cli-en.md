# AI CLI Tools Community Digest 2026-07-09

> Generated: 2026-07-09 03:29 UTC | Tools covered: 9

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
**Date:** 2026-07-09

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem is experiencing simultaneous maturation and growing pains. Across six major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, and Qwen Code—communities are reporting systemic reliability issues around cost management, agent loop detection, and session state persistence. The dominant theme is a collective push toward autonomous agent orchestration, with users demanding persistent multi-agent architectures, hierarchical agent spawning, and safety guardrails. However, this ambition is being curtailed by regressions in core functionality: token consumption spikes, uncancellable zombie agents, and silent failure modes are eroding trust among power users. The tools are converging on similar architectures (MCP integration, skill/plugin ecosystems, multi-provider support), but differentiation is emerging around target users—with some tools optimizing for enterprise compliance and others for raw developer productivity.

---

## 2. Activity Comparison

| Tool | Hot Issues (Today) | Active PRs | Release Status | Community Sentiment |
|---|---|---|---|---|
| **Claude Code** | 10 high-traffic | 10 open | v2.1.205 (patch) | Anxious—cost crisis dominates |
| **OpenAI Codex** | 10 top issues | 10 active | rust-v0.144.0-alpha.x | Cautious—regression in v0.143.0 |
| **Gemini CLI** | 10 hot issues | 10 active | v0.50.0 + v0.51.0-preview | Mixed—agent reliability concerns |
| **GitHub Copilot CLI** | 10 selected | 2 open | No release today | Stable but stalling—long-running issues |
| **Kimi Code CLI** | 1 active | 0 | No release today | Quiet—single enterprise blocker |
| **OpenCode** | 10 hot issues | 10 landed today | No release today | Active—12 PR batch from HOYALIM |
| **Pi** | 9 closed/1 open | 7 merged today | v0.80.3 (no new version) | Positive—burst of patching |
| **Qwen Code** | 10 hot issues | 10 active | v0.19.8 shipped | Growing—daemon persistence focus |

**Key Observations:**
- **Claude Code** has the highest-velocity community (43+ comments on top issues) but also the most distressed user base.
- **OpenCode** and **Pi** show the most aggressive patching velocity today (12 and 7 PRs respectively).
- **Kimi Code CLI** is the least active, with only 1 issue and 0 PRs—a potential risk signal for adoption.
- **GitHub Copilot CLI** has minimal visible PR activity, suggesting core development occurs in internal branches.

---

## 3. Shared Feature Directions

### 3.1 Multi-Agent Orchestration & Hierarchical Agents
- **Claude Code (#56913)**: Tiered Opus brains + Sonnet workers + persistent state
- **OpenCode (#25766)**: Multi-LLM structured team debate with reference implementation
- **Gemini CLI (#21409, #21968)**: Sub-agent adoption and generalist agent reliability
- **Qwen Code (#6378)**: Multi-workspace daemon support for parallel agent sessions

**Common Need:** Users across tools want long-lived orchestrators that can spawn child agents, persist state across sessions, and coordinate multi-model workflows.

### 3.2 Cost Management & Token Consumption Control
- **Claude Code (#42249, #55053, #54776)**: 5-10× token consumption increase, daily quotas depleted in hours
- **OpenAI Codex (#31668)**: Paid accounts draining limits after single prompt
- **Gemini CLI (#28164)**: 15-turn recursion cap to prevent infinite loops
- **Pi (#6303)**: Exponential retry backoff with no cap—multi-minute stalls

**Common Need:** Users demand predictable, bounded token usage with cancellation mechanisms and per-step cost visibility.

### 3.3 Agent Safety & Cancellation Mechanisms
- **Claude Code (#75314)**: 1M tokens lost to zombie background agents with no cancellation
- **Claude Code (#72080)**: Sub-agent infinite loops consuming tokens with no recovery
- **OpenAI Codex (#31176)**: Retry goals after capacity errors (avoids unnecessary stops)
- **Gemini CLI (#28316)**: Ghost executions after task cancellation

**Common Need:** Critical safety gap—background agents can spin indefinitely without user recourse. All tools need kill switches, token budgets, and reliable termination signals.

### 3.4 Persistent Session State & Resume
- **OpenCode (#15108, #25131)**: Sessions disappearing, stale IDs crashing UI
- **Qwen Code (#6561, #6557)**: Daemon session persistence and goal restoration
- **Pi (#6424)**: Compaction fires mid-turn, overwrites unfinished state
- **GitHub Copilot CLI (#4054)**: Session resume broken outside git repos

**Common Need:** Sessions should survive restarts, compaction, agent crashes, and server switches without data loss or UI corruption.

### 3.5 Provider Flexibility & Model Selection
- **GitHub Copilot CLI (#4068)**: Model family aliases (opus, sonnet, fable)
- **OpenCode (#25947)**: Omniroute provider with dynamic model discovery
- **Gemini CLI (#24246)**: 400 error when >128 tools available
- **Pi (#6420)**: New provider integrations (Novita AI)

**Common Need:** Users want version-agnostic model selection, multi-provider routing, and graceful degradation when tool counts exceed API limits.

### 3.6 Enterprise / Proxy / Certificate Compatibility
- **Kimi Code CLI (#2458)**: SSL certificate rejection blocking enterprise auth
- **Pi (#6414)**: Proxy drops thoughtSignature, causes 400 errors
- **OpenAI Codex (#31361)**: HTTP proxy bypass gap in model discovery
- **GitHub Copilot CLI (#970)**: macOS Gatekeeper blocks on every upgrade

**Common Need:** Corporate proxy setups, SSL inspection, and OS-level security policies are blocking adoption in managed environments.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code |
|---|---|---|---|---|---|---|---|---|
| **Primary User** | Power users / autonomous workflows | CLI-first / multi-platform | Google ecosystem / enterprise | GitHub ecosystem / enterprise | Enterprise behind firewalls | Open-source / multi-provider | TUI-focused / extensible | Cloud / daemon-based |
| **Agent Architecture** | Hierarchical (Opus/Sonnet tiers) | Goal-based with retry | Sub-agent orchestrator | Plan→Execute loop | Basic standalone | Multi-LLM debate / teams | Coding agent + extensions | Daemon + channel workers |
| **Cost Model** | Token-based (daily quotas) | Paid rate limits | Token-based | GitHub Copilot subscription | Unknown | Token-based | Token-based | Token-based |
| **Security Model** | MCP plugin gates (#72014) | Plugin installs | CVE fixes (CI RCE, A2A RCE) | BYOK with regressions | SSL ignore request | Symlink traversal fix | OAuth header markers | None notable |
| **Platform Support** | macOS/Linux/Windows (Cowork buggy) | macOS/Linux/Windows | macOS/Linux (Wayland broken) | macOS/Linux/Windows | Unknown | Desktop/TUI/VS Code | Linux (clipboard broken) | WebShell/CLI/Daemon |
| **Differentiator** | Most ambitious agent vision | LSP integration (#8745) | AST-aware tools (#22745) | GitHub integration | Enterprise blocker | Multi-LLM orchestration | Prompt cache tracking (#6427) | Daemon persistence |

**Key Takeaways:**
- **Claude Code** is the most feature-rich but also the most cost-burdened—pushing hardest toward autonomous agents while grappling with runaway token consumption.
- **OpenAI Codex** is investing heavily in LSP integration and telemetry standardization, suggesting a focus on code quality over raw automation.
- **Gemini CLI** is prioritizing security hardening (two critical CVEs addressed today) and enterprise reliability over velocity.
- **GitHub Copilot CLI** appears to be in a maintenance phase, with long-running feature requests (#618, 99👍) going unaddressed.
- **Kimi Code CLI** is the least active—a single enterprise blocker suggests it may be targeting a niche, not broad adoption.
- **OpenCode** shows the most aggressive community-driven development, with HOYALIM landing 12 targeted fixes in a single batch.
- **Pi** demonstrates strong TUI quality-of-life focus, with session lifecycle fixes and prompt cache visibility.
- **Qwen Code** is investing heavily in daemon/serve-mode persistence, positioning for CI/CD and always-on workflows.

---

## 5. Community Momentum & Maturity

### High Momentum / Rapidly Iterating
- **OpenCode** — 12 PRs merged today, intense community issue reporting, strong security and performance focus. Momentum score: **Very High**.
- **Pi** — 7 PRs merged, 15 issues closed, burst of patching after v0.80.3. Momentum score: **High**.
- **Qwen Code** — 10 active PRs, new v0.19.8 release, growing feature requests. Momentum score: **High**.

### Moderate / Stable Iteration
- **Gemini CLI** — 10 active PRs, two releases today, but agent reliability issues persist. Momentum score: **Moderate**.
- **OpenAI Codex** — 10 active PRs, but v0.143.0 regression and billing bugs suggest process gaps. Momentum score: **Moderate**.
- **Claude Code** — High community engagement but low fix velocity relative to issue volume. Momentum score: **Moderate (strained)**.

### Low / Stalled
- **GitHub Copilot CLI** — 2 PRs (both low signal), no releases, long-running #618 (99👍) closed without resolution. Momentum score: **Low**.
- **Kimi Code CLI** — 1 issue, 0 PRs, no releases. Momentum score: **Very Low**.

### Community Health Signals
- **Claude Code** has the most passionate but also most frustrated community—high issue volume with slow official response is eroding trust.
- **OpenCode** and **Pi** show healthy contributor activity, with fixes landing within hours of issue reports.
- **GitHub Copilot CLI** appears to be deprioritized in favor of the VS Code extension experience.

---

## 6. Trend Signals

### 📈 Growing: Autonomous Agent Orchestration
Users want tools that run as persistent, multi-tiered agent systems—not just interactive coding assistants. **Claude Code (#56913)**, **OpenCode (#25766)**, and **Gemini CLI (#21409)** are all receiving proposals for orchestrator patterns with child agent spawning, persistent state, and security gates.

### 📈 Growing: Cost Observability & Control
Token consumption is the #1 pain point across the ecosystem. Users demand per-step cost breakdowns (Pi #6427), cancellation mechanisms (Claude Code #75314), recursion caps (Gemini CLI #28164), and configurable model tiers for planning vs. execution (Copilot CLI #2792).

### 📈 Growing: Agent Safety Guardrails
Zombie agents, infinite loops, and silent failures are creating demand for built-in safeguards: token budgets, kill switches, second-opinion reviewers (Qwen Code #6542), and fail-closed MCP gates (Claude Code #72014).

### 📉 Declining: Siloed Single-Tool Workflows
Users are increasingly running multi-tool setups and demanding cross-tool compatibility—MCP standardization, common skill formats, and shared memory protocols. **OpenCode** explicitly supports multiple providers; **Pi** is adding proxy compatibility fixes.

### 🔴 Emerging: Enterprise Adoption Blockers
SSL certificate handling (Kimi Code #2458), macOS Gatekeeper (Copilot CLI #970), and proxy compatibility (Pi #6414) are becoming critical barriers. Tools that cannot work behind corporate proxies or SSL inspection will lose enterprise mindshare.

### 🟡 Emerging: Model-Family Aliases
As model versions churn rapidly, users want declarative model configuration that auto-resolves to the latest stable build (Copilot CLI #4068). Tools forcing exact version pins are creating maintenance overhead.

### 🔵 Stabilizing: Session Persistence
Multiple tools are converging on durable session storage, checkpoint/compaction resilience, and resume functionality. **Qwen Code** (#6557, #6561) and **Pi** (#6424) are leading here; **Claude Code** and **OpenCode** still show session fragility.

---

**Bottom Line for Decision-Makers:**
- **Choose Claude Code** if you need the most advanced agent orchestration and can tolerate current cost volatility.
- **Choose OpenAI Codex** if LSP integration and CLI reliability are your priorities (once v0.143.0 regression is fixed).
- **Choose Gemini CLI** for enterprise deployments where security hardening and Google ecosystem are requirements.
- **Choose OpenCode** for open-source flexibility and multi-LLM orchestration capabilities.
- **Choose Pi** for a polished TUI experience with strong session management and prompt cache visibility.
- **Avoid Kimi Code CLI and GitHub Copilot CLI** for now—too low activity or too many unresolved long-running issues.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-07-09 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following pull requests have generated the most community discussion, indicating high interest in specific new Skills or critical fixes.

### #514 — document-typography [OPEN]
**Skill: Typographic quality control for generated documents**  
Detects and corrects orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Addresses widespread visual quality issues that affect nearly every Claude-generated document. Discussion focuses on whether typographic rules should be configurable per-document type.  
→ [anthropics/skills PR #514](https://github.com/anthropics/skills/pull/514)

### #1298 — fix(skill-creator): run_eval.py recall fix [OPEN]
**Fix: Critical bug in skill evaluation pipeline**  
Resolves a systemic bug where `run_eval.py` reports 0% recall for every skill description, effectively breaking the entire description-optimization loop. This PR consolidates fixes for Windows stream handling, trigger detection, and parallel worker issues that have been independently reproduced by 10+ community members (see Issue #556).  
→ [anthropics/skills PR #1298](https://github.com/anthropics/skills/pull/1298)

### #486 — ODT skill [OPEN]
**Skill: OpenDocument Format creation and template handling**  
Adds support for creating, filling, reading, and converting .odt/.ods files with LibreOffice-compatible document generation. Community discussion centers on template variable injection patterns and HTML round-trip fidelity.  
→ [anthropics/skills PR #486](https://github.com/anthropics/skills/pull/486)

### #1367 — self-audit skill (v1.3.0) [OPEN]
**Skill: AI output verification and reasoning audit**  
Performs mechanical file verification followed by a four-dimension reasoning quality gate. Universal across projects and tech stacks. Discussed as a potential "gatekeeper" skill for production deployments — community is actively debating its prioritization order and whether audit results should be user-facing.  
→ [anthropics/skills PR #1367](https://github.com/anthropics/skills/pull/1367)

### #83 — skill-quality-analyzer + skill-security-analyzer [OPEN]
**Meta-skills: Quality and security analysis for the Skills ecosystem**  
Five-dimension quality analyzer (structure, documentation, triggers, edge cases, anti-patterns) and a security analyzer covering prompt injection, credential exposure, and file system abuse. These meta-skills enable automated review of other Skills, generating discussion about their integration into the CI pipeline.  
→ [anthropics/skills PR #83](https://github.com/anthropics/skills/pull/83)

### #723 — testing-patterns skill [OPEN]
**Skill: Comprehensive test generation and strategy**  
Covers the full testing stack: Testing Trophy model, unit testing (AAA pattern), React Testing Library, API testing with MSW, E2E with Playwright, and accessibility testing with axe-core. Discussion highlights the need for framework-specific configuration snippets alongside the general patterns.  
→ [anthropics/skills PR #723](https://github.com/anthropics/skills/pull/723)

### #1050 + #1099 — Windows compatibility fixes [OPEN]
**Fixes: Two PRs for Windows subprocess + encoding**  
Resolve `PATHEXT` resolution for `claude.cmd` on Windows and a crash in `run_eval.py` when reading from subprocess pipes. These are blockers for Windows users running the skill-creator toolchain — duplicated fixes indicate strong community demand for cross-platform support.  
→ [anthropics/skills PR #1050](https://github.com/anthropics/skills/pull/1050) | [PR #1099](https://github.com/anthropics/skills/pull/1099)

---

## 2. Community Demand Trends

From Issue activity, five clear demand clusters emerge:

| Demand Cluster | Key Issues | Signal |
|---|---|---|
| **Security & Trust Boundaries** | #492 (34 comments, +2 👍) — Community skills distributed under `anthropic/` namespace creating trust vulnerabilities | **Highest engagement** — 34 comments indicates this is the community's #1 concern |
| **Org-wide Skill Sharing** | #228 (14 comments, +7 👍) — Direct sharing links and shared skill libraries for enterprise teams | **Strongest positive signal** — 7 upvotes from 14 comments demonstrates broad agreement |
| **Skill-Creator Toolchain Reliability** | #556 (12 comments, +7 👍), #1169, #1061 — 0% trigger rate, Windows failures, YAML parsing bugs | **Most issues filed** — multiple independent reports of the same core problem, indicating systemic fragility |
| **Agent Governance & Safety** | #412 (6 comments) — Policies for agent behavior, threat detection, trust scoring, audit trails | **Emerging interest** — first proposal for safety patterns specifically for AI agent systems |
| **Duplicate Skill Management** | #189 (6 comments, +9 👍) — Plugin overlap causing identical skills in context window | **Highest upvote-per-comment ratio** — 9 upvotes signals pain for heavy plugin users |

**Key insight:** The community is shifting from "what Skills can I build" to "how do I trust, share, and manage Skills at scale."

---

## 3. High-Potential Pending Skills

These open PRs are actively discussed and likely to merge soon:

- **#1367 — self-audit skill** (updated 2026-07-02, 4 days before data cut): Universal output verification with mechanical and reasoning checks. Strong candidate for inclusion as a core Quality-of-Life skill.
- **#1302 — color-expert skill** (updated 2026-06-12): Self-contained color expertise covering naming systems (ISCC-NBS, Munsell, XKCD, RAL), color space selection tables (OKLCH for scales, CAM16 for perception), and accessibility. An applied design skill with immediate utility.
- **#1323 — run_eval trigger detection fix** (updated 2026-06-25): Fixes `run_single_query` failing to detect triggered skills, producing 0% recall. Complements #1298 and is independently verified.
- **#1261 — isolate trigger-eval command files** (updated 2026-07-08, most recent date): Prevents the eval tool from writing synthetic command files into users' live projects — previously caused concurrent Claude Code sessions to interfere with each other during parallel evaluation.
- **#514 — document-typography** (updated 2026-03-13): Addresses universal document quality issues with clear, actionable rules — high-value for any user generating documents.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for toolchain reliability (fixing the skill-evaluation pipeline that consistently reports 0% recall) and cross-platform compatibility (Windows subprocess, encoding, and pipe handling), which together account for 7 of the top 20 most-discussed PRs and represent the single largest barrier to a functional Skill development workflow—without these fixes, the description-optimization loop that powers Skill improvement is effectively broken for all users.**

---

# Claude Code Community Digest
**Date:** 2026-07-09

## Today's Highlights

A new patch release (v2.1.205) ships with fixes for `--json-schema` parsing and session file integrity, but the community's attention remains fixed on a deepening cost crisis. Multiple high-traffic issues report token consumption accelerating 5–10× in recent weeks, with some users burning full daily quotas in under two hours. The agent ecosystem also shows growing pains—sub-agents stuck in infinite loops and background tasks that cannot be cancelled are surfacing as top concerns.

## Releases

**[v2.1.205](https://github.com/anthropics/claude-code/releases/tag/v2.1.205)** was published in the last 24 hours. Changes include:
- Added an auto-mode rule that blocks tampering with session transcript files
- Fixed `--json-schema` silently producing unstructured output when the schema was invalid
- Fixed schemas using the `format` keyword being rejected
- Fixed a message sent while Claude was working being sil

## Hot Issues

1. **[#56913 — Make autonomous Claude Code actually viable: tiered Opus brains + Sonnet workers + persistent state](https://github.com/anthropics/claude-code/issues/56913)** (43 comments, OPEN)
   The most-discussed enhancement this week. The author proposes running Claude Code as a long-lived orchestrator for pipelines, ML training, and build automation. Community is excited but skeptical about cost and reliability. This issue represents the most ambitious vision for agentic usage.

2. **[#42249 — Extreme token consumption — quota depleted in minutes](https://github.com/anthropics/claude-code/issues/42249)** (42 comments, OPEN, 👍17)
   A long-running cost complaint that continues to accumulate votes. Normal development tasks drain daily limits in ~1 hour. Users report this started weeks ago and has not been acknowledged by Anthropic. The highest-voted open bug.

3. **[#38993 — Cowork: virtiofs FUSE mount serves truncated/stale files](https://github.com/anthropics/claude-code/issues/38993)** (41 comments, OPEN, 👍28)
   Windows Cowork users cannot see host-side file changes reflected in the VM. This has been open since March with no fix, making Cowork nearly unusable on Windows for many developers.

4. **[#55053 — Sudden 5-hour session window squeeze starting Apr 29](https://github.com/anthropics/claude-code/issues/55053)** (37 comments, OPEN, 👍12)
   Session windows deplete 5–10× faster since late April. Sonnet sub-agents launched for basic file ops are blamed. Multiple users independently corroborate the timing and magnitude.

5. **[#54776 — Unexpected high API usage — 100% quota in 1-2 hours](https://github.com/anthropics/claude-code/issues/54776)** (33 comments, OPEN, 👍12)
   A 20× customer reports going from 10% quota per session to 100% in under two hours. This is the highest-severity cost report from a power user. No official response yet.

6. **[#61993 — Sub-agents cannot spawn other sub-agents](https://github.com/anthropics/claude-code/issues/61993)** (19 comments, OPEN)
   `Task`/`Agent` primitives are not exposed in nested contexts, blocking hierarchical agent architectures. Critical for anyone trying to use Claude Code as a multi-agent system.

7. **[#47930 — Agent Teams: lead session loops on idle notifications, burns ~13–22% tokens on no-op acks](https://github.com/anthropics/claude-code/issues/47930)** (6 comments, OPEN, 👍8)
   Agent Teams have a protocol-level inefficiency where idle-polling messages waste significant token budget. Has a reproduction case.

8. **[#72080 — Sub-agents stuck in infinite loops consuming excessive tokens](https://github.com/anthropics/claude-code/issues/72080)** (6 comments, OPEN)
   Sub-agents enter `<invoke...>` loops that burn tokens with no recovery. The main agent can now detect loops, but sub-agents still spiral. Represents a systemic reliability problem.

9. **[#75314 — 10 background Agent tasks stuck running for 34+ hours, no way to cancel, burned ~1M tokens](https://github.com/anthropics/claude-code/issues/75314)** (3 comments, OPEN)
   A desktop user lost ~1M tokens to zombie background agents with no cancellation mechanism. Highlights a critical missing safety feature in the agent runtime.

10. **[#75937 — Skill activation emits second `isMeta` message, orphaning tool_use → 400 error](https://github.com/anthropics/claude-code/issues/75937)** (1 comment, OPEN, 👍1)
    Filed today: skill activation intermittently kills turns with a misleading "tool use concurrency" error. The root cause appears to be a duplicate meta-message. Has a verified reproduction path.

## Key PR Progress

1. **[#75938 — fix(sweep): unstarve markStale via search API; snapshot listings before mutating](https://github.com/anthropics/claude-code/pull/75938)** (OPEN)
    Fixes a bug where `markStale` labels nothing because issue listings interleave labelable and non-labelable items. Uses the search API for more reliable pagination.

2. **[#41447 — feat: open source claude code ✨](https://github.com/anthropics/claude-code/pull/41447)** (OPEN)
    A long-open PR that would open-source the entire Claude Code codebase. Closes multiple high-profile issues (#59, #456, #2846, #22002, #41434). Community interest is high but Anthropic has not merged.

3. **[#75541 — fix(sweep): paginate issue events and honor unlabeled when closing expired issues](https://github.com/anthropics/claude-code/pull/75541)** (OPEN)
    Fixes `closeExpired()` which only fetched 100 events per issue, missing the `unlabeled` event. This could cause premature auto-closing of valid issues.

4. **[#72014 — Add protect-mcp plugin: fail-closed Cedar policy gate + signed receipts](https://github.com/anthropics/claude-code/pull/72014)** (OPEN)
    A significant security plugin that gates MCP tool calls with Cedar policies and signs offline-verifiable receipts. Blocks violations before execution rather than just warning. Could become a reference implementation for secure MCP workflows.

5. **[#68673 — fix(scripts): break pagination when page is not full, not only when empty](https://github.com/anthropics/claude-code/pull/68673)** (OPEN)
    Fixes pagination logic that could miss issues on the last full page. A small but important edge-case fix for issue management scripts.

6. **[#75537 — fix(hook-development): recognize all five hook handler types](https://github.com/anthropics/claude-code/pull/75537)** (OPEN)
    The plugin development skill only knew 2 of 5 hook handler types. This PR brings the validator and docs in line with the actual product capabilities.

7. **[#75937 (referenced in PRs) — Skill activation fix](https://github.com/anthropics/claude-code/issues/75937)**
    Not a PR itself, but the bug report includes a clear reproduction path that is likely to become a targeted fix soon.

8. **Agent loop detection improvements** (implied from inputs)
    The fix for sub-agent infinite loops is being addressed, with Claude now able to detect and break out of `<invoke...>` loops at the main agent level.

9. **Background task management** (implied from inputs)
    The stuck-agent issue (#75314) will likely drive a PR for a cancellation mechanism and token budget enforcement for background tasks.

10. **General pagination and automation fixes** (implied from PR cluster)
    Multiple PRs (#75541, #68673, #75938) all target the same `scripts/sweep.ts` infrastructure, suggesting Anthropic is hardening their issue management automation.

## Feature Request Trends

- **Autonomous Agent Orchestration (#56913, #61993, #72014):** The dominant theme. Users want Claude Code to run as a persistent, multi-tiered agent system—not just a coding assistant. Requests include persistent state, hierarchical agent spawning, and security gates for autonomous operation.
- **Session and Worktree Management (#26904, #69554, #60097):** Users strongly desire `/delete` commands, `--worktree` support in VS Code, and worktree indicators in the desktop UI. These are quality-of-life features for managing multiple parallel sessions.
- **Conversation Branching (#46451, closed):** The `/fork` feature for VS Code was closed, but the underlying need for conversation branching remains relevant to power users running long sessions.
- **Timestamp Awareness for Long Sessions (#73800):** A niche but insightful request: sessions spanning multiple days drift from the session-start date, causing the model to get dates wrong. Users want per-prompt timestamp injection.

## Developer Pain Points

1. **Cost Explosion (the dominant theme):** Multiple high-traffic issues (#42249, #55053, #54776, #47930, #72080) all describe a sudden, dramatic increase in token consumption starting late April. Users report 5–10× faster quota depletion for identical workloads. Agent Teams' idle-polling protocol and sub-agent infinite loops are identified as specific causes. The combined weight of these issues—with no official response—is eroding trust among power users.

2. **Uncancellable / Zombie Agents (#75314, #72080):** Background agent tasks can get stuck in infinite loops with no cancellation mechanism. Users are burning millions of tokens with no recourse. This is a critical safety gap in the agent runtime.

3. **Windows Cowork Reliability (#38993, #45178, #68354):** Three distinct bugs plague Windows Cowork users: stale virtiofs mounts, cross-device link errors with OneDrive, and stray tokens corrupting tool calls. These have been open for months with no resolution.

4. **Windows Drive-Letter Canonicalization (#75855):** Case-sensitive project keys on Windows cause duplicate configuration entries and dropped VS Code trust. A subtle but painful file-system integration bug.

5. **Surrogate / UTF-8 Encoding Errors (#64777, #69781):** A recurring class of "surrogates not allowed" API errors when attaching images or sending messages. Affects both Windows and macOS, suggesting a systemic encoding issue in the request pipeline.

6. **Transient API Errors with No Recovery (#60577, closed):** While marked closed, the underlying UX failure—529 Overloaded errors aborting long-running tasks with no retry—remains a pain point for users running long sessions or agent workflows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-07-09

A digest of the most impactful updates from the openai/codex repository over the last 24 hours.

---

## Today's Highlights
Two Rust alpha releases (v0.144.0-alpha.1 & v0.144.0-alpha.2) landed without packaging notes, while a critical CLI regression in v0.143.0 is generating widespread community reports: GPT-5.5 tool calls are failing across platforms because the model is sending self-referential duplicate tool names (e.g., `exec_commandexec_command`). Separately, a systemic billing regression is draining paid account rate limits after a single prompt, prompting multi-account incident reports. On the PR side, the team is actively shipping telemetry standardization and HTTP proxy unification fixes.

---

## Releases
- **rust-v0.144.0-alpha.1** and **rust-v0.144.0-alpha.2** – Two consecutive Rust alpha releases. No changelog details are available. Likely ahead-of-publication builds for the broader v0.144.0 cycle.
  - [rust-v0.144.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.144.0-alpha.2)
  - [rust-v0.144.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.144.0-alpha.1)

---

## Hot Issues (Top 10 by Community Interest)

1. **[#28224](https://github.com/openai/codex/issues/28224) – Codex SQLite feedback logs can write ~640 TB/year**  
   *Bug / CLI / Performance* – 142 comments, 427 👍. This alarming disk-endurance issue was mostly fixed by three merged PRs (v0.142.0) that eliminated ~85% of log volume. Originally opened by 1996fanrui; the author plans to close after confirming the fix. Important for anyone running Codex CLI on SSDs.

2. **[#8745](https://github.com/openai/codex/issues/8745) – LSP integration (auto-detect + auto-install) for Codex CLI**  
   *Enhancement / Agent* – 55 comments, 407 👍. The community’s top feature request: embed Language Server Protocol support so Codex CLI can leverage real-time diagnostics and symbol intelligence. Would dramatically improve code generation quality.

3. **[#28969](https://github.com/openai/codex/issues/28969) – Add setting to disable 60-second auto-resolve for questions**  
   *Bug / Enhancement / CLI* – 13 comments, 92 👍. Users want explicit control over when Codex auto-resolves follow-up questions. Currently the 60-second timeout can preempt ongoing user input, breaking workflows.

4. **[#31665](https://github.com/openai/codex/issues/31665) – GPT-5.5 sends self-referential tool names ("exec_commandexec_command")**  
   *Bug / Tool-calls* – 7 comments, 6 👍. Critical regression: GPT-5.5 prepends its own namespace to built-in tool call names, causing all shell commands to fail. Affects macOS, Linux, and Windows (see siblings #31611, #31639, #31697, #31702). The most active bug cluster today.

5. **[#31611](https://github.com/openai/codex/issues/31611) – Amazon Linux 2023: exec_command fails in v0.143.0**  
   *Bug / CLI* – 8 comments, 5 👍. Downgrading to v0.140.0 restores functionality. Likely same root cause as #31665.

6. **[#31639](https://github.com/openai/codex/issues/31639) – Windows 11: shell_command fails with "shell_commandshell_command"**  
   *Bug / CLI / Windows* – 4 comments, 6 👍. Windows-specific duplicate tool name bug. Users on Windows 11 unable to execute any shell commands.

7. **[#31520](https://github.com/openai/codex/issues/31520) – `codex update` fails: "Could not find Codex package or platform npm release assets"**  
   *Bug / CLI* – 12 comments, 24 👍. The CLI’s own update mechanism broken for some users, preventing patch adoption.

8. **[#31668](https://github.com/openai/codex/issues/31668) – Multiple paid accounts: limits drain after one prompt**  
   *Bug / Rate-limits* – 3 comments (growing). Systemic billing regression affecting Plus/Pro accounts. Company monthly credits burned in a single day. High severity for paying users.

9. **[#26860](https://github.com/openai/codex/issues/26860) – GPT-5.5 via Amazon Bedrock stops mid-task**  
   *Bug / CLI / AWS Bedrock* – 8 comments, 5 👍. Models on Bedrock (both GPT-5.4 and GPT-5.5) halt automatically mid-task without obvious errors. Impacts enterprise deployments.

10. **[#15368](https://github.com/openai/codex/issues/15368) – Increase cap of sessions in VS Code extension**  
    *Enhancement / Extension* – 16 comments, 5 👍. Users hitting hard session limits in the VS Code extension, requesting either higher caps or configurable limits.

---

## Key PR Progress (Top 10)

1. **[#31684](https://github.com/openai/codex/pull/31684) – Update models.json**  
   Automated daily refresh of the model catalog. Signals active model inventory management.

2. **[#31596](https://github.com/openai/codex/pull/31596) – Use image generation extension by default**  
   Merged. Cuts over to extension-backed image generation, unifying the implementation path while preserving the existing feature toggle.

3. **[#31686](https://github.com/openai/codex/pull/31686) – Filter optional file fields by tool schema (Codex Apps)**  
   Prevents redundant `mime_type` and `file_name` fields from being sent when the model’s tool schema omits them. Cleans up MCP tool payloads.

4. **[#31254](https://github.com/openai/codex/pull/31254) – Mention alternative installer options after rate limits**  
   When the standalone installer hits GitHub rate limits, users will now see CLI installation alternatives—helpful for CI environments.

5. **[#31176](https://github.com/openai/codex/pull/31176) – Retry goals after model capacity errors**  
   Active goals currently stop on any error. This PR makes them retry on model-capacity failures, which don’t consume user tokens, avoiding unnecessary user intervention.

6. **[#30131](https://github.com/openai/codex/pull/30131) – Add thread_history SQLite and initial migration**  
   Code-reviewed. Adds the schema for paginated local thread history—foundation for a more scalable conversation view.

7. **[#31687](https://github.com/openai/codex/pull/31687) – Standardize JSON-RPC request spans**  
   Adds `rpc.system`, `rpc.method`, and `rpc.request_id` to both client and server OTEL spans, making tracing across exec-server calls consistent with app-server.

8. **[#31694](https://github.com/openai/codex/pull/31694) – Allow plugin installs for backend dependency IDs**  
   Enables resolution of exact backend plugin IDs not listed in `recommended_plugins`. Useful for plugin developers and enterprise setups.

9. **[#31361](https://github.com/openai/codex/pull/31361) – Route model discovery through HTTP client factory**  
   Code-reviewed. Ensures model catalog refreshes respect `features.respect_system_proxy`, fixing a proxy-bypass gap.

10. **[#31681](https://github.com/openai/codex/pull/31681) – Move reasoning effort to step context**  
    Merged. Enables per-step reasoning effort changes rather than freezing the value at turn start. Prepares for dynamic reasoning control.

---

## Feature Request Trends

1. **LSP Integration (#8745, 407 👍)** – The most-requested feature. Users want Codex CLI to auto-detect and auto-install language servers for real-time diagnostics and smarter code generation. No strong alternative exists on the roadmap.

2. **Topic-Based Memory (#19758)** – A memory architecture modeled after Claude Code’s `memdir`, with agent-initiated writes and a `/memory` slash command. Users want modular, searchable memory over a monolithic `memory_summary.md`.

3. **Computer Use from CLI (#20851, 12 👍)** – First-class support for Computer Use in the CLI (currently desktop-only via MCP helper). Important for headless automation pipelines.

4. **Increased Session Caps (#15368, 5 👍)** – VS Code extension users hitting artificial caps. Request for either adjustable limits or removal of the cap for Pro/Enterprise tiers.

5. **JetBrains Feature Parity (#22648)** – Users requesting `/plan` and `/goal` commands for the JetBrains extension, noting the gap between CLI and IDE plugin capabilities.

---

## Developer Pain Points

- **v0.143.0 CLI Regression (Cluster #31665, #31611, #31639, #31697, #31702)** – GPT-5.5 tool call duplication is the most disruptive issue this week, affecting macOS, Windows, and Linux. Multiple duplicate reports indicate wide impact. No fix merged yet.
- **Rate Limit / Billing Regression (#31668, #31606, #31682)** – At least three separate accounts reporting that paid credits drain unpredictably. The team needs to isolate whether this is a server-side quota bug or a client-side over-consumption issue.
- **SQLite Log Bloat (#28224)** – While partially fixed, the issue underscores the need for configurable log verbosity or log rotation defaults. 640 TB/year is a showstopper for users on limited-wear SSDs.
- **macOS 27 Beta Compatibility (#31364, #31671)** – At least two reports of WebSocket initiation failures and task submission errors on the latest macOS beta. Early adoption of new OS versions breaking connectivity.
- **Windows UI Freeze (#31676, #31444)** – The Windows desktop app hangs after typing a prompt. Users report Explorer and IME are also affected, suggesting a deep platform layer issue.

---

*Generated from openai/codex GitHub data. All links point to publicly accessible issues and pull requests.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-09

## Today's Highlights
Today marks a significant release day with **v0.51.0-preview.0** and **v0.50.0** shipping. The community is closely watching a long-running **subagent recovery bug** (#22323) where agents falsely report success after hitting turn limits, hiding actual interruptions. Security hardening is a major theme today, with PRs addressing **supply chain RCE vulnerabilities** in CI workflows and an **RCE in the A2A server** component.

---

## Releases

### v0.51.0-preview.0
- **Changelog** for v0.50.0-preview.1 prepared
- Fix for `no_proxy` test reliability
- Nightly version bump to `0.51.0-nightly.20260625.g3fbf93e26`

### v0.50.0
- Fixes for release verification (NPM CI ignore scripts, workspace binary shadowing)
- **Feature: Tool Registry** — a new architectural component for tool management

📎 [v0.50.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.50.0) | [v0.51.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-preview.0)

---

## Hot Issues

### 1. #22323 — Subagent falsely reports GOAL success after MAX_TURNS
**Priority: P1 | Comments: 10 | 👍: 2**
The `codebase_investigator` subagent reports `"success"` with `Termination Reason: "GOAL"` even when it hit the maximum turn limit before doing any real analysis. This masks actual failures and misleads users and orchestrators.
📎 [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### 2. #21409 — Generalist agent hangs indefinitely
**Priority: P1 | Comments: 7 | 👍: 8**
When Gemini CLI defers to the generalist agent, it hangs forever on simple tasks like folder creation. Users report waiting up to an hour. Workaround: instructing the model not to use sub-agents. This is the most upvoted open issue.
📎 [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### 3. #25166 — Shell command "Waiting input" after completion
**Priority: P1 | Comments: 4 | 👍: 3**
After executing simple CLI commands, Gemini hangs showing "Awaiting user input" even though the command has finished. Blocking for users relying on shell execution workflows.
📎 [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

### 4. #24353 — Need robust component-level evaluations
**Priority: P1 | Comments: 7**
An epic tracking the need for systematic behavioral eval tests. Currently have 76 tests across 6 Gemini models, but the infrastructure needs hardening to catch regressions earlier.
📎 [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

### 5. #22745 — AST-aware file reads, search, and mapping
**Priority: P2 | Comments: 7 | 👍: 1**
Investigating whether AST-aware tools can reduce token usage, improve precision in method reading, and enable better codebase navigation. Could significantly improve agent efficiency.
📎 [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

### 6. #21968 — Gemini underuses skills and sub-agents
**Priority: P2 | Comments: 6**
Even when custom skills are defined (e.g., Gradle, Git), Gemini rarely invokes them autonomously. Users must explicitly instruct it to use skills, defeating the purpose of autonomous agent behavior.
📎 [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

### 7. #26522 — Auto Memory retries low-signal sessions forever
**Priority: P2 | Comments: 5**
The Auto Memory system repeatedly surfaces low-signal sessions for processing because it only marks sessions as processed when the extraction agent successfully reads them. Sessions deemed "low-signal" are never marked, causing infinite retries.
📎 [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

### 8. #21983 — Browser subagent fails on Wayland
**Priority: P1 | Comments: 4 | 👍: 1**
The browser subagent crashes on Wayland display servers with a vague termination reason. Linux users on modern distros are affected.
📎 [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

### 9. #24246 — 400 error with >128 tools
**Priority: P2 | Comments: 3**
When more than 128 tools are available, Gemini CLI returns a 400 error. Users expect the agent to intelligently scope available tools rather than fail.
📎 [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

### 10. #22672 — Agent performs destructive operations
**Priority: P2 | Comments: 3 | 👍: 1**
The agent occasionally uses `git reset --force` or similar destructive commands when safer alternatives exist. Users want built-in safeguards for database and version control operations.
📎 [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

---

## Key PR Progress

### 1. #28328 — Fix false 401 authentication errors
**Size: S | New Today**
`isAuthenticationError` was matching any string containing "401", flagging port numbers or line numbers as authentication failures. Now uses proper regex boundaries.
📎 [PR #28328](https://github.com/google-gemini/gemini-cli/pull/28328)

### 2. #28327 — Fix percent-decoding in resolveToRealPath
**Priority: P2 | Size: S | New Today**
Filenames containing `%` followed by hex digits (e.g., `report%202026.txt`) were being corrupted by unconditional `decodeURIComponent`. Now only decodes `file://` URLs.
📎 [PR #28327](https://github.com/google-gemini/gemini-cli/pull/28327)

### 3. #28232 — Fix supply chain RCE in CI eval workflow
**Size: L | Open**
Fixes a critical vulnerability where `pull_request_target` allowed malicious fork code to access `GEMINI_API_KEY` and `GITHUB_TOKEN`. Splits workflow into `pull_request` + `workflow_run`.
📎 [PR #28232](https://github.com/google-gemini/gemini-cli/pull/28232)

### 4. #28319 — Enforce workspace trust in A2A server to prevent RCE
**Size: M | Open**
Fixes zero-click RCE vulnerability (b-519269096) in the A2A server backend. Refactors startup sequence to enforce workspace trust checks before environment loading.
📎 [PR #28319](https://github.com/google-gemini/gemini-cli/pull/28319)

### 5. #28164 — Limit recursive reasoning turns to 15
**Size: M | Open**
Implements a hard cap of 15 recursive reasoning turns per user request to prevent infinite loops that consume CPU and API credits. Customizable via `maxSessionTurns`.
📎 [PR #28164](https://github.com/google-gemini/gemini-cli/pull/28164)

### 6. #28316 — Fix A2A task cancellation ghost executions
**Size: M/L | Open**
Fixes critical bug where canceling a task didn't terminate the execution stream, causing ghost executions. Also addresses race conditions, memory leaks, and an unhandled exception vulnerability.
📎 [PR #28316](https://github.com/google-gemini/gemini-cli/pull/28316)

### 7. #28223 — Bypass LLM correction for JSON/IPYNB file writes
**Size: M | Open**
Resolves corruption of `.ipynb` and `.json` files by `write_file` and `replace` tools. Skips LLM-based correction for these structured formats to prevent data corruption.
📎 [PR #28223](https://github.com/google-gemini/gemini-cli/pull/28223)

### 8. #28126 — Show ellipsis on multi-line edit snippets
**Priority: P2 | Size: M | Closed**
`EditToolInvocation.getDescription()` now appends `...` when snippets hide content. Prevents multi-line edits with short first lines from looking like single-line changes.
📎 [PR #28126](https://github.com/google-gemini/gemini-cli/pull/28126)

### 9. #28310 — Fix trailing period in Antigravity URL
**Priority: P2 | Size: S | Help Wanted**
Removes trailing period from `https://antigravity.google.` in auth error messages. Small but visible UX fix.
📎 [PR #28310](https://github.com/google-gemini/gemini-cli/pull/28310)

### 10. #28309 — Improve CJK text rendering and __bold__ syntax
**Size: M | Open**
Fixes hard line-wrapping for Chinese/Japanese/Korean text by improving the terminal Markdown renderer. Also fixes `__bold__` syntax rendering.
📎 [PR #28309](https://github.com/google-gemini/gemini-cli/pull/28309)

---

## Feature Request Trends

1. **AST-Aware Code Understanding** — Multiple issues (#22745, #22746) request AST-aware file reads, search, and codebase mapping to reduce token usage and improve precision.

2. **Agent Skill/Sub-Agent Adoption** — Users want Gemini to autonomously use custom skills and sub-agents without explicit prompting (#21968, #21000). The current behavior defeats the purpose of defining them.

3. **Safety Guardrails** — Requests for built-in protections against destructive commands (git force, DB modifications) and better awareness of dangerous operations (#22672, #22267).

4. **Memory System Quality** — Improvements to Auto Memory to avoid infinite retries, handle invalid patches properly, and redact secrets before sending to the model (#26522, #26523, #26525).

5. **Sub-Agent Visibility** — Users want to see sub-agent trajectories via `/chat share` and in bug reports to better debug agent behavior (#22598, #21763).

---

## Developer Pain Points

1. **Agent Reliability** — The top frustration remains agents hanging indefinitely (#21409), falsely reporting success (#22323), or getting stuck on interactive prompts (#22465). These make the tool unreliable for unattended workflows.

2. **Shell Execution Issues** — Commands finishing but showing "Waiting input" (#25166), or getting stuck at prompts (#22465). Core workflow breaking.

3. **Configuration Ignored** — Browser agent ignores `settings.json` overrides (#22267), sub-agents activate despite being disabled in config (#22093). Users feel their configuration is not respected.

4. **Too Many Tools = Failure** — Hitting 400 errors when >128 tools are available (#24246) is a hard limit that prevents users from having rich tool ecosystems.

5. **Multi-Platform Gaps** — Wayland support remains broken for browser agent (#21983), and terminal resize performance is poor (#21924). Developers on Linux and large monitors are affected.

6. **Cleanup Overhead** — The agent creates temporary scripts in random directories, making workspace cleanup difficult (#23571).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-09

## Today's Highlights

The Copilot CLI community is seeing several long-running issues gain renewed attention, particularly around **automated model switching** for planning vs. execution (#2792) and **macOS Gatekeeper blocks** on every Homebrew upgrade (#970). Two new triage issues were filed today targeting **model family aliases** and **settings.json model application** at startup (#4067, #4068), signaling growing interest in model-flexible workflows. No new releases were shipped in the last 24 hours.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues (10 selected)

1. **[#618 — Feature Request: Support custom slash commands from .github/prompts directory](https://github.com/github/copilot-cli/issues/618)** (CLOSED)  
   *99 👍, 32 comments — the most-upvoted issue on the board*  
   Proposes aligning CLI slash-command loading with the VS Code extension, reading from `.github/prompts/`. Community appetite is extremely high; the 99 reactions against a closed issue suggests users want this back on the roadmap.

2. **[#970 — Copilot app blocked by macOS Gatekeeper under corporate security policy](https://github.com/github/copilot-cli/issues/970)** (OPEN)  
   *21 👍, 6 comments*  
   Every Homebrew upgrade triggers "Apple could not verify 'copilot' is free of malware", forcing manual approval. Pervasive pain for macOS users in managed environments; may delay enterprise rollouts.

3. **[#2792 — Automatic switching between model for planning and execution](https://github.com/github/copilot-cli/issues/2792)** (OPEN)  
   *14 👍, 4 comments*  
   Wants a configurable "planner model" + "executor model" pair, like a cheaper/faster model for planning and a more capable one for code generation. A common power-user request as model diversity grows.

4. **[#3158 — Plan→Compact→Re-Plan infinite loop (217 cycles, zero execution)](https://github.com/github/copilot-cli/issues/3158)** (CLOSED)  
   *0 👍, 4 comments — high severity report from Akhi-microsoft*  
   Filed alongside eight duplicates (#3144–#3157) describing the same agent auto-compaction bug. The agent re-reads the compaction summary and re-plans instead of executing, burning entire sessions. Now closed, but the volume of duplicates signals it was a major regressions.

5. **[#4059 — /models does not show extended context pricing](https://github.com/github/copilot-cli/issues/4059)** (OPEN)  
   *1 comment*  
   In `/models`, extended-context options (1M blue badge) have no UI to reveal pricing. Enter, space, right arrow all fail. Minor UX bug but blocks cost-aware model selection.

6. **[#4016 — BYOK (COPILOT_PROVIDER_*) still rejected in --acp mode](https://github.com/github/copilot-cli/issues/4016)** (OPEN)  
   *2 👍, 1 comment*  
   Regressed through v1.0.61–1.0.68: custom providers work in `-p` mode but `--acp --stdio` still forces GitHub OAuth. Blocks headless/CI usage for BYOK customers; similar to previously "fixed" #3048 and #3902.

7. **[#4067 — `model` field in `settings.json` is not applied on startup](https://github.com/github/copilot-cli/issues/4067)** (OPEN, filed today)  
   *0 comments yet*  
   Despite having a valid top-level `"model"` in `settings.json`, sessions always fall back to `claude-sonnet-5`. The `/model` picker writes the same key, so save/load round-trip is broken.

8. **[#4068 — Allow specifying a model *family* (e.g. `opus`, `sonnet`, `fable`)](https://github.com/github/copilot-cli/issues/4068)** (OPEN, filed today)  
   *0 comments yet*  
   Pinning an exact version (`claude-opus-4.8`) forces manual edits on every model release. Requests a family-level alias (`opus`, `sonnet`) that always resolves to the latest stable build. Follows Anthropic's fast-release cadence (4.5→4.6→4.7→4.8).

9. **[#4054 — /resume broken for all non-git sessions](https://github.com/github/copilot-cli/issues/4054)** (OPEN)  
   *1 comment*  
   Sessions created outside a git repo store `repository = '/'`, so the resume picker's git gate makes them impossible to select. Also cross-session context is lost on resume. A catch-22 that blocks quick context recovery for non-project work.

10. **[#2112 — Stale keytar (OS keychain) entries cause repeated browser OAuth popups](https://github.com/github/copilot-cli/issues/2112)** (OPEN)  
    *1 👍, 1 comment*  
    HTTP MCP servers trigger OAuth on every launch because expired tokens in the OS keychain override valid file-cached tokens. Degraded UX for MCP-heavy workflows.

---

## Key PR Progress (2 open PRs)

1. **[PR #4057 — Install](https://github.com/github/copilot-cli/pull/4057)** (OPEN, filed yesterday)  
   *By EverydayEvertime*  
   No description provided. Likely an installation docs or script update. Low detail—watch for merge to see actual change.

2. **[PR #3708 — Add files via upload](https://github.com/github/copilot-cli/pull/3708)** (OPEN, 1 month old)  
   *By panchofrancisco1987-ui*  
   Stale PR with no description. Appears to be a direct file upload—probably not a feature PR. Low signal unless revived.

*No active PRs of high technical significance this week. The repo's main development likely occurs in internal branches.*

---

## Feature Request Trends

1. **Custom Slash Commands from `.github/prompts/`** (#618, 99 👍)  
   The single highest-reacted issue. Users want to define project-specific context prompts the same way they do in VS Code. Likely blocked by architectural decisions in the CLI's prompt-loading pipeline.

2. **Model Family Aliases** (#4068)  
   Fresh request for `model: "opus"` to auto-resolve to latest `claude-opus-4.x`. Reflects frustration with Anthropic's fast version churn. Paired with #4067 (settings.json model not honored), this points to a broader desire for **declarative, version-agnostic model configuration**.

3. **Planner/Executor Model Split** (#2792, 14 👍)  
   Let users route planning to a cheaper/faster model and code generation to a premium model. Drives cost optimization for heavy sessions. Could become a flagship feature if model pricing remains tiered.

4. **Configurable Resume Hint Display** (#4066)  
   After #3128 fixed session ID ambiguity, users with renamed sessions want the human-readable name shown instead of alphanumeric IDs. Minor UX but frequent ask.

---

## Developer Pain Points

- **Agent Planning Loops After Compaction** (#3158 + 8 duplicates)  
  The most disruptive bug in recent history. Auto-compaction misroutes agent state back to "plan" instead of "execute", resulting in 200+ planning cycles with zero file edits. Now closed, but the sheer volume of duplicate reports (9 issues from the same author) suggests the fix should be verified thoroughly.

- **macOS Gatekeeper Blocks** (#970, 21 👍)  
  Every Homebrew update forces manual approval in System Settings. In corporate environments where `spctl` is disabled or tightly managed, this blocks automatic updates and can lock users out entirely.

- **BYOK/Custom Provider Auth in Headless Mode** (#4016, regressed into v1.0.68)  
  Custom providers via `COPILOT_PROVIDER_*` work in interactive mode but fail in `--acp --stdio`. This is a second regression of the same class (#3048, #3902). Critical for CI/CD pipelines and air-gapped environments.

- **Session Resume Broken Outside Git Repos** (#4054)  
  `repository = '/'` prevents selection in the resume picker. Blocks quick context recovery for ad-hoc scripts, scratch files, or any work done outside a Git working tree.

- **Stale Keychain Entries Causing Repeated OAuth** (#2112)  
  Expired tokens in the OS keychain override valid file-cached tokens, triggering browser popups on every MCP server launch. Wastes developer time and breaks headless/SSH sessions.

---

*Data snapshot: 2026-07-09, sourced from github.com/github/copilot-cli issues, PRs, and releases. 43 total issues updated in last 24h.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-07-09  
**Source:** github.com/MoonshotAI/kimi-cli

---

## Today's Highlights

No new releases or merged PRs were published in the last 24 hours. The community's primary attention remains on a long-standing SSL certificate handling issue (#2458), where enterprise antivirus software is interfering with CLI authentication. The lack of new releases suggests the team is likely preparing a more substantial update or working on internal milestones.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

Only one issue was updated in the last 24 hours. Below is the full detail:

### #2458 [OPEN] Add option to ignore SSL certificate
- **Author:** dmorsin
- **Created:** 2026-06-17 | **Updated:** 2026-07-08 | **Comments:** 2 | 👍: 0
- **Link:** [Issue #2458](https://github.com/MoonshotAI/kimi-cli/issues/2458)
- **Why it matters:** This issue highlights a blocking scenario for enterprise users whose organization enforces SSL inspection via MitM certificates. The user cannot authenticate because the CLI rejects the antivirus-generated certificate. The request for an `--ignore-ssl` flag or a custom CA bundle option is a common enterprise pain point. With only 2 comments and 0 upvotes, the community reaction has been muted, but the use case is critical for adoption behind corporate proxies.

---

## Key PR Progress

No pull requests were updated in the last 24 hours.

---

## Feature Request Trends

Given the single active issue, the most prominent trend is:

- **SSL/TLS flexibility for enterprise environments:** Users need the ability to bypass certificate validation or provide a custom CA bundle to work with organizational security tools (e.g., antivirus MITM proxies, corporate firewalls). This is a classic "tool adoption blocker" for CLI tools targeting developer workstations behind managed networks.

---

## Developer Pain Points

From the one active issue and the broader context of the kimi-cli ecosystem:

- **Enterprise network compatibility:** The inability to configure SSL handling (ignore, custom CA, or insecure flag) is a recurring frustration for developers in large organizations. This is not unique to Kimi CLI but is a high-friction point for any CLI tool that makes outbound HTTPS calls for authentication or API access.
- **Slow response to blocking issues:** The issue has been open for 22 days with only 2 comments and no maintainer response visible in the update. For a tool targeting developer productivity, unaddressed enterprise blocking issues can stall adoption within larger teams.

---

*Digest generated automatically based on GitHub activity data.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-09

## Today's Highlights

A major batch of 12 targeted PRs from HOYALIM landed today, fixing long-standing issues around project initialization, session state management, VCS performance, and skill discovery. Meanwhile, the community continues pushing for better multi-LLM orchestration, deeper MCP integration, and expanded provider support as seen in feature requests for Omniroute, Z.AI, and structured multi-agent debate.

## Releases

No new releases in the last 24 hours.

## Hot Issues

### 1. [#36010 — Z.AI provider docs gap: MCP setup, vision routing, cost guard](https://github.com/anomalyco/opencode/issues/36010)
*Created today, 4 comments.* The community flags that Z.AI's documentation lags behind providers like Amazon Bedrock and GitLab Duo — missing config examples, env vars, and auth options. This is a bottleneck for users trying to adopt Z.AI's GLM Coding Plan.

### 2. [#22100 — WHY is OpenCode running pip3 with this configuration?](https://github.com/anomalyco/opencode/issues/22100)
*11 comments, closed.* A sharp security concern: OpenCode v1.4.3's TUI is running `pip3 installs` despite a "permissive read-only" configuration. Users are questioning why the tool feels entitled to modify system software.

### 3. [#20045 — edit permission uses relative paths but external_directory uses absolute paths](https://github.com/anomalyco/opencode/issues/20045)
*10 comments, closed.* A subtle but critical path-resolution inconsistency: `edit` permissions silently fail to match when absolute path patterns are used, while `external_directory` works correctly. This breaks agent-level permission rules for users with complex directory structures.

### 4. [#25790 — opencode can't start up, got 400 empty response code](https://github.com/anomalyco/opencode/issues/25790)
*6 comments, closed.* NixOS users hitting a 400 empty response on `GET http://opencode.internal/provider` at startup. The error provides zero context — a classic "black box" failure that's hard to debug.

### 5. [#26180 — Windows desktop local sessions can hang/terminate on exact-file tasks](https://github.com/anomalyco/opencode/issues/26180)
*6 comments, closed.* On Windows Desktop 1.14.40, local sessions targeting specific Excel files (`Slot.xlsx`) hang due to glob `NotFoundError` and undici termination — even when the user supplies an exact absolute path.

### 6. [#25766 — Multi-LLM structured team debate — design reference from working implementation](https://github.com/anomalyco/opencode/issues/25766)
*4 comments, closed. 0 👍.* A feature request with a working fork (Conclave) that adds structured multi-LLM debate to OpenCode. The author provides a full reference implementation, signaling strong demand for orchestrated agent teams.

### 7. [#25947 — Add Omniroute provider with dynamic model discovery](https://github.com/anomalyco/opencode/issues/25947)
*4 comments, closed. 2 👍.* Omniroute is an OpenAI-compatible gateway that exposes user-deployed models via OpenAI API. Adding it as a built-in provider would give OpenCode users dynamic model discovery without manual configuration.

### 8. [#15108 — session_list returns empty despite sessions existing in database](https://github.com/anomalyco/opencode/issues/15108)
*6 comments, closed. 2 👍.* A persistent bug where `session_list` returns empty arrays even though sessions exist in SQLite. Highly voted by the community — likely affecting many users' workflow continuity.

### 9. [#26498 — DeepSeek tool calls can use malformed argument JSON](https://github.com/anomalyco/opencode/issues/26498)
*4 comments, closed.* DeepSeek models sometimes produce malformed tool-call arguments — placeholder values like `null`, `""`, `{}`, `[]`, or string-encoded arrays. This is a thorny model compatibility issue that requires input sanitization.

### 10. [#25131 — Desktop: switching servers can restore stale session IDs and crash](https://github.com/anomalyco/opencode/issues/25131)
*3 comments, closed. 3 👍.* OpenCode Desktop persists `lastProjectSession` across servers; switching servers can restore a stale session ID that doesn't exist on the new server, causing a hard UI crash with `Session not found`.

## Key PR Progress

### 1. [#36008 — fix(core): restore explore shell access](https://github.com/anomalyco/opencode/pull/36008)
*Opened today by kitlangton.* Restores V1 parity by allowing the built-in Explore agent to use the renamed V2 `shell` action. Includes a regression test for `git status` permission evaluation.

### 2. [#36005 — feat(core): generalize session input inbox](https://github.com/anomalyco/opencode/pull/36005)
*Opened and closed today by kitlangton.* Models user and synthetic messages as variants in one durable Session input lifecycle, flattening `session.prompt()` and `session.synthetic()` with matching delivery, retry, and wake semantics.

### 3. [#36003 — fix(models): fall back when catalog refresh stalls](https://github.com/anomalyco/opencode/pull/36003)
*Opened today by HOYALIM. Closes #35294.* `models.dev` catalog loading could block startup while remote fetch or cache lock stalled. Makes `get()` return cached/default model metadata when refresh stalls, preventing startup hangs.

### 4. [#36002 — fix(session): settle busy status after stream close](https://github.com/anomalyco/opencode/pull/36002)
*Opened today by HOYALIM. Closes #35472.* After a prompt stream closes, session status could remain stuck on "busy" until a later update. This fix ensures the status settles immediately after the runner finishes.

### 5. [#36000 — fix(app): cap prompt history attachments](https://github.com/anomalyco/opencode/pull/36000)
*Opened today by HOYALIM. Closes #34215.* Prompt history was persisting inline data URLs from attachments, causing global persisted state to grow by megabytes. Caps attachment sizes to prevent memory bloat.

### 6. [#36001 — fix(session): preserve cache prefix across mode switch](https://github.com/anomalyco/opencode/pull/36001)
*Opened today by HOYALIM. Closes #35708.* Switching modes changed the provider system prompt prefix, reducing prefix-cache locality for cached providers. Now preserves the prefix across mode switches for better caching efficiency.

### 7. [#35999 — fix(session): separate active context tokens from usage totals](https://github.com/anomalyco/opencode/pull/35999)
*Opened today by HOYALIM. Closes #30649 & #34712.* The context meter was mixing active context size with cumulative usage totals — large cache-read totals could make the context meter appear full. Now cleanly separated.

### 8. [#35998 — fix(tui): avoid duplicate project initialization](https://github.com/anomalyco/opencode/pull/35998)
*Opened today by HOYALIM. Closes #32161.* Concurrent project loads for the same directory could initialize the project multiple times when separate `InstanceStore` services raced. Now serializes initialization per directory.

### 9. [#35997 — fix(vcs): batch untracked diff checks](https://github.com/anomalyco/opencode/pull/35997)
*Opened today by HOYALIM. Closes #34916.* When a repository has no HEAD, VCS diff collection handled each untracked file separately. Batching reduces overhead for repos with many untracked files.

### 10. [#35996 — fix(skill): avoid symlink traversal during discovery](https://github.com/anomalyco/opencode/pull/35996)
*Opened today by HOYALIM. Closes #27027 & #27638.* External skill discovery under `.claude` and `.agents` could traverse symlinked directories, causing startup vulnerabilities. Now avoids symlink traversal.

## Feature Request Trends

- **Multi-LLM orchestration**: There's growing demand for structured multi-model debates ([#25766](https://github.com/anomalyco/opencode/issues/25766)), runtime model overrides for subagents ([#17595](https://github.com/anomalyco/opencode/issues/17595)), and cross-model collaboration patterns.
- **Provider expansion**: Users want first-class support for Omniroute ([#25947](https://github.com/anomalyco/opencode/issues/25947)), Z.AI with GLM coding ([#36010](https://github.com/anomalyco/opencode/issues/36010)), and more comprehensive docs for all providers.
- **MCP server configuration UI**: Multiple requests ([#26429](https://github.com/anomalyco/opencode/issues/26429)) for an in-app panel to configure MCP servers rather than editing config files manually.
- **External tool integration**: A Chinese-language feature request ([#26541](https://github.com/anomalyco/opencode/issues/26541)) proposes a QQ bot bridge to control OpenCode, suggesting demand for messaging platform integrations.

## Developer Pain Points

- **Path resolution inconsistencies**: The `edit` permission vs. `external_directory` path mismatch ([#20045](https://github.com/anomalyco/opencode/issues/20045)) highlights a deep-seated issue where internal path handling is not uniform, breaking agent-level permission rules.
- **Session state corruption**: Multiple issues ([#15108](https://github.com/anomalyco/opencode/issues/15108), [#25131](https://github.com/anomalyco/opencode/issues/25131), [#23903](https://github.com/anomalyco/opencode/issues/23903)) describe sessions disappearing, stale session IDs crashing the UI, or inability to resume sessions — signaling systemic reliability concerns.
- **Startup and initialization failures**: The empty 400 response ([#25790](https://github.com/anomalyco/opencode/issues/25790)) and concurrent project initialization ([#32161](https://github.com/anomalyco/opencode/issues/32161)) reflect fragile startup sequences that fail silently.
- **Model compatibility issues**: DeepSeek's malformed tool-call JSON ([#26498](https://github.com/anomalyco/opencode/issues/26498)) and the Bedrock proxy cache key issue ([#25984](https://github.com/anomalyco/opencode/issues/25984)) indicate OpenCode's provider abstraction layer doesn't uniformly handle model-specific quirks.
- **Desktop vs. terminal parity**: The VSCode extension keyboard shortcut conflict ([#26519](https://github.com/anomalyco/opencode/issues/26519)) and Safari file picker non-responsiveness ([#26501](https://github.com/anomalyco/opencode/issues/26501)) show the desktop/web UI still lagging behind the TUI experience.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-09

## Today's Highlights

A burst of patching activity hit the ecosystem today, with 15 closed issues and 7 merged PRs addressing bugs exposed in v0.80.3. The most impactful fixes target clipboard failures on Linux, Gemini multi-turn crashes through proxies, and a wave of session lifecycle regressions — including a dangerous double-fork bug and compaction edge cases in the coding agent. Meanwhile, a new PR adds prompt cache miss tracking, giving developers visibility into one of the most opaque performance problems in long-running sessions.

## Releases

No new versions were published in the last 24 hours.

## Hot Issues

**1. [#6434 — Fix empty reasoning content TUI render for OpenAI models](https://github.com/earendil-works/pi/issues/6434)**  
Closed. OpenAI Responses replay emits empty thinking blocks. The fix strips provider-inserted comment markers while preserving signed reasoning items for replay. Community reaction: positive (1 👍), merged swiftly.

**2. [#6414 — streamProxy drops ToolCall.thoughtSignature — Gemini multi-turn tool calls 400 through a proxy](https://github.com/earendil-works/pi/issues/6414)**  
Closed. Critical: `streamProxy` discards `thoughtSignature` on tool calls, causing Gemini 400 errors on second turn. Any team using a proxy between Pi and Gemini would hit this immediately. 3 comments, quick fix shipped.

**3. [#6321 — /fork spawns one extra session per Enter while the fork is running](https://github.com/earendil-works/pi/issues/6321)**  
Closed. UX bug: pressing Enter in fork selector creates duplicate sessions because the selector isn't closed before `fork()` awaits. Confirmed in core (no extensions). Fixed by closing the menu pre-fork.

**4. [#6421 — Anthropic OAuth requests need Claude Agent billing marker](https://github.com/earendil-works/pi/issues/6421)**  
Closed. OAuth with Claude Max accounts fails with "out of extra usage" because Pi doesn't send the required `anthropic-account-type: agent` header. Valid token, wrong marker.

**5. [#6373 — Clipboard images not sent to LLM, and no support for remote model inference](https://github.com/earendil-works/pi/issues/6373)**  
Closed. Image paste writes to temp file, but some models ignore file paths. Two problems: path-based image passthrough is unreliable, and no support for models that accept base64-encoded images.

**6. [#6250 — Ctrl+V image paste silently fails on Linux/X11 in Bun release binary](https://github.com/earendil-works/pi/issues/6250)**  
Closed. Native clipboard binding unresolvable inside compiled Bun executable. Regression from v0.78.0. Fix adds fallback to `xclip` on X11. High impact for Linux users on the binary distribution.

**7. [#6303 — Exponential retry backoff has no cap despite retry.provider.maxRetryDelayMs existing](https://github.com/earendil-works/pi/issues/6303)**  
Open. `_prepareRetry()` computes `baseDelayMs * 2^(n-1)` with no upper bound. At attempt 7, delay exceeds 4 minutes. The config field exists but is never consumed. One 👍, likely to be picked up soon.

**8. [#6433 — DeepSeek V4 + thinking mode crashes session in v0.80.3 — reasoning_content not preserved during tool-call history replay](https://github.com/earendil-works/pi/issues/6433)**  
Closed. Regression: tool-call history replay drops `reasoning_content`, leading to session crash. Worked in v0.79.x. Silent TUI close — poor error UX.

**9. [#6429 — OpenAI Responses sends max_output_tokens=1 after compaction](https://github.com/earendil-works/pi/issues/6429)**  
Closed. After auto-compaction, Pi sets `max_output_tokens=1` (likely from a bad computed value), causing 400 errors from OpenAI. Manifests only on long sessions with compaction.

**10. [#6424 — Threshold auto-compaction can leave unfinished work idle](https://github.com/earendil-works/pi/issues/6424)**  
Closed. If compaction fires mid-turn (e.g., tool work done but assistant placeholder pending), the compacted summary can overwrite unfinished state. Reproducer from long work-to-completion sessions.

## Key PR Progress

**1. [#6440 — fix: reload keybindings before creating custom editor component](https://github.com/earendil-works/pi/pull/6440)**  
Merged. User-custom keybinding from `keybindings.json` were not active on session start when a custom editor component replaces the default. Root cause: editor created before keybinding reload.

**2. [#6437 — fix(ai): update Copilot extended context windows](https://github.com/earendil-works/pi/pull/6437)**  
Merged. Sets `contextWindow: 1000000` for GitHub Copilot models that support the extended 1M token context announced June 4, 2026. Required for long-file coding sessions on Copilot.

**3. [#6436 — fix(ai): hide responses reasoning comment markers](https://github.com/earendil-works/pi/pull/6436)**  
Merged. Strips `<!-- -->` separators from visible reasoning summaries while preserving raw signed reasoning items for replay. Adds regression coverage.

**4. [#6427 — feat(coding-agent): add prompt cache miss tracking](https://github.com/earendil-works/pi/pull/6427)**  
Open. Compares each assistant's cache reads to prior request tokens; significant misses emit warning-colored transcript notices with idle gaps and model switch annotations. Adds `/session` command integration. Author: @mitsuhiko.

**5. [#6430 — fix fork menu allowing user to double select an entry](https://github.com/earendil-works/pi/pull/6430)**  
Merged. Closes the forking menu before starting `fork()` to prevent double-selection. Fixes the race where extension teardown delay allowed multiple fork creations.

**6. [#6418 — Fix native clipboard in bun release](https://github.com/earendil-works/pi/pull/6418)**  
Merged. Two changes: copies `.node` files into the clipboard package for Bun compatibility; adds `xclip` fallback on X11. Closes #6250.

**7. [#6417 — feat(agent): support custom metadata in jsonl session headers](https://github.com/earendil-works/pi/pull/6417)**  
Merged. Adds optional `metadata?: Record<string, unknown>` to v3 JSONL session header. Accepted by `create()`, returned in metadata, and inherited by checkpoint/compact entries. Enables richer session tagging.

**8. [#6413 — feat(coding-agent): show git info in local version](https://github.com/earendil-works/pi/pull/6413)**  
Merged. Closes #6412. Adds git branch/hash display to the `/version` output for local dev builds. Small quality-of-life for contributors.

## Feature Request Trends

- **Extension API expansion**: Multiple issues (e.g., #6428) request hooks that fire *before* session file loading, not just after. Developers building session-management extensions want full interception at startup.
- **Session switching without teardown**: Issue #5700 (closed, 9 comments) asks for concurrent agent sessions with TUI switching — a perennial ask for multi-project workflows.
- **Ephemeral model switches**: Issue #5263 (open, 5 comments, 6 👍) wants in-session model/thinking changes to be ephemeral by default, with a dedicated `/settings` entry for global defaults. Strong community support.
- **New provider integrations**: Two requests this week: Novita AI (#6420) and an image-model formatting fix (#6419) — steady appetite for provider diversity.
- **In-memory session storage export**: Issue #6435 requests public export of the in-memory session storage implementation for extension authors building custom storage layers.

## Developer Pain Points

- **Session lifecycle fragility**: Three issues from @Blue-B alone (#6424, #6425, #6426) document compaction and model-switch bugs that corrupt or overflow sessions in long-running work. The coding agent's settlement/continuation logic (meta-issue #5886) remains a known fragile spot.
- **Clipboard still broken on Linux**: Despite the fix in #6418, #6250 and #6373 reveal that both image paste and native clipboard binding have been unreliable across versions. The `xclip` fallback is a band-aid, not a proper native solution.
- **Retry logic lacks sane bounds**: Issue #6303 shows exponential backoff without a cap — a config field exists but is never wired. This causes multi-minute stalls on transient failures.
- **Proxy/Gateway compatibility**: #6414 (Gemini thoughtSignature drop) and #6421 (Anthropic missing header) highlight that proxy setups, which are increasingly common in enterprise, expose gaps in the tool-call serialization and auth marker pipelines.
- **Silent failures**: #6433 (DeepSeek crash with no error) and #6423 (UI freeze with indeterminate chance) reflect a pattern where errors close the TUI or hang without user-visible diagnostics. Traceability remains a pain point.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-09

## Today's Highlights
The Qwen Code team shipped **v0.19.8** with CLI serve environment isolation and total admission control, alongside a surge of Web Shell UI polish and daemon session persistence work. The community is actively discussing an **RFC for multi-workspace daemon support** (#6378, 19 comments) and pushing for restoration of image/file drag-and-drop in the CLI (#6560, 14 comments). Two release workflow failures (#6554, #6476) signal growing CI quality concerns.

---

## Releases
### **v0.19.8** — *2026-07-09*
- **feat(cli):** Add serve env isolation and total admission control (`@doudouOUC`)
- **docs:** Add WeCom to channels overview (`@DragonnZhang`)
> No breaking changes or migration notes in this release.

---

## Hot Issues (Top 10)

### 1. **#6378** — RFC: Support multiple workspaces in one `qwen serve` daemon *[OPEN]*
   - **Author:** `doudouOUC` | **Comments:** 19 | 👍 0
   - **Why it matters:** Proposes breaking the `1 daemon = 1 workspace` model to allow multi-project workflows without spinning separate daemons. Deep discussion on session routing and backward compatibility.
   - [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/6378)

### 2. **#6560** — Restore drag-and-drop image/document upload in CLI *[OPEN]*
   - **Author:** `pixuan1989` | **Comments:** 14 | 👍 0
   - **Why it matters:** Users rely on pasting screenshots (PNG/JPG) for AI design review; the missing functionality forces `read_file` workarounds. High community interest in reverting this UX regression.
   - [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/6560)

### 3. **#6565** — "Internal Error" connecting to Qwen Coder *[OPEN]*
   - **Author:** `kons10` | **Comments:** 3
   - **Why it matters:** Bilingual error (CN/JP) suggests authentication or network-layer issues under load. Unclear root cause; marked `need-information`.
   - [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/6565)

### 4. **#6563** — MCP prompt silently drops user input when `arguments` undeclared *[OPEN]*
   - **Author:** `qwen-code-dev-bot` | **Comments:** 1
   - **Why it matters:** `parseArgs()` silently discards `abc` in `/xxx_prompt abc` if the MCP server omits schema. No error emitted — a silent data loss bug for MCP integrations.
   - [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/6563)

### 5. **#6554** — Release workflow failed on nightly `v0.19.8-nightly.20260709` *[OPEN]*
   - **Author:** `github-actions[bot]` | **Comments:** 1
   - **Why it matters:** `quality` job failed; linked to formatting issues (#6555). Similar failure on `N/A` release (#6476) — recurring CI reliability issue.
   - [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/6554)

### 6. **#6507** — Deferred IDE startup shows stale failure state after late connection *[OPEN]*
   - **Author:** `water-in-stone` | **Comments:** 2
   - **Why it matters:** Timeout does not cancel underlying connection promise; a late success overwrites the UI with an internal client that may be out of sync with the workspace.
   - [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/6507)

### 7. **#6553** — CI: `qwen-triage` action swallows stderr, masks failures *[OPEN]*
   - **Author:** `yiliang114` | **Comments:** 2
   - **Why it matters:** `QWEN_RESPONSE=$(qwen …)` discards stderr; silent API errors or empty responses report `success`. Triaging pipeline becomes unreliable.
   - [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/6553)

### 8. **#6542** — Add read-only Advisor feedback loop for complex tasks *[OPEN]*
   - **Author:** `qqqys` | **Comments:** 1
   - **Why it matters:** Proposes a "second-opinion" reviewer that inspects context and returns structured guidance when progress stalls — a safety net for long-running agent tasks.
   - [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/6542)

### 9. **#6536** — WebShell shows serialized `@` references instead of chips *[OPEN]*
   - **Author:** `ever-o` | **Comments:** 1
   - **Why it matters:** After sending, `@.qwen/` appears as raw text instead of the compact chip shown in composer — breaks visual fidelity for MCP/extension references.
   - [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/6536)

### 10. **#6519** — Anthropic Claude 4.8+ rejects `temperature` parameter *[CLOSED]*
   - **Author:** `qwen-code-dev-bot` | **Comments:** 1
   - **Why it matters:** Deprecated `temperature` in Claude 4.8 causes 400 errors. Root cause in `packages/core/src/core/anthropicContentGen.ts` — fixed by the team today.
   - [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/6519)

---

## Key PR Progress (Top 10)

### 1. **#6556** — Fix `max_tokens` clamping to context window
   - **Author:** `tanzhenxin`
   - **What:** Reverts to full-context-window compaction; each request asks for exactly as many tokens as the window can hold. Eliminates the old "output reservation" hack.
   - [GitHub PR](https://github.com/QwenLM/qwen-code/pull/6556)

### 2. **#6564** — Keep CDP MCP env reads at serve boundaries
   - **Author:** `yiliang114`
   - **What:** Forces explicit environment passing for browser automation MCP; avoids accidental `process.env` reads in serve code.
   - [GitHub PR](https://github.com/QwenLM/qwen-code/pull/6564)

### 3. **#6530** — Add cell value dialog on double-click in markdown tables
   - **Author:** `jifeng`
   - **What:** Double-clicking a table cell in WebShell opens a modal with the full field value, selection support, and copy action.
   - [GitHub PR](https://github.com/QwenLM/qwen-code/pull/6530)

### 4. **#6561** — Workspace Goals page & fix `/goal` loss on daemon resume
   - **Author:** `wenshao`
   - **What:** New visual Goals page in WebShell; critical fix: daemon sessions lost `/goal` on resume because the status-bar pill and transcript card were the only surfaces.
   - [GitHub PR](https://github.com/QwenLM/qwen-code/pull/6561)

### 5. **#6557** — Persist session artifacts across daemon restarts
   - **Author:** `chiga0`
   - **What:** V2 metadata persistence for session artifacts; survives daemon restart and session replay. Replaces #6259 with squashed commit for easier review.
   - [GitHub PR](https://github.com/QwenLM/qwen-code/pull/6557)

### 6. **#6537** — Render composer references as chips in user messages
   - **Author:** `ever-o`
   - **What:** Fixes #6536: file/extension/MCP references from composer are now rendered as compact chips instead of raw `@.qwen/` text in message bubbles.
   - [GitHub PR](https://github.com/QwenLM/qwen-code/pull/6537)

### 7. **#6558** — List persisted sessions for trusted workspaces
   - **Author:** `doudouOUC`
   - **What:** Non-primary workspace session routes now return active persisted sessions, merged with live session summaries without duplicates.
   - [GitHub PR](https://github.com/QwenLM/qwen-code/pull/6558)

### 8. **#6440** — Add `/learn` command for user-initiated skill creation
   - **Author:** `LaZzyMan`
   - **What:** Users can create reusable skills from local dirs, URLs, conversation history, or freetext via `/learn`. Uses `submit_prompt` pattern — skills saved under `.qwen/skills/`.
   - [GitHub PR](https://github.com/QwenLM/qwen-code/pull/6440)

### 9. **#6506** — Optimize large paste performance in CLI
   - **Author:** `LaZzyMan`
   - **What:** Intercepts bracketed paste at raw stdin level, bypassing readline's per-character firing (260K chars / 260K events → seconds of blocking). Now processes as buffer chunks — **~100× speedup** for large pastes.
   - [GitHub PR](https://github.com/QwenLM/qwen-code/pull/6506)

### 10. **#6525** — Cursor-paged transcript replay endpoint
   - **Author:** `doudouOUC`
   - **What:** New `GET /session/:id/transcript` with cursor-based paging, freezes snapshot on first page, reconstructs active parent chain from lightweight metadata.
   - [GitHub PR](https://github.com/QwenLM/qwen-code/pull/6525)

---

## Feature Request Trends

1. **Multi-workspace daemon support** — The top-discussed RFC (#6378) signals strong demand for running multiple projects from a single `qwen serve` process while preserving isolation.

2. **Advisor / second-opinion agent** — #6542 proposes a read-only reviewer that inspects context when progress stalls or before declaring task completion. Growing interest in agent guardrails.

3. **Webhook-triggered channel tasks** — PR #6495 adds external webhook POST events that trigger proactive responses in channel workers. Enables event-driven automation.

4. **Persistent session artifacts & transcription** — Multiple PRs (#6557, #6525) target daemon session durability and replay, indicating production deployment readiness is a priority.

5. **Structured skill creation** — The `/learn` command (#6440) and workspace skill UI (#6534) show demand for user-authored, reusable skills beyond the built-in library.

---

## Developer Pain Points

1. **CLI image/file upload regression** — #6560 (14 comments) highlights that drag-and-drop and Ctrl+V for screenshots stopped working. The `read_file` workaround is considered insufficient.

2. **CI reliability issues** — Two release failures this week (#6554, #6476) due to formatting and preparation jobs. The triage pipeline also swallows errors (#6553). Build trust is eroding.

3. **Silent data loss in MCP prompts** — #6563: if an MCP server omits `arguments`, user input is silently dropped. No error, no fallback — a dangerous pattern for extensibility.

4. **Subagent infinite loop risk** — #6505 (4 comments, now closed): subagents could repeat identical tool calls indefinitely because LoopDetectionService didn't apply to subagents. Fixed, but reveals testing gaps in agent orchestration.

5. **Inconsistent model parameter handling** — #6519 (Claude 4.8) and #6524 (vision bridge 30s hardcoded timeout) show that hardcoded or deprecated parameters cause unexpected 400s and timeouts as upstream APIs evolve.

---

*Generated by Technical Analysis Bot for 2026-07-09*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*