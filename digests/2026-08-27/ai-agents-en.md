# OpenClaw Ecosystem Digest 2026-08-27

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-27 08:05 UTC

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

Based on the GitHub data for OpenClaw provided for 2026-08-27, here is the project digest.

---

### 1. Today's Overview

OpenClaw is in a period of extremely high activity, with 500 issues and 500 PRs updated in the last 24 hours. This indicates a very active and rapidly evolving project. The issue tracker is heavily populated with bug reports, many of which are tagged as regressions, suggesting recent releases have introduced stability problems. The high number of `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` labels indicates a bottleneck in processing triaged issues. The PR queue is also substantial, but many are waiting on author input (`status: ⏳ waiting on author`) or need proof (`status: 📣 needs proof`), suggesting that while features are being developed, there's a push to ensure quality and validation before merging.

### 2. Releases

No new releases were published on 2026-08-27. The latest release remains the v2026.8.1 beta, with the most recent beta version being v2026.8.1-beta.3.

### 3. Project Progress

A number of pull requests were merged or closed, aiming to fix bugs and improve functionality.

- **Documentation & UX:**
  - [PR #130794](https://github.com/openclaw/openclaw/pull/130794) fixes `openclaw status --deep` to show healthy channels as OK instead of a warning.
  - [PR #130812](https://github.com/openclaw/openclaw/pull/130812) adds a human introduction to the "Why OpenClaw" documentation page.
- **Security & Policy:**
  - [PR #120900](https://github.com/openclaw/openclaw/pull/120900) and [PR #116489](https://github.com/openclaw/openclaw/pull/116489) were closed, implementing a feature where administrators can review and acknowledge install-policy warnings in the Control UI and CLI.
- **Bug Fixes:**
  - [PR #130768](https://github.com/openclaw/openclaw/pull/130768) fixes Gemini memory embedding batches failing when `upload` requests go through a gateway with query parameters in the base URL.
  - [PR #130795](https://github.com/openclaw/openclaw/pull/130795) fixes a bug where a successful Codex inference activation could be reported as a failure.
  - [PR #130801](https://github.com/openclaw/openclaw/pull/130801) refactors the `models status` command to simplify its auth projection logic.
  - [PR #123975](https://github.com/openclaw/openclaw/pull/123975) addresses an issue where the `tsgo` wrapper could leave wedged compiler processes behind, by routing it through a managed-process owner.

### 4. Community Hot Topics

The most active discussions are centered around critical bugs and release-management issues.

- **[Issue #125626: OpenClaw 2026.8.1 beta feedback](https://github.com/openclaw/openclaw/issues/125626)** - 20 Comments. This is the main feedback thread for the current beta release, creating a central hub for bug reports and feature requests related to that release.
- **[Issue #43367: Multi-agent orchestration is unstable](https://github.com/openclaw/openclaw/issues/43367)** - 14 Comments. This issue highlights a cluster of failures in multi-agent runs, including config overwrites and session-lock failures, indicating that the stable operation of concurrent agents is a major community pain point.
- **[Issue #38327: "Cannot convert undefined or null to object" in 2026.3.2](https://github.com/openclaw/openclaw/issues/38327)** - 14 Comments (👍 3). A long-standing regression report that continues to receive attention, showing the impact of this bug on users with Google Vertex setups.
- **[Issue #53628: ${XDG_CONFIG_HOME} is not process when installing a skill](https://github.com/openclaw/openclaw/issues/53628)** - 14 Comments. A persistent behavior bug indicating that environment variables are not properly expanded during skill installation, causing friction for users with custom configurations.
- **[Issue #88657: DeepSeek V4 Flash incomplete turn](https://github.com/openclaw/openclaw/issues/88657)** - 12 Comments. This bug causes incomplete responses from a specific model, disrupting user workflows. The fact that a regression was introduced between 2026.5.26 and 2026.5.27 is a key concern.

### 5. Bugs & Stability

Today's data reveals several critical stability and reliability issues, many of which are regressions.

- **High Severity (P1/P0):**
  - **[Issue #128971: Telegram final reply is silently lost](https://github.com/openclaw/openclaw/issues/128971)**: Critical "message-loss" bug where users don't receive the final reply. No fix PR linked.
  - **[Issue #112259: Visible inbound channel turn can be silently dropped](https://github.com/openclaw/openclaw/issues/112259)**: Another "message-loss" issue where inbound messages are accepted and then silently discarded.
  - **[Issue #97616: OpenClaw leaks unreaped hook/tool child processes](https://github.com/openclaw/openclaw/issues/97616)**: A P1 regression causing zombie process accumulation, leading to "runtime degradation".
  - **[Issue #118839: 'restart recovery claim changed before agent adoption' reappears](https://github.com/openclaw/openclaw/issues/118839)**: A regression of "message-loss" and "session-state" issues seen in the beta.
  - **[Issue #118018: Stale subagent completion delivered into a replaced requester lifecycle](https://github.com/openclaw/openclaw/issues/118018)**: A lifecycle bug causing incorrect session state.
  - **[Issue #48920: Live Docs are ahead of release](https://github.com/openclaw/openclaw/issues/48920)**: A P0 UX-release-blocker where documentation references features not yet in the latest release.
- **Medium Severity (P2):**
  - **[Issue #115001: Hybrid memory search returns spurious 1.0 similarity scores](https://github.com/openclaw/openclaw/issues/115001)**: A bug in the memory system that was closed, likely due to a fix being merged.
  - **[Issue #90361: Intermittent memory_search "index metadata is missing"](https://github.com/openclaw/openclaw/issues/90361)**: A regression that was closed, suggesting a fix has been applied.
  - **[Issue #114234: Usage-cost refresh lock is never releasable after a restart](https://github.com/openclaw/openclaw/issues/114234)**: A P1 bug permanently freezing the cache in containerized environments.
  - **[Issue #74378: CLI commands remain alive as node.exe processes](https://github.com/openclaw/openclaw/issues/74378)**: A Windows-specific regression that was closed, indicating a fix has been merged.

### 6. Feature Requests & Roadmap Signals

There are several feature requests that suggest the direction of the project based on user needs.

- **Improved Control & Automation:**
  - **[Issue #16555: Add TTL/Expiry for Delivery Queue Messages](https://github.com/openclaw/openclaw/issues/16555)**: A P1 feature request to prevent stale messages from flooding channels on restart, addressing a reliability concern.
  - **[Issue #40786: Add .gitignore-like exclude patterns to backup CLI](https://github.com/openclaw/openclaw/pull/40786)**: A P2 request to exclude files like `node_modules` from backups to reduce size and prevent sensitive data exposure.
  - **[Issue #45415: MEMORY.md size warning/limit enforcement](https://github.com/openclaw/openclaw/issues/45415)**: A P3 request to warn users about the silent truncation of `MEMORY.md` at 20K characters.
  - **[Issue #45390: Session TTL / max lifetime for automatic rotation](https://github.com/openclaw/openclaw/issues/45390)**: A P3 request to prevent sessions from growing indefinitely and hitting provider limits.
- **User Experience & Accessibility:**
  - **[Issue #9637: Add accessibility config option to disable emojis and unicode symbols in TUI](https://github.com/openclaw/openclaw/issues/9637)**: A P2 UX request to improve the experience for screenreader users.
  - **[Issue #55235: Generate and update openclaw.json JSON schema on bootstrap/update](https://github.com/openclaw/openclaw/issues/55235)**: A P3 request to provide better editor support for configuration files.
- **Expanded Integrations:**
  - **[Issue #26037: Ali bailian coding plan support](https://github.com/openclaw/openclaw/issues/26037)**: A P2 request with 4 upvotes for official support for a specific coding plan, indicating strong community interest in more model providers.
  - **[Issue #7476: WhatsApp sticker send support](https://github.com/openclaw/openclaw/issues/7476)**: A P3 request to add sticker support to the WhatsApp channel.

### 7. User Feedback Summary

User feedback is dominated by frustration with regressions and reliability issues.

- **Pain Points:** The most frequent complaints are about silent message loss, session state confusion, and instability. Users are experiencing incomplete turns, silently dropped messages, and failures in multi-agent orchestration. The recurrence of regressions (`reappears in 2026.7.2-beta.7`) is a major source of dissatisfaction.
- **Configuration Friction:** Several issues highlight that configuration is often a source of problems, whether it's uninterpreted environment variables (Issue #53628), silently resuming the wrong session (Issue #71417), or hitting undocumented limits like the `MEMORY.md` truncation.
- **Positive Signals:** The high level of community engagement, with users providing detailed bug reports and using upvotes on feature requests, indicates a strong and invested user base. There are active discussions on how to improve the agent's awareness, such as understanding communication channels (Issue #20837) and exposing the resolved backend model (Issue #51441).

### 8. Backlog Watch

Several high-priority issues remain open and require maintainer attention, often being marked with `needs-maintainer-review` or `needs-product-decision`.

- **[Issue #38327: "Cannot convert undefined or null to object"](https://github.com/openclaw/openclaw/issues/38327)**: A P1 regression from early March that is still open. It is marked `needs-maintainer-review` and has 3 upvotes, indicating high user impact.
- **[Issue #16555: Add TTL/Expiry for Delivery Queue Messages](https://github.com/openclaw/openclaw/issues/16555)**: A P1 feature request from February marked `clawsweeper-recovery-stuck` and `needs-product-decision`. It has been waiting for a decision for a long time.
- **[Issue #56692: Group chat context handling can blur](https://github.com/openclaw/openclaw/issues/56692)**: A P2 issue in group chat that is marked `clawsweeper-recovery-stuck` and `needs-product-decision`. The lack of traction here could be hindering advanced multi-agent use cases.
- **[Issue #17840: opt-in reaction-triggered agent turns](https://github.com/openclaw/openclaw/issues/17840)**: A P2 feature request from February, also marked `clawsweeper-recovery-stuck`. This suggests the maintainers are having trouble deciding on or implementing this feature.
- **[Issue #126429: CLI-backend models-list crash, auth not recognized](https://github.com/openclaw/openclaw/issues/126429)**: A recent P2 issue marked `clawsweeper-recovery-stuck` and `needs-product-decision`, indicating that a frustrating UI/CLI issue is currently in limbo.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem
**Date:** 2026-08-27

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape is in a high-velocity maturation phase, characterized by intense stabilization efforts alongside ambitious architectural expansions. Projects are converging on common challenges: silent message-delivery failures, session-state integrity, config-safety guards, and multi-agent orchestration reliability. The ecosystem is bifurcating into two architectural philosophies — heavyweight, feature-rich platforms (OpenClaw, IronClaw, ZeroClaw) and lightweight, embeddable agents (NanoBot, PicoClaw, TinyClaw). Security hardening is a universal theme, with path-traversal fixes, sandbox policy overhauls, and egress controls appearing across nearly all active projects. The community is increasingly vocal about **trust** — not features — demanding loud, actionable errors over silent failures and prioritizing data-integrity safeguards.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release (24h) | Merged/Closed PRs | Health Score* |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | None (v2026.8.1-beta.3 latest) | ~10 | **6/10** — High activity but bottlenecked triage |
| **IronClaw** | 46 | 50 | `v1.4.0-rc.1` (Aug 26) | 47 | **9/10** — Strong release prep, healthy velocity |
| **ZeroClaw** | 36 | 50 | None (v0.9.0 milestone) | 6 | **8/10** — Governance-driven, disciplined |
| **NanoBot** | 2 | 18 | None | 18 | **8/10** — High PR throughput, low issue load |
| **CoPaw** | 29 | 45 | `v2.2.0-beta.1` | ~10 | **8/10** — Rapid iteration, active triage |
| **Hermes Agent** | 50 | 50 | None (v0.20.5 latest) | 7 (5 merged/closed) | **7/10** — Heavy bug-fix cadence, review bottleneck |
| **PicoClaw** | 7 | 6 | None (v0.3.1 latest) | 4 | **7/10** — Steady, manageable backlog |
| **LobsterAI** | 1 | 12 | None | 12 | **7/10** — Release-train cadence |
| **NanoClaw** | 1 (new issue) | 24 | None | 6 | **7/10** — Stabilization sprint |
| **Moltis** | 1 | 2 | `20260826.01` | 2 | **7/10** — Low volume, high quality |
| **NullClaw** | 1 | 0 | None | 0 | **6/10** — Quiet, awaiting triage |
| **TinyClaw** | 0 | 0 | None | 0 | **5/10** — Dormant |
| **ZeptoClaw** | 0 | 0 | None | 0 | **4/10** — Dormant |

*Health Score = composite of triage responsiveness, release cadence, SLA adherence, and community engagement.*

---

## 3. OpenClaw's Position

**Advantages:**
- **Community scale dominates**: 500 issues/PRs touched in 24h is 10× the next most active project (IronClaw at 50). OpenClaw is the clear center of gravity for the ecosystem, attracting the broadest contributor base and largest user installation.
- **Integration breadth**: No other project matches OpenClaw's channel support (Telegram, WhatsApp, Discord, Slack, IRC, WeChat, LINE, plus voice and email).
- **P1/P0 regression tracking**: OpenClaw has formalized severity tagging and regression detection, indicating mature quality processes at scale.

**Technical approach differences:**
- **Monolithic architecture** vs. IronClaw's modular sandbox design and NanoBot's lightweight agent loop. OpenClaw prioritizes feature completeness over architectural elegance, resulting in a complex codebase that generates high bug volume.
- **Beta-driven releases**: OpenClaw ships frequent betas (v2026.8.1-beta.3) to gather broad feedback, whereas IronClaw and ZeroClaw use release candidates and RFC-driven governance.

**Community size comparison:**
- OpenClaw's community engagement (feedback threads with 20+ comments, feature requests with upvotes) is unmatched. However, this scale creates a **triage bottleneck** — `clawsweeper:needs-maintainer-review` labels accumulate, and P1 bugs (like #38327) can sit open for weeks despite high user impact.

**Bottom line**: OpenClaw is the **ecosystem reference implementation** — largest community, broadest features, but also the most visible stability challenges. Its position is secure, but reliability issues are eroding user trust.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Silent failure prevention** | OpenClaw, Hermes, NanoClaw, ZeroClaw | Loud, actionable errors instead of hangs/quiet drops; message-delivery guarantees |
| **Config/data integrity** | Hermes, OpenClaw, NanoClaw | Fail-closed config writes; prevent data wipe on parse errors; schema validation |
| **Multi-agent orchestration** | OpenClaw, ZeroClaw, CoPaw, PicoClaw | Session-state isolation; prevent cross-session contamination; stable concurrent execution |
| **Message queue TTL/retention** | OpenClaw, ZeroClaw, Hermes | Prevent stale-message replay on restart; delivery-queue expiry |
| **Sandbox/security hardening** | IronClaw, ZeroClaw, NanoClaw, Hermes | TOCTOU fixes, egress controls, secure temp files, path-traversal prevention |
| **Streaming API completeness** | NanoBot, OpenClaw | Tool-progress events; lifecycle visibility for custom agents |
| **Prompt-cache optimization** | CoPaw, IronClaw | Token-cost reduction; byte-identical tool arrays for cache stability |
| **Local-file access (cloud gap)** | IronClaw, NullClaw | Bridge local filesystems to cloud-hosted agents |
| **Session-scoped persistence** | ZeroClaw, OpenClaw | Durable prompt attachments; TTL/session rotation |

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Architecture |
|---|---|---|---|
| **OpenClaw** | Broadest channel/multi-agent support; universal assistant | Power users, prosumers, developers | Monolithic, plugin-rich, Node/Go |
| **IronClaw** | Performance-engineered LLM loop; sandbox security; WebUI features | Enterprise, security-conscious teams | Modular, Rust-core with Docker sandboxing |
| **ZeroClaw** | RFC-governed roadmaps; realtime speech; granular sandbox policies | Governance-driven, security-sensitive | Structured, contract-first, multi-language |
| **NanoBot** | Lightweight embeddable agent; clean abstractions | Developers building custom agents | Decoupled agent loop, minimal core |
| **CoPaw (QwenPaw)** | Local/desktop assistant; multi-tenant Hub; prompt cache optimization | Chinese-market users, desktop-first | Python-based, Qwen-optimized |
| **Hermes** | Desktop app focus; gateway message-delivery; skills ecosystem | Desktop-first users, connectors | Electron + Go/Node hybrid |
| **PicoClaw** | Lightweight multi-channel gateway for edge devices | Raspberry Pi/ARM homelab users | Minimal footprint, Go |
| **NanoClaw** | Installer reliability; Mattermost/Telegram integrations | Self-hosted teams, infra-focused | Go, single-binary deployment |
| **LobsterAI** | Desktop renderer polish; provider integrations | Chinese-market desktop users | Electron + engine architecture |
| **Moltis** | Provider preference management; MCP OAuth robustness | Multi-provider power users | TypeScript, lightweight |

---

## 6. Community Momentum & Maturity

### Tier 1 — High-Velocity Iteration (daily feature/bug throughput)
- **OpenClaw**: Extreme activity but **triage-bottlenecked**; issues pile up faster than review capacity.
- **IronClaw**: Best balance of velocity and stability; release-candidate discipline is exemplary.
- **ZeroClaw**: Most **governance-mature**; RFC process prevents chaotic feature sprawl.

### Tier 2 — Rapid Stabilization with Focused Backlogs
- **NanoBot**: Highest PR-throughput density; decisive maintainer leadership; small issue queue.
- **CoPaw**: Strong beta cadence; community-driven features (Hub, observability) shaping next major.
- **Hermes**: Heavy bug-fix focus; config-safety saga resolved; desktop reliability is gap.
- **NanoClaw**: Installer hardening sprint; multi-agent infrastructure; latency in maintainer responses.

### Tier 3 — Steady, Low-Volume Maintenance
- **PicoClaw**: Channel-specific fixes; stable, manageable backlog.
- **LobsterAI**: Release-train cadence; low issue load; polish-focused.

### Tier 4 — Quiet/Stagnant
- **NullClaw**: Minimal activity; awaiting feature triage.
- **TinyClaw, ZeptoClaw**: Dormant — no updates in 24h (and likely weeks).

---

## 7. Trend Signals

### Signal 1: **Silent failures are the #1 trust eroder** (OpenClaw, Hermes, NanoClaw, ZeroClaw)
Users consistently complain about systems that fail *without any diagnostic path*. Projects that ship loud, actionable errors (NanoClaw's container-wake notifications, Hermes' execution receipts) are winning trust. Expect "observability by default" to become a standard expectation.

### Signal 2: **Security hardening is no longer optional** (IronClaw, ZeroClaw, NanoClaw, Hermes)
Path traversal (NanoBot #5564), shell-metacharacter injection (NanoClaw #3550), and TOCTOU escapes (IronClaw #6817) demonstrate attackers are probing agent infrastructure. Sandbox policies, egress controls, and temp-file permissions are becoming baseline requirements.

### Signal 3: **AI-authored code is entering the mainline** (NanoClaw, ZeroClaw)
PRs authored by automated agents (Codex `gpt-5` tags) are being merged into security-critical code paths. Without explicit human-review guarantees, this creates governance risk. Expect the ecosystem to adopt "AI-author + human-review" documentation standards.

### Signal 4: **Context bloat is the new performance bottleneck** (IronClaw #7891, CoPaw #7335)
Users are seeing turns that cost 19+ seconds of inference on raw tool payloads. Projects are responding with bounded result views, citation-by-reference, and prompt-cache stabilization. Cost-conscious users will choose agents with efficient context management.

### Signal 5: **Multi-agent awareness is still immature** (OpenClaw, ZeroClaw, CoPaw)
Cross-session contamination (#7193), duplicate work on parallel messages (#10408), and silent agent halts (#6921) are recurring. No project has fully solved concurrent-agent lifecycle management. This is a greenfield opportunity for differentiation.

### Value for AI Agent Developers:
- **Prioritize loud, visible failure modes** — silent data loss is the fastest way to lose community trust.
- **Invest in session-state isolation** — multi-agent reliability is the ecosystem's biggest unsolved problem.
- **Embed observability hooks from day one** — tool-event streaming and execution receipts will become expected features.
- **Document AI-authored PR review processes** — as AI contributions increase, transparency on human review builds confidence.
- **Design for incremental context** — bounded result views and reference-based memory will be differentiators for cost-sensitive deployments.

---

*Report compiled from community digest summaries, 2026-08-27.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-27

## 1. Today's Overview

NanoBot is in an intense development cycle, with a significant burst of activity centered on architecture cleanup, streaming robustness, and TUI/WebUI user experience improvements. A remarkable 18 pull requests were merged or closed within the last 24 hours, primarily authored by core contributor **chengyongru**, signaling strong, decisive maintainer leadership. The focus areas are clearly shifting toward stabilizing the agent loop's internal state management, completing the streaming interface contract, and refining the terminal user interface based on user feedback. While issue volume is low (only 2 updated), the PR throughput is exceptionally high, indicating a project in a consolidation and hardening phase rather than a feature-discovery phase. Notably, no new releases were published despite this high velocity, suggesting the team is accumulating changes into a larger, upcoming version.

## 2. Releases

**No new releases were published in the last 24 hours.** Given the exceptional volume of merged changes (18 PRs/commits) across agent internals, TUI behavior, and WebUI state management, a significant release is likely imminent. Users on stable versions should expect breaking changes in agent option handling and streaming response structure once this batch ships.

## 3. Project Progress

The project made major strides in architectural simplification and feature completion. The 18 merged/closed PRs demonstrate a deliberate effort to **decouple core agent logic from UI-specific state**, as seen in PR [#5559 (refactor(agent): decouple loop from message tool state)](https://github.com/HKUDS/nanobot/pull/5559) and [#5555 (refactor(agent): remove duplicate progress streaming path)](https://github.com/HKUDS/nanobot/pull/5555). These PRs consolidate the agent loop's responsibilities, moving usage tracking and progress events into explicit, per-run hooks rather than global side-channels, which will make the system dramatically easier to debug and extend.

User-facing features also advanced: **TUI skill autocompletion** (PR [#5534](https://github.com/HKUDS/nanobot/pull/5534)) and **clipboard image pasting** (PR [#5563](https://github.com/HKUDS/nanobot/pull/5563)) both landed for review, alongside significant WebUI refinements to keep reasoning content outside the answer shell (PR [#5491](https://github.com/HKUDS/nanobot/pull/5491)) and compacted header spacing (PR [#5519](https://github.com/HKUDS/nanobot/pull/5519)). Critical bug fixes included keeping `find_files` scans responsive under load (PR [#5533](https://github.com/HKUDS/nanobot/pull/5533))—a p1 priority fix—and properly surfacing chat connection failures in the TUI instead of hanging silently (PR [#5543](https://github.com/HKUDS/nanobot/pull/5543)). Additionally, a unified provider usage backend (PR [#5481](https://github.com/HKUDS/nanobot/pull/5481)) was merged, laying groundwork for cost tracking and observability for gateway-managed sessions.

## 4. Community Hot Topics

The most active PRs today fall into two categories: **interface ergonomics** and **streaming protocol enhancements**. The PR with the broadest potential impact is [#5562 (feat(api): stream tool progress events)](https://github.com/HKUDS/nanobot/pull/5562), which directly addresses community need for real-time visibility into agent tool execution. This closes issue #3698 and is a common request from developers building custom clients on top of NanoBot's API.

The second hot topic is around the **terminal user experience**, with PR [#5563 (feat(tui): support pasting clipboard images)](https://github.com/HKUDS/nanobot/pull/5563) demonstrating a desire for parity between the TUI and the WebUI. Similarly, the "Enter vs. Tab" composer semantics change (PR [#5538](https://github.com/HKUDS/nanobot/pull/5538)) shows the maintainers actively tuning fine-grained interaction details based on user friction.

| Item | Type | Link | Comments | Need |
|------|------|------|----------|------|
| #5562 | PR | [Stream tool events](https://github.com/HKUDS/nanobot/pull/5562) | N/A | Observable agent lifecycle via API |
| #5563 | PR | [Paste clipboard images in TUI](https://github.com/HKUDS/nanobot/pull/5563) | N/A | Feature parity between interfaces |
| #5234 | PR | [MST metasearch provider](https://github.com/HKUDS/nanobot/pull/5234) | N/A | Better web search source aggregation |

## 5. Bugs & Stability

Only one new bug was reported today, but it is a **critical security vulnerability**. 

| Issue | Title | Severity | Status | Fix |
|-------|-------|----------|--------|-----|
| [#5564](https://github.com/HKUDS/nanobot/issues/5564) | Session path traversal in `session/manager.py` | **Critical (Security)** | Open | No fix PR yet; issue submitted by automated agent |
| [#5550](https://github.com/HKUDS/nanobot/issues/5550) | `read_session` returns empty for wildcard queries | Medium | Closed | Closed today |

The blocked issue (#5564) identifies a path traversal vector where a malicious session ID (e.g., `../../etc/passwd`) could read arbitrary files during session file construction. There is currently no linked fix PR, making this the highest priority item for maintainers to address. Regarding the closed bug (#5550), the issue around wildcard queries in `read_session` was closed within 24 hours of being filed, indicating either a quick fix or a triage decision; this suggests solid maintainer responsiveness to functional bugs.

## 6. Feature Requests & Roadmap Signals

The roadmap is aggressively focused on **performance and architectural robustness** via the ongoing "native stack" initiative (PR #5481 references issue #5482). Four key signals point to the near-term roadmap:

1. **Streaming API completeness (PR #5562)**: The move to stream tool progress events will complete the OpenAI-compatible streaming contract. The quick creation and priority (p2) of this feature suggests it has strong maintainer backing and will likely ship in the next minor release.
2. **Per-spawn model presets (PR #5561)**: An alternative implementation of a previously requested feature, this allows users to define model presets for specific "spawns" (likely sub-agents or sessions). This resolves issue #4231 and will likely be merged after review given its low conflict risk.
3. **CLI simplification (PR #5560)**: Making bare `nanobot` launch the agent interface is a UX win that consolidates command structure. This is fast-moving and likely to land soon.
4. **Metasearch provider (PR #5234)**: The long-pending MST integration for broader web search coverage has been sitting since early August, but its open status with p1 priority signal it remains a desired feature for more robust search tooling.

The flood of merged refactors suggests the next version will not only have these features but also a cleaner, more reliable agent foundation in which to build them.

## 7. User Feedback Summary

- **Security** is a concern: The automated path traversal report (#5564) indicates users are actively hardening the system against remote code execution and file system attacks.
- **Usability friction in the TUI**: Feedback drove the "Enter now · Tab send next" action hint (PR #5538) to clarify how to queue messages while a response is streaming. This addresses a common point of confusion.
- **Search reliability**: The `find_files` scan fix (PR #5533, p1) was driven by user-visible lag, and the MST provider (PR #5234) aims to improve search result relevance and availability.
- **API transparency**: The demand for streamed tool progress events (issue #3698) highlights that developers, especially agent-builder users, find the lack of lifecycle visibility a real pain point.

## 8. Backlog Watch

Only two items warrant attention:

| Item | Type | Days Waiting | Link | Notes |
|------|------|--------------|------|-------|
| #5234 | PR | 24+ days | [MST provider](https://github.com/HKUDS/nanobot/pull/5234) | The p1-priority metasearch feature PR was last updated today but remains open. It has no visible maintainer comments, indicating potential review bottleneck or scope creep concerns. |
| #5504 | PR | 3 days | [Model retry status](https://github.com/HKUDS/nanobot/pull/5504) | Open PR marked with a `conflict` label. Since retry lifecycle events are a key user-facing correctness feature, maintainer attention is needed to resolve conflicts and prevent stagnation. |

Additionally, given the extremely high volume of changelog-less work being merged, maintainers should prioritize a release with comprehensive migration notes on the agent loop refactors for downstream developers.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-27

---

## 1. Today's Overview

High-velocity maintenance day with 50 issues and 50 PRs updated in the last 24 hours. The project shows a healthy but heavy bug-fix cadence — 43 open PRs remain against 45 open updated issues, indicating a sustained triage effort. Desktop reliability, config-write safety, and gateway message-delivery correctness dominate the queue. Notably, three independent PRs (#14276, #29897, #65975, #71385) addressing the same config-wipe-on-invalid-YAML bug have been merged/closed, signaling decisive resolution of a long-running data-loss class. No new releases shipped today. The new-issue intake is strong (≈12 issues filed today), with several already tagged `duplicate` — a sign the community backlog is broad enough that overlap is now common.

---

## 2. Releases

No new releases published in the last 24 hours. The most recent context points to v0.20.5 as the current stable (referenced in issues #96129, #96164, and #96138). No migration notes or breaking-change advisories are in flight.

---

## 3. Project Progress

**Merged/Closed PRs today (5 of 7 closed/merged):**

| PR | Description |
|---|---|
| [#96169](https://github.com/NousResearch/hermes-agent/pull/96169) | **fix(config): fail-closed write guard** — merged. Refuses unparseable/non-mapping `config.yaml` instead of wiping it. Salvages the rejected #71385 work. Backs up to `.corrupt.*.bak`. |
| [#96165](https://github.com/NousResearch/hermes-agent/pull/96165) | **feat: authoritative execution receipts** — merged. Adds per-turn execution receipts from tool/managed-process evidence to gateway delivery paths (streaming, background-task, guardrail, fallback). |
| [#14276](https://github.com/NousResearch/hermes-agent/pull/14276) | **feat(config): guard config wipe on parse failure** — closed (superseded by #96169). Original PR from April, now resolved via the newer consolidated guard. |
| [#29897](https://github.com/NousResearch/hermes-agent/pull/29897) | **fix(config): refuse config set on invalid YAML** — closed (superseded). |
| [#65975](https://github.com/NousResearch/hermes-agent/pull/65975) | **fix(cli): parse-failure guard must not refuse valid empty `{}` config** — closed (superseded). |

**Key takeaway:** The config-wipe bug saga that ran from April through July (5+ PRs) has reached its final form with #96169's unified fail-closed guard. This is a strong signal of maturing engineering hygiene — the team consolidated partial fixes into a single authoritative solution.

Two genuinely new fixes landed in PR form today (not yet merged): #96187 (SSH spawn double-quoting fix) and #96184 (wmic footgun rule alignment).

---

## 4. Community Hot Topics

The most-discussed items reveal three clusters of user concern:

**A. Skills Index Freshness (Infrastructure reliability)**
- [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — **[Skills index stale/degraded]** — 104 comments, open since July 18. The automated freshness probe has been failing intermittently for over a month. The index was 29.8h old against a 26h limit at last check. This is the single most-commented issue on the board, suggesting users rely heavily on the Skills Hub and are vocal about outages.

**B. Desktop Silent Failure Modes (UX trust erosion)**
- [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) — **Desktop silently fails from .desktop launcher** (Electron chrome-sandbox setuid) — 12 comments, P1, open since June.
- [#84361](https://github.com/NousResearch/hermes-agent/issues/84361) — **MEDIA: file links dead** (tag regex + string-concat file:// URLs) — 7 comments, open since August 12.

These two share a theme: the desktop app fails *silently* — no window, no error dialog, no log path. Users are frustrated not by the bug but by the invisibility of the failure.

**C. Session-State Corruption (Trust in conversation continuity)**
- [#86366](https://github.com/NousResearch/hermes-agent/issues/86366) — **archive_and_compact duplicates the carried-forward tail** — 4 comments. Every compaction re-inserts the tail verbatim, doubling recall hits. Users will see ghosts of past messages.

**D. Weixin Rate-Limit Infinite Retry Loop** — [#77836](https://github.com/NousResearch/hermes-agent/issues/77836) — 3 comments, 1 👍. A circuit breaker that resets cooldown on every retry — messages never deliver, silently.

**Underlying need analysis:** Users are past the "does it work" phase and into "can I trust it to not eat my data, lose my messages, or fail without telling me" territory. The top-voted issues are all about silent data-path failures — not feature gaps.

---

## 5. Bugs & Stability

**Ranked by severity (P1 → P3):**

### P1 (critical)
| Issue | Description | Fix PR? |
|---|---|---|
| [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) | Desktop fails silently from .desktop launcher (sandbox setuid) — no window, no error. Open since June. | No open fix PR. Needs maintainer attention. |
| [#86366](https://github.com/NousResearch/hermes-agent/issues/86366) | `archive_and_compact` duplicates the tail — messages appear twice in recall per compaction. | No open fix PR. |
| [#96139](https://github.com/NousResearch/hermes-agent/issues/96139) | Desktop quit confirmation silently bypassed on last-window close (X/Alt+F4) — in-flight turn aborted. | No open fix PR. |

### P2 (moderate)
| Issue | Description | Fix PR? |
|---|---|---|
| [#96164](https://github.com/NousResearch/hermes-agent/issues/96164) | GHEC Copilot provider ignores enterprise token exchange / API host (fails on GHEC). | No PR yet. |
| [#96160](https://github.com/NousResearch/hermes-agent/issues/96160) | Desktop chat viewport jumps to top mid-stream (dup). | No PR yet. |
| [#96107](https://github.com/NousResearch/hermes-agent/issues/96107) | MCP OAuth login fails against monday.com — issuer mismatch (auth.monday.com/mcp vs auth.monday.com). | No PR yet. |
| [#96063](https://github.com/NousResearch/hermes-agent/issues/96063) | Desktop model pill hides provider — stale `$currentProvider` sends wrong provider to gateway silently. | No PR yet. |
| [#77836](https://github.com/NousResearch/hermes-agent/issues/77836) | Weixin rate-limit circuit breaker infinite retry loop. | No PR yet. |
| [#91653](https://github.com/NousResearch/hermes-agent/issues/91653) | Failed delivery obligations never retried while owning process is alive — turns die silently. | No PR yet. |
| [#96129](https://github.com/NousResearch/hermes-agent/issues/96129) | SSH remote bootstrap timeout after update — detached serve keeps SSH channel open (20s exec timeout). | [#96187](https://github.com/NousResearch/hermes-agent/pull/96187) open — double-quoting fix. |

### P3 (low)
| Issue | Description | Fix PR? |
|---|---|---|
| [#96138](https://github.com/NousResearch/hermes-agent/issues/96138) | Context-length detection fails behind axonhub gateway (LM Studio false positive + `_extract_pricing` crash). | None. |
| [#96066](https://github.com/NousResearch/hermes-agent/issues/96066) | `opencode-go` deepseek-v4-flash-vision-exp mis-routes to api.anthropic.com. | None. |
| [#91609](https://github.com/NousResearch/hermes-agent/issues/91609) | Keyless Firecrawl HTTP 403 stops the free-provider failover ring. | [#96186](https://github.com/NousResearch/hermes-agent/pull/96186) open — advances ring on Tavily cap (partial, not Firecrawl). |
| [#96036](https://github.com/NousResearch/hermes-agent/issues/96036) | codegraph MCP spawns new process per call on Windows — unstable daemon mode. | None. |

**Regression cluster — config wipe:** Three PRs closed/merged today were all variants of the same fix (guard config writes on invalid YAML). The final form (#96169) is the consolidated fail-closed guard. This bug class has now been addressed at every surface: CLI `config set`/`unset`, `hermes console`, dashboard, and the shared write guard. Watch for follow-up issues if the guard over-triggers on edge cases (e.g., empty `{}` files, which #65975 had to patch).

**Notable:** Two new front-end fixes landed today for the Desktop Kanban attachment preview (#84299, #84297) — both still open, awaiting review.

---

## 6. Feature Requests & Roadmap Signals

**Strong signals (multiple related requests, clear user demand):**

| Feature | Issues/PRs | Signal Strength |
|---|---|---|
| **Bot Mode group member management** | [#96136](https://github.com/NousResearch/hermes-agent/issues/96136) + [#91329](https://github.com/NousResearch/hermes-agent/issues/91329) — both request editing per-member model/provider/reasoning from Group settings. | **High** — two separate users, same gap; UX friction is clear (must leave group context to change member config). |
| **`delegate_task` per-spawn model/provider params** | [#96014](https://github.com/NousResearch/hermes-agent/issues/96014) — parity with cron job overrides. | **Medium** — single request, but architecturally coherent with existing delegation model. |
| **Official OpenSpec plugin** | [#85845](https://github.com/NousResearch/hermes-agent/issues/85845) — 3 👍, 1 comment. Spec-driven workflow integration. | **Medium** — positive reactions suggest community appetite for SDD tooling. |
| **Hermes Collective Wisdom Agent V1** | PR [#94266](https://github.com/NousResearch/hermes-agent/pull/94266) — complete implementation for contribution/consumption loop. | **High** — large PR, awaiting review; signals roadmap commitment to knowledge sharing. |
| **Cheap desktop backend boot** | [#94484](https://github.com/NousResearch/hermes-agent/issues/94484) — tracking issue for split-boot + lean chat/event plane. | **Medium** — maintainer-reframed, so it has official attention. |
| **Cron delivery context amnesia** | [#75131](https://github.com/NousResearch/hermes-agent/issues/75131) — inject prior delivery context for reply continuity. | **Medium** — real use case (iMessage cron + attach_to_session). |
| **Telegram Business delegated inbox** | PR [#26654](https://github.com/NousResearch/hermes-agent/pull/26654) — open since May, 3+ months. | **High demand, slow merge** — opt-in, fail-closed design; maintainers may be cautious. |

**Prediction for next release:** The config-write guard (#96169) and execution receipts (#96165) are merged and likely ship. The Desktop SSH fix (#96187) is small and targeted — probably lands within days. The Collective Wisdom PR (#94266) is large and may need a reviewer cycle, but its existence suggests product-level commitment. Bot Mode member management is the most likely **new** feature to appear in an upcoming minor release given duplicate requests.

---

## 7. User Feedback Summary

**Pain points (verbatim themes):**

- **Silent failures are the top complaint.** Three separate issues (#51327, #84361, #96139) describe the app failing *without any visible error* — no window, no dialog, no log path. Users are explicitly frustrated by the invisibility, not just the bug: *"The path is never logged, so the cause is invisible."* — [#84361](https://github.com/NousResearch/hermes-agent/issues/84361)
- **Data loss / duplication anxiety.** The config-wipe class (resolved today) and the compaction duplication (#86366) both erode trust in session/config persistence. The fact that 5 PRs were needed to fully fix the wipe bug suggests users hit it repeatedly.
- **Gateway delivery unreliability.** Weixin infinite retry (#77836), failed obligations never retried (#91653), and memory files not injected in gateway mode (#96134) — three independent gateway delivery/message-loss bugs within a week.
- **macOS TCC issues recur.** [#95541](https://github.com/NousResearch/hermes-agent/issues/95541) (closed as duplicate) shows users on statically linked uv CPython losing `encodings` module after alias re-pointing — the TCC anchor workaround keeps biting.
- **Free-tier tooling resilience.** Keyless failover rings (Firecrawl 403, Tavily cap) stopping instead of advancing (#91609, PR #96186) — users on free tiers lose search entirely.

**Satisfaction signals:** The config-write fix saga shows maintainers *do* converge on durable solutions. Execution receipts (#96165) address a real auditability gap. The Kanban attachment preview PRs (#84299, #84297) are community-contributed quality-of-life wins.

**Dissatisfaction signal:** The Skills Index staleness (#66616) has 104 comments with zero 👍 — volume without endorsement suggests users are *reporting* a nagging problem, not rallying behind a cause. That's a service-reliability issue that needs an owner.

---

## 8. Backlog Watch

Items needing maintainer attention (open long, unresolved, or at risk of stalling):

| Item | Age | Why it matters |
|---|---|---|
| [#26654](https://github.com/NousResearch/hermes-agent/pull/26654) — Telegram Business delegated inbox | **105 days** (May 15) | Fully implemented, opt-in, fail-closed. 3+ months without merge or closure. Either: merge, request changes, or explicitly defer. |
| [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) — Desktop chrome-sandbox setuid | **65 days** (June 23), P1 | P1 severity, silent failure, no fix PR. This should not sit at P1 for 2+ months. |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — Skills index stale | **40 days** (July 18) | 104 comments. The probe keeps failing. Either fix the pipeline or update the SLO. |
| [#61443](https://github.com/NousResearch/hermes-agent/issues/61443) — Nix `.#desktop` hash mismatch | **49 days** (July 9) | Recurring on every electron bump. Hardcoded sha256 is a known anti-pattern; needs a fetch strategy change. |
| [#75131](https://github.com/NousResearch/hermes-agent/issues/75131) — Cron delivery context amnesia | **27 days** (July 31) | Needs-decision tag. Real use case; user is waiting on a decision, not a fix. |
| [#32504](https://github.com/NousResearch/hermes-agent/issues/32504) — Redundant budget flags | **93 days** (May 26) | Small refactor, 1 comment. Probably low priority, but should be triaged (close or assign). |
| [#43481](https://github.com/NousResearch/hermes-agent/pull/43481) — docs: fix `hermes skills config` command | **78 days** (June 10) | Docs-only fix, trivial diff, still open. This is a "merge or close" signal. |
| [#84299](https://github.com/NousResearch/hermes-agent/pull/84299) + [#84297](https://github.com/NousResearch/hermes-agent/pull/84297) — Kanban attachment preview | 15 days | Backend + desktop mirror PRs. Tested (TDD). Waiting on review; community contributor effort should be acknowledged. |

---

## Health Assessment

**Overall: Improving, with structural risks.**

The config-wipe consolidation and execution-receipts merge show the team is capable of closing complex multi-PR arcs decisively. However, the P1 desktop silent-failure issue sitting for 65 days, the 104-comment skills index issue, and the 105-day-old Telegram PR all suggest review bandwidth is the gating constraint — not engineering capability.

The project is in a **high-bug-report equilibrium**: community usage is high, quality bar is being enforced (duplicates, needs-repro tags), but the rate of silent data-path failures (delivery loss, session duplication, config wipe) indicates the core loop needs more defensive-programming passes.

**Watch items for tomorrow's digest:** merge status of #96187 (SSH fix), any update on #51327 (P1 desktop), whether #96169's config guard spawns follow-up edge cases.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-27

## 1. Today's Overview

PicoClaw shows a steady maintenance cadence with 7 issues and 6 PRs updated in the last 24 hours. The project is actively consolidating long-standing PRs (notably PR #1549 merging four open fixes) and addressing channel-specific integration bugs across Slack, LINE, and Telegram. No new releases were published, suggesting the project is in a stabilization phase before the next version bump. Community activity is moderate, with two stale-bot closures and several bug reports receiving maintainer attention. The backlog is manageable, with most issues either having associated fix PRs or clear next steps.

## 2. Releases

No new releases were published in the last 24 hours. The most recent documented version remains **v0.3.1**.

## 3. Project Progress

Four PRs were closed/merged today, representing meaningful fixes across the codebase:

- **[PR #1549 (merged)]**: Consolidates fixes from four open PRs (#1448, #1447, #1446, #1444), suggesting maintainers are clearing out a backlog of accumulated fixes in a single batch.
- **[PR #3316 (merged)]**: Fixes routed-agent context management — addresses a significant bug where agents routed via dispatch rules weren't respecting history, summarization, compression, or seahorse bootstrap. This is a substantial correctness fix for multi-agent deployments.
- **[PR #3315 (merged)]**: Adds Telegram topic support for private bot chats, extending the existing forum topic handling to a previously unsupported message type.
- **[PR #3314 (merged)]**: Fixes `customAllowPatterns` for shell commands — a security-relevant fix where default deny patterns were incorrectly taking precedence over user-configured allow lists.

Two PRs remain open:
- **[PR #3340]** — Fix for Slack media upload (FileSize zero-value bug), directly addressing Issue #3338.
- **[PR #3329]** — Fix for LINE webhook settings that are documented but never read, addressing Issue #3328.

## 4. Community Hot Topics

The most actively discussed items this cycle are:

1. **Better long message support in IRC** ([Issue #3287](https://github.com/sipeed/picoclaw/issues/3287), 8 comments) — Users want PicoClaw to handle IRCv3 messages that exceed the 512-byte limit as cohesive messages rather than treating splits as separate messages. This is a protocol-level UX improvement that would meaningfully affect IRC users.

2. **Web UI chat input lag** ([Issue #3281](https://github.com/sipeed/picoclaw/issues/3281), 7 comments, 1 👍) — Users report severe input lag in the Web UI as chat history grows. This is a performance issue affecting the primary user interface, with broad user impact.

3. **Slack media uploads broken** ([Issue #3338](https://github.com/sipeed/picoclaw/issues/3338), 2 comments) — All Slack media uploads fail with `file size cannot be 0`. The root cause is identified (missing `FileSize` field in upload parameters) and a fix PR [#3340](https://github.com/sipeed/picoclaw/pull/3340) is already open.

The common thread: users are hitting real-world integration pain points (IRC protocol quirks, Slack media handling, UI performance) that affect daily usage reliability.

## 5. Bugs & Stability

Ranked by severity:

**High:**
- **Slack media uploads completely broken** ([Issue #3338](https://github.com/sipeed/picoclaw/issues/3338)) — Every media upload fails with a `file size cannot be 0` error. Regression or shipping bug, but fix PR [#3340](https://github.com/sipeed/picoclaw/pull/3340) is open with a straightforward fix.
- **Routed-agent context management broken** ([Issue #3301](https://github.com/sipeed/picoclaw/issues/3301), closed) — Agents routed via dispatch rules weren't remembering conversation history or triggering auto-compression. Fixed via merged PR [#3316](https://github.com/sipeed/picoclaw/pull/3316). Without this fix, multi-agent deployments would be severely degraded.

**Medium:**
- **Antigravity generation returns 429 despite valid auth** ([Issue #3339](https://github.com/sipeed/picoclaw/issues/3339)) — Authentication and model discovery work, but all generation requests fail with quota exhaustion. No fix PR yet; this suggests an API protocol mismatch or incorrect request format.
- **Web UI input lag with long history** ([Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)) — Performance degradation affecting usability; no fix PR yet. This may require front-end optimization or a re-render strategy.

**Low:**
- **RKLLM abnormal responses on ARM board** ([Issue #3346](https://github.com/sipeed/picoclaw/issues/3346)) — Newly reported, no comments or diagnosis yet. Likely hardware-specific or model quantization issue.
- **LINE webhook settings inert** ([Issue #3328](https://github.com/sipeed/picoclaw/issues/3328), closed) — Documented config values have no effect. Fix PR [#3329](https://github.com/sipeed/picoclaw/pull/3329) is open but currently marked stale, which is concerning given the issue was confirmed as a genuine bug.

## 6. Feature Requests & Roadmap Signals

- **IRC long message handling** ([Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)) — Users want IRCv3 message splitting to be handled intelligently. This is a niche but important protocol-level improvement. Given it's labeled `[Feature]` and has been open for over a month with maintainer comments, it may be queued for a future release focused on IRC improvements.

- **Telegram topics in private chats** ([PR #3315](https://github.com/sipeed/picoclaw/pull/3315), merged) — This is now shipped, indicating the project is actively expanding Telegram topic support. Future roadmap may extend this to private chats with forum mode enabled.

- **Web UI performance improvements** — While filed as a bug, the input lag issue signals a need for a broader Web UI performance pass. If this receives more upvotes, it could drive a dedicated front-end optimization milestone.

The consolidation of PRs into a single merge (PR #1549) suggests maintainers are preparing a significant release that bundles pending fixes. Expect a v0.3.2 or v0.4.0 shortly.

## 7. User Feedback Summary

Across issues and PRs this cycle, users express:

- **Frustration with integration-specific breakage**: Slack media uploads failing entirely (>0 effort to work around) and routed-agent memory loss are both critical-path issues that break core workflows.

- **Satisfaction with the fix PRs**: The rapid turnaround on PRs #3314, #3315, and #3316 — all merged in the same cycle — demonstrates a responsive maintainer team that values correctness.

- **Concern about stale PRs**: The LINE webhook fix (#3329) being marked `[stale]` after only ~2 weeks is causing user concern that it may never land, despite the issue being confirmed.

- **Usage patterns**: Users are deploying PicoClaw as a multi-channel gateway (Discord, Telegram, Slack, LINE, IRC) on edge devices (Raspberry Pi, ARM boards), indicating the project's positioning as a lightweight, self-hosted AI assistant is resonating. The RKLLM issue ([#3346](https://github.com/sipeed/picoclaw/issues/3346)) shows real-world ARM deployment is happening.

## 8. Backlog Watch

Items needing maintainer attention:

- **[Issue #3339](https://github.com/sipeed/picoclaw/issues/3339) — Antigravity 429 errors**: Open for 10 days with only 2 comments (both user-side). This blocks a specific provider and may indicate an API protocol mismatch that requires maintainer knowledge to resolve.

- **[PR #3329](https://github.com/sipeed/picoclaw/pull/3329) — LINE webhook fix marked stale**: The issue (#3328) was confirmed as a genuine bug with documented evidence. Marking the fix PR as stale is a signal that maintainer bandwidth is tight or that the PR needs modification. This should be reviewed before it gets auto-closed.

- **[Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI input lag**: With 7 comments and 1 👍, this is the most-discussed open bug without a fix PR. The lack of a maintainer response on a proposed solution is a gap.

- **[Issue #3287](https://github.com/sipeed/picoclaw/issues/3287) — IRC long message support**: Open for over a month with 8 comments but no status update. This is a well-scoped feature request that may need a maintainer decision on whether to implement it.

---

*Digest generated from PicoClaw GitHub activity for 2026-08-27.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-27

## 1. Today's Overview

NanoClaw is in an **intense stabilization sprint**: 24 PRs were updated in the last 24 hours, 18 of which remain open and 6 merged/closed, though **no new releases** shipped today. The bulk of the effort is concentrated on installer reliability (apt hangs, launchd bootstrapping, PATH ordering, Node version floors) and multi-agent infrastructure (MCP policy ceilings, task/series ID tracking, output-token caps). One new open issue (#3568) reports a potentially critical inbound-queue starvation bug, while a long-dormant enhancement request (#574, open since February) surfaced again requesting `jq` in containers. The velocity and discipline of the PR stream (all labeled `follows-guidelines`, most authored by `Agi-Asi`) indicate a well-orchestrated maintenance push rather than organic community churn.

## 2. Releases

**None.** No new versions, tags, or release notes were published in the last 24 hours. The `[Unreleased]` changelog section referenced in PR #3501 suggests the next release is still being assembled.

## 3. Project Progress

Six PRs were merged/closed today. The most significant:

- **[#3557 — fix(mattermost): improve initial setup and SiteURL handling](https://github.com/nanocoai/nanoclaw/pull/3557)** — Core-team fix tightening Mattermost onboarding and server URL detection; closed.
- **[#3556 — fix(mattermost): recover card thread after restart](https://github.com/nanocoai/nanoclaw/pull/3556)** — Fixes a real reliability hole: interactive-card routing relied on an in-memory post-to-thread cache that vanished on host restart, breaking approval-card clicks until the cache was repopulated. Now persisted/recoverable; closed.

The other four merged PRs are not shown in the top-20 list but are included in the 6 "merged/closed" bucket from the API data, implying several smaller fixes also landed.

## 4. Community Hot Topics

Activity is high but heavily **maintainer-driven**; the community signal is thinner.

- **[Issue #574 — containers lack jq](https://github.com/nanocoai/nanoclaw/issues/574)** (closed; 3 comments, 1 👍) — Community member `ErikDeBruijn` argues that `node -e` is an unsafe JSON-parsing default for agent API calls and requests `jq` be included. This is a **security-conscious usability request** from the swarm/orchestration world; the "eval attack" framing is a legitimate concern worth a maintainer response.
- **[PR #3501 — docs: mention the Dial channel](https://github.com/nanocoai/nanoclaw/pull/3501)** (open, core-team author) — Documentation gap: the Dial channel ships in the setup picker but is absent from README channel lists and the `[Unreleased]` changelog. Low controversy; pure docs friction.
- **PRs by `wildcard` (#3551, #3552)** — Agent-generated (Codex `gpt-5`) MCP-policy enforcement PRs. These are notable because they're **AI-authored changes to core security policy**, a trend worth watching for maintainers and reviewers.

## 5. Bugs & Stability

**High severity:**

- **[Issue #3568 — Pending `system` rows starve the inbound queue; agent silently stops responding](https://github.com/nanocoai/nanoclaw/issues/3568)** — **Critical.** Once `maxMessagesPerPrompt` (default 10) pending `kind='system'` rows with lower `seq` than real traffic accumulate, the agent silently stops responding to all inbound messages with no error. This is a **fail-silent deadlock** in the core messaging loop. No linked fix PR yet. Reporter: `BuckG71` (0 comments, filed today).

**Medium severity (fix PRs exist):**

- **`signal-cli` config-lock deadlock** → [#3563](https://github.com/nanocoai/nanoclaw/pull/3563): probes can deadlock on the daemon's config lock during setup; fix adds timeouts.
- **`needrestart` hang in Linux installers** → [#3562](https://github.com/nanocoai/nanoclaw/pull/3562): non-interactive apt now enforced. Real install-friction bug; affects onboarding.
- **better-sqlite3 13 segfaults below Node 22.14.0** → [#3555](https://github.com/nanocoai/nanoclaw/pull/3555): hard Node floor raised to 22.14.0 — a crash-on-open classifier.
- **Container repeatedly fails to wake silently** → [#3566](https://github.com/nanocoai/nanoclaw/pull/3566): host now notifies the user instead of hanging silently.
- **Email substitution shell-corruption** → [#3550](https://github.com/nanocoai/nanoclaw/pull/3550): validation regex allows shell metacharacters (`;`, backticks, `$()`) and apostrophe emails break `bash -c` lines — an **injection-adjacent** bug in onboarding.
- **Mailbox infinite crash loop on retried delivery** → [#3549](https://github.com/nanocoai/nanoclaw/pull/3549): plain `INSERT` throws `UNIQUE constraint failed` and the caller loops forever; fix switches to `INSERT OR IGNORE`.

**Lower severity:**

- **launchd kickstart no-op** → [#3561](https://github.com/nanocoai/nanoclaw/pull/3561): restart.sh silently no-ops on an unloaded plist; now bootstraps.
- **CLI/local with no agent** → [#3560](https://github.com/nanocoai/nanoclaw/pull/3560): now fails fast with a wiring hint instead of an opaque error.

## 6. Feature Requests & Roadmap Signals

- **`jq` in containers (Issue #574)** — Requested Feb 2026, re-surfaced today. If maintainers accept, this is a **one-line Dockerfile/RFC change** and could slip into the next patch release; if rejected, the issue's closure should document the `node -e` alternative officially. Expect a decision soon given the comment count.
- **MCP policy ceilings per group (PRs #3551, #3552)** — Enforcing MCP-only policy behind OneCLI and per-group routing is in-flight. These are **infrastructure priorities** likely to land in the next minor release, not just a patch.
- **Node floor raise to 22.14.0 (#3555)** — A hard compatibility floor change; users on older Node will need to upgrade ahead of the next release.
- **Dial channel documentation (#3501)** — Signals that **Dial is now a first-class channel** shipping in the installer; expect the next release notes to formalize this.

**Roadmap prediction:** The next NanoClaw release will likely include the Mattermost reliability fixes (#3556, #3557), the installer hardening batch (#3561, #3562, #3563, #3567), and the Node/sqlite floor change (#3555), plus the MCP policy enforcement suite (#3551, #3552). The `jq` enhancement could ride along cheaply if a maintainer picks it up.

## 7. User Feedback Summary

- **Pain point — "silent" failures dominate the day.** Three separate reports converge on the same class of problem: the system fails silently and the user has no diagnostic path — #3568 (silent queue starvation), #3566 (container fails to wake silently), #3561 (restart silently no-ops). This is a **recurring UX theme**: users want *loud, actionable* errors, and they're getting silent hangs. The corresponding fix PRs (#3566, #3561) are the right direction.
- **Security-conscious users present.** `ErikDeBruijn`'s `jq` pitch highlights a community preference for **safe parsing utilities over `eval`-adjacent `node -e` patterns**. The other side of that coin is PR #3550, where email-format validation allowed shell metacharacters to pass — a bug that would have fed into that same class of concern.
- **Setup friction is still the top onboarding complaint.** Multiple installer fixes today (apt hangs, launchd, PATH, signal-cli) suggest setup remains the most fragile user-facing surface of NanoClaw.

## 8. Backlog Watch

- **Issue #574** (closed today) — 6 months old, had only 3 comments, and the maintainer reaction appears to have been **closure without an obvious replacement path**. If the fix is "won't fix," that should be stated in the closing comment; if it's "superseded by X," link it. Silent closure would be a disservice.
- **PR #3501 (Dial docs)** — Core-team authored, 3 days old, no comments. Low-risk documentation PR; needs a reviewer to merge so the README matches reality.
- **AI-authored security-policy PRs (#3551, #3552)** — These touch per-group MCP policy enforcement. They carry the `[agent] Codex` tag and **no explicit human-review guarantees visible**. Given they modify security boundaries, they warrant explicit, documented human review or risk becoming a governance concern regardless of code quality.
- **No issue in the top-2 list has a maintainer response.**

---

*Digest generated 2026-08-27 from public GitHub activity. Data reflects the 24 hours preceding generation.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-27

## 1. Today's Overview
NullClaw is in a **low-activity period**: 1 issue was updated in the last 24 hours (1 open, 0 closed), and no pull requests were merged or updated. No new releases were published. The single new issue (#995) is an enhancement request rather than a bug report, indicating the core product is stable enough that users are shifting focus to feature ergonomics. There is no visible blocking problem; instead, the maintainer community faces a queue of feature requests awaiting triage.

## 2. Releases
**None.** The latest available version remains `nullclaw 2026.5.29` (as referenced in the issue). No new releases, breaking changes, or migration notes to report today.

## 3. Project Progress
**No merged or closed PRs today.** No features were advanced or fixes landed in the last 24 hours. This is a pause day for implementation work; progress—if any—is happening on private branches or will surface in the next reporting window.

## 4. Community Hot Topics
- **[#995 [enhancement] Support Skills Symlinks](https://github.com/nullclaw/nullclaw/issues/995)** — Author: ivostoykov. Only issue active today (0 comments, 0 reactions). Despite low engagement, this touches a critical workflow problem: users want to keep a single source of truth for skills across projects/paths, which suggests a real need for **filesystem-level flexibility** (symlinks) rather than only in-app copying. The absence of discussion could mean the topic is niche, or that maintainers haven't yet amplified it. Given the interest in the prior version, this deserves early triage to assess scope.

## 5. Bugs & Stability
**No new bugs, crashes, or regressions reported today.** The only filing is an enhancement, so the severity queue for stability is empty. This is a positive signal: the build in the wild (`2026.5.29`) shows no immediate failure reports.

## 6. Feature Requests & Roadmap Signals
The sole feature request is **Skills Symlinks** (#995). Underlying need: reduce synchronization overhead and avoid duplication of "obsolete skill" copies. This suggests a shift toward **workspace composition** (referencing skills in place) rather than copying assets. **Prediction:** if accepted, this will be scheduled for the next minor release (e.g., `2026.7.x` or `2026.8.x`), as it is a mechanical feature (follow symlinks during skill enumeration/linking) rather than a deep architectural change. Low risk, high usability gain.

## 7. User Feedback Summary
Users are positively pushing for **resource-linking ergonomics**. The pain point expressed in #995 is twofold: (1) manual sync of skill files is error-prone, and (2) "liks" (skill links) currently ignore symlinked directories, breaking established workflows (e.g., dotfiles repos, shared config). This indicates satisfaction with the core CLI's behavior and a desire to integrate it more cleanly with existing filesystem tooling (Git repos, `stow`-like layouts). No complaints about performance, crashes, or UX breakdowns were filed in this window.

## 8. Backlog Watch
**No long-unanswered issues or PRs observed.** With only 1 open issue in the active window and 0 PRs open, the backlog appears shallow at the moment. Maintainers should, however, keep an eye on #995: it is recent (added yesterday) and currently unanswered. If left untouched for more than a week, it risks becoming a "silent waiting" item that frustrates contributors who are eager for a small, well-defined improvement.

---

**Health Assessment:** Stable, quiet day. No fires; one promising feature request waiting for maintainer response. Recommend triaging #995 (add labels, clarify scope, acknowledge author) to keep momentum.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-27

## 1. Today's Overview

IronClaw is in a high-velocity release preparation phase, with the **1.4.0-rc.1** candidate cut on August 26 covering 81 commits since v1.3.0. Activity is intense: 46 issues and 50 PRs were touched in the last 24 hours, with 20 issues closed and 47 PRs merged/closed — indicating a strong stabilization push. The maintainer core (henrypark133, serrrfirat) is driving three parallel workstreams: **performance optimization of the LLM loop** (result-view selection, citation-by-reference, instrumentation), **sandbox/security hardening** (TOCTOU fixes, TLS termination, persistent sandbox epic), and **WebUI feature expansion** (voice-to-text, design system, notification center). A significant cluster of closed PRs from July (MCP framework, tier-2 test harness, agent-loop refactors) appears to have been finalized/merged today, suggesting accumulation of queued merges. The project health is strong — no P0 regressions, systematic performance engineering replacing ad-hoc fixes, and a clear roadmap toward 1.4.0 GA.

## 2. Releases

**ironclaw-v1.4.0-rc.1** (2026-08-26) — First release candidate for 1.4.0, building on 81 commits since v1.3.0. Key addition:
- **Durable notification inbox**: runs publish authoritative outcomes and actionable gates to a per-user inbox, surfaced via WebUI notification center — covering approvals and auth prompts.

No breaking changes or migration notes were flagged in the release notes. This is a release candidate, so the team is expecting feedback before GA.

## 3. Project Progress

The 47 merged/closed PRs today reflect both new work and a backlog flush of earlier branches:

**New today:**
- **PR #7926** — Release cut for 1.4.0-rc.1 (targeting `release/2026-08-26`)
- **PR #7931** — Tenant BI telemetry foundation: privacy-safe typed contracts, hourly aggregation, six telemetry tables, async recorder/worker with batch writes

**Finalized from earlier work (merged today):**
- **Security hardening**: PR #6817 closes four TOCTOU containment escapes in `DiskFilesystem` with fd-rooted traversal; PR #6740 ports TLS termination seam for sandbox egress proxy; PR #6533 adds container-supervised mode for hosted deployments
- **Loop architecture**: PR #6112 decomposes the `canonical.rs` executor spine, dedupes latency wrapping; PR #6096 serializes concurrent inbound-message writes per thread (fixes ordering bug #6047)
- **MCP framework**: PRs #5970, #5918, #5917 land the registration framework, hosted-server discovery, and egress boundary — now fully merged
- **Testing infrastructure**: PRs #6131–#6134 complete the tier-2 integration harness (storage-mode audit, fixture-sourced LLM seam, SSE wire-contract round-trip, fault-injection scenarios)
- **Onboarding**: PR #6366 fixes Esc-at-API-key-prompt UX; PR #6157 adds terminal UI + service install for `ironclaw-reborn`
- **Memory/context**: PR #5742 wires the memory prompt-context source and pins the untrusted-memory envelope (production change)
- **Knowledge graph**: PR #7927 refreshes the committed codebase-memory bootstrap snapshot

## 4. Community Hot Topics

**#7732 — Epic: Persistent per-user sandbox with iron-proxy** (10 comments) — The most active discussion. The current per-command Docker container creation is acknowledged as not the target design; the epic defers loop executors in favor of a persistent sandbox. This is the central architecture decision for the sandbox roadmap.

**#7891 — perf(extensions): unprojected capability payloads + blind 24 KiB head-slice cost** (5 comments) — Two `gmail.get_message` calls (274/290 ms) cost **19.7 seconds** of turn time, with 19.2s of that being model inference on 49,152 bytes of raw MIME headers. This is the flagship performance bug driving today's result-view and citation-by-reference work.

**#2950 — llm: split provider-safe tool schema cleanup from strict optional-field rewriting** (3 comments) — Maintainer-driven refactoring to separate two conflated behaviors in `normalize_schema_strict()`, likely to prevent provider 400s.

**#6986 — Cache: keep the advertised tool array byte-identical** (3 comments) — Part of the pi-harness adoption program; addresses progressive disclosure promoting deferred tools mid-run and breaking prefix-cache stability.

**#2117 — ironclaw-bridge: local file/MCP bridge daemon** (3 comments, 1 👍) — The only community-reaction item in the top tier. Users need local-file access (Obsidian vaults, local project directories) when IronClaw runs in the cloud.

**#7781 — Design System Phases 2–3** (2 comments) — Supersedes the duplicate #7733; covers DESIGN.md governance + theme reskin.

The underlying pattern: the community is most engaged with (a) architecture epics that define where the project is going, (b) concrete performance bugs that affect real usage, and (c) bridging local-to-cloud workflows.

## 5. Bugs & Stability

No new P0 bugs today. Severity-ranked:

1. **[Medium] Telegram removal returns 503 from WebChat extension endpoint** (#7912) — Reproduced in production: removing the Telegram extension from Channels settings fails with 503 on `POST /api/webchat/v2/extensions/telegram/...`. No fix PR yet. This is a user-facing production regression in the extension lifecycle.

2. **[Medium] Slack thread_broadcast messages silently discarded** (PR #7925) — A Slack mention posted as a threaded reply with "Also send to channel" is dropped at ingress because the adapter only allowlists `None` and `file_share` subtypes. Fix PR is open (size L, risk low): admit human message subtypes and stop channel mentions depending on `app_mention`.

3. **[Low] Performance: unprojected capability payloads** (#7891) — not a crash but a 19.7s turn cost on two email reads. The fix direction (bounded selectable JSON result views, PR #7928) is already in review.

4. **[Closed] Dead code retirement**: #6686 (`DockerProcessSandboxBackend`) closed — dead code deliberately removed as part of W1 sandbox cleanup.

Security fixes merged today (PR #6817 TOCTOU escapes, PR #6740 TLS termination) are notable but were authored in July and finalized today — they are not new findings.

## 6. Feature Requests & Roadmap Signals

Active roadmap signals:

- **Voice-to-text in WebUI composer** (#7867) — newest epic; spawned three design issues today (#7932 browser-normalized, #7933 host-normalized, #7934 architecture selection). This is actively being designed and could land in v1.4.x or v1.5.
- **Result-view selection + citation-by-reference** (#7928, #7930) — bounded JSON selection with RFC 6901 pointers and "use prior result by reference" capability. This is a direct response to the #7891 inference-cost bug. High probability for v1.4.0 as it's tied to the release candidate cycle.
- **Scheduled (cron) triggers** (#3873 — closed) — the trigger-loop issue closed today, suggesting the feature shipped or was fully specified.
- **Slack channel-routed personal/team agents** (#4625) — still open, phase-1 Slack-as-a-channel; likely v1.5+.
- **Per-run instrumentation** (#7929) — proposed today, makes all performance work "decidable" via production metrics. Would likely land before further loop changes.
- **Observability/BI telemetry** (#7931) — merged today; foundation for tenant-scoped analytics.
- **Epic: Tier B follow-up gaps after v1 retirement** (#6369) — active tracking epic for architecture debt.

**Prediction**: v1.4.0 GA will likely include selectable JSON result views, citation-by-reference, and the telemetry foundation. Voice-to-text is being designed now but is more likely v1.5. The persistent sandbox epic (#7732) is the long-horizon item that will shape v1.5+.

## 7. User Feedback Summary

Pain points surfaced through issues and PRs:

- **Context bloat is the #1 pain**: #7891 (19.7s turn from 48KB MIME headers), #4425 (closed: `builtin.http` context bomb with 10MB floor), #567 (closed: proactive truncation). Users are experiencing slow, expensive turns with routine tool usage.
- **Local-file access blocked in cloud**: #2117 — Obsidian vaults and local directories are unusable; the tunnel system exists but is insufficient.
- **Slack ingress fragility**: #7925 (thread_broadcast dropped), #4828 (closed: model lacks awareness of connected channels/delivery state). Slack users hit silent failures.
- **Automation reliability**: #6879 (closed) — unattended runs execute as plain interactive turns; structural, not model noise. Closed today, suggesting the fix landed.
- **Voice input missing**: #7867 — "Speaking a message is faster than typing one for anything longer than a sentence" — the web UI is the only channel without voice.
- **Onboarding friction**: #6360 (Esc at API-key prompt was a terminal state), #7815 (closing the connect → suggest → thread flow).

Satisfaction signals: the team is responsive (20 issues closed in 24h), the release cadence is healthy, and performance work is now measurement-driven (#7929 proposes instrumenting before changing).

## 8. Backlog Watch

Items needing maintainer attention:

- **#7732 — Epic: Persistent per-user sandbox with iron-proxy** (10 comments, created 2026-08-18) — the most-commented open issue. Not stale, but it's the largest open epic and has been silent for a day. Needs continued planning engagement.
- **#6986 — Cache: keep the advertised tool array byte-identical** (3 comments, created 2026-08-01) — P0-tagged performance issue from the pi-harness program; open for three weeks with only 3 comments. Has a fix PR (#7928 is related). Needs a decision on approach.
- **#2117 — ironclaw-bridge** (3 comments, 1 👍, created 2026-04-07) — 4.5 months old, community-upvoted, still open with no assignee visible. This is a real user blocker for cloud-hosted deployments.
- **#2950 — llm: split provider-safe tool schema cleanup** (3 comments, created 2026-04-24) — 4 months old refactoring issue with active discussion today. Maintainer-driven but unassigned.
- **#4625 — Slack channel-routed agents** (1 comment, created 2026-06-09) — roadmap epic with minimal engagement; suggested_P1 tag suggests priority but no movement.

The July-PR backlog (MCP framework, tier-2 testing) cleared today is a positive sign — the team is executing on its roadmap with discipline.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Based on the GitHub data provided for LobsterAI (netease-youdao/LobsterAI) on 2026-08-27, here is the project digest:

---

### 1. Today's Overview

LobsterAI is in a period of high-velocity, routine development and maintenance, with a total of 14 updated items in the last 24 hours. The project shows a healthy "release train" cadence, with 12 pull requests closed or merged and 1 remaining open, indicating a strong focus on iterating and shipping improvements. The development activity is heavily concentrated on the desktop renderer (UI) and documentation, alongside backend integrations for a new analytics pipeline. No new releases were published today, suggesting that the closed PRs are consolidating into a future build. A single open feature request highlights a user desire for a more seamless integration of aggregator services, pointing to ongoing prioritization of user experience for the 18 built-in providers.

---

### 2. Releases

**None.**

No new versions or releases were published in the last 24 hours. The most recent activity points to a pending release, likely consolidated from the PRs closed today.

---

### 3. Project Progress

The project saw 12 merged/closed PRs today (2026-08-27), reflecting a significant push in feature development and bug fixing. The key areas of advancement include:

- **Enhanced Analytics & Deployment Tracking ([#2555](https://github.com/netease-youdao/LobsterAI/pull/2555)):** A major feature was merged that significantly improves the analytics pipeline. This includes new event tracking for sharing, deploying, and copying links, detailed error classification, and an asynchronous queue to guarantee reliable reporting. This suggests a focus on understanding user behavior and product performance.
- **Cloud File Management ([#2550](https://github.com/netease-youdao/LobsterAI/pull/2550)):** Introduced the ability to permanently delete shared cloud files, with safety measures like double confirmation and conflict handling. This directly improves user control over their shared data.
- **Polish and Refinement:** Multiple PRs were merged to polish the UI/UX, including fixes to the login guide ([#2545](https://github.com/netease-youdao/LobsterAI/pull/2545), [#2547](https://github.com/netease-youdao/LobsterAI/pull/2547)), delaying a login prompt until the engine starts to avoid visual glitches ([#2546](https://github.com/netease-youdao/LobsterAI/pull/2546)), and updating visual elements like the library icon ([#2544](https://github.com/netease-youdao/LobsterAI/pull/2544)) and settings width ([#2548](https://github.com/netease-youdao/LobsterAI/pull/2548)).
- **Maintenance & Documentation:** Several PRs were dedicated to fixing issues for the 2026.8.24 release ([#2557](https://github.com/netease-youdao/LobsterAI/pull/2557), [#2556](https://github.com/netease-youdao/LobsterAI/pull/2556)) and preparing the 2026.8.26 release ([#2549](https://github.com/netease-youdao/LobsterAI/pull/2549)), ensuring docs and code are synced.

---

### 4. Community Hot Topics

The only active community item is a feature request, which is the single open issue.

- **[Issue #2554: Integrate Synthorai as a built-in provider (Open)](https://github.com/netease-youdao/LobsterAI/issues/2554)** (1 comment): This is a user-authored request to add "Synthorai" as an official built-in service provider. The underlying needs highlighted by the user are:
    - **Reduced Configuration Friction:** Adding a new multi-model gateway currently requires manual setup via the "Custom" slot, which lacks a default model list.
    - **Protocol Flexibility:** The user wants `switchableBaseUrls` to toggle between OpenAI and Anthropic protocols without manual entry, highlighting the need for easier multi-protocol support.
    - **Improved Onboarding:** The absence of a default `baseUrl` and icon for custom providers creates a risk of user error when entering the API endpoint.

While not heavily discussed (low comments), this request clearly advocates for a more polished, out-of-the-box experience for power users, which the maintainers seem to actively pursue in their other PRs.

---

### 5. Bugs & Stability

No critical bugs, crashes, or regressions were reported today. The closed PRs indicate proactive bug-fixing and stability improvements rather than reactive fixes to user-reported issues.

- **Moderate / UI Fixes:** Fixes included correcting the ZhiPu icon rendering in dark mode ([#2553](https://github.com/netease-youdao/LobsterAI/pull/2553)) and ensuring the app update process preserves the "ready" state ([#2551](https://github.com/netease-youdao/LobsterAI/pull/2551)).
- **Low / UX Fixes:** Fixes focused on the timing of tooltips ([#2546](https://github.com/netease-youdao/LobsterAI/pull/2546)) and updating documentation to match the current build.

---

### 6. Feature Requests & Roadmap Signals

The main signal from the community points towards enhancing provider integration.

- **[Synthorai as a Built-in Provider ([#2554])](https://github.com/netease-youdao/LobsterAI/issues/2554):** This request signals a roadmap direction towards improving the "Provider" experience. Specifically, it calls for better support for aggregator services ("one key to multiple models"). This could lead to future versions that either:
    1.  Add more built-in aggregator providers similar to the existing OpenRouter.
    2.  Significantly upgrade the "Custom Provider" slot with smart defaults, protocol detection, and template models.

Given the pace of development, it is highly likely the team will address this by either adding the specific service or, more broadly, enhancing the custom provider slot to close the feature gap.

---

### 7. User Feedback Summary

While detailed user feedback is limited in the issues (with only 1 open), the feature request provides valuable insight:

- **Pain Point:** The primary friction for users is configuring non-bulit-in services. The process is manual, error-prone, and lacks the convenience of default values.
- **Use Case:** The user is tech-savvy and uses aggregator gateways to access multiple models (OpenAI and Anthropic) with a single API key.
- **Satisfaction:** The user seems generally satisfied with LobsterAI but sees room for improvement in configuration UX. They acknowledge the "Custom" slot is functional ("Custom 是能用的"), but the request for a more integrated experience suggests a desire for a more polished, turnkey solution.

---

### 8. Backlog Watch

No significant long-unanswered issues or stalled PRs were identified. The activity level is high, with merged PRs from at least three distinct contributors (liuzhq1986, liugang519, fisherdaddy) within the last day. The sole open PR, focusing on app update state ([#2551](https://github.com/netease-youdao/LobsterAI/pull/2551)), is recent and appears to be under active development, not requiring attention. The project's maintainers appear to be highly responsive, keeping the backlog clean and up-to-date.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-27

## Today's Overview

Moltis is showing a healthy, steady development cadence with a small but focused set of merges landing overnight. One long-standing bug issue (#1094, opened 3 months ago) was finally closed by a fix PR that also carries backend and Playwright regression coverage. Activity is low-volume (1 issue + 2 PRs touched in 24h) but high-quality: both merged PRs address substantive functional gaps rather than cosmetic changes. A new patch release (20260826.01) was cut, and no critical regressions or security concerns surfaced. Overall, the project is in a stable maintenance-plus-incremental-improvement phase.

## Releases

- **[20260826.01](https://github.com/moltis-org/moltis/releases/tag/20260826.01)** — This is a patch-level release with no documented breaking changes or migration steps in the release notes. It accompanies the two merged PRs (see below) and ships the provider model preference fixes and Fastmail OAuth scope handling improvements. Users on any recent version should be able to upgrade without intervention.

## Project Progress

Two PRs were merged/closed in the last 24 hours:

- **[PR #1104 — fix(providers): allow replacing preferred models](https://github.com/moltis-org/moltis/pull/1104)** *(closed, author: penso)* — This is the headline feature fix of the day. It resolves the ability to *de-prefer* (remove) preferred models per provider. The implementation: (1) preselects saved preferences when reopening the dialog, (2) allows replacing all previous preferences (including clearing to empty), and (3) adds both backend and Playwright regression tests. This closes the 3-month-old issue #1094.

- **[PR #1244 — Fix Fastmail MCP OAuth scope registration](https://github.com/moltis-org/moltis/pull/1244)** *(closed, author: penso)* — A targeted fix for the Fastmail MCP integration. The change improves OAuth discovery by preferring protected-resource scopes over the authorization server's broader catalog, includes the selected scopes in RFC 7591 dynamic client registration, and adds a Fastmail-shaped regression test covering discovery, registration, and localhost redirect handling.

No feature PRs were merged; both merges were fixes/quality improvements.

## Community Hot Topics

There is minimal community discussion in the last 24 hours — neither the two PRs nor the closed issue show substantive comment threads or reactions. The most notable activity is the closure of:

- **[Issue #1094 — "De-Preferring Models"](https://github.com/moltis-org/moltis/issues/1094)** *(closed, author: RokkuCode, created 2026-06-03)* — This bug sat open for ~3 months with zero comments, which suggests it was a real but low-traffic issue. The underlying need: users want deterministic control over provider model selection, including the ability to *remove* previously preferred models, not just add new ones. The PR #1104 directly addresses this.

## Bugs & Stability

One bug was resolved, none newly reported in the last 24h:

- **[Bug: De-Preferring Models — Severity: Medium (fixed)](https://github.com/moltis-org/moltis/issues/1094)** — Users were unable to remove/clear a provider's preferred model once set. This was fixed by PR #1104, which now replaces all saved preferences on save and supports clearing to empty. The fix includes regression tests, indicating good stability hygiene.

No crashes, regressions, or security issues were reported in this window.

## Feature Requests & Roadmap Signals

No new feature requests were filed in the last 24 hours. However, the merged work hints at two ongoing roadmap threads:

1. **Provider preference management** (PR #1104) — Full CRUD for per-provider model preferences is now complete (set, replace, clear). This rounds out the model-routing configuration story for power users who rely on multiple providers.
2. **MCP OAuth robustness** (PR #1244) — Continued hardening of MCP integrations, specifically around dynamic client registration and scope negotiation. This suggests active investment in making third-party MCP servers (Fastmail being one example) work reliably out-of-the-box.

Neither is a headline feature, but both are functional completeness work likely to land in the next minor release.

## User Feedback Summary

While no direct user feedback (comments or reactions) was recorded in the last 24 hours, the closed issue #1094 offers a signal: a user spent time filing a detailed bug report (with the preflight checklist completed) and waited 3 months for resolution. The fix, when it landed, addressed the core pain point directly. The absence of complaints about the fix (no follow-up comments) is a mild positive signal.

The broader picture: users of Moltis care about (a) precise control over which models are used per provider, and (b) seamless integration with external MCP services. Both were addressed in this batch of changes.

## Backlog Watch

No critical items appear abandoned. The longest-open item touched today was issue #1094, now resolved. For maintainers, worth tracking:

- **Issue #1094** (now closed) was a good example of a "silent" bug — low reaction count, no comments, but a real functional gap. It might be worth a triage pass on other open "bug"-labeled issues with zero comments to see if similar quiet issues are lurking.
- **PR #1104** sat open for ~2.5 months (created 2026-06-05, merged 2026-08-26). Long review cycles on straightforward fixes could indicate a maintainer bottleneck; if this becomes a pattern, contributor velocity may suffer.

No other unresolved items desperately need maintainer attention in this window.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-27

## 1. Today's Overview

CoPaw (agentscope-ai/QwenPaw) is in an active development sprint, with 29 issues and 45 PRs updated in the last 24 hours. A new beta release (v2.2.0-beta.1) shipped, and the team is moving quickly toward v2.2.0b2, with work spanning performance optimization (prompt caching), the upcoming multi-tenant "Hub" edition, and a notable community-driven push for observability. The project shows strong momentum with a roughly balanced 16:13 open:closed ratio on issues and 20:25 on PRs, indicating a healthy triage and merge pace. Coverage and testing initiatives (large integration test batches) are a focus area.

## 2. Releases

**v2.2.0-beta.1** was published. Key highlights from the release notes include:

- Docs update for scroll context manager blog.
- Fix for DashScope tool schema sanitization for strict models.
- Targeted integration test work was also included in the build.

**Migration/Breaking Changes:** The beta nature of this release suggests forward-looking changes; no explicit breaking changes or migration paths were detailed in the release notes, though users targeting strict models on DashScope should see improved reliability.

## 3. Project Progress

Several merged/closed PRs and key active PRs define today's progress:

- **Prompt Cache Optimization & Observability (Active):** PR #7346 "perf(runtime): stabilize prompt cache prefixes" and PR #7342 "feat(token-usage): add prompt cache observability" directly address the community-reported prompt cache hit-rate gap (#7335, 81.68% vs OpenCode's 96.02%). This is a two-stage effort — optimizations are separate from observability.
- **v2.2.0 bump:** PR #7338 bumped the version to 2.2.0b2, signaling rapid iteration toward the next minor release.
- **Bug Fix Progress:**
  - PR #7345 (active) fixes the "tool card stuck calling after stop" bug (#7321), where stopping a tool call leaves the UI permanently spinning.
  - PR #7331 (active) bounds oversized single-line tool results to prevent context bloat, preserving complete results as workspace artifacts.
  - PR #7340 (active) adds the requested chat scroll lock feature (#7339).
  - PR #7323 and PR #7336 (installer fixes) were closed/merged, addressing Windows NSIS uninstaller process blockers.
  - PR #7194 (fix workspace startup failure cleanup) was merged.
  - PR #7327 (e2e coverage boost) was merged, adding 23 new targeted console test cases.
  - PR #7332 (test stabilization) was merged to address timing-sensitive test race conditions.
- **Test & Quality Investments:** PR #7341 (coverage sprint batch 5) adds 495 new integration test cases across endpoints, CLI, and module internals. PR #7327 boosted console e2e coverage.

## 4. Community Hot Topics

- **The Multi-Tenant Hub (#7318 — 7 comments):** The most active discussion. QwenPaw Hub is launching in v2.2.0, and the maintainers opened a community feedback thread asking what to build next. The issue consolidates years of multi-user/RBAC requests (#2324, #4702, #5780, #6335). This is the clearest signal of the project's roadmap pivot from personal assistant to team platform.
- **Agent Halting Bug (#6921 — 11 comments):** A persistent bug where the agent stops mid-task after announcing its plan (e.g., "Now 2.1, 3.1, 3.2. Let me do all three.") without any visible prompt, requiring the user to say "continue." This remains the single most-commented open issue and points to a deeper agent-loop control problem.
- **Context Optimization Discussion (#7316):** A user proposes building a tool that lets the LLM prune or simplify useless tool returns during the execution loop to optimize context. The community is engaging with the design; this signals demand for more intelligent context management.

## 5. Bugs & Stability

Ranked by severity:

1. **Agent premature stops (Critical, #6921):** The agent halts after announcing planned steps without performing them or showing a hint. High user impact, still unresolved, 11 comments.
2. **Prompt cache hit rate gap (High, #7335):** 81.68% vs OpenCode's 96.02% for production workloads, with direct cost implications. No fix PR yet, but observability PR #7342 is imminent.
3. **Memory session cross-contamination (High, #7193):** Agent memory search crossed sessions, causing it to work on another session's tasks. Unresolved, open for 6 days.
4. **OpenSSL 3.0.x TLS stack in bundles (High, #7298):** Desktop and Docker bundles use Python 3.11's older OpenSSL, causing carrier DPI connections to reset; no workaround for desktop users.
5. **Windows shell hang (Medium, #7312):** `execute_shell_command` hangs on inherited stdin pipe in the Windows PyInstaller build.
6. **Responses-API multi-turn failure (Medium, #7296):** 400 error referencing expired reasoning items on stateless upstreams like OpenCode Zen.
7. **Tool card stuck in "executing" state (Medium, #7321):** Fix PR #7345 is now open.
8. **Scheduled task push failures (Medium, #7324):** Inbox misses success notifications for some cron-agents.
9. **File upload routing bug (Low, #7322):** Uploads under the Knowledge Base selector wrongly land in the workspace root; user asks if it's a bug or by design.

Other closed issues today included WeChat "hide reasoning" setting ineffectiveness (#7258), Markdown list spacing (#7282), image dimension crash (#7212), and `compact_threshold_ratio=0.9` ValidationError (#7206).

## 6. Feature Requests & Roadmap Signals

Several requests surfaced or moved today:

- **Prompt cache observability & optimization (#7335):** Strongly tied to cost control; this aligns with PR #7342 and #7346, which are likely candidates for the next releases.
- **Chat scroll lock (#7339):** A desktop app toggle to disable auto-scroll during streaming; PR #7340 is already open.
- **Workspace-scoped skill preloading (#7183):** An open PR to add opt-in, workspace-scoped `preload` for trusted core Skills, following Claude Code's subagent pattern.
- **OpenViking-backed memory backend (#7252):** Community proposal to add an optional long-term memory backend, pending maintainer confirmation.
- **React-loop context pruning (#7316):** A user-designed tool approach to let the LLM prune or simplify useless tool outputs in the context loop.
- **Multi-user hub direction (#7318):** The discussion will shape the next post-2.2.0 roadmap.
- **DingTalk group context modes (#7158):** Configurable per-group context isolation/shared modes.

Prediction: v2.2.0 is likely to include prompt cache work (#7342/#7346), although maintainers have explicitly marked observability as separate from follow-up optimization work.

## 7. User Feedback Summary

Issues largely come from a small cohort of power users (notably `rerbin`, who filed 8 of the 29 issues). Their pain points cluster around:

- **Agent reliability:** Unsolicited halts requiring "continue" prompts (#6921, #7193) erode trust in autonomous multi-step execution.
- **Hygiene and ergonomics:** Desktop app lacks settings for auto-clear of completed background tasks (#7280), scroll locking (#7339), and clear descriptions for uninstall options (#7188).
- **Model selection controls:** Requests for push-button choice dialogs instead of free-text entry (#7279), and broader model coverage in built-in lists (#6285).
- **UI/UX polish concerns:** Deploy page layout (#7177), file navigator categorization (#7322), and overly verbose/stuck tool status cards (#7321).

Satisfaction indicators: The project benefits from dedicated, detail-oriented users and prompt maintainer triage; closed issues were resolved within days. The multi-user requests being gathered into the Hub 2.2.0 rollout shows the team is listening to enterprise-level asks.

## 8. Backlog Watch

The following issues appear to require maintainer attention:

- **#6921 (Critical, open 15 days, 11 comments):** Agent stops mid-task with no hint. A detailed report exists; likely needs root-cause analysis of the agent loop's state machine.
- **#7193 (High, open 6 days):** Memory cross-session contamination — highly disruptive for users relying on agent memory; not yet acknowledged by maintainers.
- **#7298 (High, open 2 days):** TLS/OpenSSL issue affects carrier network users; no maintainer response yet.
- **#7188 and #7280 (Low-medium, both open ~6 days):** Windows uninstall UX and background task cleanup — minor but consistent UI complaints from a power user; lack of response may signal lower prioritization, despite the quick closure of other similar issues.
- **#7131 (Pending input, open 14 days, 0 comments):** No activity from maintainers or community; requires attention or close.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**2026-08-27**

---

## 1. Today's Overview

ZeroClaw is exhibiting a high-velocity development cycle with **36 issues** and **50 pull requests** updated in the last 24 hours, reflecting a mature and disciplined open-source project. The maintainer team is actively executing against an accepted RFC pipeline, with two new implementation trackers opened today for the Gemini speech-to-speech channel and session-scoped prompt attachments. While there are **no new releases** this week, the project is clearly in a hardening phase, with a notable focus on security (sandbox policies, egress controls, authenticated webhooks) and architectural contract stabilization (session persistence, memory lifecycle). The community remains engaged, with several high-comment RFCs and design trackers shaping the near-term roadmap. The active management of labels like `needs-maintainer-review` and the use of decision trackers signal a healthy, well-governed project.

---

## 2. Releases

**No new releases were published in the last 24 hours.** The most recent release activity is tracked via the v0.9.0 milestone, coordinated in [Tracker #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432), which covers auth, security hardening, gateway boundaries, and breaking-change work.

---

## 3. Project Progress

**6 PRs were closed/merged today**, showing steady advancement across localization, bug fixes, and technical debt:

- **[PR #10347](https://github.com/zeroclaw-labs/zeroclaw/pull/10347): test(quickstart): make validation assertions locale-independent** — Merged. Complements the closed issue [Task #10264](https://github.com/zeroclaw-labs/zeroclaw/issues/10264), making Quickstart CLI validation tests robust across Fluent locales.
- **[PR #10385](https://github.com/zeroclaw-labs/zeroclaw/pull/10385): fix(channels): deduplicate Discord image URL fallback** — Merged. Resolves [Bug #10327](https://github.com/zeroclaw-labs/zeroclaw/issues/10327), eliminating false partial image-load failures in Discord.
- **[PR #9707](https://github.com/zeroclaw-labs/zeroclaw/pull/9707): fix(config): migrate bare vision_model_provider to dotted alias ref** — Merged. Fixes [Bug #9651](https://github.com/zeroclaw-labs/zeroclaw/issues/9651), resolving credential resolution for migrated vision provider configs.
- **[PR #10189](https://github.com/zeroclaw-labs/zeroclaw/pull/10189): fix(i18n): localize terminal approval prompts** — Merged. Enhances internationalization for interactive approval flows.
- **[Issue #9591](https://github.com/zeroclaw-labs/zeroclaw/issues/9591): fix(channels): clear delivery registry when reload removes all channels** — Closed. Addresses an S1 workflow-blocked bug in the channel orchestrator.
- **[Issue #9587](https://github.com/zeroclaw-labs/zeroclaw/issues/9587): refactor(gateway): require authenticated webhook ingress before agent dispatch** — Closed. A significant security hardening step that closes an identified vector for attacker-controlled messages.

**New large feature PR opened today:**
- **[PR #10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407): feat(sessions): add persistent session prompt attachments** — Your first implementation of accepted RFC #9998, adding SQLite-backed durable prompt attachments with new `session_prompt_*` tools.

---

## 4. Community Hot Topics

The most active discussions reveal deep architectural concerns around session management, realtime capabilities, and security contracts:

**[Issue #8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780): RFC: Realtime speech-to-speech channel for Gemini Live** (21 comments)
Drafting a broker contract for a feature-gated realtime voice channel. A long-running, high-stakes proposal that has just received its implementation tracker ([#10406](https://github.com/zeroclaw-labs/zeroclaw/issues/10406)), indicating community demand for realtime multimodal interaction is now being actioned.

**[Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850): RFC: Decouple memory lifecycle policy from storage backends** (20 comments)
A foundational architecture debate seeking a clear boundary between durable storage and lifecycle governance. Its longevity suggests a complex refactor that touches many subsystems, but its resolution is critical for long-term maintainability.

**[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692): [Tracker]: Maintainer decision queue for RFCs and design issues** (14 comments)
A meta-discussion on governance, showing the project's commitment to transparent, tracked decision-making. This tracker keeps the RFC pipeline moving and is a positive signal for contributor trust.

**[Issue #6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996): RFC: Granular sandbox policy — filesystem and network restrictions** (13 comments)
A security-critical RFC addressing drift between application-level and OS-level policy layers. With multiple revisions and maintainer attention, this is a prime candidate for inclusion in v0.9.0.

**[Issue #9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600): [Tracker]: Session-persistence contract ownership and layer ordering** (13 comments)
Coordinates four independent workstreams touching the same contract, preventing integration conflicts. Demonstrates proactive coordination on a tricky architectural issue.

---

## 5. Bugs & Stability

**S0 – Critical (Data Loss/Security Risk):**
- **[Issue #10379](https://github.com/zeroclaw-labs/zeroclaw/issues/10379): Unable to cancel ongoing message & request for message queuing in ZeroClaw Desktop** — The UI cancel button is disabled and input fields lock, potentially trapping users in a broken state. User-flagged as S0. Needs reproduction and a fix PR.

**S1 – High (Workflow Blocked):**
- **[Issue #10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230): Daemon startup or reload can overflow during agent initialization** — Stack overflow in Tokio runtime when applying Quickstart config. Highly prioritized with `r:needs-repro` label, meaning maintainers need a reliable reproduction case.

**S2 – Medium (Degraded Behavior):**
- **[Issue #10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408): second message during an active turn starts a parallel run in the same session → duplicate work and duplicate reply** — A race condition in the daemon; one of the most common frustration points for users of messaging channels.
- **[Issue #10186](https://github.com/zeroclaw-labs/zeroclaw/issues/10186): Terminal fallback text bypasses live delivery seams** — Degraded UX where error fallbacks don't respect delivery contracts.

**S3 – Low (Minor):**
- **[Issue #10396](https://github.com/zeroclaw-labs/zeroclaw/issues/10396): reasoning_content is replayed for every assistant message in the history** — Performance and context pollution issue, not a crash. Fix is straightforward in the OpenAI provider.

**Security Fix in Review:**
- **[Issue #10409](https://github.com/zeroclaw-labs/zeroclaw/issues/10409): fix(channels): secure temp file handling with 0o600 permissions** — Filed today by an automated agent, addressing potential data leakage of voice/images on shared systems.

---

## 6. Feature Requests & Roadmap Signals

The project is executing on a clear, RFC-driven roadmap. Strong signals for upcoming releases:

- **Realtime Speech (Gemini Live):** With [RFC #8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) accepted and implementation tracker [Issue #10406](https://github.com/zeroclaw-labs/zeroclaw/issues/10406) opened today, this is the most advanced near-term feature.
- **Session-Scoped Prompt Attachments:** [RFC #9998](https://github.com/zeroclaw-labs/zeroclaw/issues/9998) accepted, tracker [Issue #10405](https://github.com/zeroclaw-labs/zeroclaw/issues/10405) opened, and large PR ([#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)) filed — clearly moving into implementation.
- **Granular Sandbox Policy:** [RFC #6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) has high maintainer activity and is tagged `in-progress`, positioning it for v0.9.0.
- **Desktop Computer-Use:** [RFC #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) continues to evolve with a maintainer takeover and security clarification, but still needs more consensus.
- **Teams Channel:** [PR #9241](https://github.com/zeroclaw-labs/zeroclaw/pull/9241) remains a large, open addition, indicating enterprise demand.
- **AI-Assisted PR Review:** [RFC #9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) is formalizing the existing pilot, aiming to codify AI reviewers as an SOP — a productivity differentiator for the project.

For the **next minor version**, focus on the items under active implementation trackers: speech-to-speech broker channel, persistent session attachments, and sandbox policy overhaul.

---

## 7. User Feedback Summary

Users are actively contributing both high-level RFCs and detailed bug reports, showing a deeply engaged community:

- **Pain Point: No Cancel/Queue.** Users are frustrated by the inability to interrupt an in-progress AI turn, calling it “data loss/security risk” ([#10379](https://github.com/zeroclaw-labs/zeroclaw/issues/10379)). This is a core UX expectation that needs addressing.
- **Pain Point: Parallel Session Conflicts.** Sending a second message during an active turn causes duplicated work ([#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408)), a real-world annoyance that erodes trust in the system.
- **Config Complexity.** Migrations (vision provider, web_dist_dir) and compatibility contracts are a recurring theme, showing that configuration remains a steep learning curve for users.
- **Positive: Governance.** The community appreciates the structured RFC process and decision trackers. Users are actively participating in shaping the direction, with RFCs receiving multiple revisions and detailed feedback, a sign of a collaborative, healthy environment.

---

## 8. Backlog Watch

Items that have been open for a while and still need maintainer attention:

- **[Issue #9651](https://github.com/zeroclaw-labs/zeroclaw/issues/9651): Migrated bare vision_model_provider cannot resolve keyed provider credentials** — This was just closed, so a major S1 bug is resolved.
- **[PR #9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997): feat(channels/telegram): add secure model picker** — Open since Aug 14, tagged `blocked`, `needs-author-action`, and `do-not-merge`. Needs a maintainer to unblock or guide.
- **[PR #9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772): feat(telegram): add per_user_session toggle for shared group-chat sessions** — Same status as above; long-running and blocked. This is a high-demand feature for group collaboration.
- **[PR #9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582): feat(plugins): enforce a host-owned egress policy on plugin wasi:http** — Critical security work, open since Jul 31 and blocked. As a core hardening item, this deserves prioritization.
- **[PR #10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142): feat(zerorelay): secure transport with blind relay and native mTLS enrollment** — Large, critical security PR (XL size) tagged for maintainer review but waiting on author action. A cornerstone for secure multi-daemon setups.

The **v0.9.0 tracker** ([Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)) remains the canonical place for release-blocking decisions, and several of the above are likely candidates.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*