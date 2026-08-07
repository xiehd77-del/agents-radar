# AI CLI Tools Community Digest 2026-08-07

> Generated: 2026-08-07 02:44 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem Cross-Tool Comparison Report

**Date:** 2026-08-07  
**Coverage:** Gemini CLI, GitHub Copilot CLI, Kimi Code, OpenCode, Pi, Qwen Code, DeepSeek TUI  
**Note:** Claude Code and OpenAI Codex summaries failed to generate; excluded from analysis.

---

## 1. Ecosystem Overview

The AI CLI developer tool space remains intensely competitive, with seven major tools shipping active development simultaneously. The ecosystem is characterized by rapid iteration cycles—nightly builds (Gemini), patch trains (DeepSeek TUI), and feature releases (Pi v0.84.0, Qwen v0.21.7)—indicating mature engineering pipelines. However, the dominant theme across all communities is **trust and reliability**: data corruption bugs (Gemini #26856, Kimi #2591), paid-tier outages (OpenCode), security vulnerabilities (Qwen), and session-resume failures (Copilot CLI) overshadow feature velocity. MCP (Model Context Protocol) integration has emerged as both a key differentiator and a consistent pain point across every tool, signaling a standardization battle still in flux. Windows and NixOS platform support remains persistently weak across the ecosystem, suggesting a structural gap in testing coverage rather than isolated oversights.

---

## 2. Activity Comparison

| Tool | Issues (Notable) | PRs (Active) | Release Status | Community Signals |
|------|-----------------|--------------|----------------|-------------------|
| **Gemini CLI** | 10 high-priority; top issue 47 comments | 10 active/merged PRs | v0.56.0-nightly; v0.54.2 patch | Highest-volume issue tracker; active PR pipeline |
| **Copilot CLI** | 10 notable; 👍 35 top-voted | **0 PRs** in 24h | v1.0.79-6 patch | Quiet PR day; 32 issues triaged |
| **Kimi Code** | 8 notable; 20 comments on top feature | 3 PRs (2 competing fixes) | No release | Small but focused community; rapid contributor response |
| **OpenCode** | 10 notable; top outage 44 comments | 10+ active PRs | No release; **outage ongoing** | High community engagement; 129 👍 on top feature |
| **Pi** | 10 notable; 22 comments on Windows | 10 PRs (7 merged) | **v0.84.0** shipped | Fast merge velocity; active regression fixing |
| **Qwen Code** | 10 notable; 150 comments on free-tier policy | 10 PRs active | **v0.21.7** stable + live-host | Largest single-issue thread (150 comments); security focus |
| **DeepSeek TUI** | 10 notable (mostly closed) | 10 PRs (8 merged/closed) | v0.9.4 (no new) | High issue-to-fix closure velocity; EPIC refactor completing |

**Aggregate:** ~68 notable issues, ~53 PRs tracked. Gemini CLI leads in issue volume; Pi and DeepSeek TUI lead in merge velocity; Copilot CLI shows a notable PR pause.

---

## 3. Shared Feature Directions

| Direction | Tools | Specific Needs |
|-----------|-------|----------------|
| **Context Window Transparency** | Gemini, Copilot, Kimi, OpenCode, Pi, DeepSeek | Token usage breakdown (OpenCode #6152, 129👍), lazy-loading MCP schemas (Kimi #2147), silent context fallback warnings (DeepSeek #5244), compaction reliability (Pi #6879, Gemini #22323) |
| **Session Management & Recovery** | All tools | Cross-project session pickers (Gemini #28596, OpenCode #31932), crash-resilient resume (Copilot #4251, Gemini #27180), checkpoint/resume for subagents (DeepSeek #5242), memory systems (Kimi #1283) |
| **MCP Ecosystem Hardening** | All tools | Client sampling (Gemini #10704), BigInt serialization (Copilot #4211), registry-first discovery (DeepSeek #5238), structured content validation (Gemini #27725), lazy schema injection (Kimi #2147), orphan process cleanup (Copilot #4392) |
| **Security & Trust Semantics** | Gemini, Qwen, OpenCode | Folder trust overrides (Qwen #8643, #8627), destructive command guardrails (Gemini #22672), privacy/telemetry transparency (OpenCode #39875), data-loss prevention (Gemini #26856) |
| **Windows Platform Parity** | Gemini, Copilot, Qwen, OpenCode | PowerShell 5.1 compat (Gemini #20773), drive-letter path bugs (Qwen #8644, #8615), ConPTY rendering (Qwen #7897), codepage 936 issues (Copilot #4391) |
| **Terminal UX Polish** | Copilot, OpenCode, Pi, Qwen, DeepSeek | Clickable links (OpenCode #1168, 119👍), scrollable history (Copilot #4313), fullscreen mode (Pi v0.84.0), inline images (Qwen v0.21.7), mouse-scroll routing (DeepSeek #5223) |
| **Provider Flexibility** | DeepSeek, Pi, Copilot, OpenCode | Per-provider API keys (DeepSeek #5250), model discovery/fallback (Copilot #4376, Pi #7702), BYOM support (Copilot #3053), custom model temperature (OpenCode #40973) |

---

## 4. Differentiation Analysis

| Tool | Focus | Target User | Technical Approach |
|------|-------|-------------|-------------------|
| **Gemini CLI** | Enterprise-grade stability; Google Cloud integration; MCP completeness | GCP-centric developers | Heavy investment in auth flows, Vertex AI, sandboxing; nightly builds for rapid iteration |
| **Copilot CLI** | GitHub-native workflow; interactive TUI polish | GitHub Actions users; VS Code ecosystem | Tight GitHub integration; Rubber Duck reviewer concept; `.agents` convention |
| **Kimi Code** | Lightweight efficiency; context budget optimization | Cost-sensitive individual devs | Token-efficiency focus (lazy schemas, bounded context); VS Code extension companion |
| **OpenCode** | Subscription service + open-source hybrid; multi-provider access | Users wanting turnkey paid tiers | Go/Zen subscription models; provider proxy; TUI/desktop/web multi-surface |
| **Pi** | Deep TUI customization; harness/extension infrastructure | Power users; extension developers | Harness v2 architecture; SQLite-optimized sessions; provider-agnostic design |
| **Qwen Code** | Qwen model ecosystem; review automation; workflows | Qwen model users; team workflows | `/review` orchestration; Dynamic Workflows; live-host desktop |
| **DeepSeek TUI** | Command-boundary refactoring; ACP protocol adoption | TUI purists; automation embedders | EPIC-driven refactoring; ACP tool exposure; MCP Registry-first |

---

## 5. Community Momentum & Maturity

**Highest Momentum (Rapid Iteration):**  
- **Pi** — Shipped v0.84.0 with fullscreen TUI; merged 7 PRs in 24h including 3 regression fixes for the new release. Community actively reports and maintainers immediately fix.
- **DeepSeek TUI** — Closed an EPIC 2-month refactor (#2870); 8 PRs merged/closed in window including macOS fixes and ACP improvements. Best issue-to-fix velocity.
- **Qwen Code** — Shipped v0.21.7; active security response (2 trust bugs in PR); innovative `/review` tooling (pixel capture, manifests).

**High Engagement (Active but Issue-Heavy):**  
- **Gemini CLI** — Most active issue tracker with P1 bugs receiving 47 comments; 10 PRs in flight shows sustained development, but data-loss and Unicode corruption issues risk community trust erosion.
- **OpenCode** — Extremely engaged community (129👍, 119👍 feature requests) but **critical paid-tier outage** undermines confidence. Duplicate issue reports signal frustration.

**Stable but Quiet:**  
- **Copilot CLI** — Zero PRs suggests internal development or reduced OSS contribution; 32 issues triaged but no visible fixes. Community voicing terminal rendering and MCP pain.
- **Kimi Code** — Small but responsive community; two competing contributor PRs on the same bug shows contributor interest, but overall activity is lower.

---

## 6. Trend Signals

### For Tool Developers:

1. **Data integrity is the #1 trust killer.** Gemini's Obsidian file deletion (#26856), Kimi's UTF-8 corruption (#2591), and Qwen's `.env` leakage (#8643) share a pattern: file/state operations must be **fail-closed, never fail-open**. The ecosystem needs a shared standard for destructive-operation safety.

2. **MCP is becoming table stakes but remains immature.** Every tool reports MCP bugs (BigInt, orphan processes, registry auth, MIME types). Tools that invest in MCP hardening now will own the integration ecosystem.

3. **Session durability is the new frontier.** OOM on resume, lost history, false success reports, and checkpoint failures all point to session management as the key technical debt area. Long-lived agent sessions are a core use case; reliability here determines loyalty.

4. **Windows/Linux platform coverage is a competitive gap.** NixOS (#3392, 3 months open), PowerShell 5.1, ConPTY, and codepage issues recur across all tools. First tool to ship first-class Windows support wins a significant underserved segment.

5. **Context transparency builds user trust.** Tools that surface token usage, compaction events, and model fallbacks explicitly (vs. silently degrading) see higher community confidence. "Quiet failures" are the most-reported pattern across all communities.

6. **Subscription/billing reliability is existential.** OpenCode's 2-week outage and 100+ combined comments demonstrate that paid-tier failures generate disproportionate community damage regardless of open-source goodwill.

### For Developers Evaluating Tools:

- **Gemini CLI** — Feature-rich and rapidly evolving, but exercise caution with file operations on non-UTF-8 content.
- **Pi** — Strongest TUI experience and extension architecture; ideal for power users willing to tolerate v0.84 regression churn.
- **Qwen Code** — Best for Qwen model users; watch the trust-bug fixes landing in the next release.
- **Copilot CLI** — Solid GitHub integration but currently in a low-ship cadence; verify session-resume behavior for long-lived workflows.
- **OpenCode** — Compelling subscription model but **verify current outage status before committing** workflows.
- **DeepSeek TUI** — Excellent for automation/embedding via ACP; outstanding contributor velocity.
- **Kimi Code** — Lightweight option for context-constrained workflows; wait for UTF-8 fix merge.

---

*Report generated 2026-08-07 from community digest summaries. Data reflects GitHub activity only; Claude Code and OpenAI Codex excluded due to summary generation failure.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-07 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The following Skills have drawn the most community attention via pull request discussion:

### 1.1 skill-creator — Windows Compatibility & Eval Reliability Fixes
- **PRs**: [#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1323](https://github.com/anthropics/skills/pull/1323), [#1261](https://github.com/anthropics/skills/pull/1261), [#539](https://github.com/anthropics/skills/pull/539)
- **Functionality**: The `skill-creator` meta-skill — used to author and optimize other skills — has a critical evaluation loop (`run_eval.py`) that scores skill descriptions by testing whether Claude triggers the skill from sample queries.
- **Discussion**: The most active thread in the entire repository. Multiple independent contributors report the eval loop universally returns `recall=0%`, rendering description optimization useless. Root causes identified include: Windows subprocess pipe handling (`[WinError 10038]`), `.cmd` vs `.exe` resolution for the `claude` CLI, YAML frontmatter parsing with unquoted colons, and synthetic test files polluting users' live project directories during parallel eval.
- **Status**: All six PRs remain **open** — this is the community's most urgent pain point. No maintainer merge has occurred.

### 1.2 document-typography — Typographic Quality Control
- **PR**: [#514](https://github.com/anthropics/skills/pull/514)
- **Functionality**: A skill that prevents common typographic defects in AI-generated documents — orphan word wrapping (1–6 words spilling to the next line), widow paragraphs (headers stranded at page bottom), and numbering misalignment.
- **Discussion**: Recognized as a broadly applicable problem: "These issues affect every document Claude generates." The author notes users rarely explicitly request good typography — this skill makes it a default.
- **Status**: **Open** (created 2026-03, no maintainer activity).

### 1.3 artifact-docx — w:id Collision Fix (document-skills)
- **PR**: [#541](https://github.com/anthropics/skills/pull/541)
- **Functionality**: Fixes document corruption in the DOCX skill when adding tracked changes to documents with existing bookmarks. Root cause: OOXML uses a shared `w:id` ID space across bookmarks and tracked changes; the SKILL.md examples used hardcoded low IDs (1, 2, 3) that collide.
- **Discussion**: A very specific, technically detailed fix for real-world document corruption — relevant to any user generating Word documents with tracked changes.
- **Status**: **Open** (created 2026-03, updated 2026-04).

### 1.4 document-pdf — Case-Sensitive File References
- **PR**: [#538](https://github.com/anthropics/skills/pull/538)
- **Functionality**: Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` (`REFERENCE.md` → `reference.md`, etc.). Breaks on case-sensitive filesystems (Linux, macOS strict mode).
- **Discussion**: Quiet but important reliability fix — documentation references that break skill loading on common setups.
- **Status**: **Open** (created 2026-03, updated 2026-04).

### 1.5 document-odt — OpenDocument Creation & Conversion
- **PR**: [#486](https://github.com/anthropics/skills/pull/486)
- **Functionality**: A new skill for creating, filling, reading, and converting OpenDocument Format files (.odt, .ods) — covering LibreOffice document workflows and ODT→HTML conversion.
- **Discussion**: Addresses a gap — the collection has docx/pdf skills but no native OpenDocument support. Part of a pattern of community members filling missing format coverage.
- **Status**: **Open** (created 2026-03, updated 2026-04).

### 1.6 frontend-design — Clarity & Actionability Revision
- **PR**: [#210](https://github.com/anthropics/skills/pull/210)
- **Functionality**: A major revision of the frontend-design skill to ensure every instruction is something Claude can actually execute in a single conversation — improving specificity and steering behavior.
- **Discussion**: Focused on a recurring problem: skills that read like documentation for humans rather than actionable instructions for Claude (also raised in Issue #202 for skill-creator).
- **Status**: **Open** (created 2026-01, updated 2026-03).

---

## 2. Community Demand Trends

From the Issues tracker, the clearest demand signals:

### 2.1 Skills Authoring Tooling Reliability (Highest Urgency)
- [#556](https://github.com/anthropics/skills/issues/556) (12 comments), [#1169](https://github.com/anthropics/skills/issues/1169), [#202](https://github.com/anthropics/skills/issues/202)
- The `skill-creator` eval loop is **broken on all platforms** — not just Windows. The description-optimization loop scores every candidate at `recall=0%` and returns the original description unchanged. The community has independently reproduced this 10+ times; the meta-skill for building other skills is the most wanted (and most broken) capability.

### 2.2 Security & Trust Boundary Management
- [#492](https://github.com/anthropics/skills/issues/492) (43 comments — the most-discussed issue in the repo) — community skills distributed under the official `anthropic/` namespace create a trust boundary vulnerability. Users may grant elevated permissions believing skills are official Anthropic releases.
- [#1175](https://github.com/anthropics/skills/issues/1175) — security and context-window concerns when embedding access control logic in SKILL.md files for internal SharePoint workflows.

### 2.3 Skill Distribution & Sharing Infrastructure
- [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) — org-wide skill sharing in Claude.ai: users must manually download `.skill` files and send via Slack/Teams; a shared skill library or direct sharing link is requested.
- [#16](https://github.com/anthropics/skills/issues/16) — exposing Skills as MCPs (Model Context Protocol), signaling skill APIs as standard interface.
- [#189](https://github.com/anthropics/skills/issues/189) (9 👍) — duplicate skills when installing both `document-skills` and `example-skills` plugins, wasting context window.

### 2.4 Context Window Efficiency
- [#1487](https://github.com/anthropics/skills/issues/1487) — the `claude-api` skill eagerly injects ~156k tokens in a single tool call, exhausting the context window. This is the first of what will likely be many issues as skills grow more ambitious.

### 2.5 Platform Compatibility (Bedrock)
- [#29](https://github.com/anthropics/skills/issues/29) — users asking for skills to work with AWS Bedrock (4 comments, persistent but low activity).

---

## 3. High-Potential Pending Skills

These active-comment PRs are not yet merged but may land soon:

| Skill | PR | Description |
|---|---|---|
| [skill-quality-analyzer](https://github.com/anthropics/skills/pull/83) & skill-security-analyzer | #83 | Meta-skills evaluating skills across 5 dimensions (Structure 20%, Documentation, examples, resources) with a security analyzer companion |
| [self-audit](https://github.com/anthropics/skills/pull/1367) | #1367 | Two-stage verification: mechanical file existence check, then four-dimension reasoning audit in damage-severity priority order |
| [testing-patterns](https://github.com/anthropics/skills/pull/723) | #723 | Comprehensive test coverage: Testing Trophy model, AAA pattern, React Testing Library, edge cases |
| [pyxel](https://github.com/anthropics/skills/pull/525) | #525 | Retro/pixel-art game development workflow (write → run_and_capture → inspect → iterate) via pyxel-mcp |
| [SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181) | #181 | Predictive analytics on SAP business data using SAP's open-source tabular foundation model |
| [color-expert](https://github.com/anthropics/skills/pull/1302) | #1302 | Color naming systems (ISCC-NBS, Munsell, RAL, XKCD), color space selection tables (OKLCH for scales, OKLAB for gradients) |
| [plan-file-hygiene](https://github.com/anthropics/skills/pull/1479) | #1479 | Lifecycle management for planning artifacts — addressing accumulation of stale plan files (addresses #1417) |
| [CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509) | #509 | Community health: repo scores 25% on GitHub health metrics; adds contributor guidance (closes #452) |

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **reliable, secure skill-authoring infrastructure** — they want the `skill-creator` meta-skill fixed and hardened (Windows compatibility, eval accuracy, YAML robustness), plus trust-boundary protection for community-submitted skills — before they'll feel confident submitting new Skills at scale.

---

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-07

## Today's Highlights
Active development continues on the Gemini CLI with the release of nightly build **v0.56.0-nightly.20260807** and multiple stabilization PRs targeting auth loops, stream abort handling, and session management. The community is most vocal about **data loss concerns** (deleted files, lost sessions, destroyed Unicode content), **Windows shell compatibility issues**, and **MCP integration bugs** — with the top issue (#26856) receiving 47 comments and 16 reactions. Several quality-of-life PRs are in review, including a new `--list-all-sessions` flag and fixes for narrow-terminal ghost text wrapping.

## Releases
**v0.56.0-nightly.20260807.gd5c9a97dc** (nightly, 2026-08-07) — Automated nightly build with standard version bump and changelog updates. No major user-facing features in this release; it builds on v0.55.0-preview.1 work.

**v0.55.0-preview.2** (via cherry-pick, 2026-08-07) — Hotfix patch applied to the preview branch, cherry-picking commit `2139b12` to address a regression before wider rollout.

**v0.54.2** (2026-08-06) — Patch release with version bump across all workspace packages; likely contains the fixes landed in recent closed PRs.

---

## Hot Issues
1. **[#26856 — "Your idiotic AI disobeyed me completely… cost me $300 worth of work"](https://github.com/google-gemini/gemini-cli/issues/26856)** — P1 bug, 47 comments, 16 👍. User reports catastrophic data loss in Obsidian (10,000s of files deleted, unrecoverable). The issue has gone stale after 3 months, which has likely further frustrated the reporter. This remains the highest-engagement issue and represents a severe trust-breaking failure case. *Maintainers should escalate — this is a PR nightmare waiting to happen.*

2. **[#22323 — Subagent recovery after MAX_TURNS falsely reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** — P1, 12 comments. `codebase_investigator` subagent reports `status: "success"` with `Termination Reason: "GOAL"` even when it hit max turn limits before doing any work. This hides real failures from users, causing false confidence. Maintainer-only with `status/need-retesting` label — fix is in progress.

3. **[#20773 — CLI throws ParserError on Windows PowerShell 5.1 due to `&&`](https://github.com/google-gemini/gemini-cli/issues/20773)** — Closed, 17 comments. The `&&` chain operator isn't supported in PowerShell 5.1 (default on many Windows machines). This is a long-standing Windows compatibility pain point that was eventually resolved — worth checking the fix for backport relevance.

4. **[#10704 — MCP Feature Request: Support Client Sampling](https://github.com/google-gemini/gemini-cli/issues/10704)** — Closed enhancement, 13 comments, 9 👍. Community wants MCP servers to be able to call LLMs through Gemini CLI (like VS Code with GitHub Copilot). This is a significant architectural feature — closing it (presumably with a WONTFIX or moved to internal roadmap) may disappoint MCP ecosystem builders.

5. **[#27132 — VS Code UI lockup: globalState storage blocking main thread](https://github.com/google-gemini/gemini-cli/issues/27132)** — P2, 7 comments. Extension UI freezes during long sessions or window reloads, triggering "Window is not responding." Performance issue affecting daily usability for VS Code users.

6. **[#27386 — Critical issue: Unicode text replacement](https://github.com/google-gemini/gemini-cli/issues/27386)** — Closed, 4 comments. User's date/currency libraries silently corrupted (`Đồng` → `Ä‘á»“ng`; `bolívar` → `bolÃ­var`). Severity P1, marked possible-duplicate. This is a serious correctness bug in file editing — encoding handling must be hardened.

7. **[#28698 — High memory usage detected](https://github.com/google-gemini/gemini-cli/issues/28698)** — P2, 5 comments, new (opened 2026-08-05). Memory leaks/loops during idle/break time. Users report unbounded memory growth. No maintainer response yet.

8. **[#25166 — Shell command execution stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** — P1, 4 comments, 3 👍. Simple CLI commands hang indefinitely after finishing, showing "Awaiting user input." High-impact core workflow bug that has been open since April — frustrates daily usage.

9. **[#27725 — Calendar MCP: "Invalid input: expected record, received array"](https://github.com/google-gemini/gemini-cli/issues/27725)** — P1, 2 comments. `calendar.listEvents` tool consistently fails due to `structuredContent` mismatch. MCP integration quality issue affecting Google Workspace users.

10. **[#27731 — Figma MCP HTTP 400: WebP images labeled as image/png](https://github.com/google-gemini/gemini-cli/issues/27731)** — P1, 2 comments. MIME type mismatch in tool results causes API rejection. Another MCP ecosystem reliability issue — community is actively building on MCP and hitting protocol edge cases.

---

## Key PR Progress
1. **[#28519 — fix(core): prevent infinite auth loop](https://github.com/google-gemini/gemini-cli/pull/28519)** — *Closed.* Awaits `oauth_creds.json` async write and forces consent, resolving an infinite authentication loop (#28430). Critical auth stability fix.

2. **[#28716 — Reclassifying Capacity Exhaustion as Terminal Error](https://github.com/google-gemini/gemini-cli/pull/28716)** — *Closed.* Model capacity exhaustion and insufficient credits now classified as terminal errors, enabling immediate model fallback instead of futile retries. Better UX under load.

3. **[#28718 — fix(core): record usage already received when a stream is aborted](https://github.com/google-gemini/gemini-cli/pull/28718)** — *Open.* Fixes usage metadata loss on stream abort — previously the error path skipped flushing `usageMetadata` entirely. Important for accurate token usage tracking in production.

4. **[#28700 — fix(core): stop a new user message fusing into an unanswered tool response](https://github.com/google-gemini/gemini-cli/pull/28700)** — *Closed.* Fixes the "model finishes your sentence instead of answering" bug where messages after an interrupted tool call get merged into the wrong turn. Big conversational UX improvement.

5. **[#28596 — feat(cli): add --list-all-sessions option](https://github.com/google-gemini/gemini-cli/pull/28596)** — *Open.* Lists sessions across all registered workspaces, grouped by path. Addresses the pain of forgetting where sessions were created. Needs issue linkage — consider commenting to support.

6. **[#28597 — fix(cli): load environment variables before resolving settings placeholders](https://github.com/google-gemini/gemini-cli/pull/28597)** — *Open.* Fixes a load-order race condition where `.env` files weren't loaded before settings expansion, breaking `${VAR}` placeholders. Configuration reliability fix.

7. **[#28641 — fix(cli): prevent ghost text wrapping infinite loop at narrow widths](https://github.com/google-gemini/gemini-cli/pull/28641)** — *Open, help wanted.* Fixes an infinite loop in `getGhostTextLines` when terminal width is narrower than a single wide codepoint (CJK/emoji). Regression-tested. Good community contribution.

8. **[#28639 — fix(core): guard formatTruncatedToolOutput against non-positive maxChars](https://github.com/google-gemini/gemini-cli/pull/28639)** — *Open.* Prevents output inflation (~2x) when `maxChars ≤ 0` due to `String.prototype.slice` negative-index behavior. Small but saves tokens in edge cases.

9. **[#28640 — fix(core): point ProjectIdRequiredError at current auth docs](https://github.com/google-gemini/gemini-cli/pull/28640)** — *Open.* Fixes broken auth documentation link and adds redirect. DX improvement for first-time GCP users.

10. **[#28603 — fix(docker): upgrade sandbox Dockerfile to Node 22](https://github.com/google-gemini/gemini-cli/pull/28603)** — *Open, security.* Resolves #28584 — sandbox pinned to `node:20-slim`, which reached EOL 2026-04-30. Running an EOL runtime in a sandbox that executes model-directed commands is a security liability. **Should be prioritized.**

---

## Feature Request Trends
1. **MCP Ecosystem Expansion** — Strong demand for full MCP spec compliance, particularly *client sampling* (#10704). Communities building on MCP are hitting protocol gaps (calendar input validation, Figma MIME types).

2. **Session Management & Recovery** — Users lose sessions on crash (shutdown loss #27180), want cross-workspace session listing (#28596), and need better resume reliability. Session durability is undermining trust.

3. **AST-Aware Codebase Navigation** — Internal epic #22745 tracking investigations into AST-aware file reads, method-bound-aware tool calls, and smarter codebase mapping. Aims to reduce token noise and turns from misaligned reads.

4. **Resource Safety & Guardrails** — Strong requests for the agent to avoid destructive commands (`git reset --force`, risky DB modifications) and prefer safer alternatives (#22672). Trust-related feature asks.

5. **Enhanced Browser Agent Resilience** — Request for automatic session takeover and lock recovery (#22232), plus fixing settings.json override gaps (#22267). Browser automation needs to be more robust.

---

## Developer Pain Points
1. **Data Loss & Corruption** — The single biggest trust killer: deleted Obsidian files (#26856), destroyed Unicode/dates (#27386), deleted history files after update (#27721). These incidents reduce confidence in letting the agent touch real files.

2. **Windows Shell Incompatibilities** — Recurring issues with PowerShell 5.1 (`&&` operator #20773), backspace behavior (#25867), command substitution blocks (#26318). Windows remains a second-class platform for shell-dependent features.

3. **Stream/Turn Handling Bugs** — Message fusion after interrupted tool calls, "Waiting input" hangs after command completion (#25166), and false success reports on max turns (#22323). Interruption handling is a critical weak point affecting daily UX.

4. **Performance & Memory Leaks** — VS Code UI lockups (#27132) and high memory usage during idle (#28698). Long-session degradation is a real barrier for power users.

5. **Configuration & Auth Friction** — Load-order race conditions with env vars (#28597), auth loops (#28519), unclear Vertex AI error messages (#28679), and broken auth doc links (#28640). The setup and configuration experience needs polish.

6. **MCP Reliability** — Multiple MCP tool failures (calendar, Figma) with protocol-level bugs suggest the MCP integration layer needs more production hardening before being promoted as a headline feature.

---

*Digest generated from GitHub repository `google-gemini/gemini-cli`, data collected 2026-08-07.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-07

## Today's Highlights

A patch release (v1.0.79-6) addresses two UI/UX issues, including a silent session-history load failure that left transcripts permanently blank. Community reporting remains active across terminal-rendering bugs (scrolling, tmux visibility, clearing screens) and reliability problems with session resumes, model selection, and queued task handling. Notably, the most-voted issue this week (👍 35) is a closed item requesting `/app` default to the current working directory.

## Releases

**v1.0.79-6** — Patch release with two fixes:
- A rare internal delay no longer prints a diagnostic warning over the interactive UI.
- A failed session-history load is now properly logged; previously it was silently discarded, leaving the transcript timeline permanently empty for the rest of the session.

No other releases in the last 24h.

## Hot Issues

1. **[#4313 — Allow scrolling through the current conversation history](https://github.com/github/copilot-cli/issues/4313)** — *Open, 4 comments*
   - Users want mouse wheel and PageUp/PageDown navigation through the current conversation, a capability that feels basic in a long-lived interactive terminal tool. Low emoji reaction, but multi-comment discussion signals real demand.

2. **[#3392 — Bash tool breaks on NixOS with version >=1.0.49](https://github.com/github/copilot-cli/issues/3392)** — *Open, 3 comments, 👍 7*
   - A long-standing platform bug: the agent fails to start a bash process (`Failed to start bash process`) on NixOS. This has gone unfixed for nearly three months, frustrating NixOS users and potentially blocking a meaningful Linux user segment.

3. **[#4251 — Resume of a large session OOMs / grinds one CPU core for ~70 min in 1.0.74](https://github.com/github/copilot-cli/issues/4251)** — *Open, 2 comments, 👍 1*
   - A regression in 1.0.74 makes resuming large sessions consume 3–4× memory and peg a CPU core for over an hour. This is a serious reliability issue for users who depend on long-lived sessions. The A/B test isolating the regression to the CLI version is exemplary evidence.

4. **[#4311 — Transcript renders as blank lines until `children` or terminal width changes](https://github.com/github/copilot-cli/issues/4311)** — *Open, 2 comments*
   - A terminal-rendering cache invalidation bug (`WCr` / ScrollBox) causes blank regions in the transcript. Users must submit a new message or resize the terminal to repaint. `/resume` does not recover it either — a frustrating interaction for heavy interactive users.

5. **[#4212 — Prompt box and highlighted menu items render invisible (dark-on-dark) inside tmux](https://github.com/github/copilot-cli/issues/4212)** — *Open, 2 comments*
   - A theming/accessibility issue: Copilot CLI is unreadable inside tmux (dark text on dark background). The same session works fine in a plain terminal tab. This affects tmux-heavy workflows, which are common among terminal-centric developers.

6. **[#4211 — Copilot CLI couldn't handle BigInt in structured MCP response](https://github.com/github/copilot-cli/issues/4211)** — *Open, 2 comments*
   - When an MCP server returns big numbers, Copilot CLI aborts all ongoing tasks with `TypeError: Do not know how to serialize a BigInt`. This is a correctness bug that breaks workflows whenever a connected MCP server uses standard JavaScript BigInt values.

7. **[#4380 — Rubber Duck reviews sometimes use the same model family as the primary session](https://github.com/github/copilot-cli/issues/4380)** — *Open, 2 comments*
   - The "Rubber Duck" reviewer—meant to be an independent adversarial reviewer—sometimes uses the same model family as the primary session, reducing review value. Users expect the reviewer to be a separate model for genuine independent critique.

8. **[#4392 — Post-authentication MCP client rebuild at startup leaves orphaned stdio MCP server processes](https://github.com/github/copilot-cli/issues/4392)** — *Open, 1 comment*
   - At startup, the CLI spawns MCP servers, then tears down and rebuilds the entire MCP client after authentication completes. The first generation of stdio child processes is never killed or reaped, leaving orphans behind. A resource leak that could accumulate over repeated startups.

9. **[#4346 — MCP registry policy fetch returns 403 for Actions GITHUB_TOKEN, blocking all non-default MCP servers in CI](https://github.com/github/copilot-cli/issues/4346)** — *Open, 1 comment, 👍 1*
   - In GitHub Actions, using the documented PAT-less setup (`copilot-requests: write`), the MCP registry policy fetch returns 403. This blocks all non-default MCP servers in CI, conflicting with GitHub's own documented recommendation and the "no longer needs a PAT" changelog.

10. **[#4118 — `/app` command does not select current working directory by default](https://github.com/github/copilot-cli/issues/4118)** — *Closed, 0 comments, 👍 35*
    - The highest-reacted issue this week: users want `/app` to pre-select the current working directory instead of forcing manual selection. The issue shows as **closed** — worth tracking the release notes for whether it was fixed or intentionally closed.

## Key PR Progress

*No pull requests were updated or created in the last 24 hours.*

- **Zero active PR activity** — a quiet day for contributions on the `github/copilot-cli` repo.
- This could be a temporary lull or a sign of planned work not yet visible publicly.
- The team appears to be focused on triaging incoming issues (32 items updated) rather than merging new PRs in this window.

## Feature Request Trends

1. **Improved navigation and scrolling in interactive mode** — Multiple issues (#4313, #4311) request the ability to scroll through conversation history and fix rendering that requires manual repaint. This is shaping up to be a core UX concern for interactive-heavy users.

2. **Model selection and discovery** — Co-occurring requests for:
   - BYOM (Bring Your Own Model) providers to support model discovery and in-session switching without restart (#4376)
   - Fixing session-resume failures caused by inconsistent model-name prefix handling (#4282)
   - Ensuring "Rubber Duck" reviewer uses an independent model family (#4380)
   - Correct reasoning-effort selection when switching models (#3053)
   — Signals users want more control and predictability over which models are active and when.

3. **`.agents` convention expansion** — One request (#4204) asks to extend `.agents` discovery beyond skills to include instructions, agents, and hooks in any opened folder (not just Git repos). A natural extension of the existing convention.

4. **Permission transparency** — A request (#4386) to display the specific rule or command characteristic that triggered an approval prompt. Users want to understand *why* a command is blocked before deciding to approve.

5. **Better shell-mode completion** — A request (#4387) for Tab in shell (`!`) mode to trigger normal terminal completion rather than switching to the Issues view. Small but ergonomic quality-of-life improvement.

## Developer Pain Points

1. **Terminal rendering fragility** — The most frequent source of complaints this week: blank transcripts, invisible prompt boxes in tmux, screen clears on Windows codepage 936, and scroll failures. These break core interactivity and erode trust in the TUI.

2. **Session resume reliability** — Regressions in large-session resume (OOM/CPU spin), transcript blanking after resume, and model-name prefix inconsistencies all point to session persistence being fragile. Long-lived sessions are a core use case for CLI power users, and these bugs are high-impact.

3. **MCP integration rough edges** — BigInt serialization failures, orphaned stdio processes, non-GitHub remotes breaking `/mcp search`, and GITHUB_TOKEN 403s blocking CI MCP servers. Users integrating with MCP servers hit multiple failure modes that abort workflows entirely.

4. **Permission mode inconsistencies** — Two duplicate reports (#4388, #4389) of permissions stuck in auto mode after switching back to interactive, with the agent continuing to make changes without asking. This is a safety-relevant bug that undermines trust.

5. **Queued and stuck messages** — Issues with queued messages never being picked up (#4373) and steering messages arriving out of order (#4372) suggest background task management needs attention. Models also appear unable to detect when background shell tasks have finished (#4385).

6. **Platform-specific breakage** — NixOS bash failures (#3392, 3 months open) and Windows codepage issues (#4391, #4384) remain unresolved. These create silent adoption barriers for specific developer ecosystems.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-07

## Today's Highlights
Two independent contributors (shoemoney and 686f6c61) submitted competing fixes for a critical data-corruption bug in `StrReplaceFile`, which silently corrupts non-UTF-8 bytes during file edits. Meanwhile, the long-awaited Memory System proposal (#1283) continues to hold the community's attention as one of the most requested roadmap items, with 20 comments.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#1283 — Memory System: Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)** — The top community feature request (20 comments) for implementing automatic and manual memory across sessions, allowing the CLI to remember project patterns and user preferences.

2. **[#2591 — StrReplaceFile corrupts undecodable bytes outside the edited region](https://github.com/MoonshotAI/kimi-cli/issues/2591)** — Critical data-corruption bug: `StrReplaceFile` decodes files with `errors="replace"` which rewrites any non-UTF-8 byte (even far from the edit) as `U+FFFD`. Serious integrity concern for users editing binary or legacy-encoded files.

3. **[#2474 — CLI interface keeps flickering and re-rendering entire conversation](https://github.com/MoonshotAI/kimi-cli/issues/2474)** — Community-reported UX annoyance (2 upvotes) on Linux where the TUI inexplicably re-renders from scratch, disrupting flow during long conversations.

4. **[#2317 — VSCode Extension: Plan mode file path not clickable in chat webview](https://github.com/MoonshotAI/kimi-cli/issues/2317)** — Minor but frequent developer annoyance: file paths in plan mode are not clickable within the VS Code webview, forcing manual navigation.

5. **[#2147 — Lazy-load MCP tool schemas into context](https://github.com/MoonshotAI/kimi-cli/issues/2147)** — With multiple MCP servers configured, all tool schemas are injected upfront, consuming thousands of tokens before a single user message. Proposes lazy injection on-demand.

6. **[#2593 — Quick auto/yolo/manual mode switching in VSCode panel](https://github.com/MoonshotAI/kimi-cli/issues/2593)** — Enhancement request for one-click mode toggles in the VS Code plugin panel, plus showing remaining quota in the status bar.

7. **[#621 — First WriteFile always errors "Invalid path", then uses absolute path](https://github.com/MoonshotAI/kimi-cli/issues/621)** — Long-standing bug where the first file write fails with a relative-path issue before falling back to absolute paths. Disrupts scripted or agentic workflows.

8. **[#821 — Missing authorization checks + dependency updates needed (Security)](https://github.com/MoonshotAI/kimi-cli/issues/821)** — Security audit identified 2 IDOR/missing-auth vulnerabilities in the web API and 5 CVEs in dependencies (severity high, ~7.0–8.0 CVSS). Users should monitor patch status.

## Key PR Progress

1. **[#2595 — fix(StrReplaceFile): refuse to edit files that are not valid UTF-8](https://github.com/MoonshotAI/kimi-cli/pull/2595)** — By shoemoney. Safety-oriented approach: explicitly reject non-UTF-8 files rather than silently corrupting them. Resolves #2591.

2. **[#2594 — fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits](https://github.com/MoonshotAI/kimi-cli/pull/2594)** — By 686f6c61. More capable approach: operates on raw byte buffers with UTF-8 byte substrings, preserving all non-edited bytes exactly. Alternative fix for #2591.

3. **[#2255 — feat(shell): support Shift+Enter for inserting newlines](https://github.com/MoonshotAI/kimi-cli/pull/2255)** — Adds the widely expected Shift+Enter newline shortcut, complementing Ctrl-J and Alt-Enter; closes #2254 and references four related issues. Community-defined quality-of-life win.

## Feature Request Trends

- **Memory / persistent context** — The most impactful request (#1283): automatic and manual memory for cross-session project context, preferences, and learned patterns.
- **Context efficiency** — Big appetite for reducing token bloat: lazy-loading MCP schemas (#2147), smarter context management, and better resource awareness.
- **IDE integration polish** — Users want the VS Code plugin to be a first-class control surface: mode switching, status indicators, quota visibility (#2593).
- **Reliability of file operations** — File editing must preserve binary safety; the community is actively pushing fixes for UTF-8 corruption (#2591, #2594, #2595).

## Developer Pain Points

- **File integrity** — Data corruption from attempted edits on non-UTF-8 files is alarming; contributors jumped on it quickly with two competing PRs.
- **TUI render instability** — Flickering and full re-renders in the CLI on Linux degrade long-session usability (#2474).
- **First-write failures** — Initial file writes failing due to path resolution bugs force unwanted fallback behavior (#621).
- **Context budget pressure** — MCP tool schemas eating into context before the first user message frustrates power users with many servers (#2147).
- **Manual file navigation** — Non-clickable paths in VS Code webview and similar minor frictions accumulate into daily inefficiency (#2317).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-07

## Today's Highlights

The community is facing a **critical, week-long outage** affecting all OpenCode Go and Zen paid subscription models, with multiple issues reporting `401 Request blocked by upstream provider` errors — this remains the single most urgent unresolved problem. Beyond the outage, the project is seeing strong momentum on **TUI and UX enhancements**, including clickable links, session context visualization, and cross-project session management. The PR pipeline is active with **20+ new pull requests** in the last 24 hours, focusing on core stability, tool output bounding, and TUI prompt improvements.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

### 1. [OpenCode Go: return 401 Request blocked by upstream provider](https://github.com/anomalyco/opencode/issues/38257)
**44 comments | 11 👍** — The highest-traffic issue documenting the paid-tier outage. Users report the `chat/completions` endpoint fails while `/v1/models` works, indicating a server-side authentication/authorization problem that has persisted for over two weeks.

### 2. [All subscription models return "Request blocked by upstream provider"](https://github.com/anomalyco/opencode/issues/38218)
**31 comments | 13 👍** — A duplicate report with broader scope: *every* model under the Go subscription fails. The community is frustrated by lack of official acknowledgment and asks for status updates.

### 3. [401 AuthError: Request blocked by upstream provider](https://github.com/anomalyco/opencode/issues/38195)
**24 comments | 17 👍** — Another duplicate confirming the issue affects OpenCode Desktop and Hermes clients on Windows and macOS. Free models work fine, which isolates the problem to paid-tier auth.

### 4. [[FEATURE]: Session context usage (similar to /context in Claude)](https://github.com/anomalyco/opencode/issues/6152)
**22 comments | 129 👍** — The most-upvoted feature request this week. Users want a TUI dialog showing a breakdown of the current session's context window (tokens used, breakdown by message type, etc.), similar to Claude's `/context` command.

### 5. [[FEATURE]: Cross-project session list / picker for TUI](https://github.com/anomalyco/opencode/issues/31932)
**15 comments | 6 👍** — Users need a unified session picker across all projects, not just the current workspace. This reflects growing adoption in multi-repo workflows.

### 6. [订阅opencode go之后套餐没有生效](https://github.com/anomalyco/opencode/issues/40234)
**13 comments | 0 👍** — Chinese-language report: after subscribing to OpenCode Go, the plan doesn't activate. Payment confirmation received but error states "No payment method." Likely a symptom of the same billing/auth issue.

### 7. [Amazon Bedrock Opus 4.6 compaction failure](https://github.com/anomalyco/opencode/issues/14332)
**13 comments | 8 👍** — Long-running issue: compaction fails with "thinking blocks cannot be modified" when the model returns `thinking` or `redacted_thinking` blocks. The agent tries to rewrite them, causing errors.

### 8. [Feature Request: Make Links Clickable (Ctrl+Left Click to Open)](https://github.com/anomalyco/opencode/issues/1168)
**11 comments | 119 👍** — A persistently popular UX request: make URLs in the TUI/desktop clickable with Ctrl+Click to open in the default browser. High popularity suggests this is overdue.

### 9. [[Zen] AuthError: "Request blocked by upstream provider" — all Zen models broken](https://github.com/anomalyco/opencode/issues/39827)
**9 comments | 4 👍** — Same outage reported for OpenCode Zen (not just Go). Users note that direct provider API keys (DeepSeek, Anthropic) work fine, proving the issue is on OpenCode's proxy side.

### 10. [[FEATURE]: Revert silent removal of Go privacy wording and provider attribution](https://github.com/anomalyco/opencode/issues/39875)
**6 comments | 44 👍** — Privacy-focused request with strong community support. Users noticed silent removal of privacy wording and provider attribution in recent commits and demand transparency plus documented telemetry/retention policies.

---

## Key PR Progress

### 1. [fix(acp): isolate session MCP tools](https://github.com/anomalyco/opencode/pull/40979)
Fixes a bug where MCP tool names collide across ACP sessions. Each session now owns its dynamically registered MCP server names, addressing cross-session contention.

### 2. [fix(i18n): use 词元 instead of 令牌 for token in zh locale](https://github.com/anomalyco/opencode/pull/40977)
Chinese localization fix: "令牌" (API credential term) is replaced with "词元" (proper LLM token term). Improves clarity in the context usage panel.

### 3. [fix(desktop): preserve macOS app on window close](https://github.com/anomalyco/opencode/pull/40974)
Keeps the macOS app running when the last window closes, with window state restoration on Dock activation. Matches standard macOS app lifecycle expectations.

### 4. [fix(provider): forward agent temperature for config-defined custom models](https://github.com/anomalyco/opencode/pull/40973)
Custom models in `opencode.json` currently default to `temperature: false`, silently dropping agent-level temperature settings. This fix aligns custom providers with built-in model behavior.

### 5. [feat(tui): expose prompt action commands](https://github.com/anomalyco/opencode/pull/40971)
Adds stable prompt-action commands (`form.option.previous`, etc.) to TUI plugins for form and permission prompts, enabling more advanced plugin interactions.

### 6. [fix(opencode): serialize orphaned compaction history](https://github.com/anomalyco/opencode/pull/40800)
**Merged.** Compaction history is now serialized into readable labeled text in a single user message, preserving reasoning, tool calls, and attachments while truncating large outputs. Addresses history loss after compaction.

### 7. [feat(core): continue subagent sessions](https://github.com/anomalyco/opencode/pull/40931)
Adds optional `sessionID` input to continue existing foreground subagent sessions, preserving child history with parent ownership and agent identity validation.

### 8. [feat(core): bound tool output](https://github.com/anomalyco/opencode/pull/40929)
Introduces configurable `tool_output` line/byte limits for local tool text, with full truncated content retained in managed files (cleaned after 7 days). Prevents context overflow from verbose tool output.

### 9. [refactor(core): simplify file tools to lexical paths](https://github.com/anomalyco/opencode/pull/40962)
**Merged.** Simplifies V2 file tools to use lexical path resolution (no symlink canonicalization), consistent with V1 and established agent-tool behavior. Resolves symlink-related edge cases.

### 10. [feat(tui): queue prompts with option enter](https://github.com/anomalyco/opencode/pull/40922)
Enables **Option+Enter / Alt+Enter to queue prompts** while Enter steers the active response. Queued work appears in a compact dock next to the composer, improving mid-run prompt management.

---

## Feature Request Trends

1. **Context window transparency** — Users repeatedly request visibility into session context usage (token breakdown, #6152 has 129 👍). The need is acute for long-running coding sessions.

2. **Clickable links in TUI/Desktop** (#1168, 119 👍) — A long-standing usability gap; users expect modern terminal/desktop link behavior (Ctrl+Click).

3. **Cross-project session management** (#31932) — With multi-repo workflows growing, users want a unified session picker and search across all projects, not just the current directory.

4. **Queue vs. steer semantics** (#32157, 67 👍) — Users want explicit control over how prompts submitted mid-run are handled: queued, steered, or break.

5. **Privacy and telemetry transparency** (#39875, 44 👍) — The community demands clearer disclosure of what data is collected, provider routing, and retention policies — driven by silent changes in recent releases.

---

## Developer Pain Points

1. **Paid-tier outage is the dominant frustration** — The `401 Request blocked by upstream provider` issue affects OpenCode Go *and* Zen subscriptions for 2+ weeks with no official fix or public acknowledgment. The community is reopening duplicate issues daily, indicating a serious trust and reliability problem.

2. **Subscription activation and billing confusion** — Reports of subscribed accounts not activating (e.g., #40234) compound the outage, suggesting systemic issues in the payment/billing verification pipeline.

3. **TUI stability on Linux** — Multiple reports of freezes: Debian 13/XFCE (#35494) blank-screen freezes requiring `kill -9`, and garbled terminal output in PowerShell after exit (#11748). A contributor has started PR #40974 addressing macOS lifecycle, but Linux TUI stability remains fragile.

4. **Compaction and context handling bugs** — The Bedrock Opus 4.6 compaction failure (#14332, 13 comments) and orphaned compaction history loss highlight real pain around context management in long sessions.

5. **Web interface lag** — The web UI doesn't auto-refresh conversations in real-time (#40502) and fails to discover projects from Codespaces (#39522), hurting adoption in remote/cloud workflows.

6. **Model metadata accuracy** — DeepSeek V4 Flash Free is capped at 200K context in models.dev metadata despite native 1M support (#40958), forcing users into manual workaround configurations.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-07

## Today's Highlights

Pi v0.84.0 shipped with a major new **fullscreen TUI mode**, featuring runtime toggling, draggable scrollbars, and improved text selection. The community is actively reporting and fixing regressions from this release—particularly around double-click selection and copy behavior. Context compaction reliability (#6879, 15 👍) and Windows support strategy (#7547, 22 comments) remain the most-discussed open topics.

## Releases

**v0.84.0** — Fullscreen TUI mode with sticky editor/footer, independently scrollable transcript, and draggable scrollbars. Runtime switching between regular and fullscreen modes supported.

## Hot Issues

1. **[#7547 — Windows support strategy](https://github.com/earendil-works/pi/issues/7547)** — 22 comments; community pinpoints where core effort should focus vs. delegated extensions. High signal for maintainers prioritizing platform work.

2. **[#6879 — Auto-compaction never triggers](https://github.com/earendil-works/pi/issues/6879)** — 15 👍; context grows past 100% until provider overflow (373k tokens). Compaction only fires on API rejection; needs check after every agentic turn.

3. **[#7128 — New PI_* guideline over-encourages bash calls](https://github.com/earendil-works/pi/issues/7128)** — 5 👍; default system prompt biases agent toward unnecessary env-inspection commands. Community wants the guideline scoped to relevant tasks.

4. **[#7702 — DeepSeek 400 on reasoning_content](https://github.com/earendil-works/pi/issues/7702)** — Multi-turn/tool-call conversations via opencode zen gateway fail; `detectCompat()` root cause identified. In-progress fix.

5. **[#7736 — Uncaught exception on terminal width](https://github.com/earendil-works/pi/issues/7736)** — v0.84.0 regression; rendered line exceeds terminal width causes crash instead of truncation. Related duplicates #7737.

6. **[#7600 — X11 connection leak](https://github.com/earendil-works/pi/issues/7600)** — Long-running processes leak X server connections; 182 established over 8 days, filling Xorg's 256-client table.

7. **[#7321 — Multi-line paste broken on Termux](https://github.com/earendil-works/pi/issues/7321)** — Terminals without bracketed paste support treat first `\r` as submit. Mobile/SSH users affected.

8. **[#7740 — TUI after /reload ignores custom tool renderers](https://github.com/earendil-works/pi/issues/7740)** — Tools registered on `session_start` lose custom rendering after reload; MCP extension users impacted.

9. **[#7703 — Agent.reset() leaves assistant-only transcript](https://github.com/earendil-works/pi/issues/7703)** — Reset during active run doesn't abort or settle; assistant message appended to cleared state. Fix merged as #7717.

10. **[#7413 — Compaction fails on GHE.com](https://github.com/earendil-works/pi/issues/7413)** — `/compact` fails with `unknown stamp "prod-cus-01"` on GitHub Copilot enterprise accounts; normal chat works fine.

## Key PR Progress

1. **[#7745 — Preserve Gemini thought signatures (merged)](https://github.com/earendil-works/pi/pull/7745)** — Round-trips `extra_content.google/vertex.thought_signature` in OpenAI-compatible tool calls; closes #6733.

2. **[#7742 — Ollama Cloud provider (open)](https://github.com/earendil-works/pi/pull/7742)** — Adds `OLLAMA_API_KEY` support; hybrid local/cloud via `ollama launch pi`. Follows existing provider patterns.

3. **[#7717 — Reject reset during active runs (merged)](https://github.com/earendil-works/pi/pull/7717)** — Fixes #7703; preserves transcript until in-flight response settles; regression test added.

4. **[#7733 — Correct multi-click text selection (merged)](https://github.com/earendil-works/pi/pull/7733)** — Fixes word-selection whitespace inclusion and whitespace-group double-click behavior.

5. **[#7721 — Avoid unwanted newlines when copying (merged)](https://github.com/earendil-works/pi/pull/7721)** — Tracks row boundaries so wrapped lines don't introduce phantom newlines on paste.

6. **[#7715 — Blocked tool calls can terminate (merged)](https://github.com/earendil-works/pi/pull/7715)** — Adds optional `terminate` hint to `beforeToolCall`; closes #5998.

7. **[#7710 — Restore suspended harness operations (open)](https://github.com/earendil-works/pi/pull/7710)** — Implements R3 of harness v2; loads harness from session with existing literals.

8. **[#7727 — SQLite query optimizations (open)](https://github.com/earendil-works/pi/pull/7727)** — Moves branch filters/cursors/limits into SQL; adds covering indexes; improves `getL` performance.

9. **[#7718 — Preserve scrollback on full redraws (merged)](https://github.com/earendil-works/pi/pull/7718)** — Prevents scrollback loss when streaming markdown re-flows above the visible viewport.

10. **[#7681 — AGENTS.override.md support (merged)](https://github.com/earendil-works/pi/pull/7681)** — Highest-priority per-directory context override; loads instead of `AGENTS.md`/`CLAUDE.md` when present.

## Feature Request Trends

- **Fullscreen TUI polish** — Most active area: disable select-to-copy (#7720), half-page scroll (#7735), double-click word selection for paths (#7746), configurable keybindings.
- **Provider ecosystem expansion** — Ollama Cloud (#7742), Qwen Token Plan Individual (#7659), Bedrock Mantle (#6216), DeepSeek V4 Flash server-side web_search (#7704).
- **Harness v2 infrastructure** — Restoration from sessions (#7710), telemetry streaming (#7713), configurable factory (#7686).
- **Auth/credential UX** — Read-only provider/model preflight check (#7152), SSH-friendly login flow (#7691).
- **Session management** — `SessionManager.reload()` to re-read from disk (#7699), handling `end_turn: false` from Codex (#7689).

## Developer Pain Points

- **Context compaction reliability** — Auto-compaction fires too late or not at all; API rejection is the only backstop (#6879).
- **TUI regressions in v0.84.0** — Overage width crashes (#7736, #7737), selection/copy artifacts (#7746, #7720), active-run reset issues (#7703).
- **Provider-specific incompatibilities** — DeepSeek reasoning_content (#7702), GLM prompt_cache_retention failures (#7676), GHE.com compaction (#7413), Qwen model list staleness (#7674).
- **Terminal environment fragility** — Multi-line paste without bracketed paste (#7321), X11 connection leaks (#7600), SSH login redirect failures (#7691).
- **Performance degradation** — O(n²) tool-call buffer re-parsing on every delta (#7698); SQLite query inefficiency in branch-heavy sessions (#7727).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-07

## Today's Highlights

The v0.21.7 stable release lands with two notable quality-of-life improvements: the removal of the 50-turn limit for long-running Goals, and inline terminal image rendering from model outputs in the interactive CLI. Meanwhile, two high-priority security bugs surfaced around folder trust evaluation—one allowing untrusted workspaces to load `.env` files, another letting a `DO_NOT_TRUST` rule be silently overridden by ancestor `TRUST_FOLDER` rules—both actively being addressed in open PRs.

## Releases

**v0.21.7** — [Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.7)

- Removed the 50-turn limit for Goals, allowing tasks to resume and continue beyond previous boundaries. ([#8421](https://github.com/QwenLM/qwen-code/pull/8421))
- Enabled rendering inline terminal images from model outputs in the interactive CLI for Kitty/iTerm2/WezTerm/Ghostty/Warp terminals. ([#8090](https://github.com/QwenLM/qwen-code/issues/8090))
- CI fix to surface blocked autofix takeover admissions. ([#8410](https://github.com/QwenLM/qwen-code/pull/8410))

**live-host-v0.1.0** — Qwen Live Host initial release, with CI improvements for Windows merge queue tests on ECS and evidence-image tooling groundwork for GitHub review. Also published as `live-host-latest` stable installer feed.

## Hot Issues

1. **[#3203](https://github.com/QwenLM/qwen-code/issues/3203) — Qwen OAuth Free Tier Policy Adjustment (CLOSED, 150 comments)**  
   A highly contentious proposal to slash the daily free quota from 1,000 to 100 requests/day and phase out the free tier entirely. The 150-comment thread signals strong community pushback; closed now, but the debate itself is noteworthy.

2. **[#8622](https://github.com/QwenLM/qwen-code/issues/8622) — Hooks regression in 0.21.6 (OPEN, 5 comments)**  
   `PreToolUse`, `PostToolUse`, `PreCompact`, and `SessionStart` hooks never fire in 0.21.6—only `UserPromptSubmit` and `Stop` dispatch. This breaks hook-based tool gating, a critical extension point for power users.

3. **[#8643](https://github.com/QwenLM/qwen-code/issues/8643) — `.env` loaded from DO_NOT_TRUST ancestor (OPEN, 3 comments)**  
   Security bug: workspace trust is evaluated once for the start directory, then applied to every `.env` candidate while walking up the tree. A trusted workspace can silently ingest secrets from an untrusted parent directory.

4. **[#8627](https://github.com/QwenLM/qwen-code/issues/8627) — DO_NOT_TRUST loses to ancestor TRUST_FOLDER (OPEN, 3 comments)**  
   Companion trust bug: an explicit `DO_NOT_TRUST` rule is short-circuited if any ancestor has `TRUST_FOLDER`, letting an untrusted workspace inject the `qwen serve` bearer token. Both trust bugs share root-cause territory.

5. **[#8615](https://github.com/QwenLM/qwen-code/issues/8615) — Desktop Windows crash: EISDIR lstat 'C:' (OPEN, 5 comments)**  
   Qwen Code Desktop v0.1.0 crashes on startup when opening a workspace on Windows—`fs.lstat` on a drive root fails with EISDIR. A P1 Windows blocker for the new desktop product.

6. **[#8316](https://github.com/QwenLM/qwen-code/issues/8316) — Cancelled prompt not restored (OPEN, 8 comments)**  
   After Ctrl+C cancels an in-flight prompt, the text isn't restored to the input box—users must retype everything. Simple but highly visible UX regression for interactive CLI work.

7. **[#8562](https://github.com/QwenLM/qwen-code/issues/8562) — tmux screen flicker over SSH (OPEN, 4 comments)**  
   Users on macOS → SSH → Ubuntu → tmux report persistent screen flashing in recent versions. Community investigation points to a rendering regression; Linux/tmux users are hit hardest.

8. **[#8584](https://github.com/QwenLM/qwen-code/issues/8584) — Anthropic model-ID parsing rejects dotted-minor aliases (OPEN, 4 comments)**  
   `claude-opus-4.8`-style aliases fail parsing, and Opus 5 token limits aren't defined. Proxy deployments hit this immediately; affects any Anthropic-compatible backend.

9. **[#8644](https://github.com/QwenLM/qwen-code/issues/8644) — File links in VS Code chat fail on Windows (OPEN, 3 comments)**  
   Drive letters get URL-encoded (`d%3A`) when clicking file links in chat, breaking file opening. Windows-only annoyance with a clear root cause and likely simple fix.

10. **[#8560](https://github.com/QwenLM/qwen-code/issues/8560) — Web Shell deep-link refresh returns 401 (CLOSED, 3 comments)**  
    Refreshing a session deep link when `qwen serve` has a bearer token returns 401 Unauthorized. Closed with an in-review status, but worth watching for the fix's quality.

## Key PR Progress

1. **[#8658](https://github.com/QwenLM/qwen-code/pull/8658) — perf(review): move remote matching into CLI**  
   Reduces `/review` orchestration by moving Git remote resolution from model-authored prose into a deterministic `qwen review match-remote` subcommand—fewer LLM round-trips, same coverage.

2. **[#8654](https://github.com/QwenLM/qwen-code/pull/8654) — feat(review): add repository context manifest**  
   Adds a `.qwen/review-manifest` declaring bounded review domains, related-path scopes, recommended tests, and required configs, letting `/review` focus on the right files.

3. **[#8465](https://github.com/QwenLM/qwen-code/pull/8465) — feat(core): checkpoint long-running Goal evidence**  
   Durable evidence checkpointing: before the evidence catalog hits its hard limit, an independent verifier compresses evidence into bounded summaries, enabling continuation without losing context.

4. **[#8320](https://github.com/QwenLM/qwen-code/pull/8320) — feat(workflows): add cooperative pause and resume**  
   Whole-run pause/resume for Dynamic Workflows: scheduler stops dequeuing new agents, in-flight work converges, results hold at a gate until resume. Cancellation rejects queued work cleanly.

5. **[#8388](https://github.com/QwenLM/qwen-code/pull/8388) — feat(review): capture-tui — pixels, not prose (Phase 2)**  
   `qwen review capture-tui` drives code under review in a private tmux server and captures the pane exactly as rendered—verifying terminal-rendering claims with actual pixels.

6. **[#8525](https://github.com/QwenLM/qwen-code/pull/8525) — fix(core): resolve Qwen 3.8 reasoning budget conflicts**  
   Prevents DashScope Qwen 3.8 requests from carrying both `reasoning_effort` and `thinking_budget` when config layers disagree; applies precedence and keeps unrelated settings intact.

7. **[#8619](https://github.com/QwenLM/qwen-code/pull/8619) — fix(desktop): strip Windows verbatim prefix from workspace paths**  
   Replaces `std::fs::canonicalize` with `dunce::canonicalize` at both desktop-shell path canonicalization sites, fixing `\\?\C:\...`-style prefixes that break workspace resolution.

8. **[#7897](https://github.com/QwenLM/qwen-code/pull/7897) — fix(cli): skip terminal redraw optimizer on WSL/ConPTY**  
   Direct fix for the WSL + Windows Terminal streaming duplication bug (#7634): disables batched cursor-up sequences that ConPTY mangles, restoring single-render streaming output.

9. **[#8423](https://github.com/QwenLM/qwen-code/pull/8423) — feat(serve): observe daemon and child memory against real denominators**  
   Turns the abstract memory denominator (#8245) into actual readings and models a child-heap partition without applying it yet—foundation for accurate memory observability.

10. **[#8290](https://github.com/QwenLM/qwen-code/pull/8290) — fix(core): fail closed on zero inode file cache (CLOSED)**  
    Makes inode-based identity checks fail closed when `fs.Stats.ino` is `0`, preventing unrelated paths from collapsing onto the same `dev:0` key in the file read cache and file watcher.

## Feature Request Trends

- **Multimodal / Omni integration** — The `omni-experiment` track (issues #8185, #8197) is the most ambitious active direction: S3 delivery reliability with local caching, credential reuse, and crash-resilient retransmission; plus a roadmap for file recognition and metadata extraction.
- **Memory & long-running agent state** — Requests for activeWork tracking in deep daemon health (#8586), checkpointed Goal evidence (#8465), and external memory writes via Mem0 (#8507) all point toward agents that survive restarts and long horizons.
- **Terminal UX parity** — Inline image rendering (shipped in v0.21.7), Korean docs support (#8551), and slash-command name preservation in narrow terminals (#8657) show a push for polished, internationalized CLI experiences.
- **Web Shell / group collaboration** — Group pairing for channels (#8440), Feishu/DingTalk contact enrichment (#8569, #8639), and mobile composer anchoring (#8601) indicate expanding multi-user and mobile surfaces.

## Developer Pain Points

- **Security trust semantics confuse users** — Two separate folder-trust bugs (#8643, #8627) show that trust evaluation is non-intuitive and potentially dangerous: DO_NOT_TRUST can be overridden, and trust is applied inconsistently during directory walks.
- **Windows remains a second-class platform** — Desktop startup EISDIR crash (#8615), URL-encoded drive letters in file links (#8644), WSL/ConPTY rendering duplication (#7634, #7897), and Chinese IME pinyin rendering issues (#8625) form a recurring cluster of Windows-specific friction.
- **Hooks and extension points regress silently** — The hooks regression in 0.21.6 (#8622) went unnoticed until community members reported it, highlighting a need for regression tests around the extension API surface.
- **Terminal rendering regressions keep appearing** — Flicker in tmux (#8562), duplicate scrollback output on window resize (#8557), and truncated-content expansion failures (#8634) suggest the virtualized-history renderer (VP mode) needs broader compatibility testing across terminal emulators.
- **CI /review orchestration is fragile** — Silent reverse-audit hangs burning the full 360-minute budget (#8597) and multiple timeouts on large PRs point to an over-reliance on LLM-authored orchestration steps—the push to move logic into deterministic CLI commands (#8658) is the right instinct.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-07

## 1. Today's Highlights

The v0.9.4 release train remains the central focus, with the command-boundary refactor EPIC (#2870) closing and its Layer 5.3 verification PR (#5255) opening — signaling steady progress on the multi-week refactor. Community-contributed fixes continue to land at a healthy clip, including a macOS mouse-scroll fix (#5234), checkpoint resume for interrupted subagents (#5242), and visible wait timers (#5240), while three open enhancement requests shine a light on API key management (#5250), model context fallback transparency (#5244), and subagent recursion depth enforcement (#5253).

## 2. Releases

No new releases in the last 24 hours. The most recent version remains **v0.9.4**, currently integrated via release train PR #5135.

## 3. Hot Issues (10 Notable)

1. **[#5253 — Nested max_depth can widen the root session depth budget](https://github.com/Hmbown/CodeWhale/issues/5253)** (OPEN, 1 comment)  
   A descendant subagent can specify an explicit `max_depth` on a nested spawn that overrides the root session's smaller configured budget. PR #3931 added a global ceiling of 8 but doesn't enforce the operator's per-session smaller cap. **Why it matters:** This is a privilege-escalation-style bug in agent recursion — a security and reliability concern for deep delegation.

2. **[#5250 — Only one API key can be saved across different API providers](https://github.com/Hmbown/CodeWhale/issues/5250)** (OPEN, 2 comments)  
   Users of multiple providers (e.g., DeepSeek and GLM) must re-enter keys on every model switch because the config stores a single key. **Community reaction:** Straightforward request with clear support — a common friction point for multi-provider workflows.

3. **[#5244 — Unknown model IDs silently degrade to 128K legacy context](https://github.com/Hmbown/CodeWhale/issues/5244)** (OPEN, 2 comments)  
   When `context_window_for_model` doesn't know a model ID, `provider_capability` silently falls back to 128K tokens — a 1M-window model compacts without any user-visible hint. v0.9.4 partially mitigates, but the fallback is still quiet. **Why it matters:** Quiet correctness bugs are the worst kind — users hit spurious truncation with no diagnostic path.

4. **[#4978 — Anthropic API error: 'type' must be in ["enabled","disabled","auto"]](https://github.com/Hmbown/CodeWhale/issues/4978)** (CLOSED, 6 comments)  
   Using an Anthropic-compatible provider (OpenModel) triggers intermittent HTTP 400 errors. Retry sometimes succeeds but the error is non-deterministic. **Community reaction:** Active debugging thread; this one dogged users across multiple issue reports (#5002 too).

5. **[#4828 — macOS: underwater shell breaks open/osascript/launchctl (exit -54)](https://github.com/Hmbown/CodeWhale/issues/4828)** (CLOSED, 2 comments)  
   The v0.9.0 "underwater" shell broke macOS system commands with *operation not permitted*. Downgrading to v0.8.67 resolves it. **Why it matters:** A regression in core shell integration that affects macOS power users heavily.

6. **[#5223 — TUI: mouse wheel scrolls input history instead of content area](https://github.com/Hmbown/CodeWhale/issues/5223)** (CLOSED, 1 comment)  
   Long content overflow routes wheel events to the composer's history buffer instead of the transcript area. **Community reaction:** Reported with clear steps; fixed by PR #5234 within 24 hours — a great signal for issue-to-fix velocity.

7. **[#2870 — EPIC: staged command-boundary refactor](https://github.com/Hmbown/CodeWhale/issues/2870)** (CLOSED, 20 comments)  
   The master tracking issue for the multi-layer command-boundary refactor — closed as the final Layer 5.3 lands (#5255). **Why it matters:** This 2-month EPIC reorganizes how user commands integrate with the palette and slash-completion surfaces.

8. **[#4681 — `<turn_meta>` blocks displayed when reopening a session](https://github.com/Hmbown/CodeWhale/issues/4681)** (CLOSED, 1 comment)  
   Hidden `<turn_meta>` blocks reappear below every user message after session reopen. **Why it matters:** A session-persistence UX bug that breaks the "clean transcript" illusion on resumption.

9. **[#5002 — Tool 'task' not available + Anthropic 400 errors](https://github.com/Hmbown/CodeWhale/issues/5002)** (CLOSED, 1 comment)  
   Combined failure: `task` tool not locatable and wat Anthropic API 400 errors. **Why it matters:** A composite of two systemic issues (tool availability under fleet, provider error handling) — likely why it was swept into the release blocker set.

10. **[#5040 — v0.9.4: Move persistent Workflow status to top status bar](https://github.com/Hmbown/CodeWhale/issues/5040)** (CLOSED)  
    Durable Workflow activity in the composer area eats input space; should move to the top status bar as global session status. **Why it matters:** A UX layout fix that improves TUI space utilization and clarifies orchestration state.

## 4. Key PR Progress (10 Notable)

1. **[#5255 — Layer 5.3: Palette, completion, and discovery filtering](https://github.com/Hmbown/CodeWhale/pull/5255)** (OPEN)  
   Final layer of the command-boundary refactor — verifies user-command integration in the command palette and slash-completion surfaces. Follows Layer 5.2 (#4992).

2. **[#5234 — Fix: keep alternate scroll off while mouse capture is active](https://github.com/Hmbown/CodeWhale/pull/5234)** (CLOSED)  
   Root-caused #5223: `recover_terminal_modes()` armed both mouse capture and xterm alternate-scroll (DECSEM), causing wheel events to hit the composer history. Clean TUI fix.

3. **[#5242 — Resume interrupted children from checkpoint via followup](https://github.com/Hmbown/CodeWhale/pull/5242)** (CLOSED)  
   `agents/followup` on an `interrupted_continuable` child previously queued a dead-letter — the checkpoint was preserved but unresumable. Long tasks interrupted mid-way can now actually continue.

4. **[#5240 — Surface real wait elapsed time in tool content](https://github.com/Hmbown/CodeWhale/pull/5240)** (CLOSED)  
   `duration_ms` lived only in tool metadata (invisible to the model), making every wait result look identical. Now exposed in content — models can distinguish "just started" from "minutes long," reducing busy-polling.

5. **[#5238 — MCP Registry discovery with Registry-first tool selection](https://github.com/Hmbown/CodeWhale/pull/5238)** (CLOSED)  
   New `registry_sync` fetches eligible zero-environment stdio servers from the public MCP Registry before the model falls back to `exec_shell` or manual implementation. Registry-first policy for tool choice.

6. **[#5254 — Build fix for FreeBSD](https://github.com/Hmbown/CodeWhale/pull/5254)** (OPEN)  
   No rquickjs bindings exist for `x86_64-unknown-freebsd`; compilation fails. Adds the `bindgen` feature path or otherwise handles the missing bindings. **Why it matters:** Platform portability for BSD users.

7. **[#5252 — Allow embedders to isolate runtime state roots](https://github.com/Hmbown/CodeWhale/pull/5252)** (OPEN)  
   Adds optional `EngineConfig::subagent_state_root` for embedding hosts needing session-owned delegated-agent state. Worker ledger and transcripts move under this root; default behavior unchanged.

8. **[#5077 — perf(prompt): progressively disclose fresh context](https://github.com/Hmbown/CodeWhale/pull/5077)** (CLOSED)  
   Keeps `AGENTS.md`/`CLAUDE.md` authority eager, caps the ambient skills block at 2,400 chars, and makes skill bodies lazy (discoverable via `load_skill name="list"`). **Why it matters:** Context-window efficiency for prompt construction.

9. **[#5225 — Expose file/search/git/patch/shell tools over ACP session/prompt](https://github.com/Hmbown/CodeWhale/pull/5225)** (CLOSED)  
   ACP `session/prompt` previously streamed model text only — tool calls were never executed. Editors like Zed and bridges like `acp-deepseek-adapter` now get real code-editing agent behavior.

10. **[#5135 — v0.9.4 release train](https://github.com/Hmbown/CodeWhale/pull/5135)** (CLOSED)  
    77 commits ahead of main, includes the 18 train commits from the 2026-08-01 source candidate. The integration branch for the whole v0.9.4 cycle.

## 5. Feature Request Trends

- **Multi-provider key management** — #5250 is the loudest voice: users need per-provider API key storage, not a single overwrite slot. Expect more requests for provider-scoped credential vaults.
- **Transparent context-window fallback** — #5244 pushes for explicit warnings when a model ID is unknown and the system falls back to 128K. Users want to know when they're being silently capped.
- **Strict subagent recursion budgets** — #5253 highlights that operators want their configured depth limits to be *absolute*, not overridable by nested spawns.
- **Web/admin API completeness** — The Copilot-driven PRs (#5129–#5133) plus #5178 show a clear direction: the Runtime API is being pushed toward full lifecycle parity with the TUI — skills, MCP servers, memory, goals, and verifier receipts.
- **MCP Registry-first discovery** — #5238 introduces a Registry-first tool-selection policy, a significant UX shift toward zero-config tooling.

## 6. Developer Pain Points

- **TUI input routing and scroll behavior** — Issue #5223 and its quick fix (#5234) underscore recurring pain with TUI event routing; users keep hitting input-vs-content focus bugs.
- **macOS system-command breakage** — The "underwater" shell regression (#4828, exit -54 with `open`/`osascript`/`launchctl`) is a sharp reminder that terminal-shell replacements have real-world system-integration costs on macOS.
- **Quiet failures and silent degradation** — Whether it's the 128K context fallback (#5244), the digest endpoint returning `ok:true` while posting nothing (#5178), or wait timers invisible to the model (#5240), the community repeatedly flags the same root pattern: the system should say when it's degrading or faking success.
- **Provider error opacity** — The Anthropic-compatible 400 errors (#4978, #5002) with intermittent retry-success behavior are a recurring source of confusion — non-deterministic provider failures are the hardest to debug.
- **Build and iteration cost** — The closed issues #5245 and #5246 (HEAD sha stamp forcing full rebuilds, fat-LTO on every pre-push build) show maintainer-level pain: local git commit triggering a 682K-line rebuild is a real workflow killer for contributors and agents alike.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*