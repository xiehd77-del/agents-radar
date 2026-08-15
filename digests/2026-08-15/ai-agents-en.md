# OpenClaw Ecosystem Digest 2026-08-15

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-15 01:18 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest
**Date:** 2026-08-15

---

## 1. Today's Overview

OpenClaw is experiencing a high level of community activity, with 500 issues and 500 PRs updated in the last 24 hours, indicating a rapidly evolving and heavily used project. The majority of activity centers around bug reports and fixes, with a significant focus on stability issues such as memory leaks, silent message delivery failures, and session management problems. While no new releases were published today, the large volume of open PRs (405) suggests a substantial body of work is pending review and merger, potentially leading to a significant update soon. The project maintainers are actively engaged with a 19% closure rate on PRs and a steady flow of new contributions from the community.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Project Progress

Today, 95 pull requests were merged or closed. Key progress areas based on recent PR activity include:

- **Worker Cache Management:** PR [#123901](https://github.com/openclaw/openclaw/pull/123901) was opened to bound the growth of the Gateway's bundle cache by fixing an issue where every distinct worker build permanently left a tarball, a valuable fix for long-running development environments.
- **UI/UX Refinements:** Multiple PRs focus on improving the web UI, including making sidebar customization transactional ([#123666](https://github.com/openclaw/openclaw/pull/123666)) and unifying chat side rails into a tabbed panel ([#123874](https://github.com/openclaw/openclaw/pull/123874)) to reduce clutter and improve navigation on smaller screens.
- **Merged Security and Stability Fixes:** A significant PR adding a security acknowledgement gate for install policy warnings ([#116489](https://github.com/openclaw/openclaw/pull/116489)) was closed, indicating a completed feature for safer plugin/skill installation flows.
- **Performance Optimizations:** A PR to fix a ~12s event loop stall caused by `branches.list` on long-lived sessions ([#123541](https://github.com/openclaw/openclaw/pull/123541)) is in progress, addressing a significant performance bottleneck for power users.

---

## 4. Community Hot Topics

The most active discussions highlight critical user pain points around reliability and data integrity:

- **Persistent Silent Reply Failures:** Issue [#121058](https://github.com/openclaw/openclaw/issues/121058) continues to be the most active, with 94 comments. Users report that the fix for a previous silent-reply bug did not resolve the issue, and failures are still being logged. This points to a deep-rooted problem in the message delivery pipeline that is yet to be fully resolved.
- **Memory Trust Tagging by Source:** [Feature Request #7707](https://github.com/openclaw/openclaw/issues/7707) with 51 comments shows strong community interest in security hardening. Users want the ability to tag memory entries by trust level based on their origin (user commands vs. web scrapes) to prevent memory poisoning attacks.
- **Gateway Memory Leak:** The critical P0 issue [#91588](https://github.com/openclaw/openclaw/issues/91588) regarding a memory leak causing RSS to grow to 15.5GB and OOM crashes is heavily followed, with 24 comments. Users are seeking a definitive fix for this severe instability problem. Similarly, [#87109](https://github.com/openclaw/openclaw/issues/87109) discusses heap growth on macOS leading to silent cron failures.
- **Codex Integration Performance:** PR [#121894](https://github.com/openclaw/openclaw/pull/121894) aims to fix realtime output and ownership issues for the Talk feature with Codex and is consolidating several related PRs, drawing attention from users of the Codex integration.
- **Per-Agent Cost Budgets:** [Feature Request #42475](https://github.com/openclaw/openclaw/issues/42475) with 25 comments reflects a desire from operators for more granular control over spending, specifically the ability to enforce per-agent daily or monthly caps.

---

## 5. Bugs & Stability

The project is facing several critical stability challenges, with memory issues and message reliability being the top concerns:

- **P0: Gateway Memory Leak (Critical):** Issue [#91588](https://github.com/openclaw/openclaw/issues/91588) details a severe memory leak leading to OOM crashes over 2-3 days. A related issue (#87109) describes heap growth on macOS causing silent cron failures. No fix PR has been linked.
- **P0: Silent Data Loss:** No fix PRs are present for critical issues like [#121058](https://github.com/openclaw/openclaw/issues/121058) (silent reply failures) or [#119270](https://github.com/openclaw/openclaw/issues/119270) (file tools stripping `@` from paths, overwriting the wrong files).
- **P1: Message Delivery Failures:** Numerous P1 issues report messages being silently lost or not delivered across various channels:
    - **LINE:** Reply token expiry causes silent message loss ([#86012](https://github.com/openclaw/openclaw/issues/86012)).
    - **WhatsApp:** Foreground reply fence cancels delivery of earlier replies in concurrent group chats ([#92186](https://github.com/openclaw/openclaw/issues/92186)).
    - **Cron:** DeepSeek deprioritizes `[cron:]` prefixed jobs, causing stalls ([#121953](https://github.com/openclaw/openclaw/issues/121953)).
- **P1: Performance & Regressions:** Regressions include stream events not being relayed to web/TUI surfaces for `claude-cli` ([#86050](https://github.com/openclaw/openclaw/issues/86050)) and significant latency regressions in Feishu streaming cards ([#91941](https://github.com/openclaw/openclaw/issues/91941)). A fix for Feishu message recall handling is open in PR [#102165](https://github.com/openclaw/openclaw/pull/102165).
- **Stability Fixes in Progress:** Promising fixes are being worked on for gateway worker process orphaning ([#86119](https://github.com/openclaw/openclaw/issues/86119)) and subagent reconciliation issues ([#122141](https://github.com/openclaw/openclaw/pull/122141), [#122142](https://github.com/openclaw/openclaw/pull/122142), [#123222](https://github.com/openclaw/openclaw/pull/123222)).

---

## 6. Feature Requests & Roadmap Signals

Several feature requests signal the direction users want the project to take:

- **Security & Trust:** The demand for memory trust tagging ([#7707](https://github.com/openclaw/openclaw/issues/7707)) and context provenance metadata ([#54373](https://github.com/openclaw/openclaw/issues/54373)) indicates a strong need for better security and control over what the agent trusts.
- **Cost Management:** The request for per-agent cost budgets ([#42475](https://github.com/openclaw/openclaw/issues/42475)) is a clear signal that operators want more robust, built-in financial controls.
- **Agent Autonomy:** Feature requests like agent-triggered context compaction ([#6757](https://github.com/openclaw/openclaw/issues/6757)) show a desire for agents to manage their own context windows without user intervention.
- **Integrations:** The active PR for preserving realtime output in Talk with Codex ([#121894](https://github.com/openclaw/openclaw/pull/121894)) suggests refinement and consolidation of the Codex integration is a priority.

---

## 7. User Feedback Summary

- **Frustration with Regressions:** There is significant user frustration around regressions, particularly related to message delivery (e.g., #92186, #86012) and previously fixed issues recurring (e.g., #121058). The comment "still recurring after #116277 was closed" in #121058 reflects this.
- **Performance is a Key Concern:** Users are reporting severe performance issues, from massive memory leaks (#91588) to event-loop blocking on the web UI (#123541). This impacts both reliability and usability.
- **Feature Gaps in Business Logic:** Users are requesting more sophisticated control for their workflows, including cost management (#42475) and finer-grained session retention rules (#50900).
- **Mixed but Engaged Community:** Despite these issues, the high volume of detailed bug reports with steps to reproduce and the number of AI-assisted PRs from the community indicate a technically engaged and proactive user base.

---

## 8. Backlog Watch

- **Persistent Recurring Issue:** Issue [#121058](https://github.com/openclaw/openclaw/issues/121058) (Silent reply failures) remains the most commented-on issue and has not been resolved for over a week. This warrants urgent maintainer attention given its impact on core functionality.
- **Ageing Critical Issues:** Several P0 and P1 issues have been open for weeks or months without a linked fix PR. Notably, the memory leak issue [#91588](https://github.com/openclaw/openclaw/issues/91588) (open since June 9th) and the Codex hook CPU issue [#91009](https://github.com/openclaw/openclaw/issues/91009) (open since June 6th) appear stalled.
- **Awaiting Maintainer Review:** A large number of PRs with clear fixes are tagged with "ready for maintainer look," including critical fixes for message queuing ([#48003](https://github.com/openclaw/openclaw/issues/48003)), and browser extension reconnection ([#122155](https://github.com/openclaw/openclaw/pull/122155), [#122177](https://github.com/openclaw/openclaw/pull/122177)). These are likely blocking users from resolving significant pain points.
- **Clarification Required:** Several issues, such as [#120563](https://github.com/openclaw/openclaw/issues/120563) (Ollama context issues) and [#123273](https://github.com/openclaw/openclaw/issues/123273) (image attachment failures), are tagged `needs-info`, indicating they require more user input or maintainer clarification to be actionable.

---

This digest reflects a project with a highly active community and a fast pace of development. However, it is currently challenged by critical stability and reliability issues, particularly around memory management and message delivery. The maintainers are active but face a substantial backlog of both bug reports and PRs awaiting review. The strong demand for security and cost-control features suggests these will be key focus areas in future releases.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Open-Source Ecosystem
**Date:** 2026-08-15 | **Data Source:** GitHub community digests (8 active projects, 2 inactive)

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is experiencing **high-velocity development** with significant investment in reliability, security, and multi-channel integration. Projects are converging on several core themes: **memory management** (trust tagging, provenance, pluggable storage), **message delivery reliability** (silent failures, streaming timeouts, cross-platform consistency), and **provider abstraction** (OpenAI-compatible APIs, model fallback chains). The ecosystem shows a clear split between **large, community-driven platforms** (OpenClaw, ZeroClaw, IronClaw, CoPaw) and **smaller, focused tools** (NanoBot, Moltis, NullClaw, PicoClaw). While the larger projects struggle with scale-related stability issues (memory leaks, message loss, Windows compatibility), smaller projects are shipping polished features with faster turnaround. Security hardening—particularly around shell command approvals, plugin trust, and data isolation—has emerged as the dominant architectural theme across the ecosystem.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed (24h) | New Release (24h) | Health Score* |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 95 | No | 6.5/10 (critical stability issues) |
| **IronClaw** | ~40 | ~31 | 23 | No | 8.0/10 (strong discipline, QA focus) |
| **CoPaw (QwenPaw)** | 50 | 41 | 15 | No | 7.5/10 (fast triage, MCP friction) |
| **ZeroClaw** | 30 | 47 | 3 | No | 7.0/10 (active RFCs, blocked PRs) |
| **NanoBot** | 3 | 22 | 8 | No | 8.5/10 (responsive maintainers) |
| **Hermes Agent** | 50 | 50 | 24 | No | 7.5/10 (high velocity, Windows gaps) |
| **LobsterAI** | ~5 | ~10 | 22 | **Yes (2026.8.14)** | 8.0/10 (shipping, stale issues) |
| **PicoClaw** | 3 | 9 | 5 | No | 7.0/10 (MCP hang critical) |
| **NanoClaw** | 2 | 11 | 3 | No | 7.5/10 (security hardening focus) |
| **Moltis** | 0 | 2 | 0 | No | 7.0/10 (build phase, early stage) |
| **NullClaw** | 0 | 1 | 1 | No | 8.5/10 (clean, responsive) |
| **TinyClaw** | 0 | 0 | 0 | No | N/A (inactive) |
| **ZeptoClaw** | 0 | 0 | 0 | No | N/A (inactive) |

*Health score based on: stability of core functionality, maintainer responsiveness, backlog cleanliness, and community satisfaction signals.

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Scale-leading community**: 500 issues/PRs updated in 24h dwarfs all competitors (next closest: IronClaw at ~70). OpenClaw is the de facto reference implementation.
- **Feature breadth**: Gateway architecture, multi-channel support, worker management, and Codex integration represent the most comprehensive feature set.
- **Active maintainers**: 19% PR closure rate with steady new contributions despite massive volume.

**Technical approach differences:**
- **Bundle caching architecture** (PR #123901) addresses worker lifecycle at scale—a problem smaller projects haven't encountered.
- **Per-agent cost budgets (#42475)** and **memory trust tagging (#7707)** are pioneering features others have not yet attempted.
- **Security acknowledgment gates** (#116489) set a precedent for safe plugin installation flows.

**Community size comparison:**
- OpenClaw's issue/PR volume (500+500) is ~5x IronClaw (~71) and ~10x CoPaw (~91), demonstrating dominant community mindshare.
- **Weakness**: The volume creates a review bottleneck—405 open PRs with a 19% closure rate lags IronClaw's faster merge discipline.

**Bottom line**: OpenClaw remains the ecosystem's innovation leader and largest community, but is currently **struggling with stability at scale** (memory leaks, silent message failures). Smaller competitors with cleaner stability records (NanoBot, NullClaw) may attract users seeking reliability over features.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Memory trust & provenance** | OpenClaw (trust tagging #7707, provenance #54373), CoPaw (MEMORY.md refresh), IronClaw (pluggable memory #7664) | Tag entries by source/trust level, prevent memory poisoning, pluggable memory backends |
| **Message delivery reliability** | OpenClaw (silent failures #121058, LINE/WhatsApp issues), Hermes (Desktop gateway death #83683), IronClaw (Telegram login codes), CoPaw (Feishu session collision #7011) | Idempotent delivery, channel-specific retry logic, session identity isolation |
| **Provider abstraction & fallback** | OpenClaw (Codex integration), CoPaw (Responses API, provider routing #6302), NanoBot (Anthropic timeouts), PicoClaw (model fallback chain #3200), ZeroClaw (OpenAI Chat Completions profile #8603) | Standard OpenAI-compatible APIs, fallback chains, per-model timeout semantics |
| **Shell command safety** | ZeroClaw (per-exec confirmation #7155), IronClaw (approval workflows), OpenClaw (install policy gates) | Claude Code-style allow/ask/deny policies, deterministic approval rules |
| **Cost management** | OpenClaw (per-agent budgets #42475), CoPaw (model overrides), IronClaw (per-automation model pinning #7645) | Per-agent/per-automation caps, spend visibility |
| **Session lifecycle integrity** | NanoBot (stale saves #5271, archive corruption #5378), Hermes (SQLite row-id addressing), OpenClaw (session management) | Atomic session transitions, data loss prevention after /new |
| **Cross-platform (Windows) reliability** | Hermes (P1 desktop regression), NanoBot (os.replace PermissionError), ZeroClaw (74 test failures #7462), CoPaw (Python icon, cmd flash) | Path handling, process lifecycle, test parity |
| **Attachment handling** | NanoClaw (Discord attachments #2752), CoPaw (OneBot media localization), PicoClaw (DingTalk images), IronClaw (MP4 failures) | Standardized inbound media staging, byte-level access for agents |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Architecture | Differentiator |
|---|---|---|---|---|
| **OpenClaw** | General-purpose personal AI assistant | Power users, developers, multi-platform | Gateway + worker model, bundle cache | **Scale & feature breadth** — the "Linux kernel" of the ecosystem |
| **IronClaw** | Automation & reliability | Ops teams, QA-focused developers | Structured execution contracts, automation epics | **Deterministic automation** (semantic outcomes, [SILENT] suppression) |
| **CoPaw (QwenPaw)** | Consumer desktop assistant + channels | Chinese-speaking users, desktop-first | OneBot channel, Feishu integration, console UI | **Chinese ecosystem integration** & consumer-grade desktop |
| **ZeroClaw** | Security-hardened enterprise agent | Enterprise, security-conscious teams | RFC-driven architecture, pluggable auth, egress policies | **Security architecture** (command tiers, auth pluggability) |
| **Hermes Agent** | Cross-platform messaging agent | Discord/Telegram/Matrix power users | Session state (SQLite), Discord Omniscience campaign | **Channel fidelity** (full Discord parity), bot personas |
| **NanoBot** | Lightweight, embeddable personal assistant | Hackers, API integrators | Python gateway, strict type checking | **Code quality & maintainability** (Pyright strict mode) |
| **LobsterAI** | Multi-agent collaboration (cowork) | Team/collaborative users | Renderer-heavy UI, Team Edition | **Multi-agent collaboration UX** (turn processes, artifacts) |
| **PicoClaw** | Hardened multi-channel assistant | Go ecosystem users | Go implementation, seahorse tool chain | **Go-based reliability** & multi-channel media |
| **NanoClaw** | Security-hardened lightweight agent | Edge/IoT/NAS deployers | Cosign-verified images, hardened defaults | **Supply-chain security** (signature approver, hardened builds) |
| **Moltis** | Durable local-first connector assistant | Privacy-conscious users | Provider-neutral connectors, atomic snapshots, local search | **Local-first persistence** & connector abstraction |
| **NullClaw** | Minimal deployment-focused agent | Container/K8s users | Configurable SQLite paths, zero-friction deploys | **Deployment flexibility** (container/read-only friendly) |

---

## 6. Community Momentum & Maturity

### Tier 1 — Rapidly Iterating (2-4 major themes/month, shipping frequently)
- **IronClaw** — High-velocity with strong discipline. 23 PRs merged in 24h, pristine release-merge discipline, QA epic culture. Closest to "industrial grade."
- **LobsterAI** — Shipping a release every 1-2 weeks. Team Edition and cowork features indicate product focus. Stale bugs (4.5 months) are the weakness.
- **CoPaw** — Fast triage (37 issues closed/24h) with a growing first-time-contributor base. Still finding its footing on MCP reliability.

### Tier 2 — Active with Bottlenecks
- **OpenClaw** — Huge community, but bottlenecked: 405 open PRs, 19% closure rate, critical stability issues unresolved for weeks. The "gorilla" is bloated.
- **ZeroClaw** — Architecturally ambitious (RFC-heavy) but PR pipeline blocked (20+ awaiting author action). Great ideas, slow execution.
- **Hermes** — High volume (50/50) with good triage, but Windows regressions persist and duplicate issue floods indicate triage fatigue.
- **NanoBot** — Small team, healthy velocity. Same-day bug fixes (Anthropic timeout) show excellent responsiveness. Strong code quality culture.

### Tier 3 — Stabilizing / Maintenance Phase
- **PicoClaw** — Steady maintenance cadence. Merging useful multi-channel features but no major architectural shifts.
- **NullClaw** — Clean, quiet, responsive. Zero open issues/PRs is exceptional. Likely a mature, stable project.
- **NanoClaw** — Security hardening focus (cosign, signature approver). Small but purposeful.
- **Moltis** — Early-stage build phase. Two large PRs define the trajectory. Not yet public-facing.

### Inactive
- **TinyClaw, ZeptoClaw** — No activity in 24h. Watch for potential abandonment.

---

## 7. Trend Signals

| Trend | Evidence | Value for Developers |
|---|---|---|
| **Security is now table-stakes** | ZeroClaw (per-exec command tiers), IronClaw (approval workflows), OpenClaw (install gates), NanoClaw (cosign verification), Hermes (approval bypass fix) | Users demand granular allow/ask/deny policies. Build security into the core architecture, not as a bolt-on. |
| **Memory poisoning is the new threat model** | OpenClaw (#7707 trust tagging), Hermes (MEMORY.md data loss), IronClaw (pluggable memory), CoPaw (MEMORY.md refresh) | Memory systems need provenance tracking and source-based trust levels. Web-scraped content must not carry the same trust weight as user commands. |
| **OpenAI-compatible APIs are the universal protocol** | ZeroClaw (Chat Completions RFC #8603), CoPaw (Responses API), OpenClaw (multi-provider support), PicoClaw (provider updates) | Building on standard APIs maximizes ecosystem integration (Open WebUI, LobeChat, Continue.dev). Proprietary protocols are losing. |
| **Multi-agent collaboration is emerging as a feature category** | LobsterAI (cowork area), CoPaw (subagent grouping), IronClaw (subagent reconciliation), Moltis (Slack task cards) | Users want visible, manageable multi-agent workflows. Expect session-sidebar tooling and task cards to become standard. |
| **Automation determinism is the new frontier** | IronClaw (semantic execution outcomes, [SILENT] suppression, 71-clause conformance audits), OpenClaw (cron failures), Hermes (automated probes) | The gap between "chat assistant" and "reliable automation platform" is exactly here. Structured execution contracts will differentiate. |
| **Cost governance is a growing pain point** | OpenClaw (#42475 per-agent budgets), CoPaw (model overrides), IronClaw (per-automation model pinning) | As agents become more autonomous, operators demand financial controls. Per-agent/per-automation caps are the emerging answer. |
| **Windows deployment is the neglected child** | Hermes (P1 regression), NanoBot (os.replace crash), ZeroClaw (74 test failures), CoPaw (Python icon issues) | Cross-platform reliability is a competitive moat. Projects that fix Windows parity gain an underserved user base. |
| **Local-first storage is a feature, not a limitation** | Moltis (provider-neutral connectors, no copied credentials), NullClaw (read-only workspace support), NanoClaw (hardened images for edge) | Edge/NAS/container deployments want data sovereignty. Atomic snapshots and bounded local search are winning patterns. |
| **Streaming reliability is the silent killer** | OpenClaw (Feishu latency, stream events not relayed), NanoBot (Anthropic total-timeout), Hermes (stream-drop escalations), CoPaw (tool-call 404s) | Intermittent streaming failures erode trust faster than missing features. Idle-vs-total timeout semantics need clear documentation. |
| **Desktop UX is a strategic battleground** | CoPaw (auto-update, taskbar icons, media downloads), Hermes (Desktop gateway), LobsterAI (renderer polish, font bumps) | The winning agent isn't just a CLI tool—it's a first-class desktop app. Expect more investment in consumer-grade UI. |

---

## Final Assessment

The ecosystem is **healthy but fragmented**. OpenClaw leads on innovation and community size but is vulnerable on reliability. IronClaw and LobsterAI represent the best-disciplined engineering cultures, while NanoBot and NullClaw show what clean, focused projects can achieve. The **security and determinism gap** is the largest opportunity: no project has solved both, and users are actively demanding both. For developers choosing a platform, the decision hinges on priorities—**scale and breadth** (OpenClaw), **automation reliability** (IronClaw), **consumer polish** (CoPaw/LobsterAI), or **security hardening** (ZeroClaw/NanoClaw).

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-15

## 1. Today's Overview

NanoBot shows healthy, sustained development activity. Three issues were updated in the last 24 hours (one still active), and a robust 22 PRs received updates — 8 of which were merged or closed and 14 remain open for review. The project continues steady progress across providers, WebUI experience, and session management, with no new release published. The most notable items this cycle include an Anthropic streaming timeout bug fix, extensive WebUI refinement, and ongoing refactoring toward strict type checking. While the open-PR count (14) suggests a growing review queue, the mix of features, fixes, and refactors reflects a balanced, active codebase.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Project Progress

8 PRs were merged or closed in the last 24 hours, covering a wide range of improvements:

| PR | Title / Area | Status | Link |
|----|-------------|--------|------|
| #5392 | **fix(anthropic): treat stream idle timeout as inactivity only, not total time** — Fixes a critical bug where long-running but active Anthropic generations were killed by the total timeout | Merged | [View](https://github.com/HKUDS/nanobot/pull/5392) |
| #5395 | **feat(webui): refine conversation groups and shared shapes** — Consistent group terminology, localized grouping workflow, drag support for active topics, simplified delete confirmation | Merged | [View](https://github.com/HKUDS/nanobot/pull/5395) |
| #5393 | **feat(webui): polish sidebar and session transitions** — Cleaner sidebar hierarchy, flatter tab treatment, tab-matched disclosures; UI-only split from #5358 | Merged | [View](https://github.com/HKUDS/nanobot/pull/5393) |
| #5390 | **Agent/knowledge graph** — New feature work for agent knowledge graph support | Merged | [View](https://github.com/HKUDS/nanobot/pull/5390) |
| #4689 | **feat(providers): surface OAuth status and expiry warnings** — Proactive token expiry warnings across CLI, WebUI, and runtime sessions (closed, not merged — marked invalid/conflict) | Closed | [View](https://github.com/HKUDS/nanobot/pull/4689) |
| #5018 | **feat(skills): support explicit context loading** — Honored the previously-ignored `skill_names` input on `ContextBuilder` for preloading requested skills | Closed (resolved) | [View](https://github.com/HKUDS/nanobot/pull/5018) |

**Key advances:** The Anthropic idle-timeout fix directly resolves a user-facing generation-killing bug. The WebUI continues to mature rapidly with group organization and sidebar polish. Explicit skill context loading expands programmatic control over context building.

---

## 4. Community Hot Topics

**Most active items (by comments/reaction):**

- **[#5161 / #5396 — Pyright strict-checking refactor](https://github.com/HKUDS/nanobot/issues/5161)** — The open issue requesting removal of file-level Pyright suppressions has an active companion PR from ojassharma7 with the same goal. This technical-debt cleanup touches 10+ tool files and is part of the broader strict-type-checking initiative.

- **[#5391 / #5392 — Anthropic total-timeout bug](https://github.com/HKUDS/nanobot/issues/5391)** — The bug report and immediate fix highlight a sharp edge in the Anthropic provider: `NANOBOT_STREAM_IDLE_TIMEOUT_S` was incorrectly applied as a total timeout, killing long but actively-generating streams. Fast turnaround (same-day fix merged) signals good maintainer responsiveness.

- **[#5396 — Pyright refactor PR](https://github.com/HKUDS/nanobot/pull/5396)** — Touches the most files of any open PR (10+ tool modules), suggesting it may face review hurdles, but deepens type-safety coverage.

- **[#5389 — Drag-and-drop session organization](https://github.com/HKUDS/nanobot/pull/5389)** — Pulling WebUI session management closer to modern chat-app expectations with drag-to-group and drag-to-reorder.

These items reveal the community is pushing on two fronts: (1) code quality under the hood (type safety), and (2) richer WebUI interaction patterns.

---

## 5. Bugs & Stability

| Severity | Bug | Status | Fix PR | Link |
|----------|-----|--------|--------|------|
| **High** | **Anthropic streaming total-timeout kills long active generations** (#5391) — idle timeout wrongly applied as total timeout on no-callback path | Reported & fixed same day | #5392 (merged) | [Issue](https://github.com/HKUDS/nanobot/issues/5391) / [Fix](https://github.com/HKUDS/nanobot/pull/5392) |
| **Medium** | **Session corruption on archive failure** (#5378) — `enforce_file_cap()` mutates in-memory session before archive callback; a raising callback leaves caller with lost data | Reported, no fix PR yet | — | [View](https://github.com/HKUDS/nanobot/issues/5378) |
| **Medium** | **Stale background saves overwrite sessions after `/new`** (#5271, open PR) — in-flight tasks can write over newly reset sessions | Fix under review | #5271 | [Fix](https://github.com/HKUDS/nanobot/pull/5271) |
| **Medium** | **Windows transient PermissionError on session save** (#5382, open PR) — `os.replace()` failed twice in production logs during heartbeat saves; crashes the whole gateway | Fix under review | #5382 | [Fix](https://github.com/HKUDS/nanobot/pull/5382) |
| **Low/Moderate** | **Marketplace skills blocked by shadowed installed state** (#5309, open PR) — bundled skills prevent installing workspace overrides | Fix under review | #5309 | [Fix](https://github.com/HKUDS/nanobot/pull/5309) |

**Overall:** Stability is a clear focus with 3 of 5 active bugs having fix PRs already submitted. The Windows `os.replace()` crash deserves priority attention given incidents were observed in production logs.

---

## 6. Feature Requests & Roadmap Signals

Consistent with recent PR activity, the next NanoBot release is likely to deliver:

| Feature | Evidence | Likelihood |
|---------|----------|-----------|
| **WebUI session collaboration** — Mention-based peer session sharing (`@name`), stable identity colors | #5358 (open, active) | High — sibling PR #5393 already merged |
| **MCP SDK v2 migration** — Modern `Client` API with `httpx2` transport, legacy SSE compatibility | #5179 (open, ~2 weeks active) | High |
| **Subagent partial-completion awareness** — Model told not to infer results from unfinished siblings | #5152 (open, active) | Medium-High |
| **Native TypeScript terminal UI** — OpenTUI client preserving Python gateway as backend | #4329 (open since June, active in last 24h) | Medium — long-lived, complex |
| **Interactive particle hero background** — Canvas UI on empty-thread view | #5340 (open) | Medium |
| **Localized agent activity labels** — all 10 locales, live-updating on language switch | #5367 (open) | Medium |

---

## 7. User Feedback Summary

- **Anthropic streaming reliability remains a pain point.** The idle-vs-total timeout confusion (#5391) shows users are hitting long-generation scenarios where defaults are unfriendly. The fast fix is appreciated, but future work should clarify timeout semantics in docs and env vars.

- **Windows deployment stability is fragile.** The `os.replace()` PermissionError (#5382) crashed an entire gateway during routine heartbeat work — not once but twice in a single day's logs. Windows users continue to be second-class citizens in save-path robustness.

- **WebUI polish is paying off.** The volume of merged WebUI improvement PRs (#5393, #5395) and the rapid iteration on sidebar/groups/transitions suggests strong user engagement with the session management experience. The natural next step: collaboration features from #5358.

- **Session data integrity under lifecycle changes (/new) is a recurring concern.** Both #5271 and #5378 touch the same theme — user data being lost or overwritten during session transitions or file-cap enforcement. This deserves top-level attention before the next release.

---

## 8. Backlog Watch

Items that have been open for a long time or require maintainer attention:

| Item | Age (days) | Issue | Status | Signal |
|------|-----------|-------|--------|--------|
| **#4329 — Native TypeScript terminal UI** | 63+ | [View](https://github.com/HKUDS/nanobot/pull/4329) | Open, updated in last 24h | Long-running large architectural PR; needs maintainer decision on scope/merge |
| **#4145 — Weather Skill** | 75+ | [View](https://github.com/HKUDS/nanobot/pull/4145) | Open, updated in last 24h | Skill contribution dormant since June; active again — worth a review pass |
| **#5152 — Subagent partial completion results** | 18 | [View](https://github.com/HKUDS/nanobot/pull/5152) | Open, active | Critical for agent correctness; needs reviewer attention |
| **#4689 — OAuth status/expiry warnings** | 43 | [View](https://github.com/HKUDS/nanobot/pull/4689) | **Closed — marked invalid/conflict** | Despite being a user-requested feature (fixes #4679), it was closed as invalid; likely should be reworked and resubmitted |
| **#5309 — Marketplace skills shadowing builtins** | 6 | [View](https://github.com/HKUDS/nanobot/pull/5309) | Open, needs review | Functional bug with a ready fix; no reviewer engagement yet |

**Watch item:** #4689's closure as "invalid" while claiming to fix issue #4679 warrants a maintainer response — it may indicate a documentation gap (what constitutes a valid PR) or a design disagreement that should be surfaced to the community.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Based on the GitHub data from Hermes Agent for 2026-08-15, here is the project digest:

---

## 1. Today's Overview

Hermes Agent shows a **high-velocity development day** with 50 issues and 50 PRs updated in the last 24 hours. Activity is heavily skewed toward **active work** (47 open/active issues) with a healthy mix of merged/closed PRs (24). The project is executing a deliberate **"Discord Omniscience" campaign** (sub-issues of #79564) and a **skills ecosystem expansion** (PR #86557). While no new releases shipped today, the volume of closed PRs and rapid issue triage indicates a mature, well-maintained project. A notable pattern is the prevalence of **`sweeper:risk-session-state`** and **`sweeper:risk-compatibility`** labels, suggesting a strong focus on data integrity and cross-platform stability.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

Today saw several key fixes merged, indicating a push to stabilize core functionality:

- **Session State Integrity**: PR #83785 (closed) implemented durable SQLite row-id addressing for rewind/truncation, fixing a critical issue with session rewinding. PR #86290 (closed) fixed `session_search` returning empty results as proof of absence, improving memory retrieval accuracy.
- **Cross-Platform & Compatibility**: PR #86374 (closed) fixed tool CLI discovery in the TUI/Dashboard by prepending Hermes-specific directories to the PATH. PR #84859 (closed) fixed a browser tool crash caused by inherited venv pointers, and PR #86355 (closed) added Matrix project session routing.
- **Security & Privacy**: PR #70375 (open) proposes redacting secrets in the local backend log ring, addressing a security concern. PR #86313 (closed) fixed a critical bug where a bot profile’s prompt leaked the default profile’s skills and identity.
- **Provider & Tooling**: PR #86572 (closed) escalates repeated stream-drop stalls to a fallback chain, improving resilience against provider outages. PR #86563 (open) fixes a gateway crash on foreign `XDG_RUNTIME_DIR`.
- **Discord Omniscience Campaign**: Multiple feature PRs are being pushed forward, including structured inbound message models (#86440), reaction actions (#86419), and poll projections (#86451).

## 4. Community Hot Topics

- **#78647 [CLOSED] [EPIC — COMPLETE] "All Gods Must Die: 20/20 killed"** — With 77 comments, this epic tracks the successful sharding of all "god-files" into clean modules. The community's heavy engagement signals strong support for maintainability improvements, and its completion is a major milestone.
- **#34352 [OPEN] "Solving the Multi-Tenant Hermes Problem"** — With 31 comments and 3 👍, this is a high-interest feature request. Users are actively discussing memory isolation issues for multi-tenant agent setups, indicating a desire for more robust, production-grade hosting capabilities.
- **#66616 [OPEN] "Skills index is stale or degraded"** — This automated freshness probe with 31 comments highlights an ongoing operational issue where the skills index is often outdated, which could be hampering users' ability to discover and use skills.
- **#83683 [OPEN] "Desktop restart reaps the live gateway but never relaunches it"** — A P1 regression on Windows with 27 comments, this is a significant pain point for desktop users, causing messaging platforms like WeChat and QQ to go silent.

## 5. Bugs & Stability

Several bugs were reported today, ranked by severity:

- **High (P1)**:
    - **#83683**: Desktop restart kills the messaging gateway on Windows and never relaunches it. No fix PR is currently open for this critical regression.
    - **#85825 [CLOSED] (P0, Windows)**: Memory replace/remove silently overwrites the entire `MEMORY.md` file due to a CRLF line-ending mismatch. This data-loss bug was severe but has been closed, presumably with a fix.
- **Medium (P2)**:
    - **#86558**: `hermes gateway restart` crashes with a `PermissionError` from a foreign `XDG_RUNTIME_DIR`. Fix PR #86563 is open.
    - **#86510**: `read_file` `total_lines` is off-by-one for files without trailing newlines, causing incorrect line counts.
    - **#86513**: File tools dedup/staleness checks use host filesystem stats, which fails for remote/container backends.
    - **#86567**: Windows cron script execution ignores `.pth` files from editable installs, potentially breaking script jobs in `uv`-managed venvs.
    - **#86568**: A security bug where `approvals.deny` rules can be bypassed with repeated whitespace or tab characters.
- **Low (P3)**:
    - Issues like #83845, #86565, and #86561 represent lower-impact bugs or UX gaps, such as PATH issues in Dashboard sessions and UI status dot inaccuracies.

## 6. Feature Requests & Roadmap Signals

- **Discord Omniscience Campaign (#79564)**: A clear and active roadmap signal. The meta-issue is breaking down Discord API v10 parity into many small, welldefined, and testable features (e.g., autocomplete fidelity #86535, component auth #86536, voice messages #86537), indicating that full Discord feature parity is a near-term goal.
- **Multi-Tenant Support (#34352)**: This is a significant and complex feature request with high community interest. It tackles memory isolation and core architecture, suggesting Hermes is being pushed toward team/enterprise use cases.
- **Shared Lifecycle Hooks (#67798)**: Users are asking for a unified runtime contract for hooks across all execution surfaces (CLI, TUI, Gateway). This is an architectural cleanup that would simplify plugin development.
- **Project Session Management (#86561)**: A user requested the ability to move existing sessions into Projects, indicating a need for better post-hoc session organization and workspace management.

## 7. User Feedback Summary

- **Frustration**: The #1 pain point is the **P1 Windows desktop regression (#83683)** where messaging gateways silently die after a restart. Users are clearly frustrated by this break in core functionality.
- **Security & Data Integrity Concerns**: Users report serious bugs like the **memory data-loss issue (#85825)** and a security bypass for approval rules (#86568), indicating a high level of scrutiny and a demand for robust safety guarantees when granting agent permissions.
- **Mixed Experience**: While the completion of the "god-file" epic (#78647) suggests satisfaction with internal code health, the numerous "risk-session-state" issues (e.g., #79625, #85834, #68876) point to ongoing frustrations with session reliability across different interfaces (Desktop, SSH). The flood of duplicate issues (#86509, #86510, #86513) suggests that maintainers are facing a high bug-report volume, possibly stretched thin.

## 8. Backlog Watch

- **#34352: Solving the Multi-Tenant Hermes Problem** — Open since late May, this high-comment, high-reaction issue has deep architectural implications. While it has a `needs-decision` label, it seems to be a long-standing request that requires careful design and implementation, not a quick fix.
- **#4064: Enable mouse support in CLI with config toggle** — This small but straightforward UX feature has been open since March. Its long life suggests it's a low-priority enhancement despite being easy to implement, and it may need a maintainer to simply green-light it.
- **#67798: Make lifecycle hooks a shared runtime contract** — This feature request, opened in July, is still tagged `needs-decision`. Given the ongoing work on session state and the various execution surfaces, this architectural change will likely grow in importance and warrants a maintainer decision to prevent future rework.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-15

## Today's Overview

Moderate activity with 3 issues and 9 PRs touched in the last 24 hours, indicating a steady maintenance and development cadence. The most significant development is PR #3337, which directly addresses the highest-severity open bug (#3269) — an MCP server connection failure that causes the agent loop to hang and stops chat replies entirely. Five PRs were closed (mostly stale/automated cleanup and completed features), while the remaining four remain open for review. No new releases were published this cycle. Overall project health appears solid, though three stale PRs and several long-standing feature gaps (Telegram session management, model fallback chains) suggest areas where maintainers may want to prioritize attention.

## Releases

No new releases in the last 24 hours.

## Project Progress

**Merged/Closed PRs (5):**

- **#3303** — `build(deps): bump actions/stale from 10 to 11` (dependabot, closed). Routine dependency update for the stale-bot GitHub Action.
- **#3283** — `fix(dingtalk): support picture/image message inbound` (MrTreasure, closed). Adds inbound image message support for the DingTalk channel, including token caching (`tokenMu`, `accessToken`, `tokenExpires`), image download, and graceful degradation on failure.
- **#3279** — `fix(seahorse): prevent tool-call format leakage into LLM summaries` (MrTreasure, closed). Fixes a class of bug where internal tool-call formatting (e.g. `{tool:...}` JSON) leaks into user-visible messages via seahorse's `partsToReadableContent`.
- **#3271** — `chore(providers): update default model names to 2026-07 latest` (LeaderOnePro, closed). Refreshes default model lists across 9 providers (OpenAI, Anthropic, etc.) with current model IDs, verified against official docs. Notably bumps OpenAI to gpt-5.6 variants.
- **#3270** — `feat: add DashScope TTS provider and WeChat audio file sending` (MrTreasure, closed). New TTS provider for Alibaba Cloud DashScope/Bailian, plus WeChat channel support for sending audio files.

**Advancements visible this cycle:** multi-channel media support (DingTalk inbound images, WeChat outbound audio), provider model currency updates, and seahorse output cleanliness. The DashScope TTS and WeChat audio work (both merged) significantly expand the platform's channel and voice capabilities.

## Community Hot Topics

1. **Issue #3269 — MCP server connection failure hangs agent loop** ([link](https://github.com/sipeed/picoclaw/issues/3269))
   - 5 comments, 1 👍 | Reported by ruiyigen on 2026-07-20, updated 2026-08-14
   - **Analysis:** The most active issue this cycle, and rightly so — inability to reply in chat is a critical usability failure. The long duration (nearly a month) suggests intermittent or environment-specific reproduction. A fix PR (#3337) is now open.

2. **PR #3222 — refactor(deltachat): cleanup implementation, documentation -200LOC** ([link](https://github.com/sipeed/picoclaw/pull/3222))
   - Open, no comments yet; by trufae
   - **Analysis:** Significant refactor — drops legacy features, secrets are now JSON-RPC only, renames `invite_link` semantics. This touches security behavior and is worth close review despite low fanfare.

3. **Issue #3307 — Session list/switch command for Telegram** ([link](https://github.com/sipeed/picoclaw/issues/3307))
   - 2 comments, closed as stale. **Underlying need:** Web UI has full session management; Telegram users cannot list/switch/delete sessions. This is a parity gap that may frustrate heavy Telegram users.

4. **Issue #3308 — Code review: concurrency hazards, goroutine leaks in SeaHorse/Channel Manager/Hooks** ([link](https://github.com/sipeed/picoclaw/issues/3308))
   - 2 comments, closed as stale. Reviewer identified real concurrency risks. Despite closing, this content may be worth mining for follow-up fixes.

## Bugs & Stability

**Ranked by severity:**

1. **CRITICAL — MCP server connection failure hangs agent loop + chat interface stops replying** (Issue #3269, [link](https://github.com/sipeed/picoclaw/issues/3269), reported 2026-07-20)
   - Impact: Total loss of response on chat if any MCP server connection breaks. Error propagates from `ensureMCPInitialized` and kills the `AgentLoop.Run` loop entirely.
   - Fix status: PR #3337 ([link](https://github.com/sipeed/picoclaw/pull/3337)) opened 2026-08-14 — retries/handles MCP init errors without exiting; **not yet merged**.
   - Action: High priority to merge and test.

2. **MODERATE — Tool-call format leakage into LLM summaries (seahorse variant)** (PR #3279, [link](https://github.com/sipeed/picoclaw/pull/3279))
   - Fixed and merged. Prevents raw tool-call JSON from bleeding into user-facing messages — a data-leak and UX bug.

3. **MINOR — DingTalk image inbound edge cases** (PR #3283, [link](https://github.com/sipeed/picoclaw/pull/3283))
   - Addressed via graceful degradation; merged.

4. **POTENTIAL — Concurrency hazards / goroutine leaks in SeaHorse, Channel Manager, Hooks** (Issue #3308, [link](https://github.com/sipeed/picoclaw/issues/3308))
   - Reviewer-identified but closed as stale; no linked fix PR yet. Should be reopened or converted to action items.

## Feature Requests & Roadmap Signals

1. **Configurable default model fallback chain** — PR #3200 ([link](https://github.com/sipeed/picoclaw/pull/3200), open since 2026-07-01)
   - Users can set primary + fallback models, reorder, and persist via web UI. This is a meaningful UX improvement for reliability (automatic failover) — likely to land next.

2. **Session management for non-web channels (Telegram et al.)** — Issue #3307 ([link](https://github.com/sipeed/picoclaw/issues/3307))
   - Parity gap between Web UI and Telegram. Closed as stale but underlying need remains; a `/sessions` command is plausibly on the roadmap.

3. **DashScope TTS + WeChat audio sending** — PR #3270 (merged)
   - Now in-tree; likely to be in next release's changelog.

4. **DingTalk image inbound** — PR #3283 (merged)
   - Cross-channel media support is clearly an active theme.

5. **Model provider list freshness** — PR #3271 (merged)
   - Reflects an ongoing commitment to keeping provider defaults current (gpt-5.6 series).

**Prediction for v-next:** The MCP hang fix (#3337) will be cherry-picked for a hotfix. The fallback chain (#3200) is the most substantive feature likely to be included. Expect the DashScope TTS, WeChat audio, DingTalk images, and provider updates to roll into the next minor release.

## User Feedback Summary

- **Pain point (critical):** MCP server failure → complete loss of chat replies (Issue #3269). Users depend on MCP tool integrations; one flaky server should not take down the whole agent. This is the top dissatisfaction driver right now.
- **Positive signals:** Multiple multi-channel media features (WeChat audio out, DingTalk images in) are being shipped quickly — users on these platforms are seeing rapid capability growth.
- **Feature gap:** Telegram (non-web) users still lack session management, forcing them to use the web UI for anything beyond basic chat — a frustration for mobile/Telegram-heavy workflows.
- **Health check:** The community (esp. `MrTreasure`, `LeaderOnePro`) is actively fixing bugs and adding features in a structured way; the project responded well to the MCP hang with a targeted PR within a day of the latest update to Issue #3269.

## Backlog Watch

1. **PR #3222 — DeltaChat cleanup & security-relevant refactor** ([link](https://github.com/sipeed/picoclaw/pull/3222), open since 2026-07-03)
   - No comments yet. Changes secret storage semantics and drops legacy behavior; needs maintainer review sign-off.

2. **PR #3200 — Configurable default fallback chain** ([link](https://github.com/sipeed/picoclaw/pull/3200), open since 2026-07-01)
   - No maintainer comments. High-value UI + backend feature; likely deserves attention before v-next.

3. **PR #3319 — exec tool timeout/boolean option corrections** ([link](https://github.com/sipeed/picoclaw/pull/3319), open since 2026-08-07)
   - Silent `timeout` arg and boolean schema mismatch are correctness issues; stale-tagged but relevant.

4. **Issue #3308 — Concurrency hazards code review** ([link](https://github.com/sipeed/picoclaw/issues/3308), closed as stale)
   - Recommendations (goroutine leak fixes) should be surfaced as actionable follow-up issues before they rot.

5. **PR #3337 — MCP failure hang fix** ([link](https://github.com/sipeed/picoclaw/pull/3337), opened 2026-08-14)
   - Brand new; priority review and ideally merge + release.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-15

## 1. Today's Overview

NanoClaw is in a steady-state maintenance and hardening phase, with **no new releases** and a moderate level of activity: **2 open issues** and **11 pull requests** touched in the last 24 hours. The PR pipeline shows a healthy mix of community bug fixes (attachment handling, cron scheduling, Windows container cleanup), feature work (a new Dial channel adapter), and **core-team process validation** around the signature-approval workflow (3 PRs, all intentionally closed unmerged as live-fire tests). The issue tracker is notably quiet, with only two new bug reports — both setup/installation-related — suggesting the project is stable for existing users but has rough edges in first-run experience. No regressions or severe stability concerns were raised today.

## 2. Releases

No new releases were published in this window. The project remains on its previous version; the most recent release history is unchanged as of 2026-08-15.

## 3. Project Progress

Three PRs were closed/merged today, all from the core team and all intentionally **not merged** — they were "DO NOT MERGE" draft live-fire tests for the signature approver CI chain:

- **[#3242 — [core-team] DO NOT MERGE — live-fire test of the signature approver](https://github.com/nanocoai/nanoclaw/pull/3242)** (closed unmerged): Pinned to the previous hardened build to exercise the full `verify → approve-agent-image → independent cosign verify → approving review` chain.
- **[#3243 — [core-team] verify-agent-image: arming auto-merge is not a verdict](https://github.com/nanocoai/nanoclaw/pull/3243)** (closed unmerged): Fixed a CI-logic bug where `Enable auto-merge` (the last job step) could fail the whole job on a draft PR or transient API error, incorrectly flagging the image as bad. This is a **real fix** folded into the validation process.
- **[#3244 — [core-team] DO NOT MERGE — live-fire the signature approver (take 2)](https://github.com/nanocoai/nanoclaw/pull/3244)** (closed unmerged): Follow-up test confirming the fix from #3243 works — verify now goes green on draft PRs and the approver fires independently.

Progress is focused on **supply-chain security hardening** (cosign verification of agent images) and **installation robustness**, rather than new user-facing features.

## 4. Community Hot Topics

No issues or PRs have significant comment/reaction counts today (all show 0 comments, 0 reactions). The most substantive discussions are embedded in the PR descriptions themselves:

- **[PR #2752 — fix: stage inbound attachments that expose only a url (Discord)](https://github.com/nanocoai/nanoclaw/pull/2752)** — Open since June, updated today. Addresses a real functional gap: Discord attachments (pasted text auto-converted to `message.txt`, images) never reach the agent as readable bytes/paths. It details the "why" via the chat-sdk bridge download behavior. This is the most feature-relevant open discussion for agent usability.
- **[PR #2427 — fix: attachment issues](https://github.com/nanocoai/nanoclaw/pull/2427)** — Open since May, also updated today. Likely related to the same attachment pain point; its prolonged open status (3 months) suggests either complexity or maintainer bandwidth constraints.

Underlying need: **agents aren't seeing the content of Discord attachments**, which breaks a core channel's utility. Users want the byte-level data staged and exposed to the agent, not just a token reference.

## 5. Bugs & Stability

Two new bugs reported today, both in the setup/install path:

- **[#3248 — [bug] setup.sh's "Node missing or too old" branch cannot handle too old](https://github.com/nanocoai/nanoclaw/issues/3248)** *(Medium severity)* — `setup.sh` correctly version-checks Node (requires major ≥ 20) but the fallback helper (`install-node.sh`) short-circuits if *any* Node exists, so a too-old Node neither passes validation nor triggers a reinstall. User is stuck in a loop. **Fix PR exists: [#3249](https://github.com/nanocoai/nanoclaw/pull/3249)** (open, follows-guidelines, core-team tagged) — handles the "existing Node is too old" case. *Actionable, likely to land soon.*

- **[#3245 — Prebuilt agent image: Bun binary requires AVX2 — SIGILL on CPUs without it](https://github.com/nanocoai/nanoclaw/issues/3245)** *(High severity for affected hardware)* — The default hardened agent image (`NANOCLAW_HARDENED_IMAGE=true`, wizard-recommended) ships a Bun binary compiled for non-baseline x64 requiring AVX2. On AVX2-less CPUs (e.g., Intel Tremont/Elkhart Lake Atoms like Celeron J6413/N5105), the agent crashes with SIGILL on startup. This affects real edge/IoT/NAS deployments. **No fix PR yet** — needs either a baseline-x64 build or a runtime capability check with graceful fallback.

Ranking: #3245 (SIGILL, blocks deployment on common low-power hardware) > #3248 (setup loop, workaround exists — manually install Node 20+).

## 6. Feature Requests & Roadmap Signals

The clearest feature signal is the **[Dial channel adapter](https://github.com/nanocoai/nanoclaw/pull/3041)** (SMS + AI voice calls) plus its **[setup wizard integration](https://github.com/nanocoai/nanoclaw/pull/3050)** — both open since mid-July and updated today. This is a substantial new channel (telephony) that, if merged, would be the headline feature of the next minor release.

Secondary signal: the **attachment handling fixes** (#2427, #2752) are not features but their persistence suggests the maintainers treat "agent sees attachment bytes" as a must-fix for channel parity — likely to be bundled into a stability release.

Prediction for the next version: if #3041/#3050 and #3249 land together, expect a minor release with **Dial channel support + hardened setup path**.

## 7. User Feedback Summary

Pain points expressed today:

- **Installation friction**: Node version detection is broken for the "too old" case (#3248) — a user who followed the wizard got stuck, indicating the guided flow isn't fully foolproof.
- **Hardware compatibility gap**: The "hardened" default image silently breaks on AVX2-less CPUs (#3245) — a trust issue, since the wizard *recommends* this image. Users on low-power devices (NAS, home servers, edge boxes) are effectively locked out.
- **Discord attachments not readable by agents** (via PR #2752): Pasted text and images arrive as bare `[file: message.txt]` tokens with no data — a channel-parity frustration for active Discord users.

Satisfaction signals: No complaints about core agent behavior, performance, or API stability — the project's runtime appears solid; the pain is concentrated in onboarding and edge-case hardware.

## 8. Backlog Watch

Items that need maintainer attention and have been open for a while:

- **[PR #2427 — fix: attachment issues](https://github.com/nanocoai/nanoclaw/pull/2427)** — Open since **2026-05-12** (3+ months). Both attachment PRs (#2427, #2752) are still unmerged; they may overlap or conflict. Maintainers should reconcile and merge one to close this long-standing gap.
- **[PR #3050 / #3041 — Dial channel (wizard + adapter)](https://github.com/nanocoai/nanoclaw/pull/3050)** — Open since **2026-07-14** (1 month). Updated today but no merge activity. A significant feature PR this stale risks bit-rot; needs a review decision.
- **[Issue #3245 — AVX2-dependent Bun binary](https://github.com/nanocoai/nanoclaw/issues/3245)** — Only 1 day old, but it's a **release-blocker-class bug** for a subset of hardware; the absence of any `core-team` label or assignee suggests it hasn't been triaged yet. Recommend prioritizing before the next release.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-15

## 1. Today's Overview

NullClaw saw minimal activity over the past 24 hours, consistent with a steady-state development phase. No new issues were opened or updated, and no releases were published. A single pull request (#986) was merged, addressing a practical configuration gap in SQLite-backed memory storage. The project remains healthy with a low issue backlog and a focused, incremental contribution cadence. The lack of open PRs or unresolved issues suggests maintainers are keeping the queue clear and responsive.

## 2. Releases

No new releases were published in the last 24 hours. The project appears to be in a between-release period, with the merged PR likely targeting the next minor or patch version.

## 3. Project Progress

**Merged/Closed PRs — 1**

- **PR #986 — GEN-548: make SQLite memory database path configurable** ([link](https://github.com/nullclaw/nullclaw/pull/986)) — *merged*
  - **Author:** gently-whitesnow
  - **What advanced:** This change introduces a `memory.database_path` configuration option for SQLite-backed primary memory engines. It preserves backward compatibility by defaulting to the existing `<workspace>/memory.db` location when the setting is empty. Relative paths are resolved from the workspace directory, and absolute paths are supported for read-only workspace deployments. The setting is documented in the example configuration.
  - **Impact:** This addresses a real deployment constraint — teams running NullClaw in containerized or read-only filesystem environments can now relocate their memory database to a writable volume without forking the codebase.

## 4. Community Hot Topics

No issues or PRs generated substantive discussion in the last 24 hours (0 comments, 0 reactions across all items). The single PR (#986) was merged without public commentary, suggesting either a straightforward change or that discussions occurred out-of-band (e.g., on Discord, in design docs, or via the linked ticket GEN-548).

**Analysis:** The absence of public discussion on #986 is notable given it touches storage configuration — a topic that typically draws deployment-focused feedback. This may indicate the change was well-scoped and uncontroversial, or that the contributor community primarily communicates through the internal ticket system rather than GitHub threads.

## 5. Bugs & Stability

No new bugs, crashes, or regressions were reported in the last 24 hours. The project's zero open issue count reflects a clean state with no known unresolved stability concerns.

## 6. Feature Requests & Roadmap Signals

While no explicit feature requests were filed today, the merged PR #986 signals a broader roadmap theme: **deployment flexibility for enterprise/containerized environments**. The changeset's emphasis on:
- Read-only workspace support (absolute path handling)
- Configuration-driven storage locations
- Backward-compatible defaults with explicit overrides

...suggests the maintainers are actively hardening NullClaw for production deployment scenarios. Predictions for the next version:
- **High likelihood:** Additional configuration-driven paths for other storage backends (e.g., vector indices, checkpoint files)
- **Moderate likelihood:** Support for external database services (Postgres, MySQL) as primary memory engines, given the precedent set by making SQLite configurable
- **Possible:** Documentation pass on deployment patterns for Docker/Kubernetes environments

## 7. User Feedback Summary

No direct user feedback, bug reports, or feature requests were submitted in the last 24 hours. The lack of negative feedback combined with a clean merge of a deployment-focused PR suggests:
- Users are generally satisfied with current stability (no bug reports)
- The opening of ticket GEN-548 (referenced in PR #986) indicates internal or customer-driven demand for flexible storage configuration — likely from teams hitting filesystem constraints in production

## 8. Backlog Watch

**No items require maintainer attention.** The project currently has:
- 0 open issues
- 0 open PRs
- No stale or long-unanswered discussion threads

This is an exceptionally clean state. The only potential item for maintainers to monitor is the follow-up to PR #986: ensuring the new `memory.database_path` setting is reflected in any Helm charts, Docker Compose examples, or cloud deployment templates the project maintains, as those are common places where configuration is surfaced to end users.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-15

## 1. Today's Overview

IronClaw is in a period of **very high activity**, with 71 issues and PRs updated in the last 24 hours. The project is executing on multiple parallel fronts: the **v1.3.0 automation reliability epic** (#6879) is the dominant theme, with several large PRs and follow-up issues landing or in flight. Notably, the **1.2.0 release line was merged back into main** (#7657) and the team is forward-porting validated fixes (#7663), indicating a clean release-merge discipline. There is also a strong **QA bug-fix cadence** (epic #7414) with 5 new `bug_bash_P2`/`qa-bug` issues filed today, covering Slack UI state, Telegram MP4 uploads, and extension state leaking between users. The unbound-turns execution model (#7634, #7562) is nearing completion with a 71-clause conformance audit, signaling a significant architectural switchover. The project appears healthy and shipping: 23 PRs closed/merged and 9 issues closed in the last 24 hours.

## 2. Releases

**No new versions were released today.**

However, two release-related PRs are notable: **#7657** merged the validated `1.2.0` release line back into `main` (with state-preserving 1.0/1.1→1.2 startup migrations), and **#7663** forward-ports the independently validated 1.2 fixes onto current main — including thread-index projection repair, Windows filesystem/smoke reliability, clean Windows JSON output, and runtime `curl` for orchestrator healthchecks.

## 3. Project Progress

**Merged/closed PRs today (23 total)** reflect three major workstreams:

**Automations reliability (v1.3.0 epic #6879):**
- **#7650** — *Persist semantic execution outcomes*: structured automation results are now evaluated only after durable settlement; replaces the hidden one-second reconciler with an exact-run terminal settlement event and async judge tasks.
- **#7651** — *Deterministic no-result suppression*: `trigger_create` now requires an explicit `deliver` or `suppress_when_nothing_to_report` choice, with `[SILENT]` as the typed no-delivery contract.

**Unbound-turns execution model:**
- **#7562** — *Design + phase 1*: prepared-context accept door, unbound run lane, and kernel binding-ref deletion; squash-merged with base design docs.
- **#7634** (open) — *Complete the switchover*: ships all follow-ups with a 71-clause conformance audit of both design docs.

**Bug fixes and hardening:**
- **#7668** — *Surface provider auth diagnostics*: preserves bounded GitHub error messages through WASM/ABI so the model can act on 401s.
- **#7666** — *Tell the truth on extension cards*: fixes QA issue #7660 (Slack Reconnect/Finish Setup state) and device-link install guidance.
- **#7658** — *Telegram 2FA gate on migrated DCs*: recognizes the 2FA gate and says where login codes arrive.
- **#7655** — *CI coverage floors re-pinned* to observed reality for Slack/Telegram crates.
- **#7665** — *Origin-scoped hosted MCP OAuth* support.
- **#7628** (open) — *Remove heartbeat journal churn*: stops appending heartbeat rows, keeps lease timestamps authoritative.

**Docs and governance:**
- **#7532** — Structured execution specs (v1.3.0) closed, the foundation for the automation work.

## 4. Community Hot Topics

**#6879 — "Automation runs are hit-or-miss" (epic, v1.3.0)**
The most active item, parent to 7+ sub-issues (#7644–#7647) and 5+ PRs. It diagnoses a structural flaw: unattended trigger fires execute as plain interactive chat turns, causing inconsistent behavior on small models. The team is responding with a comprehensive structured-contract redesign rather than point fixes. Key follow-ups: model pinning per automation (#7645), preflight grant checks with standing approval leases (#7646), one-time verification before arming (#7644), and deterministic no-delivery (#7647).

**#7664 — Pluggable memory over MCP (tracking issue)**
A significant architectural direction: making memory systems bindable by configuration, with **Mnesis Core** as the first consumer. The provider crate is drafted in #7661. This signals the project opening its memory layer to third-party backends.

**#7624 — ACP harness executor (v0)**
Part of the pluggable-loops epic (#7482), this is the *only* work item marked "build right now" — using `claude-code` as the loop in a dev-only mode (#7648 PR exists). The remaining ladder items (#7621–#7623) are explicitly deferred.

**Closed issues worth watching:** #7414 (Dogfooding & QA epic) closed, #7520 (retire superseded WebUI surfaces) closed — both indicate disciplined scope reduction.

## 5. Bugs & Stability

Ranked by severity:

**P2 / High:**
- **#7660 — Slack shows "Reconnect"/"Finish Setup" despite active connection** (Railway QA instance). Contradictory UI state while the agent is fully functional. **Fix PR #7666 merged**.
- **#7659 — Extension state leaks between users**: extensions installed by other users appear as the current user's on the Registry page. No fix PR yet, but a security-related isolation concern.
- **#7662 — MP4 attachment fails in Telegram** with `invalid_value (attachments.mime_type)` despite correct detection. No fix PR yet.

**P2 / Medium:**
- **#7667 — Telegram phone-mode login code never arrives** due to `sentCode.type_` not being reflected in the hint (raw-TL send path). Follows up on QA from 2026-08-14; partially addressed by #7658 for QR/2FA, but this is the phone path.
- **#6869 — DOCX files unreadable by Word** (closed today, but fix landed): generated documents were corrupt due to protocol violations.

**Low / Consistency:**
- **#7638 — Thread deletion uses blocking `window.alert()`** instead of global toasts (open).
- **#7639 — Inline feedback banners** have inconsistent styling/status semantics across Jobs, Projects, Workspace, Extensions (open).

**Performance:**
- **#7628 — Heartbeat journal churn** is being eliminated (PR open); **#7652** measured production DB write workloads for the Tier-0 harness in #7592.

## 6. Feature Requests & Roadmap Signals

**Strong signals for v1.3.0:**
- **Per-user LLM model selection** (#7183, closed): admin-only model control was a champion-community complaint; the automation epic now wants per-automation model pinning (#7645). Expect this to land as a user-facing feature.
- **Structured Ask User cards in WebUI** (#7653): an OMP-inspired model-facing `ask` tool using the existing `LoopCompletionKind::AskUserReply` — not a resumable gate, but interactive cards.
- **Slack-to-Console bridge** (#7656, closed): tie Slack responses back to Console threads with deep links and run metadata.

**Architectural signals:**
- **Pluggable memory over MCP** (#7664): the first consumer is Mnesis Core; the contract will be published. This positions IronClaw as a host for external memory systems.
- **Pluggable loops via ACP** (#7624/#7648): claude-code as a dev-only executor is the v0 validation; broader egress/execution/rollout is deferred.
- **DB write-pressure reduction** (#7591 epic, #7592 harness): a measurement-driven regression harness for write volumes.

**Innovation candidates:**
- **`[SILENT]` suppression contract** (#7651/#7647): a typed no-delivery outcome for scheduled runs — novel, deterministic, model-guardrail pattern.

## 7. User Feedback Summary

- **Automation reliability is the #1 pain point**: The parent epic (#6879) explicitly cites "the same stored prompt sometimes succeeds and sometimes produces nothing useful, especially on small models (DeepSeek V4 Flash)." The root cause is structural — unattended runs are executed as interactive turns. Users want deterministic, verifiable, and consistent scheduled runs.
- **DOCX corruption** (#6869, reported by Davin Basi): User compared IronClaw unfavorably to ChatGPT/Claude on file generation quality ("ChatGPT and Claude can do this easily"). The issue was closed today (fix merged), but the comparative expectation is worth noting.
- **Per-user model choice** (#7183): Raised by Jeremy Koch at the Champions weekly check-in; value for individual flexibility is unmet under admin-only control.
- **QA friction on messaging integrations**: Slack shows false "Reconnect" state, Telegram login code delivery is confusing (2FA on migrated DCs, phone-mode hints), and MP4 attachments fail. These are integration polish issues that erode trust in channel bridges.

## 8. Backlog Watch

**Needs maintainer attention:**
- **#7255 — APDD Governance Kit evaluation** (open since 2026-08-05, no comments): A docs-only PR proposing phased integration of an external governance framework. Large scope, low risk, but silent for 10 days.
- **#7379 / #7378 — Doc-truth release PRs** (open since 2026-08-07): Public docs deploy discipline (docs-live branch, contract tests). Both are sized L/XL with experienced contributors; the docs↔release skew they fix is a user-visible correctness issue.
- **#7456 — Profile-agnostic durable storage** (open since 2026-08-10): Security-envelope-typed storage root changes; large surface area with sandbox/CI/docs impacts. No comments after initial activity.

**Potential staleness concern:**
- **#7637 — Type the design-system component boundary** and **#7669 — Prepared-marker backfill off the listing path** are both fresh but zero-comment; they may be awaiting triage.

**Trend: overlapping component-migration issues (#7569 closed, #7639, #7638, #7637 open)** — the frontend team is systematically consolidating shared UI primitives; these are low-risk but will require coordinated review.

---

*Digest generated from GitHub data for nearai/ironclaw, 2026-08-15.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-15

## 1. Today's Overview

LobsterAI is in a high-velocity release cycle, with a new version (2026.8.14) published yesterday alongside 22 merged/closed PRs and 5 still open. The project shows strong momentum: a major release branch (2026.7.30) was merged into `main` after a 67-commit, 264-file drift, bringing Team Edition account/quota flows and refreshed Skills/Connectors experiences. Activity is concentrated on the renderer and cowork (multi-agent collaboration) areas, with a steady stream of UI polish, i18n improvements, and OpenClaw skill-management bug fixes. Two stale issues from March remain open (including a test-coverage gap for safety-critical modules), and there is one low-quality "update v4pro" feature request that signals user enthusiasm but lacks substance. Overall, the project is healthy, actively maintained, and shipping frequently, though the volume of UI tweaks (credits icons, font sizes, popover positioning) suggests the team may be in a post-release stabilization and polish phase.

## 2. Releases

**LobsterAI 2026.8.14** — published 2026-08-14

What's Changed (from the release notes and associated PRs):
- **Sidebar improvements**: support for check-in and banner carousel ([PR #2411](https://github.com/netease-youdao/LobsterAI/pull/2411))
- **Multi-agent task activity filter** in the sidebar ([PR #2418](https://github.com/netease-youdao/LobsterAI/pull/2418))

No breaking changes or migration notes were mentioned. The release appears to be incremental and focused on UI/UX improvements.

---

## 3. Project Progress

The following PRs were merged/closed today (excluding dependency bumps):

**Release & Branch Management**
- **[PR #2498](https://github.com/netease-youdao/LobsterAI/pull/2498)**: Merged `release/2026.7.30` into `main` — 67 commits, 264 files changed (+24,736/-4,253), introducing Team Edition account/quota flows and refreshed Skills/Connectors experiences.

**Cowork (Multi-Agent Collaboration)**
- **[PR #2499](https://github.com/netease-youdao/LobsterAI/pull/2499)**: Fix to keep turn process expanded until an answer exists — addresses a UX bug where turns that ended mid-wait (e.g., after `sessions_yield`) collapsed into an empty duration line that read as a failure.
- **[PR #2490](https://github.com/netease-youdao/LobsterAI/pull/2490)**: Preview browser annotation attachments in the artifact panel — captures full-page screenshots alongside annotation batches, rendering them as numbered attachment cards with a dedicated viewer.
- **[PR #2496](https://github.com/netease-youdao/LobsterAI/pull/2496)**: Keep badge popovers within viewport and above later messages.
- **[PR #2493](https://github.com/netease-youdao/LobsterAI/pull/2493)**: Fix session export image and card toggle UI.
- **[PR #2497](https://github.com/netease-youdao/LobsterAI/pull/2497)**: Improve cowork goal and steer copy/wording (i18n).

**OpenClaw Skill Management**
- **[PR #2491](https://github.com/netease-youdao/LobsterAI/pull/2491)** and **[PR #2483](https://github.com/netease-youdao/LobsterAI/pull/2483)**: Key `skills.entries` by frontmatter name instead of directory-derived IDs — fixes silently ineffective UI skill toggles when directory/frontmatter names mismatch. (Two PRs addressing the same issue; both closed.)

**Renderer/UI Polish**
- **[PR #2495](https://github.com/netease-youdao/LobsterAI/pull/2495)**: Bump default UI/code font sizes with one-time migration.
- **[PR #2494](https://github.com/netease-youdao/LobsterAI/pull/2494)** and **[PR #2492](https://github.com/netease-youdao/LobsterAI/pull/2492)**: Update and align credits icon style/color.

**Reverse/Backout**
- **[PR #2422](https://github.com/netease-youdao/LobsterAI/pull/2422)** and **[PR #2423](https://github.com/netease-youdao/LobsterAI/pull/2423)**: A feature branch ("fix btw tools") was merged and then reverted — likely an unstable change that was rolled back.

---

## 4. Community Hot Topics

1. **[Issue #2489](https://github.com/netease-youdao/LobsterAI/issues/2489) — "快更新v4pro！" (Quick update v4pro!)**
   - Low-quality, enthusiastic feature request with no detail. Opened and commented on 2026-08-14.
   - **Analysis**: Underscores strong community anticipation for the next major version ("v4pro"). The project should consider acknowledging the demand while requesting more concrete feedback.

2. **[Issue #1154](https://github.com/netease-youdao/LobsterAI/issues/1154) — Test coverage for `commandSafety` and `coworkMemoryJudge`**
   - Stale but critical: both modules are core to safety (dangerous command detection) and memory quality (candidate scoring), with zero test coverage. One comment, no reactions.
   - **Analysis**: This is a long-standing technical-debt flag that the maintainers have not addressed in 4+ months. Given the safety-critical nature, the community would likely welcome priority treatment.

3. **[PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374) — Permanent setting to hide sidebar ad banner**
   - Open since 2026-07-21, with a user-facing toggle in Settings → General. Addresses issue #2342.
   - **Analysis**: Ad-related friction in a paid/enterprise tool can be a satisfaction killer. This PR has been open for nearly a month — likely stalled in review — and deserves maintainer attention.

---

## 5. Bugs & Stability

**Medium severity**
- **Turn process folding too early** — a turn that ended mid-wait (e.g., right after `sessions_yield`) collapsed into an empty duration line that read as a failure. Fix merged: [PR #2499](https://github.com/netease-youdao/LobsterAI/pull/2499).
- **OpenClaw skill toggles silently ineffective** when directory name differs from skill frontmatter name. Fix merged: [PR #2491](https://github.com/netease-youdao/LobsterAI/pull/2491) / [PR #2483](https://github.com/netease-youdao/LobsterAI/pull/2483).

**Low severity / cosmetic**
- Session export image and card toggle UI bug. Fix merged: [PR #2493](https://github.com/netease-youdao/LobsterAI/pull/2493).
- Badge popovers appearing outside viewport or below later messages. Fix merged: [PR #2496](https://github.com/netease-youdao/LobsterAI/pull/2496).
- Sidebar ad banner dismissible only temporarily (no permanent opt-out). Fix proposed, still open: [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374).

**Stale, unaddressed**
- **URL building bug with Google Gemini `/v1` baseURL** — `buildOpenAIChatCompletionsURL` slices one character too many, producing malformed URLs (e.g., `https://generativelanguage.googleapis.comv1beta/openai/chat/completions`). Fix PR [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153) has been open (stale) since 2026-03-31. **This is a correctness bug in a core integration path and has been ignored for 4.5 months.**

---

## 6. Feature Requests & Roadmap Signals

- **Permanently hide sidebar ad banner** ([PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)) — likely to be merged soon; a clear UX improvement.
- **Team Edition account and quota flows** (from release/2026.7.30 merge) — signals enterprise/team-focused roadmap.
- **In-session Ctrl+F / Cmd+F page search** ([PR #1155](https://github.com/netease-youdao/LobsterAI/pull/1155), stale since March) — a high-value feature for power users; **predicted to be picked up** in a future version given the recent UX polish focus.
- **Mark session as unread** ([PR #1228](https://github.com/netease-youdao/LobsterAI/pull/1228), closed/stale) — may be reconsidered as the cowork area matures.
- **Escape-key support and form reset in AgentCreateModal** ([PR #1231](https://github.com/netease-youdao/LobsterAI/pull/1231), closed/stale) — small UX consistency fixes that might resurface.
- **"v4pro"** ([Issue #2489](https://github.com/netease-youdao/LobsterAI/issues/2489)) — community is explicitly asking for the next major version; no roadmap confirmation.

---

## 7. User Feedback Summary

- **UX friction with turn folding** (PR #2499): The collapsed empty-duration line "read as a failure" — a misleading UI state that could erode trust in the cowork agent's behavior. Now fixed.
- **Silent skill-toggle failure** (PR #2491): Directory/frontmatter name mismatches made the UI skill toggle "silently ineffective" — a frustrating experience for users configuring skills. Now fixed.
- **Ad banner annoyance** (PR #2374): Users want a permanent way to hide the sidebar ad banner; temporary dismissal alone is insufficient. Still pending.
- **Low-quality feature requests** (Issue #2489): A user asked for "v4pro" with no detail — high enthusiasm, low signal.

---

## 8. Backlog Watch

| Item | Type | Age | Why It Matters |
|---|---|---|---|
| [Issue #1154](https://github.com/netease-youdao/LobsterAI/issues/1154) — Vitest tests for `commandSafety` and `coworkMemoryJudge` | Issue (stale) | 4.5 months | Safety-critical modules with **zero test coverage**. A false negative in dangerous-command detection could be catastrophic. Needs maintainer prioritization. |
| [PR #1153](https://github.com/netease-youdao/LobsterAI/pull/1153) — Fix Gemini `/v1` URL building | PR (stale) | 4.5 months | Core integration bug producing malformed URLs for Google Gemini users. **No maintainer response for 4+ months.** |
| [PR #1155](https://github.com/netease-youdao/LobsterAI/pull/1155) — In-session Ctrl+F search | PR (stale) | 4.5 months | High-value UX feature; no maintainer response. |
| [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374) — Permanently hide ad banner | PR (open) | ~1 month | Directly addresses user-reported issue #2342; stalled in review. |

**Project health assessment**: ✅ Actively maintained with rapid iteration. ⚠️ However, the stale safety-critical test-coverage issue and the staled Gemini URL bug suggest maintainers may be prioritizing feature development over correctness hardening. A triage pass on the March backlog is recommended.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-15

## 1. Today's Overview

Moltis is in a **build-heavy phase** with two open PRs under active development, though no issues were updated in the last 24 hours and no new releases were cut. The project is clearly focused on **connector infrastructure and cross-platform integration**, with the two active PRs targeting Slack-native tool cards and durable provider connectors (calendar, email, channels). Activity is moderate-low on the surface — 2 PRs, 0 issues, 0 releases — but the quality and scope of the in-flight work suggests substantial engineering effort underway. The absence of bug reports or regressions indicates a stable baseline while new features are being layered on.

---

## 2. Releases

**No new releases this period.** The project appears to be between release cycles, with substantial PR work accumulating for a likely upcoming minor or minor-major version bump. No breaking changes, migration notes, or changelog entries to report.

---

## 3. Project Progress

**No PRs were merged or closed today.** However, two significant PRs remain open and actively worked on:

- **[#1195 — Add Slack native live task cards](https://github.com/moltis-org/moltis/pull/1195)** *(created 2026-08-15, updated 2026-08-15)*: Introduces channel-neutral tool lifecycle updates rendered as native Slack plan/task cards within the existing response stream. Includes privacy protections via opaque per-run IDs and registered canonical tool names, plus terminal error cleanup for failed streams. This is the freshest PR and appears to be actively iterating.

- **[#1190 — Add durable calendar, channel, and email connectors](https://github.com/moltis-org/moltis/pull/1190)** *(created 2026-08-11, updated 2026-08-14)*: A substantial architecture PR adding provider-neutral connector persistence, atomic snapshots, scheduling, projections, and bounded local full-text search. Introduces read-only CalDAV, Gmail, Himalaya v2, and channel-history datasets with provider-owned schemas and no copied credentials, plus provider-scoped trust boundaries.

Together these PRs signal that **provider abstraction and cross-platform delivery** are the current core engineering focus.

---

## 4. Community Hot Topics

With zero issue activity, the community conversation is happening entirely within the PRs. Both PRs have no comments recorded but represent the project's key discussion threads:

- **[PR #1190 — Durable connectors](https://github.com/moltis-org/moltis/pull/1190)** is the more architecturally significant. The underlying need is clear: users want Moltis to function as a **durable, persistent personal assistant** that can maintain calendar, email, and channel state across sessions — not just ephemeral chat responses. The design patterns (atomic snapshots, projections, bounded local search) suggest a serious commitment to local-first, privacy-preserving data handling.

- **[PR #1195 — Slack native cards](https://github.com/moltis-org/moltis/pull/1195)** addresses the UX side: delivering task lifecycle updates as **native Slack UI elements** rather than raw text streams. The privacy design (opaque per-run IDs, canonical tool names only) indicates the community cares about **provenance and data minimization** in collaborative settings.

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions reported in the last 24 hours.** Notably, PR #1195 explicitly includes *"terminal error cleanup on failed streams"* — suggesting the author is proactively handling edge-case failures in streaming delivery before they become user-facing issues. This is a positive signal for stability hygiene.

---

## 6. Feature Requests & Roadmap Signals

While no explicit user feature requests arrived today, the in-flight PRs contain strong roadmap signals:

- **Provider-neutral connector layer** (PR #1190) is the highest-signal item — expect this to become the foundation for a **broader connector ecosystem** (more calendar providers, more email backends, more channel integrations) in upcoming releases.
- **Channel-specific native rendering** (PR #1195) suggests the roadmap will extend beyond Slack to **Discord, Teams, or other platform-native UIs** — the "channel-neutral" architecture in the PR explicitly anticipates this.
- **Local full-text search** over connector data (PR #1190) hints at a future **memory/retrieval feature** where Moltis can recall past conversations, meetings, or email threads from local storage.

**Prediction:** The next minor release will likely bundle both PRs, representing a "connectors + native UI" milestone with a version bump to 0.x+ (given the foundational nature of the connector layer).

---

## 7. User Feedback Summary

No direct user feedback (issues, comments, reactions) was recorded in the last 24 hours. However, the engineering choices in the active PRs reflect latent user needs:

- **Cross-platform persistence** — users want their assistant to *remember* context across channels and sessions.
- **Privacy-conscious design** — the explicit "no copied credentials," "opaque IDs," and "provider-scoped trust" patterns indicate user demand for **data sovereignty**, not just connectivity.
- **Productivity UX** — replacing raw text streams with native task cards shows focus on reducing cognitive load in high-noise environments.

The absence of negative feedback is consistent with a project in active development where the user base is likely small, technical, and engaged via PR discussion rather than issue reporting.

---

## 8. Backlog Watch

No stale or long-unanswered issues exist (total issue count is zero). However, both open PRs warrant maintainer attention:

- **[PR #1190](https://github.com/moltis-org/moltis/pull/1190)** has been open since 2026-08-11 (5 days) with no review comments visible — given its architectural weight, it deserves reviewer eyes to either move it forward or provide direction.
- **[PR #1195](https://github.com/moltis-org/moltis/pull/1195)** is fresh (same-day) and likely still in author iteration.

Neither PR shows signs of abandonment, but PR #1190's 5-day silence on a foundational change is worth watching — if it stalls, it could block the connector roadmap.

---

*Overall health assessment: **Stable, feature-focused, no regression risk visible.** The project is in a productive upstream-development phase with high-quality architectural work. The main risk is PR #1190's breadth — if it balloons or loses reviewer attention, it could delay the broader connector roadmap.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-15

## 1. Today's Overview

CoPaw (QwenPaw) shows high maintenance velocity with **50 issues and 41 PRs updated in the last 24 hours**, of which **37 issues were closed** and **15 PRs merged/closed** — indicating an active triage and merge cycle. The bulk of activity centers on **skill-system lifecycle management** (three PRs from one contributor staking out dynamic loading/unloading), **plugin-channel configuration support**, and a cluster of **Windows desktop/UX bugs** (auto-update, window flash, taskbar icon). Notably, **13 issues remain open/active**, with several fresh 2.1.0 regressions in MCP tool handling and console UI (issues #7011, #7016, #7025) suggesting the latest release introduced integration friction. No new releases were published today; the project appears to be consolidating PRs between releases. Overall trajectory: **healthy, fast-moving project with a growing community of first-time contributors** (visible in PR tagging), but with **MCP/tool-call reliability and desktop UX as recurring weak spots**.

## 2. Releases

No new releases published in the last 24 hours.

## 3. Project Progress

**Merged/Closed PRs today (15 total) — most significant advances:**

- **#6715 — feat(onebot): localize inbound media before agent processing** *(Under Review → Closed)* — Aligns OneBot channel inbound media with AgentScope 2.0's local `DataBlock` pipeline; downloads remote media into managed storage before agent processing — important for multimodal channel stability.
- **#6943 — feat(channels): support interactive configurators for plugin channels** *(Closed)* — Restores `get_configurator()` support, uses temporary FastAPI app for plugin-registered HTTP routers; improves third-party channel install UX.
- **#7029/#7030/#7031 — skill-system trio by Ferrum360** *(Closed)* — Chinese/English variants of dynamic skill loading, auto-unload hook (every 5 rounds), frontmatter fix, `MEMORY.md` refresh option. Note: #7033 (English, refined) is still **open** — this is a contributor iterating on review feedback.

**Still-open but advancing PRs (26 open, key ones):**
- **#7035 — feat(console): organize subagent conversations into groups** (new, 2026-08-14)
- **#7036 — feat(console): add media download controls** (new, 2026-08-14)
- **#7037 — feat(computer-use): observe related window surfaces** (new, 2026-08-14)
- **#7032 — feat(auto-title-sync)** (new, 2026-08-14) — companion to skill-system work
- **#6969 — fix: avoid duplicate tool result when MCP returns structuredContent** — fix for issue #6958, still open

**Notable trend:** a burst of **console/UI UX features** (media download, session grouping, auto-title) merged today, indicating the team is investing in **consumer-grade desktop experience** after 2.x stability work.

## 4. Community Hot Topics

Most active issue today by comments (6-8 comments):

1. **#7010 — [Question] daemon/background mode for `qwenpaw app`** (6 comments, closed) — User reports `qwenpaw app` blocks SSH/nohup, no proper background mode. This is a **recurring pain point** for server deployment; users want `--daemon` or a service mode. High practical value for ops teams.

2. **#6405 — [Question] MCP tool "Tool not found" after 2.0 upgrade** (6 comments, closed) — Tool names renamed to `[mcp-key]__[tool_name]` but lookup fails. Docker 2.0.0.post3. **Relates to open bugs #7016 (tool-call 404) and #6958 (duplicate tool result)** — signals a systemic MCP namespace/registry issue in 2.x.

3. **#7011 — [Bug] Console stop request cancels active Feishu session under multiple UI sessions** (5 comments, **OPEN**) — Cross-session session-identity collision; Console stop kills Feishu conversation. Severity: high (data-loss adjacent, active conversation disruption). No fix PR yet.

4. **#7025 — [Question] QwenPaw Creator plug-in disables all other plugins** (4 comments, **OPEN**) — Install of Creator plug-in breaks all plugins; screenshots show config UI blank after install. New issue, fresh 2.1.0 regression, needs maintainer eyes.

5. **#3045 — [Bug] auto model fetch unavailable** (8 comments, closed) — Long-running issue (Apr) finally closed; Windows desktop 1.0.1 auto-configuration fails. Historical rather than today's active thread.

General sentiment: **MCP/tool-call reliability is the #1 recurring topic** (6405, 6958, 7016, 7025 all point to it). Deployability/background mode (#7010) is a close second. Both should be prioritized in release notes to reduce duplicate issue reports.

## 5. Bugs & Stability

**Critical (active, no fix merged):**
- **#7011 — Console stop request can cancel active Feishu session (2.1.0)** — cross-UI session identity collision; active conversation interrupted. **No fix PR.**
- **#7016 — Tool-call 404 (`Tool call not found`)** — streaming session repeatedly hits offload endpoint with 404; breaks tool execution in streamed chats (2.1.0). **No fix PR referenced.**
- **#7025 — QwenPaw Creator plug-in deactivates all other plugins** — likely plugin registry race or shared-state corruption. **No fix PR.**

**High (fix PR exists):**
- **#6958 — FastMCP tool result writes duplicate data twice** (when structuredContent + content both present, post-truncation) → fix PR **#6969** open, awaiting review. Root cause in `agentscope_tool.py` adapter.

**Medium (historical, closed today):**
- **#6806 — qwenpaw-creator: Windows cannot save model config (Internal Server Error)** — closed; plugin-specific, fix presumed in PR #6943's plugin-configurator restore.
- **#6951 — Scroll compression hides pre-compression chat history** (closed). — UI shows eviction index instead of transcript; fix merged.
- **#7040 — "Stopp Running" typo** (closed, invalid label) — trivial but user-flagged; note: user says "文案错别字很多" (many typos) — worth a copy-review pass.

**Watch item:** **#6908 — agentscope 2.0.6 bump** (open) — given #6612 (qwenpaw 2.0.1 × agentscope 2.0.4 API break) and #6197 (nvidia-smi hang), version pins remain brittle. Bump PR is open but not merged — **do not ship without regression pass.**

## 6. Feature Requests & Roadmap Signals

Strong signals for upcoming release &/or roadmap:

1. **Desktop auto-update** (#2846, #3464 — 2 issues, 9 comments total, both closed) — Users repeatedly ask for in-place Windows updates instead of uninstall/reinstall. High-frequency request; consider priority for desktop UX.

2. **Skills Hub / skills marketplace** (#2418, closed) — "skills-hub management page for mainstream skills" — with dynamic skill loading PR (#7033) now open, this is the natural next phase; **likely in 2.2 or 2.3.**

3. **Provider-agnostic conversation history + Responses API support** (#944, #2314, #2737, #3002 — all closed) — Multiple users hit OpenAI-compatible gateways that only support Responses API; conversation-history format blocks provider switching. **PR #6302 (provider discovery, routing, agent model controls) directly addresses this — key roadmap signal, now open.**

4. **Per-session model overrides** (#2763 + PR #5992) — `/models` + `/model` switch commands, session-level model per conversation. PR open since July; likely to land soon.

5. **Message-level deletion / session splitting** (#4001, #4436 — both open) — users want fine-grained transcript editing (delete single message; split long sessions). Not yet picked up by maintainers; lower priority but clear demand.

6. **Local GGUF model support in-app** (#6433, closed) — zero-setup local models; nice-to-have, deferred.

**Prediction:** 2.2 will likely feature **unified model/provider catalog** (PR #6302), **dynamic skill lifecycle** (#7033), and **per-session model overrides** (#5992) — all currently in review. Console grouping/media downloads (#7035/#7036) may slip to 2.2 or 2.3 depending on release cadence.

## 7. User Feedback Summary

**Satisfaction signals:**
- Community is actively contributing code (multiple first-time-contributor PRs today: #6940, #5992, #2105), suggesting good onboarding/docs.
- Long-standing issues (OpenAI Responses, model fetch, skills hub) are being closed — users see their feedback land.

**Pain points (repeated themes):**
- **Windows desktop UX**: install/update friction (#2846, #3464), Python icon in taskbar instead of CoPaw icon (#2846), cmd window flash (#4832, fixed), frozen binary hangs on `nvidia-smi` (#6197, fixed).
- **MCP/tool reliability** (recurring across 2.x): renaming broke lookups (#6405), 404s (#7016), duplicate results (#6958), plugin interference (#7025) — **users perceive 2.x as less stable for tool-call workflows than 1.x**.
- **No background/daemon mode** (#7010): SSH/server decks cannot launch cleanly.
- **Typos / copy quality** (#7040): "Stopp Running" and "文案错别字很多" — small but brand-irritant.

**Uses cases driving requests:**
- Deployment on headless servers/SSH (background mode, daemonizing).
- Enterprise Azure OpenAI gateways (Responses API compatibility).
- Long-conversation management (compression, splitting, per-message deletion) for power users.
- Multi-channel operations (Feishu/DingTalk/comms) with multi-session identity safety (#7011).

## 8. Backlog Watch

Issues/PRs needing maintainer attention (long-open, no traction, high value):

1. **#5992 — PR: per-session model overrides** (opened 2026-07-12, still open 34 days) — core feature users requested in #2763. Needs review/merge or explicit deferral.

2. **#6302 — PR: unified provider discovery/routing** (opened 2026-07-21, 25 days) — the biggest architectural PR in flight; addresses 4+ closed issues (#944, #2314, #2737, #3002). Blocking several other fixes. **Top backlog item.**

3. **#4436 — Issue: session splitting** (opened 2026-05-16, 3 months, 2 comments) — enhancement request with no maintainer response; user-visible value for long-context users.

4. **#4001 — Issue: delete single message** (opened 2026-05-02, 3+ months, 4 comments) — same category as #4436; conversational editing. No maintainer activity.

5. **#6908 — PR: agentscope 2.0.6 bump** (open 4 days, but flagged critical due to #6612 incompatibility) — version-pin fragility has burned users twice; merge with test pass or explicitly schedule.

6. **#6940 — PR: native DataPaw app runtime** (first-time contributor, 3 days) — ambitious feature (durable analysis workspace); needs maintainer scoping/mentorship signal to avoid contributor abandonment.

7. **#2418 — Issue: Skills Hub** (closed without implementation but referenced in skill-system PRs) — the skill loading work (#7033) makes this feasible now; consider reopening/roadmapping.

**Backlog health note:** Two of the most valuable pieces of open infrastructure (#5992, #6302) and the entire MCP reliability cluster remain unmerged — the MCP issues (#6958, #7016, #7025) will likely generate duplicate reports until #6969 and a namespace-level fix land.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-15

## 1. Today's Overview

ZeroClaw is in a period of high architectural activity, with 30 open issues and 47 open PRs actively being updated. The project shows robust health, driven by several large-scale RFCs centered on security architecture, runtime ownership, and gateway capabilities. Maintainer engagement is substantial, but many PRs (over 20) are blocked on author action, indicating a bottleneck in the contribution pipeline rather than a lack of maintainer review. The closure of a promotional "hosted memory" proposal (#9982) as wontfix signals a clear product decision to build such infrastructure in-house. No new releases were cut in the last 24 hours.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

Three PRs were merged or closed in the last 24 hours (details not provided in the top-20 list). However, notable PRs advanced significantly:

- **[PR #9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999)** (fix): **Classify output-limited terminal responses** from OpenAI-compatible providers — Git-stacked follow-up to #9447 addressing incomplete responses.
- **[PR #9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996)** (fix): **Make action budget accounting atomic** to prevent parallel tool calls from exceeding `max_actions_per_hour`.
- **[PR #10002](https://github.com/zeroclaw-labs/zeroclaw/pull/10002)** (fix): Accept camelCase segments in google_workspace validation.
- **[PR #9994](https://github.com/zeroclaw-labs/zeroclaw/pull/9994)** (feat): Add transcript copy context menu to ZeroCode.

**Merged today:** TBD from full PR list.

## 4. Community Hot Topics

The most active discussions reveal deep architectural work with high community investment:

- **[Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** (22 comments): **RFC: Goal mode v1** — the community is intensely debating how to deliver bounded multi-turn user objectives without coupling to broad channel admission, Web, and async child work. The 22 comments signal a desire for this feature to ship sooner in a tighter scope.

- **[Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)** (20 comments): **RFC: Per-execution confirmation tier for high-risk shell commands** — the community deeply cares about command safety, and the revision history shows maintainers actively shaping scope. The need for a "Claude Code-style" allow/ask/deny policy indicates users want a more trustworthy shell experience.

- **[Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** (19 comments): **RFC: OpenAI Chat Completions profile** — high demand from the ecosystem; users want to connect Open WebUI, LobeChat, Continue.dev, Aider, and LangChain to ZeroClaw. The comment volume suggests this is a heavily requested integration point.

- **[Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** (16 comments): **RFC: Pluggable inbound authentication and canonical principals** — a deep security discussion (Rev 8) on identity & access, revealing strong maintainer and community focus on enterprise-grade auth.

- **[Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)** (15 comments): **74 test failures on Windows** — a significant portability problem; the high comment count reflects developer pain with cross-platform consistency.

## 5. Bugs & Stability

Newly reported and updated bugs (by severity):

- **[S1 — Issue #9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421)** — **Incomplete terminal responses can be reported as successful** (workflow blocked). Fix in progress via PR #9999.
- **[S2 — Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)** — **74 test failures on Windows** (degraded behavior). No fix PR yet.
- **[S2 — Issue #9759](https://github.com/zeroclaw-labs/zeroclaw/issues/9759)** — **Quickstart allows duplicate enabled webhook ports** (degraded behavior).
- **[S3 — Issue #9983](https://github.com/zeroclaw-labs/zeroclaw/issues/9983)** — **Fallback model without vision incorrectly reports cause of error** (minor issue).

**Newly reported this week:**
- **[Issue #9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)** — cron custom-shell test hits ETXTBSY under the parallel runtime gate, failing unrelated PRs. This is a red-herring CI flake that is actively disrupting development.

**Critical bug-fix PRs waiting for author action:**
- **[PR #9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)**: Support stored OAuth profiles for Anthropic — high-risk, large PR.
- **[PR #9574](https://github.com/zeroclaw-labs/zeroclaw/pull/9574)**: Authorize approval responders on Telegram, Slack, Lark, and Matrix.

## 6. Feature Requests & Roadmap Signals

The roadmap is heavily oriented toward **security architecture, runtime control, and developer tooling**. Key signals:

- **Security is the dominant theme.** RFCs on command confirmation tiers (#7155), pluggable auth (#7141), security decision pipelines (#7142), and egress policies (#9580) suggest the v0.9.0 security architecture is being actively defined.

- **Gateway/Protocol convergence is imminent.** The RFCs for an OpenAI Chat Completions profile (#8603) and runtime-owned conversation sessions (#9487) point toward a more unified and standard-driven gateway.

- **Developer experience is a focus.** The agent evaluation harness (#7065) and the harness evaluation framework tracker (#9967) are strong signals that ZeroClaw wants to build a repeatable, measurable quality bar for agents.

- **Telegram channel remains a high-priority battleground.** The provider-grouped /model picker (#9895), and tool-call progress (#6663) show the community is actively using Telegram as a primary interface.

**Prediction for next version (v0.8.5+):** Expect the command confirmation tier for shell tools (#7155) and the initial gate for the Chat Completions profile (#8603) to land soon, given their high comment volume and accepted status.

## 7. User Feedback Summary

- **Real pain points** are centered on **safety and correctness**: users are concerned about running high-risk shell commands without tight guardrails (#7155) and are frustrated by the high-entropy detector redacting legitimate Solana wallet addresses on Telegram (#9486).

- **Cross-platform instability is a persistent sore spot** — the 74 Windows test failures (#7462) represent a clear developer experience blocker for Windows-based contributors.

- **The community wants more standard integrations.** The demand for an OpenAI-compatible API (#8603) shows users want to reuse their existing toolchains and clients rather than adopt a new protocol.

- **Acceptance signals:** The rejection of the hosted memory proposal (#9982) as wontfix indicates the team is deliberately building its own stateful layer. A user proposal to offload memory was closed, reinforcing a "build-in-house" sentiment.

## 8. Backlog Watch

The following items have been open for a long time and need maintainer or author attention:

- **[PR #8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)** (created 2026-06-28, 48 days old): **Matrix single-message progress drafts** — a large, high-risk PR that has been silent and needs author action. This could unblock several Matrix streaming features.

- **[PR #9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126)** (created 2026-07-18, 28 days old): **Plugins: validate typed instance config** — an XL-sized feature PR waiting for author action; the plugin architecture is critical to the project's roadmap.

- **[PR #9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002)** (created 2026-07-11, 35 days old): **Keep agent turns alive after viewer disconnect** — a p1 gateway fix awaiting maintainer review.

- **[PR #9137](https://github.com/zeroclaw-labs/zeroclaw/pull/9137)** (created 2026-07-18, 28 days old): **Shared egress policy foundation** — depends on #9580; the title suggests this is foundational for the security project. Needs author action.

These PRs, if left idle, could become stale and need rebasing, adding friction later.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*