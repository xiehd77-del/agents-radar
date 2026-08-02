# AI CLI Tools Community Digest 2026-08-02

> Generated: 2026-08-02 02:55 UTC | Tools covered: 9

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
**Date:** 2026-08-02

---

## 1. Ecosystem Overview

The AI CLI developer tools ecosystem is entering a **stability-and-trust phase** after a period of rapid feature expansion. Across all eight tools surveyed (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI), the dominant themes are **session reliability**, **cost/billing transparency**, and **context management correctness** — not new features. Communities are increasingly vocal about silent failures: model downgrades without consent (Claude Code), transcript corruption from simple actions (Claude Code, Copilot CLI), and unrecoverable sessions (OpenAI Codex, Gemini CLI). The ecosystem is bifurcating between **enterprise-grade tools** focused on governance and spend control (Claude Code, Copilot CLI, OpenCode) and **power-user tools** prioritizing TUI flexibility and provider breadth (Pi, DeepSeek TUI, Gemini CLI). Cross-ecosystem compatibility (Claude Code skill frontmatter in Pi, SKILL.md support in Kimi) suggests convergence on standard formats.

---

## 2. Activity Comparison

| Tool | Hot Issues (24h) | Key PRs (24h) | Release Status | Velocity Signal |
|---|---|---|---|---|
| **Claude Code** | 10 (high severity: OOM, data corruption, billing) | 3 (all closed, unusually low) | No release (last: 2.1.220) | **Low velocity + high severity** |
| **OpenAI Codex** | 10 (Diff view crash, Windows process storm) | 11 (10 merged, 1 open) | No release | **High PR throughput, active iteration** |
| **Gemini CLI** | 10 (subagent misreporting, shell hangs) | 10 (2 merged, 8 open) | Nightly v0.55.0-nightly | **Very active, sustained PR pipeline** |
| **GitHub Copilot CLI** | 10 (session resumption, BYOK bugs) | 0 (none updated) | Patch v1.0.78-2 shipped | **Moderate velocity, release-focused** |
| **Kimi Code CLI** | 5 (memory system, web UI hangs) | 6 (all open, community-contributed) | No release | **Community-driven PR momentum** |
| **OpenCode** | 10 (Go billing outage, privacy concerns) | 10 (features + fixes) | v1.18.11 shipped | **High velocity, feature-rich releases** |
| **Pi** | 10 (compaction failures, terminal bugs) | 10 (7 closed, 3 open) | No release | **Steady, correctness-focused** |
| **Qwen Code** | 10 (prompt-cache, TUI UX) | 10+ (autofix pipeline active) | v0.21.3 + nightly shipped | **Very high velocity, CI-driven** |
| **DeepSeek TUI** | 10 (secrets management, release blockers) | 10 (mix of fixes + features) | v0.9.4 RC (open PR) | **High, release-candidate focus** |

**Notable observations:**
- **OpenAI Codex, Qwen Code, OpenCode, and DeepSeek TUI** are the most actively releasing/iterating.
- **Claude Code** shows the most concerning pattern: low PR activity but severe bugs (ugrep OOM, transcript corruption).
- **Copilot CLI and Kimi** have the lowest activity, with Copilot CLI shipping a single patch and Kimi relying entirely on community PRs.

---

## 3. Shared Feature Directions

### 3.1 Persistent Memory Across Sessions
- **Tools:** Kimi Code (#1283, 5-month open), OpenCode (#20322, #32658), Claude Code (context management)
- **Need:** Both AI-managed automatic memory and user-defined manual memory (CLAUDE.md-style files) that persist across sessions without plugin configuration.

### 3.2 Context Compaction Control
- **Tools:** OpenAI Codex (#31033, #18490), Pi (#6879, #7020), Qwen Code (#8279), DeepSeek TUI (#5064), Claude Code (#83233)
- **Need:** Users want granular control over when/how context is compacted, visibility into what was lost, and stable prompt-cache prefixes to reduce cost. Compaction failures (missing messages, unrecoverable sessions) are a top reliability concern.

### 3.3 Billing & Usage Transparency
- **Tools:** Claude Code (#80750, #83231, #81015), OpenAI Codex (#36528), OpenCode (#38257, #40064)
- **Need:** Real-time spend dashboards, read-only usage tokens, and visibility into what the agent is doing before it incurs cost. Users are being surprised by bills ($19 GCP, 50% monthly usage on compaction).

### 3.4 MCP Lifecycle Hardening
- **Tools:** Copilot CLI (#2901, #4323), Gemini CLI, Kimi Code (#2574), OpenCode (#23506, #40111)
- **Need:** Lazy MCP server connection, per-server TLS/cert config, comments in .mcp.json, and fixes for hangs/reconnect loops. Both enterprise and hobby users report fragility.

### 3.5 Session Durability & Crash Recovery
- **Tools:** Pi (#7466), OpenCode, Copilot CLI (#4325, #4329), Gemini CLI (#27310), Claude Code (#73638)
- **Need:** Pre-dispatch persistence, no transcript corruption on user actions, and the ability to resume sessions after crashes without losing state or autopilot modes.

### 3.6 Voice Input & Accessibility
- **Tools:** OpenAI Codex (#14630, 49👍), Claude Code (#42700), Gemini CLI
- **Need:** Voice transcription in the TUI (not OS-level dictation), bindable keyboard actions, TTS readback.

### 3.7 Model Selection & Provider Flexibility
- **Tools:** Copilot CLI (#3282, #2904), Claude Code (#82466, #83233), Gemini CLI (#27131, #27550), DeepSeek TUI (#5034), OpenCode (#38257)
- **Need:** Multiple BYOK models switchable in-session, per-agent reasoning effort, provider-scoped defaults, transparent model attribution, and no silent downgrades.

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|---|---|---|---|
| **Claude Code** | Agentic coding with guardrail safety; deep IDE integration | Enterprise developers; Anthropic subscription users | Embedded dependencies (ugrep); V8-based binary; hosted CLI + VS Code extension |
| **OpenAI Codex** | Best-in-class coding agents with Desktop + TUI; multi-agent V2 sessions | OpenAI Pro/Ultra subscribers; Windows power users | Rust core (taskkill issue), Desktop app + CLI + VS Code extension; agent plugin portfolio |
| **Gemini CLI** | Research-grade agent evaluation; subagent trajectories; sandboxing | Google AI users; research/evals; Docker/Podman sandbox enthusiasts | Node.js on AST/TS tooling; heavy Dogfooding; nightly releases; Auto Memory system |
| **GitHub Copilot CLI** | GitHub-native workflows; autopilot; BYOK flexibility | GitHub Enterprise; Docker sandbox users; Copilot Pro subscribers | Rust core (TS interop errors); tight GitHub integration; MSIX packaging |
| **Kimi Code CLI** | Python-based simplicity; hook extensibility; web UI | Moonshot AI users; Python developers; hook-based CI workflows | Python (asyncio, Pydantic); Fire-and-forget hooks; VS Code extension |
| **OpenCode** | Unified agent runtime across Desktop/Web/TUI/CLI; marketplace | Go subscribers; multi-surface power users; privacy-focused | TypeScript; unified marketplace vision; SSE event architecture |
| **Pi** | Terminal-first TUI purity; provider breadth; coding-agent framework | Terminal purists; self-hosters; Node ecosystem | TypeScript; @earendil-works/pi-ai abstractions; switchable renderers |
| **Qwen Code** | Qwen model integration; enterprise serve daemon; review tooling | QwenLM enterprise users; GitHub/GitLab channel automation | TypeScript; autofix pipeline; GitHub-channel integrations; ACP protocol |
| **DeepSeek TUI** | DeepSeek-v4 focus; TUI ergonomics; multi-lingual support | DeepSeek users; global developers; Rust ecosystem | Rust; bubblewrap sandbox; Fleet UI; universal i18n roadmap |

**Key differentiators:**
- **Approach to safety:** Claude Code (guardrails with silent downgrade — controversial), Gemini CLI (sandboxing by default), DeepSeek TUI (`danger-full-access` that users say doesn't go far enough), Copilot CLI (autopilot that can override user intent).
- **Extension model:** OpenCode's unified marketplace vs. Kimi's hook system vs. Copilot CLI's custom agents vs. Claude Code's plugins — the ecosystem has not converged.
- **TUI philosophy:** Pi and DeepSeek TUI treat the terminal as the primary surface; Claude Code, Codex, Copilot CLI prioritize IDE/desktop integration.
- **Target user split:** OpenCode, Claude Code, and Copilot CLI target paid subscription users with spend/usage tracking; Gemini CLI, Pi, and Qwen Code offer more open/free tiers but with heavier configuration overhead.

---

## 5. Community Momentum & Maturity

| Tool | Community Score | Delta (24h) | Maturity Signal |
|---|---|---|---|
| **Claude Code** | ████████░░ 8/10 | +3 hot issues, all severe | Mature but **stagnating**; high severity accumulation |
| **OpenAI Codex** | █████████░ 9/10 | +11 PRs, 1 crash issue with 112👍 | **Rapidly maturing**; High PR throughput balanced with new-user-facing bugs |
| **Gemini CLI** | ██████████ 10/10 | 50 items updated, 10 PRs | **Highly active, research-grade** engagement; nightly releases |
| **GitHub Copilot CLI** | ███████░░░ 7/10 | 20 items, 1 patch release | **Steady but slower**; focus on release stability over experiment |
| **Kimi Code CLI** | █████░░░░░ 5/10 | 5 issues, 6 PRs (all community) | **Community-growing**; maintainer bandwidth limited but responsive |
| **OpenCode** | ████████░░ 8/10 | 10 issues, 10 PRs | **Rapid iteration**; billing outages show scale but drag reputation |
| **Pi** | ████████░░ 8/10 | 10 issues, 10 PRs | **Steady, deep technical** engagement; correctness-focused |
| **Qwen Code** | █████████░ 9/10 | 10+ PRs, 3 releases (incl. nightlies) | **Extremely active, CI-driven**; autofix pipeline shows maturity |
| **DeepSeek TUI** | █████████░ 9/10 | 10 issues, 10 PRs | **Release-blocker disciplined**; maintainer actively burning debt |

**Most active communities:** Gemini CLI (50 items/day), Qwen Code (autofix pipeline), DeepSeek TUI (release-blocker discipline).
**Fastest iterating:** Qwen Code, OpenCode, Gemini CLI.
**Most mature but at risk:** Claude Code (low PR velocity vs. severe bugs), Copilot CLI (pacing slower but release discipline visible).
**Quiet but dangerous:** Claude Code's ugrep OOM + transcript corruption is a **host-crashing data-loss bug** — severity outpaces recent PR velocity.

---

## 6. Trend Signals

### 6.1 Consolidation Around "Context Governance"
The clearest industry trend is **user demand for explicit control over context lifecycle**. This spans compaction thresholds, prompt-cache stability, memory systems, and session durability. Tools that solve this well (Qwen Code's prompt-cache reuse, Pi's compaction reliability, Copilot CLI's plan integrity) will win developer trust. Expect a standard for "compaction contracts" (bounded working set, active intent, verification evidence) emerging in the next 6 months.

### 6.2 The "Silent Failure" Backlash
Multiple tools share a trust-breaking pattern: **models downgrading without consent** (Claude Code #83233), **autopilot overriding user intent** (Copilot CLI #4318), **subagents reporting success after failure** (Gemini CLI #22323). The community is signaling that **explainability at the tool-action level** is non-negotiable. Tools that implement "review before applying" for guardrails and actions will differentiate.

### 6.3 Financial Transparency as a Feature
Both Claude Code and OpenCode are grappling with **unexpected bills and opaque usage**. The expectation is shifting from "trust us with billing" to **real-time spend dashboards with read-only scopes** (Claude Code #81015, OpenCode #40064). Expect API-level spend telemetry to become a standard offering across all tools within a year.

### 6.4 Cross-Ecosystem Format Convergence
Claude Code's `SKILL.md` frontmatter being adopted by Pi (#7468) and Kimi, plus the "unified marketplace" vision in OpenCode (#40108), signals **convergence around portable agent/skill formats**. The ecosystem is moving toward a shared package standard, which will reduce lock-in and accelerate multi-tool adoption.

### 6.5 Windows and Mobile Gaps Are Maturing
Windows remains the hardest platform: Codex's `taskkill.exe` storms, Copilot CLI's WSL2 quirks, Kimi's GBK console crashes, and Claude Code's WSL2 OOM all point to **cross-platform parity as a major competitive battleground**. Mobile (Termux, #7321) and legacy terminal support are rising priorities for Pi and Kimi.

### 6.6 Security and Trust Compliance
OpenCode's Go outage and the DeepSeek TUI credential-storage issue show **security edges are eroding subscriber trust**. Expect OS-level keychain integration, deterministic redaction before model context (Gemini CLI #26525), and stricter secrets handling (DeepSeek TUI #5045/#5047) to become baseline expectations.

---

**Bottom line for technical decision-makers:**
- **Prioritize context governance** — compaction controls, memory systems, and session durability are table-stakes.
- **Budget for billing transparency** — usage dashboards catch up only after financial incidents; invest early.
- **Standardize on cross-tool formats** — skills, plugins, and MCP configs that work across tools reduce lock-in.
- **Watch Claude Code's ugrep OOM and Codex's Diff view** — they signal infrastructure-level regressions that may affect production workflows.
- **Choose tools based on their web-of-trust** — active communities (Gemini CLI, Qwen Code) tend to fix bugs faster than quiet ones (Claude Code).

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Based on the data provided from the anthropics/skills repository (as of 2026-08-02), here is the community highlights report:

---

## 1. Top Skills Ranking (Most-Discussed PRs)

These are the PRs receiving the highest volume of attention and iterative development, largely driven by critical bug fixes and user feedback.

- **[PR #1298: fix(skill-creator): run_eval.py always reports 0% recall](https://github.com/anthropics/skills/pull/1298)** — *Author: MartinCajiao | Status: Open*
  - **Functionality:** Fixes the `skill-creator` optimization loop, which was reportedly optimizing descriptions against noise (always scoring 0% recall) due to faulty evaluation artifact installation and parallel worker handling.
  - **Highlights:** This is a high-priority fix, referencing a major bug (#556 with 12 comments). It addresses core functionality for skill creators—the optimization of skill descriptions to ensure they trigger correctly.
  - **Status:** Open (Updated 2026-06-23)

- **[PR #514: Add document-typography skill](https://github.com/anthropics/skills/pull/514)** — *Author: PGTBoos | Status: Open*
  - **Functionality:** A quality-control skill that automatically prevents common typographic issues in generated documents (e.g., orphan word wrap, widow paragraphs, numbering misalignment).
  - **Highlights:** High community interest due to its broad applicability to any document Claude generates. The discussion likely focuses on the specific edge cases and rules for typographic fixes.
  - **Status:** Open (Updated 2026-03-13)

- **[PR #486: Add ODT skill](https://github.com/anthropics/skills/pull/486)** — *Author: GitHubNewbie0 | Status: Open*
  - **Functionality:** A skill for creating, filling, reading, and converting OpenDocument Format files (.odt, .ods), addressing a gap for open-source document standards.
  - **Highlights:** Represents a demand for expansion beyond standard `.docx` and `.pdf` into open-source ISO standard formats, particularly for LibreOffice users.
  - **Status:** Open (Updated 2026-04-14)

- **[PR #1367: Add self-audit skill](https://github.com/anthropics/skills/pull/1367)** — *Author: YuhaoLin2005 | Status: Open*
  - **Functionality:** A universal skill that audits AI output before delivery. It performs mechanical verification (checking files exist) followed by a four-dimension reasoning audit.
  - **Highlights:** Aims to be a critical safety and quality gate for agentic workflows. It addresses significant concerns about AI systems claiming work they haven't done.
  - **Status:** Open (Updated 2026-07-02)

- **[PR #723: feat: add testing-patterns skill](https://github.com/anthropics/skills/pull/723)** — *Author: 4444J99 | Status: Open*
  - **Functionality:** A comprehensive skill covering the full testing stack, including philosophy (Testing Trophy), unit testing patterns (AAA), and React component testing with Testing Library.
  - **Highlights:** Indicates a strong demand for structured guidance in test generation and best practices, showing the community's focus on code quality and reliability.
  - **Status:** Open (Updated 2026-04-21)

- **[PR #525: Add pyxel skill for retro game development](https://github.com/anthropics/skills/pull/525)** — *Author: kitao | Status: Open*
  - **Functionality:** A skill that integrates with `pyxel-mcp`, a server for the Pyxel retro game engine. It covers the workflow of writing, running, capturing, and iterating on pixel-art games.
  - **Highlights:** Demonstrates the ecosystem expanding into creative and entertainment domains, leveraging MCP integration to enable a complete interactive development loop.
  - **Status:** Open (Updated 2026-07-15)

- **[PR #83: Add skill-quality-analyzer and skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** — *Author: eovidiu | Status: Open*
  - **Functionality:** A "meta-skill" that evaluates other skills across five dimensions, including structure, documentation, and resource quality
  - **Highlights:** The community is actively building tools to govern the Skill ecosystem itself, creating standards for quality and security as the number of Skills grows.
  - **Status:** Open (Updated 2026-01-07)

---

## 2. Community Demand Trends

Based on the most-commented issues, the community's highest demand centers on:

- **Reliability & Tooling of Skill Creation:** This is the loudest signal. There are multiple, long-running issues regarding the `skill-creator` scripts being broken on Windows (issues #1061, #556) and consistently failing to detect triggers (reporting 0% recall). There is a clear demand for the foundational dev tooling to be reliable and cross-platform.
- **Security and Trust Boundaries:** The #1 issue (with 43 comments) highlights a complex security vulnerability—community skills distributed under the `anthropic/` namespace could lead to "trust boundary abuse" and elevated permissions. This shows a high demand for security clarity, provenance, and validation of Skills.
- **Enterprise & Governance:** Related issues and PRs show interest in using Skills for enterprise workflows: org-wide sharing (#228), agent governance (#412), and stricter output quality gates (self-audit #1367).
- **Collaboration & Sharing:** There is significant demand for an organization-level skill-sharing mechanism within Claude.ai (#228), as the current manual file-sharing workflow is cumbersome.

---

## 3. High-Potential Pending Skills

These PRs have active discussions and address pressing community needs, making them likely to be merged soon:

- **[PR #538: fix(pdf): correct case-sensitive file references](https://github.com/anthropics/skills/pull/538)** — *Author: Lubrsy706 | Status: Open*
  - A straightforward but critical fix for the `pdf` skill, addressing 8 case-sensitivity mismatches in file references that breaks functionality on case-sensitive file systems.

- **[PR #541: fix(docx): prevent tracked change w:id collision](https://github.com/anthropics/skills/pull/541)** — *Author: Lubrsy706 | Status: Open*
  - A significant bug fix preventing document corruption when adding tracked changes to files with existing bookmarks. Very likely to merge due to the clear value of fixing data corruption.

- **[PR #1479: Add plan-file-hygiene skill](https://github.com/anthropics/skills/pull/1479)** — *Author: Palo-Alto-AI-Research-Lab | Status: Open*
  - Addresses a well-known lifecycle gap where planning artifacts accumulate without a defined lifecycle. The PR directly references and credits community discussion, signaling alignment with maintainer concerns.

- **[PR #1302: Add color-expert skill](https://github.com/anthropics/skills/pull/1302)** — *Author: meodai | Status: Open*
  - A comprehensive, expert-level skill covering color naming systems, spaces, and usage tables. It is a polished, self-contained skill with potential for wide use in design and data visualization.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **reliable, secure, and cross-platform tooling for the Skill-building process itself (specifically fixing the `skill-creator` optimizer), even before the Skills it helps create become widely distributed.**

---

# Claude Code Community Digest — 2026-08-02

## 1. Today's Highlights

The most significant community concern this week centers on **Fable 5's guardrails producing false positives on routine sysadmin work**, silently downgrading sessions to Opus 5 without user consent or explanation (#83233). Alongside this, **two separate OOM incidents** related to the embedded ugrep wrapper (#54394, #82230) highlight persistent memory-safety concerns with the grep shim. Finally, **a cluster of newly filed issues around spend visibility and billing transparency** (#83231, #80750) suggests growing demand for better cost observability. No new releases landed in the last 24 hours.

## 2. Releases

No new versions of Claude Code were published in the last 24 hours. The latest known release remains **2.1.220**.

## 3. Hot Issues

Here are the 10 most significant issues currently open on the repository:

**1. VS Code: Disable auto-attach of open file/selection** ([#24726](https://github.com/anthropics/claude-code/issues/24726))  
*197 👍 | 64 comments* — The longest-running request on this list, open since February. Users want a setting to prevent Claude Code from automatically attaching the currently open file/selection to prompts in the VS Code extension. The high reaction count and sustained discussion indicate this is a workflow-disrupting behavior for many.

**2. ugrep wrapper OOM: regex backtracking → 8GB V8-heap OOM on WSL2** ([#54394](https://github.com/anthropics/claude-code/issues/54394))  
*19 comments* — Critical WSL2 issue where `grep` routing through the embedded ugrep amplifies regex backtracking, crashing the host. A companion issue (#82230) reports ~29GB RSS allocation on bounded-quantifier regexes — this appears to be a systemic problem with the ugrep integration.

**3. Session rename mid-tool-call corrupts transcript permanently** ([#73638](https://github.com/anthropics/claude-code/issues/73638))  
*8 comments* — Data-corruption bug: renaming a session while a `server_tool_use` call is in-flight injects a synthetic user turn between tool blocks, causing 400 errors on every subsequent prompt. Permanent transcript corruption is a severe reliability issue.

**4. Default model not honored at session start** ([#82466](https://github.com/anthropics/claude-code/issues/82466))  
*6 comments* — `settings.json` model configuration (`claude-fable-5[1m]`) is ignored at launch, and `/model` doesn't reliably switch. Given the concurrent Fable 5 guardrail controversy (#83233), this may be related — users are being placed on models they didn't select.

**5. Background agents idle without delivering final report** ([#74113](https://github.com/anthropics/claude-code/issues/74113))  
*5 👍 | 6 comments* — Background agents frequently stall before delivering their final `SendMessage` report. Re-pinging recovers it. Documentation error for users of background tasks.

**6. Fable 5 guardrails false-positive → silent downgrade to Opus 5** ([#83233](https://github.com/anthropics/claude-code/issues/83233))  
*Filed today* — Routine sysadmin work triggers Fable 5 safety guardrails, which silently switch the session to Opus 5 with no indication of what was flagged. This is a consent issue and a transparency problem. Likely to gain traction quickly given its implicit tie to #82466.

**7. Usage credits consumed while plan allowance remains; 5-hour window never starts** ([#80750](https://github.com/anthropics/claude-code/issues/80750))  
*2 👍 | 2 comments* — Users report being billed for "extra usage" while plan allowance is still available, and enabling extra usage prevents the plan window from starting. Billing logic confusion with financial impact.

**8. Idle VSCode sessions: native-binary child spinning at 100% CPU for days** ([#75630](https://github.com/anthropics/claude-code/issues/75630))  
*1 comment* — Resource leak: idle sessions keep a child process pegged at 100% CPU indefinitely. Related new issue #83237 gives thread-level attribution for the newer 2.1.220 build.

**9. Claude Code ran up ~$19 of avoidable Google Cloud spend with no visibility** ([#83231](https://github.com/anthropics/claude-code/issues/83231))  
*Filed today* — An agent session caused real cloud spend without the user being able to see what it was doing. Raises questions about tool-side spend transparency, including nested credential use and multi-step cloud operations.

**10. `setup-token` lacks read-only usage scope for subscription accounts** ([#81015](https://github.com/anthropics/claude-code/issues/81015))  
*1 👍 | 3 comments* — Feature request: `claude setup-token` mints tokens scoped `user:inference`, but the `/usage` panel requires `user:profile`, producing a 403. Users on subscription accounts can't use tokens to view their own usage — a visibility gap that compounds the spend-related frustrations above.

## 4. Key PR Progress

Only 3 PRs were updated in the last 24 hours, all closed:

**1. fix: repair issue-automation telemetry and dead days_back input** ([#77442](https://github.com/anthropics/claude-code/pull/77442))  
Fixes three issues in issue-automation workflows: Statsig events timestamped in 1970 due to a `now | floor` bug, a non-functional `days_back` workflow input, and a duplicate check in the triage workflow.

**2. docs(plugins): sync security-guidance listing with v2.0.0 plugin manifest** ([#77439](https://github.com/anthropics/claude-code/pull/77439))  
Corrects marketplace.json and README to reference the v2.0.0 security-guidance plugin (rewritten in #62586/#62592), aligning documentation with the actual manifest.

**3. fix(ralph-wiggum): make stop hook's jq error handling reachable under `set -e`** ([#77443](https://github.com/anthropics/claude-code/pull/77443))  
Fixes an unreachable error handler in the ralph-wiggum plugin's stop-hook: the `$?` check after a `jq` invocation on the last line was dead code under `set -euo pipefail`.

*Note: PR traffic is unusually low this week (3 items, all closed). If broader PR history matters for the digest, consider pulling additional recently-merged PRs from before the 24h window.*

## 5. Feature Request Trends

Distilling the feature requests across all issues, three clear directions emerge:

1. **Transparency and consent**: The common thread behind the #83233 visibility issue, the #82466 model-selection issue, and #83231's spend incident: users want to know *what* the assistant is doing, *which model* is running, and *what it costs*. There's clear demand for a "review before applying" surface for guardrail hits, and a spend dashboard accessible to subscription users (ref. #81015).

2. **User control over automation defaults**: The long-running VS Code auto-attach request (#24726) plus the ability to bind keyboard actions for accessibility (#83236) suggest a pattern: users want configuration knobs for behaviors that currently require workarounds or pointer interactions. The silent model-switch in #83233 is the most extreme manifestation of this.

3. **Accessibility and input modalities**: TTS readback of responses and voice mode for Remote Control (#42700), plus bindable keyboard actions for copy (#83236), show a growing accessibility backlog.

## 6. Developer Pain Points

Several recurring frustrations stand out from the issue data:

1. **"Silent" system behavior**: The ugrep OOM issues (#54394, #82230), the Fable 5 silent downgrade (#83233), and the background agents that never deliver their final report (#74113) all share a theme: **something happens with no user-visible signal**, and the failure isn't recoverable.

2. **Billing and usage opacity**: Multiple issues (#80750, #83231, #81015) point to a lack of visibility into what users are paying for and what the assistant is doing on their behalf. The ~$19 accidental GCP spend and the usage-credits-while-plan-remains bug both show financial impact from this opacity.

3. **Transcript corruption and data loss**: #73638 demonstrates that a simple user action (renaming a session) during a tool call can permanently corrupt a transcript. Combined with the MSIX package recovery incident (#81306) that destroyed local app data, there's a pattern of **irrecoverable state loss** that is more severe than a mere bug.

4. **Performance regressions from the ugrep integration**: The embedded ugrep replacement (introduced in 2.1.117) continues to generate severe memory-safety and performance issues. The reported 29GB allocation on a bounded regex (#82230) is a **host-crashing bug**, and the WSL2 variant (#54394) can freeze the entire machine. Given the volume, this is likely the most impactful regression in recent releases.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-02

## Today's Highlights

A quiet release day with no new versions shipped, but the community is buzzing around two critical regressions: the Codex Diff view crashing in VS Code on macOS (112 upvotes, 44 comments) and Windows Desktop spawning hundreds of `taskkill.exe` processes that degrade system performance. Meanwhile, 11 PRs landed, including several papercut fixes from `copyberry[bot]` covering TUI key chords, terminal resize handling, and tool metadata retention.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[Codex Diff crashes in VS Code on macOS](https://github.com/openai/codex/issues/35058)** — #35058 · 44 comments · 112 👍
   The most upvoted issue this week. Opening the Codex Diff tab after edits crashes with "Oops, an error has occurred" in every repository. Reproducible on Apple Silicon with VS Code 1.128.0 and extension 26.721.30844. Community frustration is high since this blocks review of all agent edits.

2. **[Windows Desktop spawns hundreds of taskkill/conhost processes](https://github.com/openai/codex/issues/33776)** — #33776 · 28 comments · 26 👍
   A severe Windows-specific issue where `ChatGPT.exe` spawns 287+ `taskkill.exe`/`conhost.exe` processes, causing WMI failure storms and DWM degradation. The performance impact is significant enough to make the machine nearly unusable during affected sessions.

3. **[High CPU from unbounded active thread metadata](https://github.com/openai/codex/issues/24510)** — #24510 · 27 comments
   Desktop app-server sustains high CPU/GPU usage when `~/.codex/state_5...` contains many active threads with large metadata. A performance issue that scales with profile size, suggesting the thread-list path needs indexing or lazy-loading.

4. **[Voice transcription for TUI](https://github.com/openai/codex/issues/14630)** — #14630 · 19 comments · 49 👍
   Feature request for using OpenAI's voice transcription models in the CLI TUI (instead of the inferior OS-level dictation). Consistent 49 upvotes signal strong interest in voice-driven workflows.

5. **[Desktop lags by scanning all session rollout files](https://github.com/openai/codex/issues/20864)** — #20864 · 18 comments · 5 👍
   The Desktop App ignores session index/state and scans all `~/.codex/sessions` rollout files, causing lag on large profiles. Related to #24510 — both point to session storage scaling issues.

6. **[Plan Mode: "Compact context and implement plan" option](https://github.com/openai/codex/issues/18490)** — #18490 · 12 comments
   Users want a middle ground between "clear context" and "keep context" when implementing a plan — compacting instead of wiping context preserves crucial reasoning while reducing token usage.

7. **[Context compaction is ruining sessions](https://github.com/openai/codex/issues/31033)** — #31033 · 9 comments
   Auto-compaction consumes 2 resets and ~50% of monthly usage. Users report that compacted contexts lose critical information, effectively breaking long-running sessions. This is a major trust issue for Pro users.

8. **[Closed side chats cannot be reopened](https://github.com/openai/codex/issues/27716)** — #27716 · 7 comments · 11 👍
   Once a side chat is closed in the Desktop app, its history is unrecoverable. A basic UX expectation (like browser tabs) is missing, losing users' work and context.

9. **[WSL agent broken in MSIX build — missing Linux binary](https://github.com/openai/codex/issues/28103)** — #28103 · 7 comments · 23 👍
   The Microsoft Store/MSIX build is missing the Linux `codex` binary in `app/resources`, breaking "Run agent in WSL". High upvote count relative to comments suggests many WSL users are silently affected.

10. **[Multi-agent V2 session growth >100 GiB](https://github.com/openai/codex/issues/34268)** — #34268 · 5 comments
    Full-history forks duplicate historical compaction snapshots and inline images, causing multiplicative storage growth up to 110 GiB. A storage bug that will hit users with long-running Ultra-reasoning sessions.

## Key PR Progress

1. **[Support portable Agent Plugins throughout installation](https://github.com/openai/codex/pull/36544)** — Merged. Fixes schema-declared `plugin.json` layouts and dotted names/versions that broke the directory-safe version format. Important for plugin ecosystem compatibility.

2. **[Raise MCP catalog item limit to 2,048](https://github.com/openai/codex/pull/36534)** — Merged. Doubles the paginated MCP discovery limit from 1,024 to 2,048 items across tools/resources/templates. Useful for users with large MCP catalogs.

3. **[Drop parent MCP lifecycle events from forked agent history](https://github.com/openai/codex/pull/30977)** — Merged. Prevents inherited `McpToolCallBegin`/`McpToolCallEnd` events from polluting forked agent history, preserving MCP context integrity in subagents.

4. **[Support two-stroke TUI key chords](https://github.com/openai/codex/pull/36511)** — Merged. Enables bindings like `ctrl-x ctrl-s` with pending-chord hints and cancellation. A quality-of-life win for power users of the TUI.

5. **[Retain attempted tool metadata across prompts](https://github.com/openai/codex/pull/36507)** — Merged. Reattaches `executed_tool_calls` metadata in subsequent prompts, capped at 32 KiB. Helps the model reason about what tools were already attempted.

6. **[Increase remote plugin bundle size limits](https://github.com/openai/codex/pull/36485)** — Merged. Raises remote plugin download limit from 50 MiB to 100 MiB and extracted size from 250 MiB to 512 MiB. Accommodates larger bundled plugins.

7. **[Extract apps cache logic into ConnectorRuntimeManager](https://github.com/openai/codex/pull/31471)** — Open. Refactors Codex Apps tools caching into a scoped runtime manager with immutable snapshots keyed by account/user/workspace. Architectural groundwork for faster connectors.

8. **[Avoid querying terminal size on every TUI redraw](https://github.com/openai/codex/pull/36482)** — Merged. Caches screen geometry and refreshes only on resize events, process resume, or external program exit. Reduces TUI redraw overhead.

9. **[Store guardian transcript boundary on review session](https://github.com/openai/codex/pull/15261)** — Open. Slices guardian review transcripts from a checkpoint so follow-up reviews only include new evidence since the last terminal review. Improves review efficiency.

10. **[Extract exec-server request dispatching](https://github.com/openai/codex/pull/36440)** — Merged. Refactors JSON-RPC handling into a dedicated `RequestDispatcher` while keeping the connection loop for event receiving. Cleaner separation of concerns.

## Feature Request Trends

- **Context is king — and people want control over it.** The cluster of issues around auto-compaction (#31033), "compact context and implement plan" (#18490), and stale metadata after compaction indicates users are unhappy with automatic context management. They want explicit, granular control over when and how context is compacted, plus visibility into what was lost.

- **Voice is a recurring desire.** Voice transcription in the TUI (#14630) continues to draw 49 upvotes. Users expect the CLI to match the Desktop app's voice capabilities.

- **Session persistence and lifecycle management.** Side-chat reopening (#27716), full-access session restoration (#34453), and session history pagination (#35746) collectively show that session state management remains a pain point.

- **Model picker flexibility.** Custom presets in the power slider (#32665) joins earlier custom-provider complaints — power users want the model picker to respect their configured providers and presets.

## Developer Pain Points

- **Global performance on large profiles.** Three separate issues (#24510, #20864, #34268) describe severe slowdowns and storage bloat as session stores grow. The pattern: Codex's data layer isn't scaling for heavy users.

- **Windows remains the wild west.** Crashes (`0xc0000409` fast-fail), process storms (#33776), PowerShell/install issues (#19559, #22757), and WSL breakage (#28103) rank among the most severe and volatile bugs reported. Cross-platform parity is clearly still maturing.

- **The Diff view is a blocker.** Both #35058 (macOS) and #36016 (VS Code extension) report the Diff view is completely broken — the primary interface for reviewing agent edits. This is mission-critical.

- **Rate-limit and metering opacity.** Two issues (#36528, #31033) describe users exhausted their weekly usage unexpectedly without understanding why. The metering is adding operational anxiety, not just a monthly limit.

- **MCP lifecycle leaks.** Process stack leaks (#25015) and false "MCP startup interrupted" reports (#36486) show MCP integration still needs hardening around lifecycle management.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-02

## Today's Highlights

One nightly release (v0.55.0-nightly.20260802) shipped today with no major changelog details. The issue tracker remains highly active with 50 items updated in the last 24 hours, dominated by ongoing work on agent reliability, subagent behavior, and the Auto Memory system. Several long-running PRs continue to mature, particularly around tool serialization, path handling, and subagent trajectory infrastructure.

---

## Releases

**v0.55.0-nightly.20260802.gf47d6c6f7** — Nightly release published today. No notable changelog beyond routine nightly updates. View [release](https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260801.gf47d6c6f7...v0.55.0-nightly.20260802.gf47d6c6f7).

---

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, 12 comments, maintainer-only) — Critical correctness bug: `codebase_investigator` subagents report `success` and `Termination Reason: GOAL` even when they hit the max turn limit without doing any analysis. This masks real failures and makes debugging agent behavior significantly harder. Community reaction is active with 12 comments, suggesting broad impact on agent workflow reliability.

2. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (P1, 7 comments, maintainer-only) — Epic tracking expansion of behavioral eval tests. Already 76 tests exist across 6 Gemini models; this epic pushes for more robust component-level coverage. Signals a maturing evaluation infrastructure for agent capabilities.

3. **[#22745 — Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2, 7 comments, maintainer-only) — Epic investigating whether AST-aware tooling can reduce token noise, improve file navigation, and enable more precise codebase mapping. Community interest (1 👍) suggest developers value more efficient code analysis.

4. **[#25166 — Shell command execution stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, 4 comments, 3 👍) — High-impact UX bug: shell commands hang indefinitely showing "Awaiting user input" after the command has already completed. Affects even trivial commands. Strong community signal via upvotes — this directly harms daily workflows.

5. **[#26267 — Failing to persist user selection](https://github.com/google-gemini/gemini-cli/issues/26267)** (P2, closed, 6 comments) — Users' preference selections (e.g., "allow for all sessions" for Plan mode) fail to persist across sessions. Though closed, 6 comments indicate meaningful developer frustration around configuration persistence.

6. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2, 6 comments, need-retesting) — Anecdotal but resonant: Gemini CLI rarely self-initiates custom skills or sub-agents unless explicitly instructed, even when relevant (e.g., gradle/git skills that sit unused). Suggests gaps in tool discovery and agent initiative.

7. **[#27550 — GOOGLE_API_KEY + GOOGLE_GEMINI_BASE_URL rejected in 0.44.x](https://github.com/google-gemini/gemini-cli/issues/27550)** (P1, 3 comments, 2 👍) — Regression: custom proxy setups via `GOOGLE_API_KEY` + `GOOGLE_GEMINI_BASE_URL` fail with `Invalid auth method selected` (exit 41) in 0.44.x, worked in 0.43.0. Enterprise users with proxy/gateway deployments are blocked.

8. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2, 5 comments, maintainer-only) — Auto Memory marks sessions as processed only when the extraction agent reads the transcript; low-signal sessions get repeatedly surfaced instead of skipped. Leads to infinite retry loops and wasted compute.

9. **[#26525 — Add deterministic redaction for Auto Memory](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, 4 comments, maintainer-only) — Security concern: Auto Memory sends transcript content to the extraction model *before* redaction prompts run, meaning secrets already enter model context. Also flags excessive logging of existing skill contents. Privacy-sensitive users will want this fixed.

10. **[#21798 — Smart shell mode](https://github.com/google-gemini/gemini-cli/issues/21798)** (P3, 5 comments) — Feature request for a "pseudo-shell" mode where users write natural-language or hybrid commands and Gemini resolves them. Struck a chord with power users who want a middle ground between raw shell and full natural language.

---

## Key PR Progress

1. **[#28535 — Use resolveRipgrepPath in perf test global setup](https://github.com/google-gemini/gemini-cli/pull/28535)** (P1, open) — Fixes performance test setup to use the current `resolveRipgrepPath()` API, replacing the removed `canUseRipgrep()` helper. Keeps perf tests green against evolving ripgrep resolution.

2. **[#28534 — Retry staging-tmp dist-tag removal after npm publish](https://github.com/google-gemini/gemini-cli/pull/28534)** (P1, open) — Addresses a nightly release failure where Wombat/npm acknowledges publishing before the `staging-tmp` dist-tag is queryable, causing `npm dist-tag rm` to fail. Adds a retry script — important for release pipeline reliability.

3. **[#28438 — Trim tool names before registry lookup](https://github.com/google-gemini/gemini-cli/pull/28438)** (closed) — Trims outer whitespace before resolving tool names through the script tool registry. Adds a regression test. Small but prevents subtle configuration errors.

4. **[#27351 — Serialize conflicting parallel mutator tools](https://github.com/google-gemini/gemini-cli/pull/27351)** (P2, open) — Fixes #27285 by enforcing sequential execution of conflicting parallelizable tool calls (e.g., multiple edits to the same file in one turn). Prevents race conditions that could corrupt file state.

5. **[#27350 — Resolve symlinks when normalizing project paths](https://github.com/google-gemini/gemini-cli/pull/27350)** (P3, open) — Uses `resolveToRealPath()` instead of `path.resolve()` so symlinked paths map to the same project/session store. Fixes fragmented session history from symlink aliases.

6. **[#27320 — Mitigate data corruption during write_file on massive text blocks](https://github.com/google-gemini/gemini-cli/pull/27320)** (P1, open) — Addresses #27213 where rewriting files with massive literal text blocks (6000+ char strings, inline base64) corrupts data due to token limits and LLM attention degradation. Critical fix for large-file workflows.

7. **[#27317 — Defensively check for directories in session/checkpoint scans](https://github.com/google-gemini/gemini-cli/pull/27317)** (P1, open) — Fixes #27135 by ignoring directories that match session or checkpoint filename patterns, preventing EISDIR crashes during scans. Improves robustness on odd filesystem layouts.

8. **[#27310 — Subagent trajectory infrastructure (Stage 1)](https://github.com/google-gemini/gemini-cli/pull/27310)** (open, size/l) — First of three PRs enabling full visibility into subagent trajectories for saved chats, exported history, and bug reports. Pivots internal "source of truth" — foundational for debugging and eval improvements. Aligns with issue #22598 requesting trajectory visibility via `/chat share`.

9. **[#27235 — Allow disabling hostname in sandbox for rootless containers](https://github.com/google-gemini/gemini-cli/pull/27235)** (P2, open) — New `setHostname` config option and `GEMINI_CLI_SANDBOX_SET_HOSTNAME` env var to disable `--hostname` when starting Docker/Podman sandboxes. Supports rootless nested container environments.

10. **[#27131 — Route personal OAuth users to stable models for auto aliases](https://github.com/google-gemini/gemini-cli/pull/27131)** (P1, open) — Implements auth-aware model routing so `auto-gemini-3` aliases resolve to stable model IDs for personal OAuth users, preventing 404/400 errors. Improves model-availability handling.

---

## Feature Request Trends

1. **Subagent visibility & control** — Multiple issues ( #22598 , #27310 PR) push for full subagent trajectory visibility and sharing via `/chat share`. Developers want to see what subagents actually do, enabling debugging and eval of agent performance.

2. **Intelligent tool selection & scope** — Consistently requested: limiting tools in scope ( #24246 , >128 tools causes 400 errors), using skills/sub-agents proactively ( #21968 ), and AST-aware file reading/search for more efficient navigation ( #22745 ). The common thread: **reduce token noise and improve tool relevance**.

3. **Safety & guardrails** — Requested: agents should avoid destructive git operations ( `git reset` , `--force` ) when safer alternatives exist ( #22672 ), and stop generating random tmp scripts in workspace ( #23571 ). Users want the agent to be more conservative by default.

4. **Auto Memory & context lifecycle improvements** — Requests for: smarter session processing (skip low-signal sessions, #26522 ), deterministic secret redaction before model context ( #26525 ), and better context-window overflow visibility ( #27633 ). The memory system is becoming a first-class concern for security and efficiency.

5. **Shell & UX polish** — "Smart shell mode" ( #21798 ) for natural-language-to-command bridging, click-to-change approval mode ( #27091 ), and persistent user selections ( #26267 ). Developers want the CLI to feel more like a responsive IDE, not a rigid terminal wrapper.

---

## Developer Pain Points

1. **Agent correctness under constraints** — Recurring theme: subagents misreport success after hitting MAX_TURNS ( #22323 ), sessions hang on "Waiting input" after commands complete ( #25166 ), and agents run without permission since v0.33.0 ( #22093 ). These undermine trust in autonomous operation.

2. **Performance & concurrency bugs** — Parallel mutator tools causing race conditions ( #27351 ), data corruption on large files ( #27320 ), and context overflow hallucinations ( #27633 ) — all signal that the agent core still has rough edges under load.

3. **Configuration & auth regressions** — Custom proxy setups break between releases ( #27550 ), OAuth quota checks fail on startup ( #26375 ), and user selections don't persist ( #26267 ). Each regression forces users to re-diagnose and re-configure environments, eroding confidence in version upgrades.

4. **Tool proliferation and misuse** — Agents create temp scripts in random spots ( #23571 ), exceed tool-count limits causing 400 errors ( #24246 ), and under-utilize available skills/sub-agents ( #21968 ). The community is asking for smarter tool gating and more disciplined agent behavior.

5. **Auto Memory transparency and safety** — Users can't easily see what Auto Memory processes ( #26522 , #26525 ) or what's logged ( #26523 ). Security-minded developers want deterministic redaction *before* content enters model context, not after.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**2026-08-02**

---

## Today's Highlights

A patch release (v1.0.78-2) shipped with UX polish for the split-view sidebar close confirmation and a fix for extension slash commands firing multiple times. The issue tracker saw a burst of activity with 20 items updated in the last 24h, dominated by session-management bugs (resume failures, forked-session plan corruption, autopilot state loss) and BYOK/model configuration friction. Notably, a critical bug where `events.jsonl` exceeding V8's max string length permanently bricks session resumption is gaining attention.

---

## Releases

### v1.0.78-2
**Improved**
- Split-view sidebar: the red close confirmation now reads `x again to close` (or `x again to exit CLI` on the last session) instead of `x close`, making it clear that a second press is required to actually close.

**Fixed**
- Extension slash commands now run their handler exactly once per invocation when several extensions declare the same slash command.

---

## Hot Issues

1. **Session becomes permanently unloadable once events.jsonl exceeds V8's max string length** ([#4325](https://github.com/github/copilot-cli/issues/4325))  
   Long-lived sessions become unresumable once the `events.jsonl` file grows too large — the session still appears in `/resume` but cannot be loaded. This is a severe data-loss bug for users running marathon sessions. Very new, low community engagement so far, but high severity.

2. **Add multiple BYOK model capability in Copilot CLI** ([#3282](https://github.com/github/copilot-cli/issues/3282))  
   Users want to configure and switch between multiple BYOK models without terminating the session and re-setting environment variables. 19 upvotes, 6 comments — clearly a popular quality-of-life request.

3. **Custom Agent YAML Frontmatter Should Support Reasoning Effort** ([#2904](https://github.com/github/copilot-cli/issues/2904))  
   Custom agents can pin a model but cannot set reasoning effort per agent — currently only a global CLI flag exists. 16 upvotes; this is a recurring theme for fine-grained agent control.

4. **Failed to convert JavaScript value 'Undefined' into rust type 'String'** ([#4305](https://github.com/github/copilot-cli/issues/4305))  
   Users on v1.0.76 report immediate crashes with this Rust/JS interop error on any command. 5 comments, 5 upvotes; likely a regression from a recent release. Closed, but the fix may not be verified by the community yet.

5. **Lazy-load MCP servers on first tool invocation** ([#2901](https://github.com/github/copilot-cli/issues/2901))  
   All configured MCP servers connect at startup, slowing things down as users accumulate servers. 14 upvotes; performance-focused request with broad appeal.

6. **BYOK Responses streaming drops apply_patch input before execution** ([#4327](https://github.com/github/copilot-cli/issues/4327))  
   With OpenAI-compatible BYOK providers using `wireApi: "responses"`, the model emits a complete `apply_patch` input but the CLI invokes the tool with an empty string. Silent data loss — a dangerous bug for BYOK users.

7. **Increasing typing latency over long Copilot sessions** ([#4299](https://github.com/github/copilot-cli/issues/4299))  
   Typing latency grows to unusable levels during long sessions, especially with background agents running. Performance degradation over time is a common complaint.

8. **Autopilot task-completion enforcement can override explicit user instructions** ([#4318](https://github.com/github/copilot-cli/issues/4318))  
   In autopilot mode, the agent continues taking action even after the user explicitly narrows the task to research/explanation only. This violates user intent and is a trust-breaking behavior.

9. **Autopilot is not enabled when resuming a session that had autopilot enabled** ([#4329](https://github.com/github/copilot-cli/issues/4329))  
   The statusline shows autopilot as enabled after resuming, but approval-gated actions still fail — a misleading and frustrating state mismatch. Zero comments yet; in triage.

10. **Comments in .mcp.json not supported, causing all workspace MCP servers to be skipped** ([#4323](https://github.com/github/copilot-cli/issues/4323))  
    Repository-level `.mcp.json` is parsed as strict JSON; adding comments causes the entire file to be rejected and all MCP servers skipped. Makes shared config painful since comments are needed for documentation.

---

## Key PR Progress

No pull requests were updated in the last 24 hours.

---

## Feature Request Trends

- **Multi-model BYOK support** — Switch between multiple BYOK models from within the TUI rather than restarting with new env vars ([#3282](https://github.com/github/copilot-cli/issues/3282)).
- **Per-agent reasoning effort** — Custom agents should support granular reasoning-effort configuration, not just a global flag ([#2904](https://github.com/github/copilot-cli/issues/2904)).
- **Lazy MCP server connection** — Defer MCP server startup until first tool invocation to reduce CLI startup latency ([#2901](https://github.com/github/copilot-cli/issues/2901)).
- **Pinned sessions grouping** — Desktop client should group pinned sessions in a dedicated section at the top of the left nav when grouping by status ([#4321](https://github.com/github/copilot-cli/issues/4321)).
- **Trusted Access for Cyber program linkage** — Allow BYOK/model usage to participate in security-authorized workflows (Claude Opus 5 users hitting `Trusted Access` gates) ([#4322](https://github.com/github/copilot-cli/issues/4322)).

---

## Developer Pain Points

- **Session reliability is the #1 theme** — Resuming sessions fails silently ([#4325](https://github.com/github/copilot-cli/issues/4325)), autopilot state is lost on resume ([#4329](https://github.com/github/copilot-cli/issues/4329)), forked sessions corrupt plans ([#4324](https://github.com/github/copilot-cli/issues/4324)), and plan review hangs when switching sessions ([#4319](https://github.com/github/copilot-cli/issues/4319)). Developers are losing work.

- **BYOK streaming has correctness gaps** — `apply_patch` inputs are dropped in streaming responses ([#4327](https://github.com/github/copilot-cli/issues/4327)), and BYOK autopilot still reports premium usage ([#2632](https://github.com/github/copilot-cli/issues/2632)). BYOK users feel second-class.

- **Installation version pinning is broken** — Installing a specific version always installs the latest, making downgrades impossible in Docker sandboxes ([#4317](https://github.com/github/copilot-cli/issues/4317)).

- **Input/keyboard quirks on Windows/WSL2** — `Ctrl+H` is misinterpreted as `Ctrl+Backspace` under WSL2 due to `WT_SESSION` leaking from Windows Terminal ([#4328](https://github.com/github/copilot-cli/issues/4328)).

- **Configuration parsing is too strict** — Comments in `.mcp.json` invalidate the entire file ([#4323](https://github.com/github/copilot-cli/issues/4323)), and nested custom agent MCP grant behavior is undocumented and inconsistent since v1.0.74 ([#4320](https://github.com/github/copilot-cli/issues/4320)).

- **Autopilot can override user intent** — Task-completion enforcement continues acting even when the user explicitly narrows scope to explanation only ([#4318](https://github.com/github/copilot-cli/issues/4318)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest

**Date:** 2026-08-02

---

## 1. Today's Highlights

The community is actively converging on **session persistence and reliability** issues, with the Memory System request (#1283) remaining the most-discussed feature despite being open for five months. This week brings a flurry of **correctness fixes for `StrReplaceFile` and shell execution**, addressing subtle bugs that impact real-world workflows. Notably, multiple PRs from community contributor `ayaangazali` are targeting **edge-case crashes and hangs** in web UI, shell, and hook execution paths.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

### #1283 [OPEN] [enhancement] Feature Request: Memory System - Persistent context across sessions
- **Author:** CatKang | **Created:** 2026-02-27 | **Updated:** 2026-08-01 | **Comments:** 10
- **Link:** [Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **Why it matters:** The longest-running feature request on the repo, this asks for both AI-managed automatic memory and user-defined manual memory (via `CLAUDE.md`-style files). It's the most-voted enhancement and shows strong community desire for **cross-session context retention** beyond what config files currently provide. Community discussion has matured around defining memory tiers and privacy controls.

### #2526 [OPEN] StrReplaceFile reports too few total replacements for chained edits
- **Author:** Sreekant13 | **Created:** 2026-07-21 | **Updated:** 2026-08-01 | **Comments:** 1
- **Link:** [Issue #2526](https://github.com/MoonshotAI/kimi-cli/issues/2526)
- **Why it matters:** This is a **correctness bug** with tooling implications — when one edit's `old` string is produced by a prior edit, the count drops, potentially misleading agents about whether their edits applied. Community notes this can cause silent failure in multi-step refactoring workflows. PR #2554 directly addresses this.

### #2574 [OPEN] [enhancement] Kimi Code Stuck on "Processing" and Doesn't Respond
- **Author:** xGrasshopper | **Created:** 2026-08-01 | **Updated:** 2026-08-01 | **Comments:** 0
- **Link:** [Issue #2574](https://github.com/MoonshotAI/kimi-cli/issues/2574)
- **Why it matters:** Reports a **hang after Unity MCP setup** in VS Code — the agent completes setup then freezes on "Processing". Newest of several MCP-related hang reports; suggests interaction between MCP server lifecycle and the CLI's event loop may be fragile.

### #2573 [OPEN] Bug: Web UI "Connecting to session..." infinite spinner when switching sessions
- **Author:** belenov-maker | **Created:** 2026-08-01 | **Updated:** 2026-08-01 | **Comments:** 0
- **Link:** [Issue #2573](https://github.com/MoonshotAI/kimi-cli/issues/2573)
- **Why it matters:** Web UI (Tech Preview) **session-switching bug** — infinite spinner blocks productivity. Filed with full env details (kimi-cli 1.48.0, macOS 26.4, Chrome 150), making it actionable for maintainers.

### #2576 [OPEN] docs: document OmniRoute OpenAI-compatible provider setup
- **Author:** diegosouzapw | **Created:** 2026-08-01 | **Updated:** 2026-08-01 | **Comments:** 0
- **Link:** [Issue #2576](https://github.com/MoonshotAI/kimi-cli/issues/2576)
- **Why it matters:** Requests **documentation for OmniRoute gateway** — base URL, model declaration, env-var mapping are "easy to misconfigure" today. Signals demand for more third-party provider docs, particularly OpenAI-compatible gateways.

---

## 4. Key PR Progress

### #2577 [OPEN] fix(web,vis): do not crash printing the startup banner on legacy console codecs
- **Author:** ayaangazali | **Created:** 2026-08-01 | **Updated:** 2026-08-01
- **Link:** [PR #2577](https://github.com/MoonshotAI/kimi-cli/pull/2577)
- **Description:** Fixes crash on **GBK/legacy codec consoles** where U+279C in banner URLs causes UnicodeEncodeError. Small but critical for **Windows/legacy-terminal users**; resolves #2532.

### #2575 [OPEN] fix(hooks): fire PostToolUse hooks through fire_and_forget_trigger
- **Author:** ayaangazali | **Created:** 2026-08-01 | **Updated:** 2026-08-01
- **Link:** [PR #2575](https://github.com/MoonshotAI/kimi-cli/pull/2575)
- **Description:** PostToolUse hooks were dropped due to **asyncio WeakSet garbage collection** — bare `create_task` handles weren't retained. This is a subtle but **important reliability fix** for hook-based workflows (CI, logging). Resolves #2564.

### #2572 [OPEN] fix(kosong): recursively unwrap double-encoded JSON in tool-call arguments
- **Author:** aalhadxx | **Created:** 2026-07-31 | **Updated:** 2026-08-01
- **Link:** [PR #2572](https://github.com/MoonshotAI/kimi-cli/pull/2572)
- **Description:** Fixes **Pydantic validation failures** when providers double-encode nested array/object args (e.g., SetTodoList, StrReplaceFile). Makes tool calls robust across **Moonshot API and third-party providers**.

### #2554 [OPEN] fix(tools): count StrReplaceFile replacements against running content
- **Author:** ayaangazali | **Created:** 2026-07-23 | **Updated:** 2026-08-01
- **Link:** [PR #2554](https://github.com/MoonshotAI/kimi-cli/pull/2554)
- **Description:** Same fix as #2526 — counts against **progressively edited content**, not original. Eliminates false "0 replacements" messages on chained edits.

### #2530 [OPEN] fix(shell): stop blocking until timeout when a detached child holds the pipes
- **Author:** ayaangazali | **Created:** 2026-07-21 | **Updated:** 2026-08-01
- **Link:** [PR #2530](https://github.com/MoonshotAI/kimi-cli/pull/2530)
- **Description:** Fixes shell commands like `some_daemon & echo done` blocking until timeout because **detached child holds pipes** open. Critical for **background-process workflows**. Resolves #2468.

---

## 5. Feature Request Trends

1. **Persistent Memory System** (#1283) — Dominant request; community wants **both automatic (AI-managed notes) and manual (user-defined) memory** across sessions. Actively discussed for 5 months with 10 comments.
2. **Provider Documentation** (#2576) — Growing demand for **OpenAI-compatible gateway setup docs** (OmniRoute, likely others) — signals wider adoption beyond Moonshot's native API.
3. **Web UI stability** (#2573) — Tech Preview users expect **reliable session management**; session-switching bugs are the top UX complaint.
4. **MCP integration reliability** (#2574) — Users integrating Unity/other MCP servers hit **hangs and freezes** — MCP lifecycle needs hardening.

---

## 6. Developer Pain Points

- **Console/terminal portability** (#2577): Unicode characters in banners crash on **legacy codecs (GBK)** — a Windows/enterprise-environment blocker.
- **Async task lifecycle bugs** (#2575): Hooks silently dropped due to **asyncio WeakSet garbage collection** — a systemic pattern that may recur elsewhere.
- **Tool-call argument fragility** (#2572): Double-encoded JSON from providers causes **Pydantic validation errors** — wastes agent turns and confuses users.
- **String replacement counting** (#2526, #2554): Misleading "0 replacements" messages erode **trust in agent tool feedback** during refactors.
- **Shell background-process hangs** (#2530): Detached daemons holding pipes cause **30s+ timeouts** — a trap for long-running tasks.
- **Session state management** (#2573, #1283): Users increasingly expect **session continuity and switching** without losing context or UI responsiveness.

---

*Digest generated from public GitHub data for the Kimi Code CLI project.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-02

## Today's Highlights
OpenCode released v1.18.11 with critical fixes for MCP SSE reconnect loops and provider reasoning fields. However, the community is buzzing about a major **OpenCode Go billing and authentication outage** — multiple users report 401s from upstream, blocked subscriptions, and payment failures. Additionally, a controversial silent removal of Go privacy wording (#39875, 👍35) has sparked trust concerns among paid subscribers, while demand for persistent cross-session memory continues to grow.

## Releases
**v1.18.11** (latest)
- **Core Bugfixes:**
  - Fixed MCP SSE connections getting stuck in reconnect loops after server errors
  - Fixed provider model configs using interleaved reasoning fields (e.g., `reasoning_text`, custom names)
- **Desktop Bugfix:**
  - External links now open in the system browser

## Hot Issues

1. **[#38257 — OpenCode Go: 401 Request blocked by upstream provider](https://github.com/anomalyco/opencode/issues/38257)** (43 comments, 👍11)  
   Pervasive server-side outage: `chat/completions` blocked while `/v1/models` works. Affects all models for Go subscribers. High visibility, still open after ~10 days.

2. **[#37012 — Keep legacy layout option](https://github.com/anomalyco/opencode/issues/37012)** (34 comments, 👍37)  
   Strong demand for preserving the old TUI layout — users cite one-window access to everything and workspace flexibility. New layout requires excessive navigation.

3. **[#39875 — Revert silent removal of Go privacy wording & provider attribution](https://github.com/anomalyco/opencode/issues/39875)** (5 comments, 👍35)  
   Trust issue: two silent commits changed what OpenCode transmits to providers and removed privacy disclosures. Paid subscribers demand transparency and telemetry added to privacy policy.

4. **[#32149 — Opencode Stops Processing Requests Without Response](https://github.com/anomalyco/opencode/issues/32149)** (9 comments, 👍4)  
   Older but critical: app enters "thinking" state then never responds. Still relevant, recent updates.

5. **[#20322 — Native auto-memory for cross-session learning](https://github.com/anomalyco/opencode/issues/20322)** (8 comments, 👍5)  
   Users want built-in persistence of learnings, preferences, and project context without manual configuration or plugins.

6. **[#23595 — `<system-reminder>` keeps moving, breaking llama.cpp prompt cache](https://github.com/anomalyco/opencode/issues/23595)** (6 comments, 👍11)  
   Performance bug: reordering system reminders invalidates prompt cache, causing significant wasted processing in llama.cpp. Fix should keep reminder position stable.

7. **[#27837 — Web UI: empty session list in server mode](https://github.com/anomalyco/opencode/issues/27837)** (5 comments, 👍2)  
   Frontend SSE event logic fails to populate sessions despite `/api/session` returning correct data. Clear root cause analysis included.

8. **[#17340 — Session compaction fails with context exceeds model limit](https://github.com/anomalyco/opencode/issues/17340)** (4 comments, 👍2)  
   Under certain conditions, sessions become uncompactable (145k tokens vs 128k limit) and can't recover, likely from missing user messages in history.

9. **[#23506 — Add MCP client support for skipping certificate validation](https://github.com/anomalyco/opencode/issues/23506)** (2 comments, 👍5)  
   Enterprise/dev environment need for insecure/scaffold connections. Related to new #40111 (per-server trust config), indicating active demand for MCP TLS control.

10. **[#40106 — Desktop: Enter on empty input should not send/interrupt](https://github.com/anomalyco/opencode/issues/40106)** (2 comments)  
    Accidental Enter interrupts ongoing tasks in desktop app. PR fix already submitted (#40110), but issue signals a recurring UX footgun for V1/V2 pipelines.

## Key PR Progress

1. **[#40108 — feat(opencode): add unified marketplace](https://github.com/anomalyco/opencode/pull/40108)**  
   Broad vision: a single shared runtime for installing skills/agents across Desktop, Web, TUI, CLI, and API clients. Closes #28696; could be the canonical package system.

2. **[#39905 — feat(opencode): add system prompt debug command](https://github.com/anomalyco/opencode/pull/39905)**  
   Adds `opencode debug prompt` for local CLI to print the effective system prompt. Useful for providers, compaction issues, and prompt-engineering debugging.

3. **[#40110 — fix(app): prevent Enter from sending/interrupting on empty input](https://github.com/anomalyco/opencode/pull/40110)**  
   Direct fix for #40106. Addresses both wasted submission work (V1) and silent interrupts (V2) — should merge quickly.

4. **[#40115 — fix(todo): retry SQLITE_BUSY/LOCKED on parallel todowrite calls](https://github.com/anomalyco/opencode/pull/40115)**  
   Fixes #40020: parallel subagent `todowrite` calls hit SQLite lock contention. Adds retry logic beyond `busy_timeout`.

5. **[#40077 — refactor(plugin): rename session request hook](https://github.com/anomalyco/opencode/pull/40077)**  
   Renames `session.request` to `session.http` for clarity. Preserves mutation behavior for url/headers/body. Could be a breaking change for plugins — watch release notes.

6. **[#36620 — fix(core): merge model.request.headers into SDK options](https://github.com/anomalyco/opencode/pull/36620)**  
   Fixes #36619: headers defined in `model.request` settings weren't merged into SDK options, resulting in missing custom headers at runtime.

7. **[#35838 — fix(tool): decode webfetch bodies using declared charset](https://github.com/anomalyco/opencode/pull/35838)**  
   Fixes #35752: `webfetch` now honors `charset` in `Content-Type` (e.g., windows-1251/1252) instead of always UTF-8, preventing mojibake for non-UTF pages.

8. **[#35696 — fix(tool): enforce grep deny rules by filtering matched files](https://github.com/anomalyco/opencode/pull/35696)**  
   Fixes #35503: `grep` now applies deny rules on matched **file paths**, not search regexes — closing a security hole where denied paths were still searched.

9. **[#26861 — fix(tui): old messages disappearing during long sessions](https://github.com/anomalyco/opencode/pull/26861)**  
   Fixes #7380: adds lazy-scroll loading with configurable page size (default 50 older messages), preventing message loss in long conversations.

10. **[#37889 — fix: handle GitHub OIDC format and error handling](https://github.com/anomalyco/opencode/pull/37889)**  
    Fixes #37823: adapts to GitHub OIDC token format changes (`repo:owner/name` → `repo:owner/name@ref:...`), plus improved error handling for auth flows.

## Feature Request Trends
- **Persistent memory**: #20322 and #32658 both request built-in, project-level cross-session memory — a recurring theme that plugins only partially solve.
- **MCP trust/security controls**: #40111 (per-server custom CA/fingerprint) and #23506 (skip validation) indicate growing enterprise adoption with custom TLS/private PKI needs.
- **Legacy TUI layout retained**: #37012 shows significant discontent with layout redesign — users want toggles, not forced migrations.
- **Transparency & privacy**: #39875 hits a nerve (35 thumbs up): users want explicit provider-attribution and telemetry disclosures restored, with privacy policy updated to match reality.
- **Collapsible/togglable output**: #40096 (collapse tool output blocks) and a trend toward TUI session-status (cf. #34740) show a desire for reduced visual noise.

## Developer Pain Points
- **Billing/auth reliability**: Recurring 401s (#38257), stuck payments (#40064, #40107), and missing invites (#40088) mar the Go subscription experience.
- **Retry loops without caps**: #40090, #40058, and #21960 all point to providers (or OpenCode itself) retrying indefinitely on persistent 5xx/429/overloaded errors — no circuit breaker or max attempt count.
- **Cache-unfriendly prompt construction**: #23595 (system-reminder moves) and #17340 (uncompactable sessions) both degrade throughput and waste tokens.
- **Empty-Enter interrupting tasks**: #40106 repeats earlier UX bugs; lack of no-op on empty submission pipeline is a recurring "footgun."
- **Tool outputs & formatting**: Truncated ordered lists (#33421), non-collapsible tool output (#40096), and grep permission loopholes (#35696) impact day-to-day trust in reported results.
- **Config discoverability & debugging**: Requested `opencode debug prompt` (#39905) and #36620 (headers merge) highlight that configuration issues are only debuggable through source code today.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-02

## Today's Highlights
The Pi project saw a major surge in activity around network resilience and session reliability. Multiple fixes landed for Google adapter retry logic, model catalog refresh timeouts, and OAuth token handling for short-lived credentials. A notable architectural PR introduces switchable terminal renderers for the TUI, while a growing cluster of issues highlights persistent pain points around compaction reliability, terminal compatibility (Bengali text, Termux paste, scrollback preservation), and gateway interoperability.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#6879: Auto-compaction never triggers after context grows past 100% until provider overflow](https://github.com/earendil-works/pi/issues/6879)** — Open, 9 comments, 7 👍. A 2-hour agentic turn on gpt-5.6-sol blew past the compaction threshold, eventually hitting a 373k-token API rejection before compaction kicked in. The request: check compaction after every agent action, not just at turn boundaries. High community agreement this is a critical reliability gap.

2. **[#7161: anthropic-messages never sends x-client-request-id](https://github.com/earendil-works/pi/issues/7161)** — Open, in-progress, 8 comments. Gateways that key session affinity off that header can't group Anthropic conversations into sessions, breaking round-robin proxies with multiple accounts. A contribution PR (#7438) proposing the fix was closed as untriaged, but the underlying issue remains active.

3. **[#7020: Sometimes Pi doesn't continue after compaction](https://github.com/earendil-works/pi/issues/7020)** — Open, in-progress, 7 comments, 2 👍. Long-running "coordinator" sessions frequently hit warts in compaction, leaving the session stuck after the summarization step. Community reports this is more frequent in multi-tool, long-horizon sessions.

4. **[#7402: Pressing Space after pasting Bengali text duplicates the line](https://github.com/earendil-works/pi/issues/7402)** — Closed, 6 comments. Width overcounting in the differential renderer desyncs the terminal cursor for wide/zero-width characters. Closed as no-action but highlights an ongoing class of Unicode rendering bugs the TUI struggles with.

5. **[#7010: Normalize optional object tool schemas for OpenAI-compatible providers](https://github.com/earendil-works/pi/issues/7010)** — Open, 6 comments, 1 👍. The OpenAI completions adapter emits tool schemas with `required` on optional object properties, causing provider-side validation failures. A correctness issue affecting tool-calling reliability.

6. **[#7315: Fireworks requests sometimes fail instantly with "Request timed out"](https://github.com/earendil-works/pi/issues/7315)** — Open, 4 comments. Failures happen before any request is sent (empty content, zero token usage). Pi's retry logic kicks in but repeats the same failure four times. Related PR #7435 raises the connection attempt timeout from 250ms to 2s.

7. **[#7385: Keystroke input lag scales with conversation length](https://github.com/earendil-works/pi/issues/7385)** — Closed, 3 comments. 350-520ms per-character lag on sessions with ~160 tool calls; the tool-result-renderer bypasses the Text component render cache, re-processing all tool result content on every keystroke. A performance issue that grows quadratically with session size.

8. **[#7321: Multi-line paste broken on terminals without bracketed paste support](https://github.com/earendil-works/pi/issues/7321)** — Open, 2 comments, 1 👍. Termux (Android) users can't paste multi-line content — newlines trigger submit instead of inline insertion. Terminal compatibility gap for mobile/embedded users.

9. **[#7151: Support image_url content type (pass URL directly without base64 conversion)](https://github.com/earendil-works/pi/issues/6151)** — Open, 2 comments. All `ImageContent` items are base64-encoded before sending, which breaks providers that accept (or require) raw URLs. A provider-compat feature request with moderate interest.

10. **[#7452: Subagent tool usage churn is saved and bloats the session](https://github.com/earendil-works/pi/issues/7452)** — Closed, 1 comment. The default sub-agent extension stores complete child-agent transcripts in the parent session's tool-result details, causing JSONL files to grow rapidly. Can make sessions unmanageable in active multi-subagent workflows.

## Key PR Progress

1. **[#7471: fix(ai): retry transient provider errors in Google adapters](https://github.com/earendil-works/pi/pull/7471)** — Closed. Adds retry logic for 429/5xx errors before first stream token in `google-vertex` and `google-generative-ai` adapters, aligning them with Anthropic/OpenAI/Azure behavior. Directly fixes #7470.

2. **[#7468: feat(agent,coding-agent): accept Claude Code skill frontmatter](https://github.com/earendil-works/pi/pull/7468)** — Closed. Makes both skill loaders compatible with the Claude Code SKILL.md frontmatter reference, allowing skills written for Claude Code to load and behave sensibly in Pi. Cross-ecosystem compatibility win.

3. **[#7466: feat(coding-agent): opt-in pre-dispatch durability barrier](https://github.com/earendil-works/pi/pull/7466)** — Closed. Persists a "provider invoked" marker before the first assistant message completes, distinguishing "never invoked" from "invoked but output lost" on crash. Important for embedders needing at-most-once provider invocation semantics.

4. **[#7440: feat(tui): add switchable terminal renderers](https://github.com/earendil-works/pi/pull/7440)** — Open. Allows coding-agent UI modes to switch at runtime while preserving terminal, focus, input, and renderer state. Architectural flexibility for the TUI layer.

5. **[#7451: fix(coding-agent): bound model catalog refreshes](https://github.com/earendil-works/pi/pull/7451)** — Open. Fixes five separate issues (#7027, #7113, #7153, #7418, #7443) related to model catalog refresh stalls. Adds timeouts and cancellation to prevent the "hang forever" failure mode.

6. **[#7456: fix(auth): support short-lived OAuth tokens](https://github.com/earendil-works/pi/pull/7456)** — Closed. Refreshes stored OAuth credentials only when less than one minute remains, preventing refresh-on-every-request for providers with `expires_in: 300` tokens. Fixes #7457.

7. **[#7453: feat(ai): add Cline API and ClinePass providers](https://github.com/earendil-works/pi/pull/7453)** — Closed. Adds both usage-billing (Cline API) and flat-rate subscription (ClinePass) providers to `@earendil-works/pi-ai`, both OpenAI-compatible gateways at `api.cline.bot`.

8. **[#7467: feat(ai): add MiniMax video generation](https://github.com/earendil-works/pi/pull/7467)** — Closed. Adds MiniMax video generation support with global and CN providers, v2/v1 endpoints, and task-based query/download handling for text-to-video workflows.

9. **[#7441: fix(ai): tolerate missing finish_reason on non-empty openai-completions streams](https://github.com/earendil-works/pi/pull/7441)** — Closed. Prevents "Stream ended without finish_reason" errors on gateways that omit the terminal finish_reason chunk. Spec-violating gateways no longer kill sessions.

10. **[#7435: fix(coding-agent): increase connection attempt timeout](https://github.com/earendil-works/pi/pull/7435)** — Open. Raises Undici's address-family attempt timeout from Node's 250ms default to 2s, preventing aborted Fireworks connections on high-latency routes without changing process-wide defaults.

## Feature Request Trends

- **Provider ecosystem expansion**: Multiple PRs adding new providers (Cline, ClinePass, MiniMax) and fixing provider-specific behavior. The community clearly wants breadth — more gateways, more model families, and video generation support.
- **Session durability and crash recovery**: Requests for pre-dispatch persistence, structured close metadata, and bounded queries reflect a push toward making Pi safe for long-running, unattended agentic workflows.
- **Terminal/UX flexibility**: Switchable renderers, scroll lock/reading mode, and terminal title restoration point to maturing the TUI as a first-class development environment.
- **Claude Code ecosystem compatibility**: Skill frontmatter compatibility signals the community wants Pi to interoperate with the growing Claude Code skills ecosystem.

## Developer Pain Points

- **Compaction and context-window management**: The #1 recurring theme. Auto-compaction misfires (#6879), post-compaction hangs (#7020), and truncated summaries (#7048) suggest compaction is the most fragile part of the system for long sessions.
- **Rate limiting and provider request failures**: Instant timeouts, 429s, and missing retry logic across adapters (Fireworks, Google) are persistent irritants — especially when retries just repeat the same failure.
- **Model catalog/network dependency**: Multiple issues where pi.dev being unreachable hangs the UI or blocks operations entirely (model switching, login, update --models). The community wants graceful degradation when remote catalogs are unavailable.
- **Performance degradation with session size**: Input lag (#7385) and session file bloat (#7452) both scale badly with conversation length, making long-running sessions increasingly painful.
- **Terminal compatibility gaps**: Bengali text rendering, Termux paste, scrollback destruction, and iTerm2 image size parameters — a broad set of terminal edge cases that collectively fragment the user experience.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-02

## Today's Highlights

Qwen Code shipped v0.21.3 with an enhanced `/review` command featuring test plan validation and measured failure attribution. A significant spike in prompt-cache optimization work is underway, with multiple PRs and design discussions targeting cache reuse during chat compression, deferred tool discovery, and telemetry. The community is actively contributing to infrastructure hardening—including ECS runner auto-updates, GitHub channel recovery, and expanded code ownership—while user reports continue to surface TUI/keybinding UX issues and local model integration friction.

## Releases

**[v0.21.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.3)** — Stable release focused on improving the `/review` command with:
- Test plan validation to ensure proposed changes are adequately covered
- Measured failure attribution to better identify root causes of review failures
- New verification lenses for deeper code-change analysis
- Related PRs: [#8215](https://github.com/QwenLM/qwen-code/pull/8215), [#8218](https://github.com/QwenLM/qwen-code/pull/8218)

**[v0.21.3-nightly.20260802.184365390](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.3-nightly.20260802.184365390)** — Nightly includes:
- Complete TUI keyboard shortcut reference documentation ([#8327](https://github.com/QwenLM/qwen-code/pull/8327))
- Fixed history pagination issue on `o` key

**[v0.21.2-nightly.20260801.bc382c3ff](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.2-nightly.20260801.bc382c3ff)** — Nightly with:
- Session source included in lifecycle hook payloads ([#8155](https://github.com/QwenLM/qwen-code/pull/8155))
- Review cache identity checks

---

## Hot Issues

1. **[#176 — Tool calling does not work with local model qwen3-30b-a3b](https://github.com/QwenLM/qwen-code/issues/176)** *(CLOSED, 23 comments, 7 👍)*  
   Long-standing issue (since Aug 2025) where the model emits valid-looking tool calls that never execute, with no error surfaced. High engagement suggests local-model compatibility remains a critical community need. Finally closed after ~1 year.

2. **[#7585 — Add a direct external context provider profile](https://github.com/QwenLM/qwen-code/issues/7585)** *(OPEN, 11 comments)*  
   Proposal for a private monorepo integration with two mutually exclusive managed profiles, letting a single Qwen CLI process retrieve repository-shared context from an admin-bound external memory. Targets enterprise/team usage patterns.

3. **[#8051 — Bound multi-workspace daemon resource usage](https://github.com/QwenLM/qwen-code/issues/8051)** *(OPEN, 9 comments)*  
   Tracking issue for `qwen serve` daemon resource limits. Current count-only caps don't bound bytes held by request bodies, WebSocket assembly, and other memory consumers. Complements PR #8245 (memory budget resolution) and #8341 (configurable concurrency caps).

4. **[#8279 — Could chat compression reuse the main prompt-cache prefix via a fork?](https://github.com/QwenLM/qwen-code/issues/8279)** *(OPEN, 3 comments)*  
   Design discussion (no implementation requested) on whether compression could reuse the main session's prompt cache through fork-like requests. This is part of the broader "Better Prompt Caching" initiative (#8277).

5. **[#8284 — Expose prompt cache hit rate telemetry](https://github.com/QwenLM/qwen-code/issues/8284)** *(OPEN, 2 comments)*  
   Requests cache hit rate as a first-class telemetry signal per LLM request. Closely tied to the prompt-cache optimization push; would give users visibility into cache effectiveness.

6. **[#4777 — Deferred-tools listing in system prompt busts prompt cache on MCP discovery](https://github.com/QwenLM/qwen-code/issues/4777)** *(OPEN, 2 comments)*  
   Identifies a cache-invalidation loop: deferred MCP tool listings bake into the cached system prompt, and any change to the deferred set forces a full cache miss. PR #8276 directly addresses this.

7. **[#8131 — Statusline text cannot be selected in Virtualized History mode](https://github.com/QwenLM/qwen-code/issues/8131)** *(OPEN, 3 comments)*  
   macOS-specific TUI bug where Virtualized History mode prevents statusline text selection. Part of a cluster of TUI polish issues.

8. **[#8330 — @ completion tab switching inaccessible in Warp](https://github.com/QwenLM/qwen-code/issues/8330)** *(OPEN, 3 comments)*  
   Terminal-emulator conflict: Ctrl+Tab in Warp switches terminal tabs, making the `@` completion picker's category tabs unreachable. Highlights the challenge of default keybindings across different terminals.

9. **[#8328 — Preserve Todo compatibility outside Session Workflow views](https://github.com/QwenLM/qwen-code/issues/8328)** *(CLOSED, 2 comments)*  
   Follow-up regression report: after [#7580](https://github.com/QwenLM/qwen-code/pull/7580) merged, `todo_write` applied dependency validation and workflow metadata to all sessions, breaking non-workflow contexts. Fixed by PR #8334.

10. **[#8333 — Main CI failed: cli/acp-cron.test.ts E2E failure](https://github.com/QwenLM/qwen-code/issues/8333)** *(OPEN, 2 comments)*  
    Auto-filed CI failure for the ACP cron integration test ("cron job fires and streams results via sessionUpdate"). Currently `status/ready-for-agent` with autofix in progress—indicating the automated CI-failure pipeline is operational.

---

## Key PR Progress

1. **[#8339 — fix(core): reuse prompt cache during chat compression](https://github.com/QwenLM/qwen-code/pull/8339)** *(OPEN, review/self-reported)*  
   Enables compression to reuse the main conversation's prompt-cache prefix when the compression model matches the main model and the provider supports Anthropic- or DashScope-style caching. Directly implements the design discussed in #8279.

2. **[#8276 — fix(core): preserve prompt cache across deferred tool discovery](https://github.com/QwenLM/qwen-code/pull/8276)** *(OPEN)*  
   Keeps provider tool declarations and cached system instruction stable during deferred tool discovery. `tool_search` presents matching schemas in model-visible results; a stable `deferred_tool_call` bridge routes later calls. Addresses #4777.

3. **[#8274 — feat: fork from any conversation](https://github.com/QwenLM/qwen-code/pull/8274)** *(OPEN, autofix/takeover)*  
   Rework of session branching to target any earlier Assistant response rather than only the latest session state. Treats visible messages as branch points safely (handling tool calls, cancellations, metadata, rewinds, concurrency).

4. **[#8332 — feat(cli): add audio bridge for attachments](https://github.com/QwenLM/qwen-code/pull/8332)** *(OPEN, autofix/takeover)*  
   Transcribes audio attachments (interactive, headless `@`, ACP) through the configured batch voice model when the primary model lacks audio support. Explicitly marks results as untrusted machine transcription.

5. **[#8245 — feat(serve): resolve and report the daemon memory budget](https://github.com/QwenLM/qwen-code/pull/8245)** *(OPEN, autofix/takeover)*  
   Adds memory budget discovery to the `qwen serve` daemon (cgroup reads, heap limits, memory fields under `limits`), giving context to existing RSS/heap sampling. Complements issue #8051.

6. **[#8341 — feat(serve): make sub-session concurrency caps configurable](https://github.com/QwenLM/qwen-code/pull/8341)** *(OPEN, autofix/takeover)*  
   Exposes `serve.maxConcurrentSubSessionsPerCaller` and `serve.maxConcurrentSubSessionsTotal` in settings.json; raises defaults from 5→16 and 20→24.

7. **[#8331 — fix(cli): enable ToolSearch by default for DeepSeek](https://github.com/QwenLM/qwen-code/pull/8331)** *(OPEN, draft)*  
   Flips ToolSearch to default-on for DeepSeek, preserving opt-out and the 10% deferred-tool preload threshold. Updates setting descriptions to no longer discourage ToolSearch for prefix-cache stability.

8. **[#8306 — fix(github-channel): recover interrupted inbound tasks](https://github.com/QwenLM/qwen-code/pull/8306)** *(OPEN, autofix/takeover)*  
   Makes GitHub channel inbound work restart-safe: persists accepted work before dispatch, recovers running/failed work before the next poll, and retries pending comment completion without re-running the agent.

9. **[#8318 — feat(autofix): require isolated targeted E2E proof](https://github.com/QwenLM/qwen-code/pull/8318)** *(OPEN, autofix/takeover)*  
   Adds a fail-closed verification chain for Autofix issues: immutable failure metadata outside editable issue prose, maintainer approval bound to exact issue title/body, and verification of the exact candidate commit against the isolated failing test.

10. **[#8349 — feat(review): drive — readiness polled, completion proven, cleanup guaranteed](https://github.com/QwenLM/qwen-code/pull/8349)** *(OPEN)*  
    New `qwen review drive` subcommand: polls readiness, drives the target, captures actions as facts rather than relying on sleep-based timing. The "build-and-drive verification" technique described as the highest-yield review method in the repo's history.

Also notable: **[#8180 — feat(telemetry): Track tool execution outcomes](https://github.com/QwenLM/qwen-code/pull/8180)** adds an `executionStatus` alongside terminal tool-call status; **[#8343](https://github.com/QwenLM/qwen-code/pull/8343)** auto-updates ECS runners on stable publish; **[#8347](https://github.com/QwenLM/qwen-code/pull/8347)** expands code owner pool for `packages/core`; **[#8310](https://github.com/QwenLM/qwen-code/pull/8310)** adds Web Shell management for GitHub/GitLab channels; **[#8353](https://github.com/QwenLM/qwen-code/pull/8353)** lets ESC cancel ongoing work before popping queued messages.

---

## Feature Request Trends

1. **Prompt-cache optimization** — Multiple threads ([#8277](https://github.com/QwenLM/qwen-code/issues/8277), [#8279](https://github.com/QwenLM/qwen-code/issues/8279), [#8284](https://github.com/QwenLM/qwen-code/issues/8284), [#4777](https://github.com/QwenLM/qwen-code/issues/4777)) target cache stability, reuse, hit-rate telemetry, and compression. This is the dominant active theme.

2. **Daemon / serve resource governance** — [#8051](https://github.com/QwenLM/qwen-code/issues/8051) (bound resource usage), [#8245](https://github.com/QwenLM/qwen-code/pull/8245) (memory budget), [#8341](https://github.com/QwenLM/qwen-code/pull/8341) (configurable concurrency). The `qwen serve` control plane is maturing toward production-grade isolation.

3. **External context / enterprise integration** — Direct external context provider profiles ([#7585](https://github.com/QwenLM/qwen-code/issues/7585)), trusted private ASR base URLs ([#8286](https://github.com/QwenLM/qwen-code/issues/8286)), Web Shell management ([#8310](https://github.com/QwenLM/qwen-code/pull/8310)). Enterprise/monorepo/multi-workspace deployments are a growing focus.

4. **Local / custom model support** — Tool-call execution with local models ([#176](https://github.com/QwenLM/qwen-code/issues/176)) and ToolSearch default for DeepSeek ([#8331](https://github.com/QwenLM/qwen-code/pull/8331)) show continued effort to smooth non-Qwen model integration.

5. **Extension & skill repository installs** — [#2635](https://github.com/QwenLM/qwen-code/issues/2635) (open since March) requests installing extensions directly from the qwen-code repository; community still wants turnkey skill/extension distribution.

---

## Developer Pain Points

- **Local model tool-call reliability** — Issue #176 ran for a year: local models appear to emit valid tool calls that silently don't execute, with no error surfaced. This erodes trust in self-hosted setups.
- **Prompt-cache invalidation** — #4777 and related threads describe silent cost/latency degradation when deferred-tool discovery mutates the cached system prompt. Users want visibility (hit-rate telemetry) and stability.
- **TUI keybinding conflicts** — Multiple issues (#8131, #8330, #938, #5971) report TUI polish problems: unselectable text, terminal-emulator shortcut collisions (Warp Ctrl+Tab), flicker, and scroll-rewind behavior on Linux. The cluster of small UX bugs is a recurring complaint.
- **Chinese-language UX friction** — Several issues (#1409, #2273, #2456, #5029) report Chinese input / mixed-language handling problems: path quoting with spaces (git 手册), model "dumbing down" perceptions, and unexpected content injection. Localization quality remains a hot topic.
- **Session/file provenance confusion** — #7966 asks how to distinguish files created directly vs. indirectly generated by code, and how to attribute workspace files to session contexts. Developers want deterministic session-to-artifact mapping.
- **Tool-call execution transparency** — #3758 (sub-agent detail visibility) requests deeper traceability into sub-agent tool calls and reasoning, not just a summary list. The new executionStatus telemetry in #8180 may be a step toward this.

---

*Digest generated 2026-08-02 from [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) GitHub activity.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-02

*Data source: [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)*

---

## 1. Today's Highlights

The DeepSeek TUI community continues to converge on its v0.9.4 release candidate ([PR #5044](https://github.com/Hmbown/CodeWhale/pull/5044)), which bundles fixes for xAI device login, gpt-5.5 provider crossover, Anthropic wire issues, and macOS immediate-exit launches. A critical quality gate is forming around **secrets management and internal code health**: two new issues ([#5045](https://github.com/Hmbown/CodeWhale/issues/5045), [#5047](https://github.com/Hmbown/CodeWhale/issues/5047)) highlight that API keys silently persist to the working repo's plaintext config only — a serious security flaw for users working across repositories — while a sweep found **464 dead-code attributes** hiding structural drift ([#4785](https://github.com/Hmbown/CodeWhale/issues/4785)). The team is also burning down a backlog of reliability bugs (flaky tests, verifier hangs, tool-budget violations) alongside an aggressively multi-lingual roadmap (Korean, Spanish, Portuguese, Catalan, Hindi, Ukrainian, and more).

---

## 2. Releases

**No new releases in the last 24 hours.**

The most recent milestone is **Codewhale v0.9.4 source candidate** ([PR #5044](https://github.com/Hmbown/CodeWhale/pull/5044)), currently open on the release lane. Per the PR, this release is fully reconciled with `main` and carries **release-blocker fixes** including:

- [#5032](https://github.com/Hmbown/CodeWhale/issues/5032) — xAI device login recovery from a dangling OAuth pointer (3/3 dogfood failures resolved)
- [#5034](https://github.com/Hmbown/CodeWhale/issues/5034) — Provider switch retaining unrelated default model (e.g., gpt-5.5)
- [#4716](https://github.com/Hmbown/CodeWhale/issues/4716) — TUI exiting immediately on fresh macOS terminals

The release lane also includes stack **[PR #5051](https://github.com/Hmbown/CodeWhale/pull/5051)**: turn-scoped tool restrictions and env-gated sampling overrides — allowing external benchmark drivers to run without overlay patches.

---

## 3. Hot Issues (10 selected)

1. **[#5045](https://github.com/Hmbown/CodeWhale/issues/5045) — API keys must be user-global, not repo-scoped** *(new, 1 comment)*
   Credentials entered in one repo go missing when switching projects. The community sees this as a **security and usability must-fix**, given plaintext writes into working-tree configs.

2. **[#5047](https://github.com/Hmbown/CodeWhale/issues/5047) — API keys silently persist only in the working repo** *(new, 1 comment)*
   Same issue filed independently, with concrete detail: keys land in `<cwd>/.codewhale/config.toml` instead of durable global storage. Signals strong operator frustration.

3. **[#4785](https://github.com/Hmbown/CodeWhale/issues/4785) — Dead-code sweep: 464 `#[allow(dead_code)]` attributes hiding drift** *(open, 4 comments)*
   The maintainer himself filed this: stripping those attributes surfaces dead code by measurement. Community reads this as a serious **internal-quality alarm** — the compiler can no longer flag rot.

4. **[#5007](https://github.com/Hmbown/CodeWhale/issues/5007) — YouTuber uses Codex instead of CodeWhale as TUI** *(closed, 6 comments)*
   A community member nudges visibility: a popular YouTuber is showcasing DeepSeek v4-flash with Codex, not CodeWhale. Discussion centers on **discoverability and marketing** rather than code.

5. **[#4085](https://github.com/Hmbown/CodeWhale/issues/4085) — Cannot read/write files under `~/Library/CloudStorage/Dropbox/` on macOS** *(closed, 5 comments)*
   A **File Provider (macOS 12+)** incompatibility: the binary is ad-hoc signed with zero entitlements, yet still fails. Likely requires deeper FS-provider awareness; community flagged it as a real blocker for Dropbox users.

6. **[#5034](https://github.com/Hmbown/CodeWhale/issues/5034) — v0.9.4: switching providers can retain an unrelated default model** *(open, 1 comment, release-blocker)*
   Switching the provider to OpenAI leaves `gpt-5.5` as default even when inherited from another route. Suggests provider/model resolution is not updated as one coherent unit.

7. **[#4683](https://github.com/Hmbown/CodeWhale/issues/4683) — Wrong DeepSeek completions URL / flaky network error** *(open, 3 comments)*
   Intermittent failures to `https://api.deepseek.com/v1/chat/completions` after long idle sessions. Community flags **timeout/keep-alive tuning** as likely culprit.

8. **[#4684](https://github.com/Hmbown/CodeWhale/issues/4684) — `danger-full-access` does not disable tools-layer workspace boundary check** *(closed, 3 comments)*
   Even with OS-level sandbox disabled, tools (`read_file`, `grep_files`, etc.) still enforce workspace boundaries — breaking global skill access. Users expect `danger-full-access` to be truly full.

9. **[#4564](https://github.com/Hmbown/CodeWhale/issues/4564) — `exec --auto`: `--model` and `--toolsets` flags consumed as single arg on Windows** *(open, 2 comments)*
   On Windows npm global installs, pre-exec flags get concatenated into one argument. Community asks for env-var alternatives (`CODEWHALE_MODEL` / `CODEWHALE_TOOLSETS`).

10. **[#4936](https://github.com/Hmbown/CodeWhale/issues/4936) — The product instructs users to run `/rc`, a command the runtime does not have** *(closed, 1 comment)*
    The website ships a copy-to-clipboard button for `/rc` to enroll runners, but the CLI has no such command — a **product–runtime mismatch** that confuses new users.

---

## 4. Key PR Progress (10 selected)

1. **[#5075](https://github.com/Hmbown/CodeWhale/pull/5075) — fix(config): make credential persistence path-safe**
   Rejects relative `CODEWHALE_HOME` / `CODEWHALE_CONFIG_PATH` and routes TUI config reads/writes through a fallible path authority. Directly addresses **#5045 / #5047** (repo-scoped API keys).

2. **[#5076](https://github.com/Hmbown/CodeWhale/pull/5076) — refactor(sandbox): remove dormant Landlock prototype**
   Deletes 361 lines of dead prototype code (non-functional wrapper returned unsandboxed commands). Keeps live bubblewrap selection behavior intact.

3. **[#5069](https://github.com/Hmbown/CodeWhale/pull/5069) — feat(tui): model capability badges in Fleet**
   Adds a shared provider-aware resolver for concise, provenance-labelled model badges. Unknown models never block selection.

4. **[#5066](https://github.com/Hmbown/CodeWhale/pull/5066) — feat(tui): notification quiet mode + per-category switches**
   Enforces a single policy gate across all delivery protocols (desktop + event-sound). Adds `[notifications].quiet`, per-category toggles, and action-first copy.

5. **[#5067](https://github.com/Hmbown/CodeWhale/pull/5067) — fix(tui): operate goals run to completion gate**
   Removes the hard-coded ten-continuation stop; goals now run until verified complete, blocked, or budget-exhausted. Adds `[goal] max_continuations` (default 100).

6. **[#5064](https://github.com/Hmbown/CodeWhale/pull/5064) — feat(compaction): deterministic Continuation Contract**
   Preserves bounded working contract, active intent, decisions, verification evidence, and in-flight tool calls — independent of summarizer model.

7. **[#5068](https://github.com/Hmbown/CodeWhale/pull/5068) — refactor(tui): centralize DeepSeek pro effort mapping**
   One dated source of truth in `client/deepseek_effort.rs`, annotated for the expected early-August docs update; both Chat and Responses paths consume the same table.

8. **[#5065](https://github.com/Hmbown/CodeWhale/pull/5065) — fix(tools): coherent web search/fetch retrieval**
   Centralizes result-count/timeout defaults, anchors open timeouts to the fetch contract, and replaces a stale hardcoded version string.

9. **[#4990](https://github.com/Hmbown/CodeWhale/pull/4990) — fix(devcontainer): support Windows development**
   Switches to a dedicated dev image (with Rust toolchain, rustfmt, pkg-config, DBus dev headers) and replaces host HOME mount with named volumes — fixing invalid Windows HOME expansion and missing build tools.

10. **[#5063](https://github.com/Hmbown/CodeWhale/pull/5063) — fix: issue burn-down batch (7 fixes in one)**
    One commit per fix area, each with regression tests: Anthropic wire strictness, sandbox, workflow, config scoping, session layer, input handling, and TUI. Diagnosed and fixed at the mechanism level, not symptom level.

*Also noteworthy:* **[#4985](https://github.com/Hmbown/CodeWhale/pull/4985)** adds an optional `workspace` filter to `GET /v1/tasks` — GUI-scoped task listing; **[#5050 / #5049 / #5048]** are routine dependabot bumps (eslint 9→10, autoprefixer, react 19.2.6→19.2.8).

---

## 5. Feature Request Trends

From all issues across the last 24h, these are the top **feature directions** the community is pushing:

| Direction | Evidence (Issues / PRs) |
|---|---|
| **User-global credential storage** — secrets must live outside repo-scoped config, most likely OS keychains | #5045, #5047, #5075 |
| **i18n / localization wave** — Korean, Spanish, pt-BR, French, German, Catalan, Hindi (Devanagari), Ukrainian as sibling to Russian | #3093, #4790, #4791, #4788, #4749 |
| **Tool budget enforcement** — hard per-turn tool caps with write-first constraints, so agents respect explicit budgets | #4415, #5051 |
| **Continuation / goal control** — goals should run to verified completion, with user-configurable continuation caps | #5067, #5064 |
| **Provider-scoped defaults + consent flow** — cross-provider `/model auto` with explicit provider-scoped routing consent | #4411, #5034 |
| **Notification policy control** — global quiet mode + per-category switches across desktop delivery and event sounds | #5066 |
| **Model capability introspection** — provenance-labelled badges so users know what a model can/can't do | #5069 |
| **Windows / devcontainer parity** — first-class Windows dev setup and flag handling | #4990, #4564 |

---

## 6. Developer Pain Points

- **Secrets leak into the working repo** (#5045, #5047): the most urgent complaint — API keys persist in `<cwd>/.codewhale/config.toml` in plaintext, silently absent from other repos. Users call this a **security footgun**.

- **`danger-full-access` is not full** (#4684): the OS-level sandbox is disabled, but the tools layer still enforces workspace boundary checks — breaking "global skill access" and frustrating operators who expect one switch to turn everything off.

- **Release-blocker stability** (#5034, #4716): switching providers can leave the wrong default model; the TUI can exit immediately in a fresh macOS terminal (Stop-ship). These class of issues erode trust in the release cadence.

- **Internal code debt is visible** (#4785): 464 dead-code attributes, 14,000+ line god-files (web_search 2,881 lines, shell.rs 3,433, runtime_api 3,020), duelling ToolRegistry systems, and flaky verifier tests — a wall the maintainer himself wants torn down.

- **Product/runtime mismatch** (#4936): the website instructs users to run `/rc`, which the CLI does not implement — a jarring onboarding failure.

- **Flaky / environment-sensitive tests** (#5056): verifier background tests still flake under parallelism; `/workspace`-sensitive fixtures and 12 untriaged `#[ignore]` tests gate reliability.

- **Localization is compounding**: Hindi via Devanagari terminal shaping is a genuine technical spike; Ukrainian is politically/operationally coupled to shipping Russian first — community expects both to ship together to avoid a known developer-tool friction.

---

*Prepared by an AI technical analyst focused on AI developer tooling. All links point to the original GitHub objects for verification.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*