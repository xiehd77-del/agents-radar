# Hugging Face Trending Models Digest 2026-08-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-14 02:04 UTC

---

# 🤗 Hugging Face Trending Models Digest
**2026-08-14** | 30 models analyzed

---

## 1. Today's Highlights

The ecosystem is witnessing a massive surge in **multimodal video generation**, with MiniMax-H3 dominating the charts across multiple variants—from official releases to community LoRAs and ComfyUI integrations. On the language model front, **Moonshot AI's Kimi-K3** leads with an extraordinary 10,623 weekly likes, signaling a major shift in the open-weight LLM landscape. **DeepSeek-V4** continues its strong run with the Flash variant surpassing 1.4M downloads, while **Meta's Muse-Glimmer-30B** establishes a new paradigm for image-text-to-text models with an official GGUF release. Notably, **Qwen3.8** introduces a massive 2.4T parameter MoE architecture with 95B active parameters, pushing the frontier of efficient large-scale inference. The community is heavily engaged in quantization and fine-tuning, with NVIDIA's Nemotron-Lightning-30B-A3B (NVFP4) representing a new breed of highly compressed, efficient architectures.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)** — Qwen | 789 likes · 1,012 downloads
  Qwen's flagship MoE model with 2.4T total parameters and 95B active, pushing the frontier of efficient massive-scale open-weight LLMs.

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — deepseek-ai | 3,323 likes · 1,431,587 downloads
  DeepSeek's fastest V4 variant, achieving massive adoption for high-speed inference with strong reasoning capabilities.

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — moonshotai | 10,623 likes · 1,871,575 downloads
  The week's most-liked model, Kimi-K3 is a compressed-tensor text model that combines feature extraction with conversational abilities.

- **[deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)** — deepseek-ai | 302 likes · 0 downloads
  The premium DeepSeek-V4 Pro variant, just released and generating strong early community interest.

- **[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** — LiquidAI | 603 likes · 116,640 downloads
  Liquid AI's compact 2.6B model with liquid architecture, demonstrating efficient performance at small scale.

- **[nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4)** — nvidia | 229 likes · 44,859 downloads
  NVIDIA's 30B MoE with 3B active parameters in NVFP4 precision, emphasizing extreme efficiency after quantization.

- **[deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview)** — deepgrove | 354 likes · 3,868 downloads
  A new mixture-of-experts causal LM preview from DeepGrove, attracting early adopters for its architectural novelty.

- **[nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16)** — nvidia | 130 likes · 22,279 downloads
  BF16 version of NVIDIA's compact MoE, offering full-precision access to the Lightning architecture.

- **[endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1)** — endless-frontier | 188 likes · 3,184 downloads
  A Qwen3.5-MoE-based multimodal conversational model exploring early universe physics and scientific reasoning.

- **[Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8)** — Qwen | 160 likes · 4,000 downloads
  FP8 quantized version of the flagship Qwen3.8, making the 2.4T model more accessible for deployment.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI | 3,826 likes · 1,605,940 downloads
  MiniMax's flagship video generation model supporting multiple modalities including text-to-video, image-to-video, and conversational video.

- **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)** — meta-models | 1,423 likes · 121,042 downloads
  Meta's 30B image-text-to-text model integrating visual understanding with conversational generation.

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 724 likes · 57,287 downloads
  Lightricks' versatile video diffusion model supporting image-to-video, text-to-video, and video-to-video workflows.

- **[lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo)** — lightx2v | 462 likes · 91,455 downloads
  A faster Turbo variant of MiniMax-H3 supporting multi-format video generation.

- **[larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)** — larryvrh | 726 likes · 0 downloads
  Community LoRA add-on for MiniMax-H3 Turbo enabling text-to-video and text-to-audio cross-modal generation.

- **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** — MiniMaxAI | 339 likes · 25 downloads
  MiniMax's new music generation model with SGLang-compatible serving and diffusers integration.

- **[SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3)** — SexGod1979 | 297 likes · 324 downloads
  A community text-to-video model on MiniMax-H3 architecture with explicit stylization.

- **[drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI)** — drbaph | 314 likes · 0 downloads
  ComfyUI-native adapter for MiniMax-H3 Turbo LoRA workflows, enabling node-based video generation.

- **[fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA)** — fal | 159 likes · 4,692 downloads
  Realism-focused LoRA for MiniMax-H3 improving human characters in video generation.

- **[Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B)** — Gazingstars123 | 131 likes · 0 downloads
  ComfyUI-compatible text-to-image diffusion single-file focused on animation and anime generation.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)** — nvidia | 372 likes · 1,164 downloads
  NVIDIA's multilingual voice chat model combining conversational AI with audio processing capabilities.

- **[lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA)** — lightx2v | 149 likes · 652 downloads
  A PEFT LoRA specialized for rewriting and optimizing video generation prompts.

- **[inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny)** — inclusionAI | 216 likes · 1,292 downloads
  A tiny hybrid model with MIT license, designed for efficient multilingual and domain-specific applications.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** — Comfy-Org | 1,291 likes · 10,365,210 downloads
  The most downloaded model this week, a ComfyUI single-file distribution of MiniMax-H3 with incredible adoption numbers.

- **[unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF)** — unsloth | 389 likes · 352,023 downloads
  Unsloth's GGUF quantization of Meta's Muse-Glimmer-30B, delivering massive downloads for efficient on-device inference.

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — DavidAU | 1,987 likes · 2,793,115 downloads
  An aggressively fine-tuned Qwen3.6 variant designed for uncensored generation with GGUF quantization.

- **[Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy)** — Kijai | 305 likes · 0 downloads
  Kijai's optimized implementation of MiniMax-H3 for ComfyUI native workflows.

- **[meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF)** — meta-models | 257 likes · 136,783 downloads
  Meta's official GGUF release, making the 30B image-text model accessible for CPU inference.

- **[unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF)** — unsloth | 149 likes · 111,222 downloads
  GGUF quantized MiniMax-H3 for efficient video generation across hardware tiers.

- **[ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot)** — ethanfel | 483 likes · 0 downloads
  A visually-focused INT8 quantized Qwen3-VL-32B variant with rotational convolution optimizations.

---

## 3. Ecosystem Signal

**Model Families Gaining Momentum:** The MiniMax-H3 ecosystem is clearly dominating this week, with over 8 entries spanning official releases, Turbo variants, LoRAs, ComfyUI integrations, and quantizations. This signals strong community investment in a single video-generation architecture. Qwen's MoE strategy is maturing rapidly—the Qwen3.8 (2.4T-A95B) represents an escalation of the large-scale MoE trend, supported by both FP8 quantizations and uncensored community fine-tunes. DeepSeek-V4 Flash continues to show remarkable persistence in downloads (1.4M+) and likes (3.3K+), indicating deep production adoption.

**Open-Weight vs Proprietary:** The trend is overwhelmingly open-weight, with all 30 models carrying open licenses and downloadable weights. MiniMax-Music3 and Kimi-K3 are representative of this major push mid-sized labs to release flagship models under open licenses. NVIDIA's Nemotron-Lightning (30B-A3B) with NVFP4 quantization showcases the industry's focus on extreme compression without massive quality loss.

**Quantization and Fine-tuning Activity:** GGUFs appear central to adoption velocity—unsloth and official contributors generate millions of downloads with quantized versions. Notably, NVFP4 (NVIDIA) advances beyond traditional FP8/INT8 for an order-of-magnitude efficiency leap. Uncensored and "heretic" fine-tunes from community members (DavidAU, ethanfel) continue to draw significant engagement, though these remain niche in download counts relative to mainstream versions.

---

## 4. Worth Exploring

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — At 10,623 weekly likes, this model represents a major open-weight milestone. The combination of feature-extraction and compressed-tensors architecture suggests a new approach to multimodal AI and deeply efficient conversational systems. For anyone studying the future of open-source model architectures, this is the most important release of the week.

- **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)** — This model pushes the boundary of MoE at extreme scale. With 2.4T total parameters and only 95B active, Qwen is effectively demonstrating how near-frontier-quality models can operate at a fraction of the inference cost. Studying this architecture provides insight into the next generation of efficient model scaling.

- **[unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF)** — As video generation becomes heavily adopted, this GGUF quantization democratizes access to MiniMax-H3's powerful capabilities. With 111K downloads, it clearly addresses real deployment needs, and its image-text-to-video architecture via stable-diffusion.cpp shows how far the ecosystem has come in making advanced generative models run on consumer hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*