# AI Open Source Trends 2026-07-06

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-06 13:25 UTC

---

# AI Open Source Trends Report
**Date: 2026-07-06**

---

## 1. Today's Highlights

The AI open-source ecosystem today is dominated by an explosion of **agent skill ecosystems** and **system prompt extraction** tools, signaling a maturing agentic coding landscape. The most viral trend is the proliferation of "skill" repositories—specialized plugins and behavior modifiers for Claude Code, Codex, and Gemini CLI—with projects like `agent-skills`, `taste-skill`, and `claude-skills` collectively gaining over 3,000 stars today. A noteworthy privacy-first AI meeting assistant (`meetily`) built entirely in Rust with local processing is the day's top trending repo at +2,493 stars. The release of a comprehensive system prompt leak repository (`system_prompts_leaks`) providing extracted prompts from Claude, OpenAI, Google, and xAI models has sparked significant community interest. Meanwhile, Alibaba open-sourced `zvec`, a lightweight in-process vector database, and OpenAI's `codex-plugin-cc` enables cross-agent delegation between Codex and Claude Code, highlighting increasing interoperability between competing AI coding platforms.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure (Frameworks, SDKs, Inference Engines, Dev Tools)

| Project | Stars | New Today | Description |
|---------|-------|-----------|-------------|
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 145,697 | +834 | The leading API for web scraping and search at scale, essential data pipeline for AI agents |
| [alibaba/zvec](https://github.com/alibaba/zvec) | 13,197 | +355 | New lightweight, lightning-fast in-process vector database from Alibaba—ideal for embedded AI apps |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 85,482 | — | High-throughput LLM inference engine, the de facto standard for production serving |
| [ollama/ollama](https://github.com/ollama/ollama) | 175,588 | — | Local LLM runner now supporting Kimi-K2.6, GLM-5.1, MiniMax, and more models |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | 314 | — | On-device LLM inference with X-bit quantization—critical for edge AI deployments |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | — | +598 | macOS menu bar utility showing Codex/Claude Code usage stats—community craves API visibility |

### 🤖 AI Agents / Workflows (Agent Frameworks, Automation, Multi-Agent)

| Project | Stars | New Today | Description |
|---------|-------|-----------|-------------|
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | — | +1,114 | Production-grade engineering skills for AI coding agents—today's biggest agent trend |
| [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | — | +611 | 337 skills/plugins for 8+ coding agents covering engineering, marketing, compliance, research |
| [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) | — | +910 | Official OpenAI plugin enabling Codex to work within Claude Code—cross-platform agent integration |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | — | +783 | Agent multiplexer running in the terminal—manages multiple agent sessions simultaneously |
| [gastownhall/gastown](https://github.com/gastownhall/gastown) | — | +293 | Multi-agent workspace manager for orchestrating collaborative AI workflows |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 210,103 | — | Agent harness with skills, instincts, memory, and security—massively popular open-source agent |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,401 | — | The original vision for accessible AI agents, still a major reference implementation |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 91,270 | — | Multi-agent LLM framework for financial trading—highly specialized agent application |

### 📦 AI Applications (Specific Apps, Vertical Solutions)

| Project | Stars | New Today | Description |
|---------|-------|-----------|-------------|
| [Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily) | — | +2,493 | **#1 trending repo**: Privacy-first AI meeting assistant with local transcription, diarization, summarization—100% Rust |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | — | +1,386 | Extracted system prompts from Claude, OpenAI, Google, xAI—viral insight into model behavior |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | — | +1,453 | Gives AI "good taste"—stops generic, boring output; signals community demand for quality control |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | — | +237 | AI agent skill that researches any topic across Reddit, X, YouTube, HN, and synthesizes summaries |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | — | +368 | Give Claude video-watching ability: downloads, extracts frames, transcribes, feeds to Claude |
| [karakeep-app/karakeep](https://github.com/karakeep-app/karakeep) | — | +178 | Self-hostable bookmark-everything app with AI auto-tagging and full-text search |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | — | +471 | Turns WiFi signals into spatial intelligence & vital sign monitoring—novel AI sensing application |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 55,002 | — | LLM-powered multi-market stock analysis with real-time news and decision dashboards |

### 🧠 LLMs / Training (Models, Training Frameworks, Fine-tuning)

| Project | Stars | New Today | Description |
|---------|-------|-----------|-------------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 162,300 | — | The standard model-definition framework for all state-of-the-art ML models |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,162 | — | Comprehensive LLM evaluation platform supporting 100+ datasets and all major models |
| [AarambhDevHub/aarambh-ai](https://github.com/AarambhDevHub/aarambh-ai) | 9 | — | Decoder-only LLM in pure Rust using Candle—no Python, supports LoRA/QLoRA fine-tuning |
| [ELM-Research/ECG-Language-Models](https://github.com/ELM-Research/ECG-Language-Models) | 15 | — | Research framework for ECG-Language Models—AI + healthcare intersection |
| [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) | 606 | — | Resource repository for machine unlearning in LLMs—emerging safety research area |

### 🔍 RAG / Knowledge (Vector Databases, Retrieval-Augmented Generation, Knowledge Management)

| Project | Stars | New Today | Description |
|---------|-------|-----------|-------------|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 84,407 | — | Leading open-source RAG engine combining retrieval with agent capabilities |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 45,093 | — | Cloud-native vector database for scalable ANN search—production RAG backbone |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 78,472 | — | AI agent skill turning code, docs, schemas into queryable knowledge graphs |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 60,210 | — | Universal memory layer for AI agents—persistent context across sessions |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 86,112 | — | Captures and compresses agent session context, injects into future sessions—agent memory management |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 12,651 | — | [MLsys2026] 97% storage savings for private, fast RAG on personal devices |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | 58,427 | — | Lightning-fast search engine with AI-powered hybrid search capabilities |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | 28,375 | — | Comprehensive tutorial notebooks for advanced RAG techniques |

---

## 3. Trend Signal Analysis

**Agent Skill Ecosystems Explode**: The single strongest signal today is the emergence of a full-fledged "skill economy" for AI coding agents. Repositories like `agent-skills`, `claude-skills`, `taste-skill`, and `last30days-skill` collectively added thousands of stars, indicating that the community is moving beyond basic agent usage toward specialization—creating reusable plugins that modify agent behavior, aesthetics, domain knowledge, and output quality. This parallels app store dynamics but for autonomous coding agents.

**Cross-Platform Agent Interoperability Emerges**: OpenAI's `codex-plugin-cc` enabling Codex from Claude Code, combined with projects like `herdr` (agent multiplexer), signals a shift from walled-garden agent ecosystems toward interoperability. Developers increasingly expect their Claude Code, Codex, Gemini CLI, Cursor, and other agents to work together—or be managed from a single terminal.

**Privacy-First, Local-First Applications Rise**: `meetily` (+2,493) leading the trending chart with its 100% local Rust-based meeting transcription is a clear signal. Combined with RuView's WiFi-based sensing, karakeep's self-hostable bookmarking, and the continued strength of Ollama and open-webui, users increasingly demand AI that runs locally, respects privacy, and doesn't require cloud APIs.

**System Prompts as Commodity**: The viral success of `system_prompts_leaks` (+1,386) reflects an insatiable community appetite for understanding how frontier models are configured. This is effectively reverse engineering of proprietary AI behavior—a trend that may accelerate as model capabilities grow and prompt engineering becomes more consequential.

**Rust for AI Surges**: Multiple high-growth projects use Rust: `meetily` (Rust+Whisper), `zvec` (C++ but adjacent), `herdr`, `rig` (LLM framework), `AarambhDevHub` (pure Rust LLM). Rust is becoming the language of choice for performance-critical AI infrastructure, especially inference and local processing.

---

## 4. Community Hot Spots

- **🔸 Agent Skill Marketplaces**: Focus on `addyosmani/agent-skills` and `alirezarezvani/claude-skills`—the ecosystem around configurable, reusable agent behaviors is the fastest-growing segment. Developers can contribute domain-specific skills (marketing, compliance, engineering) and see immediate adoption.

- **🔸 Cross-Platform Agent Bridges**: `openai/codex-plugin-cc` and `ogulcancelik/herdr` represent a growing need for agents that work across competing platforms. Building tools that allow Claude Code, Codex, Gemini CLI, and Cursor to interoperate is a high-value niche.

- **🔸 Privacy-Centric AI Applications**: `Zackriya-Solutions/meetily` demonstrates that "works offline, respects privacy" is a winning product differentiator in AI. Local transcription + summarization without cloud dependency is becoming table stakes for professional tools.

- **🔸 System Prompt Engineering & Leaks**: `asgeirtj/system_prompts_leaks` has opened a new frontier. Understanding how frontier labs configure their models (Claude Fable 5, GPT-5.5, Gemini 3.5) gives developers competitive intelligence—expect more prompt archaeology projects.

- **🔸 Rust-based AI Infrastructure**: The combination of `meetily`, `rig`, `AarambhDevHub`, and `zvec` shows Rust becoming the foundation layer for AI. Developers interested in performance-critical AI infrastructure should monitor the Rust AI ecosystem closely.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*