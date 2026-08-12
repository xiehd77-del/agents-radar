# Hugging Face 热门模型日报 2026-08-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-12 02:04 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-12

## 📌 今日速览

本周 Hugging Face 生态呈现**多模态视频生成爆发**的态势：MiniMax-H3 系列以绝对统治力占据榜单近三分之一席位，横跨官方原版、ComfyUI 适配、LoRA 微调与 GGUF 量化全链路，下载量合计突破 690 万。语言模型方面，**Kimi-K3 以 10,528 周点赞登顶全榜**，成为首个突破万赞的模型；DeepSeek-V4-Flash 则以超 104 万下载量证明其在推理场景的强劲需求。值得关注的是，**多模态理解模型（image-text-to-text）占比显著提升**，Muse-Glimmer-30B、Qwen3.6-27B-Fable-Fusion 等社区微调变体大量涌现。此外，**NVIDIA、Mistral、百度等大厂密集发布生产级模型**，显示开源权重生态正加速走向企业级应用。

---

## 🏆 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | **10,528** | 1,565,484 | 月之暗面旗舰多模态模型，采用压缩张量技术，以绝对优势登顶本周趋势榜 |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,153 | **1,048,685** | DeepSeek V4 轻量版，百万级下载印证其在推理部署场景的高人气 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 550 | 93,668 | Liquid AI 推出的液态神经网络模型，2.6B 小参数主打高效推理 |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 332 | 2,049 | 基于 MoE 架构的因果语言模型，预览版引发架构爱好者关注 |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 303 | 6,148 | 面壁智能 Ling 3.0 闪电版，百灵混合架构兼顾性能与效率 |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 228 | 6,769 | Mistral 推出的 3B 安全审查模型，面向 vLLM 推理栈优化 |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 201 | 111,942 | LFM2.5 官方 GGUF 量化版，llama.cpp 生态本地部署首选 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 132 | 19,250 | NVIDIA 30B-A3B MoE 模型，NVFP4 精度带来极致显存效率 |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 154 | 0 | Ling 3.0 微型版，MIT 协议开源，适合边缘端部署 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | **3,579** | 59,368 | MiniMax 官方视频生成模型，支持图生视频与文生视频双模式 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,212 | **6,798,796** | ComfyUI 官方适配版，近 680 万下载成为视频生成工作流事实标准 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | **4,019** | 2,892,191 | 百度通用 OCR 模型，不限场景的文字识别引发广泛关注 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,101 | 0 | Meta 下一代多模态理解模型 30B，对话能力与视觉理解深度融合 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,899 | 2,521,093 | Qwen3.6 社区极端微调版，解锁审查限制吸引大量关注 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 228 | 39 | Lightricks 视频生成模型 2.5 版，支持视频到视频等多模态转换 |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 326 | 653 | NVIDIA 语音对话模型 11B，融合多篇论文技术沉淀 |
| [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 166 | 708 | 基于 Qwen3.5-MoE 的多模态对话模型，社区团队打造 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | **4,019** | 2,892,191 | 百度通用 OCR 模型，不限场景的文字识别引发广泛关注 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 651 | 0 | MiniMax-H3 Turbo 加速版 LoRA，社区优化推理效率 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 649 | 207,990 | DeepSeek V4 官方 GGUF 量化版，unsloth 优化加速本地部署 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 459 | 0 | Qwen3-VL 32B 社区微调版，INT8 量化适配 ComfyUI |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 341 | 20,376 | MiniMax-H3 加速推理版，支持文生视频、图生视频多模式 |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 307 | 0 | Muse-Glimmer 30B GGUF 量化版，unsloth 出品 |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 276 | 0 | Kijai 的 ComfyUI 节点适配版，视频生成社区热门工具 |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 275 | 0 | Turbo LoRA 的 ComfyUI 整合版，降低使用门槛 |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 265 | 0 | MiniMax-H3 风格化微调版，Apache 2.0 协议 |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 203 | 0 | Muse-Glimmer 30B 官方 GGUF 版 |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 192 | 0 | MiniMax-H3 实验性版本，探索新功能 |
| [lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 130 | 353 | MiniMax-H3 提示词重写 LoRA，优化视频生成指令 |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 115 | 0 | 写实人物风格 LoRA，fal 出品用于视频生成 |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 110 | 781 | MiniMax-H3 GGUF 量化版，支持 stable-diffusion.cpp 推理 |

---

## 🌐 生态信号

**1. MiniMax-H3 生态闭环成型**：从官方权重到 ComfyUI 适配、LoRA 微调、GGUF 量化，MiniMax-H3 构建了完整的视频生成生态链，多达 10 个衍生模型上榜，成为当之无愧的"生态之王"。

**2. 多模态理解成主战场**：Kimi-K3、Muse-Glimmer-30B、BigBang-v1 等 image-text-to-text 模型占比达三分之一，视觉语言理解与生成正同步爆发。

**3. 大厂开源节奏加快**：NVIDIA（2款）、Mistral、百度、Meta 密集发布生产级模型，开源权重模型在性能和工具链上已具备与闭源竞争的实力。

**4. GGUF 量化成为标配**：unsloth 几乎同步为每个大模型产出 GGUF 版本，本地部署与边缘推理需求持续旺盛，社区微调模型（尤其"uncensored"系列）从侧面折射出用户对开放性的强烈诉求。

---

## 🔬 值得探索

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 周点赞破万的现象级模型，压缩张量技术为多模态模型部署效率提供新思路，值得深入研究其架构设计。

2. **[MiniMax-H3 全家族](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 建议对比官方版、ComfyUI 适配版与各 LoRA 微调版的生成效果差异，理解视频生成模型的生态化发展路径。

3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 下载量近 300 万，通用 OCR 能力有望重塑文档理解工作流，与多模态大模型的结合值得关注。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*