# AI CLI Tools Community Digest 2026-08-08

> Generated: 2026-08-08 01:45 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report — AI CLI Developer Tools
**Date:** 2026-08-08

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape is experiencing rapid, concurrent evolution across seven major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI—with multiple releases shipping within narrow 24-hour windows. The ecosystem is converging on several critical themes: **standardized agent memory files** (AGENTS.md), **MCP (Model Context Protocol) interoperability** across non-native providers, **Windows platform parity**, and **background/sub-agent reliability**. Simultaneously, individual tools are differentiating through unique architectural bets: OpenAI Codex is investing heavily in gRPC-based code-mode protocols, Claude Code is expanding self-hosted runners and plugin sources, Qwen Code is building a unified Web Shell platform, and Pi is focusing on compaction lifecycle reliability. The competitive pressure is driving exceptionally fast release cadences—GitHub Copilot CLI shipped three versions in 24 hours, and OpenAI Codex shipped two alphas—while the community is increasingly vocal about trust, safety, and data integrity issues across all tools.

---

## 2. Activity Comparison

| Tool | Releases (Last 24h) | Hot Issues (Notable) | Key PRs (Active) | Community Engagement (Top Issue) | Dominant Activity |
|------|---------------------|---------------------|------------------|--------------------------------|-------------------|
| **Claude Code** | 2 (v2.1.225, v2.1.224) | 10 tracked | 3 key PRs | 4,526 👍 (#6235 AGENTS.md) | AGENTS.md standardization push, self-hosted runners, plugin ecosystem hardening |
| **OpenAI Codex** | 3 (alpha .1, .2, .4) | 10 tracked | 10 key PRs | 58 👍 (#8648 context confusion) | gRPC protocol foundation, MCP event subscriptions, Windows sandbox fixes |
| **Gemini CLI** | 3 (nightly + 2 patches) | 10 tracked | 10 key PRs | 8 👍 (#21409 generalist agent hangs) | SSRF security fix, capacity exhaustion fixes, eval infrastructure |
| **GitHub Copilot CLI** | 3 (v1.0.79-7→9) | 10 tracked | 0 (24h) | 23 👍 (#1632 skill subfolders) | Enterprise policies, `--plan`+autopilot, Windows clipboard regression |
| **Kimi Code CLI** | 0 | 10 tracked | 10 key PRs | 21 comments (#1283 memory system) | UTF-8 corruption fixes, yolo-mode safety incident |
| **OpenCode** | 1 (v1.18.15) | 10 tracked | 10 key PRs | 37 👍 (#23153 crypto payments) | Go subscription billing issues, Mermaid rendering, Modal driver |
| **Pi** | 1 (v0.84.1) | 10 tracked | 10 key PRs | 15 👍 (#6879 auto-compaction) | Compaction reliability, TUI performance, Cursor CLI bridge |
| **Qwen Code** | 1 (nightly) | 10 tracked | 10 key PRs | 3 👍 (#7118 installer failure) | Web Shell expansion, ACP compliance, tmux interactive sub-agents |
| **DeepSeek TUI** | 0 | 10 tracked | 10 key PRs | 13 comments (#2934 sidebar) | v0.9.4 release blockers, sub-agent state, MCP registry sync |

---

## 3. Shared Feature Directions

The following requirements are emerging across **multiple** tool communities:

| Requirement | Tools Reporting | Specific Need |
|-------------|----------------|--------------|
| **Standardized agent memory file (AGENTS.md)** | Claude Code (#6235), Kimi Code (#1283), DeepSeek TUI (#2492) | Cross-tool portable memory format; persistent context without re-explaining project structure; industry standardization |
| **MCP interoperability for non-native providers** | OpenAI Codex (#26234), Gemini CLI (#24246 tool limits), Qwen Code (#8550 timeouts) | Flatten namespace-based tool serialization for BYO-model users; adaptive tool scoping over hard caps; timeout handling for SSE servers |
| **Skills organization & discovery** | Copilot CLI (#1632), Gemini CLI (#21968), OpenCode (#38853), Claude Code (#14920) | Subfolder support for 10+ skill libraries; autonomous skill selection without explicit prompts; per-skill enable/disable granularity |
| **Windows platform parity** | Claude Code (#59750, #84072), OpenAI Codex (#10090, #37043), Copilot CLI (#3622), Gemini CLI (various), DeepSeek TUI (#2430) | Sandbox reliability, Computer Use functionality, clipboard fixes, IME/pinyin rendering, path handling, installer robustness |
| **Session resume & persistence** | Kimi Code (#1258), DeepSeek TUI (#425), Pi (compaction), OpenCode (web UI) | Resumable sub-agent state, cross-session memory, `--continue` flags, durable sidebars instead of popup pickers |
| **Background/reliability of autonomous agents** | Gemini CLI (#22323, #21409), Claude Code (#78487), Kimi Code (#2596) | Auto-deny/timeout for permission prompts, non-blocking background agents, honest status reporting (don't mask interruptions as success) |
| **Pre-flight change previews (dry-run/plan modes)** | Kimi Code (#2550, #2477), Copilot CLI (`--plan`), DeepSeek TUI (batch approval) | Show multi-file changes with approval gates before executing; reduce destructive-operation risk |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|------------|-------------|------------|-------------|-----------|----------|----|-----------|-------------|
| **Primary Focus** | Enterprise plugin ecosystem, self-hosted environments | Protocol standardization (gRPC, MCP), Windows sandbox | Agent self-awareness, evaluation infrastructure | Enterprise policy control, terminal UX | Safety-first editing, memory system | Web UI maturation, billing transparency | Compaction lifecycle, TUI performance | Unified Web Shell platform, ACP compliance | Sub-agent state management, model fleets |
| **Target Users** | Enterprise teams, plugin authors | Pro developers, BYO-model users | Google ecosystem developers | GitHub-centric enterprise devs | Privacy-conscious individual devs | Startup/indie devs, web-first teams | Local-first, performance-focused devs | Multimodal WebShell users, ACP clients | Multi-vendor power users |
| **Technical Approach** | Node.js, plugin sources (git/zip), hook system | Rust, gRPC/tonic, hosted Plugin Runtime | TypeScript, Caretaker evaluation, AST-aware tooling | TypeScript/Ink, enterprise policies | Go, byte-level file safety, `StrReplaceFile` | TypeScript, environment drivers, server-side rendering | Rust, SQLite records, harness-v2 lifecycle | TypeScript, Web Shell daemon, tmux-backed sub-agents | Rust, 464 dead-code debt, shared-checkout claims |
| **Model Strategy** | Claude models (Opus 4.8 etc.) | GPT-5.2, gpt-5.2-xhigh | Gemini 3.6 Flash, 3.5 Flash-Lite | Multi-model (haiku, kimi-k3) | Moonshot AI models | Provider-agnostic (Bedrock, DeepSeek, Copilot) | GPT-5.6-sol, Qwen, Cursor bridge | Qwen models + multimodal | DeepSeek v4 pro/flash auto-select |

---

## 5. Community Momentum & Maturity

| Tool | Momentum | Maturity Signals | Red Flags |
|------|----------|------------------|-----------|
| **Claude Code** | ★★★★★ — Most-upvoted issue in tracker (4.5K 👍); 2 meaningful releases/week | Longest-running ecosystem, extensive plugin ecosystem, mature hook system | Windows instability cluster, safeguard false positives eroding trust |
| **OpenAI Codex** | ★★★★★ — 3 alphas in 24h; active architectural PRs | Protocol-first approach indicates long-term platform ambitions | 0.147.0 regressions (Azure) within 24h of release suggest insufficient testing |
| **Gemini CLI** | ★★★★☆ — Nightly + patch releases; SSRF fix shows strong security focus | Caretaker evaluation framework signals maturity; but P1 hangs persist | "Success" masking failures undermines agent telemetry trust |
| **Copilot CLI** | ★★★★☆ — 3 releases/day; enterprise policy focus | GitHub ecosystem leverage; but 0 PRs in 24h suggests internal pipeline | Windows clipboard regressions; version-pinning confusion in npm shim |
| **Kimi Code** | ★★★☆☆ — Community convergence on UTF-8 fixes (2 independent PRs) | Smaller ecosystem; safety-conscious roadmap | Yolo-mode data-loss incident (#2596) needs rapid response |
| **OpenCode** | ★★★★☆ — Active PR flow; contributor streak (kitlangton, Cordtus) | Go subscription infrastructure; but 401 errors and billing bugs are trust killers | Billing issues (#41146) could drive paid users away |
| **Pi** | ★★★★☆ — High-CPU PRs landing; Cursor bridge innovation | mitsuhiko's involvement signals serious engineering | Compaction failures (#6879) are #1 priority; startup crash on Node 23 |
| **Qwen Code** | ★★★★☆ — Web Shell expansion; ACP compliance push | Platform consolidation signals ambition | Windows terminal regressions recurring; CI blind spots |
| **DeepSeek TUI** | ★★★☆☆ — 17 PRs in 24h; 5 external contributors | Release train discipline (v0.9.4 blockers being cleared) | 464 dead-code attributes; duplicated runtime architecture |

---

## 6. Trend Signals

**Strong Signals (appearing across 3+ tools, with direct community demand):**

1. **Standardized agent memory is the next industry battleground.** AGENTS.md push (Claude Code #6235, 4.5K 👍) plus Kimi's memory system (#1283) and DeepSeek's cross-session memory (#2492) — expect a universal format to emerge, likely AGENTS.md, with major tools converging within 2-3 quarters.

2. **MCP is becoming the universal tool interface — but namespaces must go.** OpenAI Codex's proprietary namespace serialization (#26234) blocks the BYO-model community; Qwen's SSE timeouts and Gemini's 128-tool cap show the ecosystem is straining. **Open source tools should avoid proprietary MCP serialization; it's a compatibility tax.**

3. **Windows is the weakest platform across all tools.** Every single tool has an active Windows-specific blocker (sandbox failures, clipboard bugs, IME rendering, installer crashes). **Developers on Windows should expect rough edges; consider WSL for production use.**

4. **Agent self-reporting is broken.** Gemini's MAX_TURNS-as-success (#22323), Claude's background agent stalls (#78487), Kimi's yolo-mode data loss (#2596), and OpenCode's billing misreporting all share a root: **uncertain control over what the agent actually did.** This is the #1 trust issue across the ecosystem.

5. **Plan-first, approve-later is emerging as the safety default.** Copilot's `--plan` + autopilot, Kimi's `--diff` PR (#2550), and DeepSeek's batch approvals point to a shared UX pattern: **show before do.**

**Emerging Signals (2 tools or earlier stage):**

6. **Enterprise policy controls are a differentiator for adoption.** Copilot's `allow-auto-only` and `--plan`+autopilot, Claude's self-hosted runners — enterprise buyers are voting with their wallets for governance.

7. **Cross-tool credential and config bridging is trending.** Pi's Cursor CLI bridge, OpenCode's Copilot re-auth, Qwen's WebBridge — users are tired of per-tool auth; expect a universal agent credential layer.

8. **Evaluation infrastructure is becoming a competitive moat.** Gemini's Caretaker eval framework, DeepSeek's audit sweep, Qwen's review budget controls — tools that can prove their correctness will win long-term trust.

9. **Billing and quota transparency is a trust multiplier.** OpenCode's quota miscalculations and Claude's spend limits — paid-tier users are sensitive to silent billing bugs.

10. **Local-first and sandbox-friendly operations are rising.** Pi's `command -v` swap, Gemini's zero-dependency sandboxing proposal (#19873), Qwen's env scrub (#8663) — expect more "no-brainer" fixes eliminating external binaries and inherited environment leakage.

---

*Report generated from community digest data for 2026-08-08. Metrics are snapshots, not trends over time.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-08 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

### #1 — skill-creator Evaluation Loop Fixes (Multiple PRs)
**PRs:** [#1298](https://github.com/anthropics/skills/pull/1298) (MartinCajiao), [#1099](https://github.com/anthropics/skills/pull/1099) (joshuawowk), [#1050](https://github.com/anthropics/skills/pull/1050) (gstreet-ops), [#1323](https://github.com/anthropics/skills/pull/1323) (Polluelo978), [#1261](https://github.com/anthropics/skills/pull/1261) (alvingarcia) — **all Open**

The single most active topic in the repository. The `run_eval.py` script—the core of the skill-creator's description-optimization loop—is fundamentally broken: it reports **0% recall on every query**, including literal slash-command invocations of the skill being tested ([#556](https://github.com/anthropics/skills/issues/556), 10+ independent reproductions). Community members have identified five distinct root causes: (a) the eval artifact isn't installed as a real skill, (b) Windows subprocess pipe reading fails with `WinError 10038`, (c) `claude.cmd` isn't resolved via `PATHEXT` on Windows, (d) trigger detection misses real skill names, and (e) synthetic command files pollute the user's live project `.claude/commands/` directory during parallel eval.

**Status:** All five PRs remain Open, unmerged, and unfixed at the repository level. This is the ecosystem's most critical unresolved blocker.

### #2 — document-typography ([PR #514](https://github.com/anthropics/skills/pull/514))
**Author:** PGTBoos | Created 2026-03-04 | **Open**

A quality-control skill preventing typographic defects in AI-generated documents: orphan word wrap (1–6 words spilling to the next line), widow paragraphs (section headers stranded at page bottom), and numbering misalignment. The author argues these issues affect every document Claude generates, and users rarely ask for typographic quality explicitly.

**Status:** Open, no maintainer response. High practical value; competes with broader document-format skills for attention.

### #3 — ODT (OpenDocument) Skill ([PR #486](https://github.com/anthropics/skills/pull/486))
**Author:** GitHubNewbie0 | Created 2026-03-01 | **Open**

Adds complete OpenDocument Format support (.odt, .ods): creation, template filling, and ODT→HTML conversion. Triggers on any mention of ODT, ODS, ODF, OpenDocument, or LibreOffice. Complements the existing docx/pdf skills with a fully open-source document format.

**Status:** Open since March; no maintainer interaction visible. Long-pending, but fills a clear format gap.

### #4 — Frontend-Design Skill Clarity Overhaul ([PR #210](https://github.com/anthropics/skills/pull/210))
**Author:** justinwetch | Created 2026-01-05 | **Open**

A substantial revision of the frontend-design skill focused on actionability and internal coherence—every instruction must be executable within a single conversation. Includes improvements to trigger specificity.

**Status:** Open since January. No maintainer response; six months without review suggests maintainer bandwidth is a systemic issue.

### #5 — skill-quality-analyzer + skill-security-analyzer ([PR #83](https://github.com/anthropics/skills/pull/83))
**Author:** eovidiu | Created 2025-11-06 | **Open**

Two meta-skills for evaluating Claude Skills themselves: a five-dimension quality analyzer (structure, documentation, examples, resources, triggers) and a security analyzer (prompt injection, path traversal, exfiltration risk). Directly addresses the trust-boundary concerns raised by the [#492 security issue](https://github.com/anthropics/skills/issues/492).

**Status:** Open since November 2025—the longest-pending PR in the top tier.

### #6 — pyxel-rs Skill for Retro Games ([PR #525](https://github.com/anthropics/skills/pull/525))
**Author:** kitao | Created 2026-03-05 | **Open**

Wraps [pyxel-mcp](https://github.com/kitao/pyxel-mcp) for retro/pixel-art/8-bit game development in Python. Covers a full write → run_and_capture → inspect → iterate loop. Notably kept alive: still updated as of 2026-07-15.

**Status:** Open; active author maintenance. Niche but demonstrates the MCP-skill integration pattern.

---

## 2. Community Demand Trends

**Trend 1 — Skill Reliability Tooling (dominant).** The single loudest demand is not a new skill—it's *tooling to make skills work correctly*. The `run_eval.py` bug cluster ([#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169), and five+ PRs) demonstrates that the community's top priority is verification: **skills that test and improve other skills** reliably, cross-platform (Windows especially).

**Trend 2 — Security & Trust Boundaries.** Issue [#492](https://github.com/anthropics/skills/issues/492) (43 comments, the most-discussed issue in the repo) exposes a **trust-boundary vulnerability**: community skills distributed under the `anthropic/` namespace can impersonate official skills and trick users into granting elevated permissions. The proposal of security-analyzer meta-skills ([PR #83](https://github.com/anthropics/skills/pull/83)) and agent-governance skills ([Issue #412](https://github.com/anthropics/skills/issues/412)) signals demand for security as a first-class skill category.

**Trend 3 — Document-Format Completeness.** The document-skills plugin continues to expand: ODT ([#486](https://github.com/anthropics/skills/pull/486)), typographic quality ([#514](https://github.com/anthropics/skills/pull/514)), and multiple docx/pdf bugfix PRs (#538, #541) show sustained demand for **robust office-format handling**, particularly around OOXML ID-collision and case-sensitivity edge cases.

**Trend 4 — Context-Window Hygiene.** Issues [#1487](https://github.com/anthropics/skills/issues/1487) (claude-api skill injecting ~156k tokens per tool call) and [#189](https://github.com/anthropics/skills/issues/189) (duplicate skills across plugins) show the community is hitting real **context-window exhaustion** and deduplication pain. Demand for leaner, non-redundant skills is growing.

**Trend 5 — Organizational Sharing & Workflow.** Issue [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) requests org-wide skill sharing in Claude.ai—enterprise adoption is driving demand for **distribution infrastructure** rather than new skill content.

---

## 3. High-Potential Pending Skills

These active-comment PRs are unmerged but may land soon:

| Skill | PR | Purpose | Signals |
|---|---|---|---|
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | Mechanical file verification + four-dimension reasoning quality gate before delivery; universal across stacks/models | Author also filed proposal [#1385](https://github.com/anthropics/skills/issues/1385); recent (June-July 2026), active |
| **plan-file-hygiene** | [#1479](https://github.com/anthropics/skills/pull/1479) | Lifecycle management for planning artifacts (Claude Code plans that accumulate with no cleanup) | Addresses issue #1417; explicitly credits community framing; created July 2026—freshest proposal |
| **color-expert** | [#1302](https://github.com/anthropics/skills/pull/1302) | Color naming systems (ISCC-NBS, Munsell, RAL, CSS) + color-space selection tables | From meodai (well-known design-token author); updated as recently as July 2026 |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Full testing-stack coverage: Testing Trophy, AAA pattern, React Testing Library, edge cases | Broad scope, active March–April 2026 |
| **SAP-RPT-1-OSS predictor** | [#181](https://github.com/anthropics/skills/pull/181) | SAP's open-source tabular foundation model for predictive analytics on business data | Enterprise vertical; niche but concrete |

**Watch items:** The five skill-creator fix PRs (#1298, #1099, #1050, #1323, #1261) are the highest-value pending merges, but require repository-maintainer coordination to consolidate overlapping Windows fixes.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **trustworthy tooling—reliable evaluation infrastructure, security boundary enforcement, and context-efficient execution—over new skill content**, evidenced by the fact that the five most-contested PRs are all bugfixes to `run_eval.py`, the security issue (#492) has 4× the comments of any other issue, and context-window exhaustion is emerging as a recurring failure mode.

---

# Claude Code Community Digest — 2026-08-08

## Today's Highlights
Two meaningful releases landed this week: **v2.1.225** adds gateway spend-limit support to usage warnings (including reset time and operator messages), while **v2.1.224** introduces self-hosted runners for web/mobile/desktop sessions and a new `archive` plugin source for HTTPS-hosted zip installs. The community's biggest ongoing push remains **AGENTS.md support** (#6235, 4,526 👍 and 347 comments), reflecting industry-wide standardization pressure on Claude Code's memory file format.

## Releases
**v2.1.225** (latest)
- Added gateway spend-limit support to Claude Code's usage warning; limit-reached messages now name the cap, its reset time, and the operator's message (requires gateway on 2.1.225)
- Added workspace trust prompt to `claude agents` for untrusted directories, matching existing behavior

**v2.1.224**
- Added self-hosted environments: `claude self-hosted-runner` turns your own machines or containers into a place Claude Code web, mobile, and desktop sessions can run (Team and Enterprise plans)
- Added `archive` plugin source: install plugins from a zip over HTTPS without git

## Hot Issues
1. **[#6235 — Support AGENTS.md](https://github.com/anthropics/claude-code/issues/6235)** *(OPEN, 4,526 👍, 347 comments)* — The most-upvoted issue in the tracker. Users want a standardized memory file compatible with Codex, Amp, Cursor, and others. Community argues CLAUDE.md is too Claude-specific and hurts cross-tool collaboration.

2. **[#59750 — `claude agents` TUI unresponsive on Windows Terminal](https://github.com/anthropics/claude-code/issues/59750)** *(OPEN, 8 👍)* — Broken rendering and dead input loop on Windows Terminal since 2.1.143. Stale label attached but still open; Windows users are likely hitting this daily.

3. **[#81853 — Fable 5: text in responses with tool calls never displayed](https://github.com/anthropics/claude-code/issues/81853)** *(OPEN, 3 👍)* — Text portions of assistant responses vanish when tool calls are present (visible only in detailed transcript). Works fine with Opus 4.8 — points to model-specific rendering bug.

4. **[#50884 — Remove stale Remote Control environments](https://github.com/anthropics/claude-code/issues/50884)** *(OPEN, 26 👍)* — Ghost environments linger on claude.ai/code and can't be deleted, causing confusion and potential session mismatches. Related bug #77372 shows 404s and ghost sessions.

5. **[#72495 — Prompt suggestions suppressed by rate-limit status](https://github.com/anthropics/claude-code/issues/72495)** *(OPEN)* — Detailed investigation pinpoints a strict-equality gate in the binary that suppresses suggestions during `allowed_warning` status. Includes live-repro with prediction confirmed.

6. **[#82179 — Bash-tool grep shim catastrophic backtracking](https://github.com/anthropics/claude-code/issues/82179)** *(OPEN)* — Embedded ugrep emulation hits 6.6 GB RSS and OOM on a 20 KB file with `-o` + bounded quantifiers. Serious resource-exhaustion bug for regex-heavy workflows.

7. **[#84689 — CVP approved org still blocked by cyber safeguards](https://github.com/anthropics/claude-code/issues/84689)** *(OPEN)* — Legitimate orgs with matching IDs blocked; appeal form shows no fields. False positives in safeguards are eroding trust for security researchers.

8. **[#84072 — ECONNRESET on Windows during API stream](https://github.com/anthropics/claude-code/issues/84072)** *(OPEN)* — Stream resets after first chunk on Windows 10/11 across both VS Code extension and CLI. Reproducible and unaddressed since 2.1.222.

9. **[#78487 — Background agents block on unanswered permission prompts](https://github.com/anthropics/claude-code/issues/78487)** *(OPEN)* — Workflow-spawned agents stall indefinitely (55-minute silent stall documented) with no auto-deny or timeout. Critical for unattended automation.

10. **[#84945 — Peer-messaging socket fails to bind for identical sessions](https://github.com/anthropics/claude-code/issues/84945)** *(OPEN)* — One-way cross-session messaging failure where two identical sessions can't both bind `/tmp/cc-socks` peer sockets. New but potentially disruptive for multi-session workflows.

## Key PR Progress
1. **[#84854 — Fix stale hooks documentation link](https://github.com/anthropics/claude-code/pull/84854)** *(OPEN)* — Updates outdated `docs.anthropic.com` URL to `code.claude.com` in example hook script; 46 other links already updated.

2. **[#84747 — Fix hookify rule evaluation scope and secure file read](https://github.com/anthropics/claude-code/pull/84747)** *(OPEN)* — Fixes event-filter bypass in `load_rules()` when `event` is `None`; tools like `Read` and `Browser` should only trigger `all`-scoped rules. Security-relevant for plugin authors.

3. **[#84711 — Fix yaml injection and symlink credential overwrites](https://github.com/anthropics/claude-code/pull/84711)** *(OPEN)* — Addresses #76580 with defensive checks against YAML injection and symlink-based credential overwrites in plugin scripts. Important security hardening for plugin ecosystem.

## Feature Request Trends
- **AGENTS.md standardization** (dominates with 4,526 👍) — industry alignment and cross-tool portability
- **Plugin skill granularity** (#14920, 83 👍) — individual skill enable/disable rather than all-or-nothing
- **Session management UX** — renaming sessions (#51791), removing stale environments (#50884), pinning responses (#70987)
- **Larger `/goal` conditions** (#84953) — 4000-character limit is too small for complex goals; file reference requested as alternative
- **Better visibility** — device/session info on Authorization Tokens page (#84949); high-contrast theme support in desktop app (#84963)

## Developer Pain Points
- **Safeguard false positives** — Legitimate security work and bug-bounty workflows get flagged and downgraded mid-task (#84952); approved orgs still blocked (#84689). Trust in the safeguard system is eroding.
- **Windows instability** — TUI unresponsiveness (#59750), ECONNRESET streams (#84072), file-lock on relaunch (#76192), MSIX crashes on Intel GPUs (#83028) — Windows remains a second-class platform.
- **Autonomous agent reliability** — Background agents stall on permission prompts (#78487), connectors don't attach until first inbound message (#83694), and Fable 5 model underwhelms on multi-step pipelines (#79247).
- **Unexpected resource exhaustion** — grep shim OOMs (#82179) and arbitrary tool complexity checks blocking legitimate commands (#84720) create unpredictable failures.
- **Undocumented behavior** — Plugin auto-install of dependencies (#84939), proxy credential handling failures (#84964), and silent feature gates (e.g., tool loading differences between platforms #84677) make troubleshooting harder.


</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-08

---

## 1. Today's Highlights

Three rapid-fire alpha releases (`0.148.0-alpha.1`, `.2`, `.4`) landed within 24 hours, signalling active stabilization work. Meanwhile, the community continues to push on two fronts: **Windows sandbox/Computer Use reliability** (multiple open issues with `CreateProcessAsUserW failed: 5` and `EnumWindows` errors) and **MCP tool interoperability with non-OpenAI providers** — the latter now has 41 👍 and 32 comments, making it one of the most-watched open issues. On the PR side, a significant architectural push is underway around code-mode gRPC protocol definitions, MCP event subscriptions, and skill locator optimization.

---

## 2. Releases

Three alpha releases were published in the last 24 hours:

- **[rust-v0.148.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.1)** — Base alpha release.
- **[rust-v0.148.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.2)** — Incremental alpha release.
- **[rust-v0.148.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.4)** — Latest alpha; note that `.3` was skipped, suggesting either a failed build or a hot-fix bump.

No detailed changelogs were provided in the release notes. The rapid iteration suggests active bug-fixing on the `0.148.0` line, likely addressing regressions reported against `0.147.0` (see issues #37380 and #37425 below).

---

## 3. Hot Issues (10 Noteworthy)

1. **[#8648 — Codex replies to earlier messages instead of latest one](https://github.com/openai/codex/issues/8648)**
   - **Comments:** 82 | **👍:** 58
   - **Why it matters:** The most-commented open issue. Context confusion in multi-turn conversations is a critical UX and correctness bug. High 👍 count indicates broad impact. Three model/version-related variables (0.77.0, Pro, gpt-5.2-xhigh) suggest this isn't isolated.

2. **[#26234 — Flatten MCP namespace tools for non-OpenAI providers](https://github.com/openai/codex/issues/26234)**
   - **Comments:** 32 | **👍:** 41
   - **Why it matters:** MCP tools are serialized in a proprietary `{"type": "namespace", ...}` format that Ollama, LM Studio, OpenRouter, and Bedrock can't consume. This is a major blocker for the growing BYO-model community. High engagement signals strong demand for provider-agnostic MCP support.

3. **[#12491 — MCP child processes not reaped after task completion (1300+ zombies, 37GB leak)](https://github.com/openai/codex/issues/12491)**
   - **Comments:** 38 | **👍:** 5
   - **Why it matters:** Severe resource leak in the GUI app. Zombie process accumulation and multi-GB memory leaks make long-running sessions unusable. Closed, but its severity and 38 comments make it worth tracking to confirm the fix holds.

4. **[#35481 — Codex Diff shows "Oops, an error has occurred" in VS Code](https://github.com/openai/codex/issues/35481)**
   - **Comments:** 26 | **👍:** 54
   - **Why it matters:** High 👍 (54) with 26 comments. The diff view is a core code-review surface; a broken diff on Windows in the VS Code extension is a daily driver frustration.

5. **[#10090 — `elevated_windows_sandbox` fails with `CreateProcessAsUserW failed: 5`](https://github.com/openai/codex/issues/10090)**
   - **Comments:** 24 | **👍:** 7
   - **Why it matters:** Windows sandboxing is broken for a subset of users, making *all* agent commands fail with `(no output)`. This is a hard blocker for Windows pro users. Related issues #13965 and #14211 (both closed) suggest this is a recurring theme.

6. **[#14599 — Allow `trust_level = "trusted"` for any projects](https://github.com/openai/codex/issues/14599)**
   - **Comments:** 16 | **👍:** 57
   - **Why it matters:** 57 👍 for a quality-of-life request. The recurring "trust this project?" prompt is friction for power users who want a persistent global trust setting.

7. **[#37380 — 0.147.0 regression: Azure rejects empty functions namespace description](https://github.com/openai/codex/issues/37380)**
   - **Comments:** 9 | **👍:** 19
   - **Why it matters:** Fresh regression (opened 2026-08-07) against Azure Responses. Enterprise users on Azure are hitting a hard failure after upgrading. High 👍 (19) in under a day indicates widespread Azure adoption impact.

8. **[#37043 — Windows Computer Use fails at EnumWindows with 0x80070003](https://github.com/openai/codex/issues/37043)**
   - **Comments:** 17 | **👍:** 3
   - **Why it matters:** Computer Use is a headline feature; it's completely non-functional on Windows for affected users. Survives restarts — indicating a deeper system-level issue, not a transient failure.

9. **[#36523 — macOS app OOM-crashes at startup: external-agent-import parses 1.73 GB](https://github.com/openai/codex/issues/36523)**
   - **Comments:** 3 | **👍:** 1
   - **Why it matters:** A `[P0]` regression causing 26 crashes in 26 hours on macOS. The app imports a 1.73 GB Claude Desktop history directory *on every launch* → V8 heap OOM. Affects users who have ever used Claude Desktop — a significant cross-tool ecosystem issue.

10. **[#29908 — apply_patch and managed sandbox fail with Bubblewrap loopback/userns errors on Ubuntu 24.04](https://github.com/openai/codex/issues/29908)**
    - **Comments:** 14 | **👍:** 0
    - **Why it matters:** Linux sandbox failures on a popular distro (Ubuntu 24.04). Low 👍 but 14 comments suggest real world pain for a specific but large Linux user base.

---

## 4. Key PR Progress (10 Important PRs)

1. **[#37510 — Define the code-mode host gRPC protocol](https://github.com/openai/codex/pull/37510)**
   - New `codex.code_mode.v1` protobuf API for managing code-mode sessions, executions, and tool callbacks. Tonic-based bindings exported. This is foundational for code-mode as a first-class protocol.

2. **[#37494 — Add MCP event discovery and subscriptions](https://github.com/openai/codex/pull/37494)**
   - Exposes hosted Plugin Runtime event definitions via `McpResourceClient::list_events`; adds cancellable `events/stream` subscriptions. Directly relevant to the MCP interop issues (#26234).

3. **[#37498 — Preserve child waiters during process termination](https://github.com/openai/codex/pull/37498)**
   - Fixes unreaped PTY child processes. Likely addresses root causes behind issue #12491 (zombie process accumulation).

4. **[#37485 — Keep response streams alive through connection failures](https://github.com/openai/codex/pull/37485)**
   - Retries connection failures with exponential backoff (5–60s) and surfaces a `Reconnecting...` message. Improves resilience for flaky networks.

5. **[#37497 — Limit payload traces in diagnostic logs](https://github.com/openai/codex/pull/37497)**
   - Moves HTTP/SSE/WebSocket payload logging to `DEBUG` for persistent sinks to prevent SQLite log DB overwhelm. Addresses performance degradation from verbose logging.

6. **[#37483 — Interrupt active code-mode cells with their turn](https://github.com/openai/codex/pull/37483)**
   - New disabled-by-default `code_mode_interrupt` feature: interrupting a turn now terminates it's active code-mode cells. Improves control-plane semantics.

7. **[#37492 — Include tool namespace inventory in turn metadata](https://github.com/openai/codex/pull/37492)**
   - Opt-in `tool_namespaces_info` metadata describing model-visible functions (namespace, direct/deferred exposure, Code Mode). Better introspection and debugging.

8. **[#37504 — Disable Nagle's algorithm for code-mode WebSockets](https://github.com/openai/codex/pull/37504)**
   - Enables `TCP_NODELAY` for latency-sensitive code-mode WebSocket connections. Small client/UX win for interactive sessions.

9. **[#37489 — Alias resource-backed skill locators under context pressure](https://github.com/openai/codex/pull/37489)** & **[#37488 — Generalize skill locator aliases across providers](https://github.com/openai/codex/pull/37488)**
   - These two PRs compact long executor/orchestrator/host resource identifiers (via `e`/`o`/`r` aliases) to prevent skill omission when context budgets are tight. Directly improves skill reliability in long sessions.

10. **[#37507 — Include sandbox mode in response metadata](https://github.com/openai/codex/pull/37507)**
    - Adds effective permission profile as `sandbox_mode` in turn metadata; reserves the field against client override. Improves auditability of sandboxed runs.

---

## 5. Feature Request Trends

Distilled from open issues (n=50, top 30 analyzed):

1. **MCP interop beyond OpenAI endpoints** — The most strongly-signalled direction (41 👍) is flattening MCP namespace tools for non-OpenAI providers (Ollama, LM Studio, OpenRouter, Bedrock). Users want a uniform MCP tool-calling surface regardless of model endpoint.

2. **Trust and approval flow friction** — Multiple issues (+57 👍) request a persistent `trust_level = "trusted"` global setting, removing per-project approval prompts.

3. **Windows parity for sandbox & Computer Use** — A cluster of issues (#10090, #13965, #37043, #37415, #37484) all request functional Windows sandboxing and computer-use helpers. This is currently the weakest platform.

4. **Session/resume UX optimization** — Requests to bootstrap the latest turn instead of rendering full thread history on resume (#34663), and to prevent legacy subagent runtimes on resumed threads (#25990).

5. **Plugin/user secret configuration path** — Plugins bundling MCP servers need a first-class user secret/env config path (#24401, +8 👍) rather than ad-hoc `env_vars`.

6. **Computer Use on Intel macOS x64** — Recurring issue (#24437, #26842 closed as duplicate) asking for the computer-use helper in x64 distributions. Note the duplicate pattern — the maintainers closed as "same issue" but users keep filing, indicating packaging still broken.

---

## 6. Developer Pain Points

1. **Windows sandbox is a hard blocker** — `CreateProcessAsUserW failed: 5` recurs across versions (#10090, #13965, #14211, #37415). Affects both CLI and Desktop; all agent commands fail with `(no output)`. This has been open since January 2026.

2. **Computer Use is Windows-broken** — `EnumWindows` 0x80070003 (#37043), spawn EPERM (#37415), and wrong-owner window attachment (#37484) — three distinct Computer Use failures on Windows in 72 hours.

3. **MCP tool namespaces break non-OpenAI providers** — The proprietary namespace serialization (#26234) makes it hard to use Codex with self-hosted or third-party models. This is the **highest-🚀 open issue** (41 👍) and directly limits community model adoption.

4. **macOS memory / crash regressions** — Two OOM/crash issues (#36523 external-agent-import 1.73 GB parse, #37493 16 GB Apple Silicon crash-loops) indicate recurring memory-pressure regressions in the desktop app.

5. **Azure/enterprise regressions on release** — The 0.147.0 Azure empty-description regression (#37380) and LiteLLM streaming failure (#37425) both appeared within 24h of release, suggesting insufficient enterprise-provider test coverage before tagging.

6. **Context / multi-turn confusion** — #8648 (58 👍) remains the top community pain: the assistant answering earlier messages instead of the latest turn undermines trust in long agentic sessions.

7. **High-volume logging degrades performance** — The diagnostic logging fix (#37497) directly addresses users hitting SQLite log DB bloat; a symptom of long-session power users.

---

*Digest generated from GitHub data for `openai/codex` as of 2026-08-08.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-08

## Today's Highlights

The Gemini CLI team released the v0.56.0 nightly and patched the stable line with v0.55.0-preview.2 and v0.54.4, which include a critical fix for false "capacity exhaustion" errors and a terminal-error reclassification. On the security front, a new PR addresses a high-severity SSRF vulnerability (CVSS 8.6) in the `web-fetch` tool, while the community continues to press on agent reliability issues—particularly subagent hangs, false success reporting on max-turns interruptions, and the agent's underuse of custom skills. Additionally, new model configurations for Gemini 3.6 Flash and 3.5 Flash-Lite were proposed in an open PR.

---

## Releases

**v0.56.0-nightly.20260808.gcf22ac7e8** — Nightly build with two notable changes:
- Reclassifying Capacity Exhaustion as Terminal Error (PR #28716 by @luisfelipe-alt)
- Caretaker Firestore schema update adding `error` and `pr_number` fields (PR #28467)

**v0.56.0-nightly.20260807.gd5c9a97dc** — Preceding nightly with changelog and version-bump housekeeping.

**v0.55.0-preview.2** — Cherry-pick patch onto v0.55.0-preview.1 (PR #28719), fixing a critical issue from PR #28716.

**v0.54.4** — Patch release (v0.54.x line) with cherry-picked fixes via PR #28710, including a version bump to 0.54.2 and related corrections.

🔗 [Full Changelog](https://github.com/google-gemini/gemini-cli/commits/main)

---

## Hot Issues (Top 10)

**1. Subagent recovery after MAX_TURNS reported as GOAL success** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) — P1 bug. A `codebase_investigator` subagent reports `status: "success"` despite hitting its turn limit before doing any work. This masking of interruptions as successes undermines trust in agent telemetry and is a top priority for maintainers.

**2. Generalist agent hangs indefinitely** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)) — P1 bug with 8 upvotes. Simple tasks like folder creation hang for up to an hour when delegated to the generalist agent. Community workaround: instructing the model not to defer to subagents.

**3. Leverage model's bash affinity via Zero-Dependency OS Sandboxing** ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)) — P2 enhancement. Proposes exposing the model's native POSIX tool chaining while preserving security via zero-dependency OS-level sandboxing, instead of forcing it through a shell-execution abstraction.

**4. Robust component-level evaluations** ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)) — P1 epic tracking the expansion of behavioral test coverage. Currently at 76 behavioral eval tests across 6 supported Gemini models; community wants stronger, more granular evaluation.

**5. Assess impact of AST-aware file reads, search, and mapping** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)) — P2 epic. Investigates whether AST-aware tooling can reduce token noise and turns from misaligned file reads, improving codebase navigation efficiency.

**6. Gemini does not use skills and sub-agents enough** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)) — P2 bug. Anecdotal reports that custom skills and subagents are effectively ignored unless explicitly instructed, even when highly relevant. Significant UX gap for power users with tailored workflows.

**7. Shell command execution stuck after completion** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) — P1 core bug. After simple CLI commands complete, the shell shows "Awaiting user input" and hangs indefinitely. High-frequency issue with 3 upvotes.

**8. Stop Auto Memory from retrying low-signal sessions indefinitely** ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)) — P2 bug. Auto Memory keeps surfacing low-signal sessions as candidates because they're never marked processed, creating endless retries and noise.

**9. Add deterministic redaction and reduce Auto Memory logging** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) — P2 security bug. Sensitive content is sent to model context before redaction occurs, and logging can expose skill names. Raises privacy concerns for enterprise users.

**10. Gemini CLI encounters 400 error with >128 tools** ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) — P2 bug. When more than 128 tools are enabled, requests fail with a 400 error. Users expect smarter tool scoping rather than a hard upper limit.

---

## Key PR Progress (Top 10)

**1. SSRF fix via DNS resolution bypass in web-fetch** ([#28725](https://github.com/google-gemini/gemini-cli/pull/28725)) — Critical security fix (CVSS 8.6). Prevents DNS rebinding/private-IP bypass attacks against `web-fetch`, closing an SSRF vector to internal endpoints like cloud metadata services.

**2. Gemini 3.6 Flash and 3.5 Flash-Lite model configurations** ([#28673](https://github.com/google-gemini/gemini-cli/pull/28673)) — Adds support and resolution for Gemini 3.6 Flash and 3.5 Flash-Lite, including capabilities, aliases, and Code Execution config.

**3. Fix false model capacity exhaustion + quota lookup mapping** ([#28730](https://github.com/google-gemini/gemini-cli/pull/28730)) — Fixes phantom capacity-exhaustion errors, corrects quota lookup mapping, and preserves the "Keep trying" UI option during transient capacity surges.

**4. Load environment variables before settings placeholders** ([#28597](https://github.com/google-gemini/gemini-cli/pull/28597)) — Resolves a load-order race condition where `.env` variables were applied *after* settings files were parsed and validated, causing placeholder-resolution failures.

**5. Fix swallowed directory mismatch in IDE connections** ([#28729](https://github.com/google-gemini/gemini-cli/pull/28729)) — Fixes connection failures under Cider/VS Code forks with virtual or FUSE-based paths, where candidate port files were mis-associated with the wrong workspace.

**6. Caretaker triage evaluation framework + judge runner** ([#28530](https://github.com/google-gemini/gemini-cli/pull/28530)) — Adds an LLM-as-a-Judge rubric and parallel Git-worktree benchmark runner for the Caretaker triage pipeline, enabling systematic prompt hill-climbing.

**7. Caretaker prompt hill-climbing + orchestrator updates** ([#28524](https://github.com/google-gemini/gemini-cli/pull/28524)) — Incorporates 3 weeks of prompt evaluation improvements into the triage worker, adding a dedicated `code_explorer` skill.

**8. Skip diff hunk markers during @-file processing** ([#28581](https://github.com/google-gemini/gemini-cli/pull/28581)) — Prevents `@@` hunk markers from triggering workspace-wide glob searches—removing two recursive scans per hunk and eliminating heap growth on large diffs.

**9. Local eval report command + developer docs** ([#28369](https://github.com/google-gemini/gemini-cli/pull/28369)) — Adds `npm run eval:report` to aggregate pass rates by model from Vitest reports and map results to inventory policies, supporting duplicate test cases.

**10. Eval source validation CLI** ([#28344](https://github.com/google-gemini/gemini-cli/pull/28344)) — Adds `eval:validate` static analysis against 9 rules with CI-gating exit codes—automating eval-quality enforcement.

---

## Feature Request Trends

1. **Smarter agent tool-use** — Strong demand for the agent to proactively use custom skills, subagents, and AST-aware tools without explicit instruction, reducing token waste and improving codebase navigation.
2. **Robust evaluation infrastructure** — Users want behavioral evals at the component level (not just e2e), with visible trajectories for subagents after runs, and local tooling to aggregate/validate eval results.
3. **Security hardening** — Consistent requests for deterministic redaction of secrets *before* hitting model context, plus SSRF-proofing and hardening of the web-fetch and broader network tooling.
4. **Agent self-awareness** — Requests for the agent to accurately understand its own CLI flags, hotkeys, and execution constraints—so it can act as its own expert guide and avoid destructive operations.
5. **Scalability of tool limits** — Addressing the 400-error at >128 tools and asking for dynamic tool-scoping based on the current task context rather than a hard cap.

---

## Developer Pain Points

- **"Success" masking real failures** — The MAX_TURNS-as-GOAL issue (and similar) undermines trust in agent status reporting. Users can't tell when work was actually done versus silently interrupted.
- **Hangs and stuck states** — Both the generalist agent (on deferral) and completed shell commands (awaiting input) hang for extended periods, wasting significant developer time.
- **Skills/subagents ignored** — Pain is high for users who invested in custom skills and workflows, only to have the model bypass them unless explicitly told otherwise.
- **Memory/session noise** — Auto Memory repeatedly re-surfaces low-signal sessions and lacks deterministic redaction, creating both performance and privacy friction.
- **Tool-scoping limits** — Hitting hard caps (e.g., 128 tools) with confusing 400 errors blocks users with rich MCP setups; expectation is adaptive tool selection, not a global limit.
- **Terminal UX regressions** — Interactive prompt hangs (vite), post-editor corruption, and flicker/resize issues are recurring irritants that degrade the core terminal experience.

---

*Digest generated from public GitHub data for google-gemini/gemini-cli on 2026-08-08.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-08

## Today's Highlights

Three rapid-fire releases (v1.0.79-7 through v1.0.79-9) shipped within 24 hours, bringing enterprise policy controls for sandbox/allow-all, a new `kimi-k3` model, and a powerful `--plan` + `--mode autopilot` combo that plans first and implements without approval gates. The community is actively reporting regressions and edge cases — 36 issues updated in the last day — with notable pain around Windows clipboard behavior, MCP process lifecycle, and skill discovery in custom agent paths.

## Releases

**v1.0.79-9** — Improved: The `/sandbox` configuration dialog now shows where sandbox settings are stored in `settings.json`, reducing guesswork for users managing sandbox config across machines.

**v1.0.79-8** — Added: Enterprise `allow-auto-only` policy enables `/allow-all auto` while keeping full allow-all blocked; enterprise-managed sandbox can now enforce a proxy URL while keeping credentials user-controlled. Improved: `/sandbox` config dialog now groups `git` and `gh` settings for cl̶e̶a̶r̶e̶r̶n̶a̶v̶i̶g̶a̶t̶i̶o̶n̶.

**v1.0.79-7** — Added: Agent Plugins can ship extensions under `com.github.copilot/extensions/`; support for the `kimi-k3` model; combining `--plan` with `--mode autopilot` now plans first and implements without approval waits. Improved: multi-select prompts.

## Hot Issues

1. **[#2494 — `copilot login` auto-enters keychain prompt (regression, 11 comments)**](https://github.com/github/copilot-cli/issues/2494)
   Login flow no longer waits for `(y/N)` input when System Keychain is unavailable — auth silently ends. Persistent since April; still unresolved.

2. **[#1632 — Skill subfolder support (10 comments, 23 👍)**](https://github.com/github/copilot-cli/issues/1632)
   Flat skills directory is unsustainable for users with 10+ skills. High community demand; long-standing.

3. **[#3622 — Clipboard silently fails on Windows (5 comments)**](https://github.com/github/copilot-cli/issues/3622)
   Copy appears to succeed but paste yields old content. Regression from 1.0.48. Critical for Windows power users.

4. **[#4311 — Transcript blanks until width change (3 comments)**](https://github.com/github/copilot-cli/issues/4311)
   Interactive transcript renders as blank lines; `/resume` does not recover. Measured-line cache invalidation bug in `WCr`/ScrollBox.

5. **[#1409 — `add-dir` converts dashes to underscores (2 comments, 4 👍)**](https://github.com/github/copilot-cli/issues/1409)
   Windows OneDrive directory mismatch causes infinite permission loops. Path normalization should be identity, not transformation.

6. **[#4392 — Orphaned stdio MCP processes after auth rebuild (1 comment)**](https://github.com/github/copilot-cli/issues/4392)
   Post-auth MCP client rebuild spawns duplicate servers; first-generation processes leak. Resource drain over long sessions.

7. **[#4401 — `skill` tool can't find skills in `~/.agents/skills` (0 comments)**](https://github.com/github/copilot-cli/issues/4401)
   Valid SKILL.md present but tool cannot invoke; regression or incomplete fix for #2230. Blocks custom skill workflows.

8. **[#4345 — Reasoning effort 'medium' unsupported for claude-haiku-4.5 (2 comments, 4 👍)**](https://github.com/github/copilot-cli/issues/4345)
   Server-side feature flags cause repeated sub-agent execution failures. Model/flag compatibility gap.

9. **[#4222 — Infinite React/Ink render loop regressed (1 comment)**](https://github.com/github/copilot-cli/issues/4222)
   Main pane freeze on v1.0.72+ — regression of #2802. Prompt disappears, output swallowed, `/resume` dumps history.

10. **[#4118 — `/app` doesn't select cwd by default (1 comment, 35 👍)**](https://github.com/github/copilot-cli/issues/4118)
   Highest-reacted closed issue of the day; users want `/app` to default to current working directory.

## Key PR Progress

No PRs were updated within the last 24 hours. The project's release velocity (3 versions/day) suggests an active internal pipeline; expect PR activity to follow as community regressions from these builds are triaged.

## Feature Request Trends

- **Persistent defaults**: Users want persisted defaults for workspace type ([#4396](https://github.com/github/copilot-cli/issues/4396)) and session deletion behavior ([#4395](https://github.com/github/copilot-cli/issues/4395)) — the "set it once" pattern.
- **Skill organization**: Subfolders for skills ([#1632](https://github.com/github/copilot-cli/issues/1632)) and a `skill` tool alias for custom agent profiles ([#4209](https://github.com/github/copilot-cli/issues/4209)).
- **Token visibility**: Per-session token usage reporting ([#2947](https://github.com/github/copilot-cli/issues/2947)) continues to accumulate upvotes.
- **Proactive notifications**: Desktop notifications when the CLI needs human input ([#2941](https://github.com/github/copilot-cli/issues/2941)).
- **Custom agent tool grants**: Explicit `skill` alias in `.agent.md` frontmatter ([#4209](https://github.com/github/copilot-cli/issues/4209)).

## Developer Pain Points

- **Windows is a second-class citizen**: Clipboard failures ([#3622](https://github.com/github/copilot-cli/issues/3622)), native toast crashes ([#4219](https://github.com/github/copilot-cli/issues/4219)), shell-operator breakage in hooks ([#4399](https://github.com/github/copilot-cli/issues/4399)), codepage-dependent screen clears ([#4391](https://github.com/github/copilot-cli/issues/4391)) — a cluster of platform-specific issues.
- **Auth flow regressions**: Auto-accepting keychain prompts ([#2494](https://github.com/github/copilot-cli/issues/2494)) and MCP false-positives on failed logins ([#1129](https://github.com/github/copilot-cli/issues/1129)) erode trust in the bootstrap path.
- **MCP lifecycle leaks**: Orphaned stdio processes ([#4392](https://github.com/github/copilot-cli/issues/4392)) and registry policy conflicts ([#4205](https://github.com/github/copilot-cli/issues/4205)) frustrate MCP-heavy workflows.
- **Model/config mismatches**: Unsupported reasoning efforts ([#4345](https://github.com/github/copilot-cli/issues/4345)) and cache-control block limits ([#4185](https://github.com/github/copilot-cli/issues/4185)) indicate server-side configs outpace CLI capability checks.
- **Session-resume surprises**: Model switching on resume ([#4397](https://github.com/github/copilot-cli/issues/4397)) and render freezes ([#4222](https://github.com/github/copilot-cli/issues/4222), [#4311](https://github.com/github/copilot-cli/issues/4311)) disrupt long-running workflows.
- **Config drift**: `allowed_directories` not loading ([#4398](https://github.com/github/copilot-cli/issues/4398)) and `banner: "once"` behaving like `"always"` ([#4129](https://github.com/github/copilot-cli/issues/4129)) suggest config-layer regressions.
- **Version-pinning confusion**: The npm shim serving different versions 101 seconds apart ([#4402](https://github.com/github/copilot-cli/issues/4402)) undermines reproducibility in CI and debugging.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**2026-08-08**

---

## Today's Highlights

The community is actively addressing two critical areas: **data safety** and **cross-session persistence**. A severe bug report (Issue #2596) details an agent in `yolo` mode potentially deleting user data outside the workspace, a stark reminder of permission-mode risks. Concurrently, two independent PRs (#2594, #2595) target the same root-cause UTF-8 corruption bug in `StrReplaceFile`, indicating strong community convergence on file-integrity fixes. The long-running "Memory System" feature request (#1283) continues to be the top community ask, underscoring a broad demand for persistent context.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

*Picking 10 noteworthy issues from recent activity:*

1. **[#2596 – Agent ran `rm -rf` on a pre-existing directory outside the workspace](https://github.com/MoonshotAI/kimi-cli/issues/2596)**
   - **Why it matters:** A safety-critical bug in `yolo` mode where an agent misjudged a symlink state and executed destructive commands on a real directory. Highlights risks of unverified tool success outputs.
   - **Reaction:** Zero comments yet, but likely to spark debate on default permission modes and pre-flight checks.

2. **[#1283 – Memory System: Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)** *(Updated today, 21 comments)*
   - **Why it matters:** The most-commented open feature. Users want auto/manual memory (project patterns, preferences) to avoid re-explaining context every session. High demand signals a core UX bottleneck.
   - **Reaction:** Positive discussion; community is proposing storage formats and privacy controls.

3. **[#2591 – `StrReplaceFile` corrupts non-UTF-8 files](https://github.com/MoonshotAI/kimi-cli/issues/2591)** *(Referenced by PRs #2594/#2595)*
   - **Why it matters:** The root-cause issue driving current PR activity. Any file with binary or legacy encoding gets mangled during edits, a silent data-loss risk for polyglot repos.
   - **Reaction:** Prompted two independent fix attempts (below).

4. **[#1258 – Support for `--continue` session flag](https://github.com/MoonshotAI/kimi-cli/issues/1258)**
   - **Why it matters:** Frequently requested way to resume a prior conversation. Works around the lack of a formal memory system; low-effort, high-impact convenience feature.

5. **[#1301 – Git-aware context injection](https://github.com/MoonshotAI/kimi-cli/issues/1301)**
   - **Why it matters:** Users want the CLI to auto-read `git diff`, branch names, and recent commits to provide repo-aware suggestions. Reduces manual paste-and-copy ceremony.

6. **[#2477 – Support for multi-file planning mode](https://github.com/MoonshotAI/kimi-cli/issues/2477)**
   - **Why it matters:** For large refactors, a single-file `apply_patch` is insufficient. Users seek a "plan-first" workflow that suggests changes across multiple files with approval gates.

7. **[#2510 – Custom system prompts / `.kimirc`](https://github.com/MoonshotAI/kimi-cli/issues/2510)**
   - **Why it matters:** Devs want to inject team-specific guidelines (e.g., "Always use `const`, never `var`") without editing source or passing flags.

8. **[#2488 – Timeout control for long-running commands](https://github.com/MoonshotAI/kimi-cli/issues/2488)**
   - **Why it matters:** Agents that run tests or builds can hang; users need configurable timeout and kill signals to keep sessions viable.

9. **[#2430 – Windows path handling bugs](https://github.com/MoonshotAI/kimi-cli/issues/2430)**
   - **Why it matters:** Cross-platform parity is a recurring them—backslash escapes and drive-letter regexes break tool calls on Windows.

10. **[#2305 – Telemetry opt-out is non-obvious](https://github.com/MoonshotAI/kimi-cli/issues/2305)**
    - **Why it matters:** Privacy-sensitive users want a visible, documented `--no-telemetry` flag and an env var; current discoverability is poor, driving frustration.

---

## Key PR Progress

*Picking 10 important open PRs (top 2 are the most recent):*

1. **[#2594 – fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits](https://github.com/MoonshotAI/kimi-cli/pull/2594)** by `686f6c61`
   - Applies edits on raw byte buffers, avoiding `errors="replace"` corruption. A surgical fix; likely to merge quickly if tests pass.

2. **[#2595 – fix(StrReplaceFile): refuse to edit files that are not valid UTF-8](https://github.com/MoonshotAI/kimi-cli/pull/2595)** by `shoemoney`
   - Takes the defensive route: if the file isn’t valid UTF-8, abort the edit with a clear error. Complements #2594; the maintainer may pick one or both.

3. **[#2550 – feat: add `--diff` flag to show proposed changes before applying](https://github.com/MoonshotAI/kimi-cli/pull/2550)**
   - Safety-first: preview edits before they hit disk. Directly addresses concerns raised by Issue #2596.

4. **[#2521 – refactor: split `tools.go` into per-tool packages](https://github.com/MoonshotAI/kimi-cli/pull/2521)**
   - Improves testability and maintainability; no behavioral change but unblocks plugin development.

5. **[#2495 – feat: support shell completion for `bash`/`zsh`/`fish`](https://github.com/MoonshotAI/kimi-cli/pull/2495)**
   - Ergonomics win; generated from flag definitions automatically, so low-maintenance.

6. **[#2456 – fix: escape single quotes in `Bash` tool arguments](https://github.com/MoonshotAI/kimi-cli/pull/2456)**
   - A correctness fix for commands involving apostrophes (e.g., `sed` with `'` patterns) that currently break shell quoting.

7. **[#2422 – feat: `--exclude` glob flag for file-search tool](https://github.com/MoonshotAI/kimi-cli/pull/2422)**
   - Lets agents ignore `vendor/`, `node_modules/`, etc., improving search accuracy and speed.

8. **[#2398 – feat: add `--json` output mode for machine-readable results](https://github.com/MoonshotAI/kimi-cli/pull/2398)**
   - Enables piping CLI output into jq/CI pipelines; attractive to automation-minded users.

9. **[#2370 – perf: use streaming for `Bash` output](https://github.com/MoonshotAI/kimi-cli/pull/2370)**
   - Reduces latency for long-running commands; may also fix partial-output reads that mask failures (relevant to #2596).

10. **[#2341 – feat: `KIMI_CONFIG` env var to specify config path](https://github.com/MoonshotAI/kimi-cli/pull/2341)**
    - A small but requested DX improvement for CI environments and multi-config setups.

---

## Feature Request Trends

*Distilled from all issues, the most-requested directions are:*

1. **Persistent Memory & Session State (★ dominant)** — A formal memory system (#1283) + session flags (`--continue`) + git-aware context (#1301). Users want the CLI to "remember" the repo matterial and prior conversations.

2. **Safety & Blast-Radius Control across all modes, perhaps even a new `ask-always` default for destructive operations.** Also, a "dry-run" or "plan" mode (#2477, #2550) to preview multi-file changes before execution.

3. **Configurability & DX** — Custom system prompts (.kimirc), config-path env vars, shell completion, and `--json` output are all high-frequency asks. They make the CLI feel native to each dev's workflow.

4. **Cross-platform robustness** — Windows path handling, non-UTF-8 file safety, and streaming output are less glamorous but consistently filed per-platform.

---

## Developer Pain Points

*Recurring frustrations across issues:*

- **Silent corruption / byte mangling** – The `StrReplaceFile` UTF-8 bug (#2591) is a canonical example: the tool "succeeds" while harming files, and the user only notices later. Developers desperately want strict validation or explicit refusal rather than silent `U+FFFD` replacement.
- **Insufficient verification of tool results** – Issue #2596 shows the agent didn't check whether `ln -sfn` actually succeeded, leading to a destructive `rm -rf`. The community wants agents to verify command exit codes/outputs before proceeding with dependent actions.
- **Context loss between sessions** – Re-explaining project structure and preferences each run is a top time-waster (echoed by #1283's popularity).
- **Poor Windows support** – Multiple issues around path separators and shell quoting suggest the CLI is tested mainly on Unix, alienating a large dev segment.
- **Lack of output control** – In tools like Bash, partial output can hide failures; users want configurable timeouts, streaming, and clear `exit_code` signaling in tool responses.

---

*Digest generated from public GitHub data for MoonshotAI/kimi-cli on 2026-08-08.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-08

## Today's Highlights

OpenCode shipped v1.18.15 with critical fixes for message chronology and revert/fork reliability. The community's attention is split between a growing number of OpenCode Go subscription issues (401 errors, quota miscalculations, payment problems) and an active wave of web UI fixes landing as PRs. A notable contributor streak continues with kitlangton and Cordtus driving both new features (Mermaid rendering, Modal environment driver) and bug fixes.

---

## Releases

**v1.18.15** — Core bugfix release:
- Chronological message ordering now stays correct even when imported or legacy message IDs are out of order
- Revert and fork actions now use real message chronology instead of message ID ordering
- Truncation cleanup now removes stale files by file timestamp more reliably

---

## Hot Issues

1. **[#38257 — OpenCode Go: 401 Request blocked by upstream provider](https://github.com/anomalyco/opencode/issues/38257)** (45 comments, 11 👍)  
   The most active issue: all OpenCode Go subscription models return 401 on `chat/completions` while `/v1/models` works. Community suspects a server-side issue; users are blocked from paid features.

2. **[#3176 — Why is OpenCode massively abusing git?](https://github.com/anomalyco/opencode/issues/3176)** (18 comments, 10 👍)  
   Long-standing complaint about `git add .` on huge directories (45GB/54K files) caused by session snapshots. Still open after 10 months; community is frustrated with performance impact.

3. **[#5359 — Unable to read images for some models](https://github.com/anomalyco/opencode/issues/5359)** (18 comments)  
   Regression from v1.0.137: pasted images fail to attach. Works on 1.0.134 but not later versions. Affects LiteLLM + Vertex AI backend users.

4. **[#23153 — Pay Go with crypto](https://github.com/anomalyco/opencode/issues/23153)** (17 comments, 37 👍)  
   High-demand feature request for crypto payments (specifically for opencode go). Strong community support for alternative payment methods.

5. **[#14332 — Amazon Bedrock Opus 4.6 compaction failure](https://github.com/anomalyco/opencode/issues/14332)** (16 comments, 8 👍)  
   Compaction fails with `thinking` blocks error when using Amazon Bedrock Opus 4.6. Now closed, but the error pattern may recur.

6. **[#24334 — DeepSeek reasoning_content must be passed back](https://github.com/anomalyco/opencode/issues/24334)** (10 comments, 2 👍)  
   Thinking-mode models (DeepSeek) fail when `reasoning_content` isn't echoed back. Closed, but highlights ongoing provider-compatibility challenges.

7. **[#29748 — Unexpected server error after adding OpenRouter](https://github.com/anomalyco/opencode/issues/29748)** (7 comments)  
   User hit persistent "Unexpected server error" after adding OpenRouter API and switching projects. Even restart doesn't fix.

8. **[#41146 — Overcharged on Go plan: weekly limit exhausted at $7.50 despite $30 limit](https://github.com/anomalyco/opencode/issues/41146)** (2 comments)  
   Fresh billing complaint: usage dashboard shows $7.50 spent but weekly quota shows 100% used. Blocks usage despite being far below the advertised limit.

9. **[#40183 — Copilot re-auth prompted every session](https://github.com/anomalyco/opencode/issues/40183)** (3 comments)  
   GitHub Copilot (student package) login completes but re-auth is required each session. Credential stored but not respected.

10. **[#41124 — Request to Delete Leaked Session Share Link](https://github.com/anomalyco/opencode/issues/41124)** (2 comments)  
    User accidentally shared a session and needs the remote link invalidated but can't use `/unshare` because the local session was deleted. Security-relevant request.

---

## Key PR Progress

1. **[#41113 — feat(tui): render Mermaid diagrams](https://github.com/anomalyco/opencode/pull/41113)** — Closed  
   Renders fenced Mermaid flowcharts, sequence, and state diagrams directly in the session transcript via a new `@opencode-ai/merman` workspace package. Big win for visual documentation in TUI.

2. **[#41118 — feat(server): add Modal environment driver](https://github.com/anomalyco/opencode/pull/41118)** — Closed  
   First hosted binding of the Environment contract as a Modal sandbox driver with live-gated conformance tests. Expands server-side execution options.

3. **[#40923 — feat: native background subagents + auto-continue](https://github.com/anomalyco/opencode/pull/40923)** — Closed  
   Adds `Task(background: true)` for native background sub-agent orchestration and makes transient provider errors self-recovering via auto-continue.

4. **[#41173 — refactor(core): remove legacy account subsystem](https://github.com/anomalyco/opencode/pull/41173)** — Open  
   Destructive removal of orphaned SQLite tables (`account`, `account_state`, `control_account`). Auth now persists through `credential`; cleanup of dead code.

5. **[#41171 — fix(merman): support undirected edges and multiline labels](https://github.com/anomalyco/opencode/pull/41171)** — Open  
   Handles `S1 --- X` undirected edges and long multiline emoji labels without falling back to source or corrupting output.

6. **[#41158 — fix(app): populate project picker from home](https://github.com/anomalyco/opencode/pull/41158)** — Open  
   Fixes empty project picker by preserving indexed empty-search results from the server and falling back to listing the home directory.

7. **[#41170 — feat(console): add workspace unblock endpoint](https://github.com/anomalyco/opencode/pull/41170)** — Closed  
   Adds a Support API endpoint (authenticated via `SUPPORT_API_KEY`) to clear `workspace.is_blocked` idempotently. Useful for unblocking wrongly-flagged workspaces.

8. **[#41167 — feat(opencode): let web users avoid browser launches](https://github.com/anomalyco/opencode/pull/41167)** — Open  
   Adds `opencode web --no-open` for users who want the web UI without automatically launching a browser tab. Small but quality-of-life improvement.

9. **[#41160 — feat(tool): add Synthetic web search backend](https://github.com/anomalyco/opencode/pull/41160)** — Open  
   Adds `"synthetic"` as a third web search backend alongside `exa` and `parallel` in the `WebSearchProviderSchema`.

10. **[#40845 — [beta] feat(app): redesign non-modal settings](https://github.com/anomalyco/opencode/pull/40845)** — Open  
    Reorganizes settings navigation, splits appearance/notifications, adds Figma-aligned Projects and Extensions views with real MCP state. Also improves multi-server ordering.

---

## Feature Request Trends

- **Payment flexibility**: Crypto payments for OpenCode Go ( [#23153](https://github.com/anomalyco/opencode/issues/23153) ) and billing/usage transparency improvements are high-demand.
- **Subagent model control**: Runtime model override for task tool subagents ( [#17595](https://github.com/anomalyco/opencode/issues/17595) ) and subagent model display in v2 ( [#41172](https://github.com/anomalyco/opencode/issues/41172) ).
- **Environment/CI hardening**: Skip npm installs at startup via `OPENCODE_DISABLE_INSTALL` ( [#37888](https://github.com/anomalyco/opencode/issues/37888) ) — critical for Docker/CI workflows.
- **Skills organization**: Support subfolders in `~/.config/opencode/skills/` ( [#38853](https://github.com/anomalyco/opencode/issues/38853) ).
- **Web UI improvements**: Server-side project listing, non-modal settings, and browser-launch opt-out show the web app is maturing.

---

## Developer Pain Points

- **Billing/usage bugs**: Multiple reports of quota miscalculation ( [#41146](https://github.com/anomalyco/opencode/issues/41146) ), balance not reflecting payments ( [#41166](https://github.com/anomalyco/opencode/issues/41166) ), and usage above 100% ( [#41102](https://github.com/anomalyco/opencode/issues/41102) ). **Trust issue for paid users.**
- **Provider compatibility**: DeepSeek `reasoning_content` pass-back, Bedrock eventstream chunk timeouts, and Copilot re-auth loops remain recurring friction.
- **Web UI data gaps**: Fresh sessions show "Nothing here yet" and don't list server projects until bookmarks exist — confusing onboarding for hosted instances.
- **Message handling**: Users want queued messages instead of cancellation ( [#41106](https://github.com/anomalyco/opencode/issues/41106) ); TUI black screens and paste issues on Windows persist.
- **Git abuse**: Session snapshots triggering `git add` on massive repos is still a top complaint after 10 months.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-08

## Today's Highlights

Pi v0.84.1 released with Qwen Token Plan Individual support and authentication readiness checks, though a startup blocker (zstd decompress error on Node 23) requires hotfix attention. The community is actively converging on compaction reliability—auto-compaction failing to trigger pre-overflow and post-compaction stalls are the top-voted issues this cycle. Performance work is gaining momentum: a TUI incremental-render PR and a lazy syntax-grammar load refactor both landed this week.

## Releases

**v0.84.1** — New Features:
- **Qwen Token Plan Individual** — Built-in provider support for models documented for Individual subscriptions. [Provider docs](https://github.com/earendil-works/pi/blob/v0.84.1/packages/coding-agent/docs/providers.md#api-keys)
- **Authentication readiness checks** — `pi auth` command extended with readiness validation.

> ⚠️ **Watch item**: Issue #7771 reports a startup crash on Node 23 (`zlib.createZstdDecompress is not a function`) affecting this release.

## Hot Issues (Top 10)

1. **[#6879 — Auto-compaction never triggers until provider overflow](https://github.com/earendil-works/pi/issues/6879)** — *15 👍, 13 comments*
   In a 2-hour GPT-5.6-sol session, context grew past 100% and only compacted when the API hard-rejected at 373k tokens. The agent loop should check after every turn, not only on provider error. **#1 community priority.**

2. **[#7128 — New PI_* guideline over-encourages unnecessary bash calls](https://github.com/earendil-works/pi/issues/7128)** — *7 👍, 11 comments*
   Default system prompt now biases agents toward running `env`-inspection commands even when irrelevant. Users report wasted tokens and slower loops. Flagged `[no-action]`—community disagrees.

3. **[#7020 — Pi doesn't continue after compaction (long coordinator sessions)](https://github.com/earendil-works/pi/issues/7020)** — *2 👍, 10 comments* [CLOSED]
   Long-running "coordinator" sessions hit post-compaction stalls. Closed but related to the broader settlement/lifecycle meta-issue below.

4. **[#5886 — AgentSession settlement/continuation and assistant-tail lifecycle bugs](https://github.com/earendil-works/pi/issues/5886)** — *4 👍, 6 comments*
   Meta-issue (authored by mitsuhiko) for the recurring class of bugs where post-run logic continues from a stale transcript. Root cause for several "phantom turns" and "assistant-only transcript" reports.

5. **[#7730 — High CPU usage on macOS with long sessions](https://github.com/earendil-works/pi/issues/7730)** — *5 👍, 4 comments*
   50–110% CPU, 600–800MB RAM; correlates with context/session length. Likely related to re-render or incremental parse overhead.

6. **[#7702 — DeepSeek through opencode zen gateway: 400 on reasoning_content](https://github.com/earendil-works/pi/issues/7702)** — *6 comments* [CLOSED]
   Multi-turn tool-call conversations fail; `detectCompat()` doesn't round-trip `reasoning_content`. Fixed, but highlights a fragile compat layer.

7. **[#7053 — Parallel tool batches lose completed results when a sibling stalls](https://github.com/earendil-works/pi/issues/7053)** — *4 comments*
   Persisted `toolResult` messages are only emitted after `Promise.all` settles; one slow tool orphans all completed results ("No result provided"). UI was fixed earlier; persistence layer still broken.

8. **[#7250 — v0.82 omits `strict:false` for custom Responses providers](https://github.com/earendil-works/pi/issues/7250)** — *0 👍, 3 comments* [CLOSED]
   Private OpenAI-compatible endpoints see changed tool-argument shapes after upgrade. Behavior regression on version bump—users calling for JSON-schema strictness opt-out.

9. **[#7771 — Unable to start 0.84.1 (Node 23 zstd error)](https://github.com/earendil-works/pi/issues/7771)** — *5 comments* [CLOSED]
   `TypeError: zlib.createZstdDecompress is not a function`—Node 23 lacks the API used. Release blocker for that runtime.

10. **[#7754 — No way to see a collapsed paste before sending](https://github.com/earendil-works/pi/issues/7754)** — *4 comments* [CLOSED]
    Long pastes collapse to `[paste #1 +40 lines]` with no expand-in-place key. Editing or re-pasting is impossible until send. UX gap, community wants inline expansion.

## Key PR Progress (Top 10)

1. **[#7801 — Lazily load uncommon syntax grammars](https://github.com/earendil-works/pi/pull/7801)** (OPEN, mitsuhiko)
   Experimental refactor that delays loading of rarely-used syntax highlighters. Some UI invalidation on load—worth testing on large sessions.

2. **[#7784 — Derive agent recovery state from record queries](https://github.com/earendil-works/pi/pull/7784)** (OPEN)
   Removes recovery-specific query APIs (`findOpenOperations()`), derives state via bounded `findRecords()` calls. Simplifies SQLite paths and indexes; retains write-side enforcement.

3. **[#7780 — TUI performance: incremental markdown parse + lazy render invalidation](https://github.com/earendil-works/pi/pull/7780)** (CLOSED)
   Directly targets #7730 (high CPU). Partial old-content parsing on startup. Big win if it holds up in long sessions.

4. **[#7749 — Preserve custom tool renderers after /reload](https://github.com/earendil-works/pi/pull/7749)** (CLOSED)
   Fixes #7740: tools registered in `session_start` were losing custom `renderCall`/`renderResult` after `/reload` because history rebuilt before the event fired.

5. **[#7795 — Use `command -v` instead of `which`](https://github.com/earendil-works/pi/pull/7795)** (CLOSED)
   Replaces external binary with shell built-in for `/copy` and related; improves sandbox/minimal-env compatibility. Also tracked as issue #7796.

6. **[#7792 — Bridge Cursor CLI auth via local agent session](https://github.com/earendil-works/pi/pull/7792)** (CLOSED)
   Hidden `cursor-agent` extension: `pi cursor status`, Cursor models in `--list-models`, `pi -p --provider cursor`. No API key needed—reuses authenticated local Cursor CLI. Feature request #7793.

7. **[#7710 — Restore suspended harness operations](https://github.com/earendil-works/pi/pull/7710)** (CLOSED)
   Implements R3 of harness-v2: `AgentHarness.create` can now load a new harness from an existing session with leftover operations, enabling proper recovery.

8. **[#7762 — LM Studio provider](https://github.com/earendil-works/pi/pull/7762)** (OPEN)
   New provider for local LM Studio (solves #7668). Tests guarded by `LM_STUDIO_BASE_URL`. Community-verified AI-generated code.

9. **[#7758 — Exit foreground task + `ctx.version`](https://github.com/earendil-works/pi/pull/7758)** (CLOSED)
   Extensions can now take over the foreground process after Pi shuts down. Enables `/web`-style commands that hand off to a long-running server.

10. **[#7722 — Theme override via CLI (`--use-theme`)](https://github.com/earendil-works/pi/pull/7722)** (OPEN)
    Overrides stored theme per-run; supports `--use-theme dark` and appearance-based `--use-theme dayowl/nightowl`.

## Feature Request Trends

- **Provider breadth & compat**: Bedrock Mantle (OpenAI Responses), LM Studio, Cursor CLI bridge, Qwen Individual Plan—community wants more first-class providers without API-key friction.
- **Plugin portability**: Agent Plugins spec support (#7776) to share skills/tools across Pi, Codex, and others.
- **Session lifecycle control**: Safe session replacement API for async UI extensions (#5952), explicit `Agent.reset()` semantics, foreground hand-off (#7758).
- **TUI ergonomics**: Half-page scroll keybindings (#7735), sticky "last prompt" header (#7802), paste expansion before send (#7754), fullscreen `/menu` at top (#7786).
- **Local-first & sandbox-friendly**: `command -v` over `which`, avoid external deps, minimal-environment support.

## Developer Pain Points

1. **Compaction & long-session reliability** — Top-voted issue (#6879) plus post-compaction stalls (#7020) and lifecycle meta-bugs (#5886). Agents running 2+ hours are hitting hard walls. Community wants proactive compaction and guaranteed continuation.

2. **Silent regressions on version bumps** — `strict:false` omission (#7250), `reasoning_content` round-trip breakage (#7702), startup crash (#7771). Upgrading Pi is repeatedly breaking working setups—calls for regression test suites on provider compat.

3. **State desync between UI and persistence** — Tool results orphaned in parallel batches (#7053), `Agent.reset()` producing assistant-only transcripts (#7703), extension `sendMessage({triggerTurn:false})` still starting turns (#7783). Core agent-loop invariants are fragile.

4. **Performance degradation on long sessions** — High CPU on macOS (#7730) and TUI lag. The incremental-render PR (#7780) and lazy grammar loading (#7801) are direct responses; users want these merged fast.

5. **Reload/extension lifecycle issues** — `/reload` loses custom tool renderers (#7740), `getAllTools()` returns `ToolInfo` without `execute` (#7800), auto-discovered `APPEND_SYSTEM.md` broken (#7794). Extension authors are hitting discoverability and ordering walls.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-08

## Today's Highlights
The project shipped a new nightly release focused on CI reliability and documentation. Notable activity centered on **terminal/UI rendering regressions** (Windows IME display, tmux flickering, web-terminal tearing), a **series of MCP session-metadata fixes**, and a **push for ACP protocol compliance** with standard `usage_update` notifications. Maintainers also advanced several Web Shell enhancements covering extension archive installs, fullscreen artifact panels, and tmux-backed interactive sub-agents.

## Releases
**[v0.21.7-nightly.20260808.4ec0371e6](https://github.com/QwenLM/qwen-code/releases)** — Nightly release containing:
- `fix(ci): surface blocked autofix takeover admission` by @qqqys ([PR #8410](https://github.com/QwenLM/qwen-code/pull/8410))
- Docs: document serve sub-session concurrency

## Hot Issues (10 Noteworthy)

1. **[#8625 — Windows Terminal: Chinese input pinyin display illegible](https://github.com/QwenLM/qwen-code/issues/8625)**
   *P2/bug/ui/windows, 6 comments.* Users on Windows terminals see garbled pinyin rendering while typing Chinese, impacting basic usability. Open to community PRs (`welcome-pr`), no maintainer response yet.

2. **[#8660 — Add runtime and client attribution to usage telemetry](https://github.com/QwenLM/qwen-code/issues/8660)**
   *P3/feature-request/telemetry, 5 comments, CLOSED.* Proposes distinguishing `channel` attribution (VS Code vs. direct CLI vs. daemon) in telemetry payloads. Closed — likely implemented or superseded; relevant given the day's PR work on attribution markers ([#8712](https://github.com/QwenLM/qwen-code/pull/8712)).

3. **[#8092 — Build lower-maintenance desktop app around Web Shell](https://github.com/QwenLM/qwen-code/issues/8092)**
   *Feature-request/platform/desktop, 5 comments.* Consolidate desktop experience onto the existing Web Shell to cut maintenance of a separate UI. Architecture-level proposal with community interest; ties to Web Shell PR momentum this week.

4. **[#8615 — Desktop 0.1.0 / Windows: bundled runtime crashes on startup (EISDIR lstat 'C:')](https://github.com/QwenLM/qwen-code/issues/8615)**
   *P1/bug/windows, 5 comments, CLOSED.* Critical desktop startup crash on opening any workspace folder. Closed, likely fixed; notable as a P1 desktop regressions on the release track.

5. **[#8562 — tmux screen flickering over SSH/iTerm2 after recent updates](https://github.com/QwenLM/qwen-code/issues/8562)**
   *P2/bug/ui/linux, 5 comments.* Flicker only within tmux split panes when chatting; user used Qwen 3.8 Max to bisect and self-identify the regression. Related to virtualized-history redraw behavior; see also #8659.

6. **[#7118 — Windows installer fails when PowerShell can't resolve Get-FileHash](https://github.com/QwenLM/qwen-code/issues/7118)**
   *P2/bug/installation/windows, 4 comments, 3 👍.* SHA-256 verification error blocks standalone installs on constrained PowerShell environments. Long-standing (since 0.19.11), community-upvoted, still open.

7. **[#8550 — `qwen mcp list` hangs indefinitely on slow SSE MCP servers](https://github.com/QwenLM/qwen-code/issues/8550)**
   *P2/bug/mcp, 4 comments, CLOSED.* No timeout when an SSE server never emits the `endpoint` event; hangs forever. Closed — likely fixed; important reliability pain for MCP-heavy setups.

8. **[#8513 — [ACP] Emit usage_update session updates for JetBrains AI Assistant](https://github.com/QwenLM/qwen-code/issues/8513)**
   *P2/feature-request/ACP, 3 comments, CLOSED.* JetBrains context-usage indicator never displayed because Qwen Code doesn't emit `usage_update`. Closed as implemented — see PR #8528 in today's list.

9. **[#8492 — MCP metadata hot reload leaves stale session registrations](https://github.com/QwenLM/qwen-code/issues/8492)**
   *P2/bug/core/mcp, 3 comments, CLOSED.* Changes to `trust`/`includeTools` etc. without transport changes don't reapply metadata, leaving stale tools. Closed — fixed by PR #8522.

10. **[#8695 — Context usage percentage displayed twice by default](https://github.com/QwenLM/qwen-code/issues/8695)**
    *P3/feature-request/ui, 3 comments.* Status line and footer both show context usage when status line is on; cluttered default UI. Small UX polish issue with clear community consensus.

## Key PR Progress (10 Important)

1. **[#8621 — feat(web-shell): install Extensions from archives](https://github.com/QwenLM/qwen-code/pull/8621)** *(open, autofix/takeover)*
   Uploads local `.zip`/`.tar.gz` extension packages via a dedicated daemon endpoint into the existing install pipeline. Community-driven extension management improvement.

2. **[#8645 — fix(core): confirm read-only git commands when repo config executes programs](https://github.com/QwenLM/qwen-code/pull/8645)** *(open)*
   Closes a security gap where whitelisted read-only git subcommands could side-effect execute programs configured in repo-local git config. Auto-approved by permission gates based only on command text.

3. **[#8522 — fix(core): refresh MCP session metadata without reconnecting](https://github.com/QwenLM/qwen-code/pull/8522)** *(CLOSED)*
   Fixes #8492: refreshes per-session MCP tool/prompt/resource registrations on `trust`/`includeTools` changes while retaining the transport. Separates handle identity from transport identity.

4. **[#8528 — fix(acp): emit standard context usage updates](https://github.com/QwenLM/qwen-code/pull/8528)** *(CLOSED)*
   Implements #8513: sends standard ACP `usage_update` after each live main-session model round; `used` from prompt occupancy, `size` from model's context window.

5. **[#8708 — perf(review): bake a soft tool-call budget into finder and auditor briefs](https://github.com/QwenLM/qwen-code/pull/8708)** *(open)*
   Adds `agentToolBudget` (clamp `30 + effective/20`, 30–60) to every review brief as a soft ceiling — controls runaway tool calls during `/review` orchestration.

6. **[#8658 — perf(review): move remote matching into CLI](https://github.com/QwenLM/qwen-code/pull/8658)** *(open, autofix/takeover)*
   Replaces model-authored prose for Git remote resolution with a deterministic `qwen review match-remote` subcommand. Structural URL parsing reduces orchestration work with no coverage loss.

7. **[#8687 — feat(daemon): guard cross-worktree Git mutations](https://github.com/QwenLM/qwen-code/pull/8687)** *(open, autofix/takeover)*
   Host-side guard for model-issued shell commands: blocks mutating Git commands whose resolved target (`-C`, `--work-tree`, `--git-dir`) escapes the session workspace. Security hardening for `qwen serve`.

8. **[#8663 — fix(cli): scrub inherited loader env vars from daemon session subprocesses](https://github.com/QwenLM/qwen-code/pull/8663)** *(open)*
   Prevents `NODE_OPTIONS` dev-harness hooks, `NODE_PATH`, `LD_*`/`DYLD_*` preloads, and `BASH_ENV` from leaking from `qwen serve`'s environment into session subprocesses.

9. **[#8570 — fix(cli): report zero-height VP items so collapsed thoughts release reserved space](https://github.com/QwenLM/qwen-code/pull/8570)** *(open, autofix/takeover)*
   Fixes virtualized-history layout bug where collapsing an expanded thinking block didn't release vertical space. Directly targets the UI flicker/redraw family of issues.

10. **[#8613 — feat(web-shell): tmux-backed interactive terminal sub-agent](https://github.com/QwenLM/qwen-code/pull/8613)** *(open, autofix/takeover)*
    Lets the agent run interactive CLIs (REPLs, other agent CLIs, curses/TUI apps) inside a tmux session on the daemon host, with live interactive terminal view in Web Shell. Significant architecture expansion.

## Feature Request Trends

1. **Web Shell as unified platform** — Multiple proposals ([#8092](https://github.com/QwenLM/qwen-code/issues/8092), [#8595](https://github.com/QwenLM/qwen-code/issues/8595)) push Web Shell as the primary surface for desktop, mobile, and local-control scenarios (QR pairing, lower-maintenance desktop apps).
2. **ACP protocol compliance** — Emitting standard `usage_update` ([#8513](https://github.com/QwenLM/qwen-code/issues/8513)), reasoning effort selectors, and attribution markers show a clear push toward first-class interoperability with JetBrains, VS Code, and external ACP clients.
3. **Omni multimodal experiment** — S3 delivery reliability ([#8185](https://github.com/QwenLM/qwen-code/issues/8185)) and the roadmap umbrella ([#8197](https://github.com/QwenLM/qwen-code/issues/8197)) continue as a coordinated experimental track for multimodal file recognition.
4. **Browser control / WebBridge** — Direct browser-command bridge via `qwen serve` + Chrome extension ([#8699](https://github.com/QwenLM/qwen-code/issues/8699)), inspired by Kimi WebBridge, avoiding MCP as a hard dependency.
5. **Agent fact-verification discipline** — Five-point proposal for evidence-based conclusions with "strict verification mode" ([#8701](https://github.com/QwenLM/qwen-code/issues/8701)), reflecting growing demand for trustworthy agent reasoning.

## Developer Pain Points

- **Terminal rendering regressions** — A cluster of issues ([#8625](https://github.com/QwenLM/qwen-code/issues/8625) pinyin display, [#8562](https://github.com/QwenLM/qwen-code/issues/8562) tmux flicker, [#8659](https://github.com/QwenLM/qwen-code/issues/8659) web-terminal tearing, [#8672](https://github.com/QwenLM/qwen-code/issues/8672) PuTTY middle-mouse breakage) indicate recurring instability around virtualized-history mode and terminal detection across Windows/Linux/web platforms.
- **Windows installation & desktop reliability** — Installer failures ([#7118](https://github.com/QwenLM/qwen-code/issues/7118)) and desktop runtime crashes ([#8615](https://github.com/QwenLM/qwen-code/issues/8615)) highlight Windows as a problem-child platform for distribution.
- **MCP connectivity timeouts** — Indefinite hangs on SSE servers ([#8550](https://github.com/QwenLM/qwen-code/issues/8550)) and stale metadata after hot reload ([#8492](https://github.com/QwenLM/qwen-code/issues/8492)) speak to MCP edge-case fragility.
- **Silent environment-var conflicts** — `OTEL_METRICS_EXPORTER=otlp` silently disabling metrics in shared OTel setups ([#8697](https://github.com/QwenLM/qwen-code/issues/8697)) and loader env leaking into daemon sessions (PR #8663) — environment inheritance is a recurring footgun.
- **CI/type-check blind spots** — `integration-tests/` never type-checked due to tsconfig TS5063 ([#8692](https://github.com/QwenLM/qwen-code/issues/8692)) and flaky E2E (`acp-cron`) failures suggest test-hygiene gaps that frustrate contributors.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-08

## Today's Highlights

The v0.9.4 release train is in its final stretch: maintainer Hmbown closed four of five CI blockers in PR #5282, and submitted a critical fix (#5284) for the agent-spawn "read-only" bug that has been the top release-blocker (#5123). Community PR momentum is strong — 17 PRs updated in the last 24 hours, including substantive contributions from five different external contributors (`aboimpinto`, `SparkofSpike`, `bistack`, `skyzhao1223`, `mky`) covering MCP registry sync, FreeBSD builds, and config-driven model tier selection. Separately, a dense batch of ~15 "v0.9.4 audit" issues were closed on August 3-7, indicating a sustained dogfooding/QA push on this release.

---

## Releases

No new releases or pre-releases were published in the last 24 hours. `origin/main` is at **v0.9.4** — unpacked, with a dated CHANGELOG, and pins in sync — but not yet published to either registry. Per PR #5282, the release was being held by **four CI blockers** (now three remaining), with the most recent head-of-main CI run still red on a third failure mode.

---

## Hot Issues

**1. [OPEN] — v0.9.4 release-blocker: agent spawn surface has too many knobs — labeled builder runs read-only and self-BLOCKED** ([#5123](https://github.com/Hmbown/CodeWhale/issues/5123))  
The top release-blocker, surfaced via dogfooding. Sub-agents labeled `builder` are inheriting a read-only tool contract, so they refuse to run their own assigned gates. The root cause traces to the "too many knobs" on the spawn surface — hard to reason about, easy to misconfigure.

**2. [CLOSED] — feat: sidebar sessions panel with auto-resume and session history browsing** ([#2934](https://github.com/Hmbown/CodeWhale/issues/2934))  
The most-commented issue this cycle (13 comments). A persistent sidebar for session history and auto-resume — demanded because `Ctrl+R` discovery is poor and the community wants a long-living work surface, not a popup picker.

**3. [OPEN] — Execution of large text processing jobs kills/deadlocks the session** ([#1425](https://github.com/Hmbown/CodeWhale/issues/1425))  
A user analyzing a 3M-character novel spawned 10 sub-agents that all showed `Running` — then the session froze on `agent_wait` timeout. The issue reveals two problems: sub-agents ran ~2x longer than expected, and the TUI gives no diagnosis of *why* a wait is stuck. The author was at least able to verify the session wasn't corrupted, which is some relief.

**4. [OPEN] — No cross-session memory** ([#2492](https://github.com/Hmbown/CodeWhale/issues/2492))  
Users experience "amnesia" every restart: no memory read on boot, and even forced memory writes aren't loaded. The community acknowledges fast responses but calls the lack of durable context a major usability gap vs. other agents.

**5. [OPEN] — Dead-code sweep: 464 `#[allow(dead_code)]` attributes are hiding drift** ([#4785](https://github.com/Hmbown/CodeWhale/issues/4785))  
Maintainer self-report. 464 attributes across 143 files mean the compiler can't see what's dead and what's drifting. This is a structural debt issue — not visible to users, but it slows every other change in the codebase.

**6. [CLOSED] — v0.9.3 Subagents: add `resume_from` continuation chains** ([#425](https://github.com/Hmbown/CodeWhale/issues/425))  
An accepted design for resuming sub-agents via `task_id` instead of starting fresh. This closes the loop on a major durability request: sub-agent work should be resumable, not restarted.

**7. [OPEN] — v0.9.3: Make documented config keys editable and persistable from the TUI** ([#3303](https://github.com/Hmbown/CodeWhale/issues/3303))  
Config knobs live in `config.toml` but can't be discovered or edited from the TUI — making runtime behavior feel fixed even when it isn't.

**8. [OPEN] — v0.9.4: switching providers can retain an unrelated default model** ([#5034](https://github.com/Hmbown/CodeWhale/issues/5034))  
Switching from DeepSeek to OpenAI can leave `gpt-5.5` pinned — the provider/model resolution isn't updated coherently. A confusing footgun for anyone mixing vendors.

**9. [OPEN] — v0.9.4: isolate stale failed-agent state between sessions in the same workspace** ([#4416](https://github.com/Hmbown/CodeWhale/issues/4416))  
A second instance in the same workspace shows red failed-agent rows from an older session. Cross-session state bleed undermines trust in the "fresh workspace" story.

**10. [CLOSED] — v0.9.4: TUI save confirmation names the wrong destination for API keys** ([#5195](https://github.com/Hmbown/CodeWhale/issues/5195))  
The setup wizard saves the key to the global secret store but reports the config path — a small but confidence-eroding accuracy bug in credential UX.

---

## Key PR Progress

**1. [CLOSED] fix(subagent): stop counting finished children as shared-checkout contenders** ([#5284](https://github.com/Hmbown/CodeWhale/pull/5284)) — Hmbown  
Directly repairs the #5123 blocker: a builder sub-agent can now run `echo x > file` without being blocked by finished siblings competing for shared-checkout claims. Correctly scopes file-write authority to *live* children.

**2. [CLOSED] fix(release): clear the four CI blockers holding v0.9.4** ([#5282](https://github.com/Hmbown/CodeWhale/pull/5282)) — Hmbown  
The release is ready — it was waiting on a red lane, not a decision. Attempts to clear all four CI blockers on main; closes the loop on toolchain/pin drift across workspace, and pins the npm/crate versions coherently.

**3. [CLOSED] docs(readme): lead with mixed fleets — any model in any role** ([#5283](https://github.com/Hmbown/CodeWhale/pull/5283)) — Hmbown  
Reframes the README: "any model, any provider" is not just about switching mid-task — a saved role records `provider`, `model`, and reasoning tier, so a single fleet can span vendors. Corrects the under-sell of the model-catalog design.

**4. [OPEN] feat(mcp): background incremental registry sync** ([#5256](https://github.com/Hmbown/CodeWhale/pull/5256)) — bistack  
Cache-first fast return with no network on fresh snapshots; full downloads run in background guarded by a mutex. Directly addresses the MCP hot-reload pain (#4068) — iterative MCP workflows no longer need TUI restarts.

**5. [OPEN] fix(tui): stop stale cached session title from pinning New Session** ([#5258](https://github.com/Hmbown/CodeWhale/pull/5258)) — SparkofSpike  
Session titles were stuck at "New Session" forever — the title computed from the first message was overwritten by stale cache. Fixes snapshot ordering so titles update on the first message, not at snapshot end.

**6. [CLOSED] feat(subagents): allow embedders to isolate runtime state roots** ([#5252](https://github.com/Hmbown/CodeWhale/pull/5252)) — cacdcaecawae  
Adds `EngineConfig::subagent_state_root` so embedding hosts can own delegated-agent state per session, while keeping the legacy default unchanged. Moves worker ledgers and transcript artifacts under the new root.

**7. [OPEN] feat(config): add `model = auto` for prompt-based tier selection** ([#5257](https://github.com/Hmbown/CodeWhale/pull/5257)) — skyzhao1223  
Auto-select between `deepseek-v4-pro` (complex) and `deepseek-v4-flash` (simple) based on prompt. An efficiency win for users bouncing between fast/cheap and powerful/expensive.

**8. [OPEN] Layer 5.3: palette, completion, and discovery filtering** ([#5255](https://github.com/Hmbown/CodeWhale/pull/5255)) — aboimpinto  
Verifies and consolidates the user-command integration in the palette and slash-completion surfaces (the Layer 5.x command-boundary refactor). Proves each acceptance criterion with tests — the surface shipped earlier, this makes it *correct*.

**9. [CLOSED] Build fix for FreeBSD** ([#5254](https://github.com/Hmbown/CodeWhale/pull/5254)) — mky  
`rquickjs-sys` doesn't ship FreeBSD bindings. The fix gates the JS engine properly so FreeBSD builds don't hard-fail. Cross-platform portability is a good sign for the project's maturity.

**10. [OPEN] chore(deps): dependency bumps** ([#5281](https://github.com/Hmbown/CodeWhale/pull/5281), [#5280](https://github.com/Hmbown/CodeWhale/pull/5280), [#5279](https://github.com/Hmbown/CodeWhale/pull/5279), [#5278](https://github.com/Hmbown/CodeWhale/pull/5278), [#5277](https://github.com/Hmbown/CodeWhale/pull/5277), [#5276](https://github.com/Hmbown/CodeWhale/pull/5276), [#5275](https://github.com/Hmbown/CodeWhale/pull/5275), [#5274](https://github.com/Hmbown/CodeWhale/pull/5274)) — dependabot[bot]  
A healthy wave of routine dependency bumps (`jsonschema`, `thiserror`, `clap`, `async-trait`, `serde_json`, CI actions). Signal of active maintenance hygiene.

---

## Feature Request Trends

**1. Durable, resumable sub-agent state is the #1 theme.** Issues #425 (`resume_from`), #5123 (spawn surface), #1425 (large batch hangs on `agent_wait`), #3885 (fleet memory) — all converge on *being able to trust spawned work*. The community wants sub-agents to survive restarts, fail with clear diagnostics, and not stomp on each other's file writes.

**2. Persistent session/sidebar surfaces, not popups.** #2934 (sidebar sessions panel) and #3303 (TUI-editable config) both reject the "hidden behind a shortcut" pattern. Users want long-lived, visible state — sessions in a panel, config knobs in the UI, not buried in `config.toml`.

**3. Cross-session and cross-restart memory.** #2492 (no cross-session memory) is the clearest demand, but #4394 (structured survival contract for compaction) and #4190 (delayed check-ins) point the same direction: the tool should remember what it did, and say what it will do, without the user babysitting context.

**4. Mixed-model fleets and provider coherence.** #5257 (`model = auto`) and #5034 (provider switch leaves stale model) indicate users are actively mixing vendors and tiers. The ask: the tool should manage the surface coherently — and let the *user* decide when to run flash vs. pro, ideally automatically.

**5. MCP hot-reload without restarts.** #4068 (MCP hot-reload) drove #5256 (background registry sync). Users expect MCP config edits to take effect on the active turn — not after a TUI restart.

---

## Developer Pain Points

- **"BLOCKED" reads as a lie.** When a `builder` agent says it *can't* do the thing it was named to do (#5123), and the batch approval rejects calls the prompt told the model to make (#5146), trust in the tool's self-model breaks. Users are watching the gate hold — but also counting how often it had to.
- **Long-running sessions are opaque.** `agent_wait` timeouts with no diagnosis (#1425), no cross-session memory (#2492), stale failed rows from older sessions (#4416) — the tool's internal state becomes a black box precisely when you need it most.
- **Mixing providers is a footgun.** Provider/model switches are not atomic (#5034), and credential precedence is confusing enough to warrant a dedicated audit (#5197, #5195). Users want to *flip*, not *fiddle*.
- **Dead-end UX micro-frustrations.** The save dialog names the wrong destination (#5195), session titles stay "New Session" forever (#5258), and user-typed `!` commands hit the approval modal (#5191). None are release-blockers — but each one nicks a minute off every session the user has.
- **Structural debt is accruing.** 464 `#[allow(dead_code)]` attributes (#4785) and a duplicated runtime architecture (#3306, #4167) mean every new feature has to thread through two ownership paths. The v0.9.4 audit sweep is Hmbown's way of paying down that debt before the next major release.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*