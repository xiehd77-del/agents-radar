# Hugging Face 热门模型日报 2026-08-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-08 01:45 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-08

## 📰 今日速览

本周 HF Hub 热度呈现 **多模态生成模型强势霸榜** 的格局——MiniMax-H3 系列（含官方版、ComfyUI 单文件版、GGUF 量化版及多个社区 LoRA/微调版）合计十余个模型上榜，是当之无愧的流量之王。**基座大模型竞争白热化**：DeepSeek-V4-Flash、Kimi-K3、GLM-5.2 三大旗舰齐登榜，且均有配套 GGUF 量化版本，说明开源社区对“大模型本地部署”的需求依然旺盛。此外，**多模态理解模型（OCR/视觉-语言）** 表现抢眼，百度 Unlimited-OCR 与微软 Mage-VL 双双进入下载量前列。值得注意的是，多个“Uncensored”微调模型（Qwen3.x 系列）持续霸榜，反映社区对无审查对话模型的强烈需求。整体来看，**“官方基座模型 + 社区量化/微调生态”** 的双层结构愈发成熟。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,748 | 702,709 | DeepSeek 新一代轻量对话模型，下载量断层第一，官方权重备受开发者信赖。 |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,284 | 1,308,186 | 月之暗面多模态旗舰（image-text-to-text），周点赞破万，是目前榜上热度最高的模型。 |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,889 | 2,430,330 | 智谱新一代 MoE 对话模型，下载超 240 万，国产开源大模型主力选手。 |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 380 | 77,973 | Liquid AI 的轻量小模型，主打高效推理，适合边缘端部署。 |
| [maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 228 | 686 | 全新 MoE 架构预览版，值得关注的新玩家。 |
| [Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 336 | 25,340 | Thinking Machines 推出的多模态对话小模型，强调推理能力。 |
| [Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 203 | 3,065 | 阶跃星辰（inclusionAI）轻量对话模型，主打快速响应。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,958 | 18,112 | MiniMax 全新文生视频/图生视频模型，本周最受瞩目的生成模型发布。 |
| [MiniMax-H3 (Comfy-Org)](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 938 | 3,139,920 | ComfyUI 单文件封装版，下载量超 300 万，生态集成度极高。 |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,954 | 2,836,694 | 百度开源无限长度 OCR 模型，下载量近 300 万，服务端推理场景广泛。 |
| [Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 302 | 456,140 | 微软视觉-语言理解模型，多模态推理能力扎实。 |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 307 | 12,633 | 轻量级 TTS 模型（0.6B），为语音合成提供高效方案。 |
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 228 | 359 | 英伟达语音对话模型，集成多篇 arxiv 论文技术。 |
| [Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 221 | 0 | 基于 Krea 的文生图 LoRA，ComfyUI 生态新成员。 |

> 💡 **MiniMax-H3 社区衍生版**（以下均围绕 H3 的量化/适配/微调变体）：
> [H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) · [H3-Turbo（lightx2v）](https://huggingface.co/lightx2v/Minimax-h3-Turbo) · [H3 GGUF（realrebelai）](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) · [H3-nvfp4-INT4-INT8](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) · [H3 Comfy 适配（Kijai）](https://huggingface.co/Kijai/MiniMax-H3_comfy) · [H3 experimental（Kijai）](https://huggingface.co/Kijai/MiniMax-H3-experimental) · [PinkCherry_H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3)

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 532 | 17,399 | 基于 Qwen3.5-MoE 的代码生成模型，面向开发者场景。 |
| [Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 184 | 2,480 | Mistral 安全审核模型（vLLM 兼容），用于护栏/内容过滤。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,709 | 2,217,339 | Qwen3.6 社区“无审查”微调 + GGUF 量化，下载超 220 万，证明去审查需求强劲。 |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 588 | 161,253 | unsloth 官方量化版 DeepSeek-V4-Flash，本地部署首选。 |
| [LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 145 | 31,489 | Liquid AI 官方 GGUF 版本，llama.cpp 直接可跑。 |
| [Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 425 | 332,992 | 35B 级 MoE 无审查微调 + GGUF，社区热门变体。 |
| [Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 380 | 0 | Qwen3-VL 与 MiniMax-H3 的混合微调实验（INT8）。 |
| [Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 121 | 0 | 将 MiniMax-H3 用作 Qwen3-VL 的文本编码器（NVFP4 量化）。 |
| [MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 178 | 0 | H3-Turbo 的 ComfyUI 适配版 LoRA。 |

---

## 🌐 生态信号

**1. 模型家族集中度极高：** MiniMax-H3 已形成 “官方权重 → ComfyUI 封装 → GGUF/INT4/INT8 量化 → LoRA 微调” 的完整社区链条，下载总量超 350 万。多模态生成赛道正在复现 LLM 时代的生态打法。

**2. 开源权重是绝对主流：** 榜单 30 个模型中 29 个开放权重（唯一非开源为 Kroma LoRA），开源生态的深度和广度持续碾压闭源。国产模型（DeepSeek、Kimi、GLM、MiniMax）占据半壁江山，且下载量远超国际同类。

**3. 量化/微调活动异常活跃：** 大量带有 “Uncensored”、“Heretic” 标签的社区微调模型（Qwen3.x 系列）下载量动辄百万级，市场对无审查模型的渴求非常明确。此外，MiniMax-H3 的即时量化适配（发布当周即出现多版本 GGUF/INT8）说明社区响应速度已极快。

**4. 文生视频成为新战场：** MiniMax-H3 的爆红 + DeepSeek/GLM 在文本侧持续发力，**“文本 → 视频”** 正成为各厂商差异化竞争的关键领域。

---

## 🧪 值得探索

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 周点赞破万的现象级模型，多模态理解能力极强，且标注了 compressed-tensors（压缩部署），值得深挖其架构创新。

2. **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 文生视频的当前天花板（或接近天花板），结合 [Comfy-Org 集成版](https://huggingface.co/Comfy-Org/MiniMax-H3) 可快速体验工作流。

3. **[Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 百度出品，无限长短文本 OCR，280 万下载验证了其工程可靠性，适合作为 RAG/文档解析基础设施选型参考。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*