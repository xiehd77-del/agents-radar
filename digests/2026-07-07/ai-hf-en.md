# Hugging Face Trending Models Digest 2026-07-07

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-07 03:36 UTC

---

Here is the structured **Hugging Face Trending Models Digest** for **2026-07-07**.

---

## 1. Today's Highlights

The Hugging Face ecosystem is dominated by a surge of **MoE (Mixture-of-Experts) and quantized GGUF models**, reflecting a strong community focus on efficient, local deployment. The **Qwen 3.5/3.6 family** continues to be the backbone of the trending list, powering everything from uncensored fine-tunes to specialized coder variants. Notably, **NVIDIA** and **Baidu** are pushing practical applications with **LocateAnything-3B** (a powerful visual grounding tool) and **Unlimited-OCR**, while **Mistral** and **DeepSeek** demonstrate that large-scale, open-weight releases remain a key competitive arena. The trend towards "agentic" and "coding" fine-tunes, particularly from **Gemma 4** and **Ornith** bases, signals a maturing demand for deployable, task-specific models.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 3,535 Likes | 231k Downloads  
  A powerful new MoE conversational model from Zhipu AI, trending due to its strong benchmark performance and unique Mixture-of-Experts architecture (GLM_MoE_DSA).

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** — deepseek-ai | 409 Likes | 14k Downloads  
  DeepSeek's latest iteration, optimized with the "DSpark" inference engine, gaining attention for pushing the frontier of open-weight reasoning models.

- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** — meituan-longcat | 117 Likes | 43 Downloads  
  A long-context conversational model from Meituan, designed for extended dialogue and retrieval-augmented use cases.

- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** — Qwen | 556 Likes | 58k Downloads  
  A specialized MoE variant of Qwen 3.5, fine-tuned specifically for agentic tasks and tool use, making it a key model for building autonomous systems.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | 1,797 Likes | 1.07M Downloads  
  A massive, general-purpose OCR model supporting unlimited text recognition across languages and layouts, trending due to its high accuracy and ease of use.

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — nvidia | 2,635 Likes | 1.34M Downloads  
  NVIDIA’s visual grounding model for precise object localization in images, trending for its utility in vision-based agent workflows and data annotation.

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** — krea | 529 Likes | 109k Downloads  
  A turbo-charged version of the Krea image generation model, optimized for speed while maintaining high quality, popular for real-time creative applications.

- **[eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B)** — eric-venti-seeds | 80 Likes | 0 Downloads  
  A specialized LoRA for the Flux2Klein model that adds nuanced lighting and sun-direction control, appealing to advanced image editors.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — google | 258 Likes | 7k Downloads  
  Google’s foundational TabFM model for zero-shot tabular data classification and regression, trending as a critical tool for structured data tasks.

- **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)** — nationaldesignstudio | 136 Likes | 3.8k Downloads  
  A BERT-based token classification model optimized for PII redaction via ONNX/Transformers.js, trending for privacy compliance and edge deployment.

- **[nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16](https://huggingface.co/nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16)** — nvidia | 126 Likes | 10.7k Downloads  
  A novel 30B MoE model using a "Two-Tower" architecture for retrieval and ranking, signaling NVIDIA’s push into specialized search and RAG.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | 1,649 Likes | 1.6M Downloads  
  A GGUF quantized version of a Qwen 3.5-based roleplay and reasoning model, trending due to high llama.cpp compatibility and large download volume.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 2,529 Likes | 2.9M Downloads  
  The most downloaded model this week: an uncensored, "aggressive" persona fine-tune of Qwen 3.6 MoE, highly popular for roleplay and creative writing.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — yuxinlu1 | 1,052 Likes | 370k Downloads  
  A sophisticated multi-merge of Gemma 4 focused on agentic behavior and coding, trending for its high quality and efficient 12B parameter count.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — unsloth | 974 Likes | 2.8M Downloads  
  Unsloth’s GGUF conversion of the latest Qwen 3.6 27B model with Multi-Token Prediction, gaining massive traction for its blend of performance and quantization efficiency.

## 3. Ecosystem Signal

The current landscape confirms a **decisive shift toward MoE (Mixture-of-Experts) architectures** as the default for high-performance models. Qwen’s 3.5/3.6 generation, GLM-5.2, and DeepSeek-V4 all leverage sparse activation to pack more capability into smaller inference budgets. This is paired with an **explosion in GGUF quantization**, driven by tools like Unsloth and llama.cpp, making 30B+ parameter models accessible on consumer hardware.

**Open-weight release strategies are maturing**: NVIDIA is releasing specialized foundation models (LocateAnything, TwoTower) alongside their large LLMs, while DeepSeek and Mistral continue to compete on raw scale. The community response is bifurcated—users are either downloading massive uncensored fine-tunes (HauhauCS) or highly specialized, "agentic" builds (Gemma-4 variants). The **popularity of "uncensored" and "roleplay" labels** indicates a lingering demand for unrestricted creativity, despite corporate alignment trends. Finally, we see **Baidu and Google doubling down on practically useful, narrow-AI models** (OCR, tabular classification), suggesting that specialized "one-trick ponies" are finding strong traction.

## 4. Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**  
   A must-try for anyone building visual agent pipelines or automated data annotation. It provides a robust, open-weight alternative to proprietary vision APIs, excels at zero-shot object detection, and integrates easily with multimodal LLMs.

2. **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**  
   This model represents the cutting edge of community-driven "model merging" and instruction tuning. It is an excellent study object for anyone interested in how multiple fine-tunes (agentic, coding, instruction) can be composited into a single, performant 12B package.

3. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**  
   With 2.8M downloads in one week, this is the flagship model for evaluating the state of quantization. It is the best starting point for benchmarking Qwen 3.6’s Multi-Token Prediction capabilities on consumer hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*