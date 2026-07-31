# Hugging Face 热门模型日报 2026-07-31

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-31 02:56 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-07-31

---

## 📌 今日速览

今日 Hugging Face 榜单呈现三大看点：**Kimi-K3** 以 9,029 周点赞强势登顶，成为多模态与压缩模型领域的现象级发布；**GLM-5.2** 凭借 MoE-DSA 架构积累 4,683 点赞，延续国产开源对话模型的强劲势头；**Qwen3.6-35B-A3B** 生态持续爆发，官方与社区微调版本合计斩获超 800 万下载，成为当日最活跃的开源模型家族。值得关注的是，**百度的 Unlimited-OCR** 以 259 万下载量领跑专用模型赛道，而 **ternary（三值量化）** 技术正从实验走向实用，`prism-ml/Ternary-Bonsai-27B` 下载量已达 69.7 万，标志着 2-bit 级量化迈入主流视野。

---

## 🏆 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|---------|---------|------------|
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,683 | 152.7万 | 智谱新一代 MoE-DSA 对话模型，凭借高效推理与强劲对话能力持续霸榜 |
| [Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,595 | 611.9万 | 通义千问 MoE 旗舰，350亿参数仅激活30亿，多模态+聊天双料冠军 |
| [Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 704 | 1.2万 | Upstage 开源 250B 超大参数模型，韩国开源 LLM 的里程碑之作 |
| [Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 582 | 2.4万 | 3B 小参数高效 LLM，面向资源受限场景的轻量级选择 |
| [Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 847 | 7.3万 | Poolside 代码生成模型，软件工程领域专用 LLM |
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 351 | 9,225 | 基于 Qwen3.5-MoE 架构的代码生成模型，面向开发者场景 |
| [antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 240 | 9,820 | 基于 Granite-MoE-Hybrid 架构的 1B 安全模型 |
| [Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think) | amd | 94 | 1,315 | AMD 基于 DeepSeek-V3 架构的推理增强 MoE 模型 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|---------|---------|------------|
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,029 | 38.7万 | 月之暗面新一代多模态模型，采用压缩张量技术，登顶今日热榜 |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,585 | 259.8万 | 百度通用 OCR 模型，不限场景的文本识别神器 |
| [Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,654 | 4.5万 | Thinking Machines 多模态对话模型，推理能力出色的视觉问答助手 |
| [Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 122 | 2,951 | 微软视觉语言模型，多模态理解与生成一体 |
| [Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 126 | 840 | Inkling 的小参数版本，兼顾性能与效率 |
| [Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 322 | 1,100 | 面向 CPU/边缘设备的轻量 TTS 模型 |
| [Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2) | owensong | 119 | 654 | Inflect 系列 Nano 版，极致轻量的本地语音合成 |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 127 | 225 | 基于 ArkTTS 的 0.6B 语音合成模型 |
| [Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 223 | 2,316 | 微软基于 Qwen3.5 的计算机视觉操作模型，GUI 代理专用 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|---------|---------|------------|
| [OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 352 | 5.7万 | 基于 Qwen3.5 的 OCR 专用模型，文字识别精度新高度 |
| [VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 120 | 3,864 | 微软 BitNet 架构语音识别，GGUF/GGML 格式支持边缘部署 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|---------|---------|------------|
| [Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,191 | 180.3万 | Qwen3.6 社区微调版，去审查+激进风格设定 |
| [Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,116 | 69.7万 | 三值量化（2-bit）27B 模型，llama.cpp 原生支持 |
| [Qwen3.6-27B-Fable-Fusion-711...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,042 | 95.5万 | DavidAU 出品的 GGUF 微调，MTP 加速+极致风格融合 |
| [Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 259 | 15.9万 | Unsloth 官方 GGUF 量化版 Laguna |
| [Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 209 | 1.2万 | Unsloth 为 Kimi-K3 推出的 GGUF 量化版 |
| [Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 241 | 16.2万 | Hermes-V6 风格化微调，GGUF 格式即下即用 |
| [Qwen3.5-9B-The-Defiant-Fable...](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 159 | 24.8万 | DavidAU 又一力作，NEO-IMATRIX 量化+风格强化 |
| [Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 148 | 7,755 | Nota-AI 的 NVFP4 量化版 Solar，vLLM 直接部署 |
| [Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 176 | 766 | Unsloth 的 Kimi-K3 优化版（safetensors） |
| [Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 95 | 201 | 社区 W2 微调版 Qwen3.6，深度定制对话风格 |
| [Mage-Flow](https://huggingface.co/Comfy-Org/Mage-Flow) | Comfy-Org | 97 | 4.4万 | 基于 Microsoft Mage-Flow 的 ComfyUI 单文件扩散模型 |

---

## 🌐 生态信号

**Qwen3.6 系列成为当日绝对霸主**：官方 + 社区变体合计下载超 800 万，从 GGUF 量化到风格微调，覆盖了完整生态链条，验证了"基础设施型开源模型 + 社区二创"这一成熟增长模式。**Kimi-K3 的爆红则代表了压缩模型的新方向**——`compressed-tensors` 标签 + 多模态能力 + 官方 GGUF 配套，说明高效架构正成为下一代旗舰的标配。同时，**2-bit 三值量化（Ternary）的突破**值得关注：`Ternary-Bonsai-27B` 以相当于原模型 1/2 的显存占用获得近似效果，若此路线成熟，将大幅降低开源大模型的部署门槛。**中美双强格局日益清晰**：中国团队（月之暗面、智谱、百度、阿里）在基础模型上攻势凌厉，而微软、AMD、Upstage 则通过差异化路线（Agent 专用、边缘推理、超大规模）巩固生态位。

---

## 🔬 值得探索

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 今日热度断层第一，`compressed-tensors` + 多模态的组合预示着下一代高效多模态模型的演进方向。做模型架构研究值得深入拆解其压缩机制。

2. **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — 三值量化正在改写"小显存跑大模型"的规则。27B 模型以 2-bit 精度运行，下载量逼近 70 万足以证明其市场认可度。量化技术研究者重点关注。

3. **[Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 百度出品，259 万下载量在所有模型中位居前列。"不限场景"的 OCR 能力若名副其实，将为文档处理、具身智能等领域提供免费高质的基础能力，应用价值极高。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*