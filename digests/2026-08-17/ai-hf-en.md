# Hugging Face Trending Models Digest 2026-08-17

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-17 01:20 UTC

---

# 🤗 Hugging Face Trending Models Digest
**Date: 2026-08-17** | *30 models analyzed, sorted by weekly likes*

---

## 1. Today's Highlights

The open-weight frontier continues to heat up with **Qwen3.8-27B** and **Kimi-K3** leading the trending charts, signaling intense competition in the multimodal large language model space. **MiniMax-H3** has emerged as a breakout star in video generation, with its Comfy-Org integration racking up over **13.4M downloads** — a clear signal that open-source video generation has entered the mainstream. The list features strong representation from Chinese labs (Qwen, MiniMax, DeepSeek, Moonshot), with US players like NVIDIA and Meta countering with efficient architectures like the Nemotron Lightning 30B-A3B MoE. Quantization activity is massive, particularly GGUF conversions of flagship models for local deployment, demonstrating the continued demand for edge-friendly AI. Uncensored/abliterated variants of Qwen models also appear frequently, pointing to an active community segment interested in unrestricted LLMs.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Signal |
|-------|--------|-------|-----------|--------|
| [**Qwen3.8-2.4T-A95B**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,012 | 7,932 | Flagship MoE text-only model with 2.4T total parameters and 95B active, setting a new frontier scale. |
| [**DeepSeek-V4-Pro-0813**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 536 | 21,873 | Latest DeepSeek flagship iteration, competing directly with Qwen and Kimi on reasoning. |
| [**DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,462 | 1.87M | The fast, cost-efficient variant — showing massive adoption via downloads. |
| [**NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 291 | 196,326 | Compact 30B MoE (3B active) in NVFP4 precision — efficient inference on RTX-class hardware. |
| [**NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 160 | 66,253 | BF16 reference version of the Lightning release, for full-precision users. |
| [**LiquidAI/LFM2.5-2.6B**](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 647 | 141,009 | Liquid Foundation Model 2.5 — a sub-3B model punching above its weight via liquid neural computing ideas. |
| [**inclusionAI/Ling-3.0-tiny**](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 285 | 5,727 | Tiny industrial-grade model from the "Ling" line, MIT-licensed with hybrid architecture. |
| [**dots3-note-prev**](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 186 | 393 | Early-preview note-focused text gen model from studio dots; small but gathering followers. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Signal |
|-------|--------|-------|-----------|--------|
| [**Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 10,290 | 267,725 | **Most-liked model this week** — a 27B image-text-to-text model that defines the generalist trend. |
| [**Muse-Glimmer-30B**](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,631 | 293K | Meta's 30B multimodal conversational model — new entry with strong social traction. |
| [**MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,030 | 2.31M | Flagship video gen model (text-to-video, image-to-video); magnet of the ecosystem. |
| [**MiniMax-Music3**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 844 | 8,639 | Third-gen music generator; text-to-audio pipeline, a fast-growing niche. |
| [**LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,028 | 424,099 | Video model from Lightricks supporting t2v/i2v/v2v in a single diffusion file. |
| [**Minimax-h3-Turbo**](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 558 | 239,206 | A community "Turbo" version of H3 focused on fast i2v. |
| [**Anima-2.9B**](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 223 | 20,860 | Anime-focused text-to-image single file; popular in ComfyUI community. |

### 📦 Fine-tunes, Quantizations, and Infrastructure

| Model | Author | Likes | Downloads | Signal |
|-------|--------|-------|-----------|--------|
| [**Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,459 | **1.95M** | The definitive GGUF conversion of Qwen3.8-27B — the most downloaded model this week. |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,096 | 3.02M | Community mashup of Qwen3.6-27B fine-tunes + GGUF. Viral via roleplay communities. |
| [**Muse-Glimmer-30B-GGUF**](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 459 | 718K | Instant quantization of the hot Meta multimodal release. |
| [**Qwen3.8-27B-FP8**](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 485 | 352,971 | Official FP8 version for efficient serving on next-gen GPUs. |
| [**Qwen3.8-27B-NVFP4**](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 202 | 276,269 | 4-bit NVFP4 quantized variant; delivers sub-4-bit footprint with speed. |
| [**orcarouter/Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 345 | 4,285 | Abliterated + FP8 version of the Qwen 3.8 multimodal series. |
| [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 214 | 184K | Llama.cpp-ready uncensored GGUF, with MTP support. |
| [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,387 | **13.4M** | ComfyUI-native single-file distribution of MiniMax-H3; the ecosystem's delivery vehicle. |
| [**fal/MiniMax-H3-Realism-People-LoRA**](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 229 | 16,103 | A LoRA for realism in people-focused video generation — sign of emerging LoRA economy for video. |
| [**larryvrh/MiniMax-H3-Turbo-Lora**](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 776 | 0 | Another H3 LoRA, focused on the Turbo variant. New upload, high pre-interest. |
| [**unsloth/MiniMax-H3-GGUF**](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 175 | 204K | GGUF for video models (stable-diffusion.cpp) — first wave of edge-friendly video gen. |
| [**Comfy-Org/MiniMax-Music-3**](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 152 | 0 | ComfyUI packaging of MiniMax Music3 — the audio generator, newly integrated. |

---

## 3. Ecosystem Signal

The strongest momentum right now sits in **Chinese-founding labs**: Qwen, MiniMax, DeepSeek, and Moonshot drive both the most-liked models and the highest-volume releases. Qwen3.8 is clearly a platform flagship, spawning official quantizations, community fine-tunes, and uncensored variants at an unprecedented velocity. MiniMax-H3 has unlocked the video generation ecosystem — a 13.4M-download Comfy single file indicates that "local-first video generation" is becoming a real use case.

⚡ The quant layers are maturing: **GGUF, FP8, and NVFP4** now coexist with the original BF16 releases — Unsloth is the single most reliable converter and now serves video models via stable-diffusion.cpp. MoE models (Nemotron Lightning, Qwen 2.4T) and small efficient models (Liquid 2.6B, Ling tiny) are growing faster than pure dense big models. Kenig open-weight momentum continues to accelerate on the back of accessibility; e.g., Kimi-K3 (6.9K likes) appears in the top 15 despite the 936M downloads not being shown — a sign that the flagship race is no longer exclusive to US labs. However, proprietary frontier remains largely closed — no OpenAI/Gemini releases here. The action is all in "open enough" files that users can actually run responsibly on local GPUs.

---

## 4. Worth Exploring

1. **Kimi-K3** — Despite fewer tags, it rankles as the most-liked (10.7K) option this week. If you're studying the Chinese Moonshot lineup, this is the breakthrough release to benchmark against Qwen3.8 and DeepSeek-V4 for multimodal quality.

2. **Qwen3.8-2.4T-A95B-FP8** — The first 2.4T-parameter MoE with official FP8 availability is a must-study case: how far can open-weight hybrid architectures go toward frontier intelligence while staying inference-feasible?

3. **MiniMax-H3 (via Comfy-Org single file)** — With 13.4M downloads and a fast-growing LoRA ecosystem (people-realism, turbo variants), this is the hottest testbed for anyone working on open-source video gen workflows.

---

*Compiled from 30 trending models by weekly likes, Hugging Face Hub — 2026-08-17.*

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*