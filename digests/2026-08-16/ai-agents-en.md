# OpenClaw Ecosystem Digest 2026-08-16

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-16 01:23 UTC

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

Based on the GitHub data provided for OpenClaw (github.com/openclaw/openclaw) on 2026-08-16, here is the project digest.

---

## OpenClaw Project Digest: 2026-08-16

### 1. Today's Overview
OpenClaw shows a very high level of activity, with 500 issues and 500 PRs updated in the last 24 hours. The project remains heavily focused on addressing a large backlog of bugs (478 open issues), many of which are classified as P1/P2 and involve session-state integrity and message-loss scenarios. There is a surge in UI/UX development, with a dedicated series of large pull requests aimed at redesigning the web Control UI sidebar and chat panels. A single new beta release (v2026.8.1-beta.2) was published, featuring secret-egress security hardening and new model support.

### 2. Releases
**Source:** [v2026.8.1-beta.2](https://github.com/openclaw/openclaw/releases)

The latest beta release `v2026.8.1-beta.2` highlights two key areas:
- **Secret Egress Host Binding:** Shared-store secrets are now bound to exact HTTPS destination hosts across CLI, Gateway RPC, and the Control UI. This is a security hardening measure to prevent unbound sentinel substitution, which previously could fail open and expose plaintext data.
- **GPT-5.6 Ultra and Runtime Switching:** The release includes support for GPT-5.6 Ultra and enhancements to runtime switching.

No explicit breaking changes or migration notes were provided in the summary.

### 3. Project Progress
The most significant development is a **massive UI overhaul** of the Control Web interface, driven by maintainer `vyctorbrzezowski`. A series of large, interdependent PRs are in review, aiming to:
- **Refactor the sidebar:** Unifying typography (`#123626`), icons (`#123613`), and section grammar (`#123562`).
- **Enhance session management:** Adding session info cards (`#123594`), grouping by project (`#123603`), and clarifying incognito sessions (`#123573`).
- **Improve chat panel:** Organizing identity in the header (`#123572`), consolidating side rails into a tabbed panel (`#123874`), and compacting selection controls (`#123588`).
- **Add new features:** Introducing a sidebar customization surface (`#123656`, `#123666`).

Other notable PRs include `#124321` (remove obsolete version injection), `#124328` (recover authorized deep links after UI updates), and `#124329` (omit internal class names from RPC failures).

### 4. Community Hot Topics
The most active community threads highlight recurring pain points with subagent management and session state:

- **[#121058 - Silent reply failures still recurring](https://github.com/openclaw/openclaw/issues/121058)** (96 comments, Closed): The community is reporting that a previously "fixed" bug for silent reply failures is still occurring, indicating the fix was incomplete or introduced a regression.
- **[#116201 - Realtime voice work can retain unbounded state](https://github.com/openclaw/openclaw/issues/116201)** (66 comments, Open): There is a deep, ongoing discussion about resource limits in realtime voice sessions, suggesting a need for more robust lifecycle management.
- **[#7707 - Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)** (53 comments, Open): This long-standing feature request continues to attract attention, focusing on preventing memory poisoning attacks by tagging the trust level of memory origins.
- **[#25592 - Text between tool calls leaks to messaging channels](https://github.com/openclaw/openclaw/issues/25592)** (49 comments, Open): A significant UX bug where internal agent narration is accidentally sent to users on Slack/iMessage.

### 5. Bugs & Stability
The project is reporting a high volume of P1 regressions and stability issues. Key themes include silent failures and session-state corruption.

- **Top Severity (P1) Bugs:**
    - **[#121058]** and **[#41744]** report **silent message loss** across different channels.
    - **[#25592]** , **[#44925]** , and **[#80498]** concern **subagent state corruption**, premature completion notifications, and lost work.
    - **[#94939]** details a **data-loss bug** where a 6.x state migration creates an empty SQLite file, breaking MS Teams integration.
    - **[#119087]** reports a **significant gateway cold-start regression** (~2.5x slower), a major operational concern.
    - **[#86684]** and **[#90944]** highlight issues where session yields and resumes lead to incorrect compaction or lost replies.

- **Critical Infrastructure:**
    - **[#74378]** - Linux CLI commands remain alive as zombie processes on Windows.
    - **[#123073]** - The `dev` update channel is broken (`EUNSUPPORTEDPROTOCOL`), preventing developers from updating.

Most of these bugs do not have a clear fix PR linked, and are often tagged with `clawsweeper:needs-maintainer-review` or `clawsweeper:needs-product-decision`, suggesting they are complex and require maintainer triage.

### 6. Feature Requests & Roadmap Signals
Several popular feature requests signal potential future directions:

- **Security Enhancements:** The high engagement on (55) and the new secret egress binding in `v2026.8.1` indicate a strong focus on security.
- **Agent Interoperability:** Requests like `#44309` (one-way A2A dispatch) and `#121046` are pushing for more sophisticated agent-to-agent communication and memory management.
- **Provider & Config Flexibility:** Users are asking for broader support, including Alibaba Bailian (`#26037`), YAML configs (`#45758`), and decoupling gateway model validation from agent IDs (`#30381`).
- **UX/Usability:** The sheer number of open UI PRs points towards a major UI/UX update. Feature requests like `#45323` (Slack-style @mention autocomplete) and `#45771` (pace-aware rate limiting) suggest a focus on core user experience for both humans and agents.

### 7. User Feedback Summary
- **Pain Points:**
    - **Unreliable Messaging/State:** The most common complaints are silent message delivery failures (`#121058`, `#41744`), lost subagent work (`#44925`), and confusing session state (`#86684`, `#90944`). Users are clearly frustrated by apparent work being completed but results disappearing.
    - **Resource & Performance Issues:** Users are reporting performance regressions, including slower gateway starts (`#119087`) and excessive token usage from re-injected bootstrap files (`#67419`).
    - **Config & Migration Friction:** Problems with updates (`#123073`, `#85844`), config file permissions (`#78493`), and data migration bugs (`#94939`) are causing friction for many.
- **Satisfaction Signals:** The community is actively proposing improvements, suggesting a high level of investment in the platform. They are requesting more control over memory hygiene (`#7707`), better tools for model fallback testing (`#6599`), and more granular control over TTS/STT (`#66252`).

### 8. Backlog Watch
Several important issues have been open for a long time and require maintainer attention to resolve, as they are tagged `clawsweeper-recovery-stuck` or `clawsweeper:needs-maintainer-review`.

- **[#7707 - Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)** (Opened Feb 3, 53 comments): Security-focused feature with high community interest.
- **[#25592 - Text between tool calls leaks to messaging channels](https://github.com/openclaw/openclaw/issues/25592)** (Opened Feb 24, 49 comments): A major UX issue causing visible spam in messaging channels.
- **[#74378 - CLI commands remain alive as node.exe processes on Windows](https://github.com/openclaw/openclaw/issues/74378)** (Opened Apr 29): A persistent Windows-specific regression.
- **[#44925 - Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925)** (Opened Mar 13): A critical bug causing silent data loss for subagent tasks.
- **[#30381 - Gateway ignores model for targeted agents](https://github.com/openclaw/openclaw/issues/30381)** (Opened Mar 1): When using `x-openclaw-agent-id`, the gateway still validates the request's model, which is an unnecessary constraint.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-08-16 | **Scope:** 12 projects across the personal AI assistant / agent open-source ecosystem

---

## 1. Ecosystem Overview

The personal AI assistant and agent ecosystem is experiencing **high-velocity development** with a clear split between large, complex platforms (OpenClaw, ZeroClaw, Hermes Agent) undergoing architectural evolution and smaller, focused projects (NanoBot, PicoClaw, NullClaw) delivering targeted improvements. **Reliability and trust** remain the dominant themes—silent message loss, session-state corruption, and memory-integrity bugs appear across nearly every project, signaling systemic challenges in building persistent, production-grade agent systems. The ecosystem is converging on **security hardening** (secret egress binding, credential boundaries, SSRF gates) and **session persistence** (cross-session memory, durable state) as critical differentiators. Notably, the TeleClaw family (OpenClaw, NanoClaw, PicoClaw, ZeroClaw, TinyClaw, ZeptoClaw) demonstrates both the benefits and challenges of open-source derivation—sharing architectural DNA while diverging in focus and maturity.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Activity Tier |
|---------|-------------|-----------|----------------|--------------|---------------|
| **OpenClaw** | 500 updated | 500 updated | 1 beta (v2026.8.1-beta.2) | **Moderate** — high bug volume, P1 regressions | 🟢 Tier 1 (Very High) |
| **ZeroClaw** | 50 updated | 50 updated | None | **Moderate** — heavy RFC/risk focus | 🟢 Tier 1 (Very High) |
| **Hermes Agent** | 41 active | 35 active | None (batch accumulating) | **Good** — high velocity, cluster-fix pattern | 🟢 Tier 1 (Very High) |
| **NanoClaw** | 0 new | 22 updated (19 open) | None | **Good** — strong core-team velocity | 🟢 Tier 1 (Very High) |
| **NanoBot** | ~10 active | 16 updated | None | **Moderate** — memory subsystem instability | 🟢 Tier 1 (High) |
| **Moltis** | 2 closed | 16 updated (14 merged) | None (accumulating) | **Excellent** — strong merge rate, security focus | 🟡 Tier 2 (High) |
| **IronClaw** | 27 updated (21 closed) | 12 updated (5 merged) | None | **Excellent** — systematic efficiency audits | 🟡 Tier 2 (High) |
| **CoPaw** | 9 updated (8 new) | 11 updated (0 merged) | None | **Moderate** — review bottleneck | 🟡 Tier 2 (Moderate) |
| **LobsterAI** | 18 updated (16 stale-closed) | 6 updated (2 closed) | None | **Concerning** — stale-bot masking backlog | 🟠 Tier 3 (Maintenance) |
| **PicoClaw** | 0 new | 2 open (stale 9 days) | None | **At Risk** — merge bottleneck on critical fixes | 🟠 Tier 3 (Stalled) |
| **NullClaw** | 1 new | 1 open | None | **Stable** — low but steady | 🟠 Tier 3 (Low) |
| **TinyClaw** | 0 | 0 | None | **Inactive** — no activity | ⚪ Tier 4 (Dormant) |
| **ZeptoClaw** | 0 | 0 | None | **Inactive** — no activity | ⚪ Tier 4 (Dormant) |

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Ecosystem scale:** 500 issues/PRs updated daily—orders of magnitude beyond any peer, indicating the largest user and contributor base in the open-source agent space
- **Security leadership:** First to implement secret-egress host binding (v2026.8.1-beta.2), setting an industry precedent
- **Feature breadth:** GPT-5.6 Ultra support, runtime switching, and massive UI overhaul demonstrate platform-level ambition
- **Active maintainer engagement:** Community threads get responses; bugs get triaged to `needs-maintainer-review` rather than abandoned

**Technical Approach Differences:**
- **Unified session model:** Unlike Hermes Agent's per-terminal session continuity or NanoBot's session collaboration via mentions, OpenClaw centralizes session state with issues occurring at state-boundary points
- **Aggressive UI overhaul:** The ongoing sidebar/chat panel refactor (12+ interdependent PRs) is unmatched in scope by peers
- **Subagent architecture:** Deep complexity in subagent management (state corruption, lost work) suggests a sophisticated but currently fragile multi-agent runtime

**Community Size Comparison:**
| Metric | OpenClaw | Hermes Agent | ZeroClaw | NanoBot |
|--------|----------|--------------|----------|---------|
| Daily issue activity | 500 | 41 | 50 | ~10 |
| Open bugs (P1/P2) | ~478 | ~15 | ~10 | ~5 |
| Hot-thread engagement | 96 comments (max) | 79 comments (max) | 21 comments (max) | 2 comments (max) |

**Verdict:** OpenClaw is the **ecosystem reference standard**—its challenges (subagent state, silent failures, UI complexity) are the ecosystem's challenges. Projects like LobsterAI, Moltis, and NanoClaw explicitly build around OpenClaw's architecture, confirming its position as the platform of record.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|------------|----------|----------------|
| **Silent Message Delivery & State Integrity** | OpenClaw, NanoBot, Hermes Agent, LobsterAI | Failures where work completes but results disappear; consolidation truncation advancing state; session-flush losing data |
| **Cross-Session Memory & Persistence** | Hermes Agent, LobsterAI, NanoClaw, CoPaw | Enduring memory across restarts; session-title persistence; cross-session search; auto-compression with correctness |
| **Security Hardening** | OpenClaw, Moltis, ZeroClaw, LobsterAI | Secret egress binding; credential boundaries; SSRF gates; path traversal fixes; approval-timeout attribution |
| **Provider Flexibility & Fallbacks** | ZeroClaw, CoPaw, NanoBot, OpenClaw | Native Anthropic refusals; provider discovery unification; DashScope/OrcaRouter support; model fallback testing |
| **Performance/Latency Optimization** | IronClaw, NullClaw, PicoClaw, OpenClaw | Prefix caching; heartbeat journal churn; thread-index coalescing; token-usage accuracy |
| **WebUI/UX Modernization** | OpenClaw, NanoBot, CoPaw, LobsterAI | Virtual scrolling; sidebar refactoring; session organization; copy/fork action timing |
| **Multi-Platform Messaging Reliability** | Hermes Agent, PicoClaw, LobsterAI, CoPaw | WhatsApp/WeChat/Telegram lifecycle; rate-limit handling; OAuth2 refresh rotation |
| **Agent-to-Agent Communication** | OpenClaw, NanoBot, Moltis, ZeroClaw | A2A dispatch; session collaboration via mentions; typed tool choice; channel-neutral delivery |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Architecture |
|---------|--------------|--------------|--------------|
| **OpenClaw** | Full-platform agent with messaging, subagents, UI | Power users, teams, enterprises | Monolithic with subagent runtime; centralized state |
| **Hermes Agent** | Terminal-native agent + messaging hub | CLI power-users, multiplexer crowd | Lightweight core; gateway+sessions; import from Claude/Codex |
| **ZeroClaw** | Architectural RFC-driven evolution | Developers, forward-deployers | SOA-style; runtime-owned sessions; SOP capability |
| **NanoBot** | Memory-system + WebUI-centric | Team/agent-adjacent users | Modular plugins; session collaboration; consolidated memory |
| **NanoClaw** (DotClaw) | Channel adapters + multi-session | Bot operators, Telegram-first | Lightweight; poll-loop based; permissions-policy focus |
| **Moltis** | Security-first agent with connectors | Security-conscious adopters | Sandboxed; durable connectors; node-pairing verification |
| **IronClaw** | Performance optimization + refactoring | Mature users, system builders | Unbound-turns; prepared-context; budget-ledger accounting |
| **CoPaw** | Local AI + plugin API | Qwen/Aliyun ecosystem users | Native runtime (DataPaw); video tooling; per-sender isolation |
| **LobsterAI** | Commercialized OpenClaw wrapper | NetEase subscribers | Config-manager; membership-gated models; WeChat/IM integration |
| **PicoClaw** | Minimal platform for SBCs | Self-hosters, resource-constrained | Lightweight; prefix-cache optimization; native WhatsApp |
| **NullClaw** | Local-first performance agent | Local tool-heavy users | Zig-based compression; cache-friendly prompts; loop prevention |
| **TinyClaw / ZeptoClaw** | Unknown | Unknown | Dormant |

**Key architecture divergence:** OpenClaw/Hermes/Moltis use **centralized session state** with gateway processes; NanoBot/NanoClaw use **modular plugin runtimes**; NullClaw and PicoClaw optimize for **minimal resource footprints**; ZeroClaw is moving toward **runtime-owned session authority**.

---

## 6. Community Momentum & Maturity

### Tier 1 — Rapidly Interating (Feature Velocity + Bug Response)
- **OpenClaw:** Massive PR volume, but bug-response quality varies (478 open issues)
- **ZeroClaw:** RFC-driven design with high engagement; merging Anthropic-fallback stack shows execution capability
- **Hermes Agent:** Cluster-fix approach crushing backlog; per-terminal `--continue` and Claude/Codex import are market-positioning moves
- **NanoClaw:** 13 core-team PRs/day; Telegram transition complete; cross-session context is a hub feature

### Tier 2 — High Velocity with Constraints
- **Moltis:** 14 merges/day; security-first posture; awaiting next minor release to ship accumulated features
- **IronClaw:** Systematic perf audits closing Tier-1 issues in days; trajectory-benchmark proposal is 167 days old (risk of drifting)
- **NanoBot:** Strong merge rate but memory-subsystem instability (#5402, #5377); needs consolidation fix priority
- **CoPaw:** High first-time-contributor rate but **merge bottleneck** (0 merges in 24h); review queue needs attention

### Tier 3 — Stabilizing / Maintenance
- **LobsterAI:** Stale-bot sweep finalizing April–May backlog; critical login bug (#1903) open 101 days; **revenue-blocking**
- **PicoClaw:** Two critical PRs stale 9 days (WhatsApp dead, prefix caching wasted); contributor abandonment risk
- **NullClaw:** Low-burn; one meaningful PR awaiting review

### Tier 4 — Dormant
- **TinyClaw, ZeptoClaw:** No activity; **consider archiving or verifying health**

---

## 7. Trend Signals

### Signal 1: "Silent Failure" is the #1 Trust Killer
Reported across OpenClaw, NanoBot, Hermes Agent, and LobsterAI—the pattern of work completing but results disappearing (message delivery, subagent output, session-flush errors) is the most corrosive bug class for user confidence.

**Action for developers:** Design for explicit acknowledgment. Every operation should have visible completion, timeout, or failure state. Never report "success" when state is unknown.

### Signal 2: Security Posture Gates Adoption
Moltis and ZeroClaw show that security weaknesses directly block new users— contributors explicitly say they won't adopt until hardening lands. OpenClaw's secret-egress binding is being replicated across the ecosystem.

**Action for developers:** Threat-model from day one. Implement credential boundaries, SSRF gates, and path-traversal sanitization before feature velocity ramps.

### Signal 3: Cross-Session Memory is the Next Battleground
Hermes (#8457), LobsterAI (#2046), NanoClaw (#3257), and CoPaw all show users demanding agents that remember. This is the defining feature for "agent-as-colleague" vs. "agent-as-tool."

**Action for developers:** Prioritize durable, searchable, compressed memory with trust tagging. The security aspect (memory poisoning) is as important as the feature itself.

### Signal 4: Rate Limits and Token Economics Drive UX
NanoBot's token-underestimation bug (#5402), PicoClaw's prefix-caching PR, and OpenClaw's token-reinjection issues (#67419) all point to users feeling the financial pain of poor context management.

**Action for developers:** Expose token usage transparently. Implement accurate estimation, cache-friendly prompt ordering, and predictable consolidation thresholds.

### Signal 5: Multi-Platform Messaging Efficiency is Growing Pains
Hermes (WeChat/QQ), PicoClaw (WhatsApp), LobsterAI (WeChat), CoPaw (Matrix)—all struggle with lifecycle, encryption, and rate-limit issues across platforms. This is a recurring operational tax.

**Action for developers:** Abstract channel adapters early; version-pin external SDKs; implement heartbeat monitoring for each channel as a first-class concern.

### Signal 6: CLI-Native Experience is Re-emerging
Hermes' per-terminal `--continue` and Claude/Codex import signal a demand for terminal-first agents that respect multiplexer workflows. NullClaw's local-tool optimization aligns with this trend.

**Action for developers:** Don't neglect the terminal. For power users, the CLI is not a fallback—it's a primary interface.

### Signal 7: WebUI Complexity is Accelerating
OpenClaw's massive UI overhaul, NanoBot's WebUI UX fixes, and CoPaw's virtual-scrolling request all show the WebUI is becoming the primary interaction surface for many users.

**Action for developers:** Invest in UI state management. Virtual scrolling, session organization, and model-preset clarity are now baseline expectations.

### Signal 8: Architectural Debt is Being Addressed Deliberately
IronClaw's performance epics, Hermes' large-file decomposition, ZeroClaw's RFC-driven architecture, and OpenClaw's subagent state refactoring demonstrate that mature projects are investing in debt reduction.

**Action for developers:** Budget for refactoring as a first-class activity—it improves velocity, reduces bug sprints, and retains senior contributors.

---

## Conclusion

The ecosystem is healthy but entering a **reliability-conscious adolescent phase**. The winners will be those who combine the following:
1. **Silent-failure elimination** (trust)
2. **Cross-session persistence + memory integrity** (differentiation)
3. **Security hardening built-in, not bolted-on** (adoption gate)
4. **Efficient multi-channel delivery** (operational viability)
5. **Developer-centric UX** (terminal + WebUI, both)

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-08-16

---

## 1. Today's Overview

NanoBot is in a period of intense development activity, with 16 PRs updated in the last 24 hours and a strong mix of feature development and bug fixing. The project appears healthy and well-maintained, with maintainers actively reviewing and merging work. However, two new critical bugs reported today — one around token consolidation never triggering (#5402) and another around consolidation truncation (#5377) — indicate that the memory/consolidation subsystem is currently a focal point of instability. The merge of several P2-priority fixes demonstrates a responsive maintainer team, though the number of open PRs (9) suggests a growing review queue that may need attention.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Project Progress

Seven PRs were closed/merged in the last 24 hours (all the closed items were updated in the last 24 hours, and are presumed merged):

- **#5371 — [fix(webui): hide assistant actions until turn end](https://github.com/HKUDS/nanobot/pull/5371)** (ZhouJ-sh, P2): Resolves the reported issue #5368 by hiding copy/fork actions until the agent turn completes. This UX fix eliminates conflicting completion signals.
- **#5369 — [fix(plugins): revalidate cached skill roots after package changes](https://github.com/HKUDS/nanobot/pull/5369)** (yu-xin-c, P2, security): Fixes a potential security gap where cached plugin skill directories could continue reading from a restricted project after an in-place package replacement.
- **#5370 — [fix(agent): bound per-session file state lifecycle](https://github.com/HKUDS/nanobot/pull/5370)** (yu-xin-c, P2, performance): Prevents unbounded growth of `FileStateStore` for high-cardinality/temporary sessions and cleans up state on session lifecycle boundaries.
- **#5376 — [fix(cron): keep scheduler alive when job-store persistence fails](https://github.com/HKUDS/nanobot/pull/5376)** (rickererer, P2): Fixes a silent failure where a single persistence error could permanently kill the cron scheduler by moving `_arm_timer()` outside the vulnerable try/finally block.
- **#5328 — [feat(providers): add OrcaRouter as a named gateway provider](https://github.com/HKUDS/nanobot/pull/5328)** (XiaoHuo888-hue, P2): Adds OrcaRouter, an OpenAI-compatible routing gateway offering 150+ models from multiple LLM vendors behind a single endpoint, with zero-trust security features.
- **#5397 — [fix(webui): preserve range selection and turn timing](https://github.com/HKUDS/nanobot/pull/5397)** (Re-bin): Adds macOS-style Shift range selection in sidebar bulk-delete, and fixes turn-timing attribution issues.
- **#5399 — [fix(webui): clarify model preset display names](https://github.com/HKUDS/nanobot/pull/5399)** (Re-bin): Distinguishes display labels from stable `/model` command names, preventing confusion when editing presets.

**Key themes:** Stability fixes around session lifecycle, plugin security, and scheduler resilience comprise the bulk of merged work. The provider ecosystem is expanding (OrcaRouter), and WebUI UX polish continues.

---

## 4. Community Hot Topics

**Most active items:**

- **[#5377 — Bug: consolidation truncates archive input but advances past the full message batch](https://github.com/HKUDS/nanobot/issues/5377)** (2 comments): This issue describes a data-loss scenario where the consolidation model receives truncated input while the session state advances as if all messages were processed. This pairs with an open PR (#5379) and represents a memory-integrity concern. The community is engaged because silent message loss directly undermines session persistence.

- **[#5358 — feat(webui): add session collaboration via mentions](https://github.com/HKUDS/nanobot/pull/5358)** (chengyongru): Large feature enabling cross-session collaboration via server-owned `@name` identifiers. This work prompts wider architectural discussion about session identity and multi-session workflows.

**Underlying needs:** Users are requesting better multi-session/multi-context workflows (mentions, side conversations, drag-and-drop organization) while simultaneously demanding that the core memory system be trustworthy (no truncation, accurate token counting). The collaboration features suggest NanoBot is being used in team/agent-adjacent scenarios where parallel contexts are common.

---

## 5. Bugs & Stability

**Reported today (or still active):**

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | **[#5402 — Token consolidation never triggers](https://github.com/HKUDS/nanobot/issues/5402)** — tiktoken estimation consistently underestimates actual API token counts, so consolidation may never fire, risking context-overflow failures in long sessions. | Open, no comments yet | No fix PR yet |
| **High** | **[#5377 — Consolidation truncates input but advances state](https://github.com/HKUDS/nanobot/issues/5377)** — silent message loss due to truncation + state advancement mismatch. | Open, 2 comments | **[#5379](https://github.com/HKUDS/nanobot/pull/5379)** — replaces lossy truncation with lossless bounded chunks |
| **Medium** | **[#5368 — WebUI copy/fork actions visible during active turn](https://github.com/HKUDS/nanobot/issues/5368)** | Closed | **[#5371](https://github.com/HKUDS/nanobot/pull/5371)** — merged |

**Stability assessments:** The two high-severity consolidation bugs represent the most pressing stability concern. #5402 is particularly notable as it means long sessions may silently approach context limits without triggering mitigation. PR #5379 exists for #5377 and directly addresses the truncation flaw; no fix yet for #5402 — this should be prioritized. The merged fixes for cron persistence, session lifecycle binds, and plugin revalidation indicate steady hardening of the core runtime.

---

## 6. Feature Requests & Roadmap Signals

The following open PRs signal where the project is heading:

- **[#5400 — refactor(models): unify preset names](https://github.com/HKUDS/nanobot/pull/5400)** (Re-bin): Suggests making preset names canonical across all surfaces (config, WebUI, sessions, fallbacks, runtime snapshots). This is a broad refactor that will likely land in the next version and could affect user configs (potential migration note: canonical names become single source of truth).
- **[#5398 — feat(providers): add DashScope (Bailian) native protocol](https://github.com/HKUDS/nanobot/pull/5398)** (sambazhu): Native protocol support for Alibaba's DashScope, exposing thinking parameters not available via OpenAI-compatible mode. Indicates continued international/Alibaba-cloud provider expansion.
- **[#5358 — feat(webui): session collaboration via mentions](https://github.com/HKUDS/nanobot/pull/5358)** (chengyongru): A landmark feature for multi-session workflows; if merged, this significantly widens NanoBot's collaboration story.
- **[#5364 — feat(webui): temporary side conversations](https://github.com/HKUDS/nanobot/pull/5364)** (bingqilinweimaotai): `/side` command for transient parallel conversations, tab-switching, independent drafts. Likely to ship soon.
- **[#5389 — feat(webui): drag-and-drop session organization](https://github.com/HKUDS/nanobot/pull/5389)** (bingqilinweimaotai): UX-focused session management with group creation by drag-and-drop.

**Prediction for next version:** Session collaboration (mentions), side conversations, and dash-scope native support are strong candidates for the next feature release. The model-preset unification refactor may land as a 0.x breaking change requiring user migration of custom presets.

---

## 7. User Feedback Summary

- **Pain point — silent data loss:** The consolidation truncation bug (#5377) directly reflects user anxiety about message integrity; losing portions of conversations undermines trust in the system.
- **Pain point — unreliable token estimation:** The #5402 issue shows users deeply care about predictable context management; when the system underestimates token counts, consolidation never fires and sessions may break. This also suggests a need for more transparent token usage display.
- **Satisfaction signals:** The WebUI UX fixes (hiding actions mid-turn, model preset display clarity) directly respond to user friction points reported in prior days; the community appears responsive and the maintainers are effectively addressing UX polish requests.
- **Use-case signals:** Features like session collaboration and side conversations indicate users are running multiple simultaneous agent tasks and comparing/coordinating across them. The dashScope provider PR suggests demand from the Chinese cloud ecosystem.

---

## 8. Backlog Watch

Items requiring maintainer attention:

- **[#5291 — [p2] fix(agent): persist subagent conversation transcripts](https://github.com/HKUDS/nanobot/pull/5291)** — Open since August 7th (9 days). Addresses a significant transparency gap (subagent reasoning is lost). No maintainer activity visible in the past 24h; given the project's focus on trust, this may deserve review priority.
- **[#5271 — [p0] fix(session): prevent stale background task saves from overwriting session data](https://github.com/HKUDS/nanobot/pull/5271)** — Open since August 6th (10 days), labeled **priority: p0** with a **conflict** tag. A p0 regression-level fix has been waiting over a week; the "conflict" annotation suggests it may require a merge-decision or rebase. Should be escalated.
- **[#5364 — [p2] feat(webui): temporary side conversations](https://github.com/HKUDS/nanobot/pull/5364)** — flagged with a **conflict** tag, possibly conflicting with the drag-and-drop reorganization PR (#5389) and the session-collaboration PR (#5358). Maintainers need to sequence these three features carefully.

**Notable:** No issues were found that were unanswered for an unusually long time; the maintainer cadence is generally healthy.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-16

## 1. Today's Overview

Hermes Agent is in a high-velocity maintenance and feature-delivery cycle. The project saw 41 active issues and 35 open PRs updated in the last 24 hours, with a healthy throughput of 9 closed issues and 15 merged/closed PRs. A significant portion of today's activity centers on cluster-fixing known pain points: computer-use capture bugs, Windows update failures, and gateway/session-state regressions are being systematically closed out via salvage PRs that consolidate earlier attempts. The maintainer team appears to be executing a "large-file decomposition" epic (#78647), which was marked complete today after a 12-day effort with 79 comments. Notably, there were **zero new releases** today, suggesting that fixes are being batched rather than shipped continuously. Several serious P1 regressions (Windows desktop restart killing gateways, session-flush failures) were closed today, indicating strong responsiveness to user-reported breakage.

## 2. Releases

No new releases were published on 2026-08-16. The most recent version referenced in issues is **v0.20.1** (with v0.20.0 and v0.19.1 also cited in bug reports). Users are running builds from late July / early August, so a release containing the batch of fixes merged today is likely imminent.

## 3. Project Progress

The project advanced significantly on several fronts today:

**Consolidated computer-use fixes (high impact):**
- **PR #87333** (closed/merged) — Salvage cluster: `fix(computer-use): placeholder-id targeting + macOS zero-display diagnosis`. This single PR folded in three prior attempts (#81340, #52949, #67259) and resolved the long-standing bug where a model emitting `pid=0` / `window_id=0` would silently break all app-scoped captures (issue #81333, closed today). Also addressed macOS SCK `display_count=0` headless issue (#67165, closed).
- **PR #39262**, **#52142**, **#63537** — Older computer-use fixes (vision capture via `get_window_state`, pid+window_id escape hatch, cua 0.7.1 window normalization) were also closed/merged today, mopping up the backlog.

**Core CLI / session improvements (multiple merged):**
- **PR #87346** — Per-terminal `--continue` via terminal breadcrumbs: bare `hermes -c` now resumes the session for the current tty/tmux pane, not the global most-recent. This is a thoughtful UX fix for multi-pane users.
- **PR #87345** — Import and resume sessions from Claude Code / Codex CLI (`hermes sessions import`, `hermes --resume @claude` / `@codex`). This is a notable market-positioning move — makes Hermes a drop-in successor for users of competing CLIs.
- **PR #87352** — Session picker upgraded with lifecycle status, message count, and delete-from-picker.
- **PR #87337** — Root-fixed a flaky sequential-timeout test (deterministic worker start), reducing CI noise that was blocking unrelated PRs.

**Gateway / platform fixes:**
- **PR #87354** (closed) — Telegram: rebind TypeHandler after lazy PTB install (fixes crash when SDK is missing at import time).
- **PR #87358** (open) — Discord: honor rate limits when auto-creating threads (retry-after vs. transient failure).

**Feature work:**
- **PR #87145** (open) — Signed short-lived download tickets for gated dashboards (WPS Office / external viewers).
- **PR #87349** (open) — URL toolbar for in-app browser preview (Desktop).
- **PR #87353** (open) — Configurable background-review iteration budget (replaces hardcoded 16).

## 4. Community Hot Topics

The most active threads reveal deep structural concerns about gateway lifecycle and session integrity:

- **#78647** (closed today, 79 comments): *Large-file decomposition epic — 20/20 done*. This 12-day refactoring campaign (slashing god-files) was the single most-discussed issue. The community engaged heavily with architecture decisions; its completion is a major project-health signal.

- **#66616** (open, 37 comments): *Skills-index watchdog: index stale/degraded*. An automated freshness probe has been failing for a month; the skills index (built by cron) is 29.8h old against a 26h limit. This is a reliability debt item — the bot itself is pinging maintainers, and the community is watching the response time.

- **#83683** (closed today, 33 comments): *Desktop restart reaps the live gateway but never relaunches (WeChat/QQ go silent)*. A P1 Windows regression from v0.20.0 that silenced all messaging on every desktop-app restart. Resolved today after 5 days; high user impact (33 comments indicates many users hit it).

- **#8457** (open, 21 comments): *Persistent session memory with cross-session search & auto-compression*. Long-standing feature request (since April) that keeps gathering momentum. The community clearly wants memoery that survives gateway restarts — this intersects with several recent bugs (e.g., #82001, #69107).

- **#82001** (closed today, 19 comments): *Agent flush does not adopt live continuation after compression — misleading "full disk" dialog*. P1 bug: sessions killed on compression while client still writing; misleading user-facing error blamed disk. Closed after 7 days.

**Underlying need:** The pattern across hot issues is gateway/session resilience. Users are running Hermes as a persistent messaging hub (WeChat, QQ, Telegram, Discord), and any lifecycle disruption (restart, compression, flush) causes session loss or silence. The community is explicitly asking for durable, restart-proof session state.

## 5. Bugs & Stability

**P1 (critical, resolved today):**
- **#83683** — Desktop restart kills live gateway (WeChat/QQ/Telegram go silent). *Closed* (fix merged).
- **#82001** — Agent flush loses session on compression; misleading "full disk" error. *Closed* (fix merged).
- **#83569** — Windows update self-locks `cryptography._rust.pyd`; 100% failure on any cryptography bump. *Closed* (fix in #73684 lineage, but see below).

**P2 (high, some open):**
- **#77394** (open, 4 comments) — *Windows update still fails on main*: `fix #73684` does not cover respawned gateways (paused gateway keeps `.pyd` locked). This is a live P2 regression — the P1 fix was partial.
- **#81048** (open, 8 comments) — *Security Tier 1: Approval timeout misattributed as explicit user denial.* Critical decision-attribution bug: silence (timeout) is reported as "User denied." This is a security-boundary concern that should be prioritized.
- **#58619** (open, 11 comments) — *Desktop spawns unbounded serve processes on reconnect* (no `--replace`). Memory/process leak ~1 per 15-30 min under API errors.
- **#87351** (open PR) — Cron executions ledger left open on interruption; fail-open fix proposed by BowmanStephen.

**P2 (resolved today):**
- **#67165** — macOS ScreenCaptureKit `display_count=0`; closed via PR #87333.
- **#81333** — `computer_use` discards `app=` on placeholder pid/window_id; closed via PR #87333.
- **#50530** — Google-antigravity integration issues (subagent crashes, 400s); closed (cannot-reproduce).

**New bugs filed today (P2):**
- **#87329** (open) — `hermes mcp login` OAuth callback port collision: headless host can't complete login (regression of #5344).
- **#87356** (open) — `cronjob update` schema omits provider/model params, making drift-guard remediation unreachable for agents.
- **#87292** (open) — Timeouts with slow local models (>16 TPS): WinError 10053 / "Provider unresponsive."
- **#87295** (open) — Second Desktop launch silently kills the running app's backend (connection status breaks).
- **#87093** (open) — Debian 13.6 install broken (uv.lock & npm install failed).

**Stability assessment:** The cluster-fix approach (salvaging multiple PRs into one) is effectively reducing the computer-use backlog. However, the recurrence of Windows update failures (#77394) despite a prior fix indicates that the Windows file-locking story is not yet fully solved. Watch this space.

## 6. Feature Requests & Roadmap Signals

- **Persistent session memory (#8457, 21 comments)** — Cross-session search + auto-compression; requested since April, still open. Given the recent session-loss bugs, this is likely to be a roadmap item for the next minor release, possibly as a "session store" layer.

- **Auto reasoning mode (#40306, open)** — ChatGPT-style auto-detect for thinking vs. direct response. Low priority (P3) but popularly requested; could land as a `reasoning_effort: "auto"` default.

- **Session import from Claude Code / Codex (#87345, merged today)** — This shipped as a feature; expect the team to advertise it as a migration draw.

- **Per-terminal session continuity (#87346, merged today)** — Bare `--continue` now context-aware. This positions Hermes as a strong terminal-native agent for multiplexer power-users.

- **Discord Feature Parity (#79564, meta-issue)** — Active campaign; PRs #87358 and #87344 show the team is systematically closing Discord API v10 gaps (rate limits, thread titles).

- **Credential-inheritance closure (#83565, tracker)** — Meta-issue for preventing child-process credential leaks (anchored by #77027). Security-focused; likely to drive several PRs in the next sprint.

- **Kanban zero-authority workers (#82591, tracker)** — Large 3-part plan for durable publication and god-file eradication. Part 1 posted; watch for breakout issues.

**Prediction:** The next release (v0.21) likely includes: persistent session memory (early form), Windows update file-lock fixes, Discord rate-limit handling, and the computer-use salvage cluster. Per-terminal session continuation is already in.

## 7. User Feedback Summary

**Satisfaction signals:**
- The large-file decomposition epic (#78647) closed with community engagement (79 comments) — users appreciate architectural cleanup that improves reliability.
- The computer-use salvage cluster (#87333) resolved a frustrating class of bugs (silent empty captures); users in those threads have been waiting weeks.
- Session import from Claude Code/Codex and per-terminal `--continue` are positively framed as quality-of-life wins.

**Pain points (recurring themes):**

- *Messaging gateway fragility is the #1 pain.* Users on Windows (#83683) and elsewhere hit silent messaging outages on restart; the "full disk" misdiagnosis in #82001 undermined trust — a user explicitly pointed out this was a session-identity handoff gap, not disk. *"WeChat/QQ go completely silent"* is the kind of failure that erodes daily-driver confidence.

- *Windows update remains broken for some users* (#77394, #83569). The `os error 5` on `cryptography/_rust.pyd` is a recurring frustration; even with no gateway running, the updater locks its own dependency. A user noted the fix from #73684 "does not cover respawned gateways" — partial fixes on Windows are not being received warmly.

- *Timeout misattribution as user denial* (#81048) is a security-concerning UX bug — a user noted that silence must never be reported as an explicit human decision. This is as much a trust/ethics issue as a functional bug. High priority to resolve.

- *OAuth MCP servers dropping mid-session* (#49543) — toolset instability over long gateway runs; users with Honeycomb MCP see 120s hangs and lock errors.

- *Telegraph/Telegram rich-message dollar-amount garbling* (#66746) is a small but visible correctness bug (bare `$` parsed as LaTeX) affecting financial use-cases.

**Adoption intent:** The popularity of "import Claude Code sessions" and "ChatGPT-style auto-reasoning" suggests users want Hermes as a superset — supporting their existing workflows (Claude/Codex) while adding persistence and multi-platform delivery.

## 8. Backlog Watch

These items need maintainer attention (either a fix, a comment, or a decision):

- **#66616** (open, 37 comments, needs-decision) — *Skills index stale/degraded*: The automated watchdog has been alerting for a month. This is a self-inflicted reliability issue; the index rebuild cron is failing. Needs infra fix or a decision to lower freshness threshold.

- **#58619** (open, 11 comments) — *Unbounded serve processes*: Memory leak on reconnect. No assignee / recent maintainer comment. P2 but growing in severity with sustained API errors.

- **#81048** (open, 8 comments, security Tier 1) — *Approval timeout misattributed as explicit denial*: This is a security-boundary bug that should not sit open. Needs a design decision (silence → "timeout", never "denied").

- **#8457** (open, 21 comments) — *Persistent session memory*: Feature request with high engagement; no maintainer comment indicating roadmap placement. At minimum, a triage comment acknowledging intent would help.

- **#87093** (open, needs-repro) — *Debian 13.6 install broken*: Install script failing on uv.lock and npm; if reproducible, this blocks a whole distro's user base.

- **#87329** (open) — *OAuth callback port collision*: "— #5344 regressed." A regression of an earlier fix; should be fast-tracked.

**Maintainer attention recommendation:** Prioritize #81048 (security), #66616 (self-inflicted reliability), and #77394 (Windows update recurrence). The project is otherwise in good health — high velocity, active community, and a clear cluster-fix pattern that is crushing the bug backlog.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-16

---

## 1. Today's Overview

PicoClaw shows **quiet but active** development status as of 2026-08-16. There are **no new issues or releases** in the last 24 hours, but **two open pull requests** are in flight, both flagged as stale after 9 days without merger. While no code has been merged or released this cycle, the pending PRs target **two meaningful production blockers** — AI model efficiency (prefix caching) and WhatsApp channel reliability (client version pinning). The project is otherwise **stable with no reported regressions or active bug reports**, though the stale status of both PRs suggests maintainers may need to prioritize review/deploy soon. Overall health reads as **stable, but with a small bottleneck at the review/merge stage**.

---

## 2. Releases

No new releases were published in this period. The last release remains unspecified. No version migration notes or breaking-change advisories to report.

---

## 3. Project Progress

No PRs were merged or closed in the last 24 hours. The two open PRs (both from the same contributor, `grrowl`) remain pending:

- **PR #3321** — *fix(agent): move dynamic context after history to preserve prefix caching* — Changes the placement of the per-request dynamic context block (current time, runtime, session, sender) from before conversation history to after it, to maximize prefix-caching efficiency.
- **PR #3320** — *fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)"* — Updates the pinned `whatsmeow` dependency to a version that WhatsApp still accepts, restoring the native WhatsApp channel functionality.

No feature work has advanced to merge in this cycle.

---

## 4. Community Hot Topics

There is **no active community discussion** to report — no issues have comments or reactions in the last 24 hours, and both open PRs carry zero thumbs-up reactions. The two PRs are the only community-contributed items in flight. While they lack explicit engagement signals, they address **underlying user pain points** that will likely attract attention once merged:

- **PR #3321** ([link](https://github.com/sipeed/picoclaw/pull/3321)) — Targets token cost and latency reduction through prefix caching, a concern for **heavy API users and self-hosters** who pay per token.
- **PR #3320** ([link](https://github.com/sipeed/picoclaw/pull/3320)) — Fixes WhatsApp integration, critical for **users relying on WhatsApp as their primary channel** — the channel is effectively dead until this lands.

---

## 5. Bugs & Stability

No new bugs, crashes, or regressions were reported in the last 24 hours. The one stability item on the radar is the **WhatsApp "client outdated (405)" failure**, which is **already fixed by pending PR #3320** ([link](https://github.com/sipeed/picoclaw/pull/3320)). Severity assessment:

- **Medium-High:** the WhatsApp channel is completely non-functional for affected users (connection drops ~5s after handshake, no reconnect). The fix is ready but unmerged — **risk is now on the merge timeline**, not the diagnosis.

No security-related issues are pending.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed in this period. Signals from the pending PRs point to two quality-of-life directions:

- **Performance optimization via prefix caching** (PR #3321) — If merged, this directly **reduces token cost and latency** for long conversations, making PicoClaw more viable for high-volume or API-cost-sensitive deployments. This could be a stepping stone toward **lower-cost long-context support**.
- **Channel reliability hardening** (PR #3320) — The motivation (version-pinned dependencies breaking third-party services) suggests the roadmap may benefit from **dependency-pinning policy** or **automated upstream-version tracking** to prevent future silent breakage of platform channels.

Prediction: the next release will likely include both PRs, given they are small, targeted, and authored by a repeat contributor.

---

## 7. User Feedback Summary

With no issues and no merged PRs in this window, direct user feedback is **silent**. Indirect signals from the pending PRs imply:

- **Pain point (cost):** Users are sensitive to token waste from suboptimal context ordering (the fix in #3321) — likely experienced as high API bills or slow responses on long sessions.
- **Pain point (reliability):** WhatsApp integration is a **primary channel** for some users; the silent 5-second-drop failure means users have been **losing the channel entirely** without clear error messaging.
- **Satisfaction:** No complaints or negative reports beyond these technical issues; the absence of new bug reports suggests general stability.

---

## 8. Backlog Watch

Both open PRs are **flagged as stale** (last updated 2026-08-15, created 2026-08-07) — they have sat for **9 days without review or merge**. These are the priority items needing maintainer attention:

| Item | Age (days) | Risk if ignored |
|------|-----------|-----------------|
| [PR #3321](https://github.com/sipeed/picoclaw/pull/3321) — prefix caching fix | 9 | Token waste and latency continue; contributor may abandon if merge takes much longer |
| [PR #3320](https://github.com/sipeed/picoclaw/pull/3320) — WhatsApp fix | 9 | WhatsApp channel remains **completely non-functional** for users; contributed fix rots |

**Recommendation:** Maintainers should prioritize review and merge of #3320 (user-facing outage) and #3321 (cost/efficiency) this week, ideally before the stale bot auto-closes them and the fixes are lost.

---

*Digest generated from PicoClaw GitHub activity, 2026-08-16.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-16

## 1. Today's Overview
NanoClaw is experiencing a **high-velocity development day**, with 22 PRs updated in the last 24 hours — the vast majority (19) still open and under active review. The project shows strong momentum from the **core-team contributor @gavrielc**, who authored 13 of today's PRs, addressing architectural seams, channel adapter capabilities, and critical delivery fixes. Activity is concentrated in **feature development** (channel integrations, permissions policies, context management) and **stability hardening** (container heartbeats, poll-loop leaks, delivery routing). There were no new releases and no open issues today, suggesting the maintainers are prioritizing code velocity over public issue triage.

## 2. Releases
**No new releases** were published in the last 24 hours. The last release remains the February rename to **DotClaw** (PR #37), which transitioned the project from WhatsApp to Telegram. No migration notes or breaking changes are pending release.

## 3. Project Progress
Three PRs were merged/closed today:

- **[#3268 — CLOSED] fix(poll-loop): stopped loops leaked their active query's follow-up poller** ([link](https://github.com/nanocoai/nanoclaw/pull/3268)) — Fixed a resource leak where an aborted poll loop left its active query's 500ms follow-up poller running. Root cause was `runPollLoop` only checking the abort signal between iterations, not while parked inside `processQuery`.
- **[#37 — CLOSED] Rename to DotClaw and switch from WhatsApp to Telegram** ([link](https://github.com/nanocoai/nanoclaw/pull/37)) — Long-pending project rebrand and WhatsApp→Telegram migration finally closed after 7 months.
- **[#3269 — OPEN] feat(channels): add Telegram channel integration** ([link](https://github.com/nanocoai/nanoclaw/pull/3269)) — The timing of #37's closure aligns with this new Telegram adapter PR, confirming the platform transition is now the primary channel focus.

**Notable feature advances (open, awaiting review):**
- **Permissions system** (#3266): New interceptor seam for channel-registration approval flows, letting modules handle escalation before registration cards are built.
- **Agent creation** (#3265): `suppressCreatedNotify` flag to suppress success notifications while preserving error alerts.
- **Cross-session context** (#3257): Fan-out of session-echo context rows, DM backfill, and new `ncl sessions history` command — a major capability for multi-session agent groups.
- **Channel adapter surface** (#3261, #3262): Rich presence (status-bearing typing indicators), DM-thread normalization, and app-context capture for platforms with thread-based DM surfaces.

## 4. Community Hot Topics
The highest-activity PRs today (by comment count, all from @gavrielc):

- **[#3261 — channels: optional adapter capabilities**](https://github.com/nanocoai/nanoclaw/pull/3261) — Widens the adapter surface with optional `setTyping` status lines, `setThreadTitle`, and `setSuggestedPrompts`. Signals demand for **richer, platform-native presence and UX** in channel adapters.
- **[#3257 — Cross-session context**](https://github.com/nanocoai/nanoclaw/pull/3257) — With multiple concurrent sessions, the need for **context sharing and history visibility** is a clear community priority for group-agent workflows.
- **[#3260 — 'decline_notify' unknown-sender policy**](https://github.com/nanocoai/nanoclaw/pull/3260) — A fourth `unknown_sender_policy` alternative: politely decline in DM while sending the owner a one-line FYI. Addresses the tension between **security (strict) and UX (approval cards)**.
- **[#3254 — two-phase inbound batch selection**](https://github.com/nanocoai/nanoclaw/pull/3254) — Context rows (trigger=0) no longer crowd out due task rows in capped batches. A **critical correctness fix** for session scheduling.

**Underlying need:** The community is pushing NanoClaw toward **production-grade multi-session, multi-platform deployments** — better context isolation, richer channel capabilities, and defensible unknown-sender policies.

## 5. Bugs & Stability
Bugs reported/fixed today, ranked by severity:

1. **[HIGH — #3251] Heartbeat stall during rate-limiting** ([link](https://github.com/nanocoai/nanoclaw/pull/3251)) — Container heartbeat only touched on API events; a rate-limited/hung Claude API could stall heartbeats for 30+ minutes, triggering **false stale-container kills**. Fix PR open from @DawoudIO.
2. **[HIGH — #3252] Idle container exempt from absolute-ceiling kill forever** ([link](https://github.com/nanocoai/nanoclaw/pull/3252)) — `decideStuckAction` skips the absolute-ceiling kill whenever a container has no `.heartbeat` file — a **permanent exemption** with no time limit. Fix PR open.
3. **[MEDIUM — #3255] Outbound delivery resolves wrong channel row** ([link](https://github.com/nanocoai/nanoclaw/pull/3255)) — Multi-identity setups resolved the target messaging group by platform address alone, picking an **arbitrary sibling instance**. Fix PR open.
4. **[MEDIUM — #3254] Context rows crowd out task rows in batch** ([link](https://github.com/nanocoai/nanoclaw/pull/3254)) — Backlogged trigger=0 context could prevent due tasks from ever reaching the agent. Fix PR open.
5. **[MEDIUM — #3250] Telegram Markdown sanitizer downgrades bold→italic** ([link](https://github.com/nanocoai/nanoclaw/pull/3250)) — The legacy-Markdown sanitizer corrupts `**bold**` to italics in Telegram. Fix PR open.
6. **[LOW — #2752] Discord URL-only attachments never reach agent** ([link](https://github.com/nanocoai/nanoclaw/pull/2752)) — Pasted text and images appear as bare tags. Open since June; a fix PR exists.

**Almost all bugs have fix PRs open today — strong responsiveness from the core team.**

## 6. Feature Requests & Roadmap Signals
Strong roadmap signals from today's PR activity:

| Feature | Signal |
|---------|--------|
| **Telegram as first-class channel** | #3269 (adapter), #3250 (sanitizer fix), #37 (renamed project) — Telegram is now the **flagship integration** |
| **Rich channel capabilities** | #3261, #3262 — typing status, thread titles, suggested prompts, app-context capture |
| **Multi-session context sharing** | #3257 — fan-out, backfill, history CLI. Likely a **headline feature** in the next minor release |
| **Granular permission policies** | #3260, #3266 — new unknown-sender policy, registration-card interceptors |
| **Database schema evolution** | #3256 — `detached_at` column (migration 022) for removed-from-conversation tracking |
| **Operational tooling** | #3259 — skill-apply heading fixes, headless-browser URL surfacing |

**Prediction:** The next release will likely be a **minor version** (v0.x) including the Telegram adapter, cross-session context, and the batch-selection/delivery-routing fixes. The rapid accumulation of `[core-team]` PRs suggests a coordinated feature push.

## 7. User Feedback Summary
- **Pain point — Rate-limiting false kills:** The heartbeat stall (#3251) is a **critical reliability issue** for production users; the community fix from @DawoudIO was rapid and well-scoped.
- **Pain point — Multi-identity routing:** Outbound delivery hitting the wrong instance (#3255) indicates real-world deployments **run multiple bot identities** in shared rooms, and the current routing is fragile.
- **Pain point — Context starvation:** Context rows crowding out task rows (#3254) shows users are **running agent groups with heavy context loads** that can starve actual work.
- **Satisfaction signal:** The volume of core-team PRs (13 of 22 today) suggests **high internal confidence** and a **well-greased contribution pipeline**. The `follows-guidelines` tag on many PRs shows the contribution process is working.
- **Frustration (old):** Discord URL-only attachments (#2752, open since June) — users still wait on a fix. It's the **longest-open PR with a fix ready**.

## 8. Backlog Watch
Items requiring maintainer attention:

- **[#2752 — Discord URL-only attachments staging](https://github.com/nanocoai/nanoclaw/pull/2752)** — Open since **June 12** (over 2 months). A complete fix exists; it's **blocked without clear reason**. Likely needs rebase + review from the new chat-sdk bridge owners.
- **[#37 — DotClaw rename](https://github.com/nanocoai/nanoclaw/pull/37)** — Closed today after 7 months. Worth verifying the **rename is fully propagated** (docs, Docker images, CI pipelines) in a follow-up release.
- **No open issues in the triage queue** — This is **unusual** and suggests either (a) users report through PRs directly, or (b) issues are being auto-closed. Maintainers should verify the **issue intake pipeline is healthy** and not silently dropping user reports.

---

**Overall health:** Excellent velocity, strong core-team engagement, and most stability issues get a fix PR within 24 hours. The main risks are: (1) **PR review bottleneck** (19 open PRs awaiting review), (2) the **Discord attachment backlog**, and (3) the **unusually empty issue queue** warranting verification.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for **2026-08-16**.

---

# NullClaw Project Digest: 2026-08-16

## 1. Today's Overview
NullClaw is showing signs of a **low-activity but steady** development cycle. Within the last 24 hours, there has been exactly one new Issue, one new Pull Request, and zero releases, indicating the project is in a "code review and planning" phase rather than a "shipping" phase. The single new PR focuses on a sophisticated performance optimization for local agent runs, while the new Issue highlights a user demand for network flexibility. Maintainer attention is currently required to review the single open PR to keep momentum going. Overall health appears stable with no critical regressions reported.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
**No PRs were merged or closed today.** However, a significant new contribution was opened:

- **[PR #987: feat(agent): loop hygiene for long local tool-heavy runs](https://github.com/nullclaw/nullclaw/pull/987)** (Open)
  - **Author:** vernonstinebaker
  - **Summary:** This PR addresses memory and context-window bloat during long-running local automation. It introduces:
    - **Cache-friendly prompts:** Splitting the system prompt into a stable prefix and a variable tail to improve caching efficiency.
    - **Output Compression:** Compressing tool outputs before history injection (`result_compress.zig`) while keeping full detail in observer logs.
    - **Loop Prevention:** Logic to detect and halt identical recursive calls.
  - *Significance:* This is a high-value architectural improvement for power users running complex, local-first workflows, addressing a likely pain point with token usage and infinite loops.

## 4. Community Hot Topics
There is minimal discussion volume today, but one clear signal stands out:

- **[Issue #988: [enhancement] proxy support](https://github.com/nullclaw/nullclaw/issues/988)** (Open, 0 comments)
  - **Request:** Support for HTTP(S) and SOCKS(5h) proxies for providers.
  - **Analysis:** While this request has no comments or reactions yet, it signals a growing user base that may be operating behind corporate firewalls, using privacy tools, or routing traffic through regional endpoints. This is a common requirement for enterprise adoption and network-restricted environments.

## 5. Bugs & Stability
**No crashes, regressions, or bug reports** were filed in the last 24 hours. The project appears currently stable. The opens PR #987 (loop hygiene) serves as a preemptive fix for potential stability issues (infinite loops) in long-running sessions.

## 6. Feature Requests & Roadmap Signals
- **Proxy Support (Issue #988):** This is the only explicit feature request today. While likely not a "next version" critical item, it is a strong candidate for a future minor release (v0.x + 1) as it involves networking layer fixes rather than core agent logic.
- **Performance Enhancements (PR #987):** Though a code contribution rather than a request, the focus on "long local tool-heavy runs" indicates the community is pushing the project toward heavier, production-grade local automation. Expect more optimizations regarding context management in future releases.

## 7. User Feedback Summary
- **Pain Points:** The proxy request suggests friction for users in restricted networks or those using VPNs/SOCKS tunnels.
- **Use Cases:** The PR #987 specifically targets heavy local tool usage, indicating a user base running extensive local code execution and file manipulation rather than just simple API calls.
- **Satisfaction:** No negative sentiment was expressed in the last 24 hours; the lack of bug reports suggests a stable experience for current users.

## 8. Backlog Watch
While there are no "old" items in today's data, the following requires immediate maintainer attention to prevent stagnation:

- **[PR #987: feat(agent): loop hygiene](https://github.com/nullclaw/nullclaw/pull/987)**: This PR has been open for 24 hours without maintainer comment. Given its technical depth (new compression library), maintainers should review or at least triage it promptly to keep the contributor engaged and avoid merge conflicts building up.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-16

## 1. Today's Overview

IronClaw is in a period of intense performance-optimization and infrastructure-hardening work. The last 24 hours saw 27 issues updated (21 closed) and 12 PRs updated (5 merged/closed), with zero new releases. The project shows a mature codebase undergoing systematic efficiency audits, with a notable cluster of "Tier 1/2" performance issues (heartbeat journaling, thread-index writes, prune gates) that are being closed quickly with corresponding fix PRs. Another major theme is **production quality**: a deep review of PR #7634 (prepared-context turns switchover) has spawned six new open issues and four follow-up PRs, indicating a rigorous, test-driven culture. The live-canary harness is also being repaired after a 30/30 red streak, signaling active attention to CI reliability. Overall, the project health is strong: issues are triaged, assigned, and resolved in a matter of days, and the engineering team is aggressively eliminating waste and dead code.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

Five PRs were merged or closed, representing significant steps forward:

- **perf(threads): coalesce thread index touches** (#7676, [merged](https://github.com/nearai/ironclaw/pull/7676)) — Merged. Coalesces bursty per-thread activity touches into bounded writes, preserving multi-worker correctness with CAS updates. Implements the fix for issue #7596.

- **perf: reduce trigger and outbound state writes** (#7629, [merged](https://github.com/nearai/ironclaw/pull/7629)) — Merged. Moves run-history pruning from every running-row update to the initial fire claim, cutting correlated-subquery DELETEs per fire. Addresses #7595.

- **perf(processes): remove heartbeat journal churn** (#7628, [merged](https://github.com/nearai/ironclaw/pull/7628)) — Merged. Stops appending permanent heartbeat journal rows (saves ~18 rows/turn) and widens turn-runner heartbeat interval to 15s. Implements #7593 conservatively.

- **chore(agents): refresh codebase knowledge graph** (#7670, [closed](https://github.com/nearai/ironclaw/pull/7670)) — Automated CI refresh of the committed codebase-memory snapshot.

- **feat(unbound-turns): complete the switchover to prepared-context turns** (#7634, [closed](https://github.com/nearai/ironclaw/pull/7634)) — Closed. A massive XL PR (stacked on #7562) that completes the unbound-turns model, shipped all documented follow-ups, and passed a 71-clause conformance audit. This is the source of today's new follow-up issues.

Additionally, the 21 closed issues represent a broad sweep of Reborn migration closeout, including removing legacy paths (#4629), fixing SSO access mismatches (#4992), and addressing scheduler heartbeat misclassification (#5239).

## 4. Community Hot Topics

The most active discussion is the trajectory benchmark system:

- **[Issue #467 — Trajectory benchmark system for agent quality evaluation](https://github.com/nearai/ironclaw/issues/467)** — Open for 5.5 months with 4 comments. This is a foundational, long-running architectural proposal for two-layer evaluation (hard assertions + LLM-as-judge) of agent trajectories. Its continued open status suggests it may be the next major system-level feature.

Other active threads are all follow-ups to the #7634 review (each with 1 comment each, from reviewer to issue author):

- **[#7672 Typed ToolChoice](https://github.com/nearai/ironclaw/issues/7672)** — Proposes retiring the overloaded `tool_choice: Option<String>` across six provider encoders in favor of a typed enum.
- **[#7673 BudgetLedger accounting refinements](https://github.com/nearai/ironclaw/issues/7673)** — Two bounded double-charge and durability gaps in the capability budget chokepoint.
- **[#7671 Capability dispatch stack pressure](https://github.com/nearai/ironclaw/issues/7671)** — A stack-overflow follow-up solved by chain-boxing but still near the limit.
- **[#7674 Symbol-level allowlist architecture tests](https://github.com/nearai/ironclaw/issues/7674)** — Requests stricter architecture governance for the openai-compat → threads dependency edge.

The underlying need across these threads is **code quality and sustainability**: the team is using deep code review to drive architectural improvements rather than just bug fixes.

## 5. Bugs & Stability

Several bugs were active this week, none critical but all warranting attention:

| Severity | Issue | Description | Fix PR |
|---|---|---|---|
| **High (systemic)** | [#7675](https://github.com/nearai/ironclaw/issues/7675) | E2E `qa_6c` gmail-to-sheet flake cascades across the whole provider-contracts session — intermittent resource-class capability failure | [#7634](https://github.com/nearai/ironclaw/pull/7634) review (in progress) |
| **Medium** | [#7673](https://github.com/nearai/ironclaw/issues/7673) | BudgetLedger double-charges on truncated launches; charge durability gap on error paths | Open follow-up |
| **Medium** | [#7671](https://github.com/nearai/ironclaw/issues/7671) | Capability dispatch still near test-stack edge (2 MiB) after chain-boxing fix; risk in other test suites | Partially fixed in #7634 (`f1f396cd8`) |
| **Low** | [#7674](https://github.com/nearai/ironclaw/issues/7674) | No symbol-level allowlist for openai-compat → threads edge; future refactors could silently widen deps | Open follow-up |
| **Closed (fixed)** | [#5237](https://github.com/nearai/ironclaw/issues/5237) | Reborn debug logging floods Railway with Cranelift/Wasmtime debug output | Closed |
| **Closed (fixed)** | [#5239](https://github.com/nearai/ironclaw/issues/5239) | Scheduler misclassifies stale terminal heartbeat as runner failure | Closed |

The #7675 issue is significant because it means the **whole provider-contracts test session is red** due to a harness defect (not a product bug) — this is being addressed by PR #7679.

## 6. Feature Requests & Roadmap Signals

Strong signals from today's issue activity:

- **Performance epic (#7591) is nearly complete.** Three Tier-1 issues (#7595, #7596, #7593) and one Tier-2 (#7599) were closed this week; their corresponding PRs are merged or open. Remaining: `prune_run_history` recovery-path testing and Tier-3 items.

- **The trajectory benchmark system (#467)** remains the single biggest untouched feature — it's been open 5.5 months with no PR. The team may be waiting for the unbound-turns switchover to stabilize.

- **Prepared-context turns (#7634)** has landed, and its six review follow-ups form a clear roadmap: typed `ToolChoice` (#7672), BudgetLedger accounting (#7673), symbol-level architecture tests (#7674), and stack-pressure mitigation (#7671). These are likely candidates for the next minor release.

- **Deterministic no-result suppression for automations (#7651)** is an open XL PR — the model will now deterministically derive whether to suppress notifications, based on explicit user intent.

- **OMP core-tool contract (#7491)** — an open XL PR that standardizes six exact bare tool names (`read`, `write`, `edit`, `glob`, `grep`, `bash`), removing legacy spellings entirely.

**Prediction for next version:** The performance-epic deliverables (heartbeat, journal, prune, coalescing) will ship in the next patch; the unbound-turns follow-ups and typed ToolChoice would make the next minor feature release.

## 7. User Feedback Summary

Inferred from bug reports and issue comments:

- **User pain point — "wrong results from IronHub search":** Issue #6821 — the agent reported 3 tools when the signed catalog had 18, and hallucinated 20 non-catalog skills. This is a hallucination/catalog-listing correctness issue that undermines trust in the install experience. Now closed, but this class of bug (search vs. catalog) is a high-visibility user-facing failure.

- **User pain point — Telegram forum-topic delivery:** Issue #6829 — replies without `message_thread_id` land in the wrong supergroup. This is a privacy/visibility bug that needs end-to-end coverage; closed this week.

- **Developer pain — Local-dev SSO mismatch (#4992):** Railway-hosted automations fail before thread creation is a confusing, hard-to-debug deployment blocker; closed.

- **Developer pain — CI red 30/30 runs (#7679):** A red live canary for 30 straight runs is severely damaging to developer trust in the CI signal; a comprehensive fix PR is open to stop harness bugs from reddening green runs — a direct response to this frustration.

- **Positive signal — MCP auth failures classified as Client, not AuthRequired (#6835):** Closed. This was a correctness gap in error classification; its quick closure indicates good operator feedback loops.

## 8. Backlog Watch

Items that have been open too long or are otherwise at risk of stagnation:

- **[Issue #467 — Trajectory benchmark system](https://github.com/nearai/ironclaw/issues/467)** — ⚠️ Open for **167 days** with only 4 comments and 0 reactions. This is the single biggest "roadmap" item with no owner, no PR, and no announced milestone. High risk of drifting into dead-letter territory. **Needs maintainer decision:** commit to it or close as "won't-do-now".

- **[Issue #5672 — SSE stream_events drain-and-poll](https://github.com/nearai/ironclaw/issues/5672)** — Open 41 days, closed today. Was a performance debt item (1–3s polling drains from projection store). Now closed, likely deferred rather than fixed — verify the closed state is intentional and not a "closed without resolution".

- **No new features added in last 24h** — All today's issues are follow-ups from PR review. This suggests the team is in a consolidation phase, not a greenfield phase, which is fine, but watch for feature-starved users.

- **PR #7516 (new contributor, open 4 days)** — The IronHub WebUI operator surface PR from `neo-sky` — its status should be monitored for maintainer responsiveness, as it's a new-contributor PR with risk of stalling.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

## LobsterAI Project Digest — 2026-08-16

### 1. Today's Overview

LobsterAI saw moderate activity over the past 24 hours with 18 issues and 6 PRs updated, though most items are being closed by the stale bot rather than receiving fresh attention. The majority of closed issues (16 of 18) are older items from April–May that were auto-closed, indicating a backlog cleanup sweep. Two issues remain open (#1903, #2046) concerning membership login failures and a comprehensive Agent memory system proposal. PR activity is minimal: one functional fix was closed (preserving manually-added plugin load paths in config sync), one cron-related fix was closed, and the remaining four open PRs are all Dependabot CI dependency bumps awaiting merge. No new releases were published. Overall, the project is in a **stabilization/maintenance phase** — no significant new features shipped this period, but incremental fixes continue to land.

---

### 2. Releases

No new releases were published in the last 24 hours. The most recent release activity appears to predate this window.

---

### 3. Project Progress

**Merged/Closed PRs (2):**

- **#1879 — fix: preserve manually-added plugin load paths on config sync** (closed)  
  [Link](https://github.com/netease-youdao/LobsterAI/pull/1879)  
  A meaningful fix from user `gvaiis`: when LobsterAI writes `openclaw.json` via `OpenClawConfigSync.sync()`, it was replacing `plugins.load.paths` with only the LobsterAI-managed third-party extensions directory, silently discarding manually-added paths (e.g., community plugins like `memory-lancedb-pro` installed via `pm install`). See PR link for full fix details.

- **#2234 — fix(openclaw): cron yield descendant finalization** (closed)  
  [Link](https://github.com/netease-youdao/LobsterAI/pull/2234)  
  Fixes a bug where child agent completion events after `sessions_yield` could not drive the parent agent to continue. Adds yield continuation loop during cron finalization, covering three scenarios (normal/parallel cron/serial cron sub-agents), and blocks active requester steering from writing completion events into already-ended runs.

**Open PRs (4, all Dependabot CI/dependency bumps):**
- #2164 — trufflesecurity/trufflehog 3.88.30 → 3.95.5
- #2165 — actions/checkout 4 → 6
- #2166 — dorny/paths-filter 3 → 4
- #2167 — actions/stale 9.1.0 → 10.3.0

These are routine maintenance and have been open since **June 15** without merge — CI dependency hygiene is lagging.

---

### 4. Community Hot Topics

All issues in this window received minimal engagement (0 👍 each, 2–4 comments). The most discussed items:

- **#1849 — Infinite NO_REPLY or truncated output during follow-up questions** (4 comments, closed)  
  [Link](https://github.com/netease-youdao/LobsterAI/issues/1849)  
  Task prematurely marked "complete" while model still outputting, causing no data response in UI. Root-cause discussion around race conditions in task state management.

- **#1878 — WeChat IM bot: cannot enter verification code after QR scan** (4 comments, closed)  
  [Link](https://github.com/netease-youdao/LobsterAI/issues/1878)  
  Newest WeChat client requires 6-digit code entry in OpenClaw after QR scan, but the UI has no input field — blocking WeChat bot setup entirely.

- **#1903 — Membership login frequently fails (OPEN)** (3 comments)  
  [Link](https://github.com/netease-youdao/LobsterAI/issues/1903)  
  Users cannot log into paid membership, blocking access to NetEase paid models. This is an **active, unresolved** issue.

- **#1988 — qwen3.6-plus forced to NetEase model after update** (3 comments, closed)  
  [Link](https://github.com/netease-youdao/LobsterAI/issues/1988)  
  After update, Alibaba Bailian Coding Plan users get forced to NetEase's own model (no quota) even with config overrides — config is forcibly overwritten.

- **#2046 — Product Proposal: Agent Memory System (OPEN)** (2 comments)  
  [Link](https://github.com/netease-youdao/LobsterAI/issues/2046)  
  Detailed proposal to persist session titles/metadata to filesystem so agents can auto-detect and retrieve across sessions. Priority-ordered recommendations.

**Trend:** The community's strongest recurring themes are **agent memory/session persistence** (#2040, #2041, #2046), **login/model access friction** (#1903, #1988), and **IM integration reliability** (#1878).

---

### 5. Bugs & Stability

| Severity | Issue | Description | Status |
|----------|-------|-------------|--------|
| 🔴 High | [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) | Membership login fails frequently — blocks paid model access | **OPEN** — no fix in sight |
| 🔴 High | [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) | Model config forcibly overwritten to NetEase's model (no quota) — breaks non-NetEase models like qwen3.6-plus | Closed (stale) — no fix confirmed |
| 🟠 Medium | [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) | Infinite NO_REPLY / truncated output during follow-ups; task completes early | Closed (stale) — root cause identified, no fix PR seen |
| 🟠 Medium | [#2017](https://github.com/netease-youdao/LobsterAI/issues/2017) | Local run fails: "OpenClaw runtime (cfmind) not detected" — cannot input or create tasks | Closed (stale) — build script issue |
| 🟠 Medium | [#1993](https://github.com/netease-youdao/LobsterAI/issues/1993) | Desktop app shows "AI engine connection lost" repeatedly; IM bot works fine | Closed (stale) — no fix mentioned |
| 🟡 Low | [#1971](https://github.com/netease-youdao/LobsterAI/issues/1971) | Scroll breaks after large elements (Mermaid) in session due to virtual scrolling | Closed (stale) — root cause explained, no fix PR |
| 🟡 Low | [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) | Email SKILL path traversal vulnerability (attachment name without sanitization) | Closed (stale) — security concern, no fix confirmed in this window |

**Notable:** Most bugs were **auto-closed as stale** rather than fixed. Only PR #2234 directly addresses a functional bug (cron yield). The severity of #1903 and #1988 (blocks revenue-generating paid model access) remains unresolved.

---

### 6. Feature Requests & Roadmap Signals

Repeatedly requested capabilities (signal strength in parentheses):

1. **Agent memory & cross-session persistence** (🔴 Strong — 3+ issues: #2040, #2041, #2046)  
   Users consistently demand agents that remember across sessions — title persistence to filesystem, auto-retrieval of historical context, structured memory. The project mentions a `skill-self-evolver` and `.learnings/` + `memory/` in discussions, suggesting this is being actively explored internally. **High likelihood of upcoming work.**

2. **Dreaming mode fix** (#2039) — `/dreaming on` writes config to a path `memory-core` doesn't recognize; requires schema change. Community has provided a workaround script. **Moderate likelihood** a proper fix lands.

3. **Third-party agent integration** (#1880, #2016) — Users want to plug in Hermes Agent and OpenHuman engine alongside OpenClaw. **Low-moderate likelihood.**

4. **UI/UX polish** (#1836, #1920, #1921) — Redesign requests and skeleton-screen improvements. Low urgency but recurring.

5. **OpenClaw gateway event broadcasting** (#2036) — `agent:turn`/`agent:loop` events for real-time disk persistence. Technical enhancement that would enable better logging/live state. **Moderate likelihood** for power users.

**Prediction:** The **next version will likely focus on memory system improvements** given the volume and depth of community feedback, possibly a session-title-sync feature or memory-core schema fixes.

---

### 7. User Feedback Summary

**Pain points (most recurring):**

- **Login & model access friction** — Users frustrated that paid membership login fails (#1903) and that config files are forcibly overwritten, breaking model selection (#1988). This directly impacts the paid-tier experience and is likely priority for the team.
- **Setup friction** — Local builds failing due to runtime detection (#2017), WeChat bot configuration blocked by missing verification-code input (#1878).
- **UI quality criticism** — "Compared to competitors, it's too ugly, uncomfortable to use" (#1836). Users compare unfavorably with Open WebUI.
- **Agent memory gaps** — "Each new session exists independently; agent cannot perceive/retrieve/associate historical conversations, causing significant information loss and duplicated effort" (#2046).
- **Stability under load** — Large content (Mermaid diagrams) breaking scroll (#1971), follow-up turns silently failing (#1849).

**Satisfaction signals:** Users are engaged enough to write deep technical analyses and proposals (e.g., #2040, #2041, #2046), indicating an active power-user community invested in the project's evolution — a positive health signal despite the bugs.

---

### 8. Backlog Watch

Items that need maintainer attention:

| Issue/PR | Age (days) | Why it matters |
|----------|-----------|----------------|
| [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) — Membership login fails | 101 days (OPEN) | Revenue-blocking bug; still unfixed. Needs maintainer response/fix. |
| [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) — Agent memory proposal | 83 days (OPEN) | Detailed, actionable, high-community-value feature proposal; deserves triage/roadmap status. |
| [#2164–#2167](https://github.com/netease-youdao/LobsterAI/pulls/2164) — Dependabot CI bumps | 62 days (OPEN) | Routine CI dependency updates sitting unmerged for 2 months — signals CI maintenance bottleneck. |
| [#2039](https://github.com/netease-youdao/LobsterAI/issues/2039) — Dreaming mode schema bug | 85 days (CLOSED stale) | Known upstream bug with user-provided workaround script; should be tracked upstream and re-opened if fixed. |
| [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) — Forced model overwrite | 93 days (CLOSED stale) | High-impact user-facing bug; closed without visible fix — should be re-evaluated. |
| [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) — Path traversal vulnerability | 102 days (CLOSED stale) | Security issue auto-closed; should confirm a security fix was released or re-open. |

**Blockers on the horizon:** The stale-bot cleanup is masking a growing backlog of unresolved bugs. The project should re-evaluate stale-closed high-severity issues and prioritize: (a) login stability (#1903), (b) model config integrity (#1988), and (c) memory roadmap responses (#2046).

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-16

## 1. Today's Overview
Moltis saw a notably active development day, with 16 pull requests updated in the last 24 hours—14 of which were merged or closed—alongside 2 closed bug issues. This marks a high-velocity period focused primarily on security hardening, infrastructure fixes, and substantial new feature integrations. The merge rate is strong, and the absence of open regressions suggests a stable mainline. Key areas of focus include a major security patch addressing arbitrary file write vulnerabilities, new durable connectors (calendar, email, channel), Slack native UI enhancements, and a new remote sandbox backend. No new releases were published today, indicating that these changes are accumulating for a future version bump.

## 2. Releases
No new versions were released in the last 24 hours. The project appears to be in an accumulation phase between releases, with multiple significant features and fixes merged today likely targeting the next minor or patch version.

## 3. Project Progress
Fourteen PRs were merged/closed today, covering a wide range of improvements:

- **Security Fixes (Critical)** — [#1180](https://github.com/moltis-org/moltis/pull/1180) hardens model and zip paths against arbitrary file write attacks, closing two bug classes that could lead to code execution via malicious zips or HuggingFace repos. [#1179](https://github.com/moltis-org/moltis/pull/1179) verifies node pairing signatures, binding `node.pair.verify` to the server-issued pending request to prevent key/challenge substitution.
- **Infrastructure Fixes** — [#1191](https://github.com/moltis-org/moltis/pull/1191) fixes the sandbox build failure by pointing the gogcli module path to the new `openclaw` org, and [#1192](https://github.com/moltis-org/moltis/pull/1192) applies the same org-rename fix to the wacrawl skill's install metadata.
- **Session Management** — [#1182](https://github.com/moltis-org/moltis/pull/1182) allows deleting and archiving the `main` session, resolving a long-standing limitation.
- **New Features** — [#1190](https://github.com/moltis-org/moltis/pull/1190) adds durable, provider-neutral calendar, channel, and email connectors with atomic snapshots, scheduling, and local full-text search. [#1195](https://github.com/moltis-org/moltis/pull/1195) introduces Slack native live task cards with privacy-preserving opaque per-run IDs. [#1197](https://github.com/moltis-org/moltis/pull/1197) enables starting agent chats directly from the command palette. [#1198](https://github.com/moltis-org/moltis/pull/1198) routes OpenAI reasoning tool calls through the Responses API for better tool+reasoning compatibility.
- **Memory Backend** — [#1158](https://github.com/moltis-org/moltis/pull/1158) adds an experimental Zvec vector database memory backend, feature-gated behind the `zvec` cargo feature.
- **Dependency Updates** — Two dependency bumps: [#1200](https://github.com/moltis-org/moltis/pull/1200) (postcss, js-yaml) and [#1184](https://github.com/moltis-org/moltis/pull/1184) (undici to 7.29.0).
- **macOS Fix** — [#1194](https://github.com/moltis-org/moltis/pull/1194) guards empty bash array expansions for macOS bash 3.2 compatibility in the `just local-validate-full` recipe.

## 4. Community Hot Topics
The most active discussion today revolves around the security fixes:
- **[#1180 — Harden model and zip paths](https://github.com/moltis-org/moltis/pull/1180)** — This security patch has drawn attention as it addresses a potentially severe arbitrary-file-write vulnerability affecting user credentials and configs. The author, tsauvajon, noted they wanted security fixes in before using Moltis, signaling that security posture is a gating factor for adoption.
- **[#1179 — Verify node pairing signatures](https://github.com/moltis-org/moltis/pull/1179)** — Similarly security-focused, this fix closes a verification gap in the node pairing flow. The author's comment ("I'd like to use Moltis, but I've got a couple of security fixes I'd like to get in before doing so") reveals a clear pattern: security gaps are a barrier to entry for new users.
- **[#1158 — Zvec memory backend](https://github.com/moltis-org/moltis/pull/1158)** — The experimental vibe-coded vector database backend has generated interest as an alternative to the default memory implementation.

## 5. Bugs & Stability
- **Critical: Arbitrary file write via zip/HuggingFace (fixed)** — [#1180](https://github.com/moltis-org/moltis/pull/1180) addresses two bug classes allowing malicious repos to overwrite trusted files and achieve code execution. Fix merged today.
- **High: Node pairing signature verification bypass (fixed)** — [#1179](https://github.com/moltis-org/moltis/pull/1179) closes a vulnerability where callers could supply their own key or challenge during node pairing. Fix merged today.
- **Medium: Sandbox build failure (fixed)** — The `moltis sandbox build` command failed on all pre-built images due to a moved GitHub org, resolved in [#1191](https://github.com/moltis-org/moltis/pull/1191).
- **Medium: wacrawl skill install broken (fixed)** — The skill's Go install fallback was broken due to an org rename, resolved in [#1192](https://github.com/moltis-org/moltis/pull/1192).
- **Low: macOS bash 3.2 compatibility (fixed)** — The `just local-validate-full` recipe crashed on macOS due to unbound variables in array expansions, resolved in [#1194](https://github.com/moltis-org/moltis/pull/1194).
- **Low: "main" session cannot be deleted/archived (fixed)** — Long-standing limitation documented in [#1132](https://github.com/moltis-org/moltis/issues/1132), resolved in [#1182](https://github.com/moltis-org/moltis/pull/1182).

## 6. Feature Requests & Roadmap Signals
Several active PRs provide strong signals for upcoming features:
- **[#1199 — Coder remote workspace sandbox support](https://github.com/moltis-org/moltis/pull/1199)** (Open) — Adds a Coder sandbox backend with ephemeral workspaces via REST API and reconnecting PTY WebSockets. Support for template IDs, presets, rich parameters, TTLs, and automatic backend selection. This indicates a push toward flexible, multi-provider sandboxing.
- **[#1195 — Slack native live task cards](https://github.com/moltis-org/moltis/pull/1195)** (Merged) — Channel-neutral tool lifecycle updates rendered as Slack native plan/task cards, suggesting continued investment in Slack integration UX.
- **[#1190 — Durable calendar, channel, email connectors](https://github.com/moltis-org/moltis/pull/1190)** (Merged) — Provider-neutral persistence with atomic snapshots, scheduling, projections, and bounded local full-text search. This is a major architectural addition for long-lived connectors.
- **[#1158 — Zvec vector database memory backend](https://github.com/moltis-org/moltis/pull/1158)** (Merged) — Experimental alternative memory backend, suggesting exploration of faster, local-first vector storage options.
- **[#1186 — Vault recovery phrase normalization](https://github.com/moltis-org/moltis/pull/1186)** (Open) — Fixes a mismatch between normalized recovery phrase acceptance during unsealing and raw-phrase hashing for storage, pointing to vault UX polish.

## 7. User Feedback Summary
- **Security concerns gate adoption** — PR #1179's author explicitly stated they wanted security fixes merged before using Moltis, indicating that security hardening is critical for attracting new users, particularly those handling sensitive credentials or deployments.
- **Sandbox reliability impacts core workflows** — The gogcli URL issue (Issue #1189) broke sandbox builds for all users, causing immediate friction in testing and development. The quick community-submitted fix (PR #1191) shows active contributor engagement but also highlights a need for more robust dependency-versioning practices in sandbox images.
- **Session management UX limitation** — Issue #1132 about the inability to delete the "main" session was reported in June and only now resolved, suggesting users want full control over session lifecycle without special-casing.
- **macOS usability** — The bash 3.2 guard fix (PR #1194) reflects real macOS developer pain, as the default bash version still causes compatibility issues with `set -euo pipefail` scripts.

## 8. Backlog Watch
- **[#1186 — Vault recovery phrase normalization](https://github.com/moltis-org/moltis/pull/1186)** (Open, since 2026-08-09) — This PR fixes a real inconsistency where users can unseal with normalized phrases but the stored hash is computed over the raw phrase. This could lead to vault state corruption or security concerns. Needs maintainer review and merge.
- **[#1199 — Coder remote workspace sandbox support](https://github.com/moltis-org/moltis/pull/1199)** (Open, since 2026-08-15) — A substantial feature PR that is still open but has not been updated since creation. Given the rapid merge velocity of other features, this may need maintainer attention to avoid stalling.
- No long-unanswered critical issues were identified; the two issues updated today were both closed. The project maintains healthy issue hygiene.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-16

## 1. Today's Overview

CoPaw shows **moderate-to-high activity** today with **9 issues** and **11 PRs** updated in the last 24 hours. A significant cluster of **8 new bugs and feature requests** were filed today (mostly #7051–#7060), indicating active user engagement, particularly around **video handling on OpenAI-compatible providers** and **OAuth2/MCP integration reliability**. Only **1 issue was closed** today, and **no PRs were merged**, suggesting maintainers are currently reviewing rather than merging. The **first-time contributor rate is high** (8 of 11 open PRs are tagged `first-time-contributor`), signaling strong community involvement but also a possible bottleneck for maintainer review capacity. Overall project health appears **good but stretched** — the issue tracker is healthy, but the merge velocity is low relative to incoming PR volume.

## 2. Releases

No new versions were released today. The latest release remains v2.1.0, which introduced the `scroll` context strategy, the new plugin API, and the `view_video` tool. The community is actively reporting issues against this version today (e.g., #7051, #7056, #7059), suggesting v2.1.0 shipped with some regressions and immature features.

## 3. Project Progress

No PRs were merged or closed today. However, several PRs advanced toward maturity:

- **[#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061)**: Fix for the `view_video` silent-drop bug on OpenAI Responses API (`fix(video): deliver tool-result videos on OpenAI Responses API`) — directly addresses the two bugs filed today (#7059) and is ready for review. This is the most critical fix in the queue.
- **[#7057](https://github.com/agentscope-ai/QwenPaw/pull/7057)**: Fix to add user-local bin dirs to subprocess PATH — addresses a real pain point in systemd/container deployments.
- **[#7055](https://github.com/agentscope-ai/QwenPaw/pull/7055)**: Fix for silent failure of `qwenpaw cron update --text` on agent-type jobs (#7048).
- **[#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940)**: Large feature PR adding a **native DataPaw app runtime and durable analysis workspace** — this is a major feature under review (first-time contributor, flagged `ready-for-human-review`).
- **[#7001](https://github.com/agentscope-ai/QwenPaw/pull/7001)**: Matrix per-sender session/memory isolation for group rooms — fixes a substantive privacy issue.
- **[#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)**: Large unification of provider discovery, model metadata, routing, and agent controls — a strategic refactor still open after 25 days, likely a high-review-cost PR.

## 4. Community Hot Topics

- **[Issue #3915](https://github.com/agentscope-ai/QwenPaw/issues/3915) — Virtual scrolling for Console WebUI** (👍 1, 3 comments): A long-standing performance request (April 28) for long-conversation rendering. The request remains open after 3+ months, indicating maintainers haven't prioritized it, yet it continues to draw engagement.
- **[Issue #6476 — Matrix end-to-end encryption broken](https://github.com/agentscope-ai/QwenPaw/issues/6476)** (CLOSED, 3 comments): A v2.0.1 bug where Matrix E2EE is unusable due to **olm/vodozemac library conflicts**. This was closed, but the severity (security/encryption) suggests the fix may have been partial — worth confirming users are no longer hitting this.
- **Issues #7059/#7060 (video handling)**: Filed today by the same user (`xiaoka76`), these describe video context being **silently dropped** and an **immovable 2 MB hardcoded cap**. The PR fix (#7061) is already up — this is the hottest topic right now.
- **Issue #7058 — Native context strategy removed from UI**: Users are unhappy that v2.1.0 removed the `native` context option selector, forcing `scroll`. The backend still supports it, which makes this a UI/UX regression.

## 5. Bugs & Stability

Ranked by severity:

1. **[`#7059` — Silent video frame drop (OpenAI Responses API)](https://github.com/agentscope-ai/QwenPaw/issues/7059)** — HIGH: Models get **zero video data** with no error/warning. Fix PR exists: [#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061).
2. **[`#7060` — Hardcoded 2 MB video cap ignores provider setting](https://github.com/agentscope-ai/QwenPaw/issues/7060)** — MEDIUM-HIGH: Blocks legitimate uses and is not configurable. Related to the same `view_video` path; no dedicated fix PR yet beyond #7061 touching the same area.
3. **[`#7053` — OAuth2 refresh token rotation broken](https://github.com/agentscope-ai/QwenPaw/issues/7053)** — MEDIUM-HIGH: Remote MCP servers using rotating refresh tokens **permanently degrade** to manual re-auth. Standard OAuth2 flows expect rotation, so this breaks many production MCP integrations.
4. **[`#7051` — Image attachments lost on session reload](https://github.com/agentscope-ai/QwenPaw/issues/7051)** — MEDIUM: Console desktop app bug where images break after re-open.
5. **[`#6476` — Matrix E2EE broken](https://github.com/agentscope-ai/QwenPaw/issues/6476)** — Closed, but was HIGH severity (encryption); verify the resolution is solid.
6. **[`#7055` — `cron update --text` silently fails](https://github.com/agentscope-ai/QwenPaw/issues/7048, fixed by #7055)** — MEDIUM: Users get a success response but nothing changes.

## 6. Feature Requests & Roadmap Signals

Several user-requested features point toward likely upcoming capabilities:

- **Configurable inline-media size limits (image/video + Files API)** — [#7060](https://github.com/agentscope-ai/QwenPaw/issues/7060). Expected in next patch release given the related bug fix in progress.
- **Background task callback/notification mechanism** — [#7056](https://github.com/agentscope-ai/QwenPaw/issues/7056): Polling-only `submit_to_agent`/`check_agent_task` APIs are seen as limiting; callback hooks (webhooks or websocket events) are a natural next feature.
- **Per-cron-job model override picker** — PR [#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050) is already up; backend supports it; likely lands soon.
- **System prompt permission in plugin API** — [#7052](https://github.com/agentscope-ai/QwenPaw/issues/7052): Enterprise use case for hiding company prompts.
- **Restoring `native` context strategy in UI** — [#7058](https://github.com/agentscope-ai/QwenPaw/issues/7058): A requested UX regression fix; cheap to implement and likely in scope for v2.1.1.
- **Virtual scrolling for console** — [#3915](https://github.com/agentscope-ai/QwenPaw/issues/3915): Older request; the new pagination API PR ([#7049](https://github.com/agentscope-ai/QwenPaw/pull/7049)) is the backend half; UI-side virtual scrolling would complete it. Signature of a near-term UI/perf push.

## 7. User Feedback Summary

- **Video handling is broken for OpenAI Responses API users** (e.g., Volcengine Ark) — the most concrete pain point today. Users get false positives (`Video loaded: <filename>`) with silent context loss.
- **MCP OAuth2 with rotating refresh tokens is unstable** — reported as a production blocker for XMind MCP and similar tools ([#7053](https://github.com/agentscope-ai/QwenPaw/issues/7053)).
- **Desktop Console reliability issues**: lost image attachments ([#7051](https://github.com/agentscope-ai/QwenPaw/issues/7051)), non-configurable 2 MB media cap ([#7060](https://github.com/agentscope-ai/QwenPaw/issues/7060)) — common daily-use frustrations.
- **Systemd/Docker deployments hit stripped PATH issues** — [#7057](https://github.com/agentscope-ai/QwenPaw/pull/7057) addresses user-installed CLIs not being found.
- **General sentiment appears constructive**: users dig into source code and file well-specified issues with root-cause analysis — a sign of an engaged, technically strong user base.

## 8. Backlog Watch

- **[#3915](https://github.com/agentscope-ai/QwenPaw/issues/3915) — Virtual scrolling for Console WebUI**: Open since April 28, 3+ months. Community-voted (👍 1) and increasingly relevant as the console UI evolves. A maintainer triage decision (accept, decline, or scope down) is overdue.
- **[#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) — Provider discovery/model metadata unification**: Open since Jul 21, no maintainer comment visible. This is a large architectural PR; the lack of activity could stall it. Needs a maintainer review pass.
- **[#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) — DataPaw native runtime (first-time contributor, `ready-for-human-review`)**: A major new feature with no visible maintainer response after 4 days — needs a fast triage decision to keep the contributor engaged.
- **Today's 8 first-time-contributor PRs** are generally small and focused; reviewing and merging (or closing with guidance) promptly is critical to retain community momentum.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the ZeroClaw project digest for 2026-08-16.

---

## ZeroClaw Project Digest
**Date:** 2026-08-16

### 1. Today's Overview
ZeroClaw is in a period of high architectural activity, with 50 issues and 50 PRs updated in the last 24 hours. The project is heavily focused on large-scale RFCs (Requests for Comments) concerning core architecture, security posture, and runtime session management, indicating a major evolution phase. While no new releases were published, the volume of active discussion and the presence of large, multi-PR feature stacks (e.g., Anthropic fallbacks) signal significant forward momentum. There is a high concentration of risk flags on both RFCs and PRs, suggesting maintainers and contributors are meticulously addressing complex, high-stakes changes. The community is deeply engaged in shaping the project's roadmap through these design proposals.

### 2. Releases
- **No new releases** were published in the last 24 hours.

### 3. Project Progress
Four pull requests were merged or closed, all part of the same feature stack from contributor `IftekharUddin` to enhance Anthropic provider reliability:
- **[PR #9262](https://github.com/zeroclaw-labs/zeroclaw/pull/9262): feat(providers): surface native anthropic refusals as typed errors** - Converts native Anthropic refusal responses into typed errors for better handling.
- **[PR #9263](https://github.com/zeroclaw-labs/zeroclaw/pull/9263): feat(providers): route refusals through client-side fallback entries** - Integrates the new typed refusal error into the client-side reliability layer to trigger fallback logic.
- **[PR #9265](https://github.com/zeroclaw-labs/zeroclaw/pull/9265): feat(providers): opt-in anthropic server-side fallback requests** - Adds a config option to use Anthropic's server-side fallback feature.
- **[PR #9268](https://github.com/zeroclaw-labs/zeroclaw/pull/9268): feat(channels): surface safeguard fallback notices** - Ensures users are notified when a fallback has occurred.

This merged stack represents a major improvement to the Anthropic provider experience, turning silent failures into graceful, user-aware fallbacks.

### 4. Community Hot Topics
The hottest discussions are all focused on the project's future architecture via RFCs.
- **[Issue #8603: RFC: ZeroClaw Chat Completions profile (21 comments)](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** - The most commented issue, this RFC proposes an OpenAI-compatible API, which would unlock compatibility with tools like Open WebUI, LobeChat, and the OpenAI SDK. This is a strong signal for expanding ZeroClaw's reach beyond its native clients.
- **[Issue #9487: RFC: Runtime-owned conversation sessions and transport surface adapters (17 comments)](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)** (and related [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)) - This complex RFC proposes a major shift in how sessions and transports are managed, centralizing authority in the runtime. The comment count reflects deep technical discussion on this foundational change.
- **[Issue #6954: RFC: Provenance, conversation binding, and reply contract for internally initiated agent turns (13 comments)](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)** - Focused on defining a contract for background tasks (like cron jobs), ensuring they behave predictably in conversations.
- **[Issue #6971: RFC: Security posture, credential boundaries, and universal ingress policy (13 comments)](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)** - A security-focused RFC drawing significant attention, indicating a community-wide discussion on how ZeroClaw should handle credentials and secure ingress.

**Analysis:** The community is actively debating critical infrastructure decisions. The needs are clear: a desire for ecosystem interoperability (Chat Completions API), a more robust and secure runtime model, and clear contracts for background execution.

### 5. Bugs & Stability
The last 24 hours show a focus on proactive bug fixes and stability improvements through PRs, alongside open issues.
- **High Severity (Open Issues):**
    - **[Issue #9965: cron custom-shell test hits ETXTBSY under the parallel runtime gate (Priority: P1)](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)** - A flaky test is causing unrelated PRs to fail their CI checks, a significant workflow blocker.
    - **[Issue #7527: macOS desktop app can reopen blank or without a window (Priority: P1, Closed)](https://github.com/zeroclaw-labs/zeroclaw/issues/7527)** - This S1 severity bug has been closed, but is worth noting as a recent stability concern for desktop users.
- **High Severity (Fix PRs In Progress):**
    - **[PR #9002: fix(gateway): keep agent turns alive after viewer disconnect](https://github.com/zeroclaw-labs/zeroclaw/pull/9002)** - Addresses a potentially significant issue where a user disconnecting from the dashboard cancels the agent's work.
    - **[PR #9320: fix(cron): bound agent job runs with a wall-clock timeout](https://github.com/zeroclaw-labs/zeroclaw/pull/9320)** - Fixes a critical flaw where a hung cron job could lock itself indefinitely.
    - **[PR #9995: fix(hooks): harden webhook audit exports](https://github.com/zeroclaw-labs/zeroclaw/pull/9995)** - A security-focused fix to scrub credentials from audit logs.

### 6. Feature Requests & Roadmap Signals
The roadmap is being intensely shaped by RFCs and new feature PRs.
- **Likely in Next Version (v0.9.0 and beyond):** The SOP (Standard Operating Procedure) capability is moving toward full implementation with multiple PRs in flight ([#9694](https://github.com/zeroclaw-labs/zeroclaw/pull/9694), [#9693](https://github.com/zeroclaw-labs/zeroclaw/pull/9693)) and a tracking issue ([#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)).
- **High-Interest Candidate Features:**
    - **OpenAI Chat Completions API Support** ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)) - This is a highly requested feature that would open ZeroClaw to a massive ecosystem of tools.
    - **Realtime Voice Channel** ([#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)) - An optional speech-to-speech channel for Gemini Live, showing foresight into multimodal interactions.
    - **Desktop Computer-Use Support** ([#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)) - A proposal to allow ZeroClaw to control desktop applications, which would be a major new capability.
    - **Agent Plugins Standard** ([#9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810)) - Aligning with a vendor-neutral plugin standard could foster a community plugin ecosystem.
- **Active Feature Development:** The **Anthropic fallback stack** was merged, and a large PR for **native Hailo-Ollama support** ([#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)) is actively being iterated on.

### 7. User Feedback Summary
The primary feedback loop comes from detailed RFCs and bug reports, showing advanced and technical users.
- **Pain Point:** **Configuration complexity and security pitfalls.** Users are proposing RFCs to simplify security posture ([#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)) and fix specific dangerous behaviors, such as the SSRF vulnerability in file downloads ([#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)) and the risk-profile config collapsing (`[]` vs absent) ([#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753)).
- **Pain Point:** **Lack of documentation and granular control.** Users are requesting docs for the Cron feature and a way to specify models for cron jobs ([#7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762)).
- **Pain Point:** **Desktop app stability.** The macOS blank-window bug ([#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527)) highlights dissatisfaction with a core UX.
- **Use-Case Signals:** There is strong interest in proactive and background use cases, such as improved cron job handling ([#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320)) and proactive messaging from channels like WeChat Work ([#7824](https://github.com/zeroclaw-labs/zeroclaw/issues/7824)).

### 8. Backlog Watch
Several important items require continued maintainer attention to prevent stagnation.
- **High-Priority PRs Awaiting Author Action:** Many large, high-risk PRs are tagged `needs-author-action`, meaning they may be stalled. Key ones include:
    - **[PR #8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713): fix(tools): add allowed_private_hosts opt-in to file_download SSRF gate** (Risk: High) - Critical security fix.
    - **[PR #9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002): fix(gateway): keep agent turns alive after viewer disconnect** (Risk: High) - Important stability fix.
    - **[PR #9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109): feat(providers): add native Hailo-Ollama support** (Risk: High) - Significant new feature.
- **Critical RFCs Pending Maintainer Review:** Several key architectural RFCs still need a formal decision.
    - **[Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603): RFC: Chat Completions profile** - Needs a go/no-go decision.
    - **[Issue #9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487): RFC: Runtime-owned conversation sessions** - A complex, foundational decision is pending.
    - **[Issue #9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621): RFC: staged opt-in product telemetry** - This could provide valuable data to help prioritize other features, but needs maintainer buy-in.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*