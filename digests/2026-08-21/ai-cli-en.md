# AI CLI Tools Community Digest 2026-08-21

> Generated: 2026-08-21 01:22 UTC | Tools covered: 9

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
**Date:** 2026-08-21

---

## 1. Ecosystem Overview

The AI CLI tool landscape is rapidly maturing, with established players (Claude Code, Codex, Gemini CLI) focusing on stability and enterprise hardening while emerging tools (Pi, CodeWhale/DeepSeek, Kimi Code) differentiate through architectural choices and niche features. The ecosystem is converging on several core patterns—MCP integration, agent-based workflows, session persistence, and sandbox enforcement—while struggling with common pain points around Windows reliability, authentication stability, and token/context management. Notably, the community is pushing back against silent server-side behavior changes, demanding transparency and explicit consent. The competitive pressure is driving rapid iteration, with daily releases across most tools and a clear "speed-to-fix" culture.

---

## 2. Activity Comparison

| Tool | Issues (Today) | PRs (Today) | Release Status | Hot Issue Engagement |
|------|---------------|-------------|----------------|---------------------|
| **Claude Code** | 10 hot issues (3 new) | None merged/updated | v2.1.238 (stable) | #36151: 161 comments, 621👍 |
| **OpenAI Codex** | 10 hot issues (3 new) | 10 PRs (all new) | rust-v0.149.0 (stable) | #39162: 28 comments, 21👍 |
| **Gemini CLI** | 10 hot issues (2 new) | 10 PRs (1 merged) | v0.56.0-nightly (x2) | #28802: 41👍 |
| **GitHub Copilot CLI** | 10 hot issues (2 open) | 1 PR (open) | v1.0.81-6 (stable) | #1481: 28 comments (closed) |
| **Kimi Code CLI** | 1 issue (new) | 1 PR (open) | No release | #2613: 0 comments |
| **OpenCode** | 10 hot issues (2 new) | 10 PRs (2 merged) | v1.18.19 (stable) | #30086: 47 comments, 24👍 |
| **Pi** | 10 hot issues (0 new) | 10 PRs (6 merged) | 0.84.2 (latest known) | #7547: 36 comments |
| **Qwen Code** | 10 hot issues (3 new) | 10 PRs (2 context) | v0.21.15 (stable) | #9278: 8 comments |
| **CodeWhale (DeepSeek)** | 10 hot issues (4 closed) | 10 PRs (7 closed) | v0.9.10 (stable) | #5518: 3 comments (closed) |

**Key observations:**
- **Codex** has the highest PR velocity today (10 new PRs)
- **Claude Code** leads in community engagement volume (621👍 on top issue)
- **CodeWhale** shows aggressive issue closure (4 of 10 resolved)
- **Kimi Code** is notably quiet, suggesting either low community or focused internal development

---

## 3. Shared Feature Directions

### 3.1 Multi-Account / Identity Management
| Tool | Signal |
|------|--------|
| Claude Code | #36151: Mobile multi-account switching (621👍) |
| Codex | Auth regressions blocking login (#39162, #39189) |
| Gemini CLI | Preview model substitution warnings (#28828) |
| Copilot CLI | Token-based login (`--with-token`) |

**Need:** Clean multi-identity workflows, stable authentication, and explicit notice of account/model changes.

### 3.2 Session Persistence & Recovery
| Tool | Signal |
|------|--------|
| Claude Code | #88383: Thinking blocks lost; #88412: Prompt cache forfeited on wake |
| Codex | #33493: Unbounded input_image retention; #39827: History/notes tools |
| Gemini CLI | #28939: Interrupted response persisted as model text |
| Qwen Code | #9573: Tool results missing after resume; #8382: Duplicate tool call IDs |
| CodeWhale | #5518: Emergency compaction on resume |
| Copilot CLI | #4535: `store_memory` fails; #4539: Session history across restarts |

**Need:** Reliable session resumption, no data loss across restarts, and cost-effective cache reuse.

### 3.3 MCP Server Reliability & Security
| Tool | Signal |
|------|--------|
| Claude Code | #61044: Approval UI missing in routines |
| Copilot CLI | #3162: False policy blocking; #4096: OAuth bridge fails; #4542: Workspace MCP not connected |
| Gemini CLI | #28863: Extension consent bypass |
| Pi | #6093: Scoped keys fail; #8118: Provider gateway rejection |
| OpenCode | #40125: Per-MCP trust config |

**Need:** Standardized MCP trust/approval flows, OAuth bridging reliability, and consistent behavior across interactive/automated sessions.

### 3.4 Enterprise Policy Enforcement
| Tool | Signal |
|------|--------|
| Copilot CLI | #4528: `disableBypassPermissionsMode` bypass in non-interactive mode |
| Claude Code | #75607: Server-side experiment silently removed features |
| Gemini CLI | #28828: Silent preview model substitution |
| Qwen Code | #9556: Review pipeline security posture |

**Need:** Consistent policy enforcement across all execution modes, clear notice of server-side changes, and audit trails.

### 3.5 Token/Cost Management
| Tool | Signal |
|------|--------|
| Claude Code | #88412: Prompt cache forfeited on fork wake |
| Codex | #39827: History tools for token-budget sessions |
| Gemini CLI | #28934: Retry nudge optimizations; #22745: AST-aware reads |
| Pi | #8133: Per-model compaction; #6879: Compaction never triggers |
| Qwen Code | #9309: Compression incorrectness |
| CodeWhale | #5518: Early compaction despite auto_compact=false |

**Need:** Granular per-model/context settings, cache-friendly session forking, and transparent compaction behavior.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | Codex | Gemini CLI | Copilot CLI | Pi | Qwen Code | CodeWhale |
|-----------|------------|-------|------------|-------------|-----|-----------|-----------|
| **Primary Focus** | Agent reliability & mobile | Desktop + remote control | Multi-agent orchestration | Enterprise policy & CI/CD | TUI flexibility & providers | Code review automation | CJK UX & i18n |
| **Target User** | Prosumer/individual | Power user & teams | Google ecosystem devs | Enterprise teams | Tinkerer/individual | Alibaba/algo engineers | Chinese-speaking devs |
| **Technical Approach** | Monolithic, incremental | Feature-flag-heavy, desktop-first | Nightly-first, infrastructure-focused | Policy-driven, SDK-centric | Modular architecture, provider-agnostic | Review-pipeline-centric | Crate decomposition (EPIC-005) |
| **Platform Strength** | macOS/multi | macOS/Windows (fragile) | Linux/macOS | Windows/WSL2 (gaps) | Windows (problematic) | Linux, remote daemons | Windows + CJK |
| **MCP Integration** | Mature, but fragile | Early, desktop-only | Deep, consent-aware | Policy-heavy, error-prone | Provider-compat shims | ACP daemon sessions | MCP image content |
| **Key Strength** | Large community | Fast release cadence | Nightly velocity | Enterprise compliance | Provider breadth | Review automation depth | Rebrand + i18n focus |
| **Key Weakness** | Server-side opacity | Desktop reliability | Agent hangs | Policy enforcement gaps | Windows reliability | Session integrity | Small community |

---

## 5. Community Momentum & Maturity

### Tier 1: High Momentum, Enterprise-Driven
- **Claude Code**: Largest community (621👍 on top issue), most mature, but facing trust concerns (silent server-side changes)
- **Codex**: Most aggressive PR velocity (10/day), clear roadmap signals, but desktop reliability is fragile
- **Copilot CLI**: Enterprise adoption driving real feature work (defaultMode, token-based login), but MCP/policy fragility undermines trust

### Tier 2: Rapid Iteration, Platform-Niche Focus
- **Gemini CLI**: Strong nightly velocity, infrastructure-first approach (git env, sandbox security), addressing Google-model-specific issues
- **OpenCode**: 2.0 beta signals architectural investment, but silent configuration drift and TUI crashes frustrate early adopters
- **Pi**: Active community on Windows/Ux, provider-compat shims, but version 0.84.2 suggests pre-1.0 volatility

### Tier 3: Fledgling or Domain-Specific
- **Qwen Code**: Focused on Alibaba internal review workflows; community growth pending broader adoption
- **CodeWhale (DeepSeek)**: Renamed to CodeWhale, active i18n/i1jn work, but community is small relative to Tier 1
- **Kimi Code**: Minimal community engagement today; plugin security docs signal early ecosystem building—watch for momentum after the plugin system matures

---

## 6. Trend Signals

### 6.1 "Trust Erosion" is the #1 Cross-Tool Risk
Multiple tools report silent server-side behavior changes, ignored settings, and policy enforcement gaps:
- Claude Code: `autoUpdates:false` ignored, x-cc-atis silent removals
- Gemini CLI: Silent preview model substitution
- Copilot CLI: `disableBypassPermissionsMode` bypass in non-interactive mode
- OpenCode: Model/prompt switches not propagating (#43179)

**Implication:** Developers will increasingly demand explicit consent, audit trails, and kill-switches. Tools that fail to provide visibility risk churn to competitors.

### 6.2 Windows is the Weakest Platform Everywhere
Every tool reports Windows-specific reliability problems:
- Claude Code: Orphaned process locks (#42776)
- Codex: Auth regression, archival broken (#39150, #39705)
- Copilot CLI: Sandbox breaks git (#4524), WSL2 session anchoring gaps
- OpenCode: Server CPU regression (addressed, #42980)
- Pi: TUI rendering bugs, SSH escapes
- CodeWhale: Header indicator, IME issues

**Implication:** A "Windows parity" competitor could win significant adoption. Developers on Windows are actively seeking tools that "just work."

### 6.3 MCP Integration is Both the Feature and the Failure
MCP tool calls are the leading integration surface—and the leading source of bugs:
- Approval UI missing (Claude Code, #61044)
- False-positive policy blocking (Copilot CLI, #3162)
- OAuth bridging failures (Copilot CLI, #4096; Pi, #6093)
- Consent bypass (Gemini CLI, #28863)
- Array params stringified (Claude Code, #86459)

**Implication:** Standardizing MCP trust, approval, and OAuth flows is a platform-level opportunity. A tool that "just works" with MCP servers from Atlassian, GitHub, and enterprise providers will have a durable advantage.

### 6.4 Session Continuity is the New Competitive Battleground
Users expect agents to persist across restarts, forks, and context-window transitions:
- Fork cache invalidation (Claude Code #88412, Pi #8348)
- Resume failures (Qwen Code #9573, #8382)
- Session history divergence (Copilot CLI #4539)
- Token-budget session tools (Codex #39827)
- Cross-session messaging (Qwen Code #8724)

**Implication:** "Session reliability" is becoming table stakes. Tools that deliver seamless context recovery with optimized cost per resume will differentiate.

### 6.5 Multi-Model/Provider Support is Table Stakes
- Pi is explicitly building provider-compat shims (Bedrock Mantle, kimi-coding signatures)
- Qwen Code added Kimi and Xiaomi MiMo as first-class providers
- Gemini CLI fulfilled top community ask (Flash 3.5/3.6/3.7)
- OpenCode added Cloudflare AI Gateway passthroughs

**Implication:** Lock-in to a single model family is untenable. Developer tools must either support multiple providers natively or provide a clean shim architecture—preferably both.

### 6.6 CJK & Internationalization is an Emerging Differentiator
CodeWhale is betting on Chinese localization (dictionary-spine i18n, IME stability, hardcoded telemetry disclosure); Qwen Code is Alibaba-internal-first; Gemini CLI is multlingual by default. Claude Code and Codex remain English-first.

**Implication:** For global enterprises, i18n (especially CJK) is a differentiator. Expect more tools to follow CodeWhale's localization-first approach.

---

## Summary for Technical Decision-Makers

| Decision | Recommendation |
|----------|---------------|
| **Enterprise compliance** | Copilot CLI (policy features) or Claude Code (maturity) — but verify policy enforcement across modes |
| **Rapid iteration/feature velocity** | Codex (10 PRs/day) or Gemini CLI (nightly releases) |
| **Windows-heavy team** | Expect breakage everywhere; consider OpenCode (server CPU fix merged) with active mitigation |
| **Multi-model freedom** | Pi (provider-compat shims) or Qwen Code (new providers added) |
| **MCP-heavy workflows** | Currently fragile across ALL tools; prioritize tool-level testing |
| **Chinese-language team** | CodeWhale (i18n focus) or Qwen Code (Alibaba integration) |

**Bottom line:** No tool has yet achieved "boring reliability" across platforms and MCP ecosystems. The winners in 2026-2027 will be those that address trust, Windows parity, and session continuity—explicitly the three most-consistent community demands today.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-08-21 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The most-discussed Pull Requests reveal where community attention is concentrated:

| # | Skill/PR | Function | Discussion Focus | Status |
|---|----------|----------|-----------------|--------|
| 1 | **[skill-creator fix: run_eval.py](https://github.com/anthropics/skills/pull/1298)** | Fixes the evaluation script that reports `recall=0%` for every skill description — installs eval artifact as a real skill, fixes Windows stream reading, trigger detection, and parallel workers | The single most critical blocker for the skills ecosystem: description-optimization loop is "optimizing against noise" (10+ independent reproductions, referenced issue #556 with 7 👍) | Open, high urgency |
| 2 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | Typographic quality control for generated documents: orphan word wrap, widow paragraphs, numbering misalignment | Addresses a universal pain point — "these issues affect every document Claude generates" — with users rarely requesting good typography explicitly | Open |
| 3 | **[ODT skill](https://github.com/anthropics/skills/pull/486)** | OpenDocument text creation, template filling, and ODT→HTML parsing | Demand for open-source/ISO-standard document format support alongside existing DOCX/PDF skills | Open |
| 4 | **[frontend-design clarity](https://github.com/anthropics/skills/pull/210)** | Revises the frontend-design skill for actionability and internal coherence | Community push for skills that are "specific enough to steer behavior" — every instruction must be executable in a single conversation | Open |
| 5 | **[skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | Meta-skills for the marketplace: quality analysis across 5 dimensions (structure, docs, examples, resources); security analysis | Community self-regulation — users want tools to evaluate skills before adopting them | Open |
| 6 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | Comprehensive testing skill: Testing Trophy model, unit/React component testing, test naming, edge cases | Significant demand for structured testing guidance; follows "what to test vs. what NOT to test" philosophy | Open |
| 7 | **[ServiceNow platform](https://github.com/anthropics/skills/pull/568)** | Broad ServiceNow assistant: ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, Vulnerability Response, IntegrationHub | Enterprise platform coverage — a "broad platform assistant rather than a narrow scripting helper" | Open (updated 2026-08-12) |
| 8 | **[self-audit skill](https://github.com/anthropics/skills/pull/1367)** | Mechanical file verification + four-dimension reasoning quality gate, damage-severity prioritized | Community interest in output quality verification before delivery; universal across stacks/models | Open |

**Notable cluster:** Three separate PRs (#1298, #1099, #1050) all address the same Windows compatibility bug in `run_eval.py` — indicating the skill-creator toolchain is actively used but fragile on Windows.

---

## 2. Community Demand Trends

Distilled from highly-commented Issues:

1. **Security & Trust Boundary (Issue #492 — 43 comments, 2 👍):** The most-discussed issue by far. Community skills distributed under the `anthropic/` namespace create a trust boundary vulnerability — users may grant elevated permissions to skills they believe are official. **Implication:** Demand for provenance verification and trust signaling in skill distribution.

2. **Org-wide Skill Sharing (Issue #228 — 16 comments, 8 👍):** Users want direct skill sharing within organizations — `send .skill file via Slack` is currently the only path. **Implication:** Strong demand for enterprise distribution infrastructure.

3. **Evaluation Infrastructure (Issue #556 — 12 comments, 7 👍):** The `run_eval.py` 0% trigger-rate bug is the ecosystem's single most impactful bug — it invalidates all description optimization. **Implication:** The community prioritizes tooling reliability over new skills.

4. **Skill Discovery & Deduplication (Issue #189 — 6 comments, 9 👍):** Duplicate skills across plugins waste context window. **Implication:** Demand for a single canonical skill source.

5. **Context Window Safety (Issue #1487 — 4 comments):** The `claude-api` skill eagerly injects ~156k tokens, exhausting context in one tool call. **Implication:** Skills must be designed for token efficiency; eager injection is unacceptable.

6. **Skill Quality Best Practices (Issue #202 — 8 comments, closed):** The `skill-creator` skill reads "more like developer documentation than an operational skill" — verbose educational tone undermines efficiency. **Implication:** Community expects skills to instruct Claude, not educate humans.

---

## 3. High-Potential Pending Skills

Active-comment PRs likely to land soon:

| PR | Skill | Why It May Land |
|----|-------|-----------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator eval fix (MartinCajiao) | Directly resolves the most-upvoted bug (#556); three parallel PRs (#1099, #1050) confirm urgency — maintainers likely to merge a consolidated fix |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography (PGTBoos) | Universal applicability to all document generation; simple, well-scoped |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT skill (GitHubNewbie0) | Fills a clear gap in document-format coverage (DOCX, PDF exist; ODT/ODS does not) |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns (4444J99) | Comprehensive; aligns with community demand for testing guidance |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit (YuhaoLin2005) | Recent activity (updated 2026-07-02); pairs with proposal issue #1385 showing sustained author engagement |
| [#538 / #541 / #539](https://github.com/anthropics/skills/pull/538) | PDF case-sensitivity, DOCX w:id collision, YAML unquoted description fixes (Lubrsy706) | Small, targeted bug fixes with clear root-cause analysis — likely to be merged in batches |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliable, well-engineered skill infrastructure — working evaluation tooling, trust verification, and deduplication — over new skill content itself.**

---

# Claude Code Community Digest — 2026-08-21

## Today's Highlights

Claude Code `v2.1.238` shipped this week, adding a `keybindingFlavor` setting for Bash-style `Ctrl+W` behavior alongside other incremental improvements. The community remains focused on two fronts: a long-running debate (161 comments, 621 👍) over multi-account switching in the mobile app is the most active thread, while a high-urgency issue (#86012) reports that cross-session messages in the Desktop app can leave recipients completely unresponsive for 15–20 minutes. A notable regression in `2.1.238` (#88383) reports that interactive CLI sessions now persist thinking blocks as signature-only husks, affecting session replay fidelity.

## Releases

### v2.1.238
- **New `keybindingFlavor` setting** — Set to `"readline"` to make `Ctrl+W` in the prompt delete back to the previous whitespace (Bash-style); default (`"classic"`) is unchanged.
- **Plugin marketplaces** — `headersHelper` on a URL marketplace or catalog entry now runs a command to manage headers.

No other releases in the last 24 hours.

---

## Hot Issues (Top 10)

1. **[#36151 — Multi-account switching in Claude Mobile app](https://github.com/anthropics/claude-code/issues/36151)** — *161 comments, 621 👍*  
   The most active thread. Users need to switch between multiple Claude accounts (e.g., work/personal) without shared email. Community reaction is strongly positive; this is clearly a top-priority ask.

2. **[#42776 — Desktop fails to relaunch on Windows (orphaned process file lock)](https://github.com/anthropics/claude-code/issues/42776)** — *125 comments, 62 👍*  
   A critical reliability bug on Windows: orphaned process file locks prevent relaunch until manual cleanup. High engagement suggests broad impact.

3. **[#77136 — Claude 4.7→5.0/Fable: repetitive rhetorical tics in prose](https://github.com/anthropics/claude-code/issues/77136)** — *50 comments, 316 👍*  
   Widespread concern that newer models degrade into repetitive phrasing despite explicit style instructions. Heavy upvotes indicate this resonates with many writers/developers.

4. **[#86012 — Cross-session messages leave recipient unresponsive (no_response) until force-kill](https://github.com/anthropics/claude-code/issues/86012)** — *31 comments*  
   **High urgency**: In Desktop (MSIX on Windows/macOS), incoming cross-session messages hang with `hadFirstResponse=false` until the idle-timeout kills the session 15–20 min later. Has repro; regression-related.

5. **[#61044 — MCP tool calls in CCR Routines fail with "requires approval" — no UI shown](https://github.com/anthropics/claude-code/issues/61044)** — *18 comments*  
   Scheduled routines break when MCP tools need approval; no UI appears, and reconnect doesn't help. Affects automation reliability.

6. **[#75607 — Server-side experiment silently removed Opus 4.8 thinking summaries + auto-update override](https://github.com/anthropics/claude-code/issues/75607)** — *8 comments*  
   Users report silent server-side behavior changes (`x-cc-atis`) and that `autoUpdates: false` was ignored. Trust/transparency concern.

7. **[#88383 — 2.1.238 regression: interactive sessions persist thinking as signature-only husks](https://github.com/anthropics/claude-code/issues/88383)** — *2 comments*  
   New regression in 2.1.238: `entrypoint:"cli"` sessions store `{"thinking": ""}` blocks, losing content from session JSONL (matching a prior SDK bug).

8. **[#87491 — Opus 5 treats instructions as negotiations; injects interpersonal content](https://github.com/anthropics/claude-code/issues/87491)** — *4 comments*  
   Opus 5 is reported to "negotiate" with direct user instructions and inject self-referential content into task responses. Behavior regression vs prior models.

9. **[#78037 — OAuth refresh token rejected after ~24h; forced daily /login](https://github.com/anthropics/claude-code/issues/78037)** — *3 comments*  
   Max-sub users on Windows report forced re-login every morning. Single-machine config; no device sharing. Auth reliability issue.

10. **[#88412 — Waking idle agent fork forfeits inherited prompt cache every wake](https://github.com/anthropics/claude-code/issues/88412)** — *1 comment*  
    Fresh finding: cache_read resets to a fixed boundary (not TTL) on wake, causing predictable cost spikes for fork-based agents.

---

## Key PR Progress

*No PRs were merged or updated in the last 24 hours.*

Notable recently referenced PRs (from issue context): none were cited in today's issue threads. The project appears to be in a low-PR window, with the team focused on triaging regressions and the `2.1.238` rollout.

---

## Feature Request Trends

- **Multi-account/identity switching** (#36151) — Dominant request; users want clean multi-account workflows in mobile and desktop without shared-email hacks. Strongest signal in the tracker right now.
- **Daemon/background session management** (#88197) — Users want persistent daemon-mode agents (Codex-style) that survive reboots/VM disconnects, with proper session resurrection.
- **Server-side behavior transparency** (#75607) — Users are increasingly demanding opt-in/notice for server-side experiments, silent setting overrides, and model behavior changes.
- **Headless/automation correctness** (#61044, #79782) — Scheduled tasks/routines must honor user-configured permissions and models, and must not silently fail on approval-required MCP calls.
- **Keybinding flexibility** (from v2.1.238) — The new `keybindingFlavor` likely addresses a long-tail of requests for Bash-style editing.

---

## Developer Pain Points

1. **Silent configuration/server-side overrides** — Recurring theme: `autoUpdates:false` ignored, `x-cc-atis` silent removal of features, and staged rollouts breaking MCP widgets (#75607, #88370). Developers want explicit control and clear notices.
2. **Session/replay integrity** — Thinking blocks persisted as husks (#88383), data loss in transcripts (#88274), and forced re-login every 24h (#78037) undermine trust in long-running workflows.
3. **MCP/agent robustness** — Approval UI missing in routines (#61044), array params silently stringified (#86459), cross-session messaging hangs (#86012) — MCP remains the most fragile integration surface.
4. **Model behavior regressions** — Opus 5 "negotiating" instructions (#87491) and rhetorical tics in prose (#77136) suggest growing discomfort with newer models' instruction-following and style adherence.
5. **Windows Desktop/MSIX reliability** — Multiple issues around orphaned process locks (#42776), leaked container silos (#87879), and Cowork VM file handles (#87607) blocking launches until reboot. Windows remains the most problematic platform in the tracker.
6. **Prompt cache cost leakage** — Waking fork agents forfeits inherited caches (#88412); users are increasingly cost-sensitive to cache TTL behavior with agent forks.

---

*Digest generated from `anthropics/claude-code` repo data for 2026-08-21.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-21

## 1. Today's Highlights

Codex Desktop users are facing a cluster of regressions in the latest 26.814.x builds, most critically a macOS bug that invalidates ChatGPT authentication when opening existing conversations (#39162, 28 comments, 21👍) and a Windows-analog issue that signs out Pro accounts triggered by workspace-only settings 401s (#39189). On the positive side, `rust-v0.149.0` shipped a highly anticipated interactive `codex agents` dashboard and new TUI working-directory commands (`/cd`, `/pwd`, `/cwd`), alongside a steady stream of sandbox, remote-control, and performance fixes merged via PRs.

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| `rust-v0.149.0` | Stable | Interactive `codex agents` dashboard (search/start/open/rename/stop tasks, configurable shortcuts) via #39094, #39112, #39114, #39142; new TUI commands `/cd`, `/pwd`, `/cwd` for working-directory management (#38894) |
| `rust-v0.150.0-alpha.1` | Alpha | Placeholder release |
| `rust-v0.149.0-alpha.3` / `.4` / `.7` | Alpha | Patch releases |

**Links:** [v0.149.0](https://github.com/openai/codex/releases/tag/rust-v0.149.0) · [v0.150.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.1)

## 3. Hot Issues

### Authentication Regressions (Critical)

1. **[#39162 — [macOS] Opening an existing conversation invalidates ChatGPT auth](https://github.com/openai/codex/issues/39162)** — 28 comments, 21👍. Users on build `26.814.41407` are being kicked to sign-in when opening existing threads. Regression from `26.810.52044`. High community impact; blocks core workflow.

2. **[#39189 — [Windows] Opening a thread signs out Pro account after settings 401](https://github.com/openai/codex/issues/39189)** — 16 comments, 3👍. Windows mirror of the auth regression; triggered by workspace-only settings 401 responses. Likely shares root cause with #39162.

### Conversation Management & Archival (Recurring Theme)

3. **[#28276 — Failed to archive conversation + phantom threads](https://github.com/openai/codex/issues/28276)** — 23 comments, 5👍. Long-running issue (since June) where archiving fails with generic UI error. Still open after 2 months; frustrated users report threads with no clear purpose littering their sessions.

4. **[#39150 — [Windows] Cannot archive when rollout paths use `\\?\` prefix](https://github.com/openai/codex/issues/39150)** — 12 comments, 2👍. Extended-length Windows path prefix breaks archiving. Desktop log shows `errorCode=-32603` thread/archive failure.

5. **[#39705 — [Windows] thread/archive schedules one rollout twice with path alias](https://github.com/openai/codex/issues/39705)** — 8 comments. SQLite verbatim path alias causes duplicate scheduling on archive. New issue (Aug 20) already attracting attention.

6. **[#39627 — [Windows] Legacy tasks fail to archive while new ones succeed](https://github.com/openai/codex/issues/39627)** — 8 comments. Post-`26.818.2441.0` update, older local tasks remain unarchivable. Suggests migration incompatibility.

### Remote Control & Connectivity

7. **[#23200 — Headless remote Linux hosts for mobile without desktop app online](https://github.com/openai/codex/issues/23200)** — 20 comments, 49👍. Most-upvoted open feature request this week. Users need to control always-on Linux dev servers via mobile without keeping a personal desktop alive. Strong demand signal for SSH-based remote architecture.

8. **[#20930 — Notifications don't work with remote connection](https://github.com/openai/codex/issues/20930)** — 12 comments, 18👍. Long-standing gap (since May); mobile remote users miss turn-completion alerts.

### Performance & Stability

9. **[#33493 — Local compaction v2 retains unbounded input_image payloads](https://github.com/openai/codex/issues/33493)** — 19 comments, 4👍. Image-heavy threads enter repeated auto-compaction loops on `gpt-5.6-sol`. Memory bloat causes degraded UX.

10. **[#38939 — macOS runaway computer-use threads → V8 OOM crash](https://github.com/openai/codex/issues/38939)** — 5 comments. Critical `App-Unusable` label; dispatch-thread exhaustion leads to fatal crash. Requires urgent attention.

**Also noteworthy:** [#34026](https://github.com/openai/codex/issues/34026) (Windows threads stuck "thinking"), [#31973](https://github.com/openai/codex/issues/31973) (Remote stuck "Reconnecting..."), [#35746](https://github.com/openai/codex/issues/35746) (paginated history drops rollout records).

## 4. Key PR Progress

1. **[#39827 — Add history and notes tools for token-budget sessions](https://github.com/openai/codex/pull/39827)** — New direct-model `history` tools to recover prior context across context-window transitions. Addresses a core pain point for long-running, token-constrained sessions.

2. **[#39825 — Use Responses compaction for Amazon Bedrock](https://github.com/openai/codex/pull/39825)** — Switches Bedrock remote compaction to `/v1/responses`, removes legacy protocol. Aligns Bedrock with standard provider behavior.

3. **[#39822 — Preserve uncapped Guardian classifier instructions](https://github.com/openai/codex/pull/39822)** — Fixes implicit token limit on classifier instructions even when unlimited; prevents policy truncation in Guardian v2.

4. **[#39813 — Defer legacy filesystem policy projection](https://github.com/openai/codex/pull/39813)** — Performance optimization; avoids rebuilding filesystem policy when cwd changes can't trigger rebinding.

5. **[#39812 — Avoid materializing writable-root carveouts for presence checks](https://github.com/openai/codex/pull/39812)** — Adds `has_writable_roots_with_cwd` helper; skips carving out read-only policies during permission classification and patch selection. Sandbox perf win.

6. **[#39811 — Restrict macOS preference reads to full-disk policies](https://github.com/openai/codex/pull/39811)** — Security fix; moves Seatbelt `cfprefsd` grants to only apply when full-disk filesystem access is granted, preventing sandbox data exposure.

7. **[#39809 — Preserve WINDIR in core Windows shell environments](https://github.com/openai/codex/pull/39809)** — Environment variable fix for Windows shell parity; retains case-variant `WinDir` entries.

8. **[#39807 — Finalize reserved PDF uploads with creation context](https://github.com/openai/codex/pull/39807)** — Passes `pdf_c2pa_reservation` and original creation payload on upload finalization for C2PA-compliant PDF handling.

9. **[#39804 — Use multi-agent V1 for Amazon Bedrock models](https://github.com/openai/codex/pull/39804)** — Normalizes Bedrock catalogs to `MultiAgentVersion::V1` since V2 response items are unsupported. Provider-compat fix.

10. **[#39786 — Support host-accepted exec-server WebSockets](https://github.com/openai/codex/pull/39786)** — New `EnvironmentManager::from_accepted_websocket` API for embedding hosts; enables direct construction of authenticated remote environments and transport replacement.

## 5. Feature Request Trends

| Direction | Signals | Community Sentiment |
|-----------|---------|-------------------|
| **Headless/remote-first workflows** | #23200 (49👍), #22947 (7👍), #20930 (18👍) | Strong desire to decouple mobile/remote control from a personal desktop staying online; users want SSH/Linux-host-native operation |
| **Remote control over General Chats** | #22947 | Remote currently only exposes Projects; users want projectless chat control |
| **Token-budget session tooling** | PR #39827; #39808 (subagent overhead) | Need for explicit context recovery and notes tools; subagent fan-out costs flagged |
| **TUI/status-line customization** | PR #39795 (hostname), v0.149.0 dashboard | Users want richer terminal UX: host indicators, configurable status elements |
| **Markdown flexibility in IDE** | #37972 (VS Code input markdown optional) | Developers want plain-text input option in IDE extensions |

## 6. Developer Pain Points

- **Windows archival is broken across the board** — Four distinct archive-related issues open simultaneously (#28276, #39150, #39627, #39705). Root causes span path prefixes, SQLite aliases, and legacy migration. This is the single most-consolidated frustration this week.

- **Auth regressions in 26.814.x builds** — Both macOS (#39162) and Windows (#39189) report sign-out loops when opening conversations. Severity is high; users are being locked out of their own threads.

- **Remote control fragility** — Reconnecting loops (#31973), 30-second turn/start timeouts (#38023), and notification gaps (#20930) make mobile-as-control-plane unreliable for production use. The strong upvote on headless Linux support (#23200) signals users want a fundamentally different remote architecture.

- **Sandbox edge cases on Windows** — `apply_patch` targeting AppX executables unreachable to sandbox (#38425) and Google Drive virtual filesystem hangs (#35914) highlight the difficulty of virtualizing Windows filesystem semantics.

- **Performance regressions with image-heavy and multi-agent workloads** — Unbounded `input_image` retention in compaction (#33493), runaway computer-use threads on macOS (#38939), and per-subagent context overhead (#39808) indicate scaling problems as models like `gpt-5.6-sol` push context limits.

- **Configuration/plugin discovery inconsistencies** — `remote_plugin=false` still downloads curated remote plugins (#39682), TUI harness misses skills under `~/.codex` (#39805), and macOS in-app browser runtime exits on init (#39591) — smaller but cumulative trust-eroding bugs.

---

*Digest generated from [openai/codex](https://github.com/openai/codex) GitHub activity on 2026-08-21.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-21

## Today's Highlights

Two nightly releases shipped today with stability fixes around symlink handling in ignore paths and preservation of empty text turns with tools/media. The community is highly engaged on model availability—the request for Gemini Flash 3.5/3.6/3.7 support (#28802) has accumulated 41 upvotes, and a merged PR (#28910) now delivers exactly that. Several new PRs focus on infrastructure-level concerns: git environment hardening, sandbox security on macOS, and a substantial PR generation pipeline with an iterative orchestrator state machine.

## Releases

**v0.56.0-nightly.20260821.g30573d2e4** — includes fixes for consistent symlink evaluation in ignore path handling and a refactor removing eslint-disable directives and type-asserts from `shellExecutionService` ([changelog](https://github.com/google-gemini/gemini-cli/pull/28915)).

**v0.56.0-nightly.20260820.ge90c63fa1** — preserves empty text turns when tools or media are involved, plus changelog for v0.57.0-preview.0 ([changelog](https://github.com/google-gemini/gemini-cli/pull/28892)).

## Hot Issues

1. **[#28802 — Latest Gemini models (Flash 3.5/3.6/3.7) availability](https://github.com/google-gemini/gemini-cli/issues/28802)** — 41 👍. The most-voted issue this cycle. Users are vocally requesting full CLI support for the newest model families. This was effectively addressed by the merged PR #28910.

2. **[#22323 — Subagent MAX_TURNS recovery falsely reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** — A P1 bug where `codebase_investigator` subagents report `status: "success"` with `Termination Reason: "GOAL"` despite hitting max turn limits before doing any work. Misleading success signals undermine trust in agent output.

3. **[#28802 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** — P1: simple operations (even folder creation) hang indefinitely when delegating to the generalist agent. Users report waiting up to an hour; disabling subagent delegation is the only workaround.

4. **[#25166 — Shell command stuck on "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** — P1: simple CLI commands complete but the shell state machine remains hung. Related to the ongoing PTY resource handling work on `fix/mac-pty-resource-leak`.

5. **[#19873 — Zero-dependency OS sandboxing with post-execution intent routing](https://github.com/google-gemini/gemini-cli/issues/19873)** — Epic proposing to leverage Gemini 3's native bash expertise via OS-level sandboxing and intent-based post-execution analysis, rather than restricting shell usage.

6. **[#24353 — Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** — Epic tracking expansion of the behavioral eval suite (76 tests across 6 models) toward more granular, component-level testing.

7. **[#22745 — AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** — Epic investigating AST-aware tooling to reduce token consumption from "firehose" file reads and enable precise method-bound access.

8. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** — Memory extraction agent only marks a session processed when it actually reads the transcript; low-signal sessions are re-surfaced forever, burning tokens and API calls.

9. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** — P1: browser agent terminates with `GOAL` immediately under Wayland sessions. Linux desktop users have no workaround.

10. **[#22232 — Browser agent resilience: session takeover and lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232)** — The browser agent's fail-fast strategy on locked profiles (e.g., persistent session mode with orphaned processes) breaks automation; request for automatic session takeover and lock recovery.

## Key PR Progress

1. **[#28910 — Gemini 3.7/3.6 Flash model configurations (merged)](https://github.com/google-gemini/gemini-cli/pull/28910)** — Complete model resolution for Gemini 3.7 Flash, 3.6 Flash, and 3.5 Flash-Lite across core and CLI. This is the direct answer to the top community request.

2. **[#28934 — History rollback and retry nudge optimizations](https://github.com/google-gemini/gemini-cli/pull/28934)** — Avoids context window bloat by rolling back synthetic tool-cancellation messages, reduces API request volume, and maximizes prefix caching on retry nudges. Directly addresses cost and latency concerns.

3. **[#28938 — Fix GIT_CONFIG_* environment triplet consistency](https://github.com/google-gemini/gemini-cli/pull/28938)** — `sanitizeEnvironment()` could emit malformed `GIT_CONFIG_*` directives that cause git to abort entirely. Impact: **every** git invocation through the sanitized environment fails.

4. **[#28939 — Avoid persisting interrupted response placeholder](https://github.com/google-gemini/gemini-cli/pull/28939)** — Fixes #28927: the synthetic text "[The previous response was interrupted before it completed.]" was being persisted as model-authored history, corrupting subsequent context.

5. **[#28935 — macOS Seatbelt sandbox: isolate Docker/container runtime sockets](https://github.com/google-gemini/gemini-cli/pull/28935)** — Denies access to container daemon sockets, CLI binaries, and Mach/XPC lookups to prevent sandbox escape via hypervisor filesystem mounts (e.g., Docker Desktop VirtioFS).

6. [#28915 — Consistent symlink evaluation in ignore path handling (merged)](https://github.com/google-gemini/gemini-cli/pull/28915) — Normalizes `.geminiignore`/`.gitignore` evaluation across both literal and canonical (resolved) paths, eliminating tool behavior discrepancies with symlinked project structures.

7. **[#28940 — Fix A2A server stale cancellation error](https://github.com/google-gemini/gemini-cli/pull/28940)** — Clears stale cancellation state on new turns; resolves "execution aborted" crashes in Google Cloud Assistant after a prior cancellation.

8. **[#28828 — Warn on silent preview model substitution](https://github.com/google-gemini/gemini-cli/pull/28828)** — Fixes a confusing behavior where `gemini-3.1-pro-preview` silently rewrites to `auto-gemini-2.5` when entitlements are missing—now emits a warning instead of zero indication.

9. **[#28863 — Extension consent for environment changes](https://github.com/google-gemini/gemini-cli/pull/28863)** — Security fix: extension updates could bypass consent and inject unauthorized environment variables into MCP server processes. Now incorporated into consent strings and sanitized.

10. **[#28930 — Drop unsafe `diff.external` override](https://github.com/google-gemini/gemini-cli/pull/28930)** — Fixes #28928: empty-string `diff.external` (added in #28792) is treated by git as "use external diff" rather than "disable," breaking `git diff` in the sandbox.

## Feature Request Trends

- **Model availability is the #1 community ask**. The 41-upvote request for Flash 3.5/3.6/3.7 has been fulfilled with #28910, but expect follow-ups for entitlements and preview access.
- **AST-aware tooling** (#22745, #22746) — reducing context bloat through surgical method-level reads and smarter codebase maps.
- **Zero-dependency OS sandboxing** (#19873) — users want the models' native bash skills used safely via OS-level isolation instead of behavioral restrictions.
- **Subagent observability and sharing** (#22598, #21763) — trajectories and internal context need to be visible for debugging, eval, and `/chat share`.
- **Auto Memory ecosystem maturity** (#26522, #26523, #26516) — a cluster of memory-system quality issues around retries, quarantine of invalid patches, and logging hygiene.
- **Windows and Wayland parity** — reproducible issues on Wayland (browser agent) and Windows (longpaths, test environment failures) indicate Linux/Windows users are active and expect equal quality.

## Developer Pain Points

1. **Silent failures and misleading success** — Subagent MAX_TURNS reported as GOAL success (#22323), preview model silent substitution (#28828), and interrupted responses persisted as model text (#28939) all erode trust in agent output.
2. **Hangs and stuck states** — Generalist agent hangs (#21409), shell "Waiting input" after command completion (#25166), and browser agent lock failures (#22232) are recurring P1 issues across agent families.
3. **Git environment fragility** — Malformed `GIT_CONFIG_*` triplets breaking all git operations (#28938) and the `diff.external` override breaking diffs (#28930) show how fragile shell environment sanitization remains.
4. **Context and token bloat** — "Firehose" file reads (+15k tokens/turn), synthetic retry messages polluting context, and low-signal Auto Memory retry loops all contribute to escalating API costs.
5. **Security and consent gaps** — Extension environment injection bypassing consent (#28863) and sandbox escape vectors via container runtime sockets (#28935) highlight the difficulty of safely combining agent autonomy with MCP extensions.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-21

## Today's Highlights
Version 1.0.81-6 introduces configurable startup defaults for permission modes and token-based login, addressing long-standing enterprise onboarding friction. The issue tracker shows a clear pattern: MCP server integration reliability and sandbox/enterprise permission enforcement remain the top pain points, with 8 of the top 10 issues touching one of these areas. A particularly concerning cluster of reports indicates that enterprise-managed settings around model availability and permission bypass are not being respected consistently across interactive and non-interactive sessions.

## Releases
**v1.0.81-6** ([release](https://github.com/github/copilot-cli/releases))
- **Added:** `defaultMode` and `defaultPermissionMode` settings allow users to define startup mode and approval behavior for new interactive sessions, reducing friction for teams with strict compliance requirements.
- **Added:** `--with-token` flag on `copilot login` enables reading an auth token from stdin, simplifying CI/CD and automated provisioning workflows.
- **Improved:** ACP clients now receive subagent IDs, raw event subscriptions, and live title updates — addressing a long-standing gap for developers building on the agent client protocol.

## Hot Issues
*(Sorted by community engagement and impact)*

1. **[#1481 — SHIFT+ENTER executes instead of inserting line break](https://github.com/github/copilot-cli/issues/1481)** — 28 comments, 17 👍. Closed. A UX inconsistency that breaks muscle memory for users coming from virtually any other chat interface. The community pushed for standardization, and the fix landed after months of discussion.

2. **[#4390 — Enabled org models missing from catalogue (Claude Sonnet 5/Opus 5, Kimi K3)](https://github.com/github/copilot-cli/issues/4390)** — 15 comments, 7 👍. Closed. Enterprise users report that models explicitly enabled in Copilot Business plans are unavailable in the CLI. This is a critical blocker for teams standardized on Anthropic models.

3. **[#3162 — Registry-listed custom MCP servers falsely blocked by policy](https://github.com/github/copilot-cli/issues/3162)** — 7 comments, 1 👍. Closed. False-negative in registry validation caused legitimate MCP servers to be rejected. Diagnosis took weeks, but resolution restored trust in the policy engine.

4. **[#4096 — Third-party OAuth MCP server shows "Connected" but tools missing](https://github.com/github/copilot-cli/issues/4096)** — 6 comments, 2 👍. Closed. The OAuth token bridged through the GitHub Copilot app UI never reaches CLI agent sessions. This breaks the Atlassian Remote MCP integration for teams.

5. **[#4503 — SDK server reports ready without auth, Slack session creation fails](https://github.com/github/copilot-cli/issues/4503)** — 5 comments. Closed. A startup race condition: the SDK server marks itself ready before verifying `COPILOT_SDK_AUTH_TOKEN` presence, leading to generic failures downstream. Slacks users hitting this received a cryptic "Please try again."

6. **[#4439 — GitLab MCP OAuth rejected due to RFC 8414 issuer mismatch](https://github.com/github/copilot-cli/issues/4439)** — 5 comments, 3 👍. Closed. Self-hosted GitLab MCP servers with Dynamic Client Registration fail authentication — a significant interop gap for enterprises running GitLab Self-Managed.

7. **[#4422 — All Claude models disabled under CLI model selection](https://github.com/github/copilot-cli/issues/4422)** — 4 comments, 3 👍. Closed. Personal Enterprise accounts suddenly lost access to Claude models despite settings showing them enabled. Rollback did not help, implying a server-side policy propagation issue.

8. **[#4206 — Environment footer stuck on "Loading:" forever when GitHub MCP handshake stalls](https://github.com/github/copilot-cli/issues/4206)** — 4 comments, 3 👍. Closed. UI remains in a permanent loading state even though all resources are loaded. Cosmetic but confusing, and it obscures real status in enterprise environments.

9. **[#4535 — `store_memory` fails in 1.0.81 prereleases: "Instance id is required"](https://github.com/github/copilot-cli/issues/4535)** — 3 comments. **Open.** A regression in prerelease builds: the native memory writer requires an instance ID that is not being passed. This breaks agent memory persistence — a core feature for continuity.

10. **[#4524 — Window sandbox breaks git entirely](https://github.com/github/copilot-cli/issues/4524)** — 3 comments. **Open.** Enforced sandbox on Windows is overly restrictive: even with working directory and `~/.copilot` enabled, git operations fail. Anecdotal reports suggest recent updates made this worse.

## Key PR Progress
*Only 1 PR was updated in the last 24 hours — this section reflects the most impactful recent activity across the project.*

1. **[#4510 — Remove GitHub Copilot CLI documentation from README](https://github.com/github/copilot-cli/pull/4510)** — **Open.** A controversial documentation cleanup that strips installation guidance from the primary repository. Community concern is that this reduces discoverability for new users, especially those arriving via search engines.

*Additional context on recently merged activity (from release notes and issue references):*

- **[Security hardening for plugin marketplace git auth](https://github.com/github/copilot-cli/issues/4103)** — Changes in v1.0.70 introduced fail-fast behavior when marketplace plugins require git auth. This surfaced a regression where Git credential helpers are disabled during plugin marketplace clones, breaking private Azure DevOps HTTPS repositories. Fixes are under active investigation.

- **[Sandbox enforcement for non-interactive sessions](https://github.com/github/copilot-cli/issues/4528)** — Work is underway to ensure `disableBypassPermissionsMode` managed settings are honored in `-p`/`--prompt` mode. The current gap allows `--allow-all` and `--yolo` flags to override enterprise policy.

- **[MCP server connection leak fix](https://github.com/github/copilot-cli/issues/3698)** — Long-standing issue with stdio MCP servers spawning unbounded child processes on unreachable upstreams. A fix is expected in upcoming releases with proper process reaping and reconnect backoff.

- **[Session anchoring for WSL2](https://github.com/github/copilot-cli/issues/4543)** — Mirrors the SSH dev-container fragmentation issue: agent sessions initialize on the Windows host rather than the WSL distro, creating split state across two `session-store.db` files. Work is aligning with the SSH container fix.

- **[Memory persistence fixes in v1.0.81 prerelease](https://github.com/github/copilot-cli/issues/4535)** — The `store_memory` regression in prerelease builds is being tracked for hotfix before the stable rollout.

## Feature Request Trends

1. **Session persistence and continuity** — Multiple requests around persisting reasoning effort across restarts ([#4530](https://github.com/github/copilot-cli/issues/4530)), preserving session history across Ctrl+Z/restart and local/cloud ID divergence ([#4539](https://github.com/github/copilot-cli/issues/4539)), and multi-turn conversations in `/ask` ([#4538](https://github.com/github/copilot-cli/issues/4538)). Users want the CLI to behave like a persistent assistant, not a stateless terminal.

2. **Sandbox flexibility** — WSL2 sandboxes need VS Code remote support ([#4546](https://github.com/github/copilot-cli/issues/4546)), and Windows sandboxes need git support ([#4524](https://github.com/github/copilot-cli/issues/4524)). There is demand for per-command sandbox overrides rather than global enable/disable.

3. **Richer input handling** — Image paste support in freeform question prompts ([#4544](https://github.com/github/copilot-cli/issues/4544)) and add/pause controls in the queue editor ([#4541](https://github.com/github/copilot-cli/issues/4541)) point to a desire for fuller interactive UX parity with GUI chat tools.

4. **Personal skills discovery** — `~/.copilot/skills/` is documented but not scanned ([#4545](https://github.com/github/copilot-cli/issues/4545)). Users expect personal skills to work consistently across project, custom, and user-level sources.

5. **Workspace MCP parity** — `.mcp.json` servers are detected by `mcp list` but not connected in actual sessions ([#4542](https://github.com/github/copilot-cli/issues/4542)). A clear expectation gap between the CLI's introspection commands and its runtime behavior.

## Developer Pain Points

- **MCP server trust and reliability** — False-positive policy blocking, OAuth bridging failures, metadata validation errors, connection leaks, and missing tools in sessions dominate the tracker. The MCP integration is the single biggest source of frustration, with 5 of the top 10 issues touching this area. Each failure mode is different, making workarounds impossible to standardize.

- **Enterprise policy enforcement gaps** — `disableBypassPermissionsMode` is bypassed in non-interactive mode ([#4528](https://github.com/github/copilot-cli/issues/4528)), and schema validation fails on valid enum values (`"enable"` vs only accepting `"disable"`) ([#4349](https://github.com/github/copilot-cli/issues/4349)). Compliance teams cannot trust that managed settings are enforced consistently across execution modes.

- **Model availability inconsistency** — Models enabled in the GitHub UI are missing or disabled in the CLI ([#4390](https://github.com/github/copilot-cli/issues/4390), [#4422](https://github.com/github/copilot-cli/issues/4422)). This breaks standardization efforts for teams standardizing on specific model families and undermines trust in the settings UI.

- **WSL2 and remote development gaps** — Session anchoring to the host instead of the WSL distro, sandbox incompatibility with VS Code remote, and split session-store files create confusing state fragmentation for a primary development workflow. The SSH dev-container variant was already reported; WSL being far more common makes this urgent.

- **Prerelease regressions** — The `store_memory` instance ID failure in 1.0.81 prereleases ([#4535](https://github.com/github/copilot-cli/issues/4535)) highlights the risk of adopting prerelease builds. Combined with the sandbox git breakage, users are experiencing reliability churn in recent versions.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026-08-21**

---

### 1. Today's Highlights
Activity today is centered on a single, focused contribution: a community proposal **(#2613)** for a workspace-scoped long-term memory plugin (*Kimi Memory Plus*), accompanied by a companion documentation PR **(#2614)** addressing plugin security and persistence. While no new releases dropped in the last 24 hours, the community is actively pushing for enhanced memory capabilities and pushing for clearer plugin security/conventions. This signals a healthy grassroots effort to expand the CLI's agentic capabilities beyond its current tool set.

### 2. Releases
No new releases were published in the last 24 hours.

---

### 3. Hot Issues
*Only one issue was updated in the window; it is highlighted below.*

- **[#2613 – [enhancement] Proposal: Kimi Memory Plus — workspace-scoped long-term memory plugin](https://github.com/MoonshotAI/kimi-cli/issues/2613)**  
  *Author: QIANLING-0831*  
  This is the day’s only issue, yet it is highly significant. It proposes a plugin to give the CLI persistent, workspace-scoped memory via an MCP server. The author notes that while the CLI can register explicit-memory tools as a stdio MCP server, it fails to recognize the experimental memory server bundled with the repo. This is a direct ask from a power user to bridge a missing piece of agentic workflow continuity. No community reaction yet (0 comments), but the implicit need for long-term state management is evident.

---

### 4. Key PR Progress
*Only one PR is active in the window.*

- **[#2614 – docs(plugins): document security and persistent data](https://github.com/MoonshotAI/kimi-cli/pull/2614)**  
  *Author: QIANLING-0831*  
  A foundational documentation PR addressing three key developer concerns: (1) plugin tools execute as local subprocesses with the current user’s full file/network access, (2) proper credential handling for `inject` with warnings against logging or committing secrets, and (3) clarification that reinstalling a plugin wipes its installed directory. It also recommends optimizing persistent data but keeps it general. This PR is essential for adoption, as it sets clear security guardrails for the plugin ecosystem. This is likely the documentation companion to #2613.

---

### 5. Feature Request Trends
Given the limited data window, one dominant trend emerges:

- **Long-term / Workspace Memory**: The submitter (in #2613) explicitly asks for workspace-scoped persistence so agents retain context across sessions. The mention of "explicit-memory tools" via MCP suggests users expect the CLI to natively support or gracefully degrade with external memory servers. Expect more requests for stateful agent operations, not just stateless tool calls.

---

### 6. Developer Pain Points
- **Memory Continuity is Missing**: The CLI currently fails to recognize the experimental `kim` memory server, forcing users to write custom MCP wrappers. This is a friction point for anyone trying to build persistent agent workflows.
- **Ambiguity Around Plugin Security & Persistence**: The PR #2614 directly addresses pain points often raised in developer forums: uncertainty about subprocess privileges, accidental secret leakage through `inject`, and data loss on plugin reinstall. This suggests the plugin architecture lacks clear documentation—a critical gap for enterprise adoption.
- **Low Visibility / Discoverability**: With zero comments and no roadmap links, the community appears to be early in its plugin ecosystem maturity. There is no "official" acknowledgment of the memory proposal yet, which could frustrate active contributors waiting for maintainer feedback.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-21

## Today's Highlights

OpenCode shipped **v1.18.19** with native Cloudflare AI Gateway passthroughs and refined Codex rate-limit alignment, alongside two notable performance PRs that cut Windows server CPU by ~48% and eliminate deep-cloning of session parts. The community remains focused on two fronts: **TUI/terminal compatibility** (backspace key regressions across Warp and ConPTY) and **memory/CPU efficiency** (high CPU usage, unbounded growth, and EventTarget leaks). Several closed issues indicate maintainers are actively triaging 2.0 beta reports, with contributions from Amazon One Medical (Bedrock V2 credentials) and Cerebras (completion limits) landing this week.

## Releases

**v1.18.19** — Core improvements:
- Added native OpenAI and Anthropic passthroughs for Cloudflare AI Gateway models.
- Matched Codex rate limits more closely to ChatGPT subscription limits. (@GameOn223)
- Removed built-in Qwen sampling defaults that could send unsupported settings.
- Various bugfixes (full changelog not yet available).

## Hot Issues

1. **[#30086 — High CPU usage in newer versions of OpenCode](https://github.com/anomalyco/opencode/issues/30086)** — 47 comments, 24 👍. Users report session capacity dropped from 10+ concurrent sessions to 3, with laggy mouse response. Long-running thread with no resolution yet; likely tied to the memory/CPU fixes landing in PRs #43733 and #42980.

2. **[#4754 — Copy and paste behavior under Linux](https://github.com/anomalyco/opencode/issues/4754)** — 17 comments, 18 👍. Classic Linux dual-buffer (primary/selection) friction. PR #32370 adds a `linux_clipboard_selection` config for primary buffer support, but the issue remains open.

3. **[#30158 — Terminal button disappears in web UI since v1.15.12](https://github.com/anomalyco/opencode/issues/30158)** — 12 comments, 14 👍. Regression spanning several versions; downgrade to v1.15.11 is the only workaround. High visibility for web UI users.

4. **[#43619 — [2.0] subagent: required sessionID prevents spawning first child session](https://github.com/anomalyco/opencode/issues/43619)** — 9 comments. Documentation says omit `sessionID` for new sessions, but the schema requires it — blocking all first-child agent spawns. Critical for 2.0 delegation workflows.

5. **[#20458 — Mouse escape sequences garbled after TUI exit](https://github.com/anomalyco/opencode/issues/20458)** — 8 comments, 5 👍. Terminal state not restored on exit; issue persists across quit methods. A distinct but related issue to in-session garbling (#3199).

6. **[#35107 — Memory keeps growing until bun process is killed](https://github.com/anomalyco/opencode/issues/35107)** — 4 comments. `structuredClone(part)` on every update creates massive heap pressure (~93K PartUpdated events, 488 KB per part). Fix landed in PR #43733 — watch for release.

7. **[#43054 — Models other than hy3-free fail with Forbidden: {model:"big-pickle"}](https://github.com/anomalyco/opencode/issues/43054)** — 4 comments, 2 👍. Opaque provider error body referencing an unknown model. Suggests proxy-level model filtering; confusing for users.

8. **[#27474 — TypeError: Failed to fetch](https://github.com/anomalyco/opencode/issues/27474)** — 10 comments. Clicking Explore or agents fails when navigation doesn't reach a subagent. Likely an async race in the renderer; reproducible in both desktop and web.

9. **[#43179 — [2.0] Primary-agent switches silently keep previous agent's model](https://github.com/anomalyco/opencode/issues/43179)** — 3 comments. Plan/Build session remains on the original model after switching primary agents. Silent state inconsistency is dangerous — users may run the wrong model.

10. **[#43051 — Backspace broken in Warp since v0.2026.08.12](https://github.com/anomalyco/opencode/issues/43051)** — 2 comments, 1 👍. Warp's KKP encoding change sends `\x1b[127u` instead of `0x7f`; OpenCode's `input_backspace` binding doesn't handle CSI-u form. Same class of bug as #34878 (ConPTY backspace). Terminal-encoding compatibility is a recurring theme.

## Key PR Progress

1. **[#42980 — fix(core): reduce Windows server CPU under parallel sessions](https://github.com/anomalyco/opencode/pull/42980)** — **+88.2% event throughput, 48.4% less CPU work** with four SSE subscribers. Big win for Windows users running parallel sessions; addresses the most-commented issue (#30086).

2. **[#43733 — fix(core): avoid deep cloning session parts](https://github.com/anomalyco/opencode/pull/43733)** — Fixes #35107 by removing `structuredClone` from `Session.updatePart`. Directly targets the unbounded-memory-growth report.

3. **[#43637 — refactor(app): establish session vertical slice](https://github.com/anomalyco/opencode/pull/43637)** — By Hona. Reduces a 2,005-line monolith page into a clean vertical slice. Architecture hygiene that should prevent future regressions.

4. **[#43675 — fix(opencode): answer subagent permissions in run](https://github.com/anomalyco/opencode/pull/43675)** — Tracks child/nested sessions for non-interactive runs and auto-approves/rejects only within that tree. Prevents permission prompts from hanging CI runs.

5. **[#43650 — fix(core): prevent shell eviction loop](https://github.com/anomalyco/opencode/pull/43650)** — Stale shell IDs no longer cause retention eviction to spin forever. Subtle but important for long-lived sessions.

6. **[#43735 — fix(client): authenticate PTY websocket connections](https://github.com/anomalyco/opencode/pull/43735)** — Replaces unauthenticated raw-fetch with a single-use connect ticket. Security hardening for desktop terminal.

7. **[#43736 / #43715 — fix(opencode): preserve Cerebras completion limit](https://github.com/anomalyco/opencode/pull/43736)** — Cerebras rejects both `max_tokens` and `max_completion_tokens`; a built-in plugin now suppresses the generic cap when native options exist. Includes a regression test.

8. **[#43677 — fix(core): send console anthropic api key header](https://github.com/anomalyco/opencode/pull/43677)** — Translates OpenCode Console Bearer credentials to `x-api-key` for Anthropic Messages. Scoped to OpenCode provider; covered by tests.

9. **[#43741 — refactor(core): remove dead AI SDK ID stripping](https://github.com/anomalyco/opencode/pull/43741)** — Removes unreachable rewrite code (OpenAI/Azure/Bedrock resolve to native providers before the AI SDK fallback). Cleanup PR by opencode-agent.

10. **[#32370 — feat(tui): add linux_clipboard_selection config for primary buffer support](https://github.com/anomalyco/opencode/pull/32370)** — Adds `linux_clipboard_selection` with `clipboard`/`primary` modes. Addresses the long-standing Linux copy-paste friction (#4754 family).

## Feature Request Trends

- **Per-MCP-server trust configuration** (#40125, #40111): Fingerprint pinning for self-signed certs instead of global `insecure: true` — security teams need granular control.
- **Single-directory OpenCode root** (#43700): Home Assistant users want config/data self-contained; minimal ceremony.
- **Hide diffs in TUI output** (#43739): Inline diff review isn't for everyone; users want a lean stream output.
- **Provider credential refresh without restart** (#43281): Token refresh commands/intervals for custom providers.
- **Context window limits via GUI/TUI** (#31433): Local-model users (LM Studio, Ollama) need explicit context sizing; defaults to 0 are surprising.

## Developer Pain Points

- **Terminal input encoding**: Backspace regressions in Warp (#43051) and ConPTY/multiplexers (#34878) highlight a systemic fragility in keybinding handling. `Ctrl+H` as a workaround is unacceptable for everyday use.
- **Memory and CPU under load**: #30086, #35107, and #34574 (EventTarget leak in the AI SDK) point to a systemic efficiency problem in long-lived sessions. PRs #43733 and #42980 are promising but unverified in production at scale.
- **TUI crashes**: "remove expects a renderable child object" (#43699, #43696) and blank TUI on fresh installs (#43711) suggest both a framework-level bug and a packaging/onboarding issue.
- **Silent configuration drift in 2.0**: Model/prompt switches that don't propagate (#43179), required-but-undocumented `sessionID` (#43619) — 2.0 beta feels under-specified for early adopters.
- **Race-condition data loss**: `filesystem_move_file` with `source == destination` (#43726) caused data loss in 3/10 reproductions — thankfully closed, but a reminder that edge-case handling needs adversarial review.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-21

## Today's Highlights

The community continues to converge on Windows as a major focus area, with a dedicated tracking issue (#7547) accumulating 36 comments. A critical bug where auto-compaction fails to trigger until provider overflow (#6879) remains the most upvoted open issue (17 👍), drawing attention to reliability concerns in long-running agentic sessions. Meanwhile, a substantial TUI theme refactor PR (#8398) from mitsuhiko signals an architectural shift toward exposing colors directly, with implications for future non-terminal interfaces and agent-driven styling.

## Releases

No new releases in the last 24 hours. Latest known version: 0.84.2.

## Hot Issues

1. **[#7547 — Windows usage tracking](https://github.com/earendil-works/pi/issues/7547)** — 36 comments, 1 👍
   The community is actively aggregating Windows-specific issues to prioritize fixes. With "gazzilion developers" potentially using Pi on Windows, this issue serves as a triage hub for platform-specific bugs, documentation gaps, and scope decisions.

2. **[#6879 — Auto-compaction never triggers until provider overflow](https://github.com/earendil-works/pi/issues/6879)** — 18 comments, 17 👍
   A 2-hour agentic turn on gpt-5.6-sol exceeded the context window without compaction, only failing when the API rejected at 373k tokens. The proposed fix—checking after every agentic step rather than turn—has strong community support.

3. **[#5023 — Terminal scrolls to beginning randomly](https://github.com/earendil-works/pi/issues/5023)** — 17 comments, 2 👍
   Users report the terminal spontaneously jumping to session start and scrolling back during model execution. Closed, but with 17 comments indicating a persistent frustration that may need reopening if regressions surface.

4. **[#6300 — Windows input line redrawn per keystroke](https://github.com/earendil-works/pi/issues/6300)** — 8 comments
   A concrete Windows TUI bug: each character renders on a new line. Reproduced in both cmd.exe and Windows Terminal, this is a high-priority usability blocker for Windows users.

5. **[#8157 — Migrate grok-mermaid to lovely-mermaid](https://github.com/earendil-works/pi/issues/8157)** — 7 comments, 1 👍
   The upstream grok-mermaid renderer carries "a crapton of corner cases and limitations" from its initial port. The community proposes migrating to lovely-mermaid, which has significantly more engineering effort behind its parsers.

6. **[#6093 — Scoped Anthropic API keys fail](https://github.com/earendil-works/pi/issues/6093)** — 6 comments
   Anthropic's Claude Code-scoped keys look like regular keys (`sk-ant-api03-…`), not the prefix-based convention the code expects. Broken auth for an entire key class is a serious provider integration gap.

7. **[#6996 — Gemini 3.x tool use fails on thought_signature](https://github.com/earendil-works/pi/issues/6996)** — 5 comments
   Gemini 3.x models reject history after tool calls when `thought_signature` is missing from the assistant message content. This breaks multi-turn tool workflows with a 400 error.

8. **[#8344 — Per-tool output expansion in fullscreen TUI](https://github.com/earendil-works/pi/issues/8344)** — 4 comments
   Long sessions with many tool outputs make navigation unwieldy. The proposed per-tool independent mouse-driven expand/collapse would complement the existing global `Ctrl+O`.

9. **[#8348 — No inter-session cache on forked sessions](https://github.com/earendil-works/pi/issues/8348)** — 3 comments
   Forking a session changes the session ID, invalidating the prompt cache key. This means all cache benefits are lost for a fork, even though the prefix is largely identical—a subtle but costly issue.

10. **[#8133 — Per-model compaction settings](https://github.com/earendil-works/pi/issues/8133)** — 3 comments, 3 👍
    Different models have different token economics. The proposal for a `compaction.profiles` map keyed by model ID with fallback to global defaults would let power users tune reserve tokens per provider.

## Key PR Progress

1. **[#8398 — Add color values and theme styling](https://github.com/earendil-works/pi/pull/8398)** — OPEN, mitsuhiko
   A major TUI refactor exposing colors directly to extensions and themes—useful for agent-driven styling and a prerequisite for non-terminal UIs. Backwards-compatible with the old API.

2. **[#8118 — Add requiresNonNullAssistantContent compat flag](https://github.com/earendil-works/pi/pull/8118)** — OPEN
   Some OpenAI-compatible gateways reject tool-call-only assistant messages with null content. This flag forces `""`, targeting providers that fail on replayed assistant messages.

3. **[#8302 — Amazon Bedrock Mantle support](https://github.com/earendil-works/pi/pull/8302)** — OPEN, WIP
   Adds support for Amazon's Mantle API surface. Previously, Mantle-only models (openai.gpt-5.x) were routed via Converse and failed validation. Waiting on API key permissions for e2e.

4. **[#8405 — Normalize kimi-coding thinking signatures to base64url](https://github.com/earendil-works/pi/pull/8405)** — CLOSED
   The kimi-coding provider fails on second+ turns with reasoning enabled due to malformed base64url signatures. This normalizes the signature format to prevent 400 errors.

5. **[#8395 — Prevent TUI crash on large diffs](https://github.com/earendil-works/pi/pull/8395)** — CLOSED
   Fixes #8036: `lines.push(...contentLines)` in the edit tool crashes on ~14.5MB diffs due to V8 call stack limits. Replaced spread with a loop in `ToolExecutionComponent.render()`.

6. **[#8407 — Preserve logical lines when copying soft-wrapped text](https://github.com/earendil-works/pi/pull/8407)** — CLOSED
   Fullscreen TUI copy joins visual rows, converting soft wraps into hard newlines—breaking paragraphs, URLs, and lists. This fix preserves logical line boundaries in selections.

7. **[#8363 — Prevent wrapped table link color leaks](https://github.com/earendil-works/pi/pull/8363)** — CLOSED
   In wrapped markdown tables, link colors leaked into padding and borders. The fix resets link colors before table rendering and adds regression tests.

8. **[#8383 — Send LOW to disable thinking on gemini-3.7-flash](https://github.com/earendil-works/pi/pull/8383)** — OPEN
   `getDisabledThinkingConfig` sends `MINIMAL`, which gemini-3.7-flash rejects with 400. Changing to `LOW` should properly disable thinking.

9. **[#8416 — Hold triggerTurn-false custom messages until tool batch ends](https://github.com/earendil-works/pi/pull/8416)** — CLOSED
   Custom messages with `triggerTurn: false` could land between a `toolCall` and its `toolResult` during streaming, causing strict providers to reject the next turn. Messages now wait for the tool batch.

10. **[#8399 — Show & make default searchable for model and thinking selectors](https://github.com/earendil-works/pi/pull/8399)** — CLOSED
    Since `Ctrl+S` now persists model and thinking settings, `/model` and `/thinking` show a "default" label, and "default" is searchable in the selector.

## Feature Request Trends

- **Slash command aliases** — A recurring theme with distinct issues (#5340, #4538, #5161, #5863, #6193), all requesting `/exit` (and sometimes `/bye`) as alternatives to `/quit`, driven by muscle memory from Claude Code, Codex, and OpenCode. Community frustration runs high when unknown commands are silently sent to the model as chat messages, wasting tokens.
- **Per-model/tool configuration** — Compaction settings (#8133), TUI wheel scroll rates (#8370), and per-tool output expansion (#8344) all point to a desire for finer-grained, model-specific controls rather than global defaults.
- **Provider compatibility shims** — Requests for WebSocket transport (#3442), Daybreak aliases (#8126), Umans AI integration (#8404), and Bedrock Mantle support (#8302) show the community actively drives new provider support.
- **Better agent lifecycle controls** — Settled-safe session control for extensions (#8390) and inter-session cache reuse on forks (#8348) reflect maturing usage patterns where agents run long-lived or forked sessions.
- **Theme/extension depth** — Theme change events (#4427), color exposure (#8398), and independent tool block expansion (#8344) signal extension authors pushing for richer UI capabilities.

## Developer Pain Points

- **Windows is a mess** — TUI rendering issues (#6300), SSH escape sequence leaks (#8419), wall-clock timing inflation (#8418), and a 36-comment aggregation thread (#7547) show Windows remains the dominant source of platform-specific pain. Expect continued triage and targeted fixes.
- **Compaction reliability** — Auto-compaction failing until API rejection (#6879) undermines long-running autonomous sessions. The current turn-based check is insufficient; agentic steps need granular monitoring.
- **Sanity checks on exit** — Losing tokens to `/exit` or `/quit` confusion is a recurring annoyance. The community wants fail-safe aliases or, at minimum, a warning when unknown slash commands are dispatched to the model.
- **Provider quirks are everywhere** — Scoped API keys (#6093), base64url signature normalization (#8405), missing `thought_signature` (#6996), and non-compliant OpenAI gateways (#8118) collectively consume significant community cycles. The provider ecosystem is fragmenting faster than the codebase can absorb.
- **Background processes interrupting UX** — Git over SSH prompting for passphrases on top of the TUI (#8417) and background update checks disrupting focus are silent usability landmines.
- **Data persistence edge cases** — Superseded error leaves in persisted sessions (#8396), stale prompt cache keys across forks (#8348), and large-diff variable crashes (#8395) show the session manager is straining under real-world scale.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-21

## 1. Today's Highlights

The Qwen Code team shipped **v0.21.15** (stable) with Web Shell improvements including file attachments via composer and faster streaming, plus a review-loop convergence advisory for the `/review` command that tells authors why loops aren't settling. A significant burst of Aone Code (internal MR platform) integration work landed across issues and PRs, addressing branch-based MRs, comment deduplication, incremental caching, and self-PR detection. Multiple bug fixes around focus-stealing in Web Shell dialogs and tool-call duplication in ACP daemon sessions were also merged.

---

## 2. Releases

### v0.21.15 (Stable)
- **Web Shell**: Insert file attachments via composer or `@` selection; improved streaming performance and immediate sidebar synchronization ([#9405](https://github.com/QwenLM/qwen-code/pull/9405), [#9477](https://github.com/QwenLM/qwen-code/pull/9477))

### v0.21.14-nightly.20260821.9f2342d323
- `feat(review)`: tell the author why a review loop is not settling ([#9461](https://github.com/QwenLM/qwen-code/pull/9461))
- `fix(ci)`: stop the fallback CI path (details pending)

### v0.21.11-nightly.20260820.b414f135fa
- `feat(web-shell)`: approval and ask-user dialogs as in-flow sheets; fix background-agent false failure ([PR](https://github.com/QwenLM/qwen-code/pull/9461))

### Smoke Tests
- **DSW EAS SWE + TB smoke** (r1–r3): All **SUCCEEDED** on SWE-bench Verified + Terminal-Bench 2.0 after Sandbox bootstrap and cache-gate repairs.

---

## 3. Hot Issues

1. **[#9278](https://github.com/QwenLM/qwen-code/issues/9278) — `/review` publish-time convergence advisory** (P2, in-progress)  
   The design doc for detecting and breaking runaway review loops where each round grows the diff and adds new findings. Author `wenshao` maintains it as the single tracking issue for convergence telemetry. 8 comments.

2. **[#8382](https://github.com/QwenLM/qwen-code/issues/8382) — Duplicate provider tool call id** (P2, need-retesting)  
   A recurring error where tool calls fail with "Duplicate provider tool call id" / "not recorded" during session resumption. Highly relevant to ACP daemon users. 7 comments.

3. **[#8724](https://github.com/QwenLM/qwen-code/issues/8724) — Cross-session messaging** (Open, feature request)  
   Let two Qwen Code sessions on the same machine talk via `list_agents` / `send_message` with a fail-closed gate. A follow-up PR ([#9576](https://github.com/QwenLM/qwen-code/pull/9576)) is already open. 7 comments.

4. **[#9309](https://github.com/QwenLM/qwen-code/issues/9309) — Compression seems incorrect** (P3, core)  
   `/compress-fast` followed by `/compress` compressed from 170k tokens to 7x, but results look wrong. Token-management correctness issue. 6 comments.

5. **[#9485](https://github.com/QwenLM/qwen-code/issues/9485) — Web Shell copy buttons fail over HTTP** (P2, closed)  
   "Clipboard API is not available" when Web Shell is served over plain HTTP from a non-localhost address — common for remote daemons. 5 comments.

6. **[#2128](https://github.com/QwenLM/qwen-code/issues/2128) — Memory grows unboundedly in long sessions** (P1, open since March)  
   `useHistoryManager.history` grows without limit; UI history array never shrinks. Long-running sessions eventually exhaust memory. 5 comments.

7. **[#9556](https://github.com/QwenLM/qwen-code/issues/9556) — Whether the review pipeline should keep granting code execution as the invoking user** (security, need-discussion)  
   Every unresolved finding from 20 review rounds on #9221 starts with "code already executing as the review's own user." Security posture question. 5 comments.

8. **[#9586](https://github.com/QwenLM/qwen-code/issues/9586) — Duplicate tool-call breaker leaves persisted call without terminal result** (P2, closed)  
   In ACP daemon sessions, the duplicate tool-call circuit breaker can leave a `functionCall` without a `tool_result`. Session-integrity bug. 4 comments.

9. **[#9573](https://github.com/QwenLM/qwen-code/issues/9573) — Resumed sessions show 'Tool result missing from saved history'** (P1, need-retesting)  
   Tool calls that completed normally appear failed after resume, showing a placeholder instead of the real result. High impact for daily users. 3 comments.

10. **[#9620](https://github.com/QwenLM/qwen-code/issues/9620) — Aone Code branch-based MRs break write path** (P2, open)  
   `sourceBranch` is not a SHA outside AGit-Flow; the provider currently assumes it is. Blocks normal branch-based MR workflows. 2 comments.

---

## 4. Key PR Progress

1. **[#9621](https://github.com/QwenLM/qwen-code/pull/9621) — `feat(review)`: back pr-context on Aone Code targets**  
   Adds the metadata/discussion fetch subcommand for Aone targets, previously GitHub-only. The skip cascaded downstream — now closed.

2. **[#9607](https://github.com/QwenLM/qwen-code/pull/9607) — `fix(core)`: demote balanced inline thinking blocks instead of failing the turn**  
   Hybrid-thinking models on OpenAI-compatible endpoints can emit a second balanced `<think>` block in `content`; previously the streaming converter failed the turn.

3. **[#9609](https://github.com/QwenLM/qwen-code/pull/9609) — `fix(web-shell)`: don't steal approval focus while user is typing**  
   The tool-approval dialog no longer yanks keyboard focus to the safe-default option when the user is typing in the composer. Fixes [#9571](https://github.com/QwenLM/qwen-code/issues/9571).

4. **[#9604](https://github.com/QwenLM/qwen-code/pull/9604) — `fix(review)`: clear the deferred Round-5 findings from the Aone write path**  
   Full cleanup of 29 Suggestions deferred in round 5 of the Aone `--comment` posting path.

5. **[#9526](https://github.com/QwenLM/qwen-code/pull/9526) — `feat(review)`: persistently-critical convergence advisory**  
   When Criticals persist across rounds and posting volume is high, the compose step emits a "land-with-residual-risk" advisory — the implementation behind the [#9278](https://github.com/QwenLM/qwen-code/issues/9278) design.

6. **[#9572](https://github.com/QwenLM/qwen-code/pull/9572) — `fix(review)`: pin the verified git identity across the residue probe**  
   Closes a TOCTOU gap in `worktreeResidue`: five commands re-discovered the repo from `cwd` after a single identity check. The `.git` file is writable by anything running as the same user.

7. **[#9590](https://github.com/QwenLM/qwen-code/pull/9590) — `feat`: provider-aware reasoning controls**  
   Adds per-provider WebShell reasoning controls for DeepSeek V4, GLM 5.2, and Kimi models: toggle-only hybrids, canonical effort tiers, and mandatory-thinking models.

8. **[#9576](https://github.com/QwenLM/qwen-code/pull/9576) — `feat(core)`: accept cross-session messages behind an inbound gate**  
   Implements [#8724](https://github.com/QwenLM/qwen-code/issues/8724): UNIX domain socket per session, newline-delimited JSON frames, fail-closed inbound gate.

9. **[#9392](https://github.com/QwenLM/qwen-code/pull/9392) — `fix(serve)`: let channel workers reach TLS-enabled daemons**  
   Channel workers get an `https://` loopback URL when `--tls-cert`/`--tls-key` is set, instead of the hardcoded `http://`.

10. **[#9273](https://github.com/QwenLM/qwen-code/pull/9273) — `feat(review)`: capture-tui — rendering claims get pixels**  
   New `qwen review capture-tui` drives a command in a private tmux server, captures pane text to `.ans`, and renders `.png` — verifiable rendering evidence.

---

## 5. Feature Request Trends

- **Aone Code integration breadth** — 8+ issues/PRs this week cover branch-based MRs, incremental cache for AGit-Flow CRs, comment dedup, self-PR detection, inline anchoring for removed lines, `ai_comment` merge gate. The `/review` command is being hardened for internal Alibaba MR workflows.
- **Cross-session / inter-agent communication** — Sessions discovering and messaging each other on the same machine ([#8724](https://github.com/QwenLM/qwen-code/issues/8724), [#9576](https://github.com/QwenLM/qwen-code/pull/9576)) with fail-closed gates suggests a multi-agent architecture direction.
- **Session lifetime rotation** — Bounding how long a route keeps the same session (`maxTurns`, time-based caps) via `sessionRotation` ([#8927](https://github.com/QwenLM/qwen-code/pull/8927)).
- **Provider-preset expansion** — Adding Kimi and Xiaomi MiMo as first-class `/auth` providers ([#8368](https://github.com/QwenLM/qwen-code/pull/8368)) alongside provider-aware reasoning controls ([#9590](https://github.com/QwenLM/qwen-code/pull/9590)).

---

## 6. Developer Pain Points

1. **Session resumption integrity** — "Tool result missing from saved history" ([#9573](https://github.com/QwenLM/qwen-code/issues/9573)) and "Duplicate provider tool call id" ([#8382](https://github.com/QwenLM/qwen-code/issues/8382)) both break resumed/ACP sessions. These are P1/P2 with significant daily impact.

2. **Memory growth in long sessions** — [#2128](https://github.com/QwenLM/qwen-code/issues/2128) remains open since March (P1): UI History accumulates without limit. A recurring complaint for users running multi-hour sessions.

3. **Web Shell remote usage friction** — Clipboard API unavailable over HTTP from non-localhost ([#9485](https://github.com/QwenLM/qwen-code/issues/9485)), slow session pinning ([#9465](https://github.com/QwenLM/qwen-code/issues/9465)), and focus-stealing dialogs ([#9571](https://github.com/QwenLM/qwen-code/issues/9571), [#9611](https://github.com/QwenLM/qwen-code/issues/9611)) point to a pattern of UI polish gaps in remote Web Shell setups.

4. **Model streaming edge cases** — Leaked thinking tags ([#9348](https://github.com/QwenLM/qwen-code/issues/9348)) and unbalanced inline thinking blocks ([#9607](https://github.com/QwenLM/qwen-code/pull/9607)) both cause mid-turn failures that require Ctrl+Y retries.

5. **Review-pipeline security hardening** — The recurring theme across `wenshao`'s issues/PRs: review agents running as the invoking user, git identity TOCTOU, and verification probes mutating shared worktrees. The project is investing heavily in making `/review` safe under concurrent access.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-21

## 1. Today's Highlights

The project has officially rebranded to **CodeWhale** (Shannon Labs), with the legacy `deepseek-tui` npm package deprecated. The **v0.9.10 release** is out, focusing on retention, identity, first-run experience, and durable approvals — a 76-commit train. The community is actively working on major architectural refactors, including **EPIC-005 crate decomposition** and **dictionary-spine i18n unification**, alongside several critical bug fixes around token budgeting, IME input, and the new header status indicator regression.

---

## 2. Releases

### v0.9.10 (2026-08-19/20)

**"Retention, Identity, and Durable Approvals"** — 76 commits. Highlights:
- Official product rename to **CodeWhale** (`codewhale` command / npm package). Legacy `deepseek-tui` package is deprecated and receives no further releases.
- First-run experience improvements (progressive onboarding).
- Retention-focused features and durable approval workflows.
- Release-hardening (CI job caps, RC/artifact workflow bounds).

---

## 3. Hot Issues

1. **[#5518 — Emergency compaction at ~85K–105K tokens despite 327K context](https://github.com/Hmbown/CodeWhale/issues/5518)** *(CLOSED)*  
   Early compaction on V4-Flash with `auto_compact = false` suggests excessive output-headroom budgeting and possible handoff-state contamination. Critical for long-running sessions; 3 comments.

2. **[#5522 — v0.9.10: Make first run progressive instead of front-loading configuration](https://github.com/Hmbown/CodeWhale/issues/5522)** *(OPEN)*  
   Direct UX feedback: non-English users face an English telemetry disclosure, then a "wall of settings" before real work. High psychological cost on first launch. Release acceptance criteria defined.

3. **[#5516 — HTTP 400 max_tokens=384000 exceeds model limit after v0.9.9 upgrade](https://github.com/Hmbown/CodeWhale/issues/5516)** *(CLOSED)*  
   Unconfigured users hit max_tokens mismatches against `max_model_len=262144`. Likely a regression introduced by v0.9.9 token-budget changes.

4. **[#5316 — EPIC-005: TUI Crate Decomposition (Umbrella)](https://github.com/Hmbown/CodeWhale/issues/5316)** *(OPEN)*  
   Umbrella epic for splitting the TUI crate. Every sub-EPIC/FEAT reports here; central coordination point for the project's largest refactor.

5. **[#5512 — Header status indicator never renders since v0.9.7](https://github.com/Hmbown/CodeWhale/issues/5512)** *(CLOSED)*  
   Windows 11 + Terminal 1.20. The `status_indicator` (`cw`/`whale`/`dots`) broke in 0.9.7; worked in 0.8.x. Reproduced on 0.9.8 and 0.9.9.

6. **[#5023 — IME Candidate Window Jumps/Unstable Position](https://github.com/Hmbown/CodeWhale/issues/5023)** *(CLOSED)*  
   IME candidate window "moves around" during CJK input on Windows 11. Chinese users are a major audience; input stability is key for adoption.

7. **[#5526 — Deprecated shell completion](https://github.com/Hmbown/CodeWhale/issues/5526)** *(OPEN)*  
   `codew completions powershell` outputs old command (`codewhale-tui`) after rename; docs and completion scripts are out of sync.

8. **[#5482 — EPIC(docs): Review and fully localize documentation to Chinese](https://github.com/Hmbown/CodeWhale/issues/5482)** *(OPEN)*  
   Growing Chinese user base + English-only docs = real barrier. Machine translation is error-prone; source docs are stale.

9. **[#5345 — Multi-line input mode / custom send shortcut](https://github.com/Hmbown/CodeWhale/issues/5345)** *(CLOSED)*  
   Users want Grok-Build-style multi-line editing (`enter` to newline, `shift+enter` to send). Most requests listed in this digest are non-English speakers; multi-line input is a top workflow blocker.

10. **[#998 — UI text display truncated (Chinese)](https://github.com/Hmbown/CodeWhale/issues/998)** *(CLOSED)*  
    Chinese display truncation — users want hover tooltips to see full text. 11 comments, 1 👍. Reflective of broader CJK rendering issues across the app.

---

## 4. Key PR Progress

1. **[#5524 — Add multi-file `read_lints` operation](https://github.com/Hmbown/CodeWhale/pull/5524)** *(OPEN)*  
   Implements approved scope of #4070. Model-visible `lsp` tool now reads lints for multiple workspace-relative files, reusing the session LspManager/transport pool.

2. **[#5523 — Extract tool call stages from turn loop](https://github.com/Hmbown/CodeWhale/pull/5523)** *(OPEN)*  
   Refactors turn loop into three stages: `plan_tool_calls`, `execute_planned_tools`, `process_tool_results`. Preserves control order, cancellation, and indexed outcomes.

3. **[#5525 — Adopt command shapes in utility group (FEAT-018)](https://github.com/Hmbown/CodeWhale/pull/5525)** *(OPEN)*  
   Converts 7 TUI utility commands to the external command shapes (FEAT-014/015). Changes execution boundary; part of the EPIC-005 decomposition.

4. **[#5520 — Move docs/sandbox and docs/web onto dictionary spine (#5337)](https://github.com/Hmbown/CodeWhale/pull/5520)** *(CLOSED)*  
   Eliminates 29 `isZh` branches. Two dictionaries per page; files added to `optional_files` so zh is held to key+text parity.

5. **[#5521 — Drop single-argument `concat!`](https://github.com/Hmbown/CodeWhale/pull/5521)** *(CLOSED)*  
   Fixes clippy `unneeded use of concat!` lint failure blocking CI. Small but unblocks the release lane.

6. **[#5515 — Forward MCP image results as typed content](https://github.com/Hmbown/CodeWhale/pull/5515)** *(CLOSED)*  
   Converts MCP `image` content into provider-neutral rich tool-result blocks. Removes inline base64 from text receipts; preserves `structuredContent` and `isError` semantics. Enforces 5 MiB and one-image limits.

7. **[#5513 — Release: CodeWhale v0.9.10](https://github.com/Hmbown/CodeWhale/pull/5513)** *(CLOSED)*  
   The 76-commit release lane: retention, identity, first-run, and release-hardening.

8. **[#5497 — Terminalize stuck durable executions and bound event growth](https://github.com/Hmbown/CodeWhale/pull/5497)** *(CLOSED)*  
   Durable Task Manager workers could loop forever if `turn.completed` never fires. Adds a grace period after `interrupt_turn` to avoid zombie executions.

9. **[#5496 — CI: Bound release-candidate and artifact workflow jobs](https://github.com/Hmbown/CodeWhale/pull/5496)** *(CLOSED)*  
   Caps release-candidate.yml, release-artifacts.yml, and release.yml jobs — prevents indefinitely assigned runners or hung steps from stalling a release.

10. **[#5442 — Product: Discoverability debt audit](https://github.com/Hmbown/CodeWhale/pull/5442)** *(CLOSED)*  
    Advanced commands are hidden at the palette root; config-only capabilities are "shipped but invisible". Proposes changes to the discovery surface.

---

## 5. Feature Request Trends

1. **i18n and CJK support**  
   Chinese users dominate the feature-request space: documentation localization (#5482), UI text display (#998), IME candidate-window stability (#5023). The project is actively addressing this via the dictionary-spine refactor (#5337, #5520).

2. **First-run onboarding / progressive configuration**  
   New users are overwhelmed by settings walls before doing useful work (#5522). Requested: start in selected mode, defer configuration until needed.

3. **Multi-line input mode and customizable send shortcuts**  
   `enter` to send is a workflow blocker for structured markdown prompts. Users want Grok-Build/Codex-style `shift+enter` or `ctrl+enter` send, plus configurable keybindings (#5345).

4. **On-demand diagnostics (read_lints)**  
   The agent can only see lints for files it has just edited. A standalone on-demand diagnostics tool is in flight (#4070, #5524), matching Claude Code's `Read` + lint pattern.

5. **Infinite/continuous loop execution**  
   Coordinating AI agents needs an "endless turn until interrupted" mode, instead of manual sleep-cycle hacks (#5508). This aligns with the `continuous loop` feature request.

6. **MCP image content as typed results**  
   Forwarding MCP images as structured, provider-neutral blocks (PR #5515) — important for multimodal pipelines.

7. **Capability metadata for tool discovery**  
   Tool discovery should work from spec-compatible metadata, not prose scraping (#4170). Improves UI and agent-facing tool descriptions.

---

## 6. Developer Pain Points

1. **Token-budget regressions and emergency compaction** (#5518, #5516)  
   Users with auto-compact disabled still see early compaction; v0.9.9 upgrades broke `max_tokens` calculations for unconfigured users. High impact on long-running sessions — the core value proposition of the tool.

2. **Rebrand / rename fallout** (#5526)  
   Shell completion scripts still invoke `codewhale-tui`; the `deepseek-tui` package no longer receives updates. Documentation lags the command-name migration; users report confusion.

3. **Windows-specific regressions**  
   Header status indicator broken since 0.9.7 (#5512); IME candidate window unstable (#5023). Windows Terminal + CJK input = common environment for Chinese users, and the TUI is visibly not well-tested there.

4. **Parallel-load flakes in tests** (#5355)  
   Known-issue basket for `exec_persistent_service::failed_exec_*` and `exact_turn_snapshot_restores_custom_endpoint...` — flaky tests during release gates, slowing down CI and release cadence.

5. **First-launch psychological cost** (#5522)  
   English telemetry disclosure + settings wall = high drop-off for non-English users. The onboarding flow is a top UX pain point in v0.9.10.

6. **Stuck durable executions** (#5497)  
   Durable Task Manager workers can hang indefinitely when `turn.completed` never fires; cancellation is a one-shot attempt with no grace period. Potentially blocks subsequent jobs.

---

*Digest generated from GitHub data for Hmbown/CodeWhale (formerly DeepSeek-TUI) on 2026-08-21.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*