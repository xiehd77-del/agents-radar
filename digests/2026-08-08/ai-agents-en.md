# OpenClaw Ecosystem Digest 2026-08-08

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-08 01:45 UTC

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

# OpenClaw Project Digest — 2026-08-08

## 1. Today's Overview

OpenClaw is undergoing intense stabilization activity with 1,000 issues/PRs updated in the last 24 hours (500 each), yet zero new releases. The project is in a heavy bug-fixing and regression-hardening phase, with P0-grade defects around database corruption, memory leaks, and state migration failures dominating the agenda. The community is actively surfacing real-world reliability issues (silent message loss, memory leaks, context bloat) while maintainers are pushing forward a 2026.8.1 release train (PR #120375) and CI hardening PRs. A small fraction of items (88 PRs, 30 issues) were closed, suggesting maintainers are processing queues but are backlogged on triage. No new releases were cut today; the focus is on preparing the 2026.8.1 train.

## 2. Releases

No new releases published in the last 24 hours. The most recent release train is 2026.7.2, with preparation for 2026.8.1 underway via PR #120375 (chore(release): prepare 2026.8.1), which was closed today and aligns root, macOS, package, and plugin metadata.

## 3. Project Progress

Today's activity shows steady PR throughput with key structural improvements landing or in final review:

- **Release train preparation**: PR #120375 (prepare 2026.8.1) closed today — aligns version metadata across the monorepo.
- **Channel reliability fixes**: PR #120240 (fix Ollama invalid UTF-8 streaming, open), PR #119827 (bound ingress claim IN lists under SQLite bind limit, wait-on-author), PR #120087 (Slack Enterprise Grid routing by workspace, needs proof). These target silent message corruption, queue drain stalls, and multi-workspace Slack routing.
- **State management fixes**: PR #119778 (retryable chat.send during transcript rebuild, ready for maintainer), PR #120404 (memory-flush append-only outputSchema compliance, needs proof), PR #118094 (pair successful no-op compaction hooks — ensures `after_compaction` fires even on no-ops).
- **UI/UX polish**: PR #120391 (clear stale error highlight on continued execution), PR #120388 (show commit age in sidebar footer), PR #120381 (refresh attributed message avatars).
- **Platform/OS fixes**: PR #117616 (launchd ownership fail-closed scoping, avoids false failures), PR #118499 (macOS realtime Gateway-relay Talk support — shared runtime extracted into OpenClawKit).
- **CI/QA hardening**: PR #120392 (wait for release child metadata), PR #120362 (worktree lifecycle coverage + symlinked state-dir lock fix), PR #120418 (derive UX producer aggregate status).

Closed: 88 PRs merged/closed; 30 issues closed. Notables closed today: the 2026.8.1 release prep (#120375), plus long-running issues like #92884 (config validate rejected plugin channel schemas) and #116277 (DeepSeek v4 Flash silent failure, P1).

## 4. Community Hot Topics

The most active issues this week reveal core pain points around reliability, memory management, and provider-specific failures:

- **#116277 (129 comments, closed today)** — DeepSeek v4 Flash silent reply failure. Users hit a silent fallback with no visibility; closed but shows high frustration with "no reply generated" with generic fallback messages.
- **#116201 (59 comments, open, P1, maintainer-reviewed)** — Realtime voice retains unbounded provider/consult state. A resource-exhaustion risk under slow/bursty providers.
- **#7707 (29 comments, open, P2)** — Memory Trust Tagging by Source. Long-running feature request to prevent memory poisoning from untrusted web content. 0 👍 but high comment activity signals strong interest.
- **#77598 (23 comments, open, maintainer-tagged)** — Live dev agent behavior tracker: a 24-hour watch of Pash's dev agent. Community actively observing and documenting agent behavior.
- **#91588 (22 comments, open, P0)** — Gateway memory leak (350MB→15.5GB RSS, OOM crashes). Severe operational issue; persistent attention.
- **#67419 (11 comments, 2 👍)** — Bootstrap files re-injected every turn, wasting 20-30% tokens. Cost-sensitive users actively pushing for context efficiency.
- **#85030 (10 comments, 6 👍)** — MCP tools not injected into subagent sessions. High-signal bug with strong community endorsement; affects multi-agent workflows.

The overall signal: users care deeply about **reliability (no silent failures), memory/context efficiency, and multi-agent tooling correctness**. Cost of LLM usage is a recurring theme.

## 5. Bugs & Stability

Severity-ranked critical issues reported today (ranked P0 → P1):

**P0 (data loss / crash loop):**
- **#119263** — Agent DB v14→v15 migration fails ('no such column: entry_valid'), gateway refuses to start. Blocks upgrades entirely. No fix PR yet.
- **#118772** — `totalTokens` inflation causes premature compaction at 4-8% context, causing data loss. Regression from 2026.7.1. Linked PR suspected open.
- **#101290** — CLI startup preflight corrupts live state DB ("database disk image is malformed"), 4 occurrences on macOS. Regression; vanilla SQLite does not reproduce. Open, no fix PR.

**P1 (message loss / session state / security):**
- **#116022** — `/new` reuses stable session ID, cannot recover retired Codex tombstone. Persistent across beta.5.
- **#119087** — Gateway cold start regressed ~2.5x from 2026.7.1-beta.1 to 2026.7.2-beta.7 on 1-vCPU.
- **#45494** — Cron agent jobs silently time out during sustained LLM outages instead of fast-failing.
- **#90789** — Claude-CLI synthetic "No response requested." leaves Telegram turn fully silent with no observability.
- **#94939** — 6.x channel migration leaves conversation-store SQLite empty, orphaning references, breaking proactive Teams sends.
- **#119411** (new today) — Memory file watcher never reindexes; `Dirty: no` while index is stale. Silent memory index freeze.

**P1/P2 regressions (fix PRs open):**
- **#115700** — chat.send rejected with "thread switched branches" after model completion (fix PR #119778 ready).
- **#49876** — Cron sessions deliver hallucinated output instead of failing cleanly — trust/safety issue.

**Stability assessment**: Multiple P0s remain open without visible fix PRs (DB corruption, migration failure, memory leak). The project is shipping fixes steadily but the P0 backlog on data integrity and upgrade-safety is a release-blocker concern for the 2026.8.1 train.

## 6. Feature Requests & Roadmap Signals

High-signal feature requests likely to influence the next release:

- **Memory Trust Tagging by Source (#7707, P2, 29 comments)** — Tag memories by origin to prevent poisoning. Security-focused; may be deferred for security review.
- **Tiered Bootstrap Loading (#22438, P2, 18 comments)** — Progressive context control; directly addresses token waste (#67419). Cost-saving and likely to get attention in the context-efficiency wave.
- **Channel-mediated approval for MCP tools (#78308, P2, 16 comments)** — Consent envelope for external state mutations. Security + control; fits well with existing `/approve` pipeline.
- **Context Provenance (#54373, P3)** — Add source/volatility metadata to injected context. Complements memory-trust-tagging.
- **Per-model usage logging (#13219, P2, 7 comments)** — Native cost tracking; repeatedly requested, high utility for operators.
- **Intelligent Session Auto-Titling (#99583)** — Lazy generation via cheap models; small usability win.
- **Pre-reset agentic memory flush (#45608, 4 👍)** — Flush memory before `/new`/reset; prevents loss; likely to be picked up given compaction-fix momentum.

**Prediction**: The 2026.8.1 release will focus on **bug fixes** (DB migration, memory leaks, chat.send, cron reliability) rather than new features. Context/token efficiency features (tiered bootstrap, memory flush) are likely next-cycle candidates.

## 7. User Feedback Summary

- **Frustration with silent failures** — Multiple issues (#116277, #90789, #86012, #45494) show users receiving no response, no error, and no log for failed LLM calls, channel sends, and cron runs. Generic fallback messages are not acceptable.
- **Memory and context cost anxiety** — Users report 20-30% token waste from bootstrap re-injection (#67419), unbounded JSONL logs (#75380), and duplicate vector stores (#95724). Cost efficiency is a major driver.
- **Multi-agent tooling gaps** — MCP tools not injected into subagents (#85030) and capability profiling (#35203) show demand for stronger agent orchestration.
- **Upgrade pain** — DB migrations (#119263, #101290) and state corruption are blocking upgrades, shaking user confidence.
- **Windows-specific issues** — EBUSY test teardown (#119796) and lingering `node.exe` processes (#74378) indicate the Windows experience still needs polish.

Overall sentiment: engaged but wary. Users are actively reporting and debugging, but P0s and silent failures are eroding trust in reliability.

## 8. Backlog Watch

Long-standing items needing maintainer attention:

- **#91588 (P0, opened 06-09)** — Gateway memory leak to 15.5GB. 6 weeks open, no fix PR. Critical operational issue.
- **#7707 (P2, opened 02-03)** — Memory Trust Tagging. 6 months open, 29 comments, still in review. High community interest.
- **#45608 (P2, opened 03-14)** — Pre-reset memory flush. 5 months open, 4 👍. Simple, high-value; likely needs product decision.
- **#85030 (P1, opened 05-21)** — MCP tools not injected into subagent sessions. 6 👍, 2.5 months open. Blocks multi-agent MCP use.
- **#49876 (P1, opened 03-18)** — Cron hallucinated output on tool failure. 5 months open. Safety issue; may need security review.
- **#90789 (P1, opened 06-06)** — Claude-CLI silent telegram turns. 2 months open, recovery-stuck.
- **#75380 (P1, opened 05-01)** — Unbounded provider-payload/cache-trace JSONL logs. 3 months open, disk-fill risk.

These items represent a **maintainer attention gap** — several P1/P0s have been open for weeks without fixes, which aligns with the heavy QA/release-prep workload but is a risk for user retention.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant & Agent Ecosystem

**Date:** 2026-08-09 | **Data Window:** 2026-08-08 (24 hours) | **Projects Analyzed:** 12

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is in a **stabilization and hardening phase** rather than a feature-expansion phase. Across the 12 projects tracked, the dominant theme is **reliability engineering**: database corruption fixes (OpenClaw, LobsterAI), memory leak remediation (OpenClaw, Hermes Agent), session-state integrity (all active projects), and silent-failure elimination (OpenClaw, IronClaw, ZeroClaw). Security hardening is a second major current, with API key leakage (ZeroClaw), session-history isolation (NanoBot), and sandbox confinement (IronClaw, CoPaw) receiving active attention. The ecosystem shows a **bimodal distribution**: a few large projects (OpenClaw, IronClaw) operating at high velocity with substantial community engagement, while several smaller projects (NanoClaw, PicoClaw, LobsterAI) show healthy, focused activity. Three projects (NullClaw, TinyClaw, Moltis) showed zero activity, indicating either dormancy or pause. The overall signal is **maturation through pain** — real-world usage is surfacing genuine reliability gaps, and maintainers are responding with targeted fixes rather than speculative features.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed (24h) | Release Status | Health Score* |
|---------|:------------:|:---------:|:-------------------:|:--------------:|:-------------:|
| **OpenClaw** | 500 updated | 500 updated | 88 PRs / 30 issues | None (prep 2026.8.1) | 🔴 **6/10** — P0s open; high engagement but reliability concerns |
| **NanoBot** | 9 updated (7 active) | 21 updated | 11 PRs merged | None (accumulating) | 🟢 **8/10** — Fast fix-to-issue correlation; short backlog |
| **Hermes Agent** | 50 updated (46 open) | 50 updated (45 open) | 5 PRs merged | None | 🟡 **6/10** — Active but P1s unaddressed; review bottleneck |
| **PicoClaw** | 4 updated | 14 updated | 0 merged | None | 🟡 **5/10** — Review bottleneck; quality PRs stale 2-3+ weeks |
| **NanoClaw** | 0 open | 10 updated | 2 merged | None | 🟢 **8/10** — Clean tracker; steady feature cadence |
| **NullClaw** | — | — | — | — | ⚪ **No activity** |
| **IronClaw** | 50 updated | 50 updated | 12 merged | None (rc pending) | 🟢 **8/10** — Responsive; doc-truth initiative; QA-driven |
| **LobsterAI** | 7 updated | 7 updated | 6 merged | **2026.8.7 released** | 🟢 **8/10** — Shipped patch; fast bug→fix turnaround |
| **TinyClaw** | — | — | — | — | ⚪ **No activity** |
| **Moltis** | — | — | — | — | ⚪ **No activity** |
| **CoPaw** | 31 updated | 47 updated | 11 issues / 21 PRs | **v2.1.0-beta.2 released** | 🟡 **7/10** — High activity; beta churn; some criticals open |
| **ZeroClaw** | 100 updated | 100 updated | 3 PRs merged | None | 🟡 **5/10** — High activity but merge bottleneck; security bugs critical |

> **Health Score** *(analyst judgment)*: 8-10 = healthy velocity with responsive maintainers; 5-7 = active but with bottlenecks or unresolved P1/P0s; <5 = at risk.

---

## 3. OpenClaw's Position

### Advantages vs. Peers

- **Ecosystem Scale**: OpenClaw's 1,000 issues/PRs updated in 24h dwarfs all peers (IronClaw, the next largest, processed 100). This reflects both a larger user base and a correspondingly larger QA burden.
- **Release Engineering Maturity**: The 2026.8.1 release train (PR #120375) spans root, macOS, package, and plugin metadata — a monorepo orchestration level absent in smaller peers.
- **Cross-Channel Coverage**: Slack Enterprise Grid routing, macOS realtime Gateway-relay Talk, and Windows-specific fixes indicate a breadth of production integrations that NanoBot, PicoClaw, and LobsterAI are still developing.
- **Community Debugging**: 129 comments on the DeepSeek v4 Flash issue (#116277) shows an engaged user base that actively diagnoses and reports — a compounding asset.

### Technical Approach Differences

- **Monorepo + Release Train**: OpenClaw uses a coordinated monorepo with aligned version metadata across root/macOS/package/plugins — more complex than NanoBot's single-package approach but enabling tighter integration.
- **Gateway Architecture**: Dedicated gateway component with cold-start regression tracking (#119087) and memory leak monitoring (#91588) indicates a more sophisticated runtime topology than PicoClaw or NanoClaw.
- **State Migration Focus**: The P0 DB migration failures (#119263, #101290) reveal a system under heavy schema evolution — a pain point largely absent in smaller projects with simpler state.

### Community Size Comparison

| Metric | OpenClaw | IronClaw | ZeroClaw | NanoBot |
|--------|:--------:|:--------:|:--------:|:-------:|
| Issues+PRs updated (24h) | 1,000 | 100 | 100 | 30 |
| Merged/Closed (24h) | 118 | 12 | 3 | 13 |
| Open PR backlog | ~450 | ~45 | ~47 | ~15 |
| P0/P1 open issues | 5+ | 8+ | 4+ | 1 |
| Releases (last 30d) | 0 (train prep) | 0 (rc imminent) | 0 | 0 |

> OpenClaw's community is approximately **10x larger** than its nearest peers by activity volume. This scale brings both a richer feedback loop and a larger unresolved-backlog surface.

---

## 4. Shared Technical Focus Areas

The following requirements recur across multiple projects — these are emerging ecosystem standards, not isolated requests:

| Focus Area | Project Signals | Specific Need |
|-----------|----------------|---------------|
| **Token/Context Efficiency** | OpenClaw (#67419: 20-30% bootstrap waste), Hermes (#80449: oversized turns), PicoClaw (#3321: prefix caching), IronClaw (#7177) | Progressive/staged context injection; caching-aware prompt layout; per-call token accounting |
| **Memory & Session Reliability** | OpenClaw (#116201: unbounded state), NanoBot (#5231/#5280: Dream archival), Hermes (#79278/#79624: compression crashes), CoPaw (#6772: ReMe), ZeroClaw (#9805: stuck runs) | Atomic memory flushes; safe compression; per-session isolation; archival before pruning |
| **Security & Secrets Handling** | NanoBot (#5278: session history exposure), ZeroClaw (#9813/#9386: API key leakage), CoPaw (#6775: malware false positive), IronClaw (#7384: error leakage) | Secrets redaction in logs/errors; session isolation from agent tools; sandbox confinement |
| **Tool/MCP Ecosystem** | OpenClaw (#85030: subagent MCP), NanoBot (#5288: Agent Plugins), NanoClaw (#3190: Tavily MCP), ZeroClaw (#9810: agent-plugins.org), PicoClaw (#3302: OAuth 2.1) | Standardized plugin packaging; subagent tool injection; OAuth for MCP servers |
| **Observability & Cost Tracking** | OpenClaw (#13219), NanoBot (#5266: token burn), Hermes (#81438: execution leases), ZeroClaw (#8933: OTel correlation), IronClaw (#7385: metrics) | Per-model/per-call usage logging; OTel trace correlation; health-check integrity |
| **Multi-Channel Parity** | OpenClaw (Slack Enterprise), NanoBot (#5286: Matrix), PicoClaw (#3320: WhatsApp dead), NanoClaw (#3199: Mattermost), ZeroClaw (#9814: XMPP), CoPaw (#6804: WeChat) | Consistent UX across channels; per-channel reliability fixes; feature parity (stickers, reactions, session mgmt) |
| **CLI/Config Recovery** | IronClaw (#7340: factory reset), ZeroClaw (#9770: silent config discard), LobsterAI (#2443: model ID parsing), CoPaw (#6615: config loader) | Reset-to-defaults; config validation; silent-failure elimination |

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target User | Architectural Distinction |
|---------|--------------|-------------|---------------------------|
| **OpenClaw** | Enterprise-grade reliability, cross-channel breadth, release engineering | Power users, production deployments, multi-platform | Monorepo + release train; gateway runtime; versioned state migrations |
| **NanoBot** | Security, channel hardening, memory pipeline (Dream) | Self-hosters, enterprise pilots, security-conscious | Per-session sandboxing; agent plugins; strict isolation |
| **Hermes Agent** | AI-native loop development, delegation, Kanban | Developers, AI researchers | "God-file" refactoring; persistent ACP background subagents; profiles |
| **PicoClaw** | Lightweight Go implementation, channel breadth, TTS | Cost-sensitive, embedded/resource-constrained | Go runtime; prefix caching; seahorse summarizer |
| **NanoClaw** | Channel adapters, skills ecosystem, setup wizard | First-time users, SMB, multi-channel | v2 ChannelAdapter pattern; wizard-based onboarding; MCP skill standard |
| **IronClaw** | Documentation integrity, QA hardening, sandbox profiles | NearAI platform users, automation-heavy | Doc-truth pipeline; bug-bash P1 culture; disclosure benchmarks |
| **LobsterAI** | Desktop app polish, Cowork, installer reliability | Desktop users, Windows-first | Electron-based; patch-frequency release cadence; Cowork integration |
| **CoPaw** | Qwen-model optimization, desktop mode, plugin market | Qwen/Aliyun ecosystem, Chinese-language users | QwenPaw desktop beta; stricter provider compat; memory (ReMe) subsystem |
| **ZeroClaw** | Rust-based, RFC-driven architecture, security hardening | Security-sensitive, self-hosters, OTel adopters | Rust + OTel native; strict RFC governance; workspace security policy |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration — Release Imminent or Shipping
| Project | Signal | Assessment |
|---------|--------|------------|
| **OpenClaw** | 2026.8.1 train prepped; 88 PRs merged | Large-batch stabilization; expected release this week |
| **IronClaw** | rc.1→rc.2 trajectory; QA bug-bash wave | Release candidate imminent (~1-2 weeks) |
| **LobsterAI** | 2026.8.7 shipped; bug→PR <24h | Steady patch cadence; mature desktop product |
| **CoPaw** | v2.1.0-beta.2 out; aggressive beta fixation | Beta cycle nearing stable; plugin market focus |

### Tier 2: Active Development — Healthy but Not Shipping
| Project | Signal | Assessment |
|---------|--------|------------|
| **NanoBot** | 11 PRs merged; security fixes landing | Production-hardening for imminent release |
| **NanoClaw** | Clean tracker; v2 adapters maturing | Feature-complete skills accumulating; release bundle likely |
| **Hermes Agent** | God-file sharding; feature PRs closed | Architectural consolidation; release possible but not certain |

### Tier 3: Review-Bottlenecked — Contributor Momentum at Risk
| Project | Signal | Assessment |
|---------|--------|------------|
| **PicoClaw** | Quality PRs stale 2.5-3+ weeks; 0 merges | Needs maintainer bandwidth; WhatsApp outage urgent |
| **ZeroClaw** | 100 items updated, 3 merged; security bugs urgent | Merge throughput severely constrained; fix PRs queued |

### Tier 4: Dormant/No Activity
| Project | Assessment |
|---------|------------|
| **NullClaw**, **TinyClaw**, **Moltis** | No 24h activity; status unclear — may be planned or paused |

---

## 7. Trend Signals

### For AI Agent Developers

1. **Silent Failures Are the New P0** — Across OpenClaw (#116277), IronClaw (#7246), ZeroClaw (#9770), and CoPaw (#6768), users are increasingly intolerant of agents that fail without logs, errors, or fallbacks. **Implication**: Build observable failure paths — every silent catch should emit a structured error and surface to the user.

2. **Context is the Currency** — Token waste (OpenClaw #67419: 20-30% from bootstrap re-injection), oversized turns (Hermes #80449), and broken prefix caching (PicoClaw #3321) all point to the same pressure: context efficiency is now a **product requirement**, not a performance optimization. **Implication**: Design prompt layouts, tool schemas, and memory pipelines with token budgets as first-class constraints.

3. **Security is Converging on Isolation** — Three independent projects (NanoBot #5278, ZeroClaw #8424/#9815, IronClaw #7214) are addressing the same gap: agents can read their own session history, configuration, and secrets. **Implication**: Session isolation from agent tools is becoming table stakes — workspace-relative forbidden paths and per-session sandboxes will soon be expected defaults.

4. **Plugin Standardization is the Next Platform War** — NanoBot (#5288), ZeroClaw (#9810), and NanoClaw (#3190) are all converging on vendor-neutral packages (agent-plugins.org style) with `plugin.json`+`skills/`+`mcp.json`. **Implication**: Early movers who align with these standards will capture ecosystem mindshare; proprietary plugin formats will face migration pressure.

5. **Observability Is a Feature, Not Infrastructure** — Token logging (NanoBot #5266, OpenClaw #13219), OTel conversation correlation (ZeroClaw #8933), and tool-disclosure metrics (IronClaw #7385) are being requested by end-users, not just operators. **Implication**: Per-call usage dashboards and cost-per-agent reporting are likely differentiators in enterprise adoption.

6. **Multi-Channel Parity Is a Retention Driver** — Users expect identical UX across Telegram, Slack, WhatsApp, Discord, and custom channels (stickers, reactions, session management, media support). **Implication**: Channel parity should be a gating criterion for new features — a feature on one channel but not others is now seen as a bug.

7. **Configuration Recovery Is Underrated** — IronClaw (#7340: reset-to-defaults), ZeroClaw (#9770: silent discard), and LobsterAI (#2443: model ID parsing) highlight that users increasingly need **undo-able, validated, self-documenting configuration**. **Implication**: Ship with factory-reset, config dry-runs, and silent-failure detection baked in.

---

*Report generated from project digests dated 2026-08-08. Activity metrics are 24-hour snapshots; release status reflects the reporting window only.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-08

## 1. Today's Overview

NanoBot shows a high-velocity development cadence this week, with 21 pull requests updated in the last 24 hours (11 merged/closed) and 9 issues updated (7 still active). The project is in an active hardening phase, with a strong focus on security (session history placement, per-session sandboxing), channel-specific bug fixes (Telegram, Matrix, WeChat, WhatsApp), and memory/transcript persistence improvements. No new releases were published, but the volume of merged PRs suggests a significant drop is imminent. Overall project health appears strong, with maintainers actively responding to community-reported bugs and a clear roadmap toward production-hardening features.

## 2. Releases

No new releases were published in the last 24 hours. The project appears to be between release cycles, with a large batch of merged fixes and features accumulating for the next versioned release.

## 3. Project Progress

Eleven PRs were merged or closed in the last 24 hours, demonstrating substantial forward progress:

- **fix(channels): preserve global progress defaults** (#5287) — Restores global `sendProgress`/`sendToolHints` defaults while keeping WeChat-specific quota-safe defaults.
- **fix(webui): stage out-of-media-root attachments on history reads** (#5268, fixes #5264) — Fixes missing `media_urls` in history API for files outside the media root.
- **fix(weixin): harden protocol delivery, streaming, and login** (#5263) — Major WeChat channel hardening against protocol changes, QR challenges, and stale sessions.
- **fix(webui): preserve newly created topic route** (#5285) — Fixes a race condition where a newly created topic's route was lost.
- **refactor(webui): remove legacy session messages route** (#5284) — Removes an undocumented API endpoint no longer needed by the WebUI.
- **fix: modernize dependency recovery guidance** (#5282) — Updates docs to use `nanobot plugins enable` commands instead of stale direct-package installs.
- **fix(webui): keep activity text crisp while fading edges** (#5281) — UI polish for the activity scrollport fade.
- **fix(memory): archive short idle sessions for Dream** (#5280) — Complements earlier Dream-archival work; short sessions now produce `history.jsonl` entries.
- **fix(session): preserve proactive channel delivery during session retention trimming** (#5272, fixes #5273) — Prevents cron/delivery messages from being dropped when history is trimmed.
- **feat(webui): expand model preset editor inline** (#5277) — UI enhancement for model preset editing.
- **feat(memory): archive idle sessions for Dream** (#5231) — Introduces the idle-session archival mechanism for Dream memory input.

Key themes: WebUI reliability fixes, WeChat channel hardening, session/memory retention correctness, and Dream memory pipeline improvements.

## 4. Community Hot Topics

- **[Token consumption logging (#5266)](https://github.com/HKUDS/nanobot/issues/5266)** — 10 comments. A user reports "millions of tokens burned" in 2 hours with no visible user activity and requests token consumption logging. This is the highest-comment issue today and reflects growing enterprise cost concerns. The underlying need is observability into per-call token usage.
- **[No audio on WhatsApp (#5149)](https://github.com/HKUDS/nanobot/issues/5149)** — 5 comments. User cannot send audio messages on WhatsApp (receives them fine). Mentions `neonize.utils.ffmpeg` warnings, suggesting a codec/pipeline issue.
- **[Session-level temporary file isolation (#5276)](https://github.com/HKUDS/nanobot/issues/5276)** — 2 comments. Even with `restrictToWorkspace` and bwrap sandboxing, the workspace is globally shared. User requests per-session isolation—this is a security-driven ask.
- **[Repeated replies from /goal (#5256)](https://github.com/HKUDS/nanobot/issues/5256)** — 1 comment. A single `/goal` message triggers dozens of near-identical replies while waiting for user input. Likely a loop-detection gap.
- **[Session history inside workspace is a security risk (#5278)](https://github.com/HKUDS/nanobot/issues/5278)** — 1 comment. The user argues session history should not live in `<workspace>/sessions/` since the agent's file tools can read it. This is a well-argued security finding, proactively addressed by PR #5279.

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#5278: Session history reachable by agent tools](https://github.com/HKUDS/nanobot/issues/5278) — agent can `read_file`/`list_dir` its own session history (since #713 moved sessions into workspace) | Open | [#5279](https://github.com/HKUDS/nanobot/pull/5279) — moves history outside workspace |
| **Medium** | [#5256: /goal produces dozens of repeated replies](https://github.com/HKUDS/nanobot/issues/5256) — unbounded reply loop while waiting for user input | Open | No PR yet |
| **Medium** | [#5264: History API drops media_urls for out-of-media-root files](https://github.com/HKUDS/nanobot/issues/5264) | Closed | Fixed in [#5268](https://github.com/HKUDS/nanobot/pull/5268) |
| **Medium** | [#5273: Session retention drops proactive delivery messages](https://github.com/HKUDS/nanobot/issues/5273) | Closed | Fixed in [#5272](https://github.com/HKUDS/nanobot/pull/5272) |
| **Low** | [#5149: No audio on WhatsApp](https://github.com/HKUDS/nanobot/issues/5149) — cannot send audio, receives fine | Open | No PR yet; ffmpeg warnings point to codec issue |
| **Low** | [#5290: Triple-duplicated atomic JSONL write idiom](https://github.com/HKUDS/nanobot/issues/5290) — code smell, not a functional bug | Open | No PR yet |

Two of the three "High"/"Medium" bugs have fix PRs already in review, showing strong maintainer response.

## 6. Feature Requests & Roadmap Signals

- **[Agent Plugins integration with CLI Apps (#5288, open PR)](https://github.com/HKUDS/nanobot/pull/5288)** — Vendor-neutral package format unifying Agent Skills and MCP servers with the CLI-Anything catalog. This is a significant architectural direction.
- **[Per-session sandbox isolation (#5283, open PR)](https://github.com/HKUDS/nanobot/pull/5283)** — Opt-in `per_session_sandbox` mode giving each non-WebUI session its own isolated filesystem. Directly addresses community security concerns from #5276.
- **[Computer use / browser tools (#4276, open PR since June)](https://github.com/HKUDS/nanobot/pull/4276)** — Model-agnostic computer_use and browser automation tools, still in review after 2 months.
- **[Temporary chat mode in WebUI (#5252, open PR)](https://github.com/HKUDS/nanobot/pull/5252)** — Non-persistent multi-turn chats, created on first message.
- **[Telegram stickers and message reactions (#5289, feature issue)](https://github.com/HKUDS/nanobot/issues/5289)** — Community request for sticker support and agent-initiated reactions.
- **[Subagent transcript persistence (#5291, open PR)](https://github.com/HKUDS/nanobot/pull/5291)** — Subagent conversations (tool calls, reasoning) currently vanish; this PR persists them.
- **[Token consumption logging (#5266)](https://github.com/HKUDS/nanobot/issues/5266)** — Likely to be picked up soon given 10 comments and enterprise cost pressure.

Most likely to land in the next release: session-history security fix (#5279), per-session sandbox (#5283), agent plugins (#5288), and token logging (#5266).

## 7. User Feedback Summary

- **Cost dissatisfaction**: The token-burn complaint (#5266) is the loudest signal. Users need per-call token accounting to detect runaway costs from background processes.
- **Security awareness**: Multiple users (whisperity, lmzopq) independently raised session isolation concerns. They understand the sandbox model and want it enforced more strictly.
- **Channel reliability**: Telegram silent polling stall (#5156), WhatsApp audio (missing), WeChat protocol drift (#5263), and Matrix thread isolation (#5286) show users run in production across many channels and expect parity.
- **Positive feedback signals**: Users are engaging with the Dream memory system and the memory archive PRs (#5231, #5280) show responsiveness to user-reported gaps in the memory pipeline.
- **Quality-of-life asks**: Sticker support (#5289), temporary chats (#5252), and inline model editor (#5277) reflect users pushing the WebUI toward more polished ends.

## 8. Backlog Watch

- **[PR #4276: Computer use tools](https://github.com/HKUDS/nanobot/pull/4276)** — Open since June 10 (2 months) with no recent maintainer activity. High-value feature that maintains momentum if reviewed.
- **[PR #5156: Telegram polling stall fix](https://github.com/HKUDS/nanobot/pull/5156)** — Open since July 29; the issue it fixes (#5171) affects production reliability. Needs maintainer review.
- **[Issue #5149: WhatsApp audio](https://github.com/HKUDS/nanobot/issues/5149)** — 11 days old with 5 comments and no fix or maintainer response. Users are blocked on media support.
- **[Issue #5256: /goal reply loop](https://github.com/HKUDS/nanobot/issues/5256)** — 3 days old, only 1 comment from the author. The severity (dozens of repeated replies) warrants closer attention.
- **[Issue #5290: Atomic JSONL duplication](https://github.com/HKUDS/nanobot/issues/5290)** — Productive refactor suggestion that will reduce maintenance burden across three writers. Low urgency but low effort.

---

**Overall**: NanoBot is in a healthy, active state. Security hardening and channel reliability dominate this snapshot, with strong PR-to-issue correlation (fixes landing within days). The backlog is short and mostly contains elderly feature PRs rather than abandoned bugs. The biggest near-term risk is the lack of an official release bundling these 11+ fixes.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Based on the GitHub data from Hermes Agent for 2026-08-08, here is the project digest:

---

## 1. Today's Overview

The Hermes Agent project is in a phase of high activity and architectural consolidation, with 50 issues and 50 PRs updated in the last 24 hours. The project is actively executing a "god-file sharding" campaign to decompose large monolithic code files, as evidenced by the substantial activity around this epic. While there are no new releases today, the volume of open issues (46) suggests an active user base, but a significant proportion of these issues are emerging bugs in areas like session state management, compression, and platform-specific integrations. Maintainer attention appears to be heavily focused on PR reviews and merging code, as indicated by the 45 open PRs that require attention to clear the backlog.

## 2. Releases

No new releases were published for Hermes Agent in the last 24 hours. The project's focus is on resolving bugs and refactoring code rather than shipping new versions at this time.

## 3. Project Progress

Five PRs were merged or closed today, reflecting progress on specific fixes:

- **[PR #4950] (Closed) feat(delegation): add persistent ACP background subagents**: This significant feature adds support for persistent background subagents within Docker sandboxes, enhancing the delegation workflow. It closes issue #4949.
- **[PR #81358] (Closed) fix(kanban): exempt delegated children from the kanban stop-guard nudge (#80507)**: This PR directly addresses a critical bug where delegated child processes were incorrectly subjected to the parent Kanban's exit guard, exhausting turn budgets. The closure indicates a fix is likely merged for issue #80507.
- **[PR #79331] (Closed) [Bug]: Telegram Rich Messages omit standard copy affordance for code blocks**: The bug reporting that Telegram Rich Messages lacked a copy button for code blocks was closed, likely indicating a solution was implemented or the approach was changed.

These closures, particularly the Kanban fix, indicate a responsive effort to resolve session-state and delegation issues that are prominent in the issue tracker.

## 4. Community Hot Topics

The most active discussions highlight deep architectural and UX concerns:

- **[Issue #78647: Epic: Shard all 20 god files — repo-wide god-file decomposition](https://github.com/NousResearch/hermes-agent/issues/78647)**: With 60 comments, this is by far the most active item. It represents a major, repo-wide refactoring effort to break down monolithic code files ("god files"). The high engagement suggests this is a controversial or highly collaborative process. This is a key architectural signal, indicating the project is prioritizing code maintainability and developer experience over new features. Related PRs like #80373 are actively contributing to this epic.
- **[Issue #64182: Tracking: Plugin Interface Expansion — community ideas, July 2026](https://github.com/NousResearch/hermes-agent/issues/64182)**: With 30 comments, this shows a strong community desire for expanding the plugin system. This is a direct signal for feature development, as the issue aims to formalize and ship a stable, extensible plugin interface to unblock community contributors.
- **[Issue #47349: Feature: Configurable Memory Backends](https://github.com/NousResearch/hermes-agent/issues/47349)**: With 15 comments and 1 👍, this request for replacing the hardcoded memory files (`MEMORY.md`, `USER.md`) with configurable backends (like honcho/fact_store) plus the idea of renaming `memory.md` to `rules.md` is a significant topic, showing user desire for more flexible and powerful memory management.

## 5. Bugs & Stability

There are several high-severity bugs reported today, primarily concentrated in session state and compression, which are critical for agent reliability.

- **P1 - [Issue #79278: context compression can drop an in-flight tool chain](https://github.com/NousResearch/hermes-agent/issues/79278)**: This is the most severe bug, describing an unsafe scenario where context compression can cause an agent to replay a non-idempotent operation after a side effect has already occurred. **No fix PR is present.**
- **P1 - [Issue #79624: Gateway crashes with exit(1) during preflight compaction on restart](https://github.com/NousResearch/hermes-agent/issues/79624)**: The gateway process crashes and exits for sessions exceeding a token threshold, killing the process entirely. **No fix PR is present.**
- **P1 - [Issue #65365: OAuth (Claude Pro/Max): exposing `memory` or `session_search` tool schema deterministically triggers HTTP 400](https://github.com/NousResearch/hermes-agent/issues/65365)**: This is an integration-breaking bug for users on a paid Anthropic subscription, causing session failures whenever specific tools are enabled. **No fix PR is present.**
- **P2 - [Issue #81436 PR](https://github.com/NousResearch/hermes-agent/pull/81436) fix: handle non-class response in debug logging (vars() crash)**: A developer who uses a custom OpenAI-compatible endpoint reported a crash in the debug logging. A fix PR is available.
- **P2 - [Issue #80449: Compressor keeps an oversized single turn whole](https://github.com/NousResearch/hermes-agent/issues/80449)**: The compressor fails to summarize or truncate overly large single turns, leading to blown token budgets and potential context issues. **No fix PR is present.**
- **P2 - [Issue #80398 PR](https://github.com/NousResearch/hermes-agent/pull/80398) fix(gateway): place auto-TTS output under HERMES_HOME write-safe tree**: This PR fixes an issue where auto-TTS output is written to a location outside the allowed root, preventing it from working in Docker environments.

## 6. Feature Requests & Roadmap Signals

Several feature requests indicate strong community interest and potential roadmap items:

- **Interruptible Per-Tool Execution Lease / Watchdog ([Issue #81438](https://github.com/NousResearch/hermes-agent/issues/81438))**: This new request for more granular execution control with absolute deadlines and heartbeats signals a need for finer-grained reliability and resource management.
- **First-class Teams ([Issue #81405](https://github.com/NousResearch/hermes-agent/issues/81405))**: A new feature request for persistent multi-profile teams with channels and managed work, building on existing profiles and Kanban to enable more complex multi-agent collaboration workflows.
- **Configurable Temperature Parameter ([Issue #17565](https://github.com/NousResearch/hermes-agent/issues/17565) - 13 👍)**: Despite being older, this high-reaction request for user-facing temperature control is a strong candidate for a future release as a core model inference feature.

These suggestions, particularly around execution control and multi-agent teams, point to a vision of a more robust and orchestrated agent platform.

## 7. User Feedback Summary

User pain points are evident in the reported bugs and feature requests. Users are experiencing significant instability issues related to session state management, particularly during compression and restarts, which can lead to crashes and unsafe replays ([#79278](https://github.com/NousResearch/hermes-agent/issues/79278), [#79624](https://github.com/NousResearch/hermes-agent/issues/79624)). Platform-specific bugs are also a recurring theme, with issues on Windows (black windows, pathing problems) and Telegram (message delivery). There is a clear demand for more configurability and control, from memory backends ([#47349](https://github.com/NousResearch/hermes-agent/issues/47349)) to model inference parameters like temperature ([#17565](https://github.com/NousResearch/hermes-agent/issues/17565)). The active discussion on the "god-file" refactoring epic indicates that the community is not just using the tool but is engaged with its internal architecture, with some accepting the major churn it may cause in PRs, while others may be concerned about the huge effort.

## 8. Backlog Watch

Several older issues with substantial community interest remain open and require maintainer attention:

- **[Issue #13332: Feature: Hybrid Tool Pre-Selection (Semantic + Keyword)](https://github.com/NousResearch/hermes-agent/issues/13332)**: Created April 21, this feature request to reduce token overhead via semantic tool pre-selection has 4 👍 but hasn't seen a fix or update that satisfies it. It addresses a core performance concern for users.
- **[Issue #509: Feature: Cognitive Memory Operations](https://github.com/NousResearch/hermes-agent/issues/509)**: Opened March 6, this request for LLM-driven memory encoding and consolidation has 4 👍 and remains one of the top-voted memory features, but has not moved.
- **[Issue #18374: feat(cronjob): expose full cron prompt via get/include_prompt for sandboxed agents](https://github.com/NousResearch/hermes-agent/issues/18374)**: Created May 1st, with 5 👍, this request to allow sandboxed agents to read full cron prompts has been open for over 3 months.

These long-standing requests for tool-efficiency and cognitive features, coupled with high 👍 reactions, highlight areas of user demand that have not yet been addressed and may be slipping behind the more immediate bug fixes and refactoring work.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-08-08

---

## 1. Today's Overview

PicoClaw shows steady maintenance activity with 4 issues and 14 PRs updated in the last 24 hours, though activity is heavily weighted toward automated dependency bumps (7 of 14 PRs) and older items approaching staleness. The project has **no new releases** and **zero merged PRs today**, indicating a consolidation phase rather than active feature rollout. Notable human-driven activity centers on **WhatsApp channel repair**, **seahorse bug fixes**, and **prefix caching optimization** — suggesting ongoing reliability work across core channels. With most issues and PRs now marked stale, maintainer bandwidth appears focused on targeted fixes rather than broad triage. The presence of several high-quality open PRs (WhatsApp fix, DingTalk image support, fallback chains) awaiting review suggests a **review bottleneck** is the primary constraint on project velocity.

---

## 2. Releases

**No new releases** in the last 24 hours. 

The most recent release predates this digest window. Given the accumulation of open PRs (particularly dependency updates and bug fixes), a release bundling stability improvements — including the WhatsApp client fix ([#3320](https://github.com/sipeed/picoclaw/pull/3320)) and exec tool timeout handling ([#3319](https://github.com/sipeed/picoclaw/pull/3319)) — is likely imminent but has not yet materialized.

---

## 3. Project Progress

**Merged/Closed PRs (2):**

- **[#3289](https://github.com/sipeed/picoclaw/pull/3289) [CLOSED]** — `build(deps): bump github.com/pion/rtp from 1.10.2 to 1.10.5` (dependency update, closed without merge)
- **[#3291](https://github.com/sipeed/picoclaw/pull/3291) [CLOSED]** — `build(deps): bump github.com/github/copilot-sdk/go from 0.2.0 to 1.0.8` (major version bump, closed without merge)

**No PRs were merged today.** The two closed PRs were dependency updates that were closed rather than merged, likely due to breaking changes in major version bumps (e.g., copilot-sdk going 0.2.0 → 1.0.8). 

**Active feature/fix work in review:**

- **WhatsApp channel reliability** — [#3320](https://github.com/sipeed/picoclaw/pull/3320) addresses the "client outdated (405)" error by bumping whatsmeow, blocking the native WhatsApp channel from functioning
- **Exec tool correctness** — [#3319](https://github.com/sipeed/picoclaw/pull/3319) fixes timeout honoring and boolean option types (background/pty declared as strings)
- **Prefix caching optimization** — [#3321](https://github.com/sipeed/picoclaw/pull/3321) moves dynamic context after history to preserve anthropic-style prefix caching
- **Seahorse bug fix** — [#3279](https://github.com/sipeed/picoclaw/pull/3279) prevents tool-call format leakage into LLM summaries (open since July 21)
- **DingTalk image support** — [#3283](https://github.com/sipeed/picoclaw/pull/3283) adds picture/image message inbound with token caching (open since July 22)
- **DashScope TTS + WeChat audio** — [#3270](https://github.com/sipeed/picoclaw/pull/3270) adds Alibaba Cloud TTS provider and WeChat audio file sending (open since July 20)
- **Model fallback chain** — [#3200](https://github.com/sipeed/picoclaw/pull/3200) adds configurable default fallback chain persisted through backend (open since July 1)
- **Provider model name refresh** — [#3271](https://github.com/sipeed/picoclaw/pull/3271) updates default model IDs across 9 providers (open since July 20)

---

## 4. Community Hot Topics

**Most Active Discussions:**

1. **[#3093 — SimpleX/tox gateway request](https://github.com/sipeed/picoclaw/issues/3093)** — 6 comments, 1 👍 (now closed as stale)
   - User requests gateway support for SimpleX, Wire, or Tox. Closed without resolution; underlying need for **privacy-preserving communication channels** remains unmet.

2. **[#3308 — Code Review: Concurrency/goroutine leaks](https://github.com/sipeed/picoclaw/issues/3308)** — 1 comment, detailed technical analysis
   - Community member performs deep code review of SeaHorse, Channel Manager, and Hooks, flagging **concurrency hazards, goroutine leaks, and memory/speed optimizations**. Signals strong community technical engagement and desire for code quality improvements.

3. **[#3307 — Session management from Telegram](https://github.com/sipeed/picoclaw/issues/3307)** — 1 comment
   - Users want **session list/switch/delete capabilities from Telegram and other chat channels**, matching the Web UI's session-history-menu. Underlying need: parity between web and chat-channel UX.

4. **[#3302 — OAuth 2.1 for MCP servers](https://github.com/sipeed/picoclaw/issues/3302)** — 2 comments
   - Feature request for OAuth 2.1 support in MCP server connections, referencing prior issue #2546. Marked as "Nice-to-Have / Enhancement".

---

## 5. Bugs & Stability

**Active Bugs (ranked by severity):**

1. **HIGH — WhatsApp channel dead ("client outdated 405")** — [#3320](https://github.com/sipeed/picoclaw/pull/3320)
   - Complete channel failure: socket connects then drops with `Client outdated (405)`, no reconnect attempted. **Fix PR exists and is fresh (created today)** — needs review/merge.

2. **MEDIUM — Tool-call format leakage into LLM summaries (seahorse)** — [#3279](https://github.com/sipeed/picoclaw/pull/3279)
   - `partsToReadableContent` in seahorse leaks tool-call formatting into user messages, corrupting LLM context. **Fix PR open since July 21** — awaiting review for 2.5 weeks.

3. **MEDIUM — Exec tool ignores per-run timeout** — [#3319](https://github.com/sipeed/picoclaw/pull/3319)
   - Synchronous exec always uses global timeout, silently ignoring the advertised per-run `timeout` argument. Schema also misdeclares boolean options (background/pty) as strings. **Fix PR created today.**

4. **LOW — Prefix caching inefficiency** — [#3321](https://github.com/sipeed/picoclaw/pull/3321)
   - Dynamic context block inside system message ahead of conversation history invalidates prefix caching on every request, reducing cost/latency efficiency. **Fix PR created today.**

**Note:** The issue tracker shows no new bug reports in the last 24 hours beyond the staleness-marked items from July 30 (including the code review issue [#3308](https://github.com/sipeed/picoclaw/issues/3308), which functions as a community-identified bug report for concurrency issues).

---

## 6. Feature Requests & Roadmap Signals

**Open Feature Requests:**

| Issue | Request | Age | Status |
|-------|---------|-----|--------|
| [#3307](https://github.com/sipeed/picoclaw/issues/3307) | Session list/switch from Telegram/chat channels | 9 days | Open, 1 comment |
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) | OAuth 2.1 for MCP servers | 9 days | Open, marked nice-to-have |
| [#3093](https://github.com/sipeed/picoclaw/issues/3093) | SimpleX/Wire/Tox gateways | 2 months | **CLOSED as stale — abandoned** |

**Prediction for next release:**
- **WhatsApp fix** ([#3320](https://github.com/sipeed/picoclaw/pull/3320)) is critical-path — a dead channel demands immediate merge
- **DashScope TTS + WeChat audio** ([#3270](https://github.com/sipeed/picoclaw/pull/3270)) has been open ~3 weeks and is feature-complete — likely candidate for next release
- **Fallback chain** ([#3200](https://github.com/sipeed/picoclaw/pull/3200)) has been open for 5+ weeks and is a substantial UX feature — may land if maintainers prioritize user-visible improvements
- **Session management from chat channels** ([#3307](https://github.com/sipeed/picoclaw/issues/3307)) aligns with the existing Web UI feature and is likely achievable — moderate probability for a near-term minor release

---

## 7. User Feedback Summary

**Pain Points:**

- **WhatsApp is unusable** — the client-outdated error kills the entire channel with no auto-recovery. This is an active channel outage affecting real users.
- **Chat-channel UX parity gap** — Telegram users cannot manage sessions (list/switch/delete) despite the Web UI having full support. Users want feature parity across access methods.
- **Privacy-focused communication channels missing** — the SimpleX/Tox request (now closed stale) reflects demand for non-centralized, privacy-preserving integrations that remain unaddressed.
- **MCP OAuth 2.1 support** — users want standardized auth for MCP servers, though it's acknowledged as an enhancement rather than core.

**Satisfaction Signals:**

- Community members are **proactively submitting code reviews** (like #3308) with detailed concurrency analysis — indicating deep engagement and care for code quality
- Multiple contributors are **volunteering substantial features** (DingTalk images, DashScope TTS, WeChat audio) — evidence of a healthy contributor community
- The model provider refresh PR ([#3271](https://github.com/sipeed/picoclaw/pull/3271)) shows active maintenance of provider integrations across 9 platforms

---

## 8. Backlog Watch

**PRs needing maintainer attention:**

| PR | Description | Age | Urgency |
|----|-------------|-----|---------|
| [#3320](https://github.com/sipeed/picoclaw/pull/3320) | WhatsApp "client outdated 405" fix | 1 day | **CRITICAL** — dead channel, fresh fix |
| [#3319](https://github.com/sipeed/picoclaw/pull/3319) | Exec tool timeout/boolean fix | 1 day | High — correctness bug |
| [#3321](https://github.com/sipeed/picoclaw/pull/3321) | Prefix caching optimization | 1 day | Medium — cost/latency |
| [#3279](https://github.com/sipeed/picoclaw/pull/3279) | Seahorse tool-call leakage fix | 18 days | High — data corruption in summaries |
| [#3283](https://github.com/sipeed/picoclaw/pull/3283) | DingTalk image inbound | 17 days | Medium — feature-complete, unreviewed |
| [#3270](https://github.com/sipeed/picoclaw/pull/3270) | DashScope TTS + WeChat audio | 19 days | Medium — substantial feature, unreviewed |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | Configurable fallback chain | 38 days | Medium — UX feature, longest open |
| [#3271](https://github.com/sipeed/picoclaw/pull/3271) | Provider model name refresh | 19 days | Medium — providers may be outdated |

**Issues requiring response:**

- **[#3308](https://github.com/sipeed/picoclaw/issues/3308)** — Detailed community code review identifying concurrency hazards and goroutine leaks. Maintainers should acknowledge findings and indicate whether fixes are planned. Silent staleness would be a missed opportunity for community trust-building.

**Key observation:** The PR review queue shows a concerning pattern — quality contributor PRs (seahorse fix, DingTalk, DashScope TTS) are sitting unreviewed for **2.5–3+ weeks**. The backlog is growing faster than it is being consumed. If maintainers don't reallocate review bandwidth, contributor momentum may decline.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-08

## 1. Today's Overview
NanoClaw shows a **moderate-to-healthy development pulse** on 2026-08-08, with **10 PRs updated in the last 24 hours** (8 still open, 2 closed/merged) and **zero open issues**, indicating a clean, well-triaged issue tracker. The activity is heavily weighted toward **new channel integrations and skills**, reflecting the project's deliberate expansion as a personal AI assistant platform. Two notable architectural currents are visible: the continued migration of channel support to the **v2 `ChannelAdapter`/`channel-registry` pattern**, and the parallel development of the **setup wizard with agent templates** (part 2 of a two-part feature). While there were **no new releases** today, the volume and variety of merged and pending PRs suggest a steady feature cadence, with the community actively contributing both first-party and third-party capabilities.

## 2. Releases
No new releases were published within the reporting window. The last release remains unchanged, and no changelog or migration notes are available for this digest.

## 3. Project Progress
Two PRs were **closed/merged** in the last 24 hours, marking concrete progress in channel infrastructure and UX.

- **[PR #546 — Mattermost channel skill (Closed, superseded)](https://github.com/nanocoai/nanoclaw/pull/546)** — The original Mattermost integration attempt (targeting the pre-v2 `Channel` architecture) has been officially **closed and superseded** by PR #3199, which reimplements the integration against the current `ChannelAdapter` contract. This represents a healthy cleanup of stale PRs that no longer align with the evolving architecture.
- **[PR #3197 — Fix(progress): 失败状态展示具体原因](https://github.com/nanocoai/nanoclaw/pull/3197)** (Merged) — A quality-of-life fix for the progress/process card: the runner now extracts the first meaningful error message from the `resultSummary` and displays it as "动作失败：具体原因" (Action failed: specific reason), skipping exit-code boilerplate, credential lines, and generic failure text. The fix includes deduplication/desensitization logic, a 38-character line limit to prevent card truncation, and adds reducer unit tests plus Feishu card JSON cross-layer tests.

Notably, **feature development continues on the open front**, with the **setup wizard and first-agent template stamping** ([PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909)) moving forward — this is the second half of the agent-templates feature (loader landed in #2890) and represents a significant onboarding UX improvement.

## 4. Community Hot Topics
While no single PR has amassed high comment/reaction counts yet, the most **architecturally significant** and contended discussions are:

- **[PR #3199 — Mattermost channel integration (v2 ChannelAdapter)](https://github.com/nanocoai/nanoclaw/pull/3199)** — Fresh take on a long-running request. This PR supersedes #546 and correctly re-targets the current `ChannelAdapter`/`channel-registry.ts` contract. The very existence of a "v2 redo" signals the community's strong desire for Mattermost support, and the maintainers' willingness to restart implementations against the new architecture. This is the definitive thread to watch for Mattermost users.
- **[PR #3190 — Tavily MCP tool skill](https://github.com/nanocoai/nanoclaw/pull/3190)** and **[PR #3198 — AnyDoc document conversion skill](https://github.com/nanocoai/nanoclaw/pull/3198)** — These two skill submissions represent the **two main categories of user demand**: web/search utilities (MCP-based tooling) and document/document-conversion workflows. Both are likely to attract integration-testing feedback from the community.

## 5. Bugs & Stability
Only one merged fix directly addresses a **user-facing bug** this cycle:

- **[PR #3197 — Progress card shows generic failure text](https://github.com/nanocoai/nanoclaw/pull/3197)** (merged) — Users previously saw only vague messages like "执行系统检查失败" (Execution system check failed) even when the runner had reported a specific reason. Now the card surfaces the **first valid error reason**, filtered for privacy and wrapped to avoid card truncation. Impact: **Medium**. This is a UX bug affecting error diagnosis but not a system crash or data integrity issue.

Other open PRs with stability implications:
- **[PR #3145 — Backfill destinations for existing wirings (db migration)](https://github.com/nanocoai/nanoclaw/pull/3145)** — addresses a data-migration gap (missing channel destinations for pre-existing messaging wirings). If merged, this corrects legacy data, implying a potential **latent data inconsistency** for existing installs — important for long-term users.
- **[PR #3196 — Fix/add mount readonly](https://github.com/nanocoai/nanoclaw/pull/3196)** — a security-oriented fix (container mounts made read-only), pending review, suggesting an ongoing hardening effort.
- **[PR #2346 — Unknown slash commands treated as normal chat](https://github.com/nanocoai/nanoclaw/pull/2346)** — addresses a silent-drop bug where unrecognized commands were misrouted by the Agent SDK; fix falls through to `category: 'none'`.

## 6. Feature Requests & Roadmap Signals
Strong signals for the near-term roadmap emerge from this batch:

- **Multi-channel expansion continues**: Mattermost (via #3199) and **Dial** ([#3050](https://github.com/nanocoai/nanoclaw/pull/3050), adding Dial to the channel picker plus a new `runChannelSkill` model) are in-flight. Expect **Dial to ship soon**, as its PR is feature-complete and includes wizard/skill wiring.
- **Agent templates as first-class UX**: [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) adds a setup-wizard question ("How should we create your first agent?") plus first-agent "stamping." This points to an **onboarding overhaul** aimed at reducing time-to-value for new users — a likely highlight of the next release.
- **External tooling via MCP skills**: The Tavily skill (#3190) is a template for how third-party MCP tools will be integrated. This suggests the project is betting on **MCP as the standard extension point** for utility skills.
- **Skill ecosystem taxonomy**: The `/add-mattermost` and "AnyDoc" naming conventions signal a growing pattern of **self-contained, installable skills**, which may soon require a central skill registry or marketplace UI.

## 7. User Feedback Summary
- **Pain point (resolved)**: Users were frustrated by **opaque failure messages** in progress cards. The merged PR #3197 directly addresses the complaint "I have no idea what failed," converting vague titles into actionable, single-line error reasons.
- **Pain point (open, Mattermost)**: Mattermost users have waited since **February (PR #546 created)** for native support. The supersession of the OLD PR and the fresh reimplementation (#3199) create a **positive perception** that the maintainers are committed to the integration, rather than abandoning it.
- **Desire for utility breadth**: Two new utility skills (document conversion via AnyDoc, web search via Tavily) indicate users want NanoClaw to act as a **general-purpose tool runner**, not just a chat interface. The demand is for seamless integration with web services and document formats.
- **Satisfaction signal**: The absence of a "bug never fixed" mega-thread and the fast turnaround on the progress-card fix point toward a **healthy, responsive maintainer community**.

## 8. Backlog Watch
Items needing maintainer attention or a clear resolution path:

- **[PR #2346 — Unknown slash commands silently dropped](https://github.com/nanocoai/nanoclaw/pull/2346)** (open since **May 8**) — 3 months old, a behavioral-correctness fix. Its long dormancy suggests either a contentious design decision or a lack of review bandwidth. This directly affects day-to-day chat UX and should be prioritized or explicitly closed.
- **[PR #546 — Mattermost (old architecture)](https://github.com/nanocoai/nanoclaw/pull/546)** — now **closed/superseded** (good). Ensure community awareness is clear that #3199 is the successor, to avoid duplicate effort.
- **[PR #2909 — Setup wizard: agent templates](https://github.com/nanocoai/nanoclaw/pull/2909)** — open since **July 2**; the core-team PR is large (part 2 of 2) and carries risk. With no comments in the data, this may soon need a **design-review checkpoint** to avoid merge conflicts with the concurrent channel work (#3050, #3199).
- **[PR #3145 — DB migration (destinations backfill)](https://github.com/nanocoai/nanoclaw/pull/3145)** — data-affecting migration; needs careful review for upgrade-path safety across existing installs (especially those on older messaging-group wirings). This is a **correctness-over-features** item that should not languish.

---

*Data cut-off: 2026-08-08 00:00 UTC. Sourced from GitHub issues/PRs updated within the prior 24 hours.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-08

## 1. Today's Overview

IronClaw shows a high-activity, high-velocity development cadence. The project processed 50 issues and 50 PRs in the last 24 hours, with a significant majority (36 issues, 38 PRs) still open and actively being worked. A substantial part of the recent activity is a coordinated, community-driven effort to fix documentation drift (#7317, with a 5-PR "doc-truth" series from @thisisjoshford) and address a wave of QA-discovered bugs (many marked `bug_bash_P1`). The `reborn` runtime continues to be the central focus, with notable work on progressive tool disclosure, memory persistence, and channel delivery. While no new releases were cut, the volume of merged PRs aimed at stabilizing releases (`1.0.0-rc.1` → `1.1.0-rc.1`) suggests an imminent release candidate. The project's health looks robust, with a strong and responsive maintainer core, though the backlog of `bug_bash_P1` issues signals that QA is finding real stability and reliability gaps.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

The project saw 12 merged/closed PRs and issues today, marking significant progress across several fronts.

**Docs & Reliability:**
- **Doc-Truth Pipeline (PR #7375, #7376, #7378, #7379, #7381):** A coordinated 5-PR effort from @thisisjoshford directly addresses the critical documentation drift problem (#7317). These PRs rewrite outdated manifest docs (e.g., `[[tools]]` instead of legacy `[[host_api]]`), extend the path-reference gate to the docs surface, add doc-fact contract tests, and propose a new `docs-live` deployment branch to end version skew. This is a major step toward unifying docs with actual code behavior.
- **Sandbox Profiles (PR #7214):** `feat(sandbox)` added explicit Docker and Railway user-sandbox profiles, scoping workspaces/checkpoints to tenant + user and running commands in fresh, non-root Python workers. This enhances security and isolation.

**Core Runtime (reborn):**
- **Deferred Tool Retrieval (#7177):** Closed as an enhancement, improving the ranked search for deferred tools with schema-aware scoring.
- **Progressive Tool Disclosure (#6810):** Closed, marking the "safe default" feature as a success. The associated PR #6810 confirms bounded prompt budgets and no degradation in task completion.
- **Explicit Channel Delivery (#7157):** Merged, implementing the two-lane delivery model (conversation lifecycle + notification channels) and deleting old delivery heuristics.
- **Disclosure Benchmark (PR #7372):** Merged, pinning a schema-token reduction floor for the wide-catalog benchmark (91 tools) to prevent silent regression in prompt efficiency.

## 4. Community Hot Topics

The most active discussions highlight two major pain points: **configuration management** and **documentation truthfulness**.

- **[#7340: No way to reset model settings to factory defaults (6 comments)](https://github.com/nearai/ironclaw/issues/7340)** — This is the top hot topic. A user is frustrated by an inability to restore default model/provider settings. This touches on a fundamental UX need: failure recovery and the ability to undo misconfigurations.
- **[#6989: Token accounting bug: estimates from reference string, not content (4 comments)](https://github.com/nearai/ironclaw/issues/6989)** — A highly technical but critical bug where the model work request estimates input tokens from the length of a reference string, not the actual content it points to. This can corrupt token accounting and affect costs.
- **[#7317: Proposal: Doc-Truth Verification Pipeline (3 comments)](https://github.com/nearai/ironclaw/issues/7317)** — This proposal sparked a major initiative. It cites concrete examples of breaking changes (`origin_gate_matrix` becoming mandatory) shipped without doc updates, eroding user trust. The underlying need is for automated validation to ensure docs and code never diverge.

## 5. Bugs & Stability

The bug landscape is dominated by `bug_bash_P1` QA issues, pointing to a thorough reliability push. Issues are ranked by severity and potential impact.

**High Severity (Data Loss / Feature Broken):**
- **[#7292 (OPEN): Installed tool cannot be used; runner heartbeat error](https://github.com/nearai/ironclaw/issues/7292)** — After installing a tool, using it leads to a runner heartbeat error. This is a critical blocker for tool usage.
- **[#7298 (OPEN): Request fails before it could be sent; monitoring loses contact with runner](https://github.com/nearai/ironclaw/issues/7298)** — Infrastructure-level failures preventing any request from completing. Critical reliability issue.
- **[#5456 (OPEN): Routine runs fail with runner lease expiration](https://github.com/nearai/ironclaw/issues/5456)** — Long-running routines fail due to an overly aggressive 90-second inactivity lease. P1 blocker for automation use cases.

**High Severity (Hallucination / Wrong State):**
- **[#7246 (OPEN): Agent hallucinates automation status](https://github.com/nearai/ironclaw/issues/7246)** — The agent fabricates that an automation is running when none exists. A trust-eroding model behavior bug.
- **[#7247 (OPEN): Agent falsely claims GitHub is already connected](https://github.com/nearai/ironclaw/issues/7247)** — Similar hallucination issue regarding connection state.
- **[#7294 (OPEN): Agent incorrectly remembers a routine from another scope](https://github.com/nearai/ironclaw/issues/7294)** — Cross-thread memory contamination.

**Medium Severity:**
- **[#7368 (OPEN): Channel turns can take minutes on DeepSeek-class models](https://github.com/nearai/ironclaw/issues/7368)** — Latency issue causing user-visible delays.
- **[#7344 (OPEN): Slack connection not recognized despite being ACTIVE](https://github.com/nearai/ironclaw/issues/7344)** — State synchronization issue between channels and assistant.

**Documented & Closed:**
- **Telegram Bug Cluster (#6475, #6643, #6644):** All three QA bugs around Telegram pairing loops, unprocessed messages, and wrong user attribution were **closed**, showing that recent fixes (likely in channel delivery) have addressed these. This is a strong positive signal.
- **[#6476 (CLOSED): Slack extension_activate encoding error causing hallucination](https://github.com/nearai/ironclaw/issues/6476)** — Root cause was identified and split into separate issues (#7367 for docs) and fixed.

**Fix PRs in Flight:**
- **Memory Fix (#7185):** PR #7365 directly addresses the memory reliability bug with "memory-save guidance + always-on MEMORY.md prompt lane."
- **Tool Disclosure Metrics (#7385):** PR #7385 promises to expose durable, queryable tool-disclosure performance metrics, which will help debug future issues.
- **Operator .env Loading (#7384):** Directly addresses an issue where a bad API key error was falsely reported for a valid key.

## 6. Feature Requests & Roadmap Signals

Several clear roadmap signals emerged, prioritizing reliability, user control, and observability.

- **Configuration Reset:** The high engagement on #7340 strongly suggests a "reset to defaults" feature for settings is a priority. Expect a `settings reset` command in the CLI or a UI button in a future release.
- **Doc-Truth as a First-Class Concept:** The doc-truth pipeline proposal (#7317) and its 5-PR implementation indicate this will become a permanent part of the CI process, promising more stable and trustworthy docs.
- **Persisted-State Compatibility:** Issue #7380, an epic, calls for enforcing persisted-state compatibility before merge. Given the recent migration pain, this will likely become a hard gate in the release process, possibly via PR #7382's test infrastructure.
- **Memory Enhancements:** PR #7365 (memory-save guidance) and its follow-ups show the team is actively investing in making memory more reliable and useful.
- **Observability & Metrics:** PRs #7385 (metrics) and #7382 (stress coverage) point to a strong push on internal tooling for performance and reliability analysis.

## 7. User Feedback Summary

User feedback this week revolves around a mix of frustration with persistent bugs and a strong desire for more control and transparency.

- **Frustration with "Black Box" Behavior:** The abundance of "agent hallucinates status" bugs (#7246, #7247, #7294) is a major source of dissatisfaction. Users are frustrated when the agent confidently asserts something false, eroding trust in the system.
- **Configuration Pain:** The inability to reset model settings (#7340) and the confusing "bad API key" error (#7384) highlight a desire for more straightforward, recoverable configuration management.
- **Reliability of Automation:** The runner lease expiration (#5456) and failures in multi-tool workflows (#7074) are critical for users relying on IronClaw for scheduled tasks.
- **Docs Erode Trust:** The doc drift issue (#7317) is a clear example of dissatisfaction: users (and the model itself) are being led astray by outdated instructions. The community has rallied around this, which is a positive sign of a proactive user base.
- **Positive Signals:** The closing of the Telegram bug cluster shows users that reports are acted upon. The "Progressive tool disclosure" outcome (#7166) being declared safe and efficient is a significant positive milestone.

## 8. Backlog Watch

While maintainers are highly responsive, a few long-standing issues remain open and are worth monitoring.

- **[#5456 (OPEN): Routine runs fail with runner lease expiration](https://github.com/nearai/ironclaw/issues/5456)** — Created over a month ago (6/30), this is a P1 blocker for automation. It has been open for a long time without a clear fix PR, suggesting it's a deep architectural issue. This is a major candidate for needing maintainer attention.
- **[#5503 (OPEN): [Experiment] Add compact Google extension capabilities](https://github.com/nearai/ironclaw/pull/5503)** — An experimental PR from 7/01 for Gmail/Calendar context-efficient features. It's been open for over a month. Either it needs to be moved to a decision (merge, close, or break into smaller pieces).
- **[#6590 (OPEN): serve fails on Windows with "workspace root must not overlap"](https://github.com/nearai/ironclaw/issues/6590)** — A platform-specific bug (Windows) that's been open since 7/23. While not P1, it blocks Windows users from local development and needs a fix or clear workaround.
- **[#7131 (OPEN): deliver triggered run failures to the creator](https://github.com/nearai/ironclaw/pull/7131)** — A UX improvement PR that's been open since 8/04, waiting to be merged. It's a notable improvement for how users are notified of failures.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-08

## 1. Today's Overview

LobsterAI had a productive day with 7 issues and 7 PRs updated in the last 24 hours, alongside a new patch release (2026.8.7). The project shipped a batch of fixes covering Cowork conversation search, Markdown LaTeX rendering improvements, and Windows installer stability. Development velocity looks healthy: 6 of 7 PRs were merged/closed, and the maintainers quickly pushed a PR (#2452) addressing a bug reported just yesterday. Community involvement picked up with two new feature requests and a new bug report, though the bulk of issue activity continues to be triage and closure of stale items from early April.

## 2. Releases

**[2026.8.7 — LobsterAI 2026.8.7](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.7)**

Highlights:
- **feat(cowork): add title-bar conversation search** — In-conversation search is now accessible from the title bar, improving findability in long sessions.
- **feat: markdown latex math delimiters** — LaTeX math delimiters in Markdown rendering now work properly, addressing rendering fidelity issues.
- **fix(win-installer): rescue null watchdog exit code** — The Windows installer now handles null exit codes from the watchdog process gracefully, improving install/update reliability.

This is a minor patch release with no breaking changes or migration steps. It follows closely on the **2026.8.5** merge (PR #2451) that introduced Cowork search, improved IM analytics, OpenClaw configuration, and plugin installation robustness.

## 3. Project Progress

Six PRs were merged/closed, indicating a focused bug-fix and polish cycle:

- **[#2445](https://github.com/netease-youdao/LobsterAI/pull/2445)** — Fix OpenClaw `config.set` to strip plugin-index-managed keys, preventing conflicts when plugins write config.
- **[#2446](https://github.com/netease-youdao/LobsterAI/pull/2446)** — Windows installer rescue for null watchdog exit code.
- **[#2448](https://github.com/netease-youdao/LobsterAI/pull/2448)** — Fix for Chat search behavior.
- **[#2449](https://github.com/netease-youdao/LobsterAI/pull/2449)** — Markdown LaTeX math delimiters fix.
- **[#2450](https://github.com/netease-youdao/LobsterAI/pull/2450)** — Restore fullscreen code toolbar clickability on Windows by keeping overlays outside Electron drag regions.
- **[#2451](https://github.com/netease-youdao/LobsterAI/pull/2451)** — Merge `release/2026.8.5` to `main`, shipping accumulated improvements.

The open PR **[#2452](https://github.com/netease-youdao/LobsterAI/pull/2452)** addresses a provider-prefix preservation bug for model IDs containing slashes (related to issue #2443), indicating maintainers are actively responding to fresh user reports.

## 4. Community Hot Topics

| Item | Comments | Status | Summary |
|------|----------|--------|---------|
| [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) | 2 | Open | Self-built skill installed to OpenClaw directory but invisible in skill panel after restart |
| [#1263](https://github.com/netease-youdao/LobsterAI/issues/1263) | 2 | Closed | Scheduled tasks appear duplicated in UI with API rate-limit errors |
| [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) | 2 | Closed | sql.js WASM memory access out-of-bounds crash under high-frequency writes, plus non-atomic file writes |
| [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) | 1 | Open | SiliconFlow models with `/` in IDs unusable in UI; **fix PR #2452 already submitted** |
| [#2444](https://github.com/netease-youdao/LobsterAI/issues/2444) | 0 | Open | Feature request: input box edit mode (Enter-to-newline, Ctrl+Enter to send) |

**Analysis**: The most active thread is the stale issue #1195 about skill installation into OpenClaw's directory — an indication that the OpenClaw/Skill integration path continues to confuse users. The fastest-moving thread is issue #2443 (model ID with slashes), which saw a fix PR within a day — a sign of strong maintainer responsiveness. The input-box UX proposal (#2444) reflects a broader usability theme around long-prompt authoring.

## 5. Bugs & Stability

Severity-ranked list based on today's activity:

1. **High — [Issue #1273](https://github.com/netease-youdao/LobsterAI/issues/1273)** (closed as stale): Sql.js WASM memory crashes under high-frequency writes, with non-atomic `save()` risking permanent DB corruption. Note: the issue is closed, and there's no visible public fix in recent PRs — the underlying risk may still exist.
   
2. **Medium — [Issue #2443](https://github.com/netease-youdao/LobsterAI/issues/2443)**: Model IDs with `/` are persisted incorrectly, stripping the provider prefix. **Fix in progress via PR #2452**.
   
3. **Medium — [Issue #1195](https://github.com/netease-youdao/LobsterAI/issues/1195)** (stale): Skills installed into the wrong directory and invisible to the skill panel. No fix PR in the recent batch.
   
4. **Medium — [Issue #1263](https://github.com/netease-youdao/LobsterAI/issues/1263)** (closed as stale): Duplicate scheduled tasks in UI. Closed, presumably resolved, but worth verifying.
   
5. **Low — [Issue #2447](https://github.com/netease-youdao/LobsterAI/issues/2447)**: Executing commands returns no output and no error messages — user experience issue with unclear cause.

## 6. Feature Requests & Roadmap Signals

- **[#2444 — Input box edit mode](https://github.com/netease-youdao/LobsterAI/issues/2444)**: User proposes an "edit mode" toggle for the input box with Enter = newline, Ctrl+Enter = send, plus optional WYSIWYG Markdown. This is a classic power-user UX request, and the suggestion is well thought out (toggle to not penalize short prompts). Moderate likelihood of adoption, possibly in a UI polish release.
- **[#1265 — Per-agent IM bot/model binding](https://github.com/netease-youdao/LobsterAI/issues/1265)** (closed as stale): Multi-agent teams need different bots/models per agent — an architectural feature request. Even though closed, this signals a strong direction for multi-agent orchestration users.
- The release PR highlights Cowork search and LaTeX support — both are feature-forward signals that Cowork and the rendering layer are strategic focus areas.

## 7. User Feedback Summary

- **Pain points**: Cross-directory skill installations (OpenClaw vs LobsterAI) confuse users; misconfigured custom providers silently break rendering; input box Enter behavior causes accidental message sends; high-frequency sessions can crash the app.
- **Workarounds users are using**: Reporting crashes with detailed logs; manually adjusting provider configs; considering editor plugins for long-prompt authoring.
- **Positive signals**: Users responded quickly to new features (search, LaTeX), and the fast turnaround on issue #2443 (bug → PR in <1 day) suggests strong confidence in the team's responsiveness.
- **Dissatisfaction**: The stale status of #1195 and #1273 may frustrate affected users — though their closure without clear resolution hints the team either can't reproduce or is addressing them off-public-track.

## 8. Backlog Watch

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| **[#1195 — Skill not visible after install](https://github.com/netease-youdao/LobsterAI/issues/1195)** | ~4 months | Open, stale | Core integration path between LobsterAI and OpenClaw; unaddressed could erode trust in skill management |
| **[#1273 — sql.js memory crash](https://github.com/netease-youdao/LobsterAI/issues/1273)** | ~4 months | Closed, stale | Data-corruption risk is high-severity; the fix may be buried in larger refactors — worth verifying the resolution in current 2026.8 releases |
| **[#1265 — Per-agent model/bot binding](https://github.com/netease-youdao/LobsterAI/issues/1265)** | ~4 months | Closed, stale | Architecturally significant feature request for multi-agent use cases; still relevant, likely deserves a proper design iteration |

**Maintainer attention needed**: The stale closure of #1273 (DB corruption risk) is the most concerning item — it's a data-loss class bug that warrants an explicit "won't fix / fixed elsewhere" statement. #1195 remains open and is a visible onboarding friction point for skill users. Both are worth revisiting in a future maintenance pass.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest
**Date: 2026-08-08**

---

## 1. Today's Overview

CoPaw (QwenPaw) is in a **high-activity stabilization phase**, with 31 issues and 47 PRs updated in the last 24 hours — a notably busy day. The project just shipped **v2.1.0-beta.2** with two critical hotfixes addressing CI section extraction and checkpoint restoration. Issue velocity is heavily skewed toward **bug reports from the 2.0.1/2.1.0b2 user base** (particularly around Docker deployments, MCP tool reliability, and the new desktop mode), while the open PR pipeline shows **six first-time contributors** actively submitting fixes — a healthy sign for community engagement. Closed items (11 issues, 21 PRs) outpace new opens, suggesting maintainers are effectively triaging. The volume of Windows-specific and desktop-mode regressions indicates the v2.1.0 beta cycle is generating substantial real-world feedback that should be folded into the stable release.

---

## 2. Releases

**v2.1.0-beta.2** (new)

**What's Changed:**
- `fix(ci)`: fence-aware section extraction in real-behavior-proof (fixes #6626) by @hanson-hex in [#6653](https://github.com/agentscope-ai/QwenPaw/pull/6653)
- `fix(checkpoints)`: restore auto snapshots in web workspace bootstrap by @qbc2016 in [#6](https://github.com/agentscope-ai/QwenPaw/pull/6)

**Migration Notes:**
- Existing beta users (b1) should note that **manual uninstall/reinstall may be required** — users report NSIS "cannot write file" errors during auto-update from b1 due to locked processes (see issue [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) in Bugs section).
- No breaking changes or configuration migrations noted in this release.

---

## 3. Project Progress

**Merged/Closed PR Highlights (21 total):**

| Area | PR | Description |
|------|-----|-------------|
| **Website/Downloads** | [#4694](https://github.com/agentscope-ai/QwenPaw/pull/4694) (merged) | Downloads UI refactoring and optimization — closes a long-running (May) PR |
| **Models** | [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) (closed) | `ToolCallBlock` missing `extra_content` field crash fixed |
| **Shell/Terminal** | [#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565) (closed) | Multi-line command newline folding + background process hang resolved |
| **Loop Protection** | [#6773](https://github.com/agentscope-ai/QwenPaw/issues/6773) (closed) | Linux doom-loop/rubric gates never activating — fixed |
| **Channels** | [#6717](https://github.com/agentscope-ai/QwenPaw/issues/6717) (closed) | Patrol bot test issue closed |
| **ACP/Bug** | [#6787](https://github.com/agentscope-ai/QwenPaw/issues/6787) (closed) | Telegram ACL whitelist reset — marked closed (see [#6786](https://github.com/agentscope-ai/QwenPaw/issues/6786) remains open) |

**Notable Open PRs (26 total) awaiting merge:**
- **Memory enhancements**: [#6772](https://github.com/agentscope-ai/QwenPaw/pull/6772) — Embedding lifecycle, Daily Paper, ReMe configuration, and Console memory page
- **Strict provider compat**: [#6809](https://github.com/agentscope-ai/QwenPaw/pull/6809) — Sanitize Chat Completions payload for strict providers (StepFun 400 error fix)
- **Shell leak fix**: [#6799](https://github.com/agentscope-ai/QwenPaw/pull/6799) — 26GB temp file leak on Windows (first-time contributor)
- **Playwright self-heal**: [#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776) — Dead Playwright driver recovery (first-time contributor)
- **Plugin isolation**: [#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688) — Fixes plugin absolute import isolation for `qwenpaw-creator`
- **ACP race fix**: [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) — Prevents final text loss on notification/prompt race
- **OS desktop text selection**: [#6801](https://github.com/agentscope-ai/QwenPaw/pull/6801) & [#6802](https://github.com/agentscope-ai/QwenPaw/pull/6802) — Two parallel PRs for desktop mode copy/select
- **Auth fixes**: [#6804](https://github.com/agentscope-ai/QwenPaw/pull/6804) — Chinese approval replies accepted in WeChat
- **New feature**: [#6800](https://github.com/agentscope-ai/QwenPaw/pull/6800) — Intelligent email management assistant with mailbox monitoring

---

## 4. Community Hot Topics

1. **[#6116: Doom loop — repeated tool calls in single turn](https://github.com/agentscope-ai/QwenPaw/issues/6116)** *(closed/wontfix, 8 comments)*
   Agent looping with same tool/params ~6 times before detection. Closed as wontfix, possibly already mitigated by existing loop gates.

2. **[#6782: 2.0.1 Docker — plugins/apps market always "under maintenance"](https://github.com/agentscope-ai/QwenPaw/issues/6782)** *(open, 8 comments)*
   High-impact Docker issue — plugin/app market unusable in 2.0.1 for at least one user; needs maintainer diagnosis.

3. **[#6732: MCP tools fail periodically until container restart](https://github.com/agentscope-ai/QwenPaw/issues/6732)** *(open, 6 comments)*
   Recurring MCP tool registration loss after hours; Docker container restart required — potential resource leak or stale connection.

4. **[#6490: Add Volcengine Agent Plan + Xiaomi MiMo Standard API](https://github.com/agentscope-ai/QwenPaw/issues/6490)** *(open, 4 comments)*
   Feature request for two new built-in providers; plus fixing existing provider configs. Community push for broader model provider support.

5. **[#6780: Idle process freeze after tens of minutes (v2.0.1)](https://github.com/agentscope-ai/QwenPaw/issues/6780)** *(open, 3 comments)*
   "When not in use, it freezes after tens of minutes; must restart the process."

**Analysis of user sentiment:** The thread echoes a broader pattern — **Docker and Windows desktop users feel the most friction**. Many issues are filed in Chinese, indicating a strong domestic (China) user base who are actively testing the beta.

---

## 5. Bugs & Stability

**Reported/Active today, ranked by severity:**

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| 🔴 **Critical** | [#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775) | **Malware Bytes flags Trojan Loader in Windows Desktop** — user uninstalled; potential false positive or packaging issue requiring immediate triage | None |
| 🔴 **Critical** | [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) | **Windows install/update fails** — NSIS "cannot write file" x4+ from locked processes (python exe, DLLs); auto-update hangs | None |
| 🟠 **High** | [#6786](https://github.com/agentscope-ai/QwenPaw/issues/6786) | **Telegram ACL whitelist resets** on new ACP workspace — approved users blocked | [#6788](https://github.com/agentscope-ai/QwenPaw/pull/6788) (open) |
| 🟠 **High** | [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) | **Idle freeze** in 2.0.1 Docker after 30+ minutes | None |
| 🟠 **High** | [#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768) | **Infinite post-task loop** — agent unresponsive for hours after multi-step task | None |
| 🟡 **Medium** | [#6785](https://github.com/agentscope-ai/QwenPaw/issues/6785) | **Profile category hard-codes official personas** — custom .md files can't toggle (regression in 2.1.0b2) | [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) (open) |
| 🟡 **Medium** | [#6794](https://github.com/agentscope-ai/QwenPaw/issues/6794) | **Agent Kanban 405 on create** + 404 during hot reload | None |
| 🟡 **Medium** | [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813) | **`KeyError: '__aiter__'`** in chat title generation (agentscope 2.x ChatResponse) | None |
| 🟡 **Medium** | [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) | **OpenAI continuation summary ignores `disable_thinking`**; 60s cancellation misreported | None |
| 🟡 **Medium** | [#6797](https://github.com/agentscope-ai/QwenPaw/issues/6797) | **Desktop mode cannot select/copy text** *(closed)* | [#6801](https://github.com/agentscope-ai/QwenPaw/pull/6801) / [#6802](https://github.com/agentscope-ai/QwenPaw/pull/6802) |
| 🟢 **Low** | [#6803](https://github.com/agentscope-ai/QwenPaw/issues/6803) | OpenAI-compat requests include Response-API fields → 400 from strict providers | [#6809](https://github.com/agentscope-ai/QwenPaw/pull/6809) (open) |
| 🟢 **Low** | [#6807](https://github.com/agentscope-ai/QwenPaw/issues/6807) / [#6806](https://github.com/agentscope-ai/QwenPaw/issues/6806) | **qwenpaw-creator plugin Windows broken** — generation pipeline + config save both fail | None |
| 🟢 **Low** | [#6792](https://github.com/agentscope-ai/QwenPaw/issues/6792) | ACP runner uses deprecated npm package names (`@zed-industries/claude-agent-acp`) | None |

**Notable closed bugs today:** #6480 (`nohup` shell command hang), #6773 (Linux doom-loop gates), #6565 (multiline shell folding), #6619 (ToolCallBlock crash).

There is a strong correlation between today's reported bugs and open PRs — the team is actively fixing the strict-provider, desktop text-selection, and ACL issues.

---

## 6. Feature Requests & Roadmap Signals

**Active requests:**

| Issue | Request | Likelihood |
|-------|---------|------------|
| [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | **Volcengine Agent Plan** & **Xiaomi MiMo Standard API** providers | High — simple addition, community demand |
| [#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) | **Configurable Chrome tab lifetime** across response cycles | Medium — currently tied to response lifecycle |
| [#6285](https://github.com/agentscope-ai/QwenPaw/issues/6285) | **Add `qwen3.8-max-preview`** to Aliyun Token Plan model list | High — trivial hardcoded list update, likely in next patch |
| [#6800](https://github.com/agentscope-ai/QwenPaw/pull/6800) (PR) | **Intelligent email assistant** — autonomous triage/respond, multi-provider, real-time monitoring | Medium — new feature plugin, depends on review |

**Roadmap signals:**
- **Plugin system expansion**: Two plugin PRs in-flight (`qwenpaw-creator` fixes, new email plugin) — plugin market clearly a focus area for v2.1.0 stable.
- **ReMe Light memory**: PR #6772 strengthens memory config, embedding, and daily paper — memory is evolving into a full-fledged scheduled subsystem.
- **Multi-provider push**: Feature requests for Volcengine/Xiaomi indicate the team is decoupling from Qwen-centric models.

---

## 7. User Feedback Summary

- **Docker channel**: "2.0.1 Docker version, plugin/app market always shows 'under maintenance'… cannot use" ([#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782)) — likely the highest-traffic complaint segment.
- **Windows users**: "Auto-update hangs and freezes; forced exit only option" ([#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810)). Plus a user **uninstalled over Malware Bytes flag** ([#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775)) — this needs an official false-positive response.
- **Global users**: "I am English speaker and I DID look at the Alibaba security vulnerability report page and its way too confusing. IS this really malware or a false positive?" — frustration with confusing security documentation.
- **Desktop mode UX**: Chinese users report "left-click twice to open apps, should be once" ([#6790](https://github.com/agentscope-ai/QwenPaw/issues/6790), closed) and "cannot select/copy text" ([#6797](https://github.com/agentscope-ai/QwenPaw/issues/6797), closed) — desktop mode looks like a fast-moving beta surface.
- **Task concurrency**: "2.1 beta2 task execution — can't submit new session in dialog anymore, previously possible" ([#6796](https://github.com/agentscope-ai/QwenPaw/issues/6796), closed) — regression in beta.

**Satisfaction indicators:** Users continue to push fixes with detailed root-cause analyses (many AI-assisted). The project's rapid patch cycle encourages experienced users to file high-quality reports, a sign of a technically engaged community.

---

## 8. Backlog Watch

**Items needing maintainer attention (long-open/unanswered):**

| Age (days) | Item | Why It Matters |
|------------|------|----------------|
| **24** | [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) — Volcengine + Xiaomi providers | No maintainer response; feature request is low-effort, high-visibility |
| **25** | [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) — config loader hardening (Under Review) | Open since July 31; trivial robustness PR, likely needs just a final review |
| **22** | [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) — doom loop (closed wontfix) | Needs a clear close-out note; users may re-file as more loop reports land |
| **10** | [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) — ToolCallBlock crash | The fix is closed but the root-cause reply is AI-generated; needs human maintainer confirmation |
| **15** | [#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) — memory flush before compression (Under Review) | Open since July 31; memory subsystem PRs are stacking up without merge |
| **18** | [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) — OneBot remote media (Under Review) | Similarly stalled in review since Aug 5 |

**Notable:** The project uses a QwenPaw-Patrol-Bot ([#6717](https://github.com/agentscope-ai/QwenPaw/issues/6717)) for automated issues — consider pinning response-time SLAs for automated reports to reduce noise.

---

*Data source: agentscope-ai/CoPaw GitHub (QwenPaw). Digest generated 2026-08-08.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-08

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 100 issues/PRs updated in the last 24 hours, but the mix skews heavily toward open items (44 open issues, 47 open PRs) with **minimal closure activity** (only 3 PRs merged/closed today). No new releases were published. The project is processing a **large volume of bug reports** — several high-severity issues filed today concern security, provider reliability, and runtime correctness. Notably, multiple security issues cluster around **API key leakage**, **path traversal protections**, and **provider fallback bugs**, suggesting a focused hardening phase. The number of open RFCs (7+) indicates ongoing architectural evolution around observability, package catalogs, and plugin standards. Despite the heavy bug influx, maintainer responsiveness appears limited, with several PRs needing author action and new issues awaiting triage.

---

## 2. Releases

**No new releases were published during this period.**

---

## 3. Project Progress

Only **3 PRs** were merged or closed in the last 24 hours, all with minimal comments. Key activity:

- **[PR #9836 — fix(transcription): make local_whisper bearer_token optional](https://github.com/zeroclaw-labs/zeroclaw/pull/9836)**: Closed. This fix removes a hard failure in `LocalWhisperProvider::from_config` when `bearer_token` is absent, which was blocking the standard whisper.cpp loopback backend (which has no authentication). The fix makes the token optional and resolves a configuration compatibility issue.

Notably, this PR touches an unusually broad set of modules (core, agent, channel, config, cron, daemon, gateway, heartbeat, memory, runtime, service, tool, tests, scripts, multiple channels, observability, and CLI), suggesting it may have been a dependency-heavy or broad-spectrum fix. The closure of this PR indicates progress on local transcription setup, which is relevant for self-hosted and privacy-conscious deployments.

> **Notable observation:** Despite 44 open issues and 47 open PRs, only a single PR closed today. This suggests a potential bottleneck in review/merge capacity that could slow feature delivery.

---

## 4. Community Hot Topics

The most active discussions (highest comment counts) center on architectural direction and RFC proposals:

### 🔥 High Activity (10+ comments)

- **[#8933 — RFC: Add cross-turn conversation correlation to OTel export (13 comments, CLOSED)](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)** — Accepted RFC proposing an opaque `gen_ai.conversation.id` attribute for OpenTelemetry, aligning with OTel Semantic Conventions v1.41.0. The community is deeply interested in observability — the discussion resolved and the RFC status is `accepted`, indicating this will land.

- **[#9246 — RFC: Preserve Todo tracker configuration during ZeroCode ownership migration (12 comments, CLOSED)](https://github.com/zeroclaw-labs/zeroclaw/issues/9246)** — Accepted after revision. The community is concerned about preserving operational state (Todo tracker config) during automatic ownership transitions via ZeroCode. This consolidation of previously-reviewed "July RFCs" shows careful community review.

- **[#5937 — Refactor: Unify providers architecture and reqwest client management (12 comments, OPEN)](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)** — Long-running (since April) refactor request highlighting significant code duplication. This is a **persistent architectural pain point** with community consensus on the problem, and the PR is still open — it remains one of the oldest active issues.

- **[#8424 — RFC: Workspace-relative forbidden path patterns and optional .zeroclawignore (10 comments, OPEN)](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)** — Addresses the gap where `forbidden_paths` only blocks paths *outside* the workspace, leaving internal files like `.env` and toolchain configs exposed to the agent. This has meaningful security implications for protecting project credentials.

### 💬 Moderate Activity (6-9 comments)

- **[#8043 — RFC: Retire the standalone aardvark-sys crate (9 comments, OPEN)](https://github.com/zeroclaw-labs/zeroclaw/issues/8043)** — Builds on prior work to fold `aardvark-sys` into `zeroclaw-hardware`. Community engagement on crate consolidation and dependency management.

- **[#6055 — Slack: hydrate thread context from conversations.replies (8 comments, CLOSED)](https://github.com/zeroclaw-labs/zeroclaw/issues/6055)** — Accepted feature to backfill thread history on first bot mention. Addresses user friction with `strict_mention_in_thread` requiring repeated @-mentions.

- **[#7232 — Structured Observability Enhancement (6 comments, CLOSED)](https://github.com/zeroclaw-labs/zeroclaw/issues/7232)** — Accepted RFC covering rich events and OTel trace correlation, building toward the accepted #8933 conversation correlation. This shows a coordinated observability roadmap.

### 🧠 Underlying Themes

The community is actively shaping the project's **architectural foundations** — observability, provider unification, security policy, and packaging standards. The high engagement on RFCs signals a **technical-savvy user base** that values design rigor. However, the recurring need for "needs-author-action" and "needs-maintainer-review" labels on many items suggests **bottlenecks in both contributor follow-through and maintainer bandwidth**.

---

## 5. Bugs & Stability

A substantial influx of bugs was filed today, several with **critical or high severity**. Ranked by severity:

### 🔴 Critical/High Severity (P1)

1. **[#9815 — `forbidden_paths` is unreachable for any path under allowed_roots or the workspace](https://github.com/zeroclaw-labs/zeroclaw/issues/9815)** — *Security policy bug.* The `is_path_allowed` check returns `true` at the allowed-root check before reaching the forbidden-path loop, rendering `forbidden_paths` ineffective for workspace-internal paths. This **defeats a core security control** — works in conjunction with #8424. The finding complements the unfinished RFC for workspace-relative patterns.

2. **[#9812 — Provider fallback carries the primary's model id, so it can never fire](https://github.com/zeroclaw-labs/zeroclaw/issues/9812)** — *Reliability bug.* The fallback provider is queried with the primary's model ID, making fallbacks **permanently broken** for correctly configured cases, and incorrectly placing the fallback into cooldown. This is a high-impact functional bug affecting reliability guarantees.

3. **[#9811 — `/health` reports a channel healthy that has never connected](https://github.com/zeroclaw-labs/zeroclaw/issues/9811)** — *Monitoring bug.* A Telegram channel with an invalid bot token (404) is still marked as healthy. This compromises the health-check system's integrity, potentially masking real outages.

4. **[#9813 — API key written to logs in plaintext on provider connection errors](https://github.com/zeroclaw-labs/zeroclaw/issues/9813)** — *Security leak (closed as duplicate).* This was closed as a duplicate of **[#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386)** — a **Gemini API key in the request URL survives `sanitize_api_error`** and is posted to the chat. This means raw secrets are leaking through error messages — a critical security concern needing an urgent fix.

5. **[#9816 — Anthropic provider reports $0.00 spend, so budget caps never fire](https://github.com/zeroclaw-labs/zeroclaw/issues/9816)** — *Cost-control bug.* Every usage record writes `cost_usd: 0.0`, making **daily/monthly budget enforcement ineffective** for Anthropic workloads. Users could unknowingly exceed cost thresholds.

6. **[#9805 — SOP: auto-mode runs from channel/cron triggers never execute and rot as 'running' forever](https://github.com/zeroclaw-labs/zeroclaw/issues/9805)** — *Runtime bug.* Headless dispatch has no agent loop, so `ExecuteStep` is never executed; runs hold concurrency slots and survive daemon restarts. **Fix PRs exist:** [#9494](https://github.com/zeroclaw-labs/zeroclaw/pull/9494) and its continuation **[#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841)** (which claims to close this and four other defects). This is a priority-p1 issue with an active fix.

### 🟠 Medium Severity (P2)

- **[#9840 — Daemon steals `daemon.sock` on start and unlinks it on exit, stranding a live daemon](https://github.com/zeroclaw-labs/zeroclaw/issues/9840)** — Two unguarded operations can break the first daemon's socket. This is a serious concurrency/race-condition bug that can corrupt runtime state — severity rated S1 (workflow blocked).

- **[#9783 — `finish_run` accepts a failure reason and silently discards it](https://github.com/zeroclaw-labs/zeroclaw/issues/9783)** — Failed SOP runs record *that* they failed but not *why*. An observability gap compounding the auto-run issue.

- **[#9784 — Multi-step agent-driven SOP marked failed mid-step with no audit event](https://github.com/zeroclaw-labs/zeroclaw/issues/9784)** — Unclear failure path; needs reproduction (`r:needs-repro`). Related to the headless SOP driver fixes.

- **[#9656 — Telegram typing indicator keeps running for the whole approval wait](https://github.com/zeroclaw-labs/zeroclaw/issues/9656)** — A blocked turn looks like a working one, causing user confusion. Follow-up to a previously fixed Discord indicator issue.

- **[#9793 — (not shown in top 30 — API key leak in logs)](https://github.com/zeroclaw-labs/zeroclaw/issues/9813)** — Duplicated by #9386.

### 🟡 Other Notable Bugs

- **[#9770 — `cron update` silently discards changes to declarative jobs](https://github.com/zeroclaw-labs/zeroclaw/issues/9770)** — Six columns affected (`command`, `name`, `expression`, etc.). The CLI accepts but ignores changes — a "silent failure" pattern that frustrates users.

- **[#9775 — OpenRouter streaming requests drop `provider_extra`](https://github.com/zeroclaw-labs/zeroclaw/issues/9775)** — `merge_extra_body` is not called on the streaming path, so configured provider extras are lost — a subtle behavioral inconsistency.

- **[#9825 — Leak detector redacts public blockchain addresses in payment URLs](https://github.com/zeroclaw-labs/zeroclaw/issues/9825)** — A **false positive** in the outbound leak detector; the heuristic confuses public addresses with secrets, making legitimate payment URLs undeliverable. The issue author notes it's "working as designed" but the design causes harm.

### 🔧 Existing Fix PRs

- **[#9839 — Deny irreversible destructive commands in every security posture](https://github.com/zeroclaw-labs/zeroclaw/pull/9839)** — Closes a gap where `*` in `allowed_commands` with `block_high_risk_commands: false` permits destructive commands in non-default postures. Improves security policy by default.

- **[#9827 — Stop shell children from escaping their validated confinement](https://github.com/zeroclaw-labs/zeroclaw/pull/9827)** — Three related fixes: sandbox wrap dropping working directory, missing environment isolation, and path resolution issues. Complements #9384 (symlink escape hardening).

- **[#9838 — Authorize the account that taps an approval button in Telegram](https://github.com/zeroclaw-labs/zeroclaw/pull/9838)** — Fixes a security gap where inline-keyboard callback approval did not perform an allowlist check on the user identity.

---

## 6. Feature Requests & Roadmap Signals

### New Requests Today

- **[#9814 — Native XMPP / Prosody channel (OPEN)](https://github.com/zeroclaw-labs/zeroclaw/issues/9814)** — Community member requests a native XMPP channel for self-hosted Prosody/ejabberd deployments, targeting home-lab and low-resource environments. This aligns with the project's existing multi-channel support (Matrix, Telegram, Discord, WhatsApp, Email).

- **[#9824 — Simplify default web-tool surface to three verbs (OPEN)](https://github.com/zeroclaw-labs/zeroclaw/issues/9824)** — Proposes collapsing five overlapping web tools into `web_fetch`, `web_research`, and `http_request`, moving raw `web_search_tool` behind a research sub-agent and making browser automation opt-in. This is a **strong UX simplification** suggestion that could reduce tool-selection confusion.

- **[#9810 — Load Agent Plugins 1.0 skill and MCP packages (OPEN, RFC)](https://github.com/zeroclaw-labs/zeroclaw/issues/9810)** — Support for the vendor-neutral `agent-plugins.org` standard for community plugins (`plugin.json` + `skills/` + `mcp.json`). This would dramatically expand the ecosystem. Received 2 comments immediately — likely to be a significant roadmap item.

### Accepted & In-Progress Roadmap

- **[#9346 — RFC: Unified package/capability/config/runtime-state catalog contract (OPEN)](https://github.com/zeroclaw-labs/zeroclaw/issues/9346)** — Acknowledges groundwork from #8908/#8909 and attempts to define a product-level catalog spanning integrations, built-ins, and plugins. This is foundational for the plugin ecosystem.

- **[#7130 — `forbid(unsafe_code)` workspace-wide with earmarked carve-out (ACCEPTED)](https://github.com/zeroclaw-labs/zeroclaw/issues/7130)** — Safety hardening accepted; `aardvark-sys` remains the sole `unsafe` exception.

- **[#9663 — Telegram tool-call progress during partial streaming (ACCEPTED)](https://github.com/zeroclaw-labs/zeroclaw/issues/6663)** — Improves UX by showing tool progress in partial streaming mode.

### 🔮 Prediction for Next Version (v0.9.x?)

Based on accepted RFCs and active PRs, the next release will likely include:
1. **Structured Observability** — Rich events, OTel trace correlation, and cross-turn conversation correlation (accepted RFCs #7232, #8933)
2. **Headless SOP fixes** — Cron-started run driver (PR #9494/#9841) with "no stuck runs" guarantee
3. **Security hardening** — Shell path resolution (#9384), forbidden-path fixes (#8424/#9815), and destructive-command denial (#9839)
4. **Config authoring for agents** (PR #9828) — A validated path for agents to edit config with operator approval
5. **Package/catalog contract** (#9346) — The groundwork for a plugin registry

---

## 7. User Feedback Summary

### 😟 Pain Points

The highest-visibility user frustrations this week center on **silent failures** and **broken core promises**:

- **"A correctly configured fallback can never fire"** (#9812) — Directly violates reliability expectations. Users trust fallbacks for uptime; they are completely broken for certain models.
- **"SOP runs rot forever with no concurrency slot release"** (#9805) — This holds system resources indefinitely, degrading performance over time.
- **"Malformed SOP silently dropped from `sop list` and `sop validate` reports success"** (#9786) — A diagnostic failure; users cannot distinguish typos from absent files. This is a **critical CLI correctness** issue.
- **"`cron update` silently discards changes to declarative jobs"** (#9770) — Users edit config, `cron update` reports success, but changes are not persisted — a classic "quiet data loss" complaint.

### 😊 Positive Signals / Success Indicators

- **Local transcription now works without authentication** (PR #9836) — Removes friction for self-hosted whisper.cpp users.
- **The community values the RFC process** — High engagement and careful review on architectural proposals suggests confidence in project governance.
- **Security improvements are being actively merged** — Multiple PRs addressing shell confinement and path traversal demonstrate attention to defense-in-depth.

### 📊 Satisfaction Assessment

The **high bug influx with relatively low merge throughput** suggests users are actively using the software (good), but encountering real-world issues (concerning). The **overflow of "needs-author-action" and "needs-maintainer-review"** labels indicates some submissions are unpolished or understaffed, which can stagnate progress. The **community is engaged but the maintainer team may be strained** given the volume of RFCs needing review and the breadth of bugs filed in a single day.

---

## 8. Backlog Watch

### 🚨 Long-Unanswered Critical Items

- **[#5937 — Unify providers architecture and reqwest client management (OPEN, 12 comments, since April)](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)** — The **oldest actively-discussed issue** on this list. This is a known architectural debt with clear problems (code duplication, fragmented config) but no PR yet. **Maintainers should prioritize** — this touches every provider integration.

- **[#8043 — Retire the standalone aardvark-sys crate (OPEN, 9 comments, since June)](https://github.com/zeroclaw-labs/zeroclaw/issues/8043)** — The RFC has been open for over 6 weeks with significant feedback. The associated #8028 already gated the crate behind a feature and dropped dependencies. This seems ready for a decision.

- **[#8424 — RFC: Workspace-relative forbidden path patterns (OPEN, 10 comments, since June)](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)** — Marked `needs-author-action` and complements the new bug #9815. This is a security-relevant RFC that has been waiting for an author update. **High priority** given the security bug it addresses.

- **[#7130 — `forbid(unsafe_code)` workspace-wide (ACCEPTED, 3 comments, since June)](https://github.com/zeroclaw-labs/zeroclaw/issues/7130)** — Accepted over two months ago but no implementation PR yet. This is safety-critical and should be scheduled.

### ⏳ Stalled PRs (Needs Maintainer Review)

- **[#9291 — fix(cli): detect installed AppImage and use working desktop download URL (OPEN, needs-author-action)](https://github.com/zeroclaw-labs/zeroclaw/pull/9291)** — The PR improves AppImage detection and download URL. It's been open since July and lacks a clean path forward — does the author need to rebase or address reviewer feedback?

- **[#8337 — feat(observability): herdr agent reporting integration (OPEN, needs-author-action, size:XL)](https://github.com/zeroclaw-labs/zeroclaw/pull/8337)** — A large feature (XL size) for Herdr sidebar integration. This has been open since June and is a **major UX win**. **High-value PR that should be reviewed carefully but promptly** — the feature is non-invasive but the size may be slowing it down.

### 🧭 What's Missing from Maintainers

- **Decision on #8043** (fold crate or not) — Needs a ratification vote.
- **Guidance on #5937** (provider refactor scope) — Define acceptable design, or mark as superseded by new work.
- **Review of #8337** (Herdr integration) — A clear path forward would unblock a significant feature.

---

## Overall Health Assessment

ZeroClaw is in a **high-velocity, security-focused development phase** with active community-driven design. The **architecture is maturing** through RFCs (observability, plugins, catalog), and the community is deeply invested in reliability and security. However, the **disconnect between high issue/PR activity and low merge throughput** is a concern — it suggests reviewer bandwidth is the bottleneck. The prevalence of **silent failure bugs** (#9770, #9786, #9783) and **broken core promises** (#9812, #9805) indicates a need for more robust regression testing, especially around error paths. The **security posture is being hardened**, but the unfixed `forbidden_paths` bug (#9815) and API key leakage (#9386) are urgent. Overall, the project is **healthy in vision and engagement but stressed in execution throughput** — prioritizing review of the fix PRs for critical bugs (especially #9494/#9841 for SOP) and resolving long-standing RFCs will restore momentum.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*