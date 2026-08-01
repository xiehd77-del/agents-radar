# Hugging Face Trending Models Digest 2026-08-01

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-01 02:56 UTC

---

# Hugging Face Trending Models Digest — 2026-08-01

---

## 1. Today's Highlights

**Kimi-K3** from Moonshot AI dominates the chart with over 9,200 weekly likes, signaling a major multimodal shift for the Kimi family. DeepSeek's V4-Flash release is generating substantial buzz despite zero downloads on the dated snapshot—the main model has already accumulated 2.9M downloads. Qwen 3.6-based community fine-tunes (particularly uncensored variants) continue their explosive growth, with three entries in the top 30. The TTS space is heating up with edge-optimized models from owensong and Audio8, while Microsoft pushes multimodal boundaries with Fara1.5-27B (computer-use) and VibeVoice-ASR-BitNet. GGUF quantization activity remains intense, with unsloth, DavidAU, and community authors shipping high-volume conversions.

---

## 2. Trending Models by Category

### 🧠 Language Models

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 1,045 | 0 |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,709 | 1,651,533 |
| [Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 863 | 76,212 |
| [Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 595 | 26,928 |
| [Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 714 | 12,911 |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,924 | 2,923,499 |

**DeepSeek-V4-Flash** is the flagship release powering deepseek's newest generation—the main model has amassed 2.9M downloads in record time. **GLM-5.2** (zai-org) showcases a new MoE-DSA architecture and has become the most-downloaded non-DeepSeek LLM this week. **Solar-Open2-250B** from Upstage is a massive open-weight model attracting both research and enterprise interest, with a dedicated NVFP4 quantization tracking it.

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,284 | 493,481 |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,664 | 2,513,603 |
| [Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 348 | 1,449 |
| [Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 151 | 5,650 |
| [Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,664 | 57,259 |
| [Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 198 | 2,971 |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 152 | 2,481 |
| [Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2) | owensong | 121 | 802 |

**Kimi-K3** is the week's runaway star—a compressed, feature-extraction multimodal model with Moonshot's trademark quality at reduced footprint. **Unlimited-OCR** from Baidu cements its position as the go-to OCR solution with 2.5M downloads. **Inkling** (thinkingmachines) is an emerging multimodal conversational model generating serious community traction. The **Inflect** series (Micro/Nano v2) targets CPU/edge text-to-speech deployment—a notable underrepresented niche.

### 🔧 Specialized Models

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 371 | 10,241 |
| [Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 235 | 2,726 |
| [VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 135 | 5,464 |
| [XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 327 | 869 |
| [XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 353 | 579 |

**KAT-Coder-V2.5-Dev** is a Qwen3.5-MoE-based coding model from Kwaipilot pushing code generation capabilities. **Fara1.5-27B** (Microsoft) applies Qwen3.5 architecture to computer-use tasks—currently trending in agentic AI circles. **VibeVoice-ASR-BitNet** pioneers BitNet quantization for speech recognition. The **XYZ-Aquila** pair (mini/pro) targets agentic search and multimodal reasoning.

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,153 | 1,119,057 |
| [Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 228 | 36,180 |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 194 | 0 |
| [Kimi-K3 (unsloth)](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 216 | 1,044 |
| [Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 151 | 18,531 |
| [Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 273 | 212,426 |
| [Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,206 | 1,835,931 |
| [Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,125 | 712,835 |
| [Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 107 | 599 |
| [Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 175 | 261,856 |

**HauhauCS's Qwen3.6 uncensored variant** is the community fine-tune phenomenon of the week—1.8M downloads and 3.2K likes. **DavidAU** continues their prolific GGUF release schedule with multiple high-download entries. **Ternary-Bonsai-27B** introduces a novel 2-bit ternary quantization approach with 712K downloads. **unsloth** maintains their position as the default quantization provider for major releases (Kimi-K3, DeepSeek-V4). **Nota-AI's NVFP4** quantization of Solar-Open2 targets vLLM production deployment.

---

## 3. Ecosystem Signal

**Multimodal consolidation is the defining trend** — Moonshot's Kimi-K3 topping the charts alongside Baidu's Unlimited-OCR and Microsoft's Mage-VL/Inkling confirms that pure-text LLMs are no longer the center of gravity. The Qwen 3.5/3.6 family has become the dominant base for community fine-tuning, generating massive download volumes through uncensored and roleplay variants—the **HauhauCS** model alone rivals major lab releases in engagement.

**Open-weight adoption continues to accelerate** with Suno's open weights, DeepSeek's V4 flash shipping with full weight availability, GLM-5.2 distributing to 1.6M downloads, and Upstage's Solar-Open2 at 250B scale all showing strong community distribution. Proprietary models are increasingly adopting open-weights strategies for ecosystem lock-in.

**Quantization has matured into a first-class practice** — the convergence of GGUF, NVFP4, and BitNet approaches suggests the ecosystem is solving for deployment efficiency at multiple levels. Notable is the surge of **ternary and 2-bit quantization** (Ternary-Bonsai, Escha-W2), signaling the compute-constrained edge deployment is becoming a serious market. unsloth's rapid GGUF releases within days of base model launches have become the reliability standard.

**TTS/edge audio** is an emerging greenfield category, with owensong's dual Micro/Nano releases and Audio8's 0.6B model indicating growing interest in on-device voice synthesis.

---

## 4. Worth Exploring

**1. [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — The week's most-liked model. As Moonshot's compressed multimodal model with feature-extraction capabilities, it represents where top-tier labs are heading with efficient architectures. Its integration of compressed-tensors suggests significant inference cost savings. Both the base and unsloth-GGUF versions are worth studying.

**2. [Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — A truly novel approach with 2-bit ternary quantization achieving 712K downloads. This pushes the boundaries of what's possible on consumer hardware and could become a template for extreme compression across other model families.

**3. [Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)** — Microsoft's computer-use model built on Qwen3.5 is a strategic play into agentic AI. Understanding its architecture can inform designs for UI automation, browser agents, and multimodal interaction systems—likely a major battleground in the next AI infrastructure wave.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*