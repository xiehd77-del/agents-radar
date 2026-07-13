# Hugging Face Trending Models Digest 2026-07-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-13 02:57 UTC

---

Here is the **Hugging Face Trending Models Digest** for **2026-07-13**.

---

### 1. Today's Highlights

The week’s trending models are dominated by a surge in **efficient MoE (Mixture-of-Experts) architectures**, with Qwen3.6 variants and NVIDIA’s Nemotron-Labs series leading the charge across language, vision, and video domains. **GGUF quantization** continues to be the primary vehicle for community adoption, with several uncensored and reasoning-tuned Qwen3.6 drops (e.g., the *Qwen3.6-35B-A3B-Uncensored*) racking up millions of downloads. On the multimodal frontier, **NVIDIA’s LocateAnything-3B** is a standout for open-world object localization, while **Baidu’s Unlimited-OCR** signals a push toward robust, production-grade document AI. Notably, new fine-tuning entrants like **Krea-2 identity editing** and **LTX-Based Face ID** show the LoRA ecosystem expanding into identity-preserving video generation.

---

### 2. Trending Models by Category

#### 🧠 Language Models (LLMs, chat, instruction-tuned)

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**  
  Author: tencent | Likes: 728 | Downloads: 8.7K  
  Hunyuan’s next-gen text-generation model, signaling Tencent’s continued investment in open-weight MoE architectures.

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
  Author: zai-org | Likes: 3,859 | Downloads: 441K  
  A MoE-DSA conversational model that is trending due to its strong chat performance and widespread community interest in Zhipu’s GLM lineage.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**  
  Author: OpenMOSS-Team | Likes: 132 | Downloads: 14.5K  
  An audio-text-to-text model combining transcription with speaker diarization, vital for meeting analysis pipelines.

- **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)**  
  Author: nvidia | Likes: 113 | Downloads: 34.8K  
  NVIDIA's latest 75B MoE with aggressive FP4 quantization, pushing the envelope on high-performance inference at reduced cost.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**  
  Author: deepreinforce-ai | Likes: 855 | Downloads: 1.35M  
  A 35B GGUF model with MIT license and endpoint compatibility, highly downloaded for local deployment.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**  
  Author: bottlecapai | Likes: 267 | Downloads: 4.5K  
  A token-efficient thinking wrapper built on Qwen3.6, designed for reasoning-over-vision tasks with reduced generation costs.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
  Author: baidu | Likes: 1,943 | Downloads: 1.43M  
  A production-grade image-to-text OCR model from Baidu, highly downloaded for its accuracy and feature-extraction capabilities.

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**  
  Author: nvidia | Likes: 2,717 | Downloads: 1.5M  
  An open-world feature-extraction model that can localize any object by prompting, trending for its zero-shot versatility.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**  
  Author: Alissonerdx | Likes: 112 | Downloads: 0  
  A LoRA for identity-preserving text-to-video with LTX-Video, enabling consistent face generation in video outputs.

- **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)**  
  Author: robbyant | Likes: 85 | Downloads: 0  
  A fast causal world model for image-to-video, representing a new wave of video prediction diffusion pipelines.

- **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)**  
  Author: CohereLabs | Likes: 95 | Downloads: 9.9K  
  Cohere’s dedicated Arabic ASR model, addressing a key language gap in automatic speech recognition.

- **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)**  
  Author: nineninesix | Likes: 85 | Downloads: 2.3K  
  A text-to-speech model built on Qwen3.5 text backbone, bridging LLM capabilities with speech synthesis.

#### 🔧 Specialized Models (code, agentic, tabular, routing)

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**  
  Author: InternScience | Likes: 510 | Downloads: 29K  
  A Qwen3.5-based MoE model optimized for agentic tool use and multi-step reasoning, reflecting the agent trend.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**  
  Author: yuxinlu1 | Likes: 1,160 | Downloads: 445K  
  A heavily fine-tuned Gemma 4 variant for terminal and agentic coding, extremely popular with developers.

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**  
  Author: google | Likes: 357 | Downloads: 21K  
  Google’s foundation model for tabular classification/regression, enabling zero-shot prediction on structured data.

- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)**  
  Author: SupraLabs | Likes: 107 | Downloads: 1.4K  
  A lightweight routing model (51M) for directing queries to the best downstream LLM, a sign of emerging LLM orchestration layers.

#### 📦 Fine-tunes & Quantizations (GGUF, NVFP4, community fine-tunes)

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
  Author: empero-ai | Likes: 2,049 | Downloads: 1.97M  
  A heavily downloaded Qwen3.5 GGUF with reasoning and mythos-style fine-tuning, popular for lore-based inference.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  Author: HauhauCS | Likes: 2,677 | Downloads: 2.6M  
  The week’s most downloaded model: an uncensored, aggressive MoE variant of Qwen3.6, signaling demand for uninhibited outputs.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**  
  Author: unsloth | Likes: 1,059 | Downloads: 2.9M  
  Unsloth’s multi-token-prediction GGUF of Qwen3.6, enabling faster inference for vision-language tasks.

- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)**  
  Author: unsloth | Likes: 153 | Downloads: 44.6K  
  DeepSeek V4 in GGUF format from Unsloth, optimized for flash inference at the edge.

- **[migtissera/Tess-4-27B](https://huggingface.co/migtissera/Tess-4-27B)**  
  Author: migtissera | Likes: 94 | Downloads: 971  
  A Qwen3.5-based multimodal reasoning model with a "Tess" personality fine-tune, gaining niche traction.

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**  
  Author: froggeric | Likes: 866 | Downloads: 0  
  A utility model fixing Jinja chat templates for Qwen models, highly liked for improving MLX compatibility.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)**  
  Author: GnLOLot | Likes: 203 | Downloads: 49.3K  
  A 1B reasoning GGUF based on MiniCPM5, trending for its surprising performance-to-size ratio.

---

### 3. Ecosystem Signal

**Qwen3.6 and MoE dominance:** The Qwen family (3.5 and 3.6) dominates the leaderboard, accounting for nearly a third of the top 30. MoE architectures (GLM-5.2, Nemotron-Labs, Qwen3.6-A3B) are the clear architectural winners, balancing performance with inference cost. **Unsloth** has become the de facto quantization partner, shipping GGUF and NVFP4 versions on the same day as base model releases.

**Open-weight vs. proprietary:** Proprietary players (NVIDIA, Baidu, Tencent, Google, Cohere, Meituan) are increasingly releasing open weights, driven by competitive pressure from the open-source community. The surge in uncensored fine-tunes (e.g., HauhauCS) reflects a growing sub-community prioritizing raw expressiveness over safety alignment.

**Quantization as distribution:** GGUF is the dominant format for consumer adoption, with models like *Ornith-1.0-35B-GGUF* and *Qwythos-9B* crossing millions of downloads. The rise of **NVFP4** and **MTP** (multi-token prediction) suggests that the next frontier is not just smaller sizes but smarter compression.

**Multimodal maturity:** Vision-language models (LocateAnything, Unlimited-OCR, ThinkingCap) and video generation (LingBot, LTX) are no longer experimental; they are being packaged for production and agentic pipelines.

---

### 4. Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – A rare combination of high likes (**2.7K**) and high downloads (**1.5M**) for a 3B feature-extraction model. Its zero-shot localization capability makes it a must-study for anyone building vision-agent systems.

2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – The week’s most downloaded model (**2.6M**) and a clear signal of market demand for uncensored, high-performance MoE. Studying its architecture and fine-tuning approach reveals how the community pushes past safety guardrails.

3. **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)** – A focused ASR model for Arabic, a language often underserved. Its release by Cohere Labs signals a strategic move into vertical, language-specific AI—worth exploring for multilingual deployment strategies.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*