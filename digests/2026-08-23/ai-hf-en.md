# Hugging Face Trending Models Digest 2026-08-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-23 01:25 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-08-23

---

## 1. Today's Highlights

Qwen's **Qwen3.8-27B** family dominates the Hub, capturing the top spot with 12.1K likes and appearing in over 10 variants — from official FP8 releases to a massive ecosystem of uncensored and quantized community fine-tunes. The **MiniMax-H3** video generation model is a breakout success (4.3K likes, 3.9M downloads), suggesting strong demand for advanced text-to-video pipelines. A notable new release is **DeepSeek-V4-Flash-0731** (3.6K likes), signaling continued innovation in reasoning-optimized LLMs from the DeepSeek team. **moonshotai/Kimi-K3** also commands significant attention with 10.9K likes, indicating a competitive multimodal arena. The "abliteration" (uncensoring) trend remains strong, with nearly all top Qwen derivative models carrying the abliterated tag, reflecting persistent community appetite for less constrained outputs.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,139 | 2.09M |
| [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,929 | 2.61M |
| [**deepseek-ai/DeepSeek-V4-Pro-0813**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 719 | 54,566 |
| [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,632 | 2.98M |
| [**Qwen/Qwen3.8-2.4T-A95B**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,146 | 17,386 |
| [**meta-models/Muse-Glimmer-30B**](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,756 | 517K |
| [**ornith-ai/Ornith-1.5-35B-A3B**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 321 | 12,611 |

The flagship **Qwen3.8-27B** is a state-of-the-art 27B multimodal model (image-text-to-text) with conversational capabilities, topping the chart with massive adoption. **Kimi-K3** from Moonshot AI is a compact multimodal model using compressed-tensors and feature-extraction techniques, a strong alternative to Qwen. **DeepSeek-V4** family (both Pro and Flash variants) pushes efficiency boundaries with the Flash version seeing 3M downloads. **Qwen3.8-2.4T-A95B** is Qwen's massive 2.4T-parameter MoE flagship for text generation. **Muse-Glimmer-30B** from Meta continues their open multimodal line with strong engagement. **Ornith-1.5-35B-A3B** (MoE, 3B active) shows growing interest in efficient sparse architectures.

---

### 🎨 Multimodal & Generation (video, audio, image)

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,566 | 695K |
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,338 | 3.90M |
| [**MiniMaxAI/MiniMax-Music3**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,183 | 16,644 |
| [**TenStrip/10Eros-Max**](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 316 | 0 |

**MiniMax-H3** is a leading video generation model (image-text-to-video) with the second-highest downloads on the list, cementing MiniMax's position in generative video. **LTX-2.5** from Lightricks is a versatile diffusion model supporting image-to-video, text-to-video, and video-to-video tasks. **MiniMax-Music3** extends the family to music generation (text-to-audio), a category gaining traction. **10Eros-Max** is a community fine-tune of MiniMax-H3 for specialized adult-oriented video content, showing the breadth of video model fine-tuning.

---

### 🔧 Specialized Models (code, math, embeddings, ASR)

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [**superwhisper/s1-mini**](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 202 | 1,913 |

**s1-mini** offers a compact text-generation model with ASR capabilities built on Qwen3 architecture — a niche hybrid demonstrating continued multi-purpose model design.

---

### 📦 Fine-tunes & Quantizations (community GGUF, uncensored, ablits)

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,627 | 6.32M |
| [**Qwen/Qwen3.8-27B-FP8**](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 664 | 2.31M |
| [**orcarouter/Qwen3.8-27B-Uncensored-MLX**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 887 | 34,909 |
| [**orcarouter/Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 990 | 143K |
| [**OBLITERATUS/Qwen3.8-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 533 | 165K |
| [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 623 | 1.22M |
| [**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 487 | 486K |
| [**orcarouter/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 336 | 85,371 |
| [**huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 255 | 635K |
| [**huihui-ai/Huihui-Qwen3.8-27B-abliterated**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 246 | 21,612 |
| [**ernperor-ai/Qwen3.8-27B-Ridge-GGUF**](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 245 | 97,247 |
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,397 | 0 |
| [**z-lab/Qwen3.8-27B-DFlash2**](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 194 | 29,705 |
| [**DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 192 | 177K |
| [**0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF**](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 227 | 506K |
| [**ornith-ai/Ornith-1.5-35B-A3B-GGUF**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 233 | 174K |
| [**empero-ai/Qwen3.8-9B-Distill**](https://huggingface.co/empero-ai/Qwen3.8-9B-Distill) | empero-ai | 165 | 9,260 |
| [**LBH-123-AI/Minimax_h3_latent_Upscaler**](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 159 | 0 |

The Qwen3.8-27B ecosystem has spawned a vast array of community derivatives. **unsloth**'s GGUF quantization leads all downloads at 6.3M, confirming the demand for llama.cpp-compatible formats. **Qwen's official FP8** offers a flexible precision alternative. Multiple "uncensored"/abliterated variants (orcarouter, OBLITERATUS, huihui-ai, JonathanColetti, HauhauCS, 0bserverx) show a strong demand for de-refusal-aligned models. **froggeric's fixed chat templates** is an intriguing metadata/utility resource with high likes but zero downloads. **Qwen3.8-9B-Distill** shows ongoing distillation efforts for smaller efficient models. **DFlash2** explores speculative decoding enhancements.

---

## 3. Ecosystem Signal

The Hugging Face ecosystem is undergoing clear consolidation around the **Qwen3.8-27B** architecture, which has become the dominant base model for community modification — far outpacing alternative bases like Llama or Mistral. The sheer volume of Qwen3.8 fine-tunes (15+ variants on this list alone) indicates that the model has become the default starting point for community experiments, from abliteration to speculative decoding optimization. **Uncensoring/abliteration** has evolved from a niche practice into a mainstream distribution strategy, with nearly all derivations targeting this use case.

The **open-weight vs. proprietary** dynamic shows open models winning on adoption (Qwen, DeepSeek, MiniMax) while pushing frontier capabilities in video generation and multimodal reasoning. **MiniMax-H3's** 3.9M downloads signal that video generation is now a flagship open-weight category. Quantization is concentrated overwhelmingly in **GGUF format**, with MLX gaining ground for Apple silicon users. The emergence of **MoE models** (Qwen3.8-2.4T-A95B, Ornith-1.5-35B-A3B) indicates a market shift toward sparse, compute-efficient architectures for both edge and cloud deployment, and the success of Flash/Distill variants points to growing preference for smaller, faster models that don't sacrifice quality.

---

## 4. Worth Exploring

1. **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)** — This 2.4T-parameter MoE text model represents the bleeding edge of sparse architecture design; studying its routing and activation patterns offers crucial insights into making massive models practical, and it serves as a benchmark for the next generation of efficient training.

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — With 3.9M downloads and a growing community of fine-tunes (including latent upscalers and content-specific variants), this image-text-to-video generator is a case study in how open-weight video AI is maturing, and its architecture is worth studying for anyone working in generative video.

3. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — Despite zero downloads, its 1.4K likes signal a community pain point: broken chat templates in released models. This utility highlights an emerging niche for model-metadata corrections, and serves as a reminder that robust prompt formatting infrastructure is becoming as valuable as the models themselves.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*