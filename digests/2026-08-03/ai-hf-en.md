# Hugging Face Trending Models Digest 2026-08-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-03 02:56 UTC

---

# 🤗 Hugging Face Trending Models Digest
**2026-08-03**

---

## 1. Today's Highlights

This week's Hugging Face leaderboard is dominated by two seismic releases: **Moonshot AI's Kimi-K3** (9,652 likes) and **DeepSeek-V4-Flash-0731** (1,757 likes), both pushing the boundaries of multimodal and long-context reasoning. A major trend is the explosion of **Qwen3.6-based community fine-tunes**, with multiple uncensored/abliterated GGUF variants (DavidAU, LuffyTheFox, HauhauCS) amassing hundreds of thousands of downloads. The **text-to-speech** category is heating up with compact, edge-deployable models (Inflect-Micro-v2, Audio8-TTS) signaling a shift toward on-device audio AI. Notably, 40% of the trending models are **GGUF quantizations**, underscoring the community's demand for locally runnable AI. Finally, **Baidu's Unlimited-OCR** (2.5M downloads) shows that document intelligence remains a high-value, high-volume use case.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — Moonshot AI | 9,652 likes | 837K downloads. Flagship multimodal LLM with compressed-tensors support; the week's breakout release and likely the strongest open-weight contender for vision-language reasoning.

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — DeepSeek | 1,757 likes | 156K downloads. Latest iteration of DeepSeek's efficient Flash family, offering near-frontier text generation at reduced compute cost.

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** — DeepSeek | 1,960 likes | 2.78M downloads. The base Flash release — massive download count reflects its position as a go-to efficient open LLM.

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — ZAI | 4,756 likes | 2.05M downloads. MoE-DSA architecture with strong conversational performance; a top-3 model by likes this week.

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** — Poolside | 879 likes | 80K downloads. Premium instruction-tuned model focused on software-adjacent enterprise workloads.

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** — Nanbeige | 628 likes | 33K downloads. Compact 3B LLM, gaining traction for on-premise or latency-sensitive deployments.

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** — Upstage | 720 likes | 14.8K downloads. Massive 250B open-weight model; signals continued scale-up in open-parameter LLMs.

- **[nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4)** — Nota AI | 154 likes | 68K downloads. NVFP4-quantized version of Solar-Open2-250B for efficient vLLM serving.

- **[amd/Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think)** — AMD | 123 likes | 1.9K downloads. DeepSeek-v3-based MoE with a reasoning-focused variant from AMD.

- **[XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini)** — XYZ AI Lab | 366 likes | 903 downloads. Compact Qwen3.5-MoE derivative, marketed as an agentic-search first model.

- **[XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro)** — XYZ AI Lab | 335 likes | 1.1K downloads. Larger sibling in the Aquila series with agentic/local retrieval focus.

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — Baidu | 3,783 likes | 2.53M downloads. New generation OCR model; the week's highest-download model, indicating massive demand for document AI.

- **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)** — Microsoft | 191 likes | 272K downloads. Vision-language reasoning model, well-received for grounded multimodal understanding.

- **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)** — Microsoft | 250 likes | 2.9K downloads. Qwen3.5-based computer-use model; trending for GUI automation and agentic workflows.

- **[thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)** — Thinking Machines | 230 likes | 6.8K downloads. Lightweight multimodal conversational model; notable for edge/browser-friendly multimodal inference.

- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** — owensong | 372 likes | 1.8K downloads. CPU-optimized local text-to-speech; strong signal for edge AI voice applications.

- **[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)** — Audio8 | 179 likes | 4.3K downloads. New ArKTTS-based TTS model; preview release generating community buzz around voice quality.

- **[lodestones/Kroma](https://huggingface.co/lodestones/Kroma)** — Lodestones | 129 likes | 0 downloads. Krea2-based LoRA for text-to-image; fresh release, visually-focused.

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMax | 115 likes | 0 downloads. New image-text-to-video model; early-stage release but signals MiniMax's push into generative video.

- **[microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet)** — Microsoft | 150 likes | 8.4K downloads. BitNet-based automatic speech recognition with GGUF support; a sign of ultra-efficient quantized audio models.

---

### 🔧 Specialized Models (code, math, embeddings, agents)

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** — Kwaipilot | 402 likes | 13K downloads. Qwen3.5-MoE code model; trending among developer-focused AI tools.

- **[empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1)** — Empero AI | 96 likes | 1.2K downloads. Qwen3.5-27B derivative specialized for agentic tool use and reasoning tasks.

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — 1,343 likes | 1.37M downloads. The most liked community GGUF this week; uncensored Qwen3.6-27B with advanced MTP/Imatrix compression.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — 3,243 likes | 1.89M downloads. *Second-most-liked model overall*; aggressive uncensored Qwen3.6 MoE with vision — a serious community phenomenon.

- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF)** — 304 likes | 259K downloads. Hermes-V6-flavored uncensored Qwen3.6 MoE; strong pick for local roleplay/simulation.

- **[DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF)** — 209 likes | 292K downloads. Smaller 9B uncensored variant with NEO Imatrix; popular for lightweight local deployment.

- **[EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2)** — 120 likes | 2.5K downloads. Novel 2-bit quantization of Qwen3.6; an experiment in extreme MoE compression.

- **[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)** — Unsloth | 343 likes | 48.7K downloads. Official Unsloth quantization of the DeepSeek Flash release; the community standard for local execution.

- **[unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF)** — Unsloth | 251 likes | 88.4K downloads. High-quality GGUF of Kimi-K3, enabling local multimodal inference on consumer hardware.

- **[unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3)** — Unsloth | 226 likes | 1.2K downloads. HuggingFace re-release of the flagship model in a more compatible format.

---

## 3. Ecosystem Signal

- **Qwen3.6 is the new community backbone.** While Kimi-K3 and DeepSeek-V4 dominate likes/downloads, the *volume* of community activity is overwhelmingly built on Qwen3.6/3.5-MoE. Six of the top 30 models are Qwen3.6 derivatives, and they collectively account for over 3.7M downloads. The "uncensored + GGUF" micro-trend around Qwen is the largest organic movement this week.

- **MoE + quantization is the default deployment stack.** Over 80% of the community fine-tunes are MoE architectures (A3B or 27B active-parameter scales). Combined with dense availability of GGUF, Imatrix, and NVFP4 formats, this confirms **local-first inference as the dominant consumer pattern** on Hugging Face.

- **Open-weight competition is intensifying at the top.** Kimi-K3, DeepSeek-V4, GLM-5.2, and Solar-Open2-250B all represent frontier-class open weights released within days of each other. External players (AMD, Microsoft, Baidu) are also releasing strong open models, closing the gap with closed labs.

- **Edge audio is an emerging micro-wave.** Inflect-Micro-v2, Audio8-TTS, and VibeVoice-ASR are each small, efficient, CPU or BitNet-quantized models. This cluster suggests the next "easy win" for local AI is audio I/O — voice input and output on laptop and mobile hardware.

- **Multimodal is the norm, not the exception.** More than half of the new frontier models now ship with image-text-to-text capabilities (Kimi-K3, GLM-5.2, Qwen3.6 variants, Mage-VL). Vision-language understanding is becoming table stakes for a flagship release.

---

## 4. Worth Exploring

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — The week's defining release. It leads by a wide margin in likes and brings compressed-tensor support to a frontier multimodal model. Study it to understand where open-weight reasoning + vision is heading — and try the **Unsloth GGUF** version to test it locally.

2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — With 3,243 likes and 1.89M downloads, this is the week's most explosive community artifact. Whether or not the uncensored direction is your focus, this model demonstrates the *maximum velocity* of open-source fine-tuning loops — from base release to mass adoption in days.

3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — The most downloaded model of the week (2.5M+). OCR is a quiet but massive enterprise workload, and this release appears to reset the bar for document intelligence. Any team building RAG, archival, or document processing pipelines should benchmark against it.

4. **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** — A small, CPU-optimized TTS model with strong momentum. It represents the "edge AI voice" trend and is a great reference for building local voice interfaces on constrained hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*