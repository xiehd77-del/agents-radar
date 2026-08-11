# Hugging Face Trending Models Digest 2026-08-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-11 01:51 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-08-11

---

## 1. Today's Highlights

The MiniMax-H3 video generation model is the dominant story this week, spawning a massive ecosystem of fine-tunes, LoRAs, GGUF quantizations, and ComfyUI integrations (6M+ downloads on the Comfy-Org conversion alone). On the LLM front, **Kimi-K3** from Moonshot AI continues its meteoric rise with 10.4K likes and 1.5M downloads, while **DeepSeek-V4-Flash-0731** shows strong adoption with nearly 1M downloads. Meta's **Muse-Glimmer-30B** is generating buzz as a new multimodal model with multiple quantized variants appearing immediately. The "uncensored/heretic" fine-tune trend remains unusually strong, with multiple Qwen3-VL and H3 variants topping 1K+ likes. Finally, **baidu/Unlimited-OCR** demonstrates the ongoing demand for robust vision-language document understanding models.

---

## 2. Trending Models by Category

### 🧠 Language Models

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [**Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,472 | 1,510,032 |
| [**DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,060 | 954,441 |
| [**LiquidAI/LFM2.5-2.6B**](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 490 | 89,680 |
| [**deepgrove/maple-preview**](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 312 | 1,344 |
| [**inclusionAI/Ling-3.0-flash**](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 288 | 5,261 |

- **Kimi-K3** continues to dominate as Moonshot AI's flagship compressed-tensor model, offering strong performance with efficient inference.
- **DeepSeek-V4-Flash-0731** is the latest iteration in DeepSeek's conversational model line, showing massive download velocity for a flash-tier model.
- **LFM2.5-2.6B** from LiquidAI represents the small-model efficiency trend, packing capable performance into a 2.6B parameter footprint.
- **maple-preview** from deepgrove is a MoE-based text-generation model gaining early traction with its causal-LM architecture.
- **Ling-3.0-flash** by inclusionAI uses a hybrid bailing architecture for conversational text generation.

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [**FLUX.1-dev**](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,077 | 480,762 |
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,433 | 47,468 |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,002 | 2,921,751 |
| [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,147 | 6,009,639 |
| [**meta-models/Muse-Glimmer-30B**](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 743 | 0 |
| [**nvidia/NVIDIA-NemotronLabs-VoiceChat-11B**](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 298 | 597 |

- **MiniMax-H3** is the week's breakaway video-generation hit, enabling both text-to-video and image-to-video pipelines.
- **FLUX.1-dev** remains the evergreen image-generation standard, consistently pulling in likes and downloads.
- **Unlimited-OCR** from Baidu shows that document intelligence remains a critical enterprise use case.
- **NemotronLabs-VoiceChat-11B** extends NVIDIA's voice-chat model line with multi-turn conversational capabilities.

### 🔧 Specialized Models

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [**mistralai/Shieldstral-1.0-3B**](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 222 | 6,343 |

- **Shieldstral-1.0-3B** is Mistral's compact safety/guardrail model, filling a critical niche for content moderation in production systems.

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,862 | 2,439,083 |
| [**unsloth/DeepSeek-V4-Flash-0731-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 637 | 199,167 |
| [**larryvrh/MiniMax-H3-Turbo-Lora**](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 601 | 0 |
| [**ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot**](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 440 | 0 |
| [**SexGod1979/PinkCherry_MiniMax-H3**](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 250 | 0 |
| [**Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot**](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 162 | 530,052 |
| [**realrebelai/MiniMax-H3_GGUFs**](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 193 | 174,862 |

- **DavidAU's Qwen3.6 uncensored GGUF** shows the massive appetite for unaligned fine-tunes, with 2.4M downloads.
- **unsloth/DeepSeek-V4-Flash-GGUF** brings DeepSeek's latest to llama.cpp users via high-quality quantized weights.
- The **MiniMax-H3 quantization ecosystem** (nvfp4, INT4/INT8, GGUF) demonstrates the rapid community effort to make video models runnable on consumer hardware.

---

## 3. Ecosystem Signal

Several clear dynamics are shaping the current HF ecosystem:

**MiniMax-H3 is this week's viral moment.** The model instigated a full-spectrum community response — ComfyUI integrations, LoRA adapters, prompt-rewriter fine-tunes, and multiple quantization formats (GGUF, NVFP4, INT4/INT8) all appeared within days of release. The 6M+ downloads on the Comfy-Org conversion underscores how deeply the ComfyUI workflow ecosystem influences model adoption.

**The uncensored fine-tune trend is quantitatively significant.** Models with "uncensored," "heretic," or similar tags repeatedly break into top-30 lists with large download counts. This is a persistent, non-trivial segment of the open-weights ecosystem that continues to grow despite (or perhaps because of) platform conversations around content moderation.

**Open-weight leaders are consolidating around a few families.** DeepSeek-V4, Kimi-K3, Qwen3.x, and Meta's Muse-Glimmer are the anchors. The rapid appearance of GGUF versions from Unsloth and others suggests quantization now happens in hours, not weeks, after a base model release.

**MoE and hybrid architectures are becoming mainstream.** Models like maple-preview (Mixture-of-Experts) and Ling-3.0-flash (hybrid) reflect an industry-wide shift toward parameter-efficient scaling.

---

## 4. Worth Exploring

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — With 10.4K likes and 1.5M downloads, it's the week's most-liked LLM. Its compressed-tensors and feature-extraction tags suggest a model optimized for efficient deployment and encoding — worth studying for production retrieval/embedding pipelines.

2. **[Meta Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)** — Zero downloads yet but already 743 likes and immediate GGUF conversions. This is Meta's latest multimodal model, and the community's speed in producing quantized variants signals high anticipated demand. Watch this one to understand where Meta's open-weights strategy is heading.

3. **[Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot)** — 530K downloads on a quantization of a model released days ago demonstrates user hunger for practical, runnable video-generation on local hardware. It's a strong example of how quantization directly enables real-world adoption of otherwise GPU-heavy models.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*