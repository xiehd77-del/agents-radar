# AI CLI Tools Community Digest 2026-08-22

> Generated: 2026-08-22 01:17 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Comparison Report — 2026-08-22

## 1. Ecosystem Overview

The AI CLI ecosystem remains in an intense, high-velocity iteration phase. Today's activity shows a clear maturity trajectory: established tools (Claude Code, Codex) are hardening their architectures with safety-policy propagation, remote-execution controls, and granular sandbox approvals, while emerging tools (Pi, CodeWhale) are shipping foundational reliability fixes around context management, session restoration, and process supervision. A dominant cross-cutting theme—**process reliability and user control**—is emerging, with pervasive issues around sub-agent hangs, silent failures, invisible resource consumption, and configuration drift. Notably, no tool has achieved "stability plateau" status; even the most mature platforms are shipping multiple patches per week and facing regression clusters from recent releases.

## 2. Activity Comparison

| Tool | Hot Issues (24h) | Key PRs (24h) | Release Status | Notable Signals |
|---|---|---|---|---|
| **Claude Code** | 10 tracked (1 critical, 133 comments) | 0 updated (pause) | v2.1.239 (stable) | Cost-premium transparency, safety false-positive cluster |
| **OpenAI Codex** | 10 tracked (Windows + Android crisis) | ~10 significant merged/active | 6 Rust alphas in 24h | Guardian propagation, Bedrock setup, stop-hooks |
| **Gemini CLI** | 10 tracked (2 P1 sub-agent bugs) | 10 active (PR-gen pipeline wave) | v0.56.0 nightly | macOS sandbox hardening, deterministic redaction |
| **Copilot CLI** | 10 tracked (regression cluster) | 0 updated (stabilization) | v1.0.81-7 | Session recovery, BYOK model demand |
| **Kimi CLI** | 1 new (resource leak) | 1 doc PR | No release | Quiet; security documentation focus |
| **OpenCode** | 10 tracked (finish=unknown loop) | 10 active (regression fixes) | v1.18.20/21 (patch) | Network resilience, usage history API |
| **Pi** | 10 tracked (compaction overflow) | 6 active/merged | No release | Auto-compaction failure, provider compat quirks |
| **Qwen Code** | 10 tracked (CVE audit blocker) | ~10 active (review + CI hardening) | v0.21.14 nightly | Review-loop quality, CVE audit, MCP Windows |
| **CodeWhale** | 10 tracked (supervised ops epics) | ~10 active (crate decomposition) | No release | Headless operation, multimodal vision request |
| **DeepSeek TUI** | 10 tracked (supervised ops epics) | ~10 active (crate decomposition) | No release | Rust refactor, `.gitignore` equivalent privacy |

## 3. Shared Feature Directions

**A. Session & Lifecycle Management (Universal)**
- **Crash/session restoration**: Copilot CLI shipped it (v1.0.81-7); Codex has an open PR (#40038) for suspend/resume; OpenCode demands unarchive/restore (#24153); Qwen Code wants unanswered HITL questions on resume (#9664).
- **Branching/portability**: Copilot CLI (#1313), OpenCode (session archiving), Claude Code (account-switch preservation #48511).

**B. Sub-Agent Reliability & Visibility (Critical)**
- **Hangs/Misreporting**: Gemini CLI (P1s #22323, #21409), Kimi (invisible quota burn #2615), CodeWhale (silent failures #5529, #5528), OpenCode (abrupt stops #38749).
- **Trajectory/debugging transparency**: Gemini CLI (#22598, #21763) — share sub-agent trajectories; Qwen Code (#9602) — clearer completion states.

**C. Model Flexibility & Multiple Provider Support (Accelerating)**
- **BYOK/multi-model switching**: Copilot CLI (#3282, #3709 — top upvoted), Codex (Bedrock PR #40007), Pi (provider compatibility quirks), Gemini CLI (tool-scoping #24246).
- **Provider-specific quirks**: Pi (Grok Build reasoning effort, Gemini MINIMAL thinking rejection, OpenRouter caching); Codex (Bedrock subagent/MCP failures); OpenCode (LiteLLM injection breaking Bedrock).

**D. Granular Permission & Safety Policies (Security Focus)**
- **Sandbox approvals**: Codex (PR #40024 granular approvals), Copilot CLI (sandbox disable mismatch #4521), Claude Code (cyber-safeguard false positives #84352).
- **Configurable permissions**: Qwen Code (#9694 plan-mode allowlist), Pi (`--exclude-extensions` #8433).

**E. Context & Memory Management**
- **Compaction control**: Pi (#7553 configurable thinking level, #8133 per-model settings); Gemini CLI (#26522 retry logic); OpenCode (token overhead MCP lazy-loading).
- **Privacy/redaction**: Gemini CLI (#26525 deterministic redaction); CodeWhale (`.codewhaleignore`); Claude Code (attribution opt-out #77830).

**F. Headless/Supervised Operation (Emerging Cluster)**
- **External automation**: CodeWhale's M-Maciej series (control sockets, lifecycle outbox, `/relaunch`); OpenCode's API-key usage endpoint (#43983); Qwen Code's cross-session UDS (#9576).

## 4. Differentiation Analysis

| Tool | Strategic Focus | Target User | Notable Technical Approach |
|---|---|---|---|
| **Claude Code** | Enterprise compliance, cost transparency | Compliance-heavy orgs | Data-residency premium awareness, fullscreen renderer expansion |
| **OpenAI Codex** | Remote execution hardening, policy architecture | Developers needing remote/Android control | Fast Rust iteration (6 alphas/day), Guardian review propagation |
| **Gemini CLI** | Agent autonomy (sub-agents, memory) | Power users leveraging Google ecosystem | PR-generation evaluation pipelines, Seatbelt hardening |
| **Copilot CLI** | GitHub workflow integration, model flexibility | GitHub-centric developers | BYOK expansion, session recovery |
| **OpenCode** | Network resilience, provider abstraction | Early adopter, multi-provider users | Finish-reason handling, resumable task IDs |
| **Pi** | TUI-first, multi-model provider adapters | TUI purists, self-hosted infra | Proactive context management, extension isolation |
| **Qwen Code** | CI/CD + review-loop automation | DevOps-centric, enterprise | Review agents/subagents, Aone Code integration |
| **CodeWhale** | Headless/multiplexer workflows | Automation-driven, CI-based | Rust decomposition, control sockets, webhook events |
| **Kimi CLI** | Plugin ecosystem, lightweight | Plugin-focused users | Security documentation, trust boundaries |

## 5. Community Momentum & Maturity

**Rapidly Iterating (High Momentum):**
- **OpenAI Codex**: six alphas in 24h, ~20 PRs merged — highest velocity, but Windows Remote Control cluster signals regression risk.
- **OpenCode**: two patches in 24h with aggressive fix-and-iterate approach, though v1.18.21 introduced a new regression itself.
- **CodeWhale**: intense architectural refactoring (crate decomposition epic) plus a significant new "supervised operations" feature stack.

**Stabilization Phase:**
- **Copilot CLI**: v1.0.81-7 focus on regressions; no active PRs suggest a hardening pause.
- **Claude Code**: stable release cadence, but no PR activity in the last 24h; issue tracker is dominated by long-running problems (133-comment cyber-safeguard saga).

**Quiet but Consistent:**
- **Kimi CLI**: minimal visibility; one new issue (high-severity cost leak) and one document PR.
- **Pi**: no releases, but consistent PR activity fixing provider compat and session-corruption bugs.

**Deep Community Investment:**
- **Gemini CLI**: a full PR-generation evaluation pipeline (8+ PRs from joneba-google) suggests a long-term investment in automated bug-fixing benchmarks.
- **Qwen Code**: strong security focus (CVE audit blocker, PAT isolation, code-execution-as-user debates) shows enterprise-grade concerns.

## 6. Trend Signals

**1. "Process transparency" is the new battleground.** Developers are increasingly designing unattended sessions (CI, multiplexers, background agents) and are demanding either lifecycle events to detect problems (CodeWhale's outbox, OpenCode's usage API) or clear visibility into sub-agent trajectories (Gemini, Kimi). Tools that render execution as a black box will lose trust.

**2. Over-sensitive safety filters are an ecosystem-wide risk.** Claude Code's Fable 5 AUP false-positive cluster (22+ issues triggered by frustrated exclamations) and its long-running cyber-safeguard saga (#84352) reveal that over-triggering guardrails on authorized work is a primary trust-erosion driver. The community is polarizing: safety was once unquestioned, now it's seen as a blocker for legitimate workflows.

**3. Multi-provider usage is normalizing—and so is the pain.** Bedrock, Vertex, LiteLLM, OpenRouter, and local proxies are all showing up in production. Providers' API quirks (Gemini's MINIMAL thinking rejection, xAI's reasoning-effort rejection, OpenRouter's caching gaps) are fragmenting the compatibility surface. Success will depend on either standardized provider adapters or AI-driven compatibility detection.

**4. Model tool-selection behavior is going under the microscope.** Claude Code's `bashFirst` hardcoding (#88041) and default-bash-over-builtins behavior (#19649) are being flagged as correctness and auditability issues. Users want structured tools (Read/Grep/Edit) over opaque shell commands; expect prompt/tool-selection improvements to be a major iteration target.

**5. Context management is breaking at scale.** Pi's auto-compaction failure (#6879 — sessions reaching 373k tokens before overflow) and Gemini's context-rot complaints signal that "agentic sessions" are genuinely exceeding model window limits. Proactive, per-turn compaction plus user-configurable thresholds will be differentiators.

**6. Windows remains an afterthought—and a recurring crisis.** Seven out of nine tools have Windows-specific blocking issues: desktop crashes (Claude Code #42776), Remote Control failures (Codex), visible PowerShell consoles (Copilot CLI #4549), IME breakage (Qwen #5966), sandbox corruption (Codex #35718). Developers on Windows are a silent, underserved majority that continues to pay the "cross-platform tax."

**7. MCP interoperability is the new integration layer—and the new source of bugs.** BigInt serialization failures (Copilot CLI #4211), CustomResult decoding failures (Codex #29002), STDIO transport disconnects (Qwen #9693), and SDK version jumps (CodeWhale's rmcp 2→3) are all evidence that the MCP ecosystem is still maturing — and that its reliability directly impacts tool adoption.

---

**Bottom line for decision-makers:** prioritize tools with active provider-abstraction work (Codex, OpenCode), visible sub-agent execution (Gemini's trajectory work, CodeWhale's event outbox), and Windows-focused fixes. For teams running unattended or CI-driven automation, CodeWhale's supervised-operation stack and OpenCode's resumable failure handling are the most forward-looking signals this week.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-08-22 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

### 1. Skill-Creator Reliability Fixes (PR #1298) — **Highest Attention**
- **Skill:** Fixes to `run_eval.py` and related `skill-creator` infrastructure, addressing a critical bug where evaluation always reports 0% recall.
- **Discussion:** References issue #556 with 10+ independent reproductions; community consensus calls the skill-creator optimization loop "optimizing against noise." Analysis includes Windows stream reading, trigger detection, and parallel worker fixes.
- **Status:** Open | [View PR](https://github.com/anthropics/skills/pull/1298)

### 2. Document-Typography (PR #514)
- **Skill:** Typographic quality control for generated documents — prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated output.
- **Discussion:** Addresses a cross-cutting pain point affecting "every document Claude generates," with low controversy but broad relevance.
- **Status:** Open | [View PR](https://github.com/anthropics/skills/pull/514)

### 3. ODT Skill — OpenDocument Creation (PR #486)
- **Skill:** Creation, template filling, and ODT→HTML conversion for OpenDocument Format files (.odt, .ods) — a natural companion to the existing DOCX/PDF skills.
- **Discussion:** Extended review period suggests maintainer scrutiny on scope; triggers cover ODF, OpenDocument, and LibreOffice mentions.
- **Status:** Open | [View PR](https://github.com/anthropics/skills/pull/486)

### 4. Testing-Patterns (PR #723)
- **Skill:** Comprehensive testing stack coverage: Testing Trophy philosophy, AAA unit testing patterns, React component testing with Testing Library, and coverage strategy.
- **Discussion:** One of the longest-lived active PRs (March–April); no sustained objections, suggesting completeness rather than controversy.
- **Status:** Open | [View PR](https://github.com/anthropics/skills/pull/723)

### 5. ServiceNow Platform (PR #568)
- **Skill:** Broad ServiceNow platform assistant: ITSM, ITOM, ITAM/SAM, FSM, HRSD/CSM, SPM/PPM, Vulnerability Response, Security Incident Response, and IntegrationHub.
- **Discussion:** Longest update window of any top PR (March–August); likely under active iteration for scope and accuracy.
- **Status:** Open | [View PR](https://github.com/anthropics/skills/pull/568)

### 6. Pyxel Retro Game Development (PR #525)
- **Skill:** MCP-server-backed skill for the Pyxel retro game engine — covers write → run_and_capture → inspect → iterate workflow.
- **Discussion:** Notable because it's an MCP-integrated skill, a pattern the community views as high-value for tooling workflows.
- **Status:** Open | [View PR](https://github.com/anthropics/skills/pull/525)

### 7. Skill-Quality & Skill-Security Analyzers (PR #83)
- **Skill:** Two meta-skills: a 5-dimension quality analyzer (structure, docs, examples 20% each) and a security analyzer for Claude Skills.
- **Discussion:** Addresses community demand for skill vetting — directly responds to the trust/security concerns in Issue #492.
- **Status:** Open | [View PR](https://github.com/anthropics/skills/pull/83)

### 8. Self-Audit Skill (PR #1367)
- **Skill:** Mechanical file verification plus four-dimension reasoning audit in damage-severity priority order, designed to be model-agnostic.
- **Discussion:** One of the newest high-attention PRs (June–July); part of a "quality gate" theme gaining community momentum.
- **Status:** Open | [View PR](https://github.com/anthropics/skills/pull/1367)

---

## 2. Community Demand Trends

### 🥇 **Skill Reliability & Trust** (Highest Priority)
Issue #492 (security/trust-boundary abuse, **43 comments**) and #228 (org-wide sharing, **16 comments**, 8👍) dominate. The community's #1 concern: *distinguishing official from community skills* and *safe distribution mechanisms*.

### 🥈 **Skill-Creator Tooling Stability** (Second Priority)
Issue #556 (run_eval.py 0% trigger rate, **12 comments**, 7👍) + #202 (best-practice rewrite) reveal the **developer toolchain is a top concern** — widespread frustration with the official skill-creation loop, driving multiple parallel PRs (#1298, #1099, #1050, #539).

### 🥉 **Skill Duplication & Context Window Pressure**
Issue #189 (duplicate skills across plugins, 6 comments, **9👍 — highest 👍 rating**) and #1487 (claude-api injecting 156k tokens — 4 comments) address an emerging pain point: **skill management hygiene and context-window efficiency**.

### 4️⃣ **Enterprise & Security-Critical Domains**
Issues #1175 (SharePoint security), #412 (agent governance), and #1329 (compact-memory for long-running agents) signal growing interest in **governance, enterprise document handling, and memory-efficient agent patterns**.

### 5️⃣ **Document Format Coverage**
Persistent demand for document skills: ODT (PR #486), typography QA (PR #514), DOCX whitespace fixes (Issue #12). The community treats **born-digital document quality** as a first-class concern.

---

## 3. High-Potential Pending Skills

These PRs have active discussion and may land soon:

| PR | Skill | Why It May Land |
|---|---|---|
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Stable, uncontroversial scope covering a universally-needed capability |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | MCP-integrated pattern the community values; author maintains the underlying MCP server |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Addresses a broad pain point with minimal scope creep |
| [#486](https://github.com/anthropics/skills/pull/486) | **odt** | Completes the document-skills family (DOCX + PDF + ODT); high reuse value |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Ties into the actively-discussed quality-gate theme (Issue #1385) |

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **trustworthy, spec-compliant skill infrastructure** — with the skill-creator toolchain, skill security/validation, and context-window efficiency out-ranking any single new capability skill.

---

# Claude Code Community Digest — 2026-08-22

## Today's Highlights

A new patch release (v2.1.239) improves cost transparency by including the 1.1× US-only-inference premium in all cost estimates for data-residency workspaces, and extends the one-time fullscreen renderer offer to Bedrock, Vertex, and Foundry setups. The issue tracker remains dominated by a long-running cyber-safeguard false-positive saga (CVP approval not honored, 133 comments) and a wave of Fable 5 safety-block false positives that halted legitimate sessions on July 2 — the latter cluster has been closed, but the pattern of frustrated-exclamation triggers is a clear signal. A new high-signal bug (#88041) reveals that auto-mode's `bashFirst` system prompt hardcodes bash/heredoc file editing instructions, contradicting the intended use of Edit/Write tools.

## Releases

**v2.1.239** — What's changed:
- **Cost estimates** (`/cost`, status line, `--max-budget-usd`) now include the **1.1× US-only-inference premium** for data-residency workspaces, making budget tracking accurate for those deployments.
- Added the **one-time fullscreen renderer offer** on **Bedrock, Vertex, Foundry** and other previously excluded setups; new installs there now start in that mode.

## Hot Issues

1. **[#84352 — CVP-approved org still receives cyber safeguard blocks](https://github.com/anthropics/claude-code/issues/84352)** — 133 comments, 21 👍. The verification portal shows the org "Under review" despite a prior approval email; blocks continue in Claude Code. Community impact: high, touches compliance-critical users.

2. **[#42776 — Claude Code Desktop fails to relaunch on Windows (orphaned file lock)](https://github.com/anthropics/claude-code/issues/42776)** — 128 comments, 63 👍. Long-running Windows blocker; users report needing to kill orphaned processes manually. Frequent workaround chatter in threads.

3. **[#19649 — Model overuses Bash (sed/grep) instead of builtin Read/Grep tools](https://github.com/anthropics/claude-code/issues/19649)** — 45 comments, 101 👍. The community strongly agrees that the model's tool preference is inefficient and harder to audit; a strong candidate for prompt/tool-selection tuning.

4. **[#62699 — Cannot copy text from output on Linux (Ctrl+Shift+C / right-click)](https://github.com/anthropics/claude-code/issues/62699)** — 41 comments, 67 👍. Long-standing TUI usability gap, affecting daily workflows; clearly a high-impact UX issue for Linux users.

5. **[#24968 — Accessibility: turn duration verbs should be customizable](https://github.com/anthropics/claude-code/issues/24968)** — 17 comments, 58 👍. Users want to adapt TUI narration/announcement language for screen readers; a11y-focused feature with strong support.

6. **[#76187 — Cowork (Windows): project folders never mount; add-folder dialog broken](https://github.com/anthropics/claude-code/issues/76187)** — 12 comments, 1 👍. Regressed after July 8 update; reproduced on two machines; nested-folder detach and cloud bridge failure suspected. High impact for Windows Cowork users.

7. **[#82967 — GPU process crash (UnknownVizError) from Browser tools, corrupts app package](https://github.com/anthropics/claude-code/issues/82967)** — 9 comments, 1 👍. Intermittent crash on `browser:open_site`; requires full reinstall. Electron-viz instability; rare but severe when it hits.

8. **[#88041 — Auto-mode "bashFirst" hardcodes sed/heredoc editing, ignoring Edit/Write tools](https://github.com/anthropics/claude-code/issues/88041)** — 5 comments, 6 👍. Newly reported; the system-prompt template in the binary instructs bash-based edits, contrary to tooling intent. Community is watching for a prompt fix.

9. **[#77830 — Claude-Session attribution trailer ignores `attribution: {commit: ""}`](https://github.com/anthropics/claude-code/issues/77830)** — 9 comments, 1 👍. Closed; the trailer is injected into Bash tool description regardless of settings. Privacy/attribution correctness concern for users who opt out.

10. **[#48511 — Desktop: session history lost when switching accounts](https://github.com/anthropics/claude-code/issues/48511)** — 5 comments, 8 👍. Closed; affects both Cowork and Code mode; users expect account switch to preserve history or clearly scope it per account.

Also note the **large closed cluster (#73168–#73228)** from user `sworrl`: 22+ Fable 5 AUP false positives that halted legitimate sessions (drone GCS, vuln scrubs, mobile audits) — many triggered by **frustrated exclamations**. Closed, but the pattern is a red flag for over-sensitive safety filters.

## Key PR Progress

No PRs were updated in the last 24 hours. Active PR tracking will resume when new activity lands.

## Feature Request Trends

- **A11y & TUI customization** (#24968): Configurable duration verbs/announcement text for screen-reader users; a broader ask for making TUI chat text fully accessible.
- **Tool-selection intelligence** (#19649, #88041): Strong demand for the model to prefer structured Read/Grep/Edit tools over ad-hoc bash; users want fewer opaque shell edits and more auditable, build-tool-aligned operations.
- **Copy/select parity across platforms** (#62699): Linux TUI users want standard copy interactions; implies a general theme of "desktop-class UX in the terminal."
- **Account/session portability** (#48511): Users want session history to survive account switches; a data-portability expectation for hybrid desktop/CLI usage.
- **Stability of Cowork on Windows** (#76187): Folder mounting and dialog reliability in Cowork cloud-execution mode is a recurring Windows pain point.

## Developer Pain Points

1. **Safety-filter false positives** (#84352, #73168–#73228): Authorized work is being blocked by cyber-safeguards and AUP filters, often on trivial triggers like frustrated words. Repeatedly halts sessions and erodes trust in the guardrails.
2. **Windows/macOS desktop instability** (#42776, #76187, #82967): File locks, folder mounts, GPU crashes, and package corruption force manual cleanup or full reinstalls; reliability is the top complaint on desktop.
3. **Bash-over-builtins behavior** (#19649, #88041): The model’s preference for `sed`/`grep`/heredocs over dedicated tools is both inefficient and harder to audit; users view this as a correctness and safety issue.
4. **TUI/UX gaps on Linux** (#62699, #24968): Missing copy support and non-customizable a11y text make the TUI feel less polished on Linux compared to other platforms.
5. **Attribution leakage** (#77830): Even with attribution disabled in settings, commit trailers are injected via the tool description — a privacy/control concern for users who want clean commit history.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-22

## Today's Highlights

The Codex team shipped a rapid succession of six Rust alpha releases (0.149.0-alpha.4.1 through 0.150.0-alpha.6) within 24 hours, signaling intense iteration on the CLI and app-server. Meanwhile, the community remains heavily focused on a **Windows + Android Remote Control stability crisis**, with at least 10 open issues describing pairing successes followed by session failures, stale lists, and reconnect loops. On the PR side, a coordinated batch of ~20 merged PRs landed around **Guardian review propagation**, **executor stop-hook support**, **granular sandbox approvals**, and **Amazon Bedrock app-server setup** — indicating major hardening of the approval-policy and remote-execution architecture.

## Releases

Six Rust alpha builds were published in the last 24 hours:
- **rust-v0.150.0-alpha.6** — [Release](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.6)
- **rust-v0.150.0-alpha.5** — [Release](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.5)
- **rust-v0.150.0-alpha.3** — [Release](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.3)
- **rust-v0.150.0-alpha.2** — [Release](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.2)
- **rust-v0.149.0-alpha.7.1** — [Release](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.7.1)
- **rust-v0.149.0-alpha.4.1** — [Release](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.4.1)

No release notes were attached beyond version markers. Combined with the ~20 PRs merged yesterday, these alphas likely contain the Guardian review, stop-hook, and sandbox-approval changes described below.

## Hot Issues

1. **[#35119 — Windows/WSL marks valid Git repositories as non-Git](https://github.com/openai/codex/issues/35119)** — 24 comments, 17 👍. A regression in the Windows Store app (26.721.3404) causes valid WSL ext4 repositories to be treated as non-Git, breaking core workflow. High engagement suggests this affects many WSL-first developers.

2. **[#39815 — Android Remote pairs but conversations fail to load (`/wham/tasks/list` 503)](https://github.com/openai/codex/issues/39815)** — 13 comments. Windows host pairs successfully with Android Remote, but the tasks endpoint returns 503. Representative of a wider cluster of Remote-Control failures that have spiked this week.

3. **[#39856 — QR pairing succeeds but Android clients cannot establish session](https://github.com/openai/codex/issues/39856)** — 9 comments. On build 26.818.31338, `nextConnectionCount=0` prevents session establishment entirely despite successful pairing.

4. **[#39954 — Android Remote enters reconnect loop after successful initialize/thread-list](https://github.com/openai/codex/issues/39954)** — 9 comments. Progresses further than #39856 but then loops on reconnect, suggesting the failure is in the session-recovery path rather than handshake.

5. **[#38503 — "Too many requests" blocks chat access and disrupts Work tasks](https://github.com/openai/codex/issues/38503)** — 9 comments, 11 👍. Rate-limit modal falsely appears on the web, interrupting active Work tasks. High reaction count indicates broad impact on web users.

6. **[#17598 — Native subagent orchestration broken with non-OpenAI custom providers](https://github.com/openai/codex/issues/17598)** — 9 comments. Custom providers (e.g., Amazon Bedrock) fail with native subagent orchestration. Long-running issue (since April) with ongoing relevance as provider flexibility becomes a priority.

7. **[#29002 — MCP tools/call fails with "Unexpected response type" on CustomResult](https://github.com/openai/codex/issues/29002)** — 6 comments, 7 👍. Valid MCP tool results that decode as `CustomResult` break calls for Bedrock-model users. Pairs with the new Bedrock PRs landing today.

8. **[#34764 — Computer Use unavailable: Application Protected files fail to copy from WindowsApps](https://github.com/openai/codex/issues/34764)** — 7 comments. Windows sandbox/Computer-Use setup fails to relocate Application Protected runtime files, blocking the feature entirely for affected users.

9. **[#39178 — Hidden avatarOverlay owns completed thread; primary UI stays "Thinking"](https://github.com/openai/codex/issues/39178)** — 6 comments. A session-ownership bug in the desktop app: an invisible overlay UI component holds thread ownership, leaving the visible UI stuck in "Thinking" indefinitely.

10. **[#35718 — NUL-filled `.sandbox/deny_read_acl_state.json` permanently breaks sandbox](https://github.com/openai/codex/issues/35718)** — 6 comments. A single corrupted state file permanently breaks the Windows sandbox and survives reinstall because it lives in `CODEX_HOME`. Correlates with the new PR [#40004](https://github.com/openai/codex/pull/40004) preserving managed deny-read rules.

## Key PR Progress

1. **[#40038 — Add unfinished root turn suspension](https://github.com/openai/codex/pull/40038)** — Adds `suspend_turn_and_shutdown` to stop an active root turn without marking it complete/aborted, enabling crash-safe turn recovery.

2. **[#40031 — Preserve strict MCP auto-review outcomes](https://github.com/openai/codex/pull/40031)** — Propagates canonical denial/timeout/abort responses from strict MCP auto-review instead of replacing them with generic declines — important for audit trails.

3. **[#40024 — Honor granular sandbox approvals in unified exec](https://github.com/openai/codex/pull/40024)** — Uses the shared approval-policy check for unified exec sandbox escalation; `require_escalated` commands now prompt only when granular sandbox approval is enabled.

4. **[#40021 — Cancel Guardian reviews with their tool calls](https://github.com/openai/codex/pull/40021)** — Propagates tool cancellation tokens into Guardian approval reviews so interrupting a tool aborts its pending review.

5. **[#40013 — Reuse Guardian reviews in async risk scoring](https://github.com/openai/codex/pull/40013)** — Feeds completed synchronous Guardian allow/deny review evidence into the async v2 classifier as trusted developer context, isolated from conversation traces.

6. **[#40018 — Add browser and computer use configuration](https://github.com/openai/codex/pull/40018)** — Adds typed `browser_use` (history/per-origin access, download, upload, CDP policies) and `computer_use` (macOS bundle IDs, Windows AUMIDs) settings.

7. **[#40015 — Harden remote installed plugin cache reconciliation](https://github.com/openai/codex/pull/40015)** — Scopes remote plugin snapshots to the active account and serializes bundle reconciliation with direct installs — likely addresses the plugin-cache chaos in #40035.

8. **[#40007 — Implement Amazon Bedrock setup in the app server](https://github.com/openai/codex/pull/40007)** — Adds `account/bedrock/discover` and `account/bedrock/setup` endpoints for AWS profile/credential validation, persisting the selected region and profile. Directly relevant to #17598 and #29002.

9. **[#40005 — Route escalated commands through synchronous Guardian review](https://github.com/openai/codex/pull/40005)** — Commands requesting `sandbox_permissions=require_escalated` now get a full synchronous Guardian review even when not marked as retries.

10. **[#40004 — Preserve managed deny-read rules across permission updates](https://github.com/openai/codex/pull/40004)** — Retains managed `deny_read` rules separately and merges them into updated permission profiles, rejecting profiles that would weaken them. Directly addresses #35718.

## Feature Request Trends

1. **Multi-provider support (Bedrock, custom models)** — [PR #40007](https://github.com/openai/codex/pull/40007) implements Bedrock setup in the app server, while issues #17598 and #29002 highlight that subagent orchestration and MCP tool-calls still misbehave on non-OpenAI providers. Expect continued work to make provider abstraction first-class.

2. **Multiple simultaneous profiles** — [#18655](https://github.com/openai/codex/issues/18655) requests running multiple profiles concurrently in the app without restart. Community wants provider/config hot-swapping.

3. **Native edit tools for third-party models** — [#33405](https://github.com/openai/codex/issues/33405) asks for a provider-compatible native edit tool; `apply_patch` is unavailable or rejected by third-party providers.

4. **Configuration policy surface expansion** — PRs #40018 and #40000 are laying down typed browser-use and computer-use policy configuration, indicating a broader push toward granular, origin/domain-aware access controls.

## Developer Pain Points

- **Windows Remote Control reliability** — The single largest cluster this week (10+ issues: #39815, #39856, #39954, #39947, #39974, #39845, #40008, #24454, #40022). Developers consistently report: pairing works, session establishment or list-loading fails. Regression-level severity.
- **Session/writer ownership bugs** — Multiple reports of "already has an active writer" (#39823), invisible UI components owning threads (#39178), and child turns visible but unreadable by API (#40014). Sessions are fragile across desktop/CLI/remote boundaries.
- **Windows sandbox fragility** — A single corrupted state file bricking sandbox setup permanently (#35718), plus repeated Computer Use failures (#34764, #37595, #39543). Windows-specific trust-boundary code is a recurring source of breakage.
- **Rate-limit false positives** — "Too many requests" modal appearing erroneously (#38503) and a ~2.4x accelerated weekly quota meter (#38728) erode developer trust in quota accounting.
- **Custom provider degredation** — Bedrock users specifically face broken subagents (#17598), MCP failures (#29002), and missing native edit tools (#33405) — a sign that third-party support is still maturing despite the new setup endpoints.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-22

## Today's Highlights
The Gemini CLI team shipped a **nightly release (v0.56.0)** focused on macOS sandbox hardening, closing a container-based escape vector through Seatbelt profile restrictions. Meanwhile, the community continues to flag **sub-agent reliability issues** — with two P1 bugs around subagent recovery after `MAX_TURNS` being misreported as success, and the generalist agent hanging indefinitely — both open for several months with maintainer attention. A significant PR wave from `joneba-google` is adding a **production-grade PR generation pipeline** with evaluation harnesses, LLM-as-a-judge scoring, and CI/CD deployment infrastructure.

## Releases
- **[v0.56.0-nightly.20260822.g5411f113c](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260822.g5411f113c)**: Fixes sandbox isolation on macOS by denying Docker and container runtime sockets, binaries, Mach/XPC service lookups, and POSIX shared memory in Seatbelt profiles — preventing sandbox escape via container hypervisor mounts (PR [#28935](https://github.com/google-gemini/gemini-cli/pull/28935) by first-time contributor @josebalius).

## Hot Issues
Here are the 10 most impactful issues updated in the last 24 hours:

1. **[#22323: Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**
   - **Type:** P1 Bug | 13 comments | 2 👍
   - *Why it matters:* The `codebase_investigator` subagent reports `status: "success"` and `GOAL` as termination reason even when it maxed out turns before doing any analysis. This silently masks failures, causing downstream incorrect decisions.

2. **[#21409: Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)**
   - **Type:** P1 Bug | 8 comments | 8 👍
   - *Why it matters:* Widely upvoted (8 👍) — whenever the CLI defers to the generalist agent for simple operations (e.g., folder creation), it hangs indefinitely (up to an hour of waiting). Workaround is instructing the model to never use subagents.

3. **[#25166: Shell command stuck with "Waiting input" after completing](https://github.com/google-gemini/gemini-cli/issues/25166)**
   - **Type:** P1 Bug | 4 comments | 3 👍
   - *Why it matters:* After executing simple CLI commands, Gemini CLI hangs showing "Awaiting user input" even though the command finished. High frustration since it happens for trivial non-interactive commands.

4. **[#21983: Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**
   - **Type:** P1 Bug | 4 comments | 1 👍
   - *Why it matters:* Browser agent termination on Wayland sessions; this P1 affects Linux users disproportionately and has been open for 5+ months.

5. **[#21968: Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**
   - **Type:** P2| 6 comments
   - *Why it matters:* Anectodal but persistent — the model doesn't proactively use custom skills/sub-agents even when plainly relevant (e.g., gradle/git skills). Required explicit user instruction to engage them, undermining the value of custom agents.

6. **[#26522: Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**
   - **Type:** P2 Bug | 5 comments
   - *Why it matters:* Auto Memory marks sessions as "unprocessed" when the extractor skips low-signal transcripts, causing them to surface repeatedly — wasted tokens and noise in memory maintenance.

7. **[#26525: Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)**
   - **Type:** P2 Security | 4 comments
   - *Why it matters:* Auto Memory sends transcript content to the model **before** redaction instructions run, meaning secrets are already in model context. Also, the service can log existing skills — a security/privacy concern for enterprise users.

8. **[#22232: Browser agent resilience — session takeover and lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232)**
   - **Type:** P3 Feature | 4 comments
   - *Why it matters:* Browser agent's "fail-fast" strategy on locked profiles (`sessionMode: persistent`) breaks usage with orphaned processes. Request: automatic session takeover and lock recovery.

9. **[#20079: Symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)**
   - **Type:** P2 Bug | 4 comments
   - *Why it matters:* `~/.gemini/agents/filename.md` symlinks are ignored when scanning for subagents — breaks tooling that uses symlinked config folders (common on Windows + dotfiles repos).

10. **[#24246: 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**
    - **Type:** P2 Bug | 3 comments
    - *Why it matters:* As users enable more tools, the CLI exceeds the API limit (400 tools) and fails. Expectation: the CLI should smartly scope available tools to avoid hitting limits.

## Key PR Progress
Here are the 10 most significant PRs updated in the last 24 hours:

1. **[#28935: Isolate Docker sockets in macOS Seatbelt](https://github.com/google-gemini/gemini-cli/pull/28935)** — *CLOSED*
   - First-time contributor @josebalius adds denial rules for container runtime sockets/bins and Mach/XPC lookups, blocking sandbox escapes via Docker Desktop VirtioFS mounts.

2. **[#28956: Resolve symlinked/junctioned skills directories](https://github.com/google-gemini/gemini-cli/pull/28956)** — *OPEN*
   - Fixes agent skills discovery when `.gemini` is symlinked/junctioned to `.agents` (cross-platform support) by resolving via `realpath`; addresses open issue #28944.

3. **[#28940: Clear stale cancellation error in A2A server](https://github.com/google-gemini/gemini-cli/pull/28940)** — *OPEN*
   - Fixes a state-corruption bug where subsequent user prompts crash with "Execution aborted" after a cancellation. A "one-and-for-all" fix for Google Cloud Assistant stoppage.

4. **[#28934: History rollback and retry nudge optimizations](https://github.com/google-gemini/gemini-cli/pull/28934)** — *OPEN*
   - Reduces context bloat on tool-call cancellation (rollback instead of synthetic messages), lowers API request volume, and maximizes prefix caching on retry nudges.

5. **[#28827: Avoid false auth errors for 401 substrings](https://github.com/google-gemini/gemini-cli/pull/28827)** — *OPEN*
   - Prevents `isAuthenticationError` from misfiring on unrelated strings containing "401" (e.g., exit codes, ports). Regression coverage included.

6. **[#28862: Clean shellExecutionService type-safety](https://github.com/google-gemini/gemini-cli/pull/28862)** — *CLOSED*
   - Removes `eslint-disable` comments and unsafe type-asserts in `shellExecutionService.ts`, part of the Mac PTY resource-leak fix branch.

7. **[#28951: PR Generation — Cloud Run job and Workflow orchestration](https://github.com/google-gemini/gemini-cli/pull/28951)** — *OPEN* (part of joneba-google series)
   - Adds production deployment: Cloud Run Job config, Cloud Workflow orchestration, and deployment automation for the Caretaker PR Generation pipeline.

8. **[#28949: LLM diff judge evaluation module](https://github.com/google-gemini/gemini-cli/pull/28949)** — *OPEN*
   - Implements LLM-as-judge scoring (`eval_diff_judge.py`) with a rubric prompt to benchmark generated PR diffs against ground-truth fixes.

9. **[#28948: PR Generation evaluation harness and e2e runner](https://github.com/google-gemini/gemini-cli/pull/28948)** — *OPEN*
   - Adds `eval_suite.py`, `eval_orchestrator.py`, and an end-to-end chained pipeline runner to benchmark automated PR generation across curated issues.

10. **[#28945: Standardize golden issue generator schema](https://github.com/google-gemini/gemini-cli/pull/28945)** — *CLOSED*
    - Upgrades `generate_golden_issue.py` to the production Firestore schema (`TRIAGED` status, `workable_spec`, `github_metadata`) with multi-threaded batch generation — critical for triage evals.

## Feature Request Trends
The most requested directions across issues updated in the last 24 hours:

- **PR Generation & Evaluation Infrastructure** (from joneba-google's 8+ PRs): Automated PR generation with CI/CD, diff judges, e2e harnesses, GCS artifact storage — a significant investment in automated bug-fixing benchmarks.
- **AST-Aware Codebase Tooling** (epics #22745, #22746): Precisely reading method bounds, AST-aware search, and codebase mapping to reduce token waste and misaligned reads.
- **Sub-Agent Trajectory Visibility** (#22598, #21763): Sharing subagent trajectories via `/chat share` and including them in `/bug` reports for better repro/debugging.
- **Context-Frugal Execution** (#19561, #18836): "Tactful extraction" hierarchy (grep → surgical reads) and persistent file-based task tracking (CRUD), replacing in-context WriteToDo to prevent context rot.
- **Agent Self-Awareness** (#21432): The CLI should accurately document its own flags, hotkeys, and self-execution commands to be its own expert guide.
- **Memory System Hardening** (#26522, #26523, #26525, #26516): Deterministic redaction, quarantine invalid inbox patches, avoid indefinite low-signal retries, reduce logging.

## Developer Pain Points

1. **Sub-Agent Reliability** — Recurring theme: subagents either hang indefinitely (#21409), misreport failures as success (#22323), or aren't used at all (#21968). The current experience makes the generalist agent a "black box" risk in automation.

2. **Shell Execution Hangs & Stalls** — Multiple reports of shell commands that complete but the CLI remains "awaiting input" (#25166), plus bad `\n` escape handling (#22466) and interactive prompt deadlocks (#22465).

3. **Browser Agent Fragility** — Wayland failures (#21983), locked profiles prevent re-use (#22232), and ignored `settings.json` overrides like `maxTurns` (#22267). Cross-platform Linux support remains a sore spot.

4. **Tool Limit & Context Bloat** — Hitting 400 errors with tool counts exceeding 128 (#24246), context overheating from large file "firehose" reads (#19561), and the model creating scattered temp scripts that pollute the workspace (#23571).

5. **Security & Privacy Overhead** — Auto Memory sends transcript content to the model *before* redaction (#26525); antivirus false positives on error reports (#20238); and destructive git/force-command usage without guardrails (#22672).

6. **Configuration Surprises** — Symlinked agent directories not detected (#20079, #28956), settings overrides silently ignored by subagents (#22267), and Windows junction support for `.gemini`/`.agents` links (#28956).

---

*Digest generated from data pulled on 2026-08-22 from [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli). All links point to the original GitHub items.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-22

## Today's Highlights

The Copilot CLI team shipped v1.0.81-7 with a notable reliability improvement: session restoration after crashes or machine restarts, eliminating the need to manually reopen terminal sessions. The issue tracker shows a heavy concentration of **prerelease regression reports** from v1.0.81, particularly around parallel subagent rendering, `store_memory` failures, and MCP configuration edge cases. Two long-running community asks — **multi-model switching in a single session** (#3709, 27 👍) and **multi-BYK model support** (#3282, 26 👍) — continue to gather strong support, signaling that model flexibility is the most pressing feature gap.

---

## Releases

### v1.0.81-7
- **Session recovery**: Startup now offers to restore sessions that were still open when the CLI terminated (crash or machine restart), preventing manual re-opening of every terminal.
- **Model metadata**: `models.list` now includes service-published `infoMessages` and `warningMessages` per model, giving users more context before selecting.
- **New command**: `copilot app` added to open the GitHub app.

---

## Hot Issues (Top 10)

1. **[#3282 — Add multiple BYOK model capability](https://github.com/github/copilot-cli/issues/3282)** | 26 👍, 8 💬  
   Users are locked to a single BYOK model via env var and cannot switch within the TUI without restarting. Long-running request; strong demand for parity between BYOK and hosted model flexibility.

2. **[#3709 — Allow `/model` to switch between multiple models, including BYOK/local providers, in one session](https://github.com/github/copilot-cli/issues/3709)** | 27 👍, 4 💬  
   The `/model` picker excludes local/BYOK providers. Community consensus: session-level model switching should include all configured providers.

3. **[#4345 — Reasoning effort 'medium' not supported for claude-haiku-4.5](https://github.com/github/copilot-cli/issues/4345)** | 4 👍, 8 💬  
   Feature-flag combination (`opus_medium_effort_default` + `gpt_5_4_mini_for_explore`) causes repeated errors during sub-agent execution. Illustrates the fragility of server-side flag interactions.

4. **[#1313 — Session Branching](https://github.com/github/copilot-cli/issues/1313)** | 13 👍, 7 💬  
   Request to branch sessions (inherit full history while preserving the original). A long-standing workflow feature request that would significantly improve experimental exploration.

5. **[#4535 — `store_memory` fails in v1.0.81 prereleases: "Instance id is required"](https://github.com/github/copilot-cli/issues/4535)** | 0 👍, 4 💬  
   Native memory writer invoked without a required instance ID in prerelease builds. A regression affecting memory-dependent workflows.

6. **[#4211 — BigInt in structured MCP response breaks CLI](https://github.com/github/copilot-cli/issues/4211)** | 3 👍, 5 💬  
   `TypeError: Do not know how to serialize a BigInt` aborts all ongoing tasks. MCP interoperability gap — a straightforward serialization fix with high impact for MCP-heavy users.

7. **[#4521 — Sandbox cannot be disabled](https://github.com/github/copilot-cli/issues/4521)** | 4 👍, 3 💬  
   Config reports sandbox disabled, but runtime still enforces it. Configuration-state mismatch; confusing and blocks users who explicitly opt out.

8. **[#4533 — Terminal UI stops consuming events when a turn spawns parallel subagents](https://github.com/github/copilot-cli/issues/4533)** | 0 👍, 1 💬  
   Pre-release regression (1.0.81-4/-5): input, scroll, and event consumption die while Rust runtime continues. Critical UI deadlock for parallel agent workflows.

9. **[#4492 — Desktop app WebView2 renderer self-aborts with STATUS_BREAKPOINT](https://github.com/github/copilot-cli/issues/4492)** | 0 👍, 1 💬  
   22 confirmed occurrences on one machine; window goes blank until manual refresh. Stability issue for the desktop shell.

10. **[#4549 — Windows: Every shell command spawns a visible PowerShell console window](https://github.com/github/copilot-cli/issues/4549)** | 0 👍, 1 💬  
    Near-constant window flashing steals focus during agent activity on Windows. Significant UX degradation for Windows users.

---

## Key PR Progress

No pull requests were updated in the last 24 hours. The project appears to be in a release stabilization phase, with the team focused on addressing the regression reports from the v1.0.81 prerelease line.

---

## Feature Request Trends

The following directions are consistently requested across issues:

- **Multi-model session flexibility**: Users want to switch between hosted, BYOK, and local models *within* a session (#3282, #3709). The ability to configure multiple BYOK providers is the most upvoted theme today.
- **Session lifecycle improvements**: Branching (#1313), restore-after-crash (shipped in v1.0.81-7), and an unscoped `/resume` toggle (#4554) show a clear desire for richer session management.
- **MCP robustness**: BigInt handling (#4211), late-connecting servers (#4038), config reload inconsistency (#4562), and unavailability misreporting (#4552) — a cluster of edge cases that erode trust in MCP tooling.
- **Inline plan annotation**: The proposal for step-level comments on plans (#4563) indicates users want more direct ways to guide the agent without restating context in chat.

---

## Developer Pain Points

Several recurring frustrations stand out:

- **Pre-release regressions**: The v1.0.81 line has introduced multiple regressions (store_memory (#4535), parallel subagent UI deadlock (#4533), unused MCP config from workspace (#4542), loops on `apply_patch` JSON-wrapping errors (#4553)) — a pattern that suggests a need for more rigorous prerelease testing, particularly around Rust/TypeScript boundary and MCP interactions.
- **MCP configuration drift**: Servers detected but not connected (#4542), stale startup snapshots (#4562), and silent marketplace registration failures (#4556) point to a configuration model that behaves inconsistently between detection and runtime.
- **ACP protocol accuracy**: `session/cancel` returning `end_turn` instead of `cancelled` (#4561) and `session/prompt` unconditionally aborting background sub-agents (#4555) are protocol-level correctness issues that break tool interop.
- **Windows experience**: Visible PowerShell windows on every command (#4549), `wta.exe` path quoting bugs (#4540) — Windows support continues to lag behind macOS in polish.
- **Model behavior quirks**: `auto` mode with reasoning effort disabled (rejects all attempts to configure) (#4560), and unreliable AIC usage display (#4511) — users cannot reliably predict or monitor model behavior.

---

*Digest generated from public GitHub data for github/github/copilot-cli on 2026-08-22.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi CLI Community Digest — 2026-08-22**

---

### 1. Today's Highlights
The project saw quiet activity with exactly one new Issue and one documentation PR in the last 24 hours. The primary technical concern is a **resource-leak bug (#2615)** where background subagents continue consuming LLM quota after a timeout or kill signal, making the issue invisible to users because the task disappears from tracking. Meanwhile, a **security documentation PR (#2614)** moves forward to clarify plugin trust boundaries and data persistence, signaling ongoing community concern about plugin safety.

---

### 2. Releases
No new releases were published in the last 24 hours.

---

### 3. Hot Issues
**#2615** — [Bug] Background subagent keeps making LLM calls after TaskStop/timeout marks it terminal  
- **Author:** pc9527zxx | **Created:** 2026-08-21 | **Reactions:** 0 | **Comments:** 0  
- **Summary:** Background subagents can continue issuing LLM requests even after being marked `timed_out` or `killed`. The task is removed from active-tracking, making the continued quota burn invisible. `TaskStop` becomes ineffective, and the user cannot terminate the runaway process.  
- **Why it matters:** This is a silent cost-leak bug. For developers running heavy parallel agents, this could translate into significant unbudgeted API spend without any visible trace. The lack of comments suggests it is newly reported, but the severity is high due to the "invisible" nature of the leak.  
- **Link:** [Issue #2615](https://github.com/MoonshotAI/kimi-cli/issues/2615)

*(Note: Only 1 issue was updated in this window. No other issues meet the digest criteria.)*

---

### 4. Key PR Progress
**#2614** — docs(plugins): document security and persistent data  
- **Author:** QIANLING-0831 | **Created:** 2026-08-20 | **Updated:** 2026-08-21  
- **Summary:** Adds documentation covering the trust boundary of locally executed plugin tools, credential-handling precautions for the `inject` function, and clarifies that reinstalling replaces the plugin installation directory. It also recommends a separate data directory for plugin data.  
- **Why it matters:** This addresses a recurring developer pain point—understanding how plugin code interacts with sensitive data. The documentation clarifies security boundaries, reducing the risk of credential leaks in community-created plugins.  
- **Link:** [PR #2614](https://github.com/MoonshotAI/kimi-cli/pull/2614)

*(Note: Only 1 PR was updated in this window. No other PRs meet the digest criteria.)*

---

### 5. Feature Request Trends
Based on the limited activity window, no new feature requests were filed. However, the focus on plugin documentation implies an emerging trend toward **plugin security hardening** and **data management best practices**—likely driven by users building custom tooling.

---

### 6. Developer Pain Points
The single open bug highlights a **reliability concern in process management**: developers worry about losing control over background subagents, specifically the inability to fully stop them after a timeout. The documentation PR suggests another pain point: **uncertainty about plugin trust and data persistence**, especially around credential handling and file system cleanup.

---

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-22

## Today's Highlights

Two patch releases (v1.18.20, v1.18.21) shipped within 24 hours, primarily targeting network resilience: retrying `network_error` finish reasons, surfacing resumable subagent failures, and fixing a regression where complete responses with `finish=unknown` would loop indefinitely. The community is buzzing about a new contributor wave—several PRs from first-time contributors (AidenGeunGeun, OpeOginni) fixing core bugs—and a controversial behavior change where `unknown` finish reasons now trigger continuation loops, sparking issue #43939.

## Releases

**v1.18.21** — Core: Continue responses when a model reports an unknown finish reason instead of stopping early; route Vertex AI `eu`/`us` multi-region Gemini requests through REP endpoints. Desktop: Keep file search results visible while the next search is loading.

**v1.18.20** — Core: Surface failed subagent tool calls with a resumable `task_id`; retry provider responses that end with `finish_reason: network_error`; retry more network error variants (`network-error`, `network_error`); surface resumable subagent failures instead of returning incomplete results.

## Hot Issues

1. **[#43939 — v1.18.21 repeatedly continues complete responses with finish=unknown](https://github.com/anomalyco/opencode/issues/43939)** — The fix for dropped streams introduced a loop: when `opencode/x-preview-f-free` returns complete text with `finish=unknown` and zero token usage, the client keeps re-prompting. The very regression the release aimed to fix has become a new pain point, with PR #44031 already open.

2. **[#38749 — Agent keeps stopping abruptly](https://github.com/anomalyco/opencode/issues/38749)** — Still open after a month with 9 comments and 4 upvotes. Users report the agent stops mid-response with no error, playing the "session complete" sound. This is the umbrella issue for a class of abrupt-stop reports (also see #34473).

3. **[#24153 — Feature: Add unarchive/restore for archived sessions](https://github.com/anomalyco/opencode/issues/24153)** — One-way archiving is a UX dead-end; sessions disappear from the sidebar entirely. 11 upvotes make this the most-requested feature this week. Community wants archived sessions at least dimmed in the sidebar, with restore capability.

4. **[#43983 — Expose OpenCode Go usage history through the API key](https://github.com/anomalyco/opencode/issues/43983)** — Users want an API-key-authenticated endpoint to programmatically check OpenCode Go usage. Created just yesterday with 5 comments; this is a developer-tooling gap for teams managing spend centrally.

5. **[#43829 — Deepseek-v4-flash-free Not Available](https://github.com/anomalyco/opencode/issues/43829)** — Duplicate of #43805: the `deepseek-v4-flash-free` model appears in Zen's `/zen/v1/models` API but not in the model picker dropdown. Two reports in 24 hours signal a real availability bug (likely removed from free tier without UI cleanup).

6. **[#41847 — Permission dialogs not rendered: backend blocks on invisible prompts](https://github.com/anomalyco/opencode/issues/41847)** — Severe: 3,270 permission prompts generated over 27 days, zero user responses. Backend blocked waiting on dialogs that were never rendered, making the app appear frozen. This is a critical reliability bug for headless/desktop workflows.

7. **[#42657 — TUI lag with multi-subagent sessions (97% CPU on render thread)](https://github.com/anomalyco/opencode/issues/42657)** — 2–4 concurrent subagents cause 1–3 second typing lag regardless of terminal (Warp, Windows Terminal, WezTerm all affected). Points to render-thread bottlenecks in the TUI's subagent rendering path.

8. **[#43987 — V2 fails to honor `**/target/` Git ignore rules in FFF indexing](https://github.com/anomalyco/opencode/issues/43987)** — Anchored directory-only wildcard rules like `**/target/` are ignored by the FFF index, causing build artifacts to appear in `/api/fs/find`. On Linux this causes File Explorer (FFF) to show irrelevant files.

9. **[#43911 — textVerbosity injected for gpt-5.x breaks Bedrock Mantle via LiteLLM gateway](https://github.com/anomalyco/opencode/issues/43911)** — Auto-injection of `textVerbosity: "low"` for `gpt-5.*` IDs is applied even on OpenAI-compatible providers, breaking LiteLLM → Bedrock routing. Providers other than OpenAI get a param they don't understand.

10. **[#36232 — Web UI version number lags: v1.17.17 displayed when running v1.17.18](https://github.com/anomalyco/opencode/issues/36232)** — Embedded frontend bundle version lags the `OPENCODE_VERSION` define. Minor but confusing for bug reports: users report issues against a version they're not running.

## Key PR Progress

1. **[#44031 — fix(opencode): stop looping after unknown finish with text](https://github.com/anomalyco/opencode/pull/44031)** — Direct fix for #43939. Adjusts the #43892 loop logic to recognize when `unknown` finish already produced usable text. Critical regression fix.

2. **[#44002 — fix(core): recover partial provider failures](https://github.com/anomalyco/opencode/pull/44002)** — Automatically retries provider-internal and rate-limit failures after partial output. Recovery crosses eagerly executed local tools once durable, but stops at provider-hosted activity. Aligns with the v1.18.20 retry improvements.

3. **[#43728 — fix(tui): align informational dialogs](https://github.com/anomalyco/opencode/pull/43728)** — Closes #42180/#42181: Debug dialog was using large modal size while Status and Debug had inconsistent horizontal offsets. Cosmetic but improves TUI polish.

4. **[#43165 — feat(opencode): Message logger](https://github.com/anomalyco/opencode/pull/43165)** — Adds `experimental.log_messages` (`"info"`, `"debug"`, `"trace"`) for configurable LLM request/response logging. Addresses long-standing debuggability gap.

5. **[#44026 — refactor(core): inline portable shell scanner](https://github.com/anomalyco/opencode/pull/44026)** — Moves the portable shell scanner from unpublished `@opencode-ai/shell-scan` into Core. Removes an unpublished package from runtime deps without behavior change.

6. **[#44016 — fix(core): harden portable shell authorization](https://github.com/anomalyco/opencode/pull/44016)** — Builds on #44026: prevents uncertain shell input from executing under a narrower saved approval. Closes a security gap in the opt-in portable shell permission scanner.

7. **[#44027 — fix(app): load workspace sessions by directory](https://github.com/anomalyco/opencode/pull/44027)** — Fixes Settings → Workspaces freezing the app. Previously fetched every session on the server serially; now loads by directory. Closes #44022.

8. **[#44025 — fix(app): tolerate incomplete agent configuration](https://github.com/anomalyco/opencode/pull/44025)** — Prevents whole-app crash on desktop when a connected server runs an older opencode version. `normalizeAgentList` was throwing on incomplete agent config. Closes #44023.

9. **[#44004 — fix(core): inherit fork instruction entries](https://github.com/anomalyco/opencode/pull/44004)** — Preserves session-scoped API instruction entries when forking, including removal tombstones. Fixes stale instruction reconciliation after fork.

10. **[#43978 — fix(opencode): resolve console device login URL](https://github.com/anomalyco/opencode/pull/43978)** — Resolves Console-provided device verification URLs with standard URL semantics, preventing `/console` duplication on path-based deployments. Also rejects malformed/non-HTTP(S) URLs. Duplicate fix in #44029.

## Feature Request Trends

- **Usage & cost transparency** (real driver): #43983 (Go usage via API), #12377 (cost tracking RFC) — users want programmatic access to spend, including subagent aggregation and multi-model accuracy.
- **Session lifecycle management**: #24153 (unarchive/restore) — one-way archiving is the top UX complaint; users want visibility and recovery of archived conversations.
- **Quota-aware resilience**: #43324 (per-provider quota-aware auto-retry with configurable reset schedule) — extends the retry-after header logic to handle free-tier quotas smarter.
- **MCP overhead reduction**: #35376 (lazy-load MCP tool definitions) — with 9+ MCP servers, token overhead from all tool definitions becomes a real cost/context problem. Closed, but direction is clear.
- **Reliability of free-tier models**: #43829/#43805 (DeepSeek flash free missing) — users want free-model availability to be truthful in UI (don't show in API if not in dropdown, or vice versa).

## Developer Pain Points

- **Abrupt/stuck responses** — The single biggest frustration cluster: #38749, #34473, #43924, #43951 all describe agents stopping mid-response with no error or looping silently on `unknown` finish reasons. The v1.18.21 fix for dropped streams (#43892) traded one bug for another (#43939).
- **Permission prompt invisibility** (#41847) — Blocked backend waiting on never-rendered dialogs is a severe reliability issue, likely affecting CI/headless users most. 3,270 phantom prompts is a scary stat.
- **Hidden/ignored configuration** — Model options (reasoning effort) not reflected in Web UI (#17588), provider-injected params breaking third-party gateways (#43911), and Git ignore rules being bypassed in indexing (#43987) all point to "your config doesn't mean what you think it means."
- **Multi-subagent TUI degradation** (#42657) — 97% CPU on render thread with 2–4 concurrent subagents makes the tool unusable for power workflows; the issue is terminal-independent, pointing to core TUI renderer issues.
- **Desktop freeze on large diffs** (#30906) — Electron renderer locks up on large file diffs is a regression from v1.15.13; community wants to see a revert or a proper virtualized diff view.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# PI Community Digest — 2026-08-22

## Today's Highlights

The Pi project has seen a surge of activity around provider compatibility, with several closed issues addressing OpenRouter-specific failures including reasoning-mandatory endpoints and mid-stream truncation handling. A critical bug report highlights that auto-compaction fails to trigger until provider overflow, causing sessions to exceed context limits by 60%+ before forced termination. The TUI team has moved to fix fullscreen double-click word selection, which incorrectly splits paths on `/` and `-` boundaries.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#6879 — Auto-compaction never triggers until provider overflow](https://github.com/earendil-works/pi/issues/6879)** — A critical bug in long-running agentic sessions where context grows past 100% without compaction kicking in. The reporter documented a 2-hour GPT-5.6-sol session that reached 373k tokens before API rejection. Community strongly agrees (17 👍), requesting compaction checks after every agentic turn rather than on fixed intervals.

2. **[#2733 — Backspace/Delete keys broken in Windows Terminal](https://github.com/earendil-works/pi/issues/2733)** — Long-standing issue (since March) still affecting users after upgrading from 0.62.0 to 0.64.0. Key input handling regression specifically in Windows Terminal, with 11 comments but no confirmed fix yet.

3. **[#7130 — Backspace deletes 2 chars in Kitty](https://github.com/earendil-works/pi/issues/7130)** — A related terminal input bug where Kitty protocol release events aren't filtered, causing double-character deletion. Underscores the broader theme of terminal compatibility challenges.

4. **[#7995 — No `cacheControlFormat: 'anthropic'` support in openai-responses](https://github.com/earendil-works/pi/issues/7995)** — Filed on behalf of OpenRouter's Luke Parke from an 870-trial benchmark. Missing Anthropic-style prompt caching results in a **2.5x cost penalty** for Claude models via OpenRouter responses. Significant cost implications for heavy users.

5. **[#7553 — Configurable thinking level/model for compaction](https://github.com/earendil-works/pi/issues/7553)** — Compaction cannot have its own thinking level separate from the session. For reasoning-model users, this makes summarization budgets inseparable from normal turns. Marked `inprogress`.

6. **[#8134 — Agent hangs on plain-HTTP provider through forward proxy](https://github.com/earendil-works/pi/issues/8134)** — Since 0.84.0, sessions against `http://` providers fail after the first tool result when `HTTP_PROXY` is set. First model call succeeds, then hangs on the follow-up request — a regression that's particularly painful for local/self-hosted setups.

7. **[#8456 — Gemini 3.7 Flash rejects `/tree` summarization with MINIMAL thinking](https://github.com/earendil-works/pi/issues/8456)** — Recent bug (2026-08-21) where branch-summary requests don't include `reasoning`, but Gemini 3.7 requires it. Selected Summarize after `/tree` fails before navigation.

8. **[#7779 — 0600 file permissions prevent shared PI_CODING_AGENT_DIR](https://github.com/earendil-works/pi/issues/7779)** — `auth.json` and `models-store.json` written with mode `0600` means only the first user can access shared state. Blocks multi-user trust scenarios on Unix systems.

9. **[#8452 — Improve default compaction prompt for continuation-state fidelity](https://github.com/earendil-works/pi/issues/8452)** — Community suggestion that compaction should merge, deduplicate, and reconcile continuation state rather than just preserving readable prose. Distinguishes directly observed results from inferred conclusions.

10. **[#8183 — Windows Terminal Ctrl+Shift+F conflicts with fullscreen search](https://github.com/earendil-works/pi/issues/8183)** — Documentation request to address the Ctrl+Shift+F conflict between fullscreen transcript search and Windows Terminal's own Find shortcut. Simple UX improvement targeting discoverability.

## Key PR Progress

1. **[#8459 — Fix fullscreen double-click word selection](https://github.com/earendil-works/pi/pull/8459)** — Fixes `Intl.Segmenter` treating `/` and `-` as boundaries. Double-clicking a path now selects the entire path instead of single components. Directly addresses issue #7746.

2. **[#8428 — Re-pair tool results when rebuilding session context](https://github.com/earendil-works/pi/pull/8428)** — Fixes session-corruption bug (#8166) where tool results get unpaired after resume, compaction, or branch navigation. Orphaned results are discarded during the rebuild.

3. **[#8422 — Omit reasoning effort for xAI Grok Build](https://github.com/earendil-works/pi/pull/8422)** — xAI rejects `grok-build-0.1` requests including `reasoning.effort`. Adds a compatibility flag so Pi doesn't send this field for Grok Build. Currently open.

4. **[#8424 — Discard failed extension factory state](https://github.com/earendil-works/pi/pull/8424)** — Prevents half-initialized extension state when a factory throws or rejects. Stages defaults and provider operations until loading completes, and removes event-bus listeners on failure. Currently open.

5. **[#8433 — Add `--exclude-extensions` flag](https://github.com/earendil-works/pi/pull/8433)** — Extension loading is all-or-nothing today. This adds "my normal extension set, minus these" — solving the third-party guard problem where you can't exclude an extension you don't own. Merged.

6. **[#8443 — Share via Radius artifacts under experimental](https://github.com/earendil-works/pi/pull/8443)** — Makes `/share` use Radius artifacts instead of gist when the experimental flag is set. Triggers auth flow if not logged in, then generates artifact. Closed (not merged).

7. **[#8232 — Dev branch (DON'T MERGE)](https://github.com/earendil-works/pi/pull/8232)** — Still open and explicitly marked "for CI and commenting." Not a feature PR, but visible in activity.

## Feature Request Trends

- **Provider flexibility**: Recurring requests for more providers (Parasail.io #8450, SiliconFlow #4742) and better adapter compatibility with provider-specific quirks. Each adds complexity — the response surface is getting fragmented.

- **Compaction control**: Multiple requests for per-model compaction settings (#8133), configurable thinking levels (#7553), and explicit full-span manual compaction (#8453). Context management is a top pain point.

- **Input/keyboard ergonomics**: Terminal-specific fixes (Windows, Kitty, Termux) plus making `/exit` alias `/quit` (#6193) and skills invocable mid-sentence (#8457). Small UX wins that add up.

- **Session fidelity**: Focus on robust session rebuilds, continuation-state preservation in compaction prompts (#8452), and tool-result re-pairing (#8428). Core reliability concerns.

- **Auth and sharing**: Provider login in RPC mode (#8451), Bedrock IMDS/MMDS credential support (#8455), and Radius artifact sharing (#8443) — broadening access paths beyond interactive TUI.

## Developer Pain Points

- **Context window mismanagement**: The #6879 report (compaction never triggering until overflow) is the clearest signal. Long-running agents are hitting hard provider limits and losing work. The community wants proactive checks, not reactive failure.

- **Terminal input inconsistencies**: Backspace issues span Windows Terminal (#2733), Kitty (#7130), and herdr panes (#8442). For a TUI-first tool, broken key handling is a daily annoyance that erodes trust.

- **Provider-specific quirks breaking flows**: From Gemini's MINIMAL thinking rejection (#8456) to xAI's Grok Build reasoning effort rejection (PR #8422) to OpenRouter's reasoning-mandatory endpoints (#8454) — each adapter quirk adds friction. The `detectCompat()` heuristics aren't keeping up.

- **Proxy and infrastructure friction**: Plain-HTTP through forward proxies (#8134) and cert validation errors (#8458) point to environments where developers run local models behind corporate infrastructure. These users are hitting edge cases that stall entire sessions.

- **Extension isolation**: The `--exclude-extensions` request and the "failed extension factory state" fix show that extension ecosystems are getting complex enough that all-or-nothing loading isn't sustainable.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-22

## Today's Highlights

The Qwen Code team continues to prioritize review-loop quality and CI/CD security hardening, with multiple review-infrastructure PRs from @wenshao and a new CVE audit blocker (#9699) addressed by an automated dependency-bump PR (#9703). The community is actively reporting Windows-specific MCP stability issues, while several UI polish fixes for the web shell and VS Code companion are making steady progress.

## Releases

**v0.21.14-nightly.20260822.7a4566cb3b** — Nightly release including:
- `feat(review)`: tell the author why a review loop is not settling ([PR #9461](https://github.com/QwenLM/qwen-code/pull/9461))

Additionally, two benchmark smoke results were published against `Benchmark-Qwen-Ref: v0.21.15`:
- `dsw-eas-tb-smoke-20260821-r1`: SWE-bench Verified + Terminal-Bench smoke — **SUCCEEDED**
- `dsw-eas-full-20260821-r1`: Full SWE-bench Verified (500) + Terminal-Bench 2.0 (89) — **SUCCEEDED**

## Hot Issues (Top 10)

1. [**#9699**](https://github.com/QwenLM/qwen-code/issues/9699) — **CVE audit fails on every PR** (P1, security). `npm audit` reports 8 vulnerabilities (1 high) blocking all PRs since 2026-08-21. Community impact is critical; 4 comments.

2. [**#9556**](https://github.com/QwenLM/qwen-code/issues/9556) — **Security: code execution as invoking user** (security, CI/CD). Maintainer @wenshao raises unresolved findings from 20 review rounds—whether the pipeline should keep granting code execution as the invoking user. 7 comments, ongoing debate.

3. [**#5180**](https://github.com/QwenLM/qwen-code/issues/5180) — **Subagent crashes mid-task** (P2, long-context). User reports main-session/subagent delegation breaking mid-execution after 12h13m sessions; 7 comments.

4. [**#8993**](https://github.com/QwenLM/qwen-code/issues/8993) — **Git 2.37 requirement blocks Ubuntu 22.04** (P2, closed). Extension installs fail on Jammy's 2.34.1; 6 comments, marked ready-for-human.

5. [**#5966**](https://github.com/QwenLM/qwen-code/issues/5966) — **Chinese IME completely broken in TUI** (P2, UI). Ongoing input-method failure with no error output; 6 comments, still open.

6. [**#9089**](https://github.com/QwenLM/qwen-code/issues/9089) — **PAT-bearing jobs share host with untrusted code** (P1, security, closed). Runner-level isolation needed for autofix; 6 comments.

7. [**#9693**](https://github.com/QwenLM/qwen-code/issues/9693) — **MCP -32000 connection closed on Windows startup** (P2, MCP). Desktop app fails on STDIO transport even when MCP is off; 4 comments.

8. [**#9446**](https://github.com/QwenLM/qwen-code/issues/9446) — **Residual gaps in live-service witness arm** (P2, review infrastructure). Follow-up on verifier capability gaps; 4 comments.

9. [**#2862**](https://github.com/QwenLM/qwen-code/issues/2862) — **Startup hangs with checkpointing enabled** (bug). Indefinite "Initializing…" hang; 3 comments, needs triage.

10. [**#1212**](https://github.com/QwenLM/qwen-code/issues/1212) — **General-purpose subagent over-triggering** (UX). Users want opt-out; 3 comments.

## Key PR Progress (Top 10)

1. [**#9703**](https://github.com/QwenLM/qwen-code/pull/9703) — `fix(ci)`: Bump vulnerable dependencies via `npm audit fix --package-lock-only` to unblock CVE audit. Only lockfile changes; direct response to #9699.

2. [**#9621**](https://github.com/QwenLM/qwen-code/pull/9621) — `feat(review)`: Back PR-context on Aone Code targets—extends `/review` metadata fetching beyond GitHub.

3. [**#9678**](https://github.com/QwenLM/qwen-code/pull/9678) — `perf(review)`: Give review agents a dedicated `review-agent` subagent type (6 tools) instead of `general-purpose` (all tools). Cuts tool surface.

4. [**#9702**](https://github.com/QwenLM/qwen-code/pull/9702) — `fix(vscode-ide-companion)`: Anchor model selector dropdown to input form, fixing viewport-fixed overlay issues.

5. [**#9602**](https://github.com/QwenLM/qwen-code/pull/9602) — `fix(core)`: Clear tool display list before completion callback, plus regression test (autofix/needs-human).

6. [**#9607**](https://github.com/QwenLM/qwen-code/pull/9607) — `fix(core)`: Demote balanced inline thinking blocks on OpenAI-compatible endpoints instead of failing the turn (hybrid-thinking streams).

7. [**#9653**](https://github.com/QwenLM/qwen-code/pull/9653) — `refactor(autofix)`: Move push-and-report body out of workflow YAML into a script; byte-identical, cleaner CI.

8. [**#9668**](https://github.com/QwenLM/qwen-code/pull/9668) — `fix(core)`: Detect long verbatim repetition loops (>75 chars) in content and reasoning streams.

9. [**#9667**](https://github.com/QwenLM/qwen-code/pull/9667) — `fix(web-shell)`: Route goal messages by session activity (idle vs running), fail-closed for slash commands.

10. [**#9576**](https://github.com/QwenLM/qwen-code/pull/9576) — `feat(core)`: Cross-session inbound messages via UNIX domain socket, gated by policy (autofix/takeover, needs-human).

## Feature Request Trends

- **Session management (daemon)**: Restoring per-session model choice ([#9686](https://github.com/QwenLM/qwen-code/issues/9686)) and unanswered HITL questions on resume ([#9664](https://github.com/QwenLM/qwen-code/issues/9664)).
- **Configurable permissions**: Plan-mode read-only command allowlist for custom CLIs ([#9694](https://github.com/QwenLM/qwen-code/issues/9694)).
- **UI polish**: Expanded detail mode by default for thinking blocks ([#9670](https://github.com/QwenLM/qwen-code/issues/9670)).
- **Multi-channel integrations**: DingTalk Workspace channel ([#9394](https://github.com/QwenLM/qwen-code/pull/9394)) and session rotation bounds ([#8927](https://github.com/QwenLM/qwen-code/pull/8927)).

## Developer Pain Points

- **Windows MCP instability**: Repeated reports of STDIO transport disconnects ([#9693](https://github.com/QwenLM/qwen-code/issues/9693), [#9675](https://github.com/QwenLM/qwen-code/issues/9675))—needs retesting after fix attempts.
- **IME/input issues**: Chinese IME failures in both TUI ([#5966](https://github.com/QwenLM/qwen-code/issues/5966)) and low-contrast candidate boxes ([#9666](https://github.com/QwenLM/qwen-code/issues/9666)).
- **CI security debt**: Multiple rounds on PAT isolation ([#9089](https://github.com/QwenLM/qwen-code/issues/9089)), execution as invoking user ([#9556](https://github.com/QwenLM/qwen-code/issues/9556)), and CVE audit blocking PRs ([#9699](https://github.com/QwenLM/qwen-code/issues/9699)).
- **Session lifecycle bugs**: Archiving live sessions conflicts ([#9688](https://github.com/QwenLM/qwen-code/issues/9688)), startup hangs with checkpointing ([#2862](https://github.com/QwenLM/qwen-code/issues/2862)).
- **Subagent over-triggering and crashes**: General-purpose subagent firing frequently ([#1212](https://github.com/QwenLM/qwen-code/issues/1212)) and crashing mid-task ([#5180](https://github.com/QwenLM/qwen-code/issues/5180)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-22

## Today's Highlights
Hmbown/CodeWhale (formerly DeepSeek-TUI) remains highly active as the Rust-based TUI ecosystem pivots toward **machine-readable supervision**. M-Maciej's PR #5535 — a five-part "supervised operation stack" — consolidates lifecycle outboxes, `/relaunch` functionality, per-session control sockets, and a goal-continuation cadence fix, signaling a clear direction toward external automation, CI, and multiplexer-driven workflows. Notably, aboimpinto's CRATE decomposition epic (#5316) continues to drive under-the-hood refactoring of the command architecture, simplifying what appears to be a massive codebase overhaul. On the community side, a dependency update to `rmcp` (2.2.0 → 3.1.2) and a vision-model feature request highlight both an evolving MCP toolchain and a push for multimodal DeepSeek model support.

## Releases
No new releases published in the last 24 hours.

## Hot Issues
1. **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** — [#5316](https://github.com/Hmbown/CodeWhale/issues/5316)  
   *aby aboimpinto* · 11 comments  
   The meta-issue tracking the refactoring of the TUI crate into defined components. All sub-EPICs and FEATs report here; it represents the single largest architectural initiative in the project from the past week.

2. **Deprecated shell completion on PowerShell** — [#5526](https://github.com/Hmbown/CodeWhale/issues/5526)  
   *by RepentStar* · 4 comments  
   The `codewhale completions` command generates outdated scripts that still trigger `codewhale-tui` as the underlying binary. Community member wuisabel-gif submitted a fix in PR #5530, addressing the staleness and redirecting through the public `codewhale` binary.

3. **[enh] DeepSeek-V4-Flash-Vision-Exp** — [#5541](https://github.com/Hmbown/CodeWhale/issues/5541)  
   *by M-Maciej* · 1 comment  
   Request to add the first multimodal DeepSeek model ("vision") to the `/model` list. As flagged, vision support would open up website/design-related workflows; impact is described as "huge."

4. **[bug] Goal-continuation quiet period bypassed on within-turn dispatch** — [#5534](https://github.com/Hmbown/CodeWhale/issues/5534)  
   *by M-Maciej* · 1 comment  
   The `continuation_delay_seconds` config introduced by commit `7eb4650b` is ignored on the within-turn dispatch path, causing resumed/CLI sessions to fire passes instantly instead of respecting the quiet period.

5. **[enh] Control surface for supervised operation** — [#5533](https://github.com/Hmbown/CodeWhale/issues/5533)  
   *by M-Maciej* · 1 comment  
   Proposes a per-session control socket (message / interrupt / relaunch / status) plus a `RuntimeBackendKind::External` trait to make it easier for terminal multiplexer wrappers, automation harnesses, and CI to drive sessions without a human at the screen.

6. **[enh] `/relaunch` — switch running session to current binary** — [#5532](https://github.com/Hmbown/CodeWhale/issues/5532)  
   *by M-Maciej* · 1 comment  
   `codewhale /update` installs a new binary then demands a manual app restart. Proposes `relaunch` to self-exec/replace in-place, skipping the manual restart step while the TUI holds the terminal.

7. **[enh] Local lifecycle event outbox (JSONL + webhook)** — [#5531](https://github.com/Hmbown/CodeWhale/issues/5531)  
   *by M-Maciej* · 1 comment  
   Advocated for opt-in `turn_stalled` / `turn_failed` events via JSONL or webhook, so external supervisors (e.g., `herdr`) can alert on unattended long-running sessions — avoiding "no human at the screen" blind spots.

8. **Sub-agents can't reliably execute shell commands** — [#5529](https://github.com/Hmbown/CodeWhale/issues/5529)  
   *by Hmbown*  
   Three failure modes: wall-time budget deaths lose uncommitted work; provider-route failures block dispatch; shell tooling needs workarounds. Core Fleet value proposition ("delegated execution") is effectively unusable.

9. **Workflow runs fail silently in TUI** — [#5528](https://github.com/Hmbown/CodeWhale/issues/5528)  
   *by Hmbown*  
   Dispatch/schema errors at script-evaluation time produce no visual feedback (no toast, no status line, no workflow panel entry). From operator's perspective it looks like work is happening while it's actually broken.

10. **Privacy controls: `.codewhaleignore`** — [#4069](https://github.com/Hmbown/CodeWhale/issues/4069)  
    *by Hmbown* · 1 comment  
    Long-running enhancement request for a first-class ignore file to exclude secrets, vendor trees, and local artifacts from search and context assembly — analogous to Cursor's `.cursorignore`.

## Key PR Progress
1. **PR #5535: Supervised operation stack & goal-continuation quiet-period fix** — [view](https://github.com/Hmbown/CodeWhale/pull/5535)  
   *by M-Maciej*  
   Closes the gap between the four "supervised operation" epics: lifecycle outbox, `/relaunch`, per-session control socket, and the `continuation_delay_seconds` bypass.

2. **PR #5530: Route legacy completions through public binary** — [view](https://github.com/Hmbown/CodeWhale/pull/5530)  
   *by wuisabel-gif*  
   Fixes #5526: `codewhale completions <shell>` now uses the canonical `codewhale completion <shell>` generator and outputs scripts referencing `codewhale`, not the TUI binary.

3. **PR #5525: Refactor TUI utility group to external command shapes (FEAT-018)** — [view](https://github.com/Hmbown/CodeWhale/pull/5525)  
   *by aboimpinto*  
   Converts the seven utility command files to the external command shapes introduced by FEAT-014 & FEAT-015, changing execution boundary without physical relocation.

4. **PR #5524: Multi-file `read_lints` operation** — [view](https://github.com/Hmbown/CodeWhale/pull/5524)  
   *by wuisabel-gif*  
   Extends the model-visible `lsp` tool with a `read_lints` operation that targets multiple existing workspace-relative files, reusing the existing `LspManager` transport pool to avoid a second language-server lifecycle.

5. **PR #5523: Extract tool call stages from turn loop** — [view](https://github.com/Hmbown/CodeWhale/pull/5523)  
   *by bistack*  
   Separates planning, approval/execution, and result projection into distinct functions (`plan_tool_calls`, `execute_planned_tools`, `process_tool_results`) while preserving control order, cancellation, and state flow.

6. **PR #5540: Bump `similar` from 3.1.2 → 3.2.0** — [view](https://github.com/Hmbown/CodeWhale/pull/5540)  
   *by dependabot[bot]*  
   Structured, line-oriented diff improvements in the `similar` crate; likely improves TUI diff/change viewers and context rendering.

7. **PR #5539: Bump `rio-vt` from 0.5.19 → 0.5.25** — [view](https://github.com/Hmbown/CodeWhale/pull/5539)  
   *by dependabot[bot]*  
   Six minor VT-terminal parsing fixes/releases — valuable for maintaining robust terminal emulation under the TUI.

8. **PR #5390: Bump `rmcp` from 2.2.0 → 3.1.2** — [view](https://github.com/Hmbown/CodeWhale/pull/5390)  
   *by dependabot[bot]*  
   Major Rust MCP SDK version jump (many breaking changes between 2.x and 3.x). Community will want careful review before merge, as it could affect MCP client behavior.

9. **PR #5538: Bump `jsonschema` from 0.46.10 → 0.49.9** — [view](https://github.com/Hmbown/CodeWhale/pull/5538)  
   *by dependabot[bot]*  
   Updated JSON schema validator for workflow/schema evaluation; probably fixes underlying "silent workflow run" issues and adds performance/spec compliance.

10. **PR #5537: Bump `docker/setup-buildx-action` 4.2.0 → 4.3.0** — [view](https://github.com/Hmbown/CodeWhale/pull/5537)  
    *by dependabot[bot]*  
    CI dependency bump for the buildx action, aligning with the project's otherwise Rust-focused toolchain.

## Feature Request Trends
- **Supervised / headless operation (dominant this week).** Multiple PRs and issues (#5531, #5532, #5533, #5535) all point toward making CodeWhale usable from a terminal multiplexer, CI, or external automation harness — with explicit lifecycle events, control sockets, and quiet-period tuning.
- **Multimodal model support.** #5541 requests DeepSeek-V4-Flash-Vision-Exp and marks it as a potential "huge" impact for website/design tasks.
- **Privacy-aware indexing.** #4069 requests `.codewhaleignore` to match Cursor's `.cursorignore` semantics for excluding sensitive paths from search and context assembly.
- **Self-update UX polish.** #5532 wants `/relaunch` so updates don't require the interactive restart step.

## Developer Pain Points
- **Silent failures bottleneck debugging.** #5528 (workflow runs failing silently) and #5529 (sub-agents failing without surfacing errors) both highlight that the TUI gives almost no visibility into backend execution issues — no toasts, no status lines, no workflow-panel entries.
- **Supervision gaps for unattended runs.** #5531 and #5533 describe running long-lived sessions with no human present — and currently having no way to detect `turn_stalled` or `turn_failed` conditions, leaving operators blind.
- **Legacy/inconsistent command routing.** #5526 shows shell completion scripts are still pointing to `codewhale-tui`, and the docs don't explain how to fix it — a small but irritating friction point for PowerShell users.
- **Updater requires manual restart.** #5532 notes the project's own design notes admit there's no self-exec/relaunch pattern; telling users to restart a TUI-holding-terminal is "not a small change," which frustrates anyone relying on `/update` in long-lived sessions.
- **Dispatcher reliability.** #5529 names provider-route failures blocking sub-agent dispatch and wall-time budget deaths losing uncommitted work — both root-cause issues experienced in production today.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*