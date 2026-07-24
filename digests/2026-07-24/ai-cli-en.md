# AI CLI Tools Community Digest 2026-07-24

> Generated: 2026-07-24 02:47 UTC | Tools covered: 9

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

# AI CLI Developer Tools Ecosystem: Cross-Tool Comparison Report
**Date:** 2026-07-24

---

## 1. Ecosystem Overview

The AI CLI tools landscape on July 24, 2026 shows a field in active tension between reliability and feature velocity. Seven major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI—are all grappling with similar growing pains: connection instability, Windows platform regressions, and MCP integration fragility. A clear bifurcation is emerging between established tools focused on stabilization (Claude Code, Codex) and newer entrants aggressively adding features (Pi, Qwen Code, DeepSeek TUI). The ecosystem is converging around agentic loop improvements, session management, and plugin ecosystems, while each tool differentiates on model provider support, platform maturity, and security architecture.

---

## 2. Activity Comparison

| Tool | Hot Issues | PRs (24hr) | Release Status | Key Reliability Signals |
|------|-----------|------------|----------------|------------------------|
| **Claude Code** | 10 active | 4 open | Stable v2.1.218, no new release | Connection errors (#5674, 47👍), billing regression (#79337) |
| **OpenAI Codex** | 10 active | 10 merged | 2 alpha releases (0.146.0) | Windows CPU exhaustion (#34879), WMI abuse (#34260) |
| **Gemini CLI** | 10 active | 10 merged | No new release | Agentic loop stagnation (#22415, 27👍), infinite auth loop fixed |
| **GitHub Copilot CLI** | 10 active | 2 (minor) | v1.0.74 + v1.0.74-4 patched | Ctrl+C regression (#4235), memory leak (#4199) |
| **Kimi Code CLI** | 5 noteworthy | 15 merged | v0.29.0, no new release | Plugin crash (#2553), MCP session reuse fix |
| **OpenCode** | 10 active | 10 merged | No new release | TUI crashes, reconnect-herd spikes |
| **Pi** | 10 active | 10 merged/active | v0.81.1, no new release | Clipboard failures (#6872, #7012), hot-reload regression |
| **Qwen Code** | 10 active | 10 open | Nightly v0.20.1 | Update check failures (npm 12), E2E flakiness debate |
| **DeepSeek TUI** | 10+ filed today | 5 open | Blocked (v0.9.1 gate) | TUI crash on launch (#4716), systemic state corruption |

**PR Velocity Leaders:** Kimi Code CLI (15 merged), OpenAI Codex (10 merged), Gemini CLI (10 merged), OpenCode (10 merged)

**Release Cadence:** GitHub Copilot CLI shipped 2 patches; OpenAI Codex shipped 2 alphas; others stable with no new releases.

---

## 3. Shared Feature Directions

| Requirement | Affected Tools | Specific Needs |
|-------------|----------------|----------------|
| **Multi-session / Multi-agent management** | Claude Code, Codex, Gemini CLI, Copilot CLI, Kimi, OpenCode | Remote control from Desktop, session renaming, MCP process pooling, project-scoped state |
| **MCP Ecosystem Maturation** | Claude Code, Codex, Copilot CLI, Kimi, Qwen Code, DeepSeek TUI | Session identifiers, tool cap fixes, timeout handling, plugin isolation |
| **Windows Platform Parity** | Claude Code, Codex, Copilot CLI, Kimi, Pi, DeepSeek TUI | UTF-8 encoding, process management, sandbox compatibility, keyboard layouts |
| **Agentic Loop Reliability** | Claude Code, Gemini CLI, Copilot CLI | Stagnation detection, Ctrl+C interrupt, infinite reasoning prevention |
| **Context Window Management** | Claude Code, Codex, Copilot CLI | Compaction reliability, token usage visibility, raw-text fallback |
| **OpenTelemetry / Observability** | Claude Code, Qwen Code | Git context in traces, ARMS telemetry alignment |
| **Provider Model Flexibility** | Pi, Qwen Code, OpenCode, Gemini CLI | Model hot-reload, reasoning tier mapping, auto-discovery |
| **Security Hardening** | DeepSeek TUI, Claude Code, Pi | Path matching case sensitivity, permission model audits, sandbox bypasses |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|--------------|------------|-------------|-----------|----------|----|-----------|---------------|
| **Primary Model** | Anthropic Fable/Opus | OpenAI | Gemini 3.1-pro | GitHub Copilot | MoonshotAI Kimi | Multi-provider | Multi-provider | Qwen | DeepSeek |
| **Target Users** | Pro/Enterprise devs | Platform builders | Google ecosystem | GitHub ecosystem | Asian market | Open-source community | Plugin developers | Enterprise (Alibaba) | Security-conscious |
| **Platform Maturity** | Strong macOS, weaker WSL | Windows regressions | Cross-platform OK | Good | Windows improving | Cross-platform | Linux-first | Linux/Server | Cross-platform |
| **Unique Strength** | Rich MCP + hook system | WebSocket transport | Security-focused PRs | Plugin spec v1, ACP | High PR velocity | Model auto-discovery | RPC infrastructure | Channel management | Tool sandboxing |
| **Key Weakness** | Connection instability | Windows CPU storms | Model instability | Session corruption | Plugin fragility | Sub-process orphans | Clipboard failures | E2E flakiness | Release blocked |

---

## 5. Community Momentum & Maturity

**High Momentum / Rapid Iteration:**
- **OpenCode** – Most active feature request (187👍 for model discovery), strong PR velocity, deep architecture work (protocol-neutral migration). Community is vocal about UI preferences and session management.
- **Qwen Code** – 10 open PRs spanning channels, media support, telemetry. Enterprise-focused roadmap with nightly releases. Community engaged on test strategy and configuration reliability.
- **Pi** – 22 PRs in 24hrs, maintainer mitsuhiko directly fixing community-reported regressions. Strong extension/plugin ecosystem focus with RPC infrastructure.
- **Kimi Code CLI** – 15 PRs merged in one day, aggressive Windows fixes, growing Asian-market community. Financial quant discussions signal niche expansion.

**Stable / Mature (Stabilization Phase):**
- **Claude Code** – Largest community (47👍 on top bug), but slowing PR velocity. Focused on billing fixes and reliability. Feature requests show enterprise OTel and session management needs.
- **OpenAI Codex** – Heavy PR activity but alpha releases suggest active development. Windows issues dominate community pain. WebSocket transport signals new architecture direction.
- **Gemini CLI** – Strong security focus (TOCTOU, auth loops), stagnation detection. "Caretaker" automation improves triage. Community frustrated with model instability.

**Growth / Early Stage:**
- **DeepSeek TUI** – Blocked v0.9.1 release, 10+ critical bugs filed today. Systemic state corruption and security bypasses suggest need for architectural maturity. Community is technically engaged but small.
- **GitHub Copilot CLI** – Recent v1.0.74 patches stabilized; Ctrl+C regression is a critical regression but community engagement is lower than codex/claude. Plugin spec v1 is a positive signal.

---

## 6. Trend Signals

1. **Convergence on Agentic Loop Architecture:** Every tool is investing in stagnation detection, interruption handling, and sub-agent lifecycle management. This is the defining infrastructure challenge—reliable autonomous code agents remain unsolved.

2. **MCP as the Universal Plugin Standard:** MCP (Model Context Protocol) is being adopted across all major tools, but each struggles with: tool limits (256), session identifiers, timeout handling, and platform-specific bugs. The protocol's maturity varies by tool.

3. **Windows as the Weakest Link:** Every cross-platform tool reports Windows-specific regressions—CPU saturation, encoding issues, process management, sandbox bypasses. This is the single largest platform friction point for the ecosystem.

4. **Security Is Becoming Table Stakes:** DeepSeek TUI's security gate, Gemini's TOCTOU fixes, Pi's wl-copy fix train, and Claude Code's permission model issues all signal that enterprise adoption demands proper sandboxing, auth handling, and audit trails.

5. **Asia-Pacific Tools Are Catching Up:** Kimi Code (15 PRs), Qwen Code (10 PRs), and DeepSeek TUI (active debugging) show strong engineering velocity. Expect these to close the feature gap with Western tools within 2-3 quarters.

6. **The "Headless Agent" Use Case Is Growing:** Multiple tools (Claude Code, Qwen Code, Pi) are investing in remote control, RPC infrastructure, and headless execution. Developers want to run agents in CI/CD, background workers, and mobile companion apps.

7. **Testing Strategy Under Debate:** Qwen Code's E2E flakiness debate (#7616) and OpenCode's tool snapshot fixes highlight a growing recognition that model-dependent testing is fragile. The industry may shift toward deterministic evaluation suites.

---

**Bottom Line for Decision-Makers:**
- **For stability:** Claude Code (mature ecosystem, but watch connection issues) or GitHub Copilot CLI (patched, but Ctrl+C regression)
- **For velocity:** Kimi Code CLI (most PRs, Windows progress) or OpenCode (strong community, model auto-discovery)
- **For security-first:** Gemini CLI (TOCTOU fix, stagnation detection) or DeepSeek TUI (tool sandboxing, but blocked release)
- **For enterprise:** Qwen Code (channel management, ARMS telemetry) or Claude Code (OTel, MCP session identifiers)
- **For plugin/extensibility:** Pi (RPC, extension ecosystem) or GitHub Copilot CLI (Plugin Spec v1)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Snapshot:** 2026-07-24 | **Source:** github.com/anthropics/skills

---

## 1. Top Skills Ranking (by Discussion Activity)

### #1 — skill-creator: `run_eval.py` recall bug (#1298)
**Status:** Open | **Author:** MartinCajiao | [PR Link](https://github.com/anthropics/skills/pull/1298)

A critical fix for the skill-creation toolchain. `run_eval.py` reports `recall=0%` for every skill description — effectively rendering the description-optimization loop (used by `run_loop.py` and `improve_description.py`) useless. The fix installs eval artifacts properly, handles Windows stream reads, fixes trigger detection, and adds parallel worker support. **This is the most actively discussed PR because the bug impacts anyone developing skills.**

---

### #2 — document-typography skill (#514)
**Status:** Open | **Author:** PGTBoos | [PR Link](https://github.com/anthropics/skills/pull/514)

A quality-control skill targeting typographic defects in AI-generated documents: orphan word wrap (1–6 stranded words), widowed section headers, and numbering misalignment. The discussion highlights broad demand — "these issues affect every document Claude generates" — and interest in configurable typographic rules for enterprise document pipelines.

---

### #3 — fix(pdf): case-sensitive file references (#538)
**Status:** Open | **Author:** Lubrsy706 | [PR Link](https://github.com/anthropics/skills/pull/538)

Corrects 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` where `REFERENCE.md` and `FORMS.md` were referenced in uppercase but exist as lowercase `reference.md` and `forms.md`. Breaks on case-sensitive filesystems (Linux, macOS). Discussion shows community attention to cross-platform portability and documentation correctness.

---

### #4 — ODT skill — OpenDocument text creation (#486)
**Status:** Open | **Author:** GitHubNewbie0 | [PR Link](https://github.com/anthropics/skills/pull/486)

Comprehensive skill for creating, filling, reading, and converting OpenDocument Format files (.odt, .ods). Triggers on "ODT", "ODS", "ODF", "OpenDocument", "LibreOffice document". Discussion centers on LibreOffice interoperability, template filling, and ODT-to-HTML conversion — reflecting enterprise demand for open-source office format support.

---

### #5 — skill-quality-analyzer + skill-security-analyzer (#83)
**Status:** Open | **Author:** eovidiu | [PR Link](https://github.com/anthropics/skills/pull/83)

Two meta-skills for the marketplace: (1) a quality analyzer evaluating skills across Structure & Documentation (20%), and (2) a security analyzer. Discussion highlights community interest in skill validation tools — users want guarantees before deploying community-contributed skills.

---

### #6 — self-audit skill — mechanical + reasoning quality gate (#1367)
**Status:** Open | **Author:** YuhaoLin2005 | [PR Link](https://github.com/anthropics/skills/pull/1367)

A v1.3.0 skill that performs mechanical file verification followed by a four-dimension reasoning audit (damage-severity prioritized). Universal across projects and models. Discussion focuses on the architecture of AI output verification and whether reasoning audit should be a separate skill family.

---

### #7 — testing-patterns skill (#723)
**Status:** Open | **Author:** 4444J99 | [PR Link](https://github.com/anthropics/skills/pull/723)

Covers the full testing stack: Testing Trophy model, AAA pattern, React component testing, mocking, snapshot testing, E2E with Playwright, and visual regression. Discussion highlights demand for opinionated testing guidance that enforces consistent patterns across codebases.

---

### #8 — color-expert skill (#1302)
**Status:** Open | **Author:** meodai | [PR Link](https://github.com/anthropics/skills/pull/1302)

A self-contained color expertise skill for any task involving color knowledge. Covers ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912, CSS named colors, and a color-space selection table (OKLCH for scales, OKLAB for gradients, CAM16 for perception). Discussion shows niche but strong interest from design tooling and data visualization communities.

---

## 2. Community Demand Trends (from Issues)

| Demand | Signal | Key Issue |
|--------|--------|-----------|
| **Social login / org-wide skill sharing** | 14 comments, 7 👍 | [#228](https://github.com/anthropics/skills/issues/228) — Direct skill sharing links for organizations |
| **Skill trust & security** | 43 comments, 2 👍 | [#492](https://github.com/anthropics/skills/issues/492) — Community skills under anthropic/ namespace enables trust boundary abuse |
| **Skill-creator toolchain reliability** | 12–15 comments across 3 issues | [#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169), [#1061](https://github.com/anthropics/skills/issues/1061) — 0% trigger rate, Windows incompatibility |
| **Deduplication of skill plugins** | 6 comments, 9 👍 | [#189](https://github.com/anthropics/skills/issues/189) — document-skills and example-skills install identical duplicates |
| **Agent governance & safety patterns** | 6 comments | [#412](https://github.com/anthropics/skills/issues/412) — policy enforcement, threat detection, audit trails |
| **Compact agent memory** | 9 comments | [#1329](https://github.com/anthropics/skills/issues/1329) — Symbolic notation for compact agent state, reducing context waste |
| **Bedrock / cloud deployment** | 4 comments | [#29](https://github.com/anthropics/skills/issues/29) — Skills usable with AWS Bedrock |
| **MCP integration** | 4 comments | [#16](https://github.com/anthropics/skills/issues/16) — Expose Skills as MCP servers |

**Most concentrated demand areas:**
- **Security & trust boundaries** (43 comments) — Community is alarmed by namespace impersonation risks
- **Skill-sharing infrastructure** (14 comments) — Org-wide distribution is a blocker for enterprise adoption
- **Toolchain reliability** (12–15 comments each) — Windows support and `run_eval.py` bugs dominate developer experience concerns

---

## 3. High-Potential Pending Skills (Active-comment PRs, Not Yet Merged)

| Skill | PR | Why It May Land Soon |
|-------|-----|----------------------|
| **self-audit** (#1367) | [Link](https://github.com/anthropics/skills/pull/1367) | Strong reasoning quality gate concept; v1.3.0 shows iterative maturity; 5 comments in 4 days |
| **color-expert** (#1302) | [Link](https://github.com/anthropics/skills/pull/1302) | Authoritative domain source (meodai is well-known in color tooling); low controversy |
| **testing-patterns** (#723) | [Link](https://github.com/anthropics/skills/pull/723) | Comprehensive; fills gap for quality engineering; started Mar 2026, still active |
| **pyxel** for retro game dev (#525) | [Link](https://github.com/anthropics/skills/pull/525) | Original Pyxel author kitao is the submitter; strong MCP integration |
| **skill-creator fixes** (#1298, #1323, #1099, #1050) | Multiple | Multiple contributors independently fixing the same `run_eval.py` recall bug — likely to merge once one solution is validated |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for skill-creation toolchain reliability (fixing the `run_eval.py` 0% recall bug) and trust infrastructure (namespace validation, security analysis, and quality gates), rather than for any single domain-specific skill.** The top 6 of the 8 most-discussed PRs are about tooling, validation, or infrastructure; only document-typography and color-expert are pure domain skills. This indicates the ecosystem is still in a **platform-stabilization phase** where contributors prioritize making skills development reliable and secure over expanding domain coverage.

---

# Claude Code Community Digest — 2026-07-24

## Today's Highlights

A major billing/access regression continues to dominate the tracker: **Fable 5** (the latest flagship model) is incorrectly gated behind "usage credits" for **Max plan** subscribers, with multiple open threads converging this week. Meanwhile, persistent **"Connection closed mid-response"** errors across macOS, Linux, and WSL remain the top reliability concern with 33+ comments and 65 upvotes. No new releases shipped in the last 24 hours, but four pull requests landed — including fixes for the `/ralph-loop` prompt-injection bug and GitHub pagination in the auto-close-duplicates script.

---

## Releases

**None in the last 24 hours.** The current stable version is **2.1.218** (shipped prior to this digest window). No release notes or changelogs were published in the past day.

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| [#5674](https://github.com/anthropics/claude-code/issues/5674) | **Persistent ECONNRESET Errors (macOS)** | 50 comments, 47 👍 — the highest-engagement open bug. Network connections fail only on macOS, not on Windows/Linux on the same network. Disconnects mid-task force session restarts. Community suspects macOS network stack mismatch with Anthropic's API TLS configuration. |
| [#79337](https://github.com/anthropics/claude-code/issues/79337) | **Fable 5 prompts "usage credits required" on Max plan** | 40 comments, 12 👍. Fable 5 became a standard Max-plan model on July 20, but sessions are silently downgraded to Opus 4.8 with a misleading credit-gate error. The highest-impact billing bug this week. |
| [#29006](https://github.com/anthropics/claude-code/issues/29006) | **Remote Control for Claude Code via Desktop App** | 114 👍 (highest-reacted feature request). Developers want to manage long-running Claude Code agents from the Desktop GUI. No official response yet. |
| [#69415](https://github.com/anthropics/claude-code/issues/69415) | **"Connection closed mid-response" — WSL/VSCode** | 33 comments, 65 👍. Frequent mid-response drops make the tool "unusable for any task." Users report it's worse in WSL2 + VSCode extension. |
| [#41836](https://github.com/anthropics/claude-code/issues/41836) | **No session identifier in MCP server requests** | 14 comments, 24 👍. MCP servers cannot distinguish concurrent Claude Code sessions, making per-conversation state management impossible. Blocking adoption for multi-session workflows. |
| [#64961](https://github.com/anthropics/claude-code/issues/64961) | **Opus 4.7/4.8 token usage regression 2-3x** | 10 comments, 5 👍. Users report token costs exploded after a recent update. Opus 4.8 also disconnects frequently, compounding cost frustration. |
| [#49985](https://github.com/anthropics/claude-code/issues/49985) | **Conversation duplicated multiple times in TUI (Windows)** | 8 comments, 22 👍. v2.1.112 introduced a visual rendering bug where the full conversation history appears N times stacked in the terminal. |
| [#79341](https://github.com/anthropics/claude-code/issues/79341) | **Fable 5 credits bug — Max 20x plan** | 7 comments, 10 👍. Duplicate (related to #79337) but from a different user, confirming the bug affects multiple Max plan tiers. |
| [#80749](https://github.com/anthropics/claude-code/issues/80749) | **Fable 5 gated in interactive TUI; works headless** | 2 comments, 1 👍. Pinned regression: Fable 5 functions correctly in headless/scripted mode but fails in interactive TUI. User corrected initial blame from 2.1.216 to a broader range. |
| [#77704](https://github.com/anthropics/claude-code/issues/77704) | **Custom MCP connectors lose all tools / cap at 256** | 2 comments. Intermittent regression since mid-July: aggregate tool list capped at exactly 256 across all MCP servers. Connectors periodically collapse to zero tools. |

---

## Key PR Progress

| PR | Status | What It Does |
|----|--------|--------------|
| [#80508](https://github.com/anthropics/claude-code/pull/80508) | **OPEN** | Fixes pagination in `auto-close-duplicates.ts` — the script was only reading 30 comments/reactions per issue, causing missed duplicates. |
| [#80495](https://github.com/anthropics/claude-code/pull/80495) | **OPEN** | Fixes `/ralph-loop` substituting `$ARGUMENTS` directly into shell execution, which treated user prompts as shell code and broke the loop. |
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | **OPEN** | Adds missing source attribution metadata to Claude Code — likely for telemetry or licensing compliance. Minimal diff but long-pending. |
| [#42604](https://github.com/anthropics/claude-code/pull/42604) | **CLOSED** | Removes "retro-futuristic" recommendation from the Frontend Design Skill config. Merged/dismissed. |

*Note: Only 4 PRs were updated in the last 24 hours. All others are stale or merged prior to this digest window.*

---

## Feature Request Trends

1. **Pluggable Context Manager** ([#80751](https://github.com/anthropics/claude-code/issues/80751)) — Users want a plugin system that intelligently retrieves and manages context during long development sessions, rather than relying on Claude's automatic context window management.

2. **Desktop Remote Control for Agents** ([#29006](https://github.com/anthropics/claude-code/issues/29006), 114 👍) — The most-upvoted request: let developers monitor and steer Claude Code agents from the Desktop GUI, especially for long-running background tasks.

3. **OTel Attributes for Repo/Worktree/Branch** ([#80745](https://github.com/anthropics/claude-code/issues/80745)) — Enterprises using OpenTelemetry want Claude Code Desktop to emit git context (repo, worktree, branch) in OTLP traces for better observability.

4. **Syntax Highlighting in VSCode Chat Panel** ([#64968](https://github.com/anthropics/claude-code/issues/64968), 21 👍) — Code blocks rendered as plain text in the VSCode extension's chat panel. Reopened multiple times; users consider this table-stakes for a code assistant.

5. **Workflow Retry with Raw-Text Fallback** ([#75086](https://github.com/anthropics/claude-code/issues/75086)) — Subagent runs that hit the StructuredOutput retry cap (5) lose all their work. Users want a raw-text fallback instead of discarding 38-minute analyses.

6. **PDF Read Tool: Plain-Text-Only Mode** ([#80449](https://github.com/anthropics/claude-code/issues/80449)) — The `Read` tool always sends both extracted text and image renders of PDFs, inflating token costs. Requesting a flag to send text only.

7. **MCP Session Identifiers** ([#41836](https://github.com/anthropics/claude-code/issues/41836), 24 👍) — Need per-conversation/session IDs in MCP HTTP requests to enable server-side state management for multi-session users.

---

## Developer Pain Points

**1. Connection Instability Epidemic**
Three separate issues ([#5674](https://github.com/anthropics/claude-code/issues/5674), [#69415](https://github.com/anthropics/claude-code/issues/69415), [#69336](https://github.com/anthropics/claude-code/issues/69336)) describe ECONNRESET and "Connection closed mid-response" errors across macOS, Linux, and WSL. Users report the errors appear immediately in new context windows, not just after long-running sessions. The issue is platform-dependent (works on Windows Server but not macOS on same network), suggesting a TLS or HTTP/2 stack mismatch.

**2. Fable 5 Billing/Gating Fiasco**
Three distinct issues ([#79337](https://github.com/anthropics/claude-code/issues/79337), [#79341](https://github.com/anthropics/claude-code/issues/79341), [#80382](https://github.com/anthropics/claude-code/issues/80382), [#80749](https://github.com/anthropics/claude-code/issues/80749)) report that Fable 5—now standard on Max plans—is incorrectly gated behind usage credits. The error is inconsistent: works in headless mode but fails in interactive TUI; works for some sessions but not others. Multiple users report being silently downgraded to Opus 4.8 without notice.

**3. Auto-Updater Downloads ~265MB Per Session**
[#79942](https://github.com/anthropics/claude-code/issues/79942) reports that every running Claude Code session independently downloads the full update binary, with no cross-session lock. For users running multiple worktree/agent sessions, this wastes substantial bandwidth and time.

**4. Cached Experiment Payloads Inject System Prompts Indefinitely**
[#80600](https://github.com/anthropics/claude-code/issues/80600) reveals a subtle bug: experiment payloads cached from earlier response headers persist and inject system-prompt directives into every subsequent session. The `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` env var gates the fetch but not the read of the cached payload, meaning once contaminated, the directive persists.

**5. MCP Tool Limit at 256 and Intermittent Collapse**
[#77704](https://github.com/anthropics/claude-code/issues/77704) reports that custom remote MCP connectors hit a hard cap of exactly 256 tools across all connectors, and intermittently lose all tools entirely. Regression since mid-July.

**6. Permission Denials Without Matching Rules**
[#80736](https://github.com/anthropics/claude-code/issues/80736) — Read/Grep/Edit are denied for `src/main/java/**` paths despite no matching sandbox/permission rule in any configuration. Sibling paths (`pom.xml`, `resources/`) work fine. Suggests a filesystem traversal or glob matching bug in the permission evaluator.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-24

## Today's Highlights

Windows performance regressions dominate the tracker: launch-time CPU saturation, unbounded `taskkill` loops, and `WmiPrvSE` exhaustion are drawing heavy community concern. On the engineering side, four `copyberry[bot]` PRs landed today introducing a WebSocket transport for code-mode hosts and significant proxy-routing refactors for exec-server traffic. Two alpha releases pushed (`0.146.0-alpha.5`, `0.146.0-alpha.3.1`), though release notes are absent.

## Releases

- **`rust-v0.146.0-alpha.5`** — No changelog. ([Release](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.5))
- **`rust-v0.146.0-alpha.3.1`** — No changelog. ([Release](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.3.1))

## Hot Issues

1. **#20214 — Codex App freezes/stutters on Windows 11 Pro**  
   +75 comments, 72 👍. Long-standing root-cause thread for Windows UI lag. The community suspects WMI polling overhead. ([Issue](https://github.com/openai/codex/issues/20214))

2. **#3355 — Error after macOS lid-close sleep**  
   +41 comments. Affects `codex-cli 0.30.0` connectivity after laptop resumes. A perennially popular issue spanning nearly a year. ([Issue](https://github.com/openai/codex/issues/3355))

3. **#4003 — Mixed line endings on Windows after patching**  
   +28 comments, 71 👍. `apply_patch` ignores existing file line-ending conventions, causing CI breakage for Windows developers. ([Issue](https://github.com/openai/codex/issues/4003))

4. **#34260 — Unbounded `taskkill.exe`/`conhost.exe` cleanup storm**  
   +28 comments. Exhausts WMI quota; machine becomes unusable. A severe Windows-specific bug with high reproducibility. ([Issue](https://github.com/openai/codex/issues/34260))

5. **#25453 — `powershell.exe` spawns every second for process polling**  
   +15 comments. High CPU on idle. Users confirm the polling strategy bypasses native Win32 APIs. ([Issue](https://github.com/openai/codex/issues/25453))

6. **#20883 — MCP process pool per project, not per session**  
   +15 comments, 4 👍. Enhancement request to deduplicate MCP servers across chats. Community feedback indicates memory bloat in multi-chat workflows. ([Issue](https://github.com/openai/codex/issues/20883))

7. **#35032 — Auto-compaction leaves ~80% full context**  
   +13 comments. Long-running threads trigger compaction repeatedly with minimal runway reclaimed. Wastes model spend and causes latency. ([Issue](https://github.com/openai/codex/issues/35032))

8. **#30712 — `apply_patch` fails on Windows due to split writable roots**  
   +12 comments, 12 👍. Patch tool unusable; agents fall back to PowerShell file writes, which bypass sandbox protections. ([Issue](https://github.com/openai/codex/issues/30712))

9. **#34879 — [P0 regression] Windows launch saturates all CPU cores**  
   +5 comments. Build `26.715.10079.0` causes 100% CPU on all logical processors. Blocking issue for affected users. ([Issue](https://github.com/openai/codex/issues/34879))

10. **#35057 — App unstartable after adding second folder to project**  
    +5 comments. Stuck on generic error screen. Newly filed, no workaround yet. ([Issue](https://github.com/openai/codex/issues/35057))

## Key PR Progress

1. **#35078 — Add WebSocket transport to code-mode host**  
   Adds `--listen ws://IP:PORT` alongside stdio. Enables remote agents without SSH. Merged. ([PR](https://github.com/openai/codex/pull/35078))

2. **#35067 — Fix Bazel test configuration for platform-specific data**  
   Includes CLI snapshots in runfiles; restricts sandbox test to Windows. Build infra fix. Merged. ([PR](https://github.com/openai/codex/pull/35067))

3. **#35065 — Avoid duplicating deferred sources in tool search**  
   Removes redundant source listing from `tool_search` when already advertised by world state. Context-window optimization. Merged. ([PR](https://github.com/openai/codex/pull/35065))

4. **#35063 — Track deferred tool namespaces in world state**  
   Disabled-by-default `deferred_tool_world_state` feature exposes namespace updates to the model. Merged. ([PR](https://github.com/openai/codex/pull/35063))

5. **#35059 — Decouple exec-server HTTP from reqwest types**  
   Switches to transport-neutral `http`/`url` types, removes direct `reqwest` dependency from exec-server. Clean architecture improvement. Merged. ([PR](https://github.com/openai/codex/pull/35059))

6. **#35056 — Route exec-server WebSockets through configured proxies**  
   Passes `HttpClientFactory` into remote environment transports so reconnects honor proxy policy. Merged. ([PR](https://github.com/openai/codex/pull/35056))

7. **#35034 — Route environment registry requests through shared HTTP client**  
   Noise registry requests now follow exec-server proxy policy. Environmental health. Merged. ([PR](https://github.com/openai/codex/pull/35034))

8. **#35031 — Enforce writer ownership for thread archive/delete**  
   Prevents concurrent mutation of paginated threads. Helps with state corruption across sessions. Merged. ([PR](https://github.com/openai/codex/pull/35031))

9. **#35029 — Preserve plugin attribution across command approvals**  
   Carries `plugin_id` and `script_path` through guardian review events. Plugin ecosystem correctness. Merged. ([PR](https://github.com/openai/codex/pull/35029))

10. **#35049 — Register Guardian V2 feature flag**  
    Adds `GuardianV2` to feature registry, disabled by default. Foundation for next-gen safety reviews. Merged. ([PR](https://github.com/openai/codex/pull/35049))

## Feature Request Trends

- **Multi-chat/multi-agent workflows**: Repeated asks for multiple simultaneous sessions or split-pane views (#13036, #20883).  
- **Customizable UI behavior**: Disable sidebar auto-expand on hover (#31538), fix keyboard shortcut conflicts (#33977).  
- **Mobile/remote session parity**: QR pairing failures, permission downgrades when switching between desktop and mobile (#30750, #30485).  
- **Project-scoped resource management**: MCP process pools (#20883), session-to-project mapping persistence (#26157).

## Developer Pain Points

- **Windows performance is the top concern**: Four of the top ten issues are severe Windows regressions—CPU exhaustion, WMI abuse, process storms, and sandbox incompatibilities. Community sentiment indicates the Windows port lacks native API integration.  
- **Context compaction is unreliable**: Compaction reports success while leaving 80% of capacity used (#35032), wasting token allowance.  
- **Sandbox bypass is too easy on Windows**: `apply_patch` failure forces agents to write via PowerShell, removing sandbox protection (#30712).  
- **Update breakage**: Histories disappear (#35080), conversations unlink (#26157), and the app becomes unstartable after minor config changes (#35057).  
- **Image handling fragility**: Pasted clipboard images spin forever after temp deletion (#32699); built-in `image_gen` times out on complex prompts (#34891).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-24

## Today's Highlights

A substantial security-focused PR batch landed this week, addressing TOCTOU race conditions in auth token writing and cleaning up trust dialog disclosures for runnable hooks. On the reliability front, community reports continue to converge around agentic loop stagnation and infinite reasoning cycles in gemini-3.1-pro-preview, while internal teams advanced the "Caretaker" triage automation pipeline and a new SSR code generation infrastructure.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#22415 — CLI hangs indefinitely on "This is taking a bit longer" with gemini-3.1-pro-preview](https://github.com/google-gemini/gemini-cli/issues/22415)** (31 comments, 27 👍)  
   The top-voted active issue. Users report the CLI enters a retry loop that never resolves, consuming tokens without producing output. Marked as possible duplicate and need-retesting — a strong signal the team is actively investigating.

2. **[#16980 — Stop using .gitignore to control what files Gemini CLI can access](https://github.com/google-gemini/gemini-cli/issues/16980)** (16 comments, 12 👍)  
   Long-running complaint that `.gitignore` and `gemini-ignore` overlap confusingly. Users want more explicit, independent ignore-file semantics.

3. **[#1698 — Add support for VISUAL/EDITOR environment variable](https://github.com/google-gemini/gemini-cli/issues/1698)** (14 comments, 55 👍)  
   The highest-reacted issue in this digest. Users on headless servers or non-standard editors are locked out of the external editor workflow. A clear candidate for a quick quality-of-life win.

4. **[#20889 — ask_user in screen reader mode doesn't provide a way of answering](https://github.com/google-gemini/gemini-cli/issues/20889)** (12 comments)  
   Accessibility bug where blind users cannot interact with `ask_user` prompts in planning mode. Highlighted by a reporter who self-identifies as blind — high empathy urgency.

5. **[#23260 — Agent enters infinite reasoning loop when blocked by workspace directory restriction](https://github.com/google-gemini/gemini-cli/issues/23260)** (7 comments)  
   Instead of asking for permission, the agent loops forever when hitting filesystem boundaries. Another instance of insufficient guardrail handling in the agentic loop.

6. **[#22457 — Model keeps switching to gemini-2.5-flash despite explicit /model override](https://github.com/google-gemini/gemini-cli/issues/22457)** (6 comments)  
   A persistent "model drift" bug — mid-task, the CLI silently swaps the user's chosen model, causing confusion and suboptimal performance.

7. **[#22583 — Race condition in ProjectRegistry.save() causes ENOENT during concurrent startup](https://github.com/google-gemini/gemini-cli/issues/22583)** (6 comments, 2 👍)  
   Two concurrent startup tasks write to the same `projects.json.tmp` without locking, leading to crashes. A sign of growing multi-session usage stress-testing the CLI.

8. **[#20953 — Threat detected by antivirus: clipboard_x86_x64.exe](https://github.com/google-gemini/gemini-cli/issues/20953)** (7 comments)  
   Antivirus false-positive flagging the clipboard binary. Erodes trust and causes support escalations.

9. **[#22806 — is_background flag causes false "moved to background" response for fast commands](https://github.com/google-gemini/gemini-cli/issues/22806)** (5 comments)  
   A 200ms timer delay means commands like `echo` or `pwd` get misclassified as backgrounded, confusing the agent's flow.

10. **[#22942 — Context compression fails with "Invalid Argument" error, freezing chat at 113%](https://github.com/google-gemini/gemini-cli/issues/22942)** (4 comments)  
    Once context window is exceeded, `/compact` and `/compress` both error out, effectively locking the session. Fatal for long-running sessions.

## Key PR Progress

1. **[#28346 — Fix trust dialog disclosure for runnable hooks](https://github.com/google-gemini/gemini-cli/pull/28346)** (P1, Security)  
   Stops reporting invalid flat hook entries as runnable commands in the trust dialog. Includes warning for project settings containing command hooks. *Closes #27901.*

2. **[#28330 — fix(ide-companion): set token file mode atomically to close TOCTOU window](https://github.com/google-gemini/gemini-cli/pull/28330)** (P2, Security)  
   The auth port file was briefly world-readable between `writeFile` and async `chmod`. Now uses atomic mode setting. *Fixes #28278.*

3. **[#28331 — feat(core): implement conscious stagnation detection for resilient agentic loops](https://github.com/google-gemini/gemini-cli/pull/28331)** (P2, Agent)  
   Introduces a **Guided Recovery** mechanism and **Stagnation Circuit Breaker** to prevent premature loop termination after `/rewind` or model-text-only responses.

4. **[#28327 — fix(core): only percent-decode file:// URLs in resolveToRealPath](https://github.com/google-gemini/gemini-cli/pull/28327)** (P2, Core)  
   Plain paths with `%` in filenames (e.g., `report%202026.txt`) were being corrupted by unconditional `decodeURIComponent`. *Fixes #28276.*

5. **[#28328 — fix(core): don't flag non-auth 401 substrings as authentication errors](https://github.com/google-gemini/gemini-cli/pull/28328)** (P2, Core)  
   "401" appearing anywhere in an error message (e.g., `localhost:4012`) triggered OAuth fallback logic. Now scopes matching to actual HTTP status patterns.

6. **[#28344 — Feat/eval validate](https://github.com/google-gemini/gemini-cli/pull/28344)** (XL)  
   Adds `eval:validate` — a static analysis command for eval source files, checking 9 rules with JSON output, suitable for CI gating.

7. **[#28334 — Fix/bug 28300 clean](https://github.com/google-gemini/gemini-cli/pull/28334)** (P1)  
   Clean-up fix for a P1 bug (unlabeled issue #28300). Minimal description — likely a targeted hotfix.

8. **[#28469 — fix(core): rotate session ID on model fallback to prevent stateful API errors](https://github.com/google-gemini/gemini-cli/pull/28469)**  
   When falling back to `gemini-2.5-flash`, same-session retries hit "Please submit a new query" errors. Now rotates session ID on fallback.

9. **[#28519 — fix(core): prevent infinite auth loop by awaiting credential save](https://github.com/google-gemini/gemini-cli/pull/28519)** (P1, Core)  
   Un-awaited async write of `oauth_creds.json` triggered an infinite re-auth loop. *Fixes #28430.*

10. **[#28411 — feat(caretaker-triage): post comment before auto-closing issues](https://github.com/google-gemini/gemini-cli/pull/28411)**  
    Caretaker bot now posts an explanatory comment before auto-closing, giving users a path to reopen or provide details — improving the user feedback loop.

## Feature Request Trends

- **Editor flexibility** (#1698): Still the #1 most-upvoted request. Users want `$EDITOR`/`$VISUAL` support to work in headless environments or with non-standard editors like Helix, Neovim, or Emacs.
- **File-access control** (#16980, #22446): Strong demand to decouple Gemini's file-access rules from `.gitignore`. Users want precise control over which files the agent reads, especially when working with build artifacts or large monorepos.
- **Git worktree isolation** (#22658): Part of a larger epic. Users running multiple concurrent agent sessions want physical filesystem isolation via Git worktrees, with automatic branch creation and lifecycle management.
- **Skill composition** (#22420): When project-level and global skills share names, the conflict resolution is silent and destructive. Users want progressive disclosure or merge semantics.
- **ACP/thought streaming** (#20977): Developers building on the Agent Communication Protocol want `AgentThoughtChunk` to actually be emitted during streaming, not just final messages.

## Developer Pain Points

1. **Model instability with gemini-3.1-pro-preview** — Multiple reports (#22415, #22669, #22792, #22947) of infinite retry loops, silent buffering, premature task termination, and model drift (switching away from user's chosen model). This is the single largest cause of frustration in the last 24h digest.

2. **Agentic loop stagnation** — #23260, #22728, #22942 all describe variants of the agent getting stuck: infinite reasoning loops, context-window lockups, or refusal to continue. The stagnation detection PR (#28331) directly addresses this, but community sentiment suggests it's not yet resolved.

3. **YOLO mode still prompts for approvals** (#26414) — Users running `--yolo` mode report dozens of manual approval requests, mostly for *read* operations. The mode's contract is broken from a user perspective.

4. **Windows-specific test failures** (#23510) — Behavioral evals fail on Windows due to path and process handling issues, making Windows a second-class development platform.

5. **Antivirus false positives** (#20953) — The clipboard binary regularly triggers AV tools, creating friction for enterprise adoption and eroding trust in the binary.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-07-24

---

## Today's Highlights

Two patch releases shipped yesterday (v1.0.74 and v1.0.74-4) bringing Open Plugin Spec v1 support, subagent timeline improvements, and reliable IDE reconnection after MCP server reloads. However, the community is raising urgent concerns about a regression where **Ctrl+C no longer cancels active agent runs**, a memory leak where stale sessions hold ~460 MB for hours, and an ACP parity gap that prevents Zed and other clients from displaying context-window usage.

---

## Releases

**v1.0.74** (2026-07-23) and **v1.0.74-4** (2026-07-23)

- **Open Plugin Spec v1** – Added support for v1 plugin manifests and `mcp.json` configuration, enabling richer third-party MCP server integration.
- **IDE Reconnection** – Fixed a reliability bug: IDE integration now reconnects properly when the CLI reloads MCP servers or changes directory.
- **Subagent Timelines** – Improved logging: subagent timelines now identify whether prompts originated from the main agent or another subagent.
- **`?` Key Fix** – Typing `?` while the `/search` bar is open now correctly opens quick help instead of entering text.

> _Note: The release notes for v1.0.74 show a truncated line ("Multi-turn subagent t") suggesting an incomplete changelog entry, likely cut off during publication._

---

## Hot Issues (Top 10 by Community Engagement)

1. **[#4097 – apply_patch stores deleted binary in session history, permanently exceeding CAPI 5 MB limit](https://github.com/github/copilot-cli/issues/4097)** 🟢 OPEN | 👍5  
   *Why it matters:* When `apply_patch` deletes a large binary, the entire file content is stored as a textual diff in conversation history. Subsequent requests permanently exceed CAPI's 5 MB limit, with no recovery via `/compact`. This affects any workflow involving removal of generated assets (build outputs, compiled binaries). Community frustration is high—this is the most-upvoted open issue today.

2. **[#4143 – CLI should inherit MCP tools from connected VS Code instance](https://github.com/github/copilot-cli/issues/4143)** 🟢 OPEN | 👍5  
   *Why it matters:* When Copilot CLI connects to VS Code, MCP tools available via VS Code extensions (MSSQL Agent, Anthropic Tools) remain inaccessible to the CLI session. Users running both editors want a unified tool surface. This is the second most-upvoted open feature request today.

3. **[#4206 – Environment footer stuck on "Loading:" forever under org MCP policy](https://github.com/github/copilot-cli/issues/4206)** 🟢 OPEN | 👍2  
   *Why it matters:* Enterprise users report that the status footer permanently displays "Loading:" when the built-in GitHub MCP handshake stalls under organizational MCP policies. `/env` shows everything loaded, yet the UI never transitions—blocking trust in session readiness.

4. **[#4233 – Emit `usage_update` in `--acp` mode for context-window + AI credits](https://github.com/github/copilot-cli/issues/4233)** 🟢 OPEN | 👍2  
   *Why it matters:* ACP clients (Zed, Helix, etc.) cannot display context-window or AI credit usage because `copilot --acp` never emits the `usage_update` session update. The CLI already computes this data for `/context` and `/usage`—this is a pure protocol gap.

5. **[#4165 – `copilot --resume` hangs at "Resuming session" on cold start in Windows](https://github.com/github/copilot-cli/issues/4165)** 🟢 OPEN | 👍1  
   *Why it matters:* Windows PowerShell users cannot resume sessions directly. Workaround requires launching TUI first, then using `/resume`. Affects Windows developers' daily workflow reliability.

6. **[#4122 – Subagents resolve relative markdown links against cwd instead of agent file directory](https://github.com/github/copilot-cli/issues/4122)** 🔴 CLOSED | 👍2  
   *Why it matters:* Custom agent definitions (`*.agent.md`) commonly reference supporting docs with relative paths like `../prompts/architecture-review-guidelines.md`. Subagents incorrectly resolve these against the current working directory, breaking documentation loading. CLOSED—fix likely shipped.

7. **[#4214 – "eternally loading" on every new session](https://github.com/github/copilot-cli/issues/4214)** 🟢 OPEN | 👍1  
   *Why it matters:* A user reports persistent "Loading: 1 skill" state on every session start. The agent identifies the source but cannot fix it; user is concerned about potential charges. Represents a blocking regression for new session reliability.

8. **[#4199 – Stale sessions run old binary after in-CLI update; idle sessions never trim heap (~460 MB)](https://github.com/github/copilot-cli/issues/4199)** 🟢 OPEN | 👍0  
   *Why it matters:* Running CLI in multiple terminals and updating from one leaves others running the old (now-deleted) binary. Idle sessions hold ~460 MB / 23 threads indefinitely. A significant memory leak for power users with many open terminals.

9. **[#4235 – Ctrl+C no longer cancels/interrupts an active agent run (regression)](https://github.com/github/copilot-cli/issues/4235)** 🟢 OPEN | 👍0  
   *Why it matters:* Filed today. Previously Ctrl+C aborted the in-progress turn; now the run continues and the keypress is ignored. Filed as a regression—critical for user control over long-running agent tasks.

10. **[#4211 – Copilot CLI cannot handle BigInt in structured MCP response](https://github.com/github/copilot-cli/issues/4211)** 🟢 OPEN | 👍0  
    *Why it matters:* When an MCP server returns large numbers (BigInt), the CLI crashes with `TypeError: Do not know how to serialize a BigInt`, aborting all ongoing tasks. Breaks any MCP integration dealing with large IDs or precise timestamps.

---

## Key PR Progress

1. **[#4228 – Withdrawn: Incorrect scope for #3534](https://github.com/github/copilot-cli/pull/4228)** 🔴 CLOSED  
   Withdrawn because it changed documentation instead of the private clipboard runtime implementation. The source branch has been deleted. A cautionary tale for PR scope discipline.

2. **[#3163 – ViewSonic monitor](https://github.com/github/copilot-cli/pull/3163)** 🟢 OPEN  
   Initiated GitHub Action runners for issues #2591, #3561, #3559. Title is cryptic ("ViewSonic monitor"), likely a mislabeled infrastructure PR. Open for over 2 months—watch for progress.

> _Note: Only 2 PRs were updated in the last 24 hours, and neither contains substantive code changes. The team appears focused on the v1.0.74 release stabilization._

---

## Feature Request Trends

The most-requested feature directions from today's issue activity:

1. **MCP Tool Inheritance from VS Code** – Users want a unified tool surface when CLI is connected to VS Code, inheriting MCP tools from editor extensions (#4143). Community reaction: 👍5, highest open feature request.

2. **ACP Protocol Feature Parity** – ACP clients need `usage_update` events for context window and AI credit tracking (#4233). This is the most common ACP parity gap reported, with secondary requests for enterprise authentication support (#3161).

3. **Plugin MCP Server Project Awareness** – MCP servers loaded from plugins cannot resolve the active project directory (#4234). They operate in the plugin installation root instead, breaking project-scoped tools.

4. **Enhanced Auto-Injection Instructions** – Users want domain/category tags alongside `applyTo` glob patterns to scope instructions in large codebases with hundreds of agent docs (#4231).

5. **X11/Wayland PRIMARY Selection Support** – Linux users want `copyOnSelect` to target the mouse clipboard (PRIMARY selection) for middle-click paste (#4236), differentiating from the Ctrl+C clipboard.

---

## Developer Pain Points

From today's issue activity, recurring frustrations and blocking problems:

1. **Session Corruption from Large Binaries (🚩 #4097, #3767)** – Deletions via `apply_patch` permanently bloat session history past CAPI's 5 MB limit. No recovery path exists. Affects any project with generated assets.

2. **UI Freeze / Loading Regression (🚩 #4214, #4206, #4165)** – Multiple reports of sessions stuck in "Loading:" state, either permanently under enterprise MCP policies (#4206), on Windows cold resume (#4165), or universally (#4214). Blocks all usage.

3. **Ctrl+C Disabled (🚩 #4235)** – Critical regression where keyboard interrupt no longer stops agent runs. Filed today—likely a side-effect of the agent loop refactoring in v1.0.74.

4. **Memory Leaks from Stale Processes (🚩 #4199)** – In-CLI updates leave old binaries running in other terminals, holding ~460 MB each. No automatic cleanup or user warning.

5. **MCP Serialization Fragility (🚩 #4211, #4238)** – BigInt values crash the CLI; and failed MCP tool details render one character per line under certain conditions. MCP handling remains brittle.

6. **Plugin Isolation Issues (🚩 #4234, #4236)** – Plugin MCP servers launch in wrong working directory, and project-aware configuration is impossible. Degrades the plugin ecosystem.

7. **Hook System Gaps (🚩 #4237, #4135)** – `preToolUse` "ask" denial's steering message is silently dropped; and hook-based `ask` decisions show raw JSON instead of the rich diff view. Plugin developers lose user experience quality.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-24

**Data Source:** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## Today's Highlights

A major stability push is underway: 15 pull requests landed in the last 24 hours, almost all fixing hard-to-reproduce Windows, MCP, and shell bugs. The community is also debating the intersection of A-share quantitative trading and AI Agent design, signaling growing interest in using Kimi for financial workflows. Notably, no new releases were published today.

---

## Releases

No new releases in the last 24 hours. The latest version remains **v0.29.0** (single-file binary, Windows & Linux).

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) | **Remote Control - Continue local sessions from any device** | The most-upvoted feature request (16 👍, 6 comments). Would unlock mobile/tablet workflow continuity from desktop sessions. | High demand; request has been open since Feb but still lacks maintainer response. |
| [#2555](https://github.com/MoonshotAI/kimi-cli/issues/2555) | **A-share quantification + AI Agent practice** | A detailed technical discussion on applying Kimi’s Agent architecture to real PnL-driven financial trading. Highlights parameter-driven vs hardcoded strategies. | Fresh (today); zero comments yet, but thoughtful content suggests it will attract attention. |
| [#2553](https://github.com/MoonshotAI/kimi-cli/issues/2553) | **`/plugins` crashes with TypeError when ≥2 plugins installed** | A clear-cut regression in v0.29.0 on Windows. Blocks multi-plugin usage entirely. | Silent (0 comments) but critical for power users. |
| [#2552](https://github.com/MoonshotAI/kimi-cli/issues/2552) | **Poor font kerning for Cyrillic text in Kimi Desktop** | Affects Russian-language users. Markdown kerning is broken on Windows. | Expected to receive engagement from Cyrillic-speaking community. |
| [#2545](https://github.com/MoonshotAI/kimi-cli/issues/2545) | **Synchronize queued prompts for phone users** | Prompts queued while browser is in background are lost. Common on mobile. | Practical UX pain point for mobile-first users. |
| [#2538](https://github.com/MoonshotAI/kimi-cli/issues/2538) | **kimi-datasource plugin worker pool blocks all sessions on timeout** | A single session’s API timeout (yahoo_finance) hangs all concurrent sessions using the same plugin. | Affects Linux users running multi-session workflows; no workaround provided. |
| *(All other issues in dataset have 0 comments and ≤1 👍 — not deemed noteworthy.)* | | | |

---

## Key PR Progress

| # | PR | Description | Why It Matters |
|---|----|-------------|----------------|
| [#2554](https://github.com/MoonshotAI/kimi-cli/pull/2554) | **fix(tools): count StrReplaceFile replacements against running content** | Corrects the success message count to reflect actual applied replacements, not initial match count. | Prevents misleading feedback during file editing operations. |
| [#2548](https://github.com/MoonshotAI/kimi-cli/pull/2548) | **fix(mcp): reuse initialized client sessions** | Keeps MCP client sessions open across tool calls, using `AsyncExitStack` for clean teardown. | Eliminates re-initialization overhead for repeated MCP tool calls. |
| [#2551](https://github.com/MoonshotAI/kimi-cli/pull/2551) | **fix(shell): search past file completion limit** | Extends `@` file completion beyond 1000 entries with bounded budgets (1000 result / 10000 scan). | Improves usability in large monorepos. |
| [#2550](https://github.com/MoonshotAI/kimi-cli/pull/2550) | **fix(kosong): propagate message serialization options** | Omit `id: null` from nested media when `exclude_none=True` is used. | Fixes serialization inconsistencies in tool call responses. |
| [#2549](https://github.com/MoonshotAI/kimi-cli/pull/2549) | **fix(shell): index tracked vendor files** | Allows Git-tracked files under `vendor/` in file completion while excluding untracked vendor trees. | Balances completeness with performance for vendored projects. |
| [#2547](https://github.com/MoonshotAI/kimi-cli/pull/2547) | **fix(windows): configure stdio as utf-8** | Sets stdout/stderr to UTF-8 on Windows at startup (cp936 → UTF-8). | Resolves garbled output on Windows terminals. |
| [#2546](https://github.com/MoonshotAI/kimi-cli/pull/2546) | **fix(print): escape markup in echoed stdin prompts** | Prevents user text like `[/login]` from being interpreted as Rich markup. | Security/stability fix for stdin-driven interactions. |
| [#2543](https://github.com/MoonshotAI/kimi-cli/pull/2543) | **fix(hooks): notify on permission prompts** | Emits `permission_prompt` hook for manual approval; skips for yolo/AFK/cached approvals. | Fixes regression where permission prompts were silent. |
| [#2542](https://github.com/MoonshotAI/kimi-cli/pull/2542) | **fix(logging): isolate Windows process log files** | Uses `kimi.<pid>.log` on Windows to prevent log rotation conflicts between concurrent processes. | Critical for multi-process Windows deployments. |
| [#2540](https://github.com/MoonshotAI/kimi-cli/pull/2540) | **fix(media): normalize ICO images to PNG** | Converts ICO to PNG before sending to the model; preserves metadata. | Unblocks model support for tools that emit `.ico` files. |

---

## Feature Request Trends

1. **Remote/Cross-Device Continuity** ([#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282), [#2545](https://github.com/MoonshotAI/kimi-cli/issues/2545))  
   Users want to start a session on desktop and continue from phone/tablet/browser. The mobile queue sync request (#2545) is a narrower version of the same need.

2. **Financial Quant + Agent Integration** ([#2555](https://github.com/MoonshotAI/kimi-cli/issues/2555))  
   A growing niche: using Kimi’s Agent architecture for real-market trading with PnL-based learning signals rather than benchmark scores.

3. **Plugin Ecosystem Stability** ([#2553](https://github.com/MoonshotAI/kimi-cli/issues/2553), [#2538](https://github.com/MoonshotAI/kimi-cli/issues/2538))  
   Multi-plugin sessions are fragile. Users want better isolation, timeout handling, and crash recovery in the plugin system.

---

## Developer Pain Points

- **Windows UTF-8 / Encoding Issues** (PR #2547, Issue #2552)  
  Cyrillic kerning, cp936 stdout, and font rendering bugs show Windows remains the most painful platform for non-ASCII workflows.

- **MCP Session Lifecycle Fragility** (PR #2548, PR #2541)  
  MCP tools fail on re-initialization or deferred startup, forcing workarounds. The active PRs fix these but signal deeper architectural needs.

- **Plugin Concurrency Blocks** (Issue #2538)  
  A single timeouting plugin worker can lock *all* sessions. No community workaround exists. This affects multi-session power users disproportionately.

- **File Completion Limits in Large Repos** (PR #2551)  
  The default 1000-file scan limit truncates completions in monorepos. PR #2551 raises the cap but not yet merged.

- **Log Rotation on Windows** (PR #2542)  
  Concurrent processes on Windows corrupt logs due to shared `kimi.log` rotation. A PID-based naming fix is proposed but not yet in release.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-24

## Today's Highlights
A major migration wave is sweeping through the codebase: **Brendonovich** has submitted a coordinated set of five PRs (#38459–38466) that normalize the app layer around a new protocol-neutral API, touching discovery, sessions, timeline rendering, PTY transport, and review data. Meanwhile, a flurry of stability fixes from **kitlangton** addresses tool definition ordering and snapshot consistency, potentially improving prompt-cache hit rates. On the bug front, v2.0 TUI crashes and reconnect-herd spikes remain active pain points, while a highly upvoted feature request for auto-discovering OpenAI-compatible models (#6231, 187 👍) continues to attract community attention.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues (Top 10)

1. **[#6231 – Auto-discover models from OpenAI-compatible provider endpoints](https://github.com/anomalyco/opencode/issues/6231)**  
   *187 👍, 30 comments* — The most-liked open issue. Users of LM Studio, Ollama, and llama.cpp must manually maintain model lists in `opencode.json`, which breaks when models change. Community strongly wants provider introspection.

2. **[#37012 – [FEATURE]: keep legacy layout option](https://github.com/anomalyco/opencode/issues/37012)**  
   *30 👍, 29 comments* — A vocal group wants the old layout preserved alongside the new v2 UI, citing easier access to workspace and settings from the main window.

3. **[#37716 – Internal Server Error](https://github.com/anomalyco/opencode/issues/37716)**  
   *5 👍, 26 comments* — A regression in Desktop v1.18.3 causing ISEs across multiple Go models. Reproducer provided; closed by a fix that likely landed in 1.18.4.

4. **[#25848 – [FEATURE]: add session renaming](https://github.com/anomalyco/opencode/issues/25848)**  
   *0 👍, 11 comments* — Request for `/rename` command or CLI flag to manually rename sessions. Simple but frequently requested UX improvement.

5. **[#38525 – [FEATURE]: dialogue box needs project classification and naming](https://github.com/anomalyco/opencode/issues/38525)**  
   *0 👍, 2 comments* — User proposes a project → conversation hierarchy similar to Claude Desktop/Codex, with left-side project list and named session tabs.

6. **[#37880 – [Desktop] 'Always Allow' permission not respected](https://github.com/anomalyco/opencode/issues/37880)**  
   *1 👍, 2 comments* — Permission prompt “Always Allow” button acts like “Allow Once” on Windows; resets immediately after granting.

7. **[#38564 – Subagent termination does not kill spawned child processes](https://github.com/anomalyco/opencode/issues/38564)**  
   *0 👍, 2 comments* — Cancelling a subagent leaves PowerShell children running at 100% I/O; kill-tree not propagated, posing disk abuse risk.

8. **[#38598 – Deepseek V4 FLASH (FREE) not finishing tasks after update to 1.18.4](https://github.com/anomalyco/opencode/issues/38598)**  
   *0 👍, 1 comment* — Fresh regression: model becomes “lazy” post-update, ignoring requests and truncating tasks.

9. **[#38255 – Discrepancy between different opencode go usage dashboard](https://github.com/anomalyco/opencode/issues/38255)**  
   *0 👍, 5 comments* — Monthly limit dashboard shows 100% usage while granular dashboard shows $10 of credit used. Billing data inconsistency causing false blockages.

10. **[#38591 – npm error notsup on FreeBSD](https://github.com/anomalyco/opencode/issues/38591)**  
    *0 👍, 2 comments* — Installation blocked on FreeBSD despite `node.js` cross-platform promise. Community notes other Node.js tools handle this; asks for broader OS support.

## Key PR Progress (Top 10)

1. **[#38465 – feat(app): migrate discovery workflows](https://github.com/anomalyco/opencode/pull/38465)**  
   Migrates provider, project, path, directory, MCP, and session-search discovery workflows to the new protocol-neutral API. Part of Brendonovich’s app-layer migration series.

2. **[#38463 – feat(app): support current pty transport](https://github.com/anomalyco/opencode/pull/38463)**  
   Migrates PTY lifecycle and shell discovery, using current connect tickets and WebSocket routes. Documents remaining V1 migration surface.

3. **[#38461 – feat(app): migrate session interactions](https://github.com/anomalyco/opencode/pull/38461)**  
   Routes prompts, commands, forks, archival, and session controls through compatible API; retains optimistic composer behavior.

4. **[#38460 – feat(app): support current review data](https://github.com/anomalyco/opencode/pull/38460)**  
   Accepts new file-diff records and migrates VCS review request envelopes; preserves review comments and state persistence.

5. **[#38466 – feat(app): render current session timeline](https://github.com/anomalyco/opencode/pull/38466)**  
   Constructs timeline rows from current session messages, projecting tool and shell messages into existing renderers.

6. **[#38596 – fix(core): share one tool snapshot per request](https://github.com/anomalyco/opencode/pull/38596)**  
   Captures one `ToolRegistry.ToolSet` per request and uses it across instruction catalog, provider definitions, and local execution closure — preventing mid-request registration drift.

7. **[#38590 – fix(core): stabilize tool definition ordering](https://github.com/anomalyco/opencode/pull/38590)**  
   Emits tool definitions in canonical provider-visible name order, so identical registration sets produce byte-identical arrays regardless of plugin/registration order. Improves prompt-cache hit rates.

8. **[#38588 – fix(codemode): stabilize catalog ordering](https://github.com/anomalyco/opencode/pull/38588)**  
   Renders Code Mode discovery catalogs in canonical dotted-path order; prevents false instruction updates on unchanged tool reloads.

9. **[#37607 – fix(app): create fresh web sessions in server directory](https://github.com/anomalyco/opencode/pull/37607)**  
   When project list is empty, new sessions fall back to server startup directory from `/path` endpoint. Fixes #37606.

10. **[#38584 – fix(opencode): recover projects moved to a new path](https://github.com/anomalyco/opencode/pull/38584)**  
    Handles Git repos that have been moved: tracked live path replaces stale primary worktree. Closes #38578.

## Feature Request Trends
- **Model Discovery & Provider Introspection** (#6231, #38594): Users want automatic model listing from OpenAI-compatible endpoints, plus reasoning/token-limit configuration for custom providers.
- **Session Organization** (#25848, #38525): Multiple requests for session renaming and project-based conversation hierarchies, mirroring Claude Desktop/Codex UX.
- **UI/Layout Preservation** (#37012, #38599): A contingent of users resists the v2 UI migration, requesting legacy layout options and customizable spinner verb text.
- **Mobile Companion & Remote Monitoring** (#33163): Interest in connecting mobile devices to observe terminal output and approve tasks remotely.
- **Sub-agent Visibility** (#37267): Users want a dedicated panel for sub-agent outputs that doesn’t get buried under main agent log floods.

## Developer Pain Points
- **Sub-process Orphan Management** (#38564, #36285): Terminated subagents leave child processes (PowerShell, I/O-heavy scans) running; reconnect-herd spikes on service restarts cause resource exhaustion.
- **Permission Model Regressions** (#37880, #36868): “Always Allow” resets after one use; non-interactive `--auto` mode hangs on subagent permission requests, ignoring the flag.
- **Windows-Specific Bugs** (#29859, #36743): `@` file references break entirely on Windows; file tree folders fail to expand in V2 desktop.
- **Provider Compatibility Regressions** (#38329, #38554, #38598): New models (DeepSeek V4, kimi-k2.6) fail with HTTP 400/500 after updates; “thinking” vs “reasoning_effort” conflicts in provider adapters.
- **Desktop Renderer Crashes** (#38577, #38574): v1.18.4 crashes on launch with `TypeError: data.lsp`; v2.0 TUI crashes on `f.part.state.content[0]` undefined.
- **Billing/Usage Dashboard Bugs** (#38255): Discrepancy between monthly limit and granular usage dashboards causes false service blockages.
- **FreeBSD/Platform Support** (#38591): npm install blocked on FreeBSD despite Node.js’s cross-platform claim — frustration with OS-constrained binaries.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-24

## Today's Highlights

A burst of activity across the board with 50+ issues and 22 PRs updated in the last 24 hours, though notably **no new releases** dropped. The community is heavily focused on clipboard reliability, model provider configuration quirks, and RPC infrastructure. Multiple `wl-copy` failure bugs (issues #6872, #7012) triggered a coordinated fix train, while model hot-reload regression (#6999) sparked immediate pushback and a targeted PR from maintainer mitsuhiko (#7036). The long-running **Strict Tools / Grammar** discussion (#6306) remains the highest-comment thread, signaling continued demand for constrained LLM sampling.

---

## Releases

No new releases in the last 24 hours. The last published version remains `0.81.1` across `@earendil-works/pi-coding-agent` and `@earendil-works/pi-ai`.

---

## Hot Issues (Top 10)

1. **#6306 — Support Strict Tools / Grammar** (22 comments, CLOSED)  
   *[earendil-works/pi Issue #6306](https://github.com/earendil-works/pi/issues/6306)*  
   The longest-running discussion this week. mitsuhiko's proposal adds "free form" vs. "strict" tool schemas with LARK/Rust grammar-aware probing, directly unlocking model-side constrained sampling. Community consensus: this is necessary for production-grade tool calling. Now closed, likely merged into the constrained sampling PR #6341.

2. **#6951 — Qwen3.8-max-preview reasoning effort mismatch** (3 comments, OPEN)  
   *[earendil-works/pi Issue #6951](https://github.com/earendil-works/pi/issues/6951)*  
   Pi maps `minimal/low/medium/high` reasoning tiers, but Qwen's API expects `low/medium/xhigh`. Users hitting configuration rejection in production. High 👍 ratio (1:3) relative to comment count suggests wide silent impact on Chinese-market users.

3. **#6999 — models.json hot-reload broken after 0.80.8** (3 comments, OPEN)  
   *[earendil-works/pi Issue #6999](https://github.com/earendil-works/pi/issues/6999)*  
   Users accustomed to editing `~/.pi/agent/models.json` mid-session then refreshing via `/model` report the feature is gone. Maintainer mitsuhiko immediately opened a fix PR #7036. Expect this to land quickly.

4. **#6948 — defaultProvider/model race condition with llama.cpp startup** (3 comments, OPEN)  
   *[earendil-works/pi Issue #6948](https://github.com/earendil-works/pi/issues/6948)*  
   `settings.json` has `defaultModel` but Pi starts with a different model. Caused by async model refresh completing after session init. Particularly painful for llama.cpp users who expect deterministic model loading.

5. **#6994 — Llama provider hardcoded maxTokens 16384** (3 comments, CLOSED)  
   *[earendil-works/pi Issue #6994](https://github.com/earendil-works/pi/issues/6994)*  
   Simple one-line bug: `maxTokens: 16384` locked regardless of model context window. PR #7034 already fixes this by deriving limits from loaded model context.

6. **#6872 — `/copy` falsely reports success on wl-copy failure** (3 comments, OPEN)  
   *[earendil-works/pi Issue #6872](https://github.com/earendil-works/pi/issues/6872)*  
   bwrap/sandbox users cannot copy to clipboard. `wl-copy` fails silently because exit code is never checked. Same root cause as #7012. The community fix train (PR #7009) awaits exit code before claiming success.

7. **#6968 — Extension resource_discover collapses all skill scopes to `[t]`** (2 comments, OPEN)  
   *[earendil-works/pi Issue #6968](https://github.com/earendil-works/pi/issues/6968)*  
   Installing any extension with `resources_discover` corrupts autocomplete metadata for all installed skills/prompts/themes. A subtle but disruptive bug for package developers.

8. **#6970 — GitHub Copilot Plugin auth vs OAuth token invalidation** (2 comments, OPEN)  
   *[earendil-works/pi Issue #6970](https://github.com/earendil-works/pi/issues/6970)*  
   Pi's `github-copilot` provider uses Copilot Plugin protocol instead of OAuth, causing tokens to be invalidated when used alongside neovim's `copilot-lsp`. Multi-device users hit forced re-auth daily.

9. **#6998 — DeepSeek models via Aliyun need thinkingFormat=qwen** (2 comments, OPEN)  
   *[earendil-works/pi Issue #6998](https://github.com/earendil-works/pi/issues/6998)*  
   #6858 added Aliyun Qwen Token Plan provider but DeepSeek models inherit DeepSeek's `compat`/`thinkingLevelMap` instead of Qwen's. Incorrect reasoning format breaks compatibility.

10. **#7024 — security docs page 404** (2 comments, CLOSED)  
    *[earendil-works/pi Issue #7024](https://github.com/earendil-works/pi/issues/7024)*  
    `pi.dev/docs/latest/security` returns 404. Minor but erodes trust for users evaluating security posture. Quick fix expected.

---

## Key PR Progress (Top 10)

1. **#7042 — feat(coding-agent): add get_sessions RPC command** (OPEN)  
   *[earendil-works/pi PR #7042](https://github.com/earendil-works/pi/pull/7042)*  
   Exposes `SessionManager` reads as RPC commands (`cwd` and `all`). Enables RPC clients (IDE plugins, external tools) to discover sessions before `switch_session`. Important for IDE integration story.

2. **#7036 — fix(coding-agent): reload model config in picker** (OPEN)  
   *[earendil-works/pi PR #7036](https://github.com/earendil-works/pi/pull/7036)*  
   mitsuhiko's direct fix for #6999 (hot-reload regression). Proposes making `reloadConfig` return refresh results rather than forcing double refresh. Likely to merge in next 24h.

3. **#7034 — fix(coding-agent): use llama context for output limit** (CLOSED)  
   *[earendil-works/pi PR #7034](https://github.com/earendil-works/pi/pull/7034)*  
   Removes hardcoded 16K token cap; derives max output from each model's context window. Fixes #6994. Clean, focused fix with test coverage.

4. **#7022 — guard tree navigation during responses** (OPEN, WIP)  
   *[earendil-works/pi PR #7022](https://github.com/earendil-works/pi/pull/7022)*  
   Prevents `/tree` causing session corruption during active streaming. Marked "WIP PoC" by author. Addresses a long-standing footgun.

5. **#7009 — fix: await wl-copy exit code and fall through to xclip** (CLOSED)  
   *[earendil-works/pi PR #7009](https://github.com/earendil-works/pi/pull/7009)*  
   Fixes #7012 and #6872. Changes clipboard copy to await `wl-copy`, check exit code, then fall through to xclip/OSC 52 only on failure. Sandbox users rejoice.

6. **#7031 — fix(coding-agent): keep model registry tests offline** (OPEN)  
   *[earendil-works/pi PR #7031](https://github.com/earendil-works/pi/pull/7031)*  
   CI flakiness due to timed-out requests to pi.dev model catalogue. Suggests `PI_OFFLINE=1` flag and test isolation. Important for reliable CI.

7. **#7028 — fix(coding-agent): keep /resume unfiltered after a resume** (CLOSED)  
   *[earendil-works/pi PR #7028](https://github.com/earendil-works/pi/pull/7028)*  
   Addresses nested self-reference bug: `/resume` inside a resumed session collapsed picker to single self-reference. Now idempotent.

8. **#7017 — feat(tui): experimental limited repainting** (CLOSED)  
   *[earendil-works/pi PR #7017](https://github.com/earendil-works/pi/pull/7017)*  
   mitsuhiko experiments with not repainting full transcripts on every repaint for very long sessions. Performance improvement for power users with 1000+ turn sessions.

9. **#6980 — fix(ai): make provider retries abortable** (CLOSED)  
   *[earendil-works/pi PR #6980](https://github.com/earendil-works/pi/pull/6980)*  
   Replaces Anthropic/OpenAI SDK inner retries with a common helper that respects `maxRetryDelayMS` and `AbortSignal`. Fixes #6911. Critical for users hitting provider timeouts.

10. **#7011 — fix(coding-agent): share host modules with native esm extensions** (OPEN)  
    *[earendil-works/pi PR #7011](https://github.com/earendil-works/pi/pull/7011)*  
    Jiti's native `import` bypassed aliases, causing extensions to load private copies of Pi packages. Fixes module state divergence for extension developers.

---

## Feature Request Trends

- **Strict / Constrained Tool Sampling**: Issues #6306 and PR #6341 reveal strong demand for provider-level grammar/JSON-schema constrained tool input. The `constrainedSampling` config flag is active design work by mitsuhiko.
- **Provider Aggregators**: Two separate requests for **SiliconFlow** (#4742, #7013) as a built-in provider—mirrors OpenRouter pattern. Community sees value in pre-configured aggregator support.
- **Per-Message Thinking Labels**: PR #7018 adds `hiddenThinkingLabel` field per `AssistantMessage`. Extensions want granular "thought for Xs" labels vs. current global label.
- **RPC Infrastructure**: PR #7042 (`get_sessions` RPC) points to growing interest in IDE/plugin integration. Expect more RPC command additions.
- **Session Management**: PR #7028 and #7039 (workflow state in `.pi/workflow.json`) show demand for better multi-session and multi-branch workflow state handling.

---

## Developer Pain Points

- **Wayland clipboard failures are the #1 recurring sandbox issue**: Issues #6872, #7012, PR #7009 — three separate reports of `wl-copy` failing silently. Community fix train is active but this has been open for days.
- **Model configuration is fragile**: #6948 (race condition), #6999 (hot-reload regression), #6951 (Qwen tier mismatch), #6998 (DeepSeek thinking format)—model init and refresh logic has multiple edge cases causing broken defaults.
- **File mutation queue breaks on symlinks**: #7041 — the queue uses `realpath()` which fails for missing target files through symlinked parents. Edge case but shows path resolution complexity.
- **Extension package validation is too lax**: #7033 — malformed `pi` manifest with non-array resource fields causes crash loop on session start with no recovery path.
- **Documentation gaps persist**: #7024 (security docs 404) and #5799 (missing `argument-hint` for skills) show docs lagging behind feature development.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-24

## Today's Highlights

This week sees a strong focus on infrastructure reliability and developer experience. A cluster of issues around broken update checks (npm 12 compatibility, mise wrapper path resolution) has been actively triaged and fixed. Meanwhile, significant PRs landed for workspace channel management APIs, hot-reloadable trust policies, and video input support in `/learn`. The community is also debating the scale of E2E test coverage, with some contributors questioning the value of non-deterministic model-dependent tests.

## Releases

**v0.20.1-nightly.20260724.7d17c44a3** — Nightly release.
- What's Changed: Test coverage for daemon metrics init ordering (PR #7456) and general performance improvements.
- Release notes: https://github.com/QwenLM/qwen-code/releases/tag/v0.20.1-nightly.20260724.7d17c44a3

## Hot Issues

1. **#5736** — [CLOSED] **“more full prompt reprocessing in recent update?”** — User reports that recent updates force full prompt re-processing even when continuing a conversation, with llama.cpp logging `forcing full prompt re-process`. **Why it matters:** Degrades latency and throughput for long sessions. Community: 7 comments, 1 👍.
   [https://github.com/QwenLM/qwen-code/issues/5736](https://github.com/QwenLM/qwen-code/issues/5736)

2. **#7147** — [CLOSED] **“MCP server never successfully get tool and resource listing”** — Fastmail's MCP server authenticates but times out during tool discovery. **Why it matters:** Blocks integration with a growing ecosystem of MCP-based services. 6 comments.
   [https://github.com/QwenLM/qwen-code/issues/7147](https://github.com/QwenLM/qwen-code/issues/7147)

3. **#7599** — [CLOSED] **“bug(artifacts): workspace artifacts created via record_artifact have no managedId”** — Artifacts emitted via `sse.artifact_changed` lack `managedId`, breaking managed-artifact consumers. **Why it matters:** Impacts any downstream system that tracks artifacts by their managed ID. 5 comments.
   [https://github.com/QwenLM/qwen-code/issues/7599](https://github.com/QwenLM/qwen-code/issues/7599)

4. **#7449** — [OPEN] **“proposal(memory): Define an enterprise external-memory integration profile”** — Proposes a provider-neutral specification for integrating with enterprise knowledge stores (Vector DBs, Graph DBs, etc.). **Why it matters:** A documented profile would unlock enterprise adoption and community-driven connectors. 5 comments.
   [https://github.com/QwenLM/qwen-code/issues/7449](https://github.com/QwenLM/qwen-code/issues/7449)

5. **#7485** — [OPEN] **“TUI: large blank area between last message and input prompt after resume”** — After `qwen resume`, a large empty gap appears above the input area. **Why it matters:** Breaks the interactive experience for session-jumping users. 4 comments.
   [https://github.com/QwenLM/qwen-code/issues/7485](https://github.com/QwenLM/qwen-code/issues/7485)

6. **#7264** — [OPEN] **“Cold-start follow-ups: remaining lazy-loading candidates from the ACP eager-closure audit”** — Identifies 2,420 modules (17.24 MiB) parsed on every cold start before the ACP child responds. **Why it matters:** Directly affects startup latency for server deployments. 4 comments.
   [https://github.com/QwenLM/qwen-code/issues/7264](https://github.com/QwenLM/qwen-code/issues/7264)

7. **#6806** — [OPEN] **“Status line context usage percentage does not refresh after /compress or /compress-fast”** — The footer token counter remains stale after compression until the next model request. **Why it matters:** Misleads users about actual context usage. 4 comments, welcome PR.
   [https://github.com/QwenLM/qwen-code/issues/6806](https://github.com/QwenLM/qwen-code/issues/6806)

8. **#7543** — [CLOSED] **“getNpmCliPath returns mise bash wrapper instead of npm-cli.js”** — Update check fails because `getNpmCliPath` resolves to a mise shim rather than the actual npm entry point. **Why it matters:** Clusters with **#7520** and **#7515** as a wave of npm-update regression bugs. 3 comments.
   [https://github.com/QwenLM/qwen-code/issues/7543](https://github.com/QwenLM/qwen-code/issues/7543)

9. **#7616** — [OPEN] **“Do we really need this many E2E tests?”** — Argues that most E2E failures are false positives from non-deterministic model API calls. **Why it matters:** A critical conversation about test strategy and CI reliability. 2 comments.
   [https://github.com/QwenLM/qwen-code/issues/7616](https://github.com/QwenLM/qwen-code/issues/7616)

10. **#7138** — [CLOSED] **“Restore prompt to input box when canceling a prompt (ctrl+c)”** — When a user cancels mid-typing, the prompt text is lost. **Why it matters:** Minor but high-frequency UX friction. 2 comments.
    [https://github.com/QwenLM/qwen-code/issues/7138](https://github.com/QwenLM/qwen-code/issues/7138)

## Key PR Progress

1. **#7624** — [OPEN] **“docs: refresh subagent lifecycle guidance”** — Updates documentation for headless fork support, completion notifications, and background-agent discovery. Important for agent developers.
   [https://github.com/QwenLM/qwen-code/pull/7624](https://github.com/QwenLM/qwen-code/pull/7624)

2. **#7637** — [OPEN] **“feat(serve): expose workspace Channel management API”** — Adds workspace-scoped CRUD for channels with optimistic concurrency. First piece of the new channel-management contract.
   [https://github.com/QwenLM/qwen-code/pull/7637](https://github.com/QwenLM/qwen-code/pull/7637)

3. **#7632** — [OPEN] **“feat(channels): GitHub polling adapter with notification-as-wakeup architecture”** — Polls GitHub notifications and responds to @mentions. Redesigned successor to #7266 with a more efficient wakeup pattern.
   [https://github.com/QwenLM/qwen-code/pull/7632](https://github.com/QwenLM/qwen-code/pull/7632)

4. **#7635** — [OPEN] **“feat(core): Align GenAI request telemetry with ARMS”** — Standardizes AI request telemetry to Alibaba ARMS semantics, enabling integration with enterprise observability stacks.
   [https://github.com/QwenLM/qwen-code/pull/7635](https://github.com/QwenLM/qwen-code/pull/7635)

5. **#7471** — [OPEN] **“feat(web-shell): add git mode selector for new session creation”** — Lets users choose between current-branch, new-branch, or detached-HEAD workflows during session creation from the Web Shell.
   [https://github.com/QwenLM/qwen-code/pull/7471](https://github.com/QwenLM/qwen-code/pull/7471)

6. **#7268** — [OPEN] **“feat(serve): Hot-reload workspace trust changes”** — Makes trust-policy changes effective without daemon restart, with semantic snapshots and generation-based reconciliation.
   [https://github.com/QwenLM/qwen-code/pull/7268](https://github.com/QwenLM/qwen-code/pull/7268)

7. **#7607** — [OPEN] **“feat(core): add configurable image generation models”** — Lets users select a dedicated image-generation provider and invoke it via a new `/model --image` command with approval gating.
   [https://github.com/QwenLM/qwen-code/pull/7607](https://github.com/QwenLM/qwen-code/pull/7607)

8. **#7497** — [OPEN] **“feat(cli): support native video input in /learn”** — Adds local and HTTP video file support to the `/learn` command, gated by model video modality.
   [https://github.com/QwenLM/qwen-code/pull/7497](https://github.com/QwenLM/qwen-code/pull/7497)

9. **#7594** — [OPEN] **“perf(cli): Propagate compile cache to ACP children”** — Shares Node.js module compile cache with spawned ACP child processes, reducing cold-start overhead.
   [https://github.com/QwenLM/qwen-code/pull/7594](https://github.com/QwenLM/qwen-code/pull/7594)

10. **#7542** — [OPEN] **“feat(cli): add version upgrade notices”** — Displays a "What's New" notice on startup after upgrades, following existing tip-history patterns.
    [https://github.com/QwenLM/qwen-code/pull/7542](https://github.com/QwenLM/qwen-code/pull/7542)

## Feature Request Trends

- **Enterprise Memory & Context Integration**: Two proposals this week (#7449, #7585) call for structured profiles connecting Qwen Code to external knowledge stores — Vector DBs, enterprise search, and admin-bound memory services. The community is pushing for a documented, provider-neutral contract rather than ad-hoc integrations.
- **Channel & Integration Expansion**: The new GitHub polling adapter (#7632) and the channel management API (#7637) signal growing demand for headless, bot-style deployments. WeChat channel support is also being actively tested and debugged (#7590).
- **Media Modality Support**: Video input in `/learn` (#7497) and configurable image generation models (#7607) reflect a trajectory beyond text-only interactions. Users want unified multi-modal workflows within the same agent session.

## Developer Pain Points

- **Update/Bootstrap Reliability**: Three separate issues (#7543, #7520, #7515) report update check failures caused by npm 12 API changes, mise shim interception, and registry response parsing. This is the highest-frequency bug class this week.
- **E2E Flakiness and CI Bloat**: Issue #7616 directly questions the value of model-dependent E2E tests that fail non-deterministically. Main CI failures (#7559, #7605) further highlight the problem. The community wants a more targeted, deterministic testing strategy.
- **UI Polish Regressions**: Multiple TUI issues (blank areas after resume #7485, stale token counters #6806, flickering in terminals #6137, icon alignment #7633) indicate that recent UI changes introduced regressions that require prompt resolution.
- **Configuration Discovery Bugs**: Skills not loading in channel mode (#7575), memory files not registered in the read cache (#7287), and workspace selector misbehavior (#7430) point to a pattern of incomplete configuration state propagation across different execution modes.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-24

## Today's Highlights

The community is experiencing a **major reliability and security push** as the v0.9.1 release gate (#4713) drives a wave of critical bug reports across state persistence, MCP server execution, and tool sandboxing. **Nine+ new issues filed today** expose systemic concurrency problems in JSONL logging, session index compaction, and SQLite configuration — along with security bypasses in execpolicy path matching and tool name collisions. Two community PRs land fixes for fleet string parsing and TUI shell output archiving.

## Releases
**No new releases in the last 24 hours.**

---

## Hot Issues

### #4713 — v0.9.1 security gate: deep scan and dependency alert disposition *(OPEN)*
- **Why it matters:** Tagging v0.9.1 is blocked on closing 17 Dependabot alerts (7 high, 10 moderate) across axios, bcrypt, and other npm families.
- **Community reaction:** No discussion yet — appears to be the release manager's checklist.

### #4716 — TUI exits immediately on launch (`[Process completed]`) in fresh terminal *(OPEN)*
- **Why it matters:** A **stop-ship** bug: `codew` fails to start on macOS Terminal.app in v0.9.1 candidate. Likely blocks the release.
- **Community reaction:** Author identified known-good commands but root cause unclear.

### #4719 — Composer: large pasted prompts get byte-corrupted before submission *(OPEN)*
- **Why it matters:** Paths get truncated (`codewhale-v091-exact-88a158-ci` → `work-88a158-ci`), characters dropped — downstream agents make wrong decisions from corrupted input.
- **Community reaction:** Comment notes the corruption "appears to happen before the model sees it."

### #4727 — `codewhale mcp-server` never spawns configured MCP servers *(OPEN)*
- **Why it matters:** A documented CLI subcommand returns fabricated stub responses instead of running actual MCP servers — core feature is completely broken.
- **Community reaction:** No comments yet; author filed with code evidence.

### #4733 — Malformed project config.toml silently treated as "no project config" *(OPEN)*
- **Why it matters:** Silent swallowing of parse errors makes config problems invisible until runtime misbehavior surfaces. Easy to ship with broken settings.
- **Community reaction:** Filed today, no discussion.

### #4735 — One corrupted line in session_index.jsonl permanently breaks all thread-name lookups *(OPEN)*
- **Why it matters:** Single JSON parse failure aborts the entire session index read, locking users out of all session continuity.
- **Community reaction:** Filed today.

### #4734 — SQLite connection has no busy_timeout/WAL — concurrent processes fail hard *(OPEN)*
- **Why it matters:** Multi-process scenarios (e.g., Fleet workers) will hit `SQLITE_BUSY` immediately. Production-unfriendly.
- **Community reaction:** Part of a cluster of state-layer reliability issues filed together.

### #4740 — Denied-prefix rules bypassed by inserting a flag before the subcommand *(OPEN)*
- **Why it matters:** A string-match-only deny list (`denied_prefixes = ["git push"]`) is trivially bypassed as `git --flag push`. Security hole.
- **Community reaction:** Filed today.

### #4725 — Execpolicy path-based rules lowercase paths, ignoring case-sensitive filesystems *(OPEN)*
- **Why it matters:** On Linux/Mac, `parse_path_for_matching` unconditionally lowercases paths — `/MyProject/main.rs` and `/myproject/main.rs` are treated as identical. Incorrect for case-sensitive filesystems.
- **Community reaction:** Filed today.

### #4741 — JsonlHookSink has no write synchronization — concurrent tool calls corrupt the JSONL log *(OPEN, reopened as #4739)*
- **Why it matters:** Each `emit()` opens a fresh file handle with two unsynchronized `write_all` calls — concurrent tool calls produce interleaved, unreadable JSONL.
- **Community reaction:** Closed as duplicate of #4739, but the pattern of filing as separate issues suggests community concern.

---

## Key PR Progress

### #4742 — fix(workflow): preserve hashes in fleet strings *(OPEN)*
- **Author:** nightt5879
- **Key feature:** Fixes the naive TOML parser that truncated `#` within quoted values (covers #4732). Properly escapes comments vs. in-string hashes.
- **Why it matters:** Fleet definitions containing issue references, role values, or comments were silently corrupted.

### #4724 — fix(tui): archive completed background shell output *(OPEN)*
- **Author:** qinlinwang
- **Key feature:** Background shell jobs now archive their final stdout/stderr tail into the originating ExecCell and freeze the duration.
- **Why it matters:** Eliminates confusing "disappearing output" after background jobs complete.

### #4722 — fix(tui): show complete edit previews in details *(OPEN)*
- **Author:** nightt5879
- **Key feature:** Compact `edit_file` approval cards remain bounded; full `-/+` preview rendered lazily in Alt+V details pager, with regression tests.
- **Why it matters:** Users couldn't see full diff context before approving edits.

### #4346 — fix: sanitize tool input_schema for Anthropic adapter *(CLOSED)*
- **Author:** qinlinwang
- **Key feature:** Strips top-level `oneOf`/`anyOf`/`allOf` from tool schemas to avoid Anthropic API 400 errors.
- **Why it matters:** All Anthropic users with tools using JSON Schema composition were blocked.

### #4610 — feat(tui): add configurable session token header *(OPEN)*
- **Author:** XhesicaFrost
- **Key feature:** Opt-in header showing cumulative input/cache-hit/output tokens via `header_items = ["tokens"]`.
- **Why it matters:** Developer productivity — live token visibility without switching views. References #4520.

### *#4042 — feat: Environment-level tool sandboxing for sub-agents *(CLOSED)*
- **Author:** JayBeest
- **Key feature:** Runtime enforcement of `--disallowed-tools` across sessions, sub-agents, Fleet workers, and MCP servers.
- **Why it matters:** Security foundation for multi-agent workflows. Reviewed for 19 comments before closure.

### *(PRs #4730–4742 are mostly new today; only #4742 and #4722 are substantive code changes. The remaining are bug reports or internal tracking.)*

---

## Feature Request Trends

| Trend | Frequency | Evidence |
|---|---|---|
| **Security audits / hardening** | 🔥🔥🔥 | #4713 release gate, #4725 path case sensitivity, #4726 network policy, #4730 write-tool allowlist drift, #4740 prefix bypass |
| **Reliability / concurrency fixes** | 🔥🔥🔥 | #4731 worktree branch cleanup, #4733 silent config failures, #4734 SQLite busy_timeout, #4735 single-line corruption, #4736 compaction race, #4738 uncancellable stdio |
| **TUI polish / usability** | 🔥🔥 | #4721 settings menu audit, #4720 auto-switching clarity, #4723 AltGr keyboard layout |
| **MCP server correctness** | 🔥🔥 | #4727 stub response, #4728 duplicate execution, #4729 tool name collisions |
| **Large input handling** | 🔥 | #4719 paste corruption |

---

## Developer Pain Points

1. **Release quality gate frustration:** The v0.9.1 release is blocked by 17 unresolved Dependabot alerts and the TUI crash-on-launch bug (#4716) — community may perceive slow delivery.
2. **Concurrent state corruption is systemic:** At least 4 issues today (#4734, #4735, #4736, #4741) describe independent state-layer race conditions — the `StateStore` was not designed for multi-process access.
3. **Security by oversight:** Multiple security issues (#4726, #4729, #4730, #4740) stem from incomplete refactoring or allowlist drift — suggests need for broader security review infrastructure.
4. **Unreliable MCP server implementation:** `codewhale mcp-server` (#4727) is a flagship feature that never worked — likely eroding trust in the MCP integration.
5. **Silent failures hide bugs:** Malformed config (#4733) and corrupted JSONL (#4735) are silently swallowed, making downstream debugging extremely difficult.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*