# Hugging Face 热门模型日报 2026-08-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-07 02:44 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-07

## 📌 今日速览

本周 Hugging Face 生态迎来重量级更新：**Kimi-K3** 以单周 10,205 点赞登顶多模态榜首，成为社区最受关注的开源权重视觉语言模型；**zai-org/GLM-5.2** 和 **MiniMax-H3** 分别在语言生成与视频生成赛道强势领跑。DeepSeek 发布 **V4-Flash-0731** 及 GGUF 量化版，下载量突破 61 万次，延续了 "小参数、高性能" 的路线。值得关注的是，**"Heretic" 系列社区微调模型**（如 Qwen3.6-27B-Fable-Fusion、Qwen3.6-35B-A3B 等）密集涌现，配合 ComfyUI 生态的融合，显示出"基础模型 + 社区微调 + 本地部署"链条的持续深化。此外，LiquidAI 的 LFM2.5 系列与 NVIDIA 语音对话模型也在细分赛道获得显著关注。

---

## 🏆 热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话亮点 |
|------|------|------|------|-----------|
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,654 | 617.9K | DeepSeek V4 系列最新快照，主打高效对话推理 |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,045 | 2.64M | V4 系列主力版本，累计下载超 264 万次 |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,875 | 2.39M | MoE 架构 + DSA 注意力，GLM 系列最新旗舰 |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 336 | 73.6K | 液态神经网络 LLM，2.6B 小参数展现高效推理 |
| [maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 211 | 419 | MoE 架构新预览，值得关注的新入场者 |
| [Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 190 | 1.2K | 国产新秀，旗舰对话模型 flash 版本 |
| [Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 208 | 0 | Krea 2 生态 LoRA，文生图社区新宠 |

### 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 点赞 | 下载 | 一句话亮点 |
|------|------|------|------|-----------|
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,765 | 12.1K | MiniMax 下一代视频生成模型，支持图生视频与文生视频 |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,205 | 1.26M | 本周点赞王，Kimi 系列多模态大模型 |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,934 | 2.79M | 百度 OCR 全能模型，下载量领跑 |
| [Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 289 | 440.2K | 微软视觉语言模型，多模态推理新旗舰 |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 297 | 12.2K | 0.6B 参数 TTS 预览版，低资源语音合成 |
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 184 | 206 | 英伟达语音对话模型，语音交互新方案 |
| [Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 326 | 22.2K | 多模态小型模型，专注高效推理 |
| [FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,014 | 523.2K | 经典文生图基准，本周点赞第二 |

### 🔧 专用模型（代码 / OCR / 安全）

| 模型 | 作者 | 点赞 | 下载 | 一句话亮点 |
|------|------|------|------|-----------|
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 522 | 17.0K | Qwen3.5-MoE 架构代码模型，开发者预览版 |
| [Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 164 | 1.5K | Mistral 安全审核模型，3B 轻量防护 |

### 📦 微调与量化（GGUF / LoRA / 社区微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话亮点 |
|------|------|------|------|-----------|
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 854 | 2.30M | ComfyUI 单文件版 MiniMax-H3，视频生成新入口 |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 552 | 145.1K | Unsloth 量化版 V4-Flash，本地部署首选 |
| [Qwen3.6-27B-Fable-Fusion-711](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,654 | 2.09M | "Heretic" 系列典范，27B 无审查微调 + GGUF 双形态 |
| [Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 411 | 309.1K | Hermes 系列持续迭代，开源社区高活跃度 |
| [MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 157 | 65.7K | 社区量化 MiniMax-H3，降低视频生成门槛 |
| [MiniMax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 112 | 273.0K | NVIDIA FP4 量化版，兼顾体积与效果 |
| [LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 128 | 12.8K | 液态模型 GGUF 版，llama.cpp 即插即用 |
| [Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 341 | 0 | 多模态 × 视频模型跨界微调，社区实验前沿 |
| [Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 111 | 0 | 视觉编码器 × 视频生成融合实验 |

---

## 🌐 生态信号

- **Kimi 与 GLM 双雄争霸**：Moonshot 的 Kimi-K3（10,205 赞）与智谱 GLM-5.2（4,875 赞）成为本周开源权重语言模型两大焦点，多模态能力成为竞争核心。
- **"Heretic" 微调潮**：围绕 Qwen3.6 系列的 uncensored 社区微调在 7 月全面爆发，GGUF + ComfyUI 双通道分发，展现开源社区对"去审查 + 本地化"的强烈需求。
- **视频生成三线并行**：MiniMax-H3 原版、ComfyUI 单文件版、GGUF 量化版同时上榜，叠加多家二次创作（Turbo-LoRA、nvfp4 量化），构成完整的视频模型生态链。
- **量化竞赛白热化**：Unsloth 主推 DeepSeek-V4 系列 GGUF，FP4/INT8 混精度量化方案（如 ConvRot）开始在高下载量模型中普及，显示"本地运行大模型"已是刚需。
- **国内厂商密集输出**：除了 DeepSeek、智谱、MiniMax、月之暗面，百度（OCR）、字节（Ling）、快手（KAT-Coder）同步上榜，开源中国力量全面开花。

---

## 🔭 值得探索

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 本周点赞现象级（10,205），Moonshot 新一代多模态模型在视觉理解与压缩推理上表现出色，采用 compressed-tensors 技术，是开源多模态新标杆。

2. **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 视频生成的"GPT 时刻"候选者，配合 [Comfy-Org 单文件版](https://huggingface.co/Comfy-Org/MiniMax-H3) 和 [GGUF 量化版](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) 形成完整工具链，值得立即上手体验。

3. **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — 智谱最新 MoE 旗舰（下载量 239 万），DSA 注意力架构在长上下文与稀疏激活上的创新值得深入研究，是国产开源模型技术实力的代表。

---

> 日报由 AI 模型生态分析师自动生成 | 数据截至 2026-08-07 | 人工复核通过

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*