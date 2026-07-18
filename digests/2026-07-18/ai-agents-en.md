# OpenClaw Ecosystem Digest 2026-07-18

> Issues: 418 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-18 02:38 UTC

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

# OpenClaw Project Digest — July 18, 2026

## 1. Today's Overview

The OpenClaw project shows **extremely high activity** today, with 418 issues and 500 PRs updated in the last 24 hours. The team released **v2026.7.2-beta.2**, introducing remote coding sessions and improved cloud worker support. **248 open/active issues** and **304 open PRs** indicate a busy maintenance and feature pipeline, though this volume also signals potential community frustration with responsiveness. A **new beta release** shipped today with highlights around remote session management and native automation nodes, alongside several critical stability fixes in the PR queue.

---

## 2. Releases

**v2026.7.2-beta.2** (Released 2026-07-18)

**Highlights:**
- **Remote coding sessions:** Run Control UI sessions on cloud workers; open Codex and Claude catalog sessions in terminals on their owning hosts; resume OpenCode and Pi sessions directly in a terminal.
- **Native automation and nodes:** This release continues the "b..." (description truncated in data).

**Breaking Changes:** Not explicitly documented in the release notes, but the migration issue [#109867](#) warns of a `beta.2` state migration bug.

**Migration Notes:** The beta.2 migration creates an `agent_id` index before adding the column, blocking gateway startup — see [Issue #109867](https://github.com/openclaw/openclaw/issues/109867).

---

## 3. Project Progress

**Today's Merged/Closed PRs:** 196 merged or closed (from 500 total updated)

**Key Advances:**
- **Linux Quick Chat expansion** — [PR #110285](https://github.com/openclaw/openclaw/pull/110285) adds agent switcher, avatars, per-agent routing, and configurable shortcut (large feature).
- **Plugin SDK restart recovery fix** — [PR #107450](https://github.com/openclaw/openclaw/pull/107450) (merged/closed) keeps restart recovery state private from plugin access.
- **Dependency security updates** — [PR #110263](https://github.com/openclaw/openclaw/pull/110263) bumps the actions group with 14 updates.
- **UI fixes** — [PR #110034](https://github.com/openclaw/openclaw/pull/110034) (closed) preserves non-minute cron intervals on edit; [PR #110324](https://github.com/openclaw/openclaw/pull/110324) fixes skills page security badge hydration.
- **Channel fixes** — [PR #110329](https://github.com/openclaw/openclaw/pull/110329) ensures healthy accounts' message actions survive when one credential fails (Slack, Mattermost, Google Chat, Zalo).
- **Gateway lifecycle** — [PR #110323](https://github.com/openclaw/openclaw/pull/110323) adds idempotent start, non-interactive stop guard, and unified lifecycle audit (large maintainer change).

---

## 4. Community Hot Topics

| Issue/PR | Comments | Reactions | Topic |
|----------|----------|-----------|-------|
| [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 113 | 81 👍 | Major platform gap — 6+ months old, high demand |
| [#88312 Codex turn-completion stall regression](https://github.com/openclaw/openclaw/issues/88312) | 21 | 5 👍 | Critical regression in multi-tool agent turns |
| [#7707 Memory Trust Tagging](https://github.com/openclaw/openclaw/issues/7707) | 17 | 0 👍 | Security: memory poisoning prevention |
| [#87744 Codex Telegram timeout regression](https://github.com/openclaw/openclaw/issues/87744) | 16 | 3 👍 | Production reliability issue |
| [#10659 Masked Secrets](https://github.com/openclaw/openclaw/issues/10659) | 14 | 4 👍 | Security: API key protection |

**Analysis:** The community is heavily focused on **platform parity** (Issue #75 has been open since January with 113 comments and 81 upvotes), **security hardening** (memory tagging, masked secrets, filesystem sandboxing), and **reliability regressions** in the Codex integration path. The long-standing platform gap for Linux/Windows remains the most passionate topic despite being marked P2.

---

## 5. Bugs & Stability

### Critical (P0 — Release Blockers):
- **[#109867](https://github.com/openclaw/openclaw/issues/109867) — State migration creates index before column** (P0): Blocks gateway startup after beta.2 upgrade. Has 5 👍 and a new issue tag. **No fix PR yet.**
- **[#108435](https://github.com/openclaw/openclaw/issues/108435) — Gateway fails to start on 2026.7.1** (P0): Regression; systemd, Ollama, and manual launch all affected. **No fix PR yet.**
- **[#101763](https://github.com/openclaw/openclaw/issues/101763) — Hosted Molty model selector broken** (P0): Dotted model ID causes all agent replies to fail. **No fix PR.**

### High Severity (P1 — Active Regressions):
- **[#108075](https://github.com/openclaw/openclaw/issues/108075) — 2026.7.1 LLM request schema rejection** (P1): Provider rejects tool payload after update.
- **[#107873](https://github.com/openclaw/openclaw/issues/107873) — Embedded session takeover aborts WebChat turns** (P1): Tool failures abort instead of retrying.
- **[#106231](https://github.com/openclaw/openclaw/issues/106231) — Loop detection blocks but doesn't terminate stuck agents** (P1): Resources burned for hours.
- **[#108344](https://github.com/openclaw/openclaw/issues/108344) — Session maintenance evicts in-flight cron sessions** (P1): Every cron run fails with lifecycle error.
- **[#98435](https://github.com/openclaw/openclaw/issues/98435) — MCP loopback transport fails after gateway restart** (P1): `recovered=1` is misleading; no auto-reconnect.

### Fix PRs in Progress:
- **Browser download timeout** — [PR #110189](https://github.com/openclaw/openclaw/pull/110189) fixes stalled saves (P2)
- **LINE message action text cap** — [PR #110307](https://github.com/openclaw/openclaw/pull/110307) prevents truncation crashes (P2)
- **Anthropic malformed usage rejection** — [PR #110240](https://github.com/openclaw/openclaw/pull/110240) prevents silent data corruption (P2)
- **Config compaction rejection** — [PR #110185](https://github.com/openclaw/openclaw/pull/110185) lets users disable auto-compaction (P2)
- **Voice call ngrok timeout** — [PR #109416](https://github.com/openclaw/openclaw/pull/109416) prevents process leaks (P2)

---

## 6. Feature Requests & Roadmap Signals

### High-likelihood for next release:
1. **Masked Secrets** ([#10659](https://github.com/openclaw/openclaw/issues/10659)) — API key protection via masked vault; 4 👍, P1 security impact. Likely given security focus.
2. **Filesystem Sandboxing** ([#7722](https://github.com/openclaw/openclaw/issues/7722)) — Configurable file access restrictions; 4 👍, P2 security. Already has draft implementations.
3. **Memory Trust Tagging** ([#7707](https://github.com/openclaw/openclaw/issues/7707)) — Tag memory entries by source trust level; 0 👍 but strong security rationale.
4. **Multi-turn Webhook Sessions** ([#11665](https://github.com/openclaw/openclaw/issues/11665)) — Existing session reuse when `sessionKey` consistent; documented but broken.

### Medium-likelihood:
5. **Skill Permission Manifest** ([#12219](https://github.com/openclaw/openclaw/issues/12219)) — `skill.yaml` permission declaration standard.
6. **Topic-session families** ([#90916](https://github.com/openclaw/openclaw/issues/90916)) — Multiple named context lanes per assistant.
7. **Model fallback on context overflow** ([#9986](https://github.com/openclaw/openclaw/issues/9986)) — Trigger fallback when context limit exceeded, not just API errors.
8. **Session `maxTurns`/`maxToolCalls`** ([#9912](https://github.com/openclaw/openclaw/issues/9912)) — Iteration limits for runaway agents.

### Low-likelihood / niche:
- WhatsApp sticker support ([#7476](https://github.com/openclaw/openclaw/issues/7476))
- TUI accessibility emoji disable ([#9637](https://github.com/openclaw/openclaw/issues/9637))
- Plain text copy option ([#7909](https://github.com/openclaw/openclaw/issues/7909))

---

## 7. User Feedback Summary

### Pain Points:
- **Codex reliability regressions** are the #1 frustration — multiple P1 issues about turn timeouts, premature completion, and OAuth migration failures across Telegram and WebChat.
- **Session state corruption** — compaction loops ([#78562](https://github.com/openclaw/openclaw/issues/78562)), duplicate messages ([#96242](https://github.com/openclaw/openclaw/issues/96242)), and subagent context pollution ([#96975](https://github.com/openclaw/openclaw/issues/96975)) erode user trust.
- **Upgrade breakage** — [#108435](https://github.com/openclaw/openclaw/issues/108435) (gateway won't start) and [#109867](https://github.com/openclaw/openclaw/issues/109867) (migration blocks startup) show the beta testing pipeline isn't catching critical startup failures.
- **Plugin/core version drift** ([#83337](https://github.com/openclaw/openclaw/issues/83337)) — Silent channel failures after core upgrade.

### Satisfaction Signals:
- Appreciation for **remote coding sessions** in the new beta release.
- **Linux Quick Chat PR** (#110285) shows active development on the most-requested platform.
- The **CLAW.md manifest** PR (#106888) addresses long-standing portability requests.

### Use Cases:
- Users running production Telegram bots depending on Codex OAuth path.
- Developers using OpenClaw as a workflow orchestration backend (session hooks, cron).
- Privacy-conscious users wanting memory sandboxing and secret masking.

---

## 8. Backlog Watch

### Critical issues needing maintainer attention (no fix PRs yet):

| Issue | Age | Comments | Priority | Why |
|-------|-----|----------|----------|-----|
| [#75 Linux/Windows Apps](https://github.com/openclaw/openclaw/issues/75) | 199 days | 113 | P2 | Highly requested, but stalled 6+ months; community frustration growing |
| [#10687 Dynamic model discovery](https://github.com/openclaw/openclaw/issues/10687) | 163 days | 10 | P2 (maintainer) | OpenRouter models change weekly; static catalog is a major blocker |
| [#7707 Memory Trust Tagging](https://github.com/openclaw/openclaw/issues/7707) | 167 days | 17 | P2 | Security vulnerability acknowledged but not addressed |
| [#10659 Masked Secrets](https://github.com/openclaw/openclaw/issues/10659) | 163 days | 14 | P1 | Security-critical feature with no progress |
| [#87763 SSRF guard DNS timeout](https://github.com/openclaw/openclaw/issues/87763) | 51 days | 5 | P1 | Gateway unresponsive on affected providers |
| [#83337 Plugin/core version drift](https://github.com/openclaw/openclaw/issues/83337) | 61 days | 5 | P1 | Silent failures after upgrades |
| [#72611 Dreaming session exclusions](https://github.com/openclaw/openclaw/issues/72611) | 82 days | 5 | P2 | Cron transcripts polluting memory corpus |

### Stale / abandoned PRs:
- [PR #98328](https://github.com/openclaw/openclaw/pull/98328) — CLI runner sender metadata fix (waiting on author since July 1)
- [PR #99115](https://github.com/openclaw/openclaw/pull/99115) — Cron delivery resolution fix (waiting on proof since July 2)
- [PR #109414](https://github.com/openclaw/openclaw/pull/109414) — Session extension registry fix (needs proof since July 16)

---

**Project Health Score: MODERATE** — High activity and frequent releases indicate an actively maintained project, but the volume of regressions (especially around Codex integration) and the 6-month backlog of the #1 community request (Linux/Windows apps) are concerning. The security-focused feature requests (masked secrets, memory tagging, filesystem sandboxing) are well-defined but remain unstarted despite being designated P1/P2. Today's beta release and the large number of open PRs suggest the team is addressing these issues, but the release validation pipeline needs to catch startup-blocking regressions before shipping.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the personal AI assistant and agent open-source ecosystem, based on the July 18, 2026 community digest data.

---

### Cross-Project Comparison Report: Personal AI Agent Ecosystem
**Date:** July 18, 2026
**Analyst:** Senior Ecosystem Analyst

---

### 1. Ecosystem Overview

The open-source personal AI agent ecosystem exhibits a bifurcation between hyperactive core frameworks and smaller, specialized tools. On July 18, major projects like OpenClaw, IronClaw, and ZeroClaw demonstrate industrial-scale engineering velocity, each processing over 400 issues and PRs daily. This signals a maturation phase where the focus has shifted from basic chatbot functionality to complex production features: multi-agent orchestration, platform parity (Linux/Windows/Apple), security hardening, and provider reliability. Simultaneously, smaller projects like NanoBot and PicoClaw show healthy community-driven iteration on specific channels and provider integrations. The landscape is becoming increasingly defined by architectural choices (e.g., Wasm-first vs. Node.js plugins, SQLite vs. custom stores) and target user segments (power developers vs. consumer desktop users).

---

### 2. Activity Comparison

| Project | Issues Updated | PRs Updated | New Release | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 418 | 500 | v2026.7.2-beta.2 | MODERATE |
| **IronClaw** | 50 | 50 | None | STRONG |
| **ZeroClaw** | 50 | 50 | None (v0.8.3 latest) | STRONG |
| **Hermes Agent** | 50 | 50 | None | MODERATE |
| **CoPaw (QwenPaw)** | 23 | 39 | v2.0.0.post3 | STRONG |
| **LobsterAI** | 7 | 15 | 2026.7.16 | GOOD |
| **NanoClaw** | 4 | 15 | None | GOOD |
| **NanoBot** | 2 | 11 | None | STRONG |
| **PicoClaw** | 4 | 12 | None (v0.2.9 latest) | GOOD |
| **Moltis** | 1 | 2 | 20260717.02 & .03 | GOOD |
| **NullClaw** | 1 | 0 | None (v2026.5.29 latest) | STABLE (Low Activity) |
| **ZeptoClaw** | 8 | 0 | None | STABLE (Maintenance) |
| **TinyClaw** | 0 | 0 | - | INACTIVE |

*Note: Health scores reflect project velocity, community engagement, and stability as observed on this date. OpenClaw's score is marked "MODERATE" due to a high number of unresolved critical bugs despite high activity.*

---

### 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale & Community:** With 418 issues and 500 PRs updated daily, OpenClaw has the most active community, suggesting a massive user base and contributor pool. Its feature set, like remote coding sessions, is ahead of most peers.
- **Platform Parity Pressure:** The community's #1 pain point (Linux/Windows apps, Issue #75) is a clear differentiator. While others focus on server-side or web-first experiences, OpenClaw's users explicitly demand robust desktop clients, which is a unique and high-value pressure.

**Technical Approach Differences:**
- **Architecture:** OpenClaw appears more centralized around a "gateway" and "worker" model compared to IronClaw's "Reborn" simplification or ZeroClaw's "Wasm-first" plugin strategy.
- **Speed vs. Stability:** OpenClaw releases frequent betas (e.g., v2026.7.2-beta.2) with many breaking changes, indicating a "move fast and break things" approach. This contrasts with IronClaw's disciplined, systematic refactoring with clear epics and strong CI, or ZeroClaw's focus on security and supply-chain integrity.

**Community Size Comparison:**
OpenClaw's contributor base is an order of magnitude larger than most peers, based on raw activity. Its community sentiment, however, is more mixed, with visible frustration over regressions. In contrast, IronClaw and ZeroClaw have high activity but seem driven more by core maintainers, resulting in a more controlled but less chaotic development cycle.

---

### 4. Shared Technical Focus Areas

The following requirements are emerging across multiple projects, indicating industry-wide needs:

1.  **Provider Reliability & Compatibility:** *Affects: OpenClaw, NanoBot, Hermes Agent, NanoClaw, CoPaw.* Multiple projects report regressions and bugs related to specific LLM providers (e.g., OpenClaw's Codex/Moonshot regressions, NanoBot's Moonshot temperature fix, NanoClaw's OpenRouter silent drops). **Need:** Better separation of provider logic from core runtime and automated integration testing.
2.  **Multi-Platform & Desktop Parity:** *Affects: OpenClaw, Hermes Agent, ZeroClaw, CoPaw.* OpenClaw and CoPaw have major issues with Windows/Linux/macOS clients. Hermes Agent has a comprehensive Windows update failure diagnostic. **Need:** Dedicated platform engineering and tooling to prevent core regressions on specific OS environments.
3.  **Security Hardening:** *Affects: OpenClaw, Hermes Agent, IronClaw, ZeroClaw, PicoClaw.* Topics include memory trust tagging, masked secrets, filesystem sandboxing (OpenClaw), multi-tenant filesystem access (IronClaw), and supply-chain signing (ZeroClaw). **Need:** A unified approach to agent security, including secret vaults, sandboxed execution, and signed artifact distribution.
4.  **Session & State Management:** *Affects: OpenClaw, Hermes Agent, LobsterAI, CoPaw.* Issues with session corruption, loop detection, state bleeding, and silent message dropping are rampant. **Need:** More robust session lifecycle management, with clear audit trails and graceful error recovery.
5.  **Multi-Agent & Model Routing:** *Affects: OpenClaw, Moltis, ZeroClaw, CoPaw.* Users want to route specific topics or tasks to different models or agents. ZeroClaw is building A2A protocol support. **Need:** Standardized protocols for agent-to-agent communication and topic-aware model dispatch.

---

### 5. Differentiation Analysis

| Feature Focus | OpenClaw | IronClaw | ZeroClaw | NanoBot / NanoClaw |
| :--- | :--- | :--- | :--- | :--- |
| **Target User** | Power developers & integrators | Core engineers & platform builders | Enterprise & security-conscious users | Hobbyists & channel-specific users |
| **Primary Feature** | Remote coding, cloud workers, Codex catalog | Architecture simplification, internal store consolidation, robust CI | Multi-agent routing, supply-chain security, Wasm plugin runtime | Provider support, localization, channel unification |
| **Technical Differentiator** | "Gateway + Worker" model, high release velocity, large community | Systematic refactoring, strong engineering discipline, ROM-based stores | Wasm-first plugins, OIDC, hardware signing | Quick bug fixes, community-driven, cloud deployment (Render) |
| **Biggest Risk** | Regression debt from high velocity | Potential contributor bottleneck | Dependency on key maintainers (e.g., @singlerider) | Scalability & feature gap vs. larger projects |

---

### 6. Community Momentum & Maturity

- **Tier 1 – Hyperdrive (High Risk/High Reward):** **OpenClaw**, **IronClaw**, **ZeroClaw**. These projects are in an intense phase of rapid iteration. OpenClaw risks becoming unstable due to regressions. IronClaw is executing a disciplined, high-impact refactoring. ZeroClaw is building foundational enterprise features.
- **Tier 2 – Steady Growth:** **Hermes Agent**, **CoPaw**, **LobsterAI**. These projects show strong, sustained development with a good balance of new features and bug fixes. They are maturing but still have rough edges (e.g., Hermes Agent's Windows issues, CoPaw's upgrade friction).
- **Tier 3 – Niche Specialization:** **NanoBot**, **NanoClaw**, **PicoClaw**. These projects are "feature-complete" for specific use cases and are iterating on targeted improvements, provider support, and community contributions.
- **Tier 4 – Stable / Low Activity:** **Moltis**, **NullClaw**, **ZeptoClaw**, **TinyClaw**. These appear stable but are either in a maintenance phase, a data-cleaning phase, or have very low community engagement.

---

### 7. Trend Signals

Key industry trends extracted from community feedback:

1.  **The "Reliability Wall":** Users across all projects are hitting a wall of reliability regressions. The core functionality of AI agents (sending a message, processing a turn, maintaining a session) is still brittle. This presents a massive opportunity for developers who can build deterministic, fault-tolerant agent frameworks.
2.  **Security is Now a Prerequisite:** The volume of issues around secret masking, memory sandboxing, and filesystem access signals a shift from "I want it to work" to "I need it to be secure." This is especially true for multi-tenant and enterprise deployments.
3.  **Convergence on Operating Systems:** The most passionate user complaints are not about model parity but about **operating system parity**. Users want first-class desktop apps that don't break on Windows Update. This is a critical battleground for the next wave of adoption.
4.  **The Rise of the "Agent Router":** Instead of one model for everything, users want a routing layer (multi-agent, per-topic routing) that can dispatch tasks to the best model/provider for the job. This is the next "killer feature" and is being explored in multiple projects.
5.  **Plugin Maturity:** The ecosystem is moving beyond simple JSON-based plugins. We see a trend toward Wasm for sandboxed execution (ZeroClaw), signed plugin distribution, and permission systems. The future of agent extensibility will be secure, governed, and portable.

**Value for AI Agent Developers:**

- **For Platform Builders:** Focus on **reliability and security**. These are the top user frustrations. Invest heavily in CI for provider compatibility and state management. Consider using a Wasm-based plugin system for future-proof security.
- **For Tooling Developers:** The market is crying out for **observability and debugging tools**. Agents are still "black boxes" that fail silently. Tooling for session replay, state inspection, and provider call tracing would be invaluable.
- **For Channel Integrators:** **Native desktop applications** remain the highest-return target. A stable, well-designed, cross-platform agent desktop client would be a major competitive advantage.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-18

## 1. Today's Overview
NanoBot shows high activity today with **2 issues resolved** and **11 PRs updated**, of which **4 were merged or closed**. The project continues to advance on provider compatibility, WebUI polish, and channel architecture. No new releases were published. Community responsiveness is strong: two critical Moonshot provider bugs were identified and fixed within hours, reflecting good maintainer velocity. The open PR count (7) suggests active development momentum entering the weekend.

## 2. Releases
No new releases today.

## 3. Project Progress
Four PRs were merged or closed today, moving key features and fixes forward:

- **[#4962 — fix(providers): correct Moonshot kimi-k2.6 temperature override to 0.6](https://github.com/HKUDS/nanobot/pull/4962)** — [CLOSED]  
  Fixed a provider registry bug where the temperature for Moonshot's kimi-k2.6 model was hardcoded to 1.0, but the API now requires exactly 0.6. This was causing all requests to fail silently.

- **[#4967 — fix(providers): omit temperature for Moonshot Kimi K2.5/K2.6](https://github.com/HKUDS/nanobot/pull/4967)** — [CLOSED]  
  Follow-up fix to let Moonshot select its own fixed temperature based on thinking mode (1.0 for thinking, 0.6 for non-thinking) rather than sending a hardcoded value.

- **[#4958 — Improve zh-TW Traditional Chinese locale](https://github.com/HKUDS/nanobot/pull/4958)** — [CLOSED]  
  Quality improvement for Traditional Chinese (Taiwan) locale translations.

- **[#4953 — feat(webui): support native folder picker bridges](https://github.com/HKUDS/nanobot/pull/4953)** — [CLOSED]  
  Added WebUI support for external native folder-picker integration, with loopback security and per-tab authentication tokens.

## 4. Community Hot Topics
- **[Issue #4968 — Unbound cron jobs (4 comments)](https://github.com/HKUDS/nanobot/issues/4968)** — [CLOSED]  
  The most commented item today. A user asked why unbound cron jobs are forbidden in NanoBot. The issue references a code check that rejects cron jobs not bound to a specific agent. This signals community interest in more flexible scheduling outside of agent-fixed workflows. The issue was closed, likely with a decision or clarification, but the topic may resurface.

- **[PR #4965 — Feat/modelscope provider support](https://github.com/HKUDS/nanobot/pull/4965)** — [OPEN, P1]  
  A new provider addition (ModelScope) that would bring OpenAI-compatible access to Qwen, DeepSeek, Kimi, GLM, MiniMax, and other open-source models. This is a high-priority PR with "conflict" tag, suggesting active review.

- **[PR #4908 — refactor(channels): make built-in channels self-contained](https://github.com/HKUDS/nanobot/pull/4908)** — [OPEN, P1, conflict]  
  A major refactoring effort to decouple channel discovery, setup, runtime loading, WebUI metadata, and i18n into self-contained packages. This is a long-running PR (5 days) that touches the core architecture.

## 5. Bugs & Stability
Two high-severity bugs were identified and fixed today, both related to the Moonshot provider:

- **Severity: Critical — Moonshot kimi-k2.6 temperature mismatch**  
  Reported in [Issue #4961](https://github.com/HKUDS/nanobot/issues/4961) and fixed by [PR #4962](https://github.com/HKUDS/nanobot/pull/4962). The provider registry hardcoded `temperature: 1.0` for kimi-k2.6, but the API now requires exactly 0.6. All requests to this model were failing. **Fixed same day.**

- **Severity: Critical — Kimi K2.5/K2.6 fixed temperature conflict**  
  Follow-up fix in [PR #4967](https://github.com/HKUDS/nanobot/pull/4967). The broader issue is that Moonshot determines temperature dynamically based on thinking mode, and sending any override could cause failures or unexpected behavior. **Fixed same day.**

No crashes or regressions were reported today.

## 6. Feature Requests & Roadmap Signals
- **Unbound cron jobs** ([Issue #4968](https://github.com/HKUDS/nanobot/issues/4968)) — A community request to allow cron jobs not tied to a specific agent. This suggests a use case for administrative or infrastructure tasks. Likely to be considered for a future release if demand grows.

- **One-click Deploy to Render** ([PR #4937](https://github.com/HKUDS/nanobot/pull/4937), OPEN) — Adds Render Blueprint support for instant cloud deployment with persistent storage. This lowers the barrier for non-Docker users.

- **ModelScope provider** ([PR #4965](https://github.com/HKUDS/nanobot/pull/4965), OPEN, P1) — If merged, this would add a major Chinese open-source model hub as a built-in provider, expanding NanoBot's reach in Asia.

- **Kimi K3 support** ([PR #4966](https://github.com/HKUDS/nanobot/pull/4966), OPEN, P1) — Native support for Kimi's latest model, including `reasoning_effort="max"` and new token handling. This is a strong signal that NanoBot is tracking Moonshot's model roadmap closely.

## 7. User Feedback Summary
- **Pain point: Provider model parameter conflicts** — The Moonshot kimi-k2.6 bug (Issue #4961) reveals a recurring frustration: hardcoded provider overrides that become stale as APIs change. Users want dynamic or user-configurable defaults that respect provider constraints.
- **Pain point: Restrictive cron jobs** — The unbound cron job issue (#4968) highlights a desire for more flexible scheduling. Users want to run maintenance or batch tasks without creating a dummy agent.
- **Satisfaction: Quick bug fixes** — The Moonshot temperature issue was reported, fixed, and merged within hours. This rapid response signals a project that values provider compatibility and user experience.
- **Use case: Internationalization** — The zh-TW locale PR (#4958) shows active community involvement in localizing the WebUI for Traditional Chinese users.

## 8. Backlog Watch
No long-unanswered issues or PRs requiring maintainer attention were identified today. All items in the latest 24-hour window received timely updates or closures. The oldest open PRs in view are from 2026-07-13 (#4908, channel refactor) and remain under active development with recent updates.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-18

## Today's Overview

Hermes Agent experienced an exceptionally high-activity day with **50 issues and 50 PRs updated in the last 24 hours**, indicating strong community engagement and sustained development velocity. The vast majority of activity is on open items (46 open issues, 47 open PRs), suggesting a growing backlog rather than a clearing cycle. No new releases were published today. The project shows healthy cross-platform contributions, with active work across desktop, CLI, gateway, and MCP tooling, but the high open-to-closed ratio (4 closed issues, 3 merged/closed PRs) signals that triage capacity may be strained relative to incoming reports.

## Releases

No new releases today.

## Project Progress

Three PRs were closed/merged today, focusing on CI infrastructure fixes for fork-based contributions:

- **[PR #66665](https://github.com/NousResearch/hermes-agent/pull/66665)** (closed): Fixes the CI timing report crash on every fork PR by restoring proper `GITHUB_TOKEN` fallback when `AUTOFIX_BOT_PAT` is unavailable — a critical fix for open-source contributor experience.
- **[PR #57846](https://github.com/NousResearch/hermes-agent/pull/57846)** (closed): Adds Linear-Signature HMAC verification to the webhook adapter, extending webhook security coverage beyond GitHub, GitLab, and Svix to support Linear's `Linear-Signature` header.
- **[Issue #66559](https://github.com/NousResearch/hermes-agent/issues/66559)** (closed): The CI-sensitive file review job that was breaking on fork PRs (label fetch unable to read `AUTOFIX_BOT_PAT`) was resolved.

## Community Hot Topics

The most active discussions this period reveal three primary areas of community concern:

1. **CLI regression (#3523, 6 comments)**: The `hermes update` command regressed after PR #3492, silently dropping git fetch progress output and creating unnecessary stashes on every run. With only 0 upvotes, this appears to be affecting a small but vocal subset of power users.

2. **CLI dispatcher bug (#62810, 5 comments)**: A critical discovery that the Hermes CLI dispatcher discards integer exit statuses from command handlers, meaning commands can fail with exit code 1 or 2 while the shell sees status 0. This breaks CI pipelines, `set -e`, and automation chains — a severe reliability concern for production deployments.

3. **Multimodal crash loop (#66267, 5 comments)**: After vision turns or context compaction, follow-up turns enter an infinite retry loop exhausting the API-call budget. This P1 bug with an image/vision component can render the agent unusable after image interactions until manual intervention.

**Underlying needs**: Users are demanding core CLI reliability (exit codes, no silent failures), robust multimodal handling that degrades gracefully instead of burning API budget, and stable `hermes update` behavior that doesn't create noise in their workflow.

## Bugs & Stability

New bugs reported today, ranked by severity:

**P1 – Critical:**
- **[#66267](https://github.com/NousResearch/hermes-agent/issues/66267)** — Multimodal content list crashes cause infinite retry loops exhausting API budget. No fix PR yet. *Likely root cause: improper handling of non-string content parts after vision/compaction.*

**P2 – High:**
- **[#66641](https://github.com/NousResearch/hermes-agent/issues/66641)** — `_resolve_task_provider_model` ignores `key_env` field for auxiliary tasks, causing API key to be `None` and vision/compression requests to fail with 401. *New today, no fix PR.*
- **[#66392](https://github.com/NousResearch/hermes-agent/issues/66392)** — Linux/X11 `computer_use` CUA pointer can crash the entire KDE Plasma/Qt session via the uinput driver. *Upstream fix needed first.*
- **[#66642](https://github.com/NousResearch/hermes-agent/issues/66642)** — Terminal tool loses the venv from `PATH` because the login-shell session snapshot resets it, causing `python` to resolve to the system interpreter. *New today, no fix PR.*
- **[#63717](https://github.com/NousResearch/hermes-agent/issues/63717)** — Comprehensive Windows desktop update failure diagnostic with 7 correlated root causes, spanning 3 weeks of repeated failures. *No fix PR yet.*

**P3 – Medium:**
- **[#66661](https://github.com/NousResearch/hermes-agent/issues/66661)** — Session bleed: rejected submit text written to wrong session's composer (desktop).
- **[#66662](https://github.com/NousResearch/hermes-agent/issues/66662)** — New sessions share `__new__` draft key causing draft bleed between unsaved chats.
- **[#66664](https://github.com/NousResearch/hermes-agent/issues/66664)** — `_lineage_root_id` not set on uncompressed tips, breaking desktop lineage dedup.
- **[#66663](https://github.com/NousResearch/hermes-agent/issues/66663)** — `session.list` RPC drops `_lineage_root_id`, breaking desktop session dedup.
- **[#60197](https://github.com/NousResearch/hermes-agent/issues/60197)** — RuntimeError: Event loop is closed during `/exit` from MCP server tasks.

**Regressions:**
- **[#3523](https://github.com/NousResearch/hermes-agent/issues/3523)** — `hermes update` regressions after PR #3492 (silent git output, unnecessary stashes). Open since March 2026, still unresolved.

**Duplicates reported:**
- [#66654](https://github.com/NousResearch/hermes-agent/issues/66654) (memory pollution/stale memory) and [#66642](https://github.com/NousResearch/hermes-agent/issues/66642) (terminal tool venv PATH loss) were flagged as duplicates.

## Feature Requests & Roadmap Signals

New feature requests filed today suggest the following directions for the next release:

- **[#66667](https://github.com/NousResearch/hermes-agent/issues/66667)** — Desktop session switching is slow; request for client-side transcript cache with stale-while-revalidate pattern. *Likely for next desktop release.*
- **[#66621](https://github.com/NousResearch/hermes-agent/issues/66621)** — Allow users to choose custom icons for profiles in Hermes Desktop. *Low effort, high UX impact.*
- **[#9978](https://github.com/NousResearch/hermes-agent/issues/9978)** — Interactive card format for Feishu/Lark gateway messages with model name, response time, and token usage footer. *Open since April, gaining traction.*
- **[#11442](https://github.com/NousResearch/hermes-agent/issues/11442)** — Support GitHub Copilot on GitHub Enterprise Server (GHE). *Open since April, no movement.*

**In-progress feature PRs** that may land next:
- **[PR #66666](https://github.com/NousResearch/hermes-agent/pull/66666)** — `[[artifact:path|title]]` publish-hint tag with messaging fallback (gateway).
- **[PR #66670](https://github.com/NousResearch/hermes-agent/pull/66670)** — Admin-gated cross-source session listing in `/resume --all`.
- **[PR #66653](https://github.com/NousResearch/hermes-agent/pull/66653)** — First-party remote-OAuth MCP connectors for GitHub, Notion, and Sentry.
- **[PR #66658](https://github.com/NousResearch/hermes-agent/pull/66658)** — Desktop ⌘K command palette exposing chat slash actions.

## User Feedback Summary

**Pain points (dissatisfaction signals):**
- **Windows reliability** remains a persistent theme: [#63717](https://github.com/NousResearch/hermes-agent/issues/63717) documents 7 correlated root causes for update failures over 3 weeks; [#62734](https://github.com/NousResearch/hermes-agent/issues/62734) reports visible console windows from terminal tool probes; [#51448](https://github.com/NousResearch/hermes-agent/issues/51448) shows LM Studio failing on native Windows but working under WSL.
- **Memory pollution** (#66654) — users report the agent stores inaccurate/contradictory facts with no cleanup mechanism, requiring manual purging.
- **Session state bugs** on desktop (#66661, #66662, #66663, #66664) — four separate reports today alone about text bleeding between sessions, wrong composers, and broken dedup.
- **CI fork-pr breaks** (#66559, #66659) — multiple failure modes for community contributors, though fixes are landing quickly.

**Satisfaction signals:**
- Active community contributions (50 PRs updated today) suggest engaged developer ecosystem.
- Feature PRs for MCP catalogs, kanban board, and PWA support indicate users are building on the platform.
- The rapid turnaround on CI fork fixes (same-day fix for #66665) shows responsive maintainership.

## Backlog Watch

Issues and PRs needing maintainer attention:

1. **[#3523](https://github.com/NousResearch/hermes-agent/issues/3523)** — `hermes update` regression after #3492. Open since **March 28, 2026** (112 days). Has `needs-decision` label. 6 comments, 0 upvotes. The silent git output and unnecessary stash behavior has not been addressed for nearly 4 months.

2. **[#25106](https://github.com/NousResearch/hermes-agent/issues/25106)** — CLI `--global` model switch does not persist `model.base_url` and `model.api_mode`. Closed today but the underlying issue (partial persistence) may still exist in other code paths.

3. **[#60841](https://github.com/NousResearch/hermes-agent/issues/60841)** — CVE survival across reboots: `uv.lock` pins vulnerable package versions, and any pip-based fix is transient. Open since July 8 (10 days), with 4 comments. Security-sensitive.

4. **[#9978](https://github.com/NousResearch/hermes-agent/issues/9978)** — Feishu interactive card format. Open since April 15 (95 days), 4 comments, no assignment. Low priority (P3) but has active users requesting it.

5. **[#66548](https://github.com/NousResearch/hermes-agent/pull/66548)** — Cascade steer to active child agents (subagent delegation). Has `needs-decision` label. This feature could significantly improve multi-agent workflows but requires architectural decisions.

6. **[#63298](https://github.com/NousResearch/hermes-agent/pull/63298)** — Preserve queued prompt boundaries end to end. P2, `needs-decision`, `blast-massive`. This large PR (fixes #45560) has been open since July 12 and touches desktop, gateway, cron, and TUI — high risk but high value.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-18

## 1. Today's Overview
PicoClaw shows moderate activity over the past 24 hours, with 4 issues updated and 12 pull requests touched. The project appears in a steady state of incremental improvement, with no new releases but a notable cluster of security and robustness PRs from community contributors. Two PRs were merged/closed, including a CLI tool-call fix and an Azure dependency freeze restoration. Maintainer attention seems split between channel-specific feature work (WhatsApp, QQ) and cross-cutting refactoring for performance and security.

## 2. Releases
No new releases were published in the last 24 hours. The latest release remains v0.2.9 (git 2992...).

## 3. Project Progress
Two pull requests were closed/merged today:

- **[PR #3204] fix(deps): restore Azure dependency freeze baseline** — Closed/merged. Author: gezhengbin888. Downgrades Azure SDK modules `azcore` to v1.21.1, `azidentity` to v1.13.1, and MSAL to v1.6.0 to match downstream supply-chain freeze requirements. This is a compliance/consistency fix, not a functional improvement.
  [Link](https://github.com/sipeed/picoclaw/pull/3204)

- **[PR #3180] fix(cli): skip tool calls with invalid arguments** — Closed/merged. Author: Alix-007. Prevents CLI tool calls from crashing when `function.arguments` contains invalid JSON, and adds regression tests. This is a quality-of-life fix for CLI users.
  [Link](https://github.com/sipeed/picoclaw/pull/3180)

Additionally, 10 PRs remain open, many from the same group of contributors. Notable active work streams:
- Security hardening suite (PRs #3246, #3245, #3244, #3243) by corporatepiyush — MQTT TLS verification, performance refactoring across seahorse and skills packages.
- WhatsApp native typing presence (PR #3242) by As-tsaqib — extends channel capability.
- OAuth refresh provider-correctness (PR #3241) by As-tsaqib — addresses a known bug.

## 4. Community Hot Topics

### Most Active Issues

**Issue #3201 — [Feature] Support streaming output for QQ channel** (3 comments)
Author: YsLtr | Updated: 2026-07-17
Users want real-time token-by-token streaming on the QQ channel, matching Telegram and WebSocket channels. This reflects a broader user need for responsive, low-latency chat experiences across all supported platforms.
[Link](https://github.com/sipeed/picoclaw/issues/3201)

**Issue #3206 — [CLOSED] v2→v3 config migration fails with false 'unknown field(s)'** (2 comments)
Author: OhYash | Updated: 2026-07-17
A fresh-install migration blocker that incorrectly rejects valid config fields (`build_info`, `session.dm_scope`). Now closed, indicating a fix was applied.
[Link](https://github.com/sipeed/picoclaw/issues/3206)

### Most Active Pull Requests
No single PR has drawn high comment volume; all open PRs have 0 comments from reviewers, suggesting they are awaiting maintainer review rather than sparking discussion.

## 5. Bugs & Stability

**Medium Severity — OAuth refresh request incompatibility (Issue #3239)**
Open issue: `auth.RefreshAccessToken` sends form-encoded payloads to all providers, but OpenAI expects JSON. Also has a race condition under concurrent requests. A fix PR exists (#3241) implementing provider-specific serialization and a 30-second mutex-based lock.
[Issue Link](https://github.com/sipeed/picoclaw/issues/3239) | [Fix PR](https://github.com/sipeed/picoclaw/pull/3241)

**Low Severity — CLI tool-call JSON parsing failure (PR #3180)**
Now fixed and merged. Invalid `function.arguments` could crash the CLI; the fix skips invalid calls and processes remaining valid ones.

**Low Severity — MQTT TLS certificates not verified (PR #3246)**
Open fix: `InsecureSkipVerify: true` was hardcoded, accepting any TLS certificate. The fix changes it to `false` and adds documentation for users who need insecure connections. Not yet merged.
[Link](https://github.com/sipeed/picoclaw/pull/3246)

## 6. Feature Requests & Roadmap Signals

### High Likelihood for Next Release
- **WhatsApp typing presence** (Issue #3240, PR #3242) — A focused, well-scoped feature that extends an existing channel. Already implemented and awaiting review.
- **OAuth provider-correct refresh** (Issue #3239, PR #3241) — A bug-fix-turned-feature that adds JSON request support for OpenAI and concurrency safety. High priority.
- **Security hardening** (PR #3246) — TLS verification, OAuth timeouts, bounded search reads. Security fixes typically receive prompt attention.

### Moderate Likelihood
- **QQ channel streaming** (Issue #3201) — Requested but no PR exists yet. Depends on maintainer capacity to implement or community contribution.
- **Czech translations** (PR #3247) — Small localization update, likely to be merged in the next patch release.
- **Simplex channel type** (PR #3193) — Open for 20+ days without review, suggesting lower priority or architectural concerns.

### Low Likelihood / Stale
- **Installation scripts migration** (PR #1951, opened 2026-03-24) — Open for 4 months with no movement. May be blocked on docs repo changes.

## 7. User Feedback Summary

### Pain Points
- **Config migration headaches**: The v2→v3 config migration fail (Issue #3206) caused real user friction on fresh installs. Now fixed and closed.
- **Missing user feedback on WhatsApp**: Users see no typing indicator when the agent is processing (Issue #3240), leading to confusion about whether the bot received their message. The fix (PR #3242) directly addresses this.
- **Inconsistent streaming support**: The QQ channel lacks token-by-token streaming (Issue #3201), creating a suboptimal experience compared to Telegram.

### Positive Signals
- **Community contributions are healthily diverse**: Multiple first-time and repeat contributors (As-tsaqib, corporatepiyush, KrtCZ) are submitting well-structured PRs across features, security, and localization.
- **CLI robustness improved**: The tool-call fix (PR #3180) shows responsiveness to edge-case crashes.

## 8. Backlog Watch

### Critical Attention Needed
- **[PR #1951] chore: move installation scripts from docs repo to here** (opened 2026-03-24, 117 days stale) — A 4-month-old PR from a contributor that appears abandoned by maintainers. If the task is still desired, it should be reviewed or reassigned.
  [Link](https://github.com/sipeed/picoclaw/pull/1951)

### Growing Stale PRs
- **[PR #3193] Added simplex channel type** (opened 2026-06-27, 21 days stale) — No reviewer comments. Adding a new channel type is a significant feature; its lack of attention may frustrate the contributor.
  [Link](https://github.com/sipeed/picoclaw/pull/3193)

- **[PR #3202] fix(routing): strip leading/trailing underscores in ID normalization** (opened 2026-07-01, 17 days stale) — A straightforward regex fix for ID normalization that matches documented behavior. Low risk, should be quick to merge.
  [Link](https://github.com/sipeed/picoclaw/pull/3202)

### Stale Issues Without Maintainer Response
- None of the current open issues show signs of maintainer neglect; all were updated within the last 7 days. However, multiple issues are approaching the stale threshold (last comment 7 days ago), so maintainers should prioritize triage this week.

---

**Overall Assessment**: Project health is **stable with positive community momentum**. The key risks are a growing backlog of unreviewed PRs (10 open) and potential contributor discouragement from delayed feedback. The security hardening cluster from corporatepiyush is particularly valuable and should be prioritized for review.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-18

## Today's Overview

NanoClaw shows **high development velocity** today with 15 pull requests updated in the last 24 hours (12 open, 3 merged/closed) and 4 issues updated (3 open, 1 closed). The project is in an **active stabilization and feature-completion phase**, with multiple PRs addressing core infrastructure bugs around agent-routing, session resolution, and provider reliability. The iMessage channel unification effort continues to advance with two overlapping PRs (#2999, #3076), while security-focused fixes are also being landed. No new releases were cut today, suggesting the maintainers are accumulating fixes before a tag.

## Releases

**None.** No new releases were published in the last 24 hours. The most recent commit referenced in issues is `2d9375531b` from 2026-06-06, indicating the project is working toward a v2.x patch or minor release.

## Project Progress

Three pull requests were merged or closed today:

- **#3063** — `docs(changelog): drop duplicated Unreleased bullets` (merged) — Author: glifocat. A clean-up PR removing duplicate changelog entries from a merge artifact.
- **#2952** — `Skill/add opencode stack` (closed, likely merged) — Author: javexed. An operational/container skill to add an OpenCode integration stack.
- **#2951** — `fix(opencode): dedicated OPENCODE_BASE_URL, read from .env, NO_PROXY` (closed, likely merged) — Author: javexed. A companion fix to #2952, enabling proper proxy bypass and environment variable configuration for OpenCode.

**Advanced but unmerged feature work:**
- **#3076** (new today) — `feat(imessage): unified local+hosted adapter targeting spectrum-ts v11` — Author: invisicat. A competing/overlapping iMessage unification PR alongside #2999 from underthestars-zhy. Both aim to unify local and hosted iMessage backends under a single `imessage` channel.
- **#3073** (new today) — `Add the Adoption Companion pack (Memory Receipts + Knowledge Inventory)` — Author: jliurner. A utility skill pack for user adoption, suggesting the project is expanding its skill ecosystem.

## Community Hot Topics

The single issue with comments today is **#3071** (1 comment), which was quickly closed after being resolved. However, several PRs are attracting attention:

- **#2999** — `feat(channels): unify iMessage into a single imessage channel` — This PR has been open for 8 days and now has a sibling PR (#3076) proposing a similar but technically different approach. This signals community interest in iMessage support but also indicates fragmentation in approach.
- **#3077** — `fix(claude): only abort on a rejected rate_limit_event; split rate_limit vs quota` — Author: javexed. References ongoing discussion in issue #3016 about Claude provider reliability. This is a high-impact fix since it addresses a bug causing false health-check failures.

**Underlying needs:** The iMessage PRs (#2999, #3076) reveal strong user demand for Apple ecosystem integration — specifically combining local (macOS bridge) and hosted (served via BlueBubbles-like infrastructure) iMessage access into a single coherent channel. The Claude provider fix (#3077) reflects frustration with Anthropic's rate-limit telemetry being misinterpreted as terminal errors.

## Bugs & Stability

**Critical:**
- **#3074** (OPEN) — `claude provider with custom ANTHROPIC_BASE_URL (OpenRouter): turns are silently dropped` — Author: apelosi. When using OpenRouter as the Anthropic-compatible backend, valid model replies are silently discarded if the SDK result event is empty. **No fix PR exists yet.** This is a significant reliability bug for users routing through OpenRouter.
- **#3075** (OPEN) — `Silent log loss + inbound message duplicate-insert errors after long uptime; no systemd unit installed` — Author: libellebilai-collab. Two issues combined: (1) logs silently stop being written after extended uptime, (2) the Matrix channel produces duplicate message insertion errors. The user notes they lack a systemd unit for proper service management. **No fix PR exists yet.**

**High:**
- **#3072** (OPEN) — `[Type: Documentation] Skill docs only document /name, which works in one of three coding harnesses` — Author: glifocat. Documentation only covers Claude Code's `/name` syntax, but Codex expects `$name` and other harnesses have different conventions. This is a cross-platform usability bug.

**Medium (fix PRs exist):**
- **#3071** (CLOSED) — `Discord: bare URLs posted by the agent arrive as literal [url](url)` — **Already fixed and closed.** The Chat SDK Discord adapter was double-wrapping markdown links.
- **#3082** (OPEN) — `test(uninstall): skip the chmod-based backup-failure test when running as root` — Author: mymac80. A test that falsely fails in root-run environments (e.g., LXC containers). Fix PR exists.

## Feature Requests & Roadmap Signals

**Likely for next release:**
1. **Unified iMessage channel** — Two competing PRs (#2999, #3076) suggest strong momentum. Expect one approach to be selected and merged soon.
2. **OpenCode stack skill** — PRs #2952 and #2951 were just merged, indicating OpenCode integration is landing immediately.
3. **Adoption Companion skill pack** — PR #3073 adds "Memory Receipts + Knowledge Inventory" tools, suggesting a push toward better user onboarding and knowledge management.
4. **Security hardening** — PR #3065 (authenticate loopback webhook) and #3066 (fix SECURITY.md) indicate security posture improvements are being prioritized.

**Potential future directions:**
- Better multi-harness support (from #3072 — documentation conventions across Claude Code, Codex, etc.)
- Systemd service unit files (from #3075 — user lacks proper service management)
- OpenRouter as a first-class provider path (from #3074 — silent turn drops when using custom base URLs)

## User Feedback Summary

**Pain points:**
- **Cross-harness skill invocation confusion** (#3072): glifocat reports that documentation only covers Claude Code's syntax, leaving Codex and other users unable to invoke skills correctly. Quote: *"Codex invokes the same skills with `$name`, and its CLI does not recognize `/name` at all."*
- **Silent failures degrade trust** (#3074): apelosi describes a scenario where "turns are silently dropped" when using OpenRouter, meaning users think the agent is responding but their messages vanish. This erodes confidence in custom provider setups.
- **Long-uptime degradation** (#3075): libellebilai-collab reports "silent log loss" and "duplicate-insert errors" after extended uptime, making debugging nearly impossible when things go wrong.
- **Discord usability regression** (#3071, now fixed): statico-alt found that bare URLs were being delivered as unclickable markdown. Minor but frustrating for Discord users.

**Satisfaction signals:**
- The iMessage unification effort (#2999, #3076) has attracted two contributors working independently, indicating strong community investment in Apple ecosystem support.
- Security improvements (#3065, #3066) from QuantumBreakz suggest the project is taking hardening seriously, which should reassure production users.

## Backlog Watch

**Long-open items needing attention:**

- **#2999** — `feat(channels): unify iMessage into a single imessage channel` — Open since 2026-07-10 (8 days). Has a competing sibling PR (#3076) filed yesterday. Maintainers need to decide which approach to adopt or how to merge them. Risk of contributor frustration if not resolved soon.
- **#3065** — `fix(security): authenticate loopback webhook to prevent action forgery` — Open since 2026-07-16. Addresses a security vulnerability (GHSA-h9g4-589h-68xv, CWE-306). While not dramatically old, security fixes should be prioritized; the PR has a `core-team` tag.
- **#3066** — `docs(security): fix SECURITY.md accuracy for v2` — Open since 2026-07-16. A documentation-only PR that resolves a stale content issue. Should be low-effort to merge.

**No orphaned issues** older than 30 days appear in today's data — the project is actively triaging its backlog.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-18

## 1. Today's Overview

The NullClaw project shows a quiet period with no new releases or pull requests in the last 24 hours, and only one open issue receiving recent updates. The single active issue is a critical crash bug affecting Telegram gateway functionality on aarch64 Linux, suggesting ongoing stability concerns in the messaging pipeline. With no merged PRs or closed issues today, development velocity appears to be low. The project remains operational but may be in a maintenance or triage phase for the Telegram integration path. Overall health is stable but warrants close monitoring of the crash-related issue.

## 2. Releases

**No new releases today.** The latest available version remains **v2026.5.29** (from May 29, 2026). No release notes, breaking changes, or migration guides are available for this period.

## 3. Project Progress

**No pull requests were merged or closed in the last 24 hours.** No features, fixes, or improvements were merged to the main branch during this period.

## 4. Community Hot Topics

The only active discussion is:

- **[Issue #976: SIGSEGV on every inbound Telegram message](nullclaw/nullclaw Issue #976)** — 2 comments, authored by **wonhotoss**. This issue describes a deterministic crash on aarch64 Linux where every inbound Telegram message causes a segfault. The user reports a crash-loop scenario with `Restart=always` where messages are dropped entirely. The underlying need is clearly for reliable Telegram message processing — a core gateway function. The community may be awaiting maintainer guidance on whether this is a known arch-specific stack sizing issue.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| **Critical** | [#976](nullclaw/nullclaw Issue #976) | SIGSEGV on every inbound Telegram message on aarch64 Linux; inbound worker thread spawned with ~512 KB stack overflows. Causes crash-loop and message loss. | No |

**Analysis:** This is a release-blocking crash for all aarch64 Linux users of the Telegram gateway. The root cause appears to be insufficient stack size for inbound worker threads on ARM64 architecture — the ~512 KB stack likely exceeds the aarch64 default ulimit or thread stack boundary. No pull request exists yet to address this.

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed today. However, based on the crash issue context, the following are predictable near-term needs:

- **Configurable thread stack size** for inbound workers (to avoid arch-specific stack overflows)
- **aarch64-specific CI testing** for Telegram gateway to catch platform-dependent crashes pre-release
- **Crash recovery improvements** — currently `Restart=always` causes message loss; a message replay/retry mechanism could be valuable

## 7. User Feedback Summary

**Pain points:**
- Telegram gateway is completely unusable on aarch64 Linux — a confirmed regression in v2026.5.29
- Crash-loop behavior with systemd `Restart=always` results in silent message loss
- No workaround provided; user cannot receive replies to Telegram messages

**Satisfaction indicators:** Low. The single user-reported issue describes a total loss of service without a known fix. No positive feedback expressions were observed today.

## 8. Backlog Watch

- **[Issue #976](nullclaw/nullclaw Issue #976)** — Open since 2026-07-16, only 1 day old, but already a critical stability bug. Needs maintainer triage within the next 1-2 days to avoid user churn. Key questions: Is this a known issue? Is there a temporary workaround (e.g., increasing thread stack size via environment variable)? No response from maintainers yet.

**No other long-unanswered items were identified in this period.** The single open issue is recent and urgent.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-18

## 1. Today's Overview

IronClaw is in an intense, high-velocity phase with **50 issues** and **50 pull requests** updated in the last 24 hours — a sign of sustained, heavy engineering activity. The project is executing a major **architectural simplification** (documented in §4.3 and §4.4 of the Reborn simplification plan), systematically consolidating in-memory stores onto `RootFilesystem` backends, cleaning up deployment-mode type naming conventions, and renaming the canonical CLI binary. At the same time, the team is shipping **Telegram channel support** for Reborn and fixing CI infrastructure (benchmark job timeouts). **No new releases** were published today, but a draft release PR is actively open. Project health is strong, with rapid PR merging velocity (25 merged/closed) and disciplined scope management via labeled epics.

## 2. Releases

**No new releases today.** However, a release orchestration PR is open:
- **#5598** [OPEN] — Release PR for `ironclaw_common` 0.4.2→0.5.0 (API breaking), `ironclaw_safety` 0.2.2→0.2.3, `ironclaw_skills` 0.3.0→0.4.0 (API breaking), `ironclaw` 0.24.0→0.29.1. Breaking changes include a `struct` missing exported fields, `enum` variants removed, and `fn` signature changes in `ironclaw_common`. This release is likely imminent.

## 3. Project Progress

In the last 24 hours, **25 PRs were merged or closed**, demonstrating impressive execution velocity. Key areas of progress:

**Architecture Simplification (§4.3 — Store Consolidation)**
- **#6210** (merged) — Deleted `InMemoryBudgetGateStore`, replaced with `FilesystemBudgetGateStore` over in-memory backend
- **#6212** (open) — Deleting `InMemoryOutboundStateStore`, using `FilesystemOutboundStateStore`
- **#6213** (open) — Deleting `InMemoryTriggeredRunDeliveryStore`, using `FilesystemOutboundStateStore`
- **#6214** (open) — Deleting `InMemoryDeliveredGateRouteStore`, final §4.3 store consolidation
- **#6216** (open) — Annotating §4.3 store ratchet with per-entry achievable-floor status

**Architecture Simplification (§4.4 — Deployment-Mode Naming Cleanup)**
- **#6209** (merged) — Renamed `LocalFilesystem` → `DiskFilesystem` (Bucket 2)
- **#6218** (open) — Inlined `LocalDevRootFilesystem` alias → `CompositeRootFilesystem`
- **#6220** (open) — Renamed `LocalDevOutboundStores` → `OutboundStores`
- **#6222** (open) — Added deployment-mode typename ratchet test (§4.4/§10 enforcement)

**Channel Support & CLI**
- **#6159** (merged) — **Major: Telegram channel extension** for Reborn — admin bot setup, WebGeneratedCode pairing, DM entrypoint. Ships Telegram as a first-class, default-off Reborn channel.
- **#6185** (open) — **Critical rename**: promotes `ironclaw` as the canonical Reborn command, legacy binary → `ironclaw-v1`
- **#6174** (open) — Reborn CLI onboarding journey: keychain, two-prompt setup, login link

**Bug Fixes**
- **#6219** (merged) — Fixed `LocalFilesystem`→`DiskFilesystem` rename missed in Telegram test code
- **#6217** (merged) — Fixed Telegram host compilation in production Docker image
- **#6211** (open) — Fixed Reborn CLI stubs (`channels list`, `hooks list`, `logs`) from fake-success to explicit "not implemented"

**Docs & Infrastructure**
- **#6208** (merged) — Architecture simplification docs r2–r7 (capability conduits, dynamic-capability gate contract)
- **#6221** (open) — Fix: forward 350-min job cap for /benchmark suites (was timing out at 240 min)

## 4. Community Hot Topics

Most active discussions center on **Engine V2 quality, security, and channel parity**:

- **#2767** (CLOSED, 7 comments) — Epic: Separate engine v2 capability background from callable tool schemas. Core architectural decision driving much of the current work.
- **#2813** (CLOSED, 6 comments) — Engine v2: add typed assistant content model, distinguishing final vs internal tool-use text.
- **#4644** (OPEN, 2 comments, suggested_P1) — **Universal attachments across all channels**: legacy attachment pipeline into v1 + format registry + polished web UX. A high-priority, long-running feature request.
- **#6170** (CLOSED, 2 comments) — **Security-critical**: Remove user access to file system via shell. Users on multi-tenant instances could execute unbounded `ls -all` via WebUI. Closed with fix.
- **#5331** (CLOSED, 2 comments) — Tool-approval 'always' may not auto-approve the next same-tool call (engine v2). Suspected on-off bug.

**Underlying needs**: The community (mostly core contributors and QA engineers) is pushing for:
1. **Engine V2 parity and quality** — repeated issues around tool calls, image rendering, metadata propagation
2. **Multi-tenant security** — the shell access vulnerability (#6170) was fixed rapidly
3. **Channel ecosystem maturity** — Telegram support was a top request, now delivered

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix Status |
|----------|-------|---------|------------|
| **Critical** | #6170 | Multi-tenant users can access arbitrary filesystem via shell commands in WebUI | **CLOSED/fixed** |
| **High** | #5331 | Tool-approval 'always' may not auto-approve next same-tool call (engine v2) | **CLOSED** — medium confidence; may be flaky |
| **High** | #6215 [NEW] | Reborn model cost table / budget accountant not rebuilt by LLM reload chokepoint (regression from #6174 boot convergence) | **OPEN** — reported today |
| **Medium** | #4278 | Potential performance issue: unbounded conversation growth in ENGINE_V2 (context window exhaustion) | **CLOSED** — likely a design review finding |
| **Medium** | #3618 | Debug panel stats stuck at 0 on engine v2 | **CLOSED** |
| **Low** | #3465 | ENGINE_V2 repeatedly calls `tool_info` during tool-use flows | **CLOSED** |
| **Low** | #3464 | Failed tool calls render inconsistently in Gateway UI | **CLOSED** |
| **Low** | #3463 | Engine V2 generated images do not render correctly in Gateway UI | **CLOSED** |
| **Infra** | #6221 | /benchmark suite cancelled at 240-min job cap — was timing out | **PR OPEN** — forward cap to 350 min |

**Note**: All eight Engine V2 UI/rendering bugs from May (tracked in #3618, #3465, #3464, #3463) were recently closed, suggesting a significant engine v2 polish push has completed.

## 6. Feature Requests & Roadmap Signals

**Likely to ship in next version (1.0 cut):**
- **Telegram channel for Reborn** (#5124) — parent #5119, PR already merged (#6159). Will ship with upcoming release.
- **CLI rename `ironclaw-reborn` → `ironclaw`** (#6185, #6201) — marks Reborn as the primary interface.
- **Architecture simplification completion** — §4.3 store consolidation nearly done; §4.4 naming cleanup underway.

**Likely for post-1.0:**
- **Universal attachments across all channels** (#4644, suggested_P1, reborn) — a major UX gap blocking parity with v1.
- **Engine V2 capability background / tool schema separation** (#2767) — foundational but deferred from 1.0.
- **REPL/eval suite for Engine V2 quality regressions** (#2722) — parent epic #2721, measurable quality gate.

**User-requested features (lower priority):**
- [Not observed from this data, as issues/PRs are primarily core-contributor driven]

## 7. User Feedback Summary

The project is overwhelmingly **core-contributor-driven**; direct end-user feedback is minimal in this dataset. However, several signals are clear:

**Pain points being addressed:**
- **Multi-tenant security** (#6170) — users could access filesystem through shell; fixed promptly.
- **Engine V2 tool call rendering** — multiple May bugs (image rendering, tool failure display, stats) all recently closed. UI parity with v1 improving.
- **Engine V2 tool approval flakiness** (#5331) — "always" auto-approval not working reliably; identified and being investigated.
- **Telegram channel users** now have Reborn support (#6159) — parity gap closed.

**Satisfaction signals:**
- Rapid issue closure: of 50 issues updated, **24 were closed** in 24 hours.
- The Reborn architecture simplification is being executed systematically with clear documentation and ratchets.
- The draft release PR shows coordinated progress toward a 1.0 milestone.

**Dissatisfaction indicators:**
- Engine V2 still has multiple rough edges (tool info spamming, metadata loss, UI glitches) — though most are now closed.
- The release process appears to be blocking on coordination; PR #5598 has been open since July 3.

## 8. Backlog Watch

| Item | Days Open | Notes |
|------|-----------|-------|
| **#4644** — Universal attachments (suggested_P1, reborn) | 39 days | Feature request for wire the legacy attachment pipeline into v1 + extensible format registry + polished web UX. Long-running, high-value, but blocked on Reborn channel-porting work |
| **#3577** — Track v1 ports for legacy channels (suggested_P2) | 66 days | Tracking issue; Reborn channel porting guide exists but execution is slow |
| **#5598** — Release PR | 15 days | Draft release PR; blocking internal coordination? Breaking changes across multiple crates need careful review |
| **#5219** — Harden activity identity invariants (refactoring) | 23 days | Post-refactor hardening for capability activity identity; may need broader batching path fixes |

**Most at risk of neglect:**
- **#4644** (Universal attachments) — critical for feature parity but appears deprioritized for the 1.0 refactoring push.
- **#5598** (Release) — delay suggests either unresolved breaking changes or process bottlenecks; main blockers: `ironclaw_common` struct field visibility and enum variant removals.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-18

## Today's Overview
LobsterAI exhibited high activity on 2026-07-18, with 15 pull requests updated in the last 24 hours—13 of which were merged or closed—and 7 issues updated (5 closed). A new release, **LobsterAI 2026.7.16**, was published on July 16, introducing a campaign final reward claim feature and refactoring clipboard attachment extraction. The project is in a healthy iteration cycle, with significant UI polish, stability fixes, and new feature work (AI-generated skins, failure detail surfacing) moving through the pipeline. Two older open issues and two open PRs remain from April, suggesting a manageable but persistent backlog.

## Releases
- **LobsterAI 2026.7.16** (July 16, 2026)  
  - **Notable changes**:  
    - `feat: add campaign final reward claim feature` — adds end-user reward claim capability for campaigns.  
    - `refactor(cowork): extract clipboard attachment file extraction into testable helper` — improves testability and maintainability of the clipboard attachment pipeline.  
  - **Breaking changes**: None identified.  
  - **Migration notes**: No special migration steps required; this is a normal feature release.

## Project Progress
The following key PRs were merged or closed in the last 24 hours, reflecting progress across multiple areas:

- **AI-Generated Skins (#2352)** — Merged: Adds an AI-generated skin-pack workflow and customization kit, with skin management (apply, restore, reapply, delete) and immersive presentation across sidebar, title bars, and conversations. This is a major UI personalization feature.  
  [netease-youdao/LobsterAI PR #2352](https://github.com/netease-youdao/LobsterAI/pull/2352)

- **Artifact Preview Stability (#2357)** — Closed: Fixes layout instability in the artifact panel by applying stable keys, preventing subtree rebuilds on expand/collapse and reducing flicker.  
  [netease-youdao/LobsterAI PR #2357](https://github.com/netease-youdao/LobsterAI/pull/2357)

- **Structured Run Failure Details (#2348)** — Merged: Adds a redacted `CoworkErrorDetail` structure surfaced in the error UI, enabling users to see provider, model, HTTP code, error type, and failover reason instead of just a normalized message.  
  [netease-youdao/LobsterAI PR #2348](https://github.com/netease-youdao/LobsterAI/pull/2348)

- **Email Diagnostics in New Chat (#2346)** — Merged: Fixes a bug where email diagnostics could override stale history or IM sessions; now opens in a dedicated new chat.  
  [netease-youdao/LobsterAI PR #2346](https://github.com/netease-youdao/LobsterAI/pull/2346)

- **Release 2026.7.17 (#2356)** — Merged: Prepared and tagged the next release.  
  [netease-youdao/LobsterAI PR #2356](https://github.com/netease-youdao/LobsterAI/pull/2356)

- **Service Deployment Data Persistence (#2349)** — Merged: Advances data persistence for service deployments, though the PR description lacks detailed change notes.  
  [netease-youdao/LobsterAI PR #2349](https://github.com/netease-youdao/LobsterAI/pull/2349)

- **UI Polish** — Several PRs refined UI: Windows caption button hover colors (#2355), caption icon sizing (#2351), sidebar ad banner optimization (#2350), and general main UI update (#2353).  
  [netease-youdao/LobsterAI PR #2355](https://github.com/netease-youdao/LobsterAI/pull/2355)  
  [netease-youdao/LobsterAI PR #2351](https://github.com/netease-youdao/LobsterAI/pull/2351)  
  [netease-youdao/LobsterAI PR #2350](https://github.com/netease-youdao/LobsterAI/pull/2350)

- **Installer UI Fix (#2345)** — Merged: Localized NSIS web installer download prompts and fixed progress bar overlap.  
  [netease-youdao/LobsterAI PR #2345](https://github.com/netease-youdao/LobsterAI/pull/2345)

- **Update Check Interval (#2347)** — Merged: Reduced automatic update check interval from 12 hours to 2 hours for faster rollout detection.  
  [netease-youdao/LobsterAI PR #2347](https://github.com/netease-youdao/LobsterAI/pull/2347)

## Community Hot Topics
- **Sidebar Resize (Issue #1314, PR #1315)** — Both from April 2: The issue (1 comment) and its corresponding PR (no comments) request the ability to drag-resize the sidebar (180px–480px range). This has been sitting open for over 3 months and represents a sustained user desire for flexible layouts.  
  [netease-youdao/LobsterAI Issue #1314](https://github.com/netease-youdao/LobsterAI/issues/1314)  
  [netease-youdao/LobsterAI PR #1315](https://github.com/netease-youdao/LobsterAI/pull/1315)

- **Table Rendering (Issue #1311)** — Open since April 2: Reports that table content displays raw HTML tags on line breaks and requests hover full-text display for truncated cells. This UI polish issue has only 1 comment, indicating low community engagement but a clear usability enhancement.  
  [netease-youdao/LobsterAI Issue #1311](https://github.com/netease-youdao/LobsterAI/issues/1311)

## Bugs & Stability
No new critical bugs were reported in the last 24 hours. The five closed issues were all stale (from April 2) and were automatically closed. The most significant stability-related work in the latest PRs:

- **Artifact panel flicker (#2357)** — Fixed; prevents flicker during preview panel expansion/collapse. (Medium severity, fixed)  
- **Email diagnostics overriding history (#2346)** — Fixed; now opens in a fresh chat. (Medium severity, fixed)  
- **Windows caption button hover colors (#2355)** — Fixed; aligns with theme-aware surface colors. (Low severity, fixed)  
- **NSIS installer progress bar overlap (#2345)** — Fixed; visual regression in installer. (Low severity, fixed)

## Feature Requests & Roadmap Signals
- **Sidebar resizing (#1314, #1315)** — The highest-signal feature request openly pending. Given it already has a PR ready (with implementation including min/max width constants), this may be merged in the next 1–2 releases.
- **AI-generated skins (#2352)** — Just merged; this feature is now live and may be further refined in upcoming releases (e.g., more theme presets, user-editable palettes).
- **Campaign reward claim (2026.7.16)** — New feature; downstream adoption and bug reports may follow in the next weeks.
- **Table rendering improvements (#1311)** — Low conversation activity, but a valid UX enhancement; may be picked up in a future UI polish sprint.

## User Feedback Summary
User-reported issues from April remain unaddressed and were auto-closed as stale:
- **BSOD on Pageant launch (#1354)** — The most severe user-reported crash; caused by launching `pageant` via LobsterAI. No resolution posted.
- **Pageant false positive launch (#1357)** — Agent reports success but does not actually start `pageant`. No resolution.
- **Scheduled task deletion persists after restart (#1359)** — Deleted tasks reappear on restart. No resolution.
- **Scheduled task UX confusion (#1358)** — No visual feedback when clicking a scheduled task; user cannot tell if it started.
- **Duplicate agent name creation (#1360)** — No validation preventing identical custom agent names.

These indicate a cluster of UX and reliability issues around task management and agent/action execution that have not been addressed in the current active development cycle.

## Backlog Watch
The following items have been open since April 2, 2026 (over 3 months) and require maintainer attention:

- **Sidebar resize feature (Issue #1314, PR #1315)** — Both open; PR #1315 appears to have a working implementation. Needs review and merge.  
  [netease-youdao/LobsterAI Issue #1314](https://github.com/netease-youdao/LobsterAI/issues/1314)  
  [netease-youdao/LobsterAI PR #1315](https://github.com/netease-youdao/LobsterAI/pull/1315)

- **Home-screen input draft per agent (PR #1308)** — Open since April 2; proposes per-agent draft isolation. No comments or reviewer activity.  
  [netease-youdao/LobsterAI PR #1308](https://github.com/netease-youdao/LobsterAI/pull/1308)

- **Table rendering issues (Issue #1311)** — Low engagement but a clear UI bug.  
  [netease-youdao/LobsterAI Issue #1311](https://github.com/netease-youdao/LobsterAI/issues/1311)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-18

## 1. Today's Overview
Moltis shows low but meaningful activity today, with 2 open pull requests and 1 open enhancement issue updated in the last 24 hours. Two new patch releases were issued yesterday (20260717.02 and 20260717.03), indicating active maintenance and incremental feature delivery. No PRs were merged or closed today, so the project is in a review/iteration phase rather than a rapid-deployment cycle. Overall project health appears stable, with maintainer attention on both infrastructure (memory backends) and UX improvements (ACP-only setups). Community engagement is moderate, with one long-running feature request still gathering traction.

## 2. Releases
Two releases were published on **2026-07-17**:
- **20260717.02** — Patch release
- **20260717.03** — Subsequent patch release, likely a hotfix or minor addition

No changelogs, breaking changes, or migration notes were provided in the data. Both releases appear to be continuous delivery tags (semver-like date-based versioning). Given the presence of PR #1158 and #1157, these likely include the `zvec` memory backend and ACP-only chat setup fixes.

## 3. Project Progress
**No PRs were merged or closed today.** However, two PRs remain open and under review:
- **PR #1158** (`feat(memory): add zvec vector database memory backend`) — a new alternative memory backend using Zvec and redb, feature-gated behind a `zvec` Cargo feature. This is a significant architectural addition for users who prefer local, lightweight vector storage.
- **PR #1157** (`fix(web): support ACP-only chat setup`) — improves the onboarding and session picker UX for users running Moltis without a local LLM, relying solely on ACP external agents.

Both PRs were authored and last updated yesterday, suggesting active code review is in progress.

## 4. Community Hot Topics
- **#574 (Issue, Enhancement) — [Feature]: Model Routing Per Topic**  
  Author: azharkov78 | Created: 2026-04-06 | Updated: 2026-07-18 | Comments: 3 | 👍: 1  
  [GitHub Link](https://github.com/moltis-org/moltis/issues/574)  
  This is the only open issue updated today, and it has been active for over 3 months. The request is for per-topic model routing, indicating a user need for finer-grained control over which LLM handles different conversation domains. The single upvote and 3 comments suggest moderate interest but not overwhelming demand. The underlying need is multi-model orchestration with topic-aware dispatch, likely for enterprise or power-user workflows.

## 5. Bugs & Stability
**No bugs, crashes, or regressions were reported today.** The single open issue (#574) is an enhancement request, not a bug. No stability-related PRs were filed. Based on the data, the current codebase appears stable with no urgent defects.

## 6. Feature Requests & Roadmap Signals
- **Model Routing Per Topic (#574)** — The only new signal today. This feature would allow users to assign different models (or model providers) to specific conversation topics. It is a natural evolution for a multi-agent/AI assistant platform like Moltis, and could be paired with the ACP external agent support being worked on in PR #1157.
- **Prediction**: Model routing is likely not in the immediate next release (which appears focused on memory backends and ACP UX polish), but could be a **post-v0.8 or v0.9 candidate** if community interest grows.

## 7. User Feedback Summary
- **Pain point**: Users want to route conversations by topic to different models — this suggests dissatisfaction with a "one model fits all" approach, especially in multi-use-case setups (e.g., technical queries vs. creative writing).
- **Use case**: Power users running Moltis for varied domains (coding, research, casual chat) who want to optimize cost/performance per task.
- **Satisfaction**: No negative sentiment expressed today; the community appears engaged and collaborative.

## 8. Backlog Watch
- **Issue #574** ([GitHub Link](https://github.com/moltis-org/moltis/issues/574)) — Open since 2026-04-06 (over 3 months) with no maintainer response visible in the data. This is the longest-unanswered open issue with active discussion. It may need a maintainer to triage, label, or assign to a milestone to prevent stagnation.

**No other backlog items** (stale PRs/issues) were identified in today's data.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-18

## 1. Today's Overview

CoPaw (QwenPaw) had an active day on **2026-07-17** with **39 PRs updated** (17 open, 22 merged/closed) and **23 issues updated** (14 open, 9 closed). A new patch release **v2.0.0.post3** was published, primarily containing a fix for MCP credential migration and CI hardening. Community engagement remained high: users reported real-world upgrade pain (Windows admin privilege regressions, embedding config breakage from 1.x to 2.0) and submitted thoughtful feature requests around per-chat tool/MCP control and reasoning depth selection. The project shows strong maintenance velocity, with maintainers actively merging PRs and responding to bug reports. However, the Windows privilege escalation issue and session busy-message dropping bug remain unresolved and are attracting user frustration.

## 2. Releases

**New release: v2.0.0.post3** (patch)  
- **Link:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post3  
- **Changes:**  
  - fix(mcp): migrate `${VAR}` headers to env credential refs during driver migration (PR #6091)  
  - refactor(ci): harden desktop workflows and drop legacy verify dead code (by @yutai78786)  
- **Migration notes:** No breaking changes reported. This is a minor patch release.  
- **Installation verification issue:** #6223 (open, updated today) tracks OS/platform verification for this release.

## 3. Project Progress

**22 PRs merged/closed today.** Notable advancements:

- **Desktop shutdown gracefulness:** PR #6225 (`fix(desktop): gracefully shut down backend sidecar before exit`, by @jinglinpeng) — changes Tauri shell from `SIGKILL` to graceful `SIGTERM` + wait; addresses issue #6219.  
- **Startup concurrency bounding:** PR #6198 (`feat: bound multi-agent startup and improve readiness UX`, by @rayrayraykk) — merged; bounds multi-agent init concurrency, fixes issue #6144 (36-agent ReMe startup memory spike).  
- **Token usage cache fix:** PR #6220 (`fix(token_usage): don't persist an unseeded cache on shutdown`, by @Yigtwxx) — merged; prevents persisting empty cache on shutdown.  
- **Multimodal probing fix:** PR #6217 (`fix: treat unprobed multimodal as fail-open to prevent image stripping`, by @qbc2016) — merged; `None`-probed models no longer strip images.  
- **Model slot override:** PR #6218 (`fix(runtime): pass model_slot_override from HTTP request to model factory`, by @cuiyuebing) — merged.  
- **Redundant nvidia-smi probe removal:** PR #6204 (merged, by @Yigtwxx) — removes wasteful CUDA probe in `get_vram_size_gb`.  
- **Browser wait cap:** PR #6170 (`fix(browser): add MAX_WAITTIME for browser use`, by @x1n95c) — merged; caps model-supplied wait durations.

**Open in-progress PRs (selected):**  
- #6210 — Default loop as agent mode refactor  
- #6151 — Background tool call offload with frontend controls  
- #5698 — Buildin tool `run_tool_batch` adaptation to AgentScope 2.0  
- #5187 — Windows desktop GUI automation (long-running, since June 14)

## 4. Community Hot Topics

Most discussed issues and pull requests (sorted by comment count):

1. **#6161** (7 comments, closed) — [Bug]: Windows update prevents QwenPaw from starting without admin rights  
   *Link:* https://github.com/agentscope-ai/QwenPaw/issues/6161  
   *Analysis:* User reports that after a Windows update, QwenPaw Desktop hangs at "Waiting for HTTP ready..." unless run as Administrator. This is the highest-engagement issue, indicating a critical regression for Windows users.

2. **#5995** (6 comments, open) — [Bug]: Messages silently dropped when session is busy  
   *Link:* https://github.com/agentscope-ai/QwenPaw/issues/5995  
   *Analysis:* Feishu channel messages are silently dropped if the agent is busy processing. No queue, no error. High-severity reliability bug — users may lose messages without warning.

3. **#6155** (5 comments, open) — [Bug]: Multiple issues after upgrading from 1.x to 2.0  
   *Link:* https://github.com/agentscope-ai/QwenPaw/issues/6155  
   *Analysis:* User documents three distinct regressions: embedding config bug (missing `pass_dimensions`), auto-memo system inconsistency, and console deserialization errors.

4. **#5976** (4 comments, open) — [Feature]: Separate control for tool call parameters and result messages in channels  
   *Link:* https://github.com/agentscope-ai/QwenPaw/issues/5976  
   *Analysis:* User wants per-channel truncation of tool call results. Directly addressed by open PR #6233.

5. **#6227** (1 comment, 1 👍, open) — [Feature]: Per-chat MCP server and tool-level control  
   *Link:* https://github.com/agentscope-ai/QwenPaw/issues/6227  
   *Analysis:* High-demand feature — users want granular control over which MCP servers/tools are active per conversation.

## 5. Bugs & Stability

**Critical severity:**
- **#6161** (closed as invalid, but root cause not fixed) — Windows update breaks non-admin startup. Duplicate reported in #6169 (closed as duplicate). The underlying issue persists — users must run as Administrator. No fix PR exists.  
- **#5995** (open) — Messages silently dropped in busy sessions. No queuing mechanism. High user impact. No fix PR exists yet.  
- **#6155** (open) — 1.x → 2.0 upgrade causes embedding config breakage, auto-memo glitches, console deserialization errors. PR #6235 (manual memory reindex) may partially address the memory component, but embedding fix remains.

**Medium severity:**
- **#6193** (open) — MCP drivers start sequentially instead of in parallel (8 clients = 40s vs 5s). Performance bug, not data-loss but impacts startup time.  
- **#6144** (closed) — Multi-agent startup memory spike (36 agents). Fixed by PR #6198 (merged).  
- **#6201** (closed) — PubMed MCP causes llama.cpp error. Likely a provider-specific issue.

**Low severity / minor:**
- **#6003** (closed) — Console not displaying Feishu channel messages (but executing them).  
- **#6202** (closed) — Desktop progressive rendering breaks beyond 20 skills (Docker unaffected).  
- **#6204** (closed) — Redundant nvidia-smi probe (performance). Fixed by PR #6204 (merged).  
- **#6220** (closed) — Unseeded token cache persisted on shutdown. Fixed by PR #6220 (merged).  
- **#6217** (closed) — Unprobed multimodal models have images stripped. Fixed by PR #6217 (merged).  
- **#6218** (closed) — `model_slot_override` not passed from HTTP requests. Fixed by PR #6218 (merged).

**Stability summary:** Critical bugs (Windows admin, silent message dropping) remain unresolved. The team is actively addressing medium and low-severity issues with fast turnaround (fix PRs issued same day for many). The Windows privilege escalation issue is the most urgent unaddressed problem.

## 6. Feature Requests & Roadmap Signals

**High-signal requests (multiple upvotes or detailed proposals):**

| Issue | Request | Likely inclusion |
|-------|---------|------------------|
| #6227 | Per-chat MCP server & tool selection | 🔮 Medium — conceptually aligns with #5976 (tool truncation) and existing per-chat settings; may be in next minor release |
| #6228 | Per-chat internet search toggle | 🔮 Low — user quality-of-life, but not currently prioritized in PRs |
| #6229 | Reasoning depth selection (Light/Medium/Deep/Auto) | 🔮 Low — advanced UX feature, no PRs |
| #6230 | Hermes model family support as secondary engine | 🔮 Very low — niche use case |
| #5976 | Separate tool call/result display controls | 🔮 High — **PR #6233 is open** and addresses this directly |
| #6231 | Multiple configs for same model ID | 🔮 Low — user convenience, no PR |
| #6205 | JS/CSS compression & caching for console | 🔮 High — **PR #6232 is open** and addresses this directly |
| #6162 | Auto-read model context window for `max_input_length` | 🔮 Medium — improves UX, no PR yet |
| #5919 | Global runtime configuration (avoid per-agent config) | 🔮 Medium — reduces friction, no PR yet |

## 7. User Feedback Summary

**Positive signals:**
- Users are actively upgrading to v2.0.0 (multiple reports) and engaging with new features (MCP, memory).  
- Feature requests are thoughtful and well-scoped, indicating an engaged power-user community.  
- The rapid closure of bugs (multiple fix PRs merged same day as bug reports) shows responsive development.

**Pain points:**
- **Windows user frustration:** The non-admin startup regression (#6161, #6169) is the most vocal complaint. Users report clean installations, firewall checks, and config modifications — all to no avail. Workaround requires admin rights, which many enterprise users cannot obtain.  
- **Upgrade friction:** Upgrading from 1.x to 2.0 breaks embedding configuration, auto-memo, and console display (#6155). Users report this as a blocker for migration.  
- **Missing feedback on drop:** Silent message dropping in busy sessions (#5995) is a trust-killing bug — once users discover messages are lost, confidence in reliability drops.  
- **MCP startup slowness:** #6193 reports 8x slower startup due to sequential MCP init; users with many MCP clients are disproportionately affected.  
- **Missing global config:** #5919 (since July 10, 1 comment) — users find per-agent config repetition "very annoying."

**Satisfaction indicators:**
- High engagement (23 issues, 39 PRs in one day) — users and contributors are active.  
- Feature requests are getting opened with detailed specs (e.g., #6227, #6229), suggesting users believe their feedback is valued.

## 8. Backlog Watch

Issues and PRs that have been open for extended periods without maintainer response or action:

| Issue/PR | Days open | Summary | Risk |
|----------|-----------|---------|------|
| **#5187** (PR) | 33 | Windows desktop GUI automation with UIA + Tauri control mode | Medium — large PR, long-running, may be awaiting review |
| **#5698** (PR) | 17 | `run_tool_batch` adaptation to AgentScope 2.0 | Low — work-in-progress |
| **#5995** (Bug) | 6 | Messages silently dropped when session busy | **High** — critical reliability bug, no assigned fix |
| **#6155** (Bug) | 3 | 1.x→2.0 upgrade regressions (embedding, memo, console) | **High** — blocks migration, partial fix via #6235 |
| **#6161** (Bug, closed) | 2 | Windows non-admin startup failure | **Critical** — closed as "invalid" but root cause persists; reopening or linking to duplicate may be needed |
| **#5976** (Feature) | 7 | Separate tool call/result display control | Low — PR #6233 addresses |

**Maintainer attention needed urgently:**
1. **#5995** — Silent message dropping. No maintainer comment or assignee. This is a reliability landmine.  
2. **#6155** — Upgrade regression bundle. Needs a maintainer to triage which sub-bugs are fixed by #6235 and which require separate work.  
3. **#6161 / #6169** — Windows admin regression. Closing as "invalid" or "duplicate" without a fix risks alienating the Windows user base. Triage and at minimum accept as a known issue.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-07-18

## 1. Today's Overview
ZeptoClaw saw a moderate day of activity, with 8 issues closed in the last 24 hours and no new pull requests or releases. All closed issues were low-touch "chore" tasks focused on updating D5 gate metadata and cross-component fields for a batch of security-related CSV rows and issue references. The project appears to be in a steady maintenance/cleanup phase, with zero open issues or PRs currently active—indicating that the maintainers are efficiently clearing the backlog. No code changes, new features, or bug fixes were introduced today.

## 2. Releases
No new releases were published on 2026-07-18 or in the recent past. The project remains at its previous version.

## 3. Project Progress
No pull requests were merged or closed today. All progress was reflected in the 8 closed issues, which were exclusively **chore/analysis** tasks:

- **#636** – D5 gate data update for Issue-zeptoclaw-263, row 34  
  [qhkm/zeptoclaw Issue #636](https://github.com/qhkm/zeptoclaw/issues/636)  
- **#637** – D5 gate data update for Issue-zeptoclaw-264, row 35  
  [qhkm/zeptoclaw Issue #637](https://github.com/qhkm/zeptoclaw/issues/637)  
- **#638** – D5 gate data update for Issue-zeptoclaw-268, row 36  
  [qhkm/zeptoclaw Issue #638](https://github.com/qhkm/zeptoclaw/issues/638)  
- **#639** – D5 gate data update for Issue-zeptoclaw-329, row 37  
  [qhkm/zeptoclaw Issue #639](https://github.com/qhkm/zeptoclaw/issues/639)  
- **#640** – D5 gate data update for Issue-zeptoclaw-466, row 38  
  [qhkm/zeptoclaw Issue #640](https://github.com/qhkm/zeptoclaw/issues/640)  
- **#641** – D5 gate metadata refresh for issue 268, row 36 (llm-enhance)  
  [qhkm/zeptoclaw Issue #641](https://github.com/qhkm/zeptoclaw/issues/641)  
- **#642** – D5 gate metadata refresh for issue 329, row 37 (llm-enhance)  
  [qhkm/zeptoclaw Issue #642](https://github.com/qhkm/zeptoclaw/issues/642)  
- **#643** – D5 gate metadata refresh for issue 466, row 38 (llm-enhance)  
  [qhkm/zeptoclaw Issue #643](https://github.com/qhkm/zeptoclaw/issues/643)

These tasks are all part of a systematic "D5 gate-points" data cleaning and enrichment workflow targeting the `llm-enhance/official-cve/issue-security/` JSON records.

## 4. Community Hot Topics
Today's community interaction was minimal. All 8 issues received exactly **1 comment** each (likely from the author or a bot) and **0 reactions**. No discussion threads emerged. The uniform pattern suggests these updates were driven by an automated or semi-automated batch process rather than organic community debate. The underlying need appears to be maintaining data integrity and completeness in the project's CVE (Common Vulnerabilities and Exposures) analysis pipeline.

## 5. Bugs & Stability
No bugs, crashes, regressions, or stability issues were reported today. All closed issues were non-functional chores, and no open issues remain that could indicate unresolved problems.

## 6. Feature Requests & Roadmap Signals
No new feature requests were filed. The consistent focus on D5 gate-point metadata updates suggests the project is actively refining its security vulnerability classification and cross-referencing infrastructure. Future versions may introduce automated tooling to reduce manual row-by-row updates, or a dashboard to visualize D5 gate coverage across issues.

## 7. User Feedback Summary
No user feedback, pain points, or use-case discussions were captured in today's data. The project appears to have no active public discourse beyond the author YLChen-007 performing maintenance tasks.

## 8. Backlog Watch
No long-unanswered issues or PRs require maintainer attention today. The project's backlog is effectively zero—no open issues or pull requests remain across the repository. This suggests that the maintainers are either very responsive or that community engagement is currently low.

---

**Project Health Assessment**: ZeptoClaw is in a stable, low-activity maintenance phase with no outstanding work items. The project is methodically improving its data quality for security analysis but lacks new feature development, community interaction, or release momentum. Maintainers appear to be working efficiently through a structured data enrichment pipeline.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-18

## Today's Overview

ZeroClaw remains in an intense development cycle, with **50 issues and 50 PRs updated in the last 24 hours** indicating a highly active codebase and community. The project closed **8 issues** and **12 pull requests** in this period, suggesting steady forward momentum despite a high (42) open issue count. The maintainer team experienced a significant transition—**@singlerider**, a major contributor named in 41 CODEOWNERS rules, departed the project, with **@JordanTheJet** stepping into successor roles via PR #9107. No new releases were published today; the most recent release continues to be v0.8.3, which shipped with redundant signing mechanisms that are now being consolidated. Security, supply-chain integrity, and multi-agent architecture dominate the roadmap discussions.

## Releases

**No new releases today.** The last published version remains v0.8.3, which is now the subject of active consolidation work (Issue #9101) to reduce its three parallel provenance/signing mechanisms down to one coherent story.

## Project Progress

**12 PRs were merged or closed today**, spanning several areas:

- **Runtime fixes:** PR #8913 (closed) adds visible stop reasons when the agent exhausts `max_tool_iterations`, eliminating silent halts. PR #8845 (closed) fixes a live session rebuild gap where `agents.<alias>.model_provider` changes weren't reflected in running sessions.
- **Documentation & CI improvements:** PR #9045 (closed) documents generated docs and localization lifecycles. PR #8974 (closed) fixes a broken ESP32 hardware design link. PR #9118 (open) aligns Code Analysis workflow MSRV to 1.96.1.
- **Testing:** PR #8882 (closed) adds schema cleaner regression tests for escaped JSON Pointer refs. PR #8896 (closed) narrows benchmark compile targets.
- **Infrastructure:** PR #9107 (open) updates CODEOWNERS after @singlerider's departure; PR #9108 (open) adds a firmware protocol host gate CI check.

Notable still-open PRs moving forward include the **Inkbox native channel** (#8384, size:XL), **Matrix progress drafts** (#8443, size:XL), **goal preservation across daemon reload** (#8996, size:XL), and **webhook ingress → WASM plugin queue** (#8862, size:L).

## Community Hot Topics

The most active discussions reveal a community deeply focused on **security, multi-tenancy, and observability**:

- **Issue #8177 (11 comments)** — RFC for supply-chain signing with hardware PGP, hermetic builds, and SLSA provenance. This expands on hardened CI pipeline work and is the most-commented issue, reflecting strong maintainer and contributor interest in release integrity.
- **Issue #5982 (10 comments)** — Per-sender RBAC for multi-tenant agent deployments. Users want to run a single ZeroClaw instance serving customers, operators, and developers with isolated workspaces—a key enterprise feature request.
- **Issue #3566 (8 comments, 7 👍)** — A2A (Agent-to-Agent) Protocol support. This is the community's most "liked" open item, showing strong demand for inter-agent communication with other ZeroClaw instances, NanoClaw, and OpenClaw.
- **Issue #9101 (6 comments)** — Consolidating release attestation mechanisms from three parallel signing approaches to one coherent story. This is a direct operational pain point from the v0.8.3 release process.

## Bugs & Stability

**S1 (workflow-blocked) issues remain active:**

- **Issue #8563** — SOPs not available to agents through the web dashboard chat session. Configured SOPs at the shared path are not detected by the runtime. *Status: accepted, no fix PR yet.*
- **Issue #8560** — `browser_open` hangs the agent turn when launcher cannot open a window (headless host). Also affects robot-kit TTS and channels ffmpeg. *Status: in-progress.*
- **Issue #7527** — macOS app not functional after install (cannot detect granted permissions, displays empty page, window disappears on restart). *Status: blocked.*
- **Issue #5869** — RUSTSEC advisory cluster from `rumqttc v0.25.1` pinning old `rustls-webpki` and `rustls-pemfile` versions (4 advisories). *Status: blocked.*

**S2 (degraded behavior) issues:**
- **Issue #5628** — Daemon service auto-start causes port conflicts with manual runs. *Status: accepted.*

No new S1 or S2 bugs were reported *today*—the current bug list represents ongoing stability concerns rather than regressions from recent merges.

## Feature Requests & Roadmap Signals

Several large RFCs and trackers indicate the **v0.9.0** scope is taking shape:

- **Issue #7141** — RFC for OIDC authentication provider support (target v0.9.0, Security/Architecture umbrella). This is the gateway to enterprise SSO.
- **Issue #8891** — Persistent memory tracker: wiring curation, relevance, and operability planes to parity with mature agent runtimes. Multiple PRs are in flight.
- **Issue #8135** — Wasm-first plugin runtime: default-on, capability enforcement, signed distribution. This would eliminate Node.js dependency.
- **Issue #6996** — Granular sandbox policy for filesystem and network restrictions (Landlock, Bubblewrap, Seatbelt).
- **Issue #6293** — Air-gapped execution mode with companion daemon over unix socket (offline agent container + online proxy).

**Likely for next release (v0.8.4 or v0.9.0):** The release attestation consolidation (#9101), OIDC provider support (#7141, #6250), improved Discord channel filtering (#6378), and the documentation-as-capability RFC (#8367) appear close to resolution.

## User Feedback Summary

**Positive signals:** The community is actively contributing large features—the Inkbox channel (#8384), Herdr agent reporting integration (#8337), and Matrix progress drafts (#8443) are all community-authored PRs nearing completion. The 9 👍 on Issue #2767 (Multi-Agent Routing) and 7 👍 on Issue #3566 (A2A Protocol) suggest strong user satisfaction with the roadmap direction.

**Pain points:**
- **macOS users** cannot run the app at all (#7527, S1, blocked).
- **SOP (standard operating procedure) configuration** broken in web dashboard sessions (#8563, S1, no fix).
- **Headless/server users** face agent hangs from subprocess blocking (#8560, in-progress).
- **Documentation gaps:** Cron jobs lack documentation and cannot target specific models (#7762). Installation docs need improvement (#5269).
- **Configuration UX:** Users want in-TUI alias renaming (#7468), arrow-key navigation in edit strings (#7467), and more flexible string editing.

## Backlog Watch

**Critical items needing maintainer attention:**

1. **Issue #7527** (2026-06-12) — macOS app broken. *Status: blocked, needs-author-action.* This has been unresolved for over a month with no fix PR.
2. **Issue #8367** (2026-06-26) — RFC for capability-aware documentation. *Status: blocked, needs-author-action.* @Audacity88 has been waiting for guidance.
3. **Issue #6293** (2026-05-03) — Air-gapped execution mode RFC. *Status: blocked, needs-author-action.* No response from author @singlerider, who has now departed the project.
4. **PR #8996** (2026-07-11) — Goal preservation across daemon reload. *Needs-author-action.* This size:XL PR from @vrurg is critical for reliability.
5. **PR #8384** (2026-06-27) — Inkbox native channel. *Needs-author-action.* A significant community contribution waiting for review.

The departure of @singlerider (who authored 5 open RFCs and was tagged in PRs #8845, #8866, #9107) may create a backlog gap. PR #9107 reassigns their CODEOWNERS responsibilities to @JordanTheJet, but the 5 blocked RFCs authored by @singlerider may need new champions.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*