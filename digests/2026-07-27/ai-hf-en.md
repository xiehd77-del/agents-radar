# Hugging Face Trending Models Digest 2026-07-27

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-27 03:21 UTC

---

Here is the structured **Hugging Face Trending Models Digest** for July 27, 2026.

---

## 1. Today's Highlights

This week’s trending models reveal a strong shift toward **multimodal MoE (Mixture-of-Experts) architectures**, led by the explosive popularity of **zai-org/GLM-5.2** and several Qwen3.6 variant fine-tunes. The community is also heavily embracing **extreme quantization** (1-bit and 2-bit ternary formats) from **prism-ml**, making large 27B models accessible on consumer hardware. On the application side, **Baidu’s Unlimited-OCR** dominates downloads, while **Microsoft** continues its push into both generative editing (**Mage-Flow**) and robotics (**MiniCPM-RobotManip**). The ecosystem is clearly bifurcating between cutting-edge research releases and highly accessible, quantized community fine-tunes.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – *zai-org* – 4,481 likes, 827k downloads  
  A powerful MoE-based conversational LLM with DSA architecture, trending as the top-liked model in the language category.

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** – *upstage* – 599 likes, 3.3k downloads  
  A massive 250B open-weight LLM from Upstage, signaling continued investment in very large-scale open models.

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** – *Nanbeige* – 450 likes, 14k downloads  
  A compact 3B parameter LLM optimized for efficiency, popular for its balance of size and performance.

- **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)** – *Motif-Technologies* – 193 likes, 2.4k downloads  
  A new feature-extraction focused language model, gaining attention for enterprise embedding use cases.

- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)** – *fdtn-ai* – 187 likes, 6k downloads  
  A 1B parameter Granite-MoE-hybrid model with a security focus, representing a trend toward safe, small models.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** – *baidu* – 3,217 likes, 2.6M downloads  
  An image-to-text OCR model from Baidu with massive download volume, essential for document digitization workflows.

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** – *thinkingmachines* – 1,581 likes, 34.5k downloads  
  A conversational multimodal model (image+text), trending for its strong vision-language reasoning.

- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** – *microsoft* – 339 likes, 1.4k downloads  
  A text-to-image and image-editing diffusion model from Microsoft, driving advances in controllable generation.

- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** – *owensong* – 180 likes, 298 downloads  
  A lightweight text-to-speech model optimized for CPU and edge deployment, signaling local TTS momentum.

- **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)** – *nvidia* – 125 likes, 32.7k downloads  
  NVIDIA’s latest Cosmos model for edge video generation, leveraging diffusers for lightweight inference.

- **[microsoft/Mage-Flow-Edit-Turbo](https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo)** – *microsoft* – 89 likes, 946 downloads  
  A turbo version of Mage-Flow focused on instruction-based image editing, optimized for speed.

- **[baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4)** – *baseten* – 114 likes, 2k downloads  
  A vision-language variant of GLM-5.2, quantized with NVFP4 for efficient multimodal deployment.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** – *moonshotai* – 1,298 likes, 730k downloads  
  A compressed, code-specialized transformer from Moonshot AI, dominating the coding model trend with high downloads.

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** – *Kwaipilot* – 198 likes, 3.8k downloads  
  A Qwen3.5-MoE based coder with vision support, trending for its multi-modal code generation capabilities.

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** – *openbmb* – 177 likes, 643 downloads  
  A vision-language-action (VLA) model for robotic manipulation, representing the emerging robotics + AI trend.

- **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** – *openbmb* – 130 likes, 398 downloads  
  A companion robotics model focused on object tracking, part of the same MiniCPM VLA family.

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** – *ATH-MaaS* – 313 likes, 35.6k downloads  
  A Qwen3.5-based OCR model, competing with Baidu’s Unlimited-OCR in the document AI space.

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** – *conradlocke* – 544 likes, 0 downloads  
  A LoRA for identity-consistent image editing built on Krea-2, trending for creative AI applications.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** – *DavidAU* – 643 likes, 552k downloads  
  An uncensored, heavily fine-tuned Qwen3.6 variant in GGUF format, popular among roleplay and creative writing communities.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – *HauhauCS* – 3,114 likes, 1.9M downloads  
  A wildly popular uncensored MoE vision model (35B, 3B active) quantized to GGUF, with massive download numbers.

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** – *prism-ml* – 1,052 likes, 632k downloads  
  A 2-bit ternary quantized 27B model, enabling large model inference on low-resource hardware.

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** – *prism-ml* – 652 likes, 2.2M downloads  
  A 1-bit extreme quantization of a 27B model, the highest-download GGUF in this digest, reflecting community demand for ultra-light LLMs.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** – *empero-ai* – 2,480 likes, 1.4M downloads  
  A Qwen3.5-based reasoning model quantized to GGUF, blending Claude-style synthetic data with open-weight accessibility.

- **[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)** – *unsloth* – 203 likes, 102.7k downloads  
  Unsloth’s GGUF quantization of the Laguna model, enabling fast inference on consumer GPUs.

- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF)** – *LuffyTheFox* – 172 likes, 73.6k downloads  
  Another uncensored Qwen3.6 MoE GGUF variant, this one incorporating Hermes fine-tuning for enhanced reasoning.

- **[poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4)** – *poolside* – 143 likes, 138.7k downloads  
  An NVFP4 (4-bit floating point) quantized variant of Laguna, optimized for NVIDIA inference frameworks.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** – *bottlecapai* – 554 likes, 27.8k downloads  
  A fine-tuned Qwen3.6 with "thinking" capabilities, trending for its improved reasoning and chain-of-thought performance.

## 3. Ecosystem Signal

The current ecosystem is driven by two powerful trends: **Mixture-of-Experts (MoE)** and **extreme quantization**. The Qwen3.6 family—especially its 35B-A3B MoE variant—has become the dominant base model for community fine-tunes, with uncensored and roleplay-oriented variants (e.g., HauhauCS, LuffyTheFox, DavidAU) generating massive download volumes. **prism-ml** is pioneering the 1-bit and 2-bit ternary quantization space, allowing 27B models to run on devices previously limited to 7B models. On the research side, **GLM-5.2** from zai-org and **Solar-Open2-250B** from Upstage show that big labs are still pushing for larger, more capable open-weight models. **Microsoft** and **openbmb** are expanding into robotics with VLA models, while **Baidu** and **ATH-MaaS** compete in the OCR/document AI niche. The open-weight vs. proprietary balance continues to tip toward openness, with nearly all top models offering permissive licenses and community-accessible quantized formats.

## 4. Worth Exploring

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** – With 2.2M downloads and a 1-bit architecture, this model is the most compelling test case for whether extreme quantization can preserve useful capabilities. It’s a must-study for anyone interested in on-device LLM deployment.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – As the highest-liked GGUF model (3,114 likes, 1.9M downloads), this represents the pinnacle of community-driven MoE fine-tuning. It’s worth exploring to understand the uncensored/creative use case demand.

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** – A pure vision-language-action model for robotics, this represents an early but rapidly growing frontier. It’s worth studying for researchers and practitioners interested in embodied AI.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*