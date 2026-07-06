# OpenClaw Ecosystem Digest 2026-07-06

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-06 13:25 UTC

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

# OpenClaw Project Digest — July 6, 2026

## Today's Overview
OpenClaw shows extremely high activity with **500 issues and 500 PRs updated in the last 24 hours**, reflecting a very active development cycle. Currently **395 issues remain open** (79%) with **264 open PRs** (52.8%), indicating a significant backlog of work being actively discussed and developed. The project has **zero new releases today**, suggesting the team is focused on resolving bugs and landing features rather than cutting new versions. A striking pattern is the prevalence of P1-rated bugs and security-related feature requests, signaling that reliability and trust are the community's primary concerns. The **clawsweeper:needs-maintainer-review** tag appears on the majority of top issues, indicating a bottleneck in maintainer capacity relative to community contribution velocity.

## Releases
No new releases were published today. The last release appears to be `v2026.6.11`, which is referenced as having a critical reentrancy bug (Issue #98416).

## Project Progress
Today saw **236 merged/closed PRs**, indicating substantial ongoing work reaching completion. Notable closed items include:

- **#100887 (CLOSED)** — `chore(cli): cover HF local app flow` — A regression test ensuring Hugging Face local-app snippet configuration works with custom OpenAI-compatible providers like llama.cpp and MLX LM.
- **#100883 (CLOSED)** — `fix(feishu): send card JSON message params as cards` — Fixes #53486 where Feishu card JSON was rendered as plain text instead of interactive cards after a regression.
- **#100828 (CLOSED)** — `fix(reply): dedupe duplicate non-streaming final replies` — Fixes #84623 where non-streaming dispatch could deliver identical reply payloads twice per turn.
- **#68936 (CLOSED)** — `Autofix: add PR review autofix pipeline + Windows daemon` — Adds an automated pipeline using Claude Agent SDK to address PR review comments, plus a Windows background daemon.

Progress continues on **agent diagnostics** (#100146), **memory-wiki stability** (#100902, #100900), **Discord WebSocket limits** (#89041), and **A2A handoff deduplication** (#97259), all still open and under active development.

## Community Hot Topics
The following issues are driving the most intense community discussion:

### Most Commented
- **#75 — Linux/Windows Clawdbot Apps** (110 comments, 81 👍) — [Issue Link](https://github.com/openclaw/openclaw/issues/75) — Requests native desktop apps for Linux and Windows, mirroring the existing macOS/iOS/Android support. This has been open since January 2026 and remains the single most commented and most upvoted open issue, indicating strong demand for cross-platform parity.
- **#9443 — Prebuilt Android APK releases** (26 comments) — [Issue Link](https://github.com/openclaw/openclaw/issues/9443) — Submitted by an AI assistant on behalf of user Lysen, requesting precompiled APK downloads rather than requiring users to build from source.
- **#22676 — Signal daemon race condition on SIGUSR1 restart** (17 comments) — [Issue Link](https://github.com/openclaw/openclaw/issues/22676) — A P1 bug causing orphaned processes and send failures when gateway restarts don't wait for signal-cli to fully shut down.

### Most Upvoted
- **#75 — Linux/Windows Clawdbot Apps** (81 👍) — Cross-platform client gap remains the top community desire.
- **#63829 — Per-agent memory-wiki vault configuration** (9 👍, 11 comments) — [Issue Link](https://github.com/openclaw/openclaw/issues/63829) — Users want isolated knowledge wikis per agent in multi-agent setups.
- **#37634 — Sandbox workspace writable isolation** (7 👍) — [Issue Link](https://github.com/openclaw/openclaw/issues/37634) — When `workspaceAccess: "none"` is set, the isolated workspace is mounted read-only, breaking tools that need write access.

### Underlying Community Needs
The top issues reveal three core themes: **platform expansion** (Linux/Windows apps, Android APKs), **security hardening** (masked secrets, trust tagging, capability-based permissions), and **reliability** (race conditions, session state corruption, regression bugs). The community is pushing hard for OpenClaw to become production-ready for enterprise and security-sensitive deployments.

## Bugs & Stability

### Critical (P0-P1)
1. **#98416 — v2026.6.11 published dist missing reentrancy guard** (P1, 17 comments, 5 👍) — [Issue Link](https://github.com/openclaw/openclaw/issues/98416) — The published release binary is missing a critical commit that fixes reply session initialization conflicts. **No fix PR linked.**
2. **#22676 — Signal daemon race condition on SIGUSR1 restart** (P1, 17 comments) — [Issue Link](https://github.com/openclaw/openclaw/issues/22676) — Orphaned processes and port conflicts during gateway restarts. **Linked to PR #100870** which adds lock release timeout on attempt teardown.
3. **#99241 — Tool outputs rendered as image attachments** (P1, 12 comments) — [Issue Link](https://github.com/openclaw/openclaw/issues/99241) — Agent cannot read tool stdout/stderr after ANSI-heavy workflows collapse output into unreadable image placeholders.
4. **#91363 — Isolated cron failures with "LLM request failed"** (P1, 9 comments, 5 👍) — [Issue Link](https://github.com/openclaw/openclaw/issues/91363) — Model requests never reach provider; isolated cron jobs consistently fail regardless of `timeoutSeconds`.
5. **#90325 — Matrix channel dispatch TypeError regression** (P1, 8 comments, 2 👍) — [Issue Link](https://github.com/openclaw/openclaw/issues/90325) — `Cannot read properties of undefined (reading 'run')` in v2026.6.1.
6. **#87711 — Empty assistant delivery on Telegram** (P1, 9 comments) — [Issue Link](https://github.com/openclaw/openclaw/issues/87711) — Footer-only "— out" usage on first turn after `/new`.
7. **#89374 — Timeout compaction reports success but session unrecoverable** (P1, 6 comments) — [Issue Link](https://github.com/openclaw/openclaw/issues/89374) — Codex channel session remains near context limit despite claimed successful compaction.
8. **#91212 — Delivery-recovery fails after gateway restart** (P1, 6 comments) — [Issue Link](https://github.com/openclaw/openclaw/issues/91212) — Recovery attempts before channel transports reconnect, silently losing messages.

### Regressions
- **#53599 — Chrome extension browser relay removed** (P1, 7 comments, 5 👍) — [Issue Link](https://github.com/openclaw/openclaw/issues/53599) — v2026.3.22 removed the remote browser relay with no cross-machine replacement, breaking managed hosting providers.
- **#92451 — v2026.6.x system prompt bloat** (P2, 6 comments) — [Issue Link](https://github.com/openclaw/openclaw/issues/92451) — ~20+ new default tools/system instructions degrade instruction following on smaller models.
- **#53486 — Feishu card JSON regression** (P2, 6 comments) — [Issue Link](https://github.com/openclaw/openclaw/issues/53486) — Fixed by PR #100883 (closed today).

### Fix PRs in Progress
- **#100870** — Lock release timeout on agent attempt teardown (addresses #22676 race condition)
- **#97259** — A2A handoff deduplication
- **#88992** — Recover stranded replies in message_tool_only mode
- **#89041** — Disable ws 8.21.0 receiver limits for Discord gateway sockets
- **#89038** — Fix qqbot reconnect pending delivery drain

## Feature Requests & Roadmap Signals

### Security & Trust (Dominant Theme)
- **#10659 — Masked Secrets** (P1, 13 comments, 4 👍) — Prevent agents from seeing raw API keys to defend against prompt injection.
- **#7707 — Memory Trust Tagging by Source** (P2, 16 comments) — Tag memory entries by trust level to prevent memory poisoning.
- **#6615 — Exec-approval denylist** (P2, 7 comments, 7 👍) — "Allow everything except X" policies for command execution.
- **#20735 — Audit log for agent memory changes** (P2, 6 comments) — Append-only log for memory fragment provenance.
- **#12678 — Capability-based permissions for skills/tools** (P2, 6 comments) — Default-deny high-risk actions at the tool layer.
- **#12219 — Skill Permission Manifest Standard** (P2, 5 comments) — Declare permissions in `skill.yaml` with user review before install.

### Platform Expansion
- **#75 — Linux/Windows Clawdbot Apps** (110 comments, 81 👍) — Likely to be a v2026.7 or v2026.8 milestone goal.
- **#9443 — Prebuilt Android APK releases** (26 comments) — Low effort, high impact; could land any release.

### Quality of Life
- **#22438 — Tiered bootstrap file loading** (P2, 17 comments) — Progressive context control to save tokens on large workspaces.
- **#14785 — Reduce tool schema token overhead** (P2, 8 comments) — ~3,500 tokens per session from full JSON schemas.
- **#13700 — Session snapshots** (P2, 6 comments) — Save/load context checkpoints for A/B testing and rollback.
- **#16670 — Onboarding Wizard memory setup** (P2, 8 comments) — Make embedding provider configuration a mandatory setup step.
- **#10118 — TUI multi-line input** (P3, 5 comments, 4 👍) — Shift+Enter for newline support.

### Likely Next Version Candidates
Features with linked PRs or clear fix shapes: **#22438** (tiered bootstrap), **#16670** (onboarding memory), **#14785** (token overhead reduction), and security features **#6615** (denylist) and **#10659** (masked secrets) could land in v2026.7 given community pressure. The **per-agent memory-wiki vault** (#63829) has significant upvotes and PR discussion.

## User Feedback Summary

### Pain Points
1. **Missing cross-platform support** — Linux and Windows users cannot run the full app experience, and Android users must build from source (#75, #9443).
2. **Reliability under load** — Long sessions degrade with tool parameter loss (#53408), timeouts that don't recover (#89374), and message loss after restarts (#91212).
3. **Security concerns** — Users are acutely worried about prompt injection, credential leakage, and untrusted skill installations, driving multiple feature requests for permission systems and audit trails.
4. **Onboarding friction** — New users frequently miss memory configuration because the setup wizard doesn't mention it (#16670), leading to a "bot that doesn't remember anything" experience.
5. **Recent regressions** — Several users report downgrading or holding back updates due to the v2026.6.x system prompt bloat (#92451), Matrix channel breakage (#90325), and Chrome relay removal (#53599).

### Satisfaction Signals
- High engagement with PRs (236 merged today) shows active development cycle.
- Community members contributing substantial feature requests with detailed use cases (e.g., #12602 Slack Block Kit, #13583 hard enforcement gates).
- Multiple AI-assisted issue submissions (e.g., #9443 by QING assistant) suggest the tool is being used—and its gaps felt—by power users.

## Backlog Watch

### Critical Items Needing Maintainer Attention
These issues have been open long-term with no fix PRs and carry the `clawsweeper:needs-maintainer-review` or `clawsweeper:needs-product-decision` tags:

1. **#75 — Linux/Windows Clawdbot Apps** (since Jan 2026, 110 comments) — The #1 community request with no visible PR activity. A product decision is needed on platform priority.
2. **#9443 — Prebuilt Android APK releases** (since Feb 2026, 26 comments) — Simple infrastructure change, yet unresolved for 5 months.
3. **#10659 — Masked Secrets** (since Feb 2026, 13 comments, P1) — A critical security feature with clear design and community support, pending maintainer review for 5 months.
4. **#7707 — Memory Trust Tagging** (since Feb 2026, 16 comments) — Important for security posture, awaiting product decision.
5. **#13616 — Backup/restore utility** (since Feb 2026, 8 comments) — No standardized disaster recovery workflow exists.
6. **#13597 — Comprehensive AWS deployment guide** (since Feb 2026, 6 comments) — Documentation gap blocking enterprise adoption.

### Stale High-Impact Issues
- **#87711 — Telegram empty delivery** (P1, since May 2026, `clawsweeper:needs-live-repro`) — Active reproduction needed.
- **#89374 — Timeout compaction failure** (P1, since June 2026) — Session recovery corruption without reproducer.
- **#92451 — System prompt bloat** (P2, since June 2026) — Labeled "stale" despite being a regression affecting smaller models.

### Overall Assessment
OpenClaw is experiencing a **contribution surge outpacing maintainer capacity**. While PR throughput is high (236 merged today), hundreds of open issues with detailed community designs and request-for-comment tags are stuck in `needs-maintainer-review` limbo. The project has strong momentum but risks community frustration if the gap between issue velocity and review capacity isn't addressed. The lack of a new release today, despite many closed PRs, suggests either pending integration testing or a deliberate cadence (e.g., weekly/biweekly releases). Security hardening and cross-platform support are the two dominant axes of community demand heading into Q3 2026.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Open-Source Ecosystem
**Date**: 2026-07-06

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is experiencing a **phase of intense maturation and divergence**. Projects span from full-featured desktop agent systems (OpenClaw, Hermes Agent) to lightweight embedded frameworks (NanoBot, TinyClaw), with a clear split emerging between **general-purpose personal assistants** and **specialized agent frameworks**. The ecosystem is characterized by high community contribution velocity (500+ daily issue/PR updates across major projects), but **maintainer bandwidth is the critical bottleneck**—multiple projects show healthy contribution pipelines stalled behind `needs-maintainer-review` queues. Security hardening, cross-platform expansion, and agent-to-agent interoperability are the three dominant cross-cutting themes, reflecting user demand for **production-ready, enterprise-grade autonomous agents** rather than experimental prototypes.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | Open Issues | PRs Updated (24h) | Open PRs | Release Today | Health Score* | Primary Activity |
|---------|---------------------|-------------|-------------------|----------|---------------|---------------|------------------|
| **OpenClaw** | 500 | 395 (79%) | 500 | 264 (52.8%) | None | ⚠️ Busy/Strained | 236 merged PRs; bug/security fixes dominate |
| **NanoBot** | 47 | ~780 | 50 | 496 (high) | None | ⚠️ Heavy Audit | 35-item security audit; 4 merged fixes |
| **Hermes Agent** | 50 | 43 active | 50 | 37 open | None | ✅ Healthy | 13 merged fixes; active feature work |
| **ZeroClaw** | 27 | ~500 | 50 | ~200 | None | ⚠️ Rapid Build | 8 merged; 5 large-tracker features in flight |
| **CoPaw** | 31 | ~400 | 45 | ~150 | **v1.1.12.post3** | ✅ Healthy | 24 merged; regression test campaign |
| **LobsterAI** | 0 | 0 | 12 | 1 | None | ✅ Stable/Internal | 12 merged; xAI/Grok OAuth, heartbeat cost control |
| **IronClaw** | 19 | 15 active | 40 | 29 open | None | ✅ High Velocity | 11 merged; 3 major refactors (Postgres, Slack, No-borking) |
| **PicoClaw** | 3 | ~20 | 6 | ~12 | None | ✅ Productive | 1 merged; prompt caching fix, tool safety |
| **Moltis** | 0 | 0 | 5 | 2 | None | ✅ Consolidating | 3 merged; Docker fix, WhatsApp upgrade |
| **NullClaw** | 0 | 0 | 1 | 1 | None | 🟢 Maintenance | Dependency bump (21 days stale) |
| **NanoClaw** | 0 | ~15 | 4 | 7 | None | ✅ Moderate | Docs sweep; no merges today |
| **TinyClaw** | 0 | — | 0 | — | None | 🟢 Inactive | No activity |
| **ZeptoClaw** | 0 | — | 0 | — | None | 🟢 Inactive | No activity |

*Health Score: ✅ Active/Responsive | ⚠️ Busy with strain signals | 🟢 Low activity/maintenance

**Key observations:**
- **OpenClaw** dominates raw volume (500/500) but carries a 79% open-issue rate, signaling maintainer capacity is the binding constraint.
- **NanoBot**`s 496 open PRs (highest in ecosystem) are inflated by the single-audit burst, but the security findings are substantive.
- **CoPaw** is the only project to ship a release today (patch fix for import regression), demonstrating a mature release discipline.
- **ZeroClaw** and **IronClaw** show the highest **feature velocity** with multiple overlapping large-scope initiatives.

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Largest community and contribution base**: 500 daily issue/PR updates—5-10x the next most active project. This creates a powerful network effect for bug discovery and feature requests.
- **Mature architecture**: The `OpenClaw` reference implementation has the deepest integration surface (Feishu, Discord, Telegram, Matrix, Hugging Face, etc.) and the most sophisticated agent diagnostics (#100146) and memory-wiki systems (#100902).
- **Enterprise signals**: Security features (masked secrets, trust tagging, capability-based permissions) and platform requests (Linux/Windows apps) indicate the project is being evaluated for production deployment, not just personal use.
- **Release discipline**: Despite no release today, the `v2026.6.11` versioning suggests a regular cadence—more formal than PicoClaw or NullClaw.

### Technical Approach Differences
- OpenClaw uses a **`clawsweeper` tool for community triage** (visible in issue tags), a more structured approach than NanoBot's ad-hoc audit model or CoPaw's per-release bug tracker.
- The project emphasizes **memory-wiki per-agent configuration** (#63829), a more granular memory architecture than NanoBot's global memory store or Hermes Agent's session-based context.

### Community Size Comparison
| Metric | OpenClaw | Next Closest (ZeroClaw) | Ratio |
|--------|----------|------------------------|-------|
| Daily Issue Updates | 500 | 27 | **18.5x** |
| Daily PR Updates | 500 | 50 | **10x** |
| Open Issues | 395 | ~500 | Comparable |
| Open PRs | 264 | ~200 | 1.3x |
| Maintainer Response | Strained (79% open) | Strained but active | Similar bottleneck |

**Verdict**: OpenClaw is the **community leader by raw activity volume**, but its advantage is in breadth rather than depth. ZeroClaw and IronClaw are matching or exceeding OpenClaw in architectural ambition (SOP authoring, Postgres refactors, OAuth remodels). OpenClaw's risk is that its **maintainer bottleneck** (evidenced by the `needs-maintainer-review` tag dominating top issues) could erode contributor morale if unaddressed.

---

## 4. Shared Technical Focus Areas

### Security & Trust Governance
| Requirement | Projects Expressing Need | Specifics |
|-------------|-------------------------|-----------|
| Masked secrets/capability-based permissions | **OpenClaw** (#10659, #12678), **NanoBot** (#4803 plaintext keys), **Hermes Agent** (#59612 silent blocking) | Inject defense against prompt injection |
| Memory trust tagging / provenance | **OpenClaw** (#7707), **ZeroClaw** (#8251 relationship memory) | Prevent memory poisoning |
| Exec approval / least-privilege policies | **OpenClaw** (#6615 denylist), **IronClaw** (#5670 Slack least-privilege scopes) | "Allow everything except X" |
| Audit logs / runtime policy | **OpenClaw** (#20735), **ZeroClaw** (#8462 OTel policy) | Append-only memory change records |

### Cross-Platform & Client Expansion
| Requirement | Projects | Notes |
|-------------|----------|-------|
| Linux/Windows native apps | **OpenClaw** (#75, 110 comments) | #1 community request |
| Mobile WebUI fixes | **CoPaw** (#5787 truncation), **IronClaw** (#5554 overflow) | Broken mobile experiences |
| Android APK / Termux | **OpenClaw** (#9443), **ZeroClaw** (#7911) | Source-build friction |
| Pre-built binaries | **OpenClaw** (#9443), **NullClaw** (Docker base image bump) | Dependency management |

### Agent-to-Agent Interoperability
| Requirement | Projects | Signal |
|-------------|----------|--------|
| A2A protocol support | **OpenClaw** (#97259 handoff dedup), **NanoBot** (PR #216, 5 months stale) | Emerging standard |
| External agent delegation | **NanoBot** (#3436 "call external agent") | User demand for federated agents |
| MCP integration fixes | **LobsterAI** (#2277 stale config), **Moltis** (#1120 OAuth bug), **ZeroClaw** (#8731 zombie MCP) | MCP is the de facto tool protocol |

### Streaming & Session Reliability
| Requirement | Projects | Specifics |
|-------------|----------|-----------|
| Context window management / token overhead | **OpenClaw** (#14785, #22438), **Hermes Agent** (#57275 "always exceeds"), **ZeroClaw** (#8310 Schema V4) | System prompt bloat, tool schema overhead |
| Session recovery / compaction | **OpenClaw** (#89374 timeout compaction), **Hermes Agent** (#59594 network recovery) | Unreliable long sessions |
| Streaming fixes | **CoPaw** (#5725 browser lag), **Moltis** (#1113 Telegram fix) | Rendering performance |

### AI Provider Diversity
| Requirement | Projects | Notes |
|-------------|----------|-------|
| xAI/Grok support | **LobsterAI** (#2276 OAuth login) | First-class Grok integration |
| Google Gemini fixes | **CoPaw** (#5782 embedding broken) | Silent fallback to keyword search |
| Ollama hallucination handling | **Hermes Agent** (#59601 hallucinated JSON) | Tool-call parsing bugs |
| OpenAI-compatible adapter | **ZeroClaw** (#8603) | Interop with Open WebUI/LobeChat |

---

## 5. Differentiation Analysis

### Feature Focus

| Project | Primary Use Case | Key Differentiator | Target User |
|---------|-----------------|-------------------|-------------|
| **OpenClaw** | General-purpose personal AI assistant | Widest channel integration; memory-wiki architecture | Power users, developers, early enterprise |
| **ZeroClaw** | Workflow automation (SOPs + Goals) | Deterministic SOP authoring with visual editor | Operations teams, enterprise automation |
| **IronClaw** | High-reliability agent runtime | "No-borking-failures" release train; Postgres-backed persistence | Production deployments |
| **NanoBot** | Lightweight agent gateway | Low overhead; MCP-first architecture | Developers embedding agents in apps |
| **Hermes Agent** | Desktop agent with TUI/CLI | First-class desktop experience; multi-platform | Individuals, small teams |
| **CoPaw** | Messaging-channel AI agent | Strongest IM platform support (Feishu, WeChat, QQ, DingTalk) | Chinese market, enterprise team bots |
| **LobsterAI** | Enterprise/workplace assistant (Youdao) | Integrated email, calendar, MCP; internal-focused | Youdao ecosystem, enterprise |
| **PicoClaw** | Lightweight Anthropic provider | Anthropic prompt caching; simple codebase | Claude power users |
| **Moltis** | Multi-channel agent (Telegram, WhatsApp) | Docker-optimized; focused integration scope | Container-first users |

### Technical Architecture Differences

- **Memory Models**: OpenClaw advocates **per-agent memory-wiki vaults** (isolated knowledge stores); CoPaw uses a global memory store; ZeroClaw is introducing **relationship memory** with SOP bindings.
- **Persistence**: IronClaw is moving to **Postgres-backed** session storage (HST stack); OpenClaw and Hermes Agent use filesystem-based session files; ZeroClaw is schema-refactoring toward V4.
- **Agent Loop Design**: ZeroClaw's **Goal mode** introduces a separate execution track for autonomous goal pursuit vs. manual chat; OpenClaw's `A2A handoff` treats agent interaction as a specific operation; IronClaw's **no-borking-failures** focuses on run-retry transparency.
- **Protocol Stack**: NanoBot and ZeroClaw emphasize **MCP (Model Context Protocol)**; OpenClaw and IronClaw lean toward **open standards** (A2A); LobsterAI bundles proprietary provider integrations.

### Community & Governance

- **OpenClaw** is the **de facto community standard** with the largest contributor base, but is showing **maintainer strain** (79% open issues).
- **CoPaw** has the **most organized release process** (1.1.x stable line + v2.0.0 pre-release tracker).
- **LobsterAI** appears **internal/corporate-driven** (NetEase Youdao) with zero open issues—likely controlled testing.
- **NanoBot** has an **active but chaotic** contributor ecosystem (496 open PRs); the audit-driven approach improves quality but risks overwhelming reviewers.

---

## 6. Community Momentum & Maturity

### Activity Tiers

**Tier 1: Hyperactive / Rapid Iteration** (>30 daily PRs updated)
- **OpenClaw** (500 PRs) — Community volume leader; risk of maintainer fatigue
- **ZeroClaw** (50 PRs) — Highest architectural ambition; 5 overlapping large-trackers
- **NanoBot** (50 PRs) — Security audit injection; quality hardening phase
- **Hermes Agent** (50 PRs) — Sustained feature/bug balance; healthy maintainer response
- **IronClaw** (40 PRs) — Refactoring core architecture; high engineering investment
- **CoPaw** (45 PRs) — Stable release line + v2.0.0 pre-release; regression test campaign

**Tier 2: Moderate / Feature-Specific** (5-15 PRs daily)
- **LobsterAI** (12 PRs) — Internal development burst; zero community issues
- **PicoClaw** (6 PRs) — Focused bug fixes (prompt caching, tool safety)
- **Moltis** (5 PRs) — Consolidating; Docker/WhatsApp improvements

**Tier 3: Low Activity / Maintenance** (<5 PRs daily)
- **NanoClaw** (4 PRs) — Documentation sweep; no feature work
- **NullClaw** (1 PR) — Single dependency bump; potential dormant phase
- **TinyClaw, ZeptoClaw** (0 PRs) — Inactive; no community engagement

### Maturity Signals

| Aspect | Mature | Maturing | Early |
|--------|--------|----------|-------|
| Release cadence | CoPaw (patch releases), OpenClaw (v2026.x) | ZeroClaw, Hermes Agent | TinyClaw, ZeptoClaw (no activity) |
| Bug tracker rigor | CoPaw (v2.0.0 pre-release tracker) | OpenClaw (clawsweeper process) | NanoBot (open PRs > issues) |
| Security posture | IronClaw (least-privilege OAuth), OpenClaw (masked secrets RFCs) | NanoBot (audit-driven) | PicoClaw, NullClaw (no recent audits) |
| Cross-platform | CoPaw (multiple IM channels), Hermes Agent (Desktop + CLI + TUI) | OpenClaw (seeking Linux/Windows) | TinyClaw, ZeptoClaw (single-platform) |

---

## 7. Trend Signals

### From Community Feedback → Industry Trends

**1. "Deterministic Workflows Are the Killer App"**
Multiple projects (ZeroClaw's SOP authoring, IronClaw's no-borking-failures, OpenClaw's A2A handoff) are investing in **structured, auditable agent executions**—not just chat. Users want agents that follow business processes, not just free-form conversation. **Implication**: Agent frameworks must integrate workflow engines (SOPs, DAGs, BPMN) to compete for enterprise adoption.

**2. "Security Is the Onboarding Gatekeeper"**
The #1 complaint across projects is **silent failures**—agents that don't report when they're blocked, tools that return success without writing, configs that silently disable features. The #1 feature request is **transparent security**: masked secrets, permission manifests, audit logs. **Implication**: Trust architecture (capability-based permissions, provenance tracking) is becoming a **competitive differentiator**, not just a nice-to-have.

**3. "Provider Diversity Is a Survival Requirement"**
Every major project is working on multi-provider support: xAI/Grok (LobsterAI), Google Gemini (CoPaw), Bedrock (ZeroClaw), Ollama (Hermes Agent). **Implication**: Single-provider agent frameworks (e.g., Claude-only) face obsolescence. The ecosystem is standardizing around **open agent protocols** (MCP, A2A) rather than provider APIs.

**4. "The Cost Crisis Is Real"**
Token overhead (3,500 tokens/session from tool schemas), unnecessary model calls (heartbeat cost-control in LobsterAI, context bloat in Hermes Agent), and prompt caching (PicoClaw's Anthropic fix) are **direct user pain points** with economic consequences. **Implication**: Agent optimization (cache, context management, selective model dispatch) is a **product requirement**, not just an engineering concern.

**5. "Agent-to-Agent Is the Next Frontier"**
NanoBot's "call external agent" request, OpenClaw's A2A handoff deduplication, and ZeroClaw's SOP-based multi-agent coordination all point to **federated agent networks**. **Implication**: The next leap in capability will come from agents composing each other, not individual model improvements. Interoperability standards (A2A, MCP) are the infrastructure for this.

**6. "Mobile Is a First-Class Pain Point"**
Despite being AI agents designed for always-on use, mobile experiences are **universally broken**—truncation, white screens, touch issues (CoPaw, IronClaw, OpenClaw). **Implication**: Mobile parity is the **lowest-hanging fruit for user satisfaction**; the first project to ship a polished mobile experience wins the casual user segment.

### Value for AI Agent Developers

| Trend | Actionable Insight |
|-------|-------------------|
| Deterministic workflows | Plan for SOP/workflow integration, not just conversational agents |
| Security transparency | Build audit logs and capability manifests from day one |
| Provider diversity | Abstract provider APIs behind MCP/A2A standards; never hardcode |
| Cost optimization | Pre-cache system prompts; implement selective dispatch; profile token usage |
| Agent interoperability | Support A2A protocol; design for agent composition, not isolation |
| Mobile experience | Responsive WebUI is table-stakes; native apps unlock power users |

---

## Summary Assessment

The personal AI assistant ecosystem is **healthier and more competitive than at any prior point**. OpenClaw retains the largest community but faces a **maintainer bottleneck crisis** that could fracture contributor trust. ZeroClaw and IronClaw are the most **architecturally ambitious**, investing in deterministic workflows and production-grade persistence. CoPaw is the most **operationally disciplined** with a mature release process. The convergence around **security transparency, cross-platform support, and agent-to-agent protocols** signals that the ecosystem is preparing for **enterprise adoption**—but must first solve the **onboarding friction** and **silent failure** problems that currently frustrate even power users. The next 90 days will likely see a **release wave** as the current feature stacks (Goal mode, SOP authoring, Pattern architecture, HST Postgres) mature and ship, setting the stage for a more standardized agent platform layer in early 2027.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for July 6, 2026.

---

## NanoBot Project Digest — 2026-07-06

### 1. Today's Overview

Project activity is **exceptionally high**, driven by the publication of a major security and code quality audit. While the volume of new issues (47 updated) and open Pull Requests (496) is massive, this is largely the result of a single contributor, **hamb1y**, who filed 15 detailed bug, security, and refactoring reports today. This influx, combined with a significant number of stale or long-standing open PRs, suggests a **healthy but strained** maintenance situation. The team appears to be responsive, with several of today’s new bugs already receiving targeted fix PRs from another contributor, **axelray-dev**. The project is clearly in a phase of intensive quality hardening.

### 2. Releases

**No new releases today.** The last release date is not available from this data snapshot.

### 3. Project Progress

Despite the high volume of open PRs, **4 items were merged or closed today**, indicating ongoing progress against critical issues:

- **[PR #4770] fix(gateway): resolve config path for state refresh** (Merged): Fixed a CI regression related to gateway state PID refresh on Windows, ensuring stability after `/restart` commands.
- **[PR #4547] fix(gateway): self-heal state file PID on server startup** (Merged): Resolved Issue #4511, fixing a Windows-specific bug where the PID in the gateway state file was not updated after a process restart.
- **[PR #4654] fix(cli): print response text when streaming fails in interactive mode** (Merged): Addressed a bug where the final agent response was silently dropped in interactive CLI mode when streaming failed, improving user feedback.
- **[PR #4017] fix(providers): parse text-format tool_calls in openai-compat responses** (Merged): Closed a long-standing issue (#4061) where tool calls formatted as text by some providers were not being parsed, blocking tool execution.

### 4. Community Hot Topics

The most active discussions reflect deep concerns about stability, security, and the user experience on specific platforms.

- **[Issue #4815] Audit summary: 35 security / bug / refactor findings** (New, 0 comments): This is the most significant post of the day. It is a comprehensive audit report that is generating all the sub-issues listed below. It indicates a community member invested significant effort in improving the codebase, signaling a demand for higher reliability and security standards.
- **[Issue #4061] Bug: OpenAI-compatible text-format tool calls not parsed** (Closed, 6 comments): This was a major pain point affecting users of several provider backends. The community engagement (6 comments) and eventual fix (PR #4017) highlight the importance of robust provider interoperability.
- **[Issue #4511] [bug] Windows `--background` gateway crash on restart** (Closed, 4 comments): A Windows-specific stability issue that caused confusion and required manual intervention (deleting orphaned PID files). Its resolution is a clear win for Windows users.
- **[Issue #4544] [bug] Windows exec: inconsistent shell semantics (cmd vs PowerShell)** (Closed, 3 comments): This reflects the difficulty of cross-platform agent development. Users want a single, predictable shell environment (likely PowerShell) for writing commands that work on Windows.
- **[Issue #4637] [bug] Telegram long message splits -- trunks prior to the final trunk cannot render** (Open, 2 comments): A persistent UX bug causing multiline markdown messages to be displayed incorrectly on Telegram, affecting user perception of agent output quality.
- **[Issue #3436] [enhancement] Call external agent** (Open, 3 comments, since Apr 25): A user is requesting the ability to delegate work to other AI agent frameworks like OpenCode or Codex. This suggests a desire for Nanobot to become part of a larger, interoperable agent ecosystem.

### 5. Bugs & Stability

Today saw a flood of new bug reports, mostly from the same code audit. The severity is **high**, with several classified as security or core stability issues. **Fortunately, immediate fix PRs are already attached to many.**

- **Critical/Security:**
    - **Plaintext API keys** ([Issue #4803]): API keys are stored in plaintext in `config.json`. This is a **significant security risk** on multi-user systems.
    - **Full filesystem exposed by default** ([Issue #4796]): The `restrict_to_workspace` setting defaults to `False`, allowing the agent to read/write anywhere. **Immediate action recommended** to change the default.
    - **No resource limits on subprocesses** ([Issue #4797]): Agent commands can spawn fork bombs or runaway processes with no CPU/memory limits, risking system stability.

- **High Priority (with Fix PRs):**
    - **Leaked `CancelledError` swallowed** ([Issue #4804], Fix PR [#4814]): Unhandled exceptions from MCP integrations can silently derail the agent loop, leading to unpredictable behavior.
    - **Streaming LLM calls bypass timeout** ([Issue #4795]): Streaming calls can run indefinitely with no wall-clock timeout, potentially hanging the agent.
    - **Concurrent file writes cause corruption** ([Issue #4798]): Multiple sessions writing to the same file simultaneously can lead to data loss.
    - **`BaseException` catch in tool execution** (Fix PR [#4816]): The agent is dangerously catching `SystemExit` and `KeyboardInterrupt`, preventing graceful shutdowns.
    - **Multimodal message `.strip()` crash** ([Issue #4800], Fix PR [#4813]): Sending a message with images or files would crash the agent loop.

- **Medium Priority (with Fix PRs):**
    - **Spurious 128-token budget** ([Issue #4802]): Setting the context window to 0 (disable) still enforces a 128-token budget, a confusing behavior.
    - **Malformed message `KeyError`** ([Issue #4801], Fix PR [#4812]): A single corrupted session entry can crash the memory system.
    - **Silent tool validation error** ([Issue #4805], Fix PR [#4811]): Errors during tool preparation are silently swallowed, leading to confusing failures.

### 6. Feature Requests & Roadmap Signals

- **Agent Interoperability ([Issue #3436]):** The demand to "Call external agent" is a strong roadmap signal. Users want Nanobot to act as a coordinator, not just a standalone agent. This could lead to integration with the A2A protocol (see PR #216) or other agent frameworks in a future release.
- **Improved Communication Channels:**
    - **Lark/Feishu Session Splitting ([Issue #4619]):** Users want a visual system message ("New session started") using Feishu's `msg_type: system` API. This is a small but high-impact UX improvement.
    - **Telegram Rendering ([Issue #4637]):** Fixing long-message truncation is a priority for improving the Telegram user experience.
- **WebUI Enhancements:**
    - **Document Attachments ([PR #4771]):** A new PR adds support for uploading document files (PDFs, etc.) in the WebUI, signaling a move beyond just image attachments.
- **Ecosystem Growth:**
    - **A2A Protocol ([PR #216]):** This long-standing, open PR for the A2A agent-to-agent protocol suggests a strategic direction towards a federated agent network.

### 7. User Feedback Summary

- **Pain Point (Cross-platform):** Users on Windows are experiencing the most friction, specifically with inconsistent shell execution (Issue #4544) and unreliable background process management (Issue #4511).
- **Pain Point (UX):** The Telegram rendering bug (Issue #4637) is directly affecting how users perceive agent responses, degrading the experience on a popular platform.
- **Satisfaction (Responsiveness):** The rapid creation of fix PRs (by axelray-dev) in response to the audit findings shows an active and responsive core team, which is a positive signal for the community.
- **Satisfaction (Interoperability):** The closure of Issue #4061 (text-format tool calls) resolves a major frustration for users relying on non-OpenAI providers, improving the project's value as a universal agent gateway.

### 8. Backlog Watch

Several important and long-standing Pull Requests remain open, requiring maintainer attention. Stale PRs can lead to conflicts and community frustration.

- **[PR #216] feat(a2a): Add A2A Protocol support** (Open since Feb 6, 2026): A massive feature for cross-agent communication. It has conflicts and has been dormant for 5 months. A decision on its future (merge, revise, or close) is overdue.
- **[PR #364] feat(cron): Comprehensive Cron Service Upgrade** (Open since Feb 8, 2026): Another major feature (hot reload, heartbeat) that has been in limbo for 5 months with conflicts. This is a highly requested feature for production deployments.
- **[PR #4145] fix: resolve #3958 — Weather Skill** (Open since Jun 1, 2026): An example skill PR that has been open for over a month. While not critical, it sets a precedent for community contributions of skills.
- **[Issue #3436] [enhancement] Call external agent** (Open since Apr 25, 2026): This is a high-value feature request that is not being addressed. It has garnered community interest (3 comments) and no maintainer response.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-06

## Today's Overview

Hermes Agent shows **very high activity** today with 50 Issues and 50 PRs updated in the last 24 hours, indicating a healthy, fast-moving open-source project. Of the 50 updated Issues, 43 remain open/active and 7 were closed; of the 50 updated PRs, 37 remain open and 13 were merged/closed. No new releases were published today. The project is seeing sustained community engagement with diverse contributions spanning bug fixes, feature requests, and platform support improvements across the Desktop, Gateway, CLI, and TUI components. The maintainer team appears responsive, with multiple PRs opened and merged on the same day their associated bugs were reported.

## Releases

No new releases were published today. The last known version is v0.17.0 (2026-06-19).

## Project Progress

Thirteen PRs were merged or closed today, reflecting active maintenance and bug-fixing velocity:

**Merged Bug Fixes:**
- [#59601](https://github.com/NousResearch/hermes-agent/pull/59601) — **fix(agent): strip hallucinated tool-call JSON from assistant content before delivery** — Addresses Ollama models emitting JSON tool-call envelopes as plain text instead of native `tool_calls` arrays.
- [#59242](https://github.com/NousResearch/hermes-agent/pull/59242) — **fix(cron): clean up HERMES_CRON_SESSION env var after each job run** — Prevents cron-mode approval behavior leaking into interactive gateway sessions.
- [#59396](https://github.com/NousResearch/hermes-agent/pull/59396) — **fix(cli): guard _display_resumed_history against empty messages** — Fixes crash when resuming sessions containing empty messages.
- [#59558](https://github.com/NousResearch/hermes-agent/pull/59558) — **fix(agent): support CIDR notation in NO_PROXY for custom provider proxy bypass** — Fixes proxy routing failures for private CIDR networks.
- [#59569](https://github.com/NousResearch/hermes-agent/pull/59569) — **fix(tools): unescape \\n in replacement when escape_normalized strategy matched** — Fixes string replacement serialization bug.
- [#59620](https://github.com/NousResearch/hermes-agent/pull/59620) — **fix(daytona): forward env_passthrough variables to sandbox process.exec()** — Fixes environment variable forwarding to remote sandboxes.
- [#59437](https://github.com/NousResearch/hermes-agent/issues/59437) — **Background memory/skill review crash** — CLOSED as needs-repro after user report of `'list' object has no attribute 'get'` crashes in self-improvement review loop.

**Notable Feature Work (still open):**
- [#59638](https://github.com/NousResearch/hermes-agent/pull/59638) — **feat(agent): degenerate-loop + LARP guards** — Adds model-agnostic protection against repetition loops and LARP (Life-like Autonomous Role-Play) failure modes.
- [#58553](https://github.com/NousResearch/hermes-agent/pull/58553) — **feat(whatsapp): one-command guided setup wizard** — Adds `hermes whatsapp setup` guided configuration.
- [#58011](https://github.com/NousResearch/hermes-agent/pull/58011) — **fix(skill-manager): consult known-false-positives.json before blocking** — Addresses false-positive security alerts blocking legitimate skill edits.
- [#59632](https://github.com/NousResearch/hermes-agent/pull/59632) — **feat(cli): add `hermes config remove <key>` subcommand** — Users can now cleanly remove configuration keys instead of setting them to empty strings.

## Community Hot Topics

**Most Commented Issues:**

1. **[#3725](https://github.com/NousResearch/hermes-agent/issues/3725) — Rocket Chat support** (14 comments, 13 👍) — Long-standing feature request (since March 2026) asking for Rocket Chat as a message channel. High community interest but no traction from maintainers yet.

2. **[#44456](https://github.com/NousResearch/hermes-agent/issues/44456) — Desktop /compress returns error** (9 comments, 1 👍) — Active debugging discussion around why the built-in slash command `/compress` fails with misleading error messages. A fix PR [#44462](https://github.com/NousResearch/hermes-agent/pull/44462) is open but awaiting review/merge.

3. **[#38061](https://github.com/NousResearch/hermes-agent/issues/38061) — Can't connect to Remote Gateway via Tailscale** (7 comments) — User reports test connection succeeds but actual connection fails when using Tailscale for remote gateway access. Diagnostic assistance ongoing.

4. **[#36970](https://github.com/NousResearch/hermes-agent/issues/36970) — Add first-class remote-client onboarding** (6 comments, 3 👍) — Feature request for Desktop app to connect to existing Hermes backend without bootstrapping a second local install.

5. **[#53004](https://github.com/NousResearch/hermes-agent/issues/53004) — Projects paradigm broke folder-to-session flow** (6 comments) — User reports regression from the "first-class projects" PR that broke sidebar workflow for selecting folders and starting sessions.

**Underlying Needs:**
- Users are actively requesting **more messaging platform integrations** (Rocket Chat, WhatsApp wizard PR is promising)
- **Desktop stability and workflow consistency** is a recurring theme — users want the Desktop app to be a first-class citizen with proper slash command handling and remote connection support
- **Context management and session persistence** concerns surface repeatedly

## Bugs & Stability

**Critical/High Priority (P1-P2):**

| Issue | Severity | Description | Fix Exists? |
|-------|----------|-------------|-------------|
| [#59607](https://github.com/NousResearch/hermes-agent/issues/59607) | **P1** | Gateway restart re-triggers previously confirmed shutdown/reboot command after host reboot — a dangerous resume/replay safety gap | No |
| [#56004](https://github.com/NousResearch/hermes-agent/issues/56004) | P2 | Qwen3.6/vLLM: prior-turn reasoning (preserve_thinking) stripped on replay — multi-turn thinking context lost | No |
| [#56704](https://github.com/NousResearch/hermes-agent/issues/56704) | P2 | computer_use capture crashes on Linux/WSL: `int(None)` on pid/window_id | No |
| [#57275](https://github.com/NousResearch/hermes-agent/issues/57275) | P2 | Always exceeds context limits, crashes models regardless of context size (32k-256k tested) | No |
| [#59594](https://github.com/NousResearch/hermes-agent/issues/59594) | P2 | Gateway process fails to recover from network interruption — CLOSE_WAIT sockets block recovery | No |
| [#59568](https://github.com/NousResearch/hermes-agent/issues/59568) | P2 | MCP reconnect retries counter never resets after successful reconnect — gives up after 5 drops | No |
| [#59612](https://github.com/NousResearch/hermes-agent/issues/59612) | P2 | AGENTS.md threat-scanner silently blocks file injection without user notification | No |
| [#59610](https://github.com/NousResearch/hermes-agent/pull/59610) | P2 | **fix(tools): block patch on partial-view files to prevent silent data loss** — PR open addressing critical data-loss bug where patch_tool returns success even when writes are skipped | **PR open** |
| [#59601](https://github.com/NousResearch/hermes-agent/pull/59601) | P2 | Hallucinated tool-call JSON from Ollama — **already merged** | ✅ Fixed |

**Medium Priority (P3):**
- [#56835](https://github.com/NousResearch/hermes-agent/issues/56835) — Desktop ERR_NETWORK_IO_SUSPENDED crash after network resume from sleep
- [#59499](https://github.com/NousResearch/hermes-agent/issues/59499) — Kanban dispatcher ignores max_in_progress_per_profile, spawns all tasks concurrently
- [#59626](https://github.com/NousResearch/hermes-agent/issues/59626) — dashboard --status falsely reports running servers from wrapper lifecycle commands

**Notable:** The bug reports today show a pattern of **session state and recovery issues** — context limits exceeded, network interruptions not recoverable, session replay safety gaps. These suggest ongoing challenges with long-running agent sessions.

## Feature Requests & Roadmap Signals

**Most Requested Features Today:**
- [#59070](https://github.com/NousResearch/hermes-agent/issues/59070) — Expose `auxiliary_client` as one-shot delegate_completion tool (P3) — Users want lightweight text-transform without full agent-loop overhead. **Likely near-term fit.**
- [#58937](https://github.com/NousResearch/hermes-agent/issues/58937) — Bump Nix venv from python312 to python313 (P2) — Straightforward packaging update, likely in next release.
- [#59632](https://github.com/NousResearch/hermes-agent/pull/59632) — `hermes config remove` subcommand — Already has a PR open; strong candidate for next release.
- [#58553](https://github.com/NousResearch/hermes-agent/pull/58553) — WhatsApp one-command setup wizard — PR open and progressing.
- [#59638](https://github.com/NousResearch/hermes-agent/pull/59638) — Degenerate-loop + LARP guards — Agent reliability improvement with high potential for inclusion.

**Prediction for v0.18.0:** The WhatsApp setup wizard, config remove command, and degenerate-loop guards are the most likely to ship in the next release given they have active PRs trending toward merge. The MCP bridge approval tool fix ([#56971](https://github.com/NousResearch/hermes-agent/pull/56971)) is also a strong candidate.

## User Feedback Summary

**Positive Signals:**
- Community is actively contributing — today's merged PRs from multiple contributors (webtecnica, Dixon-Cider, mosike99, outdog-hwh, SnowMat, SquabbyZ) show a healthy contributor ecosystem.
- Users are building serious workflows on Hermes, as evidenced by bug reports around **Tailscale remote gateways, Kanban task dispatchers, and Kubernetes deployments** — the project is being used in production-like environments.

**Pain Points:**
- **Desktop reliability remains the #1 pain point** — connection issues via Tailscale, network resume crashes, broken workflow after the Projects paradigm change, slash command failures. The Desktop experience appears to lag behind CLI/Gateway quality.
- **Context management frustration** — "always exceeds context limits" (Issue #57275) user tested 32k through 256k models and Hermes consistently exceeds maximum.
- **Silent failures** — Threat-scanner blocking without notification (Issue #59612), gateway swallowing messages after interrupt (Issue #44212), patch tool returning success without writing (PR #59610). Users want transparency.
- **Configuration friction** — Users manually setting values to empty strings because `hermes config remove` doesn't exist yet.
- **Cross-platform inconsistencies** — Telegram users receiving internal system messages (Issue #7921), Linux/WSL computer_use crashes (Issue #56704).

## Backlog Watch

**Long-unanswered Issues Needing Maintainer Attention:**

1. **[#3725](https://github.com/NousResearch/hermes-agent/issues/3725) — Rocket Chat support** (Created: 2026-03-29, 13 👍, 14 comments) — High community interest, zero maintainer response. Strong candidate for a community contribution guide.

2. **[#12238](https://github.com/NousResearch/hermes-agent/issues/12238) — Built-in Automatic Backup & Version Control** (Created: 2026-04-18, 18 👍) — Top-voted feature request with no label update or assignment.

3. **[#36970](https://github.com/NousResearch/hermes-agent/issues/36970) — First-class remote-client onboarding** (Created: 2026-06-01, 3 👍) — Critical for Desktop adoption alongside remote instances.

4. **[#42896](https://github.com/NousResearch/hermes-agent/issues/42896) — Kanban review status has no request-review transition** (Created: 2026-06-09) — Workflow gap affecting users relying on Kanban.

5. **[#39838](https://github.com/NousResearch/hermes-agent/issues/39838) — notification_sources config documented but never read by gateway** (Created: 2026-06-05) — Documentation/implementation mismatch.

6. **[#36949](https://github.com/NousResearch/hermes-agent/issues/36949) — 1Password secret source backend** (Created: 2026-06-01, 4 👍) — Feature parity request following Bitwarden support.

**Risk Watch:** The P1 issue [#59607](https://github.com/NousResearch/hermes-agent/issues/59607) (gateway re-triggering confirmed reboot commands) is a **safety-critical bug** that warrants immediate investigation — a confirmed high-risk command being re-executed after host reboot could cause significant operational damage.

---

*Digest generated from GitHub data for NousResearch/hermes-agent, snapshot 2026-07-06.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest — 2026-07-06**

## Today's Overview
Project activity increased today with 6 PRs and 3 Issues updated in the last 24 hours, indicating a productive development cycle. The main focus is on fixing two significant bugs in the `anthropic_messages` provider—prompt caching and tool state reloading—as well as improving tool safety around file overwrites. One PR was merged and closed, and two Issues were resolved (one closed, one new opened with an active fix PR). No new releases were cut today, but the patch queue is building for a likely upcoming release.

## Releases
None.

## Project Progress
- **Merged/Closed PR:** [#3227 [CLOSED] fix(providers): resolve tool_use name/args from Function on reloaded history](https://github.com/sipeed/picoclaw/pull/3227) — A critical fix ensuring that when chat history is reloaded from session files, tool-use blocks are correctly reconstructed using the `Function` field (which persists) instead of the runtime-only `Name`/`Arguments` fields (which are `json:"-"`). This closes a silent corruption bug that broke tool interactions after history was saved and restored.
- **Active Fix PRs (important):**
  - [#3228 (OPEN) fix(anthropic-messages): send SystemParts as system blocks with cache_control](https://github.com/sipeed/picoclaw/pull/3228) — Enables per-block `cache_control` markers on the `anthropic_messages` provider by properly preserving `SystemParts` content blocks. This directly addresses the prompt caching issue (Issue #2191 closed today).
  - [#3226 (OPEN) fix(tools): stop write_file from coaching destructive overwrite (#3150)](https://github.com/sipeed/picoclaw/pull/3226) — Removes error message language that nudged the agent toward destructive overwriting on existing files, instead suggesting append or read-first. Improves safety for memory-file and context-file management.
  - [#3115 (OPEN) Fix inline data URL media extraction for generic tool output](https://github.com/sipeed/picoclaw/pull/3115) — Prevents `data:image/...;base64,...` strings appearing inside plain tool output from being misinterpreted as real media attachments, which was causing session-history corruption.

## Community Hot Topics
- **[Issue #3088 (OPEN, 6 comments, 2 👍): Use vodozemac instead of libolm](https://github.com/sipeed/picoclaw/issues/3088)** — The community is advocating to replace the unmaintained `libolm` with the official successor `vodozemac` for Ollama/OAI-compatible end-to-end encryption. This has been open for nearly a month with high priority label, signaling strong user demand for security modernization. The proposed solution is making libolm optional at compile time.
- **[Issue #2191 (CLOSED today, 4 comments): anthropic_messages provider ignores SystemParts](https://github.com/sipeed/picoclaw/issues/2191)** — After being open since March, this was closed today with the merge of PR #3228. Users reported that Anthropic prompt caching (worth ~90% cost savings on long system prompts) was impossible because the provider flattened all system messages to a single string.
- **[Issue #3229 (NEW, 0 comments but paired with an active PR): Rolling conversation cache breakpoints](https://github.com/sipeed/picoclaw/issues/3229)** — Proposes extending the cache_control fix to dynamically mark conversation history segments (not just the system prompt) for caching, while keeping volatile runtime context out of the cached prefix. This would be significant for agentic/tool-use workloads where conversation history dominates input token counts.

## Bugs & Stability
- **(Critical, Fix Merged) Session history tool-use corruption:** PR #3227 fixed a bug where reloading chat history broke tool result interpretation because `ToolCall.Name` and `ToolCall.Arguments` were not serialized. This affected all Anthropic-based providers. Now fixed.
- **(High, Fix in Review) Provider-specific caching broken:** Issue #2191 was a high-severity bug because it silently disabled Anthropic prompt caching for the non-SDK provider. Fix PR #3228 is open and awaiting review.
- **(Medium, Fix in Review) Session history media false-positive:** PR #3115 addresses a corruption bug where inline base64 image data in tool outputs caused history deserialization errors.
- **(Low, Fix in Review) Agent tool safety:** PR #3226 prevents the agent from being coached toward destructive file overwrites.

## Feature Requests & Roadmap Signals
- **vodozemac migration (Issue #3088):** Strong community push to replace `libolm` with `vodozemac` for cryptographic compliance. Likely to land in the next minor release given its "priority: high" label and 2-week open duration.
- **Rolling cache breakpoints (Issue #3229):** If the maintainer accepts the design, this could be a major performance optimization for agentic workflows in a subsequent release. Early-stage proposal, no PR yet.
- **Anthropic prompt caching enablement (PR #3228):** Almost ready to merge. This is a high-value, low-disruption feature that unblocks users relying on Claude for long system prompts.

## User Feedback Summary
- **Pain Point:** "prompt caching doesn't work with anthropic_messages provider" — voiced by multiple users over 3+ months; resolved today.
- **Pain Point:** "tool state breaks after session reload" — reported indirectly through bug discovery; fix merged today.
- **Pain Point:** "agent wants to overwrite my memory files" — addressed by PR #3226 which softens the overwrite guard language.
- **Satisfaction Signal:** The prompt caching fix and the vodozemac proposal are receiving active engagement and upvotes (2 👍 on #3088), indicating the community is invested in platform security and cost efficiency.

## Backlog Watch
- **[Issue #3088 (high priority, open 28 days)](https://github.com/sipeed/picoclaw/issues/3088) — vodozemac migration:** No PR yet despite the "priority: high" and "help wanted" labels. This is the longest-standing high-priority open issue and may require maintainer approval or contributor coordination.
- **[PR #3115 (open 24 days) — Inline data URL fix](https://github.com/sipeed/picoclaw/pull/3115):** A stability fix that has been waiting for review since mid-June. Could cause ongoing session corruption for users who use tools returning inline base64 data (e.g., certain `exec` outputs).
- No other long-unanswered items; the project maintainers appear responsive to most PRs within a week.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-06

## 1. Today's Overview

The project saw a burst of documentation maintenance activity today, with four docs-focused PRs (#2961–#2964) submitted by contributor **glifocat** as part of a code-grounded staleness sweep. Seven PRs are open and zero were merged, so the pipeline is building but nothing landed. One issue was closed (feature proposal review for Kumuda) and one new feature request (image generation) was opened. No new releases were cut. Activity level is **moderate**, with the emphasis shifting toward surface cleanup rather than feature integration — a healthy sign that documentation is being actively aligned with the v2.1.38 codebase.

## 2. Releases

No new releases today.

## 3. Project Progress

**Merged/closed PRs today: 0**

No pull requests were merged or closed. The seven open PRs are all pending review and/or rebase.

**Key open PRs (all submitted today unless noted):**

| PR | Title | Author | Status |
|----|-------|--------|--------|
| #2964 | docs: update SDK deep-dive from 0.2.x to 0.3.197 | glifocat | Open |
| #2963 | docs: rewrite architecture.md and agent-runner-details.md | glifocat | Open |
| #2962 | docs: sync DB schema and entity docs with migrations 010-018 | glifocat | Open |
| #2961 | docs: fix stale claims across README, CONTRIBUTING, CLAUDE.md and operational docs | glifocat | Open |
| #2958 | add-teams: Teams-CLI-first credentials flow in SSF directive grammar | Koshkoshinsk | Open |
| #2949 | feat(skill): /add-litellm — minimal model router (local servers + opt…) | javexed | Open |
| #2909 | feat(setup): template setup flow in the wizard and first-agent stamping | amit-shafnir | Open |

**Notable progress indicators:**
- The docs sweep (#2961–#2964) covers DB schema, architecture, agent-runner internals, and SDK version alignment — critical for new contributors and end-user clarity.
- PR #2958 reworks the `add-teams` skill to a CLI-first credential flow, replacing the old Azure portal walkthrough. This is a meaningful UX improvement for enterprise use cases.
- PR #2949 (`/add-litellm`) adds a lightweight model router for local servers — ongoing since July 4, awaiting review.
- PR #2909 (template setup wizard) is four days old; the template loader (#2890) already landed, so this completes the feature.

## 4. Community Hot Topics

**Most active:**
- **Issue #2960** (CLOSED) — *Proposal: Live Zoom voice agent + K-ai KB integration*  
  Author: vishalsachdev | 💬 1 comment | 👍 0  
  [Link](https://github.com/nanocoai/nanoclaw/issues/2960)  
  *Analysis:* This design proposal outlines a voice agent joining Zoom meetings via RTMS, answering KB questions on a wake phrase ("Hey K-ai..."), and capturing transcripts for action-item extraction. The proposal was reviewed and closed the same day, suggesting either acceptance or deferral by maintainers. It signals enterprise demand for real-time voice integration with existing K-ai KB infrastructure.

- **PR #2909** — *feat(setup): template setup flow in the wizard and first-agent stamping*  
  Author: amit-shafnir | 💬 0 comments | 👍 0  
  [Link](https://github.com/nanocoai/nanoclaw/pull/2909)  
  *Analysis:* With no comments since July 2, this is a critical feature (agent templates) that may be blocked awaiting maintainer bandwidth. The template loader already merged; this completes the workflow.

**Underlying needs observed:**
- Enterprise voice/real-time communication (Zoom) with KB backends
- Simplified credential flows for Teams (SSF directive grammar in #2958)
- Fresh set-up wizard for new users (#2909) — onboarding friction is a known pain point

## 5. Bugs & Stability

**No bug reports or stability issues were opened today.**

All issues and PRs today are feature proposals, documentation fixes, or new skill additions. The docs sweep identifies stale content but does not report runtime crashes, regressions, or security issues.

**Verdict:** Low severity — no known active bugs.

## 6. Feature Requests & Roadmap Signals

**New feature requests today:**
- **Issue #2959** (OPEN) — *Image generation*  
  Author: rajpoot713 | 💬 0 | 👍 0  
  [Link](https://github.com/nanocoai/nanoclaw/issues/2959)  
  *User request:* Generate a logo for a shop called "Dream Design" — aesthetic logo.  
  *Analysis:* The feature request is minimal and may be a low-quality submission (potential spam or misunderstanding of NanoClaw's purpose). If genuine, this signals interest in generative image capabilities within the agent framework, possibly as a skill. Unlikely to be prioritized without a clearer use case.

**Existing PRs likely for next release:**
- PR #2909 — Template setup wizard (part 2 of 2, merge-ready after review)
- PR #2949 — `/add-litellm` model router (submitted July 4, no significant updates)
- PR #2958 — Teams CLI-first credentials (clean, well-scoped)

**Prediction:** Next minor release will likely include the template wizard (#2909) and one or both utility skills (litellm, Teams CLI), plus the docs sweep fixes.

## 7. User Feedback Summary

- **Enterprise real-time voice** (Issue #2960): User proposes a Zoom + K-ai KB integration — the detailed spec suggests a power user or internal team member with clear requirements.
- **Onboarding friction** (PR #2909): The template wizard aims to reduce first-agent setup friction, indicating user dissatisfaction with the current blank slate experience.
- **Documentation staleness** (PRs #2961–#2964): The fact that a contributor performed a "code-grounded staleness sweep" suggests users and contributors found out-of-date documentation confusing or misleading.
- **Dead or unclear requests** (Issue #2959): The image-generation request is too vague to act on and may reflect user confusion about NanoClaw's scope.

**Satisfaction signals:** No complaints, no bug reports — users are engaging constructively with feature proposals and documentation.

## 8. Backlog Watch

| Item | Author | Days Since Last Update | Maintainer Attention Needed? |
|------|--------|------------------------|------------------------------|
| **PR #2909** — Template setup wizard+stamping | amit-shafnir | 4 days (since July 2) | **Yes** — critical feature, no comments since submission. Template loader already merged; this is the second half. |
| **PR #2949** — `/add-litellm` model router | javexed | 2 days (since July 4) | **Moderate** — no updates; needs review. |
| **Issue #2959** — Image generation | rajpoot713 | 0 days (today) | **Low** — unclear request; may need triage for closure or clarification. |

**Highest priority:** PR #2909. Without maintainer feedback, this feature will stall and risk diverging from the codebase as other changes land.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-06

## 1. Today's Overview
NullClaw saw minimal activity over the past 24 hours, with no new issues, no closed issues, and no new releases. The only update was to a single open pull request (#956), which is an automated dependency bump for the Docker base image (Alpine 3.23 → 3.24). No merged or closed PRs were recorded, indicating a quiet period in development. The project appears to be in a maintenance or low-activity phase, with the pipeline primarily handling dependency updates rather than feature work or bug fixes.

## 2. Releases
No new releases were published today. The latest release remains none listed.

## 3. Project Progress
No pull requests were merged or closed in the last 24 hours. The sole PR activity was an update to the existing open PR #956.

## 4. Community Hot Topics
**#956 — [OPEN] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group**  
- Author: dependabot[bot]  
- Created: 2026-06-15 | Updated: 2026-07-06  
- Comments: undefined | 👍: 0  
- URL: [nullclaw/nullclaw PR #956](https://github.com/nullclaw/nullclaw/pull/956)  

This PR is an automated dependency update to upgrade the Docker base image from Alpine 3.23 to 3.24. While it has zero comments and no reactions, its longevity (open for 21 days) suggests it may be awaiting manual review or CI validation. The underlying need is to keep the Docker image secure and up-to-date, but the lack of engagement indicates low community urgency or potential maintainer bandwidth constraints.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. The project currently has no open issues, which may indicate either a stable state or low community reporting activity.

## 6. Feature Requests & Roadmap Signals
No feature requests or roadmap signals were detected in the data. The absence of issue activity and the single dependency-update PR suggest the project is not currently surfacing new user-driven feature ideas.

## 7. User Feedback Summary
No user feedback—positive or negative—was captured in the last 24 hours. The lack of issue or PR comments makes it impossible to assess user pain points or satisfaction levels from this digest period.

## 8. Backlog Watch
**#956 — ci(deps): bump alpine from 3.23 to 3.24**  
- Open since: 2026-06-15 (21 days)  
- Impact: Keep Docker builds current and secure; Alpine 3.24 includes package updates and security fixes.  
- Status: Stale; no maintainer review or merge activity.  

This PR is the only item requiring maintainer attention. While it is low-risk, its prolonged open state may indicate a need for more responsive dependency management or automated merge policies. No other long-unanswered issues or PRs were identified in the data.

---

**Project Health Summary**: NullClaw appears to be in a stable, low-activity maintenance phase with no new development, bug reports, or community discussions in the last 24 hours. The single pending dependency update is the most notable signal, and its slow progress may warrant attention from maintainers to avoid accumulating technical debt.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date**: 2026-07-06

## Today's Overview

IronClaw shows **high development velocity** with 40 PRs updated in the last 24 hours (29 open), 19 issues updated (15 active), and zero new releases. The project is in a **major architecture refactoring phase**, with three dominant workstreams: a **4-PR hosted-single-tenant Postgres latency stack** (#5688–#5691), a **7-PR Slack integration remodel** moving from pairing codes to personal OAuth with least-privilege scopes (#5643–#5693), and an integrated **"no-borking-failures" release train** (#5692) combining five prior PRs into one recoverability stack. A **performance audit** dropped 10+ issues today (#5671–#5680) targeting deep inefficiencies across WASM instantiation, event store, LLM tool schemas, and WebUI streaming—signaling an imminent optimization push. The community and core team are equally engaged, though several long-running bugs (Nightly E2E failures dating to May) remain unaddressed.

## Releases

No new releases were published today. The most recent release candidate PR #5598 (opened July 3) proposes version bumps including breaking changes to `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0), but remains unmerged.

## Project Progress

**Merged/Closed PRs today (11 total):**
- **#5687** (merged) — CI improvement: canary results now posted as GitHub Markdown comments on triggering PRs, non-blocking from Slack availability
- **#5676** (closed) — Performance fix for N+1 record fetches in `run_state` scope queries and excessive CAS loop re-reads

**Closed Issues (4 today):**
- **#5507** — "No thread attached" bug on failed routine runs, blocking debugging (P2 bug bash)
- **#5676** — Performance issue closed via PR
- **#5556** — Active chat remaining highlighted in sidebar after navigation (P3)
- **#5555** — Terminal button overlapping chat composer (P2)

**Major feature advances (still open):**
- **HST Postgres Stack** (#5688–#5691): 4-part architectural refactor for hosted-single-tenant Postgres latency parity. PRs 1/4 (RootFilesystem substrate) and 2/4 (row-store turn state) open today; 3/4 (wiring filesystem runtime stores) and 4/4 (latency evidence harness) also submitted
- **Slack OAuth Remodel** (#5643–#5693, 7 PRs): Moving from pairing codes to personal OAuth with per-tool least-privilege scopes. PRs 5/7 (bot-channel entrypoint + installable tools), 6/7 (least-privilege scopes), and 7/7 (durable conversation binding) all opened today
- **No-Borking-Failures Stack** (#5692): Integrated release train combining failure explanation, retryable runs, model-visible failure detail, and fault matrix—collapsing 5 prior PRs into one deliverable
- **i18n Localization** (#5685): Adds internationalization for Reborn shell, Chat, and Extensions UI surfaces across all 11 supported locales
- **Mobile Chat Fix** (#5682): Prevents horizontal overflow on mobile devices with long unbroken content
- **Insecure Origin Fix** (#5695): Makes `clientActionId()` survive non-HTTPS contexts (self-hosted LAN deployments)

## Community Hot Topics

**Most Active Issues:**
- **#5553** (2 comments) — Approval notifications disappearing from history. Users report notifications "flash and vanish" when clicked, breaking the approval workflow for automation capabilities requiring human intervention. Underlying need: reliable, persistent notification delivery is critical for autonomous agent operation
- **#5557** (uncommented but repeatedly linked) — Logs deep-link requires two clicks to load selected conversation. UX friction in navigation flow affects debugging efficiency

**Most Active PRs (all zero comments, but high engineering investment):**
- **#5691/#5690/#5689/#5688** — The HST Postgres stack represents a major architectural decision. Each PR ranges from L to XL size, with significant refactoring to swap filesystem-backed stores for Postgres-backed stores in hosted environments
- **#5692** — Collapsed no-borking-failures train. This is the most impactful stability PR in flight, merging 5 prior PRs into one release-ready bundle
- **#5693/#5670/#5668** — The Slack remodel is the largest feature addition in flight, fundamentally changing how Slack integration works

**Underlying signal**: The project is actively addressing two major pain points: **operational reliability** (no-borking-failures, Postgres latency) and **integration depth** (Slack least-privilege, durable bindings). The lack of community comments on PRs suggests this phase is core-team driven with deep technical scope.

## Bugs & Stability

**High Severity (P2):**
- **#5553** — Approval notifications disappear (open, no fix PR). **Impact**: Breaks human-in-the-loop automation approvals. Needs urgent attention
- **#5554** — Mobile chat horizontal overflow (open, fix PR #5682 submitted today). **Impact**: Mobile users cannot read long messages or use floating UI elements
- **#5694** — `clientActionId()` throws on insecure origins, breaking all mutating requests for self-hosted deployments (open, fix PR #5695 submitted same day). **Impact**: Complete UI lockout for HTTP deployments; immediate fix available

**Medium Severity (P3):**
- **#5557** — Logs deep-link requires two clicks to load conversation (open, no fix)
- **#4108** — Nightly E2E continues failing since May 27 (open, 41 days stale). **Impact**: Test infrastructure reliability unknown; likely masking other regressions

**Performance Issues (new today, all open):**
- **#5671–#5680**: 10 performance issues filed as a batch. Notable items:
  - **#5677**: WASM component linker rebuilt on every instantiation — significant per-execution overhead for sandboxed tools
  - **#5675**: Full conversation state cloned + serialized on every inbound message — O(n) per message in large conversations
  - **#5673**: Event projections replay entire stream to head on every call — no materialized run state
  - **#5672**: SSE polls at 1-3s intervals instead of real subscription — unnecessary load on Postgres
  - **#5674**: LLM tool schemas deep-cloned and re-normalized on every request

**Fix PRs exist for**: #5694 ($clientActionId$), #5554 (mobile overflow), #5676 (N+1 fetches)

## Feature Requests & Roadmap Signals

**Strong Signal (likely next release):**
- **No-Borking-Failures** (#5692): This is the most mature stability feature, representing a direct response to run-terminal errors. Likely to merge into the next release candidate
- **Slack OAuth Remodel** (#5643–#5693): 7 PRs deep, with the final 3 opened today. This will fundamentally change Slack integration, adding durable bindings, least-privilege scopes, and bot-channel entrypoints. Likely to ship as a coordinated feature flag
- **HST Postgres Latency** (#5688–#5691): Critical for hosted deployments. 4-PR stack moving from filesystem to Postgres for turn state and runtimes

**Medium Signal (next 1-2 releases):**
- **i18n Localization** (#5685): Complete internationalization of shell, chat, and extensions UI. Signals upcoming international market expansion
- **Performance Optimization Batch** (#5671–#5680): The breadth (WASM, LLM, WebUI, event store, conversations) suggests a coordinated performance sweep is being scheduled. Expect these to be assigned and addressed in batches

**Weak Signal (community requests):**
- **#5669**: Slack least-privilege OAuth grant for read-only users (write opt-in). This is already being addressed in PR #5670 as part of the larger Slack remodel. The community request is effectively being pre-solved by the core team

## User Feedback Summary

**Pain Points (derived from bugs and issues):**
1. **Approval workflow broken** — Notifications disappear, making automation with human-in-the-loop unusable (#5553). This is the highest-impact user-facing bug
2. **Self-hosted users locked out** — Plain HTTP deployments cannot make any mutating API calls due to `clientActionId()` failure (#5694). Fix PR exists but not yet merged
3. **Mobile experience degraded** — Horizontal overflow, overlapping terminal button, broken layouts (#5554, #5555). Core team is actively addressing (#5682)
4. **Debugging blocked** — Failed runs show "No thread attached" making RCA impossible (#5507, now closed). This was addressed, suggesting the team values debuggability
5. **Navigation friction** — Logs deep-links require two clicks, sidebar highlights persist incorrectly (#5557, #5556). Minor but persistent UX complaints

**Satisfaction Signals:**
- **Performance attention is high** — The 10-issue performance sweep shows the team is proactively identifying and documenting optimization opportunities before users complain
- **Stability investment** — The "no-borking-failures" stack directly addresses the most common user-facing failure mode (opaque run crashes)
- **Least-privilege security** — The Slack OAuth remodel shows attention to security best practices, which enterprise users will appreciate

## Backlog Watch

**Stale Critical Issues:**
- **#4108** — Nightly E2E failing since **May 27** (41 days). **No maintainer response**. This is the most concerning item—a persistent test infrastructure failure that could mask regression bugs. The workflow shows "Full E2E / E2E (web-regressions)" as failing. With the volume of UI and JS changes in flight, this poses a risk of regression escape

**Watch Items:**
- **#5598** — Release PR (opens July 3) with breaking changes to `ironclaw_common` and `ironclaw_skills`. Unmerged for 3 days despite being CI-generated. May be blocked by the Slack remodel or no-borking stack landing first
- **#4841** — Original no-borking-failures PR (opened June 13, now 23 days old). The new collapsed PR #5692 supersedes it but #4841 is still open. This may be intentionally kept for history, but indicates the integration took 3 weeks of iteration
- **#5553** — Approval notification bug (P2, 4 days old). No assignee, no fix PR. Given this blocks core automation UX, it needs prioritization

**Dependency Conflicts:**
- The Slack OAuth stack (#5643–#5693) and the HST Postgres stack (#5688–#5691) are both modifying large portions of the composition, runtime, and WebUI layers. Coordination between these two massive refactors will be critical to avoid merge conflicts and regression cascades

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-06

## Today's Overview

The LobsterAI project experienced a burst of high-velocity development today, with **12 pull requests merged/closed** and **0 new issues filed**, signaling the team is in a sustained feature-ship and bugfix push. Activity was concentrated across the renderer, main, OpenClaw, and Cowork areas, with major additions including **xAI (Grok) OAuth login support**, **multi-account email skills**, **heartbeat cost-control policies**, and **a redesigned scheduled-task card UI**. The single open PR (#1277) is a long-running dependency bump from Dependabot. No new releases or issues were created, indicating the team is focused on landing internal milestones rather than responding to external regressions.

## Releases

**None.** No new versions were published. The rapid PR cycle suggests the team is staging changes for an upcoming release.

## Project Progress

The following **12 PRs were merged/closed today**, representing significant forward motion across multiple subsystems:

### Feature Additions
- **#2276** — [area: renderer, main, openclaw] *feat(providers): add xAI (Grok) OAuth login support*  
  Implements browser PKCE login against auth.x.ai with device-code fallback, wires into OpenClaw auth-profiles store, and registers xAI as a selectable provider with its Grok model catalog.  
  *(Author: fisherdaddy)*

- **#2278** — [area: renderer, main, openclaw, cowork] *feat(openclaw): add heartbeat toggle setting*  
  Adds a Settings > Agent Engine toggle to enable/disable OpenClaw heartbeat, persisting the preference and syncing `1h` or `0m` intervals while preserving existing `target: none` and `lightContext` config.  
  *(Author: btc69m979y-dotcom)*

- **#2280** — [area: docs, main, openclaw] *feat(openclaw): add heartbeat cost-control policy and legacy file repair*  
  Adds a managed heartbeat policy prompt, strips proactive-heartbeat guidance from bundled templates, and repairs legacy `HEARTBEAT.md` files in existing workspaces.  
  *(Author: fisherdaddy)*

- **#2274** — [area: renderer, cowork] *feat(cowork): add time-aware greeting and recent tasks to home view*  
  Gives the Cowork home screen a warmer, more actionable entry point with time-of-day greeting, recent task surfaces, and polished hover/focus feedback.  
  *(Author: fisherdaddy)*

- **#2275** — [area: renderer, docs, main, skills] *feat(email): multi-account support for imap-smtp-email skill*  
  Adds multi-account support with email account management UI including enable/disable, default account, provider presets, connectivity testing, and delete confirmation — while preserving legacy single-account `.env` compatibility.  
  *(Author: liuzhq1986)*

### Bug Fixes & Optimizations
- **#2256** — [area: renderer] *fix(scheduled-task): notification channel「不通知」not taking effect + white screen on model-delete*  
  Squashes two fixes: (1) scheduled task notification channel "不通知" (Do Not Notify) not persisting on save; (2) white screen crash when deleting an active model in settings.  
  *(Author: tsonglew)*

- **#2277** — [area: renderer, main, openclaw] *fix(mcp): clear stale transport config*  
  Normalizes MCP server config by transport type to clear stale headers/env/args when editing or switching transport; ensures empty fields are persisted correctly.  
  *(Author: btc69m979y-dotcom)*

- **#2279** — [area: main] *fix(plugins): hide bundled xai plugin from sync*  
  Hides the built-in xAI provider plugin from user plugin sync list, preventing accidental duplication or user confusion.  
  *(Author: btc69m979y-dotcom)*

- **#2281** — [area: main] *fix(cowork): prevent stale final sync from restarting context maintenance*  
  Guards against late empty-final history syncs that could return errored sessions to context maintenance state; adds regression coverage for timeout errors racing with empty final sync.  
  *(Author: liuzhq1986)*

- **#2283** — [area: renderer, main, openclaw, cowork] *chore: optimize skill, mcp, memory and mail UI*  
  UI optimization pass across multiple subsystems.  
  *(Author: fisherdaddy)*

- **#2273** — [area: renderer, main, openclaw] *feat(scheduledTask): task list card redesign with status chip, toggle, search, and optimistic UI feedback*  
  Redesign of the scheduled task list UI with improved visual states and interactive feedback. *(Merged yesterday, 2026-07-05)*  
  *(Author: fisherdaddy)*

- **#2282** — [area: renderer] *Rebase/re-merge of PR #2256*  
  *(Author: fisherdaddy)*

## Community Hot Topics

**No issues were created or updated in the last 24 hours**, and none of today's 12 merged PRs have public comments or reactions recorded. The project currently shows zero active community-reported issues. This likely indicates the project is in an internal development phase with controlled testers rather than a wide open-source contributor base.

The **only open PR** that warrants attention:

- **#1277** — [OPEN, updated 2026-07-06] *chore(deps-dev): bump the electron group across 1 directory with 2 updates*  
  [PR Link](https://github.com/netease-youdao/LobsterAI/pull/1277)  
  Updates `electron` from 40.2.1 to 43.0.0 and `electron-builder`. This PR has been open since **April 2, 2026** — over 3 months. The major version jump (40 → 43) likely carries breaking changes that require careful testing, which may explain the hold.

## Bugs & Stability

**No new bugs were filed today.** Bugfix PRs landed for the following issues discovered internally:

| Severity | Bug Description | Fix PR(s) | Status |
|----------|-----------------|-----------|--------|
| **High** | Scheduled task "Do Not Notify" channel fails to persist; form reverts to previously selected channel | #2256, #2282 | ✅ Merged |
| **High** | White screen crash when deleting an active model in settings | #2256, #2282 | ✅ Merged |
| **Medium** | Stale MCP transport config (headers/env/args) persists when editing/switching transport type | #2277 | ✅ Merged |
| **Medium** | Late empty-final history syncs can restart context maintenance for already-errored sessions | #2281 | ✅ Merged |
| **Low** | Bundled xAI provider plugin visible in user plugin sync list, risking duplication | #2279 | ✅ Merged |

No critical regressions remain unaddressed.

## Feature Requests & Roadmap Signals

Based on today's PRs, the following features are clearly on the roadmap and likely to ship in the next release:

1. **xAI / Grok Provider Integration** (#2276, #2279) — Full OAuth login flow with PKCE and device-code fallback, bundled plugin. Strong signal that Grok models will be a first-class citizen.

2. **Heartbeat Cost Control** (#2278, #2280) — A toggle and policy prompt to disable periodic model calls in workspaces, reducing unnecessary API consumption. Addresses a clear user cost concern.

3. **Multi-Account Email** (#2275) — Skill-level support for multiple IMAP/SMTP accounts with per-account provider presets and connectivity testing. Likely a highly requested feature from power users.

4. **Cowork Home Screen Enhancements** (#2274) — Time-aware greeting and recent task surfaces. Suggests investment in user onboarding and daily UX.

5. **Redesigned Scheduled Task UI** (#2273) — New card layout with status chips, toggles, search, and optimistic updates. Signals a UX overhaul of recurring task management.

## User Feedback Summary

**No direct user feedback, bug reports, or feature requests were filed today.** The project's current state — zero open issues — suggests either a very stable product with a satisfied user base, or more likely, that user feedback is being collected through private channels (e.g., internal company deployment at Youdao) rather than public GitHub issues.

Inferred pain points addressed by today's work:
- **Cost management**: The heartbeat cost-control toggle directly addresses users concerned about unnecessary API call costs from agent workflows.
- **Provider choice**: xAI/Grok OAuth adds a competitive alternative model provider, a common request in the AI assistant space.
- **Multi-service management**: Multi-account email support resolves a friction point for users managing multiple email identities through the assistant.
- **UX polish**: Home screen greeting and task card redesign suggest a focus on daily user satisfaction and retention.

## Backlog Watch

- **#1277** — [OPEN, updated 2026-07-06] *chore(deps-dev): bump electron group*  
  [PR Link](https://github.com/netease-youdao/LobsterAI/pull/1277)  
  **Age:** 95 days (since April 2, 2026)  
  **Risk:** Major version bump from Electron 40 → 43. If held pending other breaking changes or testing, this is understandable but should be tracked. If simply forgotten, this is a security/stability risk as it blocks critical dependency updates.

**No other items in the backlog require urgent maintainer attention.** The maintainers are clearly active — 12 merges in one day demonstrates strong engineering velocity.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Project Digest: Moltis (moltis-org/moltis)**
**Date:** 2026-07-06

---

### 1. Today’s Overview
Project activity today was moderate, driven entirely by the finalization of previously opened pull requests rather than new issue reports or releases. No new issues were filed or updated in the last 24 hours, and no releases were published. However, 5 PRs saw updates, with 3 being merged or closed today, signaling a consolidation phase after a few weeks of more intense development. The project appears stable, with maintainers focused on reducing technical debt (Dockerfile fixes, dependency bumps) and strengthening third-party integrations (Telegram, WhatsApp, MCP OAuth).

### 2. Releases
No new releases were published in the last 24 hours. The latest release remains unchanged from previous periods.

### 3. Project Progress
Three pull requests were closed/merged today, advancing core integration and infrastructure quality:
- **#1122 (CLOSED):** `fix: drop VOLUME declarations that shadow the home bind mount` — Fixed a pathological Dockerfile issue where VOLUME declarations prevented bind-mounted home directories from working correctly. This is a critical fix for container deployments.
- **#1113 (CLOSED):** `hotfix(telegram): stream final replies without completion notify` — Restored expected Telegram edit-in-place streaming behavior when completion notifications are disabled, fixing a regression from PR #1099.
- **#1144 (CLOSED):** `feat(whatsapp): bump whatsapp-rust 0.5 -> 0.6 with LID-native addressing` — Upgraded the WhatsApp integration to support LID (Linked Device ID) addressing, fixing inbound message routing after WhatsApp’s backend migration and improving group message handling.

### 4. Community Hot Topics
No issues or pull requests today received significant comments or reactions. Attention was focused on closing out open PRs rather than new discussion. The two currently open PRs are both low-engagement, routine updates:
- **#1120 (OPEN):** `fix(mcp): use direct fetch for resource_metadata URL from WWW-Authenticate` — Remains open without new discussion; targets a bug affecting OAuth flows with Notion and Linear.
- **#1087 (OPEN):** `chore(deps): bump tar from 0.4.45 to 0.4.46` — A routine dependency update by Dependabot, still awaiting merge.

### 5. Bugs & Stability
One confirmed bug was fixed today, and no new bugs were reported:
- **Docker VOLUME shadow bug (CRITICAL severity):** Any container deployment using bind mounts for the home directory (e.g., `./moltis-home:/home/moltis`) was silently broken. **Fixed in PR #1122 (CLOSED).**
- **Telegram streaming regression (MEDIUM severity):** Final replies were not streamed when completion notifications were disabled. **Fixed in PR #1113 (CLOSED).**
- **MCP OAuth `invalid_target` bug (MEDIUM severity):** Affects users integrating with Notion and Linear MCP servers. A fix exists in **PR #1120 (OPEN)** but has not yet been merged.

### 6. Feature Requests & Roadmap Signals
No new feature requests were opened today. The closed PR #1144 signals that the maintainers are actively hardening the WhatsApp channel against upstream API migrations (LID-native addressing). This suggests that cross-platform messaging reliability is a current roadmap priority. Container deployment polish (PR #1122) also hints at growing emphasis on Docker/cloud-native usage.

### 7. User Feedback Summary
No new user feedback (issues, comments, or reactions) surfaced today. The bugs fixed (Telegram streaming, Docker VOLUME) likely reflect real pain points from users running Moltis in container environments or relying on Telegram as a primary interface.

### 8. Backlog Watch
One open issue remains without a merged fix:
- **#1119 (inferred from PR #1120):** MCP OAuth `invalid_target` with Notion/Linear servers. The fix PR **#1120** (OPEN) has been pending for 23 days as of today and is the longest-standing open fix PR. It requires maintainer review and merge.

No other issues or PRs in the backlog appear to be languishing without attention.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-06

## Today's Overview

CoPaw shows **high activity** with 31 issues and 45 PRs updated in the last 24 hours, and one new patch release (v1.1.12.post3) published to fix an import-breaking dependency issue. The project maintains a **stable 1.1.x release line** while significant **v2.0.0 pre-release bug tracking and fixes** continue in parallel—the v2.0.0 tracker (#5273) remains active with 5 comments today, indicating ongoing refinement toward GA. A concentrated **regression test campaign** is underway, with multiple new PRs (#5807–#5813) adding 176+ unit tests across channels, inbox, approvals, and runtime modules. The **community is highly engaged**, reporting bugs across Google Gemini embeddings, mobile WebUI truncation, streaming performance, and cron timezone issues, while also voicing strong feature demands for multi-user account management and better notification controls.

---

## Releases

### v1.1.12.post3 (New, published 2026-07-06)
- **What's Changed:** Pins `agent-client-protocol (ACP)` to `>=0.9.0,<0.11.0` to resolve a breaking change in ACP that caused `ImportError` for `SetSessionModelResponse` on 1.x versions of QwenPaw.
- **Fixes:** #5816 — users running `qwenpaw app` after installation would crash with `cannot import name 'SetSessionModelResponse' from 'acp'`.
- **Migration Note:** Users on v1.1.12 should upgrade via `pip install --upgrade qwenpaw==1.1.12.post3` to avoid startup failures. No other configuration changes required.

---

## Project Progress

**Merged/Closed PRs in last 24h (24 items):** Notable merges include:

- **#5818** — chore(release): bump to 1.1.12.post3 and pin ACP version (fixes #5816, published today)
- **#5210** — feat(cli): add `cron update` command for modifying existing cron jobs (closes #4939, long-standing CLI gap)
- **#5736** — feat(ci): add QwenPaw review bot (automated AI code review in CI)
- **#5524** — fix(tools): register `spawn_subagent` in Runtime 2.0 tool discovery (end-to-end tested)
- **#5750** — fix(console): route plugin market details through link guard (security fix for external-link handling)
- **#5768** — fix: add `timezone.utc` to `datetime.fromtimestamp` in AgentMdManager (fixes naive datetime strings breaking frontend rendering)

**Active PRs advancing features:**
- **#5805** (open) — Feat/tauri devtools: Adds DevTools entry for desktop users to debug frontend performance bottlenecks, with security guard to prevent ordinary user access.
- **#5814** (open) — Bundle Node runtime for ACP desktop: Bundles Node.js with Tauri for built-in ACP agents.
- **#5654** (open, Under Review) — fix(channels): surface DingTalk delivery failures (fixes #5566).

---

## Community Hot Topics

| Issue | Type | Comments | Reactions |
|-------|------|----------|-----------|
| [#5757 [Bug]: 飞书信息不回复情况](https://github.com/agentscope-ai/QwenPaw/issues/5757) | Bug | **11** | 👍0 |
| [#5401 [Bug]: Console session with large tool-use history fails to render](https://github.com/agentscope-ai/QwenPaw/issues/5401) | Bug | **8** | 👍0 |
| [#5273 [Tracking] QwenPaw v2.0.0 Pre-release Bug Tracker](https://github.com/agentscope-ai/QwenPaw/issues/5273) | Tracking | **5** | 👍1 |
| [#5253 [Bug]: custom_channel save crashes listener](https://github.com/agentscope-ai/QwenPaw/issues/5253) | Bug | **5** | 👍0 |
| [#5725 [Question]: Console streaming causes browser lag](https://github.com/agentscope-ai/QwenPaw/issues/5725) | Question | **4** | 👍0 |
| [#5567 [Question]: GitHub Issue Feedback Skill](https://github.com/agentscope-ai/QwenPaw/issues/5567) | Community Tool | **2** | 👍2 |

**Analysis:**
1. **Feishu/Lark bot not responding** (#5757, 11 comments) — Users report that after the first message, subsequent messages are acknowledged but never replied. This affects both Docker and AgentScope Platform instances, suggesting a backend state or session management issue in the Feishu channel.
2. **Large session rendering crash** (#5401, 8 comments) — The Console frontend whitescreens when opening sessions with heavy tool-use history. Root cause: `agentscope_msg_to_message()` converts `tool_use`/`tool_result` blocks to `type: "data"` `DataContent`, but frontend only handles `type: "tool_use"` / `type: "tool_result"`.
3. **v2.0.0 Pre-release tracker** (#5273, 5 comments, 1 👍) — Active central bug tracking for the upcoming major version. Today's activity includes discussions around the `double /api prefix` 404 fix (#5769) and memory state issues (#5775).

**User-created tool:** [#5567](https://github.com/agentscope-ai/QwenPaw/issues/5567) (👍2) — A community member published a Skill on ModelScope that auto-formats GitHub Issues from natural language complaints, including privacy sanitization. Signals strong community desire for frictionless bug reporting.

---

## Bugs & Stability

### High Severity
- **#5782** — Google Gemini embedding compatibility: OpenAI-compatible endpoint returns `index=None`, causing `TypeError` and silent fallback to keyword search. Users cannot perceive the issue. **No fix PR yet.**
- **#5771** — `model_factory.py` debug logs at WARNING level cause log spam in production. **No fix PR yet.**
- **#5789** — Context compression crashes when model output exceeds JSON Schema `maxLength` (200 chars) on `next_steps` field. `jsonschema.validate()` raises `ValidationError`. **No fix PR yet.**

### Medium Severity
- **#5779** (CLOSED) — Cron API returns UTC times instead of configured timezone; hardcoded `datetime.now(timezone.utc)` at line 566 of `manager.py`. **Fixed in #5768** (timezone-aware datetime now propagated).
- **#5787** (CLOSED) — Mobile WebUI bottom content truncated on all pages; hat box buttons outside screen boundary. **No fix PR visible**, but closed—possibly resolved by CSS fix.
- **#5784** (OPEN) — Frontend compression threshold displays wrong provider’s `max_input_length` when same model ID exists across providers; `find()` only matches `model.id`. **Fix PR #5786 open** (adds `provider_id` check).

### Low Severity (New Today)
- **#5790** — Loading animation persists after Agent response completes in Console.
- **#5781** — Offline Code mode cannot preview files because it requires online resource download.
- **#5788** — Skills list shows only 20 items; scroll-to-load-more broken due to CSS `overflow` restrictions.

### Recently Introduced Regression
- **#5816** (CLOSED) — `ImportError: cannot import name 'SetSessionModelResponse' from 'acp'` — Complete startup failure for fresh installs. **Fixed in v1.1.12.post3 via ACP pin.**

---

## Feature Requests & Roadmap Signals

| Issue | Feature | Comments | Likelihood for Next Release |
|-------|---------|----------|-----------------------------|
| [#5780](https://github.com/agentscope-ai/QwenPaw/issues/5780) | Multi-user account management for team use | 2 | **High**—recurring request; team/enterprise adoption blocker |
| [#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797) | Toggle for cron task popup notifications | 2 | **Medium**—response to PR #4803 which removed popups entirely |
| [#5795](https://github.com/agentscope-ai/QwenPaw/issues/5795) | Auto-refresh Console chat on WeChat channel messages | 1 | **Medium**—WebSocket/polling gap in current architecture |
| [#5168](https://github.com/agentscope-ai/QwenPaw/issues/5168) | Official Zalo Bot channel support | 2 | **Low**—regional but impactful for Vietnamese users |
| [#5785](https://github.com/agentscope-ai/QwenPaw/issues/5785) | Code mode: allow selecting hidden files (dot-prefixed) | 3 | **Low**—UX enhancement |
| [#5793](https://github.com/agentscope-ai/QwenPaw/issues/5793) (CLOSED) | Always-show timestamp toggle in Console | 1 | **Medium**—addressed quickly, closed as accepted |

**Pipeline Signal:** The **v2.0.0 Pre-release Tracker** (#5273) is the clearest roadmap signal. Once it stabilizes, v2.0.0 GA will likely include:
- Runtime 2.0 improvements (tool-call handling, memory middleware fixes)
- Console SDK architecture overhaul
- Multi-session/multi-workspace support (#5767 is an architecture-level issue blocking this)

---

## User Feedback Summary

**Satisfaction:**
- Community members actively contribute tools (e.g., auto-Issue Skill #5567) and unit tests (PRs #5807–#5813 by hanson-hex)—signals developer satisfaction and project engagement.
- Users express **enthusiasm for v2.0.0**, with #5770 stating desire for a "stunning" GA release.

**Pain Points:**
1. **IM channel reliability** — Feishu (#5757) and Google Gemini (#5774, #5782) channels have functional issues; DingTalk delivery failures (#5654) being fixed.
2. **Streaming performance** — Console streaming causes browser lag (#5725), suggesting frontend rendering optimization needed.
3. **Mobile experience** — Mobile WebUI truncation (#5787) and touch-device timestamp inaccessibility (#5793) indicate mobile UX gaps.
4. **Team/collaboration features** — Lack of multi-user account management (#5780) prevents team deployments without shared Bot credentials.
5. **Notification control** — Users want fine-grained control over cron task popups (#5797), not blanket removal.

**Use Cases:**
- **Enterprise/Team:** IM bots for team collaboration (Feishu, DingTalk, WeChat, QQ)
- **Developer:** Code mode for file manipulation, local AI agent development
- **Automation:** Cron tasks for periodic actions, memory persistence for long-running sessions

---

## Backlog Watch

### Issues Needing Maintainer Attention
- **#5401** (OPEN, 8 comments, 8 days old) — Console crash with large tool-use history. **High impact** (renders Console unusable for many users). No maintainer PR assigned.
- **#5717** (OPEN, 2 comments, 4 days old) — Runtime 2.0 malformed tool-call history causes endless tool execution loop. **Critical for v2.0.0 stability.**
- **#5775** (OPEN, 2 comments, 2 days old) — Auto-memory interval never triggers due to state loss across agent rebuilds. **Blocking v2.0.0 memory feature.**
- **#5782** (OPEN, 1 comment, 1 day old) — Google Gemini embedding silently falls back to keyword search. Users unaware of degraded performance.

### Stale or Unanswered PRs
- **#5654** (OPEN, 6 days old, Under Review) — DingTalk delivery fix. No merge activity despite being labeled "Under Review."
- **#5799** (OPEN, 1 day old) — Streaming OpenAI APIError retry fix for custom AI gateways. First-time contributor PR; needs reviewer.

### Previously Open Items (Status Unknown)
- **#5168** (OPEN, 23 days old) — Zalo Bot channel request. No response from maintainers.
- **#5273** (OPEN, 19 days old) — v2.0.0 bug tracker. Maintainer `rayrayraykk` is actively involved; continues to accumulate reports.

---

*Generated from agentscope-ai/CoPaw GitHub data for 2026-07-06.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-06

## Today's Overview

ZeroClaw shows **very high development velocity** with 27 issues updated and 50 PRs updated in the last 24 hours—well above typical daily activity. The project is in the midst of a major feature push, with **five overlapping large-tracker initiatives** (Goal mode split, SOP authoring, multi-user auth, schema V4 cut, and zerorelay relay node) all advancing simultaneously. Closed/merged PRs (8 of 50) indicate steady integration velocity. However, **two P1 bugs** were reported today (config template rejection and zombie MCP processes), reflecting growing pains from rapid feature expansion. The absence of formal releases suggests the team is consolidating these bulky feature branches before cutting a new version.

## Releases

**None** — no new releases in the last 24 hours.

---

## Project Progress

### Merged/Closed PRs Today (8 total)

| PR | Title | Type | Risk |
|----|-------|------|------|
| [#8609](https://github.com/zeroclaw-labs/zeroclaw/pull/8609) | feat(channels): add Git forge channel (GitHub provider) with SOP ingress | Feature (merged) | High |
| [#8726](https://github.com/zeroclaw-labs/zeroclaw/pull/8726) | fix(runtime/shell): block dangerous env vars from TUI overlay | Bug fix (closed) | High |
| [#8728](https://github.com/zeroclaw-labs/zeroclaw/pull/8728) | docs(agents): sync model_provider trait rename in extension points | Docs (closed) | Low |
| [#8645](https://github.com/zeroclaw-labs/zeroclaw/issues/8645) | Bug: Reload banner shows persistent drift for env-overridden secrets | Bug (closed) | High |
| [#8251](https://github.com/zeroclaw-labs/zeroclaw/issues/8251) | [Feature]: Surface relationship memory as user-facing workflows | Feature (closed) | Medium |
| [#7861](https://github.com/zeroclaw-labs/zeroclaw/issues/7861) | [Feature]: Surface security-audit-skipped skills in `zeroclaw skills list` | Feature (closed) | High |
| [#7879](https://github.com/zeroclaw-labs/zeroclaw/issues/7879) | [Feature]: add bounded SKILL.md reflection for skill creation | Feature (closed) | High |
| [#8462](https://github.com/zeroclaw-labs/zeroclaw/issues/8462) | RFC: Runtime Policy for OTel LLM and Tool Content | RFC (closed) | High |

**Notable:** The **Git forge channel** PR (#8609) was merged—this adds GitHub provider integration with SOP ingress, a significant new integration surface. The **TUI env var fix** (#8726) closes a security hole where dangerous environment variables could leak through the TUI overlay.

---

## Community Hot Topics

### Most Discussed Issues (by comment count)

| Issue | Title | Comments | Activity |
|-------|-------|----------|----------|
| [#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) | [Tracker]: Goal mode implementation split stack | 8 | Updated today |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | RFC: Prefer a lighter ZeroClaw core through external integrations | 8 | Updated yesterday |
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) | [Feature]: Turn-level OTel trace correlation | 4 | Updated today |
| [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) | [Feature]: Delete unneeded branches from repo | 4 | Still blocked |
| [#8462](https://github.com/zeroclaw-labs/zeroclaw/issues/8462) | RFC: Runtime Policy for OTel LLM and Tool Content | 4 | Closed today |

### Most Active PRs (by size and scope)

- **[#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) — Visual SOP authoring** (XL, 20+ areas): This is the largest active PR, adding a full node-graph editor for SOPs with channel fan-in and selectable executing agents. Community beta testers are being called.
- **[#8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689) + [#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688) — Goal command admission** (XL, 15+ areas each): The goal-mode feature stack spanning channels, runtime, and tools.

### Underlying Needs

The **Goal mode** (#8681, #8688, #8689, #8746) and **SOP authoring** (#8590, #8288, #8736) trackers dominate. The community is pushing for two complementary visions: (1) **deterministic, auditable workflows** (SOPs) with visual editing, and (2) **goal-directed autonomous execution** with safer admission gates. Both share a need for better **run control**—pause, resume, cancel, and step-through—which is exactly what these features deliver.

---

## Bugs & Stability

### Critical/Severity-1 Bugs

| Issue | Title | Status | Fix PR? |
|-------|-------|--------|---------|
| [#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) | `browser_open` hangs agent turn unbounded subprocess wait | **Open, P1** | No fix PR yet |
| [#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678) | `advance_step` has no run-status guard (SOP approval bypass) | **Open, P1** | No fix PR yet |
| [#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718) | `zeroclaw config init` ships config template that daemon rejects | **Open, P1** | No fix PR yet |
| [#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) | Stdio MCP servers accumulate as zombie processes | **Open, P1** | No fix PR yet |

### Priority-2 Bugs (Medium severity)

| Issue | Title | Status |
|-------|-------|--------|
| [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) | Disable cachePoint for Bedrock Nova 2 Lite | Open |
| [#8722](https://github.com/zeroclaw-labs/zeroclaw/issues/8722) | High-entropy detector redacts legitimate filenames | Open, in-progress |
| [#8733](https://github.com/zeroclaw-labs/zeroclaw/issues/8733) | models.dev catalog discards per-model capabilities (vision) | Open |

### Key Finding

Today's **P1 bug** [#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718) is a particularly bad onboarding failure: `zeroclaw config init` writes a template with values (`max_audio_bytes = 52428800`) that exceed what the downstream parser accepts, silently disabling local_whisper transcription for fresh installs. Combined with the **zombie MCP processes** (#8731) and **browser_open hang** (#8560), new users face a rough first experience. However, all P1 bugs have active discussion and no maintainer pushback—the team appears aware and responsive.

---

## Feature Requests & Roadmap Signals

### User-Requested Features (Highest Signal)

| Issue | Feature | Signal (comments) | Likely next version? |
|-------|---------|-------------------|----------------------|
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | OpenAI Chat Completions compatibility adapter | 3, RFC stage | **Likely** — high demand for Open WebUI/LobeChat interop |
| [#8719](https://github.com/zeroclaw-labs/zeroclaw/issues/8719) | SOP routing: false `when` advances to next step, not end | 1, accepted | **Likely** — part of SOP milestone #8288 |
| [#8754](https://github.com/zeroclaw-labs/zeroclaw/pull/8754) | Schema V4 breaking cut (remove dead config surface) | New PR today | **Definite** — PR is already open |
| [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) | WASM plugin lifecycle hook subscriptions | 1, RFC stage | **Possible** — aligns with plugin ecosystem push |

### Roadmap Signals

The **Schema V4 breaking cut** (#8310, #8754) is now moving with a draft PR—this removes dead config surface for skills, inert tunables, and summary_model cruft. The **zerorelay** (#8358) milestone is being prepositioned for NAT traversal. The **multi-user auth** (#8672) PR is large (XL) and touches security deeply, suggesting it's a priority for enterprise readiness.

**Prediction for v0.8.4/v0.9.0:** Goal mode (split stack #8681), SOP visual authoring (#8590), OpenAI compatibility adapter (#8603), and Schema V4 (#8754) are the most likely shippable candidates.

---

## User Feedback Summary

### Pain Points (Real User Reports)

1. **Onboarding friction** — [#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718): "config init ships config its own daemon rejects, silently disabling transcription" — a new user on a fresh install loses voice features without any error message.
2. **Caching errors on Bedrock** — [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720): "randomly getting a caching error" with Bedrock Nova 2 Lite, no config toggle to disable caching.
3. **Android/Termux install fails** — [#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911): "unknown linux aarch64 binary" installed on Termux, still blocked.
4. **SOP approval bypass** — [#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678): A driver can "bypass an approval gate via sop_advance" — security concern from a user who discovered the flaw.

### Satisfaction Signals

- The **calling for Beta Testers** language in PR #8590 (SOP authoring) indicates the team is confident enough in new features to recruit trial users.
- **Goal mode** has an impressive 8-comment discussion (#8681) with active coordination from the author vrurg.

### Underlying Theme

Users are **excited about SOP and Goal features** but **frustrated by configuration and stability issues** on the path to using them. The project's rapid feature growth is outpacing polish on the base experience (config defaults, error handling, process management).

---

## Backlog Watch

### Issues Stalling or Blocked (Needing Maintainer Attention)

| Issue | Title | Days without maintainer action | Reason |
|-------|-------|-------------------------------|--------|
| [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) | Delete unneeded branches from repo | 52 days (since May 16) | Blocked; flagged `status:blocked`; needs a bulk-deletion policy |
| [#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) | Android Termux Setup | 18 days (since June 18) | Blocked; needs repro; user reports "unknown linux aarch64" binary |
| [#8645](https://github.com/zeroclaw-labs/zeroclaw/issues/8645) | Reload banner shows persistent env-var drift | Closed today! | Resolved after 3 days |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | RFC: Lighter core through external integrations | 70 days (since April 27) | Accepted and in-progress but no visible implementation PR |

### PR Stalling

| PR | Title | Days without update | Status |
|----|-------|---------------------|--------|
| [#8487](https://github.com/zeroclaw-labs/zeroclaw/pull/8487) | fix(web): point favicon to existing logo.png | 7 days (since June 29) | Open, low risk — trivial fix waiting for review |

### Recommendation

The **branch cleanup** (#6715) issue is the longest-standing actionable item—200+ branches is a legit maintenance burden. The **Android/Termux** (#7911) support request has been blocked for 18 days without a maintainer confirming whether official Android support is planned.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*