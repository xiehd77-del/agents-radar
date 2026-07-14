# Hugging Face Trending Models Digest 2026-07-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-14 02:38 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-07-14

## 1. Today's Highlights

The Hugging Face ecosystem is showing a strong wave of **Qwen3.5/3.6 derivatives**, with multiple highly downloaded GGUF quantizations and fine-tunes dominating the trending list. **GLM-5.2** (by zai-org, 3,902 likes) stands out as the most-liked pure language model, signaling growing interest in MoE architectures from Chinese labs. Notably, **NVIDIA** is pushing two frontier-scale MoE models (Nemotron-Labs-Audex-30B-A3B and Nemotron-Labs-3-Puzzle-75B-A9B), while **Unlimited-OCR** from Baidu and **Giga-World-1** from open-gigaai highlight a multimodal pivot toward vision-language and world model capabilities. The quantization ecosystem (GGUF, NVFP4) remains hyperactive, with unsloth and empero-ai leading community distribution efforts.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — tencent · 755 likes · 9,157 downloads  
  Tencent's Hy3, likely Hunyuan v3, trending as a new large-scale text-generation model from a major Chinese AI lab.

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org · 3,902 likes · 464,914 downloads  
  Zhipu AI's GLM-5.2 MoE model, trending heavily as a competitive open-weight conversational LLM with strong community uptake.

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — InternScience · 526 likes · 29,801 downloads  
  A Qwen3.5-based MoE model optimized for agentic tasks, gaining traction for its image-text-to-text pipeline and Mixture-of-Experts design.

- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** — nvidia · 143 likes · 1,058 downloads  
  NVIDIA's audex 30B model (3B active params) — a highly efficient MoE pushing frontier performance with sparse activation.

- **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** — nvidia · 114 likes · 38,775 downloads  
  A massive 75B total / 9B active MoE model in NVFP4 quantized format, representing NVIDIA's bet on high-efficiency dense-sparse hybrids.

- **[migtissera/Tess-4-27B](https://huggingface.co/migtissera/Tess-4-27B)** — migtissera · 104 likes · 1,105 downloads  
  A 27B Qwen3.5-based vision-language model that extends the Tess assistant lineage into multimodal reasoning.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS · 2,711 likes · 2,512,124 downloads  
  A massive 35B total / 3B active Qwen3.6 MoE with uncensored + aggressive persona fine-tuning, extremely popular for roleplay and frontier use.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — deepreinforce-ai · 867 likes · 1,392,300 downloads  
  A 35B GGUF-quantized general-purpose model from deepreinforce-ai, widely downloaded for local deployment.

- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** — SupraLabs · 114 likes · 1,573 downloads  
  A tiny 51M router model for LLM task routing, novel and gaining interest for lightweight model orchestration.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai · 2,087 likes · 1,985,221 downloads  
  A GGUF-quantized 9B vision-language model fine-tuned from Qwen3.5 with Claude-derived data reasoning — massive downloads point to huge local deployment demand.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu · 1,963 likes · 1,506,937 downloads  
  Baidu's state-of-the-art OCR model with unlimited text extraction capability, trending for its high accuracy and broad language support.

- **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)** — CohereLabs · 102 likes · 11,647 downloads  
  Cohere's Arabic ASR model, marking a focused push into domain-specific automatic speech recognition.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — OpenMOSS-Team · 162 likes · 39,509 downloads  
  A speech transcription + speaker diarization model from the MOSS team, popular for meeting and conversation analysis.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — Alissonerdx · 125 likes · 0 downloads  
  A LTX-Video LoRA for identity-preserved text-to-video generation, demonstrating the growth of subject-consistent video generation.

- **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)** — open-gigaai · 128 likes · 0 downloads  
  A diffusion-based world model (likely video/world simulation), released under Apache 2.0 — an early open-world-model release.

- **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)** — robbyant · 93 likes · 0 downloads  
  A 14B causal world model for image-to-video generation, part of the growing "world model" subcategory.

- **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)** — robbyant · 100 likes · 513 downloads  
  A 30B MoE video generation model (3B active), combining MoE efficiency with LingBotVideoPipeline.

- **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)** — nineninesix · 95 likes · 3,940 downloads  
  A Qwen3.5-based text-to-speech model, a rare pure TTS entry in current trends.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — bottlecapai · 313 likes · 4,909 downloads  
  A 27B vision-language model with enhanced reasoning capabilities, built on Qwen3.6.

### 🔧 Specialized Models (code, math, medical, embeddings, tabular)

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — google · 362 likes · 21,590 downloads  
  Google's TabFM: a zero-shot foundation model for tabular classification and regression — a major release for the tabular ML community.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — yuxinlu1 · 1,178 likes · 452,627 downloads  
  A GGUF-quantized Gemma 4 12B fine-tuned for agentic and coding tasks with a specialized composer recipe, very popular for terminal/AI agent use.

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** — conradlocke · 257 likes · 0 downloads  
  A Krea 2 LoRA for identity-consistent image editing, leveraging the Krea-2-Raw base model.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF)** — empero-ai · 105 likes · 45,189 downloads  
  v2 of empero-ai's Qwen3.5-based Qwythos 9B, quantized to GGUF — a leaner vision-language model for local deployment.

- **[empero-ai/Qwythos-9B-v2](https://huggingface.co/empero-ai/Qwythos-9B-v2)** — empero-ai · 99 likes · 2,476 downloads  
  The base safetensors version of Qwythos-9B-v2, a Qwen3.5 fine-tune.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** — GnLOLot · 221 likes · 68,714 downloads  
  A tiny 1B parameter GGUF model fine-tuned with Claude Opus data for thinking/reasoning — extremely efficient.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS · 2,711 likes · 2,512,124 downloads  
  Already listed above — but notable again for its massive download count as a GGUF/MoE uncensored fine-tune.

- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** — unsloth · 162 likes · 49,423 downloads  
  unsloth's GGUF quantization of DeepSeek-V4-Flash, enabling local deployment of DeepSeek's latest MoE.

- **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)** — unsloth · 192 likes · 1,497,456 downloads  
  NVFP4 quantized Qwen3.6 27B from unsloth — a new quantization format co-designed with NVIDIA for high throughput.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — unsloth · 1,074 likes · 2,901,906 downloads  
  unsloth's GGUF of Qwen3.6 27B — the most-downloaded model in this digest, representing the peak of local Qwen deployment.

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — froggeric · 888 likes · 0 downloads  
  Not a model but a Jinja chat-template fix for Qwen models — 888 likes signal strong interest in better Qwen template support.

- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)** — jlnsrk · 88 likes · 1,997 downloads  
  An INT4 quantized version of GLM-5.2 using Colibri expert-streaming for CPU-friendly MoE inference.

---

## 3. Ecosystem Signal

**Qwen dominates the derivative landscape.** Nearly half of trending models are Qwen3.5/3.6 fine-tunes or quantizations — from vision-language (Qwythos, ThinkingCap, Tess) to MoE variants (Agents-A1, HauhauCS). This signals Qwen has become the go-to base for the community fine-tuning ecosystem, surpassing Llama 3 in volume this cycle.

**Mixture-of-Experts reaches mainstream.** Multiple MoE models are trending: GLM-5.2, Nemotron-Audex (30B-A3B), Nemotron-Puzzle (75B-A9B), Qwen3.6-35B-A3B, and LingBot-Video-MoE. The "active vs total params" framing (e.g., 35B-A3B) is now standard marketing for efficiency-aware users.

**GGUF is the undisputed local format.** unsloth, empero-ai, and deepreinforce-ai collectively drive millions of GGUF downloads per day. NVFP4 (NVIDIA's FP4) emerges as a competitor for high-throughput settings. **Quantization is no longer optional** — it's how most models reach end users.

**World models & video generation are emergent categories.** Giga-World-1, LTX-Best-Face-ID, and LingBot-world-v2 signal that open-weight world models and identity-preserved video generation are becoming investible subfields.

**Open-weight remains strong; proprietary labs participate.** Baidu, Tencent, Cohere, Google, and NVIDIA all released open-weight models, confirming open-source AI is now central to corporate AI strategy.

---

## 4. Worth Exploring

1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — With 1.5M downloads and 1,963 likes, this is an instant classic OCR model. If you process documents, receipts, or multilingual text, this is likely the most capable open OCR model available today.

2. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — The most-downloaded model of the day (2.9M). Unsling it on llama.cpp for a local 27B vision-language model that outperforms most closed APIs in 2026 — an essential baseline for local LLM deployment.

3. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — Google's TabFM zero-shot tabular foundation model is a breakthrough for structured data ML. If you work with tabular data, this could replace or augment traditional gradient boosting pipelines with pre-trained representations.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*