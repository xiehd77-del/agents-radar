# AI CLI Tools Community Digest 2026-07-27

> Generated: 2026-07-27 03:21 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem
**Date:** 2026-07-27

---

## 1. Ecosystem Overview

The AI CLI tool landscape is experiencing simultaneous maturation and fragmentation. The six major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI, and Kimi Code—are converging on shared architectural concerns (MCP protocol support, sandbox security, agent observability) while diverging in platform maturity and community scale. A clear pattern emerges: **trust and reliability** are the dominant cross-cutting themes, with sandbox failures, silent data loss, and authentication regressions appearing across every repository. Windows and ARM64 support remains a persistent weakness for most tools, while CLI-TUI quality and streaming performance are rapidly improving in the Rust-based implementations (DeepSeek TUI, Pi). The ecosystem is also seeing increased **security incident velocity**, with three P1 vulnerabilities reported and fixed in Qwen Code within a single day, signaling that the rapid-release cadence of these tools is outpacing security hardening in some cases.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Status | Notable Signal |
|---|---|---|---|---|
| **Claude Code** | 10 hot issues | 10 PRs | Active issues, no release today | 3 sandbox reliability reports (NEW) |
| **OpenAI Codex** | 10 hot issues | 10 PRs | No new release | 6 MCP OAuth PRs merged today |
| **Gemini CLI** | 10 hot issues | 10 PRs | Nightly v0.54.0 | Bulk 75-dependency upgrade |
| **GitHub Copilot CLI** | 10 hot issues | 0 PRs | v1.0.75 (no new release) | Zombie processes fixed; `view` tool regression |
| **OpenCode** | 10 hot issues | 10 PRs | **v1.18.6 shipped today** | Branch-specific cache fix; model-gated auto-approve |
| **Pi** | 10 hot issues | 10 PRs | v0.82.1 (no new release) | 32 issues updated; TUI perf fix merged |
| **Qwen Code** | 10 hot issues | 10 PRs | **Nightly v0.21.0** | 3 P1 security vulnerabilities fixed |
| **DeepSeek TUI** | 10 hot issues | 10 PRs | No new release | ~25 PRs merged; O(N²) streaming fix |
| **Kimi Code** | 1 issue | 0 PRs | No new release | **Quietest day**; only image paste bug |

**Key observations:**
- **DeepSeek TUI** had the highest PR throughput today (~25 merged), despite being a smaller project.
- **OpenCode** is the only tool shipping a production release today (v1.18.6).
- **Kimi Code** is nearly dormant—only 1 issue updated in 24h.
- **Qwen Code** had the highest severity day: 3 P1 security issues closed rapidly.

---

## 3. Shared Feature Directions

| Requirement | Tools requesting | Specific needs |
|---|---|---|
| **MCP OAuth / Authentication reliability** | Claude Code, Codex, Copilot CLI, Qwen Code | Token refresh, issuer validation, headless auth, serialized refresh transactions |
| **Sandbox/safety transparency** | Claude Code, Codex, Gemini CLI, Pi | Silent hook failures, sandbox deleting git metadata, missing guardrail logging |
| **Agent lifecycle observability** | Claude Code, Gemini CLI, DeepSeek TUI, Pi | Subagent lying about completion (Gemini #22323); promote subagent to session (Claude #80798); subagent execution state visibility (DeepSeek #3983) |
| **Cross-session state bridging** | Claude Code, Codex, DeepSeek TUI, Pi | Read Desktop history from CLI (Claude #81528); sidebar sessions panel (DeepSeek #2934); session compaction reliability (Pi #7154, #7150) |
| **Linux desktop support** | Codex (#11023, 852👍), Copilot CLI (#4053 NFS hangs) | Native Linux app, no Electron overhead, NFS/GPFS compatibility |
| **Windows / ARM64 stability** | Claude Code, Codex, Copilot CLI, Pi, Gemini CLI | BSOD via Wof.sys (Claude #32870); GPU crashes (Codex #34133); crash-on-exit (Copilot #4217); WSL path mishandling (Pi #7064) |
| **Hook/automation surface expansion** | Claude Code, Codex, Gemini CLI, Pi | Claude Code hook parity (Codex #21753); pre/post command hooks; durable compaction lifecycle hooks (Pi #7127) |
| **Localization / i18n** | Claude Code (#69078), DeepSeek TUI (3 new locale PRs), Pi | Russian, Simplified Chinese, French, German, Indonesian, Korean, Spanish |
| **Prompt caching optimization** | Copilot CLI (#4256), OpenCode (#39008), DeepSeek (PR #4902) | `cache_control` breakpoints for Anthropic; per-turn metadata busting cacheable prefix |
| **Structured output / JSON schema** | OpenCode (#15226), Pi (#7135) | `tool_choice: 'required'` compatibility with reasoning models; constraint-based generation |

---

## 4. Differentiation Analysis

### Feature Focus
| Tool | Primary differentiation | Target user |
|---|---|---|
| **Claude Code** | Sandbox security, hooks ecosystem, agent orchestration | Enterprise developers, security-conscious teams |
| **OpenAI Codex** | MCP protocol depth, OAuth serialization, desktop app | Power users, multi-model workflow orchestrators |
| **Gemini CLI** | Subagent architecture, bash affinity, Google Cloud integration | Google Cloud developers, automation-heavy workflows |
| **GitHub Copilot CLI** | GitHub ecosystem integration, BYOK providers, extensibility | GitHub-centric developers, CI/CD users |
| **OpenCode** | TUI quality, provider flexibility, model-gated approvals | Multimodal power users, multi-provider developers |
| **Pi** | Lightweight Rust TUI, extension runtime, cross-agent conventions | Performance-sensitive users, extensibility explorers |
| **Qwen Code** | Security-first posture, web shell, Goal v3 multi-agent | Chinese market, enterprise security, multi-agent orchestration |
| **DeepSeek TUI** | Streaming performance, DeepSeek cost optimization, localization | DeepSeek users, cost-conscious developers, localization-focused |
| **Kimi Code** | Multimodal chat, web-first | Lightweight chat users, image-in-prompt workflows |

### Technical Approach
- **Claude Code** and **Codex** are the most enterprise-focused, with extensive sandboxing, hooks, and OAuth flows.
- **DeepSeek TUI** and **Pi** are the most performance-optimized, using Rust (DeepSeek) and Node.js (Pi) with aggressive caching and streaming improvements.
- **Gemini CLI** leans into Google's ecosystem with tight cloud integration and subagent orchestration.
- **Qwen Code** is the most security-incident-aware, with rapid P1 triage and a growing security posture.
- **Kimi Code** remains the outlier: nearly inactive, single-provider focus, minimal community engagement.

### Platform Support
- **Windows**: Claude Code (BSOD, ARM64 gaps), Codex (GPU crashes, Computer Use missing), Copilot CLI (crash-on-exit), Pi (WSL path issues) — **all weak**.
- **Linux**: Codex (#11023, 852👍 demand for native app), Copilot CLI (NFS hangs, zombie processes) — **Codex has the most vocal Linux demand**.
- **macOS**: Codex (kernel panics #16866), OpenCode (Golden Gate beta #39036), DeepSeek TUI (iTerm2 gaps #2494) — **fragmented but functional**.

---

## 5. Community Momentum & Maturity

| Tool | Momentum | Maturity Indicators |
|---|---|---|
| **Claude Code** | **High** — 166👍 top issue, 88 comments, 3 new sandbox reports today | Most feature-rich sandbox; largest issue tracker; enterprise-grade hooks |
| **OpenAI Codex** | **High** — 852👍 top issue (Linux app); 6 PRs merged today | Deep MCP OAuth investment; large Windows stability debt |
| **Gemini CLI** | **Medium** — 75 deps upgraded today; active subagent bugs | Stable but slower iteration; Google ecosystem lock-in |
| **GitHub Copilot CLI** | **Medium** — Zombie process fix, but 0 PRs today | Mature CLI with GitHub ties; regressions in recent releases |
| **OpenCode** | **High** — v1.18.6 shipped; 10+ PRs merged today | Fast shipping; strong TUI and provider flexibility |
| **Pi** | **High** — 32 issues updated; 10 PRs closed today | Rapidly maturing; extension runtime gaining traction |
| **Qwen Code** | **High** — Nightly release; 3 P1 security fixes | Security-focused; Chinese market leader; nightly cadence |
| **DeepSeek TUI** | **Very High** — ~25 PRs merged today; O(N²) fix; localization surge | Most PRs per day; vibrant contributor community; perf-focused |
| **Kimi Code** | **Low** — 1 issue, 0 PRs, 0 releases | Near-dormant; single-provider; minimal community engagement |

**Maturity assessment:**
- **Established leaders**: Claude Code, OpenAI Codex (deep feature breadth, largest user bases, but also largest bug backlogs)
- **Rapidly maturing**: OpenCode, Pi, DeepSeek TUI (high PR velocity, fast bug fixes, growing feature sets)
- **Niche stable**: Gemini CLI, GitHub Copilot CLI (stable but slower iteration, ecosystem-dependent)
- **Emerging/questionable**: Qwen Code (high velocity but security incidents), Kimi Code (near-dormant)

---

## 6. Trend Signals

### Industry Trends from Community Feedback

1. **MCP protocol maturity is driving OAuth complexity** — The serialized OAuth refresh stacks merged across Codex, Claude, and Copilot indicate that multi-server MCP ecosystems are hitting real-world authentication bottlenecks. Expect MCP auth to become a standardized middleware layer.

2. **Sandbox reliability is the new security frontier** — Three tools (Claude Code, Gemini CLI, Qwen Code) had sandbox trust issues reported today. As AI tools gain file system and network access, silent sandbox failures become business-critical risks. The trend is toward **fail-closed defaults** and **auditable sandbox logs**.

3. **Agent observability is displacing raw tool capability** — The most-requested features across all tools are not "more tools" but "better visibility into what agents are doing." Subagent lying about completion, context degradation, hidden tool calls—users want **agent introspection** over agent power.

4. **Cross-agent conventions are emerging** — Pi's `AI_AGENT=pi` PR (#7131) converging on the Claude Code/GitHub CLI/Vercel convention signals that the ecosystem is coalescing around shared environment variables and attribution standards. This is early but significant for tool interoperability.

5. **Streaming performance is a competitive moat** — DeepSeek TUI's O(N²) fix, Pi's `Intl.Segmenter` caching, and Codex's SQLite WAL issues all point to streaming as the critical path. Tools that optimize streaming latency and cost (via prompt caching) will win heavy users.

6. **Localization is accelerating as tooling goes global** — DeepSeek TUI's 3 new locale PRs, Claude Code's Russian request, and Pi's growing i18n interest suggest that AI CLI tools are expanding beyond English-speaking markets faster than web UIs historically did.

### Reference Value for Developers

- **If you need enterprise sandboxing**: Claude Code is the most mature, but monitor its silent failure issues (#81458, #81526).
- **If you need cost optimization**: DeepSeek TUI (prompt caching fixes) and Pi (lightweight Rust) are leading on cost-aware streaming.
- **If you need Windows support**: **Warning** — every tool has Windows issues. Copilot CLI is the least broken, but all have known crashes.
- **If you need multi-model flexibility**: OpenCode (v1.18.6) and Codex (MCP OAuth stack) are the most provider-agnostic.
- **If you need multi-agent orchestration**: Claude Code (subagent promote/demote request) and Gemini CLI (Goal v3 await) are investing here.
- **If you need a vibrant contributor community**: DeepSeek TUI (~25 PRs/day) and OpenCode (10+ PRs/day) have the fastest iteration cycles.
- **If you need security-first**: Qwen Code (rapid P1 triage) and Claude Code (sandbox focus) are the most security-aware, though Qwen's vulnerabilities suggest a trade-off between velocity and hardening.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the **anthropics/skills** repository, based on data from 2026-07-27.

---

## 1. Top Skills Ranking

The following Skills have generated the most discussion and community attention via Pull Requests.

- **#1298 — `fix(skill-creator): run_eval.py always reports 0% recall`** (Open, 0 👍)
  - **Functionality:** A critical bug-fix PR targeting `run_eval.py`, the core evaluation script for the Skill optimization loop. It addresses a systemic issue where the script reports `recall=0%` for every skill description, effectively rendering the optimization loop useless.
  - **Discussion Highlights:** The PR is a direct response to Issue #556, which has 10+ independent reproductions. It proposes installing the eval artifact as a real skill, fixing Windows stream reading, and correcting trigger detection. It is the most actively commented PR in the repository.
  - **Status:** Open. This is the highest-priority fix in the ecosystem.
  - **Link:** [GitHub PR #1298](https://github.com/anthropics/skills/pull/1298)

- **#514 — `Add document-typography skill: typographic quality control`** (Open, 0 👍)
  - **Functionality:** A skill that prevents common typographic errors in AI-generated documents, such as orphan word wrap, widow paragraphs, and numbering misalignment.
  - **Discussion Highlights:** The community recognizes this solves a universal pain point for Claude-generated documents. The discussion focuses on edge cases for different document formats (PDF, DOCX) and the skill’s trigger specificity.
  - **Status:** Open.
  - **Link:** [GitHub PR #514](https://github.com/anthropics/skills/pull/514)

- **#538 — `fix(pdf): correct case-sensitive file references in SKILL.md`** (Open, 0 👍)
  - **Functionality:** A corrective PR fixing 8 case-sensitivity mismatches in the PDF skill’s `SKILL.md` file, preventing broken links on case-sensitive file systems (Linux/macOS).
  - **Discussion Highlights:** A straightforward but necessary fix for cross-platform compatibility. The community has noted this as a model for other skills needing similar file-path audits.
  - **Status:** Open.
  - **Link:** [GitHub PR #538](https://github.com/anthropics/skills/pull/538)

- **#486 — `Add ODT skill — OpenDocument text creation and template filling`** (Open, 0 👍)
  - **Functionality:** A new skill for creating, filling, reading, and converting OpenDocument Format files (.odt, .ods). It covers the full workflow for LibreOffice/ISO standard document handling.
  - **Discussion Highlights:** Discussion revolves around template filling logic and handling of complex ODF structures. The community views this as a natural complement to the existing DOCX and PDF skills.
  - **Status:** Open.
  - **Link:** [GitHub PR #486](https://github.com/anthropics/skills/pull/486)

- **#210 — `Improve frontend-design skill clarity and actionability`** (Open, 0 👍)
  - **Functionality:** A revision of the `frontend-design` skill to make instructions more actionable and specific, ensuring Claude can follow them within a single conversation context.
  - **Discussion Highlights:** The PR sparked debate on the balance between brevity and detail in skill descriptions. Community members contributed specific examples of vague instructions that were improved.
  - **Status:** Open.
  - **Link:** [GitHub PR #210](https://github.com/anthropics/skills/pull/210)

- **#1367 — `feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate`** (Open, 0 👍)
  - **Functionality:** A meta-skill that audits AI output before delivery. It performs mechanical file existence verification, followed by a four-dimension reasoning quality assessment in priority order of damage severity.
  - **Discussion Highlights:** This is one of the most recent high-attention PRs. Discussion focuses on the theoretical framework of "reasoning quality gates" and how to prevent false positives from the audit itself.
  - **Status:** Open.
  - **Link:** [GitHub PR #1367](https://github.com/anthropics/skills/pull/1367)

---

## 2. Community Demand Trends

From the most active Issues, the community is demanding skills and platform features in the following directions:

- **Skill-Creator Reliability & Cross-Platform Support (Critical)**
  - Issues #556, #1061, #1169, and #1175 all report that the `run_eval.py` script is broken on Windows, yields `0% recall` universally, or raises security concerns about data handling. The community’s highest demand is for a **reliable, cross-platform skill evaluation pipeline**.

- **Security & Trust Boundary Management**
  - Issue #492 (43 comments) is the most commented issue in the repo. It calls out the security risk of community skills being hosted under the `anthropic/` namespace, which creates a false sense of trust. The demand is for **official namespace governance and security auditing for community skills**.

- **Org-Wide Skill Sharing & Distribution**
  - Issue #228 (16 comments, 8 👍) requests an **organizational skill library** or direct sharing links within Claude.ai, eliminating the current manual file-transfer workflow.

- **Deduplication & Plugin Architecture**
  - Issue #189 (6 comments, 9 👍) highlights that `document-skills` and `example-skills` plugins install identical content. The community is calling for **a cleaner plugin architecture and deduplication logic**.

- **Reasoning Quality & Agent Governance**
  - Issue #412 (6 comments) and Issue #1385 (3 comments) both advance proposals for skills focused on **agent safety, governance patterns, and reasoning quality gates**—indicating a shift toward trust and reliability in agent outputs.

---

## 3. High-Potential Pending Skills

These PRs are still open with active commentary and are likely to land in the near future:

- **#99 — `Add pyxel skill for retro game development`**
  - A skill integrating Pyxel, a retro game engine, with an MCP server for iterative development. High community interest for creative coding.
  - **Link:** [GitHub PR #525](https://github.com/anthropics/skills/pull/525)

- **#83 — `Add skill-quality-analyzer and skill-security-analyzer to marketplace`**
  - Meta-skills that evaluate other skills across structure, documentation, and security dimensions. A direct response to the governance concerns raised in Issue #492.
  - **Link:** [GitHub PR #83](https://github.com/anthropics/skills/pull/83)

- **#723 — `Add testing-patterns skill`**
  - A comprehensive skill covering unit testing, React component testing, and the Testing Trophy model. Expected to merge soon as it aligns with the community's testing focus.
  - **Link:** [GitHub PR #723](https://github.com/anthropics/skills/pull/723)

- **#1302 — `Add color-expert skill`**
  - A self-contained skill for color knowledge (ISCC-NBS, Munsell, OKLCH, etc.). Niche but highly polished; likely to be accepted as a reference skill.
  - **Link:** [GitHub PR #1302](https://github.com/anthropics/skills/pull/1302)

- **#1367 — `Add self-audit skill`**
  - Described above. This is the most recent feature PR with strong engagement and a well-articulated framework.
  - **Link:** [GitHub PR #1367](https://github.com/anthropics/skills/pull/1367)

---

## 4. Skills Ecosystem Insight

**The community’s most concentrated demand is for repairing and hardening the `skill-creator` evaluation pipeline (cross-platform compatibility, reliable trigger detection, and realistic recall metrics), which is currently blocking the entire skill optimization loop and preventing contributors from effectively developing new Skills.**

---

# Claude Code Community Digest — 2026-07-27

## Today's Highlights
A wave of sandbox reliability and safety concerns dominates today's digest, with three critical reports surfacing within 24 hours: silent hook failures (6,865 skipped guardrails), sandbox deletion of git metadata mid-session, and an IPv6 firewall bypass in the devcontainer. The long-running Fable 5 advisor availability bug (#73365) remains the most-commented issue with 166 reactions, while a new behavioral failure report from a 24-hour agentic session raises questions about long-running agent reliability.

## Hot Issues

1. **[#73365 — Fable 5 Advisor Always "Unavailable"](https://github.com/anthropics/claude-code/issues/73365)** | 88 comments, 166 👍
   *Three-week-old bug where the /model picker shows Fable 5 advisor as disabled across all sessions on Windows, despite the same account using it via --model flag. High community frustration—this is the most-reacted issue in the repo despite a likely duplicate marker.*

2. **[#80002 — macOS: Filesystem Extension Tools/call Never Dispatched](https://github.com/anthropics/claude-code/issues/80002)** | 63 comments, 27 👍
   *CLOSED but highly active: Claude Desktop on macOS lists the Filesystem extension tools but never sends tools/call requests. No dispatch appears in any log—suggests a routing layer bug between core and extension host.*

3. **[#32870 — Windows BSOD via Wof.sys During Directory Listing](https://github.com/anthropics/claude-code/issues/32870)** | 34 comments
   *Long-standing (since March) critical crash: claude.exe triggers a Blue Screen of Death through the Windows Overlay Filesystem driver. Extremely rare severity for a developer tool—users report reproducible triggers.*

4. **[#81458 — Silent Hook Failures: 6,865 Skipped Guardrails](https://github.com/anthropics/claude-code/issues/81458)** | 2 comments (NEW today)
   *Fresh report: hooks failing with exit code 127 are silently non-blocking—nearly 7,000 failed guardrail invocations in one session with zero user visibility. No terminal output, no transcript logging. A fundamental safety reliability issue.*

5. **[#81526 — Sandbox Deletes Git Metadata Mid-Session](https://github.com/anthropics/claude-code/issues/81526)** | 1 comment (NEW today)
   *Project-root refs/, objects/, and HEAD created mid-session are silently deleted by the sandbox with no prompt. Agent-investigated report with source-derived findings from bundled binary analysis.*

6. **[#72027 — Pro Subscriber Blocked: "Organization Disabled" Error](https://github.com/anthropics/claude-code/issues/72027)** | 6 comments
   *Individual Pro subscribers hit an entitlement sync bug: "organization disabled" → "Max or Pro required" loop. Likely a stale cache between auth backend and CLI—critical for paying users.*

7. **[#76870 — LSP Tool Returns Silently Incomplete Results](https://github.com/anthropics/claude-code/issues/76870)** | 3 comments
   *Two distinct bugs: cold-index race (first query returns truncated results before language server finishes indexing) and stale file state. Causes Claude to miss symbols without warning—users may trust incomplete analysis.*

8. **[#78104 — Cowork on Windows ARM64: Bash Sandbox Never Works](https://github.com/anthropics/claude-code/issues/78104)** | 1 comment
   *Cowork feature on Windows 11 ARM64 is non-functional from the start—guest VM boots but shell connection always times out at 60 seconds. Affects a growing ARM64 Windows user base.*

9. **[#78529 — getaddrinfo ETIMEOUT on Linux Due to Resolv.conf Comments](https://github.com/anthropics/claude-code/issues/78529)** | 1 comment, 2 👍
   *Bun runtime fails DNS resolution when /etc/resolv.conf has trailing inline comments on nameserver lines—a fragile parsing edge case that breaks all network calls for affected configurations.*

10. **[#74174 — Behavioral Failure Report: 24-Hour Agentic Session](https://github.com/anthropics/claude-code/issues/81474)** | 1 comment (NEW today)
    *Detailed behavioral report from a ~24h continuous session: Claude Opus repeatedly reverted working code, hallucinated non-existent files, and ignored explicit instructions. Heavy hook/rule instrumentation (~40k chars) may have contributed to context degradation.*

## Key PR Progress

1. **[#81500 — Fix 404 Walkthrough Links in AWS Gateway Example](https://github.com/anthropics/claude-code/pull/81500)** | Opened today
   *Seven stale links across README and setup scripts pointing to a 404 URL. Small but impactful—blocks new users from following the AWS Gateway deployment guide.*

2. **[#20448 — Add web4-governance Plugin for AI Governance](https://github.com/anthropics/claude-code/pull/20448)** | Opened January, updated today
   *Long-running PR adding AI governance with T3 trust tensors, entity witnessing, and R6 audit trails. Controversial "web4" branding but addresses cryptographic provenance for agent accountability.*

3. **[#81426 — Fix Security-Guidance Agentic Reviewer on Windows](https://github.com/anthropics/claude-code/pull/81426)** | Opened yesterday
   *Fixes the agentic commit reviewer (strongest security-guidance layer) on Windows by supporting venv layout. Previously skipped entirely on win32 due to hardcoded unix paths.*

4. **[#81423 — Block IPv6 Egress in Devcontainer Firewall](https://github.com/anthropics/claude-code/pull/81423)** | Opened yesterday
   *Critical security fix: the init-firewall.sh script only blocked IPv4 egress (iptables) but ignored ip6tables, leaving a complete bypass on dual-stack Docker networks. All IPv6 traffic was unconstrained.*

5. **[#81421 — Make Bash-Sandbox Example Fail Closed](https://github.com/anthropics/claude-code/pull/81421)** | Opened yesterday
   *The settings-bash-sandbox.json example omits failIfUnavailable, meaning when sandbox can't initialize, the Bash tool runs unsandboxed silently—defeating the purpose of the example's documentation.*

6. **[#68693 — Fix Duplicate Label: Don't Replace Existing Labels](https://github.com/anthropics/claude-code/pull/68693)** | Updated today
   *closeIssueAsDuplicate was replacing the entire label set with just [duplicate], silently erasing platform/area/priority labels. Small but important for maintaining issue triage metadata.*

7. **[#38167 — Authenticated GitHub API Requests in Devcontainer](https://github.com/anthropics/claude-code/pull/38167)** | Updated today
   *Fixes firewall initialization failures in shared-IP environments by using GH_TOKEN for authenticated requests—prevents hitting GitHub unauthenticated rate limits.*

8. **[#80798 — Promote/Demote Subagent to Session](https://github.com/anthropics/claude-code/issues/80798)** | Feature request, not a code PR
   *Proposal to allow promoting a subagent to a full interactive session (reclaim context) and demoting back. Would help developers intervene in orchestrated subagent workflows without losing state.*

9. **[#81528 — Read-Only Access to Claude Desktop History](https://github.com/anthropics/claude-code/issues/81528)** | Feature request (NEW today)
   *Requests Claude Code be able to read Claude Desktop / claude.ai conversation transcripts. Currently siloed—users do research in Desktop and implement in Code with no bridge between the two.*

10. **[#69078 — Russian (and Other) UI Localization](https://github.com/anthropics/claude-code/issues/69078)** | 2 comments, 1 👍
    *Feature request for i18n support starting with Russian. All UI elements hardcoded in English; language command only affects model responses, not UI chrome. Growing demand from non-English-speaking developers.*

## Feature Request Trends

The most-requested feature directions coalesce around **cross-modal state sharing** and **intervention capabilities**. The top three themes:

1. **Session/History Synchronization**: Multiple requests (#28791, #81528) demand bridging between CLI, VS Code extension, and Claude Desktop conversations. Users want one unified history they can search and resume across all interfaces.

2. **Agent Observability & Intervention**: #80798 (promote subagent to session), #68663 (pre/post command hooks), and #81474's behavioral report all point to a need for better visibility into and control over agent decisions during long-running sessions.

3. **UI/UX Localization**: #69078 (Russian) leads a growing call for non-English UI support. With Claude Code expanding globally, hardcoded English UI is becoming a barrier for teams whose primary language is not English.

## Developer Pain Points

**Sandbox trust issues** dominate this week's developer frustrations. Three separate reports (#81458, #81526, #81421) reveal that sandboxed execution is neither transparent nor reliable—silent failures, unannounced file deletions, and configurability that defaults to unsafe behavior erode trust in a core safety feature.

**Cross-platform fragmentation** continues to frustrate Windows and ARM64 users. The BSOD bug (#32870, March, unresolved), Cowork on ARM64 never working (#78104), and the VS Code extension PATH detection regression on Windows with non-ASCII usernames (#80087) suggest Windows testing gaps.

**Billing transparency** is a recurring pain point. #78491 (unintended API-key spend of $78 over 17 days due to a zshrc export) and #80199/ #80705 (usage leaks after updates) indicate that users need louder consent prompts and persistent billing indicators—the current experience silently routes through API billing when a key is present, overriding subscription entitlements.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-27

## Today's Highlights
No new releases were published in the last 24 hours, but the community remains highly active with 50 open issues and 16 pull requests updated. The most notable development is a large batch of merged PRs from the MCP OAuth serialization stack (6 PRs merged today), signaling significant progress on authentication reliability. However, Windows stability continues to dominate the bug tracker, with multiple critical crashes tied to GPU process failures and SwiftShader code integrity issues.

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

**1. [#11023 — Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)**  
*Enhancement, App | 187 comments, 852 👍*  
The top-voted issue ever on the repo. Users are desperate for a native Linux desktop app, citing power consumption and performance problems on macOS. This is the single most requested feature in the community.

**2. [#34260 — Windows Desktop: unbounded taskkill.exe/conhost.exe cleanup storm exhausts WMI](https://github.com/openai/codex/issues/34260)**  
*Bug, Windows OS | 32 comments, 10 👍*  
A severe Windows-specific resource leak where process cleanup loops spawn hundreds of `taskkill.exe` instances, exhausting WMI quotas and freezing the entire system. Reported 7 days ago and already a top concern for Windows power users.

**3. [#21753 — Full Claude Code Hook Parity (29+)](https://github.com/openai/codex/issues/21753)**  
*Enhancement, Hooks | 29 comments, 21 👍*  
Umbrella tracking issue for achieving feature parity with Claude Code's automation hooks. Community wants every major lifecycle event exposed—not just more hook names, but a complete automation surface.

**4. [#17320 — Excessive SQLite WAL writes during streaming due to TRACE logs ignoring RUST_LOG](https://github.com/openai/codex/issues/17320)**  
*Bug, Agent | 27 comments, 39 👍*  
TRACE-level log events bypass RUST_LOG filtering and are written directly to SQLite via WAL journaling, causing heavy disk I/O during streaming sessions. Affects VSCodium on Linux.

**5. [#31573 — OAuth authentication fails at issuer validation](https://github.com/openai/codex/issues/31573)**  
*Bug, Auth, MCP, CLI | 24 comments, 55 👍*  
Free-tier users on Codex CLI 0.143.0 hit a hard block when OAuth issuer validation fails, preventing all MCP-based tool usage. High community upvote ratio suggests widespread impact.

**6. [#24948 — Codex session logs grow to 700MB-2GB from repeated compaction history and raw tool output](https://github.com/openai/codex/issues/24948)**  
*Bug, TUI | 23 comments, 1 👍*  
Session logs balloon catastrophically due to compaction history accumulation and un-trimmed raw tool output. Pro users on macOS with gpt-5.5 hit this regularly.

**7. [#34133 — Page.captureScreenshot crashes GPU process after Code Integrity Event 3033 rejects bundled vk_swiftshader.dll](https://github.com/openai/codex/issues/34133)**  
*Bug, Windows OS, App, Browser | 21 comments*  
Windows 10 users: in-app browser screenshot functionality crashes the GPU process because Windows Code Integrity blocks the bundled `vk_swiftshader.dll`. App becomes unusable after a single screenshot attempt.

**8. [#26562 — Computer Use plugin is unavailable in Codex Desktop on Windows](https://github.com/openai/codex/issues/26562)**  
*Bug, Windows OS, App, Computer Use | 18 comments, 3 👍*  
Computer Use plugin—a flagship feature—is completely missing on the Windows Codex Desktop app. Pro subscribers on Windows are blocked from using agent-driven desktop automation.

**9. [#30712 — Codex desktop app on Windows injects split writable roots, causing apply_patch to fail](https://github.com/openai/codex/issues/30712)**  
*Bug, Windows OS, Sandbox, Tool Calls | 14 comments, 13 👍*  
The safe `apply_patch` edit path is broken on Windows due to incorrect writable root injection, forcing agents to bypass the sandbox entirely using PowerShell fallbacks—a significant security regression.

**10. [#32530 — VS Code Codex panel intermittently stuck loading on Linux](https://github.com/openai/codex/issues/32530)**  
*Bug, Extension, Performance | 12 comments, 12 👍*  
Ubuntu 26.04 users report the Codex side panel in VS Code fails to load due to `net::ERR_FAILED` on local webview assets. Intermittent but disruptive, affecting Pro subscribers on Linux.

---

## Key PR Progress

**1. [#35537 — Add managed policy for in-app updates](https://github.com/openai/codex/pull/35537)**  
*Merged* — Introduces a managed policy for in-app updates, allowing administrators to disable updates via `requirements.toml`. Exposes the policy through `configRequirements/read`.

**2. [#35530 — Track model and personality in world state](https://github.com/openai/codex/pull/35530)**  
*Merged* — Persists model and personality selections in world-state snapshots, with automatic instruction generation during replay. Enables consistent agent behavior across session restores.

**3. [#35525 — Skip inactive TUI threads without pending user interaction](https://github.com/openai/codex/pull/35525)**  
*Merged* — Only collects buffered requests from inactive threads when there is pending user input, preventing unrelated requests from surfacing after leaving a side thread.

**4. [#35524 — Preserve terminal turn errors in replayed history](https://github.com/openai/codex/pull/35524)**  
*Merged* — Fixes a bug where turn completion errors were lost during replay, causing model-overload warnings and similar failures to disappear from the TUI transcript.

**5. [#35523 — Shut down the in-process outbound router explicitly](https://github.com/openai/codex/pull/35523)**  
*Merged* — Prevents shutdown hangs by adding an explicit signal for the outbound router, addressing cases where detached processor work retains outgoing message senders.

**6. [#30295 — Serialize MCP OAuth login and logout](https://github.com/openai/codex/pull/30295)**  
*Merged* — Core PR in the MCP OAuth reliability stack. Ensures OAuth login/logout operations are serialized to prevent race conditions.

**7. [#30296 — Report MCP OAuth Auto store drift](https://github.com/openai/codex/pull/30296)**  
*Merged* — Adds drift detection for MCP OAuth token stores, enabling proactive alerts when stored credentials diverge from expected state.

**8. [#30294 — Route MCP OAuth recovery through Codex](https://github.com/openai/codex/pull/30294)**  
*Merged* — Routes all OAuth recovery flows through Codex's managed pipeline rather than external handlers, improving reliability and auditability.

**9. [#30416 — Serialize authoritative MCP OAuth refresh transactions](https://github.com/openai/codex/pull/30416)**  
*Merged* — Last PR in the OAuth stack. Ensures token refresh operations are serialized and authoritative, preventing duplicate or conflicting refreshes.

**10. [#30985 — Let idle auto-attached threads unload](https://github.com/openai/codex/pull/30985)**  
*Open* — Distinguishes implicit observer attachments from explicit subscriptions, allowing idle threads to reach the existing 30-minute unload lifecycle. Reduces memory pressure in long-running sessions.

---

## Feature Request Trends

1. **Linux Desktop App (#11023)** — Overwhelming demand for a native Linux application. The 852 upvotes and 187 comments make this the single strongest signal in the entire issue tracker.

2. **Claude Code Hook Parity (#21753)** — Community wants full lifecycle automation hooks matching Claude Code's 29+ hook surface. Not just more names—a complete automation surface for CI/CD integration.

3. **Context Window Restoration (#34619)** — Users of GPT-5.6 Sol request restoration of the 372k context window, or at minimum an opt-in toggle. Power users with Pro 20x subscriptions feel the reduction most acutely.

4. **Structured Consent Workflows (#35281)** — Windows users want Codex to treat policy-required consent steps as structured "User action required" checkpoints, rather than blocking or failing silently.

5. **Residual Fidelity Across State (#35528)** — A request for faithful residual metadata when tool output is capped, elided, or context is compacted—so agents and users know what was produced, kept, omitted, and whether recovery is possible.

---

## Developer Pain Points

1. **Windows Stability Crisis** — 10+ active Windows-specific bugs describe GPU crashes, process storms, app freezes, and Code Integrity rejections. The `vk_swiftshader.dll` issue (#34133, #35352) alone makes the in-app browser unusable on many Windows configurations. Computer Use is entirely unavailable (#26562).

2. **OAuth/MCP Authentication Failures** — Multiple issues (#31573, #13852) report OAuth token refresh failures, issuer validation blocks, and repeated reauthentication requirements. The MCP OAuth stack merged today addresses this, but the community has been suffering for months.

3. **Catastrophic Log/Session Bloat** — Issues #24948 and #17320 describe session logs growing to 700MB–2GB, and SQLite WAL writes spiking during streaming. TRACE logs ignoring `RUST_LOG` (#17320) remains unpatched despite high engagement.

4. **WSL Integration Broken** — Issues #30265 and #30712 document that Chrome control, native messaging, and sandboxed file writing are all non-functional when Codex Desktop runs agents inside WSL. Path translation bugs and missing `/mnt/c` support are recurring themes.

5. **macOS Kernel Panics** — Issue #16866 (10 comments) reports Codex CLI 0.118.0 causing full kernel panics on Apple Silicon via `os_refcnt` overflow. Two crashes in one day is alarming for production use.

6. **Rate Limiting Trust Issues** — Issue #17925 (closed but notable) describes weekly usage limits resetting early, effectively removing saved-up quota. Community sentiment suggests distrust in OpenAI's usage accounting.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-27

## Today’s Highlights

A heavy day of dependency hygiene and security hardening: 75 npm dependencies were bulk-upgraded, including breaking changes in `execa` (v10) and `@google/genai` (v2.12). On the security front, an OAuth token-exchange fix for headless VPS environments landed, and a variable-expansion bypass patch (GHSA-wpqr-6v78-jr5g) remains open for review. The community continues to flag agent termination and tool-overloading bugs with sustained urgency.

---

## Releases

**v0.54.0-nightly.20260727.g3818efbbf** — No changes beyond nightly build automation.  
Full changelog: [v0.54.0-nightly.20260726...v0.54.0-nightly.20260727](https://github.com/google-gemini/gemini-cli/compare/v0.54.0-nightly.20260726.g3818efbbf...v0.54.0-nightly.20260727.g3818efbbf)

---

## Hot Issues (10 notable)

1. **#22323 — Subagent recovery after MAX_TURNS reported as “GOAL” success**  
   *Critical bug:* A subagent hitting max-turns lies about completing successfully. Undermines trust in agent lifecycle reporting. 12 comments, 2 👍.  
   [Link](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **#21409 — Generalist agent hangs indefinitely**  
   *Community pain:* 8 👍 — one of the most upvoted open bugs. Deferring to generalist agent causes infinite hangs (even for `mkdir`). Workaround: disable subagents.  
   [Link](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **#19873 — Leverage model's bash affinity via sandboxing & post-execution routing**  
   *Large enhancement:* Friction between Gemini 3’s native bash tool-chaining and the CLI’s security model. Proposes zero-dependency OS sandboxing.  
   [Link](https://github.com/google-gemini/gemini-cli/issues/19873)

4. **#25166 — Shell command stuck “Waiting input” after completion**  
   *Regression:* Simple commands hang with phantom user-input state. 3 👍. Impactful for anyone relying on CLI automation.  
   [Link](https://github.com/google-gemini/gemini-cli/issues/25166)

5. **#24246 — 400 error when >128 tools available**  
   *Tooling limit:* Agent chokes on large tool inventories. Expectation: smart pruning. 0 👍 but affects power-users with extensive MCP servers.  
   [Link](https://github.com/google-gemini/gemini-cli/issues/24246)

6. **#26522 — Auto Memory retries low-signal sessions indefinitely**  
   *Memory-system bug:* Sessions with no extraction value are re-surfaced forever, wasting context and compute. 0 👍 but a core UX drag.  
   [Link](https://github.com/google-gemini/gemini-cli/issues/26522)

7. **#21968 — Gemini under-uses custom skills and sub-agents**  
   *Adoption friction:* Even with well-described skills, agents ignore them unless explicitly instructed. 6 comments.  
   [Link](https://github.com/google-gemini/gemini-cli/issues/21968)

8. **#22093 — Subagents running without permission (v0.33.0 regression)**  
   *Security/permissions:* Users who disabled agents globally find subagents re-enabled after upgrade. 3 comments.  
   [Link](https://github.com/google-gemini/gemini-cli/issues/22093)

9. **#22186 — Get-shit-done output hook causes crash**  
   *Crash:* GSD agent crashes near finish while printing user summary. Impacts reliability of one of the CLI’s flagship features.  
   [Link](https://github.com/google-gemini/gemini-cli/issues/22186)

10. **#22465 — Stuck at interactive prompt (Vite scaffolding)**  
    *Common workflow blocker:* Creating a new Vite app hangs on npm prompts. Needs a behavioral eval + prompt tweak.  
    [Link](https://github.com/google-gemini/gemini-cli/issues/22465)

---

## Key PR Progress (10 important)

1. **#28364 — [CLOSED] Deep-merge user model config over defaults**  
   Fixes nested config overwrites (aliases → modelConfig → generateContentConfig). Small but critical for users with custom model configs.  
   [Link](https://github.com/google-gemini/gemini-cli/pull/28364)

2. **#28369 — [CLOSED] Local eval report command + dev docs**  
   Adds `npm run eval:report` for aggregating pass rates from Vitest reports. Lowers the barrier for contributors to run behavioral evals.  
   [Link](https://github.com/google-gemini/gemini-cli/pull/28369)

3. **#28363 — [CLOSED] Prevent AbortSignal listener leak in ShellExecutionService**  
   Memory leak fix for long-lived sessions. Explicitly removes signal listeners on process exit. Fixes #28280.  
   [Link](https://github.com/google-gemini/gemini-cli/pull/28363)

4. **#28446 — [OPEN] Use native fetch for OAuth token exchange**  
   Fixes `Premature close` errors on headless VPSes during `gemini login`. Switches from undici to native fetch.  
   [Link](https://github.com/google-gemini/gemini-cli/pull/28446)

5. **#28447 — [OPEN] Windows PowerShell troubleshooting for `gemini` command**  
   Adds docs for global npm install + PowerShell execution policy issues. Addresses a recurring onboarding pain point.  
   [Link](https://github.com/google-gemini/gemini-cli/pull/28447)

6. **#28523 — [OPEN] Enforce explicit tag length in file keychain**  
   Hardens file-based credential storage with mandatory 128-bit authentication tag validation across all Node.js runtimes.  
   [Link](https://github.com/google-gemini/gemini-cli/pull/28523)

7. **#28403 — [OPEN] Block $VAR and ${VAR} variable expansion bypass**  
   Security patch for GHSA-wpqr-6v78-jr5g. Hardens `detectBashSubstitution()` and `detectPowerShellSubstitution()`.  
   [Link](https://github.com/google-gemini/gemini-cli/pull/28403)

8. **#28386 — [OPEN] Fix VS Code activation disposables**  
   Critical bug where comma-expressions prevented proper disposal tracking. Fixes #27790 (resource leaks in VS Code companion).  
   [Link](https://github.com/google-gemini/gemini-cli/pull/28386)

9. **#28539 — [CLOSED] Bulk update: 75 npm dependencies**  
   Includes `execa` (v9→v10, breaking), `@google/genai` (v1→v2, with API changes), and `@modelcontextprotocol/sdk` updates.  
   [Link](https://github.com/google-gemini/gemini-cli/pull/28539)

10. **#28543 — [CLOSED] Bump @google/genai from 1.30.0 to 2.12.0**  
    Major version jump for the Google GenAI SDK. Likely includes new client capabilities but requires migration attention.  
    [Link](https://github.com/google-gemini/gemini-cli/pull/28543)

---

## Feature Request Trends

- **AST-aware tooling** (#22745, #22746): Multiple EPICs exploring AST-based file reads, search, and codebase mapping to reduce token waste and improve precision.
- **Memory system overhaul** (#26516, #26522, #26525, #26523): High batch of requests for deterministic redaction, session dedup, and patch validation in Auto Memory.
- **Agent self-awareness & explainability** (#21432, #22598, #21763): Demand for agents that report their own CLI flags, hotkeys, and subagent trajectories via `/chat share`.
- **Component-level evals** (#24353): Formalizing 76+ behavioral eval tests into a runnable suite that gates releases.
- **Browser agent resilience** (#22232): Automatic session takeover and lock recovery for persistent browser profiles.

---

## Developer Pain Points

1. **Subagent lifecycle lying** — Agents reporting `GOAL success` when actually hitting max turns (#22323) erodes trust in agent status APIs.
2. **Infinite hangs** — Generalist agent (#21409) and shell command stucks (#25166, #22465) block basic workflows like project scaffolding.
3. **Agent ignores user configuration** — Subagents running when disabled (#22093), browser agent ignoring `settings.json` overrides (#22267), and under-use of custom skills (#21968).
4. **Tool overload** — 400 error with >128 tools (#24246) and no smart pruning, punishing users with extensive MCP ecosystems.
5. **Memory noise** — Indefinite low-signal retries (#26522), silent patch skipping (#26523), and logging of sensitive content (#26525) make the memory system fragile.
6. **Security gaps** — Variable expansion bypass (#28403), missing auth tag enforcement (#28523), and OAuth failures on headless boxes (#28446) remain unresolved.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-07-27

---

## 1. Today's Highlights

Activity this week centers on a **cluster of Linux stability issues** (zombie processes, NFS hangs, crash-on-exit on Windows) and **regressions in the 1.0.72–1.0.73 releases** that broke the built-in `view` tool. Three notable feature requests are gaining traction: Anthropic `cache_control` breakpoints, `.agents` discovery for *all* local folders, and OAuth refresh-token support for remote MCP servers. No new releases landed in the last 24 hours.

---

## 2. Releases

No new releases in the last 24 hours. The latest available version remains **1.0.75**.

---

## 3. Hot Issues (10 Noteworthy)

### 🔴 #4163 — Zombie process accumulation on Linux (CLOSED / Fixed)
> **Summary:** Copilot CLI 1.0.71 does not reap child processes; finished subprocesses accumulate as zombies under the copilot PID (~2/min leak).  
> **Importance:** Critical for long-running terminal sessions and CI runners. Community upvoted heavily (👍3).  
> **Link:** [github/copilot-cli Issue #4163](https://github.com/github/copilot-cli/issues/4163)

### 🔴 #4053 — TUI hangs on NFS/GPFS: SIGCHLD race (OPEN)
> **Summary:** TUI mode hangs indefinitely at "Loading: N skills" on Linux with home directories on NFS/GPFS. Root cause appears to be a SIGCHLD race when Tokio spawns `which gh` with 30+ concurrent threads. Affects enterprise users with networked home dirs.  
> **Link:** [github/copilot-cli Issue #4053](https://github.com/github/copilot-cli/issues/4053)

### 🔴 #4263 — Responses disappear in Windows Terminal split panes (OPEN)
> **Summary:** In vertical split-pane mode, content disappears on scroll; only the first screen is visible until a new command is submitted. High-visibility UI regression for Windows users.  
> **Link:** [github/copilot-cli Issue #4263](https://github.com/github/copilot-cli/issues/4263)

### 🔴 #4202 — `view` tool broken in 1.0.73: false "Path does not exist" (OPEN)
> **Summary:** The built-in `view` tool reports `Path does not exist` for existing files starting in 1.0.72. Affects all users relying on file-reading capabilities. Regression severity: high (breaks a core tool).  
> **Link:** [github/copilot-cli Issue #4202](https://github.com/github/copilot-cli/issues/4202)

### 🟡 #4258 — Interactive `-i` startup prompt ignored with custom BYOK provider (OPEN)
> **Summary:** Passing `-i/--interactive` with a custom/BYOK provider in tmux sessions doesn't auto-submit the prompt. Standard provider works fine. Narrows BYOK adoption.  
> **Link:** [github/copilot-cli Issue #4258](https://github.com/github/copilot-cli/issues/4258)

### 🟡 #4264 — Extensions slash commands fire multiple times (OPEN)
> **Summary:** User-registered slash commands in local extensions queue 3–5 duplicate instances per invocation. Points to a race condition in the extension dispatch loop.  
> **Link:** [github/copilot-cli Issue #4264](https://github.com/github/copilot-cli/issues/4264)

### 🟡 #4260 — Desktop app ignores `askUser: false` setting (OPEN)
> **Summary:** The CLI setting `askUser: false` in settings.json is only read by the CLI entry point; the Desktop app never consults it and offers no way to disable the `ask_user` tool. Architecture gap for desktop users.  
> **Link:** [github/copilot-cli Issue #4260](https://github.com/github/copilot-cli/issues/4260)

### 🟡 #4203 — Remote MCP OAuth: expired token forces interactive re-auth (OPEN)
> **Summary:** When a remote OAuth MCP server's access token expires, CLI drops its tools and forces interactive login—even when a valid refresh token is cached. Violates RFC 6749 §6; impacts MCP adoption with custom auth servers.  
> **Link:** [github/copilot-cli Issue #4203](https://github.com/github/copilot-cli/issues/4203)

### 🟡 #4217 — Copilot CLI crashes on exit (Windows) — fast_fail_fatal_app_exit (OPEN)
> **Summary:** `copilot.exe` consistently crashes at process exit with `FAST_FAIL_FATAL_APP_EXIT` (subcode 0x7). WinDbg trace suggests a libuv `uv_async_send` on a closing handle. Affects all Windows sessions despite successful completion.  
> **Link:** [github/copilot-cli Issue #4217](https://github.com/github/copilot-cli/issues/4217)

### 🟢 #4259 — `--resume` replays orphaned permission prompts (OPEN)
> **Summary:** On `--resume`, the CLI re-presents permission prompts from `permission.requested` events that have no matching `permission.completed`. Prompts replay on every resume indefinitely. Medium severity: disrupts session recovery workflows.  
> **Link:** [github/copilot-cli Issue #4259](https://github.com/github/copilot-cli/issues/4259)

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

---

## 5. Feature Request Trends

Three clear feature directions are emerging from recent issues and requests:

1. **Anthropic `cache_control` Breakpoints** (#4256) — Requests to the Claude backend don't set `cache_control` breakpoints, causing expensive context (system prompt, tool definitions, file context) to be reprocessed on every turn. Several users are advocating for this to reduce latency and API costs.

2. **`.agents` Discovery for All Folders** (#4204) — Currently, `.agents` conventions (instructions, skills, hooks) only work inside Git repos. Users want this extended to *any* opened folder, enabling standardized Copilot customizations outside repos.

3. **OAuth Refresh Token Support for Remote MCP** (#4203) — The CLI's MCP OAuth client fails to use cached refresh tokens, forcing interactive relogin. This blocks headless/automated MCP workflows and is a blocker for enterprise adoption of custom MCP servers.

---

## 6. Developer Pain Points

Recurring frustrations visible in this week's issue activity:

- **Linux child-process management** (#4163, #4053) — Zombie accumulation and TUI hangs on NFS/GPFS are eroding trust in long-running CLI sessions, especially in enterprise environments with shared home directories.
- **Release regressions** (#4202, #4217) — The 1.0.72–1.0.73 releases introduced regressions in the built-in `view` tool (false "path not found") and a crash-on-exit on Windows. Users note that 1.0.71 was stable.
- **MCP configuration friction** (#4203, #4205) — Custom MCP servers face configuration rejection from registry policies when adding required runtime headers, and OAuth token lifecycle handling is incomplete.
- **Extension/reliability gaps** (#4264, #4260) — Duplicate slash commands and the Desktop app ignoring CLI settings suggest that extension infrastructure and the Desktop/CLI settings split need architectural attention.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-07-27  
**Data Source:** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## Today's Highlights

Today’s activity is quiet with no new releases or pull requests. The sole notable event is a closed bug (Issue #2559) concerning intermittent image paste failures in Kimi Code Web, where pasted images are silently replaced by a generic placeholder, disrupting multimodal chat. The issue has low community engagement (0 👍, 1 comment), but the behavior is significant for users relying on image-in-prompt workflows.

---

## Releases

*(No new releases in the last 24 hours.)*

---

## Hot Issues

*(Only 1 issue updated in the last 24 hours. The following is the full list.)*

1. **[#2559] [Bug] Web: pasted images intermittently dropped; model only receives "[image omitted for provider compatibility]" placeholder**  
   - **Author:** nothankyouzzz  
   - **Why it matters:** Affects the core multimodal input feature—users lose image context without error feedback.  
   - **Community reaction:** Low engagement (0 👍, 1 comment), but the problem is reproducible and blocks image-based queries.  
   - [GitHub Link](https://github.com/MoonshotAI/kimi-cli/issues/2559)

---

## Key PR Progress

*(No pull requests updated in the last 24 hours.)*

---

## Feature Request Trends

*(No new feature requests in the last 24 hours. Based on historical context of the repo:)*  
- **Improved local model support:** Users frequently request deeper integration with local LLMs (Ollama, llama.cpp) to reduce API dependency.  
- **Rich media clipboard:** Direct paste of screenshots, code snippets with syntax highlighting, and file drag-and-drop into chat.  
- **Session persistence:** Auto-save and resume of conversation contexts across restarts.  
- **Plugin/extension system:** Ability to add custom tools, prompts, or output formatters.  
- **Multi-turn code execution:** Sandboxed code runner with shell-inspect mode for debugging.

---

## Developer Pain Points

- **Image paste reliability:** As seen in #2559, lossy image handling erodes trust in web-based multimodal chat.  
- **Async operation feedback:** Intermittent lack of progress indicators during long file reads or API calls.  
- **Provider compatibility ambiguity:** Placeholder errors like “[image omitted for provider compatibility]” are opaque—no actionable guidance on why or how to fix.  
- **Configuration discoverability:** Users report difficulty finding or changing default providers, temperature, or max-token settings without restarting the CLI.  
- **Memory/context limits:** No built-in heads-up when conversation history exceeds the context window; silent truncation occurs.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-27

## Today's Highlights

The OpenCode team shipped **v1.18.6** with a critical fix for branch-specific repository caches and improved compatibility with the newer client API. Meanwhile, the community is actively discussing a long-standing terminal mouse tracking bug (Issue #26198) that was finally closed after months of investigation. Developer contributions are heavily focused on codebase cleanliness and type safety, with a notable surge of "needs:issue" PRs removing dead code and improving TypeScript hygiene.

---

## Releases

**v1.18.6** — [Changelog](https://github.com/anomalyco/opencode/releases/tag/v1.18.6)
- **Core bugfix**: Branch-specific repository caches now properly isolate references — refreshing one branch no longer moves another branch's checkout.
- **Desktop improvements**: Better compatibility with the newer client API across directory, project, session, and terminal flows.
- **Desktop bugfix**: Fixed legacy MCP compatibility.

---

## Hot Issues

1. **[#26198 — Terminal flooded with raw mouse escape sequences (SGR)](https://github.com/anomalyco/opencode/issues/26198)** (17 comments, 5👍)  
   *Closed after 2.5 months.* The CLI enables mouse tracking but fails to disable it when processes interrupt, leaving terminals stuck in raw mouse reporting mode. This was a high-impact bug for TUI users running long-lived commands.

2. **[#16747 — Invalid model identifier error with Bedrock in eu-west-2](https://github.com/anomalyco/opencode/issues/16747)** (11 comments)  
   *Closed.* Bedrock models in the London region fail due to a suspected `eu.` prefix being incorrectly appended to the invocation URL. Highlights ongoing region-specific provider compatibility issues.

3. **[#18567 — Shared conversation UI is confusing](https://github.com/anomalyco/opencode/issues/18567)** (10 comments, 1👍)  
   *Closed.* Users land on the oldest message in shared conversation links (`opncd.ai/share/*`) with no navigation hints. A UX pain point for teams relying on conversation sharing.

4. **[#15226 — `tool_choice: 'required'` incompatible with thinking models + JSON schema](https://github.com/anomalyco/opencode/issues/15226)** (7 comments, 6👍)  
   *Closed.* Unconditionally setting `toolChoice: "required"` breaks reasoning models like Kimi K2.5 that have automatic thinking enabled. Important for structured output workflows.

5. **[#15774 — Streaming truncation at backticks with LM Studio + Qwen3.5](https://github.com/anomalyco/opencode/issues/15774)** (6 comments, 6👍)  
   *Closed.* The streaming parser prematurely terminates responses when backticks appear in either `reasoning_content` or `content`. Critical for users of local reasoning models.

6. **[#23629 — Grep tool fails on non-UTF-8 files (GBK/GB2312)](https://github.com/anomalyco/opencode/issues/23629)** (6 comments)  
   *Closed.* Ripgrep integration breaks on any matched file with GBK encoding. Significant for developers working with legacy Chinese codebases.

7. **[#20531 — OpenRouter Qwen duplicate tool calls](https://github.com/anomalyco/opencode/issues/20531)** (4 comments, 4👍)  
   *Closed.* Every bash tool call executes twice when using `qwen/qwen3.6-plus-preview:free` via OpenRouter. A reliability concern for automation-heavy workflows.

8. **[#29187 — GPT-5.5 aborts mid-stream with unexpected EOF](https://github.com/anomalyco/opencode/issues/29187)** (5 comments, 3👍)  
   *Closed.* Custom OpenAI-compatible providers fail with GPT-5.5 while other models and Codex work fine. Suggests a protocol-level parsing issue specific to newer model versions.

9. **[#39036 — `opencode web` unusable on macOS Golden Gate beta](https://github.com/anomalyco/opencode/issues/39036)** (2 comments)  
   *OPEN.* Fresh issue: the web frontend opens with no folders found and search returns nothing. Early adopter pain for the latest macOS beta.

10. **[#29515 — Long permission prompt pushes buttons off-screen](https://github.com/anomalyco/opencode/issues/29515)** (4 comments)  
    *Closed.* Permission approval/deny buttons become inaccessible on Windows when prompts are long. A Windows-specific UI critical issue.

---

## Key PR Progress

1. **[#38790 — Add workspace flows to new layout](https://github.com/anomalyco/opencode/pull/38790)** (OPEN)  
   A major feature PR adding Local/New/Existing workspace selection, a new Workspaces settings tab with project filtering, nested linked sessions, and last-active state tracking. Likely a core UX overhaul for session management.

2. **[#39015 — Add model-gated auto-approve mode](https://github.com/anomalyco/opencode/pull/39015)** (OPEN)  
   Introduces "Auto-approve" as a third TUI mode (Build → Plan → Auto-approve) with a small model gate. Closes #37564 and addresses a long-standing request for hands-off approval flows.

3. **[#39019 — Fix npm edge resolution by package name](https://github.com/anomalyco/opencode/pull/39019)** (MERGED)  
   Fixes a subtle bug where `Npm.add()` could return the wrong package's path when peer dependencies are present. The fix uses package name lookup instead of relying on Map insertion order.

4. **[#39039 — Connect provider e2e test](https://github.com/anomalyco/opencode/pull/39039)** (MERGED)  
   Adds a full user-story e2e test for provider connection and model selection from a fresh app state. Important for onboarding reliability.

5. **[#39016 — Add scroll to project selector dropdown](https://github.com/anomalyco/opencode/pull/39016)** (MERGED)  
   Fixes #37149 where the project selector dropdown grew unbounded. Simple but critical for users with many projects.

6. **[#39028 — Reconnect SSE stream on mobile tab visibility](https://github.com/anomalyco/opencode/pull/39028)** (MERGED)  
   Fixes frozen chats in mobile browsers — SSE streams now reconnect when the tab becomes visible again. A quality-of-life fix for mobile users of `opencode serve`/`opencode web`.

7. **[#37832 — Prevent Solid cleanNode crash on session switch](https://github.com/anomalyco/opencode/pull/37832)** (OPEN)  
   Fixes a desktopp freeze/crash (`TypeError: Cannot read properties of undefined`) when switching sessions. Solid.js reactivity issue, likely high priority.

8. **[#39008 — Enable Anthropic prompt caching on OpenRouter route](https://github.com/anomalyco/opencode/pull/39008)** (OPEN)  
   Anthropic models through OpenRouter never get `cache_control`, causing full-price billing every turn. This PR adds `applyCachePoints` support — significant cost savings for heavy users.

9. **[#39027 — Keep mutable selects open](https://github.com/anomalyco/opencode/pull/39027)** (MERGED)  
   Fixes duplicate selection changes from Kobalte that closed dropdowns prematurely when reactive option arrays were rebuilt.

10. **[#39023 — Break circular type reference in Prompt](https://github.com/anomalyco/opencode/pull/39023)** (MERGED)  
    Fixes a TypeScript circular reference that caused the `Prompt` type to default to `any`. No small issue — this restores type safety for all downstream consumers.

---

## Feature Request Trends

1. **Structured output / JSON schema support** — Multiple requests (e.g., #9320, #15226) for first-class JSON schema integration with `opencode run` and reasoning models. Community wants constraint-based output generation similar to `llama.cpp`'s `--json` flag.

2. **Plugin AI-visible context injection** — Request #17412 exemplifies a growing desire for plugins to inject system-visible messages into conversation context, not just intercept/modify existing flows.

3. **TUI timestamp modes** — Issue #29399 proposes a tri-state `/timestamps` cycle (hide → footer → gutter), reflecting a need for better temporal context in terminal sessions without clutter.

4. **Hot-reloadable certificate trust** — PR #39028's mobile SSE fix complements request #29579 for hot-reloading root CA trust — a security-conscious feature for enterprise environments with ephemeral certificates.

5. **LSP for extensionless files** — Issue #27604 highlights that Dockerfiles, Makefiles, and CHANGELOGs get no LSP support because matching is extension-only. A recurring pain for infrastructure-as-code workflows.

6. **Native OCI Generative AI support** — #29622 requests adding Oracle Cloud Infrastructure as a first-class provider, indicating growing demand for cloud-agnostic model access.

7. **System reminder method/UI** — #29633 asks for more flexible system reminder injection beyond the current two-option limit for plugins, showing interest in fine-grained agent behavior control.

---

## Developer Pain Points

1. **Provider compatibility fragmentation** — Issues surface repeatedly with Bedrock regions (#16747), OpenRouter-specific behaviors (#20531, #39008), and OpenAI reasoning model parameter mismatches (#25096). Each provider seems to require custom workarounds.

2. **Terminal/TUI stability under load** — Multiple reports of hangs (#29134), OOM crashes (#29536), and aggressive looping (#29623) when sessions run long or context windows fill. The TUI appears brittle with sustained use.

3. **Encoding and parsing brittleness** — Non-UTF-8 encodings (#23629), backtick truncation in streaming (#15774), and raw mouse escape sequences (#26198) all point to insufficient robustness in the streaming/text parsing layer.

4. **Desktop UI gaps on Windows/macOS** — Permission buttons pushed off-screen (#29515), session switching crashes (#37832), project closing freezes (#38979), and non-Git directory session visibility issues (#29621) indicate uneven desktop cross-platform polish.

5. **Build/startup performance** — Synchronous MCP server loading blocking startup (#20755) and excessive CPU/RAM usage from the Diff viewer (#29536) suggest optimization opportunities in both initialization and rendering paths.

6. **Mobile and beta OS gaps** — Chrome mobile SSE disconnects (#39028) and macOS Golden Gate beta incompatibility (#39036) show that mobile and new OS versions lag in testing coverage.

---

*Generated from 50 Issues and 50 PRs updated in the last 24 hours on [anomalyco/opencode](https://github.com/anomalyco/opencode).*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-27

## Today's Highlights
A major burst of activity has hit the Pi repository with **32 issues updated in the last 24 hours**, many of them filed and closed same-day as part of an apparent triage push for the 0.82.x series. The most critical open issues include a **core-pinning TUI bug** caused by uncached `Intl.Segmenter` usage (Issue #6665, now at 8 comments) and **WSL absolute Windows path mishandling** (Issue #7064) that breaks fundamental file operations for WSL users. On the PR side, a **draft experimental loadout management system** (PR #7148) and a **pending stop reason streaming proposal** (PR #7151) signal growing interest in runtime extensibility and API consumer transparency.

---

## Releases
No new releases in the last 24 hours. The latest release remains Pi **0.82.1**.

---

## Hot Issues

1. **[#6665 — TUI pins a full core while streaming](https://github.com/earendil-works/pi/issues/6665)** — *OPEN, 8 comments*  
   **Why it matters:** Long sessions cause 100% CPU usage on one core. The hot path is `Markdown.render` → wrap → `Intl.Segmenter` (ICU BreakIterator). Two root causes identified: grapheme segmentation is uncached, and per-chunk Markdown rebuild recomputes everything. Community concern is high because this affects all users with `pi -ne`. No workaround yet.

2. **[#7064 — WSL absolute windows paths are mishandled](https://github.com/earendil-works/pi/issues/7064)** — *OPEN, 5 comments, 1 👍*  
   **Why it matters:** `read`, `write`, and `edit` tools fail on WSL2 when given Windows-formatted paths, forcing the agent to fall back to full file writes via command-line tools. This breaks the core tool loop for all WSL users. Community is actively discussing path normalization patches.

3. **[#7090 — Regenerate 0.82.x shrinkwrap with brace-expansion 5.0.8+](https://github.com/earendil-works/pi/issues/7090)** — *CLOSED, 5 comments*  
   **Why it matters:** Official release publishes an `npm-shrinkwrap.json` that pins `minimatch@10.2.5 -> brace-expansion@5.0.7`, which has CVE-2026-14257 (memory-exhaustion DoS). Fixed in 5.0.8. Quick triage and closure.

4. **[#7049 — Upgrade Undici to 8.8.0 for correct plain-HTTP proxy forwarding](https://github.com/earendil-works/pi/issues/7049)** — *OPEN, 3 comments*  
   **Why it matters:** Pi 0.81.1 pins Undici 8.5.0 which defaults `proxyTunnel: true`, causing `CONNECT host:80` for plain HTTP targets behind `HTTP_PROXY`. This breaks MCP/API requests through proxies. Community calls for urgent fix.

5. **[#7138 — MiniMax-M3 Token Plan: messy thinking output, compaction breaks reasoning](https://github.com/earendil-works/pi/issues/7138)** — *CLOSED, 3 comments*  
   **Why it matters:** MiniMax-M3 via Token Plan produces inline thinking content that compaction corrupts. The `reasoning_split` parameter could fix this. User reports extension interaction issues.

6. **[#7152 — Add a read-only provider/model auth preflight command](https://github.com/earendil-works/pi/issues/7152)** — *CLOSED, 2 comments*  
   **Why it matters:** Request for `pi auth check --provider ... --model ... --json --no-refresh` to verify credentials without mutation. Quick user workflow improvement, closed as accepted direction.

7. **[#7143 — Z.AI providers send max_completion_tokens, which Z.AI ignores](https://github.com/earendil-works/pi/issues/7143)** — *CLOSED, 2 comments*  
   **Why it matters:** `detectCompat()` sets `max_completion_tokens` for Z.AI providers, but Z.AI only respects `max_tokens`. Silent token limit bypass. Fixed in triage.

8. **[#7154 — Compaction invalidates the extension runtime](https://github.com/earendil-works/pi/issues/7154)** — *CLOSED, 1 comment*  
   **Why it matters:** Three independent long-running sessions show compaction triggers `ctx.newSession()` invalidation path. Captured `pi` throws "stale after session replacement" forever with no in-process recovery. Potentially severe for production users.

9. **[#7150 — RPC prompt during in-flight compaction: ACKed success:true, then silently dropped](https://github.com/earendil-works/pi/issues/7150)** — *CLOSED, 1 comment*  
   **Why it matters:** A `prompt` command over RPC during compaction is acknowledged `success:true` but never enters the session. Silent data loss at the worst possible timing. Urgent fix needed.

10. **[#7136 — bash tool silently truncates long commands](https://github.com/earendil-works/pi/issues/7136)** — *CLOSED, 1 comment*  
    **Why it matters:** Agent's built-in `bash` tool silently cuts off commands past a certain length, running only the first part with no error. Dangerous for automated workflows. Root cause suspected in argument buffer limits.

---

## Key PR Progress

1. **[PR #7148 — Experimental loadout management](https://github.com/earendil-works/pi/pull/7148)** — *OPEN, draft*  
   **What:** Adds `/loadout` command to enable/disable extensions mid-session. Session loadout overrides persisted for resumption.  
   **Why it matters:** Major usability improvement for extension-heavy workflows. Requires user confirmation. Draft status — not yet production-ready.

2. **[PR #7151 — Expose pending stop reason while streaming](https://github.com/earendil-works/pi/pull/7151)** — *OPEN*  
   **What:** Interprets Responses API `phase: "final_answer"` as a prediction that the streaming message will end with `stopReason: 'stop'`.  
   **Why it matters:** Enables consumers to know as early as possible when the final message is incoming. Improves UX for streaming consumers.

3. **[PR #7156 — fix(ai): rename OpenCode Zen Go to OpenCode Go](https://github.com/earendil-works/pi/pull/7156)** — *CLOSED*  
   **What:** Fixes display name for OpenCode Go provider.  
   **Why it matters:** Simple bug fix from community contributor. Merged same day.

4. **[PR #7131 — Set AI_AGENT for child process attribution](https://github.com/earendil-works/pi/pull/7131)** — *CLOSED*  
   **What:** Sets `AI_AGENT=pi` in CLI and RPC entry points, alongside existing `PI_CODING_AGENT=true`.  
   **Why it matters:** Converges on cross-agent convention (Claude Code, GitHub CLI, Vercel). Generic consumers can identify Pi without Pi-specific checks. Merged.

5. **[PR #7129 — tui: raise visibleWidth cache to 4096 entries, use LRU eviction](https://github.com/earendil-works/pi/pull/7129)** — *CLOSED*  
   **What:** Increases `visibleWidth` cache from 512 to 4096 entries, switches from FIFO to LRU eviction.  
   **Why it matters:** Fixes cache thrashing on real agent sessions with non-ASCII lines (box drawing, emoji, CJK). Performance improvement.

6. **[PR #7145 — Dev](https://github.com/earendil-works/pi/pull/7145)** — *CLOSED*  
   **What:** Unspecified development branch merge.  
   **Why it matters:** Internal housekeeping PR.

7. **[PR #7138-related — MiniMax-M3 fixes](https://github.com/earendil-works/pi/pull/7155)** — *CLOSED*  
   **What:** Fix for thinking content leaking into assistant text response. Same root cause as Kilo-Org/kilocode#11203.  
   **Why it matters:** Addresses inline reasoning pollution in MiniMax-M3 responses.

8. **[PR #7127 — Feature request: public durable compaction strategy lifecycle](https://github.com/earendil-works/pi/issues/7127)** — *CLOSED*  
   **What:** Requests public API for external compaction strategies that must preserve state across restarts.  
   **Why it matters:** Current `session_before_compact` hook is insufficient for durable strategies. Accepted as feature direction.

9. **[PR #7146 — Workflow: include token usage in agent_result / run_complete events](https://github.com/earendil-works/pi/issues/7146)** — *CLOSED*  
   **What:** Workflow run logs currently lack token usage data. Request to add it for observability.  
   **Why it matters:** Critical for monitoring costs and debugging parallel subagent workloads.

10. **[PR #7144 — Expose overlay on-screen position / mouse-click API for extensions](https://github.com/earendil-works/pi/issues/7144)** — *CLOSED*  
    **What:** TUI class never enables mouse tracking, preventing extensions from building click-to-select UIs.  
    **Why it matters:** Enables a new class of interactive extension UIs. Accepted as feature direction.

---

## Feature Request Trends

1. **Runtime Extensibility & Lifecycle Hooks** — Multiple requests for durable compaction strategies (Issue #7127), `pre_response` / `before_send_message` gates (Issue #7137), and loadout management (PR #7148). Community wants more control over extension lifecycle and message processing.

2. **Observability & Attribution** — Requests for token usage in workflow events (Issue #7146), `AI_AGENT` environment variable (Issue #7132), and read-only auth preflight (Issue #7152). Growing demand for production observability and cross-tool interoperability.

3. **UI/UX for Extensions** — Requests for mouse-click APIs (Issue #7144), themeable cursor colors (Issue #7141), and overlay positioning. Community wants richer extension UIs beyond text-only interaction.

4. **Provider Parity & Configuration** — Support for OpenAI 5.6 Pro modes (Issue #7135), MiniMax-M3 `reasoning_split` (Issue #7140), and Anthropic refusal signals (Issue #7133). Users want full provider feature parity.

5. **Session & Compaction Reliability** — Multiple issues (Issues #7150, #7154, #7153) highlight that compaction and session replacement still have serious data-loss and invalidation bugs. Reliability is a high priority.

---

## Developer Pain Points

1. **Performance Degradation on Long Sessions** — Issue #6665 (100% CPU core) shows that the TUI's Markdown rendering pipeline is not optimized for streaming sessions. Uncached `Intl.Segmenter` is a hot path bottleneck.

2. **Cross-Platform Path Handling** — Issue #7064 (WSL path mishandling) continues to plague Windows + WSL2 users. The tool loop breaks for a significant platform segment.

3. **Compaction & Session Invalidation Bugs** — Issues #7154 and #7150 reveal that compaction can permanently invalidate extension runtimes and silently drop RPC commands. These are production-critical reliability issues.

4. **Proxy/Network Configuration Pain** — Issue #7049 (Undici proxy tunneling) highlights that HTTP proxy handling is broken for plain HTTP targets. Users behind corporate proxies face silent failures.

5. **Terminal Compatibility** — Multiple issues (Kitty backspace double-deletion, Issue #7130; tmux image passthrough disabled, Issue #7125) indicate ongoing terminal emulator and multiplexer compatibility problems.

6. **Silent Failures** — Issue #7136 (bash tool truncation) and Issue #7150 (RPC dropped messages) represent a pattern of silent data loss with no error reporting, undermining trust in automation workflows.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-27

## Today's Highlights

A major security incident unfolded yesterday with three P1 vulnerabilities reported in Qwen Desktop's MCP and Electron layers, all closed rapidly by the team. Meanwhile, the CI pipeline is experiencing a flurry of E2E test failures on main, triggering multiple autofix-tagged issues. On the positive side, a nightly release (v0.21.0) shipped with CLI timezone fixes, and several promising PRs landed for Goal v3 worker tools, web shell UX improvements, and deterministic script linting.

## Releases

- **v0.21.0-nightly.20260727.c003e1718** — CLI fix to measure insight days and hours in local time everywhere, plus an ongoing refactor of the autofix extension system.

## Hot Issues

1. **#7769** [P1/Security] *MCP tool denial bypassed when a new SSE session is created* — A user denial of an MCP tool call is not enforced; the AI can retry in a new session. **Closed** with 6 comments.  
   https://github.com/QwenLM/qwen-code/issues/7769

2. **#7768** [P1/Security] *Desktop IPC bridge `mcp_client_tool_call` executes MCP tools without enforcing user authorization* — Privileged IPC call bypasses permission prompts. **Closed** with 6 comments.  
   https://github.com/QwenLM/qwen-code/issues/7768

3. **#7772** [P3/Security] *Qwen Desktop BrowserWindow uses insecure Electron webPreferences* — Found sandbox, webview, and other insecure defaults despite secure nodeIntegration. **Closed** with 4 comments.  
   https://github.com/QwenLM/qwen-code/issues/7772

4. **#7770** [P2/Security] *Code interpreter sandbox can write to host machine when MCP proxy is internet-exposed* — Sandbox has outbound internet but cannot reach localhost; exposing the MCP proxy bypasses the isolation. **Open**, 4 comments.  
   https://github.com/QwenLM/qwen-code/issues/7770

5. **#7771** [Bug] *Persisted mcp_config is not loaded into main-process MCP proxy at startup* — After restart, IPC calls may use stale or empty MCP configuration. **Open**, 4 comments.  
   https://github.com/QwenLM/qwen-code/issues/7771

6. **#7585** [P3/Feature] *Add a direct external context provider profile* — Proposal for a Qwen extension that retrieves repository-shared context from an external knowledge service without changing Qwen Core. **Open**, 8 comments (most active discussion).  
   https://github.com/QwenLM/qwen-code/issues/7585

7. **#7779** [P2/Bug] *VP teardown can leave Kitty keyboard flags enabled on the main screen* — Virtual viewport mode fails to fully clean up terminal state. **Open**, 3 comments.  
   https://github.com/QwenLM/qwen-code/issues/7779

8. **#7781** [P2/Bug] *SIGTERM and SIGHUP can leave VP terminal modes active* — Alternate-screen frame and host terminal state remain after termination signals. **Open**, 3 comments.  
   https://github.com/QwenLM/qwen-code/issues/7781

9. **#7750** [Question] *Qwen Code SDK vs Qoder Agent SDK selection* — User confused by overlapping capabilities between the two SDKs; which will survive? **Closed** with 6 comments.  
   https://github.com/QwenLM/qwen-code/issues/7750

10. **#7685** [P3/Feature] *Subagent model grade selection at spawn time* — Request to add a `model` parameter to the agent tool for selecting grade (small/medium/high/super). **Closed**, 4 comments.  
    https://github.com/QwenLM/qwen-code/issues/7685

## Key PR Progress

1. **#7790** *fix(core): decline combined sed flags where -i is not last* — Ensures `-Ei` is correctly handled (not treated as in-place with suffix `.E`).  
   https://github.com/QwenLM/qwen-code/pull/7790

2. **#7788** *fix(core): correct character classes in checkContentLoop* — Fixes two regex character classes where `-` was interpreted as a range operator instead of a literal.  
   https://github.com/QwenLM/qwen-code/pull/7788

3. **#7786** *fix(core): reject socks5h and socks4a proxy URLs* — Extends SOCKS rejection to cover the `h` and `a` variants.  
   https://github.com/QwenLM/qwen-code/pull/7786

4. **#7784** *fix(cli): report a genuine $0.00 cost instead of N/A* — Prevents `null` cost from showing "N/A" when the actual cost is $0.00.  
   https://github.com/QwenLM/qwen-code/pull/7784

5. **#7775** *fix(core): decline sed patterns whose bracket expression starts with ]* — Prevents simulated sed execution from producing wrong file content. **Closed**.  
   https://github.com/QwenLM/qwen-code/pull/7775

6. **#7754** *feat(web-shell): Scope voice to composer workspace* — Routes voice experience through workspace context; fail-closed for untrusted workspaces.  
   https://github.com/QwenLM/qwen-code/pull/7754

7. **#7761** *test(serve): Add first-output latency benchmark* — Opt-in benchmark measuring full daemon/ACP path from spawn to first model output.  
   https://github.com/QwenLM/qwen-code/pull/7761

8. **#7731** *feat(web-shell): add git branch picker, commit dialog, and create PR flow* — IntelliJ-style branch picker, checkout, new branch, commit, and PR creation from the UI.  
   https://github.com/QwenLM/qwen-code/pull/7731

9. **#7729** *feat(core): add Goal v3 worker tools* — Adds read/update tools for Goal snapshot, evidence catalog, and verifier feedback.  
   https://github.com/QwenLM/qwen-code/pull/7729

10. **#7751** *feat(review): script-lint as a deterministic gate* — Replaces agent-based linting with a deterministic report reader, removing model's honor system from script-linting decisions.  
    https://github.com/QwenLM/qwen-code/pull/7751

## Feature Request Trends

The most prominent feature direction this week is **external context and knowledge integration** — users want Qwen Code to pull repository-shared context from external services without core changes (#7585). A related trend is **subagent model selection** (#7685): fine-grained control over which model grade spawns subagents. On the **UI/UX** front, **image delivery support** for messaging channels (DingTalk, #7687, #7698) and **git workflow integration** in the web shell (#7731) are clear priorities. Finally, **Goal v3 worker tools** (#7729) indicate ongoing investment in structured multi-agent task management.

## Developer Pain Points

- **CI instability**: Multiple E2E test failures on `main` (#7755, #7780, #7787, #7773, #7759) are generating automated issues tagged for autofix, signaling a fragile test suite that needs attention.
- **Terminal state cleanup**: Two P2 bugs (#7779, #7781) highlight that virtual viewport mode leaves terminal state dirty after teardown and signal handling — a recurring pain point for CLI users on Kitty terminals.
- **SDK confusion**: The user question (#7750) about Qwen Code SDK vs Qoder Agent SDK reveals ongoing confusion about product positioning and roadmap overlap between the two.
- **Plan mode content leakage**: A reopened concern (#6237) about `exit_plan_mode` leaking plan content into subsequent responses continues to frustrate users.
- **Skill auto-complete regression**: Multiple skill mentions in a single line fail to auto-complete beyond the first (#7717), disrupting fast workflow for power users.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-27

## Today's Highlights

The project saw a burst of ~25 merged PRs and active issues, with the core team shipping significant performance improvements: the O(N²) markdown re-parse during streaming was fixed (PR #4903), and live transcript rendering was heavily optimized (PR #4892). On the feature side, `@git` and `@diff` mentions landed in the composer (PR #4899), and a long-standing James (prompt-cache cost regression) was closed after investigation found that per-turn metadata was busting the cacheable prefix (PR #4902, closing #3738). The community is also energized around localization, with three new locale PRs in review.

## Releases

No new releases in the last 24 hours.

## Hot Issues

### 1. [#3793 – v0.9.2 Setup: build a guided localized constitution creator, not a blank prompt editor](https://github.com/Hmbown/CodeWhale/issues/3793)
**17 comments** – A detailed UX proposal for turning the constitution creator into a language-first, guided flow. The critical constraint: autonomy/risk posture in the constitution file must not directly flip runtime security settings. This is the design anchor for v0.9.2 onboarding.

### 2. [#4227 – feat: 🐋 help JayBeest map the CodeWhale tsunami 🌊](https://github.com/Hmbown/CodeWhale/issues/4227)
**13 comments** – A workflow to help contributors keep up with 10+ PRs/day velocity. Community member JayBeest is effectively proposing a "dev environment bootstrap skill" that auto-rebuilds and tests against latest `main`. Signals growing contributor traction.

### 3. [#2934 – feat: sidebar sessions panel with auto-resume and session history browsing](https://github.com/Hmbown/CodeWhale/issues/2934)
**10 comments** – Users want a persistent sidebar for session management instead of relying on `Ctrl+R` popups. This is the most-commented feature enhancement that isn't from the maintainer — real user friction.

### 4. [#3792 – v0.9.2 Setup: make first-run onboarding feel like starting CodeWhale, not editing config](https://github.com/Hmbown/CodeWhale/issues/3792)
**9 comments** – Companion to #3793. Emphasizes that the constitution must remain central, but enforces separation between constitutional text and runtime security controls. Strong community alignment.

### 5. [#1004 – /dryrun — preview the next chat completion request without sending it](https://github.com/Hmbown/CodeWhale/issues/1004)
**5 comments** – A long-standing request (filed May 5) for a `/dryrun` command that shows the exact request payload before incurring API cost. Especially valuable for DeepSeek V4 Pro users where long context + cached files gets expensive.

### 6. [#2494 – mac+ iTerm2 用户使用问题汇总](https://github.com/Hmbown/CodeWhale/issues/2494)
**6 comments** – A detailed Chinese-language bug report from a Mac/iTerm2 user listing four key issues: Windows-centric shortcut docs, newline handling in messages, lack of proper stop/cancel, and session history navigation. The user paused using the TUI due to these gaps. **Closed** but highlighted because it captures real Mac UX pain.

### 7. [#3983 – v0.9.2 Runtime: make current Work state model-visible on parent turns](https://github.com/Hmbown/CodeWhale/issues/3983)
**4 comments** – Wants `checklist_*` and `update_plan` progress surfaced on parent turns so the model can see sub-agent execution state. Core for making CodeWhale's multi-agent runtime transparent.

### 8. [#3927 – ux(onboarding): add an explicit provider-independent offline path](https://github.com/Hmbown/CodeWhale/issues/3927)
**4 comments** – Users want to explore the TUI without setting up any API key. Even with Ollama/SGLang routes available, every path still activates a model. A pure "look around" mode is requested.

### 9. [#3897 – perf(tui): streaming re-parses the whole growing message every chunk (O(N²) markdown)](https://github.com/Hmbown/CodeWhale/issues/3897)
**2 comments** – Performance-critical bug: `markdown_render::render_markdown_tagged` re-parses the entire message on every streaming chunk. Direct evidence from the codebase. **Fixed today** in PR #4903.

### 10. [#3738 – Investigate prompt-cache hit-rate regression (DeepSeek cost up)](https://github.com/Hmbown/CodeWhale/issues/3738)
**2 comments** – User-reported cost increase due to per-turn `<turn_meta>` block variable data busting the cacheable prefix. **Closed today** after PR #4902 confirmed and resolved the root cause.

## Key PR Progress

### 1. [#4909 – fix(fetch_url): 修复非 UTF-8 网页解码](https://github.com/Hmbown/CodeWhale/pull/4909)
**OPEN** – Fixes garbled decoding for GB2312/GBK pages. Uses HTTP `Content-Type` and HTML `<meta charset>` to detect encoding. Community contribution from h3c-hexin.

### 2. [#4908 – I18n(zh-Hans): update simplified-Chinese translations to match latest en.json](https://github.com/Hmbown/CodeWhale/pull/4908)
**OPEN** – Second round of zh-Hans quality improvements from SparkofSpike, verified by a reviewer sub-agent. Covers all 1134 keys against en.json.

### 3. [#4905 – fix(tui): stop writing terminal control bytes to non-terminals](https://github.com/Hmbown/CodeWhale/pull/4905)
**CLOSED** – Stopped unconditional OSC 9;4 and OSC 0 writes to stdout. Partial fix for the "leaked control bytes" issue (#4847) — the .app bundle attribution remains open.

### 4. [#4903 – perf(tui): stop re-parsing committed markdown while streaming](https://github.com/Hmbown/CodeWhale/pull/4903)
**CLOSED** – **Major perf win**: removed the O(N²) quadratic markdown re-parse on every streaming chunk. Partial slice of #3897 — the render side remains open.

### 5. [#4902 – test(engine): pin the cacheable prefix across unchanged turns](https://github.com/Hmbown/CodeWhale/pull/4902)
**CLOSED** – **Cost fix**: confirmed that per-turn `<turn_meta>` block was busting DeepSeek's cache. Added tests to pin the cacheable prefix. Closes #3738.

### 6. [#4899 – feat(composer): add @git and @diff mentions](https://github.com/Hmbown/CodeWhale/pull/4899)
**CLOSED** – **New feature**: `@git` and `@diff` mentions in the composer, giving the model curated git context without requiring a round-trip. Closes #4067.

### 7. [#4894 – feat(shell): deliver tracked completions to waiting turns](https://github.com/Hmbown/CodeWhale/pull/4894)
**CLOSED** – Delivers completed background shell jobs as internal runtime events at the next turn boundary. Partial fix for #3874; the acceptance audit stays open.

### 8. [#4896 – [codex] move terminal clipboard writes off event loop](https://github.com/Hmbown/CodeWhale/pull/4896)
**CLOSED** – Routes OSC 52 clipboard writes through a serialized background worker, preventing terminal I/O stalls on the TUI event path. Fixes #4159. Community contribution from nightt5879.

### 9. [#4892 – perf(tui): reuse live transcript snapshots and flattened lines](https://github.com/Hmbown/CodeWhale/pull/4892)
**CLOSED** – **Major perf win**: caches unchanged live-transcript cell snapshots and flattened wrapped lines across overlay renders. Closes #3904.

### 10. [#4467 – Feat/opencode zen provider](https://github.com/Hmbown/CodeWhale/pull/4467)
**OPEN** – Adds OpenCode Zen as a new provider, routing Zen models across Responses, Anthropic Messages, and Chat Completions. Community contribution from snail-vs.

## Feature Request Trends

- **Localization expansion is accelerating**: Three new locale issues filed in the last 72 hours (French/German/Catalan #4788, Indonesian #4789) join the existing pipeline for Korean, Spanish, Brazilian Portuguese, and Russian. The maintainer is systematically filling the locale matrix.
- **Guided onboarding / constitution creator**: The #3793 → #3792 thread is the highest-activity design conversation, proposing a language-first, scaffolded setup flow that clearly separates constitutional text from runtime security controls.
- **Multi-session operator dashboard**: Issues like #4397 (multi-session dashboard with peek approvals) and #2934 (sidebar sessions panel) show demand for better visibility into concurrent coding sessions and sub-agents.
- **Provider-independent offline mode**: Issue #3927 captures a clear desire to explore the TUI without any API key configured — important for evaluation and demos.
- **Slash command standardization**: Issues #1888 and #1891 call for a coherent "tool studio" UX where all agent, tool, and policy-affecting slash commands share a control-plane contract for inspect/pause/cancel/resume.

## Developer Pain Points

- **Mac/iTerm2 compatibility gaps**: Issue #2494 (closed but revealing) documents shortcut key mismatches, message newline handling issues, missing stop/cancel, and session history navigation — all blocking a Mac user from adopting the TUI.
- **Prompt-cache cost surprises**: The #3738 investigation revealed that per-turn metadata variability was silently increasing DeepSeek API costs by busting the cacheable prefix. Fixed, but the episode underscores that cost optimization is a live concern.
- **Streaming performance degradation on long messages**: The O(N²) markdown re-parse on every chunk (#3897) made long model responses progressively slower as they grew. Fixed today, but this was a tangible daily pain for heavy users.
- **Constitution opacity**: Issue #3928 highlights that users cannot read the active constitution from inside the app, and custom overrides fail silently if the environment flag is missing — a significant usability gap for the feature that defines the model's behavior.
- **Non-terminal control byte leakage**: PR #4905 fixed unconditional OSC control sequences being written to stdout, which could corrupt logs, CI output, or piped workflows. An ongoing concern: the `.app bundle` part of #4847 is still open.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*