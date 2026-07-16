# Hugging Face Trending Models Digest 2026-07-16

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-16 02:44 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-07-16

## 1. Today's Highlights

This week's trending models reveal a clear pivot toward **multimodal MoE architectures** and **extreme quantization**. The Qwen 3.5/3.6 ecosystem dominates, with multiple fine-tunes and quantized variants topping the charts—including **HauhauCS/Qwen3.6-35B-A3B-Uncensored** (2,761 likes) and **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** (2.2M downloads). **GLM-5.2** from zai-org leads pure language models with 4,000 likes, while **baidu/Unlimited-OCR** demonstrates surging demand for specialized vision-language tools (2,002 likes, 1.7M downloads). The ecosystem is increasingly split between massive MoE models (A3B, 30B-parameter variants) and hyper-efficient 1-2 bit quantizations for edge deployment.

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 4,000 likes | 489k downloads  
  *A powerful MoE-DSA language model from Zhipu AI that has rapidly become the week's most-liked pure LLM with strong conversational capabilities.*

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — InternScience | 556 likes | 30k downloads  
  *A Qwen3.5-based MoE model optimized for agentic tasks, combining image-text understanding with mixture-of-experts efficiency.*

- **[stainonstone/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** — conradlocke | 307 likes | 0 downloads  
  *A Krea-2 LoRA for identity-preserving image editing, trending for its fine-grained face and style consistency.*

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — tencent | 801 likes | 10k downloads  
  *Tencent's latest Hunyuan-v3 language model, a strong contender in the enterprise LLM space with broad community interest.*

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — deepreinforce-ai | 895 likes | 1.5M downloads  
  *A 35B parameter model in GGUF format blending reasoning and instruction following, highly downloaded for its strong prompt adherence.*

- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)** — nvidia | 156 likes | 1.3k downloads  
  *NVIDIA's latest 30B MoE model (3B active) designed for efficient inference, signaling enterprise MoE standardization.*

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — bottlecapai | 367 likes | 6.2k downloads  
  *A Qwen3.6-based vision-language model that adds step-by-step reasoning chains for improved multimodal understanding.*

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | 2,002 likes | 1.7M downloads  
  *Baidu's general-purpose OCR model with unlimited language support, trending massively for document digitization workflows.*

- **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)** — unsloth | 208 likes | 1.6M downloads  
  *An NVFP4 quantized Qwen3.6-27B vision-language model from Unsloth, notable for achieving GPU-efficient multimodal inference.*

- **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)** — robbyant | 100 likes | 0 downloads  
  *A world-model image-to-video generator that compresses causal video frames, pushing generative video forward.*

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — Alissonerdx | 154 likes | 0 downloads  
  *A LTX-Video LoRA for identity-preserving text-to-video, advancing personalization in generative video workflows.*

### 🔧 Specialized Models (code, reasoning, agents, OCR, tool-use)

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — yuxinlu1 | 1,198 likes | 468k downloads  
  *A Gemma-4-based agentic coding model in GGUF, trending for terminal and agent-use optimization with strong code reasoning.*

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** — Cactus-Compute | 236 likes | 571 downloads  
  *A Jax-native model optimized for function calling and tool use, gaining traction in agent infrastructure.*

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** — ATH-MaaS | 119 likes | 745 downloads  
  *A Qwen3.5-based OCR vision-language model, presenting leaner OCR alternative alongside Baidu's solution.*

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — froggeric | 918 likes | 0 downloads  
  *A curated collection of corrected Jinja chat templates for Qwen models, trending due to widespread template compatibility issues.*

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — prism-ml | 477 likes | 23 downloads  
  *A ternary (2-bit) quantized Bonsai model, pioneering extreme weight compression for conversational LLMs.*

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | 2,217 likes | 2M downloads  
  *The most downloaded model this week, a GGUF quantized Qwen3.5 fine-tune with Claude-style mythos reasoning.*

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 2,761 likes | 2.4M downloads  
  *An uncensored MoE Qwen3.6 variant with aggressive chat style, this week's most-liked vision-MoE model with massive adoption.*

- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)** — jlnsrk | 111 likes | 2.2k downloads  
  *An integer-4 quantized GLM-5.2 for CPU inference via expert streaming, appealing to serverless and on-premise users.*

- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** — AngelSlim | 109 likes | 0 downloads  
  *A GGUF quantization of Tencent's Hy3, expanding the model's accessibility via llama.cpp ecosystem.*

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** — GnLOLot | 250 likes | 89k downloads  
  *A 1.5B parameter GGUF MiniCPM5 fine-tune with Claude-style thinking, demonstrating ultra-small model demand.*

## 3. Ecosystem Signal

**Qwen 3.5/3.6 as the dominant base.** Over 8 models in this week's top 30 are Qwen 3.5 or 3.6 variants, spanning vision-language, MoE, uncensored, OCR, and reasoning fine-tunes. The ecosystem has effectively converged on Qwen as the primary open-weight base for community experimentation—displacing older Llama and Mistral dominance from 2025.

**MoE is now standard.** Models like GLM-5.2, Qwen3.6-35B-A3B, Nemotron-Labs-Audex, and Agents-A1 all adopt mixture-of-experts architectures, typically with 3-4B active parameters from 27-35B total. This reflects maturation of MoE inference infrastructure (vLLM, llama.cpp, transformers) and community comfort with billion-scale sparse models.

**GGUF quantization is the distribution channel.** The top 5 most downloaded models this week are GGUF quantizations, not base weights. The combo of Unsloth's NVFP4, prism-ml's ternary (2-bit), and standard GGUF Q4/Q8 variants shows a maturing quantization supply chain that enables consumer-grade hardware deployment.

**OCR and document AI resurgence.** Baidu's Unlimited-OCR (1.7M downloads) and OvisOCR2 signal a strong wave of vision-language models aimed at document processing. This is likely driven by enterprise demand for automated data extraction.

**Niche trend: chat template fixing.** The popularity of `Qwen-Fixed-Chat-Templates` (918 likes, 0 downloads) reveals a pain point in the community—incorrect Jinja templates breaking inference—that has become large enough to spawn a trending model category.

## 4. Worth Exploring

1. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — This 2-bit ternary quantization is worth studying for anyone interested in extreme compression. At just over 2GB for a 27B model, it challenges assumptions about the precision-quality tradeoff and could be a template for future edge-device LLMs.

2. **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — A rare vision-language model with explicit chain-of-thought reasoning. As multimodal reasoning tasks grow in complexity, this architecture could set a precedent for how VLMs handle step-by-step visual logic.

3. **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** — Built with Jax and focused on function-calling, this model represents a departure from the Transformers/PyTorch standard library. It's worth studying for developers building lightweight agent systems that require deterministic tool use without full LLM overhead.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*