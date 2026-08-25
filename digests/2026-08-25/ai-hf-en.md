# Hugging Face Trending Models Digest 2026-08-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-25 01:20 UTC

---

# 🤖 Hugging Face Trending Models Digest
**Date: 2026-08-25**

---

## 1. Today's Highlights

The Hugging Face ecosystem this week is unequivocally dominated by the **Qwen3.8-27B** release, with the base model amassing an extraordinary **12,515 likes** and over **2.6M downloads**, spawning an entire ecosystem of fine-tunes, quantizations, and abliterated variants. The **Kimi-K3** from moonshotai is the second-strongest signal with 10,973 likes, indicating a strong push toward highly efficient, compressed multimodal models. In the video generation space, **MiniMax-H3** continues its momentum with 4,417 likes and 4.46M downloads, while **LTX-2.5** from Lightricks offers a compelling alternative. A notable trend is the emergence of **"uncensored" and "abliterated" variants** of Qwen3.8—at least 10 of the 30 trending models are community modifications focused on removing safety alignment. Finally, **DeepSeek-V4-Flash-0731** shows that established players are pushing fast, lightweight inference variants rather than just monolithic giants.

---

## 2. Trending Models by Category

### 🧠 Language Models

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,515 | 2,645,226 |
| [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,973 | 2,787,971 |
| [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,682 | 3,274,129 |
| [**ornith-ai/Ornith-1.5-35B-A3B**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 398 | 60,294 |
| [**ornith-ai/Ornith-1.5-9B**](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 203 | 83,192 |

- **Qwen3.8-27B** is the flagship multimodal reasoning model from Qwen, setting the week's benchmark with unmatched popularity and a strong conversational pipeline.
- **Kimi-K3** from moonshotai is a feature-extraction and multimodal model using compressed tensors, signaling a trend toward memory-efficient architectures.
- **DeepSeek-V4-Flash** is the fast-inference variant of the DeepSeek V4 family, optimized for speed while retaining conversational quality.
- **Ornith-1.5-35B-A3B** and its smaller sibling are MoE-based models built on the Qwen3.5 architecture, showcasing the appeal of sparse, efficient designs.

---

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,417 | 4,465,161 |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,725 | 790,378 |
| [**MiniMaxAI/MiniMax-Music3**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,228 | 18,065 |
| [**Audio8/Audio8-TTS-Preview-0.1b**](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 146 | 2,775 |
| [**superwhisper/s1-mini**](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 229 | 2,976 |

- **MiniMax-H3** is a powerful image-text-to-video model that has become the community's go-to choice for high-quality video generation.
- **LTX-2.5** from Lightricks is a diffusion-based video model supporting multiple input-output combinations, including image-to-video and text-to-video.
- **MiniMax-Music3** pushes into music generation, a growing niche, and demonstrates 3.5x improvements in generation speed.
- **Audio8-TTS-Preview** is an early-stage text-to-speech model focused on feature-extraction and audio synthesis.
- **s1-mini** combines Qwen3 base with ASR capabilities, pointing toward integration of speech recognition and language modeling.

---

### 🔧 Specialized Models

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [**z-lab/Qwen3.8-27B-DFlash2**](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 214 | 50,763 |
| [**incoai/Qwen3.8-27B-DFlash2**](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 173 | 85,034 |

- These **DFlash2** models implement speculative decoding techniques to accelerate Qwen3.8-27B generation—a key optimization for latency-sensitive applications.

---

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,838 | 7,009,063 |
| [**orcarouter/Qwen3.8-27B-Uncensored-MLX**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,028 | 57,947 |
| [**orcarouter/Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,098 | 224,114 |
| [**OBLITERATUS/Qwen3.8-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 695 | 312,627 |
| [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 690 | 1,456,700 |
| [**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 580 | 761,975 |
| [**orcarouter/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 424 | 143,108 |
| [**huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 335 | 1,140,375 |
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,447 | 0 |
| [**DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 226 | 209,017 |
| [**huihui-ai/Huihui-Qwen3.8-27B-abliterated**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 278 | 27,316 |
| [**0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF**](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 260 | 654,805 |
| [**ornith-ai/Ornith-1.5-35B-A3B-GGUF**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 275 | 988,170 |
| [**ornith-ai/Ornith-1.5-9B-GGUF**](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 186 | 971,104 |
| [**peculiar-ragdoll/Qwen-Sharp-Chat-Templates**](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates) | peculiar-ragdoll | 230 | 0 |
| [**Qwen/Qwen3.8-27B-FP8**](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 681 | 3,004,940 |
| [**LBH-123-AI/Minimax_h3_latent_Upscaler**](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 181 | 0 |

- **unsloth/Qwen3.8-27B-GGUF** is the most-downloaded quantization of Qwen3.8 (7M+ downloads), providing efficient local inference.
- **orcarouter** and **OBLITERATUS** lead the "abliterated/uncensored" wave with variants across MLX, FP8, and GGUF formats.
- **froggeric/Qwen-Fixed-Chat-Templates** and **peculiar-ragdoll/Qwen-Sharp-Chat-Templates** are lightweight but highly-liked (1,447 and 230 likes respectively) MLX/Jinja template fixes for Qwen, showing community demand for proper chat consistency.
- **DavidAU's Cold-Fusion GAIN** variant applies tertiary training techniques (GAIN, COLD-FUSION, NEO-MAX) to squeeze extra performance from the base model.
- **huihui-ai** continues its streak of clean, stable abliterated fine-tunes with strong download counts.

---

## 3. Ecosystem Signal

The week's trending list reveals a **hyper-concentrated ecosystem around Qwen3.8-27B**, which dominates 19 of the 30 tracked slots. This is a clear sign of the "base model + community derivative" pattern working at scale: Qwen releases a strong open-weight model, and the community responds with quantization (GGUF, FP8, MLX), alignment removal ("abliterated"/"uncensored"), and performance tweaks (MTP, speculative decoding, DFlash2). The "uncensored" movement shows significant traction, suggesting a growing user segment that seeks unfiltered outputs for creative or research purposes.

Open-weight models are clearly winning the trending race—all top-10 models are open-weight, and the only notable proprietary system is still DeepSeek-V4-Flash (though it's also released as open weights). The emergence of **MoE architectures** (Ornith-1.5-35B-A3B with 3B active params) and **compressed-tensor models** (Kimi-K3) points to a shift from raw scale to parameter efficiency. Another trend: the appearance of tiny but highly useful "tooling" models (chat-template fixes, latent upscalers) signals a maturing ecosystem where developers monetize infrastructure rather than only base architectures.

---

## 4. Worth Exploring

1. **Qwen/Qwen3.8-27B** — The central model of the week. If you're building anything multimodal, this is the new baseline to test against. Its massive download count and community momentum make it a safe bet for the coming months.

2. **moonshotai/Kimi-K3** — With 10,973 likes, this is one of the most-liked models in the list and uses compressed tensors for efficient inference. It's a strong candidate for edge deployment or large-scale embedding/retrieval use cases and worth studying if you're interested in memory-efficient multimodal systems.

3. **unsloth/Qwen3.8-27B-GGUF** — With 7M+ downloads, this is the de facto local inference standard for Qwen3.8. If you want to run Qwen3.8 locally on CPU or modest GPU, this is the first stop. Unsloth's optimized quantization pipeline is also worth studying for anyone doing local model distribution.

4. **froggeric/Qwen-Fixed-Chat-Templates** — Despite 0 downloads, this tiny model has 1,447 likes because it addresses a critical pain point (correct chat templates for Qwen MLX). It's a great example of how small ecosystem fixes can have outsized community impact—and a reminder to always check your chat template before deploying.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*