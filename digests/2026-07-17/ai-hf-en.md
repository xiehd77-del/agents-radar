# Hugging Face Trending Models Digest 2026-07-17

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-17 02:46 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-07-17

## Today's Highlights

This week's trending models reveal a clear shift toward **ultra-low-bit quantization** (1-bit and ternary formats) and **MoE architectures** dominating the LLM landscape. The Qwen 3.5/3.6 family maintains its stranglehold on the trending list, with multiple fine-tunes and quantizations (Qwythos, ThinkingCap, Qwen3.6-35B) accumulating millions of downloads. GLM-5.2 from zai-org leads in likes (4,030), signaling strong community interest in its MoE-DSA architecture. Multimodal models—especially OCR-focused ones from Baidu and ATH-MaaS—and video generation LoRAs (Wan-Dancer, LTX variants) show that generative AI continues expanding beyond pure text. Notably, **prism-ml's Bonsai series** (1-bit and ternary GGUF/MLX) points to a maturing ecosystem where extreme compression for local inference is a top priority.

---

## Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | ⭐ 4,030 | ⬇️ 513K  
  *A large MoE-DSA transformer with 5.2B active parameters, trending for its efficient mixture-of-experts design and strong conversational capabilities.*

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — deepreinforce-ai | ⭐ 902 | ⬇️ 1.78M  
  *A 35B parameter GGUF-quantized model optimized for local inference, with massive download numbers reflecting demand for high-capacity edge-deployable LLMs.*

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — InternScience | ⭐ 568 | ⬇️ 33.4K  
  *A Qwen3.5-MoE based agent-focused model, gaining traction for its integration of vision capabilities with tool-use architectures.*

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | ⭐ 2,238 | ⬇️ 2.04M  
  *A heavily downloaded Qwen3.5-based image-text-to-text model fine-tuned with synthetic data, blending reasoning and vision capabilities.*

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | ⭐ 2,787 | ⬇️ 2.32M  
  *An uncensored, aggressive-tuned MoE vision-language model (35B total, 3B active), one of the most downloaded models this week.*

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | ⭐ 2,011 | ⬇️ 1.85M  
  *Baidu's state-of-the-art OCR model in the image-text-to-text pipeline, trending for its unlimited-domain recognition and high accuracy.*

- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** — Wan-AI | ⭐ 92 | ⬇️ 1.9K  
  *An image-to-video generation model (14B diffusion) specialized for dancing motion synthesis, showcasing advances in controllable video generation.*

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — Alissonerdx | ⭐ 168 | ⬇️ 0  
  *An identity-preserving text-to-video LoRA for LTX models, trending for enabling consistent face generation in video outputs.*

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — OpenMOSS-Team | ⭐ 233 | ⬇️ 75K  
  *An audio-text-to-text model combining transcription with speaker diarization, trending for practical meeting/speech processing use cases.*

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** — ATH-MaaS | ⭐ 136 | ⬇️ 3.7K  
  *A Qwen3.5-based OCR vision model optimized for document understanding, competing with Baidu's OCR offering.*

- **[Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt)** — Cseti | ⭐ 77 | ⬇️ 0  
  *A novel-view-synthesis LoRA for LTX video generation, enabling cross-view prompting for 3D-aware video content.*

### 🔧 Specialized Models (code, math, medical, embeddings, tools)

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — yuxinlu1 | ⭐ 1,208 | ⬇️ 506K  
  *A Gemma-4-based GGUF model fine-tuned for agentic coding and terminal operations, trending for practical developer workflows.*

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** — Cactus-Compute | ⭐ 249 | ⬇️ 733  
  *A JAX-based function-calling and tool-use model, gaining interest for its specialized agentic capabilities inference framework.*

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — froggeric | ⭐ 924 | ⬇️ 0  
  *A utility repository providing corrected chat templates for Qwen models in MLX, trending for filling a critical usability gap in the ecosystem.*

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — prism-ml | ⭐ 610 | ⬇️ 74K  
  *A 2-bit ternary quantized 27B model, trending as an extreme compression experiment pushing the boundaries of LLM quantization.*

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — prism-ml | ⭐ 343 | ⬇️ 559K  
  *A 1-bit quantized 27B GGUF model, one of the most downloaded quantization experiments demonstrating viability of ultra-low precision inference.*

- **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)** — unsloth | ⭐ 216 | ⬇️ 1.71M  
  *Unsloth's NVFP4 (4-bit NVIDIA floating point) quantization of Qwen3.6-27B, trending for efficient GPU deployment with minimal quality loss.*

- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)** — jlnsrk | ⭐ 121 | ⬇️ 2.6K  
  *An int4 quantized version of GLM-5.2 optimized for CPU inference with expert streaming, enabling MoE models on consumer hardware.*

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** — GnLOLot | ⭐ 265 | ⬇️ 121K  
  *A 1B parameter MiniCPM5 fine-tuned for "thinking" (chain-of-thought) reasoning, then GGUF quantized for efficient local deployment.*

- **[prism-ml/Ternary-Bonsai-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit)** — prism-ml | ⭐ 84 | ⬇️ 7.6K  
  *Apple MLX-compatible 2-bit ternary quantization of the 27B Bonsai model, expanding extreme compression to Apple Silicon users.*

- **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)** — prism-ml | ⭐ 83 | ⬇️ 10.8K  
  *The MLX variant of the 1-bit Bonsai quantization, part of prism-ml's comprehensive cross-platform ultra-low-bit release strategy.*

- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** — AngelSlim | ⭐ 117 | ⬇️ 80.8K  
  *Community GGUF quantization of Tencent's Hy3 model, enabling local inference of this popular text-generation model.*

---

## Ecosystem Signal

### Qwen 3.5/3.6 Dominance and the MoE Shift

The Qwen family (3.5/3.6) is the clear foundation of choice this week, appearing in 10+ of the top 30 models across fine-tunes, quantizations, and multimodal variants. **MoE architectures** are winning: both GLM-5.2 (4.0K likes) and Qwen3.6-35B-A3B (2.8K likes) demonstrate that the community values models with large total parameters but small active ones (3B active out of 35B). This parallels the excitement around **extreme quantization**—the Bonsai series (1-bit and ternary) shows that even at 27B parameters, models remain useful at <2 bits/parameter.

### Open-Weight Landscape

All trending models are **open-weight**, with no proprietary models in the top 30. The GGUF ecosystem continues to dominate for distribution (see 1.78M downloads for Ornith-1.0-35B), but the **MLX** format is creeping in, especially for Apple Silicon users. Unsloth's NVFP4 format is also gaining traction for NVIDIA hardware, pointing to a **fragmented but maturing quantization landscape** where users expect cross-platform availability.

### Fine-tuning Activity

Synthetic data fine-tunes (e.g., Qwythos series using "Claude-Mythos" synthetic data) and the "thinking" / chain-of-thought trend (GnLOLot's MiniCPM5 variants) suggest that **post-training reasoning enhancement** is a key community focus. Video generation LoRAs (LTX, Wan-Dancer) are on the rise, but their download numbers remain small compared to LLM quantizations, indicating the video ecosystem is still niche.

---

## Worth Exploring

1. **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)** — With 1.7M downloads and top-tier quantization from the unsloth team, this is the most practically useful vision-language model for NVIDIA GPU owners. Its NVFP4 format balances quality and memory usage exceptionally well for production deployments.

2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — This 2-bit ternary model is a research artifact worth studying: it shows what's possible at the bleeding edge of compression. If 27B parameters run at ~5GB, the implications for on-device AI are massive.

3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — With 1.85M downloads and a 2K like count, this is the go-to model for OCR tasks. Its "unlimited" domain coverage makes it a strong candidate for document processing pipelines, especially for non-English or mixed-content documents.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*