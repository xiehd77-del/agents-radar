# Hugging Face Trending Models Digest 2026-07-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-06 13:25 UTC

---

# Hugging Face Trending Models Digest — 2026-07-06

## Today's Highlights

This week's trending models reveal a clear shift toward **massive Mixture-of-Experts (MoE) architectures** and **vision-language integration**, with Qwen 3.5/3.6 derivatives dominating alongside GLM-5.2 and Ornith-1.0 releases. Unsloth's Qwen3.6-27B-MTP-GGUF leads downloads at 2.8M, while nVIDIA pushes two new quantized precision formats (NVFP4) on GLM-5.2 and Qwen3.6-27B. Community fine-tuning activity remains intense, especially around uncensored variants, agentic coding models (Gemma-4 family), and multi-modal GGUF quantizations.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — Author: zai-org | Likes: 3,505 | Downloads: 231,218  
  A 5.2B conversational MoE model from the GLM family, trending due to its strong instruction-following and efficient DSA architecture.

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** — Author: deepseek-ai | Likes: 400 | Downloads: 14,276  
  DeepSeek's latest V4 Pro release with DSpark optimizations, gaining traction for its advanced reasoning and arXiv-published techniques.

- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** — Author: Qwen | Likes: 551 | Downloads: 57,835  
  A 35B MoE model (3B active) specialized for agentic tasks, reflecting the growing demand for autonomous agent architectures.

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — Author: tencent | Likes: 227 | Downloads: 2  
  Tencent's Hunyuan-based Hy3 text-generation model, newly released and already generating interest despite minimal downloads yet.

- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** — Author: meituan-longcat | Likes: 91 | Downloads: 43  
  A fresh conversational LLM from Meituan, designed for long-context understanding.

- **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** — Author: mistralai | Likes: 127 | Downloads: 106  
  Mistral's massive 119B MoE (6B active) model, fine-tuned from Leanstral-2603, targeting efficiency at scale.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — Author: empero-ai | Likes: 1,599 | Downloads: 1,617,508  
  A GGUF-quantized 9B vision-language model based on Qwen 3.5 and Claude-style training, massively popular for local multimodal inference.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — Author: baidu | Likes: 1,772 | Downloads: 1,070,230  
  Baidu's universal OCR model that handles unlimited-size images, trending as a production-ready feature extraction tool.

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — Author: nvidia | Likes: 2,627 | Downloads: 1,340,559  
  A 3B vision-language model for object localization in images, highly popular for its zero-shot pointing and detection capabilities.

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** — Author: krea | Likes: 522 | Downloads: 109,470  
  A turbo-charged text-to-image diffusion model, fine-tuned from Krea-2-Raw for faster generation.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16](https://huggingface.co/nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16)** — Author: nvidia | Likes: 124 | Downloads: 10,766  
  A 30B MoE two-tower architecture for retrieval and embedding tasks, gaining attention for efficient dual-encoder design.

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — Author: google | Likes: 242 | Downloads: 7,036  
  Google's tabular foundation model (PyTorch), supporting zero-shot classification and regression on structured data.

- **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)** — Author: nationaldesignstudio | Likes: 133 | Downloads: 3,821  
  A BERT-based token classification model for PII detection, optimized for ONNX and Transformers.js browser deployment.

- **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)** — Author: BugTraceAI | Likes: 136 | Downloads: 12,438  
  A 27B GGUF quantized model specialized in cybersecurity, offensive security, and vulnerability analysis.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — Author: HauhauCS | Likes: 2,512 | Downloads: 2,910,241  
  An uncensored, aggressive-tuned Qwen 3.6 MoE model in GGUF format, extremely popular among local users seeking unfiltered outputs.

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — Author: yuxinlu1 | Likes: 2,612 | Downloads: 664,319  
  A highly popular Gemma-4-based coder GGUF, fine-tuned with Fable 5 and Composer 2.5 for strong reasoning and code generation.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — Author: unsloth | Likes: 971 | Downloads: 2,818,499  
  Unsloth's optimized GGUF quant of Qwen 3.6 27B, the top-downloaded model this week due to its multi-turn processing efficiency.

- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** — Author: nvidia | Likes: 283 | Downloads: 430,676  
  NVIDIA's 4-bit floating point quantized version of Qwen 3.6 27B using ModelOpt, showing strong hardware-software co-optimization.

- **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)** — Author: nvidia | Likes: 242 | Downloads: 365,499  
  The same NVFP4 quantization applied to GLM-5.2, enabling efficient deployment on NVIDIA hardware.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — Author: deepreinforce-ai | Likes: 747 | Downloads: 436,780  
  GGUF quant of the 35B Ornith-1.0, a Qwen 3.5-based MoE model gaining traction for MIT-licensed, endpoint-compatible deployment.

- **[deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)** — Author: deepreinforce-ai | Likes: 437 | Downloads: 393,142  
  The smaller sibling (9B) of Ornith, similarly trending for accessible local inference.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — Author: yuxinlu1 | Likes: 1,037 | Downloads: 370,884  
  A follow-up Gemma-4 GGUF fine-tune with agentic capabilities and terminal interaction support.

- **[huihui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)** — Author: huihui-ai | Likes: 173 | Downloads: 6,660  
  An "abliterated" (safety-removed) GLM-5.2 GGUF fine-tune, appealing to users requiring unrestricted outputs.

- **[Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF)** — Author: Jackrong | Likes: 147 | Downloads: 126,831  
  A coding-focused GGUF version of Qwopus 3.6 35B MoE with multi-turn processing optimization.

- **[DavidAU/Qwen3.5-9B-Claude-4.6-HighIQ-THINKING-HERETIC-UNCENSORED](https://huggingface.co/DavidAU/Qwen3.5-9B-Claude-4.6-HighIQ-THINKING-HERETIC-UNCENSORED)** — Author: DavidAU | Likes: 154 | Downloads: 58,755  
  A highly fine-tuned uncensored Qwen 3.5 9B model with Claude-style thinking prompts and "heretic" behavior modifications.

---

## Ecosystem Signal

**Three major trends** define this week's ecosystem:

1. **MoE Dominance is Solidifying** — Of the 30 trending models, 9 explicitly use MoE architectures (GLM-5.2, Qwen-AgentWorld, Ornith-1.0, Leanstral-1.5, Nemotron-TwoTower). The community is embracing sparse activation as the path to scaling without proportional compute costs.

2. **Vision-Language Integration is Now Standard** — Nearly a third of trending models are image-text-to-text pipelines. Even text-generation models like Ornith and Qwythos carry vision tags, indicating that multi-modal capability is becoming a baseline expectation.

3. **Quantization is a First-Class Feature** — GGUF remains the dominant format (13 of 30 models), but NVIDIA's NVFP4 introduces a new frontier: vendor-specific quantized formats optimized for specific hardware. Unsloth's MTP (Multi-Turn Processing) optimizations also signal that quantization is moving beyond raw compression toward task-specific acceleration.

4. **"Uncensored" and "Abliterated" continue as a persistent sub-trend** — Multiple models explicitly position themselves as uncensored, reflecting an ongoing community demand for models without content restrictions, particularly for local deployment.

---

## Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — With 2,627 likes and 1.3M downloads, this 3B vision-language model is punching far above its weight. It deserves study as a case study in efficient, task-specific foundation models that outperform larger alternatives on localization benchmarks.

2. **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** — As agentic AI becomes the next wave, this Qwen MoE model purpose-built for agent tasks is worth evaluating. Its 3B active parameters at 35B total represent the sweet spot between capability and inference cost.

3. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — With 242 likes and growing, this tabular foundation model from Google could be a quiet game-changer. Tabular data remains the bulk of enterprise ML, and a zero-shot capable foundation model for structured data is worth serious investigation.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*