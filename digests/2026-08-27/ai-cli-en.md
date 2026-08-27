# AI CLI Tools Community Digest 2026-08-27

> Generated: 2026-08-27 08:05 UTC | Tools covered: 9

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
**Date:** 2026-08-27

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem is in a period of **intense reliability-focused maturation**. Across all six major tools analyzed, the dominant community concerns are no longer feature gaps but systemic stability issues: Windows platform fragility, subagent loop control, session persistence integrity, and context management. Tool vendors are shipping rapidly (Claude Code v2.1.247, Codex 0.150.1, Copilot CLI v1.0.81-14, Qwen Code v0.22.2), yet each release continues to introduce regressions that erode user trust. Meanwhile, communities are converging on shared standards demands — notably AGENTS.md/skills interoperability (Claude Code #31005, 333👍) and cross-tool delegation. The competitive emphasis is shifting from raw model capability to **operational maturity**: stable long-running sessions, safe unattended execution, and predictable token economics.

---

## 2. Activity Comparison

| Tool | Active Issues (24h) | Notable PRs (24h) | Releases (24h) | Dominant Theme |
|------|---------------------|--------------------|-----------------|-----------------|
| **Claude Code** | 10 | 2 (1 meaningful) | v2.1.247 | Windows stability; AGENTS.md support (333👍, zero response) |
| **OpenAI Codex** | 10 | 10 | rust-v0.150.1 + 0.150.0 | Windows startup failures; auth fragility |
| **Gemini CLI** | 10 | 10 | v0.59.0-nightly (SSRF fix) | SSRF security fix; false-success reporting; agent hangs |
| **Copilot CLI** | 10 | 0 | v1.0.81-12 → -14 (3 rapid) | Token bloat (354K MCP schemas); TUI freezes; auth |
| **Kimi CLI** | 1 | 1 | None | Cron corruption of in-progress replies (data loss) |
| **OpenCode** | 10 | 10 | None | Infinite tool-call loops (364 identical greps); session corruption |
| **Pi** | 10 | 10 | None (0.84.3 regressions) | Compaction never triggers until overflow; O(n²) perf cliffs |
| **Qwen Code** | 12 | 12 | v0.22.2 (breaking: Node REPL → MCP) | Undocumented breaking changes; Agent Team races |
| **DeepSeek TUI** | 8 | 10 | None (v0.9.12 rescue lane) | Mono-file maintainability; multi-session lock fixes |

**Volume leaders:** OpenCode (10 PRs, fast triage — fixed reported bug in hours), Gemini CLI and Pi (10 PRs each), Qwen Code (12 PRs).

**Quiet lanes:** Kimi CLI (1 issue/1 PR), Copilot CLI (0 PRs today despite 3 releases).

---

## 3. Shared Feature Directions

The following requirements appear independently across multiple tool communities:

| Feature Direction | Tools | Specific Need |
|-------------------|-------|---------------|
| **Loop/progress protection** | OpenCode (#43603, #45442, 4+ dupes), Gemini CLI (#22323), Qwen Code (#4700), Claude Code (subagent routing) | Automatic detection/termination of identical-tool-call loops; no-progress safeguards |
| **AGENTS.md / skills standards** | Claude Code (#31005, 333👍), Codex (#29989, 34👍), Gemini CLI (#21968) | Cross-tool agent-skill interoperability; standardized skill invocation |
| **Session auth reliability** | Codex (#39162, 63 comments), Claude Code (#43801, OAuth revocation), Copilot CLI (#4433, permission revocation) | Auth/session state must survive restarts, revocation must be real |
| **MCP lifecycle management** | Codex (#20883), Copilot CLI (#4613 — 354K-token bloat), Gemini CLI (#28902, #28794), DeepSeek TUI (#5637) | Project-scoped pools; lazy schema injection; fail-closed config; scoped secrets |
| **Context compaction reliability** | Pi (#6879, 24 comments), Qwen Code (#3447), Claude Code (session limits) | Compaction must trigger proactively, not at provider rejection; preserve context integrity |
| **Windows platform parity** | Claude Code (#80444, #53247), Codex (#40752, 81 comments), Copilot CLI (#4612), Pi (#8688), Qwen Code (CI) | Native shell integration (WSL), stable packaging, no orphaned processes |
| **Cross-session/task messaging** | Codex (@-mentions, 0.150.0), Qwen Code (#10158 named sessions), Claude Code (subagent routing #89043) | Named sessions; inter-task discovery; routable addresses |
| **Tailscale/remote pairing** | DeepSeek TUI (#5635), OpenCode (#45437 QR + mobile), Claude Code (rc mirror) | Remote attach, mobile Web UI, secure pairing |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|---------------|-------------|---------------------|
| **Claude Code** | Enterprise agentic IDE | Professional devs in large orgs | Deep IDE/Desktop integration; SendFeedback loop; strict permission model |
| **OpenAI Codex** | ChatGPT ecosystem synergy | ChatGPT/Plus subscribers; macOS heavy | Unified ChatGPT/Codex app; code-mode gRPC; entitlement context |
| **Gemini CLI** | Security-hardened agent | Google-ecosystem devs; privacy-conscious | SSRF prevention (RFC 9728/8414); zero-dependency sandboxing proposals; fail-closed defaults |
| **Copilot CLI** | GitHub/enterprise automation | GitHub-centric teams; CI/CD users | Entra ID broker auth (WAM); OTel trace propagation into hooks; strict hooks lifecycle |
| **OpenCode** | Open-source innovation | Fast-moving individual devs; tinkerers | High PR velocity; contributor-driven; Bun runtime; 2.0 architecture push (WebSocket RPC) |
| **Pi** | TUI/UNIX philosophy | Terminal purists; arch users | Fullscreen TUI; O(n²) algorithmic audits; performance-first; extension API |
| **Qwen Code** | Multi-agent orchestration | Chinese/global enterprise; multi-agent users | Agent Teams; named sessions; owner-scoped channels; MCP server decomposition |
| **DeepSeek TUI** | Lightweight Rust TUI | Power users; self-hosters | Rust; runtime store per-session; mono-file decomposition; external supervisor control |

**Emerging pattern:** Claude Code and Codex target **managed desktop experiences**; Gemini and Copilot emphasize **enterprise security**; OpenCode, Pi, DeepSeek TUI, and Kimi serve **customization-first users** who accept lower hand-holding for control.

---

## 5. Community Momentum & Maturity

| Tool | Momentum | Maturity Signal |
|------|----------|------------------|
| **OpenCode** | **Highest velocity** — 10 PRs in 24h; reported bug (#45501) fixed within hours; 105👍 memory megathread | Community organized and vocal, but reliability gaps (loops, hangs) dominate backlog |
| **Gemini CLI** | Strong security focus — SSRF fix shipped; 10 PRs in flight | Security hardening shows enterprise intent; subagent reliability still weakening |
| **Pi** | Rapid bug-to-fix turnaround (#8705 → #8704 within hours); active perf audits | Most rigorous algorithmic thinking; regression-prone releases (0.84.3) |
| **Qwen Code** | 12 PRs; feature-rich (memory, sessions, Agent Teams) | Fast feature velocity but **undocumented breaking changes** erode trust |
| **Claude Code** | High engagement but **slow response** — 333👍 issue with zero official response; quiet PR queue | Mature product; community frustration is about acknowledgment, not capability |
| **Codex** | 10 PRs, active but Windows instability (#40752 — 81 comments) showing quality control gaps | ChatGPT sync is strong; Windows release quality is systemic concern |
| **Copilot CLI** | 3 releases in 24h (rapid iteration) but 0 external PRs; token-bloat regression (#4613) is costly | GitHub enterprise focus; risk of losing community-driven innovation |
| **DeepSeek TUI** | "Rescue lane" PRs preserve contributor work; fast regression turnaround (24h lock fix) | Smaller community but well-governed; architecture discussed openly |
| **Kimi CLI** | **Quietest lane** — 1 issue, 1 PR; signals lower community engagement or mature stability | Need monitoring: data-loss bug (#2620) unresolved |

---

## 6. Trend Signals

### For developers choosing tools:

1. **Windows is the weakest platform across every tool.** If you're a Windows-first developer, expect friction: GPU crashes (Claude Code), launch failures (Codex #40752), encoding corruption (Pi), and missing binaries (Codex #40817). **Recommendation:** Linux/macOS remains the smoothest experience across all tools.

2. **Token economy is becoming a competitive battleground.** Copilot CLI's 354K-token eagerly-injected MCP schemas (#4613) and OpenCode's 364-identical-grep token burn (#45442) show real financial risk. **Watch for:** tools that implement lazy tool-schema loading and loop-protection budgets.

3. **The AGENTS.md movement is real.** Claude Code's #31005 (333👍, zero response) plus Codex and Gemini signals mean a cross-tool standard is inevitable. **Recommendation:** Author your AGENTS.md now; it will likely become portable.

4. **Security hardening is accelerating.** Gemini CLI shipped SSRF fixes (RFC 9728/8414 enforcement), Codex encrypts tool arguments, Copilot CLI adds Entra ID broker auth, and Claude Code has open OAuth revocation concerns (#43801). **Enterprise adopters:** audit each tool's session revocation and MCP security posture.

5. **Multi-agent features are stabilizing but rough.** Cross-session messaging is shipping (Codex @-mentions, Qwen named sessions), but race conditions (Qwen Agent Team #10208–10211) and broken subagent routing (Claude Code #89043) indicate 1-2 more quarters of hardening.

6. **Reliability reputation will separate winners.** The community's tolerance for looping agents and data corruption is low. Tools that invest in **proactive compaction, deterministic cancellation, and persistent state integrity** will gain preference.

---

### Bottom Line

The AI CLI ecosystem is transitioning from "what can agents do?" to "can agents do it reliably?" The tools that will win developer trust in Q4 2026 are those that solve **loop protection, context management, and session integrity** — not those that ship the most new features. Choosing a tool today means betting on its operational maturity, not its demos.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Snapshot:** 2026-08-27 | Source: github.com/anthropics/skills

---

## 1. Top Skills Ranking

### #1 — Skill-Creator Infrastructure Fixes (PR #1298, #1099, #1050, #539)
**Status:** Open | **Collective comments:** ~15+ across 4 PRs
**Function:** Multiple PRs tackling systemic failures in the `skill-creator` evaluation pipeline — `run_eval.py` reports 0% recall across all skill descriptions, making the description-optimization loop optimize against noise. Fixes address Windows subprocess stream reading (WinError 10038), `claude.cmd` PATHEXT resolution, trigger detection, and YAML frontmatter validation for unquoted descriptions with special characters.
- [#1298](https://github.com/anthropics/skills/pull/1298) — MartinCajiao: installs eval artifact as real skill, fixes parallel workers
- [#1099](https://github.com/anthropics/skills/pull/1099) — joshuawowk: Windows subprocess crash fix
- [#1050](https://github.com/anthropics/skills/pull/1050) — gstreet-ops: two 1-line Windows compatibility fixes
- [#539](https://github.com/anthropics/skills/pull/539) — Lubrsy706: pre-parse YAML validation

**Community signal:** The eval pipeline bug (Issue #556, 12 comments, 7👍) has **10+ independent reproductions**. This is the highest-blocking infrastructure problem in the ecosystem.

---

### #2 — ODT Skill (PR #486)
**Status:** Open | **Author:** GitHubNewbie0 | **Created:** 2026-03-01
**Function:** Comprehensive OpenDocument Format skill — create, fill, read, and convert `.odt`/`.ods` files; template filling; ODT→HTML parsing. Triggers on mentions of ODT, ODS, ODF, OpenDocument, or LibreOffice.
[View PR](https://github.com/anthropics/skills/pull/486)

**Discussion highlights:** Persistent interest over 6+ weeks (updated through April). Complements the existing PDF/DOCX skills, rounding out document-format coverage.

---

### #3 — ServiceNow Platform Skill (PR #568)
**Status:** Open | **Author:** Vanka07 | **Created:** 2026-03-08 | **Updated:** 2026-08-12
**Function:** Broad ServiceNow platform assistant — covers ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD, CSM, SPM/PPM, Vulnerability Response, Security Incident Response, and IntegrationHub scripting.
[View PR](https://github.com/anthropics/skills/pull/568)

**Discussion highlights:** One of the longest-lived open PRs (5 months), indicating sustained community interest in enterprise platform skills. Still actively maintained.

---

### #4 — Testing-Patterns Skill (PR #723)
**Status:** Open | **Author:** 4444J99 | **Created:** 2026-03-22 | **Updated:** 2026-04-21
**Function:** Comprehensive testing skill — Testing Trophy model, unit testing (AAA, naming, edge cases), React component testing with Testing Library, coverage strategy, and what *not* to test.
[View PR](https://github.com/anthropics/skills/pull/723)

---

### #5 — Frontend-Design Skill Refinement (PR #210)
**Status:** Open | **Author:** justinwetch | **Created:** 2026-01-05 | **Updated:** 2026-03-07
**Function:** Major revision of the frontend-design skill for clarity, actionability, and internal coherence — ensuring every instruction is something Claude can execute within a single conversation, with specificity sufficient to steer behavior without over-constraining.
[View PR](https://github.com/anthropics/skills/pull/210)

---

### #6 — Document Typography Skill (PR #514)
**Status:** Open | **Author:** PGTBoos | **Created:** 2026-03-04 | **Updated:** 2026-03-13
**Function:** Typographic quality control for AI-generated documents — prevents orphan word wrap, widow paragraphs (stranded section headers), and numbering misalignment.
[View PR](https://github.com/anthropics/skills/pull/514)

**Discussion highlights:** Addresses a universally experienced pain point — typographic defects in every document Claude generates. Strong cross-domain applicability.

---

### #7 — Self-Audit Skill (PR #1367)
**Status:** Open | **Author:** YuhaoLin2005 | **Created:** 2026-06-28 | **Updated:** 2026-07-02
**Function:** Two-phase output audit — mechanical file verification (every claimed output file exists) followed by four-dimension reasoning audit in damage-severity priority order. Model-agnostic and project-agnostic.
[View PR](https://github.com/anthropics/skills/pull/1367)

**Discussion highlights:** Complements the companion proposal (Issue #1385) for a three-gate reasoning quality pipeline. Signals growing demand for output-quality *verification* rather than just generation.

---

## 2. Community Demand Trends

### Trend A: Skill-Creator Reliability (Highest Urgency)
**Evidence:** Issues #556 (12 comments, 7👍), plus 4+ PRs (#1298, #1099, #1050, #539) all targeting the same broken `run_eval.py` pipeline.
**Demand:** The community cannot trust evaluation metrics — `recall=0%` on every run regardless of skill quality. **This is the single most blocking issue** for contributors iterating on skill descriptions.

### Trend B: Enterprise Platform Skills
**Evidence:** ServiceNow (PR #568), SCNet HPC clusters (PR #1615), SharePoint Online concerns (Issue #1175).
**Demand:** Companies want skills for their specific internal platforms — not just general-purpose coding/documentation. The ServiceNow PR's 5-month sustained activity confirms this corridor.

### Trend C: Output Quality Assurance / Verification
**Evidence:** Self-audit skill (PR #1367), Reasoning Quality Gate proposal (Issue #1385), agent-governance proposal (Issue #412).
**Demand:** Moving beyond generation to *verification gates* — mechanical file checks, reasoning quality audits, adversarial review. Community wants Claude to catch its own errors before delivery.

### Trend D: Document Format Completeness
**Evidence:** ODT (PR #486), typography (PR #514), DOCX fixes (#538, #541), PDF case-sensitivity fix (#538).
**Demand:** Rounding out the office-document ecosystem — the missing ODT is a notable gap, and the DOCX fix addresses real corruption bugs (tracked-change `w:id` collisions).

### Trend E: Multi-Agent Orchestration (Emerging)
**Evidence:** Hivemind zero-cost orchestration (PR #1628), opencode delegation.
**Demand:** Recently submitted (2026-08-21) but trending — delegating mechanical work to cheaper models while Claude Code stays the planner/reviewer.

---

## 3. High-Potential Pending Skills

These open PRs have active discussion and likely merge soon:

| PR | Skill | Why it lands | Attention |
|----|-------|--------------|-----------|
| [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** — zero-cost multi-agent orchestration | Fresh submission (Aug 2026), novel architecture, addresses context-scarcity economics | High growth |
| [#1615](https://github.com/anthropics/skills/pull/1615) | **SCNet HPC** — cluster operations | Niche but precise scope: SSH, Slurm, partitions | Moderate |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **Self-audit** — verification + reasoning gate | Complements #1385 proposal; community actively discussing quality gates | High |
| [#723](https://github.com/anthropics/skills/pull/723) | **Testing-patterns** — full stack testing | Covers a universal need; well-structured scope | Moderate |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT** — OpenDocument creation/parsing | Closes a clear gap in document-format coverage | Moderate |
| [#1607](https://github.com/anthropics/skills/pull/1607) | **claude-api model retirement** — mark legacy IDs | Simple, necessary maintenance; fixes #1603 | Low (quick merge) |

**Watch:** The skill-creator fixes (#1298, #1099, #1050) — while individually small, their *combined* impact unblocks the entire contributor pipeline. These may land together as a consolidated fix.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is fixing the skill-creation feedback loop itself** — contributors cannot trust evaluation metrics (0% recall bugs), so the #1 priority is restoring reliable skill-quality measurement before the ecosystem can scale new skill adoption. Secondarily, the demand is split between enterprise-platform specialization (ServiceNow, HPC) and output-verification meta-skills (self-audit, governance), with document-format completeness (ODT, typography) as a steady baseline.

---

*Report generated from anthropics/skills data — PR/Issue comments, activity recency, and author traction as of 2026-08-27.*

---

# Claude Code Community Digest — 2026-08-27

## Today's Highlights

**v2.1.247 ships with a new `SendFeedback` tool** that lets Claude draft feedback reports for user review — a meaningful step toward improving the bug-reporting loop. **Windows stability remains the dominant theme**, with multiple critical issues surfacing around GPU-process crashes in the Desktop app (MSIX packages left unlaunchable) and auto-update wedges that force reboots. **A long-awaited community request for AGENTS.md support (`.agents/skills/`) remains unresolved**, with #31005 hitting 333 👍 and zero official response.

---

## Releases

### v2.1.247
- **New `SendFeedback` tool** — Claude can now draft a feedback report for you to review and send via `/feedback` (disable with the `feedbackDrafts` setting).
- Added `{id, text, cooldownSessions, priority}` entries, `tipsFile`, and `label` to configurations.

---

## Hot Issues (10 Noteworthy)

1. **[#80444 — Windows Desktop fatal GPU-process crash (0x060C201E)](https://github.com/anthropics/claude-code/issues/80444)** — 62 comments, reproduced across two driver versions. The crash leaves the MSIX package unlaunchable (appxState=2) until Repair. High urgency for Windows desktop developers.

2. **[#12506 — Execute commands in WSL instead of Windows](https://github.com/anthropics/claude-code/issues/12506)** — 146 👍, 43 comments. Long-standing request to run shell commands inside WSL when using Claude Desktop's embedded Claude Code. Closed without resolution — community still wants this.

3. **[#23626 — Diff comparison against branches other than main](https://github.com/anthropics/claude-code/issues/23626)** — 131 👍, 43 comments. Feature request for IDE/Desktop diffing to support feature branches. Widely needed for real-world PR workflows.

4. **[#68780 — Opus 4.8/5.0 reasoning degradation (URGENT)](https://github.com/anthropics/claude-code/issues/68780)** — 36 comments, 35 👍. Users report severe reasoning regressions even on Max effort, with one threatening EU legal action. Performance regression claims are high-visibility — watch this one.

5. **[#18467 — Personal GitHub repos invisible in Claude web, only org repos work](https://github.com/anthropics/claude-code/issues/18467)** — 36 comments, 78 👍. Reproducible bug affecting personal accounts after GitHub App install. Blocks core workflows for many.

6. **[#43801 — OAuth tokens survive "Log out all sessions" revocation](https://github.com/anthropics/claude-code/issues/43801)** — 34 comments. **Security issue**: revoking sessions via claude.ai does not invalidate OAuth tokens for the VSCode extension, even after cold boot. This undermines a core security guarantee.

7. **[#31005 — Support for AGENTS.md and .agents/skills/](https://github.com/anthropics/claude-code/issues/31005)** — 333 👍, 22 comments. The community has been asking since Aug 2025, with zero official response. Flagged duplicate — signals an interoperability gap with agent standards.

8. **[#57371 — Disable bundled Cowork background service on Windows](https://github.com/anthropics/claude-code/issues/57371)** — 53 👍, 24 comments. Users want an option to turn off CoworkVMService when not using Cowork. Concerns about resource usage and surprise background processes.

9. **[#53247 — Desktop fails to launch due to orphaned Job Object after crash](https://github.com/anthropics/claude-code/issues/53247)** — 27 comments. HRESULT 0x80070020 in AppModel-Runtime, only logoff/reboot recovers. Combined with #80444 and #89692, this suggests a systemic Windows stability problem.

10. **[#90002 — Code tab writes UI render metadata into transcript causing API 400](https://github.com/anthropics/claude-code/issues/90002)** — Freshly filed (today). Render timestamps/flags corrupt the JSONL transcript, leading to unrecoverable API 400 errors even after sanitization. Nasty data-integrity bug.

---

## Key PR Progress (10 PRs)

1. **[#13437 — fix(hookify): relative imports for Python module resolution](https://github.com/anthropics/claude-code/pull/13437)** — Fixes 'No module named hookify' error on all platforms by switching from absolute to relative imports. A simple, high-impact fix for plugin users.

2. **[#58673 — "s" (placeholder PR)](https://github.com/anthropics/claude-code/pull/58673)** — No meaningful content. Worth flagging for maintainers to close.

*Note: Only 2 PRs were updated in the last 24h. The PR queue appears quiet — possible maintainer focus on internal stabilization rather than external contributions.*

---

## Feature Request Trends

- **AGENTS.md / `.agents/skills/` interoperability** (#31005) — the single most-upvoted request (333 👍) with zero official response. Community expects cross-tool agent-skill standards.
- **WSL shell execution for Windows Desktop** (#12506, 146 👍) — developers on Windows want native Linux shell workflows via WSL instead of CMD/PowerShell.
- **Branch-aware diff tooling** (#23626, 131 👍) — diff against arbitrary branches, not just `main`; needed for realistic code review.
- **Cowork background service opt-out** (#57371, 53 👍) — users want control over bundled background processes (resource use, privacy).
- **Ability to disable always-on-top desktop window** (#85891, 61 👍) — on Windows, the Desktop window stays topmost with no in-app toggle.

---

## Developer Pain Points

1. **Windows Desktop stability is critical** — recurring GPU-process crashes (#80444, #89016), auto-update wedges (#89692, #89687), launch failures (#53247), and MCP relay flapping (#90007). Windows users are seeing multiple crash-loop events within a single day, with only reboot or repair as recovery.

2. **Session revocation doesn't actually revoke** (#43801) — OAuth tokens remain valid after "log out all sessions," a security-confidence killer for enterprise and security-conscious users.

3. **Subagent messaging routing is broken** (#89043, #89091, #81438) — inter-agent messages are stamped with agent *type* (e.g., `general-purpose`) instead of a routable session ID, causing unreachable-address loops and failed replies. This blocks multi-agent workflows.

4. **Session limit bugs** (#90015) — users hitting the 5-hour session limit in under 5 minutes, even on Sonnet 5. Misleading and disruptive when running longer tasks.

5. **Model regression anxiety** (#68780) — reports of Opus 4.8/5.0 reasoning degradation even on Max effort are polarizing (one user threatens legal action). Even if unproven, the perception of "downgrading" erodes trust.

6. **Transcript data corruption** (#90002) — UI render metadata leaking into JSONL causes unrecoverable API 400 errors, effectively losing session data. Data integrity is fragile.

7. **Zero official responses on top-voted requests** (#31005, 333 👍; #12506, 146 👍; #23626, 131👍) — community sentiment suggests frustration when high-demand issues get no maintainer acknowledgment for months.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-27

## 1. Today's Highlights

Codex 0.150.1 shipped with a key fix for remote compaction, now counting retained images against the token budget by default to prevent context overflow. The Windows desktop app remains the top community concern, with multiple critical issues around app startup failures, auth loops, and missing executables generating 100+ combined comments. On the development side, a wave of infrastructure PRs landed covering trace context propagation, encryption of sensitive tool arguments, and filesystem policy URI-native matching.

## 2. Releases

**rust-v0.150.1 (stable)**
- **Bug Fix:** Remote compaction now counts retained images toward its token budget by default, trimming older images as needed. Explicitly disabling the feature preserves previous behavior. ([#41003](https://github.com/openai/codex/pull/41003))

**rust-v0.150.0 (stable)**
- **New:** Reference other Codex tasks with `@` mentions; ask agents to read, create, or message tasks from the terminal. ([#40308](https://github.com/openai/codex/issues/40308), [#40315](https://github.com/openai/codex/issues/40315))
- **New:** `/copy` offers a picker for full responses, individual code blocks, and blockquotes. ([#39997](https://github.com/openai/codex/issues/39997))
- **New:** Unnamed terminal tasks receive descriptive titles automatically.

**Pre-releases:** Multiple alpha builds (0.151.0-alpha.2 through alpha.5, 0.150.0-alpha.12 through alpha.13) published with no changelog details.

---

## 3. Hot Issues

1. **[#40752 — Windows Desktop fails to start after update to v26.820.60940](https://github.com/openai/codex/issues/40752)** — 81 comments, 48 👍  
   Critical startup failure with "Unable to locate Codex CLI" and `spawn EINVAL` on `.cmd` wrapper. **The most active issue this week**; Windows users are effectively locked out of the app.

2. **[#39162 — Opening existing conversation invalidates ChatGPT auth on macOS](https://github.com/openai/codex/issues/39162)** — 63 comments, 38 👍  
   Auth state is lost when reopening a conversation, forcing sign-in. Regression from 26.814.41407; affects core session continuity.

3. **[#40700 — Bundled codex.exe relocation from WindowsApps fails](https://github.com/openai/codex/issues/40700)** — 30 comments  
   Windows Store packaging breaks Codex startup; the executable cannot be relocated from the protected WindowsApps directory. Related to #40752.

4. **[#40865 — Remote SSH inter-task tools stopped working; 0.148 lacks codex_app MCP replacement](https://github.com/openai/codex/issues/40865)** — 8 comments, 6 👍  
   Regression in remote workflows; first-party task coordination tools vanished and the stable update didn't restore them.

5. **[#31925 — Restore Option+Space Quick Chat on macOS](https://github.com/openai/codex/issues/31925)** — 11 comments, 26 👍  
   Quick Chat was removed after the ChatGPT/Codex app unification. High demand; long-running request since July.

6. **[#20596 — Windows unified exec fails with `helper_unknown_error: setup refresh had errors`](https://github.com/openai/codex/issues/20596)** — 7 comments  
   Terminal execution broken after 26.819.11345 update; blocks all sandboxed tool use on Windows.

7. **[#40817 — `codex-code-mode-host.exe` missing from `.sandbox-bin`](https://github.com/openai/codex/issues/40817)** — 4 comments  
   Windows update regression: local execution fails because a required binary is absent from the sandbox.

8. **[#41059 — Desktop remains headless after external CLI workaround](https://github.com/openai/codex/issues/41059)** — 8 comments  
   Even after users apply manual CLIs workarounds, the desktop UI stays blank — no recovery path.

9. **[#41048 — 457 local JSONL transcripts deleted while thread records remain](https://github.com/openai/codex/issues/41048)** — 2 comments  
   Data loss on Windows: session transcripts vanish from disk, making all history unreadable. Serious trust concern.

10. **[#40883 — `TypeError: tools.codex_app__send_message_to_thread is not a function`](https://github.com/openai/codex/issues/40883)** — 2 comments, 1 👍  
   Cross-platform issue (Windows + Linux remote); task-to-task messaging broken in remote sessions.

---

## 4. Key PR Progress

1. **[#41087 — Expose response usage metadata in completion events](https://github.com/openai/codex/pull/41087)**  
   Parses `usage_metadata.amount` from Responses API; propagates through SSE/WebSocket, regular turns, and compaction.

2. **[#41072 — Forward model confirmation policies to actor MCP tools](https://github.com/openai/codex/pull/41072)**  
   Sends Browser Use and Computer Use confirmation policies verbatim into `node_repl` and `cua_repl` tool calls.

3. **[#41062 — Forward truncation policies to history notes backend](https://github.com/openai/codex/pull/41062)**  
   Serializes output truncation policy into `x-openai-tool-output-truncation-policy` header for history/notes requests.

4. **[#41058 — Track Code Mode tool call metadata completeness](https://github.com/openai/codex/pull/41058)**  
   Distinguishes full vs. partial tool-call inventory across `exec`/`wait` outputs in Code Mode cells.

5. **[#41050 — Add developer instructions for persistent mode](https://github.com/openai/codex/pull/41050)**  
   Bundled proactivity/follow-up guidance for `ReasoningEffort::Persistent`; model metadata can override.

6. **[#41046 — Preserve tool authority for TUI delegation prompts](https://github.com/openai/codex/pull/41046)**  
   Delegated `create_thread`/`send_message_to_thread` turns now retain the tool's authority instead of being recorded as user input.

7. **[#41041 — Encrypt sensitive history and notes tool arguments](https://github.com/openai/codex/pull/41041)**  
   Marks search queries and note text as encrypted; sends `x-openai-encrypted-tool-arguments: true` to backend.

8. **[#41020 — Scope extension capabilities to invocation lifetimes](https://github.com/openai/codex/pull/41020)**  
   Adds callback lifetimes to extension `ToolCall`, `ToolEnvironment`, turn-input, and skill-read types; requires executors to handle any invocation lifetime.

9. **[#41017 — Propagate trace context through gRPC code mode](https://github.com/openai/codex/pull/41017)**  
   Injects W3C `traceparent` into code-mode session/execution requests; keeps callback and nested-tool spans connected across gRPC.

10. **[#41005 — Attach verified access context to eligible plugin MCP calls](https://github.com/openai/codex/pull/41005)**  
    Fetches ChatGPT account access and attaches `cyber_trusted_access` under `openai/entitlementContext` when a plugin explicitly requests it.

**Also notable:** [#41011](https://github.com/openai/codex/pull/41011) reduces skill catalog prompt size with path aliases; [#41006](https://github.com/openai/codex/pull/41006) lets Guardian trust invoked user skills as authorization evidence; [#41001](https://github.com/openai/codex/pull/41001) makes filesystem policy matching URI-native for cross-platform path handling.

---

## 5. Feature Request Trends

- **Session reliability & recovery:** Multiple requests for first-party recovery/reindex tools for lost conversations ([#40779](https://github.com/openai/codex/issues/40779)), and better handling of orphaned session data.
- **Standardized skill controls:** Continued demand for `disable-model-invocation` in `SKILL.md` ([#29989](https://github.com/openai/codex/issues/29989), 34 👍) to align with Claude Code, Cursor, and others.
- **Improved MCP lifecycle:** Project-scoped MCP process pools instead of per-session spawning ([#20883](https://github.com/openai/codex/issues/20883)) to avoid resource leaks.
- **Self-evolving agents:** RFC for `/learn` instruction distillation and rule metabolism for `AGENTS.md` ([#40575](https://github.com/openai/codex/issues/40575)) — reflects growing interest in long-lived agent memory.
- **Quick Chat restoration:** Users want the macOS Option+Space Quick Chat shortcut back ([#31925](https://github.com/openai/codex/issues/31925)).

---

## 6. Developer Pain Points

- **Windows desktop instability is the dominant theme.** 14 of the top 30 issues are Windows-specific: startup failures, missing executables, auth loops, headless UIs, and data loss. The combination of Store packaging issues and sandbox binary missing bugs suggests a systemic Windows release-quality problem.
- **Authentication/session state fragility.** Repeated auth invalidation bugs ([#39162](https://github.com/openai/codex/issues/39162), [#40036](https://github.com/openai/codex/issues/40036), [#39925](https://github.com/openai/codex/issues/39925)) erode trust — users are logged out unexpectedly, and refresh tokens are rejected in isolated refreshes.
- **Remote/SSH workflows are regressing.** Multiple reports of broken inter-task tools ([#40865](https://github.com/openai/codex/issues/40865)), failed QR pairing ([#39856](https://github.com/openai/codex/issues/39856)), and trust verification failures ([#39855](https://github.com/openai/codex/issues/39855)).
- **Runaway resource usage.** macOS app consuming 3–5 GB RAM ([#36920](https://github.com/openai/codex/issues/36920)), Crashpad filling disk at 17 GB/day ([#36982](https://github.com/openai/codex/issues/36982)), and CLI busy-loops at 100% CPU after PTY deletion ([#28315](https://github.com/openai/codex/issues/28315)).

---

*Generated from openai/codex repository data on 2026-08-27.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest - 2026-08-27

## Today's Highlights

Today's release focuses on a critical security fix preventing SSRF vulnerabilities in MCP OAuth metadata discovery and authentication flows. The community continues to surface persistent agent reliability issues, particularly around subagent recovery reporting false successes and generalist agent hangs. Several substantial security hardening PRs are also in flight, addressing variable expansion bypasses and fail-open configuration handling.

---

## Releases

**v0.59.0-nightly.20260827.g3c311beac** - ([Release](https://github.com/google-gemini/gemini-cli/releases))

- 🔒 **Security fix**: Prevents SSRF in MCP OAuth metadata discovery and authentication (PR [#29081](https://github.com/google-gemini/gemini-cli/pull/29081))
- Enforces RFC 9728 Section 7.7 and RFC 8414 security constraints
- HTTPS now required for remote OAuth endpoints (loopback HTTP allowed for local MCP servers)
- Origin matching validation added for resource and OAuth endpoints

---

## Hot Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) - Subagent recovery after MAX_TURNS reported as GOAL success** *(13 comments, P1)*
   - `codebase_investigator` reports `status: "success"` with `Termination Reason: "GOAL"` despite hitting max turn limits before doing any analysis. Misleading success reporting that masks interruptions remains a top community concern.

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) - Generalist agent hangs forever** *(8 comments, 8 👍, P1)*
   - CLI defers to generalist agent and hangs indefinitely; simple operations like folder creation stall for up to an hour. Users report that instructing the model to avoid subagents resolves the issue—a concerning workaround.

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) - Leverage model's bash affinity via Zero-Dependency OS Sandboxing** *(8 comments, P2)*
   - Proposal to leverage Gemini 3's native bash capabilities with sandboxing and post-execution intent routing—a significant architectural enhancement for how the CLI handles shell operations.

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) - AST-aware file reads, search, and mapping** *(7 comments, P2)*
   - Epic tracking whether AST-aware tools could reduce turns from misaligned reads and cut token noise. Multiple related issues investigate using tools like `tilth` or `glyph` for codebase mapping.

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) - Gemini doesn't use skills and sub-agents enough** *(6 comments)*
   - Community reports Gemini rarely activates custom skills or sub-agents autonomously, even when highly relevant. Users must explicitly instruct the model to use them.

6. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) - Auto Memory retries low-signal sessions indefinitely** *(5 comments, P2)*
   - Auto Memory only marks sessions as processed when the extraction agent reads the transcript; low-signal sessions get surfaced repeatedly, wasting background processing cycles.

7. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) - Add deterministic redaction and reduce Auto Memory logging** *(4 comments, P2, security)*
   - Auto Memory sends transcript content to the extraction model before the prompt instructs redaction—content is already in model context. Logging may expose existing skill contents.

8. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) - Shell command execution stuck at "Waiting input"** *(4 comments, 3 👍, P1)*
   - Simple CLI commands that finish quickly still show as active with "Awaiting user input." Recurring and frustrating, especially for automated workflows.

9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) - Browser subagent fails on Wayland** *(4 comments, P1)*
   - Browser agent terminates with "GOAL" reason but fails on Wayland displays. Platform-specific browser automation reliability remains an open issue.

10. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) - 400 error with > 128 tools** *(3 comments, P2)*
    - Users hitting 400 errors when more than 128 tools are available. Expectation is that the agent should smartly limit tool scope rather than erroring out.

---

## Key PR Progress

1. **[#29081](https://github.com/google-gemini/gemini-cli/pull/29081) - Prevent SSRF in MCP OAuth metadata discovery** *(merged, size/l)*
   - Enforces RFC 9728/8414 constraints: HTTPS for remote endpoints, origin validation, loopback-HTTP-only exception. Shipped in today's nightly release.

2. **[#28902](https://github.com/google-gemini/gemini-cli/pull/28902) - Block `$VAR`/`${VAR}` variable expansion bypass** *(open, P1, security)*
   - Fixes incomplete checks in `detectBashSubstitution()` and `detectPowerShellSubstitution()` that allowed variable expansion to bypass GHSA-wpqr-6v78-jr5g. Adds defense-in-depth hardening to dedup workflow.

3. **[#28794](https://github.com/google-gemini/gemini-cli/pull/28794) - Prevent fail-open on corrupt MCP enablement config** *(closed, P1)*
   - Resolves vulnerability where corrupt `mcp-server-enablement.json` returned `{}`, causing fail-open re-enablement of all servers. Prevents data-loss scenario.

4. **[#28787](https://github.com/google-gemini/gemini-cli/pull/28787) - Don't treat corrupt MCP enablement config as empty** *(closed, P1)*
   - Companion fix ensuring parse failures aren't conflated with "file does not exist," which defaulted every server to enabled.

5. **[#29099](https://github.com/google-gemini/gemini-cli/pull/29099) - Enforce fail-closed workspace trust and filter mcpServers** *(open)*
   - Filters repository-defined `mcpServers` in `@google/gemini-cli-a2a-server` for untrusted/restricted environments, preventing unintended process execution during server startup.

6. **[#28863](https://github.com/google-gemini/gemini-cli/pull/28863) - Consent for environment changes + sanitize runtime-altering env vars** *(open)*
   - Extension updates could bypass user consent and inject unauthorized environment variables into spawned MCP processes. Adds consent string incorporation and sanitization.

7. **[#28914](https://github.com/google-gemini/gemini-cli/pull/28914) - Inject on-retry nudge preserving prefix caching** *(open)*
   - Moves retry nudge from `systemInstruction` to end of `contents` array, preserving static prompt prefix caching while ensuring the model sees recovery instructions immediately.

8. **[#29006](https://github.com/google-gemini/gemini-cli/pull/29006) - Fix frontmatter parser: strip quotes, handle block scalars** *(closed)*
   - When YAML parsing fails and falls back to simple frontmatter parsing, quoted values retained surrounding quotes in skill name/description. Handles pipe/greater-than block scalars.

9. **[#28911](https://github.com/google-gemini/gemini-cli/pull/28911) - Sandbox launcher only honors DEBUG=true/1** *(open)*
   - `DEBUG=false` and `DEBUG=0` previously triggered debug mode in the sandbox launcher due to truthy checks, inconsistent with container entrypoint behavior.

10. **[#28917](https://github.com/google-gemini/gemini-cli/pull/28917) - Atomic download and failure cleanup in WhisperModelManager** *(open)*
    - Writes to temp file (`.downloading`), respects backpressure, verifies length, cleans up on failure, and atomically renames—fixing corrupted model downloads for local voice mode.

---

## Feature Request Trends

| Trend | Examples | Community Push |
|-------|----------|---------------|
| **AST-aware code intelligence** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#19561](https://github.com/google-gemini/gemini-cli/issues/19561) | Medium — repeated proposals for surgical reads and codebase mapping |
| **OS-level sandboxing & zero-dependency execution** | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Medium — architectural proposal to leverage native bash capabilities |
| **Configurable agent routing** | [#27406](https://github.com/google-gemini/gemini-cli/pull/27406), [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | Growing — users want to define custom complexity-to-model mappings |
| **Subagent trajectory transparency** | [#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) | Low-Medium — desire to see/share subagent internal behavior |
| **Browser agent resilience** | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Medium — session takeover, lock recovery, Wayland support, config overrides |

---

## Developer Pain Points

1. **False success reporting** — Subagents hitting `MAX_TURNS` report `status: success`/`GOAL`, masking interruptions and hiding actual failures. This erodes trust in agent reliability.

2. **Agent hangs & stuck states** — Recurring issues with generalist agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands stuck at "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and interactive prompt deadlocks (Vite creation, [#22465](https://github.com/google-gemini/gemini-cli/issues/22465)).

3. **Security & data exposure in background features** — Auto Memory sends transcript content to models before redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), and extension updates can inject env vars into MCP processes ([#28863](https://github.com/google-gemini/gemini-cli/pull/28863)).

4. **Tool bloat hitting API limits** — 400 errors with >128 tools; users expect smarter tool scoping rather than hard failures ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)).

5. **Unexpected cleanup overhead** — Model creates tmp scripts in random directories, forcing manual cleanup for clean commits ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).

6. **Destructive command behavior** — Agent occasionally uses `git reset`/`--force` when safer alternatives exist, especially for complex git operations and resource management ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).

7. **Suboptimal tool activation** — Gemini doesn't proactively use custom skills/sub-agents, requiring explicit user instruction ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), and struggles with interactive prompts that require user input ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)).

---

*Digest generated from [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) activity for 2026-08-27.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-27

## Today's Highlights

Three rapid-fire releases (v1.0.81-12 through v1.0.81-14) landed within 24 hours, bringing Windows Entra ID authentication for remote MCP servers, OpenTelemetry trace context propagation into hooks, and faster session resume. The community is actively pushing on two fronts: token efficiency (a high-severity regression eagerly injecting 354K MCP schema tokens is generating serious concern) and reliability of long-running sessions, with fresh reports of TUI freezes, timeout mishandling in autopilot mode, and tool-call permission revocation in non-interactive sessions.

---

## Releases

**v1.0.81-14** — Improved: Resume large sessions faster by showing recent history first while older messages load asynchronously. Fixed: Repeated `read_agent` calls now consistently return the full turn history unless `since_turn` is explicitly provided.

**v1.0.81-13** — Added: Hooks can now receive the current OpenTelemetry trace context, with inputs gaining `traceparent` (plus `tracestate` when vendor state exists) and command hooks receiving corresponding environment variables. Fixed: Hook lifecycle events (`hook.start`/`hook.end`) emitted from hooks inside a subagent.

**v1.0.81-12** — Added: On Windows, remote MCP servers protected by Microsoft Entra ID can now authenticate through the OS broker (WAM), typically with no prompt; other platforms and machines without the broker library fall back to the existing browser flow. Fixed: Repeated session resume.

---

## Hot Issues

1. **[#2712 — MS legal/monetary liability for rate limit behavior](https://github.com/github/copilot-cli/issues/2712)** — 6 comments, 4 👍
   Open since April, this issue argues the rate-limit system can trigger limit events without user action (via `/fleet`, background agents, or parallel commands), potentially incurring costs. The sustained debate reflects growing enterprise anxiety about runaway token consumption.

2. **[#4612 — Runaway FileWatch loop freezes TUI and grows debug log to 13 GB](https://github.com/github/copilot-cli/issues/4612)** — 4 comments, 1 👍
   A long-running session can enter a tight loop emitting "No connection accepted a host event {kind: FileWatch}", freezing the terminal UI and ballooning debug logs. This is a serious stability issue for users who keep sessions open for days.

3. **[#4613 — MCP schemas eagerly injected, adding 354K startup tokens](https://github.com/github/copilot-cli/issues/4613)** — 2 comments, 0 👍
   Labeled high-severity: since v1.0.80, the full ambient MCP catalog is injected into the first model request, even for trivial prompts needing no tools. This directly impacts cost and latency for MCP-heavy setups. A bug report with significant financial implications.

4. **[#4605 — latest-prerelease lookup strands users on 1.0.81-9](https://github.com/github/copilot-cli/issues/4605)** — 1 comment, 3 👍
   Due to identical `created_at` timestamps across prereleases, the update checker picks the first listed prerelease, which can be an older build. Users are stuck on -9 while -10 and newer are available — an update-channel reliability issue.

5. **[#4533 — TUI stops consuming events when parallel subagents spawn](https://github.com/github/copilot-cli/issues/4533)** — 3 comments, 0 👍
   On prerelease builds, the terminal UI goes dead (input and scroll unresponsive) the moment a turn launches parallel subagents, while the runtime continues working in the background. A jarring UX regression for agent-heavy workflows.

6. **[#4433 — Non-interactive sessions: permission approval silently revoked mid-session](https://github.com/github/copilot-cli/issues/4433)** — 1 comment, 0 👍
   In `-p` mode, after 4–8 minutes of tool calls, write-capable tools start failing with "Permission denied and could not request permission from user," making the session unrecoverable. Critical for CI/CD automation.

7. **[#4628 — Autopilot background-task timeout exits active parent after subagent completes](https://github.com/github/copilot-cli/issues/4628)** — 0 comments
   The 600-second background-task wait timeout kills the entire CLI process even after the subagent has finished and the parent has resumed work. A logic bug in timeout lifecycle management that silences successful completions.

8. **[#4629 — Plugin hooks not loaded on `--resume`](https://github.com/github/copilot-cli/issues/4629)** — 0 comments
   Plugin-provided hooks fire on fresh sessions but never on resumed ones, even with the same session ID, directory, and machine. Inconsistent behavior breaks workflows that depend on hook-driven automation after a resume.

9. **[#4485 — Theme turns light overnight](https://github.com/github/copilot-cli/issues/4485)** — 3 comments, 2 👍
   The dark theme silently switches to light after the machine sleeps, apparently tracking the macOS color scheme instead of the user's explicit setting. Minor but persistent annoyance with community validation.

10. **[#4103 — Plugin marketplace clone breaks Git credential helpers](https://github.com/github/copilot-cli/issues/4103)** — 3 comments, 3 👍
    Cloning a private Azure DevOps plugin marketplace fails because the CLI disables Git credential helpers, regressing since v1.0.70's fail-fast auth change. Workflow blocker for teams using private HTTPS repositories.

---

## Key PR Progress

No pull requests were updated in the last 24 hours.

---

## Feature Request Trends

- **Global configuration** ([#252](https://github.com/github/copilot-cli/issues/252)): Users repeatedly recreate identical instructions files across repos and worktrees. Demand for a global instructions file remains the single most-upvoted configuration request, with 12 👍 and 11 comments spanning nearly a year.

- **Tool discoverability** ([#407](https://github.com/github/copilot-cli/issues/407)): The `/tools` slash command to list all available tools remains highly requested (31 👍), showing a widespread need for better introspection of the CLI's capabilities.

- **Automation ergonomics** ([#3877](https://github.com/github/copilot-cli/issues/3877)): An `auto_allow_all` setting (or equivalent) would let users start sessions with permissions pre-approved, rather than manually running `/allow-all` each time. Persistent request from automation-focused users.

- **Delegate flexibility** ([#1499](https://github.com/github/copilot-cli/issues/1499)): Users want `/delegate` to support Claude and Codex as targets, not just the Copilot coding agent — an ecosystem-interop request with 6 👍.

- **Input editing improvements** ([#1785](https://github.com/github/copilot-cli/issues/1785)): Standard terminal editing shortcuts (select all, kill line, clear prompt) are repeatedly requested, now closed — signals the maintainers have addressed or are addressing it.

---

## Developer Pain Points

- **Resume reliability is fragile**: Two separate reports this week ([#4629](https://github.com/github/copilot-cli/issues/4629), [#4612](https://github.com/github/copilot-cli/issues/4612)) highlight that resuming sessions can drop hooks, freeze the TUI, or leave users on stale versions. Session persistence is a core feature — its instability undermines trust.

- **Long-running automation is dangerous**: Issues around autopilot timeouts killing successful parent agents ([#4628](https://github.com/github/copilot-cli/issues/4628)) and silent permission revocation in non-interactive mode ([#4433](https://github.com/github/copilot-cli/issues/4433)) indicate the CLI still isn't safe for unattended CI/CD or background workflows.

- **MCP schema bloat is a cost problem**: The 354K-token eager injection regression ([#4613](https://github.com/github/copilot-cli/issues/4613)) plus Gemini-specific schema incompatibilities ([#4623](https://github.com/github/copilot-cli/issues/4623)) create a "MCP tax" on every session — users are paying for tools they never invoke.

- **Update channel confusion**: The prerelease lookup bug ([#4605](https://github.com/github/copilot-cli/issues/4605)) means users can be silently pinned to older builds, missing critical fixes without realizing it.

- **Platform-specific regressions**: From embedded environment issues ([#4485](https://github.com/github/copilot-cli/issues/4485)) and Wayland clipboard failures ([#4615](https://github.com/github/copilot-cli/issues/4615)) to GPFS/NFS hangs ([#4053](https://github.com/github/copilot-cli/issues/4053)), users on non-macOS/macOS-default setups continue to hit edge cases that shipped regressions.

- **Enterprise auth friction persists**: Private repository credential helpers breaking plugins ([#4103](https://github.com/github/copilot-cli/issues/4103)) and Entra ID authentication (now fixed in v1.0.81-12) show a recurring theme: enterprise authentication remains a secondary concern that gets iterated on reactively.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026-08-27**

**1. Today's Highlights**  
Activity is quiet, with no new releases in the last 24 hours. However, a critical bug (#2620) has been reported where a scheduled cron reminder can permanently overwrite an in-progress assistant reply in the terminal transcript, with no recovery path. Concurrently, a community PR (#2619) is in review to fix a related cancellation bug in nested soul tasks, addressing issue #2615.

**2. Releases**  
No new versions were published in the last 24 hours. The latest stable release remains available via the repository's releases page (https://github.com/MoonshotAI/kimi-cli/releases).

**3. Hot Issues**  
*Only one issue was updated in the last 24 hours.*

- **[#2620 – Cron fire mid-reply swallows the previous assistant reply; unrecoverable via Ctrl+O](https://github.com/MoonshotAI/kimi-cli/issues/2620)**  
  *Author: tizerluo* | *Comments: 0* | *Reactions: 0*  
  **Why it matters:** This is a data-loss bug in the interactive terminal UI. When a cron job fires while the assistant's reply is still being rendered, it replaces the visible turn, and the user cannot scroll back or expand it via Ctrl+O. For CLI users who rely on long-form responses, this is a significant UX regression with zero workaround.  
  **Community reaction:** No comments yet—this is a fresh report. However, its severity (unrecoverable loss) and relationship to the asynchronous task lifecycle make it a priority candidate for maintainers.

**4. Key PR Progress**  
*Only one PR was updated in the last 24 hours.*

- **[#2619 – fix(soul): cancel nested task on outer cancellation](https://github.com/MoonshotAI/kimi-cli/pull/2619)**  
  *Author: koriyoshi2041* | *Comments: N/A* | *Reactions: 0*  
  *Fixes: #2615*  
  **Description:** Includes the initial `asyncio.wait()` in the `run_soul` lifecycle cleanup, ensuring nested soul/cancel-event tasks are properly cancelled and awaited when the outer coroutine is cancelled. Includes a regression test for cancellation during a running nested task.  
  **Status:** Open for review. This is a solid, test-backed fix that closes a known leak/ghost-task path in the soul module, directly aligning with the crash/cleanup issues reported upstream.

**5. Feature Request Trends**  
No new Feature Requests were filed in the last 24 hours. Based on the current open issue set and recent PRs (including #2619 and prior camel/soul work), the dominant feature directions remain:
- **Reliable async task lifecycle** – explicit cancellation, cleanup, and non-blocking executor behavior.
- **Resilient terminal transcript management** – preventing UI corruption, supporting recovery of lost turns.

**6. Developer Pain Points**  
- **Async/nested task cancellation leaks** – devs continuing to hit ghost tasks need full lifecycle guarantees (evident in #2619’s regression coverage).
- **Terminal state corruption under concurrent events** – the emerging theme from #2620 is that scheduled/cron events can corrupt visible state. Both this and the async cleanup issues point to a need for stricter state isolation in the interactive loop.

---  
*Data sourced from MoonshotAI/kimi-cli. All links are canonical GitHub URLs.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-27

## Today's Highlights

The community remains heavily focused on agent reliability, with multiple reports of infinite tool-call loops and token burn in subagent sessions — one incident logged 364 identical `grep` calls over 50 minutes. A fast-moving batch of contributor PRs landed today targeting CLI argument parsing bugs (notably `opencode run -f`), TUI startup crash cleanups, and desktop renderer OOM on large pastes. The long-running Memory Megathread (#20695) continues to serve as the central hub for heap snapshot collection, with 138 comments and significant community engagement.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#45442 — Subagent infinite loop with no loop protection](https://github.com/anomalyco/opencode/issues/45442)**
   A background `general` subagent issued **364 identical grep tool calls** over ~50 minutes before being stopped. Zero loop protection, uncontrollable token burn. The most severe instance of a pattern the community has reported at least four times this week.

2. **[#43603 — No effective no-progress/loop detection](https://github.com/anomalyco/opencode/issues/43603)**
   Agent enters infinite loop when a file/path is missing rather than asking for clarification. Same root pattern as #45442 — filesystem investigation loops are the #1 reliability complaint this week.

3. **[#43673 — Non-terminating loop, 40+ identical greps, user aborts](https://github.com/anomalyco/opencode/issues/43673)**
   Community duplicate of the loop problem with **3 upvotes** in 24h — signals the "loop protection" feature is the top priority for the maintainers to address urgently.

4. **[#38723 — `opencode run` hangs during init (~56% failure rate)](https://github.com/anomalyco/opencode/issues/38723)**
   CLI intermittently hangs before session creation — zero stdout, zero error, hangs at `message=init`. No workaround posted; high-impact for CI and scripted workflows.

5. **[#20695 — Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)**
   Still the #1 community issue with 138 comments and 105 👍. Maintainers explicitly request heap snapshots and warn users NOT to run their LLM and suggest solutions. Central coordination point for memory leak reports.

6. **[#31606 — Switching model mid-session breaks `session_message.seq`](https://github.com/anomalyco/opencode/issues/31606)**
   SQLite `NOT NULL constraint failed` after model switch — subsequent messages in that session permanently fail. Known workaround: start a new session, but no ETA on fix.

7. **[#45501 — `run -f FILE` swallows positional prompt](https://github.com/anomalyco/opencode/issues/45501)**
   `opencode run -f file "prompt"` treats the prompt as another file path. Reported today with a clear reproduction. **Fixed by PR #45510 within hours** of being filed.

8. **[#45521 — CodeMode tool discovery: three docs, one working form](https://github.com/anomalyco/opencode/issues/45521)**
   Three surfaces document `search(input)` differently; only the bare form works on 1.18.21. README's "never fails" claim is demonstrably false. Annoying for prompt-engineers relying on CodeMode.

9. **[#33595 — Bundled binaries can SIGILL; baseline package may not be truly baseline](https://github.com/anomalyco/opencode/issues/33595)**
   Downstream maintainer tracked `Illegal instruction` crashes for ~2 months. Red Hat's Binutils link: baseline x86-64 package may contain AVX-512 instructions. **Closely related to closed #33890 (Bun SIGILL on Zen4).**

10. **[#42657 — TUI lag: 97% CPU on render thread with 2-4 subagents](https://github.com/anomalyco/opencode/issues/42657)**
    Typing delay of 1–3 seconds with concurrent subagents, reproduced across Warp, Windows Terminal, and WezTerm. Profiling shows render thread is the bottleneck — a TUI performance regression that needs triage.

## Key PR Progress

1. **[#45520 — Bump @ai-sdk/amazon-bedrock to 4.0.165 for reasoning variants](https://github.com/anomalyco/opencode/pull/45520)**
   Fixes HTTP 400 errors for GPT-5.6 Bedrock reasoning profiles (`Closes #45405`). One-line dependency bump with lockfile regeneration.

2. **[#45510 — Keep positional message out of `-f` in run](https://github.com/anomalyco/opencode/pull/45510)**
   Fixes yargs greedy array consumption where `-f` swallowed the positional prompt (`Closes #40304`, covers #45501). Directly addresses today's report.

3. **[#45518 — Stop printing abort stack traces on Ctrl+C during startup](https://github.com/anomalyco/opencode/pull/45518)**
   `Closes #45409`. Startup location refresh was logging every rejected promise; Ctrl+C aborts now exit cleanly.

4. **[#45508 — Use WebSocket RPC for desktop server requests](https://github.com/anomalyco/opencode/pull/45508)**
   Stacked on `websocket-rpc` endpoint PR (#45488). Converts the desktop app to native WebSocket RPC transport; part of the 2.0 architecture push.

5. **[#45507 — Normalize finish_reason and strip assistant prefill for SAP AI Core](https://github.com/anomalyco/opencode/pull/45507)**
   Fixes 400 errors (`Closes #45313`, #45314). Strips trailing assistant messages in `ProviderTransform.message` — critical for SAP AI Core users.

6. **[#45497 — Prevent renderer OOM on multiline paste](https://github.com/anomalyco/opencode/pull/45497)**
   A 1,000-line paste generated 2,001 input events, each serializing the growing draft. Contributor PR addressing an app-level crash — high impact for desktop users pasting large context.

7. **[#45513 — Summarize `agent list` output; full rules behind `--verbose`](https://github.com/anomalyco/opencode/pull/45513)**
   `agent list` printed 8,600+ lines / 222 KB of fully resolved permission rules. Now one line per agent by default. Significant CLI UX improvement.

8. **[#45509 — Scope MCP picker toggles to workspace](https://github.com/anomalyco/opencode/pull/45509)**
   Fixes toggling the wrong MCP server when multiple workspaces share the same name. Now passes the active workspace directory to the toggle hook.

9. **[#45505 — Use Bun 1.4 for CI dependency installs (not runtime)](https://github.com/anomalyco/opencode/pull/45505)**
   Windows CI was slow due to hoisted linker workarounds; Bun 1.4 has the upstream patched-peer fix. CI-only change, runtime stays at 1.3.14 (which itself has a segfault issue per #33890).

10. **[#45515 — Align thinking states and reasoning settings in the app](https://github.com/anomalyco/opencode/pull/45515)**
    Replaces the reasoning-summary toggle with Figma model reasoning settings (Hidden/Compact/Full). Show Thinking only for latest unfinished reasoning part. 2.0 UI polish.

## Feature Request Trends

- **Loop / no-progress detection** (#43603, #43673, #43800, #45442, #45456): The overwhelming #1 request — users explicitly ask for a "maximum identical tool calls" guard and automatic loop termination.
- **i18n for TUI** (#37216): App and console have 17+ locales; terminal UI remains English-only. Small but growing demand.
- **Extend CodeMode to built-in tools** (#43137): Beyond the current experimental scope — users want permission-gated tool wrapping for built-ins.
- **Remote control via QR + mobile attach** (#45437): Mirror Claude Code's `rc` experience — QR pairing, mobile Web UI, session sync. One vocal user filed this as an RFC today.
- **No new releases** → feature demand outpaces supply; the community is self-organizing around reliability and UX gaps rather than new capabilities.

## Developer Pain Points

- **Subagent infinite loops** — Multiple near-duplicate reports (#43673, #43603, #43800, #45442) in a single week. The echo chamber effect is real: **users are frustrated enough to file duplicates**, signaling the urgency.
- **Session corruption after model switch** (#31606) — Permanently kills a session; users must create a new session, losing context mid-task.
- **Intermittent hangs in `opencode run`** (#38723) — 56% failure rate observed; zero diagnostics on failure. Devastating for CI pipelines.
- **Native binary crashes** (#33890, #33595) — Bun 1.3.14 SIGILL on Zen4 and potentially non-baseline x86-64 binaries. Users on modern AMD hardware hit `Illegal instruction` at startup.
- **Abort leads to orphaned sub-sessions** (#42286, #37314) — Pending task calls remain in transcript after abort; resources persist indefinitely.
- **Hidden refusal responses in Go subscription** (#44958) — Run completes with zero UI output, no error; user has no idea the model refused or the run failed.

**Bottom line:** The community is organized and vocal about reliability: loops, hangs, crashes, and session corruption dominate the backlog. PR velocity is high on the contributor side (10+ merged today alone), but the memory issues and subagent loop protection remain the top unaddressed items on the roadmap.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-27

## Today's Highlights
A busy day of bug-fixing and polish: the team closed a batch of regressions from the 0.84.3 release, including proxy errors, extension loading failures, and Windows PowerShell issues. Performance work continued on both the TUI and streaming pipeline, with PRs targeting O(n²) thinking-signature serialization and slow prompt-editor cursor movement. Several UX gaps in the fullscreen TUI — click-to-position cursor, selection-aware editing, and non-segmented path selection — also landed or advanced.

---

## Releases
No new releases in the last 24 hours. Latest is **v0.84.3**, with known regressions tracked per issue below.

---

## Hot Issues

1. **[#6879 — auto-compaction never triggers until provider overflow](https://github.com/earendil-works/pi/issues/6879)** · *24 comments · 19 👍*  
   A 2-hour agentic turn on GPT-5.6-sol climbed past 100% context, only compacting when the API rejected at 373k tokens. Community pushes for compaction checks after every agentic step, not just message boundaries. Highest-signal open bug this week.

2. **[#8029 — Very slow prompt-editor movement with large buffers](https://github.com/earendil-works/pi/issues/8029)** · *9 comments*  
   Moving the cursor in a ~7,000-line prompt buffer takes 1,650ms per arrow key. Linear-time redraw per keypress points to missing incremental rendering. Community expects a fix to be foundational to large-prompt workflows.

3. **[#8610 — HttpsProxyAgent not a constructor with google-vertex in v0.84.3](https://github.com/earendil-works/pi/issues/8610)** · *4 comments*  
   Code-splitting in 0.84.3 broke proxy support for google-vertex. Reported with a clear root cause (bundle split separates the class from its import). Likely urgent for enterprise users behind egress proxies.

4. **[#8620 — Every global extension fails with "Cannot find module '@earendil-works/pi-coding-agent'"](https://github.com/earendil-works/pi/issues/8620)** · *4 comments*  
   Post-upgrade to 0.84.3, all extensions importing `@earendil-works/pi-*` packages fail to load. Suggests bundled CLI no longer exposes those internal modules to extensions — a breaking change that shipped without warning.

5. **[#7053 — Parallel tool batches lose completed results when one sibling stalls](https://github.com/earendil-works/pi/issues/7053)** · *4 comments*  
   Follow-up to #3503: UI fires per-tool `tool_execution_end` but persistence still waits on `Promise.all`. A single hanging tool orphan its siblings' `toolCalls`; the model sees "No result provided" for *all* tools in the batch.

6. **[#7724 — Cold restore replays overflow assistant message removed by live recovery](https://github.com/earendil-works/pi/issues/7724)** · *4 comments*  
   After compaction, reopening the session resurrects the failed/truncated assistant response, contaminating model history. A session-persistence/recovery mismatch that degrades context integrity across restarts.

7. **[#8711 — TUI pegs 100% CPU while streaming GLM-5.3-flash thinking](https://github.com/earendil-works/pi/issues/8711)** · *1 comment*  
   `reasoning_details` stored as one object per token causes progressive slowdown to a full freeze. Root cause identified; likely related to the O(n²) reserialization fixed in PR #8671.

8. **[#8688 — Windows powershell stub prepends stray "." to every command](https://github.com/earendil-works/pi/issues/8688)** · *3 comments*  
   The UTF-8 encoding prefix is glued to the first word (`.<command>`), which PowerShell parses as member access — breaking essentially every command. Closed quickly, but emblematic of Windows-shell handling fragility.

9. **[#8675 — TUI renders one word per line (WSL2/Windows Terminal)](https://github.com/earendil-works/pi/issues/8675)** · *2 comments · 3 👍*  
   Word wrapping broke in 0.84.3 on WSL2. Same symptom as auto-closed #8621, but this report reproduces consistently. Community wants it treated as a release-blocking regression.

10. **[#8705 — Unhandled rejection in agentLoop leaves EventStream hanging](https://github.com/earendil-works/pi/issues/8705)** · *2 comments*  
    `void runAgentLoop(...).then(...)` without `.catch()` — any rejection hangs the stream silently. Fixed in PR #8704 within hours; good example of the project's fast bug-to-fix turnaround.

---

## Key PR Progress

1. **[#8719 — fix(ai): treat whitespace-only tool results as empty output](https://github.com/earendil-works/pi/pull/8719)** · *merged*  
   Filters `"\r\n"`-only tool output before sending to providers; OpenAI-compatible APIs reject whitespace-only tool message content with HTTP 400.

2. **[#8708 — fix(coding-agent): resolve fd/rg versions without the GitHub API](https://github.com/earendil-works/pi/pull/8708)** · *open*  
   Replaces `api.github.com/repos/<repo>/releases/latest` lookups with a static version table — avoids the 60 req/hr anonymous quota that bricks shared-IP downloads.

3. **[#8707 — fix(ai): keep zai thinking enabled for forced-thinking models](https://github.com/earendil-works/pi/pull/8707)** · *merged*  
   Fixes reasoning leaking into output on GLM-5.3/5.3-flash when thinking is toggled off: sends `thinking: null` instead of `thinking: { type: "disabled" }` for models where `thinkingLevelMap.off === null`.

4. **[#8704 — fix(agent): end event stream on unhandled loop rejection](https://github.com/earendil-works/pi/pull/8704)** · *merged*  
   Wraps `runAgentLoop(...).then(...)` with a `.catch()` that ends the stream — fixes the hang from #8705.

5. **[#8699 — fix(tui): remove coding-agent config reads from pi-tui](https://github.com/earendil-works/pi/pull/8699)** · *open*  
   Drops the `logDirectory` fallback to `~/.pi/agent` and relies on `getAgentDir()` at construction. Kills a source of cross-package config drift.

6. **[#8678 — feat(tui): edit selected prompt text](https://github.com/earendil-works/pi/pull/8678)** · *open*  
   Lets Backspace/delete act on completed mouse selections in the prompt — a long-standing text-editing gesture gap. Small change, high UX payoff.

7. **[#8696 — fix(tui): handle Apple Terminal meta arrows](https://github.com/earendil-works/pi/pull/8696)** · *merged*  
   Recognizes Terminal.app's `ESC ESC [ A-D` as Alt+arrow, with buffering so fragmented stdin chunks emit as one key event. Coexists with WezTerm's existing handling.

8. **[#8676 — fix(tui): alt screen double-click no longer splits paths on / and -](https://github.com/earendil-works/pi/pull/8676)** · *merged*  
   Joins `Intl.Segmenter` word segments across `/` and `-` boundaries — fullscreen path selection now selects the whole path.

9. **[#8671 — fix(ai): serialize thinking signature once](https://github.com/earendil-works/pi/pull/8671)** · *merged*  
   Fixes O(n²) revalidation/reserialization of accumulated `thinkingSignature` on every streaming chunk. Directly addresses the 100% CPU freeze from #8711 and slowdowns in #8648.

10. **[#8627 — Use ctx.cwd for cwd-sensitive tools](https://github.com/earendil-works/pi/pull/8627)** · *merged*  
    All built-in tools (read/write/edit/grep/find/ls) now resolve paths via `ctx.cwd` from `ExtensionContext`, falling back to tool-creation cwd. Fixes session-switch disconnects.

---

## Feature Request Trends

- **Session/history portability** — Multiple requests for fork-across-cwd (#8269), carrying history between sessions, and better cold-restore fidelity after compaction (#7724).
- **TUI editor UX parity with GUI editors** — Click-to-position cursor (#8547, merged), selection-aware edit (#8678), mouse-wheel scroll speed control (#8716), and fullscreen path-aware selection (#7746, fixed in #8676) together signal strong appetite for mouse-first fullscreen editing.
- **System-prompt customization reliability** — #8391 asks for a reliable way to modify the system prompt while preserving plugin additions; current workarounds all have fundamental flaws.
- **Startup latency reduction** — #8689 asks for an editable provisional composer while Pi loads extensions/skills/models — treat startup as an opportunity, not a blocker.
- **Hyperlink detection override** — #8665 requests `PI_HYPERLINKS=1|0|auto` to escape PTY-proxy detection failures — a recurring "add an escape hatch" pattern across the ecosystem.

---

## Developer Pain Points

- **0.84.3 regressions** — Multiple reports of broken proxy support (#8610), all extensions failing to load (#8620), and Windows Powershell breakage (#8582, #8688). The release bundled multiple breaking changes without migration warnings.
- **Context management remains the #1 stability issue** — Auto-compaction not triggering (#6879, 24 comments) plus cold-restore replaying truncated history (#7724) undermine trust in long-running sessions.
- **Parallel tool execution is fragile** — A single stalling sibling in a parallel batch orphans all results (#7053), turning one slow tool into a cascade of "No result provided" errors.
- **Windows ecosystem friction** — Repeated issues around PowerShell 5.1 vs pwsh (#8582), `.cmd` spawn failures swallowing ENOENT (#8715), and encoding-prefix corruption (#8688) make Windows the least-smooth platform for extensions.
- **Extension API footguns** — Modules from bundled CLI no longer resolvable (#8620), `exec()` failing silently on Windows (#8715), and `sendCustomMessage` bypassing `before_agent_start` (#8712) all point to an extension API that needs hardening and better integration testing.
- **Performance cliffs appear in “happy path” usage** — 7,000-line prompt buffers (1.6s/keypress) and GLM-style streaming (100% CPU) are both ordinary usage patterns hitting algorithmic O(n²) paths. Future-facing lesson: streaming and large-buffer paths need per-operation complexity audits.

---
*Digest generated from github.com/badlogic/pi-mono activity on 2026-08-27.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-27

## Today's Highlights
Qwen Code v0.22.2 shipped with a breaking refactor that moves the persistent Node REPL to a standalone MCP server. The community is actively reporting Agent Team stability issues, with several race conditions now tracked as separate issues and corresponding fixes already in PR. A new `permissions.allow` semantic change in 0.22.1 has sparked community concern over undocumented breaking behavior.

## Releases
**v0.22.2** — [Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.22.2)
- **Breaking**: The persistent Node REPL is now delivered as a standalone MCP server ([#9499](https://github.com/QwenLM/qwen-code/pull/9499)) by @LaZzyMan

Additional supporting releases:
- **Qwen Code Desktop v0.2.2** — includes a fix converging continuation prompts on one guarded contract by @qqqys ([#9834](https://github.com/QwenLM/qwen-code/pull/9834))
- **cua-driver-rs v0.20.1** — prebuilt binaries for macOS (codesigned + notarized), Linux (x86_64 + arm64, glibc 2.31), and Windows

## Hot Issues

1. **[#8662](https://github.com/QwenLM/qwen-code/issues/8662) — Migrate TUI rendering layer from ink to OpenTUI (tracking)** — 9 comments. Long-standing effort to replace the heavily patched ink 7 renderer (~1037 lines of patches) with OpenTUI due to structural flicker problems. Key roadmap item for terminal UX.

2. **[#5837](https://github.com/QwenLM/qwen-code/issues/5837) — Last response from agent gets cut off** — 7 comments. CLOSED (need-information). Users report agent output truncation mid-response despite full data in debug logs. Still not root-caused.

3. **[#10000](https://github.com/QwenLM/qwen-code/issues/10000) — `/find-simplifications` candidate ledger** — 7 comments. Long-lived ledger tracking dead code and stale files across the repo. Demonstrates project-wide code simplification effort.

4. **[#10227](https://github.com/QwenLM/qwen-code/issues/10227) — Custom model provider cannot chat (invalid JSON schema)** — 5 comments. Moonshot-flavored schema validation rejects tool definitions; `properties` must be an object. Chinese-language report from community.

5. **[#10218](https://github.com/QwenLM/qwen-code/issues/10218) — `permissions.allow` semantics changed in 0.22.1** — 4 comments. **High community impact**: allowlist now acts as whitelist — uncovered tools are disabled outright (no prompt), undocumented behavior change. Users must restart to re-evaluate.

6. **[#8586](https://github.com/QwenLM/qwen-code/issues/8586) — Track activeWork and background Agent recovery** — 4 comments. Feature request for daemon health metrics and recovery path for stalled background agents.

7. **[#8319](https://github.com/QwenLM/qwen-code/issues/8319) — Agent thinking presentation is terrible** — 4 comments. CLOSED. Dynamic thinking area size causes content to jump up/down, making reading difficult. UI regression concern.

8. **[#10211](https://github.com/QwenLM/qwen-code/issues/10211) — Agent Team: initial teammate result may be lost before event bridge attachment** — 3 comments. Narrow race window in in-process Agent Team spawn path.

9. **[#10209](https://github.com/QwenLM/qwen-code/issues/10209) — Agent Team: stale reclaim can delete a newer live team generation** — 3 comments. Concurrent reclaim on same stale team name can delete a newer team. Welcome-PR flagged.

10. **[#10208](https://github.com/QwenLM/qwen-code/issues/10208) — Agent Team: failed concurrent spawn can persist a ghost member** — 3 comments. Rollback removes from memory but not the persisted roster. Welcome-PR flagged.

11. **[#10242](https://github.com/QwenLM/qwen-code/issues/10242) — E2E on main: GitHub-hosted runners can't reach Aliyun Beijing endpoint** — 3 comments. Intermittent CI flakiness; not a code regression.

12. **[#10254](https://github.com/QwenLM/qwen-code/issues/10254) — CI: merge queue has not run since 2026-07-02** — 2 comments. **High priority (P1)**: no required checks on main; semantic conflicts land silently. Community infrastructure risk.

## Key PR Progress

1. **[#9499](https://github.com/QwenLM/qwen-code/pull/9499) — refactor(node-repl)!: deliver the persistent Node REPL as a standalone MCP server** — Breaking change shipped in v0.22.2. Modularizes the Node REPL out of core.

2. **[#10260](https://github.com/QwenLM/qwen-code/pull/10260) — fix(goal): stamp wind-down hand-off only when delivered** — Marks the budget hand-off only when the turn is actually delivered, per rule in #10013. Prevents premature budget transition signaling.

3. **[#10259](https://github.com/QwenLM/qwen-code/pull/10259) — refactor(core): hold Goal sends to caller's recursion budget** — Audits Goal send carve-outs; one exemption removed since Goals now have their own spend bound (#9891).

4. **[#10223](https://github.com/QwenLM/qwen-code/pull/10223) — fix(core): remove ghost members after failed concurrent spawn** — Compensating `writeTeamFile()` in catch block repairs persisted team roster after rollback. Fixes #10208.

5. **[#10236](https://github.com/QwenLM/qwen-code/pull/10236) — fix(core): make stale team reclaim generation-safe** — Separates staleness decision from cleanup to avoid deleting newer live generations. Fixes #10209.

6. **[#10100](https://github.com/QwenLM/qwen-code/pull/10100) — fix(core): Reclaim command hook process trees** — Process groups on POSIX with bounded SIGTERM→SIGKILL; Windows uses `taskkill.exe /F /T`. Addresses orphaned hook processes.

7. **[#10183](https://github.com/QwenLM/qwen-code/pull/10183) — feat(memory): structured on-demand recall** — Evolves auto-memory from flat prompt to two-level ref/title tree with query-focused metadata subtree and dedicated recall tool.

8. **[#9970](https://github.com/QwenLM/qwen-code/pull/9970) — perf(cli): reduce TUI render overhead** — Incremental terminal output in virtual-viewport mode; memoized history body. Directly addresses the ink-renderer pain point.

9. **[#10198](https://github.com/QwenLM/qwen-code/pull/10198) — feat(channels): owner-scoped named sessions** — Opt-in named-task catalog for daemon channels; up to 8 named tasks per sender. Session scope `user` + `multiSession`.

10. **[#9739](https://github.com/QwenLM/qwen-code/pull/9739) — feat(core): bind PRs created via `gh pr create` in session shell** — Closes the last binding-source gap: shell-created PRs now bound to sessions via a shared detector (live + parse paths).

11. **[#10158](https://github.com/QwenLM/qwen-code/pull/10158) — feat(core): address sessions by name from send_message / list_agents** — Send side of cross-session messaging, complementing receive side from #9576.

12. **[#10076](https://github.com/QwenLM/qwen-code/pull/10076) — feat: chat transcript mr2a HTML export** — Exports chat transcripts as HTML for MR2A format.

## Feature Request Trends

- **Agent Team stability & lifecycle management** — Multiple race-condition fixes in-flight; community actively contributing `welcome-pr` fixes.
- **Structured memory & recall** — Auto-memory evolution toward explicit push/pull protocols with tool-driven recall.
- **Cross-session messaging & coordination** — Sessions can now discover and message each other by name.
- **Web shell improvements** — Session search by content, PR state display, hidden session-source switches.
- **Context compression** — Long-running tasks hit context limits without auto-compression; `/compress` unreliable.
- **Background agent recovery** — Explicit `activeWork` fact in daemon health, recovery for stalled agents.

## Developer Pain Points

- **Undocumented breaking changes** — `permissions.allow` semantic shift in 0.22.1 disabled tools outright without prompting (issue #10218). Community requests documentation alongside behavior changes.
- **CI infrastructure fragility** — E2E flakiness at Aliyun Beijing endpoint (intermittent reachability); merge queue silent since July 2, no required checks on main → semantic conflicts land silently.
- **TUI rendering issues** — Persistent flicker and "jumping" content in agent thinking panels; the OpenTUI migration is a tracking issue but moves slowly.
- **Context window exhaustion** — Long-running tasks degrade without automatic compression; `/compress` appears ineffective in some cases (#3447).
- **Agent infinite loops** — Repeated file reading without progress, especially when memory is enabled (#4700).
- **Process tree leakage** — Command hooks, ACP children, and MCP servers can outlive channel/daemon shutdown — addressed by process-group reclamation PRs, but a systemic concern.
- **Race conditions in multi-agent mode** — Concurrent spawns / reclaim can lose events, delete live teams, or persist ghost members — being fixed but represent rough edges in a new feature.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-27

## Today's Highlights

The v0.9.12 cleanup lane continues with a wave of "rescue" PRs preserving contributor-authored fixes onto current `main`, alongside a critical fix for the machine-global runtime store lock that blocked multiple simultaneous sessions. Major architectural discussions are converging around mega-file decomposition, unified tool projection for provider routes, and scoped secret management for embedded hosts.

## Releases

No new releases in the last 24 hours. The community remains on v0.9.12, with the current `main` branch accumulating rescue patches and bug fixes ahead of the next release.

---

## Hot Issues

**1. Mega-file decomposition — [#5586](https://github.com/Hmbown/CodeWhale/issues/5586)**  
[OPEN] The most-discussed issue: `lib.rs` (18.7K lines), `config.rs` (12.3K), `client.rs` (11.1K), and `runtime_threads.rs` (9.3K) are causing maintainability pain. Five comments; the community clearly supports splitting these along with the 20K-line test files. Multiple PRs currently in flight reference this issue as their motivation.

**2. Runtime store owner lock blocks multi-session — [#5630](https://github.com/Hmbown/CodeWhale/issues/5630)**  
[CLOSED] A v0.9.12 regression: the machine-global single-owner lock caused hard failure for every Codewhale after the first on one machine. Filed and closed within 24 hours — the fastest turnaround today, with two PRs (#5634, #5638) addressing it. The fix scopes the thread store per session.

**3. Context pressure warning is transient — [#5620](https://github.com/Hmbown/CodeWhale/issues/5620)**  
[OPEN] Reported by ronohara: context-pressure warnings vanish into scrolling metadata, and the agent doesn't react proactively. Severity rated Medium but "defeats a safety signal." PR #5629 (display-only slice) already merged; the proactive-reaction half remains open.

**4. Control surface for supervised operation — [#5533](https://github.com/Hmbown/CodeWhale/issues/5533)**  
[OPEN] M-Maciej requests per-session control sockets (message/interrupt/relaunch/status) plus `RuntimeBackendKind::External` for supervisors like CI harnesses and terminal multiplexer wrappers. Growing interest from automation users.

**5. Scope MCP secret providers to the owning runtime — [#5637](https://github.com/Hmbown/CodeWhale/issues/5637)**  
[OPEN] New design issue from h3c-hexin: mutating process environment for MCP secrets is unsound once other threads can read the environment. Calls for a process-wide callback or scoped secret provider design. Zero comments yet — early discussion stage.

**6. Unify route-specific tool projection before dispatch — [#5633](https://github.com/Hmbown/CodeWhale/issues/5633)**  
[OPEN] Provider routes accept different tool-schema subsets and wire shapes. Today's per-request-builder decisions make wire tool lists, `tool_choice`, and diagnostics inconsistent. Design issue; PR #5646 provides a stopgap.

**7. Add Xquik to reviewed MCP recommendations — [#5627](https://github.com/Hmbown/CodeWhale/issues/5627)**  
[CLOSED] Users can connect to Xquik's remote MCP server via generic command, but `/mcp add recommended xquik` returns unknown-ID error. Closed — presumably the catalog entry was added.

**8. Localized website clickable controls broken — [#5290](https://github.com/Hmbown/CodeWhale/issues/5290)**  
[CLOSED] Non-English routes had unreliable clickable controls. Treated as localized interaction bug, not copy-only. Now closed — fixed in the web layer.

---

## Key PR Progress

**1. Rescue route-specific tool projection — [#5646](https://github.com/Hmbown/CodeWhale/pull/5646)**  
[OPEN] Supersedes #5636. Stopgap for #5633 preserving h3c-hexin's Moonshot tool-projection fix as the first commit, degrading incompatible tools per-request instead of failing wholesale.

**2. Per-session thread store fix — [#5638](https://github.com/Hmbown/CodeWhale/pull/5638)**  
[CLOSED] The authorized fix for #5630: default store root becomes `$CODEWHALE_HOME/sessions/<id>/runtime`. `CODEWHALE_RUNTIME_DIR` still selects a shared root when intended. (A duplicate #5634 was closed in favor.)

**3. Rescue lifecycle outbox and extract exec agent — [#5645](https://github.com/Hmbown/CodeWhale/pull/5645)**  
[OPEN] Closes #5531, advances #5586. Preserves M-Maciej's contributor commits verbatim; adds opt-in JSONL/webhook lifecycle outbox covering session, turn, stall, and subagent events.

**4. Per-thread usage endpoint with CNY coverage — [#5641](https://github.com/Hmbown/CodeWhale/pull/5641)**  
[OPEN] Clean rescue of contributor PR #5626 by gaord. Adds `GET /v1/threads/{id}/usage` with provider-aware pricing, persisting parent/routed-child costs without double-counting.

**5. Recover MCP login and restore welcome motion — [#5643](https://github.com/Hmbown/CodeWhale/pull/5643)**  
[OPEN] Brings verified 0.9.12 TUI recovery work: localized send/queue actions, points failed OAuth sessions to the real `/mcp login <name>` path, restores the welcome-ocean animation.

**6. Shelter ConfigToml parses on 16 MiB stack — [#5644](https://github.com/Hmbown/CodeWhale/pull/5644)**  
[OPEN] Fixes reproducible debug-build stack overflow in guided provider-setup/config-save. Parses large dispatcher config on a dedicated stack with caller-stack fallback.

**7. Keep read-only probes off the user index lock — [#5642](https://github.com/Hmbown/CodeWhale/pull/5642)**  
[OPEN] Applies `GIT_OPTIONAL_LOCKS=0` to shared internal Git reader so Codewhale doesn't contribute to `.git/index.lock` contention. Also repairs repository-chrome cache keys.

**8. One worker system; retire Keychain product path — [#5632](https://github.com/Hmbown/CodeWhale/pull/5632)**  
[OPEN] Major architecture change: fleet/sub-agents become one worker with `spawn(prompt)` inheriting the parent; roles become labels not permission matrix. Retires OS-keyring backend entirely — `CODEWHALE_SECRET_BACKEND` becomes a no-op.

**9. Persist context pressure warnings — [#5629](https://github.com/Hmbown/CodeWhale/pull/5629)**  
[CLOSED] Addresses the display-only slice of #5620: warning/high/critical pressure now visible in sticky status UI instead of scrolling metadata. Approved and merged.

**10. Embed tsnet for `codewhale web --tailscale` — [#5635](https://github.com/Hmbown/CodeWhale/pull/5635)**  
[OPEN] Opt-in Tailscale embedding; default `codewhale web` stays loopback-only. `--tailscale` requires `--web` (clap validation plus runtime check). Continues the enterprise-launch readiness lane.

---

## Feature Request Trends

- **Supervised/external operation**: Control sockets, `RuntimeBackendKind::External`, and supervisor hooks (#5533) — the through-line for automation and CI integration.
- **Architecture decomposition**: The mega-file split (#5586) is the top community priority, with multiple PRs citing it as motivation.
- **Provider compatibility unification**: Route-specific tool projection (#5633) and per-tool degradation (#5636/#5646) show demand for a unified compatibility layer rather than per-builder fixes.
- **Context pressure as a first-class signal**: From transient (#5620) to persistent UI state (#5629) — and community pushing for proactive agent reactions, not just visibility.
- **Secret management scoping**: Embedded hosts need keyring-backed MCP credentials without process-global environment mutation (#5637).

## Developer Pain Points

1. **Monolithic file sizes**: 18.7K-line `lib.rs` and similar are causing daily friction; contributors explicitly avoid touching these files due to merge-conflict risk.
2. **Machine-global locks**: The v0.9.12 runtime owner lock breaking multi-session workflows was the fastest-closed regression today — a sign the community treats single-machine parallelism as a hard requirement.
3. **Transient diagnostics**: Warnings that vanish into scrolling metadata defeat user trust in safety signals; the quick merge of #5629 signals maintainers prioritize persistent status UI.
4. **Lost contributor work**: The "rescue" PR pattern (preserving original commits verbatim) reveals a broader issue: work on older branches regularly needs manual porting to current `main`.
5. **MCP discovery friction**: Reviewed recommendations missing entries (e.g., Xquik) forces users into manual endpoint configuration — a recurring onboarding annoyance.

---

*Digest generated from [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) public activity on 2026-08-27.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*