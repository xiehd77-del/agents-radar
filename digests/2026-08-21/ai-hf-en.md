# Hugging Face Trending Models Digest 2026-08-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-21 01:22 UTC

---

# 🤗 Hugging Face Trending Models Digest
**Date: 2026-08-21**

---

## 1. Today's Highlights

The **Qwen3.8 family** dominates the trending chart with over 10 entries across base models, quantizations, and uncensored fine-tunes, cementing Qwen's position as the most active open-weight ecosystem. **MiniMax-H3** (4,242 likes, 3.3M downloads) leads video generation, while **Kimi-K3** from Moonshot AI (10,883 likes) shows strong multimodal momentum. The ecosystem shows a clear pattern of rapid community iteration—within days of Qwen3.8's release, multiple abliterated and GGUF variants have emerged. Notably, **DeepSeek-V4** entries (Pro and Flash) signal intensifying competition in the open-weight LLM space. Unsurprisingly, uncensored/abliterated variants make up roughly a third of the top 30, reflecting sustained demand for less-restricted models.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, Chat Models)

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [**Qwen/Qwen3.8-2.4T-A95B**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,121 | 14,592 |
| [**deepseek-ai/DeepSeek-V4-Pro-0813**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 681 | 43,287 |
| [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,576 | 2,547,549 |

- **Qwen3.8-2.4T-A95B**: Qwen's flagship MoE text model with 2.4T total parameters and 95B active—trending as the largest open-weight text-generation release this week.
- **DeepSeek-V4-Pro-0813**: DeepSeek's latest dense chat model, gaining traction as a strong open alternative to proprietary frontier models.
- **DeepSeek-V4-Flash-0731**: Fast, efficient variant of DeepSeek-V4 with massive adoption; one of the most-downloaded new releases this week.

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,748 | 1,373,584 |
| [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,883 | 2,349,853 |
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,242 | 3,308,673 |
| [**meta-models/Muse-Glimmer-30B**](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,718 | 478,622 |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,417 | 611,825 |
| [**MiniMaxAI/MiniMax-Music3**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,106 | 14,471 |
| [**lightx2v/Minimax-h3-Turbo**](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 654 | 380,072 |
| [**Qwen/Qwen3.8-27B-FP8**](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 633 | 1,517,643 |
| [**dots-studio/dots3-note-prev**](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 242 | 1,373 |

- **Qwen3.8-27B**: Flagship vision-language model with 11.7K likes—the defining release of the week, offering strong image-text-to-text capabilities.
- **Kimi-K3**: Moonshot AI's compressed-tensor multimodal model with feature extraction; highly popular multimodal architecture.
- **MiniMax-H3**: Industry-leading text-to-video and image-to-video model with over 3.3M downloads.
- **Muse-Glimmer-30B**: Meta's multimodal conversational model attracting strong early adoption.
- **LTX-2.5**: Lightricks' image-to-video diffusion model, a top choice for video generation workflows.
- **MiniMax-Music3**: Music generation model with diffusers support—one of the few dedicated music models to break into trending.
- **Minimax-h3-Turbo**: Community turbo variant of MiniMax-H3 for faster inference.
- **Qwen3.8-27B-FP8**: FP8 quantized version of Qwen3.8-27B for efficient deployment with 1.5M+ downloads.
- **dots3-note-prev**: Dots Studio's preview multimodal model, early-stage but attracting interest.

### 🔧 Specialized Models (Code, Math, Embeddings, etc.)

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [**ornith-ai/Ornith-1.5-35B-A3B**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 220 | 1,713 |
| [**superwhisper/s1-mini**](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 156 | 348 |

- **Ornith-1.5-35B-A3B**: A Qwen3.5-based MoE for image-text-to-text and text generation—a lightweight (3B active) specialized multimodal model.
- **s1-mini**: Lightweight Qwen3-based ASR (speech recognition) model, early-stage but intriguing for voice applications.

### 📦 Fine-tunes & Quantizations (Community Fine-tunes, GGUF, and more)

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,360 | 5,126,652 |
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,339 | 0 |
| [**orcarouter/Qwen3.8-27B-Uncensored-MLX**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 714 | 2,628 |
| [**orcarouter/Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 676 | 76,109 |
| [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 513 | 979,768 |
| [**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 367 | 268,258 |
| [**unsloth/Qwen3.8-27B-NVFP4**](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 308 | 831,483 |
| [**OBLITERATUS/Qwen3.8-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 270 | 4,415 |
| [**TenStrip/10Eros-Max**](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 299 | 0 |
| [**orcarouter/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 239 | 52,382 |
| [**huihui-ai/Huihui-Qwen3.8-27B-abliterated**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 202 | 10,540 |
| [**huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 201 | 187,008 |
| [**0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF**](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 189 | 326,638 |
| [**Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF**](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 183 | 186,470 |
| [**empero-ai/Qwen3.8-27B-Ridge-GGUF**](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 223 | 55,074 |
| [**ornith-ai/Ornith-1.5-35B-A3B-GGUF**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 163 | 53,691 |

- **unsloth/Qwen3.8-27B-GGUF**: Most-downloaded quantization this week (5.1M downloads) — the go-to GGUF implementation for local Qwen3.8 deployment.
- **froggeric/Qwen-Fixed-Chat-Templates**: Viral MLX chat-template fix with 1.3K likes despite zero downloads—a high-visibility quality-of-life utility.
- **orcarouter/Qwen3.8-27B-Uncensored-MLX**: Apple Silicon MLX abliterated version, popular among Mac users seeking unrestricted use.
- **orcarouter/Qwen3.8-27B-Uncensored-FP8**: FP8 abliterated variant balancing performance and freedom.
- **JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**: llama.cpp-optimized uncensored GGUF with multi-token prediction (MTP) support.
- **HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**: "Aggressive" uncensored variant with MTP, tuned for maximum output freedom.
- **unsloth/Qwen3.8-27B-NVFP4**: NVIDIA NVFP4 quantization for Blackwell GPUs—831K downloads.
- **OBLITERATUS/Qwen3.8-27B-OBLITERATED**: Multi-format abliterated release offering MLX, safetensors, and GGUF in one.
- **TenStrip/10Eros-Max**: MiniMax-H3 fine-tune for specialized video generation use cases (currently zero downloads but visible).
- **orcarouter/Qwen3.8-27B-Uncensored-GGUF**: Another uncensored GGUF variant from the same author.
- **huihui-ai** (two entries): Popular abliterated series covering both full safetensors and GGUF formats.
- **0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF**: "Heretic" flavor of abliteration—326K downloads.
- **Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF**: Dense 27B uncensored GGUF variant.
- **empero-ai/Qwen3.8-27B-Ridge-GGUF**: Quantized GGUF tuned for the Qwen3.8 architecture.
- **ornith-ai/Ornith-1.5-35B-A3B-GGUF**: Mit-licensed GGUF variant of the specialized Ornith MoE model.

---

## 3. Ecosystem Signal

**Qwen** has unquestionably become the dominant force in the open-weight ecosystem. The Qwen3.8 family now spans dense 27B models, a massive 2.4T MoE, FP8, NVFP4, and GGUF quantizations, plus a thriving uncensored/abliterated sub-ecosystem with at least 10 variants in the top 30. **The "abliteration" trend**—models modified to remove alignment restrictions—has reached critical mass, with nearly a third of this week's top models being uncensored variants. This signals strong user demand for models with fewer content restrictions, particularly for roleplay and creative writing.

**Video and audio generation** are also clearly accelerating. MiniMax-H3's 3.3M downloads and multiple fine-tunes/quantizations suggest the video-generation category is maturing rapidly. **Compressed-tensor architectures** (via Kimi-K3) and the continued popularity of MoE designs (Qwen3.8 MoE, Ornith, DeepSeek-V4) point to a shift toward efficient inference as a key competitive feature.

**Open-weight vs. proprietary**: The open ecosystem is closing the gap. Models like Qwen3.8-27B and Kimi-K3 are increasingly competitive on benchmarks with proprietary alternatives, and the deep ecosystem of tooling around these models makes them more accessible. However, the **uncensored model popularity** also raises important safety and governance questions that the community has yet to resolve.

---

## 4. Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The week's flagship release and the center of the entire trending ecosystem. Studying this model gives you a picture of the current state of open-weight vision-language models, and its strong Qwen3.5 architecture influence makes it a key reference. (11.7K likes)

2. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — The most-liked non-Qwen model. Its "compressed-tensors" tag is intriguing and suggests a novel approach to model compression. Watching how this architecture evolves could reveal where the field is heading next. (10.9K likes)

3. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — The most-downloaded model of the week (3.3M). As video generation becomes increasingly important, H3 represents the current state of the art in open text-to-video. Its Turbo fine-tune also shows how quickly derivatives emerge.

---

*Note: All likes/downloads are approximate as of 2026-08-21. The HF ecosystem moves fast—always check model cards and licenses before production use.*

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*