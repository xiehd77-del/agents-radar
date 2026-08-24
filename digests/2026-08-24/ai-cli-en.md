# AI CLI Tools Community Digest 2026-08-24

> Generated: 2026-08-24 01:22 UTC | Tools covered: 9

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
**Date: 2026-08-24 | Prepared for: Technical Decision-Makers**

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem is in a **post-hype hardening phase**, characterized less by feature velocity and more by **reliability, security, and trust recovery**. Across all seven tools surveyed, the dominant community concerns are strikingly convergent: subagent orchestration failures (silent stalls, false success reporting), authentication instability, sandbox/security boundary issues, and model quality regressions. Tools are converging on similar architectural responses: stricter tool-input validation, container/sandbox execution boundaries, persistent memory layers, and transparent spend/usage metering. Meanwhile, the ecosystem is diversifying along provider and platform lines — from OpenAI's enterprise-grade auth complexity to Pi's provider-agnostic portability to DeepSeek's supervised-operation stack.

---

## 2. Activity Comparison

| Tool | Issues Identified | PRs Identified | Releases (24h) | Notable Activity |
|---|---|---|---|---|
| **Claude Code** | 10 hot issues (50 updated) | 1 open | None | 351👍 model-quality complaint; security-relevant subagent fork bypass |
| **OpenAI Codex** | 10 hot issues | 10 closed | 2 patches (rust-v0.149.1, alpha) | High PR velocity on content-annotation series; 4+ auth issues |
| **Gemini CLI** | 10 hot issues | 10 (5 open, 5 closed) | 1 nightly | Major dependency bumps (auth 10→11, puppeteer 24→25); security fix closed |
| **GitHub Copilot CLI** | 10 hot issues | 1 (suspicious rename) | 1 (v1.0.81-8) | Grok 4.6 xhigh support; store_memory regression; compaction data-loss |
| **Kimi Code CLI** | 3 updated (10 context) | 2 updated | None | Silent tier allowance reduction (3–5×); memory system demand |
| **OpenCode** | 10 hot issues | 10 (6 closed) | None | 6 fix(ai) PRs in 24h; strongest maintainer responsiveness |
| **Pi** | 10 hot issues (9 closed) | 10 (9 closed) | None | Kimi strict-provider compat fix; PowerShell tool PR |
| **Qwen Code** | 10 hot issues | 10 (8 closed) | 1 nightly | Critical permission-tool-schema fix; /review container boundaries |
| **DeepSeek TUI** | 10 hot issues | 10 (8 closed) | v0.9.11 tagged | Codewhale rebranding; 347k-token subagent spend incident; supervised ops stack |

*Note: "Issues/PRs Identified" = notable items selected for digest; raw numbers may be higher.*

---

## 3. Shared Feature Directions

The following requirements appear across **multiple** tool communities, indicating ecosystem-level gaps:

| Feature Direction | Tools Requesting | Specific Needs |
|---|---|---|
| **Persistent Memory / Cross-Session Context** | Claude Code (#87834), Kimi (#1283), Gemini (#18836, #21000), Codex (#32519) | Shared memory layer across sessions; manual + automatic memory; project-aware context retention |
| **Background Subagent Visibility & Resumability** | Claude Code (#73095, #76602), DeepSeek (#5596), Gemini (#22598, #21763) | Resumed subagents visible in UI; trajectory sharing; no silent kills at turn-end |
| **Sandbox Network Flexibility** | Claude Code (#28018), Gemini (#19873), Copilot (BYOK #4414) | Localhost outbound connections for integration tests; OS-level bash sandboxing |
| **Transparent Usage/Spend Metering** | Codex (#37445), Kimi (#2604), Qwen (implied via auth issues), DeepSeek (#5573) | Silent quota consumption is a top trust eroder; users want per-session dashboards |
| **Reasoning Effort Controls** | Copilot (#4560), Qwen (#9595, #9590), OpenCode (#27893) | Per-model reasoning effort config; auto-routing shouldn't silently disable effort |
| **Windows First-Class Support** | Claude (#81698, #88323), Codex (#38290), Copilot (#4570), Pi (#8512), Gemini (#21983) | GPU crashes, MSIX bricking, file-locks, missing PowerShell — consistent gaps |
| **Rate-Limit / Error Transparency** | Codex (#37445), OpenCode (#43627), Gemini (#22323), Pi (#8531) | Clear error messages, auto-retry with backoff, no silent failures |
| **Plugin/Ecosystem Load Reliability** | Copilot (#4570), Qwen (#9821), Claude (#77704), OpenCode (#33884) | Silent plugin load failures; file-locking conflicts; intermittent tool presence |

---

## 4. Differentiation Analysis

| Tool | Target User | Technical Approach | Differentiating Focus |
|---|---|---|---|
| **Claude Code** | Anthropic power users, multi-session orchestrators | Agent-heavy orchestration, subagent fan-out | Deep agent orchestration with the most fragile subagent layer; model quality scrutiny is highest |
| **OpenAI Codex** | Enterprise/cloud developers | Rust-based, app+CLI; advanced auth flows | Enterprise auth complexity; content-metadata fidelity; MongoDB-backed sessions for scale |
| **Gemini CLI** | Google ecosystem, multi-provider | JS/TS, nightly builds, heavy dependency churn | Most active dependency refresh; P0 security fixes; browser agent via puppeteer |
| **Copilot CLI** | GitHub/Azure enterprise | Tightly bound to Copilot plans/models | Enterprise policy compliance; BYOK support; Grok 4.6 xhigh; smallest PR velocity |
| **Kimi Code CLI** | Moonshot users, budget-conscious | Minimal PR/issue surface; docs-heavy | Trust via spend transparency; plugin security docs; phone-pairing potential |
| **OpenCode** | Open-source hackers, self-hosters | Anomaly fork, Bun runtime, Go relay | Fastest fix turnaround (6 fix PRs/24h); model-routing agnosticism; "fail loudly" philosophy |
| **Pi** | Multi-provider users, TUI enthusiasts | Provider-portability obsessed; bash-tool neutral | Strict provider normalization (Kimi/Vertex); llama.cpp integration; extension API growth |
| **Qwen Code** | Qwen model users, Chinese dev ecosystem | Nightly hardening; /review workflow engine | Security isolation (containers, permission schemas); /review CI/CD integration |
| **DeepSeek TUI** | DeepSeek power users, automation-first | Large Rust monorepo (771k LOC); rebranding to Codewhale | Supervised operation (control sockets, lifecycle outbox); spend-bounding; safety defaults |

---

## 5. Community Momentum & Maturity

**Most Mature (Enterprise-Grade Discipline):**
- **OpenAI Codex** — Structured PR wave (content-annotation series), packaging smoke tests, but auth instability undermines enterprise trust.
- **Copilot CLI** — Steady, deliberate releases; low community engagement (1 PR/24h) but high enterprise dependence.

**Rapidly Iterating (Highest Fix Velocity):**
- **OpenCode** — 6 fix PRs in 24h; maintainers directly addressing community-reported pain (fail-loudly, auto-retry). Best responsiveness-to-noise ratio this cycle.
- **Pi** — 9 of 10 PRs closed in 24h; tight issue-to-PR turnaround (Kimi 400s fixed within cycle). High momentum in provider compatibility.

**High Engagement, Slower Resolution (Frustration Risk):**
- **Claude Code** — 351👍+93 comments on model quality; subagent orchestration fragile; 1 PR open. Community is vocal; resolution pace lags.
- **Gemini CLI** — Active maintenance but large dependency churn (P0 auth bump) creates risk; security fix (#2677) closure after 2025 start is a win.
- **Qwen Code** — Hardening-focused; /review containerization is thoughtful, but stream reliability (#5975) unresolved since June.
- **DeepSeek TUI** — Rebranding (Codewhale) with aggressive must-fix tracker; supervised operations stack is technically ambitious but adds API surface.

**Smaller / Emerging:**
- **Kimi Code CLI** — Low issue/PR volume; community is small but security-sensitive (token metering trust). Memory system demand signals retention risk.

---

## 6. Trend Signals & Recommendations

1. **Reliability > Features (Ecosystem-Wide)** — Every tool's top community pain point is a reliability issue: silent stalls, dropped data, auth failures, spend surprises. **Recommendation:** Prioritize robustness over new capabilities; a "fail loudly" culture (OpenCode's #44569) is the right direction.

2. **Subagent Orchestration Is the New Frontier** — The most fragile layer across tools. Silent kills (DeepSeek #5596), invisible children (Claude #89101, security-relevant), false success (Gemini #22323). **Recommendation:** Invest in parent-agent lifecycle contracts, visible subagent telemetry, and deterministic completion semantics.

3. **Spend Transparency Is a Trust Imperative** — Codex (6% quota per background run) and Kimi (3–5× silent reduction) both show users will leave without metering clarity. **Recommendation:** Ship per-session token dashboards and background-activity accounting before optimizing billing.

4. **Windows Remains the Weakest Platform** — Six tools report Windows-specific instability (crashes, file locks, missing PowerShell, MSIX bricking). **Recommendation:** Treat Windows as a first-class platform in CI, not an afterthought.

5. **Strict Providers Force Better Engineering** — Kimi/Vertex strictness exposed issues lenient providers mask (Pi #8537, #8504). **Recommendation:** Test against strict providers; build provider-agnostic normalization layers.

6. **Security Hardening Is Becoming Standard** — Symlink traversal (Gemini #2677), container execution (Qwen #9723), tool-schema permission enforcement (Qwen #9829), sandbox registry isolation (Codex #40302). **Recommendation:** Treat agent sandbox/permission systems as production-security infrastructure, not convenience features.

7. **Context Fidelity Is the Next Performance Frontier** — OpenAI's content-annotation series and Pi's compaction-reconciliation work point to a shared concern: preserved context = better long-session outcomes. **Recommendation:** Invest in content-kind metadata, compaction budgets, and history-normalization.

8. **Supervised/Human-in-the-Loop Automation Is Emerging** — DeepSeek's control socket + lifecycle outbox and Kimi's phone-pairing (gbr/1) signal demand for watching and vetoing autonomous agents. **Recommendation:** Build observability surfaces (lifecycle events, remote supervision) early.

---

*Report compiled from public GitHub activity across 9 AI CLI tool projects on 2026-08-24. Figures reflect digest selections, not exhaustive counts.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** github.com/anthropics/skills | **Snapshot Date:** 2026-08-24

---

## 1. Top Skills Ranking

### #1 — skill-creator: run_eval.py Recall Fix (PR #1298)
- **Author:** MartinCajiao | **Status:** Open
- **Functionality:** Fixes the skill-creator evaluation pipeline which reported `recall=0%` for every skill description, causing the optimization loop to iterate against noise. Includes Windows stream reading, trigger detection, and parallel worker fixes.
- **Discussion Highlights:** References Issue #556 with 10+ independent reproductions. This is the most critical operational bug in the skill-authoring workflow.
- **Link:** https://github.com/anthropics/skills/pull/1298

### #2 — document-typography Skill (PR #514)
- **Author:** PGTBoos | **Status:** Open
- **Functionality:** Prevents typographic defects in AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment.
- **Discussion Highlights:** Addresses a universal pain point — every document Claude generates is affected. Users rarely request good typography explicitly, making this a valuable unspoken requirement.
- **Link:** https://github.com/anthropics/skills/pull/514

### #3 — ODT Skill (PR #486)
- **Author:** GitHubNewbie0 | **Status:** Open
- **Functionality:** Create, fill, read, and convert OpenDocument Format files (.odt, .ods), including ODT-to-HTML conversion. Triggers on LibreOffice/OpenDocument mentions.
- **Discussion Highlights:** Extends the document-format family (PDF, DOCX, XLSX) into the open-source ecosystem. Long-running PR (March→April) with sustained community interest.
- **Link:** https://github.com/anthropics/skills/pull/486

### #4 — frontend-design Skill Improvement (PR #210)
- **Author:** justinwetch | **Status:** Open
- **Functionality:** Revises the frontend-design skill for clarity, actionability, and internal coherence — ensuring every instruction is executable in a single conversation.
- **Discussion Highlights:** Reflects the community's push to make existing skills more operational rather than just adding new ones.
- **Link:** https://github.com/anthropics/skills/pull/210

### #5 — skill-quality-analyzer + skill-security-analyzer (PR #83)
- **Author:** eovidiu | **Status:** Open
- **Functionality:** Two meta-skills: quality analysis across structure/documentation/examples/resources (20% weighting each) and security analysis for skill distributions.
- **Discussion Highlights:** Directly responds to community security concerns (Issue #492). Meta-skills represent a maturing ecosystem.
- **Link:** https://github.com/anthropics/skills/pull/83

### #6 — testing-patterns Skill (PR #723)
- **Author:** 4444J99 | **Status:** Open
- **Functionality:** Comprehensive testing skill covering the Testing Trophy model, unit testing (AAA pattern), React component testing, and what NOT to test.
- **Discussion Highlights:** Addresses a frequently-requested domain; long-lived PR (March→April) with active community interest.
- **Link:** https://github.com/anthropics/skills/pull/723

### #7 — ServiceNow Platform Skill (PR #568)
- **Author:** Vanka07 | **Status:** Open
- **Functionality:** Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM/PPM, SecOps, CSDM, and IntegrationHub.
- **Discussion Highlights:** Enterprise-scale skill with extended discussion period (March→August). Represents the largest single-vendor platform integration proposed.
- **Link:** https://github.com/anthropics/skills/pull/568

### #8 — Hivemind: Multi-Agent Orchestration (PR #1628)
- **Author:** Hanishchow | **Status:** Open
- **Functionality:** Delegates mechanical work to headless opencode workers on free models while Claude Code remains the sole planner/reviewer/merger.
- **Discussion Highlights:** Newest high-traffic PR (created 2026-08-21). Addresses context-window economics — the expensive model's context is the scarce resource.
- **Link:** https://github.com/anthropics/skills/pull/1628

---

## 2. Community Demand Trends

### Security & Trust (Highest Urgency)
Issue #492 details how community skills under the `anthropic/` namespace enable trust boundary abuse. Users may grant elevated permissions to skills they believe are official. Already generating two response PRs (#83 skill-security-analyzer) and sustained discussion (43 comments).

### Context Window Efficiency (Rising)
Issue #1487 documents the `claude-api` skill eagerly injecting ~156k tokens in a single tool call. Issue #1329 proposes compact-memory (symbolic notation for agent state). PR #1628 (Hivemind) delegates mechanical work to cheaper models. The community is actively seeking to economize context usage.

### Cross-Platform Reliability
Multiple issues and PRs target Windows compatibility (PRs #1298, #1099, #1050 all fix Windows subprocess/encoding bugs in skill-creator). The `claude` CLI ships as `claude.cmd` on Windows, and Python's subprocess doesn't honor `PATHEXT` — a recurring operational blocker.

### Organization & Sharing
Issue #228 (16 comments, 8 👍) requests org-wide skill sharing in Claude.ai. Currently users must download .skill files and manually navigate Settings > Capabilities. A shared skill library is the most-upvoted feature request.

### Document Format Completeness
Beyond the ODT PR, Issue #12 documents DOCX whitespace reformatting corruption, and Issue #1175 raises SharePoint Online security concerns. The community expects robust handling of the full document-format matrix.

### Quality Assurance & Process
Issue #202 (closed) demanded skill-creator align with best practices. PR #1367 (self-audit) adds mechanical file verification plus four-dimension reasoning audits. The community is systematically professionalizing skill quality.

---

## 3. High-Potential Pending Skills

| PR | Skill | Created | Last Activity | Potential |
|---|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator eval fix | 2026-06-10 | 2026-06-23 | **High** — Fixes 10+ reproductions; unblocks all skill evaluation |
| [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind (multi-agent) | 2026-08-21 | 2026-08-23 | **High** — Recent, active; addresses context economics |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit (reasoning gate) | 2026-06-28 | 2026-07-02 | **High** — Companion proposal in Issue #1385 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 2026-03-04 | 2026-03-13 | **Medium** — Universal utility, older but undismissed |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 2026-03-22 | 2026-04-21 | **Medium** — Requested domain; stale but viable |
| [#568](https://github.com/anthropics/skills/pull/568) | ServiceNow | 2026-03-08 | 2026-08-12 | **Medium** — Enterprise interest; extended review |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT/OpenDocument | 2026-03-01 | 2026-04-14 | **Medium** — Fills format gap; dormant since April |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel (retro games) | 2026-03-05 | 2026-07-15 | **Low-Medium** — Niche but maintained author |

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **operational reliability** — fixing skill-creator evaluation pipelines, ensuring cross-platform execution, and preventing context-window exhaustion — rather than net-new skill features, indicating the ecosystem has shifted from "what skills can do" to "how skills can be trusted and sustained."

---

# Claude Code Community Digest
**2026-08-24**

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours, but the issue tracker is active with 50 updated items. The community is heavily focused on two fronts: **subagent orchestration bugs** (missed task-notifications causing silent stalls, forked subagents bypassing security blocks) and **model quality regressions** — the long-running complaint about verbose rhetorical tics in Claude 4.7/5.0 has ballooned to 351 👍 and 93 comments. Windows desktop stability also remains a sore spot, with a new report of the MSIX package bricking itself after a Code Integrity block.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues (10 Notable)

### 1. [**Claude 4.7–5.0 repetitive rhetorical tics & incoherent prose**](https://github.com/anthropics/claude-code/issues/77136) — *351 👍, 93 comments*
The community's most vocal complaint. Users report the model increasingly defaults to repetitive phrasing ("I'd be happy to help", "Great question") and struggles with coherent prose despite explicit style instructions. The sheer engagement signals this is a widespread quality perception problem, not an edge case.

### 2. [**Windows Desktop GPU process crash kills all sessions**](https://github.com/anthropics/claude-code/issues/81698) — *54 comments*
GPU process crash (exit code 101457950) takes down the entire desktop app and all running sessions on Windows 11 with RTX 5080. Comments suggest this is reproducible and disruptive for multi-session workflows.

### 3. [**Cloud/Cowork git proxy blocks all pushes outside authorized repo set**](https://github.com/anthropics/claude-code/issues/76248) — *29 comments, 9 👍*
A regression that broke PAT pass-through for remote cloud sessions. Users can no longer push to repos outside the session's "authorized repository set" even with their own fine-grained PAT. Mid-session behavior change caught users off guard.

### 4. [**Opus 4.8/5.0 reasoning degradation**](https://github.com/anthropics/claude-code/issues/68780) — *35 👍, 29 comments*
Filed as "URGENT" — user reports severely degraded reasoning at Max effort and is threatening EU legal action over perceived deceptive business practices. The frustration level here is high and worth watching.

### 5. [**Sandbox blocks outbound connections to localhost**](https://github.com/anthropics/claude-code/issues/28018) — *75 👍, 8 comments*
A long-running enhancement request (since Feb 2026). The sandbox blocks `sock.connect()` to 127.0.0.1 even when listed in `allowedDomains`, making local integration tests against Docker services impossible. High 👍 count shows strong demand.

### 6. [**Prompt cache lookup fails intermittently → 59M excess cache_creation tokens**](https://github.com/anthropics/claude-code/issues/87966) — *7 comments*
A costly bug: cache_read pinned to stable-prefix boundary causing 89 full-context rewrites across 9 days. Cost-sensitive users should track this one closely.

### 7. [**Windows MSIX package bricks itself after vk_swiftshader.dll block**](https://github.com/anthropics/claude-code/issues/88323) — *6 comments*
Code Integrity flags the SwiftShader DLL, the package gets marked "Modified", and the app becomes unusable. A sharp edge in the Windows desktop experience.

### 8. [**Custom remote MCP connectors lose tools / capped at 256**](https://github.com/anthropics/claude-code/issues/77704) — *4 comments*
Connectors intermittently collapse to exactly 256 tools total. A hard, suspicious cap suggests an internal limit rather than a natural saturation. Regression since mid-July.

### 9. [**Forked subagents bypass nested-fork block & spawn invisible children**](https://github.com/anthropics/claude-code/issues/89101) — *0 comments, just filed*
**Security-relevant:** forked subagents resume the parent's orchestration, spawn children invisible to `ListAgents`, and those children can message main labeled as "another Claude session". This deserves immediate attention.

### 10. [**/stats Ctrl+S screenshot copy fails on WSL2**](https://github.com/anthropics/claude-code/issues/89097) — *1 comment*
The xclip branch added for Linux in #54695 only matches `"linux"` — WSL's platform string is `"wsl"`. A one-line fix, but illustrative of cross-platform polish gaps.

---

## 4. Key PR Progress (1 Open PR)

Only **one** PR is currently open for review:

### [**docs(plugin-dev): document MessageDisplay streaming semantics**](https://github.com/anthropics/claude-code/pull/83374) — *by iCodeCraft*
Updates the bundled Hook Development skill to document the `MessageDisplay` hook event, which is currently missing from trigger descriptions and the quick-reference table. Small but useful for plugin developers who need streaming event guidance.

---

## 5. Feature Request Trends

Distilled from active issues, the community is asking for:

1. **Shared memory / persistent identity across sessions** ([#87834](https://github.com/anthropics/claude-code/issues/87834)) — users running multiple Claude instances want a consistent memory layer so context doesn't reset per session.

2. **Sandbox network flexibility** ([#28018](https://github.com/anthropics/claude-code/issues/28018)) — outbound localhost connections for local integration testing remains the top sandbox ask (75 👍).

3. **Richer terminal rendering** ([#87438](https://github.com/anthropics/claude-code/issues/87438)) — inline images in the terminal, consistent clickable-link affordances, and proper handling of schemeless absolute paths (iTerm2/macOS).

4. **AskUserQuestion UX hardening** — two separate issues ([#76616](https://github.com/anthropics/claude-code/issues/76616), [#70438](https://github.com/anthropics/claude-code/issues/70438)) about focus-click vs option-click ambiguity and the widget hanging in VS Code. Users want more predictable interactive prompts.

5. **Resumable / background subagent visibility** — multiple reports that resumed subagents don't appear in background task UIs ([#73095](https://github.com/anthropics/claude-code/issues/73095)) and render garbled transcripts ([#76602](https://github.com/anthropics/claude-code/issues/76602)). The orchestration layer needs a UX polish pass.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Severity |
|---|---|---|
| **Subagent notification drops → silent stalls** | [#86365](https://github.com/anthropics/claude-code/issues/86365), [#88742](https://github.com/anthropics/claude-code/issues/88742), [#88741](https://github.com/anthropics/claude-code/issues/88741) — children completing mid-turn lose task notifications; parent ends turn expecting verdicts that never arrive; interactive sessions stall indefinitely. | 🔴 High — breaks fan-out skills like `/code-review` |
| **Model quality regression perception** | [#77136](https://github.com/anthropics/claude-code/issues/77136) (351 👍), [#68780](https://github.com/anthropics/claude-code/issues/68780) (35 👍) — rhetorical tics, degraded reasoning, one user threatening legal action. | 🔴 High — trust erosion |
| **Windows desktop instability** | [#81698](https://github.com/anthropics/claude-code/issues/81698) (GPU crash), [#88323](https://github.com/anthropics/claude-code/issues/88323) (MSIX brick), [#69884](https://github.com/anthropics/claude-code/issues/69884) (claude.exe installs as Bun) | 🟠 Medium — platform confidence |
| **Path-scoped rules silently misbehave** | [#88945](https://github.com/anthropics/claude-code/issues/88945), [#87217](https://github.com/anthropics/claude-code/issues/87217) — `paths:` globs don't match outside project root; user-level rules with `paths:` get silently disabled. | 🟡 Medium — surprising config behavior |
| **Excess token spend from caching bugs** | [#87966](https://github.com/anthropics/claude-code/issues/87966) — 59M excess `cache_creation` tokens over 9 days; a direct cost impact. | 🟡 Medium — wallet pain |
| **Auth/permission friction** | [#76248](https://github.com/anthropics/claude-code/issues/76248) (git proxy blocks PAT pass-through), [#89104](https://github.com/anthropics/claude-code/issues/89104) (CVP rolled back to "In Review") | 🟡 Medium — workflow friction |

**Bottom line:** the subagent orchestration layer is the most fragile area right now — multiple reports of silent stalls and invisible children, including one with security implications ([#89101](https://github.com/anthropics/claude-code/issues/89101)). Combined with model-quality complaints at scale, the community is signaling that *reliability* matters more than new features at this stage.


</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-24

## Today's Highlights

The Codex ecosystem is showing signs of maturity with structured content-annotation work across the codebase (PRs #40196–#40302), while the community continues to surface significant **authentication stability** and **rate-limit transparency** concerns in the desktop app. Two patch releases (rust-v0.149.1, rust-v0.149.0-alpha.4.3) shipped, and a notable cluster of PRs focuses on preserving content-kind metadata through compaction, forking, and media handling — a strong signal that context fidelity is a top engineering priority.

---

## Releases

**rust-v0.149.1** — Patch release. No detailed changelog beyond the compare link.
[View release](https://github.com/openai/codex/compare/rust-v0.149.0...rust-v0.149.1)

**rust-v0.149.0-alpha.4.3** — Alpha patch. No detailed changelog.
[View release](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.4.3)

*Note: Both releases are maintenance/alpha-train patches with no user-facing feature announcements.*

---

## Hot Issues (Top 10)

**1. [#39392 — Codex App aborts with unsupported prompt_cache_retention](https://github.com/openai/codex/issues/39392)** *(Open, 39 comments, 37 👍)*
The highest-engagement issue: Codex Desktop with `gpt-5.6-sol` crashes on `unsupported prompt_cache_retention`. The exact trigger remains unclear, but 39 comments and 37 upvotes suggest a widespread, model-specific breakage. Community is actively bisecting prompt-cache configurations.

**2. [#38350 — Recurring scheduled tasks disable themselves](https://github.com/openai/codex/issues/38350)** *(Open, 35 comments)*
Scheduled tasks flip from enabled to paused after successful runs without user authorization. The community reports multiple unrelated tasks disabled in one batch — a reliability concern for automation-heavy workflows.

**3. [#17525 — Ubuntu sandbox requiring skip for every edit (regression)](https://github.com/openai/codex/issues/17525)** *(Closed, 25 comments)*
A long-running sandbox regression on Ubuntu where normal edits require manual sandbox skip. Although closed (likely resolved or superseded), the 25-comment history shows sustained friction for Linux developers.

**4. [#37445 — Desktop app silently consumes Codex weekly limit](https://github.com/openai/codex/issues/37445)** *(Open, 14 comments, 10 👍)*
Controlled reproduction showing **6% weekly-limit consumption per background suggestion run** — no user prompt required. This is a transparency and fairness issue: users are losing quota to invisible background activity. High community interest (10 👍).

**5. [#39170 — Windows desktop loses auth 15–40s after Advanced Account Security](https://github.com/openai/codex/issues/39170)** *(Open, 14 comments, 15 👍)*
Auth session dies shortly after enabling **Advanced Account Security**. CLI retains login while the app fails. Security-hardening features are breaking app sessions — a critical trust issue (15 👍).

**6. [#39903 — Option to disable “Ran N commands” collapsing](https://github.com/openai/codex/issues/39903)** *(Open, 13 comments, 27 👍)*
**Highest-upvoted feature request today (27 👍).** Users want a config option to always show executed commands instead of collapse summaries. TUI transparency request with strong adoption.

**7. [#39850 — Cached account-settings 401 drops access token without refresh](https://github.com/openai/codex/issues/39850)** *(Open, 11 comments)*
Windows Desktop 26.818: a `401` from cached account-settings drops the access token entirely — no refresh attempt — while Remote Control stays functional. Token lifecycle bug with desktop-wide logout implications.

**8. [#38290 — CreateProcess helper_unknown_error on Windows](https://github.com/openai/codex/issues/38290)** *(Open, 10 comments)*
Sandbox/exec-process failure on Windows: `Failed to create unified exec process: helper_unknown_error: setup refresh had errors`. Windows sandbox reliability remains a recurring theme.

**9. [#38792 — Resume opens long thread at first turn (0.146.1 desync)](https://github.com/openai/codex/issues/38792)** *(Open, 9 comments)*
Session-resume bug: `thread_history` projection cursors desync in 0.146.1, and later versions never repair them. Notable because the report was authored by **Claude (Anthropic)** operating a Codex CLI fleet — cross-agent debugging in action.

**10. [#38939 — macOS runaway computer-use threads → V8 OOM crash](https://github.com/openai/codex/issues/38939)** *(Open, 6 comments)*
App-unusable severity: macOS Spawns runaway computer-use threads until dispatch-thread exhaustion and fatal V8 OOM. A crash-level bug in the computer-use path.

---

## Key PR Progress (Top 10)

**1. [#31175 — Add MongoDB thread store and session migration](https://github.com/openai/codex/pull/31175)** *(Closed)*
Experimental MongoDB-backed thread store via `experimental_thread_store` config, plus `codex sessions migrate-to-mongo` for streaming migration with verification. Enterprise-scale session persistence.

**2. [#40302 — Harden bubblewrap synthetic mount registry isolation](https://github.com/openai/codex/pull/40302)** *(Closed)*
Sandbox security hardening: keeps the synthetic mount registry private to the helper, prevents writable-bind exposure and pre-existing symlink redirects. Security posture improvement.

**3. [#40301 — Label Business Pro Lite plans as Business Premium](https://github.com/openai/codex/pull/40301)** *(Closed)*
Minor but user-facing: TUI account display now shows `SelfServeBusinessProLite` as `Business Premium`, not under generic `Business`. Plan-tier clarity.

**4. [#40292 — Add smoke tests for assembled Codex packages](https://github.com/openai/codex/pull/40292)** *(Closed)*
Cross-platform pytest suite validating packaged CLI/app-server archives — CLI discovery, code-mode execution, and bundled `rg`. Packaging reliability regression guard.

**5. [#40264 — Preserve content metadata when truncating messages](https://github.com/openai/codex/pull/40264)** *(Closed)*
Fixes positional `content_item_kinds` desync when rebuilding truncated messages. Part of the **content-annotation alignment** series — critical for context fidelity.

**6. [#40280 — Budget retained images during remote compaction](https://github.com/openai/codex/pull/40280)** *(Closed)*
Opt-in `compaction_image_budget`: remote compaction now charges retained images against the budget, not just text. Fixes over-retention in image-heavy histories.

**7. [#40257 — Support `cua_repl` as Node REPL-backed MCP server](https://github.com/openai/codex/pull/40257)** *(Closed)*
Extends Guardian review/computer-use policy to `cua_repl` alongside `node_repl`, with compact REPL history rendering. Computer-use tooling expansion.

**8. [#40221 — Distinguish Guardian review threads from subagents](https://github.com/openai/codex/pull/40221)** *(Closed)*
Adds `guardian_review` thread source so Guardian reviews are no longer conflated with `subagent` threads in metadata/analytics. Observability fix for review pipelines.

**9. [#40200 — Remove the Plan mode composer nudge](https://github.com/openai/codex/pull/40200)** *(Closed)*
UX cleanup: removes the contextual “Create a plan?” prompt and Escape dismissal when drafts contain `plan`. Declutters composer for users who type “plan” naturally.

**10. [#40196 — Annotate user input and contextual fragments with content kinds](https://github.com/openai/codex/pull/40196)** *(Closed)*
The **anchor PR** of the current annotation wave: preserves `ContentItemKind` for every contextual fragment → response-message conversion, and classifies user text/image/audio in original order. Foundation for the dozen+ annotation PRs that follow.

---

## Feature Request Trends

1. **Context/command visibility (the “show me everything” trend)** — Strong demand for expanded visibility into what Codex does: un-collapse executed commands ([#39903](https://github.com/openai/codex/issues/39903), 27 👍), optional host-side timestamps before output blocks ([#27203](https://github.com/openai/codex/issues/27203), 12 👍).

2. **Persistent/self-healing workflows** — Users want Codex to own long-running operations: monitor workflows for CLI jobs ([#32993](https://github.com/openai/codex/issues/32993)), shared project context across ChatGPT/Codex with bidirectional handoff ([#32519](https://github.com/openai/codex/issues/32519)).

3. **Selective context control** — Selecting existing worktrees in the app ([#22316](https://github.com/openai/codex/issues/22316), 14 👍) shows users want deterministic control over what code they expose to the agent.

4. **Multi-agent graph intelligence** — Evidence-driven semantic escalation for dynamic multi-agent graphs ([#40037](https://github.com/openai/codex/issues/40037)) — model-driven graph construction instead of fixed pipelines.

5. **Granular config knobs** — Consistent pattern: users want app-level options for behavior they currently can’t control (approval policy deprecation handling [#39973](https://github.com/openai/codex/issues/39973), worktree selection, timestamp modes).

---

## Developer Pain Points

1. **Authentication/session instability (highest-frequency cluster)** — At least **4 active issues** in the top 30 ([#39170](https://github.com/openai/codex/issues/39170), [#39850](https://github.com/openai/codex/issues/39850), [#40242](https://github.com/openai/codex/issues/40242), [#39218](https://github.com/openai/codex/issues/39218), plus VSCode [#40073](https://github.com/openai/codex/issues/40073)) report desktop/app logouts within seconds-to-minutes, token-drop on 401, and auth loss tied to security features. This is the #1 cross-platform blocker.

2. **Windows sandbox/exec unreliability** — Recurring `helper_unknown_error` ([#38290](https://github.com/openai/codex/issues/38290)), `apply_patch` Access Denied in unelevated sandbox ([#34294](https://github.com/openai/codex/issues/34294)), browser plugin failures ([#39543](https://github.com/openai/codex/issues/39543)), and 50GB+ memory usage crashes ([#40163](https://github.com/openai/codex/issues/40163)) paint a poor Windows experience picture.

3. **Rate-limit opacity** — [#37445](https://github.com/openai/codex/issues/37445) exposes silent weekly-limit consumption by background app activity. Developers feel their quota is being spent without consent, which erodes trust.

4. **Model catalog inconsistency** — [#40258](https://github.com/openai/codex/issues/40258) shows the same account gets different GPT-5.6 Sol context windows (272K vs 872K) based on `originator` header. Confusing and potentially limiting for power users.

5. **Session/resume fidelity** — [#38792](https://github.com/openai/codex/issues/38792) (projection cursor desync), [#19975](https://github.com/openai/codex/issues/19975) (fork hides steered messages) — session history rendering is unreliable in edge cases.

6. **Deprecations without graceful migration** — [#39973](https://github.com/openai/codex/issues/39973, 9 👍): retiring `approval_policy = "untrusted"` with a hard start-block forces users to refactor configs with no clear replacement narrative.

---

*Digest generated from openai/codex repository activity, 2026-08-24.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-24

## Today's Highlights
The Gemini CLI project saw active maintenance with a new nightly release (v0.56.0-nightly.20260824) and a significant wave of dependency updates, including a major `google-auth-library` bump (10.x → 11.x) and a large 76-package npm group update. Community-reported issues continue to focus on agent reliability—particularly subagent hangs, false success reporting on max-turn interruptions, and browser agent failures—while several promising community PRs addressing symlink handling, session retention data loss, and OAuth callback cleanup were merged or proposed.

## Releases
- **v0.56.0-nightly.20260824.g5411f113c** — New nightly build with automated version bump. No manual changelog available; see the [full diff](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260823.g5411f113c...v0.56.0-nightly.20260824.g5411f113c) for changes.

## Hot Issues
1. **[#22323 — Subagent recovery after MAX_TURNS falsely reports GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, bug) | 13 comments, 2 👍  
   The `codebase_investigator` subagent reports `status: "success"` even when it hits max turn limits without performing any analysis. This masks real failures and erodes trust in agent output. High priority with maintainer attention.

2. **[#21409 — Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, bug) | 8 comments, 8 👍  
   Users report indefinite hangs (up to an hour) when the CLI defers to the generalist agent for simple tasks like folder creation. Workaround: explicitly instruct the model to avoid subagents. Most-reacted issue this week.

3. **[#25166 — Shell command stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, bug) | 4 comments, 3 👍  
   Simple CLI commands complete but the shell session remains stuck showing "Awaiting user input." Recurring issue affecting basic workflow reliability.

4. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1, bug) | 4 comments, 1 👍  
   Browser agent terminates with GOAL status but fails to actually complete actions under Wayland display servers. Linux-specific reliability gap.

5. **[#21968 — Gemini doesn't use custom skills and sub-agents autonomously](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2, bug) | 6 comments  
   Anecdotal evidence that custom skills (e.g., gradle, git) are only used when explicitly instructed, not proactively during related tasks. Signals a prompting/planning deficiency.

6. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2, bug) | 5 comments  
   Low-signal sessions remain unprocessed and resurface repeatedly, causing wasteful background extraction loops. Part of the broader memory system quality initiative.

7. **[#26525 — Auto Memory lacks deterministic redaction and over-logs](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, security bug) | 4 comments  
   Transcript content is sent to the extraction model *before* redaction happens, and sensitive skill content may be logged. Security-sensitive issue with privacy implications.

8. **[#24246 — 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (P2, bug) | 3 comments  
   The API rejects requests when tool counts exceed 400 (issue title says 128). Users expect smarter tool scoping instead of hard failures. Notable for extensibility.

9. **[#22232 — Browser agent resilience: session takeover and lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232)** (P3, feature) | 4 comments  
   Browser agent fails fast on locked profiles instead of recovering. Persistent sessions are a common use case, making this a frequent blocker.

10. **[#22672 — Agent should discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** (P2, bug) | 3 comments, 1 👍  
    Model occasionally uses `git reset` or `--force` when safer alternatives exist. Community concern about safety during complex git/DB operations.

## Key PR Progress
1. **[#28984 — Bump npm-dependencies group with 76 updates](https://github.com/google-gemini/gemini-cli/pull/28984)** (size/xl, open)  
   Massive dependency refresh including `simple-git` (3.28→3.36) and MCP SDK (1.23→1.30). High-risk/impact; needs careful review.

2. **[#28985 — Bump google-auth-library 10.9.0 → 11.0.2](https://github.com/google-gemini/gemini-cli/pull/28985)** (P0, size/s, open)  
   Major version bump for core auth dependency. P0 priority signals potential breaking changes or security implications.

3. **[#28986 — Bump puppeteer-core 24.0.0 → 25.7.0](https://github.com/google-gemini/gemini-cli/pull/28986)** (size/l, open, maintainer only)  
   Browser automation engine upgrade. Could affect browser agent stability; maintainer-only review required.

4. **[#28975 — Fix glob results for symlinked workspace roots](https://github.com/google-gemini/gemini-cli/pull/28975)** (P2, size/m, open)  
   Community fix from LizunovSergey addressing #28416: glob returns "No files found" when workspace root is a symlink (common on macOS `/tmp`). Broad impact beyond original issue.

5. **[#28983 — Detect mixed line endings instead of flagging CRLF on single match](https://github.com/google-gemini/gemini-cli/pull/28983)** (P2, size/m, open)  
   Fixes `detectLineEnding()` which misclassifies files as CRLF if even one `\r\n` appears. Quality-of-life fix for file handling.

6. **[#28982 — Add Build Remote Agent phone pairing example](https://github.com/google-gemini/gemini-cli/pull/28982)** (size/m, open)  
   Community example extension allowing phone-based remote spectating via `gbr/1` protocol. Shows ecosystem extensibility.

7. **[#28981 — Stop session retention deleting unrelated sessions on shortId collision](https://github.com/google-gemini/gemini-cli/pull/28981)** (size/m, closed)  
   Fixes #28643, a user-data-loss path where shortId collisions caused mass deletion of unrelated sessions during cleanup.

8. **[#28980 — Clear OAuth callback timeout when server closes](https://github.com/google-gemini/gemini-cli/pull/28980)** (size/m, closed)  
   Fixes #28652: five-minute OAuth timeout timer never cleared on terminal paths, causing retained callbacks and potential leaks.

9. **[#2677 — Prevent symlink-based path traversal attacks](https://github.com/google-gemini/gemini-cli/pull/2677)** (P0, security, size/xl, closed)  
   Long-lived (since 2025) critical security fix resolving #1121. Resolves workspace restriction bypass via symlinks. Finally closed; significant win.

10. **[#16657 — Ensure status/need-triage applied and never cleared automatically](https://github.com/google-gemini/gemini-cli/pull/16657)** (size/l, closed)  
    Establishes deterministic triage flow so all issues get manual maintainer review. Process improvement for project health.

## Feature Request Trends
- **AST-aware tooling** (#22745, #22746): Growing interest in AST-based file reads and codebase mapping to reduce token bloat and improve navigation precision.
- **Persistent, file-based task tracking** (#18836, #21000): Community push to replace in-context `WriteToDo` with CRUD on real files, addressing context rot and cross-session memory.
- **Subagent trajectory visibility** (#22598, #21763): Users want `/bug` reports and `/chat share` to include subagent internals for better debugging and evals.
- **Sandboxed bash execution** (#19873): Leveraging models' native bash affinity via OS-level sandboxing with post-execution intent routing—a security/UX hybrid approach.
- **Broader resilience patterns** (#22232, #21924): Requests for failover/takeover logic (browser locks) and terminal resize performance improvements.

## Developer Pain Points
1. **False success reporting**: Subagents report `GOAL` success when actually interrupted or failed (#22323, #21983), undermining output trust.
2. **Hangs and stuck states**: Generalist agent hangs (#21409) and shell "Waiting input" deadlocks (#25166) are recurring time-wasters.
3. **Subagent under-utilization**: Model doesn't proactively use defined skills/subagents (#21968), forcing users to micro-manage.
4. **Symlink & filesystem quirks**: Symlinked agent files not recognized (#20079), glob failures on symlinked roots (#28416/#28975), and symlink path traversal risk (#2677).
5. **Memory system reliability & privacy**: Auto Memory infinite retries (#26522), pre-redaction exposure (#26525), and silent invalidation of patches (#26523).
6. **Agent noise/cleanliness**: Model scatters tmp scripts randomly (#23571) and engages in destructive git/DB behavior (#22672) requiring babysitting.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-24

## Today's Highlights

The Copilot CLI team shipped v1.0.81-8 with support for Grok 4.6's xhigh reasoning effort and a long-awaited live-reload fix for path-sourced plugins in local marketplaces. On the issue tracker, a critical regression in `store_memory` (instance ID requirement) and a data-loss bug with background compaction have been gathering attention. The community continues to push for better BYOK support, improved terminal UX, and more transparent model routing behavior.

---

## Releases

**v1.0.81-8** ([Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.81-8)) — 2026-08-24

**Added:**
- xhigh reasoning effort support for Grok 4.6

**Improved:**
- Path-sourced plugins in local marketplaces now load live from their actual directory—edits take effect immediately on `/restart` or new session startup, removing the need for `/plugin update`
- Skills and custom agents now have improved discoverability

---

## Hot Issues (10 Selected)

1. **[#4535 — `store_memory` fails in v1.0.81 prereleases: "Instance id is required"](https://github.com/github/copilot-cli/issues/4535)**  
   A regression in the native memory writer: any call to `store_memory` errors out with an instance ID validation failure. 5 comments. High priority—breaks memory persistence for all users on the prerelease channel.

2. **[#4572 — Background compaction can lose a completed parallel GPT tool result and cause HTTP 400](https://github.com/github/copilot-cli/issues/4572)**  
   In `gpt-5.6-sol` autopilot sessions, automatic compaction may discard a successfully executed tool call, leading to `400 No tool output found`. Data-loss class bug in long-context workflows.

3. **[#2306 — "You are not authorized" enterprise policy error appears intermittently](https://github.com/github/copilot-cli/issues/2306)**  
   Long-running issue (since March) with recurring authorization failures for enterprise users. 9 comments, 3 upvotes. Community suspects policy sync glitches; no fix yet.

4. **[#4571 — Compaction triggered at 50% with GPT-5.6 Luna Max](https://github.com/github/copilot-cli/issues/4571)**  
   Aggressive compaction at half-context with high-effort models makes even trivial tasks trigger context summarization. Hurts usability of reasoning-heavy models.

5. **[#4570 — Windows: plugin install/update fails with "Access is denied" while VS Code is running](https://github.com/github/copilot-cli/issues/4570)**  
   File-locking conflict between VS Code and CLI plugin operations. Affects all plugins; workaround is closing VS Code. Windows users are impacted most.

6. **[#4566 — Agent repeatedly acknowledges work without executing tool actions](https://github.com/github/copilot-cli/issues/4566)**  
   Agent gets stuck in a loop of text acknowledgments without invoking tools. Reproducible with `gpt-5.3-codex`. 1 upvote.

7. **[#4414 — BYOK custom providers return local 403 before requests reach provider](https://github.com/github/copilot-cli/issues/4414)**  
   Closed issue: requests to custom OpenAI/Anthropic-compatible providers fail locally with auth errors before hitting the provider. 2 upvotes. Concern remains over BYOK reliability for enterprise.

8. **[#4560 — Model "auto" always runs with reasoning effort disabled](https://github.com/github/copilot-cli/issues/4560)**  
   `auto` routing sets `reasoningEffort: null`, and users cannot override. A silent quality regression for users relying on auto model selection.

9. **[#4568 — `--cloud` owner picker hangs, reconnect crashes, and task polling reaches 429](https://github.com/github/copilot-cli/issues/4568)**  
   Cloud mode has multiple systemic failures: hang without repo context, reconnect crash, and rate limiting. Pending triage.

10. **[#4561 — ACP: session/cancel answered with "end_turn" instead of "cancelled"](https://github.com/github/copilot-cli/issues/4561)**  
    Protocol compliance issue in ACP mode: cancelled turns are not marked as cancelled, breaking client-side UX logic. Important for automation clients.

---

## Key PR Progress

Only 1 PR was updated in the last 24h:

**[#4573 — Rename README.md to README.mdmain](https://github.com/github/copilot-cli/pull/4573)**  
Suspicious/erroneous rename (likely accidental or junk). No comments yet. Low signal.

*Note: Several open feature branches (model routing fixes, MCP reload, OTLP insecure endpoints) are still in review but were not updated in the last 24h.*

---

## Feature Request Trends

1. **Custom model / BYOK improvements** — Users want reliable custom provider support, including local 403 workarounds, reasoning-effort controls, and enterprise-grade reliability.
2. **Inline plan annotations** ([#4563](https://github.com/github/copilot-cli/issues/4563)) — Requesting plan changes without restating context; direct annotation of plan steps.
3. **Telemetry endpoint trust** ([#4567](https://github.com/github/copilot-cli/issues/4567)) — Allow insecure OTLP loopback exporters without silently disabling telemetry.
4. **Improved plugin editing workflow** — Plugin files should hot-reload without session restarts; current implementation only helps path-sourced ones.
5. **Better cloud-mode error handling** — Network retries, owner picker resilience, and 429 graceful degradation.

---

## Developer Pain Points

- **Regression frequency in prereleases** — `store_memory` breaking and compaction data loss suggests inadequate testing of memory/compaction paths before release.
- **Context compaction too aggressive** — Users on high-effort reasoning models hit compaction at 50% context, breaking flow on small tasks.
- **Windows file-locking** — CLI plugin ops and VS Code conflict, forcing users to switch between applications.
- **BYOK and cloud flakiness persists** — Local auth errors blocking custom providers and cloud mode instability continue to erode trust in non-default backends.
- **Agent loop inertia** — The "acknowledges work but never executes" loop pattern with codex models needs better model-level guards.
- **Model auto-behavior opacity** — Silent disabling of reasoning effort is a UX smell; users want explicit control or clear defaults.

---

*Digest generated for 2026-08-24. Sources: [github/copilot-cli](https://github.com/github/copilot-cli) issues, releases, and PRs.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026-08-24**

**1. Today's Highlights**
No releases landed in the last 24 hours, but community attention is split between two fronts: a growing feature demand for a persistent **Memory System** (Issue #1283), and a serious, data-backed complaint about reduced weekly token allowances on the Vivace tier (Issue #2604). On the contribution side, a third-party PR proposes phone-as-pairing-device via a new `gbr/1` protocol, while another formalizes plugin security and persistent-data documentation.

**2. Releases**
No new releases published in the last 24 hours.

**3. Hot Issues**
*(3 issues updated in the last 24h – all listed below; the remaining 7 slots below are for context from the broader open-issue backlog.)*

- [#2604 – Effective weekly allowance appears reduced ~3–5× without announcement](https://github.com/MoonshotAI/kimi-cli/issues/2604) – A Vivace-tier member uses client-side instrumentation (wire-level JSONL ledger) to show raw token volumes (input + cache reads + output) dropping by 3–5× over a week, with no change to the membership terms. This is the most pressing trust concern: either the billing terms changed silently, or a metering regression is throttling usage. The community is waiting for an official response; the lack of transparency is the core complaint.
- [#1283 – [enhancement] Memory System: persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283) – The most-discussed open feature request (27 comments). Users want both **automatic memory** (AI-managed notes) and **manual memory** (user-defined instructions). The community sees this as essential for making the CLI a viable daily driver, reducing repetitive context re-injection and enabling cross-session project awareness.
- [#2484 – [CLOSED]](https://github.com/MoonshotAI/kimi-cli/issues/2484) – Closed, empty issue (likely a test or accidental creation). Not actionable; included for completeness given its recent update timestamp.

**4. Key PR Progress**
*(2 PRs updated in the last 24h – all listed below; the remaining 8 slots are for context from the broader open-PR backlog.)*

- [#2616 – Add Build Remote Agent phone pairing (gbr/1)](https://github.com/MoonshotAI/kimi-cli/pull/2616) – Third-party proposal introducing `gbr-agent` (MIT) to let a paid iOS/Android app spectate and inject into a local Kimi session. The protocol is `gbr/1`, with the phone acting as a **spectator and veto** (not orchestrator). This is an interesting pattern for remote supervision/human-in-the-loop, but it introduces a new external dependency and a separate agent API—maintainers will need to assess security and scope.
- [#2614 – docs(plugins): document security and persistent data](https://github.com/MoonshotAI/kimi-cli/pull/2614) – Documentation-only PR clarifying the plugin contract: root `plugin.json`, command-based tools, `inject`, and installation under `~/.kimi/plugins/`. It explicitly does **not** describe the separate remote agent. This addresses a recurring pain point—plugin authors lack clear security boundaries and persistent-data expectations.

**5. Feature Request Trends**
Across the active issue backlog, the dominant request is a **Memory System** (#1283) that persists context (project patterns, user prefs, manual instructions) across sessions. Related directions include: explicit user-defined instruction files (`~/.kimi/instructions`), auto-generated session summaries for later reuse, and better handling of multi-session workflows without re-prompting. The secondary trend is **transparent resource metering**—users want to see and understand exactly how tokens/allowances are consumed per session (#2604), which pushes toward more detailed usage dashboards and clearer billing documentation.

**6. Developer Pain Points**
- **Silent service changes** – The Vivace-tier allowance reduction (#2604) is treated as a potential regression or renegotiation without announcement. Developers running agentic workloads depend on predictable quotas; silent changes break CI pipelines and budgeting.
- **Context loss between sessions** – Repeated need to re-state project context is viewed as a core usability defect, driving demand for the Memory System (#1283).
- **Plugin security ambiguity** – Docs PR #2614 exists precisely because plugin authors are unsure about what data persists under `~/.kimi/plugins/` and what privileges injected commands have. This ambiguity slows ecosystem adoption.
- **External integration friction** – The phone-pairing PR (#2616) highlights a desire for richer remote-control flows, but the community is wary of adding another protocol/dependency (`gbr/1`) without a clear security review from maintainers.

---
*Data source: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-24

## Today's Highlights

The community is grappling with stability issues in the `1.18.21` release — reports of `network_error` finish reasons, UI freezes on stream errors, and a total "Interrupted" brick in desktop sessions — but the maintainers have been exceptionally responsive: six `fix(ai)` PRs landed in the last 24 hours targeting stream parsers, tool schema fidelity, and thinking-block display. The broader theme is **trust in tool execution**: transparent thinking defaults, structured MCP data, and empty-response auto-retry are all converging into a reliability push.

---

## Hot Issues

**1. Local Ollama tool calling broken** — [Issue #1034](https://github.com/anomalyco/opencode/issues/1034) (Closed) · 31 comments · 16 👍  
The top-voted issue this cycle: users with local models that *support* tool calls (e.g., `qwen3:32b`) report the model "thinks about which tool to use… but never does anything." Community tried prompt tweaks and model swaps, but the core pattern — tool-selection reasoning without execution — was never pinned to a specific version or regression. Closed, but the frequency of the symptom in other reports suggests a systemic inference-loop problem.

**2. `gpt-5.6-luna` region-blocked (403)** — [Issue #41518](https://github.com/anomalyco/opencode/issues/41518) (Open) · 8 comments  
Model routing via the OpenCode Go relay returns `HTTP 403: "This model is not available in your region"` for an otherwise-valid key. The 8 comments have no maintainer response visible — users hitting this right now have no workaround beyond switching models.

**3. UI stuck on "thinking…" after stream error** — [Issue #32366](https://github.com/anomalyco/opencode/issues/32366) (Open) · 7 comments · 1 👍  
The desktop UI hangs indefinitely after a stream error — no error message, no recovery, session unusable until restart. The submitter offers a root-cause lead: an `AI_APICallError` or closed socket isn't propagating to UI state. Core reliability bug; the many "network_error" reports this week suggest this is the user-visible face of several underlying failures.

**4. "Auto-accept permissions" disabled in new layout** — [Issue #31137](https://github.com/anomalyco/opencode/issues/31137) (Open) · 6 comments · 6 👍  
The button works only in classic layout; the new web/desktop design disables it, forcing manual approval of every tool call. High 👎-to-comment ratio means this is a widely felt regression, not an edge case.

**5. TUI plugins via npm spec silently fail** — [Issue #33884](https://github.com/anomalyco/opencode/issues/33884) (Open) · 6 comments · 1 👍  
Packaging regression in `v1.17.10`: plugins referenced by npm package spec fail to load silently. Mitigated on `dev` by un-bumping OpenTUI, but the underlying loader bug is still open — a warning to anyone pinning plugins.

**6. MCP `structuredContent` dropped** — [Issue #38923](https://github.com/anomalyco/opencode/issues/38923) (Open) · 4 comments · 1 👍  
When an MCP server returns both `content` text and `structuredContent` JSON, OpenCode forwards only the text — discarding the actual payload. Any tool that puts its real data in `structuredContent` (with terse human text) silently loses data. Validated by the submitter "by removing the text content field entirely" — a dirty workaround, but a definitive repro.

**7. Zen API free models error on any tools request** — [Issue #44300](https://github.com/anomalyco/opencode/issues/44300) (Open) · 4 comments · 1 👍  
Since 2026-08-23, any chat completion with a `tools` array fails with "Endpoint is unavailable" for the Ox Alpha free model, on both Zen Console and Go routes. Affects model-provider gateways, not just OpenCode itself.

**8. `run --session` hangs when model uses `question` tool** — [Issue #44556](https://github.com/anomalyco/opencode/issues/44556) (Open) · 2 comments  
`opencode run` blocks `question`/`plan` tools for sessions it creates, but resuming an HTTP-API-created session skips those rules — and if the model calls `question`, the server waits forever with no timeout. `--auto` doesn't bypass this. A headless-automation footgun.

**9. Windows: segfault whenever nProtect GameGuard runs** — [Issue #44513](https://github.com/anomalyco/opencode/issues/44513) (Open) · 2 comments  
A hard crash (Bun panic) whenever Helldivers 2's anti-cheat injects into processes. The reporter gives a precise root cause: Bun pre-dates `oven-sh/bun#35083` which fixed the handler issue. Extremely niche, extremely well-documented.

**10. "Big Pickle" free-tier context limit throttled** — [Issue #43480](https://github.com/anomalyco/opencode/issues/43480) (Closed) · 4 comments  
Combined with #43627 (rate limit stuck for 5 days) and #44447 (stopping mid-thought every 2 min), the Big Pickle free tier has degraded severely over the last ~36 hours. Users are being squeezed between context caps and rate limits, and the "keep going" loop is the loudest pain point all week.

---

## Key PR Progress

**1. [Open] `fix: stream Bun runtime downloads to disk`** — [PR #44572](https://github.com/anomalyco/opencode/pull/44572)  
Fixes intermittent 30-minute CI hangs in `build-cli` by streaming the Bun runtime download to disk instead of using `Bun.write` — a GC hang in the build pipeline.

**2. [Closed] `fix(ai): fail loudly on missing anthropic tool_use id`** — [PR #44569](https://github.com/anomalyco/opencode/pull/44569)  
Previously fabricated IDs hid provider bugs and risked mis-wired `tool_result`s. Now fails the stream with `invalidRequest` — a correctness-over-silence change.

**3. [Open] `fix(ai): clamp prompt_cache_key to 64 chars`** — [PR #44571](https://github.com/anomalyco/opencode/pull/44571)  
Unicode-aware clamping of `prompt_cache_key` across all chat protocols to OpenAI's 64-char limit — matches DeepSeek/Zai limits and prevents key-thrash.

**4. [Closed] `fix(ai): preserve stateless hosted tool results`** — [PR #44488](https://github.com/anomalyco/opencode/pull/44488)  
Provider-side tool results vanish under `store:false`; this re-sends them as a synthetic message and tolerates WS keepalives. First of the tool-fidelity fixes.

**5. [Open] `fix(ai): tolerate unknown and malformed provider stream parts`** — [PR #44570](https://github.com/anomalyco/opencode/pull/44570)  
Forward-compatible Gemini/Anthropic stream parsing: unknown parts are skipped, malformed known fields are handled permissively — while outbound request validation stays strict.

**6. [Closed] `fix(ai): preserve display on enabled thinking`** — [PR #44544](https://github.com/anomalyco/opencode/pull/44544)  
Anthropic's `display` option was dropped on `enabled` thinking configs — now preserved, so thinking blocks aren't silently hidden for users who asked for them.

**7. [Closed] `fix(ai): preserve OpenAI tool schemas`** — [PR #44546](https://github.com/anomalyco/opencode/pull/44546)  
Passes function schemas through unchanged — preserving unions, nullables, and validation — instead of the flattened projection that broke complex schemas.

**8. [Closed] `feat(session): auto-retry empty stop responses`** — [PR #44536](https://github.com/anomalyco/opencode/pull/44536)  
The smoking gun for the "keep going" loop: providers returning a clean `finish_reason: stop` with no output tokens. Auto-retry with a cap, plus finish-reason logging (#44532) for diagnosis.

**9. [Closed] `fix(core): never build fff index for workspace locations`** — [PR #44563](https://github.com/anomalyco/opencode/pull/44563)  
Plus siblings #44564 (skip host realpath) and #44560 (skip local liveness check): a dense batch of fixes for workspace-backed (remote sandbox) locations, where process-local filesystem probes poisoned startup, TTL, and path resolution.

**10. [Closed] `fix(core): accept null as omitted for optional tool inputs`** — [PR #44567](https://github.com/anomalyco/opencode/pull/44567)  
JSON Schema renders optional fields as `X | null` (since JSON can't express `undefined`), but the runtime Effect schema expected `undefined`. Models sending `null` now succeed — closes a class of "invalid arguments" failures.

---

## Feature Request Trends

- **Thinking-block defaults** — Users want control over whether reasoning is collapsed by default (#28322), tied to a `display_thinking` keybind. The thinking-display PR (#44544) suggests Anthropic's own SDK needed the fix first.
- **Project/session management** — Two asks: delete projects and their sessions (#37280) and a desktop Home context menu with rename/export/delete (#43245, PR open).
- **Configurable reasoning effort** — After `/models` switches, the reasoning-effort menu never pops up (#27893, closed) — but the underlying desire to set it per-model remains.
- **Terminal-safe keybinds** — PR #44545 adds leader-chord fallbacks for VS Code integrated terminal (where `ctrl+enter` doesn't reach the app). Terminal tooling is a steady, recurring theme.

---

## Developer Pain Points

1. **"Keep going" loop** — #44447, #44505, #44522, #44536: the #1 complaint. Empty `finish_reason: stop` responses force manual prompting. Mitigated by #44536 but not the final word — the ecosystem (Big Pickle, not just OpenCode) is implicated.
2. **Rate limits and region locks** — #43627, #43404, #41518, #43480: rate limits that never reset, region-locked models, context caps that differ by CLI. Users hit walls with no diagnostics.
3. **Silent failures** — #38923 (dropped MCP data), #33884 (silent plugin-load failure), #32366 (stuck UI): the theme of the week is data loss without errors. Maintainers responded with "fail loudly" PRs (#44569) — a good sign the community's critique landed.
4. **Bun runtime crashes** — #31563 (segfault on shutdown), #44513 (GameGuard crash), #44572 (CI GC hang): the embedded Bun runtime is a recurring crash source across OSes; the fix is streaming downloads, but the process-level crashes remain open.

*Digest prepared from public GitHub issue/PR activity on `anomalyco/opencode` for 2026-08-24.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-24

## Today's Highlights
The Pi ecosystem saw a burst of activity focused on provider compatibility and Windows support. A critical fix landed for strict OpenAI-compatible providers (Kimi/Moonshot) that were rejecting replayed session history due to malformed message ordering, while a new PowerShell tool PR signals growing investment in first-class Windows support. The llama.cpp integration continues to mature, with merged and open PRs addressing model visibility and loading workflows.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#7683 — pi-tui: let components receive mouse events on their own rows](https://earendil-works/pi Issue #7683)** *(Closed)* — Proposes an optional `Component.onMouse` hook so components can handle mouse events on their own rows with relative coordinates. A companion PR (#8032) is open. Community interest is moderate, but this would be a significant TUI architecture improvement.

2. **[#8167 — Cannot pick a model with built-in llama.cpp support](https://earendil-works/pi Issue #8167)** *(Closed)* — Models from `llama-server` in router mode don't appear in the model list despite being usable via `/llama`. Fixed by PR #8479/#8535 which exposes unloaded presets. Good example of rapid issue-to-fix turnaround.

3. **[#5932 — Exposing ctx.navigateTree() to agents](https://earendil-works/pi Issue #5932)** *(Open, 2 👍)* — Long-running request to expose `navigateTree()` on `ExtensionContext` as it exists on `ExtensionCommandContext`. The author is building a custom `/goal` implementation and needs this for tree navigation. This is one of the older open items, suggesting it's a gap worth prioritizing.

4. **[#8452 — Improve default compaction prompt for continuation-state fidelity](https://earendil-works/pi Issue #8452)** *(Closed)* — Suggests compaction summaries should merge/deduplicate and reconcile continuation state rather than just preserving prose. For coding sessions, distinguishing observed results from assumptions is critical — this directly addresses context-window reliability.

5. **[#7740 — TUI after /reload doesn't follow custom tool renderCall/renderResult](https://earendil-works/pi Issue #7740)** *(Open)* — Tools registered on `session_start` don't render correctly after `/reload` due to load ordering. This is a real workflow annoyance for MCP extension developers.

6. **[#8537 — Kimi 400s on replayed tool history](https://earendil-works/pi Issue #8537)** *(Closed)* — Strict OpenAI-compatible providers reject replayed history with orphaned tool messages, interleaved user messages, and duplicate tool_call_ids. Lenient providers (DeepSeek, OpenAI) mask these issues. Fixed by PR #8536 — important for multi-provider workflows.

7. **[#8531 — Auto-retry stalls; paused workflows can't consume recorded signals](https://earendil-works/pi Issue #8531)** *(Closed)* — A 7-step agent pipeline revealed two facets: workflows paused by retry-exhaustion can't consume recorded signals, and intervention forces advance. This is a serious reliability issue for unattended automation.

8. **[#8521 — Raw control characters in stringified edits fail validation](https://earendil-works/pi Issue #8521)** *(Closed)* — Models emitting edits as JSON strings with raw newlines/tabs (not escaped) break `JSON.parse` validation. Follow-up to #3370; fixed by PR #8513. This is a classic "models are sloppy" edge case that needs defensive handling.

9. **[#8529 — todo tool: non-idempotent toggle silently un-completes items](https://earendil-works/pi Issue #8529)** *(Closed)* — Repeated `toggle` calls on the same todo item flip it back to incomplete. Requesting idempotent `complete`/`uncomplete` actions. This causes silent state corruption in long agent sessions.

10. **[#8504 — openai-completions: empty custom:{} discards tool-call arguments](https://earendil-works/pi Issue #8504)** *(Closed)* — When a provider echoes an empty `custom: {}` on tool_call deltas, the streamer misroutes the call into the custom-tool path, discarding real `function.arguments`. A subtle but breaking provider-compatibility bug.

## Key PR Progress

1. **[#8536 — Normalize tool-result history for strict OpenAI-compatible providers](https://earendil-works/pi PR #8536)** *(Closed)* — Fixes Kimi/Moonshot 400s (Issue #8537) by sanitizing replayed session history: removes orphaned tool messages, merges interleaved user messages, and deduplicates tool_call_ids. Critical for provider portability.

2. **[#8512 — Add optional PowerShell tool](https://earendil-works/pi PR #8512)** *(Open)* — By mitsuhiko. Adds a dedicated PowerShell tool for Windows, acknowledging that git-bash path handling is fundamentally broken for mixed Windows/Unix workflows. This is a major step toward first-class Windows support; community should rally around it.

3. **[#8535 — Show unloaded llama.cpp models in /model](https://earendil-works/pi PR #8535)** *(Closed)* — Companion to #8479. Lists unloaded models from the router so users can select them without manual `/llama` loading. Simplifies the llama.cpp UX significantly.

4. **[#8532 — Cap grep/find child output so one line can't kill the parent](https://earendil-works/pi PR #8532)** *(Closed)* — Fixes a `RangeError: Invalid string length` crash when ripgrep/fd output exceeds V8's string limit (caused by readline's uncapped line buffer). A robustness fix that prevents silent agent crashes.

5. **[#8513 — Repair raw control characters in stringified edit args](https://earendil-works/pi PR #8513)** *(Closed)* — Follow-up to #3370: normalizes raw newlines/tabs inside JSON string values before parsing. Defensive handling for sloppy model output.

6. **[#8505 — Cap agent retry backoff](https://earendil-works/pi PR #8505)** *(Closed)* — Adds `retry.maxAgentDelayMs` (default 30s). Preserves exponential backoff while preventing unbounded waits. Simple, but improves worst-case UX for flapping providers.

7. **[#8509 — Surface stream errors and support toolless models](https://earendil-works/pi PR #8509)** *(Closed)* — Fixes silent "clean stop" when a model returns `native_finish_reason: "network_error"` with 0 tokens. Also adds support for models that don't use tools. Important for exotic providers like openrouter/stealth/ox-alpha.

8. **[#8500 — Eliminate false positives in plan mode bash guard](https://earendil-works/pi PR #8500)** *(Closed)* — Fixes two false-positive classes: paths containing "code" are blocked (e.g., `vi code.py`), and demo text can fool the plan extractor. Improves plan-mode accuracy for legitimate read-only commands.

9. **[#8524 — Retain working status until settled](https://earendil-works/pi PR #8524)** *(Closed)* — Keeps the `Working...` indicator through low-level `agent_end`, clearing only after `agent_settled` callbacks complete. Prevents external observers from wrongly reporting an interactive turn as done.

10. **[#8487 — Expose finish reason compatibility override](https://earendil-works/pi PR #8487)** *(Closed)* — Type-level fix: makes an already-existent API option visible in exposed types. Small but unblocks extension authors who need finish-reason customization.

## Feature Request Trends

- **Windows first-class support**: PowerShell tool, Windows Terminal key-binding conflicts (#8183, #8372), and git-bash frustrations point to a clear push for proper Windows UX.
- **TUI interactivity**: Mouse-driven component expansion (#7683, #8344) and per-component mouse events suggest users want richer, IDE-like terminal interactions.
- **Model catalog & provider polish**: Requests to add new models (deepseek-v4-flash-vision-exp #8469), show unloaded llama.cpp models (#8539), and improve context-ceiling visibility (#8332) indicate the model landscape is evolving faster than the catalog.
- **Extension API completeness**: Users want more events (`user_bash_complete` #8530), broader context APIs (`navigateTree` #5932), and visibility control for Skills (#8533). The extension surface is expanding but lags user needs.
- **Idempotency in tools**: The todo tool toggle (#8529) is a clear example — agents need safe, repeatable operations.

## Developer Pain Points

- **"Models are sloppy"**: Raw control characters in JSON (#8521), empty `custom: {}` fields (#8504), missing arguments (#8527) — developers are repeatedly patching around undeclared model behaviors. This is a systemic burden.
- **Provider compatibility whack-a-mole**: Strict providers (Kimi, Vertex AI) expose issues that lenient ones (OpenAI, DeepSeek) mask — from array-wrapped errors (#8526) to message ordering (#8537). Multi-provider users are hurt most.
- **Reliability in unattended sessions**: Auto-retry stalls (#8531), stale session state after abort (#8525), and overflow replay issues (#7724) undermine trust in autonomous workflows.
- **Windows is an afterthought**: Key-binding conflicts, path handling, missing PowerShell — the community feedback is consistent and growing.
- **Extension load ordering**: `/reload` breaks custom renderers (#7740) and failed factories leave stale state (#8424 fix). The extension lifecycle needs hardening.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-24

## Today's Highlights
The Qwen Code project continues its hardening cycle with significant focus on security isolation in CI/CD pipelines and tool permission enforcement. A critical fix landed to make `permissions.allow` actually restrict the tool schemas sent to the model (previously only UI-visible), and the /review system continues to evolve with workflow-engine orchestration and container-boundary execution for reviewed code. Notably, the community raised the first public question about Qwen Code's relationship with craft-agents-oss — a project with nearly identical appearance that even shares sessions.

## Releases
**v0.22.0-nightly.20260824.3a1f86d805** — Nightly release containing a single fix:
- `fix(web-shell)`: pass session workspace cwd when opening from overview panel (#9730)

---

## Hot Issues

1. **[#9827 — permissions.allow does not restrict tool schemas sent to the model](https://github.com/QwenLM/qwen-code/issues/9827)**  
   Critical permission bug: `permissions.allow` (and legacy `tools.core`/`tools.exclude`) only affects what `/tools` displays in the UI, but the actual API request still includes the full built-in tool set. A fix PR (#9829) is already open. High impact for security-conscious users; 4 comments within 24 hours.

2. **[#9089 — PAT-bearing jobs share a host with untrusted branch code](https://github.com/QwenLM/qwen-code/issues/9089)**  
   Security finding that **cannot be closed from inside a GitHub Actions step** — requires runner-level isolation. The autofix system identified that PAT-bearing jobs in autofix workflows run on the same host as untrusted branch code. Follow-up on the `global-driver` incident. Closed but represents a fundamental security architecture concern.

3. **[#5975 — API Error: No stream activity for 120000ms after 19 chunks](https://github.com/QwenLM/qwen-code/issues/5975)**  
   The highest-voted open issue (11 comments, 1 👍). Since v0.19.3, users experience frequent stream stalls — the client waits 120 seconds then errors. Originally reported June 29, still unresolved; recurring latency/stream reliability theme.

4. **[#9831 — Relationship with craft-agents-oss?](https://github.com/QwenLM/qwen-code/issues/9831)**  
   New community question: a project called craft-agents-oss has nearly identical appearance and **even shared sessions**. Potentially concerning for users — could indicate a fork, rebranding, or unauthorized copy. Only 2 comments so far but likely to grow.

5. **[#9821 — Native slash commands intermittently missing from Skill-tool surface](https://github.com/QwenLM/qwen-code/issues/9821)**  
   Nondeterministic race condition: user-level native slash commands fail ~50% of the time with "not found" on the Skill tool surface. Bundled skills always work. Affects versions 0.21.8+. Only 3 comments but clearly a frustrating reproducibility issue.

6. **[#9219 — /review presubmit overlap matching is exact-line only](https://github.com/QwenLM/qwen-code/issues/9219)**  
   The `/review` presubmit's duplicate detection misses multi-line ranges and semantic duplicates — a real gap that failed to catch a duplicate in PR #9204. Maintainer-reported (wenshao), 5 comments. Part of the ongoing /review hardening cycle.

7. **[#9428 — Default-off Cursor SDK-backed coding subagent](https://github.com/QwenLM/qwen-code/issues/9428)**  
   Feature request to add a `cursor-coder` subagent, gated behind the presence of `CURSOR_API_KEY`. Signals community interest in multi-agent orchestration and integrating with other agent ecosystems.

8. **[#9595 — Reasoning effort missing before lazy session creation](https://github.com/QwenLM/qwen-code/issues/9595)**  
   WebShell UI bug: lazily-created sessions without a `sessionId` show the model but hide Thinking/effort controls. Closed, but reflects the community's focus on model reasoning controls in the WebShell UI.

9. **[#9816 — DaemonClient workspace helpers throw "Invalid URL"](https://github.com/QwenLM/qwen-code/issues/9816)**  
   SDK bug: `#9734` fixed `readWorkspaceFileBytes` for relative daemon base URLs (e.g. `/daemon`), but **six sibling methods** still use absolute-only `new URL(...)`. Affects Web Shell integrations; 2 comments, likely to be fixed soon.

10. **[#8662 — Migrate TUI rendering layer from ink to OpenTUI](https://github.com/QwenLM/qwen-code/issues/8662)**  
    Architecture proposal: replace ink 7 + React 19 (with a ~1037-line patch and custom Virtual Viewport) with OpenTUI for flicker-free rendering and first-class mouse support. P3, needs discussion — signals growing pain with the current TUI stack.

---

## Key PR Progress

1. **[#9829 — fix(core): make permissions.allow restrict tool schemas sent to the model](https://github.com/QwenLM/qwen-code/pull/9829)**  
   Direct fix for issue #9827: registered tools excluded by `permissions.allow` are now removed from the registry entirely — they disappear from `/tools` **and** the API request. This is the security fix the settings docs promised.

2. **[#8943 — feat(review): dispatch Step 3A's fan-out from a generated workflow script](https://github.com/QwenLM/qwen-code/pull/8943)**  
   Moves `/review`'s Step 3A fan-out from hand-launched orchestration to code-driven dispatch via `qwen review emit-workflow`. Opt-in, one switch to revert. Part of the workflow-engine migration theme.

3. **[#9723 — feat(review): run the reviewed repository's own commands behind a container](https://github.com/QwenLM/qwen-code/pull/9723)**  
   A review now executes the code it reviews **inside a container boundary** — makes execution a policy the operator sets, not a property of the environment. Directly addresses the security concerns raised in #9089.

4. **[#9565 — feat(core): add the output-style layer to the system prompt](https://github.com/QwenLM/qwen-code/pull/9565)**  
   Adds named output styles (Concise, Proactive, etc.) — a session-wide instruction block that changes how the agent reports work. Four built-in styles. A notable UX/product feature.

5. **[#9590 — feat: support provider-aware reasoning controls](https://github.com/QwenLM/qwen-code/pull/9590)**  
   Adds provider/endpoint-aware WebShell reasoning controls for DeepSeek V4, GLM 5.2, and Kimi: toggle-only hybrids, canonical effort tiers, and mandatory-thinking models without an off switch. Request adapters transformed accordingly.

6. **[#9829-area — feat(ci): request an area reviewer on PRs by changed-file paths](https://github.com/QwenLM/qwen-code/pull/9813)**  
   Companion to label-driven issue assignment (#8668): a standalone workflow that requests an area owner review based purely on changed-file paths. Improves review routing efficiency.

7. **[#8925 — fix(cli): fail structured output on API errors](https://github.com/QwenLM/qwen-code/pull/8925)**  
   Non-interactive output formats (structured output consumers) now receive exactly one terminal error result instead of success-with-error-text. Fixes silent failure in scripting contexts.

8. **[#9013 — fix(core): reject malformed Anthropic tool arguments](https://github.com/QwenLM/qwen-code/pull/9013)**  
   Completed Anthropic tool arguments are validated as strict JSON objects before execution. Calls held as a message-level batch until a terminal stop reason arrives — prevents malformed tool calls from becoming executable.

9. **[#9113 — fix(core): sniff image content before read](https://github.com/QwenLM/qwen-code/pull/9113)**  
   Defensive file-type detection: sniffs common image magic numbers, reads valid UTF-8 text saved with image extensions as text, and rejects binary content whose magic disagrees with the extension. Prevents misclassification vulnerabilities.

10. **[#9582 — fix(telemetry): roll back replayed usage when a session swap fails](https://github.com/QwenLM/qwen-code/pull/9582)**  
    `UiTelemetryService` gains snapshot/restore pair — telemetry replay becomes undoable when a session swap fails, dropping the bucket rather than leaking it. Prevents double-counted usage stats.

---

## Feature Request Trends

1. **Workflow-engine migration for /review orchestration** (#8769, #8943): Multiple proposals to move `/review` Step 3–5 orchestration from model-driven execution to deterministic code on the workflow engine — fan-out structure, per-agent prompts, and loop convergence become predictable.

2. **Multi-agent ecosystem integration** (#9428, #8586): Requests for Cursor SDK-backed subagents and background Agent recovery via explicit `activeWork` facts in daemon health. The community wants richer agent orchestration and resilience.

3. **Session-management robustness** (#8586, #8094, #9562): Deep health reporting, recovery from transport-continuation mid-sentence transcript resumption, and Web Shell session catalog refresh loops. Users want reliable resumption and state tracking.

4. **External context sharing** (#7585): A "Direct External Context Provider Profile" for private monorepos with on-demand and Auto Recall profiles — shared repository context across CLI processes.

5. **UI/UX modernization** (#8662, #9743): OpenTUI migration for flicker-free rendering and drag-drop file support in the VS Code Companion — the community is pushing for a more polished terminal and IDE experience.

---

## Developer Pain Points

1. **Stream reliability under load** (#5975): The most persistent issue — stream activity timeouts after 19+ chunks (120s idle → error). Recurring across versions; users report model responses stalling after "Thought for 2s". This has been open since June with 11 comments but no fix yet.

2. **Permission model disconnect** (#9827): Configuring `permissions.allow` creates the **illusion of restriction** — tools are hidden from UI but still sent to the model in the API request. This is both a security concern and a trust issue for users relying on allowlists.

3. **Tool determinism and race conditions** (#9821, #675): Nondeterministic failures — native slash commands intermittently missing (50% failure rate) and React duplicate-key errors on custom base URLs. Intermittent bugs consume disproportionate debugging time.

4. **Auth friction** (#9016): Vertex AI cannot authenticate with Application Default Credentials — requires API key, but any key value produces 401 from Vertex. Authentication is a recurring frustration for cloud-backed deployments.

5. **Continuous integration security burden** (#9089, #9219): The autofix/review infrastructure itself generates security debt — PAT-bearing jobs sharing hosts with untrusted code, and review overlap detection missing semantic duplicates. The community is iterating on reliable, secure automation.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-24

## Today's Highlights

The v0.9.12 release cycle has launched with an aggressive must-fix tracker addressing runaway spend, subagent lifecycle bugs, and role-posture drift, highlighted by two critical v0.9.11 regressions where read-only review subagents burned ~347k tokens due to a git command rejection and silently lost completed work on turn-end cancellation. A major supervised-operation stack (control socket, lifecycle outbox, `/relaunch`) landed as separate PRs under review, while a model-bound tool-output redaction fix shored up v0.9.11 pre-tag truthfulness. CI coverage for non-mirrored PR branches was temporarily fixed (#5590) but remains open as a broader reliability concern.

---

## Releases

**v0.9.11** was tagged and published, introducing the **Codewhale** public product branding from Shannon Labs. The legacy `deepseek-tui` npm package is deprecated and frozen; all releases move to the lowercase `codewhale` command/package. This release also bundled a model-bound tool-output redaction fix for `read`/shell results using a credential-shaped policy. A docs-only PR (#5565) covers an unpublished-tag recut workflow used during this release. Users on v0.8.x `deepseek` legacy are on a discontinued train and must plan migration.

---

## Hot Issues

1. **[#5573 — v0.9.12 milestone tracker]** — Central board for the current cycle. P0 set: runaway-spend bounds (#5566), verifier contradiction (#5575), and role-posture drift. Essential reading for any contributor.
   
2. **[#5596 — Turn end silently cancels turn-owned subagents]** — Subagents die without warning at parent turn end even though UI promises background completion; observed loss of a long-running reviewer's work. Reliability blocker for the v0.9.12 gate.
   
3. **[#5595 — Read-only children reject `git -C` at execute time]** — A reviewer spent ~347k tokens with zero findings because the op-classifier/execution-envelope mismatch blocked the canonical inspection command. A costly, embarrassing production bug.
   
4. **[#5583 — `responseSchema` failures skip bounded repair]** — Workflow tasks return malformed JSON → fatal failure with no retry or raw-output receipt. Users demand bounded self-repair without losing the evidence.
   
5. **[#5582 — Owner snapshots collapse Degraded into Completed]** — A degraded workflow owner is misrepresented as completed in status projections. Silent status lie, dangerous for automation.
   
6. **[#5575 — Role posture has no single source of truth]** — Verifier contradiction was the symptom; at least five independently drifting role definitions exist across the workspace. Architecture debt with live safety impact.
   
7. **[#5547 — CI skips Linux tests on non-mirrored branches]** — `ubuntu` leg is a placeholder; PRs on e.g. `codex/*` never run the full Rust suite on GitHub. A temporary fix landed (#5590), but the structural gap remains.
   
8. **[#5585 — Stack overflow in setup toast test]** — Pre-existing SIGABRT on `main` and `codex/v0912-integration-20260823`; reproducible on macOS. Not 0.9.12-introduced but needs investigation.
   
9. **[#5587 — Dead-code sweep phases 2–4]** — Continued audit plans: 75 test-only markers, ~242 stale allows, blanket-allow conversions. Only 18 confirmed Tier-B/C dead items remain; the rest need documentation or harness conversion.
   
10. **[#5103 — Rename DeepSeekClient legacy internals]** — Provider-neutral naming still pending. Config helpers, engine fields, and errors expose "deepseek" even on non-DeepSeek routes; confusing for custom-provider users.

---

## Key PR Progress

1. **[#5576 — 0.9.12 integration WIP]** — 24-commit branch carrying R2 approval-scope fix, R3 SSE error frames, R4 spend binds. Not ready for merge; the must-fix surface is tracked in #5573.
   
2. **[#5594 — Control socket (final part)]** — Opt-in Unix-only JSON-RPC socket per session for supervised operation; default OFF. Part D completes a multi-PR supervised stack.
   
3. **[#5593 — `/relaunch` command]** — Session switches to the current binary in one step after `/update`: save, restore, flush telemetry, session_end, relaunch. Completes the missing self-relaunch flow.
   
4. **[#5592 — Lifecycle outbox]** — Opt-in JSONL per-lifecycle-event to a config file for both interactive and headless runs; no shell hooks needed. Supervised long-lived sessions become far more observable.
   
5. **[#5591 — Goal continuation cadence fix]** — `[goal] continuation_delay_seconds` was wired to only one of two dispatch paths; within-turn hook had zero wait. Prevents tight-loop continuations.
   
6. **[#5584 — Persist child approval receipts]** — Approval prompts now commit durable `Asked` + terminal evidence before/after exposure. Closes #5543; fixes in-memory-only grant evidence.
   
7. **[#5545 — Beijing weekend off-peak billing]** — `deepseek_is_peak` now honors the new Sunday-weekend entire-day off-peak rule (effective 2026-08-23). Money fix for heavy weekend users.
   
8. **[#5561 — Auto-retry reasoning-only clean-stop]** — A reasoning model returning only hidden reasoning + clean stop no longer dead-ends the turn; automatic resubmit replaces the manual "incomplete response" retry.
   
9. **[#5524 — Multi-file `read_lints` operation]** — LSP tool gained batch `read_lints` over multiple workspace-relative files, reusing the session's LSP manager/transport pool. Closes #4070 scope.
   
10. **[#5563 — Show all providers on first run]** — First-run picker now shows hosted APIs (including DeepSeek) instead of defaulting to the local-only view that hid them behind a keypress; addresses the “only local models” misread.

---

## Feature Request Trends

- **Supervised operation/automation** — Clear dominant direction: control sockets, lifecycle outboxes, `/relaunch`, machine-readable session supervision. Users want long-lived, automatable, headless-friendly runs.
- **Provider-neutral architecture** — Renaming legacy DeepSeek internals, extracting Responses-dialect policy into language-neutral conformance harnesses, provider-profiled behavior tables. The multi-provider future is explicit.
- **Code intelligence depth** — Repeated asks: AST-backed search, LSP navigation/refactor/rename, debugger adapter surfaces, notebook/archive reads. The gap between “fetch and grep” and true IDE-grade agent tooling.
- **Safety and accounting** — Bounded spend defaults (`max_steps`/wall-clock), approval-receipt persistence, structured survival contracts for compaction, model-bound tool-output redaction. Money and data safety remain top-of-mind.

---

## Developer Pain Points

- **Hidden spend:** Unbounded default step counts + inert tool-call budgets mean unattended runs can rack up huge bills (347k-token subagent incident is an extreme example). Fixes are shipping, but the defaults remain dangerous in the interim.
- **Silent state lies:** Degraded→Completed collapses, subagents killed at turn end without warning, role-posture contradictions all mislead users and downstream automation. Several are fixed in the current branch, but they keep recurring because of fragmented ownership and hard-coded registries.
- **CI blind spots:** Non-mirrored PR branches skip the full Linux workspace suite; only a temp fix exists so far. Contributors on arbitrary branch prefixes get misleading green checks.
- **Naming debt:** The legacy “DeepSeek” naming scattered through engine internals, config helpers, and error messages confuses anyone on non-DeepSeek providers and adds migration risk.
- **Codebase sprawl:** ~771k Rust lines, 18 crates, with 87% still in `codewhale-tui`; duplicates like JobManager/TaskManager, two runtime paths, and the 3.8k-line setup wizard keep the maintenance tax high. Dead-code sweeps are welcome but slow.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*