# Hugging Face Trending Models Digest 2026-08-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-12 02:04 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-08-12

---

## 1. Today's Highlights

This week's trending list is dominated by two major releases: **MiniMax-H3**, a powerful image-text-to-video model that has spawned a vibrant ecosystem of fine-tunes, LoRAs, and ComfyUI integrations, and **Kimi-K3**, a massive compressed-tensor multimodal model from Moonshot AI that has quickly amassed over 10K likes. **DeepSeek-V4-Flash-0731** continues its reign as a highly-downloaded text-generation workhorse with over a million downloads, while **Muse-Glimmer-30B** from meta-models signals a new wave of image-text-to-text conversational models. Notably, the community has responded rapidly with quantization (GGUF) and LoRA adaptations for all these popular base models, demonstrating a healthy open-weight ecosystem.

---

## 2. Trending Models by Category

### 🧠 Language Models

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,153 | 1,048,685 |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 550 | 93,668 |
| [Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 303 | 6,148 |
| [maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 332 | 2,049 |

- **DeepSeek-V4-Flash-0731**: DeepSeek's latest flagship text-generation model, drawing massive adoption with its conversational capabilities and strong performance-to-size ratio.
- **LFM2.5-2.6B**: A compact 2.6B liquid foundation model that packs surprising capability into a small footprint, inspiring a GGUF variant.
- **Ling-3.0-flash**: InclusionAI's hybrid-architecture flash model for efficient text generation with custom code support.
- **maple-preview**: An emerging mixture-of-experts causal LM from deepgrove, likely gaining traction for its efficient sparse activation.

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,579 | 59,368 |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,528 | 1,565,484 |
| [Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,101 | 0 |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 228 | 39 |
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 326 | 653 |

- **MiniMax-H3**: The breakout video-generation model of the week, supporting both text-to-video and image-to-video pipelines via diffusers.
- **Kimi-K3**: Moonshot AI's compressed-tensor multimodal model for image-text-to-text tasks, with massive community engagement and downloads.
- **Muse-Glimmer-30B**: A 30B multimodal conversational model from meta-models, though currently at zero downloads, showing strong early interest via likes.
- **LTX-2.5**: Lightricks' versatile generation model supporting image, text, and video-to-video transformations as a single-file diffusion model.
- **NVIDIA-NemotronLabs-VoiceChat-11B**: An 11B voice-chat model from NVIDIA, signaling a push toward conversational voice interfaces.

### 🔧 Specialized Models

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,019 | 2,892,191 |
| [Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 228 | 6,769 |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 132 | 19,250 |

- **Unlimited-OCR**: Baidu's feature-extraction OCR model with outstanding adoption — nearly 3M downloads, suggesting industrial-grade usage.
- **Shieldstral-1.0-3B**: Mistral's compact 3B safety shield model, designed for content moderation and guardrail use cases.
- **Nemotron-3.5-Lightning-30B-A3B-NVFP4**: NVIDIA's efficient 30B active-3B sparse model with NVFP4 quantization for high-performance inference.

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 651 | 0 |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,899 | 2,521,093 |
| [MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 110 | 781 |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 307 | 0 |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 649 | 207,990 |
| [LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 201 | 111,942 |
| [MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 130 | 353 |
| [MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 115 | 0 |

- **MiniMax-H3-Turbo-Lora** & **MiniMax-H3-Prompt-Rewriter-LoRA** & **MiniMax-H3-Realism-People-LoRA**: A thriving LoRA ecosystem forming around MiniMax-H3 for video quality enhancement, prompt refinement, and realism.
- **DavidAU's Qwen3.6-27B GGUF**: A heavily fine-tuned, "uncensored" GGUF variant with massive download counts, showing demand for community fine-tunes.
- **Unsloth GGUF series**: The standard-bearer for quantization, providing GGUF versions of nearly every major release (Muse-Glimmer, DeepSeek-V4, MiniMax-H3).

---

## 3. Ecosystem Signal

**MiniMax-H3 is a full ecosystem play.** A single model release generated over *ten* community derivatives within a week — ComfyUI workflows, LoRAs, GGUF quantizations, and specialized variants. This pattern demonstrates that video generation has become the new frontier for open-weight AI, with the community rapidly building infrastructure around it.

**Open-weight dominance is accelerating.** Kimi-K3's 10K+ likes and DeepSeek's 1M+ downloads show that frontier labs (Moonshot, DeepSeek, Liquid AI) are winning massive adoption by releasing weights openly. Notably, compressed-tensor approaches (Kimi-K3) and sparse mixture-of-experts (maple-preview, Nemotron-3.5-Lightning) are gaining traction as efficiency paradigms.

**Quantization is table stakes.** GGUF variants appear within days (often hours) of every major model release, and unsloth has established itself as the go-to quantization provider. The community expects lightweight, locally-runable versions of every notable model.

---

## 4. Worth Exploring

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — With 10.5K likes and 1.5M downloads, this is the highest-engagement model this week. Its compressed-tensor architecture could be a breakthrough for efficient multimodal inference — well worth studying for architecture insights.

2. **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — The center of the week's ecosystem activity. Beyond using it directly for video generation, studying its derivative ecosystem (LoRAs, ComfyUI integrations, GGUF ports) reveals how successful model releases catalyze community innovation.

3. **[NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4)** — A 30B model with only 3B active parameters at NVFP4 precision signals the future of efficient deployment. NVIDIA's push toward sparse + quantized models could redefine what's possible on consumer hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*