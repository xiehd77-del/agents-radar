# AI CLI Tools Community Digest 2026-07-31

> Generated: 2026-07-31 02:56 UTC | Tools covered: 9

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
**Date: 2026-07-31**

---

## 1. Ecosystem Overview

The AI CLI developer tools ecosystem is in a **post-hype consolidation phase**, characterized by production hardening rather than feature explosion. Across seven major tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code, OpenCode, Pi, Qwen Code, and Codewhale), the dominant themes are **reliability under scale, session stability, and operational control** (cost visibility, sandboxing, permission enforcement). None shipped new major releases in the last 24 hours—a rare synchronization suggesting platform-level maturation. The community's collective frustration centers on **silent failures** (subagents returning empty, hooks not firing, credentials leaking) and **context/resource management** (runaway subagent billing, rate-limit opacity, context-window saturation). Cross-platform parity—particularly Windows—remains a persistent weak spot across nearly all tools. Notably, a clear shift is visible from "chat wrapper" thinking toward **agent-orchestration-platform** expectations: users want subagent supervision, parallel execution, programmatic lifecycle control, and multi-session architectures.

---

## 2. Activity Comparison

| Tool | Hot Issues (24h) | Notable PRs (24h) | Release Status | Dominant Activity Type |
|---|---|---|---|---|
| **Claude Code** | 10 active (148 comments max on multi-account) | 1 (closed, spam) | No new release (v2.1.220) | Bug reporting; **aging unresolved bugs** |
| **OpenAI Codex** | 10 active (22 comments max on Sysmon BSOD) | 10 substantive PRs | No new release | **Windows stability + performance fixes** |
| **Gemini CLI** | 10 active (5 👍 max on quota) | 10 substantive PRs | No new release | Security hardening + reliability fixes |
| **GitHub Copilot CLI** | 10 active (10 👍 on Rewind) | None | **v1.0.77 released** | Bug reporting; feature parity requests |
| **Kimi Code** | 3 tracked (critical 429) | 1 (hooks fix) | v1.49.0 (no update) | **Critical stability under load** |
| **OpenCode** | 10 active (16 comments on model overload) | 10 PRs (3 closed) | **v1.18.10 released** | Feature polish + bug fixes |
| **Pi** | 10 active (root-cause cluster) | 10 PRs (foundational) | No new release | **Architecture + protocol groundwork** |
| **Qwen Code** | 10 active (converter validation gaps) | 10 PRs (telemetry, tracing) | v0.21.1-nightly released | Telemetry + CI stabilization |
| **Codewhale (ex-DeepSeek)** | 10 active (compile-time discussion) | 10 PRs (refactor-focused) | **v0.9.2 finalized** | **Major architecture refactor** |

**Release velocity ranking:** GitHub Copilot CLI = OpenCode > Qwen Code > Codewhale > (quiet cluster: Claude Code, OpenAI Codex, Gemini, Kimi, Pi)

---

## 3. Shared Feature Directions

### a) **Subagent/Parallel Execution & Supervision**
- **Gemini CLI** (#27414): Parallel subagent execution (à la AGY CLI)
- **Claude Code** (#82104): Subagent cost containment; #78217: managed default for subagent models
- **Copilot CLI** (#4293): Sub-agents with full tool access return empty
- **Qwen Code** (#8128): Subagent status exposure
- **Codewhale** (#4022, #4989): Durable subagent steering, selective context forks

**Common need:** Users want subagents to be *orchestrated, not fire-and-forget* — with visibility, cost caps, cancellation, and parallel execution.

### b) **Cost/Rate-Limit Transparency**
- **OpenAI Codex** (#24080): Full rate-limit data in status_line (reset times, balance, plan)
- **Copilot CLI** (#4295, #4308, #4309): Proactive credit warnings; silent credit drain investigation
- **Kimi Code** (#2571): 429 rate-limit blocking
- **OpenCode** (#39790): Fixed-window quota retry handling
- **Claude Code** (#77846): Per-model rate-limit visibility

**Common need:** Users demand *predictability and visibility* into consumption, not just caps.

### c) **Cross-Surface Session Continuity**
- **Claude Code** (#13843, #36151, #42050): Context sharing across Desktop/Mobile/CLI/Web
- **OpenAI Codex** (#34804): Session sync across devices
- **Pi** (#7344, #7348): Remote session wire protocol, runtime-neutral client

**Common need:** The CLI is no longer an island — users want their agent state to *follow them* across surfaces.

### d) **Windows as a First-Class Citizen**
- **OpenAI Codex**: Sysmon BSOD (#31035), PowerShell polling (#25453), OneDrive disconnects (#35420)
- **OpenCode**: npm packaging (#37628), shell spawning (#39795)
- **Qwen Code**: Installer SHA failure (#7118), desktop-LMStudio gap (#8146)
- **Pi**: Input line redraw (#6300)
- **Codewhale**: AltGr slash bug (#4977), Cygwin paths (#2369)

**Common need:** Windows is consistently reported as the weakest platform across *all* tools. This is a structural gap, not an isolated bug.

### e) **Sandbox/Mode Enforcement Gaps**
- **OpenCode** (#39491): Plan mode bypassable via bash redirection
- **Copilot CLI** (#4298): Granular tool whitelisting in sandbox
- **OpenAI Codex** (#35864): Unelevated sandbox rejects writable roots
- **Qwen Code**: Permission-control E2E flakiness

**Common need:** Users want *guaranteed* policy enforcement, not best-effort sandboxing that agents can work around.

### f) **MCP/Tool Ecosystem Maturity**
- **Copilot CLI** (#4301): MCP argument serialization bugs
- **Gemini CLI** (#28481): MCP OAuth token refresh
- **Claude Code**: MCP registrations missing

**Common need:** As MCP servers multiply, tools need robust connection lifecycle, auth refresh, and error propagation.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | Codewhale |
|---|---|---|---|---|---|---|---|---|
| **Core Strength** | Context management, hooks, skills | Windows-native execution, app-server protocol | Security hardening, proxy/auth correctness | Git/VS Code ecosystem integration | Plugin architecture, TUI polish | **Remote/multi-session architecture** | Telemetry, CI automation, Goal lifecycle | **Rust monolith cleanup**, permission model |
| **Target User** | Pro/Enterprise, automation-heavy | Enterprise + Windows desktop | Enterprise/Vertex AI users | GitHub-centric developers | **Local model enthusiasts** | **Embedders, multi-session power users** | **CI/CD + web-shell users** | TUI-minimalists, refactor-conscious |
| **Technical Approach** | Bundled skills, scheduler, hooks | Standalone host runtime, sandbox | OAuth-focused, proxy-aware | Rust core, browser OAuth | Plugin/ACL architecture, modal model discovery | Transport-neutral protocol, runtime-agnostic client | OTel tracing, daemon channels | Single-binary convergence, Gherkin acceptance tests |
| **Distinctive Weakness** | Aging bugs, stale triage | Windows BSODs, sandbox friction | Auth/quota instability | Git assumption, credit opacity | Mode enforcement gaps | Model-catalog refresh hangs | CI flakiness, VP-mode crashes | Compile times, monolith size |

**Key differentiators:**
- **Pi** is architecturally the most forward-looking (transport-neutral protocol → external session control for embedded use cases)
- **OpenCode** has the deepest plugin ecosystem (hot-reload, session.request hook)
- **Qwen Code** is the most CI/CD-integrated (autofix watchers, telemetry standardization)
- **Gemini CLI** is investing most in security hardening (SSRF fix, auth-loop prevention)
- **Codex** is dominating Windows-specific engineering effort

---

## 5. Community Momentum & Maturity

### Most Active / High Engagement
- **Claude Code**: Highest raw engagement (#36151: 148 comments, 530 👍) but also *high frustration* with unresolved issues
- **OpenAI Codex**: Most PR activity (10 substantive PRs in 24h) — **fastest iteration rate**, driven by `copyberry[bot]` automation
- **Gemini CLI**: 10 PRs, security-focused, strong maintainer responsiveness (locking, closing stale issues)

### Rapidly Iterating
- **OpenCode**: v1.18.10 shipped with daily feature additions; 10 PRs with active controversy (hottest PR has `needs:compliance` tag)
- **Codewhale**: v0.9.2 finalized, v0.9.3 umbrella refactor underway — **architectural transformation in real-time**

### Mature but Slow
- **Copilot CLI**: v1.0.77 shipped; but no PRs in 24h — suggests a steady but slower release cadence

### Concerning Signals
- **Claude Code**: Only 1 PR (spam), multiple critical issues open for 6–12 months (#6305), stale auto-closing causing duplicate reports — **triage process needs attention**
- **Kimi Code**: Critical 429 blocker with no maintainer response — smallest community, most exposed to provider issues

---

## 6. Trend Signals

### Industry Trends (with reference value)

1. **From CLI to Agent Orchestration Platform**: Users across Claude Code, Gemini, Copilot, and Codewhale are demanding subagent supervision, parallel execution, and programmatic lifecycle. The CLI is expected to be a *multi-agent runtime*, not a single-command tool. **→ For developers: plan for subagent architecture from day one.**

2. **Windows Is the Untapped Market**: Every tool has significant Windows-specific issues. The ecosystem is macOS/Linux-first. **→ For developers: Windows support is a competitive differentiator; build for Windows from the start.**

3. **Silent Failures Are the Trust Killers**: Across all tools, the most damaging bugs are those that *fail silently* — subagents returning empty, hooks not firing, sessions draining credits invisibly. **→ For developers: prioritize observability and explicit error surfacing over feature velocity.**

4. **Rate-Limit & Cost Transparency Is Table Stakes**: Users are *angry* about opaque consumption. The tools that expose full rate-limit data (reset times, balance) will win enterprise trust. **→ For developers: build cost-visibility UIs and API surfaces early.**

5. **Session Continuity Is the Next UX Battleground**: Cross-surface context sharing, remote session protocols, and programmatic context lifecycle are the top feature requests. **→ For developers: architect sessions as first-class, serializable, portable entities.**

6. **Sandboxing Must Be Enforced, Not Suggested**: Multiple tools report agents bypassing plan-mode or sandbox restrictions. **→ For developers: treat sandbox enforcement as a security boundary, not a UI toggle.**

7. **MCP Is Becoming the Integration Backbone**: MCP-related bugs (OAuth refresh, serialization, registration) appear across tools. The ecosystem is converging on MCP as the standard plugin surface. **→ For developers: invest in robust MCP client lifecycle management.**

8. **Telemetry Standardization Is Coming**: Qwen Code's OTel GenAI tracing and Pi's structured protocol schemas point toward a future where agent-to-tool communication is *schema-validated and instrumented*. **→ For developers: adopt OpenTelemetry GenAI conventions now.**

9. **Auth Remains the Weakest Link**: Proxy-related crashes (`HttpsProxyAgent`), OAuth races, credential path fragmentation, and bearerToken needs dominate across all tools. **→ For developers: treat auth as a first-class system, not an afterthought.**

10. **Developer Experience Is Now About Compile Times**: Codewhale's 771k-line monolith sparked a community discussion on compile times (#4991). This is a new DX metric that will drive architecture decisions. **→ For developers: consider incremental compilation, workspace deduplication, and faster feedback loops as core DX.**

---

*Report generated 2026-07-31 from community digest data across 9 AI CLI tool repositories. Data reflects the most active 24-hour cycle in the absence of major releases — a "consolidation" signal for the ecosystem.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-07-31 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

**#1 — skill-creator: run_eval.py fixes** ([PR #1298](https://github.com/anthropics/skills/pull/1298))
- **Functionality:** Fixes the core evaluation loop that scores skill descriptions — currently reporting `recall=0%` on every run due to broken trigger detection, Windows stream handling, and parallel worker race conditions.
- **Discussion highlights:** Multiple independent reproductions of the 0% recall bug; the description-optimization loop is "optimizing against noise"; fix requires treating the eval artifact as a real installed skill rather than a synthetic command file.
- **Status:** Open | Created 2026-06-10 | High urgency (blocks all skill quality optimization)

**#2 — document-typography skill** ([PR #514](https://github.com/anthropics/skills/pull/514))
- **Functionality:** Typographic quality control for generated documents — fixes orphan word wrap, stranded headers, numbering misalignment in AI-generated output.
- **Discussion highlights:** Authors argue these issues affect every document Claude generates; users rarely request typographic fixes explicitly, so proactive prevention is needed.
- **Status:** Open | Created 2026-03-04 | Long-running discussion

**#3 — ODT skill** ([PR #486](https://github.com/anthropics/skills/pull/486))
- **Functionality:** OpenDocument Text (.odt/.ods) creation, template filling, and ODT-to-HTML conversion — complements the existing DOCX and PDF skills.
- **Discussion highlights:** Covers LibreOffice + ISO standard formats; fills a clear gap for European government/enterprise users where ODF is mandated.
- **Status:** Open | Created 2026-03-01

**#4 — self-audit skill** ([PR #1367](https://github.com/anthropics/skills/pull/1367))
- **Functionality:** Mechanical file verification plus a four-dimension reasoning audit gate before output delivery — universal across tech stacks and models.
- **Discussion highlights:** Positions as a "quality gate" for AI output; the mechanical verification (do claimed output files actually exist?) is especially compelling for production use.
- **Status:** Open | Created 2026-06-28 | Fast-moving discussion (v1.3.0 iteration)

**#5 — frontend-design skill revision** ([PR #210](https://github.com/anthropics/skills/pull/210))
- **Functionality:** Rewrites the frontend-design skill to improve actionability — every instruction must be executable within a single conversation.
- **Discussion highlights:** Community critique: the original skill read like documentation for humans instead of a specification for Claude; this PR addresses internal coherence.
- **Status:** Open | Created 2026-01-05 | Long review cycle

**#6 — skill-quality-analyzer + skill-security-analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83))
- **Functionality:** Meta-skills that evaluate other skills across five dimensions (structure, documentation, examples, security, robustness).
- **Discussion highlights:** Directly addresses the trust/quality gap in the community skills marketplace; community sees this as a governance mechanism.
- **Status:** Open | Created 2025-11-06 | Continued attention across months

**#7 — pyxel skill** ([PR #525](https://github.com/anthropics/skills/pull/525))
- **Functionality:** Retro/pixel-art/8-bit game development using the Pyxel engine, with an MCP server for iterate-and-capture workflows.
- **Discussion highlights:** Shows the MCP + Skills convergence pattern; creator is also the pyxel-mcp author, demonstrating third-party ecosystem integration.
- **Status:** Open | Created 2026-03-05 | Updated as recently as 2026-07-15

---

## 2. Community Demand Trends

**Trend 1 — Skill quality tooling and evaluation infrastructure.** The cluster of issues around `run_eval.py` (0% recall, Windows incompatibility, false trigger detection — issues [#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169), [#1061](https://github.com/anthropics/skills/issues/1061), [#1329](https://github.com/anthropics/skills/issues/1329)) shows the community is actively building skills but being blocked by broken evaluation tooling. The loop that optimizes skill descriptions is a first-class need.

**Trend 2 — Security and trust boundary concerns.** Issue [#492](https://github.com/anthropics/skills/issues/492) (43 comments) — community skills under the `anthropic/` namespace impersonating official skills — signals a governance gap. Users are elevating skills' permission models and want the marketplace to enforce provenance and security standards.

**Trend 3 — Governance and reasoning quality gates.** Issues [#412](https://github.com/anthropics/skills/issues/412) (agent-governance safety patterns) and [#1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality gate pipeline) reflect a broader maturity — the community isn't just asking for better document generation; it wants structured verification of AI output correctness.

**Trend 4 — Document format coverage expansion.** The ODT proposal joins PDF and DOCX skills — the community is systematically filling format gaps, especially for non-American markets (ODF/LibreOffice) and specialized typographic quality.

**Trend 5 — Enterprise sharing and plugin deduplication.** Issues [#228](https://github.com/anthropics/skills/issues/228) (org-wide skill sharing) and [#189](https://github.com/anthropics/skills/issues/189) (duplicate plugins causing context bloat) show demand for distribution and lifecycle management — skills need a first-class sharing structure and dedup discipline.

---

## 3. High-Potential Pending Skills

These PRs are actively discussed and likely to land soon:

**plan-file-hygiene** ([PR #1479](https://github.com/anthropics/skills/pull/1479)) — Addresses planning artifact accumulation for long-running agents; lifecycle management for ephemeral planning files. Very recent (2026-07-25) with community attribution in the PR description.

**color-expert** ([PR #1302](https://github.com/anthropics/skills/pull/1302)) — Self-contained color expertise: naming systems (ISCC-NBS, Munsell, RAL), color spaces, and "what to use when" tables for gradients, scales, and accessibility.

**testing-patterns** ([PR #723](https://github.com/anthropics/skills/pull/723)) — Full-stack testing coverage: Trophy model, unit testing patterns (AAA, naming, edge cases), React component testing with Testing Library.

**SAP-RPT-1-OSS predictor** ([PR #181](https://github.com/anthropics/skills/pull/181)) — Tabular foundation model predictive analytics on SAP business data — a niche but high-value enterprise use case for a specific open-source model.

**compact-memory** (proposed in [Issue #1329](https://github.com/anthropics/skills/issues/1329)) — Symbolic notation for compact agent state; reduces long-running agents' context overhead from prose notes. An active proposal expected to become a PR soon.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is operational reliability of the skill lifecycle itself — they want evaluation tooling that works (0% recall bugs), trust boundaries that are safe, and structure that prevents context bloat — before they will invest further in whatever new domain skills they might contribute.**

---

# Claude Code Community Digest
**2026-07-31**

---

## Today's Highlights

No new releases landed in the last 24 hours—the ecosystem is in a quiet patch between versions (latest reported: 2.1.220). However, the community is actively surfacing **persistent, high-impact bugs** around context management, subagent billing control, and cross-platform sync, suggesting growing pains as Claude Code scales to heavier production use. A notable cluster of new reports revolves around **silent failures**—messages dropped, tools returning nothing, and missing MCP registrations—which erode trust even when they don't crash.

---

## Releases

No new releases in the last 24 hours. The most recent version referenced across issues is **2.1.220**.

---

## Hot Issues

### 1. [Multi-account switching in Claude Mobile app (#36151)](https://github.com/anthropics/claude-code/issues/36151)
**Comments: 148 | 👍 530** — The single most active thread, demanding proper multi-account support (e.g., personal + work) in the mobile app without shared email workarounds. The sheer comment-to-reaction ratio indicates sustained frustration from a vocal user base.

### 2. [Hooks Not Executing on macOS (#6305)](https://github.com/anthropics/claude-code/issues/6305)
**Comments: 38 | 👍 16** — A **year-old bug** that remains open: `PreToolUse`/`PostToolUse` hooks silently fail to fire on macOS. This is a workflow breaker for teams relying on custom guardrails and automation. Its longevity is a red flag for trust in the hook system.

### 3. [Share conversation context from Claude.ai to Claude Code (#13843)](https://github.com/anthropics/claude-code/issues/13843)
**Comments: 26 | 👍 103** — A strong feature request to bridge planning sessions in Claude.ai with CLI execution. The high 👍 count shows significant demand for a tighter web-to-terminal workflow.

### 4. [Windows Desktop app fatal GPU crash (#80444)](https://github.com/anthropics/claude-code/issues/80444)
**Comments: 10 | 👍 1** — A severe desktop bug: launching the in-app Browser tab triggers a fatal GPU crash that bricks the MSIX package until repair. "Crash leaves app unlaunchable" is a worst-case scenario for Windows users.

### 5. [Real-time steering mid-generation (#64624)](https://github.com/anthropics/claude-code/issues/64624)
**Comments: 9 | 👍 17** — Users want to send messages while Claude is generating, without queueing or discarding progress via Escape. The docs claim "Interrupt and steer" exists, but it's not implemented—a documented-vs-actual gap that breeds frustration.

### 6. [Artifact sharing fails persistently (#79824)](https://github.com/anthropics/claude-code/issues/79824)
**Comments: 8 | 👍 15** — A reproducible blocker: published artifacts (e.g., Mermaid diagrams) can't be shared publicly despite republishing. This kills a core collaboration feature for teams.

### 7. [TaskStop does not stop subagent children (#82104)](https://github.com/anthropics/claude-code/issues/82104)
**Comments: 2 | 👍 0** — **Alarming cost-control bug.** Killing a parent agent leaves subagents running, billing **750k tokens** post-kill with no usage visibility or caps. For heavy users, this is a financial and operational hazard.

### 8. [Bundled ugrep allocates 4-17 GB on small files (#78834)](https://github.com/anthropics/claude-code/issues/78834)
**Comments: 3 | 👍 0** — A pathological regex performance bug: ugrep eats gigabytes of RAM to search a 64 KB file when the pattern ends in `.{N}`. Memory-hungry tools are a production risk, especially in constrained CI environments.

### 9. [Scheduler catch-up storm on restart (#74055)](https://github.com/anthropics/claude-code/issues/74055)
**Comments: 2 | 👍 1** — The scheduled-tasks runner "ghost fires" daily tasks after restart—including `enabled:false` tasks—and never updates `lastRunAt`. For automation-heavy teams, this can trigger unintended side-effect chains.

### 10. [Skill tool re-invoked after slash command load (#73774)](https://github.com/anthropics/claude-code/issues/73774)
**Comments: 2 | 👍 1** — A duplicate report (originally #59363, auto-closed as stale) where loaded skills get re-invoked by the tool layer. Pattern: a bug is reported, auto-closed for staleness, and re-reported—signaling **triage process gaps**.

---

## Key PR Progress

Only **one PR** was updated in the last 24 hours:

### [#82555: Claude/youtube instagram mcp yn2u6s](https://github.com/anthropics/claude-code/pull/82555)
**Status: CLOSED** — An apparent spam/test PR with a nonsensical title ("yn2u6s") and no description. Quickly closed. No substantive code changes are in flight this cycle—a quiet day for the maintainer team.

---

## Feature Request Trends

Across the 50 updated issues, several clear directions emerge:

1. **Unified cross-surface experience** — Users repeatedly ask for seamless context sharing and session continuity across **Desktop, Mobile, CLI, and Web** (issues #13843, #42050, #36151). The ecosystem still feels siloed per platform.

2. **Granular operational control** — Requests for **configurable context limits** (#79217), **per-model rate-limit visibility** (#77846), and **steering mid-generation** (#64624) show users want finer-grained, real-time control over the agent's behavior and resource usage.

3. **Sub-agent and model management** — A "managed default" for sub-agent models (#78217) and clear **sub-agent cost containment** (#82104) indicate a shift toward treating Claude Code as a **multi-agent orchestration platform**, not a single-command CLI.

4. **Programmatic context lifecycle** — The (now-closed, stale) request to **programmatically clear context and inject continuation prompts** (#35150) reveals a desire for long-running, self-managing tasks that can survive context exhaustion—a core need for production automation.

---

## Developer Pain Points

The recurring frustrations in this cycle:

- **Silent failures** — Hooks not firing (#6305), messages dropped without dispatch (#82772), grep returning nothing on NUL bytes (#82773), and artifacts failing to share (#79824). Errors that don't surface loudly erode developer trust faster than loud crashes.

- **Context and cost management** — Context saturation from bundled skills (#63566), runaway subagents billing post-kill (#82104), and full-context windows (#80787) paint a picture of **unpredictable resource consumption** with **insufficient visibility** (no live usage data, no caps).

- **Aging bugs and stale triage** — Multiple critical issues are months old (hooks #6305 from Aug 2025, scheduler #74055 from July 2026) or auto-closed as stale without fixes (#82773 references #56644's fate). The community is **re-reporting the same bugs** because fixes never landed—a signal that triage and closure policies need review.

- **Cross-platform inconsistency** — Windows-specific crashes (#80444), iOS auto-archive bugs (#71616), and missing HCS services on Windows (#80584) suggest **Windows and mobile remain second-class citizens** compared to macOS/Linux CLI.

- **Billing and account friction** — Payment method failures (#80973) and inability to switch accounts (#36151) add operational noise for teams managing shared infrastructure.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-31

## Today's Highlights
This week's activity centers on Windows stability and performance, with multiple high-traffic issues reporting Sysmon driver conflicts, excessive PowerShell polling, and OneDrive-related stream disconnects. The open-source `copyberry[bot]` has driven a substantial batch of internal fixes and performance improvements—from streaming buffer optimizations to Enterprise automation plan support—while the community continues to push on feature requests around rate-limit transparency, tool-free threads, and connector runtime stability.

## Releases
No new releases in the last 24 hours.

## Hot Issues
1. **[#31035 — Windows Codex Desktop reinstall/start SysmonDrv v13.22; WinDbg points to SysmonDrv.sys BSODs](https://github.com/openai/codex/issues/31035)** (22 comments)  
   A critical Windows stability issue: Codex Desktop local/PowerShell sessions appear to reinstall or start Sysinternals Sysmon v13.22 (`SysmonDrv.sys`) after it's been force-uninstalled, leading to repeated kernel crashes. Multiple WinDbg analyses implicate `SysmonDrv.sys`. This is the most commented issue this week and likely a top-priority Windows bug.

2. **[#25453 — Windows Codex Desktop spawns powershell.exe every second for full process polling](https://github.com/openai/codex/issues/25453)** (20 comments, 👍4)  
   High CPU usage caused by the app spawning a short-lived `powershell.exe` every second to poll processes. A performance bug that makes the app borderline unusable on Windows for some users.

3. **[#35420 — Work/Codex stream repeatedly disconnects when Windows workspace is OneDrive-backed and degraded](https://github.com/openai/codex/issues/35420)** (17 comments)  
   Requests fail with `stream disconnected before completion` when the selected workspace is a degraded OneDrive folder. This ties file-sync state directly to streaming reliability, a nontrivial integration issue for cloud-backed workspaces.

4. **[#20570 — Windows: `CreateProcessAsUserW failed: 1920` after upgrade](https://github.com/openai/codex/issues/20570)** (15 comments, 👍11)  
   An ongoing sandbox/CLI bug that appears after upgrading Codex on Windows. The error blocks the sandbox from launching processes, and the community has upvoted it heavily—indicating a broad impact.

5. **[#35552 — "FUCK YOU OPENAI, FUCK YOU"](https://github.com/openai/codex/issues/35552)** (13 comments)  
   A low-quality issue with a clearly frustrated title reflecting rate-limit grievances. While not actionable, it signals user frustration regarding rate limiting, which is a recurring theme this week (see #24080, #36213, #32707).

6. **[#32177 — Codex App: text-log attachment can trigger "Request blocked" and poison subsequent turns](https://github.com/openai/codex/issues/32177)** (12 comments, 👍12)  
   Attaching a plain-text application log to an established conversation can trigger a persistent "Request blocked" state that poisons all subsequent turns, effectively killing the session. High upvote count suggests reproducibility.

7. **[#24080 — Expose rate-limit reset times, balance, plan as status_line tokens](https://github.com/openai/codex/issues/24080)** (11 comments)  
   Feature request: the CLI `status_line` currently exposes rate limits only as percentages. Users want richer data—`resetsAt`, `windowDurationMins`, `credits.balance`, `planType`—directly available as tokens. This is a popular quality-of-life enhancement.

8. **[#31754 — Regression in codex-cli 0.143.0: "Unknown parameter: input[...].namespace"](https://github.com/openai/codex/issues/31754)** (7 comments, 👍3)  
   A regression that breaks resuming existing conversations with a parameter namespace error, while 0.142.0 works. Clear version-to-version breakage that affects session resumability.

9. **[#34306 — Codex CLI falsely triggers cybersecurity content block](https://github.com/openai/codex/issues/34306)** (7 comments, 👍5)  
   "This content can't be shown. We take extra caution with cybersecurity requests." Users report false positives where legitimate development requests get blocked by safety filters—particularly for security-related code. This is a recurring pain point.

10. **[#35864 — [BUGFIX INCLUDED] Windows unelevated sandbox rejects enforceable split writable roots, breaking apply_patch](https://github.com/openai/codex/issues/35864)** (4 comments)  
    The issue includes a reproduction and trace of the native Windows CLI `apply_patch` failure under the unelevated restricted-token sandbox. The community values issues that come with fixes, making this highly actionable.

## Key PR Progress
1. **[#36217 — Run code mode exclusively through the standalone host](https://github.com/openai/codex/pull/36217)**  
   Moves the V8 implementation into a dedicated `codex-code-mode-runtime` crate, removing the embedded runtime fallback from the Codex process. Cleaner architecture, ensuring the host executable is resolved from the active installation.

2. **[#36228 — Support Enterprise automation account plans](https://github.com/openai/codex/pull/36228)**  
   Adds recognition of `enterprise_cbp_automation` as an Enterprise workspace plan across authentication, backend responses, and rate-limit APIs—important for enterprise-scale automation users.

3. **[#36194 — Avoid shifting bytes in streaming output buffers](https://github.com/openai/codex/pull/36194)**  
   Fixes an O(n²) performance problem where removing decoded prefixes from a `Vec` shifted all remaining bytes; critical for streams with many invalid UTF-8 bytes or many framed messages.

4. **[#36188 — Make thread history projection resilient to malformed rollouts](https://github.com/openai/codex/pull/36188)**  
   Fixes a bug where a failed rollout append could prevent subsequent history from being projected by advancing the byte checkpoint without the ordinal checkpoint. A robustness win for session continuity.

5. **[#36187 — Refresh environment dates from the configured clock](https://github.com/openai/codex/pull/36187)**  
   Ensures `<current_date>` in environment context reads from the session's time provider rather than a hardcoded clock—aligns with environments that provide an external clock.

6. **[#36212 — Precompute app-server protocol exports](https://github.com/openai/codex/pull/36212)**  
   Embeds compressed TypeScript and JSON schema exports to avoid slow `ts-rs`/`schemars` generation during normal builds—a notable build-time optimization for downstream consumers.

7. **[#31817 — Update models.json](https://github.com/openai/codex/pull/31817)**  
   Automated update to the model registry—keeps the CLI/app aligned with current model availability.

8. **[#36207 — Record normalized sandbox violation events](https://github.com/openai/codex/pull/36207)**  
   Standardizes filesystem denials and managed-network blocks into one structured event shape, reducing downstream parsing complexity.

9. **[#36184 — Coalesce concurrent remote metadata requests](https://github.com/openai/codex/pull/36184)**  
   Deduplicates `fs/getMetadata` RPCs for the same remote path when multiple callers request concurrently—a latency and load improvement for remote workspaces.

10. **[#31591 — Enable parallel tool calls for Codex Apps](https://github.com/openai/codex/pull/31591)**  
    Adds a disabled-by-default `codex_apps_parallel_tool_calls` feature, letting host-owned MCP servers run parallel tool calls while preserving existing behavior for third-party servers—a forward-looking performance boost.

## Feature Request Trends
- **Rich rate-limit data**: Multiple requests (#24080, #36213, #32707) to expose full rate-limit information (reset times, balance, plan) in the CLI `status_line` and to the app UI. Plus users feel the current limits are too restrictive relative to Pro.
- **Workspace continuity across devices** (#34804): Users want session and repository context syncing across machines, building on the existing Codex Remote feature.
- **Tool-free threads** (#31922, open PR): Supporting lightweight helper threads that skip skill/plugin/tool enumeration entirely—likely for internal productivity (e.g., title generation) but with potential public API value.
- **Better Windows sandbox behavior**: Multiple issues/PRs target Windows sandbox ergonomics—writable roots, dependency bundles, and permission handling.
- **Enterprise automation support**: A clear push toward Enterprise plans for automated accounts (PRs #36228, #36239, #36218).

## Developer Pain Points
- **Windows stability and reliability**: The dominant theme this week. Issues include Sysmon driver BSODs (#31035), high-CPU PowerShell polling (#25453), OneDrive-backed disconnects (#35420), corrupted dependency bundles (#35803), and sandbox process creation failures (#20570).
- **Resumability and session integrity**: Users are hitting regressions where resuming conversations fails (#31754), threads disappear after compact (#20983), forked threads amplify storage (#35647), and text-log attachments poison turn history (#32177).
- **False-positive safety blocks**: #34306 (cybersecurity false positives) and #32177 (request blocked from log attachment) are two distinct flavors of the same problem—safety filters blocking legitimate developer workflow.
- **Rate-limit frustration**: High-volume complaints about Plus-tier limits with the new GPT-SOL 5.6 model, with one user opening a plainly hostile issue (#35552). Expect continued pressure to restructure limits or provide transparency.
- **Sandbox context loss**: With PR #36237 addressing slash-tmp on Windows and #35864 fixing apply_patch under unelevated sandbox, developers are clearly feeling the friction of sandbox policy vs. real-world filesystem layouts.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-31

## Today's Highlights
No new releases shipped in the last 24 hours, but momentum continues across security hardening and core reliability. Several high-priority PRs target known pain points: an SSRF fix in `web-fetch.ts`, MCP OAuth token refresh corrections, and auth-loop prevention — all converging on trust and stability. Meanwhile, the issue tracker remains dominated by subagent behavior, memory-system reliability, and authentication/ quota friction.

## Releases
No new releases in the last 24 hours.

## Hot Issues
1. **Asynchronous subagent execution** — [#27414](https://github.com/google-gemini/gemini-cli/issues/27414) — Power users with API billing want parallel subagent execution (à la AGY CLI) to speed up workflows. 12 comments; no 👍 — interest is real but not yet viral.

2. **Subagent recovery after MAX_TURNS misreported as GOAL success** — [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — `codebase_investigator` reports `status: "success"` even when it hit max turns without analysis. Misleading success signals erode trust in automation. 2 👍, 12 comments; maintainer-locked, pending retest.

3. **"HttpsProxyAgent is not a constructor" crash with Vertex AI and proxy env vars** — [#26533](https://github.com/google-gemini/gemini-cli/issues/26533) — Fatal crash during auth when `HTTP_PROXY`/`HTTPS_PROXY` are set. Blocks enterprise/CI usage with corporate proxies. 5 comments.

4. **Shell command execution hangs with "Waiting input" after completion** — [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Simple CLI commands finish but the agent hangs, showing "Awaiting user input." 3 👍 — the highest 👍 count among open issues this week; frustrating for interactive workflows.

5. **Auth Broken for gemini-cli** — [#26753](https://github.com/google-gemini/gemini-cli/issues/26753) *(closed)* — Critical P0 report: OAuth routing and quota sync failure on Fedora Asahi; account showed active Google AI Plus subscription but quota/auth desynced. 1 👍; closed, likely fixed by pending PR #28519.

6. **Quota limit reached after inactivity despite available quota** — [#26674](https://github.com/google-gemini/gemini-cli/issues/26674) *(closed)* — Spurious quota-limit errors resolved only by re-login. **5 👍** — highest community reaction this cycle; impacts perceived billing reliability.

7. **Model frequently creates tmp scripts in random spots** — [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) — When shell is disabled, the model scatters edit scripts across directories, creating workspace cleanup overhead. 3 comments; maintainer-locked.

8. **Gemini does not use skills and sub-agents enough** — [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Custom skills/subagents are ignored unless explicitly invoked, even when highly relevant. 6 comments; maintainer-locked.

9. **Auto Memory retrying low-signal sessions indefinitely** — [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Sessions deemed low-signal are never marked processed, surfacing repeatedly. Part of the broader Auto Memory reliability backlog (5 comments).

10. **API Error 400: "function call turn comes immediately after a user turn"** — [#26956](https://github.com/google-gemini/gemini-cli/issues/26956) *(closed)* — API strict role-alternation violated internally; intermittent during tool execution. 4 comments; closed — likely addressed by tool-call sequencing fixes.

## Key PR Progress
1. **fix: resolve SSRF vulnerability in web-fetch.ts via async DNS resolution** — [#28557](https://github.com/google-gemini/gemini-cli/pull/28557) — `isBlockedHost` only flagged literal IPs; hostnames resolving to internal ranges (e.g., `169.254.169.254`) bypassed validation. Async DNS resolution closes the gap.

2. **fix(core): prevent infinite auth loop by awaiting credential save and forcing consent** — [#28519](https://github.com/google-gemini/gemini-cli/pull/28519) — Addresses #28430 by correctly awaiting `oauth_creds.json` write — eliminates re-auth loops under race conditions.

3. **fix(core,cli): propagate InvalidStreamError details to UI for specific empty response guidance** — [#28566](https://github.com/google-gemini/gemini-cli/pull/28566) — Surfaces error `type` and `message` to CLI UI, enabling targeted suggestions like `/compress` for context exhaustion.

4. **fix(cli): skip diff hunk markers during @ processing** — [#28581](https://github.com/google-gemini/gemini-cli/pull/28581) — Prevents unified/combined diff hunk markers from triggering workspace-wide glob searches — removes two recursive globs per hunk, fixing heap growth on large diffs.

5. **fix(core): refresh MCP OAuth tokens with the stored client ID** — [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) — Fixes refresh failures for OAuth-discovered MCP servers; previously deleted stored credentials on failure and forced re-auth every run.

6. **fix(docker): upgrade sandbox Dockerfile to Node 22** — [#28603](https://github.com/google-gemini/gemini-cli/pull/28603) — Node 20 reached EOL 2026-04-30; sandbox runtime now on supported Node 22, reducing supply-chain risk.

7. **fix(cli): fall back to embedded macOS seatbelt profiles if missing** — [#28551](https://github.com/google-gemini/gemini-cli/pull/28551) — Resolves startup crash in sandbox mode (`-s`) on macOS/gMac when `.sb` profiles are absent from runfiles/bundle.

8. **fix(cli): load environment variables before resolving settings placeholders** — [#28597](https://github.com/google-gemini/gemini-cli/pull/28597) — Fixes load-order race where `.env` files were parsed after settings expansion — placeholder resolution now sees final env state.

9. **chore(docker): update Docker base image to node:24-slim** — [#28602](https://github.com/google-gemini/gemini-cli/pull/28602) — Modernizes builder and runtime images; also fixes runtime stage to copy generated CLI packages correctly.

10. **fix(core): keep auto model visible without preview access** — [#28592](https://github.com/google-gemini/gemini-cli/pull/28592) — Auto option in `/model` stays visible when dynamic config is enabled but user lacks preview access — Auto resolves to stable models when needed.

*Notable for process:* **Security PoC: workflow_run supply chain vulnerability** — [#28594](https://github.com/google-gemini/gemini-cli/pull/28594) — benign PoC demonstrating a CI/CD vulnerability; **closed immediately** per instructions, flagged for maintainer review.

## Feature Request Trends
- **Asynchronous / parallel subagent execution** — repeatedly requested by power users (API billing) to reduce wall-clock time on multi-agent workflows.
- **Task-aware compression and memory** — compress/summarize in context of task relevance; avoid compressing the active task; highlight future-task relevance.
- **AST-aware file reads and codebase mapping** — track progress toward precise method-bound reads and reduced token noise (EPIC #22745).
- **Auto Memory improvements** — deterministic redaction before model context, quarantine invalid patches, terminate retries on low-signal sessions.
- **Observability** — subagent trajectories visible and shareable via `/chat share` (#22598).

## Developer Pain Points
- **Auth and quota instability** — spurious quota-limit errors after inactivity and proxy-related auth crashes erode reliability confidence (5 👍 on #26674).
- **Subagent opacity and misbehavior** — hidden interruptions reported as success; subagents running without permission; browser agent ignoring `settings.json` overrides.
- **Interactive-process hangs** — command completion not detected; agent waits indefinitely on finished processes.
- **Spurious file scattering** — model writes temp scripts in random locations despite shell restriction, complicating workspace hygiene.
- **Tool-count limits** — 400 errors with >128 tools; desire for smarter tool-scoping based on enabled tools.
- **Manual cleanup burden** — users still spend significant effort cleaning up model-generated artifacts before committing.

---

*Digest generated for 2026-07-31. All links reference `google-gemini/gemini-cli`.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-31

## Today's Highlights
New release v1.0.77 lands with a browser-based OAuth login flow as the new default and improved autopilot sandbox behavior. Meanwhile, the community is actively reporting bugs around session stability, typing latency in long-running sessions, and unexpected AI credit consumption. Notably, a critical fix for oversized attachments wedging sessions was closed after nearly two months.

## Releases

### v1.0.77 (2026-07-30)
- **Unconditional autopilot approval now disables sandbox** for the current session when bypass is allowed — reduces friction for trusted automation
- **Ctrl+G prompt editing**: open your `$EDITOR` to edit `ask_user` freeform answers without closing the prompt
- **Browser-based (web) OAuth login** is now the default for `copilot login` on local interactive terminals. Device code remains the default for remote/headless terminals
- Use `--web-flow`/`--device-code` to force a mode, or pick one interactively via `/login`

### v1.0.77-0 (2026-07-30, pre-release)
- Same browser-based OAuth login changes, plus support for enforcement-related configuration (details truncated)

## Hot Issues

1. **[#3767](https://github.com/github/copilot-cli/issues/3767) [CLOSED] Oversized attachment permanently wedges session** — A 9.1 MB request vs. the 5 MB CAPI limit causes the session to become permanently stuck with no recovery path. Community pressed for 13 comments before the fix landed. High-impact bug for anyone working with large images or documents.

2. **[#4295](https://github.com/github/copilot-cli/issues/4295) AI Credits Near-Limit Warning** — Feature parity request with Visual Studio 2026's proactive AI credit warnings in chat sessions. Users want visibility before hitting limits, not after. 8 comments show strong interest in credit management.

3. **[#1381](https://github.com/github/copilot-cli/issues/1381) "Rewind is not available because you're not in a git repository"** — 10 👍 users want Rewind to work without git (e.g., with Jujutsu VCS). The VS Code Copilot works fine without git, so CLI parity is expected. Long-standing request since February.

4. **[#4310](https://github.com/github/copilot-cli/issues/4310) Bad default: engine falls back to 128K token budget** — When a routed model lacks capability limits, the engine silently applies a 128K token budget and compacts context against it. For 1M-token models this degrades performance without explanation. Important correctness issue for BYOK users.

5. **[#4308](https://github.com/github/copilot-cli/issues/4308) / [#4309](https://github.com/github/copilot-cli/issues/4309) Sessions continue consuming AI credits after tasks complete** — Two reports (nearly identical) describe sessions at ~97.8% credit usage with no visible tasks running. Users are concerned about silent credit drain. Both filed same day; likely a systemic issue worth investigating.

6. **[#4293](https://github.com/github/copilot-cli/issues/4293) Sub-agents with full tool access return empty** — The `task` tool returns nothing (no error, no output) when the agent type has full tools; restricted-tool agent types work fine. This is a confusing, silent failure that blocks advanced agent composition.

7. **[#4305](https://github.com/github/copilot-cli/issues/4305) [CLOSED] "Failed to convert JavaScript value 'Undefined' into rust type 'String'"** — Regression in 1.0.76 where any command triggers this Rust type conversion error. Quickly closed, suggesting fast maintainer response, but the regression itself was concerning.

8. **[#4299](https://github.com/github/copilot-cli/issues/4299) Increasing typing latency over long sessions** — Long sessions with background agents degrade to "ridiculous" typing latency, making the CLI unusable. 1 👍 and likely more silent sufferers. Performance issue that affects daily workflow.

9. **[#4297](https://github.com/github/copilot-cli/issues/4297) Copilot crashes on launch with log level set** — `copilot --log-level error` (or any value other than "all"/"default") crashes on startup. Blocks users who need diagnostic logging for other issues. Likely a straightforward parsing bug.

10. **[#4294](https://github.com/github/copilot-cli/issues/4294) Resumed session injects COLORTERM=truecolor** — Bug where resuming a session injects `COLORTERM=truecolor` even when unset, changing prompt highlight colors unexpectedly. Cosmetic but confusing; relates to session environment isolation.

## Key PR Progress
*No pull requests were updated in the last 24 hours.*

## Feature Request Trends

1. **AI credit management (2+ requests)** — Users want proactive warnings (#4295) and visibility into silent credit consumption (#4308, #4309). Expect tooling around credit budgets, limits, and per-session accounting.

2. **Authentication flexibility (2 requests)** — BYOK users need bearerToken auth (#4300) for compliance-restricted environments, and the new web OAuth flow (#release) shows GitHub is investing in auth UX. There's a clear trend toward enterprise/SSO-friendly auth.

3. **Sandbox configurability** — Requests for granular tool whitelisting in sandbox mode (#4298) alongside the release note about unconditional autopilot approval disabling sandbox suggests the community wants finer-grained control over what automation can do.

4. **VCS-agnostic features** — Rewind support for non-git VCS (#1381) continues to gain traction. As jj and other VCS tools grow, the CLI needs to stop hard-coding git assumptions.

5. **MCP tooling maturity** — MCP argument serialization bugs (#4301) and sub-agent tool access issues (#4293) show the community is pushing Copilot CLI as an MCP/agent orchestration platform, not just a chat tool.

## Developer Pain Points

1. **Silent failures are the worst failure mode** — Sub-agents returning empty (#4293), sessions draining credits invisibly (#4308), and missing log output make debugging nearly impossible. Developers consistently rank actionable error messages above feature polish.

2. **Session stability degrades over time** — Typing latency (#4299), wedged sessions (#3767), and freeze issues (#4306) all point to a pattern: sessions that run long accumulate state that slows or breaks the CLI.

3. **The git assumption is frustrating** — Rewind (#1381) and similar features assume git, which alienates users of modern or alternative VCS tools. This has been open for 5+ months with 10 👍.

4. **Configuration parsing fragility** — Crashes on log-level values (#4297) and JavaScript-to-Rust type errors (#4305) suggest validation gaps in configuration handling that erode trust in releases.

5. **Terminal-specific input handling bugs** — Paste issues in iTerm2 (#4296), arrow-key navigation in the sidebar (#4304), and mouse scroll problems in MobaXterm (#2841) indicate terminal emulator compatibility needs broader testing.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**2026-07-31**

---

## Today's Highlights

The Kimi Code CLI community is currently experiencing a surge in activity centered around two critical fronts: **stability under load** and **long-term developer experience**. New issues report widespread `429` (rate limit) errors and intermittent freezes, indicating growing pains from scaling usage. Concurrently, long-anticipated feature requests—such as a persistent Memory System (#1283)—are receiving fresh traction, signaling a shift in community expectations from "functional tool" to "core development companion."

---

## Releases

No new releases were published in the last 24 hours. The most recent version remains **1.49.0**.

---

## Hot Issues

*Picking the most impactful and community-engaged issues from the last 24 hours:*

### 1. [#2571 - LLM Overloaded! Can't use Kimi at all](https://github.com/MoonshotAI/kimi-cli/issues/2571)
- **Opened by:** andrew-sz (2026-07-30)
- **Severity:** **Critical** — A hard blocker preventing all usage via the Moderato platform with the Kimi K3 model. The `429` error suggests provider-side throttling rather than a local bug. With only 1 comment, community members are likely waiting for an official response regarding rate limit management and retry logic.

### 2. [#2570 - CLI intermittently freezes with spinning moon; correlated with browser tab state](https://github.com/MoonshotAI/kimi-cli/issues/2570)
- **Opened by:** XbackMK (2026-07-30)
- **Impact:** High — The freeze occurs on Windows 11 when the CLI is running alongside a browser tab. This hints at resource contention or event-loop blocking. The lack of comments suggests this is a newly reported, unconfirmed bug, but the unusual correlation makes it a priority for maintainers to investigate.

### 3. [#1283 - Feature Request: Memory System – Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **Opened by:** CatKang (2026-02-27, updated 2026-07-30)
- **Traction:** High — With 7 comments, this remains the most discussed open feature request. The community is actively lobbying for both AI-managed notes and user-defined instructions to persist. This issue is critical for developers who rely on CLI tools for daily, context-heavy workflows.

---

## Key PR Progress

*Moving beyond the single PR in the last 24 hours to highlight the most structurally important work in the project:*

### 4. [#2565 - fix(hooks): keep a strong reference to fire-and-forget hook triggers](https://github.com/MoonshotAI/kimi-cli/pull/2565)
- **Author:** LHMQ878
- **What:** Fixes #2564. Prevents `asyncio`'s `WeakSet` from garbage-collecting fire-and-forget hook tasks before completion.
- **Why it matters:** This addresses a subtle but severe robustness flaw. Hooks are integral to automation pipelines; losing their execution silently breaks user workflows. This PR ensures the `_hook_task` remains alive until its callback fires, significantly improving reliability.

---

## Feature Request Trends

Looking across the entire issue tracker, the most requested feature directions are:

- **Persistent Context and Memory:** The #1283 Memory System request dominates this trend. Developers want the CLI to remember project patterns and personal preferences automatically, reducing the need to re-prompt repetitively.
- **Scalability and Rate Management:** With the rise in `429` errors, users are implicitly requesting better backoff, queue management, or multi-provider failover capabilities.
- **Stability on Resource-Constrained Environments:** The browser-tab freeze report (#2570) signals a growing need for more efficient resource utilization on desktop operating systems like Windows.

---

## Developer Pain Points

The current data reveals two recurring frustrations:

1.  **Provider Reliability / Rate Limiting:** The `429` errors are the most immediate pain point. Developers are being blocked from their work entirely, not just slowed down. The lack of transparent retry logic or clear communication from the provider amplifies this frustration.
2.  **Flaky Execution in Background Tasks:** The hook-related fix (#2565) highlights that issues with asynchronous, fire-and-forget operations are a known thorn in the community's side. When background steps fail silently, it undermines trust in the automation pipeline, forcing developers to manually verify every step.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-31

## 1. Today's Highlights

OpenCode released v1.18.10 with automatic Modal model discovery and a batch of desktop UI polish, but the community is wrestling with a spike in server-overloaded errors on the GPT-5.6 Sol model (#39653). A series of quality-of-life PRs landed for the TUI, including hot-reloading for local plugins and fixes to title generation and tab scoping, though several are still open for review.

## 2. Releases

**v1.18.10** ([View Release](https://github.com/anomalyco/opencode/releases)) was published in the last 24 hours. The core update adds automatic discovery of available Modal models, contributed by @devennavani. On the desktop side, the release includes 5 improvements: preventing duplicate attachments, always showing the new session button, better toast notification stacking with improved dismissal and mobile layout, and refined tab hover/active states.

## 3. Hot Issues

1. **[#39653 — GPT-5.6 Sol, server overloaded errors](https://github.com/anomalyco/opencode/issues/39653)** · 16 comments · 👍 10 — Users are hitting repetitive server-overloaded errors exclusively on the Sol model while Pi and Codex work fine. High engagement suggests this may be a broader availability problem rather than a local config issue.

2. **[#37762 — Problems With Responses on Desktop](https://github.com/anomalyco/opencode/issues/37762)** · 8 comments — An Ollama user on Windows 11 (64 GB RAM, 4 GB VRAM) reports unreliable responses, illustrating the ongoing friction of local model setup even on capable hardware.

3. **[#39288 — Error after upgrade to 1.18.8](https://github.com/anomalyco/opencode/issues/39288)** · 6 comments — Desktop app fails with `AutoScroller plugin depends on Scroller plugin` after upgrading. A plugin dependency resolution regression seems to be the culprit, affecting users who simply updated.

4. **[#38655 — Can't switch between plan and build modes](https://github.com/anomalyco/opencode/issues/38655)** · 5 comments — After the latest update, users report being locked into build mode. This is a workflow-critical regression for anyone using plan/build separation.

5. **[#37628 — Windows 16-bit issue during global npm install](https://github.com/anomalyco/opencode/issues/37628)** · 5 comments — `opencode-ai` installed via `npm install -g` throws "not compatible with the version of Windows" errors on Node v26.5.0. A recurring packaging issue on Windows that continues to bite users.

6. **[#39491 — Plan mode can write and edit files via bash](https://github.com/anomalyco/opencode/issues/39491)** · 4 comments — Claude Sonnet 4.6 forgot it was in plan mode and used bash file redirection (`cat > file`) to bypass write-tool restrictions. Highlights a real security/sandbox gap in plan mode enforcement.

7. **[#27837 — Web UI session list empty on left panel](https://github.com/anomalyco/opencode/issues/27837)** · 4 comments · 👍 2 — A long-standing issue (open since May) where `opencode --web` shows an empty session list despite the API returning data. The root cause trace points to SSE event-driven frontend logic, but it remains unresolved.

8. **[#39790 — Session retries fixed-window usage quota errors until reset](https://github.com/anomalyco/opencode/issues/39790)** · 2 comments — When a provider returns a retryable HTTP 429 with a fixed reset time (e.g., 5-hour quota), OpenCode keeps retrying pointlessly until the window expires. A sensible fix is already in PR #39791.

9. **[#39704 — Desktop crashes with "Stale read from <Show>"](https://github.com/anomalyco/opencode/issues/39704)** · 2 comments · 👍 1 — Introduced in v1.18.10, switching or closing sessions crashes the desktop app with a stale read error. A regression in the latest release that needs immediate attention.

10. **[#39794 — `/api/command` and `/api/skill` return empty body after network recovery](https://github.com/anomalyco/opencode/issues/39794)** · 1 comment — After a network flap, the API intermittently returns `200` with an empty body for command/skill endpoints while `/config` works normally. Silent failures make this hard to detect client-side.

## 4. Key PR Progress

1. **[#39791 — Fix: stop retrying fixed-window usage quotas](https://github.com/anomalyco/opencode/pull/39791)** (Open) — Closes #39790. Detects 429 responses with known long-window quotas (5-hour, weekly, monthly) and stops retrying since another attempt can't succeed before reset. Directly addresses a frustrating user experience.

2. **[#39796 — Support Gemini thinking levels](https://github.com/anomalyco/opencode/pull/39796)** (Open) — Maps Google AI SDK `thinkingConfig` into native Gemini options, adding `thinkingBudget`, `includeThoughts`, and `thinkingLevel` support with public typing and request lowering.

3. **[#39795 — Spawn configured POSIX shell directly on Windows](https://github.com/anomalyco/opencode/pull/39795)** (Open) — Fixes the `bash` tool on Windows when a POSIX shell is configured in `opencode.json`. Instead of going through cmd.exe, it spawns the configured shell directly. Tagged `[needs:issue, needs:compliance]`.

4. **[#39764 — Add session request hook](https://github.com/anomalyco/opencode/pull/39764)** (Closed) — Exposes `session.request` on plugin boundaries, allowing plugins to mutate outgoing LLM URLs, headers, and request bodies after native serialization and auth. This is a significant extension point for plugin authors.

5. **[#39776 — Hot-reload local TUI plugins](https://github.com/anomalyco/opencode/pull/39776)** (Open) — Editing a local TUI plugin now takes effect immediately without restart. Crash containment ensures a broken plugin doesn't tank the whole app. Closes #39777.

6. **[#39734 — Contain Codex in OpenAI plugin](https://github.com/anomalyco/opencode/pull/39734)** (Closed) — Refactors ChatGPT/Codex routing and catalog behavior entirely into the OpenAI plugin, removing Codex-specific logic from the generic model resolver. Cleaner architecture, but needs careful regression testing.

7. **[#39788 — Honor GitHub Enterprise Server endpoints](https://github.com/anomalyco/opencode/pull/39788)** (Open) — Fixes GitHub Action clients to respect GHES REST and GraphQL endpoint variables, addressing a gap for enterprise users. Closes #39789.

8. **[#39786 — Register workspace and open project shortcuts in new layout](https://github.com/anomalyco/opencode/pull/39786)** (Open) — Restores `cmd+o` (project.open) and new worktree shortcuts that were lost when the new layout extracted page commands. Supersedes #37830.

9. **[#39747 — Make generated titles optional](https://github.com/anomalyco/opencode/pull/39747)** (Closed) — Sessions stay untitled (stored as NULL) until auto-generation succeeds or a user explicitly renames. Updates all surfaces (App, TUI, CLI/ACP, export, search) to omit `title` when absent.

10. **[#27554 — Local LAN provider discovery + auto-discover models](https://github.com/anomalyco/opencode/pull/27554)** (Open) — Adds mDNS-based discovery for local OpenAI-compatible servers in `/connect`. A long-running PR (since May) that would significantly streamline local model setup.

## 5. Feature Request Trends

- **Better local model support**: Issues like #37628 (Windows install), #37762 (Ollama), and #39316 (oMLX on LAN) show strong desire for smoother local/self-hosted model workflows. The LAN discovery PR (#27554) directly targets this.
- **Provider flexibility and transparency**: Requests include documenting `variants` config casing (#39256), adding LiteLLM as a built-in provider (#29935, closed but with 5 upvotes), and clearer handling of proxy/upstream errors.
- **Resilient error handling**: Multiple issues ask for faster failure on network errors (#39771), no retries on fixed-window quotas (#39790), and better recovery from network flaps (#39794).
- **Platform parity**: Windows-specific concerns recur — keyboard shortcuts (#38585), binary compatibility (#37628), shell handling (#39795), and GHES support (#39788).

## 6. Developer Pain Points

- **Windows remains the wild west**: From corrupted executables (#37566) and npm install failures (#37628) to POSIX shell spawning (#39795) and OS-reserved keybindings (#38585), Windows users face a disproportionate share of friction.
- **Silent failures and misleading states**: Empty API responses (#39794), stale read crashes (#39704), and sessions that appear successful but aren't (#37598) erode trust, especially in web/desktop modes.
- **Upgrade regressions**: Multiple issues trace back to recent upgrades — v1.18.8's plugin error (#39288), v1.18.10's stale read crash (#39704). Users are wary of updating without checking the issue tracker first.
- **Model-specific reliability**: The Sol overload errors (#39653) and Gemini 3.6-flash failures (#39293) suggest upstream provider instability is a recurring theme, made worse by retry policies that either give up too early or loop pointlessly.
- **Mode enforcement gaps**: Plan mode being bypassable via bash (#39491) and the inability to switch modes (#38655) highlight that mode handling needs both UI fixes and stronger sandboxing.

---
*Digest generated from [anomalyco/opencode](https://github.com/anomalyco/opencode) data for 2026-07-31.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest – 2026-07-31

## 1. Today's Highlights
The Pi project shows a strong push toward platform maturity this week, with PRs introducing a transport-neutral remote session wire protocol (#7344) and a runtime-neutral client package (#7348), laying groundwork for multi-session and remote workflows. Fixes landed for long-standing platform pain points: Linux clipboard support now covers Wayland (#7261), bold markdown is readable on light terminals (#7340), and an RPC stdout crash from bare `JSON.parse` is guarded (#7309). However, a significant cluster of open issues revolves around model-catalog refresh stalls causing hangs in `/scoped-models`, `/login`, and provider availability checks, indicating a systemic problem awaiting a unified fix.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues
1. **#7301 – Availability refresh permanently unrecoverable after a stall**  
   `ModelRuntime` coalesces availability rebuilds onto a single promise; if it never settles, `getAvailable()`/`refresh()` never recover, even after the cause clears. This is the root cause behind several other hangs.  
   [Issue link](https://github.com/earendil-works/pi/issues/7301)

2. **#7153 – `/scoped-models` does nothing for ~5 min while awaiting stalled catalog refresh**  
   The command synchronously blocks until a model-catalog refresh completes before rendering any UI. No loading state, no warning; just a blank editor. The community has linked this to #7301.  
   [Issue link](https://github.com/earendil-works/pi/issues/7153)

3. **#7027 – API-key login can hang after saving credential when catalog refresh stalls**  
   The credential is saved to `auth.json`, but the login dialog never returns. A fresh process shows the provider authorized, but the original TUI is stuck. Four 👍 indicates significant impact.  
   [Issue link](https://github.com/earendil-works/pi/issues/7027)

4. **#7194 – Full TUI re-render every 1s when a tool card scrolls outside the viewport**  
   In remote-sandbox setups where the PTY stream is forwarded, this causes massive overhead and flicker for the entire session transcript. A perf bug affecting non-interactive usage patterns.  
   [Issue link](https://github.com/earendil-works/pi/issues/7194)

5. **#7248 – Ctrl+V silently fails on Wayland (clipboard is X11-only)**  
   Root cause: `readClipboardText()` uses a native X11-only addon. The fix in #7261 landed the same day; this is a good example of a quick turn-around for a platform gap.  
   [Issue link](https://github.com/earendil-works/pi/issues/7248)

6. **#7047 – Gemini 3.x tool-call IDs stripped from function calls/responses**  
   `google-generative-ai` drops the `id` field from both `functionCall`/`functionResponse` parts during history replay. Gemini 3 requires the same ID echoed back; without it, multi-turn tool conversations break. Provider-specific and likely to surface in production quickly.  
   [Issue link](https://github.com/earendil-works/pi/issues/7047)

7. **#7334 – Referencing a skill causes Pi to treat the skill's install dir as the user's project dir**  
   When invoking a skill via slash command with `disable-model-invocation: true`, the model's working directory becomes the skill's install directory instead of the user's project. Dangerous for file edits; closed as a bug.  
   [Issue link](https://github.com/earendil-works/pi/issues/7334)

8. **#6300 – Windows: input line is redrawn on every keystroke (each char on a new line)**  
   A TUI regression on Windows 10 under both `cmd.exe` and Windows Terminal. The input line breaks on each character; user reports Node v22.x. Long-running Windows issue still open.  
   [Issue link](https://github.com/earendil-works/pi/issues/6300)

9. **#7161 – anthropic-messages never sends `x-client-request-id`**  
   Unlike the OpenAI paths, the Anthropic path omits this header. Gateways that key session affinity off it (e.g., CliProxyAPI round-robin) end up scattering a conversation across upstream accounts.  
   [Issue link](https://github.com/earendil-works/pi/issues/7161)

10. **#7319 – kimi-coding OAuth 401 stops the turn; 401 excluded from retry classifiers**  
    Intermittent `authentication_error` 401s from Kimi Code's OAuth-backed endpoint kill the turn; neither refresh-on-401 nor retry classifiers handle this status. Provider availability is therefore non-resilient.  
    [Issue link](https://github.com/earendil-works/pi/issues/7319)

## 4. Key PR Progress
1. **#7344 – feat(protocol): add remote session wire protocol**  
   Adds `@earendil-works/pi-protocol` with validated remote-session commands/events/snapshots, strict bounded CBOR encoding, and incremental framing. This is foundational for remote and multi-session use.  
   [PR link](https://github.com/earendil-works/pi/pull/7344)

2. **#7348 – feat(client): add runtime-neutral session client**  
   Introduces `@earendil-works/pi-client` with connection lifecycle as a discriminated union, observable listener failures, and multi-session handles. Complements #7344 to enable external session management.  
   [PR link](https://github.com/earendil-works/pi/pull/7348)

3. **#7261 – fix(coding-agent): read clipboard via wl-paste on Wayland, xclip/xsel on X11**  
   Closes #7248. Prefers CLI clipboard tools on Linux, mirroring the copy path. A clean fix for the Wayland gap.  
   [PR link](https://github.com/earendil-works/pi/pull/7261)

4. **#7309 – fix(server): guard JSON.parse in RPC stdout handler**  
   Closes #7300. Wraps the bare `JSON.parse` in the child-process `'data'` handler; any non-JSON line (a stray log or deprecation warning) would crash the RPC process. High-robustness fix for extension-backed subprocesses.  
   [PR link](https://github.com/earendil-works/pi/pull/7309)

5. **#7340 – fix: bold markdown text invisible on light terminal backgrounds**  
   Closes a rendering bug where ANSI bold-as-bright makes bold text white-on-white. Fix sets an explicit foreground when `theme.bold()` is not enough. Terminal theming polish.  
   [PR link](https://github.com/earendil-works/pi/pull/7340)

6. **#7231 – Markdown API**  
   Closes #6747. Implements the extension API for enhancing agent-message markdown without mutating LLM-bound content. Enables formula rendering and other best-effort display decoration.  
   [PR link](https://github.com/earendil-works/pi/pull/7231)

7. **#7325 – fix: custom-compaction through provider via new model runtime complete**  
   Addresses #7273. A compat `complete()` could not dispatch to a custom provider registered via `pi.registerProvider()`; fix routes those calls through the new model runtime.  
   [PR link](https://github.com/earendil-works/pi/pull/7325)

8. **#7346 – feat(ai): share runtime schemas with protocol**  
   Defines shared TypeBox schemas in `pi-ai`, reuses them in `pi-protocol`; aligns tool-call and stop-reason values. Removes schema drift between runtime and wire protocol.  
   [PR link](https://github.com/earendil-works/pi/pull/7346)

9. **#7061 – fix(openai-completions): handle array content and missing finish_reason**  
   Fixes `[object Object],[object Object]` stringification for Databricks models that stream content as typed arrays. Extracts only `type: "text"` blocks.  
   [PR link](https://github.com/earendil-works/pi/pull/7061)

10. **#7343 – feat(agent): add harness shutdown lifecycle**  
    Adds idempotent `AgentHarness.shutdown()`: rejects new work, aborts active turns/compaction, prevents provider startup after shutdown, without deleting the durable session. Important for embedders (e.g., screenpipe).  
    [PR link](https://github.com/earendil-works/pi/pull/7343)

## 5. Feature Request Trends
- **Remote/multi-session architecture**: #7344 (wire protocol), #7348 (client), #7216 (delta formatting), and the shutdown lifecycle in #7343 all point toward external session control and sandbox integration. Several issues are submitted by companies embedding Pi in remote environments.
- **Provider flexibility**: Requests for configurable OAuth-token prefixes (#5871), `x-client-request-id` on Anthropic (#7161), and handling provider-specific response formats (#7061, #7216) show a desire for Pi to behave correctly across more heterogeneous gateway and model behavior.
- **Developer-ergonomics tooling**: A `runtime` field in `version` (#7244), an installation section in the README (#6907), and context-window size options (#5064) are small but frequently requested quality-of-life improvements.
- **Stateful, server-side compaction**: #7317 requests support for OpenAI's `previous_response_id` and server-side compaction, reducing client-side history replay for long tool-heavy runs.

## 6. Developer Pain Points
- **Model-catalog refresh stalls cause unrecoverable hangs**: The cluster around #7153, #7027, and #7301 is the single most visible pain point this week. Several commands await a stalled refresh with no timeout, no UI feedback, and a promise chain that never recovers. The community is actively linking these as one systemic issue.
- **Provider-specific behavior breaks multi-turn tool loops**: Gemini 3 dropping tool-call IDs (#7047) and Kimi's 401-without-retry (#7319) both break turn continuity in ways that are hard to debug from the TUI.
- **TUI rendering reliability on non-Linux platforms**: Windows input re-draw (#6300), Devanagari text breaking the harness (#6124), and iTerm2 rendering issues (#6784) indicate the TUI still has platform-specific rendering gaps.
- **Clipboard and terminal compatibility gaps**: Wayland clipboard (#7248) and bold-as-bright rendering (#7340) are fixed this week, but they highlight that terminal-behavior edge cases keep producing bugs.
- **Background/parallel execution**: A request for OpenAI's `background: true` mode (#7339) and the 1s full re-render bug (#7194) show that users increasingly need Pi to be less obtrusive and more efficient in long-running or remote sessions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-31

## Today's Highlights

The project saw a burst of activity around the **Anthropic content converter** (issues #8159–#8162) with three validation gaps reported — orphaned tool-call stripping, unsanitized IDs, and out-of-order `tool_result` blocks. On the positive side, two substantial PRs landed to improve the SDK: **tool-call outcome tracking** (#8180) and **tool-call terminal telemetry normalization** (#8176). CI stability remains the top operational concern, with 5+ new E2E test failures auto-filed by the bot, several already carrying approved autofix labels.

## Releases

**v0.21.1-nightly.20260731.702932cc7** — Bug fixes only:
- `fix(ci)`: add default bash shell to container jobs in qwen-triage (#7838)
- `fix(web-shell)`: pre-rendering fix (partial note — description truncated in source data)

🔗 [Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.1-nightly.20260731.702932cc7)

## Hot Issues

1. **Startup banner missing top lines on first paint** ([#8124](https://github.com/QwenLM/qwen-code/issues/8124)) — Intermittent TUI rendering bug where the ASCII banner loses ~3 lines on first `stdout` write, correlating with pending provider updates. Nine comments but no fix yet; labeled `welcome-pr`.

2. **Provider warning sanitizer leaks passwords containing `@`** ([#8136](https://github.com/QwenLM/qwen-code/issues/8136)) — Two bugs in `sanitizeProviderWarning`: messages with ports get truncated, and URLs with `@` in userinfo can leak credentials into `/status` payloads. Security relevant, actively discussed.

3. **Anthropic converter: stale thinking signatures after tool_use removal** ([#8162](https://github.com/QwenLM/qwen-code/issues/8162)) — After history-trimming removes a tool call, orphaned `thinking`/`redacted_thinking` blocks remain. `welcome-pr` tagged, with 3 related sibling issues (#8159–#8161) filed this cycle.

4. **Agent Team: teammate messages queue during multi-tool-call turns** ([#8172](https://github.com/QwenLM/qwen-code/issues/8172)) — Team messages wait until `Idle`, which on long turns means potentially minutes of delay. P2 core bug, three comments confirming the behavior.

5. **Worktree settings.json writes to project root** ([#8138](https://github.com/QwenLM/qwen-code/issues/8138)) — In git worktrees, settings writes go to project-root `.qwen/settings.json` instead of the worktree's own. P2 config bug, labeled `welcome-pr`.

6. **0.21.1 crash loop (3 crashes)** ([#7972](https://github.com/QwenLM/qwen-code/issues/7972)) — Windows user reports triple crash on v0.21.1. Still `need-information`; a related PR (#8088) adds an `uncaughtException` handler and error visibility to diagnose these VP-mode crashes.

7. **Desktop app incompatible with LMStudio on Windows** ([#8146](https://github.com/QwenLM/qwen-code/issues/8146)) — Desktop app shows activity but never sends anything to the local LMStudio API, even after 5 minutes. P2 integration bug with Windows-specific scope.

8. **Desktop Web Shell can't find project files via `@`** ([#8123](https://github.com/QwenLM/qwen-code/issues/8123)) — `KuaiShouOrderService.java` exists in the project but the `@` reference search can't find it. Conflicting with the upcoming desktop-app-via-Web-Shell proposal (#8092).

9. **Windows standalone installer SHA-256 failure** ([#7118](https://github.com/QwenLM/qwen-code/issues/7118)) — Installer fails when `powershell.exe` can't resolve `Get-FileHash`; still open after 2 weeks, 2 👍, tagged `welcome-pr`.

10. **E2E CI failures stack up (permission-control)** ([#8133](https://github.com/QwenLM/qwen-code/issues/8133), [#8153](https://github.com/QwenLM/qwen-code/issues/8153)) — Multiple auto-filed CI issues on `permission-control.test.ts` (auto-edit mode) and `system-control.test.ts`. Several have `autofix/in-progress` and `autofix/approved` labels. PR #8156 scopes the flaky assertion to write/edit tools.

## Key PR Progress

1. **feat(telemetry): Track tool execution outcomes** ([#8180](https://github.com/QwenLM/qwen-code/pull/8180)) — Adds `executionStatus` alongside terminal status to record whether `execute()` was entered/succeeded. `review/self-reported`.

2. **feat(core): Normalize tool-call terminal telemetry** ([#8176](https://github.com/QwenLM/qwen-code/pull/8176)) — One terminal contract for outcomes before fan-out to consumers; soft errors become `unknown`, `success` field derived. Pairs with #8180 for consistent tool telemetry.

3. **fix(test): scope auto-edit canUseTool assertion** ([#8156](https://github.com/QwenLM/qwen-code/pull/8156)) — Stabilizes flaky E2E; records which tools the callback invoked and asserts no write/edit tool was gated. Directly addresses #8153.

4. **feat(core): GenAI time-to-first-chunk tracing** ([#8150](https://github.com/QwenLM/qwen-code/pull/8150)) — Implements OpenTelemetry GenAI v1.41 attributes: `gen_ai.request.stream=true`, `gen_ai.response.time_to_first_chunk` in seconds for streaming spans. Follows the latency work in #7982.

5. **fix(cli): prevent silent VP-mode crash** ([#8088](https://github.com/QwenLM/qwen-code/pull/8088)) — Adds `uncaughtException` handler and error visibility for VP (alternate-screen) mode. Doesn't claim to fix crashes in #7971/#7972 but ensures errors surface next time.

6. **feat(channels): isolate daemon adapter state by workspace** ([#8178](https://github.com/QwenLM/qwen-code/pull/8178)) — Stable per-workspace state directories for daemon-managed channels; sanitized prefix + hash to prevent path traversal. Follows the workspace-isolation theme of #8056.

7. **fix(triage): render verify report as sanitized markdown** ([#8147](https://github.com/QwenLM/qwen-code/pull/8147)) — Replaces escaped `<pre>` dumps with readable bilingual markdown in `/verify` comments. Companion to the capture helper in #8114.

8. **feat(core): current-PR Autofix watcher** ([#8121](https://github.com/QwenLM/qwen-code/pull/8121)) — Opt-in `/autofix` watcher for the PR of the current branch: status (CI/review state, mode, counters) plus `/autofix on` for propose-only / auto-commit / auto-push. Extends background automation (#4362 ⇛ #8121).

9. **feat(cli): adopt Goal v3 in interactive TUI** ([#8005](https://github.com/QwenLM/qwen-code/pull/8005)) — Adds `/goal` lifecycle commands, persistent lifecycle cards, resume/branch recovery, and a two-lane input queue so messages queue while Goal continues.

10. **feat(web-shell): simplify plugin page action button labels** ([#8174](https://github.com/QwenLM/qwen-code/pull/8174)) — Shortens "Add Extension" → "Add", "Add MCP Server" → "Add", etc. (EN + ZH). Simple UI cleanup; closed PR #8127 similarly constrained session-details submenus for narrow layouts.

## Feature Request Trends

1. **Workspace/multi-tenant isolation**: Requests to isolate managed memory by workspace (#8056), isolate daemon adapter state (#8178), and worktree-scoped settings (#8138) show growing demand for reliable per-workspace state separation.

2. **Trustworthy agent runtime**: Proposal #8102 advocates keeping the LM *outside* the trust boundary with deterministic action constraint/auth/observe/evaluate for the runtime. Related: "Auto Fix CI & Address Review Comments" workflow (#4362) and the `/autofix` watcher (#8121) push for autonomous but *supervised* CI intervention.

3. **Observability and monitoring**: Subagent status exposure (#8128), time-to-first-chunk tracing (#8150), and tool-execution outcomes telemetry (#8180/#8176) confirm the community wants deeper, standardized instrumentation — especially for multi-agent and daemon scenarios.

4. **Lower-maintenance desktop via Web Shell**: Issue #8092 proposes re-using Web Shell instead of a separate desktop UI/product implementation. Given desktop issues #8146/#8123, this direction may reduce maintenance surface.

5. **Configurability of internal agents**: Request to make memory dream-agent max turns configurable (#8168) — users want explicit control over internal subagent behavior.

## Developer Pain Points

1. **VP-mode / alternate-screen rendering and crashes**: Multiple reports (#7972, #8113, #8124) show TUI rendering still fragile — cursor overflow, banner truncation, silent crashes. PR #8088 provides error visibility, but crash root cause is still unknown; Windows is disproportionately affected.

2. **Windows portability lag**: Installer failure (#7118) + desktop-LMStudio incompatibility (#8146) + Windows-specific CI suite portability PR (#8050) show Windows remains a second-class citizen.

3. **Desktop file/conversation context confusion**: Desktop client can't find files via `@` (#8123); TUI session-file tracking (which session created which files, #7966) unresolved for a week with no maintainer response.

4. **E2E flakiness eroding trust in merge gates**: Frequent auto-filed CI issues (permission-control, system-control, acp-cron) with bot-tracked triage. While the autofix pipeline handles them, the underlying flakiness is a recurring source of noise and blocking merges.

5. **Encoding/escaping bugs in transport layers**: The sanitizer password leak (#8136) and markdown-vs-pre rendering (#8147) both stem from fragile string handling at transport boundaries — an emerging pattern worth a targeted review of all output-serialization paths.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-31

*Note: The project has been rebranded as **Codewhale** (Shannon Labs). The legacy `deepseek-tui` npm package is deprecated.*

---

## 1. Today's Highlights

Codewhale v0.9.2 was finalized with a release PR covering fixes across permission truth, Fleet setup/persistence, compaction errors, sub-agent supervision, and provider credential UX — while the deprecated `deepseek-tui` npm package officially received its last release. The project is now heavily focused on the v0.9.3 refactor umbrella: reducing the 771k-line Rust monolith (87% in `codewhale-tui`), converging dual ToolRegistry systems, and splitting the 14,878-line `main.rs` into a thin CLI dispatcher. Community activity is dominated by large-scale architecture issues (#3306, #3948, #3950) and a new discussion on compile times (#4991) triggered by the monolith's size.

## 2. Releases

**v0.9.2** — Codewhale v0.9.2 is the final release under the `deepseek-tui` npm package name. The `codewhale` command, npm package, and release assets remain lowercase technical identifiers. Users on v0.8.x legacy `deepseek`/`d` commands must migrate to `codewhale`. No further releases for the legacy npm package.

## 3. Hot Issues

1. **[#4991 — Compilation times and the TUI crate monolith](https://github.com/Hmbown/CodeWhale/issues/4991)** — *New, 1 comment.* Community member aboimpinto opens a discussion about long compile waits while working on the slash command refactor. Directly validates the pain described in the v0.9.3 umbrella refactor issue. Expect this to drive urgency for the split.

2. **[#3306 — Refactor: converge runtime ownership and ship one executable](https://github.com/Hmbown/CodeWhale/issues/3306)** — *Open, 4 comments.* The v0.9.3 umbrella: 18 Rust packages, ~771k lines, 87% in `codewhale-tui`. Parallel runtime/tool/config/session paths are duplicated. The community largely agrees the crate count isn't the problem — duplication is.

3. **[#4989 — Subagent steering: message vs follow-up wake, canonical targets, selective context forks](https://github.com/Hmbown/CodeWhale/issues/4989)** — *Closed (scoped), 1 comment.* Defines the v0.9.3 scope for #4022: explicit, durable, context-efficient subagent steering without multiplying the tool surface. Closed because it was split into layered work.

4. **[#4988 — Compaction fails before context or quota exhaustion](https://github.com/Hmbown/CodeWhale/issues/4988)** — *Closed, 1 comment.* A dogfood compaction failure with no clear trigger. The issue calls for persisting trigger and failure receipts to distinguish context headroom vs provider quota vs malformed transcript vs cancellation causes.

5. **[#4987 — Provider credentials: one home-scoped store and shared narrow-terminal modal](https://github.com/Hmbown/CodeWhale/issues/4987)** — *Closed, 1 comment.* Fresh-terminal launches can make saved provider keys appear missing due to `~/.codewhale/secrets/secrets.json` vs `CODEWHALE_HOME` divergence. The UI doesn't identify the distinction. Aligns with #2369 (Cygwin/Windows path fragmentation).

6. **[#4978 — Anthropic API error: 'type' must be in ["enabled", "disabled", "auto"]](https://github.com/Hmbown/CodeWhale/issues/4978)** — *Open, 1 comment.* Reported by w1w218: with `providers.openmodel` (Anthropic-compatible), frequent HTTP 400 errors with retry intermittently succeeding. Likely a provider-specific capability/parameter mismatch.

7. **[#4930 — Enter during foreground shell should detach it before steering](https://github.com/Hmbown/CodeWhale/issues/4930)** — *Closed, 1 comment.* When Bash blocks (e.g., `sleep 30`), typing a message and hitting Enter fails confusingly. The fix should move the blocking wait to `/jobs` before enqueueing a steer. Closed by PR #4979.

8. **[#4949 — Chinese translation of "Constitution"](https://github.com/Hmbown/CodeWhale/issues/4949)** — *Open, 4 comments.* Community discussion on whether "宪法" (constitution) vs "协作准则" (collaboration norms) is the right translation. The author reverted to "宪法" citing foundational authority, but concerns about political sensitivity in Chinese contexts remain unresolved.

9. **[#4807 — Ambient ocean: jellyfish reads as a blob-on-a-string](https://github.com/Hmbown/CodeWhale/issues/4807)** — *Open, 2 comments.* Dogfood evidence: the ambient jellyfish renders as `JELLY_BELL = "o*"` plus a single width-1 tentacle. Reads as a parenthetical blob, not a jellyfish. Needs a real silhouette.

10. **[#2369 — Config Paths Fragmented Across OS and Cygwin (Plus Silent Migration Bug)](https://github.com/Hmbown/CodeWhale/issues/2369)** — *Open, 7 comments.* Windows/Cygwin config resolution diverges through different home-directory rules; legacy migration can silently fail. Long-running issue with active community engagement.

## 4. Key PR Progress

1. **[#4982 — release: finalize Codewhale v0.9.2](https://github.com/Hmbown/CodeWhale/pull/4982)** — *Closed.* Finishes the paused v0.9.2 handoff: permission truth, Fleet setup/persistence, reasoning inspection, compaction errors, sub-agent supervision/steering, sandbox truth, provider credential UX, and ambient silhouettes. Extracts sub-agent worktree isolation and removes superseded code.

2. **[#4992 — Layer 5.2: User command dispatch precedence, shadowing, and error semantics](https://github.com/Hmbown/CodeWhale/pull/4992)** — *Open.* Adds Gherkin acceptance coverage: user command shadows built-in canonical name/alias, fallback to built-in, and invalid user command error semantics. Part of the command-boundary refactor epic (#2870).

3. **[#4979 — fix(tui): detach foreground shell before steering](https://github.com/Hmbown/CodeWhale/pull/4979)** — *Closed.* Closes #4930. Requests blocking Bash waits move to `/jobs` before enqueueing a same-turn steer. Keeps busy-Enter queue behavior intact and distinguishes true foreground waits.

4. **[#4990 — fix(devcontainer): support Windows development](https://github.com/Hmbown/CodeWhale/pull/4990)** — *Open.* Uses a dedicated dev image with Rust toolchain, rustfmt, pkg-config, and DBus headers. Replaces host HOME bind mount with named volumes to avoid invalid Windows HOME expansion.

5. **[#4980 — docs(permissions): publish and lock authorization order](https://github.com/Hmbown/CodeWhale/pull/4980)** — *Closed.* Publishes the implemented authorization order and locks precedence with engine-level contract tests. Documents how tool admission, hooks, registered requirements, typed permission rules, auto-review, repository law, approval, and sandbox enforcement compose.

6. **[#4985 — feat(runtime-api): scope task listing by workspace](https://github.com/Hmbown/CodeWhale/pull/4985)** — *Open.* Adds optional `workspace` filter to `GET /v1/tasks` and includes workspace path in `TaskSummary` for GUI clients. Includes a regression test covering filtering before limit truncation.

7. **[#4984 — fix runtime config persistence and workspace task scoping](https://github.com/Hmbown/CodeWhale/pull/4984)** — *Closed.* Rebases GUI-facing TUI runtime API work onto upstream `main` and keeps provider persistence fix aligned with current tests.

8. **[#4981 — feat(tui): LaTeX environments, text, and command support for math rendering](https://github.com/Hmbown/CodeWhale/pull/4981)** — *Open.* Extends LaTeX math rendering with environment-block support, common inline commands, accent commands, command-aware subscripts/superscripts, and case-insensitive matching.

9. **[#4977 — fix(tui): let AltGr-typed "/" reach the composer instead of opening help (#4723)](https://github.com/Hmbown/CodeWhale/pull/4977)** — *Open.* On Windows, AltGr is reported as `Ctrl+Alt`. Brazilian ABNT2 layout `/` is `AltGr+Q` → matched global `Ctrl-/` help chord. Also fixes AZERTY layouts. Opens help overlay on every slash typo.

10. **[#4983 — test(tui): remove skills viewport ordering assumption](https://github.com/Hmbown/CodeWhale/pull/4983)** — *Closed.* Removes the synthetic owned-skill row from the Skills Manager PTY test. Waits for owned-scan receipt instead of assuming a named row is inside the bounded viewport.

## 5. Feature Request Trends

- **Single-binary distribution (#3306, #4747, #4174, #3948)**: A dominant theme. Community and maintainers want one executable with library-backed TUI and in-process dispatch, eliminating the parallel runtime/tool/config paths and dual ToolRegistry systems.

- **Context diet / token reduction (#4704, #4710, #4709, #4707)**: A family of issues targeting every model-facing byte: deduplicating project/environment/route/locale/skill context, collapsing redundant stable system-prompt layers (~29 KB bundled constants), and adding cross-model ablation gates.

- **Desktop app experience (#4986)**: A new community request for a first-class desktop app (Codex Desktop-like) for users who don't want to manage terminals, working directories, and background processes.

- **Subagent steering and control surfaces (#4022, #4989)**: Making subagent status, expand/collapse, cancellation, and steering explicit and durable — not trapped inside the TUI.

- **Provider credential UX (#4987, #2369)**: One home-scoped secrets store with clear UI identification, fixing Windows/Cygwin path fragmentation and the silent migration bug.

- **Dev experience improvements (#4990, #4991)**: Windows devcontainer support and resolving compile-time pain from the monolith crate.

## 6. Developer Pain Points

- **Compile times (#4991)**: The 771k-line `codewhale-tui` crate with 14,878-line `main.rs` makes every iteration slow. This is now a community-discussed pain point, not just a maintainer concern.

- **Config/credential fragmentation (#2369, #4987)**: Path divergence across OS/Cygwin and `CODEWHALE_HOME` vs default secrets store causes "missing" keys and silent migration failures — a recurring reliability annoyance.

- **Windows-specific input handling (#4977)**: AltGr as `Ctrl+Alt` breaking slash typing in international layouts shows Windows keyboard compatibility is still fragile.

- **Ambient/visual polish (#4807)**: Dogfooding reveals the ambient ocean's jellyfish renders poorly ("blob-on-a-string"). Minor but indicative of the polish bar for the "visual, motion-heavy" product.

- **Context/compaction failures (#4988, #4394)**: Compaction failures without a clear trigger (context vs quota vs malformed transcript) make debugging difficult. The community wants structured survival contracts and failure receipts.

- **API/providers (#4978)**: Anthropic-compatible providers intermittently rejecting requests with `'type' must be in ["enabled", "disabled", "auto"]` — flaky third-party integrations remain a friction point for open-model users.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*