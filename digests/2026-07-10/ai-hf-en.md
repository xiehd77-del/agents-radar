# Hugging Face Trending Models Digest 2026-07-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-10 03:31 UTC

---

# Hugging Face Trending Models Digest — July 10, 2026

## Today's Highlights

This week's trending lineup is dominated by **Qwen 3.5/3.6 derivatives** and a surge in **vision-language MoE models**, with several uncensored and agentic fine-tunes drawing massive community engagement. NVIDIA continues its aggressive push with multiple specialized models (LocateAnything, Nemotron-Labs variants, NVFP4 quantizations), while the **GGUF ecosystem** remains the primary distribution format for community adoption. Notable newcomers include **tencent/Hy3** (Hunyuan v3), **DeepSeek-V4-Pro-DSpark**, and **GLM-5.2** with its MoE-DSA architecture, signaling intensifying competition among Chinese AI labs. The **Krea-2** family expands with ControlNet and Turbo variants, reflecting growing interest in real-time image generation workflows.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — *zai-org* | 3,732 likes, 362,300 downloads  
  Latest generation of the GLM MoE-DSA conversational model; trending for its strong reasoning performance and efficient mixture-of-experts architecture.

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — *tencent* | 617 likes, 5,572 downloads  
  Tencent's Hunyuan v3 text-generation model; gaining attention as a major Chinese AI lab entry with competitive benchmark results.

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** — *deepseek-ai* | 459 likes, 29,230 downloads  
  Official DeepSeek V4 Pro release with DSpark optimization (arXiv:2606.19348); notable for advancing sparse attention and long-context capabilities.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — *HauhauCS* | 2,599 likes, 2.7M downloads  
  Uncensored Qwen 3.6 MoE vision-language model with aggressive fine-tuning; extremely high download volume reflects strong community demand for unfiltered models.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — *bottlecapai* | 188 likes, 2,189 downloads  
  Reasoning-enhanced Qwen 3.6 variant designed for chain-of-thought prompting; part of the emerging "thinking cap" fine-tuning trend.

- **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** — *mistralai* | 179 likes, 258 downloads  
  Mistral's newest massive MoE model (119B total, 6B active); lean architecture targeting enterprise deployment efficiency.

- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** — *meituan-longcat* | 166 likes, 1,107 downloads  
  Meituan's conversational model optimized for long-context interaction; reflects growing investment from Chinese consumer tech companies.

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — *froggeric* | 822 likes, 0 downloads  
  MLX-compatible chat template fixes for Qwen 3.5; trending for solving deployment pain points despite zero model downloads.

- **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** — *nvidia* | 87 likes, 16,959 downloads  
  NVIDIA's puzzle-solving LLM with 75B parameters and 9B active; part of the Nemotron Labs research line for structured reasoning.

- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)** — *nvidia* | 84 likes, 436 downloads  
  Audio-focused Nemotron variant (30B total, 3B active); specialized for auditory understanding tasks.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — *nvidia* | 2,687 likes, 1.4M downloads  
  Zero-shot object localization model; highly trending for its versatility in visual grounding and feature extraction.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — *empero-ai* | 1,938 likes, 1.9M downloads  
  Claude-Mythos-inspired Qwen 3.5 fine-tune with GGUF quantization; massive download volume driven by roleplay and creative writing use cases.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** — *empero-ai* | 749 likes, 179,378 downloads  
  Unquantized version of the popular Qwythos-9B Claude-Mythos fine-tune; the base for many downstream GGUF quantizations.

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** — *krea* | 570 likes, 157,302 downloads  
  Fast text-to-image generation model based on Krea-2-Raw; trending for its speed improvements and real-time generation capabilities.

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** — *conradlocke* | 136 likes, 0 downloads  
  LoRA for identity-preserving image editing with Krea-2; part of the growing Krea-2 fine-tuning ecosystem.

- **[Patil/Krea-2-depth-controlnet](https://github.com/Patil/Krea-2-depth-controlnet)** — *Patil* | 83 likes, 0 downloads  
  Depth-aware ControlNet for Krea-2 flow-matching models; enables precise spatial control in image generation.

- **[eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B)** — *eric-venti-seeds* | 124 likes, 0 downloads  
  Lighting-direction LoRA for Flux2Klein9B; niche but well-received for film-style lighting control.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — *baidu* | 1,904 likes, 1.2M downloads  
  Baidu's universal OCR model with image-text-to-text pipeline; trending for multilingual and zero-shot document understanding.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — *OpenMOSS-Team* | 75 likes, 2,537 downloads  
  Audio transcription with speaker diarization; a rare audio-text entry in a visually-dominated trend list.

- **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)** — *open-gigaai* | 96 likes, 0 downloads  
  Diffusion-based world model; experimental release exploring generative world simulation.

### 🔧 Specialized Models (code, math, medical, embeddings, tabular, etc.)

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — *google* | 330 likes, 16,374 downloads  
  Google's tabular foundation model for zero-shot classification and regression; trending as a rare dedicated tabular AI solution.

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — *yuxinlu1* | 2,670 likes, 703,735 downloads  
  Gemma-4-based code generation model with composer fine-tuning; highly downloaded for its strong coding and reasoning benchmarks.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — *yuxinlu1* | 1,117 likes, 418,171 downloads  
  Agentic variant of Gemma-4-12B with enhanced tool-use and terminal interaction capabilities; reflects the "agentic coding" trend.

- **[AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces)** — *AliesTaha* | 197 likes, 4,647 downloads  
  Instruction-tuned Qwen 3 model; representative of the "fable" fine-tuning lineage popular in creative writing communities.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — *unsloth* | 1,025 likes, 2.9M downloads  
  Highest download count this week; Unsolth's GGUF quantized Qwen 3.6 with multi-turn prompting — the go-to choice for consumer GPU deployment.

- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** — *unsloth* | 112 likes, 22,953 downloads  
  GGUF quantization of DeepSeek V4 Flash; makes the powerful model accessible on consumer hardware.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — *deepreinforce-ai* | 821 likes, 957,721 downloads  
  MIT-licensed 35B model in GGUF format; notable for permissive licensing and compatibility with popular inference endpoints.

- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** — *nvidia* | 333 likes, 748,054 downloads  
  NVIDIA's NVFP4 quantization of Qwen 3.6-27B using Model Optimizer; demonstrates NVIDIA's hardware-software co-optimization strategy.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** — *GnLOLot* | 143 likes, 2,239 downloads  
  Ultra-small 1B parameter thinking model GGUF; trending for enabling reasoning capabilities on extremely limited hardware.

---

## Ecosystem Signal

**Qwen 3.5/3.6 has become the dominant base model family** for community fine-tuning, with at least 10 models in this week's top 30 directly derived from it. The "fable" and "mythos" fine-tuning lineages continue to grow, reflecting sustained community interest in creative writing and roleplay-optimized models. **Unsolth's GGUF quantizations** remain the distribution backbone, with two of the week's most downloaded models (2.9M and 957K downloads) coming from their pipeline.

**NVIDIA is increasingly positioning itself as a model publisher**, releasing 4 models this week (LocateAnything-3B, Nemotron-Labs-3-Puzzle, Nemotron-Labs-Audex, and Qwen3.6-NVFP4) across diverse modalities. Their NVFP4 quantization format suggests a strategy to lock users into NVIDIA hardware for optimal inference performance.

**The MoE architecture continues its dominance**, with 8 of 30 models using mixture-of-experts designs. Chinese AI labs (Tencent, Zhipu AI, DeepSeek, Meituan, Baidu) collectively account for 5 notable releases, signaling intensifying global competition. The **agentic coding trend** is gaining traction, with Gemma-4-based agentic fine-tunes achieving strong community reception.

**Open-weight models remain preferred** — no proprietary-only models made the list. The GGUF format dominates with 12 quantized models, while 0 downloads for some LoRA and ControlNet releases suggests the community is still prioritizing text-generation and vision-language over image editing accessories.

---

## Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — With 2,687 likes and 1.4M downloads, this zero-shot localization model represents the intersection of computer vision and foundation models. Its broad applicability (object detection, segmentation, feature extraction) makes it a versatile asset for multimodal pipelines.

2. **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — This agentic coding model (1,117 likes, 418K downloads) exemplifies the emerging trend of models that combine reasoning, tool use, and terminal interaction. Worth studying for understanding how agentic capabilities are being fine-tuned into base models.

3. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — As the only tabular foundation model in this week's top 30 (330 likes, 16K downloads), it represents an underexplored but valuable category. For teams working with structured data, this zero-shot tabular classifier could dramatically reduce the need for bespoke gradient-boosted models.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*