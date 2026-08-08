# Hugging Face Trending Models Digest 2026-08-08

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-08 01:45 UTC

---

# Hugging Face Trending Models Digest — 2026-08-08

## 1. Today's Highlights

The Hugging Face ecosystem is dominated by the explosive release of **MiniMax-H3**, a next-generation video generation model, which has spawned an entire ecosystem of fine-tunes, quantizations, LoRAs, and ComfyUI integrations within days of its launch. On the language model front, **deepseek-ai/DeepSeek-V4-Flash-0731** continues its stellar run with over 700K downloads, while **moonshotai/Kimi-K3** leads the weekly likes chart with over 10K. Chinese AI labs (DeepSeek, Moonshot, ZAI, Baidu, MiniMax) are clearly setting the pace this week. Notably, there is a surge of community-driven "uncensored" fine-tunes of Qwen3.6 models, alongside a strong push toward GGUF quantization for local deployment via unsloth and community contributors.

## 2. Trending Models by Category

### 🧠 Language Models (LLMs)

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI | 2,958 likes | 18,112 downloads
  The flagship text-to-video and image-to-video generation model from MiniMax, trending due to its groundbreaking multi-modal video generation capabilities (also categorized as generation).

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — deepseek-ai | 2,748 likes | 702,709 downloads
  A fast, conversational large language model from DeepSeek with massive adoption, reflecting the continued demand for high-performance, cost-efficient chat models.

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — moonshotai | 10,284 likes | 1,308,186 downloads
  The most-liked model this week, a feature-extraction-optimized image-text-to-text model from Moonshot AI with compressed-tensor support.

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 4,889 likes | 2,430,330 downloads
  A cutting-edge conversational MoE model from ZAI with DSA-based architecture, one of the most downloaded models this week, signaling strong enterprise interest.

- **[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** — LiquidAI | 380 likes | 77,973 downloads
  A compact 2.6B Liquid Foundation Model for efficient text generation, gaining traction for its low-resource design.

- **[LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF)** — LiquidAI | 145 likes | 31,489 downloads
  The GGUF quantization of LiquidAI's efficient 2.6B model, aimed at local inference via llama.cpp and other GGUF-compatible runtimes.

- **[deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview)** — deepgrove | 228 likes | 686 downloads
  A lightweight causal-LM with mixture-of-experts architecture, previewing a new family of efficient language models.

- **[inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash)** — inclusionAI | 203 likes | 3,065 downloads
  A conversational text-generation model with custom code support and hybrid architecture from inclusionAI.

- **[mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B)** — mistralai | 184 likes | 2,480 downloads
  A compact 3B safety/guardrail model from Mistral AI, designed for content moderation and model alignment workflows.

### 🎨 Multimodal & Generation

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | 3,954 likes | 2,836,694 downloads
  A state-of-the-art OCR model that handles unlimited text extraction under varied conditions; nearly 3M downloads make it one of the most widely used models this week.

- **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)** — microsoft | 302 likes | 456,140 downloads
  Microsoft's multimodal image-text-to-text model with vision-language capabilities, trending for enterprise use cases.

- **[nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)** — nvidia | 228 likes | 359 downloads
  Nvidia's voice chat model with multiple arXiv papers backing its conversational AI capabilities.

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** — Kwaipilot | 532 likes | 17,399 downloads
  A code-generation model based on Qwen3.5-MoE architecture with an image-text-to-text pipeline primarily aimed at code generation.

- **[thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)** — thinkingmachines | 336 likes | 25,340 downloads
  A compact multimodal conversational model from Thinking Machines, with strong adoption for lightweight vision-language tasks.

- **[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)** — Audio8 | 307 likes | 12,633 downloads
  A text-to-speech model with ArkTTS architecture, marking growing progress in open-weight TTS solutions.

- **[lodestones/Kroma](https://huggingface.co/lodestones/Kroma)** — lodestones | 221 likes | 0 downloads
  A recent image-generation LoRA for Krea models, compatible with ComfyUI, trend-setting for creative workflows.

- **[lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo)** — lightx2v | 131 likes | 0 downloads
  A community turbo variant of MiniMax-H3 focusing on accelerated video generation (image-to-video, t2v, r2v).

### 🔧 Specialized Models

- **[mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B)** — mistralai (as above)
  A dedicated safety modifier model focused on guardrailing, using vLLM deployment.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu (as above)
  A domain-specific OCR powerhouse, pushing boundaries on multi-format text extraction.

### 📦 Fine-tunes & Quantizations

- **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** — Comfy-Org | 938 likes | 3,139,920 downloads
  3.1M downloads of the ComfyUI-wrapped MiniMax-H3 integration, underscoring the huge demand for a Creative AI video alternative.

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — DavidAU | 1,709 likes | 2,217,339 downloads
  A highly popular uncensored fine-tune based on Qwen3.6-27B, known for its “Fable-Fusion” narrative style, now GGUF-quantized.

- **[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)** — unsloth | 588 likes | 161,253 downloads
  Unsloth’s highly optimized GGUF quantization of DeepSeek-V4-Flash, enabling high-performance local deployment.

- **[larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)** — larryvrh | 420 likes | 0 downloads
  A LoRA adapter for MiniMax-H3 to accelerate video generation, focused on text-to-video and audio-video workflows.

- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF)** — LuffyTheFox | 425 likes | 332,992 downloads
  A MoE-based uncensored Qwen3.6-35B fine-tune with Hermes-style training, GGUF-quantized for broad compatibility.

- **[Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot)** — Abiray | 128 likes | 452,420 downloads
  An innovative quantized variant of MiniMax-H3 with mixed precision formats for diffusion models.

- **[drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI)** — drbaph | 178 likes | 0 downloads
  A ComfyUI-integrated LoRA for MiniMax-H3 Turbo, delivering a streamlined user experience.

- **[realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs)** — realrebelai | 168 likes | 87,870 downloads
  Direct GGUF quantizations of the MiniMax-H3 model, making video generation viable on consumer hardware.

- **[ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot)** — ethanfel | 380 likes | 0 downloads
  A multimodal (image-text-to-text) uncensored fine-tune of Qwen3-VL-32B, optimized for ComfyUI and INT8 inference.

- **[Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy)** — Kijai | 120 likes | 0 downloads
  Community ComfyUI integration for MiniMax-H3, custom-built for creative workflows (region: US).

- **[Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental)** — Kijai | 106 likes | 0 downloads
  An experimental variant of MiniMax-H3 from the ComfyUI community lead, exploring radical optimizations for local video generation.

- **[sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4)** — sakamakismile | 121 likes | 0 downloads
  A cross-model mashup using Qwen3-VL-32B as a text encoder for MiniMax-H3 with NVFP4 precision.

- **[SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3)** — SexGod1979 | 113 likes | 0 downloads
  A community fine-tune of MiniMax-H3 for text-to-video, Apache-2.0 licensed and endpoint-compatible.

## 3. Ecosystem Signal

The single biggest signal this week is the **rapid commoditization of MiniMax-H3** across the open-source ecosystem: within days of its release, it has been adopted via ComfyUI, quantized to GGUF and INT8/NVFP4 formats, and augmented with turbo LoRAs, confirming that **video generation is becoming as modular as image generation**. Meanwhile, Chinese AI labs (DeepSeek, Moonshot, ZAI, Baidu, MiniMax) dominate both the top-likes and top-downloads charts, proving a decisive shift toward open-weight releases with permissive or research licenses. The "uncensored" fine-tune trend (Qwen3.6, Qwen3-VL, etc.) remains highly active, with  for popular models. Quantization remains a dominant theme, with **GGUF** becoming the de facto standard for local deployment, led by unsloth. Finally, the presence of multiple **comic/creative** community models suggests a strong push toward entertainment and roleplay/custom narrative use cases, while OCR, TTS, and voice chat models (Baidu, Audio8, Nvidia) diversify the ecosystem beyond generative media.

## 4. Worth Exploring

1. **MiniMaxAI/MiniMax-H3** — This is the week's most consequential release, and exploring its base version gives you insight into the new frontier of open video generation. Whether you're a researcher or a creative developer, its capabilities are redefining what's possible with local or API-based video synthesis.

2. **moonshotai/Kimi-K3** — The most-liked model this week, and arguably the most interesting "sleeping giant": with 1.3M downloads and feature-extraction-optimized architecture supporting compressed tensors, it's a must-study for anyone building in multimodal RAG, enterprise search, or large-scale embedding workflows.

3. **zai-org/GLM-5.2** — The second-most downloaded model (2.4M) with a novel MoE+DSA architecture. If you're tracking the efficiency frontier of MoE-based LLMs, this model represents ZAI's latest architectural bets and is a strong candidate for both production deployment and academic analysis.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*