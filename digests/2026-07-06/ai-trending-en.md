# AI Open Source Trends 2026-07-06

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-06 15:02 UTC

---

# AI Open Source Trends Report — 2026-07-06

## 1. Today's Highlights

The open-source AI ecosystem today is dominated by a **surge in agent skill/plugin ecosystems** and **privacy-first local AI tools**. The trending list reveals explosive community interest in "skills" repositories — lightweight, reusable capability modules for coding agents like Claude Code, Codex, and Gemini CLI — with repositories like `alirezarezvani/claude-skills` (337 skills) and `addyosmani/agent-skills` accumulating thousands of stars. Simultaneously, **system prompt extraction** (`asgeirtj/system_prompts_leaks`) and **local meeting transcription** (`Zackriya-Solutions/meetily`) signal growing demand for transparency and privacy in AI systems. The ecosystem is fragmenting into specialized agent capabilities rather than monolithic frameworks, with Rust emerging as a preferred language for performance-critical AI edge tools.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure (Frameworks, SDKs, Inference Engines, Dev Tools, CLI)

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** ⭐145,818 (+834 today)
  The leading API for web scraping, searching, and AI agent data extraction at scale — essential infrastructure for grounding LLMs with real-time web data.

- **[alibaba/zvec](https://github.com/alibaba/zvec)** ⭐13,234 (+355 today)
  A lightweight, in-process vector database from Alibaba, offering lightning-fast similarity search without external dependencies — positioning as a simpler alternative to Milvus/Weaviate for embedded AI workflows.

- **[googleworkspace/cli](https://github.com/googleworkspace/cli)** ⭐29,455
  Google Workspace CLI with built-in AI agent skills for Drive, Gmail, Calendar — enabling agents to directly interact with enterprise productivity tools.

- **[Picovoice/picollm](https://github.com/Picovoice/picollm)** ⭐314
  On-device LLM inference engine using X-bit quantization, enabling totally private, offline AI inference without cloud dependencies.

- **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)** ⭐7,842
  Modular LLM application framework in Rust, gaining traction for building composable, type-safe AI pipelines with minimal overhead.

- **[multiple-agents/openclaude](https://github.com/Gitlawb/openclaude)** ⭐29,814
  A universal agent runtime that runs anywhere and uses anything — aiming to be the cross-platform agent operating system.

### 🤖 AI Agents / Workflows (Agent Frameworks, Automation, Multi-Agent Systems)

- **[alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills)** ⭐+611 today
  337 pre-built Claude Code skills spanning marketing, compliance, finance, research — the most comprehensive agent skill marketplace to date.

- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** ⭐+1,114 today
  Production-grade engineering skills for AI coding agents, from Google Chrome engineer Addy Osmani — sets a quality bar for agent skill development.

- **[gastownhall/gastown](https://github.com/gastownhall/gastown)** ⭐+293 today
  Multi-agent workspace manager in Go, enabling orchestration of multiple AI agents in a shared environment.

- **[ogulcancelik/herdr](https://github.com/ogulcancelik/herdr)** ⭐+783 today
  "Agent multiplexer" that lives in your terminal — routes queries to different AI agents based on capability, creating a meta-agent experience.

- **[openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc)** ⭐+910 today
  Official OpenAI plugin enabling Codex (GitHub's AI) to be used from Claude Code — notable cross-platform agent interoperability effort.

- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** ⭐91,303
  Multi-agent LLM financial trading framework — applying agent orchestration to quantitative finance.

- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** ⭐103,084
  Makes websites accessible for AI agents — enabling automated web tasks through browser control.

- **[esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)** ⭐26,160
  DeepSeek-native AI coding agent engineered for prefix-cache stability — designed to run continuously in terminal.

### 📦 AI Applications (Specific Apps, Vertical Solutions)

- **[Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily)** ⭐+2,493 today
  100% local AI meeting assistant with live transcription (Whisper/Parakeet), speaker diarization, and Ollama summarization built on Rust — the #1 trending AI project today by stars.

- **[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)** ⭐+1,386 today
  Extracted system prompts from Anthropic, OpenAI, Google, xAI products — unprecedented transparency into how top AI products are configured.

- **[bradautomates/claude-video](https://github.com/bradautomates/claude-video)** ⭐+368 today
  Gives Claude the ability to watch videos — downloads, extracts frames, transcribes, and feeds everything to the LLM for video understanding.

- **[karakeep-app/karakeep](https://github.com/karakeep-app/karakeep)** ⭐+178 today
  Self-hostable bookmark-everything app with AI auto-tagging and full-text search — privacy-first knowledge management.

- **[ruvnet/RuView](https://github.com/ruvnet/RuView)** ⭐+471 today
  Turns commodity WiFi signals into spatial intelligence and vital sign monitoring — novel AI sensor fusion application.

- **[steipete/CodexBar](https://github.com/steipete/CodexBar)** ⭐+598 today
  Usage statistics for OpenAI Codex and Claude Code — developer tooling for tracking AI coding agent costs.

- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** ⭐48,223
  AI productivity studio with smart chat, autonomous agents, and 300+ assistants — unified access to frontier LLMs.

### 🧠 LLMs / Training (Model Weights, Training Frameworks, Fine-Tuning Tools)

- **[huggingface/transformers](https://github.com/huggingface/transformers)** ⭐162,303
  The de facto model definition framework for state-of-the-art ML across text, vision, audio — continues as the backbone of the open-source LLM ecosystem.

- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐85,487
  High-throughput LLM inference engine — the standard for production model serving with PagedAttention optimization.

- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** ⭐7,162
  Comprehensive LLM evaluation platform supporting 100+ datasets and all major models — critical for benchmarking.

- **[AarambhDevHub/aarambh-ai](https://github.com/AarambhDevHub/aarambh-ai)** ⭐9
  Decoder-only LLM built from scratch in Rust using Candle — tiny (25M) to large (1.3B) — showcases pure Rust ML capability.

### 🔍 RAG / Knowledge (Vector Databases, Retrieval-Augmented Generation, Knowledge Management)

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐84,410
  Leading open-source RAG engine fusing retrieval-augmented generation with agent capabilities for LLM context layers.

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐60,216
  Universal memory layer for AI agents — enabling persistent, contextual memory across agent sessions.

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** ⭐86,126
  Persistent context across sessions for any agent — compresses session data and injects relevant context into future interactions.

- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** ⭐45,093
  Cloud-native vector database for scalable ANN search — the enterprise standard for RAG infrastructure.

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** ⭐78,517
  Turns any codebase, docs, or papers into a queryable knowledge graph — knowledge graph RAG bridging code and documentation.

- **[pathwaycom/llm-app](https://github.com/pathwaycom/llm-app)** ⭐59,113
  Ready-to-run cloud templates for RAG pipelines with live data sync from 10+ enterprise sources.

- **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** ⭐12,654
  (MLsys2026) RAG with 97% storage savings while maintaining accuracy and privacy — pushes efficiency boundaries for personal-device RAG.

---

## 3. Trend Signal Analysis

**Explosive growth of agent skill ecosystems.** The most striking signal today is the meteoric rise of "skills" repositories — modular, reusable capability packages for coding agents. `alirezarezvani/claude-skills`, `addyosmani/agent-skills`, and `Leonxlnx/taste-skill` collectively accumulated over 3,000 stars today, suggesting the community is moving beyond monolithic agent frameworks toward **composable, domain-specific agent capabilities**. This mirrors the plugin/app store dynamics seen in developer tools and signals a maturing agent ecosystem where users assemble custom agents from skill marketplaces rather than building from scratch.

**Privacy-first, local-first AI is accelerating.** `Zackriya-Solutions/meetily` (2,493 today's stars) and `karakeep-app/karakeep` demonstrate strong demand for AI tools that run entirely on-device. The emphasis on Rust in these projects (`meetily`, `zvec`, `rig`, `picollm`) indicates the community's preference for performance-critical, privacy-preserving AI infrastructure — a departure from Python-heavy previous eras.

**System prompt transparency as a new category.** The `system_prompts_leaks` repository (1,386 today's stars) represents an unprecedented community effort to document and expose how major AI products (Anthropic, OpenAI, Google, xAI) configure their models. This signals growing demand for **auditability and reproducibility** in commercial AI systems, potentially driving regulatory interest.

**Agent multiplexing and cross-platform interoperability.** Projects like `herdr` (agent multiplexer) and `openai/codex-plugin-cc` (Codex-from-Claude) suggest the next frontier is **inter-agent communication** — allowing users to route tasks across multiple AI providers and agent systems seamlessly.

---

## 4. Community Hot Spots

- **Agent Skill Marketplaces** — `alirezarezvani/claude-skills` (337 skills) and `addyosmani/agent-skills` are creating de facto skill repositories. Developers should watch for emerging skill packaging standards and distribution mechanisms.

- **Local AI Meeting Assistants** — `Zackriya-Solutions/meetily` (2,493 stars today) is the breakout hit. The combination of Rust performance, local processing, and Ollama integration represents a template for privacy-respecting AI applications that compete with cloud offerings.

- **System Prompt Archaeology** — `asgeirtj/system_prompts_leaks` is creating the first public repository of commercial AI system prompts. This enables prompt engineer reverse-engineering and raises important questions about IP, transparency, and model behavior auditing.

- **Cross-Platform Agent Integration** — `openai/codex-plugin-cc` and `ogulcancelik/herdr` point toward a future where agents from different vendors interoperate. Developers should track emerging protocols for inter-agent communication.

- **Embedded Vector Databases** — `alibaba/zvec` (lightweight in-process vector DB) joins `lancedb` as alternatives to heavy distributed systems like Milvus. This trend favors simpler, faster embedded solutions for edge and personal-device AI workloads.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*