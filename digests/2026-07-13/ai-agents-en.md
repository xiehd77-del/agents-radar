# OpenClaw Ecosystem Digest 2026-07-13

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-12 22:34 UTC

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

# OpenClaw Project Digest — 2026-07-13

## 1. Today's Overview

OpenClaw shows moderate-to-high activity with 500 issues and 500 PRs updated in the last 24 hours, suggesting a highly engaged community. The project has 297 open/active issues and 203 recently closed, alongside 349 open PRs and 151 merged/closed — a healthy ratio indicating steady progress. Development velocity is strong, with maintainers actively merging multiple PRs today (at least 12 closed PRs visible in the top 30). However, several critical P0/P1 bugs remain unresolved, including a gateway memory leak (RSS growth from 350MB to 15.5GB) and tool output corruption affecting agent readability of results. No new releases were published today. The backlog contains many issues tagged `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision`, indicating areas where maintainer attention is blocked.

---

## 2. Releases

**No new releases today.**

The latest available release remains the previous version (not specified in data). Users should continue monitoring for updates, particularly for fixes to the critical memory leak (Issue #91588) and tool output corruption (Issue #104721).

---

## 3. Project Progress

**Merged/Closed PRs Today (12 visible in top 30):**

| PR | Title | Impact |
|---|---|---|
| **#105718** (closed) | `feat(backup): add verified SQLite snapshots` | New backup capability, addresses SQLite corruption issues |
| **#105717** (closed) | `fix(delivery): prevent duplicate generated-media handoffs` | Fixes agent delivery duplication |
| **#105714** (closed) | `fix(ci): stabilize terminal lifecycle waits` | CI reliability improvement |
| **#105713** (closed) | `chore(ui): drop dead config-form search exports` | Dead code cleanup |
| **#105709** (closed) | `refactor(config): retire flat streaming keys from last six channel schemas` | Config simplification across 6 channels |
| **#105705** (closed) | `refactor(ui): trim private search exports` | UI cleanup |
| **#105702** (closed) | `fix(ui): prevent New Session input loss during creation` | UX fix — prevents message loss in Control UI |
| **#94805** (closed) | `Add SQLite snapshot artifacts under backup` | Backup infrastructure |
| **#93928** (closed) | `Feishu drive info falsely reports File not found` | Fix for Feishu integration pagination |
| **#93465** (closed) | `bug(acpx): Windows embedded ACPX runtime fails with spawn EINVAL` | Fix for Windows ACP runtime — now usable |
| **#90404** (closed) | `[Bug] acpx TypeError: Cannot use in operator to search for method in 1` | Fix for ACP session spawning |
| **#104871** (closed) | `Refactor high-churn orchestration internals without contract changes` | Internal quality improvement |

**Feature advancements visible today:**
- **Durable foundation (#105660, open):** A large XL-sized PR adds "beta3 wake replay foundation" — wake targets, producers, and replay/resume capabilities — building toward the 2026.7.1 beta 3 milestone.
- **Cloud workers (#105719, open):** A new gateway inference proxy for worker model turns, part of the cloud-workers milestone 2.
- **Teams app lifecycle fix (#104690, open):** Resets sessions on Microsoft Teams app removal, preventing context leakage across app lifecycle boundaries.
- **Slack attachment fix (#104703, open):** Fixes Slack dropping attachments delivered via `message_changed file_share` events.

---

## 4. Community Hot Topics

**Most Active Issues (by comment count):**

| Issue | Title | Comments | 👍 |
|---|---|---|---|
| **#75** ([link](openclaw/openclaw Issue #75)) | Linux/Windows Clawdbot Apps | **110** | **81** |
| **#99241** ([link](openclaw/openclaw Issue #99241)) | Tool outputs render as image attachments — unreadable to agent | 22 | 2 |
| **#91588** ([link](openclaw/openclaw Issue #91588)) | **Critical: Gateway Memory Leak** — 350MB→15.5GB RSS | 19 | 1 |
| **#7707** ([link](openclaw/openclaw Issue #7707)) | Memory Trust Tagging by Source | 16 | 0 |
| **#102175** ([link](openclaw/openclaw Issue #102175)) | Embedded prompt cache breaks across boundaries | 16 | 1 |
| **#65161** ([link](openclaw/openclaw Issue #65161)) | Heartbeat isolated mode regressions | 15 | 1 |
| **#10659** ([link](openclaw/openclaw Issue #10659)) | Masked Secrets — Prevent Agent from Accessing Raw API Keys | 13 | 4 |
| **#104721** ([link](openclaw/openclaw Issue #104721)) | **All tool results return "(see attached image)"** | 12 | 1 |
| **#63216** ([link](openclaw/openclaw Issue #63216)) | Repeated hard resets on same session key | 12 | 3 |

**Analysis of top community concerns:**

1. **Cross-platform parity (#75, 110 comments, 81 👍):** The most upvoted and discussed issue — Linux and Windows users are asking for parity with macOS/iOS/Android Clawdbot apps. This is the strongest signal for platform expansion.

2. **Agent perception failures (#99241, #104721):** Two related bugs where tool outputs become invisible to the agent — one in long-running ANSI workflows, the other a regression where *all* tool results become a placeholder string. This fundamentally breaks agent autonomy and is generating intense community discussion.

3. **Stability under load (#91588, #63216):** The memory leak (350MB→15.5GB RSS) and repeated session resets indicate systemic issues with long-running gateway processes, affecting production deployments.

4. **Security awareness (#7707, #10659):** Users are proactively requesting memory poisoning protections and API key masking — suggesting a maturing user base with security-conscious use cases.

---

## 5. Bugs & Stability

**Critical (P0) Bugs — Active:**

| Issue | Title | Status | Fix PR Exists? |
|---|---|---|---|
| **#91588** ([link](openclaw/openclaw Issue #91588)) | **Gateway Memory Leak** — RSS grows from 350MB to 15.5GB over days, causing repeated OOM crashes | Open, `needs-maintainer-review` | ❌ No linked fix PR |
| **#104721** ([link](openclaw/openclaw Issue #104721)) | **All tool results return "(see attached image)" literal string** — regression | Open, `needs-maintainer-review` | ❌ No linked fix PR |
| **#101290** ([link](openclaw/openclaw Issue #101290)) | **CLI startup preflight corrupts live state DB** — "database disk image is malformed" | Open, `needs-maintainer-review` | ❌ No linked fix PR |

**High Severity (P1) Bugs — Active:**

| Issue | Title | Fix PR Exists? |
|---|---|---|
| **#99241** ([link](openclaw/openclaw Issue #99241)) | Tool outputs render as image attachments — agent can't read stdout/stderr | ❌ |
| **#63216** ([link](openclaw/openclaw Issue #63216)) | Repeated hard context-overflow resets on same session key | ❌ |
| **#91009** ([link](openclaw/openclaw Issue #91009)) | Codex PreToolUse hook spawns CPU-bound processes, stalls gateway RPC | ✅ Linked PR open (#91009 linked) |
| **#53408** ([link](openclaw/openclaw Issue #53408)) | Write/exec tool parameters silently dropped after long conversations | ❌ |
| **#94939** ([link](openclaw/openclaw Issue #94939)) | 6.x state migration leaves channel conversation-store SQLite empty (0 bytes) — breaks proactive sends on Teams | ❌ |
| **#90639** ([link](openclaw/openclaw Issue #90639)) | Compaction safeguard mode allows sessions to grow to context ceiling — "Something went wrong" | ❌ |
| **#102020** ([link](openclaw/openclaw Issue #102020)) | Second message fails with "reply session initialization conflicted" (cross-channel) | ✅ PR #103562 (open) |
| **#39476** ([link](openclaw/openclaw Issue #39476)) | A2A sessions_send causes duplicate messages when target calls back | ❌ |
| **#89228** ([link](openclaw/openclaw Issue #89228)) | Exec intermittently unavailable in isolated cron sessions (regression) | ❌ |

**Notable Fixes Merged Today:**
- **#93465** — ACPX runtime on Windows was completely broken (`spawn EINVAL`); now fixed.
- **#90404** — ACP TypeError fixed for `sessions_spawn(runtime="acp")`.
- **#93928** — Feishu drive pagination fixed (files past page 1 are now accessible).

**Regressions reported today:**
- **#104721** — Tool results returning literal "(see attached image)" string is a regression ("worked before, now fails").
- **#101290** — SQLite corruption from CLI startup preflight is a regression in 2026.6.6.
- **#94939** — State migration leaving empty SQLite files is a regression since 2026.6.8.

---

## 6. Feature Requests & Roadmap Signals

**Top-Voted Feature Requests:**

| Issue | Title | 👍 | Status | Next Version Likelihood |
|---|---|---|---|---|
| **#75** | Linux/Windows Clawdbot Apps | **81** | Open, needs product decision | **High** — highest community demand |
| **#6615** | Add denylist support for exec-approvals | **7** | Needs security review | Medium |
| **#10659** | Masked Secrets — prevent agent from accessing raw API keys | **4** | Needs maintainer review | Medium |
| **#7722** | Filesystem Sandboxing Config | **4** | Needs product decision | Medium |
| **#10118** | TUI: Support Shift+Enter for newline | **4** | Needs product decision | Low-Medium |
| **#7524** | groupScope option for consolidated group sessions | **4** | Needs product decision | Low-Medium |
| **#10687** | Fully dynamic model discovery (OpenRouter) | **3** | Needs maintainer review | **High** — aligns with cloud strategy |
| **#6890** | Ralph Loop config + max iteration in agent config | **3** | Needs product decision | Low-Medium |
| **#7707** | Memory Trust Tagging by Source | **0** | Needs security review | Low |
| **#9986** | Trigger model fallback on context length exceeded | **0** | Needs product decision | Low |

**Strategy Insights:**
The developer team appears to be actively building toward a **cloud-workers architecture** (PR #105719, #105660) and a **durable execution foundation** (beta3 wake replay). These align with enterprise scaling needs. The community's strongest demand — **cross-platform support (#75)** — has no visible engineering progress yet. The **dynamic model discovery (#10687)** and **provider fallback by failure class (#47910)** would improve reliability with third-party providers like OpenRouter.

**Likely features for next version (2026.7.x):**
1. Cloud workers / durable execution (Milestone 2) — active PRs exist
2. SQLite snapshot backup (#105718 merged today)
3. Teams app lifecycle fix (#104690 in progress)
4. Slack attachment fix (#104703 in progress)

---

## 7. User Feedback Summary

**Pain Points (multiple reports):**

1. **Agent blindness to tool output** (Issues #99241, #104721, #53408): Agents cannot read their own tool results in long-running or ANSI-heavy workflows. Multiple users report this as "completely broken" — the agent sees placeholder strings instead of actual data. This undermines the core value proposition of autonomous AI agents.

2. **Memory leak / OOM crashes** (#91588): Production users report the gateway growing to 15.5GB RSS over 2-3 days, requiring manual restarts. One user describes "repeated launchd-handoff restart cycles."

3. **Session state corruption** (#101290, #71689, #94939): SQLite database corruption during normal operation — "database disk image is malformed" — is reported across multiple components (CLI preflight, task registry, Teams conversation store).

4. **Slack-specific issues**: Messages silently dropped (#90639, #102020), attachments lost in edits (#104703), migration failures (#94939).

5. **Windows gap**: ACPX runtime was completely broken on Windows until today's fix (#93465). Linux/Windows app parity remains the #1 feature request (#75) with 81 upvotes.

6. **Configuration complexity**: Users report difficulty with session/group session management (#7524), model routing (#9986), and execution approvals (#6615).

**Satisfaction signals:**
- Active community filing detailed, well-researched bug reports with reproduction steps
- Multiple PRs being merged daily shows responsive development
- Users are pushing for security features proactively (memory trust, API key masking, filesystem sandboxing)

**Recurring theme:** Users are deploying OpenClaw in production-like settings (long-running, multi-turn conversations with heavy tool use) and hitting scaling/state-management boundaries that weren't tested at that level.

---

## 8. Backlog Watch

**Long-Unanswered Issues Needing Maintainer Attention:**

| Issue | Title | Created | Comments | Why It Matters |
|---|---|---|---|---|
| **#75** ([link](openclaw/openclaw Issue #75)) | Linux/Windows Clawdbot Apps | 2026-01-01 | 110 | Most upvoted request; no maintainer decision in 6+ months |
| **#7707** ([link](openclaw/openclaw Issue #7707)) | Memory Trust Tagging by Source | 2026-02-03 | 16 | Security issue with community interest; stale 5 months |
| **#10659** ([link](openclaw/openclaw Issue #10659)) | Masked Secrets — Prevent Agent from Accessing Raw API Keys | 2026-02-06 | 13 | Security enhancement; 4 upvotes, stale 5 months |
| **#7722** ([link](openclaw/openclaw Issue #7722)) | Filesystem Sandboxing Config | 2026-02-03 | 9 | Security feature; user attempted implementation and failed |
| **#6615** ([link](openclaw/openclaw Issue #6615)) | Add denylist support for exec-approvals | 2026-02-01 | 7 | 7 upvotes; simple security enhancement |
| **#8299** ([link](openclaw/openclaw Issue #8299)) | Config option to suppress sub-agent announce | 2026-02-03 | 7 | Community workaround exists but is fragile |
| **#10687** ([link](openclaw/openclaw Issue #10687)) | Dynamic model discovery (OpenRouter) | 2026-02-06 | 9 | Needed for multi-provider setups; stale 5 months |

**Long-Open PRs Needing Maintainer Review:**

| PR | Title | Created | Status |
|---|---|---|---|
| **#69822** ([link](openclaw/openclaw PR #69822)) | `feat(session-message-events) socket.drain` | 2026-04-21 | Waiting on author; session eviction improvement |
| **#81208** ([link](openclaw/openclaw PR #81208)) | `fix(amazon-bedrock-mantle): dedupe IAM token-failure diagnostic` | 2026-05-12 | Waiting on proof; affects Raspberry Pi / Docker users |
| **#92307** ([link](openclaw/openclaw PR #92307)) | Warn when host approvals clamp exec security at startup | 2026-06-12 | Waiting on author; security UX improvement |
| **#92223** ([link](openclaw/openclaw PR #92223)) | Fix stack-safe large attachment handling | 2026-06-11 | Needs proof; large attachment stack issue |

**Signal:** A notable cluster of security-related feature requests (#7707, #10659, #7722, #6615) from February 2026 remain open with no maintainer decision. These represent a security-conscious user segment that may be waiting on product direction. The `needs-product-decision` and `needs-maintainer-review` tags on many critical issues suggest maintainer bandwidth is a bottleneck for advancing the backlog.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem
**Date: 2026-07-13**

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing **peak development velocity**, with six of eleven tracked projects showing high activity on July 13 alone. The space is bifurcating between **general-purpose reference frameworks** (OpenClaw, Hermes Agent, IronClaw) and **platform-tuned or niche deployments** (ZeroClaw, CoPaw, PicoClaw). A clear pattern emerges: projects are investing heavily in **production-grade resilience**—fixing memory leaks, session state corruption, and CI flakiness—rather than pursuing new feature frontiers. Community demands are coalescing around three themes: **reliability under long-running workloads**, **multi-channel consistency** (Slack, Telegram, Matrix, Discord), and **configuration transparency** (hidden SDK caps, undocumented defaults). The ecosystem is maturing from "can it work?" to "can it stay working?"

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | New Release? | Health Score | Notable |
|---------|-------------|-----------|--------------|--------------|---------|
| **OpenClaw** | 500 updated | 500 updated | No | 🟢 High | 12 merged PRs; strong maintainer throughput |
| **NanoBot** | 4 updated | 5 updated | No | 🟢 Moderate | 1 merged; P1 regression active |
| **Hermes Agent** | 50 updated | 50 updated | No | 🟢 High | 9 merged; rapid triage (34 issues closed) |
| **PicoClaw** | 5 updated | 3 updated | No | 🟡 Moderate | 2 merged; no critical fires |
| **NanoClaw** | 3 active | 13 updated | No | 🟢 High | 2 merged; strong core-team PR pipeline |
| **NullClaw** | 0 | 0 | — | ⚪ Dormant | No activity |
| **IronClaw** | 9 updated | 50 updated | No | 🟢 Very High | 26 merged; CI crisis (70% failure rate) |
| **LobsterAI** | 1 updated | 2 updated | No | 🟡 Low | 1 merged; quiet maintenance |
| **TinyClaw** | 0 | 0 | — | ⚪ Dormant | No activity |
| **Moltis** | 0 | 0 | — | ⚪ Dormant | No activity |
| **CoPaw** | 19 updated | 10 updated | No (v2.0.0 recent) | 🟡 Stressed | Post-major-release bug cascade |
| **ZeptoClaw** | 0 | 0 | — | ⚪ Dormant | No activity |
| **ZeroClaw** | 44 updated | 50 updated | No | 🟢 High | v0.8.3 nearing completion; 48 open PRs |

**Key observations:**
- **OpenClaw, Hermes, IronClaw, and ZeroClaw** are in a different league of activity—hundreds of artifacts updated daily.
- **CoPaw** is in a post-v2.0.0 crisis mode, with critical regressions outpacing fixes.
- **NullClaw, TinyClaw, Moltis, ZeptoClaw** are effectively stalled; no community engagement on this date.

---

## 3. OpenClaw's Position

OpenClaw remains the **most referenced and most active** project in the ecosystem, functioning as the de facto reference implementation against which others are compared.

**Advantages vs Peers:**
- **Community scale**: 500 issues + 500 PRs touched daily dwarfs every other project (Hermes: 50+50, IronClaw: 9+50). This is 5–10x the engagement of the next most active projects.
- **Backlog maturity**: Structured triage tags (`clawsweeper:needs-maintainer-review`, `clawsweeper:needs-product-decision`) indicate mature project management, unlike CoPaw or PicoClaw which lack formal triage labels.
- **Bug velocity**: 12 PRs merged in a single day, including high-impact fixes (SQLite snapshots, Windows ACPX runtime, agent delivery duplication). Only Hermes (9 merged) and IronClaw (26 merged) approach this throughput.
- **Community loyalty**: Issue #75 (Linux/Windows Clawdbot Apps) has 81 👍 and 110 comments—the most intense feature demand in the entire ecosystem, indicating a deeply invested user base that wants to *stay* on OpenClaw across platforms.

**Technical Approach Differences:**
- OpenClaw's architecture emphasizes **channel parity and gateway resilience** (memory leak, session state, SQLite corruption fixes) over AI model routing or agent orchestration. This contrasts with IronClaw's focus on **benchmark performance** (30% → 65% gap vs Claude Code) and Hermes's emphasis on **cross-process state management** (Kanban workers, Matrix crypto lifecycle).
- OpenClaw's `Clawdbot` app platform (Issue #75) signals a **mobile-first cross-platform strategy**, unlike Hermes (web dashboard) or ZeroClaw (CLI + web).

**Community Size Comparison (Proxy: Issue/PR engagement):**
- **Tier 1 (500+ daily artifacts):** OpenClaw
- **Tier 2 (40–50 daily artifacts):** Hermes Agent, IronClaw, ZeroClaw
- **Tier 3 (3–13 daily artifacts):** NanoBot, PicoClaw, NanoClaw, CoPaw
- **Tier 4 (0–2):** LobsterAI, NullClaw, TinyClaw, Moltis, ZeptoClaw

---

## 4. Shared Technical Focus Areas

The following requirements emerged across **multiple projects simultaneously**, indicating genuine ecosystem-level needs:

| Focus Area | Projects Affected | Specific Needs |
|------------|-------------------|----------------|
| **Tool output visibility** | OpenClaw, CoPaw, IronClaw | Agents cannot read own tool results; "see attached image" placeholders; silent drops after long tool chains |
| **Memory/state corruption** | OpenClaw, Hermes, ZeroClaw, LobsterAI | SQLite "disk image malformed" (OpenClaw); session bleed across tabs (Hermes); USER.md overwrite (LobsterAI); RSS leaks (OpenClaw #91588, ZeroClaw #8642) |
| **CI/test reliability** | IronClaw, ZeroClaw | IronClaw: 70% main-branch failure rate; ZeroClaw: 48 open PRs requiring review—both bottlenecks to releases |
| **Multi-channel consistency** | ZeroClaw, PicoClaw, CoPaw, Hermes | Slack missing thread context (ZeroClaw #6055); Matrix silent sync death (PicoClaw #3203); Telegram concatenation (ZeroClaw #8445); Teams attachment drops (OpenClaw #94939) |
| **Cross-platform parity** | OpenClaw, NanoClaw | OpenClaw: Linux/Windows Clawdbot apps (#75, 81 👍); NanoClaw: ARMv7 Docker build (PicoClaw #3250, rejected) |
| **Context/token budget defaults** | ZeroClaw, NanoClaw | ZeroClaw #5808: 32K default exceeded immediately; NanoClaw #3023: 32K output token cap hidden from users |
| **Security hardening** | OpenClaw, Hermes, ZeroClaw | API key masking (OpenClaw #10659); memory trust tagging (OpenClaw #7707); security governance approval fatigue (CoPaw); credential failover (Hermes #63427) |

**Emerging convergence point**: The **reliability stack** (memory, tool visibility, session state) is the single most important cross-project investment area. No project has solved it.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | IronClaw | ZeroClaw | CoPaw | NanoBot |
|-----------|----------|--------------|----------|----------|-------|---------|
| **Target user** | End-user agent operator | Agent developer / power user | Enterprise / NEAR AI ecosystem | Operator / administrator | Chinese-market enterprise | Local-model enthusiast |
| **Primary interface** | Clawdbot mobile/web apps | Web dashboard + TUI | Reborn CLI + GitHub Actions | ZeroCode CLI + web | Feishu/DingTalk/Console | CLI + WebUI |
| **Key differentiator** | Reference platform; channel parity | Cross-process orchestration | Benchmark-driven performance | SOP approval + memory subsystem | AgentScope SDK integration | Lightweight; Ollama/local-first |
| **Release maturity** | Stable (frequent releases) | Stable (responsive triage) | Pre-release stabilization | Pre-major (v0.8.x) | Post-v2.0.0 crisis | Maintenance mode |
| **Community contributor pattern** | Many single-fix contributors | Mix of core + external | Dominated by core team (26 PRs, mostly dependabot + core) | Strong external contributors (Nillth, JordanTheJet) | First-time contributors active | Few external contributors |
| **Architecture emphasis** | Gateway + channel abstraction | Multi-profile + session state | Agent loop + extension runtime | ZeroCode + operator workflows | Memory/context compression | Simplicity; low resource footprint |

**Key takeaway**: OpenClaw is the **generalist Swiss Army knife**, Hermes targets **power developers**, IronClaw is **performance-obsessed**, ZeroClaw is **operations-focused**, and CoPaw is **China-market enterprise**.

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (High momentum, active risk)
- **OpenClaw**: Sustained high throughput, but critical P0 bugs (memory leak, tool blindness) not yet fixed. Risk: users may churn if reliability doesn't catch up to feature velocity.
- **IronClaw**: Highest PR merge count (26/day), but CI crisis blocks releases. The benchmark gap analysis (30% vs 65%) is driving meaningful architectural change. Risk: release blocked, breaking changes in flight.
- **ZeroClaw**: Strong contributor base, v0.8.3 feature complete but review-bottlenecked. 48 open PRs is a warning sign. Risk: contributor burnout if review cycle doesn't accelerate.

### Tier 2: Stabilizing / Consolidating
- **Hermes Agent**: Excellent triage discipline (34 issues closed/day), responsive maintainers. Moving from feature expansion to reliability hardening (Matrix crypto, session state).
- **NanoClaw**: Core-team focused, guard seam architecture suggests enterprise readiness path. Low community engagement but high internal velocity.

### Tier 3: Post-Release Crisis or Maintenance
- **CoPaw**: v2.0.0 introduced severe regressions (skill pool broken, memory corruption). High community frustration. Needs immediate stabilization before feature development.
- **NanoBot**: Heartbeat regression (P1) active. Maintenance mode with some community contributions.
- **PicoClaw**: Steady low cadence. Matrix reconnection bug (#3203) is the primary unresolved issue.
- **LobsterAI**: Quiet. One quality-of-life fix merged; one multi-agent regression (#2293) open.

### Tier 4: Dormant
- **NullClaw, TinyClaw, Moltis, ZeptoClaw**: No recent activity. Likely stalled or abandoned.

---

## 7. Trend Signals for AI Agent Developers

1. **Reliability is the new frontier.** Three years ago, the question was "can I build an agent?" Today, it's "can I run it for a week without restarting?" The memory leaks (OpenClaw #91588: 350MB → 15.5GB), session corruption (Hermes #62726, CoPaw #5995), and tool blindness (OpenClaw #104721) are the ecosystem's top pain points. **Developers should prioritize agents that demonstrate long-run stability over feature breadth.**

2. **Multi-channel is a requirement, not a differentiator.** Every active project has Slack, Telegram, Matrix, or Discord integration—and every one of them has channel-specific bugs. The convergence point is **thread context hydration**: agents must understand conversation history across channel boundaries. ZeroClaw's `conversations.replies` backfill (#6055) and CoPaw's cross-channel handoff (#5999) point to this becoming table stakes.

3. **CLI-first is yielding to GUI/Web-first.** Hermes's dashboard themes (50 👍, #18080) and OpenClaw's Clawdbot apps (#75, 81 👍) show user preference for visual interfaces. IronClaw's Reborn CLI and ZeroClaw's ZeroCode are exceptions, targeting operators rather than end-users.

4. **Security is moving from "nice to have" to "must have."** API key masking (OpenClaw #10659), memory trust tagging (#7707), and approval governance (CoPaw #5994, ZeroClaw SOP system) indicate that production deployments demand basic security hygiene. **Agent developers should build audit trails and permission systems from day one.**

5. **Benchmark competition is accelerating.** IronClaw's explicit comparison against Claude Code (30% vs 65%) and Hermes's comparisons against OpenClaude are early signs of an emerging benchmark culture. Developers should track project-specific benchmarks (IronClaw's weekly tracking, OpenClaw's performance regression tracking) rather than generic LLM leaderboards.

6. **The "hidden cap" problem is systemic.** NanoClaw's 32K output token cap (unadvertised SDK limit), ZeroClaw's 32K context budget (default too low), and OpenClaw's invisible tool output corruption all stem from **defaults that silently degrade experience**. Developers should audit every default configuration in their agent stack.

7. **China-market projects are a distinct ecosystem.** CoPaw and LobsterAI serve Chinese enterprise users with Feishu/DingTalk integrations, Chinese-language issue tracking, and different regulatory considerations. For global developers, feature parity and localization (Slovak in Hermes #63426, Bengali in PicoClaw #3190) matter for adoption.

**Final recommendation for technology decision-makers**: OpenClaw remains the safest bet for broad agent capabilities, but invest verification time in its reliability track record. For performance-critical deployments, IronClaw's benchmark-driven approach is compelling but requires CI tolerance. For human-in-the-loop enterprise workflows, ZeroClaw's SOP approval system is uniquely positioned. Avoid projects in Tier 4 (dormant) and monitor CoPaw's post-v2.0.0 stabilization timeline before deploying at scale.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-13

## Today's Overview
NanoBot saw moderate activity over the past 24 hours, with 4 issues updated (1 closed) and 5 pull requests updated (1 merged/closed). No new releases were cut. The project remains in an active maintenance and bug-fix cadence, with significant attention to the Dream session subsystem (two open bugs) and two high-priority (P1) fixes submitted via PR. The community continues to report real-world integration pain points, particularly around Ollama caching and Discord setup, while the WebUI team is pushing forward with guided setup flows and security hardening. Overall project health is stable but with several regressions requiring prompt attention.

## Releases
No new releases were published in the last 24 hours. The latest stable version remains the one prior to the `fe2af64e` heartbeat refactor that is causing the regression addressed in PR #4896.

## Project Progress
**Closed/Merged PRs (1):**
- **PR #4892** — `fix(webui): allow remote workspace access reduction` (merged/closed) — Adds security controls limiting remote WebUI sessions to Default Permission scope, preventing privilege escalation from non-local clients. This is a security-forward improvement for multi-user deployments.

**Notable Open PRs in Progress:**
- **PR #4855** (open since Jul 8) — `feat(webui): add guided setup flows` — major feature adding productized channel setup wizards, QR handoff, secret handling improvements, and Feishu assistant management. Likely targeting next minor release.
- **PR #4145** (open since Jun 1) — `fix: Weather Skill` — a long-running contribution adding a new example weather skill with tests and documentation.

## Community Hot Topics
- **#4867 [CLOSED] — Ollama caching enhancement** — 4 comments, closed. The issue describes a critical performance problem where Nanobot adds ~60 seconds per turn when using Ollama, making it "totally unusable" with 32GB VRAM. The root cause is that the prompt is not structured to allow KV cache reuse. While closed, this reflects a deeply felt pain point among users running local models.
  [🔗 Issue #4867](https://github.com/HKUDS/nanobot/issues/4867)

- **#4896 [OPEN] — Heartbeat regression (P1 fix)** — 0 comments (PR-only), but addresses a regression introduced in `v0.2.1` where heartbeat execution went from two-stage (review+execute) to single-stage without updating the prompt. Agents now only list tasks but never execute them.
  [🔗 PR #4896](https://github.com/HKUDS/nanobot/pull/4896)

## Bugs & Stability

| Severity | Issue | Bug | Fix PR? |
|----------|-------|-----|---------|
| **P1 (Critical)** | #4896 | Heartbeat regression — agents stop executing tasks after v0.2.1 refactor | ✅ PR #4896 (open) |
| **P1 (Critical)** | #4892 | WebUI remote workspace access escalation (resolved by merged fix) | ✅ PR #4892 (merged) |
| **P2 (High)** | #4897 | Discord bot integration — bot goes online but receives no messages; setup validation missing | ❌ No PR yet |
| **P2 (High)** | #4894 | `prune_dream_sessions()` fails for base64-encoded filenames — legacy glob pattern mismatch | ❌ No PR yet |
| **P3 (Medium)** | #4893 | `/dream-log` and `/dream-restore` show non-Dream commits in shared git workspace | ❌ No PR yet |

**Key Observations:**
- The heartbeat regression (#4896) is the most critical operational bug — it breaks a core agent capability for users who upgraded to the latest version.
- The Dream session file-name encoding change (commit `cf2f5896`) introduced two regressions (#4894, #4893) that together break the Dream persistence subsystem for newer session files.

## Feature Requests & Roadmap Signals
- **Ollama Prompt Caching (#4867, closed):** Though closed, the underlying request for prompt structure that preserves KV cache prefixes is likely to resurface. This is particularly relevant as local model usage grows. Expected in next release if the team revisits provider optimizations.
- **Guided WebUI Setup Flows (PR #4855):** Actively being developed. Adds channel setup wizards, QR handoff, and secret management — likely targeting v0.2.2 or v0.3.0.
- **Weather Skill Example (PR #4145):** Long-standing example contribution that provides a template for skill development. Decision on merge may signal openness to community skill contributions.

## User Feedback Summary
- **Pain Point — Ollama Performance:** Users report that Nanobot adds ~60 seconds per turn with Ollama, making local model use "totally unusable." This is a high-signal dissatisfaction from users invested in local inference.
- **Pain Point — Discord Setup Friction:** User attempted Discord integration but hit a silent failure (bot online but no messages received). Suggests need for better setup validation and error logging.
- **Pain Point — Dream System Regressions:** The base64 filename migration broke automated session pruning and made the dream log/restore commands confusing (mixing Dream commits with workspace commits). Users who rely on Dream sessions are affected.

## Backlog Watch
- **PR #4145 — Weather Skill** (opened 2026-06-01, no activity since Jul 12) — Long-running PR that has not received explicit maintainer feedback or a merge decision. If this is a desired contribution direction, it needs attention.
- **Issue #4893 — Dream log showing non-Dream commits** (opened Jul 12, no PR) — Reported alongside a more critical Dream bug (#4894). May be deprioritized but could be fixed in the same PR.
- **Issue #4897 — Discord Bot integration** (opened Jul 12, no PR) — No work yet; if Discord usage is a key channel strategy, this should be triaged soon.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-07-13

---

## 1. Today's Overview

Project activity remains very high with **50 issues** and **50 pull requests** updated in the last 24 hours, indicating a highly engaged community and maintainer team. The **closed-to-open ratio** for issues is strong at 34 closed vs 16 open, while PRs show heavier accumulation with 41 open and only 9 merged/closed today. No new releases were published, suggesting the team is focusing on bug fixes and feature development for the next version. The project continues to mature rapidly, with attention shifting toward **stability improvements**, **platform-specific fixes** (Windows, Docker, ARM64), and **cross-process state management** issues emerging from growing adoption.

---

## 2. Releases

**No new releases** in the last 24 hours. The latest available versions remain those previously published.

---

## 3. Project Progress

**9 PRs merged/closed today**, with significant improvements across multiple components:

- **TUI Recovery Fix** ([PR #63437](https://github.com/NousResearch/hermes-agent/pull/63437)): Fixes a critical hang when the TUI tries to recover after a gateway crash — the replacement gateway's `gateway.ready` signal was not being properly handled.

- **Package-Installed Gateway Updates** ([PR #63436](https://github.com/NousResearch/hermes-agent/pull/63436)): Enables `/update` command for deployments without `.git` directories, supporting pipx, uv-tool, venv, and Windows package-manager paths.

- **Desktop Local Path Preview** ([PR #63435](https://github.com/NousResearch/hermes-agent/pull/63435)): Adds fallback detection of local file paths in completed assistant messages on the Desktop client.

- **Curator Skill View Fix** ([PR #63433](https://github.com/NousResearch/hermes-agent/pull/63433)): Prevents the background review loop from failing when `skill_manage` is called before `skill_view` — a read-before-write guard issue.

- **Kanban Cross-Process Approval** ([PR #63421](https://github.com/NousResearch/hermes-agent/pull/63421)): Fixes detached Kanban workers inheriting gateway state without the process-local approval callback, preventing actions from becoming unanswerable.

- **Cron Repeat Format Handling** ([PR #63168](https://github.com/NousResearch/hermes-agent/pull/63168)): Corrects `AttributeError` when v0.18+ stores `repeat` as a plain integer instead of the legacy dict format.

- **Slovak Locale** ([PR #63426](https://github.com/NousResearch/hermes-agent/pull/63426)): Full i18n translation for `sk` locale with catalog parity.

- **Matrix Crypto Drain Before Shutdown** ([PR #63431](https://github.com/NousResearch/hermes-agent/pull/63431)): Prevents `RuntimeError: database pool has been stopped` by properly draining crypto handlers before DB shutdown.

- **xAI OAuth Multi-Account Support** ([PR #62285](https://github.com/NousResearch/hermes-agent/pull/62285)): Resolves credential pool rotation issues for xAI OAuth with multiple accounts.

---

## 4. Community Hot Topics

The most engaged discussions this period reveal deep user needs around **session reliability**, **visual customization**, and **intelligent model routing**:

- **[Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080) — Dashboard Themes (Closed, 28 comments, 50 👍)**: The highest-reacted issue by far. Users report the current themes (Midnight, Ember, Cyberpunk) use non-standard serif fonts with poor contrast, making the dashboard hard to read. This signals a strong desire for **professional-grade UI/UX** as the project targets enterprise users.

- **[Issue #20249](https://github.com/NousResearch/hermes-agent/issues/20249) — Model Presets: Per-Turn Escalation (Closed, 12 comments)**: A sophisticated feature request for on-demand escalation from cheap models (Gemini Flash) to premium reasoning models (Opus-level) on complex turns. Users want **cost optimization without sacrificing quality** — a classic pain point for heavy agent users.

- **[Issue #62726](https://github.com/NousResearch/hermes-agent/issues/62726) — Dashboard Cross-Tab Session Bleed (Open, 3 comments)**: Critical multi-tab usability issue where session state bleeds between browser tabs, and `/new` hangs requiring full container restart. This reflects **growing web UI adoption** and multi-session workflows.

- **[Issue #63395](https://github.com/NousResearch/hermes-agent/issues/63395) — Matrix E2EE Cron Disconnect (Open, 2 comments)**: A lifecycle issue where successful cron delivery to encrypted rooms triggers `RuntimeError: database pool has been stopped`, disconnecting the Matrix adapter. Fix PR [#63431](https://github.com/NousResearch/hermes-agent/pull/63431) is already in progress.

---

## 5. Bugs & Stability

**High Severity:**

- **Matrix E2EE Cron Destabilization** ([Issue #63395](https://github.com/NousResearch/hermes-agent/issues/63395)): Successful delivery to encrypted rooms floods logs and disconnects. **Fix PR #63431** is open and addresses the root cause (crypto handler lifecycle).

- **Dashboard Cross-Tab Session Bleed** ([Issue #62726](https://github.com/NousResearch/hermes-agent/issues/62726)): Two related bugs — session state leaks between tabs, and `/new` hangs requiring restart. **No fix PR yet**, marked with `sweeper:risk-session-state`.

- **Non-Default Profile Runtime Staleness** ([Issue #56717](https://github.com/NousResearch/hermes-agent/issues/56717)): A non-default profile (`bruce`) can keep running stale code even after update, causing `ImportError`. **No fix PR yet**, marked with `sweeper:risk-automation`.

**Medium Severity:**

- **LSP Idle Timeout Not Enforced** ([Issue #38365](https://github.com/NousResearch/hermes-agent/issues/38365)): TypeScript `tsserver` processes remain alive for the lifetime of long-running Hermes processes despite configured 600-second timeout. Resource leak in gateway/WebUI sessions.

- **write_file Returns Success Without Writing** ([Issue #52267](https://github.com/NousResearch/hermes-agent/issues/52267)): Windows-specific bug — file tool reports success but disk is unchanged. **No fix PR yet**.

- **Provider Auto-Detection Disables Credential Failover** ([Issue #63427](https://github.com/NousResearch/hermes-agent/pull/63427)): When `provider=None`, auto-detection runs before credential validation, silently disabling rotation. **Fix PR #63427** is open.

**Low Severity:**

- **Import Reordering Lint Errors** ([Issue #63411](https://github.com/NousResearch/hermes-agent/issues/63411) → [PR #63429](https://github.com/NousResearch/hermes-agent/pull/63429)): Three `perfectionist` import-order errors on clean `main` checkout.

- **Kanban Incomplete Run History Crash** ([PR #63430](https://github.com/NousResearch/hermes-agent/pull/63430)): `kanban_show` crashes when legacy task runs have `completed` status but `NULL ended_at`.

---

## 6. Feature Requests & Roadmap Signals

**High-Impact Requests Likely for Next Release:**

1. **Per-Turn Model Escalation** ([Issue #20249](https://github.com/NousResearch/hermes-agent/issues/20249)): Intelligent routing where cheap models handle simple turns and escalate to premium models for complex reasoning. Marked `sweeper:not-planned`, but the high engagement and clear value proposition may prompt re-evaluation.

2. **Improved Dashboard Themes** ([Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080)): With 50 👍 and strong user dissatisfaction, this is a clear UX priority. The existing themes were implemented but user feedback indicates poor readability.

3. **Slovak Language Support** ([PR #63426](https://github.com/NousResearch/hermes-agent/pull/63426)): Full locale translation accepted — signals continued i18n expansion.

4. **Mixin Network Messaging** ([PR #20303](https://github.com/NousResearch/hermes-agent/pull/20303)): New toolset for sending messages through Mixin Messenger (text, markdown, cards, GitHub trending). Marked `sweeper:not-planned`, suggesting this is a niche integration.

**Emerging Patterns:**
- **Multi-profile config migration** ([Issue #54926](https://github.com/NousResearch/hermes-agent/issues/54926)): `hermes update` should migrate all profiles, not just the active one. Cleanup of deprecated toolsets from config.
- **Windows-specific reliability** remains a recurring theme (write_file, file paths, terminal access).
- **Plugin platform environment variable handling** ([Issue #19440](https://github.com/NousResearch/hermes-agent/issues/19440)): `PREFIX_HOME_CHANNEL` env vars ignored in `_apply_env_overrides()`.

---

## 7. User Feedback Summary

**Pain Points:**

1. **Dashboard Readability** (Issue #18080): Strongest signal — "The current themes only change the colour scheme… serif fonts with little contrast makes the dashboard hard to read." Users want **professional, readable UI** beyond color swaps.

2. **Session Recovery After Crash** ([Issue #19245](https://github.com/NousResearch/hermes-agent/issues/19245), multiple duplicates): Orphaned session JSON not recovered after crashes. This was **fixed** (`sweeper:implemented-on-main`), but the multiple reports (3+ duplicates) indicate it was a significant user frustration.

3. **Windows File Access** ([Issue #17999](https://github.com/NousResearch/hermes-agent/issues/17999)): `read_file` fails on valid D: drive paths. Fixed, but Windows users continue reporting file tool issues (Issue #52267).

4. **Anthropic Excessive Branding** ([Issue #19046](https://github.com/NousResearch/hermes-agent/issues/19046)): "screaming to Anthropic's API that this is a third party harness" — user concerned about API detection/blocking. Closed as `wontfix`.

**Satisfaction Signals:**
- High volume of feature requests indicates **active, invested user base** who see Hermes as their primary agent platform
- Quick closure of issues (34 closed in 24h) suggests **responsive maintainers**
- Users testing against alternatives (opencode, openclaude, claude) and reporting Hermes-specific bugs shows **competitive usage patterns**

---

## 8. Backlog Watch

**Issues Requiring Maintainer Attention:**

1. **[Issue #62726](https://github.com/NousResearch/hermes-agent/issues/62726) — Dashboard Cross-Tab Session Bleed (P2, 3 days open)**: Multi-tab state corruption with `/new` hang requiring container restart. Critical for web UI reliability. **No fix PR yet.**

2. **[Issue #56717](https://github.com/NousResearch/hermes-agent/issues/56717) — Non-Default Profile Runtime Staleness (P2, 11 days open)**: Stale code execution after updates for non-default profiles. Security/stability risk. **No fix PR yet.**

3. **[Issue #52267](https://github.com/NousResearch/hermes-agent/issues/52267) — write_file Silent Failure on Windows (P2, 18 days open)**: Data loss scenario — tool reports success but doesn't write. Windows-specific with `needs-repro` label. Needs investigation and fix.

4. **[Issue #38365](https://github.com/NousResearch/hermes-agent/issues/38365) — LSP Idle Timeout Not Enforced (P2, 40 days open)**: TypeScript tsserver processes leak. Impacts long-running gateway/WebUI sessions. Marked `duplicate` with no clear fix path.

5. **[Issue #54926](https://github.com/NousResearch/hermes-agent/issues/54926) — Profile Migration Gap (P3, 14 days open)**: Multi-profile systems are incomplete — `hermes update` only migrates the active profile. Growing relevance as more users adopt profile-based workflows.

**PRs Needing Review:**

1. **[PR #63427](https://github.com/NousResearch/hermes-agent/pull/63427) — Provider Auto-Detection Credential Failover Fix (P1)**: High severity — silently disables credential rotation. Needs immediate review and merge.

2. **[PR #20295](https://github.com/NousResearch/hermes-agent/pull/20295) — Empty Conversation History Handling (P2, 68 days open)**: Stale PR fixing silent agent initialization when POST `/v1/runs` lacks conversation history. API correctness fix.

3. **[PR #20283](https://github.com/NousResearch/hermes-agent/pull/20283) — Session DB Factory Boundary (P3, 68 days open)**: Clean architecture improvement — centralizes `create_session_db()`. Low risk, high maintenance value.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-13

## 1. Today's Overview
Project activity is moderate, with 5 issues updated and 3 pull requests processed in the last 24 hours. The backlog shows three open bugs (two stale) and one new feature merged, indicating steady but not frantic maintenance velocity. No new releases were published, consistent with a period of incremental improvements rather than major version jumps. Community engagement remains healthy, with one highly relevant reconnection bug and one parser bug receiving fresh attention.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
Two pull requests were merged or closed:
- **[#3249 – Skill enable/disable state + cron RunNow](https://github.com/sipeed/picoclaw/pull/3249)** (merged): Backports a skills toggle system from an Ethos fork. Adds per-skill disable state in `workspace/skills/.skills-state.json` and a cron `RunNow` button. The disable mechanism leverages existing mtime-tracking for cache invalidation — a clean design.
- **[#3190 – fix(i18n): sync missing locale keys from en.json to bn-in and cs translations](https://github.com/sipeed/picoclaw/pull/3190)** (closed, stale): Adds missing translation keys (`chat.dropImagesActive`, `chat.disableCodeWrap`, `chat.enableCodeWrap`) for Bengali and Czech locales.

An open PR **[#3251 – fix(providers): capture the prompt cache token usage in Anthropic providers](https://github.com/sipeed/picoclaw/pull/3251)** is under review and would expose cache hit/miss metrics for Claude, a valuable operations feature.

## 4. Community Hot Topics
- **[#3203 – Matrix sync loop has no reconnection logic — silent death after network/server disruption](https://github.com/sipeed/picoclaw/issues/3203)** (2 comments, 1 👍): The most critical ongoing discussion. Users report that a Matrix `/sync` long-polling failure leaves the process alive but dead to the bridge, bypassing systemd restart mechanisms. The original poster explicitly requests a health-check endpoint or watchdog support. This issue touches core reliability for Matrix users.
- **[#3252 – splitKnownProviderModel strips provider prefix when model ID contains known provider alias](https://github.com/sipeed/picoclaw/issues/3252)** (0 comments, 0 👍, filed today): A subtle but likely annoying parser bug in the provider factory. Example: provider prefix `x` with model name containing known alias `y` results in incorrect stripping. Needs maintainer triage.
- **[#3182 – [BUG] Android version – can't launch service](https://github.com/sipeed/picoclaw/issues/3182)** (3 comments, 0 👍): A stale but still open Android-specific bug where the service cannot launch despite having full permissions. The user included a screenshot showing they cannot change the path from settings. The low engagement suggests an edge case or platform-specific build issue.

**Underlying theme**: The Matrix connectivity bug (#3203) represents the strongest single community signal this week—users want production-grade resilience, not just feature parity.

## 5. Bugs & Stability

### High Severity
- **Matrix sync loop reconnection failure** [#3203](https://github.com/sipeed/picoclaw/issues/3203) — open, 1 like. Silent death after network disruption. No fix PR yet; this is a structural reliability gap for Matrix users.

### Medium Severity
- **Provider model prefix stripping bug** [#3252](https://github.com/sipeed/picoclaw/issues/3252) — open, filed today. May cause silent misrouting of model requests. No PR yet.

### Low Severity
- **Received encrypted message but crypto not enabled** [#3194](https://github.com/sipeed/picoclaw/issues/3194) — closed, stale. User saw Matrix encrypted messages with no crypto configured; likely a configuration warning rather than a crash.
- **Android service launch failure** [#3182](https://github.com/sipeed/picoclaw/issues/3182) — open, stale. No new activity for 16 days; may be platform-specific or user-error.

## 6. Feature Requests & Roadmap Signals
- **docker-compose support for ARMv7 (armhf)** [#3250](https://github.com/sipeed/picoclaw/issues/3250) (closed): A feature request for armhf devices like OneCloud/玩客云. The request includes a proposed Dockerfile change. Closed without merge, suggesting maintainers declined or deferred this architecture. This may reappear if community demand grows.
- **Prompt cache token usage in Anthropic providers** [PR #3251](https://github.com/sipeed/picoclaw/pull/3251) (open): If merged, this would give operators visibility into Claude prompt cache performance. Likely to land in v0.3.x.
- **Cron RunNow button + skills toggle** [PR #3249](https://github.com/sipeed/picoclaw/pull/3249) (merged): Already landed—users can now enable/disable skills per-workspace and trigger cron tasks ad-hoc. This is a moderate UX improvement.

**Prediction for next release**: Prompt cache metrics capture (#3251) is the strongest candidate. ARMv7 support seems unlikely unless maintainers reevaluate.

## 7. User Feedback Summary
- **Positive signal**: The fork backport (#3249) was merged quickly, indicating the project values community-contributed management features.
- **Pain points**: 
  - Matrix users are frustrated by silent sync failures (#3203) with no automatic recovery.
  - Provider model prefix parsing (#3252) can cause confusing routing behavior.
  - Android users (#3182) report broken core functionality on mobile.
- **Use cases emerging**: SBC deployment (ARMv7, #3250) and language localization (Bengali, Czech, #3190) show a diversifying user base beyond x86 servers.

## 8. Backlog Watch
- **[#3182 – Android version](https://github.com/sipeed/picoclaw/issues/3182)**: Unanswered for 17 days. This is a potentially significant user-facing platform bug, but no maintainer has triaged it. Risk: poor mobile experience reflects on project quality.
- **[#3203 – Matrix sync reconnection](https://github.com/sipeed/picoclaw/issues/3203)**: Active but no fix PR. With 1 like and escalating comments, this needs maintainer assignment to avoid user flight.
- **[#3194 – Encrypted message with crypto disabled](https://github.com/sipeed/picoclaw/issues/3194)**: Closed, but the underlying question ("why receive encrypted messages when crypto is off?") may indicate a usability or config concept issue worth addressing.

**No current stale PRs requiring maintainer pong** — the PR queue is fresh and well-handled.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-13

## 1. Today's Overview

The NanoClaw project is experiencing a **high-activity day** with **13 pull requests** updated in the last 24 hours and **3 active issues** submitted within the past two days. Two PRs were merged/closed, indicating steady progress toward resolving known bugs. The project shows a strong **core-team focus** on security hardening, guard infrastructure, and CLI operator capabilities. No new releases were published today, but the pipeline contains multiple high-impact fixes and features nearing completion.

## 2. Releases

**No new releases** were published in the last 24 hours. The latest available version remains unchanged.

## 3. Project Progress

**Closed/Merged PRs (2):**
- **#3024** — `fix(container): raise the agent SDK's 32000 output-token cap to the model's real ceiling` (by javexed). This directly fixes Issue #3023, unblocking agents that generate long outputs (e.g., OpenSCAD files). [PR Link](https://github.com/nanocoai/nanoclaw/pull/3024)
- **#2952** — `Skill/add opencode stack` (by javexed, closed). An operational/container skill addition. [PR Link](https://github.com/nanocoai/nanoclaw/pull/2952)

**Features and fixes now in review pipeline:**
- **Guard seam (phase 2)** — Every privileged action now passes a single `guard()` decision function (`allow | hold | deny`) before execution, replacing the old voluntary gating system. (PR #2986, core-team)
- **CLI operator approval resolution** — `ncl approvals` gains `approve`, `reject`, and `reject-with-reason` verbs, enabling CLI operators to unblock held actions. (PR #3029, core-team)
- **Duplicate reply fix** — A fix for the re-wrap nudge ensuring agents that already replied via `send_message` don't re-run the model (PR #3028, addresses #3026).
- **Container TMPDIR relocation** — Fixes a root-owned directory poisoning issue on the onecli CA certificate path (PR #3027, by caburi00).
- **Scheduled tasks in templates** — Templates can now define recurring tasks via `tasks/*.md`, created paused when an agent group is stamped (PR #3022, amit-shafnir, core-team).
- **Audit logging skill** — Opt-in local audit log for the `ncl` surface (PR #2987, moshe-nanoco, core-team).
- **Tool allowlist reconciliation** — Fixes drift between the agent runner's `TOOL_ALLOWLIST` and the pinned claude-code CLI (PR #2982, gabi-simons, core-team).
- **Per-group harness capability toggles** — Lean defaults for new groups, existing grandfathered (PR #2983, gabi-simons, core-team).
- **WhatsApp shared number warning** — Warns before connecting a shared/personal WhatsApp number (PR #3021, Koshkoshinsk).

## 4. Community Hot Topics

1. **#3020 — `fix(agent-runner): rescue undelivered unwrapped replies after the re-wrap nudge`** (by robbyczgw-cla)  
   Addresses the long-standing silent-drops issue (#2369, #2393). This PR is the most substantial community-facing fix currently in review. It targets the root cause of agents producing model output without proper `<message to>` wrappers after long tool chains.  
   [Issue Link](https://github.com/nanocoai/nanoclaw/issues/3016)

2. **#3016 — `Every rate_limit_event is logged as a quota error, even when the status is "allowed"`** (by glifocat)  
   A regression since PR #2965 causing noisy false-positive quota error logs on every completed turn. 82 logged events in one week with zero actual failures. The community need is for **log hygiene** — users cannot distinguish real quota blocks from noise.  
   [Issue Link](https://github.com/nanocoai/nanoclaw/issues/3016)

3. **#3023 — `Every Claude agent is silently capped at 32000 output tokens`** (by javexed)  
   Already fixed by merged PR #3024, but the issue highlights a **surprise configuration gap** — the environment variable `CLAUDE_CODE_MAX_OUTPUT_TOKENS` was never set by any code path.  
   [Issue Link](https://github.com/nanocoai/nanoclaw/issues/3023)

**Analysis:** The underlying need across these issues is **configuration transparency** — users expect defaults to match the model's advertised capabilities, not hidden SDK defaults.

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | #3023 — All Claude agents silently capped at 32K output tokens, long outputs fail | **Fixed** | Merged (#3024) |
| **High** | #3016 — Every rate_limit_event logged as quota error, log noise on every turn | **Open** | None yet |
| **High** | #3026 — Re-wrap nudge duplicates replies when agent already replied via `send_message` | **Open** | #3028 (in review) |
| **Medium** | Container CA certificate root-owned directory poisoning (#3027 fix) | **Open** | #3027 (in review) |

**Notable:** The 32K token cap fix was turned around within 24 hours of the bug report — a strong signal of maintainer responsiveness.

## 6. Feature Requests & Roadmap Signals

**Predicted for next release:**
- **Unwrapped reply rescue** (PR #3020) — Expected to merge soon, resolves the most persistent silent-drop bug for long tool-chain turns.
- **Duplicate reply prevention** (PR #3028) — Expected alongside or shortly after #3020, as it's a related nudge fix.
- **Guard seam phase 2** (PR #2986) — Core architectural change that unifies privileged action gating. Likely to land in the next minor release.
- **Schedule-in-templates** (PR #3022) — Straightforward feature that solves a clear template author pain point.

**Longer-term signals:**
- **Operator approval resolution CLI** (PR #3029) — Points toward growing the `ncl` surface from read-only to full operational control.
- **Per-group harness capabilities** (PR #2983) — Indicates an ongoing architecture shift toward group-level configuration granularity.
- **Audit log skill** (PR #2987) — Suggests compliance/enterprise use cases becoming a roadmap priority.

## 7. User Feedback Summary

**Pain Points:**
- **Log noise and false alarms** — Users report confusion from `[poll-loop] Error: Rate limit (quota)` messages on every completed turn (#3016). This undermines trust in the error reporting system.
- **Silent message drops** — Long tool-chain turns without `<message to>` wrappers cause models to re-run and sometimes drop replies entirely (#3020, #2369, #2393). This is the most frequently cited reliability complaint.
- **Surprise token limits** — Users building long artifacts (OpenSCAD, CAD files) hit mysterious failures due to an unadvertised SDK cap (#3023).

**Satisfaction Signals:**
- The PR #3024 fix was merged within hours of reporting — users appreciate rapid response to clear configuration bugs.
- Multiple core-team PRs (#2986, #2987, #3022, #3029) indicate sustained investment in both infrastructure and usability.

## 8. Backlog Watch

**Issues needing maintainer attention:**
- **#3016** (rate limit log noise) — Has been open for 2 days with 1 comment, no assignee. With 82 log occurrences per week per user, this is degrading monitoring for everyone on subscription installs.
- **#3026** (duplicate reply from re-wrap nudge) — Open for 1 day, no comments, no assignee. The fix PR #3028 exists but has not been linked to the issue.

**PRs needing review attention:**
- **#2986** (guard seam phase 2) — Open since July 9, last updated July 12, core-team authored. Large architectural change likely needs careful review.
- **#2982** (tool allowlist drift fix) — Open since July 8, last updated July 12, core-team authored. Addresses potential tool-name mismatches that could cause silent agent failures.
- **#2987** (audit log skill) — Open since July 9, rebased and hardened. Another core-team PR that increases surface area and review burden.

**Observation:** The backlog is relatively healthy — the oldest open items are only 5 days old, and all are actively being updated. No issues or PRs appear abandoned.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-13

## Today's Overview

IronClaw shows **high development velocity** with 50 PRs updated in the last 24 hours (26 merged/closed), alongside 9 updated issues. The project is in a **major stabilization and resilience cycle**: the CI pipeline is experiencing significant flakiness (~70% of July main-branch pushes failing), and a multi-PR stack (PRs #5959, #5975, #5977, #5978, #5979) is systematically addressing runtime reliability, prompt-cache efficiency, and agent edit-guardrails. No new releases were cut today, but the release PR #5598 (preparing `ironclaw_common` 0.5.0, `ironclaw` 0.29.1) remains open, suggesting a significant release is pending stabilization of the ongoing CI fixes. Core contributors are highly active across CI hardening, extension-runtime delivery, and agent-loop improvements.

---

## Releases

**None today.** No new releases were published in the last 24 hours. Note that the release PR (#5598) is still open, which would bump `ironclaw_common` from 0.4.2 → 0.5.0 (with API-breaking changes) and `ironclaw` from 0.24.0 → 0.29.1, suggesting a large release is imminent once CI stability is achieved.

---

## Project Progress

**26 PRs were merged/closed in the last 24 hours**, reflecting strong forward momentum across multiple workstreams:

- **Agent-loop resilience & performance** (PR #5959 — merged?): Deep availability retries, iteration backstop, model-visible tool-failure reasons, addressing the 30% vs 65% benchmark gap on the same model. Stack builds on #5975 (prompt-cache break detection), #5977 (skill-loading optimization), #5978 (read-before-edit guardrails), #5979 (post-edit check diagnostics).

- **Extension runtime** (PR #6012 — open, draft): P5 delivery coordinator + Slack/Telegram outbound, part of a 6/8 PR train. This is a major new multi-channel outbound delivery capability.

- **Per-user MCP registration store** (PR #5970 — open): Rebuilt on `InstallationOwner` machinery, enabling per-user MCP registration (T1 of a larger stack).

- **CI hardening** (PR #6022 — open): Adds static pre-push checks for `include_str!` path coverage and hermetic env guards, targeting the deterministic CI failure classes mapped in #6018.

- **Test isolation fixes** (PR #6023 — open): Fixes the `build_runtime_input` flake (#6015), a test-isolation defect causing ~14 tests to fail together in the all-features coverage leg.

- **Admin secrets scope fix** (PR #5934 — open): Aligns admin secret operations with default runtime scope, preserving tenant/user identity.

- **Dependency updates**: Two large dependabot PRs (#5926 — closed, #6021 — open) bumping 20+ Rust dependencies, plus ongoing updates to the actions group (#5664 — open) and tokio ecosystem (#5114 — open).

---

## Community Hot Topics

**Most Active Issues:**

1. **#5704** ([link](https://github.com/nearai/ironclaw/issues/5704)) — Image preview transparency during active chat (CLOSED). 2 comments. A visual bug where agent processing causes image thumbnails to become transparent. Fixed and closed.

2. **#6014** ([link](https://github.com/nearai/ironclaw/issues/6014)) — CI fragility: flaky non-hermetic tests reding ~70% of main pushes. **Critical structural issue** — the single largest source of CI failures. No comments yet but clearly driving the CI hardening PRs (#6023, #6022).

3. **#6018** ([link](https://github.com/nearai/ironclaw/issues/6018)) — CI hardening: static pre-push checks. A direct follow-on from #6014, proposing deterministic static checks to catch the non-flaky CI failure classes.

**Most Active PRs (by size/complexity):**

- **#5959** ([link](https://github.com/nearai/ironclaw/pull/5959)) — "Reborn loop resilience" — 4-PR stack base, XL size, addressing the 30% vs 65% benchmark gap. This is the **most strategically important PR** this week.

- **#6020** ([link](https://github.com/nearai/ironclaw/pull/6020)) — Making Q-10 Slack journeys deterministic and observable. XL size, medium risk, touching Slack delivery contracts and public-output guardrails.

- **#5979 / #5978 / #5975 / #5977** — The 4-PR edit-guardrails and prompt-cache stack. These collectively represent a **major architectural upgrade** to how Reborn handles agent tool usage, benchmarked against Claude Code's execution patterns.

**Underlying needs**: The community is clearly pushing for **production-grade reliability** — the CI flakiness is blocking progress, and the benchmark gap analysis (30% vs 65%) is driving fundamental changes to the runtime loop. The Slack/Telegram outbound work (#6012) signals interest in multi-channel agent deployments.

---

## Bugs & Stability

**High Severity:**

1. **CI fragility (#6014)** — ~70% of July main-branch pushes failing. Root cause is structural (non-hermetic tests, flaky DB concurrency tests, timing-sensitive e2e tests). Fix PRs: #6022 (static pre-push checks), #6023 (test isolation fix). **CRITICAL** — blocking all CI confidence.

2. **NEAR AI inference (GLM-5.2) hangs (#6010)** — CLOSED. Frequent multi-minute hangs during opencode usage, making it unusable for real-time interactive development. Appears to have been fixed.

3. **GLM-5.2 not in opencode default list (#6009)** — CLOSED. Required manual forking to add the model — a significant barrier to entry.

**Medium Severity:**

4. **DB concurrency contract flakiness (#6017)** — Two database tests (Postgres CAS delete-vs-recreate race, libSQL concurrent writers) flake under parallel load. Timing-sensitive, not deterministic. No dedicated fix PR yet; likely addressed by broader CI hardening.

5. **Slack trigger-delivery e2e timeouts (#6016)** — Intermittent timeouts in Slack e2e tests, currently the two most recent main failures (07-11). Fix partially addressed by #6020 (making Slack journeys deterministic).

6. **build_runtime_input races on std::env (#6015)** — ~14 tests fail together in all-features coverage leg. A genuine test-isolation defect. Fix PR: #6023 (process-env test lock unification).

**Low Severity (Visual):**

7. **Image preview transparency (#5704)** — CLOSED. Images become transparent while chat is actively processing. Fixed.

---

## Feature Requests & Roadmap Signals

**Active Feature Development (likely in next release):**

1. **MCP Registration Store** (PR #5970) — Per-user MCP registration, T1 of a larger stack. Likely to land in the upcoming release (0.29.x).

2. **Extension Runtime — Delivery Coordinator** (PR #6012) — Slack/Telegram outbound delivery. This is workstream F of the extension-runtime design. Expected to land across multiple upcoming releases.

3. **Unix Timestamp Support in `builtin.time`** (PR #6024) — Accept raw Unix timestamps, fractional seconds, and milliseconds. A quality-of-life improvement for agents.

4. **Doctor Command Extension** (PR #6019) — Adding LLM/provider credential readiness checks and opt-in live checks to `ironclaw-reborn doctor`.

5. **Tools-Capable Completion Nudge** (PR #6013) — Making the agent loop's driver-specific completion nudge tools-capable for interactive coding.

**User-Requested Features (from issues):**

- **GLM-5.2 model availability in opencode** (#6009, CLOSED) — Users want default model lists to include popular models without manual configuration.
- **CI reliability** (#6014, #6018) — The community (mostly core contributors) is demanding deterministic CI so development is not blocked.

**Prediction for next version**: The upcoming release (likely `ironclaw` 0.29.x) will focus on:
- CI hardening (static pre-push checks, test isolation fixes)
- Runtime resilience (retry strategies, prompt-cache optimization)
- Edit guardrails (read-before-edit, post-edit diagnostics)
- Extension runtime foundation (delivery coordinator)
- MCP registration (T1)

---

## User Feedback Summary

**Pain Points:**

1. **CI blocking development** (#6014) — "~70% of July push runs failed" is a massive productivity drain for all contributors. The taxonomy reports (#6011) are a transparent, data-driven approach to tracking this.

2. **Model availability friction** (#6009, CLOSED) — Having to manually fork opencode to add GLM-5.2 is a significant barrier. Users want zero-config model support.

3. **Inference instability** (#6010, CLOSED) — Multi-minute hangs during interactive development make the product "unusable" for real-time tasks.

4. **Benchmark performance gap** (PR #5959 analysis) — 30% (IronClaw) vs 65% (Claude Code) on the same model, same day. A core competitiveness concern.

**What's working well:**

- The failure taxonomy reports (#6011) and transparent CI analysis show a mature engineering culture.
- The systematic benchmarking against Claude Code and Hermes shows serious competitive positioning.
- Multi-channel (Slack/Telegram) and extension runtime work indicates growing platform capabilities.

**Users are satisfied with**: The data-driven approach to performance analysis, the weekly benchmark tracking, and the systematic fix stacks (4-PR patterns).

---

## Backlog Watch

**Long-unanswered Issues/PRs requiring attention:**

1. **PR #4032** ([link](https://github.com/nearai/ironclaw/pull/4032)) — Wasm group dependency bump (`wit-component`, `wit-parser`). **Open since 2026-05-25** (48 days). No recent comments. A stale dependency update that could block WebAssembly-related work.

2. **PR #5114** ([link](https://github.com/nearai/ironclaw/pull/5114)) — Tokio ecosystem dependency bump (4 updates). **Open since 2026-06-21** (22 days). Medium risk — tokio ecosystem updates often include critical fixes.

3. **PR #5664** ([link](https://github.com/nearai/ironclaw/pull/5664)) — Actions group dependency bump (16 updates, including `actions/checkout` from v4→v7, `claude-code-action` updates). **Open since 2026-07-05** (8 days). The `claude-code-action` version gap (1.0.88 → 1.0.171) could indicate missing features or fixes.

4. **PR #5598** ([link](https://github.com/nearai/ironclaw/pull/5598)) — Release PR. **Open since 2026-07-03** (10 days). This is the biggest backlog item — the release is blocked on CI stability. The breaking changes in `ironclaw_common` and `ironclaw_skills` suggest significant API evolution that downstream consumers (and the broader NEAR AI ecosystem) need.

5. **Issue #6017** ([link](https://github.com/nearai/ironclaw/issues/6017)) — DB concurrency flakiness. **No comments, no assignee.** This is a real concurrency bug (Postgres CAS delete-vs-recreate race) that could cause silent data corruption in production if not properly handled.

**Recommendation**: Prioritize merging the CI hardening PRs (#6022, #6023) to unblock the release (#5598), then address the stale dependabot PRs (#4032, #5114) which accumulate risk over time.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-13

## Today's Overview
On 2026-07-13, LobsterAI shows low activity with 1 issue and 2 PRs updated in the last 24 hours, none of which are newly created. No new releases have been published, indicating a quiet period likely focused on maintenance and backlog review rather than new feature rollouts. The project remains in a stable but slow development cycle. One open bug report (#2293) continues to draw community attention, while two stale PRs (#1325, #2065) received updates, suggesting maintainers are gradually clearing the backlog.

## Releases
No new releases were published in the last 24 hours or in the near term. The latest release information is unavailable.

## Project Progress
Two PRs were updated today, with one merged/closed:

- **Merged/Closed:**
  - [#2065 [CLOSED] fix(agent): 使用短 UUID 替代名称生成 Agent ID](https://github.com/netease-youdao/LobsterAI/pull/2065) — Authored by gongzhi-netease, this PR addresses a subtle data-revival bug where deleting an Agent and recreating it with the same name would resurrect old workspace/session data. The fix switches Agent ID generation from name-based (`"my-assistant"`) to short UUIDs, preventing unintended data reuse. The PR also documents remaining cleanup issues (e.g., deleting associated sessions). Its closure today signals this fix is now in the codebase.

- **Open (stale):**
  - [#1325 [OPEN] feat(ui): 为新建对话图标按钮添加悬停提示](https://github.com/netease-youdao/LobsterAI/pull/1325) — A UI polish PR that adds tooltip hints to the "New Conversation" icon button when the sidebar is collapsed. Despite its age (April 2026), it received an update today, possibly indicating maintainers are re-evaluating it for inclusion.

## Community Hot Topics
The only actively discussed item is a bug report:

- **#2293 [BUG] Multiple agents’ USER.md files get overwritten after restart**  
  [View Issue](https://github.com/netease-youdao/LobsterAI/issues/2293)  
  *Author: yepcn | Created: 2026-07-07 | Updated: 2026-07-12 | Comments: 4*  
  This issue describes a regression where modifying one agent's "About You" settings or `USER.md` causes all other agents' `USER.md` files to be overwritten with the main agent's content after a restart. The user confirmed the behavior persists even when manually editing `workspace-*` files while the software is closed. The issue has 4 comments, indicating some community engagement and likely frustration. No fix PR is currently linked.

No other issues or PRs received significant reactions or comments in this period.

## Bugs & Stability

| Severity | Bug | Description | Status | Fix PR? |
|----------|-----|-------------|--------|---------|
| **High** | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) — USER.md overwrite across agents | After restart, all agents' `USER.md` are replaced by the main agent's content, destroying per-agent customization. User suspects a recent update introduced this regression. | Open, active | No linked PR yet |
| **Medium** | [#2065](https://github.com/netease-youdao/LobsterAI/pull/2065) (fixed) — Stale data revival on agent rename | Agent ID collision caused old workspace data to reappear when re-creating an agent with the same name. | **Fixed** (closed today) | ✅ PR #2065 |

The USER.md overwrite bug (#2293) is the highest-priority active stability concern, as it directly breaks a core multi-agent workflow — users cannot independently configure per-agent personality or context without it being erased on restart.

## Feature Requests & Roadmap Signals

- **Agent isolation (implied by #2293):** Users need a guarantee that per-agent configuration files (`USER.md`, workspace settings) are isolated and not overwritten by other agents. This is not a new feature request but a regression fix required to restore expected behavior. Likely to be prioritized for the next patch release.

- **UI polish (implied by #1325):** The stale PR for tooltip hints on icon buttons suggests ongoing interest in improving first-time user experience and discoverability. While not urgent, it may be merged in the next minor release.

- **Data cleanup completeness (referenced in #2065):** Although PR #2065 is merged, the author documented that several data artifacts (e.g., associated sessions) are still not cleaned when an agent is deleted. This is a known engineering debt item that could surface as a future roadmap concern.

Predictions for next version: a hotfix release addressing the USER.md overwrite bug (likely within days) plus the merged UUID-based Agent ID fix (#2065).

## User Feedback Summary

- **Pain point — Multi-agent configuration loss:** The user in #2293 expresses clear frustration that each agent's identity (`USER.md`) is not preserved across restarts. The workflow of having multiple agents with distinct personalities is broken. The phrase "这样就没法对不同agent建立不同的需求" ("this makes it impossible to set different needs for different agents") captures a core use case that has regressed.

- **Satisfaction indicator — Stale PR updates:** The fact that maintainers are revisiting old PRs (#1325, #2065) suggests a willingness to clear technical debt and polish UI, which may positively impact user satisfaction once new releases land.

- **No positive feedback or praise reported** in the last 24 hours.

## Backlog Watch

| Item | Type | Created | Last Update | Notes |
|------|------|---------|-------------|-------|
| [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) — USER.md overwrite | Bug | 2026-07-07 | 2026-07-12 | **Needs maintainer attention.** No fix PR yet, 4 comments. High user impact. |
| [#1325](https://github.com/netease-youdao/LobsterAI/pull/1325) — Tooltip for new conversation icon | PR (stale) | 2026-04-02 | 2026-07-12 | Low priority UI improvement. Received a recent update but unclear if it will be merged. |

**Call to action:** The #2293 bug should be prioritized for investigation and a hotfix release, as it directly blocks a primary feature (multi-agent isolation) and is generating user frustration.

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

Here is the CoPaw project digest for **2026-07-13**.

---

## 1. Today's Overview
The project is experiencing a high-volume, **critical patch cycle** following the release of v2.0.0. Activity is intense, with 19 issues updated and 10 PRs in play; however, **no new release** was cut today, suggesting the team is consolidating fixes. The majority of reported issues are regressions or bugs introduced in the major version upgrade, particularly around context compression, skill discovery, and cross-channel session management. The community is responsive, but the backlog of severe bugs is piling up faster than fixes are being merged.

## 2. Releases
**None.** No new releases were published today. The last known stable version is **v2.0.0**.

## 3. Project Progress
Three PRs were merged/closed today, all focused on **data compatibility and stability**:
- **PR #5990, #5988, #5987** (all by Nioolek and tadebao): Closed after fixes for legacy file block handling and orphan tool message sanitization. These address the immediate 400 BadRequest errors caused by context compression and v1→v2 data migration gaps.

- **PR #5997** (wananing): **Open.** Fixes the desktop bundle to include the AgentScope `Glob` helper, resolving the `No module named 'agentscope.tool._builtin._scripts'` auto-memory crash (Issue #5952).

- **PR #5993** (dongbeixiaohuo): **Open.** Restores v1 session media (images, files) in v2, fixing a major data loss scenario.

- **PR #5869** (Jun-yao-hub): **Open.** Adds slash-command autocomplete for system commands across all UIs (TUI + web).

- **PR #5992** (mango8853): **Open.** Introduces per-session model overrides, allowing users to assign a different model to a specific session than the agent default.

## 4. Community Hot Topics
- **Issue #5995** ([Closed] Messages silently dropped when session is busy): This was the **most urgent** user complaint today. The agent drops incoming messages without queueing or error. The user base is clearly frustrated by this silent failure pattern, which breaks asynchronous workflows. Closed quickly, likely a hotfix.

- **Issue #6000 / #6001** ([Open] Skill pool broken for all new skills): Two separate users reported the same critical blocker: **no newly installed skill appears** in the skill pool after restart. The skill discovery is completely broken for v2.0.0. This is likely a `skill.json` lock or indexing bug. High demand for a fix.

- **Issue #5999** ([Open] Cross-channel session handoff): A sophisticated feature request to bind/switch sessions across Console, Feishu, and DingTalk. Indicates a growing need for **enterprise multichannel workflows**.

## 5. Bugs & Stability
**Severity: Critical**

- **#5986** (Context compression breaks tool_call pairing → 400 error): **Critical.** Leads to API 400 errors and agent stalls. A fix is already submitted in PR #5989 and #5987.
- **#5952** (auto-memory fails: missing module): **Critical.** Blocks memory summarization entirely. Fix available in PR #5997.
- **#6000/6001** (Skill pool broken): **Critical.** All new skills are invisible. No known fix PR yet.
- **#5995** (Messages silently dropped): **High.** Was closed, but root cause needs validation.
- **#5998** (Agent uses old plan memory): **High.** Context memory inconsistency leads to incorrect outputs after user confirmation.
- **#5994** (Security governance auto-mode triggers on every action): **High.** Breaks workflow speed and UX.
- **#5977** (Plugin HTTP routes lost after hot-reload): **Medium.** Affects plugin stability during zero-downtime reloads.
- **#5983** (`qwenpaw doctor` health endpoint missing): **Low.** User-facing CLI bug, not blocking core operations.

## 6. Feature Requests & Roadmap Signals
Several requests point to the **next expected feature set**:
- **Per-session model overrides** (PR #5992): Already in open PR, likely to land in next release.
- **Cross-channel session handoff** (Issue #5999): Highly upvoted, signals need for enterprise session persistence across platforms.
- **SSH Offline mode / Profiles** (Issue #5980): Missing in v2.0.0, likely being re-added.
- **Slash-command autocomplete** (PR #5869): Under review, close to merging.

## 7. User Feedback Summary
- **Dissatisfaction is high.** Users report that v2.0.0 broke core features (skill pool, memory, media legacy, shell sandbox enforcement). Several users explicitly describe the upgrade as a "regression" or "blocker."
- **Approval fatigue** is a major pain point: users want to disable shell/governance approval prompts (Issues #5982, #5984) but v2.0.0 does not respect UI toggles.
- **Positive signals:** The community is actively contributing fixes (4 first-time-contributor PRs today). Users want to help stabilize the project.

## 8. Backlog Watch
- **Issue #5986** (Context compression breaks tool_call pairing): **Urgent.** 4 comments, large impact, but fix PRs (#5987, #5989) are open.
- **Issue #5952** (auto-memory missing module): **Needs merge.** Fix PR #5997 is open but not yet merged.
- **Issue #5999** (Cross-channel session handoff): **No maintainer response.** This is a high-value feature request but lacks any maintainer comment or assignment.
- **PR #5869** (Slash autocomplete) and **PR #5791** (formatCompact rounding): **Under Review** for 5+ days. No maintainer update since initial review. These are low-risk UI improvements that could be merged.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-13

## Today's Overview
Project activity remains high with 44 issues and 50 PRs updated in the last 24 hours, indicating sustained development velocity. The v0.8.3 milestone is actively being driven toward completion with multiple large feature PRs (SOP approval system, memory typed classification) moving through review. One bug was closed and two PRs were merged/closed, though the broader picture shows 48 open PRs suggesting a growing review backlog. The tracker stack for v0.8.4 is already established, signaling a fast follow-up release cycle. Two new critical-severity bugs emerged today, including an OpenAI compatibility regression.

## Releases
No new releases were published today.

## Project Progress
Two pull requests were merged or closed today:
- **#8653 [CLOSED]** — "Auto-resume the most recent Code session on pane entry" (enhancement, zerocode) was closed, improving ZeroCode user experience by defaulting to the last usable session rather than a blank slate.
- **#9018 [OPEN]** — A new fix for `--config-dir` being ignored during CLI locale detection was submitted by JordanTheJet.

Major feature work advancing in open PRs:
- **SOP approval system** — Three stacked PRs (#8848, #8880, #8903) by Nillth deliver admission gates, an approval broker with quorum, and route delivery to configured channels. This is a significant control-plane feature for human-in-the-loop workflows.
- **Memory subsystem** — Multiple PRs by Nillth add typed classification (#8900), retrieval cache decorator (#8897), content scanning at write boundaries (#8984), and gated rerank stages (#8895).
- **ZeroCode** — A large fix for the slash skill flow (#8796) by ConYel and bidirectional RPC support (#8902) by RyanSquared are in review.
- **OpenAI-compatible gateway** — PR #8486 adds a full `/v1/chat/completions` endpoint, with labels suggesting it closes #8550 and relates to #8603.

## Community Hot Topics

### Most Active Issues (by comment count)
| Issue | Comments | Topic |
|-------|----------|-------|
| [#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) | 9 | Goal-mode implementation split tracker |
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | 8 | Default 32k context budget exceeded → perpetual preemptive trim |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | 6 | Slack: hydrate thread context from `conversations.replies` |
| [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) | 6 | Publish full-channel prebuilt assets alongside default |
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) | 5 | Turn-level OTel trace correlation |

**User Need Analysis:** The Slack thread history backfill (#6055) and Telegram multi-message mode (#8445) both point to a common pattern: users need conversation continuity across channel platforms without manual re-mentioning. The OTel trace correlation (#6641) reflects growing deployment scale, where operators need full observability into turn-level execution. The context budget issue (#5808) remains the highest-pain unresolved S1 bug—users can't use the default configuration without immediate context overflow.

## Bugs & Stability

### New Critical Bugs Today (P1)
1. **[#9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016)** — OpenAI tool turns fail when Chat Completions rejects `reasoning_effort` with non-`none` values. S1: workflow blocked. Affects any OpenAI-compatible `gpt-5.6-sol` model using function tools. No fix PR yet. (Audacity88)
2. **[#9019](https://github.com/zeroclaw-labs/zeroclaw/issues/9019)** — OpenAI Responses provider rejects vision-capable models before serializing image input. S1: workflow blocked. Hardcoded `vision = false` prevents all image input. No fix PR yet. (Audacity88)
3. **[#9017](https://github.com/zeroclaw-labs/zeroclaw/issues/9017)** — `--config-dir` is ignored during CLI locale detection. S2: degraded behavior. A fix PR [#9018](https://github.com/zeroclaw-labs/zeroclaw/pull/9018) was submitted simultaneously by JordanTheJet.

### Ongoing Critical Bugs
- **#5808** (32k context budget exceeded, S1) — No resolution update. Still the longest-running S1.
- **#8654** (skill-review fork panic/SIGSEGV, P1) — In-progress with accepted status. After tool-heavy turns, the background skill review fork panics and takes down the entire daemon.
- **#8642** (MCP/tool-schema unbounded RSS growth, P1) — Memory leak in agent loop, split from multi-root OOM tracker #5542.
- **#8563** (SOPs unavailable in web dashboard, S1) — Standard operating procedures configured at shared path are invisible to the agent runtime in chat sessions.

### Today's New Bug Fix PRs
- **#9018** — Fix for `--config-dir` locale detection (fixes #9017)
- **#8963** — Fix Telegram `setMyCommands` exceeding bot command limit (fixes #8950)
- **#9004** — Docs: stop linking private helpers in rustdoc

## Feature Requests & Roadmap Signals

### User-Requested Features (likely candidates for next versions)
| Feature | Issue | User Pain Point | Likely ETA |
|---------|-------|-----------------|------------|
| Slack Events API HTTP mode | [#9022](https://github.com/zeroclaw-labs/zeroclaw/issues/9022) | Scale-to-zero deploys need webhook push instead of polling | v0.8.4 candidate |
| Session rewind/fork in ZeroCode | [#9020](https://github.com/zeroclaw-labs/zeroclaw/issues/9020) | Recovery from provider/tool failures without losing context | v0.8.4 candidate (tracker #9010) |
| Cron documentation + per-task model selection | [#7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762) | Can't find cron docs or configure cheap models for periodic tasks | Unclear |
| Telegram multi-message mode | [#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445) | Telegram concatenation loses per-turn boundaries | Accepted, in-progress |
| WeChat/Line CLI bind verbs | PR [#9015](https://github.com/zeroclaw-labs/zeroclaw/pull/9015) | Parity: only Telegram had CLI bind | In review |

### Roadmap Signals
The v0.8.4 maintenance train (#8357) is already scoped with a July 31 target, suggesting the team expects v0.8.3 to ship soon. The ZeroCode consolidation tracker (#9010) and Operator UX onboarding tracker (#9009) indicate the project is investing in deployment ergonomics and operator self-service. The WASM plugin program (#7314) and zerorelay secure relay (#8358) continue as long-running architectural trackers.

## User Feedback Summary

**Pain Points (with evidence):**
1. **Context budget defaults are unusable** — Issue #5808: "Default 32k is exceeded by system prompt + tool definitions on iteration 1" with 8 comments. This affects every new user who doesn't immediately increase `max_context_tokens`.
2. **Channel features are uneven** — Multiple complaints about Telegram concatenation (#8445), Slack requiring re-mentioning (#6055), and Matrix lacking single-message streaming (#8442). Users want consistent behavior across all channels.
3. **Deployment friction** — Request for Slack Events API (#9022) and full-channel prebuilt binaries (#7952) suggest self-hosting users find current polling and channel-specific builds complex.
4. **Documentation gaps** — Missing cron docs (#7762) and unclear SOP behavior in web dashboard (#8563) frustrate users trying to use advanced features.

**Satisfaction Signals:**
- The ZeroCode pane auto-resume feature (#8653, closed today) addresses a specific UX friction point raised by users.
- Active community contributors (Nillth, JordanTheJet, Audacity88) are submitting large, well-structured feature PRs, indicating strong developer engagement.

## Backlog Watch

### Issues Needing Maintainer Attention
| Issue | Age | Priority | Risk | Status |
|-------|-----|----------|------|--------|
| [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) — Full-channel prebuilt assets | 24 days | P2 | High | Blocked, needs-maintainer-review |
| [#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) — Session TTL auto-truncation | 21 days | P2 | High | In-progress, needs-maintainer-review |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) — Track 153 lost commits | 79 days | P2 | High | In-progress (audit tracker) |
| [#7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762) — Cron docs + per-task model | 27 days | P2 | High | Accepted, no assignee |

### Stale PRs Needing Review
| PR | Author | Age | Risk | Status |
|----|--------|-----|------|--------|
| [#8353](https://github.com/zeroclaw-labs/zeroclaw/pull/8353) — Improve error messages | Super-Cabbage | 16 days | Low | Stale-candidate, needs-author-action |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) — OpenAI chat completions endpoint | REL-mame | 13 days | High | Needs-author-action (but critical integration) |
| [#8796](https://github.com/zeroclaw-labs/zeroclaw/pull/8796) — Harden ZeroCode slash flow | ConYel | 5 days | High | Needs-author-action |
| [#8984](https://github.com/zeroclaw-labs/zeroclaw/pull/8984) — Memory content scanning | Nillth | 2 days | High | Needs-author-action |

The v0.8.3 milestone tracker (#7320) reports 15 open items with five review-ready PRs, suggesting the primary bottleneck right now is review bandwidth rather than feature completion. The number of PRs labeled `needs-author-action` (6 out of the top 20) indicates contributors are awaiting responsive feedback cycles.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kky-wollu/agents-radar).*