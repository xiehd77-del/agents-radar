# Hugging Face Trending Models Digest 2026-07-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-09 03:29 UTC

---

# Hugging Face Trending Models Digest — 2026-07-09

## Today's Highlights

This week's trending models show a clear surge in **MoE (Mixture-of-Experts) architectures**, with several high-profile releases from DeepSeek, Qwen, and NVIDIA pushing efficiency boundaries. The **Qwen 3.6 ecosystem** dominates with numerous fine-tunes, quantized variants, and vision-language adaptations, while **GLM-5.2** from Zhipu AI leads raw likes at 3,671. Image-text-to-text models are increasingly prominent, and **GGUF quantization** continues as the dominant format for local deployment, especially for 9B–35B parameter models. Baidu's **Unlimited-OCR** stands out as a practical, high-download multimodal tool, while NVIDIA's **LocateAnything-3B** signals growing interest in spatial understanding models.

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — Author: zai-org | Likes: 3,671 | Downloads: 281,584  
  Top-liked model this week; a conversational MoE model from Zhipu AI's GLM family, trending for strong Chinese-English bilingual performance.

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — Author: tencent | Likes: 566 | Downloads: 121  
  Tencent's Hunyuan v3 text-generation model, attracting attention as a major Chinese tech player's latest open-weight release.

- **[AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces)** — Author: AliesTaha | Likes: 187 | Downloads: 3,886  
  Qwen3-based instruction-tuned model, trending for its "fable" training methodology that emphasizes traceable reasoning chains.

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** — Author: deepseek-ai | Likes: 439 | Downloads: 15,538  
  DeepSeek's latest flagship V4 variant with "DSpark" activation sparsity, drawing huge community interest for MoE efficiency breakthroughs.

- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** — Author: meituan-longcat | Likes: 153 | Downloads: 385  
  Meituan's second-generation conversational LLM, gaining traction for long-context handling in Chinese e-commerce scenarios.

- **[poolside/Laguna-XS-2.1](https://huggingface.co/poolside/Laguna-XS-2.1)** — Author: poolside | Likes: 80 | Downloads: 3,385  
  A compact code-oriented LLM from poolside, notable for small-footprint software engineering capabilities.

- **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** — Author: mistralai | Likes: 168 | Downloads: 157  
  Mistral's massive 119B-parameter MoE model with only 6B active parameters, pushing sparse activation further than ever.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — Author: empero-ai | Likes: 1,862 | Downloads: 1,683,711  
  A GGUF-quantized vision-language model blending Qwen 3.5 with Claude-style synthetic data, extremely popular for local multimodal use.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — Author: baidu | Likes: 1,875 | Downloads: 1,084,945  
  Baidu's universal OCR model handling diverse text extraction scenarios; high downloads reflect strong real-world utility.

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — Author: InternScience | Likes: 400 | Downloads: 14,723  
  A Qwen 3.5 MoE-based agent model with vision capabilities, trending for agentic task performance in multimodal settings.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — Author: HauhauCS | Likes: 2,576 | Downloads: 2,823,988  
  An uncensored, aggressive-style Qwen 3.6 MoE vision model; second-highest downloads this week at 2.8M.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — Author: bottlecapai | Likes: 144 | Downloads: 46  
  A Qwen 3.6-based vision-language model with enhanced reasoning chains ("thinking cap" approach).

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — Author: nvidia | Likes: 2,667 | Downloads: 1,424,958  
  NVIDIA's spatial localization model; third-highest likes this week, signaling strong interest in visual grounding.

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** — Author: krea | Likes: 555 | Downloads: 123,729  
  A turbo-optimized text-to-image model based on Krea-2-Raw, offering faster inference for creative workflows.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — Author: google | Likes: 314 | Downloads: 9,458  
  Google's TabFM foundation model for tabular data classification and regression, trending for zero-shot tabular capabilities.

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — Author: yuxinlu1 | Likes: 2,655 | Downloads: 674,977  
  A coding-focused Gemma 4 GGUF variant with composer-based fine-tuning; highly popular for terminal-based code assistance.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — Author: yuxinlu1 | Likes: 1,102 | Downloads: 384,383  
  An agentic variant of Gemma 4, optimized for autonomous task execution in terminal environments.

- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)** — Author: nvidia | Likes: 70 | Downloads: 0  
  NVIDIA's 30B MoE audio-language model with only 3B active parameters, expanding the Nemotron Labs series into audio understanding.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** — Author: nvidia | Likes: 326 | Downloads: 538,687  
  NVIDIA's NVFP4-quantized Qwen 3.6 using Model Optimizer; a cutting-edge 4-bit quantization with high accuracy retention.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — Author: unsloth | Likes: 1,015 | Downloads: 2,842,118  
  Unsloth's GGUF variant of Qwen 3.6 with Multi-Token Prediction; highest downloads this week at 2.8M+.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — Author: deepreinforce-ai | Likes: 803 | Downloads: 502,663  
  GGUF-quantized version of the Ornith 35B model; popular for its MIT license and endpoint compatibility.

- **[deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)** — Author: deepreinforce-ai | Likes: 462 | Downloads: 454,944  
  The 9B sibling of Ornith in GGUF format, offering a lighter but capable alternative.

- **[InternScience/Agents-A1-Q4_K_M-GGUF](https://huggingface.co/InternScience/Agents-A1-Q4_K_M-GGUF)** — Author: InternScience | Likes: 85 | Downloads: 11,226  
  Q4_K_M GGUF quantization of the Agents-A1 vision-language MoE model for efficient deployment.

- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** — Author: unsloth | Likes: 97 | Downloads: 47  
  Early GGUF release for DeepSeek V4 Flash, pointing to community interest in sparse MoE local inference.

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — Author: froggeric | Likes: 783 | Downloads: 0  
  A utility model fixing Qwen 3.5 chat templates for MLX and jinja; viral for solving a common pain point despite no model weights.

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** — Author: conradlocke | Likes: 101 | Downloads: 0  
  A LoRA for identity-preserving image editing with Krea-2, enabling character-consistent edits.

- **[eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B)** — Author: eric-venti-seeds | Likes: 108 | Downloads: 0  
  A lighting direction LoRA for Flux2Klein, useful for controlled image-to-image lighting adjustments.

- **[Patil/Krea-2-depth-controlnet](https://github.com/Patil/Krea-2-depth-controlnet)** — Author: Patil | Likes: 73 | Downloads: 0  
  A depth-aware ControlNet for Krea-2, enabling structure-guided generation in flow-matching pipelines.

## Ecosystem Signal

The most significant trend this week is the **rise of Mixture-of-Experts models** reaching the mainstream open-weight ecosystem. DeepSeek V4 Pro, GLM-5.2, Qwen 3.5/3.6 MoE variants, and Mistral's Leanstral all represent a shift toward sparse activation architectures that deliver high capability at lower inference costs. **Qwen's model family** (3.5 and 3.6) has become the most actively fine-tuned and quantized base, with at least 8 of the 30 trending models derived from it. **GGUF quantization** remains the dominant deployment format, with unsloth and deepreinforce-ai emerging as key quantization providers. On the proprietary vs. open-weight front, Chinese companies (Tencent, Baidu, Zhipu, Meituan) continue open-weight releases, while NVIDIA focuses on optimized quantizations and spatial models. Community fine-tunes increasingly target **agentic and coding use cases**, suggesting the ecosystem is moving beyond chat toward autonomous task execution.

## Worth Exploring

1. **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** — The most technically ambitious MoE model this week with activation sparsity. Worth studying for its efficiency innovations and impact on local deployment of large-scale models.

2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — A compact 3B model with strong visual grounding capabilities. Represents the convergence of vision-language understanding and spatial reasoning in a deployable size.

3. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — The highest-download model this week. Its Multi-Token Prediction training methodology could influence future quantization + inference optimization strategies.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*