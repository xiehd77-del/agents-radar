# Hugging Face Trending Models Digest 2026-07-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-11 02:47 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-07-11

## 1. Today's Highlights

This week's trending models underscore a massive surge in quantized Mixture-of-Experts (MoE) architectures, with **Qwen3.6** family variants and their GGUF quantizations dominating downloads. **NVIDIA** continues its aggressive open-weight push, releasing **LocateAnything-3B** (2.7K likes) for visual grounding and several **Nemotron-Labs** MoE models. The ecosystem shows a clear preference for **practical deployability**: the top three most-downloaded models are all GGUF-quantized 9B–35B MoE variants, with **HauhauCS/Qwen3.6-35B-A3B-Uncensored** exceeding 2.6M downloads. Meanwhile, **Krea-2-Turbo** and **LTX-Best-Face-ID** signal growing interest in identity-preserving generation and real-time diffusion pipelines.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why it's trending |
|-------|--------|-------|-----------|-------------------|
| [tencent/Hy3](https://huggingface.co/tencent/Hy3) | tencent | 666 | 6.9K | Latest Hunyuan-based text-generation model from Tencent, showing strong early adoption. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 3,786 | 392.7K | High-likes MoE conversational model (GLM_MoE_DSA) with strong community traction. |
| [deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) | deepseek-ai | 463 | 33.1K | Official DeepSeek V4 Pro release with DSpark optimization, accompanied by ArXiv paper. |
| [nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4) | nvidia | 99 | 23.4K | NVIDIA's 75B MoE puzzle-solving model with 4-bit NVFP4 quantization, targeting reasoning tasks. |
| [mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B) | mistralai | 184 | 315 | Mistral's massive 119B MoE model (6B active) fine-tuned from Leanstral-2603, Apache-2.0 licensed. |
| [nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B) | nvidia | 95 | 576 | NVIDIA's 30B MoE auditory-language model (3B active), bridging text and audio modalities. |
| [SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M) | SupraLabs | 87 | 1.2K | Sub-100M routing model for smart model selection in multi-LLM pipelines. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why it's trending |
|-------|--------|-------|-----------|-------------------|
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 2,701 | 1.5M | NVIDIA's visual grounding model (3B) for object localization; highest likes among new releases. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 1,921 | 1.3M | Baidu's versatile OCR model handling unlimited document types, combining image-text capabilities. |
| [krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo) | krea | 577 | 164.5K | Faster version of Krea-2-Raw for real-time text-to-image generation. |
| [open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1) | open-gigaai | 118 | 0 | Open-source world model using diffusers, Apache-2.0 licensed. |
| [Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 85 | 0 | Identity-preserving text-to-video model based on LTX-2, enabling consistent character generation. |
| [robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b) | robbyant | 77 | 317 | Video generation MoE model (30B/3B active) using LingBotVideoPipeline. |
| [OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 98 | 5.9K | Audio-text model for transcription with speaker diarization from the MOSS team. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why it's trending |
|-------|--------|-------|-----------|-------------------|
| [InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1) | InternScience | 472 | 25.8K | Qwen3.5-based MoE agent model for tool-use and autonomous task execution. |
| [google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch) | google | 345 | 18.6K | Google's zero-shot tabular foundation model for classification and regression without fine-tuning. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 836 | 0 | Community-fixed chat templates for Qwen3.5 models, critical for proper MLX inference. |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 161 | 0 | LoRA for identity-preserving image editing based on Krea-2-Raw, for ComfyUI workflows. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why it's trending |
|-------|--------|-------|-----------|-------------------|
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,626 | 2.7M | Most-downloaded model this week: uncensored, aggressively fine-tuned Qwen3.6 MoE in GGUF format. |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 1,980 | 1.9M | GGUF quantized 9B reasoning model blending Qwen3.5 and Claude-style mythos training. |
| [unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | unsloth | 1,037 | 2.9M | Unsloth's Multi-Token Prediction GGUF for Qwen3.6-27B, achieving highest raw download count. |
| [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | yuxinlu1 | 1,135 | 427.7K | Agentic fine-tune of Gemma-4-12B with coding and terminal capabilities in GGUF format. |
| [deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | deepreinforce-ai | 836 | 1.1M | MIT-licensed 35B GGUF model with endpoint compatibility, popular for production deployment. |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M) | empero-ai | 762 | 184.3K | Non-quantized base version of the Qwythos 9B reasoning model. |
| [nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4) | nvidia | 336 | 787.7K | NVIDIA Model Optimizer's 4-bit FP4 quantization of Qwen3.6-27B for efficient inference. |
| [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF) | GnLOLot | 158 | 9.0K | Sub-2B thinking model GGUF, pushing reasoning capabilities to tiny form factors. |
| [unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF) | unsloth | 125 | 31.9K | Unsloth's flash-optimized GGUF for DeepSeek-V4, accompanying ArXiv paper (2606.19348). |

---

## 3. Ecosystem Signal

The Hugging Face ecosystem is undergoing a **MoE-quantization convergence** — the most downloaded models are uniformly 9B–35B Mixture-of-Experts architectures compressed into GGUF formats. **Qwen3.6** has emerged as the dominant base architecture, with unofficial fine-tunes (HauhauCS, empero-ai) frequently surpassing official releases in adoption. **NVIDIA** is establishing itself as a leading open-weight contributor, releasing both specialized vision models (LocateAnything-3B) and large MoE reasoning models (Nemotron-Labs-3 Puzzle) — a notable shift from proprietary stance.

The **GGUF format** is now the default distribution mechanism for community models, enabling local deployment on consumer hardware. The "uncensored" and "aggressive" fine-tuning trend (HauhauCS, empero-ai) signals demand for models with reduced safety guardrails in creative and roleplaying use cases. Meanwhile, **identity-preserving generation** (LTX-Best-Face-ID, krea2-identity-edit) is gaining traction as a practical application area. The emergence of **sub-100M routing models** (Supra-Router-51M) suggests growing interest in multi-model orchestration and agentic workflows.

---

## 4. Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — With 2.7K likes and 1.5M downloads, this 3B visual grounding model is a standout. It's compact enough for edge deployment while demonstrating competitive performance on object localization tasks — a strong candidate for vision-based agent systems.

2. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — The first large-scale tabular foundation model supporting zero-shot classification and regression. Tabular data remains the dominant modality in enterprise, and this model's ability to generalize without task-specific fine-tuning could significantly lower the barrier to production ML.

3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — The most-downloaded model (2.7M) represents a community trend worth studying: aggressive fine-tuning on top of strong base architectures, combined with GGUF quantization for accessibility. Understanding why this specific recipe resonates can inform both model development and deployment strategies.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*