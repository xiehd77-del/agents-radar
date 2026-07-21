# Hugging Face Trending Models Digest 2026-07-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-21 02:49 UTC

---

# Hugging Face Trending Models Digest — 2026-07-21

## 1. Today's Highlights

This week's trending models reveal a clear surge in **ultra-low-bit quantization** (1-bit and ternary), led by prism-ml's Bonsai series, which collectively amassed over 1.6 million downloads. Meanwhile, **Google's Gemma-4-31B-it** maintains dominant traction with nearly 12 million downloads, signaling strong enterprise appetite for multimodal instruction-tuned models. The **Qwen3.6 ecosystem** is exploding—multiple uncensored, vision-capable, and MoE variants dominate the chart, and the rise of **robotics-specific models** (MiniCPM-RobotManip, MiniCPM-RobotTrack) from openbmb suggests a new frontier in vision-language-action models. Notably, **1-bit and ternary quantization** is no longer experimental—it's production-ready, with GGUF and MLX formats seeing heavy community adoption.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 4,228 likes | 531,947 downloads  
  Zhipu's MoE-DSA architecture flagship, trending for its strong conversational performance and efficient sparse activation design.

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — tencent | 848 likes | 13,698 downloads  
  Tencent's Hunyuan-based third-generation LLM, gaining traction as a competitive open-weight alternative for Chinese-language tasks.

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** — Cactus-Compute | 292 likes | 950 downloads  
  A JAX-native model specialized in function calling and tool use, notable for its unique needle architecture and inference efficiency.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — google | 3,298 likes | 11,987,240 downloads  
  Google's latest multimodal instruction model, dominating downloads with strong vision-language capabilities and permissive licensing.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | 2,453 likes | 2,122,848 downloads  
  A universal OCR model from Baidu, trending for its ability to handle diverse document layouts and languages in a single architecture.

- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** — Wan-AI | 145 likes | 2,408 downloads  
  An image-to-video model specialized in human dancing motion generation, gaining interest for creative video synthesis.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — Alissonerdx | 214 likes | 0 downloads  
  A LoRA for identity-preserving text-to-video using LTX-Video, trending for its promise of consistent character generation.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — OpenMOSS-Team | 293 likes | 87,533 downloads  
  A unified speech transcription and speaker diarization model, trending for end-to-end audio understanding in a single forward pass.

- **[OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime)** — OpenMOSS-Team | 89 likes | 544 downloads  
  A real-time video-language model, gaining attention for low-latency video understanding and streaming applications.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** — moonshotai | 1,178 likes | 713,992 downloads  
  Moonshot AI's compressed code generation model based on Kimi architecture, trending for high-performance coding with reduced compute footprint.

- **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)** — nvidia | 87 likes | 61,708 downloads  
  Nvidia's third-generation embedding model, trending as a strong contender for retrieval-augmented generation and semantic search tasks.

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** — openbmb | 135 likes | 0 downloads  
  A vision-language-action model for robotic manipulation, representing a new category of embodied AI models on Hugging Face.

- **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** — openbmb | 100 likes | 0 downloads  
  A companion model for robot object tracking, extending MiniCPM's VLA capabilities to dynamic scene understanding.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — prism-ml | 857 likes | 338,945 downloads  
  A 2-bit ternary quantization of Qwen3.5-class models, trending for extreme memory efficiency while retaining strong reasoning.

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — prism-ml | 542 likes | 1,262,894 downloads  
  A 1-bit quantization of a 27B model, the most downloaded GGUF this week—proof that sub-2-bit LLMs are viable for local deployment.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 2,937 likes | 2,007,025 downloads  
  An uncensored MoE fine-tune of Qwen3.6 with vision capabilities, trending for aggressive refusal tuning and high throughput.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | 2,371 likes | 2,117,323 downloads  
  A GGUF-quantized reasoning model blending Qwen3.5 with Claude-style synthetic data, trending for strong chain-of-thought performance.

- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** — AngelSlim | 149 likes | 109,749 downloads  
  Community GGUF quantization of Tencent's Hy3 model, making Hunyuan-class capabilities accessible on consumer hardware.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** — GnLOLot | 135 likes | 28,012 downloads  
  A 1B parameter thinking model quantized via GGUF, trending for bringing reasoning capabilities to ultra-small footprints.

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — DavidAU | 159 likes | 16,719 downloads  
  An aggressively fine-tuned and fused Qwen3.6 variant, trending in the uncensored community for maximum creative freedom.

## 3. Ecosystem Signal

The dominant trend this week is the **commoditization of extreme quantization**—1-bit and ternary models from prism-ml are no longer experimental curiosities but are seeing millions of downloads, indicating that local LLM deployment on low-resource hardware is now mainstream. The **Qwen3.6 family** has become the foundational backbone for community fine-tuning, with uncensored, reasoning, and vision variants proliferating rapidly—suggesting that Qwen's open-weight strategy is successfully capturing the enthusiast and research market. Meanwhile, **Google's Gemma-4-31B-it** proves that proprietary-backed open-weight models continue to dominate raw download counts, but the community is increasingly building on top of them with fine-tunes and quantizations. A notable emerging category is **robotics-focused VLAs** from openbmb's MiniCPM line, which, despite zero downloads (likely new uploads), signal a growing interest in embodied AI on the Hub. The **audio-text-to-text** category also shows life with MOSS-Transcribe-Diarize, indicating multimodal expansion beyond vision.

## 4. Worth Exploring

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — With 1.26M downloads and a 1-bit quantization of a 27B model, this is the strongest signal that sub-2-bit LLMs are viable for production local use. Run it on a laptop and evaluate the quality/compression trade-off yourself.

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** — As one of the first vision-language-action models on Hugging Face, this represents a new paradigm for embodied AI. Worth studying its architecture and experimenting with real or simulated robotic tasks.

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** — A JAX-native function-calling model with a novel architecture. If you're working on agentic AI or tool-use pipelines, this is a fresh approach worth benchmarking against traditional transformer-based models.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*