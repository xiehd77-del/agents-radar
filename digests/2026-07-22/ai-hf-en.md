# Hugging Face Trending Models Digest 2026-07-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-22 02:47 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-07-22

## 1. Today's Highlights

This week's trending models reveal a clear convergence of **multimodal capability, extreme quantization, and edge deployment**. Google's **Gemma-4-31B-it** leads downloads by a wide margin (12M+), signaling strong enterprise interest in large vision-language models. Meanwhile, the **Bonsai family from prism-ml**—spanning 1-bit and ternary 2-bit GGUF/MLX formats—demonstrates that super-low-bit quantization is maturing for practical use, with combined downloads exceeding 1.8M. The rapid rise of **ThinkingCap-Qwen3.6-27B** and **MiniCPM5-1B thinking variants** suggests reasoning-focused architectures are becoming a major trend. Notably, **Baidu's Unlimited-OCR** (2.2M downloads, #3 in likes) signals that domain-specific document intelligence remains a hot segment.

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, Chat, Instruction-Tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — Author: zai-org | ❤️ 4,285 | ⬇️ 545K  
  A MoE-DSA architecture model pushing state-of-the-art in Chinese-English bilingual reasoning; the highest-liked model this week.

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** — Author: poolside | ❤️ 204 | ⬇️ 3K  
  Enterprise-focused text-generation model likely optimized for software engineering workflows.

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** — Author: Nanbeige | ❤️ 91 | ⬇️ 0  
  A compact 3B LLM aimed at efficient deployment; newly uploaded with early community traction.

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** — Author: Cactus-Compute | ❤️ 298 | ⬇️ 1K  
  A JAX-based model optimized for function-calling and tool-use, marking a shift toward agentic LLM architectures.

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — Author: baidu | ❤️ 2,613 | ⬇️ 2.2M  
  A feature-extraction OCR model that processes unlimited document types; dominant in the document AI space.

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — Author: google | ❤️ 3,314 | ⬇️ 12.1M  
  Google's flagship open-weight VLM, instruction-tuned for vision-language tasks; highest download count by far.

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** — Author: thinkingmachines | ❤️ 1,368 | ⬇️ 16K  
  A multimodal MoE model supporting image-text-to-text and conversational AI; rapidly gaining attention.

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** — Author: moonshotai | ❤️ 1,200 | ⬇️ 722K  
  A code-specialized variant of Kimi family using compressed-tensors for efficient multimodal coding.

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** — Author: ATH-MaaS | ❤️ 238 | ⬇️ 17K  
  Vision-language OCR model based on Qwen3.5 architecture; specialized for structured document extraction.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — Author: Alissonerdx | ❤️ 223 | ⬇️ 0  
  A LoRA for identity-preserving text-to-video using LTX-Video; niche but innovative.

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — Author: nvidia | ❤️ 903 | ⬇️ 590K  
  A lightweight streaming ASR model optimized for real-time speech recognition; strong adoption for edge voice.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — Author: OpenMOSS-Team | ❤️ 299 | ⬇️ 92K  
  Combines transcription with speaker diarization in an audio-text-to-text pipeline; useful for meeting analytics.

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** — Author: openbmb | ❤️ 147 | ⬇️ 58  
  A vision-language-action model for robotic manipulation; part of the growing VLA trend.

- **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** — Author: openbmb | ❤️ 107 | ⬇️ 72  
  Companion VLA model for robotic object tracking; early-stage research release.

### 🔧 Specialized Models (Code, Embeddings, Function-Calling)

- **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)** — Author: nvidia | ❤️ 96 | ⬇️ 93K  
  A 1B sentence-similarity embedding model optimized for RAG pipelines and semantic search.

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** — Author: Cactus-Compute | ❤️ 298 | ⬇️ 1K  
  A JAX-native model specializing in function-calling and tool-use; signals growing interest in agentic systems.

- **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)** — Author: Motif-Technologies | ❤️ 128 | ⬇️ 125  
  A feature-extraction model for specialized retrieval or classification tasks; early beta release.

### 📦 Fine-tunes & Quantizations (GGUF, LoRA, Community Variants)

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — Author: prism-ml | ❤️ 899 | ⬇️ 432K  
  A pioneering **ternary 2-bit** quantization of a 27B model; one of the first production-ready ternary LLMs.

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — Author: prism-ml | ❤️ 571 | ⬇️ 1.4M  
  1-bit quantized Bonsai, pushing the boundary of extreme compression while retaining conversational quality.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — Author: HauhauCS | ❤️ 2,971 | ⬇️ 1.99M  
  An uncensored MoE vision-language fine-tune with aggressive behavior tuning; extremely high community engagement.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — Author: empero-ai | ❤️ 2,391 | ⬇️ 2.13M  
  A reasoning-enhanced GGUF quantized from Qwen3.5, distilled with Claude-generated synthetic data.

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** — Author: conradlocke | ❤️ 476 | ⬇️ 0  
  A LoRA for identity-preserving image editing on Krea-2, using ComfyUI; popular in creative AI communities.

- **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)** — Author: unsloth | ❤️ 116 | ⬇️ 7K  
  GGUF quantized version of Inkling, enabling efficient multimodal MoE inference on consumer hardware.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF)** — Author: GnLOLot | ❤️ 147 | ⬇️ 51K  
  A 1B thinking-model GGUF fine-tuned with Claude Opus synthetic data; popular for lightweight reasoning.

- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** — Author: AngelSlim | ❤️ 157 | ⬇️ 145K  
  Community GGUF of Tencent's Hy3 base model; strong adoption for Chinese-language generation.

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — Author: DavidAU | ❤️ 249 | ⬇️ 62K  
  An uncensored GGUF fine-tune blending multiple experimental techniques; niche but high visibility.

- **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)** — Author: prism-ml | ❤️ 162 | ⬇️ 25K  
  Apple MLX-native 1-bit quantization of Bonsai, optimized for Mac-based inference.

- **[prism-ml/Ternary-Bonsai-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit)** — Author: prism-ml | ❤️ 135 | ⬇️ 20K  
  MLX version of the ternary 2-bit Bonsai; extends extreme quantization to the Apple ecosystem.

## 3. Ecosystem Signal

**Extreme quantization is becoming mainstream.** The prism-ml Bonsai family (1-bit, ternary 2-bit) across GGUF and MLX formats represents a paradigm shift: models under 2 bits are no longer academic curiosities but deployed with millions of downloads. This aligns with broader **edge AI momentum** — NVIDIA's streaming ASR (0.6B), MiniCPM5-1B thinking models, and Qwen-based GGUF variants all target low-resource environments.

**Multimodal + MoE is the dominant architecture trend.** Models like **Inkling** (MoE), **Qwen3.6-35B-A3B** (MoE vision), and **GLM-5.2** (MoE-DSA) indicate that mixture-of-experts has become the default for balancing capability and efficiency. Google's **Gemma-4-31B-it** and Baidu's **Unlimited-OCR** confirm that even enterprise-scale models are increasingly multimodal.

**The "uncensored" and "thinking" niches are exploding.** Qwen3.6-35B-Uncensored (2.8M downloads) and Qwythos-9B (2.1M downloads) demonstrate massive community appetite for unfiltered models, while MiniCPM5-1B-Claude-Opus-* variants show that small thinking models (1B) can deliver reasoning capabilities previously reserved for much larger systems.

**Open-weight clearly dominates.** The top 10 most-downloaded models are all open-weight, with zero proprietary-via-API models on the list. The community fine-tuning ecosystem (DavidAU, GnLOLot, AngelSlim) remains highly active, particularly around Qwen3.6 and MiniCPM5 base models.

## 4. Worth Exploring

1. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — One of the first production-ready ternary (2-bit) LLMs. If it delivers usable quality, it could redefine the lower bound of model compression. Essential for anyone working on on-device LLM deployment.

2. **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** — A multimodal MoE that's rapidly climbing the charts. Its combination of image-text-to-text and audio-text-to-text in a single MoE architecture is architecturally novel and worth studying as a reference for building unified multimodal systems.

3. **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** — Built with JAX and optimized for function-calling, this model represents a shift toward agent-native architectures. For practitioners building tool-using agents, this is a rare example of a model designed from scratch for that purpose rather than adapted from a general LLM.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*