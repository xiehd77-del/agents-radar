# Hugging Face Trending Models Digest 2026-08-15

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-15 01:18 UTC

---

# 🤖 Hugging Face Trending Models Digest — 2026-08-15

---

## 1. Today's Highlights

The Hugging Face ecosystem is clearly dominated by **multimodal and video-generation models**, with MiniMax-H3 and its derivatives (turbo variants, LoRAs, ComfyUI ports) accounting for nearly a third of today's top 30. Qwen's **Qwen3.8-27B** and **Qwen3.8-2.4T-A95B** MoE model are making strong waves, alongside **Kimi-K3** which has exploded to over 10.6K likes — the highest on the list. DeepSeek's V4 line, particularly the Flash variant, continues to accumulate massive download counts. The community is heavily invested in **quantization formats (GGUF, FP8)** and **LoRA fine-tunes**, signaling a maturation of the open-weight ecosystem where accessibility and customization are now the primary drivers.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why it's trending |
|-------|--------|-------|-----------|-------------------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 9,014 | 2 | Flagship multimodal-capable LLM from Qwen, blending text and image understanding with conversational interfaces |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 917 | 3,832 | Massive 2.4T-parameter Mixture-of-Experts model with 95B active parameters — the cutting edge of MoE scaling |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,383 | 1,606,491 | Fast, efficient text-generation model from DeepSeek's V4 line, attracting huge download volumes |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 433 | 245 | The premium sibling of V4-Flash, focused on maximum performance for demanding text tasks |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,673 | 1,974,635 | Kimi's next-gen multimodal LLM with compressed tensors — the **highest likes** on today's list |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 257 | 119,572 | NVIDIA's 30B (3B active) model with NVFP4 quantization for efficient deployment |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 143 | 34,137 | BF16 variant of Nemotron Lightning for those prioritizing precision |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 615 | 124,172 | Liquid's compact 2.6B model — proof that small LMs remain highly relevant |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why it's trending |
|-------|--------|-------|-----------|-------------------|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,920 | 1,997,541 | The **dominant video-gen model** of the moment — text/image-to-video with ~2M downloads |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 858 | 207,830 | Versatile video model supporting image, text, and video-to-video generation |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 652 | 63 | Fresh text-to-music generation model extending the MiniMax family |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 493 | 149,865 | Turbo-speed variant of MiniMax-H3 for rapid video creation |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,318 | 11,768,622 | The ComfyUI-native MiniMax-H3 — the **most downloaded** model today (11.7M!) |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 162 | 10,106 | Single-file text-to-image diffusion model optimized for ComfyUI |

### 🧩 Multimodal Language (image-text-to-text)

| Model | Author | Likes | Downloads | Why it's trending |
|-------|--------|-------|-----------|-------------------|
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,513 | 165,300 | Meta's 30B multimodal model, potentially a successor to the Chameleon/Llama vision line |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 140 | 11 | Preview of dots3 — a compact note-taking-focused multimodal model |

### 🔧 Specialized Models (audio, voice, hybrid)

| Model | Author | Likes | Downloads | Why it's trending |
|-------|--------|-------|-----------|-------------------|
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 381 | 1,366 | Voice-focused model for conversational audio interfaces |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 235 | 2,283 | Hybrid architecture model with MIT license — accessible for research |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why it's trending |
|-------|--------|-------|-----------|-------------------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 807 | 0 | Brand-new GGUF quantization of Qwen3.8-27B from the unsloth team |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 414 | 596,774 | GGUF version of Meta's 30B multimodal — brings it to consumer hardware |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 270 | 228,364 | Official GGUF release of the same model family |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,016 | 2,891,524 | Ultra-community fine-tune of Qwen3.6 — "uncensored" variant with massive popularity |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 300 | 0 | Official FP8 quantized version of Qwen3.8-27B for efficient inference |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 184 | 9,334 | FP8 variant of the massive MoE model — likely enabling deployment at scale |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 742 | 0 | LoRA for MiniMax-H3-Turbo adding audio-to-video capabilities |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 310 | 473 | Community fine-tune of MiniMax-H3 with Apache 2.0 license |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 177 | 9,060 | LoRA from fal.ai for realistic human video generation |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 318 | 112,975 | ComfyUI-ready LoRA for the Turbo variant — actively downloaded |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 156 | 136,774 | GGUF port of the video model for local, CPU-friendly inference |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 339 | 0 | Community adaptor for running MiniMax-H3 natively in ComfyUI |

---

## 3. Ecosystem Signal

**Qwen is building a comprehensive multimodal empire.** With Qwen3.8-27B, its 2.4T MoE variant, and FP8 quantizations released on the same day, Qwen is aggressively positioning itself as the full-stack LLM provider — from flagship model to deployment-ready quantizations.

**MiniMax-H3 is the video-generation moment.** The sheer volume of community artifacts (LoRAs, ComfyUI ports, turbo variants, GGUF) shows that open-weight video generation has hit critical mass. The Comfy-Org port's 11.7M downloads demonstrates that the **creative/prosumer market is the primary consumer** of these models.

**Open-weight clearly outperforms proprietary in community engagement.** Every single model in today's top 30 is open-weight (safetensors/GGUF), with no proprietary API-only models present. This is a strong signal that the open community is now the center of gravity in AI development.

**Quantization is no longer optional — it's the standard.** FP8, GGUF, NVFP4, and compressed-tensor variants are proliferating. GPU memory has become the bottleneck, and the community is solving it through aggressive format diversification.

**Meta is quietly building a multimodal successor.** Muse-Glimmer-30B (and its GGUF variants) suggests a significant pivot from Meta's earlier text-only Llama line toward vision-language unification.

---

## 4. Worth Exploring

**1. [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) (10.6K likes)**
The single most-liked model today. Its "compressed-tensors" tag hints at novel architecture innovations that could have outsized impact on how multimodal models are built and deployed. Worth studying for its engineering approach alone.

**2. [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) (and its FP8 variant)**
A 2.4-trillion-parameter MoE with only 95B active per token. This is the bleeding edge of efficient scaling — combining massive knowledge capacity with inference feasibility. The FP8 sibling makes it actionable for serious deployments.

**3. [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) (11.7M downloads)**
The most-downloaded model today. It represents the **gold standard of ecosystem integration** — taking a leading model and making it frictionless for the ComfyUI creative community. The massive download delta vs. the base model is a textbook case of how UX beats raw performance in community adoption. Any AI platform team should study how Comfy-Org achieved this.

---

*Report generated for 2026-08-15 | Sources: Hugging Face Hub trending rankings*

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*