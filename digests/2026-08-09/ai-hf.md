# Hugging Face 热门模型日报 2026-08-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-09 01:51 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-09

## 📰 今日速览

本周 Hugging Face 热度呈现“**视频生成爆发 + 国产大模型领跑**”的双主旋律。MiniMax-H3 凭借强大的 image-text-to-video 能力成为绝对焦点，官方及社区衍生模型（ComfyUI 版、Turbo LoRA、GGUF 量化）霸榜多个席位，下载量高达 394 万。语言模型方面，Moonshot AI 的 Kimi-K3 以 10,343 点赞登顶 LLM 榜首，DeepSeek-V4-Flash 下载量突破 78 万，国产模型生态势能强劲。此外，百度发布 Unlimited-OCR、ZAI 发布 GLM-5.2 等多模态与前沿架构模型。值得注意的是，社区的“Heretic/Uncensored”风格微调模型占据多个席位，而官方与社区的量化（GGUF）、LoRA、ComfyUI 适配工作已形成完整的生态闭环。

---

## 🏆 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [**Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,343 | 1,388,105 | 月之暗面全新一代多模态大模型，支持 compressed-tensors 压缩推理，以 1 万+点赞登顶本周热门榜 |
| [**DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,853 | 785,771 | DeepSeek V4 系列的 Flash 轻量版，对话能力出色，下载量逼近 80 万 |
| [**GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,902 | 2,480,368 | 智谱 GLM 系列最新旗舰，采用 MoE-DSA 架构，下载已超 248 万，国产开源 LLM 主力军 |
| [**LFM2.5-2.6B**](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 418 | 81,522 | Liquid AI 新一代液体基础模型，2.6B 参数主打高效推理 |
| [**maple-preview**](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 255 | 896 | deepgrove 推出的 MoE 架构因果语言模型，预览版本探索新训练范式 |
| [**Ling-3.0-flash**](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 222 | 4,189 | 零一万物 Ling 系列 Flash 版，工业级对话生成，采用 Bailing Hybrid 架构 |
| [**KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 544 | 17,885 | 基于 Qwen3.5-MoE 的代码生成模型，支持图文混合代码理解 |
| [**Inkling-Small**](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 346 | 28,178 | thinkingmachines 推出的多模态对话模型，涵盖视觉与文本理解 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [**MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,111 | 26,693 | MiniMax 第三代视频生成模型，支持图生视频、文生视频，是本周最大的热点源头 |
| [**FLUX.1-dev**](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,037 | 502,330 | 黑森林实验室开源图像生成王者，周点赞 1.4 万为全榜最高，开发者版本持续活跃 |
| [**Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,970 | 2,857,997 | 百度开源通用 OCR 大模型，支持任意场景文字识别，下载超 285 万 |
| [**Mage-VL**](https://huggingface.co/microsoft/Mage-VL) | microsoft | 314 | 457,581 | 微软新一代视觉语言理解模型，主打多模态推理能力 |
| [**NVIDIA-NemotronLabs-VoiceChat-11B**](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 246 | 458 | 英伟达语音对话模型，支持端到端实时语音交互 |
| [**Audio8-TTS-Preview-0.6b**](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 324 | 12,837 | Audio8 语音合成预览版，基于 ArkTTS 架构的高质量中文 TTS |
| [**MiniMax-H3-Turbo-Lora**](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 488 | 0 | 社区为 MiniMax-H3 打造的 Turbo LoRA 加速适配层，支持音视频联合生成 |
| [**Minimax-h3-Turbo**](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 198 | 0 | lightx2v 推出的 MiniMax-H3 Turbo 版本，支持图生视频与视频生视频 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [**Shieldstral-1.0-3B**](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 201 | 4,950 | Mistral 官方安全审核模型，3B 参数轻量级内容安全过滤 |
| [**KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 544 | 17,885 | 基于 Qwen3.5-MoE 的代码生成模型，支持图文混合代码理解 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,006 | 3,943,176 | ComfyUI 官方适配版 MiniMax-H3，下载量突破 394 万，是视频生成工作流的事实标准 |
| [**DeepSeek-V4-Flash-0731-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 608 | 175,093 | Unsloth 出品的 DeepSeek V4 量化版，llama.cpp 直接运行，部署门槛大幅降低 |
| [**Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,761 | 2,345,190 | 社区超长命名微调模型，Uncensored 风格、GGUF 量化，下载超 234 万 |
| [**Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot**](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 403 | 0 | Qwen3-VL 与 MiniMax-H3 的混合实验体，INT8 量化适配 ComfyUI |
| [**MiniMax-H3_GGUFs**](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 176 | 128,265 | MiniMax-H3 社区 GGUF 量化版本，与 Comfy-Org 版配合使用 |
| [**LFM2.5-2.6B-GGUF**](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 157 | 49,562 | LiquidAI 官方 GGUF 量化版本，llama.cpp 本地部署利器 |
| [**Minimax-H3-nvfp4-INT4-INT8-Convrot**](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 143 | 471,519 | 多层混合量化版本（NVFP4 + INT4/INT8），下载量近 50 万 |
| [**MiniMax-H3-Turbo-Lora-ComfyUI**](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 206 | 0 | 专为 ComfyUI 修剪优化的 Turbo LoRA 适配器 |
| [**PinkCherry_MiniMax-H3**](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 175 | 0 | 社区微调风格化视频生成模型，基于 MiniMax-H3 |
| [**Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4**](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 133 | 0 | Qwen3-VL 文本编码器 + MiniMax-H3 的跨模型融合实验 |
| [**Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF**](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 438 | 373,651 | 基于 Qwen3.6 的 MoE 去审查微调模型，GGUF 格式，下载超 37 万 |
| [**MiniMax-H3_comfy**](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 184 | 0 | Kijai 为 ComfyUI 定制的 MiniMax-H3 工作流节点 |
| [**MiniMax-H3-experimental**](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 141 | 0 | Kijai 的 MiniMax-H3 实验性构建，探索新功能 |

---

## 🌐 生态信号

**1. MiniMax-H3 生态闭环成型**：从官方权重到 ComfyUI 适配（下载 394 万）、GGUF 量化、Turbo LoRA、混合精度（NVFP4/INT8），第三方社区已构建完整的工具链，视频生成正复制 Stable Diffusion 时期的生态路径。

**2. 国产模型家族全面崛起**：DeepSeek-V4、Kimi-K3、GLM-5.2、Ling-3.0 集体进入热门榜，且下载量均达百万级。开源权重与闭源模型（GPT、Claude）的差距在继续缩小，中文社区贡献度显著提升。

**3. “Uncensored/Heretic”微调成风**：多个基于 Qwen 系列的去审查微调模型下载量惊人（最高 234 万），反映市场对开放式 AI 的强烈需求，但也引发内容安全层面的讨论。

**4. 量化与部署生态繁荣**：Unsloth 等团队持续输出高质量 GGUF 版本，加上 NVIDIA NVFP4、INT8 等多精度方案的出现，本地化部署门槛不断降低。

---

## 🔭 值得探索

1. **Kimi-K3**（[链接](https://huggingface.co/moonshotai/Kimi-K3)）— 周点赞破万，验证了压缩感知技术在 MoE 模型上的可行性，值得研究其高效推理方案。

2. **MiniMax-H3 + Comfy-Org 组合**（[官方](https://huggingface.co/MiniMaxAI/MiniMax-H3) / [ComfyUI](https://huggingface.co/Comfy-Org/MiniMax-H3)）— 当前视频生成领域最完整的开源工作流，从模型到工具链到量化方案一应俱全。

3. **Unlimited-OCR**（[链接](https://huggingface.co/baidu/Unlimited-OCR)）— 百度在 OCR 领域的重磅开源，285 万下载量说明其通用性极强，适合做文档理解与多模态 RAG 基座。


---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*