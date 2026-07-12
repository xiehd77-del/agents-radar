# Hugging Face Trending Models Digest 2026-07-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-12 02:55 UTC

---

Here is the **Hugging Face Trending Models Digest** for July 12, 2026.

---

## 1. Today's Highlights

This week’s trending models showcase a clear shift toward **massive, sparse MoE architectures**—such as Tencent’s Hy3, GLM-5.2, and several Qwen3.5/3.6 derivatives—which are achieving strong performance with dramatically reduced active parameters. Multimodal models (image-text-to-text, audio, and video) continue their rapid rise, headlined by **NVIDIA’s LocateAnything-3B** and **Baidu’s Unlimited-OCR**, both exceeding 1M downloads. The community is also deeply engaged in **GGUF quantization** for local deployment, with fine-tunes of Qwen, Gemma, and MiniCPM5 dominating the download charts. Finally, **Krea-2-Turbo** signals a new wave of high-speed image generation models.

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, Chat, Instruction-Tuned)

- **tencent/Hy3** — Tencent | 698 likes, 8k downloads  
  A next-generation text-generation model from Tencent, trending due to its massive scale and the company’s push into open-weight foundation models.

- **zai-org/GLM-5.2** — zai-org | 3,834 likes, 421k downloads  
  A high-performance MoE conversational model that is quickly becoming a community favorite for general-purpose chat and reasoning tasks.

- **CohereLabs/cohere-transcribe-arabic-07-2026** — CohereLabs | 90 likes, 7.6k downloads  
  A specialized Arabic ASR model, reflecting growing demand for non-English, task-specific speech models.

- **meituan-longcat/LongCat-2.0** — meituan-longcat | 177 likes, 1.5k downloads  
  A long-context conversational model, gaining traction for its ability to handle extended dialogues efficiently.

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

- **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** — empero-ai | 2,015 likes, 1.9M downloads  
  A highly popular multimodal GGUF variant of Qwythos, optimized for on-device reasoning and vision tasks.

- **baidu/Unlimited-OCR** — baidu | 1,931 likes, 1.3M downloads  
  A state-of-the-art OCR model from Baidu, trending due to its exceptional accuracy and broad feature-extraction capabilities.

- **nvidia/LocateAnything-3B** — NVIDIA | 2,707 likes, 1.4M downloads  
  A multimodal model for object localization and grounding, riding the wave of interest in visual AI applications.

- **krea/Krea-2-Turbo** — krea | 588 likes, 168k downloads  
  A high-speed text-to-image model that builds on Krea-2-Raw, trending for its fast inference and quality output.

- **Alissonerdx/LTX-Best-Face-ID** — Alissonerdx | 100 likes, 0 downloads  
  A text-to-video model for identity-preserving video generation, showcasing the bleeding edge of video AI.

- **OpenMOSS-Team/MOSS-Transcribe-Diarize** — OpenMOSS-Team | 110 likes, 12.8k downloads  
  An audio-text-to-text model for transcription and speaker diarization, gaining momentum in voice AI pipelines.

### 🔧 Specialized Models (Code, Math, Medical, Embeddings)

- **google/tabfm-1.0.0-pytorch** — Google | 349 likes, 20k downloads  
  A tabular foundation model supporting zero-shot classification and regression, notable for its potential to replace gradient-boosted trees.

- **nvidia/Nemotron-Labs-Audex-30B-A3B** — NVIDIA | 122 likes, 743 downloads  
  A compact MoE model (30B total, 3B active) designed for lightweight reasoning, reflecting the industry's move toward efficient inference.

- **SupraLabs/Supra-Router-51M** — SupraLabs | 99 likes, 1.2k downloads  
  A tiny router model for expert selection in MoE architectures, sparking interest as a building block for custom sparse models.

### 📦 Fine-tunes & Quantizations

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** — HauhauCS | 2,653 likes, 2.6M downloads  
  An uncensored, “aggressive” GGUF fine-tune of a Qwen3.6 MoE, widely downloaded for roleplay and unfiltered chat.

- **unsloth/Qwen3.6-27B-MTP-GGUF** — unsloth | 1,049 likes, 2.9M downloads  
  The most downloaded model this week, a GGUF quantization of Qwen3.6 with MTP support, optimized for local inference with unsloth.

- **deepreinforce-ai/Ornith-1.0-35B-GGUF** — deepreinforce-ai | 852 likes, 1.2M downloads  
  A popular 35B GGUF model (MIT license), widely used in local and endpoint deployments for chat and reasoning.

- **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF** — yuxinlu1 | 1,150 likes, 436k downloads  
  A heavily tuned GGUF variant of Gemma 4, optimized for coding and agentic terminal tasks.

- **GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF** — GnLOLot | 192 likes, 29.8k downloads  
  A tiny 1B parameter model fine-tuned with Claude-style data, demonstrating the potential of very small thinking models.

## 3. Ecosystem Signal

The ecosystem is converging on **sparse MoE architectures** as the dominant paradigm: models like GLM-5.2, Qwen3.5/3.6 variants, and NVIDIA’s Nemotron family all leverage MoE to achieve high capability with low active parameters. Hugging Face is now the primary hub for these weights, with major players (Tencent, Baidu, NVIDIA, Cohere) releasing open models. **Quantization** remains the most active community activity—GGUF downloads vastly outnumber raw model downloads—driven by the demand for local, private, and affordable inference. Notably, the **uncensored fine-tune** scene is thriving, with aggressive and roleplay-oriented variants (e.g., Qwen3.6 uncensored) amassing millions of downloads. On the multimodal side, **video generation and speech diarization** are emerging as the next frontiers, while **tabFM** from Google signals that even tabular ML is being transformed by foundation models.

## 4. Worth Exploring

- **nvidia/LocateAnything-3B**: This model is a standout for anyone working on visual grounding or object detection. With NVIDIA’s backing and massive downloads, it represents the state of the art in “point-and-find” AI and is well-suited for robotics and UI automation.

- **unsloth/Qwen3.6-27B-MTP-GGUF**: As the most-downloaded model this week, it’s the definitive entry point for running Qwen3.6 locally. It balances performance, memory footprint, and ease of use via unsloth’s tooling—ideal for practitioners seeking high-quality offline chat.

- **google/tabfm-1.0.0-pytorch**: This tabular foundation model is a sleeper hit. If you work with structured data (CSVs, databases, financial data), this model could replace traditional GBDT models with a zero-shot transformer—a paradigm shift worth studying immediately.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*