# AI CLI Tools Community Digest 2026-08-28

> Generated: 2026-08-28 10:08 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Ecosystem
**Date:** 2026-08-28

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape is in a phase of rapid maturation characterized by three dominant themes: **security hardening**, **multi-agent reliability**, and **platform-specific stability**. Tools are converging on similar architectural patterns—sandboxed execution modes, subagent orchestration, and session persistence—while differentiating on provider ecosystems and workflow philosophies. The most striking pattern across all seven tools is the emergence of **Windows as the weakest platform**, with every tool reporting significant Windows-specific defects ranging from launch failures to path-corruption bugs. Community engagement remains high across all projects, with users acting as de facto QA teams, filing detailed regression reports and demanding enterprise-grade reliability, transparency, and governance features.

---

## 2. Activity Comparison

| Tool | Hot Issues (24h) | PRs Active (24h) | Releases (24h) | Notable Activity |
|------|:-:|:-:|:-:|---|
| **Claude Code** | 10 | 1 (closed) | 2 (v2.1.248, v2.1.250) | `--restricted` sandbox mode; Windows launch failures dominate |
| **OpenAI Codex** | 10 | 10 | 3 alphas (rust-v0.151.0-alpha.6–8) | Rapid Rust core iteration; GPT-5.6 handshake failures on Windows |
| **Gemini CLI** | 10 | 10 | 1 nightly | Security fixes (Git config sanitization); subagent false-success bug |
| **GitHub Copilot CLI** | 10 | 0 | 2 (v1.0.81, v1.0.82-0) | Plugins dashboard GA; `store_memory` regression; TUI freezes |
| **Kimi Code** | 6 | 3 | 0 | Plan-mode infinite loop; asyncssh security advisory fix |
| **OpenCode** | 10 | 10 | 2 (v1.18.24, v1.18.25) | Azure Entra ID support; billing/quota transparency issues |
| **Pi** | 10 | 10 | 0 | TUI rendering corruption; compaction failures; proxy fixes |
| **Qwen Code** | 10+ | 10+ | 1 nightly | OpenTUI migration (batch 3); 5 CI failures; Web Shell cutover |
| **DeepSeek TUI** | 10 | 10 | 0 | Provider-neutrality push (18 gates); 5-provider web search batch |

---

## 3. Shared Feature Directions

Multiple communities are independently converging on similar requirements:

### Security & Sandboxing
- **Restricted execution modes**: Claude Code adds `--restricted` flag; Gemini CLI enforces fail-closed workspace trust; Qwen decouples `permissions.allow` from tool registration — all addressing the same "how do we safely run agentic code" question.
- **Secret/environment sanitization**: Gemini CLI (`GIT_CONFIG_*` sanitization), Kimi (credential persistence), Copilot (MCP server env vars), OpenCode (`external_directory` permissions).

### Session & State Management
- **Recoverable sessions**: Claude Code (ghost entries, deletion confirmation), Codex (rollout deduplication), Pi (compaction robustness), OpenCode (session isolation leaks), Qwen (auto-compaction 413 recovery) — all struggling with long-session reliability.
- **Session UX improvements**: Named resume (Copilot), session switching performance (OpenCode), `--resume` selector parsing (Pi), fork permission persistence (Claude Code).

### TUI/UX Polish
- **Output control**: Codex (#39903, #18396), Pi (copy config), DeepSeek (per-block actions), Copilot (TUI freezes) — users want fine-grained control over terminal output density.
- **Boot/operation transparency**: DeepSeek (MCP/plugin boot surfacing), Pi (session list performance), Qwen (MCP Apps inline UI) — "silent working" is unacceptable.

### Governance & Observability
- **Billing/usage transparency**: OpenCode (5+ issues), DeepSeek (token attribution), Codex (GPU usage) — users demand accurate cost visibility.
- **Docs-vs-implementation parity**: Claude Code (symlinks), Kimi (`openai_legacy` docs), Copilot (JSON Schema) — documentation gaps erode trust.

---

## 4. Differentiation Analysis

| Tool | Focus | Target User | Technical Approach | Differentiators |
|------|-------|-------------|-------------------|-----------------|
| **Claude Code** | Enterprise reliability | Professional developers, CI/CD | JS/TS, Anthropic models | `--restricted` sandbox; settings-file governance; skill ecosystem |
| **OpenAI Codex** | Multi-model execution | AI tool builders | Rust core, GPT-5.x | Fast Rust iteration; unifies CLI/desktop/TUI; subagent service-tier propagation |
| **Gemini CLI** | Agent-orchestration depth | Google ecosystem, enterprise | TS/Node, Gemini models | Multi-agent (`generalist`, `codebase_investigator`); Auto Memory; skill proactiveness |
| **Copilot CLI** | GitHub ecosystem integration | GitHub users, enterprise | Rust + JS, GPT + Claude models | Plugins dashboard; MCP 2026-07-28 spec; OpenTelemetry hooks |
| **Kimi Code** | API-first, China market | API developers, K3 users | Python (pykaos), kimi models | ACP integration; JetBrains bridge; lightweight footprint |
| **OpenCode** | Broad model support | Indie devs, self-hosters | TypeScript (Bun), universal models | Multi-provider (Azure/Entra ID); V2 tool correctness; mobile/terminal ambitions |
| **Pi** | Power-user local-first | Model developers, local runners | TypeScript/React, llama.cpp support | Configurable summaries; NO_PROXY handling; extension hooks |
| **Qwen Code** | IDE + channel integration | Alibaba ecosystem, VS Code users | Node/TS, Qwen models | Web Shell cutover; DingTalk channels; OpenTUI migration; review CLI with circuit breaker |
| **DeepSeek TUI** | Rust performance, multi-provider | Performance-sensitive users | Rust (codewhale-tui), 5+ providers | 682K-line crate (monolith tax); provider-native search parity; gix migration |

---

## 5. Community Momentum & Maturity

### Rapidly Iterating (Weekly+ Releases)
- **OpenAI Codex** — 3 alphas in 24h with no changelog; aggressive Rust core development signals a platform bet on performance and cross-desktop UI.
- **Claude Code** — 2 releases in 24h with security-hardening additions; responsive to community pain points (Windows, permission drift).
- **Qwen Code** — Nightly releases; 3 OpenTUI migration batches; 6+ follow-up issues from a single review — clearly investing heavily in architecture restructuring.
- **Gemini CLI** — Burst of 10 PRs in 24h; strong focus on security hardening and extension/storage governance.
- **OpenCode** — Steady patch releases; high contributor velocity on V2 tool correctness (skyzhao1223 and others).

### Maturing, Community-Dense
- **Copilot CLI** — Ships GA features (plugins dashboard) but shows regression risk (`store_memory`); community deeply engaged with detailed TUI/UX feedback.
- **DeepSeek TUI** — Despite no releases in 24h, shows the highest strategic coherence: provider-neutrality audit, web-search parity wave, decomposition epic — a community with long-term vision.
- **Pi** — Steady but slower release cadence; community deeply technical (model-provider quirks, proxy bugs, compaction).

### Community Quality Trends
- **Claude Code** and **Gemini CLI** have the most *detailed* issue reports (reproduction steps, logs, expectations) — evidence of mature developer communities.
- **Kimi Code** has the smallest community but shows engagement on security and API correctness; maintainers actively closing stale issues.
- **Copilot CLI** community is focused on enterprise concerns (GHEC, policies, MCP compat) — alignment with GitHub's business model.

---

## 6. Trend Signals

### For Technical Decision-Makers

1. **Windows support is the single largest quality gap across the ecosystem.** Every major tool has Windows-specific defects — path corruption (Claude Code), handshake failures (Codex), sandbox PowerShell issues (Codex), TUI freezes (Copilot), ARM64 build failures (OpenCode). **If your organization is Windows-heavy, budget for platform-specific debugging.**

2. **Security is now a first-class feature, not an afterthought.** Sandboxed execution (`--restricted`), environment sanitization (Gemini), fail-closed trust (Qwen), and MCP server filtering appear across 5+ tools. **Evaluate the security model of your AI CLI as rigorously as you would a CI/CD runner.**

3. **Long-session reliability is the top unsolved problem.** Compaction failures, session ghosting, orphaned tasks, and memory exhaustion appear across every tool. **Look for tools with robust compaction/retry logic and session recovery mechanisms — this is where day-to-day productivity is won or lost.**

4. **Multi-agent orchestration is arriving but not yet reliable.** Subagent hangs (Gemini), background-task orphaning (Claude Code), parallel-subagent TUI freezes (Copilot) — the "agent team" promise is ahead of the reliability curve. **For production workloads, prefer tools with explicit subagent controls and telemetry.**

5. **Billing and usage transparency is becoming a trust prerequisite.** OpenCode's quota discrepancies and DeepSeek's token-attribution requests signal that AI CLI providers must treat cost visibility as core UX. **If you're procuring AI tools at scale, demand per-session/per-tool cost dashboards.**

6. **The TUI is the product, not a secondary interface.** Users across every community demand output control, boot transparency, and rendering stability. Terminal UX investments (Qwen's OpenTUI migration, Pi's renderer fixes, Codex's TUI features) will be differentiators.

7. **Provider neutrality is the endgame.** DeepSeek TUI's 18-gate audit and web-search parity wave, plus OpenCode's multi-provider support and Codex's model-agnostic execution, show that AI CLIs are becoming **LLM-agnostic execution engines** rather than single-model wrappers. **Design your tooling strategy around provider portability.**

8. **Documentation-as-QA is the new normal.** Symlink mismatches (Claude Code), `openai_legacy` endpoint confusion (Kimi), and JSON Schema absence (Copilot) show that docs gaps directly lead to community-visible dissatisfaction. **Treat documentation as a product surface with its own SLAs.**

---

*Report compiled from daily community digests spanning anthropics/claude-code, openai/codex, google-gemini/gemini-cli, github/copilot-cli, MoonshotAI/kimi-cli, anomalyco/opencode, badlogic/pi-mono, QwenLM/qwen-code, and Hmbown/DeepSeek-TUI.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-08-28 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

### 🥇 #1298 — skill-creator Evaluation Fix (Open)
**Author:** MartinCajiao | **Created:** 2026-06-10 | **Status:** Open
[View PR](https://github.com/anthropics/skills/pull/1298)

Fixes the critical `run_eval.py` defect where the skill optimization loop reports `recall=0%` for every description, rendering the evaluation pipeline useless. The PR addresses installation of the eval artifact as a real skill, Windows stream reading, trigger detection, and parallel workers. This is the single most impactful community contribution — it unblocks the entire skill-description optimization workflow referenced in Issue #556 (12 comments, 7 👍).

---

### 🥈 #514 — Document Typography Skill (Open)
**Author:** PGTBoos | **Created:** 2026-03-04 | **Status:** Open
[View PR](https://github.com/anthropics/skills/pull/514)

Adds typographic quality control for AI-generated documents: orphan word wrap (1–6 words spilling to next line), widow paragraphs (stranded section headers), and numbering misalignment. Addresses a pervasive quality gap in every Claude-generated document. High practical value for enterprise document workflows.

---

### 🥉 #1615 — SCNet HPC Cluster Skill (Open)
**Author:** lql341 | **Created:** 2026-08-20 | **Status:** Open
[View PR](https://github.com/anthropics/skills/pull/1615)

Operating SCNet HPC clusters through profile-based SSH and Slurm workflows. Covers cluster discovery, job generation, partition/memory/module management, and accelerator guidance. Niche but highly specific — represents the community's demand for domain-expertise skills beyond generic coding.

---

### #538 — PDF Case-Sensitivity Fix (Open)
**Author:** Lubrsy706 | **Created:** 2026-03-06 | **Status:** Open
[View PR](https://github.com/anthropics/skills/pull/538)

Fixes 8 case-sensitivity mismatches (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`) in `skills/pdf/SKILL.md` that break on case-sensitive filesystems (Linux/macOS). Small but critical reliability fix.

---

### #486 — ODT Skill — OpenDocument Creation & Parsing (Open)
**Author:** GitHubNewbie0 | **Created:** 2026-03-01 | **Status:** Open
[View PR](https://github.com/anthropics/skills/pull/486)

Covers creation, filling, reading, and conversion of OpenDocument files (.odt, .ods). Triggers on any mention of ODT/ODS/ODF/OpenDocument/LibreOffice. Extends document support beyond the existing docx/pdf skills — a popular direction given the volume of document-related activity in this repo.

---

### #210 — Frontend Design Skill Clarity Improvements (Open)
**Author:** justinwetch | **Created:** 2026-01-05 | **Status:** Open
[View PR](https://github.com/anthropics/skills/pull/210)

Revises the frontend-design skill for clarity, actionability, and internal coherence. Goal: every instruction must be executable within a single conversation, with specificity sufficient to steer behavior. Addresses the common problem of skills being too abstract to guide Claude effectively.

---

### #83 — Skill Quality & Security Analyzers (Open)
**Author:** eovidiu | **Created:** 2025-11-06 | **Status:** Open
[View PR](https://github.com/anthropics/skills/pull/83)

Two meta-skills: **skill-quality-analyzer** (evaluates across structure/documentation, examples, resources) and **skill-security-analyzer** (security audit for Claude Skills). Community-built tooling for the skills ecosystem itself — a meta-level contribution that directly addresses the trust and quality concerns raised in Issue #492.

---

## 2. Community Demand Trends (from Issues)

### 🔐 Trust Boundary & Security (Issue #492, 43 comments)
[View Issue](https://github.com/anthropics/skills/issues/492)

**The most-discussed issue in the repo.** Community skills distributed under the `anthropic/` namespace impersonate official Anthropic skills, creating a trust boundary vulnerability where users may grant elevated permissions to malicious skills. **Demand: identity verification, namespace separation, and security vetting for community skills.**

### 📊 Org-Wide Skill Sharing (Issue #228, 16 comments, 8 👍)
[View Issue](https://github.com/anthropics/skills/issues/228)

**Highest 👍 count in the repo.** Users demand org-wide skill libraries and direct sharing links instead of manual .skill file downloads and Slack/Teams transfers. **Demand: enterprise skill distribution infrastructure.**

### 🐛 Evaluation Pipeline Fixes (Issue #556, 12 comments, 7 👍)
[View Issue](https://github.com/anthropics/skills/issues/556)

`run_eval.py` never triggers skills/commands — 0% trigger rate across all queries. Already addressed by PR #1298. **Demand: reliable skill evaluation tooling.**

### 🧩 Context Window Optimization (Issue #1487, 4 comments)
[View Issue](https://github.com/anthropics/skills/issues/1487)

`claude-api` skill eagerly injects ~156k tokens, exhausting context in a single tool call. **Demand: lazy-loading and context-budget-aware skill design.**

### 👯 Duplicate Skill Conflicts (Issue #189, 6 comments, 9 👍)
[View Issue](https://github.com/anthropics/skills/issues/189)

Installing both `document-skills` and `example-skills` plugins installs identical content (duplicate skills), wasting context. **Demand: deduplication and clear plugin boundaries.**

---

## 3. High-Potential Pending Skills

| PR | Skill | What It Does | Why It Matters |
|---|---|---|---|
| [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** | Zero-cost multi-agent orchestration — delegates mechanical work to headless opencode workers on free models; Claude Code stays planner/reviewer/merger | Addresses the fundamental cost problem: expensive context is the scarce resource, not intelligence |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **Self-Audit** | Mechanical file verification + four-dimension reasoning quality gate (damage-severity priority) before delivery | Universal quality assurance for any project/stack/model — complements the reasoning gate pipeline proposed in Issue #1385 |
| [#723](https://github.com/anthropics/skills/pull/723) | **Testing Patterns** | Full testing stack: Testing Trophy philosophy, AAA unit tests, React component testing, edge cases | Consolidates scattered testing knowledge into a single skill — high demand for test generation |
| [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow** | Broad ServiceNow platform assistant: ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, Vulnerability Response, IntegrationHub | Enterprise platform coverage — the most comprehensive enterprise-systems skill proposed |
| [#525](https://github.com/anthropics/skills/pull/525) | **Pyxel** | Retro/pixel-art/8-bit game development with Python via pyxel-mcp (write → capture → inspect → iterate) | Creative/entertainment domain expansion with a complete MCP-driven workflow |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for reliable, security-vetted, context-efficient infrastructure — evaluation tooling that actually works (PRs #1298, #1099, #1050; Issue #556), trust boundaries preventing impersonation (Issue #492), and skills that respect the context window (Issue #1487) — rather than for new domain-specific skills themselves.**

---

# Claude Code Community Digest
**2026-08-28**

---

## 1. Today's Highlights

Two releases shipped in the last 24 hours: v2.1.248 introduces a new `--restricted` mode for sandboxed operation (removing built-in command execution tools, `WebFetch`, and enforcing working-directory file access), and v2.1.250 follows with reliability fixes. Meanwhile, a long-running Windows issue with Claude Desktop's CoworkVMService continues to generate significant community engagement, and a new field report on multi-agent session instability highlights emerging challenges as users push the platform to concurrent-session workloads.

---

## 2. Releases

**v2.1.250** — Bug fixes and reliability improvements.

**v2.1.248** — Added `--restricted` flag (or `CLAUDE_CODE_RESTRICTED=1`):
- Removes built-in tools that execute commands or run code, plus `WebFetch` (unless explicitly named in `--tools`)
- Restricts file tools to the working directory
- Refuses `bypassPermissions` requests
- Ignores user, project, and local settings files

The `--restricted` mode is a meaningful security-hardening addition, particularly relevant for CI/CD pipelines, sandboxed execution, and multi-tenant environments.

---

## 3. Hot Issues

Highly active or impactful issues from the last 24 hours:

1. **[#53247 — Claude Desktop fails to launch on Windows — orphaned Silo/Job Object after crash](https://github.com/anthropics/claude-code/issues/53247)** *(29 comments, 18 👍)*
   Long-running critical bug (4 months open). App crash leaves an orphaned Job Object that blocks relaunch until reboot. High engagement suggests widespread impact on Windows daily-driver users.

2. **[#82049 — Claude.ai sign-in magic link emails delayed 2–5 minutes](https://github.com/anthropics/claude-code/issues/82049)** *(19 comments, 36 👍)*
   Auth latency breaks session resumption workflows. 36 upvotes in 30 days signals a high-impact reliability regression many users depend on daily.

3. **[#49655 — Claude Desktop update fails with 0x80073CF6 when CoworkVMService is running](https://github.com/anthropics/claude-code/issues/49655)** *(23 comments, 10 👍) — CLOSED*
   Update mechanism conflicts with the Cowork VM service; closed but still highly referenced in related Windows reports.

4. **[#89812 — Linux Desktop: session_stale_relogin forces ~daily re-login; sign-in demanded twice during Cowork grants](https://github.com/anthropics/claude-code/issues/89812)** *(4 comments)*
   Fresh report (2 days) on auth session churn on Linux, with a doubled sign-in prompt during Cowork folder-access grants. Compound friction likely to grow in engagement.

5. **[#89911 — /fork starts forked session in auto mode when parent's permission mode wasn't recorded](https://github.com/anthropics/claude-code/issues/89911)** *(3 comments)*
   Regression where forked sessions silently downgrade permissions, causing unexpected auto-mode classifier denials mid-task. A surprising and potentially hazardous behavior for power users.

6. **[#90264 — Multi-agent session: background-task orphaning, cross-session message holds, and subagent drift](https://github.com/anthropics/claude-code/issues/90264)** *(1 comment)*
   Field report on concurrent-session instability (background task orphans, subagent drift). Early signal — likely to accumulate evidence from complex multi-agent workloads.

7. **[#88561 — Bash tool silently collapses `\\` to `\`, corrupting regex/paths on Windows](https://github.com/anthropics/claude-code/issues/88561)** *(3 comments)*
   Quotes and heredocs don't protect backslashes. Silent corruption of command text is a data-integrity footgun for Windows users.

8. **[#88405 — Symlinked files in .claude/rules/ not auto-loaded (contradicts docs)](https://github.com/anthropics/claude-code/issues/88405)** *(6 comments)*
   Docs claim symlink support in rules directories, but implementation doesn't follow. A docs-vs-behavior mismatch affecting shared rule workflows.

9. **[#87348 — Endless SecurityAgent prompt stack for credential rewrite on macOS](https://github.com/anthropics/claude-code/issues/87348)** *(2 comments)*
   Persistent keychain partition mismatch causes "Always Allow" to never persist. Auth friction that disrupts day-to-day macOS usage — reopening a previously-closed issue's underlying behavior.

10. **[#83146 — Renamed project root: session registry never revalidates stored cwd](https://github.com/anthropics/claude-code/issues/83146)** *(2 comments)*
    Dead-path inheritance breaks project-scoped settings/hooks/memory silently. A structural integrity issue for projects that get moved or renamed.

---

## 4. Key PR Progress

Only one PR updated this period. Notable recent activity (referenced by issues and community discussion):

1. **[#69226 — Update frontend-design skill](https://github.com/anthropics/claude-code/pull/69226)** *(CLOSED)*
   Updates the front-end design skill and bumps plugin version to 1.1.0 for distribution — keeping skill-based workflows current.

2. **PRs referenced in issue discussions (no direct links, but functionally significant):**
   - **Sandboxing hardening** — `--restricted` mode implementation
   - **Auto-mode fallback fixes** — for `/fork` permission-state persistence (referenced in #89911)
   - **Settings-file handling changes** — related to the env block initialization-order issue (#67657)
   - **Write-tool behavior changes** — introduced in v2.1.228 per #88518, reducing strict read-before-overwrite guarantees
   - **CoworkVM service updates** — likely the source of Windows-specific regression reports (#49655, #53247)
   - **Session cleanup default changes** — cleanupPeriodDays default behavior per #86730

> Note: Release data shows no additional PRs merged in the last 24h. The absence of visible PRs in the data window likely reflects a quiet period following the two releases.

---

## 5. Feature Request Trends

Strong themes from open issues:

1. **Recoverable session management** — Restore/deletion confirmation, session handoff, and "ghost entry" reconciliation (e.g., #75957, #86263, #87576). Community expects transactional lifecycle.

2. **Rules and memory governance** — Diagnostics for CLAUDE.md budgets, duplication and conflict detection (#85477). Power users want guardrails and observability over rule-loading behavior.

3. **Knowledge-base integration** — Claude Projects knowledge base access inside Claude Code (#87528). Aligns with the broader "bring your context everywhere" push.

4. **More transparent and controlled auth** — Org/account scoping verification for setup tokens (#90298); persistent session relogin tuning (#89812).

5. **Context integrity features** — Strict read-before-overwrite opt-in for Write (#88518) and `--restricted`-style sandboxing as a first-class, predictable mode.

---

## 6. Developer Pain Points

Recurring frustrations across the data:

- **Windows fragility** — Launch failures, update conflicts, silent path/backslash corruption. Windows support consistently generates the highest-reactivity bug reports.
- **Session loss and "ghost" state** — Deleted or undiscoverable sessions with intact JSONL files is the top recurring UX failure. Expect continued demand for better session registry/GC logic.
- **Silent permission-mode drift** — Forked sessions dropping to auto mode, or tool behavior changing between versions, undermine trust in predictable execution.
- **Docs-vs-implementation mismatches** — Symlink support advertised but not honored; `env` blocks not applied at init. Developers consistently act as unpaid QA for documented features.
- **Auth churn and stale-token friction** — Magic-link delays, daily re-logins, non-persistent keychain grants. Identity and session lifecycle need architectural attention.
- **Cleanup defaults causing data loss** — Default cleanupPeriodDays deleting transcripts without adequate warning. Defaults with destructive behavior are consistently called out.

---

*Digest generated from anthropics/claude-code activity on 2026-08-28.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-28

## Today's Highlights
Three alpha releases (`rust-v0.151.0-alpha.6` through `.8`) landed within the last 24 hours with no public changelog notes, suggesting rapid iteration on the Rust core. The community's attention is concentrated on a growing cluster of Windows desktop issues — auth reauthentication loops, headless launch failures, and a recurring "code-mode host exited during handshake" error affecting GPT-5.6 model execution. A long-standing GPU usage complaint from April continues to draw reactions, reflecting sustained demand for performance polish in the desktop app.

## Releases
Three new Rust alpha builds were published in the last 24 hours:
- **rust-v0.151.0-alpha.6** — Release 0.151.0-alpha.6
- **rust-v0.151.0-alpha.7** — Release 0.151.0-alpha.7
- **rust-v0.151.0-alpha.8** — Release 0.151.0-alpha.8

No changelog details were included in the release notes. All three are available at [openai/codex/releases](https://github.com/openai/codex/releases).

## Hot Issues

1. **[#39162 — Opening an existing conversation invalidates ChatGPT auth and redirects to sign-in](https://github.com/openai/codex/issues/39162)**  
   67 comments, 40 👍 · A macOS regression where opening a saved conversation triggers an auth invalidation loop. The user reports it began in build 6720 after working in 6662, pointing to a recent auth-token state regression. High engagement suggests widespread impact.

2. **[#16857 — High GPU usage while the app is “thinking” due to tiny useless animation](https://github.com/openai/codex/issues/16857)**  
   42 comments, 51 👍 · An April report with sustained traction: the desktop app burns GPU on an idle animation during model "thinking." The 51 upvotes signal strong community consensus that this animation should be optional or hardware-accelerated.

3. **[#39903 — Add an option to disable “Ran N commands” collapsing](https://github.com/openai/codex/issues/39903)**  
   33 comments, 60 👍 · TUI users want the CLI to stop collapsing executed commands into a summary line. 60 upvotes make this one of the most-requested CLI usability changes on the board right now.

4. **[#41049 — code-mode host exited during handshake; GPT-5.6 not working on Windows](https://github.com/openai/codex/issues/41049)**  
   32 comments, 1 👍 · A Windows-specific variant of the handshake failure, reported in the desktop app (build 26.820.71523). The replication across multiple Windows users suggests a platform-level defect in the unified exec path.

5. **[#35746 — Paginated history drops valid flattened rollout records and reuses ordinals](https://github.com/openai/codex/issues/35746)**  
   31 comments, 1 👍 · A subtle CLI session-hygiene bug where rollouts are silently dropped and ordinals reused across pages. Impactful for anyone relying on session history accuracy for debugging or audit.

6. **[#32759 — GPT-5.6 Sol fails to execute shell commands: code-mode host exited during handshake](https://github.com/openai/codex/issues/32759)**  
   18 comments, 5 👍 · The oldest and most-voted instance of the handshake failure. The model initializes but cannot execute tools. This has spawned multiple duplicates, marking it as a priority integration defect.

7. **[#11747 — Add `/add-dir` slash command to add directories mid-session](https://github.com/openai/codex/issues/11747)**  
   14 comments, 45 👍 · A long-standing TUI feature request: `--add-dir` exists at startup but there's no in-session equivalent. 45 upvotes from February and still open — strong product gap signal.

8. **[#39855 — Windows Remote: every new projectless chat fails trust verification with malformed path](https://github.com/openai/codex/issues/39855)**  
   12 comments, 4 👍 · Projectless remote chats on Windows hit a malformed path in trust verification. Blocks a basic workflow for Windows Remote users.

9. **[#18396 — Add way to hide tool calls/output in TUI](https://github.com/openai/codex/issues/18396)**  
   10 comments, 28 👍 · TUI users want a toggle to collapse verbose tool-call output. The submitted terminal example illustrates how noisy output degrades readability.

10. **[#41255 — Codex Desktop GPT-5.6 models fail to run exec tool (code-mode host exits)](https://github.com/openai/codex/issues/41255)**  
    4 comments, 0 👍 · A fresh report from today, extending the handshake issue to desktop builds 26.825.x/26.826.x. Its recency suggests the problem persists in the latest nightly channel as well.

## Key PR Progress

1. **[#41309 — Honor required reviews when reusing Guardian scores](https://github.com/openai/codex/pull/41309)**  
   Fixes a safety bypass where cached low-risk scores could skip required full review after switching to a review-required model. Critical governance hardening.

2. **[#41308 — Make subagents follow the root service tier](https://github.com/openai/codex/pull/41308)**  
   Propagates the root thread's service tier across the agent tree, applying it to subagent requests and remote compaction. Removes an inconsistency that could under-provision child agents.

3. **[#41292 — Forward history note images to the model](https://github.com/openai/codex/pull/41292)**  
   Converts backend history images into `input_image` items for model consumption, with protections to keep image data out of logs and hook responses.

4. **[#41285 — Drive keymap conflict checks from the action registry](https://github.com/openai/codex/pull/41285)**  
   Consolidates keymap conflict validation into a single registry source, removing duplicate action lists and adding regression coverage.

5. **[#41260 — Let the history backend enforce tool output budgets](https://github.com/openai/codex/pull/41260)**  
   Removes redundant client-side output limits for history/notes since the backend already applies budget constraints pre-encryption.

6. **[#41243 — Add configurable gating for the sleep tool](https://github.com/openai/codex/pull/41243)**  
   New `sleep_tool` feature flag: enables/disables the built-in sleep tool independently, with `model_driven` and `always_on` modes via structured config.

7. **[#41239 — Surface model provider authentication recovery progress](https://github.com/openai/codex/pull/41239)**  
   Adds turn-scoped events for auth recovery start/completion, with stable app-server events for UI hooks.

8. **[#41227 — Use compatible PowerShell for elevated Windows sandbox commands](https://github.com/openai/codex/pull/41227)**  
   Fixes sandbox failures by selecting a compatible PowerShell when Store versions under `WindowsApps` are inaccessible to the elevated account.

9. **[#41223 — Add recency sorting to `project/list`](https://github.com/openai/codex/pull/41223)**  
   New `recencyAt` field derived from the newest active thread; supports sorting by position or recency. Improves project-organization workflows.

10. **[#41219 — Retry confirmed remote registration conflicts](https://github.com/openai/codex/pull/41219)**  
    Adds safe retry for explicit `503 registration_conflict` responses (distinguished from ambiguous timeouts) after the registry has completed its own recovery.

## Feature Request Trends
- **TUI output control**: The dominant theme. Users repeatedly request ways to hide or collapse tool-call output ([#18396](https://github.com/openai/codex/issues/18396)) and disable command collapsing ([#39903](https://github.com/openai/codex/issues/39903)).
- **In-session state changes**: `/add-dir` mid-session ([#11747](https://github.com/openai/codex/issues/11747)) shows demand for mutating session context without restarts.
- **Better sandbox/secret handling**: Requests to handle secrets like `.env`/`.npmrc` in app environments ([#10528](https://github.com/openai/codex/issues/10528)) persist among app users.

## Developer Pain Points
- **GPT-5.6 tool execution on Windows is broken**: The "code-mode host exited during handshake" error is the single most-reported active defect, spanning CLI ([#32759](https://github.com/openai/codex/issues/32759)), desktop ([#41049](https://github.com/openai/codex/issues/41049), [#41255](https://github.com/openai/codex/issues/41255)), and GPT-5.6 family models.
- **Desktop auth instability on macOS/Windows**: Reauthentication loops and spurious sign-outs ([#39162](https://github.com/openai/codex/issues/39162), [#40761](https://github.com/openai/codex/issues/40761), [#41136](https://github.com/openai/codex/issues/41136)) are eroding trust in the desktop experience.
- **Windows launch/performance regressions**: Headless launches ([#41179](https://github.com/openai/codex/issues/41179)), 8-minute window delays ([#41056](https://github.com/openai/codex/issues/41056)), and silent exits ([#40576](https://github.com/openai/codex/issues/40576)) indicate recurring quality issues in recent Windows builds.
- **SQLite/state contention**: "database is locked" errors and growing `logs_2.sqlite` causing startup timeouts highlight state-management fragility at scale ([#31184](https://github.com/openai/codex/issues/31184), [#27741](https://github.com/openai/codex/issues/27741)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-28

## Today's Highlights
This week's digest centers on critical reliability fixes targeting subagent recovery, shell execution stability, and security hardening. A notable cluster of PRs addresses Git configuration sanitization and environment variable leakage, reflecting a strong community push for enterprise-grade safety. Additionally, Auto Memory issues continue to surface, indicating growing adoption of this feature alongside ongoing quality concerns.

## Releases
- **[v0.59.0-nightly.20260828.g3c311beac](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260828.g3c311beac)** — Automated nightly release; no manual changelog entries.

---

## Hot Issues

### 1. [Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)
**Priority: P1 | Area: Agent | Created: 2026-03-13 | 💬 13 | 👍 2**
The `codebase_investigator` subagent reports `status: "success"` with `Termination Reason: "GOAL"` even when it hits `MAX_TURNS` before doing any work. This misleads users into thinking analysis completed when it didn't — a critical correctness issue for long-running investigations.

### 2. [Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)
**Priority: P1 | Area: Agent | Created: 2026-03-06 | 💬 8 | 👍 8**
The generalist agent hangs indefinitely when deferring tasks like simple folder creation. Users report waiting up to an hour before canceling. Workaround: explicitly instructing the model not to defer to subagents. High community upvotes indicate this is a widespread frustration.

### 3. [Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)
**Priority: P1 | Area: Core | Created: 2026-04-11 | 💬 4 | 👍 3**
Simple CLI commands that finish successfully still show as active with "Awaiting user input." This is a core reliability regression affecting day-to-day workflow efficiency, especially in automated or scripted uses.

### 4. [Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)
**Priority: P2 | Area: Agent | Created: 2026-03-11 | 💬 6**
Anecdotal evidence that the CLI seldom self-initiaties usage of custom skills and subagents unless explicitly instructed. Users with custom `gradle` and `git` skills report the model doesn't leverage them even in directly relevant scenarios.

### 5. [Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)
**Priority: P2 | Area: Agent | Created: 2026-05-05 | 💬 5**
Auto Memory marks sessions as unprocessed when the extraction agent decides not to read them (e.g., low-signal), causing the same sessions to be re-surfaced repeatedly. This wastes token budget and degrades memory quality over time.

### 6. [Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)
**Priority: P2 | Area: Security | Created: 2026-05-05 | 💬 4**
Auto Memory sends transcript content to the model before the instructed redaction happens — and redaction isn't deterministic. Also logs existing skills. Raises concerns about secret leakage in memory pipeline contexts.

### 7. [Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)
**Priority: P1 | Area: Agent/Browser | Created: 2026-03-11 | 💬 4 | 👍 1**
Browser subagent terminates with `GOAL` status but fails silently in Wayland environments. This is likely a platform-specific sandboxing or display-server compatibility issue affecting Linux users.

### 8. [Enhance browser_agent resilience: Automatic session takeover and lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232)
**Priority: P3 | Area: Agent | Created: 2026-03-12 | 💬 4**
BrowserAgent uses a fail-fast strategy on locked profiles (e.g., persistent sessions with orphaned processes). Users request automatic lock recovery and session takeover to avoid manual cleanup.

### 9. [Model frequently creates tmp scripts in random spots](https://github.com/google-gemini/gemini-cli/issues/23571)
**Priority: P2 | Area: Agent | Created: 2026-03-23 | 💬 3**
When restricted to shell execution, the model generates edit scripts scattered across directories, creating significant workspace cleanup overhead for users preparing commits.

### 10. [How do I know when my data & prompts are used for training?](https://github.com/google-gemini/gemini-cli/issues/27381)
**Priority: P3 | Area: Security | Closed (Stale) | 💬 3 | 👍 2**
User question about data privacy with Pro accounts. Unclear whether CLI usage inherits the same no-training guarantees as browser usage. **This is urgent to resolve given the growing enterprise adoption** — users are blocked on privacy concerns for production use.

---

## Key PR Progress

### 1. [fix(core): drop unsafe `diff.external` override (#28928)](https://github.com/google-gemini/gemini-cli/pull/28930)
**Priority: P1 | Size: M | Area: Core**
Reverts a change that set `diff.external` to an empty string, which Git interprets as "use external diff" rather than "disable it." This caused unexpected external tool invocation in sandboxed environments.

### 2. [fix(core): keep `GIT_CONFIG_*` environment triplets internally consistent](https://github.com/google-gemini/gemini-cli/pull/28938)
**Priority: P1 | Size: L | Area: Core**
Prevents redaction from removing one half of numbered `GIT_CONFIG_*` key/value pairs, which makes the environment unparsable by Git. Also ensures `ShellExecutionService` doesn't restore sensitive Git config values post-sanitization.

### 3. [fix(core): avoid persisting interrupted response placeholder](https://github.com/google-gemini/gemini-cli/pull/28939)
**Priority: P1 | Size: L | Area: Agent**
Fixes #28927. The string `[The previous response was interrupted before it completed.]` was being persisted as a synthetic model response and could be repeated in later turns, corrupting conversation context and output quality.

### 4. [fix(cli): use strict boolean parsing for DEBUG env var in sandbox launcher](https://github.com/google-gemini/gemini-cli/pull/28942)
**Priority: P1 | Size: L | Area: Platform**
Fixes #28885: `DEBUG=false` and `DEBUG=0` were being treated as truthy due to string truthiness checks, causing three observable debugging-related bugs. Now uses strict boolean parsing.

### 5. [fix(core): route `read_file` content through `FileSystemService`](https://github.com/google-gemini/gemini-cli/pull/29110)
**Priority: — | Size: M | Area: Agent**
Brings `read_file` in line with `write_file` and `replace`, routing I/O through the injected `FileSystemService`. Critical for ACP clients that advertise `fs: { readTextFile }` but see direct disk reads bypassing the abstraction.

### 6. [fix(extensions): prompt for consent on environment changes and sanitize runtime-altering environment variables](https://github.com/google-gemini/gemini-cli/pull/28863)
**Priority: — | Size: M/L | Area: Extensions**
Fixes a security gap where extension updates could bypass consent checks and inject unauthorized environment variables into MCP server processes. Adds consent strings and sanitizes custom environment variables.

### 7. [fix(core): enforce fail-closed workspace trust and filter mcpServers in restricted mode](https://github.com/google-gemini/gemini-cli/pull/29099)
**Priority: — | Size: M/L | Area: Core**
Prevents unintended process execution during server startup by enforcing fail-closed workspace trust resolution and filtering repository-defined `mcpServers` in untrusted or restricted environments.

### 8. [fix(core): flush final SSE event on EOF without trailing blank line](https://github.com/google-gemini/gemini-cli/pull/29106)
**Priority: — | Size: M | Area: Core**
The SSE parser silently dropped the final buffered event when the stream ended without a trailing blank line. This lost `finishReason` and usage metadata without any error or log — now fixed.

### 9. [feat(cli): add `[Skill]` tag to slash command autocomplete suggestions and help](https://github.com/google-gemini/gemini-cli/pull/29104)
**Priority: P2 | Size: S | Area: Agent | 🏷 Help Wanted**
Adds a `[Skill]` tag to skill-backed slash commands in autocomplete and `/help`, mirroring existing `[MCP]` and `[Agent]` tags. Improves discoverability for user-installed skills.

### 10. [test: add workflow context probe for security research](https://github.com/google-gemini/gemini-cli/pull/28797)
**Priority: — | Size: S | Area: Security Research | Closed**
**⚠️ Requires attention** — This PR adds an inert probe script that logs workflow context metadata during `npm ci` and checks for `workflow_run` context with default-branch cache scope. While described as research, this pattern resembles supply-chain reconnaissance tactics. **Maintainers should inspect and likely reject** to avoid legitimizing probe-based attack research in the official repo.

---

## Feature Request Trends

### 1. **AST-Aware Code Intelligence** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746))
Growing momentum for AST-aware file reads, search, and codebase mapping. Goal: precise method-bound reads with a single tool call, reduced token noise, and smarter navigation. Tools like `tilth` and `glyph` are referenced as starting points.

### 2. **Sandboxing and OS-Level Control** ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873), [#22672](https://github.com/google-gemini/gemini-cli/issues/22672))
Two complementary directions: (a) zero-dependency OS sandboxing to let Gemini 3 models use native bash skills safely, and (b) discouraging destructive behavior (`git reset`, `--force`) when safer alternatives exist.

### 3. **Tactful Context Extraction** ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561))
A proposed surgical code-discovery hierarchy: prefer `grep_search` → targeted reads → full file reads, to reduce context bloat (~36.6k tokens/turn baseline). This addresses a core cost/performance pain point.

### 4. **Skill and Subagent Proactiveness** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#21432](https://github.com/google-gemini/gemini-cli/issues/21432))
Users want the CLI to autonomously leverage installed skills and subagents, and to better self-document its own flags, hotkeys, and capabilities.

### 5. **Browser Agent Resilience and Config Respect** ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267))
Requests for automatic session takeover, lock recovery, and honoring `settings.json` overrides (e.g., `maxTurns`) — indicating production-grade browser automation is a growing use case.

---

## Developer Pain Points

### 1. **Subagent Reliability and Transparency**
Recurring theme: subagents either hang ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), report false success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), or are invisible in `/bug` reports and `/chat share` ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)). Trust in subagent behavior is a top concern.

### 2. **Shell Interaction Flakiness**
Stuck shell states ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#22465](https://github.com/google-gemini/gemini-cli/issues/22465)) and mis-escaped `\n` behavior ([#22466](https://github.com/google-gemini/gemini-cli/issues/22466)) break common workflows. These are core stability issues that erode confidence.

### 3. **Tool Overload at Scale**
A 400 error when >128 tools are available ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) signals scaling limitations — users want smarter tool scoping and enabling rather than excessive context bloat.

### 4. **Security and Privacy Clarity**
From symlink recognition issues ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)) to uncertainty about training-data usage ([#27381](https://github.com/google-gemini/gemini-cli/issues/27381)), security and privacy surface as both technical bugs and trust blockers.

### 5. **Auto Memory Quality Control**
Multiple interconnected issues ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)) — retries, redaction, invalid patches, and logging — indicate the feature shipped with immature edge-case handling.

---

*Digest generated from GitHub data for 2026-08-28. Data source: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-28

## Today's Highlights

Version 1.0.81 shipped today with the plugins dashboard now available to everyone, MCP 2026-07-28 spec support, and OpenTelemetry integration for hooks. However, the release introduced a notable regression: `store_memory` fails with "Instance id is required" (#4535), and compatibility issues with third-party MCP servers like chroma-mcp (#4647) have surfaced. The community is also actively reporting TUI freezes, auth failures on enterprise tenants, and a growing trend of requests for JSON Schema support and session management improvements.

## Releases

- **v1.0.82-0** — Patch release with fixes and changes (no detailed notes).
- **v1.0.81** (2026-08-27) — Major release featuring:
  - **Plugins dashboard GA**: `/plugin`, `/mcp`, and `/skills` commands are now available to everyone. Set `PLUGINS_DASHBOARD=false` to opt out.
  - **MCP 2026-07-28 support**: Rolled out across CLI, SDK, IDE, and in-memory clients.
  - **OpenTelemetry in hooks**: Hooks can now receive current OpenTelemetry context.

## Hot Issues

1. **[#4535 — `store_memory` fails: "Instance id is required"](github/copilot-cli Issue #4535)**  
   `store_memory` consistently fails in v1.0.81 prereleases — the native memory writer is invoked without a required instance ID. 7 comments, active discussion, and no workaround yet. This is a core feature regression.

2. **[#4612 — Runaway FileWatch loop freezes TUI, 13 GB debug log](github/copilot-cli Issue #4612)**  
   Long-running sessions can enter a tight loop emitting "No connection accepted a host event" repeatedly, freezing the TUI and ballooning logs to 13 GB. Serious stability issue with high community engagement (6 comments, 1 👍).

3. **[#4533 — TUI stops consuming events when parallel subagents spawn](github/copilot-cli Issue #4533)**  
   A turn that launches parallel subagents causes the terminal UI to freeze (input + scroll dead) while the Rust runtime continues working in the background. Puzzling and disruptive behavior.

4. **[#4527 — `copilot -p` fails with 401 on GHEC data residency](github/copilot-cli Issue #4527)**  
   Non-interactive prompt mode hits `api.githubcopilot.com` instead of the tenant endpoint on GHEC data residency tenants, causing auth failures. 3 👍 — enterprise users are impacted.

5. **[#3760 — Ctrl+Enter hint is wrong: adds line break instead of enqueuing](github/copilot-cli Issue #3760)**  
   UI shows "ctrl+enter enqueue" but the key actually inserts a line break; the real enqueue key is ctrl+q. 12 👍 — the most-liked issue today, a small but very visible UX bug.

6. **[#4648 — Input field background turns black mid-session (low contrast)](github/copilot-cli Issue #4648)**  
   Only the command input field's background turns black, making text nearly invisible. Terminal reset doesn't fix it. A rendering regression that affects usability.

7. **[#4647 — v1.0.81 broke chroma-mcp compatibility](github/copilot-cli Issue #4647)**  
   The update from v1.0.80 to v1.0.81 breaks compatibility with chroma-mcp. Third-party MCP ecosystem stability is a recurring concern.

8. **[#4614 — macOS MallocStackLogging warning persists](github/copilot-cli Issue #4614)**  
   Diagnostic noise: "MallocStackLogging: can't turn off malloc stack logging because it was not enabled" appears in TUI windows. Not fatal, but annoying and recurring.

9. **[#4639 — Event-storage exhaustion leads to GC/compaction loop and OOM](github/copilot-cli Issue #4639)**  
   Long-running sessions hitting remote event-storage limits trigger retry storms, forced GC, and ultimately Node OOM. Memory management under failure is a real pain point.

10. **[#4225 — Coordinator stuck "Working" while background subagent runs](github/copilot-cli Issue #4225)**  
    Queued user input is not answered or shown as pending while a background subagent runs. Confusing orchestration behavior in agent mode.

## Key PR Progress

*No pull requests were updated in the last 24 hours.*  
[View open PRs](github/copilot-cli pulls) for the latest pending work.

## Feature Request Trends

- **JSON Schema for `settings.json`** ([#4641](github/copilot-cli Issue #4641)): A request to publish an official JSON Schema so editors can provide validation and autocomplete. This is a high-value, low-effort ask that keeps recurring.
- **Named session resume** ([#4642](github/copilot-cli Issue #4642)): Users want `--name <name>` to create *or resume* a session, rather than forcing them to know whether a session already exists.
- **Auditable rubber duck reviews** ([#4621](github/copilot-cli Issue #4621)): Requests for a verifiable record of rubber duck critiques — which model produced them and what the session did with each finding.
- **Fix stale model context display** ([#4638](github/copilot-cli Issue #4638)): The model details display can overstate context by summing `max_prompt_tokens` and `max_output_tokens`, which are independent maxima.

## Developer Pain Points

- **Memory-related regressions cascade**: From `store_memory` failing (#4535) to managed settings failing closed on server flaps (#4602) and event-storage exhaustion causing OOMs (#4639), memory subsystems are a clear source of instability.
- **TUI freezes and hangs**: Multiple issues (#4612, #4533, #4648) report terminal UI freezing or rendering incorrectly, especially in long-running or parallel-agent sessions.
- **Enterprise auth and policy issues**: GHEC data residency auth failures (#4527), marketplace registration gaps (#4556), and org policy blocking third-party MCP servers (#4650) are frustrating enterprise users.
- **MCP ecosystem fragility**: Every version bump breaks MCP servers — chroma-mcp (#4647), `npx` spawn on Windows (#3576 — closed but recurring), and MCP tool pagination (#4006) — indicating the MCP integration layer needs more regression testing.
- **Docs and tooling gaps**: Requests for JSON Schema (#4641), better session management (#4642), and clearer model context display (#4638) show a need for more transparent, developer-friendly tooling around the CLI.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-28

## Today's Highlights

A quiet day on the release front, with no new versions shipped in the last 24 hours. However, the community surfaced several substantive issues: a critical **plan-mode infinite loop** bug was filed, a **security advisory** for `asyncssh` in the `pykaos` package received a pull request, and a developer expressed strong frustration with the Kimi API's handling of empty `content` fields in tool-call responses. The maintainers also closed three older issues today, including one about Notion Remote MCP credential persistence (#1211), suggesting active triage of the backlog.

## Releases

No new versions were released in the last 24 hours.

---

## Hot Issues

1. **[#2623 — Plan mode: agent loops indefinitely on Bash echo / ReadFile instead of writing plan (kimi-code 0.38.0, K3)](https://github.com/MoonshotAI/kimi-cli/issues/2623)**  
   **Reporter:** zheng001001001 | **State:** Open | **Comments:** 1  
   The highest-severity item today. In plan mode, the model repetitively invokes `Bash echo`/`ReadFile` tools instead of completing exploration and emitting `ExitPlanMode`, creating an infinite loop. If reproduced widely, this breaks the core planning workflow for K3 users on Linux. The single comment suggests active investigation by maintainers. This mirrors the classic "tool-call runaway" failure mode seen in other agentic CLIs, and the community will want a hotfix soon.

2. **[#2621 — 开发 Kimi API 都是吃 **** 的吗？ (Does everyone who develops Kimi API have to pay for ****?)](https://github.com/MoonshotAI/kimi-cli/issues/2621)**  
   **Reporter:** Valen-akm | **State:** Open | **Comments:** 0 | 👍: 1  
   A developer vents about a protocol-level inconsistency: the Kimi API returns tool-call messages with an empty `content`, but rejects the same payload when sent back (HTTP 400 "text content is empty"). They note that kimi-cli itself had to hack around this. This is a legitimate API design flaw that burdens every downstream consumer; the frustration is understandable and notable because even first-party tooling needed a workaround.

3. **[#1211 — [bug] Notion Remote MCP creds are not stored beyond active session](https://github.com/MoonshotAI/kimi-cli/issues/1211)**  
   **Reporter:** ghost | **State:** CLOSED (today) | **Comments:** 3  
   Authentication tokens for the Notion Remote MCP server were being lost after the session ended, forcing users to re-auth. The issue was closed today, presumably with a fix merged in an earlier release or an intended-behavior resolution. The 3 comments suggest some back-and-forth, and closure without a visible release leaves users wondering which version addressed it.

4. **[#1272 — JetBrains AI Assistant: using ACP to call Kimi cannot recognize files](https://github.com/MoonshotAI/kimi-cli/issues/1272)**  
   **Reporter:** yuweni99 | **State:** CLOSED (today) | **Comments:** 1  
   When using Kimi via ACP (Agent Client Protocol) inside JetBrains AI Assistant, attached files are not detected — the user must manually type the full file path. The issue was closed today, and the single comment likely notes a fix or a documented limitation in the JetBrains integration path.

5. **[#2624 — docs: openai_legacy hosted /v1 example (not openai_responses, not /login)](https://github.com/MoonshotAI/kimi-cli/issues/2624)**  
   **Reporter:** cursor[bot] | **State:** Open | **Comments:** 0  
   A documentation gap identified by bot-assisted review: for providers serving Chat Completions via `/v1`, users can easily pick `openai_responses` (wrong wire format) or `openai_legacy` against the wrong endpoint (`/login`). The providers doc needs a concrete worked example for `openai_legacy` hosted at `/v1`. Low-severity, but likely to trip up many self-hosters.

6. **[#1279 — Feature Request: Native git-ai integration for AI code attribution](https://github.com/MoonshotAI/kimi-cli/issues/1279)**  
   **Reporter:** deshes | **State:** CLOSED (today) | **Comments:** 0  
   A request for native support of `git-ai` to tag AI-generated code in `git blame` was closed today. The closure without comments suggests it may have been marked won't-fix/duplicate/interested elsewhere. Git attribution remains a highly desired feature in the AI-coding space, so the community will watch for rationale.

---

## Key PR Progress

**PRs only include those referenced by the "Latest Pull Requests" section — the three items below represent the totality of activity in the last 24 hours.**

1. **[#2622 — deps: bump asyncssh to 2.23.1 in pykaos (GHSA-2wxc-x7rj-hg8f)](https://github.com/MoonshotAI/kimi-cli/pull/2622)**  
   **Author:** katsugtgz | **State:** Open  
   Addresses two security advisories (GHSA-2wxc-x7rj-hg8f and GHSA-qr67-gv47-xwwh) by bumping `asyncssh` from 2.21.1 to 2.23.1 in the `pykaos` workspace. Security-relevant change; maintainers should review and merge promptly given the advisory severity.

2. **[#2176 — fix(hooks): extract text from ContentPart for UserPromptSubmit hook](https://github.com/MoonshotAI/kimi-cli/pull/2176)**  
   **Author:** tears-mysthrala | **State:** Open (last updated 2026-08-27)  
   Fixes a bug where `UserPromptSubmit` hooks received an empty `prompt` whenever the message was a `list[ContentPart]` (the CLI's default). The fix extracts text from structured content parts, making regex matchers and prompt processing work reliably. Directly resolves issue #2148 and unblocks hook-based workflows.

3. **[#2595 — fix(StrReplaceFile): refuse to edit files that are not valid UTF-8](https://github.com/MoonshotAI/kimi-cli/pull/2595)**  
   **Author:** shoemoney | **State:** Open (last updated 2026-08-27)  
   Prevents data corruption in `StrReplaceFile`: previously, non-UTF-8 bytes were silently replaced with U+FFFD and written back. This PR makes the tool refuse unsafe edits. Important for users manipulating non-UTF-8 sources (e.g., legacy encodings); fixes a silent data-loss bug (resolves #2591).

---

## Feature Request Trends

The most significant recurring request from the issue data is **integration with external development ecosystems**:

- **AI code attribution** (git-ai for `git blame`, #1279) — a desire for transparent provenance of AI-generated lines, consistent with industry movements around code trust and review.
- **IDE cross-integration** (#1272) — users expect drop-in file/project context when invoking Kimi from JetBrains/ACP, highlighting the importance of seamless editor↔CLI data passing.

Secondary pattern: **documentation precision for non-default providers** (#2624). As users adopt self-hosted or alternative backends, the demand for correct, unambiguous hosted-endpoint examples grows. This suggests the community has an increasing number of advanced users configuring exotic setups.

---

## Developer Pain Points

Several recurring frustrations are visible in today's data:

1. **API round-trip inconsistency (empty `content` + `tool_calls`)** — Issue #2621 exposes a protocol-level flaw where the API emits tool-call messages with an empty content field, then rejects those exact messages when replayed. This forces every consumer to build special-case sanitation logic — an avoidable tax on downstream developers.

2. **Session-scoped credentials for MCP servers** (#1211) — Users expect MCP authentication to persist across sessions. The loss of Notion Remote credentials mid-workflow (and the need for repeated auth) disrupts automated pipelines and raises the bar for "pluggable tool" adoption.

3. **Agent-runaway in plan mode** (#2623) — A model that fails to terminate its exploration loop is not just a bug; it wastes tokens, time, and user patience. If K3 exhibits runaway tool-calling in a flagship mode like plan mode, it erodes trust in the "agentic CLI" experience — worth the maintainers' immediate attention.

Overall, the community is actively grilling the team on **agentic reliability** and **API ergonomics**, while eagerly awaiting clearer integration paths for IDE and attribution workflows.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-28

## Today's Highlights

Two patch releases (v1.18.24, v1.18.25) shipped with significant Azure authentication improvements — Azure CLI sign-in now works without Bun, and Microsoft Entra ID support was added for Azure providers. The community is actively surfacing billing and quota accuracy issues with the Go subscription plan, with several reports of usage dashboard discrepancies and payment/subscription activation problems. A wave of contributor-driven bug fixes landed targeting the V2 `webfetch`, `glob`, and `edit` tools, addressing charset decoding, hidden file matching, and line-ending handling.

---

## Releases

### v1.18.25
- **Bugfix**: Fixed Azure authentication so Azure CLI sign-in works without requiring Bun.

### v1.18.24
- **Bugfix**: Bedrock reasoning responses no longer get cached into unreplayable empty messages.
- **Improvement**: Azure providers can now sign in with Microsoft Entra ID through the Azure CLI instead of requiring an API key.
- **Improvement**: V1 now reads supported V2 config fields so newer config files work with older versions.

---

## Hot Issues

1. **[#785 — Disable streaming mode](https://github.com/anomalyco/opencode/issues/785)** (Open, 33 comments, 38 👍)
   Long-standing request from July 2025. Proxy providers without streaming support fail with `AI_APICallError`. Still open after 13 months — high community demand for non-streaming mode.

2. **[#38255 — Go usage dashboard discrepancy](https://github.com/anomalyco/opencode/issues/38255)** (Open, 10 comments)
   User's models stopped at midnight claiming weekly quota exceeded, but granular usage showed only $10 used. Suggests a systemic issue with quota tracking/aggregation.

3. **[#45278 — Payment declined after 3 months](https://github.com/anomalyco/opencode/issues/45278)** (Open, 7 comments)
   Existing payment method suddenly declined despite no card/bank issues. Billing-related trust concern affecting subscription renewal.

4. **[#45867 — Muse Spark 1.2 prompt cache miss](https://github.com/anomalyco/opencode/issues/45867)** (Open, 5 comments)
   Intermittent cache miss on Zen Go Responses API with detailed timestamps and cache keys. Performance/reliability concern for API users.

5. **[#45897 — False advertising: weekly quota discrepancy](https://github.com/anomalyco/opencode/issues/45897)** (Open, 2 comments)
   Chinese-language report claiming advertised "$30/week" is actually only $7.5/week. Billing transparency issue with screenshots.

6. **[#45858 — Go usage percentage calculation error](https://github.com/anomalyco/opencode/issues/45858)** (Open, 3 comments)
   Detailed reproduction showing percentage column mismatches (e.g., 59.6% actual vs 54.1% displayed). Precise data suggests real frontend/statistics bug.

7. **[#32985 — GNU Screen compatibility](https://github.com/anomalyco/opencode/issues/32985)** (Open, 4 comments)
   No truecolor, broken copy/paste, no mouse support inside GNU Screen. Terminal compatibility issue for older tooling users.

8. **[#45875 — Windows ARM64 native builds fail](https://github.com/anomalyco/opencode/issues/45875)** (Open, 2 comments)
   Build works with Bun 1.4.0, but TUI and PTY break: `bun:ffi` unavailable in stable Bun and bun-pty ships x64-only DLL.

9. **[#45871 — Scrolling broken in tmux via ConnectBot](https://github.com/anomalyco/opencode/issues/45871)** (Open, 2 comments)
   Terminal scrolling doesn't work in TUI under tmux from Android SSH client. Mobile/terminal edge case impacting usability.

10. **[#45874 — Session isolation leak](https://github.com/anomalyco/opencode/issues/45874)** (Open, 1 comment)
    File-change diff cards from other sessions leak into current session's tool-return stream. Multi-session concurrency bug affecting workflow integrity.

---

## Key PR Progress

1. **[#45901 — Support additional server URLs](https://github.com/anomalyco/opencode/pull/45901)** (Open)
   Adds optional client connection URLs via repeatable `serve --url` flags without replacing auto-discovered addresses.

2. **[#45903 — webfetch charset decoding](https://github.com/anomalyco/opencode/pull/45903)** (Open)
   Fixes UTF-8-only decoding; now respects `charset` from Content-Type header and HTML `<meta charset>`. Closes #45902.

3. **[#45898 — glob external_directory approval](https://github.com/anomalyco/opencode/pull/45898)** (Open)
   Security fix: requires `external_directory` permission when glob searches outside the workspace location.

4. **[#45894 — edit $ replacement pattern fix](https://github.com/anomalyco/opencode/pull/45894)** (Open)
   Prevents `String.prototype.replace` from interpreting `$\&`, `$``, `$'`, `$n`, `$$` in model-provided replacement strings.

5. **[#45888 — Mixed line-ending edit matching](https://github.com/anomalyco/opencode/pull/45888)** (Open)
   Fixes `oldString` never matching on files with mixed LF/CRLF by matching LF regions only. Closes #45880.

6. **[#45886 — Preserve bash timeout output](https://github.com/anomalyco/opencode/pull/45886)** (Open)
   Captures partial command output before timeout instead of returning only a static notice.

7. **[#45887 — Session switching performance](https://github.com/anomalyco/opencode/pull/45887)** (Open)
   Makes session switching independent of transcript length via pagination and bounded tail window.

8. **[#45885 — Agent frontmatter parse warnings](https://github.com/anomalyco/opencode/pull/45885)** (Open)
   Surfaces YAML frontmatter parse and schema validation errors instead of silently swallowing them.

9. **[#45883 — Unprefixed AI SDK package normalization](https://github.com/anomalyco/opencode/pull/45883)** (Open)
   Accepts AI SDK packages without `aisdk:` prefix in V2 provider config, failing gracefully only at prompt time previously.

10. **[#41711 — Safe database maintenance controls](https://github.com/anomalyco/opencode/pull/41711)** (Open)
    Adds safe DB maintenance controls incorporating earlier work; addresses multiple related issues (#16101, #33356).

---

## Feature Request Trends

- **Billing transparency**: Multiple issues (#45897, #45899, #45858, #38255) demand accurate quota/usage display. Users want percentage calculations matching actual usage and clear communication of plan limits.
- **Authentication flexibility**: Requests for Microsoft Entra ID support (#21658) — now partially addressed in v1.18.24 — and alternatives to streaming (#785) for proxies with limited capabilities.
- **Mobile/terminal support**: Requests for a mobile app (#6536) and better terminal compatibility (GNU Screen, tmux on Android) reflect demand for broader access options.
- **Session management**: Manual todo management (#38550), session branching (#45815), and per-session undo (#33940) show users need finer control over agent workflows.
- **Configuration/restart UX**: Desktop app should support restarting WSL sidecar server after config changes (#45889) — users expect hot-reload for config edits.

---

## Developer Pain Points

- **Quota/billing confusion**: The most active cluster of issues revolves around Go plan usage — dashboard percentages mismatching actual usage, weekly vs monthly limit ambiguity, and post-payment activation failures. This is eroding trust.
- **Tool-level correctness bugs**: Multiple reports on V2 tools (`glob`, `edit`, `webfetch`) with edge cases: hidden files, mixed line endings, non-UTF-8 charsets, `$` replacement expansion. High contributor activity (skyzhao1223) addressing these suggests systemic quality issues in V2 tooling.
- **Multi-session isolation**: Diff cards leaking between sessions (#45874) and undo affecting all sessions (#33940) point to shared-state problems when running concurrent sessions.
- **Windows ARM64 support**: Native builds fail due to Bun/ffi limitations and bun-pty DLL architecture mismatch — platform support gap for Snapdragon X users.
- **Subscription activation friction**: Users reporting successful payments without active subscriptions (#45907, #45893) need immediate resolution; these are critical trust issues.

---

*Digest generated from [anomalyco/opencode](https://github.com/anomalyco/opencode) GitHub data for 2026-08-28.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-28

## Today's Highlights

The Pi TUI remains the dominant focus, with multiple fixes landing for markdown soft-break rendering (#8674) and proxy compatibility (#8723), alongside a significant cluster of reports around word-per-line corruption in streaming output (#8584, #8675). Compaction and context management continue to be a recurring pain point, with fixes for retry logic (#6848) and configurable summarization models (#7602) making progress.

## Releases

No new releases in the last 24 hours. Current version remains **v0.84.3**.

---

## Hot Issues

### 1. [#2870 — [CLOSED] Follow XDG Base Directory](https://github.com/earendil-works/pi/issues/2870) (👍 52, 💬 20)
The most-upvoted issue currently: Pi clutters `$HOME` on Linux instead of using `$XDG_CONFIG_HOME`. Closed, with strong community consensus that this is a necessary standards compliance fix.

### 2. [#8584 — TUI row corruption during streaming: one word per line after long tool output](https://github.com/earendil-works/pi/issues/8584) (👍 6, 💬 14)
Open bug: assistant text renders garbled (one word per line) after tool calls with long output. Frequently reproducible, closely related to #8675. This appears to be the current top unresolved TUI usability issue.

### 3. [#6922 — [CLOSED] Default model cannot be a llama.cpp model](https://github.com/earendil-works/pi/issues/6922) (👍 14, 💬 12)
Startup shows "No models available" when `defaultProvider` is `llama.cpp` with a valid model configured. Closed — significant friction for local-model users.

### 4. [#8774 — Compaction fails on OpenAI Responses models: tool_choice sent without tools (400)](https://github.com/earendil-works/pi/issues/8774)
Every compaction request fails on OpenAI Responses API models with a 400 error. Critical for anyone using the Responses channel on longer sessions.

### 5. [#8779 — DeepSeek: 'reasoning_content must be passed back' on replay when thinking disabled for tool-only turns](https://github.com/earendil-works/pi/issues/8779)
Long sessions with DeepSeek reasoning models fail with a 400 when Pi disables thinking for tool-only turns. Related fix PR #8732 is already closed.

### 6. [#8711 — TUI pegs 100% CPU while streaming OpenRouter thinking (GLM-5.3-flash)](https://github.com/earendil-works/pi/issues/8711)
Severe performance degradation: `reasoning_details` stored as one object per token causes the TUI to freeze at 100% CPU. Performance bug with a clear root cause.

### 7. [#8762 — Session list --resume selector fully parses every session file](https://github.com/earendil-works/pi/issues/8762)
`--resume` / Ctrl+R is slow because `buildSessionInfo` parses entire JSONL files just to display names. Scalability concern for power users with many large sessions.

### 8. [#8757 — Tool-argument validator doesn't coerce object/array to string](https://github.com/earendil-works/pi/issues/8757)
Mirror-direction gap in validation: values arriving as objects/arrays for string-typed params (e.g., `write`/`edit` content) fail with "must be string". Affects model output robustness.

### 9. [#8752 — bedrock-converse: usage.input not normalized across model families](https://github.com/earendil-works/pi/issues/8752)
Anthropic and OpenAI-family models report `usage.input` differently (net vs. gross of cache). Causes false cache-miss notices and doubled input cost on Bedrock.

### 10. [#8776 — Crash: getContextUsage reads totalTokens when assistant usage is undefined](https://github.com/earendil-works/pi/issues/8776)
Pi 0.84.3 crashes with `Cannot read properties of undefined` after assistant runs shell commands. Straightforward null-safety regression.

---

## Key PR Progress

### 1. [#8766 — feat(coding-agent): make write and edit output easier to scan](https://github.com/earendil-works/pi/pull/8766) (OPEN)
Adds a compact, file-focused presentation for `Write`/`Edit` tool output, instead of generic tool blocks. Direct quality-of-life improvement for code review of Pi's changes.

### 2. [#6848 — fix: add retry logic to compaction summarization for transient stream failures](https://github.com/earendil-works/pi/pull/6848) (CLOSED)
Bounded retry with exponential backoff for `completeSummarization()`. Fixes #6647 — prevents a single mid-stream socket death from failing the entire compaction.

### 3. [#8674 — fix(tui): render markdown soft line breaks as spaces, not hard breaks](https://github.com/earendil-works/pi/pull/8674) (CLOSED)
Fixes #8673: thinking blocks and paragraphs with single `\n` now flow as paragraphs. Root cause is `marked` soft breaks.

### 4. [#8723 — fix(coding-agent): expose https-proxy-agent named export](https://github.com/earendil-works/pi/pull/8723) (CLOSED)
Fixes #8610 (regression in v0.84.3: `HttpsProxyAgent is not a constructor` when using google-vertex with proxy). Bundle-script fix.

### 5. [#8732 — fix(ai): preserve reasoning_content on cross-model replay into DeepSeek-family endpoints](https://github.com/earendil-works/pi/pull/8732) (CLOSED)
Fixes #8779: preserves `reasoning_content` when replaying assistant messages into DeepSeek-family endpoints (including OpenRouter-hosted `deepseek/*`).

### 6. [#7602 — feat(coding-agent): configurable summarization models](https://github.com/earendil-works/pi/pull/7602) (OPEN)
Adds configurable models and thinking levels for compaction and branch summaries. Closes #7553.

### 7. [#8731 — feat(tui): allow disable copy on fullscreen, ctrl + x copies selection](https://github.com/earendil-works/pi/pull/8731) (CLOSED)
Addresses #7720: adds `copyOnSelect` setting (default true). When disabled, Ctrl+X copies selection; falls back to copying last assistant message.

### 8. [#8737 — fix(ai): match subdomains and root domains in NO_PROXY](https://github.com/earendil-works/pi/pull/8737) (CLOSED)
Fixes wildcard domains (`*.example.com`), bare domains, and IPv6 entries in NO_PROXY parsing. Fixes #8736.

### 9. [#8764 — fix(coding-agent): honor settings.shellPath for config/header '!' command resolution](https://github.com/earendil-works/pi/pull/8764) (CLOSED)
Fixes #8763: Windows `!`-prefixed values (API keys / provider headers running shell commands) ignored `settings.shellPath`.

### 10. [#8262 — feat(coding-agent): dispatch hooks on every turn-start path](https://github.com/earendil-works/pi/pull/8262) (OPEN)
Fixes `sendCustomMessage(triggerTurn: true)` not dispatching the `input` hook or `before_agent_start`. Aligns with #8773.

---

## Feature Request Trends

1. **Global agent instructions** — [#5002 (closed)](https://github.com/earendil-works/pi/issues/5002) supports `~/.agents/AGENTS.md` as a home-directory instruction file. Closed — likely landed.
2. **Configurable TUI behavior** — Recurring requests to make selecting-copy behavior configurable ([#7720](https://github.com/earendil-works/pi/issues/7720)), with PR #8731 landing the setting.
3. **Extensions for TUI internals** — [#8761](https://github.com/earendil-works/pi/issues/8761) requests exposing the `openUrl` handler to extensions; [#8773](https://github.com/earendil-works/pi/issues/8773) requests hook dispatch for trigger-turn runs.
4. **Hook lifecycle completeness** — [#8773](https://github.com/earendil-works/pi/issues/8773) wants `before_agent_start` to fire for idle custom-message-triggered runs, keeping system prompt through tool continuations.
5. **Documentation** — README installation section ([#6907](https://github.com/earendil-works/pi/issues/6907)) and Chinese translation ([#8772](https://github.com/earendil-works/pi/issues/8772)) are small-but-requested docs improvements.
6. **New model/plan support** — [#8709](https://github.com/earendil-works/pi/issues/8709) requests adding `qwen3.8-flash` to Qwen AI Token Plan.

---

## Developer Pain Points

1. **TUI rendering regressions** — The "one word per line" corruption ([#8584](https://github.com/earendil-works/pi/issues/8584), [#8675](https://github.com/earendil-works/pi/issues/8675)) and soft-vs-hard line break rendering ([#8673](https://github.com/earendil-works/pi/issues/8673)) indicate the TUI renderer has fragile wrapping/padding logic.
2. **Compaction fragility** — Multiple issues ([#8774](https://github.com/earendil-works/pi/issues/8774), [#6848](https://github.com/earendil-works/pi/pull/6848)) around compaction failing on different model channels. This is the most common "long session" blocker.
3. **Proxy environment handling** — Recurring proxy bugs ([#8610](https://github.com/earendil-works/pi/issues/8610), [#8736](https://github.com/earendil-works/pi/pull/8737)) suggest proxy support is brittle across bundling and env-var parsing.
4. **Provider/model-specific normalization gaps** — Bedrock usage metrics ([#8752](https://github.com/earendil-works/pi/issues/8752)), DeepSeek reasoning replay ([#8779](https://github.com/earendil-works/pi/issues/8779)), and OpenAI Responses compaction ([#8774](https://github.com/earendil-works/pi/issues/8774)) all show that provider-specific quirks are a systemic source of bugs.
5. **Crash-level null-safety** — [#8776](https://github.com/earendil-works/pi/issues/8776) (`getContextUsage` reading undefined `totalTokens`) suggests defensive null-checks are still incomplete in core paths.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-28

## Today's Highlights

The Qwen Code team shipped a new nightly release (v0.22.2-nightly) with fixes for Web Shell session diffs and DingTalk rich-text preservation, while the migration from ink to OpenTUI continues with a third batch of renderer PRs (#10368, #10343) and a long-running tracking issue (#8662) that remains the community's most discussed item. A wave of WebShell CI failures across multiple commits has triggered several bot-created bug reports, and the review/autofix infrastructure around PRs continues to mature with convergence-signal circuit breakers and execution-grade verification. Several P1 bugs also surfaced today around channel approval modes, WebShell message editing, auto-compaction recovery, and false crash banners in the VS Code companion.

## Releases

**v0.22.2-nightly.20260828.7357136dd1** ([release](https://github.com/QwenLM/qwen-code/releases/tag/v0.22.2-nightly.20260828.7357136dd1))
- fix(web-shell): restore saved session diffs ([#10093](https://github.com/QwenLM/qwen-code/pull/10093))
- fix(channels): preserve DingTalk rich-text multi-line content

## Hot Issues

1. **[#8662 — Migrate TUI rendering layer from ink to OpenTUI (tracking)](https://github.com/QwenLM/qwen-code/issues/8662)** — The 7,000-line patch against ink 7 is a structural liability. Community has weighed in with 11 comments over three weeks as the migration batches land. This is the single most important roadmap item for terminal UX.

2. **[#4063 — Core + CLI architecture review: 12 structural problems](https://github.com/QwenLM/qwen-code/issues/4063)** — The core type system is bound to `@google/genai` across 136 files. P0-level technical debt that continues to attract maintainer attention.

3. **[#9005 — Anthropic wire missing stream-safety protections the OpenAI wire has](https://github.com/QwenLM/qwen-code/issues/9005)** — P1 bug. The `anthropicContentGenerator` lacks protections already present in the OpenAI counterpart. Community flagged SDK pinning (`@anthropic-ai/sdk ^0.36.1` from Jan 2025) as a contributing factor.

4. **[#10227 — Custom model provider cannot converse](https://github.com/QwenLM/qwen-code/issues/10227)** — Moonshot-flavored JSON schema validation rejects `tools.function.parameters` with "properties must be an object". 7 comments, actively discussed — affects anyone using Moonshot-compatible endpoints.

5. **[#10369 — MCP Apps inline UI never renders in v0.22.2 Web Shell](https://github.com/QwenLM/qwen-code/issues/10369)** — Payload delivered, renderer present, but UI silently falls back; stale stdio servers make debugging hard. Opened today, P2, 3 comments already.

6. **[#10356/#10375/#10370/#10284/#10289 — Main CI failed: E2E Tests](https://github.com/QwenLM/qwen-code/issues?q=is%3Aissue+is%3Aopen+label%3Atype%2Fbug+%22Main+CI+failed%22)** — Five separate main-branch CI failures in the E2E workflow triggered tracked issues per commit. The `qwen-code-dev-bot` auto-triaging is working, but the volume signals instability in the test pipeline.

7. **[#10387 — fix(channels): apply channel approvalMode to non-webhook sessions](https://github.com/QwenLM/qwen-code/issues/10387)** — P1: channel-level `approvalMode` is accepted for all channels but only registered when a `webhooks` block exists. Interactive channels like DingTalk can declare approval modes that silently don't apply.

8. **[#10385 — fix(web-shell): message edit passes window-local turn index to session-global rewind snapshots](https://github.com/QwenLM/qwen-code/issues/10385)** — Review finding from PR #9811, split out as a separate P1 fix. Editing the last user message can rewind to the wrong snapshot when the window scoped differently than the session.

9. **[#10380 — Auto-compaction does not recover when gateway returns HTTP 413](https://github.com/QwenLM/qwen-code/issues/10380)** — Long-running sessions become permanently unusable when a reverse proxy's byte limit is lower than the model context window. Compaction retries hit the same 413 without recovery.

10. **[#10378 — Superseded daemon child fires onExit, showing false crash banner](https://github.com/QwenLM/qwen-code/issues/10378)** — In the VS Code companion, when a daemon is superseded, the old child still fires `onExit`, producing a misleading "Qwen Code stopped unexpectedly" banner.

## Key PR Progress

1. **[#9811 — refactor(vscode-ide-companion): complete the WebShell UI cutover](https://github.com/QwenLM/qwen-code/pull/9811)** — Massive cutover from legacy WebUI to Web Shell, mounting `WebShellWithProviders` against a workspace-scoped daemon. Spawned at least 6 follow-up issues (10372, 10373, 10378, 10385, and more) due to the 1500-line review scope cap forcing fixes to be split out.

2. **[#10368 — feat(cli): OpenTUI migration live-session and input batch](https://github.com/QwenLM/qwen-code/pull/10368)** — Third batch of the OpenTUI migration, adding streaming markdown heal, progressive MCP displays, and the live-session stream fold.

3. **[#10343 — docs(design): OpenTUI migration design and architecture notes](https://github.com/QwenLM/qwen-code/pull/10343)** — Design reference for the ink → OpenTUI migration: motivation with measurements, dependency-direction invariant, CI enforcement, and layer breakdown.

4. **[#10129 — feat(review): provision worktree dependencies from a host cache](https://github.com/QwenLM/qwen-code/pull/10129)** — Persistent review runners now use a host-level cache for worktree dependency provisioning instead of running `npm ci` per review, with per-lockfile cache maintenance.

5. **[#10098 — fix(core): decouple permissions.allow from tool registration via tools.eager](https://github.com/QwenLM/qwen-code/pull/10098)** — Splits the dual role of `permissions.allow` since #9829: it goes back to pure auto-approval, never removing/demoting/hiding a tool, with the other job moved to `tools.eager`.

6. **[#10122 — feat(autofix): consume the review convergence signals — a circuit breaker](https://github.com/QwenLM/qwen-code/pull/10122)** — Gives the autofix takeover loop an off-ramp via machine-readable convergence codes published to the PR review body, preventing infinite fix loops.

7. **[#10024 — feat(web-shell): share HTML artifacts through managed hosting](https://github.com/QwenLM/qwen-code/pull/10024)** — Guided provider flow for sharing artifacts: Cloudflare → Vercel → Netlify, each with the same Prepare → Authorize → Connect → Ready progress.

8. **[#9984 — feat(web-shell): add opt-in interactive browser terminal](https://github.com/QwenLM/qwen-code/pull/9984)** — Manually managed interactive terminal in the Web Shell right panel, gated by daemon `web_terminal` capability for version compatibility.

9. **[#9895 — feat(daemon): support scoped workspace memory tasks](https://github.com/QwenLM/qwen-code/pull/9895)** — Adds `project`/`user` targets to sessionless managed-memory remember/forget tasks across REST, ACP extension methods, and the TS daemon SDK.

10. **[#10259 — refactor(core): hold Goal sends to the caller's recursion budget](https://github.com/QwenLM/qwen-code/pull/10259)** — Audits where Goal turns are carved out of session ceilings; one exemption removed, others documented with justification.

## Feature Request Trends

- **OpenTUI migration is the dominant engineering trend** — tracking issue #8662 and three PR batches ([#10368](https://github.com/QwenLM/qwen-code/pull/10368), [#10343](https://github.com/QwenLM/qwen-code/pull/10343)) show a serious, multi-session investment to replace the 1,037-line ink patch with a clean OpenTUI architecture.
- **Hooks/events expansion continues** — [#10348](https://github.com/QwenLM/qwen-code/issues/10348) requests hooks to fire on agent-initiated questions (for external notifications), and [#10386](https://github.com/QwenLM/qwen-code/issues/10386) tracks supervisor hardening.
- **Code Mode / programmatic tool calling** — [#10377](https://github.com/QwenLM/qwen-code/issues/10377) proposes OpenAI Codex `CodeModeOnly`-style operation: model sees only `exec`/`wait` plus control-plane tools; ordinary tools become a `tools.*` JavaScript API in a restricted runtime.
- **Transport unification** — [#10061](https://github.com/QwenLM/qwen-code/issues/10061) pushes for one transport-agnostic ACP core across stdio/HTTP and upgrading the ACP SDK from 0.14.x to 1.4.x.
- **Channel UX enrichment** — [#10388](https://github.com/QwenLM/qwen-code/issues/10388) asks for native DingTalk interactive cards for tool permission requests; [#10354](https://github.com/QwenLM/qwen-code/issues/10354) asks for recovery of status cards after network failures.

## Developer Pain Points

- **CI instability** — Five E2E failures on main within 24 hours, all without test results reported. The auto-triage bot is working as designed, but the underlying pipeline has a reliability problem.
- **The 1500-line review scope cap is fragmenting fixes** — PR #9811's review produced at least 6 follow-up issues (10372, 10373, 10378, 10385, etc.) because fixes could not land in the overscope PR. Maintainers are explicitly deferring valid fixes to new issues, which increases latency for end users.
- **Channel approval modes that silently don't apply** — [#10387](https://github.com/QwenLM/qwen-code/issues/10387) shows configuration accepted but only honored in the webhook path, a confusing footgun for DingTalk users.
- **Gateway edge cases can permanently break sessions** — HTTP 413 from a reverse proxy ([#10380](https://github.com/QwenLM/qwen-code/issues/10380)) makes a session unrecoverable even after auto-compaction attempts to shrink payloads.
- **Custom provider incompatibilities** — JSON schema validation differences in Moonshot-flavored APIs ([#10227](https://github.com/QwenLM/qwen-code/issues/10227)) reveal assumptions baked into tool schema validation that don't match non-OpenAI providers.
- **MCP UI debugging is hard** — Silent fallbacks in the Web Shell MCP Apps UI ([#10369](https://github.com/QwenLM/qwen-code/issues/10369)) and stale stdio servers made a rendering failure nearly impossible to diagnose without deep internals knowledge.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-28

```markdown
## 1. Today's Highlights

A major provider-neutrality push landed this week, with 18 DeepSeek-exclusive gates identified and a batch of fixes already merged. The community is actively expanding provider-native web search across DeepSeek, Qwen, Kimi, Z.AI, and MiMo in parallel PRs, signaling a strategic move toward multi-provider parity. Concurrently, a critical UX gap was addressed with a series of merges that surface MCP/plugin boot progress as a visible session set, reducing "silent waiting" confusion.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

### [#5620](https://github.com/Hmbown/CodeWhale/issues/5620) — Context pressure warning is transient and the agent doesn't react
- **Author:** ronohara | **Comments:** 9  
- **Why it matters:** A critical reliability gap — the context pressure signal fires and disappears without the agent adjusting behavior, defeating a key safety mechanism.  
- **Community reaction:** Commenters confirm silent context degradation and debate whether the warning should change agent behavior or merely persist.

### [#5588](https://github.com/Hmbown/CodeWhale/issues/5588) — 18 DeepSeek-exclusive gates that should be provider-neutral
- **Author:** Hmbown | **Comments:** 6  
- **Why it matters:** This is the strategic linchpin issue. The audit found 2,281 lines across 279 files, with 18 behavior-gating occurrences that should be provider-agnostic. First fixes already landed (NVIDIA NIM env leak, others).  
- **Community reaction:** High interest; contributors noting the "~1,760 legit" lines make this a surgical, low-risk cleanup.

### [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) — EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)
- **Author:** aboimpinto | **Comments:** 18  
- **Why it matters:** The umbrella epic for breaking up the monolith `codewhale-tui` crate (86% of workspace, recompiles as one unit). All sub-epics and FEATs report here.  
- **Community reaction:** Most-commented issue; the epic is the resolution path for the build-time tax everyone's feeling.

### [#5249](https://github.com/Hmbown/CodeWhale/issues/5249) — Epic: v0.9.5 build-time lane — stop the monolith tax
- **Author:** Hmbown | **Comments:** 2  
- **Why it matters:** Quantifies the pain: 682,959-line, 620-file crate recompiles as one unit; integration tests each rebuild; commits invalidate build-SHA stamps.  
- **Community reaction:** Low comment count but high resonance given every PR's CI time.

### [#5625](https://github.com/Hmbown/CodeWhale/issues/5625) — Non-blocking "pending user input" peek tool
- **Author:** ronohara | **Comments:** 2  
- **Why it matters:** Proposes a lightweight tool that lets agents check for mid-turn user guidance without blocking, enabling better human-in-the-loop collaboration.  
- **Community reaction:** Proposal status; early feedback positive, potential design discussion on tool surface hygiene.

### [#5617](https://github.com/Hmbown/CodeWhale/issues/5617) — Background git probes hold `.git/index.lock`, breaking commits
- **Author:** LmeSzinc | **Comments:** 3  
- **Why it matters:** Real developer pain — internal read-only probes running `git status` occasionally lock the repo, causing user `git commit` failures. Fixed in the closed state, but root cause analysis continues.  
- **Community reaction:** Promptly validated and fixed; spawned follow-up #5618 for deeper gitoxide migration.

### [#5618](https://github.com/Hmbown/CodeWhale/issues/5618) — Replace internal git CLI reads with gix (gitoxide)
- **Author:** LmeSzinc | **Comments:** 2  
- **Why it matters:** Follows the lock issue — kills process spawn overhead and lock interference entirely. Design discussion around migration risk.  
- **Community reaction:** Contributor-driven; likely to become a real epic given the breadth (badges, context, tools).

### [#5579](https://github.com/Hmbown/CodeWhale/issues/5579) — Plugin UX parity with Claude Code
- **Author:** Hmbown | **Comments:** 3  
- **Why it matters:** User ask: proactive recommendations, reload discoverability, hot-reload. Audited current state, gap analysis shows CLI parity but UX gaps.  
- **Community reaction:** Open; community comparing against Claude Code's plugin discoverability patterns.

### [#5630](https://github.com/Hmbown/CodeWhale/issues/5630) — Runtime store owner lock blocks multiple sessions
- **Author:** M-Maciej | **Comments:** 2  
- **Why it matters:** v0.9.12 integration introduced a machine-global single-owner lock that hard-fails every session after the first. Closed (fixed) — but this pattern of regression from the runtime unification is what the community watches.  
- **Community reaction:** Promptly patched; regression-testing emphasis.

### [#5681](https://github.com/Hmbown/CodeWhale/issues/5681) — Extend provider-native web search to DeepSeek, Qwen, Kimi, Z.AI, MiMo
- **Author:** h3c-hexin | **Comments:** 0  
- **Why it matters:** The umbrella for today's web-search PR batch. Directs work across 5 providers; created today, quickly picked up by the PR wave.  
- **Community reaction:** Fresh; PRs #5682–#5687 already landing against it.

## 4. Key PR Progress

### [#5683](https://github.com/Hmbown/CodeWhale/pull/5683) — feat(web): DeepSeek native search adapter
- **Author:** h3c-hexin  
- **Summary:** Sends the DeepSeek Responses `web_search` tool contract through the authenticated transport; keeps custom-compatible endpoints fail-closed.  
- **Significance:** First-party DeepSeek V4 route parity.

### [#5684](https://github.com/Hmbown/CodeWhale/pull/5684) — feat(web): Qwen native search adapter
- **Author:** h3c-hexin  
- **Summary:** Enables `qwen3.8-max`, `qwen3.7-plus`, `qwen3.7-max` on ModelStudio Token Plan via Responses Harness; string `tool_choice: "required"`.  
- **Significance:** Brings Alibaba's newest models into the parity fold.

### [#5685](https://github.com/Hmbown/CodeWhale/pull/5685) — feat(web): Z.AI and BigModel native search
- **Author:** h3c-hexin  
- **Summary:** `search-prime` for `api.z.ai`, `search_std` for `open.bigmodel.cn`; Coding Plan paths fail-closed.  
- **Significance:** Structured parity on GLM product lines.

### [#5686](https://github.com/Hmbown/CodeWhale/pull/5686) — feat(web): Moonshot and Kimi native search
- **Author:** h3c-hexin  
- **Summary:** K3 Formula tools/fibers, legacy K2.6 `$web_search`, Kimi Code membership `/search`; bounds execution to four rounds and eight total tool calls.  
- **Significance:** Security-conscious adaptation of provider-controlled execution.

### [#5687](https://github.com/Hmbown/CodeWhale/pull/5687) — feat(web): Xiaomi MiMo native search
- **Author:** h3c-hexin  
- **Summary:** `web_search` plugin for `mimo-v2.5-pro` and `mimo-v2.5`; bounded search, structured annotations, citation requirements.  
- **Significance:** Completes the five-provider batch; verifiable citations enforced before use.

### [#5682](https://github.com/Hmbown/CodeWhale/pull/5682) — fix(web): enforce native search constraints before fallback
- **Author:** h3c-hexin  
- **Summary:** Domain constraints now applied inside the backend chain; empty native attempts fall through to configured backend with explicit `no_usable_results` and fallback receipts.  
- **Significance:** Correctness fix preventing silent empty-search responses.

### [#5677](https://github.com/Hmbown/CodeWhale/pull/5677) — feat(tui): rescue MCP and plugin session boot
- **Author:** Hmbown  
- **Summary:** Rescues #5658 onto main, preserving four original commits with metadata intact. Surfaces plugin discovery + MCP servers as session-owned boot state; names connecting servers on first frame.  
- **Significance:** Direct answer to the "working · 22s · 0 steps" silent-boot UX complaint.

### [#5658](https://github.com/Hmbown/CodeWhale/pull/5658) — feat(tui): surface MCP and plugin boot as a session set (CLOSED — superseded)
- **Author:** Hmbown  
- **Summary:** Original implementation of the boot-state surfacing; sequential `connect_all`, failures were toast-only. Superseded by the rescue PR.  
- **Significance:** Demonstrates iterative quality: original merged then replaced with preserved-history version.

### [#5679](https://github.com/Hmbown/CodeWhale/pull/5679) — fix(chat): keep tool result batches contiguous
- **Author:** Hmbown  
- **Summary:** Assistant tool-call batches now followed by one contiguous, complete tool-result run; defers tool-result images, rejects duplicate IDs, strips incomplete/orphan tool calls.  
- **Significance:** Reliability fix for chat integrity — prevents split batches and duplicate execution.

### [#5666](https://github.com/Hmbown/CodeWhale/pull/5666) — chore(tui): gate audited test-only helpers
- **Author:** wuisabel-gif  
- **Summary:** Converts 13 audited test-only helper surfaces from `#[allow(dead_code)]` to `#[cfg(test)]`; part of the approved first slice of #5587's dead-code sweep.  
- **Significance:** Build hygiene; reduces stale-allow drift.

### [#5669](https://github.com/Hmbown/CodeWhale/pull/5669) — chore(deps): update nixpkgs
- **Author:** serephus  
- **Summary:** Fixes `nix run github:hmbown/codewhale#codewhale` (crates.io 403 on current version); adds monthly Dependabot for nixpkgs; replaces deprecated `stdenv.isLinux`.  
- **Significance:** Unblocks Nix users; recurring maintenance win.

### [#5680](https://github.com/Hmbown/CodeWhale/pull/5680) — test(config): retire published fingerprint note gate (CLOSED)
- **Author:** Hmbown  
- **Summary:** Removes stale release-note contract forcing the v0.9.11 migration note into every current-version section.  
- **Significance:** Changelog hygiene; keeps behavioral fingerprint tests intact.

## 5. Feature Request Trends

1. **Provider-native web search expansion** — Clearly the dominant direction this week (5 PRs across 5 providers, umbrella issue #5681). Expect continued work on search-verification quality and citation enforcement.
2. **TUI per-block actions & transcript interactions** — `/copy` for last output (#5668), focused-block actions `y/Y/Enter/r` (#5551), attention UX (#4402). The TUI is maturing from viewer to interactive workspace.
3. **Context-cost transparency** — Token attribution to tool catalog and MCP server announcements (#5553) shows demand for per-turn cost visibility.
4. **Agent-runtime human-in-the-loop tools** — Non-blocking "pending user input" peek (#5625) signals desire for more collaborativemonitoring patterns.

## 6. Developer Pain Points

1. **Build-time monolith tax** — The `codewhale-tui` crate's size (682,959 lines) makes every edit, test, and commit slow. Epic #5249 and decomposition umbrella #5316 are the community's top structural priority.
2. **Git CLI interference** — Background probes locking `.git/index.lock` (#5617) and process-spawn overhead (#5618) are recurring friction; gitoxide migration is the planned cure.
3. **Silent operation / lack of feedback** — "Working · 22s · 0 steps" and toast-only failure reporting (#5658/#5677) drew sharp UX criticism; the TUI boot-state surfacing directly addresses it.
4. **Test-infrastructure fragility** — Stack overflow in a confirm/toast test helper (#5585) and 25 integration-test binaries each recompiling (#5249) suggest test-dev loop friction.
5. **Dependency noise** — Multiple Dependabot PRs (futures-util, async-trait, uuid, jsonschema, rio-vt, next, typescript, tailwindcss) are healthy but keep CI busy; nixpkgs breaking `nix run` (#5669) shows supply-chain fragility on niche platforms.
6. **Regression risk in runtime unification** — The machine-global store owner lock (#5630) demonstrated that the v0.9.12 runtime merge introduced new failure modes; community is watching for follow-on issues.
```

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*