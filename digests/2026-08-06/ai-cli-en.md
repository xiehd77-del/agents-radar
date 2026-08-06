# AI CLI Tools Community Digest 2026-08-06

> Generated: 2026-08-06 02:41 UTC | Tools covered: 9

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
**Date: 2026-08-06**

---

## 1. Ecosystem Overview

The AI CLI tool landscape is maturing rapidly, with eight major tools shipping frequent releases while communities converge on shared pain points: multi-agent interoperability, MCP (Model Context Protocol) standardization, terminal rendering stability, and session persistence. Claude Code, OpenAI Codex, and Gemini CLI lead in community engagement, while Kimi Code and DeepSeek TUI show nascent but growing developer ecosystems. The dominant theme across all tools is the tension between rapid feature expansion and reliability — silent data corruption bugs, OAuth failures, and context overflow issues consistently outrank new feature requests in community priority.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Community Engagement |
|------|-------------|-----------|----------------|---------------------|
| **Claude Code** | 10 notable | 5 key | **v2.1.223 shipped** | High — 46👍 on top issue |
| **OpenAI Codex** | 10 notable | 10 key | **rust-v0.146.1 shipped**; alphas ongoing | High — 78-143👍 on closed features |
| **Gemini CLI** | 10 notable | 10 key | **v0.54.0 stable**; v0.55.0-preview.1 | High — 12 comments on top issue |
| **Copilot CLI** | 10 notable | 0 updated | **v1.0.79-5 shipped** | Medium — 8-12 comments range |
| **Kimi Code** | 3 notable (low activity) | 3 key | No release | Low — 19 comments on top feature |
| **OpenCode** | 10 notable | 10 key | **v1.18.14 shipped** | Medium-High — 134👍 on top feature |
| **Pi** | 10 notable | 10 key (37 total updated) | No release | Medium — 17 comments on top issue |
| **Qwen Code** | 10 notable | 10 key | **3 releases** (v0.21.6, desktop-v0.1.0, nightly) | Medium — 8 comments on P2 security issue |
| **DeepSeek TUI** | 1 notable | 14 active | v0.9.4 release train in progress | Low — 4 comments on top issue |

---

## 3. Shared Feature Directions

### Cross-Tool Requirements Matrix

| Requirement | Tools | Specific Needs |
|-------------|-------|----------------|
| **Multi-agent interoperability** | OpenAI Codex, Claude Code, Copilot CLI, Kimi Code | Non-OpenAI provider support in MultiAgent v2; subagent task payload visibility; encrypted-content decryption for third-party models |
| **MCP standardization** | Copilot CLI, Gemini CLI, Anthropic, OpenCode, Pi | OAuth 2.1 dynamic client registration; `server/discover` method compatibility; registry policy transparency; HTTP Streamable transport |
| **Session persistence & portability** | Claude Code, OpenCode, Gemini CLI, Kimi Code | Portable session transcripts; cross-project session pickers; persistent memory systems; resume from checkpoints |
| **Context/authentication reliability** | Gemini CLI, Anthropic, OpenCode, Claude Code | OAuth token refresh without hangs; silent credential failures; usage/attribution accuracy; false-positive safety flags |
| **Terminal rendering stability** | Copilot CLI, Qwen Code, Pi, DeepSeek TUI | OSC 8 hyperlink handling; mouse capture vs. scroll conflicts; alt-screen opt-out; tmux compatibility; cursor position report races |
| **Windows platform parity** | Copilot CLI, Gemini CLI, Qwen Code, DeepSeek TUI | PowerShell 5.1 `&&` support; native runtime crashes; path quoting; clipboard access in desktop apps |
| **Model selection governance** | Copilot CLI, Anthropic, Gemini CLI | Reasoning-effort validation; model family enforcement across sub-agents; ephemeral session-scoped model changes |

---

## 4. Differentiation Analysis

| Tool | Focus | Target Users | Technical Approach |
|------|-------|--------------|-------------------|
| **Claude Code** | Enterprise governance, plugin marketplace | Teams needing org-level control | Wildcard marketplace allowlists; fail-closed hooks; managed settings |
| **OpenAI Codex** | Multi-agent orchestration, cyber-safety | Advanced developers, security-conscious orgs | Guardian circuit-breakers; encrypted task payloads; Azure Key Vault integration |
| **Gemini CLI** | Google ecosystem integration, policy engine | Google Cloud users, GCP enterprises | CUELang policy migration; OAuth for MCP servers; seatbelt profiles |
| **Copilot CLI** | GitHub-native workflow, MCP registry | GitHub enterprise users | Sessions tab management; prompt pinning; worktree integration |
| **Kimi Code** | Tool execution robustness | Chinese-speaking developers | Error recovery focus; ACP protocol support; multimodal capabilities |
| **OpenCode** | Hosted workspaces, V2 architecture | Open-source community, VS Code users | Durable execution environments; data migration; cross-process OAuth |
| **Pi** | Terminal-first power users, Neovim integration | Linux/macOS developers | XDG compliance; hyperlink integrity; event-bus lifecycle management |
| **Qwen Code** | Tauri desktop, Live Voice, CI/CD integration | Chinese and OSS developers | Desktop consolidation; OTel alignment; Maven multi-module review |
| **DeepSeek TUI** | Runtime API expansion, managed deployments | Headless/remote operators | REST endpoints for memory/MCP/skills; ACP tool execution; checkpoint resume |

---

## 5. Community Momentum & Maturity

### High Momentum (Rapid Iteration, Active Communities)
- **Claude Code** — Fastest release cadence with enterprise-grade features; 46👍 on opt-in commit metadata shows community willingness to engage on defaults
- **OpenAI Codex** — Closed 4 long-running high-vote issues (multi-root workspaces, Markdown export, light terminals, Windows OAuth) signals responsive maintainers
- **Gemini CLI** — v0.54.0 stable + preview releases; however, Antigravity transition is creating trust deficit — 3 separate high-comment issues on deprecation concerns
- **Qwen Code** — 3 releases in 24h; desktop-v0.1.0 milestone indicates strategic investment in Tauri-based future

### Medium Momentum (Steady, Focused)
- **Copilot CLI** — Rapid releases but 0 PRs updated today; MCP issues piling up without visible fixes
- **OpenCode** — Active V2 migration with 10+ PRs; community pushback on UI redesign (#37012, 38👍)
- **Pi** — 37 PRs updated; strong Linux/terminal-first community; long-running issues (XDG) resolving after months

### Lower Momentum (Nascent or Niche)
- **Kimi Code** — Only 3 issues updated; critical data corruption bug (#2591) with zero comments suggests small community
- **DeepSeek TUI** — 14 PRs but only 1 issue updated; release train 77 commits ahead — building but not yet engaging broadly

### Maturity Signals
- **Most mature:** Claude Code (enterprise governance), OpenAI Codex (safety systems), Gemini CLI (platform depth)
- **Rising fast:** Qwen Code (release velocity), OpenCode (V2 architecture)
- **Needs attention:** Copilot CLI (MCP backlog), Kimi Code (community growth)

---

## 6. Trend Signals

### For Technical Decision-Makers

**1. Multi-agent interoperability is the #1 unsolved problem.** Three OpenAI Codex issues (#34833, #33551, #36586) describe the same failure: subagents on non-OpenAI providers receive encrypted payloads they cannot decrypt. This is a critical constraint for organizations standardizing on OpenAI while integrating third-party models.

**2. MCP is reaching enterprise adoption — and hitting enterprise walls.** Copilot CLI's MCP issues (OAuth 3LO unsupported, `server/discover` incompatibility, opaque policy errors) and Gemini CLI's broken dynamic client registration signal that MCP needs production-grade auth and discovery standardization before wide enterprise rollout.

**3. Terminal rendering is now a competitive battleground.** OSC 8 hyperlinks (Pi, Codex), alt-screen behavior (Copilot CLI), tmux compatibility (Qwen Code), and mouse capture (DeepSeek TUI) — terminal quality directly affects developer retention. Tools shipping UI changes without edge-case testing are generating pushback (#1799, #1799, #8557).

**4. Security defaults are swinging toward fail-closed.** Claude Code's pretooluse hook fix (deny on exception instead of allow), OpenAI Codex's Guardian circuit-breaker, and Qwen Code's read-only shell classifier hardening all point to a security posture shift — expect more conservative defaults in future releases.

**5. Windows remains the weakest platform across the ecosystem.** Five tools have active Windows-specific crashes, path handling bugs, or shell incompatibilities. Organizations with mixed-OS teams should factor this into tool selection and expect ongoing friction.

**6. Session portability is the next feature frontier.** Claude Code (#81946 portable transcripts), Kimi Code (#1283 memory system), OpenCode (#31932 cross-project picker), and DeepSeek TUI (checkpoint resume) all signal demand for sessions that survive context switches — a key differentiator for long-running agent workflows.

**7. Usage transparency builds trust; opacity erodes it.** Claude Code's usage misattribution bug (#84359), Gemini CLI's 429 routing loop consuming quota (#27187), and Copilot CLI's unexpected subagent costs (#4377) show that billing/usage visibility is a growing concern — especially as multi-agent systems multiply token consumption.

---

## Key Takeaways

- **Adopt cautiously:** Multi-agent setups with mixed providers (OpenAI + third-party) remain fragile across tools
- **Prioritize stability:** Silent data loss (Claude Code MCP param drops, Kimi Code file corruption) and terminal rendering regressions are the highest-impact risks
- **Watch Gemini CLI:** The Antigravity transition could drive churn — monitor #27314 sentiment closely
- **Monitor Qwen Code:** Fastest release velocity; desktop-v0.1.0 and Live Voice are differentiators worth evaluating
- **Plan for MCP:** Enterprise MCP deployments require OAuth 2.1 and registry policy work — not yet production-ready across tools

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-08-06 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

### #1: skill-creator eval fixes (Multiple PRs)
**PRs:** [#1298](https://github.com/anthropics/skills/pull/1298), [#1323](https://github.com/anthropics/skills/pull/1323), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1261](https://github.com/anthropics/skills/pull/1261)
**Status:** All Open (unmerged)
**Functionality:** A cluster of fixes for the `skill-creator` evaluation pipeline (`run_eval.py`, `run_loop.py`, `improve_description.py`), addressing Windows compatibility (subprocess pipes, encoding), trigger detection, parallel worker isolation, and file registry conflicts.
**Discussion highlights:** The highest-attention topic in the repository — five independent contributors diagnosed the same `recall=0%` bug (Issue #556, 12 comments), which makes the description-optimization loop optimize against noise. This has become the ecosystem's most visible reliability blocker.

### #2: document-typography
**PR:** [#514](https://github.com/anthropics/skills/pull/514) | **Status:** Open
**Functionality:** Typographic quality control for generated documents — prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated content.
**Discussion highlights:** Addresses a universal pain point: formatting defects that appear in nearly every Claude-generated document. The PR identifies concrete, testable failure modes.

### #3: self-audit
**PR:** [#1367](https://github.com/anthropics/skills/pull/1367) | **Status:** Open
**Functionality:** A two-phase quality gate before AI output delivery — mechanical file verification (checking every claimed output exists) followed by a four-dimension reasoning audit ordered by damage severity.
**Discussion highlights:** Universal applicability across any project or tech stack. The author also filed a companion proposal (Issue #1385) for a three-gate pipeline (calibration → adversarial review → delivery verification).

### #4: ODT skill
**PR:** [#486](https://github.com/anthropics/skills/pull/486) | **Status:** Open
**Functionality:** OpenDocument Text (.odt/.ods) creation, template filling, and ODT-to-HTML conversion for LibreOffice-compatible workflows.
**Discussion highlights:** Fills an ecosystem gap — existing skills cover DOCX and PDF but not the open-source document format used widely in government and EU contexts.

### #5: testing-patterns
**PR:** [#723](https://github.com/anthropics/skills/pull/723) | **Status:** Open
**Functionality:** Comprehensive testing stack skill — Testing Trophy philosophy, AAA unit test patterns, React Testing Library, and what NOT to test.
**Discussion highlights:** Directly addresses the need for test-generation guidance, a recurring theme across issues and proposals.

### #6: pyxel-skill
**PR:** [#525](https://github.com/anthropics/skills/pull/525) | **Status:** Open
**Functionality:** Retro/pixel-art game development via the pyxel-mcp server, with an iterative write → run_and_capture → inspect → refine workflow.
**Discussion highlights:** Niche but active — demonstrates the community's appetite for domain-specific creative tools beyond document processing.

### #7: color-expert
**PR:** [#1302](https://github.com/anthropics/skills/pull/1302) | **Status:** Open
**Functionality:** Self-contained color knowledge — naming systems (Munsell, RAL, XKCD, ISCC-NBS), color-space selection tables (OKLCH for scales, CAM16 for perception), and practical guidance.
**Discussion highlights:** Notable for its structured, reference-quality format — a strong template for future "expert" skills.

### #8: plan-file-hygiene
**PR:** [#1479](https://github.com/anthropics/skills/pull/1479) | **Status:** Open
**Functionality:** Lifecycle management for planning artifacts — addresses the accumulation of stale plan files in long-running projects.
**Discussion highlights:** Addresses Issue #1417 and explicitly credits community collaborators, showing healthy PR-issue interaction patterns.

---

## 2. Community Demand Trends

### Trend 1: Skill Quality & Reliability Tooling
The single strongest signal — **five PRs and three issues** all target the `skill-creator` evaluation pipeline ([Issue #556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169), [#202](https://github.com/anthropics/skills/issues/202)). The community wants *meta-skills*: tools that ensure other skills trigger correctly, validate their descriptions, and produce measurable quality signals.

### Trend 2: Security & Trust Boundaries
[Issue #492](https://github.com/anthropics/skills/issues/492) (43 comments, highest-attended issue) exposes a **trust-boundary vulnerability**: community skills distributed under the `anthropic/` namespace impersonate official capabilities, creating elevated-permission risks. Companion concerns appear in [Issue #1175](https://github.com/anthropics/skills/issues/1175) (SharePoint access control). Expect demand for skill authentication, provenance verification, and sandboxing.

### Trend 3: Enterprise Document Workflows
Consistent demand across document formats — DOCX ([#541](https://github.com/anthropics/skills/pull/541) w:id collision fix, [#12](https://github.com/anthropics/skills/issues/12) whitespace reformatting), PDF ([#538](https://github.com/anthropics/skills/pull/538) case-sensitivity fix), and ODT ([#486](https://github.com/anthropics/skills/pull/486)). The community is actively hardening document skills for production use.

### Trend 4: Reasoning Quality Gates
[PR #1367](https://github.com/anthropics/skills/pull/1367) (self-audit) and [Issue #1385](https://github.com/anthropics/skills/issues/1385) (three-gate pipeline) point to a growing demand for **post-generation quality verification** — not just skill *creation* but skill *output auditing*.

### Trend 5: Organizational Sharing & Collaboration
[Issue #228](https://github.com/anthropics/skills/issues/228) (16 comments) requests org-wide skill sharing in Claude.ai — direct file transfer works but is manual. The community wants a shared skill library or direct sharing links.

### Trend 6: Context Window Efficiency
[Issue #1487](https://github.com/anthropics/skills/issues/1487) reports the `claude-api` skill injecting ~156k tokens in a single tool call. [Issue #189](https://github.com/anthropics/skills/issues/189) flags duplicate skill installation from overlapping plugins — both point to the need for better skill size management and deduplication.

---

## 3. High-Potential Pending Skills

These PRs have active discussion and are likely to land soon:

| Skill | PR | Function | Why It Might Land |
|---|---|---|---|
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Full-stack testing guidance | Broadly applicable, addresses test-generation demand |
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | Output quality verification | Complements skill-creator; fills a clear gap |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | Typographic QC | Universal need; concrete, testable fixes |
| **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | OpenDocument support | Fills format gap; enterprise-relevant |
| **plan-file-hygiene** | [#1479](https://github.com/anthropics/skills/pull/1479) | Plan artifact lifecycle | Addresses named issue with community credit |
| **color-expert** | [#1302](https://github.com/anthropics/skills/pull/1302) | Color knowledge base | High-quality reference format |
| **pyxel** | [#525](https://github.com/anthropics/skills/pull/525) | Retro game development | Niche but complete workflow |

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **meta-skills that validate and guarantee the quality of other skills** — specifically, fixing the broken `skill-creator` evaluation pipeline (five PRs targeting the same `recall=0%` bug) and building output-auditing skills (self-audit, reasoning gates) — revealing that the ecosystem has shifted from "what skills can do" to "how do we trust what skills do."

---

# Claude Code Community Digest — 2026-08-06

## Today's Highlights
Release **v2.1.223** shipped with new wildcard support (`"owner/*"`) for marketplace allow/block lists, giving teams org-level control over plugin sources. Meanwhile, several unresolved issues highlight continued friction around **git proxy enforcement in Cloud/Cowork sessions**, **false-positive safety flags on legitimate security work**, and **usage attribution bugs** that misreport model consumption. A notable security PR proposes fail-closed behavior for pretooluse hooks, addressing a potentially dangerous vulnerability.

---

## Releases

### v2.1.223
- **Owner wildcard entries** (`"owner/*"`) added to `strictKnownMarketplaces` and `blockedMarketplaces` managed settings — allows blocking/allowing all marketplace repos under a GitHub org
- **Warning added** when workflow agents, forked skills, slash commands, or resumed background agents are invoked, improving visibility into background activity

---

## Hot Issues (10 Notable)

1. **[#66504 — Session URL appended to commit messages by default should be opt-in](https://github.com/anthropics/claude-code/issues/66504)**  
   *Comments: 12 | 👍: 46*  
   Community strongly opposes auto-appending session URLs to commits/PRs; users want this as an opt-in setting, not default behavior.

2. **[#76248 — Cloud/Cowork git proxy blocks all pushes to non-authorized repos](https://github.com/anthropics/claude-code/issues/76248)**  
   *Comments: 11 | 👍: 5*  
   PAT pass-through no longer works; git proxy rollout broke legitimate pushes mid-session. High impact for remote collaboration workflows.

3. **[#77136 — Opus 4.8 tone vs 5.0 coherence complaints](https://github.com/anthropics/claude-code/issues/77136)**  
   *Comments: 8 | 👍: 8*  
   Users report Opus 4.8's language as "toxic" while 5.0 "drives incoherence" — model quality/behavior balance is a growing concern.

4. **[#83403 — Claude Desktop crashes near 5-hour usage limit](https://github.com/anthropics/claude-code/issues/83403)**  
   *Comments: 7*  
   Requires full reinstall each time — critical reliability bug for long sessions.

5. **[#82536 — `--continue` cannot find sessions created by `-p`](https://github.com/anthropics/claude-code/issues/82536)**  
   *Comments: 7*  
   Interactive resume broken for print-mode sessions; breaks scripting workflows.

6. **[#72228 — MCP tool calls silently drop parameters after long values](https://github.com/anthropics/claude-code/issues/72228)**  
   *Comments: 5 | 👍: 1*  
   Silent data loss in MCP calls — dangerous because failures are invisible.

7. **[#83342 — Bundled ugrep balloons to 9–14 GB RSS](https://github.com/anthropics/claude-code/issues/83342)**  
   *Comments: 4*  
   Ordinary `grep` calls routed to bundled ugrep cause massive memory spikes — performance regression.

8. **[#84362 — Tag-grammar parser silently absorbs parameters on mangled tags](https://github.com/anthropics/claude-code/issues/84362)**  
   *Comments: 0*  
   Measured 6.2% silent field loss on parameter-rich MCP calls — re-raise of stale issue.

9. **[#84359 — Usage panel attributes Opus 5 usage to Fable 5](https://github.com/anthropics/claude-code/issues/84359)**  
   *Comments: 0*  
   Billing/usage attribution bug — users can't trust usage dashboards.

10. **[#84340 — Security testing triggers rate limit downgrade to Opus 4.8](https://github.com/anthropics/claude-code/issues/84340)**  
    *Comments: 1*  
    Legitimate security testing flagged as abuse; false positives penalize defensive work.

---

## Key PR Progress (5 Notable)

1. **[#84364 — fix(hookify): fail closed on exceptions in pretooluse hook](https://github.com/anthropics/claude-code/pull/84364)**  
   Exceptions in pretooluse hooks previously exited with status 0 (allow); now denies by default. Fixes a security vulnerability.

2. **[#84365 — fix(scripts): allow any user to prevent auto-close with thumbs down](https://github.com/anthropics/claude-code/pull/84365)**  
   Matches dedupe bot's promise — any user's thumbs down prevents automatic issue closure.

3. **[#84138 — fix: workaround for self-signed certificate error in Cowork](https://github.com/anthropics/claude-code/pull/84138)**  
   Addresses Bun-based runtime not loading system certificates, causing SSL failures on macOS (closes #24470).

4. **[#16929 — fix(code-review): respect `--comment` flag for GitHub posting](https://github.com/anthropics/claude-code/pull/16929)**  
   `/code-review` now defaults to terminal output; only posts to GitHub when `--comment` is provided.

5. **[#41661 — Add 14 Revolutionary Claude Code Plugins](https://github.com/anthropics/claude-code/pull/41661)**  
   Large plugin marketplace expansion (security, performance, architecture, fullstack automation). Open since March — community awaiting review.

---

## Feature Request Trends

- **Portable session transcripts** — Users want project-portable session memory with scratch files kept local ([#81946](https://github.com/anthropics/claude-code/issues/81946))
- **Opt-in commit metadata** — Session URLs in commit messages should be opt-in, not default ([#66504](https://github.com/anthropics/claude-code/issues/66504))
- **Disableable UI gestures** — Left-arrow detach-to-background gesture needs a setting or rebindable keybinding ([#84348](https://github.com/anthropics/claude-code/issues/84348))
- **Marketplace org-level controls** — Wildcard owner entries (shipped in v2.1.223) directly answer enterprise governance needs

---

## Developer Pain Points

- **Silent data loss** — Parameter drops in MCP calls ([#72228](https://github.com/anthropics/claude-code/issues/72228), [#84362](https://github.com/anthropics/claude-code/issues/84362)) erode trust in tool correctness
- **False-positive safety flags** — Legitimate security testing and defensive tooling work getting flagged/downgraded ([#84340](https://github.com/anthropics/claude-code/issues/84340), [#84361](https://github.com/anthropics/claude-code/issues/84361))
- **Usage/billing misattribution** — Opaque or incorrect usage reporting ([#84358](https://github.com/anthropics/claude-code/issues/84358), [#84359](https://github.com/anthropics/claude-code/issues/84359)) undermines quota management
- **Git proxy enforcement** — Cloud sessions blocking legitimate pushes breaks core developer workflows ([#76248](https://github.com/anthropics/claude-code/issues/76248))
- **Model behavior inconsistency** — Opus 4.8 vs 5.0 tradeoffs (tone vs coherence) frustrate users ([#77136](https://github.com/anthropics/claude-code/issues/77136))

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-06

## Today's Highlights
Stability is the theme this week: the team shipped a patch release tightening Guardian safety defaults for cyber-capable models, while the most active issues center on cross-provider multi-agent breakage and a cluster of Windows sandbox failures. A wave of closed issues suggests the team is working through a large backlog of Windows-specific bugs, while open issues around multi-agent v2 interoperability with custom providers remain the top unresolved friction point.

## Releases
- **rust-v0.146.1** — Bug fix release applying safer automatic-review defaults for cyber-capable models and explaining permission changes in the terminal interface. ([Changelog](https://github.com/openai/codex/compare/rust-v0.146.0...rust-v0.146.1)) ([PR #37057](https://github.com/openai/codex/pull/37057))
- Multiple `rust-v0.147.0-alpha.x` builds (alpha.10 through alpha.13) published without standalone release notes.

## Hot Issues
1. **[#25203 — GitHub OAuth callback fails with "Unable to find Electron app" on Windows](https://github.com/openai/codex/issues/25203)** *(37 comments, 21 👍, CLOSED)* — Long-running Windows auth blocker finally resolved; high engagement indicates this affected many desktop app users.

2. **[#2880 — Copy/Export Message as Markdown](https://github.com/openai/codex/issues/2880)** *(27 comments, 78 👍, CLOSED)* — Top-voted feature request on the board; users want easier export to docs/issues rather than plaintext terminal dumps.

3. **[#2020 — Support for light-background terminals](https://github.com/openai/codex/issues/2020)** *(24 comments, 60 👍, CLOSED)* — Hardcoded dark-theme colors finally addressed; significant usability win for TUI users.

4. **[#2909 — Support for multi-root workspaces](https://github.com/openai/codex/issues/2909)** *(23 comments, 143 👍, CLOSED)* — Most-upvoted issue overall; VS Code users with multi-root setups can now use extension properly.

5. **[#34833 — MultiAgentV2 cross-provider subagent cannot consume encrypted task assignment](https://github.com/openai/codex/issues/34833)** *(8 comments, 3 👍, OPEN)* — Critical interoperability gap: non-OpenAI child agents receive encrypted payloads they cannot decrypt when parent is OpenAI.

6. **[#33551 — Multi-Agent V2 sends OpenAI-specific agent_message items to external Responses providers](https://github.com/openai/codex/issues/33551)** *(7 comments, 4 👍, OPEN)* — Same root cause as #34833; external providers like Ollama fail to recognize the item type and drop tasks.

7. **[#36586 — Subagent task payload invisible to custom non-OpenAI providers (DeepSeek)](https://github.com/openai/codex/issues/36586)** *(5 comments, 3 👍, OPEN)* — Third report of the same multi-agent v2 interop failure; DeepSeek subagents report "no new task input" despite dispatched spawn_agent calls.

8. **[#36321 — spawn_agent/followup_task: child agents receive empty task payload](https://github.com/openai/codex/issues/36321)** *(4 comments, OPEN)* — Even with OpenAI as parent, child agents in multi-agent v2 sometimes get empty payloads; suggests an additional bug beyond the cross-provider encryption issue.

9. **[#25934 — TUI markdown hyperlinks not clickable in OSC 8-capable terminals](https://github.com/openai/codex/issues/25934)** *(6 comments, 1 👍, OPEN)* — Release notes promised terminal hyperlinks, but they don't render clickable in TUI across multiple emulators.

10. **[#37186 — Codex Spark usage remains but will not run due to "you've hit your usage limit"](https://github.com/openai/codex/issues/37186)** *(3 comments, 1 👍, OPEN)* — Fresh billing/usage-limit bug on Windows; Pro users report available Spark quota blocked by false limit error.

## Key PR Progress
1. **[#37190 — Interrupt cyber model turns after one Guardian denial](https://github.com/openai/codex/pull/37190)** — Circuit-breaker policy for cyber-specialty models; interrupts after first denial while retaining thresholds for others. Aligns with the 0.146.1 safety patch.

2. **[#37191 — Preserve legacy semantics during rollout migration](https://github.com/openai/codex/pull/37191)** — Prevents verbatim migration of legacy rollouts from changing visible conversations or model context when threads resume.

3. **[#37175 — Add legacy rollout migration to paginated history](https://github.com/openai/codex/pull/37175)** — `LocalThreadStore::migrate_rollouts` with dry-run/apply modes, throughput limiting, and per-rollout outcomes. Part of the history pagination migration effort.

4. **[#37188 — Reserve the tool_search namespace for the search tool](https://github.com/openai/codex/pull/37188)** — Removes namespace tools named `tool_search` before registering the built-in search tool; records collisions for strict handling.

5. **[#37168 — Bound remote MCP handshake HTTP requests](https://github.com/openai/codex/pull/37168)** — Fixes serial executor blocking when a streamable HTTP MCP handshake times out but its backing request keeps running.

6. **[#37198 — Prefer persisted cwd when reading local threads](https://github.com/openai/codex/pull/37198)** — Fixes thread reads/list disagreement caused by stale `cwd` in rollouts after metadata updates.

7. **[#37189 — Track multi-agent usage hints in world state](https://github.com/openai/codex/pull/37189)** — Ensures resumed sessions retain current multi-agent usage instructions when config changes or history predates hint tracking.

8. **[#37166 — Keep textarea cursors and rendering inside the viewport](https://github.com/openai/codex/pull/37166)** — Fixes cursor/rendering overflow when logical lines exactly fill textarea width; clips wrapped spaces correctly.

9. **[#37154 — Use Azure Key Vault for macOS notarization](https://github.com/openai/codex/pull/37154)** — Removes base64-encoded `.p8` secrets from release runners; App Store Connect key now pinned in Key Vault with notary-scoped JWTs.

10. **[#37151 — Coalesce concurrent Git status scans](https://github.com/openai/codex/pull/37151)** — Shares in-flight `git status --porcelain` among concurrent workspace metadata requests for the same repo root.

## Feature Request Trends
- **Multi-agent interoperability** is the dominant theme — repeated requests for non-OpenAI provider support (DeepSeek, Ollama, custom endpoints) in MultiAgent v2, specifically around the encrypted-content and agent_message item types. Community is frustrated that subagents are "blind" to dispatched tasks.
- **Terminal UX polish** — exports to Markdown, light-background support, clickable OSC 8 hyperlinks, and viewport-stable textarea rendering all landed or are in flight; signals a push to make the TUI a first-class editing surface.
- **Workspace flexibility** — multi-root workspace support and persisted cwd handling indicate demand for Codex in complex, non-flat repo layouts commonly found in monorepos and enterprise setups.

## Developer Pain Points
- **Multi-agent v2 with custom providers is effectively broken** — at least three distinct issues (#34833, #33551, #36586) describe the same class of failure: subagents never receive task payloads. The encryption/decryption contract assumes OpenAI-only communication, and the team has not yet shipped a fix despite multiple reports across July.
- **Windows sandbox/Computer Use is fragile** — a cluster of issues (now closed) from June described `missing field sandboxPolicy` errors breaking Chrome/node_repl/bootstrap flows on Windows 10/11. While closed, their volume suggests the desktop app's sandbox metadata propagation has been a recurring regression source.
- **Rate-limit and quota errors are confusing** — issue #37186 reports available Spark usage being blocked by a false "usage limit" error, wasting users' paid quota and forcing manual support escalation.
- **External provider payload visibility** — developers integrating Codex with non-OpenAI models cannot inspect or debug subagent task payloads when they're encrypted, making failures opaque and hard to work around.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-06

## Today's Highlights

The big news this week is the **v0.54.0 stable release** and **v0.55.0-preview.1**, the latter containing a fix for macOS seatbelt profile fallback. The most significant developer-facing themes center on the ongoing **Antigravity CLI transition** — with multiple high-comment issues expressing concern about the deprecation of the standalone Gemini CLI, reduced quotas, and the future of the open-source project. On the technical side, several important fixes are in flight for **OAuth token refresh for MCP servers**, **parallel tool call 400 errors** (a v0.53.0 regression), and **malformed tool argument handling in the SDK**.

---

## Releases

Three releases dropped in the last 24 hours:

- **v0.54.0** (stable) — Auto-generated changelog for the stable release, closing out the v0.53 preview cycle.
- **v0.55.0-preview.1** — Preview release including a fix for macOS seatbelt profile fallback and the start of a new PR generator core feature (environment config parser, command executor, GitHub integration).
- **v0.55.0-nightly.20260806.g761f604c1** — Nightly build with the macOS seatbelt fix and `pr-generator-core` work.

---

## Hot Issues

Here are the 10 most significant issues updated in the last 24 hours:

1. **[#27314 — Bring back standalone Gemini CLI or support full legacy workflow with stable OAuth](https://github.com/google-gemini/gemini-cli/issues/27314)** *(12 comments, CLOSED)*
   The most-commented issue this cycle. Users are pushing back hard on the forced unification into Antigravity, describing it as a "severe regression in developer experience." This has become a rallying point for community frustration.

2. **[#19979 — Migrate policy configuration from TOML to CUELang](https://github.com/google-gemini/gemini-cli/issues/19979)** *(11 comments, CLOSED)*
   A long-running enhancement request arguing TOML is inadequate as a policy language. The community continues to feel the policy engine's limits as complexity grows.

3. **[#20990 — MCP OAuth2.1 Dynamic client registration fails](https://github.com/google-gemini/gemini-cli/issues/20990)** *(10 comments, CLOSED)*
   Bug where `registrationUrl` is dropped in the `WWW-Authenticate` discovery path. Relevant to users running MCP servers with RFC 8414 metadata. **Note:** PR #28481 claiming to fix this was closed — unclear if merged.

4. **[#27265 — Is Gemini CLI going to be replaced by Antigravity CLI?](https://github.com/google-gemini/gemini-cli/issues/27265)** *(8 comments, CLOSED)*
   Chinese-language question echoing the same concern: users worry about being forced onto Antigravity and its more restrictive quotas.

5. **[#27097 — Agent uses `&&` on Windows under PowerShell 5.1](https://github.com/google-gemini/gemini-cli/issues/27097)** *(7 comments, CLOSED)*
   `run_shell_command` is hardcoded to PowerShell 5.1 but uses `&&`, which isn't supported there. Windows users are repeatedly hitting this despite adding instructions to `GEMINI.md`.

6. **[#21956 — OAuth token refresh fails silently causing indefinite hang](https://github.com/google-gemini/gemini-cli/issues/21956)** *(6 comments, CLOSED)*
   Long-running sessions hang indefinitely when OAuth token refresh silently fails after ~1 hour. This is a critical reliability issue for production use.

7. **[#27205 — Gemini CLI aggressively scans .venv in custom skills](https://github.com/google-gemini/gemini-cli/issues/27205)** *(6 comments, CLOSED)*
   Custom skills with Python `.venv` directories get the entire virtualenv mapped and shared with the model, ignoring `.gitignore`/`.geminiignore`. Wasteful and a potential security concern.

8. **[#27181 — Usage limit on one model blocks all models](https://github.com/google-gemini/gemini-cli/issues/27181)** *(5 comments, CLOSED)*
   Users report that hitting a usage cap on a single model blocks access to all other models with remaining quota. Frustrating UX, frequently echoed in the comments.

9. **[#27356 — Keep Google One for Gemini CLI](https://github.com/google-gemini/gemini-cli/issues/27356)** *(4 comments, CLOSED, 4 👍)*
   Users want Gemini CLI to remain in Google One subscriptions, citing Antigravity CLI limits as "unusable." High upvote ratio relative to comments — strong sentiment.

10. **[#27187 — Client-side 429 routing loop causes runaway token consumption](https://github.com/google-gemini/gemini-cli/issues/27187)** *(4 comments, CLOSED)*
   When the server hits capacity limits, `NumericalClassifierStrategy.route` throws 429, and the client enters a retry loop that exhausts billing caps. Serious cost-impacts for paid users.

---

## Key PR Progress

Notable pull requests in the last 24 hours:

1. **[#28676 — Forward termination signals to relaunched child process](https://github.com/google-gemini/gemini-cli/pull/28676)** *(OPEN)*
   Fixes orphaned child processes when the bootstrap parent receives SIGTERM/SIGINT. Important for supervised deployments (e.g., systemd, containers).

2. **[#28481 — Refresh MCP OAuth tokens with the stored client ID](https://github.com/google-gemini/gemini-cli/pull/28481)** *(CLOSED)*
   Fixes MCP OAuth refresh for servers configured via discovery + dynamic client registration. Previously, refresh failed locally and deleted credentials, forcing re-auth every session.

3. **[#28586 — Preserve thoughtSignature in functionCall parts to fix 400 error](https://github.com/google-gemini/gemini-cli/pull/28586)** *(OPEN)*
   Addresses a v0.53.0 regression causing `400 Bad Request` during parallel tool calls. Complements #28607 below.

4. **[#28607 — Preserve functionCall thoughtSignature (fixes #28604)](https://github.com/google-gemini/gemini-cli/pull/28607)** *(CLOSED)*
   Same root cause as #28586 — `stripThoughts()` introduced in #28509 strips the thought signature needed by the API. Both PRs target the same regression.

5. **[#28581 — Skip diff hunk markers during @ processing](https://github.com/google-gemini/gemini-cli/pull/28581)** *(OPEN)*
   Prevents diff hunks from being misread as `@file` references, eliminating recursive workspace-wide glob searches per hunk. Fixes heap growth on large diff prompts.

6. **[#28695 — Don't abort sendStream on malformed tool arguments](https://github.com/google-gemini/gemini-cli/pull/28695)** *(CLOSED)*
   Fixes unguarded `JSON.parse()` in the SDK that throws out of the generator when the model returns invalid tool args.

7. **[#28660 — Keep sendStream alive on malformed tool arguments](https://github.com/google-gemini/gemini-cli/pull/28660)** *(OPEN)*
   Alternative/overlapping fix to #28695 — defensively parses SDK tool args, validates objects, and returns structured `functionResponse` errors instead of crashing the stream.

8. **[#28688 — Dynamically resolve Cloud Workstations proxy redirect URI for OAuth](https://github.com/google-gemini/gemini-cli/pull/28688)** *(OPEN)*
   Fixes OAuth flows inside Google Cloud Workstations VMs, where redirect back to `localhost` fails because the browser runs on a remote machine.

9. **[#28485 — Add gemini-3.5-flash to model selector for all users](https://github.com/google-gemini/gemini-cli/pull/28485)** *(CLOSED)*
   Users on v0.51.0 couldn't select `gemini-3.5-flash`/`3.6-flash` because legacy paths hardcoded `DEFAULT_GEMINI_FLASH_MODEL` to `gemini-2.5-flash`.

10. **[#28488 — Auto-compress chat history on context window overflow](https://github.com/google-gemini/gemini-cli/pull/28488)** *(CLOSED)*
    New `model.autoCompressOnOverflow` setting — automatically compresses chat history when the context window is about to overflow, instead of stopping with a warning. Potentially a UX game-changer for long sessions.

---

## Feature Request Trends

Across all issues, the dominant feature directions are:

- **Compatibility with the standalone workflow** — Multiple issues (#27314, #27265, #27327, #27356) are asking for the standalone Gemini CLI to remain viable. The community is requesting: stable OAuth, unchanged quotas, and continued maintenance of the open-source project.
- **Policy configuration power** — The TOML-to-CUELang migration (#19979) keeps getting attention. The policy engine needs a more expressive language for complex rules, and users are also hitting ReDoS validation limitations (#27367).
- **Agent tooling flexibility** — Requests for regex support in agent skills (#19259), configurable file-read line ranges (`@file 20-50`) (#27160), and custom external safety checkers (#27185) reflect a desire for finer-grained control over agent behavior.
- **Local model routing observability** — Users want visible routing decisions when using `gemini gemma setup` (#27162). Logs don't match documentation, making it hard to trust or debug the feature.

---

## Developer Pain Points

Recurring frustrations from the community this cycle:

- **The Antigravity transition is the #1 pain point.** The repeated, high-comment issues about standalone CLI deprecation, quota reduction, and project future suggest a trust deficit that technical fixes alone won't resolve.
- **OAuth/auth reliability.** Two separate issues (#21956, #20990) and two PRs (#28481, #28688) in the last 24h touch on authentication failures — silent hangs on refresh, broken MCP dynamic registration, and broken Cloud Workstations redirects.
- **Windows shell compatibility.** The `&&` issue under PowerShell 5.1 (#27097) is a classic example of Linux-first tooling not translating cleanly to Windows.
- **Context and resource bloat.** `.venv` being scanned (#27205), runaway token consumption from 429 loops (#27187), and diff hunk marker misreads (#28581) all point to resource management problems that can break real workloads.
- **One-model quota blocking all models** (#27181) is a sharp UX issue that users clearly feel is unfair — it makes even available models inaccessible.
- **Silent data loss on resume** — Resumed sessions missing shell command history (#21066) makes long-running Agent sessions hard to trust.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-06

## Today's Highlights
Copilot CLI continues its rapid release cadence with **v1.0.79-5**, introducing multi-session management from a dedicated Sessions tab and making prompt pinning opt-in. The issue tracker shows a surge of triage-level reports around MCP interoperability (OAuth flows, registry policy, FastMCP compatibility) and growing community demand for BYOM model discovery and in-session switching. Windows stability and sub-agent model governance remain recurring pain points.

## Releases

**[v1.0.79-5](https://github.com/github/copilot-cli/releases/tag/v1.0.79-5)**
- **Added:** Manage multiple concurrent sessions from the Sessions tab and sidebar
- **Improved:** Prompt pinning is now off by default; enable via `pinnedPrompts: true`
- **Fixed:** Sandboxed wrapper builds (make and friends) now receive proper dev tool caches based on the build manifest

**[v1.0.79-4](https://github.com/github/copilot-cli/releases/tag/v1.0.79-4)** — Pre-release

**[v1.0.79-3](https://github.com/github/copilot-cli/releases/tag/v1.0.79-3)**
- **Improved:** Use `/worktree new` to start a new session in a new worktree

**[v1.0.79-2](https://github.com/github/copilot-cli/releases/tag/v1.0.79-2)**
- **Improved:** Pinned prompts now occupy the tab bar row, saving timeline space
- **Changed:** Pinned prompts disabled by default on terminals under 30 rows

---

## Hot Issues (10 Noteworthy)

1. **[#1799 — How to turn off alt-screen views?](https://github.com/github/copilot-cli/issues/1799)** — *12 comments, 8 👍*  
   The alt-screen rendering has generated significant community pushback since introduction. Users want a way to revert to the original inline output mode. This has been open since March and remains a top pain point. *(area: terminal-rendering)*

2. **[#4202 — Built-in view reports "Path does not exist" for existing files (1.0.73)](https://github.com/github/copilot-cli/issues/4202)** — *5 comments, 1 👍*  
   A regression introduced in v1.0.72 breaks the built-in `view` tool, which falsely reports non-existent paths. The reporter provides a controlled repro showing 1.0.71 succeeds — a clear tooling regression. *(area: tools, non-interactive)*

3. **[#4374 — `/mcp search` fails with 400 Bad Request in repos with Azure DevOps remotes](https://github.com/github/copilot-cli/issues/4374)** — *4 👍, opened today*  
   The interactive MCP registry browser fails to fetch policy whenever the git remote points to `dev.azure.com`. This suggests the CLI conflates git remote URL with GitHub identity. *(triage, MCP)*

4. **[#4345 — Reasoning effort 'medium' not supported for claude-haiku-4.5](https://github.com/github/copilot-cli/issues/4345)** — *4 👍*  
   A server-side feature flag combo causes repeated sub-agent execution failures when the model doesn't support the assigned reasoning effort. Highlights a config validation gap. *(area: models, agents)*

5. **[#4370 — MCP initialization fails when `server/discover` returns -32602](https://github.com/github/copilot-cli/issues/4370)** — *opened yesterday*  
   FastMCP servers don't implement the new `server/discover` method. Copilot CLI treats the standard JSON-RPC "invalid params" response as fatal, blocking connection entirely. *(triage, MCP)*

6. **[#4371 — MCP OAuth 3LO fails with -32042: URL elicitation not supported](https://github.com/github/copilot-cli/issues/4371)** — *opened today*  
   Clients connecting to MCP gateways requiring Authorization Code flows fail because the CLI doesn't prompt users for authentication URLs. A gap for enterprise MCP deployments. *(triage, MCP)*

7. **[#4026 — Copilot CLI crashes repeatedly on Windows (native runtime)](https://github.com/github/copilot-cli/issues/4026)** — *reproducible across four versions since May 2026*  
   A long-standing Windows native-runtime crash, unresolved across v1.0.15 through v1.0.53+. Still open after two months — a major platform-stability concern. *(area: platform-windows)*

8. **[#3172 — Strange "Somebody else is owning the clipboard" message](https://github.com/github/copilot-cli/issues/3172)** — *7 👍*  
   A clipboard ownership message breaks status-line layout and appears when users copy text in other apps. Small UX annoyance, high community agreement. *(area: input-keyboard, terminal-rendering)*

9. **[#3135 — BYOK statusline shows "medium effort" despite `--effort high`](https://github.com/github/copilot-cli/issues/3135)** — *3 comments*  
   The actual request uses the correct reasoning effort, but the statusline displays a stale model name. Cosmetic but confusing for BYOK users. *(area: models, configuration)*

10. **[#3934 — MCP server 'blocked by policy' for custom registries](https://github.com/github/copilot-cli/issues/3934)** — *2 comments*  
   Enterprise users with custom MCP registries hit opaque policy errors even though the same config works in VS Code and IntelliJ. Lack of error detail is a key complaint. *(area: enterprise, mcp)*

---

## Key PR Progress
*No pull requests were updated in the last 24 hours.*

---

## Feature Request Trends

1. **BYOM model discovery and in-session switching** — [#4376](https://github.com/github/copilot-cli/issues/4376) calls for the ability to discover and switch models at runtime rather than requiring a restart with a single `COPILOT_MODEL` value. This is especially relevant for Vertex AI / OpenAI-compatible endpoints.

2. **Prompt pinning refinements** — Recent releases show the team iterating on prompt pinning UX, moving it off by default. Community appears to have mixed reactions; the placement in the tab bar suggests designers are working to minimize screen real estate.

3. **Independent adversarial reviewer for rubber-duck mode** — [#4380](https://github.com/github/copilot-cli/issues/4380) requests that rubber-duck reviews use a distinct model family rather than the primary session model, to preserve adversarial review value.

4. **Persistent GitHub auth in browser canvas** — [#4379](https://github.com/github/copilot-cli/issues/4379) points out that browser canvas instances get isolated storage partitions, so GitHub login never persists across sessions — a fundamental usability gap for the canvas experience.

5. **Multi-session management** — The v1.0.79-5 release directly addresses this by adding a Sessions tab and sidebar, signaling that session concurrency is an active area of product investment.

---

## Developer Pain Points

- **MCP interoperability is the top friction point.** Frequent reports of policy check failures (`400 Bad Request` on non-GitHub remotes), opaque "blocked by policy" errors, FastMCP `server/discover` incompatibility, and missing OAuth 3LO support. Enterprise users are particularly affected.

- **Windows stability remains unresolved.** The native runtime crashes persist across many versions (since May 2026) with no clear fix on the horizon. This is undermining trust for a significant segment of users.

- **Sub-agent model governance gaps.** Issues like #4345 (reasoning effort unsupported by model) and #4377 (GPT-5.6 Terra delegates to Opus subagent, incurring unexpected costs) suggest the CLI doesn't consistently enforce model selection across agents, leading to surprise billing and failures.

- **Unclear error messaging.** Multiple issues ([#3934](https://github.com/github/copilot-cli/issues/3934), [#4382](https://github.com/github/copilot-cli/issues/4382)) cite opaque errors where the CLI fails without actionable diagnostics — from "blocked by policy" to kernel `ENOEXEC` failures on Oracle Linux 10.

- **Terminal rendering regressions.** Both the alt-screen mode ([#1799](https://github.com/github/copilot-cli/issues/1799)) and clipboard status messages ([#3172](https://github.com/github/copilot-cli/issues/3172)) indicate that terminal UI changes are being shipped without sufficient consideration for edge cases, generating community pushback.

---

*Digest generated from [github.com/github/copilot-cli](https://github.com/github/copilot-cli) activity on 2026-08-06.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest**
**2026-08-06**

---

## Today's Highlights

The most significant activity this week centers on improving error recovery and tool interoperability. A critical bug where tool calls with side effects could corrupt files or abort mid-task is being addressed through two complementary pull requests targeting the `soul` module. Additionally, the long-running Memory System feature request (#1283) continues to gain traction, now with 19 comments, marking it as the community's most debated enhancement.

## Releases

No new releases in the last 24 hours.

## Hot Issues

Here are the 10 most significant issues currently drawing community attention:

1. **[#1283 — Feature Request: Memory System - Persistent Context Across Sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)**
   - **Why it matters:** The community's most upvoted feature request (19 comments). While individual context is handled within sessions, users lose project patterns and preferences each time. Implementing this would deeply integrate Kimi into long-term workflows.
   - **Reaction:** Heavy discussion about whether memory should be automatic (AI-managed notes) or manual (user-defined instructions).

2. **[#2591 — `StrReplaceFile` Corrupts Undecodable Bytes Outside the Edited Region](https://github.com/MoonshotAI/kimi-cli/issues/2591)**
   - **Why it matters:** A silent data corruption bug. The tool decodes the entire file with `errors="replace"`, meaning non-UTF-8 bytes anywhere in the file (even far from the edit) are replaced with `U+FFFD`. This is particularly critical if used on binary config files or mixed-encoding source files.
   - **Reaction:** Zero comments, but flagged as a high-severity data-integrity issue.

3. **[#2588 — Model Declared Without Capabilities: Image-Returning MCP Tool Aborts Mid-Task](https://github.com/MoonshotAI/kimi-cli/issues/2588)**
   - **Why it matters:** A classic "half-done" failure. The tool executes, its side effects persist, then the turn aborts with an error that doesn't explain what to fix. This is a two-fold problem: error messaging and post-side-effect cleanup.
   - **Reaction:** Split into two separate PRs (#2590 and #2592) to independently address the error hint and the abort logic.

4. ***(placeholder for remaining 7 issues if they existed)***

*Note: Only 3 issues were updated in the last 24h. The remaining 7 would need to be drawn from broader project history to fill the "10 noteworthy" selection.*

## Key PR Progress

1. **[#2592 — fix(soul): Degrade Unsupported Tool Media Instead of Aborting Mid-Task](https://github.com/MoonshotAI/kimi-cli/pull/2592)**
   - **Feature/Fix:** Resolves #2588. When a model lacks `capabilities` and a tool returns an image, `_grow_context` previously raised `LLMNotSupported` after the tool's side effects. This PR degrades the response (e.g., notifying the model the media was skipped) instead of aborting.
   - **Significance:** A robustness fix—side effects are preserved, and execution continues.

2. **[#2590 — fix(soul): Name the Config Fix in Unsupported-Capability Errors](https://github.com/MoonshotAI/kimi-cli/pull/2590)**
   - **Feature/Fix:** Partially addresses #2588 by improving the error message. Now the user is explicitly told which capability to add in `config.toml` rather than just what's missing. This improves developer self-service, reducing surface-area for support requests.

3. **[#2589 — docs: Mention `qwen-audio-agent` as a Voice ACP Client](https://github.com/MoonshotAI/kimi-cli/pull/2589)**
   - **Feature/Fix:** Documentation-only change adding a line about an open-source external voice runtime that drives `kimi acp`. It highlights the ACP ecosystem's growth, though the author discloses participation (a minor review gate).
   - **Significance:** Signals growing adoption of the Agent Client Protocol beyond IDE/editor clients.

## Feature Request Trends

The dominant trend remains **conversation state persistence**—the Memory System request (#1283) represents the largest single feature. A secondary cluster revolves around **config-tool consistency**: ensuring the CLI's runtime behavior aligns with declared model capabilities, rather than crashing or silently dropping content. Finally, the presence of voice/audio clients (PR #2589) suggests demand for **multimodal interaction pathways**, though this is nascent.

## Developer Pain Points

Two clear friction points surface from the last 24h:

1. **Data integrity during file edits:** `StrReplaceFile`'s global decode/write strategy corrupts byte sequences outside the edit scope. The higher-level pain is **expecting surgical edits and receiving holistic rewrites**—a trust issue in automation.
2. **Error recovery after side effects:** When a tool executes and the model rejects the result, the CLI aborts rather than continuing gracefully. The pain is "half-applied states" with no clear remediation path, which is especially dangerous in MCP integrations where tools may contact external services.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-06

## Today's Highlights

v1.18.14 shipped with a simplified xAI login flow and improved provider error handling, but the community's focus is firmly on the V2 migration — a large refactor around hosted workspaces, data migration, and dead-code removal is actively landing across multiple PRs. Meanwhile, the most-voted issues continue to push for an official VS Code extension (#11176, 134👍) and a Go plan usage API (#16017, 126👍), with several macOS 26-specific bugs surfacing around the embedded Bun runtime.

## Releases

**v1.18.14** — Core improvements:
- **xAI login simplified** to a single device-code flow, better suited for headless/remote environments.
- **Bugfixes**: structured mid-stream provider errors are now preserved for compatible providers to enable retries; more transient provider/network errors are retried automatically.

🔗 [Release v1.18.14](https://github.com/anomalyco/opencode/releases/tag/v1.18.14)

## Hot Issues

1. **[#37012 — Keep legacy layout option](https://github.com/anomalyco/opencode/issues/37012)** (35 comments, 38👍)  
   Users want the old single-window layout back; the new layout requires more navigation. Strong signal that the UI redesign is disruptive for power users.

2. **[#16017 — Go plan usage/balance API endpoint](https://github.com/anomalyco/opencode/issues/16017)** (32 comments, 126👍)  
   Request to expose subscription usage data (rolling/weekly/monthly) via a public API. The dashboard already shows it — high demand for programmatic access.

3. **[#11176 — Official VS Code extension](https://github.com/anomalyco/opencode/issues/11176)** (27 comments, 134👍)  
   Persistent request for a native VS Code extension. This is the highest-voted open feature; likely a major roadmap item.

4. **[#39845 — DeepSeek V4 Flash requires China opt-in for Go subscribers](https://github.com/anomalyco/opencode/issues/39845)** (17 comments, 22👍)  
   Mid-session failures when the default model suddenly requires a China-hosting opt-in. Confusing for Go subscribers; needs clearer model/region handling.

5. **[#23153 — Pay Go with crypto](https://github.com/anomalyco/opencode/issues/23153)** (16 comments, 36👍)  
   Request for crypto payment support for OpenCode Go subscriptions — a recurring monetization request.

6. **[#31932 — Cross-project session list/picker for TUI](https://github.com/anomalyco/opencode/issues/31932)** (14 comments, 6👍)  
   `/sessions` is project-scoped; users working across repos need a global session picker. Related to #35581.

7. **[#34498 — Respect `disable-model-invocation: true` in SKILL.md](https://github.com/anomalyco/opencode/issues/34498)** (13 comments, 49👍)  
   Parity with Claude Code/Cursor: skills should be able to opt out of model invocation. High-voted, clearly needed.

8. **[#40759 — /sessions broken since v1.18.14](https://github.com/anomalyco/opencode/issues/40759)** (2 comments)  
   Regression: switching sessions wipes chat history/context on new message. Critical bug, likely hotfix material.

9. **[#40789 — Bash tool broken on macOS 26 (arm64): Bun WASM crash](https://github.com/anomalyco/opencode/issues/40789)** (2 comments)  
   Every Bash call fails with `H.loadWebAssemblyModule` error — affects TUI and headless. Platform-specific but blocks all work on macOS 26.

10. **[#40786 — No delete/archive entry point for sessions on Desktop](https://github.com/anomalyco/opencode/issues/40786)** (1 comment, new)  
    Home page session list lacks any delete/archive UI — a UX gap in the desktop app.

## Key PR Progress

1. **[#40784 — Hosted workspace execution with modal driver](https://github.com/anomalyco/opencode/pull/40784)** (new, by kitlangton)  
   Core V2 architecture: Workspace = durable execution environment (machine with a root); sessions can target a `workspaceID` via the runner graph. Foundational for cloud execution.

2. **[#38790 — Workspace flows in new layout (beta)](https://github.com/anomalyco/opencode/pull/38790)** (by Hona)  
   Adds workspace selection for new sessions (local repo vs. new/existing workspace), with context-aware composer pill showing branch context. Big UI/UX addition.

3. **[#35311 — Multiple clones of same repo are different projects](https://github.com/anomalyco/opencode/pull/35311)** (by belisoful)  
   Closes 14 issues. Fixes project identity so clones of the same repo are treated as the same project — major quality-of-life fix.

4. **[#40723 — Migrate v1 data to v2](https://github.com/anomalyco/opencode/pull/40723)** (merged, by thdxr)  
   REST-triggered V1 session history migration with resumable progress; imports legacy JSON credentials; updates TUI migration flow.

5. **[#40781 — Export session as JSON from UI](https://github.com/anomalyco/opencode/pull/40781)** (merged, by Hona)  
   Adds `Export...` to session dropdown, an export action in Context tab, and `/export` command palette action.

6. **[#40787 — Remove obsolete and unreachable code](https://github.com/anomalyco/opencode/pull/40787)** (by kitlangton)  
   Deletes 1,500 lines of dead code across V2 packages — migration relics, unreachable drafts, dead exports.

7. **[#40765 — Deduplicate Copilot endpoint routing](https://github.com/anomalyco/opencode/pull/40765)** (by kitlangton)  
   Reuses shared `shouldUseResponsesApi` heuristic from `@opencode-ai/ai` instead of maintaining a duplicate in Core.

8. **[#40590 — Support GITHUB_TOKEN auth in install script](https://github.com/anomalyco/opencode/pull/40590)** (by rwenz2004)  
   Allows authenticated GitHub requests in the install script (version detection, release checks, asset downloads) — helps rate-limit avoidance and private mirrors.

9. **[#27554 — Local LAN provider discovery + auto-discover models](https://github.com/anomalyco/opencode/pull/27554)** (by androidand)  
   Adds mDNS-based discovery for local OpenAI-compatible servers in `/connect`, with model auto-discovery. Closes #6231 and #27553.

10. **[#40768 — Survive cross-process OAuth refresh race on MCP connect](https://github.com/anomalyco/opencode/pull/40768)** (by justprosh)  
    Fixes concurrent OAuth refresh conflicts when two processes share the same MCP credential row.

## Feature Request Trends

- **Official VS Code extension** (#11176, 134👍) remains the single most-requested feature, far ahead of others.
- **Usage/billing APIs** (#16017, 126👍) — developers want programmatic access to Go plan consumption data.
- **Cross-project session management** (#31932, #35581) — a cluster of requests for a global session picker.
- **Skill/tooling parity** — respect `disable-model-invocation` (#34498), skills in root autocomplete (#40720), mid-prompt skill invocation (#40689).
- **Payment flexibility** — crypto payments for Go (#23153).
- **Automation** — computer-use/browser automation (#40782) and auto-approval permission modes (#37564) mirror Codex-style agentic capabilities.
- **Localization** — Swedish community translation opened twice (#40716, #40785).

## Developer Pain Points

- **UI redesign friction**: The new layout forces more navigation (#37012, 38👍); desktop session list lacks delete/archive (#40786); running sub-agent can't be opened by click (#40627).
- **Regression instability**: `/sessions` broken in v1.18.14 (#40759) and macOS 26 Bash/WASM crashes (#40789) show release-quality concerns.
- **MCP/transport gaps**: No HTTP Streamable transport for remote MCP servers (#8058); OAuth refresh races across processes (#40768).
- **Bash tool overuse**: Agent prefers `rg`/`grep` via bash over the grep/glob tools (#14791) — a tool-selection quality issue.
- **Offline/enterprise friction**: ripgrep not bundled for Windows offline environments (#31734); GITHUB_TOKEN support needed in install script (#40590).
- **Model/region confusion**: DeepSeek V4 Flash requiring China opt-in mid-session (#39845) highlights poor model-region transparency.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-06

## 1. Today's Highlights

The Pi project saw a productive day with 37 PRs updated and 50 issues tracked, though no new releases shipped in the last 24 hours. The most significant community conversation centers on Windows support direction (#7547), while a long-running XDG compliance issue (#534) finally reached resolution after months of discussion. Multiple high-impact fixes landed for extension event-bus leaks, Copilot model visibility, and context compaction triggers, alongside a new `AGENTS.override.md` feature for per-directory context overrides.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Hot Issues

1. **Windows Support Strategy** ([#7547](https://github.com/earendil-works/pi/issues/7547)) — An open community call with 17 comments discussing the fragmented ways Pi runs on Windows. The maintainer is seeking input on where to focus energy versus what to delegate; critical for prioritizing Windows UX work.

2. **XDG Config Folder Compliance** ([#534](https://github.com/earendil-works/pi/issues/534), closed) — After 7 months and 23 👍, this issue about respecting the Linux XDG Base Directory Spec was finally closed. The high engagement signals Linux users care deeply about platform conventions.

3. **Auto-Compaction Never Triggers** ([#6879](https://github.com/earendil-works/pi/issues/6879)) — A critical bug where sessions ran past 100% context window (373k tokens!) because compaction only fired on API rejection, not proactively. Users report 2-hour agentic turns hitting provider limits; community wants post-turn compaction checks.

4. **Ephemeral In-Session Model Changes** ([#5263](https://github.com/earendil-works/pi/issues/5263)) — Request to make `/model` and thinking-level changes session-scoped by default, with a separate `/settings` entry for global defaults. Prevents accidental global config changes during experiments.

5. **Configurable Compaction Model/Thinking Level** ([#7553](https://github.com/earendil-works/pi/issues/7553)) — For reasoning models, auto-compaction currently reuses the session's thinking budget, making summarization expensive and inseparable. Users want dedicated compaction settings.

6. **X11 Connection Leak** ([#7600](https://github.com/earendil-works/pi/issues/7600)) — A long-running Pi process leaked 182 X server connections over 8 days, filling Xorg's client table and killing new X clients. Serious stability concern for desktop Linux users.

7. **Vertex/GCP Metadata Server Support** ([#5323](https://github.com/earendil-works/pi/issues/5323)) — The auth check uses synchronous filesystem lookups instead of the GCP metadata server, breaking environments like Cloud Run or GKE where credentials are dynamically provisioned.

8. **WebSocket Retry Too Narrow** ([#7444](https://github.com/earendil-works/pi/issues/7444)) — Only two error codes trigger retry in the Codex WebSocket path; other transient `response.failed` errors abort turns. Flaky network environments suffer unnecessarily.

9. **Bash Tool Newline Collapse** ([#7666](https://github.com/earendil-works/pi/issues/7666)) — Multi-line commands without explicit terminators (`;`, `&&`, `|`) collapse newlines into spaces, causing the next line to become arguments to the previous command. Surprising behavior for shell users.

10. **OSC 8 Hyperlink Truncation Bug** ([#7399](https://github.com/earendil-works/pi/issues/7399)) — `truncateToWidth()` can cut inside hyperlink escape sequences, leaving dangling OSC 8 codes that corrupt terminal state. Closed with a fix that preserves hyperlink integrity.

## 4. Key PR Progress

1. [**Line Ranges in @file References**](https://github.com/earendil-works/pi/pull/7679) — Adds `@file#L122-L145` syntax support with 1-based inclusive ranges, enabling surgical file references instead of whole-file includes. Benefits Neovim plugins and large-file workflows.

2. [**Amazon Bedrock Mantle OpenAI Provider**](https://github.com/earendil-works/pi/pull/6216) — New provider for AWS Bedrock Mantle's OpenAI-compatible Responses API, opening Pi to AWS infrastructure users.

3. [**Natural Sorting for Model Selectors**](https://github.com/earendil-works/pi/pull/7692) — Both `/model` and `/scoped-models` now sort with numeric awareness (e.g., `@200k` before `@1m`) and case-insensitive IDs; shared comparator ensures consistent ordering.

4. [**Qwen Token Plan Individual Provider**](https://github.com/earendil-works/pi/pull/7659) — New built-in provider for Qwen's international Token Plan with all 8 documented individual models and `QWEN_TOKEN_PLAN_API_KEY` support.

5. [**Colocate Tool Prompt Contributions**](https://github.com/earendil-works/pi/pull/7671) — Refactors tool-prompt snippets to live alongside implementation code, improving maintainability and adding regression coverage for all built-in tools.

6. [**Event Bus Leak Fix**](https://github.com/earendil-works/pi/pull/7656) — Scopes `pi.events.on()` subscriptions to the originating extension runtime, removing stale listeners after reload/disposal without breaking host-owned listeners.

7. [**Configurable Harness Factory**](https://github.com/earendil-works/pi/pull/7686) — Adds an internal factory for constructing the experimental Harness with caller-provided tools, activation, prompt policy, and bash session preservation.

8. [**Copilot Model Policy Fallback**](https://github.com/earendil-works/pi/pull/7672) — Restores Copilot models by falling back to account policy models only when the Individual endpoint has no usable picker models; keeps strict semantics for non-Individual accounts.

9. [**Disable bunfig Autoload in Binaries**](https://github.com/earendil-works/pi/pull/7685) — Compiled `pi` binaries no longer autoload cwd `bunfig.toml`, preventing broken preloads from crashing even `pi --version`. Compiles with `--no-compile-autoload`.

10. [**AGENTS.override.md Support**](https://github.com/earendil-works/pi/pull/7664) — Prefers `AGENTS.override.md` over `AGENTS.md`/`CLAUDE.md` per directory (including global agent dir), preserving ancestor layering and classifying overrides as context resources.

## 5. Feature Request Trends

- **Context File Overrides**: Multiple PRs (#7664, #7681) and issues (#7642) converge on `AGENTS.override.md` as a per-directory high-priority context mechanism — clearly a sought-after pattern for project-specific customization.
- **Model Configuration Granularity**: Requests for ephemeral session model changes (#5263), configurable compaction models (#7553), and thinking-budget separation indicate power users want finer control over model behavior per context.
- **Provider Breadth**: New providers for Bedrock Mantle (#6216), Qwen Token Plan (#7659), and the Copilot model fix (#7672) show active demand for multi-provider support across cloud ecosystems.
- **Terminal Interop**: OSC 8 handling (#7399, #7665), iTerm2 payload sizes (#7465), and X11 stability (#7600) highlight that terminal correctness is a core value for the Pi community.
- **Arbitrary Media in Prompts**: Video/audio support in the `prompt` RPC (#3200) remains open with 4 👍, pointing toward richer multimodal workflows.

## 6. Developer Pain Points

- **Context Overflow Failures**: Compaction not triggering until provider rejection (#6879) causes lost work and wasted tokens — a reliability issue amplified by long agentic runs.
- **Resource Leaks**: Both X11 connections (#7600) and extension event-bus listeners (#7193) demonstrate lifecycle management failures in long-running or embedded Pi instances, undermining trust for production use.
- **Silent Command Semantics**: The bash-tool newline collapse (#7666) is a classic footgun where shell conventions are violated without visible warning, producing surprising arguments to the wrong commands.
- **Transient Error Handling**: Both self-update failures (#6675) and WebSocket retry limits (#7444) show that single-point-of-failure network handling causes user-visible interruptions that could be gracefully retried.
- **Auth Friction**: Linux auth issues over SSH (#7691) redirect to localhost instead of offering copyable codes, and GCP metadata auth (#5323) breaks in dynamic environments — both represent setup friction that pushes users away from first-run success.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-06

## 1. Today's Highlights

The Qwen Code project shipped three releases today, most notably the **desktop-v0.1.0** milestone and a nightly build with a **test stability fix** for glob external-path handling. The community is actively converging on the Tauri-based desktop app as the successor to the Electron implementation (issue #8596), while several **security-relevant bugs** — a read-only shell classifier bypass (#8582) and a credential leak in provider warning sanitization (#8136) — are drawing significant attention. On the infrastructure side, the team is tackling a **silent-hang failure mode in GitHub-triggered `/review` CI runs** (#8597) with a new streaming lifetime cap and a slimmer fan-out launch (#8602).

## 2. Releases

Three releases landed in the last 24 hours:

**v0.21.6-nightly.20260806.cb3dc107f** — Nightly build containing a single fix: deflaking the glob external-path test by using a dedicated empty directory instead of `/tmp` ([PR #8604](https://github.com/QwenLM/qwen-code/pull/8604)).

**v0.21.6** — Stable release with two notable highlights:
- **Experimental native Live Voice support** in WebShell on macOS for real-time audio interactions via a global shortcut ([#7859](https://github.com/QwenLM/qwen-code/pull/7859))
- Web Shell now **keeps conversation turns expanded** during active background work

**desktop-v0.1.0** — The first desktop release under the new versioning scheme, including CI fixes (default bash shell in container jobs) and Web Shell improvements.

## 3. Hot Issues

**#8136 — [P2/Security] Provider warning sanitizer truncates messages and leaks passwords** ([link](https://github.com/QwenLM/qwen-code/issues/8136))  
`sanitizeProviderWarning` mishandles URLs containing `@` — truncating messages when a port is present and potentially leaking passwords. An 8-comment discussion underscores the severity of credential exposure in `/status` payloads.

**#8582 — [P1/Security] Read-only shell classifier auto-approves command substitution** ([link](https://github.com/QwenLM/qwen-code/issues/8582))  
Both the AST-based classifier and runtime substitution gate can be bypassed via line continuations or `${var@P}` expansion, allowing arbitrary code execution in supposedly read-only mode. A high-priority security concern actively discussed by the community.

**#8615 — [P1] Desktop 0.1.0 on Windows crashes at startup** ([link](https://github.com/QwenLM/qwen-code/issues/8615))  
The bundled Node.js runtime crashes with `EISDIR lstat 'C:'` when opening a workspace folder — a release-blocking bug for the new desktop app on Windows.

**#8597 — [P1] CI `/review` runs hang silently** ([link](https://github.com/QwenLM/qwen-code/issues/8597))  
12 timeouts on Aug 4 and 9 more by Aug 5, most burning the full 360-minute budget. Analysis shows 4 of 5 recent failures share the same root cause: a reverse-audit fan-out launch that hangs indefinitely.

**#8557 — [P3/UI] Terminal shrink reprints transcript blocks in scrollback** ([link](https://github.com/QwenLM/qwen-code/issues/8557))  
Reproduced on macOS with Warp: shrinking the window causes duplicate output of previously printed transcript blocks. A rendering bug affecting scrollback integrity.

**#8580 — [P2/UI] TUI flickers continuously in tmux < 3.5** ([link](https://github.com/QwenLM/qwen-code/issues/8580))  
Two bundled Ink renderer decisions — overflowing frames doing full-screen clear+repaint and an unqueried DEC 2026 guard — cause 2–3 flickers per second during streaming in tmux 3.4. Multiple user reports (see also #8562) confirm wide impact.

**#8584 — [P2] Anthropic model-ID parsing rejects dotted-minor aliases** ([link](https://github.com/QwenLM/qwen-code/issues/8584))  
`claude-opus-4.8` style aliases are rejected, and Opus 5 token limits are missing. Proxy deployments using dotted-minor model IDs break at the content generator level.

**#8606 — [P2] VSCode companion: file links always resolve to workspace root** ([link](https://github.com/QwenLM/qwen-code/issues/8606))  
After `edit_file` or `write_file`, any nested file link resolves to `<workspace-root>/<basename>`, causing "file not found" unless the file sits at the workspace root.

**#8560 — [P2] Web Shell deep-link refresh returns 401 with bearer token** ([link](https://github.com/QwenLM/qwen-code/issues/8560))  
When `qwen serve --token <secret>` is active, refreshing a session deep link returns `{"error": "Unauthorized"}`. A session-management annoyance for authenticated deployments. A fix is already in progress via PR #8445.

**#8538 — [P2/UI] Desktop copy-response button does nothing** ([link](https://github.com/QwenLM/qwen-code/issues/8538))  
On Windows 10 with Desktop 0.0.5, the copy button below assistant messages silently fails — clipboard unchanged. Reproduced across restarts, system reboots, and multiple messages, indicating a systemic issue rather than a transient failure.

## 4. Key PR Progress

**#8445 — fix(web-shell): allow session refresh with daemon auth** ([link](https://github.com/QwenLM/qwen-code/pull/8445))  
Directly addresses the 401-on-refresh issue (#8560) by allowing exact session document navigation to load the public HTML shell before bearer auth, while keeping API subpaths protected. Includes regression coverage for GET/HEAD document navigations.

**#8602 — fix(core): cap a streaming response's total lifetime** ([link](https://github.com/QwenLM/qwen-code/pull/8602))  
The fix for the silent-hang `/review` failures (#8597): adds a per-request total-lifetime cap for streaming responses (existing watchdog only bounds inter-chunk inactivity), plus slims the review fan-out launch to reduce resource contention.

**#8364 — feat(omni): managed media storage with GC and upload cache** ([link](https://github.com/QwenLM/qwen-code/pull/8364))  
Implements a content-addressed object store for multimodal experiment artifacts with mark-and-sweep GC, capacity budgeting, startup crash recovery, and a persistent upload cache for DashScope `oss://` URL mappings.

**#8529 — feat(core): resolve model modalities from API metadata** ([link](https://github.com/QwenLM/qwen-code/pull/8529))  
Ships a compact modality-only snapshot, uses a valid disk cache immediately, and refreshes remote metadata in the background — so cold startup never blocks on models.dev lookups.

**#8616 — feat(telemetry): align session lifecycle with OpenTelemetry** ([link](https://github.com/QwenLM/qwen-code/pull/8616))  
Emits standard `session.start` and `session.end` LogRecords with `event.name` and `session.id`, plus `session.previous_id` for resumed conversations. Brings Qwen Code closer to OpenTelemetry conventions.

**#8421 — fix(core): remove fixed Goal continuation limit** ([link](https://github.com/QwenLM/qwen-code/pull/8421))  
Removes Goal v3's hard-coded 50-continuation cutoff; active Goals now receive runtime permits until a real lifecycle outcome, user pause/clear, or explicit policy — making long-running goals more predictable.

**#8353 — fix(cli): ESC cancels ongoing work before popping queued messages** ([link](https://github.com/QwenLM/qwen-code/pull/8353))  
Users previously had to press ESC multiple times to cancel an active response — the first press would pop queued messages instead. ESC now falls through to the global handler when streaming, canceling the request immediately.

**#8559 — feat(web-shell): improve parallel agent activity feedback** ([link](https://github.com/QwenLM/qwen-code/pull/8559))  
Active parallel-agent status stays at the conversation tail, details expand automatically while work is active, and the group collapses with a smooth transition before the main agent resumes — clearer visibility into subagent progress.

**#8394 — feat(review): add Maven multi-module verification** ([link](https://github.com/QwenLM/qwen-code/pull/8394))  
`review build-test` now recognizes root Maven reactors, maps changed files to the deepest default-reactor module, and prefers targeted module builds over full-reactor builds — reducing CI time for multi-module Java repositories.

**#8388 — feat(review): capture-tui — rendering claims get pixels, not prose (Phase 2)** ([link](https://github.com/QwenLM/qwen-code/pull/8388))  
Introduces the **producer** for terminal-rendering evidence: `qwen review capture-tui` drives code under review in a private tmux server and captures the pane exactly as rendered — replacing prose claims like "the panel clips at 80 columns" with actual pixel evidence.

## 5. Feature Request Trends

**Desktop app consolidation** — Issue #8596 proposes deprecating the Electron app (`packages/desktop`) and renaming the Tauri shell (`packages/desktop-shell`) to take over the name. The community clearly views Tauri as the future desktop foundation; #8092 frames it as a "lower-maintenance desktop app around Web Shell."

**Local Control / phone access** — Issue #8595 requests a first-class "Local Control" mode with QR-code pairing for phone-based session takeover, spanning both CLI and desktop. A notable UX-forward request targeting mobile workflows.

**Batch/async execution modes** — Issue #8605 proposes a `/slow` or `/batch` slash command (plus CLI flag) for lower-cost asynchronous agent runs via provider batch APIs. Echoes a common efficiency desire for non-interactive workloads.

**OTel alignment** — Issue #8589 (with implementation PR #8616) requests session lifecycle events aligned with OpenTelemetry General Session conventions instead of Qwen-specific telemetry. A push toward standard observability interoperability.

**Hooks in the TypeScript SDK** — Issue #8591 asks for inline `hooks` support in SDK `query()` options — a developer-experience request for SDK consumers who shouldn't need global settings for lifecycle hooks.

**Background agent recovery** — Issue #8586 requests an explicit `activeWork` fact in daemon health plus recovery paths for background agents that outlive their foreground prompt — a robustness/operability concern for long-running workflows.

## 6. Developer Pain Points

**Window/tmux rendering instability** — Three separate issues this week (#8557, #8580, #8562) all trace to terminal rendering problems: shrink-triggered duplicate output, continuous flicker in tmux < 3.5, and a Chinese-language report confirming the same tmux flicker from iTerm 2 over SSH. The Ink renderer's full-clear+repaint strategy and VP-mode alternate-buffer behavior are common culprits.

**Desktop app reliability on Windows** — Two Windows-specific bugs (copy-response button doing nothing, #8538; startup crash via `EISDIR lstat 'C:'`, #8615) suggest the desktop bridge needs platform-specific hardening, particularly around file-path handling and clipboard access.

**VSCode companion file-link breakage** — Issue #8606 (file links resolving to workspace root) joins #8617 (selection dropdown obscuring content) — both reports indicate the VSCode companion experience still has rough edges around file handling and UI layout.

**CI infrastructure scaling** — The recurring theme of CI instability (silent hangs at #8597, mocked disk-full errors at #8532, heavy autofix jobs at #8603) shows the project's self-hosted CI pool is both a boon and a bottleneck. The community is actively reporting workflow reliability as a top friction point.

**Auth/session friction** — The 401-on-refresh with bearer tokens (#8560) and the provider warning sanitizer credential leak (#8136) both point at auth-path rough edges that impact security-conscious deployments.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-06

---

## 1. Today's Highlights

The v0.9.4 release train is accelerating with 14 PRs active, dominated by a major push to expand the Runtime API surface — new endpoints for memory inspection, MCP server management, skill lifecycle, goal-loop state, and verifier receipts are all in flight. A critical TUI fix (ratatui pin to 0.30.0) has landed to resolve a terminal scroll regression caused by a cursor position report race condition. Community contributions are also strong: a Windows beginner guide in Chinese, improved wait-time visibility for the Bash tool, and checkpoint-based resume for interrupted subagents.

---

## 2. Releases

No new releases in the last 24 hours. The v0.9.4 release train is in progress via PR #5135, currently 77 commits ahead of `main`.

---

## 3. Hot Issues

**1. [#4029 — Planning to create an interface similar to Reasonix?](https://github.com/Hmbown/CodeWhale/issues/4029)**
- **Author:** longASKme | **Created:** 2026-07-04 | **Updated:** 2026-08-05 | **Comments:** 4
- **Why it matters:** The only issue updated in the last 24 hours. The community is asking about a Reasonix-like interface, suggesting interest in a more visual/conversational UI layer beyond the current TUI. The 4 comments indicate active discussion.
- **Community reaction:** Moderate interest; no upvotes yet.

---

## 4. Key PR Progress

**1. [#5229 — docs: add Docs/windows beginner guide in zh-CN](https://github.com/Hmbown/CodeWhale/pull/5229)**
- **Author:** vFONGv | **Created:** 2026-08-03 | **Updated:** 2026-08-05
- **What:** New Chinese-language Windows beginner guide (WINDOWS_BEGINNER.zh-CN.md) covering install, config, model switching, modes/permissions, and FAQs. Includes 4 screenshots from real Windows 10 verification.
- **Why it matters:** Lowers the barrier for Chinese-speaking Windows users; community-driven documentation.

**2. [#5135 — release: Codewhale v0.9.4 release train](https://github.com/Hmbown/CodeWhale/pull/5135)**
- **Author:** Hmbown | **Created:** 2026-08-03 | **Updated:** 2026-08-05
- **What:** The official v0.9.4 integration train, superseding #5044. Currently 77 commits ahead of main, containing all 2026-08-01 source candidates plus 18 train commits.
- **Why it matters:** The central release vehicle; all other PRs will be merged into this.

**3. [#5225 — feat(acp): expose file/search/git/patch/shell tools over session/prompt](https://github.com/Hmbown/CodeWhale/pull/5225)**
- **Author:** rafaelcavalheri | **Created:** 2026-08-03 | **Updated:** 2026-08-05
- **What:** ACP server's `session/prompt` previously only streamed text — tool calls were never executed. This PR wires up actual tool execution for editors/bridges (Zed, community `acp-deepseek-adapter`).
- **Why it matters:** Turns ACP from chat-only into a real coding agent for external editors — a major integration gap.

**4. [#5131 — feat: Runtime API memory endpoints — bounded inspection and lifecycle controls](https://github.com/Hmbown/CodeWhale/pull/5131)**
- **Author:** Copilot | **Created:** 2026-08-03 | **Updated:** 2026-08-05
- **What:** New `/v1/memory` endpoints letting managed clients inspect active memory, understand scope/provenance, and apply lifecycle controls. Gated behind `require_runtime_token`.
- **Why it matters:** Closes a gap where memory was invisible to external clients without a second store.

**5. [#5130 — feat(runtime-api): bounded MCP server configuration and lifecycle management](https://github.com/Hmbown/CodeWhale/pull/5130)**
- **Author:** Copilot | **Created:** 2026-08-03 | **Updated:** 2026-08-05
- **What:** Previously read-only MCP inventory; now `POST /v1/apps/mcp/servers` and friends allow create/update/delete without editing TOML/JSON by hand.
- **Why it matters:** Removes a major operational pain point for managed deployments.

**6. [#5133 — feat(runtime-api): expose persistent goal-loop state and completion controls](https://github.com/Hmbown/CodeWhale/pull/5133)**
- **Author:** Copilot | **Created:** 2026-08-03 | **Updated:** 2026-08-05
- **What:** New `/v1/threads/{id}/goal` endpoints to read active-goal state and drive lifecycle transitions.
- **Why it matters:** Makes the goal loop observable and controllable from external clients.

**7. [#5132 — Runtime API: expose verifier receipts and evidence beyond the aggregate counter](https://github.com/Hmbown/CodeWhale/pull/5132)**
- **Author:** Copilot | **Created:** 2026-08-03 | **Updated:** 2026-08-05
- **What:** Three new read-only endpoints under `/v1/fleet/runs/{run_id}/` — `GET receipts`, plus endpoints to identify which task failed, why, and retry decisions.
- **Why it matters:** The `verifier_failed` counter alone was useless for debugging; now clients get actionable evidence.

**8. [#5129 — feat(runtime-api): add skill lifecycle endpoints — install, update, uninstall, trust, audit](https://github.com/Hmbown/CodeWhale/pull/5129)**
- **Author:** Copilot | **Created:** 2026-08-03 | **Updated:** 2026-08-05
- **What:** Full skill lifecycle via HTTP, previously only available in the TUI: install, update, uninstall, trust, audit. Protected by `require_runtime_token`.
- **Why it matters:** Parity between TUI and managed/web clients; enables remote administration.

**9. [#5240 — feat(tui/shell): surface real wait elapsed time in tool content](https://github.com/Hmbown/CodeWhale/pull/5240)**
- **Author:** SparkofSpike | **Created:** 2026-08-04 | **Updated:** 2026-08-05
- **What:** The Bash `wait`/delta tool kept `duration_ms` only in metadata the model can't see. Now the real elapsed time is surfaced in visible tool content.
- **Why it matters:** Fixes a model bias toward busy-polling short waits and misjudging long stalls — a significant agent-quality improvement.

**10. [#5242 — feat(tui/subagent): resume interrupted children from checkpoint via followup](https://github.com/Hmbown/CodeWhale/pull/5242)**
- **Author:** SparkofSpike | **Created:** 2026-08-04 | **Updated:** 2026-08-05
- **What:** `agents/followup` on an `interrupted_continuable` child previously dead-lettered. Checkpoint was preserved with a `continuation_handle`, but nothing could resume it. This PR wires up actual resume.
- **Why it matters:** Long tasks (document review, multi-step search) interrupted mid-way no longer need full re-dispatch.

**11. [#5234 — fix(tui): keep alternate scroll off while mouse capture is active](https://github.com/Hmbown/CodeWhale/pull/5234)**
- **Author:** SparkofSpike | **Created:** 2026-08-04 | **Updated:** 2026-08-05
- **What:** Mouse-wheel scrolling over long transcripts toggled composer history instead of scrolling. Root cause: `recover_terminal_modes()` armed both `EnableMouseCapture` and xterm alternate-scroll (DECSET 1007).
- **Why it matters:** A frustrating UX bug for long conversations — the most common TUI interaction.

**12. [#5192 — fix(tui): pin ratatui to 0.30.0](https://github.com/Hmbown/CodeWhale/pull/5192)**
- **Author:** bistack | **Created:** 2026-08-03 | **Updated:** 2026-08-05 | **Status:** CLOSED (merged)
- **What:** Pin `ratatui` to `=0.30.0` and `ratatui-core` to `=0.1.0`. ratatui-core 0.1.1+ makes `Terminal::clear()` issue a blocking cursor position report query that races the TUI event loop.
- **Why it matters:** A critical fix preventing startup hangs/races; already merged.

**13. [#5095 — fix(ohos): re-quote Windows linker arguments containing spaces](https://github.com/Hmbown/CodeWhale/pull/5095)**
- **Author:** shenjackyuanjie | **Created:** 2026-08-02 | **Updated:** 2026-08-05 | **Status:** CLOSED
- **What:** rustc passes linker arguments with spaces as quoted strings, but cmd's `%*` expansion strips quoting. OpenHarmony SDK under `D:\DevEco Studio\...` had `--sysroot` split on spaces.
- **Why it matters:** Fixes OpenHarmony builds on Windows with default SDK paths — a niche but blocking platform issue.

**14. [#5236 — docs(evidence): attach live Model Studio proof](https://github.com/Hmbown/CodeWhale/pull/5236)**
- **Author:** Inference1 | **Created:** 2026-08-04 | **Updated:** 2026-08-05
- **What:** Replaces earlier terminal screenshots with a local Terminal MP4 plus Alibaba Cloud Model Studio Token Plan screenshots, demonstrating `qwen3.8-max` reasoning-to-working transition and active Lite subscription.
- **Why it matters:** Credential-free evidence for community-claimed capabilities.

---

## 5. Feature Request Trends

1. **Runtime API expansion is the dominant theme** — 5 of 14 active PRs (memory, MCP config, skill lifecycle, goal state, verifier receipts) are adding REST endpoints for managed clients. This signals a strategic push toward headless/remote operation.

2. **Agent robustness and observability** — Surface wait elapsed time to the model (PR #5240), verifier receipts with failure reasons (PR #5132), checkpoint-based resume (PR #5242). The community wants smarter, self-healing agents.

3. **Interface evolution** — The Reasonix-like interface question (#4029) suggests appetite for richer UI paradigms than the current TUI, possibly conversational or visual layers.

4. **ACP/tool execution parity** — Exposing file/search/git/patch/shell tools over ACP (PR #5225) indicates demand for CodeWhale as a backend agent for editors, not just a standalone TUI.

---

## 6. Developer Pain Points

1. **Terminal mode races and scroll regressions** — Two separate PRs (#5234, #5192) fixing mouse scroll and cursor position report races. Terminal handling is fragile; pinning + explicit mode management is the recurring fix.

2. **Windows path/quoting hell** — OpenHarmony linker quoting (#5095) and the Windows beginner guide (#5229) both point to Windows being a persistent second-class citizen.

3. **Invisible tool metadata** — The `duration_ms` fix (#5240) highlights a class of bugs where model-important telemetry lives in places models can't see, degrading agent decision-making.

4. **Stale or incomplete runtime API** — The burst of runtime API PRs suggests managed clients were hitting walls: no way to manage MCP servers, skills, or inspect memory/goal state without editing config files directly or going through the TUI.

5. **Interrupted subagent recovery** — Dead-lettering on interrupt (#5242) meant long tasks had to be restarted from scratch — a costly productivity drain the community clearly feels.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*