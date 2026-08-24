# Hugging Face Trending Models Digest 2026-08-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-24 01:22 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-08-24

---

## 1. Today's Highlights

The Hugging Face hub is absolutely dominated by Qwen this week — the **Qwen3.8-27B** family (a multimodal image-text-to-text model) holds the top spot with 12.3K likes and 2.36M downloads, spawning an entire ecosystem of fine-tunes, abliterated "uncensored" variants, and GGUF quantizations. The clear trend is **local/first-party quantization**: the official `unsloth/Qwen3.8-27B-GGUF` has already hit 6.7M downloads — nearly 3× the base model — signaling massive consumer appetite for running these models locally. Beyond Qwen, we see major releases from **DeepSeek (V4-Flash, V4-Pro)**, **MiniMax (H3 video, Music3)**, and **moonshotai's Kimi-K3** (10.9K likes) rounding out a week of frontier-scale releases. Interestingly, the MoE architecture is gaining real traction — `ornith-ai/Ornith-1.5-35B-A3B` (3.5% active params) shows the community is increasingly interested in efficiency. The "abliteration" (uncensoring) trend continues unabated, with at least 5 separate uncensored Qwen3.8 variants in the top 30.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes / Downloads | Why it's trending |
|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,316 / 2,358,347 | The flagship multimodal LLM of the week; Qwen's 3.8 architecture with image+text understanding is capturing massive organic adoption. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,652 / 3,089,709 | DeepSeek's latest fast/cheap V4 variant — huge download volume signals strong production usage for the Flash tier. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 734 / 57,928 | The premium, higher-quality sibling of V4-Flash; lower downloads but strong likes-to-download ratio suggests early research adoption. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,950 / 2,727,920 | Kimi's compressed-tensor flagship with feature-extraction capabilities — 10.9K likes makes it one of the most-liked releases this week. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 365 / 23,516 | A 35B MoE with only 3.5B active parameters — efficiency-focused architecture that's gaining attention from the self-host community. |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 183 / 31,496 | The smaller sibling in the Ornith MoE family, offering a more accessible entry point. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes / Downloads | Why it's trending |
|---|---|---|---|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,378 / 4,039,236 | MiniMax's latest image-to-video + text-to-video diffusion model — huge downloads (4M+) show strong creative-tool adoption. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,643 / 738,345 | A multi-format video model (image-to-video, text-to-video, video-to-video) in a single file — flexibility is winning over creators. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,205 / 17,421 | Text-to-music generation; high like-count relative to downloads signals strong early buzz and a promising niche. |

### 🔧 Specialized Models (code, math, medical, embeddings, etc.)

| Model | Author | Likes / Downloads | Why it's trending |
|---|---|---|---|
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 214 / 2,280 | A compact Qwen3-based model with ASR capabilities — demonstrates that speech-to-text is now standard-practice for any small-model launch. |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 203 / 36,234 | Speculative-decoding optimized variant of Qwen3.8 — performance-focused users are paying attention to inference speed. |
| [incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 163 / 69,783 | A parallel speculative-decoding effort on the same Qwen base — the community is clearly converging on inference-optimization as a key differentiator. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, abliterated)

| Model | Author | Likes / Downloads | Why it's trending |
|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,738 / 6,674,515 | The #1 downloaded model this week — unsloth's GGUF quantization of Qwen3.8 is THE go-to for local inference. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 650 / 1,334,820 | Abliterated + GGUF + MTP; the most popular "uncensored" Qwen variant by a wide margin. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 959 / 47,098 | Uncensored variant specifically optimized for Apple Silicon (MLX) — the Mac-user community is hungry for these. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,050 / 190,062 | FP8-precision abliterated version for high-end GPU inference — balances quality and speed. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 634 / 244,834 | Multi-format (MLX/GGUF/safetensors) abliterated variant; broad-format availability drives adoption. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 297 / 943,360 | huihui's trusted abliteration pipeline applied to Qwen3.8 — strong downloads (943K) prove the community trusts this brand. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 538 / 676,697 | "Aggressive MTP" (multi-token prediction) quantization — the niche of specialized GGUF configs is exploding. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 245 / 579,334 | Another abliterated GGUF variant — but the "Heretic" branding differentiates in an increasingly crowded uncensored space. |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 210 / 193,794 | A GAIN-trained, COLD-FUSION merged, MTP-enabled GGUF — the ultimate "kitchen-sink" fine-tune trend. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 249 / 131,435 | A specialized "Ridge" quantization of Qwen3.8 for llama.cpp users. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 252 / 369,478 | GGUF for the Ornith MoE — makes the 35B model accessible on consumer hardware; MIT-licensed. |
| [ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 176 / 359,078 | The 9B GGUF sibling — simpler local deployment for the MoE family. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 259 / 24,844 | The non-quantized abliterated version — for those who prefer full precision. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 672 / 2,653,678 | Official FP8 quantization from Qwen themselves — 2.65M downloads signals enterprises adopting the official precision-reduced build. |

---

## 3. Ecosystem Signal

**The Qwen3.8 family is this week's absolute winner** — not just as a base model, but as the focal point of an entire ecosystem. The base model has 12.3K likes, but what's more telling is that **7 of the top 30 models are Qwen6.8 derivatives** (GGUF of various forms, abliterated, FP8, speculative-decoding). No other model family in recent memory has spawned this volume of derivative work within a single week. The community has essentially "standardized" on Qwen8.6 as the test-bed for new techniques: abliteration, MTP (multi-token prediction), DFlash2 (speculative decoding), and custom chat templates were ALL first demostrated on Qwen3.8 in this batch.

**Quantization is now the #1 distribution channel.** The `unsloth` GGUF has 6.7M downloads — 3× the base model's 2.3M. Users overwhelmingly want local, efficient inference. FP8, GGUF (Q4, Q8), and MLX are the three dominant formats. Interestingly, **Apple Silicon (MLX) is its own deduicated format trend** — orcarouter's MLX versions get 47K+ downloads despite having no GGUF, suggesting a healthy Mac-user segment.

**Open-weight competitiveness is at an all-time high.** DeepSeek-V4-Flash, Kimi-K3, and Qwen3.8 are all genuinely competitive with closed models, and all are open-weight. The "abliteration" (safety-refusal removal) sub-ecosystem continues to grow, with at least 6 dedicated abliterated models in the top 30 — a durable community interest that persists across model generations.

**MoE and efficiency are finally mainstream at the consumer level.** The Ornith MoE family (35B with 3.3B active) getting GGUF treatments with 300K+ downloads confirms users are ready for sparse models locally.

---

## 4. Worth Exploring

1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — At 6.7M downloads, this is the single most-downloaded model this week. If you're building any local-inference app, this is the quantization you should be using as your baseline. It's the community reference implementation.

2. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — With 10.9K likes, this is arguably the most *liked* model that isn't from Qwen or DeepSeek. Its "compressed-tensors" + "feature-extraction" tags suggest Moonshot is doing something architecturally novel — worth studying even if you don't deploy it.

3. **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** — The MoE-with-3.3B-active-params approach, now MIT-licensed with GGUF support, marks a shift toward making high-parameter-count models genuinely deployable on single GPUs. A great case study for efficiency-first model design in 2026.

---

*Digest generated from Hugging Face trending data for 2026-08-24.*

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*