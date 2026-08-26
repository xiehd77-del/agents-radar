# Hugging Face Trending Models Digest 2026-08-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-26 01:23 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-08-26

---

## 1. Today's Highlights

The Hugging Face ecosystem is dominated this week by **Qwen3.8-27B**, a massive multimodal (image-text-to-text) release from Alibaba's Qwen team that has accumulated over **12.7K likes and 2.9M downloads**, spawning a vibrant ecosystem of abliterated (uncensored), GGUF-quantized, and specialized derivatives. In video generation, **MiniMax-H3** (4.5K likes, 4.6M downloads) and **Lightricks/LTX-2.5** (1.8K likes) are driving significant momentum in text-to-video and image-to-video pipelines. DeepSeek's **V4-Flash** and **V4-Pro** releases signal aggressive competition in the open-weight LLM space, while **Kimi-K3** from Moonshot AI (11K likes, 2.9M downloads) rounds out a strong week for frontier open-weight models. The community's obsession with **uncensored/abliterated variants** of Qwen3.8-27B is the clearest trend, with at least eight such derivatives appearing.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, Chat, Instruction-Tuned)

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 12,712 👍 | 2,945,415 ⬇️  
  Flagship multimodal LLM from Alibaba; the dominant base model driving this week's ecosystem activity.

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — deepseek-ai | 3,714 👍 | 3,528,373 ⬇️  
  Fast, lightweight V4 variant optimized for latency-sensitive conversational deployment.

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — moonshotai | 10,996 👍 | 2,865,293 ⬇️  
  Next-gen Kimi model with compressed-tensors; a major contender for multimodal reasoning workloads.

- **[deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)** — deepseek-ai | 758 👍 | 74,707 ⬇️  
  The Pro-tier V4 release, targeted at high-accuracy reasoning and coding tasks.

- **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** — ornith-ai | 419 👍 | 70,158 ⬇️  
  Mixture-of-Experts (MoE) model with 3.5B active parameters — strong efficiency-per-performance ratio.

- **[ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B)** — ornith-ai | 216 👍 | 98,323 ⬇️  
  Compact 9B sibling in the Ornith series — popular for edge and cost-sensitive deployment.

- **[superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini)** — superwhisper | 238 👍 | 3,474 ⬇️  
  A small text-generation model with ASR capabilities; emerging as a lightweight speech-text hybrid.

---

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI | 4,457 👍 | 4,639,786 ⬇️  
  State-of-the-art text-to-video and image-to-video diffusion model; the top video-generation release this week.

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 1,800 👍 | 833,845 ⬇️  
  A versatile single-file diffusion model supporting image-to-video, text-to-video, and video-to-video.

- **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** — MiniMaxAI | 1,246 👍 | 18,705 ⬇️  
  Text-to-music generation model using diffusers — new frontier in generative audio.

- **[Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b)** — Audio8 | 156 👍 | 3,640 ⬇️  
  Early preview of a compact TTS model built on the ArkTTS architecture.

- **[sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT)** — sensenova | 153 👍 | 2,682 ⬇️  
  Native any-to-any multimodal model — can consume and produce across modalities.

---

### 🔧 Specialized Models (Code, Math, Medical, Embeddings, Speech)

- *(No dedicated code/math/medical/embedding entrants this week; the trending list skews heavily toward general-purpose and multimodal models.)*

---

### 📦 Fine-Tunes & Quantizations (Community Fine-tunes, GGUF, Abliterated)

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 2,917 👍 | 7,334,695 ⬇️  
  The community's go-to GGUF quant of Qwen3.8-27B; highest downloads of any derivative.

- **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** — JonathanColetti | 722 👍 | 1,525,645 ⬇️  
  The most-downloaded uncensored Qwen3.8-27B variant, with aggressive MTP and llama.cpp support.

- **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** — huihui-ai | 357 👍 | 1,230,831 ⬇️  
  A well-maintained abliterated (safety-refusal-stripped) GGUF from a prolific quantizer.

- **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** — HauhauCS | 623 👍 | 832,185 ⬇️  
  Aggressive multi-token prediction (MTP) accelerated uncensored GGUF for lower-end hardware.

- **[0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF)** — 0bserverx | 277 👍 | 735,183 ⬇️  
  "Heretic"-tier abliteration — strips more refusals than standard variants; popular for roleplay.

- **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** — OBLITERATUS | 749 👍 | 389,747 ⬇️  
  Full abliteration in multi-format (MLX, GGUF, safetensors) with heavy downloads.

- **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** — orcarouter | 1,148 👍 | 249,744 ⬇️  
  FP8-precision uncensored variant — good balance of quality and memory footprint.

- **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** — orcarouter | 1,096 👍 | 68,855 ⬇️  
  Apple Silicon-friendly MLX port of the uncensored Qwen3.8-27B.

- **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** — orcarouter | 452 👍 | 154,225 ⬇️  
  Standard GGUF version of the uncensored Qwen3.8-27B family.

- **[z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2)** — z-lab | 227 👍 | 64,984 ⬇️  
  DFlash2 speculative-decoding optimized Qwen3.8-27B — faster inference without quality loss.

- **[incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2)** — incoai | 179 👍 | 105,786 ⬇️  
  Independently-built DFlash2 variant; community experimenting with different speculative heads.

- **[DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF)** — DavidAU | 240 👍 | 221,918 ⬇️  
  A heavily merged/GAIN-trained GGUF — combines multiple fine-tunes for enhanced reasoning.

- **[EschaLabs/Qwen3.8-27B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.8-27B-Escha-W2)** — EschaLabs | 127 👍 | 2,319 ⬇️  
  Experimental 2-bit quantization (W2) — pushes extreme compression limits.

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — froggeric | 1,468 👍 | 0 ⬇️  
  Chat-template fixes for Qwen3.5/3.8 — a community quality-of-life resource.

- **[peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates)** — peculiar-ragdoll | 244 👍 | 0 ⬇️  
  Alternative improved chat-template variants for Qwen models.

---

## 3. Ecosystem Signal

The ecosystem is showing a **clear bifurcation**: frontier labs (Qwen, DeepSeek, Moonshot, MiniMax) releasing increasingly powerful general-purpose and multimodal models, while the community builds an elaborate distribution and customization layer on top. **Qwen3.8-27B is the undisputed base model of the week** — its multimodal (image-text-to-text) design, permissive licensing, and strong performance have made it the default starting point for fine-tunes and quantizations. The deep **abliteration/uncensored trend** is notable: roughly 30% of trending models involve removing safety refusals, driving rapid adoption in creative and roleplay domains. **GGUF formats from unsloth and llama.cpp** remain the world's distribution standard, with several variants exceeding 1M downloads. Open-weight models are clearly winning the community mindshare, while proprietary APIs are relegated to enterprise contexts. Speculative decoding (DFlash2, MTP) is emerging as a key differentiation axis for inference efficiency. Video generation (MiniMax-H3, LTX-2.5) appears to be the next frontier race, mirroring the text-generation dynamics of early 2025.

---

## 4. Worth Exploring

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — Video generation is the fastest-accelerating capability in AI right now. With 4.6M downloads and strong likes, H3 represents the state of the art in open-weight text-to-video; studying its architecture and diffusion pipeline is essential for anyone tracking the video frontier.

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — Moonshot's Kimi-K3 (10,996 likes, 2.9M downloads) is the strongest challenger to Qwen/DeepSeek hegemony. Its use of **compressed-tensors** and feature-extraction tags hints at architectural innovations (likely sponsored-context compression) that could redefine context windows.

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — 7.3M downloads is a massive vote of confidence. As the canonical GGUF quant, this model represents the community's production deployment standard — studying its quantization approach (and unsloth's broader tooling) is uniquely valuable for practitioners deploying LLMs locally.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*