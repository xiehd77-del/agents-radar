# Hugging Face 热门模型日报 2026-08-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-15 01:18 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-15

## 📌 今日速览

本周 Hugging Face 榜单被 **视频生成模型 MiniMax-H3 系** 强势霸榜，其生态衍生（ComfyUI 工作流、LoRA、GGUF）占据近三分之一席位，下载量突破千万级，成为现象级发布。**Qwen3.8 系列** 继续扩张，27B 与 2.4T-A95B MoE 双双登榜，官方 FP8 量化版本同步跟进。**Meta 的 Muse-Glimmer-30B** 作为视觉-语言模型表现亮眼，长尾微调版本下载超 289 万。DeepSeek-V4-Flash 以 160 万下载紧随其后，而 moonshotai 的 **Kimi-K3** 以 10,673 周赞登顶人气榜首。整体趋势显示：视频生成是当前最大热点，多模态融合持续深化，高效量化（FP8/GGUF）已成标配。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 917 | 3,832 | 2.4T 参数 MoE 旗舰（激活 95B），Qwen3.5 架构，文本生成能力登顶级别 |
| [Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 184 | 9,334 | 官方 FP8 量化版，推理显存降低 50% 以上 |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,383 | 1,606,491 | DeepSeek V4 轻量快速版，兼顾速度与质量，社区热度极高 |
| [DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 433 | 245 | V4 专业增强版，侧重复杂推理与长上下文 |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 257 | 119,572 | 30B 总参数、激活仅 3B 的 MoE，NVFP4 超低精度量化 |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 143 | 34,137 | 同款 MoE 的 BF16 全精度版，质量优先场景选用 |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | **10,673** | 1,974,635 | 本周人气榜第一！多模态理解 + 压缩张量技术，支持特征提取 |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 615 | 124,172 | LiquidAI 液态神经网络架构，小体量高效率，适合边缘部署 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,920 | 1,997,541 | 官方视频生成旗舰，支持文本/图像生成视频，本周最强热点 |
| [MiniMax-H3（Comfy-Org）](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,318 | **11,768,622** | ComfyUI 单文件版，下载量破千万，生态普及的推手 |
| [Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 493 | 149,865 | H3 加速版，支持图/文/视频转视频，速度更快 |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 858 | 207,830 | Lightricks 视频生成新作，多模态视频到视频转换 |
| [MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 652 | 63 | 音乐生成新模型，文本直接生成完整曲目 |
| [MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 156 | 136,774 | H3 的 GGUF 量化版，支持 stable-diffusion.cpp 端侧推理 |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | **9,014** | 2 | 多模态对话旗舰（图/文输入），人气榜第二，刚发布下载尚未放量 |
| [Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 300 | 0 | 27B 多模态的 FP8 高效量化版 |
| [Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,513 | 165,300 | Meta 视觉-语言多模态模型，对话能力强，下载量持续走高 |
| [Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 162 | 10,106 | 动漫风格文生图，单文件 diffusers 格式 |

### 🔧 专用模型（代码、数学、医疗、嵌入等）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 381 | 1,366 | 语音对话专用模型，支持实时语音交互 |
| [Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 235 | 2,283 | 混合架构小模型，MIT 协议可商用，技术探索价值高 |

### 📦 微调与量化（社区微调、GGUF、LoRA）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 807 | 0 | unsloth 量化版，端侧部署 Qwen3.8 多模态 |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 414 | 596,774 | Meta 多模态模型的 GGUF 量化，本地部署首选 |
| [Muse-Glimmer-30B-GGUF（官方）](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 270 | 228,364 | 官方出的 GGUF 版，供不同工具链选择 |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored（社区微调）](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,016 | 2,891,524 | 社区高热度无审查微调 + GGUF，280 万下载说明长尾需求强大 |
| [MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 742 | 0 | H3 Turbo 的 LoRA 适配层，定制风格化视频生成 |
| [MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 318 | 112,975 | ComfyUI 直接可用的 LoRA，降低 H3 定制门槛 |
| [MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 177 | 9,060 | 写实人物风格 LoRA，fal 出品 |
| [PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 310 | 473 | H3 风格化微调，Apache-2.0 协议 |

---

## 📊 生态信号

**MiniMax-H3 现象级生态爆发**。单一模型衍生出 ComfyUI 封装、3 个 LoRA、GGUF 量化、Turbo 加速版等超 10 个变体，下载总量超 1400 万，足见视频生成赛道的社区热情。值得注意，**H3 的生态模式已成为新范式**——官方发布基座 → 社区快速跟进量化/工作流/LoRA 定制，形成完整工具链闭环。

**多模态全面开花**。Qwen3.8-27B 同时支持图文对话，Kimi-K3 融合压缩张量技术，Meta Muse-Glimmer 走视觉语言理解路线。AI 正从纯文本加速迈向"全模态"时代，视频 + 音频（MiniMax-Music3）的组合能力也开始浮现。

**量化技术快速迭代**。FP8（Qwen）、NVFP4（NVIDIA）、GGUF（unsloth）多路线并行，MoE 结构（Qwen3.8-2.4T、Nemotron-30B-A3B）配合超低精度量化成为降低推理成本的主流方案。

**开源权重持续领先**。本周榜单全部为开源/开放权重模型，未见闭源 API 模型身影。社区微调活跃度极高（Longtail uncensored 版本 280 万下载），个性化定制需求旺盛。

---

## 🔬 值得探索

1. **Kimi-K3**（[链接](https://huggingface.co/moonshotai/Kimi-K3)）— 周点赞 10,673 登顶，压缩张量技术 + 多模态理解，代表月之暗面的新技术方向，值得深入研究其架构创新。

2. **MiniMax-H3 生态链**（[基座](https://huggingface.co/MiniMaxAI/MiniMax-H3) + [ComfyUI 版](https://huggingface.co/Comfy-Org/MiniMax-H3)）— 视频生成的现象级模型，搭配 ComfyUI 工作流和 LoRA 定制，是当前最完整的开源视频生成解决方案。

3. **Qwen3.8-2.4T-A95B**（[链接](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)）— 2.4T 参数级别 MoE 代表当前开源 LLM 的极限规模，配合 FP8 量化可探索高效部署超大模型的新路径。

---

> 📮 日报由 AI 模型生态分析师自动生成，数据基于 2026-08-15 Hugging Face 周榜 | 下一次更新：2026-08-22

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*