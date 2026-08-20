# AI CLI Tools Community Digest 2026-08-20

> Generated: 2026-08-20 01:18 UTC | Tools covered: 9

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
**Date:** 2026-08-20

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem is in a **stabilization and hardening phase** following a period of rapid feature expansion. Across all major tools, community attention has shifted from "what can the agent do" to "can I trust what the agent did" — with recurring themes of silent failures, sandbox enforcement inconsistencies, and state-management reliability. **Security hardening** is a dominant concern, with all major tools shipping fixes that restrict agent capabilities (Git command reclassification, credential sanitization, consent prompts). **Cross-tool standardization** is emerging as a powerful community force, led by the AGENTS.md movement that spans Claude Code, Codex, Cursor, and Amp. Windows platform support remains the **universal weak spot** — every tool except Pi shows Windows-specific reliability gaps. Model behavior and output quality continue to generate friction, with users of multiple tools reporting suboptimal serialization strategies, token accounting errors, and unexpected tone/coherence issues.

---

## 2. Activity Comparison

| Tool | Hot Issues (24h) | PRs (24h) | Releases (24h) | Notable Release |
|------|:-:|:-:|:-:|------|
| **Claude Code** | 10 | 1 | 2 (v2.1.236, v2.1.237) | Concise output style; `ANTHROPIC_DEFAULT_MODEL` |
| **OpenAI Codex** | 10 | 10 merged | 1 (rust-v0.149.0-alpha.2) | Security fixes: Git command reclassification, plugin Git isolation |
| **Gemini CLI** | 10 | 10 (mostly open) | 2 (v0.56.0, v0.57.0-preview.0) | Cloud Workstations OAuth fix; IDE connection directory fix |
| **GitHub Copilot CLI** | 10 | 0 | 4 (v1.0.81-2 through -5) | Pending prompt copy fix |
| **Kimi Code CLI** | 1 | 0 | 0 | — (quiet period) |
| **OpenCode** | 10 | 10 | 0 | — |
| **Pi** | 11+ | 11 merged | 0 | — |
| **Qwen Code** | 10 | 10 | 1 (v0.21.14) | `qwen sessions ps` live-session registry |
| **DeepSeek TUI** | 10 | 10 | 0 (v0.9.10 in PR) | Memory retention, durable approvals, i18n migration |

**Notable patterns:**
- **Codex** had the most active PR-merge day (10 merged), focused on security.
- **Copilot CLI** shipped the most releases (4 patches) but zero PRs — maintainer-driven iteration.
- **Kimi Code** is effectively dormant today — lowest activity across all metrics.
- **Claude Code** leads in issue engagement (4,671 👍 on AGENTS.md alone).
- **OpenCode** and **Pi** are shipping substantive PRs despite no releases — momentum building toward their next launches.

---

## 3. Shared Feature Directions

### 3.1 Cross-Tool Configuration Standards
- **Tools:** Claude Code (#6235), Codex, Gemini CLI (implicit), Copilot CLI (implicit)
- **Need:** Universal `AGENTS.md` format replacing tool-specific configs (CLAUDE.md, etc.). 4,671 👍 on Claude Code's issue is the strongest signal in the ecosystem.
- **Status:** Claude Code issue closed — likely shipping soon.

### 3.2 Sandbox/Network Isolation Consistency
- **Tools:** Claude Code (#84634, #77045), Copilot CLI (#4521, #4522), Gemini CLI (#19873)
- **Need:** Uniform enforcement of deny rules across all tools (Read vs. Bash inconsistencies); network allowlist bypasses; explicit overrides of user config.
- **Status:** Multiple open security gaps; Copilot CLI's sandbox forcing is the most acute (7 upvotes in 48h).

### 3.3 Session/State Persistence Control
- **Tools:** Pi (#5263, #8376), Claude Code (`ANTHROPIC_DEFAULT_MODEL`), Qwen Code (#9454), Gemini CLI (chat rename)
- **Need:** Fine-grained control over what persists across sessions (model selection, thinking levels, settings) vs. what's ephemeral.
- **Status:** Pi shipped session-scoped models; others still working on it.

### 3.4 Model Cost/Efficiency Transparency
- **Tools:** Codex (#35050), OpenCode (#43367, #37852), Qwen Code (#9309, #9454), DeepSeek TUI (#5518)
- **Need:** Accurate token accounting, model-call batching, cost transparency, and quarantine against silent failures that waste tokens.
- **Status:** Widespread pain; Codex's 27–45% batching savings is the most actionable data point.

### 3.5 Process Lifecycle Management
- **Tools:** Codex (#25744, #38754), Gemini CLI (#25166), OpenCode (#39876), Pi (#8374)
- **Need:** Cleanup of orphaned subagents, MCP servers, helper processes; avoidance of zombie children degrading long-running sessions.
- **Status:** Both Codex and Gemini have P1/P2 issues; systemic across platforms.

### 3.6 Subagent/Delegation Reliability
- **Tools:** Gemini CLI (#22323, #21409), Qwen Code (#9509), Claude Code (#80988), DeepSeek TUI (#1425), OpenCode (#37852)
- **Need:** No false "success" reports when subagents fail; visibility into subagent trajectories; configurable delegation policies.
- **Status:** Gemini's false-success bug (#22323) and Qwen's silent-launch-failure (#9509) are critical trust issues.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | Codex | Gemini CLI | Copilot CLI | OpenCode | Qwen Code | Pi | DeepSeek TUI |
|-----------|------------|-------|------------|-------------|----------|-----------|-----|---------------|
| **Primary user** | General devs, power users | Enterprise, automation | Google ecosystem, research | GitHub enterprise | Indie devs, experimentation | Alibaba ecosystem, CI | TUI enthusiasts, privacy-focused | TUI power users, Chinese devs |
| **Key feature focus** | Agent autonomy, IDE integration | Security, Windows stability | Subagent orchestration, voice mode | Sandbox, enterprise governance | Subscription billing, v2 web UI | CI/CD, multi-agent teams | Session control, extensions | i18n, release hardening |
| **Technical approach** | Node.js, agent-first | Rust, plugin system | Go, subagent-heavy | Rust, sandboxed | TypeScript, web-first | Rust, daemon-based | Rust, TUI-first | Rust, TUI-first |
| **Model focus** | Claude models | GPT-5.x | Gemini 3.x | GH Copilot models | Multi-model (BYOK) | Qwen + multi-model | Multi-model (BYOK) | Multi-model (BYOK) |
| **Distinctive strength** | Cross-tool standardization leadership | Security hardening velocity | Subagent ecosystem breadth | Enterprise governance | Billing transparency (under pressure) | CI/CD reliability | Extension API surface | Chinese localization |
| **Current weakest area** | Windows reliability, model output quality | Windows stability, process leaks | Subagent trust, shell hangs | Sandbox overrides, OAuth churn | Billing/quota trust | Token accounting accuracy | Windows support, silent failures | Version-upgrade regressions |

**Key differentiators:**
- **Claude Code** leads community sentiment on standardization and has the strongest brand recognition outside enterprise.
- **Codex** is the security-hardening velocity leader — 10 merged security PRs in a single day is unprecedented.
- **Gemini CLI** has the most prominent subagent ecosystem (codebase_investigator, browser_agent) but the most acute reliability trust issues.
- **Copilot CLI** is the enterprise governance play — sandbox, permissions, managed policies — but is fighting trust erosion from config overrides.
- **OpenCode** is the billing/usage transparency battleground — Go subscription metering bugs are its #1 community pain.
- **Qwen Code** is the enterprise CI/CD specialist with deep GitHub Actions integration.
- **Pi** and **DeepSeek TUI** serve the TUI-first power user niche, with Pi growing its extension API and DeepSeek TUI executing a large i18n migration.

---

## 5. Community Momentum & Maturity

### Rapidly Iterating (High Momentum)
- **Codex** — 10 PRs merged in 24h; aggressive security focus; Rust rewrite progressing; alpha releases flowing.
- **Claude Code** — 2 releases/day cadence; highest community engagement (4,671 👍 issue); prominent in standards discussions.
- **Gemini CLI** — 10 PRs open; preview releases weekly; subagent ecosystem expanding; voice mode under active development.
- **Pi** — 11 PRs merged (highest count); consistent weekly releases; strong extension-API investment.
- **Qwen Code** — 1 release + 10 PRs; heavy CI/CD investment; live-session registry ships.

### Steady (Moderate Momentum)
- **Copilot CLI** — 4 patch releases but 0 community PRs; maintainer-driven iteration; sandbox and OAuth regressions are accumulating.
- **OpenCode** — 10 PRs, 0 releases; v2 stabilization in progress; billing controversy could accelerate or derail momentum.
- **DeepSeek TUI** — 10 PRs, no release; 76-commit release lane waiting; i18n epic shows sustained collaboration.

### Dormant / Consolidating
- **Kimi Code** — 1 closed issue, 0 PRs, 0 releases. Effectively inactive today. The only tool in this category.

### Maturity Assessment
- **Most mature:** Claude Code (largest user base, standard-bearer, active release train), Codex (security-hardened, Rust foundation), Copilot CLI (enterprise governance model).
- **Up-and-coming:** Pi (extension ecosystem growth), OpenCode (web UI v2), Qwen Code (CI/CD tooling).
- **At risk:** Copilot CLI (trust erosion from config overrides), Kimi Code (community inactivity).

---

## 6. Trend Signals

### Signal 1: "Show Your Work" — Transparency as a Feature
- Communities across **all tools** are demanding visibility into what agents did and why: subagent trajectories (Gemini #22598), token accounting (Codex #35050), silent-failure quarantines (Qwen #9509, OpenCode #37852), and change logs (Claude Code #80988). **Trust is the new killer feature.**

### Signal 2: From Autonomy to Guardrails
- The pendulum has swung from "let agents do everything" to "agents should fail loudly and ask permission." Evidence: Claude Code's data-loss incident (#80660), Codex's Git safety reclassification, Gemini's consent prompts (#28863), and OpenCode's subagent failure detection. **Guardrails are now a differentiator, not a constraint.**

### Signal 3: Cross-Tool Standardization Is a Movement
- The **AGENTS.md** issue (#6235) is the highest-voted issue across any tool today. Developers are tired of per-tool configs. Expect more standardization pushes on: session formats, tool-call schemas, and permission policies.

### Signal 4: Windows Is the Support Battleground
- **Every tool** except Pi shows Windows-specific reliability gaps in their top-10 issues: Codex (browser plugin, path handling), Claude Code (auto-update, rendering), Gemini CLI (implicit), Copilot CLI (native messaging). **First-class Windows support is a market opportunity.**

### Signal 5: Billing/Metering Trust Is Fragile
- OpenCode's Go subscription issues (#43409, #43416, #43424) and Claude Code's agent-hours requests point to a broader need: **users want to understand what they're paying for, in real time.**

### Signal 6: Process Hygiene Is Undervalued
- Zombie MCP servers, orphaned browser processes, and temp-file leaks (Codex #25744/#38754, OpenCode #39876, Gemini #25166) are recurring across platforms. **Long-running session stability is a systemic weakness** users care about as much as feature velocity.

### Signal 7: Model Efficiency Feedback Loops
- Codex users demonstrated 27–45% cost savings via explicit batching (#35050). Qwen Code's token-count bugs and DeepSeek TUI's compaction firing at 85K despite 327K context show that **model-layer optimization is as important as tool-layer optimization.** Expect model vendors to be pressured for more transparent serialization decisions.

### Signal 8: Chinese-Language Community Growth
- DeepSeek TUI's full Chinese docs localization epic (#5482) and Pi's CJK rendering bugs (#8382) suggest a **growing Chinese-speaking user base** that tools are only beginning to serve properly.

---

## Summary for Decision-Makers

- **If you're choosing a tool:** Claude Code has the strongest ecosystem and community momentum; Codex is the security-hardening leader; Copilot CLI is the enterprise governance choice but is fighting trust issues.
- **If you're building tools:** Focus on transparency (token usage, subagent trajectories, silent-failure quarantine), Windows parity, and process hygiene. These are the least-served areas with the most community demand.
- **If you're evaluating vendors:** Watch OpenCode's billing resolution, Copilot CLI's sandbox policy fixes, and Gemini CLI's subagent reliability — each is a potential trust-breaking or trust-making event.


---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Date:** 2026-08-20 | **Source:** [anthropics/skills](https://github.com/anthropics/skills)

---

## 1. Top Skills Ranking (Most-Discussed PRs)

### 1.1 skill-creator: run_eval.py Recall Fix (#1298)
- **Author:** [MartinCajiao](https://github.com/MartinCajiao) | **Status:** Open
- **Link:** [PR #1298](https://github.com/anthropics/skills/pull/1298)
- **Functionality:** Fixes the critical `run_eval.py` bug (referenced by Issue #556) that causes the skill optimization loop to report `recall=0%` for every description, rendering the evaluation pipeline moot. Addresses Windows stream reading, trigger detection, and parallel worker issues.
- **Discussion Highlights:** This is the most active PR, directly resolving a blocker that affects all skill creators who rely on automated evaluation metrics — a foundational developer-experience issue.

### 1.2 Add document-typography Skill (#514)
- **Author:** [PGTBoos](https://github.com/PGTBoos) | **Status:** Open
- **Link:** [PR #514](https://github.com/anthropics/skills/pull/514)
- **Functionality:** Addresses typographic quality in AI-generated documents — orphan word wrap, widow paragraphs, and numbering misalignment — issues that commonly degrade the professional polish of Claude-generated output.
- **Discussion Highlights:** High community interest given the universality of the problem. Applicants noted these issues affect *every* document Claude generates, regardless of domain.

### 1.3 Add ODT Skill — OpenDocument Creation & Parsing (#486)
- **Author:** [GitHubNewbie0](https://github.com/GitHubNewbie0) | **Status:** Open
- **Link:** [PR #486](https://github.com/anthropics/skills/pull/486)
- **Functionality:** Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods, .odf), including ODT-to-HTML parsing. Triggers on "LibreOffice", "OpenDocument", and ISO-standard format requests.
- **Discussion Highlights:** Signals demand for expanding beyond the existing DOCX/PDF skillset to cover open-source document ecosystems.

### 1.4 Improve frontend-design Skill Clarity (#210)
- **Author:** [justinwetch](https://github.com/justinwetch) | **Status:** Open
- **Link:** [PR #210](https://github.com/anthropics/skills/pull/210)
- **Functionality:** Revises the `frontend-design` skill for clarity and actionability, ensuring every instruction is executable within a single conversation and sufficiently specific to steer Claude's behavior deterministically.
- **Discussion Highlights:** Resonates with the broader community push for skills that read as operational instructions — not human documentation, directly connecting to Issue #202's criticism of verbose skill design.

### 1.5 Add skill-quality-analyzer & skill-security-analyzer (#83)
- **Author:** [eovidiu](https://github.com/eovidiu) | **Status:** Open
- **Link:** [PR #83](https://github.com/anthropics/skills/pull/83)
- **Functionality:** Two meta-skills for the marketplace: a quality analyzer evaluating skills across five dimensions (structure, documentation, examples, resources) and a security analyzer for vulnerability assessment.
- **Discussion Highlights:** Reflective of growing community concern around Skill quality standards and security — topics also surfacing in Issue #492 (trust boundary abuse) and Issue #1175 (SharePoint security).

### 1.6 Add testing-patterns Skill (#723)
- **Author:** [4444J99](https://github.com/4444J99) | **Status:** Open
- **Link:** [PR #723](https://github.com/anthropics/skills/pull/723)
- **Functionality:** A comprehensive testing skill covering Testing Trophy philosophy, unit tests (AAA, naming, edge cases), React component testing with Testing Library, and full-stack coverage patterns.
- **Discussion Highlights:** Addresses a consistent community gap — systematic test generation and testing strategy — a recurring theme from the Issues section.

### 1.7 Add ServiceNow Platform Skill (#568)
- **Author:** [Vanka07](https://github.com/Vanka07) | **Status:** Open
- **Link:** [PR #568](https://github.com/anthropics/skills/pull/568)
- **Functionality:** A broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD, CSM, SPM/PPM, and Vulnerability/Incident Response.
- **Discussion Highlights:** Demonstrates enterprise platform demand as a major Skills driver, mirroring the SAP predictive-analytics skill interest (#181) and the SharePoint engagement pattern (#1175).

### 1.8 Add pyxel Retro Game Development Skill (#525)
- **Author:** [kitao](https://github.com/kitao) | **Status:** Open
- **Link:** [PR #525](https://github.com/anthropics/skills/pull/525)
- **Functionality:** Wraps pyxel-mcp (an MCP server) to enable retro/pixel-art/8-bit game creation in Python, with a write → run → capture → iterate workflow.
- **Discussion Highlights:** Represents the creative/game-development niche within the Skills ecosystem, showing cultural and entertainment use-cases.

---

## 2. Community Demand Trends (From Issues)

1. **Skill-Creation Infrastructure Stability (#556, #202):** The highest-priority demand is fixing `run_eval.py` and modernizing `skill-creator` itself — the tooling that powers all other Skills. The community wants the meta-layer to be reliable before investing in new skills.

2. **Security & Trust Boundaries (#492, #1175):** A security review surfaced that community skills distributed under the `anthropic/` namespace enable trust-boundary abuse — privileged permissions may be granted to unofficial code. Enterprises like SharePoint-driven organizations are also concerned about access control embedded in SKILL.md files.

3. **Enterprise/Platform Integration (#228, #1175):** Requests for org-wide skill sharing within Claude.ai, and system integration with enterprise platforms (SharePoint, ServiceNow, SAP), show corporate workflows are a primary adoption driver.

4. **Testing & Code Quality (#723, #1385):** Communities actively seek testing-pattern skills and reasoning quality-gate pipelines (pre-task calibration → adversarial review → delivery verification).

5. **Context Window Efficiency (#1487, #1329):** The `claude-api` skill's 156k-token injection issue and proposals for compact-memory (symbolic notation for agent state) reflect deep concern over context conservation.

6. **Document Format Expansion (#486, #12, #538):** Beyond DOCX and PDF, the community is pushing for LibreOffice/OpenDocument support, plus reliability fixes in existing document manipulation skills (whitespace corruption, case-sensitivity issues).

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

- **document-typography (#514)** — Addresses visible quality issues in every AI-generated document; high perceived value, moderate complexity.
- **testing-patterns (#723)** — Well-structured, comprehensive, and directly addresses the test-generation demand trend.
- **ODT Skill (#486)** — Broad format support for the open-source document ecosystem; complements the existing office-format suite.
- **skill-quality-analyzer + skill-security-analyzer (#83)** — Meta-skills that could elevate the whole ecosystem's quality bar; likely deployment alongside the upcoming spec-compliance discussions (see #1538).
- **ServiceNow (#568)** — High enterprise appeal; could be a flagship example of platform-specific skills.
- **self-audit / reasoning quality gate (#1367 import, #1385 proposal)** — Evidenced by the recent activity around mechanical verification and deliverable validation; aligns with the quality-gate trend.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for a reliable, secure, and high-quality *meta-layer* — fixing and improving the skill-creation and evaluation toolchain itself — while diversifying new Skills toward enterprise integration, automated testing, and document formatting with strict quality assurance.**

---

# Claude Code Community Digest — 2026-08-20

## Today's Highlights

Two releases shipped today: v2.1.237 fixes prompt caching for LLM gateway/custom base URL users and introduces a "Concise" output style; v2.1.236 adds `ANTHROPIC_DEFAULT_MODEL` for per-session model defaults plus cross-session `notify_when_idle` messages. The community conversation is increasingly focused on standardization (AGENTS.md support), model behavior concerns (Opus 4.8/5.0 quality), and a cluster of reliability/regression bugs across Windows, auto-update, and sandbox enforcement.

## Releases

**v2.1.237**
- Fixed prompt caching for sessions using an LLM gateway or custom base URL
- Added built-in "Concise" output style: Claude leads with results, skips preamble/narration while doing thorough work. Selectable via Output style in `/config`

**v2.1.236**
- Added `ANTHROPIC_DEFAULT_MODEL` environment variable — sets startup model for new sessions; `/model` pick overrides and persists across restarts (unlike legacy `ANTHROPIC_MODEL`)
- Added `notify_wild_idle` to cross-session `SendMessage`: enables one Claude Code session to message another

## Hot Issues

1. **[#6235 — Feature: Support AGENTS.md](https://github.com/anthropics/claude-code/issues/6235)** *(CLOSED, 361 comments, 4,671 👍)*  
   Community rallying cry for adopting the emerging `agents.md` standard shared by Codex, Amp, Cursor. `CLAUDE.md` is seen as too tool-specific. Massive engagement signals strong desire for cross-tool compatibility.

2. **[#77136 — Opus 4.8 toxic language / Opus 5.0 incoherence](https://github.com/anthropics/claude-code/issues/77136)** *(OPEN, 31 comments, 197 👍)*  
   User reports Opus 4.8's linguistic style is "incessantly toxic/unpleasant," while 5.0 "drives incoherence into the stratosphere." High 👍 count indicates broad dissatisfaction with model output quality/tone across versions.

3. **[#80988 — `heron_brook` prompt injects restrictive delegation policy, no opt-out](https://github.com/anthropics/claude-code/issues/80988)** *(OPEN, 30 comments, 57 👍)*  
   v2.1.219 silently injects "Do not call the AgentTool unless the user requested it" for Opus 5 only, overriding user-configured delegation policy with no opt-out. Community sees this as unannounced behavior change violating configuration expectations.

4. **[#84352 — CVP-approved org still receives cyber-safeguard blocks](https://github.com/anthropics/claude-code/issues/84352)** *(OPEN, 127 comments)*  
   Previously Cyber Verification Program-approved organization now blocked again despite portal showing "Under review." Long thread of affected users; trust and compliance-sensitive.

5. **[#80660 — Data loss: agent deleted ~650 skill folders via robocopy /MOVE then Remove-Item](https://github.com/anthropics/claude-code/issues/80660)** *(CLOSED, 2 comments)*  
   Agent ran unverified robocopy `/MOVE` followed by `Remove-Item -Recurse -Force`, permanently deleting ~650 skill folders. Closed but a stark reminder of the damage autonomy can cause without verification gates.

6. **[#88054 — `claude remote-control` exits on 401 after exactly 24h; OAuth not refreshed](https://github.com/anthropics/claude-code/issues/88054)** *(OPEN, 1 comment)*  
   Server-side token refresh failure kills every attached session daily. Critical for anyone using remote-control workflows; expected to be fixed quickly.

7. **[#87575 — Auto mode system prompt causes /rewind to silently fail on Bash-edited files](https://github.com/anthropics/claude-code/issues/87575)** *(OPEN, 7 comments)*  
   Auto mode tells model to edit files with Bash, silently defeating `/rewind` (WSL2, v2.1.234). Undo/rollback reliability is a core expectation; dangerous when silent.

8. **[#84634 — Read tool ignores permissions.deny rules while Bash enforces sandbox](https://github.com/anthropics/claude-code/issues/84634)** *(OPEN, 1 comment)*  
   `Read` tool bypasses active deny rules on same paths that `Bash` correctly restricts. Direct security/consistency gap in the permission model.

9. **[#77045 — Sandbox allowedDomains not enforced on macOS (proxy CONNECT bypass)](https://github.com/anthropics/claude-code/issues/77045)** *(OPEN, 1 comment)*  
   Built-in proxy can CONNECT to non-allowlisted hosts despite sandbox config. Network isolation gap on macOS; security-relevant.

10. **[#65093 — Transient network loss recorded as persistent install_failed, banner never clears](https://github.com/anthropics/claude-code/issues/65093)** *(OPEN, 4 comments, reproduced)*  
    Windows auto-update: brief network blip permanently marks install as failed; "Auto-update failed" banner persists. Regressions here erode confidence in the update channel.

## Key PR Progress

*Only 1 PR in last 24h, but here’s the notable one plus broader context:*

- **[#77977 — docs(plugin-dev): document skipLfs marketplace sources](https://github.com/anthropics/claude-code/pull/77977)** *(OPEN)*  
  Documentation-only: adds `skipLfs` option for `github` and `git` marketplace sources, with examples for GitHub shorthand and generic Git URL sources. Refs #63035. Low-risk, improves plugin-dev experience.

*Notable from the wider window (key PRs shaping the project):*
- (No other PRs updated in the last 24h — activity concentrated on issues and releases.)

## Feature Request Trends

1. **Cross-tool standards (AGENTS.md)** — Strongest signal (#6235): users want a universal agent config format rather than tool-specific files.
2. **Model/session control** — Requests for per-session model defaults, named sessions, and agent-hours (work-capacity metric) show demand for finer-grained operational control.
3. **Remote/VPS management** — Remote sessions that can’t make outbound SSH (#84967) block direct server workflows; likely to grow with remote usage.
4. **Agent delegation transparency** — The `heron_brook` complaint typifies a broader wish: any injected behavioral policy should be configurable and opt-ouTable.
5. **Cross-session communication** — `notify_when_idle` landing in v2.1.236 responds directly to earlier community asks; expect more inter-session orchestration features.

## Developer Pain Points

1. **Silent behavioral changes** — Prompt injections overriding delegation policy (#80988), auto-mode Bash edits breaking /rewind (#87575): users want change visibility and escape hatches.
2. **Security/sandbox inconsistencies** — `Read` ignoring deny rules (#84634), macOS proxy bypass (#77045): uneven enforcement erodes trust in the permission model.
3. **Windows reliability** — Rendering corruption (#79025), auto-update false failures (#65093), always-on-top desktop bug (#88093): recurring Windows-native issues.
4. **Model output quality** — Opus 4.8/5.0 language & coherence complaints (#77136): output style still a major friction point.
5. **Data-loss risks** — Unverified destructive file operations (#80660) and VM kernel boot failures (#39636): users demand stronger guardrails around destructive actions.
6. **Token refresh / auth failures** — 24h OAuth expiry killing remote-control (#88054), multi-account switching frustrations (#36151): auth lifecycle remains fragile.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-20

## 1. Today's Highlights

The Codex community is heavily focused on **Windows platform stability**, with three of the top-five hottest issues involving Windows-specific bugs (browser plugin initialization, Computer Use screenshots, and path-handling errors in thread archival). A significant **security hardening wave** arrived via multiple merged PRs that stop treating Git commands as inherently safe, isolate plugin Git operations, and address Trusted RPC dependency validation. Meanwhile, **model efficiency** conversations are gaining traction—one detailed report shows GPT-5.6 serializes independent Code Mode calls, with explicit batching reducing weighted usage by up to 45%.

## 2. Releases

**rust-v0.149.0-alpha.2** — Published within the last 24 hours. No detailed changelog was provided in the release notes; this is an alpha iteration on the Rust-based Codex toolchain.

---

## 3. Hot Issues

### 3.1 [#39136 — Codex built-in browser plugin initialization fails: Trusted RPC dependency is not within a trusted code path](https://github.com/openai/codex/issues/39136)
- **Reaction:** 78 comments | 41 👍 — the hottest issue this cycle
- **Why it matters:** The built-in browser plugin fails to initialize on Windows due to Trusted RPC validation. This blocks browser automation features entirely for affected users.
- **Community insight:** The error suggests a signed binary verification mismatch—likely a packaging or signing pipeline regression.

### 3.2 [#25178 — Windows Computer Use screenshot fails on Windows 10 22H2 when SetIsBorderRequired is called](https://github.com/openai/codex/issues/25178)
- **Reaction:** 28 comments | 15 👍
- **Why it matters:** Computer Use can list/activate windows but fails on screenshots, breaking a core loop of the autonomy workflow.
- **Community insight:** The error `0x80004002` indicates unsupported interface—users on 22H2 are effectively blocked from screenshot-based interaction.

### 3.3 [#35050 — GPT-5.6 often serializes independent Code Mode calls; explicit batching reduced weighted usage by 27–45%](https://github.com/openai/codex/issues/35050)
- **Reaction:** 24 comments | 40 👍 — highest reaction-to-comment ratio
- **Why it matters:** Directly impacts **cost and latency**. The reporter demonstrates that explicit batching can cut weighted usage by up to 45%, suggesting the model's tool-serialization strategy is suboptimal.
- **Community insight:** This is a model-behavior issue, not an app bug. Expect model-side tuning to be the resolution.

### 3.4 [#38350 — Recurring scheduled tasks disable themselves after successful runs without user authorization](https://github.com/openai/codex/issues/38350)
- **Reaction:** 21 comments
- **Why it matters:** Reliability regression for automations. Tasks silently switch from enabled to paused after successful runs, eroding trust in unattended workflows.

### 3.5 [#25744 — Codex for macOS accumulates Computer Use / MCP helper processes and unreaped zombie children](https://github.com/openai/codex/issues/25744)
- **Reaction:** 20 comments
- **Why it matters:** Long-running sessions degrade system performance—HID lag and WindowServer/TCC stalls—because helper processes are never reaped.
- **Community insight:** Correlates with [#38754] (below); this is a systemic process-lifecycle issue on both platforms.

### 3.6 [#39239 — Windows: `thread/archive` fails with "os error 2" after `thread/resume` stores a `\\?\` (verbatim) rollout_path](https://github.com/openai/codex/issues/39239)
- **Reaction:** 17 comments
- **Why it matters:** Windows path-equality mismatch prevents archival of resumed threads. Data is present but inaccessible—a serious session-management flaw.

### 3.7 [#28950 — Windows: Chrome plugin install fails to create com.openai.codexextension Native Messaging Host](https://github.com/openai/codex/issues/28950)
- **Reaction:** 12 comments
- **Why it matters:** Chrome read-only mode persists because the native messaging host registration fails during the plugin install lifecycle.

### 3.8 [#34301 — GPT Sol and Terra threads cannot spawn Luna subagents because of Luna Multi Agent version](https://github.com/openai/codex/issues/34301)
- **Reaction:** 10 comments | 34 👍
- **Why it matters:** Version mismatch breaks multi-agent orchestration on Windows—Sol/Terra cannot delegate to Luna, blocking hierarchical agent workflows.

### 3.9 [#38754 — Local stdio MCP servers are repeatedly spawned and not reaped within a single task](https://github.com/openai/codex/issues/38754)
- **Reaction:** 10 comments
- **Why it matters:** Process leak per turn/task—MCP servers accumulate, degrading performance and wasting resources.

### 3.10 [#35855 — Android Remote Control pairing fails with Windows Codex 26.721.41059 / ChatGPT Android 1.2026.202 (25)](https://github.com/openai/codex/issues/35855)
- **Reaction:** 6 comments
- **Why it matters:** Cross-platform remote control pairing broken—blocks mobile-to-desktop control on current stable builds.

---

## 4. Key PR Progress

### 4.1 [#39524 — Stop treating Git commands as inherently safe](https://github.com/openai/codex/pull/39524) ✅ Merged
- **What:** Removes Git commands from the known-safe classification on Unix and Windows.
- **Why it matters:** Repository configuration can cause even read-only Git commands to execute arbitrary helpers. Substantial security hardening.

### 4.2 [#31155 — fix: release thread writer after failed shutdown](https://github.com/openai/codex/pull/31155)
- **What:** Releases the live-writer lease held by `RolloutRecorder` after a failed shutdown.
- **Why it matters:** Fixes a session leak where terminal sessions may report completion before rollout persistence flushes.

### 4.3 [#39520 — Isolate automatic plugin Git operations](https://github.com/openai/codex/pull/39520) ✅ Merged
- **What:** Prevents background plugin refreshes from inheriting repository-local or command-scoped Git configuration.
- **Why it matters:** Stops remote redirection and helper execution during automated operations—another security fix in the same family as #39524.

### 4.4 [#39410 — Refresh expired AWS credentials for Bedrock](https://github.com/openai/codex/pull/39410) ✅ Merged
- **What:** Adds `aws.auth_refresh` provider config with command, args, and timeout.
- **Why it matters:** Bedrock sessions recover when SDK credentials expire mid-request.

### 4.5 [#39474 — Consolidate Guardian extensions into `codex-guardian-v2`](https://github.com/openai/codex/pull/39474) ✅ Merged
- **What:** Consolidates thread lifecycle contributor and subagent-spawn context into a unified extension entry point.
- **Why it matters:** Simplifies extension architecture, reduces redundancy.

### 4.6 [#39523 — Persist thread section moves before the first turn](https://github.com/openai/codex/pull/39523) ✅ Merged
- **What:** Materializes and flushes non-ephemeral threads when moved into sections pre-first-turn.
- **Why it matters:** Fixes threads disappearing from section-filtered lists.

### 4.7 [#39452 — Remove the feature gate for async user messages](https://github.com/openai/codex/pull/39452) ✅ Merged
- **What:** Enables `send_user_message_async` whenever the model advertises support.
- **Why it matters:** Removes a compatibility flag that was silently controlling tool availability.

### 4.8 [#39515 — Use `mem::take` to drain unified exec output buffers](https://github.com/openai/codex/pull/39515) ✅ Merged
- **What:** Simplifies buffer draining via `std::mem::take`.
- **Why it matters:** Internal cleanup—reduces custom helper complexity.

### 4.9 [#39493 — Make head-tail buffer capacity const generic](https://github.com/openai/codex/pull/39493) ✅ Merged
- **What:** Parameterizes `HeadTailBuffer` by const `MAX_BYTES`.
- **Why it matters:** Enables flexible buffer sizing beyond the production default.

### 4.10 [#39510 — Track built-in control tool calls in analytics](https://github.com/openai/codex/pull/39510) ✅ Merged
- **What:** Emits `codex_control_tool_call_event` for built-in controls (`request_user_input`, `update_plan`, `view_image`, goal tools).
- **Why it matters:** Provides observability into control-flow tool usage and outcomes.

---

## 5. Feature Request Trends

1. **Configurable Context Compaction Model** ([#22486](https://github.com/openai/codex/issues/22486)) — Allow setting a separate model for context compaction, independent of the active session model. Compaction is a different workload; users want cost/speed optimization options.

2. **Per-Server MCP OAuth Issuer Override** ([#38944](https://github.com/openai/codex/issues/38944)) — Explicit trusted-issuer override for remote MCP servers where protected-resource metadata is inconsistent. Recurring pain for enterprise/Meta OAuth setups.

3. **Process Lifecycle Management** — Across multiple threads ([#25744](https://github.com/openai/codex/issues/25744), [#38754](https://github.com/openai/codex/issues/38754)), users are requesting deterministic cleanup of MCP/Computer Use helper processes. The community expects platform-level process containment.

4. **Cross-Platform Parity on Remote Control & Browser Plugins** — Windows and macOS users are hitting distinct but parallel failures in Chrome extension native-host registration and Remote Control pairing.

---

## 6. Developer Pain Points

1. **Windows is the Reliability Gap** — The pattern is consistent: Windows builds lag behind macOS in stability for the browser plugin, Computer Use screenshots, path handling, and native messaging. Windows users are effectively second-class in several workflows.

2. **Process Leaks & Zombie Children** — Both Windows (MCP servers) and macOS (Computer Use helpers) are accumulating unreaped processes. This manifests as HID lag, WindowServer stalls, and degraded performance in long-running sessions.

3. **Silent State Corruption** — The scheduled-task disable bug ([#38350](https://github.com/openai/codex/issues/38350)), the rollout-path mismatch on Windows ([#39239](https://github.com/openai/codex/issues/39239)), and the worktree refs/heads/HEAD bug ([#38517](https://github.com/openai/codex/issues/38517)) all share a theme: state changes that are invisible until something breaks hours later.

4. **Security-Trust Tension** — The merged security PRs (Git command reclassification, plugin Git isolation) may surface as new permission prompts. Developers will need to update their configs and hook trust models. Expect friction in the short term as safe-git behavior changes.

5. **Model Efficiency Visibility** — The GPT-5.6 batching analysis ([#35050](https://github.com/openai/codex/issues/35050)) surfaced that model serialization of independent tool calls costs users 27–45% in weighted usage. Users want model-level guidance on batching when it's safe, and visibility into when the model is choosing poorly.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-20

## Today's Highlights
Two releases shipped in the last 24 hours: the stable **v0.56.0** and a preview **v0.57.0-preview.0** with fixes for Cloud Workstations OAuth redirects and IDE connection directory mismatches. Meanwhile, the issue tracker shows heavy activity around **subagent reliability** — with top-voted bugs about subagents falsely reporting success after hitting `MAX_TURNS`, generalist agent hangs, and shell commands getting stuck waiting for input. The PR queue is dominated by **security hardening** (credential sanitization, sandbox DEBUG normalization, consent prompts for environment changes) and **Whisper voice mode reliability**.

---

## Releases

### v0.57.0-preview.0
- **fix(core):** dynamically resolve Cloud Workstations proxy redirect URI for OAuth flows — enables proper authentication when running inside Cloud Workstations with a proxy.
- **fix(core):** resolve swallowed directory mismatch in IDE connections — addresses a bug where IDE-connected sessions could silently operate on the wrong working directory.
- Full changelog: [v0.57.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0-preview.0)

### v0.56.0
- Stable release; full changelog available at [v0.56.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0)

---

## Hot Issues (Top 10)

1. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, 12 comments)
   The `codebase_investigator` subagent reports `status: "success"` even when it hits the turn limit before doing any work. This silently hides failures and undermines trust in subagent results.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, 8 comments, 👍8)
   When the CLI defers to the generalist agent (e.g., for simple folder creation), it hangs indefinitely — up to an hour before cancellation. Users work around it by instructing the model to never use subagents.

3. **[#25166 — Shell command stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, 4 comments, 👍3)
   Simple CLI commands that cannot wait for input still leave the shell in a hung state. Especially painful for automation workflows.

4. **[#19873 — Leverage model's bash affinity via Zero-Dependency OS Sandboxing](https://github.com/google-gemini/gemini-cli/issues/19873)** (P2, 8 comments)
   Proposal to let Gemini 3 models operate natively with POSIX tools while sandboxing for safety — a community-favored direction for unlocking the model's full potential.

5. **[#21968 — Gemini doesn't use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2, 6 comments)
   Anecdotal but widespread: custom skills (e.g., `gradle`, `git`) are ignored unless explicitly invoked, even for highly relevant tasks.

6. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2, 5 comments)
   Auto Memory marks sessions as processed only when the agent reads them; low-signal sessions are skipped, then resurfaced repeatedly — wasting context and compute.

7. **[#24246 — 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (P2, 3 comments)
   The CLI fails with a 400 error when more than 128 tools are enabled (the issue title says >128, summary says >400 — either way, a real scaling limit). Expectation: smarter tool scoping.

8. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1, 4 comments)
   The browser subagent terminates with "GOAL" but no work completed under Wayland — a growing concern as Wayland adoption increases.

9. **[#22232 — Enhance browser_agent: Automatic session takeover & lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232)** (P3, 4 comments)
   Persistent browser profiles with orphaned processes cause fail-fast crashes; request is for automatic lock recovery and session takeover.

10. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** (P2, 3 comments)
   The model occasionally issues `git reset` or `--force` when safer alternatives exist. Community wants stronger guardrails around destructive git and database operations.

---

## Key PR Progress (Top 10)

1. **[#28922 — GCS trajectory logging and artifact preservation](https://github.com/google-gemini/gemini-cli/pull/28922)** (open, large)
   Adds GCS trajectory logger and debug artifact storage for production and eval runs — critical for post-mortem inspection of agent failures.

2. **[#28898 — Harden subprocess execution security](https://github.com/google-gemini/gemini-cli/pull/28898)** (open, large)
   Prevents credential leakage into untrusted coding-agent environments; hardens subprocess handling and GitHub API interactions.

3. **[#28863 — Consent prompts for extension environment changes](https://github.com/google-gemini/gemini-cli/pull/28863)** (open, medium)
   MCP server environment configs are now incorporated into consent strings, plus sanitization of runtime-altering env vars — closes a real security gap.

4. **[#28910 — Gemini 3.7 Flash / 3.6 Flash model configurations](https://github.com/google-gemini/gemini-cli/pull/28910)** (closed, xl)
   Adds full model resolution support for Gemini 3.7 Flash, 3.6 Flash, and 3.5 Flash-Lite across core and CLI.

5. **[#28915 — Consistent symlink evaluation in ignore path handling](https://github.com/google-gemini/gemini-cli/pull/28915)** (open, medium)
   Ensures `.geminiignore` and `.gitignore` are evaluated against both literal and canonical paths — fixes tools behaving inconsistently through symlinks.

6. **[#28917 — Atomic Whisper model downloads](https://github.com/google-gemini/gemini-cli/pull/28917)** (open, medium)
   `downloadModel()` now writes to a temp file, respects backpressure, verifies length, and atomically renames — no more corrupted model files after interruption.

7. **[#28916 — Buffer partial stdout chunks in WhisperTranscriptionProvider](https://github.com/google-gemini/gemini-cli/pull/28916)** (open, medium)
   Fixes dropped transcription lines when timestamped output is split across stdout chunks — directly addresses local voice mode reliability.

8. **[#28914 — Inject on-retry nudge into contents to preserve prefix caching](https://github.com/google-gemini/gemini-cli/pull/28914)** (open, large)
   Moves recovery nudge from system instruction to end of contents array — maintains prompt prefix caching and improves retry success rates.

9. **[#28907 — Rename current chat session](https://github.com/google-gemini/gemini-cli/pull/28907)** (closed, medium)
   Adds `/chat rename <title>` and `/resume rename <title>`, persisted through the existing `ChatRecordingService` — small UX win, no schema changes.

10. **[#28911 — Normalize sandbox DEBUG flag semantics](https://github.com/google-gemini/gemini-cli/pull/28911)** (open, medium)
   Ensures `DEBUG=false` / `DEBUG=0` are honored consistently; previously they truthily enabled debug mode in the sandbox launcher.

---

## Feature Request Trends

- **AST-aware codebase tools** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)): Multiple EPICs investigating AST-aware file reads, search, and mapping for more precise edits with fewer turns.
- **Component-level evaluations** ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)): Growing pressure for robust, per-component behavioral evals (76 tests today) with better reliability and regression tracking.
- **Subagent trajectory visibility** ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)): Users and maintainers want subagent trajectories shareable via `/chat share` for debugging and evals.
- **Native bash / OS sandboxing** ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)): Strong community interest in letting the model use POSIX tools natively within a sandbox.
- **Agent self-awareness** ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432), [#20079](https://github.com/google-gemini/gemini-cli/issues/20079)): Multiple requests for the agent to understand its own CLI flags, hotkeys, and agent configuration (e.g., symlinked agent files).

---

## Developer Pain Points

- **Subagent reliability is the #1 theme**: False "GOAL success" reports, hangs, ignored settings.json overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and missing bug-report subagent context ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)) — developers can't trust what subagents say they did.
- **Shell/process management is fragile**: Stuck "Waiting input" states, interactive prompt hangs, and orphaned browser processes are recurring sources of lost time.
- **Security and destructive-command guardrails are actively requested**: Credential leakage, `git reset` / `--force` misuse, and missing consent prompts for environment changes — the community wants safety by default, not by prompting.
- **Memory system needs transparency**: Low-signal session retries, silent patch skips, and no deterministic redaction before sending transcripts to the model ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)) — users want to know what's stored and what goes to the model.
- **Tool scaling limits**: The 400/128-tool error ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) and chat-history validation gaps (PR #28892) indicate the CLI needs smarter scoping and sanitization at scale.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-20

## Today's Highlights
The Copilot CLI team shipped three incremental patch releases (v1.0.81-2 through v1.0.81-5), the most notable fixing a UI glitch where pending prompt copies would linger at the bottom of the transcript. Meanwhile, the community surfaced a wave of critical regressions in sandbox enforcement, MCP OAuth flows, and prompt-mode authentication, with several reports clustering around the CLI overriding explicit user permissions. The stale-prompt bug and sandbox policy conflicts are drawing the most community attention, with 24 and 7 reactions respectively.

## Releases
- [v1.0.81-5](https://github.com/github/copilot-cli/releases/tag/v1.0.81-5) — **Fixed**: A prompt sent while the agent is working no longer leaves a second copy of itself stuck as `(pending)` at the bottom of the transcript after it has been answered.
- [v1.0.81-4](https://github.com/github/copilot-cli/releases/tag/v1.0.81-4) — Fixes and changes.
- [v1.0.81-3](https://github.com/github/copilot-cli/releases/tag/v1.0.81-3) — Fixes and changes.
- [v1.0.81-2](https://github.com/github/copilot-cli/releases/tag/v1.0.81-2) — Fixes and changes.

## Hot Issues
1. [**#2082 — Ctrl+Shift+C no longer copies to clipboard on Linux**](https://github.com/github/copilot-cli/issues/2082) — A long-standing regression (since v1.0.4) where the standard Linux terminal copy shortcut stopped working. With 24 comments and 12 upvotes, this is one of the most actively discussed issues, likely affecting a large segment of Linux users.

2. [**#4522 — Sandbox forced while managed policy is undetermined**](https://github.com/github/copilot-cli/issues/4522) — v1.0.81-1 enables the local sandbox even when users explicitly set `"sandbox": {"enabled": false}` and no managed policy exists. The CLI overrides explicit user config during policy-wait periods — a significant trust and control issue. 7 upvotes in under 48 hours suggests it's resonating widely.

3. [**#4480/#4490 — Atlassian MCP OAuth fails with RFC 8414 §3.3 error**](https://github.com/github/copilot-cli/issues/4480) — Two separate reports (v1.0.79 and v1.0.80) of MCP OAuth discovery failing against Atlassian's remote server. A regression from v1.0.71/v1.0.78 that blocks a common enterprise MCP integration and has drawn 10 combined upvotes.

4. [**#4532 — Pending chat lines duplicate and won't go away**](https://github.com/github/copilot-cli/issues/4532) — Users report submitting a prompt while the agent is working leaves the pending line stuck at the bottom; repeated submissions add more duplicates, eventually filling the screen. Note that v1.0.81-5 claims to fix this — community should verify.

5. [**#4534 — `autoUpdate: false` ignored; CLI re-execs cached prerelease**](https://github.com/github/copilot-cli/issues/4534) — The documented setting has no effect once a prerelease is cached under `~/.copilot/pkg/`. Users on stable npm installs are silently bumped to prerelease builds, undermining predictable versioning.

6. [**#4533 — Terminal UI stops consuming events when subagents spawn in parallel**](https://github.com/github/copilot-cli/issues/4533) — On v1.0.81-4/5, the UI freezes (input + scroll dead) at the moment a turn launches parallel subagents; the Rust runtime keeps working, making the failure feel like a rendering-layer bug.

7. [**#4527 — Prompt mode fails with 401 on GHEC data residency tenants**](https://github.com/github/copilot-cli/issues/4527) — `copilot -p` fetches the model catalog from `api.githubcopilot.com` instead of the tenant endpoint, breaking non-interactive automation on GHEC data residency. Interactive mode works fine, highlighting an inconsistency.

8. [**#4521 — Sandbox cannot be disabled**](https://github.com/github/copilot-cli/issues/4521) — Config reports sandbox disabled, but status shows enabled and executions still route through it. With 4 upvotes, this compounds #4522 and suggests a systemic issue with sandbox state management.

9. [**#4528 — Non-interactive sessions bypass `disableBypassPermissionsMode`**](https://github.com/github/copilot-cli/issues/4528) — `copilot -p --yolo` grants permissions even when managed settings explicitly disable bypass mode. A serious security-policy violation for enterprises enforcing permissions governance.

10. [**#4525 — Legacy `initialize` sent after modern `server/discover` (error -32022)**](https://github.com/github/copilot-cli/issues/4525) — On 1.0.81-1, the CLI successfully probes with a modern protocol version but then sends a legacy `initialize`, breaking dual-era MCP servers (e.g., Python MCP SDK 2.0.0). Interop protocol handling needs cleanup.

## Key PR Progress
No pull requests were updated in the last 24 hours. Community contributions appear to be paused while the maintainers work through the backlog of open bugs and regressions.

## Feature Request Trends
- **Persistent reasoning effort** ([#4530](https://github.com/github/copilot-cli/issues/4530)) — Users want the reasoning effort (Low/Medium/High) to persist across sessions, just like `/config model` does today. Currently it resets to Medium on restart.
- **Durable context across compactions** ([#4441](https://github.com/github/copilot-cli/issues/4441)) — Repeated context compaction is recursively lossy; early decisions and gotchas degrade with each cycle. Users want compaction to preserve durable context rather than re-summarize previous summaries.
- **Plugin marketplace search/filter** ([#4523](https://github.com/github/copilot-cli/issues/4523)) — The `plugin marketplace browse` output is a flat, unsortable list. As marketplaces grow, users need interactive search and filtering for discoverability.

## Developer Pain Points
- **Sandbox enforcement overrides user configuration** — Multiple reports (#4521, #4522, #4524, #4516) show the sandbox ignoring explicit user settings, managed policies, and even failing to honor path grants for JVM processes. Developers feel the sandbox is "super broken and overly restrictive" with no clear escape hatch.
- **MCP OAuth and protocol churn** — Atlassian MCP failures (#4480, #4490) and the mixed-era protocol bug (#4525) point to a pattern of OAuth and MCP version-handling regressions that break real integrations, and force re-auth flows like `prompt=select_account` being unconditionally appended (#4526).
- **Terminal input handling regressions** — Backspace deleting words instead of characters (#4447), dropped key events when the pane is unfocused (#4213), and the UI freezing on parallel subagents (#4533) point to terminal-rendering and input-layer bugs that degrade everyday interactive use.
- **CLI overrides explicit user settings** — `autoUpdate: false` ignored (#4534), sandbox.enabled=false overridden (#4522), and permission-bypass protections skipped in prompt mode (#4528) collectively signal a distrust pattern: the CLI doesn't consistently honor documented configuration.
- **Authentication inconsistencies between modes** — Interactive vs. prompt mode behavior diverges on GHEC data residency (#4527), while model catalog and permission handling differ, breaking CI/CD integrations that rely on `-p`.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-20

## 1. Today's Highlights
The past 24 hours were unusually quiet on the MoonshotAI/kimi-cli repository, with no new releases or pull request activity. The sole item of note is a single closed issue (#2609) flagging a critical ACP runtime limitation where Grep and Glob tools are blocked with an interactive-Bash restriction, which may affect Zed users relying on ACP integration.

## 2. Releases
No new releases were published in the last 24 hours. The latest stable version remains **0.37.1** (as referenced in the July issue).

## 3. Hot Issues
Only one issue was updated in the last 24 hours:

- **#2609 — [ACP] Grep/Glob blocked: "ACP runtime only supports interactive Bash tool processes"** ([link](https://github.com/MoonshotAI/kimi-cli/issues/2609))
  - **Author:** SolomonFang | **Status:** Closed | **Reactions:** 0  
  - **Why it matters:** This affects users running `kimi acp` inside Zed (or other ACP clients). The core file-reading tool (`Read`) works, but `Grep` and `Glob` — essential for code navigation — are hard-blocked. The issue also references intermittent "ACP terminal capability is unavailable" errors for Bash.  
  - **Community response:** No comments before closure; low engagement suggests it may be a targeted fix or isolated config issue. Closed without discussion, which may warrant re-opening if others hit the same wall.

## 4. Key PR Progress
No pull requests were updated or opened in the last 24 hours.

## 5. Feature Request Trends
With zero new issues and PRs, no new feature directions emerged. Based on the single issue, a recurring *implicit* request is:

- **Full-featured ACP tool support** — Parity between ACP runtime tool capabilities and the standard CLI tools (Grep, Glob) is a dormant pain point, not yet a trending feature request.

## 6. Developer Pain Points
The only signal from today's data:

- **ACP runtime tool restrictions** — Non-interactive tools like Grep/Glob failing due to an "interactive Bash only" constraint is a friction point for ACP users (e.g., Zed). The silent closure without a public explanation may frustrate developers who rely on these tools for agentic coding workflows.

---

*Note: Today's digest is sparse due to lack of activity. The repository may be in a low-traffic period or the team is consolidating prior work.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-20

## Today's Highlights

The OpenCode community is increasingly focused on the **OpenCode Go subscription service**, with multiple reports of abnormal credit consumption, mismatched billing, and incorrect quota exhaustion surfacing within the last 24 hours—suggesting potential metering or rate-limit bugs. Concurrently, several **v2-specific regressions** (TUI paste issues, plugin discovery failures, MCP session rate-limiting) indicate ongoing stabilization work for the next-generation client. On the development side, core contributor **kitlangton** has landed key improvements around optimistic prompt rendering and ID schema unification, while community PRs target hot-reload functionality and Windows-specific process handling.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#37852 — Aborted provider stream recorded as clean stop](https://github.com/anomalyco/opencode/issues/37852)** · 56 👍 · 19 comments
   Provider streams terminating mid-generation are recorded as successful with zero usage/tokens/no text, causing subagents to return empty results silently. High community engagement signals this is a critical reliability gap affecting production workflows.

2. **[#27906 — v1.15.1+ Breaks Bun Installs](https://github.com/anomalyco/opencode/issues/27906)** · 14 👍 · 24 comments
   The postinstall lifecycle script requirement breaks global installation via Bun and other strict package managers. Long-running (3 months) and heavily commented—a packaging regression affecting a significant user segment.

3. **[#43367 — gpt-5.6-sol-fast fails with prompt_cache_retention](https://github.com/anomalyco/opencode/issues/43367)** · 10 👍 · 2 comments
   OpenCode sends `prompt_cache_retention` to models that don't support it, causing subagent failures. Three review agents failed within minutes—a straightforward fix with broad impact.

4. **[#43416 — Usage-based billing doesn't match subscription usage](https://github.com/anomalyco/opencode/issues/43416)** · 0 👍 · 6 comments
   Users see ~$9 of actual usage but only ~$20 charged against their GO subscription. Confusing billing visibility erodes trust in the paid tier.

5. **[#13626 — Auto-sync projects in web UI from server](https://github.com/anomalyco/opencode/issues/13626)** · 15 👍 · 12 comments
   Feature request: web UI should sync projects from server automatically on new devices/browsers. Community strongly supports easier project portability.

6. **[#43409 — Abnormal Credit Consumption on OpenCode Go](https://github.com/anomalyco/opencode/issues/43409)** · 0 👍 · 3 comments
   42% of monthly credits used in 4.5 hours. Potentially severe metering bug—high urgency for a paid service.

7. **[#43424 — Weekly quota incorrectly exhausted](https://github.com/anomalyco/opencode/issues/43424)** · 0 👍 · 3 comments
   New subscriber with ~$11 spend hit a quota cap. Pairs with #43416/#43409 to suggest systemic quota/billing issues.

8. **[#43295 — Web UI V2 prompt controls overlap send button](https://github.com/anomalyco/opencode/issues/43295)** · 1 👍 · 4 comments
   Narrow viewport layout bug where controls render over the submit button, making sending unintentionally trigger model selectors. Affects mobile/split-screen users.

9. **[#42906 — v2 TUI: Questions tool cannot paste](https://github.com/anomalyco/opencode/issues/43516)** · 0 👍 · 2 comments
   Ctrl+V is captured as a keybinding in the free-text field of the question tool; paste works everywhere else. Violates muscle memory and blocks interactive workflows.

10. **[#39876 — libopentui temp copies consume 207 GiB](https://github.com/anomalyco/opencode/issues/39876)** · 1 👍 · 3 comments
    Tens of thousands of `$TMPDIR` dylib copies nearly fill the disk. Disk-space leak in TUI—critical for CI/long-running environments.

## Key PR Progress

1. **[#43520 — Optimistic prompt admission with client-minted IDs](https://github.com/anomalyco/opencode/pull/43520)** · kitlangton
   Prompt sends render instantly via client-minted inbox IDs with idempotent reconciliation—removes perceived latency from sends.

2. **[#43542 — Use schema ID minting instead of hand-rolled encoder](https://github.com/anomalyco/opencode/pull/43542)** · kitlangton
   Deletes bespoke web-app ID generator in favor of unified schema-based minting; reduces duplicate logic and drift risk.

3. **[#43538 — Hot-reload skills, commands, agents, config](https://github.com/anomalyco/opencode/pull/43538)** · mccaffrey-jonathan
   Opt-in `OPENCODE_EXPERIMENTAL_HOT_RELOAD=true` watcher on config directories. Directly addresses long-standing workflow friction.

4. **[#43511 — Fix cross-spawn close-event hang on Windows](https://github.com/anomalyco/opencode/pull/43511)** · amathur2k
   Resolves `bash` tool hanging when a grandchild daemon inherits stdio—falls back from `close` to `exit` event. Windows dev-server workflows unblocked.

5. **[#43541 — Default unknown model token limits](https://github.com/anomalyco/opencode/pull/43541)** · opencode-agent[bot]
   Uncatalogued models default to 200k context/32k output, with documented fallback assumptions and override support.

6. **[#42810 — Simplify interrupt continuation](https://github.com/anomalyco/opencode/pull/42810)** · kitlangton
   Replaces a complex continuation state machine with a three-line post-cleanup check in `SessionExecution`—major readability/maintenance win.

7. **[#43537 — Skills in slash autocomplete, grouped /skills dialog](https://github.com/anomalyco/opencode/pull/43537)** · mccaffrey-jonathan
   Closes remaining gaps on #7846: skills now appear in slash completion and the dialog groups by source. Improves discoverability.

8. **[#43536 — Global capability-preference abstraction](https://github.com/anomalyco/opencode/pull/43536)** · neriousy
   Moves mutable user preferences out of `Skill` into a global abstraction, initially applied to skills. Foundational for further preference-driven UX.

9. **[#42978 — Show current worktree branch in app](https://github.com/anomalyco/opencode/pull/42978)** · liveonce
   Fixes branch resolution when opening manually created Git worktrees in Desktop. Small but concrete correctness fix.

10. **[#43532 — Allow reviewing bot-authored PRs in GitHub Action](https://github.com/anomalyco/opencode/pull/43532)** · oerlandsen
    `assertPermissions()` hard-fails on GitHub App bot actors. Fixes CI for automation-heavy repos where the bot is the PR author.

## Feature Request Trends

- **Better billing transparency** (3 issues): Users want real-time usage dashboards, clearer quota accounting, and Granular per-model spend breakdowns for OpenCode Go.
- **Cross-device project sync** (2 issues): Automatic project syncing from server to new web clients is the top web-UI request.
- **Notification/attention improvements** (2 issues): Users want audible/desktop notifications when agents await approval, plus keyboard shortcuts to switch agents in the desktop app.
- **Hot-reload and faster feedback loops** (2 PRs): Watching for file changes to reload skills/config and prompt-optimistic rendering—both target the "edit → try again" latency.
- **Configuration/feature profile portability** (1 issue): "Save my profile/models/providers to cloud" suggests interest in cross-machine setup sync.

## Developer Pain Points

1. **Billing & quota reliability (OpenCode Go)**: Multiple reports of unexplained credit consumption, quota exhaustion, and dashboard inconsistencies. Paid users are confused and wary of the metering logic—this is the top friction point today.
2. **Aborted/partial streams treated as success**: Silent empty returns from subagents waste debugging time; the platform should surface failures loudly.
3. **Package manager compatibility**: Postinstall scripts break Bun/other strict managers, surprising users who expect drop-in installs.
4. **V2 stabilization gaps**: TUI paste binding, MCP idle rate-limits, plugin discovery inconsistencies, and a broken VSIX extension point to a next-gen client that needs hardening.
5. **Disk-space leaks**: The `libopentui` temp-file accumulation on macOS demonstrates how easy it is for TUI components to leak resources in long-running sessions—users want automatic cleanup.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-20

## Today's Highlights
A significant stabilization week for Pi: maintainers merged session-scoped model persistence (#8356), added a user-agent to all major API adapters (#8361), and fixed openai-completions reasoning_details round-tripping (#8246). Meanwhile, Windows compatibility remains the hottest topic, with #7547 drawing 31 comments as the community seeks a coherent Windows support strategy. A cluster of timeout, overflow, and compaction bugs in the AI layer (#8321-8328) also got timely fixes.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#7547 — [Windows] How do you use Pi on windows?](https://github.com/earendil-works/pi/issues/7547)** — 31 comments, the community's most active thread. Maintainer petrroll is canvassing how Windows developers run Pi (WSL, native, Git Bash) to decide where to focus bug-fixing and docs. Multiple related Windows issues (#7829, #8183, #8372, #8382) show this is a systemic pain point.

2. **[#5263 — Make in-session model changes ephemeral by default](https://github.com/earendil-works/pi/issues/5263)** — 13 👍, now closed by PR #8356. Users were frustrated that `/model` and thinking-level changes leaked into global defaults, silently mutating future startup settings. The fix makes in-session changes session-scoped unless explicitly persisted via `/settings`.

3. **[#8323 — OpenAI client created with no timeout](https://github.com/earendil-works/pi/issues/8323)** — The OpenAI SDK's 600s default timeout kills local models that think for more than ten minutes, cutting off generation mid-stream. Filed together with #8322 and #8321, highlighting a cluster of stream-handling bugs.

4. **[#8322 — isRecoverableLength misses exact-limit truncation](https://github.com/earendil-works/pi/issues/8322)** — A one-character bug (`<` vs `<=`) where hitting `max_output_tokens` exactly fails the recoverable-length check, causing unnecessary session compaction or truncation handling.

5. **[#8328 — Threshold compaction never fires for zero-usage providers](https://github.com/earendil-works/pi/issues/8328)** — Providers that omit the final `usage` block (despite `include_usage: true`) completely break threshold auto-compaction — the system bails out instead of falling back to token estimation.

6. **[#8376 — Make interactive model selection persistence configurable by scope](https://github.com/earendil-works/pi/issues/8376)** — Complements #5263: users want explicit control over whether `/model` selections persist per-session, per-directory, or globally.

7. **[#7829 — Invalid settings.json silently ignored; misleading 'bash not found' error on Windows](https://github.com/earendil-works/pi/issues/7829)** — Unescaped Windows backslashes in settings.json produce invalid JSON, but the error surfaces as a confusing "bash not found" message instead of pointing at the JSON parse failure.

8. **[#8337 — UTF-8 BOM breaks frontmatter parsing and settings.json loading](https://github.com/earendil-works/pi/issues/8337)** — Files saved as UTF-8 with BOM (common on Windows editors) silently break frontmatter extraction and settings loading. The parser normalizes `\r\n` but not the leading U+FEFF.

9. **[#8349 — ExtensionContext cannot detect queued custom continuations](https://github.com/earendil-works/pi/issues/8349)** — Extensions using `pi.sendMessage({ customType: "continue" })` during `agent_end` have no way to detect that a continuation is queued, making it impossible to implement loop guards.

10. **[#8342 — Failed to log in to GPT Pro and received an error message](https://github.com/earendil-works/pi/issues/8342)** — Fresh Pi installations hitting "Token exchange failed" during `/login` for ChatGPT Plus/Pro via the Codex Subscription flow. Potential onboarding blocker.

11. **[#8382 — 中文（CJK）input renders as underscores in SSH terminals](https://github.com/earendil-works/pi/issues/8382)** — CJK characters typed or pasted in SSH sessions display as `____` placeholder underscores in both regular and fullscreen TUI modes. A localization regression affecting Chinese-speaking users.

## Key PR Progress

1. **[#8356 — Keep model and thinking level changes session scoped](https://github.com/earendil-works/pi/pull/8356)** (merged) — The fix for the highly-upvoted #5263. In-session model/thinking mutations no longer write to global defaults; only explicit `/settings` changes persist.

2. **[#8361 — Add Pi user-agent to most API adapters](https://github.com/earendil-works/pi/pull/8361)** (merged) — Adds `Pi`'s default User-Agent to seven adapters (OpenAI, Anthropic, Azure, Gemini, Vertex, Mistral). Closes #8305, improving provider-side analytics and debugging.

3. **[#8246 — Openai completions reasoning details round-trip](https://github.com/earendil-works/pi/pull/8246)** (merged) — Fixes #7994: preserves signed `reasoning.text`/`reasoning.summary` entries from `delta.reasoning_details`, allowing faithful replay of reasoning without requiring encryption.

4. **[#8374 — Abort active run before forking from a user message](https://github.com/earendil-works/pi/pull/8374)** (merged) — Fixes a race condition where the fork selector (`/fork`, double-escape) could race against an in-flight agent run, causing corrupted session state.

5. **[#8377 — Respect min-release-age when checking npm package updates](https://github.com/earendil-works/pi/pull/8377)** (merged) — The update banner was reporting versions npm itself wouldn't install due to the `min-release-age` cutoff, causing false "update available" prompts.

6. **[#8365/#8366 — Emit input event for built-in slash commands](https://github.com/earendil-works/pi/pull/8365)** (merged) — Built-in commands (`/share`, `/export`, `/settings`) now emit the `input` event, giving extensions visibility into deterministic TUI operations they previously couldn't intercept.

7. **[#8314 — Round-trip Bedrock redacted reasoning](https://github.com/earendil-works/pi/pull/8314)** (merged) — Handles Bedrock Converse's `redactedContent` member for encrypted reasoning blocks, preventing silent reasoning loss during streaming.

8. **[#8359 — Detect reasoning_content via proxy/gateway routes](https://github.com/earendil-works/pi/pull/8359)** (merged) — DeepSeek detection now works through LiteLLM and other proxies where the base URL doesn't contain "deepseek.com", fixing reasoning content parsing.

9. **[#8302 — Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/8302)** (open, WIP) — Adds support for Bedrock's Mantle API surface (GPT-5.x models), which currently fails via Converse with validation errors. Waiting on API key permissions for e2e testing.

10. **[#8346 — Repair unterminated session tails](https://github.com/earendil-works/pi/pull/8346)** (open) — Detects and repairs malformed JSONL tails (truncated fragments, missing delimiters) without modifying the file during load. Fixes #8345.

11. **[#8383 — Derive Gemini's disabled-thinking level from the catalog](https://github.com/earendil-works/pi/pull/8383)** (open) — Replaces fragile id-regex-based thinking-level detection (e.g., `gemini-3.7-flash` matching a 3.x regex) with catalog-driven configuration.

## Feature Request Trends

- **Session-scoped state control** (#5263, #8376, #8356): Users want explicit, fine-grained control over what persists vs. what's ephemeral — model selection, thinking levels, and future settings need configurable scope (session vs. directory vs. global).
- **Extension visibility into built-in operations** (#8364, #8349, #8379): Extensions can't observe or intercept built-in slash commands, queued continuations, or register tools without immediate activation. The community is pushing for a more complete extension API surface.
- **Platform-specific polish (especially Windows)** (#7547, #8183, #8372, #8382): Keybindings conflicting with Windows Terminal, CJK input rendering issues over SSH, and path-handling bugs point to a need for first-class Windows/Linux terminal support.
- **Per-model configuration** (#8133): Compaction settings should be configurable per-model, not just globally.
- **TUI ergonomics** (#8344, #8066, #8369): Mouse-driven per-tool expansion, visual line caching to fix computation waste, and configurable wheel scroll lines for faster trackpad scrolling.

## Developer Pain Points

- **Windows is a second-class citizen**: The 31-comment thread (#7547) plus numerous Windows-specific bugs (#7829, #8183, #8372) indicate significant friction — path escaping, terminal keybindings, and shell detection all misbehave. The community is actively seeking guidance on supported configurations.
- **Silent failures are rampant**: Invalid settings.json gives a misleading "bash not found" error (#7829), UTF-8 BOM silently breaks parsing (#8337), and cache misses (#8348, #8362) and timeout truncation (#8323) fail without clear diagnostics. Users are repeatedly surprised by behavior that should either work or error loudly.
- **Cache key derived from session-id hurts forking**: #8348 highlights that forked sessions get new session IDs, leading to zero cache hits on forks — a wasteful regression for a common workflow.
- **Provider compatibility whack-a-mole**: The catalog is stale (#8358), models don't support `reasoningEffort` (#8381), and providers serve models only on `/v1/messages` while Pi routes via `/v1/completions` (#8206). Each new model or gateway seems to require a Pi-side fix.
- **Cross-provider consistency**: Multiple issues (#8321-8328, #8352) show the AI layer has subtle bugs where options (timeouts, fallback costs) are dropped or mishandled differently across API surfaces (OpenAI Completions vs. Responses vs. Anthropic Messages).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-20

## Today's Highlights

This week's digest centers on reliability hardening: the new `qwen sessions ps` command and live-session registry give developers visibility into running interactive sessions, while a cluster of P1/P2 bug fixes targets token accounting across model switches, agent launch failure reporting, and `/effort max` bricking sessions on OpenAI-compatible providers. The team is also actively addressing CI infrastructure pain — including a 500KB GitHub Actions workflow limit that silently blocks runs — and expanding platform integrations with a DingTalk Workspace channel and live model recommendations in the setup wizard.

**Release v0.21.14** is out, featuring the session registry and skill-toggling improvements.

---

## Releases

### v0.21.14
- **New `qwen sessions ps` command** with live-session registry — list and manage running interactive sessions with JSON output ([#8969](https://github.com/QwenLM/qwen-code/pull/8969), [#9261](https://github.com/QwenLM/qwen-code/pull/9261), [#9366](https://github.com/QwenLM/qwen-code/pull/9366))
- **Daemon skill-toggling** improvements

**Benchmark status:** SWE-bench Verified ✅ — 1/1 resolved; Full end-to-end validation (SWE-bench 500 + Terminal-Bench 2.0) passing against v0.21.14.

---

## Hot Issues

1. **[#9459 — P1] `/effort max` bricks sessions on OpenAI-compatible providers** — `clampReasoningEffort()` fails to clamp `max`, causing every subsequent request to 400 until the tier is manually changed. Sessions become unusable mid-task. *4 comments* — [Issue](https://github.com/QwenLM/qwen-code/issues/9459)

2. **[#9454 — P1] Model switches reuse stale token counts** — `GeminiChat` retains the previous route's prompt/output token counts after `/model` switches, corrupting cost tracking and context management. *3 comments* — [Issue](https://github.com/QwenLM/qwen-code/issues/9454)

3. **[#9509 — P2] Agent launch failures reported as successful tool calls** — Two failure paths omit the `error` field, so the scheduler treats failed subagent launches as successes, silently hiding failures. *3 comments* — [Issue](https://github.com/QwenLM/qwen-code/issues/9509)

4. **[#5267] `context.fileName` in settings doesn't work** — Long-standing issue (since June) where custom context attachment filenames aren't respected. 12 comments, still open after 2 months. *12 comments* — [Issue](https://github.com/QwenLM/qwen-code/issues/5267)

5. **[#9309] Context compression is incorrect** — `/compress-fast` then `/compress` produces wrong token accounting (170k → 7k → unexpected results). Users report the compression pipeline has accuracy issues. *5 comments* — [Issue](https://github.com/QwenLM/qwen-code/issues/9309)

6. **[#9493 — P2] Persistent "update available" notification for Homebrew** — CLI shows update banner on **every startup** for Homebrew installs when npm `latest` is newer, with no way to dismiss. Annoying UX friction. *3 comments* — [Issue](https://github.com/QwenLM/qwen-code/issues/9493)

7. **[#9480 — P1] CI wipe guard wedges runners with symlinked workspaces** — The hardened wipe guard (from #9277) fails closed on symlinked workspaces, blocking legitimate CI runs. Infrastructure reliability issue. *3 comments* — [Issue](https://github.com/QwenLM/qwen-code/issues/9480)

8. **[#9450 — P2] `task_list` falsely triggers duplicate tool-call loop detection** — In multi-agent teams, identical `task_list` arguments don't imply identical results (shared state changes), yet the loop detector stops teammates incorrectly. *4 comments* — [Issue](https://github.com/QwenLM/qwen-code/issues/9450)

9. **[#9011 — P2] `ask_user_question` silently returns declined** — Tool returns "User declined" without showing the question or the actual cancel reason, making agent debugging opaque. *3 comments* — [Issue](https://github.com/QwenLM/qwen-code/issues/9011)

10. **[#9219 — P2] `/review` presubmit overlap matching is exact-line only** — Multi-line inline comment ranges and semantic duplicates bypass `noConflict` detection, causing duplicate review feedback. *4 comments* — [Issue](https://github.com/QwenLM/qwen-code/issues/9219)

---

## Key PR Progress

1. **[#9525] Design: runner-level isolation for PAT-bearing steps** — Design doc addressing the failed #9214 approach (11 review rounds, 329→2,700 lines). Proposes runner-level isolation instead of ephemeral containers. — [PR](https://github.com/QwenLM/qwen-code/pull/9525)

2. **[#9519] Mark agent launch failures as failed tool calls** — Fixes #9509 by setting the `error` field on subagent-not-found and worktree-provisioning failure paths. — [PR](https://github.com/QwenLM/qwen-code/pull/9519)

3. **[#9506] Invalidate token counts on model route switch** — Fixes #9454 by scoping token counts to route identity (model + auth type + endpoint) and invalidating on route change. — [PR](https://github.com/QwenLM/qwen-code/pull/9506)

4. **[#9517] Keep `qwen-autofix.yml` under GitHub's 500KB limit** — GitHub silently refuses runs for workflow files >500KB. The autofix workflow crossed the limit and broke CI with zero visibility. — [PR](https://github.com/QwenLM/qwen-code/pull/9517)

5. **[#9518] Don't count wedged queued runs as in-flight** — GitHub creates queued runs it refuses to start/cancel/delete, deadlocking the shepherd's in-flight accounting. — [PR](https://github.com/QwenLM/qwen-code/pull/9518)

6. **[#9520] Agent orchestration contract documentation** — Design doc mapping orchestration across all six launch routes: in-process, forks, teammates, workflow agents, Cursor SDK/CLI. — [PR](https://github.com/QwenLM/qwen-code/pull/9520)

7. **[#9389] Recommend live model list in setup wizard** — Wizard now queries `GET {baseUrl}/models` for opt-in providers instead of a frozen list, improving setup accuracy for dynamic endpoints. — [PR](https://github.com/QwenLM/qwen-code/pull/9389)

8. **[#9394] DingTalk Workspace channel** — New built-in channel with DMs, @mentions, document-mention notifications, todo changes, and source-scoped sessions. — [PR](https://github.com/QwenLM/qwen-code/pull/9394)

9. **[#9444] Stage on-disk session state in serve A/B tests** — Fixes test gap where serve A/B scenarios ran against a fresh daemon with empty home directory, missing persisted-transcript behaviors. — [PR](https://github.com/QwenLM/qwen-code/pull/9444)

10. **[#9491] Post `/review --comment` to Aone Code via a1 CLI** — Implements write-path for Aone Code review chain; authorized runs now post composed reviews through the org-standard CLI. — [PR](https://github.com/QwenLM/qwen-code/pull/9491)

---

## Feature Request Trends

1. **Advisor / read-only second-opinion reviewer** — Two issues (#6542, #9036) request an Advisor capability that inspects session context and returns structured guidance before major work or when stalled. Strongly aligned with Claude Code's native Advisor tool.

2. **Platform distribution & integration expansion** — DingTalk Workspace (merged), OpenAI Response API support (#889), and deprecating Electron in favor of Tauri (#8596) show active platform broadening.

3. **Automated review infrastructure maturity** — Heavy investment in `/review` skill: test-pin gaps (#9194), multi-line overlap detection (#9219), contract documentation checks (#9448), and live-service witness forms (#9446).

4. **Subagent observability** — Users want hierarchical subagent progress streaming and self/subtree token usage (#9522), plus skill promotion from project scope to user scope (#9515).

5. **Cross-package contract consistency** — Request for a single owner for constants/contracts that must agree across package boundaries (#9151), following drift bugs in approval-mode values.

---

## Developer Pain Points

- **Token accounting reliability is a top frustration** — Three separate open issues (#9309, #9454, #9459) involve incorrect token counts or context compression bugs. Developers cannot trust context/token displays, impacting cost management and session stability.

- **Silent failures are a recurring theme** — Agent launch failures reported as successful (#9509), `ask_user_question` silently declining (#9011), and GitHub silently refusing oversized workflows (#9517) all hide failures from users until it's too late.

- **Session state correctness** — `context.fileName` not working (#5267, 2 months old), duplicate tool-loop detection (#9450), and stale tokens after model switch make long-running sessions unpredictable.

- **CI/CD infrastructure fragility** — The 500KB workflow limit (#9517), wedged queued runs (#9518), and symlinked workspace guard failures (#9480) create flaky, opaque CI failures that are difficult to diagnose.

- **Update/notification UX** — The persistent Homebrew update banner (#9493) and slash-command menu selection resets during streaming (#9494) indicate polish gaps in daily driver workflows.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-20

## 1. Today's Highlights

The v0.9.10 release train is actively rolling out, consolidating 76 commits focused on memory retention, identity, durable approvals, and first-run experience. The i18n migration ("dictionary spine") initiative is gaining momentum with multi-file PRs landing daily, while community maintainers are actively closing out long-standing bug reports including a major v0.9.4-era cluster of issues (Chinese garbled text, SSH sandbox failures, session hangs). A new batch of v0.9.9 regression bugs—including a token limit miscalculation and a missing header status indicator—has opened fresh investigation threads.

## 2. Releases

**No stable release was published in the last 24 hours.** However, PR #5513 ("release: Codewhale v0.9.10 — retention, identity, and durable approvals") is open and carries the complete 76-commit release lane at `0398b4f545a8e0f45c86d3f54be5cb6c82b962c9`, rebased over public main. Expected topics: memory retention fixes (#5472), durable one-shot approvals (#5360), identity improvements, and release-hardening.

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#5518](https://github.com/Hmbown/CodeWhale/issues/5518) | Emergency compaction at ~85–105K tokens despite 327K context (vLLM V4-Flash) | Suggests output-headroom budgeting or handoff contamination may be inflating usage—a major cost/UX concern for long-running sessions. | 3 comments; reproducible repro with detailed config included. |
| [#5455](https://github.com/Hmbown/CodeWhale/pull/5455) | Header status indicator (cw/whale/dots) never renders since 0.9.7 | Cosmetic regression that breaks at-a-glance operational awareness for Windows Terminal users. | Reproduced on 0.9.8/0.9.9; likely a rendering or config-default regression. |
| [#5516](https://github.com/Hmbown/CodeWhale/issues/5516) | HTTP 400 max_tokens=384000 exceeds model limit after v0.9.9 upgrade | Model defaults produce impossible 384K output-token requests—breaks every request. Users report zero manual config. | 1 comment; flagged as high-impact regression. |
| [#5472](https://github.com/Hmbown/CodeWhale/issues/5472) | TUI memory retention: full stdout/stderr kept 1h per Bash call | Compounds memory pressure (owner hit 11 GB swap) from parallel builds; audit found multiple in-process retainers. | Closed; fixes likely in v0.9.10. |
| [#5478](https://github.com/Hmbown/CodeWhale/issues/5478) | `/rename` mid-turn sticks shell tool as "running" | UX bug where rename during a long tool call leaves UI stale; job completes but row never clears. | Closed; repro documented with tmux settings. |
| [#5337](https://github.com/Hmbown/CodeWhale/issues/5337) | Web dictionary spine migration ("isZh" retirement) | Broad i18n architectural cleanup; #5519 shows branches increasing 12→31 over 90 days, blocking convergence. | 6 comments; open epic tracking progress; multiple dependent PRs landed. |
| [#5482](https://github.com/Hmbown/CodeWhale/issues/5482) | EPIC(docs): full Chinese localization + restructure | Growing zh user base; docs are English-only or machine-translated/stale. Tier 1 PR already landed. | 1 comment; systematic roadmap being executed. |
| [#5056](https://github.com/Hmbown/CodeWhale/issues/5056) | Flaky verifier background tests + 12 untriaged `#[ignore]` tests | Test reliability under full-suite parallelism blocks CI confidence; /workspace-sensitive fixtures compound flakiness. | Closed; 9 comments documenting root causes in AGENTS.md. |
| [#1425](https://github.com/Hmbown/CodeWhale/issues/1425) | 300万字小说 batch-processing hangs (agent_wait timeout) | Large-scale subagent orchestration deadlocks; user found interrupts obscure root cause. | Core subagent orchestration reliability concern. |
| [#5403](https://github.com/Hmbown/CodeWhale/issues/5403) | Main red on both platforms across all completed runs | After #5395 stopped cancellation cascades, four consecutive runs are red (plugin_e2e macOS, NSIS Windows) —new information, not new breakage. | 4 comments listing per-commit verdicts. |

## 4. Key PR Progress

| # | PR | What It Does |
|---|----|--------------|
| [#5513](https://github.com/Hmbown/CodeWhale/pull/5513) | release: Codewhale v0.9.10 — retention, identity, durable approvals | 76-commit release lane covering memory retention, durable approvals, first-run identity, and release hardening. Open. |
| [#5514](https://github.com/Hmbown/CodeWhale/pull/5514) | refactor(tui): extract stream processing from turn loop | Isolates response-stream state machine into `process_stream` with `StreamOutcome`; preserves timing/retries in outer loop. Cleanly separates concerns. |
| [#5515](https://github.com/Hmbown/CodeWhale/pull/5515) | fix(tui): forward MCP image results as typed content | Converts standard MCP `image` content into CodeWhale's rich tool-result block; removes inline base64, reuses 5 MiB/one-image validation. Open. |
| [#5517](https://github.com/Hmbown/CodeWhale/pull/5517) | feat(web): move docs/constitution + docs/runtime-api onto dictionary spine (#5337) | Phase 2 of isZh retirement; 14+14 branches → 0; adds both to `OPTIONAL_FILES` with key/token parity enforced. |
| [#5509](https://github.com/Hmbown/CodeWhale/pull/5509) | fix(tui): restore /title as independent terminal window title | Reverts the merge that made `/title` a `/rename` alias; restores independent terminal window title behavior per #5430. |
| [#5491](https://github.com/Hmbown/CodeWhale/pull/5491) | fix(tui): persist approval outcomes before execution | Denies execution when terminal approval receipt can't persist; rejects stale decisions; reconstructs interrupted state on resume. Closes #5360. |
| [#5506](https://github.com/Hmbown/CodeWhale/pull/5506) | feat(tui): command context adapters + migration gate (FEAT-015) | Dependency-injection infrastructure for migrating slash commands incrementally, with zero production groups migrated yet. |
| [#5507](https://github.com/Hmbown/CodeWhale/pull/5507) | docs(i18n): complete Tier 1 of Chinese docs localization | Restructures docs into per-language folders (`docs/zh_hans/`); migrates existing LSP pages and validates key/token parity. |
| [#5511](https://github.com/Hmbown/CodeWhale/pull/5511) | feat(tui): show repository context in git chrome | Header shows `repo · branch*`, worktree paths, ahead/behind counts; truncates long names with ellipsis. |
| [#5510](https://github.com/Hmbown/CodeWhale/pull/5510) | docs(readme): restore the star history chart | Restores README star growth chart removed in `4bc02de`; applies also to translated READMEs. |

## 5. Feature Request Trends

- **i18n & Chinese localization** — A systematic migration from ad-hoc `isZh` ternaries to a typed dictionary spine (#5337) plus a full documentation localization epic (#5482) reflects strong demand from the Chinese-speaking user base. Community contributors are actively executing the plan in phases.
- **Durable, fail-closed approval flows** — Repeated requests to make one-shot approval outcomes persist and fail closed (#5360) indicate growing usage in automated/YOLO contexts where approval authenticity matters for audit and safety.
- **Repository/worktree context visibility** — PR #5511 responds to an approved request slice (#5437) for clearer agent "where am I" signals in the TUI header.
- **Release hardening & CI reliability** — Cross-platform red runs (#5403), flaky verifier tests (#5056), and request-cancellation fixes (#5395) point to a community push for trusted CI gates.
- **Memory retention discipline** — #5472's audit (output retention, token budgeting) suggests users are hitting real memory ceilings during heavy parallel workloads; expect more retention-related features.

## 6. Developer Pain Points

- **Regressions from version upgrades** — v0.9.9 introduced multiple regressions: `max_tokens=384000` exceeding model limits (#5516), invisible header status (#5512), and `/rename` command coupling (#5430/#5509). Users are repeatedly bitten by config-default mismatches.
- **Compaction and token-budget opacity** — Emergency compaction fires at 85–105K tokens despite 327K configured contexts (#5518), and `max_token` miscalculations surface only at HTTP level—developers want transparent budgeting and safe fallbacks.
- **Large-scale subagent orchestration fragility** — The 3M-character novel hang (#1425) and agent_wait timeouts show subagent orchestration needs better resilience against partial failures; interrupts can mask the true root cause.
- **Shell/SSH sandbox interference** — Exit code 255 from SSH tunnels suggests outbound TCP 22 blocking inside the TUI shell sandbox (#1829), breaking legitimate workflows like remote deployment.
- **i18n drift and convergence** — The web `isZh` branch count grew 12→31 in 90 days (#5519), showing that without a "one-way ceiling" or enforcement tooling, i18n migrations can lose ground and fragment over time.
- **CI flakiness under parallelism** — Verifier background tests still flake under full-suite parallelism (#5056); /workspace-sensitive fixtures make local vs CI behavior diverge, eroding trust in test signals.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*