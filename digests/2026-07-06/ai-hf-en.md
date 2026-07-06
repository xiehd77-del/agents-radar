# Hugging Face Trending Models Digest 2026-07-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-06 15:02 UTC

---

Here is your structured **Hugging Face Trending Models Digest** for **2026-07-06**.

---

## 1. Today's Highlights

This week’s trending models are dominated by **MoE (Mixture of Experts) architectures** and **quantized GGUF deployments**, reflecting a strong community push toward efficiency and accessibility. **NVIDIA** made a major splash with the release of `LocateAnything-3B`, a vision-feature-extraction model that quickly became one of the top-liked releases, while the **DeepSeek-V4-Pro-DSpark** launch signals continued enterprise-level interest in high-parameter reasoning models. The **Qwen 3.5/3.6 family** remains the most common base architecture for both official releases and community fine-tunes, with many uncensored and roleplay-oriented variants amassing massive download counts. Notably, **Baidu's Unlimited-OCR** is a surprise breakout hit, suggesting strong latent demand for industrial-grade OCR solutions.

## 2. Trending Models

### 🧠 Language Models

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — Author: zai-org | Likes: 3,508 | Downloads: 231,218
  A major conversational LLM release from the GLM MoE family, trending due to its massive community following and strong benchmark results.
- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** — Author: deepseek-ai | Likes: 401 | Downloads: 14,276
  The latest generation of DeepSeek’s flagship model, gaining traction for its performance scaling and associated arXiv paper (2606.19348).
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — Author: tencent | Likes: 255 | Downloads: 2
  A new iteration of Tencent’s Hunyuan model series, noted for its high-quality text generation and signal value despite very recent upload.
- **[nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16](https://huggingface.co/nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16)** — Author: nvidia | Likes: 125 | Downloads: 10,766
  A new two-tower vision-language architecture from NVIDIA, interesting for its decoupled processing and BF16 efficiency.

### 🎨 Multimodal & Generation

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — Author: baidu | Likes: 1,773 | Downloads: 1,070,230
  A highly robust OCR model with near-unlimited character recognition capabilities, trending due to massive enterprise-demand for document parsing.
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — Author: nvidia | Likes: 2,628 | Downloads: 1,340,559
  A dedicated feature-extraction model for spatial localization in images, becoming one of the most popular multimodal tools this week.
- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** — Author: krea | Likes: 523 | Downloads: 109,470
  A fast text-to-image diffusion model, trending for its ability to produce high-quality outputs at turbo speeds.
- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** — Author: Qwen | Likes: 552 | Downloads: 57,835
  An agent-centric MoE multimodal model from the Qwen team, designed for tool use and vision-language agent tasks.

### 🔧 Specialized Models

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — Author: google | Likes: 244 | Downloads: 7,036
  Google’s foundational tabular model for zero-shot classification and regression, gaining attention for its applicability to structured business data.
- **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)** — Author: nationaldesignstudio | Likes: 133 | Downloads: 3,821
  A BERT-based token-classification model for PII redaction, packed as an ONNX and ready for browser inference via Transformers.js.
- **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)** — Author: BugTraceAI | Likes: 136 | Downloads: 12,438
  A cybersecurity-focused Qwen3 model for offensive security tasks, trending in the security niche as a specialized open-weight tool.
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — Author: yuxinlu1 | Likes: 2,617 | Downloads: 664,319
  A high-performance coding variant of Gemma-4, trending for its advanced reasoning capabilities and strong code generation quality.

### 📦 Fine-tunes & Quantizations

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — Author: empero-ai | Likes: 1,606 | Downloads: 1,617,508
  A highly popular mythos/roleplay fine-tune of Qwen 3.5 quantized to GGUF, fueled by the creative writing community.
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — Author: HauhauCS | Likes: 2,520 | Downloads: 2,910,241
  The most downloaded new release this week—an uncensored, aggressive-style MoE Qwen3.6 fine-tune, indicating strong demand for high-control variants.
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — Author: unsloth | Likes: 971 | Downloads: 2,818,499
  The flagship Qwen3.6 quantization from Unsloth, dominating downloads for efficient deployment of multimodal MoE models.
- **[huihui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)** — Author: huihui-ai | Likes: 173 | Downloads: 6,660
  An "abliterated" (refusal-removed) version of GLM-5.2 in GGUF format, representing a controversial but popular fine-tuning genre.

## 3. Ecosystem Signal

The current ecosystem is defined by a **major wave of Mixture-of-Experts models** hitting maturity—architectures like **GLM-5.2**, **Qwen3.6-A3B**, and **Nemotron-TwoTower** all leverage MoE to pack large effective capabilities into efficient inference footprints. **NVIDIA is clearly doubling down** on open-weight releases (LocateAnything, GLM-5.2-NVFP4, Nemotron) with model optimization formats (NVFP4), signaling a push to dominate enterprise deployment toolchains. On the community side, the **Qwen family has become the de facto base for fine-tuning** for uncensored, roleplay, and coding variants, with raw download numbers surpassing 2.9M for top variants. **GGUF quantization** remains the standard for local deployment, with Unsloth leading the pack. We also see **increasing specialization in modalities**: OCR (Baidu), spatial localization (NVIDIA), and tabular data (Google) are all trending strongly alongside general-purpose LLMs.

## 4. Worth Exploring

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** (Likes: 2,628, Downloads: 1,340,559) — A powerful but lightweight model for object localization, exceptionally useful for integrating visual grounding into pipelines without needing massive VLM inference.
- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** (Likes: 244, Downloads: 7,036) — If you work with tabular data, this zero-shot model from Google could dramatically simplify classification and regression tasks without fine-tuning.
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** (Likes: 2,617, Downloads: 664,319) — One of the highest-rated coding models this week, this Gemma-4 fine-tune offers a compelling balance of code reasoning and local deployment efficiency.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*