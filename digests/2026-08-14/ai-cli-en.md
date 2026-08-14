# AI CLI Tools Community Digest 2026-08-14

> Generated: 2026-08-14 02:04 UTC | Tools covered: 9

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
**Date:** 2026-08-14 | **Prepared for:** Technical Decision-Makers

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape is experiencing rapid, concurrent evolution across seven major players—Claude Code, Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code, OpenCode, Pi, Qwen Code, and CodeWhale. The ecosystem is converging on multi-agent orchestration as the next frontier, with Claude Code shipping subagent forking, Qwen Code introducing native `/coordinate` multi-agent workflows, and CodeWhale refining fleet role management. Simultaneously, the community is grappling with a maturity phase characterized by Windows instability (a recurring pain point across 5+ tools), MCP reliability issues, and session-state integrity bugs. Release cadence varies dramatically—from Codex's four daily alpha releases to Kimi's 24-hour silence—reflecting divergent development philosophies. Security concerns around supply-chain vulnerabilities, unsafe upgrade paths, and data redaction are emerging as differentiators, while cross-session communication and persistent memory remain the most requested features across the board.

---

## 2. Activity Comparison

| **Tool** | **Issues (24h)** | **PRs (24h)** | **Releases (24h)** | **Top Issue Severity** | **Maintainer Activity** |
|---|---|---|---|---|---|
| **Claude Code** | 10+ tracked (15+ cluster) | 2 (trivial) | 2 (v2.1.231, v2.1.232) | Critical (data-loss cluster) | High (releases), Low (PRs) |
| **OpenAI Codex** | 10 tracked | 10 (all substantive) | 4 alphas | High (OOM crash, resource leaks) | Very High (active PRs + alphas) |
| **Gemini CLI** | 10 tracked | 10 (3 merged, 2 security) | 1 nightly | Critical (subagent false success) | High (security fixes landed) |
| **GitHub Copilot CLI** | 12+ new | 1 (docs, closed) | 2 patches | Critical (session data-loss ×3) | Moderate (releases, few PRs) |
| **Kimi Code** | 3 updated | 0 | None | Critical (88k runaway tokens) | Minimal (no maintainer responses) |
| **OpenCode** | 10 tracked | 10 (mixed open/closed) | None | Critical (pnpm self-deletion) | Very High (perf refactoring wave) |
| **Pi (earendil-works)** | 10 tracked | 10 (2 merged, 1 draft) | None | Critical (compaction never triggers) | High (maintainers responding) |
| **Qwen Code** | 10 tracked | 10 (substantive) | 2 (stable + preview) | High (Gemini Vertex 400 errors) | Very High (multi-area PRs) |
| **CodeWhale** | 10 tracked | 10 (3 community merged) | 1 stable | High (32-field schema errors) | Very High (v0.9.8 active dev) |

**Key observations:**
- **Most active communities:** Claude Code, Codex, Gemini CLI, OpenCode, Qwen Code
- **Fastest iteration:** Codex (4 alphas/day), Qwen Code, OpenCode (performance wave)
- **Most concerning response gaps:** Kimi Code (no maintainer comments on critical issues)
- **Best security posture this week:** Gemini CLI (2 CVEs addressed, 2 security PRs)

---

## 3. Shared Feature Directions

| **Feature Direction** | **Tools** | **Specific Community Needs** |
|---|---|---|
| **Multi-agent orchestration** | Claude Code, Qwen, Gemini, CodeWhale, OpenCode | • Cross-session dependency chaining (Claude #24798)<br>• Leader/worker dispatch (Qwen #8718)<br>• Subagent trajectory visibility in bug reports (Gemini #22598)<br>• Read-only fleet roles with actual utility (CodeWhale #5356) |
| **Persistent memory** | Kimi (#1283), Gemini (Auto Memory), Claude (context compaction) | • Cross-session recall of project patterns<br>• Redaction-before-extraction for sensitive code (Gemini #26525)<br>• Deterministic, non-retrying memory processing (Gemini #26522) |
| **MCP server resilience** | Copilot, Codex, Gemini, Claude | • OAuth refresh concurrency fixes (Copilot #4472)<br>• Retry/backoff on transient 5xx (Copilot #4466)<br>• No `nextCursor: null` violating strict clients (CodeWhale #5336)<br>• Per-server callback ports (Codex #38448) |
| **Session data-integrity** | Claude, Copilot, Pi, Qwen | • No silent data loss on interrupt (Copilot #4477)<br>• Cross-session messages must not wedge (Claude cluster)<br>• Compaction must never truncate context (Pi #6879, OpenCode #42437)<br>• Restore timeouts must not kill current session (Qwen #8678) |
| **Token accounting transparency** | Claude (#53065), OpenCode (#42420) | • Advisor/subagent usage separated from main turn<br>• Response `modelId` preserved for cost tracking<br>• Compaction triggers on real context, not summed usage |
| **Per-agent model/effort config** | Copilot (#2904, #2133) | • Frontmatter `effort` field parallel to `model`<br>• Array syntax parity with VS Code Copilot Chat |

---

## 4. Differentiation Analysis

| **Tool** | **Feature Focus** | **Target User** | **Technical Approach** |
|---|---|---|---|
| **Claude Code** | Subagent forking, @-mention sessions, compliance tools | Enterprise dev teams, compliance-heavy orgs | Forking subagents with prompt-cache inheritance; Windows Desktop (MSIX) focus |
| **OpenAI Codex** | Multi-provider support (Bedrock), skills system, Guardian safety | Power users wanting provider flexibility | Rapid alpha cadence; Rust core; skill frontmatter with model annotations |
| **Gemini CLI** | Capacity-resilience retries, AST-aware code understanding, sandboxing | CI/CD users, unattended automation | Context-aware silent retries; nightly builds; security-focused PRs (supply-chain) |
| **GitHub Copilot CLI** | MCP ecosystem, custom agents, multi-client sessions | VS Code-centric developers | Patch releases focused on MCP OAuth and session visibility; `--enable-mcp-server` flag |
| **Kimi Code** | *(No visible direction)* | *(Unclear)* | *(Minimal public activity)* — 🚨 **response deficit** |
| **OpenCode** | V2 rewrite, TUI performance, lazy loading | Performance-sensitive TUI users | Kit Langton's lazy-dependency refactoring; multi-TUI race fixes; security audit response |
| **Pi** | TUI polish, terminal hygiene, compaction correctness | Terminal purists, CJK users | Visual-line caching; SIGINT restoration; compact-between-tool-turns design |
| **Qwen Code** | Multi-agent fleets, web-shell, daemon sessions | Chinese ecosystem, cloud (Vertex) users | `/coordinate` native workflows; pollable turn-status endpoints; OpenTUI renderer migration |
| **CodeWhale** | Codewhale rebrand, local DS4 support, model guardian tier | DeepSeek-centric users, self-hosters | 32-field schema simplification; read-only role classifier-bounded bash; PiP host terminal |

**Key differentiators:**
- **Enterprise vs. enthusiast:** Claude Code (compliance/CVP) vs. OpenCode/Pi (TUI purists)
- **Open vs. closed AI providers:** Codex (Bedrock/Ollama) vs. Qwen (Vertex/Gemini) vs. Pi (Anthropic/codex local)
- **Multi-agent philosophy:** Claude (intelligent forking) vs. Qwen (leader-worker fleets) vs. CodeWhale (role-gated read-only)

---

## 5. Community Momentum & Maturity

| **Tier** | **Tools** | **Signal** |
|---|---|---|
| **🏆 Most mature & responsive** | **Codex** in alpha → 4 releases/day; **Gemini CLI** → security fixes landed same-day; **Qwen Code** → 2 releases + 10 substantive PRs; **OpenCode** → performance refactor wave | High PR throughput; maintainers actively closing issues; security posture improving |
| **Mature but issue-heavy** | **Claude Code** → 2 releases but 15+ cross-session regressions open with no fix PR; **Pi** → maintainers responding but critical compaction bug open; **Copilot CLI** → releases land but OAuth/session data-loss cluster unresolved | Dependable releases offset by systemic bug clusters |
| **⚠️ Response deficit** | **Kimi Code** → 0 PRs, 0 releases, 0 maintainer comments on critical issues (88k-token runaway, ACP hang) in 24h | Community starting to notice; trust eroding |

**Maturity signals:**
- **Benchmark integrity:** Qwen Code's SWE-bench quarantine shows proper validation governance
- **Supply-chain hygiene:** Gemini (SHA-pinning, CVE fixes), Codex (action pinning), Qwen (CODEOWNERS/least-privilege) leading
- **Docs/parity gaps:** Copilot CLI's closed docs PR (#4476) suggests frontmatter decisions still pending

---

## 6. Trend Signals & Developer Recommendations

### 🔮 Industry Trends from Community Feedback

1. **Multi-agent is the killer feature, but reliability is the gating factor.** Every tool is shipping multi-agent capabilities (Claude forking, Qwen `/coordinate`, CodeWhale fleet roles), yet every community reports subagent hangs, false successes, or unauthorized execution. **→ Adopt tools with deterministic subagent status (Gemini's retry/TTL work, Qwen's pollable endpoints) and demand trajectory visibility in bug reports.**

2. **Windows is the neglected platform.** Across 5+ tools, Windows-specific issues dominate (MSIX remediation, Ctrl+V regressions, console flashing, installer hash failures, process leaks). **→ Evaluate your Windows CI pipeline; prefer tools with documented Windows support (Claude's MSIX, Qwen's installer) and flag structural gaps.**

3. **Context compaction is the new battleground.** Pi's never-triggering compaction, Claude's advisor token inflation, OpenCode's silent instruction pruning, and Gemini's compaction side-effects collectively show context management is still immature. **→ Test long-running sessions (2h+) end-to-end; verify compaction triggers before provider overflow; audit token accounting for subagent usage.**

4. **Supply-chain security is now table stakes.** From Gemini's `simple-git` CVE to OpenCode's `curl|bash` upgrade concern and CodeWhale's MCP spec violations—communities are treating insecure infrastructure as a dealbreaker. **→ Prefer tools with SHA-pinned actions, secure upgrade paths, and explicit vulnerability disclosure.**

5. **Transparency tools are demanded.** `/dryrun` previews (CodeWhale), response-model IDs (OpenCode), token accounting (Claude), and denial rationales (CodeWhale) signal a shift toward "show me exactly what the model sees and does." **→ Choose tools that expose request payloads, audit trails, and decision rationale—essential for compliance-minded teams.**

6. **MCP is here to stay, but OAuth and transport resilience are the pain points.** Remote MCP adoption is rising (Copilot's OAuth scopes, Codex's per-server callback ports, Claude's redirect fix), yet silent failures on transient errors are common. **→ Standardize on MCP servers with strict spec compliance (no `nextCursor: null`), configurable retry/backoff, and robust OAuth flows.**

### 🛠️ Practical Recommendations

| **Workflow** | **Recommended Tool(s)** | **Why** |
|---|---|---|
| **CI/CD automation** | Gemini CLI, Qwen Code | Capacity-resilience retries, pollable endpoints, security-hardened pipelines |
| **Enterprise compliance** | Claude Code | Cyber Verification Program, subagent forking with prompt-cache sharing |
| **Multi-provider flexibility** | Codex | Bedrock/Ollama support, skill frontmatter model annotations |
| **Performance-focused TUI** | OpenCode, Pi | Lazy-loading (50% startup cut), visual-line caching, terminal hygiene fixes |
| **MCP-heavy workflows** | Copilot CLI (with caution) | `--enable-mcp-server` flag, but OAuth/refresh issues unresolved |
| **Chinese ecosystem / Vertex AI** | Qwen Code | Vertex auth fixes, OpenTUI renderer, multi-agent fleets |
| **Cost-sensitive self-hosters** | CodeWhale | Local DS4 keyless setup, model guardian tier, `/dryrun` preview |
| 🚨 **Avoid for production** | **Kimi Code** | No maintainer response on critical issues; unstable streaming; runaway token bugs |

---

*Report generated from community digest data for 2026-08-14. All issue/PR references are from the respective GitHub repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-08-14 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following PRs attracted the most sustained community discussion, either through lengthy review threads or repeated reproduction reports:

### #1298 — skill-creator evaluation pipeline repair (MartinCajiao)
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/1298)
**★★★★★ Most-discussed PR (10+ independent reproductions)**

Fixes `run_eval.py`, which reports `recall=0%` for every skill description regardless of content — making the entire description-optimization loop (`run_loop.py`, `improve_description.py`) optimize against noise. Touches Windows stream reading, trigger detection, and parallel worker handling. Closes the long-running issue #556.

### #514 — document-typography skill (PGTBoos)
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/514)

Typographic quality control for generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. Addresses a class of defects users report across all document-format skills (docx, pdf, odt).

### #538 — PDF case-sensitivity fix (Lubrsy706)
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/538)

Two-line fix correcting eight case mismatches in `skills/pdf/SKILL.md` (`REFERENCE.md` → `reference.md`, etc.). Critical for macOS/Linux users where case-sensitive filesystems break the skill.

### #486 — ODT/ODS skill (GitHubNewbie0)
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/486)

Full OpenDocument Format support: create, fill, read, convert `.odt`/`.ods`, plus ODT-to-HTML conversion. Addresses the LibreOffice/ISO-standard document gap in the official collection.

### #210 — frontend-design skill revision (justinwetch)
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/210)

Rewrites the frontend-design skill for clarity and actionability — every instruction must be executable within a single conversation. Heavily discussed as a model for how existing skills should be revised.

### #541 — DOCX tracked-change ID collision fix (Lubrsy706)
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/541)

Fixes document corruption when adding tracked changes to files with existing bookmarks — `w:id` is a shared ID space across bookmarks, comments, and move ranges; hardcoded low IDs collide.

### #568 — ServiceNow platform skill (Vanka07)
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/568) — *most recently updated 2026-08-12*

Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD/CSM, SPM/PPM, vulnerability and security incident response, plus IntegrationHub.

### #83 — skill-quality-analyzer + skill-security-analyzer (eovidiu)
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/83)

Two meta-skills for evaluating other skills across five dimensions (structure, documentation, examples, resources) and auditing skill security. Notable because it addresses the community's trust concerns from day one.

---

## 2. Community Demand Trends

Distilled from the most-commented Issues:

| Demand Direction | Evidence | Signal Strength |
|---|---|---|
| **Reliability of the skill-creator toolchain** | Issues #556 (12 comments, 7 👍), #1169, #202 — `run_eval.py` reports false `recall=0%`; Windows subprocess bugs; skill-creator itself violates best practices | ★★★★★ Highest — developer-tooling defects block all skill authorship |
| **Trust & security boundaries** | Issue #492 (43 comments, 2 👍) — community skills under `anthropic/` namespace impersonate official skills, creating privilege-escalation risk | ★★★★★ Highest — systemic, unaddressed |
| **Org-wide skill distribution** | Issue #228 (16 comments, 8 👍) — no shared skill library; manual file sharing via Slack/Teams | ★★★★ High — enterprise adoption blocker |
| **Duplicate skill collisions** | Issue #189 (9 👍) — `document-skills` and `example-skills` plugins install identical skills, doubling context consumption | ★★★ Medium — packaging bug, easy fix |
| **Context-window discipline** | Issue #1487 — `claude-api` skill injects ~156k tokens in one tool call; Issue #12 — docx skill corrupts files via whitespace reformatting | ★★★ Medium — performance + correctness |
| **Meta-skills for output governance** | Issues #412, #1329, #1385 — agent-governance patterns, compact-memory notation, reasoning quality gates | ★★ Emerging — early-stage proposals with active authors |

**Dominant pattern:** The community's loudest demand is not for *more skills* — it is for *trustworthy infrastructure*: a reliable eval pipeline, a security review process, and organizational distribution channels.

---

## 3. High-Potential Pending Skills

PRs with active discussion that are likely to land in the official collection:

| PR | Skill | Why It Stands Out |
|---|---|---|
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** — mechanical file verification + four-dimension reasoning quality gate (v1.3.0) | Universal, model-agnostic, addresses the "AI output confidence" gap; actively iterated by author (Issue #1385 proposal) |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** — Testing Trophy model, unit/React/e2e coverage, what *not* to test | Fills the most obvious gap in the official collection; comprehensive scope |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** — retro/pixel-art game development via pyxel-mcp | Narrow but high-quality; active ecosystem lead (kitao) behind it |
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** — lifecycle management for accumulated planning artifacts | Addresses a real operational pain (issue #1417); credited collaboration |
| [#181](https://github.com/anthropics/skills/pull/181) | **SAP-RPT-1-OSS predictor** — SAP tabular foundation model for business analytics | Enterprise-relevant; vendor-backed model |
| [#1538](https://github.com/anthropics/skills/pull/1538) | **Spec-compliance repairs** — fixes two skills failing `skills-ref validate` | Meta-correctness PR; signal that the community self-policing spec adherence |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for trustworthy infrastructure — a reliable eval pipeline, a security review process, and org-wide distribution — rather than for new skill capabilities themselves.**

Every top-discussed issue (#492 trust boundary abuse at 43 comments; #556 eval failure at 12 comments; #228 org sharing at 16 comments) and the highest-comment PRs (#1298, #541, #538) are all plumbing: fixing broken tooling, closing security holes, and making distribution sane. The skills themselves that attract the most attention are *meta-skills* (self-audit, quality analyzers, plan-file-hygiene) — the community wants guardrails for AI output, not just more task automation. The collection's growth bottleneck is not content; it's governance.

---

# Claude Code Community Digest — 2026-08-14

## Today's Highlights

Two releases shipped within 24 hours: **v2.1.232** turns on subagent forking by default (background spawns, full context inheritance, prompt-cache sharing) and adds @-mention inter-session communication, while **v2.1.231** fixes an MCP OAuth redirect-URI mismatch affecting pre-registered clients like Slack. The community conversation remains dominated by a **large cluster of Windows desktop cross-session messaging regressions** (10+ issues, all tracing to the 2.1.222→2.1.227 runtime jump), plus ongoing complaints about cyber-safeguard false positives hitting CVP-approved orgs and the `advisor()` tool inflating token counts.

---

## Releases

### v2.1.232 ([changelog](https://github.com/anthropics/claude-code/releases/tag/v2.1.232))
- **Subagent forking now on by default**: a `subagent_type: "fork"` inherits the full conversation and prompt cache; non-teammate agent spawns in interactive sessions run in the background by default.
- **@-mention sessions**: typing `@` in the prompt lets you reference another Claude session by name.

### v2.1.231 ([changelog](https://github.com/anthropics/claude-code/releases/tag/v2.1.231))
- **Fixed MCP OAuth sign-in** failing with a redirect-URI mismatch for servers that use a pre-registered OAuth client (e.g., Slack).

---

## Hot Issues

1. **[#84352 — CVP-approved org still receives cyber-safeguard blocks](https://github.com/anthropics/claude-code/issues/84352)** (94 comments, 14 👍)  
   A Claude.ai org with prior Cyber Verification Program approval is suddenly blocked again — and the Verification Portal now shows "Under review" despite the earlier approval email. Highest-traffic issue this week; community suspects a re-review or rollback. Duplicate [#86527](https://github.com/anthropics/claude-code/issues/86527) reports the same blocks firing on Claude's *own* generated context, not user input.

2. **[#24798 — Inter-session communication](https://github.com/anthropics/claude-code/issues/24798)** (66 comments, 21 👍)  
   Long-standing feature request (Feb 2026) for sequencing higher-level workflows across siloed sessions. Still open and highly upvoted; the v2.1.232 @-mention feature partially addresses this but doesn't cover programmatic dependencies.

3. **[#85603 — Typed input silently dropped at turn end](https://github.com/anthropics/claude-code/issues/85603)** (22 comments)  
   In the TUI, text typed while a turn is running is silently discarded when the turn ends — no Escape involved, no error. Reproduces on 2.1.220 and 2.1.226, macOS. Likely related to the new background-spawn behavior.

4. **[#86012 — Cross-session messages leave recipient unresponsive](https://github.com/anthropics/claude-code/issues/86012)** (15 comments, 3 👍)  
   Desktop app (MSIX) recipient stays at `hadFirstResponse=false` until idle-timeout force-kills the session 15–20 minutes later. One of the earliest reports in the cross-session regression cluster.

5. **[#53065 — advisor() inflates input tokens](https://github.com/anthropics/claude-code/issues/53065)** (14 comments, 6 👍)  
   The advisor tool forwards the full transcript to a second model, and the summed usage triggers premature auto-compaction. Duplicate [#81620](https://github.com/anthropics/claude-code/issues/81620) confirms context size is reported ~2× larger, firing compaction at ~50% of the real window.

6. **[#82092 — Desktop telemetry rejected with missing_token](https://github.com/anthropics/claude-code/issues/82092)** (10 comments, 5 👍)  
   Apps gateway serves an `otlpEndpoint` pointing at its own bearer-gated ingest but omits `otlpHeaders`, so every Desktop telemetry flush fails. Silent observability loss for Anthropic and users alike.

7. **[#86275 — send_message reports success, never delivered (Windows)](https://github.com/anthropics/claude-code/issues/86275)** (8 comments, 4 👍)  
   Works pre-update, broken after 2.1.222→2.1.227. Same shape as several others in the cluster — success result, no delivery.

8. **[#86138 — send_message to paused session leaves phantom turn](https://github.com/anthropics/claude-code/issues/86138)** (7 comments)  
   Target session resumes but the message never reaches the model; session stuck in a permanent phantom turn. Distinct failure mode within the same regression family.

9. **[#86059 — Receiving session interrupted, no knowledge of message](https://github.com/anthropics/claude-code/issues/86059)** (4 comments)  
   The recipient's current turn is interrupted when a cross-session message arrives, and afterwards the session has no record of it. Data-loss concern.

10. **[#86385 — Still broken in 2.1.231](https://github.com/anthropics/claude-code/issues/86385)** (3 comments, 1 👍)  
    Explicitly retested after updating the runtime to 2.1.231 — still broken. Confirms the fix did not land in the latest release as of yesterday.

---

## Key PR Progress

Note: Only **2 PRs** were merged/updated in the last 24h, and both are trivial. The full PR queue remains sparse (the extensive issue list is not matched by visible PR activity in this window). Picks below include older but notable items still in flight.

1. **[#86537 — Fix duplicated word in CHANGELOG.md](https://github.com/anthropics/claude-code/pull/86537)** (open)  
   Doc-only typo fix ("to to" → "to") in the `CLAUDE_BASH_NO_LOGIN` entry. Merged-likely quality; low risk.

2. **[#60280 — SHA-pin remaining actions/checkout and actions/github-script](https://github.com/anthropics/claude-code/pull/60280)** (closed)  
   Supply-chain hardening: pins checkout@v4 (SHA `34e114...`) and github-script across 6 workflows (`auto-close-duplicates`, `backfill-duplicate-comments`, `claude-dedupe-issues`, `claude-issue-triage`). Closed after follow-up to #56784; likely superseded.

3. **[#56784 — SHA-pin actions (first pass)](https://github.com/anthropics/claude-code/pull/56784)** (closed, referenced by #60280)  
   Original pass pinning third-party actions; #60280 was the cleanup for what this missed.

4. **[#86014 — Cross-session send_message: 0/4 delivery](https://github.com/anthropics/claude-code/issues/86014)** — *not a PR*, but the highest-signal item in this window. No fix PR has been opened yet, which is itself the story.

5. **[#86386 — Turns hang at 0 tokens on cross-session](https://github.com/anthropics/claude-code/issues/86386)** (4 comments)  
   Manual prompts work; only cross-session-triggered turns hang. Points to input-queue handling rather than model-level issues.

6. **[#86237 — Messages render but never reach runtime queue](https://github.com/anthropics/claude-code/issues/86237)** (4 comments)  
   UI shows the message, runtime input queue never gets it — useful diagnostic boundary for the regression.

7. **[#85887 — MSIX reverts to NeedsRemediation; CoworkVMService blocks repair](https://github.com/anthropics/claude-code/issues/85887)** (2 comments)  
   Windows install integrity issue: package flips to "Modified, NeedsRemediation" within minutes; Repair impossible due to CoworkVMService. Blocks update channels entirely.

8. **[#86146 — GPU crash on Cloudflare Turnstile login page](https://github.com/anthropics/claude-code/issues/86146)** (1 comment)  
   Embedded browser preview GPU crash (exit 0x60C201E) deadlocks the main process; presents as "passkey prompt crashes app" (Proton Pass).

9. **[#82642 — PreToolUse denial discards decisionReason](https://github.com/anthropics/claude-code/issues/82642)** (1 comment)  
   Denying hook's identity is never persisted; after the fact, the audit trail can't tell which hook denied. Minor but relevant for compliance-minded teams.

10. **[#74017 — Desktop wedged after /compact (macOS)](https://github.com/anthropics/claude-code/issues/74017)** (2 comments)  
    Deferred local-command send is echo-tracked by a UUID that never echoes, leaving the session permanently stuck. Older, but deterministic and still open.

---

## Feature Request Trends

- **Inter-session orchestration** ( [#24798](https://github.com/anthropics/claude-code/issues/24798), 66 comments) — users want to chain sessions with dependencies, not just message them ad hoc. The @-mention feature in v2.1.232 is a first step but lacks programmatic sequencing.
- **Subagent isolation vs. shared context** ( [#53065](https://github.com/anthropics/claude-code/issues/53065), [#81620](https://github.com/anthropics/claude-code/issues/81620)) — users want advisor/subagent token accounting separated from the main turn so auto-compaction triggers on real context, not summed usage.
- **Cross-platform parity for Desktop workflows** — many Windows-specific issues (MSIX, AppX silos, CoworkVMService) highlight demand for the same agent-view + session-mgmt experience that macOS users get without install-layer friction.
- **Background agent runs** — the v2.1.232 change to background spawns by default is likely a direct response to requests for non-blocking multi-agent operation; expect follow-up issues as edge cases surface.

---

## Developer Pain Points

1. **Cross-session messaging regression (Windows Desktop, 2.1.222→2.1.227)** — at least 10 open issues (`#86012`, `#86275`, `#86138`, `#86014`, `#86069`, `#86386`, `#86059`, `#86237`, `#86370`, `#86088`, `#86212`, `#86385`, `#86398`, `#86029`, `#80863`). Communal frustration is high: the tool reports success, the message is lost or wedged, and the fix did **not** make it into 2.1.231. Users coordinating 15–25 concurrent sessions are blocked.

2. **Cyber-safeguard false positives on CVP-approved orgs** (`#84352`, `#86527`) — orgs that passed the Cyber Verification Program are blocked again, sometimes on Claude's own generated context. Compliance-to-production pipelines are breaking with no portal path forward.

3. **Windows install/update fragility** (`#73107`, `#77421`, `#85887`) — MSIX package upgrades fail with "Another program is currently using this file"; stale elevated processes pin the AppX container; `CoworkVMService` makes Repair impossible. Users are effectively stuck on old versions or facing reboot cycles.

4. **Token accounting distortion** (`#53065`, `#81620`) — the advisor tool's forwarded transcript inflates reported usage by ~2×, firing auto-compaction early and truncating effective context. This affects anyone doing long-running agent work with subagents.

5. **Silent data-loss patterns in TUI and Desktop** (`#85603`, `#74017`, `#86059`) — typed input dropped at turn end, sessions wedged after `/compact`, receiving sessions interrupted with no memory of the message. The common thread: input is accepted (no error) but never processed, which erodes trust in interactive workflows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-14

## Today's Highlights
The Codex team shipped four alpha releases today (0.148.0-alpha.11 through .14), continuing the rapid iteration cadence. The most significant development is the addition of an Amazon Bedrock Runtime provider, expanding Codex's multi-provider support beyond OpenAI's native endpoints. The community remains heavily focused on Windows stability, with several long-running issues around IDE context failures and resource leaks still unresolved.

## Releases
Four new alpha builds were published in the last 24 hours:
- [rust-v0.148.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.14)
- [rust-v0.148.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.13)
- [rust-v0.148.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.12)
- [rust-v0.148.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.11)

No release notes were provided; these appear to be incremental alpha iterations.

## Hot Issues
1. **[#37458 — Extension fails to start: "couldn't load its resources"](https://github.com/openai/codex/issues/37458)** (53 comments, CLOSED)
   The most active issue this week. Windows users saw the Codex VS Code extension fail outright after an update. The 53-comment thread suggests a wide-impact regression, now closed — likely fixed in the latest extension build.

2. **[#26984 — MCP stdio servers leak pipe fds + orphan processes → EMFILE](https://github.com/openai/codex/issues/26984)** (21 comments, OPEN)
   A long-running resource leak that causes cumulative "Too many open files" errors. Still open after two months — a serious reliability concern for users depending on MCP servers.

3. **[#37403 — macOS Desktop cannot resume Remote Control: "already has an active writer"](https://github.com/openai/codex/issues/37403)** (18 comments, OPEN)
   Regression breaking the workflow of remote-controlling Codex CLI threads from mobile. 11 upvotes signal strong community interest in cross-device continuity.

4. **[#31553 — VS Code extension stopped auto-including IDE context](https://github.com/openai/codex/issues/31553)** (17 comments, CLOSED)
   IDE context silently dropping out after an extension update, particularly on Windows/remote setups. High upvote count (12) — this was a widely felt regression.

5. **[#26990 — Windows Desktop local state not crash-safe after power loss](https://github.com/openai/codex/issues/26990)** (16 comments, OPEN)
   Pins, projects, and config regress after power loss. Data-integrity concern for desktop users; still open after two months.

6. **[#34920 — IDE Context fails with RPC serialization error on Windows](https://github.com/openai/codex/issues/34920)** (10 comments, CLOSED)
   Companion issue to #31553 affecting multiple extension versions. Now closed — appears resolved.

7. **[#2062 — Request: monitor background services](https://github.com/openai/codex/issues/2062)** (9 comments, OPEN)
   A year-old feature request with 10 upvotes: let the agent inspect logs of long-running builds/servers without blocking other tasks.

8. **[#23454 — $skill explicit invocation ignores local explicit-only skills](https://github.com/openai/codex/issues/23454)** (8 comments, OPEN)
   Skills system bug: explicitly-invoked skills don't respect local-only visibility rules. Core skills workflow still has rough edges.

9. **[#33551 — Multi-Agent V2 sends OpenAI-specific messages to external providers](https://github.com/openai/codex/issues/33551)** (8 comments, OPEN)
   Interoperability bug: subagent instructions use OpenAI-specific `agent_message` items that Ollama and other Responses-compatible providers can't handle.

10. **[#38455 — Desktop repeatedly spawns Computer Use workers, crashes with V8 OOM](https://github.com/openai/codex/issues/38455)** (3 comments, OPEN)
    Newly reported severe macOS regression: 187 computer-use threads at crash, SIGABRT via node::OOMErrorHandler. The "0.98% unexplained telemetry" detail is a concern.

## Key PR Progress
1. **[#38470 — Add an Amazon Bedrock Runtime provider](https://github.com/openai/codex/pull/38470)** — New built-in provider for regional `bedrock-runtime` OpenAI-compatible endpoints with SigV4 service config.

2. **[#38467 — Parse model annotations from skill frontmatter](https://github.com/openai/codex/pull/38467)** — Optional `model` field in skill metadata (e.g., `model: luna`) with graceful fallback for unsupported values.

3. **[#38475 — Add bounded skill model delegation instructions](https://github.com/openai/codex/pull/38475)** — Skills requesting Luna while running on Sol/Terra now get bounded delegation instructions, validating model availability in the provider namespace.

4. **[#38461 — Centralize turn environment selection state](https://github.com/openai/codex/pull/38461)** — Refactor: `TurnEnvironmentSelection` now stored on resolved environments instead of duplicated fields. Cleaner state management.

5. **[#38463 — Preserve thread subscriptions across revert reloads](https://github.com/openai/codex/pull/38463)** — Fixes subscription loss when a connection closes during `thread/revert`.

6. **[#38445 — Retain client developer messages across context compaction](https://github.com/openai/codex/pull/38445)** — Preserves client-authored developer instructions post-compaction when enabled.

7. **[#38448 — Support per-server MCP OAuth callback ports](https://github.com/openai/codex/pull/38448)** — `oauth.callback_port` per MCP server, configurable via TOML, plugin declarations, and skill metadata.

8. **[#38447 — Add running-task exit choices to local daemon sessions](https://github.com/openai/codex/pull/38447)** — Ctrl-C with empty composer now offers: cancel task, exit while leaving task running, or stop everything. UX win for background tasks.

9. **[#38441 — Give Guardian V2 full tool action context](https://github.com/openai/codex/pull/38441)** — Safety reviewers now see the pre-hook `ToolPayload` with full action and conversation context, not just tool name/ID.

10. **[#38443 — Tag current time reminders in model context](https://github.com/openai/codex/pull/38443)** — Current time reminders wrapped in `<current_time_reminder>` tags for better model discrimination; avoids accumulation in full-history subagents (#38446 complements this).

## Feature Request Trends
- **Background process monitoring** (#2062): Users want Codex to supervise long-running builds/servers, inspect logs, and continue other work without blocking.
- **Conversation lifecycle management** (#24060, #38466): Auto-updating chat titles and better handling of long-running threads after compaction.
- **Cross-device session continuity** (#37403): Remote-controlling desktop CLI threads from mobile is a desired workflow that regressions keep breaking.
- **Provider interoperability** (#33551): Multi-provider support (Ollama, Bedrock) needs standardization of message formats and item types.
- **Skill system maturity** (#23454, #38467, #38475): More granular control over model assignment and explicit invocation semantics.

## Developer Pain Points
- **Windows remains the problem child.** Issues #37458, #31553, #34920, #35419, #26990, #30435, #38408, #38378 — a disproportionate share of regressions target Windows (and WSL2). The repeated IDE context failures on Windows specifically suggest a structural testing gap.
- **IDE context reliability.** Multiple closed issues (#31553, #34920, #35419, #34696, #35333) all describe IDE context silently failing or not attaching as expected. Community frustration is high, even with fixes landing.
- **Resource leaks and performance degradation.** Between MCP fd leaks (#26984), Computer Use OOM crashes (#38455), and post-compaction thread bloat (#38466), long-running sessions remain fragile.
- **State integrity on desktop.** Power-loss config regressions (#26990) and stale subagent states after restart (#38408) undermine trust in the desktop app's persistence layer.
- **Context compaction side effects.** Multiple issues across CLI and app show compaction is still not transparent — dev messages lost (#38445), reminders accumulating (#38446), and overly large rollouts (#38466).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-14

## Today's Highlights
The core team landed a critical fix for capacity exhaustion retries, introducing context-aware silent retries and availability TTLs to improve resilience in unattended CLI runs. On the security front, a supply-chain RCE vulnerability in eval workflows was addressed, and multiple stability fixes for subagent behavior and browser sessions are progressing through the review pipeline. The community continues to surface issues around subagent reliability, particularly around false success reporting and hangs.

## Releases
**[v0.56.0-nightly.20260814.gc0d192452](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260814.gc0d192452)** — Nightly release containing:
- Stabilized the `file-system-interactive` e2e test for slow runners
- Merged the context-aware silent retry fix for capacity errors (see PR #28790)

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)** — 12 comments, P1. A `codebase_investigator` subagent reports `status: "success"` with `Termination Reason: "GOAL"` despite hitting its turn limit without doing analysis. This misrepresentation is dangerous because it silently masks interruptions, potentially leading users to trust incomplete results. Community upvoted and maintainers are retesting.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** — 8 comments, P1, 8 👍. The generalist agent hangs indefinitely (up to an hour) on simple tasks like folder creation. Users have found a workaround by instructing the model not to defer to subagents, but this degrades the core value proposition. High community engagement suggests this is a frequent blocker.

3. **[#25166 — Shell command execution stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)** — 4 comments, P1, 3 👍. Simple CLI commands that should never prompt for input occasionally hang while showing "Awaiting user input." This is a core experience breaker for non-interactive workflows and has been open for ~4 months.

4. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** — 4 comments, P1. Browser automation fails on Wayland sessions, terminating with `GOAL` but no useful output. This blocks Linux users running Wayland (now the default on most major distros) from using browser-based workflows.

5. **[#22232 — Enhance browser_agent resilience: automatic session takeover and lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232)** — 4 comments. The browser agent's fail-fast strategy on locked profiles (e.g., persistent sessions with orphaned processes) is too brittle. Users want automatic lock recovery and session takeover rather than immediate failure.

6. **[#22093 — (Sub)agents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** — 3 comments. Subagents execute despite being explicitly disabled in all configurations. This is a permissions/trust regression that undermines user control — a serious concern for those who only want MCP functionality.

7. **[#20079 — Symlinked agent files not recognized in ~/.gemini/agents/](https://github.com/google-gemini/gemini-cli/issues/20079)** — 4 comments. Users who use symlinks for dotfile management find their custom agents silently ignored. This is a DX papercut for a common workflow pattern.

8. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** — 3 comments. The model sometimes uses `git reset` or `--force` when safer alternatives exist, and needs better guardrails around destructive operations on databases and repositories.

9. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** — 5 comments. Auto Memory re-processes sessions that were intentionally skipped as low-signal, causing repeated context extraction from uninteresting transcripts. Wasteful and potentially noisy.

10. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** — 4 comments. Auto Memory sends transcript content to a model for extraction before redaction, and may log skill contents. A security/privacy concern for users with sensitive codebases.

## Key PR Progress

1. **[#28790 — Context-aware silent retries and availability TTL for capacity errors (merged)](https://github.com/google-gemini/gemini-cli/pull/28790)** — Closes a critical regression where non-interactive runs would fail on capacity exhaustion. Adds backoff retries with up to 2 silent retries; directly improves unattended/CI reliability.

2. **[#28740 — Prevent supply chain RCE in eval-pr workflows](https://github.com/google-gemini/gemini-cli/pull/28740)** — Fixes a critical vulnerability where untrusted fork code could execute in a privileged `pull_request_target` context. Splits the workflow into secure build + trusted execution phases. Important for any project accepting community PRs.

3. **[#28778 — Upgrade simple-git to 3.32.3 (CVE-2026-28292)](https://github.com/google-gemini/gemini-cli/pull/28778)** — Addresses a critical severity vulnerability in `simple-git`. Trivy-flagged; straightforward dependency bump.

4. **[#28801 — Rollback entire multi-turn request on cancellation or abort (closed)](https://github.com/google-gemini/gemini-cli/pull/28801)** — Fixes a state-corruption bug where canceling a multi-turn prompt with tool calls left chat history incomplete, breaking subsequent unrelated requests. Was closed — likely superseded or needs rework.

5. **[#28803 — Add Claude Sonnet 4.5 and Opus 4.8 model definitions (closed)](https://github.com/google-gemini/gemini-cli/pull/28803)** — Adds model constants, alias resolution, and policy fallbacks for Claude 4.x models. Closed without merge — speculative or out-of-scope for a Gemini-branded CLI.

6. **[#28699 — Enforce authentication and stop checkpoint path traversal in A2A server](https://github.com/google-gemini/gemini-cli/pull/28699)** — Security hardening: A2A REST routes skip the configured `UserBuilder`, accepting unauthenticated requests; also blocks path traversal in checkpoints. Critical for anyone exposing the A2A server.

7. **[#28789 — Fix vscode-ide-companion stop() hang and keep-alive failure threshold](https://github.com/google-gemini/gemini-cli/pull/28789)** — Fixes two stability bugs: `IdeServer.stop()` hangs with open streaming MCP sessions, and keep-alive ping failures leak resources. Important for IDE integration reliability.

8. **[#28787 — Don't treat corrupt MCP enablement config as empty](https://github.com/google-gemini/gemini-cli/pull/28787)** — A JSON parse failure in `mcpServerEnablement.ts` was silently treated as `{}`, enabling all MCP servers by default. This is a security-relevant fix — a corrupt config should fail loudly, not widen permissions.

9. **[#28624 — Prevent boolean thought parts leaking as `[Thought: true]` text](https://github.com/google-gemini/gemini-cli/pull/28624)** — Fixes an output pollution bug where internal thought flags leak into visible text. Clean, small fix that improves output quality.

10. **[#27588 — Support WSL2 clipboard image paste](https://github.com/google-gemini/gemini-cli/pull/27588)** — Enables image pasting from the Windows clipboard in WSL2 via PowerShell interop. Long-standing gap for WSL users; includes test coverage for the interop path.

## Feature Request Trends

- **Ast-aware code understanding** — Two EPICs ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) explore AST-based file reads, search, and codebase mapping. The goal is fewer tokens, precise method-bound reads, and better navigation. Indicative of a broader push toward semantic code intelligence.

- **Subagent trajectory visibility** — [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) and [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) both ask for subagent context to be included in `/chat share` and `/bug` reports. Debugging multi-agent failures is nearly impossible without inner-session visibility.

- **Zero-dependency sandboxing with bash affinity** — [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) proposes OS-level sandboxing that leverages Gemini's native bash skills without compromising security. A design-heavy enhancement that would unlock more aggressive shell usage.

- **Component-level behavioral evals** — [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) tracks expanding the eval suite beyond end-to-end scenarios. With 76 evals already, the team wants finer-grained tests per component to catch regressions earlier.

## Developer Pain Points

- **Unreliable subagents** — The top frustration this week. Issues around hangs (#21409), false success reporting (#22323), unauthorized execution (#22093), and missing context in bug reports (#21763) collectively undermine trust in the multi-agent architecture. Users want deterministic, observable, and respectful-of-config subagent behavior.

- **Brittle shell/terminal handling** — Recurring problems: commands hanging with "Waiting input" (#25166), stuck interactive prompts for tools like `create-vite` (#22465), terminal corruption after external editors (#24935), and flicker on resize (#21924). Core UX pain points that make the CLI feel fragile in real terminal environments.

- **Configuration and trust footguns** — Corrupt MCP configs silently enabling servers (#28787), symlinked agents not recognized (#20079), and destructive git/DB commands (#22672). Users are asking for fail-loud behavior and stronger guardrails around state-changing operations.

- **Browser automation on Linux** — Wayland incompatibility (#21983) and locked-profile fail-fast behavior (#22232) make browser workflows unreliable on modern Linux desktops. The community wants resilience and broader display-server support.

- **Security hygiene in memory features** — Auto Memory's redaction-before-extraction model (#26525) and indefinite retry behavior (#26522) raise privacy and efficiency concerns, especially for developers working in sensitive repositories.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-14

## Today's Highlights

Two patch releases (v1.0.80-0, v1.0.80-1) landed with a new `--enable-mcp-server` flag to re-enable MCP servers disabled in settings, plus improved multi-client session visibility in `--ahp` mode. However, the community continues to surface significant friction around MCP reliability — over a dozen new issues in the last 24 hours detail OAuth refresh bugs, transport failures, and session-management regressions. A notable cluster of reports shows that the `claude-haiku-4.5` model is failing across deployments due to unsupported `medium` reasoning effort, indicating a fleet-level configuration mismatch.

## Releases

**v1.0.80-0** and **v1.0.80-1** (patch)

- Added `--enable-mcp-server` flag to re-enable MCP servers disabled in settings for the current run
- Sessions shared with another CLI now display a `2 clients` indicator in `--ahp` mode for joined sessions with multiple attached clients
- v1.0.80-1 contains general fixes and changes

## Hot Issues

1. **Reasoning effort 'medium' not supported for claude-haiku-4.5** ([#4345](https://github.com/github/copilot-cli/issues/4345), [#4473](https://github.com/github/copilot-cli/issues/4473)) — Multiple users report that the CLI internally routes sub-agent work to `claude-haiku-4.5` with a `medium` effort setting that the model rejects. This is a configuration-side regression affecting both server-flagged and default deployments. High community reaction: 5 comments, 4 👍 on the original; new duplicate filed today.

2. **Custom Agent YAML frontmatter lacks reasoning-effort support** ([#2904](https://github.com/github/copilot-cli/issues/2904)) — Users want per-agent `effort` configuration in `.agent.md` files, parallel to the existing `model` field. Currently, effort is only configurable via global flags. Long-standing request with 20 👍 and active discussion; prompted a docs PR today (see Key PR Progress).

3. **Custom agent `model` field rejects array syntax** ([#2133](https://github.com/github/copilot-cli/issues/2133)) — VS Code Copilot Chat supports array syntax for model fallbacks in agent frontmatter, but the CLI throws a parse error. Creates friction for users who maintain shared agent definitions across both tools. 7 👍.

4. **`explore` tool hardcodes `gpt-5.4-mini`, ignoring custom models** ([#3954](https://github.com/github/copilot-cli/issues/3954)) — The agent decision/explore tool bypasses custom model configuration (e.g., DeepSeek endpoints) and attempts to pass `gpt-5.4-mini` to the user's API endpoint, causing failures. Users see this as a hardcoded dependency that breaks custom/deepseek API setups.

5. **MCP OAuth refresh concurrency bug — transport closed before tool responded** ([#4472](https://github.com/github/copilot-cli/issues/4472)) — Concurrent tool calls during a token refresh each spawn a new `rmcp::service`, causing in-flight calls to fail with transport-closed errors. Points to a deeper race condition in the OAuth lifecycle.

6. **Remote MCP OAuth: silent refresh fails with AADSTS70011** ([#4464](https://github.com/github/copilot-cli/issues/4464)) — Microsoft Entra OAuth users are forced into interactive sign-in roughly every 60–75 minutes because the refresh request mixes `.default` scope with resource-specific scopes. The silent refresh path never succeeds.

7. **Transient 5xx on MCP `initialize` marks server failed for whole session** ([#4466](https://github.com/github/copilot-cli/issues/4466)) — A single `502 Bad Gateway` at session startup permanently disables the MCP server for the session duration, with no retry or backoff. Users expect transient network failures to be retried.

8. **General Chat silently archived after session resume timeout** ([#4474](https://github.com/github/copilot-cli/issues/4474)) — When a chat fails to resume within 60 seconds, the app archives it automatically, replaces it with a new chat, and offers no UI to restore the original. Data-loss concern for long-running sessions. New triage issue.

9. **Directories in `allowed_directories` do not suppress shell-command prompts** ([#4482](https://github.com/github/copilot-cli/issues/4482)) — Directories listed in `~/.copilot/permissions-config.json` fail to suppress "path outside your allowed directory list" prompts for shell commands. `/add-dir` with the identical path works, suggesting a config-loading bug. New triage issue.

10. **Stop button deletes entire session and prompt** ([#4477](https://github.com/github/copilot-cli/issues/4477)) — Hitting stop during agent execution removes the whole session, including the original prompt and any in-progress edits. Users report this happening repeatedly, with no way to recover. Data-loss bug with high severity.

## Key PR Progress

1. **docs: document proposed custom-agent effort frontmatter (Option A)** ([#4476](https://github.com/github/copilot-cli/pull/4476), closed) — Adds documentation for a proposed dedicated `effort` frontmatter field for custom agents, parallel to `model`. Directly addresses the long-standing request in [#2904](https://github.com/github/copilot-cli/issues/2904). The PR was closed today without merging — likely deferred pending maintainer decision on approach (Option A vs. alternatives).

## Feature Request Trends

- **Per-agent reasoning-effort configuration** — Multiple issues ([#2904](https://github.com/github/copilot-cli/issues/2904), [#4345](https://github.com/github/copilot-cli/issues/4345), [#4473](https://github.com/github/copilot-cli/issues/4473)) converge on the need for per-agent `effort` control, not just a global flag. This is the most actively discussed feature request in the repo today.
- **Agent frontmatter parity with VS Code Copilot Chat** — Array syntax for `model` fields ([#2133](https://github.com/github/copilot-cli/issues/2133)) and other cross-tool compatibility gaps create real workflow friction for users who maintain shared agent definitions.
- **Session observability and lifecycle tooling** — Users want to list running sessions with status (idle/busy/waiting/blocked), similar to Claude Code's `agents --json` ([#4470](https://github.com/github/copilot-cli/issues/4470)). There is also a request to improve terminal output verbosity to make errors visible without a debug log file, suggesting a broader desire for better session introspection.
- **MCP server resilience** — Multiple feature requests for retry/backoff on transient failures, configurable OAuth scopes, and better collision detection for server names across scopes.

## Developer Pain Points

- **MCP OAuth reliability is the #1 recurring frustration** — At least five distinct issues this week ([#4463](https://github.com/github/copilot-cli/issues/4463), [#4464](https://github.com/github/copilot-cli/issues/4464), [#4472](https://github.com/github/copilot-cli/issues/4472), [#4480](https://github.com/github/copilot-cli/issues/4480)) cover OAuth discovery, token refresh, Windows socket errors (10013), and concurrency races. Users are clearly adopting remote MCP servers but hitting frequent auth and connection failures.
- **Session data-loss bugs** — Three separate issues this week ([#4474](https://github.com/github/copilot-cli/issues/4474), [#4477](https://github.com/github/copilot-cli/issues/4477), [#4467](https://github.com/github/copilot-cli/issues/4467)) involve sessions being silently archived, deleted, or appearing cancelled while the CLI remains active. This is a high-trust-breaking category of bugs.
- **Configuration that doesn't stick** — Directories in `allowed_directories` not honored ([#4482](https://github.com/github/copilot-cli/issues/4482)), `preToolUse` "ask" denial messages dropped ([#4237](https://github.com/github/copilot-cli/issues/4237)), plugin auto-update not triggering ([#4465](https://github.com/github/copilot-cli/issues/4465)) — all point to configuration being silently ignored in specific code paths.
- **Process/resource leaks** — Long-running sessions accumulate extension-host processes at 4 per session on Windows until the server exits ([#4468](https://github.com/github/copilot-cli/issues/4468)). Long-running agents can exhaust remote session event storage ([#4467](https://github.com/github/copilot-cli/issues/4467)). These are systemic resource-management issues that will surface more as users run longer, more complex sessions.
- **Model routing surprises** — The `explore` tool hardcoding `gpt-5.4-mini` ([#3954](https://github.com/github/copilot-cli/issues/3954)) and the code-review subagent being overridden to a different model ([#4462](https://github.com/github/copilot-cli/issues/4462)) undermine user trust in explicit model configuration.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-14

**Source:** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. Today's Highlights

No new releases or PRs landed in the last 24 hours, but the issue tracker reveals three critical threads demanding attention: a long-standing feature request for a **persistent Memory System** (#1283) has resurfaced with renewed community interest, while two serious **stability bugs** — a silent hang in ACP streaming mode (#2598) and a runaway token generation that produced 88k gibberish tokens in a single step (#2597) — remain open with minimal maintainer response. The hang issue in particular may be affecting reliability in ACP (MCP) mode, a key integration surface for agent workflows.

---

## 2. Releases

No new releases in the last 24 hours. The latest version remains **0.34.0** (referenced in Issue #2598).

---

## 3. Hot Issues (10 noteworthy)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|-------------------|
| 1 | [#1283 — Memory System: Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283) | Highest-traffic open issue (38 comments). Users want automatic + manual memory for project patterns and preferences across sessions — the #1 feature gap for heavy CLI users. | Strong support, repeated bumps; no maintainer response visible. |
| 2 | [#2598 — ACP/print streaming hangs: no idle timeout, lost wire data](https://github.com/MoonshotAI/kimi-cli/issues/2598) | In ACP mode (0.34.0), a completed stream never receives a `[DONE]` frame, hangs indefinitely, and the partial response never lands in wire.jsonl when a new message replaces it. Critical for agent integration reliability. | One comment; detailed reproduction; no maintainer action yet. |
| 3 | [#2597 — Runaway gibberish: 88k tokens in one step (53 min)](https://github.com/MoonshotAI/kimi-cli/issues/2597) | Single LLM step emitted 88,114 incoherent tokens at ~28 tokens/sec for 53 minutes. Indicates missing output caps, sampling issues, or a bug in termination logic. | One comment; reporter provided sample IDs and step hash. Response deficit raises concern. |
| 4 | Placeholder — additional tracked issues unavailable | — | — |

*(Only 3 issues were updated in the last 24h; the list above is exhaustive for that window. The digest format below is adjusted accordingly.)*

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours. No new PRs to report.

---

## 5. Feature Request Trends

Based on all open issues (including historical data through #1283):

- **Persistent Memory System** (#1283) — dominate request: cross-session context, project pattern recall, user preference persistence. Expect this to be a 2026 roadmap priority if maintainers engage.
- **Streaming robustness** (implied by #2598) — users ask for idle timeouts, wire-protocol guarantees (partial content persisted on interruption/replacement), and better control-plane signals in ACP mode.
- **Output safety/guardrails** (implied by #2597) — need for hard token caps, early termination on repetition loops, and optional "runaway detection" heuristics.

---

## 6. Developer Pain Points

- **Unreliable streaming in ACP mode**: silent hangs, missing terminal frames, and no idle timeout configuration — disrupts agent environments and CI integrations.
- **Uncontrolled generation**: 88k-token runaway output without user-triggerable kill-and-resume semantics — a trust gap for production use.
- **No memory / statefulness**: repeated context re-entry across sessions slows workflows; users want AI-managed notes and manual instruction files.
- **Maintainer responsiveness**: several high-severity issues (3+ months old for #1283, weeks for #2597/#2598) show no visible maintainer comments — community is starting to notice.

---

*Digest compiled from the GitHub repository [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) — snapshot as of 2026-08-14.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-14

## Today's Highlights

The community is actively testing the V2 rewrite, with several cross-version migration and compatibility issues surfacing (shared database corruption, missing TODO tools, compaction failures). A significant performance-refactoring wave from core contributor Kit Langton dominates the PR queue, lazily loading dependencies (MCP, semver, npm config) to cut startup latency. Security researchers posted a batch of medium-severity findings (SSRF via `webfetch`, curl|bash upgrade, silent context pruning), while the most upvoted open thread remains the legacy layout feature request at 41 👍.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

1. **[#37012 — Keep legacy layout option](https://github.com/anomalyco/opencode/issues/37012)** (37 comments, 41 👍)
   Most upvoted open issue. Users prefer old layout's one-window access to everything and workspace support. High community demand for preserving familiar UX alongside V2.
   *Reaction: Strong support; likely a retention-critical feature request.*

2. **[#41470 — "Copied to clipboard" doesn't work (VSCode Server/Docker)](https://github.com/anomalyco/opencode/issues/41470)** (15 comments)
   Clipboard writes report success but fail in Docker/VSCode Server environments. Breaks basic UX for remote setups.
   *Reaction: Active debugging; affects a growing remote-dev user base.*

3. **[#42083 — GitHub Copilot provider shows zero models](https://github.com/anomalyco/opencode/issues/42083)** (5 comments)
   Auth succeeds but no models appear in picker. Users cannot use Copilot models at all.
   *Reaction: Provider integration regression; affects Copilot subscribers.*

4. **[#42434 — `opencode upgrade` curl|bash security concern](https://github.com/anomalyco/opencode/issues/42434)** (3 comments)
   Medium-severity supply-chain/TOCTOU finding: no integrity verification before piping remote script to bash.
   *Reaction: Security-conscious users; maintainers should address promptly.*

5. **[#42437 — Context pruning silently drops instructions](https://github.com/anomalyco/opencode/issues/42437)** (2 comments)
   Compaction can silently remove instruction-bearing content, a context integrity issue (constraint bypass). Medium-high severity.
   *Reaction: Trust-relevant; users expect safe compaction semantics.*

6. **[#42435 — `webfetch` SSRF to local services](https://github.com/anomalyco/opencode/issues/42435)** (2 comments)
   Loopback/private address fetch possible; guard PR #40851 closed unmerged. Medium severity.
   *Reaction: Security researchers doubling down; expectation for maintainers to re-open guard.*

7. **[#42448 — V2 compaction exceeds context window](https://github.com/anomalyco/opencode/issues/42448)** (2 comments)
   Compaction itself fails on high-output models; provider rejects prompt+output — deadlock state.
   *Reaction: V2 early-adopter pain; blocks long sessions.*

8. **[#42451 — Legacy plugin loader corrupts plugin loading](https://github.com/anomalyco/opencode/issues/42451)** (1 comment)
   Every exported function is treated as a plugin; helper functions crash startup. Affects 1.16.2.
   *Reaction: Plugin developers affected; clear coding error in loader.*

9. **[#42441 — opencode deletes itself (pnpm global install)](https://github.com/anomalyco/opencode/issues/42441)** (2 comments, duplicate #42411)
   Binary disappears from `~/.local/share/pnpm/opencode` after use. Critical reliability bug for pnpm users.
   *Reaction: Duplicated reports indicate wider impact; needs immediate triage.*

10. **[#42420 — AI SDK response model ID discarded](https://github.com/anomalyco/opencode/issues/42420)** (2 comments)
    Actual response model (`response.modelId`) dropped; clients only see requested alias. Breaks observability and cost tracking.
    *Reaction: Developers relying on model routing metadata affected.*

---

## Key PR Progress

1. **[#42471 — fix(tui): scope unread updates to focused terminal](https://github.com/anomalyco/opencode/pull/42471)** (closed)
   Foreground TUI now solely owns unread mutations; background TUIs can't corrupt markers. Fixes multi-TUI race conditions.

2. **[#42468 — perf(core): load MCP client lazily](https://github.com/anomalyco/opencode/pull/42468)** (open)
   MCP SDK deferred when no enabled servers; reduces startup path cost for most users.

3. **[#42470 — refactor(cli): load semver lazily for update checks](https://github.com/anomalyco/opencode/pull/42470)** (open)
   `semver` imported only when update comparison needed. Cuts startup overhead for local/offline installs.

4. **[#42469 — refactor(core): defer webfetch HTML parsing](https://github.com/anomalyco/opencode/pull/42469)** (open)
   `htmlparser2` loaded only when HTML conversion required. Tool registration stays eager; raw/non-HTML responses skip parser cost.

5. **[#42466 — fix(tui): load local TUI plugins via SEA-safe runtime import](https://github.com/anomalyco/opencode/pull/42466)** (closed)
   Fixes Node SEA build unable to load local TUI plugins (`ERR_UNKNOWN_BUILTIN_MODULE`). Requires issue/compliance tags.

6. **[#42474 — fix(tui): refresh terminal size before resize (new)](https://github.com/anomalyco/opencode/pull/42474)** (open)
   Replaces #42330; refreshes `process.stdout.columns/rows` on SIGWINCH to fix stale resize handling in PTY hosts.

7. **[#42460 — refactor(core): remove bus replay all](https://github.com/anomalyco/opencode/pull/42460)** (closed)
   Removes unused `Bus.replayAll`, 114 lines deleted. Simplifies test surface.

8. **[#42458 — perf(util): load npm config lazily](https://github.com/anomalyco/opencode/pull/42458)** (closed)
   Defers `@npmcli/config` until requested. Removes config init from startup paths.

9. **[#42462 — refactor(util): remove xdg-basedir](https://github.com/anomalyco/opencode/pull/42462)** (closed)
   Four local equivalents replace dependency; removes `xdg-basedir@5.1.0` entirely. Cleaner dependency tree.

10. **[#40427 — beta: some experimental perf improvements](https://github.com/anomalyco/opencode/pull/40427)** (closed)
    Reduced V2-only performance series; rebased to exclude dev-era legacy-layout changes. Session route loading improvements.

---

## Feature Request Trends

- **Legacy layout / one-window UX** (#37012): Strong desire to retain old layout's immediate access to everything from main window; workspace support. High engagement (37 comments, 41 👍).
- **Background activity sidebar** (#42369): TUI right sidebar listing running subagents, status, and last message — common IDE pattern, newcomer request.
- **Hebrew locale** (#42447): Growing i18n coverage (full translation) — signals broader demand for non-English locales after existing large languages.
- **Sticky provider routing / cache affinity** (#35402, common thread): Multi-sourced Zen models want stickyProvider to preserve prompt caches and avoid re-bills/cold prefills — cost-sensitive users.
- **Response model transparency** (#42420 family): Preserve `response.modelId` — observability and cost attribution for gateway/multi-model setups.

---

## Developer Pain Points

1. **Rate-limit exhaustion on free tiers** (#42029, #42074, #42449, #42452): Users hit "Rate limit exceeded" instantly at day start; unclear quota/identity semantics, no helpful error messages. Ambiguous whether Zen or provider-level.
2. **Startup/network blocking** (#42376, #42458 family): Synchronous 3.6MB models.dev fetch with 5-min stale TTL can stall 10–30s on flaky networks — community wants async/offline-friendly behavior.
3. **V1/V2 co-existence and migration** (#42260): V2 mutates shared V1 database schema, breaking `/move` and leaving sessions trapped. Early-adopter churn; needs isolated storage or automatic backup.
4. **Desktop provider/model load flakiness** (#40516): ~80% of starts fail to load provider/model/MCP info between v1.18.5–v1.18.13; regression forcing downgrade to v1.18.4. High organization impact.
5. **Tool/environment sanity** (#42440, #41470, #42441): Windows console flashing per subprocess; clipboard failures in remote Docker; pnpm binary self-deletion — trust-eroding basic bugs across platforms.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-14

## Today's Highlights

A wave of terminal-hygiene fixes landed this week, addressing long-standing issues with SIGINT handling, session-replay flooding, and clipboard copying on VTE terminals. The most critical bug involves auto-compaction failing to trigger until the provider rejects requests at 373k tokens, and maintainers have acknowledged this as a top priority. Performance work continues with a PR that adds visual-line caching to fix slow prompt-editor navigation, plus active work on shared extension-loading infrastructure.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#6879 — Auto-compaction never triggers until provider overflow](https://github.com/earendil-works/pi/issues/6879)** — The most-voted issue this week (👍 17, 19 comments). A 2-hour agentic turn on gpt-5.6-sol pushed context past 100% with compaction never firing until the API rejected at 373k tokens. The community is pushing for a post-agent-turn check; maintainers have it in progress. This is a correctness/UX issue affecting long-running autonomous sessions.

2. **[#7836 — Edit fuzzy match misses whitespace-length differences](https://github.com/earendil-works/pi/issues/7836)** — `normalizeForFuzzyMatch` fails to collapse whitespace runs, causing small models to fail edits on otherwise identical content. In progress; the fix has broad impact given how many models rely on fuzzy matching for edit reliability.

3. **[#8029 — Very slow performance moving in prompt editor](https://github.com/earendil-works/pi/issues/8029)** — Linear growth in cursor-move latency with buffer size; 1650ms on 7000 lines. A PR (#8066) with visual-line caching is ready and targets this exact bottleneck.

4. **[#7791 — Global Undici dispatcher inherits 16 KiB maxHeaderSize](https://github.com/earendil-works/pi/issues/7791)** — Closed; valid responses with larger headers crash with `UND_ERR_HEADERS_OVERFLOW`. A subtle infrastructure bug that would surface intermittently in enterprise/proxy environments.

5. **[#7761 — TUI copy shows "Copied!" but clipboard stays empty on VTE terminals](https://github.com/earendil-works/pi/issues/7761)** — Double-click selection flashes confirmation but never writes the OSC 52 clipboard on GNOME Terminal. Affects Linux TUI users on VTE-based terminals specifically.

6. **[#7829 — Invalid settings.json silently ignored, misleading 'bash not found' on Windows](https://github.com/earendil-works/pi/issues/7829)** — Unescaped backslashes in `settings.json` produce misleading "bash not found" errors. The community wants JSON parse errors surfaced with actionable messages, especially on Windows.

7. **[#7689 — Handle end_turn: false for codex](https://github.com/earendil-works/pi/issues/7689)** — Codex backend sends `end_turn: false` on `response.completed`; Pi doesn't know how to interpret this yet. Low comment count but flagged by maintainer mitsuhiko — likely an agent-loop control-flow issue.

8. **[#8017 — Support Anthropic refusal server-side fallback](https://github.com/earendil-works/pi/issues/8017)** — Filed by badlogic (maintainer). If Anthropic's classifier decides Pi is "doing something illegal," compaction fails with no graceful recovery. Related to provider-side refusal handling; has direct impact on reliability.

9. **[#8055 — Ambiguous-width chars break table alignment on CJK terminals](https://github.com/earendil-works/pi/issues/8055)** — Circled numbers, ±, € are counted as 1 column but render as 2 on CJK fonts. Marked untriaged; niche but affects CJK users' daily experience.

10. **[#8060 — Streaming thinking output flashes in heading color](https://github.com/earendil-works/pi/issues/8060)** — Cosmetic but reproducible: thinking content briefly flashes orange-yellow during streaming, then returns to normal. Minor polish issue, untriaged.

## Key PR Progress

1. **[#8082 — Render only visible viewport in fullRender; restore terminal on SIGINT](https://github.com/earendil-works/pi/pull/8082)** — Fixes two related bugs: session resume flooding (759 KB session → 844k bytes of replay) and broken terminal state after SIGINT (raw mode, hidden cursor, Kitty protocol). A substantial quality-of-life fix by frankieyep. This addresses both #8079 and #8080.

2. **[#8066 — Add visual lines caching in TUI](https://github.com/earendil-works/pi/pull/8066)** — Caches visual-line computations that only change when width or text changes; fixes #8029. Open, awaiting review.

3. **[#8084 — Don't swallow the prompt after boolean extension flags](https://github.com/earendil-works/pi/pull/8084)** — Closed. `pi -p --plan "prompt"` silently started a session with no messages and exited 0. A sharp edge for CLI users; good catch.

4. **[#8086 — Fall back to legacy Gemini tool schema when endpoints reject unknown fields](https://github.com/earendil-works/pi/pull/8086)** — Closed. Some generativelanguage endpoints reject `parametersJsonSchema`; this adds a fallback to the legacy `parameters` field. Important for Gemini provider reliability across endpoint versions.

5. **[#8070 — Validate extension flag defaults](https://github.com/earendil-works/pi/pull/8070)** — Prevents boolean flags with `default: "false"` (string) from behaving truthy; models flag options as a discriminated union. Open.

6. **[#8085 — Cancel active mouse selection with Escape](https://github.com/earendil-works/pi/pull/8085)** — Open. Escape during drag clears selection without copying. Mirrors standard text-editor behavior; likely a quick merge.

7. **[#8076 — DRAFT: dev branch with new harness](https://github.com/earendil-works/pi/pull/8076)** — Draft PR by davidbrai, no description yet. Worth watching — could signal architecture work on the harness layer.

8. **[#7984 — Update grok-mermaid to 0.2.3](https://github.com/earendil-works/pi/pull/7984)** — Open. Resolves #7832; classes now ignored in mermaid rendering. Screenshots in the PR show clear before/after improvement.

9. **[#6216 — Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/6216)** — Still open after 6+ weeks. Supersedes an earlier PR, adds Bedrock Mantle via OpenAI's Bedrock provider. Awaiting review; notable for AWS-centric users.

10. **[#7993 — Compact between tool turns](https://github.com/earendil-works/pi/pull/7993)** — Closed; author apologized: "this was an agent gone wild. Please ignore this." A curious case of autonomous agent PRs being rejected by humans.

## Feature Request Trends

- **Compaction and Context Management** — The dominant theme this week. Beyond the critical bug (#6879), the community is requesting compaction between tool turns (#7993, even though that PR was withdrawn), and Anthropic refusal fallbacks for compaction (#8017). Expect more design discussion here.

- **Session and Terminal Hygiene** — Multiple requests coalescing: `/exit` state cleanup (#5065), SIGINT restoration (#8080), scrollback pollution on resume (#8079), and clipboard reliability on Linux (#7761). This cluster suggests the TUI needs a formal "clean shutdown" contract.

- **Model Catalog Coverage** — Fast-follow requests for new models (Grok 4.6 in #8046, Kimi cached token tracking in #8075, Qwen rename drift in #8083). The community is actively watching the catalog generation pipeline and filing drift bugs on version mismatches.

- **Extension and Flag Robustness** — Validation for flag defaults (#8070), swallowing CLI args (#8084), AbortSignal in package resolution (#8088). A pattern of hardening around extension authoring.

- **TUI Rendering Accuracy** — Ambiguous-width chars (#8055), heading-color flashes (#8060), MCP collapse bugs (#8074). Rendering correctness remains an active area for CJK users.

## Developer Pain Points

- **Auto-compaction unreliability** — The #6879 thread is the clearest signal: users can't trust context management for long-running agentic turns, and the cost is a full failed request at 373k tokens.

- **Windows-specific friction** — Unix socket test failures (#8047), misleading `bash not found` on invalid JSON (#7829), and Git Bash path-escaping traps. Windows remains a second-class citizen even with the community's best efforts.

- **Terminal state corruption** — Recurring theme across at least four different issues this week (SIGINT, /exit, copy, raw mode). Developers are clearly using Pi in long-lived interactive workflows where a single bad exit poisons the entire shell session.

- **Extension authoring ergonomics** — Flag validation, swallowed CLI arguments, missing AbortSignal support: extension developers are hitting the edges of the framework and asking for tighter contracts. The community is responding with typed discriminated unions and validation at the boundary.

- **Version drift and catalog maintenance** — Downstream consumers (DeepSeek Harness, etc.) pin older Pi versions whose model catalogs diverge from `latest` (#8083). The community wants the source-of-record catalog to be version-stable or clearly versioned.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-14

## Today's Highlights

The Qwen Code team shipped **v0.21.11** with two major milestones: **Agent Plugins v1** for extending agent capabilities and native **multi-agent workflows** via the new `/coordinate` command. Meanwhile, the SWE-bench Verified benchmark results are marked **QUARANTINED** — a signal that recent release validation hit a snag requiring investigation. The community conversation is dominated by multi-agent fleet architecture, with the core RFC (#8718) driving significant development momentum.

## Releases

**v0.21.11** (stable) and **v0.21.12-preview.1** were published. Highlights from the stable release:

- **Agent Plugins v1** added, enabling extensible agent capabilities ([#8834](https://github.com/QwenLM/qwen-code/pull/8834)).
- Native multi-agent workflows with read-only teammates landed, activated via `/coordinate` ([#8804](https://github.com/QwenLM/qwen-code/pull/8804)).

Two nightly/preview releases (`v0.21.11-nightly.20260814.45c2e73080` and `v0.21.12-preview.1`) both carry web-shell fixes: preserving standalone session targets and supporting workspace file uploads.

**⚠️ SWE-bench Verified: QUARANTINED** — the E2E validation runs (2026-08-13 r1/r3) report **0 resolved, 0 unresolved, 0 execution errors** across 500/500 tasks, a suspicious uniform-zero result that triggered the quarantine flag.

## Hot Issues

1. **[#8718 — RFC: Native coordination for independent Qwen sessions](https://github.com/QwenLM/qwen-code/issues/8718)**
   The flagship multi-agent proposal enabling a leader to dispatch independent workers. This RFC anchors the entire fleet architecture and has spawned multiple implementation stages. *9 comments.*

2. **[#8678 — Session restore timeout loses current session](https://github.com/QwenLM/qwen-code/issues/8678)**
   Large session restores that time out destroy the current working session. PR1 of the fix was merged, but the broader recovery path is still under construction. *8 comments.*

3. **[#7118 — Windows installer fails when Get-FileHash cannot resolve](https://github.com/QwenLM/qwen-code/issues/7118)**
   PowerShell SHA-256 verification breaks on certain Windows environments; community upvoted with 👍3. Closed but users still hit it. *7 comments.*

4. **[#9019 — Gemini 2.5 unusable on Vertex AI: thinkingLevel always sent](https://github.com/QwenLM/qwen-code/issues/9019)**
   Even `UNSPECIFIED` placeholder for `thinkingLevel` is sent, causing hard 400 errors before any tool call. Blocks all Gemini 2.5 work via Vertex. *5 comments.*

5. **[#9025 — Keyless Vertex AI not inferred from environment](https://github.com/QwenLM/qwen-code/issues/9025)**
   Headless ADC runs exit at startup because `getAuthTypeFromEnv` never selects `vertex-ai` auth. *5 comments.*

6. **[#9002 — Python SDK rejects permission_mode="auto"](https://github.com/QwenLM/qwen-code/issues/9002)**
   Server-side CLI supports `"auto"`, but client-side validation in the Python SDK rejects it pre-flight. *5 comments.*

7. **[#9061 — Ctrl+V paste unresponsive in CLI on Windows (regression)](https://github.com/QwenLM/qwen-code/issues/9061)**
   P1-level regression since 0.21.0: paste works in plain PowerShell but not in Qwen CLI. Blocks everyday workflows on Windows. *4 comments.*

8. **[#9108 — Desktop Web Shell external links fail; MCP OAuth cannot complete](https://github.com/QwenLM/qwen-code/issues/9108)**
   #9069 fixed Markdown links, but four other link surfaces still silently drop clicks; MCP OAuth flow is broken. *3 comments.*

9. **[#9088 — `read_file` sends non-image file to model API based on .png extension](https://github.com/QwenLM/qwen-code/issues/9088)**
   A file named `.png` containing UTF-8 JSON causes a raw 400 and aborts the entire turn. Extension-based content detection fails hard. *3 comments.*

10. **[#9083 — `record_artifact` succeeds without verifying workspacePath](https://github.com/QwenLM/qwen-code/issues/9083)**
    Artifacts reported as "missing" even though files exist on disk; session cwd vs. workspace root mismatch leads to broken artifact cards. *3 comments.*

## Key PR Progress

1. **[#9039 — Privacy-safe tool-result boundary diagnostics](https://github.com/QwenLM/qwen-code/pull/9039)**
   Adds diagnostics at the tool-result boundary that respect privacy constraints — crucial for debugging agent tool chains without leaking sensitive data.

2. **[#9086 — Harden /review pipeline against live-run failures](https://github.com/QwenLM/qwen-code/pull/9086)**
   Four real defects caught by running `qwen review run` against three open PRs, each pinned with regression tests.

3. **[#9095 — Close unbounded finding classes prospectively in /review](https://github.com/QwenLM/qwen-code/pull/9095)**
   Teaches the review agent to detect enumeration traps — where a fix hand-rolls one entrance to a bug family instead of addressing the class.

4. **[#9111 — Desktop: open remaining external links through shell opener](https://github.com/QwenLM/qwen-code/pull/9111)**
   Fixes the four remaining silent-drop link surfaces in the Desktop webview and unblocks MCP OAuth completion (addresses #9108).

5. **[#8677 — OpenTUI renderer backend: flicker-free, first-class mouse](https://github.com/QwenLM/qwen-code/pull/8677)**
   A substantial single-PR migration to the OpenTUI React track — promising flicker-free rendering and proper mouse support in the TUI.

6. **[#8978 — Serve: no-op on empty channel set](https://github.com/QwenLM/qwen-code/pull/8978)**
   Prevents `qwen serve --channel all` from exiting the whole daemon when no channels are configured; graceful no-op instead.

7. **[#8682 / #9080 — Pollable turn-status endpoints for daemon sessions](https://github.com/QwenLM/qwen-code/pull/8682)**
   Two related PRs adding `GET /session/:id/turns/current` and `GET /session/:id/turns/:promptId` for external clients to poll turn lifecycle (`idle → queued → running → completed/cancelled/error`).

8. **[#9057 — Reduce subagent live replay journal](https://github.com/QwenLM/qwen-code/pull/9057)**
   Adds a compact live-turn replay projection for WebUI so clients don't need the full subagent journal; improves load/reconnect performance.

9. **[#9098 — Enable dynamic workflows from a settings key](https://github.com/QwenLM/qwen-code/pull/9098)**
   Exposes `tools.workflowsEnabled` setting — previously gated behind an undocumented environment variable.

10. **[#9008 — Security hygiene: CODEOWNERS, least-privilege, Scorecard](https://github.com/QwenLM/qwen-code/pull/9008)**
    Low-risk supply-chain security improvements: CODEOWNERS for release workflows, least-privilege tokens, Scorecard integration.

## Feature Request Trends

1. **Native multi-agent orchestration** — The dominant direction. The fleet architecture (#8718) spans stages 1A/1B/2/3 and includes session coordination, teammate runtimes, supervised fleets, and persistence/recovery. This is the single largest investment area.

2. **Session/daemon robustness** — Multiple requests around session restore timeout safety (#8678), activeWork tracking and background agent recovery (#8586), and polling turn status via HTTP APIs (PRs #8682, #9080).

3. **Omni multimodal experiment** — A dedicated `omni-experiment` branch for multimodal file recognition, policy-driven degradation, memory recall, and garbage collection (#8197, #8186–8190). Long-running system design work.

4. **Web Shell and Desktop UX maturation** — Channel policy redesign (#8845), proper external-link handling, workspace file uploads, and background-agent footer behavior.

5. **Memory reliability and governance** — Pinned read-only memory directories (#6801), recall reliability improvements (#8716), and provenance-tracked policy results (Omni S5b).

## Developer Pain Points

1. **Windows-specific regressions are recurring** — Installer hash verification (#7118), Ctrl+V paste regression (#9061), visible runtime Terminal window in Desktop (#9043). Windows users face repeated quality issues.

2. **Flaky provider integrations** — Vertex AI auth failures (#9025) and Gemini model incompatibility (#9019) block headless/CI workflows that depend on Google Cloud.

3. **Invalid file/content handling** — Extension-based content detection (#9088) and path mismatches between session cwd and workspace root (#9083) cause hard failures or silent corruption of artifact state.

4. **Validation drift between CLI and SDK** — The Python SDK rejects values the CLI accepts (e.g., `permission_mode="auto"`), creating confusion and forcing workarounds.

5. **Security vulnerability fatigue** — Community reports of high-severity vulnerabilities after `npm update` (#8944) and unresponsive external-link handling in Desktop suggest security and webview reliability need more attention.

6. **Context-window edge cases** — Compression side-queries with fixed `maxOutputTokens` can exceed small context windows (#7960), causing empty summaries and cascading failures.

---

*Digest generated from GitHub data for QwenLM/qwen-code, 2026-08-14.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-14

## Today's Highlights

The project continues its transition from `deepseek-tui` to **CodeWhale**, with **v0.9.7** released as the latest stable under the new branding, retiring the legacy npm package. A packed development cycle is underway targeting **v0.9.8**: a **model guardian tier** for auto-review, **first-class local DS4 (DwarfStar) setup**, and a **critical refactor of the 32-field agent tool schema** that has been causing model errors. Meanwhile, the community is actively contributing — three PRs from external developers landed this week, including a **picture-in-picture host terminal feature** and a fix for **MCP `nextCursor` null responses** that broke strict MCP clients.

---

## Releases

### v0.9.7 — Codewhale rebrand & availability

**Codewhale** is now the official public product name from Shannon Labs. The `codewhale` command, npm package, and release-asset names remain lowercase technical identifiers. **Important migration note:** the legacy npm package `deepseek-tui` is **deprecated** and will receive no further releases. Users coming from v0.8.x legacy `deepseek` / `d…` (release notes truncated in source data).

🔗 [View v0.9.7 Release](https://github.com/Hmbown/CodeWhale/releases)

---

## Hot Issues (Top 10)

1. **[#5324 — Simplify the 32-field agent tool schema](https://github.com/Hmbown/CodeWhale/issues/5324)** (7 comments)  
   The model-facing `agent` tool carries a **32-property schema with zero required fields** and **eight actions** in one schema, plus a bag of runtime aliases. Maintainer Hmbown opened this to reduce the schema so models stop erroring on it. A prerequisite PR ([#5369](https://github.com/Hmbown/CodeWhale/pull/5369)) from Lstarsky0 was submitted separately to degrade Moonshot schemas. **High priority for v0.9.8.**

2. **[#998 — 文案展示不全 (Text display truncation)](https://github.com/Hmbown/CodeWhale/issues/998)** (11 comments, 👍1)  
   Chinese UI text is being cut off; user requests full tooltip hints on hover. Remains open since May with steady community engagement as a UX pain point.

3. **[#1004 — `/dryrun`: preview next chat completion without sending](https://github.com/Hmbown/CodeWhale/issues/1004)** (9 comments)  
   User `peixl` requests a `/dryrun` command to preview the actual request payload (system prompt, cached repo files, tool definitions, @mentions) before sending — a real cost-saver for long DeepSeek V4 Pro turns. Strongly received; aligns with transparency demands.

4. **[#2369 — Config paths fragmented across OS/Cygwin + silent migration bug](https://github.com/Hmbown/CodeWhale/issues/2369)** (7 comments)  
   Configuration and secret paths resolve differently across Windows, Cygwin, and Unix home-directory rules; legacy migrations can silently misplace data. Reliability concern flagged for v0.9.3.

5. **[#1425 — Session deadlock on 3M-character novel analysis](https://github.com/Hmbown/CodeWhale/issues/1425)** (6 comments)  
   User attempted to analyze a ~3M-character novel; 10 sub-agents spawned but parent session **hung on `agent_wait` timeout**. Sub-agents showed `Running` for ~2 minutes. Core reliability issue for multi-agent orchestration.

6. **[#894 — Image corruption during execution](https://github.com/Hmbown/CodeWhale/issues/894)** (6 comments)  
   Images are scrambled/displayed incorrectly during TUI execution. Visual rendering bug affecting v0.9.4.

7. **[#1482 — NVIDIA NIM not working (404)](https://github.com/Hmbown/CodeWhale/issues/1482)** (6 comments)  
   API calls to NVIDIA NIM fail with `404 page not found`. Environment output shows legacy v0.8.29 in use — possibly a migration issue remaining from older versions.

8. **[#1732 — Merged analysis reports save extremely slow (low cache hit)](https://github.com/Hmbown/CodeWhale/issues/1732)** (6 comments)  
   Saving merged analysis reports to local documents is extremely slow with low cache hit rates. Performance complaint around large file handling.

9. **[#5356 — v0.9.8 kickoff probe: read-only Fleet roles denied all shell access](https://github.com/Hmbown/CodeWhale/issues/5356)** (1 comment, CLOSED)  
   Maintainer-run probe found that read-only Fleet roles (`scout`, `reviewer`, `planner`) **deny `bash` outright** at the role gate (`posture_permits_tool`). Closed with a plan for **classifier-bounded bash** in v0.9.8 to make read-only roles actually useful.

10. **[#5359 — Four TUI tests fail on dev boxes but pass on CI](https://github.com/Hmbown/CodeWhale/issues/5359)** (2 comments)  
    Tests read `~/.codewhale` and display-refresh probe state, so they fail deterministically on real dev boxes while CI (clean HOME) stays green. Fixed by PR [#5368](https://github.com/Hmbown/CodeWhale/pull/5368) confining tests to an isolated state root.

---

## Key PR Progress (Top 10)

1. **[#5353 — Model guardian tier for Auto-Review (v0.9.8)](https://github.com/Hmbown/CodeWhale/pull/5353)** — OPEN  
   Two-layer review: deterministic floor stays non-bypassable; fallback holds escalate to a **one-shot model guardian** instead of silently blocking. Mirrors Codex `auto_review` semantics and Kimi mode vocabulary.

2. **[#5365 — First-class local DS4 (DwarfStar) setup](https://github.com/Hmbown/CodeWhale/pull/5365)** — OPEN  
   `/setup provider ds4`, `/provider setup ds4`, and provider-picker `D` shortcut open a prefilled **keyless loopback preset** reusing OpenAI-compatible transport. No new protocol adapter needed.

3. **[#5369 — Degrade Moonshot schemas instead of refusing conditionals](https://github.com/Hmbown/CodeWhale/pull/5369)** — OPEN  
   Prerequisite for #5324; degrades Moonshot schemas to handle conditionals instead of rejecting them. Pure schema-focused slice.

4. **[#5368 — Confine unguarded tests to isolated state root](https://github.com/Hmbown/CodeWhale/pull/5368)** — OPEN  
   Fixes the four flaky tests from #5359 via three independent mechanisms — including closing a **lock-holder trust hole** where lock-holding threads routed to real `~/.codewhale`. Each fix has a counter-test.

5. **[#5339 — Suppress child-owned shell completions](https://github.com/Hmbown/CodeWhale/pull/5339)** — OPEN  
   Filters child-owned background shell completion events from the parent model stream; preserves unowned parent completions and task/status visibility. Closes #5325.

6. **[#5364 — Render Markdown blockquotes with a quote rail](https://github.com/Hmbown/CodeWhale/pull/5364)** — CLOSED (merged)  
   Community PR from **SparkofSpike**: proper quote rail instead of literal `>` markers. Supports nesting, inline formatting, wrapping, and selection-copy. Quality-of-life improvement for transcript reading.

7. **[#5358 — Auto-review denial rationale + turn circuit breaker](https://github.com/Hmbown/CodeWhale/pull/5358)** — CLOSED  
   First P0 slice of #5352: denial rationale (`AutoReviewPlanDecision::Block` now carry reasons) + a **circuit breaker** to prevent re-phrasing the same denied action until step budget exhaustion.

8. **[#5333 — Pin host terminal window as always-on-top mini window (PiP)](https://github.com/Hmbown/CodeWhale/pull/5333)** — CLOSED  
   **Harvest of community PR #5318** (SparkofSpike): right-click context menu or `/pin` shrinks terminal to 640×400 and makes it always-on-top; toggle restores. Maintainer landed via documented harvest process after original failed CI on an old base.

9. **[#5336 — MCP: omit `nextCursor` when no further pages](https://github.com/Hmbown/CodeWhale/pull/5336)** — CLOSED  
   Community PR from **xiaoray-blip**: `serve --mcp` returned `"nextCursor": null`, which is invalid per MCP spec and **breaks strict clients like Claude Code**. Fix: field must be a string or absent.

10. **[#5326 — Website audit fixes: i18n parity, copy/spacing, test fixes](https://github.com/Hmbown/CodeWhale/pull/5326)** — CLOSED  
    Polish pass over the Codewhale community website; three clear-cut fixes landed including an outdated `docs/TOOL_SURFACE.md` quote assertion in tests.

---

## Feature Request Trends

1. **Local provider first-class support** — DS4/DwarfStar keyless setup (#5363 → PR #5365), NVIDIA NIM fixes (#1482), FreeBSD binaries (#1097), and self-hosted long-context models (#5367) all point to a strong demand for **self-hosted and alternative provider routes** beyond the default API.

2. **Model-visible transparency & control** — `/dryrun` to preview request payloads (#1004), configurable read/tool-result size limits (#5367), and denial rationale + circuit breakers (#5358) show users want to **understand and control exactly what the model sees and does**.

3. **Input flexibility** — Multi-line input mode and customizable send shortcuts (#5345), configurable keymaps (#436), and AI-selected shell/lang per tool call (#1754) — all requests for **developer-friendly input ergonomics**.

4. **Agent orchestration reliability** — Sub-agent timeouts/hangs (#1425), role-based tool gating that blocks read-only roles (#5356), and hook-based lifecycle layers for cancel/pause/resume (#1917) highlight the need for **robust multi-agent workflows**.

5. **Internationalization & UX polish** — Text truncation (#998), garbled Chinese characters in agent output (#1675), i18n coverage expansion (#790), and markdown blockquote rendering (#5364) — **non-English UX is a growing pain point**.

---

## Developer Pain Points

- **Windows/multi-OS inconsistencies**: Config paths diverge across Windows/Cygwin (#2369), raw `.exe` launches without Windows Terminal (#1854), and PowerShell/cmd command-style mismatches (#1754) are recurring cross-platform frustrations.
- **Large text/task handling**: 3M-character analysis deadlocks (#1425), slow merged report saves with low cache hits (#1732) — the TUI struggles with **large-file/long-context workloads**.
- **Agent reliability**: Sub-agent `wait` timeouts hang sessions (#1425), VS Code crashes while YOLO Agent runs tests (#1651), SSH sandbox blocking outbound TCP 22 (#1829) — agent autonomy is powerful but needs **stronger guardrails**.
- **Migration & upgrade friction**: `doctor` stuck on `needs action` after upgrade (#5340), silent config migration bugs (#2369), legacy v0.8.x versions still in the wild causing NIM issues (#1482) — the v0.9.x migration path needs smoother onboarding.
- **Schema complexity hurts model performance**: The 32-field agent schema (#5324) and Moonshot conditional rejection (#5369) cause model errors — **simplification is a community priority** for v0.9.8.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*