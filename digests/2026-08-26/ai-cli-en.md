# AI CLI Tools Community Digest 2026-08-26

> Generated: 2026-08-26 01:23 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report

**Date:** 2026-08-26

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a period of rapid maturation marked by both high-velocity iteration and persistent reliability challenges. Across the seven major tools analyzed (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI), we observe a common pattern: **feature velocity is high, but Windows desktop stability remains the single largest pain point** across nearly every tool. Security hardening is a growing priority, with MCP OAuth flows, credential sanitization, and permission boundary enforcement appearing in PR queues across multiple projects. The community is simultaneously demanding more transparency—around auto-memory loading, token/cost visibility, and session state—while struggling with silent failures that erode trust in agentic workflows. The ecosystem is bifurcating between enterprise-focused tools (Claude Code, Codex, Copilot CLI) investing heavily in governance and compliance, and community-driven tools (OpenCode, Pi, DeepSeek TUI) pushing on extensibility and provider neutrality.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Notable Activity |
|------|-------------|-----------|----------------|------------------|
| **Claude Code** | ~10 hot issues | 1 active PR | 2 patch releases (v2.1.245, v2.1.246) | Linux glibc fix, Bash allow-rule warning |
| **OpenAI Codex** | ~10 hot issues | 10 PRs | 3 alpha builds (rust-v0.150.0-alpha.9/.10/.11) | Enterprise OAuth, credential sanitization |
| **Gemini CLI** | ~10 hot issues | 10 PRs | No user-facing release; nightly + preview finalized | VS Code hang fix, MCP SSRF hardening |
| **Copilot CLI** | ~10 hot issues | 1 PR (release prep) | v1.0.81-10 GA (plugins dashboard) | MCP regressions, vi-mode demand (74👍) |
| **Kimi Code CLI** | 2 hot issues | 0 PRs | No release | **Critical: Edit/Write tools silently no-op on macOS (v0.38.0)** |
| **OpenCode** | ~10 hot issues | 10 PRs | v1.18.23 (bugfix) | Zen API free-tier outage, auto-updater 266GB disk blowup |
| **Pi** | 50 issues touched | 31 PRs touched | No new release (v0.84.3 latest) | Eager tool execution, reasoning controls, provider fixes |
| **Qwen Code** | ~10 hot issues | 10 PRs | No new release | `/review` system overhaul, `/effort max` session-killer |
| **DeepSeek TUI** | ~10 noteworthy issues | 10 active PRs | v0.9.12 in integration (72 commits) | Crate decomposition, supervised operation features |

---

## 3. Shared Feature Directions

| Feature Direction | Tools | Specific Community Needs |
|-------------------|-------|--------------------------|
| **Windows Desktop Stability** | Claude Code, Codex, Copilot CLI, Gemini CLI, Qwen Code, Pi, DeepSeek TUI | GPU crashes, MSIX package corruption (#80444 Claude Code), broken MCP transport (#40715 Codex), Ctrl+V paste broken (#9061 Qwen), PowerShell version inconsistency (#8582 Pi), verbatim path handling (#5610 DeepSeek) |
| **Session State Transparency** | Claude Code, Codex, Gemini CLI, Kimi Code, OpenCode, Pi, Qwen Code | Auto-memory load state visibility (#82056 CC), stuck sessions (#43277 OpenCode), compaction resurrection (#2523 Kimi), truncated responses (#7855 Pi), stale subagent state (Codex) |
| **MCP Security & Reliability** | Claude Code, Codex, Gemini CLI, Copilot CLI, Qwen Code | draft-07 schema rejection (#86142 CC), OAuth enterprise ID-JAG (#40722 Codex), SSRF prevention (#29081 Gemini), token injection regressions (#4604 Copilot), SSE hangs (#10056 Qwen) |
| **Cost/Token Transparency** | OpenCode, Gemini CLI, Qwen Code, DeepSeek TUI | Model picker cost column (#14524 OpenCode), schema cost estimates (#5611 DeepSeek), token usage panel (#9988 Qwen), token-efficient reads (#19561 Gemini) |
| **Permission/Consent Guardrails** | Claude Code, Codex, Gemini CLI, Qwen Code, Pi | Bash wildcard warnings (#89404 CC), attachment-owned permissions (#40728 Codex), consent for env changes (#28863 Gemini), least-privilege schema enforcement (#9827 Qwen) |
| **Provider Neutrality** | DeepSeek TUI, Pi, OpenCode, Copilot CLI | Removing DeepSeek-exclusive gates (#5588), provider-specific behavior leaking (Grok 400, Bedrock image rejection), BYOK/local model switching (#3709 Copilot) |
| **Multi-Agent Coordination** | Qwen Code, Gemini CLI, DeepSeek TUI | Background agent coordination gaps (#8097 Qwen), MAX_TURNS misreported as success (#22323 Gemini), stale write-claims (#5562 DeepSeek) |
| **Git Integration Reliability** | Claude Code, OpenCode, Copilot CLI, DeepSeek TUI | Worktree GC deleting unpushed work (#74719 CC), worktree session archiving failure (#4593 Copilot), `.git/index.lock` contention (#5617 DeepSeek) |

---

## 4. Differentiation Analysis

### Feature Focus

| Tool | Primary Focus | Target User |
|------|---------------|-------------|
| **Claude Code** | Enterprise governance, security compliance, memory/context management | Enterprise teams requiring policy controls |
| **OpenAI Codex** | Enterprise MCP OAuth, identity resolution, sandboxed test environments | Enterprise teams standardizing on Azure/OAuth infrastructure |
| **Gemini CLI** | VS Code companion integration, A2A protocol, extension ecosystem | Developers embedded in Google/IDX ecosystems |
| **Copilot CLI** | GitHub-native workflow integration, plugins dashboard, MCP orchestration | GitHub-centric developers and teams |
| **Kimi Code** | Minimalist agentic coding (currently reliability-crippled) | Developers seeking a lightweight alternative |
| **OpenCode** | Zen API gateway, TUI polish, plugin extensibility | Power users seeking a fast, customizable experience |
| **Pi** | Multi-provider support, eager execution, Windows-first attention | Developers who want provider flexibility |
| **Qwen Code** | Code review pipeline, WebShell, multi-agent background work | Teams using Qwen models with CI/CD integration |
| **DeepSeek TUI** | Headless/supervised operation, crate decomposition, China market | Automation-focused users, CLI purists, Chinese-language developers |

### Technical Approach

- **Runtime:** Claude Code (native + Bun), Codex (Rust), Gemini (TypeScript/Node), Copilot (Go), Pi (Rust), OpenCode (TypeScript/Go), Qwen (TypeScript), DeepSeek (Rust — proposing gitoxide migration)
- **Install/distribution:** Claude Code and Codex suffer from MSIX/AppX packaging issues; Copilot CLI uses npm; DeepSeek TUI uses cargo; OpenCode uses npm with auto-update causing disk blowups
- **Architecture:** DeepSeek TUI is the most explicit about architectural decomposition (EPIC-005); Codex is investing in Bazel-based release compatibility testing; OpenCode is building a Go gateway for Zen

---

## 5. Community Momentum & Maturity

### High Momentum (Rapid Iteration, Large Communities)

- **Claude Code** — Most active but also most issue-dense; 2 patch releases in 24h; governance/security issues drawing 150+ comments; large enterprise adoption visible
- **OpenAI Codex** — 3 alpha releases in 24h; enterprise PR queue strong; 187👍 on Windows installer request shows pent-up demand
- **OpenCode** — Contributor-friendly with multiple community PRs landing; active Zen API gateway development
- **Pi** — 50 issues and 31 PRs touched in 24h; strong community contributors (Mitsuhiko visible); Windows tracking issue at 49 comments

### Steady Development

- **Gemini CLI** — Consistent nightly releases; focused on stability (VS Code hang fix, extension races); smaller but engaged community
- **Qwen Code** — Active `/review` pipeline overhaul; WebShell feature development; but Windows issues lagging
- **DeepSeek TUI** — Deep integration branch (72 commits) with strong structural investment; actively localizing for Chinese market

### Concerning Signals

- **Kimi Code** — Critical silent data-loss bug (Edit/Write no-op on macOS) with no fix; only 2 issues and 0 PRs indicates potential maintenance gaps
- **Copilot CLI** — PR cadence unusually low; MCP regressions cluster suggests possible maintainer bottleneck; vi-mode request at 74👍 with no progress

### Maturity Assessment

| Tool | Maturity Signal |
|------|-----------------|
| Claude Code | Most mature in governance/security features; Windows reliability and auto-memory transparency are biggest gaps |
| Codex | Enterprise-ready MCP OAuth and credential hygiene; Windows packaging and update friction are weak points |
| Gemini CLI | Solid stability focus; subagent reliability (MAX_TURNS misreporting) is the top trust issue |
| OpenCode | Strong feature velocity; free-tier Zen route outages and auto-updater disk blowup are operational risks |
| Pi | Best-in-class provider abstraction effort; Windows experience needs dedicated support push |
| Qwen Code | Review pipeline overhaul shows production-readiness investment; session-killing bugs persist |
| DeepSeek TUI | Architecturally ambitious (crate decomposition); supervised operation features are ahead of the curve |

---

## 6. Trend Signals

### Signal 1: Windows Desktop is the New Frontier
**Evidence:** Every tool has a Windows-specific cluster of issues (#80444 CC, #40715/#40700 Codex, #9061 Qwen, #8582 Pi, #5582 DeepSeek, #28919 Codex, #4593 Copilot). The demand for a standalone installer (187👍 on Codex #13993) and "just works" Windows parity is the strongest cross-tool signal.

**Action for developers:** Expect Windows desktop reliability to be a differentiator in 2026-2027. Tools that crack MSIX packaging, paste/input handling, and PowerShell consistency will win Windows users.

---

### Signal 2: Security is Moving from Optional to Table Stakes
**Evidence:** PRs across Codex (#40713 credential sanitization, #40728 permission boundaries), Gemini CLI (#29081 SSRF prevention), Copilot CLI (token injection), and Claude Code (Bash wildcard warnings) show security hardening is now a daily activity, not a quarterly project.

**Action for developers:** If building on these tools, prioritize MCP OAuth validation, credential scrubbing, and permission boundary enforcement in your own integrations.

---

### Signal 3: Silent Failures are the Most Dangerous Bug Class
**Evidence:** Kimi Code's Edit/Write no-op (#2617), Claude Code's `/compact` silent failure (#89040), OpenCode's form submit failure (#35434), Qwen's image content silently dropped (#10027), and Gemini's MAX_TURNS misreported as success (#22323) — all share the pattern of tools **reporting success without performing the action**.

**Action for developers:** Implement verification post-edit (read-back checks), explicit error surfaces, and never silently degrade behavior. Trust is the currency of agentic tools.

---

### Signal 4: Transcript and Session State Transparency is Growing Demand
**Evidence:** Claude Code auto-memory load state (#82056), Codex thread deletion (#13018), Gemini subagent trajectory visibility (#22598), OpenCode stuck sessions (#43277), Qwen loop detection false-positives (#9733). Users want to understand and control what the agent remembers and forgets.

**Action for developers:** Design session management with explicit state visualization, audit trails, and recovery paths from the ground up.

---

### Signal 5: Cost Transparency is Becoming a Core Feature
**Evidence:** OpenCode model picker cost column (#14524, 11👍), DeepSeek TUI schema cost estimates (#5611), Qwen token usage panel (#9988), Gemini token-efficient reads (#19561). Users are increasingly cost-sensitive as multi-model usage grows.

**Action for developers:** Build token/cost visibility into your tooling UX, not as an afterthought.

---

### Signal 6: Provider Neutrality is the Next Competitive Battleground
**Evidence:** DeepSeek TUI auditing 2,281 DeepSeek-exclusive lines (#5588), Pi fixing provider-specific 400s (#8650), OpenCode adding Cerebras/Together/Groq/DeepInfra providers (#45098, #45108), Copilot CLI multi-model BYOK demand (#3709, 28👍).

**Action for developers:** If your tool is tied to one model provider, expect user pressure to support alternatives. The ecosystem is converging on "bring your own model" as a default expectation.

---

### Signal 7: Headless/Supervised Operation is an Underserved Niche
**Evidence:** DeepSeek TUI is pioneering control sockets, lifecycle outboxes, and `/relaunch` (#5532, #5533, #5594); OpenCode has `serve --service` mode; Copilot CLI supports scripting. Users want to run agentic tools under CI and multiplexer wrappers without a human at the screen.

**Action for developers:** Consider building headless operation, event streams, and external supervision interfaces into your tool's architecture from the start.

---

## Summary

The AI CLI tools ecosystem is converging on a shared set of priorities: **Windows reliability, MCP security, session transparency, cost visibility, and provider neutrality**. Tools that ship silent failures (Kimi Code) or ignore Windows pain (Qwen Code) are risking user trust, while tools investing in enterprise governance (Claude Code, Codex) and extensibility (OpenCode, DeepSeek TUI, Pi) are positioning for the next phase of adoption. For technical decision-makers, choosing a tool should weigh not just feature completeness but also the health of its community, the velocity of its fixes, and its commitment to transparency and security hardening.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Snapshot:** 2026-08-26 | **Source:** github.com/anthropics/skills

---

## 1. Top Skills Ranking (Most-Discussed PRs)

### #1 — skill-creator Fixes (PR #1298) — `fix(skill-creator): run_eval.py always reports 0% recall`
**Author:** MartinCajiao | **Status:** Open | **Created:** 2026-06-10

This is the single most-attended PR in the repository, addressing a critical infrastructure bug: `run_eval.py` reports `recall=0%` for every skill description, meaning description-optimization loops are tuning against pure noise. The fix installs the eval artifact as a real skill, repairs Windows stream reading, and fixes trigger detection and parallel workers. Discussion ties directly to Issue #556 (12 comments) and references 10+ independent reproductions, making this the community's most urgent pending infrastructure fix.
[GitHub — PR #1298](https://github.com/anthropics/skills/pull/1298)

### #2 — document-typography (PR #514) — `Add document-typography skill`
**Author:** PGTBoos | **Status:** Open | **Created:** 2026-03-04

A quality-control skill preventing common typographic defects in AI-generated documents: orphan word wraps (1–6 words spilling to next line), widow paragraphs (headers stranded at page bottom), and numbering misalignment. Addresses a universal pain point — "these issues affect every document Claude generates" — and holds strong topical relevance to the document-skills collection.
[GitHub — PR #514](https://github.com/anthropics/skills/pull/514)

### #3 — scnet-hpc (PR #1615) — `Add scnet-hpc skill`
**Author:** lql341 | **Status:** Open | **Created:** 2026-08-20

An HPC (High-Performance Computing) operations skill for SCNet clusters via profile-based SSH and Slurm workflows. Covers profile-specific partition/memory/module/accelerator guidance, SSH setup, job generation, cluster discovery, and compute-node management. Represents a new vertical (scientific computing) rarely seen in prior proposals.
[GitHub — PR #1615](https://github.com/anthropics/skills/pull/1615)

### #4 — ODT Skill (PR #486) — `Add ODT skill — OpenDocument text creation and template filling`
**Author:** GitHubNewbie0 | **Status:** Open | **Created:** 2026-03-01

Extends document format coverage to OpenDocument (.odt, .ods) including creation, template filling, and ODT-to-HTML parsing. Triggers on mentions of ODT, ODS, ODF, OpenDocument, or LibreOffice documents. Complements the existing docx/pdf skills for users requiring open-source/ISO-standard formats.
[GitHub — PR #486](https://github.com/anthropics/skills/pull/486)

### #5 — frontend-design Revision (PR #210) — `Improve frontend-design skill clarity and actionability`
**Author:** justinwetch | **Status:** Open | **Created:** 2026-01-05

A substantive revision to make the frontend-design skill instructionally executable — every instruction must be followable within a single conversation, and guidance specific enough to steer behavior without ambiguity. Long-lived PR (Jan–Mar cycle) with sustained community attention to skill quality standards.
[GitHub — PR #210](https://github.com/anthropics/skills/pull/210)

### #6 — Meta Skills: quality + security analyzers (PR #83) — `Add skill-quality-analyzer and skill-security-analyzer`
**Author:** eovidiu | **Status:** Open | **Created:** 2025-11-06

Introduces two meta-skills for the ecosystem itself: `skill-quality-analyzer` (five-dimension evaluation: structure/documentation 20%, examples, resource usage, etc.) and `skill-security-analyzer`. Addresses the community's need for quality gates and security auditing of the rapidly growing Skills collection.
[GitHub — PR #83](https://github.com/anthropics/skills/pull/83)

### #7 — PDF Fixes (PR #538) — `fix(pdf): correct case-sensitive file references in SKILL.md`
**Author:** Lubrsy706 | **Status:** Open | **Created:** 2026-03-06

Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` (REFERENCE.md → reference.md, FORMS.md → forms.md) that break on case-sensitive filesystems (Linux/macOS). Small but critical reliability fix for the pdf skill's embedded references.
[GitHub — PR #538](https://github.com/anthropics/skills/pull/538)

### #8 — Hivemind Orchestration (PR #1628) — `Zero-Cost Multi-Agent Orchestration`
**Author:** Hanishchow | **Status:** Open | **Created:** 2026-08-21

A skill enabling Claude Code to delegate mechanical work to headless opencode workers running on free models while Claude Code remains the sole planner/reviewer/merger. Framed around context-window economics: "The expensive model's context is the scarce resource, not its intelligence." One of the most recent and conceptually novel submissions.
[GitHub — PR #1628](https://github.com/anthropics/skills/pull/1628)

---

## 2. Community Demand Trends (from Issues)

### Trend A — Security & Trust Boundaries (Issue #492, 43 comments)
The single most-commented issue in the repository: community skills distributed under the `anthropic/` namespace impersonate official skills, creating trust-boundary abuse where users may grant elevated permissions to community skills they believe are official. Demand: **security audit tooling and namespace governance** for the Skills ecosystem.
[GitHub — Issue #492](https://github.com/anthropics/skills/issues/492)

### Trend B — Organizational Skill Sharing (Issue #228, 16 comments)
The highest 👍-rated issue (8 reactions): users want org-wide skill sharing directly in Claude.ai rather than manual .skill file downloads and Slack/Teams handoffs. Demand: **enterprise distribution infrastructure** for Skills.
[GitHub — Issue #228](https://github.com/anthropics/skills/issues/228)

### Trend C — Evaluation Infrastructure Reliability (Issue #556, 12 comments)
The `run_eval.py` 0% trigger-rate bug (directly tied to PR #1298) dominates reliability demand. Users cannot iterate on skill descriptions because the evaluation harness is broken. Demand: **reliable skill evaluation tooling** — a prerequisite for all other quality improvements.
[GitHub — Issue #556](https://github.com/anthropics/skills/issues/556)

### Trend D — Context Window Efficiency (Issues #1487, #1175, #1329)
Three issues converge on context-window management: the `claude-api` skill eagerly injecting ~156k tokens (Issue #1487), SharePoint document handling concerns (Issue #1175), and the `compact-memory` proposal for symbolic compact agent state (Issue #1329). Demand: **context-efficient Skills** that respect the scarce resource.
[GitHub — Issue #1487](https://github.com/anthropics/skills/issues/1487) · [Issue #1329](https://github.com/anthropics/skills/issues/1329)

### Trend E — Quality Standards & Governance (Issues #202, #189, #412)
Community members demand skill-quality standards: `skill-creator` reads like dev documentation rather than operational instructions (Issue #202); document-skills and example-skills plugins install identical content causing duplicates (Issue #189, 9 👍); and a proposal for agent-governance safety patterns (Issue #412). Demand: **quality gates, deduplication, and safety governance**.
[GitHub — Issue #202](https://github.com/anthropics/skills/issues/202) · [Issue #189](https://github.com/anthropics/skills/issues/189) · [Issue #412](https://github.com/anthropics/skills/issues/412)

---

## 3. High-Potential Pending Skills (Open PRs, Active Comments)

| Skill | PR | Last Updated | Potential |
|---|---|---|---|
| **skill-creator full fix** (run_eval.py) | [#1298](https://github.com/anthropics/skills/pull/1298) | 2026-06-23 | Core infrastructure fix; highest-priority merge candidate |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 2026-03-13 | Universal document-quality gap; complements docx/pdf skills |
| **scnet-hpc** | [#1615](https://github.com/anthropics/skills/pull/1615) | 2026-08-24 | Recent, active; fills scientific-computing void |
| **Hivemind orchestration** | [#1628](https://github.com/anthropics/skills/pull/1628) | 2026-08-24 | Conceptually novel; context-economy angle |
| **ODT skill** | [#486](https://github.com/anthropics/skills/pull/486) | 2026-04-14 | Fills open-format gap for enterprise document users |
| **ServiceNow platform skill** | [#568](https://github.com/anthropics/skills/pull/568) | 2026-08-12 | Broad enterprise platform coverage; long-lived active discussion |
| **Pyxel retro game dev** | [#525](https://github.com/anthropics/skills/pull/525) | 2026-07-15 | MCP-integrated creative skill; sustained attention |
| **MCP-builder reliability fixes** | [#1602](https://github.com/anthropics/skills/pull/1602) | 2026-08-24 | Fixes serialization/metrics bugs; ties to Issue #1390 |

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **reliable skill-development infrastructure** — particularly a functional evaluation harness (0% recall bug affecting all skill iterations), formal quality/security gates for submitted skills, and context-window-conscious design — rather than individual skill features, indicating the ecosystem has reached a maturity inflection point where tooling quality matters more than skill quantity.

---

# Claude Code Community Digest — 2026-08-26

## Today's Highlights
Two patch releases shipped in the last 24 hours: one fixing a Linux startup crash on glibc 2.44 distributions (Arch, CachyOS, Fedora Rawhide) and another adding a security-relevant warning about overly permissive Bash allow rules. The community continues to surface significant reliability issues around Windows desktop packaging (GPU crashes, stale AppContainer jobs, package lock contention) and Linux ARM64 runtime crashes, with governance/security concerns (cyber safeguard blocks, unexpected file modifications) drawing the strongest reactions.

## Releases
**v2.1.246** — Added a startup warning for Bash allow rules with wildcards before the subcommand (e.g., `Bash(git * main)`), which can match options inserted before the subcommand unexpectedly. Also added an Auto mode tab to `/permissions` for viewing/editing auto mode classifier rules.
[View release](https://github.com/anthropics/claude-code/releases/tag/v2.1.246)

**v2.1.245** — Fixed a crash on startup on Linux distributions shipping glibc 2.44 (e.g., Arch Linux, CachyOS, Fedora Rawhide).
[View release](https://github.com/anthropics/claude-code/releases/tag/v2.1.245)

## Hot Issues
1. **[#84352: CVP-approved org still receives cyber safeguard blocks](https://github.com/anthropics/claude-code/issues/84352)** — 156 comments. A Claude.ai org with prior Cyber Verification Program approval is again blocked by cyber safeguards; the Verification Portal shows "Under review" despite prior approval. Governance friction with high community engagement (24 👍).

2. **[#80444: Windows desktop GPU-process crash + MSIX package unlaunchable](https://github.com/anthropics/claude-code/issues/80444)** — 56 comments. Fatal GPU-process crash (0x060C201E) via in-app browser tab; leaves the MSIX package unlaunchable until repair. Reproduced on two GPU driver versions. Windows desktop stability remains a top concern.

3. **[#82056: Session cannot determine auto-memory index load state](https://github.com/anthropics/claude-code/issues/82056)** — 34 comments. No in-session visibility into whether the auto-memory index loaded whole, truncated, or not at all. A transparency gap that undermines trust in auto-memory behavior.

4. **[#86142: MCP servers with draft-07 outputSchema rejected client-side](https://github.com/anthropics/claude-code/issues/86142)** — 29 comments, closed. "Unsupported dialect" error blocks MCP servers declaring draft-07 JSON Schema before dispatch. Interoperability issue with 12 👍.

5. **[#85891: Claude Desktop always-on-top with no setting to disable](https://github.com/anthropics/claude-code/issues/85891)** — 25 comments, 37 👍 (highest 👍 count of the day). Windows 11 topmost window behavior with no opt-out. Strong demand for window behavior controls.

6. **[#82049: Magic link emails delayed 2–5 minutes](https://github.com/anthropics/claude-code/issues/82049)** — 14 comments, 25 👍. Claude.ai sign-in emails progressively slower since mid-July; delays access to Claude Code when sessions expire. Auth reliability issue with broad impact.

7. **[#89370: claude segfaults, so does install.sh](https://github.com/anthropics/claude-code/issues/89370)** — 9 comments, 10 👍. Linux segfault on both the binary and install script. Likely related to the glibc 2.44 issue fixed in v2.1.245, but flagged as duplicate.

8. **[#89459: API Error 400 — reasoning `encrypted_content` not issued to caller](https://github.com/anthropics/claude-code/issues/89459)** — 3 comments. New API-level error with encrypted reasoning content; could indicate auth/session issues or API contract changes. No further context yet.

9. **[#89040: /compact silently fails on very large conversations](https://github.com/anthropics/claude-code/issues/89040)** — 2 comments. Summary generated, but `compact_boundary` never written; context unchanged with no error shown. Silent failure is particularly dangerous for long-running work.

10. **[#89677: Repeated OS notifications with raw SessionStart hook JSON](https://github.com/anthropics/claude-code/issues/89677)** — 0 comments, filed today. macOS notifications with raw JSON from `SessionStart` hooks (sender "Terminal") for sessions with no transcript file. Privacy leak and UX annoyance.

## Key PR Progress
1. **[#89404: validate-agent.sh — don't abort at first warning](https://github.com/anthropics/claude-code/pull/89404)** — Fixes public issue #83803. Three `set -euo pipefail` interactions caused false-flagging of valid agents and abort-on-first-warning. Important for plugin-dev reliability.

## Feature Request Trends
- **Prompt-topic triggers for .claude/rules/** ([#87804](https://github.com/anthropics/claude-code/issues/87804)): Rules conditional on conversation subjects, not just file paths. Closely related to #85300 (tool/MCP-scoped rules) and #78795 (auto-memory topic injection). Semantic, context-aware rule loading is a clear direction.
- **Rule enforcement against incremental drift** ([#89244](https://github.com/anthropics/claude-code/issues/89244), [#89464](https://github.com/anthropics/claude-code/issues/89464)): Prohibitions don't fire against gradual, step-by-step violations ("never build yourself, always delegate"). Standing constraints need better binding, not just single-step checks.
- **Auto-memory transparency** ([#82056](https://github.com/anthropics/claude-code/issues/82056)): Sessions need visibility into whether the auto-memory index loaded whole, truncated, or not at all; what was loaded and what was dropped.

## Developer Pain Points
- **Windows packaging/update chaos**: GPU crashes that nuke MSIX packages until repair ([#80444](https://github.com/anthropics/claude-code/issues/80444), [#89675](https://github.com/anthropics/claude-code/issues/89675)), stale AppContainer Job locks blocking relaunch ([#89676](https://github.com/anthropics/claude-code/issues/89676)), package locks from `CoworkVMService` ([#73694](https://github.com/anthropics/claude-code/issues/73694)), and package servicing killing background agents ([#82277](https://github.com/anthropics/claude-code/issues/82277)). Windows reliability is the single biggest pain cluster.
- **Linux ARM64 runtime crashes**: Recurring Bun-runtime SIGABRT/SIGSEGV across 2.1.231–2.1.243 on glibc 2.34 with corrupted stack frames ([#89539](https://github.com/anthropics/claude-code/issues/89539)), plus segfaults on install ([#89370](https://github.com/anthropics/claude-code/issues/89370)).
- **macOS session handling**: "Access data from other apps" re-prompt per session ([#83841](https://github.com/anthropics/claude-code/issues/83841)), TUI exit flooding shell with SGR mouse sequences ([#79015](https://github.com/anthropics/claude-code/issues/79015)), and worktree GC deleting dirty/unpushed worktrees ([#74719](https://github.com/anthropics/claude-code/issues/74719)) — the latter is a data-loss risk.
- **Consent and trust**: One user angrily reported unexpected file modifications without explicit instruction ([#89674](https://github.com/anthropics/claude-code/issues/89674)) — a sign that permission handling needs clearer boundaries and defaults.
- **Silent failures**: `/compact` failing on large conversations without error ([#89040](https://github.com/anthropics/claude-code/issues/89040)) — silent failures erode trust in the tool's core loop.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-26

## Today's Highlights
Three rapid-fire `rust-v0.150.0-alpha` releases shipped within 24 hours (`.9`, `.10`, `.11`), underscoring a high-velocity iteration cycle. Community focus remains heavily on Windows desktop stability, with two critical regressions reported in the latest stable app build (26.820) — one blocking app startup entirely, and another breaking MCP configuration parsing. On the enterprise side, the PR queue shows a strong push on OAuth identity resolution and security hardening (credential sanitization, sandboxed test environments).

## Releases
Three alpha builds published in the last 24 hours:
- **[`rust-v0.150.0-alpha.9`](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.9)**
- **[`rust-v0.150.0-alpha.10`](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.10)**
- **[`rust-v0.150.0-alpha.11`](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.11)**

No release notes were published for these builds; no further details available.

## Hot Issues

1. **[#13993 — Support standalone Windows installer (`codex-setup.exe`)](https://github.com/openai/codex/issues/13993)** — 187 👍, 81 comments. The most-upvoted open request. Users are blocked by Microsoft Store restrictions (corporate policies, offline environments), and the demand for a traditional `.exe` installer shows no signs of cooling after 5 months.

2. **[#34035 — Make temporary removal of 5-hour usage limit permanent](https://github.com/openai/codex/issues/34035)** — 140 👍. Strong community signal that the temporary unlimited window (announced July 12) should become permanent for Plus/Pro/Business. Related issue [#40741](https://github.com/openai/codex/issues/40741) reports the 5-hour limit is now half the weekly cap, causing confusion.

3. **[#28919 — Windows app missing "control other devices" tab](https://github.com/openai/codex/issues/28919)** — 44 comments. Windows users cannot manage remote device connections, a feature parity gap with macOS that has persisted since June.

4. **[#40715 — Windows stable build fails: "invalid transport in mcp_servers.codex_app"](https://github.com/openai/codex/issues/40715)** — New regression, 20 comments. Stable 26.820.60940 breaks MCP config parsing while Beta 26.727.40816 works. Enterprise users on Pro plans are impacted immediately.

5. **[#40700 — Windows Desktop cannot start: bundled `codex.exe` relocation from WindowsApps fails](https://github.com/openai/codex/issues/40700)** — Startup-blocking bug in latest build. A classic MSIX/AppX path issue; community replied within hours confirming the workaround (install from GitHub releases instead).

6. **[#13018 — Allow deleting threads in the Codex app](https://github.com/openai/codex/issues/13018)** — 105 👍. Closed, but noteworthy for its longevity: users still want hard delete, not just archive, without manual `~/.codex/archived_sessions/` surgery.

7. **[#39144 — GPT-5.6 Sol receives 272K `max_context_window` after long-context rollout](https://github.com/openai/codex/issues/39144)** — Model-config inconsistency: Terra/Luna get 872K, Sol stuck at 272K. Affects both desktop and CLI. Likely a rollout/config bug with high impact for heavy users.

8. **[#23411 — `exec` doesn't fire `PreToolUse` hooks](https://github.com/openai/codex/issues/23411)** — A direct violation of hook expectations for Code Mode's JavaScript-execution surface. A patch is attached in the issue, but no maintainer response yet. Security and governance implications for teams relying on hooks.

9. **[#35555 — CLI hard-fails at startup when `logs_2.sqlite` is write-locked](https://github.com/openai/codex/issues/35555)** — The telemetry DB gates boot; a flat 5s `busy_timeout` with no retry means any stale lock (common with multiple instances) bricks startup. High annoyance for power users.

10. **[#39819 — Add tool call visibility as a config option](https://github.com/openai/codex/issues/39819)** — Closed, but 10 👍 in days. Users are split on the new collapsed TUI tool-call view. The community is requesting a `config.toml` toggle to restore the old expanded view.

## Key PR Progress

1. **[#40713 — Sanitize credentials from Git remote metadata](https://github.com/openai/codex/pull/40713)** — Security fix: strips usernames/passwords/tokens embedded in remote URLs before persisting thread metadata. Important for teams using token-authenticated remotes.

2. **[#40722 — Enterprise ID-JAG exchange for MCP OAuth](https://github.com/openai/codex/pull/40722)** — Non-interactive two-step OAuth exchange using enterprise identity providers, with strict URL/claim validation. Enables enterprise access to MCP servers behind IdP walls.

3. **[#40739 — Enterprise IdP identity resolution for MCP OAuth](https://github.com/openai/codex/pull/40739)** — Companion to #40722; binds OIDC identity claims for enterprise MCP OAuth sessions. Together, these are the foundation for enterprise-grade MCP support.

4. **[#40728 — Honor attachment-owned permissions for MCP servers](https://github.com/openai/codex/pull/40728)** — Fixes a security boundary: MCP servers attached to executor environments now keep their owner's permission profile, not the thread-wide sandbox authority.

5. **[#40719 — Preserve bounds in reserved tool schemas](https://github.com/openai/codex/pull/40719)** — Bugfix ensuring `minimum`, `maximum`, `maxLength` survive schema parsing for reserved tools, so the model sees declared limits.

6. **[#40717 — Support sandboxed exec-server test environments](https://github.com/openai/codex/pull/40717)** — Test infrastructure improvement allowing the exec-server test fixture to run under Linux sandbox, with explicit `TestEnv` injection.

7. **[#40736 / #40718 — Bazel-based compatibility testing for pinned releases](https://github.com/openai/codex/pull/40736)** — Adds a Bazel module extension for checksum-pinned Codex releases and runs the shared Noise relay compatibility suite against current, `0.149.1`, and minimum supported versions. Sign of hardening release engineering.

8. **[#40748 — Fix MCP denial assertion for structured output](https://github.com/openai/codex/pull/40748)** — Test fix aligning the MCP permission-denial test with structured output formats — small but necessary for the MCP security test suite.

9. **[#40716 — Thread ownership metadata for managed worktrees](https://github.com/openai/codex/pull/40716)** — Adds versioned `codex-thread.json` records in Git metadata with atomic, no-clobber writes. Enables reliable association of worktrees to threads in multi-tenant scenarios.

10. **[#40724 — Plugin-attributed skill telemetry](https://github.com/openai/codex/pull/40724)** — Adds `plugin_id`, `model_slug`, `reasoning_effort` dimensions to skill-injected metrics — observability for plugin ecosystems.

## Feature Request Trends
- **Windows installer parity**: The standalone `codex-setup.exe` request (187 👍) remains the top feature ask. Users want to bypass Microsoft Store entirely.
- **Permanent relaxed usage limits**: The 5-hour limit is the single most-discussed policy topic, with two open issues this week alone.
- **Session management**: Hard-delete threads, reliable closing of subagents, and protection against "ghost" rehydrated subagents dominate UX requests.
- **Config-driven UI behavior**: Users want `config.toml` control over TUI tool-call visibility, echoing a broader desire for a more customizable interface.

## Developer Pain Points
- **Windows app is the weak spot**: Multiple startup crashes (chrome.dll C0000005, missing CLI binary, WindowsApps relocation) and a broken MCP transport parser in stable are eroding trust in the Windows desktop experience.
- **Lock/telemetry gatekeeping**: The SQLite lock-startup failure resonates with anyone running multiple CLI instances or long-lived sessions.
- **Hook ecosystem inconsistencies**: `PreToolUse` not firing for `exec`, and `codex exec` skipping trusted hooks, are a governance nightmare for teams enforcing policy via hooks.
- **Session state hygiene**: Stale subagents, "thinking" threads that can't turn, repopulated Recents, dormant historical subagents reappearing as active — session state management remains fragile across platforms.
- **Update fatigue**: Frequent forced updates (see #30122) combined with regression-prone releases is exacerbating the pain when stable builds ship with startup-blocking bugs.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-26

## 1. Today's Highlights

A steady stream of stability fixes continues across the codebase, with particular focus on the VS Code IDE companion (a hang in `IdeServer.stop()`), extension installation races, and security hardening for MCP OAuth flows and A2A server endpoints. The long-standing issue where subagent interruptions (MAX_TURNS) are misreported as `GOAL` success remains the top community concern, and several PRs targeting Windows environment test failures and line-ending detection indicate ongoing cross-platform polish.

## 2. Releases

No user-facing feature releases were published in the last 24 hours. The nightly `v0.59.0-nightly.20260826.g64b5b79a6` was cut, and the `v0.58.0-preview.0` changelog was finalized, which includes a fix for symlink evaluation in ignore path handling. The `v0.57.0` stable release includes fixes for Cloud Workstations OAuth proxy redirect and IDE connection directory mismatch resolution.

## 3. Hot Issues

1. **[#22323 — Subagent MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** *(13 comments, P1)* — `codebase_investigator` reports `status: "success"` with `Termination Reason: "GOAL"` even when it exhausted its turn limit before doing any analysis. This is misleading and undermines trust in agentic workflows. Community is actively discussing fixes.

2. **[#21409 — Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)** *(8 comments, P1, 8 👍)* — Simple tasks like folder creation hang forever when delegated to the generalist agent. Workaround: instruct the model not to use subagents. High community impact.

3. **[#25166 — Shell command stuck at "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** *(4 comments, P1)* — After executing simple CLI commands, Gemini CLI sometimes hangs showing "Awaiting user input" even though the command finished. Clearly a UX-breaking bug.

4. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** *(5 comments, P2)* — The Auto Memory subsystem keeps surfacing low-signal sessions for extraction, causing unnecessary repeated processing. Community wants smarter filtering.

5. **[#26525 — Deterministic redaction and reduced Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** *(4 comments, P2)* — Background extraction sends transcript content to the model before redaction happens — a potential data-leak vector. Community is concerned about secrets exposure.

6. **[#21968 — Gemini doesn't use skills/subagents proactively](https://github.com/google-gemini/gemini-cli/issues/21968)** *(6 comments, P2)* — Users report the model ignores custom skills and subagents unless explicitly instructed, making them less useful than intended.

7. **[#24246 — 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** *(3 comments, P2)* — The CLI fails when the tool count exceeds API limits. Users expect smarter tool selection rather than a hard failure.

8. **[#22267 — Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)** *(3 comments, P2)* — Configuration overrides like `maxTurns` are not respected by the browser agent, contradicting documented behavior.

9. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** *(4 comments, P1)* — The browser agent crashes on Linux Wayland sessions. Community wants platform-aware fallbacks.

10. **[#22672 — Agent should discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** *(3 comments, P2)* — Models occasionally use `git reset` or `--force` when safer alternatives exist. Community is requesting safety guardrails.

## 4. Key PR Progress

1. **[#29088 — fix(vscode-ide-companion): resolve stop() hang](https://github.com/google-gemini/gemini-cli/pull/29088)** — Fixes `IdeServer.stop()` never resolving when an MCP stream is open, blocking extension deactivation. Critical for VS Code users.

2. **[#29087 — fix(cli): prevent concurrent extension install races](https://github.com/google-gemini/gemini-cli/pull/29087)** — Uses `proper-lockfile` to prevent two processes from installing the same extension simultaneously, avoiding corrupted installs.

3. **[#29081 — fix(core): prevent SSRF in MCP OAuth discovery](https://github.com/google-gemini/gemini-cli/pull/29081)** — Enforces RFC 9728/8414 constraints: HTTPS for remote endpoints, origin validation, and better loopback handling. Important security hardening.

4. **[#29089 — fix(core): forward abortSignal to retryWithBackoff](https://github.com/google-gemini/gemini-cli/pull/29089)** — Ensures cancellations propagate through retry logic in `BaseLlmClient`, fixing potential hangs in session summary and chat compression paths.

5. **[#28863 — fix(extensions): prompt for consent on environment changes](https://github.com/google-gemini/gemini-cli/pull/28863)** — Sanitizes runtime-altering environment variables injected into MCP server processes and adds consent checks for extension update behavior.

6. **[#29067 — fix(a2a-server): remove misleading security schemes](https://github.com/google-gemini/gemini-cli/pull/29067)** — Removes hardcoded credentials and misleading security metadata, making the A2A server accurately reflect its unauthenticated-by-design local development posture.

7. **[#28930 — fix(core): drop unsafe `diff.external` override](https://github.com/google-gemini/gemini-cli/pull/28930)** — Reverts an empty-string `diff.external` override that broke external diff tools; replaces with a safer approach.

8. **[#28983 — fix(core): detect mixed line endings correctly](https://github.com/google-gemini/gemini-cli/pull/28983)** — Fixes overly aggressive CRLF detection that flagged files with a single `\r\n` as CRLF; now detects genuinely mixed endings.

9. **[#28832 — test(core): skip environment-dependent tests with reason](https://github.com/google-gemini/gemini-cli/pull/28832)** — Addresses 13 Windows test failures caused by missing privileges/PowerShell 7; tests now skip with reasons instead of failing.

10. **[#28926 — docs: add Windows longpaths setup instructions](https://github.com/google-gemini/gemini-cli/pull/28926)** — Documents `core.longpaths=true` for Windows checkouts, fixing ~3,000 dirty staged files from deeply nested paths.

## 5. Feature Request Trends

- **AST-aware code navigation** (`#22745`, `#22746`): Users want token-efficient method-level reads, precise codebase mapping, and reduced context bloat.
- **Native OS sandboxing** (`#19873`): A zero-dependency sandbox to safely let the model use POSIX tools natively without security trade-offs.
- **Agent self-awareness** (`#21432`): The CLI should understand its own flags, hotkeys, and capabilities so it can guide users without hallucination.
- **Tactful extraction** (`#19561`): Token-frugal surgical reads via `grep_search` first, aiming to cut context overhead from ~36.6k tokens/turn.
- **Improved subagent trajectory visibility** (`#22598`): Users want `/chat share` to include subagent internals for debugging and evaluation.

## 6. Developer Pain Points

- **Agent reliability at boundaries**: `MAX_TURNS` reported as success (#22323), indefinite hangs (#21409), and shell hangs at "Waiting input" (#25166) are the most upvoted frustrations.
- **Configuration not honored**: Browser agent ignoring `settings.json` (#22267) and `TRUST_PARENT` precedence issues (#28701) point to inconsistent config handling.
- **Cross-platform breakage**: Windows test failures (#28832) and Wayland browser crashes (#21983) highlight gaps in non-macOS/Linux-default support.
- **Security and data hygiene concerns**: Auto Memory logging potential secrets (#26525) and MCP OAuth SSRF risks (#29081) indicate growing community focus on security posture.
- **Model behavior unpredictability**: Destructive git commands (#22672) and random tmp script creation (#23571) suggest the model needs stronger guardrails and better defaults.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-26

## Today's Highlights
The Copilot CLI team shipped **v1.0.81-10**, making the plugins dashboard (with `/plugin`, `/mcp`, and `/skills` commands) available to all users. Community attention this week is focused on a cluster of MCP-related regressions — workspace `.mcp.json` servers not connecting in sessions, token injection failures on the official MCP endpoint, and a Google Workspace OAuth issuer mismatch. Several long-standing feature requests around vi-mode editing and multi-model session switching continue to accumulate significant upvotes.

## Releases
**v1.0.81-10** — [Release](https://github.com/github/copilot-cli/releases/tag/v1.0.81-10)

- **New:** The plugins dashboard is now available to everyone. Run `/plugin`, `/mcp`, or `/skills` to access it. Set `PLUGINS_DASHBOARD=false` to opt out (also disables the `copilot plugins` command).
- **Improved:** The `x` key now acts as delete across all interactive surfaces — `/sandbox config`, `/settings`, `/mcp`, the sessions dialog, and the diff viewer.

---

## Hot Issues

1. **[#13 — CLI input should have a vi/vim input mode](https://github.com/github/copilot-cli/issues/13)** — *Open, 74 👍, 8 comments*
   The most-upvoted open issue on the repo. Users want modal keyboard editing for interactive sessions. The strong upvote ratio signals a persistent demand among terminal-centric developers.

2. **[#4535 — `store_memory` fails in v1.0.81 prereleases: `Instance id is required`](https://github.com/github/copilot-cli/issues/4535)** — *Open, 6 comments*
   Regression in the context-memory subsystem. The native memory writer is invoked without a required instance ID, breaking memory storage for early adopters on the prerelease channel.

3. **[#3709 — Allow `/model` to switch between multiple models, including BYOK/local providers, in one session](https://github.com/github/copilot-cli/issues/3709)** — *Open, 28 👍, 6 comments*
   BYOK sessions are currently pinned to a single model via `COPILOT_MODEL`; the `/model` picker only lists GitHub-hosted models. Users with local providers (e.g., Ollama, LM Studio) can’t switch mid-session.

4. **[#4542 — Workspace `.mcp.json` detected but not connected in actual agent session](https://github.com/github/copilot-cli/issues/4542)** — *Open, 2 comments*
   `copilot mcp list` reports workspace MCP servers as enabled, but they aren’t actually available inside interactive sessions. Silent failure that undermines trust in repo-scoped MCP config.

5. **[#4605 — `latest-prerelease` lookup strands users on 1.0.81-9](https://github.com/github/copilot-cli/issues/4605)** — *Open, triaged*
   Releases share identical `created_at` timestamps, so GitHub ranks `-10` below `-2` and the updater picks the first listed prerelease. Users are stuck on an older build despite a newer one existing.

6. **[#4560 — Model "auto" always runs with reasoning effort disabled](https://github.com/github/copilot-cli/issues/4560)** — *Open, 1 comment*
   `/model auto` sets `reasoningEffort` to `null`; users cannot override it. The auto-router produces lower-quality output for tasks that benefit from extended reasoning.

7. **[#4272 — New models greyed out and can’t be selected](https://github.com/github/copilot-cli/issues/4272)** — *Open, 3 👍, 1 comment*
   Enterprise users see “disabled by your organization’s policy” for new models, but the referenced settings page has no toggle. Admin-side model gating creates opaque blockers.

8. **[#4035 — Voice installer fails: private Azure Artifacts feed causing 401](https://github.com/github/copilot-cli/issues/4035)** — *Open, 4 comments*
   Voice mode installer tries to pull `Microsoft.AI.Foundry.Local.Core` from a private Azure Artifacts feed and gets 401. The package is public on nuget.org — installer should use the public source.

9. **[#4604 — User-configured api.githubcopilot.com/mcp/ server loses injected token on 1.0.81-10](https://github.com/github/copilot-cli/issues/4604)** — *Open, triaged*
   Regression on the latest release: the official MCP endpoint no longer receives the Copilot token. The OAuth fallback is impossible since GitHub doesn't advertise dynamic client registration.

10. **[#3323 — `ask_user` enum/oneOf fields should always offer an 'Other / custom answer' escape hatch](https://github.com/github/copilot-cli/issues/3323)** — *Open, 2 👍, 1 comment*
    The `ask_user` tool forces a choice between fixed enums (no custom input) and free-form strings (no suggestions). Users want hybrid fields — suggestions with a custom override.

---

## Key PR Progress
*Only one PR was updated in the last 24 hours; the following represents notable recent activity for context.*

1. **[#4607 — Prepare public prerelease v1.0.81-11](https://github.com/github/copilot-cli/pull/4607)** — *Closed*
   Advances the public repository commit timestamp ahead of publishing v1.0.81-11. Likely a hotfix release following the issues surfaced in v1.0.81-10.

2. *(No additional PR activity in the last 24h)*

**Note:** The repository’s PR cadence is lower this week than usual — most activity is concentrated in triaging the MCP regressions listed above.

---

## Feature Request Trends

1. **Vi-mode / modal editing** (#13, 74 👍) — The single most-requested quality-of-life feature. Users want `hjkl` navigation, `dd`/`yy` operations, and command-mode input in interactive sessions.

2. **Multi-model sessions with local/BYOK providers** (#3709, 28 👍) — Persistent demand for hybrid workflows: use cloud models for most work, switch to local models for privacy-sensitive tasks, all within one session.

3. **Session sharing and export** (#3537, #1153) — Users want to share context, history, and discoveries across machines and teammates. The JSONL session files are currently siloed per-machine.

4. **MCP control refinements** (#3380) — Request for a `--disable-repo-mcps` flag to skip repository-shipped MCP configs entirely, rather than disabling servers one-by-one.

5. **Persistent user-level exclusions** (#4603) — Users want a durable way to exclude duplicate instruction files (e.g., both `CLAUDE.md` and `AGENTS.md` loaded) per-user, not per-project.

---

## Developer Pain Points

- **MCP trust and reliability** — The cluster of MCP issues (#4542, #4604, #4606) suggests the MCP integration layer is still fragile: servers are detected but not connected, tokens are injected inconsistently, and OAuth flows break on provider metadata quirks. For teams standardizing on MCP, these are blocking issues.

- **Prerelease update mechanics** (#4605) — The updater’s failure to pick the latest build due to timestamp collisions is a frustrating papercut that strands users on stale builds.

- **Enterprise model gating opacity** (#4272) — Admins and users alike are confused by model enablement policies that don’t map to any visible setting. The “ask your admin” dead-end wastes time.

- **Silent quality regressions** (#4560, #4268) — Features that quietly degrade (reasoning effort disabled, missing exit summaries) erode trust and force users to downgrade to known-good versions.

- **Windows-specific workflow breaks** (#4593) — Worktree session archiving fails with `os error 32` because process trees rooted in the worktree aren’t stopped before deletion. A platform-specific annoyance that interrupts a core workflow.

---

*Report generated from [github/copilot-cli](https://github.com/github/copilot-cli) data on 2026-08-26.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**2026-08-26**

---

## Today's Highlights

The community is facing a critical regression in v0.38.0 where `Edit` and `Write` tools silently no-op on macOS, returning false success messages without persisting changes to disk—this is 100% reproducible and has become the top concern. A long-standing issue from July (v0.6.3) regarding context compaction re-opening completed and deleted tasks continues to receive attention, suggesting persistent reliability gaps in session management across multiple releases.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

### 1. [**#2617** — Edit/Write tools report success but never write to disk](https://github.com/MoonshotAI/kimi-cli/issues/2617) ⚠️ CRITICAL
- **Reported:** 2026-08-25 | **Status:** Open | **Comments:** 2
- **Why it matters:** This is a **silent data-loss bug** in v0.38.0 on macOS. Tools return "File updated/created" but no changes persist. For an agentic coding tool, this undermines trust and can lead to developers pushing unmodified code.
- **Community reaction:** Reports confirm 100% reproducibility, though no workaround identified yet.

### 2. [**#2523** — Context compaction reopens an already completed and deleted task](https://github.com/MoonshotAI/kimi-cli/issues/2523)
- **Reported:** 2026-07-20 | **Status:** Open | **Comments:** 1 | **Updated:** 2026-08-25
- **Why it matters:** Indicates a deeper session-state management issue where compaction can resurrect deleted tasks, consuming tokens and confusing workflow state.
- **Community reaction:** Still open after 5+ weeks—concern that the fix is not prioritized.

---

## Key PR Progress

*No pull requests were updated in the last 24 hours.*

---

## Feature Request Trends

Derived from the broader issue pool and recent discussion patterns:

| Trend | Description | Evidence |
|-------|-------------|----------|
| **State Integrity & Transactional Guarantees** | Requests for atomic file writes and verification confirms post-edit | Issue #2617 |
| **Session Reliability** | Fixes for task restoration and compact behavior; concerns about re-opening deleted work | Issue #2523 |
| **Cross-Platform Consistency** | macOS-specific bugs are highlighted as gaps in QA coverage before release | Issue #2617 (macOS only) |

---

## Developer Pain Points

- **Silent Failures (🔥 High Frequency):** The #1 source of frustration—tools that report success without performing the action. This erodes confidence in automated workflows and makes debugging harder when errors are invisible.
- **Session State Surprises:** Users report being "brought back" into tasks they explicitly completed or deleted, wasting credits and disrupting focus.
- **Regression Risk at Release:** A critical write-path bug shipping in v0.38.0 suggests insufficient regression testing for filesystem operations prior to release.

---

*Digest generated from [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) public data. Statistics reflect activity between 2026-08-25 and 2026-08-26.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-26

## Today's Highlights

The community is facing a significant outage affecting the free Ox Alpha model on OpenCode Zen, with tool-enabled requests failing across multiple routes and duplicate reports piling up (#44300, #44850, #45073, #45020). On the development front, the team is actively merging a wave of contributor PRs from @kitlangton and @rekram1-node targeting TUI polish, test hermeticity, and new native provider support, alongside a critical fix for model ID resolution when provider prefixes repeat in the ID (#45114). Performance and reliability concerns persist around sessions getting permanently stuck (#43277), an auto-updater disk blowup measured in hundreds of GB (#45087), and multiple model-serving issues on the Go gateway (#44910, #45053).

## Releases

**v1.18.23** — A focused bugfix release:

- **Cloudflare AI Gateway improvements**: Fixed routing for third-party providers via the gateway's REST API, and fixed Anthropic models by converting dotted model IDs (e.g. `claude-haiku-4.5`) to the dashed slug format Anthropic expects. (@superhighfives)

## Hot Issues

1. **[#44300](https://github.com/anomalyco/opencode/issues/44300) — Zen API: Ox Alpha Free fails with "Endpoint is unavailable" for any request containing tools** (13 comments, 5 👍)  
   *The top issue of the day.* Since Aug 23, any chat completion containing a `tools` array fails on the free model across both Zen Console and Go routes. Duplicate reports have piled up (#44850, #45073, #45020), suggesting this outage is widespread and affecting the free tier's core functionality.

2. **[#45087](https://github.com/anomalyco/opencode/issues/45087) — [2.0] Auto-updater ate 266 GB by reinstalling OpenCode every 10 minutes** (4 comments)  
   A long-running `opencode2 serve --service` process filled `~/.npm/_cacache` with **266 GB** of beta packages. The running server keeps its compiled version in memory, so its ten-minute update loop never realizes npm updated the executable. A serious operational hazard for production deployments.

3. **[#43277](https://github.com/anomalyco/opencode/issues/43277) — Sessions permanently stuck during normal use — survive reboots, cannot be recovered** (5 comments)  
   Sessions become irrecoverably stuck during normal use, persisting across reboots. The thread has gathered experience reports from several users; this is one of the most disruptive State bugs a user can hit.

4. **[#33618](https://github.com/anomalyco/opencode/issues/33618) — Qwen 3.7 Plus/Max (via OpenRouter) unknown/invalid tool calls** (10 comments, 4 👍)  
   *Long-running issue (since June).* Newer Qwen models produce tool calls with empty names like `✗ "" failed`, causing repeated retries and aborted sessions. Continues to be a pain point for OpenRouter users despite updates.

5. **[#17846](https://github.com/anomalyco/opencode/issues/17846) — `--log-level DEBUG` fails to log anything** (6 comments, 2 👍)  
   *Old issue resurfacing.* On macOS, once the log directory contains 10 log files, debug logging silently stops — a likely rotation bug. Critical for anyone trying to debug issues in this very thread.

6. **[#35434](https://github.com/anomalyco/opencode/issues/35434) — [CLOSED] Multi-question tool calls fail silently in TUI since v1.17.13** (7 comments)  
   A regression from #34116: the `question` tool with 2+ questions renders the form, but pressing Enter never submits. Silently failing tools are nasty; closed status suggests a fix is in the pipeline.

7. **[#44910](https://github.com/anomalyco/opencode/issues/44910) — [Zen Go] `/v1/responses` returns 500 for all non-DeepSeek models** (2 comments)  
   The Go gateway's Responses API has been failing for *all* non-DeepSeek models since Aug 25, while `/v1/chat/completions` works. A gateway-side serving problem affecting mimo, glm, and ox-alpha.

8. **[#45053](https://github.com/anomalyco/opencode/issues/45053) — `opencode-go/muse-spark-1.2-contributor` hangs indefinitely** (3 comments)  
   A specific Go model accepts requests but hangs forever with no streamed output, no error, and no completion. Other models on the same subscription work fine — a server-side serving issue.

9. **[#14524](https://github.com/anomalyco/opencode/issues/14524) — [FEATURE]: Display model cost in the model picker** (5 comments, 11 👍)  
   *Highest-👍 feature request.* Users want cost visibility in the TUI model picker. A PR exists with a cost column; strong community interest signals cost transparency is a top concern.

10. **[#44799](https://github.com/anomalyco/opencode/issues/44799) — Model resolution fails when the model ID itself contains "/" (NVIDIA NIM prefixed keys)** (2 comments)  
    NVIDIA NIM models (real ID `nvidia/nemotron-3-ultra-550b-a55b`) can't resolve because the registry key repeats the provider prefix. A fix is already in flight — see PR #45114 below.

## Key PR Progress

1. **[#45114](https://github.com/anomalyco/opencode/pull/45114) — fix(provider): resolve model IDs that repeat the provider prefix** (@rareboe)  
   Directly closes the NVIDIA NIM issue #44799. Providers whose model IDs carry a vendor segment (like `nvidia/nemotron...`) end up with registry keys that repeat the provider name — this fix normalizes resolution.

2. **[#45111](https://github.com/anomalyco/opencode/pull/45111) — fix(tui): dismiss the active interaction with ctrl-c** (@kitlangton)  
   Ctrl+C currently does nothing while slash autocomplete is open because the keymap mode has no cancellation binding. The PR aligns this with other dismissal paths (palette, forms, exit).

3. **[#45110](https://github.com/anomalyco/opencode/pull/45110) — feat(core): support git plugin packages** (@kitlangton)  
   `opencode2 plugin add` rejects Git repositories today; teams can't install private/in-repo plugins. This enables Git-sourced packages via Arborist support.

4. **[#45107](https://github.com/anomalyco/opencode/pull/45107) — feat(core): add directory projects** (@kitlangton)  
   Currently every non-Git directory is lumped into the same `global` project, hiding unrelated directories. This makes each directory its own project, enabling natural project identity.

5. **[#44971](https://github.com/anomalyco/opencode/pull/44971) — feat(tui): add persistent session terminals** (@jlongster)  
   A significant TUI UX feature: render a single fixed session frame with a persistent terminal panel on the right, avoiding recursive pane trees and arbitrary splits.

6. **[#45029](https://github.com/anomalyco/opencode/pull/45029) — feat(tui): browse projects, directories, and worktrees** (@kitlangton)  
   The Open dialog currently only lists repo roots; this expands it to show Git worktrees, nested project directories, and non-Git locations with existing sessions.

7. **[#45109](https://github.com/anomalyco/opencode/pull/45109) — fix(core): unify model-visible shell output previews** (opencode-agent[bot])  
   Reuses one shell-output preview for tool calls, background completions, and direct shell commands — applying consistent byte/line limits, truncation markers, and full-output file references.

8. **[#45002](https://github.com/anomalyco/opencode/pull/45002) — feat(core): repair malformed tool arguments before validation** (@rekram1-node)  
   Adds an internal plugin that repairs common malformed tool arguments before the original validator runs — useful for models that emit near-valid but malformed JSON arguments.

9. **[#45098](https://github.com/anomalyco/opencode/pull/45098) — feat(ai): add native Cerebras and Together AI providers** (@rekram1-node)  
   Together with #45108 (Groq and DeepInfra), this batch of PRs adds first-class support for cost-efficient inference providers via the existing OpenAI Chat protocol.

10. **[#44705](https://github.com/anomalyco/opencode/pull/44705) — fix(session): coerce legacy string tool-part input** (@LovePlayCode)  
    Fixes a migration bug: 1.14 stored some tool-part `state.input` values as JSON strings; 1.18's `Schema.Record` encoding breaks `GET /session/:id` for those legacy sessions.

## Feature Request Trends

- **Cost transparency**: The model picker cost column (#14524) has been widely requested with 11 👍 and continues to gain traction. Users want visible pricing directly in the TUI.
- **Project/directory organization**: Multiple PRs from @kitlangton (#45107, #45029) push toward richer project identity — treating directories as projects, browsing worktrees, and listing non-Git locations. The community clearly wants better multi-project workflows.
- **Plugin extensibility**: Git-sourced plugin installs (#45110) directly answer team-level plugin distribution needs; the current npm-only model is too restrictive for private/enterprise use.
- **Desktop deep links**: PR #45103 adds `opencode://open-session` deep links — a small but quality-of-life win that enables OS-level session management.
- **Server-side reliability on Zen/Go gateways**: The stream of "Endpoint is unavailable", hangs, and 500 errors on Zen routes (#44300, #44910, #45053) suggests users are demanding more robust serving infrastructure as usage scales.

## Developer Pain Points

- **Free-tier reliability**: The Ox Alpha free model failing on tool use (#44300 and duplicates) is the single most reported issue this week, breaking the primary workflow of trying tools before paying.
- **Permanent session state corruption**: Sessions that get "stuck" irrecoverably (#43277) and workspace sessions locked to wrong directories (#33995) destroy user trust — these are state bugs that force manual cleanup or DB editing.
- **Invisible/aborted tool calls**: Empty tool names with Qwen models (#33618) and silent multi-question form failures (#35434) highlight a class of bugs where models *appear* to work but tools fail without clear diagnostics.
- **Testing/locale gaps**: The 266 GB auto-updater disk blowup (#45087) and the lack of Hebrew locale (#42447) suggest both operational and internationalization gaps in the 2.0 line.
- **Config/validation friction**: Issues like `cli.json` missing a JSON schema (#44812), model resolution with slashed IDs (#44799), and false "(unavailable)" warning states (PR #45097) indicate onboarding and configuration UX still need polish.
- **IME and terminal rendering**: IME composition breaking on the v2 prompt (#39632), OSC 8/URL rendering artifacts in the TUI (#45001), and TUI freezes on Debian (#35494) show platform-specific rendering issues remain a recurring source of frustration.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-26

## 1. Today's Highlights

The Pi project saw a significant burst of activity with 50 issues and 31 PRs touched in the last 24 hours, including multiple critical bug fixes landing. Notably, a cluster of issues related to image handling in tool results across various providers (vision model media budgets, Bedrock OpenAI model image rejection, and Codex file references) signals growing pain around multimodal agentic workflows. The Windows experience remains the single most-discussed topic with 49 comments on the master tracking issue, while a series of `untriaged` fixes around reasoning effort clamps, compaction reserve scaling, and edit tool error recovery suggests ongoing investment in making Pi more robust for long-running agent sessions.

---

## 2. Releases

No new releases in the last 24 hours. The latest public build remains v0.84.3, with multiple issues filed against it (including the bundled CLI extension loading failure reported in #8620).

---

## 3. Hot Issues

**[#7547 — [Windows] [sink-thread] How do you use Pi on windows? What issues are you seeing?](https://earendil-works/pi/issues/7547)** — OPEN | 49 comments | 2 👍
The community sink issue for all things Windows. The breadth of use cases (WSL vs native, PowerShell vs pwsh, extension compatibility) has made it impossible to prioritize fixes. This issue will likely drive a dedicated Windows support push.

**[#8584 — TUI row corruption during streaming: assistant text rendered one word per line after long tool output](https://earendil-works/pi/issues/8584)** — CLOSED | 9 comments | 5 👍
A highly visible UI regression that made the TUI unusable after long tool outputs — words scattering one per line as if wrapped at a narrow width. Five 👍 suggests it hit many users. The issue is closed, but the root cause (likely related to terminal resize/refresh logic) may warrant a regression test.

**[#5886 — AgentSession settlement/continuation and assistant-tail lifecycle bugs](https://earendil-works/pi/issues/5886)** — OPEN | 9 comments | 4 👍
Mitsuhiko's meta-issue for a recurring class of bugs where post-run logic continues the agent from a stale transcript. This is the kind of issue that keeps getting touched because it spans multiple sub-systems and is hard to fix holistically.

**[#7855 — Pi stops with "Response was truncated before completion."](https://earendil-works/pi/issues/7855)** — CLOSED | 7 comments | 4 👍
Random truncation errors across OpenAI-compatible APIs (vLLM included) that required manual prompting to continue. Closed, but the randomness AND breadth of providers suggests either a timing bug or a wrongly applied hard cap.

**[#8582 — Built-in powershell tool uses Windows PowerShell 5.1 in interactive mode, but pwsh in -p mode](https://earendil-works/pi/issues/8582)** — CLOSED | 6 comments
Windows 11 users with PowerShell 7 installed still fall back to 5.1 in interactive mode. This is a consistency and user-expectation issue: features that work in `-p` mode break or behave differently in interactive mode.

**[#8468 — Github Copilot fails with timeout](https://earendil-works/pi/issues/8468)** — CLOSED | 6 comments
Copilot login failing with `Operation was aborted due to timeout`. The fix required checking out a PR branch not yet in a release, which is a common developer frustration — the fix exists but is inaccessible.

**[#8444 — thinkingTokenBudgetField is being ignored](https://earendil-works/pi/issues/8444)** — CLOSED | 3 comments
Documented model config field (`thinkingTokenBudgetField`) silently does nothing. Silently ignored settings are more dangerous than crashes — users think they're configuring something they're not.

**[#8651 — fix(coding-agent): scale compaction reserve to model context window to avoid spurious compaction on small models](https://earendil-works/pi/issues/8651)** — CLOSED | 3 comments
A clear insight: the fixed 16K token compaction reserve can exceed the entire usable budget on small local models, triggering unnecessary compactions. This is the acknowledgment that shrink-wrapped presets break when users run local models.

**[#8619 — openai-completions: per-token reasoning_details stored unmerged in thinkingSignature → thinking renders one word per line](https://earendil-works/pi/issues/8619)** — CLOSED | 2 comments
Directly related to #8584 — same "one word per line" symptom, different root cause. This one is about the thinking signature merging logic breaking when providers stream reasoning via `reasoning_details` instead of `reasoning_content`. Interop problems across providers remain a constant theme.

**[#8654 — edit tool mismatch errors lack recovery guidance, causing retry loops](https://earendil-works/pi/issues/8654)** — CLOSED | 2 comments
Terse mismatch errors lead models to retry the same near-identical `oldText` repeatedly, burning turns. This suggests the error messages need to be more actionable — a classic agent-tool design gap.

---

## 4. Key PR Progress

**[#8629 — Add eager tool execution](https://earendil-works/pi/pull/8629)** — CLOSED
Opt-in eager execution for discard-safe tool calls: starts local `read` calls at `toolcall_end`, reuses the exact candidate outcome at dispatch, otherwise discards without lifecycle events. This is the latency-killer: overlapping tool execution with generation rather than serializing.

**[#8614 — fix(ai): derive OpenRouter reasoning controls](https://earendil-works/pi/pull/8614)** — CLOSED
Addresses #8454 and closes the loop on the earlier OpenRouter feedback. Deriving reasoning controls — whether that's from model metadata or the `/models` endpoint — is progress on proper provider abstraction.

**[#8633 — fix(ai): omit Responses tool_choice without tools](https://earendil-works/pi/pull/8633)** — CLOSED
Completes the fix for compaction calls sending `toolChoice: "none"` without tools — OpenAI + Azure OpenAI Responses path was still violating this. With the earlier Completions fix (#8607), this one closes the consistency gap.

**[#8635 — fix(ai): preserve aborted stop reason during lazy setup](https://earendil-works/pi/pull/8635)** — OPEN
Fixes #8409: passes abort signals through lazy stream setup wrappers and reports setup failures as aborted when the request signal is already aborted. Essential for correct cancellation semantics in the agent loop.

**[#8612 — fix(coding-agent): clear delivered image-only queue entries](https://earendil-works/pi/pull/8612)** — OPEN
Fixes #8581: queue entries without text but with images were never removed, — skewing counts and potentially keeping stale images in memory. A small but important edge case.

**[#8623 — fix(coding-agent): stop counting trailing newline as a line in read tool](https://earendil-works/pi/pull/8623)** — CLOSED
Fixes the off-by-one line count — "of N+1 lines" instead of "N". Every developer who has read a config file with a trailing newline has hit this.

**[#8642 — fix(ai): hoist Bedrock tool result images out of toolResult for OpenAI models](https://earendil-works/pi/pull/8642)** — CLOSED
OpenAI models on Bedrock reject images nested in `toolResult.content`, killing sessions. Fix moves those images to sibling user content blocks — matching the behavior already in openai-completions.ts. Cross-provider parity in action.

**[#8616 — fix(coding-agent): scan past non-EXIF APP1 segments](https://earendil-works/pi/pull/8616)** — OPEN
Fixes #8571: JPEG scanning stopped at the first APP1 segment even when it wasn't EXIF. Metadata extraction should skip non-EXIF segments rather than bail. Small robustness fix.

**[#8639 — feat(ai): add Opper provider](https://earendil-works/pi/pull/8639)** — CLOSED
Adds Opper (OpenAI-compatible at api.opper.ai/v3/compat) as a built-in provider with full catalog generation and registry. More options is a feature; the test matrices coverage is the quality bar.

**[#8650 — fix(ai): omit Responses tool_choice when no tools are sent](https://earendil-works/pi/pull/8650)** — CLOSED
The xAI-specific 400 (`A tool_choice was set on the request but no tools were specified`) — a provider-specific error fix that generalized back into the core logic. The companion to #8633, covering the other provider.

---

## 5. Feature Request Trends

**1. Better image handling in agentic workflows (highest signal)**
   - Codex file references (#8617): store image bytes locally, materialize outbound as `file_id` references rather than replaying base64.
   - Bedrock OpenAI model image hoisting (#8643, #8642): provider-specific fix that needs cross-platform parity.
   - Media budget exhaustion (#8636): accumulated tool-result images brick sessions on vision models with patch budgets.

**2. Windows-first polish**  
   The giant sentiment sink (#7547) plus related issues show that Windows users want: consistent PowerShell behavior between modes (#8582), taskkill spawn reliability (#6596), and fewer environment-specific failures. The community wants Pi to "just work" on Windows with the same fidelity as on macOS/Linux.

**3. Eager / speculative execution**  
   PR #8629's eager tool execution was explicitly requested and accepted. The 10%-buffer re-parse suggestion in #7698 (re-parse only 🏢 once buffer grows by 10% rather than every delta) is in the same direction: performance engineering for long agentic conversations.

**4. Provider expansion for China market**  
   #4742 (SiliconFlow) and #8483 (DeepSeek) both target Chinese model hosts. With SiliconFlow, the value proposition is one API for many open-weights models. The projectspecific ask is to support both international AND China endpoints via the same compatible API.

**5. Better model requirement metadata**  
   Gemini 3.7 Flash rejecting the default MINIMAL thinking level (#8456) and `thinkingTokenBudgetField` being ignored (#8444) both indicate a need for Pi to properly negotiate per-model capability metadata.

---

## 6. Developer Pain Points

**Provider-specific behavior leaking into core logic (top frustration)**  
   The "one word per line" bug for reasoning streams (#8619), the Grok tool_choice 400 (#8650), the Bedrock image rejection (#8643), and Copilot login timeouts (#8468) all trace back to providers not behaving like "standard OpenAI-compatible" — the silent failure mode is the worst.

**Silently ignored settings and unusable errors**  
   `thinkingTokenBudgetField` being ignored (#8444) without any warning — developers assumed they configured reasoning budgets when they hadn't. Similarly, edit tool mismatch errors (#8654) that don't guide recovery lead to models retrying identical edits, wasting multiple turns. The message design needs to be actionable for the model.

**Post-update breakage and regressions**  
   The bundled CLI breaking every extension in one release (#8620) is a recurring class of problem (also #8656 fixing startup after update). Combine that with the TUI row corruption (#8584) and the thinking-signature word-per-line regression (#8619), and the release cadence clearly needs a stabilization pass.

**Session/compaction reliability on small models**  
   The fixed compaction reserve breaking small local models (#8651), the degenerate stop-reason compaction summaries (#8652), and the settlement/continuation lifecycle bugs (#5886) all point at one core failure mode: Pi's memory management needs to be adaptive to model context windows, not a fixed constant.

**Windows-specific gaps in tooling and core operations**  
   The Windows experience is hamstrung by environment-specific bugs: taskkill ENOENT (#6596), PowerShell version inconsistency (#8582), extension loading failures (implied by #8620), and npm 11 blocking install scripts during extension updates (#6600). It's not one bug; it's fragmentation across environments.

---

*Digest generated 2026-08-26. All statistics reflect the last 24 hours of GitHub activity.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-26

## Today's Highlights

The Qwen Code project continues its rapid evolution with no new release in the last 24 hours, but significant activity across the repository signals a **strong push toward production-grade reliability** — particularly in the `/review` system, CI infrastructure resilience, and Web Shell UX maturity. Two critical bugs stand out for attention: `/effort max` **bricks OpenAI-compatible provider sessions** (#9459), and Windows users are still suffering from a **broken Ctrl+V paste regression** (#9061). Meanwhile, the maintainers are investing heavily in the review pipeline — a series of PRs and issues show the `/review` command's architecture is being substantially reworked for correctness, coverage accounting, and deferred-finding recoverability.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#9459 — `/effort max` bricks sessions on OpenAI-compatible providers](https://github.com/QwenLM/qwen-code/issues/9459)** — The UI offers `/effort max` but `clampReasoningEffort()` doesn't clamp `'max'`, causing **every subsequent request in a session to fail with a 400** until the tier is manually changed. This is a P1 session-killing bug with 10 comments — critical for anyone using OpenAI-compatible endpoints.

2. **[#9061 — Ctrl+V paste unresponsive in CLI on Windows](https://github.com/QwenLM/qwen-code/issues/9061)** — A regression introduced between 0.21.0 and 0.21.11 breaks clipboard paste entirely on Windows. Users are forced to downgrade to 0.21.0. The issue has 7 comments but remains open, suggesting limited progress.

3. **[#8097 — Background agent coordination gap](https://github.com/QwenLM/qwen-code/issues/8097)** — This P2 multi-agent bug describes **duplicate work**, premature completion, and non-interactive `send_message` failures when running multiple background Explore subagents concurrently. Important for heavy multi-agent users; 8 comments with an active community discussion.

4. **[#9733 — Loop detection false-positives kill unattended turns](https://github.com/QwenLM/qwen-code/issues/9733)** — Legitimate verification cycles (write-script → run → edit → re-run) trigger loop detection and **terminate turns unrecoverably** without human intervention. This is a direct threat to unattended automation runs and has 4 comments.

5. **[#10057 — Review cleanup deletes concurrent review artifacts](https://github.com/QwenLM/qwen-code/issues/10057)** — When one review's target token is a dash-prefix of another (`src/foo` vs `src_foo`), the cleanup sweep in `qwen review cleanup` can **delete a concurrent review's in-progress artifacts**. Fresh issue with 2 comments, created by a maintainer.

6. **[#9198 — OOM after a week-long run](https://github.com/QwenLM/qwen-code/issues/9198)** — A user reports OOM on a **1TB server** after a 7-day run, with the terminal rendering completely broken afterward (mouse, copy/paste all broken). Kimi Code handles the same workload fine — a strong signal that long-lived sessions have memory management issues.

7. **[#10056 — MCP SSE tool call hangs indefinitely in Qwen Desktop](https://github.com/QwenLM/qwen-code/issues/10056)** — A reproducible Windows bug where MCP tool calls finish but the chat **hangs forever and permission is lost** after the first successful call in the same conversation. Windows + MCP SSE users should track this.

8. **[#10027 — DeepSeek vision model drops `image_url` content parts](https://github.com/QwenLM/qwen-code/issues/10027)** — Images read via `read_file` or any `image_url` content part are **silently dropped** and replaced with `[Unsupported content type]` when using `deepseek-v4-flash-vision-exp`. Closed, but the silent-drop behavior is concerning; 4 comments.

9. **[#10051 — Native Debug Adapter Protocol (DAP) integration](https://github.com/QwenLM/qwen-code/issues/10051)** — A feature request for programmatic debugger interaction via DAP rather than relying only on terminal output. New issue (created 2026-08-25) with 4 comments indicating strong early interest.

10. **[#10014 — WebShell sidebar drawer overflows narrow viewports](https://github.com/QwenLM/qwen-code/issues/10014)** — The responsive sidebar persists desktop width in localStorage and **ignores narrow container constraints**, causing layout breakage in embedded WebShell contexts. Fresh issue with 2 comments; a fix is already planned.

## Key PR Progress

1. **[#9769 — Unblock git update on dirty working tree (web-shell)](https://github.com/QwenLM/qwen-code/pull/9769)** — Replaces dead-end errors with a **resolution panel** offering two ways forward when a pull is blocked by uncommitted changes. Improves WebShell workspace update UX significantly.

2. **[#9739 — Bind PRs created via `gh pr create` in session shell](https://github.com/QwenLM/qwen-code/pull/9739)** — Closes the last binding-source gap: sessions whose PRs were created by the agent running `gh pr create` in the shell now get **auto-bound to the session↔PR feature**. Dual detection paths (live + post-hoc) cover all cases.

3. **[#9768 — Make review coverage a sealed, classified ledger](https://github.com/QwenLM/qwen-code/pull/9768)** — Overhauls `/review`'s chunk coverage into a **self-identifying ledger** that explains why each gap exists and reports what was actually read separately from what was posted. Transparency win for review quality.

4. **[#9717 — Prose-execution and counter-frame audits for `/review`](https://github.com/QwenLM/qwen-code/pull/9717)** — Two new review lenses: `prose-exec` checks instruction files (SKILL.md, agent definitions) that the diff touches, and a counter-frame audit. Rounds out the review roster post-#9655.

5. **[#9761 — Keep deferred suggestions recoverable off the PR page](https://github.com/QwenLM/qwen-code/pull/9761)** — When convergence posture engages (round 6+), deferred suggestions get a **recoverable list on the review body** so post-review tooling can still act. Labeled `autofix/needs-human`.

6. **[#9988 — Session token usage panel (web-shell)](https://github.com/QwenLM/qwen-code/pull/9988)** — Adds an opt-in panel showing **total usage, per-model breakdowns, subagent invocations, and tool statistics** with manual refresh, polling, and collapsed sections. Token transparency for WebShell users.

7. **[#9993 — Compact view as the only web-shell mode](https://github.com/QwenLM/qwen-code/pull/9993)** — Retires the compact-mode toggle and makes compact rendering the **only mode**, removing the Ctrl+O shortcut and all related settings/i18n. Simplification at the cost of choice.

8. **[#10036 — Route release pipeline Linux jobs to ECS runner pool](https://github.com/QwenLM/qwen-code/pull/10036)** — Moves six release-pipeline Linux jobs from fixed `ubuntu-latest` to the **conditional ECS routing** the review/CI lanes already use. Infrastructure hardening.

9. **[#10050 — Yield event loop between script tests to avoid vitest RPC timeouts](https://github.com/QwenLM/qwen-code/pull/10050)** — One-line global hook that yields to a real timer before every test. The autofix suite (219 tests, ~66s) was **blocking vitest workers** with synchronous `spawnSync` tests; this fixes flaky CI timeouts.

10. **[#9940 — Reply carried findings into their thread, resolve fixed ones](https://github.com/QwenLM/qwen-code/pull/9940)** — Multi-round reviews now **reply inside the original finding's thread** instead of opening new inline comments, and fixed findings get a resolved ruling fed back to the PR. Thread hygiene for long reviews.

---

## Feature Request Trends

1. **Context/session lifecycle management** — The strongest recurring theme. [#6762](https://github.com/QwenLM/qwen-code/issues/6762) requests skill-body unload/compression; [#9198](https://github.com/QwenLM/qwen-code/issues/9198) shows OOM in long sessions; [#9902](https://github.com/QwenLM/qwen-code/issues/9902) and [#9309](https://github.com/QwenLM/qwen-code/issues/9309) expose compression/anchoring flaws. The community is consistently hitting **long-lived session memory limits**.

2. **Background/multi-agent coordination and visibility** — [#8097](https://github.com/QwenLM/qwen-code/issues/8097) (coordination gaps), [#5823](https://github.com/QwenLM/qwen-code/issues/5823) (cron tasks fire silently with no visibility), and [#9733](https://github.com/QwenLM/qwen-code/issues/9733) (loop false-positives) all point to a need for **better agent flight control and observability** in unattended runs.

3. **Debugger/diagnostic integration** — [#10051](https://github.com/QwenLM/qwen-code/issues/10051) requests native DAP support for programmatic debugging, and [#10015](https://github.com/QwenLM/qwen-code/issues/10015) asks for context-usage breakdown on LLM spans. Momentum toward **weaving deeper tooling into agent workflows**.

4. **CI reliability and infrastructure robustness** — Multiple PRs and issues this week (ENOSPC on self-hosted runners [#10035](https://github.com/QwenLM/qwen-code/issues/10035), vitest RPC timeouts [#10050](https://github.com/QwenLM/qwen-code/pull/10050), ossutil extraction [#10019](https://github.com/QwenLM/qwen-code/issues/10019)) show a **concerted push to stabilize the build and test pipeline**.

---

## Developer Pain Points

1. **Session-killing bugs are the top frustration** — `/effort max` bricking sessions (#9459) and loop detection shutting down unattended turns (#9733) are both **unrecoverable without human intervention**, which is a direct productivity killer for scripted/CI workflows.

2. **Windows remains a second-class citizen** — CTRL+V paste broken in CLI (#9061) and MCP SSE hangs in Qwen Desktop (#10056) both have active conversations but **no merged fixes yet**. The `O_NOFOLLOW` gap on Windows (#8227) highlights deeper cross-platform security weaknesses.

3. **Long-running sessions degrade badly** — OOM on a 1TB server after a week (#9198), "silent cron tasks" that you forgot you scheduled (#5823), and interminable loop-thinking cycles from simple prompts (#4055) paint a picture of **stability erosion in sessions that live beyond a single workday**. Compression bugs (#9309, #9902) further amplify context-window costs in multi-round review runs.

4. **Permission/tooling transparency** — [#9827](https://github.com/QwenLM/qwen-code/issues/9827) shows `permissions.allow` doesn't actually restrict the tool schemas sent to the API — a critical trust gap for users who configure least-privilege agent setups. The workaround to delete those tools from the schema entirely isn't documented.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-26

## Today's Highlights
The CodeWhale TUI (formerly DeepSeek-TUI) is deep into its **v0.9.12 release cycle**, with an integration branch containing **72 commits** of must-fix and UX improvements. The community is actively contributing to supervised operation features (control sockets, lifecycle outboxes, `/relaunch`), while maintainers have shipped fixes for git deadlocks, provider neutrality, and Windows path handling. The project is also undergoing significant **crate decomposition** (EPIC-005) and **Chinese documentation localization** efforts.

## Releases
No new releases published in the last 24 hours. The most recent published release is **v0.9.11** (2026-08-23), with v0.9.12 in active integration on PR #5576.

---

## Hot Issues (10 noteworthy)

### 1. [#5316 — EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)](https://github.com/Hmbown/CodeWhale/issues/5316)
The umbrella epic tracking the architectural decomposition of the TUI crate. **16 comments**, high community engagement. This is the project's most significant structural refactor — splitting a monolithic TUI into focused crates. Matters because it will affect every contributor and downstream consumer.

### 2. [#5588 — Provider neutrality: 18 DeepSeek-exclusive gates](https://github.com/Hmbown/CodeWhale/issues/5588)
Audit found **2,281 lines** across 279 files with `deepseek` occurrences; **18 suspect gates** where behavior is DeepSeek-gated but conceptually provider-neutral. One fix already landed (NVIDIA NIM env leak). Critical for the project's neutrality as a multi-provider TUI.

### 3. [#5532 — Feature: /relaunch — switch running session to current binary](https://github.com/Hmbown/CodeWhale/issues/5532)
Users must manually restart after `/update`. This adds self-relaunch — a non-trivial challenge for a TUI holding the terminal. **4 comments**, multiple upvotes. Now closed via PR #5593.

### 4. [#5533 — Control surface for supervised operation](https://github.com/Hmbown/CodeWhale/issues/5533)
Per-session control socket (message/interrupt/relaunch/status) for external supervision (multiplexer wrappers, CI harnesses). **3 comments**. Community demand for headless/automated operation is growing. Closed via PR #5594.

### 5. [#5583 — Workflow responseSchema failures need bounded repair](https://github.com/Hmbown/CodeWhale/issues/5583)
When a child returns prose/malformed JSON against `responseSchema`, the run fails without repair opportunity. **4 comments** — users want graceful degradation and raw-output receipts for debugging.

### 6. [#4394 — Compaction: publish and enforce structured survival contract](https://github.com/Hmbown/CodeWhale/issues/4394)
Open for **over a month** with 4 comments. Compaction has substantial implementation but lacks an explicit contract for what survives. Long-running reliability concern with community interest.

### 7. [#5617 — Background git runs holding `.git/index.lock`](https://github.com/Hmbown/CodeWhale/issues/5617)
Internal git probes cause real `git commit` failures in the workspace. **2 comments** — this is a reproducible, high-frustration bug for developers using CodeWhale inside git repos. Follow-up suggests replacing git CLI with **gitoxide (gix)** in #5618.

### 8. [#5589 — Fleet config view: Enter loop, buried model switching](https://github.com/Hmbown/CodeWhale/issues/5589)
UX bug with screenshot — Enter appears to loop on the same screen with no drill-in. Community expects intuitive navigation; this breaks the mental model.

### 9. [#5601 — MiniMax and Xiaomi models return 404 on fresh install](https://github.com/Hmbown/CodeWhale/issues/5601)
Chinese-language bug report (zh-CN). Fresh installs fail on first-time configuration of MiniMax/Xiaomi — likely **hardcoded incorrect URLs**. DeepSeek works fine. Windows 10, reproducible. Highlights non-DeepSeek provider gaps.

### 10. [#5562 — Stale write-claims lock sub-agents; verifier role contradiction](https://github.com/Hmbown/CodeWhale/issues/5562)
Windows bug: stale write-claims **persist forever** and cascade-lock other agents. Also: the verifier role description contradicts its own enforcement. **3 comments** — concurrency correctness matters for multi-agent workflows.

---

## Key PR Progress (10 important)

### 1. [#5576 — v0.9.12 integration: must-fix + UX fixes (WIP)](https://github.com/Hmbown/CodeWhale/pull/5576)
The **release integration branch** — 72 commits, gated, code-complete for release blockers. Remaining: version bump + changelog/RC gates. This is the single most important PR to watch.

### 2. [#5616 — Move git_status/git_diff off the async executor thread](https://github.com/Hmbown/CodeWhale/pull/5616)
Fixes blocking `std::process::Command::output()` calls inside async `execute()` — could stall the tokio worker pool and **hang the entire session**. Directly addresses the git deadlock class of bugs.

### 3. [#5610 — Preserve Windows verbatim-path operands through POSIX word split](https://github.com/Hmbown/CodeWhale/pull/5610)
Fixes two Windows CI failures blocking FEAT-019. Root cause: `enforce_readonly_workspace_operands` mishandles verbatim paths. Platform-specific but blocking critical tests.

### 4. [#5611 — Show tool and MCP schema costs](https://github.com/Hmbown/CodeWhale/pull/5611)
Rebase of wuisabel-gif's #5603 onto current main. Context inspector now shows **bounded schema-cost estimates** — per-built-in-tool rows sorted by token cost. Helps users see what each MCP server costs per turn.

### 5. [#5594 — Control socket (part d, final)](https://github.com/Hmbown/CodeWhale/pull/5594)
Closes #5533. Opt-in Unix-only newline-framed **JSON-RPC socket** per session. Enables external supervision: message/interrupt/relaunch/status. Merged after multi-part effort.

### 6. [#5593 — /relaunch command (part c)](https://github.com/Hmbown/CodeWhale/pull/5593)
Closes #5532. `/relaunch` behaves like `/exit` for persistence then **re-execs the current binary** — enables one-step update flow. Significant UX win.

### 7. [#5592 — Lifecycle outbox (part b)](https://github.com/Hmbown/CodeWhale/pull/5592)
Closes #5531. Opt-in `[lifecycle_outbox]` — JSONL lines per lifecycle event for both TUI and headless runs. Supports `turn_stalled` / `turn_failed` events for external supervision.

### 8. [#5584 — Persist child approval receipts](https://github.com/Hmbown/CodeWhale/pull/5584)
Closes #5543. Child approval prompts could grant tool calls without durable evidence. Now commits **Asked before exposing prompt**, terminal outcomes before closing. Auditability improvement.

### 9. [#5609 — Adopt command shapes in memory group (FEAT-019)](https://github.com/Hmbown/CodeWhale/pull/5609)
Converts `/note` and `/memory` to external command shapes (FEAT-014/015 pattern). Part of the **command system refactor** series.

### 10. [#5613 — Fix English doc inaccuracies + first zh_hans Tier-2 translations](https://github.com/Hmbown/CodeWhale/pull/5613)
Review found English source docs **contradicting the codebase** (`provider_defaults.rs`, `child_env.rs`, `fleet.rs`). Fixes docs + adds first Simplified-Chinese translations. Supports the growing Chinese user base.

---

## Feature Request Trends

1. **Supervised/headless operation** — Control sockets, lifecycle outboxes, `/relaunch`. Users want CodeWhale to work under external automation (CI, multiplexer wrappers) without a human at the screen. This is the strongest signal this cycle.

2. **Provider neutrality** — Moving beyond DeepSeek: removing DeepSeek-exclusive gates, fixing MiniMax/Xiaomi 404s, auto-updating OpenCode model lists. Users expect a true multi-provider TUI.

3. **Context/cost transparency** — Tool schema costs per MCP server, focused-block copy/export, clipboard fallback. Users want to understand and control token spend.

4. **Git integration reliability** — Background git probes, index.lock contention, blocking git calls. Users are hitting real-world git repo issues frequently.

5. **Command system modernization** — External command shapes (FEAT-014/015/018/019 series), `/tutorial`, `/relaunch`. The command surface is being rebuilt for extensibility.

6. **Chinese localization** — Full docs translation (EPIC in #5482), zh_hans first translations landing. Growing Chinese user base is a priority.

---

## Developer Pain Points

1. **Git deadlocks and lock contention** — The most reported pain: internal git probes hold `.git/index.lock`, blocking real commits (#5617). Fixes landed (#5616) and a proposal to switch to **gitoxide** (#5618) shows the community wants this solved at the root.

2. **Unclear provider behavior** — MiniMax/Xiaomi 404s on fresh installs (#5601), stale docs listing non-existent `api.deepseeki.com` (#5564). Users waste time debugging configuration issues caused by hardcoded URLs or outdated docs.

3. **Headless/automated session gaps** — Running sessions under external supervision without a screen is a real pain. Users want full control surfaces (sockets, events, relaunch) to integrate with their workflows.

4. **Stale state and locking in multi-agent workflows** — Stale write-claims persist and cascade-lock other agents (#5562). Approval receipts not persisted (#5584). Multi-agent correctness is fragile.

5. **Version and release information inconsistency** — Release notes receipt check could silently skip (#5614), `latest-published-release.json` was stale at v0.9.10 while v0.9.11 was out (#5612). Release infrastructure needs hardening.

6. **Windows-specific bugs** — Verbatim path handling (#5610), Windows CI failures. Windows support still has rough edges.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*