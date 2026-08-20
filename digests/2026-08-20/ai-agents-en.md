# OpenClaw Ecosystem Digest 2026-08-20

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-20 01:18 UTC

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
**Date:** 2026-08-20

---

## 1. Today's Overview
OpenClaw shows **high activity and significant community engagement**, with **500 issues and 500 PRs updated in the last 24 hours**. The project is burning down a substantial backlog, with **80 PRs merged/closed** and **35 issues closed**, indicating active and responsive maintainers. However, the **high volume of open issues (465)**, many tagged `[P0]` or `[P1]`, suggests ongoing stability challenges, particularly around **data loss, message delivery, and session state integrity**. While there are **no new releases today**, the presence of a release validation issue (`#125626`) for `v2026.8.1-beta.2` signals an upcoming stable release. Overall, the project is healthy and highly engaged but under significant pressure from a large and demanding user base.

---

## 2. Releases
**No new releases today.**

The most recent activity points to the validation of `v2026.8.1-beta.2` ([#125626](https://github.com/openclaw/openclaw/issues/125626)), an ongoing process involving community testers. A stable release is likely imminent pending this validation.

---

## 3. Project Progress
Today saw the closure of **80 PRs**, including a notable mix of fixes and new features:

- **New Feature — UI Install Policy Review:** PRs [#120900](https://github.com/openclaw/openclaw/pull/120900) and [#116489](https://github.com/openclaw/openclaw/pull/116489) were closed, introducing a mechanism for UI users to review and acknowledge install policy warnings before proceeding, enhancing security and user control.
- **CLI Fix — Inheriting Task Options:** PR [#117528](https://github.com/openclaw/openclaw/pull/117528) (closed) fixes a bug where options like `--json` on parent `openclaw tasks` commands were lost in nested subcommands, improving CLI usability.
- **Process Management Fix:** PR [#126493](https://github.com/openclaw/openclaw/pull/126493) (closed) ensures that live CLI and `fleet logs --follow` child processes correctly receive termination signals, even after operational errors.
- **ACP Runtime Cleanup:** PR [#126494](https://github.com/openclaw/openclaw/pull/126494) (closed) addresses a resource management issue by ensuring unhealthy ACP runtime handles are properly closed when a replacement is started.

Additionally, many other PRs are in the pipeline, with **420 still open**. Key open fixes awaiting review include:
- **Gateway rollback compatibility** ([#120987](https://github.com/openclaw/openclaw/pull/120987))
- **Canceling hook admission on disconnect** ([#120979](https://github.com/openclaw/openclaw/pull/120979))
- **Preventing Tailscale orphan crash loops** ([#126457](https://github.com/openclaw/openclaw/pull/126457))

---

## 4. Community Hot Topics
The most active discussions highlight critical reliability and orchestration concerns:

1.  **[#44925: Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925)** *(26 comments, 🦞 Diamond Lobster)* — This top-discussed issue details multiple failure modes where subagent results are lost without retry or notification, causing data and message loss. The high engagement underscores its severity for complex agent workflows.

2.  **[#77598: Track live dev agent behavior](https://github.com/openclaw/openclaw/issues/77598)** *(22 comments, 🦪 Silver Shellfish)* — A running observational log of a developer's agent over 24 hours, providing valuable real-world data on agent behavior, reliability, and potential areas for improvement.

3.  **[#38327: "Cannot convert undefined or null to object"](https://github.com/openclaw/openclaw/issues/38327)** *(14 comments, 🐚 Platinum Hermit)* — A regression bug affecting the `google-vertex/gemini-3.1-pro-preview` model in version 2026.3.2. The high reaction count (👍: 3) indicates a widely experienced issue.

4.  **[#108435: Gateway fails to start after update](https://github.com/openclaw/openclaw/issues/108435)** *(14 comments, 🦞 Diamond Lobster, P0)* — A critical regression in `2026.7.1` preventing the gateway from starting across multiple launch methods, marking it as a release-blocking issue.

5.  **[#40001: Write tool lacks append mode](https://github.com/openclaw/openclaw/issues/40001)** *(14 comments, 🦞 Diamond Lobster)* — Highlights a data-loss risk where isolated cron sessions using the `write` tool can overwrite shared files instead of appending. This long-standing issue points to a need for safer file manipulation tools.

---

## 5. Bugs & Stability
The project is facing several high-severity regression and data-integrity bugs. No new `[P0]` issues were filed today, but several critical ones are active and demanding attention.

**Critical / Release Blocking (P0 & P1):**
- **[#108435: Gateway fails to start (P0)](https://github.com/openclaw/openclaw/issues/108435)** — A regression in `2026.7.1` causing complete startup failure. No fix PR is currently linked.
- **[#119270: File tools strip leading '@' (P0)](https://github.com/openclaw/openclaw/issues/119270)** — A serious data-loss bug where file tools can operate on the wrong file, potentially overwriting or deleting unintended targets. A linked PR is open.
- **[#117742: Failed apply_patch leaves partial changes (P0)](https://github.com/openclaw/openclaw/issues/117742)** — A destructive multi-file patch operation can fail but leave earlier changes committed, leading to an inconsistent state. A linked PR is open.
- **[#123327: SQLite WAL checkpoint corruption (P0)](https://github.com/openclaw/openclaw/issues/123327)** — Critical data corruption in the shared state database on ext4 filesystems, replacing the SQLite header and rendering the database corrupt.

**High Severity (P1):**
- **[#125679: Matrix channel infinite restart loop](https://github.com/openclaw/openclaw/issues/125679)** *(Closed)* — A regression preventing initial sync on fresh accounts. It was closed, suggesting a fix or workaround was found.
- **[#38327: Vertex/Gemini null object error](https://github.com/openclaw/openclaw/issues/38327)** — A widespread regression for a specific model provider.
- **[#114234: Usage-cost refresh lock never released](https://github.com/openclaw/openclaw/issues/114234)** — A bug in container environments where a leaked lock can permanently freeze the cost cache.
- **[#124284: Subagent spawn fails with vLLM](https://github.com/openclaw/openclaw/issues/124284)** — A new stream wrapper in `v2026.8.1-beta.2` breaks subagent spawning with certain thinking-enabled models.
- **[#123273: Image attachments fail for named agents](https://github.com/openclaw/openclaw/issues/123273)** — A regression where non-default agents cannot process inbound image attachments.
- **[#114211: Matrix room agent loops](https://github.com/openclaw/openclaw/issues/114211)** — Agents can enter a self-sustaining loop involving no-reply reasoning and stale session replay.
- **[#112248: Codex plugin fails to register](https://github.com/openclaw/openclaw/issues/112248)** — A startup failure for the Codex plugin that makes all `/codex` commands silently no-op.

Many of these issues have linked open PRs, indicating active remediation efforts. The high concentration of issues related to **session-state, data-loss, and message-loss** suggests that reliability in these areas is the project's greatest current stability challenge.

---

## 6. Feature Requests & Roadmap Signals
Active feature requests point toward a roadmap focused on **enhanced memory, model flexibility, and a richer agent experience**:

- **Multi-Slot Memory Architecture** ([#60572](https://github.com/openclaw/openclaw/issues/60572)) — Growing interest (👍: 3) in supporting multiple memory providers simultaneously for different purposes. This suggests OpenClaw's memory system is becoming a key differentiator and area of investment.
- **Anthropic Advisor Tool Support** ([#63930](https://github.com/openclaw/openclaw/issues/63930)) — Users are requesting support for Anthropic's new server-side tool, indicating a desire to leverage emerging model capabilities.
- **Reasoning Stream** ([#42276](https://github.com/openclaw/openclaw/issues/42276)) — A request for a visible, overwrite-in-place reasoning stream during generation, similar to other AI products. This is a UX/engagement feature likely to be considered for a future release.
- **Fallback Model Chain for Compaction** ([#56781](https://github.com/openclaw/openclaw/issues/56781)) — Users want a fallback model for critical background tasks like context compaction to prevent session failure when the primary model is unavailable.
- **Graceful Sub-Agent Timeout** ([#6625](https://github.com/openclaw/openclaw/issues/6625)) — A proposal to inject a pre-timeout warning message to sub-agents, allowing them to save progress before being killed. This directly addresses the data-loss concerns highlighted in #44925.

These requests, particularly around memory and sub-agent reliability, are likely candidates for future versions as they directly address major community pain points.

---

## 7. User Feedback Summary
User feedback is a mix of **frustration over reliability** and **enthusiasm for the project's potential**.

- **Frustration:** The most significant pain points revolve around **silent data loss** (#44925, #40001), **unexpected failures** (#38327, #108435), and **cryptic errors** (#58957). Users are also frustrated by a lack of control, such as the inability to force visible replies on DM channels ([#119401](https://github.com/openclaw/openclaw/issues/119401)) or the poor onboarding experience for essential memory features ([#16670](https://github.com/openclaw/openclaw/issues/16670)).
- **Feature Needs:** There is a strong desire for more robust file handling (append mode), better sub-agent lifecycle management, and more transparent reasonings.
- **Satisfaction:** The existence of an observational issue like [#77598](https://github.com/openclaw/openclaw/issues/77598) and detailed, high-quality bug reports suggests a highly engaged and technical user base that is invested in the project's success. The rapid pace of PRs and fixes from maintainers indicates a responsive team, which likely contributes to overall user satisfaction despite the bugs.

Overall, users feel the project is powerful but are demanding higher stability and reliability, particularly around state management and data integrity.

---

## 8. Backlog Watch
Several critical issues have been languishing for weeks or months without maintainer action, which is a concern given their severity:

- **[#70903: Persistent provider cooldown blocks users (P0)](https://github.com/openclaw/openclaw/issues/70903)** — **Created 2026-04-24.** This release-blocking bug leaves users locked out for hours after a billing recovery. It is marked `stale` and `clawsweeper-recovery-stuck`, and has been open for nearly 4 months with no fix PR. **This needs immediate attention.**
- **[#16670: Onboarding Wizard should include Memory setup](https://github.com/openclaw/openclaw/issues/16670)** — **Created 2026-02-15.** A significant UX issue that has been open for 6 months. It's marked for maintainer review and product decision, but the lack of progress on such a core feature is notable.
- **[#86612: Docker gateway restart loop (P1)](https://github.com/openclaw/openclaw/issues/86612)** — **Created 2026-05-25.** A crash-loop bug persists for nearly 3 months without a clear fix PR.
- **[#56217: Secret provider crash-loop exhausts rate limits (P1)](https://github.com/openclaw/openclaw/issues/56217)** — **Created 2026-03-28.** This bug can cause a total outage of the 1Password secret provider. Despite being open for months, it remains unresolved.

These long-standing issues, particularly the P0 cooldown bug and the Docker crash-loop, represent a growing risk to user trust and require prioritization from the maintainers.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-08-20

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source landscape is characterized by intense development activity across multiple projects targeting overlapping use cases—from CLI-first agent runners to desktop applications with WebUI dashboards. The ecosystem is bifurcating into two camps: heavyweight, feature-rich platforms (OpenClaw, Hermes Agent, CoPaw, IronClaw) that aim to be the universal agent runtime, and lightweight, focused tools (PicoClaw, NullClaw, TinyClaw, ZeptoClaw) that prioritize simplicity and specific channel integrations. A dominant cross-cutting theme is reliability: across all projects, the most severe issues and user feedback center on data loss, session state integrity, and silent failures—not feature gaps. Security hardening (credential leaks, vault authentication, file-operation safety) is emerging as a critical differentiator. The ecosystem is maturing from "demonstration" to "production trust," with maintainers actively burning down stale backlogs while simultaneously shipping architectural improvements.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases (24h) | Merge/Close Ratio | Health Score* |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 0 (beta validation ongoing) | 80 PRs, 35 issues closed | ⭐⭐⭐⭐ (High activity, P0 backlog risk) |
| **NanoBot** | — | 23 | 0 | 8 PRs merged/closed | ⭐⭐⭐⭐ (Healthy, p0 PR conflict) |
| **Hermes Agent** | — | 7 (merged/closed) | 0 | 7 PRs merged | ⭐⭐⭐ (Windows/update instability) |
| **PicoClaw** | 1 issue closed | 5 | 0 | 2 PRs merged/closed | ⭐⭐⭐⭐ (Steady, low bug count) |
| **NanoClaw** | 3 new issues | 33 | 0 | 24 PRs merged/closed | ⭐⭐⭐⭐⭐ (High velocity, strong merge rate) |
| **NullClaw** | 0 | 1 open PR | 0 | 0 | ⭐⭐⭐⭐ (Quiet, stable) |
| **IronClaw** | 15 | 38 | ✅ **1.3.0** | 18 PRs merged/closed | ⭐⭐⭐⭐⭐ (Stable release + high activity) |
| **LobsterAI** | 6 | 8 (all closed) | 0 | 8 PRs merged | ⭐⭐⭐ (Stale issues, critical bugs open) |
| **TinyClaw** | 0 | 0 | 0 | — | ⭐⭐⭐ (No activity) |
| **Moltis** | 3 closed | 9 (4 merged) | ✅ **20260818.10** | 4 PRs merged | ⭐⭐⭐⭐ (Rapid fixes, security focus) |
| **CoPaw** | 50 | 46 | 0 | 16 PRs merged/closed | ⭐⭐⭐⭐ (Backlog clearing, critical concern) |
| **ZeptoClaw** | 0 | 0 | 0 | — | ⭐⭐⭐ (No activity) |
| **ZeroClaw** | 43 | 50 | 0 | 2 PRs merged | ⭐⭐ (Review bottleneck, P0 bug open) |

*\*Health score is a qualitative composite of activity level, responsiveness, bug severity, and momentum based on today's data.*

---

## 3. OpenClaw's Position

**Advantages:**
- **Scale of community:** With 500 issues/PRs updated daily, OpenClaw has the largest community in the ecosystem by a wide margin—roughly 10-15× the activity of mid-tier projects (NanoClaw, CoPaw) and 100× smaller ones (NullClaw, ZeptoClaw).
- **Momentum:** 80 PRs merged/closed in 24h demonstrates high maintainer throughput and a strong contributor pipeline.
- **Ecosystem gravity:** As the "core reference," OpenClaw benefits from network effects—other projects (PicoClaw, NanoClaw, NullClaw) implicitly position themselves against or build on OpenClaw's patterns.

**Technical approach differences:**
- **Channel breadth:** OpenClaw supports a vast array of messaging channels (Matrix, Telegram, Discord, Slack, etc.) with first-class support, whereas peers like IronClaw focus on web-first UX and CoPaw emphasizes local model deployment.
- **State architecture:** OpenClaw's shared SQLite state database is powerful but a source of P0 issues (e.g., #123327 WAL corruption). Competitors are increasingly moving toward per-agent or runtime-owned session models (ZeroClaw RFC #9487, NanoClaw mailbox seam #3349) to avoid these failure modes.

**Community size comparison:**
| Metric | OpenClaw | Nearest Competitor (CoPaw) |
|---|---|---|
| Daily issue+PR volume | 1,000 | 96 |
| Daily merges/closes | ~115 | ~16 |
| Open issue count | 465 | ~4 active (backlog clearing) |

**Weakness to watch:** The sheer volume has created a scrutiny problem—P0 data-integrity bugs (file tools stripping '@', subagent completion loss) are more visible and damaging to trust. Competitors with smaller user bases can fix issues before they scale.

---

## 4. Shared Technical Focus Areas

The following requirements emerged independently across multiple projects, indicating ecosystem-wide gaps:

| Focus Area | Projects | Specific Community Needs |
|---|---|---|
| **Session/state integrity** | OpenClaw, Hermes Agent, NanoBot, CoPaw, ZeroClaw | Subagent completion loss (#44925), routed-agent memory loss (#3316), stale data overwrites (#5271), task disappearance after channel switch (#2723), runtime-owned sessions RFC |
| **Model fallback chains** | OpenClaw, PicoClaw, CoPaw | Configurable fallback model chains for compaction (#56781), automatic model failover on API errors (#2301/#2089), default fallback chain workflow (#3200) |
| **File operation safety** | OpenClaw, CoPaw, ZeroClaw | Write tool append mode (#40001), file rollback/undo (#2590), agent-facing config authoring with approval (#9828), file tools stripping '@' (#119270) |
| **Setup/installation reliability** | NanoBot, Hermes Agent, NanoClaw, LobsterAI, CoPaw | Docker permission errors (#5444), update destroys install (#83529/#83846), Node 26 incompatibility (#3359), stale `__main__.py` overwrite (#1582), antivirus interference (#6847) |
| **Windows parity** | Hermes Agent, ZeroClaw, CoPaw | BSOD-causing patch (#89614), 74 test failures (#7462), BOM encoding startup failure (#3177) |
| **Security hardening** | OpenClaw, Moltis, ZeroClaw, IronClaw | Vault unlock auth (CWE-306), credential fragment logging (#9976), install policy review (#120900), capability-based permissions |
| **Interactive UX polish** | OpenClaw, NanoBot, LobsterAI, CoPaw | Reasoning stream display (#42276), IM slash commands (#1573), follow-up suggestions (#5408), `/approve` as buttons (#2301) |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architecture Signature |
|---|---|---|---|
| **OpenClaw** | Universal agent runtime | Power users, developers, multi-channel operators | CLI-first + fleet management, massive channel matrix, shared SQLite state |
| **NanoBot** | WebUI-assisted agent with skill system | Hobbyists, Docker users | Lightweight Python, skill frontmatter, paid MCP integration exploring |
| **Hermes Agent** | Desktop-first agent with multi-profile | Desktop users, macOS/Windows | Desktop app + web dashboard, bot chat rooms, update-orchestrated delivery |
| **PicoClaw** | Lightweight CLI agent for messaging | Telegram/LINE users, embedded | Small footprint, shell completion focus, configurable fallback chains |
| **NanoClaw** | Multi-channel (Slack/Dial) agent | Startup teams, collaboration | Slack-native agents flow, mailbox registry, tiered slack features |
| **IronClaw** | CI/CD-grade agent platform | Enterprise developers | Durable notifications, sandboxing (persistent per-user), capability normalization |
| **LobsterAI** | Chinese-market IM assistant | NetEase ecosystem users | IM channel focus (DingTalk/Feishu/QQ/WeChat), DESKTOP input box |
| **Moltis** | WhatsApp/Apple-themed assistant | Apple ecosystem users | Apple Container backend, channel-specific polish (WhatsApp push names) |
| **CoPaw** | Local model + WebUI assistant | Local LLM enthusiasts, Chinese market | Local model cap (9B), browser_use, multi-user Hub (in progress) |
| **ZeroClaw** | Developer-focused agent core | Rust-savvy developers | Rust core, WASM plugin architecture (RFC), extensible engine |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly iterating (high velocity, active maintenance):**
- **OpenClaw:** Daily burn-down of 100+ items, but P0 issues accumulate due to scale.
- **NanoClaw:** 24 PRs merged/closed in 24h with core-team label—excellent merge discipline.
- **IronClaw:** Shipped stable 1.3.0 with clear roadmap (v1.4.0 epics), high maintainer engagement.
- **CoPaw:** Massive backlog clearing (46 issues closed), 16 PRs merged, but critical reliability questions (directory deletion) loom.

**Tier 2 — Healthy development (steady pace, periodic releases):**
- **NanoBot:** 8 PRs merged, focused on bug fixes and UX; p0 PR conflict needs attention.
- **PicoClaw:** Low volume but clean—1 bug fixed, 2 PRs merged, no new issues filed.
- **Moltis:** Rapid release cadence (latest build 20260818.10), security-focused fixes.
- **Hermes Agent:** Merging PRs, but Windows and update-flow instability damage user trust.

**Tier 3 — Stabilizing / maintenance mode:**
- **LobsterAI:** Merging stale PRs but critical bugs (silent no-op, same-response) open for 4+ months.
- **NullClaw:** Quiet; 1 PR pending review, no issues. Healthy but dormant.
- **ZeroClaw:** High contributor activity (50 PRs) but low merge rate (2)—review bottleneck. Architectural RFC-heavy phase, likely pre-productive.

**Tier 4 — Stalled (no activity):**
- **TinyClaw, ZeptoClaw:** Zero activity for 24h+.

---

## 7. Trend Signals

**1. Reliability is the new battleground.** Across every project with a significant user base, the top issues are silent data loss, session state corruption, and unexpected freezes—not missing features. Users are demanding auditability: error messages, recovery paths, and transactional file operations. Projects that solve the "quiet failure" problem (e.g., IronClaw's notification inbox, ZeroClaw's SOP output-schema rejection fix) will earn disproportionate trust.

**2. Model fallback is becoming table stakes.** With API outages and rate limits being the #1 external dependency pain, users expect automatic failover. OpenClaw, PicoClaw, and CoPaw all have active requests or features in flight—this is no longer a "nice-to-have."

**3. Windows support is a trust gap.** Hermes Agent (BSOD), ZeroClaw (74 test failures), and CoPaw (BOM startup issue) all suffer from Windows-specific instability. The Windows desktop user base is vocal and dollar-concentrated—fixing this is a high-ROI competitive lever.

**4. Security introspection is increasing.** From Moltis's vault auth fix to ZeroClaw's credential logging bug and OpenClaw's install policy review, security is shifting from perimeter concerns to internal data-handling hygiene. Expect more work on least-privilege agent permissions (ZeroClaw's per-agent ownership scoping, IronClaw's capability normalization).

**5. Self-hosted, multi-user architectures are emerging.** IronClaw (persistent per-user sandboxes), CoPaw (self-hosted Hub), and ZeroClaw (runtime-owned sessions) are all moving toward isolated, stateful execution environments—signaling a shift from "agent as process" to "agent as service" with tenant separation.

**6. Contributors want structured output and CI-readiness.** The merge of JSONL event output (Hermes Agent) and the demand for OpenAI-compatible endpoints (ZeroClaw) indicate agents are being integrated into automated pipelines, not just interactive chat.

---

## Recommendation Summary

For technical decision-makers evaluating this ecosystem:
- **Choose OpenClaw** if you need maximum channel breadth and accept the stability trade-offs.
- **Choose IronClaw or CoPaw** if you prioritize web UX, sandboxing, and are deploying to a team.
- **Watch ZeroClaw** for architectural innovation (WASM plugins) but wait for the review bottleneck to clear.
- **Avoid Hermes Agent for Windows deployments** until the update/OS-stability issues are resolved.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Based on the GitHub data for NanoBot (HKUDS/nanobot) on 2026-08-20, here is the project digest:

---

## NanoBot Project Digest — 2026-08-20

### 1. Today's Overview
NanoBot is experiencing a high-velocity development cycle, with 23 pull requests updated in the last 24 hours and 8 PRs merged or closed. The project is in a healthy state with active community contributions and maintainer engagement. The focus areas today are clear: fixing OAuth and proxy configuration issues in Docker, improving memory consolidation and the "Dream" feature's reliability, and enhancing the WebUI and TUI user experience. While there are several open PRs with merge conflicts that will need attention, the overall trend is strongly towards stability and feature refinement.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Project Progress
Eight pull requests were merged or closed today, showcasing significant progress across the codebase:
- **TUI Enhancement:** PR #5443 exposed the existing `/exit` command in the TUI slash-command menu, improving discoverability for users.
- **Performance and Stability:** PR #5440 optimized local memory consolidation by reusing the conversation prefix, and PR #5438 fixed a WebUI bug to ensure the process returns promptly after a Ctrl-C.
- **Feature Landing:** PR #4527, a long-awaited feature request, was merged, adding a built-in `ask_clarification` tool that allows the agent to ask the user focused questions during a task. PR #4282 was also closed, adding file management features to the settings view to let users browse and modify generated files from the WebUI.
- **Cross-Platform Fixes:** PR #5341 fixed the weather workflow skill to be Windows-safe by avoiding the `Invoke-WebRequest` alias for `curl`.

### 4. Community Hot Topics
- **[Issue #5425: Support legacy `socks://` proxy URLs](https://github.com/HKUDS/nanobot/issues/5425)** — This is a bug report about requests failing when a provider config or environment uses a `socks://` alias. A corresponding fix, [PR #5439](https://github.com/HKUDS/nanobot/pull/5439), has been opened but intentionally only supports the standard `socks5://` scheme, which may not fully satisfy the reporter's needs.
- **[PR #4853: feat(tools): add nano_timer core tool](https://github.com/HKUDS/nanobot/pull/4853)** — This long-running PR aims to add a dependency-free tool for getting UTC time, local time, and calendar fields. It is marked with `priority: p1` and has a merge conflict, suggesting it is a desired feature that needs maintainer help to land.

### 5. Bugs & Stability
Several bugs were reported and addressed today, ranked by severity:
- **High: OAuth Login Failures in Docker (Issue #5444, PR #5445, PR #5446)** — Users were unable to log in to OpenAI via OAuth in Docker due to permission issues with the OAuth token storage path. Two parallel fixes are being developed: [PR #5445](https://github.com/HKUDS/nanobot/pull/5445) to persist OAuth client data in Docker, and [PR #5446](https://github.com/HKUDS/nanobot/pull/5446) to route Codex OAuth storage through nanobot's data dir.
- **High: Dream Memory Cursor Blocking (Issue #5441, PR #5442)** — A critical bug was reported where a recovered tool error in a "Dream" run would permanently block the memory cursor, causing edits to be duplicated. A fix ([PR #5442](https://github.com/HKUDS/nanobot/pull/5442)) has been submitted to advance the cursor when errors are recovered and to report why a run did not complete.
- **Medium: Background Task Failures (PR #5431)** — A fix was opened to properly report and log exceptions from background tasks, instead of silently swallowing them.
- **Medium: Stale Session Data Overwrites (PR #5271)** — This `priority: p0` PR addresses a critical issue where stale background task saves could overwrite new session data after a `/new` command, preventing data loss.

### 6. Feature Requests & Roadmap Signals
- **Paid Security-Scan MCP Integration ([Issue #5447](https://github.com/HKUDS/nanobot/issues/5447))** — A user is proposing to build an integration for nanobot with a Solana x402 micropayment security scanner, indicating a demand for monetized or paid MCP services in the AI agent ecosystem.
- **Manual-Only Skill Invocation ([PR #5405](https://github.com/HKUDS/nanobot/pull/5405))** — The project is advancing support for `disable-model-invocation: true` in skill frontmatter, a important feature for skills with side effects (e.g., deployment) that should only be run by the user.
- **WebUI Follow-up Suggestions ([PR #5408](https://github.com/HKUDS/nanobot/pull/5408))** — A feature to generate conversational follow-up suggestions after successful WebUI turns has been proposed, aiming to improve user interaction flow.

### 7. User Feedback Summary
- **Pain Point: Docker Permission Issues** — Multiple users (Issues #5444, PRs #5445, #5446) are encountering permission errors when trying to log in via OAuth, specifically because the container drops to a non-root user and cannot write to the default platform directories. This is a clear usability hurdle for Docker users.
- **Pain Point: Configuration Friction** — The bug report on legacy `socks://` proxies (Issue #5425) suggests that users have existing configurations that do not work with the current standard, requiring a workaround or code change.
- **Satisfaction Signal:** The volume of feature contributions (follow-up suggestions, file management, nano_timer) indicates a highly engaged community that is actively building on the tool. The long-awaited `ask_clarification` tool (#4527) being merged likely brings satisfaction to users who wanted more interactive control.

### 8. Backlog Watch
- **[PR #5271: fix(session): prevent stale background task saves from overwriting session data](https://github.com/HKUDS/nanobot/pull/5271)** — This is labeled `priority: p0` and has a merge conflict. It addresses a severe data-loss bug and has been open since August 6th without being merged, needing immediate maintainer attention.
- **[PR #5403: fix(memory): use API-reported prompt tokens to trigger consolidation](https://github.com/HKUDS/nanobot/pull/5403)** — Labeled `priority: p1`, this PR fixes a critical issue where token consolidation never triggers, and has been open since August 16th with a conflict. This is essential for long-running conversations.
- **[PR #4853: feat(tools): add nano_timer core tool](https://github.com/HKUDS/nanobot/pull/4853)** — As mentioned, this `priority: p1` feature has been open for over a month and has a conflict, indicating it's a wanted feature that hasn't received enough maintainer help to land.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Based on the provided GitHub data for Hermes Agent (github.com/nousresearch/hermes-agent, dated 2026-08-20), here is the structured project digest.

---

# Hermes Agent Project Digest (2026-08-20)

## 1. Today's Overview
Hermes Agent is experiencing a period of high activity and notable instability. While the project has seen a steady stream of pull requests targeting bugs and regressions, the number of open, critical, and Windows-specific issues is a significant red flag for reliability. The most severe issue involves a patch that can trigger Windows Blue Screens of Death (BSODs), while other high-priority bugs involve the update mechanism potentially destroying the installation. A large volume of issues are being filed by the community, with maintainers actively closing duplicates and older bugs, but the influx of new `P2` issues suggests the latest release may have introduced regressions. The project is also seeing meta-issues and feature campaigns for major overhauls, indicating active architectural evolution alongside immediate firefighting.

## 2. Releases
No new releases were published in the last 24 hours. The latest known version mentioned in issues is **Hermes Agent v0.20.0 (2026.8.3)**.

## 3. Project Progress
Seven PRs were merged or closed in the last 24 hours, focusing primarily on bug fixes and maintenance:

- **[fix(cli): bare /hatch no longer freezes the composer with an invisible prompt (#90409)](https://github.com/NousResearch/hermes-agent/pull/90409)** (Merged): Fixes a critical UX bug where typing `/hatch` would cause the CLI to hang silently.
- **[fix(title): honor reasoning_effort so thinking can be disabled on title generation (#90064)](https://github.com/NousResearch/hermes-agent/pull/90064)** (Merged): Fixes an issue where DeepSeek models would return empty titles because they were thinking instead of generating the title.
- **[fix(title): retry without response_format when upstream rejects it (#90063)](https://github.com/NousResearch/hermes-agent/pull/90063)** (Merged): Improves robustness of title generation against providers that reject structured output requests.
- **[fix(desktop): opening a Bot Chat wakes reliably instead of hanging, stranding, or emptying Sessions (#90405)](https://github.com/NousResearch/hermes-agent/pull/90405)** (Merged): Resolves a merge conflict to address three separate bugs that prevented "Bot Chat" from opening reliably.
- **[fmt(js): `npm run fix` auto-fix (#90408)](https://github.com/NousResearch/hermes-agent/pull/90408)** (Merged): An automated formatting and linting fix.
- **[Inspired by Muse Code: CI-ready JSONL event output for one-shot runs (#90411)](https://github.com/NousResearch/hermes-agent/pull/90411)** (Merged): A new feature to provide structured, machine-readable output from one-shot CLI runs.

## 4. Community Hot Topics
The most active discussions highlight major pain points and community-led campaigns.

- **[Issue #66616: Skills index is stale or degraded](https://github.com/NousResearch/hermes-agent/issues/66616)** (60 comments): This automated freshness probe has been failing for over a month, indicating a potentially broken CI/CD process for the Skills Hub documentation.
- **[Issue #84834: Webhook Feature Package — graph-gated repair (meta-issue)](https://github.com/NousResearch/hermes-agent/issues/84834)** (19 comments): A community member has organized a massive feature package to overhaul the entire webhook surface. This signals a strong interest in improving webhook reliability and features.
- **[Issue #83846: ZIP fallback deletes the built desktop app and never rebuilds it](https://github.com/NousResearch/hermes-agent/issues/83846)** (12 comments, 1 👍): A high-severity Windows bug where the updater silently deletes the desktop app. This is a major trust issue for users on that platform.
- **[Issue #79564: Discord Feature Parity & Alignment Campaign (API v10)](https://github.com/NousResearch/hermes-agent/issues/79564)** (8 comments): Another meta-issue from the same community member, campaigning to bring the Discord integration to full parity with the official API.

## 5. Bugs & Stability
Multiple critical and high-priority bugs were reported or updated, with several concentrated on Windows and the update process.

- **Critical (P1):**
    - **[Issue #89614: [Windows] Hermes kills svchost.exe via stale-PID taskkill → repeated blue screens](https://github.com/NousResearch/hermes-agent/issues/89614)**: This is the most severe issue, with a patch causing potential OS instability. **No fix PR is linked.**
    - **[Issue #83846: Update: ZIP fallback deletes the built desktop app and never rebuilds it](https://github.com/NousResearch/hermes-agent/issues/83846)**: Severely breaks the desktop experience on Windows. **No fix PR is linked.**
    - **[Issue #83529: [Bug]: hermes update - destroys hermes](https://github.com/NousResearch/hermes-agent/issues/83529)**: The `update` command is destroying the installation on Debian. **No fix PR is linked.**
- **High (P2):**
    - **[Issue #90299: False-positive "TERMINAL_CWD" deprecation warning on every startup](https://github.com/NousResearch/hermes-agent/issues/90299)**: A confusing and noisy warning that is not actually true.
    - **[Issue #90410: Multiplexed gateway: routed profile loses conversation history every turn](https://github.com/NousResearch/hermes-agent/issues/90410)**: A session-state bug causing loss of memory, a core functionality failure.
    - **[Issue #90159: hermes update installs mcp 2.0.0 over the declared pin](https://github.com/NousResearch/hermes-agent/issues/90159)**: The update process is breaking MCP compatibility by installing an unsupported library version.
    - **[Issue #84064: `hermes config set/unset` breaks on provider keys containing a literal dot](https://github.com/NousResearch/hermes-agent/issues/84064)**: A data-corruption bug in the CLI configuration tool.
- **Fix PRs in flight:** A surprisingly high number of open PRs are attempting to fix other bugs, including issues with **Feishu configuration (#61441)**, **title generation (#85424)**, **Mattermost media handling (#90407)**, and **gateway restart leaving stale processes (#90406)**.

## 6. Feature Requests & Roadmap Signals
Users are requesting several notable features, many of which involve expanding the desktop app's role and improving power-user workflows.

- **Bot Mode everywhere:** A request to **expose Bot Mode group chat rooms in the web dashboard** ([Issue #89995](https://github.com/NousResearch/hermes-agent/issues/89995)) suggests that this popular desktop feature is expected to become a standard part of the platform.
- **Resource Management:** A call for a **resource-aware low-memory Windows execution profile** ([Issue #90007](https://github.com/NousResearch/hermes-agent/issues/90007)) indicates a need for better out-of-the-box performance on constrained hardware.
- **CI/CD and Automation:** The merged PR for **structured JSONL output** ([#90411](https://github.com/NousResearch/hermes-agent/pull/90411)) is a strong signal that users want to script and automate Hermes.
- **Security & Trust:** PRs like **[a plugin-scanner security skill (#89333)](https://github.com/NousResearch/hermes-agent/pull/89333)** and the **[architecture principle "Proof scope must equal mutation scope" (#90144)](https://github.com/NousResearch/hermes-agent/issues/90144)** show a community focus on making Hermes safer to use with untrusted code and models.

## 7. User Feedback Summary
User feedback in the last 24 hours paints a mixed but concerning picture of satisfaction.

- **High Dissatisfaction (Windows):** The most vocal and critical feedback concerns Windows. Issues around the desktop app being deleted after updates and the potential for OS crashes are causing significant distress and loss of trust.
- **Update/Upgrade Anxiety:** Multiple issues (`hermes update - destroys hermes`, `ZIP fallback deletes the app`, `update installs mcp 2.0.0`) create a clear pattern: users are afraid to run `hermes update` because it may break their working setup.
- **Confusing & Noisy Behavior:** Users are frustrated by false-positive warnings (like `TERMINAL_CWD`) and silent failures (like the MCP server breaking without leaving traces), making debugging difficult.
- **Positive Community Engagement:** Users (e.g., `andrexibiza`) are highly engaged, organizing complex feature campaigns and meta-issues, demonstrating a dedicated power-user base.

## 8. Backlog Watch
These issues and PRs have been waiting for maintainer attention for a while and represent significant potential value.

- **[Issue #63852: Native fallback-chain readiness check without full agent sessions](https://github.com/NousResearch/hermes-agent/issues/63852)** (Created: Jul 13): A useful quality-of-life feature request that has been open for over a month.
- **[PR #51152: feat(memory): core/extended tiering with [core] prefix](https://github.com/NousResearch/hermes-agent/pull/51152)** (Created: Jun 23): A long-running PR that proposes a major architectural change to the memory system, which could significantly reduce token costs. It's complex, but its long life without merge or close suggests it needs attention.
- **[PR #39429: fix: preserve named custom provider request_overrides in gateway](https://github.com/NousResearch/hermes-agent/pull/39429)** (Created: Jun 5): This PR sits in a "Draft" state and has been open for over two months, but fixes a critical bug for users with custom provider configurations. It may be waiting for a maintainer to take ownership.
- **[Issue #63852: Native fallback-chain readiness check](https://github.com/NousResearch/hermes-agent/issues/63852)** (Updated: Aug 19): This feature remains valuable but hasn't seen a PR associated with it.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-20

## 1. Today's Overview

PicoClaw shows modest activity today, with 5 pull requests updated in the last 24 hours and 1 issue closed. The project appears to be in a **steady-state maintenance phase**, with no new releases and a mix of feature work and bug fixes in flight. The core team is actively reviewing PRs (2 merged/closed, 3 still open for review), but notably **no issues were newly opened** — suggesting community usage may be plateauing. The most significant activity is around **Telegram integration improvements** (a closed feature PR) and **LINE channel configuration validation** (an open fix PR), indicating continued investment in multi-channel messaging support. The closure of a long-standing bug about banner output corrupting shell completions after 5 months is a positive signal for overall maturity.

## 2. Releases

No new releases were published in this 24-hour window. The most recent code is at commit `26f623e`, referenced in the bug report. Maintainers appear to be accumulating changes before tagging the next minor or patch release.

## 3. Project Progress

**Two PRs were merged/closed today:**

1. **[#3341 — feat(telegram): add interactive command UX and formatted ephemeral fallback](https://github.com/sipeed/picoclaw/pull/3341)** *(closed, by As-tsaqib)* — This is the most impactful change today. It significantly improves the Telegram command experience by removing CLI-style grammar requirements for commands like `/memory`, simplifying `/help` output to reduce verbosity, and adding a formatted ephemeral fallback when structured content is undeliverable. This directly addresses UX friction that plagued Telegram power users.

2. **[#3200 — feat(models): add configurable default fallback chain](https://github.com/sipeed/picoclaw/pull/3200)** *(closed, stale, by lc6464)* — This long-running PR (6+ weeks) finally closed. It adds a dedicated workflow on the Models page in the web UI to set a default model, add fallback models, reorder the chain, and persist the configuration through the backend API. This signals **model resilience** is becoming a first-class concern.

## 4. Community Hot Topics

The most actively discussed item is the **now-closed bug #1305**, which was the only issue updated today with 4 comments:

- **[#1305 — [BUG] new banner print to STDOUT, break completion flow](https://github.com/sipeed/picoclaw/issues/1305)**, by wyxloading — This 5-month-old bug about the CLI banner corrupting shell completion scripts finally closed. It received 4 comments and a fix was delivered (linked from PR #1008 which introduced the regression). The underlying need is clear: **PicoClaw users rely on shell completions for daily workflows, and any STDOUT pollution breaks their muscle-memory-based productivity.**

Also developing community interest (0 comments but open with substantial description):

- **[#3315 — Support topics in private bot chats](https://github.com/sipeed/picoclaw/pull/3315)** by genuss — Fixes Telegram topic support for private bot chats where `IsTopicMessage` (not `IsForum`) is the correct field. Shows Telegram's forum-mode is proliferating and PicoClaw needs to keep pace.

## 5. Bugs & Stability

Only one issue was active today, and it was resolved:

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Medium** | [#1305 — Banner breaks shell completion output](https://github.com/sipeed/picoclaw/issues/1305) | **CLOSED (fixed)** | Introduced by #1008, now resolved |

Additionally, an open PR targets a configuration bug:

- **[#3329 — fix(line): warn on inert webhook_host/webhook_port instead of seeding them](https://github.com/sipeed/picoclaw/pull/3329)** by ex-takashima — Points at #3328 (not in this dataset) and correctly identifies that `line.settings.webhook_host` and `webhook_port` are declared and env-bound but **never read anywhere**. The fix changes behavior from silently seeding dead config to warning the user. This is a subtle but important correctness fix — dead config misleads users into thinking LINE webhook customization works.

## 6. Feature Requests & Roadmap Signals

The following signal emerging from recent PRs indicates the roadmap direction:

1. **Configurable Model Fallback Chains** (#3200, now merged): Predictably in the **next release**, users will see a Web UI setting to define model failover logic, making workflows more resilient to provider outages. This was 6 weeks in the making, so it's clearly a priority.

2. **Interactive Telegram Commands** (#3341, now merged): Expect a **next minor release** featuring the improved TG UX — reduced cognitive load for `/memory` commands and cleaner `/help` output. Telegram channel users will see immediate quality-of-life improvements.

3. **Topic support in private TG chats** (#3315, open): Likely to be included in the same release as #3341 since both touch Telegram plumbing. If merged, it will resolve an edge case where forum-mode bots in private chats do not route messages correctly.

4. **LINE webhook validation** (#3329, open): This is a low-risk, high-clarity fix that will likely be squeezed into the next minor release. It prevents misconfiguration and sets an example for other channels to follow.

## 7. User Feedback Summary

**Pain points identified from today's data:**

- **Shell completion pollution** (issue #1305): A user's daily workflow was broken because the banner printed to STDOUT on every invocation, corrupting generated completion scripts. This caused obvious frustration when paired with `head`/`grep` pipelines. The fix restores expected behavior, but the 5-month lag between discovery and resolution indicates **completion scripts are under-tested in CI**.

- **Dead config fields** (PR #3329): Users who set `webhook_host`/`webhook_port` in LINE settings get a false sense of security — the values are bound to env but never used. The fix to warn instead of seed is the right call, but this represents a broader issue: **documentation suggests features exist that don't actually work**.

- **Telegram command complexity** (PR #3341): The current CLI-style grammar for commands suggests the team prioritized power over usability in Telegram channel. There is no explicit user comment, but the author's motivation ("reduce cognitive load") reflects common friction.

**Satisfaction indicators:**
- The fallback chain feature (#3200) was authored by a regular contributor and closed cleanly, indicating smooth feature development.
- No negative reactions or complaints in any of today's threads — the discourse remains professional and solution-oriented.

## 8. Backlog Watch

**Needs Maintainer Attention:**

1. **[#3316 — fix: routed-agent context management not respecting history/summarization/compression/bootstrap](https://github.com/sipeed/picoclaw/pull/3316)** — **Open since Aug 3, stale-tagged, 16 days no update.** This is a serious cognitive bug: when dispatch rules route an agent to a Discord channel, the agent has **no memory** and auto-compaction never fires. Memory is core to agent behavior — this deserves escalated review. Try to get this merged before the next release.

2. **[#3315 — Support topics in private bot chats](https://github.com/sipeed/picoclaw/pull/3315)** — Stale since Aug 3. Smaller scope than #3316, but if this one is fixed first, it will likely conflict with #3341's changes. Better to land it now while context is fresh.

3. **[#3329 — LINE webhook validation](https://github.com/sipeed/picoclaw/pull/3329)** — Open since Aug 11, 9 days without comments. This is a small, clean fix; likely just awaits a second reviewer. Low effort to close.

**Project health signal:** The stale-tag automation is clearly working, but 3 open PRs (including two memory/context bugs) waiting without comment suggests **maintainer bandwidth is tight** and could become a bottleneck for community contributions.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-20

## 1. Today's Overview

NanoClaw is in a high-velocity phase, with 33 PRs updated in the last 24 hours (24 merged/closed) and 3 new issues filed. The project's momentum is concentrated on the Slack channel architecture, with a significant push toward splitting the base Slack integration from the agents feature (PRs #3357, #3358). Setup reliability is also receiving heavy attention, with fixes landing for Node.js runtime compatibility and stored credential verification. Three issues remain open, all filed by the same reporter, flagging setup-time bugs and a stale SMS delivery status bug in the Dial channel. Overall, the project demonstrates strong maintainer activity and a healthy merge-to-open ratio (24:9) for PRs.

## 2. Releases

No new releases were published in the last 24 hours. The most recent release remains unavailable in this data window; the project appears to operate on a continuous-delivery cadence via trunk-based merges in the `core-team` label group.

## 3. Project Progress

Today's merged/closed PRs show a broad set of features and fixes advancing across multiple channels:

**Slack channel — major architectural split:**
- PR #3357 (closed): The `--slack-agents` setup flag now installs the full agents feature (child bot provisioning, a2a rooms, canvases, DM onboarding), while the default install yields the base Slack experience.
- PR #3358 (closed): The Slack payload is split along the same flag boundary — `/add-slack` now carries the base adapter, while `/slack-agent-flow` handles agents features and adapts to the async central DB.
- PRs #3342, #3339, #3340, #3341, #3344, #3345 (all closed): A flurry of robustness fixes around Slack invite handling (declining owner-absent channel invites), storing delivery instance info on pending approvals, requiring the `declineAndNotify` contract, and forwarding optional client metadata on provisioning requests.

**Other channels:**
- PR #3351 (closed): Telegram approved group connection picker (`/connect_group`) routed through the approval flow with a group-scoped welcome turn.
- PR #3352 (closed): Documentation for the Telegram flow.

**Telemetry & open PRs:**
- A Cursor Agent SDK payload (PR #3356) and `/add-cursor` setup skill (PR #3355) are open and core-team labeled, indicating an incoming new provider integration.
- PR #3349 (open) adds an agent mailbox seam and registry, a foundational piece likely to support multiple future providers.

## 4. Community Hot Topics

All three open issues and the highest-comment PRs converge on two themes: setup robustness and the Dial channel's delivery integrity.

**Setup-adjacent behavior (all issues filed by glifocat):**
- Issue #3359 — Node 26 passes the version check but better-sqlite3 11.10.0 cannot build against it, causing bootstrapping to fail. This is a sharp edge case where the lower-bound check in `check_node` is insufficient.
- Issue #3354 — Two setup bugs under non-login/headless SSH: 0-byte channel files left on failed `git show` copy and an OneCLI check running before the PATH fix.
- PR #3249, #3360: Both attempt to broaden Node runtime support; #3360 (upgrade to better-sqlite3 13.0.3, raise minimum to Node 22) is open and directly responds to the symptom seen in #3359.

**Dial channel delivery truthfulness:**
- Issue #3353 — The Dial adapter marks SMS as delivered when the carrier accepts it, but carrier-side rejection later leaves `delivered` status stale; no retry budget is touched and neither agent nor owner is notified. While PRs #3041 and #3050 (Dial adapter + setup picker) are still open, the core fix for delivery status integrity is not yet in flight.

## 5. Bugs & Stability

Ranked by severity:

1. **Node 26 incompatible with better-sqlite3 11.10.0 (Issue #3359)** — High: Fresh installs on current Homebrew Node fail at bootstrap. The upstream fix (PR #3360 proposing better-sqlite3 13.0.3 and Node 22 minimum) is open but not merged. **Fix in flight: Yes.**

2. **Stale SMS delivery status on carrier rejection (Issue #3353)** — Medium: Incorrect session state persist, retry budget untouched; impacts Dial users who rely on accurate delivery signals from the agent. **Fix in flight: No.**

3. **Setup leaks 0-byte files and runs pre-PATH checks under headless SSH (Issue #3354)** — Medium: The two bugs cause failed `git show` writes to leave empty files and OneCLI's check to run before the PATH fix. Both share the root cause of assuming an interactive shell. **Fix in flight: No (but PR #3249 covers an adjacent existing-Node scenario).**

Additionally, PR #3339 (closed) fixed a serious **credential verification hole**: a stored NanoClaw account sign-in that cannot be probed (returns `unreachable`) was previously treated as if it passed; it now fails closed.

## 6. Feature Requests & Roadmap Signals

The strongest signal is the ongoing **Slack agents architecture** — splitting the base experience from a full multi-agent feature set (PRs #3357/#3358) suggests the team is formalizing a tiered offering. The work on **`declineAndNotify` overrides** (#3361/#3362) adds a configurability seam that likely serves enterprise/custom-deployment use cases.

The **Cursor Agent SDK** work (PRs #3355/#3356, both open) signals a new provider integration beyond Slack/Dial, and the **agent mailbox seam** (#3349) indicates a central infrastructure piece being laid for inter-agent messaging.

The **Dial channel** feature (PRs #3041/#3050) is still open with no maintainer response visible in the data — if merged, it will need the #3353 delivery-status fix to be considered production-grade.

Looking forward, the next version is likely to include Node 22+ support (with #3360 merged), the Cursor provider, and the Agent Mailbox registry — all open and core-team labeled.

## 7. User Feedback Summary

The user experience signals are concentrated on setup friction. The reporter of all three issues (glifocat) tested on **clean machines (fresh mac via Homebrew, and a headless box)** and hit:

- Hard failure at bootstrap on a machine with Node 26 — a failure mode that the check tool should have caught in advance.
- Unrecoverable-looking partial setup state: 0-byte files left behind, and readiness probes that run before the PATH is fixed.
- Silent state corruption on the Dial channel: a message that was rejected by the carrier still shows as delivered, giving the owner a false sense of transmission.

Overall, satisfaction with the project's iterate speed is indirectly indicated by the large volume of core-team merged PRs and the immediate availability of docs for new features (e.g., #3352 for Telegram). The dissatisfaction is not with feature selection but with setup resilience on realistic environments.

## 8. Backlog Watch

The following items deserve maintainer attention:

- **PRs #3041 and #3050 (Dial channel + setup picker)** — Open since 2026-07-14, over a month, yet with no visible assistant assignment. If the Dial feature is still a priority, these need triage; otherwise, they should be closed or rebased.
- **PR #3025 (container output-token cap raise)** — Open since 2026-07-12 with a standard template and no further comments; simple and likely stale.
- **Issue #3353 (SMS delivery status)** — This is a correctness bug with user-visible impact; if the Dial adapter PRs are deferred, this should be fixed in the base adapter anyway, or explicitly parked with a comment.
- **Issue #3354 (headless setup bugs)** — Small fix surface, directly reproducible; pairing with PR #3249's approach would be a quick win for setup stability.

The project health is strong: the core-team label shows fast-turnaround on UX bugs, and the community-facing work (new channels) remains active. The main risks are in the long- running Dial PRs and the setup hardening across a growing matrix of Node versions.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for 2026-08-20.

---

# NullClaw Project Digest
**Date:** 2026-08-20

## 1. Today's Overview
NullClaw is currently in a **low-activity maintenance phase**. Over the last 24 hours, there were zero new issues created, zero closed issues, and no new releases published. The sole piece of activity was a single open Pull Request (#989) submitted to fix a documentation/display bug, indicating that while the core development pace has slowed, community contributors are still actively patching minor quality-of-life issues. The absence of new bug reports suggests the current build is stable for existing users, though the lack of releases means recent fixes will take time to reach the public. Overall, the project appears healthy but is currently operating in a "quiet" period regarding core feature development.

## 2. Releases
- **No new releases** were published in the past 24 hours.
- There are no changelogs, breaking changes, or migration notes to report for this period.

## 3. Project Progress
- **No PRs were merged or closed** in the last 24 hours.
- **Open PR #989** ([Link](https://github.com/nullclaw/nullclaw/pull/989)): Submitted by contributor `FaintFlower`, this PR restores the broken star history chart on the README. The fix replaces the GitHub-specific stargazer API (which has access restrictions) with a token-free alternative (`star-history.dera.page`). While this does not add a new feature, it advances the project’s documentation integrity and ensures the project’s public-facing repository accurately reflects its popularity metrics.

## 4. Community Hot Topics
- **PR #989: fix: restore broken star history chart** ([Link](https://github.com/nullclaw/nullclaw/pull/989))
  - **Status:** Only open item; currently has 0 comments and 0 👍 reactions.
  - **Analysis:** While activity is low, this PR highlights a broader community need: **reducing dependency on GitHub API rate limits for external tooling**. The author explicitly states the previous chart was broken due to API access restrictions. This indicates users rely on the project being self-contained and resilient to third-party API changes, suggesting a potential roadmap item to audit other dependencies for similar hidden breakages.

## 5. Bugs & Stability
- **No new bugs, crashes, or regressions were reported** in the last 24 hours.
- **Resolved/Addressed:** The only stability concern on the table is the **README star chart rendering bug** (low severity). While no official issue was filed for this, PR #989 addresses the visual breakage of the repository page. The fix is pending review and merge by the maintainers.

## 6. Feature Requests & Roadmap Signals
- **No explicit feature requests** were filed in the last 24 hours.
- **Predictive Signal:** The presence of PR #989 suggests that users value **maintainability and external integration robustness**. We predict the next minor release will likely focus on "plumbing" fixes—specifically updating outdated external links, replacing deprecated API calls, and general dependency housekeeping—rather than user-facing feature additions. This is a signal that the maintainers might prioritize "maintenance sprints" in the next version to keep the repo clean and accessible.

## 7. User Feedback Summary
- **Pain Points:** The primary implicit pain point raised is **broken documentation/visualization due to external API restrictions**. The fix in PR #989 indicates user frustration with charts that silently fail to load.
- **Use Cases:** The change suggests users actively view the repository metrics to gauge project health; the broken chart was impacting the credibility of the repo's front page.
- **Satisfaction:** The quick generation of a fix by a community member (rather than a maintainer) demonstrates a **high level of contributor engagement and technical competence**, though the lack of maintainer merge activity today leaves user satisfaction in a "pending" state on this issue.

## 8. Backlog Watch
- **No critical backlog items** are currently blocking the project.
- With **0 open issues** and **1 open PR**, there is no long-standing unanswered technical debt in the tracker. The only item requiring attention is PR #989, which has been waiting for review for at least 24 hours. **Recommendation:** Maintainers should prioritize reviewing and merging PR #989 to clear the queue and avoid accumulating unreviewed community contributions, which can discourage future external fixes.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Based on the GitHub data for IronClaw (github.com/nearai/ironclaw) for 2026-08-20, here is the project digest.

### 1. Today's Overview
IronClaw is in a high-velocity stabilization and expansion phase. The project shipped a stable release (`1.3.0`) and saw a significant influx of activity, with 38 PRs updated (18 merged/closed) and 15 issues updated. The focus is clearly on hardening the platform (CI stability, bug bashes) while making large architectural strides in sandboxing, notifications, and capability normalization. A major epic for persistent per-user sandboxes is underway, alongside active work on onboarding and design systems for the WebUI.

### 2. Releases
- **[ironclaw-v1.3.0](https://github.com/nearai/ironclaw/releases)** (2026-08-19): This is a stable promotion of `1.3.0-rc.2`, promising no production behavior changes. It includes upgrades and container fixes validated in the release candidate. Critically, it fixes an upgrade path bug where upgrades from 1.2 would crash-loop due to mishandling of the released extension `activation_state` field. This is a stable release, so no breaking changes are expected beyond the 1.2 -> 1.3 upgrade.

### 3. Project Progress
(Note: "Merged/Closed" PRs include those closed for reasons like supersession, but the dominant trend is progress.)

- **Notifications Inbox:** PR [#7697](https://github.com/nearai/ironclaw/pull/7697) was merged, establishing a durable, per-recipient notification inbox with typed contracts. The accompanying UI generalization, PR [#7698](https://github.com/nearai/ironclaw/pull/7698), is in progress.
- **Onboarding & Design System:** Phase 1 of the OOBE automation-tasks prototype ([#6994](https://github.com/nearai/ironclaw/pull/6994)) was closed, establishing the design and integration plan. The foundational steps for the Storybook and Design System epic ([#7750](https://github.com/nearai/ironclaw/pull/7750)) were also re-established.
- **Capability Normalization:** The capability-response-normalization stack made progress. Backend outcome processing was centralized in [#7686](https://github.com/nearai/ironclaw/pull/7686), and the WASM typed tool response work in [#7711](https://github.com/nearai/ironclaw/pull/7711) is pending.
- **Agent Turn Infrastructure:** Foundation for subagent activation was laid in [#7752](https://github.com/nearai/ironclaw/pull/7752), introducing `ActivationProvenance` and a new `activate()` primitive with no production behavior changes yet.
- **CI Reliability:** A major fix landed in [#7756](https://github.com/nearai/ironclaw/pull/7756) to bound all unbounded CI operations, specifically addressing timeouts caused by hanging `apt-get` commands.

### 4. Community Hot Topics
- **[Issue #7732: Epic: Persistent per-user sandbox with iron-proxy](https://github.com/nearai/ironclaw/issues/7732)**: This is the most discussed issue (7 comments), highlighting a critical architectural shift from per-command containers to persistent user sandboxes. The need is to improve performance, reliability, and statefulness for user shell usage. PR [#7751](https://github.com/nearai/ironclaw/pull/7751) is the first step in this effort.
- **[Issue #7603: Batch BeforeModel checkpoints](https://github.com/nearai/ironclaw/issues/7603)**: While closed, it had several comments and points to a significant performance optimization path (reducing per-turn DB writes), showing the community's focus on long-term efficiency and cost reduction.

### 5. Bugs & Stability
- **P1/High: UI Confusion** - **[Issue #7748](https://github.com/nearai/ironclaw/issues/7748)**: A user reported IronClaw "got confused and stopped working" without specific details. No fix PR exists yet.
- **P1/High: MCP Extension Install Failure** - **[Issue #7745](https://github.com/nearai/ironclaw/issues/7745)**: The Copilot MCP extension fails with `auth_required`, has duplicate catalog entries, and confusing token types. This is a direct onboarding blocker for a major feature. No fix PR yet.
- **P2/Medium: Sandbox Transport Denied** - **[Issue #5998](https://github.com/nearai/ironclaw/issues/5998)**: Reborn cannot connect to local MCP servers on-device due to transport restrictions. A fix is proposed in PR [#7757](https://github.com/nearai/ironclaw/pull/7757), which is currently open.
- **P3/Low: Cron Job UI Incomplete** - **[Issue #7744](https://github.com/nearai/ironclaw/issues/7744)**: The cron job management UI is missing edit and test/trigger controls, limiting user ability to manage automations. No fix PR yet.
- **CI Infrastructure** - The merge queue was previously timing out due to unbounded CI operations. This was addressed and fixed in PR [#7756](https://github.com/nearai/ironclaw/pull/7756).

### 6. Feature Requests & Roadmap Signals
- **Persistent User Sandbox (v1.4.0):** The epic [#7732](https://github.com/nearai/ironclaw/issues/7732) is clearly targeted for v1.4.0. Early work on persistent containers in PR [#7751](https://github.com/nearai/ironclaw/pull/7751) and the fix for local MCP transports in [#7757](https://github.com/nearai/ironclaw/pull/7757) point to a roadmap focused on local development and integration.
- **Durable Notifications:** The merge of the notification inbox backend ([#7697](https://github.com/nearai/ironclaw/pull/7697)) suggests a broader push towards a more robust and informative product surface that can handle complex approval and authentication flows.
- **Channel-First Onboarding (v1.4.0):** With the OOBE prototype design closed ([#6994](https://github.com/nearai/ironclaw/pull/6994)), the next version is likely to include a more guided and automated first-run experience.
- **Design System:** The epic [#7038](https://github.com/nearai/ironclaw/issues/7038) and the new PR [#7750](https://github.com/nearai/ironclaw/pull/7750) indicate significant upcoming work on the WebUI's look, feel, and component consistency.
- **Improved Automation Tooling:** The preflight work in PR [#7743](https://github.com/nearai/ironclaw/pull/7743) and Issue [#7742](https://github.com/nearai/ironclaw/issues/7742) suggests a roadmap focused on making automation creation more robust and less error-prone.

### 7. User Feedback Summary
- **Onboarding Friction:** A user reported the app "got confused" ([#7748](https://github.com/nearai/ironclaw/issues/7748)), indicating a crash or dead-end. The OOBE epic directly addresses the general "blank slate" feeling that makes it hard for new users to know how to proceed.
- **Installation/Config Hurdles:** The bug report on Copilot MCP extension installation ([#7745](https://github.com/nearai/ironclaw/issues/7745)) points to real user friction in getting third-party tools connected and authenticated. Similarly, the open issue about local MCP servers ([#5998](https://github.com/nearai/ironclaw/issues/5998)) highlights a missing use case for developers who want to run local tools.
- **Management Limitations:** The missing edit/test buttons in the cron job UI ([#7744](https://github.com/nearai/ironclaw/issues/7744)) show user desire for more control and interactivity in managing automations after creation.

### 8. Backlog Watch
- **[Issue #5998](https://github.com/nearai/ironclaw/issues/5998): Reborn has no transport for a local MCP server.** This issue has been open since 2026-07-11 (over a month) and is a significant usability gap for developers. While there is now a fix PR ([#7757](https://github.com/nearai/ironclaw/pull/7757)) from a new contributor, it will likely need core maintainer review and a full solution to the transport problem.

---

This digest is auto-generated from provided data and is intended as a decision-support summary, not a definitive source of truth. Please refer to the linked GitHub issues and PRs for the most accurate and detailed information.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date: 2026-08-20**

---

## 1. Today's Overview

LobsterAI shows moderate activity today with **6 open issues** and **8 merged/closed PRs** in the last 24 hours, and **0 new releases**. All 8 PRs were successfully merged/closed with no open PRs remaining, indicating a healthy merge cadence and responsive maintainers. Notably, 6 of the 8 merged PRs are marked as `[stale]` — they were opened on 2026-04-08 but only merged today (2026-08-19), suggesting a significant backlog cleanup occurred. The issues are largely `[stale]` as well (created 2026-04-08, untouched since), which may indicate either a resolution in PRs or a lack of maintainer triage. Overall, the project appears to be in a **maintenance and stability phase** rather than an active feature-development sprint, with today's merges focusing on installer fixes, bug fixes, and UX improvements.

---

## 2. Releases

**No new releases** were published in the last 24 hours. The most recent version referenced in issues is **2026.4.3** (April 2026 build). Users on this version are reporting several bugs (see Section 5), which suggests a newer patch release may be warranted soon given the volume of merged fixes today.

---

## 3. Project Progress

All 8 PRs merged/closed today, showcasing a cleanup of a **stale PR backlog** from April 2026. Key highlights:

| PR | Area | Summary |
|----|------|---------|
| [#2512](https://github.com/netease-youdao/LobsterAI/pull/2512) | Installer (Windows) | Hide banner for dictbind silent package; preserve behavior for other silent install paths |
| [#2511](https://github.com/netease-youdao/LobsterAI/pull/2511) | Installer (Windows) | Support silent upload-first web builds with SHA-256 integrity invariants |
| [#1570](https://github.com/netease-youdao/LobsterAI/pull/1570) | Scheduled Tasks | Fix: Editing a disabled task no longer re-enables it (was hardcoded to `true`) |
| [#1573](https://github.com/netease-youdao/LobsterAI/pull/1573) | IM Channels | New slash-command support: `/help`, `/status`, `/new`, `/compact` for Telegram/DingTalk/Feishu/Discord/QQ/WeChat |
| [#1576](https://github.com/netease-youdao/LobsterAI/pull/1576) | SSE Streaming | Fix race condition where old request's abort callback cleared new request's SSE listeners, causing silent data loss |
| [#1578](https://github.com/netease-youdao/LobsterAI/pull/1578) | Permission Modal | Added Bash syntax highlighting to permission approval modal for faster risk identification (e.g., `rm -rf`, `--force`) |
| [#1580](https://github.com/netease-youdao/LobsterAI/pull/1580) | Prompt Input | Image attachments now show 64×64 thumbnail previews instead of plain file icons |
| [#1582](https://github.com/netease-youdao/LobsterAI/pull/1582) | Setup (Windows) | Fix pip failure by detecting and overwriting stale `__main__.py` files from older installs |

**Notable feature advances:** IM slash commands and thumbnail previews are user-facing improvements that enhance daily usability.

---

## 4. Community Hot Topics

The most active issue by comment count:

**[Issue #1569](https://github.com/netease-youdao/LobsterAI/issues/1569) — "提问后不运行，也不显示任何信息" (5 comments)** — User reports that after asking a question, nothing runs and no information is displayed. This is the most-commented issue and represents a critical UX failure (silent no-op).

Other active issues (2 comments each): [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) (file upload not visible to model), [#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) (same response to any input).

**Underlying need analysis:** All three of these issues point to a common theme: **the model/agent is not properly receiving or processing user input (text or files)**, resulting in silent failures. Users are confused because there's no error message — the app appears to "hang" or ignore them. This suggests a systemic issue with how context (files, conversation state) is passed to the model, possibly related to the SSE race condition fixed in PR #1576.

---

## 5. Bugs & Stability

Three bugs reported today (all from April, still open), ranked by severity:

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **Critical** | [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | Query runs but nothing happens — no output, no error. Silent failure blocks all use. | No linked fix PR |
| 🔴 **Critical** | [#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) | Same response to any input in v2026.4.3 — model appears stuck/cached. Logs attached. | No linked fix PR |
| 🟠 **High** | [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) | Model cannot access uploaded files (regression from older versions) | No linked fix PR |
| 🟡 **Medium** | [#1551](https://github.com/netease-youdao/LobsterAI/issues/1551) | Network environment change causes gateway to restart repeatedly | No linked fix PR |
| 🟢 **Low** | [#1563](https://github.com/netease-youdao/LobsterAI/issues/1563) | Typo in traffic package service terms page | No linked fix PR |

**Important note:** The SSE race condition fixed in [#1576](https://github.com/netease-youdao/LobsterAI/pull/1576) may be the root cause of issues #1566 and #1569 (silent data loss). Users are encouraged to test the latest build to verify.

---

## 6. Feature Requests & Roadmap Signals

Two feature requests are active:

1. **[Issue #1567](https://github.com/netease-youdao/LobsterAI/issues/1567)** — **Input box shortcut action buttons**: Stop current conversation, compact context, and provide recovery commands (`/help`). This is a **strong signal** that users are hitting context-length and backend bugs that "brick" their session with no escape hatch. The IM slash-command feature merged in PR #1573 (which includes `/compact` and `/new`) may partially address this — and we may see these commands **surface in the desktop input box** in the next release.

2. **[Issue #1567 (part 2)](https://github.com/netease-youdao/LobsterAI/issues/1567)** — A `/help` command for recovery. With PR #1573 adding slash commands for IM, extending them to the desktop UI is a natural next step.

**Prediction:** The next release (likely 2026.5.x) will include desktop-side quick-action buttons or slash commands, building on PR #1573's infrastructure.

---

## 7. User Feedback Summary

- **Frustration with silent failures:** Users report the app "does nothing" after submitting queries (#1569) or returns identical responses regardless of input (#1566), with no error dialog. This is the #1 pain point.
- **File upload regression:** User duzhen1996 notes that file uploads worked in older versions (files dropped into project directory, model could search them) but broke in newer versions — model doesn't know files exist. This is a **regression**, which is particularly damaging to trust.
- **Lack of recovery options:** FreeSunny asks for force-stop/compact buttons as a safety valve, implying users feel "trapped" when the context gets too long or a bug occurs.
- **Network flakiness:** HsiYaTung reports gateway restarts when network changes (e.g., switching Wi-Fi), then recovers when network is restored. Somewhat niche but disruptive for mobile users.

Overall sentiment: **Frustrated** — users want reliability and visibility (error messages, recovery paths) more than new features.

---

## 8. Backlog Watch

The following issues are **stale (April 2026)** and still open, requiring maintainer attention:

| Issue | Age | Why It Matters |
|-------|-----|---------------|
| [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | 4+ months | Silent no-op on query; most-commented; critical usability |
| [#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) | 4+ months | Same-response bug; may be fixed by PR #1576 but needs verification |
| [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) | 4+ months | File upload regression; affects daily workflows |
| [#1551](https://github.com/netease-youdao/LobsterAI/issues/1551) | 4+ months | Gateway restart on network change; needs triage |
| [#1567](https://github.com/netease-youdao/LobsterAI/issues/1567) | 4+ months | Feature request for recovery controls; partially addressed by #1573 |

**Recommendation:** Given that 6 stale PRs were merged today, a similar cleanup pass on stale **issues** is warranted — either closing them as fixed (if PR #1576 addresses the root cause) or explicitly triaging with status updates to reduce user uncertainty.

---

*Digest generated 2026-08-20 from public GitHub data.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-20

## 1. Today's Overview

Moltis shows strong, sustained development velocity. Over the last 24 hours, the project saw 3 issues closed (all bug reports), 4 PRs merged, and 5 PRs currently open — indicating a healthy mix of bug-fixing and feature work. The release cadence continues at a rapid pace (latest build `20260818.10`), suggesting an active, well-maintained codebase. Notably, the maintainer team is aggressively addressing Apple Container backend issues and security vulnerabilities, reflecting a strong commitment to platform stability and user safety. The high volume of open PRs suggests a busy upcoming merge window.

## 2. Releases

- **`20260818.10`** (released 2026-08-18)
  No release notes were provided in this data set. Based on the closed PRs, this build likely includes fixes for Apple Container sandbox status parsing (#1214) and resource limits (#1215), plus GPT-5.6 model routing coverage (#1213). No breaking changes or migration notes were announced.

## 3. Project Progress

Four PRs were merged today:

- **[#1214] Fix Apple Container status parsing across versions** (by penso): Replaces fragile JSON substring matching with a typed status decoder, supporting both pre-1.x scalar values and 1.x nested `status.state`. This is shared across readiness checks, lifecycle inspection, and container listing — addressing root cause of #1185.
- **[#1215] Fix Apple Container sandbox resource limits** (by penso): Passes configured memory, CPU, and `pids_max` limits to Apple Container using native flags. Explicitly rejects fractional CPU quotas instead of silently weakening them — addressing #1188.
- **[#1212] Preserve Responses routing for explicit OpenAI endpoints** (by penso): Prevents regression where explicit configuration of the official OpenAI endpoint would switch to a less-capable routing path. Normalizes URL classification to keep reasoning + function tools working.
- **[#1213] Add GPT-5.6 Luna routing coverage** (by penso): Adds deterministic tests for Sol, Terra, and Luna in the reasoning-plus-tools test; keeps the live model-health list in sync and adds a credentialed streaming regression — addressing #1181.

**Trend:** The maintainer `penso` is leading a systematic stabilization campaign across the Apple Container backend and model routing layers.

## 4. Community Hot Topics

- **[Issue #1185] Apple Container 1.x sandbox starts but Moltis treats it as not running** — 3 comments, 0 reactions. The most-discussed issue this cycle. The root cause (status parsing across versions) was identified and fixed in PR #1214. This signals that Apple Container adoption is growing but version fragmentation is causing user friction.
- **[PR #1216] Require authentication for vault unlock and recovery** (by penso, open) — No comments yet but is the most security-critical item in flight. It patches CWE-306: unauthenticated remote brute-force on vault endpoints.

**Underlying need:** Users are increasingly bringing Apple Container/backend configurations and expecting them to "just work"; the team is responding with robust version-agnostic parsers. The vault auth PR indicates a community focus on self-hosted security posture.

## 5. Bugs & Stability

No new bugs were opened today — all three issues in the window were closed as fixed.

| Severity | Issue | Status | Fix PR |
|---|---|---|---|
| **Critical (Security)** | Vault unlock/recovery unauthenticated (CWE-306) — reported in #1177, fix in #1216 | Fix open | `#1216` |
| **High** | Apple Container sandbox running but Moltis "not running" | Fixed (today) | `#1214` |
| **High** | Apple Container resource limits not applied | Fixed (today) | `#1215` |
| **Medium** | GPT-5.6 Luna model errors | Fixed (today) | `#1213` |
| **Medium** | Heartbeat `active_hours` never takes effect (from #1205) | Fix open | `#1208` |

## 6. Feature Requests & Roadmap Signals

- **Configurable "untrusted turn" tool ceiling** ([PR #1219, open by vikng-dev]): Builds on #1170 but introduces a configurable ceiling for tool permissions in shared/proven direct-chat contexts. This restores flexibility for non-operator turns and makes policy layers 4/5 reachable — a move toward more granular, situation-aware tool control.
- **WhatsApp "push name" configurability** ([PR #1218, open]): Fixes hardcoded "Moltis" name appearing to non-contacts. This is a small UX quality-of-life change, but it reflects broader attention to channel-specific user identity.
- **WhatsApp reply-to-mention semantics** ([PR #1217, open]): Treats replies to the bot as addressing it, even in mention-only mode. This aligns with user expectations across messaging channels.
- **Heartbeat active hours** ([PR #1208, open]): Implements a documented-but-inert feature. Likely prompted by users wanting scheduled bots to stay quiet during non-business hours.

**Next-version prediction:** The three `vikng-dev` PRs (channel UX and tool policy) plus `penso`'s vault auth fix are likely candidates for the next release batch.

## 7. User Feedback Summary

- **Apple Container fragmentation is the #1 pain point:** Two of three closed bugs (and two fix PRs) focus on version differences between Apple Container 1.x and its predecessors. Users report functional discrepancies ("sandbox runs but not detected", "limits ignored").
- **Model routing fragility:** GPT-5.6 Luna failure caused user-visible breakage; the team responded quickly with routing tests to prevent regression.
- **WhatsApp identity confusion:** Hardcoded push name is confusing in group chats with other bots; the fix (#1218) responds to a clear usability complaint.
- **Security-conscious admin base:** The swift ecosystem response to the vault auth vulnerability (#1216) suggests active self-hosting users who care about hardened defaults.

Overall sentiment appears positive: reported bugs are being diagnosed and fixed fast, often within a few days.

## 8. Backlog Watch

- **[Issue #1177] (Vault Unlock/Recovery Auth bypass)** — Addressed by open PR #1216. This has been open for ~2 weeks (created around 2026-08-05, referenced in the PR). Needs maintainer review and merge as soon as possible; it is a disclosed CWE-306 vulnerability.
- **[PR #1208] (Heartbeat active hours)** — Open since 2026-08-17. The feature was documented but entirely non-functional; author `Lstarsky0` provides a clean fix. No comments or reviews from maintainers yet — worth a nudge.
- **[Issue #1205] (referenced by #1208)** — The originating bug report for heartbeat behavior; presumably closed via the PR once merged, but currently still open.

**Maintainer attention needed:** The vault auth PR (#1216) is the only blocker-level item; everything else appears healthy and actively triaged.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest
**Date:** 2026-08-20

---

## 1. Today's Overview

CoPaw shows **moderate-to-high activity** with 50 issues and 46 PRs updated in the last 24 hours. The bulk of issue activity (46 of 50) involves older items being closed, suggesting a **maintenance and backlog-clearing phase** rather than a surge of new reports. Only 4 issues remain open/active, indicating the maintainers are actively triaging and resolving community feedback. On the PR front, 30 remain open and 16 were merged/closed, signaling **healthy ongoing development** with several new features and bug fixes landing. Notably, there are **no new releases** this cycle, meaning recent fixes and features are still in the pipeline for the next version. Key development themes include **stream reliability, multi-user Hub support, security hardening, and tooling improvements**.

---

## 2. Releases

**No new releases** were published in the last 24 hours. The latest available version remains **QwenPaw Desktop 2.1.0** (referenced in recent bug reports). Users and maintainers are actively working toward the next release, with a substantial queue of merged PRs and fixes awaiting rollout.

---

## 3. Project Progress

16 PRs were merged or closed today. Notable highlights:

**Merged/Closed PRs (feature advancement):**

- **[PR #7151](https://github.com/agentscope-ai/QwenPaw/pull/7151)** — feat(console): add folder creation to directory browser. Improves the Files UI with a new folder creation flow.
- **[PR #7103](https://github.com/agentscope-ai/QwenPaw/pull/7103)** — test(integration): expanded integration test coverage for routing, channels, tools, MCP, and coding-project. Significant quality assurance investment.
- **[PR #7137](https://github.com/agentscope-ai/QwenPaw/pull/7137)** — fix(console): polish model selector styles. UI polish.
- **[PR #6986](https://github.com/agentscope-ai/QwenPaw/pull/6986)** — fix(sandbox): fix antivirus software blocking issues. Directly addresses **Issue #6847** where users reported CoPaw being killed by antivirus software.
- **[PR #6800](https://github.com/agentscope-ai/QwenPaw/pull/6800)** — feat(mailbox): intelligent email management assistant with real-time monitoring and access control. A significant new feature for email automation.

**Key open PRs under review (likely next version):**

- **[PR #7112](https://github.com/agentscope-ai/QwenPaw/pull/7112)** — feat(hub): self-hosted multi-user Hub with local and Docker runtimes. Major architectural feature for multi-tenant deployments.
- **[PR #7150](https://github.com/agentscope-ai/QwenPaw/pull/7150)** — fix: detect and recover from stalled LLM streams. Direct fix for **Issue #7102** (freeze >10 minutes).
- **[PR #7146](https://github.com/agentscope-ai/QwenPaw/pull/7146)** — fix(view_image): freeze remote images before persisting tool results. Security-focused fix.
- **[PR #6515](https://github.com/agentscope-ai/QwenPaw/pull/6515)** — feat(providers): add Volcengine Agent Plan & MiMo V2.5 providers.

---

## 4. Community Hot Topics

The most active issues reveal several core community pain points:

**1. [Issue #2884](https://github.com/agentscope-ai/QwenPaw/issues/2884) — "Home directory nearly wiped after installing CoPaw"** (27 comments, CLOSED)
**Severity: CRITICAL**. A user reported that after installing CoPaw on Ubuntu 22.04, their personal directory contents were almost completely deleted and the software itself was removed. This is the most active issue this period and raises serious safety concerns about file operations. The issue has been closed, which suggests it may have been resolved or investigated, but this remains a critical red flag for user trust.

**2. [Issue #2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) — "Suggestions for updates, /approve changes, model switching"** (10 comments, CLOSED)
This multi-point feature request asks for: one-click updates, `/approve` as buttons instead of commands, automatic model switching with a "tier leaderboard", built-in self-reflection/evolution features, cross-device session continuity (web → mobile), and additional model providers (Zhipu, Meituan-longc). The closing suggests these may have been partially addressed or otherwise handled.

**3. [Issue #2035](https://github.com/agentscope-ai/QwenPaw/issues/2035) — "Multi-agent bot binding and collaboration"** (10 comments, CLOSED)
Users want to bind different bots to different agents and enable multi-agent collaborative task completion across channels. Currently, each channel only supports a single bot.

**4. [Issue #7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) — "Freeze more than 10 minutes long"** (9 comments, OPEN)
A QwenPaw Desktop 2.1.0 user reports a freeze lasting over 10 minutes with no token generation, even with glm 5.3. The issue remains open, but **[PR #7150](https://github.com/agentscope-ai/QwenPaw/pull/7150)** directly addresses this with a "semantic stream watchdog" that detects and recovers from stalled LLM streams.

**5. [Issue #2723](https://github.com/agentscope-ai/QwenPaw/issues/2723) — "Task disappeared after switching channels"** (9 comments, CLOSED)
A user reported that switching to view channels causes ongoing tasks to vanish, including the user's request description and agent execution state.

---

## 5. Bugs & Stability

Bugs reported/updated today, ranked by severity:

| Severity | Issue | Description | Status | Fix PR? |
|----------|-------|-------------|--------|---------|
| 🔴 **Critical** | [#2884](https://github.com/agentscope-ai/QwenPaw/issues/2884) | Home directory content deleted after installation | CLOSED | In investigation |
| 🔴 **High** | [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) | Freeze >10 min with no token generation (glm 5.3) | OPEN | ✅ **[PR #7150](https://github.com/agentscope-ai/QwenPaw/pull/7150)** — stream watchdog |
| 🟡 **Medium** | [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) | Antivirus software kills QwenPaw process | CLOSED | ✅ **[PR #6986](https://github.com/agentscope-ai/QwenPaw/pull/6986)** — sandbox fix |
| 🟡 **Medium** | [#7034](https://github.com/agentscope-ai/QwenPaw/issues/7034) | `TypeError: 'async for' requires an object with __aiter__ method` in ReactAgent tool calls | CLOSED | In investigation |
| 🟡 **Medium** | [#7076](https://github.com/agentscope-ai/QwenPaw/issues/7076) | qwenpaw-creator: LLM model config 404 error (v2.1.0) | CLOSED | In investigation |
| 🟢 **Low** | [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) | Auto-compression (Scroll) not triggering memory summarization | CLOSED | In investigation |
| 🟢 **Low** | [#2663](https://github.com/agentscope-ai/QwenPaw/issues/2663) | Task interruption; UI language/theme resets to English/light after restart | CLOSED | — |
| 🟢 **Low** | [#2377](https://github.com/agentscope-ai/QwenPaw/issues/2377) | Task auto-interruption after processing a few files (1500-file batch) | CLOSED | — |

**Newly opened fixes today:**
- **[PR #7135](https://github.com/agentscope-ai/QwenPaw/pull/7135)** — preserve corrupt files and write envs atomically
- **[PR #7152](https://github.com/agentscope-ai/QwenPaw/pull/7152)** — fix spawn recursion and port-race startup flakes in integration tests
- **[PR #7147](https://github.com/agentscope-ai/QwenPaw/pull/7147)** — fix xiaoyi channel: report proactive send failures and normalize session IDs

---

## 6. Feature Requests & Roadmap Signals

Several recurring themes suggest strong roadmap signals:

**High-demand features (multiple requests):**

1. **Automatic model fallback/switch** — Requested in [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) and [#2089](https://github.com/agentscope-ai/QwenPaw/issues/2089). Users want automatic failover to backup models when primary model API limits or errors occur. Given the freeze issue (#7102), this seems increasingly essential.

2. **Multi-agent bot binding and collaboration** — [#2035](https://github.com/agentscope-ai/QwenPaw/issues/2035). Users want to bind different agents to different channel bots and enable cross-agent task collaboration.

3. **Cross-platform session continuity** — [#2493](https://github.com/agentscope-ai/QwenPaw/issues/2493), [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301). Cloud-deployed CoPaw should sync/continue with Windows desktop; web sessions should continue on mobile.

4. **Larger local models** — [#2856](https://github.com/agentscope-ai/QwenPaw/issues/2856). Users request 14B, 27B, and 32B quantized versions of CoPaw models (currently capped at 9B).

5. **File operation rollback/undo** — [#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590). Community member volunteered to implement undo/rollback for agent file operations.

**Already in progress:**
- **Self-hosted multi-user Hub** — [PR #7112](https://github.com/agentscope-ai/QwenPaw/pull/7112) suggests enterprise/multi-tenant direction.
- **Deep research/thinking integration** — [#3074](https://github.com/agentscope-ai/QwenPaw/issues/3074) requests DeerFlow's longGraph-style deep reasoning capabilities.
- **Enterprise LLM gateway support** — [#2296](https://github.com/agentscope-ai/QwenPaw/issues/2296) requests support for non-OpenAI-format gateway requests.

**Prediction for next version (~2.1.1 or 2.2.0):** Likely to include the Hub feature, stream recovery watchdog, antivirus sandbox fix, and Volcengine/MiMo provider support.

---

## 7. User Feedback Summary

**Positive signals:**
- **Local model performance praised** — [#2776](https://github.com/agentscope-ai/QwenPaw/issues/2776) shows users running CoPaw's own 4B local model on RTX 3080 with smooth token generation.
- **Users actively experimenting with multi-agent setups** — [#2035](https://github.com/agentscope-ai/QwenPaw/issues/2035) shows sophisticated use cases beyond basic chat.

**Critical pain points:**

1. **RELIABILITY CONCERNS (most severe):**
   - Home directory deletion report ([#2884](https://github.com/agentscope-ai/QwenPaw/issues/2884))
   - 10+ minute freezes ([#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102))
   - Tasks silently disappearing ([#2723](https://github.com/agentscope-ai/QwenPaw/issues/2723))
   - Frequent task interruptions during batch processing ([#2377](https://github.com/agentscope-ai/QwenPaw/issues/2377))

2. **Security/Compatibility:**
   - Antivirus flags/interference ([#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847))
   - Apple Silicon browser_use performance ([#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655))

3. **UX Frustrations:**
   - Settings not persisting (language/theme resets after restart) ([#2663](https://github.com/agentscope-ai/QwenPaw/issues/2663))
   - `/approve` command hard to parse — action descriptions hidden in thinking ([#2845](https://github.com/agentscope-ai/QwenPaw/issues/2845))
   - Mobile browser page unusable ([#2856](https://github.com/agentscope-ai/QwenPaw/issues/2856))

4. **Browser automation weakness** — [#3261](https://github.com/agentscope-ai/QwenPaw/issues/3261): Users want more human-like browser automation with login state reuse.

---

## 8. Backlog Watch

Issues/PRs that appear long-pending or may need maintainer attention:

| Item | Age | Status | Why it needs attention |
|------|-----|--------|----------------------|
| [#3177](https://github.com/agentscope-ai/QwenPaw/issues/3177) — CoPaw app cannot start (Windows, BOM issue) | Since Apr 9 | CLOSED | Windows-specific startup failure with encoding issues (`锘緻echo` BOM artifact). Closed without visible resolution paths shared. |
| [#3005](https://github.com/agentscope-ai/QwenPaw/issues/3005) — App won't launch after upgrade | Since Apr 7 | CLOSED | Installation via PowerShell script leaves app unlaunchable. The issue was closed but the underlying install path may still cause problems for new users. |
| [#2598](https://github.com/agentscope-ai/QwenPaw/issues/2598) — Qwen3-235B-A22B support | Since Mar 31 | CLOSED | Non-thinking model support seemed unclear; closed without a definitive public answer visible in the data. |
| [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) — Apple Silicon ARM browser_use | Since Mar 31 | CLOSED | Performance impact on M-series Macs. This seems fundamental to macOS UX and was closed with an unclear resolution visible. |
| [PR #5930](https://github.com/agentscope-ai/QwenPaw/pull/5930) — Structured run outcome to SSE response | Since Jul 10 | Still OPEN | Important for API-driven automation (Java service integration). Waiting over a month for review/merge. |
| [PR #6325](https://github.com/agentscope-ai/QwenPaw/pull/6325) — Show built-in tool docs in Console | Since Jul 22 | Still OPEN | Quality-of-life improvement for power users; pending review for nearly a month. |
| [PR #6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) — Reranker UI config panel | Since Jul 23 | Still OPEN | Visual configuration feature; pending review for a month. |

---

## Project Health Summary

**Overall Assessment: Good, with reliability concerns.**

CoPaw's development velocity remains **high** — the team is closing out a massive backlog of old issues, actively reviewing and merging PRs (16 merged/closed today), and aggressively addressing stability problems. The next release is likely to be **substantial**, including the multi-user Hub, stream watchdog, and new provider integrations.

However, the **critical severity** issues reported (directory deletion, extended freezes) are alarming and should be the top priority for the next patch release. The community is clearly invested (27 comments on the deletion incident) and expects prompt, transparent resolutions. The strengthening test infrastructure ([PR #7103](https://github.com/agentscope-ai/QwenPaw/pull/7103)) is a positive signal that quality is improving.

**Risk watch:** The directory deletion report (#2884), even if resolved as user error or a third-party issue, highlights how much user trust is at stake in agentic file operations. File rollback feature ([#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590)) or an explicit file-operation safety layer should be considered for near-term roadmap priority.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-20

## 1. Today's Overview

ZeroClaw is in a period of extremely high activity, with 43 issues and 50 pull requests updated in the last 24 hours. The project is deep in a major architectural transition, with multiple large RFCs proposing fundamental changes to session ownership, WASM plugin architecture, and security boundaries. Maintainer attention is heavily focused on review queues, with several prominent PRs from distinguished contributors (notably IftekharUddin) carrying `risk:high` and `size:XL` labels. Notable gaps include a lack of newly merged PRs (only 2 closed/merged out of 50) and zero new releases, suggesting a stabilization or review-heavy phase rather than a delivery sprint. Several issues remain in a `needs-maintainer-review` state, indicating the maintainer queue may be the current bottleneck.

**Key signals:** Six open RFCs vying for architectural direction, a P0 security bug in the SOP engine, and a cluster of high-risk bugs in provider/runtime paths. The project is healthy but strained — strong contributor activity colliding with limited maintainer bandwidth.

---

## 2. Releases

**No new releases in the last 24 hours.**
The most recent release remains **v0.8.4**, and the project appears to be accumulating features and fixes toward a v0.9.0 target, per several RFCs (e.g., [#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598) targets "v0.9.0 SOP authorization contract").

---

## 3. Project Progress

**Merged/Closed PRs (2 of 50):**
- **#10148** — `fix(zerocode): make theme presets package-local` (merged). Moves TUI theme-table generation from `build.rs` to the `xtask` generator registry, addressing Windows checkout issues with cross-crate symlinks. Links to tracker [#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381).
- The second closed PR was not visible in the top-20 sample; exact details unavailable.

**Notable PRs advancing major features (open, under active review):**
- **#9828** — `feat(tools): agent-facing config authoring with operator-approved policy previews` — six independently testable commits replacing raw shell `echo > config.toml` with validated, operator-approved config paths. High architectural significance.
- **#9745** — `fix(memory): add per-agent attribution and scoping to the knowledge graph` — closes a cross-agent data leak in the shared SQLite knowledge graph.
- **#9746** — `fix(tools): per-agent ownership scoping for session tools and discord_search` — closes similar ownership gaps on session tooling.
- **#8486** — `feat(gateway): add OpenAI chat completions endpoint` — unblocks LangChain, OpenAI SDK, Continue.dev, and Aider compatibility; `status:blocked` but still active.
- **#9739** — `feat(zerocode): multi-session panes with agent sidebar` — significant frontend UX advancement.

---

## 4. Community Hot Topics

**Top issues by engagement:**

1. **[#9487 — RFC: Runtime-owned conversation sessions and transport surface adapters (20 comments)](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)** — The centerpiece of the session-persistence debate. Revision 2 ratifies ownership boundaries across three related issues. High architectural stakes.
2. **[#7462 — [Bug]: 74 test failures on Windows (18 comments)](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)** — Long-running Windows CI gap catching real regressions. Community frustration likely; severity S2.
3. **[#10118 — Tracker: Rust anti-slop policy debt remediation (16 comments)](https://github.com/zeroclaw-labs/zeroclaw/issues/10118)** — New tracker (created 2026-08-19) documenting **307 candidates** across 1,078 Rust files, including 202 production panics. Signals a broader code-quality campaign.
4. **[#6165 — RFC: Prefer a lighter ZeroClaw core through external integrations (16 comments)](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)** — Long-running debate on core bloat vs. external integration. Perennial "less is more" tension.

**Underlying needs analysis:** The dominant theme is **ownership and trust boundaries** — who owns session state, who can access which knowledge, and how agents prove their identity. The second theme is **consistency and quality** — Windows parity, anti-slop policies, and credential hygiene. Contributors are pushing hard on architecture while simultaneously cleaning up years of accumulated shortcuts.

---

## 5. Bugs & Stability

**Critical severity:**
- **#10066 ([OPEN, P0, accepted](https://github.com/zeroclaw-labs/zeroclaw/issues/10066))** — **SOP engine promotes and runs later steps before recording a step's output-schema rejection.** Steps actually execute despite validation failure. Workflow-blocking S1 severity. **No fix PR currently linked.**

**High severity (P1/P0):**
- **#9976 ([OPEN, P1, in-progress](https://github.com/zeroclaw-labs/zeroclaw/issues/9976))** — Anthropic provider logs credential fragments at debug level (`credential_head`/`credential_tail`). S0 security risk. `in-progress` but no PR referenced.
- **#10067 ([CLOSED, P1, accepted](https://github.com/zeroclaw-labs/zeroclaw/issues/10067))** — Tool-result truncation fixed at 50,000 chars, byte-wise on structured output. Re-scoped after initial report was wrong; closed with follow-up work.
- **#7462 ([OPEN, P1, accepted](https://github.com/zeroclaw-labs/zeroclaw/issues/7462))** — **74 Windows test failures.** Long-lived; no clear ownership of the fix.
- **#9019** (not in top-20, but P1 per labels) — Windows installer fails at launch with missing TaskDialogIndirect (`[Bug #9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290)`).

**Active fix PRs for reported bugs:**
- **#9743** — Modalities parser into `capabilities_for_model` (fixes provider capability detection).
- **#9723** — DeepSeek DSML/`<|tool_call|>` envelope parsing (fixes raw envelope text surfaced to users).
- **#9938** — Preserve full provider ref for multi-alias pricing resolution.
- **#10064** — Self-destruct Telegram approval cards after operator tap.
- **#9447** — Classify incomplete Anthropic terminal responses (prevents truncated replies presented as complete).

**Windows parity remains the single largest stability gap:** 74 test failures, path semantics, console encoding, and a broken desktop installer. Community reports indicate real onboarding friction.

---

## 6. Feature Requests & Roadmap Signals

**High-signal user requests:**
- **#10141 ([OPEN](https://github.com/zeroclaw-labs/zeroclaw/issues/10141))** — *"Please make sessions usable."* Direct user frustration with session management: hard to copy referenced snippets, no one-button copy, two ASCII buttons cluttering. Signals UX debt in ZeroCode chat.
- **#10059 ([OPEN, good first issue, P3](https://github.com/zeroclaw-labs/zeroclaw/issues/10059))** — Support Option-Backspace word deletion on macOS. Small, user-facing polish.
- **#10086 ([OPEN, P2, accepted](https://github.com/zeroclaw-labs/zeroclaw/issues/10086))** — Make ZeroCode Logs text selectable/copyable via mouse.
- **#9760 ([OPEN, P3, accepted](https://github.com/zeroclaw-labs/zeroclaw/issues/9760))** — Display channel descriptor defaults in Web Quickstart.

**Likely v0.9.0 content (based on RFC targets):**
- SOP capability permission contract ([#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598)) — explicitly targets v0.9.0.
- Runtime-owned conversation sessions (RFC #9487) — tied to tracker #9600.
- Goal mode v2 with durable continuation ([#9702](https://github.com/zeroclaw-labs/zeroclaw/issues/9702)).
- Web bundle/daemon compatibility contract ([#9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975)).

**Predictions:** The OpenAI-compatible gateway endpoint (**#8486**) is a top candidate for the next release — it removes a major ecosystem friction point. The per-agent ownership PRs (**#9745**, **#9746**) likely land together as a security-hardening batch. WASM plugin architecture RFC (**#10076**) is newer and likely targets v0.10+.

---

## 7. User Feedback Summary

**Pain points surfacing clearly:**
- **Session management is frustrating** — explicit from #10141. Users want one-click copy, better navigation between sessions, and less visual clutter.
- **Windows experience is poor** — installer fails, tests fail, terminal paste during active turns silently discarded (**#10150** new fix), and logs pane isn't accessible.
- **Excessive log noise/formatting issues** — Health status labels misalign in French/Spanish (**#10103**), persisted image markers repeatedly warn about temporary paths (**#10045**).

**Satisfaction signals:**
- The presence of 6+ `distinguished contributor`-labeled PRs suggests a healthy, engaged maintainer-adjacent contributor base.
- Trackers like `#8692` (Maintainer decision queue) show an organized process that may partially offset unhappiness around slow turnaround.
- The `#10150` PR (accept paste during active turns) suggests responsive iteration on user-reported friction.

---

## 8. Backlog Watch

**Issues/PRs needing maintainer attention:**

1. **#8486 ([OPEN, blocked](https://github.com/zeroclaw-labs/zeroclaw/pull/8486))** — OpenAI Chat Completions endpoint. Blocked since June; unblocks major ecosystem integrations (LangChain, Continue.dev, Aider). High-value, high-interest, aging without visible movement.
2. **#7462 ([OPEN, P1](https://github.com/zeroclaw-labs/zeroclaw/issues/7462))** — **74 Windows test failures.** Open since June 10 — over two months. Repeatedly surfaced; maintainers have not yet prioritized a fix. A clear Windows-support blind spot.
3. **#8955 ([OPEN](https://github.com/zeroclaw-labs/zeroclaw/pull/8955))** — Telegram media group batching. Open since July 10; appears complete but has been in review for six weeks.
4. **#9318 ([OPEN, blocked](https://github.com/zeroclaw-labs/zeroclaw/issues/9318))** — PostgreSQL session backend CI job. Blocked on #9251; however, long-term visibility of the session store roadmap depends on this being unblocked.
5. **#9290 ([OPEN, P1](https://github.com/zeroclaw-labs/zeroclaw/issues/9290))** — Windows desktop installer fails at launch. A release-blocking-quality bug (v0.8.3 installer broken) sitting since July 23 with `help wanted`.
6. **#10118 ([OPEN, new](https://github.com/zeroclaw-labs/zeroclaw/issues/10118))** — Anti-slop tracker with 307 candidates, created yesterday. Early-stage; may become a maintainer sink if not triaged quickly.

**Watch item:** The **#10066 SOP engine P0 bug** has no fix PR yet and blocks work on SOP workflows — S1 severity for users relying on SOP automation.

---

*Data snapshot: 2026-08-20. All counts reflect the presented GitHub payload; items shown reflect the top-20/30 subset.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*