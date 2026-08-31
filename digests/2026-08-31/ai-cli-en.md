# AI CLI Tools Community Digest 2026-08-31

> Generated: 2026-08-31 04:19 UTC | Tools covered: 9

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

# AI CLI Developer Tools Ecosystem — Cross-Tool Comparison Report

**Date:** 2026-08-31
**Scope:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI (CodeWhale)

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape is in a **stabilization-and-hardening phase** following months of rapid feature expansion. Across all nine tools, the dominant themes are **session reliability** (resume failures, context-window death spirals, silent data loss), **Windows platform parity** (a consistent second-class experience across every tool), and **subagent/orchestration correctness** (misreported success signals, hangs, and turn-limit mismanagement). Enterprise concerns around **observability** (OpenTelemetry support), **security** (git hook execution, credential handling), and **cost transparency** (rate-limit visibility, token accounting) are increasingly prominent. Notably, **no major release shipped across any tool in the last 24 hours**, suggesting a coordinated quiet period or platform-wide stabilization effort.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status |
|------|-------------|-----------|----------------|
| **Claude Code** | ~10 active, 1 critical (839 comments) | 1 merged (plugin shebang fix) | No new release |
| **OpenAI Codex** | 10 tracked, top issue 57 comments | 10 merged (TUI polish, MCP naming, Guardian auth) | 3 alpha releases (rust-v0.152.0-alpha.4/5/6) |
| **Gemini CLI** | 10 tracked, 2 P1 bugs | 8 merged, 2 open (line endings, tool name uniqueness) | 1 nightly (v0.59.0-nightly.20260831) |
| **GitHub Copilot CLI** | 10 tracked, 3 critical regressions | 0 merged/updated | No new release (still on v1.0.81) |
| **Kimi Code CLI** | 2 new | 0 | No new release (v0.39.1) |
| **OpenCode** | 10 tracked, 1 feature (139 👍) | 10 (7 merged, 3 open) | No new release (v1.18.25) |
| **Pi** | 10 tracked, 2 data-loss bugs | 10 (majority merged) | No new release |
| **Qwen Code** | 10 tracked, 2 security P1 | 10 (mixed open/merged) | Nightly failed (2nd consecutive) |
| **DeepSeek TUI (CodeWhale)** | 10 tracked, 1 privacy concern | 10 (majority merged) | v0.9.12 in preparation (draft PR) |

---

## 3. Shared Feature Directions

### a) **Session Reliability & Recovery** (All tools)
- **Claude Code**: Stealth restart destroys sessions (#90172); background subagent pause/resume on recoverable failures (#78224)
- **OpenCode**: Empty-assistant-message 400s brick sessions (#37946, #39451); post-compaction context loss (#41358)
- **Pi**: Duplicate JSONL writers corrupt sessions (#8852); context-window death spiral (#8864)
- **Copilot CLI**: Heap OOM on resume (#4664); phantom session creation 1.6h after interruption (#4668)
- **Gemini CLI**: Generalist agent hangs (#21409); shell stuck "awaiting input" (#25166)

**Community demand:** Authoritative cancellation, memory-efficient snapshotting, and self-healing recovery after compaction or network failures.

### b) **Windows Platform Parity** (All tools with desktop/CLI)
- **Claude Code**: CoworkVMService DACL failure (#85840); always-on-top window (#85891); MSIX updater corruption
- **Codex**: Handshake failures (#41049); WSL project creation breakage (#41290); poisoned shell after reboot (#25317)
- **Gemini CLI**: ConPTY paste issues (#26905); CRLF normalization (#29132); PowerShell test failures (#28832)
- **OpenCode**: ARM64 TUI initialization failure (#19130); shortcut conflicts (#46336)
- **Qwen Code**: CUA driver panic (#10538); IME cursor corruption (#10562)

**Community demand:** First-class Windows support, not a port afterthought. Detailed root-cause analyses from users suggest maintainers lack Windows reproduction coverage.

### c) **Observability & Cost Transparency**
- **Claude Code**: OpenTelemetry for Web (#32364)
- **Codex**: Rate-limit banners in TUI (PR #41742); Chronicle background summarization consuming quotas (#23124)
- **Pi**: Anthropic cacheRead flatlining (#8849); negative dollar costs in OpenRouter catalog (#8875)
- **Copilot CLI**: telemetry.headers silently disables OTEL export (#4669)
- **Gemini CLI**: Token/thought counts in ACP PromptResponse (PR #28840)

**Community demand:** Real-time token/cost accounting, visible rate-limit warnings, and telemetry parity across CLI/Web/Desktop surfaces.

### d) **Subagent Orchestration Correctness**
- **Claude Code**: Nested subagents ignore run_in_background (#75043); TaskStop fails after resume
- **Gemini CLI**: Subagent MAX_TURNS reported as GOAL success (#22323); browser agent ignores settings (#22267)
- **OpenCode**: Aborted turns with zero content replay as 400s (#37946)
- **Pi**: Dangling tool_use after branching (#8859)

**Community demand:** Honest completion signals, per-agent context/compaction governance, and pause/resume instead of termination.

### e) **Security & Guardrails**
- **Qwen Code**: Git config hooks as command-execution vector (#10561); pre-filter worktree checkouts (#10560)
- **Claude Code**: Harness-enforced adversarial review gate (#90887, new)
- **DeepSeek TUI**: Provider picker leaks credential paths (#5772); NoNewPrivs blocks sudo (#5723)
- **OpenCode**: Unauthorized OpenRouter model requests (#37354)

**Community demand:** Fail-closed behavior, encrypted credential storage, and systemic review-gate enforcement.

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|--------------|-------------|-------------------|
| **Claude Code** | Enterprise agent orchestration, skills/plugins | Professional developers, teams | Mature plugin system, subagent hierarchy, OTel support |
| **OpenAI Codex** | Rapid iteration, TUI polish, Guardian auth | Individual developers, ChatGPT ecosystem | Rust-based CLI, tight coupling with ChatGPT platform |
| **Gemini CLI** | Agent autonomy, multi-agent workflows | Google ecosystem developers | Aggressive nightly cadence, ACP protocol, browser subagents |
| **Copilot CLI** | GitHub-native integration, enterprise | GitHub/VS Code users | Deep GitHub/Azure integration, BYOK/custom models |
| **Kimi Code CLI** | Tool-call fidelity, remote control | Moonshot AI ecosystem | Quiet but focused, wire-protocol transparency |
| **OpenCode** | SDK-driven extensibility, "goal" lifecycle | Hackers, plugin developers | Plugin SDK, SQLite-backed sessions, session-goal abstractions |
| **Pi** | Provider breadth, extension API | Provider-agnostic power users | Multi-provider catalog (DeepSeek, Tencent, StepFun), extension API |
| **Qwen Code** | Security-hardened review, workflow automation | Security-conscious teams | Workflow runs visualization, Bubblewrap sandbox, worktree review |
| **DeepSeek TUI** | TUI/crate decomposition, sandboxing | Linux/TUI purists | 771k-line Rust monorepo decomposition, Seatbelt sandbox, provider breadth |

**Key Differentiation:** 
- **Claude Code** leads in **orchestration maturity** and **plugin ecosystem**
- **Copilot CLI** leads in **enterprise integration** but suffers from regression-prone releases
- **OpenCode** and **Pi** lead in **extensibility through SDKs** and **provider breadth**
- **Qwen Code** is the most **security-forward** (git config hardening, sandboxes)
- **Gemini CLI** iterates fastest (daily nightlies) but struggles with **agent autonomy signals**
- **Codex** is distinguished by **ChatGPT platform integration** and rapid TUI polish

---

## 5. Community Momentum & Maturity

### High Momentum (Rapid Iteration, Strong Engagement)
- **OpenAI Codex** — 3 alpha releases in 24h, 10 merged PRs, active TUI polish. Community actively testing new features (pets overlay, remote control).
- **Gemini CLI** — Daily nightlies, consistent merged-fix throughput. Maintainers actively triaging P1s.
- **OpenCode** — Strong feature velocity (compaction PRs, plugin SDK). Top-voted feature request (#27167) at 139 👍.

### Stabilizing (Heavy Bug-Fix Focus)
- **Pi** — Fast community-to-fix turnaround (#8852 → #8853 same day). Maintainers actively closing 20+ untriaged issues.
- **Qwen Code** — Security reviews dominating. Second consecutive nightly failure suggests CI debt.
- **DeepSeek TUI (CodeWhale)** — Major refactoring (crate decomposition) with 10 PRs merged; v0.9.12 preparing.

### Stalled / At Risk
- **Copilot CLI** — 0 PRs in 24h; v1.0.81 regression cluster unresolved; community waiting on maintainers.
- **Kimi Code CLI** — Quiet day; only 2 new issues, no PR activity. Minimal community engagement.
- **Claude Code** — Only 1 PR merged (closed); 839-comment issue unanswered for 5 months indicates maintainer bottleneck or deprioritization.

### Maturity Signal — Issue Response Velocity
| Tool | Top Issue Age | Maintainer Response |
|------|---------------|-------------------|
| Claude Code | 5 months (#38335) | No official response |
| Copilot CLI | 6 months (#1285) | No resolution |
| Gemini CLI | Active triage on P1s | Responsive |
| Pi | Same-day fixes (#8852) | Very responsive |
| OpenCode | Active PRs against top bugs | Responsive |

---

## 6. Trend Signals

### 1. **Session Persistence Is the #1 Trust Barrier**
Across all tools, long-session reliability is the top frustration. The community is demanding: memory-efficient snapshotting, authoritative cancellation, self-healing recovery, and honest completion signals. **Developers should expect session-recovery features to be a key differentiator in the next 6 months.**

### 2. **Windows Parity Is an Adoption Gate**
Every tool has a Windows-specific defect cluster. Users are filing root-cause analyses, suggesting **opportunity for tools that invest in Windows-first development**. The Windows developer market is underserved and vocal.

### 3. **Silent Failures Are Unacceptable**
From Copilot CLI's zero-diagnostic tool bindings to OpenCode's empty-message 400s and Pi's dropped tool calls: **silent data loss destroys trust faster than any feature gap**. Tools that adopt "fail-loud" behavior will win on reliability reputation.

### 4. **Security Is Moving from Optional to Mandatory**
Qwen Code's git-config hook findings and Claude Code's new adversarial review gate signal a shift: **coding agents are now treated as security-relevant infrastructure**. Expect sandboxing (Bubblewrap, Seatbelt, zero-sandbox modes) and review-gate enforcement to become standard.

### 5. **Provider Agnosticism Is a Feature, Not a Niche**
Pi's seven-provider catalog expansion and Gemini's fallback-chain improvements show **cost/choice flexibility is a retention driver**. Tools locked to a single vendor risk churn as multi-model workflows become the norm.

### 6. **Observability Is the Enterprise Entry Ticket**
OpenTelemetry parity (Claude Code Web), rate-limit banners (Codex), and cache-read transparency (Pi) are early signals. **Enterprises will not adopt AI CLI tools without per-turn cost accounting and telemetry export** — tools without this will be blocked in procurement.

### 7. **The "Goal Lifecycle" Is Emerging as a Core Abstraction**
OpenCode's #27167 (139 👍) and Claude Code's per-agent compaction requests both point to: **persistent, visible objectives that survive compaction**. The industry is moving from "chat session" to "goal-driven work unit" — expect this to become a standard UX pattern.

---

## Recommendation for Decision-Makers

| If you need... | Choose... |
|----------------|----------|
| Enterprise-grade orchestration + plugin ecosystem | Claude Code (but monitor session-limit issue) |
| GitHub-native integration + VS Code synergy | Copilot CLI (wait for v1.0.81 regression fixes) |
| Provider flexibility + extension API | Pi or OpenCode |
| Security-hardened review workflows | Qwen Code |
| Fastest iteration + ChatGPT ecosystem | OpenAI Codex |
| Google ecosystem + aggressive feature cadence | Gemini CLI |

**Risk note:** Claude Code's and Copilot CLI's maintenance stall is a short-term concern; both have unresolved critical issues with no maintainer response. Evaluate alternatives if your team heavily depends on session reliability.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-31*

---

## 1. Top Skills Ranking

The most-discussed Skills PRs reveal the community's primary pain points and interests:

### #1298 — skill-creator: Eval Pipeline Fix (0% Recall Bug)
- **Author:** MartinCajiao | **Created:** 2026-06-10 | **Status:** Open
- **Functionality:** Fixes `run_eval.py` — the evaluation harness for skill descriptions — which reports `recall=0%` for every skill description regardless of content, rendering the description-optimization loop useless. Also addresses Windows stream reading, trigger detection, and parallel worker issues.
- **Discussion highlights:** References issue #556 (12 comments, 7 👍) with 10+ independent reproductions. The eval pipeline is broken for the entire community, not just edge cases.
- **Significance:** This is the bottleneck blocking reliable skill creation and iteration for everyone.
- [View PR #1298](https://github.com/anthropics/skills/pull/1298)

### #514 — Document Typography Skill
- **Author:** PGTBoos | **Created:** 2026-03-04 | **Status:** Open
- **Functionality:** A quality-control skill preventing typographic defects in AI-generated documents: orphan word wrap (1–6 words spilling to next line), widow paragraphs (section headers stranded at page bottom), and numbering misalignment.
- **Discussion highlights:** Positions itself as a universal fix — "these issues affect every document Claude generates" — which resonates with anyone using Claude for document production.
- **Significance:** High relevance for enterprise/document-heavy workflows.
- [View PR #514](https://github.com/anthropics/skills/pull/514)

### #1628 — Hivemind: Zero-Cost Multi-Agent Orchestration
- **Author:** Hanishchow | **Created:** 2026-08-21 | **Status:** Open
- **Functionality:** Delegates mechanical work to headless opencode workers on free models while Claude Code remains the planner, reviewer, and merger. The expensive model's context is treated as the scarce resource.
- **Discussion highlights:** Likely draws attention for its cost-reduction angle and multi-agent orchestration pattern.
- **Significance:** Signals demand for cost-efficient agent architectures.
- [View PR #1628](https://github.com/anthropics/skills/pull/1628)

### #1615 — SCNet HPC Skill
- **Author:** lql341 | **Created:** 2026-08-20 | **Status:** Open
- **Functionality:** Operates SCNet HPC clusters via profile-based SSH and Slurm workflows — cluster discovery, job generation, partition/memory/module guidance, and compute-node access.
- **Discussion highlights:** Addresses a specialized but active HPC-user segment within the community.
- **Significance:** Shows Skills expanding into infrastructure/DevOps territory.
- [View PR #1615](https://github.com/anthropics/skills/pull/1615)

### #486 — ODT Skill (OpenDocument Creation + Conversion)
- **Author:** GitHubNewbie0 | **Created:** 2026-03-01 | **Status:** Open
- **Functionality:** Create, fill, read, and convert OpenDocument files (.odt, .ods) — triggers on "ODT," "ODS," "ODF," "OpenDocument," or "LibreOffice document."
- **Discussion highlights:** Companion to the existing DOCX/PDF skills; community clearly wants full document-format coverage.
- **Significance:** Document-format ecosystem expansion is a persistent community theme.
- [View PR #486](https://github.com/anthropics/skills/pull/486)

### #1367 — Self-Audit: Mechanical Verification + Reasoning Quality Gate (v1.3.0)
- **Author:** YuhaoLin2005 | **Created:** 2026-06-28 | **Status:** Open
- **Functionality:** Audits AI output before delivery — mechanical file verification first, then four-dimension reasoning audit in damage-severity priority order. Model-agnostic and works with any tech stack.
- **Discussion highlights:** Pairs with issue #1385 (Reasoning Quality Gate Pipeline proposal). The community is actively pushing quality-gating as a first-class skill.
- **Significance:** Represents a "meta-skill" trend aimed at making Claude's own output verifiable.
- [View PR #1367](https://github.com/anthropics/skills/pull/1367)

---

## 2. Community Demand Trends

Distilled from the most-commented issues:

### Trust & Security First
[Issue #492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍) is the community's loudest concern: community skills distributed under the `anthropic/` namespace impersonate official ones, creating a trust boundary vulnerability where users may grant elevated permissions unknowingly. This is a security and governance demand — users want clear provenance and official-vs-community labeling.

### Context Window as a First-Class Constraint
Two issues highlight context-window exhaustion as a systemic problem:
- [Issue #1487](https://github.com/anthropics/skills/issues/1487): the `claude-api` skill injects ~156k tokens in a single tool call.
- [Issue #189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍): installing `document-skills` + `example-skills` plugins duplicates identical skills, wasting context on redundant content.

### Skill Evaluability & Testing Infrastructure
[Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) — `run_eval.py` reports 0% trigger rate for every query — exposes that the skill-creation evaluation tooling is fundamentally unreliable. The community wants trustworthy, reproducible evaluation before investing in skill polish.

### Organization-Wide Skill Distribution
[Issue #228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) asks for org-wide skill sharing in Claude.ai — currently users manually export/import `.skill` files via Slack/Teams. This is a workflow-automation and governance demand: teams want one shared, versioned skill library.

### Skill-Creator Quality
[Issue #202](https://github.com/anthropics/skills/issues/202) — skill-creator reads like developer documentation rather than an operational skill; verbose educational tone undermines token efficiency. The community wants skills that are efficient, executable instructions — not tutorials.

**Trend summary:** Security/trust boundaries, context-window efficiency, evaluation reliability, and org-wide sharing are the dominant demand axes.

---

## 3. High-Potential Pending Skills

Actively-discussed PRs not yet merged — these are the skills most likely to land next:

| PR | Skill | Why It's Likely to Land |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator eval fix | 10+ independent reproductions; blocks the core skill-creation loop for everyone |
| [#514](https://github.com/anthropics/skills/pull/514) | Typography QC | Broad apply-anywhere value; small, well-scoped; fixes real user-visible defects |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT skill | Completes the document-format set; strong existing DOCX/PDF precedent |
| [#1367](https://github.com/anthropics/skills/pull/1367) | Self-audit quality gate | Directly addresses quality-assurance pain; author has follow-up proposal (#1385) |
| [#568](https://github.com/anthropics/skills/pull/568) | ServiceNow platform skill | Massive enterprise surface (ITSM, ITOM, ITAM, FSM, CSDM, IntegrationHub); long tail update window (Mar → Aug) suggests ongoing author engagement |
| [#723](https://github.com/anthropics/skills/pull/723) | Testing-patterns skill | Covers the full testing stack with opinionated philosophy (Testing Trophy model); broad relevance for every developer |
| [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind multi-agent orchestration | Zero-cost delegation model addresses cost pressure directly; recent activity (Aug 2026) |
| [#525](https://github.com/anthropics/skills/pull/525) | Pyxel retro-game dev | Niche but polished; tight MCP integration with an established engine |

**Watch especially:** [#1298](https://github.com/anthropics/skills/pull/1298) (blocking infrastructure fix) and [#514](https://github.com/anthropics/skills/pull/514) (universal document quality) — both have high leverage and clear scopes.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for official-grade guardrails: trustworthy provenance and security boundaries, reliable evaluation tooling, context-efficient execution, and org-wide governance — turning Skills from individual power-ups into a governed, verifiable enterprise infrastructure layer.**

---

**Claude Code Community Digest — 2026-08-31**

---

### 1. Today's Highlights
The most significant community concern this week revolves around **Claude Max plan session limits being exhausted abnormally fast** since late March, a long-running issue (#38335) with 839 comments and 476 👍 that continues to see active discussion. A cluster of Windows-specific defects around the Desktop app's **CoworkVMService** and its inability to arm recovery actions (#85840, #89711) has been root-caused, linking it to silent `claude.exe` hangs and data loss. No new releases shipped in the last 24 hours, and only one PR (a portable shebang fix for plugins) was merged.

---

### 2. Releases
No new releases in the last 24 hours.

---

### 3. Hot Issues
Top 10 noteworthy issues from the last 24 hours:

1. **[#38335 — Claude Max plan session limits exhausted abnormally fast since March 23, 2026 (CLI usage)](https://github.com/anthropics/claude-code/issues/38335)**  
   *Open, 839 comments, 476 👍* — The single most active issue in the tracker. Users report their Max plan session limits are being consumed far faster than expected during CLI usage, with no clear cause identified. The comment count suggests widespread impact and frustration. Community continues to push for a fix after five months.

2. **[#10238 — [FEATURE] Add support for subdirectories in skills](https://github.com/anthropics/claude-code/issues/10238)**  
   *Open, 53 comments, 168 👍* — A long-standing feature request from October 2025 that remains highly requested. Teams using skills at scale need subdirectory support for better organization and namespacing. High 👍 count indicates broad demand.

3. **[#85891 — Claude Desktop (Windows 11): main window stays always-on-top with no setting to disable](https://github.com/anthropics/claude-code/issues/85891)**  
   *Open, 45 comments, 101 👍* — Windows users are blocked by a topmost-window behavior that obstructs other applications. This is the Windows counterpart to #66516 (macOS). The lack of a toggle is seen as a basic UX miss, with significant community support for a fix.

4. **[#85603 — Typed input queued mid-turn is silently dropped at turn end (interactive TUI)](https://github.com/anthropics/claude-code/issues/85603)**  
   *Open, 24 comments* — In the interactive TUI, text typed while a turn is running gets lost when the turn ends, with no Escape key involved. This is a data-loss UX bug in a core workflow, affecting power users who type ahead inside tmux panes.

5. **[#75043 — Nested subagents: children spawned by a subagent are always async; TaskStop fails after resume](https://github.com/anthropics/claude-code/issues/75043)**  
   *Open, 20 comments* — A **reproduced** bug where nested subagents (via the `Agent` tool) ignore `run_in_background` semantics, completion notifications never reach the parent subagent, and TaskStop fails with ownership errors after resume. This breaks advanced orchestration patterns and has labels for `reproduced` and `platform:macos`.

6. **[#32364 — [FEATURE] Support OpenTelemetry (OTel) configuration in Claude Code on the Web](https://github.com/anthropics/claude-code/issues/32364)**  
   *Open, 9 comments, 35 👍* — Teams using `claude.ai/code` want OTel support for observability parity with the CLI. The feature request remains open with sustained interest from enterprise users.

7. **[#85840 — Windows: CoworkVMService can never arm its own recovery actions ("Access is denied")](https://github.com/anthropics/claude-code/issues/85840)**  
   *Open, 8 comments* — Root cause of two previously-closed-stale issues (#59794, #66849). The service fails to set recovery actions due to a DACL misconfiguration, causing silent `claude.exe` hangs with no crash dump and in-flight Cowork work loss. Critical Windows reliability bug.

8. **[#70678 — [FEATURE] Keyboard navigation between user messages in chat conversation](https://github.com/anthropics/claude-code/issues/70678)**  
   *Open, 5 comments* — Request to jump to previous/next user prompt via keyboard (like Ctrl+Up/Down in other terminals). Power users managing long conversations want faster navigation.

9. **[#90172 — Eight Defects Related to Stealth Restart of Desktop App: Hidden Relaunch Destroys Running Sessions](https://github.com/anthropics/claude-code/issues/90172)**  
   *Open, 5 comments* — Users report that the desktop app silently relaunches for updates, destroying running sessions with "Can’t reach your computer" errors. This umbrella issue tracks multiple sub-defects, highlighting a pattern of update-related session loss.

10. **[#78224 — [FEATURE] Pause-and-resume background subagents on recoverable failures](https://github.com/anthropics/claude-code/issues/78224)**  
    *Open, 4 comments* — When background subagents hit usage limits or transient API errors, they are terminated instead of paused. Users want them to resume after the condition clears (e.g., next month's quota) so long-running work isn't lost.

---

### 4. Key PR Progress
Only one PR was updated in the last 24 hours, and it is **closed**:

- **[#35350 — fix(plugins): use portable shebangs in shell scripts](https://github.com/anthropics/claude-code/pull/35350)** *(Merged/Closed, 2026-03-17 → 2026-08-30)*  
  Author: letanure — Fixes plugin hooks that fail on systems where `bash` is not at `/bin/bash` (e.g., NixOS). 11 plugin scripts still used `#!/bin/bash` while others already used `#!/usr/bin/env bash`. This aligns them all, partially complementing the earlier #11029. A small but important portability fix that closes a long-lived gap for non-standard Linux environments.

> **Note:** No other PRs were active in the last 24 hours, which is unusual and suggests the maintainers may be in a release-stabilization phase.

---

### 5. Feature Request Trends
Distilling all issues from the last 24 hours, the following feature directions stand out:

- **Per-agent context/compaction management** (multiple requests: #90862, #90347, #78224) — Users want finer-grained control over context windows: separate auto-compact boundaries for coordinator sessions vs. subagents, and pause/resume on recoverable failures instead of termination. The common thread: **delegation at scale requires per-role resource governance**.

- **Operational observability** (#32364) — OpenTelemetry support for Claude Code on the Web is still pending, mirroring the CLI's OTel support. Enterprises want telemetry parity across surfaces.

- **Desktop UX navigation** (#70678) — Keyboard-based jumping between messages is a recurring request across TUI/desktop surfaces, indicating power users treat Claude Code as a terminal-grade tool that should support vi-style navigation.

- **Skill/plugin organization** (#10238) — Subdirectories in skills remains the most-upvoted enhancement, indicating that skill collections are growing beyond flat-file limits.

- **Security/guardrails** (#90887) — A new request for a "harness-enforced adversarial review gate" on every commit (unbypassable PreCommit). Early traction suggests growing concerns about coding agents introducing vulnerabilities without review.

---

### 6. Developer Pain Points
The recurring frustrations across the last 24 hours:

- **Session/state loss is the #1 pain point.** Issues #90172 (stealth restart), #85840/#89711 (CoworkVMService death causing hangs), #90888 (session history missing after update), and #90889 (headless processes never exit, OOM) all describe silent, destructive failures in different form factors. The community is repeatedly hitting cases where **long-running work is lost without a clear error message or recovery path**.

- **Context limits and session caps are erratic.** The Max plan limit issue (#38335) remains unanswered after five months. Users don't understand why limits are hit "abnormally fast," and no official explanation or resolution has been posted. This is a billing/usage transparency problem.

- **Windows reliability lags significantly.** Multiple Windows-only bugs (always-on-top window, MSIX updater corrupting package, CoworkVMService DACL, Browser pane crashes, CSP-blocked frames) show a pattern: **the Windows desktop experience is materially worse than macOS**. Windows users are filing detailed root-cause analyses, suggesting maintainers lack reproduction coverage on Windows.

- **Subagent orchestration is fragile.** Nested subagent bugs (#75043) and background task kills (#80372) mean advanced multi-agent workflows are not yet dependable. Users are pushing features to make orchestration more robust (pause/resume, per-agent compaction), but the underlying bugs erode trust.

- **Auto-compaction is a blunt instrument.** Several issues (#90862, #90347) point out that the single session-wide compaction window doesn't fit mixed workloads (coordinator vs. subagents). Subagents accumulate 600k-940k tokens before compaction triggers, making context management unpredictable.

- **CLI hangs with no output** (#90800) on headless Linux — a critical issue for CI/CD automation, where any hang is silently multiplied across pipelines. Reports show zero stdout/stderr, making debugging nearly impossible.

---

*Digest generated from GitHub data for anthropics/claude-code as of 2026-08-31.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-31

## Today's Highlights
The Codex team shipped three rapid-fire alpha releases (rust-v0.152.0-alpha.6/5/4) alongside a batch of merged PRs focusing on TUI polish, MCP server naming flexibility, and Guardian authorization refinements. Community attention remains concentrated on Windows-specific regressions—particularly handshake failures in code-mode and WSL integration issues—plus a growing wave of reports around the new "pets" overlay feature and remote control functionality. Automation reliability is also a hot topic, with scheduled tasks mysteriously disabling themselves without user action.

## Releases
Three new rust-based alpha releases landed in the last 24 hours:
- [rust-v0.152.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.6)
- [rust-v0.152.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.5)
- [rust-v0.152.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.4)

No detailed changelogs were published for these releases in the observed data; they appear to be iterative refinements on the Rust-based Codex CLI line.

---

## Hot Issues
*(10 noteworthy issues from the last 24h, ranked by community engagement)*

1. **[#38350 — Recurring scheduled tasks disable themselves after successful runs](https://github.com/openai/codex/issues/38350)** (57 comments)
   The most active issue today. Users report scheduled Codex tasks in ChatGPT web flipping from enabled to paused without any user intervention. Four unrelated tasks were found disabled in a single incident. High severity: automation reliability is core to the product promise.

2. **[#28919 — Windows Codex app missing "control other devices" tab](https://github.com/openai/codex/issues/28919)** (50 comments, 👍 47)
   Strong demand for remote control on Windows. The Settings > Connections tab that's present on other platforms is absent on Windows, frustating users who want to control Codex remotely.

3. **[#41049 — code-mode host exited during handshake; 5.6 model not working](https://github.com/openai/codex/issues/41049)** (41 comments)
   Windows users report a broken local command execution channel. The handshake fails during initialization, rendering the 5.6 model unusable for directory reading and command execution. Related to #40913, which identifies the bundled node.exe failing with error 0xC0000022.

4. **[#41290 — Windows/WSL: project creation and removal fail after switching Agent Environment](https://github.com/openai/codex/issues/41290)** (17 comments, 👍 7)
   After switching the Agent Environment to WSL, project create/delete operations break entirely. A common configuration on Windows dev machines, so high impact.

5. **[#25233 — `/side` chats expiring too quickly; opaque expiration behavior](https://github.com/openai/codex/issues/25233)** (12 comments, 👍 26)
   Ephemeral side chats expire far sooner than expected and users have no visibility into the lifecycle rules. The high upvote count signals broad agreement.

6. **[#39823 — CLI/TUI session resume fails with 'already has an active writer'](https://github.com/openai/codex/issues/39823)** (11 comments)
   Session resume breaks after using `--approve-for-me` or switching sessions. A friction point for CLI power users who live in multi-session workflows.

7. **[#40219 — Server-deleted conversations repopulate in Recents on macOS](https://github.com/openai/codex/issues/40219)** (11 comments, 👍 10)
   Deleted chats keep coming back in the Recents list and cannot be removed. Minor but persistently annoying, likely a client-side cache/sync bug.

8. **[#25317 — Windows Desktop + WSL shell stays poisoned after reboot](https://github.com/openai/codex/issues/25317)** (9 comments)
   A long-standing regression where the live app-server holds deleted helper paths even after reboot, breaking WSL shell integration. Reopened and still unresolved since May.

9. **[#41513 — Windows pets become click-through and cannot be dragged](https://github.com/openai/codex/issues/41513)** (9 comments)
   The new "floating pet" overlay (Codey and custom pets) loses its hit region entirely, making it impossible to interact with. A novelty feature getting real usage, so users care.

10. **[#34898 — Codex enters self-reinforcing governance loops, exhausts usage](https://github.com/openai/codex/issues/34898)** (8 comments)
    Users report Codex on Windows/WSL getting stuck in governance/approval loops that ignore bounded scope instructions and burn through rate limits without completing tasks. Costly and confusing.

---

## Key PR Progress
*(10 important merged PRs from the last 24h)*

1. **[#41744 — Make the update_plan tool opt-in](https://github.com/openai/codex/pull/41744)**
   Flips the default for `tools.update_plan.enabled` to `false`, decluttering model prompts across collaboration-mode, multi-agent, compaction, and goal-continuation flows. A sensible default change for users who find plan updates noisy.

2. **[#41743 — Mark history ingestion requests in turn metadata](https://github.com/openai/codex/pull/41743)**
   Adds `history_ingest_requested` metadata to Responses turn data when the history-notes budget extension is active. Improves observability and prevents caller metadata collisions.

3. **[#41742 — Show actionable rate-limit banners in the TUI](https://github.com/openai/codex/pull/41742)**
   Renders backend-owned rate-limit notices directly in the TUI composer, filtered by authenticated account. Directly addresses the pain of hitting invisible rate limits.

4. **[#41700 — Support package-style MCP server names](https://github.com/openai/codex/pull/41700)**
   Enables MCP server names containing `:`, `@`, `/`, and `.` (e.g., `npm:@modelcontextprotocol/server-sequential.thinking`). Preserves them across `mcp add`, `get`, `list`, `remove`, and OAuth flows.

5. **[#41683 — Set working directories for environment MCP tests](https://github.com/openai/codex/pull/41683)**
   Test infrastructure fix: environment-backed stdio MCP servers need explicit workspace paths. Makes the test suite more reliable.

6. **[#41673 — Repair cursor-style rendering on older JediTerm terminals](https://github.com/openai/codex/pull/41673)**
   Fixes a terminal cursor corruption bug where older JediTerm versions overwrite glyphs when parsing `DECSCUSR` space intermediates. Niche but important for TUI polish on older terminals.

7. **[#41666 — Approve first Node REPL execution without Guardian wait](https://github.com/openai/codex/pull/41666)**
   Fast-approves the first `js` execution from Node REPL-backed servers while Guardian classification runs asynchronously. Reduces startup latency for REPL workflows.

8. **[#41660 — Preserve Guardian authorization across history compaction](https://github.com/openai/codex/pull/41660)**
   Prevents history compaction and host-injected context from invalidating prior user authorization. Removes a class of false re-approval prompts after compaction.

9. **[#41630 — Update tests for default-enabled update_plan](https://github.com/openai/codex/pull/41630)**
   Synchronizes tests with the new `tools.update_plan.enabled` default (follow-up to #41744). Covers default, enabled, and disabled states.

10. **[#41613 — Move Vim history tests into the history search module](https://github.com/openai/codex/pull/41613)**
    Refactors Vim history-navigation tests to live alongside the history search implementation and shares the human-like typing helper. Internal quality improvement.

---

## Feature Request Trends
- **Remote control on Windows** — Users strongly want the "control other devices" capability that's already present on other platforms (#28919, #41121). Related WebSocket auth failures after enrollment indicate the backend support exists but is incomplete on Windows.
- **`reasoning.mode` configuration for GPT 5.6** — CLI users on API billing want explicit control over `reasoning.mode=pro`, not just effort levels (#32823).
- **Opt-in or controllable `update_plan` tool** — Addressed by PR #41744 (now default-off), suggesting community feedback that plan updates were intrusive.
- **Pet overlay improvements on Windows** — The new floating pet feature needs hit-region fixes and better drag behavior (#41501, #41513).
- **Session lifecycle transparency** — Users want clearer rules around ephemeral side-chat expiration (#25233) and bulk archive behavior (#41584).

---

## Developer Pain Points
- **Windows/WSL instability is the #1 recurring theme.** Multiple active threads on handshake failures (#41049, #40913), WSL project creation breakage (#41290), and poisoned shell state surviving reboots (#25317). Windows users feel like second-class citizens.
- **Rate-limit exhaustion without visibility.** Users report Codex burning through quotas on looping behavior (#34898) and Chronicle background summarization consuming 5-hour Plus quotas with no UI toggle (#23124). The new TUI rate-limit banners (#41742) are a step in the right direction.
- **Authentication fragility.** Desktop repeatedly signing out while CLI/web stay authenticated (#40815), Cloudflare challenges blocking CLI login (#16052), and Windows logins redirecting to phone verification (#39467) all suggest the auth layer needs hardening.
- **MCP auth silently failing.** OAuth MCP servers authenticate but never surface tools to threads (#20009) — a confusing failure mode with no diagnostic path.
- **Session management rough edges.** `resume --all` not listing sessions (#20165) and "active writer" failures after approval-mode use (#39823) break TUI power-user workflows.

---

*Digest generated from [openai/codex](https://github.com/openai/codex) activity on 2026-08-31.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-31

## 1. Today's Highlights

The Gemini CLI project is showing strong momentum with a fresh nightly release (v0.59.0-nightly.20260831) and a significant influx of merged fixes across core functionality, agent reliability, and security hardening. The community is actively surfacing persistent issues around subagent turn limits being misreported as success, generalist agent hangs, and shell command execution stalls—all of which are seeing active maintainer triage. Notably, a wave of Windows-specific and platform-parity fixes (line endings, paste handling, IPv6 loopback) has been merged, signaling continued polish for cross-platform developer experience.

## 2. Releases

**v0.59.0-nightly.20260831.g0bd1d4397** — [Release](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260830.g0bd1d4397...v0.59.0-nightly.20260831.g0bd1d4397)

Daily nightly release with the standard incremental changelog. No user-facing breaking changes noted; this is part of the ongoing nightly cadence.

## 3. Hot Issues

### 1. [Subagent recovery after MAX_TURNS reported as GOAL success (#22323)](https://github.com/google-gemini/gemini-cli/issues/22323)
**Priority: P1 | Bug | 13 comments | 👍 2**
A `codebase_investigator` subagent reports `status: "success"` with `Termination Reason: "GOAL"` even when it hits its turn limit before doing any analysis. This is a correctness issue that masks real interruptions as successful completions, which can mislead users and downstream automation.

### 2. [Generalist agent hangs indefinitely (#21409)](https://github.com/google-gemini/gemini-cli/issues/21409)
**Priority: P1 | Bug | 8 comments | 👍 8**
Whenever the CLI defers to the generalist agent, it can hang forever—even for trivial tasks like folder creation. Users report waiting up to an hour before cancelling. Workaround: instructing the model to avoid sub-agents entirely.

### 3. [Shell command execution gets stuck with "Waiting input" (#25166)](https://github.com/google-gemini/gemini-cli/issues/25166)
**Priority: P1 | Bug | 4 comments | 👍 3**
After executing simple CLI commands (that obviously don't await input), Gemini CLI sometimes shows the shell as active and "Awaiting user input," hanging indefinitely. Impacts core interactive workflows.

### 4. [Gemini does not use skills and sub-agents enough (#21968)](https://github.com/google-gemini/gemini-cli/issues/21968)
**Priority: P2 | Bug | 6 comments | 👍 0**
Community observation: Gemini doesn't proactively use custom skills and sub-agents even when highly relevant (e.g., with "git" or "gradle" skills defined). Only works when explicitly instructed—undermining the "agentic" value proposition.

### 5. [browser subagent fails in Wayland (#21983)](https://github.com/google-gemini/gemini-cli/issues/21983)
**Priority: P1 | Bug | 4 comments | 👍 1**
Browser subagent crashes in Wayland environments with termination reason "GOAL" but no actual work done. Likely tied to the broader issue of misreported successful termination in subagents.

### 6. [Add deterministic redaction and reduce Auto Memory logging (#26525)](https://github.com/google-gemini/gemini-cli/issues/26525)
**Priority: P2 | Security | 5 comments | 👍 0**
Auto Memory sends selected transcript content to the extraction model, with redaction instructions only *after* content enters model context. Also, the service can inadvertently log existing skills. A security/privacy concern for enterprise users.

### 7. [Surface or quarantine invalid Auto Memory inbox patches (#26523)](https://github.com/google-gemini/gemini-cli/issues/26523)
**Priority: P2 | Bug | 3 comments | 👍 0**
The memory inbox silently skips invalid patches (malformed, missing hunks, path escapes), and aggregate dismiss only removes valid ones—so junk accumulates invisibly. Pending inbox summary reads every `.patch` file blindly.

### 8. [Gemini CLI hits 400 error with >128 tools (#24246)](https://github.com/google-gemini/gemini-cli/issues/24246)
**Priority: P2 | Bug | 3 comments | 👍 0**
When more than 128 tools are available, the CLI encounters a 400 API error. Expectation: smarter tool limiting based on enabled tools in scope.

### 9. [Browser Agent ignores settings.json overrides (#22267)](https://github.com/google-gemini/gemini-cli/issues/22267)
**Priority: P2 | Bug | 3 comments | 👍 0**
`AgentRegistry` reads settings correctly, but the browser agent ignores overrides like `maxTurns` from `settings.json`. Configuration mismatch erodes trust in user-facing settings.

### 10. [Agent should stop/discourage destructive behavior (#22672)](https://github.com/google-gemini/gemini-cli/issues/22672)
**Priority: P2 | Bug | 3 comments | 👍 1**
In complex git operations, the model occasionally uses `git reset` or `--force` even when safer alternatives exist. For DB or resource maintenance, the model may not fully grasp the dangers of destructive modifications.

## 4. Key PR Progress

### 1. [fix(cli): synthesize bracketed-paste markers for unbracketed multi-line input (#26905)](https://github.com/google-gemini/gemini-cli/pull/26905) — **Merged**
Fixes premature submission of multi-line pastes on Windows Terminal / PowerShell / WSL2 (via ConPTY) when bracketed-paste sequences don't arrive. Detects paste-shaped stdin chunks and synthesizes markers.

### 2. [fix(core): include gemini-2.5-flash-lite in default fallback chain (#26914)](https://github.com/google-gemini/gemini-cli/pull/26914) — **Merged**
Adds `gemini-2.5-flash-lite` to the fallback chain when default Pro/Flash quotas are exhausted (1000 RPD free tier), eliminating manual `--model` overrides for free-tier users.

### 3. [fix(cli): restore previous extension on failed update (#26930)](https://github.com/google-gemini/gemini-cli/pull/26930) — **Merged**
If any step after the destructive uninstall fails during extension update, the user was left with no extension. Now restores the prior version.

### 4. [fix(core): normalize line endings in diff context snippets (#29132)](https://github.com/google-gemini/gemini-cli/pull/29132) — **Open**
Normalizes CRLF/CR line endings before computing diff context snippets, with a regression test for CRLF files. Addresses #29130.

### 5. [fix(core): suppress spurious ENOENT warning for transient subdirs (#28834)](https://github.com/google-gemini/gemini-cli/pull/28834) — **Merged**
Eliminates spurious "Could not read directory ... projects.json.lock: ENOENT" warnings during BFS workspace scanning when transient lock directories disappear between `readdir` and descent.

### 6. [fix(core): skip user agents dir when workspace is home (#28835)](https://github.com/google-gemini/gemini-cli/pull/28835) — **Merged**
Fixes "Duplicate agent name" warnings when running from `~` because project and user agent dirs resolve to the same path.

### 7. [fix(core): normalize MCP tool schemas to ensure type:object at root (#28839)](https://github.com/google-gemini/gemini-cli/pull/28839) — **Merged**
MCP servers sometimes advertise malformed schemas (missing/non-object `type`). Vertex AI strict mode rejects these; this PR normalizes before forwarding.

### 8. [fix(acp): populate cached/thought tokens in PromptResponse usage field (#28840)](https://github.com/google-gemini/gemini-cli/pull/28840) — **Merged**
ACP clients were overestimating cost ~3x for prompt-cache-heavy sessions because cached/thought token counts were dropped.

### 9. [fix(core): keep truncated MCP tool names unique (#28971)](https://github.com/google-gemini/gemini-cli/pull/28971) — **Open**
Qualified MCP tool names exceeding the API limit got shortened to first/last 30 chars, which is not injective—two tools can collapse to the same name. Adds uniqueness preservation.

### 10. [test(core): skip environment-dependent tests with a reason instead of failing (#28832)](https://github.com/google-gemini/gemini-cli/pull/28832) — **Merged**
On clean Windows checkouts, `vitest run` reported 13 failures not indicating product defects (privilege/PowerShell 7 issues). These now skip with reasons instead of failing.

## 5. Feature Request Trends

### 1. Persistent, file-based task tracking (replacing `WriteToDo`)
Issues #18836 and #21000 both push for moving from in-context TODO lists to persistent file-based CRUD tracking. Reduces "context rot," token costs, and memory loss between sessions.

### 2. AST-aware code navigation
Issue #22745 (and follow-up #22746) proposes using AST-aware file reads/search/mapping to precisely read method bounds, reduce noise, and cut token usage. Tools like `tilth` or `glyph` are suggested as starting points.

### 3. Zero-dependency OS sandboxing with post-execution intent routing
Issue #19873 proposes leveraging Gemini 3's native bash affinity by sandboxing subprocesses natively (no external deps) and routing post-execution intent for safer exploration.

### 4. Enhanced browser agent resilience
Issue #22232 requests automatic session takeover and lock recovery for the browser agent, instead of a "fail-fast" strategy on locked profiles.

### 5. Better subagent trajectory visibility
Issue #22598 wants subagent trajectories visible and shareable via `/chat share`, improving review and eval workflows.

## 6. Developer Pain Points

### 1. Misleading "success" signals from subagents
Multiple issues (#22323, #21983) show subagents reporting "GOAL" success when they actually hit limits or skipped work. This erodes trust in automation and can silently corrupt outputs.

### 2. Hangs & freezes in core workflows
Issues #21409 (generalist agent hangs), #25166 (shell stuck "awaiting input"), and #22465 (stuck at interactive prompts) collectively describe a class of reliability problems that block productivity. The workaround—telling the model to avoid sub-agents—is a poor trade-off.

### 3. Subagents under-utilized without explicit instruction
#21968 captures the community's perception that Gemini doesn't proactively use skills/sub-agents even when clearly relevant. This reduces the value of the "agentic" features users configure.

### 4. Windows/second-class platform pain
Issues like PowerShell 7 test failures (#28832), ConPTY paste issues (#26905), and CRLF/line-ending surprises (#29132, #28983) repeatedly show Windows parity gaps that frustrate developers on that platform.

### 5. Token context bloat and uncontrolled file access
Issues #19561 (Tactful Extraction), #23571 (random tmp scripts), and #24246 (tool count limits) all relate to the model being token-frugal but not intelligent enough about what to read/write and when.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-31

## Today's Highlights

The Copilot CLI community is navigating the fallout from the **v1.0.81 release**, which introduced regressions in OAuth authentication behind corporate TLS-inspecting proxies and broke remote MCP server auth flows. Meanwhile, long-running session reliability remains the dominant pain point, with multiple critical reports of **runaway FileWatch event loops**, **heap out-of-memory crashes on session resume**, and **compaction failures** across different model configurations. Notably, a concerning anti-pattern emerged where interrupted `create_session` calls silently execute nearly two hours later, duplicating agent work.

---

## Releases

No new releases were published in the last 24 hours. The community is still operating on **v1.0.81**, which is at the center of several active regression reports.

---

## Hot Issues

### 1. [Runaway FileWatch host-event loop freezes TUI and grows debug log to 13 GB](https://github.com/github/copilot-cli/issues/4612) — #4612 [OPEN]
Long-running sessions can enter a tight loop emitting `No connection accepted a host event {"kind":"FileWatch"}` messages, freezing the terminal UI and bloating debug logs to 13 GB. This is a severe stability issue affecting production users who rely on session persistence.

### 2. [1.0.81 regression: OAuth login fails behind a TLS-inspecting HTTP proxy while 1.0.80 works](https://github.com/github/copilot-cli/issues/4671) — #4671 [OPEN]
Both device-code and web flows fail behind corporate proxies with TLS inspection, affecting enterprise users exclusively. The regression from 1.0.80 makes this a blocker for organizations with mandatory proxy policies.

### 3. [Copilot CLI crashes with JavaScript heap out of memory when resuming a long-standing session](https://github.com/github/copilot-cli/issues/4664) — #4664 [OPEN]
Resuming large sessions triggers a fatal V8 heap OOM during session loading, making it impossible to recover long-running agent/work contexts. Related to the broader session-memory management concerns.

### 4. [Interrupted create_session still creates the session ~1.6 hours later, silently duplicating agent work](https://github.com/github/copilot-cli/issues/4668) — #4668 [OPEN]
A `create_session` tool call reported as interruped actually completed and auto-started **1 hour 38 minutes later**, duplicating work the agent had already done manually. This could cause significant operational chaos in automated pipelines.

### 5. [Organisation level Agent not showing up](https://github.com/github/copilot-cli/issues/1285) — #1285 [OPEN]
Enterprise agents stored in `{org}/.github-private` don't surface in the CLI or VS Code tool despite correct templating. This has been open since February with 9 upvotes, indicating a long-standing gap in enterprise agent discoverability.

### 6. [Custom agent `tools:` — `web` and `search` aliases bind zero tools on CLI 1.0.81-9](https://github.com/github/copilot-cli/issues/4594) — #4594 [OPEN]
Documented category aliases silently bind zero tools — no errors, warnings, or logs. Custom agents lose web access and file search without any diagnostic signal. A classic silent-opt-out failure mode.

### 7. [Copilot CLI incorrectly switches back to previous model after switching to BYOK](https://github.com/github/copilot-cli/issues/3978) — #3978 [OPEN]
After exhausting AIC credits and switching to BYOK, the CLI reverts to the previous (depleted) model on session resume. Users unknowingly accrue costs against exhausted quotas; 4 upvotes signal community frustration.

### 8. [Compaction fails with "CAPIError: 400 Tool choice must be auto" on custom models](https://github.com/github/copilot-cli/issues/4646) — #4646 [OPEN]
Session compaction is broken for custom models (e.g., OpenRouter-registered models), rendering long sessions unusable for users who rely on non-standard model endpoints.

### 9. [Remote ADO MCP server with OAuth fails in v1.0.81 WAM implementation](https://github.com/github/copilot-cli/issues/4660) — #4660 [CLOSED]
This was resolved quickly, but the regression highlights broader MCP auth instability in the latest release. Closed status suggests a fix landed within ~48 hours.

### 10. [Managed telemetry.headers prevents OpenTelemetry (OTEL) export](https://github.com/github/copilot-cli/issues/4669) — #4669 [OPEN]
Adding any entry to `telemetry.headers` in managed settings silently disables all telemetry export. Observability teams lose visibility exactly when they need it most — a configuration trap.

---

## Key PR Progress

No pull requests were updated in the last 24 hours. This is notable given the cluster of [triage]-labeled issues filed over the weekend — the maintainers may be processing a backlog, but community PRs and fixes are currently dormant.

---

## Feature Request Trends

### 1. **Enterprise agent visibility and management** — [#1285](https://github.com/github/copilot-cli/issues/1285)
Users expect org-level agents from `.github-private` repositories to be automatically discoverable in both CLI and IDE tools. This has been an open request since February, suggesting the current discovery mechanism is insufficient for enterprise deployments.

### 2. **Reduced session persistence overhead** — [#4664](https://github.com/github/copilot-cli/issues/4664), [#4668](https://github.com/github/copilot-cli/issues/4668)
Long-lived sessions are central to the CLI's value proposition, but memory bloat, slow resume times, and phantom session creation undermine reliability. Users want session snapshotting to be more memory-efficient and cancellation to be truly authoritative.

### 3. **Custom model / BYOK lifecycle improvements** — [#3978](https://github.com/github/copilot-cli/issues/3978), [#4646](https://github.com/github/copilot-cli/issues/4646)
The community is actively using custom model endpoints (OpenRouter, BYOK), but the CLI's model management doesn't handle credit exhaustion, model switching, or custom provider quirks gracefully. Clear model affinity tracking and provider-agnostic compaction would go a long way.

### 4. **Zero-diagnostic silent failures** — [#4594](https://github.com/github/copilot-cli/issues/4594), [#4669](https://github.com/github/copilot-cli/issues/4669)
Multiple features fail silently — tool bindings, telemetry exports, MCP auth — with no log output or user-facing warnings. Users are asking for **fail-loud** behavior: if a feature isn't working, the CLI should surface it prominently, not quietly degrade.

---

## Developer Pain Points

### 1. **Session resume and compaction instability** — recurring theme across [#4612](https://github.com/github/copilot-cli/issues/4612), [#4664](https://github.com/github/copilot-cli/issues/4664), [#2861](https://github.com/github/copilot-cli/issues/2861), [#4646](https://github.com/github/copilot-cli/issues/4646)
Resuming a session is a gamble — it may freeze the TUI, crash the process, or fail compaction with opaque model API errors. For developers who treat the CLI as a long-running assistant, this is the **top frustration** driving churn.

### 2. **Regression-prone v1.0.81 release** — [#4671](https://github.com/github/copilot-cli/issues/4671), [#4660](https://github.com/github/copilot-cli/issues/4660), [#4594](https://github.com/github/copilot-cli/issues/4594)
The pattern of silent functional regressions (proxy auth, MCP auth, tool binding) across point releases erodes trust in the release pipeline. Users want faster regression testing coverage for enterprise environments.

### 3. **Silent configuration traps** — [#4669](https://github.com/github/copilot-cli/issues/4669), [#4169](https://github.com/github/copilot-cli/issues/4169), [#4594](https://github.com/github/copilot-cli/issues/4594)
Configuration and feature bindings fail without warnings. Developers spend hours debugging why telemetry isn't exported, why tools aren't available, or why sessions persist unexpectedly — only to discover a config entry or alias silently disabled the feature.

### 4. **Extension and tool lifecycle races** — [#4670](https://github.com/github/copilot-cli/issues/4670), [#3606](https://github.com/github/copilot-cli/issues/3606)
Extensions that fail during resume leave stale tool bindings that hang indefinitely; newly installed plugin skills aren't usable until a manual reload. The lifecycle model for extensions/plugins needs to be more deterministic and self-healing.

---

*Digest generated from github.com/github/copilot-cli — snapshot as of 2026-08-31.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-31

## Today's Highlights
Quiet day for the Kimi Code CLI project with no new releases or pull request activity in the last 24 hours. Two new issues were filed: one reporting a tool-call mismatch between UI and wire protocol (Read vs. Write), and another flagging an iPadOS login failure on the Remote Control Web interface. The community is currently waiting for maintainer response on both reports.

## Releases
No new releases in the last 24 hours. The latest version remains **0.39.1**.

## Hot Issues
1. **[#2628 — Model emits Read tool calls instead of Write/Edit — text says 'calling Write', wire shows Read (0.39.1, k3-256k)](https://github.com/MoonshotAI/kimi-cli/issues/2628)** — A semantic mismatch between the CLI's displayed tool name and the actual tool invoked over the wire. This suggests a potential log-rendering issue or a deeper discrepancy between the model's tool selection and the execution layer. Important for anyone debugging agentic workflows.

2. **[#2627 — Remote Control login fails to start on iPadOS 16.6 (Safari/WeChat) — "无法开始登录" at code-rc.kimi.com](https://github.com/MoonshotAI/kimi-cli/issues/2627)** — Users on iPadOS 16.6 are unable to initiate login on the Remote Control web endpoint, blocking use of the Remote Control feature from Apple tablets. Affects developers who manage Kimi CLI sessions from mobile devices.

## Key PR Progress
No pull requests were updated or merged in the last 24 hours.

## Feature Request Trends
No new feature requests were filed in this window. The long-term trajectory remains unchanged: users continue to prioritize **reliable tool-call fidelity**, **cross-device Remote Control support**, and **broader platform compatibility** across the stack.

## Developer Pain Points
Two recurring friction points are visible in the recent issue queue:
- **Tool-call display vs. execution mismatch** — Developers need the CLI's textual feedback to accurately reflect what the model actually executes, especially when using structured tool calls for file edits.
- **Remote Control login fragility** — Issues persist around the Remote Control feature across non-primary platforms (iOS/Safari/WeChat in-app browsers), indicating that the authentication flow is not yet robust across all webview environments.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-31

## Today's Highlights

The community is laser-focused on data integrity and session reliability. The most pressing concerns are SQLite database bloat (13GB+ from unbounded event tables), strict-provider rejections of empty assistant messages that brick sessions, and post-compaction context loss. The maintainers are responding with a wave of targeted stability PRs today, including fixes for Bedrock payload validation, shell pipe draining, and event consumer isolation. Additionally, a long-requested feature for session goals has surfaced as an example plugin, signaling a move toward SDK-driven extensibility rather than core changes.

---

## Releases

No new releases published in the last 24 hours. The most recent version referenced across issues is **1.18.25** (desktop).

---

## Hot Issues

1. **[#27167 — [FEATURE]: Add native session goals with /goal](https://github.com/anomalyco/opencode/issues/27167)** — 76 comments, 139 👍  
   The community's most upvoted feature request. Users want a persistent, native session-goal lifecycle instead of relying on ad-hoc custom slash commands. Community is actively discussing UX semantics, and it has sub-issues around `/loop` and final-token queueing.

2. **[#33356 — Unbounded growth of the `event` table: opencode.db reaches 13GB+](https://github.com/anomalyco/opencode/issues/33356)** — 25 comments  
   A critical database bloat issue. Long-running instances hit 13GB of `message.updated.1` snapshots with no retention or compaction policy, filling volumes to 97–99%. Users are reporting this as an operational risk for production usage.

3. **[#41358 — After auto-compaction the agent continues thinking/acting without confirmation and loses track of the goal](https://github.com/anomalyco/opencode/issues/41358)** — 7 comments  
   Windows Desktop users report that post-compaction, the agent does not pause for confirmation and forgets the original task. This is a safety and correctness concern, closely tied to PR #45125 which addresses context restoration.

4. **[#19130 — Windows ARM64 native: OpenTUI fails to initialize with bun:ffi dlopen TinyCC error](https://github.com/anomalyco/opencode/issues/19130)** — 20 comments, 13 👍  
   Native ARM64 binaries fail at TUI initialization due to a Bun/FFI dlopen TinyCC error. Non-interactive commands work, but the interactive shell is broken for Windows-on-ARM users.

5. **[#37354 — OpenRouter unauthorized requests to Gemini models](https://github.com/anomalyco/opencode/issues/37354)** — 7 comments  
   OpenCode sends unauthorized "Nano Banana 2" (Gemini) requests even when a different model is selected, causing confusion and potential hidden API costs. Users are looking for a way to disable these phantom requests.

6. **[#32202 — Skill duplicate roots can change available_skills across restarts](https://github.com/anomalyco/opencode/issues/32202)** — 6 comments  
   Non-deterministic behavior: when a skill name exists in multiple roots, OpenCode picks a different root on each process start, leading to inconsistent `<available_skills>` lists. Erodes trust in agent reproducibility.

7. **[#39864 — Codex OAuth Fast models run at standard throughput](https://github.com/anomalyco/opencode/issues/39864)** — 4 comments  
   ChatGPT-authenticated Fast model entries send `service_tier: "priority"` but don't deliver the speed boost the same account gets in the official Codex CLI. A performance expectation gap for a paid tier.

8. **[#37946 — Aborted assistant turn persisted with zero content bricks the session](https://github.com/anomalyco/opencode/issues/37946)** — 5 comments  
   Aborting a hung session persists an empty assistant message that gets replayed as a 400 error on subsequent turns, permanently bricking the session. This has spawned a companion plugin and multiple PRs.

9. **[#39451 — Kimi K3: HTTP 400 "assistant message must not be empty" when switching models mid-session](https://github.com/anomalyco/opencode/issues/39451)** — 3 comments  
   Variant of the empty-assistant-message bug, specifically triggered by model switching. Strict providers like Moonshot reject tool-only turns with empty content.

10. **[#23982 — LSP initialize timeout too short for Java/Gradle projects](https://github.com/anomalyco/opencode/issues/23982)** — 5 comments  
   The ~15s default LSP `initialize` timeout fails for JDTLS which needs ~114s. Java/Gradle users cannot get `lsp_diagnostics` working at all. Closed, but a high-friction pain point.

---

## Key PR Progress

1. **[#33247 — feat: Add queued message editing, wrap & steer, and halt & steer](https://github.com/anomalyco/opencode/pull/33247)** — *Open*  
   A major UX feature bundling message queue editing, steering, and halting. Closes 9 related feature requests and is a strong signal of where the TUI interaction model is headed.

2. **[#45125 — feat(core): enhanced compaction with ratios and combined context-restoration advancement](https://github.com/anomalyco/opencode/pull/45125)** — *Open*  
   Addresses the compaction context-loss problem. Introduces a restoration-document prompt and recent-context signals to keep task goals alive across the compaction boundary. Directly tackles #41358.

3. **[#45839 — fix(opencode): drop assistant turns without model-visible content from replay](https://github.com/anomalyco/opencode/pull/45839)** — *Open*  
   Fixes session-bricking empties. Filters out zero-content assistant turns before replay, preventing 400s on strict providers (Moonshot/Kimi, DeepSeek, Azure). Closes #37946 and #31046.

4. **[#46328 — feat(plugin): add goal-loop example plugin](https://github.com/anomalyco/opencode/pull/46328)** — *Open*  
   Offers a plugin-based implementation of `/goal` and `/loop` via the SDK. Closes #27167 without core changes, demonstrating the new extensibility direction.

5. **[#46336 — fix(desktop): preserve Windows editing shortcuts](https://github.com/anomalyco/opencode/pull/46336)** — *Merged*  
   Reassigns Home from Ctrl+B to Alt+Home and stops intercepting standard editing shortcuts. Ctrl+V and other Windows-native combos now reach the composer directly.

6. **[#46326 — fix(core): flush trailing stream chunks while providers pause](https://github.com/anomalyco/opencode/pull/46326)** — *Merged*  
   Fixes the "thinking stalls then resumes" bug. The 100ms batching check now runs on a timer, not only on chunk arrival, so pending text is flushed even when the provider pauses.

7. **[#46333 — fix(ai): validate Bedrock media data](https://github.com/anomalyco/opencode/pull/46333)** — *Merged*  
   Validates and canonicalizes base64 image/document data before sending to Bedrock, rejecting malformed media strings and remote tool-result URLs with a clean `InvalidRequest`.

8. **[#46335 — fix(ai): sanitize blank Bedrock text blocks](https://github.com/anomalyco/opencode/pull/46335)** — *Merged*  
   Prevents whitespace-only text blocks from reaching Bedrock Converse, which rejects them with HTTP 400. Keeps whitespace on retained non-blank text.

9. **[#46085 — fix(shell): bound post-exit pipe draining on all platforms](https://github.com/anomalyco/opencode/pull/46085)** — *Open*  
   Fixes hangs with long-lived descendants (`bunx agent-browser`, `dotnet build`/`test`) that keep stdout/stderr open after the foreground process exits, preventing shell completion.

10. **[#46329 — fix(client): isolate shared event consumers](https://github.com/anomalyco/opencode/pull/46329)** — *Open*  
   Buffers shared events independently per subscriber so a paused permission consumer can't block unrelated sessions. Improves concurrency reliability in the client layer.

---

## Feature Request Trends

- **Session Goals and Steering (High Signal)** — The `/goal` request (#27167) is the top-voted item. Users want persistent, visible objectives that survive compaction. The related PR cluster (#33247) around queued message editing, wrapping, and "halt & steer" shows demand for granular human-in-the-loop control over agent execution.
- **Native Session Recovery** — Multiple issues (#37946, #39451, #37887, #31046) confirm users need automatic recovery from empty-assistant-message 400 errors. This is the single most disruptive bug class right now, impacting strict providers including Kimi and DeepSeek.
- **Self-Healing and Maintenance** — Database bloat (#33356), compaction safety (#41358), and deterministic skill loading (#32202) point to a demand for "set-and-forget" reliability. Users shouldn't need to manually purge databases or restart sessions.

---

## Developer Pain Points

- **Session-Bricking 400s on Strict Providers** — The most common and most severe complaint. Empty assistant messages persisted in history cause permanent failures on Moonshot/Kimi, DeepSeek, and Azure. The community is actively building plugins to work around this while waiting for the core fix (#45839).
- **Database and Context Management** — The unbounded `event` table causing 13GB+ databases is forcing users to manually manage storage. Paired with post-compaction context loss and "infinite compaction loops," long-session reliability is a major trust issue.
- **Windows-Specific Fragmentation** — From ARM64 TUI failures and UNC path breakage in WSL to mojibake in embedded shells and broken uninstall flows, Windows users face a disproportionate share of platform bugs. Today's shortcut fixes (#46336, #46338) show this is being actively addressed.
- **Mysterious Background Requests** — Users are uncomfortable with unauthorized model requests on OpenRouter (#37354) and unexpected throughput behavior on paid tiers (#39864).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-31

## Today's Highlights

A wave of bug-fix PRs landed addressing critical correctness issues in the openai-completions and Anthropic provider paths, including tool-call deduplication, markdown-fenced argument parsing, and the long-debated DeepSeek V4 Responses API migration. The community is actively converging on provider robustness (DeepSeek, StepFun, Tencent) and extension API consistency, with maintainers moving quickly to close 20+ untriaged issues filed in the last 48 hours.

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

**1. [Windows support: where to focus? (#7547)](https://earendil-works/pi/issues/7547)** — The community's largest thread (51 comments). A maintainer-driven call to catalog Windows usage patterns; the goal is to identify which execution modes (WSL, native, Docker) deserve first-class support. High-signal discussion for Windows-bound developers.

**2. [pi-tui keybindings singleton breaks extensions (#4748)](https://earendil-works/pi/issues/4748)** — Extensions resolving their own `@earendil-works/pi-tui` copy never receive the host's keybindings, so `keyText()` hints render empty. Fixed by PR #8872, but the root cause (module duplication across extension boundaries) is a systemic concern.

**3. [0.84.3 OOM kills at 21-27GB with subagents (#8746)](https://earendil-works/pi/issues/8746)** — Started as a regressions report; five kernel OOM kills in two days, parent and subagent sessions both die. The community is treating this as a memory-retention regression specifically in 0.84.3, not a general leak.

**4. [JSONL session opened twice → duplicate seq and corruption (#8852)](https://earendil-works/pi/issues/8852)** — A concrete data-loss bug: two `JsonlSessionStorage` instances in one process both start at `seq: 1` and silently interleave writes. Fix in PR #8853 is already merged — a good example of fast community-to-fix turnaround.

**5. [Long sessions hit unrecoverable context-window death spiral (#8864)](https://earendil-works/pi/issues/8864)** — The estimate anchors on the last assistant message's reported `totalTokens`; when clamped to `max_tokens: 1`, the anchor self-defeats and recovery is impossible. Community reaction: this needs a hard escape hatch, not just better clamping.

**6. [Anthropic prompt cache never reads transcript back (#8849)](https://earendil-works/pi/issues/8849)** — `cacheRead` flatlines at system+tools for an entire session while `cacheWrite` climbs every turn. The session JSONL forensics are well-documented; cost implications are significant for long sessions.

**7. [Branch summarization hits hardcoded 2048-token cap (#8845)](https://earendil-works/pi/issues/8845)** — Large branches deterministically fail with "generation hit the token cap." Root cause is the input budget (`contextWindow - reserveTokens`) being smaller than the pinned output cap. PR #8862 fixes it by deriving the output budget from `reserveTokens`.

**8. [Dangling tool_use after branching + 413 on compaction (#8859)](https://earendil-works/pi/issues/8859)** — A two-part production-blocker report: (1) a `tool_use` block survives into a branch turn and triggers a 400; (2) compaction estimates token counts but misses byte-size limits, causing 413s on Claude Opus 5. Good JSONL forensics — this is a high-priority fix target.

**9. [openai-completions: two tool calls sharing one `index` — second silently dropped (#8861)](https://earendil-works/pi/issues/8861)** — A silent data-loss bug: when two deltas share an `index` but have distinct `id`s, the accumulator keeps only the first call. Community consensus: this should be a validation error, not a silent drop.

**10. [OpenRouter auto catalog records negative dollar costs (#8875)](https://earendil-works/pi/issues/8875)** — `openrouter/auto` entries list `"input": -1000000` as cost-per-million-tokens. The catalog generator treats "unknown" as -1M; this breaks cost accounting for anyone using the auto model.

---

## Key PR Progress

**1. [feat(ai): Tencent Token Plan provider (#8876)](https://earendil-works/pi/pulls/8876)** — Adds five models (tc-code-latest, deepseek-v4-flash/pro, glm-5.2, minimax-m2.7) via a single `TENCENT_TOKEN_PLAN_API_KEY`. Notes GLM-5/5.1 omitted due to reasoning toggle-only controls.

**2. [fix(ai): serve DeepSeek V4 through the OpenAI Responses API (#8873)](https://earendil-works/pi/pulls/8873)** — Migrates `deepseek-v4-flash`, `deepseek-v4-pro`, and `vision-exp` from Completions to Responses API. This closes the long-standing DeepSeek /responses gap (issue #7559) and is a community priority.

**3. [fix(coding-agent): expose host keybinding access on the extension API (#8872)](https://earendil-works/pi/pulls/8872)** — Directly fixes #4748: extensions now receive the host's merged keybinding manager, so `keyText()` works. Small surface, high impact for extension UX.

**4. [fix(ai): unref codex WebSocket idle-cache timer (#8866)](https://earendil-works/pi/pulls/8866)** — Fixes the 5-minute process hang after `pi -p` runs when a codex provider extension is in use. Also documents extension-side session resource cleanup — a good API hygiene addition.

**5. [fix(agent,coding-agent): derive branch summary output budget from reserveTokens (#8862)](https://earendil-works/pi/pulls/8862)** — Fixes #8845 by computing the summary output budget from `reserveTokens` instead of hardcoding 2048. Small but prevents a deterministic failure on every large branch.

**6. [fix(agent): prevent duplicate JSONL writers (#8853)](https://earendil-works/pi/pulls/8853)** — Serializes writable opens by canonical session path and supersedes older in-process writers before sequence allocation. Full session test suite (123 tests) passes.

**7. [fix(ai): preserve aborted stop reason during lazy setup (#8635)](https://earendil-works/pi/pulls/8635)** — Passes the abort signal through lazy stream setup wrappers and reports setup failures as aborted when the signal is already aborted. Regression test included; important for timeout correctness.

**8. [DONT MERGE: dev branch (#8232)](https://earendil-works/pi/pulls/8232)** — Maintainer-pinned CI/commenting branch; effectively invisible for feature tracking but worth noting that contributor CI tests are routed here.

**9. [fix(tui): render markdown soft line breaks as spaces (#8751)](https://earendil-works/pi/pulls/8751)** — A clean CommonMark compliance fix: single `\n` in a paragraph is now a soft break (space) instead of a hard break. Merged — improves TUI rendering fidelity.

**10. [feat(bash): optional `description` argument for tool output (#8863)](https://earendil-works/pi/pulls/8863)** — Adds a one-line description displayed above `$ <command>` in the TUI and carried in the `tool_use` block. Harmless elsewhere; improves readability for complex orchestration.

---

## Feature Request Trends

- **Provider breadth is the #1 demand.** New providers/catalog entries in active discussion or PR: DeepSeek /responses (#7559, #8873), StepFun (#8867), Tencent Token Plan (#8876), Ollama Cloud (#4706), and z.ai API endpoints (#6723). Expect a thicker `packages/ai` catalog soon.

- **Context-window and cost transparency.** Users are hitting hard limits with no visibility: the context-window death spiral (#8864), Anthropic cacheRead flatlining (#8849), and negative dollar costs in OpenRouter auto (#8875) all point to a need for observable, provider-accurate token and cost accounting.

- **System prompt bloat from ecosystem packages.** One community proposal (#8854) offers a "pi-prompt-diet" approach to trim accumulated third-party `promptGuidelines` from 8-15 installed packages. This is a moderation/design question, not a pure bug — expect RFC discussion.

- **Session and file robustness.** Duplicate JSONL writers (#8852), dangling tool_use after branching (#8859), and byte-size compaction misses (same issue) all indicate a need for a stronger session I/O model.

- **Extension API ergonomics.** Keybinding access (#4748/#8872), distinguishing tool errors from handler failures (#8856), and configuring bash full-output directories (#8869) show a maturing desire to make third-party extensions first-class citizens.

---

## Developer Pain Points

- **Windows is still a mess.** #7547 is the most-commented issue on the board; the community is split on WSL vs native vs Docker, and maintainers are actively asking where to focus. Without a clear directive, Windows support remains fragmented.

- **Memory instability in the 0.84.x line.** OOM kills at 21-27GB (#8746) with subagents is scary; users on 0.84.2 were fine. Regression suspicion is high, and there's no acknowledgment yet.

- **Silent data loss is the worst class of bug.** Whether it's dropped tool calls (#8861), duplicate seq writes (#8852), or markdown-fenced arguments degrading to `{}` (#8858), silent failure destroys trust. The community consistently upvotes these over cosmetic fixes.

- **The "wait, it times out or hangs" bucket.** No tool-call execution timeout (#8857) and the 5-minute codex WebSocket hang (#8868/#8866) are both symptoms of the same gap: the agent loop lacks a universal watchdog.

- **Costs are opaque.** Between cacheRead flatlining (#8849), negative catalog costs (#8875), and the death-spiral anchoring (#8864), developers cannot predict or audit spend. This is now a recurring theme across multiple issues.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-31

## Today's Highlights
The project is in an intense stabilization phase: multiple security-focused reviews (Git config hook execution, worktree checkout ordering) and CI reliability fixes (shared ECS runner contention, release workflow dispatchability) dominate the queue. Meanwhile, feature velocity continues on Web Shell (workflow runs visualization, model reasoning persistence) and the OpenTUI migration lands its fourth batch (dialogs, commands, session-rewind).

## Releases
No new stable releases in the last 24 hours. One nightly release attempt (`v0.22.3-nightly.20260830.413b6d15d3`) failed in the `integration_none` job — tracked in [#10535](https://github.com/QwenLM/qwen-code/issues/10535). Notably, this is the **second consecutive nightly failure** on the integration path, suggesting a systematic CI gap rather than a flaky test.

## Hot Issues

1. **[#8124 — Startup banner missing top lines on first paint](https://github.com/QwenLM/qwen-code/issues/8124)** (15 comments)  
   The TUI's `<Static>` header intermittently drops its top lines on first output, correlating with pending provider updates. A Windows-first rendering race — painful for first-impression UX, actively discussed.

2. **[#8724 — Cross-session messaging between local sessions](https://github.com/QwenLM/qwen-code/issues/8724)** (12 comments, in-progress)  
   `list_agents` / `send_message` for same-machine multi-session orchestration, fail-closed by design. Part of the multi-agent roadmap; substantial community appetite.

3. **[#8784 — MCP: optional GET/SSE rejection kills entire connection](https://github.com/QwenLM/qwen-code/issues/8784)** (5 comments, closed)  
   A spec-compliant MCP server that legitimately 404s the optional SSE probe takes down the whole Streamable HTTP session. Fixed — a textbook spec-literalism bug.

4. **[#10538 — Computer Use driver panics on Windows x64](https://github.com/QwenLM/qwen-code/issues/10538)** (3 comments)  
   `@qwen-code/cua-sdk@0.20.0` panics on every embedded runtime creation (Windows 11, Node 24). A regression in the native payload — critical for Windows automation users.

5. **[#10561 — Git config keys are an open command-execution entrance](https://github.com/QwenLM/qwen-code/issues/10561)** (P1 security)  
   `fsmonitor`, `hooks`, and user-global config can turn *any* git spawn in the review pipeline into arbitrary command execution. A class-level finding — reviewer `wenshao` won't close it without systemic mitigation.

6. **[#10560 — Worktree creation checkouts run before any filter](https://github.com/QwenLM/qwen-code/issues/10560)**  
   Probe- and base-tree creation in the review pipeline executes before content filters. An order-of-operations security gap that's being fast-tracked.

7. **[#10564 — Web Shell masks real provider errors as "Internal error"](https://github.com/QwenLM/qwen-code/issues/10564)** (closed)  
   Generic error text hid actionable provider rejections. Root cause: JSON-RPC error details sat in `data` while the UI read only `message`. Sibling issue [#10570](https://github.com/QwenLM/qwen-code/issues/10570) covers the SDK side.

8. **[#4016 — Encrypted storage for sensitive config (AES-256-GCM)](https://github.com/QwenLM/qwen-code/issues/4016)**  
   Long-running request (since May) for encrypting API keys/tokens at rest. Community continues to push on plaintext `settings.json` — a welcome-PR candidate.

9. **[#10557 — Closing a permission diff tab locks the approval row](https://github.com/QwenLM/qwen-code/issues/10557)**  
   In the VSCode web-shell, closing a permission diff without voting leaves the approval row permanently locked, with no re-open path. A genuine workflow dead-end.

10. **[#10583 — Lightweight Bubblewrap sandbox backend for Linux](https://github.com/QwenLM/qwen-code/issues/10583)**  
    A `bwrap`-based alternative to Docker/Podman for local tool isolation. Directly addresses heavyweight-container pain — expect strong traction.

## Key PR Progress

1. **[#10594 — Visualize/manage dynamic workflow runs in Web Shell](https://github.com/QwenLM/qwen-code/pull/10594)**  
   Capability-gated Workflow Runs page: browse live/historical runs, inspect phase/dispatch progress, tokens, approvals; pause/resume/cancel/retry/rerun/delete.

2. **[#10368 & #10383 — OpenTUI migration batches 3 & 4](https://github.com/QwenLM/qwen-code/pull/10368)**  
   Live-session streaming fold, progressive MCP displays, then dialogs (19 modules: auth, MCP, memory-status) plus command routing and session-rewind.

3. **[#10201 — Harden read-only Git approval against config hooks](https://github.com/QwenLM/qwen-code/pull/10201)** (self-reported)  
   Coverage for `diff.external`, `diff.<driver>.command`, `textconv`; treats apparent read-only git as potentially executable. Directly closes the #10561 class.

4. **[#10206 — Fail closed on unresolved shell write redirects](https://github.com/QwenLM/qwen-code/pull/10206)** (self-reported)  
   Dynamic redirects like `>"$PWD/protected.txt"` can't resolve to a concrete `Write` op — now fails closed rather than silently allowing.

5. **[#10597 — Raise E2E ceiling on shared ECS pool to 90 min](https://github.com/QwenLM/qwen-code/pull/10597)**  
   Contended runner pool kept blowing the 60-minute flat ceiling; scoped to exactly the ECS-routed shards, hosted fallbacks unaffected.

6. **[#10598 — Make Release workflow dispatchable](https://github.com/QwenLM/qwen-code/pull/10598)**  
   Moves runner-environment mapping from jobs to the four Vitest-invoking steps — addressing the #10535 release failure class.

7. **[#10543 — Operator-controllable Goal token budget](https://github.com/QwenLM/qwen-code/pull/10543)**  
   `model.goalTokenBudget` lets operators size or disable the autonomous spend window introduced in #9891.

8. **[#10390 — Unblock git update on dirty working tree](https://github.com/QwenLM/qwen-code/pull/10390)** (autofix/takeover)  
   Replaces the dead-end one-line error with a resolution panel: stash/discard/commit-and-rebase flows.

9. **[#9590 — Provider-aware reasoning controls](https://github.com/QwenLM/qwen-code/pull/9590)**  
   DeepSeek V4, GLM 5.2, Kimi get endpoint-matched reasoning controls: toggle-only hybrids, canonical effort tiers, mandatory-thinking without off switch.

10. **[#10344 — Opt-in prompt-settled close grace for SSE clients](https://github.com/QwenLM/qwen-code/pull/10344)**  
    Poll-based SSE clients get a reconnection window (`--session-prompt-settled-close-grace-ms`) instead of losing their cursor on reconnect.

## Feature Request Trends

- **Workflow visualization & orchestration** (multiple PRs this week: #10594, #9033, #8724): The Workflow runtime is maturing — visual management, cross-session messaging, session-scoped control routes.
- **Sandbox breadth** (#10583, #10377): Beyond Docker — lightweight native options (Bubblewrap) and programmatic tool-calling mode à la OpenAI Codex `CodeModeOnly`.
- **Config ergonomics** (#10568, #4016, #10543): Hot-reload of model config, encrypted credential storage, operator-tunable budgets. The "config as plaintext JSON" model is hitting limits.
- **Multi-session/multi-agent** (#8724, #9033): Same-machine session interop and Workflow exposure via daemon — the foundation for background automation.
- **Worktree improvements** (#10584, #10226): Optional worktrees and `.worktreeinclude` for copying gitignored files into them.

## Developer Pain Points

- **Windows is still second-class**: IME cursor corruption (Termius, #10562), CUA driver panic (#10538), startup banner rendering race (#8124) — a cluster of Windows-specific issues persists.
- **Redundant restart cycles**: Model config requires full CLI restart (#10568) — a workflow-intrusive wart next to Qoder's hot-reload.
- **Obscured diagnostics**: Generic "Internal error" surfacing (#10564, #10570) hides root causes; users want the real provider message on the glass.
- **Security/naivety tension**: Hook-executable git configs (#10561), pre-filter worktree checkouts (#10560), and write-redirect ambiguity (#10206) — review tooling must trust *nothing* from upstream git config.
- **CI/nightly instability**: Two consecutive failed nightly releases (#10535), shared-runner contention (#10597), and a 15-comment thread on a rendering race (#8124) suggest the bot-driven autofix loop is discovering real integration debt faster than it's being resolved.

---

*Data window: 2026-08-30 → 2026-08-31. Top issues/PRs sorted by comment count; labels and priority tags preserved from source.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-31

*Note: The repository has been renamed from DeepSeek-TUI to CodeWhale. All links reflect the current canonical name.*

---

## 1. Today's Highlights

The project is in a heavy **decomposition and consolidation phase** with the v0.9.12 release preparing to land, backed by significant refactoring across the TUI, runtime, and protocol layers. A flurry of **TUI polish PRs** landed focused on the Tideline composer shell, startup hero, and provider picker interaction. Notably, a **critical bug fix for session resume** is being merged — the engine now adopts the host session ID, preventing turns from landing in the wrong session.

---

## 2. Releases

**No new releases in the last 24 hours.**

The next release candidate, **v0.9.12**, is in preparation via PR [#5744](https://github.com/Hmbown/CodeWhale/pull/5744) (bump + CHANGELOG from 113 PR-cross-referenced bullets). It is explicitly tagged as a draft — **do not merge until the founder cuts the release**.

---

## 3. Hot Issues

1. **[#5620 — Context pressure warning is transient](https://github.com/Hmbown/CodeWhale/issues/5620)** (11 comments, medium severity)
    The context pressure warning is only shown transiently and the agent doesn't proactively react. Community sees this as a silent context degradation risk that defeats a key safety signal.

2. **[#5316 — EPIC-005: CodeWhale TUI Crate Decomposition](https://github.com/Hmbown/CodeWhale/issues/5316)** (20 comments)
    The umbrella epic tracking the decomposition of the TUI crate. All sub-epics and PRs report here. This is the largest structural change in flight — splitting 771k Rust lines across 18 packages into a maintainable shape.

3. **[#5723 — Agent shell sets NoNewPrivs, blocking sudo](https://github.com/Hmbown/CodeWhale/issues/5723)** (3 comments, high severity)
    A sandbox regression breaks pre-existing production deployment workflow. The agent shell's `NoNewPrivs` flag prevents `sudo`, blocking previously-working deployment scripts. Community marked this high-priority as it directly blocks production usage.

4. **[#5727 — Updater can replace binary when permission setup fails](https://github.com/Hmbown/CodeWhale/issues/5727)** (2 comments)
    Self-update path ignores permission-application failures on the downloaded temp binary, continuing with the atomic replacement. Update can report success while leaving a non-executable binary.

5. **[#4785 — Dead-code sweep: 464 #[allow(dead_code)]](https://github.com/Hmbown/CodeWhale/issues/4785)** (7 comments)
    Stripping 464 dead-code allowances to expose drift. The compiler is currently structurally unable to report on unused code. Community consensus: long overdue for a project of this size.

6. **[#5772 — Make provider selection explicit](https://github.com/Hmbown/CodeWhale/issues/5772)** (1 comment, opened today)
    The picker can metadata-probe disabled external CLI credential locations and parse/adopt credentials on Enter without explicit confirmation. UI can leak path information — an immediate privacy concern.

7. **[#5713 — Support wire = "responses" | "anthropic" for openai-compatible](https://github.com/Hmbown/CodeWhale/issues/5713)** (2 comments)
    Custom providers currently ignore `wire` config and always use Chat Completions. Fix needed for users who need Responses or Anthropic-style wire formats.

8. **[#5769 — Network errors sometimes cause the engine to stop](https://github.com/Hmbown/CodeWhale/issues/5769)** (1 comment, opened today)
    A Linux Mint user reports unreliable network handling — the engine stops instead of retrying. No solid repro or fix proposed yet.

9. **[#4955 — Zero-sandbox / --no-sandbox mode](https://github.com/Hmbown/CodeWhale/issues/4955)** (5 comments, 👍1)
    Community request for explicit no-sandbox mode. The kernel-level Seatbelt sandbox breaks shell commands daily on developer machines. Users want full control on their own hardware.

10. **[#5771 — Active-session composer needs shared [↑] send geometry](https://github.com/Hmbown/CodeWhale/issues/5771)** (1 comment, opened today)
    The active-session composer doesn't have the shared rounded Tideline composer shell with the `[↑]` send affordance. Consistency issue between startup and active session UI.

---

## 4. Key PR Progress

1. **[#5773 — Give active-session composer the shared [↑] send hitbox](https://github.com/Hmbown/CodeWhale/pull/5773)** — Fixes hitbox consistency; the active composer restores the shared three-cell `[↑]` affordance after printing, preventing long drafts from erasing it.

2. **[#5770 — Compose Tideline startup into shared composer shell](https://github.com/Hmbown/CodeWhale/pull/5770)** — Cherry-picks current-mark, startup, rounded-composer, quiet-boot, and route-control proposals into one reviewable branch.

3. **[#5766 — Bind catalog and route resolution](https://github.com/Hmbown/CodeWhale/pull/5766)** — Binds each compiled provider catalog to the exact RouteResolver, returns honest receipts for catalog-backed routes, and preserves cache health.

4. **[#5750 — Engine adopts host session ID for resume](https://github.com/Hmbown/CodeWhale/pull/5750)** — Critical fix: the engine was minting its own session ID instead of adopting the host's, causing resumed turns to land in a different session.

5. **[#5740 — Make Codewhale-review non-run visible on PR; fix key ladder](https://github.com/Hmbown/CodeWhale/pull/5740)** — Green checkmarks were showing while zero reviews were posted (insufficient balance on BYOK key). Now surfaces non-runs honestly and adds Model Studio to the key ladder.

6. **[#5747 — Unified self-serve MCP/plugin auth](https://github.com/Hmbown/CodeWhale/pull/5747)** — Synthetic `authenticate` tool, shared `/mcp login` flow, and invalid_grant rotation handling. 354 tests passing, 9 new integration tests.

7. **[#5748 — Automation visibility slice 1: panel projection + receipts](https://github.com/Hmbown/CodeWhale/pull/5748)** — Adds AutomationPanelState projection, activity-band slot, typed HistoryCell receipts, and status-line automation count.

8. **[#5749 — Unix-socket transport + daemon/attach advertisement](https://github.com/Hmbown/CodeWhale/pull/5749)** — Desktop Phase 0 foundation: app-server unix-socket transport, daemon spawn → socket connect → round-trip → shutdown verified.

9. **[#5752 — Signed, versioned, cached facts channel (slice 1)](https://github.com/Hmbown/CodeWhale/pull/5752)** — Supabase-backed cloud facts channel with model catalog deltas, provider defaults, and release truth. Disabled by default (`[cloud_facts].enabled = false`).

10. **[#5758 — Restore rounded active composer enclosure](https://github.com/Hmbown/CodeWhale/pull/5758)** — Brings back the rounded ComposerWidget at viable sizes, preserving live input, wrapping, cursor, history, and localization paths. Retains legacy border preference as opt-out.

---

## 5. Feature Request Trends

- **Provider ecosystem breadth**: Multiple requests for new providers (Neuralwatt [#3751](https://github.com/Hmbown/CodeWhale/issues/3751), Zenmux as first-class [#1330](https://github.com/Hmbown/CodeWhale/issues/1330)) and more flexible wire protocols than just OpenAI Chat Completions [#5713](https://github.com/Hmbown/CodeWhale/issues/5713).

- **Sandbox flexibility**: Strong demand for a `--no-sandbox` mode for local development where the Seatbelt sandbox breaks normal shell workflows [#4955](https://github.com/Hmbown/CodeWhale/issues/4955).

- **Provider-native web search**: Users want native web-search backends for DeepSeek, Qwen, Kimi, Z.AI, and MiMo routes instead of fallback to separate search backends [#5681](https://github.com/Hmbown/CodeWhale/issues/5681).

- **Remote workbench expansion**: Active exploration of US-friendly infrastructure (Cloudflare/AWS/Telegram lane [#1990](https://github.com/Hmbown/CodeWhale/issues/1990)), self-hosted Mac targets with zero cloud cost [#2968](https://github.com/Hmbown/CodeWhale/issues/2968), and unified CNB/Lighthouse/Feishu flow [#1984](https://github.com/Hmbown/CodeWhale/issues/1984).

- **Composer UX parity**: The Tideline rounded-composer shell with `[↑]` send affordance should be uniformly present across startup and active-session views [#5771](https://github.com/Hmbown/CodeWhale/issues/5771).

- **Always-on agent identity**: A stateful agent that persists across workrooms, repos, GitHub issues, mobile/chat surfaces, and fleet runs [#3210](https://github.com/Hmbown/CodeWhale/issues/3210).

---

## 6. Developer Pain Points

- **Sandbox interference**: The kernel-level Seatbelt sandbox breaks basic shell commands daily for developers; `NoNewPrivs` blocks `sudo` and pre-existing deployment workflows [#5723](https://github.com/Hmbown/CodeWhale/issues/5723), [#4955](https://github.com/Hmbown/CodeWhale/issues/4955).

- **Credential and privacy leaks**: Provider picker can metadata-probe disabled credential locations without explicit confirmation, leaking HOME/temp paths in UI [#5772](https://github.com/Hmbown/CodeWhale/issues/5772).

- **Silent context degradation**: Context pressure warning is transient; the agent doesn't proactively react, making it a weak safety signal [#5620](https://github.com/Hmbown/CodeWhale/issues/5620).

- **Flaky tests under CI parallel load**: Two confirmed flaky tests (`remote_control...` [#5605](https://github.com/Hmbown/CodeWhale/issues/5605), `runtime_chat_relay...` [#5735](https://github.com/Hmbown/CodeWhale/issues/5735)) stem from full-suite parallel-load race conditions.

- **Self-update reliability**: The updater can replace the installed binary even when permission setup fails, silently reporting success while leaving a broken binary [#5727](https://github.com/Hmbown/CodeWhale/issues/5727).

- **Session resume correctness**: A root-cause bug in session ID adoption was breaking resumed sessions — turns landed in the wrong session [#5750](https://github.com/Hmbown/CodeWhale/pull/5750), a classic but high-impact reliability issue.

- **Network error handling**: Network errors sometimes stop the engine entirely instead of triggering retry logic [#5769](https://github.com/Hmbown/CodeWhale/issues/5769).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*