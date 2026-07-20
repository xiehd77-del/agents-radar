# Hugging Face Trending Models Digest 2026-07-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-20 03:21 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-07-20

## 1. Today's Highlights

This week's trending models reveal a strong shift toward **extreme quantization** and **MoE architectures** for efficient deployment. **zai-org/GLM-5.2** leads in likes (4,172) among language models, while **google/gemma-4-31B-it** dominates downloads (12.3M). The **Qwen ecosystem** continues its explosive growth with multiple fine-tuned variants appearing across Qwen3.5 and Qwen3.6, and **ternary quantization** from prism-ml is gaining serious traction with two Bonsai-27B variants in the top 5. Multimodal models—especially image-text-to-text pipelines—are now the majority on this list, signaling a maturing multimodal landscape.

## 2. Trending Models by Category

### 🧠 Language Models

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — *zai-org* | ♥ 4,172 | ⬇ 536,177  
  A MoE-DSA architecture-based LLM with strong conversational capabilities, trending due to its innovative mixture-of-experts design and massive popularity.

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — *tencent* | ♥ 836 | ⬇ 13,698  
  Tencent's Hunyuan V3 generation model, trending as the backbone for many emerging GGUF quantizations.

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — *google* | ♥ 3,275 | ⬇ 12,337,374  
  Google's flagship 31B instruction-tuned multimodal model, the most downloaded model this period by a wide margin.

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — *InternScience* | ♥ 584 | ⬇ 35,833  
  A Qwen3.5 MoE-based model fine-tuned for agentic tasks, reflecting the growing interest in LLM tool-use.

### 🎨 Multimodal & Generation

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** — *thinkingmachines* | ♥ 1,156 | ⬇ 13,462  
  A multimodal image-text-to-text model with conversational capabilities, the top new multimodal release this week.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — *empero-ai* | ♥ 2,349 | ⬇ 2,118,995  
  A Qwen3.5-based quantized vision model with reasoning capabilities, extremely popular for local multimodal deployment.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — *baidu* | ♥ 2,198 | ⬇ 2,122,848  
  Baidu's comprehensive OCR model supporting unlimited text extraction; trending due to its practical utility and enterprise-grade performance.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — *HauhauCS* | ♥ 2,902 | ⬇ 2,084,530  
  An uncensored, aggressively fine-tuned MoE vision model; highly popular for creative and unrestricted use cases.

- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** — *Wan-AI* | ♥ 128 | ⬇ 2,408  
  An image-to-video diffusion model specialized for dance generation, representing the video generation trend.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — *Alissonerdx* | ♥ 195 | ⬇ 0  
  A text-to-video LoRA for identity-preserved video generation, showing the niche fine-tuning ecosystem.

### 🔧 Specialized Models

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** — *Cactus-Compute* | ♥ 279 | ⬇ 955  
  A JAX-based model specialized for function-calling and tool-use, reflecting the agentic AI trend.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — *OpenMOSS-Team* | ♥ 280 | ⬇ 87,533  
  A combined transcription and speaker diarization model, trending for audio processing workflows.

- **[OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime)** — *OpenMOSS-Team* | ♥ 82 | ⬇ 544  
  A real-time video understanding model, pushing boundaries in video-text-to-text inference.

### 📦 Fine-tunes & Quantizations

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — *prism-ml* | ♥ 795 | ⬇ 338,945  
  A 2-bit ternary quantized 27B model using llama.cpp, the flagship of a new ternary quantization paradigm.

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — *prism-ml* | ♥ 501 | ⬇ 1,262,894  
  The 1-bit counterpart to Ternary-Bonsai, extremely popular for running 27B models on consumer hardware.

- **[empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF)** — *empero-ai* | ♥ 183 | ⬇ 105,749  
  A GGUF-quantized Qwythos reasoning model, the v2 iteration of a popular local reasoning series.

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — *DavidAU* | ♥ 108 | ⬇ 16,719  
  An extreme community fine-tune of Qwen3.6 with aggressive uncensoring and multiple optimizations.

- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)** — *jlnsrk* | ♥ 142 | ⬇ 4,035  
  An INT4 MoE quantization of GLM-5.2 optimized for CPU inference with expert streaming.

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — *froggeric* | ♥ 948 | ⬇ 0  
  MLX-compatible fixed chat templates for Qwen models, indicating community demand for standardized interfaces.

- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** — *AngelSlim* | ♥ 139 | ⬇ 109,749  
  GGUF quantizations of Tencent's Hy3 model for efficient local inference.

---

## 3. Ecosystem Signal

The current landscape reveals **three major trends**:

**Extreme quantization is mainstream.** Bonsai-27B's 1-bit and ternary 2-bit formats have accumulated over 1.6M combined downloads, proving that users prioritize running large models on consumer hardware over quality degradation. This signals a "quantization arms race" where model size is less important than deployability.

**Qwen ecosystem dominance continues.** Qwen3.5 and Qwen3.6 variants appear across 8 of 30 models, from base models to uncensored fine-tunes to GGUF quantizations. The community has standardized around Qwen as the preferred base for reasoning-centric multimodal models.

**MoE is winning the architecture debate.** GLM-5.2, Agents-A1, Qwen3.6-35B-A3B, and Inkling all use mixture-of-experts architectures, enabling strong performance at lower active parameter counts. This architectural choice is becoming the default for competitive models.

Open-weight models are unequivocally winning against proprietary alternatives—the most downloaded model (Gemma-4 at 12.3M) is open-weight from Google, while the most liked (GLM-5.2) is fully open-source.

---

## 4. Worth Exploring

1. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — Worth studying as it represents a frontier in extreme quantization. Ternary weights (values of -1, 0, +1) could reshape how we think about model compression if quality holds up at 27B scale.

2. **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** — A new multimodal MoE from a lesser-known lab that's quickly climbing the charts. Its architecture and training recipe are worth investigating as a potential competitor to established multimodal models.

3. **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** — Unique as a JAX-based function-calling model. The tool-use and agentic AI space is growing fast, and this specialized JAX implementation offers insights into efficient inference for agentic workloads.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*