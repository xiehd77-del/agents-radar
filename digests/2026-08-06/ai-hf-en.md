# Hugging Face Trending Models Digest 2026-08-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-06 02:41 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-08-06

---

## 1. Today's Highlights

This week's trending board is dominated by the **Qwen3.5/3.6 ecosystem**, with multiple fine-tunes and GGUF quantizations (DavidAU, LuffyTheFox, HauhauCS) amassing over 4M combined downloads, signaling an exceptionally active community around this MoE architecture. **Kimi-K3** from moonshotai leads absolute likes (10,126) with **1.1M downloads**, cementing its position as the most popular multimodal model this cycle. The **DeepSeek-V4-Flash** family shows remarkable momentum with two variants totaling **3.1M downloads**, while **MiniMax-H3** marks a notable cross-ecosystem release with official Comfy-Org integration for image-to-video workflows. A significant signal: **Korea's LGAI-EXAONE** released a massive **750B MoE model (K-EXAONE-2.0)**, indicating continued scaling in open-weight MoE architectures for non-English languages.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
|---|---|---|---|---|
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,504 | 433K | Latest flash-tuned variant of DeepSeek's V4 conversational MoE, optimized for speed. |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,126 | 1.12M | Moonshot's flagship multimodal MoE with compressed-tensors; the week's most-liked model. |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,850 | 2.23M | Zhipu's massive GLM-MoE-DSA model, a top-3 download this week with strong adoption. |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,031 | 2.73M | The base V4-Flash release; highest raw download count on this list. |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 286 | 47K | Liquid AI's compact text-generation MoE with liquid-layered architecture. |
| [XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 366 | 1.3K | Pro-tier of XYZ Lab's Qwen3.5-MoE based model with agentic-search tooling. |
| [XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 417 | 1.3K | Mini variant of Aquila; lightweight Qwen3.6-class MoE for edge deployment. |
| [maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 159 | 0 | New MoE causal-LM from DeepGrove; early preview, zero downloads yet. |
| [Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 157 | 25 | Inclusion AI's hybrid-architecture conversational flash model (custom code). |
| [LGAI-EXAONE/K-EXAONE-2.0-750B-A37B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) | LGAI-EXAONE | 129 | 325 | Massive 750B MoE (37B active) Korean-first model from LG; a major scale signal. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
|---|---|---|---|---|
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,513 | 10.8K | Official image-text-to-video diffusers model; a next-gen video generation release. |
| [Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 309 | 15.5K | Compact multimodal (image-text-to-text) conversational model from Thinking Machines. |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,909 | 2.70M | Baidu's feature-extraction OCR powerhouse; one of the highest-download multimodal models. |
| [Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 276 | 435K | Microsoft's vision-language multimodal with strong feature-extraction performance. |
| [Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 192 | 0 | Krea-ecosystem LoRA for text-to-image in ComfyUI pipelines. |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 275 | 11.2K | 0.6B ArkTTS-based text-to-speech preview, feature-extraction ready. |
| [Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 417 | 2K | Local TTS micro model optimized for CPU/edge-ai speech synthesis. |
| [Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 132 | 166 | Mistral's 3B safety/guardrail model, vLLM-compatible. |
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 126 | 80 | NVIDIA's 11B voice chat model with multi-arxiv research backing. |

### 🔧 Specialized Models (code, OCR, safety, domain-specific)

| Model | Author | Likes | Downloads | Summary |
|---|---|---|---|---|
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 497 | 15.3K | Qwen3.5-MoE based code-specialist model with image-text-to-text support. |

### 📦 Fine-tunes & Quantizations (GGUF, community, uncensored)

| Model | Author | Likes | Downloads | Summary |
|---|---|---|---|---|
| [DavidAU Qwen3.6-27B Fable-Fusion GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,593 | 1.63M | Massive uncensored Qwen3.6 fine-tune with MTP-optimized GGUF quantizations. |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 502 | 111K | Unsloth's GGUF conversion of DeepSeek V4 Flash for local deployment. |
| [Qwen3.6-35B-A3B-Ultra-Heretic-H3-GGUF](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 290 | 0 | ComfyUI INT8 ConvRot quantization of Qwen3-VL. |
| [Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 388 | 308K | Hermes-V7 recipe applied to Qwen3.6 MoE with vision + GGUF. |
| [Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 210 | 2.9K | EschaLabs' weight-2 (W2) MoE fine-tune of Qwen3.6. |
| [MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 139 | 40K | Community GGUF quantizations of MiniMax-H3 for ComfyUI. |
| [Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 316 | 170K | Official Unsloth GGUF for Kimi-K3; enables local multimodal MoE. |
| [DavidAU Qwen3.5-9B Defiant-Fable GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 283 | 323K | Second DavidAU entry; 9B-class uncensored with NEO-IMATRIX MTP. |
| [Qwen3.6-35B-A3B-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,319 | 1.93M | Aggressively-tuned uncensored Qwen3.6 MoE; 3rd most-liked, massive adoption. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 760 | 2 | Official ComfyUI single-file diffusion format of MiniMax-H3. |

---

## 3. Ecosystem Signal

**Qwen3.5/3.6 is the clear community backbone this cycle.** Five of the top 10 most-downloaded models trace to Qwen3.x fine-tunes or quantizations (DavidAU, HauhauCS, LuffyTheFox, EschaLabs), totaling **~3.5M+ downloads**. The pattern is unmistakable: a strong base MoE model (Qwen3.5-A3B) spawns a runaway fine-tune economy focused on "uncensored" variants with MTP-optimized GGUFs.

**Open-weight MoE scaling is accelerating.** GLM-5.2 (DSA-MoE) and EXAONE-2.0 (750B-A37B) show that major labs continue to push open-weight MoE to frontier scale. DeepSeek's dual V4-Flash releases (base + 0731 date-stamped) suggest iterating at flash cadence is table stakes. Meanwhile, Kimi-K3's 1.1M downloads prove that **compressed-tensor multimodal MoE** is a breakout category.

**Quantization is a distribution layer, not an afterthought.** Unsloth's GGUFs (DeepSeek, Kimi) plus DavidAU's MTP/NEO-IMATRIX formatting dominate adoption. The shift: community quantizers are now behaving like software distributors, with dated releases, versioned IMATRIX calibrations, and multiple quantization tiers.

---

## 4. Worth Exploring

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — The week's most-liked model with 1.1M downloads. Its "compressed-tensors" tag suggests an architectural path toward cheaper multimodal MoE deployment. Any analyst tracking compression techniques or multimodal convergence should study its release notes.

2. **[K-EXAONE-2.0-750B-A37B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B)** — The largest open-weight MoE on this list, targeting Korean-first usage. It represents both a national AI strategy signal (LG's public commitment) and a benchmark for whether 750B MoE can attract community adoption vs. the Qwen juggernaut.

3. **[MiniMax-H3 + Comfy-Org integration](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — The rare official cross-ecosystem release (Diffusers + ComfyUI single-file) for image-text-to-video. At 2.5K likes in days, it signals that video generation is the next frontier for community tooling — and that partnerships between model labs and UI platforms are becoming a distribution strategy.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*