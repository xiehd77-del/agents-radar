# Hugging Face Trending Models Digest 2026-08-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-29 06:07 UTC

---

# 🤖 Hugging Face Trending Models Digest — 2026-08-29

---

## 1. Today's Highlights

The Hugging Face ecosystem is dominated this week by two major frontier releases: **Qwen3.8-27B** from Alibaba's Qwen team (13.2K likes, 3.4M downloads) and **Kimi-K3** from Moonshot AI (11K likes, 2.6M downloads), both commanding massive community engagement. The **"Uncensored"** niche has exploded around Qwen3.8, with at least five independent abliterated variants (orcarouter, huihui-ai, JonathanColetti, HauhauCS, OBLITERATUS) collectively racking up millions of downloads. In the video generation space, **MiniMax-H3** (4.8M downloads) and **LTX-2.5** from Lightricks are driving momentum with high-quality text-to-video capabilities. Notably, **DeepSeek-V4-Flash-0731** has crossed 3.9M downloads, signaling sustained demand for fast, efficient reasoning models. The quantization ecosystem remains vibrant, with unsloth and community members shipping GGUF variants within hours of base model releases.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | ❤️ Likes | ⬇️ Downloads |
|-------|--------|----------|--------------|
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,162 | 3,457,687 |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,069 | 2,675,145 |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,790 | 3,959,575 |
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,527 | 34 |
| [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,171 | 0 |
| [Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 252 | 0 |
| [Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 486 | 88,102 |

**Qwen3.8-27B** is the week's flagship release — a multimodal reasoning model (image-text-to-text) from Qwen with the qwen3_5 architecture tag, offering state-of-the-art performance with 27B parameters and native conversational + vision capabilities. **Kimi-K3** from Moonshot AI brings a compressed-tensors approach to a multimodal architecture, gaining massive traction for its efficient design. **DeepSeek-V4-Flash-0731** continues the DeepSeek lineage of fast, high-performance text generation models with 3.9M downloads. **GLM-5.3** and **GLM-5.3-Flash** are fresh releases from Zhipu AI featuring the new glm_moe_dsa / glm5_next architectures (early preview, zero downloads yet). **Hy4-preview** is Tencent's Hunyuan v4 text-generation preview. **Ornith-1.5-35B-A3B** is a hybrid MoE model (35B total, 3B active) built on qwen3_5_moe architecture.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | ❤️ Likes | ⬇️ Downloads |
|-------|--------|----------|--------------|
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,589 | 4,848,404 |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,032 | 912,729 |
| [MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,289 | 19,726 |
| [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,181 | 4,810 |
| [MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 159 | 3,344 |
| [MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 136 | 609 |
| [Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 170 | 240 |

**MiniMax-H3** is the dominant video generation model this week — a diffusers-based text/image-to-video model with 4.8M downloads, supporting text-to-video, image-to-video, and video-to-video. **LTX-2.5** from Lightricks offers a diffusion single-file image-to-video pipeline with broad task support. **MiniMax-Music3** extends the MiniMax family into music generation (text-to-audio). **Qwen3.8-Flash-Next** is Qwen's experimental fast multimodal model (qwen4_exp tag), offering a Flash-tier distilled option. The **alibaba-pai** ecosystem add-ons bring ControlNet-Union and acceleration LoRAs to MiniMax-H3. **Breeze-TTS-2** is a fresh text-to-speech model gaining early traction.

### 🔧 Specialized Models

| Model | Author | ❤️ Likes | ⬇️ Downloads |
|-------|--------|----------|--------------|
| [phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 121 | 64 |
| [Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 146 | 349 |

**phonellm-alpha-1** is a Nemotron-based model from the pipecat-ai team (voice agent ecosystem) — early alpha but interesting for telephony/voice applications. **Thomson-1.0-Small** is Thomson Reuters' MoE-based multimodal model built on qwen3_5_moe — a vertical enterprise play in legal/financial AI.

### 📦 Fine-tunes & Quantizations

| Model | Author | ❤️ Likes | ⬇️ Downloads |
|-------|--------|----------|--------------|
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,153 | 7,758,790 |
| [Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 884 | 509,270 |
| [Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,194 | 83,352 |
| [Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,237 | 273,577 |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 808 | 1,666,948 |
| [Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 531 | 4,354 |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 531 | 188,460 |
| [Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 729 | 938,219 |
| [Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 425 | 1,355,482 |
| [Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 201 | 18,598 |
| [GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 250 | 0 |
| [Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 333 | 1,469,059 |
| [Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,511 | 0 |
| [Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) | Qwen | 148 | 2,219 |

The fine-tune/quantization category is entirely dominated by **Qwen3.8-27B** variants — unsloth's GGUF is the single most-downloaded model this week at **7.7M downloads**. The **"Uncensored/abliterated"** ecosystem (orcarouter, huihui-ai, OBLITERATUS, JonathanColetti, HauhauCS) shows an exceptionally active community building multiple formats (GGUF, MLX, FP8, safetensors). The **Qwen-Fixed-Chat-Templates** repo (1.5K likes) is a utility resource fixing chat template issues for Qwen3.5, signaling community investment in tooling quality. Also notable: **Qwen3.8-Flash-Next-FP8** official quantization from Qwen.

---

## 3. Ecosystem Signal

The current HF landscape reveals several major trends. **Alibaba's Qwen family** has become the de facto open-weight standard — Qwen3.8-27B and its ecosystem (GGUF, abliterated, MLX, FP8 variants) account for roughly half of the top 30 downloads, demonstrating unprecedented community velocity around a single base model. The **"uncensored" fine-tuning subculture** is thriving at scale — over 5M combined downloads across abliterated variants out of 13M total for the base model — indicating sustained demand for less-restricted open models, especially for local deployment.

**Chinese labs are leading open-weight innovation**: Qwen, DeepSeek, Kimi (Moonshot), GLM (Zhipu), and MiniMax all released significant models this week. Notably, several early-access releases (GLM-5.3, Hy4-preview) show **zero downloads yet** but high likes — community interest is there, but these are likely gated previews.

**Quantization is table stakes**: unsloth's GGUF release for Qwen3.8 reached 7.7M downloads, surpassing the base model itself. FP8 and MLX adoption continue to grow as Apple Silicon and consumer GPUs become primary deployment targets. A noteworthy development is the rise of **MoE architectures** (Ornith-1.5 A3B, GLM-5.3, Thomson-1.0) with decreasing active parameter counts for edge deployment.

**Video generation** is becoming commodity: MiniMax-H3 and LTX-2.5 both achieved massive adoption weeks after release, with a growing ecosystem of LoRAs, ControlNets, and acceleration add-ons.

---

## 4. Worth Exploring

1. **🌐 [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) — The full multimodal model**: This is the week's most impactful release. It brings native vision + text understanding in one 27B model with 3.5M+ downloads and an entire ecosystem forming around it. If you're evaluating state-of-the-art open-weight multimodal models, this is the reference point.

2. **⚡ [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) — The efficiency leader**: With 3.9M downloads and a "Flash" designation, this model represents the fast-inference trend in the DeepSeek lineage. Its architecture (deepseek_v4 tag) is the one to study if you care about high-performance text generation with moderate compute — a strong default choice for production text-generation workloads.

3. **🔧 [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** + **[GPT-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)**: The experimental "Next" variant carries the qwen4_exp tag, giving a preview of the next Qwen architecture generation — multimodal, Flash-tier with 4,181 likes in days. The unsloth GGUF companion makes it immediately deployable. Watching this model's trajectory tells you where the ecosystem is headed next.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*