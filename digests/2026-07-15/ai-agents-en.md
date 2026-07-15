# OpenClaw Ecosystem Digest 2026-07-15

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-15 02:36 UTC

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

Here is the OpenClaw project digest for July 15, 2026.

---

## OpenClaw Project Digest — 2026-07-15

### 1. Today's Overview

The OpenClaw project is experiencing a period of **intense, crisis-driven activity**. Over 500 issues and 500 PRs were updated in the last 24 hours, with a significant portion (over a third in some categories) having a `P0` or `P1` priority. The primary narrative is the **troubled rollout of version 2026.7.1**, which introduced a fatal gateway startup crash-loop related to memory and plugin migration conflicts for many users. While the community remains highly engaged with feature requests, the immediate focus for maintainers is on resolving these critical stability regressions.

### 2. Releases

- **New Releases:** None this period.
- **Note:** The previous release, **2026.7.1**, is the subject of the majority of today's high-severity bug reports (see Bugs & Stability). No hotfix or patch release has yet been issued.

### 3. Project Progress

While no new releases were cut, several substantial pull requests were merged or are in advanced review, primarily focusing on fixing the widespread regressions:

- **Gateway/Memory Crash Fixes:** Multiple P0 fixes are in review or were closed for the `2026.7.1` startup crash. Key fixes include:
    - `#107133`: A fix for the `Memory Core embedding_cache conflict` that permanently blocked gateway startup. **(CLOSED)**
    - `#107220`: A fix addressing legacy memory sidecar `meta`/`chunks` conflicts that were fatally blocking startup. **(OPEN, in maintainer review)**
- **System-Agent Delegation:** A large feature (`#107903`, size: XL) was submitted to implement system-agent delegation and gateway narrowing, part of a larger architectural re-architecture.
- **UI/UX & Channels:**
    - `#107931`: Fixed broken channel metadata and chat guards.
    - `#107934`: Fixed Discord agent replies failing when sent to named channels.
    - `#107645`: Improved plugin lifecycle toggles in the Web UI.
- **Sandbox & Security:**
    - `#106780` & `#101775`: Addressed bound-checking for file reads in sandbox and heartbeat runners.
    - `#98881`: Fixed a crash when sandbox HTTP requests return non-JSON output.

### 4. Community Hot Topics

The community is highly engaged, with a clear split between urgent stability issues and long-standing feature requests.

- **`[#75] Linux/Windows Clawdbot Apps` (113 comments, 81 👍):** The most popular open issue by a wide margin. The community is still vocally requesting desktop app parity for Linux and Windows, which are currently behind macOS and mobile.
- **`[#94518] DeepSeek Cache Hit Rate <10%` (9 comments, 10 👍):** A high-impact performance regression that is frustrating users, as it significantly increases costs and latency for DeepSeek models after a recent upgrade.
- **`[#10659] Feature Request: Masked Secrets` (14 comments, 4 👍):** A highly sought-after security feature that would allow agents to use API keys without having direct access to them. This is a recurring theme in the security-conscious community.

### 5. Bugs & Stability

The project is currently in a **stability crisis** following the 2026.7.1 update. Four `P0` (release-blocking) bugs were filed or updated in the last 24 hours, all related to a gateway crash-loop.

- **P0 - Fatal Gateway Crash-Loop (2026.7.1):**
    - **`#107227`**: Startup-migration gate is fatal, and the repair command (`openclaw doctor`) fails to resolve it, leaving the gateway in an unrecoverable crash-loop.
    - **`#107220`**: Legacy memory sidecar conflicts (`meta`/`chunks`) are treated as fatal, while `files` conflicts auto-resolve, creating an inconsistent and blocking state.
    - **`#107133`**: A specific `Memory Core embedding_cache` conflict permanently blocks startup. **(PR #107133 is CLOSED)**
    - **`#102749`**: Migration never converges when a `.migrated` archive already exists, permanently refusing to start.
- **P1 - Critical Regressions & Data Loss:**
    - **`#102020`**: A new bug causing "reply session initialization conflicted" for any second message in a cross-channel conversation.
    - **`#101290`**: A severe regression where CLI startup preflight can corrupt the live state database, leading to "database disk image is malformed" errors.
    - **`#107449`**: A schema incompatibility between the built-in `cron` tool and the `llama.cpp` tool parser, breaking local model usage.

### 6. Feature Requests & Roadmap Signals

Despite the stability issues, feature requests continue to pour in, indicating a growing and demanding user base.

- **Likely Next Version Features (Urgent 2026.7.2 patch):**
    - **Fix for `2026.7.1` gateway crash-loop:** Fix PRs for the P0 issues `#107133`, `#107227`, and `#107220` are actively in review or have been closed, making a hotfix imminent.
    - **Multi-Encoding Filename Handling (`#48788`):** A mature proposal with a high rating (`🦞 diamond lobster`). The need for a centralized utility to handle filenames in various encodings for global users is a clear priority.
- **Medium-Term Roadmap (2026.8.x):**
    - **Memory Trust Tagging (`#7707`):** A proactive security feature to prevent memory poisoning. This is likely to progress as it addresses a core security weakness.
    - **Per-Agent TTS/STT Config (`#66252`):** Highly requested for multi-lingual or specialized agents. A natural extension of the current agent-specific architecture.
    - **Webhook Multi-Turn Sessions (`#11665`):** A feature that is documented but broken (always creates a new session). A fix is a high priority for integration users.

### 7. User Feedback Summary

- **Major Pain Points:**
    - **Release Quality:** Users are experiencing significant pain with the `2026.7.1` upgrade, which leaves the gateway in a crash-loop with a non-functional repair tool. This is causing the most friction.
    - **Cost & Reliability:** The regression in DeepSeek caching is a concrete financial drain on users. The combination of OAuth failures and context loss (e.g., `#92769`, `#77012`) erodes trust in the system's reliability.
    - **Transparency:** A recurring theme of poor error messages, such as the unhelpful "Context overflow" message (`#9409`) and tools failing with opaque errors (e.g., `llama.cpp` parser failure in `#106779`).

- **Desired Use Cases:**
    - **Safer Agents:** The strong vote for "Masked Secrets" (`#10659`) and "Denylist support for exec-approvals" (`#6615`) shows a shift towards wanting enterprise-grade, safe-by-default AI agents.
    - **Platform Parity:** The sustained popularity of `#75` shows that Windows and Linux users feel like second-class citizens and are growing impatient.
    - **Voice/Voice-Call Improvements:** Requests for streaming TTS pipelines (`#8355`) and self-hosted STT/TTS (`#45508`) indicate a desire for more natural, real-time conversational interfaces.

### 8. Backlog Watch

A significant number of long-standing issues (created in early 2026) remain in a triage stalemate, tagged with `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision`. These are not stuck on code fixes but on product direction, which is likely a bottleneck.

- **`#75` Linux/Windows Clawdbot Apps (Created: 2026-01-01):** The longest-standing and most popular feature request. It requires a major engineering effort, not just a simple fix.
- **`#8299` Suppress Sub-Agent Announce (Created: 2026-02-03):** A quality-of-life feature request that has been waiting for a product decision for over 5 months. Users are frustrated by noisy sub-agent results.
- **`#7707` Memory Trust Tagging (Created: 2026-02-03):** A critical security feature that has also been stuck in product review, even while the threat of memory poisoning is a real and present danger.
- **`#11665` Webhook Multi-Turn Sessions (Created: 2026-02-08):** A clear "broken documentation" issue where the feature exists in the docs but doesn't work. It remains open despite being a direct contradiction to the documented user experience.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Report — 2026-07-15

## 1. Ecosystem Overview

The personal AI agent open-source landscape is experiencing a **polarized phase of rapid innovation and destabilization**. Major projects like OpenClaw, CoPaw, and IronClaw are shipping substantial architectural rewrites (memory systems, extension runtimes, SOP engines), but these changes are triggering cascading stability regressions — particularly in gateway startup reliability, Windows/macOS compatibility, and message context handling. Meanwhile, smaller projects (PicoClaw, Moltis, NanoClaw) are iterating faster and more cleanly, delivering incremental value with fewer regression risks. A clear ecosystem-wide shift is underway: **security hardening** (SSRF gating, credential isolation, memory poisoning prevention) and **platform parity** (Windows/Linux Desktop, Docker containerization) are emerging as top shared priorities, even as the community demands ever-more-sophisticated agent capabilities (multi-turn webhooks, voice streaming, goal management).

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed PRs | Release Status | Health Score* |
|---|---|---|---|---|---|
| **OpenClaw** | 500+ | 500+ | ~200 (est.) | In crisis (2026.7.1 regression) | ⚠️ **Critical** |
| **IronClaw** | 48 | 50 | 27 | Stalled (release PR 11 days stale) | 🟡 **Strained** |
| **CoPaw** | 50 | 50 | 24 | v2.0.0.post2 today | 🟡 **Stabilizing** |
| **ZeroClaw** | 27 | 50 | 2 (low merge rate) | v0.8.3 milestone closeout | 🟡 **Heavy integration** |
| **Hermes Agent** | 50 | 50 | 2 | No release today | 🟡 **Consolidation** |
| **NanoClaw** | 0 | 28 | 7 | No release today | 🟢 **Healthy** |
| **NanoBot** | 12 | 65 | 48 | No release today (v0.1.4.x) | 🟢 **High velocity** |
| **Moltis** | 3 | 12 | 8 | **20260714.11** today | 🟢 **Productive** |
| **PicoClaw** | 3 | 9 | 5 | No release today (v0.3.1) | 🟢 **Steady** |
| **LobsterAI** | 4 (all stale) | 3 | 3 | No release today | 🟢 **Maintenance** |
| **NullClaw** | 0 | 0 | 0 | — | ⬜ **Inactive** |
| **TinyClaw** | 0 | 0 | 0 | — | ⬜ **Inactive** |
| **ZeptoClaw** | 0 | 0 | 0 | — | ⬜ **Inactive** |

*Health Score: 🟢 Healthy = active merges, low regression volume; 🟡 Strained = high activity but high bug count or stalled release; ⚠️ Critical = stability crisis blocking users; ⬜ Inactive = no recent activity.*

---

## 3. OpenClaw's Position

**Advantages:**
- **Largest community** by 10x: 500+ issues/PRs daily vs. 50–65 for next tier (IronClaw, NanoBot). This creates unmatched testing surface and contributor diversity.
- **Broadest feature surface**: memory trust tagging, system-agent delegation, platform-dependent clawdbot apps, plugin lifecycle UI — OpenClaw is the "feature flagship" of the ecosystem.
- **Reference implementation status**: Most other projects (NanoClaw, PicoClaw, CoPaw) explicitly fork or draw architecture from OpenClaw, giving it gravitational pull.

**Weaknesses:**
- **Stability crisis**: The 2026.7.1 release introduced a fatal gateway crash-loop affecting all users, with `openclaw doctor` failing to repair. Four P0 bugs remain open. This erodes trust that smaller projects haven't sacrificed.
- **Bottlenecked decision-making**: Long-standing feature requests (Linux/Windows Desktop apps — #75, 113 comments; memory trust tagging — 5 months stale) suggest maintainer bandwidth is consumed by firefighting rather than roadmap execution.
- **Performance regressions**: DeepSeek cache hit rate <10% (#94518) is a concrete cost burden for users.

**Technical Approach:**
- **Monolithic core + plugin architecture**: Heavy reliance on migration gateways and sidecar containers creates complexity that smaller projects (NanoBot, Moltis) avoid with lighter designs.
- **Memory-centric**: OpenClaw's memory core (embedding cache, sidecar storage) is more ambitious than peers but more fragile — the memory crash-loop is the P0 trigger.

**Community Comparison:**
- **Engagement**: OpenClaw's community is 3–5x more vocal than IronClaw, CoPaw, or NanoBot in absolute comments, but the ratio of bug reports to feature requests is skewed toward pain (2:1 bug-to-feature in recent 24h).
- **Diversity**: Strong Chinese-language user presence (CoPaw, Moltis) supplements the English-dominant OpenClaw core.

---

## 4. Shared Technical Focus Areas

| Focus Area | Affected Projects | Specific Needs |
|---|---|---|
| **Memory system stability** | OpenClaw (crash-loop), CoPaw (infinite search loops), ZeroClaw (conversation vs. memory mixing) | Embedding cache conflicts, auto-search loops, lifecycle separation |
| **Windows/Linux parity** | OpenClaw (#75, 113 comments), CoPaw (Windows sandbox explosion), IronClaw (Windows filesystem crash #6098) | Desktop apps, sandbox compatibility, file encoding handling |
| **SSRF/credential security** | OpenClaw (Masked Secrets #10659), ZeroClaw (SSRF gates #8826/#8713, confused deputy #7947), CoPaw (sandbox bypass), Moltis (MCP OAuth) | URL validation, per-agent tool gating, credential path normalization |
| **Multi-platform message channels** | CoPaw (Dial, Zalo, webhook), Moltis (Feishu audio/video), NanoClaw (Dial), IronClaw (Telegram outbound) | Non-Slack/Telegram channels, platform-specific media handling |
| **Deployment reliability** | NanoClaw (container idle timeout), Hermes Agent (Docker dashboard), CoPaw (upgrade data loss), IronClaw (63-day CI failures) | Container lifecycle, database migration, environment variable loading |
| **Context compression compatibility** | CoPaw (DeepSeek 400 errors), IronClaw (message ordering #6047), Moltis (tool result caps) | LLM-agnostic compression, paired message preservation |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | CoPaw | ZeroClaw | NanoBot | Moltis | PicoClaw |
|---|---|---|---|---|---|---|---|
| **Primary focus** | Core reference, memory, multi-platform | Unified extension runtime, Slack integration | v2.0 stabilization, Chinese market | SOP workflows, goal management | Heartbeat reliability, WebUI | MCP compatibility, model agility | Channel-specific fixes, Bedrock caching |
| **Target user** | Tinkerers, early adopters, platform builders | Enterprise, Slack-heavy teams | Chinese enterprise, government | Production SOPs, multi-tenant | Developers, Telegram users | Cloud & local model switchers | AWS Bedrock, DingTalk users |
| **Architecture** | Monolithic + plugins + sidecar containers | Extension-runtime unification (NEA-25 trains) | Plugin-based (2.0 rewrite) | Goal management + SOP state machine | Lightweight, channel-agnostic | MCP-first, OAuth-centric | Minimal, channel-specific patches |
| **Language** | Go + scripting | Rust + Go | Python (agentscope) | Rust | TypeScript/Node | Go | Go |
| **Release cadence** | Weekly but erratic | Slow (release PR stale 11 days) | Fast (post2 today after 1.1.9 → 2.0) | Milestone-driven (v0.8.3 closeout) | Continuous (48 PRs merged/day) | Daily (release today) | Variable (no release today) |
| **Security posture** | Reactive (memory poisoning unfixed 5 months) | Reactive (CI flaky, 63-day failures) | Reactive (sandbox bypasses, ACE pollution) | **Proactive** (2 SSRF patches today, #7947 only S0 open) | Moderate (WhatsApp bridge vulnerability) | Moderate (MCP OAuth fixes) | Reactive (libolm migration requested) |

---

## 6. Community Momentum & Maturity

**Tier 1 — High Velocity / Heavy Iteration (3+ merges/day, growing or maintaining feature surface):**
- **NanoBot** (48 PRs merged/day) — Most impressive merge rate. Focusing on heartbeat reliability, WebUI polish, and CI hardening. Healthy if fragmented.
- **Moltis** (8 PRs merged, 1 release) — Strong focus on MCP OAuth, local model compatibility, and GPT-5.6 support. Clean trajectory.
- **PicoClaw** (5 PRs merged) — Steady but narrow. Community active on Bedrock caching, libolm migration. Low regression risk.

**Tier 2 — Consolidating / Stabilizing (high activity but bug-triage dominant):**
- **CoPaw** (24 PRs merged, 50 issues updated) — Post-v2.0 stabilization sprint. High bug volume but fast fix turnaround. Chinese enterprise focus.
- **IronClaw** (27 PRs merged, 48 issues) — Shipping large architectural trains (NEA-25) but stalled release and 63-day CI failures. Needs stabilization sprint.
- **ZeroClaw** (2 PRs merged, 50 updated) — Heavy feature integration (goal stack, SOP editors) but low merge rate. v0.8.3 closeout should release soon.

**Tier 3 — Maintenance / Inactive:**
- **LobsterAI** — 3 PRs merged, all stale issue closures. Minimal community engagement.
- **NullClaw, TinyClaw, ZeptoClaw** — No activity. Likely dormant or abandoned.

**OpenClaw** is **sui generis**: its activity volume (500+ items) is unmatched, but it's in a **stability crisis** that smaller projects are avoiding. It remains the ecosystem's **most important but most fragile** project.

---

## 7. Trend Signals

**1. Security is the #1 rising demand**
Multiple projects now treat SSRF gating, credential isolation, and memory poisoning as P0/P1. OpenClaw's Masked Secrets (#10659, 4 👍 in 24h), ZeroClaw's double SSRF patch today, and CoPaw's sandbox enforcement fixes all point to a market that trusts agents more but is increasingly deploying them in sensitive contexts. **Action for developers**: Prioritize tool-level access controls and environment variable isolation.

**2. Local model compatibility is a widening gap**
Moltis (#1136, stringified scalar tool args; #1098, null browser params) and ZeroClaw (#8675, malformed tool-call arguments → 400 errors) are both investing in local model robustness. The gap between cloud models (GPT-5.6, Claude Opus 4.8) and local models (Gemma 4, Qwen, llama.cpp) is growing as agents become more tool-dependent. **Action for developers**: Implement lenient parameter coercion and LLM-agnostic test suites.

**3. Platform parity is a persistent bottleneck**
OpenClaw (#75, 113 comments), CoPaw (Windows sandbox explosion), and IronClaw (Windows filesystem crash) all show that **Desktop and server parity across macOS/Linux/Windows is not solved**. Docker containerization is the primary deployment model, but container networking (NanoClaw, Hermes Agent) and lifecycle management (NanoClaw #3053) remain fragile. **Action for developers**: Invest in containerized testing matrix and OS-agnostic file handling.

**4. Conversation-memory boundary is architecturally undefined**
ZeroClaw's RFC #9048 (separate conversation history from long-term memory, created today) and CoPaw's memory search loops (#6113) reveal a **fundamental design ambiguity**: should agent "memory" include conversation turns? Projects that define this boundary clearly (Moltis, PicoClaw) have fewer memory bugs. **Action for architects**: Explicitly separate ephemeral conversation context from persistent long-term memory at the data model level.

**5. Chinese-language ecosystem is growing rapidly**
CoPaw (Chinese bug reports dominate), Moltis (Feishu channel), and PicoClaw (DingTalk) all serve Chinese enterprise users. OpenClaw's community is predominantly English. **Action for international developers**: Consider CJK text segmentation, Chinese cloud provider (DashScope, Bedrock China), and localization as core requirements for global adoption.

**6. Agent "compounding value" is the aspirational goal**
ZeroClaw's SOP engine, CoPaw's OpenClaw-inspired meta-issue #578 ("compounding agent value"), and OpenClaw's memory trust tagging all aim for agents that become **more valuable over time** through persistent learning and workflow automation. This is the ecosystem's north star, even as basic stability regressions dominate today's headlines.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-15

## 1. Today's Overview
NanoBot saw exceptionally high activity in the last 24 hours, with **65 PRs** updated (48 merged/closed, 17 open) and **12 issues** updated (10 closed, 2 open). No new releases were published. The project is in an intense maintenance and feature development phase, with core contributors focusing on heartbeat reliability, context overflow handling, WebUI improvements, and CI hardening. The volume of merged PRs (48) signals strong momentum and a responsive maintainer team.

---

## 2. Releases
**No new releases today.** The latest release remains at an earlier version (v0.1.4.x family). The last referenced tag in issues is `v0.1.4.post6`. No migration notes are needed.

---

## 3. Project Progress
**48 PRs were merged or closed today**, indicating substantial forward progress. Key advances include:

- **Heartbeat system fixes:** [#4915](https://github.com/HKUDS/nanobot/pull/4915) made heartbeat response evaluation more configurable, addressing regressions from the cron migration. [#4928](https://github.com/HKUDS/nanobot/pull/4928) (open) routes unified sessions to the last user channel for heartbeat delivery.

- **WebUI enhancements:** [#4930](https://github.com/HKUDS/nanobot/pull/4930) added a copy action to user messages. [#4933](https://github.com/HKUDS/nanobot/pull/4933) added slash command and app mention highlighting. [#4934](https://github.com/HKUDS/nanobot/pull/4934) (open) adds file path validation before preview.

- **Onboarding/CLI polish:** [#4938](https://github.com/HKUDS/nanobot/pull/4938) pointed onboarding to the WebUI launcher. [#4932](https://github.com/HKUDS/nanobot/pull/4932) standardized `--config` help text across CLI commands.

- **Build & CI hardening:** [#4936](https://github.com/HKUDS/nanobot/pull/4936) sped up CI by replacing the OS/Python cross-product matrix. [#4927](https://github.com/HKUDS/nanobot/pull/4927) fixed a missing `package-lock.json` for the qrcode dependency, unbreaking Docker builds.

- **Restart reliability:** [#4931](https://github.com/HKUDS/nanobot/pull/4931) ensures restart completion notices are delivered only after channels fully reconnect.

- **Architecture refactoring:** [#4908](https://github.com/HKUDS/nanobot/pull/4908) (open) moves channel setup and instance ownership into channel classes, removing coupling.

---

## 4. Community Hot Topics

**Most commented Issues:**
- [#4924](https://github.com/HKUDS/nanobot/issues/4924) (OPEN, 3 comments) — Heartbeat target selection fails with `unifiedSession: true`. Users are actively debugging the root cause, and a fix PR [#4928](https://github.com/HKUDS/nanobot/pull/4928) exists.
- [#4637](https://github.com/HKUDS/nanobot/issues/4637) (CLOSED, 3 comments) — Telegram long message splits causing trunk rendering failures. This was a significant user-facing regression that is now resolved.
- [#4924](https://github.com/HKUDS/nanobot/issues/4924) and [#2568](https://github.com/HKUDS/nanobot/issues/2568) (CLOSED, 4 comments) — Markdown rendering unreliability in Telegram post-v1.4.post6. Users expressed frustration with intermittent failures.

**Most reacted Issues:**
- [#1086](https://github.com/HKUDS/nanobot/issues/1086) (4 👍) — WhatsApp Bridge WebSocket binding to 127.0.0.1 prevents inter-container communication. This Docker networking issue has been unresolved since February.
- [#1445](https://github.com/HKUDS/nanobot/issues/1445) (2 👍) — Users want cron jobs to suppress empty/uninteresting notifications.

**Underlying needs:** Users are increasingly running NanoBot in containerized/cloud environments and hitting networking isolation issues. There is also strong demand for smarter notification suppression and reliable message delivery across channels — especially Telegram.

---

## 5. Bugs & Stability

**Critical severity:**
- **[#4934](https://github.com/HKUDS/nanobot/issues/4934) (OPEN)** — Qwen models (e.g., `qwen3.6-flash`) expose raw thinking/reasoning content in chat responses via DashScope provider. This leaks internal model reasoning to users. **No fix PR yet.**

- **[#4924](https://github.com/HKUDS/nanobot/issues/4924) (OPEN)** — `_pick_heartbeat_target_from_sessions` crashes when no sessions exist but `unifiedSession: true`. Fix PR [#4928](https://github.com/HKUDS/nanobot/pull/4928) is open but in `conflict` state.

**High severity:**
- **[#4795](https://github.com/HKUDS/nanobot/issues/4795) (CLOSED)** — Streaming LLM calls bypass wall-clock timeout entirely, potentially running indefinitely. Fix appears to have been merged.
- **[#4881](https://github.com/HKUDS/nanobot/issues/4881) (CLOSED)** — Windows ExecTool corrupts PowerShell UTF-16 output by decoding everything as UTF-8. Fix appears to have been merged.

**Medium severity:**
- **[#4637](https://github.com/HKUDS/nanobot/issues/4637) (CLOSED)** — Telegram long message split rendering bug was fixed.

---

## 6. Feature Requests & Roadmap Signals

**Strong signals (likely in next release):**
- **WebUI cron job management** ([#4218](https://github.com/HKUDS/nanobot/issues/4218), CLOSED) — Users want a GUI for cron management. The WebUI already manages providers/models/MCP/sessions. Expect this in an upcoming release.
- **Heartbeat model override** ([#4549](https://github.com/HKUDS/nanobot/pull/4549), OPEN) — Allow routing heartbeats to a cheaper/dedicated model. PR is in `conflict` state but has `priority: p1`.
- **OAuth status/expiry warnings** ([#4689](https://github.com/HKUDS/nanobot/pull/4689), OPEN) — Surface OAuth provider status and expiry in CLI/WebUI. PR is `priority: p1` but also in `conflict`.

**Medium-term signals:**
- **Memory archive provenance context** ([#4621](https://github.com/HKUDS/nanobot/pull/4621), OPEN) — Gating archive facts with provenance to avoid duplicates. Part of the memory system evolution.
- **DingTalk channel improvements** ([#4446](https://github.com/HKUDS/nanobot/pull/4446), OPEN) — Private chat gating and @-mentions in group replies.
- **One-click Deploy to Render** ([#4937](https://github.com/HKUDS/nanobot/pull/4937), OPEN) — A Render Blueprint for instant cloud deployment.

**Long-shot / lower priority:**
- **Smart speaker integration (Xiaomi)** ([#1411](https://github.com/HKUDS/nanobot/issues/1411), CLOSED) — Community member offered to develop the extension themselves.

---

## 7. User Feedback Summary

**Pain points:**
- **Telegram Markdown regression** ([#2568](https://github.com/HKUDS/nanobot/issues/2568)): Users report it *works sometimes* and then fails on the very next message — a particularly frustrating intermittent bug. This was reported for v1.4.post6 and appears to have been addressed.
- **Cron notification fatigue** ([#1445](https://github.com/HKUDS/nanobot/issues/1445)): Users do not want messages when cron jobs find "nothing meaningful." Feature request received 2 👍.
- **Docker networking isolation** ([#1086](https://github.com/HKUDS/nanobot/issues/1086)): The WhatsApp Bridge binding to localhost prevents cross-container communication. This issue has 4 👍 and has been open since February — a persistent pain point for containerized deployments.
- **Custom provider extra headers** ([#2505](https://github.com/HKUDS/nanobot/issues/2505)): Custom provider models lose extra headers. This was closed, so presumably fixed.

**Satisfaction signals:**
- The high volume of merged PRs (48) and quick issue closures (10) suggest maintainers are responsive.
- Community members are proactively offering to develop extensions (e.g., Xiaomi integration [#1411](https://github.com/HKUDS/nanobot/issues/1411)).

---

## 8. Backlog Watch

**Long-unanswered or important items needing maintainer attention:**

- **[#1086](https://github.com/HKUDS/nanobot/issues/1086) (CLOSED, but unresolved)** — WhatsApp Bridge WebSocket binding to 127.0.0.1. Despite being closed, this Docker networking bug (4 👍) has no visible fix in the merged PRs today. Users may still be affected.
- **[#4621](https://github.com/HKUDS/nanobot/pull/4621) (OPEN, 14 days old)** — Memory archive provenance PR. Labeled `conflict` — needs maintainer conflict resolution before merging.
- **[#4620](https://github.com/HKUDS/nanobot/pull/4620) (OPEN, 14 days old)** — Heartbeat trigger command PR. Also labeled `conflict`.
- **[#4689](https://github.com/HKUDS/nanobot/pull/4689) (OPEN, 12 days old)** — OAuth status/expiry warnings PR. `priority: p1` but in `conflict` — likely to be resolved soon.
- **[#4549](https://github.com/HKUDS/nanobot/pull/4549) (OPEN, 19 days old)** — Heartbeat model override PR. `priority: p1` but `conflict` — a popular request (#4431).

**Unanswered user issues (0 comments from maintainers):**
- **[#4934](https://github.com/HKUDS/nanobot/issues/4934) (OPEN, today)** — Qwen thinking content leak. Filed less than 24 hours ago; high severity but no response yet from maintainers.

---

*Generated from GitHub data on 2026-07-15. All links reference [HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-15

## Today's Overview

Hermes Agent saw **elevated community activity** over the past 24 hours, with **50 issues** and **50 pull requests** updated. However, the signal-to-noise ratio is mixed: of 50 issues updated, 37 were closed (many represent backlog cleanup from late-June bug sweeps), and 13 remain open and active. PR activity skewed heavily toward open work-in-progress (48 open vs. 2 merged/closed), suggesting a large queue of contributions awaiting review rather than a surge of merges. No new releases were published today. The project appears to be in a **consolidation phase** — closing older resolved issues while new feature development (plugin packs, skill graphs, Telegram fixes) continues in parallel.

---

## Releases

**No new releases** for this date. The latest published release remains the project's `v0.17.0` line. Users tracking `main` should be aware of potential instability from the large PR backlog.

---

## Project Progress (Merged/Closed PRs)

Only **2 PRs were merged or closed** today, reflecting a low-merge day:

- **[PR #46164]** *(merged)* — `perf: short-circuit scratch disk usage scan` by **007M7**: Optimizes scratch disk scanning to stop walking files once the warning threshold is exceeded, reducing I/O overhead. Includes regression test. *(type/perf, tool/terminal, P3)*
- **[PR #64473]** *(not closed)* and others remain open — see *Bugs & Stability* section for pending fixes.

The **37 closed issues** largely represent back-closing of sweeper-bot-tagged bugs (e.g., `sweeper:implemented-on-main`) from June, including fixes for Desktop auth UI (#51873), Telegram orphaned typing tasks (#50991), cron double-fire (#51329), and Z.AI endpoint caching (#51229). These indicate the project's automated/maintainer triage is actively clearing its backlog.

---

## Community Hot Topics

### Most Active Issues
| Issue | Comments | Reactions | Topic |
|-------|----------|-----------|-------|
| **[#64182]** — Plugin Interface Expansion (open) | 10 | 0 | Community-driven plugin interface roadmap |
| **[#51873]** — Desktop never shows sign-in UI with basic auth (closed) | 4 | 0 | Auth/UX blocker for enterprise users |
| **[#55191]** — Desktop macOS renderer crash at 128K-token compaction (open) | 4 | 0 | Critical Electron stability bug |
| **[#64674]** — Telegram adapter fails on secondary profile bot token (open) | 3 | 0 | Multi-profile Telegram deployment pain |
| **[#59113]** — Dashboard broken in Docker deployments (open) | 3 | 👍2 | Docker auth/access regression |
| **[#51200]** — Sessions export: support Markdown/HTML (open) | 2 | 0 | User demand for human-readable exports |
| **[#51288]** — TUI WS write timeout env var (closed) | 3 | 0 | Configurability request implemented |
| **[#51918]** — Desktop font size/zoom setting (closed) | 3 | 0 | Accessibility & UX tuning |

### Most Active PRs
| PR | Comments | Topic |
|----|----------|-------|
| **[#51478]** — MCP secret propagation doctor check (open) | - | Configuration hygiene tool |
| **[#50057]** — Skill-graph bundled plugin (open) | - | Major plugin architecture addition |
| **[#51475]** — Casefold credential deny-lists (open) | - | Security fix for macOS/Windows |
| **[#51472]** — MCP save-time env-var resolution gate (open) | - | Ghost-MCP misconfiguration prevention |
| **[#49413]** — Desktop accessibility semantics (open) | - | Accessibility improvements |

### Underlying Community Needs
1. **Plugin ecosystem maturity**: Issue #64182 (10 comments) reflects organized community demand for a formal plugin interface. Users want to ship stable plugins without breaking between Hermes versions.
2. **Desktop stability and UX**: Issues #55191 (macOS crash) and #51873 (auth UI) are blocking real workflows. Users are vocal about Electron app reliability.
3. **Multi-profile/Telegram deployment**: Issue #64674 reveals friction for operators running Telegram bots across multiple Hermes profiles — a growing deployment pattern.

---

## Bugs & Stability (Reported Today)

| Severity | Issue | Summary | Has Fix PR? |
|----------|-------|---------|-------------|
| **P1** | [#64694] (open) | **Telegram adapter crashes on startup**: `HTTPXRequest.do_request` is read-only under python-telegram-bot 22.6 — breaks all Telegram connections on `main` | Not yet — marked duplicate, likely tracked upstream |
| **P2** | [#64674] (open) | **Telegram adapter fails on default-profile gateway** when `multiplex_profiles: true` and bot token is in secondary profile `.env` — stops connecting after `hermes update` | No — open investigation |
| **P2** | [#55191] (open) | **Desktop (macOS) renderer crash-loop at ~128K-token compaction**: Electron renderer process dies, window freezes. Backend healthy. | Not yet — open for 16 days |
| **P2** | [#60485] (open) | **Cron scripts falsely time out** when child processes keep stdout/stderr pipes open | No — new, 1 comment |
| **P2** | [#59113] (open) | **Dashboard broken in Docker**: auth/network access doesn't work in containerized environments | No — 3 comments, 👍2 |
| **P3** | [#64473] (open) | **Telegram scalar allowlist config** not accepted — configuration parsing bug | PR [#64473] submitted |
| **P3** | [#64474] (open) | **Cron no-agent failures misclassified** as errors instead of script failures | PR [#64474] submitted |
| **P3** | [#64477] (open) | **Checkpoint restore doesn't remove files** added after the checkpoint | PR [#64477] submitted |
| **P3** | [#64475] (open) | **CLI approval prompts invisible** in scrollback during modal interaction | PR [#64475] submitted |
| **P3** | [#64478] (open) | **CLI reports inaccurate update/OAuth status** for OAuth-only installs | PR [#64478] submitted |

### Notable Security/Stability PRs Awaiting Review
- **PR [#51475]** — Case-insensitive credential path bypass on macOS/Windows (P3, security boundary)
- **PR [#51472]** — MCP save-time env-var resolution prevents gateway crash at boot (P2)
- **PR [#51478]** — `hermes doctor` MCP secret propagation audit across profiles

---

## Feature Requests & Roadmap Signals

### High-Community-Interest Features (Open)

| Issue | Feature | Likelihood for Next Release |
|-------|---------|----------------------------|
| [#64182] | **Plugin Interface Expansion** — formal community plugin roadmap | **High** — tracking issue created by core maintainer (teknium1), community thread linked |
| [#64166] | **Plugin Packs** — declarative, shareable plugin sets (`hermes plugins pack export/install`) | **High** — part of #64182 roadmap, authored by same maintainer |
| [#51200] | **Sessions export: Markdown/HTML support** | **Medium** — recurring user request, practical for sharing |
| [#50057] | **Skill-graph bundled plugin** — dynamic skill discovery | **Medium** — large PR open since June 21, needs review |
| [#51466] | **macOS MCP servers** (Mail, Notes, Numbers, Photos) as optional MCPs | **Medium** — adds platform-specific value |

### Features Recently Closed/Implemented (Backlog Clearance)
- [#51918] — Desktop font size/zoom setting (closed, implemented)
- [#51288] — TUI WS write timeout env var (closed, implemented)
- [#51894] — Remote Mem0 API endpoint support (closed, implemented)

### Prediction for v0.18
Based on the plugin interface tracking issue [#64182] and companion [#64166], the **next version is likely to focus on plugin ecosystem maturity** — formal plugin packs, improved packaging, and potentially the skill-graph integration. Desktop stability fixes (especially macOS crash #55191 and Docker dashboard #59113) are likely blockers shipping.

---

## User Feedback Summary

### Pain Points (Explicit or Derived)
1. **Desktop Electron reliability (#55191, #51873)** — Users on macOS and enterprise auth setups report crashes and frozen UIs. "The window process dies" (#55191) and "UI never loads" (#51873) represent lost productivity.
2. **Telegram multi-profile complexity (#64674)** — Operators report Telegram bots silently disconnecting after updates when using multiple profiles. Deployments feel fragile.
3. **Docker deployment friction (#59113)** — Dashboard auth doesn't work inside containers; reverse proxy users can't bypass built-in auth. "Dashboard no longer works with docker" with 2 upvotes signals shared frustration.
4. **Configuration gaps (MCP secrets, env vars)** — Multiple PRs (#51478, #51472) address MCP secret resolution failures being caught only at runtime. Users hit "silent crashes at boot" (#51472).

### Success Stories / Satisfaction
- **[#51718] (closed, question)** — A user with "zero coding experience" built an entire community website ("全网最穷站") solely by talking to Hermes. This showcases Hermes' accessibility for non-programmers.
- The high volume of plugin-related feature requests (packs, interface expansion, skill graphs) suggests an **engaged developer community** investing in the platform.

### Inferred Sentiment
The community demonstrates **enthusiasm for Hermes' extensibility** but **frustration with stability and deployment complexity**, especially on Desktop and Docker. The maintainer's active tracking issue for plugin interfaces signals awareness and prioritization.

---

## Backlog Watch (Items Needing Maintainer Attention)

### Long-Open Items
| ID | Age | Summary | Risk |
|----|-----|---------|------|
| **[#18796]** (PR, open since May 2) | ~74 days | `fix(plugins): support OPENAI_IMAGE_API_MODEL env var + base_url config for third-party backends` — hardcoded model breaks third-party image gen | **Moderate**: Blocks users of alternative OpenAI-compatible image backends (Krill AI, OpenRouter image endpoints) |
| **[#55191]** (issue, open since Jun 29) | 16 days | Desktop (macOS) renderer crash-loop at 128K-token compaction | **High**: Active crash bug, 4 comments, no fix PR yet. Affects all macOS Desktop users with large conversations. |
| **[#59113]** (issue, open since Jul 5) | 10 days | Dashboard broken in Docker | **Medium**: 3 comments, 2 upvotes, blocks containerized deployments |

### PRs Awaiting Review (Early July Cohort)
Several PRs from **visualfox-ch** (submitted Jul 14) address real bugs but lack reviewer attention:
- **[#64473]** — Telegram scalar allowlist fix
- **[#64474]** — Cron no-agent error classification
- **[#64475]** — CLI approval scrollback visibility
- **[#64477]** — Checkpoint restore file cleanup
- **[#64478]** — CLI update/OAuth status accuracy
- **[#64476]** — Delegation variable-cost route gating

### Recommendations
1. **Prioritize PR review backlog** — The visualfox-ch batch (5+ PRs) addresses real P2/P3 bugs and should be moved through quickly to avoid stale code divergence.
2. **Address macOS desktop crash (#55191) urgently** — It's been open without a fix PR for 16 days and blocks core Desktop functionality on macOS.
3. **Resolve or acknowledge [#18796]** — At 74+ days open, PR contributors may lose motivation. At minimum, a maintainer comment on status is warranted.
4. **Assign reviewers to skill-graph PR [#50057]** — It's a large architectural change that has sat since June 21; lack of response may disincentivize large contributions.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-15

## Today's Overview
The PicoClaw project shows moderate activity with 3 open issues and 9 pull requests updated in the last 24 hours. Five PRs were merged or closed, indicating steady progress on bug fixes and feature work. No new releases were tagged today. The community is actively contributing through PRs targeting AWS Bedrock caching improvements, Anthropic provider fixes, and channel-specific media support, while the maintainers continue to close long-standing stability issues. Overall project health appears solid with a healthy mix of bug fixes, feature enhancements, and community engagement.

## Releases
No new releases were created today. The latest available version remains **0.3.1** (as referenced in issue #3232). No release notes, breaking changes, or migration guides are available for today.

## Project Progress
Five pull requests were merged or closed in the last 24 hours, reflecting progress across bug fixes, feature work, and maintenance:

- **#2982 [CLOSED]** — `fix(bedrock): drop temperature for models that deprecate it (Opus 4.8)` by loafoe. Fixes a critical issue where Claude Opus 4.8 on AWS Bedrock caused all LLM calls to fail with a 400 error due to deprecated `temperature` parameter. This ensures compatibility with newer Bedrock model versions.

- **#2957 [CLOSED]** — `fix(channels): prevent tool_calls from being dropped during streaming` by loafoe. Corrects a regression from #2892 where tool_calls messages were incorrectly filtered as auxiliary messages during streaming. Includes a new `outboundMessageIsToolCalls()` helper function.

- **#3156 [CLOSED]** — `feat(pico): emit per-turn LLM token usage on finalized message` by loafoe. Adds real per-turn token usage reporting (input, output, total) to the Pico channel, enabling downstream consumers to track consumption. Already merged despite being tagged stale.

- **#2270 [CLOSED]** — `fix(config): handle non-addressable SecureString values in collectSensitive` by loafoe. Fixes a panic caused by Go reflection limitations when iterating over map values containing `SecureString`, a stability fix that was long open.

- **#2128 [CLOSED]** — `fix(tools): ensure tool parameters have valid JSON Schema properties field` by loafoe. Resolves tool schema validation errors with strict OpenAI-compatible APIs (e.g., LM Studio) where MCP servers return schemas without a `properties` field.

## Community Hot Topics

### Most Active Discussions

**#3088 [Open, High Priority]** — `[Feature] use vodozemac instead of libolm` by pbsds  
👉 sipeed/picoclaw Issue #3088  
This feature request has been open since June 9 and continues to generate interest with 8 comments and 2 reactions. The proposal is to replace the unmaintained and insecure `libolm` with `vodozemac`, the official replacement library. The request includes a concrete implementation suggestion to make libolm optional at compile time. The high priority tag and sustained interest suggest this is a security-critical migration that the team should prioritize.

**#3163 [Open]** — `feat(bedrock): leverage Converse prompt caching via cache points` by loafoe  
👉 sipeed/picoclaw PR #3163  
This open PR proposes implementing AWS Bedrock's prompt caching feature through explicit cache points in system, tools, and messages. The feature could significantly reduce costs (reads at ~0.1× input cost, writes at ~0.25×) and latency. Active since June 23 with multiple updates, indicating substantial work and maintainer review.

**#3232 [Open, Stale]** — `[BUG] Rate limiting doesn't work if no fallback models is configured` by VictorSu000  
👉 sipeed/picoclaw Issue #3232  
A bug report with only 1 comment but reflects a real user pain point. The user configured only `agents.defaults.model_name` without fallback models and found the RPM rate limiting configuration ineffective. This touches core reliability infrastructure and could lead to silent API throttling.

### Underlying Needs Analysis
The high-priority feature request (#3088) reflects the community's security awareness and desire for modern, maintained dependencies. The prompt caching PR (#3163) signals strong interest in cost optimization for production deployments. The rate limiting bug (#3232) reveals that users are hitting configuration edge cases in real-world usage, particularly in containerized environments.

## Bugs & Stability

| Issue | Title | Severity | Status | Fix PR? |
|-------|-------|----------|--------|---------|
| #3232 | Rate limiting broken when no fallback models configured | **High** | Open, stale | None yet |
| #3255 | DingTalk list preview always shows "PicoClaw" instead of reply content | **Medium** | Open, new today | None yet |

### Bug Details

**#3232 [HIGH]** — Rate limiting doesn't work if no fallback models is configured  
👉 sipeed/picoclaw Issue #3232  
Users running PicoClaw 0.3.1 in Docker (Go 1.26-alpine) with only `agents.defaults.model_name` set (gpt-5.5) find that RPM configuration is completely ignored. This could cause excessive API usage and unexpected costs. No fix PR exists yet; the issue is marked stale after only 7 days, which may warrant attention.

**#3255 [MEDIUM]** — DingTalk chat list preview shows fixed "PicoClaw" instead of message content  
👉 sipeed/picoclaw Issue #3255  
A visual/UX bug specific to the DingTalk channel where the chat list preview (shown before opening a conversation) always displays the bot's name "PicoClaw" instead of the actual reply content. Inside the chat, replies display correctly. This is purely cosmetic but degrades the user experience for DingTalk users. Filed yesterday with no comments yet.

## Feature Requests & Roadmap Signals

### Active Feature Requests

1. **#3088 — Replace libolm with vodozemac** (High priority, 8 comments)  
   A clear security-motivated migration request. Given the "high priority" label and the fact that libolm is explicitly unmaintained, this is likely slated for an upcoming release. The implementation suggestion (compile-time optional dependency) is practical and minimal-risk.

2. **#3163 — AWS Bedrock prompt caching** (PR, actively developed)  
   This is already being implemented via PR #3163. If merged soon, it could appear in the next minor release (0.4.x). The feature provides significant cost savings for Bedrock users.

3. **#3256 — Feishu native audio/video message types** (PR, filed today)  
   A new PR improving Feishu channel support by sending audio (opus) and video (mp4) as native media types instead of generic file attachments. This is a channel-specific enhancement likely to be merged quickly.

4. **Token usage reporting (#3156)** — Already merged today, so this feature is now available for downstream consumers via the Pico channel.

### Predictions for Next Version
The next release will likely include the vodozemac migration (#3088) given its high-priority security implications, plus the Bedrock prompt caching (#3163) and Feishu media improvements (#3256) once reviewed. The merged token usage reporting (#3156) should already be considered part of the current unstable branch.

## User Feedback Summary

### Pain Points
- **Rate limiting configuration confusion (#3232):** Users find the fallback model requirement for rate limiting non-intuitive, especially when they only use a single model.
- **DingTalk UX regression (#3255):** DingTalk users experience degraded preview functionality, reducing the professional feel of bot responses.
- **libolm insecurity (#3088):** A security-aware user identified that libolm is unmaintained and proactively proposed the migration to vodozemac.
- **Bedrock Opus 4.8 incompatibility (#2982, closed):** A real production outage scenario where model updates broke all LLM calls, now resolved.
- **Tool calling during streaming (#2957, closed):** A regression that silently dropped tool calls, now fixed.

### Satisfaction Signals
- The community is actively contributing well-structured PRs (loafoe, AaronZ345, AayushGupta16, yaotukeji)
- Users are deploying PicoClaw in production environments (Docker, AWS Bedrock, multiple model providers)
- Token usage tracking (#3156) was a requested feature that was delivered and merged

## Backlog Watch

### Issues Needing Maintainer Attention

**#3232 — Rate limiting broken** (Opened 2026-07-07, updated yesterday, tagged stale)  
This high-severity bug has only 1 comment and no maintainer response. It being marked as "stale" after only 7 days is concerning, as it's a genuine functional bug affecting core rate limiting. The maintainers should at least acknowledge and triage.

**#3088 — Replace libolm with vodozemac** (Opened 2026-06-09, high priority)  
Despite being labeled "high priority" and having clear community interest, this issue has no associated PR or assigned milestone. After over a month, the maintainers need to communicate a timeline or decision, as libolm is explicitly unmaintained and insecure, making this a security vulnerability.

### Long-Open PRs

**#3163 — Bedrock prompt caching** (Opened 2026-06-23, still open after 22 days)  
This substantial PR with significant cost-saving potential has been open for over three weeks with continued updates. Lack of merge decision risks this valuable feature languishing.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-15

## 1. Today's Overview
The project shows **high development velocity** with 28 pull requests updated in the last 24 hours, though **no new issues were filed** and **no releases were cut**. Seven PRs were merged or closed today, signaling a healthy merge cadence. The majority of activity centers on **bug fixes** and **platform compatibility improvements**, particularly around container lifecycle management, macOS Docker runtime support, and Telegram integration reliability. The project continues to demonstrate strong contributor engagement with multiple first-time contributors having their PRs accepted.

---

## 2. Releases
**No new releases** were published today. The latest release remains the previous version. Users tracking cutting-edge fixes should monitor the `main` branch.

---

## 3. Project Progress — Merged/Closed PRs Today
Seven PRs were closed today, indicating active resolution of issues:

- **#2728 [CLOSED]** — `fix(telegram): create the wiring row when pairing with a wire-to intent` (sturdy4days) — Resolved a bug where pairing with `--intent wire-to:<folder>` never created the `messaging_group_agents` database row, leaving wiring incomplete despite reporting success.

- **#2729 [CLOSED]** — `docs(add-telegram): match pairing status-block names to the setup step; fix adapter pin` (sturdy4days) — Documentation fix aligning Telegram pairing walkthrough with actual emitted status blocks.

- **#2753 [CLOSED]** — `fix(hooks): pre-commit fell open when pnpm was missing from PATH` (sturdy4days) — Fixed developer experience issue where pre-commit hooks would fail silently without pnpm in PATH.

- **#2730 [CLOSED]** — `fix: NANOCLAW_* flags set in .env never reach process.env under launchd/systemd` (sturdy4days) — Critical fix for environment variable loading under system service managers; modules reading `process.env` directly weren't getting `.env`-defined flags.

- **#3042 [CLOSED]** — `feat(setup): offer Dial in the channel picker + wizard, installer, skills, docs` (OmriBenShoham) — **New feature:** Added Dial as a supported channel, including setup wizard integration, installer support, and documentation.

- **#3043 [CLOSED]** — `fix(skills): switch Telegram deep-link from t.me to telegram.me` (amit-shafnir) — Minor but important fix for Telegram deep link URL format.

- **#2750 [OPEN]** — Status unclear; the PR remains open but was updated today, suggesting continued work on `outbound.db` journal recovery after container kills.

---

## 4. Community Hot Topics

### Most Active PRs (by recency and complexity)

1. **#3053** — `fix(agent-runner): stand down cleanly when idle` (adamhowell)
   - **Link:** [PR #3053](https://github.com/nanocoai/nanoclaw/pull/3053)
   - **Problem:** Every session container lingers until the host's 30-minute absolute-kill timeout because `processQuery` keeps the SDK stream open. This means **every** container gets killed with exit code 143, wasting resources.
   - **Need:** Users want containers to exit cleanly when idle, not ride the SIGTERM timeout. This is a significant operational efficiency concern for production deployments.

2. **#3052** — `fix(container-runtime): resolve host gateway under Colima/Lima/Rancher Desktop` (adamhowell)
   - **Link:** [PR #3052](https://github.com/nanocoai/nanoclaw/pull/3052)
   - **Problem:** `hostGatewayArgs()` only adds `--add-host=host.docker.internal:host-gateway` on Linux. macOS runtimes like Colima and Rancher Desktop don't inject this mapping, breaking container-to-host communication on those platforms.
   - **Need:** Users on non-Docker-Desktop macOS runtimes are blocked. This fix unblocks a significant portion of macOS users.

3. **#3048 / #3049** — `fix(poll-loop): don't truncate <message> body at a quoted </message>` and `fix(poll-loop): deliver <message> blocks emitted in a tool-call turn` (joevandyk)
   - **Links:** [PR #3048](https://github.com/nanocoai/nanoclaw/pull/3048), [PR #3049](https://github.com/nanocoai/nanoclaw/pull/3049)
   - **Problem:** Poll-loop parsing of `<message>` XML blocks has two bugs — truncation at quoted closing tags, and missing delivery of messages emitted during tool-call turns.
   - **Need:** These are core protocol parsing bugs that affect message delivery reliability for all users.

### Trending Topics
- **Dial integration** — PR #3050 expands on #3042 (already merged), suggesting strong community interest in non-Slack/Telegram channels.
- **Security hardening** — PR #2800 (group folder validation and blocking implicit image pulls) continues to receive updates, indicating sustained focus on deployment security.

---

## 5. Bugs & Stability

### High Severity

1. **Container lifecycle leak** (PR #3053) — Every container lingers for up to 30 minutes before being killed. This causes **resource waste** and **operational overhead** in production. Fix PR is open and actively discussed.

2. **macOS Docker runtime incompatibility** (PR #3052) — Colima, Lima, and Rancher Desktop users cannot resolve `host.docker.internal`. This blocks **all macOS users not on Docker Desktop** from running containers that need host communication. Fix PR is open.

3. **Environment variable loading failure** (FIXED in #2730) — `NANOCLAW_*` flags set in `.env` never reached `process.env` under `launchd`/`systemd`. This was a **critical configuration bug** affecting daemonized deployments. Now fixed and merged.

4. **Poll-loop message parsing bugs** (PR #3048, #3049) — Messages containing quoted `</message>` strings get truncated; messages emitted during tool-call turns are lost. These are **core protocol bugs** affecting message integrity. Fix PRs are open.

5. **`outbound.db` journal corruption** (PR #2750) — Stale SQLite journal files after container SIGKILL, and poll races on hot journals. Affects **database integrity** under fault conditions. Fix PR is in progress.

### Medium Severity

- **Safe content parse returns non-objects** (PR #2801) — `JSON.parse` of primitives yields `undefined` fields, causing routing failures for valid but non-object payloads. Fix PR is open.
- **Skill fragment leakage across groups** (PR #2921) — Every skill's instructions were being inlined into every group's `CLAUDE.md`, ignoring group skill selection. Fix PR is open with a clear solution.
- **Missing wiring row on Telegram pairing** (FIXED in #2728) — Clean fix for database inconsistency.

### Low Severity
- **Pre-commit hook failure** (FIXED in #2753) — Developer tooling issue.
- **Telegram deep-link URL format** (FIXED in #3043) — Minor URL fix.

---

## 6. Feature Requests & Roadmap Signals

### Confirmed In-Progress Features
- **Dial channel support** — PRs #3042 (merged) and #3050 (open) add Dial as a new messaging channel with full setup wizard, installer skills, and documentation. **Likely in next release.**
- **Unified approval holds** — PR #3040 (`fix: unify approval holds behind one lifecycle contract`) by a core-team member suggests internal work on a unified approval mechanism. This may be part of a larger architecture change.

### Predicted Next-Release Features
- **Dial channel** — Most likely, given two PRs and one already merged.
- **Container idle timeout fix** — PR #3053 addresses a major operational pain point and is likely to be prioritized.
- **macOS Docker runtime support** — PR #3052 unblocks macOS users and is relatively contained.

### Signals from Community
- **Security hardening** (PR #2800) continues to receive attention, suggesting users care about production security.
- **Pairing/documentation fixes** indicate the onboarding experience still has rough edges being smoothed by community contributions.

---

## 7. User Feedback Summary

### Pain Points (directly observed from PRs)
1. **"Containers never exit on their own"** — PR #3053 author: "every session container lingers until the host's absolute-ceiling kill: exit 143." This is a significant operational frustration for anyone running NanoClaw at scale.
2. **"`host.docker.internal` doesn't resolve on my Mac"** — PR #3052 highlights that the macOS Docker ecosystem is fragmented, and the project only supports Docker Desktop.
3. **"Pairing with intent didn't actually wire the agent"** — PR #2728 bug report: "registers the messaging group, upserts the paired user, logs the intent... but never creates the `messaging_group_agents` row." The agent appeared paired but wasn't actually connected.
4. **"Message content gets mangled"** — PR #3048/3049: poll-loop truncates or loses messages in certain scenarios.
5. **"Environment variables don't work in production"** — PR #2730: launching under systemd/launchd ignores `.env` files. A significant deployment blocker.

### Satisfaction Signals
- Multiple PRs from first-time contributors (OtherVibes, joevandyk) suggest a welcoming contributor experience.
- PRs are being merged daily, indicating maintainer responsiveness.
- The Dial channel feature was implemented by a community contributor (OmriBenShoham) — a positive signal for community-driven feature development.

---

## 8. Backlog Watch

### Long-Unanswered Important PRs Needing Attention

1. **#2800** — `fix(security): validate group folders and forbid implicit image pulls` (sturdy4days)
   - **Link:** [PR #2800](https://github.com/nanocoai/nanoclaw/pull/2800)
   - **Status:** Open since June 17, updated July 14
   - **Why it matters:** Security fix that validates group folders before filesystem mutation and blocks Docker from implicitly pulling images during container spawn. This is a **production security concern** — unvalidated group folders and implicit image pulls are attack vectors.
   - **Action needed:** Review and merge. The PR has been open for nearly a month.

2. **#2973** — `fix(supply-chain): activate the minimumReleaseAge gate` (sturdy4days)
   - **Link:** [PR #2973](https://github.com/nanocoai/nanoclaw/pull/2973)
   - **Status:** Open since July 7, updated July 14
   - **Why it matters:** Security configuration fix for supply-chain protection. The `minimumReleaseAge` gate for pnpm dependencies was incorrectly placed under a `pnpm:` key and never activated, meaning the project has been **missing a dependency freshness protection**.
   - **Action needed:** Review and merge — straightforward configuration fix.

3. **#2750** — `fix: recover stale outbound.db journals after container kills; classify hot-journal poll races` (sturdy4days)
   - **Link:** [PR #2750](https://github.com/nanocoai/nanoclaw/pull/2750)
   - **Status:** Open since June 12, updated July 14
   - **Why it matters:** Fixes two related database corruption issues (#2516, #2640). This is a **stability concern** for users experiencing container kills. The PR size and complexity may explain the lengthy review period, but it addresses a serious bug.
   - **Action needed:** Prioritized review and testing.

### Recommendations
- **Expedite #2800 (security validation)** — Security fixes should not sit for weeks.
- **Review #2973 (supply-chain)** — Simple configuration fix that activates dormant security protection.
- **Prioritize #2750 (database integrity)** — Database corruption under fault conditions is a high-impact bug.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-15

## Today's Overview

IronClaw shows extremely high activity across 48 updated issues and 50 updated PRs, with a strong 54% closure/merge rate (12/48 issues closed, 27/50 PRs merged/closed). The project is deep in a major extension-runtime unification push ("Train A" and "Train B" rollups), with three large PR trains landing today (P4, P5, P7a, P7b). However, the release pipeline remains stalled — no new releases exist, and a long-open release PR (#5598, 11 days stale) signals potential release process bottlenecks. QA bug-bash waves continue to surface recurring regression patterns, particularly around Slack lifecycle management and message ordering.

## Releases

No new releases in the last 24 hours. A release PR (#5598) remains open since July 3, containing breaking changes for `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0). Maintainers should prioritize landing this to unblock downstream consumers.

## Project Progress

**27 PRs merged/closed today**, with significant advancement in three major workstreams:

- **Extension Runtime Unification**: Seven PRs in the NEA-25 extension-runtime train landed:
  - P4 — generic ingress router + verifier (#6007, [view](https://github.com/nearai/ironclaw/pull/6007))
  - P5 — delivery coordinator + Slack/Telegram outbound (#6012, [view](https://github.com/nearai/ironclaw/pull/6012))
  - P7a — wire state enums + deferred legs (#6056, [view](https://github.com/nearai/ironclaw/pull/6056))
  - P7b — finalize with package inventory (#6065, [view](https://github.com/nearai/ironclaw/pull/6065))
  - Train A roll-up (#6061, [view](https://github.com/nearai/ironclaw/pull/6061))
  - Train B roll-up (#6090, [view](https://github.com/nearai/ironclaw/pull/6090))

- **WebChat v2 Model Selection**: PR #6111 ([view](https://github.com/nearai/ironclaw/pull/6111)) brings model selection and per-run cost tracking to the regular WebChat v2 API, matching OpenAI-compatible API capabilities.

- **Message Ordering Fix**: #6096 ([view](https://github.com/nearai/ironclaw/pull/6096)) fixes the critical P2 bug #6047 where concurrent inbound messages were displayed out of chronological order, by serializing writes per thread.

- **Self-Verification Pass**: #6093 ([view](https://github.com/nearai/ironclaw/pull/6093)) adds a gated self-verification pass to the agent loop, enabled for benchmarks without changing default product behavior.

- **Resource Governor Recovery**: #6089 ([view](https://github.com/nearai/ironclaw/pull/6089)) makes the resource governor resilient to libSQL/PostgreSQL contention by classifying BUSY/LOCKED errors as typed retryable contention.

- **Memory Browse Isolation**: #5896 ([view](https://github.com/nearai/ironclaw/pull/5896)) scopes WebUI memory browsing to the authenticated caller, fixing workspace memory visibility.

- **Tools-Capable Completion Nudge**: #6013 ([view](https://github.com/nearai/ironclaw/pull/6013)) enables tools-capable completion nudges for interactive coding profiles.

## Community Hot Topics

The most active discussion centers on **extension lifecycle reliability**:

- **#6105** ([view](https://github.com/nearai/ironclaw/issues/6105)) — Extension/channel lifecycle state-machine test: 1 comment, captures the #1 user-facing bug family (Slack disconnect/reconnect). A PR (#6110) already exists to add integration tests. This reflects deep community frustration with regression-prone Slack integration.

- **#5948** ([view](https://github.com/nearai/ironclaw/issues/5948)) — Assistant incorrectly reports GitHub extension as activated: 5 comments, closed. While closed, the volume of similar "false positive" status reports (#6091, #6099) indicates a systemic issue with state reporting accuracy.

- **#6108** ([view](https://github.com/nearai/ironclaw/issues/6108)) — Error fidelity enforcement: zero comments but cross-references 4+ related bugs, showing community demand for honest error signaling over silent failures.

- **#6099** ([view](https://github.com/nearai/ironclaw/issues/6099)) — POST /llm/test-connection reports ok:true for unreachable endpoint: community member Anubhav-Koul discovered a critical testing API that lies to users, eroding trust in the settings UI.

## Bugs & Stability

**Critical severity:**
- **#6087** ([view](https://github.com/nearai/ironclaw/issues/6087)) — Extension catalog failures silently show empty state, indistinguishable from a genuinely empty catalog. No fix PR yet. This blocks users from knowing if extensions are available.

**High severity:**
- **#6091** ([view](https://github.com/nearai/ironclaw/issues/6091)) — Slack reports conflicting connection states after disconnect (P2). No fix PR; this is part of a recurring regression pattern.
- **#6092** ([view](https://github.com/nearai/ironclaw/issues/6092)) — Slack conversation hangs indefinitely after reconnecting (P2). No fix PR.
- **#6109** ([view](https://github.com/nearai/ironclaw/issues/6109)) — OpenAI-compat API: Bedrock silently ignores model override, response label is a blind echo. No fix PR.

**Medium severity:**
- **#6047** ([view](https://github.com/nearai/ironclaw/issues/6047)) — Task messages out of chronological order (P2). Fix PR #6096 is open and merged — this is the most important fix today.
- **#6100** ([view](https://github.com/nearai/ironclaw/issues/6100)) — Context-window cache reseeded with stale snapshot after slow write race. Pre-existing bug, discovered during #6096 review. No fix yet.
- **#6102** ([view](https://github.com/nearai/ironclaw/issues/6102)) — `FilesystemSessionThreadService` could be reconstructed mid-process with in-flight calls. High-severity concurrency concern.

**Not fixed yet:** The Slack lifecycle bug family (disconnect → reconnect → hang) has regressed across **four** QA bug-bash waves, despite fixes landing for #5851, #5898, #5953, #5957, #6054. This suggests the root cause is deeper than point fixes.

## Feature Requests & Roadmap Signals

Strong roadmap signals from the NEA-25 Train rollups (#6061, #6090):
1. **Unified extension runtime** — A generic extension host framework that will eventually unify Slack, Telegram, MCP, and webhook integrations. Likely next release's headline feature.
2. **Self-verification pass** (#6093) — Already merged; will appear in benchmarks soon, potentially becoming default in a future release.
3. **Slack lifecycle state-machine test** (#6110) — Indicates the team is moving from point fixes to systematic regression prevention.
4. **WebChat v2 model selection + cost** (#6111) — User-facing feature that matches OpenAI-compat API capabilities.

**Community-requested enhancements** (all from ilblackdragon):
- **#6104** — 24h fix-or-wontfix SLA on daily failure-taxonomy candidates, with days-to-fix tracking
- **#6103** — CI signal recovery: nextest retries + visible quarantine for flaky tests
- **#6107** — Model-input compatibility corpus in CI (replay real tool-call shapes)
- **#6106** — Release/staging gate: boot smoke + upgrade-path canary before publish

These four issues signal a **process improvement push**, suggesting the team recognizes systemic CI and release quality issues.

## User Feedback Summary

**Pain points (from bug-bash reports and community issues):**

- **Slack integration unreliability** (#6091, #6092, #5884) — The #1 frustration. Users cannot trust Slack to stay connected after reconfiguration. One user reports: "the bot remains in 'thinking…' state indefinitely, then tells you to check the WebUI." This erodes daily workflow confidence.

- **Silent/lying error states** (#6099, #6087, #6095) — Multiple issues where the system reports success or normal state despite actual failure. A user building a settings page "had the button say the key was valid for a nonexistent endpoint" — this is a trust-killer.

- **Credential lifecycle problems** (#5884) — Credentials lost after external token revocation, with no graceful degradation. Routines that worked for days suddenly fail mid-execution.

- **UI inconsistency** (#6039 — light theme unreadable, #6037 — connection status hidden, #5947 — thread deletion not reflected) — Despite being lower severity, these affect daily UX perception.

**Positive signals:**
- The new MCP registration framework skeleton (#5970) and the MCP tab fix (#6028) show investment in Model Context Protocol support, likely addressing developer tooling needs.
- Memory isolation fix (#5896) directly addresses the workspace privacy concern raised in #5460, which was a significant trust issue for multi-user deployments.

## Backlog Watch

**High-priority items needing maintainer attention:**

1. **Release PR #5598** ([view](https://github.com/nearai/ironclaw/pull/5598)) — Open since July 3 (11 days). Contains breaking changes for `ironclaw_common` and `ironclaw_skills`. Blocking downstream consumers; no recent activity.

2. **PR #5970** ([view](https://github.com/nearai/ironclaw/pull/5970)) — MCP registration framework skeleton, open 4 days. This is critical infrastructure for the MCP roadmap but has no recent comments or approvals.

3. **#6105** ([view](https://github.com/nearai/ironclaw/issues/6105)) — Extension/channel lifecycle state-machine test. While #6110 exists as a first deliverable, the parent issue calls for putting channel canary lanes on cron. No movement on the cron part yet.

4. **#6106** ([view](https://github.com/nearai/ironclaw/issues/6106)) — Release/staging gate with boot smoke and upgrade-path canary. Directly addresses why #5966 (security fix crash-loop) made it to production. Zero comments, no assignee.

5. **#6103** ([view](https://github.com/nearai/ironclaw/issues/6103)) — CI signal recovery. Main-branch CI red 70% of July pushes due to 5 flaky tests. `nightly-deep-ci.yml` had **zero successful runs in 63 days**. This is a quality infrastructure crisis.

6. **#6085** ([view](https://github.com/nearai/ironclaw/issues/6085)) — Admin user details expose broken Create token action. Simple UI bug that could lead to confusion or support tickets. No fix PR.

7. **#3411** (not in top 30 but referenced implicitly via #6098) — Windows support regressions. PR #6098 fixes a Windows filesystem crash but remains open. Windows users cannot boot `ironclaw-reborn` at all currently.

**Overall project health assessment:** The team is shipping large architectural changes (unified extension runtime) aggressively, but this velocity is creating a widening gap between new features and quality assurance. The Slack regression pattern across four bug-bash waves, combined with 63-day CI failures and a stalled release pipeline, suggests the project would benefit from a stabilization sprint before the next release.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for **2026-07-15**.

---

## LobsterAI Project Digest: 2026-07-15

### 1. Today's Overview
The project shows **low activity** over the last 24 hours, primarily driven by housekeeping and stability patches. No new releases were published. The development team closed **4 stale issues** (all marked as inactive) and merged **3 pull requests**. The focus appears to be on stabilizing the **OpenClaw runtime** (agent loop termination) and fixing a **UI scroll regression** in the cowork/renderer module. The high number of stale issue closures suggests the maintainers are clearing technical debt or performing a cleanup cycle.

### 2. Releases
**No new releases** were published today. The project remains on its last known release cycle.

### 3. Project Progress
Three pull requests were merged/closed today, indicating focused maintenance:

- **PR #2331** (by btc69m979y-dotcom) – Fixed a critical **agent tool-loop** issue in OpenClaw v2026.6.1 by backporting a dual-layer veto mechanism. This prevents runaway agent loops while preserving normal plugin behavior.
- **PR #2330** (by btc69m979y-dotcom) – Backported a fix (`#94412`) to **stop the agent loop after an aborted tool run**, ensuring clean termination at async turn hooks with regression coverage.
- **PR #2329** (by liuzhq1986) – Fixed a UI bug where **conversation scroll jumps** occurred during streaming. Now respects manual scrolling and cancels pending auto-scroll actions.

### 4. Community Hot Topics
Activity on issues was minimal today, with all items being stale closures. The most discussed thread in the last 24 hours was:

- **#1389** (2 comments) – Language selection bug: English UI incorrectly displays Chinese text for "choice" items. This indicates a **localization/i18n regression** that was lingering since April.  
  [View Issue](https://github.com/netease-youdao/LobsterAI/issues/1389)

### 5. Bugs & Stability
No new bugs were introduced today. The following **long-standing bugs** were closed as stale without resolution, meaning they may still be present in the current runtime:

| Issue | Severity (Subjective) | Summary | Fix PR? |
|-------|-----------------------|---------|---------|
| #1386 | **Medium** | Chat "Share" action truncates long conversation screenshots | No |
| #1388 | **Medium** | "Test Connectivity" button on email config hangs indefinitely | No |
| #1389 | **Low** | Language selection label mismatch (English/Chinese) | No |
| #1390 | **High** | Scheduled tasks sometimes fail to update (non-reproducible) | No |

**Note:** The OpenClaw agent loop fix (PRs #2330/#2331) likely addresses a **critical runtime stability bug**—though no issue was linked in the data.

### 6. Feature Requests & Roadmap Signals
No new feature requests were filed or discussed today. The lack of feature chatter suggests the community is currently focused on **reliability and stability**. Given the priority on OpenClaw runtime fixes and scrolling behavior, the next minor release is likely to be a **stability patch** rather than a feature drop.

### 7. User Feedback Summary
Based on the closed issues from the last quarter:
- **Pain point:** Users are experiencing frustration with core UI flows: sharing long conversations (incomplete output), email configuration hanging, and intermittent update failures in scheduled tasks.
- **Satisfaction:** The community has not expressed high praise or strong dissatisfaction recently—largely quiet feedback loops.
- **Use case friction:** The localization issue (#1389) suggests international users may be encountering confusing UX when switching languages.

### 8. Backlog Watch
The following **stale but unresolved issues** were closed today without a fix. They represent **deferred technical debt** and may reappear as regressions:

- **#1386** – Share/export truncation (chat length)  
  [View Issue](https://github.com/netease-youdao/LobsterAI/issues/1386)
- **#1388** – Email test connectivity hangs  
  [View Issue](https://github.com/netease-youdao/LobsterAI/issues/1388)
- **#1390** – Scheduled task update failure (intermittent)  
  [View Issue](https://github.com/netease-youdao/LobsterAI/issues/1390)

**Project Health Note:** Maintainer responsiveness is moderate. While 3 PRs were merged quickly, the closure of 4 unreproduced or low-priority bugs indicates a "close-stale-triage" strategy rather than root-cause fixes. If the agent loop fix (PRs #2330/#2331) was indeed a backend response to #1390 (hang behavior), it may silently resolve the scheduled tasks bug—but no direct linkage was documented.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-15

## Today's Overview
Moltis is in a **high-activity phase** with 12 PRs updated in the last 24 hours (8 merged/closed) and 3 issues updated (2 open, 1 closed). A new release (20260714.11) was published, and the team has been aggressively fixing MCP OAuth compatibility issues, browser tool handling for local models, and dependency updates. The project shows strong momentum across both core infrastructure (OAuth, CalDAV, gateway configuration) and user-facing features (GPT-5.6 support, browser auto-screenshots, chat context commands). Community contributions remain active, particularly from repeat contributors like `resumeparseeval` and `s-salamatov`.

## Releases
**Release: 20260714.11** — [GitHub](https://github.com/moltis-org/moltis/releases/tag/20260714.11)

- **New:** GPT-5.6 model family added (Sol, Terra, Luna) with documented 1.05M context window and 372K backend limit
- **Fixes:** MCP OAuth flow fixed for servers using `resource_metadata` in WWW-Authenticate headers; nullable browser tool parameters handled; stringified scalar tool args coercing before validation; CalDAV panic on non-ASCII datetime values resolved; gateway metrics feature no longer force-enables matrix-sdk
- **No documented breaking changes or migration notes** in this release

## Project Progress
**Merged/Closed PRs (8):**

| PR | Description | Status |
|---|---|---|
| [#1146](https://github.com/moltis-org/moltis/pull/1146) | **GPT-5.6 model support** — Registered Sol, Terra, Luna in OpenAI/Codex catalogs, updated context windows and config examples | Merged |
| [#1120](https://github.com/moltis-org/moltis/pull/1120) | **Fix MCP OAuth** — Fixed `invalid_target` error for Notion/Linear MCP servers by using direct fetch for `resource_metadata` URL from WWW-Authenticate | Merged |
| [#1089](https://github.com/moltis-org/moltis/pull/1089) | **Cap persisted tool results** — Prevents memory bloat by capping tool/tool_result content during session rehydration across all chat modes | Merged |
| [#1136](https://github.com/moltis-org/moltis/pull/1136) | **Coerce stringified scalar tool args** — Fixes local model compatibility (Gemma 4, oMLX) where models emit `"true"` instead of `true` | Merged |
| [#1098](https://github.com/moltis-org/moltis/pull/1098) | **Handle null optional browser params** — Tolerates `null` values from smaller local models in browser tool calls | Merged |
| [#1145](https://github.com/moltis-org/moltis/pull/1145) | **Fix CalDAV panic** — Prevents index-out-of-bounds panic on non-ASCII datetime strings from remote CalDAV servers | Merged |
| [#1139](https://github.com/moltis-org/moltis/pull/1139) | **Gateway metrics fix** — Adds weak `?` qualifier so enabling metrics doesn't force-build matrix-sdk | Merged |
| [#1141](https://github.com/moltis-org/moltis/pull/1141) | **Dependency bump** — Updated esbuild and vite in npm_and_yarn group | Merged |

**Open PRs still in flight (4):**
- [#1148](https://github.com/moltis-org/moltis/pull/1148) — Fresh dependency bump (esbuild/vite)
- [#1135](https://github.com/moltis-org/moltis/pull/1135) — Auto-screenshots after browser actions (feature)
- [#1124](https://github.com/moltis-org/moltis/pull/1124) — Chat context command support (feature)
- [#1093](https://github.com/moltis-org/moltis/pull/1093) — Channel activity log visibility settings (feature)

## Community Hot Topics
1. **Issue #1119** (CLOSED) — *MCP OAuth fails with `invalid_target` for servers using `resource_metadata`* ([link](https://github.com/moltis-org/moltis/issues/1119))  
   **1 comment, fixed by PR #1120.** This was a high-priority integration bug affecting Notion and Linear MCP servers. The core issue was that `discover_and_register()` was passing the URL from WWW-Authenticate incorrectly. The underlying need: users want seamless OAuth-based MCP server setup without manual workarounds.

2. **Issue #1132** (OPEN) — *"main" session can't be deleted/archived* ([link](https://github.com/moltis-org/moltis/issues/1132))  
   **1 comment, no fix yet.** This is a UX bug preventing users from managing their default session. May indicate architectural constraints around the default session lifecycle.

3. **Issue #1102** (OPEN) — *Feature: Add FunASR/SenseVoice as local STT engine* ([link](https://github.com/moltis-org/moltis/issues/1102))  
   **1 comment.** The discussion now includes clarifying license notes (both FunASR and SenseVoice repos). Shows user demand for offline speech recognition alternatives, likely driven by privacy or cost concerns with cloud STT.

## Bugs & Stability

### Critical
- **#1119 (CLOSED)** — MCP OAuth failure with Notion/Linear: blocked entire server integration workflow. **Fixed in #1120**, included in release 20260714.11.

### High
- **#1145 (CLOSED)** — CalDAV panic on non-ASCII datetimes: could crash the CalDAV integration on encountering legitimate international date formats. **Fixed in #1145**, included in release.

### Medium
- **#1132 (OPEN)** — Cannot delete/archive the "main" session: blocks session management for default users. **No fix PR yet.**
- **#1098 (CLOSED)** — Null optional params in browser calls from Gemma 4 caused tool execution failures. **Fixed in #1098.**
- **#1136 (CLOSED)** — Stringified scalar args from small local models (Gemma 4, oMLX) caused validation failures. **Fixed in #1136.**

### Low
- **#1139 (CLOSED)** — Metrics feature force-enabled matrix-sdk: build-time issue only, not runtime. **Fixed.**

## Feature Requests & Roadmap Signals

**Likely to land next:**
- **Auto-screenshot after browser actions** (PR #1135) — Per-step screenshot timeline for chat clients. Near-complete, 3 weeks open.
- **Chat context command** (PR #1124) — Lets deployments inject runtime context before each turn. 4 weeks open, detailed implementation.
- **Activity log visibility settings** (PR #1093) — Per-account/channel/user privacy controls for channel reply logs. 6 weeks open.

**Under discussion:**
- **FunASR/SenseVoice local STT** (Issue #1102) — License clarification now available, likely next major feature for offline speech.

**GPT-5.6 support** (PR #1146) has already landed, showing Moltis is keeping pace with the latest model releases.

## User Feedback Summary
- **Pain Points:** MCP OAuth friction with major services (Notion, Linear) was a clear blocker — user `xzavrel` reported it and contributed the fix. Local model users (Gemma 4, oMLX) face recurring compatibility issues with tool argument formats, suggesting a need for more robust parameter coercion.
- **Use Cases:** Users are deploying Moltis with both cloud models (GPT-5.6) and local models. The "context command" feature and browser auto-screenshots suggest agent-driven workflows are a primary use case.
- **Satisfaction:** Quick turnaround on the MCP OAuth fix (same-day merge) and inclusion in a release shows responsive maintenance. The PR from community member `resumeparseeval` (3 merged PRs this batch) indicates an engaged contributor base.

## Backlog Watch
- **Issue #1132** — "main" session deletion bug: **1 month old**, no assignee, no fix PR. This is a potential UX pain for all users.
- **Issue #1102** — FunASR/SenseVoice feature request: **6 weeks old**, maintainer has not explicitly committed to timeline despite providing license clarification.
- **PR #1124** — Chat context command: **4 weeks open**, no conflict but no recent maintainer activity.
- **PR #1093** — Activity log visibility: **6 weeks open**, longest-standing open feature PR without merge. May need maintainer review.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-15

## Today's Overview

CoPaw is experiencing an intense period of post-v2.0 stabilization, with 50 issues and 50 PRs updated in the last 24 hours — marking one of the busiest single-day activity spikes in recent months. The team released **v2.0.0.post2** today, which introduces more sensitive file detection and global read permissions, but the overwhelming signal from the community is one of **regression pain**: Windows sandbox explosions, broken context compression, memory search loops, and governance bypass bugs dominate the tracker. While the maintainers are actively merging fixes (many of which appear within hours of issue submission), the sheer volume of critical bugs suggests the v2.0 migration was more disruptive than anticipated. The split between open (16 issues, 26 PRs) and closed/resolved items (34 issues, 24 PRs) shows a team working hard to triage, but the backlog of 50 tracked items remains a concern for long-term project health.

## Releases

### v2.0.0.post2 (released 2026-07-14)
**GitHub:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post2

**Changes:**
- **feat:** more sensitive files & allow read global (@weidankong, PR #6067) — expands the set of files that trigger security sensitivity warnings and adds a configuration option to allow reading global files.
- **test(unit):** runtime/security/install regression tests — adds regression coverage for the critical sandbox and installation code paths.

**Breaking Changes / Migration Notes:** None explicitly documented, but given the active bug reports around sandbox behavior and module resolution (see Bugs & Stability), users on v2.0.0 or v2.0.0.post1 are strongly encouraged to upgrade.

## Project Progress

Today's merged/closed PRs (24 total) show a clear focus on **stabilizing the v2.0 release** across several dimensions:

| PR | Title | Status |
|---|---|---|
| #6098 | feat(memory): improve ReMe reliability, observability, and CJK embedding safety | **Merged** |
| #6108 | fix(context): keep tool results paired with assistant calls during context compression | **Merged** (Under Review → merged) |
| #6109 | fix(governance): honor sandbox_enabled switch in OFF-mode sandbox path | **Merged** |
| #6112 | feat(plugins): add Zalo Bot channel (2.0 plugin architecture) | **Merged** |
| #5716 | feat(channels): add generic webhook channel (first-time contributor) | **Merged** (after design review) |

**Key advances:**
- **Memory system fixes:** PR #6098 addresses Chinese-language embedding truncation bugs (Issue #5950) and adds runtime observability for ReMe.
- **Context compression repair:** PR #6108 fixes the critical bug where tool messages lost their paired assistant messages during compression, which caused 400 errors on DeepSeek API backends.
- **Governance sandbox fix:** PR #6109 ensures the `sandbox_enabled=false` configuration is actually honored when `approval_level=OFF` is set.
- **Channel ecosystem expansion:** Two new channel integrations merged today — a generic webhook channel (#5716, from a first-time contributor) and a Zalo Bot plugin (#6112), signalling growing interest in multi-platform deployment.

## Community Hot Topics

### Most Active Issues (by comments)

1. **#2291 — [CLOSED] Open Tasks / Help Wanted** (64 comments)
   - *Author:* cuiyuebing | *Last Updated:* 2026-07-14
   - *Link:* https://github.com/agentscope-ai/QwenPaw/issues/2291
   - *Analysis:* This is the project's pinned community contribution tracker with P0-P2 priority tasks. The high comment count reflects ongoing coordination work, not a bug. Healthy sign of community engagement but may need consolidation.

2. **#5951 — [CLOSED] Windows sandbox pwsh recursive explosion** (9 comments, 0 👍)
   - *Author:* wjt0321 | *Last Updated:* 2026-07-14
   - *Link:* https://github.com/agentscope-ai/QwenPaw/issues/5951
   - *Analysis:* **Critical severity** — pwsh windows spawning infinitely, eating 20GB RAM, no way to disable. This was the most impactful bug reported in this period. The issue is now closed, suggesting it was addressed, but users should verify the fix in v2.0.0.post2.

3. **#578 — [CLOSED] OpenClaw-Inspired Features for Compounding Agent Value** (8 comments)
   - *Author:* jsirish | *Last Updated:* 2026-07-14
   - *Link:* https://github.com/agentscope-ai/QwenPaw/issues/578
   - *Analysis:* Long-running meta-issue tracking architecture improvements inspired by OpenClaw. The central theme — making CoPaw "compounding" in value over time — suggests a user desire for persistent learning and adaptation, not just stateless tool-calling.

### Most Active PRs (by activity)

1. **#6099 — [OPEN] migrate CloudPaw plugin to v2.0** (updated today)
   - *Author:* Saint-Yin | *Link:* https://github.com/agentscope-ai/QwenPaw/pull/6099
   - *Significance:* Plugin ecosystem migration to v2.0 API — indicates third-party plugins are actively adapting.

2. **#6071 — [OPEN] route Tauri desktop updates through OSS only** (updated today)
   - *Author:* jinglinpeng | *Link:* https://github.com/agentscope-ai/QwenPaw/pull/6071
   - *Significance:* Infrastructure change for desktop auto-update distribution.

3. **#5992 — [OPEN, first-time contributor] per-session model overrides** (4 days old)
   - *Author:* mango8853 | *Link:* https://github.com/agentscope-ai/QwenPaw/pull/5992
   - *Significance:* Highly requested feature — allows different LLMs per conversation within the same agent.

**Underlying community needs:**
- **Stability over new features:** Most hot topics are bug reports, not feature requests. The v2.0 release has clearly caused substantial regressions.
- **Cross-platform parity:** Windows sandbox issues and Linux Electron CLI crashes suggest the Linux/macOS/Windows parity gap widened with v2.0.
- **Better user control:** Multiple issues ask for control over when memory search happens, which tools trigger approval, and how long results are displayed.

## Bugs & Stability

### Critical Severity (active today)

| Issue | Title | Status | Fix PR Exists? |
|---|---|---|---|
| [#6113](https://github.com/agentscope-ai/QwenPaw/issues/6113) | "一直卡在搜索记忆" (stuck in infinite memory search loop) | **OPEN** | Yes: PR #6120 (fix memory auto-search) |
| [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) | Doom loop: agent repeatedly triggers same tool call | **OPEN** | Not yet identified |
| [#6121](https://github.com/agentscope-ai/QwenPaw/issues/6121) | DeepSeek scroll context compression → 400 / "Model unknown" | **OPEN** | Yes: PR #6108 (merged) + PR #6123 (open) |

### High Severity (active today)

| Issue | Title | Status | Fix PR Exists? |
|---|---|---|---|
| [#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964) | Upgrade to 2.0 → chat-to-conversation mapping lost, 500 error | **OPEN** | No |
| [#6100](https://github.com/agentscope-ai/QwenPaw/issues/6100) | `agent.json` overwritten with empty config on pip upgrade (1.1.9 → 2.0.0.post1) | **OPEN** | No |
| [#6089](https://github.com/agentscope-ai/QwenPaw/issues/6089) | "Model 'unknown'" error when using OpenCode free models | **CLOSED** (invalid?) | N/A |

### Regressions Tracked

1. **Windows sandbox ACE pollution (#5829):** QwenPaw v2.0's AppContainer sandbox added inheritable ACE entries to system directories that broke Chromium-based apps (Hermes Desktop). *Status: Closed, fix believed included in post2.*
2. **Frozen desktop build drops agentscope modules (#6097):** macOS Desktop build missing `agentscope.tool._builtin._scripts` subpackage, crashing Glob tool and auto-memory. *Status: Closed, acknowledged.*
3. **v2.0 upgrade data loss (#5964, #6100):** Multiple reports of data loss or configuration corruption during upgrade. *Status: OPEN — no confirmed fix yet.*

## Feature Requests & Roadmap Signals

### Today's New Feature Requests (likely candidates for next release)

| Issue | Request | Predicted Trajectory |
|---|---|---|
| [#6125](https://github.com/agentscope-ai/QwenPaw/issues/6125) | Support for KylinOS (Chinese government Linux) | **Medium probability** — aligns with Chinese government/enterprise adoption goals |
| [#6048](https://github.com/agentscope-ai/QwenPaw/issues/6048) | CIDR range support in trusted host whitelist | **High probability** — simple config extension, admin-facing |
| [#5976](https://github.com/agentscope-ai/QwenPaw/issues/5976) | Separate control of tool call vs result display in channels + result truncation | **Moderate probability** — improves UX, reduces noise |
| [#6087](https://github.com/agentscope-ai/QwenPaw/issues/6087) | Real-time user message injection during agent iteration loops | **Low probability in short term** — fundamental architecture change needed |

### Long-Term Signals

The OpenClaw-inspired meta-issue [#578](https://github.com/agentscope-ai/QwenPaw/issues/578) continues to accumulate comments and represents a strategic direction: making CoPaw's value **compound** with usage — through persistent memory, learned preferences, and accumulating skill definitions. This contrasts with the current focus on sandbox/tool security and suggests a potential roadmap pivot once stability regressions are resolved.

## User Feedback Summary

### User Pain Points (explicit in today's issues)

1. **"Upgrade from 1.x to 2.0 broke my setup"** — Multiple users report their workspace, agents, or conversations either lost data (#5964, #6100) or became completely non-functional (#5951). The upgrade path from 1.x to 2.0 appears to lack a proper migration script or database schema update.

2. **"Memory search loops make the tool unusable"** — Issue #6113 captures a user's frustration: "每次提问，都会去先检索记忆，一检索就无休止的循环检索" (Every question triggers memory search, and it loops forever). The user explicitly asks to disable this behavior. This is a classic "helpful feature crossed into nuisance" boundary.

3. **"Context compression breaks my chat mid-session"** — Multiple users (Issues #6077, #6121) hitting 400 errors when using DeepSeek API after long conversations. The context compression middleware is corrupting message formatting.

4. **"Configuration that says OFF doesn't actually turn off"** — The `approval_level: OFF` setting globally ignored, and `sandbox_enabled: false` still forcing sandbox execution, causing user frustration (#5984, #6020).

### User Satisfaction Signals

- **Positive:** First-time contributors are submitting PRs (webhook channel, per-session models, Zalo Bot) — suggests a welcoming project.
- **Tense but engaged:** The 50 issues/50 PRs volume, with many quickly closed, shows the team is responsive even if users are encountering problems.
- **Enterprise interest:** The KylinOS question (#6125) and the generic webhook channel (already merged) indicate enterprise and government interest.

## Backlog Watch

### Long-Open Issues Needing Maintainer Attention

| Issue | Age | Title | Last Activity | Priority Signal |
|---|---|---|---|---|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | ~112 days | Help Wanted task board | Updated 2026-07-14 | **P0 tasks still unclaimed** — many Not Started tasks remain; the project may need to re-prioritize or break down large tasks |
| [#4964](https://github.com/agentscope-ai/QwenPaw/issues/4964) | ~41 days | Interrupt agent execution on new user message | Updated 2026-07-15 | **Closed today** — but similar request in #6087 suggests this isn't fully resolved |
| [#5333](https://github.com/agentscope-ai/QwenPaw/issues/5333) | ~26 days | Agent hangs after submitting instruction, UI shows text input not "stop" button | Last updated 2026-07-14 | **No fix merged yet** — may be related to DeepSeek compatibility issues |
| [#5966](https://github.com/agentscope-ai/QwenPaw/issues/5966) | ~4 days | "Which agentscope kernel — 2.0 or 1.12?" | Updated 2026-07-14 | **No answer from maintainer** — user confusion about dependency version is a documentation gap |

### Stale PRs

- **PR #5716** (generic webhook channel) — took 13 days from submission to merge, requiring a redesign from built-in to plugin architecture. This suggests design review is thorough but slow.

### Recommendation

The project should consider a **dedicated stabilization sprint** (1-2 weeks of bug fixes only) before adding new features. The current volume of open regressions risks eroding user trust in the v2.0 line. The Chinese user base (majority of bug reporters) appears particularly affected by sandbox, memory, and context compression issues.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-15

## Today's Overview

ZeroClaw shows **elevated development activity** with 50 pull requests updated in the last 24 hours and 27 active issues. The project is clearly in a **heavy feature-integration phase**, with large multi-PR stacks around the goal management system (4 stacked PRs from @vrurg) and SOP authoring surfaces proceeding toward the v0.8.3 milestone. Security continues to be a major focus, with two new SSRF-gating patches submitted and a critical confused-deputy vulnerability (#7947) still open. The project demonstrates strong community engagement but also a growing backlog of `needs-author-action` tagged PRs (8 of the top 20), indicating contributor bottlenecks. No new releases were published today.

## Releases

**No new releases today.** The v0.8.3 milestone (#7320) remains in feature-freeze closeout with all child trackers closed pending final release validation and publication.

## Project Progress

**6 issues closed today**, primarily bug fixes addressing SOP engine integrity:
- **#8678** (closed): `advance_step` SOP approval-gate bypass — a critical access control fix
- **#8631** (closed): Headless deterministic SOP steps falsely recorded as "Completed" without executing
- **#8695** (closed): Cron jobs ignoring `uses_memory = false` flag, leaking memory context
- **#6689** (closed): SOP audit keys (`sop_run_*`/`sop_step_*`) never written to Memory backend — a silent observability gap
- **#8413** (closed): Filesystem SOP event source (channel-filesystem) merged
- **#6686** (closed): SOP cron triggers had no production caller — wiring gap resolved

**2 PRs merged/closed** (net merge rate low), but 48 remain open with active updates. Major open PRs showing progress:
- **Goal management stack** (@vrurg): #8687 (controller/verifier), #8688 (trusted goal tools), #8689 (channel goal admission), #8746 (fix self-resume loops), #8996 (preserve goals across reload) — a coordinated 5-PR rework
- **#8784** (fanchanghu): Split-history loop contract for agent entry points — PR-1 of the #7846 hook rework
- **#8486** (REL-mame): OpenAI-compatible chat completions endpoint for the gateway — high-demand feature

## Community Hot Topics

**Most Active Issues:**

1. **#5982** — *Per-sender RBAC for multi-tenant deployments* (10 comments)
   - 3-month-old feature request that continues gathering discussion. Community wants isolated workspaces/tools/rate-limits per user class (customers, operators, developers). Likely a v0.9.0 candidate.

2. **#6055** — *Slack thread context hydration on first mention* (7 comments)
   - Follow-up from #5992, still awaiting implementation. Reduces friction for `strict_mention_in_thread` workflows.

3. **#8973** — *Landlock blocks shell access to `/dev/null` on Fedora* (4 comments)
   - S2 severity bug affecting Linux production deployments. Active discussion around sandbox policy refinement.

4. **#9048** — *RFC: Separate conversation history from long-term memory* (3 comments, created today)
   - Architecture RFC from @Audacity88. Addresses a fundamental design tension — runtime/gateway/channel code writes conversation turns into MemoryCategory::Conversation, mixing lifecycle concepts. **Likely to drive significant refactoring.**

5. **#8933** — *Cross-turn conversation correlation for OpenTelemetry* (3 comments)
   - RFC adding `gen_ai.conversation.id` span attribute. Important for observability in long-running agent sessions.

**Most Active PRs** (all from the @vrurg goal stack, each with large size/XL labels):
- #8746, #8689, #8688, #8687 — All received comments/updates in last 24h. This is the **most consequential feature merge train** in the project currently.

## Bugs & Stability

**Critical (S0) — Security Risk:**
- **#7947** (OPEN, p1): `execute_pipeline` bypasses per-agent tool gating entirely — a confused-deputy vulnerability. **S0 severity**, but remains open for nearly a month. No fix PR linked. **Immediate maintainer attention needed.**

**High (S1) — Workflow Blocked:**
- **#8563** (OPEN): SOPs not available through web dashboard chat — core UX blocker
- **#8675** (OPEN, p1): Malformed native tool-call arguments cause 400 errors from OpenRouter/OpenAI providers → empty replies. No fix PR yet.
- **#9052** (OPEN, created today): `channel-line` omitted from CI coverage — could allow regressions to ship

**Medium (S2) — Degraded Behavior:**
- **#8973** (OPEN): Landlock Fedora shell access blocked — fix requires sandbox policy update
- **#9001** (OPEN): Provider turn failures bury cause-specific diagnostics — debugging impeded
- **#9078** (OPEN, created today): Serial transport desynchronizes after non-matching response ID — needs drain logic

**Bug Fix PRs submitted today:**
- **#8826** (wangmiao0668000666): SSRF gate for `image_gen` download URL — closes a security surface
- **#8713** (wangmiao0668000666): `file_download` SSRF gate with `allowed_private_hosts` opt-in — third SSRF audit patch
- **#8902** (RyanSquared): Bidirectional RPC for `ask_user` and `poll` in zerocode
- **#8935** (mwqgithub): Preserve Gemini thought signatures in tool-call history

## Feature Requests & Roadmap Signals

**High-confidence for v0.8.3 (closeout imminent):**
- SOP authoring surface (#8736) — node-graph editor, live overlays, channel fan-in
- Goal management stack (#8687–#8689, #8746, #8996) — trusted goal tools, channel admission, persistence across reload
- WASM channel plugins (#8852) — first real caller wired

**Likely for v0.9.0:**
- **Per-sender RBAC** (#5982) — foundational for multi-tenant deployments
- **Conversation vs. memory separation** (#9048) — significant architecture change
- **Pre-hook skip gates for cron/SOP triggers** (#5607) — community request from April
- **OpenAI-compatible gateway endpoint** (#8486) — ecosystem compatibility
- **Skill auto-activation** (#8965) — declarative triggers + provider switching on inbound messages

**Community-requested enhancements still in backlog:**
- Slack thread hydration (#6055)
- Cross-turn OTel correlation (#8933)
- SOP routing with false-`when` fallthrough (#8719)
- Centralized SOP ingress adapters (#8581)

## User Feedback Summary

**Pain Points (explicitly stated in issues):**
- Security hardening is a recurring theme — users deploying in multi-tenant or production environments are hitting sandbox gaps (#7947, #8973, #8826, #8713)
- SOP documentation lacks sufficient examples (#8587) — users find the concept compelling but struggle with syntax
- Conversation history vs. long-term memory mixing creates confusing behavior (#9048)
- Cron jobs do not properly respect `uses_memory = false` (#8695) — stateless scheduled runs still recall memory
- Provider 400 errors with empty replies (#8675) degrade reliability for OpenAI-wire-format users

**Satisfaction Signals:**
- SOP engine is described as "a great concept" (#8587)
- Community continues to file detailed RFCs with implementation sketches — sign of engaged, technically sophisticated user base
- Multiple contributors submitting security patches (wangmiao0668000666, metalmon) — indicates strong community investment

**Use Cases Driving Development:**
- Multi-tenant agent deployments (RBAC, isolated workspaces)
- Production SOP workflows (deterministic steps, audit trails, fan-in sources)
- IDE/ecosystem integration (OpenAI-compatible API)
- Telemetry and observability (OTel spans, correlated traces)
- Embedded/hardware deployments (serial protocol, firmware CI)

## Backlog Watch

**Stale Issues Needing Maintainer Attention:**
- **#5607** (2026-04-10): Pre-hook skip gates — **3 months old**, p2, blocked status, no assignee
- **#5982** (2026-04-22): Per-sender RBAC — **nearly 3 months**, high-risk, accepted but unassigned
- **#7320** (2026-06-06): v0.8.3 tracker — all children closed but release not published; what's blocking the final validation?

**PRs in `needs-author-action` Limbo (8 items):**
- #8996, #8784, #8486, #8905, #8852, #8826, #8713, #8313 — All have `needs-author-action` tag, meaning maintainers are waiting on PR authors for revisions. This represents **16% of all open PRs** stuck in review cycles.

**Silent Open Issues (0 comments, possibly missed):**
- #8736 (2026-07-05): SOP authoring task tracking — 0 comments but critical for v0.8.3
- #8383 (2026-06-27): ZeroCode dashboard runtime context — 0 comments, feature request waiting

**Security Concern:**
- **#7947** (2026-06-18, S0 severity) — `execute_pipeline` bypasses per-agent tool gating. One month open with no fix PR. This is a **blocker for any multi-agent deployment** and should be escalated.

---

*Data snapshot: 2026-07-15 23:59 UTC | Source: github.com/zeroclaw-labs/zeroclaw*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*