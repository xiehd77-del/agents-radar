# Hugging Face Trending Models Digest 2026-07-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-19 02:52 UTC

---

# Hugging Face Trending Models Digest — 2026-07-19

## Today's Highlights

This week's trending models showcase a clear shift toward **extreme quantization** and **multimodal capability**. The "Bonsai" family from prism-ml has seen explosive adoption — the 1-bit and 2-bit (ternary) GGUF variants exceed 1.5 million combined downloads, signaling strong demand for ultra-efficient local deployment. Meanwhile, **GLM-5.2** from zai-org (4,129 likes) and **google/gemma-4-31B-it** (12.6M downloads) dominate the full-precision frontier, with both embracing MoE and vision capabilities. The Qwen ecosystem continues to expand rapidly, spawning numerous fine-tunes and quantized variants like **Qwythos-9B** and **ThinkingCap-Qwen3.6-27B**. Notably, **baidu/Unlimited-OCR** and **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** each crossed 2M+ downloads this week, underscoring strong demand for OCR and reasoning-capable vision models.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 4,129 likes, 541,662 downloads  
  A flagship MoE model with dynamic sparse attention (DSA), trending as one of the most liked open-weight LLMs this week for its blend of efficiency and strong conversational performance.

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — tencent | 830 likes, 13,571 downloads  
  The latest Hunyuan generation model from Tencent, gaining traction for its strong text-generation capabilities and Apache-2.0 licensing.

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — InternScience | 579 likes, 35,575 downloads  
  A Qwen3.5-based MoE model optimized for agentic workflows and tool use, reflecting the growing trend of models designed for autonomous task completion.

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — froggeric | 941 likes, 0 downloads  
  A utility model providing corrected Jinja chat templates for Qwen3.5, trending due to widespread template incompatibility issues in the Qwen ecosystem.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — google | 3,263 likes, 12,608,008 downloads  
  Google's latest multimodal vision-language model, dominating downloads this week as a strong open-weight competitor with Gemini-level capabilities.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 2,867 likes, 2,190,398 downloads  
  An uncensored, vision-capable Qwen3.6 MoE variant with aggressive tuning, extremely popular for its combination of high performance and minimal content restrictions.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | 2,316 likes, 2,112,869 downloads  
  A GGUF-quantized reasoning-oriented vision model fine-tuned on Claude-generated data, trending for its strong reasoning-to-size ratio.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | 2,025 likes, 2,088,470 downloads  
  Baidu's state-of-the-art OCR model that handles unlimited-length documents, achieving massive adoption for enterprise document processing workflows.

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** — thinkingmachines | 1,066 likes, 12,456 downloads  
  A new multimodal MoE model supporting both image and audio inputs, trending for its versatile "inkling" architecture and conversational capabilities.

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** — ATH-MaaS | 171 likes, 13,750 downloads  
  A Qwen3.5-based OCR specialist, gaining traction for high-accuracy document and scene text recognition in a compact form factor.

- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** — Wan-AI | 115 likes, 2,328 downloads  
  A diffusion-based image-to-video model specialized in dance motion generation, showing early community interest in controllable video creation.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — OpenMOSS-Team | 259 likes, 86,385 downloads  
  An audio-text-to-text model combining transcription with speaker diarization, trending for real-time meeting and call transcription use cases.

- **[OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime)** — OpenMOSS-Team | 78 likes, 529 downloads  
  A real-time video-text-to-text model enabling live video understanding and interaction, an early entry in the streaming multimodal space.

### 🔧 Specialized Models (code, math, medical, embeddings, tools)

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** — Cactus-Compute | 268 likes, 935 downloads  
  A JAX-based model optimized for function calling and tool use, gaining interest for its efficient fine-tuning approach to agentic capabilities.

- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)** — jlnsrk | 132 likes, 3,869 downloads  
  An INT4 CPU-optimized variant of GLM-5.2 with expert streaming, enabling MoE inference on consumer-grade hardware without GPUs.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — prism-ml | 739 likes, 301,893 downloads  
  A 2-bit ternary quantized 27B model using llama.cpp, trending for its extreme compression while retaining usable conversational quality.

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — prism-ml | 445 likes, 1,218,815 downloads  
  A 1-bit GGUF quantization pushing the limits of model compression, with over 1.2M downloads reflecting huge demand for ultra-efficient local LLMs.

- **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)** — prism-ml | 127 likes, 20,639 downloads  
  MLX-native 1-bit variant for Apple Silicon, extending the Bonsai ecosystem to macOS users seeking low-footprint local inference.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** — GnLOLot | 277 likes, 172,409 downloads  
  A 1B parameter thinking model distilled from Claude Opus, trending because it packs sophisticated reasoning into a tiny, quantized package.

- **[empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF)** — empero-ai | 170 likes, 103,504 downloads  
  The GGUF-quantized second generation of Qwythos, offering improved reasoning and vision understanding in a 9B form factor.

- **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)** — unsloth | 97 likes, 6,461 downloads  
  GGUF quantization of the Inkling multimodal model, enabling fast local inference of the image/audio-capable MoE architecture.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — bottlecapai | 437 likes, 10,445 downloads  
  A fine-tuned Qwen3.6 model enhanced with chain-of-thought reasoning, trending as a strong thinking-capable alternative to larger models.

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** — conradlocke | 396 likes, 0 downloads  
  A LoRA for identity-preserving image editing built on Krea-2, notable for its creative applications despite zero reported downloads (likely a new upload).

- **[Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt)** — Cseti | 91 likes, 0 downloads  
  A video generation LoRA enabling novel view synthesis and camera control, pushing forward controllable video generation capabilities.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — Alissonerdx | 187 likes, 0 downloads  
  An identity-preservation LoRA for LTX-based video generation, maintaining consistent face identity in generated videos.

- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** — AngelSlim | 127 likes, 100,768 downloads  
  GGUF quantization of Tencent's Hy3 model, providing efficient local inference of the Hunyuan architecture under Apache-2.0.

---

## Ecosystem Signal

The most striking trend this week is the **commoditization of extreme quantization**. The Bonsai family's 1-bit and 2-bit (ternary) variants have accumulated over 1.5M downloads, proving that users are willing to sacrifice quality for the ability to run 27B models on consumer hardware. This parallels the rapid expansion of the **Qwen ecosystem** — Qwen3.5 and Qwen3.6 models underpin nearly a third of this week's trending entries, from specialized OCR (OvisOCR2) to reasoning (ThinkingCap, Qwythos) to uncensored variants. The **MoE architecture** has become dominant across both Chinese (GLM-5.2, Qwen3.6 MoE) and Western (Inkling, Hy3) model families, enabling larger effective parameter counts within manageable compute budgets. On the multimodal front, **video generation LoRAs** (Wan-Dancer, LTX2.3, LTX-Best-Face-ID) are emerging as a new creative niche, while **OCR models** (Unlimited-OCR, OvisOCR2) show strong enterprise demand. Notably, zero models in this week's top 30 are closed-weight proprietary — the open-weight ecosystem now entirely drives Hugging Face adoption.

---

## Worth Exploring

1. **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — With 4,129 likes and a novel DSA (Dynamic Sparse Attention) architecture, this MoE model represents the cutting edge of Chinese open-weight LLM research. Its popularity suggests it's competitive with top Western models while offering architectural innovations worth studying.

2. **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — As the most successful example of ternary quantization at scale, this 2-bit model is essential for anyone interested in extreme compression techniques. Its 301K downloads and strong community reception make it a benchmark for the efficiency-quality frontier.

3. **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** — A JAX-native model purpose-built for function calling and tool use, this represents a design philosophy shift toward models engineered for agentic workflows rather than general chat. As the agent ecosystem matures, architectures like this may define the next generation of model design.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*