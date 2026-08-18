# Hugging Face Trending Models Digest 2026-08-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-18 01:18 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-08-18

---

## 1. Today's Highlights

This week's trending榜单 reflects a **multimodal arms race** led by Chinese labs: **Qwen3.8-27B** (10.7K likes) and **Kimi-K3** (10.8K likes) dominate the language-vision frontier, while **MiniMax-H3** (4.1K likes) and its ecosystem derivatives (Comfy-Org, Turbo, LoRAs) show explosive growth in video generation. Notably, **quantized formats** (GGUF/FP8/NVFP4) from unsloth and community fine-tuners like DavidAU are capturing massive download volumes, signaling strong local-deployment demand. A "fix-the-chat-template" utility model and several 2-3B small models (LiquidAI, inclusionAI) hint at a growing **efficiency and usability layer** above the flagship models.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes | Downloads | Why it's trending |
|---|---|---|---|---|
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,041 | 9,465 | Sparse MoE LLM (95B active of 2.4T total); frontier-scale reasoning at lower inference cost. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 574 | 25,006 | Latest production-grade LLM from DeepSeek; stable, high-quality conversational model. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,499 | 1,978,298 | Fast, lightweight V4 variant; 2M+ downloads in weeks—preferred for API and edge serving. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 307 | 231,271 | 30B MoE (3B active) with NVFP4 quantization; NVIDIA's efficient inference-focused release. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 169 | 69,833 | Reference BF16 version of the Lightning model; baseline for fine-tuning and comparisons. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 653 | 147,270 | Small (2.6B) liquid neural network model; strong quality-to-parameter ratio attracting edge developers. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,662 | 334,099 | Meta's flagship multimodal chat model (30B), blending language with vision inputs. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why it's trending |
|---|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 10,720 | 415,039 | Flagship image-text-to-text model; #1 in likes, setting the bar for open multimodal. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,802 | 2,163,953 | Compressed-tensor vision-language model; Kimi's massive community pull. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,088 | 2,403,238 | Premier open video generation model (text/image-to-video); huge community adoption. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,110 | 465,529 | Latest video gen model with multi-format support; a new standard in single-file diffusion. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 906 | 10,375 | Music generation model from MiniMax; fresh entry into controllable text-to-music. |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 233 | 23,202 | Compact 2.9B anime text-to-image diffusion model; resonates with the ComfyUI creative community. |

### 🔧 Specialized Models (code, math, medical, embeddings, tooling)

| Model | Author | Likes | Downloads | Why it's trending |
|---|---|---|---|---|
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 307 | 6,266 | Hybrid small model (bailing_hybrid, MIT license) for efficient inference on US-region workloads. |
| [LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 162 | 6,816 | 3B vision-language variant of LiquidFM; compact multimodal research model. |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 207 | 633 | Preview of "dots3" note-taking model; on-device productivity use case. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,211 | 0 | Utility-only repo fixing Qwen chat templates (jinja, MLX); viral because it fixes a real pain point. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why it's trending |
|---|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,633 | 2,727,609 | The de-facto downloaded GGUF of the top model; essential for llama.cpp and local users. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 302 | 357,701 | Uncensored variant with MTP support; popular with roleplay and creative writing users. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,120 | 3,033,928 | Community mega-fusion (uncensored, "heretic" lineage); 3M downloads show a huge appetite for niche local models. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 438 | 15,812 | Abliterated/uncensored FP8 version for lower VRAM servers. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 240 | 378,177 | NVFP4 quantization for NVIDIA GPUs; 4-bit class quality with high speed. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 470 | 755,125 | GGUF of Meta's Muse-Glimmer; opens multimodal 30B to local hardware. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 530 | 495,646 | First-party FP8 release; the official high-efficiency version of Qwen3.8-27B. |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 220 | 12,295 | FP8 variant of the massive MoE; for high-end single-node inference. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,403 | 14,015,769 | ComfyUI-packaged MiniMax-H3; breathtaking 14M downloads—#1 most used asset ecosystem-side. |
| [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 167 | 256,988 | ComfyUI port of MiniMax-Music3 (Apache-2.0); usable music gen in a node graph. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 586 | 264,351 | User-made "Turbo" version of H3; faster inference for t2v/i2v workflows. |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 244 | 18,562 | LoRA for realistic people rendering in MiniMax-H3; a production-ready asset from fal. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 786 | 0 | Another H3 LoRA (text-to-video) for stylized output; 0 downloads but high likes—social amplifier. |

---

## 3. Ecosystem Signal

The current landscape shows **three clear gravitational centers**: Qwen's multi-modal 27B series, MiniMax's video suite, and DeepSeek's fast LLM deployment stack.

- **Multimodal dominance**: Qwen3.8-27B and Kimi-K3 occupy the *very top* both in likes and downloads—language-only models are no longer the growth peak. Video (MiniMax-H3, LTX-2.5) is growing even faster than chat.
- **Open-weight is winning**: every top model is openly downloadable, and proprietary models (e.g., from MiniMax/DeepSeek) are shipped as open weights with permissive-ish licenses to capture ecosystem mindshare.
- **Quantization is now a first-class product**: unsloth's GGUF/NVFP4, official FP8 from Qwen, and community abliterated sets account for the **majority of downloads** (2.7M, 3M, 14M). Users are actively *serving* on consumer hardware, not just reading papers.
- **ComfyUI is supercharging reach**: Comfy-Org's ports of MiniMax-H3 (14M downloads!) and Music-3 prove that **creative workflows**, not just developers, drive huge adoption for video/music models.
- **Meta and NVIDIA are competing for the MoE efficiency crown** (Muse-Glimmer-30B, Nemotron-Lightning) while Chinese labs capture raw scale.

The "utility" layer is emerging: chat template fixes, 2-3B tiny models, and NVIDIA's BF16 reference releases point to a maturing ecosystem where *deployment ergonomics* matter as much as raw intelligence.

---

## 4. Worth Exploring

1. **Unsloth/Qwen3.8-27B-GGUF** — *The* workhorse quantization of the strongest multimodal model. If you only try one file, use this: it works on llama.cpp, runs on modest GPUs, and pairs perfectly with the "uncensored" variants if you need fewer refusals.

2. **Comfy-Org/MiniMax-H3** — With 14M downloads, this single file is the most-used generative asset on the Hub. Whether you are a researcher studying video diffusion or a creator building production pipelines, studying why *this* packaging succeeded is as valuable as the model itself.

3. **meta-models/Muse-Glimmer-30B** (+ its GGUF by unsloth) — Meta's entry into open multimodal chat with strong RLHF polish. It's the clearest example of a lab matching frontier quality with permissive licensing; fine-tune it or distill it to understand the new "open frontier" playbook.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*