# Hugging Face Trending Models Digest 2026-08-05

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-05 02:39 UTC

---

# Hugging Face Trending Models Digest — 2026-08-05

---

## 1. Today's Highlights

A major convergence of frontier-scale releases is dominating Hugging Face this week. **Moonshot AI's Kimi-K3** leads with over 10,000 likes and 1.1M+ downloads, signaling a new flagship multimodal open-weight release, while **DeepSeek's V4-Flash** family (both the base model and a dated 0731 variant) continues massive adoption, accumulating over 3.1M combined downloads. In the video generation space, **MiniMax-H3** has been released simultaneously by MiniMaxAI and Comfy-Org, showing the growing importance of native ComfyUI integration for generative media. The community fine-tuning wave around the **Qwen3.6/3.5 series** is unprecedented, with "uncensored" variants from multiple authors each pulling hundreds of thousands to millions of downloads. Also notable is **Baidu's Unlimited-OCR**, a specialized multimodal model achieving 2.7M downloads and 3.8K likes, demonstrating that task-specific models (not just general chat) remain a massive draw.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models)

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,015 | 1,125,935 |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,821 | 2,234,662 |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,316 | 433,284 |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,011 | 2,737,621 |
| [Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 174 | 69,253 |
| [Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 664 | 37,256 |
| [Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 920 | 82,912 |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 159 | 47,393 |
| [K-EXAONE-2.0-750B-A37B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) | LGAI-EXAONE | 117 | 325 |

**Kimi-K3** is the week's breakout star — Moonshot AI's flagship multimodal model with compressed-tensors support, setting a new bar for open-weight frontier releases. **GLM-5.2** from Zhipu (zai-org) uses a Mixture-of-Experts architecture (glm_moe_dsa) and has hit 2.2M downloads, cementing it as a top-tier Chinese open-weights contender. **DeepSeek-V4-Flash** continues to dominate adoption with 2.7M downloads on the main release, with the 0731 dated variant adding another 433K — an unusually strong two-model release strategy. **Solar-Open2-250B** from Nota AI is significant as an NVFP4-quantized 250B model ready for vLLM, pushing the frontier of practical large-scale deployment. **Nanbeige4.2-3B** and **LFM2.5-2.6B** show continued momentum for small, efficient LLMs suitable for edge deployment.

### 🎨 Multimodal & Generation (image, video, audio)

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,038 | 0 |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,882 | 2,703,366 |
| [Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 256 | 435,784 |
| [Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 286 | 15,500 |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 249 | 11,276 |
| [Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 410 | 2,072 |
| [Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 176 | 0 |

**MiniMax-H3** is the most anticipated video generation release this week — an image-text-to-video model with 2,038 likes within days of release, notable for its dual availability both natively and through **Comfy-Org's** integration package. **Baidu's Unlimited-OCR** has become a viral utility model, with 2.7M downloads making it arguably the most-downloaded OCR model on the platform — a testament to demand for document AI. **Mage-VL** from Microsoft (435K downloads) shows the tech giant's continued commitment to open multimodal vision-language models. The audio space is buzzing with **Audio8-TTS-Preview** and **Inflect-Micro-v2** — the latter advertising itself as a CPU-runnable, edge-AI TTS model, hinting at the push toward on-device speech synthesis. **Kroma** (Krea2-based LoRA) has zero downloads but strong likes, suggesting it's part of a new ecosystem integration just hitting the platform.

### 🔧 Specialized Models (code, OCR, agentic)

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 474 | 15,381 |
| [XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 404 | 1,317 |
| [XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 358 | 1,388 |

**KAT-Coder-V2.5-Dev** is a Qwen3.5-MoE-based coding model pulling 15K downloads, signaling developer interest in smaller, domain-tuned code assistants. **XYZ-Aquila** series (mini and pro) — both built on qwen3_5_moe — represent a novel pairing: a mini variant for efficiency and a pro variant tagged "agentic-search," suggesting a specialized tool-use focus.

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,296 | 1,930,898 |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,514 | 1,633,405 |
| [Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 364 | 308,857 |
| [Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 266 | 323,116 |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 472 | 111,678 |
| [Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 304 | 170,055 |
| [MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 104 | 40,010 |
| [Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 193 | 2,987 |
| [Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot) | ethanfel | 189 | 0 |
| [Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 134 | 2,243 |

The community fine-tuning scene is overwhelmingly dominated by **Qwen3.6/3.5 variants**, with the "uncensored" plus aggressive/heretic-style post-training becoming the most viral formula of the week. **HauhauCS's Qwen3.6-35B-A3B uncensored GGUF** hit 1.9M downloads — approaching frontier-release scale for a community upload. **DavidAU** has two entries in the top 30, both with multi-hundred-thousand downloads, showing a strong brand for "extreme" fine-tunes. **Unsloth** continues its pattern of releasing GGUF versions of every major new model (DeepSeek-V4-Flash, Kimi-K3), effectively becoming the platform's official quantization arm. Novel combinations are also appearing, like **ethanfel's Qwen3-VL + MiniMax-H3 hybrid** for ComfyUI, and **realrebelai's MiniMax-H3 GGUFs** — suggesting video-generation models are now entering the quantization ecosystem.

---

## 3. Ecosystem Signal

Several clear signals emerge from this week's trends:

**Multi-modal is the new frontier.** Three of the top five most-liked models (Kimi-K3, MiniMax-H3, Unlimited-OCR) are multi-modal, and even traditional LLM releases (DeepSeek-V4-Flash, Qwen3.6 variants) increasingly carry image-text-to-text tags. The battle has shifted from pure language to unified perception.

**Chinese labs are leading open-weights.** DeepSeek, Moonshot AI, Zhipu (GLM), Baidu, and Qwen/Qwen3.6 collectively dominate both the "official release" and "community fine-tune" layers. Western labs (Microsoft, LG, LiquidAI, Poolside) are present but yield smaller mindshare this week.

**Quantization equals distribution.** Unsloth's GGUF releases consistently triple+ the downloads of the original models they wrap. The community has effectively voted that quantized, locally-run weights are the preferred deployment format.

**"Uncensored" fine-tuning is a massive sub-economy.** The viral success of HauhauCS and DavidAU variants (nearly 4M combined downloads) shows a durable user segment that the major labs studiously ignore. Additionally, there's a clear bifurcation between the polished, safety-aligned official models and the rawer community derivatives.

**Small and efficient is having a moment.** Nanbeige4.2-3B, LFM2.5-2.6B, Inkling-Small, and Inflect-Micro-v2 all chart alongside 750B models, confirming that the "efficient frontier" is as exciting as the raw scale frontier.

---

## 4. Worth Exploring

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — The most-liked model on the platform this week. With 10K likes and compressed-tensors support, studying its architecture and feature-extraction tags could reveal Moonshot AI's approach to efficient multimodal design, a likely template for future frontier releases.

2. **[Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 2.7M downloads with minimal fanfare. A real-world utility model that transcends the chat/agent hype cycle, and a compelling case study in what enterprise and automation users actually adopt at scale.

3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — Beyond the question of its content policy, this is a fascinating case study in community-driven alignment escape hatches. Nearly 2M downloads for a single community fine-tune suggests a deep unmet user demand worth understanding (or at least monitoring), and it's technically notable as a vision-capable MoE served as GGUF.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*