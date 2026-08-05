# Hugging Face 热门模型日报 2026-08-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-05 02:39 UTC

---

# 🤗 Hugging Face 热门模型日报 — 2026-08-05

## 📌 今日速览

本周 Hugging Face 趋势榜呈现**多模态全面爆发**的态势：MiniMax-H3 视频生成模型发布即登顶，获得 2,038 点赞；Kimi-K3 以 10,015 点赞成为本周最受关注的视觉语言模型。语言模型方面，DeepSeek-V4-Flash 和 GLM-5.2 双双进入下载量 Top 3，显示中文大模型军团持续领跑开源社区。值得注意的是，**基于 Qwen3.6 的社区微调模型（如 HauhauCS-Aggressive）已形成规模化生态**，单模型下载量逼近 200 万次，印证了"基础模型+社区微调"的开源飞轮效应。此外，未censored 微调模型与量化版本（GGUF）在社区中保持着极高活跃度。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 |
|------|------|------|------|
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,316 | 433K |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,011 | 2.74M |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,821 | 2.23M |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,015 | 1.13M |
| [K-EXAONE-2.0-750B-A37B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) | LGAI-EXAONE | 117 | 325 |
| [Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 664 | 37K |
| [Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 920 | 83K |
| [XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 404 | 1.3K |
| [XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 358 | 1.4K |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 159 | 47K |
| [Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 193 | 3K |

**要点**：GLM-5.2（MoE-DSA 架构）和 DeepSeek-V4-Flash 是本周主力旗舰，下载量均破 200 万。Kimi-K3 凭借 10K+ 点赞成为社区焦点，支持压缩张量（compressed-tensors）特性。LGAI 的 750B MoE 超大规模模型值得关注，目前仍以早期口碑积累为主。

---

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 作者 | 点赞 | 下载 |
|------|------|------|------|
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,038 | 0 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 611 | 2 |
| [MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 104 | 40K |
| [Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 256 | 436K |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 249 | 11K |
| [Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 410 | 2K |
| [Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 176 | 0 |
| [Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 286 | 15.5K |

**要点**：MiniMax-H3 是本周发布的现象级视频生成模型，原生支持图像+文本到视频。微软 Mage-VL 下载量达 436K，为多模态理解模型注入新活力。Audio8 与 Inflect 双 TTS 模型入榜，标志语音生成赛道升温。Kroma 为 Krea 2 的 LoRA，面向 ComfyUI 工作流。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 |
|------|------|------|------|
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,882 | 2.70M |
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 474 | 15K |

**要点**：百度 Unlimited-OCR 以 270 万下载量领跑专用模型赛道，多功能 OCR 潜力巨大。KAT-Coder 定位代码生成 + 多模态能力，基于 Qwen3.5-MoE 架构。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 |
|------|------|------|------|
| [Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,296 | 1.93M |
| [Qwen3.6-27B-Fable-Fusion-711...GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,514 | 1.63M |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 472 | 112K |
| [Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 304 | 170K |
| [Qwen3.5-9B-The-Defiant-Fable...GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 266 | 323K |
| [Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 364 | 309K |
| [Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot) | ethanfel | 189 | 0 |
| [Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 134 | 2.2K |
| [Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 174 | 69K |

**要点**：Qwen3.6 社区微调生态极其活跃，HauhauCS 的 Aggressive 版本已积累 193 万下载，DavidAU 的 Fable-Fusion 系列达 163 万，均主打 uncensored 能力。unsloth 持续为旗舰模型输出标准 GGUF 版本。NVFP4 量化（Solar-Open2）展示了 250B 级模型的高效压缩路径。

---

## 🌐 生态信号

**1. 模型家族马太效应显著**
DeepSeek-V4、Qwen3.6、GLM-5 三大系列统治榜单，其中 **Qwen3.6 衍生微调模型高达 5 个入榜**，社区围绕其形成了快速迭代的微调流水线。DeepSeek-V4-Flash 官方 + GGUF 双版本并发，下载量叠加超 300 万。

**2. 多模态进入"基础模型"时代**
MiniMax-H3、Kimi-K3、Unlimited-OCR 说明生态重心正从纯文本转向视频生成、视觉理解和 OCR 融合方向，且呈现出从"附加功能"向"独立基础模型"转变的趋势。

**3. 开源权重 + 社区微调飞轮**
榜单显示 open-weights 模型（尤其是 MoE 架构）通过 GGUF 量化和 fine-tune 衍生品完成生态裂变，社区衍生版的累计下载量已可反超官方版本（如 Qwen3.6 系列）。闭源模型未见上榜，开源生态的主导地位进一步巩固。

---

## 🔭 值得探索

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 10K 点赞断层领先，压缩张量技术配合强多模态能力，建议研究其 compressed-tensors 方案与推理优化的结合方式。

2. **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 发布即巅峰的视频生成模型，多模态原生设计（image+text→video）+ 社区 ComfyUI 和 GGUF 工具链已同步就绪，具备工具链完整度高的样板效应。

3. **[Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 270 万下载的"无限制 OCR"，兼顾特征提取与多模态理解，是中文场景下 Rag + 文档理解方向的高价值基座。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*