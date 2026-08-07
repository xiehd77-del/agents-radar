# Hugging Face Trending Models Digest 2026-08-07

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-07 02:44 UTC

---

# 🤖 Hugging Face Trending Models Digest — 2026-08-07

---

## 1. Today's Highlights

This week's Hugging Face leaderboard is dominated by a **massive wave of video-generation models** centered on **MiniMax-H3**, with multiple community adaptations (ComfyUI ports, LoRA fine-tunes, and quantized GGUF variants) flooding the ecosystem. In the language model space, **DeepSeek-V4-Flash** continues to gain traction with both official releases and community GGUF quantizations, while **Qwen3.6-based MoE models** (35B-A3B variants) are seeing heavy fine-tuning activity. Notably, **Kimi-K3** from Moonshot AI has secured the second-highest like count despite being a compressed-tensor model, signaling strong community interest in efficient architectures. The **FLUX.1-dev** model from Black Forest Labs remains the all-time favorite with 14K likes, cementing its position as the reference image generation model. A clear trend is the **convergence of video generation with specialized text encoders** (Qwen3-VL used as text encoder for MiniMax-H3 pipelines) and the rise of **ultra-long GGUF naming conventions** that signal increasingly customized, multi-stage fine-tuning pipelines.

---

## 2. Trending Models by Category

### 🧠 Language Models

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,205 | 1,258,043 |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,875 | 2,391,730 |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,045 | 2,639,756 |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,654 | 617,900 |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 336 | 73,573 |
| [maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 211 | 419 |
| [Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 190 | 1,196 |

- **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — Moonshot AI's flagship compressed-transformer LLM, trending for its exceptional parameter efficiency and multimodal capabilities.
- **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — ZAI's latest MoE-based conversational model, trending for its hybrid attention architecture and massive adoption.
- **[DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** — DeepSeek's fast-inference flagship with 2.6M downloads, trending as the go-to efficient LLM for production workloads.
- **[DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — The updated August snapshot of V4-Flash, trending for iterative improvements and fresh benchmark wins.
- **[LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** — Liquid AI's liquid neural network-based 2.6B model, trending for its novel architecture and compact size.
- **[maple-preview](https://huggingface.co/deepgrove/maple-preview)** — DeepGrove's preview MoE model, trending for its mysterious-but-promising mixture-of-experts design.
- **[Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash)** — InclusionAI's flash-speed conversational model using Bailing hybrid architecture, trending for custom code and niche efficiency.

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,014 | 523,234 |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,765 | 12,102 |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,934 | 2,791,862 |
| [Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 289 | 440,176 |
| [Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 326 | 22,223 |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 297 | 12,211 |
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 184 | 206 |
| [Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 208 | 0 |
| [Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 164 | 1,511 |

- **[FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev)** — The definitive open-weights text-to-image model, trending as the community's default choice for image generation.
- **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMax's state-of-the-art video generation model supporting both text-to-video and image-to-video pipelines, trending for its exceptional temporal coherence.
- **[Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — Baidu's comprehensive image-text-to-text OCR model with 2.8M downloads, trending for unlimited-scene document understanding.
- **[Mage-VL](https://huggingface.co/microsoft/Mage-VL)** — Microsoft's versatile multimodal vision-language model, trending for broad downstream task support.
- **[Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)** — Thinking Machines' compact multimodal conversational model, trending for small-form-factor multimodal inference.
- **[Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)** — Audio8's preview text-to-speech model using ArkTTS architecture, trending for novel audio generation approaches.
- **[NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)** — NVIDIA's voice chat model with speech understanding, trending for end-to-end spoken dialogue.
- **[Kroma](https://huggingface.co/lodestones/Kroma)** — Lodestones's LoRA adapter for Krea2 image generation, trending for ComfyUI-compatible style transfer.
- **[Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B)** — Mistral's lightweight safety/guardrail model, trending for LLM output filtering.

### 🔧 Specialized Models

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 522 | 16,961 |

- **[KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** — Kwaipilot's developer-focused code generation model built on Qwen3.5-MoE architecture, trending for specialized programming capabilities.

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 854 | 2,295,377 |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 552 | 145,105 |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,654 | 2,087,189 |
| [Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 341 | 0 |
| [MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 312 | 0 |
| [MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 157 | 65,679 |
| [Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 411 | 309,149 |
| [LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 128 | 12,790 |
| [MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 129 | 0 |
| [XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 427 | 1,570 |
| [Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 112 | 272,963 |
| [Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 111 | 0 |
| [Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 226 | 3,394 |

- **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** — ComfyUI-optimized port of MiniMax-H3, trending with 2.3M downloads as the standard video gen integration.
- **[DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)** — Unsloth's ultra-efficient GGUF quantization, trending for accessible local deployment.
- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — An extremely customized uncensored Qwen3.6 fine-tune, trending for its complex multi-stage fusion approach.
- **[ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot)** — Qwen3-VL text encoder adapted for MiniMax-H3 video pipelines, trending for the "Heretic" fine-tune series.
- **[larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)** — LoRA speed-boost adapter for MiniMax-H3, trending for faster video generation.
- **[realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs)** — Community GGUF quantization of MiniMax-H3, trending for local video generation.
- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF)** — Uncensored Hermes-style Qwen3.6 MoE in GGUF format, trending for roleplay and creative writing.
- **[LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF)** — Official GGUF version of Liquid's compact LLM, trending for llama.cpp compatibility.
- **[drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI)** — Pruned ComfyUI-ready Turbo LoRA, trending for integration convenience.
- **[XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini)** — Compact Qwen3.6-based MoE fine-tune, trending for efficient Qwen3.5-MoE specialization.
- **[Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot)** — Multi-format quantized MiniMax-H3, trending for mixed precision 4-bit/8-bit video inference.
- **[sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4)** — NVFP4-precision text encoder for MiniMax-H3, trending for NVIDIA hardware optimization.
- **[EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2)** — EschaLabs's W2-quantized Qwen3.6 MoE, trending for extreme compression while retaining quality.

---

## 3. Ecosystem Signal

The current ecosystem shows **three dominant momentum vectors**:

**1. Video generation explosion:** MiniMax-H3 has spawned an entire sub-ecosystem with ComfyUI ports, LoRA adapters, multi-precision quantizations (nvfp4, INT4, INT8, GGUF), and even text-encoder swaps using Qwen3-VL. This indicates a maturing video-gen stack where users are optimizing for speed, local deployment, and controllability rather than just raw quality.

**2. MoE architectures are winning the efficiency race:** Both DeepSeek-V4-Flash, GLM-5.2, and the numerous Qwen3.6-A3B variants (35B total, 3B active) demonstrate that sparse expert models have become the dominant paradigm for both frontier and community fine-tunes. The sheer amount of Qwen3.6-MoE-based GGUF fine-tunes (DavidAU, LuffyTheFox, EschaLabs, XYZAILab) signals that the community considers Qwen3.6-MoE the best base for uncensored/specialized chat.

**3. Open-weight is unequivocally leading:** Every top model here (except possibly FLUX.1) has a quantization or fine-tune derivative available within days. The "uncensored/Heretic/Hermes" fine-tune family shows a thriving subculture of creative-uncensored models. Also notable: **Kimi-K3's compressed-tensors approach** (10K likes) suggests the community is increasingly valuing model compression at the architectural level, not just post-hoc quantization.

---

## 4. Worth Exploring

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — The 10K likes on a compressed-architecture model is a strong signal. If you're studying parameter-efficient multimodal LLMs, this is the reference implementation right now.

2. **[MiniMax-H3 (Comfy-Org port)](https://huggingface.co/Comfy-Org/MiniMax-H3)** — With 2.3M downloads, this is the canonical way to run state-of-the-art video generation locally. The ecosystem around it (LoRAs, quantizations, text-encoder swaps) makes it the best study case for understanding video-gen model customization.

3. **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — 2.4M downloads and a novel glm_moe_dsa (datastream-aware) architecture make this worth benchmarking against DeepSeek-V4-Flash for both quality and inference cost.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*