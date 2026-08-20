# Hugging Face Trending Models Digest 2026-08-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-20 01:18 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-08-20

## 1. Today's Highlights

The Hugging Face ecosystem is dominated by two major launches this week. **Qwen3.8-27B** from Alibaba's Qwen team has taken the top spot with 11,485 likes and over 1M downloads, cementing Qwen's position as the leading open-weight multimodal family. Meanwhile, **MiniMaxAI/MiniMax-H3** has exploded in popularity with 4,182 likes and over 15M downloads (via its Comfy-Org mirror), indicating massive demand for high-quality text-to-video generation. The open-source community has responded with an unprecedented wave of fine-tunes: no fewer than **ten uncensored/abliterated variants** of Qwen3.8-27B have surfaced within days of release, alongside multiple quantization formats. Big tech players are also making moves—**DeepSeek-V4-Pro-0813** and **Kimi-K3** (10,854 likes) both launched this week, signaling an intensifying race in open-weight frontier models.

## 2. Trending Models

### 🧠 Language Models

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 11,485 likes | 1,006,235 downloads  
  The flagship Qwen3.8 multimodal model (image-text-to-text) with 27B parameters, setting new benchmarks for open-weight conversational AI.

- **[deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)** — deepseek-ai | 633 likes | 37,583 downloads  
  DeepSeek's latest text-generation model in the V4 line, continuing the company's push for efficiency and strong reasoning capabilities.

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — deepseek-ai | 3,548 likes | 2,330,940 downloads  
  The lighter, faster alternative in the V4 family, gaining massive adoption for production inference at scale.

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — moonshotai | 10,854 likes | 2,289,863 downloads  
  Kimi's newest multimodal model featuring compressed-tensors for efficient deployment, rapidly climbing the charts.

- **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)** — Qwen | 1,100 likes | 12,699 downloads  
  The MoE giant: a 2.4T-parameter mixture-of-experts text model with 95B active parameters, pushing the frontier of open-weight scale.

- **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)** — meta-models | 1,702 likes | 430,313 downloads  
  Meta's foray into open multimodal models—a 30B image-text-to-text model with strong conversational skills.

- **[dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev)** — dots-studio | 232 likes | 1,239 downloads  
  A preview of the dots3 note-taking language model, designed for long-context text generation and summarization.

### 🎨 Multimodal & Generation

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI | 4,182 likes | 3,055,205 downloads  
  The most-liked video generation model of the week: a text-to-video / image-to-video diffusion model that has taken the creative community by storm.

- **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** — MiniMaxAI | 1,037 likes | 13,138 downloads  
  Text-to-music generation model using diffusers, marking music as the latest frontier in generative AI.

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 1,323 likes | 555,993 downloads  
  A versatile video generation model supporting text-to-video, image-to-video, and video-to-video, with a single-file diffusion format.

- **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** — Comfy-Org | 1,444 likes | 15,213,225 downloads  
  The ComfyUI-optimized mirror of MiniMax-H3; its massive download count highlights how central ComfyUI is to the video generation workflow.

- **[lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo)** — lightx2v | 625 likes | 340,984 downloads  
  A faster, tuned variant of MiniMax-H3 optimized for t2v, i2v, and r2v workflows.

- **[TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max)** — TenStrip | 283 likes | 0 downloads  
  A community fine-tune of MiniMax-H3 for adult-themed video generation (uncensored/NSFW), currently trending but with no downloads yet.

- **[Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B)** — Gazingstars123 | 270 likes | 26,566 downloads  
  A 2.9B text-to-image diffusion model with ComfyUI support, gaining traction for lightweight anime-style generation.

### 🔧 Specialized Models

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — froggeric | 1,289 likes | 0 downloads  
  Not a model but a critical utility: fixes the chat templates (Jinja) for Qwen3.5 models, solving a major pain point for the ecosystem.

### 📦 Fine-tunes & Quantizations

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 2,083 likes | 4,318,134 downloads  
  The canonical GGUF quantization for Qwen3.8-27B; the go-to format for local deployment with llama.cpp.

- **[Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8)** — Qwen | 600 likes | 1,063,646 downloads  
  Official FP8 precision variant for accelerated inference on Hopper/Ada GPUs.

- **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** — orcarouter | 614 likes | 60,078 downloads  
  Abliterated (uncensored) Qwen3.8 in FP8 format; one of many "uncensored" variants trending this week.

- **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** — JonathanColetti | 467 likes | 766,812 downloads  
  The most-downloaded uncensored Qwen3.8 variant, demonstrating the community's appetite for unrestricted models.

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — DavidAU | 2,165 likes | 3,033,363 downloads  
  One of the most-downloaded community GGUF models; a heavily modified "uncensored" Qwen3.6 with multi-token prediction, from prolific creator DavidAU.

- **[unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4)** — unsloth | 286 likes | 653,042 downloads  
  NVIDIA's 4-bit floating point quantization for Blackwell GPUs, delivered via unsloth's optimization pipeline.

- **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** — HauhauCS | 287 likes | 131,113 downloads  
  An aggressive uncensored variant with MTP (multi-token prediction) support; showcases community experimentation.

- **[0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF)** — 0bserverx | 160 likes | 245,266 downloads  
  Another "abliterated" Qwen3.8 GGUF; the naming conventions alone reveal a vibrant sub-community.

- **[Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF)** — Blackfrost-AI | 170 likes | 164,263 downloads  
  A clean, straightforward abliterated GGUF of Qwen3.8-27B for local uncensored use.

- **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** — huihui-ai | 171 likes | 94,234 downloads  
  From the prolific huihui-ai, a polished abliterated version in GGUF format.

- **[huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated)** — huihui-ai | 167 likes | 7,207 downloads  
  The safetensors version of huihui's abliterated Qwen3.8, for direct transformers integration.

- **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** — orcarouter | 599 likes | 27 downloads  
  MLX format for Apple Silicon; an example of the "uncensored" trend extending to every deployment target.

- **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** — orcarouter | 187 likes | 26,472 downloads  
  The GGUF companion to the MLX release above.

- **[empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF)** — empero-ai | 197 likes | 32,454 downloads  
  A community GGUF with custom quantization focusing on reduced memory footprint.

- **[Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3)** — Comfy-Org | 193 likes | 325,083 downloads  
  ComfyUI-optimized version of MiniMax-Music3, bringing music generation into the node-based ecosystem.

## 3. Ecosystem Signal

**Qwen is the undisputed leader this week.** The Qwen3.8 family (especially the 27B variant) has generated an order of magnitude more derivative work than any other model—10 of the 30 trending slots are Qwen3.8 fine-tunes or quantizations. The sheer volume of community activity around "uncensored" (abliterated) variants is striking: at least 8 such models appeared within days of release. This points to a robust, distributed pipeline where first the base model drops, then quantizations (GGUF, FP8, NVFP4, MLX), then community modifications layer on top.

**Open weights are winning.** Between Qwen, DeepSeek, Kimi, MiniMax, and Meta, the top of the charts is dominated by open or open-weight releases from well-funded labs. The previous "proprietary closed API" model is fading; instead, labs release strong open models and compete on ecosystem adoption.

**Video generation is the hottest new frontier.** MiniMax-H3's explosive adoption (15M+ downloads via ComfyUI mirror) signals that video gen is where image gen was in 2023. This is the category to watch for the remainder of 2026.

**Quantization remains the community's obsession.** GGUF variants dominate downloads, with unsloth's pipeline becoming the industry standard for creating high-quality quantizations rapidly.

## 4. Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — This is the model to study right now. It represents the current state of the art in open-weight multimodal (image-text-to-text) models at the 27B scale. Understanding its architecture, training pipeline, and the community ecosystem it spawned (10+ derivatives in under a week) is essential for anyone tracking the AI landscape. Its FP8 and GGUF derivatives make it broadly deployable, from data centers to consumer laptops.

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** (or the [Comfy-Org mirror](https://huggingface.co/Comfy-Org/MiniMax-H3) with 15M+ downloads) — If you want a pulse on where generative media is heading, this is it. MiniMax-H3 is redefining what's expected from open-weights video generation. The fact that its ComfyUI mirror has 15,213,225 downloads suggests a huge creative user base. For anyone building on generative video, this is the model to explore.

3. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — This tiny utility (0 downloads, but 1,289 likes!) reveals an underrated truth: infrastructure and developer experience are what make or break a model ecosystem. The fact that someone had to publish a fix for Qwen3.5's chat templates, and that it received massive social validation, highlights how important tooling is. It's a reminder that "small" contributions can have outsized impact.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*