# Hugging Face Trending Models Digest 2026-08-27

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-27 08:05 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-08-27

---

## 1. Today's Highlights

The Qwen3.8 family continues to dominate the ecosystem, with the flagship **Qwen3.8-27B** (12.9K likes, 3.3M downloads) leading a massive wave of community quantizations and uncensored fine-tunes. The release of **Qwen3.8-Flash-Next** and **GLM-5.3-Flash** signals a growing trend toward fast, efficient "Flash" variants of flagship models. Video and music generation are also surging — **MiniMax-H3** (4.5K likes, 4.8M downloads) and **MiniMax-Music3** are gaining significant traction alongside **Lightricks/LTX-2.5**. Notably, **DeepSeek-V4-Flash-0731** and **Kimi-K3** round out a highly competitive landscape where Chinese labs (Qwen, DeepSeek, MiniMax, Moonshot, SenseNova) are setting the pace. The abliterated/uncensored fine-tune ecosystem around Qwen3.8-27B remains extremely active, with multiple GGUF variants amassing millions of downloads.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why it's trending |
|-------|--------|-------|-----------|-------------------|
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 3,770 | 2,551 | Fast "Flash" variant of the Qwen3.8 series, experimental qwen4_exp architecture — the next-gen inference-optimized Qwen. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,108 | 0 | Zhipu AI's flash-speed GLM-5.3 release (glm5_next) — fresh release generating immediate buzz. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,746 | 3.86M | The fast variant of DeepSeek-V4, massively downloaded for its strong performance-to-compute ratio. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,026 | 2.92M | Kimi's newest flagship with compressed-tensors — high likes signal strong community enthusiasm. |
| [sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | sensenova | 174 | 3,264 | Native any-to-any multimodal MoT (Mixture-of-Thought) model — innovative architecture exploration. |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 254 | 3,921 | Small ASR-integrated text generation model built on Qwen3 — interesting speech-to-text crossover. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 459 | 83K | MoE model (35B total, 3B active) built on qwen3_5_moe — efficient sparse activation architecture. |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 231 | 119K | Dense 9B sibling of the Ornith-1.5 series with image-text-to-text capabilities. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why it's trending |
|-------|--------|-------|-----------|-------------------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,946 | 3.30M | Flagship Qwen3.8-27B — the most-liked model this week, dense multimodal (image-text-to-text) with massive adoption. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,883 | 894K | Next-gen video generation model (image-to-video, text-to-video) — major update to the LTX series. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,509 | 4.79M | Flagship text/video-to-video generation model — one of the most downloaded video models on the hub. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,266 | 19.5K | Third-gen music generation model (text-to-music) — expanding MiniMax's generative media suite. |
| [alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 142 | 3,148 | ControlNet-Union adapter for MiniMax-H3, enabling fine-grained video control. |
| [Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 176 | 4,257 | New TTS preview model built on arktts — early but promising text-to-speech entry. |

### 🔧 Specialized Models (code, math, medical, embeddings)

*No dedicated specialized models this week — most listings fall under general or multimodal categories.*

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why it's trending |
|-------|--------|-------|-----------|-------------------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,020 | 7.64M | The go-to GGUF quantization of Qwen3.8-27B — highest download count on this week's list. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 821 | 469K | Abliterated (uncensored) version of Qwen3.8-27B with MLX, GGUF, and safetensor formats. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,187 | 270K | FP8-precision uncensored Qwen3.8-27B — efficient precision with abliterated weights. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,146 | 79K | MLX-optimized uncensored Qwen3.8-27B for Apple Silicon deployment. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 389 | 0 | GGUF quantization of the new Flash-Next — early availability from Unsloth's fast pipeline. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 669 | 912K | Aggressive uncensored GGUF with Multi-Token Prediction — popular community variant. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 761 | 1.62M | llama.cpp-compatible uncensored GGUF with MTP support — widely adopted. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 479 | 184K | Additional GGUF variant in the abliterated family with strong download momentum. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 318 | 1.39M | GGUF of the efficient MoE model — MIT licensed, endpoint-compatible. |
| [ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 224 | 1.39M | GGUF sibling for the 9B Ornith model — strong downloads for a smaller form factor. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 385 | 1.32M | Well-known abliteration specialist's Qwen3.8 variant — trusted community source. |
| [EschaLabs/Qwen3.8-27B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.8-27B-Escha-W2) | EschaLabs | 134 | 2,481 | Extreme 2-bit quantization experiment — pushing the limits of model compression. |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN...](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 255 | 233K | Experimental "Cold-Fusion + GAIN Training" hybrid GGUF — novelty community engineering. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,490 | 0 | Fixes Qwen chat templates (Jinja) for MLX workflows — small utility with surprising popularity. |
| [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 194 | 17.6K | Base abliterated weights (unquantized) — the source for the various derived formats. |

---

## 3. Ecosystem Signal

**Qwen3.8-27B is the undisputed center of gravity** this week. The base model's 3.3M downloads combined with its quantization ecosystem (7.6M GGUF downloads alone from Unsloth) and at least eight distinct uncensored/abliterated variants makes it the most actively forked, quantized, and redistributed model on the hub. The "Flash" trend is real: both Qwen and GLM are shipping inference-optimized variants, and DeepSeek-V4-Flash has amassed 3.86M downloads within days of release. This signals a maturing market where **inference efficiency, not raw capability**, is the primary differentiator for deployment.

Chinese AI labs (Qwen, DeepSeek, MiniMax, Moonshot, Zhipu, SenseNova) are far outpacing Western labs in open-weight releases this week. The **uncensored/abliterated ecosystem** around Qwen3.8 is remarkable — the community has rapidly normalized stripped-safety fine-tunes across formats (GGUF, MLX, FP8), indicating strong demand for "unrestrained" models for local experimentation and role-play.

MiniMax is aggressively expanding into multi-modal generation (video + music), while Ornith-ai's MIT-licensed MoE models (35B-A3B, 9B) are gaining traction as efficient, permissively-licensed alternatives. Video generation (LTX-2.5, MiniMax-H3) is clearly the next major battleground.

---

## 4. Worth Exploring

1. **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — As an experimental (qwen4_exp) release, this signals where Qwen is heading architecturally. Flash models are becoming the industry standard for production inference, and understanding its design will be instructive for anyone deploying LLMs at scale.

2. **[sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT)** — A native any-to-any multimodal model with Mixture-of-Thought architecture. This is an early exploration of truly unified multimodal reasoning in a compact 8B form factor — worth studying for research and edge deployment.

3. **[EschaLabs/Qwen3.8-27B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.8-27B-Escha-W2)** — A 2-bit quantization of a 27B model is an extreme compression experiment. Whether it works well or produces significant degradation, it's a valuable data point for the limits of aggressive post-training quantization and useful for ultra-low-resource deployments.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*