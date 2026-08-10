# Hugging Face Trending Models Digest 2026-08-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-10 01:55 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-08-10

---

## 1. 🔥 Today's Highlights

The Hugging Face ecosystem is in the midst of a **video generation gold rush**, centered almost entirely around **MiniMax-H3**, which dominates the trending chart with 10+ related entries including the flagship model, a Comfy-Org optimized release, and numerous LoRA adapters, quantizations, and ComfyUI integrations. On the language model front, **Kimi-K3** from Moonshot AI has rocketed to 10.4K likes, signaling strong community enthusiasm for compressed transformer architectures. **DeepSeek-V4-Flash-0731** continues its momentum with strong adoption (868K downloads) and an official GGUF release from Unsloth. Meanwhile, **GLM-5.2** from Zhipu AI (4.9K likes) and **baidu/Unlimited-OCR** (4.0K likes) represent major enterprise contributions gaining substantial traction. The creative/uncensored fine-tune niche (Qwen3.6, Qwen3-VL variants) remains highly active, particularly for image-text-to-text workflows.

---

## 2. 📊 Trending Models by Category

### 🧠 Language Models (LLMs)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,399 | 1.45M | Flagship multimodal LLM from Moonshot AI with compressed-tensors architecture; highest-liked newcomer this week |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,951 | 869K | Flash-tier conversational model in the V4 family; massive download count indicates production adoption |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,914 | 2.49M | Zhipu AI's latest MoE-DSA architecture; one of the most downloaded models this week |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 453 | 86K | Liquid AI's new 2.6B parameter text-generation model; gaining attention for efficiency at small scale |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 290 | 1.1K | Emerging MoE text-generation model from a new lab; early-stage community interest |
| [Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 245 | 4.7K | Fast conversational model with custom code; part of the growing hybrid architecture trend |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,248 | 35K | Hottest video generation release; image-text-to-video capabilities driving massive ecosystem growth |
| [FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,059 | 487K | Sustained leader in text-to-image; most-liked model on the chart this week |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,074 | 4.95M | ComfyUI single-file distribution of MiniMax-H3; enormous download count shows ComfyUI dominance |
| [MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 545 | 0 | Fast LoRA adapter for video generation; first in a wave of community adapters |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 233 | 6.1K | Turbo variant supporting image-to-video pipelines (t2v, i2v, r2v) |
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 260 | 543 | NVIDIA's voice chat model; early adoption but strong research credentials |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 333 | 13K | New TTS model using ArkTTS architecture; gaining traction for speech generation |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,986 | 2.89M | Baidu's OCR model with feature extraction; 2.9M downloads signal strong production usage |
| [Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 211 | 5.7K | Mistral's safety/guardrail model; part of the vLLM-compatible protective AI wave |
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 552 | 18.6K | Qwen3.5-MoE-based coding model; developer-oriented release gaining good traction |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 628 | 189K | Official Unsloth GGUF version of DeepSeek-V4-Flash; essential for local inference |
| [Qwen3.6-27B-Fable-Fusion GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,808 | 2.39M | Most popular uncensored/creative fine-tune; 2.4M downloads show massive community demand |
| [Qwen3.6-35B-A3B-Uncensored-Genesis GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 455 | 396K | MoE uncensored variant with strong adoption; Hermes v7 lineage |
| [MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 188 | 161K | Community GGUF quantizations enabling local video generation runs |
| [LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 175 | 68K | Official llama.cpp-compatible GGUF for Liquid's small model |
| [Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 155 | 511K | Mixed-precision optimization for MiniMax-H3; 511K downloads highlights demand for efficient video gen |
| [Qwen3-VL-32B-Ultra-Heretic-H3 INT8](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 418 | 0 | ComfyUI-integrated vision-language model merging Qwen3-VL with H3 tech |

---

## 3. 🌐 Ecosystem Signal

**MiniMax-H3 is the defining release of this cycle.** The ecosystem around it has grown to include ComfyUI single-file distributions (4.9M downloads), multiple quantization formats (NVFP4, INT4/INT8), LoRA adapters for turbo-speed generation, and experimental text-encoder merges with Qwen3-VL. This mirrors how SDXL and FLUX each created their own miniature economies — but H3's video capabilities appear to be accelerating adoption even faster.

**Enterprise AI is a growing force on HF.** Baidu's Unlimited-OCR (2.9M downloads), Zhipi's GLM-5.2 (2.5M downloads), and NVIDIA's VoiceChat-11B all demonstrate that corporate labs are now actively publishing production-grade models on the hub. The competition between zai-org/GLM-5.2, moonshotai/Kimi-K3, and deepseek-ai/DeepSeek-V4 represents a new era where Chinese AI labs are among the most visible open-weight publishers.

**Open-weight ecosystem remains extraordinarily active.** The volume and speed of community fine-tunes and GGUF conversions — from Unsloth, DavidAU, LuffyTheFox, and countless others — shows that open weights are enabling a robust local-first AI community. Unsloth has become an essential infrastructure player for production local inference.

**The uncensored/creative fine-tune niche is expanding into multimodal territory.** Models like Qwen3-VL-32B-Ultra-Heretic and the various Qwen3.6 creative variants suggest that demand for less-restricted creative AI remains a significant (if niche) driver of downloads and community energy.

**Efficiency-focused architectures are rising.** Both LiquidAI's LFM2.5-2.6B and inclusionAI's Ling-3.0-flash point toward a growing emphasis on smaller, faster models that run at the edge. Combined with the compression work on Kimi-K3, this could signal a shift toward efficiency as a first-class feature.

---

## 4. 💎 Worth Exploring

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — most-liked new release this week (10.4K likes) with 1.45M downloads. The compressed-tensors architecture is a strong signal for where multimodal LLM design is heading. Worth studying for the architectural innovation and to understand why the community is excited.

2. **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** — with 4.95M downloads, this is the single most-adopted model on this chart. Understanding the MiniMax-H3 + ComfyUI ecosystem is essential for anyone working on video generation tooling or creative workflows.

3. **[NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)** — the lowest-profile "big name" entry here with only 543 downloads, but NVIDIA's voice chat model with three arXiv-paper backing is likely an early preview of a major upcoming trend — voice-native AI assistants and real-time conversational interfaces.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*