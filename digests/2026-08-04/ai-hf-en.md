# Hugging Face Trending Models Digest 2026-08-04

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-04 02:41 UTC

---

# 🤖 Hugging Face Trending Models Digest — 2026-08-04

---

## 1. Today's Highlights

**Moonshot AI's Kimi-K3** dominates the chart with nearly 10K weekly likes, signaling a major shift toward compressed, feature-extraction-capable multimodal models. **DeepSeek** cements its position as the open-weight frontier leader with two V4-Flash variants in the top 30, while **Zhipu AI's GLM-5.2** and **Baidu's Unlimited-OCR** demonstrate that Chinese labs are now setting the pace in both general-purpose and domain-specific AI. The Qwen3.6/3.5 MoE family has exploded into a vibrant fine-tuning ecosystem — nearly a quarter of this week's list consists of community GGUF derivatives and uncensored variants. Video generation entered the mainstream with **MiniMax-H3**, and the rapid emergence of **compressed-tensors** and **NVFP4 quantization** suggests efficiency is now the industry's central battleground.

---

## 2. Trending Models by Category

### 🧠 Language Models

| Model | Author | Likes / Downloads | Why It's Trending |
|-------|--------|-------------------|-------------------|
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,077 / 236K | Latest iteration of DeepSeek's flagship Flash line; improved conversational performance and broader context handling. |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,991 / 2.7M | The base V4-Flash release with massive download volume — the reference open-weight model this week. |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,798 / 2.2M | Zhipu's latest MoE model with novel DSA (dynamic sparse attention) architecture; top-tier performance with efficient inference. |
| [Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 652 / 34.7K | Compact 3B model punching well above its weight — popular for edge and consumer-hardware deployments. |
| [Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 910 / 81.6K | Poolside's flagship coding-adjacent LLM; strong adoption among developer tooling and agent frameworks. |
| [Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 169 / 68.8K | A 250B-scale model quantized to NVFP4 — a landmark for enterprise-grade inference efficiency. |
| [XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 391 / 1.1K | Lightweight Qwen3.5-MoE derivative with impressive reasoning-to-cost ratio; early adoption is strong. |
| [XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 351 / 1.2K | Pro variant with agentic-search tooling baked in — a signal that agent-native LLMs are now a distinct category. |
| [Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think) | amd | 150 / 2.1K | AMD's DeepSeek-v3-based MoE with explicit reasoning ("Think") mode; notable for hardware-vendor LLM releases. |

### 🎨 Multimodal & Generation

| Model | Author | Likes / Downloads | Why It's Trending |
|-------|--------|-------------------|-------------------|
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,855 / 967K | The week's biggest release — a compressed multimodal model with feature-extraction support; likely a state-of-the-art efficiency play. |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 1,485 / 0 | Flagship image-to-video generation model; zero downloads yet, but high interest signals imminent mass adoption. |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,848 / 2.6M | Baidu's universal OCR model; 2.6M downloads this week alone makes it the most-downloaded model on the list. |
| [Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 264 / 8.5K | Compact multimodal conversational model; gaining traction for on-device vision-language use cases. |
| [Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 233 / 431K | Microsoft's vision-language model with 431K downloads; solid multimodal workhorse with broad ecosystem support. |
| [Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 268 / 3K | Computer-use–optimized multimodal model — built for GUI agents and screen understanding. |
| [Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 160 / 0 | Krea2-based LoRA for text-to-image in ComfyUI; represents the ongoing LoRA-driven customization boom. |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 213 / 4.6K | ArkTTS-based audio model; part of the fast-moving open TTS wave. |
| [Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 399 / 1.9K | CPU-first, edge-optimized TTS — a clear signal that local speech synthesis is a priority for the community. |

### 🔧 Specialized Models

| Model | Author | Likes / Downloads | Why It's Trending |
|-------|--------|-------------------|-------------------|
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 446 / 14.3K | Qwen3.5-MoE–based coding model; a strong open alternative in the code-generation arena. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes / Downloads | Why It's Trending |
|-------|--------|-------------------|-------------------|
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,440 / 1.55M | The archetype of the "uncensored max-MTP" community fine-tune genre; 1.55M downloads shows this category's immense reach. |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 430 / 69.7K | Unsloth's official GGUF quantization of the newest DeepSeek release; the go-to for local deployment. |
| [Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 282 / 128K | Instant GGUF availability for Kimi-K3 — 128K downloads confirms the compressed-tensor momentum. |
| [Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,271 / 1.9M | The highest-liked community fine-tune of the week; "aggressive uncensored" MoE variant with vision support. |
| [Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 344 / 287K | Hermes-style fine-tune with GGUF packaging; strong alternative in the 35B-A3B uncensored tier. |
| [Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 157 / 2.7K | Community MoE fine-tune from EschaLabs; focused on quality-of-life improvements for the 35B-A3B base. |
| [Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 239 / 304K | Smaller-parameter uncensored variant with NEO-imatrix and MTP support; 304K downloads solidifies the pattern. |
| [MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 453 / 2 | ComfyUI integration release for MiniMax-H3; signals video-gen tooling consolidation. |
| [Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot) | ethanfel | 107 / 0 | Cross-pollination of Qwen3-VL + MiniMax-H3 in a ComfyUI-friendly INT8 package. |
| [Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 119 / 1.7K | Qwen3.5-based community fine-tune with multimodal support. |

---

## 3. Ecosystem Signal

**Qwen has become the Linux of AI.** The Qwen3.5/3.6 MoE family accounts for roughly one-third of this week's trending list across every category — base models, uncensored fine-tunes, GGUF quantizations, and specialized code/agent variants. The "uncensored + max-MTP + GGUF" naming convention from DavidAU and peers has evolved into a recognized genre with millions of cumulative downloads, indicating that a significant portion of the open-weight community prioritizes local, unrestricted, speed-optimized inference.

**Compressed-tensors and NVFP4 quantization mark a new efficiency era** — Kimi-K3 with compressed-tensors support and Solar-Open2's NVFP4 quantized release suggest that serving cost, not raw capability, is now the binding constraint. Expect more 4-bit and sub-4-bit formats to trend in coming weeks.

**Chinese labs are winning the open-weight race.** Moonshot, DeepSeek, Zhipu, and Baidu collectively hold the top spots in both likes and downloads. Meanwhile, Microsoft's quiet release of Mage-VL and Fara1.5-27B reinforces that even Western giants are now following the open-weights playbook, rather than leading it.

**Video generation is at an inflection point** — MiniMax-H3's massive like count with zero downloads indicates that the community is poised for a surge in video-gen adoption as ComfyUI and API integrations materialize.

---

## 4. Worth Exploring

**[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — With 9,855 likes in a single week, this is the most significant release of the month. Its combination of compressed-tensors and feature-extraction capabilities suggests a new architecture class worth studying deeply.

**[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — The most-downloaded community fine-tune of the week (1.9M). Understanding what makes this "aggressive" variant so compelling will explain the broader uncensored-MoE trend.

**[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 2.6M downloads in one week is extraordinary. This model likely signals the consolidation of OCR into universal, all-language-capable tooling — a must-try for any document-processing pipeline.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*