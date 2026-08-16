# AI CLI Tools Community Digest 2026-08-16

> Generated: 2026-08-16 01:23 UTC | Tools covered: 9

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

# AI CLI Tools Cross-Tool Comparison Report
**Date:** 2026-08-16

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape is in a period of rapid feature expansion tempered by reliability concerns. Across seven major tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI), communities are reporting similar pain points: storage bloat, session corruption, authentication regressions, and platform-specific instability. While each tool maintains distinct architectural philosophies—from Claude Code's hook-based guardrails to Codex's Rust rewrite and Pi's extension ecosystem—the shared challenges of long-running agentic workflows, context management, and cross-platform desktop stability dominate community discourse. The ecosystem is clearly transitioning from "demo-ware" to production-grade tooling, with users demanding enterprise-level reliability, transparent billing, and predictable resource consumption.

---

## 2. Activity Comparison

| Tool | Issues (Hot/Active) | PRs (24h) | Release Status |
|---|---|---|---|
| **Claude Code** | 10 tracked (346👍 max) | 3 (none core) | No release in 24h; v2.1.233 latest |
| **OpenAI Codex** | 10 tracked (85👍 max) | 10 merged | 2 Rust alphas (v0.148.0-alpha.19/20) |
| **Gemini CLI** | 10 tracked (P1/P2 mix) | 10 active (2 security P1) | Nightly v0.56.0 (daily cadence) |
| **GitHub Copilot CLI** | 10 tracked (9👍 max) | 2 active | No release; v1.0.80 latest (regressions reported) |
| **Kimi Code CLI** | 4 updated (40 comments max) | 2 active | No release |
| **OpenCode** | 10 tracked (31👍 max) | 10 merged/closed | No release; v1.18.18 stable; 2.0 in dev |
| **Pi** | 10 tracked (17👍 max) | 10 (2 open, 8 closed) | No release |
| **Qwen Code** | 10 tracked (P1 security) | 10 active | 2 preview/nightly releases |
| **DeepSeek TUI** | 10 tracked (17 comments max) | 10 (6 open, 4 closed) | v0.9.8 in progress (no tag) |

**Key observations:** Codex and Qwen Code show the highest PR velocity with substantial merged infrastructure work. Gemini CLI maintains a nightly cadence. Claude Code is unusually quiet—no core PRs in 24h despite multiple regressions. Copilot CLI is between releases but actively triaging.

---

## 3. Shared Feature Directions

| Direction | Tools | Specific Needs |
|---|---|---|
| **Session Continuity & Resume** | Claude Code (#13354, #87023), Codex (#35746), Gemini (#22323), Copilot (#4493), Kimi (#1283), Pi (#6879) | Graceful continuation past limits, reliable pagination, no dropped records, persistent memory across sessions |
| **Storage/Disk Hygiene** | Claude Code (#77898), Codex (#25921, #35470, #30779), OpenCode (#33356), Pi (#8028) | Compaction/GC policies, crashpad dump caps, DB table pruning, sandbox image management |
| **Multi-Account/Workspace Scoping** | Claude Code (#27302), Codex (#3550), OpenCode (#24879), Copilot (#4491) | Connector multi-account support, project-scoped sessions, per-session budgets, approval gates |
| **Hook/Extension Robustness** | Claude Code (#78527, #77212), Copilot (#4421), Pi (#8166), Gemini (#28825) | PreToolUse denies not killing turns, MCP handshake retries, extension isolation, no silent config changes |
| **Cross-Platform Desktop Stability** | Claude Code (#80444, #85199), Codex (#38546, #38719), DeepSeek (#5403) | GPU-process crash fixes, cursor stutter elimination, macOS kernel panic prevention, WSL support |
| **Provider Parity & Transparency** | Gemini (#28828), Copilot (#3565), Pi (#8146), Qwen (#9230), Kimi (#2604) | No silent model downgrades, accurate token accounting, quota transparency, model catalog freshness |
| **Auth/CI Reliability** | Claude Code (#86986), Copilot (#4480, #4490), Gemini (#28679), Qwen (#9089) | Long-lived tokens that work, OAuth fixes (Atlassian), Vertex API key clarity, runner-level isolation |
| **Compaction/Context Budgeting** | Gemini (#25166), Pi (#6879, #8164), OpenCode (#27924), Kimi (#2603) | Quota-aware (not just window-aware) compaction, no infinite loops on failed compression, role integrity after compaction |

---

## 4. Differentiation Analysis

| Tool | Target Users | Technical Approach | Distinctive Focus |
|---|---|---|---|
| **Claude Code** | Enterprise teams, regulated industries | Hook-based guardrails, desktop + CLI, multi-agent fleets | Security/compliance (CVP), hook ecosystem, attribution controls |
| **OpenAI Codex** | Power users, heavy automation | Rust rewrite, MCP hooks, paginated history, `codex doctor` diagnostics | Infrastructure robustness, observability, storage diagnostics |
| **Gemini CLI** | Google Cloud/Vertex users | Fast nightly cadence, evals-first development, browser agent | Security hardening (SSRF), eval infrastructure, subagent transparency |
| **GitHub Copilot CLI** | GitHub-centric teams, MCP-heavy workflows | Tight GitHub integration, ACP protocol, worktree sessions | OAuth/MCP lifecycle, CI automation security, model parity with IDE |
| **Kimi Code CLI** | Cost-sensitive users, 1M-token window models | Lightweight CLI, OpenAI-compatible providers | Quota transparency, memory system, provider edge cases |
| **OpenCode** | OSS community, self-hosters | TypeScript, event-sourcing SQLite, ACP protocol, 2.0 rewrite | Budget controls, sandboxed workspaces (Docker/Incus), mode transitions |
| **Pi** | TUI enthusiasts, extension developers | Cross-platform Go TUI, extension API, multi-provider | Compaction reliability, terminal ergonomics, provider parity |
| **Qwen Code** | Chinese-speaking devs, CI/CD automation | Python, /review pipeline, Web Shell, autofix bots | Code review automation, CI hardening, security posture |
| **DeepSeek TUI** | Chinese-speaking devs, self-hosters | Rust TUI, bwrap sandboxing, third-party provider templates | Localization quality, sandbox flexibility, release hygiene |

---

## 5. Community Momentum & Maturity

**Most Active/Highest Momentum:**
- **OpenAI Codex** — 10 merged PRs in 24h touching health endpoints, storage diagnostics, and hooks. Rapid iteration with strong observability focus.
- **Gemini CLI** — Nightly builds, extensive eval infrastructure, two P1 security fixes refreshed. Maturing quality-assurance posture.
- **Qwen Code** — 10 active PRs covering security (skill redaction), CI resilience, and review pipeline hardening. The `/review` command is becoming a full platform.

**Rapidly Iterating but Collecting Regressions:**
- **Copilot CLI** — Shipping fast (1.0.71 → 1.0.80 in <2 weeks) but accumulating auth regressions and platform breakages. Needs stability pass.
- **Claude Code** — Unusually quiet on code PRs while regressions (hooks, Windows) stack up with no merged fixes. Community trust at risk.

**Stable but Slower:**
- **Kimi Code CLI** — Minimal activity; community signals trust erosion on quotas.
- **DeepSeek TUI** — In v0.9.8 stabilization; CI unblocking exposing hidden failures. Honest "red main" reports suggest healthy introspection.

**Most Mature Architecturally:**
- **Codex** — Paginated history, health endpoints, storage diagnostics, trace propagation. Production-grade infrastructure signals.
- **Pi** — Compaction fixes, provider parity work, extension surface expansion. Deep understanding of long-running agentic workloads.

---

## 6. Trend Signals

1. **Storage/Disk Management is the New Frontier** — Across five+ tools, users report runaway disk consumption (Codex 5GB/day Crashpad dumps, OpenCode 13GB SQLite, Pi 400GiB image copies). Tools that ship built-in GC, caps, and diagnostics (like `codex doctor`) will gain trust. **Developers should monitor per-session storage footprints and demand retention policies.**

2. **Compaction/Context is the Insufficient-Abstraction Problem** — The gap between model context windows (1M tokens) and real-world subscription quotas is creating "compaction never fires" bugs (Pi, Kimi, Gemini). Expect quota-aware compaction, not window-aware, to become the standard. **Budget for token waste in long-running agents.**

3. **Desktop Apps are Undermining Trust** — Windows cursor stutter (Codex), GPU-process crashes (Claude), macOS kernel panics (Codex) — desktop shells are destabilizing host OSes. The market will reward WebView/GPU/Chromium stability. **For daily-driver work, CLI-first may be more reliable than desktop apps.**

4. **Silent Behavior Changes Kill Confidence** — Whether it's Claude Code ignoring `attribution: {commit: ""}`, Gemini silently substituting preview models, Copilot downgrading subagent models, or Kimi reducing quotas without notice — users are actively building instrumentation to detect hidden changes. **Transparency is now a feature. Tools must surface every config override, model substitution, and quota deduction.**

5. **The Review/Automation Pipeline is Becoming a Differentiator** — Qwen's `/review` command and Claude Code's hook-based guardrails show the evolution from "code assistant" to "code review platform." Expect CI-integrated review, PR security gates, and automated audit trails to become table stakes. **Teams should evaluate review-pipeline maturity before adoption.**

6. **Auth is a Recurring Wound** — OAuth provider breakage (Copilot/Atlassian), CVP re-blocking (Claude), opaque 400s on tokens (Claude, Kimi), and SSRF in web-fetch (Gemini) — authentication remains the weakest link across the ecosystem. **Plan for auth fallbacks and pin versions during provider migrations.**

7. **Agent Reliability is the #1 Unaddressed Need** — False "success" signals (Gemini #22323), hangs after task completion (Gemini #25166), deadlocks in subagents (#21409), and cross-session corruption (#35746, #8168) — the community's biggest voiced pain is that agents cannot be trusted for unattended operation. **This is the area with the most headroom for differentiation.**

---

*Report generated from community digest metadata for 2026-08-16. Data reflects public GitHub issues/PRs and may not capture private/internal development.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

*Data snapshot: 2026-08-16 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The most-discussed Skills submissions, ranked by community attention (comments, reproductions, and cross-references):

### 🥇 skill-creator evaluation overhaul (PR #1298)
**Functionality:** Fixes `run_eval.py` — the evaluation harness backing `run_loop.py` and `improve_description.py` — which was reporting `recall=0%` for every skill description (issue #556 with 10+ independent reproductions). Adds proper eval-artifact installation, Windows stream handling, trigger detection, and parallel workers.  
**Why it matters:** The description-optimization loop was "optimizing against noise," making the entire skill-creator toolchain unreliable.  
**Status:** Open | [PR #1298](https://github.com/anthropics/skills/pull/1298) | Related: [Issue #556](https://github.com/anthropics/skills/issues/556)

### 🥈 docx tracked-changes ID collision fix (PR #541)
**Functionality:** Prevents document corruption when adding tracked changes to DOCX files containing existing bookmarks. Root cause: `w:id` is a shared ID space across bookmarks, tracked changes, comments, and move ranges — the skill's hardcoded low IDs (1, 2, 3) collided with real content.  
**Why it matters:** A correctness bug capable of silently corrupting business documents.  
**Status:** Open | [PR #541](https://github.com/anthropics/skills/pull/541)

### 🥉 pdf skill case-sensitivity fix (PR #538)
**Functionality:** Fixes 8 case-mismatched file references (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`) in `skills/pdf/SKILL.md` — breaking on case-sensitive filesystems.  
**Status:** Open | [PR #538](https://github.com/anthropics/skills/pull/538)

### 4. Document typography skill (PR #514)
**Functionality:** Adds typographic quality control for generated documents: orphan word wrap (1–6 words on a trailing line), widow paragraphs (stranded section headers), and numbering misalignment. These issues affect every multi-page document Claude generates.  
**Status:** Open | [PR #514](https://github.com/anthropics/skills/pull/514)

### 5. ODT / OpenDocument skill (PR #486)
**Functionality:** Creation, template filling, and parse-to-HTML for OpenDocument formats (`.odt`, `.ods`). Triggers on "ODT", "ODS", "ODF", "OpenDocument", "LibreOffice document", or ISO-standard format requests. Fills a notable gap in the document-format portfolio.  
**Status:** Open | [PR #486](https://github.com/anthropics/skills/pull/486)

### 6. Frontend-design skill clarity overhaul (PR #210)
**Functionality:** Revises the frontend-design skill so every instruction is actionable within a single conversation and specific enough to steer behavior without over-constraining. The goal was "internal coherence" — eliminating instructions Claude can't follow.  
**Status:** Open | [PR #210](https://github.com/anthropics/skills/pull/210)

### 7. ServiceNow platform skill (PR #568)
**Functionality:** Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD/CSM, SPM/PPM, Vulnerability Response, Security Incident Response, and IntegrationHub — positioned as a platform skill rather than a narrow scripting helper.  
**Status:** Open | [PR #568](https://github.com/anthropics/skills/pull/568)

### 8. Self-audit skill — mechanical + reasoning quality gate (PR #1367)
**Functionality:** Audits AI output before delivery: **Step 0** mechanically verifies every claimed output file exists; then a four-dimension reasoning audit (damage-severity priority). Universal across projects and tech stacks.  
**Status:** Open | [PR #1367](https://github.com/anthropics/skills/pull/1367)

---

## 2. Community Demand Trends

Distilled from the highest-engagement Issues:

| Demand area | Signal | Evidence |
|---|---|---|
| **Trust & security boundary** | 🔥 Strongest | Issue #492 (43 comments): community skills under `anthropic/` namespace impersonate official skills — a trust-boundary vulnerability. Also #1175 (SPO access-control concerns). |
| **Org-wide skill distribution** | Strong | Issue #228 (16 comments, 8 👍): skills must be shareable within organizations — no `.skill` file Slack round-trips. |
| **Eval/quality tooling reliability** | Strong | Issues #556, #1169 (recall=0% bugs) — evaluators that can't detect triggers undermine the whole skill-creation loop. |
| **Resource/context management** | Moderate | Issue #1487: `claude-api` skill injects ~156k tokens in one call, exhausting context. Issue #189: plugin duplication. |
| **Agent memory & state** | Emerging | Issue #1329: compact-memory skill proposal — symbolic notation for compact agent state. |
| **Governance patterns** | Emerging | Issue #412 (closed, 6 comments): agent-governance — policy enforcement, threat detection, trust scoring, audit trails. |

**Takeaway:** The community's emotional energy is on **trust, distribution, and reliability** — not new feature skills. Evaluation correctness, namespace integrity, and org-level sharing dominate the conversation.

---

## 3. High-Potential Pending Skills

Active PRs likely to merge soon (open, non-trivial comment volume, clear scope):

| PR | Skill | Why it may land |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator eval overhaul | Directly resolves the #556/#1169 bug cluster — high maintainer pressure. |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | Small, well-scoped, universally valuable; no design debates. |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT/OpenDocument | Fills a concrete format gap alongside the existing docx/pdf skills. |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel retro-game dev | MCP-backed, workflow-shaped (write → run → inspect → iterate), from the Pyxel maintainer. |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | Comprehensive testing-stack coverage; low controversy. |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer + skill-security-analyzer | Meta-skills (5-dimension quality analysis, security review) that directly answer the trust concerns in #492. |

**Watch-listed:** [#1367](https://github.com/anthropics/skills/pull/1367) (self-audit) and [#1479](https://github.com/anthropics/skills/pull/1479) (plan-file-hygiene) — both address lifecycle/gating gaps with clear scopes, but face longer review queues.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **trust infrastructure** — verifiable security boundaries, reliable evaluation tooling, and org-safe distribution — before they'll trust new feature skills at scale.

---

# Claude Code Community Digest — 2026-08-16

## Today's Highlights

No new releases landed in the past 24 hours, but the community remains highly engaged — the most popular open feature request (multi-account Connector support, #27302) crossed 346 👍 with 229 comments. Meanwhile, a spate of Windows-specific regression reports (Cowork bash failures, GPU-process crashes) and several hook-behavior regressions in v2.1.210+ signal that recent releases introduced some friction for power users. Notably, a leaked field report (via issue #87023) details multi-agent cross-session memory pain at scale — worth reading for anyone running autonomous fleets.

---

## Releases

None in the last 24 hours. (Latest known: CLI 2.1.233 / Desktop 1.30096.5.0 per issue reports.)

---

## Hot Issues

1. **[#27302 — Support multiple Connector accounts](https://github.com/anthropics/claude-code/issues/27302)** · 346 👍 · 229 comments · *enhancement*
   The top community ask: same connector, different accounts in Claude/Claude Code on the web. Clearly a blocking pain for enterprise teams managing multiple service accounts.

2. **[#84352 — CVP-approved org still gets cyber-safeguard blocks](https://github.com/anthropics/claude-code/issues/84352)** · 19 👍 · 102 comments · *bug*
   A Cyber Verification Program–approved organization is again blocked by cyber-safeguards; the portal shows "Under review" despite prior approval. High comment count suggests wide impact on regulated industries.

3. **[#13354 — Continue when session limit reached](https://github.com/anthropics/claude-code/issues/13354)** · 197 👍 · 78 comments · *enhancement, TUI*
   Long-running sessions hit limits with no graceful continuation path. One of the highest-👍 items; likely tied to paid-tier usage growth.

4. **[#50246 — Message queue mode](https://github.com/anthropics/claude-code/issues/50246)** · 197 👍 · 56 comments · *enhancement, TUI*
   Queue follow-up messages instead of interrupting active tasks. A UX-shape request that resonates with heavy interactive users; could also benefit agent orchestration.

5. **[#80444 — Windows desktop GPU-process crash](https://github.com/anthropics/claude-code/issues/80444)** · 5 👍 · 34 comments · *bug*
   Crash via in-app Browser tab leaves MSIX package unlaunchable (`appxState=2`) until Repair. Reproduced across two GPU drivers on Windows 11 Home — likely affecting many desktop users.

6. **[#85199 — Claude Desktop repeated crashes / Repair loop](https://github.com/anthropics/claude-code/issues/85199)** · 4 👍 · 23 comments · *bug*
   Companion issue to #80444: frequent desktop crashes requiring "Advanced Options → Repair." Pairs with reports of GPU/Chromium instability in the Windows desktop build.

7. **[#87024 — Cowork bash regression on Windows](https://github.com/anthropics/claude-code/issues/87024)** · 1 👍 · 1 comment · *bug, regression*
   A ~Aug 5–6 regression: Cowork bash dies with "not supported on this device" on installs that previously worked; `msix_required` is now enforced with no upgrade path for legacy installs. Likely to gain traction.

8. **[#86344 — Desktop hang on session resume / no first token](https://github.com/anthropics/claude-code/issues/86344)** · 2 👍 · 2 comments · *bug*
   After auto-update to 1.28929.0, turns started by resume or inter-session messaging hang with no first token; watchdog kills after ~980s. Affects heavy multi-session desktop users.

9. **[#78527 — PreToolUse prompt-hook deny stops entire turn](https://github.com/anthropics/claude-code/issues/78527)** · 1 👍 · 5 comments · *bug, regression*
   v2.1.210 regression: a `prompt`-type PreToolUse hook that returns a deny stops the whole turn (`hook_stopped_continuation`) instead of returning a tool error. Breaks LLM-judge security setups.

10. **[#77830 — Commit attribution trailer ignores `attribution: {commit: ""}`](https://github.com/anthropics/claude-code/issues/77830)** · 1 👍 · 5 comments · *bug*
    With commit attribution disabled via settings, Claude Code still appends `Claude-Session:` trailers to commits. Non-compliance risk for orgs that require clean commit histories.

---

## Key PR Progress

Only 3 PRs were updated in the last 24h. None are code changes to Claude Code core — two are community contributions to the `anthropics/claude-code` repo itself (config/docs) and one is an unofficial security-guidance hook change:

1. **[#84600 — Enable frontend-design plugin at project scope](https://github.com/anthropics/claude-code/pull/84600)** · *closed*
   Registers the official marketplace and enables the frontend-design skill via `.claude/settings.json`. Useful reference for teams adopting the plugin system.

2. **[#82981 — "Claude/automatizar inventario insumos w4n98s"](https://github.com/anthropics/claude-code/pull/82981)** · *open*
   Likely an accidental/test PR; no description. Not relevant to core tooling.

3. **[#86870 — fix: prevent false-positive CVP status changes during authorized security research](https://github.com/anthropics/claude-code/pull/86870)** · *open*
   Community PR (though against what looks like a playground repo) adding context-aware CVP-status logic and an `is_authorized_lab()` check to avoid false security blocks. Signals workaround demand for #84352.

> Note: The PR list does not include core CLI/desktop patches — no codef PRs are in-flight in the visible window. This is unusually quiet; recent regressions (hooks, Windows) have no merged fixes yet.

---

## Feature Request Trends

- **Multi-account / multi-connector support** (#27302) — dominant ask; 229 comments show deep enterprise demand.
- **Session continuity** (#13354, #87023, #87028) — continue past limits, connect claude.ai ↔ Claude Code memory, cross-session/org memory at scale.
- **Non-interrupting UX** (#50246) — message queues and richer TUI affordances (scrollbars, #62929).
- **Account-level sync** (#87027) — config/memory should follow login across machines.
- **Better automation ergonomics** (#86986) — `setup-token` mints unusable in CI (400s); long-lived tokens need to "just work."

---

## Developer Pain Points

- **Windows desktop instability** — repeated GPU-process crashes (#80444, #85199), Cowork bash regression (#87024), and PATH/installer issues (#86999) are stacking up for Windows users.
- **Hook regressions** — multiple reports across v2.1.210+: prompt-hook denies killing turns (#78527), `ask` auto-approved under bypassPermissions (#77212), `allow` not suppressing prompts for compound commands (#77110), and missing PostCompact in interactive mode (#78760). Trust in hook-based guardrails is eroding.
- **Silent config/override failures** — skillOverrides ignored for plugin skills (#76156), `attribution: {commit: ""}` ignored (#77830), and `@import` in ancestor CLAUDE.md files not expanded (#79046). Users are discovering settings that quietly don't work.
- **Session/memory fragility** — one malformed stub transcript hides all `/resume` sessions for a project (#77898); memory-file writes destroy frontmatter on YAML parse failure (#76868). Data-loss-adjacent issues are top concern.
- **Auth/CI friction** — `claude setup-token` tokens rejected with opaque 400s (#86986) and the CVP re-blocking saga (#84352) are blocking automated pipelines in regulated environments.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**2026-08-16**

---

## Today's Highlights

The Codex team shipped two Rust alpha releases (`0.148.0-alpha.19/20`) alongside a burst of infrastructure-focused PRs ranging from health endpoints and trace propagation to MCP hook handlers and storage diagnostics. However, the community conversation remains dominated by a wave of critical Windows desktop performance regressions — including system-wide cursor stutter, crash loops from `SkyComputerUseService` spawn storms on macOS, and runaway session storage growth that can consume hundreds of GiB.

---

## Releases

**rust-v0.148.0-alpha.20** and **rust-v0.148.0-alpha.19** — both published in the last 24 hours. No detailed changelog annotations were provided in the release notes beyond version identifiers.

🔗 [rust-v0.148.0-alpha.20](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.20) | 🔗 [rust-v0.148.0-alpha.19](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.19)

---

## Hot Issues

### 1. Codex App freezes/stutters on Windows 11 Pro despite sufficient resources
**#20214** — 104 comments, 85 👍

The most-engaged open issue. Users report frequent UI freezes on high-end hardware. Triggered by "Latest App from Microsoft Store" + Plus subscription. The comment count (104) indicates significant reproduction discussion. Community has narrowed it down to session-directory size and non-elevated operation.

🔗 https://github.com/openai/codex/issues/20214

### 2. [Windows] System-wide mouse stutter when running without elevation
**#38546** — 25 comments, 11 👍

New (Aug 14) but rapidly growing. The ChatGPT/Codex desktop app causes severe cursor stutter system-wide when run without admin elevation. Users are correlating with input polling loops and suggesting the issue is tied to the app's window message processing.

🔗 https://github.com/openai/codex/issues/38546

### 3. [Windows] Idle ChatGPT.exe loop causes cursor stutter after Aug 15 update
**#38719** — 7 comments

Most recent Windows performance regression. Version `26.810.6296.0` causes stutter even when fully idle. One user notes it's reproducible with Pro tier subscriptions. The "idle loop" angle suggests a main-thread polling bug rather than workload-driven contention.

🔗 https://github.com/openai/codex/issues/38719

### 4. Crashpad pending dumps grow +5GB/day without limit
**#25921** — 17 comments, 9 👍

Codex Desktop continuously generates `.dmp` and `_sidecar.json` files (54,504 files / 4.9G in one day). The community has identified this as a silent disk-bloat source and is pushing for cap/rotation. Demonstrates that desktop stability is still a core trust issue.

🔗 https://github.com/openai/codex/issues/25921

### 5. Paginated history drops valid flattened rollout records and reuses ordinals
**#35746** — 13 comments

CLI `--remote` resume causes data-loss adjacent behavior: valid `RolloutLine` records are dropped and ordinals reused when paging through history. Affects codex-cli 0.146.0-alpha.10.1+. This is a correctness issue that could compromise session integrity — a top-priority class of bug.

🔗 https://github.com/openai/codex/issues/35746

### 6. Inline base64 tool images poison threads (`{"detail":"Bad Request"}`)
**#18629** — 12 comments, 2 👍

Desktop threads become unresumable after accumulating `input_image` function_call_outputs as inline base64. Community suspects inflated token usage and request-size limits being exceeded. Long-lived (April) but still open — users are increasingly hitting this on real work.

🔗 https://github.com/openai/codex/issues/18629

### 7. [Windows] Opening/switching conversations triggers 350–800 MiB/s read loop
**#38518** — 6 comments

Newest Windows perf report. Desktop 26.810.4967.0 triggers persistent disk read loops on conversation switch — likely a whole-session deserialization O(n²) pathology. With MSIX packaging, rollback is non-trivial, raising frustration.

🔗 https://github.com/openai/codex/issues/38518

### 8. Computer Use spawn storm causes macOS kernel panic (launchservicesd exhaustion)
**#38760** — 4 comments

`SkyComputerUseService` spawned 5-8 processes/sec after launch, exhausting launchservicesd and triggering WindowServer watchdog kernel panic on macOS 26.5. Multiple duplicate reports (#38744, #38769, #38771) indicate a widespread regression in build 26.810.52044. High severity: the app is destabilizing the host OS.

🔗 https://github.com/openai/codex/issues/38760

### 9. Subagent fork sessions persist large JSONL histories indefinitely
**#30779** — 5 comments

Subagent forks in the CLI keep full JSONL histories, causing severe `~/.codex` disk bloat. Users report data growth into hundreds of GiB in normal long-running use. Community is asking for fork subsession GC/retention controls.

🔗 https://github.com/openai/codex/issues/30779

### 10. Codex copied an image file 150,000 times, consuming 400 GiB
**#35470** — 5 comments

An extreme disk-bloat report: a single `sandbox`/context image was copied 150k times, consuming 400 GiB on Windows. Demonstrates that sandbox image management is fundamentally broken in some paths — a rare but high-impact data-loss-adjacent issue.

🔗 https://github.com/openai/codex/issues/35470

---

## Key PR Progress

### 1. Add health endpoint to code-mode gRPC listener (**#38806**)
Adds `GET /healthz` 200 OK over HTTP/1.1 and HTTP/2, while keeping gRPC methods HTTP/2-only. Improves ops discoverability and load-balancer support. Merged.

🔗 https://github.com/openai/codex/pull/38806

### 2. Route executor policy audits through log-only telemetry (**#38800**)
Moves forwarded network policy decisions (`codex.network_proxy.policy_decision`) to the `codex_otel.log_only` target — preventing audit noise from being persisted to the state log. Addresses a class of storage-bloat complaints. Merged.

🔗 https://github.com/openai/codex/pull/38800

### 3. Add storage diagnostics to `codex doctor` (**#38795**)
Reports available space for `CODEX_HOME` and active worktree; warns below 5 GiB, fails below 1 GiB. On Windows, verifies the Git worktree is on a trusted Dev Drive. Directly addresses the community's disk-bloat concerns with early detection. Merged.

🔗 https://github.com/openai/codex/pull/38795

### 4. Show resume and fork status during TUI startup (**#38788**)
Displays dimmed `Resuming session…` / `Forking session…` status above the composer, updating once session selection resolves. Improves UX during long session loads (a common complaint on large histories). Merged.

🔗 https://github.com/openai/codex/pull/38788

### 5. Keep active-turn model settings stable across updates (**#38785**)
Prevents mid-turn thread-settings changes from mutating model configuration between sampling requests — settings apply to the next turn. Fixes subtle non-determinism in long-running turns. Merged.

🔗 https://github.com/openai/codex/pull/38785

### 6. Use paginated history for persistent exec threads (**#38774**)
`codex exec` persistent threads now request paginated history, with graceful fallback to legacy history for non-supporting stores. Reduces memory/deserialization cost on large sessions. Merged.

🔗 https://github.com/openai/codex/pull/38774

### 7. Scope TUI app directory state to the active context (**#38743**)
Invalidates cached app data, dismisses the app picker, and drops in-flight requests when the account/workspace/thread context changes — prevents stale apps from appearing in the wrong context. Merged.

🔗 https://github.com/openai/codex/pull/38743

### 8. Add MCP tool handler support to the hooks engine (**#38705**)
Discovers synchronous `mcp_tool` hook handlers, invokes configured MCP server+tools via supplied executor, expands nested hook-event placeholders preserving JSON types. Bridges hooks and MCP ecosystems. Merged.

🔗 https://github.com/openai/codex/pull/38705

### 9. Propagate request trace context through exec-server relays (**#38690**)
Adds optional W3C `traceparent`/`tracestate` fields to relay frames, with context attached for encrypted requests split across Noise records. Improves end-to-end observability. Merged.

🔗 https://github.com/openai/codex/pull/38690

### 10. Support pending environment attachment configuration (**#38684**)
Allows threads to start before an environment's attachment config is supplied — turns skip premature attachments. Enables non-blocking environment setup. Merged.

🔗 https://github.com/openai/codex/pull/38684

---

## Feature Request Trends

1. **Session/workspace scoping (CLI + Desktop + VS Code)**
   (#3550, #30779, #34337) — Users want chats and sessions scoped to projects/workspaces, with sane retention and lifecycle management. Disk bloat is the sharp edge; organization is the core request.

2. **Storage and disk hygiene control**
   (#25921, #34337, #35470, #30779) — Recurring theme: the tool silently eats disk (Crashpad dumps, rollout JSONL, sandbox image copies, fork histories). Users demand caps, rotation, GC, and `codex doctor`-level diagnostics as a first-class feature.

3. **Reliable resume and pagination**
   (#35746, #19837, #18629) — Users expect long sessions to resume exactly. The community is requesting robust pagination, stable ordinal assignment, and drop-free history replay.

4. **Cross-platform desktop stability**
   (#38546, #38719, #38750, #38744) — The dominant request direction: the desktop app must not degrade host OS responsiveness. This includes elevation-handling, idle-loop elimination, and crash-loop prevention.

5. **Config flexibility in SDKs**
   (#38817, #38323) — Developers want raw TOML-style overrides (permission maps, literal path keys) in TypeScript SDK, plus reliable remote compact behavior. "Reach the server as configured" is a growing pain point.

---

## Developer Pain Points

1. **Desktop apps destabilizing the host OS** — On Windows (cursor stutter, disk read loops, input freezes) and macOS (launchservicesd exhaustion, kernel panics, OOM crashes from `SkyComputerUseService`). Multiple duplicate reports confirm a widespread regression in the 26.810.x builds.

2. **Storage bloat as a trust killer** — Users report hundreds of GiB lost to Crashpad dumps, rollout JSONL, sandbox image copies, and fork session persistence. No built-in GC, cap, or repair path. The storage diagnostics in `codex doctor` (#38795) are a step forward but don't address existing bloat.

3. **Silent session corruption and data loss** — Pagination dropping records (#35746), inline base64 images poisoning threads (#18629), and unindexed rollout files (#31433) undermine confidence in long-running workflows.

4. **Remote/compact operations failing with 404s** — Two separate reports (#38323, #38706) of `/backend-api/codex/responses/compact` returning 404 "Not Found" for Pro users. Both CLI 0.146.0 and desktop are affected.

5. **TUI pasting and line-ending bugs** — CRLF normalization (#38704) and dropped output lines (#11425) indicate the TUI input pipeline still has rough edges that interrupt flow for Windows/WSL users.

6. **Windows-specific session indexing issues** (#31433) — Valid rollout files left unindexed with no `reindex` repair command. Users are stuck with orphaned sessions.

---

*Digest generated from openai/codex GitHub activity on 2026-08-16.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-16

## Today's Highlights
A new nightly release (v0.56.0-nightly.20260816) continues the fast cadence of iterative improvements. Community focus remains on agent reliability — with **subagent hang/deadlock issues** (#21409) and the **false "GOAL success" reporting after MAX_TURNS interruption** (#22323) still dominating discussion. Two P1 security PRs were refreshed this week: an **SSRF fix via DNS resolution bypass in web-fetch** (#28725) and a **Node 22 upgrade** for the sandbox Dockerfile, alongside a new P1 fix to warn users when preview models are **silently substituted** without entitlement (#28828).

---

## Releases
- **[v0.56.0-nightly.20260816.g2a87e7be1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260816.g2a87e7be1)** — Routine nightly build; no user-facing changelog provided.
- **Previous nightly (20260815)** also released; full diff available in [compare view](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260815.g2a87e7be1...v0.56.0-nightly.20260816.g2a87e7be1).

---

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** *(P1, bug)* — A `codebase_investigator` subagent reported `status: "success"` / `Termination Reason: "GOAL"` despite hitting the max-turn limit prematurely. Misleading success signals obscure real agent failures — 12 comments, top-voted issue this cycle.

2. **[#21409 — Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)** *(P1, bug)* — Simple tasks (folder creation) hang indefinitely when delegating to the generalist agent; users report waiting up to an hour. Workaround: disable subagents. 8 👍, 8 comments — clearly a top community friction point.

3. **[#25166 — Shell command stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** *(P1, core bug)* — Simple CLI commands hang while showing "Awaiting user input" even though the command finished. Reproducible with trivial commands — 3 👍, 4 comments.

4. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** *(P1, browser bug)* — Browser agent fails under Wayland sessions; environmental compatibility remains a persistent gap.

5. **[#22186 — get-shit-done output hook causes crash](https://github.com/google-gemini/gemini-cli/issues/22186)** *(P1, bug)* — CLI crashes repeatedly during final "user summary" printing when using the get-shit-done hook. Updated this cycle with new details.

6. **[#28825 (via PR #28828) — Silent preview model substitution](https://github.com/google-gemini/gemini-cli/pull/28828)** *(P1, core)* — Users requesting preview models without entitlement get silently downgraded to `auto-gemini-2.5` with zero warning. The new PR adds a warning; community impact is high because behavior is invisible.

7. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** *(P2, enhancement)* — Anecdotal but recurring: custom skills/sub-agents are ignored unless explicitly instructed. Limits the value of user-configured agents.

8. **[#20079 — Symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)** *(P2, bug)* — `~/.gemini/agents/*.md` symlinks are silently ignored — a simple but irritating edge case for developer workflows.

9. **[#24246 — 400 error with >128 tools enabled](https://github.com/google-gemini/gemini-cli/issues/24246)** *(P2, bug)* — When more than 128 tools are available, API calls fail with 400. No tool-scoping logic yet; affects power users with many MCP servers.

10. **[#22672 — Agent should discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** *(P2, enhancement)* — Model occasionally runs `git reset` / `--force` when safer alternatives exist; community wants safer defaults for git/branch/DB operations.

---

## Key PR Progress

1. **[#28828 — fix(core): warn when a preview model is silently substituted](https://github.com/google-gemini/gemini-cli/pull/28828)** *(P1, size/m)* — Addresses #28825: adds explicit warning when preview-model entitlement is missing and the model is rewritten to the auto alias. Directly fixes a silent-behavior UX problem.

2. **[#28725 — fix(security): prevent SSRF via DNS resolution bypass in web-fetch](https://github.com/google-gemini/gemini-cli/pull/28725)** *(P2/security, size/m)* — Fixes #28555 (CVSS 8.6): blocks custom domains resolving to private/loopback IPs (e.g., `169.254.169.254`) in the web-fetch tool. Critical hardening.

3. **[#28726 — fix(security): upgrade sandbox Dockerfile to node:22-slim](https://github.com/google-gemini/gemini-cli/pull/28726)** *(P1/security)* — Migrates sandbox and caretaker cloudrun Dockerfiles from EOL `node:20-slim` to `node:22-slim` after unpatched CVEs. Refreshed this week.

4. **[#28827 — fix(core): avoid false authentication errors for 401 substrings](https://github.com/google-gemini/gemini-cli/pull/28827)** *(P2, size/s)* — Fixes #28203: `isAuthenticationError` now only treats `401` as an auth failure when it appears at message start or in HTTP/status context; prevents false positives from ports and exit codes.

5. **[#28823 — Feat/evals tracker relationships error recovery](https://github.com/google-gemini/gemini-cli/pull/28823)** *(size/xl)* — Adds behavioral evals for tracker dependency graphs, visualization, file-path 404 recovery, and shell command failure recovery. Strengthens agent recovery testing.

6. **[#28824 — feat(evals): add multi-tool chain, context safety, and security bounds](https://github.com/google-gemini/gemini-cli/pull/28824)** *(size/l)* — New evals for multi-tool chain execution, context-safe large file handling, and security boundary enforcement — a direct response to security/complexity regressions.

7. **[#28822 — Feat/evals todos tasks tracker](https://github.com/google-gemini/gemini-cli/pull/28822)** *(size/xl)* — Behavioral evals for task planning (`write_todos`), completion signaling, and tracker queries — aligns eval infrastructure with task-tracking reliability goals.

8. **[#28679 — fix(auth): improve Vertex AI 401 error message when using standard API key](https://github.com/google-gemini/gemini-cli/pull/28679)** *(P2, size/s)* — When Vertex AI auth is misconfigured with a Gemini API key, the error now clearly explains the missing Google Cloud credentials instead of failing opaquely.

9. **[#28608 — fix(core): fall back to stable models when preview model 404s with API key auth](https://github.com/google-gemini/gemini-cli/pull/28608)** *(P2, size/m)* — Fixes #28600: keys without preview access now trigger the fallback chain on 404 instead of assuming universal preview access. Closed this week with maintainer follow-up.

10. **[#28769 — chore: add .opencode to .gitignore](https://github.com/google-gemini/gemini-cli/pull/28769)** *(size/xs)* — Prevents tracking of OpenCode IDE config directory — small quality-of-life hygiene fix, still awaiting issue link.

---

## Feature Request Trends

1. **AST-aware code tooling** — The [#22745 EPIC](https://github.com/google-gemini/gemini-cli/issues/22745) (and platform-side [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) is actively evaluating AST-aware file reads/search/codebase mapping to cut token noise and misaligned reads. This is the most systematic, high-leverage improvement under exploration.

2. **Subagent transparency & control** — Two clear asks: (a) [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) wants subagent trajectories visible/shareable via `/chat share` for debuggability; (b) [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) wants the agent to accurately know its own CLI flags/hotkeys, enabling it to act as its own expert guide.

3. **Subagent adoption & behavior** — [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — agents don't proactively use custom skills; [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — discourage destructive git/force operations. Both center on making subagents smarter, more autonomous, and safer.

4. **Browser agent resilience** — [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) requests automatic session takeover/lock recovery for persistent browser profiles instead of the current "fail-fast" behavior — important for long-running automation.

5. **Zero-dependency OS sandboxing** — [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — leverage the model's native bash affinity via lightweight sandboxing with post-execution intent routing. The Dockerfile security PRs suggest this direction is gaining practical traction.

6. **Evaluation infrastructure as first-class** — The explosion of eval-focused PRs (#28822, #28823, #28824) and the [#24353 component-level evals EPIC](https://github.com/google-gemini/gemini-cli/issues/24353) signal heavily-invested quality assurance infrastructure for agent behavior.

---

## Developer Pain Points

1. **False success signals** — Agents reporting `GOAL` success when actually interrupted (**#22323**) breaks trust in automated workflows; developers can't tell real completion from truncation.

2. **Agent hang/deadlock behavior** — Both **#21409** (generalist hangs) and **#25166** (shell "Waiting input" after completion) erode confidence in unattended operation — top 3 issues by comment count and reactions.

3. **Invisible configuration changes** — Silent model substitution (**#28825**), ignored `settings.json` overrides for browser agent (**#22267**), and subagents running despite disabled agents config (**#22093**) make the CLI feel unpredictable.

4. **Terminal/resize/editor glitches** — [#24935](https://github.com/google-gemini/gemini-cli/issues/24935) (corruption after external editors) and [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) (flicker on resize) are persistent UX annoyances for daily terminal usage.

5. **Security/reliability at scale** — SSRF risk via DNS in web-fetch (**#28555 / #28725**), EOL Node in sandbox images (**#28584 / #28726**), and 400 errors at >128 tools (**#24246**) highlight growing pains as the tool expands.

6. **Memory system roughness** — The Auto Memory stack shows recurring bugs: infinite retries on low-signal sessions (**#26522**), non-deterministic redaction of secrets (**#26525**), and silent skipping of invalid patches (**#26523**) — still awaiting a consolidated fix (**#26516**).

---

*Digest generated from public GitHub metadata for google-gemini/gemini-cli on 2026-08-16. All links are to the canonical GitHub issue/PR URLs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-16

## 1. Today's Highlights

The Copilot CLI community is experiencing a rough patch with authentication regressions: two separate reports (Issues #4480 and #4490) detail Atlassian MCP OAuth failures caused by RFC 8414 issuer-mismatch checks introduced between versions 1.0.78 and 1.0.80. Additionally, a critical OOM crash on Windows (Issue #4499) demonstrates that the `v1.0.79` release has memory management issues beyond V8 heap limits, while several architectural concerns around MCP handshake timeouts, session management, and BYOK prompt caching continue to surface. The maintainers have been actively closing issues (6 closed in the last 24h) and progressing PR #4449 to migrate CI automation away from the `pull_request_target` workflow.

## 2. Releases

No new releases in the last 24 hours. The latest version remains **1.0.80**, with the community reporting regressions in authentication (Issues #4480, #4490) and platform-specific bugs (Issue #4499 on Windows, Issue #4501 on Codespaces).

---

## 3. Hot Issues (10 Noteworthy)

### 🔴 Authentication & MCP

**#4480 — Atlassian MCP OAuth fails with "Incompatible authorization server" on 1.0.79** *(CLOSED)*  
A regression from 1.0.71 breaks Atlassian MCP OAuth discovery. The strict RFC 8414 §3.3 issuer check rejects valid metadata. 6 👍, 4 comments. The issue was closed, suggesting a fix landed internally.  
🔗 [Issue #4480](https://github.com/github/copilot-cli/issues/4480)

**#4490 — Atlassian MCP OAuth broken again in 1.0.80** *(OPEN, 0 comments)*  
A follow-up: the fix for #4480 didn't make it into 1.0.80, and the same issuer-mismatch error persists. Users are effectively stuck between versions — 1.0.78 works, 1.0.80 doesn't.  
🔗 [Issue #4490](https://github.com/github/copilot-cli/issues/4490)

**#4421 — MCP handshake has 60s fixed budget with no retry** *(OPEN)*  
npx-launched stdio servers fail ~29% of sessions due to a hard-coded 60s timeout. When exceeded, the server is never respawned for the session's lifetime. No retry, no backoff, no config. High-impact for MCP-heavy workflows.  
🔗 [Issue #4421](https://github.com/github/copilot-cli/issues/4421)

**#4346 — MCP registry policy fetch returns 403 for Actions GITHUB_TOKEN** *(CLOSED)*  
The documented PAT-less Actions setup fails for non-default MCP servers because the registry policy endpoint rejects GitHub's built-in token. Resolved, likely via CI automation changes (PR #4449).  
🔗 [Issue #4346](https://github.com/github/copilot-cli/issues/4346)

### 🐛 Platform-Specific Bugs

**#3392 — Bash tool breaks on NixOS with version ≥1.0.49** *(OPEN, 9 👍)*  
The agent fails to start a bash process (`Failed to start bash process`) on NixOS. This is the longest-running open issue in this batch (since May) with the highest community engagement. Root cause appears related to process spawning differences in NixOS's FHS layout.  
🔗 [Issue #3392](https://github.com/github/copilot-cli/issues/3392)

**#4499 — Windows OOM: "Committing semi space failed" with heap only at 0.6/4.3 GB** *(OPEN)*  
Copilot CLI v1.0.79 crashes fatally during long autopilot sessions. The V8 heap is nowhere near its limit — indicating a host-RAM commit failure, not a heap cap. Critical reliability issue for Windows autopilot users.  
🔗 [Issue #4499](https://github.com/github/copilot-cli/issues/4499)

**#4501 — Codespaces ships Copilot CLI 1.0.3 and `copilot update` only works with sudo** *(OPEN)*  
A fresh Codespace comes with a 77-version-old binary (1.0.3 vs 1.0.80). `copilot update` downloads but doesn't replace the binary without sudo, which fails silently in Codespaces environments.  
🔗 [Issue #4501](https://github.com/github/copilot-cli/issues/4501)

### 🧠 Session & Model Behavior

**#4491 — `/spawn` template contradicts itself, enabling cross-session writes without approval** *(OPEN)*  
The `/spawn` command's expanded prompt can silently turn "create a child session" into "inject context into an unrelated running session." The template includes a singular-spawn contract that contradicts reuse instructions, with no approval gate on the resulting cross-session write. Security-relevant.  
🔗 [Issue #4491](https://github.com/github/copilot-cli/issues/4491)

**#3502 — Task tool silently downgrades subagent model via multiplier guard** *(CLOSED)*  
Named #3565: The Task tool ignores both frontmatter `model:` declarations and explicit overrides when the requested model has a higher cost multiplier than the session model — silently downgrading to the session model without informing the user.  
🔗 [Issue #3565](https://github.com/github/copilot-cli/issues/3565)

**#4493 — `/restart` fails in sessions created with `-w`** *(OPEN)*  
Running `/restart` inside a worktree session (`copilot -w`) causes an option conflict between the worktree flag and existing session ID. No workaround documented. Version 1.0.80.  
🔗 [Issue #4493](https://github.com/github/copilot-cli/issues/4493)

---

## 4. Key PR Progress (2 Items)

**#4497 — Handle fork PR associations in invalid-label writer** *(OPEN)*  
Updates the trusted invalid-label writer to handle fork PR workflow runs where GitHub omits the pull request association. Falls back to workflow-run metadata, requiring exactly one open PR to match. Improves CI robustness for community contributions.  
🔗 [PR #4497](https://github.com/github/copilot-cli/pull/4497)

**#4449 — Migrate pull request automation away from `pull_request_target`** *(CLOSED)*  
Security hardening: replaces `pull_request_target` with issue-scoped write tokens and no-permission `pull_request` signals. This addresses the known privilege-escalation risks of `pull_request_target` and aligns with GitHub's official recommendations. Likely the fix for #4346.  
🔗 [PR #4449](https://github.com/github/copilot-cli/pull/4449)

---

## 5. Feature Request Trends

Across the 17 issues, several recurring feature directions emerge:

1. **Model parity & configuration depth** — Users want `contextTier` exposed in ACP (Issue #4275), GPT-5.6 `reasoning.mode` support (Issue #4495), and dynamic model catalog refresh without cache clearing (Issue #4494). The trend: the CLI should expose every model capability the interactive UI has, and propagate config changes without manual state resets.

2. **MCP server lifecycle control** — Requests center on configurable handshake timeouts/retries (Issue #4421), plus a broader desire for observability into MCP server health and reconnection policies. The fixed 60s budget is a systemic pain point.

3. **Session recovery & management** — Users want to un-archive Done sessions (Issue #4502), fixed `/spawn` behavior with proper approval gates (Issue #4491), and `/restart` reliability across session types (Issue #4493).

4. **BYOK & wire-fidelity** — The BYOK prompt caching bug (Issue #4500) points to a larger demand: byte-for-byte transcript preservation across turns so external providers can leverage caching effectively. This is increasingly important as BYOK adoption grows.

5. **Cross-platform consistency** — NixOS (Issue #3392), Windows (Issue #4499), and Codespaces (Issue #4501) each have platform-specific breakages, suggesting the need for a dedicated platform-compatibility test matrix.

---

## 6. Developer Pain Points

| Pain Point | Recurrence | Impact |
|---|---|---|
| **OAuth/authentication regressions** | #4480, #4490 (Atlassian); regression from 1.0.78→1.0.80 | Blocks all MCP-based workflows using Atlassian; users must pin old versions |
| **Silent model downgrades** | #3565 (Task tool), #4494 (catalog staleness) | Users can't trust model selection; wrong (cheaper) models execute without warning |
| **Unreliable session lifecycle** | #4491 (cross-session writes), #4493 (restart broken), #4502 (no un-archive) | Session data integrity and recoverability concerns; accidental destructive actions |
| **MCP server fragility** | #4421 (no retry), #4480/#4490 (OAuth) | MCP-dependent workflows suffer from non-configurable timeouts and no self-healing |
| **Platform-specific breakages** | NixOS (#3392), Windows OOM (#4499), Codespaces (#4501) | Affected users cannot upgrade or must work around installation/process issues |
| **Cache/state freshness** | #4494 (model catalog), #4500 (BYOK transcript) | Users need manual cache clearing to see config changes; caching optimizations are defeated |

**Overall community sentiment:** The project is shipping features fast but appears to be introducing regressions in authentication and memory management. Developers who rely on MCP servers or non-standard Linux environments are being hit hardest. The closed issues indicate active triage, but the rapid pace of releases (1.0.71 → 1.0.80 in under two weeks) is concerning for stability-sensitive users.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026-08-16**

**1. Today's Highlights**  
The community is increasingly vocal about subscription plan value, with a detailed instrumentation report (#2604) suggesting effective token allowances have dropped 3–5× without official communication. In parallel, a high-impact feature request for a persistent **Memory System** (#1283) continues to gain traction, while a proposal for quota-aware context compaction (#2603) highlights a growing divide between the model’s 1M-token capacity and real-world subscription constraints. No new releases were published in the last 24 hours.

---

**2. Releases**  
No new releases were published in the last 24 hours.  

---

**3. Hot Issues**  
*(4 issues updated in the last 24h — all listed)*  

- **[#1283 – Memory System: Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)** *(40 comments)*  
  *Why it matters:* The most-commented open issue, this feature would enable Kimi Code CLI to retain project patterns, user preferences, and AI-managed notes across sessions — a foundational capability for agentic workflows.  
  *Community reaction:* High engagement over six months reflects strong demand, but no milestone or assignee is set, indicating a potential backlog bottleneck.

- **[#2604 – Effective weekly allowance appears reduced ~3–5× without announcement](https://github.com/MoonshotAI/kimi-cli/issues/2604)**  
  *Why it matters:* The user provides wire-level JSONL instrumentation data comparing token volume pre- and post-mid-July, alleging a silent reduction in the Vivace tier's effective allowance.  
  *Community reaction:* Early-stage (2 comments) but potentially explosive; a transparent response from maintainers is critical to trust.

- **[#2603 – Quota-aware compaction on subscription plans](https://github.com/MoonshotAI/kimi-cli/issues/2603)**  
  *Why it matters:* With K3's 1M-token window, context compaction effectively never triggers, meaning agentic sessions burn quota on redundant context. This request ties compaction to the subscription token budget rather than the model's max context.  
  *Community reaction:* No comments yet; the proposal directly addresses a pain point highlighted by #2604.

- **[#1155 [CLOSED] – openai_legacy provider drops reasoning content](https://github.com/MoonshotAI/kimi-cli/issues/1155)**  
  *Why it matters:* OpenAI-compatible servers (sglang, vllm) that return reasoning fields cause `APIEmptyResponseError` because `reasoning_key` is never passed to `OpenAILegacy`.  
  *Community reaction:* Closed, likely fixed by a recently merged PR; useful reference for users of custom inference stacks.

---

**4. Key PR Progress**  
*(2 PRs updated in the last 24h — all listed)*  

- **[#2524 – fix(tools): count StrReplaceFile replacements against the running content](https://github.com/MoonshotAI/kimi-cli/pull/2524)**  
  Fixes a bug where chained `StrReplaceFile` edits reported replacement counts against the original file content, causing false mismatches when an edit's `old` string was produced by a previous edit. Resolves issue #2526. This is critical for multi-step file mutation reliability.

- **[#2506 [CLOSED] – fix(kosong): raise a clear error on circular $ref in deref_json_schema](https://github.com/MoonshotAI/kimi-cli/pull/2506)**  
  Adds explicit error handling for circular local `$ref` traversal in `deref_json_schema`, preventing infinite recursion or ambiguous failures. The closure suggests it has been merged, improving schema processing robustness.

---

**5. Feature Request Trends**  
Distilled from current issue activity:  
- **Persistent memory/context management** (#1283): Users want the CLI to automatically and manually retain knowledge across sessions, reducing redundant re-explanation.  
- **Subscription-aware resource governance** (#2603): A shift from model-window-driven compaction to quota-driven compaction, acknowledging that token *cost*, not model limits, now defines session ceilings.  
- **Transparent quota transparency** (#2604, implicit in #2603): Users demand instrumentable, documented allowance limits and change notifications — a trust and observability prerequisite.  

---

**6. Developer Pain Points**  
- **Opaque quota metering and silent changes** — the instrumentation in #2604 indicates users are willing to build custom wire-level logging to verify billing, a strong signal of eroded trust.  
- **Context waste on 1M-token windows** — sessions never trigger compaction, so users pay for redundant context they cannot control.  
- **Memory loss across sessions** — the long-standing #1283 highlights that without persistent context, agentic workflows become repetitious and cost-inefficient.  
- **Provider integration edge cases** — the closed #1155 shows custom OpenAI-compatible servers still require maintenance-heavy workarounds, adding friction for advanced users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-16

## Today's Highlights

The community is grappling with significant reliability issues as multiple long-standing bugs (13GB+ database bloat, billing discrepancies, frequent "Endpoint unavailable" errors) remain unresolved, while the core team pushes forward with substantial architectural improvements. A cluster of PRs focused on performance optimization—batching streamed session deltas, releasing virtualized memory, and introducing numeric event timestamps—signals a serious effort to address the scalability concerns raised by users. Notably, several automated cleanup labels (`[automated-pr-cleanup]`, `[contributor]`) across multiple PRs suggest an active triage process, though the closure of several PRs without merged status may indicate churn in the contributor pipeline.

## Releases

No new versions were released in the last 24 hours. The stable version remains **v1.18.18** (referenced across multiple issues and PRs), with the 2.0 rewrite in active development (issues referencing `[2.0]` and V2-specific PRs).

---

## Hot Issues

### 1. [**#33356** — Unbounded growth of the `event` table: opencode.db reaches 13GB+](https://github.com/anomalyco/opencode/issues/33356)
**19 comments | 5 👍** — Two long-running instances filled 22GB volumes to 97-99% capacity because the event-sourcing `event` table in local SQLite never compacts or prunes `message.updated.1` snapshots. This is a critical durability issue for production users running persistent instances, and has gone unresolved for nearly two months. A storage retention policy or manual compaction tooling is urgently needed.

### 2. [**#37790** — OpenCode Go subscription paid but workspace shows "Insufficient balance"](https://github.com/anomalyco/opencode/issues/37790)
**14 comments** — Stripe payment succeeded but the workspace never reflects the paid subscription, blocking all access to paid features. This is a billing-critical bug affecting trust in the platform's payment infrastructure; the transaction ID/Stripe webhook sync appears broken.

### 3. [**#24879** — [FEATURE]: Go Pro tier ($20) and Share modifier with first-month discounts](https://github.com/anomalyco/opencode/issues/24879)
**11 comments | 11 👍** — Community request for a mid-tier subscription between the $20 Go cap and pay-as-you-go Zen, plus a "share modifier" for team/billing flexibility. The 11 upvotes (highest on this list) signal real demand for more granular pricing control and predictable budgeting.

### 4. [**#42143** — Why does Opencode require a subscription when the website says "100% free"?](https://github.com/anomalyco/opencode/issues/42143)
**10 comments | 1 👍** — Confusion and frustration over the "free" promise versus subscription walls for core functionality. This trust/reputation issue suggests a clearer pricing-and-feature matrix is needed on the site and in onboarding.

### 5. [**#7801** — [FEATURE]: Plan Mode + Question tool can auto-switch to Build mode](https://github.com/anomalyco/opencode/issues/7801)
**10 comments | 31 👍** — Long-running request (since January) with the highest upvote count (31) in this digest. Users want Plan Mode to detect when a question yields an actionable answer and automatically transition to Build execution mode, reducing manual switching friction.

### 6. [**#40206** — grok-4.5 on OpenCode Go not working since 2 Aug](https://github.com/anomalyco/opencode/issues/40206) *(closed)*
**9 comments** — Persistent HTTP 500 responses when calling `grok-4.5` via the OpenAI-compatible endpoint. Although closed, related issues continue (see #40886 and #42802), indicating the fix may be incomplete or the problem is recurring.

### 7. [**#27924** — Infinite compaction loop when compression fails to reduce context](https://github.com/anomalyco/opencode/issues/27924)
**8 comments** — The session loop in `prompt.ts` enters an unbounded overflow→compact→overflow cycle when compression cannot shrink context below the token limit (e.g. lost compression state). This can hang sessions indefinitely and waste tokens—a high-severity logic bug.

### 8. [**#42739** — Unhandled crash in `Provider.list` with Cloudflare env vars but missing API token](https://github.com/anomalyco/opencode/issues/42739)
**4 comments** — Freshly opened today: the TUI crashes on launch when `CLOUDFLARE_API_TOKEN` is absent but other Cloudflare variables exist. An easy-to-hit edge case that yields a confusing generic "Unexpected server error" message, harming onboarding for Cloudflare users.

### 9. [**#37671** — [2.0] Headless CLI commands load OpenTUI and leak native temp files](https://github.com/anomalyco/opencode/issues/37671)
**4 comments | 2 👍** — Even `--version` and `--help` spin up the 13.1 MiB `libopentui.so` native library and leak temp files per process. A hygiene bug in the 2.0 CLI that inflates resource usage for basic diagnostics and CI automation.

### 10. [**#32911** — Deepseek API burning too many tokens](https://github.com/anomalyco/opencode/issues/32911)
**3 comments | 1 👍** — Users report overbilling when using Deepseek API with 1.17+ versions; traced to a code bug (with Reddit corroboration). Token-cost accuracy is a high-trust issue—silent overbilling damages confidence in the platform's token accounting.

---

## Key PR Progress

### 1. [**#42829** — feat(core): add Incus workspace forks](https://github.com/anomalyco/opencode/pull/42829) *(closed)*
Adds Incus-backed workspace providers with snapshot-based forking, stopped-idle instance management, and wake-on-demand—pointing to a broader shift toward isolated, VM/container-backed execution in the 2.0 core. Closure without merge details suggests design review may be ongoing.

### 2. [**#42831** — feat(core): add Docker blueprint workspaces](https://github.com/anomalyco/opencode/pull/42831) *(closed)*
Immutability-first Docker workspace provider with the coordinator running outside containers; supports subagent isolation and idle container stops. Together with #42829, this signals a major architectural direction toward sandboxed workspace forking.

### 3. [**#42811** — [contributor] feat(session): add viewed state](https://github.com/anomalyco/opencode/pull/42811)
Refactors unread/viewed state to live on the Session (server-side) rather than in TUI-local tab files, eliminating cross-client disagreement on read status. Cleanly solves a data-ownership problem with concurrency in mind.

### 4. [**#42836** — fix(acp): prefer default agent's model over config default for new sessions](https://github.com/anomalyco/opencode/pull/42836)
Closes #42835: ACP `session/new` now resolves the default model from the agent, not the global config default. A precise correctness fix for headless integrations.

### 5. [**#42833** — fix(session-ui): prevent variant select overlap on mobile](https://github.com/anomalyco/opencode/pull/42833)
Closes #42834: The reasoning-effort dropdown in v2 overlapped the send button at 320–390px widths. Small UI fix with meaningful impact for mobile users of the web app.

### 6. [**#42823** — feat(opencode): add per-session budget limit](https://github.com/anomalyco/opencode/pull/42823) *(closed)*
Adds a `budget` field to sessions, a `PATCH /session/:id` endpoint, and a DB migration. Stops the assistant once session cost reaches the limit—directly answering the community's budget-control requests (#24879).

### 7. [**#42824** — feat(app): add voice input and session budget UI](https://github.com/anomalyco/opencode/pull/42824) *(closed)*
Mic-based continuous speech-to-text and a session budget panel in the app UI. Ties into the per-session budget work (#42823) and broadens accessibility.

### 8. [**#42826** — fix(core): batch streamed session deltas](https://github.com/anomalyco/opencode/pull/42826) *(closed)*
Publishes every provider text/reasoning/tool fragment as a separate public event—a live sample averaged excessive event pressure. Batching reduces event count dramatically, a meaningful performance improvement for long sessions, directly addressing the "chatty events" pain behind #33356.

### 9. [**#42825** — fix(app): release virtualized timeline elements](https://github.com/anomalyco/opencode/pull/42825) *(closed)*
Fixes a renderer memory leak: TanStack Virtual retained ~37,500 detached DOM nodes in one long session. Memory-leak prevention for long-running desktop sessions.

### 10. [**#37110** — fix(opencode): stop repeated empty tool loops](https://github.com/anomalyco/opencode/pull/37110) *(closed)*
Closes #31942: halts discovery-tool loops after three consecutive empty matches, even when the model changes its query each time. A defense against runaway tool iterations and wasted tokens.

---

## Feature Request Trends

Across recent issues and PRs, several demand clusters emerge:

1. **Budget & cost controls (high urgency)**: Users want predictable spend—per-session budgets, mid-tier "Pro" plans, and clearer free-tier boundaries. Money-related requests dominate both feature asks and bug reports.
2. **Isolated, sandboxed workspaces**: The Incus and Docker workspace PRs (#42829, #42831) point to a strong architectural push toward container/VM-backed execution, aligning with community asks for reproducible, isolated agent environments.
3. **Seamless mode transitions**: Plan→Build auto-switching (#7801, 31 👍) is the top feature-vote here. Users want the agent to flow naturally from planning to execution without manual mode toggles.
4. **Cross-protocol error visibility**: ACP-related requests (e.g. #42827) ask that critical errors (like `AI_APICallError`) be communicated through the ACP protocol, not just stderr—headless/API consumers need structured error surfaces.
5. **Memory & resource hygiene**: Multiple issues/PRs target unbounded growth: DB tables (#33356), DOM nodes (#42825), temp files (#37671), and event-stream spam (#42826). The community clearly runs long-lived workloads and is hitting scaling ceilings.

---

## Developer Pain Points

1. **Billing and quota friction**: Subscription mismatch errors (#37790), "free" vs. paid expectations (#42143), and silent overbilling (#32911) create persistent trust problems. Cost-related issues have high comment counts and emotional engagement.
2. **Endpoint reliability**: Multiple "Endpoint is unavailable" reports (#42750, #42757) plus recurring grok-4.5 503/500 errors (#40206, #40886, #42802)—suggesting flaky upstream provider connections or proxy routing bugs on opencode.ai/Zen.
3. **Data growth without GC**: The 13GB SQLite bloat (#33356) and DOM node accumulation (#42825) reflect a systematic gap: no retention policies or compaction for long-lived sessions/events. Developers running persistent instances are effectively punished for using the tool "as intended."
4. **Terminal UX regressions**: Wrapped links unclickable in Kitty/Alacritty (#35649, #42805) and mouse-wheel misbehavior with `mouse: false` (#35295) affect core daily-driver UX and see multiple reports.
5. **Configuration surprises**: Environment-variable edge cases crashing the app (#42739), project paths going stale (#34737), and headless commands loading unnecessary native libs (#37671) point to config/discovery logic that could be more defensive.

---

*Digest for 2026-08-16 · Data: anomalyco/opencode on GitHub*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-16

## Today's Highlights

A major reliability wave hit this week: **auto-compaction bugs are the #1 pain point**, with issues around missed triggers, crashes at turn boundaries, and role corruption after compaction. The community responded with several high-quality PRs — most notably `#8153` (compact at safe turn boundaries) and `#8164` (never continue from trailing assistant message). The **Mermaid rendering upgrade** (`#8158`) closes a long-standing port-quality debt, and multiple provider fixes (DeepSeek V4 Flash, Baseten output caps, xAI routing) round out a busy 24 hours.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

### 1. [#6879: auto-compaction never triggers after context grows past 100% until provider overflow](https://github.com/earendil-works/pi/issues/6879) — **17 👍, 21 comments** (OPEN)  
**Why it matters:** A 2-hour agentic turn pushed context to 373k tokens with zero compaction attempts. Checkpointing only after each agent turn is insufficient for long-running loops. This is the most upvoted open bug and directly contradicts Pi's "hands-off" promise.

### 2. [#6187: Pi login hangs in WSL after browser-based GitHub Copilot device authorization](https://github.com/earendil-works/pi/issues/6187) — **27 comments** (CLOSED)  
**Community reaction:** Long-running thread. Device shows as registered, but the WSL client never detects completion. Likely a `localhost`/polling issue under WSL's networking layer — a frustrating onboarding blocker for WSL developers.

### 3. [#7855: Pi stops with "Response was truncated before completion."](https://github.com/earendil-works/pi/issues/7855) — **5 comments** (CLOSED)  
**Why it matters:** Random truncation with any OpenAI-compatible API (reproduced with local VLLM). No clear trigger; forces manual continuation prompts. Closed as "no-action," but likely resurfaces.

### 4. [#8105: Codex materializes optional tool parameters (gpt-5.6-sol)](https://github.com/earendil-works/pi/issues/8105) — **4 comments** (CLOSED)  
**Why it matters:** `strict: null` serialization turns optional params into required ones, breaking callers. A subtle but breaking API-compat bug for `openai-codex-responses` users.

### 5. [#8028: TUI `fullRender` crashes with `RangeError` on large outputs](https://github.com/earendil-works/pi/issues/8028) — **2 comments** (OPEN)  
**Why it matters:** Video-production agents reading many images blow the V8 string limit. A hard crash, not a graceful degradation — relevant to anyone processing heavy multimodal workloads.

### 6. [#8168: Compaction + session restore corrupts tool-result role → 422 error](https://github.com/earendil-works/pi/issues/8168) — **1 comment** (CLOSED)  
**Why it matters:** Auto-compaction during a tool-heavy turn leads to `messages.0.function-after[...].role` 422s on the next request. Confirms compaction isn't just a UX issue — it can permanently corrupt a session.

### 7. [#8157: Migrate grok-mermaid → lovely-mermaid](https://github.com/earendil-works/pi/issues/8157) — **2 comments** (OPEN)  
**Why it matters:** The original port inherited "a crapton of corner cases" — a candid admission. The new renderer (PR `#8158`) has far better parsers; this is a quality-of-life win for anyone rendering diagrams in the terminal.

### 8. [#8171: Fixed-height scrollable thinking blocks + auto-collapse](https://github.com/earendil-works/pi/issues/8171) — **2 comments** (CLOSED)  
**Community reaction:** Two solid UX proposals: cap thinking-block height with internal scroll, or auto-collapse on completion. Captures a recurring TUI ergonomics theme.

### 9. [#8166: Custom message injected mid-tool-batch breaks tool_calls→tool adjacency (DeepSeek 400)](https://github.com/earendil-works/pi/issues/8166) — **1 comment** (CLOSED)  
**Why it matters:** Extensions calling `pi.sendMessage(..., { triggerTurn: false })` mid-batch break the strict `tool_calls → tool` message adjacency rule — every subsequent turn fails. A subtle but nasty interaction between extensions and provider constraints.

### 10. [#8154: Hidden thinking blocks leave blank spacer lines in the transcript](https://github.com/earendil-works/pi/issues/8154) — **2 comments** (CLOSED)  
**Why it matters:** Markdown transformers returning `""` for `assistant-thinking` leave 1–2 blank lines — a cosmetic but persistent TUI defect for users who hide thinking output.

---

## Key PR Progress

### 1. [#8076: DRAFT — dev branch with new harness](https://github.com/earendil-works/pi/pull/8076) — OPEN  
The most consequential open PR. A new harness (context management, presumably). Draft stage, no comments yet — watch this one closely.

### 2. [#8153: fix: compact at safe turn boundaries](https://github.com/earendil-works/pi/pull/8153) — CLOSED  
**What it does:** Adds run-scoped boundary-compaction API, rebuilds live context in-run, preserves recent tail, and aborts before the next provider turn when the active signal is interrupted. Directly addresses `#6879` and `#8168`-class bugs.

### 3. [#8164: fix(agent-session): never continue from trailing assistant message](https://github.com/earendil-works/pi/pull/8164) — CLOSED  
**What it does:** Fixes the crash where silent-overflow compaction on a completed turn retried with `agent.continue()` from an assistant message — "Cannot continue from message role: assistant." Now only retries mid-flight rejections (`stopReason: 'error'`).

### 4. [#8158: feat(coding-agent): upgrade Mermaid terminal rendering](https://github.com/earendil-works/pi/pull/8158) — OPEN  
**What it does:** Migrates from `grok-mermaid` to `lovely-mermaid`, closing `#8157` and `#7832`. A major rendering-quality leap for terminal diagram output.

### 5. [#8165: fix(coding-agent): tokens.total = billable only (exclude cacheRead/cacheWrite)](https://github.com/earendil-works/pi/pull/8165) — CLOSED  
**What it does:** Stops cache tokens (billed at 1/120th input rate) from skewing compaction budgets and status stats. `total` now = input + output only; cache reported separately.

### 6. [#8181: fix(ai): expose low thinking level for DeepSeek V4 Flash on opencode/opencode-go](https://github.com/earendil-works/pi/pull/8181) — CLOSED  
**What it does:** Applies `DEEPSEEK_V4_FLASH_THINKING_LEVEL_MAP` to opencode/opencode-go providers — previously they fell back to the non-flash map with `low: null`.

### 7. [#8146: fix(ai): cap Baseten DeepSeek V4 Flash output at 384k tokens](https://github.com/earendil-works/pi/pull/8146) — CLOSED  
**What it does:** models.dev claims 1,048,576-token output; Baseten actually serves 384k max. Requests above that fail — now capped in `synthesize`.

### 8. [#8124: feat(ai): route xAI models through Responses and default to Grok 4.6](https://github.com/earendil-works/pi/pull/8124) — OPEN  
**What it does:** Switches xAI from completions to Responses API, sends Pi's user agent, and changes the default model from Grok 4.5 → 4.6.

### 9. [#8155: fix(tui): avoid resetting cursor blink during renders](https://github.com/earendil-works/pi/pull/8155) — OPEN  
**What it does:** Tracks terminal cursor visibility in `TuiBase`, emits visibility commands only on state transitions, and preserves lifecycle/overlay behavior. Targets the aggressive cursor flicker while streaming (`#8003`).

### 10. [#8151: fix(extensions): contain widget render failures and tear down ctx-owned widgets on invalidation](https://github.com/earendil-works/pi/pull/8151) — CLOSED  
**What it does:** Closes `#8150`. Prevents a third-party widget from capturing a stale extension ctx after `/reload` — contains render failures and tears down owned widgets properly.

---

## Feature Request Trends

1. **Thinking-block UX (high frequency):** Three distinct asks — configurable per-model persistence (`#7871`), fixed-height scrollable blocks (`#8171`), and hiding with zero-height collapse (`#8154`). Users want *control* over thinking visibility, not a global toggle.

2. **Compaction as a first-class, observable event:** Multiple requests to expose compaction state and events to extensions (`#8175`, `#8173`), plus discussion of cross-process writers for resumed JSONL sessions (`#8177`). The message: compaction is no longer an internal detail.

3. **Extension event surface expansion:** `model_select_before` (`#8169`), `ui_dialog_start/end` (`#7147`), `ExtensionCommandContext` for shortcuts (`#8180`). The extension API is growing, but the community wants it faster and with richer context.

4. **Provider breadth and correctness:** LLMTR as built-in (`#8178`), llama.cpp model listing (`#8167`), DeepSeek V4 Flash low thinking level (`#8182`). The theme: *provider parity* — if a model exists, it should work identically across all serving paths.

5. **TUI ergonomics:** Cursor flicker (`#8003`), scroll-step configuration (`#7765`), keybinding conflicts (`#8183`). Terminal polish is now a top-tier concern.

---

## Developer Pain Points

- **Compaction is untrustworthy.** The single biggest cluster: missed triggers (`#6879`), silent role corruption (`#8168`), crashes on trailing assistant messages (`#8164`), ambiguous error messages (`#8176`), and no extension visibility into failures (`#8175`). It's a reliability crisis, not a UX nit.

- **Long-running agentic turns expose fundamental limits.** The 2-hour run that blew past 100% context (`#6879`) and the V8 string-limit crash on image-heavy sessions (`#8028`) both point to the same gap: Pi doesn't yet handle unbounded-growth workloads gracefully.

- **Provider quirks keep biting.** Baseten's undocumented 384k cap (`#8146`), Codex's `strict: null` turning optional params required (`#8105`), DeepSeek's role-adjacency strictness (`#8166`), and xAI's API migration (`#8124`) — each is a different provider, same class of "models.dev says X, reality says Y" friction.

- **WSL remains a second-class citizen.** The login hang (`#6187`) is closed, but WSL-specific issues persist in the backlog — a recurring theme for tooling that runs smoothly on native Linux/macOS.

- **Terminal polish is accumulating debt.** Cursor flicker (`#8003`), blank spacer lines (`#8154`), stdout hints leaking into the parent shell (`#8184`), and keybinding conflicts (`#8183`) form a long tail of small but visible defects that erode trust in the TUI experience.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-16

## Today's Highlights
The Qwen Code team shipped two new preview/nightly releases and completed a full end-to-end benchmark validation (SWE-bench Verified + Terminal-Bench 2.0) on the release pipeline. Meanwhile, the `/review` command ecosystem continues to be the hottest area of active development, with a wave of bug reports and fixes targeting presubmit overlap detection, worktree concurrency, and schema friction. A significant security-focused PR redacts skill bodies from the browser-facing event surface in the Web Shell.

---

## Releases

### v0.21.12-preview.5
[View release](https://github.com/QwenLM/qwen-code/compare/v0.21.12...v0.21.12-preview.5) — Latest preview; no detailed changelog published yet.

### v0.21.11-nightly.20260816.5677823abb
[View release](https://github.com/QwenLM/qwen-code/compare/v0.21.11...v0.21.11-nightly.20260816.5677823abb) — Includes:
- **feat(autofix):** deny-by-default footprint gate and positional window censuses ([#9156](https://github.com/QwenLM/qwen-code/pull/9156))

### Benchmark Smoke Runs
Multiple DSW EAS smoke releases (r1–r5) validated the end-to-end pipeline: Release → Action → SWE-bench Verified → Publisher → Terminal-Bench 2.0. **SWE-bench Verified** (1 case) and **Terminal-Bench 2.0** (89 cases) both **SUCCEEDED** against Benchmark-Qwen-Ref v0.21.12. Full run log: [dsw-eas-full-20260815-r1](https://github.com/QwenLM/qwen-code/issues/9251).

---

## Hot Issues

1. **[#9089 — autofix: PAT-bearing jobs share a host with untrusted branch code — needs runner-level isolation](https://github.com/QwenLM/qwen-code/issues/9089)** (P1, Security)
   Security-critical class of finding that cannot be closed from inside a GitHub Actions step; opened by wenshao after the `global-driver` incident and four rounds of `/review` hardening. 4 comments.

2. **[#9241 / #9239 / #9237 — Main CI failed: E2E Tests (multiple commits)](https://github.com/QwenLM/qwen-code/issues/9241)** (P1, Build System)
   Three separate E2E CI failures on `main`, all marked `autofix/approved` and `ready-for-agent`. The autofix pipeline is actively working through them. 3 comments each.

3. **[#9250 — qwen serve host writer hard-codes new-file mode 0600: ignores umask](https://github.com/QwenLM/qwen-code/issues/9250)** (P3, File Operations)
   `write_file`/`edit`/`notebook_edit` create new files with `0600` unconditionally, ignoring daemon umask with no configuration override. Platform governance concern raised by community member VorlMaldor. 4 comments.

4. **[#9230 — Follow-up suggestion side query defeats server-side prefix caching](https://github.com/QwenLM/qwen-code/issues/9230)** (P2, Performance)
   Main session gets ~0% prompt-cache reuse on prefix-caching servers (llama.cpp); every main turn re-prefills from scratch. Performance regression with caching infra. 3 comments.

5. **[#7427 — web-shell: artifact panel spams 'Load artifacts failed: Failed to fetch'](https://github.com/QwenLM/qwen-code/issues/7427)** (P2, UI)
   Automatic refresh causes repeated error toasts in the `qwen serve` web shell. Now pinned by PR [#9227](https://github.com/QwenLM/qwen-code/pull/9227) which confirms the toast-spam no longer exists on main. 5 comments.

6. **[#9219 — /review presubmit overlap matching is exact-line only](https://github.com/QwenLM/qwen-code/issues/9219)** (P2, CLI)
   Multi-line ranges and semantic duplicates pass as `noConflict` — a correctness gap in the review pipeline's presubmit gate. 4 comments.

7. **[#9200 — Community frustration: "相同的任务…过程差距一言难尽"](https://github.com/QwenLM/qwen-code/issues/9200)** (P2, Badcase)
   User reports inconsistent reasoning traces for identical tasks with the same local module, comparing unfavorably to older CLI tools. Needs more information. 4 comments.

8. **[#9198 — qwen runs into OOM after ~1 week](https://github.com/QwenLM/qwen-code/issues/9198)** (P2, Memory)
   Server with 1 TB RAM still OOMs; tmux terminal also becomes unusable afterward (input/keyboard corruption) — Qwen-specific, Kimi Code works. 3 comments.

9. **[#5966 — 0.19.3 UI: Chinese input method intermittently fails](https://github.com/QwenLM/qwen-code/issues/5966)** (P2, UI)
   Long-standing IME bug: Chinese input completely ineffective, only pinyin echoes, no error surfaced. 4 comments, still open.

10. **[#9253 — Web Shell dev tabs white-screen after dev-server/daemon restarts](https://github.com/QwenLM/qwen-code/issues/9253)** (P2, UI)
    Long-open dev tabs (`localhost:5173`) white-screen with no recovery UI. Addressed by PR [#9254](https://github.com/QwenLM/qwen-code/pull/9254). 2 comments.

---

## Key PR Progress

1. **[#9235 — fix(serve): redact skill bodies from the Web Shell event surface](https://github.com/QwenLM/qwen-code/pull/9235)** (Security)
   One of the more security-critical PRs today: full SKILL.md bodies were being delivered verbatim to the browser-facing event surface even though nothing renders them. Defense-in-depth hardening by wenshao.

2. **[#9254 — fix(web-shell): show a boot fallback instead of a white screen](https://github.com/QwenLM/qwen-code/pull/9254)** (UI)
   Dependency-free boot watchdog in `index.html`; renders a theme-aware bilingual fallback with error details and reload button when a script/stylesheet fails.

3. **[#9228 — fix(ci): narrow serve-ab's self-hosted wipe to the A/B checkout dirs](https://github.com/QwenLM/qwen-code/pull/9228)** (CI, Autofix takeover)
   Fixes a destructive `Wipe stale workspace` step that deleted the **entire** shared workspace (~900 MB git history) on the self-hosted ECS pool.

4. **[#9211 — fix(review): lock the PR review worktree lease against concurrent sessions](https://github.com/QwenLM/qwen-code/pull/9211)** (Concurrency)
   The worktree lease now doubles as a lock; destructive operations check it before proceeding — addressing [#9205](https://github.com/QwenLM/qwen-code/issues/9205).

5. **[#9227 — test(web-shell): pin silent failure of background artifact refreshes (#7427)](https://github.com/QwenLM/qwen-code/pull/9227)** (Testing)
   Adds the missing regression pin for [#7427](https://github.com/QwenLM/qwen-code/issues/7427); confirms current main no longer toasts the error.

6. **[#9212 — fix(review): exempt carried-id re-posts from the presubmit overlap drop](https://github.com/QwenLM/qwen-code/pull/9212)** (Review pipeline)
   Makes the presubmit overlap gate id-aware: existing comments carrying the same ledger ID (`R<round>-<n>`) no longer cause a finding to be dropped — fixes [#9208](https://github.com/QwenLM/qwen-code/issues/9208).

7. **[#9252 — fix(ci): stop dropping agent settings in resolve and follow-up workflows](https://github.com/QwenLM/qwen-code/pull/9252)** (CI)
   Two automation workflows passed config through an undeclared input, silently dropping agent settings on every run. Now routed through the declared input.

8. **[#9255 — fix(ci): keep a fallback comment when the PR review runner dies](https://github.com/QwenLM/qwen-code/pull/9255)** (CI resilience)
   Adds a preflight health probe (runner user can create files) and a fallback comment if the review job dies abnormally, so PRs aren't left with no review and no explanation.

9. **[#9220 — fix(ci): self-heal failed checkouts on the reused review runners](https://github.com/QwenLM/qwen-code/pull/9220)** (CI resilience)
   Failed checkouts on reused self-hosted runners were terminal. This PR adds self-healing: first attempt failure triggers a workspace repair before retrying.

10. **[#9247 — fix(review): budget the composed body against GitHub's review limit](https://github.com/QwenLM/qwen-code/pull/9247)** (Review pipeline)
    `compose-review` now trims the review body to stay within GitHub's 65,536-character limit, dropping deferral displays first, then not-reviewed disclosures.

---

## Feature Request Trends

1. **/review pipeline hardening** — The single largest cluster. Requests span: `--resume` wiring ([#9153](https://github.com/QwenLM/qwen-code/pull/9153)), topology-scaled round caps ([#9183](https://github.com/QwenLM/qwen-code/pull/9183)), plain-prose review comments ([#9027](https://github.com/QwenLM/qwen-code/pull/9027)), operator-lowerable round caps ([#9201](https://github.com/QwenLM/qwen-code/pull/9201)), and user-facing bilingual release digests ([#9216](https://github.com/QwenLM/qwen-code/pull/9216)). The command is rapidly becoming a full code-review platform.

2. **Web Shell resilience & UX** — Boot fallbacks ([#9254](https://github.com/QwenLM/qwen-code/pull/9254)), HTML export refactored onto `WebShellTranscript` ([#9186](https://github.com/QwenLM/qwen-code/issues/9186)), manual session-name persistence across `/clear` ([#8977](https://github.com/QwenLM/qwen-code/issues/8977)).

3. **Security posture for automation** — Runner-level isolation for PAT-bearing jobs ([#9089](https://github.com/QwenLM/qwen-code/issues/9089)), skill-body redaction ([#9235](https://github.com/QwenLM/qwen-code/pull/9235)), and confined file reads ([#9163](https://github.com/QwenLM/qwen-code/pull/9163)) show a clear push toward least-privilege automation.

4. **Session & media management** — Session-scoped media references end-to-end ([#9127](https://github.com/QwenLM/qwen-code/pull/9127)), session lifetime bounds via `sessionRotation` ([#8927](https://github.com/QwenLM/qwen-code/pull/8927)).

5. **Third-party provider support** — Kimi and Xiaomi MiMo auth presets ([#8368](https://github.com/QwenLM/qwen-code/pull/8368)) continue the multi-provider trend.

---

## Developer Pain Points

1. **Review infrastructure instability** — The `/review` command is immensely capable but still fragile: concurrent same-PR worktree races ([#9205](https://github.com/QwenLM/qwen-code/issues/9205)), schema friction at last gates ([#9209](https://github.com/QwenLM/qwen-code/issues/9209)), chunk retirement not firing ([#9206](https://github.com/QwenLM/qwen-code/issues/9206)), mutation probes corrupting shared worktrees ([#9207](https://github.com/QwenLM/qwen-code/issues/9207)), and overlap-drop swallowing ledger re-posts ([#9208](https://github.com/QwenLM/qwen-code/issues/9208)). Many of these stem from round-4/5 high-effort review runs.

2. **CI flakiness and infrastructure fragility** — Multiple E2E failures on `main` ([#9241](https://github.com/QwenLM/qwen-code/issues/9241), [#9239](https://github.com/QwenLM/qwen-code/issues/9239), [#9237](https://github.com/QwenLM/qwen-code/issues/9237)), review-runner death leaving no explanation ([#9255](https://github.com/QwenLM/qwen-code/pull/9255)), destructive workspace wipes ([#9228](https://github.com/QwenLM/qwen-code/pull/9228)), and failing checkouts that never self-heal ([#9220](https://github.com/QwenLM/qwen-code/pull/9220)) — the self-hosted infrastructure needs serious hardening.

3. **Test-pin fatigue** — An entire class of issues ([#9194](https://github.com/QwenLM/qwen-code/issues/9194), [#9246](https://github.com/QwenLM/qwen-code/issues/9246)) documents "test-pin hardening gaps": tests that under-pin their stated contracts so mutations ship green. The community is asking for deterministic gates, but the long tail of pin suggestions is itself becoming a burden.

4. **Cache performance** — Follow-up suggestion queries defeat server-side prefix caching ([#9230](https://github.com/QwenLM/qwen-code/issues/9230)) → **0% prompt-cache reuse** on llama.cpp; every turn re-prefills the entire context.

5. **Long-run stability** — OOM after ~1 week ([#9198](https://github.com/QwenLM/qwen-code/issues/9198)) on 1 TB RAM machines, with tmux/terminal corruption as a side effect — affecting only Qwen Code, not Kimi Code.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-16

## Today's Highlights
The project (CodeWhale, formerly DeepSeek-TUI) is mid-flight on **v0.9.8 stabilization**, with a wave of regression fixes and CI unblocking landing on `main` over the past 24 hours. A significant community discussion on the Chinese translation of "Constitution" concluded with **"宪章" (charter)** as the settled term, now propagated to the web front end. CI reliability improvements (stopping `cancel-in-progress` from killing concurrent pushes) are unearthing previously hidden failures on both macOS and Windows.

---

## Releases
No new version tags in the last 24 hours. The project is between **v0.9.7** (released) and the in-progress **v0.9.8** cut (assigned finish PR #5407 pending CI).

---

## Hot Issues

1. **[#4949 — Chinese Translation of "Constitution"](https://github.com/Hmbown/CodeWhale/issues/4949)** — *CLOSED*  
   Three weeks of discussion settled on **"宪章" (charter)** over "宪法" (constitution), avoiding politically sensitive connotations while keeping the document's authoritative framing. Community participation was strong (17 comments) with both native speakers and international maintainers contributing.

2. **[#5316 — EPIC-005: TUI Crate Decomposition](https://github.com/Hmbown/CodeWhale/issues/5316)** — *OPEN, Epic*  
   Umbrella tracking issue for the TUI crate decomposition effort. Every sub-EPIC and FEAT reports here, making it the nexus for architectural modernization work.

3. **[#5374 — Streaming Text Corruption (U+FFFD / CJK)](https://github.com/Hmbown/CodeWhale/issues/5374)** — *OPEN, 5 comments*  
   macOS users report garbled agent output when streaming. Root cause identified: SSE UTF-8 split across HTTP/2 DATA frames decoded with `String::from_utf8_lossy`. PR #5404 is already in flight.

4. **[#5322 — Regression: Output Area Doesn't Fill Wide Terminals](https://github.com/Hmbown/CodeWhale/issues/5322)** — *CLOSED*  
   v0.9 capped the transcript width, breaking v0.8.65 behavior on wide displays. Quickly fixed by PR #5400 (identity `session_shell_area`). Strong user feedback on wasted whitespace.

5. **[#5350 — Simplify Third-Party Model Config with Pre-built Templates](https://github.com/Hmbown/CodeWhale/issues/5350)** — *OPEN, 3 comments*  
   Bilingual request (中/EN) for prefab templates covering OpenCode Zen, OpenCode Go, Agnes, and Meituan SenseNova. Users want one-minute setup: paste key, click "Test Connection," done. PR #5406 implements this.

6. **[#5367 — Configurable Model-Visible Read/Tool-Result Size Limits](https://github.com/Hmbown/CodeWhale/issues/5367)** — *OPEN, 3 comments*  
   Self-hosted long-context models (e.g., DeepSeek V4) hit conservative per-result ceilings (50 KiB reads, 12K-char tool results), incurring ~20 extra reads per 64 KiB file. PR #5405 addresses with configurable budgets at the model/HarnessProfile level.

7. **[#5370 — P0: Web UI Looks Broken — Audit and Rebuild](https://github.com/Hmbown/CodeWhale/issues/5370)** — *OPEN, 2 comments*  
   Hunter reports the public web UI (codewhale.net) is "totally broken" regarding look and features. Distinct surfaces scoped: public `web/` Next.js app vs. managed CWC app. PR #5411 starts the rebuild.

8. **[#5413 — Regression: sudo Broken in Wheel Group](https://github.com/Hmbown/CodeWhale/issues/5413)** — *OPEN, 1 comment*  
   v0.9.7 can't use `sudo` where v0.8.65 could on the `yolo` wheel group. Reproduction steps provided; likely sandbox/permission regression.

9. **[#5241 — Pricing Endpoint 503 — All Sessions Show unverified_live_pricing](https://github.com/Hmbown/CodeWhale/issues/5241)** — *OPEN, 2 comments*  
   Cost display broke after 0.8.67 → 0.9.3 upgrade. Every turn across every provider is unpriced. `api.codewhale.net/session` returns 503. PR #5402 implements an honest fallback path.

10. **[#5403 — Main is Red on Both Platforms Across All Four Runs](https://github.com/Hmbown/CodeWhale/issues/5403)** — *OPEN, 1 comment*  
   With #5395 fixing run cancellation, completed CI runs are exposing red on macOS (`plugin_e2e_acceptance`) and Windows (`NSIS provisioning`). New information, not new breakage.

---

## Key PR Progress

1. **[#5400 — fix(tui): Fill Transcript to Full Terminal Width (#5322)](https://github.com/Hmbown/CodeWhale/pull/5400)** — *CLOSED*  
   Restores v0.8.65 behavior: `session_shell_area` is identity again, eliminating v0.9 gutters on wide terminals/tmux panes.

2. **[#5404 — fix(client): Fail Closed on SSE UTF-8 Split Across HTTP/2 DATA (#5374)](https://github.com/Hmbown/CodeWhale/pull/5404)** — *OPEN*  
   Fixes garbled CJK streaming on macOS DeepSeek Flash by buffering partial UTF-8 sequences instead of lossy-decoding mid-character.

3. **[#5406 — feat(tui): Prefab Provider Templates and Test-Connection (#5350)](https://github.com/Hmbown/CodeWhale/pull/5406)** — *OPEN*  
   Built-in templates for OpenCode Zen, OpenCode Go, Agnes, and SenseNova. Users only enter API keys; adds a test-connection button.

4. **[#5405 — feat(tui): Configurable Model-Visible Read/Tool-Result Budgets (#5367)](https://github.com/Hmbown/CodeWhale/pull/5405)** — *OPEN*  
   Optional larger per-result budgets for self-hosted long-context models. Lowers read amplification on large files.

5. **[#5402 — fix(tui): Restore Session Cost When Live Pricing Is Unverifiable (#5241)](https://github.com/Hmbown/CodeWhale/pull/5402)** — *OPEN*  
   Falls back gracefully when `api.codewhale.net/session` 503s. No longer pins sessions to `unverified_live_pricing` forever.

6. **[#5401 — fix: CodeQL Highs (#107, #88–#106) and Prepare GHSA-8hp3 / GHSA-3mgh](https://github.com/Hmbown/CodeWhale/pull/5401)** — *OPEN*  
   Security-only slice: fixes clear-text logging in `catalog_models_dev.py` and other CodeQL findings. Deliberately avoids tag/release/publish.

7. **[#5399 — fix(tui): v0.9.8 Stabilization — Turn-Owned Agents, Compaction Quality, Blue Stage Web](https://github.com/Hmbown/CodeWhale/pull/5399)** — *CLOSED*  
   Large stabilization reconstruction: default direct subagents become turn-owned, compaction quality improvements, and Blue Stage web fixes. Lands Rust-side v0.9.8 work without version bump.

8. **[#5407 — v0.9.8: Finish the Assigned Cut](https://github.com/Hmbown/CodeWhale/pull/5407)** — *OPEN*  
   Lands the v0.9.8 assigned finish from `codex/v098-final-20260814` onto main. Tag target pinned explicitly to avoid retagging mistakes. Currently blocked on macOS CI (#5408 addresses).

9. **[#5395 — fix(ci): Stop Cancel-In-Progress from Killing Concurrent Main Pushes](https://github.com/Hmbown/CodeWhale/pull/5395)** — *CLOSED*  
   Critical CI fix: main-branch runs shared one concurrency group; later pushes canceled previous runs mid-flight, hiding failing assertions. Now concurrent pushes run independently.

10. **[#5397 — fix(web): Call the Constitution a Charter on the Website](https://github.com/Hmbown/CodeWhale/pull/5397)** — *CLOSED*  
   Follows #4949 outcome: "宪章" (charter) is the settled Simplified Chinese term. The TUI landed it in `cf08cb6af`; this propagates to the website's localized copy.

---

## Feature Request Trends

1. **Provider Configuration Ergonomics** — Users consistently want one-click/one-key setup for third-party providers. Prefab templates, test-connection buttons, and built-in documentation are the recurring asks (#5350, #5406).

2. **Model-Visible Budget Control** — Growing demand for configurable size limits on `read` and tool results, especially for self-hosted long-context models where conservative defaults cause read amplification (#5367, #5405).

3. **Web UI Parity** — The public web UI is flagged as "totally broken" — a full audit and rebuild is scoped, with the model settings surface being rebuilt first (#5370, #5411).

4. **Localization Depth** — Beyond translation, the community cares about *terminology correctness* and *cultural fit*. The "Constitution" → "宪章" debate shows localization is a first-class concern (#4949, #5397).

5. **Sandbox Flexibility** — Users want configurable bwrap sandbox roots and relaxed restrictions (e.g., `/dev/null` redirection) for development workflows like Zig linking (#5410).

---

## Developer Pain Points

- **Red CI Fights** — Multiple reports of `main` being red due to stale assertions, drift, and CI cancellation bugs. The community is actively patching: provider-count assertions (#5383, #5394), facts regeneration (#5398), clippy lints (#5393), and macOS symlink failures (#5392, #5396).
- **MacOS-Specific Flakiness** — Recurring macOS failures: symlink walks in temp dirs (`/var` → `private/var`), PTY keep-alive hangs, and SSE UTF-8 corruption. Each requires platform-specific hardening.
- **Regression Sensitivity** — Users actively track v0.8.65 → v0.9.x regressions: terminal width (#5322), sudo access (#5413), and pricing display (#5241). There's clear community investment in catching regressions early.
- **Release Hygiene Overhead** — Skipped Homebrew tap updates due to missing secrets (#5357), tag target confusion (#5407), and pre-release numbers lingering in assertions (#5383) — release engineering remains a visible bottleneck.
- **Sandbox/Compatibility Friction** — bwrap sandboxing breaking system tooling (Zig linker, redirection) shows the tension between security and developer workflow flexibility (#5410).

---

*Digest generated from GitHub data for the 24h window ending 2026-08-16. All links point to the Hmbown/CodeWhale repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*