# Hugging Face 热门模型日报 2026-08-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-19 01:19 UTC

---

# 🤖 Hugging Face 热门模型日报（2026-08-19）

---

## 📌 今日速览

今日 Hugging Face 趋势榜呈现出“多模态引领、大模型密集迭代”的格局。**Qwen 家族**以 Qwen3.8-27B 为核心，衍生出 FP8、GGUF、NVFP4 量化及多个 Uncensored 社区微调版本，形成覆盖 27B 到 2.4T 参数的完整生态矩阵。**MiniMax-H3** 视频生成模型热度持续飙升（4,144 赞 / 285 万下载），成为视觉生成赛道最亮眼的玩家。**DeepSeek-V4** 系列双模型进榜，Flash 版本以 3527 赞 / 212 万下载展现出强劲部署需求。值得关注的是 **moonshotai/Kimi-K3**（10,826 赞）凭借压缩权重特色成为本周黑马，而 **meta-models/Muse-Glimmer-30B** 则代表 Meta 系开源多模态模型的持续发力。整体来看，多模态理解与生成已主导前沿模型研发方向，量化/微调生态的繁荣使 27B 级模型成为本地部署的“黄金尺寸”。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|---------|---------|------------|
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,066 | 11,212 | Qwen3.8 系列最大 MoE 模型（2.4T 参数激活 95B），代表当前开源 LLM 的性能天花板。 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 602 | 30,985 | DeepSeek-V4 系列 Pro 版本，主打高性能推理与对话能力。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,527 | 2,123,462 | V4 Flash 版本以高效推理著称，下载量超 212 万，反映极强的部署需求。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,826 | 2,226,898 | 月之暗面最新多模态模型，采用压缩张量技术，本周点赞数排名第二。 |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 320 | 9,990 | 百川智能 Ling 3.0 小尺寸版本，采用混合架构，适合快速部署。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 322 | 269,372 | NVIDIA 最新 30B MoE（激活 3B）模型，NVFP4 量化专为 Hopper 架构优化。 |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 226 | 13,344 | Qwen3.8 旗舰 MoE 的 FP8 量化版，为大规模推理降低成本。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|---------|---------|------------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,138 | 665,513 | Qwen3.8 系列旗舰多模态模型，支持图像+文本输入，本周点赞数断层第一。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,144 | 2,855,539 | MiniMax 新一代视频生成模型，支持文本/图像到视频，下载量超 285 万。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 962 | 11,745 | 面向音乐生成的最新一代扩散模型，支持文本到音乐创作。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,224 | 503,632 | 视频生成模型，支持图像/文本到视频、视频到视频多模态转换。 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,682 | 384,097 | Meta 系 30B 多模态模型，覆盖图像+文本理解和对话生成。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 530 | 45,465 | Qwen3.8-27B 的 Uncensored 版本，经 abliteration 技术去除安全限制。 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 274 | 0 | 面向 Apple Silicon 的 MLX 格式 Uncensored 版本（新发布，下载待积累）。 |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 249 | 24,893 | 动漫风格图像生成模型，支持 ComfyUI 直接加载。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 609 | 300,279 | MiniMax-H3 社区加速版，支持 t2v/i2v/r2v 多种视频生成模式。 |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 266 | 0 | MiniMax-H3 的社区微调版本（新发布，下载量为 0）。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 411 | 558,767 | Uncensored 版本的 GGUF 量化，支持 llama.cpp 本地部署。 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 203 | 27,745 | 社区激进风格调校的 GGUF 版本，支持多模态视觉输入。 |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 173 | 12,854 | Qwen3.8-27B 的社区量化版，针对 llama.cpp 优化。 |

### 📦 微调与量化（社区微调、GGUF、量化）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|---------|---------|------------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,823 | 3,561,466 | unsloth 出品的高质量 GGUF 量化，下载量高达 356 万，社区部署首选。 |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 262 | 523,919 | NVFP4 精度的量化版本，针对 NVIDIA 新架构优化。 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 564 | 741,011 | 官方 FP8 量化版，降低推理成本的同时保持高精度。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,426 | 14,641,908 | ComfyUI 版 MiniMax-H3，下载量突破 1464 万，视频生成部署首选。 |
| [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 178 | 285,444 | ComfyUI 版 MiniMax-Music3，音乐生成工作流集成。 |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 482 | 787,276 | Muse-Glimmer-30B 的 GGUF 量化版本，兼顾性能与部署便捷性。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,142 | 3,020,528 | 社区深度定制 GGUF，融合多种微调风格，下载超 302 万。 |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,257 | 0 | 修复 Qwen 对话模板的工具性仓库，MLX 格式，开发者工具属性强。 |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 220 | 1,120 | 社区微调的多模态模型，基于 dots3 架构。 |

---

## 🔍 生态信号

**Qwen 生态全面爆发：** 本周趋势榜 30 个模型中，Qwen 系列占据 12 席（含衍生版本），从 2.4T 旗舰 MoE 到 27B 黄金尺寸全面覆盖，官方+社区量化/微调形成完整矩阵，已构成事实上的开源 LLM 生态标准。

**多模态成为主战场：** 不只是视频生成（MiniMax-H3 下载量超 285 万），多模态理解模型（Qwen3.8-27B、Muse-Glimmer-30B、Kimi-K3）在点赞量上全面超越纯文本模型，OpenAI 引领的“原生多模态”路线已成行业共识。

**开源权重持续领先，量化生态成熟：** GGUF/FP8/NVFP4 多格式量化齐头并进，Uncensored 微调形成明确细分市场（7 个相关版本上榜），社区围绕头部模型快速构建差异化生态。

**值得关注新变量：** moonshotai/Kimi-K3 以多模态+压缩张量技术突围，MiniMax 在视频和音乐双线出击，DeepSeek-V4 Flash/Pro 双版本覆盖不同推理场景——2026 年下半年竞争格局将更加多元。

---

## 🧪 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周点赞王（11,138），原生多模态理解能力加上 27B 适中参数规模，既保证生成质量又利于社区部署，是研究多模态推理和视觉对话的最佳基座模型。

2. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 以压缩张量技术实现高效多模态，10,826 的点赞量暗示其技术路线可能改变 2026 年多模态模型效率竞争的格局，值得深入研究。

3. **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** — 14,641,908 次下载是本周生态落地能力的完美指标，强烈建议在 ComfyUI 中验证其文本到视频的实际生成效果与推理性能。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*