# Hugging Face Trending Models Digest 2026-08-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-22 01:17 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-08-22

---

## 1. Today's Highlights

The Hugging Face hub is dominated this week by the **Qwen3.8-27B** ecosystem, with the base model amassing ~12K likes and spawning a remarkable wave of fine-tunes, abl iterations, and quantizations that collectively account for nearly half of the top 30. **DeepSeek** and **MiniMax** demonstrate strong momentum with major releases (DeepSeek-V4-Pro/Flash, MiniMax-H3/Music3), while **Kimi-K3** continues its surge as the second most-liked model of the week. The community's appetite for **abliterated/uncensored variants** of frontier models is unmistakable—no fewer than eight such derivatives appear in the list—and GGUF quantization remains the dominant distribution format for local deployment. Multimodal capabilities continue to blur the text/image/video boundary, with several models explicitly combining vision, language, and generation.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes | Downloads |
|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,966 | 1.7M |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 709 | 49.6K |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,612 | 2.8M |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,913 | 2.4M |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,139 | 15.7K |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 290 | 9.2K |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 191 | 1.1K |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 175 | 21.1K |

**Qwen3.8-27B** is the week's centerpiece: a multimodal, 27B-parameter conversational model with vision support that has become the default base for countless community projects. **DeepSeek-V4-Flash** delivers high-throughput performance at scale, **Kimi-K3** continues its strong adoption with compressed-tensor support, and **Ornith-1.5-35B-A3B** is an intriguing MoE vision-language hybrid. Qwen's **2.4T-A95B sparse MoE** pushes parameter counts to new extremes.

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads |
|---|---|---|---|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,294 | 3.6M |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,163 | 15.7K |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,493 | 654K |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,738 | 505K |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 311 | 0 |

**MiniMax-H3** is the breakout video-generation model of the week with 3.6M downloads, while **LTX-2.5** delivers versatile image/video-to-video capabilities. **Muse-Glimmer-30B** from meta-models stands out as a polished 30B multimodal conversational model. MiniMax's **Music3** explores the text-to-music frontier, and **10Eros-Max** (a MiniMax-H3 fine-tune) shows the community already building on top of the video model.

---

### 🔧 Specialized Models (code, math, medical, embeddings, etc.)

| Model | Author | Likes | Downloads |
|---|---|---|---|
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 191 | 1.1K |

**s1-mini** is a Qwen3-based lightweight ASR/speech model that pairs text generation with transcription, straddling the language/specialized boundary. Notably, the specialized model category is thin this week—the ecosystem is heavily concentrated around general-purpose LLMs and generation models rather than domain-specific tools.

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, abliterated variants)

| Model | Author | Likes | Downloads |
|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,509 | 5.8M |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 823 | 107K |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 821 | 18K |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 570 | 1.1M |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 443 | 124K |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 422 | 357K |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 660 | 1.9M |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,370 | 0 |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 237 | 74K |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 295 | 68K |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 231 | 338K |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 207 | 123K |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 213 | 422K |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 229 | 17.5K |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 328 | 1.0M |
| [Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 201 | 198K |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 170 | 155K |

This category is the *real* story of the week. The Qwen3.8-27B fine-tuning ecosystem is massive: **abliterated/uncensored variants** from at least five independent creators, **GGUF and FP8 quantizations** for every use case, plus novel approaches like GAIN training, MTP (multi-token prediction), and speculative decoding. Unsloth's GGUF alone has 5.8M downloads, making it the most-distributed artifact on the list. The froggeric chat-template fix (1,370 likes, 0 downloads) signals a real pain point in the community around Jinja templates for Qwen 3.5.

---

## 3. Ecosystem Signal

**The Qwen dynasty is unquestionable.** Ten of the top 30 models are Qwen3.8-27B derivatives, and when you count all Qwen-family models, that's 12 entries—40% of the entire list. The pattern is clear: release a strong 27B multimodal base model, and the community will generate an entire economy of fine-tunes, quantizations, and niche variants. Unsloth remains the preferred quantization partner, with huihui-ai consolidating its position as the go-to abliteration specialist.

**"Uncensored" has become a feature category, not a niche.** Eight of the top 30 models are abliterated or uncensored variants, rivaling the base model's popularity. This trend reflects a persistent demand for models without safety filters for creative writing, roleplay, and general experimentation—and it shows no signs of slowing.

**The open-weight frontier is expanding across modalities.** DeepSeek, MiniMax, and Kimi are shipping serious competition to closed models across text, video, and music generation. The success of MiniMax-H3 (3.6M downloads) signals that open video generation is hitting mainstream adoption.

**Quantization formats are diversifying** — GGUF and FP8 dominate, but MLX and NVFP4 are gaining traction. The presence of both Apple MLX and NVIDIA NVFP4 files suggests the ecosystem is actively preparing for multi-platform local inference.

---

## 4. Worth Exploring

**1. [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) — The hub of this week's universe.** If you want to understand what the community is building on, this is the foundation. Its multimodal (image-text-to-text) capabilities, 27B size, and overwhelming community support make it the most influential architecture in the current landscape. Studying its design choices (and the sheer breadth of its derivative ecosystem) reveals where open-weight LLMs are heading.

**2. [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) — The most-downloaded generation model this week.** With 3.6M downloads and support for both text-to-video and image-to-video, it represents the leading edge of open video generation. The early existence of community fine-tunes (10Eros-Max) confirms it's a platform, not just a model.

**3. [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) — The compressed-tensor pioneer.** The second most-liked model this week, Kimi-K3 is notable for its feature-extraction use case and compressed-tensor approach, which points to where efficient deployment is headed. Its 2.4M downloads suggest it's being actively used in production pipelines, making it a must-study for anyone working on model efficiency or retrieval systems.

---

*Digest compiled from Hugging Face Hub trending data, 2026-08-22.*

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*