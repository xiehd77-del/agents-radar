# AI CLI Tools Community Digest 2026-07-11

> Generated: 2026-07-11 02:47 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison Report
**Date:** 2026-07-11

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem is experiencing a period of intense maturation and fragmentation. The dominant theme across all seven tools is the rollout of GPT-5.6 family models (Sol/Terra/Luna), creating widespread configuration friction, provider integration bugs, and model routing issues. Agent governance has emerged as the critical unsolved problem—unbounded sub-agent spawning, zombie tasks, runaway token consumption, and inadequate cancellation mechanisms plague production deployments across Claude Code, Codex, and Gemini CLI. Terminal stability regressions on Windows and WSL2 are a cross-cutting concern affecting five of seven tools, while MCP (Model Context Protocol) OAuth flows and authentication reliability remain persistent blockers for enterprise adoption. The ecosystem is functionally converging on similar architectures (multi-agent orchestration, hook/plugin systems, session persistence), but each tool's execution quality and community responsiveness vary dramatically.

---

## 2. Activity Comparison

| Metric | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|--------|------------|-------------|------------|-------------|-----------|----------|----|-----------|--------------|
| **New Issues (24h)** | ~10 active | ~8 active | ~5 active | ~8 active | 0 | ~7 active | ~5 active | 12 | ~4 active |
| **Hot Issues (>10 comments)** | 5 | 5 | 7 | 2 | 0 | 3 | 3 | 3 | 4 |
| **PRs Active Today** | 7 | 10 | 10 | 1 | 10 | 10 | 10 | 10+ | 10+ |
| **New Releases (24h)** | v2.1.207 | 2 alpha (Rust) | None | v1.0.71-0 | None | None | None | v0.19.9 (failed) | None |
| **High-Urgency Issues** | 5 (P0-P1) | 3 (P0-P1) | 6 (P1) | 3 (blockers) | 0 | 4 (critical) | 3 (regressions) | 5 (P1) | 2 (release-blocker) |

**Key observations:**
- **Qwen Code** leads in raw issue volume (12 new issues in 24h) and PR velocity
- **Claude Code** and **Codex** have the most engaged communities per-issue (47+ comments on top issues)
- **Gemini CLI** has the most severe performance complaints (10-60 minute hangs)
- **Kimi Code** is the quietest today—0 new issues, 0 releases—suggesting either stability or stagnation
- **Pi** is actively tracking GPT-5.6 model support across multiple providers simultaneously
- **DeepSeek TUI** has the most structured release process (canonical milestones, lane-based tracking)

---

## 3. Shared Feature Directions

| Requirement | Affected Tools | Specific Needs |
|------------|---------------|----------------|
| **Agent Governance & Cost Control** | Claude Code (#68110, #75314), Codex (#31662), Gemini CLI (#28164), Qwen Code (#6683) | Depth limits, cost ceilings, cancellation UIs, fan-out guards, zombie task termination |
| **Subagent Model Selection** | Codex (#31814), Gemini CLI, Copilot CLI (#3709), Pi (#6097), DeepSeek TUI (#3969) | Per-agent model choice independent of parent; heterogeneous multi-agent workflows |
| **Multi-Model Provider Support** | All seven tools | GPT-5.6 family (Sol/Terra/Luna) onboarding; model catalog freshness; fallback routing |
| **MCP/Auth Reliability** | Copilot CLI (#4085, #4089), Qwen Code (#6639), DeepSeek TUI | OAuth flow completion, missing auth handlers, 401 recovery, server lifecycle |
| **Windows/WSL2 Stability** | Claude Code (#14828, #74649), Codex (#20214, #16374), Copilot CLI (#4069, #4077), OpenCode (#35828), Pi (#6300) | Console flashing, TUI freezes, shell compliance, credential resolution |
| **Hook/Plugin System Hardening** | Claude Code (#69970), Codex (#32301), Qwen Code | Silent regressions, trust propagation, async lifecycle support |
| **Configuration Compliance** | Gemini CLI (#13852), OpenCode (#36350), Pi (#6472), DeepSeek TUI (#4333) | Ignored config files, shell overrides, compaction bypass, empty provider headers |
| **Session Persistence/Recovery** | Claude Code (#10065), Copilot CLI (#4071), Qwen Code (#6697), DeepSeek TUI (#2934) | Auto-resume, state preservation across restarts, session browsing |
| **Structured Output & Scripting** | Kimi Code, Pi (#6341), OpenCode | `--json` flags, pipe support, constrained sampling, CI/CD integration |
| **Mobile/Web Access** | OpenCode (#10288, 89👍), Qwen Code (#6700-6702) | Remote code review, PR approval, incident response on-the-go |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|------------|-------------|------------|-------------|-----------|----------|----|-----------|--------------|
| **Primary Strength** | Auto mode GA; multi-model orchestration | Subagent architecture; Rust rewrite | Enterprise IAM; GCP integration | GitHub ecosystem; voice mode | Simplicity; low barrier | V2 TUI redesign; sandbox | Model catalog breadth | Daemon multi-workspace; channels | Fleet/Workflow orchestration |
| **Core Weakness** | Runaway agents; silent data loss | Windows stability; Sol rollout friction | Random hangs (10-60min); model quality | TUI regressions; linuxmusl dropped | Small community; few integrations | Clipboard broken 8 months high CPU | Timeout/retry config leaks | Docker CI flakiness; OOM on large repos | Constitutional enforcement gaps |
| **Target User** | Production multi-agent teams | Power users multi-model orchestration | Enterprise/GCP developers | GitHub/collaboration workflow | New/Junior developers | Agent-heavy TUI users | Multi-provider power users | Daemon/team deployments | Orchestration architects |
| **Open Source Model** | Closed (PR #41447) | Closed (Rust alpha) | Open | Closed | Open | Open | Open | Open | Open |
| **Unique Feature** | Advisor (Opus 4.8) | Computer Use 1.0 | Caretaker auto-triage | Voice mode ASR | `/init` plan-mode | CodeMode sandbox | Thinking levels | Web Shell composer | Fleet/Lane product model |

**Architectural divergence:**
- **Claude Code** emphasizes *agent orchestration with proprietary models* (Sonnet base + Opus Advisor)
- **Codex** is investing in *Rust-native performance* and *subagent heterogeneity*
- **Gemini CLI** targets *enterprise compliance* (IAM, Code Assist tiers) but sacrifices reliability
- **Copilot CLI** differentiates via *multimodal input* (voice, MCP) and *GitHub ecosystem*
- **OpenCode** and **Pi** focus on *provider flexibility* across open/closed models
- **Qwen Code** builds *daemon-based multi-tenant architecture* for team deployments
- **DeepSeek TUI** has the most *architecturally formalized* product model (Fleet/Workflow/Lane/Runtime)

---

## 5. Community Momentum & Maturity

| Tool | Momentum | Maturity | Signal |
|------|----------|----------|--------|
| **Claude Code** | 🔴 High | 🟡 Mature | 76👍 on single issue; #41447 most-watched PR; auto mode GA signals maturity |
| **OpenAI Codex** | 🔴 High | 🟡 Mature | 284👍 on #30364 (highest engagement); 2 Rust alpha releases; active PR pipeline |
| **Gemini CLI** | 🟢 Moderate | 🔴 Struggling | 98👍 on roadmap issue but no releases; hanging issues unresolved for months |
| **Copilot CLI** | 🟡 Moderate | 🟡 Stable | New patch release; voice mode failing; linuxmusl dropped—mixed signals |
| **Kimi Code** | 🔵 Low | 🟢 Early | No activity today; few integrations; low community engagement |
| **OpenCode** | 🟡 Moderate | 🟡 Maturing | V2 TUI dominance; clipboard bug (#4283, 103👍) shows community size |
| **Pi** | 🟡 Moderate | 🟡 Stable | Prolific PR output; model catalog freshness; extension API expansion |
| **Qwen Code** | 🔴 High | 🟡 Maturing | 12 new issues/15+ PRs in 24h; Docker CI failures indicate rapid iteration |
| **DeepSeek TUI** | 🔴 High | 🟢 Structured | Most formalized release process; 60-comment milestones; community contributions |

**Leading indicators of community health:**
- **Strongest upvote engagement:** Claude Code (#69238, 76👍), Codex (#30364, 284👍), Gemini CLI (#4556, 37👍)
- **Most responsive maintainers:** Qwen Code (fast PR merging), DeepSeek TUI (structured milestones), Pi (prolific PRs)
- **Most severe neglect:** Gemini CLI (performance issues unresolved 8+ months), OpenCode (#4283 clipboard 8 months)
- **Fastest iteration:** Qwen Code (failing releases but rapid fixes), Pi (10 PRs across model/extension/performance)

---

## 6. Trend Signals

### Industry Trends from Community Feedback

**1. Multi-Model Orchestration is Table Stakes, Not a Differentiator**
Every tool now supports multiple models, but the *quality* of switching—per-agent model selection, fallback routing, cost-aware scheduling—is where the market is separating. Tools that treat model selection as flat configuration (Gemini CLI, Kimi Code) are falling behind those that support heterogeneous multi-agent topologies (Codex, Claude Code, Pi).

**2. Agent Governance is the #1 Unmet Need**
Unbounded recursion (#68110), zombie tasks (#75314), and million-token burn incidents represent an existential risk for production AI CLI deployments. The tools that solve this first—with depth limits, cost ceilings, cancellation UIs, and observability—will win enterprise trust. Currently, none of the major tools have adequate guardrails.

**3. Windows Parity is a Multi-Tool Crisis**
Console flashing, TUI freezes, missing HCS services, broken shell compliance—Windows issues appear in 5 of 7 tools' top-10 issues. The market has not treated Windows as a first-class platform, and the accumulated debt is becoming a competitive liability.

**4. MCP Standardization is Bumpy but Inevitable**
OAuth flows (#4085), HTTP 401 recovery (#6639), tool discovery (#4089), and server lifecycle management are all MCP-related problems. The ecosystem is converging on MCP as the protocol standard, but implementation quality varies dramatically.

**5. Reasoning Token Economics are Under Scrutiny**
The GPT-5.5 clustering bug (#30364, 284👍) has exposed that users are acutely aware of artificial reasoning quotas. As thinking/reasoning levels proliferate (5→6→7 levels), demand for transparent token accounting will grow.

**6. Open Source vs. Closed Source Tension Persists**
Claude Code's #41447 (open-source proposal) remains open after 4 months. Codex's Rust alpha suggests internal rewrite, not community involvement. Meanwhile, Qwen Code, OpenCode, Pi, and DeepSeek TUI are actively benefiting from community contributions. The closed-source tools are losing the plugin/extension ecosystem battle.

### Reference Value for Developers

- **If you need production reliability today:** Claude Code (auto mode GA) or Qwen Code (daemon architecture) are most mature, but implement agent cost caps carefully.
- **If you value model flexibility:** Pi or OpenCode offer the broadest provider support with active model catalog maintenance.
- **If you're a Windows developer:** Expect friction. Copilot CLI and Claude Code have the most active Windows fixes, but no tool is truly stable.
- **If you're evaluating for enterprise deployment:** Test agent governance rigorously—this is the unsolved problem across all tools.
- **If you contribute to open source:** Qwen Code, DeepSeek TUI, and Pi have the most responsive maintainers and clearest contribution paths.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the `anthropics/skills` repository, based on the provided data.

---

### Claude Code Skills Community Highlights Report
**Data Snapshot:** 2026-07-11 | **Analysis Focus:** Top PRs & Issues

#### 1. Top Skills Ranking
The following Pull Requests represent the most actively discussed Skill submissions, primarily driven by bug fixes to the foundational **skill-creator** tooling.

1.  **[#1298: fix(skill-creator): run_eval.py always reports 0% recall](https://github.com/anthropics/skills/pull/1298) (Open)**
    - **Functionality:** A critical patch for the skill optimization pipeline. Fixes `run_eval.py` reporting 0% recall, which renders the description-optimization loop useless.
    - **Discussion:** The community's top priority. This PR addresses a systemic issue (#556, #1169) that has seen multiple independent reproductions. The fix involves ensuring the eval artifact is installed as a real skill and correcting Windows-specific stream reading and parallel worker logic.
    - **Status:** Open.

2.  **[#1323: fix(skill-creator): run_eval trigger detection misses real skill name](https://github.com/anthropics/skills/pull/1323) (Open)**
    - **Functionality:** Another fix for the `run_eval.py` trigger detection mechanism. It currently fails to recognize when a skill has been triggered, especially when it encounters non-Skill tools first.
    - **Discussion:** Directly related to #1298, this is a second root cause of the same "0% recall" symptom. The community discussion highlights the fragility of the current detection logic.
    - **Status:** Open.

3.  **[#514: Add document-typography skill](https://github.com/anthropics/skills/pull/514) (Open)**
    - **Functionality:** Solves common AI document formatting issues: orphan words, widowed headers, and numbering misalignment.
    - **Discussion:** A user-facing quality-of-life skill. High engagement suggests a strong demand for "polish" skills that address the final 10% of document generation quality.
    - **Status:** Open.

4.  **[#1367: feat(skills): add self-audit — mechanical verification + reasoning quality gate](https://github.com/anthropics/skills/pull/1367) (Open)**
    - **Functionality:** A universal "pre-delivery" audit skill. It first verifies that all claimed output files exist mechanically, then performs a four-dimensional reasoning quality audit.
    - **Discussion:** A highly ambitious "meta-skill" that aims to act as a general quality guardrail. It has garnered significant attention for its potential to reduce hallucinations and output errors across any project.
    - **Status:** Open.

5.  **[#538: fix(pdf): correct case-sensitive file references in SKILL.md](https://github.com/anthropics/skills/pull/538) (Open)**
    - **Functionality:** Fixes 8 case-sensitivity mismatches in the `pdf` skill's documentation that break on case-sensitive file systems (Linux/macOS).
    - **Discussion:** A simple but highly visible bug fix. It highlights the community's focus on cross-platform reliability and the challenges of maintaining documentation that matches file system reality.
    - **Status:** Open.

6.  **[#486: Add ODT skill](https://github.com/anthropics/skills/pull/486) (Open)**
    - **Functionality:** Enables Claude to create, fill, read, and convert OpenDocument files (.odt, .ods).
    - **Discussion:** Represents demand for deeper enterprise document format support, specifically for LibreOffice and open-source office suites. The community is interested in template filling and conversion to HTML.
    - **Status:** Open.

#### 2. Community Demand Trends
The Issues section reveals the community's most anticipated new directions and critical pain points.

- **Trust & Security Boundaries (High Demand):** Issue [#492](https://github.com/anthropics/skills/issues/492) is the most commented-on issue. The community is deeply concerned about community skills being distributed under the `anthropic/` namespace, creating a trust boundary vulnerability. There is a clear demand for clear provenance, signing, or a separate namespace for community-contributed skills.
- **Skill Distribution & Sharing (High Demand):** Issue [#228](https://github.com/anthropics/skills/issues/228) calls for org-wide skill sharing without manual file transfer. This indicates a need for an enterprise-grade distribution mechanism, suggesting skills are moving from individual tools to team assets.
- **Stabilizing the Skill-Creator Pipeline (Critical):** Issues [#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169), and [#1061](https://github.com/anthropics/skills/issues/1061) all document the "0% recall" bug and broader Windows compatibility failures. The community's ability to create and iterate on skills is currently blocked by these foundational bugs.
- **Meta-Skills for Quality Assurance (Emerging):** Issues like [#412](https://github.com/anthropics/skills/issues/412) ("agent-governance") and the new proposal [#1385](https://github.com/anthropics/skills/issues/1385) ("Reasoning Quality Gate Pipeline") show a trend towards skills *about* using skills—governance, auditing, and quality control.

#### 3. High-Potential Pending Skills
These actively discussed PRs are not yet merged and represent the next wave of incoming Skills.

- **[#1367: self-audit skill](https://github.com/anthropics/skills/pull/1367)** (Open, many comments): A meta-skill for pre-delivery verification.
- **[#181: SAP-RPT-1-OSS predictor skill](https://github.com/anthropics/skills/pull/181)** (Open): A specialized skill for enterprise predictive analytics using an open-source tabular model.
- **[#723: testing-patterns skill](https://github.com/anthropics/skills/pull/723)** (Open): A comprehensive guide covering modern testing philosophy and practices for the entire stack.
- **[#83: skill-quality-analyzer and skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (Open): Two meta-skills designed to evaluate and improve the quality and security of other skills.
- **[#1302: color-expert skill](https://github.com/anthropics/skills/pull/1302)** (Open): A deep-dive skill for color knowledge, covering naming systems and spaces.

#### 4. Skills Ecosystem Insight
The community's most concentrated demand is not for a new domain-specific skill, but for **stable, reliable, and secure tooling to build, evaluate, and distribute skills themselves**, indicating a platform maturity challenge where the developer experience and trust model must be solidified before the ecosystem can scale.

---

# Claude Code Community Digest — 2026-07-11

## Today's Highlights

Anthropic quietly graduated Auto mode to general availability on Bedrock, Vertex AI, and Foundry without requiring the opt-in environment variable, signaling growing confidence in provider-agnostic agentic workflows. The community is contending with a cluster of critical agent-governance bugs—unbounded sub-agent spawning, runaway token burn, and stuck background tasks that cannot be cancelled—while a wave of documentation gaps surfaced from a single diligent reporter. A long-running open-source proposal (#41447) continues to gather attention, and the security-guidance plugin received two significant hardening PRs.

## Releases

**v2.1.207** — [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.207)
- **Auto mode is now GA** for Bedrock, Vertex AI, and Foundry: `CLAUDE_CODE_ENABLE_AUTO_MODE` opt-in removed. Users can disable via `disableAutoMode` in settings.
- **Fixed terminal freeze** during streaming of long lists, tables, and paragraphs — addresses keystroke lag reported on heavy output.

No other releases in the last 24 hours.

## Hot Issues

1. **[#69238 — No response from API when Advisor is triggered](https://github.com/anthropics/claude-code/issues/69238)** — 47 comments, 76 👍. Using Sonnet as base, the Advisor feature (powered by Opus 4.8) intermittently fails with "No response from API" and forces a 2m+ retry. High community engagement suggests this breaks core multi-model workflows for many users.

2. **[#74649 — Missing HCS services: vfpext — Cowork not working on Windows 11 Pro](https://github.com/anthropics/claude-code/issues/74649)** — 43 comments. A critical blocker for Windows users trying to use Cowork; the required Hyper-V Container Services component is absent, and no workaround is documented.

3. **[#14828 — Windows: Console window flashing when executing tools](https://github.com/anthropics/claude-code/issues/14828)** — 40 comments, 33 👍. A 7-month-old visual bug that still affects tool execution on Windows. Community frustration is mounting as no fix has landed.

4. **[#10065 — Claude Desktop drops/reverts long multi-step tasks without warning](https://github.com/anthropics/claude-code/issues/10065)** — 23 comments, 10 👍. Tasks exceeding certain token or step thresholds silently revert or lose state. No warning to the user — a silent data-loss vector for complex sessions.

5. **[#68110 — Sub-agents recursively spawn unbounded child agents, exponential fan-out](https://github.com/anthropics/claude-code/issues/68110)** — 10 comments, 8 👍. A general-purpose `Agent` tool can spawn child agents that themselves have access to the `Agent` tool, creating an unbounded recursion tree. Massive token burn with no depth or count limits — a significant cost and stability risk for production deployments.

6. **[#41737 — Task output files grow unboundedly, filling entire disk (278 GB in minutes)](https://github.com/anthropics/claude-code/issues/41737)** — 7 comments, 1 👍. Critical disk-exhaustion bug in `/private/tmp/claude...`. Intermittent but catastrophic when triggered; system instability reported.

7. **[#21167 — ESC key kills ALL background tasks/subagents — poor UX](https://github.com/anthropics/claude-code/issues/21167)** — 7 comments, 9 👍. Pressing ESC during parallel agent workflows destroys all running tasks at once with no confirmation. A hard UX foot-gun for multi-agent development.

8. **[#75314 — 10 background Agent tasks stuck running for 34+ hours, ~1M tokens burned](https://github.com/anthropics/claude-code/issues/75314)** — 5 comments. Users report zombie tasks they cannot cancel, consuming tokens indefinitely. A governance and cost-control emergency.

9. **[#70438 — AskUserQuestion widget renders only header then hangs in VS Code extension](https://github.com/anthropics/claude-code/issues/70438)** — 4 comments, 3 👍. The interactive widget is broken in the VS Code chat panel when invoked from a Skill; session hangs indefinitely after tool header renders.

10. **[#69970 — PreToolUse:Bash hooks not invoked in v2.1.176](https://github.com/anthropics/claude-code/issues/69970)** — 3 comments, 4 👍. Registered hooks are silently inert — the Bash tool bypasses the `PreToolUse:Bash` hook chain entirely. A regression that breaks security-guidance and custom hook pipelines.

## Key PR Progress

1. **[#41447 — feat: open source claude code ✨](https://github.com/anthropics/claude-code/pull/41447)** — Long-running open-source proposal (since March). Closes multiple issues including #59, #456, and #41434. Community continues to monitor for official response.

2. **[#76475 — Flag innerHTML/outerHTML += append sink in security-guidance](https://github.com/anthropics/claude-code/pull/76475)** — Fixes a substring-matching gap where `+= ` assignments were missed by XSS detection rules. A security scan improvement for the security-guidance plugin.

3. **[#76394 — Add Claude Code Launcher - Windows CLI Application](https://github.com/anthropics/claude-code/pull/76394)** — A community-contributed Windows CLI launcher with 14 interactive menu options. Addresses the lack of native Windows-first UX.

4. **[#76298 — docs: document Remote Control background-task panel](https://github.com/anthropics/claude-code/pull/76298)** — Updates Remote Control documentation for the web/mobile background-task panel and task status synchronization added in v2.1.205.

5. **[#76289 — examples/hooks: demonstrate compound-command pre-flight](https://github.com/anthropics/claude-code/pull/76289)** — Extends the bash validator hook example to detect command chaining, pipelines, and `find`-exec patterns — a teaching resource for secure hook authoring.

6. **[#76274 — security-guidance: resolve review paths against repo root](https://github.com/anthropics/claude-code/pull/76274)** — Fixes path-resolution bugs in agentic reviewers where relative, root-anchored, and foreign absolute paths were passed unnormalized. Hardens the findings-array contract.

7. **[#41447](https://github.com/anthropics/claude-code/pull/41447)** — *see above* — Continuing to track as the most-watched PR.

8. *No additional PRs with substantive changes in this window* — remaining PRs are documentation-only or minor.

## Feature Request Trends

- **Agent governance & cost control** — The strongest signal from this week's issues: users need depth limits, cost ceilings, cancellation UIs, and fan-out guards for sub-agents. The recursive-spawning bug (#68110) and zombie tasks (#75314) amplify this demand.
- **Remote control / Cowork workflow propagation** — Requests for session trace context propagation into MCP tools (#76391) and visible background-task panels (#76298) show demand for observability in collaborative and remote sessions.
- **Windows parity** — Console flashing (#14828), missing HCS services (#74649), and symlink credential clobbering (#76561) indicate Windows is still a second-class platform.
- **Plugin ecosystem maturity** — Multiple documentation issues (#76567, #76568, #68936) and the silent hook regression (#69970) suggest the plugin system needs hardening and clearer boundaries.

## Developer Pain Points

1. **Agent runaway (cost & stability)** — Unbounded recursion, zombie tasks, and no cancellation mechanism. This is the #1 risk for anyone running multi-agent workflows in production. Token burn can reach millions per incident.

2. **Silent regressions and data loss** — Hooks that silently become inert (#69970), desktop sessions that lose state (#10065), and config that resurrects uninstalled plugins (#76570). Users cannot trust that their settings are honored.

3. **Windows experience degradation** — Long-standing bugs (console flashing) and missing features (Cowork, credential resolution) make Windows feel like a neglected platform 8 months into the product's lifecycle.

4. **Documentation gaps actively mislead** — A single reporter (coygeek) filed 7 documentation issues in one day covering auto-mode scope, plugin config, Amazon Bedrock auth, and launcher protection. The documentation is consistently out of sync with actual behavior.

5. **No escape from broken multi-model flows** — The Advisor feature failing (#69238) and model-switching getting stuck (#76549, #76137) leave users unable to benefit from cross-model orchestration without risk of hanging or cost spikes.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-11

## Today's Highlights
GPT-5.6 Sol rollout continues to surface configuration friction as the new default, with users reporting subagent model-locking and inability to access the model on Windows. A persistent reasoning-token clustering bug in GPT-5.5 Codex (spikes at 516/1034/1552) remains the most active issue by far (184 comments), while the team merged several infrastructure improvements around IPC socket resolution, hook trust from plugins, and blob upload diagnostics.

---

## Releases
- **rust-v0.145.0-alpha.4** and **rust-v0.145.0-alpha.3** — Alpha releases for the Rust-based Codex runtime. Changelogs note only "Release 0.145.0-alpha.X". No detailed changelog available.  
  https://github.com/openai/codex/releases

---

## Hot Issues

1. **[#30364] GPT-5.5 Codex reasoning-token clustering at 516/1034/1552**  
   *182 comments, 284 👍* — The most active open issue. Users report `reasoning_output_tokens` landing disproportionately on these fixed boundaries, correlated with degraded reasoning quality on complex tasks. Strong community consensus that the model is truncating reasoning at artificial token quotas.  
   https://github.com/openai/codex/issues/30364

2. **[#31814] GPT-5.6 Sol cannot specify subagent models**  
   *34 comments, 85 👍* — Sol forces all subagents to be Sol instances via `multi_agent_version = "v2"`, ignoring user model preference. Blocks heterogeneous multi-agent workflows. High engagement from power users.  
   https://github.com/openai/codex/issues/31814

3. **[#28969] Add setting to disable auto-resolve in 60 seconds for questions**  
   *22 comments, 104 👍* — CLI users frustrated by automatic resolution of questions after 60 seconds, often closing useful threads prematurely. High upvote ratio suggests broad demand.  
   https://github.com/openai/codex/issues/28969

4. **[#32032] Computer Use 1.0.1000366 crashes at launch on macOS 15.7.7**  
   *14 comments, 9 👍* — `dyld` cannot resolve Swift Concurrency symbol, blocking Computer Use entirely on latest macOS. Related to #22822.  
   https://github.com/openai/codex/issues/32032

5. **[#20214] Codex App freezes/stutters on Windows 11 Pro**  
   *32 comments, 45 👍* — Long-standing performance issue (since April). Users with ample hardware resources report full UI freezes. No fix confirmed yet.  
   https://github.com/openai/codex/issues/20214

6. **[#18993] Unable to open past conversation history in VS Code extension (CLOSED)**  
   *49 comments, 54 👍* — Now marked closed, but accumulated significant community frustration over three months.  
   https://github.com/openai/codex/issues/18993

7. **[#24069] CLI 0.133.0 broke local Ollama subagent spawning**  
   *8 comments, 6 👍* — Regression affecting local-provider users between 0.132.0 (working) and 0.133.0 (broken). Critical for users dependent on local models.  
   https://github.com/openai/codex/issues/24069

8. **[#12582] Require Escape twice to interrupt**  
   *5 comments, 11 👍* — Small but evocative UX request: accidental interrupt is a common complaint in the TUI.  
   https://github.com/openai/codex/issues/12582

9. **[#16374] Codex desktop app intermittently freezes Windows shell/UI**  
   *26 comments, 10 👍* — Opening Codex Settings stops the freeze, suggesting a rendering loop or thread-hog issue. Appears distinct from #20214.  
   https://github.com/openai/codex/issues/16374

10. **[#32040] Windows Desktop: in-app Browser hangs/closes Codex after PiP failure**  
    *7 comments, 3 👍* — Browser Use PiP failure cascades into full app hang. New issue, gaining attention.  
    https://github.com/openai/codex/issues/32040

---

## Key PR Progress

1. **[#32312] Require prefixes for outbound response item IDs**  
   Adds `ResponseItemId` type with UUIDv7 prefixes. Improves traceability across HTTP and WebSocket responses.  
   https://github.com/openai/codex/pull/32312

2. **[#32302] Prefer the Codex home socket for Unix IDE context**  
   Switches IDE context discovery to `CODEX_HOME/ipc/ipc.sock` first, with legacy fallback. Reduces socket resolution time and improves reliability.  
   https://github.com/openai/codex/pull/32302

3. **[#32301] Trust hooks from materialized workspace plugins**  
   Carries plugin metadata through refresh callbacks, recording hook hashes for workspace plugins. Enables safer plugin-driven automation.  
   https://github.com/openai/codex/pull/32301

4. **[#32288] Make GPT-5.6 Sol the default Bedrock model**  
   Prioritizes Sol/Terra/Luna over GPT-5.5/5.4 in the Bedrock catalog. Signals full platform readiness for GPT-5.6.  
   https://github.com/openai/codex/pull/32288

5. **[#31662] Allow restricting subagent environments**  
   Adds optional `environment_ids` to `spawn_agent`. Lets users limit subagent capability scopes. Addresses part of the subagent control complaints.  
   https://github.com/openai/codex/pull/31662

6. **[#32280] Include terminal errors in turn completion events**  
   Preserves `ErrorEvent` through the turn lifecycle, exposing it in `TurnCompleteEvent`. Enables better error introspection for tool developers.  
   https://github.com/openai/codex/pull/32280

7. **[#31058] Retry model capacity errors**  
   Treats structured capacity failures as recoverable — up to three retries with increasing backoff (30s/2m/5m). Keeps turns alive during transient overload.  
   https://github.com/openai/codex/pull/31058

8. **[#30887] Speed up reverse history search**  
   Batches history fetching instead of one-entry-at-a-time. Eliminates repeated file locking and scanning. Significant UX improvement for CLI users.  
   https://github.com/openai/codex/pull/30887

9. **[#31514] Reduce redundant filesystem syscalls**  
   Atomic writes through open temp files, retains directory classification from walks, avoids restatting matches. Performance optimization for file-heavy workflows.  
   https://github.com/openai/codex/pull/31514

10. **[#26259] Add advisory Interrupt hooks for interrupted turns**  
    Fires a new hook specifically on interrupt (not `Stop`). Hooks can report context but cannot block — aligns with the "advisory-only" pattern users requested.  
    https://github.com/openai/codex/pull/26259

---

## Feature Request Trends

- **Subagent model selection** — Multiple issues demand the ability to choose/restrict subagent models independently of the parent agent (e.g., #31814, #17598, #24069). This is the dominant architectural ask.
- **Hook and automation control** — Users want granular, non-blocking hooks for interrupts, turn lifecycle events, and repo-level config (`hooks.json`). #26259, #26452, #26383.
- **CLI quality-of-life** — Escape-to-interrupt confirmation (#12582), adjustable auto-resolve timeout (#28969), and thread selector for subagents (#30813) are recurring small UX asks.
- **Computer Use stability** — macOS crashes (#32032, #32293) and Windows Browser Use hangs (#32040) dominate recent Computer Use reports. The feature is shipping faster than its platform support.

---

## Developer Pain Points

- **Windows stability** — #20214 (freezes), #16374 (shell freeze), #28982 (sandbox setup fails), #28080 (tool handler loss), and #32040 (browser hang) paint a picture of a platform still struggling to match macOS reliability.
- **GPT-5.6 Sol rollout friction** — Users on Plus subscriptions report being unable to access Sol (#32023), while those who can access it find subagent model-locking (#31814).
- **Local provider regressions** — #24069 and #17598 show that local Ollama/custom providers remain fragile to CLI version bumps, eroding trust for users avoiding cloud models.
- **Reasoning quality concerns** — #30364's token clustering at fixed boundaries suggests aggressive internal quotas on reasoning tokens, potentially reducing output quality on complex problems. This has the highest community engagement of any open issue.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-07-11

---

## Today's Highlights

The community is experiencing significant friction with reliability and performance issues in Gemini CLI, particularly around agent hanging, slow response times, and broken tool execution. Enterprise users continue to face authentication and permission barriers, while maintainers are actively working on security hardening and A2A server architecture improvements. The project saw no new releases in the last 24 hours.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

### 1. [Issue #13190](https://github.com/google-gemini/gemini-cli/issues/13190) — "You must be a named user on your organization's Gemini Code Assist Standard edition subscription"
- **Labels:** p1, enterprise, bug
- **Created:** Nov 2025 | **Comments:** 74 | **👍:** 9
- **Why it matters:** This continues to be the most discussed issue, reflecting a persistent blocker for enterprise users who cannot authenticate despite having valid subscriptions. The 403 error remains unresolved after 8 months, causing frustration for organizational deployments.

### 2. [Issue #4556](https://github.com/google-gemini/gemini-cli/issues/4556) — Make Gemini less of a sycophant
- **Labels:** p2, agent, bug
- **Created:** Jul 2025 | **Comments:** 25 | **👍:** 37
- **Why it matters:** With 37 upvotes, this is the community's most vocal request for behavioral changes. Developers want a critical partner rather than an echoing assistant, especially for complex software architecture discussions.

### 3. [Issue #26197](https://github.com/google-gemini/gemini-cli/issues/26197) — Too slow to answer. Impossible to continue using
- **Labels:** p1, agent, performance
- **Created:** Apr 2026 | **Comments:** 16 | **👍:** 7
- **Why it matters:** Reports of 10-minute wait times for responses highlight severe performance regressions that make the tool unusable for serious development work.

### 4. [Issue #4191](https://github.com/google-gemini/gemini-cli/issues/4191) — Public Roadmap
- **Labels:** p2, extensions, help wanted
- **Created:** Jul 2025 | **Comments:** 15 | **👍:** 98
- **Why it matters:** The most upvoted issue (98 👍) tracking the public roadmap. High community interest in project direction and contribution opportunities.

### 5. [Issue #13852](https://github.com/google-gemini/gemini-cli/issues/13852) — `GEMINI.md` instructions are ignored
- **Labels:** p1, agent, bug
- **Created:** Nov 2025 | **Comments:** 13 | **👍:** 16
- **Why it matters:** Users report that Gemini 3 Pro fails to respect configuration files, undermining one of the tool's core customization features. Instructions in `GEMINI.md` are routinely ignored.

### 6. [Issue #13671](https://github.com/google-gemini/gemini-cli/issues/13671) — Gemini 3 Pro beyond bad at editing, thinking, logic and planning
- **Labels:** p1, customer-issue, bug
- **Created:** Nov 2025 | **Comments:** 13 | **👍:** 23
- **Why it matters:** Strong criticism of Gemini 3 Pro's reasoning capabilities, with users noting it underperforms compared to competing models. Community suspects both the model and CLI are contributing factors.

### 7. [Issue #26319](https://github.com/google-gemini/gemini-cli/issues/26319) — Gemini 3.1 Pro stuck on thinking for 1h without output
- **Labels:** p1, agent, bug
- **Created:** May 2026 | **Comments:** 11 | **👍:** 4
- **Why it matters:** A regression introduced in v0.40.1 causes the model to hang indefinitely during reasoning, blocking critical workflow tasks like spec reviews.

### 8. [Issue #26265](https://github.com/google-gemini/gemini-cli/issues/26265) — Hanging randomly, "when are you going to do something about it?"
- **Labels:** p2, core, bug
- **Created:** Apr 2026 | **Comments:** 8 | **👍:** 4
- **Why it matters:** User frustration has reached a boiling point over random hangs that last 20+ minutes. This has been an issue since v0.34.0 and persists across versions.

### 9. [Issue #26564](https://github.com/google-gemini/gemini-cli/issues/26564) — 403 Permission Denied when `GOOGLE_CLOUD_PROJECT` is set
- **Labels:** p2, enterprise, bug
- **Created:** May 2026 | **Comments:** 11 | **👍:** 0
- **Why it matters:** A common configuration issue where existing environment variables conflict with authentication, blocking Gemini Advanced and free-tier users.

### 10. [Issue #28101](https://github.com/google-gemini/gemini-cli/issues/28101) — Unable to log in to Gemini CLI normally
- **Labels:** p2, security, bug (CLOSED)
- **Created:** Jun 2026 | **Comments:** 9 | **👍:** 5
- **Why it matters:** Recently closed but notable for its security implications—users reporting login failures with unclear error messages, suggesting authentication flow fragility.

---

## Key PR Progress

### 1. [PR #28319](https://github.com/google-gemini/gemini-cli/pull/28319) — Refactor A2A server path trust check and environment isolation
- **Labels:** size/m, size/l, need-issue
- **Impact:** Enforces workspace path trust checks before loading environment variables, improving security in the agent execution lifecycle.

### 2. [PR #28164](https://github.com/google-gemini/gemini-cli/pull/28164) — Limit recursive reasoning turns per user request (CLOSED)
- **Labels:** size/m, core
- **Impact:** Introduces a 15-turn hard limit on recursive reasoning, protecting against infinite loops that waste CPU and API credits. This directly addresses the hanging behavior reported in multiple issues.

### 3. [PR #28316](https://github.com/google-gemini/gemini-cli/pull/28316) — Fix task cancellation in A2A server
- **Labels:** size/m, size/l, need-issue
- **Impact:** Patches critical bugs including ghost task executions, race conditions, and memory leaks in agent mode cancellation.

### 4. [PR #28353](https://github.com/google-gemini/gemini-cli/pull/28353) — Prevent path traversal in restore command
- **Labels:** size/s, security
- **Impact:** Defense-in-depth fix preventing directory traversal attacks via checkpoint restore functionality.

### 5. [PR #28352](https://github.com/google-gemini/gemini-cli/pull/28352) — Sanitize untrusted_context in caretaker ingestion
- **Labels:** size/s, security
- **Impact:** Closes a prompt injection vulnerability by sanitizing issue titles in the caretaker agent service.

### 6. [PR #28345](https://github.com/google-gemini/gemini-cli/pull/28345) — LLM triage orchestrator for caretaker
- **Labels:** size/l, caretaker
- **Impact:** Implements automated issue triage using LLM inference, with structured logging to GCS and Cloud Run deployment configuration.

### 7. [PR #28304](https://github.com/google-gemini/gemini-cli/pull/28304) — Show clear message when account has no Code Assist tier (CLOSED)
- **Labels:** p1, core
- **Impact:** Replaces raw backend error messages with user-friendly explanations when enterprise/Workspace accounts lack proper entitlements.

### 8. [PR #28330](https://github.com/google-gemini/gemini-cli/pull/28330) — Atomic token file mode setting for TOCTOU fix
- **Labels:** p2, security
- **Impact:** Prevents a race condition where auth tokens are briefly world-readable between file creation and permission setting.

### 9. [PR #28349](https://github.com/google-gemini/gemini-cli/pull/28349) — Circular reference guard in customDeepMerge
- **Labels:** p2, core
- **Impact:** Prevents crashes when config objects contain circular references, fixing a `RangeError: Maximum call stack size exceeded` in settings management.

### 10. [PR #28348](https://github.com/google-gemini/gemini-cli/pull/28348) — Fix MaxListenersExceededWarning and infinite auth loop
- **Labels:** core
- **Impact:** Resolves two critical issues: event emitter warnings causing infinite API retry loops and infinite OAuth authentication loops on Windows.

---

## Feature Request Trends

1. **Behavioral Improvements (#4556):** Strong demand for less sycophantic, more critical AI responses—the community wants a genuine collaborator, not a yes-man.
2. **AST-Aware Code Intelligence (#22745):** Growing interest in abstract syntax tree-aware file reads, search, and codebase mapping for more precise edits and reduced token waste.
3. **Component-Level Evaluations (#24353):** Maintainers are expanding behavioral evaluation tests to improve quality, currently supporting 76 tests across 6 model configurations.
4. **Sandbox Mode Visibility (#26697):** Users on macOS want better visual indicators for sandbox execution mode in the CLI footer.
5. **Public Roadmap Engagement (#4191):** The community strongly desires transparency into the project's development direction and contribution opportunities.

---

## Developer Pain Points

- **Performance Degradation (#26197, #26265, #26319):** The most severe pain point—random hangs lasting 10-60+ minutes, making the tool unusable for production work. Users report this has been ongoing since April 2026 with no resolution.
- **Enterprise Authentication Barriers (#13190, #26564, #26421):** Enterprise users are stuck in a cycle of 403 errors, missing IAM permissions, and confusing entitlement requirements. Nearly 8 months without resolution for the most-discussed issue.
- **Configuration File Ignorance (#13852, #26700):** `GEMINI.md` instructions are frequently ignored by the model, and the file discovery mechanism fails on case-sensitive filesystems.
- **Tool Execution Failures (#19052, #22433, #26854, #26883):** Multiple reports of broken tool calls (`write_file`, `run_shell_command`, function calling) that either fail silently or produce unhelpful errors.
- **Regression Tracking (#26319, #26265):** Specific regressions introduced in v0.40.1 and v0.34.0+ suggest insufficient testing before release, eroding developer trust.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-11

## Today's Highlights
A new patch release (v1.0.71-0) lands with pinned prompts, repo-scoped settings, and a long-overdue UX fix for session management shortcuts. However, the community is sounding alarms over critical regressions: the TUI wedging mid-session on WSL2/Windows Terminal (#4069), voice mode ASR models failing silently with zero transcription output (#4024), and a blocked OAuth MCP flow affecting enterprise users (#4085). Demand for multi-model switching in BYOK sessions and auto-updating plugins continues to grow.

## Releases
**v1.0.71-0** — [Release Link](https://github.com/github/copilot-cli)
- **Added:** Pinned prompts setting (via `/settings`); Repo and Repo (local) scope tabs in `/settings` dashboard
- **Improved:** Default validation now uses targeted commands with lighter install guidance; new shortcuts: `ctrl+x → x` to close a session, `ctrl+x → h` to hide the session picker

## Hot Issues (Top 10 by community impact)
1. **#4069** — [TUI wedges mid-turn (screen clears, input dead) on WSL2 + Windows Terminal](https://github.com/github/copilot-cli/issues/4069)  
   *8 👍, 7 comments* — Terminal becomes completely unresponsive; `Ctrl+C`/`Ctrl+\` ignored. Likely Rust JSON-RPC transport EPIPE. Critical for WSL2 developers.

2. **#4024** — [Voice mode: all 3 bundled ASR models fail silently (nemotron speech)](https://github.com/github/copilot-cli/issues/4024)  
   *7 comments* — Microphone capture works (level meter reacts) but every `/voice` transcription returns empty. Root cause: `MultiModalProcessor` routing bug for RNNT in Foundry Local Core.

3. **#4077** — [TUI black-screen hang mid-turn on Windows Terminal (v1.0.70-0)](https://github.com/github/copilot-cli/issues/4077)  
   *3 👍, 2 comments* — Content intact but screen goes black; recoverable via `--resume`. Regression in pre-release builds.

4. **#4089** — [Atlassian MCP server: OAuth succeeds but zero tools exposed](https://github.com/github/copilot-cli/issues/4089)  
   *2 comments* — Other HTTP MCP servers (LeanIX, Lucid) work fine. Server connects but no tools load in agent sessions.

5. **#4085** — [MCP OAuth flow broken: servers marked `needs-auth` during discovery, connections drop after ~90s](https://github.com/github/copilot-cli/issues/4085)  
   *New triage* — OAuth flow initiated but cancelled because no auth handler registered; affects Azure AD and Microsoft Work IQ servers.

6. **#2739** — [xhigh reasoning removed for gpt-5.4 and gpt-5.3-codex!](https://github.com/github/copilot-cli/issues/2739)  
   *12 👍, 5 comments (CLOSED)* — Despite closure, still high community frustration. Models described as "useless without xhigh reasoning."

7. **#2533** — [Blocking shell/tool call freezes agent — user messages unread until shell unblocks](https://github.com/github/copilot-cli/issues/2533)  
   *2 comments* — SSH hangs, network timeouts, or blocking I/O make the agent completely unresponsive to new input.

8. **#4091** — [Standalone binary removed from all linuxmusl-x64 release tarballs](https://github.com/github/copilot-cli/issues/4091)  
   *1 comment (CLOSED)* — Breaking change for Alpine Linux users: precompiled binary missing from v1.0.X tarballs.

9. **#4071** — [Session picker only shows current session (regression from ExP flight)](https://github.com/github/copilot-cli/issues/4071)  
   *New* — `/session` and `/resume` picker hides all prior sessions. Resuming by ID still works; listing UI is broken.

10. **#4086** — [Atlassian MCP auto-connects without completing OAuth flow (Sign in button disappears)](https://github.com/github/copilot-cli/issues/4086)  
    *New triage* — Green checkmark shown but no OAuth browser flow; no tools loaded in sessions.

## Key PR Progress (Top 10)
1. **#2565** — [Install: guard against duplicate PATH entries on reinstall](https://github.com/github/copilot-cli/pull/2565)  
   *Long-standing fix* — Prevents shell profile pollution when installer is run twice without restarting the shell.

2. *(No other PRs were updated in the last 24h; only #2565 qualifies for this period.)*

## Feature Request Trends
- **Multi-model switching in BYOK sessions** (#3709, 17 👍) — Users want `/model` to list local BYOK provider models, not just GitHub-hosted ones.
- **Auto-update plugins via marketplace flag** (#3331, 4 👍) — Plugin maintainers need a declarative way to push updates without manual user intervention.
- **Dynamic context injection in Skills** (#4088) — Placeholder `!` command syntax inside `SKILL.md` for runtime command execution.
- **Cross-app session sync** (#4082) — Sync sessions between Copilot CLI and Copilot Desktop App on macOS.
- **Voice mode auto-submit** (#4090) — Automatically submit transcription on spacebar release (push-to-talk).
- **Mute system playback during voice capture** (#4092) — Avoid microphone interference from Spotify, YouTube, etc.

## Developer Pain Points
- **TUI stability regressions** — Multiple reports (#4069, #4077) of mid-session screen clears, black screens, and unresponsive terminals on Windows/WSL2. Community anger is palpable.
- **Voice mode ASR broken** (#4024) — All three bundled models return empty transcriptions; silent failure with no error message.
- **MCP OAuth hell** (#4085, #4086, #4089) — OAuth-protected MCP servers (Atlassian, Azure AD) either never connect, connect silently without completing auth, or drop after ~90s. Enterprise adoption blocked.
- **Blocking tool calls freeze the agent** (#2533) — SSH, network timeouts, or any blocking I/O makes the agent deaf to new messages. No timeout or kill mechanism.
- **Prompt queue corruption** (#4078, #4079) — Scheduled prompts (`/every`, `/after`) interrupt and halt the task queue, discarding pending items.
- **linuxmusl-x64 binary dropped** (#4091) — Silent removal of standalone binary breaks Alpine Linux users; no migration guidance provided.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the **Kimi Code CLI Community Digest** for **2026-07-11**.

---

## Kimi Code CLI Community Digest
**Date:** 2026-07-11

### 1. Today's Highlights
Activity today focused on **critical bug fixes** rather than new features. Two high-impact PRs from contributor `nankingjing` target core stability: one fixes an issue where the `/init` command breaks tool bindings in plan-mode, and another improves the new-user onboarding experience by making the `LLMNotSet` error actionable. A long-standing Safari IME composition bug was also finally merged after months of review.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
*No new issues were created in the last 24 hours.* The project is currently in a stable state regarding new bug reports. For context, the community continues to track the following high-signal issues from the backlog:

- **#2456 (Closed): LLMNotSet error is not actionable** – Fresh installs hitting a dead-end error with no guidance. *Rationale:* Critical for developer experience (DX) and lowering the barrier for new users.
- **#2478 (Open): `/init` breaks plan-mode tool bindings** – A shared agent state issue causing tool failures after initialization.
- **#2401 (Open): Web UI sessions sidebar scrolling jumps on resize** – A persistent UI/UX annoyance for heavy users.
- **#2378 (Open): `kimi sync` silently fails on large directories** – Users losing work due to silent errors.
- **#2330 (Open): Feature request: `--json` output flag for all commands** – High demand for piping and scripting integrations.
- **#2290 (Open): GPU acceleration for local models (Metal/CUDA)** – Frequent ask from developers running local LLMs.
- **#2245 (Open): Tab completion for files and commands in interactive mode** – Quality-of-life improvement heavily requested.
- **#2210 (Open): Environment variable expansion in config files** – Needed for CI/CD and multi-environment setups.
- **#2155 (Open): `kimi alias` system for user-defined shortcuts** – Power users requesting alias management.
- **#2090 (Open): Built-in diff viewer for `code review` command** – Essential for the CLI code-review workflow.

### 4. Key PR Progress

| PR | Status | Author | Key Change |
|---|---|---|---|
| **#2489** [Open](https://github.com/MoonshotAI/kimi-cli/pull/2489) | nankingjing | Fixes #2478: `/init` no longer corrupts plan-mode tool bindings by preventing the throwaway soul from rebinding shared tool instances. |
| **#2488** [Open](https://github.com/MoonshotAI/kimi-cli/pull/2488) | nankingjing | Closes #2456: improved `LLMNotSet` error message to instruct users to run `kimi login` first. |
| **#2353** [Closed](https://github.com/MoonshotAI/kimi-cli/pull/2353) | anxndsgn | Fix: tightened app layout spacing, removed outer gutter, and refined sidebar list spacing. (Merged) |
| **#1815** [Closed](https://github.com/MoonshotAI/kimi-cli/pull/1815) | qianqiuqiu | Fix: prevents Enter key from sending message during IME composition on Safari. (Merged after 3 months) |
| **#2485** [Open](https://github.com/MoonshotAI/kimi-cli/pull/2485) | community | Adds `--timeout` flag to `kimi chat` for headless scripting. |
| **#2480** [Open](https://github.com/MoonshotAI/kimi-cli/pull/2480) | community | Implements `kimi stats` command to show token usage and latency. |
| **#2475** [Open](https://github.com/MoonshotAI/kimi-cli/pull/2475) | core-team | Refactors plugin system to support async lifecycle hooks. |
| **#2468** [Open](https://github.com/MoonshotAI/kimi-cli/pull/2468) | community | Adds terminal hyperlink support for filenames in `kimi review` output. |
| **#2460** [Open](https://github.com/MoonshotAI/kimi-cli/pull/2460) | community | Fixes incorrect `kimi config` validation for custom model endpoints. |
| **#2450** [Open](https://github.com/MoonshotAI/kimi-cli/pull/2450) | core-team | Experimental: `kimi pipeline` command for multi-step automated workflows. |

### 5. Feature Request Trends
The most demanded feature directions, aggregated from open issues and comments, are:

1. **Structured Output & Scripting** – High demand for `--json` / `--csv` output flags, piping support, and `return-code` signaling for headless CI/CD integration.
2. **Async & Concurrent Execution** – Requests for running multiple code reviews in parallel or batch processing of files without blocking the terminal.
3. **Local Model Support** – Strong community interest in running Kimi Code CLI against local Ollama/LM Studio instances, including basic GPU acceleration.
4. **Customizable Prompt Templates** – Users want to define, share, and version-control their own system prompts for code review, commit message generation, and documentation.
5. **Git-aware Tooling** – Deep Git integration (e.g., `kimi diff`, `kimi log review`, auto-staging suggestions) is a recurring request.

### 6. Developer Pain Points
*Latest 24h:* No new pain points were raised, indicating a quiet day. *From the backlog:*

- **Silent Failures** – Commands like `kimi sync` and `kimi chat` failing without clear error messages or exit codes (especially in headless environments).
- **Onboarding Friction** – Fresh installs hitting `LLM not set` without any guidance (now being addressed by PR #2488).
- **UI/UX Inconsistency** – Safari/IME composition issues (resolved in #1815) and layout spacing bugs (resolved in #2353) highlight ongoing web UI polish needs.
- **State Management Bugs** – The `/init` tool binding regression (#2478, PR #2489) shows that shared mutable state between "soul" instances is fragile and difficult to maintain.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-11

## Today's Highlights
V2 TUI development dominates today's activity with multiple focused issues on dialog behavior, service restart semantics, and shell process continuity. The community is actively reporting GPT-5.6 Luna/Sol model availability problems across OpenAI OAuth and GitHub Copilot providers in the latest v1.17.18 release.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **#4283 — Copy To Clipboard is not working**  
   [Link](https://github.com/anomalyco/opencode/issues/4283)  
   The most active issue by far with **112 comments and 103 upvotes**. Users cannot copy response text to clipboard on any platform. This has been open since November 2025 and remains unresolved for the v1.x line. The high engagement suggests this is a critical UX blocker for many.

2. **#30086 — High CPU usage in newer versions**  
   [Link](https://github.com/anomalyco/opencode/issues/30086)  
   20 comments, 12 upvotes. CPU usage has spiked dramatically; users report being limited from 10 concurrent sessions to 3. Performance regression is affecting mouse cursor responsiveness on some systems.

3. **#10288 — Feature Request: Mobile version (Android/iOS/Web UI)**  
   [Link](https://github.com/anomalyco/opencode/issues/10288)  
   15 comments, 89 upvotes. Strong community desire for mobile access to the AI coding agent. The suggestion covers on-the-go code review, PR approval, and incident response.

4. **#36140 — GPT-5.6 Luna returns model not found with ChatGPT OAuth**  
   [Link](https://github.com/anomalyco/opencode/issues/36140)  
   12 comments, 49 upvotes. Fresh issue (3 days old). `gpt-5.6-luna` listed as built-in but fails with HTTP 404. A PR (#36143) is already open to fix the Responses envelope routing.

5. **#36241 — gpt-5.6-sol-fast/high reasoning part `rs_*:0` not found**  
   [Link](https://github.com/anomalyco/opencode/issues/36241)  
   3 comments. New macOS-specific failure where streaming reasoning aborts after the first result. Another sign the latest model family has rough edges in the provider integration layer.

6. **#2632 — Default permissions allow editing files and executing any commands**  
   [Link](https://github.com/anomalyco/opencode/issues/2632)  
   22 comments, closed but still actively discussed. This remains a design tension: should OpenCode default to "always ask" for file edits and dangerous commands? A long-running discussion about safety defaults.

7. **#35828 — Windows TUI fails in v1.17.15 when project `.opencode` already exists**  
   [Link](https://github.com/anomalyco/opencode/issues/35828)  
   3 comments, 2 upvotes. Server error on startup due to `Config.loadInstanceState` failing on an existing directory. Another Windows-specific stability issue.

8. **#36305 — GitHub Copilot provider: every model rejected as `unsupported_api_for_model`**  
   [Link](https://github.com/anomalyco/opencode/issues/36305)  
   3 comments. Fresh report that OpenCode targets the wrong endpoint for all Copilot models. Suggests a fundamental endpoint routing bug in the provider.

9. **#36350 — OpenCode violates the Terminal Shell parameter**  
   [Link](https://github.com/anomalyco/opencode/issues/36350)  
   2 comments. Despite setting shell to CMD, OpenCode still spawns PowerShell occasionally, leading to "No output" errors. A persistent configuration compliance issue.

10. **#36196 — V2: improve tool search namespaces and reduce tool-context cache busts**  
    [Link](https://github.com/anomalyco/opencode/issues/36196)  
    2 comments. An agent-bot generated issue targeting V2 latency problems when tools must be discovered from namespaces like Slack/Discord. Cache invalidation on dynamic tool additions is a known perf pain point.

## Key PR Progress

1. **#36346 — [OPEN] test(tui): add shortcut screenshot harness**  
   [Link](https://github.com/anomalyco/opencode/pull/36346)  
   Adds an OpenCode Drive walkthrough to capture deterministic TUI shortcut screenshots at a fixed viewport. Useful for visual regression testing.

2. **#36339 — [CLOSED] feat(codemode): support Promise.any and new Promise construction**  
   [Link](https://github.com/anomalyco/opencode/pull/36339)  
   Implements the De Morgan dual of `Promise.all` and `new Promise(executor)` in the CodeMode sandbox interpreter, following up on #36304. A core sandbox feature for promise handling completeness.

3. **#36341 — [OPEN] feat(tui): show pending command resolution**  
   [Link](https://github.com/anomalyco/opencode/pull/36341)  
   MCP-backed slash commands currently leave the TUI looking idle while resolving. This tracks the pending state to give users visual feedback.

4. **#36338 — [CLOSED] fix(tui): fork messages with agent attachments**  
   [Link](https://github.com/anomalyco/opencode/pull/36338)  
   Fixes a `DataCloneError` when forking messages that contain Solid store-backed agent attachments. Closes #36323.

5. **#36336 — [CLOSED] featt(core): port GitHub Copilot OAuth**  
   [Link](https://github.com/anomalyco/opencode/pull/36336)  
   Ports the GitHub Copilot device OAuth flow and remote model syncing into the V2 integration registry. An important foundation for provider parity between v1 and v2.

6. **#36143 — [OPEN] fix(opencode): support GPT-5.6 Responses Lite**  
   [Link](https://github.com/anomalyco/opencode/pull/36143)  
   Fixes the `Model not found` error for Luna by routing to the correct Codex Responses API envelope. The PR notes that Codex 0.144 marks the switch.

7. **#36333 — [OPEN] fix(core): cap session output tokens**  
   [Link](https://github.com/anomalyco/opencode/pull/36333)  
   Caps V2 provider turns at 32,000 output tokens to match runtime behavior, preventing models from exhausting their full context window.

8. **#36332 — [OPEN] test(core): add CodeMode search fixture catalog**  
   [Link](https://github.com/anomalyco/opencode/pull/36332)  
   Registers 200 temporary no-op tools across 20 realistic namespaces to exercise V2's `$codemode.search` and tool discovery end-to-end.

9. **#36304 — [CLOSED] feat(codemode): support promise chaining with .then/.catch/.finally**  
   [Link](https://github.com/anomalyco/opencode/pull/36304)  
   Adds full `Promise.prototype` chaining to the sandbox, building on earlier promise combinators. Each reaction returns a new scope-owned promise.

10. **#34794 — [OPEN] feat(provider): add --model free to pick a random zero-cost model**  
    [Link](https://github.com/anomalyco/opencode/pull/34794)  
    Long-running PR (11 days open) that adds a `--model free` flag to randomly select from OpenCode's zero-cost model pool. Closes #21863.

## Feature Request Trends

- **Mobile/web access** (#10288, 89 👍) remains the single most-requested feature. Developers want on-the-go access for code review, PR approval, and incident response.
- **V2 TUI polish** is the dominant active theme: collapsible thinking steps (#29212), unified modal behavior (#36302), and pending command resolution (#36341) all target the Desktop experience.
- **Provider extensibility** is growing: Azure GPT-5.6 support (#36211), provider-specific rate limiting (#32423), and Interactive Steering for GPT-5.4 (#19205) all point to demand for deeper provider configuration.
- **Browser/workspace integration** (#26772, 3 👍) suggests some users want a full integrated development environment rather than just a terminal agent.

## Developer Pain Points

- **Clipboard/copy issues** (#4283) are the #1 reported pain point with 112 comments and 103 upvotes, unresolved since November 2025.
- **Model availability and routing** is a recurring theme: GPT-5.6 family models failing on ChatGPT OAuth (#36140), macOS reasoning stream failures (#36241), and GitHub Copilot's `unsupported_api_for_model` error (#36305) suggest the provider integration layer needs urgent attention.
- **Configuration compliance** — OpenCode ignoring the terminal shell setting (#36350) and default permissions allowing unrestricted edits (#2632) indicate that user configuration is not reliably enforced.
- **Windows stability** continues to lag: TUI startup fails on existing `.opencode` directories (#35828) and desktop app cannot distinguish projects with the same name (#36344).
- **Tool calling errors** with Claude (#9532) and MCP timeout configuration (#11584) indicate friction in the tool execution pipeline.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-11

## Today's Highlights
GPT-5.6 model support dominates today's digest, with multiple issues and PRs adding `sol`, `terra`, and `luna` variants across the Copilot and Codex providers. A serious regression in `httpIdleTimeoutMs` for self-hosted OpenAI-compatible providers is actively being investigated, while a fix for OpenRouter session affinity has landed. The community is also pushing for new thinking levels (`max`, `ultra`) to keep pace with model provider releases.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#6475 — Add GPT-5.6 (Sol/Terra/Luna) to GitHub Copilot provider catalog](https://github.com/earendil-works/pi/issues/6475)**  
   High-urgency request (👍7) to add the three new GPT-5.6 models rolled out by GitHub Copilot. Multiple parallel issues (e.g., #6465) show the community is actively migrating.

2. **[#6206 — Clamping to context window prevents artificial context limits](https://github.com/earendil-works/pi/issues/6206)**  
   A nuanced regression where fixing one bug (clamping `max_tokens` to context window) prevents users from setting smaller context limits, breaking workflows that need precise budget control.

3. **[#6476 — Regression: httpIdleTimeoutMs no longer respected for self-hosted providers](https://github.com/earendil-works/pi/issues/6476)**  
   Critical regression in v0.80.6: self-hosted vLLM users report premature timeouts despite explicit `httpIdleTimeoutMs` settings. Being actively investigated.

4. **[#6300 — Windows: Input line redrawn on every keystroke](https://github.com/earendil-works/pi/issues/6476)**  
   TUI usability issue on Windows where each character appears on a new line. Affects cmd.exe and Windows Terminal.

5. **[#6366 — Support session IDs for OpenRouter](https://github.com/earendil-works/pi/issues/6366)**  
   OpenRouter requires `x-session-id` header or `session_id` in JSON body for prompt caching, but Pi only sends the wrong format. Important for prompt caching performance.

6. **[#6303 — Exponential retry backoff has no cap](https://github.com/earendil-works/pi/issues/6303)**  
   A configuration oversight: `maxDelayMs` exists in settings but isn't used, causing retries to balloon to 4+ minutes per attempt.

7. **[#6097 — Add support for 'max' thinking level](https://github.com/earendil-works/pi/issues/6097)**  
   Most-upvoted open feature request (👍17). OpenAI's GPT-5.6 Sol introduces a sixth thinking level, and Pi currently stops below `max`.

8. **[#6472 — compaction.enabled=false bypassed by overflow recovery path](https://github.com/earendil-works/pi/issues/6472)**  
   Users who explicitly disable compaction find it still triggers via the overflow recovery code path — a subtle configuration bug.

9. **[#6477 — Compaction summary requests omit session ID](https://github.com/earendil-works/pi/issues/6477)**  
   Compaction entirely broken on OpenAI Codex's new GPT-5.6 models because the session ID is not forwarded to the summarization endpoint.

10. **[#6324 — /tree branch summarization throws "No API key found" for ambient-credential providers](https://github.com/earendil-works/pi/issues/6324)**  
    Providers like Bedrock and Vertex AI use ambient credentials (no `apiKey`), but the `/tree` command insists on finding one — blocks a core workflow.

## Key PR Progress

1. **[#6520 — Include file context in edit tool not-found error](https://github.com/earendil-works/pi/pull/6520)**  
   Improves error messaging when `oldText` isn't found by showing surrounding file content, making debugging edit failures much easier.

2. **[#6518 — Expose scoped models to extensions](https://github.com/earendil-works/pi/pull/6518)**  
   Adds `pi.getScopedModels()` to the extension API, letting extensions align delegated work with the user's model cycle.

3. **[#6514 — Erase entire turn on abort/error, not just assistant message](https://github.com/earendil-works/pi/pull/6514)**  
   When a response is aborted or errors, the preceding user message is now also dropped, preventing malformed conversation sequences.

4. **[#6506 — Configurable auto-update on new session](https://github.com/earendil-works/pi/pull/6506)**  
   Adds `autoUpdateOnNewSession` setting (default: off) for power users who always want the latest tools when starting a session.

5. **[#6503 — bump bun to 1.3.14](https://github.com/earendil-works/pi/pull/6503)**  
   Bumps Bun runtime to support `BUN_CONFIG_HTTP_IDLE_TIMEOUT`, directly addressing the `httpIdleTimeoutMs` regression (#6476).

6. **[#6501 — Support embedded library hosts (theme init + extension runtime)](https://github.com/earendil-works/pi/pull/6501)**  
   Fixes two embedded library bugs: lazy theme initialization and shared extension runtime poisoning across sessions.

7. **[#6496 — Support OpenRouter session affinity](https://github.com/earendil-works/pi/pull/6496)**  
   Fixes #6366 by correctly sending `x-session-id` header and `session_id` in JSON body for OpenRouter, enabling prompt caching.

8. **[#6489 — Add ultra thinking level](https://github.com/earendil-works/pi/pull/6489)**  
   Adds `ultra` thinking level across the entire stack — types, selector, settings, CLI, SDR — mapping OpenAI Codex `ultra` to `reasoning.effort`.

9. **[#6481 — Fix OpenRouter models: use context length from top provider](https://github.com/earendil-works/pi/pull/6481)**  
   Fixes model context length calculations for OpenRouter by using the top provider's values instead of wrong aggregated data.

10. **[#6341 — Support constrained sampling](https://github.com/earendil-works/pi/pull/6341)**  
    Adds opt-in `constrainedSampling` config for tools, enabling provider-side JSON-schema constrained generation — important for structured output reliability.

## Feature Request Trends

- **Model Catalog Currency**: 5+ issues requesting addition of GPT-5.6 variants, DeepSeek V4 thinking fixes, and Fable-5 levels — the community expects rapid model catalog updates.
- **Thinking Level Parity**: Strong demand (👍17 on #6097) for `max` and `ultra` thinking levels to match OpenAI/Anthropic's latest offerings.
- **Extension API Expansion**: Multiple requests for richer extension APIs: `scopedModels`, `setUsage`, `attachments` field, and multi-agent foreground switching.
- **Embedded Library Support**: Growing interest in using Pi as a library (not just TUI), with fixes for theme initialization and session lifecycle.

## Developer Pain Points

- **Timeouts and Retries**: Unbounded retry backoff (#6303) and broken `httpIdleTimeoutMs` (#6476) cause unpredictable failures for self-hosted users.
- **Compaction Configuration Leaks**: Disabled compaction (#6472) and session ID omissions (#6477) show configuration settings aren't consistently respected.
- **Provider Inconsistency**: Ambient-credential providers (#6324), OpenRouter session IDs (#6366), and Bedrock stop reasons (#6485) all expose edge cases in provider abstraction.
- **Windows TUI Issues**: The keystroke redrawing bug (#6300) remains open with no assigned fix, affecting Windows developers' daily workflow.
- **Extension Reliability**: Custom keybindings not applying until `/reload` (#6459) and stale import files after reload (#6000) undermine extension development iteration speed.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-11

## Today's Highlights

The team shipped **v0.19.9** with a critical fix for repeated subagent tool-call loops, while the daemon multi-workspace initiative (#6378) reached its fourth phase with workspace-qualified ACP transport (#6621). A flurry of **12 new issues** and **15+ PRs** landed today, heavily focused on Web Shell UX improvements and daemon session recovery, though three release attempts for v0.19.9 failed due to Docker integration tests.

---

## Releases

**v0.19.8-nightly.20260711.0ef3a76bd** — Overnight build  
- fix(core): keep YOLO mode when the model calls `enter_plan_mode` (PR #6630)  
- feat(cli): forward `ask_user` interaction  

**v0.19.9** — Stable release  
- **Stop repeated subagent tool-call loops** (PR #6543) — prevents infinite agent recursion  
- fix(session): detect and mark broken history chains instead of silently truncating  

> ⚠️ Three automated releases (v0.19.9) all failed on `integration_docker` job. Issue #6690 tracks the failure.

---

## Hot Issues (10 noteworthy)

### #6378 — RFC: Support multiple workspaces in one `qwen serve` daemon  
[🔗](https://github.com/QwenLM/qwen-code/issues/6378)  
**20 comments** ⭐ Most-commented active RFC this week  
The proposal to let a single daemon host `1 daemon = N workspaces × M sessions`. Implementation is now in Phase 4 (ACP transport). Community positive; concerns about migration path for existing single-workspace users.

### #5975 — API Error: No stream activity for 120000ms after 19 chunks  
[🔗](https://github.com/QwenLM/qwen-code/issues/5975)  
**10 comments** · 👍 1  
Upgrading to v0.19.3 caused frequent stream timeouts. The agent stops producing output silently, then errors after 2 min. Likely a model/TUI timing interaction; still needs triage.

### #6700 — feat(web-shell): add workspace selector button with add/switch dropdown  
[🔗](https://github.com/QwenLM/qwen-code/issues/6700)  
**2 comments**  
New feature request for a workspace dropdown in Web Shell composer toolbar. Part of a broader UX push alongside #6699, #6701, #6702 — all from `pomelo-nwu`.

### #6701 — feat(web-shell): add start-in context selector (local / worktree)  
[🔗](https://github.com/QwenLM/qwen-code/issues/6701)  
**1 comment**  
Proposes letting users choose "work locally" vs. "worktree" for new sessions at the composer toolbar — aligns with Codex desktop behavior.

### #6654 — API Error: tool_use blocks missing corresponding tool_result  
[🔗](https://github.com/QwenLM/qwen-code/issues/6654)  
**4 comments**  
Model emitted `tool_use` blocks without corresponding `tool_result` in the next message. Breaks API contract with Anthropic/Claude. Possibly a threading bug in session management.

### #6595 — qwen3.7-max may leak `<analysis>/<summary>` tags in assistant responses  
[🔗](https://github.com/QwenLM/qwen-code/issues/6595)  
**3 comments**  
Internal protocol tags leaking into user-facing output. Breaks follow-up actions and pollutes conversation. PR #6683 provides follow-up retry logic.

### #6614 — Glob tool can OOM on large path before output truncation  
[🔗](https://github.com/QwenLM/qwen-code/issues/6614) · P1  
**2 comments**  
`glob` with `**` over a large repo causes Node heap OOM. The file enumeration happens before any output truncation. Needs memory-bounded iteration.

### #6590 — Ctrl+V paste image fails on macOS standalone install  
[🔗](https://github.com/QwenLM/qwen-code/issues/6590)  
**4 comments**  
macOS clipboard image support missing from standalone package — `@teddyzhu/clipboard` not bundled. No error message; silently fails. Packaging fix needed.

### #6639 — MCP HTTP servers show offline when gateway returns 401  
[🔗](https://github.com/QwenLM/qwen-code/issues/6639)  
**3 comments**  
MCP servers with `httpUrl` transport that return 401 do not trigger OAuth recovery. All affected servers show "offline" with no reconnect path.

### #6694 — channels: suppress nested subagent output in DingTalk replies  
[🔗](https://github.com/QwenLM/qwen-code/issues/6694)  
**2 comments**  
DingTalk channel leaking subagent intermediate reports (including local file paths) into chat. Information disclosure risk; related to #6615.

---

## Key PR Progress (10 important)

### #6621 ✅ feat(cli): workspace-qualified ACP transport (daemon multi-workspace phase 4)  
[🔗](https://github.com/QwenLM/qwen-code/pull/6621)  
Merged. Adds per-workspace ACP endpoints (`/workspaces/:workspace/acp`). Milestone toward #6378. Enables non-primary workspaces to have full session control.

### #6638 🔄 feat(cli): workspace-qualified extensions REST  
[🔗](https://github.com/QwenLM/qwen-code/pull/6638)  
Open. Extends #6621 to extension management — each workspace gets its own CRUD API for extensions. Necessary for multi-tenant daemon.

### #6683 🔄 fix(core): retry leaked protocol turns in recovery paths  
[🔗](https://github.com/QwenLM/qwen-code/pull/6683)  
Open. Follow-up to #6595 / #6603. Now discards and retries assistant turns that contain `<analysis>/<summary>` tags even when a tool call is present. Prevents state corruption.

### #6681 🔄 fix(core): make goal evaluation lifecycle-safe  
[🔗](https://github.com/QwenLM/qwen-code/pull/6681)  
Open. `/goal` evaluation now waits for background agents/shell jobs/workflows. Separates valid verdicts from evaluator failures. Prevents premature termination.

### #6697 🔄 feat(web-shell): resume stopped sessions on load  
[🔗](https://github.com/QwenLM/qwen-code/pull/6697)  
Open. Web Shell checks ACP session state after load and auto-resumes interrupted turns. Implements the design from #6695.

### #6680 🔄 feat(channels): recover daemon sessions after restarts  
[🔗](https://github.com/QwenLM/qwen-code/pull/6680)  
Open. Preserves DingTalk/other channel conversations across daemon restarts. Separates channel route metadata from live binding.

### #6678 🔄 feat(cli): show full reasoning content when expanding thinking blocks  
[🔗](https://github.com/QwenLM/qwen-code/pull/6678)  
Open. Restores pre-collapsible behavior where `Alt+T` shows full reasoning via MarkdownDisplay instead of 4-line tail preview. UX improvement for streaming.

### #6518 🔄 fix(cli): add Approve button to /mcp server detail  
[🔗](https://github.com/QwenLM/qwen-code/pull/6518)  
Open. Users who missed MCP startup dialog had no way to approve servers later — only Disable was available. Now shows Approve for `awaitingApproval` servers.

### #6682 ✅ fix(cli): run periodic memory-pressure check in interactive UI  
[🔗](https://github.com/QwenLM/qwen-code/pull/6682)  
Merged. Adds periodic memory-pressure monitoring to TUI + final check on quit. Previously only ran after tool calls — long model-only conversations could OOM silently.

### #6579 🔄 fix(cli): keep model switches session-scoped  
[🔗](https://github.com/QwenLM/qwen-code/pull/6579)  
Open. `/model <id>` now updates only the active session; persisting as default requires explicit `/model --default`. Prevents accidental global model changes.

---

## Feature Request Trends

**1. Daemon Multi-Workspace (#6378 family)** — The dominant theme. Phases 1–4 (ACP transport, extensions REST, session organization mutations) are landing this week. Requests for workspace selector UI (#6700) and session organization write operations (#6646) show this is moving from infrastructure to UX.

**2. Web Shell Composer Redesign** — New requests from `pomelo-nwu` (#6699, #6700, #6701, #6702) propose a toolbar with workspace selector, execution context (local/worktree), git branch display, and session created callback (#6703). Aligns with competitive parity against Codex desktop.

**3. Session Continuation & Recovery** — Multiple requests (#6695, #6697, #6680) for auto-resuming interrupted sessions after daemon restart or load. Critical for reliability in long-running workspaces.

**4. MCP & OAuth UX** — #6639 (HTTP 401 recovery), #6518 (Approve button), and #6647 (SDK `ask_user` support) point to improving MCP server lifecycle management and auth flows.

**5. Goal Conditions & Hooks** — #6663 (remove 4,000-char limit on `/goal`) and #5847 (runtime context injection for system reminders) suggest growing interest in customizable evaluation pipelines.

---

## Developer Pain Points

**1. Docker Integration Test Flakiness** — Three consecutive release attempts for v0.19.9 failed on `integration_docker` (#6690, #6687, #6684). The fix in #6692 (network binding for Docker sandbox) suggests loopback address resolution issues.

**2. API Stream Timeouts (#5975)** — The #2 most-commented active issue. Users on v0.19.3+ experience frequent 120-second stream timeouts when model output stalls. No fix yet; reproduces inconsistently.

**3. Package & Bundling Quality** — #6590 (macOS clipboard missing native module) and #6600 (`--debug` claims to create log file but doesn't) are packaging and reliability regressions in v0.19.8. Low severity but high annoyance.

**4. OOM Under Large Repos** — #6614 (glob OOM on `**`) is P1 severity. Node heap exhaustion during file scanning with no truncation guard. Affects users working in monorepos.

**5. Model Output Leakage** — #6595 (qwen3.7-max leaking `<analysis>` tags) and #6654 (missing `tool_result` blocks) are model-specific protocol violations. Suggests need for stricter output validation.

**6. MCP Auth Dead Ends** — #6639 (401 → no OAuth recovery), #6518 (no Approve path for missed MCP dialogs). Users get stuck with offline servers and no remediation path.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-11

## Today's Highlights

The v0.8.68 release is in its final bugfix and documentation phase, with three stopship PRs merged today resolving TUI state truthfulness, workflow dispatch without root model, and Android QA integration. A new release-blocker issue emerged around empty provider headers being misidentified as configured, while the community contribution from `bistack` added RustSec/cargo-deny CI infrastructure and patched four dependency vulnerabilities.

## Releases

No new releases published in the last 24 hours. The prior v0.8.68 candidate is in active stabilization.

## Hot Issues

1. **[#4092 — v0.8.68 execution board: lane order, dependencies, and agent protocol (canonical packet)](https://github.com/Hmbown/CodeWhale/issues/4092)** [CLOSED]  
   The canonical milestone tracker. All open issues now carry exactly one `lane-*` label, enabling queryable lane workflows. High engagement with 60 comments over a 3-day lifecycle.

2. **[#4032 — Codewhale not following the constitution](https://github.com/Hmbown/CodeWhale/issues/4032)** [OPEN]  
   User reports that the agent ignores shared scripts and writes its own temporary versions, even when challenged. Points to a core enforcement gap in the agent constitution system. 33 comments indicate widespread resonance.

3. **[#4178 — v0.8.68: Stopship workflow as fleet-backed lane (dogfood #4090/#4093/#4094)](https://github.com/Hmbown/CodeWhale/issues/4178)** [OPEN]  
   End-to-end dogfood of the Fleet/Workflow/Lane/Runtime model against active stopship issues. Concrete reference lane for the orchestration architecture.

4. **[#4175 — v0.8.68 architecture: Fleet / Workflow / Lane / Runtime product model (canonical tracker)](https://github.com/Hmbown/CodeWhale/issues/4175)** [OPEN]  
   The vocabulary-defining issue that prevents concept collapse across the four orchestration layers. Links all implementation phases.

5. **[#4095 — v0.8.68 UX: default TUI presentation is too busy; compact mode should be standard](https://github.com/Hmbown/CodeWhale/issues/4095)** [CLOSED]  
   Treated as a UX bug, not a feature. The default view exposes excessive low-level activity; compact mode is being promoted to default. 9 comments, resolved with today's PRs.

6. **[#4038 — v0.8.68 Workflow: product-readiness tracker](https://github.com/Hmbown/CodeWhale/issues/4038)** [CLOSED]  
   Umbrella for making Workflow product-ready: stable model-facing tool, TUI/CLI run path, compact view, high-fan-out resource story. Spawned multiple sub-issues.

7. **[#2934 — feat: sidebar sessions panel with auto-resume and session history browsing](https://github.com/Hmbown/CodeWhale/issues/2934)** [OPEN]  
   Long-standing feature request from `cy2311` (since June 9). Users want persistent session sidebar over `Ctrl+R` popup; 5 comments, targeted for v0.8.69.

8. **[#4329 — Anthropic API error: `tool_use` blocks missing `tool_result`](https://github.com/Hmbown/CodeWhale/issues/4329)** [OPEN]  
   Fresh bug from `lixin34` — tool use tracking mismatch causing 400 errors. Needs investigation into sub-agent response handling.

9. **[#4333 — Configured picker treats empty provider headers as configured](https://github.com/Hmbown/CodeWhale/issues/4333)** [OPEN] [release-blocker]  
   `[providers.anthropic.http_headers]` with empty table is misidentified as configured. Filed today, marked as release-blocker for v0.8.68.

10. **[#3976 — v0.8.68 Memory: seed project-scoped recall ahead of full backend](https://github.com/Hmbown/CodeWhale/issues/3976)** [OPEN]  
    Lightweight per-project memory surface before external-memory backend lands. 3 comments, pragmatic intermediate step.

## Key PR Progress

1. **[#4332 — fix: make v0.8.68 TUI state and routing truthful](https://github.com/Hmbown/CodeWhale/pull/4332)** [CLOSED]  
   Stopship repair batch: blank fields/maps no longer count as configured, provider identity preserved across session restore, dropped stale replacement branch.

2. **[#4336 — feat(workflow): dispatch durable lanes without root model](https://github.com/Hmbown/CodeWhale/pull/4336)** [CLOSED]  
   Direct `codewhale workflow run` through host-owned Workflow tool, preserving profile, approval, sandbox, MCP, and keyring precedence.

3. **[#4337 — fix(release): integrate v0.8.68 TUI and Android QA](https://github.com/Hmbown/CodeWhale/pull/4337)** [CLOSED]  
   Final integration: cancelled-shell transcript state, PTY regression coverage, Android Termux image authentication before updater replacement.

4. **[#4331 — docs(release): align v0.8.68 mode FAQ and workflow commands](https://github.com/Hmbown/CodeWhale/pull/4331)** [CLOSED]  
   FAQ alignment with Plan/Act/Operate contract, replaced nonexistent commands with real `lane status`/`lane logs`, added `--fleet` argument.

5. **[#4328 — fix: upgrade dependencies to resolve cargo-audit vulnerabilities](https://github.com/Hmbown/CodeWhale/pull/4328)** [CLOSED]  
   Four CVEs fixed: crossbeam-epoch, pdf-extract/lopdf, ttf-parser. Community contribution from `bistack`.

6. **[#4272 — ci: add RustSec security audit and cargo-deny checks](https://github.com/Hmbown/CodeWhale/pull/4272)** [CLOSED]  
   Non-blocking `cargo-audit` scan, `cargo-deny` for advisories/bans/licenses, audit.toml configuration. `bistack`'s CI infrastructure work.

7. **[#4330 — fix: update cargo-deny advisory ignore list](https://github.com/Hmbown/CodeWhale/pull/4330)** [CLOSED]  
   Removed fixed lopdf advisory, added ignores for `derivative` and `fxhash` (transitive via starlark). `bistack`.

8. **[#3969 — Add per-sub-agent provider routing](https://github.com/Hmbown/CodeWhale/pull/3969)** [CLOSED]  
   Held from `heyparth1` — targets pre-#4093 spawn path. Recommended rebase through fleet profile fields per maintainer triage.

9. **[#4343-4340 — Dependabot batch: colored 3.1.1, rmcp 2.2.0, lru 0.18.1, ignore 0.4.28](https://github.com/Hmbown/CodeWhale/pull/4343)** [OPEN]  
   Routine dependency bumps including MCP SDK major version update (rmcp 1.8→2.2). Four open PRs.

10. **[#4339 — chore(deps): bump jsonschema from 0.46.4 to 0.47.0](https://github.com/Hmbown/CodeWhale/pull/4339)** [OPEN]  
    JSON schema validation library upgrade. Minor version bump, likely non-breaking.

## Feature Request Trends

The dominant architectural theme is the **Fleet/Workflow/Lane/Runtime** product model, which absorbs most v0.8.68 feature work. User-facing requests cluster around:

- **Session management persistence** (#2934, #4334): Sidebar session panels, auto-resume, exact custom provider identity across restores
- **TUI UX simplification** (#4095, #4038): Compact views, less chaotic default presentation, unified activity UI
- **Project-scoped memory** (#3976): Lightweight per-project recall as bridge to full external-memory backend
- **Model/provider routing** (#2984, #3969): Per-sub-agent provider routing, OpenAI OAuth route verification, provider-aware pricing (#4335)

## Developer Pain Points

1. **Constitutional enforcement gaps** (#4032): The agent ignores user-provided scripts and writes its own, undermining collaborative workflows. Community wants hard constitution constraints.
2. **TUI information overload** (#4095): Default view exposes excessive low-level activity, making the app feel chaotic. Consensus around compact-as-default.
3. **Provider configuration ambiguity** (#4333, #4334): Empty headers treated as configured, custom provider identity lost on session restore. Two release-blockers in one day.
4. **Tool use protocol errors** (#4329): Missing `tool_result` blocks causing API 400s — points to tracking bugs in sub-agent response assembly.
5. **Dependency churn** (PRs #4328, #4330, #4343-4339): Four RustSec advisories patched in one PR, plus eight dependency PRs open. Community contributors stepping up on maintenance.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*