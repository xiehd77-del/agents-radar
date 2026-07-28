# Hugging Face Trending Models Digest 2026-07-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-28 02:39 UTC

---

Here is the structured **Hugging Face Trending Models Digest** for **2026-07-28**.

---

## 1. Today’s Highlights

This week’s trending models reflect a clear pivot toward **Mixture-of-Experts (MoE) architectures** and **ultra-low-bit quantization** for production-scale deployment. The top spot belongs to **moonshotai/Kimi-K3**, a feature-extraction vision-language model that has garnered over 6,400 likes in a single week, signaling strong community interest in compressed multimodal models. Meanwhile, the **Qwen3.6-35B-A3B** ecosystem continues to dominate the fine-tuning landscape, with multiple uncensored and MoE-based GGUF variants (e.g., by HauhauCS and LuffyTheFox) amassing millions of downloads. On the enterprise side, **GLM-5.2** and **Baidu/Unlimited-OCR** maintain massive traction, with the latter exceeding 2.6 million downloads, demonstrating sustained demand for OCR and conversational AI at scale.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **poolside/Laguna-S-2.1**  
  [🔗 Link](https://huggingface.co/poolside/Laguna-S-2.1) | Author: poolside | Likes: 758 | Downloads: 63,605  
  A high-performance text-generation model optimized for latency, now seeing strong follow-up in GGUF and NVFP4 quantization variants (poolside and unsloth).

- **upstage/Solar-Open2-250B**  
  [🔗 Link](https://huggingface.co/upstage/Solar-Open2-250B) | Author: upstage | Likes: 630 | Downloads: 3,761  
  A massive 250B open-weight LLM from Upstage, gaining attention for its competitive performance on reasoning and multilingual tasks.

- **Nanbeige/Nanbeige4.2-3B**  
  [🔗 Link](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Author: Nanbeige | Likes: 494 | Downloads: 16,518  
  A compact 3B LLM designed for efficient inference, trending as a strong small-model alternative for chat and instruction following.

- **Motif-Technologies/Motif-3-Beta**  
  [🔗 Link](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Author: Motif-Technologies | Likes: 199 | Downloads: 2,532  
  A new feature-extraction and generation model from Motif, trending for its novel architecture and strong embeddings.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **moonshotai/Kimi-K3**  
  [🔗 Link](https://huggingface.co/moonshotai/Kimi-K3) | Author: moonshotai | Likes: **6,419** | Downloads: 2,850  
  The week’s top trending model: a vision-language model with compressed-tensor support, optimized for image-text-to-text feature extraction.

- **baidu/Unlimited-OCR**  
  [🔗 Link](https://huggingface.co/baidu/Unlimited-OCR) | Author: baidu | Likes: 3,337 | Downloads: **2,645,773**  
  Leading multimodal model for OCR and document understanding; its massive download count reflects broad enterprise adoption.

- **Qwen/Qwen3.6-35B-A3B**  
  [🔗 Link](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Author: Qwen | Likes: 2,548 | Downloads: 6,187,853  
  The flagship MoE vision-language model driving an entire ecosystem of fine-tunes and GGUF quantizations.

- **microsoft/Mage-Flow**  
  [🔗 Link](https://huggingface.co/microsoft/Mage-Flow) | Author: microsoft | Likes: 392 | Downloads: 1,691  
  A text-to-image diffusion model from Microsoft, trending for its instruction-based editing capabilities (with a companion *Mage-Flow-Edit-Turbo* variant).

- **owensong/Inflect-Micro-v2**  
  [🔗 Link](https://huggingface.co/owensong/Inflect-Micro-v2) | Author: owensong | Likes: 225 | Downloads: 483  
  A lightweight text-to-speech model designed for CPU and edge-AI deployment, signaling growth in local TTS.

- **thinkingmachines/Inkling**  
  [🔗 Link](https://huggingface.co/thinkingmachines/Inkling) | Author: thinkingmachines | Likes: 1,606 | Downloads: 36,196  
  A conversational multimodal model, trending for its strong image-text-to-text interactions and fine-tuned reasoning.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **Kwaipilot/KAT-Coder-V2.5-Dev**  
  [🔗 Link](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Author: Kwaipilot | Likes: 243 | Downloads: 5,312  
  A code-focused MoE model built on Qwen3.5, trending for its dual image-text and code-generation capabilities.

- **moonshotai/Kimi-K2.7-Code**  
  [🔗 Link](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | Author: moonshotai | Likes: 1,323 | Downloads: 695,744  
  A compressed-tensor code model from Moonshot AI, highly downloaded for its efficient feature extraction and code understanding.

- **ATH-MaaS/OvisOCR2**  
  [🔗 Link](https://huggingface.co/ATH-MaaS/OvisOCR2) | Author: ATH-MaaS | Likes: 327 | Downloads: 42,152  
  A specialized OCR model built on Qwen3.5, trending as a strong alternative to Baidu’s unlimited OCR for document parsing.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**  
  [🔗 Link](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | Author: DavidAU | Likes: 756 | Downloads: 634,146  
  A highly-modified, uncensored Qwen3.6 fine-tune in GGUF format, popular for creative and roleplay use cases.

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**  
  [🔗 Link](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | Author: HauhauCS | Likes: 3,133 | Downloads: 1,894,395  
  The most popular Qwen3.6 fine-tune, an uncensored MoE GGUF variant with aggressive instruction tuning.

- **prism-ml/Ternary-Bonsai-27B-gguf**  
  [🔗 Link](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | Author: prism-ml | Likes: 1,069 | Downloads: 648,938  
  A 2-bit ternary quantized model, trending for extreme compression and strong conversational performance.

- **prism-ml/Bonsai-27B-gguf**  
  [🔗 Link](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | Author: prism-ml | Likes: 659 | Downloads: 2,257,928  
  A 1-bit quantization of a 27B model, gaining massive downloads as a benchmark for ultra-low-resource LLM deployment.

- **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**  
  [🔗 Link](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | Author: empero-ai | Likes: 2,491 | Downloads: 1,336,263  
  A GGUF quantization of a Qwen3.5 reasoning model, trending for its quality at 9B scale.

---

## 3. Ecosystem Signal

The current trending wave is defined by **three converging forces**: MoE proliferation, extreme quantization, and multimodal commoditization.

**MoE architectures** are now the dominant framework for new releases. Models like **Qwen3.6-35B-A3B**, **GLM-5.2**, and **Kimi-K3** all employ sparse activation patterns, enabling large parameter counts (up to 250B in Solar-Open2) without proportional compute costs. This is driving a shift away from dense LLMs toward "big but sparse" designs.

**Open-weight models continue to outpace proprietary releases** in popularity. The top 10 most-liked models are all open-weight, and **GLM-5.2** (zai-org) with 1M+ downloads is proof that open conversational AI can match or exceed closed alternatives. Meanwhile, **Baiju/Unlimited-OCR** and **Microsoft’s Mage-Flow** show that even well-funded labs are opting for fully open releases.

**Quantization activity is at an all-time high.** Almost half of the top 30 models are GGUF variants, with **prism-ml** pushing boundaries at 2-bit and even 1-bit quantization. This reflects a community-wide push to run high-capability models on consumer hardware, edge devices, and CPU-only environments. The fine-tuning ecosystem around Qwen3.6 is now the most active on the Hub, with dozens of uncensored and stylized variants released weekly.

---

## 4. Worth Exploring

1. **moonshotai/Kimi-K3** — As the week’s top model by likes, it represents the state of the art in compressed multimodal feature extraction. Ideal for builders needing efficient vision-language understanding on limited hardware.

2. **prism-ml/Ternary-Bonsai-27B-gguf** — The highest-performing 2-bit model on the market. A must-study for anyone interested in the limits of quantization versus quality, especially for running 27B-scale models on a single consumer GPU.

3. **owensong/Inflect-Micro-v2** — A strong signal that speech synthesis is going local and lightweight. This model is worth testing for real-time, CPU-based TTS applications without cloud dependencies.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*