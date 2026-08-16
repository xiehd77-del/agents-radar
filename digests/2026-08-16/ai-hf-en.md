# Hugging Face Trending Models Digest 2026-08-16

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-16 01:23 UTC

---

# Hugging Face Trending Models Digest — 2026-08-16

---

## 1. Today's Highlights

This week's trending chart is dominated by **Qwen3.8 series** and **MiniMax-H3**, with both families racking up multiple entries across base releases, quantizations, and community adapters. The **Kimi-K3** from Moonshot AI takes second place in likes (10,725) with over 2.1M downloads, signaling strong demand for compressed-tensor multimodal models. A notable new entrant is **LiquidAI's LFM2.5** family (text + VL variants), marking continued interest in liquid neural network architectures. The ecosystem shows heavy quantization activity (GGUF, FP8, NVFP4) and a surge of LoRA adapters for video-generation models, particularly MiniMax-H3.

---

## 2. Trending Models by Category

---

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | ❤️ | ⬇️ | Trend Note |
|-------|--------|------|------------|------------|
| [Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 968 | 6,381 | MoE flagship with 2.4T total params and 95B active — Qwen's most ambitious text-only architecture yet. |
| [DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 490 | 19,945 | Newest DeepSeek V4 Pro checkpoint, continuing the series' strong performance-per-parameter reputation. |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,421 | 1.8M | The fast/cheap DeepSeek variant is doing massive download numbers — the community's go-to for high-volume inference. |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 272 | 170K | 30B MoE (3B active) with NVFP4 quantization baked in — NVIDIA continues its push for efficient on-prem LLMs. |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 150 | 62K | BF16 companion to the NVFP4 version, giving users a higher-precision option. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 627 | 135K | Liquid neural network architecture at 2.6B — small but generating outsized interest. |

---

### 🎨 Multimodal & Generation (image, video, audio)

| Model | Author | ❤️ | ⬇️ | Trend Note |
|-------|--------|------|------------|------------|
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | **9,801** | 91K | Qwen's flagship vision-language model — the #1 trending model this week, setting the bar for open-weight multimodal. |
| [Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,577 | 246K | Meta's image-text-to-text model with strong conversational and visual reasoning capabilities. |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 941 | 378K | Versatile video model (t2v, i2v, v2v) — one of the top non-LLM downloads this week. |
| [MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 766 | 5K | Text-to-music generation — still early, but a meaningful entry in the audio space. |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,973 | **2.2M** | MiniMax's flagship video generator. The H3 series has become a community staple in weeks, with ComfyUI integration exploding. |
| [Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 514 | 211K | Turbo variant of H3 — sign of a vibrant ecosystem forming around this architecture. |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | **10,725** | **2.1M** | Moonshot's multimodal model with compressed-tensors tag — close race with Qwen3.8-27B for top likes. |
| [LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 143 | 4K | Vision-language extension of the LFM2.5 liquid architecture. |
| [Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 189 | 16K | Text-to-image diffusion model, ComfyUI-ready single file. |

---

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | ❤️ | ⬇️ | Trend Note |
|-------|--------|------|------------|------------|
| [Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 258 | 4K | "Bailing hybrid" custom-code model — worth noting for its specialized architecture. |
| [dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 162 | 240 | Niche text-generation model from dots-studio; small but gathering attention. |

---

### 📦 Fine-tunes, Quantizations & Community Adapters

| Model | Author | ❤️ | ⬇️ | Trend Note |
|-------|--------|------|------------|------------|
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,236 | 867K | The go-to GGUF quantization for the top trending model — Unsloth's releases are basically infrastructure at this point. |
| [Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 428 | 123K | Official FP8 — the precision choice for multi-GPU inference. |
| [Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 194 | 10K | FP8 version of the 2.4T MoE — practical deployment path for the giant model. |
| [Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 166 | 90K | NVFP4 quantization — increasingly popular for Blackwell-class GPUs. |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 435 | 682K | Unsloth's QUFF of Meta's multimodal model — the standard way to run it locally. |
| [Muse-Glimmer-30B-GGUF (meta)](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 277 | 321K | Meta's own GGUF release, backing up the community quantizations. |
| [Qwen3.6-27B-Fable-Fusion-711...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,051 | 2.9M | The rising tide of "uncensored/heretic" fine-tunes — this one is racking up huge numbers. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,344 | **12.7M** | The all-time download king in this list (12.7M); this is the ComfyUI-optimized release of H3. |
| [MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 756 | 0 | Brand-new LoRA adapter for H3 Turbo; 0 downloads makes it fresh from the oven. |
| [MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 194 | 12K | Realism-focused LoRA for H3 — a sign that the video-LoRA ecosystem is maturing. |
| [MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 164 | 173K | GGUF for video models — new territory being explored for diffusion-based generators. |
| [MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 353 | 0 | ComfyUI integration wrapper for H3; new, no downloads yet but clearly wanted. |
| [Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 161 | 0 | Another uncensored variant of the Qwen 27B multimodal — the pattern continues. |

---

## 3. Ecosystem Signal

The Hugging Face landscape this week is defined by **three converging trends**:

**1. Multimodal dominance.** The top two models by likes (Kimi-K3 at 10.7K, Qwen3.8-27B at 9.8K) are both image-text-to-text. Video generation (MiniMax-H3) has an enormous download base (12.7M for Comfy-Org's release). We've clearly moved from "text-only" to "anything-to-anything" as the default expectation for flagship releases.

**2. Quantization as a first-class product tier.** Unsloth now releases quantized versions of major models within hours of the base release (Qwen3.8 GGUF logged 867K downloads in a week). NVIDIA ships both NVFP4 and BF16 versions of Nemotron simultaneously. FP8/GGUF/NVFP4 aren't afterthoughts — they're part of the launch strategy.

**3. The "creator economy" is diversifying past LLMs.** LoRA adapters for video models (H3-Turbo-Lora, Realism-People), music generation (MiniMax-Music3), and single-file diffusion (Anima, LTX-2.5) show that community adaptation is no longer just about "uncensored chat models" — though those still exist in force (DavidAU's 2.9M downloads prove that niche is thriving).

Also worth noting: liquid architectures (LiquidAI) adding VL variants suggests that alternative model families are gaining mainstream traction.

---

## 4. Worth Exploring

**1. [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) + [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** — The H3 ecosystem is the fastest-moving story on HF right now: 12.7M downloads, an active LoRA community, Turbo variants, and GGUF support. If you want to understand where video generation is heading in open weights, start here.

**2. [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The flagship multimodal release of the week (9.8K likes). With official FP8, Unsloth GGUF/NVFP4, and community uncensored variants, this is the model to benchmark your own multimodal pipeline against.

**3. [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** — A 2.6B model with 135K downloads won't be a headline-grabber, but the architecture (liquid neural networks) represents a genuinely different approach from the Transformer/MoE crowd. Worth studying for the long game, not just the weekly scoreboard.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*