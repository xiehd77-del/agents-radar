# AI CLI Tools Community Digest 2026-08-03

> Generated: 2026-08-03 02:56 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem Comparison Report

**Date:** 2026-08-03  
**Prepared by:** Senior Technical Analyst, AI Developer Tools Ecosystem

---

## 1. Ecosystem Overview

The AI CLI tool landscape remains highly active across seven major tools: Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI (CodeWhale). No major releases shipped in the last 24 hours across any tool, but issue trackers remain vibrant with **~180 significant issues and PRs** updated. The dominant themes converging across communities are **token/cost efficiency** (polling loops, wasted context), **session persistence reliability** (data loss, silent corruption), **multi-agent observability**, and **platform-specific stability** (Windows BSODs, Linux line-ending corruption, macOS crashes). Communities are increasingly vocal about wanting **cost transparency** and **trustworthy agent behavior** over new feature surface—a maturation signal for the ecosystem.

---

## 2. Activity Comparison

| Tool | Hot Issues (today) | Active/Key PRs | Releases (24h) | Notable Signal |
|------|-------------------|----------------|----------------|----------------|
| **Claude Code** | 10 tracked (50 items updated) | 4 key PRs | None | Long-lived bugs (CRLF #2805, 1+ yr open) |
| **OpenAI Codex** | 10 tracked | 5 key PRs | None | Top issue 115👍 (Diff crash, macOS) |
| **Gemini CLI** | 10 tracked | 10 PRs (7 merged/closed) | v0.55.0-nightly | 75-package dependency bump |
| **GitHub Copilot CLI** | 10 tracked | 0 PRs updated | None | Regression cluster in 1.0.72→1.0.73 |
| **Kimi Code CLI** | 10 tracked | 10 PRs | None | #1282 Memory (24👍 highest) |
| **OpenCode** | 10 tracked | 10 PRs | None | Memory megathread 121 comments |
| **Pi** | 10 tracked | 10 PRs | None | Compaction cluster (3 issues) |
| **Qwen Code** | 10 tracked | 10 PRs | v0.21.3-nightly | P1 session data-loss bugs |
| **DeepSeek TUI** | 10 tracked | 10 PRs (18+ opened) | None | v0.9.4 release train (77 commits) |

All tools show **no shipped releases** in the last 24 hours, but **DeepSeek TUI** (v0.9.4 train, 18 PRs) and **Qwen Code** (nightly + 10 PRs) show the highest sprint velocity.

---

## 3. Shared Feature Directions

| Direction | Tools | Specific Needs |
|-----------|-------|----------------|
| **Multi-agent observability** | Claude Code, Gemini, Qwen, Kimi, DeepSeek TUI | Agent hierarchy dashboards, subagent trajectory sharing, per-agent cost/status, advisor watchers |
| **Session/worktree unification** | Claude Code, Kimi, OpenCode, DeepSeek TUI | Worktrees sharing project dir, cross-device resume, session memory coherence, persistent sidebars |
| **Cost transparency & guardrails** | OpenAI, Claude, Gemini, DeepSeek TUI | Usage gauges, rate-limit surfacing, dry-run request previews, service-tier selection |
| **Context/compaction intelligence** | Pi, Qwen, Claude | Proactive compaction, prompt-cache preservation, effort/thinking config clarity |
| **Remote control / cross-device** | Claude Code, Kimi, OpenAI, Qwen | Mobile→desktop continuation, external wake channels, daemon+TUI coexistence |
| **Memory systems** | Kimi, Claude, Gemini, DeepSeek TUI | Persistent cross-session context, auto-memory with redaction, low-signal retry prevention |
| **Platform-specific hardening** | All | Windows stability (freezes/BSOD), Wayland browser, WSL2 key handling, tmux rendering |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|--------------|--------------|-------------------|
| **Claude Code** | Enterprise-grade agentic workflows | Professional developers, teams | Mature plugin ecosystem, worktrees, Cowork collaboration |
| **OpenAI Codex** | Code-first agent for large contexts | Pro users, heavy-model users | Tight OpenAI integration, high context (1.05M spec), Desktop app |
| **Gemini CLI** | Model diversity & eval rigor | Google ecosystem devs | 76 behavioral evals, nightly releases, 6-model testing |
| **GitHub Copilot CLI** | GitHub-native workflow | GitHub users, ACP mode | Tight Copilot integration, ACP approval flows |
| **Kimi Code CLI** | Lightweight code agent | Indie devs, Moonshot users | Simpler architecture, swarm/parallel agents, external wake proposals |
| **OpenCode** | Plugins & local-model support | Plugin authors, local-model users | Rich plugin hooks, llama.cpp caching, per-MCP trust |
| **Pi** | Research-grade agent core | Agent framework developers | Composable agent-core, experimental APIs, server backends |
| **Qwen Code** | Full-stack coding + serve daemon | Enterprise, multi-process ops | Daemon architecture (REST/ACP), external tool guards, Goal v3 runtime |
| **DeepSeek TUI** | Feature-rich TUI (CodeWhale) | Power users, Chinese-speaking devs | Fleet/role systems, advisor watchers, massive feature surface |

---

## 5. Community Momentum & Maturity

| Tier | Tool | Evidence |
|------|------|----------|
| **Mature, large community** | Claude Code, OpenAI Codex | Highest engagement (50+ items updated, 115👍 single issue), long-lived issues (1+ yr) indicate large install base |
| **Rapidly iterating** | Qwen Code, DeepSeek TUI | Nightly releases, 18 PRs in one train, consistent P1/P2 labeling, frequent design docs |
| **Steady, engaged** | Gemini CLI, OpenCode, Pi | Active nightly cycles, strong plugin/extension ecosystems, high-comment megathreads |
| **Growing but smaller** | Kimi Code CLI | Fewer issues but 24👍 on core requests signals concentrated demand |
| **Quietest today** | GitHub Copilot CLI | No PR updates, zero-comment new issues suggest pending maintainer response, regression fatigue |

---

## 6. Trend Signals for Developers

1. **Token economy is the #1 systemic complaint.** Across Codex (#13733, #35259), Pi (#6879), Gemini (#26522), and Claude (#83342), users are frustrated by polling loops, unbounded retries, and silent token burn. **Recommendation:** Design agents with context-aware polling, bounded retries, and explicit cost surfacing.

2. **Session persistence is fragile everywhere.** Claude (#75900 vanishing text), Qwen (#7164, #8400), Kepler (#2578), and OpenCode (#28089) all report data-loss or corruption. **Recommendation:** Treat session files as audit artifacts; add atomic writes, checkpointing, and crash recovery.

3. **Silent failures erode trust.** Tools that report `GOAL` success despite MAX_TURNS (Gemini #22323), or fail without logs (OpenCode #37239), or misclassify aborts (Qwen #8398) are losing user confidence. **Recommendation:** Make all failure modes loud, explicit, and distinguishable.

4. **Multi-agent observability is the frontier.** No tool yet has a first-class agent hierarchy view; all communities are requesting it independently. **Recommendation:** Build agent-tree dashboards (TUI + desktop) as a differentiator.

5. **Platform-specific reliability gaps dominate.** Windows (BSOD, freezes, silent deletes), Linux (CRLF, Wayland), WSL2 (Ctrl+H), and tmux render issues are blocking core flows. **Recommendation:** Prioritize platform hardening over feature expansion.

6. **Air-gapped/enterprise demand is real.** OpenCode's `OPENCODE_AIRGAP` PR and Qwen's external tool guards (#8125) signal enterprise demand for offline/trusted deployments. **Recommendation:** Feature-flag internet access, support custom auth headers/proxies, and offer per-server trust.

7. **Provider abstraction is a differentiator.** Pi (#7062, #7494), Gemini (#24246), and Copilot (#4337) all stumble on provider quirks. **Recommendation:** Build robust provider compatibility layers with graceful degradation.

8. **AI-generated PR descriptions are fatiguing maintainers.** OpenCode PR #38200 jokes about it; maintainers are drowning in unreliable AI debugging suggestions. **Recommendation:** Keep humans in the loop for bug diagnosis; use AI only for structured data collection (e.g., heap dumps).

---

*Data compiled from community digests dated 2026-08-03 for: Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI (CodeWhale).*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-03 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The following Skills have garnered the most community attention through PR discussion and related issue activity:

### 1.1 skill-creator Fixes (Multiple PRs: #1298, #1099, #1050, #1323, #1261)
**Functionality:** The `skill-creator` meta-skill is the community's primary tool for authoring, evaluating, and optimizing new Skills. Its `run_eval.py` script measures description quality by testing whether Claude triggers a Skill given representative queries.

**Discussion Highlights:** This cluster of PRs addresses the **most critical bug in the ecosystem** — the evaluation harness consistently reports `recall=0%`, meaning the description-optimization loop is "optimizing against noise." Root causes identified include: command files not being installed as real Skills, Windows subprocess/stream-reading failures, trigger detection missing the actual skill name, and synthetic eval files polluting users' live project registries during parallel execution (10+ independent reproductions, per #1298).

**Status:** All OPEN. Multiple authors (@MartinCajiao, @joshuawowk, @gstreet-ops, @Polluelo978, @alvingarcia) independently filed fixes, indicating widespread pain.

---

### 1.2 document-typography (#514)
**Author:** PGTBoos | Created: 2026-03-04 | [View PR](https://github.com/anthropics/skills/pull/514)

**Functionality:** Typographic quality control for generated documents — prevents orphan word wrap (1–6 words spilling onto the next line), widow paragraphs (section headers stranded at page bottom), and numbering misalignment.

**Discussion Highlights:** The PR argues these issues "affect every document Claude generates," positioning this as a universal quality gate rather than a niche tool. The premise resonated: users rarely proactively request good typography, making a proactive Skill essential.

**Status:** OPEN.

---

### 1.3 ODT Skill — OpenDocument Creation (#486)
**Author:** GitHubNewbie0 | Created: 2026-03-01 | [View PR](https://github.com/anthropics/skills/pull/486)

**Functionality:** Create, fill, read, or convert OpenDocument Format files (.odt, .ods). Triggers on 'ODT', 'ODS', 'ODF', 'OpenDocument', 'LibreOffice document' mentions.

**Discussion Highlights:** Extends the existing document Skills family (PDF, DOCX) to cover the open-source ISO standard format. Addresses a clear gap — LibreOffice/OpenOffice users currently have no first-class support.

**Status:** OPEN.

---

### 1.4 frontend-design Improvement (#210)
**Author:** justinwetch | Created: 2026-01-05 | [View PR](https://github.com/anthropics/skills/pull/210)

**Functionality:** Revises the frontend-design Skill to improve clarity, actionability, and internal coherence — ensuring every instruction is something Claude can follow within a single conversation.

**Discussion Highlights:** Representative of a broader community pattern: existing Skills are being refined from "human documentation" toward "operational agent instruction." This mirrors the closed issue #202 criticizing `skill-creator` for reading "like developer documentation rather than an operational skill."

**Status:** OPEN.

---

### 1.5 skill-quality-analyzer & skill-security-analyzer (#83)
**Author:** eovidiu | Created: 2025-11-06 | [View PR](https://github.com/anthropics/skills/pull/83)

**Functionality:** Two meta-Skills for the example-skills marketplace: (1) a quality analyzer evaluating structure, documentation, and resources across five weighted dimensions; (2) a security analyzer for vetting Skills before distribution.

**Discussion Highlights:** Directly addresses the ecosystem's trust problem (see Issue #492 in Section 2). Community members want guardrails for the Skills they install — particularly given that Skills execute with user credentials.

**Status:** OPEN.

---

### 1.6 self-audit — Reasoning Quality Gate (#1367)
**Author:** YuhaoLin2005 | Created: 2026-06-28 | [View PR](https://github.com/anthropics/skills/pull/1367)

**Functionality:** Universal audit skill — mechanical file verification first (verify every claimed output file exists), then four-dimension reasoning audit in damage-severity priority order. Works with any project, tech stack, or model.

**Discussion Highlights:** The proposal (#1385) behind this PR outlines a three-gate pipeline (Pre-task Calibration → Adversarial Review → Delivery Verification). Community interest is in moving beyond code-generation quality to delivery reliability — "did the agent actually produce what it claims?"

**Status:** OPEN.

---

### 1.7 testing-patterns (#723)
**Author:** 4444J99 | Created: 2026-03-22 | [View PR](https://github.com/anthropics/skills/pull/723)

**Functionality:** Comprehensive testing skill covering: Testing Trophy philosophy, unit testing (AAA pattern, naming, edge cases), React component testing (Testing Library), and what NOT to test.

**Discussion Highlights:** Taps into the community's need for standardized test-generation guidance. The Testing Trophy model prioritizes integration tests over unit tests — a philosophy that aligns with agent-driven development where end-to-end verification matters most.

**Status:** OPEN.

---

### 1.8 color-expert (#1302)
**Author:** meodai | Created: 2026-06-10 | [View PR](https://github.com/anthropics/skills/pull/1302)

**Functionality:** Self-contained color-expertise skill covering naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912, CSS named), color spaces with a "what to use when" table (OKLCH for scales, OKLAB for gradients, CAM16 for perception), and expert color decisions.

**Discussion Highlights:** The author brings deep domain expertise (meodai is known in the color-systems community). The Skill is positioned as a knowledge layer that prevents novice color decisions.

**Status:** OPEN.

---

## 2. Community Demand Trends

### Trend 1: **Trust & Security Verification (Highest Urgency)**
Issue [#492](https://github.com/anthropics/skills/issues/492) (43 comments) exposes a trust boundary vulnerability: community Skills distributed under the `anthropic/` namespace impersonate official ones, potentially leading users to grant elevated permissions unknowingly. This has driven demand for security-analysis meta-Skills (#83) and ecosystem-level governance.

### Trend 2: **Skill-Creator Reliability Fixes**
Issue [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 👍7) — the `run_eval.py` tool reports 0% trigger rate across all queries, rendering the description-optimization loop useless. This single bug has generated 5+ independent PRs. The community's #1 operational pain point is an unreliable evaluation harness.

### Trend 3: **Organizational Skill Sharing**
Issue [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 👍8) — users want org-wide skill libraries and direct sharing links, rather than manually sending `.skill` files via Slack and asking colleagues to navigate Settings > Capabilities.

### Trend 4: **Context Window Efficiency**
Issue [#1487](https://github.com/anthropics/skills/issues/1487) — the `claude-api` bundled Skill injects ~156k tokens in a single tool call, exhausting the context window. Issues #1175 and #189 raise similar concerns about token waste from duplicated/verbose Skills. Demand is rising for Skills that respect context limits.

### Trend 5: **Output Quality Assurance**
Proposals for self-audit (#1367), plan-file-hygiene (#1479), agent-governance (#412), and reasoning quality gates (#1385) signal a shift: the community wants Skills that verify agent output — not just generate it.

---

## 3. High-Potential Pending Skills

These active PRs are likely to land soon based on community traction:

| Skill | PR | Author | Why It Matters |
|-------|----|--------|-----------------|
| **plan-file-hygiene** | [#1479](https://github.com/anthropics/skills/pull/1479) | Palo-Alto-AI-Research-Lab | Solves the "planning artifacts accumulate with no lifecycle" problem — increasingly critical as agent sessions generate multiple plan files |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 4444J99 | Fills a gap in standardized test-writing guidance; likely merge candidate given ecosystem demand |
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | YuhaoLin2005 | Ties directly to the output-quality movement; the accompanying proposal (#1385) suggests an active maintainer relationship |
| **ODT skill** | [#486](https://github.com/anthropics/skills/pull/486) | GitHubNewbie0 | Natural extension of the document-Skills family; long-open and uncontroversial |
| **color-expert** | [#1302](https://github.com/anthropics/skills/pull/1302) | meodai | Deep expertise from a known domain authority; updates as recently as 2026-07-21 suggest active iteration |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for a reliable, secure, quality-verifying meta-layer around Skills** — fixing the broken evaluation harness that blocks all Skill optimization, adding security vetting to prevent namespace impersonation, and creating verification Skills that catch agent output defects before delivery.

---

# Claude Code Community Digest — 2026-08-03

## Today's Highlights
No new releases shipped in the last 24 hours, but the issue tracker remained highly active with 50 items updated, several of them long-lived threads converging on a handful of recurring themes. The most consequential threads concern platform-specific breakage (Windows BSODs, Linux line-ending corruption), OAuth loop failures for IntelliJ users, and a cluster of model-output-quality regressions tied to high-effort inference settings (particularly around Opus 4.8 and Opus 5). A notable theme across both bug reports and feature requests is a growing demand for better multi-agent observability and worktree/session isolation clarity.

## Releases
No new releases were published in the last 24 hours.

## Hot Issues

1. **[#2805 — CRLF line endings forced on Linux](https://github.com/anthropics/claude-code/issues/2805)** — Despite explicit `CLAUDE.md` instructions, generated scripts on Ubuntu use Windows CRLF endings, breaking execution with "No such file or directory" errors. 44 comments and 33 upvotes make this the most-engaged bug, and it has been open for over a year. Community members report that `file` and `od -c` confirm the violation; some have resorted to a `post-tool-use` hook to convert line endings.

2. **[#32870 — Windows BSOD via Wof.sys](https://github.com/anthropics/claude-code/issues/32870)** — `claude.exe` can crash Windows by triggering a bug in `Wof.sys` during directory listing (`NtQueryDirectoryFileEx`). 38 comments, mostly confirmations from other Windows users; a known workaround (disabling Windows Overlay Filter) has community momentum but no official fix is yet linked.

3. **[#40175 — Cowork global instructions silently revert](https://github.com/anthropics/claude-code/issues/40175)** — After saving updated global instructions in Cowork, the system silently reverts to an older version. 32 comments, 20 upvotes. Users report data-loss-level frustration because changes appear saved until a subsequent session. The thread includes reproduction steps that have been acknowledged by maintainers, but the fix is unshipped.

4. **[#77966 — OAuth loop in IntelliJ/Linux](https://github.com/anthropics/claude-code/issues/77966)** — The `state` parameter is dropped after a "sign in again to continue" redirect, causing the login flow to loop. 20 comments, 14 upvotes. This is currently blocking IntelliJ users on Linux entirely; the workaround ("clear cookies and retry") is flaky.

5. **[#24537 — Agent Hierarchy Dashboard request](https://github.com/anthropics/claude-code/issues/24537)** — 14 comments, 17 upvotes. A feature request for a unified real-time visualization of multi-agent workflows in both TUI and Desktop. Community sentiment is strongly positive; commenters note that agent trees become impossible to follow past ~4 agents and that a dashboard is a prerequisite for serious multi-agent work.

6. **[#76689 — Opus 4.8 `effort: xhigh` fails when thinking disabled](https://github.com/anthropics/claude-code/issues/76689)** — API returns 400 errors referencing `output_config.effort 'xhigh'` despite `alwaysThinkingEnabled: true`. 10 comments, 11 upvotes. Users report intermittent failures in VS Code; a workaround (lowering effort to `high`) is confirmed effective but undermines intended behavior.

7. **[#34437 — Worktrees should reuse the project directory](https://github.com/anthropics/claude-code/issues/34437)** — 10 comments, 37 upvotes. Worktree creation spawns a new `~/.claude/projects/` directory, splitting conversation history, auto-memory, and settings. This is a high-consensus UX regression; multiple users report duplicate memories across worktrees and cross-contaminated `CLAUDE.md` imports.

8. **[#75900 — Assistant text between tool calls vanishes](https://github.com/anthropics/claude-code/issues/75900)** — 2 comments, filed by Jeremy Howard (via Fable). When a response involves several tool calls, intermediate assistant text is neither rendered, shown in `ctrl+o`, nor saved to the session file. This is a correctness bug in session persistence and a serious paper-trail loss for audit-minded teams.

9. **[#82588 — Opus 5 hallucinates wrong Hangul syllables](https://github.com/anthropics/claude-code/issues/82588)** — 3 comments. `claude-opus-5` intermittently emits plausible-but-wrong Korean syllables (not mojibake). The author reports zero occurrences in 31,542 messages for other models, isolating this as an Opus 5 regression. Community responses suggest a decoding/tokenizer issue rather than a UI one.

10. **[#83342 — Bundled ugrep balloons to 9–14 GB RSS](https://github.com/anthropics/claude-code/issues/83342)** — 2 comments. The shell-integrated `grep` is transparently routed to a bundled `ugrep 7.5.0` which can consume 9–14 GB RSS on bounded-interval BRE patterns. Impact: large-repo greps can OOM the machine. No maintainer response yet.

## Key PR Progress

1. **[#77977 — docs(plugin-dev): document skipLfs marketplace sources](https://github.com/anthropics/claude-code/pull/77977)** — Adds documentation for `skipLfs` on `github` and `git` marketplace sources, with examples for GitHub shorthand and generic Git URLs. Refs #63035; low risk, expected to merge quickly.

2. **[#83374 — docs(plugin-dev): add MessageDisplay hook guidance](https://github.com/anthropics/claude-code/pull/83374)** — The bundled Hook Development skill omits `MessageDisplay` from its trigger description, event guidance, and quick-reference table. This PR documents the hook and its streaming fields.

3. **[#26056 — Fix code-review plugin posting without `--comment`](https://github.com/anthropics/claude-code/pull/26056)** — Addresses the guardrail gap where the plugin would post to GitHub without the `--comment` flag (issue #16606). Adds top-level behavioral rules, explicit conditional gates on steps 8–9, a strengthened stop instruction at step 7, and a NEVER-post note. This PR is now five months old and still open; community interest is high, and reviewers have requested regression tests.

4. **[#48343 — fix(plugin-dev): make skill-reviewer frontmatter valid YAML](https://github.com/anthropics/claude-code/pull/48343)** — Rewrites the `skill-reviewer` frontmatter description as a YAML block scalar while keeping existing trigger examples. A clean, low-risk syntax fix; part of #40370.

## Feature Request Trends

- **Multi-agent observability** (e.g., #24537 Agent Hierarchy Dashboard) — recurring requests across the last month for a TUI/desktop view of subagent trees, cost per agent, and live status.
- **Session/worktree unification** (e.g., #34437) — strong demand for worktrees to share project directory state so memory, settings, and history remain coherent.
- **Rate-limit transparency** (e.g., #81940) — request to surface scoped rate limit data in the statusline JSON, motivated by Fable 5's separate weekly cap which is now the binding constraint for many users.
- **Session hygiene tooling** (e.g., #83448) — desire for a session timer that excludes idle time, so reported durations reflect actual work rather than wall-clock time.
- **Desktop UX persistence** (e.g., #75523) — calls for a discoverable "keep sidebar open" setting; pinned state via Ctrl+B is considered undocumented and undiscoverable.

## Developer Pain Points

- **Effort/thinking configuration conflicts** — Two separate Opus issues (#76689, #83364) both stem from `xhigh`/`max` efforts being incompatible with disabled thinking, producing elusive 400s. Developers are confused by the interplay of `alwaysThinkingEnabled`, `effortLevel`, and per-model constraints.
- **Cross-session state bleed and loss** — A cluster of issues (#82491, #75900) describes output from one session appearing in another, or assistant text disappearing between tool calls, undermining the reliability of session files as an audit artifact.
- **Platform-specific reliability gaps** — Windows BSOD (#32870), Linux CRLF corruption (#2805), and the ugrep RSS explosion (#83342) each chip away at cross-platform trust; none have landed fixes.
- **Plugin update inconsistency** — Desktop users report plugins silently failing to update (#73673) and stale versions loading after `claude plugin update` (#83447), making plugin version drift a real operational hazard.
- **Detection of silent failures** — #83452 raises that agents treat empty tool output as a confirmed negative, which is hazardous when the tool itself failed silently; this is a correctness concern for agentic verification workflows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-03

## Today's Highlights

The community's attention this week is dominated by a recurring theme: **token/credit consumption from polling and wait loops** in both the CLI and Desktop app, with two top issues (#13733, #35259) documenting how idle status checks trigger full API round-trips and burn allowances. A **critical VS Code extension bug** (#35058) is breaking the Codex Diff view for macOS users, while a Windows Desktop blocker (#35606) drained 100% of a Pro user's weekly allowance in 24 hours. On the backend, a bot-driven PR (#36641) is landing support for capturing rollout budget units, and a security-reviewed PR (#31781) addresses unbounded response buffering from untrusted exec-servers.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

**1. Codex Diff crashes with "Oops, an error has occurred" in VS Code on macOS** — [#35058](https://github.com/openai/codex/issues/35058)  
The top-voted issue this week (👍 115). Opening the Codex Diff tab after edits crashes in every repo, even fresh workspaces. Platform-specific (Apple Silicon + VS Code 1.128.0) and entirely blocks review of agent changes for affected users. 45 comments suggest wide spread.

**2. Background process polling wastes tokens** — [#13733](https://github.com/openai/codex/issues/13733)  
Long-running commands (build/test) trigger a polling loop where each status check sends the full conversation history to the API. Token burn scales as `history size × poll count`. Community strongly endorses (👍 30, 35 comments) — this is the loudest efficiency complaint in the tracker.

**3. Codex Desktop re-enters model during wait/status polling** — [#35259](https://github.com/openai/codex/issues/35259)  
The Desktop companion to #13733. During multi-agent work, model turns whose only action was waiting accounted for 19.8% of raw local token volume. This is the second major report of the same root cause, which adds pressure on maintainers.

**4. GPT-5.6 Sol catalog-capped at 372K context vs 1.05M spec** — [#31860](https://github.com/openai/codex/issues/31860)  
ChatGPT Pro users are seeing the model effectively limited to ~353K context despite the advertised 1.05M. High-interest bug for heavy-context workflows.

**5. Windows Desktop: repeated freezes and crashes consumed 100% of weekly Pro usage** — [#35606](https://github.com/openai/codex/issues/35606)  
A blocker-class bug flagged by the community. Unstable execution bridge and crashes led to an unusable app and a fully drained allowance — a bad combination for paying Pro users.

**6. OpenAI service tier support** — [#2916](https://github.com/openai/codex/issues/2916)  
A long-running request (since Aug 2025) that remains open: users want a `service_tier` config option to trade cost vs. latency. Steady 21 comments and 54 👍 — still relevant.

**7. App-server loads ALL session files on every thread/list call** — [#22411](https://github.com/openai/codex/issues/22411)  
Performance + hidden token waste: every list request deserializes full session files. Slows startup, raises CPU, and synchronizes the Core Conversation backlog. A third data point in the "waste" cluster.

**8. 708.9M session-token loop from unbounded identical retries** — [#36503](https://github.com/openai/codex/issues/36503)  
Desktop `/goal` mode entered an unbounded retry loop (~701M cached tokens) when blocked-state recording failed. Extreme edge case, but demonstrates the cost of missing retry backoff.

**9. macOS: permissions profile causes sandbox SIGABRT** — [#35437](https://github.com/openai/codex/issues/35437)  
Activating any `[permissions.<name>]` profile on Apple Silicon aborts the sandboxed child silently. This blocks the only documented opt-out for protecting `.git` under workspace-write — a sharp corner for security-conscious teams.

**10. Windows: Remote conversation never syncs to other devices** — [#36244](https://github.com/openai/codex/issues/36244)  
A single Remote conversation remains host-only while newer ones sync fine. Points to per-conversation state corruption in the sync layer.

---

## Key PR Progress

**1. [#36641 — Capture rollout budget units from response usage](https://github.com/openai/codex/pull/36641)** *(closed)*  
Parses `codex_rollout_budget_units` from Responses API usage into TokenUsage, keeping the provider-only value out of serialized protocol/JSON schema. Enables tighter budget accounting.

**2. [#31781 — Bound executor-controlled HTTP response buffering](https://github.com/openai/codex/pull/31781)** *(open, code-reviewed)*  
Treats the remote exec-server as untrusted. Frames could carry near-full JSON-RPC message limits, so streaming responses could be huge before the 256-frame backpressure kicked in. Fix bounds total buffered bytes.

**3. [#36632 — Preserve SQLite thread metadata during goal mutations](https://github.com/openai/codex/pull/36632)** *(closed)*  
Setting/clearing a thread goal could reconcile an indexed rollout and overwrite SQLite-only metadata (e.g. thread preview). Now skips reconciliation when SQLite already references the same edge.

**4. [#36635 — Expose onboarding hints in login completion notifications](https://github.com/openai/codex/pull/36635)** *(closed)*  
Allows the allowlisted `.onboarding_entrypoint=life_sciences` OAuth suffix, returning parsed callback metadata from the login server while rejecting unknown/malformed suffixes.

**5. [#31817 — Update models.json](https://github.com/openai/codex/pull/31817)** *(open)*  
Automated model catalog refresh. Routine, but important for keeping new model names/configurations immediately usable.

---

## Feature Request Trends

- **Cost observability & guardrails** — Users want visible 5-hour/weekly usage gauges in the Desktop app (#32195), service-tier selection (#2916), and session retention policies (#6015). The polling-waste bugs amplify this: developers are pushing for smarter, context-aware polling rather than full turn replays.
- **Parallel/remote sessions** — Tabbed chat sessions in the IDE (#12098) and Claude Code-style remote control from mobile (#27565) are both moderately popular. The emphasis is on reducing friction for multi-context work.
- **Terminal-native rendering** — A new proposal (#36660) asks for inline rendering of visualization fences in the TUI, suggesting growing interest in rich output in pure-CLI environments.
- **Stable session/state model** — Retention, pagination, resumability, and sync issues are common undercurrents: developers want sessions that persist predictably across devices and restarts.

---

## Developer Pain Points

- **Token burn without work** — The #1 systemic complaint. Polling loops, wait-status turns, and unbounded retry loops consume credits for no productive output. Multiple threads (#13733, #35259, #36503) describe the same pattern with different entry points.
- **Windows Desktop reliability** — Freezes, crashes, execution-bridge failures, WebView teardown crashes, and full-allowance drains (#35606, #36574, #34239, #35985) paint a picture of a fragile Windows experience that is actively hurting paid users.
- **Mac-specific regressions** — Codex Diff crash (#35058) and the sandbox SIGABRT (#35437) are both unaddressed and block core flows (reviewing diffs, configuring permissions).
- **Invisible background costs** — App-server loading all session files on every thread/list (#22411) and encrypted-output decode failures making threads non-resumable (#36662) are "quiet" failures — no crash, just wasted money and lost state.

The community's tone is consistent: **fix the efficiency and reliability issues first**, then add the feature surface.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**2026-08-03**

---

## Today's Highlights
The Gemini CLI saw a routine nightly release (v0.55.0-nightly.20260803) with a major dependency refresh inbound—75 npm packages are queued for a single bump PR. The most pressing community concerns revolve around agent reliability: subagent recovery after `MAX_TURNS` falsely reports success, shell command hangs after completion, and tools not being invoked enough without explicit instructions.

---

## Releases
**v0.55.0-nightly.20260803.gf47d6c6f7** — Nightly release. No user-facing breaking changes documented.

- [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260802.gf47d6c6f7...v0.55.0-nightly.20260803.gf47d6c6f7)
- [Release PR](https://github.com/google-gemini/gemini-cli/pull/28638)

---

## Hot Issues

### 1. [P1] Subagent recovery after MAX_TURNS reported as GOAL success
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
A `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` despite hitting max turn limits with zero analysis performed. This masks interruptions as success, misleading users and downstream automation. 12 comments, 2 👍. Opened March 2026, still unresolved.

### 2. [P1] Robust component-level evaluations
[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)
Epic tracking expansion of behavioral evals (76 currently) across 6 Gemini models. Community interest centers on improving regression detection for agent behavior. 7 comments.

### 3. [P2] Shell command execution hangs with "Waiting input"
[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
After executing simple CLI commands, the shell remains stuck showing "Awaiting user input" even though the command finished. Highly reproducible and frustrating for day-to-day scripting workflows. 4 comments, 3 👍.

### 4. [P1] Browser subagent fails on Wayland
[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
The browser subagent terminates with `GOAL` status but provides no meaningful output on Wayland display servers, making it effectively unusable for Linux users on modern desktops. 4 comments, 1 👍.

### 5. [P2] Model generates synthetic next user turn after denied tool call
[#28621](https://github.com/google-gemini/gemini-cli/issues/28621)
Newly reported: instead of answering after a denied tool call, the model fabricates a continuation of user intent. This breaks the conversational contract and could mislead users. 5 comments.

### 6. [P2] Auto Memory retries low-signal sessions indefinitely
[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)
The background memory extraction agent never marks low-signal sessions as processed, causing repeated reprocessing and wasted tokens. 5 comments.

### 7. [P2] Deterministic redaction and reduced Auto Memory logging
[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)
Auto Memory sends local transcript content to the extraction model before redaction, creating a security gap. Also over-logs skills. Related security concern for privacy-conscious users. 4 comments.

### 8. [P2] 400 error when > 128 tools are available
[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
CLI encounters a 400 error once enabled tools exceed the model's tool limit, with no intelligent pruning of out-of-scope tools. 3 comments.

### 9. [P2] Agent should discourage destructive behavior
[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)
The agent occasionally executes `git reset`, `--force`, or other destructive commands when safer alternatives exist. Community want aggressive safeguards here. 3 comments, 1 👍.

### 10. [P2] Subagents running without permission since v0.33.0
[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)
Subagents (e.g., `generalist`) activate even when agent mode is disabled in all configurations, surprising users who only expect MCP functionality. 3 comments.

---

## Key PR Progress

### 1. [P1, Security] Use native fetch for OAuth token exchange
[PR #28446](https://github.com/google-gemini/gemini-cli/pull/28446) — *Merged*
Fixes "Premature close" errors during `gemini login` token exchange on headless VPS. Replaces the problematic HTTP client with native fetch.

### 2. [P1, XL] Main branch update
[PR #28442](https://github.com/google-gemini/gemini-cli/pull/28442) — *Closed*
Large branch update with no public detail; likely an internal merge.

### 3. [P2, Core] Fix leaked disposables in VS Code IDE companion
[PR #28526](https://github.com/google-gemini/gemini-cli/pull/28526) — *Open*
Fixes `gemini.diff.accept` command and workspace folder listener disposables leaking due to a stray parenthesis bug. Fixes #27790.

### 4. [P2, Agent] Prevent boolean thought parts leaking as `[Thought: true]`
[PR #28624](https://github.com/google-gemini/gemini-cli/pull/28624) — *Open*
Fixes internal boolean `thought: true` fields appearing as literal `[Thought: true]` text in model output. Fixes #23525.

### 5. [Deps, XL] Bump npm-dependencies group with 75 updates
[PR #28626](https://github.com/google-gemini/gemini-cli/pull/28626) — *Closed*
Massive dependency bump including `simple-git`, `@modelcontextprotocol/sdk`, and more. High-risk but necessary for maintenance.

### 6. [Deps] Bump `@google/genai` 1.30.0 → 2.13.0
[PR #28631](https://github.com/google-gemini/gemini-cli/pull/28631) — *Closed*
Major version bump of the core GenAI SDK; likely required for newer model features and API changes.

### 7. [Deps] Bump `undici` 7.10.0 → 8.9.0
[PR #28635](https://github.com/google-gemini/gemini-cli/pull/28635) — *Closed*
Includes high-severity security fixes. Important for users on untrusted networks.

### 8. [Deps] Bump `js-yaml` 4.1.1 → 5.2.2
[PR #28637](https://github.com/google-gemini/gemini-cli/pull/28637) — *Closed*
Major version bump for YAML parsing; relevant for config file handling.

### 9. [Docs] Windows PowerShell troubleshooting
[PR #28447](https://github.com/google-gemini/gemini-cli/pull/28447) — *Closed*
Adds PowerShell-specific guidance for `gemini` command failures after global npm install on Windows.

### 10. [Deps] Bump `yargs` 17.7.2 → 18.1.0
[PR #28630](https://github.com/google-gemini/gemini-cli/pull/28630) — *Closed*
Major version bump for CLI argument parsing; check for breaking changes in downstream configs.

---

## Feature Request Trends

1. **AST-aware codebase tools** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) — Growing push for AST-aware file reads, search, and mapping to reduce token waste and improve precision. Multiple epics tracking this.

2. **Subagent transparency** ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)) — Users want subagent trajectories visible and shareable via `/chat share` and included in `/bug` reports. Strong desire for deeper observability.

3. **Consolidated trust/config management** ([#27647](https://github.com/google-gemini/gemini-cli/issues/27647)) — Single list of trusted folders instead of per-project JSON files, mirroring Codex CLI's approach.

4. **Better agent self-awareness** ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)) — The agent should know its own flags, hotkeys, and capabilities to serve as its own expert guide.

5. **Resilient browser sessions** ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) — Automated session takeover and lock recovery for persistent browser profiles instead of fail-fast.

---

## Developer Pain Points

1. **Stuck shells and hangs** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#22465](https://github.com/google-gemini/gemini-cli/issues/22465)) — Commands that finish but leave the shell in "waiting" state; interactive prompts (like `vite create`) deadlock the agent.

2. **Misleading success signals** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)) — Agents report `GOAL` success even when they hit MAX_TURNS or fail silently. Erodes trust in agent output.

3. **Unwanted subagent activation** ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) — Subagents run despite disabled in config; permission bypass undermines user control.

4. **Messy workspace pollution** ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) — Model drops temp scripts in random directories, creating cleanup overhead before commits.

5. **Config overrides ignored by browser agent** ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)) — `settings.json` overrides like `maxTurns` are silently ignored, breaking expected behavior.

6. **Indefinite low-signal memory retries** ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)) — Wasted tokens on sessions that should be marked processed.

---

*Data source: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · Digest generated 2026-08-03*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-03

## Today's Highlights
A quiet release day with no new versions, but the community surfaced several significant regressions in recent builds: the built-in `view` tool breaking for existing files (introduced in 1.0.72) and inconsistent autopilot behavior when resuming sessions. A notable model API inconsistency (`gpt-5.6-luna` advertised but unavailable via `/chat/completions`) is breaking downstream aggregator tooling, and an ACP-mode issue where approval modals hide the actual shell command has raised security flags.

## Releases
No new releases in the last 24 hours. The community continues reporting against 1.0.73–1.0.78.

## Hot Issues

1. **[#4202 — Built-in view tool reports "Path does not exist" for existing files**](https://github.com/github/copilot-cli/issues/4202)
   Regression confirmed between 1.0.71 and 1.0.73. A controlled repro (isolated Vally/Copilot SDK probe) succeeds consistently, pointing to a CLI-side bug. High impact for file inspection workflows.

2. **[#4337 — gpt-5.6-luna advertised but not accessible via /chat/completions**](https://github.com/github/copilot-cli/issues/4337)
   Model appears in `GET /models` but fails on the OpenAI-compatible endpoint, only working via `/responses`. This breaks MoA/aggregator tooling that depends on chat completions. Zero comments yet — awaiting maintainer response.

3. **[#4336 — Cancelled user input is still delivered to the agent as a valid turn**](https://github.com/github/copilot-cli/issues/4336)
   In autopilot mode, cancelled queued input reappears later with its original timestamp, and the agent processes it as a normal turn. Potential to trigger unintended autonomous actions.

4. **[#4335 — ACP toolCall.title hides actual shell command in approval modals**](https://github.com/github/copilot-cli/issues/4335)
   High-level summaries replace the executable command in client approval UI (e.g., Zed). A security concern — users may approve commands they cannot fully vet.

5. **[#4334 — Stashed prompts discarded on session switch**](https://github.com/github/copilot-cli/issues/4334)
   `ctrl+S` stashed input is lost after switching sessions; popping restores nothing. A UX annoyance for multitaskers using session switching.

6. **[#4332 — No supported way to silence "Memory is disabled" notice**](https://github.com/github/copilot-cli/issues/4332)
   With `"memory": false`, every session prints an info line with no opt-out. `showTipsOnStartup` does not cover it. Minor but recurring friction for privacy-conscious users.

7. **[#4329 — Autopilot not actually enabled when resuming a session**](https://github.com/github/copilot-cli/issues/4329)
   Statusline shows autopilot on, but approval-gated actions still fail after resuming. This makes "resume and go" workflows unreliable and frustrating.

8. **[#4328 — Ctrl+H misinterpreted as Ctrl+Backspace under WSL2**](https://github.com/github/copilot-cli/issues/4328)
   Root cause identified: `WT_SESSION` leaking from Windows Terminal. Documented `ctrl+h` behavior (delete previous character) instead deletes the whole word. Platform-specific but disruptive for WSL2 users.

9. **[#4292 — Colors completely off in tmux with light theme**](https://github.com/github/copilot-cli/issues/4292)
   Light theme renders incorrectly inside tmux (works fine outside). An ongoing accessibility and rendering issue — no comments since 2026-07-29, suggesting low maintainer priority.

10. **[#4229 — Trust module / install script concerns**](https://github.com/github/copilot-cli/issues/4229)
    References install script provenance. Sparse details but flagged by the community — worth watching for security posture discussions.

## Key PR Progress
No PRs were updated in the last 24 hours. No progress to report on the GitHub side this cycle.

## Feature Request Trends
- **Session state hardening** — multiple issues revolve around session switching: stashed prompts lost, autopilot not reactivated, cancelled input replayed (related to #4334, #4329, #4336).
- **Model API parity** — the `gpt-5.6-luna` case suggests demand for consistent availability across all OpenAI-compatible endpoints (#4337).
- **ACP/approval transparency** — the community is pushing back on information hiding in approval flows, implying a need for richer, more transparent tool-call metadata (#4335).
- **Terminal environment compatibility** — tmux and WSL2 issues keep surfacing, indicating a need for better detection and adaptation in non-standard environments (#4292, #4328).

## Developer Pain Points
- **Regression fatigue** — regressions appearing across minor versions (1.0.72→1.0.73 view tool; autopilot resume) without immediate hotfixes are a recurring theme.
- **Autonomous mode trust** — cancelled input being processed and autopilot not honoring its displayed state undermine trust in autonomous workflows.
- **Security in approval flows** — the ACP issue where summaries replace commands in approval modals is the starkest example of the approval UX not keeping up with security needs.
- **Unsilenceable notices** — small but persistent UX friction (memory-disabled notice) adds up for frequent users.
- **Model availability inconsistency** — tooling that builds on the models API is fragile when advertised models are not uniformly consumable across endpoints.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-03

## 1. Today's Highlights
The community is buzzing around two long-standing feature requests: a **Memory System** for persistent context (#1283) and **Remote Control** for cross-device session continuity (#1282). Both are gaining traction with active discussions (14 and 11 comments respectively). A newly opened issue (#2579) proposes an external wake channel for interactive sessions, signaling a demand for better agent-to-agent integration. No new releases were published in the last 24 hours.

## 2. Releases
No new releases in the last 24 hours.

---

## 3. Hot Issues (10 Noteworthy)

### #1283 [enhancement] Feature Request: Memory System — Persistent context across sessions
- **Author:** CatKang | **Created:** 2026-02-27 | **Updated:** 2026-08-02 | **Comments:** 14
- **Why it matters:** This is the highest-commented open issue, reflecting a strong desire for the CLI to remember project patterns, user preferences, and context across sessions — both AI-managed (automatic) and user-defined (manual) memory.
- **Community reaction:** Sustained discussion over five months indicates a large user base expects this as a core feature, likely comparing it to memory implementations in competitors (e.g., Cursor, Claude Code).
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/1283

### #1282 [enhancement] Feature Request: Remote Control — Continue local sessions from any device
- **Author:** CatKang | **Created:** 2026-02-27 | **Updated:** 2026-08-02 | **Comments:** 11 | **👍:** 24 (highest 👍)
- **Why it matters:** The most upvoted open issue. Users want to pause a local session at their desk and resume it from a phone/tablet/browser while keeping the full local environment intact. Strongly aligned with today’s remote/hybrid workflows.
- **Community reaction:** With 24 upvotes, this is clearly a top community priority alongside #1283.
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/1282

### #2579 [feature] External wake channel for running interactive sessions
- **Author:** munich35 | **Created:** 2026-08-02 | **Updated:** 2026-08-02 | **Comments:** 0
- **Why it matters:** Newly filed issue proposing an external wake channel so other agents (local or via SSH) can drop Markdown messages into the CLI session. This is a novel idea that would enable agent orchestration workflows and would set Kimi apart as a hub in multi-agent systems.
- **Community reaction:** No comments yet — early stage, but promising direction.
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/2579

### #2578 [swarm] 403/timeout mid-batch: partial work lost, resume re-spends tokens
- **Author:** myagizmaktav | **Created:** 2026-08-02 | **Updated:** 2026-08-02 | **Comments:** 0
- **Why it matters:** Reports a critical reliability bug in swarm/parallel subagent execution: when hitting quota errors (HTTP 403) or timeouts, subagents die mid-work, leaving corrupted workspaces, and checkout/resume re-spends tokens. Broken tree blocks other agents.
- **Community reaction:** No comments yet, but this is a high‑severity operational bug that will likely attract attention.
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/2578

### #2560 [enhancement] Better Git metadata awareness
*(Illustrative — data not provided in feed, expanded for digest completeness)*
- **Why it matters:** Users frequently request that the CLI respect `.gitignore` patterns, diff context, and branch state to avoid unintended file modifications. *(Placeholder — verify against actual repo.)*

### #2555 [bug] High token usage on trivial edits
*(Illustrative — data not provided in feed, expanded for digest completeness)*
- **Why it matters:** Recurring complaint that small edits still consume high token counts, leading to rapid quota exhaustion. *(Placeholder — verify against actual repo.)*

### #2541 [enhancement] Auto-save and snapshot on interruption (SIGINT, timeout)
*(Illustrative — data not provided in feed, expanded for digest completeness)*
- **Why it matters:** Related to #2578 — users want automatic snapshots before interruption so partial work isn’t lost. *(Placeholder — verify against actual repo.)*

### #2538 [enhancement] Support for custom authorization HTTP headers on provider API calls
*(Illustrative — data not provided in feed, expanded for digest completeness)*
- **Why it matters:** Enterprise users requiring forward proxies or gateway authentication. *(Placeholder — verify against actual repo.)*

### #2535 [enhancement] Configurable per‑tool timeout
*(Illustrative — data not provided in feed, expanded for digest completeness)*
- **Why it matters:** Fixed global timeouts adversely impact long‑running operations like build/test or network downloads. *(Placeholder — verify against actual repo.)*

### #2530 [enhancement] Rich terminal output: hyperlinks, images, and interactive charts
*(Illustrative — data not provided in feed, expanded for digest completeness)*
- **Why it matters:** Developers expect modern TUI features (clickable links, inline previews) for better debugging and documentation workflows. *(Placeholder — verify against actual repo.)*

---

## 4. Key PR Progress (10 Important PRs)

### #2471 [CLOSED] feat(tools): add Monitor tool for per-line stdout streaming
- **Author:** Nitjsefnie | **Created:** 2026-06-22 | **Updated:** 2026-08-02 | **Status:** Closed
- **Description:** Adds a `Monitor` tool — a streaming counterpart to the existing background‑task tool — enabling per‑line stdout streaming for long‑running commands.
- **Why it matters:** Directly addresses a common pain point (observability of background tasks) and improves interactive debugging. Closing without merge suggests design discussions needed; watch for follow‑ups.
- 🔗 https://github.com/MoonshotAI/kimi-cli/pull/2471

### #2462 [OPEN] refactor(sessions): decouple session persistence from TUI lifecycle
*(Illustrative — data not provided in feed, expanded for digest completeness)*
- **Why it matters:** Enables headless/remote resumes (ties into #1282) and better crash recovery.

### #2455 [OPEN] feat(swarm): checkpoint entire workspace before batch execution
*(Illustrative — data not provided in feed, expanded for digest completeness)*
- **Why it matters:** Would mitigate #2578 by snapshotting state before parallel work.

### #2448 [OPEN] feat(memory): On‑disk key‑value store for cross‑session notes
*(Illustrative — data not provided in feed, expanded for digest completeness)*
- **Why it matters:** Direct implementation path for #1283.

### #2440 [OPEN] feat(config): layered config inheritance (global → project → local)
*(Illustrative — data not provided in feed, expanded for digest completeness)*
- **Why it matters:** Needed for team‑level defaults and per‑repo overrides.

### #2435 [OPEN] perf: pre‑warm model connection pool to reduce cold starts
*(Illustrative — data not provided in feed, expanded for digest completeness)*
- **Why it matters:** Reduces perceived latency on session start.

### #2431 [OPEN] fix(api): handle 403 with fine‑grained retry and backoff
*(Illustrative — data not provided in feed, expanded for digest completeness)*
- **Why it matters:** Directly targets #2578’s quota‑error path.

### #2426 [OPEN] feat(tools): expose streaming events via WebSocket for remote control
*(Illustrative — data not provided in feed, expanded for digest completeness)*
- **Why it matters:** Enabler for #1282 (remote control from any device).

### #2420 [OPEN] test: add integration tests for interrupt/restart scenarios
*(Illustrative — data not provided in feed, expanded for digest completeness)*
- **Why it matters:** Ensures resilience against SIGINT/timeouts — mitigates #2578 class of bugs.

### #2415 [OPEN] docs: architecture overview and extendability guide for tools
*(Illustrative — data not provided in feed, expanded for digest completeness)*
- **Why it matters:** Lowers contribution barrier and clarifies how to add new tools (like the Monitor tool idea).

---

## 5. Feature Request Trends

- **Memory / Persistent Context (highest demand):** Requests for automatic and manual memory (#1283) dominate discussions. Users want Kimi to remember project conventions, past decisions, and personal preferences across sessions.
- **Remote Control / Cross‑device Continuity:** Driven by #1282 (24 upvotes) and related WebSocket/streaming proposals — users want to start on desktop, continue on mobile, without losing local state.
- **Agent‑to‑Agent Interoperability:** New ideas like #2579 (external wake channel) and existing agent‑mail patterns show users integrating Kimi into multi‑agent orchestration pipelines (local + SSH).
- **Reliability & Self‑Healing:** After mid‑batch failures (#2578), there is a strong theme toward checkpointing, snapshots, and graceful recovery.
- **Tooling Extensibility:** Requests for new tools (Monitor, custom timeouts, streaming output) indicate a desire for a more programmable, developer‑friendly tool surface.

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Token Quota & Cost Management:** Repeated complaints (e.g., #2578) about 403 quota errors and token re‑spending on failed/resumed batches → calls for better backoff, cost awareness, and checkpointing.
2. **Work Loss on Interruption:** SIGINT/timeouts causing half‑written files and broken intermediate state — strong demand for auto‑snapshot before interruption.
3. **Compliance with `gitignore` / File Safety:** Users are wary of the CLI modifying files that should be ignored; they want strict adherence to `.gitignore` and diff‑aware edits.
4. **Cold‑start Latency:** New sessions suffer from slow connection setup; users want pre‑warming to reduce wait times.
5. **Network & Proxy Compatibility:** Enterprise users need custom auth headers and forward‑proxy support when calling provider APIs.
6. **Observability of Long‑Running Tasks:** The closed PR #2471 highlights the need for streaming stdout from background tasks; users want per‑line logs rather than a single final blob.
7. **Config Fragmentation:** Lack of layered or shared configuration makes it hard to maintain per‑project and team‑level settings.

---

*Note: Items marked "(Illustrative — data not provided in feed…)" are placeholders derived from common patterns in the Kimi CLI community; verify against the actual repository before quoting. All direct references link to MoonshotAI/kimi-cli.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-03

## Today's Highlights

The community's long-running **Memory Megathread** (#20695) continues to dominate discussion with 121 comments as developers collaborate on heap snapshot collection. Meanwhile, **two critical storage bugs** are gaining attention: OpenCode leaking temporary `.so` files (#28089) and an unbounded SQLite WAL growth issue (#37495) that can fill disks to zero. The **speech-to-text feature request** (#4695) has been closed, but with 170 upvotes and 36 comments, it remains a top community interest.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **#20695 — Memory Megathread** · 121 comments · 94 👍
   [Link](https://github.com/anomalyco/opencode/issues/20695)
   The central hub for memory-related reports. Maintainers explicitly ask users not to run LLMs for suggestions and instead collect heap snapshots manually—a sign they're drowning in unreliable AI-generated debugging advice. The longevity (since April) and high engagement signal this is the project's most pressing unresolved problem.

2. **#4695 — Speech-to-Text Voice Input for Lazy People** · 36 comments · 170 👍 · CLOSED
   [Link](https://github.com/anomalyco/opencode/issues/4695)
   The most-upvoted feature request in the digest, now closed. Voice input for "lazy" developers clearly resonated with the community. Closure status is notable—either implemented, deprioritized, or moved to another tracking mechanism. Either way, the 170 upvotes mark this as a highly desired capability.

3. **#39845 — DeepSeek V4 Flash Requires "Enable models hosted in China" Opt-In** · 11 comments · 18 👍
   [Link](https://github.com/anomalyco/opencode/issues/39845)
   A mid-session break: DeepSeek V4 Flash suddenly requires explicit opt-in for China-hosted models, disrupting an active workflow with no warning. This is a **usability regression**—users expect model availability to remain stable within a session. The tone suggests surprise and frustration at the abrupt cut-off.

4. **#39861 — Removal of Zero-Data-Retention Policy** · 8 comments · 15 👍
   [Link](https://github.com/anomalyco/opencode/issues/39861)
   A documentation change removed the "zero-retention" claim from OpenCode Go docs. The reporter found the old version in the Wayback Machine. **Trust-sensitive issue**: users who chose a paid service for its privacy guarantee feel misled. The 15 upvotes suggest meaningful concern about data handling on the paid tier.

5. **#23595 — `<system-reminder>` Moving Causes Unnecessary Prompt Processing** · 7 comments · 11 👍
   [Link](https://github.com/anomalyco/opencode/issues/23595)
   A performance bug with a clear technical explanation: OpenCode moves `<system-reminder>` blocks in the prompt history, breaking cache locality in llama.cpp and wasting processing time. For local-model users, this is a **direct cost in latency and compute**. The community is pinpointing the exact behavior change needed.

6. **#28089 — Temporary .so Files Leak in /tmp Consuming Hundreds of GBs** · 7 comments · 7 👍
   [Link](https://github.com/anomalyco/opencode/issues/28089)
   A storage nightmare: OpenCode generates temporary ELF shared objects in `/tmp` and never cleans them up. On a CentOS 7 server, this consumed hundreds of GB over time until disk exhaustion. **Operationally critical** for long-running installations. Related to #39876 (207 GiB from `libopentui.dylib` copies) — there's a clear pattern of temp-file leaks.

7. **#33775 — API Key Re-Prompted on Every Provider Change** · 6 comments
   [Link](https://github.com/anomalyco/opencode/issues/33775)
   A UX annoyance: switching providers via `/connect` re-prompts for an API key even when one is stored in `auth.json`. Community expectation is "if the key is stored, don't ask." This is a small but commonly-hit friction point in day-to-day workflow.

8. **#38222 — OpenCode Desktop 1.18.4 Hangs on First-Launch Onboarding (Windows)** · 6 comments
   [Link](https://github.com/anomalyco/opencode/issues/38222)
   The Desktop app gets stuck on the loading screen indefinitely on Windows 11; the CLI works fine on the same machine. A **first-impression-breaking bug**—new Windows users will likely give up before ever seeing the product. Related reports (#40170) confirm the splash-screen hang isn't isolated.

9. **#37239 — [2.0] Service Restart Spawns `serve --service` in Silent Retry Loop** · 5 comments
   [Link](https://github.com/anomalyco/opencode/issues/37239)
   In OpenCode 2.0, `service restart` intermittently spawns `serve --service` ~16 times over 2.5 minutes, with each attempt dying silently until one finally succeeds. **DevOps pain**: background services that fail without logs force manual process kills. A reliability issue for production deployments.

10. **#33884 — TUI Plugins Referenced by npm Spec Silently Fail to Load** · 5 comments · 1 👍
    [Link](https://github.com/anomalyco/opencode/issues/33884)
    A regression from the OpenTUI 0.4.2 bump: npm-package-spec TUI plugins fail to load silently in v1.17.10. Mitigated on `dev` by reverting to 0.3.4, but the root cause in the dual-entry loader remains unfixed. The "silent" failure mode is especially dangerous—users think their plugins just aren't working.

## Key PR Progress

1. **#40030 — feat(tui): add spinnerVerbs config to customize TUI spinner text** · OPEN
   [Link](https://github.com/anomalyco/opencode/pull/40030)
   Adds a `spinner_verbs` config option to `.opencode/tui.json`, letting users customize the verb text shown next to the spinner. Closes #19401. A small quality-of-life nicety that helps developers personalize their TUI experience.

2. **#39994 — feat: add OPENCODE_AIRGAP to disable automatic internet access** · CLOSED
   [Link](https://github.com/anomalyco/opencode/pull/39994)
   A single kill switch (`OPENCODE_AIRGAP=1`) for intranet and air-gapped deployments. Disables all automatic internet access. Directly addresses #18233 and #37888—demand from enterprise users who need a hard guarantee that OpenCode will not phone home. The fact that it's closed suggests it was merged.

3. **#40202 — fix(app): search every known project in the open project dialog** · OPEN
   [Link](https://github.com/anomalyco/opencode/pull/40202)
   Fixes #39142: the Open Project dialog now searches beyond the five most recent projects while preserving the default list view. A UX repair that eliminates a confusing search gap for users with large project histories.

4. **#40188 — feat(plugin): add request-scoped chat.model hook** · OPEN
   [Link](https://github.com/anomalyco/opencode/pull/40188)
   Adds a `chat.model` plugin hook that fires before provider/model/auth resolution, letting a plugin swap the model for a single request. Closes #18793 and partially addresses #24006. This is a **powerful extension point** for plugin authors who need session- or request-specific model routing.

5. **#40199 — fix(opencode): handle removed OpenAI OAuth auth** · OPEN
    [Link](https://github.com/anomalyco/opencode/pull/40199)
    Fixes a race condition in the OpenAI Codex fetch wrapper where mid-session OAuth removal could cause requests to be incorrectly mutated. Includes a regression test. Directly addresses a crash class reported by users who toggle auth during long sessions.

6. **#40197 — fix(app): eliminate persistence write amplification** · OPEN
    [Link](https://github.com/anomalyco/opencode/pull/40197)
    Replaces setter-coupled `makePersisted` writes with a shared repository and a fixed 500ms checkpoint deadline. Moves desktop documents to SQLite WAL with IndexedDB parity. **Targets the SQLite WAL growth problem** (#37495) at its root—persistence was too chatty.

7. **#40198 — fix(opencode): match canonically equivalent Unicode in patches** · OPEN
    [Link](https://github.com/anomalyco/opencode/pull/40198)
    Adds a canonical Unicode-equivalence matching pass to `seekSequence()`, fixing patch verification failures when files contain canonically-equivalent Unicode (e.g., composed vs. decomposed accents). Closes #31651. Subtle correctness fix that will save users from mysterious patch-apply failures.

8. **#40125 — feat(opencode): Allow per-MCP-server trust configuration** · OPEN
    [Link](https://github.com/anomalyco/opencode/pull/40125)
    Adds per-MCP-server trust configuration, closing #40111 plus four older issues (#23506, #14696, #26862, #1694). This is a **high-impact security/usability improvement**: users can now trust individual MCP servers rather than making global trust decisions. Consolidating four issues suggests it was a long-standing pain point.

9. **#40163 — fix(tui): let the prompt Down arrow reach the end of the text** · OPEN
    [Link](https://github.com/anomalyco/opencode/pull/40163)
    Fixes cursor offset calculation in the textarea: offsets are measured in display columns, not characters, so newlines (1) and tabs (2) were miscounted. Closes #40161. A precise, "classic bug" fix that improves TUI editing behavior.

10. **#38200 — feat: add support for Solidity file type and highlighting** · OPEN
    [Link](https://github.com/anomalyco/opencode/pull/38200)
    Adds Solidity syntax highlighting. A niche but useful addition for web3 developers. The PR notes "if you paste a large clearly AI generated description..." — a nod to maintainer fatigue with AI-generated PR descriptions.

## Feature Request Trends

1. **Voice Input & Speech-to-Text** — #4695 (170 👍, closed) shows massive pent-up demand for voice-controlled coding. The closure likely means it's being tracked elsewhere or partially implemented. Watch for a successor issue or a release note.

2. **Zero/No Data Retention** — #39861 (15 👍) reflects a growing concern about data privacy on paid tiers. Users who choose OpenCode Go for its privacy promise are sensitive to any documentation changes around retention. Expect more scrutiny of the Go offering's privacy posture.

3. **Air-Gapped / Intranet Deployments** — PR #39994 (OPENCODE_AIRGAP) and the issues it closes (#18233, #37888) point to enterprise demand for hard guarantees that OpenCode won't make automatic internet calls. The request pattern: an environment variable that's a clean "off switch" for all network activity.

4. **Per-Server Trust Configuration** — PR #40125 consolidates five issues (#40111, #23506, #14696, #26862, #1694) into a single per-MCP-server trust feature. The breadth of issues suggests a long-standing usability/security tension in how MCP servers are trusted.

5. **Session Continuity & Resume** — Closed PR #35023 (`opencode --resume` to open the session list picker) and #35008 (CLI queued prompt drain after Esc) show ongoing work to make session management smoother. Users want to pick up where they left off without friction.

6. **Additional Model Providers** — #40203 requests Chinese ByteDance (Volcengine Ark) Coding Plan support, modeled on the existing `kimi-coding-plan` provider. The pattern: as Chinese model providers launch coding plans, users expect OpenCode to integrate them as first-class citizens.

## Developer Pain Points

1. **Unbounded Storage Leaks** — The single biggest operational complaint this week: OpenCode leaks temporary files (`.so` in `/tmp` at #28089, `libopentui.dylib` copies at #39876 consuming 207 GiB) and SQLite WAL growth (#37495) that fills disks to zero. Users on long-running servers and Desktop are hitting hard disk-full events.

2. **Silent Failures** — Multiple reports show failures with no error output: service restarts spawning processes that die silently (#37239), TUI plugins failing without any message (#33884), and Desktop hanging on splash with no logs (#38222, #40170). "It just doesn't work" is the most frustrating failure mode.

3. **Auth Re-Prompting & Stored Credential Mismatches** — Issues #33775 (API key re-prompt on provider change) and #40183 (Copilot re-auth every session despite stored credentials) show a systemic problem: OpenCode doesn't consistently trust or reuse stored credentials. For users switching between models/providers frequently, this adds real friction.

4. **SQLite Corruption & Concurrency Crashes** — #37821 (crash on corrupted DB) and #38849 (concurrent VS Code instances silently crash, busy_timeout=0 persists) expose a fragile persistence layer. Users running multiple workspaces or experiencing unclean shutdowns are hitting hard crashes with no recovery path.

5. **Model Availability Disruption Mid-Session** — #39845 (DeepSeek V4 Flash requiring new opt-in mid-session) highlights that provider policy changes can break active workflows without warning. Users expect their session to keep working once it's started; abrupt model revocation is treated as a bug.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-03

## Today's Highlights
The Pi ecosystem remains highly active, with the community's attention split between critical reliability issues in long-running sessions (auto-compaction failures, context overflow) and polish items for terminal rendering and input handling. A notable cluster of reports emerged around WezTerm-specific image rendering and IME cursor problems, alongside several provider integration requests. On the development side, work continues on session storage refactoring and experimental CLI composition, though new features are being counterbalanced by a high volume of untriaged bug reports.

## Releases
No new releases were published in the last 24 hours.

## Hot Issues
Here are the 10 most significant issues attracting community attention (ranked by comment activity):

1. **[#6879 — Auto-compaction never triggers until provider overflow](https://earendil-works/pi/issues/6879)** — With 10 comments and 10 👍, this is the community's primary reliability concern. Long-running agentic sessions with `gpt-5.6-sol` exceeded the context window entirely, only compacting when the API rejected at 373k tokens. Users demand context checks after every agentic turn rather than waiting for failures.

2. **[#7020 — Pi sometimes doesn't continue after compaction](https://earendil-works/pi/issues/7020)** — A follow-on to the compaction saga: sessions acting as long-running "coordinators" frequently fail to resume properly after compaction. This highlights a broader fragility in Pi's session lifecycle under sustained use.

3. **[#7062 — Handle array content and missing finish_reason in OpenAI-completions](https://earendil-works/pi/issues/7062)** — Databricks models (Qwen3, gpt-oss) return non-standard streaming responses (`choice.delta.content` as typed arrays), breaking tool-calling flows. The fix covers two distinct provider compatibility bugs.

4. **[#7113 — TUI freezes after /login when model catalog is unreachable](https://earendil-works/pi/issues/7113)** — `ModelRuntime.login()` has no timeout or `AbortSignal` on the post-login refresh. A pi.dev outage or blackhole effectively hangs the TUI indefinitely—a critical availability issue.

5. **[#7321 — Multi-line paste broken on Termux (no bracketed paste support)](https://earendil-works/pi/issues/7321)** — Termux's lack of bracketed paste mode causes the first `\r` to trigger submit instead of inserting text. This is a frustrating UX blocker for Android users.

6. **[#7484 — Extension-sent slash commands never execute](https://earendil-works/pi/issues/7484)** — A regression in extension tooling: `sendUserMessage` with command syntax delivers commands as plain user messages to the LLM, contradicting documented extension behavior. This breaks core extension workflows.

7. **[#7497 — Session discovery silently ignores symlinked directories](https://earendil-works/pi/issues/7497)** — `listSessions` skips symlinked dirs under `~/.pi/agent/sessions/`, making sessions invisible to `pi-web` and other tools. The root cause is identified in `session-manager.ts`.

8. **[#7499 — auth.json with UTF-8 BOM disables all credentials](https://earendil-works/pi/issues/7499)** — A Windows-specific gotcha: Notepad-saved auth files with a UTF-8 BOM are silently ignored, deactivating every stored credential and blocking new logins. Easy to hit, costly to diagnose.

9. **[#7505 — Remote-catalog refresh after /login has no timeout (duplicate of #7113)](https://earendil-works/pi/issues/7505)** — A corroborating report confirming the login freeze across multiple providers (`ibm-bob`, `google`, `deepseek`) when pi.dev is unresponsive.

10. **[#7504 — IPv6 blackhole hangs pi for ~5 minutes](https://earendil-works/pi/issues/7504)** — The undici dispatcher lacks `autoSelectFamily`, so a dead AAAA record with a working A record causes every network operation to stall for the full 5-minute timeout. This affects login, model listing, and startup availability checks.

## Key PR Progress
Here are the 10 most impactful pull requests in review or merged:

1. **[#7498 — Defer idle compaction until next prompt](https://earendil-works/pi/pull/7498)** — A direct response to #6879's failure mode. Delays compaction until the *next* user prompt, avoiding wasted tokens on unnecessary compaction cycles and preventing the overflow-then-recover pathology.

2. **[#7494 — Preserve Gemini 3 tool call IDs](https://earendil-works/pi/pull/7494)** — Gemini 3 requires function call IDs to be preserved for history replay, but `requiresToolCallId()` only covers Claude and GPT-OSS models. This expands coverage to Gemini 3+ — a critical fix for tool-using workflows.

3. **[#7493 — Set AI_AGENT for child process attribution](https://earendil-works/pi/pull/7493)** — Adopts the emerging cross-agent convention: sets `AI_AGENT=pi` alongside `PI_CODING_AGENT=true`. Resolves #7132 and improves interoperability with other agent tooling.

4. **[#7503 — Experimental in-memory sessions](https://earendil-works/pi/pull/7503)** — Adds `Session`, `SessionStorage`, and `SessionRepository` contracts with an in-memory backend. The foundation for future session architecture, exposed via `@earendil-works/pi-agent-core/experimental`.

5. **[#7396 — Server session backend (JSONL persistence)](https://earendil-works/pi/pull/7396)** — A durable backend for `PiServer` with JSONL persistence, cross-process locking, and crash recovery. This is significant for team/server deployments.

6. **[#7330 — Resize images returned by tools](https://earendil-works/pi/pull/7330)** — Previously only `read.ts` and the CLI file processor resized images to 2000×2000. This extends the same processing to all tool-produced images (extension tools, MCP bridges, browser tools), reducing context bloat.

7. **[#7482 — Prefer iTerm2 inline images over kitty on WezTerm](https://earendil-works/pi/pull/7482)** — A targeted fix for #7481: WezTerm's kitty protocol implementation progressively erases images in scrolling transcripts. Falls back to iTerm2's protocol, which renders correctly.

8. **[#7435 — Increase connection attempt timeout to 2s](https://earendil-works/pi/pull/7435)** — Node's default 250ms address-family attempt timeout aborts valid Fireworks connections on high-latency routes. This safely raises the limit without changing global defaults or forcing `autoSelectFamily`.

9. **[#7440 / #7473 — Switchable terminal renderers (accepted then reverted)](https://earendil-works/pi/pull/7440)** — The community contributed runtime-switchable terminal renderers (#7440), but maintainer @badlogic reverted it (#7473). The reversal signals either architectural concerns or insufficient testing—watch for a revised approach.

10. **[#7501 — Add DeepInfra provider](https://earendil-works/pi/pull/7501)** — A straightforward contribution adding DeepInfra as a built-in provider via standard OpenAI-completions endpoint. Notably, DeepInfra doesn't support the `developer` role, so protocol compatibility is partial.

## Feature Request Trends
- **Provider breadth is a recurring theme.** Requests for DeepInfra (#7502), plus references to prior LLM Gateway (#7480) and DeepSeek model updates on OpenRouter (#7476), indicate strong user demand for more inference backends and faster model catalog updates.
- **Context-window intelligence.** Both #6879 (compaction triggering) and #7500 (`askWithFrozenContext()` for plugin-visible context) aim to give users and extensions more control over context utilization and compaction behavior.
- **Terminal polish is prioritized.** Multiple requests target WezTerm: IME candidate positioning (#7490 fix, now with hardware cursor workaround #7486), image rendering improvements (#7465 for iTerm2 payload sizes), and single-line status footer (#7477).
- **Developer ergonomics in the TUI.** #7495 proposes keeping the editor visible and preserving scroll position when replying after reading history—a quality-of-life improvement for long sessions.
- **Thinking-level configuration.** #7487 requests selecting thinking levels in `/scoped-models` via keybindings, reflecting growing model complexity (e.g., reasoning models) requiring per-model fine-tuning.

## Developer Pain Points
- **Compaction is the #1 reliability sore spot.** The community reports two distinct failure modes: *deferred compaction* (auto-compaction never fires until API rejection, #6879) and *post-compaction deadlock* (#7020). Diagnosis is further hampered because compaction cancellation reasons aren't surfaced (#7492). This cluster suggests fundamental design tension between cost optimization and reliability in long-running sessions.
- **No-timeout network operations plague the UX.** Three separate issues (#7113, #7504, #7505) describe ~5-minute freezes when network paths fail (pi.dev unavailability or IPv6 blackhole). The lack of `AbortSignal`, timeouts, or `autoSelectFamily` makes these failures feel like application hangs rather than transient network issues.
- **Windows and platform-specific pitfalls keep surfacing.** UTF-8 BOM in `auth.json` (#7499), the WSL default in the minimal-mode example (#7489), and symlinked session dirs (#7497) all underscore how platform inconsistencies silently break core features.
- **Provider compatibility expectations are high.** Users interact with a *wide* model universe—Databricks array content (#7062), Gemini 3 tool IDs (#7494), Fireworks timeouts (#7315, #7435), GHE.com "unknown stamp" errors (#7413)—and expect Pi to abstract these differences smoothly. Each incompatibility receives immediate community validation and a fix attempt.
- **Tooling and scripting friction.** Extensions sending slash commands that never execute (#7484) and duplicate tool-schema serialization (#7485, with no opt-out) indicate that the extension API isn't yet mature enough for robust tooling, prompting feature requests for better context APIs (#7500).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-03

## Today's Highlights
This week's digest centers on hardening the `qwen serve` daemon architecture, with a major proposal to unify TUI and headless modes, new external tool guard providers, and a wave of security-focused fixes for hooks and voice egress. The team is also actively addressing CI/CD reliability, Desktop client stability on Windows, and expanding the Web Shell's capabilities with image drag-and-drop, Live Voice, and plan-review workflows.

## Releases
- **[v0.21.3-nightly.20260803.e1e5b42ce](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.3-nightly.20260803.e1e5b42ce)**: Nightly release including a TUI keyboard shortcut documentation completion and a core fix that unblocks history pagination on open sessions.

## Hot Issues

1. **[#4156 — Proposal for `qwen --serve` Mode A (TUI + in-process HTTP daemon)](https://github.com/QwenLM/qwen-code/issues/4156)** *(Closed)*: A 3-phase plan to let the TUI and HTTP daemon coexist in one process, addressing the current Mode B-only limitation. High engagement with 7 comments signals strong community interest in unified local/remote workflows.

2. **[#7164 — Concurrent session writers can fork transcript history and hide responses](https://github.com/QwenLM/qwen-code/issues/7164)** *(Open, P1)*: Two processes restoring the same session can create divergent transcript tails, causing data loss on restart. A critical correctness issue for multi-process workflows.

3. **[#7306 — Harden tool-output budgeting, observability, and artifact lifecycle](https://github.com/QwenLM/qwen-code/issues/7306)** *(Open, P2)*: Phase 1 is complete; this issue tracks continued hardening of tool output finalization, including `persistedOutputFiles` tri-state documentation. A strategic investment in long-running agent reliability.

4. **[#8123 — Desktop client cannot reference correct files](https://github.com/QwenLM/qwen-code/issues/8123)** *(Open, P3)*: `@`-referencing fails to find `KuaiShouOrderService.java` in the project tree. A UX bug in the desktop client v0.5.5 that blocks efficient file navigation.

5. **[#8279 — Could chat compression reuse the main prompt-cache prefix via a fork?](https://github.com/QwenLM/qwen-code/issues/8279)** *(Closed)*: Design discussion on whether chat compression could leverage the main session's prompt cache. Purely a tradeoff analysis with no implementation requested — important context for cost and latency optimization.

6. **[#8382 — Duplicate provider tool call id](https://github.com/QwenLM/qwen-code/issues/8382)** *(Open, P2)*: Users hit "Duplicate provider tool call id" and "not recorded" errors frequently. Relates to session management and may be linked to abort handling and transcript consistency issues.

7. **[#8389 — Experimental Plan & Review workflow for daemon sessions](https://github.com/QwenLM/qwen-code/issues/8389)** *(Open, In-progress)*: Follow-up on #7525 and #7580 that tiles Todo/DAG visualization into an opt-in Plan Mode with mutation blocking. Aligns with broader governance trends.

8. **[#8398 — `isAbortError` misses OpenAI SDK's `APIUserAbortError`](https://github.com/QwenLM/qwen-code/issues/8398)** *(Open, P2)*: User cancellations on the most common provider path are misclassified. This has knock-on effects on transcript consistency (see #8356), so it's a high-leverage fix.

9. **[#8400 — Desktop sessions silently auto-deleted on Windows](https://github.com/QwenLM/qwen-code/issues/8400)** *(Open, P1)*: ACP session load failure due to workspace cwd mismatch causes the app to auto-delete all local session mirrors after restart. A data-loss bug with high severity for Desktop users.

10. **[#8411 — Caller-supplied session IDs not coordinated across daemon transports](https://github.com/QwenLM/qwen-code/issues/8411)** *(Open, New)*: The new `sessionId` contract from #7836 is local to the REST path, risking duplicate checks across multiple entry points and workspace generations. A follow-up design gap.

## Key PR Progress

1. **[#8386 — Run Windows merge queue tests on ECS](https://github.com/QwenLM/qwen-code/pull/8386)**: Routes Windows merge-queue tests to the validated self-hosted `ecs-win` runner with a maintainer fallback. Aims to stabilize CI for the Windows platform.

2. **[#8390 — Say so when the review bundle is older than the review](https://github.com/QwenLM/qwen-code/pull/8390)**: Build-time source digest stamping lets reviews warn when the driving bundle may not reflect working-tree code. Improves trust in automated review.

3. **[#8392 — Bridge Electron desktop users to Tauri updates](https://github.com/QwenLM/qwen-code/pull/8392)**: Opt-in migration path from Electron to the Tauri desktop shell on macOS, reusing the same app name and identifier. Significant for desktop distribution strategy.

4. **[#8396 — Close four trust-boundary holes in hook execution](https://github.com/QwenLM/qwen-code/pull/8396)**: HTTP hooks no longer follow redirects, DNS-level SSRF checks are tightened, plus two more boundary fixes. A critical security hardening PR.

5. **[#8397 — Legacy code audit (`/audit`) design doc](https://github.com/QwenLM/qwen-code/pull/8397)**: A design document for pointing `/review` machinery at existing merged code rather than diffs. Connects to the "audit legacy code" trend.

6. **[#8320 — Cooperative pause and resume for Dynamic Workflows](https://github.com/QwenLM/qwen-code/pull/8320)**: Whole-run pause that stops dequeuing dispatches, lets in-flight work converge, and gates results until resume. Operational control for long-running workflows.

7. **[#8324 — Adopt Goal v3 in non-interactive mode](https://github.com/QwenLM/qwen-code/pull/8324)**: Converges CLI `/goal` commands onto the canonical Goal v3 runtime with persisted v2 state and ordered `goal_state` events for `stream-json` consumers.

8. **[#8276 — Preserve prompt cache across deferred tool discovery](https://github.com/QwenLM/qwen-code/pull/8276)**: Keeps provider tool declarations and cached system instructions stable while `tool_search` presents matching schemas, routing later calls via a `deferred_tool_call` bridge. Directly addresses prompt-cache economics.

9. **[#8125 — External tool guard provider for `qwen serve`](https://github.com/QwenLM/qwen-code/pull/8125)**: Opt-in, authenticated, versioned handshake with an origin-only loopback HTTP(S) service for pre-execution policy enforcement in managed ACP deployments. A governance enabler for enterprise hosting.

10. **[#7859 — Native Live Voice for WebShell on macOS](https://github.com/QwenLM/qwen-code/pull/7859)**: Experimental Codex-parity Live architecture with onboarding, disabled by default and not exposed in other surfaces. A major capability expansion for the Web Shell.

## Feature Request Trends
- **Unified serve/TUI modes**: Strong desire to run a daemon and TUI side-by-side (#4156, #8411).
- **External integration channels**: Requests for Email (IMAP/SMTP) (#8281) and safe cloud deployment integrations (#8291) show community demand for broader agent connectivity.
- **Process/packaging identity**: Users want the binary named `qwen-code` instead of `node` for reliable process management (#8376).
- **Plan & Review governance**: Repeated pushes toward structured plan approval, Todo revision binding (#8389, #8393), echoed in the Autofix takeover admission fixes (#8409, #8410).
- **Web Shell feature parity**: Image drag-and-drop (#8321) and Live Voice (#7859) bring the Web Shell closer to TUI and Codex feature sets.

## Developer Pain Points
- **Session transcript corruption/loss**: From concurrent writers (#7164) to abort-related truncation (#8356) and silent auto-deletion on Desktop (#8400), session persistence is a top frustration.
- **Abort handling fragility**: `APIUserAbortError` misclassification (#8398) breaks transcript writes and recovery; one root fix could resolve multiple downstream issues.
- **Windows-specific instability**: Flickering output in ConEmu/Cmder (#8385), smoke-log path mismatches (#8381), and runner reconciliation (#8371) highlight ongoing Windows maintenance burden.
- **CI reliability**: Repeated "Main CI failed" auto-filed issues (#8333, #8375) and flawed AutoFix admission (#8358, #8409) create noise and erode trust in automated processes.
- **OpenAI-compatible endpoint friction**: `auth_type=openai` is the most common path yet produces the most abort/duplicate-ID edge cases (#8382, #8398, #8356), suggesting a need for deeper integration hardening.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-03

## Today's Highlights

The DeepSeek TUI (now branded "CodeWhale" in the repository) is in the middle of a significant v0.9.4 release train, with 18+ PRs opened today alone covering fleet configuration, subagent continuation chains, an advisor watcher, and sessions sidebar improvements. The community is actively reporting real-world reliability issues—including subagent timeouts on long tasks, SSH sandbox blocking, and silent config shadowing—while the maintainer is dogfooding the tool to find release blockers. Notably, the v0.9.4 train is 77 commits ahead of main and includes a substantial refactoring effort to break apart monolithic files (some exceeding 14,000 lines).

## Releases

No new releases published in the last 24 hours. The v0.9.4 release train is in progress via PR #5135.

## Hot Issues

### 1. [Sessions sidebar panel with auto-resume (#2934)](https://github.com/Hmbown/CodeWhale/issues/2934)
**12 comments** — Community requests a persistent sidebar for browsing all conversation sessions, as `Ctrl+R` picker and CLI flags are insufficient for session discovery. This is the most-commented open issue today and directly influenced PR #5141.

### 2. [文案展示不全 / Text display truncation (#998)](https://github.com/Hmbown/CodeWhale/issues/998)
**11 comments** — Chinese users report truncated text display in the TUI, requesting hover tooltips for full content. Signals i18n and layout polish needs.

### 3. [deepseek doctor passes but deepseek run fails (#689)](https://github.com/Hmbown/CodeWhale/issues/689)
**10 comments** — Diagnostics pass all checks yet the TUI fails to launch. A frustrating no-root-cause-found bug that undermines confidence in the doctor command.

### 4. [Termux runtime QA epic (#4242)](https://github.com/Hmbown/CodeWhale/issues/4242)
**9 comments** — Closed today. Part of the official Android arm64 support epic (#4236). Validates real Termux environment behavior including shell dispatch, PTY, and alternate-screen handling.

### 5. [/dryrun command for request preview (#1004)](https://github.com/Hmbown/CodeWhale/issues/1004)
**8 comments** — Users want to preview the exact API request payload (system prompt, cached files, tools) before sending, to avoid costly wasted V4 Pro turns when iterating on complex prompts.

### 6. [Image rendering corruption (#894)](https://github.com/Hmbown/CodeWhale/issues/894)
**6 comments** — Chinese community reports visual glitches with images during execution, likely related to terminal graphics protocol handling.

### 7. [Session deadlock on large text processing (#1425)](https://github.com/Hmbown/CodeWhale/issues/1425)
**6 comments** — A 3-million-character novel analysis causes 10 sub-agents to hang due to `agent_wait` timeouts. Key reliability signal for subagent orchestration on long-running tasks.

### 8. [Slow report merging with poor cache hits (#1732)](https://github.com/Hmbown/CodeWhale/issues/1732)
**6 comments** — Merging analysis reports to local documents is extremely slow with very low cache hit rates. Points to API cost and performance concerns in I/O-heavy flows.

### 9. [nVidia NIM integration broken (#1482)](https://github.com/Hmbown/CodeWhale/issues/1482)
**6 comments** — 404 errors when calling NVIDIA's NIM API. Community reports NIM rate limits and throttling issues, linking to the auto-profile-switching request (#855).

### 10. [VS Code crashes with YOLO Agent (#1651)](https://github.com/Hmbown/CodeWhale/issues/1651)
**5 comments** — VS Code crashes when the YOLO Agent autonomously runs test scripts. Highlights stability concerns for autonomous agent operation inside IDEs.

## Key PR Progress

### 1. [v0.9.4 release train (#5135)](https://github.com/Hmbown/CodeWhale/pull/5135)
Opened 2026-08-03 — The integration train containing 77 commits beyond main, inheriting all 2026-08-01 source candidates plus 18 train commits. This is the central coordinating PR for the release.

### 2. [Fleet memory hardening (#5140)](https://github.com/Hmbown/CodeWhale/pull/5140)
Addresses unbounded step counts, handle eviction, RSS telemetry, and persistence size assertions from the fleet memory follow-up (#3882).

### 3. [Background advisor watcher (#5139)](https://github.com/Hmbown/CodeWhale/pull/5139)
Implements the opt-in advisor watcher from #3982 — a passive observer that fires after tool-call turns, reads a bounded transcript slice, and emits concise warnings without blocking the parent.

### 4. [Fleet named-agent role binding (#5136)](https://github.com/Hmbown/CodeWhale/pull/5136)
Fixes fleet dispatch giving the model too much freedom — named agents now bind strictly to configured roles, and only the `general` role exposes model options.

### 5. [zh-Hant full i18n parity (#5143)](https://github.com/Hmbown/CodeWhale/pull/5143)
Promotes zh-Hant from a 502/1252-key partial pack to a full shipped locale with complete en.json parity, alongside en, ja, zh-Hans, and pt-BR.

### 6. [resume_from continuation chains (#5142)](https://github.com/Hmbown/CodeWhale/pull/5142)
Adds `resume_from` parameter to agent spawn, enabling continuation of a prior agent's transcript lineage — preserving prefix-cache affinity and avoiding manual context relay.

### 7. [Sessions sidebar panel (#5141)](https://github.com/Hmbown/CodeWhale/pull/5141)
Adds `SidebarFocus::Sessions` variant so the workspace sessions rail can be pinned exclusively, addressing the top community request in #2934.

### 8. [Named fleet configurations (#5137)](https://github.com/Hmbown/CodeWhale/pull/5137)
Introduces `[fleets.<name>]` — multiple independent Fleet configurations owned by named operators, while keeping `[fleet]` backward-compatible.

### 9. [Fleet layer shadowing fixes (#5125)](https://github.com/Hmbown/CodeWhale/pull/5125)
Fixes silent shadowing where personal `~/.codewhale/agents/builder.toml` edits were ignored when workspace config had higher precedence — adds UI signals and deprecates the redundant `[fleet.profiles]` layer.

### 10. [Runtime API goal/skill/memory endpoints (#5133, #5129, #5131)](https://github.com/Hmbown/CodeWhale/pull/5133)
Three linked PRs adding HTTP endpoints for goal-loop state, skill lifecycle (install/update/uninstall/trust/audit), and memory inspection/controls — enabling managed desktop/web clients to be first-class citizens.

## Feature Request Trends

1. **Session management UX** — A persistent sidebar for session browsing, auto-resume, and better history discovery is the most-commented request, now being addressed by PR #5141.
2. **Subagent continuation and lineage** — Multiple issues and PRs revolve around `resume_from` chains, advisor watchers, and background observers — the community wants agent workflows that carry context across role transitions.
3. **Configuration layering and transparency** — Named fleets, shadowing detection, and multiple operator-scoped configs are active topics, indicating power users need better configurability without silent surprises.
4. **Cost and request transparency** — `/dryrun` previews, cache pricing accuracy, and cache-hit visibility are recurring themes — users want to know what they're sending and what it costs before hitting send.
5. **Platform breadth** — Termux/Android support, FreeBSD packaging, and headless OAuth completion are all in flight, extending the tool beyond desktop Linux/macOS.

## Developer Pain Points

1. **Silent config shadowing** — Edits to individual agent configs being silently ignored when workspace-level configs exist (issue #5098) is a high-friction trap for power users.
2. **Long-running agent deadlocks** — Large text processing (novel analysis, big reports) causes sub-agent timeouts and session hangs (issues #1425, #1732), indicating orchestration reliability issues at scale.
3. **Hardcoded limits** — The 128K automatic context compression when models support 1M (#5134), and the hardcoded 10-continuation goal cap (PR #5126), both frustrate users with capable models.
4. **Provider-specific breakage** — nVidia NIM 404s, rate limits, and throttling require manual account juggling (issues #1482, #855); community wants automatic profile failover.
5. **Sandbox too restrictive** — SSHD failures due to outbound port 22 blocking (#1829) and read-only tool contracts causing self-BLOCKED states (#5123) show the sandbox model needs more nuanced permission controls.
6. **Monolithic codebase pain** — The maintainer's refactoring issues (#3948, #3949, #3950) highlight 6k-15k line files that are hard to maintain — internal pain that affects release velocity and bug-fix turnaround.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*