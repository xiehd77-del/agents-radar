# OpenClaw Ecosystem Digest 2026-07-19

> Issues: 373 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-19 02:52 UTC

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
**Date:** 2026-07-19

---

## Today's Overview

OpenClaw shows extremely high activity with **373 issues** and **500 PRs** updated in the last 24 hours, indicating a very busy development cycle. The project released **v2026.7.2-beta.3** featuring remote coding sessions and native automation upgrades. However, project health is mixed: while 230 PRs were merged/closed, there are **229 open/active issues** and **270 open PRs**, suggesting maintainer capacity is strained. Several **P0 release-blocker bugs** (crash-loop on gateway startup, state migration failures) remain open, and multiple "diamond lobster" severity issues signal critical stability concerns. The community is actively engaged, with high-comment threads on Telegram integration features and security improvements.

---

## Releases

### v2026.7.2-beta.3 (2026-07-19)

**Highlights:**
- **Remote coding sessions:** Run Control UI sessions on cloud workers; open Codex and Claude catalog sessions in terminals on their owning hosts; resume OpenCode and Pi sessions directly in a terminal.
- **Native automation and nodes:** b (description truncated in source data)

**Release URL:** [openclaw/openclaw Releases](https://github.com/openclaw/openclaw/releases)

*Note: Full release notes were truncated in the data feed. No explicit breaking changes or migration notes were provided.*

---

## Project Progress

**230 merged/closed PRs today** — substantial progress across multiple areas:

- **Core architecture:** PR #111121 adds optional shared-state foundation as part of the durable-core series (PR2/6)
- **Protocol cleanup:** PR #111041 performs pre-publish cheat-window cleanup for `@openclaw/gateway-protocol`
- **Security hardening:** Multiple PRs add size bounds on file reads to prevent OOM (PR #110776, #110593, #110755, #101477)
- **Matrix fix:** PR #110021 keeps Matrix DM session keys case-distinct per peer
- **Mobile improvements:** PR #111039 adds inline diffs for edit/write tool rows on iOS/macOS
- **Web UI:** PR #111108 fixes stopping channel sessions from WebChat; PR #111145 ignores malformed tool stream entries
- **Telegram:** PR #111146 delivers visible notice on Feishu reply-session init conflicts
- **Worker/process safety:** PR #111126 fixes agent exits with nonzero code when gateway runs don't complete

---

## Community Hot Topics

### Most Active Discussions:

1. **#91009** [🔴 P1, Diamond Lobster] — *Codex PreToolUse native hook relay spawns CPU-bound processes* (14 comments)
   - [Issue #91009](https://github.com/openclaw/openclaw/issues/91009)
   - *Analysis:* Users report process fork bombs during Codex integration, causing 100% CPU usage and stalled RPC. This is a critical performance/stability concern affecting all Codex users.

2. **#10659** [🔴 P1, Diamond Lobster] — *Masked Secrets - Prevent Agent from Accessing Raw API Keys* (13 comments, 4 👍)
   - [Issue #10659](https://github.com/openclaw/openclaw/issues/10659)
   - *Analysis:* Strong community demand for security — users want agents to USE API keys without SEEING them, preventing prompt injection leaks. This reflects growing enterprise security requirements.

3. **#79077** [🟡 P2, Platinum Hermit] — *Telegram bot-to-bot and guest-bot modes* (11 comments, 8 👍)
   - [Issue #79077](https://github.com/openclaw/openclaw/issues/79077)
   - *Analysis:* High community interest (most 👍 of any open issue). Users need compatibility with Telegram's May 2026 platform update. This blocks Telegram features for many deployments.

4. **#96975** [🟡 P2] — *Isolate subagent completion from parent context* (10 comments)
   - [Issue #96975](https://github.com/openclaw/openclaw/issues/96975)
   - *Analysis:* Heavy subagent workloads pollute parent sessions. Users want clean isolation with only status + session link returned.

5. **#101763** [❌ CLOSED, P0] — *Hosted Molty model selector doesn't persist* (10 comments)
   - [Issue #101763](https://github.com/openclaw/openclaw/issues/101763)
   - *Analysis:* A critical UX blocker that was resolved — API received dotted model IDs instead of valid ones. Fixed and closed.

6. **#109867** [🔴 P0, Diamond Lobster] — *State migration creates index before adding column* (6 comments, 7 👍)
   - [Issue #109867](https://github.com/openclaw/openclaw/issues/109867)
   - *Analysis:* Gateway startup-blocking bug with highest 👍 count. Affects beta.2 → beta.3 upgrades.

---

## Bugs & Stability

### P0 / Release-Blocker (Critical):

| Issue | Description | Status |
|-------|-------------|--------|
| [#109867](https://github.com/openclaw/openclaw/issues/109867) | SQLite migration creates index before column — blocks gateway startup | **OPEN** — 7 👍 |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | Gateway fails to start after 2026.7.1 update | **OPEN** — regression |
| [#101763](https://github.com/openclaw/openclaw/issues/101763) | Hosted Molty model selector broken | **CLOSED** (fixed) |

### P1 / High Severity:

| Issue | Description | Status |
|-------|-------------|--------|
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex hook relay spawns CPU-bound processes, stalls RPC | **OPEN** — diamond lobster |
| [#109490](https://github.com/openclaw/openclaw/issues/109490) | Codex app-server turn interrupted after delegated message tool result | **OPEN** — promised work never executes |
| [#108238](https://github.com/openclaw/openclaw/issues/108238) | Session context mis-counts cacheRead as totalTokens, triggers false compaction | **OPEN** — linked PR open |
| [#110950](https://github.com/openclaw/openclaw/issues/110950) | "Everything is a cron" — feature request, opened today | **OPEN** — maintainer labeled |
| [#109657](https://github.com/openclaw/openclaw/issues/109657) | Adopt durable ingress drain on remaining channels | **CLOSED** (enhancement) |
| [#99910](https://github.com/openclaw/openclaw/issues/99910) | Memory dreaming run pegs gateway event loop for ~10 min | **OPEN** — platinum hermit |
| [#99071](https://github.com/openclaw/openclaw/issues/99071) | Repeated Codex Apps plugin discovery causes excessive disk I/O | **OPEN** — linked PR open |
| [#96242](https://github.com/openclaw/openclaw/issues/96242) | Multiple independent paths cause duplicate Telegram messages | **OPEN** — P1 |
| [#99263](https://github.com/openclaw/openclaw/issues/99263) | Gateway crashes with ERR_INVALID_STATE on Node 26 | **OPEN** — stale |

### Notable Regressions:
- [#86684](https://github.com/openclaw/openclaw/issues/86684) — Subagent wake can compact parent branch at low context usage
- [#108435](https://github.com/openclaw/openclaw/issues/108435) — Gateway fails to start after update (regression)
- [#109867](https://github.com/openclaw/openclaw/issues/109867) — Migration regression in beta.2→beta.3
- [#110763](https://github.com/openclaw/openclaw/issues/110763) — No API key in header for Minimax (regression in beta.2)

---

## Feature Requests & Roadmap Signals

### High-Interest Requests:

1. **Masked Secrets System** (#10659) — Strongest signal for next release. Enterprise users need credential protection against prompt injection. Likely candidate for v2026.7.3 or v2026.8.

2. **Filesystem Sandboxing** (#7722) — Configurable file access restrictions. Related to security hardening trend.

3. **Telegram Quote/Reply as First-Class Contract** (#88032) — Users tired of runtime patching for basic Telegram features.

4. **Dynamic Model Discovery** (#10687) — Users want OpenRouter and fast-moving providers to auto-detect models instead of static catalogs.

5. **Session Auto-Titling** (#99583) — Low effort, high UX gain. Lazy generation using existing LLM slug generator.

6. **Everything is a Cron** (#110950) — Opened today by maintainer. Unifying heartbeat, watchers, and scheduled automation around cron primitive. Could be a major architectural direction.

### Predicted for v2026.7.x:
- **Masked Secrets** — Strong community demand + security focus
- **Telegram guest/bot-to-bot modes** — Platform compatibility deadline pressure
- **Cron unification** — Maintainer-driven, already opened as feature
- **Session isolation improvements** — Multiple issues point to subagent contamination problems

---

## User Feedback Summary

### Pain Points:
- **Gateway reliability:** Users report crash loops after updates (#108435, #109867), event loop starvation (#99910), and Node 26 incompatibility (#99263)
- **Telegram integration fragility:** Duplicate messages (#96242), wrong chat_id for groups (#79308), silent truncation of HTML responses (#49104)
- **Context management bugs:** False compaction warnings (#108238), subagent context pollution (#96975, #86684)
- **Provider/model issues:** Empty arguments from GPT-5.3 (#107814), reasoning leaks from moonshot/kimi (#96732), missing API keys for Minimax (#110763)
- **Installation friction:** Migration failures blocking startup, complex upgrade paths

### Satisfaction Signals:
- Users actively requesting features suggests engaged, invested community
- High 👍 counts on security/cron features indicate alignment with maintainer priorities
- Multiple closed PRs show responsive maintainership despite volume

### Use Cases Emerging:
- **Enterprise/security-conscious:** Masked secrets, filesystem sandboxing, permission manifests
- **Multi-platform chat ops:** Telegram, Discord, WhatsApp, Feishu all receiving attention
- **Remote development:** Remote coding sessions in beta.3 release
- **Automation/scheduled tasks:** "Everything is a cron" proposal

---

## Backlog Watch

### Critical Items Needing Maintainer Attention:

| Issue | Age | Why Stalled |
|-------|-----|-------------|
| [#10659](https://github.com/openclaw/openclaw/issues/10659) — Masked Secrets | Since Feb 2026 (5+ months) | Needs product decision + security review |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) — Filesystem Sandboxing | Since Feb 2026 (5+ months) | Needs maintainer review + product decision |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) — Suppress sub-agent announce | Since Feb 2026 (5+ months) | Needs maintainer review + product decision |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) — Model fallback on context exceeded | Since Feb 2026 (5+ months) | Needs maintainer review |
| [#12219](https://github.com/openclaw/openclaw/issues/12219) — Skill Permission Manifest | Since Feb 2026 (5+ months) | Needs security review |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) — Codex hook relay CPU issues | Since June 2026 (6 weeks) | Needs product decision + linked PR open (progress?) |
| [#99263](https://github.com/openclaw/openclaw/issues/99263) — Node 26 gateway crash | Since July 2026 (2+ weeks) | Marked stale, needs live repro |

### Most Neglected High-Severity Issues:
- **#10659** (Masked Secrets) — 5 months old, diamond-lobster severity, 12 comments, 4 👍 — yet only labeled "needs-maintainer-review"
- **#7722** (Filesystem Sandboxing) — 5 months old, diamond-lobster severity, 9 comments — same stale label pattern

**Observation:** A pattern of security-related features (#10659, #7722, #12219) all sit in "needs-maintainer-review" or "needs-product-decision" for months, suggesting a bottleneck in security/maintainer review pipeline despite clear community demand.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent Open-Source Ecosystem

**Date:** 2026-07-19  
**Prepared for:** Technical decision-makers and developers evaluating the personal AI assistant / agent open-source landscape

---

## 1. Ecosystem Overview

The personal AI agent open-source ecosystem is experiencing explosive growth, with major projects processing **hundreds of issues and PRs daily** across a fragmented landscape of reference implementations (OpenClaw), specialized forks (NanoClaw, PicoClaw), Rust-native rewrites (IronClaw, ZeroClaw), and platform-specific agents (Hermes Agent, CoPaw). **Three dominant architectural patterns** are emerging: monolithic agent frameworks with gateway/router architectures (OpenClaw, Hermes Agent), modular runtime-lane systems with capability-based authorization (IronClaw), and lightweight embedded agents optimized for specific channels (Moltis, TinyClaw). The ecosystem is converging on **multi-agent collaboration, credential security, and remote execution** as universal requirements, while diverging on whether to pursue Python-based extensibility (CoPaw, LobsterAI) or compiled-language performance (IronClaw, ZeroClaw). **Community contribution velocity is uneven**—OpenClaw and Hermes Agent dominate raw activity, but smaller projects like NanoClaw and IronClaw show higher merge-to-open ratios, suggesting healthier maintainer workflows.

---

## 2. Activity Comparison (Last 24 Hours)

| Project | Issues Updated | PRs Updated | Merged/Closed PRs | New Release? | Health Score* | Key Signal |
|---------|---------------|-------------|-------------------|--------------|---------------|------------|
| **OpenClaw** | 373 | 500 | 230 | ✅ v2026.7.2-beta.3 | ⚠️ **Strained** (229 open issues, 270 open PRs) | P0 blockers, maintainer bottleneck |
| **Hermes Agent** | 50 | 50 | 8 | ❌ | 🟡 **Moderate** (42 open PRs vs 8 merged) | Review bottleneck, 87-day stale PR |
| **ZeroClaw** | 50 | 50 | 3 | ❌ | 🟡 **Moderate** (47 open PRs) | 3-month stale issues, security RFCs |
| **IronClaw** | 5 | 32 | 32 | ❌ | 🟢 **Healthy** (coordinated refactoring, 0 community bugs) | Highest merge-to-open ratio today |
| **NanoClaw** | 7 | 30 | 16 | ❌ | 🟢 **Healthy** (8 distinct authors) | Fast bug turnaround, new contributors |
| **CoPaw** | 11 | 7 | 1 | ❌ (v2.0.0.post3) | ⚠️ **Concerning** (3 regressions in .post release) | Session-blocking bug, Python-specific |
| **NanoBot** | 7 | 30 | 16 | ❌ | 🟢 **Healthy** | 60-second Ollama overhead unresolved |
| **PicoClaw** | 4 | 12 | 8 | ❌ | 🟡 **Moderate** (2 unpatched critical bugs) | Gateway crash, infinite loop |
| **LobsterAI** | 6 | 3 | 2 | ✅ 2026.7.17 (2 days ago) | ⚠️ **Stale** (all 6 issues stale since April) | 3 high-severity unpatched bugs |
| **Moltis** | 0 | 3 | 2 | ❌ | 🟢 **Steady** (incremental, low volume) | Small but focused |
| **NullClaw** | 1 | 0 | 0 | ❌ | 🔴 **Dormant** (single 87-day-old bug) | Android build broken, no maintainer response |
| **TinyClaw** | 0 | 0 | 0 | ❌ | 🔴 **Inactive** | Zero activity |

*\*Health Score based on merge ratio, bug severity, maintainer responsiveness, and community engagement*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Scale of adoption:** OpenClaw processes 373 issues and 500 PRs in 24 hours—3–7× the volume of any competitor. This indicates the largest user base, contributor pool, and real-world deployment surface.
- **Release velocity:** Ship v2026.7.2-beta.3 with remote coding sessions—a feature no other project has replicated. Cloud worker integration and session resume across terminals are **unique moats**.
- **Ecosystem gravity:** Projects like LobsterAI explicitly reference "OpenClaw engine" compatibility (their HTTP MCP bug #1293). OpenClaw's gateway protocol (`@openclaw/gateway-protocol`) and Telegram integration patterns are becoming de facto standards.
- **Feature breadth:** Remote coding, native automation cron, Matrix, Telegram, Feishu, mobile iOS/macOS diffs—breadth unmatched by any peer.

### Technical Approach Differences
- **Monolithic gateway architecture:** Unlike IronClaw's lane-based decomposition or ZeroClaw's Rust-native modularity, OpenClaw uses a unified Node.js gateway that handles routing, session management, and provider abstraction. This enables faster feature iteration but creates **scalability pain points** (event loop starvation #99910, crash-loop regressions).
- **SQLite-first persistence:** Shared with NanoClaw but diverging from IronClaw's in-memory/DB abstraction. Migration fragility (#109867) is a recurring pain point.
- **"Diamond Lobster" severity taxonomy:** Unique to OpenClaw; no other project uses this granular prioritization.

### Community Size Comparison
- **Active daily contributors (estimated):** ~100–150 vs. Hermes Agent (~40–60), ZeroClaw (~30–50), IronClaw (~10–15 core + occasional community). OpenClaw's community is 3–5× larger than the next largest.
- **Strain signal:** 229 open issues + 270 open PRs = **maintainer capacity is the bottleneck**. The 87-day stale PR #14908 on Hermes Agent is concerning; OpenClaw has dozens of similar items.
- **User feedback volume:** OpenClaw's community hot threads average 10–14 comments; most other projects see 2–7. Higher engagement but also higher frustration from slower response.

### Threat Vectors
- **Fragmentation:** ZeroClaw and IronClaw are building Rust-native alternatives that may outperform OpenClaw on security (KeySource trait, supply chain signing) and performance (no event loop).
- **Complexity fatigue:** 229 open issues signals that new users may find the project overwhelming. Smaller competitors (NanoClaw, NanoBot) offer simpler onboarding paths.

---

## 4. Shared Technical Focus Areas

These requirements are emerging **independently across multiple projects**, indicating genuine ecosystem-wide needs:

| Requirement | Affected Projects | Specific Need | Ecosystem Signal |
|-------------|------------------|----------------|------------------|
| **Credential/Secrets Management** | OpenClaw (#10659), ZeroClaw (#9127), IronClaw (#6247), CoPaw (#4641), NanoBot (#4886) | Masked API keys, plaintext bearer token exposure, subprocess credential visibility, Docker AppArmor bypass | **Strongest signal.** Enterprise security is the #1 cross-project demand. |
| **Session/Context Isolation** | OpenClaw (#96975), NanoBot (#4940), ZeroClaw (#8559), CoPaw (#6244), Hermes Agent (#67273) | Subagent context pollution, session metadata persistence, WebSocket ↔ agent decoupling, memory isolation by project | **Universal pain point.** Multi-agent workflows are breaking existing architectures. |
| **Multi-Agent/Multi-Model Routing** | OpenClaw (#110950), Hermes Agent (#67273, #66860), ZeroClaw (#8138, #8600), PicoClaw (#2937), Moltis (#1157) | "Everything is a cron", per-session tool filtering, model fallback chains, per-chat model switching, ACP-only setups | **Convergence on routing.** The "smart model router" is the next platform battleground. |
| **Telegram/Platform Reliability** | OpenClaw (#96242), NanoBot (#4981), Hermes Agent (#67083), ZeroClaw (#8505, #6002), PicoClaw (#3265) | Duplicate messages, silent gateway death, missing images, channel config framing, infinite loops in message splitting | **Telegram is the universal pain point.** Every project with Telegram support has open bugs. |
| **Remote/Cloud Execution** | OpenClaw (beta.3), NanoBot (#4937), ZeroClaw (#6293), IronClaw (#6143) | Remote coding sessions, Render one-click deploy, air-gapped execution mode, Reborn → canonical CLI promotion | **Emerging trend.** Desktop-only agents are being displaced by cloud/remote hybrids. |
| **Vector/Memory Backend Flexibility** | Moltis (#1158), CoPaw (#6244), NanoBot (#4626, #4627) | Zvec experimental backend, memory isolation, opt-in eager consolidation, provenance context | **Memory architecture diversification.** Projects are experimenting beyond RAG. |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | ZeroClaw | IronClaw | NanoClaw | CoPaw |
|-----------|----------|--------------|----------|----------|----------|-------|
| **Primary Language** | TypeScript/Node.js | TypeScript | Rust | Rust+Python | TypeScript | Python |
| **Target User** | Power users, multi-platform ops | Desktop-first, Telegram users | Security-conscious developers | Enterprise/scale, Rust shops | Channel ops, WhatsApp-heavy | Python devs, Docker users |
| **Deployment Model** | Gateway + cloud workers | Desktop app + gateway | Binary + CLI | CLI + MCP servers | Gateway + containers | Python package + CLI |
| **Session Architecture** | Monolithic gateway | Gateway + agent runtime | Runtime lanes (WIP) | Capability lanes+authorize | Gateway + agents | Coordinator+agents |
| **Multi-Agent Support** | Subagents (buggy) | Subagents | Not yet | Capability collapse (WIP) | Agent groups | Agent skills |
| **Telegram Maturity** | ✅ Most complete | ✅ Very active bugs | ❌ Broken (#8505) | ❌ Not primary | ✅ Active fixes | ❌ Not primary |
| **Windows Support** | 🟡 Known regressions | 🔴 Crash on startup (#38216) | ❌ Android/Termux only | ✅ Rust-native | 🟡 PATH issues | 🔴 PATH semicolon bug |
| **macOS Support** | ✅ Active fixes | 🟡 CUA display broken (#67165) | ❌ | 🟡 | ❌ | ❌ |
| **Cloud/Remote** | ✅ Remote coding sessions | ❌ Desktop-only | ❌ Air-gapped RFC | ❌ | ❌ | ❌ |
| **Enterprise Security** | ❌ Masked secrets stalled | ❌ No-op soul-guard | ✅ KeySource RFC, supply chain | ✅ AuthZ delegates | ❌ | ❌ |
| **Memory Isolation** | ❌ Context pollution | 🟡 Per-agent configs | ❌ | ❌ | 🟡 Session anchor | 🟡 Project isolation requested |

**Key insight:** **No project has achieved simultaneous excellence across all dimensions.** OpenClaw leads on breadth and cloud/remote, ZeroClaw leads on security architecture, IronClaw leads on performance/correctness (Rust), but every project has critical gaps in platform support (Windows, macOS) and memory isolation.

---

## 6. Community Momentum & Maturity

### Activity Tiers

**Tier 1: High Velocity / Strained Maintainer Capacity**
- **OpenClaw** — 373 issues, 500 PRs, 230 merged. Highest raw output, but 229 open issues and P0 blockers signal **velocity without stability**. Maintainer bottleneck is the #1 risk.
- **Hermes Agent** — 50 issues, 50 PRs, only 8 merged. **Review queue is backing up** (42 open PRs, 87-day stale PR). Community contributions outpacing maintainer review.

**Tier 2: Rapid Iteration / Healthy**
- **NanoClaw** — 26 PRs, 16 merged, 8 distinct authors. Fast bug turnaround, new contributors welcomed. **Most responsive per-contributor.**
- **NanoBot** — 30 PRs, 16 merged, 7 issues. Strong momentum, but 60-second Ollama overhead unresolved hurts local-model users.
- **IronClaw** — 32 PRs, all 32 merged. **Highest merge rate.** This is a core-contributor-driven refactoring push, not community growth.

**Tier 3: Stabilization / Post-Release**
- **CoPaw** — 11 issues, 7 PRs, 1 merged. v2.0.0.post3 regressions suggest a **rushed release**. 3 critical/high bugs reported in 24 hours.
- **PicoClaw** — 4 issues, 12 PRs, 8 merged (mostly dependency bumps). 2 critical bugs unpatched.
- **LobsterAI** — 6 issues, 3 PRs, 2 merged. All 6 issues stale for 3 months. **Maintenance mode risk.**

**Tier 4: Low Activity / Dormant**
- **Moltis** — 3 PRs, 2 merged. Incremental, low volume.
- **NullClaw** — 1 issue, 0 PRs. Single 87-day bug unanswered. **Community trust erosion risk.**
- **TinyClaw** — 0 activity. Effectively frozen.

### Key Maturity Indicators

| Indicator | Leader | Concern |
|-----------|--------|---------|
| Merge-to-open ratio | IronClaw (1:0) | OpenClaw (230:270 = 0.85) — too many open PRs |
| Bug-to-fix turnaround | NanoClaw (hours to days) | LobsterAI (3 months stale) |
| New contributor friendliness | NanoClaw, CoPaw (first-timer PRs) | ZeroClaw (stale issues, slow triage) |
| Security posture | ZeroClaw (KeySource, supply chain) | OpenClaw (masked secrets stalled 5 months) |

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

1. **Security is the #1 unmet need.** Masked secrets (OpenClaw #10659, 5 months old), bearer token exposure (IronClaw #6247), supply chain signing (ZeroClaw #8177), and Docker AppArmor bypass (NanoBot #4886) all point to the same conclusion: **current architectures are not safe enough for production enterprise use.** Expect a wave of secrets-management features across all projects in Q3 2026.

2. **Multi-agent workflows are breaking existing session models.** OpenClaw (#96975), CoPaw (#6244), and Hermes Agent (#67273) all report context pollution, message dedup failures, and session fragmentation when running subagents or multi-model setups. **The "single session per conversation" model is obsolete.** Projects that implement per-agent memory isolation and cross-session routing will win.

3. **Telegram is the universal proof point—and pain point.** Every project with Telegram support has open, high-severity bugs: duplicate messages, silent death, missing images, channel config failures. **Telegram integration quality is becoming a proxy for overall platform maturity.** Users expect it to "just work."

4. **Local/on-device inference is stalling.** Ollama prefix caching (NanoBot #4867, 60s overhead), LM Studio JIT issues (Hermes Agent #67015), and reasoning content loss (ZeroClaw #6672) suggest **local model integration is not production-ready** in any project. The ecosystem is defaulting to cloud APIs despite user demand for local.

5. **Remote execution is the next frontier.** OpenClaw beta.3 (remote coding sessions), NanoBot (#4937, Render deploy), and ZeroClaw (#6293, air-gapped mode) signal that **users want agents that run on cloud workers, not just on their laptop.** Desktop-only agents (Hermes Agent) risk obsolescence.

6. **Rust is challenging TypeScript for new projects.** IronClaw (Rust-native, capability-lane architecture) and ZeroClaw (Rust binary with WASM plugins) are demonstrating **10–100× better performance characteristics** (no event loop, no GC pauses). Expect more greenfield projects to choose Rust.

### Value for AI Agent Developers

| If you care about... | Choose | Avoid |
|---------------------|--------|-------|
| **Breadth of features** | OpenClaw (remote coding, multi-channel, mobile) | — |
| **Production stability** | IronClaw (highest merge ratio, disciplined refactoring) | OpenClaw (P0 blockers, 229 open issues) |
| **Security-first architecture** | ZeroClaw (KeySource, supply chain signing) | CoPaw (plaintext DB, no secrets abstraction) |
| **Python ecosystem integration** | CoPaw (Python-native, MCP servers) | IronClaw, ZeroClaw (Rust) |
| **Telegram reliability** | NanoClaw (fastest bug turnaround) | OpenClaw (duplicate messages), ZeroClaw (broken) |
| **Enterprise/sandboxed deployment** | ZeroClaw (air-gapped RFC, OCI plugins) | Hermes Agent (desktop-only, no sandbox) |
| **Multi-agent collaboration** | PicoClaw (Agent Collaboration Bus merged) | ZeroClaw (not yet implemented) |
| **Windows/Linux parity** | ZeroClaw (Rust cross-compilation) | CoPaw, Hermes Agent (Windows-specific crashes) |
| **Lowest maintenance overhead** | Moltis, NanoBot (small, focused) | OpenClaw (complexity fatigue risk) |

---

**Bottom line for decision-makers:** If you need the broadest feature set and can tolerate instability, **OpenClaw** remains the safest bet for prototyping and multi-platform testing. For production deployments requiring reliability and security, **IronClaw** (enterprise, Rust shops) and **ZeroClaw** (security-conscious teams) are stronger long-term bets. **NanoClaw** and **NanoBot** offer the best contributor experience and fastest bug turnaround for Telegram-heavy workflows. The ecosystem is converging on credential security and remote execution—projects that ship these next (ZeroClaw, OpenClaw) will define the Q3 2026 landscape.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-19

## Today's Overview

The NanoBot project remains highly active, with 30 pull requests (PRs) updated in the last 24 hours, of which 16 were merged or closed. Seven issues were updated, including four closed and three currently open. No new releases were published today. The development momentum is strong, with a focus on bug fixes, stability hardening, and incremental feature work across the agent runtime, session management, and communication channels.

## Releases

No new releases were published today.

## Project Progress

Sixteen PRs were merged or closed today, reflecting substantial progress across multiple areas:

- **Agent recovery and tool result handling**: PR #4925 (by chengyongru) was merged, adding ability for the agent to recover from oversized tool results by reusing the in-flight context governor and replacing oversized outputs with actionable instructions.
- **Memory and consolidation improvements**: Three PRs by yu-xin-c were merged: PR #4627 (preserving delivery context during consolidation), PR #4626 (opt-in eager memory consolidation), and PR #4621 (gating archive facts with provenance context).
- **Subagent aggregated result mode**: PR #4624 (by yu-xin-c) was merged, adding a configurable `subagentResultMode` with `aggregated` option that buffers and combines subagent results before publishing.
- **One-click Render deployment**: PR #4937 (by Ho1yShif) was merged, adding a Render Blueprint for one-click cloud deployments with persistent session history and memory.
- **Session message cap enforcement**: PR #4956 (by KDB-Wind) was merged, enforcing the 2,000-message file cap at the session persistence boundary.

## Community Hot Topics

The most active discussions today center on session metadata persistence and context window management:

- **Issue #4940** (OPEN, 1 comment) — [Legacy session metadata loss after restart](https://github.com/HKUDS/nanobot/issues/4940): Sessions created with legacy filename format (`websocket_*.jsonl`) lose `workspace_scope` metadata after restart. A fix PR #4977 is already open.
- **Issue #2343** (CLOSED, 15 comments) — [Context window overflow guidance](https://github.com/HKUDS/nanobot/issues/2343): A user reported token overflow despite setting `contextWindowTokens`. The community discussed how to reduce chat history and manage context limits.
- **Issue #4867** (CLOSED, 5 comments) — [Ollama caching performance](https://github.com/HKUDS/nanobot/issues/4867): A user reported that NanoBot adds ~60 seconds per turn with Ollama due to broken prefix caching, making local models effectively unusable with 32GB VRAM.

**Underlying needs**: Users want predictable and performant local model inference, reliable persistence of session configuration, and clearer documentation around context window management.

## Bugs & Stability

Several bugs and regressions were reported today, with fix PRs already submitted for most:

**High severity (P1)**:
- **Issue #4980** (OPEN) — [GitStore fails with non-matching workspace and CWD](https://github.com/HKUDS/nanobot/issues/4980): Relative paths cause Dulwich `porcelain.add()` failures. Fix PR #4979 by kuchazi-yy is open.
- **PR #4956** (merged) — Session message cap at persistence boundary: Prevents unbounded message growth that could lead to context overflow.
- **PR #4978** (OPEN) — [Terminate active exec-session process trees on shutdown](https://github.com/HKUDS/nanobot/pull/4978): Long-running exec sessions had no lifecycle cleanup during shutdown.
- **PR #4984** (OPEN) — [Atomic config.json write](https://github.com/HKUDS/nanobot/pull/4984): Prevents truncated config on crash mid-write.
- **PR #4985/4986** (OPEN) — [Coerce null ms fields in cron/triggers](https://github.com/HKUDS/nanobot/pull/4985): Prevents store quarantine when JSON null is returned for integer fields.
- **PR #4983** (OPEN) — [Coerce string schedule fields from jobs.json](https://github.com/HKUDS/nanobot/pull/4983): Prevents TypeError when comparing string timestamps to integers.

**Medium severity (P2)**:
- **Issue #4975** (OPEN) — [UTF-8 subprocess output loss on Windows non-UTF-8 locales](https://github.com/HKUDS/nanobot/issues/4975): `CliAppManager` fails on Windows with CP936/GBK locales when child processes emit UTF-8. Fix PR #4976 by kuchazi-yy is open.
- **PR #4981/4982** (OPEN) — [Hang in Telegram/Feishu text splitting](https://github.com/HKUDS/nanobot/pull/4981): Infinite loops when `max_len` or `limit` is zero or negative. Guards added to return text unsplit.

## Feature Requests & Roadmap Signals

Today's merged features and open PRs signal upcoming capabilities:

- **Session-local triggers**: PR #4942 (OPEN, by chengyongru) adds a `local_trigger` tool enabling agents to manage per-session triggers — likely for next release.
- **RTK command rewriter**: PR #4854 (OPEN, by chengyongru) adds an opt-in RTK command rewriter for exec sessions, improving sandbox integration.
- **WebUI polish**: PR #4963 (OPEN, by Re-bin) replaces raw nested tool logs with unified single-line activity descriptions, improving readability.
- **Subagent aggregated mode** (merged today) suggests NanoBot is moving toward more efficient multi-agent workflows.

**Predictions for next version**: Session-local triggers (PR #4942), RTK support (PR #4854), and WebUI output cleanup (PR #4963) are likely candidates. The atomic write fixes (PR #4984) and session message cap (PR #4956) are strong candidates for a stability-focused patch release.

## User Feedback Summary

User pain points evident today:

- **Performance with local models**: Issue #4867 reports 60-second overhead per turn with Ollama, making local inference "totally unusable" even on 32GB VRAM hardware. User is clearly dissatisfied with current behavior.
- **Configuration persistence**: Issue #4940 shows frustration with session metadata loss after restart, highlighting reliability expectations for workspace-scoped sessions.
- **Context window management**: Issue #2343 reveals confusion around how to control chat history length despite explicit token settings — a documentation and usability gap.
- **Windows compatibility**: Issue #4975 highlights UTF-8 encoding failures on non-English Windows systems, a platform-specific pain point.

**Satisfaction signals**: The rapid closure of bug fix PRs (16 merged/closed today) and the number of contributors (8 distinct authors in today's PRs) indicate a healthy, responsive maintainer community.

## Backlog Watch

The following items merit maintainer attention:

- **Issue #4867** (CLOSED, but unresolved) — [Ollama prefix caching](https://github.com/HKUDS/nanobot/issues/4867): While closed, the user's core problem (broken Ollama caching leading to 60s overhead per turn) appears unresolved. A follow-up or re-opening may be warranted.
- **Issue #4786** (CLOSED, but underlying problem persists) — [SessionManager cache memory leak](https://github.com/HKUDS/nanobot/issues/4786): The `_cache` dictionary grows without bound; closed but no merged fix was identified in today's activity.
- **Issue #4886** (CLOSED) — [Docker security hardening](https://github.com/HKUDS/nanobot/issues/4886): The default Docker Compose configuration grants `SYS_ADMIN` and disables AppArmor/seccomp. No security patch was observed today.

**Long-running open PRs**:
- **PR #4854** (OPEN since July 8, 11 days) — [RTK command rewriter](https://github.com/HKUDS/nanobot/pull/4854): Marked as conflict — may need rebase and review.
- **PR #4942** (OPEN since July 15, 4 days) — [Session-local triggers](https://github.com/HKUDS/nanobot/pull/4942): Also marked as conflict — needs maintainer attention.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-19

## 1. Today's Overview

Hermes Agent shows **moderate activity** today with 50 updated issues (25 open, 25 closed) and 50 updated PRs (42 still open, 8 merged/closed). No new releases were published. The project is processing a healthy volume of bug fixes and feature work, though the **high ratio of open PRs to closed PRs (42:8)** suggests a review bottleneck developing. Several **P1 severity bugs** were addressed, including a critical Anthropic stale-stream corruption fix and a Telegram gateway silent-death problem. Community contributions remain strong, with 6 sweeper-implemented-on-main PRs merged today across multiple components. The oldest open PR (#14908, "Preserve custom headers") has been open since April 24, raising concerns about long-lived feature branches.

---

## 2. Releases

**No new releases today.** The latest available version remains v0.18.2 as inferred from issue metadata.

---

## 3. Project Progress

**8 PRs merged/closed today** (42 open remaining):

| PR # | Component | Description | Sweeper Tags |
|------|-----------|-------------|--------------|
| #67263 | gateway | Closed (uninformative title) | risk-session-state, risk-compatibility |
| #67083 | gateway/telegram | Fixed terminal-tool subprocess receiving wrong `HERMES_SESSION_KEY` from sibling thread | implemented-on-main, risk-session-state |
| #67041 | gateway/discord | Fixed `/queue` slash command not accepting images | implemented-on-main, risk-message-delivery |
| #67015 | agent/cli | Fixed LM Studio JIT not unloading models (marked duplicate) | implemented-on-main, risk-compatibility |
| #67078 | gateway | Made in-flight session recovery crash-safe | needs-decision, risk-session-state, risk-message-delivery, risk-compatibility |
| #67177 | desktop | Enhanced long-running update with per-stage progress streaming | implemented-on-main |
| #67233 | gateway/telegram | Fixed image sending issue (marked implemented-on-main) | implemented-on-main |
| #67142 | agent/cron | Fixed Anthropic stale-stream SQLite TLS FD reuse corruption (P1) | (closed) |

**Key advances:**
- **Session safety**: Multiple fixes to session key propagation, crash recovery, and watchdog stability
- **Gateway reliability**: Discord `/queue` images, Telegram session recovery, BlueBubbles voice improvements
- **Desktop UX**: Update progress dialog now streams per-stage status instead of frozen 3-8 minute window
- **Infrastructure**: Skills index watchdog features, release-notes CLI command introduced

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **#38216** — [CLOSED] *Hermes Desktop v40.9.3 crashes on startup on Windows 11* (10 comments)  
   - [Issue Link](https://github.com/NousResearch/hermes-agent/issues/38216)  
   - **Analysis**: Long-standing Windows crash with 0x80000003 breakpoint exception. Despite being closed, the high comment count and P1 severity indicate this was a painful regression for Windows users. The consistent offset suggests a memory corruption or JIT compilation issue.

2. **#66829** — [OPEN] *Desktop always preprocesses images through auxiliary vision model even when main model supports vision* (7 comments)  
   - [Issue Link](https://github.com/NousResearch/hermes-agent/issues/66829)  
   - **Analysis**: **High-impact UX issue** — users with vision-capable main models are forced into auxiliary preprocessing, losing native image quality. Workaround exists (remove auxiliary config) but undocumented. Expect a fix PR within days given P2+needs-repro labels.

3. **#66616** — [OPEN] *Skills index is stale or degraded* (6 comments)  
   - [Issue Link](https://github.com/NousResearch/hermes-agent/issues/66616)  
   - **Analysis**: Automated freshness probe shows index 29.8h old (limit 26h). This is an **infrastructure reliability concern** — the skills index powers `/docs/skills` and appears to have a recurring cron trigger miss.

4. **#61099** — [CLOSED] *OpenRouter logs show 'Unknown' App for Hermes Agent requests* (5 comments)  
   - [Issue Link](https://github.com/NousResearch/hermes-agent/issues/61099)  
   - **Analysis**: Identification header inconsistency with OpenRouter. Marked P3 but the "most requests show Unknown" wording suggests a broader tracking/analytics gap.

5. **#66950** — [CLOSED] *Prompt-based rule compliance is probabilistic; default soul-guard file-edit guard is a no-op* (5 comments)  
   - [Issue Link](https://github.com/NousResearch/hermes-agent/issues/66950)  
   - **Analysis**: **Architectural concern** — identity/memory files load correctly but agent behavior remains probabilistic. The "soul-guard" file-edit guard being a no-op undermines user trust in safety controls.

### Most Active PRs

- **#67274** — [OPEN] *feat(cache): persist exact bytes sent to API in api_content sidecar* — P0 priority, 8 sweeper risk tags  
   - [PR Link](https://github.com/NousResearch/hermes-agent/pull/67274)  
- **#14908** — [OPEN] *Preserve custom headers for runtime and auxiliary requests* — Open since April 24, 5 risk tags  
   - [PR Link](https://github.com/NousResearch/hermes-agent/pull/14908)  
- **#23776** — [OPEN] *fix: read LINE group attachments* — Open since May 11  
   - [PR Link](https://github.com/NousResearch/hermes-agent/pull/23776)

---

## 5. Bugs & Stability

### Today's New Bug Reports (P1-P2 severity, OPEN)

| Issue | Severity | Component | Description | Fix PR Exists? |
|-------|----------|-----------|-------------|----------------|
| #67233 | P2 | gateway/telegram | Cannot send images to LLM via Telegram; `vision_analyze` tool missing | Closed (implemented-on-main) |
| #67187 | P2 | tools/MCP | Parked server revival reconnects but does not re-register tools | No |
| #67165 | P2 | tools/cua-driver | macOS ScreenCaptureKit returns `display_count=0` despite TCC permissions OK | No |
| #67120 | P2 | gateway/telegram | Model change via SSH/config no longer propagates to active gateway sessions | No |
| #67158 | P3 | CLI/Windows | `lockfile` not cleaned up on exit; causes ghost-lock on multi-instance runs | No |
| #67249 | P3 | cron | `active_pr` respawn guard tripped by non-PR content in comments | No |

### Today's Fixed High-Impact Bugs

| Issue | Severity | Component | Description | Fix |
|-------|----------|-----------|-------------|-----|
| #67142 | **P1** | agent/cron | Anthropic stale-stream watchdog can still corrupt SQLite via TLS FD reuse | Closed (critical fix) |
| #66377 | P1 | telegram gateway | Polling reconnect ladder stalls mid-way; gateway alive but silently dead | Closed |
| #67041 | P2 | discord gateway | `/queue` slash command does not accept images | Closed (implemented-on-main) |
| #67083 | P3 | telegram gateway | Terminal subprocess receives wrong `HERMES_SESSION_KEY` from sibling thread | Closed (implemented-on-main) |

### Critical Stability Concerns

1. **#67142 + #29507 family**: The TLS FD reuse corruption pattern (24-byte SQLite corruption) has now been **reproduced on both OpenAI and Anthropic streaming paths**. The Anthropic-specific fix just landed, but the underlying pattern may affect other providers.
2. **#67165**: macOS ScreenCaptureKit returning `display_count=0` on Apple Silicon blocks all Computer Use functionality on the latest macOS (26.5.2). With no fix PR yet, this is a **blocker for macOS CUA users**.
3. **#65631**: Provider error chunks inside HTTP-200 SSE streams misclassified as "empty stream" causing infinite retry loops — affects all OpenAI-compatible providers returning 400s.

---

## 6. Feature Requests & Roadmap Signals

### High-Impact User Requests (with strong community interest)

1. **#67273** — *Tool schemas consume 83% of every API request — per-session filtering and lazy loading needed* (P3, OPEN)  
   - [Issue Link](https://github.com/NousResearch/hermes-agent/issues/67273)  
   - **Prediction**: Likely to be addressed in v0.19.0 given the massive token waste (83% of budget on tool schemas alone). This is a cost-saving priority for heavy users.

2. **#66860** — *Smart model routing — auto-select model based on task complexity/type* (P3, CLOSED as not-planned)  
   - [Issue Link](https://github.com/NousResearch/hermes-agent/issues/66860)  
   - **Prediction**: Marked as not-planned, but the underlying need (cost optimization via model selection) is echoed in #67273. May reappear as a configurable feature.

3. **#67177** — *Long-running update should stream per-stage progress* (P3, implemented-on-main)  
   - Already merged — Windows users will see live stage progress instead of a frozen dialog.

4. **#66415** — *Boardstate phase 2: the Board in the desktop app (real-Electron proven)* (P3, CLOSED as not-planned)  
   - Despite community mockups and working prototype, marked not-planned. The dashboard Web PR (#66381) may proceed independently.

### What to Watch for in the Next Release (v0.19.x)

| Feature | Likelihood | Why |
|---------|------------|-----|
| **API content cache sidecar** (PR #67274) | **Very High** | P0 priority, 8 risk tags, massive performance improvement (27.9s → 2.4s) |
| **Per-session tool filtering** (#67273) | **High** | Token cost optimization is a universal user need |
| **MCP tool re-registration on reconnect** (#67187) | **High** | P2 bug, breaks MCP server lifecycle |
| **macOS CUA display fix** (#67165) | **High** | Blocking Apple Silicon users from Computer Use |
| **Gateway agent executor workers config** (PR #65740) | **Medium** | P2, but targets operator scalability |
| **Cross-session context auto-save** (PR #67272) | **Medium** | New feature, P3, needs-decision |

### Previously Predicted Features — Status Update

- **Smart model routing** (#66860): ✅ Marked not-planned — users should look at per-tool/agent model configs instead.
- **Boardstate desktop page** (#66415): ✅ Marked not-planned — community prototype exists but no core developer adoption.

---

## 7. User Feedback Summary

### Pain Points (Explicit User Frustration)

1. **Vision pipeline forced through auxiliary model** (#66829): Users with native-vision main models experience degraded quality because images are preprocessed. *"The main model only receives a text description of the image, never the actual image."*

2. **Probabilistic rule compliance** (#66950): Identity and memory files load, but the model "repeatedly violates explicit user rules." The soul-guard file-edit guard being a no-op undermines safety.

3. **Model change propagation failure** (#67120): Post-update, changing the model via SSH doesn't affect active Telegram sessions. *"Previously, the bot session would inherit the config default model automatically."*

4. **Update bloat and breakage** (#66957, #66356): `hermes update` using `git reset --hard` causes 4.6GB `.git` bloat and false "behind" counts. Failed self-updates leave desktop app in infinite "An update is finishing…" loop.

5. **Hardcoded path issues** (#66450): System prompt uses `~/.hermes` instead of `HERMES_HOME`, breaking Docker deployments and profile-mode setups.

### Use Case Patterns

- **Telegram-first users**: Heavy reliance on Telegram gateway with voice/vision features; multiple bugs in session state, image handling, and audio transcription
- **Windows desktop users**: Persistent crash-on-startup (#38216) and update-loop (#66356) issues suggest Windows QA gaps
- **Local model users (LM Studio, Ollama)**: Need JIT loading/unloading to avoid VRAM pinning; current implementation prevents loading other models for scheduled tasks
- **Multi-provider power users**: Need smart routing, tool schema optimization, and proper header/identity propagation

### Satisfaction Indicators

- **Performance fix landing**: #67274 (api_content cache) promises 10x improvement in cache hit rates (0.1% → 98.7%) — eagerly awaited
- **Session recovery improvements**: Multiple PRs (#67078, #67268) address session persistence and crash recovery
- **Community contributions**: 6 implemented-on-main fixes today show responsive maintainers for well-scoped contributions

---

## 8. Backlog Watch

### Critical Long-Open Issues (No Response / Stale)

| Issue | Open Since | Component | Description | Last Update | Concern |
|-------|------------|-----------|-------------|-------------|---------|
| #38216 | 2026-06-03 | desktop/Windows | Hermes Desktop v40.9.3 crashes on startup (P1) | 2026-07-19 (today) | Despite 10 comments, no root cause fix PR exists. Closed without clear resolution. |
| #51448 | 2026-06-23 | desktop/Windows | LM Studio + native Windows fails ("empty stream, no finish_reason"); works under WSL | 2026-07-18 | No fix PR; community workaround is "use WSL." Windows-native users underserved. |

### Stale PRs Needing Attention

| PR # | Open Since | Component | Description | Sweeper Tags |
|------|------------|-----------|-------------|--------------|
| #14908 | **2026-04-24 (87 days)** | agent/cli | Preserve custom headers for runtime and auxiliary requests | risk-security-boundary, risk-compatibility, risk-caching, blast-broad |
| #23776 | 2026-05-11 (69 days) | gateway/plugins | fix: read LINE group attachments | risk-message-delivery, risk-security-boundary, risk-compatibility |
| #20615 | 2026-05-06 (74 days) | dashboard | fix: support dashboard websockets behind cloudflared | risk-session-state, risk-message-delivery, risk-security-boundary, risk-compatibility |
| #30529 | 2026-05-22 (58 days) | gateway/tts | fix: improve BlueBubbles voice message uploads | risk-message-delivery, risk-compatibility, blast-moderate |
| #30533 | 2026-05-22 (58 days) | tool/tts | feat: add warm cache for NeuTTS synthesis | risk-compatibility, risk-platform-windows |

**⚠️ Red Alert**: PR #14908 (Preserve custom headers) has been open for **87 days** and carries 4 risk tags and a "blast-broad" impact label. This is a significant security/compatibility feature that affects all runtime entrypoints. Its long dormancy suggests either maintainer capacity issue or deferred architectural decisions.

### Platform Imbalance

- **Telegram**: 5+ active bugs, robust community testing, responsive fixes
- **Discord**: 2 active issues, `/queue` imaging fixed today
- **LINE**: PR #23776 stalled for 69 days — LINE users may feel neglected
- **Windows**: 3 active bugs (startup crash, LM Studio failure, lockfile ghost-lock) with limited maintainer response
- **macOS**: 1 blocking bug (CUA display capture on Apple Silicon) reported today — no fix yet

---

*Generated from GitHub data as of 2026-07-19T23:59:59Z. All links point to NousResearch/hermes-agent repository.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-19

## 1. Today's Overview

The project shows moderate activity, with 4 issues updated in the last 24 hours (2 open, 2 closed) and 12 pull requests updated (4 open, 8 merged/closed), though the bulk of merged PRs are dependency bumps or stale items being closed. No new releases were published today. A significant blocking bug was reported affecting gateway startup, while a major feature for inter-agent collaboration has been finally merged after nearly two months of development. Overall, the project appears to be in a stabilization phase with several long-standing PRs finally reaching resolution.

## 2. Releases

No new releases were published today.

## 3. Project Progress

**Major features merged/closed today:**

- **[PR #2937 — Feat/agent collaboration](https://github.com/sipeed/picoclaw/pull/2937)** (CLOSED): After nearly two months in review, the internal Agent Collaboration Bus has been merged. This introduces per-agent mailboxes, collaboration threads with isolated session history, structured message envelopes, and permission-aware delivery. This is a landmark feature for multi-agent workflows.

- **[PR #3242 — feat(whatsapp): add native typing presence](https://github.com/sipeed/picoclaw/pull/3242)** (CLOSED): WhatsAppNativeChannel now implements `TypingCapable`, sending composing/paused states with 10-second refresh intervals for long replies. Fixes issue #3240.

- **[PR #3241 — fix(auth): make OAuth refresh provider-correct and concurrency-safe](https://github.com/sipeed/picoclaw/pull/3241)** (CLOSED): Fixes OAuth refresh inconsistencies across providers (OpenAI now uses JSON, others use form encoding) and adds a 30-second mutex to prevent race conditions. Fixes issue #3239.

- **[PR #3165 — fix(openai_compat): recover Seed XML tool calls](https://github.com/sipeed/picoclaw/pull/3165)** (CLOSED): Recovers Volcengine Doubao Seed tool call XML blocks from OpenAI-compatible responses, stripping leaked XML from user-visible content.

- **[PR #3200 — feat(models): add configurable default fallback chain](https://github.com/sipeed/picoclaw/pull/3200)** (CLOSED): Adds a dedicated default-chain workflow on the models page in the web UI, allowing users to set default model, add fallback models, reorder, and persist through the backend API.

- **[PR #3225 — Support agent-specific runtime overrides](https://github.com/sipeed/picoclaw/pull/3225)** (CLOSED): Agents can now define `max_tokens`, summarization thresholds, and `split_on_marker` in their config entries, with per-agent overrides applied when building AgentInstance.

**Dependency bumps closed:** eslint 10.4.1→10.6.0 (web/frontend), maunium.net/go/mautrix 0.27.0→0.28.1 (Matrix library), and Go stdlib vulnerability fix to 1.25.12.

## 4. Community Hot Topics

The most active discussions today involve a newly reported blocking error:

- **[Issue #3265 — Gateway startup fails with 'channel deltachat has unknown type deltachat'](https://github.com/sipeed/picoclaw/issues/3265)** (OPEN, created today, 0 comments): A user reports that the gateway fails to start even when DeltaChat is not configured in `config.json`. This suggests a hardcoded channel registration or a config parsing bug that triggers on channel type detection regardless of whether the channel is enabled. The silence (0 comments) indicates maintainers have not yet triaged this.

- **[Issue #3264 — [BUG] SplitMessage hangs on an oversized fenced-code info string](https://github.com/sipeed/picoclaw/issues/3264)** (OPEN, created yesterday, 0 comments): Reports an infinite loop in `channels.SplitMessage` when a fenced code block's opening info string exceeds the split point. This is a critical message-processing bug that could cause agent timeouts or resource exhaustion.

The underlying need across both issues is improved input validation and defensive programming—edge cases in message parsing (code fences, channel type detection) are escaping validation.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix status |
|----------|-------|-------------|------------|
| **CRITICAL** | [#3265](https://github.com/sipeed/picoclaw/issues/3265) | Gateway crashes on startup with DeltaChat channel type error despite no DeltaChat config | No fix PR yet |
| **HIGH** | [#3264](https://github.com/sipeed/picoclaw/issues/3264) | `SplitMessage` infinite loop on oversized fenced-code info strings | No fix PR yet |
| **MEDIUM** | [#3239](https://github.com/sipeed/picoclaw/issues/3239) | OAuth refresh race conditions (closed) | Fixed in [#3241](https://github.com/sipeed/picoclaw/pull/3241) |
| **LOW** | [#3240](https://github.com/sipeed/picoclaw/issues/3240) | Missing WhatsApp typing presence (closed) | Fixed in [#3242](https://github.com/sipeed/picoclaw/pull/3242) |

The two open bugs are concerning because both can cause complete service unavailability (gateway crash) or resource exhaustion (infinite loop). Neither has an associated fix PR yet.

## 6. Feature Requests & Roadmap Signals

Several significant features merged today hint at the project's near-term direction:

- **Multi-agent orchestration** ([PR #2937](https://github.com/sipeed/picoclaw/pull/2937)): The Agent Collaboration Bus is now merged. Expect follow-ups adding mailbox management UI, routing policies, and perhaps a "supervisor agent" pattern.

- **Per-agent configuration overrides** ([PR #3225](https://github.com/sipeed/picoclaw/pull/3225)): The groundwork is laid for per-agent model parameters. The next likely step is exposing these overrides in the web UI's agent configuration panels.

- **WhatsApp presence** ([PR #3242](https://github.com/sipeed/picoclaw/pull/3242)): This is the third WhatsApp-focused improvement in recent weeks, suggesting the project is prioritizing WhatsApp channel maturity. Look for read receipts, media handling, and group chat support in upcoming releases.

- **Model fallback chains** ([PR #3200](https://github.com/sipeed/picoclaw/pull/3200)): Now in the web UI, this feature is likely to be extended with per-agent fallback overrides and possibly latency-based automatic fallback switching.

A potential next version (v0.??) will likely bundle the Agent Collaboration Bus, the model fallback chain UI, and the auth/OAuth fixes together as a "multi-agent & reliability" release.

## 7. User Feedback Summary

**Pain points identified:**
- **Raspberry Pi compatibility** ([PR #3205](https://github.com/sipeed/picoclaw/pull/3205)): A user running on Raspberry Pi 3 B+ encountered missing ARM build targets and 9router gateway response parsing failures. This PR is still open, suggesting ARM support is not yet complete.
- **Unexpected channel loading** ([Issue #3265](https://github.com/sipeed/picoclaw/issues/3265)): Gateway fails to start because it tries to process DeltaChat channel configuration that doesn't exist. This indicates the gateway is scanning for all registered channels unconditionally, which is poor user experience.
- **Message splitting edge cases** ([Issue #3264](https://github.com/sipeed/picoclaw/issues/3264)): Users sending messages with very long code block language identifiers can cause infinite loops. This may disproportionately affect developers who frequently paste code blocks.

**Satisfaction signals:**
- The WhatsApp typing presence fix addresses a common user complaint about "dead air" on mobile messaging.
- The Seed XML tool call fix ([PR #3165](https://github.com/sipeed/picoclaw/pull/3165)) shows responsiveness to users of Volcengine/Doubao models, an increasingly popular API provider.

## 8. Backlog Watch

The following items require maintainer attention:

- **[PR #3205 — fix: support 9router gateway responses and add Linux ARMv7 build target](https://github.com/sipeed/picoclaw/pull/3205)** (OPEN since 2026-07-02, stale): A user-submitted fix for ARM/Raspberry Pi compatibility and 9router API parsing. Despite being 17 days old and receiving the "stale" label, it addresses real hardware compatibility issues. This PR should be reviewed urgently as it blocks self-hosted users on ARM single-board computers.

- **[PR #3202 — fix(routing): strip leading/trailing underscores in ID normalization](https://github.com/sipeed/picoclaw/pull/3202)** (OPEN since 2026-07-01, stale): A correctness fix for agent ID normalization that ensures IDs match the documented regex. This affects agent routing and could cause subtle bugs for users with non-standard agent names.

- **[PR #3193 — Added simplex channel type](https://github.com/sipeed/picoclaw/pull/3193)** (OPEN since 2026-06-27): A new channel type for the Simplex messaging protocol. With 22 days and no comments from maintainers, this may indicate either low interest or resource constraints. Given the project's focus on channel diversity, this deserves a triage decision.

- **[PR #3248 — fix: bump Go to 1.25.12 to remediate stdlib vulnerabilities](https://github.com/sipeed/picoclaw/pull/3248)** (OPEN since 2026-07-10): While not technically stale (6 days old), this fixes security vulnerabilities in `crypto/tls` and `os`. Security fixes should have higher priority than the current open status suggests.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-19

## Today's Overview

NanoClaw shows high development velocity today with 26 PRs and 18 issues updated in the last 24 hours. The project closed 17 merged/closed PRs and 16 issues, indicating strong maintainer throughput. Two open issues and nine open PRs remain active, suggesting ongoing work in progress. The project maintains a healthy balance of bug fixes, security improvements, and community contributions, with notable activity across WhatsApp, Slack, and CLI infrastructure. No new releases were published today.

---

## Releases

No new releases today. The last release activity predates this digest period.

---

## Project Progress

**17 PRs were closed/merged today**, reflecting significant forward momentum:

**Core Infrastructure & CLI**
- **#3068** (open) — QuantumBreakz: Fixes scheduled task cross-session visibility and error clarity, resolving #2992. Task tools now provide proper feedback across different sessions within the same agent group.
- **#2397** (closed) — Issue tracked for missing `ncl` CLI commands for scheduled tasks (list/run-now/pause/cancel), with no merged PR yet.
- **#2395** (closed) — Issue documented missing `add-mount`/`remove-mount` commands for container configs after DB migration.

**Session & Agent Management**
- **#3078** (open) — mymac80: Fixes agent-shared session resolution to pin to an anchor session, preventing inbound messages from different channels re-homing onto different sessions.
- **#2496** (closed) — SebTardif: Fixes `writeOutboundDirect()` where database was opened read-only, causing command-gate deny responses to silently fail delivery.

**Security**
- **#3065** (open) — QuantumBreakz: Fixes critical loopback webhook authentication vulnerability (CWE-306) on the local forwarded-gateway webhook server, addressing GHSA-h9g4-589h-68xv.

**WhatsApp Adapter**
- **#3087** (open) — glifocat: Fixes engage_mode mention detection for typed @-mentions in WhatsApp groups (previously only fired on autocomplete pills).
- **#3086** (closed) — alexandra261: Adds recipient validation before sending on WhatsApp, preventing silent message loss to unregistered numbers.
- **#2894** (closed) — Issue tracked: inbound media silently dropped when CDN fetch fails in WhatsApp adapter.

**Slack Adapter**
- **#2702** (closed) — mperraillon: Switches Slack adapter to Socket Mode, removing the need for publicly reachable HTTP endpoints.
- Four PRs from alipgoldberg (#2314, #2305, #2304, #2303, #2299, #2296) improving Slack setup UX: fixed Photon URL, added back-affording confirm, simplified jargon, member-ID fallback, token order matching, and card labeling.

**Credential Proxy & API Compatibility**
- **#1267, #1212, #1185, #1100** (all closed) — Multiple contributors (kk17, jiangyunpeng, pengchongfu, npulgh) fixed credential proxy to preserve `ANTHROPIC_BASE_URL` path prefix, ensuring compatibility with third-party Claude API providers like MiniMax.

**Testing & CI**
- **#3084** (closed) — gavrielc: Removes temporary diagnostics from the `/clear-abort` integration test.

---

## Community Hot Topics

**Most Active Issues:**
- **#2506** (4 comments) — `send_message` dedup silently drops responses when turns complete within 60 seconds. Active community discussion on timing-dependent message loss.
- **#2482** (3 comments) — Wizard falsely detects "no systemd" under `su -` invocation, impacting headless Linux setups. Multiple users affected.
- **#3016** (3 comments) — Every `rate_limit_event` logged as quota error even when allowed, causing noisy logs. Directly relates to PR #3077 fix.

**Analysis:** The community is actively engaged around subtle timing and edge-case bugs that affect reliability—specifically around message delivery guarantees, systemd detection in container/headless environments, and rate-limit handling. These represent real production pain points for users deploying NanoClaw in non-standard environments.

---

## Bugs & Stability

### Critical
- **N/A** — No critical-severity bugs reported today.

### High
- **#3085** (open) — WhatsApp engage_mode=mention fails on typed @-mentions (only works with autocomplete pills). `accumulate` policy masks the failure. **Fix PR #3087 exists.**
- **#3065** (open) — Missing authentication on loopback webhook server (CWE-306). **Fix PR #3065 exists.**

### Medium
- **#3016** (closed) — `rate_limit_event` logged as quota error for allowed statuses. **Fix PR #3077 merged today.**
- **#2506** (closed) — `send_message` dedup drops responses on rapid turn completion. Resolved.
- **#2784** (closed) — Container-runner staleness check misses `ipc-mcp-stdio.ts` changes. Resolved.
- **#2482** (closed) — Wizard systemd detection false positive under `su -`. Resolved.
- **#2894** (closed) — WhatsApp inbound media silently dropped on CDN fetch failure. Resolved.
- **#2496** (closed) — Outbound DB opened read-only, silent write failures. **Fix PR #2496 merged.**

### Low
- **#2314** (closed) — Photon homepage URL pointed to Dynadot for-sale page. Fixed to `photon.codes`.

---

## Feature Requests & Roadmap Signals

**Documented but Unresolved Requests:**
- **#1681/#1679** (closed) — Keyword-based message routing for pre-turn model selection. Closed without merge, suggesting design or scoping issues.
- **#2397** (closed) — No top-level `ncl` CLI for managing scheduled tasks. Closed as tracking issue, no implementation PR merged yet.
- **#2395** (closed) — Missing `add-mount`/`remove-mount` commands for container configs. Closed as tracking issue.

**Predicted Next-Release Features:**
- **Socket Mode Slack adapter** (#2702, merged) — Likely to ship in next release, enabling Slack integration without public URLs.
- **Scheduled task visibility fix** (#3068) — Improves UX for multi-session task management.
- **WhatsApp mention detection fix** (#3087) — Critical for WhatsApp group deployments.
- **Loopback webhook authentication** (#3065) — Security fix likely to be fast-tracked.

---

## User Feedback Summary

**Pain Points:**
- Users deploying on headless Linux/Proxmox LXC environments face consistent systemd detection failures (#2482, #1981), forcing workarounds.
- WhatsApp group mentions require autocomplete pills—typed @-mentions silently fail (#3085), frustrating natural interaction.
- Rapid successive messages cause silent response drops (#2506), undermining reliability for conversational use.
- Noisy error logs from rate-limit telemetry (#3016) create false alarm fatigue.
- Slack setup remains confusing for non-technical users despite improvements—multiple PRs today address onboarding UX (#2304, #2305, #2299, #2296).

**Satisfaction Signals:**
- High community contribution velocity (26 PRs, 18 issues) suggests engaged user base.
- Multiple contributors fixing credential proxy (#1267, #1212, #1185, #1100) indicates healthy ecosystem around third-party API compatibility.
- Slack UX improvements directly address user feedback about jargon and confusing step sequences.

---

## Backlog Watch

**Open Issues Needing Attention:**
- **#1981** (OPEN, updated today) — `systemd misdetected as absent on headless Linux` (v2 setup). Created 2026-04-24, last comment 2026-07-19. Affects Ubuntu/Hetzner users. Related to #2482 which was closed—root cause may persist. **Requires maintainer investigation.**

**Open PRs Awaiting Review:**
- **#3068** (OPEN, 2026-07-16) — Scheduled task visibility fix from QuantumBreakz. Core functionality improvement.
- **#3065** (OPEN, 2026-07-16) — Security fix for loopback webhook. **High priority due to security implications.**
- **#3078** (OPEN, 2026-07-18) — Agent-shared session anchor resolution. May prevent session fragmentation bugs.
- **#2971** (OPEN, 2026-07-07) — New `ncc` utility skill for host operational CLI. Awaiting review for 11 days.
- **#3087** (OPEN, 2026-07-18) — WhatsApp mention fix (core-team labeled). Directly addresses open bug #3085.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-19

## Today's Overview
NullClaw shows minimal activity in the last 24 hours, with no new releases, no pull request activity, and only one open issue updated. The project remains in a low-activity period, with the community's focus currently on a persistent Android/Termux build bug that has been open for nearly three months. No code merges or new feature work was recorded today, suggesting maintainers may be in a slower development cycle or addressing internal priorities. The lone updated issue indicates that while the project is not dormant, active development velocity is very low.

## Releases
No new releases were published today. The latest available version remains v2026.4.17 referenced in the active bug report.

## Project Progress
No pull requests were merged or closed in the last 24 hours. No feature advancements or fixes were recorded.

## Community Hot Topics
The sole active issue this period is:

- **#868** [OPEN] [bug] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat  
  *Opened 2026-04-23, last updated 2026-07-18, 7 comments, 0 reactions*  
  **Analysis:** This is the most commented issue in the project right now. The user reports a build failure when compiling NullClaw on Android (Termux, aarch64) with Zig 0.16.0. The error involves an `AccessDenied` during a `linkat` call on `options.zig`. With no maintainer response visible in the issue body, the underlying need appears to be (a) a fix for the Android build pipeline and (b) better documentation or workarounds for running NullClaw on mobile environments. The lack of reactions may indicate the issue affects a niche user base, but the seven comments suggest active debugging by the community.

## Bugs & Stability
| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| **High** | #868 | Zig build fails on Android/Termux (aarch64) with `AccessDenied` during linkat. Blocks all aarch64 Android users from building the latest version. | No known fix PR |

No other bugs, crashes, or regressions were reported today. The single bug is long-standing but not yet addressed by maintainers.

## Feature Requests & Roadmap Signals
No new feature requests were filed today. The active bug report does not contain feature requests. Based on the nature of issue #868, the next version may include build system fixes or Android-specific compatibility patches, though no roadmap signals are present in this data.

## User Feedback Summary
User feedback is concentrated in the single active issue: a developer on Android/Termux is experiencing a hard build failure. The user has provided detailed environment information (device, OS, Zig version), indicating a technically proficient but frustrated user who has likely spent significant time debugging. The lack of maintainer response may be a source of dissatisfaction. The limited data suggests Android/Termux users are an underserved cohort, and build reliability on non-Linux/non-x86 platforms is a pain point.

## Backlog Watch
- **Issue #868** — Open since 2026-04-23 (87 days), last updated yesterday. This is the most significant unresolved item needing maintainer attention. With 7 comments and no official response, it risks becoming stale and could erode community trust among Android users. A maintainer acknowledgment, workaround, or fix assignment would be valuable.  
  [GitHub Link](https://github.com/nullclaw/nullclaw/issues/868)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-19

---

## 1. Today's Overview

IronClaw remains in an intensive refactoring phase centered on the "Reborn" architecture simplification (documented in `docs/reborn/2026-07-17-architecture-simplification-dto-dyn-local.md`). Over the past 24 hours, **32 pull requests were merged or closed** — an exceptionally high velocity that indicates a coordinated, multi-contributor push to land the capability-result collapse and runtime adapter consolidation. Activity is overwhelmingly internal/core-contributor driven, with community involvement limited to a localization request and a reported security-sensitive credential exposure bug. The project has produced **no new releases** despite the surge in merged code, suggesting these changes are being batched for a future cut. Overall project health appears strong, with disciplined incremental refactoring (labeled by slice/stage) and extensive documentation accompanying each change.

---

## 2. Releases

**No new releases** in the last 24 hours.

The most recent release automation PR (#5598, still open) would bump:
- `ironclaw_common`: 0.4.2 → 0.5.0 (**breaking**)
- `ironclaw_safety`: 0.2.2 → 0.2.3 (compatible)
- `ironclaw_skills`: 0.3.0 → 0.4.0 (**breaking**)
- `ironclaw`: 0.24.0 → 0.29.1

This release is gated on the current refactoring wave and has not yet been promoted.

---

## 3. Project Progress

**Merged/closed PRs today: 32** — a massive integration day. Key advances:

### Architecture Simplification (Slice C / §5.3)
- **Route capability results through `host_api::Resolution`** — [#6245](https://github.com/nearai/ironclaw/pull/6245) makes the seam live at `loop_host` without a big-bang migration.
- **`authorize()` delegating scaffold** — [#6239](https://github.com/nearai/ironclaw/pull/6239) and [#6241](https://github.com/nearai/ironclaw/pull/6241) route all four `CapabilityHost` entry points through a single pre-dispatch `authorize()` fold returning the `AuthorizeResult` trichotomy.
- **CapabilityOutcome → Resolution mapping** — [#6242](https://github.com/nearai/ironclaw/pull/6242) lands the pure mapping in `ironclaw_turns`.
- **Persistent GateRecordStore** — [#6243](https://github.com/nearai/ironclaw/pull/6243) adds the storage port for gate payloads needed by the collapse.
- **Result-record vocabulary** — [#6237](https://github.com/nearai/ironclaw/pull/6237) adds `GateRecord`/`DenyRecord` types.

### Runtime Consolidation
- **RuntimeAdapter → RuntimeLane** — [#6240](https://github.com/nearai/ironclaw/pull/6240) collapses the open-trait `dyn` into a closed match, removing trait-object dispatch and the per-lane vtable `HashMap` on the hot path.

### Deployment Mode Simplification (Slice B)
- **DeploymentConfig collapse** — [#6235](https://github.com/nearai/ironclaw/pull/6235) eliminates the `LocalDev*` family, making deployment mode a single config value.

### Safety & Correctness
- **SafeSummary single definition** — [#6236](https://github.com/nearai/ironclaw/pull/6236) removes two duplicate copies of the loop-safe-summary redaction, delegating to the canonical host_api version.
- **Compile-time transition exhaustiveness** — [#6252](https://github.com/nearai/ironclaw/pull/6252) adds testing plan §11.9 for capability state machines.

### Reborn CLI Cleanup
- **Stub fixes** — [#6211](https://github.com/nearai/ironclaw/pull/6211) replaces fake-success output for `channels list`, `hooks list`, and `logs` with explicit unimplemented errors.

### Promotional Plan
- **Reborn → canonical CLI** — [#6143](https://github.com/nearai/ironclaw/issues/6143) (closed) formalizes the staged transition plan: rename v1 to `ironclaw-v1`, promote Reborn to `ironclaw`.

---

## 4. Community Hot Topics

**Most active Issues:**

1. **[#6158 — Add zh-TW Traditional Chinese localization](https://github.com/nearai/ironclaw/issues/6158)** (2 comments)
   - Request from a community member to add Traditional Chinese locale (zh-TW) to the WebUI v2, which currently supports only Simplified Chinese (zh-CN).
   - Underlying need: users whose browser locale prefers Traditional Chinese currently fall back to a suboptimal locale choice. Simple localization gap with no maintainer response yet.

2. **[#6247 — MCP server headers persist bearer tokens in plaintext](https://github.com/nearai/ironclaw/issues/6247)** (0 comments)
   - Reported by core contributor kirikov. `McpServerConfig.headers` carrying `Authorization: Bearer` tokens is serialized into unencrypted DB rows, backups, and exports.
   - Underlying need: credential hygiene — bearer tokens should not be persisted in plaintext config storage. No open fix PR yet.

3. **[#6249 — Reborn: extensions-management API parity for MCP servers](https://github.com/nearai/ironclaw/issues/6249)** (0 comments)
   - The v1 gateway exposes install/activate/PATCH endpoints for MCP server lifecycle; the `ironclaw-reborn` binary has no equivalent surface.
   - Underlying need: feature parity between old and new runtimes before v1 can be fully deprecated.

**Active PRs with most comments:**
- The release PR [#5598](https://github.com/nearai/ironclaw/pull/5598) remains a persistent open item — it is the longest-lived open PR and the most likely target for community questions about versioning.

---

## 5. Bugs & Stability

**High Severity:**

1. **[#6247 — MCP server headers persist bearer tokens in plaintext](https://github.com/nearai/ironclaw/issues/6247)**
   - **Severity: HIGH** — Credential exposure through plaintext DB storage, backups, and exports.
   - **Fix status:** No fix PR yet as of digest time. Reported by core contributor kirikov — likely to be prioritized.
   - **Impact:** Any user configuring MCP servers with bearer auth has tokens leaked into unencrypted storage.

**Medium Severity:**

2. **[#6255 — Stranded harness assertion in public-smoke canary](https://github.com/nearai/ironclaw/pull/6255)**
   - **Severity: MEDIUM** — A test assertion failed in the live canary lane after the C-series/W1 wave merge. Confirmed as a stranded harness issue, not a product regression (agent ran correctly).
   - **Fix status:** Fix PR [#6255](https://github.com/nearai/ironclaw/pull/6255) opened same day — open.

**Low Severity:**

3. **[#6211 — Fake-success stubs in reborn-cli](https://github.com/nearai/ironclaw/pull/6211)**
   - **Severity: LOW** — `channels list`, `hooks list`, `logs` printed fake success. Fixed by returning explicit "not implemented yet" errors. Already merged.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features Likely for Next Release

1. **zh-TW Traditional Chinese localization** ([#6158](https://github.com/nearai/ironclaw/issues/6158))
   - Low-effort, high-impact for zh-TW users. Simple addition of a locale to WebUI v2. Given the project's active state and that zh-CN already exists, this could land in the next release if a maintainer picks it up.

2. **Reborn: extensions-management API parity for MCP servers** ([#6249](https://github.com/nearai/ironclaw/issues/6249))
   - Required for feature parity between v1 and Reborn. Likely a prerequisite for the v1 deprecation tracked in [#6143](https://github.com/nearai/ironclaw/issues/6143). Expect this to be implemented before the next release gates.

3. **Credential preflight check** ([#6248](https://github.com/nearai/ironclaw/issues/6248))
   - Would probe `has_account` for each required `ProductAuthAccount` before sandbox spin-up. Blocked on `auth_resume` design — a dependency that may land during the current refactoring wave.

### Roadmap Signals from Merged Work

- The **architectural simplification** (Slice C, §5.3) is on track for completion. Expect the next release to include the full capability-result collapse and runtime lane consolidation.
- **CI maturation** — multiple PRs target Reborn binary validation ([#6176](https://github.com/nearai/ironclaw/pull/6176), [#6188](https://github.com/nearai/ironclaw/pull/6188)), suggesting a release binary pipeline is nearing readiness.
- **Interactive architecture explorer** ([#6253](https://github.com/nearai/ironclaw/pull/6253)) — a docs/tooling PR that adds a diagramming skill, indicating the team values developer onboarding and documentation visualization.

---

## 7. User Feedback Summary

**Observed direct feedback (from Issues and PRs):**

- **Localization gap** ([#6158](https://github.com/nearai/ironclaw/issues/6158)): A user explicitly notes the absence of Traditional Chinese (zh-TW) in WebUI v2 as a pain point. The fallback to Simplified Chinese is suboptimal for zh-TW users. No dissatisfaction expressed otherwise — the user is requesting rather than complaining.

- **Credential hygiene concern** ([#6247](https://github.com/nearai/ironclaw/issues/6247)): While reported by a core contributor, this reflects a real user security concern: bearer tokens in plaintext DB rows. Users relying on MCP server configs with auth tokens should be aware of this exposure until fixed.

- **No negative user satisfaction signals** observed in the last 24 hours — no bug reports from community members, no feature complaints, and no angry issues.

**Inferred user patterns:**
- The user base appears to be power users/admins deploying IronClaw with MCP servers and OAuth-backed capabilities (Slack, GSuite).
- The Active community engagement is low — most issues and PRs are core-contributor driven. The project is in an intense internal refactoring phase rather than a community growth phase.

---

## 8. Backlog Watch

**Stale/unanswered issues requiring maintainer attention:**

| Issue | Created | Last Updated | Days Stale | Notes |
|-------|---------|--------------|------------|-------|
| [#6158 — zh-TW localization](https://github.com/nearai/ironclaw/issues/6158) | 2026-07-16 | 2026-07-18 | 1 day | Low effort; no maintainer response. Should acknowledge or assign. |
| [#5598 — Release PR](https://github.com/nearai/ironclaw/pull/5598) | 2026-07-03 | 2026-07-19 | **16 days** | Oldest open PR. Bumps four crates with breaking changes. Blocked on architecture simplification completion. |
| [#6176 — Validate Reborn release binaries](https://github.com/nearai/ironclaw/pull/6176) | 2026-07-17 | 2026-07-19 | 2 days | Open, adds CI preflight for 7 targets. Likely waiting on architectural work to settle. |
| [#6188 — Release workflow Reborn compile-only](https://github.com/nearai/ironclaw/pull/6188) | 2026-07-17 | 2026-07-19 | 2 days | Companion to #6176. Same status. |

**Key observation:** The release automation PR [#5598](https://github.com/nearai/ironclaw/pull/5598) is the most significant backlog item — it has been open for over two weeks and represents a pending breaking release. The refactoring wave of the last 24 hours likely moves it closer to merge, but community members awaiting the release may be growing impatient. A maintainer status update on this PR would be valuable.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-19

## Today's Overview
Project activity remains moderate with 6 open issues and 3 PRs updated in the last 24 hours. All issues are marked as stale, indicating a potential maintenance backlog as none have been closed recently. The latest release (2026.7.17) introduces structured run failure details in the error UI and service deployment data persistence, which are meaningful stability improvements. The community is reporting several functional bugs around MCP usage, image parsing, and model token limits, with only one new PR opened today to address session rename feedback. Overall, the project is in a steady state but would benefit from increased attention to long-standing open issues.

## Releases
**LobsterAI 2026.7.17** was released on July 17, 2026. Key changes include:
- feat(cowork): surface structured run failure details in error UI (PR #2348) — improves debugging for failed workflow executions
- feat(service deployment): data persistence for deployments (PR #2349) — ensures service state survives restarts
- feat(skin): a (likely incomplete in notes)

No breaking changes or migration notes were provided. This release focuses on observability and reliability.

## Project Progress
**Merged/Closed PRs (2):**
- [#1353](https://github.com/netease-youdao/LobsterAI/pull/1353) [closed] — feat(agent): Agent skill selector now supports "select all" and "clear" buttons with a selected count display, improving multi-skill management UX.
- [#1464](https://github.com/netease-youdao/LobsterAI/pull/1464) [closed] — fix(im): Added duplicate validation for instance names and credential IDs across DingTalk, Feishu, and QQ IM platforms, preventing confusion from same-name instances and duplicate bot registrations.

**New Open PR (1):**
- [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) [open] — fix(cowork): Show localized feedback when session rename fails, addressing user confusion when a rename silently fails.

## Community Hot Topics
All 6 open issues are stale and have exactly 1 comment each, suggesting low community engagement recently. The most notable:

- [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) [👍 1] — Custom Studio HTTP MCP not usable: Users report that custom MCPs are not updated in the OpenClaw engine, only SSE works. This is a core integration issue that may affect developers building custom tools.
- [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) — Uploading a 3MB long image crashes the page and makes the task permanently unavailable. A high-severity stability bug affecting image parsing workflows.
- [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) — Editing another model provider config after closing the edit panel becomes impossible (read-only state). A clear UI state management regression.

The underlying need across all issues is **UI reliability and state consistency**, particularly in configuration panels and tool integration flows.

## Bugs & Stability
| Severity | Issue | Description | Fix Available? |
|----------|-------|-------------|----------------|
| **High** | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | Uploading a 3MB long image crashes the page and makes the app unusable (permanent error state) | No |
| **High** | [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | Model provider config panel becomes read-only after closing and switching to another provider | No |
| **Medium** | [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | Short input (2 characters) incorrectly flagged as exceeding model token limit | No |
| **Medium** | [#1305](https://github.com/netease-youdao/LobsterAI/issues/1305) | Scheduled task title displays incorrectly in history after the task is deleted | No |
| **Medium** | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | Custom HTTP MCP not recognized by OpenClaw engine (only SSE works) | No |

No PRs are directly fixing these bugs yet. The session rename fix PR #2358 addresses a separate minor UX issue.

## Feature Requests & Roadmap Signals
- **Code block line numbers** ([#1302](https://github.com/netease-youdao/LobsterAI/issues/1302)): A detailed feature request to add a toggleable line number display for both language-identified and plain code blocks with specific implementation guidance (using react-syntax-highlighter). This is a well-specified UX improvement likely to appear in an upcoming minor release.
- **Agent skill selector improvements** (already merged in PR #1353): The "select all" / "clear" feature is now live.
- **IM duplicate validation** (already merged in PR #1464): Multi-instance platform hygiene is now enforced.

The project appears focused on polish and UX improvements (line numbers, error feedback) rather than new major features.

## User Feedback Summary
- **Pain Points:** Users are experiencing UI-breaking crashes (image parsing, config panels stuck in read-only), inaccurate token limit enforcement, and MCP integration inconsistencies. Multiple issues describe scenarios where the app becomes "unusable" or requires abandoning tasks.
- **Use Cases:** The variety of reported issues — custom MCPs, image parsing, scheduled tasks, model config editing — indicates a diverse user base including developers building custom tools, document processing workflows, and multi-platform IM bot administrators.
- **Satisfaction:** The silence on most issues (only 1 comment each) could indicate either low user engagement or frustration that issues go unaddressed. The stale label on all open issues (all from April 2) suggests maintainer response time may be lagging.

## Backlog Watch
All 6 open issues are **stale** (last updated July 18, no activity since April 2, 2026). These are critical signals for maintainer attention:

1. **#1293** — Custom MCP engine integration (blocks custom tool development)
2. **#1296** — Image upload crash (blocks document processing use cases)
3. **#1298** — Token limit false positive (blocks basic input workflows)
4. **#1302** — Code block line numbers (well-specified feature request)
5. **#1305** — Scheduled task history data inconsistency
6. **#1307** — Model provider config UI regression

**Recommendation:** The maintainers should prioritize triaging the 3 high-severity bugs (#1296, #1298, #1307) as they directly impact core functionality and user trust. The MCP integration issue (#1293) is also important for developer ecosystem health.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-19

## 1. Today's Overview
The Moltis project shows moderate activity with 3 pull requests updated in the last 24 hours, though no new issues were opened or closed. Two PRs were merged/closed today, indicating steady progress on feature development and bug fixing. One open PR introduces a new vector database memory backend as an experimental feature. No new releases were published. Overall, the project appears in a stable phase of incremental improvement with a focus on memory systems, Slack integration configurability, and web UI flexibility for ACP-only setups.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
Two pull requests were merged/closed today, advancing feature development and fixing a web UI limitation:

- **#1157 [CLOSED] fix(web): support ACP-only chat setup** — This fix addresses a problem where the web UI would error when users configured only ACP (Agent Communication Protocol) agents without any LLM models. Now installed ACP agents are shown during LLM onboarding, the session header picker filters to ACP-capable external agents, and the bottom model selector is disabled during ACP-only sessions. ([PR #1157](https://github.com/moltis-org/moltis/pull/1157))

- **#1159 [CLOSED] feat(slack): support configurable API base URL** — Adds `api_base_url` to Slack account configuration (defaulting to `https://slack.com/api`), and routes Slack client construction, Socket Mode startup, Events API authentication, outbound replies, and native streaming through the configured base URL. Also adds corresponding fields to the Slack onboarding flow. ([PR #1159](https://github.com/moltis-org/moltis/pull/1159))

## 4. Community Hot Topics
One pull request is generating community interest:

- **#1158 [OPEN] feat(memory): add zvec vector database memory backend** — This PR introduces an experimental alternative memory backend using Zvec and redb, feature-gated behind the `zvec` Cargo feature (enabled by default in the `full` feature set). The author notes this was "vibe-coded" as an experiment with an independently installed llama.cpp server for embeddings. The underlying interest suggests community demand for more lightweight, self-contained memory backends that don't require external vector database infrastructure. ([PR #1158](https://github.com/moltis-org/moltis/pull/1158))

## 5. Bugs & Stability
No new bugs, crashes, or regressions were reported in issues today. The closed PR #1157 resolved a web UI bug where ACP-only setups (without any LLM models) would throw an error, which could be classified as a medium-severity usability issue.

## 6. Feature Requests & Roadmap Signals
While no explicit feature requests appeared in issues today, the merged PRs signal two areas of focus for upcoming releases:

- **Slack API base URL configurability** (PR #1159) suggests enterprise or self-hosted Slack deployments that use custom API gateways or proxies are becoming a use case the project aims to support.
- **Zvec vector database backend** (PR #1158), if accepted, would provide a lighter-weight alternative to the default vector database, potentially enabling more memory-intensive features on lower-resource deployments. This could appear in the next minor release if merged.

## 7. User Feedback Summary
No direct user feedback was captured in today's issue data. However, the PR #1157 fix addresses a clear pain point: users deploying Moltis with only ACP agents (no local LLM) were blocked at the onboarding stage. The Slack API base URL feature (PR #1159) likely stems from user requests for custom Slack API endpoints, common in restricted network environments or with Slack Enterprise Grid custom proxies.

## 8. Backlog Watch
No long-unanswered issues or PRs requiring maintainer attention were identified in the current data. The open PR #1158 (zvec backend) is still awaiting review and potential merge—this may be a candidate for maintainer attention in the coming days.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-19

## 1. Today's Overview

The CoPaw project shows a **high-activity day** with 11 issues and 7 pull requests updated in the last 24 hours, indicating strong community engagement. The project is in a post-release phase (v2.0.0.post3) with no new releases today, but a concentrated bug-fixing and feature-development push is underway. There are **several regression bugs** affecting core functionality — notably, a session-blocking issue introduced by a recent fix (#6056) and a file-name crash in memory storage. The community is actively submitting fix PRs alongside new feature contributions, suggesting a healthy but urgent maintenance cycle. **Overall project health: moderate concern** — the volume of regressions in a .post release warrants attention.

## 2. Releases

**No new releases today.**
The latest available version remains **v2.0.0.post3** (released 2026-07-17). An installation verification issue (#6223) for that release is still open with pending platform checks.

---

## 3. Project Progress

**Merged/Closed PRs today:**

- **#1071 (CLOSED)** — [feat: Introduce Mattermost channel integration for message](https://github.com/agentscope-ai/QwenPaw/pull/1071)  
  *Author: 2niuhe | First-time contributor*  
  Introduces Mattermost channel integration, related to issue #621. This is a long-standing PR (opened March 2026) that finally merged — a significant community integration milestone.

**Open PRs advancing features or fixes:**

| PR | Author | Summary | Status |
|---|---|---|---|
| [#6247](https://github.com/agentscope-ai/QwenPaw/pull/6247) | zealonexp | Fix OSError crash in `_saved_tool_refs` is_file() check | Open, addresses #6246 |
| [#6248](https://github.com/agentscope-ai/QwenPaw/pull/6248) | feng183043996 | Distinguish offload vs cancel to prevent subprocess kill on deadline | Open, addresses #6245 |
| [#6251](https://github.com/agentscope-ai/QwenPaw/pull/6251) | wananing | Add script-friendly environment reads (`env get`, `env list --json`) | Open, addresses #4641 |
| [#6243](https://github.com/agentscope-ai/QwenPaw/pull/6243) | Wiziechen *(first-time contributor)* | Expose `use_dimensions` toggle for OpenAI-compatible APIs | Open, addresses #6242 |
| [#6238](https://github.com/agentscope-ai/QwenPaw/pull/6238) | wananing | Initialize Driver handlers concurrently (max 8) for faster MCP startup | Open |
| [#6237](https://github.com/agentscope-ai/QwenPaw/pull/6237) | niceIrene | Improve Scroll history recall with date-aware queries and complete turns | Open |

---

## 4. Community Hot Topics

**Most active issues (by comments & reactions):**

| Issue | Comments | Summary |
|---|---|---|
| [#6240](https://github.com/agentscope-ai/QwenPaw/issues/6240) | 3 comments | [CLOSED] Bug: Chat shows memory annotation fragments (e.g. `<!-- ⟦ NEXT_RID 改为 1003...`) in console output |
| [#6245](https://github.com/agentscope-ai/QwenPaw/issues/6245) | 2 comments | [OPEN] **Regression:** Shell command timeout permanently blocks the session — user is blocked until restart |
| [#6246](https://github.com/agentscope-ai/QwenPaw/issues/6246) | 2 comments | [OPEN] `recall_history` crashes with OSError due to overly long filename from git diff content in tool results |
| [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) | 2 comments | [OPEN] `env set` values not visible to subprocesses; users want `env get KEY` and `env list --json` |
| [#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) | 2 comments | [OPEN] Console embedding dimension setting not sent to APIs because `use_dimensions` is not exposed |

**Analysis of underlying needs:**
- **Sandbox/execution reliability** is the top concern — users cannot tolerate sessions freezing permanently due to shell command timeouts. The regression in #6245 indicates insufficient testing of edge cases in the coordinator timeout logic.
- **Memory/stability bugs** (#6246, #6240) erode user trust in the agent's long-running reliability.
- **Environment management** (#4641) is a persistent pain point for power users who need dynamic, scriptable configuration access.

---

## 5. Bugs & Stability

**Bugs reported today — ranked by severity:**

| Severity | Issue | Description | Fix PR Exists? |
|---|---|---|---|
| **CRITICAL** | [#6245](https://github.com/agentscope-ai/QwenPaw/issues/6245) | **Session permanently blocked** when shell command exceeds coordinator deadline — regression from #6056 fix. User must restart. | ✅ **Yes** — [#6248](https://github.com/agentscope-ai/QwenPaw/pull/6248) (open) |
| **HIGH** | [#6246](https://github.com/agentscope-ai/QwenPaw/issues/6246) | `recall_history(op="search")` crashes with `OSError: [Errno 36] File name too long` when git-diff content matches the saved-tool-file regex. | ✅ **Yes** — [#6247](https://github.com/agentscope-ai/QwenPaw/pull/6247) (open) |
| **HIGH** | [#6241](https://github.com/agentscope-ai/QwenPaw/issues/6241) | **Agent repeats identical output** across multiple assistant turns; `memory_search` can enter infinite loop. No frame-level dedup mechanism. | ❌ No fix PR yet |
| **MEDIUM** | [#6240](https://github.com/agentscope-ai/QwenPaw/issues/6240) | Memory annotation XML fragments leak into chat display after extended conversations. | ❌ Closed; root cause unclear |
| **MEDIUM** | [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | Windows PATH concatenation drops semicolon between User+Machine PATH — child processes lose npm globals. AI-drafted report. | ❌ No fix PR yet |
| **MEDIUM** | [#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) | Embedding dimension setting silently ignored for OpenAI-compatible APIs because `use_dimensions` not exposed. | ✅ **Yes** — [#6243](https://github.com/agentscope-ai/QwenPaw/pull/6243) (open) |
| **LOW** | [#6249](https://github.com/agentscope-ai/QwenPaw/issues/6249) | TUI stuck in "warming" state when started from source; no error logs. | ❌ No fix PR yet |
| **LOW** | [#6250](https://github.com/agentscope-ai/QwenPaw/issues/6250) | SANDBOX_FALLBACK hardcodes approval prompt — no config option to skip when sandbox unavailable. | ❌ No fix PR yet |

**Significant note:** Two of the three highest-severity bugs already have open fix PRs — good responsiveness, but these regressions should have been caught in CI for a .post release.

---

## 6. Feature Requests & Roadmap Signals

**User-requested features this week:**

| Issue | Feature Request | Likely for v2.0.0.post4 / v2.1? |
|---|---|---|
| [#6244](https://github.com/agentscope-ai/QwenPaw/issues/6244) | **Memory isolation by project** — group conversations into projects with isolated memory retrieval, improving recall quality. | **Likely** — Strong UX improvement, conceptually aligned with existing agent-role abstraction |
| [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) | **Scriptable environment reads** (`env get KEY`, `env list --json`) for subprocess access to mid-session variables. | **Highly likely** — PR [#6251](https://github.com/agentscope-ai/QwenPaw/pull/6251) already submitted |
| [#6250](https://github.com/agentscope-ai/QwenPaw/issues/6250) | **Configurable sandbox fallback** — allow admin to skip approval prompt when sandbox unavailable. | **Possible** — addresses enterprise Docker/WSL2 deployment pain |

**Roadmap signals:** The highest churn is around **memory system improvements** (#6246, #6241, #6244) and **session reliability** (#6245). Expect the next release to focus on:
1. A memory dedup/anti-loop mechanism (requested in #6241)
2. Project-based memory isolation (requested in #6244)
3. Stable sandbox timeout handling (already in PR #6248)

---

## 7. User Feedback Summary

**Real pain points expressed today:**

- **"Session permanently blocked"** — `feng183043996` reports that a shell command timeout in Docker causes total session freeze until process restart. This is a regression that directly impacts production use.
- **"Agent loops and repeats itself"** — `z13645719` (v1.1.12) documents a system where the agent outputs identical content across turns despite a warning log, with no mechanism to break the cycle.
- **"Memory isolation needed for real-world tasks"** — `yhfeitian` notes that current memory is date-based and mixes all conversations; they want project-based isolation to improve recall accuracy.
- **"Windows PATH corruption"** — `604731578` (AI-assisted report) describes how `npm` globals are lost in child processes due to missing semicolons in PATH concatenation — a Windows-specific but critical issue for developers.
- **"TUI doesn't start"** — `MojinXkl` reports the terminal UI hangs in "warming" indefinitely when run from source, with no clear error path.

**Satisfaction signals:**
- Two first-time contributors submitted PRs (#6243, #1071), indicating the project is approachable.
- Issue #6240 was closed — one bug resolved.
- The `env get KEY` feature from long-open request #4641 is now in PR — user `wananing` actively contributing.

---

## 8. Backlog Watch

**Issues/PRs needing maintainer attention:**

| Item | Age | Why It Matters |
|---|---|---|
| [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) — `env set` subprocess visibility | **57 days** (since May 23) | Long-standing power-user complaint with a fresh PR (#6251). Needs review and merge. |
| [#6223](https://github.com/agentscope-ai/QwenPaw/issues/6223) — v2.0.0.post3 installation verification | **1 day** | Release duty issue — some platforms may not have passed verification; deadline was yesterday. |
| [#6249](https://github.com/agentscope-ai/QwenPaw/issues/6249) — TUI stuck in warming | **1 day** | New user frustration; likely a configuration or Python version compatibility issue. No fix attempted. |
| [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) — Windows PATH semicolon drop | **1 day** | AI-assisted report; may need human reproduction before acceptance. Affects npm-based workflows on Windows. |

**Recommendation:** The **critical regressions** (#6245, #6246) should receive expedited review for their fix PRs. The **memory dedup** issue (#6241) is growing in user impact and lacks a fix PR — consider prioritizing a framework-level solution.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the ZeroClaw project digest for **2026-07-19**.

---

## ZeroClaw Project Digest — 2026-07-19

### 1. Today's Overview

The ZeroClaw project shows **heavy development activity** with 50 issues and 50 PRs updated in the last 24 hours. The majority of issues (39) remain **open and active**, indicating sustained community engagement and ongoing feature work. While no new releases were published today, the project is deep in implementation of several high-impact RFCs, including supply chain security (CLOSED), air-gapped execution, and OTel observability. The **3 merged/closed PRs** signal steady progress in the main branch, but the high volume of open PRs (47) suggests a substantial review backlog may be forming.

### 2. Releases

**None.**

No new releases were tagged on 2026-07-19.

### 3. Project Progress (Merged/Closed PRs Today)

Three PRs were merged or closed today, moving the following forward:

- **[PR #9152](https://github.com/zeroclaw-labs/zeroclaw/pull/9152) (fix/sop)** — Fixed a bug where relative `sops_dir` values were resolved against the current working directory instead of the workspace root, aligning behavior with documented layouts in `docs/book/src/sop/syntax.md`.
- **[PR #8576](https://github.com/zeroclaw-labs/zeroclaw/pull/8576) (fix/channels)** — Added environment variable fallback for OpenAI STT credentials (`TRANSCRIPTION_API_KEY`, `OPENAI_API_KEY`) via a new `apply_legacy_env_fallbacks()` config-layer hook, superseding prior attempts (supersedes #8079).
- **[PR #9131](https://github.com/zeroclaw-labs/zeroclaw/pull/9131) (fix/ci)** — Replaced line-based comment heuristics in CI hygiene checks with a language-aware Python scanner supporting Rust, TOML, shell, Python, and Nix, with improved failure distinction.

Additionally, **11 issues were closed** including the significant RFC for hardware-backed supply chain signing (#8177) and the Discord channel-restriction feature (#6378).

### 4. Community Hot Topics

- **Issue #9127** — *RFC: Abstract a `KeySource` trait* (6 comments, 3 days old). The community is actively debating how to classify and source master-key material across deployment forms. This is a foundational security RFC that touches 93 secret-annotated fields across the config schema.
- **Issue #5862** — *[Bug]: zeroclaw does not know it can add cron* (14 comments, CLOSED). Users are frustrated that the agent cannot self-discover its `zeroclaw cron` capabilities. This indicates a gap in tool-awareness that reduces autonomy.
- **Issue #8177** — *RFC: Supply chain signing* (12 comments, CLOSED). High engagement on a now-closed RFC suggests users are eager for provenance and hardware-backed PGP.
- **Issue #8424** — *RFC: Workspace-relative forbidden path patterns* (7 comments, blocked). Users need granular control over AI agent access to internal workspace files (e.g., `.env`, `rust-toolchain.toml`), which the current `forbidden_paths` mechanism cannot block.

**Underlying needs:** Users are calling for **better self-awareness in the agent** (cron discovery), **stronger security primitives** (key management, forbidden paths, supply chain signing), and **tighter integration with existing developer workflows** (Slack thread hydration, OpenRouter fallbacks).

### 5. Bugs & Stability

**Critical/High Severity (S0-S1):**
- **Issue #8505** — *Telegram channel cannot be configured* (S1, 5 comments). A workflow-blocking bug where the channel doctor fails even after setup via quickstart and zerocode. The bot is non-responsive on Telegram. **No fix PR found yet.**
- **Issue #6002** — *Not clearly addressed to the assistant* (S1, 6 comments, stale). The Telegram bot misidentifies which messages are directed to it. **No active fix PR.**
- **Issue #8559** — *Agents stop work when exiting chat window* (S1, 3 comments). Web dashboard kills active agent turns on window close. **PR #7759** (in-progress) proposes decoupling WebSocket lifetime from agent turns to fix this.

**Medium Severity:**
- **Issue #6724** — *Empty credentials crashloop supervisor* (4 comments). Enabling a channel with empty credentials (via dashboard UX) causes a 2-second restart loop. **No fix PR identified.**
- **Issue #7911** — *install.sh selects generic binary on Android/Termux* (3 comments). Installation on Android selects the wrong `linux aarch64` binary, breaking setup. **No fix PR.**

**Notable:**
- **Issue #6672** (CLOSED) — `reasoning_content` not passed in tool-call loops with Xiaomi thinking models (S0). This critical data-loss bug was resolved.
- **Issue #6517** (CLOSED) — Context overflow causes hallucination/drift (S2). Closed, suggesting a mitigation was implemented.

### 6. Feature Requests & Roadmap Signals

The following features signal near-term roadmap direction:

| Feature | Priority | Status | Signals Next Release? |
|---|---|---|---|
| OpenRouter model fallbacks array (#8138) | P2 | Blocked | Unlikely this sprint |
| Pre-turn tool elicitation hints (#7431) | P2 | Accepted | Possible |
| Cross-turn OTel conversation correlation (#8933) | P2 | Accepted | Possible |
| Multi-message mode for Telegram (#8445) | P2 | In-progress | Likely |
| Per-chat model switching (#8600) | P2 | Accepted | Strong signal |
| Hailo-Ollama native provider (#9109) | — | Open PR | Very likely |
| OpenAI Chat Completions endpoint (#8486) | — | Open PR | Very likely |
| Matrix single-message progress drafts (#8443) | P2 | Needs-author-action | Likely |

**Prediction:** The next release will likely include the **Hailo-Ollama provider** (#9109), **OpenAI Chat Completions endpoint** (#8486), and **Telegram multi-message mode** (#8445). The cross-turn OTel feature (#8933) may also make the cut as observability is a recurring theme.

### 7. User Feedback Summary

- **Frustration with setup:** Users report that Telegram channel configuration is unreliable despite following quickstart instructions (#8505). Android/Termux installation is broken (#7911).
- **Desire for autonomy:** Users want the agent to self-discover capabilities like cron scheduling (#5862) and to run background tasks without being tied to a WebSocket session (#8559, #7759).
- **Security consciousness:** Multiple RFCs and issues focus on key management (#9127), workspace path protection (#8424), and supply chain signing (#8177). This indicates a security-aware user base.
- **Provider flexibility needs:** Users are actively requesting support for model fallbacks (#8138), per-chat model switching (#8600), and native providers for Hailo-Ollama (#9109) and SearXNG (#5316).
- **General satisfaction:** The volume of enhancement requests (vs. pure bug reports) suggests active, engaged users who see ZeroClaw as a platform they want to extend.

### 8. Backlog Watch

| Issue/PR | Age | Status | Risk |
|---|---|---|---|
| **#2467** — *Webhook transforms* (feature) | ~138 days stale | Accepted, no movement | High — blocks arbitrary webhook integration |
| **#4853** — *Installing skills from `.well-known` URI* | ~113 days | Accepted, no movement | High — blocks skills ecosystem standardization |
| **#5316** — *SearXNG search support* | ~105 days | In-progress, sluggish | Medium — DuckDuckGo CAPTCHAs are a known pain point |
| **#6293** — *Air-gapped execution mode* (RFC) | ~77 days | Blocked | High — important for enterprise/secure deployments |
| **#7497** — *OCI-compliant plugin registries* (RFC) | ~37 days | Blocked | High — foundational for WASM plugin distribution |
| **#8424** — *Workspace-relative forbidden paths* (RFC) | ~21 days | Blocked, needs-author-action | High — security gap |
| **#8138** — *OpenRouter fallbacks* | ~27 days | Blocked | Medium — user-visible improvement |
| **#9127** — *KeySource trait* (RFC) | 1 day | Needs-author-action | High — foundational security |
| **PR #8576** — *STT env-var fallback* | ~18 days | Needs-author-action | Medium — blocks Telegram audio features |
| **PR #8443** — *Matrix progress drafts* | ~21 days | Needs-author-action | Medium — UX improvement |

**Immediate maintainer attention needed:**
- The **#2467** (Webhook transforms) and **#4853** (`.well-known` skills) issues have been languishing for over 3 months. These are foundational for ecosystem growth.
- **#8424** and **#9127** are security-critical RFCs that are blocked by author response.
- **PR #8576** (env-var fallback) is a relatively small fix that unblocks Telegram audio for many users.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*