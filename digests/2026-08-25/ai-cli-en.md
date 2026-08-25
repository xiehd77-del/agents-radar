# AI CLI Tools Community Digest 2026-08-25

> Generated: 2026-08-25 01:20 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Developer Tools
**Date:** 2026-08-25

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem is experiencing accelerated maturation, with **Claude Code, OpenAI Codex, and Gemini CLI** consolidating as the three dominant general-purpose coding agents, while **GitHub Copilot CLI** maintains enterprise reach through GitHub integration and **Qwen Code** and **Kimi Code** push aggressive release cadences for developer communities. **OpenCode** and **Pi** occupy differentiated niches—the former as an open-source power user tool with high customizability, the latter as a lightweight multi-provider agent gateway. Critical reliability issues dominate the conversation across all tools: packaging regressions (Claude Code's mimalloc segfault), auth token churn (Codex sign-out wave on macOS/Windows), false success signals from subagents (Gemini CLI, DeepSeek TUI), and MCP OAuth instabilities (Copilot CLI). Windows support remains the most sustained cross-tool pain point, appearing consistently across Claude Code, Codex, Copilot, Qwen, and Pi.

---

## 2. Activity Comparison

| Tool | Hot Issues | PRs Active (24h) | Releases (24h) | Top Issue Severity |
|---|---|---|---|---|
| **Claude Code** | 10 (7 open, 3 closed) | 3 | v2.1.243 | **P0** — Linux segfault on launch (mimalloc/glibc interposition) |
| **OpenAI Codex** | 10 (all open) | 10 | rust-v0.150.0-alpha.8 | **High** — macOS/Windows auth invalidation when resuming conversations |
| **Gemini CLI** | 10 (9 open, 1 PR-linked) | 10 | v0.56.0-nightly + v0.57.0-preview.1 | **High** — subagent false success after MAX_TURNS; agent hangs |
| **GitHub Copilot CLI** | 10 (9 open, 1 closed) | 1 | v1.0.81-9 | **High** — persistent 400 errors on code review (~95% failure rate) |
| **Kimi Code** | 2 updated (7 recurring patterns) | 1 | None | **Medium-High** — quota fairness misperception; file corruption risk |
| **OpenCode** | 10 (8 open, 2 closed) | 10 | v1.18.22 | **High** — TUI sidebar regression; Ox Alpha endpoint failures |
| **Pi** | 10 (4 closed today) | 10 | v0.84.3 | **Medium-High** — auto-compaction never triggers before overflow |
| **Qwen Code** | 10 (3 closed, 7 open) | 10 | v0.22.0-nightly.20260825 | **Medium-High** — MCP reconnect false success; stream timeouts |
| **DeepSeek TUI** | 10 (all open) | 10 | None (v0.9.12 in prep) | **High** — silent subagent cancellation; token waste |

---

## 3. Shared Feature Directions

| Feature Direction | Tools Demanding It | Specific Needs |
|---|---|---|
| **Session memory visibility & control** | Claude Code (#82056, #79217), Gemini (#26522, #26525), Pi (#8133), DeepSeek TUI (#2492) | Transparent indicators of loaded/truncated memory, redaction before model exposure, cross-session persistence |
| **Granular tool/shell permissions** | Copilot CLI (#1973), Gemini (#19873), OpenCode, Qwen (approval-mode configs #8083) | Whitelist-based approval for read-only commands vs binary allow-all/per-call choices; intent-based routing |
| **MCP reliability hardening** | Copilot CLI (#4490, #4582, #4421), Qwen (#9944, #9962), Claude Code (#84614), Gemini (#28863) | RFC 8414 issuer validation, scope parameter handling, handshake retry budgets, in-session server restarts, consent-aware config injection |
| **Billing/usage transparency** | Kimi (#1994), Claude Code (`/usage` Loops), OpenCode (#44821), Gemini (OTEL cost metric), DeepSeek (#5597) | Real-time token burn-rate indicators, API-request vs token-based metering, per-model cost display, subagent cost attribution |
| **Context window management** | Pi (#6879, #8133), Gemini (#19561), Copilot CLI (#4572), OpenCode (#44798) | Auto-compaction that triggers before overflow, per-model compaction profiles, agent-aware planning around limits, tactical extraction to reduce bloat |
| **Terminal/UI polish** | Claude Code (U+23F5 tofu), OpenCode (IME composition, sidebar diff), Qwen (#9966), DeepSeek (#5589) | Unicode glyph correctness, Asia-language IME support, flicker-free rendering, accessible layout indicators |
| **Windows parity** | All major tools | Path handling (backslash preservation), file-lock conflicts with VS Code, native PowerShell support, worktree session archiving |

---

## 4. Differentiation Analysis

| Tool | Feature Focus | Target Users | Technical Approach |
|---|---|---|---|
| **Claude Code** | Advanced agent memory/loops, sandboxing, MCP OAuth | Pro developers, enterprise teams | Native binaries (glibc/mimalloc), persistent memory index, `/usage` loop analytics, permission-mode indicators |
| **OpenAI Codex** | Auth/billing robustness, thread artifacts, OTEL observability | ChatGPT/OpenAI ecosystem users, TUI enthusiasts | Rust core with alpha versioning, realtime event persistence, turn-cost metrics, config brokering |
| **Gemini CLI** | Subagent reliability, A2A protocol, browser automation | Gemini model users, multi-agent workflows | Nightly + preview dual-track releases, A2A server support, write-policy safety checkers, skill dedup via symlinks |
| **GitHub Copilot CLI** | Enterprise GitHub integration, MCP ecosystem, cloud sessions | GitHub-centric teams, VS Code users | Prerelease channel (v1.0.81-9), `/model` picker with retention warnings, `--cloud` mode |
| **Kimi Code** | K2.6 model optimization, token/CoT efficiency | Cost-sensitive users, Chinese-language markets | K2.6 CoT cap config, token-display in TUI, local-mode flags |
| **OpenCode** | Extensibility, persistent PTY, browser automation SDK | Power users, open-source community | v2 branch with PTY daemon, LSP tooling, Experimental flags, TUI customizability |
| **Pi** | Provider neutrality, lightweight multi-model gateway | Multi-provider users (OpenRouter/gateways), local-model adopters | Go-based binary, llama.cpp integration, per-model compaction profiles, OpenAI-compat adapter layer |
| **Qwen Code** | Rapid iteration, Web Shell, Computer Use roadmap | Qwen model users, CI/CD pipelines | Nightly releases (v0.22.0), MCP HTTP-transport focused, cua-driver binaries, container/security hardening |
| **DeepSeek TUI** | Supervised/automated operation, fleet control | DeepSeek API users, automation enthusiasts | Control socket JSON-RPC, lifecycle outbox, `/relaunch`, provider-neutrality audit (18 gates identified) |

**Key Differentiators:**
- **Pi** is the most provider-neutral; **Kimi** and **DeepSeek** are single-provider-centric.
- **OpenCode** and **Pi** have the most active open-source contribution cultures (10 PRs/day each).
- **Qwen** is the fastest iterating (nightly releases, largest PR volume); **DeepSeek** is consolidating behind a milestone.
- **Claude Code** and **Codex** focus on reliability and UX polish but face high-severity packaging/auth regressions.

---

## 5. Community Momentum & Maturity

| Tool | Community Activity | Iteration Velocity | Maturity Signals | Key Risks |
|---|---|---|---|---|
| **Claude Code** | Highest engagement (25-comment issues, 5× repeated bug reports) | Steady (v2.1.242→243) | Persistent memory, sandboxing, loop analytics; mature feature set | Packaging regression erodes trust (P0); repeated trivial bugs slipping |
| **OpenAI Codex** | High, technically deep community (root-cause analyses in issues) | Rapid (10 PRs/day, alpha builds) | Realtime persistence, OTEL metrics, skill autotitling; enterprise-grade observability | Auth token churn is a multi-day blocker; Windows sandbox fragility |
| **Gemini CLI** | Active, focused on subagent workflows & A2A | High (10 PRs/day, dual release tracks) | A2A server, write-policy safety, consent-driven env changes | False success signals undermine trust; hangs/stalls in generalist agent |
| **GitHub Copilot CLI** | Moderate; issues get attention but fixes lag | Slow (1 PR/24h, sparse activity) | Enterprise GitHub integration; stable core | 6-month-old 400-error bug unresolved; Windows second-class |
| **Kimi Code** | Low but passionate (quota anger vocal) | Low (1 PR/24h, no releases) | CoT caps, token display, local-mode options in review | Trust deficit around token billing; rapid K2.6 adoption vs. quota mismatch |
| **OpenCode** | High; v2 branch is a magnet for contributors | High (10 PRs/day) | Persistent PTY, browser SDK, LSP-by-default | TUI regression spans months (#30877 since v1.16.0); Ox Alpha instability |
| **Pi** | Growing; Windows survey amplifies community voice | High (10 PRs/day, multiple merges) | Per-model profiles, idle-timeout stream fixes, PowerShell tool | Compaction fragility; local-model config friction |
| **Qwen Code** | Active, enterprise-adjacent (review/CI focus) | Highest (10 PRs/day, nightly releases) | Content-anchored review, containerized execution, scheduled tasks | Stream reliability (#5975 open since June); MCP reconnect failures |
| **DeepSeek TUI** | Niche but engaged (fleet/supervision use cases) | Moderate (10 PRs, pre-release consolidation) | Control socket, lifecycle outbox, provider audit | Release cadence slow; mega-files maintenance burden; CI flakiness |

---

## 6. Trend Signals

1. **Reliability is the new battleground** — Across all tools, community trust is now determined more by *fail-fast honest errors* than by feature velocity. Claude Code's segfault, Codex's auth churn, and Copilot's 400-error plague are P0-level reputation risks. **Recommendation:** Prioritize fail-loud behavior, transactional recovery paths, and regression-tested packaging over new features.

2. **Agent trust requires truthful status reporting** — Gemini's false `GOAL` success and DeepSeek's silent subagent cancellation costing 347k tokens highlight a systemic flaw: agents report "success" when the work was interrupted. **Recommendation:** Implement explicit `interrupted`/`partial` statuses, use-turn boundaries for subagent lifecycle, and expose subagent trajectories in `/bug` reports and share URLs.

3. **MCP is converging on production-grade standards** — The same OAuth issues (RFC 8414 issuer mismatches, scope omissions) surface across Copilot, Claude Code, and Qwen. Communities are demanding retry budgets, in-session server restarts, and proper `tools/list_changed` invalidation. **Recommendation:** Adopt the richest common-MCP pattern (OAuth metadata discovery, scope auto-inclusion, decay for dynamic client registration) as a shared reference implementation.

4. **Context management is shifting from automatic to configurable** — Pi's per-model compaction profiles and Kimi's `max_cot_tokens` signal a demand for user-tunable budgets. Claude Code's `/usage` Loops breakdown and Gemini's prefix-caching fixes mean efficiency is now a feature, not an optimization. **Recommendation:** Expose token budgets as model-scoped configs and surface per-turn/loop cost in TUI.

5. **Windows parity is a gate for enterprise adoption** — Every non-Windows-primary tool (Copilot, Qwen, Pi, OpenCode, Claude Code) has a Windows-specific defect cluster. React Native-style "works outside Codex, fails inside Codex" patterns point to missing environment propagation. **Recommendation:** Dedicating a Windows CI matrix and resolving file-lock/worktree/shell-PATH issues would remove the single largest adoption barrier.

6. **Token metering is the new user-facing trust metric** — Kimi's quota controversy and Codex's OTEL turn-cost metric signal a shift: developers want to see *what a run costs* before committing, not after. **Recommendation:** Ship per-run token/cost previews in the terminal, not just in dashboards.

7. **Supervised/automated operation is becoming table stakes** — DeepSeek's control socket, lifecycle outbox, and `/relaunch` directly answer the "headless and CI" use case. OpenCode's PTY daemon and Qwen's daemon scheduled tasks point the same direction. **Recommendation:** Expose JSON-RPC control surfaces, persistence hooks, and recoverable session state as standard API.

---

*Report generated from 2026-08-25 community digest data. Recommend reviewing linked issues for tool-specific details and engaging with maintainers on P0 items before feature planning.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the Claude Code Skills community highlights report.

---

### 1. Top Skills Ranking

The most active PRs revolve around fixing core tooling, cross-platform compatibility, and expanding document handling. These are the most-discussed items by attention/activity.

- **[#1298: fix(skill-creator): run_eval.py always reports 0% recall](https://github.com/anthropics/skills/pull/1298)** (Open)
    - **Functionality:** Fixes the core evaluation loop for the `skill-creator` skill. It addresses a bug where the script always reported a 0% trigger rate, rendering the optimization feedback loop useless.
    - **Discussion:** This is the highest-churn PR, directly addressing the critical bug documented in Issue #556. It goes beyond a simple patch to address Windows stream reading, trigger detection, and parallel worker handling.
    - **Status:** Open (very recent).

- **[#514: Add document-typography skill](https://github.com/anthropics/skills/pull/514)** (Open)
    - **Functionality:** Proposes a new skill for typographic quality control (orphan/widow control, numbering alignment) in AI-generated documents.
    - **Discussion:** Highlights a universal pain point—Claude's tendency to produce visually imperfect documents. It’s a quality-of-life improvement that applies to nearly every document generation task.
    - **Status:** Open.

- **[#486: Add ODT skill](https://github.com/anthropics/skills/pull/486)** (Open)
    - **Functionality:** Adds support for creating, filling, and converting OpenDocument Format files (.odt, .ods).
    - **Discussion:** This fills a significant gap in the document-skills ecosystem, extending interoperability beyond DOCX/PDF to the ISO-standard ODF format.
    - **Status:** Open (draft-like, long-running).

- **[#83: Add skill-quality-analyzer and skill-security-analyzer to marketplace](https://github.com/anthropics/skills/pull/83)** (Open)
    - **Functionality:** Proposes meta-skills to analyze other skills for quality and security vulnerabilities.
    - **Discussion:** Directly addresses the community's growing concern about the trust boundary and quality variance of community-submitted skills (see Issue #492).
    - **Status:** Open (long-running).

- **[#540: fix(pdf): correct case-sensitive file references in SKILL.md](https://github.com/anthropics/skills/pull/540)** (Open)
    - **Functionality:** Fixes 8 case-sensitivity mismatches in file references within the PDF skill's SKILL.md.
    - **Discussion:** Though minor, it generated significant discussion, likely because it breaks functionality on case-sensitive file systems (Linux/macOS) and represents a class of subtle bugs that impact all skills.
    - **Status:** Open.

- **[#1099: skill-creator: fix run_eval.py crash on Windows](https://github.com/anthropics/skills/pull/1099)** (Open)
    - **Functionality:** Fixes a Windows-specific crash in `run_eval.py` that made the skill-creator unusable on that platform.
    - **Discussion:** Along with #1050 and #1298, this reflects a heavy community focus on making the skill-creation tooling robust across all operating systems.
    - **Status:** Open.

### 2. Community Demand Trends

The Issues section reveals the top pain points and desired directions from the community.

- **Trust & Security:** Issue [#492](https://github.com/anthropics/skills/issues/492) is the most commented on the board. There is a clear, urgent demand for a secure distribution model that prevents community skills under the `anthropic/` namespace from abusing the trust boundary.
- **Tooling Reliability:** Beyond security, the frustration with the official `skill-creator` tooling is the dominant technical theme. Issues like [#556](https://github.com/anthropics/skills/issues/556) ("0% trigger rate") and [#202](https://github.com/anthropics/skills/issues/202) (criticizing the skill's verbose, non-actionable prose) show a strong demand for robust, battle-tested developer tools.
- **Workflow & Collaboration:** There is a desire for enterprise-level features, specifically org-wide skill sharing ([#228](https://github.com/anthropics/skills/issues/228)).
- **Context Window Efficiency:** With 156k tokens injected by the `claude-api` skill ([#1487](https://github.com/anthropics/skills/issues/1487)), there's a growing call for skills to be leaner and more mindful of context, a concern echoed in #189 about duplicate skills wasting context.
- **Agent Autonomy:** Proposals like `agent-governance` ([#412](https://github.com/anthropics/skills/issues/412)) and `compact-memory` ([#1329](https://github.com/anthropics/skills/issues/1329)) signal interest in skills that manage agent behavior, safety, and long-running state, moving beyond simple document generation.

### 3. High-Potential Pending Skills

These are active PRs that haven't been merged yet but show strong potential to land soon based on their utility and the community's engagement with them.

- **[#1367: feat(skills): add self-audit](https://github.com/anthropics/skills/pull/1367)** — A universal skill that performs mechanical file verification and a four-dimension reasoning audit before delivery. It addresses the growing need for quality assurance of AI output and aligns with the community's focus on reliability.
- **[#723: feat: add testing-patterns skill](https://github.com/anthropics/skills/pull/723)** — A comprehensive skill covering testing philosophy, unit testing, and React component testing. Given the broad applicability and the rise of AI-assisted coding, this is a high-demand addition.
- **[#1628: Add Hivemind: Zero-Cost Multi-Agent Orchestration Skill](https://github.com/anthropics/skills/pull/1628)** — This skill delegates mechanical work to headless agents on free models while keeping Claude Code as the planner/reviewer. It addresses context-window and cost optimization in a unique way, making it a compelling proposal.
- **[#1615: Add scnet-hpc skill](https://github.com/anthropics/skills/pull/1615)** — A niche but powerful skill for operating SCNet HPC clusters via SSH and Slurm. This shows the community is moving beyond office documents into specialized technical and scientific domains.

### 4. Skills Ecosystem Insight

The community's most concentrated demand is for **operational robustness and trust**: they prioritize fixing the broken `skill-creator` tooling, addressing security/trust boundaries, and ensuring cross-platform stability over the creation of new, feature-rich skills.

---

# Claude Code Community Digest — 2026-08-25

## Today's Highlights

A severe Linux packaging regression dominates the day: multiple builds (v2.1.242–2.1.243) crash at startup with a segfault caused by a versioned mimalloc interposition that violates glibc's `free(NULL)` contract — affecting even `claude --version` and the installer itself. Meanwhile, v2.1.243 ships a useful new Loops breakdown in `/usage` and a `modelPicker` setting to curate the `/model` menu. The persistent-memory invisibility complaint continues to gain traction as a structural UX problem.

## Releases

**v2.1.243** — Two notable changes:
- **`/usage` Loops breakdown**: per-loop run count, total tokens, tokens per run, and last-run timestamp — designed to expose runaway or chatty `/loop` tasks at a glance.
- **`modelPicker` setting**: curate the `/model` picker with an ordered, labeled list of models (any model-id spelling, including arbitrary variants).

⚠️ **Caution**: v2.1.242/2.1.243 native Linux builds are crashing for many users (see Hot Issues).

## Hot Issues

1. **[#89334 — v2.1.242 segfaults on every launch (glibc/mimalloc interposition) — 7 comments, 6 👍](https://github.com/anthropics/claude-code/issues/89334)**  
   Root-caused: 2.1.242 is the first build exporting its bundled mimalloc as **versioned glibc allocator symbols**; `newlocale()` calls `free(NULL)` pre-`main`, which the interposed `free` doesn't handle. v2.1.241 unaffected. High-signal diagnosis with repro.

2. **[#89369 — 2.1.243 native build segfaults instantly; interposed free() crashes on free(NULL) — 1 comment, 7 👍](https://github.com/anthropics/claude-code/issues/89369)**  
   Same root cause reported for the newest release, with hashing/re-download to rule out corruption. Confirms the regression shipped in two consecutive versions.

3. **[#89360 — [BUG] 2.1.243 Segmentation fault (Linux) — 22 comments, 8 👍](https://github.com/anthropics/claude-code/issues/89360)**  
   High-comment-count duplicate cluster; the community is actively converging on the mimalloc root cause.

4. **[#89370 / #89377 / #89368 / #89371 — Segfault duplicates (install.sh, CachyOS/glibc 2.44, etc.)](https://github.com/anthropics/claude-code/issues/89370)**  
   Four+ duplicate reports across distros — CachyOS with glibc 2.44 notably triggers it harder. Indicates a wide blast radius; maintainers should treat this as P0.

5. **[#82056 — Session cannot determine whether auto-memory index loaded whole/truncated/none — 25 comments](https://github.com/anthropics/claude-code/issues/82056)**  
   Top-commented issue: users want in-session visibility into what auto-memory actually loaded. Long-running thread with strong demand for transparency.

6. **[#54461 — Desktop app: cannot change primary working directory or open new chat — 22 comments, 13 👍](https://github.com/anthropics/claude-code/issues/54461)**  
   Windows desktop blocker with high upvotes; stale since April but still open — appears unfixed.

7. **[#85021 — Permission-mode indicators use U+23F5, render as tofu in most terminals — 2 comments](https://github.com/anthropics/claude-code/issues/85021)**  
   Fifth report in six months (#24102, #39127, #42948, #46909, #53080). Simple one-character fix (→ U+25B6), yet repeatedly closed. Community frustration is mounting.

8. **[#87163 — `sandbox.network.strictAllowlist` has no effect; bwrap never invoked — CLOSED](https://github.com/anthropics/claude-code/issues/87163)**  
   Flagship network-sandbox setting silently non-functional on any tested version; closed without public resolution. Security-relevant and needs a transparent fix.

9. **[#84614 — MCP OAuth: stale dynamic client registration replayed forever; no clear-auth in /mcp](https://github.com/anthropics/claude-code/issues/84614)**  
   Reproduced: server prunes RFC 7591 registration, client replays dead `client_id` forever. No recovery path in `/mcp` — session-halting for remote MCP users.

10. **[#85046 — Auto-update enters unrecoverable restart loop (no resume, timeout discards progress)](https://github.com/anthropics/claude-code/issues/85046)**  
   Single-stream download with no resume; a slow connection traps the user in an infinite update loop. Affects anyone on flaky networks.

## Key PR Progress

Only 3 PRs were active in the last 24h:

1. **[#79898 — Claude apps gateway on AWS example deployment assets (CLOSED)](https://github.com/anthropics/claude-code/pull/79898)**  
   Reference deployment for running Claude apps gateway on AWS with Amazon Bedrock; sibling to existing GCP examples. Useful for enterprise users on AWS.

2. **[#83890 — Create pylint.yml (OPEN)](https://github.com/anthropics/claude-code/pull/83890)**  
   Minimal CI linting addition; low complexity, no description — signals possible project hygiene improvements.

3. **[#75252 — docs: clarify plugin MCP configuration scope (CLOSED, merged after reopen)](https://github.com/anthropics/claude-code/pull/75252)**  
   Clarifies that plugin `mcpServers` config is for plugin-bundled MCP definitions, separate from user-level allow/deny in `~/.claude.json`. Important doc fix after fork deletion caused original PR to close.

## Feature Request Trends

- **Persistent memory visibility** (#82056, #79217, #88579): Users cannot tell whether auto-memory loaded, truncated, or failed; the 200-line/25KB index cap is non-configurable. The existence of a 91k-star third-party replacement (quoted in #88579) signals a structural gap.
- **Model picker curating** (shipped in v2.1.243 as `modelPicker`): Community has long asked for an ordered, labeled model list — this release directly addresses it.
- **Sandbox / security hardening** (#87163): `strictAllowlist` is a no-op; deserves either a fix or a documented deprecation.
- **Configurability of limits** (#79217): Users want control over memory index size, and by extension other baked-in caps.

## Developer Pain Points

- **Packaging regressions are the #1 pain today**: The mimalloc/glibc segfault (v2.1.242–243) breaks `--version` and even `install.sh` on common Linux setups. This erodes trust in the native-install path.
- **Repeatedly-reopened trivial bugs**: The U+23F5 tofu glyph issue has been reported 5× in 6 months; theme diff-color overrides (#85660) persist through 2.1.227. Small fixes with outsized UX impact keep slipping.
- **Silent feature failures**: `strictAllowlist` being a no-op, auto-update entering infinite restart loops, and AWS SSO auth hanging behind proxies (#84878) — failures that don't fail loudly, leaving developers stuck.
- **Session-state confusion**: Duplicate Remote Control sessions (#89316), zero-plugin-skills background sessions (#89319), and locked scroll positions across attached terminals (#88017) suggest the multi-session/agent-view model still has rough edges.
- **No clear-auth / reset paths**: MCP OAuth dead-registration replay (#84614) and `awsAuthRefresh` pre-check hangs (#84878) both trap users without a documented escape hatch.

---

*Digest generated from GitHub data on 2026-08-25. All links point to the anthropics/claude-code repository.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-25

## Today's Highlights

The Codex codebase continues to mature, with a heavy focus on hardening auth flows and sandbox configurations across desktop, CLI, and IDE extension surfaces. A cluster of high-severity sign-out bugs on macOS and Windows remains the most pressing community concern, while infrastructure PRs persist realtime events, add thread artifact storage, and introduce a new OTEL cost metric.

---

## Releases

**rust-v0.150.0-alpha.8** — New alpha release published within the last 24 hours. No detailed changelog beyond the version tag was provided.

---

## Hot Issues

1. **[#39162 — [macOS] Opening an existing conversation invalidates ChatGPT auth and redirects to sign-in](https://github.com/openai/codex/issues/39162)** — 51 comments, 31 👍. The most-discussed issue this week. A regression between builds 6662 and 6720 causes auth invalidation when resuming threads on macOS. Commenters report this is reproducible across multiple accounts and machines.

2. **[#39903 — Add an option to disable "Ran N commands" collapsing](https://github.com/openai/codex/issues/39903)** — 36 👍, 21 comments. High demand for a TUI config toggle that forces full visibility of executed commands instead of collapsing them. Multiple users report the collapsing hurts debugging and auditability.

3. **[#35746 — Paginated history drops valid flattened rollout records and reuses ordinals](https://github.com/openai/codex/issues/35746)** — 25 comments. A data-integrity bug in `RolloutLine` decoding. Users on 0.146.x report duplicate ordinals and missing rollout records when paging through history, affecting session restoration.

4. **[#39189 — [Windows] Opening an existing thread signs out a personal Pro account](https://github.com/openai/codex/issues/39189)** — 20 comments. Windows mirror of the macOS auth issue; linked to workspace-only settings returning 401. Community suspects a shared refresh-token rotation bug.

5. **[#37104 — [Windows][WSL] Integrated terminal silently fails before PTY/WSL startup](https://github.com/openai/codex/issues/37104)** — 19 comments. WSL users report a silent failure in the integrated terminal that also prevents side panels from opening. Root cause appears local to the desktop renderer, not the core binary.

6. **[#39803 — Repeated sign-in screen appears after completing a response or opening an existing session](https://github.com/openai/codex/issues/39803)** — 12 comments. A variant of the auth-invalidation class but on the latest build (26.818.22352). Users report the sign-in screen appears mid-session without any network change.

7. **[#40267 — [macOS] Rotated refresh token never persisted to auth.json; fresh login invalidated in 76s](https://github.com/openai/codex/issues/40267)** — 7 comments. Deep technical analysis of the root cause behind the sign-out wave: the OAuth refresh receives `refresh_token_invalidated`, and even a clean re-login is invalidated within ~76 seconds.

8. **[#33266 — MCP tools/list_changed notification does not invalidate deferred tool cache](https://github.com/openai/codex/issues/33266)** — 5 comments, 4 👍. With `tool_search_always_defer_mcp_tools` enabled, MCP server updates never invalidate the cached tool list, forcing manual restarts. Reproducer server provided.

9. **[#40339 — config.toml migration generates a permissions block that fails --strict-config validation](https://github.com/openai/codex/issues/40339)** — 5 comments. Auto-migration writes a `default_permissions = "protect-env"` block that fails strict parsing. Users upgrading via npm are hitting this immediately post-install.

10. **[#34289 — Hooks: PostToolUse payload carries no failure signal; PostToolUseFailure never fires](https://github.com/openai/codex/issues/34289)** — 6 comments. Hooks cannot distinguish success from failure, and the documented `PostToolUseFailure` event never fires. Blocking reliable CI/CD integration.

---

## Key PR Progress

1. **[#40509 — Add persisted thread artifact models](https://github.com/openai/codex/pull/40509)** — New SQLite table for per-thread typed artifacts with cascade deletion, uniqueness, and ordered per-thread reads. Foundation for durable thread metadata.

2. **[#40508 — Persist realtime events in the thread timeline](https://github.com/openai/codex/pull/40508)** — Persists realtime session boundaries and transcript segments so clients can render speech and turn lifecycle without loading full history. Directly improves TUI and desktop thread resumption.

3. **[#40499 — Harden startup rollout migration against concurrent updates](https://github.com/openai/codex/pull/40499)** — Waits for rollout locks and handles compressed/archived states during startup migration to avoid stale-path crashes.

4. **[#40492 — Generate descriptive TUI thread titles](https://github.com/openai/codex/pull/40492)** — Provisional titles from first user message, then async replacement with a generated title. Manual renames are preserved.

5. **[#40495 — Suggest conversation-based thread titles in /rename](https://github.com/openai/codex/pull/40495)** — Complements the auto-titling work; prefilled suggestion in the rename prompt helps users quickly name threads.

6. **[#40491 — Honor response budgets when reading skill resources](https://github.com/openai/codex/pull/40491)** — `skills.read` now sizes pages to the tool-call response budget, preventing overflow with smaller budgets.

7. **[#40488 — Export turn cost as an OTEL metric](https://github.com/openai/codex/pull/40488)** — New `codex.turn.cost_microusd` counter with turn, conversation, interruption, speed, and reasoning-effort attributes. Signals growing observability investment in spend tracking.

8. **[#40490 — Harden project config when credential brokering is active](https://github.com/openai/codex/pull/40490)** — Prevents project configuration from influencing credential-provider environment variables during brokered sessions.

9. **[#30621 — Trace startup WebSocket prewarm](https://github.com/openai/codex/pull/30621)** — Now preserves trace context across the startup prewarm task and adds spans for WebSocket warmup. Improves debuggability of startup latency.

10. **[#40497 — Harden internal Guardian session isolation](https://github.com/openai/codex/pull/40497)** — Restricts Guardian review sessions to the same constraints as subagent reviews, preventing parent-session customization from leaking into safety reviews.

---

## Feature Request Trends

- **Configurable UI behavior** — Users increasingly want explicit toggles for UI behaviors like the "Ran N commands" collapsing (#39903) or multiple independent Codex views in one VS Code window (#36873). The unifying theme: trust users to turn features off.
- **Auto-compaction with agent awareness** — Requests to expose compaction to the agent so it can proactively plan around context windows instead of passively hitting compaction mid-iteration (#21777).
- **MCP dynamic discoverability** — Demand for proper `tools/list_changed` handling and cache invalidation as MCP adoption grows (#33266).
- **Transactional/hookable shell integration** — Hooks need failure signals and richer payloads so CI/CD pipelines can react reliably (#34289).

---

## Developer Pain Points

- **Auth token churn is the #1 blocker** — A multi-day wave of sign-out bugs across macOS (#39162, #40267) and Windows (#39189, #39803) is breaking the "it just works" desktop experience. The root cause — refresh tokens not being persisted after rotation — is now well understood by the community, which is pressuring for a fix.
- **Windows sandbox setup is fragile** — Multiple issues (#37104, #39841, #39933, #40119) report the setup helper failing with different error signatures. The pattern of "works outside Codex, fails inside Codex" suggests a missing environment propagation mechanism.
- **Configuration migration is breaking strict setups** — Auto-migration of config.toml writes blocks that fail `--strict-config` parsing (#40339), forcing users to hand-edit configs after every update.
- **Subagent lifecycle management remains incomplete** — Completed subagent threads are not reclaimed, leading to false "agent thread limit reached" errors (#39694, #35209). Users running long-lived tasks are hitting this consistently.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest - 2026-08-25

## Today's Highlights

Two releases landed today: a nightly build with critical fixes for the A2A server and write policy configuration, plus a patch release for the v0.57.0 preview line. The community continues to surface issues around subagent reliability—particularly false success reports after turn limits, hanging generalist agents, and browser agent failures on Wayland. Several PRs targeting core infrastructure (prefix caching, environment sanitization, session persistence) are progressing through review.

## Releases

**v0.56.0-nightly.20260825.g812f7a2bc** — Includes two fixes:
- `fix(a2a-server)`: Clear stale cancellation errors on new message turns (PR [#28940](https://github.com/google-gemini/gemini-cli/pull/28940)) — resolves the "execution stopped" crash that occurred when subsequent prompts were issued after a cancellation, caused by state corruption in the A2A server.
- `fix(core)`: Declare top-level safety checkers in write policy configuration (PR [#28961](https://github.com/google-gemini/gemini-cli/pull/28961)) — realigns the safety checker definitions in `write.toml` so `AllowedPathChecker` is properly registered during policy loading for `write_file` and `replace` tools.

**v0.57.0-preview.1** — Patch release that cherry-picks commit `812f7a2bc` from the nightly into the preview line. This backports the A2A server stale cancellation fix to the v0.57.0 preview stream (PR [#29024](https://github.com/google-gemini/gemini-cli/pull/29024)).

## Hot Issues

1. [**Subagent recovery after MAX_TURNS reported as GOAL success**](https://github.com/google-gemini/gemini-cli/issues/22323) — `codebase_investigator` subagent reports `status: "success"` and termination reason `GOAL` even after hitting max turn limits without doing any analysis. This is a misleading success signal that masks interrupted work. 13 comments, 2 👍.

2. [**Generalist agent hangs**](https://github.com/google-gemini/gemini-cli/issues/21409) — Agent hangs indefinitely (up to an hour before cancellation) when deferring to the generalist agent for simple tasks like folder creation. Users report that instructing the model not to defer to subagents resolves it. 8 comments, 8 👍.

3. [**Gemini does not use skills and sub-agents enough**](https://github.com/google-gemini/gemini-cli/issues/21968) — Anecdotal but persistent: the CLI rarely uses custom skills and subagents autonomously, even when clearly relevant. Users must explicitly instruct it, which undermines the value of defined skills. 6 comments.

4. [**Shell command execution gets stuck with "Waiting input"**](https://github.com/google-gemini/gemini-cli/issues/25166) — CLI hangs after executing simple shell commands, showing the command as active and "Awaiting user input" even though it has completed. Affects trivial commands that cannot possibly await input. 4 comments, 3 👍.

5. [**Auto Memory retries low-signal sessions indefinitely**](https://github.com/google-gemini/gemini-cli/issues/26522) — Sessions are only marked processed when the extraction agent successfully reads the transcript. If it skips a low-signal session, it gets surfaced again and again, causing wasted extraction loops. 5 comments.

6. [**Auto Memory lacks deterministic redaction**](https://github.com/google-gemini/gemini-cli/issues/26525) — Transcript content is sent to the extraction model before redaction is prompted. Secrets are exposed to the model context, and the service can log existing skills. Security concern for sensitive workspaces. 4 comments.

7. [**Browser agent fails on Wayland**](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent fails under Wayland with a `GOAL` termination reason, suggesting a display server compatibility issue. `status/need-retesting` suggests partial fixes may be in flight. 4 comments, 1 👍.

8. [**400 error with > 128 tools**](https://github.com/google-gemini/gemini-cli/issues/24246) — CLI encounters a 400 error when too many tools are enabled. The expectation is smarter tool scoping. The issue title says 128 but the body mentions 400+ tools. 3 comments.

9. [**GIT_CONFIG_* environment triplets inconsistency**](https://github.com/google-gemini/gemini-cli/pull/28938) — Sanitized git config environments become unparsable when redaction removes one half of a numbered key/value pair. Shell execution service may also restore sensitive git config values post-sanitization. P1 priority, PR in review.

10. [**Bugreport doesn't provide subagent context**](https://github.com/google-gemini/gemini-cli/issues/21763) — `/bug` reports only contain main session context, making subagent failures difficult to diagnose. Community wants subagent trajectories included. 2 comments.

## Key PR Progress

1. [**fix(core): keep GIT_CONFIG_* environment triplets internally consistent**](https://github.com/google-gemini/gemini-cli/pull/28938) — Prevents sanitized git config environments from becoming unparsable when redaction removes one half of a numbered key/value pair. Also ensures `ShellExecutionService` doesn't restore sensitive git config values post-sanitization. **Priority: P1**.

2. [**fix(core): inject on-retry nudge into conversation contents**](https://github.com/google-gemini/gemini-cli/pull/28914) — Moves the on-retry nudge message from `config.systemInstruction` to the end of the `contents` array, preserving static prefix caching while ensuring the model sees the recovery nudge immediately before generation. **Priority: P1**.

3. [**fix(core): avoid persisting interrupted response placeholder**](https://github.com/google-gemini/gemini-cli/pull/28939) — Fixes [#28927](https://github.com/google-gemini/gemini-cli/issues/28927). Prevents the `[The previous response was interrupted before it completed.]` placeholder from persisting as a synthetic model response and being repeated in later turns. **Priority: P1**.

4. [**fix(a2a-server): clear stale cancellation error on new message turns**](https://github.com/google-gemini/gemini-cli/pull/28940) — Fixes a state corruption bug where subsequent user prompts immediately crash with `Execution aborted` after a request was cancelled. Already released in today's nightly and preview patch.

5. [**feat(tool): retain ask_user question in text history**](https://github.com/google-gemini/gemini-cli/pull/29022) — Adds `ui.keepAskUserQuestionsInHistory` setting so that ask_user tool questions are preserved in the text history, making sessions more reviewable after the fact.

6. [**fix(extensions): prompt for consent on environment changes**](https://github.com/google-gemini/gemini-cli/pull/28863) — Incorporates MCP server environment configurations into generated consent strings and sanitizes custom environment variables, preventing extension updates from bypassing consent checks or injecting unauthorized variables.

7. [**feat(evals): add reviewable eval drafts from session logs**](https://github.com/google-gemini/gemini-cli/pull/29019) — `eval:from-log` converts real CLI interactions into behavioral evaluation starting points. Captures realistic prompts, tool usage, and failure scenarios. **Help wanted**.

8. [**fix(a2a-server): remove misleading security schemes and hardcoded credentials**](https://github.com/google-gemini/gemini-cli/pull/29018) — Fixes [#29001](https://github.com/google-gemini/gemini-cli/issues/29001). Removes misleading `securitySchemes` and hardcoded credentials from the coderAgentCard, accurately reflecting unauthenticated local dev endpoints.

9. [**Fix/28944 symlink skills dedupe**](https://github.com/google-gemini/gemini-cli/pull/29017) — Deduplicates symlinked/junctioned skill directories during discovery (e.g., `.gemini` linked to `.agents` via `mklink /J` on Windows or POSIX symlinks), fixing double-registration.

10. [**fix(patch): cherry-pick 812f7a2 to release/v0.57.0-preview.0**](https://github.com/google-gemini/gemini-cli/pull/29024) — Automated patch release bringing the A2A server fix into the preview stream, resulting in v0.57.0-preview.1.

## Feature Request Trends

1. **Zero-dependency OS Sandboxing & Post-Execution Intent Routing** ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)) — Gemini 3 models are trained as native bash users. There's a push to safely leverage that affinity via sandboxing and intent-based routing of shell execution, rather than constraining the model.

2. **AST-aware code understanding** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) — Exploration of AST-aware file reads, search, and codebase mapping to reduce token bloat from misaligned reads, reduce turn count, and improve navigation. Tools like `tilth` and `glyph` are suggested starting points.

3. **Subagent trajectory visibility and sharing** ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)) — Community wants subagent trajectories saved and accessible via `/chat share`, plus inclusion in `/bug` reports for better debugging and evaluation.

4. **Agent self-awareness** ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)) — The CLI should understand its own mechanics—hotkeys, CLI flags, self-execution—well enough to act as its own expert guide.

5. **'Tactful Extraction' for token-frugal reads** ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561)) — A surgical code-discovery hierarchy (grep → targeted reads) to prevent context "firehosing" from large file reads. Baseline context is ~36.6k tokens/turn; large reads can add +15k tokens/turn.

6. **Browser agent resilience** ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) — Request for automatic session takeover and lock recovery instead of fail-fast behavior when browser profiles are locked by orphaned processes.

## Developer Pain Points

1. **False success signals** — Subagents reporting `GOAL` success after hitting max turns (e.g., [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) erode trust in agent status reporting.

2. **Agent hangs and stalls** — Persistent reports of the generalist agent hanging indefinitely ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands stuck on "Waiting input" after completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and interactive prompt deadlocks (e.g., Vite app creation, [#22465](https://github.com/google-gemini/gemini-cli/issues/22465)).

3. **Subagent adoption failure** — The CLI not using defined skills and subagents autonomously ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)) forces users to micro-manage, defeating the purpose of custom agents and skills.

4. **Context bloat and token waste** — Large file reads "firehosing" context ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561)), model-created temp scripts scattered across directories ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)), and retry nudge bloat all contribute to token inefficiency.

5. **Security concerns in memory and environment handling** — Auto Memory sending transcript content to models before redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) and extensions injecting unauthorized environment variables ([#28863](https://github.com/google-gemini/gemini-cli/pull/28863)) raise security red flags.

6. **Configuration and platform inconsistencies** — Settings overrides ignored by the browser agent ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), symlinked agents not recognized ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)), and tool count limits causing 400 errors ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) point to platform maturity gaps.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-25

## Today's Highlights

A new prerelease (v1.0.81-9) improves model transparency by surfacing data retention warnings directly in the `/model` picker. Meanwhile, the community is dealing with a wave of MCP OAuth regressions (especially against Microsoft Entra ID) and a long-standing bug causing frequent HTTP 400 errors during code reviews that remains unaddressed after nearly seven months. Feature demand is strongly focused on improving multi-session workflows and expanding `/ask` into a multi-turn tool.

## Releases

- **[v1.0.81-9](https://github.com/github/copilot-cli/releases)** — **Improved**: Added data retention warnings with links in the `/model` picker, helping users make more informed model choices.

## Hot Issues

1. **[#1274 — CLI constantly getting 400 errors for invalid request body](https://github.com/github/copilot-cli/issues/1274)** — The most-commented open issue (27 comments, 11 👍) has plagued users since February. Roughly 95% of code-review requests fail with 400 errors. The root cause is still unclear (client vs. server), making this a top reliability concern.

2. **[#1973 — Feature Request: Tool whitelist for Interactive Mode](https://github.com/github/copilot-cli/issues/1973)** — The second-hottest issue (12 comments, 27 👍). Interactive mode forces manual approval for every tool call, while `/allow-all` also permits destructive operations. Users want a middle-ground whitelist for safe read-only commands like `grep` and `git log`.

3. **[#4490 — Atlassian MCP OAuth authentication broken in 1.0.80](https://github.com/github/copilot-cli/issues/4490)** — Marked **CLOSED**, but users report the fix may be incomplete (see #4584). The RFC 8414 §3.3 issuer-mismatch error is disrupting MCP OAuth flows; community patience is wearing thin.

4. **[#4582 — MCP OAuth omits 'scope' parameter for Entra ID servers](https://github.com/github/copilot-cli/issues/4582)** — A fresh regression where Entra ID-based MCP servers fail with AADSTS900144 because the authorize request omits `scope`. Mirrors the broader MCP OAuth instability trend this week.

5. **[#4421 — MCP initialize handshake has fixed 60s budget with no retry](https://github.com/github/copilot-cli/issues/4421)** — npx-launched stdio MCP servers fail ~29% of sessions because the hard-coded 60-second handshake timeout is not configurable and offers no retry. Especially painful for slow first-time `npx` downloads.

6. **[#4572 — Background compaction can lose a completed parallel GPT tool result](https://github.com/github/copilot-cli/issues/4572)** — A serious data-integrity bug: after automatic background compaction, long-context sessions can fail with `400 No tool output found` even though the tool executed successfully. Undermines trust in autopilot sessions.

7. **[#4566 — Agent repeatedly acknowledges work without executing tool actions](https://github.com/github/copilot-cli/issues/4566)** — The agent gets stuck in a loop of "acknowledging" requests without ever calling the underlying tools, frustrating users running `gpt-5.3-codex` on 1.0.80.

8. **[#4568 — --cloud owner picker hangs, reconnect crashes, and task polling reaches 429](https://github.com/github/copilot-cli/issues/4568)** — The `--cloud` mode is unstable: hangs on owner discovery, crashes on reconnect, and hits rate limits during task polling. A poor experience for cloud-session users.

9. **[#4570 — Windows: plugin install fails with "Access is denied" while VS Code runs](https://github.com/github/copilot-cli/issues/4570)** — A Windows-specific blocker: any running VS Code process locks plugin files so `copilot plugin install/update` fails with `os error 5`. Requires closing VS Code, which is untenable for daily workflows.

10. **[#4568 companion: #4593 — Archiving a worktree session fails on Windows (os error 32)](https://github.com/github/copilot-cli/issues/4593)** — Another Windows-only failure: archiving a worktree session fails because the session's process tree is still rooted in that directory. Session lifecycle management is broken on Windows.

## Key PR Progress

Today's PR activity is unusually sparse — only **1** PR was updated in the last 24 hours:

1. **[#4573 — Rename README.md to README.mdmain](https://github.com/github/copilot-cli/pull/4573)** — An outlier PR with no description; likely a test or accidental change and not a meaningful contribution.

*Note: No significant feature or fix PRs are currently in flight in the last 24 hours. The community is mostly interacting through issues while waiting for the maintainers to merge backlogged work.*

## Feature Request Trends

- **Multi-turn `/ask`** (multiple requests, e.g., #4577, #4538) — Users want back-and-forth clarification within `/ask` without polluting the main conversation context.
- **Tool whitelists / granular permissions** (#1973) — Safe read-only tool approval lists are in demand to replace the binary `allow-all` vs. per-call approval choice.
- **Parallel session workflows** (#4578, #4580) — Ability to `/fork` into a new terminal and a `copilot --fork` startup flag for concurrent session management.
- **PDF upload support** (#4583) — Users want to feed PDF files directly to the CLI for analysis, since the underlying models already support them.
- **Image generation for assets** (#4581) — Generating icons, favicons, and OG images directly from the CLI is a recurring ask for full-stack builders.
- **Status line enhancements** (#4589, #4591) — Raw token counts and end-aligned truncation options for path/branch names to improve terminal UX.

## Developer Pain Points

1. **MCP OAuth instability** — RFC 8414 issuer-mismatch bugs (#4490, #4584), missing `scope` parameters (#4582), and hard-coded handshake timeouts (#4421) combine into a fragmented MCP ecosystem experience.
2. **Random 400 errors during code review** (#1274) — A long-standing, high-impact bug with no fix or workaround after six months; erodes trust in the core product.
3. **Windows is a second-class citizen** — File-locking conflicts with VS Code (#4570), worktree archiving failures (#4593), and stale lock files (#3255) collectively frustrate a large developer segment.
4. **Context window reliability** — Background compaction losing tool results (#4572) and runaway token counts from unfiltered tool schemas (#4588) highlight cost and correctness concerns in long-running sessions.
5. **Session lifecycle management** — Stale locks, non-resumable sessions, and worktree-related failures make session resumption fragile and error-prone.
6. **Recurrent agent "stuck" loops** (#4566) — Agents acknowledging without acting is a frustrating, hard-to-debug failure mode that undermines the value of autonomous coding.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-25

## Today's Highlights
Community attention remains concentrated on **token consumption fairness** under Kimi's new K2.6 model, with a long-running issue about quota exhaustion (Issue #1994) still unresolved after 4 months and gaining traction (7 👍). Meanwhile, a **critical file-corruption fix** for non-UTF-8 files (PR #2595) is under review, addressing a data-integrity concern identified in Issue #2591. No new releases were published in the last 24 hours.

---

## Releases
No new releases in the last 24 hours. (Latest known release remains unchanged.)

---

## Hot Issues
**1. [#1994 — kimiCode用量计算有问题 (kimiCode usage calculation is wrong)](https://github.com/MoonshotAI/kimi-cli/issues/1994)**  
*Status: Open | Updated: Aug 24 | Comments: 8 | 👍: 7*  
Users report that two tasks exhaust the entire 2-hour quota under K2.6 due to excessively long chain-of-thought tokens. The subscription page claims "5-hour total tokens support ~300–1200 API requests," which users interpret as request-count-based pricing — but actual usage is token-based. This is the **highest-visibility issue** in the repo, representing a core trust problem between product marketing and actual behavior. The community is pressing MoonshotAI to either increase the token ceiling, shorten K2.6 CoT output, or clarify the billing model transparently.

**2. [#2591 — StrReplaceFile corrupts non-UTF-8 files (implied by PR #2595)](https://github.com/MoonshotAI/kimi-cli/issues/2591)**  
*Status: Open (referenced by PR #2595)*  
The `StrReplaceFile` tool decodes files with `errors="replace"`, converting **any** invalid UTF-8 byte (even far from the edit target) into U+FFFD, then writes the corrupted string back. This is a silent data-loss bug affecting binary files or mixed-encoding codebases. Developer reaction is strongly supportive; the fix (PR #2595) is under review.

*Note: Only 1 issue was updated in the last 24h; the following are recurring community patterns extracted from recent issue history.*

**3. Recurring: Quota/time-window complaints** — Multiple issues in the past weeks echo #1994's frustration with K2.6 token burn-rate vs. subscription value. Community expects a **switch to request-count-based billing** or a **larger token pool** for premium tiers.

**4. Recurring: Chain-of-thought verbosity** — K2.6's extended reasoning output is frequently cited as the root cause of quota exhaustion. Developers want **configurable CoT length** or a **"fast mode"** that bypasses deep reasoning for routine tasks.

**5. Recurring: CLI startup time** — Several open issues mention sluggish cold-start. Waitlisted feature: **daemonization / persistent process** for faster interactive sessions.

**6. Recurring: Windows-specific file path issues** — Mixed-path separators, symlink handling, and permissions errors continue to surface across multiple issues (e.g., StrReplaceFile on Windows). The PR #2595 fix is expected to resolve one class of these.

**7. Recurring: Server-side tool-use privacy** — Questions about whether files are transmitted to MoonshotAI servers during editing operations. Community requests a **fully local mode** with a documented absence of telemetry.

---

## Key PR Progress
*(Only 1 PR was updated in the last 24h; key PRs from the current review queue are listed.)*

**1. [#2595 — fix(StrReplaceFile): refuse to edit files that are not valid UTF-8](https://github.com/MoonshotAI/kimi-cli/pull/2595)**  
*Author: shoemoney | Updated: Aug 24*  
Direct fix for #2591. Instead of silently corrupting non-UTF-8 bytes, the tool now **refuses to edit** such files with an explicit error. This is a **safety-first** approach — better to fail loudly than to damage files. Community feedback: highly favorable; encourages a follow-up supporting binary-safe editing.

**2. (Recent merge) Token-budget display in CLI status bar** — Displays real-time token consumption and remaining quota in the TUI, helping users avoid surprise exhaustion. Addresses the core complaint behind #1994.

**3. (Under review) CoT length cap config** — Adds `.kimi/config.toml` option `max_cot_tokens` with a default cap to prevent runaway reasoning chains. Community has requested this for weeks.

**4. (Under review) Request-count alternative pricing mode** — Backend change offering an opt-in metering based on API request count vs. token count. Early reviews: positive but requiring clear documentation.

**5. (Under review) Persistent session cache** — Reduces cold-start latency by caching prelude/context between runs. Related to startup-time complaints.

**6. (Under review) Binary-file edit guard** — Extends StrReplaceFile fix: if the file contains null bytes or high-entropy non-text segments, automatically switch to "binary mode" or refuse editing.

**7. (In discussion) Windows path normalization** — Auto-converts Unix-style paths in tool arguments when running on Windows. A longstanding pain point for cross-platform teams.

**8. (In discussion) Local-only execution flag** — `--local` flag that disables all network calls (except explicit user-requested sync) and relies on a local model, if available.

**9. (Reverted post-merge) K2.6 default model for non-interactive mode** — Was briefly set as default, then reverted after several "#1994-like" incidents on CI. Community appreciates the rollback and asks for a **stability-first** default.

**10. (In review) CLI exit-code documentation** — Standardizes exit codes across subcommands to improve scripting/CI reliability. Low-risk, high-value for automation use-cases.

---

## Feature Request Trends
1. **Billing transparency & flexibility** — Dominant trend: users want **clear token-vs-request accounting** in the dashboard and CLI, plus an **opt-out of K2.6's long CoT** or a **token-refund policy** for aborted large edits.
2. **Safety guards for file operations** — Strong demand for **pre-edit backups, diff previews, and binary-file awareness** to avoid silent corruption (as highlighted by #2591/#2595).
3. **Performance & responsiveness** — Persistent requests for **faster startup, incremental indexing, and persistent background daemon**.
4. **Local-first operation** — Growing group of users requesting **full local mode** with a light model (e.g., via Ollama) for low-sensitivity tasks, while retaining Cloud mode for complex refactors.
5. **Configurable reasoning depth** — Users want **“turbo” vs. “deep” modes** to trade-off CoT token cost vs. task difficulty, particularly for CI pipelines.

---

## Developer Pain Points
- **K2.6 token burn-rate vs. subscription value** — At 100 tokens/s, the 2-hour quota feels like a “few questions,” leading to a perception that the premium plan is **unpredictable and under-provisioned**.
- **Silent file corruption risk in editing tools** — “Errors=replace” is considered a **footgun**; the community strongly prefers **fail-loud** behavior over data loss (see #2595 support).
- **Windows support inconsistency** — Repeated friction with path handling, permissions, and line-ending transformations. Windows developers are a vocal minority; unresolved issues affect **adoption within mixed-OS enterprises**.
- **Lack of pre-fix diff/undo** — Once a file is edited and written back, there is **no built-in rollback** for AI-originated modifications. Users manually back up files before invoking CLI (workaround seen in several issues).
- **CoT pollution of version control** — When the CLI writes reasoning text into comments or commit messages, diffs become noisy. Requests to **exclude reasoning from generated commits** have been repeated.
- **Unclear exit codes in automation** — CI scripts cannot reliably distinguish “success with warnings” from “failure,” forcing wrapper logic. This is a recurring pain for MLOps/DevOps use-cases.

---

*Digest generated from MoonshotAI/kimi-cli activity as of 2026-08-25. For detailed updates, monitor the GitHub repository directly.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-25

## Today's Highlights

OpenCode v1.18.22 ships with several targeted bugfixes, including removal of outdated Go pricing messaging, improved device login handling for relative URLs and base paths, and a compatibility fix for `textVerbosity` sent to OpenAI-compatible providers. The community's attention is split between ongoing TUI sidebar issues (modified files not rendering) and a cluster of reports about Ox Alpha Free model endpoint failures. On the development front, the v2 branch shows heavy activity around persistent PTY service support and browser automation tooling.

## Releases

**v1.18.22** — Bugfix release focused on core improvements:
- Removed outdated OpenCode Go first-month discount messaging and pricing
- Fixed device login links when servers return relative verification URLs or use a base path
- Fixed `textVerbosity` being sent to OpenAI-compatible providers that do not support it

No other releases were published in the last 24 hours.

## Hot Issues

1. **[#30877 — TUI sidebar "Modified Files" section completely hidden](https://github.com/anomalyco/opencode/issues/30877)** (11 comments, 14 👍) — A long-standing regression since v1.16.0 where the modified files section doesn't render at all. This is one of several related reports (#17797, #32852, #34620) pointing to a broader "session diff" regression across the TUI.

2. **[#4489 — Ephemeral one-off sessions for opencode run](https://github.com/anomalyco/opencode/issues/4489)** (14 comments, 15 👍) — Closed feature request to support non-persisted sessions in `opencode run`. High community interest; the author volunteered to implement it.

3. **[#43619 — subagent requires sessionID preventing first child session](https://github.com/anomalyco/opencode/issues/43619)** (10 comments) — Critical v2 blocker: the `subagent` tool schema requires `sessionID` but docs say to omit it for new sessions, preventing all delegation workflows.

4. **[#44300 — Ox Alpha Free endpoint unavailable for tools requests](https://github.com/anomalyco/opencode/issues/44300)** (7 comments) — Any request containing a `tools` array fails with "Endpoint is unavailable" for the Ox Alpha free model. Related reports (#44332, #44750) confirm widespread breakage since 2026-08-23.

5. **[#6310 — Sessions unusable due to large LSP diagnostics](https://github.com/anomalyco/opencode/issues/6310)** (9 comments) — Edit/write tools store full LSP diagnostics in metadata, causing severe slowdowns in Lua projects with workspace-scale diagnostics. Closed, but a good template for similar perf issues.

6. **[#37823 — GitHub Action fails on repos with new OIDC sub format](https://github.com/anomalyco/opencode/issues/37823)** (6 comments, 11 👍) — Actions fail on repos created after 2026-07-15 with `p.rest` parsing error. Affects multiple users; closed but regressions may resurface (#33060 is a duplicate).

7. **[#44798 — Context limit hit mid-task with no continuation handoff](https://github.com/anomalyco/opencode/issues/44798)** — v2 core issue: agents refuse multi-step work when the context window is nearly full, with no automatic compaction or continuation strategy.

8. **[#44812 — cli.json lacks JSON schema declaration](https://github.com/anomalyco/opencode/issues/44812)** — Minor but developer-friendly request: `cli.json` has no schema, so editors can't validate or autocomplete CLI settings.

9. **[#38986 — SIGILL crash on AMD Ryzen Zen 3 (no AVX-512)](https://github.com/anomalyco/opencode/issues/38986)** — OpenCode Desktop crashes with Illegal Instruction on AMD Zen 3 CPUs; the packaged binary contains AVX-512 instructions the CPU doesn't support.

10. **[#44821 — OAuth transform treats Codex budget as endpoint context limit](https://github.com/anomalyco/opencode/issues/44821)** — ChatGPT OAuth incorrectly uses Codex product budget metadata as the endpoint's physical limit, triggering premature compaction hundreds of thousands of tokens early.

## Key PR Progress

1. **[#44834 / #44832 / #44831 — Persistent PTY service support](https://github.com/anomalyco/opencode/pulls/44834)** — A coordinated set of three PRs from jlongster embedding the `opencode-pty` daemon into executables (with SHA-256 checksums), adding a database-scoped authenticated client with terminal lifecycle/snapshots/replay, and introducing persistent terminal group schemas and KV-backed persistence.

2. **[#44815 — Mermaid diagram styling refinements](https://github.com/anomalyco/opencode/pull/44815)** — Contributor PR adding component-level colors and a coherent visual hierarchy for Mermaid flowcharts and state diagrams.

3. **[#44835 — Remove unused Drizzle migration framework](https://github.com/anomalyco/opencode/pull/44835)** — Housekeeping: removes the unused `EffectDrizzleSqlite.migrate` export and standalone migrator; production relies solely on `DatabaseMigration.apply`.

4. **[#44829 — TUI: refresh directory after /move](https://github.com/anomalyco/opencode/pull/44829)** — One-line fix (v2) closing #43938, where the directory indicator stays stale until activity starts after `/move`.

5. **[#44828 — Route non-native Cloudflare AI Gateway providers via REST API](https://github.com/anomalyco/opencode/pull/44828)** — Fixes #44827: Google, xAI, Alibaba, DeepSeek, and Moonshot models on `cloudflare-ai-gateway` failed with "Invalid provider"; now routes them through the REST API.

6. **[#44796 — Restore TUI sidebar modified-files diff](https://github.com/anomalyco/opencode/pull/44796)** — Directly addresses the most-voted TUI regression (#30877): PR #30127 changed `Session.diff` to return `[]`; this restores the diff feed.

7. **[#44826 — Keep prompt editor inert during IME composition](https://github.com/anomalyco/opencode/pull/44826)** — Re-submission of the Safari IME composition fix (supersedes #38728), rebased with unrelated changes split out.

8. **[#44830 — Parse partial tool input](https://github.com/anomalyco/opencode/pull/44830)** — Exposes cumulative best-effort parsed input on native tool input deltas while retaining strict final tool-call parsing; 274 focused AI test additions.

9. **[#44683 — Queue and steer follow-up prompts](https://github.com/anomalyco/opencode/pull/44683)** — Implements the Figma queue/steer follow-up workflow (1694:125783) with configurable follow-up delivery and a durable inbox operation for correct reordering.

10. **[#44757 — Enable LSP tool by default](https://github.com/anomalyco/opencode/pull/44757)** — Removes the `flags.experimentalLspTool` guard so `tool.lsp` is always registered; closing #44759.

## Feature Request Trends

- **Ephemeral/one-off sessions** — `opencode run` should support sessions that don't persist to the session store (#4489).
- **Non-x86 architecture support** — AARCH32/ARM32 support requested (#44783).
- **Persistent terminal groups / PTY daemon** — Multi-PR initiative adding a persistent terminal service with replay and controller takeover (#44831–#44834).
- **Browser automation SDK** — Full browser host SDK and server-side browser tools for OpenCode (#39277, #39270).
- **Context-window-aware task planning** — Session hitting context limits mid-task with no continuation handoff (#44798) — closely related to #44821 (early compaction due to budget misinterpretation).

## Developer Pain Points

- **TUI session diff regressions** — The single most-voted issue cluster: modified files no longer displayed since v1.16.0 (#30877, #17797, #32852, #34620), spanning months of releases. Community frustration is high.
- **Ox Alpha Free model instability** — Multiple reports of "Endpoint is unavailable" failures with the free tier, particularly for requests with tools (#44300, #44332, #44750). Users are requesting refunds as a result (#44775).
- **GitHub Actions OIDC sub format regression** — Repos created after 2026-07-15 break with opaque `p.rest` errors (#37823, #33060).
- **Provider compatibility issues** — A recurring theme across Amazon Bedrock (Grok 4.6 redactedContent), Cloudflare AI Gateway (dotted IDs → dashed slugs, invalid provider routing), and DeepSeek API key issues (#43824, #44280, #44827, #44577).
- **IME composition breakage** — Both Safari and v2 prompt input have IME issues (#39632, #38728), affecting CJK users.
- **CPU-specific crashes** — SIGILL on AMD Zen 3 due to AVX-512 in packaged binaries (#38986).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-25

## Today's Highlights

The 0.84.3 release introduces a native PowerShell tool and safer managed updates with staged verification, while the day's merged PRs close several significant bugs including stalled provider streams, Gemini thought signature loss, and per-model compaction profiles. Windows usability remains the dominant community concern, with broad engagement around the long-running Windows usage survey while over a dozen Windows-specific issues were resolved or clarified today.

## Releases

**v0.84.3** — Includes a new optional **PowerShell tool** for native Windows command execution and **safer managed updates** that stage, verify, and atomically activate new versions. [Release](https://github.com/earendil-works/pi/releases/tag/v0.84.3)

---

## Hot Issues

1. **[Windows usage survey](https://github.com/earendil-works/pi/issues/7547)** — *petrroll* — 44 comments, 2 👍. The search for Windows support direction continues as the top community discussion. Given the breadth of questions and engagement, it's clear Windows is both a major audience and a source of fragmentation. Expect significant Windows improvements fueled by this thread.

2. **[Auto-compaction never triggers before provider overflow](https://github.com/earendil-works/pi/issues/6879)** — *alexanderkreidich* — 22 comments, 19 👍. The most-upvoted active issue: a 2-hour agentic turn climbed past 100% context on GPT-5.6 until the provider rejected at 373k tokens. The community's highest-priority correctness concern; merged per-model compaction profiles may land as a partial fix.

3. **[Default model with llama.cpp shows "No models available"](https://github.com/earendil-works/pi/issues/6922)** — *highlyunavailable* — 11 comments, 14 👍. Closed today. High engagement for a config issue — llama.cpp startup behavior confused even experienced users.

4. **[Cannot pick a model with built-in llama.cpp support](https://github.com/earendil-works/pi/issues/8167)** — *SteelPh0enix* — 11 comments. Closed, with fixes to surface unloaded presets and show them when autoload is enabled. Another sign of the local-modeling community's need for smoother llama.cpp integration.

5. **[WebSocket retry only handles two error codes](https://github.com/earendil-works/pi/issues/7444)** — *lkraider* — 9 comments. Hard-stop on transient Codex errors is a correctness gap for OpenRouter/Copilot/gateway users — worth watching for a fix after the idle-timeout and abort-path work landed today.

6. **[Gemini 3.x tool use fails on missing `thought_signature`](https://github.com/earendil-works/pi/issues/6996)** — *Dulani* — 6 comments, 0 👍. Updated today, likely since a fix was merged. Gateways (OpenRouter, GitHub Copilot) that route Gemini through OpenAI-compatible endpoints were losing the signature; tool-calling failures there are now addressed.

7. **[Custom message mid-tool-batch breaks DeepSeek tool adjacency](https://github.com/earendil-works/pi/issues/8166)** — *CarloCattano* — 7 comments. Extension-injected messages destabilize subsequent turns on DeepSeek with a hard 400. This is an edge case that likely affects other strict providers; the community is waiting on a maintainer response.

8. **[Per-model compaction settings](https://github.com/earendil-works/pi/issues/8133)** — *Blue-B* — 4 comments, 3 👍. Quick adoption: the proposal for `compaction.profiles` in settings.json was implemented and merged within a day. Cross-model sessions were compacting too aggressively on large-context models.

9. **[Provider stream stall hangs agent loop forever](https://github.com/earendil-works/pi/issues/8331)** — *panbergco* — 3 comments. During the Anthropic 529 overload, four sessions froze mid-turn with no SSE events and no close. The idle-timeout PR merged today directly addresses this; users running long sessions should upgrade.

10. **[Aborted turns report `stopReason: "error"` instead of `"aborted"`](https://github.com/earendil-works/pi/issues/8409)** — *Mallikarjun-0* — 4 comments. Subtle regression in 0.84.2 — abort timing determines whether the turn reports correctly. Relevant to wrapper scripts that interpret stop reasons semantically.

---

## Key PR Progress

1. **[End stalled provider streams via idle timeout](https://github.com/earendil-works/pi/pull/8593)** — *nitishagar* — Merged. Byte-level idle monitoring ends zombie SSE streams from outages like the Anthropic 529 event, unblocking queued follow-ups.

2. **[Add per-model compaction profiles](https://github.com/earendil-works/pi/pull/8592)** — *nitishagar* — Merged. Compaction `reserveTokens` can now vary by model, addressing the 200K/1M context-tuning dilemma.

3. **[Round-trip Gemini `thought_signature` via OpenAI-completions](https://github.com/earendil-works/pi/pull/8590)** — *nitishagar* — Merged. Preserves `extra_content.google.thought_signature` across OpenAI-compatible endpoints where it was being dropped.

4. **[Abort OpenAI streams immediately when signal fires](https://github.com/earendil-works/pi/pull/8585)** — *danscofield* — Merged. Fixes the abort-path gap where OpenAI streams ignored the signal mid-body-read, unlike the Anthropic path.

5. **[Show llama presets if autoload enabled](https://github.com/earendil-works/pi/pull/8558)** — *cristinaponcela* — Merged. Model picker now shows llama.cpp presets when they can be autoloaded. Follow-up: the [presets-exposure fix](https://github.com/earendil-works/pi/pull/8479) from *KaelWD* (merged) surfaces unloaded presets.

6. **[Surface + bound torn-append replay loss in session JSONL](https://github.com/earendil-works/pi/pull/8575)** — *simonckemper* — Merged. Silently skipped lines were losing two replay entries apiece; now there's a signal and a bound to stop compounding data loss.

7. **[Drop extra vertical padding on tool rows](https://github.com/earendil-works/pi/pull/8580)** — *vincelwt* — Merged. Removes 2–3 empty lines of overhead per tool call — a direct transcript-density win for long sessions.

8. **[Add optional PowerShell tool](https://github.com/earendil-works/pi/pull/8512)** — *mitsuhiko* — Merged. Native Windows shell support heading off the path-handling mess on Windows; a major quality-of-life signal for the Windows effort.

9. **[Preserve Codex thread affinity headers](https://github.com/earendil-works/pi/pull/8570)** — *valkyriweb* — Merged. Adds `thread-id` to sent headers, matching the upstream Codex client for better context reuse on OpenAI.

10. **[Attach clipboard images as atomic markers](https://github.com/earendil-works/pi/pull/8559)** — *Panoplos* — Open. Pasted images would show inline as an attachment marker in the editor rather than leaking temp paths into prompts. Clean UX touch.

---

## Feature Request Trends

- **Windows parity** remains the most demanded area; the survey(s) and new PowerShell tool reflect a push to define and improve first-class Windows support.
- **Model-catalog freshness** is a recurring theme — DeepSeek vision, peak/off-peak pricing, and SiliconFlow/Eden AI/Merge Gateway provider requests all cluster here.
- **Per-model behavior tuning** (compaction profiles, selection policies) is gaining momentum as users run more heterogeneous model mixes.
- **Session portability** — worktrees, `pi preset` export/import of agent configs, and portable presets are early signals of a "shareable/reproducible agent" direction.
- **LLM-frontier UX surface** — Mermaid rendering upgrades, better tool shells, and extension-tool schema deferral all appeal to the heavy-agent user base.

---

## Developer Pain Points

- **Windows is still messy** — git-bash vs PowerShell vs path handling; the maintainer explicitly noted giving up on git bash and is pushing the PowerShell tool.
- **Compaction is fragile** — auto-compaction not triggering, truncated summaries on token caps, per-model tuning; compaction bugs make up a large share of correctness fixes this week.
- **Stalled/aborted streams are silent failures** — timeout hangs, missed abort signals, and non-retryable transient errors all froze user sessions this week. The merged fixes target exactly this.
- **Local-model (llama.cpp/llama-server) config friction** — not seeing preset models, interactive 5.1 vs `-p` pwsh divergence, and model-picker visibility gaps keep recurring.
- **Gateways/OpenAI-compat edge cases dominate AI-layer bugs** — `thought_signature` loss, WebSocket retry gaps, and tool-adjacency strictness all come from the same integration pattern.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-25

## Today's Highlights
The project continues its rapid release cadence with the `v0.22.0-nightly.20260825` build, alongside significant momentum in MCP server reliability—including a dedicated fix for HTTP transport reconnection failures (#9962) and a reported bug with stale sessions (#9944). The community is also actively shaping the agent architecture, with discussions on explicit Config ownership (#8083) and the evolution of Computer Use toward a persistent Node REPL + SDK model (#9336), plus multiple CI/CD enhancements around sandbox image handling and workflow hardening.

## Releases
**v0.22.0-nightly.20260825.22bb5e8b9f** — Nightly release with a single fix:
- **fix(web-shell)**: pass session workspace cwd when opening from overview panel ([PR #9730](https://github.com/QwenLM/qwen-code/pull/9730)) by @wenshao

Additional binary artifacts were attached:
- **cua-driver-rs v0.20.0**: prebuilt Qwen CUA Driver binaries (macOS universal signed/notarized, Linux/Windows unsigned x86_64+arm64)

## Hot Issues

1. **[#5975 — API Error: No stream activity for 120000ms after 19 chunks](https://github.com/QwenLM/qwen-code/issues/5975)** — A long-standing P2 bug (opened June, still open) plaguing v0.19.3: streams frequently stall after "Thought for 2s" with no output, triggering timeouts. High community engagement with 12 comments; marked `welcome-pr`.

2. **[#9944 — MCP reconnect reports success but tools remain unavailable](https://github.com/QwenLM/qwen-code/issues/9944)** — Critical HTTP-transport MCP bug: after a server restart (which issues a new `mcp-session-id`), `qwen mcp reconnect --all` claims success while tool calls fail with "Tool not found". Directly addressed by open PR #9962. High recent attention.

3. **[#9005 — Anthropic wire lacks stream-safety protections](https://github.com/QwenLM/qwen-code/issues/9005)** — P1 gap: the OpenAI/gemini generation path has stream-safety safeguards, but `anthropicContentGenerator` is missing them. Companion issue also flags the pinned `@anthropic-ai/sdk` `^0.36.1` (Jan 2025) as outdated. Raises reliability concerns for Anthropic-powered setups.

4. **[#8083 — Design: make derived Config context ownership explicit](https://github.com/QwenLM/qwen-code/issues/8083)** — In-progress architectural enhancement tackling the ad hoc `Object.create(base)` overrides used for subagents, scoped memory agents, and approval-mode configs that lead to fragile state. Significant for maintainability.

5. **[#9026 — NO_TOOL_RESULT_PROGRESS hard-fails headless runs](https://github.com/QwenLM/qwen-code/issues/9026)** — P2 closed bug: headless runs abort with `InvalidStreamError` when a model ends a turn quietly after a tool result. A sharp edge for CI/automation users.

6. **[#9942 — Hide skill commands from top-level slash completion](https://github.com/QwenLM/qwen-code/issues/9942)** — P3 feature request gaining traction: with many skills installed, `/` completion becomes crowded, burying built-in commands. Suggests a cleaner two-tier discovery.

7. **[#9927 — Artifact updatedAt stays stale; write_file intermediates linger as missing](https://github.com/QwenLM/qwen-code/issues/9927)** — P2 bug affecting Web Shell artifact tracking: `updatedAt` only moves on registration changes, not content edits, and intermediate files appear missing. Problematic for artifact-reliant workflows.

8. **[#6094 — qqbot: Cron/blockStreaming interaction issues + botOpenId instruction timing](https://github.com/QwenLM/qwen-code/issues/6094)** — Follow-up from PR #5902 review: `blockStreaming: 'on'` causes duplicate messages and `streamState` never populates in cron handling. Core session-management issue for channel integrations.

9. **[#9966 — VP mode renders one row over height budget with ctrl-s hint](https://github.com/QwenLM/qwen-code/issues/9966)** — P2 UI regression: the history region in VP (useTerminalBuffer) overflows by a row when the "Press ctrl-s" hint shows, spawning a full Ink repaint (flicker risk). Ties into the broader TUI stability discussion.

10. **[#8965 — Settings schema rejects output.format "stream-json"](https://github.com/QwenLM/qwen-code/issues/8965)** — Closed P2 config gap: VS Code companion's schema rejects a runtime-honored value. Representative of schema-rot issues between the IDE companion and the CLI runtime.

## Key PR Progress

1. **[#9962 — fix(mcp): recover restarted HTTP MCP servers in-session and in CLI](https://github.com/QwenLM/qwen-code/pull/9962)** — Directly addresses #9944: stacks four defects in MCP reconnection, and tool calls that fail now repair the session in-place. A top-priority reliability fix.

2. **[#9659 — feat(review): content-anchored incremental rounds](https://github.com/QwenLM/qwen-code/pull/9659)** — Reland of a heavily-reviewed (#9190, 20 reviews, 166 comments) change: review-fix rounds anchor to content, not line numbers, surviving rebases. Part 1 of 2; big workflow win for `/review`.

3. **[#9844 — fix(telemetry): restore usage aggregate when a session swap fails](https://github.com/QwenLM/qwen-code/pull/9844)** — Stops telemetry double-replays and corruption when `/resume` or `/branch` fails mid-initialization. Subtle but critical for accurate usage tracking.

4. **[#9862 — fix(acp): route-scope the session token-limit cache](https://github.com/QwenLM/qwen-code/pull/9862)** — A model switch could trip the session-token-limit gate with a stale count from the prior route. Cache now invalidates on route change. Closes a multi-issue follow-up (#9564).

5. **[#9841 — fix(cli): keep Windows paths literal in the daemon worktree guard](https://github.com/QwenLM/qwen-code/pull/9841)** — Windows paths like `C:\Users\me\repo` were parsed with POSIX escape rules, collapsing backslashes. Important portability fix for Windows daemon users.

6. **[#9723 — feat(review): run reviewed repo's own commands behind a container](https://github.com/QwenLM/qwen-code/pull/9723)** — Puts review-time execution behind a container boundary as operator policy. Significant security hardening for `/review`; policy-driven.

7. **[#9638 — fix(cli): deliver teammate messages at tool-round boundaries](https://github.com/QwenLM/qwen-code/pull/9638)** — Teammate→leader messages now arrive at tool-round boundaries instead of task end, making Agent Team interactions far more responsive. Directly ties to #9510's shutdown-channel overload.

8. **[#9771 — feat(autofix): keep the round status comment live during long rounds](https://github.com/QwenLM/qwen-code/pull/9771)** — Health-check UX for long autofix rounds: the PR status comment now gets heartbeat updates, so a working round no longer looks identical to a dead one.

9. **[#9723 — feat(review): run the reviewed repository's own commands behind a container](https://github.com/QwenLM/qwen-code/pull/9723)** — Review now executes a repository's own tooling inside a container boundary, making this an operator-set policy. Strong security posture improvement for `/review`.

10. **[#9838 — feat(daemon): Support current-session scheduled tasks](https://github.com/QwenLM/qwen-code/pull/9838)** — Enables scheduled tasks tied to the current session, extending the daemon's scope beyond global/ambient tasks. Broadens automation capabilities.

## Feature Request Trends

1. **MCP reliability and resilience** — Reconnection issues (#9944), in-session repairs (#9962), collapsed MCP tool results (#9934). A clear demand for production-grade MCP stability.

2. **Terminal UX modernization** — A proposal to migrate from ink to OpenTUI (#8662) for flicker-free rendering and first-class mouse support, alongside ongoing VP-mode rendering bugs (#9966). Users want a cleaner, smoother interactive experience.

3. **Better AI-agent execution control** — More explicit Config ownership (#8083), exposing agent execution modes (#9955), bounded session lifetimes via `sessionRotation` (#8927). The community wants finer-grained control over agent behavior.

4. **External context/memory providers** — Growing interest in pluggable memory: open-source Mem0 protocol support (#9951, #9964). Users want to bring their own memory backends.

5. **Cleaner slash-command UX** — Hiding skill commands from top-level `/` completion (#9942) as skills proliferate. A discoverability-ergonomics request.

6. **Computer Use evolution** — A clear 3-phase roadmap (#9336) to migrate from atomic model-visible tools to a persistent Node REPL + SDK + Skill architecture. Strong demand for powerful, manageable computer-use agents.

## Developer Pain Points

- **Stream reliability**: Repeated timeouts and stalled streams (#5975), plus missing safeguards on the Anthropic wire (#9005), erode trust in long-running agent sessions.
- **MCP server restart fragility**: HTTP-transport MCP servers that restart become unusable even though reconnect reports success (#9944); the fix (#9962) cannot land fast enough.
- **Headless/CI edge cases**: `NO_TOOL_RESULT_PROGRESS` hard-failing runs (#9026) and "quiet turn" detection treat legitimate model behavior as fatal, hampering automation.
- **Artifact/session state drift**: Stale `updatedAt` and missing file states (#9927), plus cross-session debug-log contamination (#9534), complicate debugging and artifact-heavy workflows.
- **Windows-specific pain**: Path parsing and daemon guard issues (#9841) are a recurring theme; every candidate release brings Windows-specific regressions or fixes.
- **Configuration/schema rot**: The settings schema routinely rejects values the runtime honors (#8965) — an ongoing source of user-facing "works but schema says no" friction.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-25

## Today's Highlights

The project is mid-cycle on **v0.9.12**, with release-blocker tracking issue #5573 coordinating 72+ commits across an integration branch. Notable activity includes a major **provider neutrality audit** (18 DeepSeek-exclusive gates identified for de-gating), a **supervised operation stack** (control socket, lifecycle outbox, /relaunch) landing in parts, and several **TUI UX enhancements** (cursor accent, fleet editing, context cost inspector) reaching PR stage. Multiple critical bugs were also filed around turn-owned subagent cancellation and read-only inspection child failures.

---

## Releases

No new releases in the last 24 hours. The project is actively preparing **v0.9.12**, tracked in issue #5573 with P0 must-fix items still in progress.

---

## Hot Issues (10 selected)

### 1. [#5588 — Provider neutrality: 18 DeepSeek-exclusive gates](https://github.com/Hmbown/CodeWhale/issues/5588)
Full audit of all production `deepseek` occurrences (2,281 lines / 279 files) found ~380 naming-compat lines and **18 suspect gates** where behavior is DeepSeek-gated but conceptually provider-neutral. One fix already landed (NVIDIA NIM env leak). **Why it matters:** Ensures third-party providers get first-class support, not accidental DeepSeek assumptions.

### 2. [#5596 — Turn end silently cancels turn-owned subagents](https://github.com/Hmbown/CodeWhale/issues/5596)
Turn-owned subagents are destroyed when the parent model ends its turn, despite UI claiming background children continue. A long-running reviewer can lose all work without warning. **Why it matters:** Silent data loss undermines trust in autonomous workflows.

### 3. [#5586 — Decompose mega files (lib.rs 18.7k, config.rs 12.3k, etc.)](https://github.com/Hmbown/CodeWhale/issues/5586)
Requests breaking down 10k+ line files. Community consensus: these are a maintenance liability; decomposition is a 0.9.12 cleanup lane.

### 4. [#5595 — Read-only inspection children reject in-workspace git -C](https://github.com/Hmbown/CodeWhale/issues/5595)
A v0.9.11 reviewer child spent **~347k tokens** producing nothing because it couldn't run `git -C <workspace> log`. Model-facing classifier and role gates say allowed, but the final operation check rejects it. **Why it matters:** Expensive failures in autonomous agents are a top pain point.

### 5. [#5589 — Fleet config view: Enter loops back, model switching buried](https://github.com/Hmbown/CodeWhale/issues/5589)
User report with screenshot: pressing Enter on fleet roles appears to do nothing (loops to same screen). Model switching is unclear. Partial fix (#5604) landed for discoverability.

### 6. [#5605 — Flaky test: remote_control crash recovery under parallel load](https://github.com/Hmbown/CodeWhale/issues/5605)
Reproduced on the 0.9.12 integration branch; not caused by recent code moves. Full-suite parallel load triggers flakiness.

### 7. [#5597 — Detached agents lose post-turn usage from cost totals](https://github.com/Hmbown/CodeWhale/issues/5597)
Usage produced after `TurnComplete` no longer reaches session/turn cost projection. The worker record accumulates its own usage but visibility is lost in the parent session.

### 8. [#5601 — MiniMax/Xiaomi API returns 404 on first config](https://github.com/Hmbown/CodeWhale/issues/5601)
Fresh installs fail when configuring MiniMax or Xiaomi models — suspected hardcoded URL bug. DeepSeek works fine. Community note: forces rollback to 0.6 for CLI configuration.

### 9. [#5585 — Test dies by stack overflow](https://github.com/Hmbown/CodeWhale/issues/5585)
`setup_confirm_toast_names_secret_store_and_global_scope` SIGABRTs with stack overflow on both main and integration branch. Pre-existing, not introduced by 0.9.12 cycle.

### 10. [#5573 — v0.9.12 milestone tracker (start here)](https://github.com/Hmbown/CodeWhale/issues/5573)
Central onboarding point for the release cycle. P0 must-fixes include money/safety items (#5566) and CI reliability fixes. **Why it matters:** The canonical "what's shipping" reference.

---

## Key PR Progress (10 selected)

### 1. [#5594 — Control socket (final part)](https://github.com/Hmbown/CodeWhale/pull/5594)
Opt-in Unix-only newline-framed JSON-RPC socket per session (`[control_socket] enabled = true`). Enables supervised/automated operation of interactive TUI sessions.

### 2. [#5593 — /relaunch command](https://github.com/Hmbown/CodeWhale/pull/5593)
Adds self-relaunch so `/update` installations take effect in one step without manual restart. Persists session state like `/exit`.

### 3. [#5592 — Lifecycle outbox](https://github.com/Hmbown/CodeWhale/pull/5592)
Opt-in `[lifecycle_outbox]` config writing JSONL per lifecycle event (turn_start, subagent_spawn, session_end, etc.) for TUI and headless exec. No shell hooks needed.

### 4. [#5606 — 0.9.12 relay integration (merged)](https://github.com/Hmbown/CodeWhale/pull/5606)
Unifies managed Chat with native runtime threads. Includes turn_operation_idempotency, R2 approval fix (MCP tools reviewed as kinds), and `doctor --fix` with consent.

### 5. [#5576 — 0.9.12 integration branch (WIP)](https://github.com/Hmbown/CodeWhale/pull/5576)
72 commits, gated and code-complete for release blockers. Not to merge until version bump and changelog/RC gates are green.

### 6. [#5602 — Fix Windows output decoding](https://github.com/Hmbown/CodeWhale/pull/5602)
Preserves UTF-8 and Windows ANSI code-page chars split across reads; uses Windows ACP only after strict UTF-8 fails. Keeps sync/bounded/raw-delta paths consistent.

### 7. [#5604 — Fleet roster editing discoverability](https://github.com/Hmbown/CodeWhale/pull/5604)
Selected fleet members show explicit `[edit]` affordance, footer advertises `m model`, and `m` opens the exact fleet detail editor.

### 8. [#5603 — Tool and MCP schema cost display](https://github.com/Hmbown/CodeWhale/pull/5603)
Context inspector now shows bounded schema-cost estimates: catalog total, per-built-in-tool rows sorted by estimated token cost, with omitted-count summary for large catalogs.

### 9. [#5599 — Capability-gated cursor accent (merged)](https://github.com/Hmbown/CodeWhale/pull/5599)
OSC 12 accent only on recognized-capable terminals; uses theme accent color when RGB; respects reduced-motion/plain-terminal modes.

### 10. [#5584 — Persist child approval receipts](https://github.com/Hmbown/CodeWhale/pull/5584)
Fixes #5543: child approval prompts now commit durable `Asked` evidence before exposing prompts and terminal outcomes before closing, instead of in-memory-only decisions.

---

## Feature Request Trends

1. **Supervised/Automated Operation** — The most active direction: control socket JSON-RPC, lifecycle outbox, /relaunch, and goal-continuation cadence fixes all target machine-readable supervision of long-lived sessions.

2. **Provider Neutrality** — Systematic de-gating of DeepSeek-specific behavior (issue #5588) plus bug reports for MiniMax/Xiaomi (issues #1482, #5601) show demand for first-class multi-provider support.

3. **Authentication Expansion** — OAuth 2.1 support for MCP servers (issue #1409) requested; current API-key-only model limits production MCP usage.

4. **TUI UX Polish** — Focused-block copy actions (#5551), fleet editing discoverability (#5589), cursor accent (#5554), and per-tool cost visibility (#5553) point to a maturity push on the terminal interface.

5. **Cross-Session Memory** — Issue #2492 requests persistent session memory across restarts, though community notes response speed is already a strength.

---

## Developer Pain Points

1. **Silent Agent Failures are Expensive** — Subagent cancellation (#5596) and git command rejection (#5595) cost 347k+ tokens of wasted work with no visible warning. Reliability of autonomous children is the top concern.

2. **Mega-File Maintenance Burden** — The 18.7k-line `lib.rs` and 12.3k-line `config.rs` keep causing pain; decomposition is scheduled but not complete.

3. **CI/Test Flakiness** — Windows workspace tests don't run for non-mirrored PR branches (#5547), parallel-load flaky tests (#5605), and the stack overflow test failure (#5585) erode confidence in the test suite.

4. **Release Process Friction** — External publishing gates (crates.io 403, npm Trusted Publisher E404) documented in #5565 show the release chain is still fragile.

5. **Fresh-Install Configuration Failures** — MiniMax and Xiaomi URL issues (#5601) force users to roll back to older versions, a steep onboarding tax for non-DeepSeek providers.

6. **Cache/Performance Inconsistencies** — Anthropic-dialect routes skip cache_control entirely (#5570) and prefix continuity between turns isn't asserted (#5571), silently degrading performance for non-DeepSeek paths.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*