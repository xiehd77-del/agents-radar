# AI CLI Tools Community Digest 2026-08-30

> Generated: 2026-08-30 04:14 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Comparison Report — 2026-08-30

## 1. Ecosystem Overview

The AI CLI development ecosystem is in a **stabilization phase**, with most tools balancing feature velocity against reliability regressions. The dominant themes across all seven tools are **Windows reliability issues** (packaging, auto-update failures, sandbox ACL errors), **token/cost transparency** (meter depletion, cache billing, retry loops), and **agent behavior correctness** (false success reporting, tool-choice quality, multi-agent coordination). Open-source tools continue to close feature parity gaps with commercial offerings — notably Gemini CLI's Claude Code migration fidelity fixes and DeepSeek TUI's explicit "Claude Code parity" requests — while commercial tools (Claude Code, Codex) face community backlash over regressions that revert previously-shipped fixes. The ecosystem is converging on common patterns: MCP integration robustness, subagent observability, session persistence, and provider-agnostic architectures.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Release Cadence | Notable Blocker |
|---|---|---|---|---|---|
| **Claude Code** | ~10 significant | 1 stale (3 mo) | **None** | Slow (waiting on fixes) | Auto Mode bash-first regression (#88041, 👍26) |
| **OpenAI Codex** | ~10 significant | 8 (active) | **rust-v0.151.0** | Rapid | Windows desktop instability (7/20 top issues) |
| **Gemini CLI** | ~10 significant | 10 (active) | **v0.59.0-nightly** | Very rapid (daily) | Subagent false "GOAL success" (#22323) |
| **Copilot CLI** | ~10 significant | 2 (sparse) | **v1.0.82, -2** | Patch-focused | MCP regressions in v1.0.81 (3+ issues) |
| **Kimi Code** | 1 | 0 | **None** | Dormant | Quota billing >10x amplification (#2626) |
| **OpenCode** | ~10 significant | 10 (active, bot-driven) | **None** | Moderate (PR gate heavy) | system-reminder duplication (#46217) |
| **Pi** | ~10 significant | 10 (active) | **None** | Moderate | TUI row corruption (#8584, 25 comments) |
| **Qwen Code** | ~10 significant | 10 (active) | **None** (v0.22.3 nightly failed) | Moderate | llama.cpp grammar 400s (#10520, #10530) |
| **DeepSeek TUI** | ~10 selected | 10 (active) | **None** (v0.9.12 gated) | Feature-branch | NoNewPrivs blocks sudo (#5723) |

**Key insight:** Gemini CLI's nightly cadence and Codex's v0.151.0 indicate active core teams. Claude Code's zero-release day amid urgent regressions is a concern signal. DeepSeek TUI's gated v0.9.12 (72 commits) shows deliberate release discipline.

---

## 3. Shared Feature Directions

Across communities, these requirements recur with notable frequency:

| Shared Need | Tools Reporting | Specific Ask |
|---|---|---|
| **Windows reliability overhaul** | Claude Code (#80444, #85199), Codex (#41241, #41540), Pi (#8846), Qwen (#10538), DeepSeek (#1754) | MSIX lifecycle fixes, no console-window flashes, no headless startup, native Windows path handling |
| **Cost/quota transparency** | Claude Code (#87419), Kimi (#2626), Copilot (#4663), Gemini (#26522) | Honest billing metrics, cache-hit indicators, no silent retry-forever loops |
| **Tool-choice/model control** | Claude Code (#88041, #87971), Gemini (#21968), OpenCode (#20235), DeepSeek (#5713) | User-configurable tool strategy, dynamic model routing, wire-dialect control |
| **Subagent observability** | OpenCode (#41249), Gemini (#22598), Claude Code (Cowork issues), Qwen (#8172) | Live subagent/teammate status views, honest termination reporting, trajectory visibility |
| **MCP integration robustness** | Copilot (#4647, #4660, #4662), Gemini (#29110), Codex (#41199), OpenCode (#46210) | OAuth metadata discovery, shared subprocess pools, configurable grace periods |
| **Session persistence/resume** | Copilot (#4165, #4664), Pi (#8843), Gemini (compaction), OpenCode (#46215) | Lazy parsing, checkpointing, crash-recovery visibility |

**Takeaway:** Windows reliability and cost transparency are the **ecosystem's two largest shared pain points**. Any vendor solving these decisively gains differentiation.

---

## 4. Differentiation Analysis

| Tool | Positioning | Target User | Technical Approach | Strengths | Weaknesses |
|---|---|---|---|---|---|
| **Claude Code** | Premium desktop+CLI; agentic autonomy | Enterprise, power users | Bash-first auto mode; Cowork peer sessions; MSIX desktop app | Strong brand, deep agentic workflows | Regressions between releases; Windows packaging fragility; slow PR review |
| **OpenAI Codex** | Research-grade multi-model; remote control | Developers using OAuth/ChatGPT account | Rust core; MCP extensions; browser-use agents | Fast iteration (v0.151.0); robust extension hooks | Windows reliability scattered; safety-check overreach |
| **Gemini CLI** | Rapid nightly innovation; ACP/agent-skill standard | Developers migrating from Claude Code | Nightly builds; skills/agents standard; hook fidelity | **Fastest release cadence**; strong migration compatibility focus | Subagent reliability gaps; false success reporting |
| **Copilot CLI** | GitHub-native; plugin system | GitHub-centric devs | Agent Plugins 1.0; MCP servers; `copilot` CLI | Deepspread GH integration; patches shipping | Patch-only pace; MCP regressions; retry-forever bugs |
| **Kimi Code** | Lightweight; quota-plan simplicity | Chinese-language users, light CLI | Minimal tool; cache integration | Simple UX | Dormant activity; billing transparency critical |
| **OpenCode** | Open-source swiss-army; ACP/TUI/Desktop | Tinkerers, BYO providers | Multi-provider; ACP; web/TUI/desktop apps | Broad provider support; community PRs | Review-gate friction; provider-content hygiene |
| **Pi** | Rust-based TUI; terminal-first | Terminal purists; LLM protocol researchers | Event-driven TUI; hooks; JSONL sessions | Clean architecture; thoughtful hooks | Windows second-class; smaller user base |
| **Qwen Code** | Multi-agent orchestration; WebShell | Chinese dev ecosystem; multi-turn workflows | Agent Team; WebShell UI; daemon SDK | Feature-rich multi-agent; active CI fixes | WebShell cutover instability; llama.cpp compatibility |
| **DeepSeek TUI** | Modular Rust TUI; BYOK multi-wire | Power CLI users; self-hosters | Crate decomposition; cloud dispatch; Concentrate BYOK gateway | Rapid architectural maturation; strong contributor rescue culture | Sandbox/host workflow friction; i18n gaps |

**Core differentiation axis:** **Windows support quality** (Everyone vs. Pi/DeepSeek), **release velocity** (Gemini vs. Claude Code), **provider flexibility** (DeepSeek/OpenCode vs. Copilot), **agent observability** (OpenCode/Gemini vs. Kimi).

---

## 5. Community Momentum & Maturity

**High momentum (rapid iteration, active maintainers):**
- **Gemini CLI** — Daily nightlies, 10 active PRs, strong migration fixes → **Fastest-maturing**
- **OpenCode** — Bot-assisted PR flow shows CI that lands work; 10 PRs in 24h → **Scaling quickly**
- **DeepSeek TUI** — 72-commit release branch, rescue PR culture, multiple new features → **Deliberate velocity**
- **Qwen Code** — 10 PRs, CI hardening, active bugfix batch → **Stabilizing after big change**

**Moderate momentum:**
- **OpenAI Codex** — Feature-rich release (v0.151.0) but Windows issues drag sentiment
- **Copilot CLI** — Patch releases only; PR tracker sparse; community frustrated by regressions

**Low momentum (concerning signals):**
- **Claude Code** — No releases, 1 stale PR (3 months), multiple regressions open → **Risk of community erosion**
- **Kimi Code** — Quiescent; 1 issue, 0 PRs → **Maintenance-only mode**

**Maturity signal:** Claude Code's community has the **highest expertise** (users find binary-embedded prompts, decode OAuth token claims), but also the **highest frustration threshold** (5 issues on one regression with double-digit 👍s). Gemini and DeepSeek are actively converting Claude Code users via migration-fidelity fixes — an explicit competitive play.

---

## 6. Trend Signals & Recommendations

| Trend | Evidence | Implication for Developers/Vendors |
|---|---|---|
| **Windows is the new Linux** | 30+ Windows-specific issues across all tools in one day | Any CLI tool targeting enterprise must treat Windows as first-class: MSIX lifecycle, no conhost flashes, ACL-sandbox correctness |
| **False success is the new failure** | Gemini (#22323), Claude Code (#90637), Pi (#8753), Codex (#35355) | Agents reporting "GOAL" on interruption, messages "delivered" but lost, compaction promoting partial output — **honest termination reporting** is table stakes for trust |
| **Billing fairness is a retention risk** | Kimi (#2626, >10x), Claude Code (#87419, 4x downgrade embedded in token), Copilot (#4663, full-priced retry loops) | Users *can and do* inspect tokens, quotas, and cache headers. Silent substitution (Gemini #28828, Codex #41593) erodes trust → expose all cost decisions |
| **MCP is the integration backbone** | Copilot (3 regressions in 48h), Gemini (#29110), Codex (configurable grace periods), OpenCode (sharing subprocesses) | Both reliability *and* dev ergonomics (OAuth discovery, dedupe, result interception) are differentiating features |
| **Multi-agent is in the "awkward adolescence"** | Qwen (4+ teammate bugs), Claude Code (Cowork race), OpenCode (#41249), Gemini (#21409 hangs) | Subagent observability, honest per-agent reporting, and reliable spawn/rollback are **the** next battleground |
| **Migration-fidelity as a growth lever** | Gemini hooks/events/timeout fixes (#29124/#29125), DeepSeek "Claude Code parity" requests, OpenCode Copilot routing request (👍29) | Tools actively converting users from Claude Code/Copilot gain traction; **drop-in compatibility is a moat** |

---

## Bottom Line for Technical Decision-Makers

1. **If you're on Windows:** Expect flakiness in every tool; pin versions you trust. Gemini's nightly cadence and Codex's rapid patches are the best bets for fixes landing fast. Claude Code's Windows pain is the most severe (repair loops, GPU crashes, update corruption).

2. **If you value cost predictability:** Avoid Kimi (unexplained billing) and watch Copilot's retry-forever loops (full-priced). Claude Code's metering is actively miscribing Max subscribers. Gemini and Codex are shipping explicit cache/token visibility improvements.

3. **If you're building agent workflows:** All tools need subagent observability; Gemini and OpenCode have the most active work in this area. Honest termination reporting (#22323, #90637) is the ecosystem's #1 trust gap.

4. **If you're a vendor:** Windows reliability, truthful failure reporting, and forward-compatible MCP integration are the three highest-ROI areas to invest in right now. The community is sophisticated enough to detect regressions from binaries — they will punish silent substitutions and reward explicit, honest tooling.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data snapshot: 2026-08-30 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The following Skills have generated the most community discussion through PR activity:

**#1 — skill-creator eval fixes (PR #1298)** — [View PR](https://github.com/anthropics/skills/pull/1298)
A critical fix for `run_eval.py` which reported `recall=0%` for every skill description regardless of content. The bug silently invalidated the entire description-optimization loop across `run_loop.py` and `improve_description.py`. The PR addresses Windows stream reading, trigger detection, and parallel worker issues. **Status:** Open. Discussion centers on the 10+ independent reproductions of the underlying bug (#556) and the urgency of fixing an evaluation pipeline that trains against noise.

**#2 — document-typography (PR #514)** — [View PR](https://github.com/anthropics/skills/pull/514)
A typographic quality-control Skill preventing orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents — issues that affect every document Claude generates. **Status:** Open. The discussion highlights a genuine gap: users rarely _ask_ for good typography, so the Skill must trigger proactively.

**#3 — scnet-hpc (PR #1615)** — [View PR](https://github.com/anthropics/skills/pull/1615)
An operations Skill for SCNet HPC clusters with profile-based SSH and Slurm workflows — covering connection setup, partition/memory/accelerator guidance, job generation, and cluster discovery. **Status:** Open. The discussion signals demand for specialized infrastructure operations beyond generic cloud skills.

**#4 — ODT skill (PR #486)** — [View PR](https://github.com/anthropics/skills/pull/486)
OpenDocument format support: create, fill, read, and convert `.odt`/`.ods` files. Complements the existing docx/pdf skills, closing the LibreOffice/ISO-standard ecosystem gap. **Status:** Open. Discussion underscores the need for broader document-format coverage.

**#5 — Hivemind: zero-cost multi-agent orchestration (PR #1628)** — [View PR](https://github.com/anthropics/skills/pull/1628)
Delegates mechanical work to headless opencode workers on free models while Claude Code remains the sole planner, reviewer, and merger. The insight: "The expensive model's context is the scarce resource, not its intelligence." **Status:** Open. This is the most provocative architectural proposal in the queue.

**#6 — self-audit (PR #1367)** — [View PR](https://github.com/anthropics/skills/pull/1367)
A four-dimension reasoning audit (mechanical file verification first, then damage-severity-prioritized review) applicable to any project, tech stack, or model. **Status:** Open. Active discussion with related proposal #1385.

**#7 — ServiceNow platform (PR #568)** — [View PR](https://github.com/anthropics/skills/pull/568)
A broad SW platform assistant covering ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD/CSM, SPM/PPM, Vulnerability Response, and Security Incident Response. **Status:** Open. The width of enterprise coverage is notable.

**#8 — testing-patterns (PR #723)** — [View PR](https://github.com/anthropics/skills/pull/723)
Comprehensive testing-stack guidance: Testing Trophy philosophy, AAA pattern, React component testing with Testing Library, and queries. **Status:** Open.

---

## 2. Community Demand Trends

The Issues tracker reveals the following demand clusters:

**Quality assurance and evaluation tooling** — Community members are repeatedly hitting the same wall: they cannot trust that skills actually trigger and evaluate correctly. Issue #556 (`run_eval.py` 0% trigger rate) and #1390 (mcp-builder evaluation fabricating tool errors) dominate. The demand is for **instrumented, reliable eval harnesses** — not just new skills, but confidence in the skills that exist.

**Security and trust boundaries** — Issue #492 (43 comments) is the single most-discussed item: community skills distributed under the `anthropic/` namespace enable trust boundary abuse. Users want **provenance guarantees and namespace separation**. Related: #1175 raises security and context-window concerns for SharePoint Online handling.

**Organizational sharing and lifecycle management** — Issue #228 (org-wide skill sharing in Claude.ai) shows enterprise demand for **distribution, versioning, and access control**. Issue #62 (skills "disappearing") and #189 (duplicate skills from overlapping plugins) point to **installer hygiene** as an unmet need.

**Context-window economy** — Issue #1487 (`claude-api` skill injecting ~156k tokens in a single call) exposes the sharpest friction in the ecosystem: **skills that burn the scarce resource they're meant to manage**. Expect pressure for lazy-loading, streaming, and much stronger size discipline.

**Format breadth** — Beyond PDF/DOCX, demand continues for **ODT, HPC, legacy enterprise platforms**, and **format-specific quality (typography)** — the long tail of "make Claude work with my existing artifacts."

---

## 3. High-Potential Pending Skills

These open PRs have active discussion and are likely to merge soon:

| Skill | PR | Why it lands |
|---|---|---|
| **skill-creator eval fixes** | [#1298](https://github.com/anthropics/skills/pull/1298) | Critical bugfix; the whole skill-creation pipeline is compromised without it. Multiple complementary PRs (#1099, #1050) target the same Windows eval bugs. |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | Small, focused, universally applicable. Fixes a class of issues that silently degrade every AI-generated document. |
| **scnet-hpc** | [#1615](https://github.com/anthropics/skills/pull/1615) | Specialized but clear scope; profile-based SSH/Slurm is a well-bounded workflow. |
| **Hivemind orchestration** | [#1628](https://github.com/anthropics/skills/pull/1628) | Architecturally novel; answers the cost-scaling question directly. High discussion velocity. |
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | Alignment with the community's QA demand; companion proposal #1385 extends it into a three-gate pipeline. |
| **skill-quality-analyzer / skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | Directly addresses the #492 trust-boundary concern; meta-skills that evaluate other skills. Long open, but timely. |
| **claude-api model retirement** | [#1607](https://github.com/anthropics/skills/pull/1607) | Small documentation fix correcting retired model IDs; likely to merge on maintenance cadence. |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for trust infrastructure — reliable evaluation harnesses, security boundaries, and context-window discipline — rather than new domain skills themselves.**

---

# Claude Code Community Digest — 2026-08-30

## Today's Highlights

The community is increasingly vocal about **Auto Mode's Bash-first steering**, which forces file edits through `sed`/heredocs instead of dedicated Read/Edit/Write tools — a regression that's now documented across at least five open issues (#88041, #87971, #89731, #90450, #89716) with significant 👍 support. Meanwhile, **Windows MSIX package reliability** continues to dominate the issue tracker, with multiple reports of auto-update failures leaving the app unlaunchable (#83932, #85199, #89599). Notably, there are **no new releases** in the last 24 hours — the community is waiting on fixes, not features.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#80444 — [Windows] Fatal GPU-process crash breaks MSIX package until Repair](https://github.com/anthropics/claude-code/issues/80444)** (78 comments, 👍14) — The most-commented issue this week. Desktop app 1.24012.1 crashes with a GPU-process error (0x060C201E) when opening the in-app Browser tab, leaving the app unlaunchable until manual repair. Reproduced across two NVIDIA driver versions, making this a hard blocker for affected users.

2. **[#85199 — [Windows] Repeated crashes requiring "Advanced Options → Repair"](https://github.com/anthropics/claude-code/issues/85199)** (40 comments, 👍6) — Companion issue to #80444 showing broader MSIX package fragility. Users report a cycle of crashes → repair → crash again, suggesting a deeper packaging issue rather than an isolated GPU bug.

3. **[#88041 — Auto-mode "bashFirst" system prompt forces sed/heredoc edits](https://github.com/anthropics/claude-code/issues/88041)** (13 comments, 👍26) — Critical finding: the hardcoded prompt instruction in the CLI binary tells Claude to use Python/sed/heredocs instead of Edit/Write tools. The reporter found the raw template in the binary itself, confirming it's not user-configurable.

4. **[#87971 — Claude abuses bash tools for reads/writes/edits in Auto Mode](https://github.com/anthropics/claude-code/issues/87971)** (8 comments, 👍38) — Highest 👍 count this week. Community observes the same Bash-first behavior on Windows/VSCode. Muting tool-choice quality in favor of raw shell commands — a step backward from the dedicated tools that shipped in v2.1.

5. **[#88093 — Desktop window stays always-on-top](https://github.com/anthropics/claude-code/issues/88093)** (11 comments, 👍19) — A Windows desktop regression where the window permanently floats above all apps. Simple but frustrating QoL issue with broad community resonance.

6. **[#89731 — Bash-first steering reverses fixes from 2.1.21/2.1.31](https://github.com/anthropics/claude-code/issues/89731)** (3 comments, 👍3) — Eli Barzilay documents that Auto Mode's current behavior contradicts earlier fixes that shipped the *opposite* steering. This is a regression explicitly linked to prior patch notes, increasing the likelihood of a rapid fix.

7. **[#87419 — Weekly scoped meters deplete 1.7–5x faster since Aug 17](https://github.com/anthropics/claude-code/issues/87419)** (5 comments, 👍0) — Max 20x subscribers reporting unexplained rate-limit depletion. OAuth token carries `rateLimitTier: default_claude_max_5x` — a 4x downgrade encoded inside the token. Related to #79773, #65678, but explicitly *not* upgrade-related, pointing to a server-side bug.

8. **[#83932 — Windows auto-update deploys into running processes](https://github.com/anthropics/claude-code/issues/83932)** (16 comments) — Auto-update attempts while `claude.exe` and `CoworkVMService` are running produce `0x80073CF9` (sharing violation) and leave the app in `NeedsRemediation`. The update system doesn't check for running processes first.

9. **[#65844 — Fullscreen TUI: Cmd+C breaks macOS mouse copy](https://github.com/anthropics/claude-code/issues/65844)** (9 comments, 👍22) — Long-standing macOS TUI bug (since June) with high engagement. Internal selection intercepts Cmd+C even when the user intends to copy with the mouse. Still unresolved after ~3 months — a sign of TUI polish lagging behind desktop work.

10. **[#90637 — Desktop: submitted message becomes "Queued" and is lost](https://github.com/anthropics/claude-code/issues/90637)** (3 comments) — Fresh report (updated yesterday) about message handling on Windows desktop. The reporter initially claimed the message never fires, then corrected to: message reaches the chip, delivers late, but is mishandled. Potentially a new queue race condition — watch this one.

## Key PR Progress

Only 1 PR in the tracker, but notable:

- **[#61720 — Add troubleshooting for Cowork queue not spawning follow-up turn](https://github.com/anthropics/claude-code/pull/61720)** — Documentation PR that closes #61718 (race condition between queue post-turn handler and rate-limit handler). Useful for users hitting "message delivered but no assistant response" in Cowork. However: **created May 23, still open** — docs fixes shouldn't take 3 months. This is a signal that the team's PR review latency is a bottleneck.

## Feature Request Trends

Distilling requests from the issue tracker this cycle:

1. **Tool-choice steering control** (implicitly requested via bug reports in #88041, #87971): Users want the model to use dedicated Read/Edit/Write tools, not raw bash. The underlying ask is: *let users opt out of or tune Auto Mode's tool-strategy prompt* — not just fix the regression.

2. **Windows MSIX lifecycle reliability** (#80444, #85199, #83932, #89599, #81992): Users are effectively requesting a packaging overhaul: pre-update process checks, rollback on failed deploy, and repair-less recovery paths. The `NeedsRemediation` loop is a systemic design flaw.

3. **Session provenance in the UI** (#73343): Users want hostname and machine info in Remote Control session views — "which machine runs this session?" is a missing diagnostic that makes disconnect incidents expensive to debug.

4. **Desktop sidebar session visibility** (#83699): Collapsed project groups should still show active sessions, not just the current one — a UX gap for multi-session workflows.

5. **Background-task transparency** (#90659): False "exit code 0" on backgrounded Bash commands erodes trust in automation — users want truthful exit-code reporting for `run_in_background: true`.

## Developer Pain Points

- **Auto Mode tool-quality regression** is the most passionate topic this week (#88041 at 👍26, #87971 at 👍38). Developers specifically called out that the Bash-first instruction "reverses 2.1.21 and 2.1.31" — they've seen the fix before and can't believe it's back. The hardcoded nature (found in the binary, not config) makes it feel un-opt-out-able, which amplifies frustration.

- **Windows MSIX repair loop** is the highest-volume pain point (78-comment thread + multiple companion issues). The worst part: **full OS reinstall doesn't fix it** (#81992), suggesting package-state corruption that survives clean installs. Users are effectively locked out of the app until they manually kill hidden processes and repair.

- **Meter/rate-limit depletion without plan changes** (#87419) is eroding trust in billing fairness. The 5x token vs 20x plan mismatch is a concrete, verifiable bug — and when users can *see* the token says one thing and their plan says another, they'll escalate.

- **Stale PR review cycle**: #61720 (docs-only, 3 months open) signals that even trivial documentation fixes sit unreviewed while the community files duplicate bugs (#89599 explicitly refiles a bot-closed issue). The auto-close bot makes it worse — users are asked to re-report issues that are still real.

- **Scheduled tasks under interactive permissions** (#89632): Local scheduled tasks run under "ask-every-tool" — contradicting the "unattended" framing the harness itself provides via `<scheduled-task>` wrappers. Developers who trust scheduled automation with permissions get blocked or, worse, silently misrun.

---

*Digest generated from github.com/anthropics/claude-code data for 2026-08-30. All links are to the relevant GitHub items.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-30

## Today's Highlights

Release **rust-v0.151.0** introduces configurable MCP server discovery grace periods and extension hooks for intercepting MCP tool results before model delivery. Meanwhile, the community is increasingly vocal about **Windows desktop reliability** — with a cluster of issues around headless startup, node_repl.exe handshake failures, and sandbox ACL errors dominating the tracker. Two related bug reports also surfaced around models (gpt-5.6 Sol) attempting to consume "banked resets" without explicit user permission, raising safety-check concerns.

## Releases

**rust-v0.151.0** — New features:
- Configurable grace period for discovering tools from optional MCP servers (#41199)
- Extensions can inspect or replace MCP tool results before they reach the model (#41202)
- Plugin catalogs now combine per-repository configuration and report invalid project marketplaces

Two pre-release builds also shipped: `rust-v0.152.0-alpha.1` and `rust-v0.151.0-alpha.7.2`.

## Hot Issues

1. **[#25828 — Phone verification bug blocks login](https://github.com/openai/codex/issues/25828)** — Users in Indonesia (and likely other regions) cannot receive SMS verification codes during login. 28 comments, open for ~3 months. High friction for new users in unsupported regions.

2. **[#29639 — Browser Use Node REPL fails in Windows Desktop with WSL workspace](https://github.com/openai/codex/issues/29639)** — The auto-generated `node_repl` MCP server launches a Windows executable but receives Linux/WSL paths, causing tool-call failures. Affects mixed WSL/Windows workflows; 16 comments.

3. **[#39280 — macOS Chrome tabs claimed but actions fail policy verification](https://github.com/openai/codex/issues/39280)** — The bundled Chrome extension can enumerate and claim tabs, but every real-page action is rejected before reaching Chrome. 13 comments; suggests incomplete macOS browser-control policy wiring.

4. **[#41241 — Windows local tool host exits during handshake after update](https://github.com/openai/codex/issues/41241)** — Following an update, the local tool host fails during handshake. 9 comments; users report the Microsoft Store version is unstable post-update.

5. **[#36087 — Windows sandbox fails with helper_unknown_error on deny-read ACLs](https://github.com/openai/codex/issues/36087)** — Intermittent sandbox init failures in workspace-write mode related to ACL application. 9 comments; recurring Windows sandbox reliability theme.

6. **[#41540 — Headless startup after node_repl.exe relocation failure (0x80071770)](https://github.com/openai/codex/issues/41540)** — MSIX package fails to relocate a protected node_repl.exe, causing the app to start without a window. 7 comments; pairs with other "headless after update" reports.

7. **[#35355 — Compaction promotes partial output from interrupted commands into confirmed task state](https://github.com/openai/codex/issues/35355)** — A model-behavior bug where ephemeral observations from interrupted commands become falsely confirmed task state after compaction. 6 comments; subtle correctness issue with long-running sessions.

8. **[#41466 — Abusive cybersecurity warnings during routine code reviews](https://github.com/openai/codex/issues/41466)** — A paying OSS maintainer (php/libgd) reports that code reviews now trigger excessive cybersecurity warnings. 5 comments; overzealous safety checks harming legitimate workflows.

9. **[#41255 — GPT-5.6 models fail to run exec tool on Windows](https://github.com/openai/codex/issues/41255)** — `gpt-5.6-sol` and `gpt-5.6-terra` fail with "code-mode host exits during handshake"; `luna` not independently tested. 5 comments; model-specific Windows breakage.

10. **[#41593 / #41607 — Models consume banked reset without permission](https://github.com/openai/codex/issues/41593)** — Two reports (Windows and macOS) of gpt-5.6 Sol using the banked usage reset without user confirmation. 2+1 comments; safety-check regression with rate-limit resources.

## Key PR Progress

1. **[#41586 — Add Vim search motions to the composer](https://github.com/openai/codex/pull/41586)** — Adds `/` and `?` literal search, plus `n`/`N` wrapped repeat navigation; integrates with delete/change/yank operators.

2. **[#41562 — Preserve turn lineage across goal continuations](https://github.com/openai/codex/pull/41562)** — Ensures automatic goal continuations stay attributable to the originating turn, even with external input or goal edits.

3. **[#41567 — Restore thread cwd from owned settings snapshots](https://github.com/openai/codex/pull/41567)** — Fixes thread resume when `cwd` is absent; avoids inheriting settings from forked history or losing them during compaction.

4. **[#41569 — Harden diagnostic report uploads](https://github.com/openai/codex/pull/41569)** — Sends core report events before attachments; adds size bounds and format-aware truncation for oversized attachments.

5. **[#41477 — Organize bundled Rust resources under asset directories](https://github.com/openai/codex/pull/41477)** — Separates runtime embedded resources from source files/test fixtures in Bazel targets for `core` and `tui`.

6. **[#41476 — Use rules_rs platforms for release binaries](https://github.com/openai/codex/pull/41476)** — Maps release platforms to Rust target triples; builds multiplatform binaries against `rules_rs` platforms instead of LLVM definitions.

7. **[#41467 — Refresh TUI model picker from the app server](https://github.com/openai/codex/pull/41467)** — Fetches current model list asynchronously when the picker opens, instead of relying on a potentially stale startup catalog.

8. **[#41570 — Fix proactive multi-agent instruction grammar](https://github.com/openai/codex/pull/41570)** — Corrects grammar in proactive multi-agent instructions.

## Feature Request Trends

- **Session event injection** ([#33556](https://github.com/openai/codex/issues/33556)) — External async events (file watchers, webhooks, messages) should be injectable as turns into visible sessions, not just headless remote-control threads. 5 upvotes.
- **Multi-account / multi-machine Remote Control** ([#31187](https://github.com/openai/codex/issues/31187)) — Mobile Remote Control needs first-class support for multiple desktop hosts and ChatGPT accounts.
- **TUI diff collapsing** ([#41604](https://github.com/openai/codex/issues/41604)) — Option to collapse or hide large file edit diffs in the interactive CLI.
- **ChatGPT Desktop + Codex merge feedback** ([#35158](https://github.com/openai/codex/issues/35158)) — Community continues to ask for clearer separation of Chat, Work, and Codex task types in the merged desktop app.

## Developer Pain Points

- **Windows desktop instability is the dominant theme** — 7 of the top 20 issues involve Windows-specific failures: handshake exits, headless startups after auto-update, sandbox ACL errors, `node_repl.exe` relocation failures, and missing windows on launch. Multiple reports share error signatures, suggesting systemic issues in the MSIX packaging and local tool-host lifecycle.
- **Browser-use / Chrome extension reliability** — Both macOS ([#39280](https://github.com/openai/codex/issues/39280)) and Windows ([#41592](https://github.com/openai/codex/issues/41592)) report broken browser-control flows, either policy verification failures or manifest path issues after data-directory migration.
- **Session and task persistence gaps** — Tasks disappearing from the sidebar ([#35804](https://github.com/openai/codex/issues/35804)), zero-byte rollout files ([#39853](https://github.com/openai/codex/issues/39853)), and "chat" label conflation ([#41594](https://github.com/openai/codex/issues/41594)) all indicate session-state management is still fragile.
- **Safety-check overreach** — Two independent reports of models using banked resets without permission, plus an abusive cybersecurity warning issue, point to policy checks that are too aggressive in legitimate automation contexts.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-30

## Today's Highlights
Nightly release `v0.59.0-nightly.20260830` is out, continuing the rapid iteration cadence. The community's attention remains squarely on agent reliability and scalability, with top-voted issues flagging a critical bug where **subagents falsely report GOAL success after hitting turn limits** (#22323) and **generalist agent hangs** (#21409). Meanwhile, several PRs are actively addressing **Claude Code migration fidelity**—fixing hook timeout unit mismatches and misspelled event keys—and a notable fix routes `read_file` through the `FileSystemService` for better ACP integration.

---

## Releases

**v0.59.0-nightly.20260830.g0bd1d4397** — Nightly release; no detailed changelog provided beyond the full diff against yesterday's build.

---

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)** *(p1, bug, 13 comments, 👍2)*  
   A `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even when it hit `MAX_TURNS` before doing any work. This masks real interruption and leads to false confidence in agent results. Community strongly engaged (13 comments), pressing for honest termination reporting.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** *(p1, bug, 8 comments, 👍8)*  
   Simple operations like folder creation hang indefinitely when delegated to the generalist agent. Workaround is to instruct the model to avoid subagents. With 8 👍, this is the most upvoted open bug—reliability and trust in autonomy are at stake.

3. **[#25166 — Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)** *(p1, core, 4 comments, 👍3)*  
   Simple CLI commands that can't prompt still leave the shell stuck in "awaiting input." Likely a TTY/pipe descriptor leak. High impact for day-to-day automation flows.

4. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** *(p1, browser agent, 4 comments, 👍1)*  
   Reproducible failure on Wayland sessions with `Termination Reason: GOAL`—again, the pattern of false success. Linux users on modern display servers are clearly affected.

5. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** *(p2, bug, 5 comments)*  
   Background extraction keeps re-processing sessions it deems low-signal, wasting tokens and time. Community agrees this is a systemic inefficiency that needs a deterministic "processed" marker.

6. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** *(p2, security, 4 comments)*  
   Transcript content is sent to the model **before** redaction happens, and the service logs existing skills. Privacy-critical: redaction must happen pre-context, not post-hoc.

7. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** *(p2, agent behavior, 6 comments)*  
   Users report Gemini rarely self-invokes custom skills/sub-agents unless explicitly told. As skills and MCP adoption grows, this is becoming a flagship usability gap.

8. **[#24246 — 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** *(p2, bug)*  
   Hard API failure when too many tools are loaded. No dynamic tool pruning. This will bite users with large MCP server configs or many extensions.

9. **[#28968 — symlinked skills directories not deduplicated during discovery](https://github.com/google-gemini/gemini-cli/pull/28968)** *(p3, extensions)*  
   When `.gemini` is linked to `.agents` (Windows junction or symlink), the CLI scans both paths as if separate, duplicating skills. Traceable to the open Agent Skills standard push.

10. **[#28828 — Silent preview model substitution](https://github.com/google-gemini/gemini-cli/pull/28828)** *(p1, auth/model entitlement)*  
    When a user requests `gemini-3.1-pro-preview` without preview entitlement, the CLI silently rewrites to `auto-gemini-2.5`—no warning, no error. This masks user intent and degrades output quality invisibly.

---

## Key PR Progress

1. **[#29125 — fix(cli): convert hook timeout from seconds to milliseconds in hooks migration](https://github.com/google-gemini/gemini-cli/pull/29125)** *(p2, core)*  
   Claude Code uses seconds (default 60s), Gemini CLI interprets the value as ms. Migration copies verbatim, so `"timeout": 30` becomes 30 ms. Direct fix for a silent time-to-failure bug.

2. **[#29124 — fix(cli): correct SubagentStop event key in hooks migration](https://github.com/google-gemini/gemini-cli/pull/29124)** *(p2, core)*  
   Claude Code spells it `SubagentStop` (lowercase 'a'); the migration keyed it as `SubAgentStop`. That means `SubagentStop` hooks were silently dropped—a classic one-character migration bug.

3. **[#29110 — fix(core): route read_file content through FileSystemService](https://github.com/google-gemini/gemini-cli/pull/29110)** *(agent)*  
   `read_file` bypassed the injected `FileSystemService`, breaking ACP clients that advertise custom `fs` capabilities (e.g. remote workspaces). Alignment with `write_file`/`replace` fixes a real integration gap.

4. **[#28968 — fix(core): dedupe symlinked/junctioned skills directories during discovery](https://github.com/google-gemini/gemini-cli/pull/28968)** *(p3, extensions)*  
   Fixes #28944: scanning both `.gemini/skills` and `.agents/skills` when they point to the same directory. Cleanly resolves a cross-platform compatibility bug.

5. **[#28967 — fix(cli): prevent clearing terminal scrollback on static refresh](https://github.com/google-gemini/gemini-cli/pull/28967)** *(p2, core)*  
   `refreshStatic()` calls `clearTerminal` even when alternate/no buffer mode is on—wiping scrollback on Linux terminals. Fixes a nagging UX regression.

6. **[#28966 — docs(extensions): correct excludeTools examples that never match](https://github.com/google-gemini/gemini-cli/pull/28966)** *(p1, docs)*  
   `excludeTools` entries are matched by exact tool name, so `run_shell_command(rm -rf *)` does nothing. Documentation now points users to bare names and the policy engine for command-level blocking.

7. **[#28965 — Fix exclude tools docs #7117](https://github.com/google-gemini/gemini-cli/pull/28965)** *(p1, docs)*  
   Companion PR to #28966 with the same intent—docs corrections, not code changes, but for a notoriously confusing configuration surface.

8. **[#28960 — fix(auth): remove trailing period from displayed Antigravity URL](https://github.com/google-gemini/gemini-cli/pull/28960)** *(p1, auth)*  
   Cosmetic but security-relevant: a trailing `.` in a printed URL can lead users to mistype or phish. Small fix, real hygiene win.

9. **[#29120 — fix(core): improve destination validation and connection routing in web fetch utilities](https://github.com/google-gemini/gemini-cli/pull/29120)** *(size/l)*  
   `WebFetchTool` output now validates outbound addresses via async DNS and routes through an Undici transport connector that binds to the resolved address with TLS preserved—a solid SSRF hardening step.

10. **[#28823 — Feat/evals tracker relationships error recovery](https://github.com/google-gemini/gemini-cli/pull/28823)** *(size/xl, evals)*  
    Adds behavioral evals for task graph dependencies, visualization, file-path 404 recovery, and shell command failure recovery. Important signal that the team is building guardrails around agent failure modes users actually hit.

---

## Feature Request Trends

- **AST-aware file operations**: Multiple issues (#22745, #22746) push for AST-aware reads, searches, and codebase mapping to cut token waste and turn misalignment. Clear direction is "surgical reads over firehose reads."

- **Subagent transparency and control**: Users want to see subagent trajectories (#22598), get full context in bug reports (#21763), and have reliable `settings.json` overrides honored by agents (#22267).

- **OS-level sandboxing with bash-native execution**: #19873 proposes zero-dependency OS sandboxing that keeps Gemini 3's native bash chaining while adding safety isolation—suggesting the community wants capability without security trade-offs.

- **Agent "self-awareness"**: #21432 asks for accurate CLI flags, hotkeys, and self-execution knowledge so the agent can act as its own expert guide.

- **Resilience of browser agent**: #22232 requests automatic session takeover and lock recovery for the browser agent, addressing flaky persistent-profile scenarios.

---

## Developer Pain Points

- **False GOAL success masking failures**: Repeatedly flagged (#22323, #21983, #21763). Termination reasons misreport success and hide subagent interruptions—undermining trust in autonomous pipelines.

- **Invisible failures and silent substitutions**: #28828 (preview model silently swapped) and #25166 (shell sticky "waiting input") show failures that log nothing and surface nowhere. Developers want explicitness about what the tool did and why.

- **Migration fidelity from Claude Code**: Two PRs (#29124, #29125) fix subtle but breaking migration mismatches—timeout units and camelCase event keys. Community wants "drop-in replacement" to actually mean that.

- **Agent over/under-delegation**: Either agents hang after deferring to subagents (#21409) or they never use them at all (#21968). There's a "use them, use them correctly" tension that frustrates users on both sides.

- **Token and context bloat**: From Auto Memory retrying low-signal sessions (#26522) to "Tactful Extraction" for surgical reads (#19561), the community is clearly paying close attention to token economy—not just performance, but cost.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-30

## Today's Highlights

Two patch releases (v1.0.82 and v1.0.82-2) shipped with fixes for worktree switching, plan approval card expansion, and clearer authentication errors. Meanwhile, the issue tracker shows a worrying cluster of MCP-related regressions introduced in v1.0.81, alongside recurring complaints about retry loops on failed operations and memory exhaustion during session resume. The v1.0.81 release appears to have destabilized several MCP integrations (OAuth, compatibility, and metadata discovery) — a pattern that warrants close attention.

---

## Releases

**v1.0.82 & v1.0.82-2** (2026-08-29) — Two patch releases landed within hours of each other:

- Fixed: A message typed while `/worktree` or `/move` is preparing the worktree no longer breaks the switch into it
- Fixed: `Ctrl+E` now expands the plan approval card to show the full plan
- Fixed: Displays the specific authentication failure (e.g., `401 Bad credentials`) instead of only showing the `/login` prompt

The `-2` variant repeats the first two fixes — likely a republish or version corrections.

---

## Hot Issues

1. **[#4027 — Tool 'str_replace' does not exist](https://github.com/github/copilot-cli/issues/4027)** · 13 👍 · **Community's most-voted current bug.** Copilot frequently logs `Tool 'str_replace' does not exist` before failing to apply edits to Java files. Open since July, still unfixed — a clear sign of tooling unreliability in the edit path.

2. **[#4165 — `copilot --resume` hangs on cold start in Windows](https://github.com/github/copilot-cli/issues/4165)** · Area: sessions, platform-windows. Resuming a session from PowerShell blocks indefinitely at "Resuming session..." despite working when other flows are used. Long-standing Windows-specific reliability gap.

3. **[#4647 — v1.0.81 broke compatibility with chroma-mcp](https://github.com/github/copilot-cli/issues/4647)** · Triage. The recent release introduced a compatibility regression affecting the `chroma-mcp` server — users report failures where v1.0.80 worked fine.

4. **[#4660 — Remote ADO MCP server with OAuth fails in v1.0.81 WAM implementation](https://github.com/github/copilot-cli/issues/4660)** · Triage. Azure DevOps MCP servers now fail to authenticate; the suggested `/mcp auth` flow also breaks. The new WAM (Windows Authentication Manager) path appears to be the culprit.

5. **[#4662 — AgentHost MCP client fails OAuth metadata discovery for issuer URLs with a path component](https://github.com/github/copilot-cli/issues/4662)** · Triage. OAuth-protected MCP servers using issuer URLs like `mcp.example.com/oauth` cannot be discovered, blocking authentication entirely.

6. **[#4663 — Failed compaction is retried unchanged on every turn](https://github.com/github/copilot-cli/issues/4663)** · Triage. Compaction failures trigger **unbounded, full-priced retries** — each turn reissues the failed request with no backoff or reconciliation. Costs escalate silently with no user-visible error.

7. **[#4664 — Crash with JavaScript heap out of memory on session resume](https://github.com/github/copilot-cli/issues/4664)** · Triage. Resuming long-standing/large sessions crashes the CLI with a V8 memory error before any work can continue.

8. **[#4553 — Infinite loop and apply_patch failure due to JSON-wrapping error](https://github.com/github/copilot-cli/issues/4553)** · Area: models, tools. The CLI repeatedly retries the same failed edit payload, never recovering. Pairs with #4663 as another "retry-forever" failure mode.

9. **[#4655 — Agent Plugins 1.0: custom agents under com.github.copilot/agents not discovered](https://github.com/github/copilot-cli/issues/4655)** · Triage. Plugins that follow the 1.0 spec with skills, MCP servers, and custom agents fail to register the `com.github.copilot/agents` components.

10. **[#2955 — `/allow-all` does not suppress bash tool execution prompts](https://github.com/github/copilot-cli/issues/2955)** · Area: permissions. Approved permissions are not honored — the CLI still shows a confirmation dialog for every bash command, defeating the entire purpose of the command.

---

## Key PR Progress

Note: The PR tracker is unusually sparse — only **2 items** were updated in the last 24h, and neither appears in the standard 10-item span. The project's development activity appears to be focused on patch releases rather than merged features right now.

1. **[#2381 — install: add fish shell support for PATH configuration](https://github.com/github/copilot-cli/pull/2381)** · **Closed after ~5 months.** Fish users silently get broken `export` syntax in `~/.profile` (never sourced); the current logic falls into a catch-all case. Fish needs array-style path handling instead of POSIX `export PATH="...:$PATH"`.

2. **[#4659 — Initial commit with exported changes from codespace](https://github.com/github/copilot-cli/pull/4659)** · **Open.** Newly opened, no description activity, flagged as work-in-progress. Low signal at this time.

---

## Feature Request Trends

1. **`.agents` convention expansion** — [#4204](https://github.com/github/copilot-cli/issues/4204) asks to extend `.agents/skills` discovery to instructions, agents, and hooks across all opened folders (not just Git repos). Users want a standardized, portable customization bundle.

2. **Permission model refinements** — [#2955](https://github.com/github/copilot-cli/issues/2955)'s /allow-all failure signals a deeper need for **persistent, per-session permission grants** that actually suppress prompts during a run.

3. **Agent Plugins 1.0 compliance** — [#4655](https://github.com/github/copilot-cli/issues/4655) reveals the gap between the published spec (skills + agents + MCP in one plugin) and what the CLI actually loads (skills only).

4. **Reliable session lifecycle** — The cluster of resume/memory/compaction issues suggests a community appetite for **snapshots, checkpointing, or compaction controls** so users can recover from long sessions without heaps blowing up or requests being re-billed.

---

## Developer Pain Points

1. **MCP instability with v1.0.81** — At least 3 new issues in 48 hours trace regressions to the latest release: chroma-mcp, ADO OAuth, and OAuth metadata discovery. This is the loudest signal this week.

2. **Retry-forever loops** — [#4553](https://github.com/github/copilot-cli/issues/4553) and [#4663](https://github.com/github/copilot-cli/issues/4663) describe the same disease: **failed model/tool operations are retried identically, endlessly, at full billing cost**, with no fallback path and no visible error. This is both a reliability and a cost-control failure.

3. **Session resume fragility** — [#4165](https://github.com/github/copilot-cli/issues/4165) (Windows hang) and [#4664](https://github.com/github/copilot-cli/issues/4664) (heap OOM) show that the resume path is delicate: platform quirks and session size can both brick recovery.

4. **Tool reliability in edit loops** — [#4027](https://github.com/github/copilot-cli/issues/4027)'s `str_replace` failures on Java files have been open since July with 13 upvotes, making it the community's most-supported unresolved bug.

5. **Authentication UX regressions** — The new WAM implementation (reported in [#4660](https://github.com/github/copilot-cli/issues/4660)) broke OAuth flows, and even v1.0.82's improved error message ("401 Bad credentials") points at a pain point that's still fresh.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-30

## Today's Highlights
No new releases or pull requests landed in the past 24 hours. The community's attention is focused on a single alarming issue: users report significant and unexpected quota consumption, with cache_read being billed at over 10x the expected rate while cache_creation remains at zero. This has sparked discussion about potential billing logic regressions requiring immediate investigation.

## Releases
No new releases in the last 24 hours.

## Hot Issues
*(1 item updated in last 24h — full list shown)*

1. **[#2626 — Abnormal quota consumption: cache_read billed every turn with cache_creation always 0 (>10x amplification)](https://github.com/MoonshotAI/kimi-cli/issues/2626)**  
   A paying annual subscriber reports losing ~40% of a 5-hour quota window within minutes of light use on 2026-08-28. Every API turn bills `cache_read` tokens, while `cache_creation` remains 0 — pointing to possible mis-classification of cached prompt reads (or a failure to populate the cache, causing reads to be re-billed at full rate). One commenter confirms similar behavior. **Relevance:** Billing transparency is core to trust; a >10x amplification on a paid plan is a serious regression that the maintainers should prioritize. No maintainer response yet.

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
Due to low activity today, no new feature requests surfaced. Longer-term patterns (from prior issues) continue to emphasize: better quota/billing dashboards, explicit cache-hit indicators in CLI output, and offline mode. These themes are reinforced by today's billing issue, which would benefit directly from transparent cache metrics.

## Developer Pain Points
- **Billing unpredictability:** The recurring theme — and today's top issue — is that developers cannot trust their quota consumption. Unclear cache billing (or mis-billing) undermines cost predictability for heavy CLI users.
- **Silence on critical reports:** The lack of maintainer response to a billing-affecting issue (within 24h) is a pattern users frequently flag; they expect faster acknowledgment for issues impacting paid accounts.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-30

---

## Today's Highlights

A wave of infrastructure-focused PRs landed from `opencode-agent[bot]` and external contributors, targeting desktop UI recovery flows, concurrency bounds in core refresh logic, and AI protocol correctness for reasoning state. Notably, several contributor PRs were auto-closed or flagged as `needs:title`/`needs:compliance`, suggesting a tighter review gate for community submissions. The most active issue threads center on ACP integration with Xcode 27 beta, authentication failures with ChatGPT Pro/Plus, and a widely-upvoted request for GitHub Copilot auto model routing API access.

---

## Releases

No new releases were published in the last 24 hours.

---

## Hot Issues

**#34743 — opencode ACP from Xcode 27 beta 2 uses default model ignoring opencode.json or TUI selection**  
*[OPEN] · 16 comments*  
Core integration bug: when opencode 1.17.11 is configured as a custom ACP agent in Xcode 27 beta, model selection from `opencode.json` and the TUI is completely ignored; it defaults to "big-pickle" instead. This suggests a protocol mismatch in the ACP handshake or a config-loading regression for subprocess entry points. High impact for macOS developers adopting AI-assisted Xcode workflows.

**#16281 — OpenAI ChatGPT Pro/Plus browser login fails with `Token exchange failed: 403`**  
*[CLOSED] · 10 comments · 👍 4*  
Long-running auth bug (since March) where the OAuth callback completes on `localhost:1455`, but token exchange against OpenAI fails. Recently closed — likely root-caused to a provider-side change or an updated client secret validation. Was a top stop-ship blocker for Plus/Pro subscribers.

**#20235 — Request GitHub Copilot auto model routing API access + `chat.model` plugin hook**  
*[CLOSED] · 8 comments · 👍 29*  
The highest-upvoted open request in the set. Users want opencode to use Copilot's `/models/session` auto-routing (as VS Code does) and a plugin hook for dynamic model selection. Closed with presumably a maintainer response; strong desire for access to Microsoft's routing intelligence.

**#27661 — Home/End keys in input box scroll message list instead of moving cursor**  
*[CLOSED] · 6 comments · 👍 8*  
Regression in TUI key handling — Home/End trigger viewport scrolling rather than cursor motion, making long-message editing painful. Closed as fixed; a notable quality-of-life win for heavy TUI users.

**#41249 — [FEATURE] Live Subagents sidebar section in the TUI**  
*[OPEN] · 6 comments*  
A community-built external plugin (`opencode-subagents-view`) adds a live Subagents sidebar. The issue requests native support. Signals growing need for parallel-agent observability — users want to see subagent state, tasks, and status in real time.

**#24795 — [FEATURE] Allow editing the "always" permission pattern before confirming**  
*[CLOSED] · 4 comments · 👍 6*  
When granting an "always" permission, the auto-generated tool/pattern is often too broad or too narrow, with no way to edit before accepting. Clear UX gap in the permission flow; closed — likely implemented.

**#27463 — [FEATURE] Add close confirmation or minimize-to-tray support for the Desktop app**  
*[CLOSED] · 4 comments · 👍 4*  
Desktop app fat-finger risk: hitting X loses session state with no confirmation. Requested tray-minimize or an exit guard. Closed — likely added to the desktop shell.

**#39215 — [Bug] OpenCode Go "Request blocked by upstream provider" (HTTP 401) on all models**  
*[OPEN] · 3 comments · 👍 3*  
Active **OpenCode Go** subscribers hit uniform 401s across DeepSeek, GLM, Qwen, etc. despite valid subscriptions — points to an upstream auth/whitelist issue, not config. High severity for paid users; still open.

**#46217 — `system-reminder` duplicates uncontrollably (hundreds/thousands of identical copies)**  
*[OPEN] · 2 comments · NEW TODAY*  
The model's system reminders (e.g., "model does not support image input") are injected repeatedly into turns with no deduplication, degenerating context and degrading model behavior. A must-fix correctness bug that amplifies latency and cost.

**#34695 — Session hangs when loading messages with malformed XML tags**  
*[CLOSED] · 2 comments*  
Malformed provider output (literal `<DSML｜tool_calls>` text) gets persisted into session JSON, then chokes on session resume — parser hangs instead of skipping malformed fragments. Fixed; resilience win for handling dirty provider output.

---

## Key PR Progress

**#46215 — `[contributor, 2.0] fix(app): recover sessions with unavailable locations`** *(opencode-agent[bot])*  
Brings the TUI's unavailable-location recovery UX to desktop/web session UI; keeps transcript visible and offers "Choose directory" via server-aware picker.

**#46214 — `[OPEN] [needs:compliance] fix(core): bound ProjectCopy.refresh concurrency (fixes #37793)`** *(optamus-ai)*  
Replaces `concurrency: "unbounded"` with a bounded pool — previously spawned S×R git processes simultaneously, causing CPU thrash on large repos. Merging will fix a serious resource-exhaustion bug.

**#46211 — `[OPEN] [needs:compliance] fix(core): defer FFF initialization (fixes #37794)`** *(optamus-ai)*  
Fast File Finder native sync scan blocked for 50+ seconds during `Instance.layer` on monorepos. Deferring FFF init to after cold start eliminates a significant startup stall.

**#46210 — `[OPEN] [needs:compliance] fix(mcp): share MCP subprocesses across Locations (fixes #37844)`** *(optamus-ai)*  
Global dedupe of MCP servers: 5 locations × 3 servers previously spun 15 subprocesses; now shared to 3. Big memory/bootstrap win for multi-location setups.

**#46218 — `fix(ai): preserve forced reasoning signature`** *(rekram1-node)*  
Preserves accumulated reasoning signature when `message_stop` closes an open thinking block; keeps provider metadata namespacing intact for continuation.

**#46193 — `fix(ai): fail malformed converse output`** *(rekram1-node)*  
Bedrock Converse streams with `malformed_model_output` / `malformed_tool_use` now fail with `InvalidProviderOutput` instead of falsely succeeding; preserves `model_context_window_exceeded` as normal `length` finish.

**#46202 — `fix(tui): scope reasoning-effort variants to the agent, seed from agent config`** *(griffemi)*  
Reasoning-effort variant was stored per model, not per agent, breaking agents pinned in frontmatter (`variant: low` / `max`). Fix scopes selection to the agent — important for multi-profile power users.

**#46212 — `fix(desktop): scope library validation exception to CLI`** *(opencode-agent[bot])*  
Fixes blank in-app terminals on macOS desktop beta: Electron's restricted entitlements were being misapplied to the desktop build; now scoped to CLI only.

**#46199 — `feat: configurable plans directory and opt-out for plugin dependency installs`** *(log0u7)*  
`plan mode` writes `<project>/.opencode/plans/`, which then makes the project dir appear as a code location on the next start. Adds config to relocate plans dir and opt out of auto plugin-install.

**#45235 — `fix(webfetch): apply timeout to the body read and fail instead of dying`** *(harshil-mistry)*  
`webfetch`'s timeout only guarded the request; the body read could hang indefinitely. Now fails gracefully instead of hanging — closes a common hang-on-fetch bug.

---

## Feature Request Trends

From the issues corpus, the strongest signals are:

- **Copilot routing / model auto-selection** (#20235, 29 👍): Strong desire for `chat.model` plugin hooks plus access to Copilot's `/models/session` event-based routing.
- **Live subagent/sidebar observability** (#41249): Users are building external plugins to see active subagents in the TUI; native support is the ask.
- **TUI input and navigation ergonomics** (#27661): Home/End, permission editing, and long-message editing continue to top the "daily friction" list.
- **Session state freshness polling** (#33783): Web users want live polling of session state — expected from the mobile/web client.
- **Configurable install/update paths** (#17044, #34664): Windows/macOS users want control over Desktop app install/update location to avoid C-drive bloat.

---

## Developer Pain Points

Recurring friction points from this week's issues:

- **Provider-content hygiene**: Malformed output (DSML tags, duplicated system reminders, reasoning metadata loss) is causing hangs, session corruption, and degraded quality (#46217, #34695, #46193).
- **Long-standing auth configuration bugs**: OpenAI/Anthropic/OpenCode Go auth routing keeps biting users months after first report (#16281, #39215, #34444).
- **Local/remote model integration asymmetries**: LM Studio works forwarded to localhost but fails as a remote host (#23900) — common pattern with local-first tools.
- **Performance under scale**: Unbounded concurrency in ProjectCopy, sync FFF scans, and MCP subprocess multiplication on multi-location setups (#46214, #46211, #46210) — all being fixed in the same batch, implying a systemic scaling review.
- **Desktop/TUI parity gaps**: Session-location recovery, close-confirmation, and install-path control reminders that the desktop shell still lags the CLI experience (#46215, #27463, #34664).

---

*Digest generated by the OpenCode Community Analyzer — 2026-08-30.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-30

## Today's Highlights

The community saw a burst of activity around two major fronts: a **new `pi web` GUI with full TUI parity** (#8840) and a **Tencent Token Plan provider integration** (#8844), both arriving in the last 24 hours. Meanwhile, a long-standing **TUI row corruption bug** (#8584) remains the hottest open issue with 25 comments, and several Windows-specific annoyances around console windows and path normalization have flooded in from the weekend crowd.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#8584] TUI row corruption during streaming** — Assistant text renders one word per line after long tool outputs (e.g., wide `sed` prints). 25 comments, 9 👍. The community is actively debugging wrapping logic, and this remains the most-discussed open bug. [Link](https://github.com/earendil-works/pi/issues/8584)

2. **[#7730] High CPU usage on macOS with long sessions** — 50–110% CPU with 600–800MB memory, seemingly correlated with context size. 13 comments, 9 👍. Mac users are clearly hitting scalability limits on long-running sessions. [Link](https://github.com/earendil-works/pi/issues/7730)

3. **[#3200] Support video/audio content in prompt command** — Extend `prompt` RPC to forward multimodal content beyond images (Gemma 4, GPT-4o). 10 comments, 6 👍. Strong demand for richer multimodal workflows. [Link](https://github.com/earendil-works/pi/issues/3200)

4. **[#8061] Context budget ignores maxTokens output reservation** — Provider rejected input at 78% of window; the compact-and-retry recovery also failed. 3 comments, 2 👍. This is a correctness issue in budget math that could hit anyone with large outputs. [Link](https://github.com/earendil-works/pi/issues/8061)

5. **[#3159] `edit` tool terminated — timeout** — Qwen 27b consistently fails with `edit` tool timeouts post-update. 8 comments. Likely a timeout tuning regression. [Link](https://github.com/earendil-works/pi/issues/3159)

6. **[#8643] Bedrock: OpenAI models reject images in `toolResult.content`** — Needs hoisting into sibling user blocks, mirroring `openai-completions.ts`. 3 comments. Blocking multimodal agents on Bedrock. [Link](https://github.com/earendil-works/pi/issues/8643)

7. **[#8753] 0.84.3 regression: `reasoning_details` echo degenerates Venice GLM reasoning** — Echoing reasoning back into history deterministically degrades GLM on Venice. 3 comments. Serious regression for reasoning-model users. [Link](https://github.com/earendil-works/pi/issues/8753)

8. **[#8846] Windows: `windowsHide:true` detaches Git Bash — conhost windows flash** — Every native console child (npm test, node) flashes a black window. 1 comment. Highly visible Windows UX pain, likely to gain traction. [Link](https://github.com/earendil-works/pi/issues/8846)

9. **[#8843] Lazy session resume needed** — Large sessions take ~10s before first prompt; JSONL fully parsed on startup. 1 comment. Performance concern for heavy users; likely to grow in popularity. [Link](https://github.com/earendil-works/pi/issues/8843)

10. **[#8825] Hardcoded SGR reset breaks `NO_COLOR` / plain themes** — Wrapped table cells emit ANSI escapes even when color is disabled. 2 comments. Small but annoying output-purity bug. [Link](https://github.com/earendil-works/pi/issues/8825)

## Key PR Progress

1. **[#8840] `pi web`: browser GUI with full TUI parity** — Token-gated local HTTP + WebSocket server serving a full-featured web GUI. Big surface-area addition; likely to draw significant review. [Link](https://github.com/earendil-works/pi/pull/8840)

2. **[#8844] Tencent Token Plan Individual provider** — Adds `tc-code-latest`, DeepSeek v4 variants, GLM-5.2, MiniMax-M2.7 on Tencent's plan/v3 endpoint. GLM-5/5.1 deliberately omitted (reasoning-only). [Link](https://github.com/earendil-works/pi/pull/8844)

3. **[#8262] Dispatch hooks on every turn-start path** — Fixes `sendCustomMessage(triggerTurn: true)` skipping `input` hook and `before_agent_start`. Cancellable preflight for custom messages. [Link](https://github.com/earendil-works/pi/pull/8262)

4. **[#8725] Settle active turn before in-memory fork** — Prevents `toolResult` landing in the replacement session and `dispose()` cleanup under wrong session ID. Important correctness fix for forks. [Link](https://github.com/earendil-works/pi/pull/8725)

5. **[#8297] Exclude superseded retry attempts from restored context** — Cleans provider context, token budgets, and branch summaries of failed attempts while retaining them in JSONL history. [Link](https://github.com/earendil-works/pi/pull/8297)

6. **[#8828] Detect Zed terminal capabilities** — Alacritty core detected for hyperlinks/true color but not images; also documents default Pi hotkey keymap for Zed. [Link](https://github.com/earendil-works/pi/pull/8828)

7. **[#8112] realpath extension entries before jiti import** — Fixes pnpm symlinked extension resolution (closes #8092). Targeted at pnpm users; meaningful for monorepo setups. [Link](https://github.com/earendil-works/pi/pull/8112)

8. **[#8818] Omit Responses `tool_choice` when no tools are sent** — Sends `tools: []` for Grok to avoid xAI 400s during compaction. Small, surgical fix with clear provider-specific rationale. [Link](https://github.com/earendil-works/pi/pull/8818)

9. **[#8812] Flush extension provider registrations before initial model resolution** — Fixes races where providers registered via `pi.registerProvider` arrive after `createAgentSession` resolves the model. [Link](https://github.com/earendil-works/pi/pull/8812)

10. **[#8819] Fix project name from 'pi' to 'Pi'** — Cosmetic branding fix across docs/UI copy. [Link](https://github.com/earendil-works/pi/pull/8819)

## Feature Request Trends

- **Multimodal expansion (#3200, #8643)**: Community wants video/audio in `prompt` and proper image handling in `toolResult` blocks across providers (Bedrock, OpenAI-compat). Expect more of this as modal models proliferate.
- **Provider breadth (#8844, #8836)**: Tencent Token Plan landed; Command Code requested as built-in. Users keep pushing for more first-party providers to avoid plugins.
- **Profile/namespace isolation (#3966, #8834)**: Opt-in `--profile` and `pi.namespace` for package resources — users want clean multi-project, multi-context setups.
- **Accessibility & terminal ergonomics (#8831, #8828)**: Screen-reader consistency for interactive mode and Zed terminal detection. Growing awareness of terminal-environment diversity.
- **Lazy/resumable sessions (#8843)**: Startup cost on large sessions is now a visible complaint; expectation is incremental parsing.

## Developer Pain Points

- **Windows is a second-class citizen**: Conhost window flashes (#8846), native console stderr misclassification (#8842), backslash path normalization in prompt building (#8841). Multiple reports in a single day — this needs a coordinated fix pass.
- **Compaction and context-budget correctness**: `tool_choice` without tools 400s on xAI (#8820), budget ignoring output reservation (#8061), retry attempts polluting context (#8297). Providers are strict, and Pi's math is off in edge cases.
- **Reasoning-model regressions**: `reasoning_details` echo degrading Venice GLM (#8753) and thinking-trail line breaks (#8780) suggest reasoning-loop handling is brittle across providers.
- **Documentation gaps**: Missing README installation section (#6907) and unclear provider setup flows keep recurring — onboarding friction is a steady low-level complaint.
- **State isolation**: Users repeatedly ask for clean separation between work/personal/local-LLM setups (#3966, #8834), pointing to real-world friction in daily multi-project usage.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-30

## Today's Highlights

The community's attention is sharply focused on a **critical regression in v0.22.3**: multiple users report `400 Failed to initialize samplers` errors with llama.cpp servers, triggered by the new `toolSearch` threshold feature. Meanwhile, the maintainer team is actively pushing a **large batch of bugfix PRs** addressing issues found in the recent WebShell UI cutover (PR #9811) — a significant architectural change that is clearly still stabilizing. The review/autofix agent infrastructure also continues to see heavy development, with several PRs targeting CI reliability and workflow efficiency.

---

## Releases

No new stable releases in the last 24 hours. The most recent reported version is **v0.22.3-nightly.20260830.413b6d15d3**, which failed its release workflow (issue #10535).

---

## Hot Issues

1. **[#5975 — API Error: No stream activity for 120000ms after 19 chunks](https://github.com/QwenLM/qwen-code/issues/5975)** — Long-running (59 days) P2 bug with 14 comments. Users report a streaming hang after the "Thinking" phase in v0.19.3+, forcing Ctrl+Y retries. High community engagement suggests this is a persistent annoyance.

2. **[#10520 — toolSearch threshold > 0 causes llama.cpp 400 "failed to parse grammar"](https://github.com/QwenLM/qwen-code/issues/10520)** — P2, opened Aug 29. Setting `tools.toolSearch.threshold` to 10 breaks all requests with llama.cpp. Critical because it affects local-model users and was introduced recently.

3. **[#10530 — 400 Failed to initialize samplers in 0.22.3](https://github.com/QwenLM/qwen-code/issues/10530)** — P2, confirmed regression in 0.22.3. Affects Qwen 3.8/3.6 models via llama-server; works with gemma4-12b. Previous version worked — pointing to a specific regression.

4. **[#10538 — Computer Use SDK panics on Windows (embedded runtime)](https://github.com/QwenLM/qwen-code/issues/10538)** — P2, opened Aug 30. Driver 0.20.0 panics on every embedded runtime creation on Windows x64. Platform-specific bug affecting the CUa SDK's reliability.

5. **[#8625 — Chinese input Pinyin unreadable in Windows terminal](https://github.com/QwenLM/qwen-code/issues/8625)** — P2 UI bug, 8 comments. Closed with a fix. The community clearly cares about i18n quality in the interactive terminal.

6. **[#8172 — Agent Team messages queue too long during multi-tool turns](https://github.com/QwenLM/qwen-code/issues/8172)** — P2 multi-agent bug. Teammate messages wait until `StreamingState.Idle`, which can be an entire multi-tool-call turn. Impacts responsiveness of Agent Team mode.

7. **[#10073 — Agent Team: send_message reports background task errors](https://github.com/QwenLM/qwen-code/issues/10073)** — P2 multi-agent bug. A named teammate destination throws "No background task found with ID". Confusing error, likely a UX/architecture mismatch.

8. **[#10208 — Agent Team: failed concurrent spawn persists ghost member](https://github.com/QwenLM/qwen-code/issues/10208)** — P2 multi-agent bug. Concurrent spawns can persist a member that's later rolled back from memory but not from the team roster file. Consistency issue in team persistence.

9. **[#10248 — DingTalk messages appear under Tasks instead of Channels](https://github.com/QwenLM/qwen-code/issues/10248)** — P2 web-shell integration bug. Messages from DingTalk never reach the Channels tab. Channel routing issue post-WebShell cutover.

10. **[#9816 — DaemonClient workspace file helpers throw "Invalid URL"](https://github.com/QwenLM/qwen-code/issues/9816)** — P2 SDK bug. Six sibling methods still build URLs with absolute-only `new URL()`, breaking relative daemon base URLs. SDK portability issue.

---

## Key PR Progress

1. **[#10539 — fix(ci): gate no-AK installs on disk capacity](https://github.com/QwenLM/qwen-code/pull/10539)** — Adds disk-floor admission check to the no-credential integration job on self-hosted runners. Directly addresses the ENOSPC issue from #10035.

2. **[#10534 — fix(vscode): restore native diff approval after WebShell cutover](https://github.com/QwenLM/qwen-code/pull/10534)** — Restores VS Code native diff Accept/Reject commands after PR #9811 moved tool permissions to WebShell. Critical UX fix for VS Code users.

3. **[#10532 — fix(acp-bridge): deflake exhaustive UTF-16 byte-estimate test](https://github.com/QwenLM/qwen-code/pull/10532)** — Raises vitest timeout to 60s for the exhaustive UTF-16 test. CI flakiness fix.

4. **[#10537 — ci: isolate agent workflows on dedicated runners](https://github.com/QwenLM/qwen-code/pull/10537)** — Routes long-running review/autofix jobs to a dedicated `ecs-agent` pool. Infrastructure hygiene to prevent test failures from resource contention.

5. **[#10501 — (part of #10372 batch) fix(vscode-ide-companion): closeDiff path resolution](https://github.com/QwenLM/qwen-code/issues/10372)** — Fixes `closeDiff` skipping workspace-relative path resolution. Consistency fix for the diff view lifecycle.

6. **[#10427 — fix(hooks): close four trust-boundary holes in hook execution](https://github.com/QwenLM/qwen-code/pull/10427)** — Single-commit reopen of #8396: no HTTP redirects, explicit `--` argv separator, and two other hardening fixes. Security-focused, important for repo-controlled configs.

7. **[#10410 — feat(core): preserve prompt cache for deferred tools](https://github.com/QwenLM/qwen-code/pull/10410)** — New `tool_search` + `tool_call` two-step bridge for deferred tools. Replaces schema revelation, keeping the declared tool list stable. Potentially ties into the #10520/#10530 grammar issues.

8. **[#10283 — feat(cli): select an output style via general.outputStyle or --output-style](https://github.com/QwenLM/qwen-code/pull/10283)** — First way to actually pick output styles shipped in #9565 (Concise, Proactive, Explanatory, etc.). Nice DX add.

9. **[#10425 — feat(web-shell): derive session issue bindings from PR closing references](https://github.com/QwenLM/qwen-code/pull/10425)** — A session bound to a PR now carries the issues it closes. Deeper GitHub integration in the web shell.

10. **[#10439 — ci: watch /resolve for consecutive failures and file a tracking issue](https://github.com/QwenLM/qwen-code/pull/10439)** — Automated health-watch on the `@qwen-code /resolve` command. Schedules a bot to file issues when the command fails repeatedly.

---

## Feature Request Trends

- **Agent Team robustness is the dominant theme** — multiple issues (#8172, #10073, #10208, #10297) concern teammate message delivery, spawn rollback, and team roster consistency. The community is actively using multi-agent workflows and hitting real-world edge cases.

- **Local model server compatibility** — The llama.cpp grammar failures (#10520, #10530) highlight frustration with regression-testing across different OpenAI-compatible backends. Users expect local servers to keep working across versions.

- **WebShell cutover fallout** — Many issues (#10372, #10373, #10405, #10406, #10534) trace back to PR #9811. Expect more surfacing as users migrate to the new UI. Language detection (zh-CN), session switching, and diff approval are the pain points so far.

- **Self-hosted runner reliability** — ENOSPC and flaky CI (#10035, #10532) keep interrupting contributions. The fix direction is clear: disk checks and dedicated runner pools.

---

## Developer Pain Points

1. **Streaming hangs in the interactive terminal** — Issue #5975 has 14 comments and has persisted for 59 days. The "Thought for Xs" phase followed by no output is a high-frequency complaint.

2. **Multi-agent mode is still rough around the edges** — Multiple P2 bugs in the same week on teammate messaging, ghost persistence, and background task errors. This is the most active bug area, indicating both usage and feature maturity challenges.

3. **LLM-server regression risk** — The llama.cpp 400 failures are a clear signal: every release needs smoke tests against common local-model servers (llama.cpp at minimum).

4. **Windows-specific polish** — Terminal rendering of Chinese input and the Computer Use SDK crash show that Windows support still needs attention.

5. **Daemon URL handling is inconsistent** — #9816 shows internal inconsistency between `readWorkspaceFileBytes` (fixed for relative URLs) and six sibling methods that still require absolute URLs. A classic refactoring bug pattern.

---

*Digest generated from QwenLM/qwen-code GitHub activity on 2026-08-30.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-30

## 1. Today's Highlights
The v0.9.12 milestone is in its final integration stretch, with the release branch (PR #5576, 72 commits) gated and code-complete pending changelog/R C gates. Hot on its heels, the community's long-standing ask for multi-wire provider support (`responses`/`anthropic`) reached resolution through a rescue PR (#5719) preserving contributor credits. A new high-severity sandbox security issue (#5723) emerged concerning `NoNewPrivs` blocking `sudo` in production deployment workflows.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (10 Selected)

### 🔴 Release Blockers & Milestones

**#5573 — v0.9.12 Milestone Tracker (start here)**
- **Author:** Hmbown | **Comments:** 22
- The release linchpin with clear P0 priorities: money and safety fixes. Community traction is high; main coordination point for the release cycle.
- https://github.com/Hmbown/CodeWhale/issues/5573

**#5316 — EPIC-005: TUI Crate Decomposition (Umbrella)**
- **Author:** aboimpinto | **Comments:** 19
- Umbrella epic for restructuring the Rust TUI crate into modular components. The highest-traffic epic this cycle; community watching closely given dependency refactoring.
- https://github.com/Hmbown/CodeWhale/issues/5316

### 🚨 New High-Severity

**#5723 — Agent shell `NoNewPrivs` blocks sudo**
- **Author:** ronohara | **Comments:** 1
- 🚨 **High severity:** Sandbox hardening breaks pre-existing production deployment workflows (`sudo` in agent context). Fresh 24h report; likely P0 candidate for next patch.
- https://github.com/Hmbown/CodeWhale/issues/5723

### 🐛 Bug Fixes

**#5713 — Custom provider wire = "responses"|"anthropic" support**
- **Author:** whp233 | **Comments:** 1
- Patch for `openai-compatible` providers that ignores custom wire dialects, always defaulting to Chat Completions. Affects users of Responser/Anthropic protocol.
- https://github.com/Hmbown/CodeWhale/issues/5713

**#1754 — Let AI select shell and language for tool_call**
- **Author:** superzmy | **Comments:** 3
- AI-generated commands fail on Windows (PowerShell/cmd) when AI assumes Unix syntax. Prolonged issue; closed with mixed sentiment — shipped but not fully satisfying.
- https://github.com/Hmbown/CodeWhale/issues/1754

**#790 — Improve i18n coverage for commands, modals, and widgets**
- **Author:** ghost | **Comments:** 4
- Follow-up on zh-Hant locale support; hardcoded English still exists in critical UI paths. Community pushes for comprehensive localization.
- https://github.com/Hmbown/CodeWhale/issues/790

### ✨ Enhancements

**#5350 — Pre-built third-party model config templates**
- **Author:** shadapang | **Comments:** 7
- Users need 1-minute setup for OpenCode Zen, Go, Agnes, Sensenova; current flow gets stuck on `not checked`/`cache failed` states. Bilingual request; closed after resolution.
- https://github.com/Hmbown/CodeWhale/issues/5350

**#5579 — Plugin UX parity with Claude Code**
- **Author:** Hmbown | **Comments:** 3
- Ambitious request: proactive plugin recommendations, reload discoverability, hot-reload. Showcases community's desire for Claude Code-level polish.
- https://github.com/Hmbown/CodeWhale/issues/5579

**#1261 — Pane zooming support**
- **Author:** mrkissinger | **Comments:** 2
- Content truncation for tables/panes on smaller screens. Basic UX request, long-standing, closed with zoom implementation.
- https://github.com/Hmbown/CodeWhale/issues/1261

**#5668 — Add /copy for last model output**
- **Author:** Hmbown | **Comments:** 3
- UX quality-of-life: explicit command to copy the last completed model response without manual terminal selection.
- https://github.com/Hmbown/CodeWhale/issues/5668

---

## 4. Key PR Progress (10 Selected)

### 🏗️ Architecture / Refactoring

**#5717 — Adopt command shapes in project group (FEAT-021)**
- **Author:** aboimpinto
- Converts `/init`, `/lsp`, `/share`, `/goal` to the external command shape pattern established by FEAT-014/015/018. Part of the major crate decomposition effort.
- https://github.com/Hmbown/CodeWhale/pull/5717

### 🆕 New Features

**#5725 — Concentrate as first-class BYOK Responses gateway**
- **Author:** Hmbown
- Opt-in provider integration with OpenAI Responses-compatible gateway, mirroring the Eden AI aggregator. No parallel secret store or runtime.
- https://github.com/Hmbown/CodeWhale/pull/5725

**#5721 — Codewhale-account machine tokens (CODEWHALE_API_KEY)**
- **Author:** Hmbown
- CLI authentication via env variable with no local session file or browser. Simplifies CI/automation workflows significantly.
- https://github.com/Hmbown/CodeWhale/pull/5721

**#5712 — Cloud-dispatch remote runner**
- **Author:** Hmbown
- `/dispatch` becomes real: confirmed dispatch runs a cloud agent in a sandbox and opens the forge PR. Lifecycle hooks, sandbox receipts, teardown-on-cancel.
- https://github.com/Hmbown/CodeWhale/pull/5712

**#5722 — Wire header group's pod + notifications segments**
- **Author:** Hmbown
- Live `pod n/m` capacity indicator and notification segments in the header. Part of the design language rollout with truncate-before-wrap and Active/Attention ink roles.
- https://github.com/Hmbown/CodeWhale/pull/5722

**#5720 — Moonshot and Kimi native search (rescue)**
- **Author:** Hmbown
- Rescue of @h3c-hexin's fork branch (403 on force-push). Preserves authorship and auto-links #5686 as MERGED upon landing.
- https://github.com/Hmbown/CodeWhale/pull/5720

### 🔧 Fixes

**#5724 — Sandbox read deny-list path resolution fix**
- **Author:** Hmbown
- Greens macOS/Windows CI by matching the read deny-list against resolved paths. Six macOS failures in sandbox tests fixed; every open PR inherits these failures.
- https://github.com/Hmbown/CodeWhale/pull/5724

**#5719 — Multi-wire custom provider (rescue of #5716)**
- **Author:** Hmbown
- Rescue + fix-forward for whp233's branch. Adds `wire = "responses" | "anthropic"` to `openai-compatible` plus OpenCode Zen muse-spark support. Full credit preserved.
- https://github.com/Hmbown/CodeWhale/pull/5719

**#5703 — Match Operate to landed CWC OperateRecord**
- **Author:** Hmbown
- Aligns `cw · operate` with runtime API: camelCase fields, `GET/POST/PATCH /v1/operate`, pace throttling control.
- https://github.com/Hmbown/CodeWhale/pull/5703

**#5661 — Context pressure as agent directive**
- **Author:** Hmbown
- Fixes the model reading the sticky warning as decorative metadata. Now exposes pressure as an actionable name so agents stop "working until the user asks."
- https://github.com/Hmbown/CodeWhale/pull/5661

---

## 5. Feature Request Trends

Distilled from Issues this cycle:

1. **Provider Flexibility (High Demand)** — `wire` dialect control (#5713, #5719), pre-built templates (#5350), Concentrate gateway (#5725), Moonshot/Kimi search (#5720). Community wants zero-friction BYOK multi-provider support.
2. **UX Parity with Claude Code** — Plugin recommendations/hot-reload (#5579), welcome motion polish (#5656), pane zooming (#1261), `/copy` command (#5668). Users explicitly benchmarking against Anthropic's developer experience.
3. **Enterprise & Security Hardening** — `NoNewPrivs` sudo regression (#5723), Keychain retirement (#5718), OS-keyring full removal (#5718). Growing production deployment usage demands alignment with ops workflows.
4. **Session Continuity** — Post-crash recovery visibility (#5715): users force-quit, restart, model has no idea what it was doing. Persistent session state awareness is a recurring theme.

---

## 6. Developer Pain Points

### 🔁 Recurring Frustrations

1. **Fork branch dead-ends** — Multiple contributors hit `403 cannot force-push` on fork PRs (#5716, #5719, #5686, #5720). Maintainer rescues are SOP but add integration overhead and history churn.

2. **Cross-platform command generation** — AI models default to Unix syntax, breaking on Windows (PowerShell/cmd, #1754). Closed but incomplete: the AI still doesn't *select* the right shell/language.

3. **Provider config drudgery** — Manual Base URL/model/key entry for third-party services; models stuck in `not checked`/`cache failed` states after save (#5350). High-friction onboarding for non-OpenAI providers.

4. **CI platform flakiness** — macOS/Windows hosted runners consistently failing on `main` and every dependent PR (#5724 describes 6 macOS failures in sandbox tests). Wastes developer time and blocks releases.

5. **Sandbox vs. real workflows** — Security hardening (NoNewPrivs) breaks legitimate `sudo` usage in pre-existing production deployments (#5723). Balance between sandbox safety and operational reality is delicate.

6. **i18n gaps** — Core UI localized but commands/modals/widgets still hardcoded in English (#790). Minority-language users repeatedly raise the gap.

7. **Recovery blindness** — Force-quit and the model loses all context about in-flight work (#5715). Users want session state to survive crashes with visibility for the agent.

---

*Community pulse: v0.9.12 is closing fast; the wire-dialect provider support (multi-wire) and the cloud-dispatch runner (#5712) are the fresh and exciting features this week. Watch #5723 (no-new-privs) — that's the one to hotfix first.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*