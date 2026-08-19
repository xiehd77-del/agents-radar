# Hugging Face Trending Models Digest 2026-08-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-19 01:19 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-08-19

---

## 1. Today's Highlights

The Hugging Face ecosystem this week is dominated by a **major new frontier model wave**: Qwen's **Qwen3.8-27B** (11.1K likes) and Moonshot AI's **Kimi-K3** (10.8K likes) are leading the charts, signaling intense competition in open-weight multimodal LLMs. The **Qwen3.8 family is the clear ecosystem hotspot**, with the base model spawning a massive quantization and fine-tuning ecosystem — from unsloth's GGUF/FP8 conversions to multiple uncensored community variants. In the video generation space, **MiniMax-H3** continues its explosive momentum (4.1K likes, 2.8M downloads) with strong ComfyUI integration, while **DeepSeek-V4-Flash** stands out as a highly popular high-performance text-generation model. Notably, the trend toward **quantized, locally-runnable models** (GGUF, FP8, NVFP4, MLX) is stronger than ever, with quantized variants often seeing higher download counts than their base models.

---

## 2. Trending Models by Category

### 🧠 Language Models

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 602 | 31K |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,527 | 2.1M |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 322 | 269K |
| [Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 320 | 10K |

- **DeepSeek-V4-Flash-0731** — A high-performance text-generation model that has become one of the most downloaded LLMs this week (2.1M downloads), demonstrating DeepSeek's continued user traction.
- **DeepSeek-V4-Pro-0813** — The premium "Pro" tier of DeepSeek's V4 family, offering enhanced capabilities in a dense configuration.
- **NVIDIA Nemotron-3.5-Lightning-30B-A3B** — NVIDIA's efficient 30B total/3B active parameter model, pre-quantized to NVFP4 — a strong contender for edge deployment with excellent performance-to-compute ratio.
- **Ling-3.0-tiny** — InclusionAI's compact language model using a hybrid architecture (bailing_hybrid), notable for its small-footprint design.

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,138 | 666K |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,144 | 2.9M |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,224 | 504K |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,682 | 384K |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 962 | 12K |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 609 | 300K |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 249 | 25K |
| [LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 173 | 9K |

- **Qwen3.8-27B** — The week's biggest release: Qwen's flagship multimodal model (image+text), highly praised for vision-language reasoning and used as the base for many fine-tunes.
- **MiniMax-H3** — The hottest video generation model of the moment; released by MiniMax, it excels at text-to-video and image-to-video tasks with strong quality.
- **LTX-2.5** — Lightricks' flexible video model supporting many input/output modes (text-to-video, image-to-video, video-to-video), popular among content creators.
- **Muse-Glimmer-30B** — Meta's 30B multimodal model that powers rich visual understanding and conversation, a leading open-weights vision-language option.
- **MiniMax-Music3** — Dedicated text-to-music generation model, bringing high-quality AI composition to the open ecosystem.
- **Anima-2.9B** — A ComfyUI-compatible text-to-image diffusion model with a great quality-to-size ratio.
- **LFM2.5-VL-3B** — Liquid AI's compact vision-language model built on liquid architectures, demonstrating efficient small-model video understanding.

### 🔧 Specialized Models

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,826 | 2.2M |

- **Kimi-K3** — Moonshot AI's highly popular multimodal model with 10.8K likes; notable for using **compressed-tensors** (feature-extraction pipeline) — a technical novelty that reduces memory footprint while retaining quality. Its popularity signals strong demand for efficient, high-performing vision-language models.

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,823 | 3.6M |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,142 | 3.0M |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 482 | 787K |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 564 | 741K |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 411 | 559K |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 262 | 524K |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 530 | 45K |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,426 | 14.6M |
| [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 178 | 285K |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,257 | 0 |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 226 | 13K |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 274 | 0 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 203 | 28K |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 173 | 13K |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 266 | 0 |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 220 | 1K |

- **unsloth/Qwen3.8-27B-GGUF** — The most-downloaded quantization this week (3.6M); unsloth provides highly optimized GGUF quants that make Qwen3.8-27B runnable on consumer hardware.
- **DavidAU's Qwen GGUF** — A heavily community-embraced fine-tune (3M downloads) centered on uncensored/"heretic" behavior with MTP (multi-token prediction) support.
- **Comfy-Org/MiniMax-H3** — The ComfyUI packaged version of MiniMax-H3, hitting a staggering **14.6M downloads**, making it the most-downloaded model on this list — evidence of ComfyUI's centrality in video generation workflows.
- **Comfy-Org/MiniMax-Music-3** — ComfyUI integration for music generation, quickly adopted by the creative community.
- **JonathanColetti/Qwen3.8-27B-Uncensored-GGUF** — Popular uncensored GGUF variant with MTP support for local use.
- **Qwen/Qwen3.8-27B-FP8** — Official FP8 quantized version of Qwen3.8-27B for faster inference on capable GPUs.
- **unsloth/Qwen3.8-27B-NVFP4** — NVIDIA's 4-bit floating point format applied to Qwen3.8-27B via unsloth — emerging as the SOTA quantization for H100-class hardware, quickly gaining adoption (524K downloads).
- **Qwen/Qwen3.8-2.4T-A95B-FP8** — The FP8 quant of Qwen's gigantic 2.4T-parameter MoE model (95B active), making it deployable on fewer GPUs.
- **orcarouter/Qwen3.8-27B-Uncensored-MLX** — Apple-silicon MLX version of the uncensored Qwen, targeting Mac users (0 downloads so far — still very new).
- **froggeric/Qwen-Fixed-Chat-Templates** — A clever utility (MLX/Jinja) fixing chat template issues in Qwen 3.5 — shows the ecosystem's DNA of meta-tooling.
- **TenStrip/10Eros-Max** — An uncensored fine-tune of MiniMax-H3 for niche creative use cases.
- **dots-studio/dots3-note-prev** — Dots Studio's preview multimodal model (image-text-to-text) exploring note-taking and document understanding.

---

## 3. Ecosystem Signal

**Model Families in the Spotlight:** The **Qwen3.8-27B family** is the most dynamic in the ecosystem, producing the largest tail of fine-tunes and quantizations (GGUF, FP8, NVFP4, MLX, uncensored variants) across all categories. **MiniMax is consolidating its position as the #1 open video generation family**, with its H3 model supporting a huge ComfyUI ecosystem. **DeepSeek-V4** solidifies a strong position in text-generation with high downloads, while **Moonshot's Kimi-K3** uses compression innovation to attract interest.

**Quantization is the New Standard:** The download statistics reveal a powerful truth: users largely prefer quantized models over base models. For instance, GGUF downloads (3.6M) outpace the base Qwen model (666K) by 5x. ComfyUI packaging of MiniMax-H3 (14.6M downloads) is a reminder that **interface and deployment convenience matters more than raw model size**.

**Uncensored fine-tunes represent a significant consumer segment:** The mix of "uncensored" and "abliterated" models (from DavidAU, orcarouter, JonathanColetti, HauhauCS, TenStrip) demonstrates persistent demand in the open-weight community for less restricted models, often reaching millions of downloads — not a marginal trend.

**Open-weight models are winning the ecosystem battle:** All 30 trending models are open-weights. The competitive dynamics among Qwen, DeepSeek, MiniMax, Moonshot, NVIDIA, Meta, and LiquidAI show **an ecosystem where openness is a commercial necessity to drive adoption and community value**.

---

## 4. Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) (11.1K likes)** — The most-liked model of the week and the clear base for the week's largest metadata. As the Qwen3.8-27B family expands (multimodal, MoE, FP8, NVFP4), following this model is the *surest* way to understand where the open AI ecosystem is heading in the next 6 months. Its "image-text-to-text" capabilities signal the future of unified multimodal LMMs.

2. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) (10.8K likes)** — Kimi-K3 combines high popularity with a relatively new technical approach: **compressed-tensors**. Its use of feature-extraction with compressed tensors is an architecture design worth studying for anyone building efficient multimodal systems — and a likely harbinger of the next wave of compression-aware model design.

3. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) (3.6M downloads)** — The most-downloaded model this week (excluding ComfyUI) signals that **local, consumer-grade deployment is the killer app for open models right now**. As GGUF/GPTQ/NVFP4 quantizations enable ever-larger models on consumer hardware, unsloth's pipeline represents the infrastructure that makes this possible — essential to study for anyone planning to serve or distribute open models.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*