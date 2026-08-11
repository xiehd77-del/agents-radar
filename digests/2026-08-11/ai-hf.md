# Hugging Face 热门模型日报 2026-08-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-11 01:51 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-11

## 📌 今日速览

今日 Hugging Face 榜单呈现出**多模态视频模型爆发**的鲜明特征：MiniMax-H3 发布后迅速霸榜，衍生出 ComfyUI 量化版、Turbo-LoRA、Prompt-Rewriter 等多个生态配套模型，形成完整的"发布—适配—微调"链条。与此同时，**Kimi-K3 以 10,472 点赞登顶周榜**，DeepSeek-V4-Flash 与 baidu 的 Unlimited-OCR 在下载量上表现抢眼。值得关注的是，**多模态大模型（图像-文本-文本）已成为新热门赛道**，meta-models 和 endless-frontier 均推出该类型模型。此外，**GGUF 量化生态持续繁荣**，几乎每个热门基座模型都伴随社区量化版本发行。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [**DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,060 | 954k | DeepSeek V4 Flash 版本，以高性价比对话能力著称，下载量位居语言模型之首 |
| [**Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,472 | 1.5M | **今日点赞冠军**，Kimi 系列最新多模态对话模型，采用压缩张量技术提升推理效率 |
| [**LFM2.5-2.6B**](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 490 | 89.7k | LiquidAI 高效小参数模型，主打低资源部署场景 |
| [**maple-preview**](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 312 | 1.3k | MoE 架构文本生成模型，预览版快速获得社区关注 |
| [**Ling-3.0-flash**](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 288 | 5.3k | inclusionAI 混合架构快速对话模型，采用 custom_code 部署 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,433 | 47.5k | **本周视觉生成核心事件**，支持文本/图像生成视频的全能视频模型 |
| [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,147 | **6.0M** | ComfyUI 官方适配版，下载量惊人，是 MiniMax-H3 在 ComfyUI 生态的入口 |
| [**Muse-Glimmer-30B**](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 743 | 0 | Meta 生态全新 30B 多模态模型，图像+文本理解，发布即获关注 |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,002 | 2.9M | 百度通用 OCR 模型，以特征提取任务大幅领先，下载量极高，广泛应用于文档识别 |
| [**FLUX.1-dev**](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,077 | 481k | **常青树**，Black Forest Labs 旗舰文生图模型，虽然非新发，但点赞持续登顶 |
| [**NVIDIA-NemotronLabs-VoiceChat-11B**](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 298 | 597 | NVIDIA 语音对话模型，融合多篇语音/对话最新研究 |
| [**BigBang-v1**](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 153 | 617 | 基于 Qwen3.5-MoE 的多模态对话模型，社区新锐 |
| [**lightx2v/Minimax-h3-Turbo**](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 261 | 15.1k | MiniMax-H3 Turbo 加速版，支持图生视频与文生视频 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

**今日无独立分列的代码/数学/医疗垂直专用模型上榜，但以下模型具备针对性功能：**

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [**Shieldstral-1.0-3B**](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 222 | 6.3k | Mistral 安全审查专用模型，用于内容过滤与安全对齐 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [**DeepSeek-V4-Flash-0731-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 637 | 199k | unsloth 出品的 DeepSeek V4 量化版，高效本地部署首选 |
| [**MiniMax-H3_GGUFs**](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 193 | 175k | MiniMax-H3 社区 GGUF 量化，极大降低视频生成模型部署门槛 |
| [**Qwen3.6-27B-Fable-Fusion-711-Uncensored-...**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,862 | 2.4M | 社区热门"无审查"微调模型，基于 Qwen3.6 多模态，融合多种 LoRA 叠加技术 |
| [**unsloth/Muse-Glimmer-30B-GGUF**](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 214 | 0 | Muse-Glimmer 官方量化版，便于本地多模态部署 |
| [**LFM2.5-2.6B-GGUF**](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 185 | 89.6k | LiquidAI 官方 GGUF 版本，适合 llama.cpp 生态 |
| [**MiniMax-H3-Turbo-Lora**](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 601 | 0 | MiniMax-H3 Turbo 视频风格 LoRA |
| [**PinkCherry_MiniMax-H3**](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 250 | 0 | 社区文生视频微调版本 |
| [**Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot**](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 162 | 530k | 多精度混合量化版，下载量超 53 万，证明社区对视频模型量化需求旺盛 |
| [**Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot**](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 440 | 0 | Qwen3-VL 与 MiniMax-H3 混合微调，ComfyUI 适配 |
| [**Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4**](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 152 | 0 | 将 Qwen3-VL 作为 MiniMax-H3 的文本编码器，NVFP4 精度 |
| [**MiniMax-H3-Prompt-Rewriter-LoRA**](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 116 | 268 | 提示词重写专用 LoRA，优化视频生成指令质量 |

---

## 📊 生态信号

**① MiniMax-H3 生态爆发力惊人。** 从官方发布到 ComfyUI 适配、Turbo 加速、多个 LoRA/量化/精度变体（NVFP4、INT4/INT8）几乎同步上线，形成了视频生成领域罕见的"全家桶"生态，5 小时前仍有新衍生模型上榜。MiniMax-H3 相关模型占今日榜单近 1/3，是当前生态中最活跃的模型家族。

**② 模型形态全面转向多模态（图像+文本→文本/视频），** 纯文本 LLM 在 Top 榜单中占比下降，Kimi-K3、Muse-Glimmer、BigBang-v1 均支持图文联合理解；"多模态视频生成 + 文本图像理解"成为主流配置。

**③ 开源权重持续繁荣，闭源趋势未见回潮。** 今日热门模型全部开源权重；Meta、Mistral、NVIDIA 均积极参与开源发布。

**④ 量化/微调活动极度活跃。** GGUF（llama.cpp 生态）与 NVFP4（NVIDIA 生态）双路线并行，社区出现大量"Heretic"类无审查微调模型，说明用户对模型可控性和多样化风格有持续需求。百度 Unlimited-OCR 与 FLUX.1-dev 作为"老将"依然维持高热度，表明基础设施级模型具有长期生命力。

---

## 🔬 值得探索

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 周点赞冠军（10,472），采用压缩张量技术，是多模态模型在推理效率方向的重要探索，值得研究其架构细节。

2. **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) 及 [Comfy-Org 适配版](https://huggingface.co/Comfy-Org/MiniMax-H3)** — 文本/图像→视频的全能生成模型，ComfyUI 版下载量突破 600 万，建议从 ComfyUI 工作流入手快速上手，关注其文生视频能力上限。

3. **[Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)** — Meta 全新多模态 30B 模型（同时发布 GGUF 版本），0 下载但高点赞，预示其潜力被社区看好，值得第一时间进行评测。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*