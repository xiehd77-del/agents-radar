# Hugging Face Trending Models Digest 2026-08-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-28 10:08 UTC

---

# 🤗 Hugging Face Trending Models Digest
**Date: 2026-08-28**

---

## 1. Today's Highlights

Qwen continues to dominate the Hugging Face ecosystem, with **Qwen3.8-27B** leading both likes (13,075) and massive download counts (3.4M+), while the newer **Qwen3.8-Flash-Next** signals an experimental leap (tagged *qwen4_exp*) toward faster, more efficient multimodal architectures. The "uncensored/abliterated" ecosystem around Qwen remains extraordinarily active, with at least seven distinct community fine-tunes and quantizations appearing in the top 30—highlighting strong demand for less-restricted variants. Video generation is surging with **MiniMax-H3** (4,848,404 downloads) and **LTX-2.5** from Lightricks both gaining rapid traction, while **Kimi-K3** from Moonshot AI represents a major open-weight commitment from a leading lab. Notably, **DeepSeek-V4-Flash-0731** and **GLM-5.3-Flash** continue to push the "Flash"-class efficiency narrative, suggesting a market-wide pivot toward smaller, faster models without sacrificing capability.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 13,075 likes | 3,457,687 downloads
  The flagship open-weight multimodal LLM from Alibaba's Qwen team, setting the standard for high-performance open models in this cycle.

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — deepseek-ai | 3,776 likes | 3,959,575 downloads
  DeepSeek's Flash-class efficiency-focused model release, attracting strong adoption for its balance of speed and quality.

- **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** — zai-org | 1,405 likes | 34 downloads
  Zhipu AI's newest GLM iteration (tagged *glm5_next*), early in its release cycle but already generating substantial community interest.

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — moonshotai | 11,047 likes | 2,675,145 downloads
  Moonshot AI's flagship open-weight model with compressed-tensors support, signaling a major open-weight commitment from a leading Chinese lab.

- **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** — ornith-ai | 470 likes | 88,102 downloads
  An efficient MoE (35B total, 3B active) multimodal model built on the *qwen3_5_moe* architecture.

- **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)** — tencent | 160 likes | 0 downloads
  Tencent's Hunyuan v4 preview model, early-stage release with zero downloads indicating a fresh drop.

- **[thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small)** — thomsonreuters | 135 likes | 349 downloads
  Thomson Reuters' entry into open-weight MoE multimodal models, built on the *qwen3_5_moe* base.

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen | 4,039 likes | 4,810 downloads
  Qwen's experimental (qwen4_exp) Flash-class model, representing the next generation of efficient multimodal architectures.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI | 4,549 likes | 4,848,404 downloads
  The hottest video generation model this cycle, supporting text-to-video and image-to-video with massive download momentum.

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 1,952 likes | 912,729 downloads
  A versatile video model supporting single-file diffusion for image-to-video, text-to-video, and video-to-video workflows.

- **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** — MiniMaxAI | 1,277 likes | 19,726 downloads
  MiniMax's music generation model, extending their creative generation suite into audio/music territory.

- **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** — BreezeBlue | 137 likes | 240 downloads
  A new text-to-speech model generating early community interest.

- **[Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b)** — Audio8 | 183 likes | 4,477 downloads
  A compact (0.1B) TTS preview based on the arktss architecture, showing promise for lightweight speech synthesis.

- **[sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT)** — sensenova | 185 likes | 4,232 downloads
  A native any-to-any multimodal model (8B) from SenseTime supporting feature extraction across modalities.

- **[alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union)** — alibaba-pai | 149 likes | 3,344 downloads
  ControlNet integration for MiniMax-H3 enabling more controlled video generation workflows.

- **[alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs)** — alibaba-pai | 123 likes | 609 downloads
  Accuracy-focused LoRA adapters for MiniMax-H3, with base model fine-tune support.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — froggeric | 1,506 likes | 0 downloads
  Not a model but a critical utility—fixed Jinja chat templates for Qwen 3.5 models, highly valued by the community for interoperability.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 3,097 likes | 7,758,790 downloads
  The most-downloaded GGUF quantization of Qwen3.8-27B, a testament to unsloth's quality and the model's demand.

- **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** — unsloth | 477 likes | 4,354 downloads
  Early GGUF release for Qwen's Flash-Next experimental model.

- **[unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF)** — unsloth | 227 likes | 0 downloads
  Fresh GGUF quant of GLM-5.3-Flash, just released with no downloads yet.

- **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** — OBLITERATUS | 866 likes | 509,270 downloads
  An abliterated (uncensored) Qwen3.8-27B with MLX, GGUF, and safetensors support for broad deployment.

- **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** — orcarouter | 1,215 likes | 273,577 downloads
  FP8-precision uncensored variant, balancing quality with efficiency.

- **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** — orcarouter | 1,174 likes | 83,352 downloads
  Apple MLX-optimized uncensored Qwen3.8-27B for Mac deployment.

- **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** — orcarouter | 503 likes | 188,460 downloads
  GGUF-quantized uncensored variant from the orcarouter series.

- **[orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored)** — orcarouter | 199 likes | 18,598 downloads
  The base uncensored model from orcarouter's series.

- **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** — JonathanColetti | 788 likes | 1,666,948 downloads
  A top community GGUF uncensored variant with MTP (multi-token prediction) support.

- **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** — HauhauCS | 700 likes | 938,219 downloads
  Aggressive uncensored Qwen3.8 GGUF with MTP, popular among local deployment users.

- **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** — huihui-ai | 409 likes | 1,355,482 downloads
  Huihui's well-known abliteration series applied to Qwen3.8-27B with GGUF quantization.

- **[ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF)** — ornith-ai | 328 likes | 1,469,059 downloads
  Official GGUF for Ornith's MoE model, MIT-licensed and endpoints-compatible.

---

## 3. Ecosystem Signal

The current landscape reveals a **decisive consolidation around the Qwen family**, which anchors nearly half of the top-30 list across official releases, unsloth quantizations, and an extensive "uncensored/abliterated" community ecosystem. The abliteration movement has evolved from a niche practice to a mainstream distribution channel, with multiple independent maintainers (orcarouter, JonathanColetti, HauhauCS, huihui-ai, OBLITERATUS) all offering Qwen3.8-27B variants—suggesting strong, sustained demand for less-restrictive models among local deployment users.

**"Flash"-class efficiency models** are becoming a distinct market segment, with Qwen, DeepSeek, and GLM all shipping Flash variants prioritizing inference speed. The **MoE architecture** continues gaining enterprise traction, with Ornith and Thomson Reuters both adopting *qwen3_5_moe* bases. **Moonshot AI's Kimi-K3** stands out as a major open-weight commitment from a leading frontier lab, while **MiniMax** is aggressively expanding across video (H3) and music (Music3) generation, signaling a multi-modal creative tool strategy.

**Open-weight momentum** is unequivocally accelerating—proprietary labs are competitively releasing flagship models as open weights, and the ecosystem responds with rapid infrastructure support (GGUF, MLX, FP8 quantizations). The **video generation space** shows the most explosive growth potential, with nearly 5M downloads for MiniMax-H3 within its release window.

---

## 4. Worth Exploring

1. **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Tagged *qwen4_exp*, this is a rare early peek into Qwen's experimental next-gen architecture. Monitoring this model's evolution reveals the direction of Qwen 4 development and what efficiency innovations will likely ship in future production models.

2. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — With 11K likes and compressed-tensors support, Kimi-K3 represents a major frontier lab's open-weight strategy. The compressed-tensor approach is an emerging efficiency technique worth studying for production deployment patterns.

3. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — With 4.8M downloads and a rapidly growing ecosystem of adapters (ControlNet, LoRAs), this is the clearest signal that video generation has become a mainstream use case. Its ecosystem growth pattern provides a valuable model for anticipating how future video-generation models will be adopted.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*