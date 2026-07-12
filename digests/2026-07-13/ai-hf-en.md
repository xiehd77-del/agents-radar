# Hugging Face Trending Models Digest 2026-07-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-12 22:34 UTC

---

# 🚀 Hugging Face Trending Models Digest — 2026-07-13

## 1. Today's Highlights

This week's Hugging Face trending landscape is dominated by the **Qwen 3.6/3.5 ecosystem**, with multiple fine-tunes, quantizations, and variants ranking highly across categories. Notable corporate releases include **Tencent's Hy3** and **Baidu's Unlimited-OCR**, while **NVIDIA** continues its aggressive open-weight push with three entries including the multimodal *LocateAnything-3B* and the massive *Nemotron-Labs-3-Puzzle-75B*. The community is buzzing around **GGUF quantizations** of both Qwen 3.6 and DeepSeek V4, alongside specialized audio and video models from Cohere and robbyant. The hybrid MoE architecture (Active 3B from 30B+ total parameters) is emerging as a clear industry trend.

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — Tencent | 715 likes, 8.7k downloads  
  Tencent's latest Hy3 text-generation model, part of the Hunyuan lineage, trending as a major corporate LLM release.

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 3,853 likes, 441k downloads  
  High-likes MoE-DSA conversational model, the most popular standalone LLM this week by likes.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 2,673 likes, 2.6M downloads  
  Uncensored MoE vision-language model with massive community download volume; top by downloads.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — deepreinforce-ai | 855 likes, 1.3M downloads  
  Popular 35B GGUF quantized LLM with MIT license, widely adopted for local deployment.

- **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** — NVIDIA | 112 likes, 34.8k downloads  
  NVIDIA's massive 75B MoE (9B active) model with NVFP4 quantization for efficient inference.

- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)** — NVIDIA | 131 likes, 901 downloads  
  Smaller NVIDIA MoE model (30B total, 3B active), designed for auditable reasoning tasks.

- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** — SupraLabs | 106 likes, 1.4k downloads  
  A tiny 51M parameter router model, trending for lightweight model routing and selection.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — Baidu | 1,942 likes, 1.4M downloads  
  Baidu's high-volume OCR model, trending for universal document and scene text recognition.

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — NVIDIA | 2,714 likes, 1.5M downloads  
  Top-likes multimodal model this week; zero-shot referring expression comprehension for object localization.

- **[migtissera/Tess-4-27B](https://huggingface.co/migtissera/Tess-4-27B)** — migtissera | 91 likes, 971 downloads  
  Vision-language model based on Qwen 3.5, part of the Tess model family for image-text tasks.

- **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)** — open-gigaai | 123 likes, 0 downloads  
  A world model diffusion model (likely video generation), Apache-2.0 licensed.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — Alissonerdx | 107 likes, 0 downloads  
  Identity-preserving text-to-video LoRA using LTX-Video, trending for face-consistent generation.

- **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)** — robbyant | 91 likes, 461 downloads  
  Video diffusion MoE model (30B/3B active), trending as a high-capacity video generation architecture.

- **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)** — robbyant | 82 likes, 0 downloads  
  Fast causal world model for image-to-video generation, pushing real-time capabilities.

- **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)** — nineninesix | 84 likes, 2.3k downloads  
  Text-to-speech model built on Qwen 3.5, trending for high-quality TTS with transformers.

- **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)** — CohereLabs | 95 likes, 9.9k downloads  
  Specialized Arabic automatic speech recognition model, trending for language-specific ASR.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — OpenMOSS-Team | 126 likes, 14.5k downloads  
  Audio-text-to-text model combining transcription and speaker diarization.

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** — conradlocke | 208 likes, 0 downloads  
  ComfyUI-compatible identity editing LoRA for Krea-2, trending in the image-editing community.

- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** — meituan-longcat | 182 likes, 1.8k downloads  
  Meituan's conversational model, trending as a long-context Chinese-capable LLM.

### 🔧 Specialized Models (code, math, embeddings, tabular)

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — Google | 354 likes, 20.9k downloads  
  Google's TabFM foundation model for zero-shot tabular classification and regression.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — yuxinlu1 | 1,159 likes, 445k downloads  
  Agentic coding model based on Gemma 4, optimized for terminal and code generation tasks.

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — froggeric | 861 likes, 0 downloads  
  MLX-compatible fixed chat templates for Qwen models, trending as a critical utility for correct prompt formatting.

- **[Empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** — empero-ai | 773 likes, 188k downloads  
  Qwythos-9B with 1M context, trending for ultra-long-context reasoning and Claude-aligned style.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** — GnLOLot | 200 likes, 49.3k downloads  
  Tiny 1B parameter model with thinking capabilities, trending for efficient local reasoning.

### 📦 Fine-tunes & Quantizations (GGUF, community fine-tunes)

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | 2,043 likes, 2.0M downloads  
  GGUF quantized version of Qwythos-9B with 1M context, the most downloaded model this week.

- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** — unsloth | 152 likes, 44.6k downloads  
  Unsloth's official GGUF of DeepSeek V4 Flash, trending as the go-to quantization for DeepSeek.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — unsloth | 1,057 likes, 2.9M downloads  
  Highest-download model this week; multi-token-prediction GGUF for Qwen 3.6.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — bottlecapai | 260 likes, 4.5k downloads  
  Token-efficient thinking enhancement for Qwen 3.6-27B, trending for efficient reasoning.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B-GGUF](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B-GGUF)** — bottlecapai | 82 likes, 312k downloads  
  GGUF variant of ThinkingCap, popular for local deployment with efficient thinking.

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — InternScience | 506 likes, 29k downloads  
  MoE agent model based on Qwen 3.5, trending for agentic workflows with image-text support.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — (listed above, GGUF variant dominates downloads)

## 3. Ecosystem Signal

The **Qwen 3.5/3.6 family** is the undeniable center of gravity this week, appearing in over a third of all trending models across fine-tunes, quantizations, and variants — including *ThinkingCap*, *Tess-4*, *Agents-A1*, and *gepard-1.0*. The **MoE (Mixture of Experts) architecture** continues its rapid adoption, with 30B–75B total / 3B–9B active parameter models from NVIDIA, HauhauCS, robbyant, and zai-org, indicating the industry is converging on sparse activation as a standard efficiency technique.

**GGUF quantization** remains the dominant distribution format for community adoption, with 10+ GGUF models in the top 30. Unsloth's presence with both DeepSeek V4 and Qwen 3.6 GGUF variants signals strong tooling consolidation. **NVIDIA** is making an aggressive open-weight play, releasing three distinct models (LocateAnything-3B, Nemotron-Labs-Audex-30B-A3B, Nemotron-Labs-3-Puzzle-75B) across different capability tiers. **Baidu's Unlimited-OCR** and **Cohere's Arabic ASR** show that enterprise-grade specialized vision and audio models are seeing strong community traction. The appearance of **Google's TabFM** and **SupraLabs' tiny router** suggests growing interest in non-LLM model categories, including tabular and routing architectures.

## 4. Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — With 2,714 likes and strong download numbers, this zero-shot object localization model is the highest-liked multimodal model this week. It represents NVIDIA's push into practical vision-language tools and is likely a strong candidate for robotics and visual grounding applications.

2. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — The most downloaded model (2.9M) and a rare example of multi-token-prediction (MTP) quantization available for local use. This is a unique research artifact worth studying for efficient inference techniques.

3. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — Google's TabFM is a standout for being outside the text/image LLM category. As zero-shot tabular classification/regression gains traction in enterprise ML, this model could define a new category of foundation models for structured data.

---
*This digest is auto-generated by [agents-radar](https://github.com/kky-wollu/agents-radar).*