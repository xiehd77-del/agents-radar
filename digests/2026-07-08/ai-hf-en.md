# Hugging Face Trending Models Digest 2026-07-08

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-08 02:51 UTC

---

Here is the structured Hugging Face Trending Models Digest for July 8, 2026.

---

## Hugging Face Trending Models Digest | 2026-07-08

### 1. Today's Highlights

This week’s trending leaderboard is dominated by the **Qwen 3.6 ecosystem**, which has spawned a massive wave of community quantizations (GGUF), fine-tunes, and MoE variants, signaling a clear platform shift in the open-weight LLM space. **Multimodal models** are now the norm, with image-text-to-text pipelines appearing on nearly half of the top thirty models, highlighted by **NVIDIA's LocateAnything-3B** for spatial reasoning and **Baidu's Unlimited-OCR** for document intelligence. The community continues to prioritize **uncensored and aggressive reasoning models**, such as HauhauCS's Qwen3.6 variant, as well as specialized **coding and agentic models** like the Gemma-4-12B coder and Ornith series from deepreinforce-ai. Notably, **GLM-5.2** from Zhipu AI has emerged as a strong challenger to U.S.-based labs, while **tabular AI** sees a rare but significant entry from Google with TabFM-1.0.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — Author: zai-org | Likes: 3,596 | Downloads: 281,584  
  A conversational MoE model from Zhipu AI; its massive like count and high download volume reflect intense interest in Chinese open-weight models with strong reasoning capabilities.

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — Author: tencent | Likes: 490 | Downloads: 121  
  Tencent's latest Hunyuan-based text-generation model (HyV3), likely a precursor to broader multimodal deployment.

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** — Author: deepseek-ai | Likes: 424 | Downloads: 15,538  
  The latest Pro variant from DeepSeek, featuring new DSpark architecture and backed by a cited arxiv paper (2606.19348).

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — Author: bottlecapai | Likes: 107 | Downloads: 46  
  A specialized reasoning variant of Qwen 3.6 designed for chain-of-thought ("thinking cap") inference.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — Author: nvidia | Likes: 2,657 | Downloads: 1,424,958  
  A 3B image-text-to-text model specialized in object localization and spatial grounding; trending due to its niche utility and NVIDIA distribution.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — Author: baidu | Likes: 1,834 | Downloads: 1,084,945  
  A state-of-the-art OCR model from Baidu supporting unlimited document types; highly downloaded for enterprise document processing workflows.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — Author: empero-ai | Likes: 1,767 | Downloads: 1,683,711  
  A fused Qwen 3.5 + Claude-style reasoning model delivered as a GGUF; trending for combining deep reasoning with lightweight deployment.

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** — Author: krea | Likes: 541 | Downloads: 123,729  
  A turbo-optimized text-to-image diffusion model; popular for its speed and fine-tune from the Krea-2-Raw base.

#### 🔧 Specialized Models (code, math, medical, embeddings)

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — Author: nvidia | Likes: 2,657 | Downloads: 1,424,958  
  (cross-category) Specialized for visual feature extraction and grounding; a rare focused model from a major lab.

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — Author: google | Likes: 289 | Downloads: 9,458  
  Google's first dedicated tabular foundation model; supports zero-shot classification and regression, signaling a new frontier for structured data.

- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** — Author: meituan-longcat | Likes: 140 | Downloads: 385  
  A Meituan-developed model optimized for long-context conversational tasks.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — Author: HauhauCS | Likes: 2,551 | Downloads: 2,823,988  
  An uncensored, aggressive reasoning MoE variant of Qwen 3.6; the most downloaded model this week, driven by demand for high-capability unaligned models.

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — Author: yuxinlu1 | Likes: 2,641 | Downloads: 674,977  
  A GGUF-quantized Gemma-4 coder with a specialized "fable5" composer fine-tune; trending for its strong code performance with low resource requirements.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — Author: unsloth | Likes: 992 | Downloads: 2,842,118  
  An Unsloth-quantized GGUF of Qwen 3.6 with Multi-Turn Prefill optimization; extremely popular for local inference on high-end consumer hardware.

- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** — Author: nvidia | Likes: 315 | Downloads: 538,687  
  NVIDIA's compression of Qwen 3.6 using FP4 quantization via Model Optimizer; trending for pushing the frontier of extreme quantization.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — Author: deepreinforce-ai | Likes: 781 | Downloads: 502,663  
  The larger GGUF variant of the Ornith-1.0 family, based on Qwen 3.5 MoE; popular for high-quality open-weight reasoning.

### 3. Ecosystem Signal

The current ecosystem is defined by **two converging megatrends**: the complete commoditization of the **Qwen 3.6 model family** and the explosive growth of **GGUF quantized variants** for local deployment. Qwen derivatives now account for over half of the trending list, from uncensored fine-tunes (HauhauCS) to enterprise quantizations (NVIDIA FP4, Unsloth). This signals that the community has broadly adopted Qwen's MoE architecture as the default base for new projects.

**Open-weight models from Chinese labs** are challenging U.S.-based leaders: GLM-5.2 (Zhipu AI) and Hy3 (Tencent) are gaining rapid adoption, while DeepSeek continues to iterate on its V4 line. NVIDIA is investing heavily in the ecosystem, contributing both specialized models (LocateAnything) and quantization tools (NVFP4). The **tabFM release from Google** is a notable outlier, indicating that the "foundation model for everything" thesis is now extending to structured, non-text data. Meanwhile, the **Ornith series** from deepreinforce-ai is emerging as a viable open-weight alternative for agentic and coding tasks.

### 4. Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**  
   **Why:** This is a rare, highly specialized 3B model that excels at a concrete task (object localization) rather than general chat. It represents a growing trend toward smaller, task-specific multimodal models that outperform larger generalists on their domain.

2. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**  
   **Why:** Tabular data remains the backbone of enterprise ML, yet foundation models for it are rare. This PyTorch release from Google could mark the beginning of a new category; worth studying for its architecture and zero-shot performance on classification/regression.

3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
   **Why:** With nearly 3 million downloads, this is the most downloaded model this week. It represents the extreme end of community experimentation—uncensored, aggressive reasoning on a powerful MoE base—and is critical for anyone tracking the open-weight alignment debate.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*