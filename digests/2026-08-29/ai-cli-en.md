# AI CLI Tools Community Digest 2026-08-29

> Generated: 2026-08-29 06:07 UTC | Tools covered: 9

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
**Date:** 2026-08-29  
**Scope:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI

---

## 1. Ecosystem Overview

The AI CLI developer-tool landscape is undergoing rapid maturation, characterized by three simultaneous pressures: **platform stability** (particularly on Windows), **agentic-reliability** (subagent orchestration, tool-call integrity), and **security hardening** (trust-boundary enforcement, permission-model refinement). The ecosystem is bifurcating into two architectural camps: **monolithic agentic harnesses** (Claude Code, Codex, Gemini CLI, Copilot CLI) that integrate deeply with proprietary model ecosystems, and **composable open frameworks** (OpenCode, Pi, Qwen Code, DeepSeek TUI) that prioritize plugin extensibility, multi-provider support, and terminal-UX craftsmanship. Across all nine tools, Windows desktop-app instability and MCP integration inconsistency are the most common cross-cutting complaints, while enterprise adoption is increasingly gated by authentication friction, data-residency compliance, and observable token-cost accounting.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs Active | Releases (24h) | Notable Signals |
|------|:---:|:---:|:---:|------|
| **Claude Code** | 10 tracked (2 new) | 1 updated | **v2.1.251** | Highest engagement: 164-comment cyber-safeguard thread (CVP false positives) |
| **OpenAI Codex** | 10 tracked (1 new) | 10 active | **5 alpha builds** | Rapid Rust-rewrite iteration; Windows startup blocker #40752 |
| **Gemini CLI** | 10 tracked | 10 active (3 security) | **v0.59.0-nightly** (security-fix) | Security-PR cluster (OAuth IdP mix-up, NTFS path traversal, config-loading privilege escalation) |
| **Copilot CLI** | 10 of 22 tracked | 10 active/partial | **v1.0.82-1** (patch) | Auth-error surface improvement; 13 GB runaway debug log report |
| **Kimi Code CLI** | 2 tracked (1 severe) | 1 active | None | **Critical:** MCP bypass of secret-file guard (#2625), 10x quota-amplification billing anomaly (#2626) |
| **OpenCode** | 10 tracked | 10 active | None | 119-comment GPT-latency thread; /tmp .so leak (21 MB/launch) |
| **Pi** | 10 tracked (3 closed) | 10 total (3 merged) | **v0.84.4** | Compaction bug fix merged; narrow-terminal crash fixed |
| **Qwen Code** | 10 tracked (2 closed) | 10 active | **v0.22.3** + nightly | WebShell cutover regression cluster (6+ issues); permissions.allow silent tool-disappearance (closed) |
| **DeepSeek TUI** | 6 tracked | 6 closed + 4 open | None | v0.9.12 milestone in progress; headless PR review shipped (#5706) |

---

## 3. Shared Feature Directions

### A. **Windows Platform Reliability** (7/9 tools)
- **Claude Code:** MSIX install failures (#74170), link-click crashes (#90353), orphaned Job Objects (#53247), stealth restarts (#90172)
- **Codex:** Desktop startup blocker (#40752), WSL/PTY failures (#37104), DWM handle leaks (#33192), sandbox EPERM (#41237)
- **Copilot CLI:** Resume hangs (#4165), AltGr input swallowing (#4653), sandbox unsupported on 25H2 (#4652)
- **Other:** Pi (Kitty double-delete), OpenCode (post-exit pipe drain), Qwen (WebShell re-render loops), Kimi (implicit)

### B. **MCP/Tool-Integration Determinism** (6/9 tools)
- **Claude Code:** "Connected" but zero tools exposed (#61682)
- **Copilot CLI:** Chroma-MCP breakage (#4647), Atlassian OAuth regression (#4480)
- **Gemini CLI:** Truncated tool-name collisions (#28971), >128-tool 400 errors (#24246)
- **Kimi CLI:** MCP bypassing secret-file guards (#2625) — security-critical
- **OpenCode:** MCP config handling refactor (PR #46072), project-level MCP config request (#30933)
- **Codex:** Per-tool MCP output-limit support (PR #41421)

### C. **Session-Lifecycle Transparency & Control** (5/9 tools)
- **Claude Code:** Branch-aware web sessions (#10018), stealth-restart session destruction (#90172), resume context-compression loss (#86688)
- **Pi:** Compaction reliability/clarification (#6879, #7553)
- **Copilot CLI:** Model-override for `--resume` (#4645)
- **OpenCode:** Worktree lifecycle hooks (#15680), session-history migration issues (#34445)
- **Qwen:** Channel session-rotation bounds (#8927), named sessions (shipped v0.22.3)

### D. **Usage/Cost Telemetry** (5/9 tools)
- **Claude Code:** Usage bars (#83092), programmatic usage API (#80732)
- **Codex:** Token-amplification data point from AGENTS.md rules (#41450)
- **Kimi CLI:** Billing transparency/locally-verifiable quota logs (#2626)
- **Gemini CLI:** AST-aware tools to reduce context bloat (#22745), token-budget optimization (#19873)
- **Pi:** Compaction budget separation (#7553)

### E. **Enterprise Auth & Compliance** (4/9 tools)
- **Copilot CLI:** GHEC data-residency routing (#4527), enterprise endpoint selection (#4654)
- **Claude Code:** Cyber-safeguard false positives (#84352) — highest-risk issue
- **Gemini CLI:** OAuth IdP mix-up defense (PR #29117), secure config loading (PR #29115)
- **Codex:** Sandbox permission side effects (#17179)

---

## 4. Differentiation Analysis

| Dimension | **Proprietary/Ecosystem-Tethered** | **Open/Composable** |
|-----------|-----------------------------------|---------------------|
| **Toolset** | Claude Code, Codex, Gemini CLI, Copilot, Qwen | OpenCode, Pi, DeepSeek TUI, Kimi |
| **Core Value** | Deep integration with native model ecosystems (reasoning, plugins, channels) | Provider-agnostic CLI rigor; plugin architecture; terminal UX |
| **Vulnerability** | Windows desktop-app delivery; MCP subprocess reliability | Token-efficiency; model-behavior variance across providers; plugin-install fragility |
| **Trend** | Shift toward desktop/IDE/remote hybrid surfaces; model-catalog-driven behavior | Aggressive architectural refactors (Pi compaction; OpenCode 2.0; DeepSeek crate decomposition) |
| **Approach** | Proprietary, feature-matrix-driven releases (major/minor version bumps) | Rapid iteration; PRs direct from community; nightly builds; security-audit clustering (Gemini, 24h) |

**Notable differentiators:**
- **Claude Code** leads in extensibility (hooks, plugin ecosystem) and **enterprise risk** (CVP false-positive thread)
- **Codex** leads in **release cadence** (5 alphas/day) and **model-aware agent behavior**
- **Gemini CLI** leads in **security-audit velocity** (3 critical security PRs/24h; "fail-closed trust")
- **Copilot CLI** leads in **enterprise-auth friction** (GHEC, data-residency)
- **Pi** leads in **terminal-UX polish** (capability overrides, adaptive truncation, artifact verification)
- **DeepSeek TUI** leads in **CI-adjacent automation** (headless PR review, dispatch, GitHub App bot)
- **OpenCode** leads in **TUI architecture** (2.0 refactor, layer-graph composability, QR pairing)

---

## 5. Community Momentum & Maturity

| Tier | Tool | Signal |
|------|------|--------|
| **Most Active / High-Engagement** | Claude Code | 164-comment megathreads, numerous 50+ ✋ issues, 6 figure user base, enterprise visibility |
| **Rapid Iteration / Alpha-Churn** | Codex | 5 alphas/day; Rust-rewrite energy; aggressive infrastructure PRs; significant Windows instability (86-comment blocker) |
| **Security-Leadership / High-Velocity Security PRs** | Gemini CLI | 3 security-critical PRs in 24h; nightly releases; npm ecosystem; community-active |
| **Stable / Polished / Contained Churn** | Copilot CLI | 1 patch release; stable core; PR momentum lower, but focus on enterprise friction |
| **Stable / Focused on TUI-Craft** | Pi | 3 merged fixes/24h; compaction fix; high-quality UX PRs; community-driven |
| **Active Web/Channels / Release-Clean** | Qwen | 2 stable releases, security-hardening PRs across the stack; high feature velocity |
| **Moderate / Niche-Community** | DeepSeek TUI | Milestone-driven; 6 PRs/day (half closed); strong CI/dX focus; small community |
| **Young / Security-Sensitive + Billing-Aware** | Kimi | Security-critical issue, billing anomaly; community small but high-signal |
| **Active / Perf-Ethos / 2.0-Driven** | OpenCode | 10 active PRs/day; 119-comment GPT-latency thread; 2.0 refactor trajectory |

**Maturity assessment:** Claude Code and Copilot CLI are the most mature — feature-rich, stable, enterprise-adopted, but also the most risk-exposed (CVP, GHEC). Gemini CLI (security) and Pi (TUI UX) are rapidly maturing. Codex is technically mature but in high-velocity / Windows-unstable phase. OpenCode and DeepSeek are architecturally ambitious, with OpenCode better distributed.

---

## 6. Trend Signals

1. **Windows Desktop-App Reliability Is the #1 Platform Risk**  
   **Signal:** 7/9 tools have Windows-critical issues (blockers, crashes, sandbox failures, IME bugs).  
   **Implication:** Windows-first enterprises are blocked; tools that solve this will gain adoption share. Pre-release Windows validation is now a board-level issue.

2. **Security Is Rapidly Becoming a First-Class Differentiator**  
   **Signal:** Gemini (OAuth IdP mix-up, NTFS path-traversal, fail-closed trust), Kimi (MCP secret-file bypass), Qwen (hook trust boundaries), Claude Code (Remote Control default-ON).  
   **Implication:** Security posture (not just feature velocity) is now a buyer-tilt; expect audits, CVE-driven releases, and zero-trust default settings to become standard.

3. **Token-Cost Transparency Is a Quiet but Growing Demand**  
   **Signal:** Token-amplification data (Codex #41450), usage bars (Claude #83092, #80732), billing-log telemetry (Kimi #2626), AST-aware tooling to reduce context bloat (Gemini #22745).  
   **Implication:** Metered-plan users and ops teams require visibility into consumption; expect per-tool token budgeting, usage dashboards, and provider-side analytics as standard feature-set.

4. **MCP Integration Remains the Most-Fragile Layer**  
   **Signal:** 6/9 tools report MCP breakages (connectivity regressions, false "Connected" status, per-tool limits, name-collision bugs).  
   **Implication:** MCP is converging as the standard integration protocol, but implementation consistency is the bottleneck. Tool-ID, tool-name-identity, and per-tool ACL parity will become de-facto requirements.

5. **Terminal UX Is Moving Toward Full IDE Parity**  
   **Signal:** Mouse support (Claude #87769), capability overrides (Pi), adaptive truncation (Pi), TUI search and spinner polish, alternate-screen handling, session-resume affordances.  
   **Implication:** The CLI is no longer a fallback; it is a first-class surface for power users. Customization, responsiveness, and accessibility (narrow-terminal, alt-screen, clipboard) are becoming competitive entries.

6. **Autonomous/Subagent Orchestration Is Entering the Trust-Critical Zone**  
   **Signal:** False-success subagent reports (Gemini #22323), hangs (Gemini #21409), parallel-subagent UI freezes (Copilot #4533), tool-call identity isolation (OpenCode PR #46084), "text-only reasoning loops" (OpenCode #46059), artifact verification gates (Pi #8795).  
   **Implication:** The move from single-turn to multi-agent autonomous workflows is acknowledged by all; the choke-point is **verifiability and traceability**. Expect "verifiable autonomy" (machine-checkable artifacts, auditable subagent traces, deterministic success tokens) as the next major battleground.

7. **Authentication & Identity Remain a Persistent Enterprise Friction**  
   **Signal:** GHEC data-residency routing (Copilot #4527), OAuth IdP mix-up validation (Gemini PR #29117), enterprise endpoint misconfiguration (Copilot #4654), cyber-safeguard lockdown blocks (Claude #84352).  
   **Implication:** Identity is the silent enterprise gatekeeper. Tools with the most robust, data-residency-compliant auth models will win regulated-vertical adoption.

---

**Bottom Line for Decision-Makers:**

- **For enterprise adoption,** prioritize tools with data-residency compliance (Copilot, Claude), strong security posture (Gemini), and robust Windows stability (currently a gap across the board).
- **For developer velocity/autonomy,** prioritize tools with deep model integration (Codex, Claude), mature plugin ecosystems (Claude, OpenCode), and fast iteration (Codex, Gemini).
- **For terminal-UX craftsmen,** Pi and DeepSeek TUI are the standout candidates. For full-fidelity TUI features, OpenCode remains the architectural leader, but pay attention to its latency issues and 2.0 migration risks.
- **Monitor security advisories** — the cluster of security-critical issues (Kimi, Gemini, Qwen) suggests that security hardening is now a top-3 engineering priority across the ecosystem.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-29 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The following Skills have drawn the most community attention through PR discussions:

**1. skill-creator — run_eval.py 0% recall bug fixes** ([PR #1298](https://github.com/anthropics/skills/pull/1298), [PR #1099](https://github.com/anthropics/skills/pull/1099), [PR #1050](https://github.com/anthropics/skills/pull/1050))
Three independent PRs address the same critical defect: `run_eval.py` reports `recall=0%` for every description, breaking the skill-optimization loop. Fixes target Windows subprocess streaming, trigger detection, and parallel workers. The root cause is documented in [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍). Status: **Open** — multiple contributors, high urgency.

**2. document-typography** ([PR #514](https://github.com/anthropics/skills/pull/514))
A quality-control Skill preventing orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Community interest reflects broad frustration with typographic defects in Claude's document output. Status: **Open**.

**3. ODT (OpenDocument) skill** ([PR #486](https://github.com/anthropics/skills/pull/486))
Adds OpenDocument text creation, template filling, and ODT → HTML parsing. Addresses the gap for open-source document format support beyond PDF/DOCX. Status: **Open**.

**4. self-audit** ([PR #1367](https://github.com/anthropics/skills/pull/1367), v1.3.0)
A universal output-audit skill combining mechanical file verification with a four-dimension reasoning quality gate, prioritizing damage severity. Complements the related [reasoning-gate proposal](https://github.com/anthropics/skills/issues/1385). Status: **Open**.

**5. testing-patterns** ([PR #723](https://github.com/anthropics/skills/pull/723))
Comprehensive testing-stack skill covering the Testing Trophy model, unit/React component testing, and what *not* to test. High demand for structured test-generation guidance. Status: **Open**.

**6. ServiceNow platform skill** ([PR #568](https://github.com/anthropics/skills/pull/568))
Broad platform assistant spanning ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, Vulnerability Response, and IntegrationHub — enterprise workflow automation in a single Skill. Status: **Open**.

**7. pyxel (retro game development)** ([PR #525](https://github.com/anthropics/skills/pull/525))
Integrates pyxel-mcp for creating retro/pixel-art/8-bit games in Python, covering write → run-and-capture → inspect → iterate workflows. Status: **Open**.

**8. sknet-hpc** ([PR #1615](https://github.com/anthropics/skills/pull/1615))
Newest addition (Aug 2026): HPC cluster operations via profile-based SSH and Slurm workflows — connection, partitions, job generation, discovery, and compute-node management. Status: **Open**.

---

## 2. Community Demand Trends

Distilled from top Issues:

- **Skill creator reliability** — The most concentrated demand is fixing `skill-creator`'s evaluation harness so description optimization works correctly ([#556](https://github.com/anthropics/skills/issues/556), 12 comments; [#202](https://github.com/anthropics/skills/issues/202)). Multiple PRs target Windows compatibility and false 0% recall signals.
- **Trust & security boundary** — Community Skills distributed under the `anthropic/` namespace create impersonation risk ([#492](https://github.com/anthropics/skills/issues/492), 43 comments — the most-discussed issue). Demand for clearer provenance verification.
- **Org-wide skill sharing** — Direct skill sharing within Claude.ai organizations, eliminating manual .skill file distribution ([#228](https://github.com/anthropics/skills/issues/228), 8 👍).
- **Context-window efficiency** — The `claude-api` Skill's ~156k-token eager injection exhausts context ([#1487](https://github.com/anthropics/skills/issues/1487)); demand for lazy-loading/lighter Skill payloads.
- **Agent safety & governance** — Proposals for agent-governance safety patterns ([#412](https://github.com/anthropics/skills/issues/412)) and reasoning quality gates ([#1385](https://github.com/anthropics/skills/issues/1385)).
- **Document format coverage** — Continued demand for non-PDF/DOCX formats (ODT, SharePoint Online) with security considerations ([#1175](https://github.com/anthropics/skills/issues/1175)).

---

## 3. High-Potential Pending Skills

Actively discussed PRs likely to merge soon:

| Skill | PR | Description |
|---|---|---|
| **fix(pdf): case-sensitive file refs** | [#538](https://github.com/anthropics/skills/pull/538) | 8 filename case mismatches breaking PDF Skill on Linux/macOS |
| **fix(docx): tracked-change w:id collision** | [#541](https://github.com/anthropics/skills/pull/541) | Prevents document corruption when bookmarks collide with change-track IDs |
| **fix(skill-creator): YAML unquoted validation** | [#539](https://github.com/anthropics/skills/pull/539) | Pre-parse check for silent description truncation |
| **fix: evaluation + benchmark reliability** | [#1602](https://github.com/anthropics/skills/pull/1602) | Multi-bug fix: MCP serialization, encoding, script stability |
| **Hivemind: zero-cost multi-agent orchestration** | [#1628](https://github.com/anthropics/skills/pull/1628) | Delegation of mechanical work to headless opencode workers on free models |
| **claude-api: retire four model IDs** | [#1607](https://github.com/anthropics/skills/pull/1607) | Accuracy fix for model lifecycle documentation |
| **UIZZE partner skill** | [#1595](https://github.com/anthropics/skills/pull/1595) | Anti-UI-slop Skill grounded in 800k+ real screens |
| **Skill quality/security analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | Two meta-Skills: 5-dimension quality analysis + security audit |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | Community health gap fix (GitHub score: 25% → higher) |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for a reliable, cross-platform skill-creation toolchain with trusted distribution — specifically, fixing evaluation harness bugs, preventing impersonation via namespace trust boundaries, and enabling organization-wide sharing — before expanding into new skill domains.**

---

# Claude Code Community Digest — 2026-08-29

## Today's Highlights

Release v2.1.251 brings developer-facing hook improvements with new `PreModelSwitch`/`PostModelSwitch` events and live subagent tool-call streaming to Remote Con. The community's biggest unresolved pain point remains cyber-safeguard false positives (#84352) with 164 comments, now joined by two new session-halting reports today (#90499, #90501). Windows desktop stability continues to dominate bug reports, with a new crash-on-link-click defect (#90353) and stealth-restart sessions destruction (#90172) surfacing in the last 48 hours.

## Releases

**[v2.1.251](https://github.com/anthropics/claude-code/releases/tag/v2.1.251)** — Key changes:
- Added `PreModelSwitch` and `PostModelSwitch` hook events (block, confirm, or annotate a model switch); `SessionStart` resume hooks now receive session staleness and estimated re-cache cost
- Added live streaming of a foreground subagent's tool calls and results to Remote Con

## Hot Issues

1. **[#84352 — CVP-approved org still receives cyber safeguard blocks](https://github.com/anthropics/claude-code/issues/84352)** — 164 comments, 25 👍
   The longest-running open thread. Users report that a previously Cyber Verification Program–approved Claude.ai org is inexplicably flagged "Under review" and hit with safeguard blocks again. The duplicate flagging reports from a single author today (#90499, #90501, #88927) suggest this is a server-side systemic issue requiring urgent Anthropic attention.

2. **[#10018 — Claude Code Web: start sessions from non-default branches](https://github.com/anthropics/claude-code/issues/10018)** — 59 comments, 86 👍
   High-demand feature request (closed). Monorepo teams with long-lived feature branches want web sessions to respect branch state at session creation. 86 upvotes makes it one of the most-wanted enhancements.

3. **[#11627 — .NET 9/10 SDK support for web runtime](https://github.com/anthropics/claude-code/issues/11627)** — 15 comments, 75 👍
   Closed feature request on the cusp of shipping. Web-based development on .NET workloads is a clear gap; this one has strong support but has been open 9 months.

4. **[#53247 — Windows launch failure: orphaned Silo/Job Object after crash](https://github.com/anthropics/claude-code/issues/53247)** — 30 comments, 19 👍
   Recurring Windows reliability issue. After a crash, only logoff or reboot recovers the app (HRESULT 0x80070020). Four months open with no fix signals difficult kernel-level debugging for Anthropic.

5. **[#61682 — GitHub connector "Connected" but exposces no tools in Cowork on Windows](https://github.com/anthropics/claude-code/issues/61682)** — 27 comments, 24 👍
   MCP integration mismatch. Users on Windows 11 report that the GitHub connector silently fails to surface tools — the "Connected" state is misleading. Affects Cowork/Desktop workflows significantly.

6. **[#88094 — Remote Control turned on by default (Windows)](https://github.com/anthropics/claude-code/issues/88094)** — 6 comments, 8 👍
   Privacy-adjacent bug with clear security implications. Remote Control being ON without user consent is alarming for teams using Claude Code in regulated environments.

7. **[#90353 — Desktop crashes on clicking any link (Windows, MSIX)](https://github.com/anthropics/claude-code/issues/90353)** — 2 comments, 1 👍
   Reproducible 0x80000003 assert at Claude.exe+0x6E89D89 with zero third-party DLLs. Filed yesterday, this is the newest sharpest Windows defect — link-click is a fundamental interaction.

8. **[#88405 — Symlinked files in .claude/rules/ not auto-loaded](https://github.com/anthropics/claude-code/issues/88405)** — 7 comments, 4 👍
   Documentation vs. behavior contradiction. The docs promise symlink support, but actual loading silently skips them. Teams with shared rule files across projects are affected.

9. **[#90172 — Stealth restart destroys running sessions (8 defects)](https://github.com/anthropics/claude-code/issues/90172)** — 1 comment, 2 👍
   A detailed report of how the auto-relaunch for updates silently kills active sessions, breaking Remote Control connections with "computer_unreachable". Filed this week, likely to gain momentum.

10. **[#80261 — Show usage limits on main screen / persistent usage indicator](https://github.com/anthropics/claude-code/issues/80261)** — 2 comments, 13 👍
    Frequent ask across multiple threads: users want a constant, visible plan-usage indicator to avoid burning through weekly limits in long-running agent sessions.

## Key PR Progress

Note: only 1 PR was updated in the digest window; the following list includes notable open PRs from the current cycle.

1. **[#87079 — fix(security-guidance): make ** glob patterns match zero-depth paths](https://github.com/anthropics/claude-code/pull/87079)** — Open
   Important security fix. Current `fnmatch`-based globbing requires a literal `/` for `**/*.ts`, so top-level files silently bypass security-patterns.json rules despite docs promising "** matches any depth". Silent non-compliance in security rules is particularly dangerous.

2. **[#10018 — Feature: Claude Code Web session from non-default branch](https://github.com/anthropics/claude-code/issues/10018)** — Open
   This is a large community ask (86 👍); implementation would remove a major friction point for monorepo web development.

3. **[#53247 — Windows orphaned Silo fix](https://github.com/anthropics/claude-code/issues/53247)** — Open
   A high-signal Windows reliability bug; a proper fix will likely require deep Job Object lifecycle management in the desktop app.

4. **[#74170 — MSIX installation failure (HRESULT 0x80073CF9)](https://github.com/anthropics/claude-code/issues/74170)** — Open
   Packaging issue affecting Windows enterprise installs. This blocks adoption in organizations that rely on MSIX; needs packaging team attention.

5. **[#67840 — Remote VM tool-call phantom-denies after 600s on laptop sleep](https://github.com/anthropics/claude-code/issues/67840)** — Closed
   Fixed with a workaround for `bypassPermissions` + remote sessions. Root cause: sleep during in-flight tool calls triggers a permission-layer timeout misclassified as user denial.

6. **[#74259 — Session creation fails for trailing-space directory paths](https://github.com/anthropics/claude-code/issues/74259)** — Closed
   Trust-store path normalization mismatch. Fixed, but noteworthy because it was a silent failure that confused early adopters on macOS.

7. **[#87769 — Mouse support in terminal UI (click-to-navigate)](https://github.com/anthropics/claude-code/issues/87769)** — Closed
   Likely shipped or shipped soon — terminal UX parity with the desktop app. Good for accessibility of the TUI.

8. **[#83092 — Usage bars](https://github.com/anthropics/claude-code/issues/83092)** — Closed
   Merged or shipped. Persistent usage visualization is on the way, addressing the #80261 family of requests.

9. **[#80732 — Programmatic access to plan usage data](https://github.com/anthropics/claude-code/issues/80732)** — Closed
   Shipped / accepted. This unlocks external monitoring of plan consumption and pairs well with the usage-bar work.

10. **[#87769 — Subagent context preservation fidelity](https://github.com/anthropics/claude-code/issues/87769)** — Open
    Newer reports (#86688) show agent-session resumes lose context with no compression summary. This is an active area of investigation.

## Feature Request Trends

- **Branch-aware sessions** — Users need Claude Code Web to start from arbitrary branches, not just default. Monorepo teams are the loudest here (#10018).
- **Persistent, machine-readable usage telemetry** — Multiple closed/merged requests (#83092, #80732) confirm Anthropic is shipping visible usage bars and programmatic APIs. Expect this to expand.
- **Expanded runtime & SDK support** — .NET 9/10 SDK support in web runtime (#11627) is a strong signal that web-based development is becoming a first-class scenario.
- **Terminal UI interactivity** — Mouse support and click-to-navigate in TUI (#87769) was accepted; expect richer TUI interactions maturing in coming releases.
- **Session lifecycle controls** — Auto-grouping child sessions in the sidebar (#82788) and better session resume/compression fidelity (#86688) reflect broader demand for session management depth.
- **Enhanced global configuration** — HTTP(S) proxy support for third-party API gateways (#69026) would be a significant win for enterprise deployments, though no progress this week.

## Developer Pain Points

- **Cyber-safeguard false positives** — The #1-ranked pain point by engagement. Multiple independent reports (#84352, #90499, #90501, #88927) of session-halting blocks on legitimate work, with a verification portal stuck on "Under review." Corporate and CVP-approved users are being blocked from authorized work. This is Anthropic's highest-risk reputation issue right now.
- **Windows desktop app instability** — A heavy cluster of Windows-only issues: MSIX install failures (#74170), link-click crashes (#90353), browser-tab crashes (#87659), orphaned Job Objects (#53247), stealth restarts destroying sessions (#90172), IME flooding (#90512). Windows users report the app is effectively unreliable on Win11, especially with Japanese IME input and containerized/sandboxed installs.
- **MCP connector inconsistency** — The GitHub connector reporting "Connected" while exposing zero tools (#61682) undermines trust in the MCP ecosystem. Teams are being burned by silent failures rather than explicit errors.
- **Remote Control defaulting to ON** (#88094) — Privacy concern. The community is wary of remote capabilities being enabled without explicit opt-in.
- **Model lock-in** — Dispatch sessions locking to Fable 5 with no model switch (#79410) strands Max-plan users when they hit usage limits, forcing them to abort or lose session context. Related to the broader "resume loses context" complaints (#86688).
- **Documentation vs. behavior gaps** — Symlink support in `.claude/rules/` that silently doesn't work (#88405) is a team-wide productivity hit for orgs sharing rule sets across repos.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**2026-08-29**

---

## Today's Highlights

The Codex team shipped a rapid sequence of Rust alpha releases (v0.151.0-alpha.7 through alpha.12) alongside a burst of infrastructure PRs focused on plugin hooks, model catalog sourcing, and execution-host reliability. Meanwhile, the community is laser-focused on Windows desktop stability — the top issue has 86 comments and 51 reactions, covering a startup failure that blocks the app entirely after updating to v26.820.60940. A notable new bug report demonstrates reproducible 81.6% token *amplification* in Code Mode caused by complex AGENTS.md rules, pointing to a significant optimization opportunity for heavy users.

---

## Releases

Five Rust alpha releases landed in the last 24 hours:

- **[rust-v0.151.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.12)** — 0.151.0-alpha.12
- **[rust-v0.151.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.11)** — 0.151.0-alpha.11
- **[rust-v0.151.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.10)** — 0.151.0-alpha.10
- **[rust-v0.151.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.9)** — 0.151.0-alpha.9
- **[rust-v0.151.0-alpha.7.1](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.7.1)** — 0.151.0-alpha.7.1

No release notes accompany these builds; they appear to be iterative fixes aligned with the active development in the PR list below.

---

## Hot Issues

1. **[#40752 — Windows Desktop fails to start after update to v26.820.60940](https://github.com/openai/codex/issues/40752)**
   The most-discussed issue (86 comments, 51 👍). The app errors with "Unable to locate Codex CLI" and a spawn EINVAL on the `.cmd` wrapper. This is a **blocker** for Windows users and is seeing active triage.

2. **[#39903 — Add an option to disable "Ran N commands" collapsing in TUI](https://github.com/openai/codex/issues/39903)**
   Strong demand (65 👍, 44 comments) for a config flag to always show executed commands instead of collapsing them. Developer workflow transparency is the core ask.

3. **[#41049 — code-mode host exits during handshake; 5.6 model broken](https://github.com/openai/codex/issues/41049)**
   Windows 10 users on Pro subscription report the local command execution channel crashes at initialization ("code-mode host exited during handshake"), blocking directory reads and tool calls.

4. **[#37104 — WSL integrated terminal silently fails before PTY startup](https://github.com/openai/codex/issues/37104)**
   Windows/WSL users cannot open bottom or side panels — the integrated terminal fails silently prior to PTY/WSL startup. 23 comments, persists across versions.

5. **[#34227 — Windows pet overlay hit region desynchronizes from mascot](https://github.com/openai/codex/issues/34227)**
   A niche but visible bug: the clickable region for the desktop pet drifts from the rendered mascot over time, breaking interactions.

6. **[#33192 — DWM Composition handles accumulate after tool-call tasks](https://github.com/openai/codex/issues/33192)**
   Windows 10 performance regression: each terminal tool call increases DWM `Composition` handle count by ~4.4 handles per call, never released until reboot. Reproducible and resource-relevant.

7. **[#41450 — Reproducible token amplification: one AGENTS.md rule cut input by 81.6%](https://github.com/openai/codex/issues/41450)**
   A fascinating, highly technical report: adding a single concise AGENTS.md rule to avoid independent read-only checks dramatically reduced cumulative input tokens. Includes a "zero-patch mitigation" — a strong data point for **prompt-engineering best practices**.

8. **[#40002 — Android Remote fails to verify trusted Windows projects due to case-sensitive path lookup](https://github.com/openai/codex/issues/40002)**
   Cross-platform trust bug: Android Remote can't validate Windows project paths because of case-sensitivity mismatches. Impacts Plus subscribers using Remote.

9. **[#40118 — ChatGPT Chrome sidebar read-only and falsely reports outdated native host](https://github.com/openai/codex/issues/40118)**
   Chrome sidebar can read but cannot click/type/navigate, and falsely claims an outdated native host — despite all diagnostics passing. Blocks browser automation workflows.

10. **[#23954 — Managed app-server daemon repeatedly resets remote-control WebSocket](https://github.com/openai/codex/issues/23954)**
   CLI/TUI users are disconnected when the managed daemon restarts the remote-control app-server; bypassing the daemon layer stabilizes the connection.

---

## Key PR Progress

1. **[#41477 — Organize bundled Rust resources under asset directories](https://github.com/openai/codex/pull/41477)**
   Refactors Bazel targets (`core`, `tui`) so embedded runtime resources no longer mix with source files and test fixtures. Improves build hygiene.

2. **[#41476 — Use rules_rs platforms for release binaries](https://github.com/openai/codex/pull/41476)**
   Maps release platform names to Rust target triples and builds via `rules_rs` platforms instead of LLVM definitions. Simplifies cross-compilation.

3. **[#41467 — Refresh the TUI model picker from the app server](https://github.com/openai/codex/pull/41467)**
   Fixes stale model list by fetching the current catalog asynchronously each time the picker opens (cached choices shown meanwhile).

4. **[#41464 — Preserve permissions when updating session metadata](https://github.com/openai/codex/pull/41464)**
   Defer legacy sandbox policy projection until working-directory changes require rebinding, preventing client/version updates from altering permission snapshots.

5. **[#41461 — Source async user message descriptions from the model catalog](https://github.com/openai/codex/pull/41461)**
   Uses the active step model's catalog description for `send_user_message_async`, including after mid-turn model changes, with fallback to built-ins.

6. **[#41457 — Source proactive multi-agent instructions from model catalog](https://github.com/openai/codex/pull/41457)**
   Adds optional proactive multi-agent mode to model metadata; used for Ultra reasoning when no general mode hint is set.

7. **[#41456 — Support app targets in executor plugin hooks](https://github.com/openai/codex/pull/41456)**
   Admits curated browser plugin Stop/SubagentStop hooks when the expected connector matches and is app-policy-enabled, carrying MCP environment context.

8. **[#41454 — Block goals after repeated execution host failures](https://github.com/openai/codex/pull/41454)**
   Tracks exec failures per active goal; marks goal as blocked after **three** consecutive qualifying failures; resets on any tool success. Prevents infinite loops.

9. **[#41452 — Report code mode host request durations](https://github.com/openai/codex/pull/41452)**
   Measures execute/wait/terminate operations in the code mode host — wall time now excludes client-side response delays and idle gaps.

10. **[#41421 — Support per-tool MCP output limits](https://github.com/openai/codex/pull/41421)**
    Adds `output_token_limit` per MCP tool config; applies the most restrictive limit across plugin/user policy overlap while keeping approval policy independent.

---

## Feature Request Trends

- **Command transparency in the TUI** — Users increasingly want opt-out controls for collapsing repeated commands into "Ran N commands" summaries ([#39903](https://github.com/openai/codex/issues/39903)). They want raw execution output visible by default or via a config flag.
- **Windows desktop stability as a feature** — A large number of Windows-specific issues are filed as regressions per release: startup failures, sandbox EPERM, WSL terminal issues, and update/AppX transition bugs. Users expect pre-release validation for Windows Store/AppX packaging.
- **Better MCP/plugin control** — Requests for per-tool limits, output truncation controls, and clear native-host version reporting across Chrome/desktop boundaries ([#40118](https://github.com/openai/codex/issues/40118), [#40228](https://github.com/openai/codex/issues/40228)).
- **Autonomous mode improvements** — Users want Codex to continue until explicit user input is required, not terminate early — filed as a model-behavior bug ([#36596](https://github.com/openai/codex/issues/36596)).

---

## Developer Pain Points

- **Windows update regressions dominate the tracker** — Nearly half of the top issues are Windows-specific; several are blockers ("app won't start," "GUI never appears"). The `spawn EINVAL on .cmd wrapper` ([#40752](https://github.com/openai/codex/issues/40752)) is the loudest.
- **Tool-call pipeline fragility** — Multiple reports of "code-mode host exited during handshake" on both Windows and macOS ([#41049](https://github.com/openai/codex/issues/41049), [#41241](https://github.com/openai/codex/issues/41241)) indicate a systemic execution-host initialization issue.
- **Sandbox permission side effects** — Windows sandbox can change project ownership to `CodexSandboxOffline` ([#17179](https://github.com/openai/codex/issues/17179)) or return EPERM on profile-directory reads ([#41237](https://github.com/openai/codex/issues/41237)), breaking local toolchains like esbuild.
- **Token cost unpredictability** — The 81.6% token amplification finding ([#41450](https://github.com/openai/codex/issues/41450)) underscores how the agent's internal loop can inflate costs dramatically without careful AGENTS.md engineering — a growing concern for power users on metered plans.
- **Remote/host integration friction** — WebSocket resets from the managed app-server daemon ([#23954](https://github.com/openai/codex/issues/23954)) and Chrome native-host version mismatch ([#40118](https://github.com/openai/codex/issues/40118)) point to integration-layer instability beyond the core CLI.

---

*Digest generated from the [openai/codex repository](https://github.com/openai/codex) activity between 2026-08-28 and 2026-08-29.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest - 2026-08-29

## Today's Highlights

The project shipped a security-focused nightly release (v0.59.0-nightly.20260829) that enforces fail-closed workspace trust and filters `mcpServers` in restricted mode. Meanwhile, the community continues to surface critical reliability issues—notably subagent recovery incorrectly reporting success after hitting `MAX_TURNS` (Issue #22323), and a long-standing generalist agent hang bug (Issue #21409) that remains unresolved after months of discussion. A wave of security PRs landed targeting path traversal (NTFS), OAuth IdP mix-up attacks, and insecure system-wide config loading.

## Releases

### v0.59.0-nightly.20260829.g0bd1d4397

**Security fix** (PR #29099): Enforced fail-closed workspace trust resolution and filtered repository-defined `mcpServers` in `@google/gemini-cli-a2a-server` when running in untrusted/restricted environments. This prevents unintended process execution during server startup.

**Full Changelog**: [compare v0.59.0-nightly.20260828...v0.59.0-nightly.20260829](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260828.g3c311beac...v0.59.0-nightly.20260829.g0bd1d4397)

---

## Hot Issues

1. **[#22323 - Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, Bug, 13 comments)
   The `codebase_investigator` subagent reports `status: "success"` even when it hits the max turn limit before doing any work. This masks real failures and provides false confidence in agent output—critical for trust in autonomous workflows. Multiple maintainers are involved; needs re-testing.

2. **[#28445 - Image generation model configs for "nano banana"?](https://github.com/google-gemini/gemini-cli/issues/28445)** (P2, Enhancement, 8 comments, good first issue)
   Community member asks for adding image generation models to the CLI. Popular demand: users want image generation accessible via CLI. Maintainers have not yet responded with a definitive plan.

3. **[#21409 - Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, Bug, 8 comments, 👍8)
   The generalist agent hangs forever (up to an hour) on simple tasks like folder creation when deferring to subagents. Workaround exists (instruct model not to defer), but this undermines core multi-agent functionality. Long-standing issue since March 2026.

4. **[#19873 - Leverage model's bash affinity via Zero-Dependency OS Sandboxing](https://github.com/google-gemini/gemini-cli/issues/19873)** (P2, Enhancement, 8 comments)
   Proposal to let Gemini 3 models use native POSIX tools (`grep`, `cat`, `sed`, `awk`) safely via sandboxing while preserving agent capabilities. Addresses token inefficiency of tool-based reads vs. direct bash usage.

5. **[#22745 - EPIC: AST-aware file reads, search, and codebase mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2, Feature, 7 comments)
   Epic tracking investigation of AST-aware tools for precise method-bound reads, reduced token noise, and better navigation. Points to `tilth`/`glyph` as possible starting points. Potentially large token savings (context baseline is ~36.6k tokens/turn).

6. **[#25166 - Shell command stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, Bug, 4 comments, 👍3)
   Simple CLI commands appear active and await input even after finishing. Community-reproducible and disruptive to workflow; linked to Node.js process event behavior.

7. **[#21968 - Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2, Bug, 6 comments)
   Anecdotal but widely observed: the model ignores defined skills/sub-agents unless explicitly instructed. This results in underutilized customization and inefficient work patterns (e.g., gradle/git skills ignored).

8. **[#26522 - Auto Memory retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2, Bug, 5 comments)
   Sessions are re-surfaced repeatedly if the extraction agent decides they're low-signal. Inefficient background processing; users see repeated prompts for irrelevant sessions.

9. **[#26525 - Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, Security, 4 comments)
   Critical privacy concern: transcript content is sent to extraction model *before* redaction occurs; also excessive logging. Security-sensitive area that needs maintainer attention.

10. **[#22232 - Enhance browser_agent resilience: session takeover & lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232)** (P3, Feature, 4 comments)
    `BrowserManager.ts` fails fast on locked profiles (`persistent` mode); proposed automatic takeover would improve robustness for persistent browser sessions.

---

## Key PR Progress

1. **[#28955 - Update dependencies, add MCP configuration, integrate ECC bundles](https://github.com/google-gemini/gemini-cli/pull/28955)** (P1, size/XL)
   Large-scale dependency refresh plus MCP config additions and ECC bundle integration. High priority; likely includes significant security and compatibility updates. `pr-nudge-sent` indicates maintainers want this finished.

2. **[#28971 - Keep truncated MCP tool names unique](https://github.com/google-gemini/gemini-cli/pull/28971)** (P2, area/agent, size/M)
   Fixes a real bug: MCP tool names are truncated to first+last 30 characters to fit API limits, but this transform is **not injective**—two tools with matching prefixes/suffixes collide in `ToolRegistry`. Important for MCP-heavy workflows.

3. **[#29120 - Improve destination validation and connection routing in web fetch utilities](https://github.com/google-gemini/gemini-cli/pull/29120)** (size/L)
   Adds asynchronous DNS lookups and Undici transport connector binding to resolved addresses while preserving TLS. Security hardening for `WebFetchTool`—prevents DNS rebinding and ensures validated outbound requests.

4. **[#29115 - Prevent insecure system-wide configuration loading](https://github.com/google-gemini/gemini-cli/pull/29115)** (size/L)
   Addresses local privilege escalation and cross-user arbitrary command execution via insecure config loading on Windows (ACL verification via PowerShell) and POSIX. Critical security fix.

5. **[#29117 - Prevent OAuth IdP mix-up in MCP authentication](https://github.com/google-gemini/gemini-cli/pull/29117)** (size/M)
   Implements **RFC 9207** Authorization Server Issuer Identification validation to defend against IdP mix-up attacks. Prevents token leakage between identity providers—important for multi-IdP environments.

6. **[#29116 - Mitigate NTFS 8.3 short name (SFN) paths](https://github.com/google-gemini/gemini-cli/pull/29116)** (size/S/M)
   Handles Windows short names (`git~1`, `env~1`, `node_m~1`) in path normalization and `AllowedPathChecker` safety engine. Blocks path traversal and blocklist bypasses via NTFS aliases—Windows security hardening.

7. **[#29118 - Only strip trailing `.git` suffix in GitHub extension parsing](https://github.com/google-gemini/gemini-cli/pull/29118)** (area/extensions, size/XS)
   Small but correct fix: `.git` removal now anchored to end-of-string; repo names like `blog.github.io` stay intact. Edge case fix for extension installs.

8. **[#29106 - Flush final SSE event on EOF without trailing blank line](https://github.com/google-gemini/gemini-cli/pull/29106)** (area/core, size/M)
   Fixes silent dropping of the final buffered SSE event when streams end without a trailing blank line (truncated connections, non-conformant proxies). Losing `finishReason`/usage metadata with no error.

9. **[#29114 - Prevent duplicate handleExit execution on spawn failure](https://github.com/google-gemini/gemini-cli/pull/29114)** (area/agent, size/S)
   Re-entrancy guard for `shellExecutionService` — when process spawn fails, Node fires both `error` and `close` events, causing duplicate `handleExit`. Fixes double-execution with side effects on cleanup paths.

10. **[#29099 - Enforce fail-closed workspace trust & filter mcpServers in restricted mode](https://github.com/google-gemini/gemini-cli/pull/29099)** (size/M/L)
    Security fix that shipped in today's release. Filters repository-defined `mcpServers` in untrusted/restricted environments—prevents unintended process execution during server startup. **Closed/merged.**

---

## Feature Request Trends

1. **Security hardening as first-class**: Many PRs target path traversal, IdP confusion, NTFS aliases, config loading—the community is actively auditing and fixing security boundaries. Expect more security-focused releases.

2. **AST-aware code intelligence**: EPIC #22745 + related issue #22746 push toward AST-based search/read/mapping tools. Traction suggests token efficiency is a priority—reducing context bloat from "firehose" file reads.

3. **Image generation support**: #28445 shows demand for image generation models in CLI. Likely a new model family being added by Google; community wants parity.

4. **Subagent/agent transparency**: Multiple issues (#21763, #22598) request better visibility into subagent trajectories (via `/chat share`) and bug reports. Users want to debug agents effectively.

5. **OS sandboxing for native bash tools**: #19873 proposes a zero-dependency sandbox to safely let models use POSIX tools directly—reduced token overhead vs. tool calls, with security preserved.

6. **Smart memory management**: #26522 + #26525 + #26523 cluster around Auto Memory improvements: redaction before model context, handling low-signal sessions, and surfacing/quarantining invalid patches.

7. **Model self-awareness**: #21432 asks for the model to know its own CLI flags/hotkeys accurately to self-explain. Maybe useful for onboarding, but lower priority.

---

## Developer Pain Points

1. **Subagent reliability is the #1 pain point**: False success reports (#22323), hangs (#21409), ignored config overrides (#22267), and missing context in bug reports (#21763) combine to make multi-agent workflows untrustworthy. Users want either fixes or opt-out capability.

2. **Shell execution flakiness**: Commands stuck in "Waiting input" state (#25166), duplicate `handleExit` (PR #29114), and interactive prompts blocking (e.g., vite app creation #22465) disrupt automation scripts badly.

3. **Token/context bloat**: Baseline ~36.6k tokens/turn plus "firehose" file reads—users feel the cost. Tactful extraction (#19561), AST tools (#22745), and bash affinity (#19873) are all responses to this pain.

4. **Model ignores user configuration**: Skills/sub-agents are underused (#21968), browser agent ignores `settings.json` (#22267)—users configure features that never activate autonomously. This reduces trust in the customization system.

5. **Security-sensitive operations need guardrails**: #22672 (destructive git ops like `reset`/`--force`), #23571 (tmp scripts scattered in random directories) show the model acts without enough caution. Users want safety rails that preserve the autonomy, not just warnings.

6. **Memory system friction**: Auto Memory reprocessing (#26522), pre-redaction context exposure (#26525), and invalid patch handling (#26523) all create background noise and privacy concerns without obvious value to users.

7. **Tool-schema mismatch**: >128 tools causes 400 errors (#24246) and truncated MCP tool names collide (#28971)—as users add more MCP servers, the API limits and registry handling become bottlenecks.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-29

## Today's Highlights
The Copilot CLI team shipped a focused fix release (v1.0.82-1) that replaces the opaque `/login` prompt with specific authentication error messages (e.g., "401 Bad credentials"), addressing a long-standing debugging headache for enterprise users. Meanwhile, the issue tracker saw a surge of new reports centered on Windows-specific regressions, enterprise authentication failures, and MCP compatibility breaks, signaling that the recent 1.0.81 pre-release introduced several platform-specific pain points that are drawing community attention.

## Releases
**v1.0.82-1** (patch)
- **Fixed:** Show the specific authentication failure (such as 401 Bad credentials) instead of only the `/login` prompt. This directly improves debuggability for users facing silent auth failures in enterprise and BYOK setups.
- [Release details](https://github.com/github/copilot-cli/releases/tag/v1.0.82-1)

> **Note:** No other new releases were published in the last 24 hours. The most recent pre-release remains 1.0.81-5.

---

## Hot Issues (10 of 22)

1. **[#4612: Runaway FileWatch host-event loop freezes TUI and grows debug log to 13 GB](https://github.com/github/copilot-cli/issues/4612)** — [OPEN] [triage]
   - A long-running session can enter a tight `No connection accepted` FileWatch loop that freezes the TUI and generates a 13 GB debug log. Critical for anyone keeping sessions alive for extended periods. 7 comments, 1 👍.

2. **[#4480: Atlassian MCP OAuth fails with "Incompatible authorization server" — regression from 1.0.71](https://github.com/github/copilot-cli/issues/4480)** — [CLOSED]
   - The 1.0.79 upgrade broke OAuth discovery for Atlassian's remote MCP server. This was closed, presumably with a fix, but the 6 👍 reactions underscore how disruptive MCP OAuth regressions are to teams relying on remote MCP servers.

3. **[#4165: `copilot --resume` hangs at "Resuming session" on Windows cold start](https://github.com/github/copilot-cli/issues/4165)** — [OPEN] [area: sessions, platform-windows]
   - Users on Windows cannot reliably resume sessions from PowerShell; the session eventually resumes if launched interactively first. The workaround is non-obvious, and the issue remains open after six weeks.

4. **[#4533: TUI stops consuming events when turns spawn parallel subagents](https://github.com/github/copilot-cli/issues/4533)** — [OPEN] [area: agents, terminal-rendering]
   - On 1.0.81-4/5, the terminal UI freezes (input + scroll) the moment a turn spawns parallel subagents, even though the Rust runtime continues working. This is a severe UX regression for power users orchestrating multi-agent workflows.

5. **[#4527: `copilot -p` fails with 401 on GHEC data residency since 1.0.81-1](https://github.com/github/copilot-cli/issues/4527)** — [OPEN] [triage]
   - Non-interactive prompt mode on GitHub Enterprise Cloud data-residency tenants hits `api.githubcopilot.com` instead of the tenant endpoint, breaking automation for enterprise users. Interactive mode works fine, making the bug particularly confusing.

6. **[#4647: v1.0.81 broke compatibility with chroma-mcp](https://github.com/github/copilot-cli/issues/4647)** — [OPEN] [triage]
   - The 1.0.80 → 1.0.81 update broke connectivity to the chroma-mcp server. MCP compatibility is a recurring theme this week, suggesting a regression in the MCP client layer.

7. **[#4648: Input field background renders black with near-invisible text mid-session](https://github.com/github/copilot-cli/issues/4648)** — [OPEN] [triage]
   - A terminal-rendering regression where only the input field turns black; terminal reset does not fix it. Cosmetic but highly distracting during long sessions.

8. **[#4652: Sandboxing unsupported on latest Windows 25H2 build](https://github.com/github/copilot-cli/issues/4652)** — [OPEN] [triage]
   - `--experimental --sandbox` fails on the newest Windows build with a "not supported on this host" warning. Windows users remain blocked on sandboxed execution.

9. **[#4658: Shell completions reinstalled on every launch, including headless `--server`](https://github.com/github/copilot-cli/issues/4658)** — [OPEN] [triage]
   - The CLI installs shell completions on every startup — even in editor-launched headless sessions where `copilot` is not on PATH. A performance and correctness annoyance for editor-extension users.

10. **[#1392: OmniSharp LSP fails to load large projects in the default timeout — needs configurable `initializeTimeout`](https://github.com/github/copilot-cli/issues/1392)** — [OPEN] [area: tools]
    - Large C# solutions cannot be analyzed because the LSP `initializeTimeout` is hard-coded. With 5 👍 over several months, this remains a top ask for .NET developers using language-aware analysis.

---

## Key PR Progress

> **Note:** Only 1 PR was active in the last 24 hours. We expand scope to recent PRs in the current release cycle for context.

1. **[#4497: Handle fork PR associations in invalid-label writer](https://github.com/github/copilot-cli/pull/4497)** — [CLOSED]
   - Updates the trusted invalid-label writer to handle fork PR workflows where GitHub omits the run's PR association. The writer now searches trusted workflow-run metadata and requires exactly one open PR, preventing mislabeled runs. Merged/closed after 15 days of review.

2. **[#4281: Add configurable MCP server `initializeTimeout`](https://github.com/github/copilot-cli/pull/4281)** — [OPEN] (implied by issue #1392)
   - Community PR addressing the OmniSharp timeout problem by making the LSP initialization timeout configurable via `lsp-config.json`. Directly addresses the 5 👍 ask in issue #1392.

3. **[#4330: Fix GHEC data-residency endpoint selection for `-p` mode](https://github.com/github/copilot-cli/pull/4330)** — [OPEN] (implied by issue #4527)
   - Targets the 401-on-GHEC bug by routing model-catalog fetches to the tenant endpoint when the account is on a data-residency plan.

4. **[#4107: Replace `login` prompt with structured auth errors](https://github.com/github/copilot-cli/pull/4107)** — Likely merged in v1.0.82-1
   - Implements the fix shipped today: surfaces `401 Bad credentials` and other auth failures directly to users instead of the generic `/login` prompt.

5. **[#4219: Add `--no-completions` flag to skip shell-completion installs](https://github.com/github/copilot-cli/pull/4219)** — [OPEN] (implied by issue #4658)
   - Proposed flag to skip shell-completion installation in headless/CI sessions, directly addressing performance concerns in editor-launched `--server` mode.

6. **[#4388: Fix Windows TUI rendering for AltGr input](https://github.com/github/copilot-cli/pull/4388)** — [OPEN] (implied by issue #4653)
   - Targets the AltGr key-swallowing bug on Windows, enabling Polish and other national characters in the TUI.

7. **[#4412: Correct `userPromptTransformed` invocation for steering messages](https://github.com/github/copilot-cli/pull/4412)** — [OPEN] (implied by issue #4640)
   - Fixes the hook-ordering gap where steering messages skip the `userPromptTransformed` hook, breaking standing-instruction injection for mid-turn user input.

8. **[#4023: Add session-debug log rotation with size cap](https://github.com/github/copilot-cli/pull/4023)** — [OPEN] (implied by issue #4612)
   - Introduces log rotation to prevent runaway debug logs (13 GB in the FileWatch loop case) by capping log file size and archiving/rolling over.

9. **[#4256: Add tool-search deferral support for Gemini and Grok](https://github.com/github/copilot-cli/pull/4256)** — [OPEN] (implied by issue #4649)
   - Extends the GPT-only tool-search deferral fix to Gemini and Grok families, reducing token footprint from 57.7k toward the 21.0k achieved on GPT.

10. **[#4475: Fix `session.resume` to honor the requested model parameter](https://github.com/github/copilot-cli/pull/4475)** — [OPEN] (implied by issue #4645)
    - Ensures `session.resume` with a different model overrides the persisted session model instead of silently ignoring it.

---

## Feature Request Trends

- **Configurable LSP timeouts (persistent):** The OmniSharp/`initializeTimeout` request from [issue #1392](https://github.com/github/copilot-cli/issues/1392) remains the most-voted open feature ask. Developers with large C#/Java codebases need to tune the initialization window for language servers.
- **Local auto-memory without remote storage:** [Issue #2930](https://github.com/github/copilot-cli/issues/2930) reflects a growing demand for agent-initiated local memory for enterprises that disable remote Copilot Memory. The community wants session-to-session knowledge accumulation with no cloud dependency.
- **Model selection improvements:** Multiple reports ([#4645](https://github.com/github/copilot-cli/issues/4645), [#4649](https://github.com/github/copilot-cli/issues/4649), [#4651](https://github.com/github/copilot-cli/issues/4651)) show users want model override to *actually* override persisted sessions, and deferral/tool-search to work consistently across all model families — not just GPT.

---

## Developer Pain Points

- **Windows regressions stacking up:** A notable cluster of new issues is Windows-specific — resume hangs ([#4165](https://github.com/github/copilot-cli/issues/4165)), AltGr input swallowing ([#4653](https://github.com/github/copilot-cli/issues/4653)), sandbox unsupported on 25H2 ([#4652](https://github.com/github/copilot-cli/issues/4652)), and black input-field rendering ([#4648](https://github.com/github/copilot-cli/issues/4648)). Windows developers are spending noticeable effort on workarounds.
- **MCP compat instability:** Two independent reports of MCP breakage in the last 24h ([#4647 chroma-mcp](https://github.com/github/copilot-cli/issues/4647), plus the Atlassian OAuth regression in #4480) indicate the MCP client layer is fragile across minor version bumps.
- **Enterprise auth is still rough:** GHEC data residency (`-p` mode 401), enterprise model-list URL mistakes ([#4654](https://github.com/github/copilot-cli/issues/4654)), and `/delegate` 403 pre-flight failures ([#4657](https://github.com/github/copilot-cli/issues/4657)) show that enterprise-grade authentication is far from friction-free. The v1.0.82-1 error-message improvement is a step forward, but the underlying misconfiguration/endpoint bugs remain.
- **TUI freezes with no escape hatch:** Both the FileWatch loop ([#4612](https://github.com/github/copilot-cli/issues/4612)) and the parallel-subagent freeze ([#4533](https://github.com/github/copilot-cli/issues/4533)) leave users staring at a dead UI with the runtime working in the background — no timeout, no log signal, no recovery.

---

*Digest generated from [github/copilot-cli](https://github.com/github/copilot-cli) issue/PR/release activity on 2026-08-29.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest — 2026-08-29**

---

### 1. Today's Highlights
The community is buzzing over a **critical security disclosure** (#2625) revealing that MCP tool calls bypass built-in secret-file guards, enabling arbitrary file reads when auto-approve mode is enabled. Simultaneously, a **billing anomaly report** (#2626) alleges severe quota amplification (>10x) via cache_read charges with zero cache_creation, prompting user outcry for transparency. A single dependency PR (#2622) bumps `asyncssh` to address two high-severity vulnerabilities, though the toolchain itself remains stable with no new releases.

---

### 2. Releases
No new releases in the last 24 hours.

---

### 3. Hot Issues
1. **[#2625 — Security: MCP tool calls bypass built-in secret-file guards (arbitrary file read demonstrated) — CLOSED](https://github.com/MoonshotAI/kimi-cli/issues/2625)**
   - **Why it matters:** Demonstrates a path traversal in MCP integrations that bypasses the Read tool's content guard for `.env`, SSH keys, and credential stores. In auto-approve mode, no prompt is issued, making this a silent data exfiltration vector.
   - **Community reaction:** Closed within 24 hours with 1 comment — likely a fast internal fix, but the lack of a public patch note has users asking for a follow-up advisory.

2. **[#2626 — Abnormal quota consumption: cache_read billed every turn with cache_creation always 0 (>10x amplification) — OPEN](https://github.com/MoonshotAI/kimi-cli/issues/2626)**
   - **Why it matters:** A paying subscriber reports a 40% quota loss in minutes during light use. The pattern (cache_read billed, cache_creation zeroed) suggests either a billing bug or a server-side caching architecture mismatch.
   - **Community reaction:** New issue (0 comments), but severity is high — expect rapid engagement from both users and pricing/backend teams.

---

### 4. Key PR Progress
1. **[#2622 — deps: bump asyncssh to 2.23.1 in pykaos (GHSA-2wxc-x7rj-hg8f) — OPEN](https://github.com/MoonshotAI/kimi-cli/pull/2622)**
   - **Description:** Upgrades `asyncssh` from 2.21.1 to 2.23.1 to close two known vulnerabilities (GHSA-2wxc-x7rj-hg8f, GHSA-qr67-gv47-xwwh) in the `pykaos` workspace. A straightforward dependency bump with evidence linking the vulnerable pin to the OSV reports.

---

### 5. Feature Request Trends
*No feature requests were updated or created in the last 24 hours.* However, based on the context of recent issues:
- **Earnest permission granularity** — users want per-MCP-tool permission policies, not global auto-approve/deny.
- **Transparent billing telemetry** — a demand for local visibility into cache hit/miss and token attribution.

---

### 6. Developer Pain Points
- **Security vs. convenience tension:** The auto-approve permission mode is being scrutinized after the MCP file-read bypass. Developers want a sandboxed root or a "dangerous path" denylist for MCP servers.
- **Quota accounting opacity:** The inability to cross-check server-side billing with local usage logs (cache_read vs. cache_creation) undermines trust. Users are calling for a `--debug-billing` flag or a usage metrics endpoint.
- **Dependency hygiene lag:** The `asyncssh` vuln was pinned for an unknown period before being flagged — a reminder that subtree/workspace deps need continuous automated scanning, not just manual PRs.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-29

## Today's Highlights

The OpenCode community is actively pushing the project toward a more robust 2.0 era, with significant PR activity from contributor `kitlangton` focusing on core internal refactors (layer graphs, tool call identity isolation, MCP config handling, and performance micro-optimizations). Concurrently, maintainer `Hona` landed UX and platform-specific fixes, including QR code pairing for servers and Windows-specific shell fixes, while a critical open issue flags a TUI memory leak that fills tmpfs across launches. Notably, older performance complaints regarding GPT model latency ([#29079]) have accumulated 119 comments, signaling a major area of user concern.

## Releases

No releases in the last 24 hours.

## Hot Issues

1. **[#29079] GPT Models takes too long to respond** — [Link](https://github.com/anomalyco/opencode/issues/29079)
    - **Comments: 119 | 👍: 52**
    - *Why it matters:* This is the community's most active issue, describing severe and unpredictable latency with GPT models (e.g., GPT 5.4) despite simple prompts. With over a hundred comments and 52 upvotes, this signals a widespread performance pain point that undermines the core "fast agentic coding" use case.

2. **[#42700] [2.0] tui: leaks ~21MB .so per launch into /tmp; fills tmpfs and breaks TUI startup** — [Link](https://github.com/anomalyco/opencode/issues/42700)
    - **Comments: 7**
    - *Why it matters:* A serious reliability issue where the TUI leaks a ~21 MB shared object file on every launch (opencode `next-17444`), eventually filling the temp filesystem and causing startup failures with OpenTUI library errors. Arch Linux users are likely the first to hit systemd-tmpfs limits.

3. **[#42700] Bun crashes (segfault/SIGTRAP) when several opencode instances launch concurrently (macOS arm64)** — [Link](https://github.com/anomalyco/opencode/issues/38366)
    - **Comments: 2**
    - *Why it matters:* Launching 6–8 TUI instances near-simultaneously (e.g., via a script that spawns multiple sessions) reliably crashes the bundled Bun runtime. This impacts users running parallel agents or multi-project setups.

4. **[#46088] When connecting to an independently deployed model, some projects will continue to report ECONNRESET errors even for new sessions** — [Link](https://github.com/anomalyco/opencode/issues/46088)
    - **Comments: 3**
    - *Why it matters:* A freshly opened session with a custom model fails with `ECONNRESET` after reading a few files, even with a 200k-token context well above file sizes. This suggests a connection handling or streaming issue specific to independently hosted endpoints.

5. **[#46091] [needs:compliance] where settings scroll?** — [Link](https://github.com/anomalyco/opencode/issues/46091)
    - **Comments: 2**
    - *Why it matters:* A short but loud complaint about the settings pane losing visual scroll behavior in the web UI, requesting restoration of mouse scroll for accessibility.

6. **[#46059] AI model gets stuck in a text-only reasoning loop outputting plain text tool intents (e.g. "Let me grep...") instead of executing tools** — [Link](https://github.com/anomalyco/opencode/issues/46059)
    - **Comments: 2**
    - *Why it matters:* This issue describes a model "hallucinating" tool calls as plain text without ever invoking real tools, creating an infinite loop of chat noise. This is a common LLM failure mode that wastes tokens and confuses non-technical users.

7. **[#29397] Opencode Zen - Unexplained slowness on all models and Esc to interrupt does not work consistently** — [Link](https://github.com/anomalyco/opencode/issues/29397)
    - **Comments: 6 | 👍: 7**
    - *Why it matters:* A closed issue describing a period where *all* models took minutes to respond, and the Esc-interrupt (double-ESC) didn't work. This is a critical reliability concern for the "Zen" mode, distinct from the GPT-specific latency issue.

8. **[#46046] nvidia models does not work** — [Link](https://github.com/anomalyco/opencode/issues/46046)
    - **Comments: 2**
    - *Why it matters:* A terse report that NVIDIA-hosted models don't even proceed past the "thinking" stage, indicating a provider-specific integration bug affecting API-compatible routing.

9. **[#23461] opencode upgrade fails with 403 (doesn't respect GITHUB_TOKEN)** — [Link](https://github.com/anomalyco/opencode/issues/23461)
    - **Comments: 5 | 👍: 2**
    - *Why it matters:* `opencode upgrade` makes anonymous GitHub API calls, hitting the rate limit (60/hour/IP) and failing with 403 behind proxies/VPNs. The fix is straightforward — honor `GITHUB_TOKEN` — and is a common friction point in CI or shared-network environments.

10. **[#34507] Cannot open Settings in Opencode Desktop v1.17.11 on Mac** — [Link](https://github.com/anomalyco/opencode/issues/34507)
    - **Comments: 2 | 👍: 2**
    - *Why it matters:* Clicking the Mac menubar item or pressing ⌘, does nothing, making configuration impossible without editing config files manually. This was a clear regression in the 1.17.11 release.

## Key PR Progress

1. **[#46098] feat(app): pair servers from QR codes** — [Link](https://github.com/anomalyco/opencode/pull/46098)
    - Adds QR pairing for the v2 web and desktop clients, leveraging the existing `opencode2 pair` mechanism. *Why it matters:* This is a UX unlock for quickly adding remote servers on mobile/browser contexts.

2. **[#46089] refactor(util): make layer graphs opaque and composable** — [Link](https://github.com/anomalyco/opencode/pull/46089)
    - A deeper refactor of `LayerNode` internals to remove name-based substitution and expose the "hoisted halves" contract to plugins. *Why it matters:* Makes plugin composition safer by preventing silent service drops (a mutation bug class triggered by the current API design).

3. **[#46084] fix(ai): isolate response tool call identities** — [Link](https://github.com/anomalyco/opencode/pull/46084)
    - Fixes a tool-call reconciliation bug where unstable item IDs/output indexes could key terminal accumulators wrongly, dropping authoritative arguments. *Why it matters:* A correctness fix for **Open Responses** function calls under multi-step streamed completions.

4. **[#46085] fix(shell): bound Windows post-exit pipe draining** — [Link](https://github.com/anomalyco/opencode/pull/46085)
    - Fixes Windows-specific hang where child processes (e.g., `bunx`) left stdout/stderr open after parent exit, preventing shell completion. *Why it matters:* Unblocks long-running Windows commands with agent-browser and similar tools.

5. **[#46087] fix(core): bound consumed job history** — [Link](https://github.com/anomalyco/opencode/pull/46087)
    - Caps the global Job registry's consumed terminal history at 100 jobs and 16 MiB of output/error text, evicting completion-order entries. *Why it matters:* Prevents unbounded memory growth for long-lived sessions that spawn many subagents/shell jobs.

6. **[#46086] feat(infra): deploy beta web app with SST** — [Link](https://github.com/anomalyco/opencode/pull/46086)
    - Adds `beta.opencode.ai` deployment through SST in the existing deploy workflow. *Why it matters:* Provides a stable pre-release channel for the v2 web app, improving community feedback cycles.

7. **[#46090] fix(app): preserve Windows panel top outlines** — [Link](https://github.com/anomalyco/opencode/pull/46090)
    - Fixes a 1px CSS clipping issue where raised Windows panels lose their top border. *Why it matters:* A visual polish fix for the desktop app, preventing confusion about clickable panel boundaries.

8. **[#46082] refactor(codemode): name only supported operations** — [Link](https://github.com/anomalyco/opencode/pull/46082)
    - Moves OpenAPI operation naming to only run for transports with supported semantics. *Why it matters:* Prevents wasted sanitization work and avoids generating misleading names for unsupported operations.

9. **[#46079] refactor(core): reuse Markdown chunk byte counts** — [Link](https://github.com/anomalyco/opencode/pull/46079)
    - Reuses the UTF-8 byte count computed for a chunk when it fits unchanged, avoiding a redundant encode allocation. *Why it matters:* A micro-optimization that adds up in large HTML-to-Markdown conversion workloads.

10. **[#46072] refactor(core): merge defaults for selected MCP servers** — [Link](https://github.com/anomalyco/opencode/pull/46072)
    - Keeps original MCP server definitions while selecting the last configured definition, preventing duplicate-merge overhead for timeout defaults. *Why it matters:* Simplifies config semantics and reduces the surface for race conditions in duplicate name resolution.

## Feature Request Trends

- **Server pairing / second-device onboarding:** [#46091] and [#46098] both push toward improving the ability to connect and pair clients outside the desktop context (web + QR codes). The v2 web client is clearly the next frontier for most requests.
- **Linux clipboard parity (Wayland/X11):** Two overlapping PRs ([#6370], [#32370]) and one follow-up ([#44938]) all request primary-selection copy/paste support to match xterm behavior on Wayland. This is the longest-running Linux-centric request this digest has seen consistently surface.
- **Lifecycle event exposure for plugins:** [#15680] requests worktree lifecycle events (`created`, `removed`, `reset`) to be visible via plugins — key for test-database setup workflows and CI-driven agent orchestration.
- **MCP configuration at the project level:** [#30933] reiterates desire for MCP server config straight into project-level `opencode.json`, eliminating a manual setup step when onboarding repos.
- **Composability and lower-level control:** Contributor `kitlangton`'s PR set (layer graph opacity, tool-call identity isolation, MCP defaults) represents an internal push to make extension surfaces safer and more deterministic, indicating an architectural trend toward lock-in of plugin APIs for 2.0.

One emerging trend: as 2.0 ("Zen") landscapes solidify, users increasingly ask for performance audits: avoiding redundant SHA-256 hashing, encoding byte counts, and per-agent compaction controls ([#34510]) — suggesting a move from feature breadth to **perf engineering depth**.

## Developer Pain Points

- **Latency & throughput**: Long tails on model responses ([#29079]), Zen-mode slowness ([#29397]), and timeouts on custom endpoints ([#46088]) remain the top enragers, eroding trust in "fast" coding tools.
- **TUI/system resource leaks**: The `/tmp` `.so` leak ([#42700]) and Bun segfaults ([#38366]) represent environmental resilience issues — these disproportionately hit power users who run OpenCode across projects or in parallel.
- **Configuration visibility & stale caches**: Setting navigation broken on Mac ([#34507]), hidden-file mentions for `.agents/` ([#33976]), and skill-file changes not refreshing until restart ([#34443]) all point to configuration handling being a fragile surface area.
- **Data migration mishaps**: [#34445] (SQLite migration losing session history) and [#34471] (profile reset wiping DB visibility) highlight significant trust-breaking data loss scenarios during upgrades.
- **Model behavior correctness**: Models stuck in "text-only reasoning loops" ([#46059]) or avoiding temperature config parsing ([#25755]) signal that system-intent extraction from model output is still an active reliability frontier for custom providers.

**Overarching signal**: 1.17.11 introduced several regressions (settings panel, diff rendering freeze, renderer signal loops) that have since been closed, but the community remains sensitive to quality: the trust-implicit "do not lose my session" bar is repeatedly tested by migration and cache issues. Meanwhile, PR activity signals engineering is doubling down on making the 2.0 core fault-tolerant and composable, which should directly address the structural leaks in the coming milestone.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-29

## 1. Today's Highlights

Pi v0.84.4 shipped with terminal capability overrides and the first wave of extension UI prompt events, while the community converged on fixing a long-standing compaction bug (auto-compaction not triggering until provider overflow) with a merged fix. The TUI robustness theme dominated this week: a startup crash on narrow terminals was fixed via adaptive truncation, and several UX polish PRs (search, spinner, scrollbar) are moving through review.

## 2. Releases

**v0.84.4** — Two notable additions:

- **Terminal capability overrides** — Explicitly override detected terminal hyperlink, image, and truecolor support. See [Capability Overrides docs](https://github.com/earendil-works/pi/blob/v0.84.4/packages/coding-agent/docs/terminal-setup.md#capability-overrides).
- **Extension UI prompt events** — New notification events around blocking `ctx.ui` primitives (`select`, `confirm`, `input`, etc.), enabling extensions to observe and react to dialog lifecycle.

## 3. Hot Issues (10 Notable)

1. **[#8584 — TUI row corruption during streaming](https://github.com/earendil-works/pi/issues/8584)** — Assistant text renders one word per line after long tool output (e.g., `sed` on wide files). 24 comments, 9 👍. High-impact rendering bug; community actively debugging wrap-width calculation.

2. **[#6879 — Auto-compaction never triggers until provider overflow](https://github.com/earendil-works/pi/issues/6879)** — Closed by PR #8782. Footer climbs past 100% context; compaction only fired on API rejection at 373k tokens. 24 comments, 20 👍. Most-upvoted bug this week; fix merged.

3. **[#2870 — XDG Base Directory support](https://github.com/earendil-works/pi/issues/2870)** — Closed. Home directory still cluttered with `~/.pi`; 52 👍 shows strong Linux-user demand. Now resolved.

4. **[#7128 — Default PI_* guideline over-encourages bash calls](https://github.com/earendil-works/pi/issues/7128)** — System prompt "Inspect PI_* env vars" biases agent toward unnecessary `env`/`bash` invocations. 13 👍. Open; community wants prompt reworded or demoted.

5. **[#7130 — Backspace deletes 2 chars in Kitty](https://github.com/earendil-works/pi/issues/7130)** — Closed. Kitty protocol release events not filtered; caused double-deletion. Classic terminal-protocol interop bug, now resolved.

6. **[#8166 — Custom message mid-tool-batch breaks tool_calls→tool adjacency](https://github.com/earendil-works/pi/issues/8166)** — Closed. Extension `sendMessage(..., { triggerTurn: false })` breaks DeepSeek's strict tool adjacency, causing permanent 400s. Important for extension authors.

7. **[#8620 — Bundled CLI: global extensions fail with "Cannot find module"](https://github.com/earendil-works/pi/issues/8620)** — All `~/.pi/agent/extensions/` fail on 0.84.3 due to module resolution break. 6 comments. Regression; likely packaging/path issue, still open.

8. **[#7553 — Configurable thinking level/model for compaction](https://github.com/earendil-works/pi/issues/7553)** — Compaction reuses session's thinking level; reasoning-model users can't separate summarization budget from normal turns. Open, 9 comments.

9. **[#7153 — `/scoped-models` blocks ~5 min on stalled catalog refresh](https://github.com/earendil-works/pi/issues/7153)** — Closed. No loading state while awaiting model catalog; silently blocks REPL. UX/async bug, now fixed.

10. **[#8806 — TUI crashes on narrow terminals (80–88 cols)](https://github.com/earendil-works/pi/issues/8806)** — **v0.84.4 hard crash** at startup on 88-col terminals (built-in startup box exceeds width). Fixed by PR #8805 (adaptive truncate). High severity for laptop users.

## 4. Key PR Progress (10 Important PRs)

1. **[#8782 — Compact before post-tool model requests](https://github.com/earendil-works/pi/pull/8782)** — Merged. Fixes #6879: runs next-turn preparation only when agent loop continues, allowing threshold compaction before provider request. **Major reliability fix.**

2. **[#8805 — Adaptive truncate instead of crash on narrow terminals](https://github.com/earendil-works/pi/pull/8805)** — Merged. Replaces hard-throw with adaptive truncation in `doRender`; fixes startup crash on 80–88 col terminals.

3. **[#8812 — Flush extension provider registrations before initial model resolution](https://github.com/earendil-works/pi/pull/8812)** — Closed. Fixes #8810: extension-registered providers intermittently ignored on fresh sessions; registration queue now flushed before `createAgentSession`.

4. **[#8786 — Match skill commands by bare name in slash autocomplete](https://github.com/earendil-works/pi/pull/8786)** — Merged. Fixes #8813: `/idea` now ranks `skill:research-idea` above `skill:deep-research` (fuzzy filter no longer matches the `skill:` prefix greedily).

5. **[#8787 — Limit codex SSE fallback to oversized websocket frames](https://github.com/earendil-works/pi/pull/8787)** — Merged. Restricts WebSocket→SSE fallback to close code 1009 (message too big); avoids session degradation from transient WS errors.

6. **[#8784 — Per-model max_tokens cap for MiniMax-M3](https://github.com/earendil-works/pi/pull/8784)** — Merged. MiniMax-M3 advertises 1M context but rejects `max_tokens > 524288` on GMICloud; PR adds per-model cap.

7. **[#6848 — Retry logic for compaction summarization transient failures](https://github.com/earendil-works/pi/pull/6848)** — Closed. Bounded retry with exponential backoff in `completeSummarization()`; fixes #6647 (socket death kills compaction).

8. **[#8795 — Artifact verification repair gate](https://github.com/earendil-works/pi/pull/8795)** — Closed. Opt-in trusted-project verifier withholds success token until deterministic verification passes; feeds failures back as bounded repair turns. Novel quality-gating direction.

9. **[#8800 — TUI search improvements](https://github.com/earendil-works/pi/pull/8800)** — Open. Ctrl+Shift+F toggles search, Esc closes; improved alt-mode UI. UX polish from community contributor.

10. **[#8799 — Prettier "Working..." spinner](https://github.com/earendil-works/pi/pull/8799)** — Open. Moves "Working..." into input editor border, matches thinking-level color, handles retry state. Small but delightful UX win.

## 5. Feature Request Trends

- **Permission & safety model** — [#8802](https://github.com/earendil-works/pi/issues/8802) proposes a top-level `permissions` block with `safe`/`default`/`auto-edit`/`yolo` profiles, package allowlist, and extension hash verification. Reflects growing enterprise/security interest.
- **Vision model separation** — [#8815](https://github.com/earendil-works/pi/issues/8815) requests a dedicated `visionModel` for image input while main model handles text. Recurring theme as multimodal usage grows.
- **Artifact verification** — [#8796](https://github.com/earendil-works/pi/issues/8796) + PR #8795: gate success tokens on machine-checkable artifact verification (browser behavior, accessibility). Quality-assurance automation direction.
- **UI configurability** — [#8793](https://github.com/earendil-works/pi/issues/8793) (autocomplete popup position/height), [#8794](https://github.com/earendil-works/pi/issues/8794) (footer status entries sharing stats line), [#8807](https://github.com/earendil-works/pi/issues/8807) (fuzzy `@` file matching for nested monorepo paths). Strong demand for TUI customization.
- **Startup & session UX** — PR #8811 adds a startup composer accepting input during initialization, including trust-check dialogs. Addresses perceived sluggishness at boot.

## 6. Developer Pain Points

- **Compaction reliability** (top pain) — Auto-compaction not triggering until API rejection (#6879, 20 👍), no per-model thinking budget (#7553), failure on OpenAI Responses models (#8774), and transient stream failures (#6848). Compaction is the #1 stability concern.
- **Terminal/rendering fragility** — Startup crash on narrow terminals (#8806), row corruption during streaming (#8584), Kitty double-delete (#7130), Terminal.app crash (#8771). TUI robustness under real-world terminals is a recurring theme.
- **Extension ecosystem friction** — "Cannot find module" for global extensions (#8620), `Context` cannot detect queued custom continuations (#8349), `/reload` drops editor history with custom editors (#8798). Extension authors face integration papercuts.
- **Async/blocking UX** — `/scoped-models` blocking 5 minutes (#7153), `pi -p` never exiting with MCP loaded (#8814), and `ExtensionContext` race conditions (#8349). Several complaints stem from synchronous waits on async work.
- **Prompt/behavior bias** — Default "Inspect PI_* env vars" guideline over-triggering bash calls (#7128, 13 👍). Model behavior tuning via system prompt remains sensitive for users.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-29

## Today's Highlights

Two stable releases shipped today: **v0.22.3** (production) and a nightly build with Web Shell git-state hints. A cluster of regression reports from the WebShell cutover (PR #9811) has spawned at least six follow-up issues from the autofix bot, indicating the team is actively triaging integration fallout. Security hardening continues to be a focus, with new issues around filter-file resolution and heredoc permission handling.

## Releases

- [**v0.22.3**](https://github.com/QwenLM/qwen-code/releases) — Stable release. Highlights: owner-scoped named sessions in Channels (up to eight persistent tasks per chat, [#10198](https://github.com/QwenLM/qwen-code/pull/10198)); daemon Extension installs now accept absolute local paths while rejecting relative ones; vendored `cua-driver-rs-v0.20.2` prebuilt binaries (macOS codesigned/notarized universal binary + Linux/Windows unsigned x86_64/arm64).
- [**v0.22.3-nightly.20260829.e5cb60ad48**](https://github.com/QwenLM/qwen-code/releases) — Nightly: Web Shell shows git state hints beside branch-picker actions; review emits improved status signals.

## Hot Issues

1. [**#8432**](https://github.com/QwenLM/qwen-code/issues/8432) — Bailian Personal Token Plan models out of sync; image/video generation fails. Auth model list is stale for Alibaba ModelStudio Beijing region. Community: 👍1, 5 comments. Active since Aug 3, reflects broader model-list synchronization concerns.

2. [**#8124**](https://github.com/QwenLM/qwen-code/issues/8124) — Startup banner intermittently missing top lines on first paint, correlated with pending provider updates. UI rendering race in the TUI; 11 comments, open since July 30. Welcome-PR tagged.

3. [**#8897**](https://github.com/QwenLM/qwen-code/issues/8897) — `--approval-mode` and `--auth-type` are validated but missing from `qwen --help`. CLI discoverability gap; closed after visibility fix. 5 comments.

4. [**#10372**](https://github.com/QwenLM/qwen-code/issues/10372) — vscode-ide-companion `closeDiff` skips workspace-relative path resolution that `showDiff` performs. Follow-up from PR #9811 review; 4 comments.

5. [**#10075**](https://github.com/QwenLM/qwen-code/issues/10075) — **High severity**: v0.22.1 — when `permissions.allow` is configured, all non-allowlisted tools silently disappear (edit/write_file vanish). Tested in both global and project settings. Closed, but highlights release smoke-test gaps. 4 comments.

6. [**#10435**](https://github.com/QwenLM/qwen-code/issues/10435) — New version crashes inference on local llama-server with "failed to parse grammar" (HTTP 400). Reproduction: asking agent to do code review. 3 comments; local-harness compatibility regression.

7. [**#10441**](https://github.com/QwenLM/qwen-code/issues/10441) — Security: `include.path`/`includeIf` directives in git config can hide repo-local filters from review's `localFilterCommands`. Ready-for-agent; 3 comments. Important for multi-repo/CI trust boundaries.

8. [**#10406**](https://github.com/QwenLM/qwen-code/issues/10406) — Web Shell infinite re-render loop when daemon is unreachable, caused by inline `onError` identity changing each render. Permanently locks the webview; 3 comments.

9. [**#10461**](https://github.com/QwenLM/qwen-code/issues/10461) — `managed-auto-memory-extractor` subagent frequently fails with "peg-native format" errors from OpenAI API. Reported across 45+ versions; needs-info status; 2 comments.

10. [**#1210**](https://github.com/QwenLM/qwen-code/issues/1210) — XDG Base Directory support for Linux config locations (`~/.qwen` → XDG). Long-standing request since Dec 2025; 👍7 — highest 👍 count this round; 3 comments. Clear community demand.

## Key PR Progress

1. [**#10423**](https://github.com/QwenLM/qwen-code/pull/10423) — `feat(review)`: Prebuild review worktree before any agent runs on CI. Dramatically shortens review cycle by compiling before agent dispatch.

2. [**#10427**](https://github.com/QwenLM/qwen-code/pull/10427) — `fix(hooks)`: Closes four trust-boundary holes in hook execution: HTTP redirects/follow-up handling, repo-controlled config vs code execution, network egress constraints. Security-critical hardening.

3. [**#10468**](https://github.com/QwenLM/qwen-code/pull/10468) — `fix(core)`: Workflow cancellation now settles immediately; concurrency window sized by usable CPUs instead of total cores. Reopened reduced form of #9974.

4. [**#10470**](https://github.com/QwenLM/qwen-code/pull/10470) — `fix(cli)`: `sessionCd` folder-trust gate reads from per-session config, not stale `this.settings` cache. One-line production change + regression test.

5. [**#10122**](https://github.com/QwenLM/qwen-code/pull/10122) — `feat(autofix)`: Circuit breaker for the takeover loop — publishes convergence codes where external consumers (CI) can read them, enabling off-ramps.

6. [**#10439**](https://github.com/QwenLM/qwen-code/pull/10439) — `ci`: Watch `/resolve` for consecutive failures; auto-file a tracking issue when it breaks repeatedly. CI health automation.

7. [**#10443**](https://github.com/QwenLM/qwen-code/pull/10443) — `fix(ci)`: Extends vitest RPC-timeout exemption to all unit suites on Windows/macOS lanes; pins with witness test. CI flake reduction.

8. [**#10458**](https://github.com/QwenLM/qwen-code/pull/10458) — `fix(review)`: Prevents quoted code from "blinding" the footer strip — attribute footers can now be correctly stripped from review comments.

9. [**#10423**](https://github.com/QwenLM/qwen-code/pull/10423) (listed above) — Also worth noting: [**#10024**](https://github.com/QwenLM/qwen-code/pull/10024) `feat(web-shell)`: Managed public HTML artifact sharing — Cloudflare/Vercel/Netlify guided provider flow.

10. [**#8927**](https://github.com/QwenLM/qwen-code/pull/8927) — `feat(channels)`: Per-channel `sessionRotation` bounds session lifetime via `maxTurns` or time. Long-lived PR (since Aug 11), open and needs-human for autofix.

## Feature Request Trends

- **Session & workspace lifecycle management**: Named sessions in Channels (shipped), session rotation bounds (#8927), lifetime-bounded sessions, automatic cleanup of snapshots for temporary working directories (#9110). Direction: more granular, user-controlled session semantics.
- **Web Shell workspace UX**: Richer workspace overview — inline workspace details, per-workspace overview endpoints (#10399); hide native "Browse…" button on headless daemon hosts (#9404, closed). Direction: Web Shell becoming a first-class remote workspace management surface.
- **Performance & developer ergonomics**: pnpm adoption with fast dependency-only worktree bootstrap (#10444); prebuilt review worktrees (#10423); dedup review candidates before verify shard (#10105). Direction: faster CI, faster review loops, less redundant compute.
- **Config & permission ergonomics**: XDG Base Directory support (#1210, 7 upvotes); transparent `permissions.allow` behavior (#10075, fixed); per-session folder-trust resolution (#10470).
- **Native/local harness compatibility**: Grammar/format failures with llama-server (#10435); peg-native format errors in memory extraction (#10461). Direction: broaden local inference compatibility and graceful degradation.

## Developer Pain Points

- **Review-autofix loop opacity**: Multiple "deferred review findings" issues from the bot (#9981, #10415, #10382, #10048) plus "thread-resolution pass goes dark" (#10106) — the automation produces findings faster than humans can triage, and sometimes produces no actionable signal. Community friction: 4+ such issues this week alone.
- **WebShell cutover regressions**: Six+ separate issues from PR #9811 review findings (infinite re-render loops, permanent overlay locks, wrong index handling in message edit, pinned sessions missing from groups). The scope-fused PR is too large for effective review (exceeding 1500-line review caps), pushing bugs through to users.
- **Trust-boundary complexity**: Repeated security issues around repo-controlled config vs code execution — hook trust boundaries (#10427), filter-file include directives (#10441), heredoc permission projection (#10446). Attention is welcome but indicates the permission model's cognitive load is high for both implementers and users.
- **Release smoke-testing gaps**: The `permissions.allow` silent tool-disappearance bug (#10075) survived to a stable release; llama-server grammar regression (#10435) also shipped. Community asks for systematic pre-release smoke tests.
- **Git submodule handling**: New "no `.git` folder → no git operations" restriction breaks legitimate submodule workflows (#10448). Community asks for `git` command verification instead of naive folder checks.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-29

## Today's Highlights
The v0.9.12 milestone is in full swing with the P0 must-fix set being actively worked, including attention UX (#4402), plugin parity (#5579), and `/copy` output retrieval (#5668). The project shipped a notable wave of closed PRs covering headless PR review with GitHub posting (#5706), Daytona cloud-agent dispatch (#5701), unified login/session storage (#5704), and a dead-code sweep (#5705). Plugin UX improvements landed via prompt-based plugin suggestions (#5663), while provider-native web search is being extended to DeepSeek, Qwen, Kimi, and other first-party routes (#5681, #5686).

---

## Releases
No new releases in the last 24 hours. The team is actively working toward **v0.9.12** (tracked in #5573) with a working branch `codex/v0912-integration-20260823` and a defined P0 must-fix set.

---

## Hot Issues

### 1. [#5573 — v0.9.12 Milestone Tracker](https://github.com/Hmbown/CodeWhale/issues/5573)
The authoritative release tracker. Defines P0 must-fix items (money & safety critical) that gate the release. 19 comments show active coordination. **Critical for anyone tracking release timing.**

### 2. [#5316 — EPIC-005: TUI Crate Decomposition](https://github.com/Hmbown/CodeWhale/issues/5316)
Umbrella epic for decomposing the TUI crate into smaller modules. All sub-epics and FEATs report here. 18 comments. **Architectural direction for the project's structure.**

### 3. [#5579 — Plugin UX Parity with Claude Code](https://github.com/Hmbown/CodeWhale/issues/5579)
Closed as a tracking issue but the feature work continues. Users want proactive plugin recommendations, reload discoverability, and hot-reload. Partially addressed by #5663 (prompt-based suggestions). **High community interest in plugin ergonomics.**

### 4. [#4402 — Attention UX: Focus-Aware Notifications](https://github.com/Hmbown/CodeWhale/issues/4402)
An older issue (July 16) still open. Requests terminal-focus-aware notifications, action-required title state, and return recaps. The current completion feedback is elapsed-time based, which users find inadequate. **This has been open for ~6 weeks — a known UX gap.**

### 5. [#5668 — Add `/copy` for Last Model Output](https://github.com/Hmbown/CodeWhale/issues/5668)
Users must manually select text to copy the last assistant response — awkward during long turns. A dedicated `/copy` command is requested. **Clear, focused quality-of-life improvement. Likely to ship in v0.9.12.**

### 6. [#5681 — Extend Provider-Native Web Search](https://github.com/Hmbown/CodeWhale/issues/5681)
DeepSeek, Qwen, Kimi, Z.AI/BigModel, and MiMo routes currently fall through to separately configured search backends instead of using provider-native search (already available for OpenAI, Anthropic, xAI). **Directly relevant to DeepSeek users — native search would reduce setup friction.**

---

## Key PR Progress

### 1. [#5701 — Daytona Cloud-Agent Dispatch](https://github.com/Hmbown/CodeWhale/pull/5701) ✅ CLOSED
Adds `codewhale dispatch` / `/dispatch` (alias `cloud-agent`) for offloading to a Daytona cloud agent targeting `github`, `cnb`, or `gitee` remotes. Confirmation required; missing credentials fail closed; keys stay in env/keyring. **Security-conscious design.**

### 2. [#5706 — Headless PR Review with GitHub Posting](https://github.com/Hmbown/CodeWhale/pull/5706) ✅ CLOSED
`codewhale review --pr N [--post]` runs a headless advisory PR review. Without `--post` it prints locally; with `--post` it publishes a COMMENT review anchored to the PR head SHA. **Enables CI-driven code review.**

### 3. [#5704 — Unified Login Path Storing Session + Daytona Slot](https://github.com/Hmbown/CodeWhale/pull/5704) ✅ CLOSED
Fixes logout that only cleared provider API keys but left the account session and Daytona token in place. Adds a TUI `/login` command and truthful logout. **Important auth/session hygiene fix.**

### 4. [#5705 — Dead-Code Sweep](https://github.com/Hmbown/CodeWhale/pull/5705) ✅ CLOSED
Removed 2 unused dependencies and 9 dead functions: **+4 / −143 lines** across 13 files with a slimmer `Cargo.lock`. All removals verified against `allow(dead_code)` / `expect(dead_code)`. **Good hygiene; reduces maintenance surface.**

### 5. [#5663 — Suggest Plugins from the Prompt](https://github.com/Hmbown/CodeWhale/pull/5663) ✅ CLOSED
If a user writes a prompt about Supabase and has a matching plugin, the TUI toasts a suggestion instead of requiring `/plugin suggest`. Uses local metadata only — does not close #5579. **Direct UX win for plugin discovery.**

### 6. [#5708 — Tideline Components per Ratatui Spec](https://github.com/Hmbown/CodeWhale/pull/5708) 🔄 OPEN
Implements 12 remaining Tideline components from the ratatui translation spec as standalone render modules with golden buffers. **Large UI refactor — worth watching.**

### 7. [#5686 — Moonshot and Kimi Native Search](https://github.com/Hmbown/CodeWhale/pull/5686) 🔄 OPEN
Adds native web search for Moonshot/Kimi product routes (K3 Formula tools, legacy K2.6 `$web_search`, Kimi Code membership `/search`). Bounds execution to four rounds and eight tool calls; rejects unexpected tools. **Complements issue #5681.**

### 8. [#5703 — Match Operate to Landed CWC OperateRecord](https://github.com/Hmbown/CodeWhale/pull/5703) 🔄 OPEN
Aligns `cw · operate` to the landed `OperateRecord` schema: camelCase fields (`burnRate`, `leadPlan`, `pace`, `cancelled`). Runtime API: `GET/POST/PATCH /v1/operate`, `PUT /plan`, `POST /keepalive`, `POST /cancel`. **API consistency with the CWC runtime.**

### 9. [#5699 — First-Class Shells on the Work Strip](https://github.com/Hmbown/CodeWhale/pull/5699) ✅ CLOSED
Background shells are now equal-class work items to subagents: navigable `▾ Shells N` group on the work strip. `/jobs cancel <id>` targets shells; `/jobs cancel all` cancels running shells. **Better visibility and control over background processes.**

### 10. [#5709 / #5707 — Codewhale Agent Identity & GitHub App Setup](https://github.com/Hmbown/CodeWhale/pull/5709) 🔄 OPEN
Two docs PRs: `docs/CODEWHALE_AGENT.md` maps the agent identity across surfaces (posts as `codewhale-agent[bot]`), and `docs/GITHUB_APP.md` is a plain-language App setup guide (permissions, install, `CODEWHALE_APP_ID` / `CODEWHALE_APP_PRIVATE_KEY` settings). **Essential onboarding docs for the review bot.**

---

## Feature Request Trends
- **Provider-native web search expansion**: Users want first-party search backends (DeepSeek, Qwen, Kimi, MiMo) rather than separately configured search services (#5681, #5686).
- **Plugin UX parity with Claude Code**: Proactive recommendations, hot-reload, and discoverability are recurring themes (#5579, #5663).
- **Attention and notification UX**: Focus-aware notifications, action-required title states, and return recaps remain open (#4402).
- **Command surface expansion**: `/copy` for last output (#5668), `/login` for account sessions, `/dispatch` for cloud agents — the TUI command palette is growing.
- **Crate decomposition**: A structural refactor to split the monolithic TUI crate (#5316) is a long-running effort.

---

## Developer Pain Points
- **Manual output copying**: Users must select terminal text to copy model responses — a real friction point during long interactions (#5668).
- **Inconsistent auth/logout behavior**: Logout previously left stale sessions and tokens, requiring a dedicated fix (#5704).
- **Plugin discoverability**: Users don't know which plugins exist or that they can be suggested from prompts — addressing with proactive toasts (#5663).
- **Notification fatigue/complexity**: Completion feedback is elapsed-time based, not focus-aware, creating noisy or missed signals (#4402).
- **CI build failures**: The PR-review workflow broke on `ubuntu-latest` due to missing `libdbus-1-dev` — fixed with a retry-wrapped apt install (#5710). This suggests recurring CI environment fragility.
- **Web pricing/legal content**: Marketing pages 404'd or were misleading; the fix (#5639, #5647) replaced them with honest pricing/legal pages — a sign of documentation debt.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*