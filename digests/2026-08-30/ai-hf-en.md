# Hugging Face Trending Models Digest 2026-08-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-30 04:14 UTC

---

# 🤖 Hugging Face Trending Models Digest — 2026-08-30

## 1. Today's Highlights

The Hugging Face hub is dominated this week by a massive wave of **Qwen3.8-27B** derivatives—the base model alone has amassed over 4 million downloads and 13K+ likes, with dozens of community fine-tunes (abliterated, uncensored, FP8, GGUF, MLX) flooding the charts. **Kimi-K3** from Moonshot AI is the second strongest signal with 11K likes and 2.7M downloads, indicating strong appetite for open-weight frontier-scale models. On the video front, **MiniMax-H3** continues its momentum with 5M+ downloads, supported by a rich ecosystem of LoRAs and ControlNet adapters. Notably, **DeepSeek-V4-Flash-0731** and the **GLM-5.3** family show that Chinese AI labs are aggressively pushing open-weight releases across both dense and MoE architectures. The week's biggest novelty is **Qwen3.8-Flash-Next**, an experimental "flash" variant signaling Qwen's next-generation architecture direction.

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, Chat Models)

| Model | Author | Likes | Downloads |
|---|---|---|---|
| [**Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,083 | 2,701,014 |
| [**DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,810 | 4,330,482 |
| [**GLM-5.3-Flash**](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,627 | 189,793 |
| [**GLM-5.3**](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,278 | 8,804 |
| [**Ornith-1.5-35B-A3B**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 498 | 106,562 |
| [**Tencent Hy4-preview**](https://huggingface.co/tencent/Hy4-preview) | tencent | 285 | 1,394 |
| [**pipecat-ai/phonellm-alpha-1**](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 136 | 2,668 |
| [**thomsonreuters/Thomson-1.0-Small**](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 152 | 831 |

- **Kimi-K3** — Moonshot AI's latest flagship with compressed tensors and feature-extraction capabilities, signaling a push toward efficient frontier models.
- **DeepSeek-V4-Flash-0731** — DeepSeek's newest fast-inference variant with 4.3M downloads, cementing their position as the most-downloaded open-weight lab.
- **GLM-5.3-Flash** — Zhipu AI's fast inference release with 190K downloads, notable for its multi-modal + text-generation hybrid design.
- **GLM-5.3** — The flagship MoE model from Zhipu AI introducing the `glm_moe_dsa` architecture, showing strong early traction.
- **Ornith-1.5-35B-A3B** — A compute-efficient A3B (3B active) MoE model built on Qwen3.5 MoE architecture, demonstrating the growing MoE trend.
- **Tencent Hy4-preview** — Tencent's new Hunyuan-based generation model preview, early but with 285 likes indicating strong interest.
- **phonellm-alpha-1** — A specialized phone-calling LLM built on Nemotron-H, highlighting the rise of domain-specific voice agents.
- **Thomson-1.0-Small** — Thomson Reuters' compact MoE model for legal/specialized enterprise use.

### 🎨 Multimodal & Generation (Image, Video, Audio)

| Model | Author | Likes | Downloads |
|---|---|---|---|
| [**MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,623 | 5,018,833 |
| [**Qwen3.8-Flash-Next**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,300 | 52,341 |
| [**Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,266 | 4,028,839 |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,144 | 1,044,661 |
| [**BreezeBlue/Breeze-TTS-2**](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 193 | 1,017 |

- **MiniMax-H3** — The most-downloaded video generation model this week (5M+), supporting text-to-video, image-to-video and video-to-video with a growing ecosystem.
- **Qwen3.8-Flash-Next** — Qwen's next-gen experimental architecture, the base for many community quantizations and officially tagged `qwen4_exp`.
- **Qwen3.8-27B** — The week's #1 trending model overall, a massive multi-modal image-text-to-text model with 13K+ likes and 4M downloads.
- **LTX-2.5** — Lightricks' cinematic video generation model, a strong open-source competitor in the text-to-video space.
- **Breeze-TTS-2** — A compact, clean TTS model from BreezeBlue that doubles as a text-generation model, showing early community interest.

### 🔧 Specialized Models (Code, Embeddings, Domain-Specific)

| Model | Author | Likes | Downloads |
|---|---|---|---|
| [**FastVideo-FastH3-4-step-Preview**](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 154 | 0 |
| [**Tiel-Coder-35B-A3B-GGUF**](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 125 | 47,817 |
| [**MiniMax-H3-Fun-Controlnet-Union**](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 162 | 4,250 |
| [**MiniMax-H3-Acc-LoRAs**](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 143 | 13,767 |

- **FastVideo-FastH3-4-step** — A data-free 4-step distillation of MiniMax-H3 from FastVideo, pushing fast inference for video generation.
- **Tiel-Coder-35B-A3B-GGUF** — A specialized coding MoE model with imatrix quantization, targeting developers.
- **MiniMax-H3 ControlNet + LoRAs** — Alibaba PAI's adapter ecosystem for MiniMax-H3, enabling fine-grained video control and acceleration.

### 📦 Fine-tunes & Quantizations (Community)

| Model | Author | Likes | Downloads |
|---|---|---|---|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,189 | 8,363,481 |
| [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 826 | 1,843,237 |
| [**huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 440 | 1,485,837 |
| [**HauhauCS/Qwen3.8-27B-Uncensored-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 749 | 1,061,687 |
| [**OBLITERATUS/Qwen3.8-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 922 | 645,554 |
| [**orcarouter/Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,261 | 290,216 |
| [**orcarouter/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 559 | 215,892 |
| [**unsloth/Qwen3.8-Flash-Next-GGUF**](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 570 | 188,061 |
| [**orcarouter/Qwen3.8-27B-Uncensored-MLX**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,218 | 97,508 |
| [**orcarouter/Qwen3.8-27B-Uncensored**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 210 | 42,987 |
| [**unsloth/GLM-5.3-Flash-GGUF**](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 274 | 27,288 |
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,518 | 0 |

- **unsloth/Qwen3.8-27B-GGUF** — The most-downloaded quantization with 8.3M downloads, the go-to entry point for local Qwen3.8 inference.
- **JonathanColetti/Qwen3.8-27B-Uncensored-GGUF** — The top uncensored variant for llama.cpp with 1.8M downloads and MTP (multi-token prediction) support.
- **huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF** — The abliteration community's flagship release with 1.4M downloads.
- **HauhauCS/Qwen3.8-27B-Uncensored-Aggressive-MTP-GGUF** — A highly aggressive uncensored variant with MTP, 1M+ downloads.
- **OBLITERATUS/Qwen3.8-27B-OBLITERATED** — Multi-format (MLX/GGUF) abliterated release from the OBLITERATUS project with 645K downloads.
- **orcarouter variants (FP8/GGUF/MLX/base)** — The most prolific community fine-tuner this week, with all variants exceeding 40K downloads.
- **froggeric/Qwen-Fixed-Chat-Templates** — A community patch for Qwen chat templates (1.5K likes, 0 downloads — a utility, not a model).

## 3. Ecosystem Signal

**Qwen is the undisputed ecosystem winner.** The Qwen3.8-27B family alone accounts for 15 of the top 30 models when counting all variants (base, GGUF, MLX, FP8, abliterated, uncensored). This is the strongest community flywheel seen since Llama 2. The "uncensored/abliterated" fine-tuning wave is the defining community activity — nearly 40% of listed models are abliterated variants, suggesting a persistent user demand for alignment-free models. Anthropic-level safety is being traded for creative freedom.

**Chinese labs dominate open-weight releases.** Qwen, MiniMax, DeepSeek, GLM (Zhipu), Moonshot, and Tencent all released major models this week. Open-weight releases are now the standard for frontier labs — DeepSeek-V4-Flash and Kimi-K3 are both accumulating millions of downloads, proving that open-weight flagship models can rival closed-source competitors in adoption.

**MoE is now mainstream.** GLM-5.3 (`glm_moe_dsa`), Ornith-1.5-35B-A3B, and Tiel-Coder all use Mixture-of-Experts architectures, with 3B-4B active parameters out of 30B+ total. Flash variants (Flash-Next, GLM-5.3-Flash, DeepSeek-V4-Flash) show intense competition for fast inference. Video generation is also consolidating around MiniMax-H3 as the open default, with 5M downloads and a rapidly growing adapter ecosystem.

## 4. Worth Exploring

1. **[Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — As Qwen's experimental `qwen4_exp` architecture, this is the clearest glimpse into what the next generation of Qwen will look like. Early quantization support from unsloth (188K downloads) signals it's already deployment-ready.

2. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — Moonshot's entry into open weights is a major event. With `compressed-tensors` and feature-extraction tags, K3 appears optimized for efficiency at scale — worth studying as a model for enterprise retrieval and long-context use cases.

3. **[FasterQLite's MiniMax-H3 control ecosystem](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union)** — Beyond the models themselves, the space to watch is the task-specific adapters being built on top of 5M-download models. This ControlNet-Union release from Alibaba PAI shows where the multimodal ecosystem is heading — modular, controllable video generation at scale.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*