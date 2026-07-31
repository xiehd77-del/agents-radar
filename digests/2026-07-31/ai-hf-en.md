# Hugging Face Trending Models Digest 2026-07-31

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-31 02:56 UTC

---

# 🤗 Hugging Face Trending Models Digest
**Date: 2026-07-31**

---

## 1. Today's Highlights

The ecosystem is dominated by the explosive momentum of **Qwen3.6-35B-A3B** — the official release has crossed 6.1M downloads while community GGUF fine-tunes (uncensored variants from HauhauCS and LuffyTheFox) are racking up millions of downloads each, signaling a massive open-source appetite for small-MoE multimodal models. **Kimi-K3** from Moonshot AI leads in weekly likes (9,029) as a compressed, feature-extraction-optimized multimodal model, with unsloth shipping GGUF versions within days of release. OCR and specialized vision models are surging: **baidu/Unlimited-OCR** (2.6M downloads, 3,585 likes) and **ATH-MaaS/OvisOCR2** (57K downloads) indicate OCR is becoming a hot application category. On the efficiency frontier, **prism-ml/Ternary-Bonsai-27B** (2-bit ternary quantization, 1,116 likes) and **nota-ai/Solar-Open2-250B-Nota-NVFP4** showcase rapid advancement in extreme compression. Finally, **GLM-5.2** (zai-org) continues its steady climb with 1.5M downloads, cementing the GLM family as a top-tier open-weight contender.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes / Downloads | Why it's trending |
|---|---|---|---|
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,683 / 1.53M | Flagship conversational MoE (GLM MoE DSA architecture) — major open-weight contender with massive adoption. |
| [Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 847 / 73K | Enterprise-grade code/agent-focused text-generation model, now with official unsloth GGUF support. |
| [Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 704 / 12.4K | Massive 250B open-weight model that's driving a wave of quantization variants. |
| [Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 582 / 44.5K | Compact 3B LLM with strong performance-per-parameter — ideal for edge deployment. |
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 351 / 9.2K | Qwen3.5-MoE based coding specialist, shows Qwen base adoption for verticals. |
| [antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 240 / 9.8K | 1B GraniteMoEHybrid model focused on security — demonstrates hybrid architectures at small scale. |
| [Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think) | amd | 94 / 1.3K | AMD's DeepSeek-V3-style reasoning MoE — new entrant for AMD hardware ecosystem. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes / Downloads | Why it's trending |
|---|---|---|---|
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,029 / 838K | The #1 trend — compressed multimodal model with feature-extraction support, pushing efficiency in vision-language. |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,585 / 2.6M | Baidu's universal OCR model — major milestone for document AI with massive download velocity. |
| [Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,654 / 45.7K | Multimodal conversational model generating serious community traction. |
| [OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 352 / 57.4K | Qwen3.5-based OCR model — validates OCR as a breakout category. |
| [Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 223 / 2.3K | Microsoft's computer-use multimodal model built on Qwen3.5 — agentic vision rising. |
| [Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 122 / 2.9K | Microsoft's new multimodal vision-language model. |
| [Mage-Flow](https://huggingface.co/Comfy-Org/Mage-Flow) | Comfy-Org | 97 / 44.7K | ComfyUI-native diffusion pipeline for the Mage series — ecosystem infrastructure. |

**Speech & Audio:**

| Model | Author | Likes / Downloads | Why it's trending |
|---|---|---|---|
| [Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 322 / 1.1K | Ultra-efficient CPU/edge TTS — mobile-friendly speech synthesis. |
| [Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2) | owensong | 119 / 654 | Nano-variant TTS, pairs with Micro-v2 for tiered edge deployment. |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 127 / 225 | New ArkTTS-based preview — early-stage but notable audio entry. |
| [VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 120 / 3.9K | BitNet-compressed ASR from Microsoft — efficient speech recognition. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes / Downloads | Why it's trending |
|---|---|---|---|
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 351 / 9.2K | Purpose-built coding model improving Qwen3.5-MoE for software tasks. |
| [Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 847 / 73K | Enterprise agentic coding model with structured generation support. |
| [antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 240 / 9.8K | Security-focused 1B model — niche vertical specialization on hybrid MoE. |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,585 / 2.6M | The definitive OCR model — document processing and digitization. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes / Downloads | Why it's trending |
|---|---|---|---|
| [Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,191 / 1.8M | The biggest uncensored Qwen3.6 MoE fine-tune — massive community demand. |
| [Qwen3.6-27B-Fable-Fusion-711](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,042 / 956K | DAU's "Heretic/NEO" lineage — premium GGUF fine-tunes with MTP support. |
| [Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,116 / 698K | **2-bit ternary quantization** of a 27B model — extreme compression frontier. |
| [Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 241 / 162K | Hermes-V6 recipe applied to Qwen3.6 MoE — popular community fine-tune. |
| [Qwen3.5-9B-The-Defiant-Fable-Uncensored](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 159 / 248K | NEO IMARIXX series — prolific DAU output continues across Qwen sizes. |
| [Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 209 / 12.2K | Official-style GGUF release of Kimi-K3 from unsloth — top-tier quantization quality. |
| [Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 259 / 159K | Unsloth's GGUF of poolside's model — strong downloads for enterprise-adjacent model. |
| [Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 148 / 7.8K | NVIDIA FP4 quant of Solar 250B — cutting-edge 4-bit precision format. |
| [Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 95 / 201 | 2-bit weight compression experiment on Qwen3.6 MoE — emerging research. |
| [Kimi-K3 (unsloth)](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 176 / 766 | Unsloth's take on Kimi-K3 with compressed-tensors. |
| [Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 126 / 840 | Smaller variant of the Inkling multimodal family. |
| [Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,595 / 6.1M | The official Qwen3.6 MoE — foundation model driving the entire ecosystem's fine-tuning wave. |

---

## 3. Ecosystem Signal

**Qwen is the undisputed ecosystem backbone.** The Qwen3.6-35B-A3B model family (official + community fine-tunes) dominates with over 8M combined downloads and 6K+ combined likes. The "small MoE + multimodal" formula — 35B total params with ~3B active — has become the sweet spot for the community: powerful enough for real tasks, efficient enough for consumer hardware, and the vision capability makes it a one-model-for-everything solution. This is accelerating the trend of **uncensored fine-tunes** (HauhauCS, DavidAU, LuffyTheFox) as major distribution channels, with the HauhauCS variant alone exceeding 1.8M downloads.

**Efficiency is the second dominant theme.** Ternary 2-bit (prism-ml), NVFP4 (nota-ai), BitNet-based ASR (microsoft), and compressed-tensors (Kimi-K3) all signal a race toward running frontier-class models on consumer and edge hardware. The prominence of GGUF from unsloth (a pattern across at least 4 model families this week) shows that **local inference is now a first-class target**, not an afterthought.

**OCR is the breakout vertical** — Baidu's Unlimited-OCR and ATH-MaaS's OvisOCR2 are both drawing massive downloads, suggesting document AI is hitting mainstream enterprise adoption. Meanwhile, open-weight momentum (GLM-5.2, Solar-Open2, Laguna, Kimi-K3) continues to erode the proprietary advantage, with innovations like ternary quantization and NVFP4 giving the open ecosystem a compression advantage that proprietary vendors cannot easily match.

---

## 4. Worth Exploring

1. **[Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — The foundation model where all the ecosystem energy is converging. Study its architecture (small MoE + multimodal) and the thriving fine-tune ecosystem around it — this is the pattern to understand for 2026 release cycles.

2. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — The #1 trending model with 9K+ weekly likes. Its compressed-tensors approach to multimodal feature extraction could represent the next architectural direction for on-device vision-language models — worth studying even if you don't deploy it.

3. **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — A 27B model at 2-bit ternary precision with 698K downloads (not just novelty — real adoption). This is the vanguard of extreme compression enabling local LLMs at scale. Understanding why it works (and its limits) will be critical for anyone shipping edge LLM products in the next year.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*