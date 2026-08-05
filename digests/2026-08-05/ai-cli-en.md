# AI CLI Tools Community Digest 2026-08-05

> Generated: 2026-08-05 02:39 UTC | Tools covered: 9

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
**Date:** 2026-08-05 | **Prepared for:** Technical Decision-Makers & Developers

---

## 1. Ecosystem Overview

The AI CLI tool landscape is maturing rapidly, with **Claude Code**, **OpenAI Codex**, and **Gemini CLI** leading in community scale, while **Kimi Code**, **Qwen Code**, and **DeepSeek TUI** are aggressively iterating on protocol interoperability (ACP) and enterprise features. Across all tools, the dominant themes are **reliability at scale** (context window degradation, memory leaks, rate-limit transparency), **cross-platform stability** (Windows/WSL2 continues to be the weakest frontier), and **multi-provider/multi-account flexibility**. Security is emerging as a key differentiator, with all major tools shipping fixes for sandbox bypasses, SSRF vectors, and credential handling. Notably, **performance complaints against Node.js-based architectures** (Gemini CLI) and **monolithic crate compile times** (DeepSeek TUI) signal that developer experience friction is a competitive battleground.

---

## 2. Activity Comparison

| Tool | Issues (Active/Updated 24h) | PRs (Open/Updated 24h) | Release Status (24h) | Notable Release |
|------|---------------------------|----------------------|---------------------|-----------------|
| **Claude Code** | ~10 hot issues (1 new critical) | 10 PRs merged/updated | ✅ v2.1.222 | Security fixes (worktree isolation, hook bypass) |
| **OpenAI Codex** | 10 hot issues (3 new) | 10 PRs merged/updated | ✅ 4 alpha releases (rust-v0.147.0) | Rapid CI/release pipeline changes |
| **Gemini CLI** | 10 hot issues (all closed-stale) | 10 PRs open | ❌ No release | — |
| **GitHub Copilot CLI** | 10 hot issues (2 new regressions) | 2 PRs (placeholder/bot) | ✅ v1.0.79-1 | **Breaking**: sandbox setting rename |
| **Kimi Code CLI** | 4 hot issues (2 new) | 4 PRs open | ❌ No release (last v0.31.1) | — |
| **OpenCode** | 10 hot issues (4 new) | 10 PRs merged/updated | ✅ v1.18.13 | RTL layout fixes, TUI context |
| **Pi** | 10 hot issues (7 closed) | 10 PRs (7 open) | ❌ No release | — |
| **Qwen Code** | 11 hot issues (all new) | 10 PRs progressing | ✅ 2 preview/nightly | Browser extension diagnostics, headless docs |
| **DeepSeek TUI** | 10 hot issues (5 new) | 10 PRs open | ❌ No release (v0.9.4 in train) | 77-commit release train in progress |

**Notable:** Claude Code, OpenAI Codex, and OpenCode are shipping daily. Gemini CLI, Kimi, and DeepSeek TUI are in **stale/closed issue patterns** — a potential sign of triage bottlenecks or silent maintainer churn.

---

## 3. Shared Feature Directions

| Requirement | Tools (Evidence) | Specific Needs |
|-------------|-----------------|----------------|
| **Multi-account / Multi-identity Support** | Claude Code (#27302, 335👍), Codex (model-specific), Pi (#7508 OAuth), Gemini CLI | Switch between accounts of same connector; per-provider key storage; OAuth token adoption |
| **Session Portability & Forking** | Copilot CLI (#1697, 25👍), Kimi (#1282, 24👍), Claude Code (#82536), Codex (#36964) | Cross-device resume; fork/parallel sessions; session tags by folder; import from other tools |
| **Configurable Context/Compaction** | Claude Code (#82144), Kimi (#2586), DeepSeek TUI (#5239/#5244), Gemini CLI (#26157), Pi (#7602) | Independent compaction models; context-window awareness; graceful degradation at 500K+ tokens; `MAX_TOKENS` continuation |
| **Sandbox & Security Boundaries** | Claude Code (v2.1.222), Gemini CLI (SSRF fix #28557, GHSA #28691), Qwen (#8396), DeepSeek TUI (#4955) | No-sandbox escape hatches; SSRF protection; hook trust boundaries; variable-expansion bypass fixes; sandbox flexibility |
| **Cross-Platform (Windows/WSL2) Reliability** | Copilot CLI (#4328, #4026), Gemini CLI (#25805), Qwen (#8493), DeepSeek TUI (#5095), OpenCode (#16124) | PTY deadlocks; PowerShell vs pwsh; IME input; keyboard misinterpretation; path handling |
| **Custom/Local Model Providers** | Gemini CLI (SGLang PR #28681), Codex (model_provider), Kimi (ACP), Pi (Cortecs, LLM Gateway), DeepSeek TUI | OpenAI-compatible endpoints; honest model naming; hardcoded model-name removal |
| **Rate-Limit / Quota Transparency** | Gemini CLI (#23362, #24216, #25736, #28689), OpenCode (#16017), Claude Code (#62466) | Proactive quota alerts; fallback models; error propagation; usage APIs |
| **Persistent Memory** | Kimi (#1283), Copilot CLI (#4005), Claude Code (Memory System concept) | Cross-session project/pattern memory; per-org persistence |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|--------------|-------------|-------------------|
| **Claude Code** | Enterprise-grade reliability & security | Large orgs, multi-tenant workflows | Rust-based core; strict isolation; hook ecosystem; Connector multi-account |
| **OpenAI Codex** | Fast iteration; deep OpenAI platform integration | Cutting-edge adopters, multi-agent workflows | Rust; rapid alpha releases; aggressive feature-gating; Anthropic-compatible Responses API |
| **Gemini CLI** | Google ecosystem; Android/Termux; Cloud Workstations | Google-centric devs; enterprise | Node.js/npm — **architectural risk** (perf complaints); SGLang support in-bound |
| **GitHub Copilot CLI** | GitHub-native; enterprise policy compliance | GitHub Enterprise shops | Tight GitHub integration; sandbox settings; plugin system — **slow community momentum** |
| **Kimi Code** | Lightweight orchestration; ACP protocol citizenship | Multi-tool workflows; mobile clients | Actively building ACP ecosystem (models, permission mode); remote control demand |
| **OpenCode** | Open-source flexibility; provider-agnostic | Community/indie devs; CI/headless | Go-based; DeepSeek issues on Go plan; provider abstraction (OmniRoute) |
| **Pi** | TUI power-users; multiple providers; plugin ecosystem | Advanced terminal users | Rust?; community-driven PRs; enterprise Copilot compaction pain |
| **Qwen Code** | Qwen ecosystem; robust multi-modal (audio, images); CI/CD review automation | Qwen model users; automated review workflows | Reverse-audit review pipeline; daemon architecture; ACP parity gap vs competitors |
| **DeepSeek TUI** | Sandboxed shell control; deep DeepSeek integration | Security-conscious; local-first | Rust with kernel-level Seatbelt sandbox; **monolithic crate (682K lines)** — build-time friction |

---

## 5. Community Momentum & Maturity

**High Momentum (Daily releases, active PRs, responsive maintainers):**
- **Claude Code** — Most mature; security-first agenda; loudest enterprise feature demands (multi-account)
- **OpenAI Codex** — Fastest iteration cadence (4 alphas/day); community trust tested by release quality regressions
- **OpenCode** — Strong community PR flow; responsive to provider quirks; active TUI/desktop features

**Stabilizing (Mature but slow release cadence; stale issues):**
- **GitHub Copilot CLI** — Patch releases only; feature requests stagnating (theming, forking); bot PRs without human follow-up
- **Pi** — Community-driven PRs strong, but issue closures are often "Closed (Stale)" rather than resolved; enterprise compaction bugs unresolved

**Building (Aggressive feature development but weaker community volume):**
- **Kimi Code** — Few issues but high-signal (500K-token degradation); ACP protocol growth signals ecosystem ambition
- **Qwen Code** — Rapid preview/nightly cadence; heavy focus on review automation; community still forming
- **DeepSeek TUI** — Maintainer-driven roadmap (v0.9.4 train, v0.9.5 epic); contributor friction acknowledged and being addressed

**At Risk (Community engagement declining; stale patterns):**
- **Gemini CLI** — All 10 hot issues closed as **"Stale"**; rate-limit bugs unresolved; Node.js architecture complaints persisting; no releases in 24h — a potential warning sign for Google's commitment cadence

---

## 6. Trend Signals — What Developers Should Watch

1. **Security is the new differentiator** — SSRF fixes (Gemini), hook trust boundaries (Qwen), sandbox escapes (DeepSeek), and worktree isolation (Claude Code) are all shipping this week. Buyers should verify a tool's security posture before adopting.

2. **Windows/WSL2 remains the weakest frontier** — Every tool has unresolved Windows-specific bugs: PTY deadlocks (Gemini, Copilot), IME duplication (Kimi, Qwen), input lag from polling storms (Codex), crashes (Copilot CLI). Teams with Windows hybrid workflows should budget for friction.

3. **Rate-limit and quota transparency is non-negotiable** — Gemini CLI's silent 1-hour hangs (#25736) are the worst offender, but Codex, Claude Code, and OpenCode all have quota-related issues. Expect pressure on providers to expose usage APIs and proactive notifications.

4. **ACP (Agent Client Protocol) is becoming the interop standard** — Kimi (model discovery, permission mode), Qwen (task lists, usage frames), OpenCode (ACP usage tokens), and DeepSeek (tool execution over ACP) all push toward protocol parity. This is the foundation for multi-tool agent workflows.

5. **Context window management is the new bottleneck** — At 500K tokens (Kimi #2586), agents degrade into action loops with no escalation. Claude Code's compaction re-injection (#82144) and DeepSeek's silent 128K fallback (#5244) show the cost of poor context handling. Expect a wave of "smart compaction" features.

6. **Node.js architectures are under fire** — Gemini CLI's performance complaints (#22016) and the "vibe-coded PR" code-quality concern signal that language/architecture choices matter for CLI performance. Rust and Go implementations (Claude Code, OpenCode, Codex) are gaining preference.

7. **Multi-provider flexibility is table stakes** — From Pi's community-contributed routers (Cortecs, LLM Gateway) to Gemini's SGLang support and Qwen's custom-provider handling, users increasingly demand BYO-provider freedom. Hardcoded model names (Codex #37009) are treated as defects.

8. **Silent failures are the top trust killer** — Dropped text blocks (Claude Code #74260), false-success file edits (DeepSeek #5209), and silent context degradation (DeepSeek #5244) all erode user confidence. Tools that fail loudly with clear errors will win long-term trust.

---

*Report compiled from community digest data on 2026-08-05. All issue/PR numbers reference public GitHub repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-08-05 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

### 1.1 `skill-creator` Fixes: run_eval.py Recall Bug (#1298, #1099, #1050, #1323, #1261)
- **Author(s):** MartinCajiao, joshuawowk, gstreet-ops, Polluelo978, alvingarcia
- **Status:** All OPEN
- **URLs:** [#1298](https://github.com/anthropics/skills/pull/1298) · [#1099](https://github.com/anthropics/skills/pull/1099) · [#1050](https://github.com/anthropics/skills/pull/1050) · [#1323](https://github.com/anthropics/skills/pull/1323) · [#1261](https://github.com/anthropics/skills/pull/1261)

**Analysis:** Five separate PRs target the same critical bug: `run_eval.py` reports `recall=0%` for every skill description, making the description-optimization loop optimize against noise. The root cause is trigger detection failure — Claude CLI never invokes the test skill. Secondary issues include Windows subprocess incompatibility (`PATHEXT` not honored for `claude.cmd`), `cp1252` encoding, and `select()` on pipes. The fixes are complementary rather than competing: each addresses a distinct failure mode. **This is the most concentrated engineering effort in the repository**, indicating skill-creator is a critical path tool for the entire ecosystem. The issue [#556](https://github.com/anthropics/skills/issues/556) documents 10+ independent reproductions, confirming widespread impact.

### 1.2 `document-typography` (#514)
- **Author:** PGTBoos
- **Status:** OPEN
- **URL:** https://github.com/anthropics/skills/pull/514

**Functionality:** Typographic quality control for AI-generated documents — prevents orphan word wrap, widow paragraphs, and numbering misalignment.

**Discussion:** Addresses a universal pain point: typographic defects affect *every* document Claude generates. The PR positions itself as a quality gate rather than a generation tool, which is a novel skill pattern. High relevance for enterprise document workflows.

### 1.3 `docx` Tracked Changes w:id Fix (#541)
- **Author:** Lubrsy706
- **Status:** OPEN
- **URL:** https://github.com/anthropics/skills/pull/541

**Functionality:** Fixes document corruption when the DOCX skill adds tracked changes to documents with existing bookmarks. Root cause: `w:id` is a shared ID space in OOXML; hardcoded low IDs collide with existing bookmarks.

**Discussion:** Technical depth is high — this is a real OOXML spec issue. The PR demonstrates community expertise in document format internals, strengthening the `docx` skill's reliability.

### 1.4 `odt` Skill (#486)
- **Author:** GitHubNewbie0
- **Status:** OPEN
- **URL:** https://github.com/anthropics/skills/pull/486

**Functionality:** OpenDocument Text (.odt, .ods) creation, template filling, and ODT-to-HTML conversion.

**Discussion:** Fills a gap in the document format ecosystem — the repo already covers PDF, DOCX, and XLSX. OpenDocument format support aligns with open-source/ISO standard requirements. The trigger coverage is comprehensive (ODT, ODS, ODF, OpenDocument, LibreOffice document).

### 1.5 `frontend-design` Improvement (#210)
- **Author:** justinwetch
- **Status:** OPEN
- **URL:** https://github.com/anthropics/skills/pull/210

**Functionality:** Revises the frontend-design skill for clarity, actionability, and internal coherence. Ensures every instruction is actionable within a single conversation.

**Discussion:** Community-driven refinement of an existing skill. Focuses on the "specific enough to steer behavior without over-constraining" balance — a recurring theme in skill quality discussions.

### 1.6 `skill-quality-analyzer` + `skill-security-analyzer` (#83)
- **Author:** eovidiu
- **Status:** OPEN
- **URL:** https://github.com/anthropics/skills/pull/83

**Functionality:** Two meta-skills: (1) quality analysis across five dimensions (structure, documentation, examples, resources), and (2) security analysis of skills. Meta-skills evaluate other skills.

**Discussion:** Introduces a **meta-skill pattern** — skills that analyze other skills. This is forward-looking: as the ecosystem grows, quality/security gatekeeping becomes necessary. Notably, security analysis directly addresses the trust-boundary issue raised in #492.

### 1.7 `color-expert` (#1302)
- **Author:** meodai
- **Status:** OPEN
- **URL:** https://github.com/anthropics/skills/pull/1302

**Functionality:** Self-contained color-expertise skill: naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912, CSS named), color spaces with "what to use when" table (OKLCH for scales, OKLAB for gradients, CAM16 for perception), and more.

**Discussion:** Deep domain expertise in a narrow field. The PR demonstrates how much specialized knowledge a single well-crafted skill can encapsulate. High-quality reference material.

---

## 2. Community Demand Trends

### 2.1 Security & Trust Boundary (Issue #492 — 43 comments)
- **URL:** https://github.com/anthropics/skills/issues/492

Community-made skills distributed under the `anthropic/` namespace impersonate official skills, creating a trust-boundary vulnerability where users may grant elevated permissions believing them official. **This is the highest-activity issue** and signals demand for:
- **Skill provenance/verification** — cryptographic or organizational trust signals
- **Namespace governance** — clear separation between official and community skills
- **Permission scoping** — least-privilege defaults for skill execution

### 2.2 Test Generation & Quality Assurance (↔ #723 testing-patterns)
- **URL:** https://github.com/anthropics/skills/pull/723

The `testing-patterns` skill (Testing Trophy model, unit/component/E2E coverage) and the `self-audit` skill (#1367 — mechanical verification + four-dimension reasoning audit) both target **output quality verification**. The community is converging on: *"Claude generates the work; something else must verify it."*

### 2.3 Context Window & Token Efficiency (Issues #189, #1487)
- **URLs:** [#189](https://github.com/anthropics/skills/issues/189) · [#1487](https://github.com/anthropics/skills/issues/1487)

Two issues exposed serious context-window problems:
- #189: `document-skills` and `example-skills` plugins install **identical skills**, causing duplicates
- #1487: `claude-api` skill injects **~156k tokens** in a single tool call, exhausting context

**Demand:** Predictable token budgets, deduplication, and lazy-loading skills rather than eager injection.

### 2.4 Organization-wide Skill Sharing (Issue #228 — 16 comments, 8 👍)
- **URL:** https://github.com/anthropics/skills/issues/228

Request for org-wide skill libraries with direct sharing links rather than manual `.skill` file transfer via Slack/Teams. **8 upvotes** — highest of any issue — indicates strong enterprise demand.

### 2.5 Agent Memory & State Management (Issue #1329)
- **URL:** https://github.com/anthropics/skills/issues/1329

Proposal for a `compact-memory` skill using symbolic notation for compact agent state. Long-running agents spend context on prose notes; symbolic representation could reduce overhead.

---

## 3. High-Potential Pending Skills

### 3.1 `self-audit` (#1367) — Mechanical + Reasoning Quality Gate
- **Author:** YuhaoLin2005 | Updated: 2026-07-02
- **URL:** https://github.com/anthropics/skills/pull/1367

Universal output-auditing skill: verifies every claimed output file exists, then runs four-dimension reasoning audit in damage-severity order. Versioned (v1.3.0), suggesting active iteration. Directly addresses the "Claude generates, quality gate verifies" trend.

### 3.2 `plan-file-hygiene` (#1479) — Planning Artifact Lifecycle
- **Author:** Palo-Alto-AI-Research-Lab | Updated: 2026-07-27
- **URL:** https://github.com/anthropics/skills/pull/1479

Addresses the "planning artifacts accumulate with no lifecycle" problem (#1417). Implements a lifecycle for plan files — a governance dimension most repos lack. Active collaboration credited to @halilxibrahim and @xg-gh-25.

### 3.3 `comprehensive-testing-patterns` (#723) — Full Testing Stack
- **Author:** 4444J99 | Updated: 2026-04-21
- **URL:** https://github.com/anthropics/skills/pull/723

Covers Testing Trophy philosophy, AAA unit patterns, React Testing Library, and E2E. One of the most comprehensive testing skills proposed, aligned with the community's broader QA focus.

### 3.4 `pyxel` (#525) — Retro Game Development
- **Author:** kitao | Updated: 2026-07-15
- **URL:** https://github.com/anthropics/skills/pull/525

Wraps pyxel-mcp for the Pyxel retro game engine. Covers write → run_and_capture → inspect → iterate workflow. Author is the pyxel-mcp maintainer, lending credibility. Recent update suggests continued activity.

### 3.5 `SAP-RPT-1-OSS` Predictor (#181) — Tabular Foundation Model
- **Author:** amitlals | Updated: 2026-03-16
- **URL:** https://github.com/anthropics/skills/pull/181

Integrates SAP's open-source tabular foundation model for predictive analytics on enterprise data. Enterprise niche, but unique in the ecosystem — no other PR touches predictive modeling.

### 3.6 `color-expert` (#1302) — Deep Domain Reference
- **Author:** meodai | Updated: 2026-07-21
- **URL:** https://github.com/anthropics/skills/pull/1302

Consistently refined since June. The most recent update at 2026-07-21 among high-potential PRs suggests an author actively responding to feedback.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for quality and safety infrastructure around skills themselves** — whether through skill-creator reliability fixes (5 competing PRs), meta-skills that audit other skills (#83), self-audit quality gates (#1367), or trust-boundary security (#492) — indicating the ecosystem has matured past "what skills can Claude run?" to **"how do we trust, verify, and manage what Claude runs?"**

---

# Claude Code Community Digest — 2026-08-05

## Today's Highlights

Release **v2.1.222** tightens security around worktree-isolated sessions and background agent tasks, fixing a dangerous gap where subagents could run destructive git commands against the main checkout. The community's most pressing demand remains **multi-account Connector support** (#27302, 226 comments, 335👍), while a newly surfaced **data-loss bug** (#74260) where assistant text blocks silently disappear during adaptive thinking has become the most-watched fresh issue this week. On the security front, a new report (#84008) about API refusals on Windows enumeration commands—even for users in the "cyber program"—is generating discussion about intervention policies.

---

## Releases

### v2.1.222
- **Security fix**: Worktree-isolated sessions and their subagents can no longer run destructive git commands against the main checkout; isolation now applies to file edits and Bash in **every** session type.
- **Hook bypass fix**: PreToolUse auto-allow hooks no longer get bypassed in background agent tasks.

🔗 [Release v2.1.222](https://github.com/anthropics/claude-code/releases/tag/v2.1.222)

---

## Hot Issues

1. **[#27302 — Support multiple Connector accounts (same connector, different accounts)](https://github.com/anthropics/claude-code/issues/27302)** — The most-upvoted open enhancement (335👍, 226 comments). Users need to switch between different accounts of the same connector (e.g., two Google Workspaces) inside Claude Code and claude.ai/code without re-authenticating. This is the definitive "must-have" for enterprise and multi-tenant workflows.

2. **[#74260 — Assistant text blocks silently dropped when followed by more thinking](https://github.com/anthropics/claude-code/issues/74260)** — A serious data-loss issue in v2.1.201 with adaptive thinking. Text emitted mid-turn is never rendered and missing from transcript JSONL. Users lose work silently; this is the kind of bug that erodes trust in the tool.

3. **[#62466 — Repeated "Image couldn't be processed" API errors consuming usage limit](https://github.com/anthropics/claude-code/issues/62466)** — Users are burning paid tokens on images that fail to process. The 30 comments indicate this is happening broadly across platforms. A cost-incurring bug that Anthropic should prioritize.

4. **[#23704 — Read tool's PDF support requires undocumented poppler-utils](https://github.com/anthropics/claude-code/issues/23704)** — The Read tool claims PDF support, but silently fails without `pdftoppm`. The dependency is undocumented and not detected post-install. A classic "works on my machine" trap, especially in containers.

5. **[#21108 — Claude accesses git origin server on startup before any commands issued](https://github.com/anthropics/claude-code/issues/21108)** — A privacy/security concern: Claude reaches out to the git origin on launch, before the user issues any command. In offline or air-gapped environments this can cause startup hangs or unwanted network activity.

6. **[#13378 — 2-space indent and hard wrap at 80 breaks copy-paste](https://github.com/anthropics/claude-code/issues/13378)** — A long-standing (since Dec 2025) formatting complaint with 72👍. Users copy-pasting code from the TUI get mangled output; the inability to disable this reformatting is a real productivity drain.

7. **[#21378 — Critical memory leak: 15GB RAM consumption after 20+ minutes](https://github.com/anthropics/claude-code/issues/21378)** — Long-running sessions still freeze the machine. The CRITICAL tag plus WSL2/Linux reports make this a serious reliability blocker for heavy users.

8. **[#53408 — MCP Microsoft 365 connector rejects personal accounts](https://github.com/anthropics/claude-code/issues/53408)** — Hotmail/Outlook.com/Live accounts can't authenticate. A significant accessibility gap for personal-account users of the bundled connector.

9. **[#84008 — API Refusal on Windows enumeration command despite cyber program access](https://github.com/anthropics/claude-code/issues/84008)** — New report: a user with access to the cyber program still gets flagged for trivial `enumeration` commands on Windows. Raises questions about how program membership is applied to tool-use policies.

10. **[#82144 — Post-compaction skill re-injection costs ~4x the compaction summary](https://github.com/anthropics/claude-code/issues/82144)** — After compaction, full skill bodies (byte-truncated) are re-injected, ballooning context. For sessions with multiple skills, this negates the benefit of compaction and drives up token costs.

---

## Key PR Progress

1. **[#83992 — fix(plugin-dev): assert expected hook decision](https://github.com/anthropics/claude-code/pull/83992)** — `test-hook.sh` now supports `--expect allow|deny|ask`. Previously, test scripts couldn't distinguish "hook ran" from "hook made the right decision." Fixes #83800. A quality-of-life fix for hook developers.

2. **[#84004 — fix(plugin-dev): limit frontmatter parsing](https://github.com/anthropics/claude-code/pull/84004)** — Prevents `sed`-based frontmatter parsing from restarting at every later `---` line, which corrupted settings when Markdown bodies contained horizontal rules.

3. **[#83990 — fix(plugin-dev): report missing jq dependency](https://github.com/anthropics/claude-code/pull/83990)** — Valid JSON was being reported as malformed when `jq` was missing. Fixes #83802. A small but frustrating DX trap for hook testers.

4. **[#83995 — fix(scripts): validate label option values](https://github.com/anthropics/claude-code/pull/83995)** — Fixes `$2: unbound variable` aborts and mis-consumption of following options when `--add-label`/`--remove-label` lack values.

5. **[#83999 — fix(scripts): validate gh flag values](https://github.com/anthropics/claude-code/pull/83999)** — Stops the restricted `gh` wrapper from forwarding incomplete commands like `gh issue list --limit`, which previously bypassed wrapper validation.

6. **[#83993 — fix(scripts): reject self-referential duplicates](https://github.com/anthropics/claude-code/pull/83993)** — `comment-on-duplicates.sh` could propose the triggering issue as its own duplicate, posting a self-referential comment that confused automations.

7. **[#84003 — fix(scripts): propagate top-level failures](https://github.com/anthropics/claude-code/pull/84003)** — Both duplicate-maintenance scripts used `.catch(console.error)`, which reported failures but resolved the promise—hiding CI failures. Now they propagate properly.

8. **[#83738 — Fix/83484 symlink path expansion](https://github.com/anthropics/claude-code/pull/83738)** — Fixes broken `~/.local/bin/claude` symlinks that target a literal `%h` placeholder instead of an expanded home path on some Linux installs.

9. **[#83374 — docs(plugin-dev): document MessageDisplay streaming semantics](https://github.com/anthropics/claude-code/pull/83374)** — Adds `MessageDisplay` to the bundled Hook Development skill's trigger description, event guidance, and quick-reference table.

10. **[#83890 — Create pylint.yml](https://github.com/anthropics/claude-code/pull/83890)** — A community PR adding a Pylint CI workflow. Small, but signals interest in maintaining code quality on community scripts.

---

## Feature Request Trends

1. **Multi-account and multi-identity support** (#27302, #53408): The clear #1 theme. Users want to switch between Connector accounts (same service), and they want personal Microsoft accounts to work. "One identity per machine" no longer suffices.

2. **Environment-dependent tool behavior** (#23704, #66563): PDF handling is the poster child—users want capabilities that adapt to whatever's installed in their environment (poppler-utils, LaTeX tools) with clear detection and messaging, not silent failure.

3. **Session portability and labeling** (#82536, #81628): Users want `--continue` to find sessions created via `-p` for interactive resume, and they want Desktop session tags to reflect the folder (not just the repo name) so multiple clones are distinguishable.

4. **Configurable output formatting** (#13378): The TUI's fixed 2-space indent and 80-col hard wrap remain the most persistent formatting complaint. Users want it configurable or off.

5. **Cross-device/verifiable identity for browser control** (#77605, #74902): "Claude in Chrome" needs reliable device and profile identification—generic "Browser 1/2" names and cross-machine driving without ID checks are both security and usability concerns.

---

## Developer Pain Points

- **Silent data loss and silent divergence** — The #74260 dropped-text bug and #82536 session-not-found issue both frustrate users because Claude Code fails *silently*: no error, no warning, just missing output or a dead end.
- **Unbounded resource consumption** — Whether it's the 15GB memory leak (#21378), image-processing errors burning quota (#62466), or skill re-injection eating context after compaction (#82144), users repeatedly pay real costs for internal inefficiencies.
- **Undocumented or undetected runtime dependencies** — The poppler-utils gap (#23704) and the `jq`-missing test failure (PR #83990) both show how fragile tooling is when dependencies aren't declared or detected up front.
- **Security boundaries that don't hold** — The git-origin-on-startup access (#21108), the PreToolUse hook bypass (fixed in 2.1.222), and the multi-account browser risk (#74902) all point to a theme: users want stronger, more predictable isolation and verification boundaries.
- **"Cyber program" access not translating to tool-use policy** — The new #84008 report suggests users with approved red-team/cyber access are still getting API refusals on benign enumeration commands, indicating the intervention layer doesn't fully respect program membership.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-05

## Today's Highlights

The Codex team shipped several rapid-fire `rust-v0.147.0` alpha releases within 24 hours, though detailed changelogs were not published. The community's attention remains sharply focused on Windows desktop performance: a cluster of issues reports repeated `taskkill.exe`/`conhost.exe`/PowerShell/WMI polling storms causing system-wide input lag, which has become the most active bug thread cluster this week. On the engineering side, a series of features landed around custom tool search, concurrent exec-server dispatch, and improved session migration.

## Releases

Four alpha releases were published in the last 24 hours: `rust-v0.147.0-alpha.7`, `rust-v0.147.0-alpha.6.4`, `rust-v0.147.0-alpha.6.3`, and `rust-v0.147.0-alpha.6.1`. All are patch-level alpha releases with no accompanying changelog notes. Given the rapid cadence, these likely contain incremental fixes and CI/release pipeline adjustments rather than user-facing features.

## Hot Issues

1. **[#11023 — Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)** — 199 comments, 917 👍. This is the most upvoted open issue, with the community strongly requesting a Linux desktop build. The author cites macOS power-consumption issues and prefers Linux; the massive reaction indicates a broad unmet demand.

2. **[#25719 — macOS `syspolicyd`/`trustd` CPU/memory runaway](https://github.com/openai/codex/issues/25719)** — 80 comments, 387 👍. Desktop on macOS triggers persistent system-daemon CPU/memory escalation. High engagement suggests many Plus-tier users are hitting this.

3. **[#9203 — Bring back "/undo"](https://github.com/openai/codex/issues/9203)** — 68 comments, 372 👍. Users miss the ability to revert unintended file deletions/modifications in TUI sessions—a safety-critical feature. Repeated requests across months.

4. **[#33776 — Hundreds of `taskkill.exe`/`conhost.exe` processes on Windows](https://github.com/openai/codex/issues/33776)** — 29 comments. A detailed forensic report on Desktop 26.707 spawning 287+ processes, causing WMI storms and DWM degradation. This is the flagship Windows performance complaint.

5. **[#36176 — PowerShell/WMI polling persists in 26.721.4979.0; system-wide input lag](https://github.com/openai/codex/issues/36176)** — 7 comments, consolidation thread for the ongoing Windows issue. Author documented a patched local workaround, suggesting deep community investigation.

6. **[#30408 — MCP server process leaks; 9+ GB RSS](https://github.com/openai/codex/issues/30408)** — 22 comments. App-server never kills per-thread MCP processes on archive/close, leading to unbounded memory growth. Memory-hungry environments will feel this immediately.

7. **[#29499 — WMI Provider Host high CPU after startup on Windows](https://github.com/openai/codex/issues/29499)** — 17 comments, 23 👍. Pro x20 user reports persistent WMI CPU saturation; related to the broader Windows resource-polling theme.

8. **[#34700 — `spawn_agent` rejects `gpt-5.6-luna` with `multi_agent_v2`](https://github.com/openai/codex/issues/34700)** — 10 comments, 27 👍. Subagent spawning fails with a specific model and feature flag combo; users blocked from using newest models in multi-agent workflows.

9. **[#37009 — Memory writer sends hardcoded `gpt-5.6-luna`/`terra` to non-OpenAI providers](https://github.com/openai/codex/issues/37009)** — 2 comments, opened today. Custom `model_provider` users report credential/model leakage into memory writes—both a correctness and privacy problem.

10. **[#31754 — `codex-cli 0.143.0` regression: `Unknown parameter: input[...].namespace`](https://github.com/openai/codex/issues/31754)** — 14 comments, 8 👍. Existing conversations fail after upgrade; a clear regression affecting WSL2 users and CLI workflows.

## Key PR Progress

1. **[#36998 — Support deferred custom tools in tool search](https://github.com/openai/codex/pull/36998)** — Adds top-level freeform tools to the tool-search index, serializes them as Responses API `custom` tools, and converts them back executable specs post-discovery. Improves tool discovery and lazy loading.

2. **[#36987 — Opt-in concurrent exec-server request dispatch](https://github.com/openai/codex/pull/36987)** — New `--concurrent-requests <COUNT>` flag for local/remote exec-server connections so long-running requests no longer block unrelated health checks and cleanup.

3. **[#36993 — Support `includeTurns` reads for paginated threads](https://github.com/openai/codex/pull/36993)** — Reconstructs full projected turns from paginated history, giving legacy clients the complete view even when a thread stores history as pages.

4. **[#36976 — Honor explicit-only orchestrator skills](https://github.com/openai/codex/pull/36976)** — Hidden `allow_implicit_invocation: false` orchestrator skills were still exposed in the model-visible catalog; now hidden from prompt yet available for direct invocation.

5. **[#36970 — Configurable token budget context identity](https://github.com/openai/codex/pull/36970)** — New `features.token_budget.mode` (`thread` vs `name`) lets context-window metadata default to thread ID or preserve agent name behavior.

6. **[#36992 — Allow injecting model catalog caches](https://github.com/openai/codex/pull/36992)** — Public async `ModelsCache` contract; providers and `OpenAiModelsManager` can accept callers' caches while retaining the default file-backed implementation.

7. **[#36981 — Enable remote compaction for Amazon Bedrock](https://github.com/openai/codex/pull/36981)** — Marks Bedrock as v1-only, routing compaction through `/v1/responses/compact` even when v2 is enabled; preserves v2 capabilities when needed.

8. **[#36964 — Preserve working directories when importing external sessions](https://github.com/openai/codex/pull/36964)** — Resolves `empty-window` Cursor sessions to the parent project directory, fixing lost workspace context on import.

9. **[#36967 — Skip symlinks when installing plugins](https://github.com/openai/codex/pull/36967)** — Ignores symlinks and non-file/non-dir entries when copying plugins into the store instead of rejecting installs; covers symlinked skill files and executables.

10. **[#36966 — Allow disabling built-in image viewer](https://github.com/openai/codex/pull/36966)** — New stable `features.view_image` flag (default-on) to omit the native `view_image` tool from all contexts, including subagents and guardian review turns.

## Feature Request Trends

- **Native Linux desktop app** remains the top single request (917 👍), driven by macOS resource concerns and developer preference for Linux.
- **Session control/UX**: Reintroduce `/undo` (372 👍), add delete-chat options on macOS, and sort Projects sidebar alphabetically.
- **Cross-platform history unification**: Users want CLI sessions as first-class threads in Desktop history, plus import from other tools (Cursor, Claude Code) done right (preserving working dirs, deduping connectors).
- **Model/feature flag flexibility**: Users want subagents to respect custom model and reasoning settings (including `gpt-5.6-luna` with `multi_agent_v2`), indicating tension between feature-gate rollouts and power users.
- **Custom-provider support**: Several requests for better behavior with non-OpenAI providers (LiteLLM, etc.), specifically fixing hardcoded model names in background systems (memory writer) and preserving session history on provider switch.

## Developer Pain Points

- **Windows resource storms are the dominant pain**: Repeated `taskkill.exe`/`conhost.exe`/PowerShell/WMI polling causes system-wide stutter, input lag, DWM degradation, and WMI Provider Host CPU saturation. Multiple threads (#33776, #36176, #36025, #34158, #32562, #29499, #25453) describe the same root cause, and users report it persists even after closing the app; one user patched a local copy to get relief.
- **MCP server/memory leaks**: Spawned MCP servers per thread are never cleaned up, leading to multi-GB RSS growth (#30408). Custom stdio servers can be "discovered but not exposed" to threads (#19425).
- **Windows sandbox flakiness**: `apply_patch` fails with sandbox errors (#30009), ACL repairs re-run on inherited-only rights cause >60s spawn hangs (#34889), and tests deterministically time out.
- **Mac/iOS system resource usage**: `syspolicyd`/`trustd` runaway (#25719) and high GPU usage from "tiny useless animation" (#16857) waste battery on laptops—a clear UX regression.
- **Instability from rapid releases**: Users report regressions in CLI upgrades (0.143.0 breaking existing conversations—#31754) and desktop update failures (#37002—unable to install after clicking Update), suggesting release quality varies.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest - 2026-08-05

## Today's Highlights

The Gemini CLI community continues to show strong engagement, with 50 issues and 26 pull requests updated in the last 24 hours. Notably, a new security fix (PR #28691) addresses a variable expansion bypass in the shell substitution detection (GHSA-wpqr-6v78-jr5g), while a critical SSRF vulnerability fix (PR #28557) for the web-fetch utility awaits review. The community remains vocal about recurring pain points including WSL2/PTY issues, 429 rate-limit handling, and the need for better error recovery mechanisms.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

### 1. [Breaking Change: VSCode Extension v2.57 Connectivity Failure](https://github.com/google-gemini/gemini-cli/issues/12657) (75 comments)
**Labels:** priority/p1, kind/bug, effort/large | **Status:** Closed (Stale)
The VSCode Code Assist extension v2.57 introduced a regression related to glibc, causing `EPIPE` connection errors. This remains one of the most active issues in the repository—unsurprising given how many developers depend on the extension. The 75-comment thread includes extensive troubleshooting but ultimately went stale without a confirmed resolution.

### 2. [429 Resource Exhausted on Gemini Pro Account](https://github.com/google-gemini/gemini-cli/issues/23362) (17 comments)
**Labels:** priority/p2, kind/bug, status/possible-duplicate | **Status:** Closed (Stale)
A Pro subscriber consistently hits "No capacity available for model" errors with account login but not with API key auth. The community suspects abuse-flagging or account-level capacity issues. This ties into a broader theme of quota and rate-limit reliability concerns.

### 3. [Endless Thinking on Ultra Subscription](https://github.com/google-gemini/gemini-cli/issues/24216) (11 comments, 11 👍)
**Labels:** priority/p2, area/enterprise, kind/bug | **Status:** Closed (Stale)
An Ultra subscriber reports the CLI is unusable for 5+ days due to endless "Thinking" states. The issue received 11 upvotes and includes a screenshot of the unresponsive state. The community highlighted frustration with the suggestion to contact Cloud Console support for rate-limit issues.

### 4. [Silent Hang on 429 Rate Limit for Ultra Subscribers](https://github.com/google-gemini/gemini-cli/issues/25736) (8 comments)
**Labels:** priority/p1, kind/bug, effort/medium | **Status:** Closed (Stale)
A critical bug where the agent enters a silent, unresponsive 'Thinking' state for ~1 hour when hitting a 429 from `cloudcode-pa.googleapis.com`. The lack of backoff logic, error messaging, or user communication is a severe UX failure for paying users.

### 5. [Critical: Agent Silent Hang on 429 Rate Limit](https://github.com/google-gemini/gemini-cli/issues/25736) (8 comments)
**Labels:** priority/p1, kind/bug, effort/medium | **Status:** Closed (Stale)
(Note: This appears to be duplicated from #4 above; consolidating entries.)

### 6. [WSL2 PTY Deadlock: Inter-OS Binary Execution Regression](https://github.com/google-gemini/gemini-cli/issues/25805) (8 comments)
**Labels:** priority/p1, kind/bug, effort/large | **Status:** Closed (Stale)
A regression of #15233 where executing Windows binaries (e.g., `pwsh.exe`) from within WSL2 via PTY deadlocks. This is a known architectural limitation of WSL2 and has also been reported in multiple related issues, making it a top community pain point.

### 7. [Slash Commands Not Intercepted; Passed to Model](https://github.com/google-gemini/gemini-cli/issues/25824) (8 comments)
**Labels:** priority/p2, kind/bug | **Status:** Closed (Stale)
Commands like `/quit` and `/help` are being sent to the LLM as text instead of being handled by the CLI. This is a fundamental interaction bug that breaks expected terminal behavior.

### 8. [Pasting Long/Multi-line Text Triggers Premature Execution](https://github.com/google-gemini/gemini-cli/issues/20293) (17 comments)
**Labels:** priority/p2, kind/bug, effort/large | **Status:** Closed (Stale)
A synchronization issue where pasting large text blocks triggers execution before Enter is pressed. Follow-up issue #26114 reproduces this on Windows/WSL2, and #25998 identifies the root cause in `KeypressContext.tsx`—the UI hangs when pasting ~5KB+. These were the catalyst for PR #28641 (ghost text wrapping fix).

### 9. [CLI Slow Compared to Claude Code](https://github.com/google-gemini/gemini-cli/issues/22016) (7 comments)
**Labels:** priority/p2, kind/bug, effort/large | **Status:** Closed (Stale)
Developer attributes performance issues to Node.js/npm binary overhead. A long-running performance complaint (~5 months old).

### 10. [Unsupported Platform: Android on Termux](https://github.com/google-gemini/gemini-cli/issues/26331) (7 comments)
**Labels:** priority/p2, kind/bug | **Status:** Closed (Stale)
Users on Android/Termux cannot verify Pro accounts due to an `Unsupported platform: android` error. Indicates a wider desire for mobile/edge usage of the CLI.

---

## Key PR Progress

### 1. [SSRF Vulnerability Fix via Async DNS Resolution](https://github.com/google-gemini/gemini-cli/pull/28557)
**Labels:** priority/p1, area/security, size/s | **Status:** Open
Fixes #28555 by using `isPrivateIpAsync` to resolve DNS names before validation—closing a SSRF vector where hostnames resolving to internal IPs (e.g., `169.254.169.254`) bypassed checks. Critical security hardening for the web-fetch tool.

### 2. [Block Variable Expansion Bypass (GHSA-wpqr-6v78-jr5g)](https://github.com/google-gemini/gemini-cli/pull/28691)
**Labels:** priority/p1, area/security, size/l | **Status:** Open
Fixes incomplete `detectBashSubstitution()`/`detectPowerShellSubstitution()` checks that allowed `$VAR`/`${VAR}` variable expansion patterns to bypass security gates. Also hardens the automated issue-dedup workflow. Addresses #28418.

### 3. [Unwrap Nested Gaxios Streaming Errors](https://github.com/google-gemini/gemini-cli/pull/28689)
**Labels:** None | **Status:** Open
Adds fallback parsing of `error.cause.message` from `gaxios` to surface structured errors (rate limits, capacity exhaustion) during streaming requests—directly addressing the community's pain point around opaque 429 errors.

### 4. [Context Corruption & Quota Error Fallback Fixes](https://github.com/google-gemini/gemini-cli/pull/28671)
**Labels:** None | **Status:** Open
Defensive history hardening to prevent context corruption when tool executions are interrupted (quota fallbacks, ESC queries). Also addresses the "autocomplete" prefix-continuation behavior that confuses the model.

### 5. [/compress Session Reload & Quota-Fallback Tool Response Loss](https://github.com/google-gemini/gemini-cli/pull/28672)
**Labels:** area/core, area/agent, 🔒 maintainer only, help wanted | **Status:** Open
Repairs `/compress` failures (`Failed to compress chat history: Failed to load resumed session data`) and prevents tool response loss when hitting quota limits. Directly addresses developer-reported data-loss scenarios.

### 6. [Ghost Text Wrapping Infinite Loop Fix](https://github.com/google-gemini/gemini-cli/pull/28641)
**Labels:** priority/p2, help wanted | **Status:** Open
Fixes `getGhostTextLines` infinite loop when `inputWidth` is narrower than a single wide CJK/emoji codepoint. Includes a regression test that would hang without the guard. Fixes #19985.

### 7. [Load Env Vars Before Resolving Settings Placeholders](https://github.com/google-gemini/gemini-cli/pull/28597)
**Labels:** size/l | **Status:** Open
Resolves a load-order race condition where settings were expanded against `process.env` before local `.env` files were loaded—causing missing `NODE_EXTRA_CA_CERTS` and other env-dependent settings (related to #25987).

### 8. [Automated Response Continuation for Truncated Responses](https://github.com/google-gemini/gemini-cli/pull/26157)
**Labels:** area/agent, kind/enhancement | **Status:** Closed
Detects `finishReason: MAX_TOKENS` and prompts the model to continue while preserving full conversation context—a quality-of-life fix for long documents and code generation.

### 9. [SGLang and Local OpenAI-Compatible Endpoints](https://github.com/google-gemini/gemini-cli/pull/28681)
**Labels:** priority/p1, size/l, size/xl | **Status:** Open
Adds support for SGLang inference server and other local OpenAI-compatible endpoints. Expands the CLI beyond Google-hosted models—a significant community request for enterprise and self-hosted deployments.

### 10. [Dynamic Cloud Workstations Proxy Redirect for OAuth](https://github.com/google-gemini/gemini-cli/pull/28688)
**Labels:** priority/p3, area/security | **Status:** Open
Fixes OAuth flows in Cloud Workstations VMs where static `localhost` redirect URIs fail. Resolves authentication issues for developers using web-based IDEs.

---

## Feature Request Trends

1. **Local/Alternative Model Support (NEW this week):** PR #28681 adds SGLang/OpenAI-compatible endpoint support—a clear demand for running local models or non-Google backends. Expect further community pressure for self-hosted options.

2. **Better Rate-Limit Handling & Transparency:** Recurring across #23362, #24216, #25736, #26089. Users want: proactive quota notifications, backup/fallback model switching, and clear error messages instead of silent hangs.

3. **Cross-Platform Reliability (Windows/WSL2):** Multiple issues (#25805, #25932, #27355, #26114) demand first-class support for Windows executables in WSL2, PowerShell 7 (not just old `powershell.exe`), and stable PTY behavior.

4. **Improved Pasting and Input Handling:** Issues #20293, #25998, #26114 reveal a theme: paste large text without UI freezes, premature execution, or character-by-character processing bottlenecks.

5. **Session Reliability & Recovery:** Requests for `/compress` fixes (#28672), truncated-response continuation (#26157), and resume-by-ID (#25976) all point to a need for robust long-running session management.

6. **Better Contribution Onboarding:** Issue #25206 asks for improved CONTRIBUTING.md with "good first issue" pointers—community wants more accessible ways to help.

---

## Developer Pain Points

1. **Rate Limiting & Capacity Exhaustion (Most Impactful):** Ultra/Pro subscribers are disproportionately affected. The silent 1-hour hang is by far the worst offender—a paid user gets zero feedback. Expect continued uproar until #28689 (error propagation) and #28672 (quota fallback) land.

2. **WSL2/Windows Interop Chaos:** Not just a niche annoyance—multiple priority/p1 issues (deadlocks, PowerShell vs pwsh, PTY hangs) show Windows/Linux hybrid workflows are a large segment of the user base. These issues have been open for months and sometimes stale, which frustrates enterprise teams.

3. **Performance Anxiety:** #22016 remains a long-running complaint about speed relative to Claude Code. Users are starting to ask pointed questions about the Node.js npm binary architecture—the "vibe-coded PR" disclaimer in #28474 suggests contributors are also attuned to code-quality concerns.

4. **Config and Settings Confusion:** Errors referencing non-existent `setting.json` (#25889), NODE_EXTRA_CA_CERTS ignored after v0.39.0 (#25987), and custom theme selection failures (#25961) highlight recurring configuration-management bugs that break trust in the tool.

5. **Session State Corruption:** Whether it's the deadlocked `sendMessageStream` (#22521), tool response loss after quota fallback (#28672), or resumption failures (#25976)—users are losing work, and that's a top-priority reliability concern.

---

*Digest compiled from 50 issues and 26 PRs. All items reflect activity in the last 24 hours.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-05

## Today's Highlights

A new patch release (v1.0.79-1) introduces a breaking rename of the sandbox setting `allowDevToolCaches` to `allowDevToolAccess`, broadening the scope of what the setting controls. Community discussion remains focused on long-standing feature requests — custom themes and session forking continue to draw significant support (23 and 25 👍 respectively). Several new regressions surfaced this week, including an MCP initialization failure with FastMCP servers and a plugin slash-command regression, signaling potential areas of instability in recent releases.

## Releases

**v1.0.79-1** — Improved
- **BREAKING**: The sandbox setting `allowDevToolCaches` is renamed to `allowDevToolAccess`, since it now grants dev-tool config and registries access in addition to caches. The old key is no longer read and is silently ignored, so an existing `false` opt-out reverts to the default (enabled). Users must rename the key in their settings to maintain their previous opt-out configuration.

## Hot Issues

1. **[#1504 — Add custom theme support](https://github.com/github/copilot-cli/issues/1504)** 📌 23 👍 | 8 comments
   Users want to create and share custom themes via JSON files. The `/theme` command currently only offers built-in options. High engagement suggests theming is a priority for personalizing the CLI experience.

2. **[#1697 — Session forking for parallel conversations](https://github.com/github/copilot-cli/issues/1697)** 📌 25 👍 | 3 comments
   The most-upvoted open feature request: branch a conversation into parallel sessions while preserving shared context. This addresses a common workflow bottleneck where developers hit natural junctions requiring split focus.

3. **[#4328 — Ctrl+H misinterpreted under WSL2](https://github.com/github/copilot-cli/issues/4328)** 🐛 5 comments
   A platform-specific bug where `ctrl+h` (delete previous character) behaves like `ctrl+w` (delete word) due to `WT_SESSION` leaking from Windows Terminal into WSL2. This is a frustrating day-to-day editing issue for WSL2 users.

4. **[#4370 — MCP initialization fails with FastMCP `-32602` error](https://github.com/github/copilot-cli/issues/4370)** 🐛 1 comment
   New in 1.0.79-1: the CLI sends a `server/discover` request that FastMCP doesn't implement, returning `-32602 Invalid request parameters`. Copilot treats this as fatal rather than gracefully skipping the unsupported method.

5. **[#4361 — Plugin slash-command regression](https://github.com/github/copilot-cli/issues/4361)** 🐛 1 comment
   Invoking plugin skills via slash commands (e.g., `/grill-me`) now fires a doomed `session.commands.invoke` RPC instead of rewriting to natural language as the client previously did. This is a regression affecting desktop app users relying on plugin workflows.

6. **[#4349 — Managed settings policy fetch fails closed](https://github.com/github/copilot-cli/issues/4349)** 🐛 1 comment
   Enterprise validation only accepts `"disable"` for `permissions.disableBypassPermissionsMode`, but their GHE instance returns `"enable"`, blocking ALL local/custom MCP servers. This is a fail-closed bug that breaks entire environments over an enum mismatch.

7. **[#4005 — Copilot billing entity isn't selected](https://github.com/github/copilot-cli/issues/4005)** 🐛 4 comments | 3 👍
   Enterprise users cannot save memories with the error "Copilot billing entity isn't selected," even though everything else works. Regression from v1.0.65, unresolved for over a month.

8. **[#4202 — Built-in view tool reports "Path does not exist"](https://github.com/github/copilot-cli/issues/4202)** 🐛 4 comments
   Since v1.0.72, the `view` tool fails on existing files, while v1.0.71 succeeds. The issue includes a controlled repro, which should help maintainers isolate the regression.

9. **[#4026 — Copilot CLI crashes repeatedly on Windows](https://github.com/github/copilot-cli/issues/4026)** 🐛 1 comment
   Frequent, unpredictable crashes on native Windows since May 2026, unresolved across at least four versions (v1.0.15 through v1.0.53+). This is a long-standing stability concern for Windows users.

10. **[#4196 — BYOK completions fail with reasoning_content in streaming deltas](https://github.com/github/copilot-cli/issues/4196)** 🐛 2 comments
    BYOK providers that emit `reasoning_content` in streaming chat completion deltas cause the CLI to report transient API errors and retry 5 times before giving up. This limits BYOK provider compatibility.

## Key PR Progress

*No meaningful community pull requests were merged or updated in the last 24 hours.* The only two PRs in the activity window are:

1. **[#4355 — "Merge"](https://github.com/github/copilot-cli/pull/4355)** (OPEN)
   No description provided; appears to be a placeholder without substantive content.

2. **[#4366 — Security findings resolution for copilot-cli](https://github.com/github/copilot-cli/pull/4366)** (OPEN)
   Automated bot PR resolving a "Fundamentals" security finding for the Vault app in `ci, production` environments. Contains placeholder `<UPDATE_ME>` values that require human review.

## Feature Request Trends

- **Theming and customization** (#1504): Users want shareable custom themes, not just fixed presets. Currently the second-most-upvoted open feature request.
- **Session management** (#1697, #2019, #1947): Three distinct requests converge on session flexibility — forking (#1697), deletion commands (#2019), and cloud syncing for cross-device continuity (#1947). This is the most active feature area.
- **Context and token visibility** (#2532, #4174): Repeated asks for persistent token usage indicators and exposure of token/context usage in protocol messages — developers want cost and consumption awareness.
- **Plugin auto-updates** (#1709): Highly requested (29 👍) but closed; users want automated plugin update mechanisms instead of manual, individual updates.

## Developer Pain Points

- **Windows/WSL2 stability and input handling**: Crashes (#4026) and keyboard misinterpretation (#4328, #4267) across Windows and WSL2 environments remain unresolved, with some issues dating back months.
- **MCP and tooling regressions**: Recent releases introduced new failures — FastMCP incompatibility (#4370), plugin slash-command breakage (#4361), and view-tool failures (#4202) — suggesting regression-testing gaps.
- **Enterprise configuration friction**: Management policy validation failures (#4349) and billing entity selection issues (#4005) are blocking enterprise users from core features like MCP servers and memory persistence.
- **Silent configuration changes**: The latest release's breaking rename of `allowDevToolCaches` includes a silent fallback that may silently weaken security posture for users with existing opt-outs.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-08-05

## 1. Today's Highlights

A high-priority reliability bug (#2586) was filed and quickly closed, reporting severe agent degradation at ~500K tokens of context—repetitive action loops, instruction drift, and no escalation. Meanwhile, two long-standing feature requests (Memory System #1283 and Remote Control #1282) continue to gather community attention, with PR momentum behind ACP protocol enhancements (model discovery, permission mode switching) and shell timeout fixes. No new releases were published in the last 24 hours.

## 2. Releases

No new versions were released in the last 24 hours. The latest known version remains v0.31.1 (referenced in issue #2584).

## 3. Hot Issues

**#2586 – Agent reliability degrades at high context fill (~500K tokens)** [CLOSED]  
Author: GrokBuildMJW | Created: 2026-08-05 | Comments: 1 | [Link](https://github.com/MoonshotAI/kimi-cli/issues/2586)  
A critical reliability report: across multiple long-running agentic sessions, the agent began repeating action loops, losing instruction adherence, and failing to escalate errors once context fill exceeded roughly 500K tokens. The issue was closed with only one comment—likely a fast-track response or duplicate—but this is a **major signal** for anyone running long, multi-step automation. If you depend on Kimi for orchestration, watch for updates on context compaction or token limits.

**#1283 – Feature Request: Memory System – Persistent context across sessions** [OPEN]  
Author: CatKang | Created: 2026-02-27 | Updated: 2026-08-04 | Comments: 17 | 👍: 0 | [Link](https://github.com/MoonshotAI/kimi-cli/issues/1283)  
A highly requested feature for automatic (AI-managed) and manual (user-defined) memory. Persistent context would let Kimi remember project patterns and user preferences across sessions. 17 comments indicate strong community interest, though the 0 👍 suggests the issue may predate the emoji reaction rollout. This remains one of the **top feature demands** for production workflows.

**#1282 – Feature Request: Remote Control – Continue sessions from any device** [OPEN]  
Author: CatKang | Created: 2026-02-27 | Updated: 2026-08-04 | Comments: 12 | 👍: 24 | [Link](https://github.com/MoonshotAI/kimi-cli/issues/1282)  
24 👍 reflects clear demand for the ability to resume local CLI sessions from a phone or browser. This is a workflow-continuity feature that would significantly boost adoption among developers who switch contexts frequently. One of the most upvoted open feature requests.

**#2587 – [bug] kimi cli will exit abnormally when advancing the session normally** [OPEN]  
Author: Sdongmaker | Created: 2026-08-05 | Comments: 0 | [Link](https://github.com/MoonshotAI/kimi-cli/issues/2587)  
A fresh bug report (v0.29.2, K3 high model, Windows 11): the CLI exits unexpectedly during normal session progression. No comments yet—likely a crash or panic that needs maintainer triage. Windows-specific instability is a recurring theme in recent reports.

**#2584 – Bug: Thai (and other IME-based) characters duplicated when typing on Windows** [OPEN]  
Author: mgprona | Created: 2026-08-04 | Comments: 0 | [Link](https://github.com/MoonshotAI/kimi-cli/issues/2584)  
A Windows 11 + IME input bug causing duplicate characters in the prompt. This is a **localization and input-method pain point** that affects non-Latin script users. Low comment count, but the issue is clear and reproducible—likely a pty/input handling issue.

**#2583 – feat(acp): advertise available models and support mid-session model switching** [OPEN]  
Author: tizerluo | Created: 2026-08-04 | Comments: 0 | [Link](https://github.com/MoonshotAI/kimi-cli/issues/2583)  
Requests that the `kimi acp` protocol expose the available model list and support `current_model_update` events. Without this, ACP clients (e.g., Happy Coder mobile app, Zed) cannot discover or switch models mid-session. **Directly tied to the ACP PR activity** below—signals growing ecosystem demand.

## 4. Key PR Progress

**#2200 – fix(shell): adapt timeouts for long commands** [OPEN]  
Author: he-yufeng | Created: 2026-05-08 | Updated: 2026-08-04 | [Link](https://github.com/MoonshotAI/kimi-cli/pull/2200)  
Automatically extends shell timeout for known-slow commands (git submodule cleanup, clone/fetch, package installs, builds) while keeping the default 60s for normal commands. **Directly addresses a class of flaky-failure bugs** in CI and long build pipelines.

**#2364 – feat(acp): support permission mode switching** [OPEN]  
Author: huntharo | Created: 2026-05-24 | Updated: 2026-08-04 | [Link](https://github.com/MoonshotAI/kimi-cli/pull/2364)  
Adds protocol-level ACP permission mode switching for Kimi sessions (stacks on #2363). Lets clients switch between permission modes mid-session without reinitializing. **Maturation of the ACP protocol**—aligns with #2583's model-switching request.

**#2585 – feat(cli): set AI_AGENT for subprocesses** [OPEN]  
Author: complynx | Created: 2026-08-04 | [Link](https://github.com/MoonshotAI/kimi-cli/pull/2585)  
Exposes `AI_AGENT=kimi` to subprocesses via both pip/uv and standalone binary entrypoints, while preserving explicit wrapper-supplied values. **A subtle but ecosystem-critical change**—lets downstream tooling detect and adapt to Kimi-driven automation.

## 5. Feature Request Trends

- **Memory & Persistence (#1283):** The most-discussed feature (17 comments) — users want Kimi to remember context across sessions, both auto-managed and user-defined.
- **Remote/Cross-Device Continuity (#1282):** 24 👍 — strong demand for resuming sessions from browser or mobile.
- **ACP Ecosystem Growth (#2583, #2364):** Multiple requests and PRs to make Kimi a better ACP citizen: model discovery, mid-session model switching, permission mode control.
- **Context/Reliability at Scale (#2586):** The 500K-token degradation report hints at a broader need for better context compaction, explicit token-limit signaling, and graceful degradation strategies.

## 6. Developer Pain Points

- **Long-Session Reliability:** The #2586 report (high-context degradation, action loops, no escalation) is the most serious pain point — long-running agents become untrustworthy, and users have no documented threshold to rely on.
- **Windows-Specific Instability:** #2587 (abnormal session exit) and #2584 (IME character duplication) indicate ongoing Windows/pty issues that frustrate a notable chunk of the community.
- **Shell Command Timeouts:** #2200 implicitly acknowledges that default 60s timeouts cause spurious failures on slow commands (git clone, installs) — a recurring source of false-negative CI results.
- **Lack of Protocol Interoperability:** #2583 highlights that ACP clients can't discover models or switch mid-session — a gap that limits Kimi's adoption in multi-tool workflows.
- **No Persistent Context:** Without memory systems (#1283), users must re-explain project context every session — a productivity tax that grows with project complexity.

---

*Digest generated from public GitHub data on 2026-08-05. All links point to the [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) repository.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-05

## Today's Highlights
OpenCode released v1.18.13 with PR review context improvements in the TUI and a batch of right-to-left layout fixes for the desktop app. The community continues to wrestle with DeepSeek V4 Flash issues on the Go subscription—including model misrouting, China-host opt-ins, and 403 errors—while maintainers merged a wave of AI-layer fixes around tool-call finish semantics across Anthropic, Gemini, and OpenAI-compatible providers. A notable performance PR also claims up to a 75.5% reduction in initial renderer memory.

## Releases
**v1.18.13** — [Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.13)
- **TUI:** GitHub pull request reviews now include PR number and URL in context.
- **Desktop:** Fixed multiple right-to-left layout issues across tabs, drawers, resizing, and titlebar; corrected directional icons and shared RTL behaviors.

## Hot Issues
1. **[Go plan usage/balance API](https://github.com/anomalyco/opencode/issues/16017)** — 126 👍, 29 comments. Long-running feature request (5 months) asking for a public endpoint exposing plan usage rolling/weekly/monthly windows. High visibility and strong demand from users who want programmatic quota tracking.

2. **[DeepSeek V4 Flash China opt-in (Go)](https://github.com/anomalyco/opencode/issues/39845)** — 22 👍. Mid-session failures demanding enablement of China-hosted models for Go plan users. Suggests a regional routing change or policy issue affecting many subscribers; remains open.

3. **[deepseek-v4-flash returns 403/hangs on Go](https://github.com/anomalyco/opencode/issues/40485)** — Conflicting with #39845: same model fails with 403 on Go plan while v4-pro and MiniMax M3 work. Likely an account-tier or routing bug rather than a client-side config issue.

4. **[deepseek-v4-flash serves wrong model](https://github.com/anomalyco/opencode/issues/40409)** — Reports that `deepseek-v4-flash` is actually serving V3.2 with a knowledge cutoff in 2025, not V4 Flash 0731. Billing/quality mismatch flagged as High severity.

5. **[Go service incomplete SSE stream](https://github.com/anomalyco/opencode/issues/40171)** — `/v1/responses` emits incomplete SSE events, missing `output_item.added` and `content_part.added`, which breaks Codex-style clients. Impacts API compatibility for tooling built on the Responses protocol.

6. **[`opencode run` intermittent init hang](https://github.com/anomalyco/opencode/issues/38723)** — ~56% failure rate with zero stdout, no errors, and no session creation; only external timeout works. Serious reliability concern for headless CI usage of the same model.

7. **[Auto model selection by task type](https://github.com/anomalyco/opencode/issues/8456)** — 44 👍. Recurring ask to automatically route different task types (e.g., chat vs. autocomplete vs. agent) to different models, similar to leading competitor tools. Gaining attention with 10 comments.

8. **[Respect `disable-model-invocation` in SKILL.md](https://github.com/anomalyco/opencode/issues/34498)** — 48 👍. Request for frontmatter support to prevent models from invoking themselves recursively in skills; Claude Code/Cursor parity feature. Community strongly supports with 9 comments.

9. **[Desktop app provider/model/MCP load failure](https://github.com/anomalyco/opencode/issues/40516)** — Regression from v1.18.5–v1.18.13; ~80% of startup attempts fail to load providers/models/MCPs for some orgs. Downgrade to v1.18.4 is the only workaround.

10. **[Web interface no auto-refresh](https://github.com/anomalyco/opencode/issues/40502)** — Conversations don't update in real-time; users must manually refresh. Likely pain point for team coordination, not just solo usage.

## Key PR Progress
1. **[feat(tui): sidebar history and scroll-to-message](https://github.com/anomalyco/opencode/pull/33127)** — Adds a History sidebar panel listing user messages; clicking scrolls the session view to that message. Implements long-requested session navigation (closes #32165).

2. **[feat(session): Gemini image generation](https://github.com/anomalyco/opencode/pull/40126)** — Passes Gemini-generated inline images through the session pipeline (previously dropped). Enables image outputs for Gemini users.

3. **[fix(core): unify patch path resolution](https://github.com/anomalyco/opencode/pull/40558)** — Uses shared `LocationMutation` path-planning for patch source and move targets, making authorization and canonical paths behave like edit/write—including symlink and missing-ancestor handling.

4. **[fix(opencode): include cache writes in ACP usage](https://github.com/anomalyco/opencode/pull/40450)** — Reports cache-write tokens in ACP context usage and aligns token calculation across ACP paths; adds regression tests.

5. **[fix(core): retire legacy provider aliases](https://github.com/anomalyco/opencode/pull/40487)** — Removes Azure Cognitive Services and Google Vertex Anthropic standalone registrations; migrates legacy IDs in provider blocks, models, agents, commands, and policies. Part of provider simplification.

6. **[fix(llm): parse `cache_creation_tokens`](https://github.com/anomalyco/opencode/pull/40541)** — Handles `prompt_tokens_details.cache_creation_tokens` on the OpenAI-compatible path so cache-write tokens are counted correctly behind proxies like LiteLLM.

7. **[fix(opencode): xAI OAuth device-only](https://github.com/anomalyco/opencode/pull/40537)** — Replaces xAI loopback OAuth with RFC 8628 device flow; removes PKCE/CORS/callback code; works locally and remotely with a single SuperGrok subscription method.

8. **[fix(core): avoid eager directory snapshots](https://github.com/anomalyco/opencode/pull/40552)** — Delays filesystem search directory snapshot rebuilding until a directory or mixed search is actually requested. Large repos pay materialization cost only when needed.

9. **[fix(ai): restore Responses tool input semantics](https://github.com/anomalyco/opencode/pull/40553)** — Treats malformed function arguments as recoverable `tool-calls` finish boundary while keeping `tool-input-error` as the precise non-executable outcome. Plus companion PRs for Gemini (#40546) and Anthropic (#40547) finish reason derivation.

10. **[test(app): harden flaky e2e synchronization](https://github.com/anomalyco/opencode/pull/40556)** — Replaces timing-sensitive assertions with observable Playwright readiness checks and FIFO sentinel verification for SSE heartbeats; adds official test stabilization.

## Feature Request Trends
- **Programmatic plan metering** — Persistent demand for usage/balance APIs (weekly/monthly windows) to support automation and budget controls.
- **Task-based model routing** — Users want automatic model selection per task type (chat, agent, autocomplete) to optimize cost/latency/quality tradeoffs.
- **Skill/agent control** — Requests to respect `disable-model-invocation` frontmatter in SKILL.md to prevent recursive self-calls and improve prompt safety, matching Claude Code/Cursor behavior.
- **Session and tab productivity** — Sidebar history, scroll-to-message, configurable exit confirmations, and streamlined tab shortcuts (Slack/Mattermost convention) show a focus on TUI/desktop workflow ergonomics.
- **Provider abstraction** — OmniRoute-style simplified provider setup and legacy alias cleanup indicate a desire for simpler multi-provider management.

## Developer Pain Points
- **DeepSeek V4 Flash reliability** — Multiple open issues (China opt-in, 403 errors, wrong model served, hangs) with high community impact; the reported model mismatch (V3.2 served as V4 Flash) is a particular trust and billing concern.
- **Desktop regression in v1.18.5–v1.18.13** — Provider/model/MCP startup failures affecting entire organizations—the most cited reason to downgrade.
- **Headless mode flakiness** — `opencode run` intermittent hangs (~56% failure rate) and incomplete SSE streams break CI/CD and third-party client reliability.
- **Cross-terminal copy/paste** — Confirmed issues with copy-on-select in tmux/Kitty, indicating TUI clipboard handling is still a rough edge for power users.
- **RTL layout issues** — While v1.18.13 fixed many, the need for a dedicated RTL development skill (PR #40543) suggests this remains an ongoing concern for international teams.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-05

## Today's Highlights
The Pi community is experiencing a surge of Windows-related issues and enterprise Copilot compaction breakage, with multiple reports of 421 Misdirected Request errors on GitHub Enterprise seats. Key fixes are landing for OAuth security (response body leakage), Anthropic schema handling (`$defs` preservation), and new provider integrations (Cortecs, LLM Gateway). The v2 server architecture work (SQLite session backend, lane-aware storage) continues to mature with substantial refactoring.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#6768: Compaction using Copilot Enterprise not possible](https://earendil-works/pi Issue #6768)** — [CLOSED, 19 comments, 18 reactions]  
   The most-discussed issue of the week: compaction fails with 421 Misdirected Request errors on both OpenAI and Anthropic models when using Copilot Enterprise licenses. The high comment count and reaction score suggest this is affecting a significant Enterprise user base.

2. **[#7547: How do you use Pi on Windows? What issues are you seeing?](https://earendil-works/pi Issue #7547)** — [OPEN, 13 comments]  
   A community-driven Windows triage effort. There are too many ways to run Pi on Windows, and maintainers need help focusing bug-fixing and documentation efforts. This is a signal that Windows is becoming a first-class platform concern.

3. **[#7161: anthropic-messages never sends x-client-request-id](https://earendil-works/pi Issue #7161)** — [CLOSED, 10 comments]  
   Gateway session affinity is broken for Anthropic paths — proxy users balancing multiple accounts see requests scattered across sessions. Important for anyone running Pi behind a routing proxy.

4. **[#7465: Add payload size to iTerm2 inline images](https://earendil-works/pi Issue #7465)** — [OPEN, 7 comments]  
   xterm.js 0.9.0 silently rejects OSC 1337 images without a `size` parameter, breaking Pi image rendering in modern terminals. Small fix, big usability impact for terminal image workflows.

5. **[#7413: Compaction fails on GHE.com with "unknown stamp" error](https://earendil-works/pi Issue #7413)** — [OPEN, 6 comments]  
   Another Enterprise compaction failure, but with a distinct error signature (`unknown stamp "prod-cus-01"` vs the 421 errors above). Two separate Enterprise auth bugs in compaction is concerning.

6. **[#7508: OAuth refresh has no request timeout — freezes session ~5 minutes](https://earendil-works/pi Issue #7508)** — [CLOSED, 5 comments]  
   A stalled token refresh holds the cross-process credential-store lock, completely freezing the session. Flaky networks and corporate proxies make this painful — a solid catch by the reporter.

7. **[#7574: Fullscreen mode: Home/End/PageUp/PageDown consumed by transcript](https://earendil-works/pi Issue #7574)** — [CLOSED, 4 comments]  
   Editor keybindings never fire in fullscreen mode because the transcript viewport swallows navigation keys. Breaks documented defaults for `tui.editor.cursorLineStart` / `cursorLineEnd`.

8. **[#7528: TUI crashes when custom dialog line exceeds terminal width](https://earendil-works/pi Issue #7528)** — [CLOSED, 4 comments]  
   An uncaught exception kills the entire process instead of truncating — a robustness bug in `ctx.ui.custom` and `ui.select`. The fix is likely a defensive `truncate` call, but the crash-on-render behavior is the real problem.

9. **[#7395: JSON mode serializes cumulative assistant state on every delta](https://earendil-works/pi Issue #7395)** — [OPEN, 3 comments]  
   Each `message_update` in `--mode json` re-serializes the full accumulated message plus the incremental event — quadratic output growth. This is a performance issue for programmatic consumers of Pi's JSON mode.

10. **[#7616: Chat scroll jumps when tool blocks grow above viewport](https://earendil-works/pi Issue #7616)** — [CLOSED, 2 comments]  
    Differential renderer falls back to full clear when tool blocks exceed viewport height, causing jarring scroll jumps. Frustrating UX during long agent runs with large output blocks.

## Key PR Progress

1. **[#7632: fix: retry transient management HTTP requests](https://earendil-works/pi PR #7632)** — [OPEN]  
   Retries idempotent pi.dev / GitHub releases / tools management requests. Fixes #6675 and related flaky-network issues. Deliberately avoids per-attempt timeouts to prevent new latency problems.

2. **[#7602: feat(coding-agent): configurable summarization models](https://earendil-works/pi PR #7602)** — [OPEN]  
   Adds configurable models and thinking levels for compaction and branch summaries, with context-window limit error handling. Addresses the long-standing pain point that compaction reuses the session's reasoning model unconditionally. Closes #7553.

3. **[#7624: feat(coding-agent): render Mermaid diagrams](https://earendil-works/pi PR #7624)** — [OPEN]  
   Mermaid rendering in markdown output, tracked from issue #7623. Relevant for developers who rely on ASCII art → diagram workflows in chat.

4. **[#7612: fix(tui): add size param to iTerm2 image encoder](https://earendil-works/pi PR #7612)** — [OPEN]  
   Fixes xterm.js image addon compatibility by including decoded byte count in OSC 1337 sequences. Directly addresses the rendering breakage from #7465.

5. **[#7619: feat(coding-agent): resume failed turn by selecting it in /tree](https://earendil-works/pi PR #7619)** — [OPEN]  
   Selecting an errored assistant entry in the turn tree retries it instead of dead-ending. Error entries remain in history, and retried responses continue under the same node. Closes #7609.

6. **[#7571: feat(ai): add built-in Cortecs provider support](https://earendil-works/pi PR #7571)** — [CLOSED]  
   European AI provider/router (OpenRouter-style) as a built-in provider, backed by models.dev. A sign of Pi's plugin ecosystem attracting regional routing providers.

7. **[#7610: feat(ai): add LLM Gateway and LLM Gateway DevPass providers](https://earendil-works/pi PR #7610)** — [OPEN]  
   Adds LLM Gateway (another OpenRouter-style router) as built-in `openai-completions` providers. Re-submission of #7480, which was auto-closed and lost its diff.

8. **[#7604: fix(ai): keep $defs in non-strict Anthropic tool schemas](https://earendil-works/pi PR #7604)** — [CLOSED]  
   The non-strict schema projection was dropping `$defs` while `properties` contained `$ref` pointers into it — sending Anthropic dangling references. Likely a silent failure mode for zod-derived schemas with shared shapes.

9. **[#7605: fix(ai): keep response bodies out of OAuth error messages](https://earendil-works/pi PR #7605)** — [CLOSED]  
   Security fix: token-endpoint responses carrying access/refresh tokens (or echoed request params) were being embedded in error messages that propagate to logs, telemetry, and user-facing dialogs.

10. **[#7606: fix(ai): let an explicit chatgpt-account-id header override JWT extraction](https://earendil-works/pi PR #7606)** — [CLOSED]  
    Fails gracefully for ChatGPT tokens that lack the `chatgpt_account_id` JWT claim — the OAuth flow already stores `credential.accountId`, so explicit override is now possible.

## Feature Request Trends

- **Compaction control**: Multiple issues (#7553, #7602) ask for independent model/thinking-level configuration for compaction vs. normal turns. Enterprise users are hitting auth-specific compaction bugs that normal chat doesn't trigger.
- **Terminal image and markdown rendering**: The iTerm2 size param fix (#7465, #7612) and Mermaid rendering (#7623, #7624) point toward richer inline visualizations in the TUI.
- **Windows as a first-class platform**: #7547 is an explicit call for Windows triage; related issues include path-pattern bugs (#6817), skill loader RangeErrors (#7427), and sink-thread concerns.
- **RPC/embedded client expansion**: #7590 (auth via RPC), #7621 (argument completions via RPC), and #7599 (RPC over sockets) all push toward making Pi scriptable and embeddable outside the TUI.
- **More providers**: Cortecs (#7571), LLM Gateway (#7610), Qwen Token Plan Individual (#7631) — the community is actively contributing routing/proxy providers, indicating enterprise adoption.

## Developer Pain Points

1. **Enterprise Copilot compaction is broken in multiple ways** — 421 Misdirected Request (#6768, #7579), unknown stamp (#7413), and base URL resolution issues cluster around compaction failing on Copilot Enterprise seats while normal turns work. This is the week's loudest theme.
2. **Windows path handling remains inconsistent** — The `find` tool fails on `src/**/*.ts` patterns (#6817), the ignore library throws RangeErrors on Windows skill directories (#7427), and the community is self-organizing a triage thread (#7547) because maintainers don't have enough Windows test coverage.
3. **OAuth and credential-store fragility** — No timeout on token refresh (#7508) froze sessions for ~5 minutes; the OAuth error body leakage (#7605) is a security concern; `chatgpt-account-id` JWT extraction is unreliable (#7606).
4. **TUI robustness on edge cases** — The fullscreen keybinding consumption (#7574) and the crash-on-wide-line (#7528) both demonstrate the TUI's sensitivity to unusual terminal widths and layouts.
5. **JSON mode performance regressions** — The quadratic serialization in `--mode json` (#7395) is a performance landmine for anyone building tooling on Pi's programmatic output.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-05

## Today's Highlights
Two preview releases shipped today with alpha diagnostics for the browser extension and documentation for headless Goal workflows. The community is actively reporting ACP/IDE integration gaps (task lists, usage indicators, session titles not rendering in JetBrains), plus several reliability bugs around file-tool cancellation, MCP SSE hangs, and daemon memory limits. A significant cluster of PRs from the autofix/takeover pipeline is converging on review-pipeline performance, hook security hardening, and memory-bound observability.

## Releases
- **v0.21.6-preview.0** — Includes `feat(browser-ext): add alpha readiness diagnostics` ([#6739](https://github.com/QwenLM/qwen-code/pull/6739)) and docs for headless Goal workflows. → [Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.6-preview.0)
- **v0.21.5-nightly.20260805.32e274157** — Same browser-ext diagnostics and Goal workflow docs as the preview. → [Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.5-nightly.20260805.32e274157)

## Hot Issues
1. **Deterministic tool-execution boundaries for a trustworthy agent runtime** ([#8102](https://github.com/QwenLM/qwen-code/issues/8102)) — 17 comments. Proposes moving the LLM outside the trust boundary with a runtime that constrains, authorizes, and observes model actions. Reflects growing demand for security-hardened agent behavior; P3 but high discussion activity.

2. **Severe screen flickering in tmux** ([#8519](https://github.com/QwenLM/qwen-code/issues/8519)) — 11 comments. "Flash screen every 1–2 seconds" in tmux on Linux. High-friction UX bug; closed pending triage, likely a rendering/alternate-screen issue.

3. **Bound multi-workspace daemon resource usage** ([#8051](https://github.com/QwenLM/qwen-code/issues/8051)) — 9 comments. Tracking issue for `qwen serve` resource ceilings — count-only limits don't bound bytes (request bodies, WebSocket buffers). Overlaps with the memory-partition PRs moving to review.

4. **Provider warning sanitizer truncates ports, leaks passwords** ([#8136](https://github.com/QwenLM/qwen-code/issues/8136)) — 6 comments. Credential leak via `sanitizeProviderWarning` when URLs contain `@` with a port. Security-relevant, deserves a fix.

5. **Cancelled file tools still mutate the filesystem** ([#8493](https://github.com/QwenLM/qwen-code/issues/8493)) — 5 comments. `write_file`/`edit` continue after abort because preparation is async before the final write. Can corrupt user state mid-cancel.

6. **`qwen mcp list` hangs indefinitely on SSE servers that never send `endpoint`** ([#8550](https://github.com/QwenLM/qwen-code/issues/8550)) — 4 comments. No timeout path for SSE MCP handshake; marked ready-for-agent, likely to be auto-fixed.

7. **`--resume` reconstructs the dangling-unsigned-thought hazard fixed by #8260** ([#8535](https://github.com/QwenLM/qwen-code/issues/8535)) — 3 comments. The live-session fix never touches the resume path; replay can reproduce the tool-call hazard.

8. **ACP: task list not rendered in JetBrains** ([#8544](https://github.com/QwenLM/qwen-code/issues/8544)) — 3 comments. Claude Code/Codex show live task updates in JetBrains; Qwen doesn't. Part of a cluster of ACP-parity gaps.

9. **Copy-response button does nothing in Qwen Code Desktop 0.0.5 (Windows)** ([#8538](https://github.com/QwenLM/qwen-code/issues/8538)) — 3 comments. Terminal-app clipboard bug; reproduced across restarts and reboots. Influences desktop adoption.

10. **Wrapped timeout errors drop original code → never auto-retried** ([#8527](https://github.com/QwenLM/qwen-code/issues/8527)) — 3 comments. "Request timeout after 63s" surfaces instead of hitting transport-retry, breaking resilience for OpenAI-compatible endpoints.

11. **Daemon authorizes each ACP child 50% of host memory, never divided** ([#8182](https://github.com/QwenLM/qwen-code/issues/8182)) — 3 comments. Memory ceiling derived from host, not child count; matches the partition model in PR #8423.

**Other notable:** size-triggered microcompaction repeatedly invalidating prompt cache ([#8452](https://github.com/QwenLM/qwen-code/issues/8452)), DingTalk interactive cards stripped by channel API ([#8515](https://github.com/QwenLM/qwen-code/issues/8515)), "Built-in Provider Update" prompt repeating after custom models preserved ([#8504](https://github.com/QwenLM/qwen-code/issues/8504)).

## Key PR Progress
1. **[#8423](https://github.com/QwenLM/qwen-code/pull/8423) — `feat(serve): observe daemon and child memory against real denominators`** (doudouOUC). Absorbed #8462 and #8508; aggregates child RSS and models—without applying—a child-heap partition model. Directly addresses issues #8051 and #8182.

2. **[#8482](https://github.com/QwenLM/qwen-code/pull/8482) — `fix(core): a never-delivered MCP call is a first delivery, not a replay`** (wenshao). Red-on-main since replay-safety gate merged; bisected to `0cb109f513`; corrects the replay classification boundary.

3. **[#8396](https://github.com/QwenLM/qwen-code/pull/8396) — `fix(hooks): close four trust-boundary holes in hook execution`** (wenshao). HTTP hooks stop following redirects (SSRF/cache-bypass), plus three other repository-controlled config vs. code-execution egress fixes. Security-critical.

4. **[#8498](https://github.com/QwenLM/qwen-code/pull/8498) — `perf(review): retire dry chunks and pipeline verification in the reverse audit`** (wenshao). Stacks on #8468 (reverse-audit budget gate); large-PR reviews hit the 5-round cap. Two measurements target the reverse-audit loop as the bottleneck.

5. **[#8443](https://github.com/QwenLM/qwen-code/pull/8443) — `fix(cli): allow clicking to expand/collapse thought while streaming`** (chiga0). Removes the disabled-state handler only present when fully complete; interactive improvement for long "thinking" phases.

6. **[#8459](https://github.com/QwenLM/qwen-code/pull/8459) — `fix(review): admit evidence images by content, not by name — magic-byte sniffing`** (wenshao). Four signatures (PNG, JPEG, GIF, RIFF+WEBP); rejects RIFF alone; validates first-byte magic instead of extension. Fixes forged-evidence risk.

7. **[#8332](https://github.com/QwenLM/qwen-code/pull/8332) — `feat(cli): add audio bridge for attachments`** (DragonnZhang). Transcribes audio through a batch voice model when the primary model lacks audio support; explicitly marks output as untrusted machine transcription. Broadens multimodal coverage.

8. **[#8525](https://github.com/QwenLM/qwen-code/pull/8525) — `fix(core): resolve Qwen 3.8 reasoning budget conflicts`** (DragonnZhang). Prevents DashScope Qwen 3.8 from receiving both `reasoning_effort` and `thinking_budget`; applies existing `extra_body` precedence.

9. **[#8442](https://github.com/QwenLM/qwen-code/pull/8442) — `fix: add onCompromised handlers to proper-lockfile calls to prevent daemon crash`** (wenshao). Four call sites now log-and-warn instead of throwing when lock loss occurs; protects daemon uptime.

10. **[#8474](https://github.com/QwenLM/qwen-code/pull/8474) — `fix(ci): clean review worktrees after cancellation`** (yiliang114). Always-run cleanup plus stale worktree/branch removal on self-hosted runners; prevents cancelled reviews from blocking CI.

**Also moving:** DingTalk interactive-card config management ([#8517](https://github.com/QwenLM/qwen-code/pull/8517)), backward transcript page bounding ([#8553](https://github.com/QwenLM/qwen-code/pull/8553)), Maven multi-module verification in `/review` ([#8394](https://github.com/QwenLM/qwen-code/pull/8394)).

## Feature Request Trends
- **ACP/IDE parity with Claude Code/Codex** dominates: reasoning-effort tiers ([#8514](https://github.com/QwenLM/qwen-code/issues/8514)), usage-update frames ([#8513](https://github.com/QwenLM/qwen-code/issues/8513)), task lists ([#8544](https://github.com/QwenLM/qwen-code/issues/8544)), and standard session-info frames ([#8546](https://github.com/QwenLM/qwen-code/issues/8546)). JetBrains users expect full protocol parity.
- **Trustworthy agent runtime** ([#8102](https://github.com/QwenLM/qwen-code/issues/8102)): deterministic boundaries, authorization, and observation of model actions — a P3 but heavily discussed direction.
- **Extension hook compatibility** ([#8539](https://github.com/QwenLM/qwen-code/issues/8539)): Claude extension hooks not executed; community wants hook parity.
- **Headless Goal workflows**: documented in today's release, with proposal/acceptance channel friction reported in [#8458](https://github.com/QwenLM/qwen-code/issues/8458) (evidence-directory truncation locks the channel).
- **Korean docs** ([#8551](https://github.com/QwenLM/qwen-code/issues/8551)): straightforward community-driven localization request (3 comments in hours).

## Developer Pain Points
- **Cancellation/abort handling is unreliable**: file tools mutate after cancel ([#8493](https://github.com/QwenLM/qwen-code/issues/8493)), aborted turns vanish from transcript ([#8356](https://github.com/QwenLM/qwen-code/issues/8356)), resume reconstructs hazards ([#8535](https://github.com/QwenLM/qwen-code/issues/8535)). Users report real project damage from failed edits ([#2460](https://github.com/QwenLM/qwen-code/issues/2460)).
- **MCP integration lacks timeouts**: SSE servers that never send `endpoint` hang `qwen mcp list` indefinitely ([#8550](https://github.com/QwenLM/qwen-code/issues/8550)).
- **Memory and resource limits are coarsely implemented**: per-child 50% host memory ceilings ([#8182](https://github.com/QwenLM/qwen-code/issues/8182)) and count-only daemon bounds ([#8051](https://github.com/QwenLM/qwen-code/issues/8051)) both need byte-level accounting.
- **Prompt-cache invalidation**: size-triggered microcompaction rewrites cached prefixes and defeats provider caching ([#8452](https://github.com/QwenLM/qwen-code/issues/8452), [#8463](https://github.com/QwenLM/qwen-code/issues/8463)); recurring and costly for long sessions.
- **Timeout errors lose the retry signal**: wrapped errors drop original codes, breaking auto-retry ([#8527](https://github.com/QwenLM/qwen-code/issues/8527)).
- **UI/terminal bugs degrade day-to-day trust**: tmux flicker ([#8519](https://github.com/QwenLM/qwen-code/issues/8519)), dead copy button in Desktop ([#8538](https://github.com/QwenLM/qwen-code/issues/8538)).

---

*Digest compiled from QwenLM/qwen-code activity on 2026-08-05. All stats reflect public GitHub data as of retrieval time.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-05

## Today's Highlights

The DeepSeek TUI (Codewhale) community is in the middle of a significant build-out phase: maintainer Hmbown has opened a coordinated set of four performance-focused epic issues (#5245–#5249) targeting the v0.9.5 cycle, all aimed at dismantling the monolithic `codewhale-tui` crate's dominating rebuild costs. Meanwhile, the v0.9.4 release train (PR #5135) continues to progress with 77 commits, and a cluster of important bug reports emerged around context window handling (#5239, #5244), API key storage (#5250), and a pernicious pricing endpoint failure (#5241).

---

## Releases

No new releases in the last 24 hours. The v0.9.4 release train (PR #5135) is active and 77 commits ahead of `main`, incorporating all prior release candidates since 2026-08-01.

---

## Hot Issues (10 Notable)

### 1. [#4978 — Anthropic API 400 errors from OpenModel provider](https://github.com/Hmbown/CodeWhale/issues/4978)
**Open, 6 comments** — Users hitting repeated `HTTP 400 invalid_request_error: 'type' must be in ["enabled", "disabled", "auto"]` with Anthropic-compatible providers see intermittent failures with no consistent trigger. This blocks a meaningful subset of users relying on third-party Anthropic-compatible endpoints and remains unresolved after nearly a week.

### 2. [#4991 — Compilation times and the TUI crate monolith](https://github.com/Hmbown/CodeWhale/issues/4991)
**Open, 4 comments** — A community member voices what many contributors feel: the 682K-line `codewhale-tui` crate recompiles as one unit on every change, taxing edit-compile loops. This issue directly seeded the v0.9.5 build-time epic cluster and represents a widely shared contributor frustration.

### 3. [#4955 — Zero-sandbox / `--no-sandbox` mode request](https://github.com/Hmbown/CodeWhale/issues/4955)
**Open, 4 comments, 1 👍** — The kernel-level Seatbelt sandbox breaks basic shell commands for local dev. The request asks for a true no-sandbox escape hatch and paired whitelisting capabilities; the related filesystem allowlist request (#5005) was closed, directing users to this issue.

### 4. [#5209 — File edit tool accepts wrong params and fakes success](https://github.com/Hmbown/CodeWhale/issues/5209)
**Open, 3 comments** — `action=edit` silently accepts incorrect parameter names (e.g., `new_str` instead of `replace`) and returns a false success, forcing users into 3–5x re-edits per location. This is a correctness hazard that erodes trust in the tool's core editing path and deserves urgent triage.

### 5. [#5250 — Only one API key can be saved](https://github.com/Hmbown/CodeWhale/issues/5250)
**Open, 1 comment** — Users of multiple providers (DeepSeek, GLM, etc.) must re-fetch a new key from the provider on every switch. The request is straightforward: store per-provider keys separately rather than overwriting the previous provider's key.

### 6. [#5244 — Unknown model IDs silently degrade to 128K context](https://github.com/Hmbown/CodeWhale/issues/5244)
**Open, 1 comment** — Residual class bug: unknown model IDs fall through to `LEGACY_DEEPSEEK_CONTEXT_WINDOW_TOKENS` (128K) with no surfaced hint, silently compacting 1M-window models. Mitigation landed in 0.9.4, but the fallback should log or surface explicitly.

### 7. [#5241 — Pricing endpoint returns 503 — all sessions unverified](https://github.com/Hmbown/CodeWhale/issues/5241)
**Open, 1 comment** — After upgrading 0.8.67 → 0.9.3, every turn on every provider shows `unpriced_reasons = ["unverified_live_pricing"]`, and the pricing endpoint consistently returns 503. Cost display is broken across the board, affecting post-hoc session auditing for all users on the new version.

### 8. [#5239 — 1M context model compresses at 128K](https://github.com/Hmbown/CodeWhale/issues/5239)
**Open, 1 comment** — Users with 1M-context models report the tool triggers context compression at 128K, defeating the model's capability. This pairs with #5244 as part of the same fallback-related class of bugs.

### 9. [#5243 — OAuth login doesn't adopt freshly minted token](https://github.com/Hmbown/CodeWhale/issues/5243)
**Open, 0 comments** — Live dogfood report: completing an interactive xAI device login still leaves the session without working credentials; the user must go back to the provider-picker and manually select external credentials. The minted token should be adopted automatically.

### 10. [#5005 — Filesystem allowlist for sandbox (CLOSED)](https://github.com/Hmbown/CodeWhale/issues/5005)
**Closed, 2 comments** — Xcode builds need access to `~/Library/Developer/Xcode/DerivedData/` outside the workspace; the `workspace-write` sandbox blocks it. Closing likely routes users to #4955, which remains the umbrella request for flexible sandboxing.

---

## Key PR Progress (10 Notable)

### 1. [#5135 — v0.9.4 release train](https://github.com/Hmbown/CodeWhale/pull/5135)
**Open** — The integration train is 77 commits ahead of `main`, containing 18 train commits plus everything from the 2026-08-01 source candidate. This is the primary integration path for all v0.9.4 features and fixes; watch this PR for release timing.

### 2. [#5242 — Resume interrupted children from checkpoint via followup](https://github.com/Hmbown/CodeWhale/pull/5242)
**Open** — Fixes a dead-letter path where `agents/followup` on an `interrupted_continuable` child preserved the checkpoint but couldn't actually resume. Long tasks (document review, multi-step search) can now be continued mid-way.

### 3. [#5240 — Surface real wait elapsed time in tool content](https://github.com/Hmbown/CodeWhale/pull/5240)
**Open** — The `Bash` wait tool kept `duration_ms` only in metadata invisible to the model; every wait looked identical, biasing models into busy-polling. Exposing real elapsed time lets the model judge whether a long wait is stalled or just running.

### 4. [#5238 — MCP Registry discovery with Registry-first tool selection](https://github.com/Hmbown/CodeWhale/pull/5238)
**Open** — Adds registry-driven tool discovery: before reaching for `exec_shell` or manual implementation, the model consults the public MCP Registry for a matching zero-environment stdio server. This could materially reduce ad-hoc shell usage and improve safety.

### 5. [#5229 — Windows beginner guide in zh-CN](https://github.com/Hmbown/CodeWhale/pull/5229)
**Open** — New `docs/WINDOWS_BEGINNER.zh-CN.md` covering installation, configuration, model switching, modes/permissions, and FAQ, with commands and paths verified on Windows 10. A valuable contribution for the Chinese-speaking Windows community.

### 6. [#5225 — Expose file/search/git/patch/shell tools over ACP](https://github.com/Hmbown/CodeWhale/pull/5225)
**Open** — `session/prompt` previously only streamed text; tool calls were never executed. Adding tool execution over the ACP protocol makes Zed and third-party adapters full agents instead of chat-only bridges.

### 7. [#5133 — Runtime API: persistent goal-loop state and completion controls](https://github.com/Hmbown/CodeWhale/pull/5133)
**Open** — Adds `/v1/threads/{id}/goal` endpoints for reading active goal state and driving lifecycle transitions, giving managed clients the missing goal resource from the v0.9.4 runtime boundary.

### 8. [#5130 — Runtime API: bounded MCP server configuration and lifecycle](https://github.com/Hmbown/CodeWhale/pull/5130)
**Open** — Adds `POST /v1/apps/mcp/servers` plus update/delete routes so clients can manage MCP servers without editing TOML/JSON directly. Complements the read-only inventory already present.

### 9. [#5095 — Re-quote Windows linker arguments containing spaces](https://github.com/Hmbown/CodeWhale/pull/5095)
**Open** — Fixes OpenHarmony SDK builds when installed under a spaced path (e.g., `D:\DevEco Studio\...\native`): `%*` expansion strips rustc's quotes, splitting `--sysroot` on the space.

### 10. [#5234 — Keep alternate scroll off while mouse capture is active](https://github.com/Hmbown/CodeWhale/pull/5234)
**Open** — Fixes mouse-wheel scrolling affecting the composer's input history instead of the transcript when content outgrows the screen; root cause is armed `EnableMouseCapture` combined with xterm alternate-scroll mode.

---

## Feature Request Trends

1. **Sandbox flexibility** — The most persistent request cluster: a true no-sandbox mode for local dev (#4955), filesystem path allowlists for external logs/build artifacts (#5005), all pointing at a more configurable sandbox model rather than a fixed workspace-write policy.

2. **Per-provider API key management** — Users running multiple providers (DeepSeek, GLM, xAI, OpenAI) want separate key storage per provider instead of a single overwriting slot (#5250, plus related OAuth token adoption friction #5243).

3. **Model capability awareness** — The community increasingly expects the tool to respect model-specific capabilities: 1M-context windows should not silently degrade to 128K (#5239, #5244). Users want configuration to match model reality.

4. **Build-time performance** — The maintainer has elevated this to an epic-level concern: four interlocking issues (#5245–#5249) target dependency graph shrinkage, profile splitting, test-binary consolidation, and HEAD-SHA decoupling. This is now a first-class roadmap item.

5. **Agent runtime observability** — Runtime API PRs (#5132→#5133, #5129→#5130) show a trend toward richer remote control: goals, verifier receipts, memory inspection, skill lifecycle, and MCP management over HTTP.

---

## Developer Pain Points

1. **Monolithic-crate compile tax** — Every edit recompiles a 682,959-line, 620-file crate as a single unit; local commits invalidate build SHAs; 25 integration-test binaries each link the full dependency graph. The v0.9.5 epic (#5245–#5249) is a direct response to this sustained contributor friction.

2. **Silent failures and false positives** — The `File` edit tool accepting wrong parameters and reporting fake success (#5209) is a serious correctness issue: developers lose time on 3–5x re-edits and cannot trust the feedback loop. Unknown model IDs silently falling back to 128K (#5244) compounds the trust problem.

3. **Sandbox vs. developer workflow** — The kernel-level Seatbelt sandbox breaking basic shell commands daily (#4955) and blocking access to external build artifacts (#5005) forces developers to fight the tool's safety model rather than use it. Workarounds are reportedly exhausted.

4. **Broken cost visibility** — The pricing endpoint 503s (#5241) broke post-hoc cost auditing for all providers after 0.9.3; with multiple providers in use, session-level unbilled gaps make budget tracking impossible.

5. **Credential provisioning friction** — Multiple issues peg login/key flows as a recurring annoyance: single-key slot overwrites across providers (#5250) and OAuth flows that mint tokens but fail to adopt them (#5243) force redundant manual steps every time a user switches models or re-authenticates.

---

*Digest compiled 2026-08-05 from public GitHub data. All links point to the Hmbown/CodeWhale repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*