# OpenClaw Ecosystem Digest 2026-07-07

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-07 03:36 UTC

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

# OpenClaw Project Digest — 2026-07-07

## 1. Today's Overview

OpenClaw is experiencing **extremely high activity**, with 500 issues and 500 PRs updated in the last 24 hours — an extraordinary volume indicating either a major release cycle, widespread community engagement, or automated triage activity. **403 open issues** and **302 open PRs** remain active. The project saw **198 merged/closed PRs** today, suggesting active maintenance and feature integration. However, no new releases were published today. The high proportion of open issues (80.6%) relative to closed ones warrants attention to resolution velocity.

## 2. Releases

**None.** No new releases were published on 2026-07-06 or 2026-07-07.

## 3. Project Progress

**198 PRs merged/closed today.** Notable merges and fixes include:

| PR | Title | Impact |
|----|-------|--------|
| [#97960](https://github.com/openclaw/openclaw/pull/97960) [CLOSED] | fix(telegram): honor inbound debounce for forwarded bursts | Improves Telegram reliability for forwarded message handling |
| [#97172](https://github.com/openclaw/openclaw/pull/97172) [CLOSED] | fix(auto-reply): gate restart silence on recovery ownership | Prevents incorrect "Gateway is restarting" messages during auto-reply recovery |
| [#100272](https://github.com/openclaw/openclaw/pull/100272) [CLOSED] | fix(agents): carry current-turn inbound metadata in a tail runtime-context message | Enables byte-stable prompt caching by separating conversational metadata |
| [#100233](https://github.com/openclaw/openclaw/pull/100233) [CLOSED] | fix(agents): send session_id affinity header to ChatGPT Responses backend | Fixes routing for ChatGPT Response API integration |
| [#93982](https://github.com/openclaw/openclaw/pull/93982) [CLOSED] | [codex] Soft-fail transient compaction spend backoff | Makes CLI transcript compaction resilient to transient rate limits |
| [#101127](https://github.com/openclaw/openclaw/pull/101127) [CLOSED] | feat(browser): pair the Chrome extension directly to a remote gateway | Enables cross-machine Chrome extension connectivity (addresses #53599) |
| [#68936](https://github.com/openclaw/openclaw/pull/68936) [CLOSED] | Autofix: add PR review autofix pipeline + Windows daemon | Adds automated PR review fix pipeline and Windows service |

**Key feature advances:**
- **WhatsApp phone-code login** ([#101294](https://github.com/openclaw/openclaw/pull/101294) OPEN) — new login flow for headless/remote environments
- **Native Signal reply quotes** ([#95718](https://github.com/openclaw/openclaw/pull/95718) OPEN) — preserves native quote context in Signal replies
- **Codex remote workspaces** ([#101326](https://github.com/openclaw/openclaw/pull/101326) OPEN) — allows running remote Codex workspaces without splitting app-server
- **LINE per-user in-flight guard** ([#101316](https://github.com/openclaw/openclaw/pull/101316) OPEN) — handles concurrent LINE message errors
- **i18n for dreaming journal** ([#101323](https://github.com/openclaw/openclaw/pull/101323) OPEN) — internationalization support for memory-core extension

## 4. Community Hot Topics

### Most Discussed Issues

| Issue | Comments | Reactions | Topic |
|-------|----------|-----------|-------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | **110** | 👍 **81** | Linux/Windows Clawdbot Apps (open since Jan 2026) |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 33 | 👍 1 | Text between tool calls leaks to messaging channels |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) [CLOSED] | 27 | 👍 4 | Prebuilt Android APK releases |
| [#98416](https://github.com/openclaw/openclaw/issues/98416) [CLOSED] | 20 | 👍 5 | Published dist missing reentrancy guard |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | 17 | 👍 0 | Signal daemon stop() race condition |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 17 | 👍 0 | Tiered bootstrap file loading |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | 14 | 👍 5 | Bootstrap files in agentDir silently ignored |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | 13 | 👍 **11** | Allow private network access for web_fetch |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 13 | 👍 1 | Multi-agent orchestration instability |
| [#63829](https://github.com/openclaw/openclaw/issues/63829) | 12 | 👍 9 | Per-agent memory-wiki vault configuration |

**Analysis of underlying needs:**

1. **Cross-platform expansion** — Issue [#75](https://github.com/openclaw/openclaw/issues/75) with 110 comments and 81 👍 reactions is the **most-wanted feature**: Linux and Windows apps to match macOS/iOS/Android. This signals strong demand for desktop OS parity.

2. **Security & UX boundaries** — Issues [#25592](https://github.com/openclaw/openclaw/issues/25592) (text between tool calls leaking to channels) and [#39604](https://github.com/openclaw/openclaw/issues/39604) (private network access control) both at "diamond lobster" severity indicate community concern around information disclosure boundaries.

3. **Multi-agent reliability** — Multiple issues ([#43367](https://github.com/openclaw/openclaw/issues/43367), [#63829](https://github.com/openclaw/openclaw/issues/63829), [#42475](https://github.com/openclaw/openclaw/issues/42475)) highlight that multi-agent orchestration remains unstable, with requests for per-agent isolation, cost budgets, and memory separation.

4. **Session state persistence** — Issues around bootstrap files ([#29387](https://github.com/openclaw/openclaw/issues/29387)), tiered loading ([#22438](https://github.com/openclaw/openclaw/issues/22438)), and memory preservation ([#40418](https://github.com/openclaw/openclaw/issues/40418)) show users need better context management across sessions.

5. **Channel-specific reliability** — Feishu ([#41744](https://github.com/openclaw/openclaw/issues/41744), [#34528](https://github.com/openclaw/openclaw/issues/34528)), Telegram ([#41165](https://github.com/openclaw/openclaw/issues/41165), [#40611](https://github.com/openclaw/openclaw/issues/40611)), and Signal ([#22676](https://github.com/openclaw/openclaw/issues/22676)) all have platform-specific bugs causing message loss or corruption.

### Most Active PRs Today

| PR | Status | Topic |
|----|--------|-------|
| [#101327](https://github.com/openclaw/openclaw/pull/101327) | OPEN | Fix Telegram reply ordering for active topic runs |
| [#101270](https://github.com/openclaw/openclaw/pull/101270) | OPEN | fix(infra): bound response body read in non-streaming fallback |
| [#101321](https://github.com/openclaw/openclaw/pull/101321) | OPEN | fix(android): send chat with hardware Enter |
| [#101294](https://github.com/openclaw/openclaw/pull/101294) | OPEN | feat: add WhatsApp phone-code login |
| [#101322](https://github.com/openclaw/openclaw/pull/101322) | OPEN | fix(memory): preserve archived sessions with cron-shaped user text |
| [#100550](https://github.com/openclaw/openclaw/pull/100550) | OPEN | fix(anthropic): wire buildModelFetch into github-copilot createClient branch |
| [#100916](https://github.com/openclaw/openclaw/pull/100916) | OPEN | fix(agents): route streamProxy request through fetchWithSsrFGuard |

## 5. Bugs & Stability

### Critical / P0 Issues

| Issue | Title | Severity | Has Fix PR? |
|-------|-------|----------|-------------|
| [#43661](https://github.com/openclaw/openclaw/issues/43661) | Session hangs indefinitely when compaction times out | **P0** - UX release blocker | Unknown |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) [CLOSED] | Prebuilt Android APK releases | **P0** - UX release blocker (now closed) | Unknown |

### P1 Issues (High Severity)

| Issue | Title | Impact | Has Fix PR? |
|-------|-------|--------|-------------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | Text between tool calls leaks to messaging channels | security, message-loss | PR [#100272](https://github.com/openclaw/openclaw/pull/100272) [CLOSED] may address |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal daemon stop() race condition | message-loss, crash-loop | Unknown |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | Multi-agent orchestration unstable | session-state, message-loss, auth-provider | Unknown |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | `exec` tool does not inherit env variables (regression) | security, auth-provider | Unknown |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | Bootstrap files in agentDir silently ignored | session-state, security | Unknown |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | "Cannot convert undefined or null to object" with google-vertex (regression) | auth-provider, crash-loop | Unknown |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | A2A sessions_send causes duplicate messages | session-state, message-loss | Unknown |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | Write tool lacks append mode — cron sessions destroy files | session-state, data-loss | Unknown |
| [#40611](https://github.com/openclaw/openclaw/issues/40611) | Heartbeat drift fix causes aggressive retry blocking Telegram | session-state, message-loss | Unknown |
| [#41165](https://github.com/openclaw/openclaw/issues/41165) | Telegram DMs still route to agent:main:main | session-state, message-loss | Unknown |

### Notable Regressions

- [#31583](https://github.com/openclaw/openclaw/issues/31583): `exec` tool environment variable inheritance broken
- [#38327](https://github.com/openclaw/openclaw/issues/38327): Google Vertex/Gemini provider crash (Cannot convert undefined or null to object)
- [#38439](https://github.com/openclaw/openclaw/issues/38439): Webchat avatar endpoint returns 404
- [#41201](https://github.com/openclaw/openclaw/issues/41201): Control UI Avatar not displaying (broken image)
- [#53599](https://github.com/openclaw/openclaw/issues/53599) [CLOSED]: Chrome extension browser relay removed with no cross-machine replacement
- [#43747](https://github.com/openclaw/openclaw/issues/43747): Memory management is in chaos — inconsistent behavior across users

### Fix PRs in Flight

- [#101270](https://github.com/openclaw/openclaw/pull/101270): Bound response body read in non-streaming fallback (OOM risk)
- [#101278](https://github.com/openclaw/openclaw/pull/101278): Enforce maxBytes in readResponseBodySnippet non-streaming fallback
- [#101252](https://github.com/openclaw/openclaw/pull/101252): Fix Signal debounce flush on reply session initialization conflict
- [#100377](https://github.com/openclaw/openclaw/pull/100377): Fix heartbeat wake-loop latency regression
- [#100550](https://github.com/openclaw/openclaw/pull/100550): Wire buildModelFetch into github-copilot createClient branch
- [#100592](https://github.com/openclaw/openclaw/pull/100592): Fix PDF analysis for plugin-provided and bundled-catalog models
- [#89040](https://github.com/openclaw/openclaw/pull/89040): Avoid event-loop stall during embedded_run bootstrap-context
- [#101272](https://github.com/openclaw/openclaw/pull/101272): Fix embedding retry with non-compliant self-hosted servers

## 6. Feature Requests & Roadmap Signals

### Highly Requested Features (by community engagement)

| Issue | Feature | 👍 | Likely Next Version? |
|-------|---------|----|---------------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | **81** | 🔮 **High** — most-wanted, 110 comments |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | Private network access for web_fetch | **11** | 🟡 Medium — security-sensitive |
| [#63829](https://github.com/openclaw/openclaw/issues/63829) | Per-agent memory-wiki vault configuration | **9** | 🟡 Medium — multi-agent need |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | MathJax/LaTeX support in Control UI | **9** | 🟢 **High** — UI enhancement, low complexity |
| [#20786](https://github.com/openclaw/openclaw/issues/20786) | Telegram Business Bot support | **6** | 🟡 Medium — platform expansion |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) | Keep workspaceAccess none workspaces writable | **7** | 🔮 **High** — sandbox usability blocker |
| [#27445](https://github.com/openclaw/openclaw/issues/27445) | announceTarget for sub-agent completion routing | **5** | 🟡 Medium — multi-agent workflow |

### Features in Active PRs (likely next version)

1. **WhatsApp phone-code login** ([#101294](https://github.com/openclaw/openclaw/pull/101294)) — headless/remote WhatsApp setup
2. **Native Signal reply quotes** ([#95718](https://github.com/openclaw/openclaw/pull/95718)) — Signal UX improvement
3. **Codex remote workspaces** ([#101326](https://github.com/openclaw/openclaw/pull/101326)) — enterprise deployment feature
4. **Chrome extension direct gateway pairing** ([#101127](https://github.com/openclaw/openclaw/pull/101127) [CLOSED]) — cross-machine browser integration
5. **LINE per-user in-flight guard** ([#101316](https://github.com/openclaw/openclaw/pull/101316)) — LINE channel reliability
6. **i18n for dreaming journal** ([#101323](https://github.com/openclaw/openclaw/pull/101323)) — localization for memory system
7. **Tiered bootstrap file loading** ([#22438](https://github.com/openclaw/openclaw/issues/22438)) — context window optimization

### Predicted Next Version Focus

Based on activity patterns, the **v2026.7.x** release will likely include:
- **Multi-agent stability fixes** (session-lock failures, concurrent config overwrites)
- **Channel reliability improvements** (Telegram, Signal, Feishu, LINE)
- **Sandbox and security hardening** (private network access, workspace writability)
- **Mobile app refinements** (Android hardware keyboard, gateway connection setup)
- **Performance optimization** (event-loop stall fixes, embedding retry improvements)

## 7. User Feedback Summary

### Pain Points

1. **Multi-agent unreliability** — Users report concurrent agent add/config overwrites, session-lock failures, and detached child work ([#43367](https://github.com/openclaw/openclaw/issues/43367)). This is a "diamond lobster" severity issue.

2. **Message leakage and corruption** — Text between tool calls leaks to messaging channels ([#25592](https://github.com/openclaw/openclaw/issues/25592)), media attachments are lost ([#40440](https://github.com/openclaw/openclaw/issues/40440), [#41744](https://github.com/openclaw/openclaw/issues/41744)), and tool outputs degrade to `(see attached image)` placeholders ([#96857](https://github.com/openclaw/openclaw/issues/96857)).

3. **Session state instability** — Users experience session hangs during compaction ([#43661](https://github.com/openclaw/openclaw/issues/43661)), heartbeat blocking Telegram ([#40611](https://github.com/openclaw/openclaw/issues/40611)), and memory management inconsistency across users ([#43747](https://github.com/openclaw/openclaw/issues/43747)).

4. **Missing platform parity** — Linux and Windows users cannot use Clawdbot apps ([#75](https://github.com/openclaw/openclaw/issues/75)), and Android users lack prebuilt APKs ([#9443](https://github.com/openclaw/openclaw/issues/9443) — now closed, likely resolved).

5. **Sandbox limitations** — Docker-based sandboxing cannot access workspace ([#31331](https://github.com/openclaw/openclaw/issues/31331)), and isolated workspaces are read-only ([#37634](https://github.com/openclaw/openclaw/issues/37634)).

### Positive Signals

- The **high PR throughput** (198 merged/closed today) shows maintainers are actively addressing issues.
- Cross-machine Chrome extension pairing ([#101127](https://github.com/openclaw/openclaw/pull/101127)) was merged, addressing a key regression ([#53599](https://github.com/openclaw/openclaw/issues/53599)).
- Android APK release issue [#9443](https://github.com/openclaw/openclaw/issues/9443) is now **closed**, suggesting prebuilt APKs may be available.

### Satisfaction Indicators

- Issues with high 👍 counts (like [#75](https://github.com/openclaw/openclaw/issues/75) with 81 👍) show strong community alignment on priorities.
- The "diamond lobster" severity rating on most P1 issues indicates the community's structured triage system is functioning.
- **81% of issues remain open**, which could indicate either triage backlog or active discussion.

## 8. Backlog Watch

### Issues Needing Maintainer Attention (long-open, high severity)

| Issue | Created | Days Open | Priority | Notes |
|-------|---------|-----------|----------|-------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | **188 days** | P2 (enhancement) | Most-wanted feature, 110 comments, still needs product decision |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 2026-02-24 | **134 days** | P1 | Message leakage — needs security review + product decision |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | 2026-02-21 | **137 days** | P1 | Signal crash-loop — has linked open PR |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 2026-02-21 | **137 days** | P2 | Tiered bootstrap loading — needs maintainer review + product decision |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | 2026-02-28 | **130 days** | P1 | Bootstrap files silently ignored — needs maintainer review |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | 2026-03-08 | **122 days** | P2 | Private network access — 11 👍, needs product decision |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 2026-03-11 | **119 days** | P1 | Multi-agent orchestration unstable — needs maintainer review |
| [#43661](https://github.com/openclaw/openclaw/issues/43661) | 2026-03-12 | **118 days** | **P0** | Session hangs — UX release blocker, needs live repro |

### Stale Issues (tagged `stale` but unresolved)

| Issue | Created | Notes |
|-------|---------|-------|
| [#41744](https://github.com/openclaw/openclaw/issues/41744) | 2026-03-10 | Feishu read image tool loses media |
| [#87318](https://github.com/openclaw/openclaw/issues/87318) | 2026-05-27 | Amazon Bedrock Haiku 4.5 inference profile not supported |

### PRs Stuck in Review

| PR | Status | Days Open | Needs |
|----|--------|-----------|-------|
| [#95718](https://github.com/openclaw/openclaw/pull/95718) | OPEN | **16 days** | Maintainer look — "ready for maintainer look" |
| [#89040](https://github.com/openclaw/openclaw/pull/89040) | OPEN | **37 days** | Event-loop stall fix — P1, no status update |
| [#100377](https://github.com/openclaw/openclaw/pull/100377) | OPEN | **2 days** | "waiting on author" — heartbeat latency fix |
| [#100550](https://github.com/openclaw/openclaw/pull/100550) | OPEN | **2 days** | "ready for maintainer look" — anthropic provider fix |
| [#101272](https://github.com/openclaw/openclaw/pull/101272) | OPEN | **1 day** | "waiting on author" — embedding retry fix |

### Risk Watch

Several **P1 issues with "diamond lobster" rating** have been open for 120+ days without resolution:
- [#25592](https://github.com/openclaw/openclaw/issues/25592) (134d) — message leakage
- [#22676](https://github.com/openclaw/openclaw/issues/22676) (137d) — Signal crash-loop
- [#29387](https://github.com/openclaw/openclaw/issues/29387) (130d) — bootstrap file bug
- [#43367](https://github.com/openclaw/openclaw/issues/43367) (119d) — multi-agent instability

These represent **accumulated technical debt** that could affect user trust if not addressed in the next release.

---

*Generated 2026-07-07 from openclaw/openclaw GitHub data. All links: https://github.com/openclaw/openclaw/issues/NNNNN or /pull/NNNNN.*

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report — 2026-07-07

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing a **polarized development cycle**: flagship projects like OpenClaw and ZeroClaw sustain massive daily throughput (500+ PRs updated), while smaller projects like TinyClaw and NullClaw show negligible activity. A clear **stabilization-and-hardening phase** is underway—projects are prioritizing security audits, multi-agent reliability, production-grade provider integration, and cross-platform parity over novel feature experimentation. Community feedback consistently highlights **silent failures, session state corruption, and MCP tool visibility gaps** as the most pressing pain points, signaling that the ecosystem is maturing from proof-of-concept to production deployment for power users. The competitive landscape is consolidating around a **Rust-based core architecture** (OpenClaw, ZeroClaw, NullClaw, PicoClaw) versus **Python-based implementations** (Hermes Agent, NanoBot, CoPaw, LobsterAI), with the Rust cluster generally showing higher activity and broader community contribution velocity.

## 2. Activity Comparison

| Project | Language | Issues (24h) | PRs (24h) | PRs Merged (24h) | Last Release | Health Score |
|---------|----------|-------------|-----------|-------------------|--------------|--------------|
| **OpenClaw** | Rust | 500 updated | 500 updated | 198 merged | Unknown | 🟢 Excellent |
| **ZeroClaw** | Rust | 50 updated | 50 updated | 5 merged | v0.8.x track | 🟢 High |
| **NanoBot** | Python | 46 updated | 500 updated | 9 merged | Unknown | 🟢 High |
| **Hermes Agent** | Python | 50 updated | 50 updated | 5 merged | v0.18.0 | 🟡 Moderate |
| **CoPaw** | Python | 32 updated | 49 updated | 21 merged | v1.1.12.post3 | 🟢 High |
| **IronClaw** | Rust | 41 updated | 50 updated | 16 merged | v0.29.1 pending | 🟢 High |
| **LobsterAI** | Python | 0 updated | 12 updated | 11 merged | Unknown | 🟢 Moderate |
| **PicoClaw** | Rust | 4 updated | 5 updated | 1 merged | Unknown | 🟡 Moderate |
| **NanoClaw** | Python | 3 updated | 11 updated | 3 merged | Unknown | 🟡 Moderate |
| **Moltis** | Rust | 0 updated | 5 updated | 3 merged | Unknown | 🟢 Low |
| **Nullable** | Rust | 0 updated | 1 updated | 0 merged | Unknown | 🟢 Low |
| **TinyClaw** | Python | 0 updated | 0 updated | 0 merged | Unknown | ⚪ Inactive |
| **ZeptoClaw** | Unknown | 0 updated | 0 updated | 0 merged | Unknown | ⚪ Inactive |

> **Health Score Key:** 🟢 Excellent (high engagement, active merging, low bug debt) | 🟢 High (strong throughput, reasonable closure rate) | 🟡 Moderate (active but with bottlenecks) | ⚪ Inactive (no observable activity)

## 3. OpenClaw's Position

**Advantages over peers:**
- **Unmatched community scale:** OpenClaw's 500 issue/PR updates in 24 hours exceeds the combined activity of all other tracked projects—by nearly 5x. This reflects either an enormous user base or automated triage systems; either way, the engagement signal dominates the ecosystem.
- **Extreme merging velocity:** 198 PRs merged/closed per day is an order of magnitude higher than any peer (next closest: CoPaw at 21, IronClaw at 16). This suggests either a very large maintainer team, automated merging pipelines, or low review standards.
- **Broadest channel support:** Active PRs for WhatsApp, Signal, LINE, Telegram, Feishu—OpenClaw targets the widest surface area for communication integration.
- **Cross-machine Chrome extension support** (PR #101127) is a unique mobility feature absent in peers.

**Technical approach differences:**
- OpenClaw's **"diamond lobster" severity-triage system** is more structured than any peer's classification (most peers use simple P0–P3 labeling).
- The 81% open issue ratio (403 open vs 97 closed) is unusually high—other high-activity projects like IronClaw (34 open vs 7 closed) maintain a healthier 83% closure rate. This may indicate OpenClaw is accumulating bug debt at a faster rate than it resolves.
- Rust-based core with Python scripting layer—shared with ZeroClaw, NullClaw, and PicoClaw but distinct from the all-Python Hermes Agent / NanoBot / CoPaw cluster.

**Community size comparison:**
- OpenClaw's top issue (#75) has 110 comments and 81 👍, far exceeding Hermes Agent's #527 (11 comments, 6 👍) or ZeroClaw's #8193 (16 comments). This suggests 5-10x the engaged user base of the next largest project.
- However, the effect might be inflated by automated bot activity—500 issues updated in 24 hours is anomalous and merits scrutiny.

## 4. Shared Technical Focus Areas

The following requirements emerged **across multiple projects simultaneously**, indicating ecosystem-level priorities:

| Focus Area | Projects Affected | Specific Needs |
|------------|------------------|----------------|
| **Multi-agent orchestration stability** | OpenClaw, Hermes Agent, ZeroClaw | Session-lock failures, concurrent config overwrites, detached child work, inter-agent message routing |
| **MCP tool visibility & reliability** | ZeroClaw, CoPaw, NanoClaw | Tools connected but invisible in UI; silent MCP server failures; stale transport config |
| **Memory & context management** | OpenClaw, Hermes Agent, CoPaw, NanoBot | Session corruption, compaction crashes, anchor protection missing, memory search breaking providers |
| **Cross-platform desktop parity** | OpenClaw, Hermes Agent, ZeroClaw, NanoBot | Linux/Windows apps, Windows process management, macOS privacy descriptors, NixOS compat |
| **Provider interoperability** | OpenClaw, Hermes Agent, NanoBot, CoPaw | OpenAI-compatible protocol gaps, non-standard tool-call parsing, strict schema 400 errors |
| **Security hardening** | NanoBot, ZeroClaw, Hermes Agent | API key plaintext storage, TOCTOU symlink races, SSRF DNS pinning, credential fallback consistency |
| **Channel-specific reliability** | OpenClaw, CoPaw, ZeroClaw, Hermes Agent | Telegram/Feshu/Line/Signal message loss, heartbeat blocking, reply ordering |
| **Context compression safety** | CoPaw, OpenClaw, Hermes Agent | Critical message truncation, metadata stripping, JSON Schema violations causing crashes |

## 5. Differentiation Analysis

| Dimension | Rust Cluster (OpenClaw, ZeroClaw, NullClaw, PicoClaw) | Python Cluster (Hermes Agent, NanoBot, CoPaw, LobsterAI) |
|-----------|------------------------------------------------------|----------------------------------------------------|
| **Core philosophy** | Performance-first, self-hosted, CLI-heavy | Accessibility-first, GUI-rich, managed-cloud option |
| **Target user** | Infrastructure engineers, homelab enthusiasts, power users | Power users, team deployments, enterprise pilots |
| **Channel breadth** | Very wide (15+ channels each) | Moderate (5-8 channels each) |
| **Provider integration** | Provider-agnostic, strict protocol compliance | Provider-specific optimizations, broader model support |
| **Security posture** | Lower—many open vulnerabilities (NanoBot audit found 35+ issues) | Mixed—some projects have formal security policies, others don't |
| **UI maturity** | TUI-focused (ZeroClaw), CLI with optional web (OpenClaw) | Rich web UI (Hermes Agent), desktop apps (LobsterAI), mobile focus |
| **Community governance** | Informal, contributor-led | More structured (CoPaw v2.0.0 tracker, Hermes Agent milestones) |

**Key differentiators per project:**
- **OpenClaw:** Docker-style "one tool for everything" ambition—broadest platform coverage, highest bug volume.
- **ZeroClaw:** Most actively developing new features (goal mode, realtime voice, OpenAI adapter)—closest to a "v2.0" transition.
- **Hermes Agent:** Strongest focus on multi-profile isolation and RBAC—targeting team/enterprise deployments.
- **CoPaw:** Most mature mobile offering and Chinese-language ecosystem (Feishu, QQ).
- **NanoBot:** Deepest recent security audit—35 findings driving a hardening sprint.
- **LobsterAI:** Most polished consumer UX—Electron desktop app with Cowork features.

## 6. Community Momentum & Maturity

**Tier 1: Rapidly Iterating (Very High Activity)**
- **OpenClaw** — Dominates by raw volume but carries significant bug debt (81% open issues). The "v2026.7.x" cycle appears to be a major feature dump rather than a stabilization release.
- **ZeroClaw** — Highest sustained feature velocity among Rust projects. Goal mode and realtime voice are transformative features entering review.
- **CoPaw** — Strong Chinese-language ecosystem with active v2.0.0 pre-release testing. Highest PR merge rate (21/day) after OpenClaw.
- **IronClaw** — High-velocity stabilization phase with emphasis on integration testing and performance auditing. Breaking API changes signal maturity.

**Tier 2: Active but Consolidating (Moderate-High Activity)**
- **NanoBot** — Released from a major security audit (35 findings); now pulling fixes into review. Next release will be security-focused.
- **Hermes Agent** — Multi-profile and cross-platform bugs are the dominant theme. Appears to be struggling with architectural complexity from supporting too many platforms simultaneously.
- **LobsterAI** — Rapid feature merging (11 PRs) but zero issue engagement, suggesting internal development rather than community-driven iteration.

**Tier 3: Stable/Low Activity**
- **PicoClaw, NanoClaw, Moltis** — Low but nonzero activity. These appear to be niche derivatives or experimental forks rather than independently active projects.
- **NullClaw, TinyClaw, ZeptoClaw** — For all practical purposes, dormant. These projects show no evidence of active development or community engagement.

## 7. Trend Signals

**For AI agent developers, the following industry trends emerge from community feedback:**

1. **MCP integration is table stakes but broken everywhere** — ZeroClaw (#8193), CoPaw (#5757), and NanoClaw (#2968) all report MCP connectivity issues. Developers building agent platforms must treat MCP reliability as a **critical path dependency**, not an optional feature. Silent MCP failures (tools not propagating to UI, servers crashing without alerts) are eroding trust.

2. **Multi-agent orchestration is the next frontier** — OpenClaw (#43367), Hermes Agent (#50530), and ZeroClaw (#8681) all have active work on inter-agent communication. The pattern is clear: single-agent assistants are commoditized, and the competitive advantage lies in **reliable multi-agent coordination with session isolation**.

3. **Security is becoming a gating factor for production deployment** — NanoBot's 35-finding audit, Hermes Agent's cross-profile data leaks (#52401, #47475), and ZeroClaw's cargo-advisory CI failures (#8519) all point to a reckoning: these projects were built for speed, not security. Expect a wave of security-focused releases in Q3 2026.

4. **Platform-native apps are non-negotiable for mainstream adoption** — OpenClaw's #75 (110 comments, 81 👍) is the single most upvoted feature across the entire ecosystem. Users demand Linux, Windows, macOS, Android, and iOS apps as first-class citizens. CLI-only and web-only projects are limiting their addressable market.

5. **Provider interoperability is fragile** — NanoBot (#4061), Hermes Agent (#59386), and CoPaw (#5789) all struggle with non-OpenAI providers that deviate from the OpenAI-compatible schema. The ecosystem needs a **provider-agnostic tool-call serialization standard**—currently every project implements its own fragile workaround.

6. **Memory/context management is the #1 reliability concern** — Across OpenClaw, CoPaw, and Hermes Agent, users report session corruption, compaction crashes, and critical message truncation. Context management is no longer a "nice to have" optimization—it is a **foundational reliability requirement** for any agent that operates beyond single-turn interactions.

7. **Cost transparency is emergent** — OpenClaw (heartbeat toggle in PR #2278) and NanoBot (rate-limit headers in #7489) show users demanding granular control over API costs. The "always-on" agent model is being challenged by cost-aware users who want configurability per-channel, per-agent, and per-task.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-07

## Today's Overview

NanoBot is in a period of intense maintenance and security-focused activity. The last 24 hours saw **46 issues updated** (38 open, 8 closed) and a staggering **500 pull requests updated** (491 open, 9 merged/closed). The project's pulse is dominated by a comprehensive deep code audit by contributor `hamb1y`, who submitted **35 security, bug, and refactoring findings** across the codebase. No new releases were published. The volume of open PRs (491) suggests a significant backlog of pending contributions, potentially indicating maintainer bandwidth constraints or a deliberate staging process before a major version release.

## Releases

No new releases were published in the reporting period.

## Project Progress

**Merged/Closed PRs (9 total):** Notable closures include:
- [#1290](https://github.com/HKUDS/nanobot/pull/1290) — `fix(heartbeat): restore HEARTBEAT_OK_TOKEN and legacy callback support` (closed)
- [#2060](https://github.com/HKUDS/nanobot/pull/2060) — `feat: shell tool: allow configurable specific paths when restrict_to_workspace=True` (closed)
- [#4459](https://github.com/HKUDS/nanobot/pull/4459) — `feat: add Mattermost channel support` (closed) — New channel integration
- [#4654](https://github.com/HKUDS/nanobot/pull/4654) — `fix(cli): print response text when streaming fails in interactive mode` (closed)
- [#4673](https://github.com/HKUDS/nanobot/pull/4673) — `fix(dream): ground memory audit records in the real git diff` (closed)
- [#4818](https://github.com/HKUDS/nanobot/pull/4818) — `fix(runtime): guard web_fetch signature against None URL` (closed)

**Features advanced:** The Mattermost channel (#4459) is the primary feature merged. Several bug-fix PRs targeting audit findings from the same contributor have been opened but remain in review status (see Bugs & Stability).

## Community Hot Topics

**Most Active Issue:**
- [#4061](https://github.com/HKUDS/nanobot/issues/4061) — *Bug: OpenAI-compatible text-format tool calls are not parsed into structured tool calls* (6 comments, CLOSED). This long-running issue reflects a core interoperability gap: non-standard OpenAI-compatible providers that return tool calls as text markup. The underlying need is for **provider-agnostic tool call parsing** — a feature critical for NanoBot's value proposition as a universal agent framework.

**Comprehensive Audit Mega-Issue:**
- [#4815](https://github.com/HKUDS/nanobot/issues/4815) — *Audit summary: 35 security/bug/refactor findings from deep code audit* (0 comments, OPEN). This single issue by `hamb1y` aggregates the week's most significant work. While it has no comments, it has spawned numerous downstream fix PRs (see below), indicating it is driving active development despite no visible discussion.

**Other Active Items:**
- [#4511](https://github.com/HKUDS/nanobot/issues/4511) — *Windows gateway --background restart inconsistency* (4 comments, CLOSED) — Windows process management pain point.
- [#4544](https://github.com/HKUDS/nanobot/issues/4544) — *Windows exec uses cmd.exe vs PowerShell inconsistently* (3 comments, CLOSED) — Cross-platform shell compatibility.
- [#4614](https://github.com/HKUDS/nanobot/pull/4614) — *feat(cli): support multiline input via Shift+Enter/Alt+Enter* — Popular UX enhancement for interactive mode.

## Bugs & Stability

A massive wave of bug reports emerged from the deep code audit. Ranked by severity:

**Critical / Security Vulnerabilities:**
| Issue | Summary | Fix PR |
|-------|---------|--------|
| [#4796](https://github.com/HKUDS/nanobot/issues/4796) | `restrict_to_workspace` defaults to `False` — full filesystem exposed | None |
| [#4803](https://github.com/HKUDS/nanobot/issues/4803) | API keys stored as plaintext in `~/.nanobot/config.json` (missing `exclude=True`) | None |
| [#4790](https://github.com/HKUDS/nanobot/issues/4790) | Symlink TOCTOU in filesystem tools — resolve-then-access race window | None |
| [#4797](https://github.com/HKUDS/nanobot/issues/4797) | No resource limits on shell subprocesses (no ulimit/cgroups) | None |
| [#4791](https://github.com/HKUDS/nanobot/issues/4791) | No channel-level message rate limiting — DoS vector | None |

**High Severity Bugs:**
- [#4802](https://github.com/HKUDS/nanobot/issues/4802) — Token budget returns spurious 128 when context window is disabled (0) — Fix PR [#4817](https://github.com/HKUDS/nanobot/pull/4817) in review
- [#4805](https://github.com/HKUDS/nanobot/issues/4805) — `suppress(Exception)` on `prepare_call` silently swallows tool validation errors — Fix PR [#4811](https://github.com/HKUDS/nanobot/pull/4811) in review
- [#4795](https://github.com/HKUDS/nanobot/issues/4795) — Streaming LLM calls bypass wall-clock timeout entirely (runs indefinitely)
- [#4793](https://github.com/HKUDS/nanobot/issues/4793) — Global `ExecSessionManager` singleton shared across all agent loops — cross-session data leak
- [#4792](https://github.com/HKUDS/nanobot/issues/4792) — `/stop` silently discards pending queue messages — permanent message loss
- [#4794](https://github.com/HKUDS/nanobot/issues/4794) — Exec sessions have no shutdown cleanup — child processes become orphans
- [#4804](https://github.com/HKUDS/nanobot/issues/4804) — Leaked `CancelledError` silently swallowed in main agent loop — Fix PR [#4814](https://github.com/HKUDS/nanobot/pull/4814) in review

**Medium/Low Severity:**
- [#4799](https://github.com/HKUDS/nanobot/issues/4799) — External lookup signature creates false entry for `None` URLs — Fix PR [#4820](https://github.com/HKUDS/nanobot/pull/4820) in review
- [#4800](https://github.com/HKUDS/nanobot/issues/4800) — `.strip()` on potentially list-form `msg.content` crashes on multimodal messages — Fix PR [#4813](https://github.com/HKUDS/nanobot/pull/4813) in review
- [#4801](https://github.com/HKUDS/nanobot/issues/4801) — Unprotected `message['role']` dict access — `KeyError` on malformed session entries
- [#4655](https://github.com/HKUDS/nanobot/issues/4655) — Long goals fail with `File not found: skills/long-goal/SKILL.md` (system prompt references missing file)

## Feature Requests & Roadmap Signals

**User-Requested Features:**
- [#4619](https://github.com/HKUDS/nanobot/issues/4619) (CLOSED) — Feishu channel enhancement: use `system` message type for `/new` session visual separator. Low effort, high UX impact — likely to land in next minor release.
- [#4614](https://github.com/HKUDS/nanobot/pull/4614) (OPEN) — CLI multiline input support via Shift+Enter. Popular PR, strong user demand for interactive use.
- [#4689](https://github.com/HKUDS/nanobot/pull/4689) (OPEN) — OAuth status and token expiry warnings across CLI/WebUI. Addresses provider reliability pain point.

**Predictions for Next Version (v0.2.3 or v0.3.0):** The audit findings will likely trigger a **security-focused patch release** before any feature release. Key candidates: filesystem containment fixes (`restrict_to_workspace` default change), API key encryption, resource limits on subprocesses, and executor session isolation. The Mattermost channel integration (#4459) and CLI multiline (#4614) are the most mature feature candidates.

## User Feedback Summary

**Pain Points:**
1. **Windows inconsistencies** (#4511, #4544) — Gateway process management and shell selection are broken on Windows, frustrating a nontrivial user segment.
2. **Long message formatting** (#4637) — Telegram channel splits long markdown messages incorrectly, with only the final trunk rendering. Impacting agent-to-user communication reliability.
3. **Python SDK fails immediately** (#4765, CLOSED) — The documented Python API example throws an error, despite the web UI working correctly. This erodes developer onboarding confidence.
4. **Long-goal execution broken** (#4655) — System prompt references a non-existent skill file (`SKILL.md`), causing multi-step goals to fail consistently. This is a regression or incomplete migration.
5. **Tool call parsing from alternative providers** (#4061) — Users integrating with non-OpenAI-vendors face broken tool dispatch, limiting the project's interoperability promise.

**Satisfaction Signal:** Despite the bug volume, the community is actively contributing fix PRs (500 updates in 24h), suggesting a healthy, engaged contributor base that trusts the project's trajectory.

## Backlog Watch

**Long-Unanswered Issues Requiring Maintainer Attention:**

| Issue | Age | Summary | Risk |
|-------|-----|---------|------|
| [#4068](https://github.com/HKUDS/nanobot/issues/4068) | 39 days | Matrix stream buffer keyed only by `chat_id`, not `stream_id` — overlapping streams corrupt | **Medium** — Affected users have no workaround |
| [#4061](https://github.com/HKUDS/nanobot/issues/4061) | 39 days | Text-format tool calls from non-OpenAI providers not parsed | **High** — Blocks interop with many commercial LLM APIs |
| [#4637](https://github.com/HKUDS/nanobot/issues/4637) | 6 days | Telegram long message split rendering failure | **Medium** — Affects all Telegram users with verbose agents |
| [#4671](https://github.com/HKUDS/nanobot/pull/4671) | 5 days | SSRF DNS pinning fix — security PR pending review | **Critical** — Security patch awaiting maintainer sign-off |
| [#4765](https://github.com/HKUDS/nanobot/issues/4765) | 1 day (CLOSED) | Python SDK broken out of box | **High** — Docs/onboarding broken, but closed without visible resolution path |

**Notable:** The 491 open PRs represent a significant review queue. Several security-fix PRs (#4671, #4811, #4814, #4816, #4820) have been submitted but none merged yet, indicating a bottleneck at the review/merge stage. The project could benefit from dedicated maintainer time to triage this backlog, particularly the security-critical items.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-07

## 1. Today's Overview

The Hermes Agent project is experiencing a surge of activity with **50 issues and 50 PRs updated in the last 24 hours**, driven by a wave of community contributions and critical bug triage. While no new releases were published today, the project saw **7 issues closed** and **5 PRs merged**, primarily focused on cross-profile data leak fixes, Docker CI reliability for fork contributions, and desktop platform compatibility. The backlog remains heavy with **43 open issues** and **45 open PRs**, many of which involve long-standing feature requests that lack maintainer engagement signals. A notable trend is the density of bugs involving session state corruption, credential leakage across profiles, and platform-specific regressions—indicating that Hermes Agent's growing complexity is straining its multi-profile and multi-platform architecture.

## 2. Releases

**No new releases published today.** The last known version is v0.18.0, referenced in multiple issue reports as the affected release.

## 3. Project Progress

Five PRs were **merged/closed** today, addressing several priority issues:

- **[PR #54725](https://github.com/NousResearch/hermes-agent/pull/54725) (closed)** — fixed the arm64 Docker cache export denial on fork PRs, unblocking community contributions.
- **[PR #54892](https://github.com/NousResearch/hermes-agent/pull/54892) (closed)** — gated arm64 Docker build-cache write to push/release events only, a different approach to the same CI failure.
- **[PR #54726](https://github.com/NousResearch/hermes-agent/pull/54726) (closed)** — third concurrent fix for the same arm64 CI issue, switching to ignoring cache-to errors on forks.
- **[PR #53427](https://github.com/NousResearch/hermes-agent/pull/53427) (closed)** — skipped arm64 registry cache export on pull_request builds entirely.
- **[PR #68](https://github.com/NousResearch/hermes-agent/pull/68) (closed)** — fixed false positives in recursive delete detection regex (`rm` commands with filenames starting with 'r' were incorrectly flagged).

**Notable:** The three nearly identical arm64 CI fixes (PRs #54725, #54726, #53427) were all from different contributors and all resolved the same root problem—suggesting effective community duplication but also a lack of coordinated maintainer guidance.

## 4. Community Hot Topics

The most active discussions today reveal three pain points clusters:

**Gateway Permission Tiers — Most commented issue**
- **[Issue #527](https://github.com/NousResearch/hermes-agent/issues/527)** (11 comments, 6 👍) — Feature request for RBAC (Owner/Admin/User/Guest) across messenger gateways. The community strongly supports moving beyond the current binary auth model, which blocks useful delegation patterns like shared family/managed devices.

**Photon iMessage Stream Death — Critical operational bug**
- **[Issue #55416](https://github.com/NousResearch/hermes-agent/issues/55416)** (6 comments, 0 👍) — Persistent gRPC RST_STREAM error on free shared iMessage lines. The sidecar process stays alive but the stream dies repeatedly after ~90 seconds, with no resolution path. This affects a core communication channel.

**LLM Backend Schema Incompatibility — Developer frustration**
- **[Issue #59386](https://github.com/NousResearch/hermes-agent/issues/59386)** (5 comments, 0 👍) — `delegate_task` function schema causes HTTP 400 on strict OpenAI-compatible proxies, killing sessions irrecoverably. Users report this makes Hermes incompatible with self-hosted or intermediate API proxies.

**Google-Antigravity (Gemini) Integration Regressions**
- **[Issue #50530](https://github.com/NousResearch/hermes-agent/issues/50530)** (5 comments, 0 👍) — Three P2-level bugs surfaced after a connectivity fix: sub-agent crashes, forced re-authentication, and unrecoverable session breaks. This is a high-urgency provider-specific stability crisis.

**WhatsApp Bridge Startup Failure**
- **[Issue #14980](https://github.com/NousResearch/hermes-agent/issues/14980)** (5 comments, 3 👍) — Hardcoded 60s npm install timeout fails on slower systems (Unraid, NAS). Users want configurable timeouts or retry logic.

## 5. Bugs & Stability

Today's reports surface several significant stability and data integrity bugs:

**Critical Severity (P1):**

- **[Issue #59202](https://github.com/NousResearch/hermes-agent/issues/59202) (CLOSED)** — Telegram gateway `connect()` hangs indefinitely on first boot; 30s `asyncio.wait_for` timeout never fires. Fix appears to have been merged today.

**High Severity (P2):**

- **[Issue #59386](https://github.com/NousResearch/hermes-agent/issues/59386)** — `delegate_task` schema causes non-retryable HTTP 400 on strict OpenAI-compatible backends. **No fix PR yet.**
- **[Issue #50530](https://github.com/NousResearch/hermes-agent/issues/50530)** — Three Gemini provider regressions after connectivity fix: sub-agent crashes, auth loop, session breaks. **No fix PR.**
- **[Issue #59305](https://github.com/NousResearch/hermes-agent/issues/59305)** — Desktop chat tab messages leak across sessions—cross-tab content mixing corrupts conversation context. **Needs repro; no fix PR.**
- **[Issue #58498](https://github.com/NousResearch/hermes-agent/issues/58498)** — Desktop ignores OpenAI Codex provider, routes GPT-5.5 through Nous Portal while CLI works correctly. **No fix PR.**
- **[Issue #52401](https://github.com/NousResearch/hermes-agent/issues/52401)** — Desktop macOS: non-default profile shows sessions/cron jobs from default profile—cross-profile data leak in UI. **No fix PR.**
- **[Issue #47475](https://github.com/NousResearch/hermes-agent/issues/47475)** — Messages leaking between conversation sessions, affecting multiple providers. **Needs repro; no fix PR.**
- **[Issue #44299](https://github.com/NousResearch/hermes-agent/issues/44299)** — `auxiliary.vision` explicit config blocks native vision for providers that support it (Xiaomi MiMo). **No fix PR.**
- **[Issue #40069](https://github.com/NousResearch/hermes-agent/issues/40069) (CLOSED)** — Desktop OAuth settings save failure (`ERR_INVALID_ARGUMENT` from manual Content-Length on Electron). Closed today.

**Medium Severity (P3):**

- **[Issue #59896](https://github.com/NousResearch/hermes-agent/issues/59896)** — `DaemonThreadPoolExecutor` breaks on Python 3.14 (AttributeError from internal API change). **No fix PR.**
- **[Issue #59946](https://github.com/NousResearch/hermes-agent/issues/59946)** — `/journey` command crashes when skill frontmatter has `metadata: null` (NoneType error). **No fix PR.**
- **[Issue #59890](https://github.com/NousResearch/hermes-agent/issues/59890)** — Kanban task event notifications never delivered (18 subscriptions, 29 events, 0 deliveries). **No fix PR.**
- **[Issue #59762](https://github.com/NousResearch/hermes-agent/issues/59762)** — `kanban_complete` goal-mode judge gate never rejects due to tuple unpack bug caught by fail-open handler. **No fix PR.**

**Incoming fixes today (new open PRs):**

- **[PR #59951](https://github.com/NousResearch/hermes-agent/pull/59951)** — Enable Windows Virtual Terminal Processing for ANSI color support (fixes CLI readability on Windows).
- **[PR #59950](https://github.com/NousResearch/hermes-agent/pull/59950)** — Add macOS privacy usage descriptions for Contacts access (fixes denied contacts tool access).
- **[PR #59956](https://github.com/NousResearch/hermes-agent/pull/59956)** — Fix dashboard session API endpoints ignoring `--open-profile` scope (fixes cross-profile data exposure).
- **[PR #59954](https://github.com/NousResearch/hermes-agent/pull/59954)** — Add `return_exceptions=True` to `asyncio.gather` in context reference expansion (prevents single reference failure from crashing entire turn).
- **[PR #59674](https://github.com/NousResearch/hermes-agent/pull/59674)** — Replace `os.getenv()` with `get_secret()` for WeChat token to prevent cross-profile credential leakage.

## 6. Feature Requests & Roadmap Signals

Several feature requests with high community engagement point toward the next release's likely focus areas:

**Advanced Permission Systems (Ready to implement)**
- **[Issue #527](https://github.com/NousResearch/hermes-agent/issues/527)** — RBAC for messenger gateways. With 6 👍 and an active discussion, this is the most-requested feature. Likely target: v0.19.0.

**Memory Architecture Improvements (Multiple competing proposals)**
- **[Issue #59576](https://github.com/NousResearch/hermes-agent/issues/59576)** — Progressive Disclosure Memory Architecture (three-tier relevance-based injection). Created today, 0 comments, but addresses a core complaint about flat memory injection.
- **[Issue #25061](https://github.com/NousResearch/hermes-agent/issues/25061)** — Pre-turn memory health hook to enforce compaction rules (LLM consistently ignores standing instructions). 3 comments, 0 👍.
- **[Issue #37338](https://github.com/NousResearch/hermes-agent/issues/37338)** — Skill metadata audit identified broken references and stale names—signals need for tooling.

**Developer & Platform Experience**
- **[Issue #7489](https://github.com/NousResearch/hermes-agent/issues/7489)** — RPM-based pre-emptive throttling using `x-ratelimit` headers. 5 👍, moderate design discussion. Would significantly improve provider rate-limit handling.
- **[Issue #47652](https://github.com/NousResearch/hermes-agent/issues/47652)** — Integrate Perseus as a live context resolution engine for dynamic instruction resolution.
- **[Issue #43409](https://github.com/NousResearch/hermes-agent/issues/43409)** — `/model` picker should list `custom_providers` models.
- **[Issue #37352](https://github.com/NousResearch/hermes-agent/issues/37352)** — `hermes skills lint` CLI command for SKILL.md validation.
- **[Issue #12232](https://github.com/NousResearch/hermes-agent/issues/12232)** — Support separate IMAP username (not just email). Simple env var addition.

**Prediction:** v0.19.0 will likely include RBAC for gateways, a memory optimization feature (probably health hooks or progressive disclosure), and several of the smaller feature requests (IMAP username, `/model` picker expansion, skills lint).

## 7. User Feedback Summary

**Satisfaction highlights:**
- Community contributed 5 PRs today fixing CI and cross-platform issues—indicating an engaged and capable contributor base.
- The three concurrent arm64 Docker fixes (all accepted) show contributors are willing to invest in project infrastructure.

**Pain points (reported issues as proxies for user sentiment):**

| Pain Point | Frequency | Severity | User Impact |
|------------|-----------|----------|-------------|
| Cross-profile data leaks (sessions, messages, credentials) | 4 issues today (#52401, #59305, #47475, #59674) | High | Privacy violation; users cannot trust profile isolation |
| Provider-specific regressions (Gemini, OpenAI Codex, iMessage) | 3 issues today (#50530, #58498, #55416) | High | Core functionality broken for specific provider users |
| Session state corruption / message mixing | 2 issues today (#59305, #47475) | High | Conversation history corrupted; context lost |
| Platform-specific failures (Windows, macOS, Docker) | 3 issues today (#14980, #59896, #59950) | Medium | Exclusionary for non-Linux users |
| Missing rate-limit / throttle handling | 1 issue (#7489) | Low (feature) | Repeated 429 errors degrade experience |
| No RBAC for shared deployments | 1 issue (#527) | Low (feature) | Family/team use cases blocked |

**User profile insight:** The majority of complaints come from power users running multi-profile setups (several profiles, multiple platforms, custom provider backends). Single-profile or default users see fewer issues, suggesting that Hermes Agent's multi-profile architecture needs dedicated stability investment.

## 8. Backlog Watch

The following high-signal issues and PRs have been **waiting for maintainer response for an extended period** and may be blocking community progress:

**Issues Needing Maintainer Decision:**

- **[Issue #7489](https://github.com/NousResearch/hermes-agent/issues/7489)** (created April 11) — RPM-based throttling. 5 👍, well-defined design, no maintainer response in 87 days. Likely the most actionable undecided feature proposal.
- **[Issue #25061](https://github.com/NousResearch/hermes-agent/issues/25061)** (created May 13) — Pre-turn memory health hook. 3 comments, clear problem statement, no maintainer engagement in 55 days.
- **[Issue #12232](https://github.com/NousResearch/hermes-agent/issues/12232)** (created April 18) — IMAP username support. Simple feature, 2 comments, no response in 80 days.
- **[Issue #37338](https://github.com/NousResearch/hermes-agent/issues/37338)** (created June 2) — Skill metadata audit results. Detailed report of 8 broken skills, no maintainer action in 35 days.

**Stale PRs Needing Review:**

- **[PR #37595](https://github.com/NousResearch/hermes-agent/pull/37595)** (June 2) — Resolve localhost to IPv4 on Windows to avoid 2s connect timeout. Clear fix, 0 comments from maintainers in 35 days.
- **[PR #37714](https://github.com/NousResearch/hermes-agent/pull/37714)** (June 2) — Fix bare "openai" slug resolution. Auth-related, P2, 0 maintainer comments.
- **[PR #38942](https://github.com/NousResearch/hermes-agent/pull/38942)** (June 4) — Paginate messages and jobs API endpoints. Backend feature, 0 maintainer comments in 33 days.
- **[PR #39383](https://github.com/NousResearch/hermes-agent/pull/39383)** (June 4) — Add `session_retention_days` config for cron session auto-prune. Addresses a known user complaint (1,717 cron sessions in 6 weeks), 0 maintainer comments.
- **[PR #39388](https://github.com/NousResearch/hermes-agent/pull/39388)** (June 4) — Persist EventBridge cursor across subprocess restarts. Critical for MCP reliability, 0 maintainer comments.

**Risk Assessment:** The 35+ day silence on multiple high-quality community PRs suggests maintainer bandwidth is a bottleneck. The three concurrent arm64 CI fixes (all merged today) break the pattern slightly, but the older PRs remain unattended. If this trend continues, community contribution velocity may slow as contributors wait for feedback.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-07

## Today's Overview

Project activity is **moderate**, with 4 issues and 5 pull requests updated in the last 24 hours. A long-standing bug (#2191) from March 2026 has finally been closed, and related fix PRs are now in review. The community is actively contributing to both bug fixes and feature proposals, with particular attention to Anthropic provider improvements and remote agent connectivity. No new releases were published today.

## Releases

No new releases were published in the last 24 hours.

## Project Progress

One PR was merged/closed today:

- **#3227** [CLOSED] `fix(providers): resolve tool_use name/args from Function on reloaded history` — Merged by AayushGupta16. This fixes a session-history corruption bug where `ToolCall.Name` and `ToolCall.Arguments` fields (marked `json:"-"`) were lost after chat history round-tripped through session storage, affecting both `anthropic_messages` and `anthropic` (SDK-based) providers. [GitHub](https://github.com/sipeed/picoclaw/pull/3227)

## Community Hot Topics

**Most Discussed (by comments + reactions):**

- **#2191** [CLOSED] `[BUG] anthropic_messages provider ignores SystemParts, breaks Anthropic prompt caching` — 4 comments, reported March 30, 2026. This issue was closed after a long dormant period, indicating maintainers are now actively addressing provider fidelity. [GitHub](https://github.com/sipeed/picoclaw/issues/2191)

- **#3229** [OPEN] `Proposal: rolling conversation cache breakpoints for anthropic-messages + keeping volatile runtime context out of the cached prefix` — Freshly filed (July 6) by AayushGupta16. While it has 0 comments yet, this proposal is directly linked to #3228 (a fix PR for #2191) and represents a natural extension: after fixing per-block caching for system prompts, the community wants conversation-history caching with smart eviction of volatile runtime context. [GitHub](https://github.com/sipeed/picoclaw/issues/3229)

**Underlying needs:** The community is pushing for **production-grade Anthropic prompt caching** — first fixing broken system-part caching, then addressing the much larger token cost of re-sending full conversation history on every tool-call loop.

## Bugs & Stability

**Reported today (July 6–7):**

| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| 🔴 **Critical** | #3230 | `Function call is missing thought_signature when calling Gemini API via OpenAI compat format` — Using Gemini via Cloudflare AI Gateway with OpenAI-compatible format and tool use triggers a `missing thought_signature` error. Affects versions 0.2.9 to 0.3.1. | No |
| 🟡 **Medium** | #3231 | `[Feature]给searxng搜索加入basicauth请求头验证` — SearXNG search with credentials in URL (query string) fails; user requests Basic Auth header support instead. | No |

**Previously reported, fix PRs open:**

- **#2191** (critical bug, now closed) — fix submitted in #3228. [PR #3228](https://github.com/sipeed/picoclaw/pull/3228)
- **#3150** (destructive overwrite behavior) — fix in #3226. [PR #3226](https://github.com/sipeed/picoclaw/pull/3226)

## Feature Requests & Roadmap Signals

**Pending feature requests:**

- **#3231** — Add Basic Auth header support to SearXNG search tool (instead of URL-embedded credentials). User-reported from 2026-07-06.
- **#3229** — Rolling conversation cache breakpoints for `anthropic-messages`, keeping volatile runtime context (e.g., agent working memory, intermediate results) out of the cached prefix. Filed July 6.

**Prediction for next version:** Given the momentum around Anthropic provider improvements, the next release will likely include:
- Per-block `cache_control` on system messages (PR #3228)
- Tool-use reload fix (PR #3227, already merged)
- Possibly the remote WebSocket agent mode (PR #3118)

## User Feedback Summary

**Pain points expressed:**
- Anthropic prompt caching was completely broken on the `anthropic_messages` provider despite documentation suggesting it should work (#2191, user `whtiehack`)
- Gemini via OpenAI-compatible gateway produces hard errors on tool use (#3230, user `VictorSu000`)
- Generic `write_file` tool is too aggressive in framing overwrites as the default behavior, coaching agents toward destructive edits (#3150, filed earlier, fix in #3226)
- SearXNG search with credential-in-URL authentication fails (user `oTKatTjC`)

**Satisfaction signals:**
- Active contributor `AayushGupta16` is building on top of recent fixes with thoughtful proposals (#3229), suggesting the developer experience is enabling advanced workflows
- User `jp39` is contributing significant infrastructure (remote agent mode, media extraction fixes), indicating willingness to invest in the project

## Backlog Watch

**Long-unanswered items needing maintainer attention:**

- **#3118** [OPEN] `Add remote Pico WebSocket mode to picoclaw agent` — Opened June 12, updated July 6. This PR by jp39 adds an optional remote mode (`picoclaw agent --remote ws://...`) for connecting agents over WebSocket. Despite being open for nearly a month with no maintainer response, it represents a significant new capability (remote agent orchestration). [GitHub](https://github.com/sipeed/picoclaw/pull/3118)

- **#3115** [OPEN] `Fix inline data URL media extraction for generic tool output` — Opened June 12, also by jp39. Fixes session-history corruption when `data:image/...` strings appear in plain-text tool output (e.g., from `read_file` or `exec`). No maintainer engagement yet. [GitHub](https://github.com/sipeed/picoclaw/pull/3115)

---

*Generated 2026-07-07 based on GitHub activity data from sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-07

## 1. Today's Overview
NanoClaw shows high activity today with 11 PRs updated and 3 issues touched in the last 24 hours, signaling a strong development sprint. The project is in a documentation and stabilization phase, with three PRs from contributor `glifocat` focused on rewriting stale architecture docs, DB schema docs, and fixing factual inaccuracies across README and operational guides. Two significant bug-fix PRs target silent MCP server failures and incorrect provider error recording. No new releases were cut today, but the merge velocity (3 closed/merged PRs) and active discussion on the Zoom voice agent proposal (#2960) suggest steady forward momentum.

**Health Assessment:** Active and healthy — the team is balancing feature work with critical reliability improvements and a major docs cleanup.

---

## 2. Releases
**None** — No new releases were published on 2026-07-07.

---

## 3. Project Progress
Three PRs were merged or closed today:

- **#662 [CLOSED]** — `fix: service PATH broken on Nix-managed systems`  
  Fixes a startup crash on NixOS and nix-darwin where systemd/launchd hardcoded a PATH missing `/run/current-system/sw/bin`. A platform-specific stability fix for Nix users.  
  [GitHub](https://github.com/nanocoai/nanoclaw/pull/662)

- **#16 [CLOSED]** — `Escape special regex characters in assistant name trigger pattern`  
  Corrects a potential regex injection bug where special characters in the `ASSISTANT_NAME` environment variable could break trigger pattern matching.  
  [GitHub](https://github.com/nanocoai/nanoclaw/pull/16)

- **#2967 [CLOSED]** — `feat: opt-in local audit log (AUDIT_ENABLED)`  
  Merged new feature providing SIEM-shaped JSON audit events per action, with NDJSON day-files, `ncl audit list` read-back, and a post-write hook registry for future exporters.  
  [GitHub](https://github.com/nanocoai/nanoclaw/pull/2967)

---

## 4. Community Hot Topics

**Most Active Issue:**  
- **#2960** — `[CLOSED] Proposal: Live Zoom voice agent + K-ai KB integration — review for Kumuda`  
  *Comments: 1 | 👍: 0*  
  A design proposal for a voice agent that joins Zoom meetings live, answers KB questions on a wake phrase via Azure OpenAI Realtime API, and feeds transcripts into K-ai's action-item extraction. This closed proposal likely represents an evaluated feature request rather than an active community debate.  
  [GitHub](https://github.com/nanocoai/nanoclaw/issues/2960)

**Most Active PRs (by recency and volume):**  
The `glifocat` docs sweep (#2961, #2962, #2963, #2964) accounts for 4 of 8 open PRs, indicating a systematic effort to align documentation with current code. No single item has accumulated many comments or reactions.

**Underlying Need:**  
The docs-sweep PRs and the two bug-fix PRs (#2965, #2966) reflect a community/user base that values reliability and accurate onboarding material over new features. The MCP server failure issue (#2968 — zero comments but filed yesterday) signals growing adoption of the MCP server integration, with users now encountering edge cases.

---

## 5. Bugs & Stability
Two bugs reported, both at medium-high severity:

1. **#2968** — `MCP server spawn/connect failures are silent — agent runs with missing tools and can claim success`  
   **Severity: HIGH** — If an MCP server fails to start (bad path, missing deps, crash), the SDK proceeds silently with remaining tools; the agent appears healthy but may function incorrectly. No fix PR exists yet. This is a correctness/reliability issue that could lead to silent data corruption or missed actions.  
   [GitHub](https://github.com/nanocoai/nanoclaw/issues/2968)

2. **#2959** — `Image generation` (user request disguised as a bug/feature)  
   **Severity: LOW** — User wants to generate a logo; this is not a bug but a feature request or support ticket.  
   [GitHub](https://github.com/nanocoai/nanoclaw/issues/2959)

**Related Fix PRs in Flight:**
- **#2965** — `fix(agent-runner): match rate_limit_event as a top-level SDK message type` — Fixes a silent failure where rate-limit events are not matched due to SDK version mismatch (0.2.x vs 0.3.x).  
  [GitHub](https://github.com/nanocoai/nanoclaw/pull/2965)
- **#2966** — `fix(agent-runner): record provider errors as failed, and mirror failed acks` — Fixes provider errors inside consumed batches being recorded as `completed` instead of `failed`. Draft status indicates semantics are still under discussion.  
  [GitHub](https://github.com/nanocoai/nanoclaw/pull/2966)

---

## 6. Feature Requests & Roadmap Signals

**Explicit Feature Requests:**
- **Image generation (#2959)** — User wants to generate a logo for "Dream design." Unlikely to be a core feature addition, but may indicate demand for generative image capabilities in the agent toolkit.  
  [GitHub](https://github.com/nanocoai/nanoclaw/issues/2959)

**Roadmap Signals from Merged/Active PRs:**
- **Audit logging (#2967, merged)** — The new `AUDIT_ENABLED` feature suggests compliance/enterprise readiness is a roadmap priority. Expect this to stabilize over the next 1-2 weeks with user feedback.
- **Teams integration (#2958, open)** — A rebuild of the `add-teams` skill on structured-skill-format, replacing the Azure portal walk with a CLI-first flow. Points to continued enterprise collaboration tooling investment.
- **Security policy (#2954, open)** — Phase-1 security reporting and triage policy indicates maturation toward a responsible disclosure process. Likely to land in next minor release.
- **Zoom voice agent (#2960, closed)** — While closed, the underlying K-ai KB + real-time meeting integration suggests product direction toward enterprise meeting intelligence.

**Prediction for Next Version (v2.2.x):**  
The docs sweep, audit log, and security policy will likely ship together in the next minor release. The silent MCP server failure (#2968) is a high-severity bug that may trigger a patch release (v2.1.39) before the doc sweep lands.

---

## 7. User Feedback Summary

**Pain Points:**
- **MCP server silent failures (#2968)** — Reported by `explorerleslie`: users cannot tell when a tool fails to connect, leading to false-positive "success" outcomes. This is likely a recent pain point as MCP adoption grows.
- **NixOS compatibility (#662, now fixed)** — Nix-managed system users experienced startup crashes. The fix was merged, so this pain point is resolved.
- **Regex injection risk (#16, now fixed)** — `ASSISTANT_NAME` with special characters could break pattern matching. Fixed, but indicates testing gaps in configuration input handling.

**Use Cases:**
- A shop owner wants AI-generated logo creation (#2959)
- Enterprise users need compliance-grade audit trails (#2967)
- Teams users want CLI-first setup for Microsoft Teams integration (#2958)

**Satisfaction Signals:**  
The active docs-sweep PRs (4 open from a single contributor) and the NixOS fix suggest a responsive maintainer team. However, the silent failure bug (#2968) and the rate-limit mismatch bug (#2965) indicate that the SDK version upgrade (0.2.x → 0.3.x) introduced subtle regressions that are now being caught in production.

---

## 8. Backlog Watch

**Long-Unanswered Items:**
- **No items currently flagged as critical backlog.** All open issues and PRs are from the last 3 days, except for PR #662 which was opened in March and only now merged. This suggests maintainers are actively triaging.

**Items Needing Maintainer Attention:**
- **#2968** — `MCP server spawn/connect failures are silent` — Zero comments, no assignee, no fix PR yet. This is the highest-severity open issue and needs a resolution plan.  
  [GitHub](https://github.com/nanocoai/nanoclaw/issues/2968)
- **#2958** — `add-teams: Teams-CLI-first credentials flow` — Open for 1 day, no maintainer response yet. May need review from someone familiar with the Teams API and SSF format.  
  [GitHub](https://github.com/nanocoai/nanoclaw/pull/2958)

**Meta Note:**  
The documentation sweep PRs (#2961–#2964) from `glifocat` are substantial (touching 50+ files) but have no maintainer comments as of the digest timestamp. These should be reviewed promptly to avoid merge conflicts as other PRs land.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-06

## 1. Today's Overview
The NullClaw project is currently in a low-activity period, with no issues updated in the last 24 hours and no closed or merged pull requests. A single open dependency-update pull request (#956) was last updated on 2026-07-06, indicating ongoing but minimal maintenance activity. No new releases have been published. The project appears to be in a stable maintenance phase, with no active bugs or feature development visible in the recent data.

## 2. Releases
**None.** No new releases were detected in the last 24 hours.

## 3. Project Progress
**No merged or closed PRs today.**  
The only PR activity is the open dependabot update (#956), which has not been merged. No features, fixes, or improvements were advanced today.

## 4. Community Hot Topics
**No highly active issues or PRs with significant comments or reactions.**  
The only open PR (#956) has zero reactions and no discussion comments, suggesting it is a routine automated update without community engagement at this time.

- **PR #956** – [dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24  
  URL: https://github.com/nullclaw/nullclaw/pull/956  
  *Underlying need:* Keeping the Docker base image up-to-date for security and stability. Uncontroversial and low-urgency.

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.**  
No issues were opened or updated. The project shows no active stability concerns based on available data.

## 6. Feature Requests & Roadmap Signals
**No feature requests or roadmap signals detected in the last 24 hours.**  
No new issues or PRs suggest upcoming feature work. The project's roadmap direction is unclear from today's data.

## 7. User Feedback Summary
**No user feedback, pain points, or satisfaction signals captured in the last 24 hours.**  
No issue comments, reactions, or user-submitted content were recorded.

## 8. Backlog Watch
**No critical long-unanswered issues or PRs identified.**  
The single open PR (#956) is a standard dependency bump and has been open for 3 weeks (since 2026-06-15). While not urgent, it may benefit from maintainer review to avoid falling behind on base image updates.

---

**Project Health Assessment:** 🟢 *Stable, low activity.* The project is not actively evolving, but no regressions or community friction are evident. The primary action item is reviewing and merging the pending Docker dependency update.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-07

## Today's Overview
The IronClaw project is experiencing a burst of intense development activity: 41 issues and 50 pull requests were updated in the last 24 hours, with a high proportion (34 open issues, 34 open PRs) indicating active triage and review. Seven issues were closed, and 16 PRs were merged or closed, demonstrating meaningful forward momentum. The project is in a **high-velocity stabilization and testing phase**, with a strong emphasis on integration testing infrastructure, performance auditing, bug bash triage (P2/P3 severity), and production-hardening of the Reborn runtime stack. No new releases were published today.

## Releases
No new releases were published in the last 24 hours. The latest release remains `ironclaw` 0.29.1 (previously prepared in PR #5598, still open and pending merge). That pending release includes breaking API changes in `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0), with compatible changes to `ironclaw_safety` and `ironclaw_skill_learning`.

## Project Progress
**16 PRs were merged or closed today**, reflecting significant advances across testing, bug fixes, and infrastructure:

- **PR #5735** (closed) — [PRODUCTION CRATE] Real gate-dispatch harness convergence + triggered-delivery outcome proof. Delivers turn-state convergence traits and the `TurnRunSnapshotSource` seam, unblocking end-to-end integration tests for approval/auth gate dispatch.
- **PR #5733** (closed) — [PRODUCTION CHANGE] Fix for #5572: forwards `stage_checkpoint_payload`/`load_checkpoint_payload` through `HookedLoopCheckpointPort`, activating hooks integration coverage. This was blocking checkpoint-stage coordinator turns.
- **PR #5740** (closed) — Test-support only: real-egress security pipeline under harness + reopen-resume-through-gate harness seams.
- **PR #5752** (closed) — CI benchmark forwarding: enables `sccache-dist` credentials to speed up benchmark compilations.
- **PR #5722** (closed) — Fix for real gate-dispatch unreachability at int tier.
- **Issue #5713** (closed) — Silent automation failures (no Slack notification on `Failed` status) was fixed.
- **Issue #5507** (closed) — "No thread attached" blocking debugging on failed routine runs was fixed.
- **Issue #5676** (closed) — N+1 performance issue in `records_for_scope` was fixed.
- **Issue #5572** (closed) — `HookedLoopCheckpointPort` forwarding gap was resolved via PR #5733.
- **Issue #5556** (closed) — Sidebar active-chat highlight not clearing after navigation.
- **Issue #5555** (closed) — Terminal floating button overlapping chat composer.

Large codex-level PRs from **BenKurrek** (#5728, #5729, #5730, #5731, #5732) are advancing the WebUI frontend migration to Vite/TypeScript/pnpm, with several still open for review.

## Community Hot Topics
The most active discussions center on **automation reliability and user-facing feedback**:

1. **#5713** (CLOSED, 3 comments) — Silent Slack notification failures for terminated runs. The community identified that `triggered_notification_for_state` only dispatched for `Completed`/`BlockedApproval`/`BlockedAuth`, silently dropping `Failed` outcomes. **Fixed today.**

2. **#5553** (OPEN, 2 comments) — Approval notifications disappear instead of persisting in notification history. Users report the notification "flashes once and disappears," making it impossible to track pending approvals. No fix PR identified yet.

3. **#5702** (OPEN, 2 comments) — GitHub issue search/create capabilities fail with HTTP 403 errors despite correct integration configuration. A core usability blocker for users relying on GitHub tooling. No fix PR identified yet.

4. **#5712** (OPEN, 1 comment) — `tool_search` discloses the full capability catalog even under narrowed `CapabilityAllowSet`, a potential information disclosure concern.

## Bugs & Stability
Bugs are ranked by severity (P2 critical, P3 minor):

**Critical/P2 bugs (open):**
- **#5702** — GitHub integration HTTP 403 on issue search/create. Prevents core workflow. No fix PR.
- **#5703** — Routines fail with generic "invalid internal instruction" / "invalid response" instead of root cause. Related to #5552. No fix PR.
- **#5707** — Routine creation response leaks internal trigger names, cron syntax, command references. No fix PR.
- **#5708** — Error banners float outside chat stream, stacking as detached UI elements. No fix PR.
- **#5701** — Activity panel hides tool details, shows only "N tools" summary. No real-time updates during runs. No fix PR.
- **#5741** — `builtin.http.save` fails with `OutputTooLarge` for legitimate large responses (ESPN, etc.). No fix PR.
- **#5694** — `clientActionId()` throws on insecure origins (plain HTTP), breaking all mutating WebUI v2 requests. PR #5728/#5730 may address scaffolding but not this bug directly.
- **#5698** — Tool permission save failures silent in WebUI v2 Settings → Tools tab. No fix PR.

**Moderate/P3 bugs (open):**
- **#5557** — Logs deep link requires two clicks to load conversation. No fix PR.
- **#5706** — Sidebar shows raw thread UUIDs under load instead of conversation names. No fix PR.
- **#5705** — Terminal icon has no disable option in chat UI. No fix PR.
- **#5704** — Image preview becomes transparent during active chat processing. No fix PR.
- **#5747** — No way to unpair Slack on built-in host-beta mount. No fix PR.

**Fixed today:**
- **#5713** (Slack silent failures), **#5507** (debug block on failed runs), **#5572** (checkpoint port forwarding), **#5722** (gate dispatch unreachable), **#5676** (N+1 performance).

## Feature Requests & Roadmap Signals
The most significant feature/enhancement signals come from the **performance audit work**:

- **#5737** (OPEN) — Pass-2 hot-path audit tracking issue with 7 findings across memory/retrieval/skills, product workflow adapters, host infrastructure, and cross-cutting plumbing. Likely to drive multiple performance PRs in next release.
- **#5739** (OPEN) — Request to replace the hardcoded 128K context budget with model-aware `context_length` and a config knob. Users with larger-window models are capped at ~50% usable context. Likely to be addressed in next minor release given the clear pain.
- **#5715** (OPEN) — Wire-parity guard extension to projection and interaction-service assembly. Infrastructure request to prevent test-support drift from production.
- **#5711** (OPEN) — Verify driver-supplied failure `safe_summary` against host evidence — trust-boundary hardening.
- **#5712** (OPEN) — Tool search disclosure fix needed — security/predictability concern.
- **#5721** (OPEN) — Production turn-state filesystem owner isolation — defense-in-depth for multi-user environments.
- **#5734** (OPEN) — Installer download URLs 404 because tags use `ironclaw-v{version}` format but URLs use `v{version}`. Quick fix likely in next release.
- **#5748** (OPEN docs PR) — Subagent thread-harness design document — signals architectural work for subagent completion delivery.

## User Feedback Summary
Based on the bug bash issues (authored by `joe-rlo` with P2/P3 labels), user pain points cluster into four areas:

1. **Invisible or silent failures** — Users cannot diagnose routine failures (#5703), cannot see tool activity during runs (#5701), and cannot tell when Slack notifications were silently dropped (now fixed in #5713). This is the dominant dissatisfaction theme.

2. **UI state inconsistency** — The approval notification that disappears (#5553), the logs deep link that requires two clicks (#5557), the sidebar showing raw UUIDs under load (#5706), and the sidebar highlight that doesn't clear (#5556, fixed) all erode trust in the UI's state management.

3. **Integration friction** — GitHub tools returning 403 (#5702) is a hard blocker for users relying on GitHub workflow capabilities. The unpair Slack issue (#5747) locks users into a connection they cannot undo.

4. **Information leakage** — Routine creation responses exposing internal identifiers and cron syntax (#5707) is concerning for users in shared or enterprise environments.

Satisfaction signals are indirect: 7 closed issues today and 16 merged/closed PRs indicate the team is responsive to reported bugs, particularly around automation reliability and performance.

## Backlog Watch
Several important issues and PRs warrant attention:

1. **PR #5598** (OPEN, 4 days old) — The release PR for `ironclaw` 0.29.1, including breaking changes to `ironclaw_common` and `ironclaw_skills`. Has been open since July 3 with ongoing updates. Release appears blocked on completion of other fixes.

2. **PR #5550** (OPEN, 5 days old) — Dependabot dependency bump with 13 updates across `everything-else`. In rebasing state, potentially creating churn for other PRs. Needs maintainer review to merge or close.

3. **Issue #5739** (OPEN, 1 day old) — Hardcoded 128K context budget. While new, the clear user impact (capping usable context at 50% on larger models) and absence of a config override make this a likely priority for the next release cycle.

4. **Issue #5702** (OPEN, 1 day old) — GitHub 403 errors. No fix PR identified despite P2 severity. If users depend on GitHub integration, this is a blocking issue.

5. **PR #5742** (OPEN) — Production change to wire memory prompt-context source and pin untrusted-memory envelope. Important for security hardening but carries medium risk and is waiting for review/merge.

6. **PR #5749 and #5751** (OPEN, both today) — CAS-guarded delete and libSQL connection pooling. These are foundational infrastructure PRs for the subagent await-edge design and concurrent-CAS correctness, respectively. Both by core contributor `henrypark133`. Should be prioritized for review given their role in unblocking larger work.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for **2026-07-07**.

---

## LobsterAI Project Digest — 2026-07-07

### 1. Today's Overview
LobsterAI shows **very high** activity today, with **12 PRs updated** in the last 24 hours, **11 of which were merged or closed**. This marks a major sprint of consolidation, primarily driven by core contributors **fisherdaddy**, **btc69m979y-dotcom**, and **liuzhq1986**. The project is in a **rapid feature deployment phase**, with focus on user-facing settings, provider integrations, and OpenClaw (agent engine) mechanics. No new releases were tagged today, but the volume of merged code suggests a new release is imminent. There are zero open issues updated in the last day, signaling that maintainers are clearing the deck.

### 2. Releases
**None** — No new releases were published in the last 24 hours.

### 3. Project Progress (Merged/Closed PRs)
Today's 11 closed PRs advanced several key areas:

- **Provider & Authentication Enhancements:**
    - **xAI (Grok) OAuth Support** — PR [#2276](https://github.com/netease-youdao/LobsterAI/pull/2276) adds browser PKCE login with device-code fallback, wiring credentials into the OpenClaw auth-profiles store. This is a significant new model provider integration.
    - **xAI Plugin Syncing Fix** — PR [#2279](https://github.com/netease-youdao/LobsterAI/pull/2279) ensures the bundled xAI plugin is hidden from user plugin sync to prevent conflicts.

- **OpenClaw (Agent Engine) & Heartbeat:**
    - **Heartbeat Toggle Setting** — PR [#2278](https://github.com/netease-youdao/LobsterAI/pull/2278) adds a toggle in Settings > Agent Engine to enable/disable periodic heartbeat calls, persisting the preference via Cowork config (1h / 0m).
    - **Heartbeat Cost-Control Policy** — PR [#2280](https://github.com/netease-youdao/LobsterAI/pull/2280) repairs legacy HEARTBEAT.md files and removes proactive-heartbeat guidance from bundled templates.

- **Cowork & Context Maintenance:**
    - **Stale Final Sync Fix** — PR [#2281](https://github.com/netease-youdao/LobsterAI/pull/2281) prevents late empty-final history syncs from returning errored sessions to a context maintenance state.
    - **Settings & UI Cleanup** — PR [#2284](https://github.com/netease-youdao/LobsterAI/pull/2284) refactors the model provider settings UI, removes the home recent tasks card in Cowork, and fixes console window behavior on Windows.

- **Email Skill Enhancement:**
    - **Multi-Account Email** — PR [#2275](https://github.com/netease-youdao/LobsterAI/pull/2275) adds multi-account support for the `imap-smtp-email` skill, including management UI, provider presets, connectivity testing, and legacy `.env` compatibility.

- **MCP (Model Context Protocol) & Bug Fixes:**
    - **Stale Transport Config Fix** — PR [#2277](https://github.com/netease-youdao/LobsterAI/pull/2277) normalizes MCP server config by clearing stale headers/env/args when switching transport types.
    - **Scheduled Task & Settings Fix** — PR [#2256](https://github.com/netease-youdao/LobsterAI/pull/2256) fixes the "不通知" (no notification) channel not working and a white screen crash when deleting an active model from settings.

### 4. Community Hot Topics
While there were zero open issues updated today, the most active PRs demonstrated intense internal development:

- **Longest-running PR:** [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (Open) — A dependabot PR for bumping the Electron group (Electron 40 → 43). It remains open after 3 months, suggesting potential compatibility concerns with this major Electron version jump.
- **Highest-impact PR (by scope):** [#2276](https://github.com/netease-youdao/LobsterAI/pull/2276) — The xAI/Grok OAuth integration garnered significant attention as a major new provider addition, addressing a clear user demand for alternative model access.
- **Underlying Need:** The heavy activity around heartbeat control (PR #2278, #2280) indicates users were concerned about unnecessary API costs from automatic periodic model calls. The community's need for **cost transparency and granular control** is being directly addressed.

### 5. Bugs & Stability
Two high-severity bugs were fixed today:

- **Critical: White screen crash on model deletion** — Fix in PR [#2256](https://github.com/netease-youdao/LobsterAI/pull/2256). Deleting an active model from settings caused a complete application crash. **Severity: Critical.** Resolved.
- **High: Stale MCP transport config causing misconfiguration** — Fix in PR [#2277](https://github.com/netease-youdao/LobsterAI/pull/2277). Switching MCP transport types (e.g., SSE to stdio) left stale headers/env/args. **Severity: High.** Resolved.
- **High: Scheduled task notification not working** — Fix in PR [#2256](https://github.com/netease-youdao/LobsterAI/pull/2256). The "no notification" channel option was not persisting. **Severity: High.** Resolved.
- **Medium: Heartbeat causing unexpected model costs** — Fix in PR [#2278](https://github.com/netease-youdao/LobsterAI/pull/2278) & [#2280](https://github.com/netease-youdao/LobsterAI/pull/2280). Missing/empty HEARTBEAT.md triggered unnecessary periodic model calls. **Severity: Medium.** Resolved with new toggle.

No new bugs were reported in the last 24 hours.

### 6. Feature Requests & Roadmap Signals
The following implemented features signal the near-term roadmap:

- **xAI (Grok) Provider** — Now fully integrated via OAuth. Likely to be part of the next release.
- **Heartbeat Toggle (Cost Control)** — A highly requested cost-saving feature, now merged.
- **Multi-Account Email** — Significant expansion of the built-in email skill, moving from single-account to multi-account with management UI.
- **Cowork UI Cleanup** — Removal of the "recent tasks" card suggests a simplification of the Cowork dashboard, possibly in preparation for a new UI paradigm.

**Prediction:** The next release will likely include xAI provider support, the heartbeat cost-control toggle, and the multi-account email skill.

### 7. User Feedback Summary
No direct user feedback (issues/commentary) was updated in the last 24 hours. However, the pattern of fixes reveals implicit pain points:

- **Pain Point:** Users on Windows were experiencing a hidden console window when spawning Python. Fixed in PR #2284.
- **Pain Point:** Users were confused by the home screen's "Recent Tasks" card in Cowork. Removed in PR #2284.
- **Pain Point:** Switching between MCP transports was causing configuration corruption. Fixed in PR #2277.
- **Satisfaction Indicator:** The rapid merging of OAuth for Grok suggests strong internal focus on expanding model access, which is a positive signal for community adoption.

### 8. Backlog Watch
- **[OPEN] PR #1277** — [Dependabot: Bump Electron to v43](https://github.com/netease-youdao/LobsterAI/pull/1277) (Updated 2026-07-06, Created 2026-04-02). This PR has been open for **3 months**. While it is a dependency update, the jump from Electron 40 to 43 is significant and may include breaking API changes. The maintainers appear to be deferring this upgrade deliberately. This warrants attention as it could block security patches or new Electron features.

No other long-unanswered issues or PRs require immediate maintainer attention.

---

**Project Health Assessment:** 🟢 **Very Good.** High velocity, low bug debt, and clear focus on user-facing features (cost control, new providers, multi-account). The only area to watch is the stalled Electron dependency upgrade.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the Moltis project digest for **2026-07-07**.

---

## Moltis Project Digest — 2026-07-07

### 1. Today's Overview
The Moltis project is in a period of low visible activity this week, with **zero new issues or releases** reported in the last 24 hours. However, the maintainer team has been highly active in the pull request queue, processing **5 PRs** (3 closed/merged, 2 open) in this period. The focus remains on integration stability—specifically fixing OAuth handshake failures for popular third-party tools and resolving critical Docker deployment bugs. The backlog shows a healthy cadence of dependency bumps and minor hotfixes, but the lack of community-reported bugs or feature requests suggests a mature, stable phase of development.

### 2. Releases
**None.** No new releases were published in the last 24 hours.

### 3. Project Progress
Three PRs were closed/merged in the last 24 hours, signaling incremental stability improvements:

- **[#1122] fix: drop VOLUME declarations that shadow the home bind mount** (Author: sayotte, Closed)  
  *Resolved a pathological Docker deployment bug where declaring `VOLUME` for paths like `/home/moltis/.config/moltis` prevented bind mounts of the entire home directory from working correctly. This fix unbreaks containerized deployments that rely on persistent host-volume mapping.*

- **[#1113] hotfix(telegram): stream final replies without completion notify** (Author: s-salamatov, Closed)  
  *Fixes a Telegram edit-in-place streaming edge case where disabling completion notifications caused the final answer not to be streamed as a reply. Restores expected user-facing behavior introduced in PR #1099.*

- **[#1144] feat(whatsapp): bump whatsapp-rust 0.5 -> 0.6 with LID-native addressing** (Author: juanlotito, Closed)  
  *Major integration upgrade for WhatsApp support. The update to whatsapp-rust 0.6 migrates to LID (Login IDentifier) addressing, fixing broken inbound DMs after WhatsApp’s server-side device registration migration. Pinned to a specific merge commit to ensure stability.*

### 4. Community Hot Topics
- **[#1120] fix(mcp): use direct fetch for resource_metadata URL from WWW-Authenticate** (Open, Updated: 2026-07-06)  
  *Most active open PR. Addresses a critical MCP OAuth interoperability failure with Notion and Linear servers. The root cause is that the `discover_and_register()` function incorrectly passed the `resource_metadata` URL from the `WWW-Authenticate` header, triggering `invalid_target` errors. This PR is essential for users relying on MCP tools with those services.*

- **[#1087] chore(deps): bump tar from 0.4.45 to 0.4.46** (Open, Dependabot)  
  *Routine dependency bump. Still open after 38 days; low risk but worth merging to remain up-to-date with security patches.*

### 5. Bugs & Stability
No new bugs were filed in the last 24 hours. The only stability-related activity was the successful merge of two fixes:

- **High severity (fixed):** Docker container deployments using host bind mounts (`./moltis-home:/home/moltis`) were broken by conflicting `VOLUME` declarations. This could cause data persistence issues in production. **Fixed in PR #1122.**
- **Medium severity (fixed):** Telegram streaming final replies silently failed when completion notifications were disabled. **Fixed in PR #1113.**

No new crashes, regressions, or unaddressed bugs were observed.

### 6. Feature Requests & Roadmap Signals
No new feature requests were filed in the last 24 hours. The merged PR #1144 (WhatsApp LID migration) signals that the team is actively maintaining third-party integration parity despite platform-side API changes. The open PR #1120 for MCP OAuth suggests the next minor release may include a more robust OAuth URL handling mechanism for MCP servers.

**Prediction:** The next version (likely v0.7.x) will include:
- Native LID support for WhatsApp
- Fixes for Docker home-directory volume shadowing
- MCP OAuth interoperability improvements

### 7. User Feedback Summary
No direct user comments or reactions were captured in this data window. However, the behavior of the PRs reveals implicit user pain points:

- **Docker users** deploying with bind mounts were hitting silent failures—this was a blocking usability issue for self-hosters (PR #1122).
- **Telegram users** who disabled completion notifications lost the final streaming reply, indicating a misalignment between configuration toggles and runtime behavior (PR #1113).
- **MCP tool users** of Notion and Linear faced broken OAuth flows, a cross-platform compatibility concern (PR #1120).

Overall sentiment appears neutral-to-positive, given the lack of bug reports and maintainer responsiveness.

### 8. Backlog Watch
- **[#1087] chore(deps): bump tar from 0.4.45 to 0.4.46** (Open since 2026-05-29, 38 days stale)  
  *A low-risk Dependabot PR. While not security-critical, leaving it open for over a month may slow adoption of upstream patches. Recommending maintainer review and merge.*
  → [View PR](https://github.com/moltis-org/moltis/pull/1087)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-07

## 1. Today's Overview
CoPaw is experiencing a **high-activity period** with 32 issues updated and 49 PRs updated in the last 24 hours, indicating strong development momentum. The project released a minor patch (v1.1.12.post3) to fix a critical 1.x compatibility issue with the ACP dependency. The community is actively reporting bugs, with several high-severity issues around context compression, memory management, and channel reliability. A notable trend is the **massive influx of unit test PRs** (PR #5807–#5813) targeting regression prevention across core modules.

---

## 2. Releases
### v1.1.12.post3 (Released 2026-07-07)
- **Fix:** Pinned ACP version to resolve a breaking change that caused historical `1.x` versions of QwenPaw to malfunction.
- **Migration Note:** Users on `1.x` branches should upgrade to this patch to restore ACP functionality. No other changes.

---

## 3. Project Progress
### Merged/Closed PRs (21 total)
Key merged PRs from today's activity:

- **#5210** `feat(cli): add cron update command` — New CLI subcommand `qwenpaw cron update <job_id>` for modifying existing cron jobs, closing #4939.
- **#4820** `fix(context): normalize inline source URL strings in media blocks during compaction` — Fixes media block URL normalization issue (#4811) during context compaction.
- **#5769** `fix: double /api prefix causing 404` — Resolved double `/api` prefix in Web Console asset bundle that caused `404` errors for workspace commands.
- **#5779** `fix: cron state API returns UTC time instead of job's configured timezone` — Fixed hardcoded UTC in cron state API; now respects job's `timezone` field.
- **#5782** `fix: Google Gemini embedding compatibility` — Fixed `index=None` issue with Google Gemini embeddings via OpenAI-compatible endpoint that caused silent vector search fallback.
- **#5787** `fix: mobile webui bottom content truncated` — Resolved mobile Web UI truncation on all pages.
- **#5816** `fix: ImportError for SetSessionModelResponse from acp` — Fixed import error due to ACP version mismatch.

**Notable:** Seven unit-test PRs (#5807–#5813) were opened today but remain open — they represent a comprehensive regression test suite for core modules (approvals, inbox, channels, console hooks, security, runtime).

---

## 4. Community Hot Topics
### Most Active Issues (by comments/reactions)

1. **[#5757] Bug: Feishu messages not responding** (11 comments, 0 👍)
   - **Link:** [Issue #5757](https://github.com/agentscope-ai/QwenPaw/issues/5757)
   - **Analysis:** Users report both Docker and AgentScope Platform instances failing to reply after the first message. This is a **critical channel reliability issue** affecting production use of Feishu (Lark) integration.

2. **[#5401] Bug: Console frontend crashes on large tool-use sessions** (9 comments, 0 👍)
   - **Link:** [Issue #5401](https://github.com/agentscope-ai/QwenPaw/issues/5401)
   - **Analysis:** Frontend crashes/white-screens when rendering sessions with extensive tool-call history. Root cause is `DataContent` type mismatch between backend and frontend renderers.

3. **[#5273] Tracking: v2.0.0 Pre-release Bug Tracker** (5 comments, 1 👍)
   - **Link:** [Issue #5273](https://github.com/agentscope-ai/QwenPaw/issues/5273)
   - **Analysis:** Centralized tracker for v2.0.0 pre-release bugs. Active use by maintainers and testers.

4. **[#5567] Question: GitHub Issue Feedback Assistant Skill** (2 comments, 2 👍)
   - **Link:** [Issue #5567](https://github.com/agentscope-ai/QwenPaw/issues/5567)
   - **Analysis:** Community-created Skill that auto-formats user complaints into standardized GitHub Issues. High user engagement suggests demand for better issue-reporting UX.

### Most Active PRs
- **#5765** `fix(scroll): protect the active turn` — Addresses three scroll-context issues (#5746, #5778, #5776) with graduated pressure relief. Under review.
- **#5815** `refactor(memory): simplify auto-memory search state` — Active discussion on memory state management across agent rebuilds.
- **#5187** `feat(computer-use): Windows desktop GUI automation` — Long-running PR (since June 14) for UIA + Tauri control mode; still open with continuous updates.

---

## 5. Bugs & Stability
### High Severity (active, with fix PRs in progress)

| Issue | Severity | Description | Fix PR |
|-------|----------|-------------|--------|
| [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) | **Critical** | Feishu channel stops responding after first message | None yet |
| [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | **Critical** | Console frontend crash on large tool-use sessions | PR #5810 (regression tests, not fix) |
| [#5775](https://github.com/agentscope-ai/QwenPaw/issues/5775) | **High** | Auto-memory interval never triggers — MemoryMiddleware state lost across agent rebuilds | PR #5815 (refactoring fix) |
| [#5759](https://github.com/agentscope-ai/QwenPaw/issues/5759) | **High** | Plan mode repeatedly reads same file | None yet |
| [#5773](https://github.com/agentscope-ai/QwenPaw/issues/5773) | **High** | Memory search crashes OpenCode (OCG) provider | None yet |
| [#5789](https://github.com/agentscope-ai/QwenPaw/issues/5789) | **High** | Context compression crashes when model output exceeds JSON Schema `maxLength` | None yet |
| [#5710](https://github.com/agentscope-ai/QwenPaw/issues/5710) | **Medium** | Context compression lacks anchor protection — critical messages truncated | None yet |
| [#5717](https://github.com/agentscope-ai/QwenPaw/issues/5717) | **Medium** | Malformed tool-call history causes endless repeated tool execution | None yet |
| [#5790](https://github.com/agentscope-ai/QwenPaw/issues/5790) | **Medium** | Loading animation never disappears after response completes | None yet |
| [#5771](https://github.com/agentscope-ai/QwenPaw/issues/5771) | **Low** | `model_factory.py` debug logs misusing WARNING level causing log spam | None yet |

### Closed Today
- [#5782](https://github.com/agentscope-ai/QwenPaw/issues/5782): Google Gemini embedding compatibility (fixed)
- [#5787](https://github.com/agentscope-ai/QwenPaw/issues/5787): Mobile webui truncation (fixed)
- [#5816](https://github.com/agentscope-ai/QwenPaw/issues/5816): ImportError on fresh install (fixed)
- [#5769](https://github.com/agentscope-ai/QwenPaw/issues/5769): Double `/api` prefix 404 (fixed)
- [#5779](https://github.com/agentscope-ai/QwenPaw/issues/5779): Cron state timezone (fixed)

---

## 6. Feature Requests & Roadmap Signals
### User-Requested Features (New Today)

| Issue | Feature | Likelihood for Next Version |
|-------|---------|-----------------------------|
| [#5780](https://github.com/agentscope-ai/QwenPaw/issues/5780) | **Multi-user account management** for team use | **Medium** — Repeated request; v2.0.0 likely target |
| [#5785](https://github.com/agentscope-ai/QwenPaw/issues/5785) | Support selecting hidden folders in Coding mode | **High** — Low effort, high UX impact |
| [#5795](https://github.com/agentscope-ai/QwenPaw/issues/5795) | Auto-refresh Web Console on incoming messages | **Medium** — Common expectation |
| [#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797) | Configurable toast/notification for cron jobs | **Low-Medium** — Controversial due to past UX disputes |
| [#5821](https://github.com/agentscope-ai/QwenPaw/issues/5821) | Granular `rejects_media` per media type | **Low** — Niche optimization |
| [#5168](https://github.com/agentscope-ai/QwenPaw/issues/5168) | Official Zalo Bot channel support | **Low** — Regional demand (Vietnam) |

### Roadmap Signals
- The **v2.0.0 pre-release tracker** (#5273) is actively monitored by maintainers, suggesting v2.0.0 is in active pre-release testing.
- Two competing **memory reranker PRs** (#5669, #5692) indicate memory search quality is a priority area.
- PR #5187 (Windows desktop automation via UIA + Tauri) is a significant new capability that may land in v2.0.0.

---

## 7. User Feedback Summary
### Common Pain Points
1. **Channel reliability** (#5757): Feishu users report intermittent unresponsiveness in production deployments.
2. **Context management** (#5710, #5789): Users experience context compression that removes critical information (channel identity, task instructions).
3. **Memory system** (#5775, #5773): Auto-memory failing silently; memory search breaking third-party providers.
4. **Mobile UX** (#5787): Mobile Web UI truncation makes critical controls inaccessible.
5. **Performance** (#5725): Browser stuttering during streaming output, especially for long responses.

### Positive Signals
- Community creating **self-help tools** like the GitHub Issue Assistant Skill (#5567).
- Users requesting **advanced features** like multi-user management (#5780) suggests growing adoption in team settings.
- Cron update feature (#5210) was requested and delivered — demonstrates maintainer responsiveness.

---

## 8. Backlog Watch
### Issues Needing Maintainer Attention

| Issue | Age | Summary | Why Worthy of Attention |
|-------|-----|---------|-------------------------|
| [#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) | 20 days | v2.0.0 Bug Tracker | **Tracked by maintainers**, but many child issues unlinked |
| [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | 14 days | Console crash on large sessions | **Critical frontend bug** with no fix PR; test coverage only |
| [#5168](https://github.com/agentscope-ai/QwenPaw/issues/5168) | 24 days | Zalo Bot channel request | **No maintainer response** — unactioned community request |
| [#5710](https://github.com/agentscope-ai/QwenPaw/issues/5710) | 6 days | Context compression missing anchor protection | **Fundamental UX issue** — no discussion from maintainers |
| [#5789](https://github.com/agentscope-ai/QwenPaw/issues/5789) | 2 days | Context compression crashes on JSON Schema violation | **New high-severity bug** — no response yet |

### PRs Needing Review
- **PR #5765** (`fix(scroll)`): Multi-phase fix for three scroll-context bugs; open for 4 days with no review.
- **PR #5187** (`feat(computer-use)`): Significant Windows desktop automation feature; open for 23 days.
- **PR #5669** and **#5692**: Competing memory reranker implementations; need resolution/prioritization.

---

**Project Health Summary:** High activity with strong community engagement, but burdened by several critical channel and memory bugs. The unit-test wave (PRs #5807–#5813) suggests a push toward stability for v2.0.0. The Feishu unresponsiveness issue (#5757) and context compression crashes (#5789) represent the most urgent threats to user trust.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-07

## Today's Overview

ZeroClaw is in a period of **high-intensity development** with 50 issues and 50 PRs updated in the last 24 hours, reflecting sustained community and maintainer engagement. The project is actively working toward the **v0.8.3 release** cycle, with multiple tracked workstreams spanning runtime execution, provider serialization, observability, and channel improvements. Security and CI quality gates are receiving focused attention, with several PRs addressing advisory drift, workspace-aware testing, and credential fallback consistency. The ratio of open to closed items (47:3 for issues, 45:5 for PRs) suggests a **review bottleneck**, with many solutions waiting for maintainer bandwidth to land.

## Releases

No new releases were published today. The project remains on the v0.8.x track, with v0.8.3 being the active target milestone across multiple tracker issues.

## Project Progress

Five PRs were merged or closed today, reflecting targeted technical debt reduction and critical fixes:

- **[#8781](https://github.com/zeroclaw-labs/zeroclaw/pull/8781) — fix(security): remove stale advisory ignores**: Removed 18 stale `cargo-deny`/`cargo-audit` advisory ignore entries for crates no longer in the dependency tree, fixing a Security CI gate failure.
- **[#8776](https://github.com/zeroclaw-labs/zeroclaw/pull/8776) — fix(ci): make local gates workspace-aware**: Extended the local Rust quality gate to run `clippy` against the workspace package set, aligning local development CI with GitHub CI behavior.
- **[#8778](https://github.com/zeroclaw-labs/zeroclaw/pull/8778) — chore: Optimize images**: Landed ImgBot-optimized SVG assets under `.github/assets` and `apps/` to shrink repository size.
- **[#8749](https://github.com/zeroclaw-labs/zeroclaw/pull/8749) — fix(providers/openrouter): normalize native tool-call arguments**: Part of the #8675 series, routing OpenRouter native tool-call serialization through a shared validation helper to prevent provider 400 errors.
- **[#8751](https://github.com/zeroclaw-labs/zeroclaw/pull/8751) — fix(config): LocalWhisperConfig::default reuses serde defaults**: Fixed zero-byte defaults for `max_audio_bytes` and `timeout_secs` by aligning `Default` with serde defaults.

## Community Hot Topics

The most active discussions this week reveal three converging community concerns:

1. **MCP Tool Visibility Gap** — **[#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)** (16 comments, S1 severity): Two users report that MCP servers connect and expose tools to the gateway, but Zerocode TUI sessions do not receive discovered MCP tools. This is a **workflow-blocking** issue that undermines the core MCP integration promise. The community is actively debugging whether the gap is in the gateway-to-TUI propagation, session initialization ordering, or tool registration lifecycle.

2. **Work Lanes Governance RFC** — **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** (13 comments, ongoing since May): This governance RFC for board automation, label cleanup, and work routing continues to attract discussion. It reflects the project's growing need for **structured triage processes** as issue volume scales. The RFC is marked as "accepted / rollout in progress," suggesting organizational changes are being implemented.

3. **Goal Mode Implementation Split** — **[#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681)** (8 comments, opened July 4): This tracker coordinates splitting the accepted goal-mode implementation from a feature branch into reviewable PRs. The high comment velocity on a very new issue indicates strong community interest in this capability for autonomous, long-running agent objectives.

## Bugs & Stability

**Critical severity (S1 — workflow blocked):**

- **[#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)** — MCP tools missing from TUI sessions: Gateway sees tools; TUI does not. No fix PR yet. *Risk: high*
- **[#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)** — Telegram channel cannot be configured: `zeroclaw channels doctor` claims channels are not set up despite correct configuration. Agent replies in CLI but not on Telegram. *Risk: high*
- **[#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675)** — Malformed native tool-call arguments sent to OpenRouter/OpenAI providers cause HTTP 400 and empty replies. **Fix PR [#8749](https://github.com/zeroclaw-labs/zeroclaw/pull/8749) merged today.** *Risk: medium*
- **[#8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631)** (CLOSED) — Headless deterministic SOP steps recorded as completed without executing. *Risk: high* — closed, presumably fixed.

**High-priority security/CI:**

- **[#8753](https://github.com/zeroclaw-labs/zeroclaw/issues/8753)** — `rust_quality_gate.sh` misses member-crate test targets (no `--workspace`), allowing broken test code to land on master. **Fix PR [#8776](https://github.com/zeroclaw-labs/zeroclaw/pull/8776) merged today.**
- **[#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519)** — 22 RustSec advisories failing `cargo audit` on master; drift between `audit.toml` and `deny.toml`. *Status: in-progress*
- **[#8782](https://github.com/zeroclaw-labs/zeroclaw/issues/8782)** — New RUSTSEC-2026-0204 advisory for `crossbeam-epoch` 0.9.18 (invalid pointer dereference). *Fix PR just opened.*

**Recent fix PRs addressing open bugs:**
- [#8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746) — fix(goal): stop active goal self-resume loops (XL-sized, touching 12+ components)
- [#8696](https://github.com/zeroclaw-labs/zeroclaw/pull/8696) — fix(runtime): enforce leading user-turn invariant before provider dispatch
- [#8690](https://github.com/zeroclaw-labs/zeroclaw/pull/8690) — fix(channels): gate `/model --agent` behind per-sender authorization

## Feature Requests & Roadmap Signals

**Strong community signals (likely for v0.8.3 or v0.9.0):**

1. **Goal Mode** ([#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681)) — Autonomous objective-driven agent behavior. The implementation is already in a feature branch and being split for review. **Very likely for v0.8.3.**

2. **Realtime Voice Channel** ([#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943), [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)) — Two complementary proposals: a backend-agnostic `voicehost` WebSocket channel and a Gemini Live-style speech-to-speech channel. The author (metalmon) has contributed multiple related issues, indicating an experienced contributor driving this. **Possible for v0.8.3 or v0.9.0.**

3. **OpenAI Chat Completions Adapter** ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)) — Allows Open WebUI, LobeChat, and custom integrations to connect to ZeroClaw agents via the OpenAI-compatible API. **Under RFC review; possible for v0.9.0.**

4. **Per-Chat Model Switching** ([#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600)) — Users coming from moltis expect multi-model provider support (e.g., OpenRouter) with per-chat model selection. The single upvote and 2 comments suggest niche but passionate demand.

5. **Enhanced file_read** ([#8602](https://github.com/zeroclaw-labs/zeroclaw/issues/8602), [#7521](https://github.com/zeroclaw-labs/zeroclaw/issues/7521)) — Charset detection, line caps, PDF page support, notebook awareness. Two related issues from different users signal a common pain point for enterprise/document-heavy use cases.

## User Feedback Summary

**Pain points expressed by users this week:**

- **"MCP tools are there but I can't use them in TUI"** — Issue [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) represents the most disruptive user experience gap. The promise of MCP integration is undermined when tools are visible to the gateway but invisible to the primary user interface.
- **"I set up Telegram but the bot doesn't reply"** — Issue [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) describes a configuration flow that reports success but produces a non-functional channel. The user reports "zeroclaw channels doctor claims the channels are not set up — even after setting them up."
- **"I want to use OneBot/NapCat but the option is missing"** — Issue [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) (9 comments, open since March) remains unresolved, indicating a gap in QQ/IM channel support that the China-based user community cares about.
- **"Dashboard is not available after brew install"** — Issue [#7523](https://github.com/zeroclaw-labs/zeroclaw/issues/7523) (CLOSED) highlighted that the web dashboard requires `cargo web build`, which is not obvious from the default install path.
- **"byte-limited truncation corrupts UTF-8 and panics"** — Issue [#7828](https://github.com/zeroclaw-labs/zeroclaw/issues/7828) is a known class of bugs where raw byte indices land inside multi-byte characters, causing runtime panics in channel/tool preview contexts.

**Satisfaction signals:**
- A user contributed a logo submission for the Agent Skills client list ([#5262](https://github.com/zeroclaw-labs/zeroclaw/issues/5262)), indicating pride in the project and desire for ecosystem visibility.
- Multiple issue authors (metalmon, singlerider, Audacity88) appear repeatedly across high-quality feature proposals, suggesting a **committed power-user base** that invests in the project's direction.

## Backlog Watch

**Issues needing maintainer attention (open >30 days, important label, no recent activity):**

1. **[#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)** — "where is napcat channel" (open since 2026-03-02, 9 comments, `priority:p2`, `status:accepted`). This feature request for QQ/OneBot channel support has been accepted for 4+ months with no implementation visible.

2. **[#5262](https://github.com/zeroclaw-labs/zeroclaw/issues/5262)** — "Add ZeroClaw logo to official Agent Skills client list" (open since 2026-04-03, 4 comments, `status:accepted`, `risk:low`). A straightforward, low-risk branding task that has been accepted for 3 months without action.

3. **[#6311](https://github.com/zeroclaw-labs/zeroclaw/issues/6311)** — "feat(agents): inject agent alias into system prompt on init" (open since 2026-05-03, 1 comment, `status:accepted`, `risk:medium`). Tracked for V3 multi-agent UX but has seen no PR activity in 2 months despite accepted status.

**PRs needing maintainer review (stale-candidate, no recent maintainer interaction):**

- **[#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821)** — "feat(config): add schema struct & risk field" (open since 2026-06-17, labeled `needs-author-action` and `stale-candidate`). This sandbox policy configuration work has been waiting for author follow-up for 20 days.
- **[#7905](https://github.com/zeroclaw-labs/zeroclaw/pull/7905)** — "feat(zerocode): add cron run history and trigger" (open since 2026-06-17). A medium-sized feature PR that extends the TUI with cron management capabilities; no maintainer comments visible in the activity window.

**Observation:** The project maintains an unusually high number of open issues and PRs relative to closure rate. With 47 open issues and 45 open PRs, the **review velocity** appears to be a bottleneck. The `needs-maintainer-review` label appears on multiple high-risk RFCs ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603), [#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398), [#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600)) that have been waiting for architectural decisions. This suggests the core team may need additional reviewer bandwidth to maintain momentum as community contribution volume grows.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*