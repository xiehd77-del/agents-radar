# Hugging Face Trending Models Digest 2026-07-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-30 02:31 UTC

---

Here is the **Hugging Face Trending Models Digest** for **July 30, 2026**.

---

## 1. Today's Highlights

The Hugging Face hub is dominated by the explosive growth of **Moonshot AI’s Kimi-K3** family, which has surged to the top with 8,675 weekly likes, signaling a major shift toward **compressed, feature-extraction-first multimodal models**. Simultaneously, the **Qwen3.6-35B-A3B** MoE architecture has become the backbone for a wave of uncensored community fine-tunes (e.g., HauhauCS, LuffyTheFox), each amassing hundreds of thousands of downloads. The rise of **extremely low-bit quantization** is also undeniable, with prism-ml’s 1-bit and 2-bit GGUF models (Bonsai, Ternary-Bonsai) seeing massive adoption for local deployment. Meanwhile, **Baidu’s Unlimited-OCR** continues to dominate the vision-text pipeline with 2.6M+ downloads, proving that specialized OCR remains a critical enterprise use case. Finally, the **Owensong Inflect** series (Micro-v2, Nano-v2) marks a clear uptick in CPU-first, edge-optimized TTS models entering the mainstream.

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** – *poolside* – 827 likes, 67k downloads  
  A specialized text-generation model for software engineering and code generation, trending as a strong alternative to generic LLMs for dev workflows.

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** – *upstage* – 697 likes, 4.8k downloads  
  A massive 250B open-weight model excelling in reasoning and instruction following, drawing attention for its competitive performance against closed-source frontier models.

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** – *Nanbeige* – 556 likes, 18.9k downloads  
  A compact 3B LLM optimized for efficient inference, trending for its balance of small footprint and strong Chinese/English language performance.

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – *zai-org* – 4,644 likes, 1.27M downloads  
  A conversational MoE model (GLM architecture) with strong DSA-tuning, widely adopted for general-purpose chat and enterprise deployment.

- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)** – *fdtn-ai* – 233 likes, 7.7k downloads  
  A 1B Granite MoE hybrid security-focused model, trending for its niche in safe, auditable text generation for security applications.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** – *moonshotai* – **8,675 likes**, 99k downloads  
  The week’s #1 model: a compressed, feature-extraction-first image-text-to-text model redefining efficiency for vision-language tasks.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** – *baidu* – 3,517 likes, **2.69M downloads**  
  A state-of-the-art OCR pipeline (image-text-to-text) with unlimited text extraction capabilities; the most downloaded model this week.

- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** – *owensong* – 290 likes, 645 downloads  
  A CPU-first, edge-optimized text-to-speech model trending for its low-latency local inference and practical speech synthesis.

- **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)** – *microsoft* – 203 likes, 1.5k downloads  
  Microsoft’s 27B multimodal model for **computer use** (GUI agent tasks), trending for its potential in UI automation and visual reasoning.

- **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)** – *microsoft* – 100 likes, 702 downloads  
  A new vision-language model from Microsoft, gaining traction as a lightweight multimodal baseline.

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** – *Qwen* – 2,586 likes, **6.16M downloads**  
  The flagship Qwen MoE model (35B active/3B activated) dominating the multimodal space with huge adoption for vision-language tasks.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** – *Kwaipilot* – 318 likes, 6.3k downloads  
  A code-specialized model built on Qwen3.5-MoE, trending for its image-to-code and multimodal code generation capabilities.

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** – *ATH-MaaS* – 346 likes, 47k downloads  
  A Qwen3.5-based OCR vision model, highly downloaded for robust document and text extraction use cases.

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** – *moonshotai* – 1,336 likes, 681k downloads  
  A compressed code-specialized variant of the Kimi family, trending for its efficient feature extraction in programming tasks.

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** – *conradlocke* – 577 likes, 0 downloads  
  A LoRA for Krea-2 enabling identity-preserving image editing, trending in the ComfyUI community for creative workflows.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** – *DavidAU* – 947 likes, 736k downloads  
  An uncensored, aggressively fine-tuned Qwen3.6 variant in GGUF format, extremely popular for local roleplay and experimental use.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – *HauhauCS* – 3,171 likes, 1.86M downloads  
  The most popular uncensored Qwen3.6 MoE fine-tune, heavily downloaded for its “aggressive” behavior tuning and GGUF deployment.

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** – *prism-ml* – 1,096 likes, 665k downloads  
  A 2-bit ternary quantization of a 27B model, trending for achieving near-lossless quality at extreme compression ratios.

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** – *prism-ml* – 689 likes, **2.34M downloads**  
  A 1-bit quantized 27B model (the most extreme quantization this week), enabling large models to run on consumer hardware.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** – *empero-ai* – 2,516 likes, 1.26M downloads  
  A GGUF-quantized 9B reasoning-focused model (Qwen3.5-based) with Claude-style “mythos” training, very popular for creative and reasoning tasks.

- **[nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4)** – *nota-ai* – 140 likes, 6.2k downloads  
  An NVFP4 4-bit floating-point quantization of Solar-Open2-250B, trending for enabling ultra-large model inference at high speed.

## 3. Ecosystem Signal

The **Qwen3.6 MoE family** (especially the 35B-A3B variant) has become the dominant base architecture for community fine-tuning, with over 6 million downloads of the base model and uncensored variants pulling millions more. This signals a strong preference for **Mixture-of-Experts models that activate only a fraction of parameters**, enabling large effective model sizes with practical inference costs. The **Kimi-K3** family, meanwhile, is pioneering **compressed-tensor architectures for feature extraction**, potentially defining a new category of “feature extraction as a service” multimodal models.  

On the **quantization frontier**, the ecosystem is moving toward **extreme low-bit representations (1-bit and 2-bit)** as first-class citizens rather than experimental novelties, driven by prism-ml’s Bonsai and Ternary-Bonsai models. The **GGUF format remains the clear standard** for local deployment, with nearly every major fine-tune releasing a GGUF version. Notably, **Microsoft and Baidu continue to push proprietary open-weight models** (Fara, Unlimited-OCR) in specialized niches (computer use, OCR), while the uncensored fine-tuning trend—especially “heretic” and “aggressive” variants—suggests a growing segment of users prioritizing behavioral control over safety alignment.

## 4. Worth Exploring

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** – The #1 model of the week is worth exploring for its novel compressed-tensor approach to multimodal feature extraction. It may set a new efficiency standard for vision-language tasks and is ideal for anyone building scalable image-text systems.

2. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** – With 2.34M downloads and a 1-bit quantization that runs on consumer GPUs, this model is a practical test case for the limits of extreme compression. It’s a must-study for researchers and engineers interested in deploying large models on edge or low-resource hardware.

3. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** – This 9B reasoning model represents the convergence of **community mythos-tuning**, **GGUF accessibility**, and **Claude-style training**. It’s a great pick for anyone wanting a local, high-quality reasoning model for creative writing, roleplay, or complex prompt-following.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*