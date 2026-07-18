# Hugging Face Trending Models Digest 2026-07-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-18 02:38 UTC

---

Here is the structured Hugging Face Trending Models Digest for 2026-07-18.

---

## Hugging Face Trending Models Digest – 2026-07-18

### 1. Today's Highlights
This week’s trending chart is dominated by the **Qwen 3.5/3.6 ecosystem**, with multiple quantized and fine-tuned variants from community labs like **empero-ai**, **HauhauCS**, and **unsloth** topping download charts. The **GLM-5.2** model from ZAI Org leads in absolute likes (4,073), signaling strong interest in its novel MoE-DSA architecture. On the extreme quantization frontier, **prism-ml** continues to push boundaries with 1-bit and ternary (2-bit) Bonsai-27B variants, achieving massive download numbers for ultra-efficient deployment. Multimodal models are also surging, particularly in OCR (Baidu’s **Unlimited-OCR**) and video generation (**LTX** ecosystem models and **Wan-Dancer-14B**).

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** – thinkingmachines | Likes: 962 | Downloads: 7,870
  A new multimodal LLM (image+text+text) using the Inkling architecture, trending as a foundation for the rapidly growing unsloth GGUF variant.
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – zai-org | Likes: 4,073 | Downloads: 534,698
  The highest-liked model today: a Mixture-of-Experts (MoE) model with DSA mechanism, driving community interest in efficient sparse architectures.
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** – tencent | Likes: 820 | Downloads: 12,719
  Hunyuan v3 LLM from Tencent, receiving strong early adoption and quickly spawning GGUF quantizations (AngelSlim/Hy3-GGUF).
- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** – InternScience | Likes: 573 | Downloads: 34,066
  A Qwen 3.5-based MoE agent model designed for tool-use and autonomous reasoning, riding the agentic AI wave.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – HauhauCS | Likes: 2,829 | Downloads: 2,295,313
  A massive uncensored MoE vision model (35B total, 3B active), trending due to raw download volume and aggressive uncensored tuning.
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** – baidu | Likes: 2,020 | Downloads: 1,992,355
  Baidu’s flagship OCR model (image-to-text), trending for broad utility and enterprise-grade accuracy; nearly 2M downloads.
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** – empero-ai | Likes: 2,275 | Downloads: 2,096,147
  A quantized 9B vision-language model distilled from Claude-Mythos data, trending as a high-quality, compact multimodal GGUF.
- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** – Wan-AI | Likes: 108 | Downloads: 2,185
  A state-of-the-art image-to-video model (14B params) for dance generation, representing cutting-edge video synthesis.
- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** – Alissonerdx | Likes: 178 | Downloads: 0
  A LoRA identity-preservation model for LTX video generation, enabling reference-guided video with consistent faces.
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** – OpenMOSS-Team | Likes: 249 | Downloads: 83,160
  An audio-to-text model with speaker diarization capabilities, trending for meeting and call transcription workflows.

#### 🔧 Specialized Models (code, math, medical, embeddings, tools)
- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** – Cactus-Compute | Likes: 257 | Downloads: 874
  A JAX-native model optimized for function-calling and tool-use, attracting interest for agentic and structured output pipelines.
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** – froggeric | Likes: 934 | Downloads: 0
  A utility repo providing corrected Jinja chat templates for Qwen 3.5 models, trending as a critical quality-of-life fix for the community.
- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** – ATH-MaaS | Likes: 153 | Downloads: 10,795
  An OCR-focused vision-language model built on Qwen 3.5, offering competitive performance for document and screenshot parsing.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, LoRA)
- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** – prism-ml | Likes: 681 | Downloads: 200,774
  A 2-bit ternary quantization of the Bonsai-27B model, trending for enabling 27B-scale inference on consumer hardware.
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** – prism-ml | Likes: 397 | Downloads: 1,045,182
  The flagship 1-bit quantization of Bonsai-27B, surpassing 1M downloads as the go-to ultra-compact LLM for edge deployment.
- **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)** – unsloth | Likes: 225 | Downloads: 1,924,495
  A 4-bit NVFP quantized Qwen 3.6-27B by unsloth, trending for high-throughput inference with minimal quality loss on NVIDIA hardware.
- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** – GnLOLot | Likes: 273 | Downloads: 154,762
  A tiny 1B parameter model with "thinking" capabilities distilled from Claude Opus, trending for surprising reasoning on minimal compute.

### 3. Ecosystem Signal

The top-30 reveals a clear **shift toward extreme efficiency**: 1-bit and ternary (2-bit) quantization from **prism-ml** (Bonsai, Ternary-Bonsai) are now mainstream, with combined downloads exceeding 1.2M. This suggests the community is prioritizing local inference on consumer hardware over raw parameter count, especially for agent and chat use cases. The **Qwen 3.5/3.6 family** has become the most popular base for fine-tuning—spanning vision (Qwythos, OvisOCR2), MoE (Agents-A1, Qwen3.6-35B-A3B), and uncensored variants—indicating that Qwen has overtaken Llama as the community's preferred foundation. On the proprietary vs. open-weight axis, **tencent/Hy3** and **baidu/Unlimited-OCR** represent increasing corporate open-weight contributions, while **unsloth** solidifies its role as the primary optimization layer for the ecosystem, bridging base models to quantized formats. Notable also is the rise of **specialty LoRA and video generation** (LTX, Wan-Dancer, KREA-2), pointing to a maturing multimedia generation pipeline beyond static image diffusion.

### 4. Worth Exploring

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** – The most advanced ternary (2-bit) LLM available. Try it if you want to run a 27B model on a single 8GB VRAM GPU while retaining coherent conversation quality. It is a test case for how low quantization can go before degradation becomes unacceptable.
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – With 2.3M downloads in a single week, this is the most downloaded model on the list. Its aggressive uncensored MoE design on Qwen 3.6 is worth studying if you are building for domains requiring maximal creative or adversarial alignment removal.
- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** – As agentic AI becomes a dominant paradigm, a JAX-native model explicitly designed for function-calling is a potential sleeper hit. Compare its structured output and tool-use performance against standard Qwen- or Llama-based agent systems.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*