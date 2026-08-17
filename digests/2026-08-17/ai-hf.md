# Hugging Face 热门模型日报 2026-08-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-17 01:20 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-17

## 📋 今日速览

本周 Hugging Face 排行榜由 **多模态大模型** 全面主导：Qwen 团队推出旗舰级 **Qwen3.8-27B**（周增 10,290 赞，断层第一），同时 Moonshot AI 的 **Kimi-K3**（10,768 赞）同样表现抢眼。视频生成赛道竞争白热化，MiniMax 系列的 **MiniMax-H3**（4,030 赞）与其 Turbo 变体、LoRA 衍生模型集体霸榜。DeepSeek 发布 **V4-Pro-0813** 与 **V4-Flash-0731** 双型号，其中 Flash 版本凭借 187 万下载量成为效率型用户的重点关注对象。量化生态持续繁荣，unsloth 的 GGUF 版本（Qwen3.8-27B-GGUF 下载超 194 万）与社区"Uncensored"微调衍生模型显示出强烈的本地部署需求。


## 🔥 热门模型

### 🧠 语言模型（LLM / 对话 / 指令）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [**Qwen/Qwen3.8-2.4T-A95B**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,012 | 7,932 | Qwen 旗舰级 MoE 文本模型，2.4T 总参数 / 95B 激活，本周口碑与关注度持续攀升 |
| [**deepseek-ai/DeepSeek-V4-Pro-0813**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 536 | 21,873 | DeepSeek V4 系列 Pro 版，主打复杂推理与长上下文能力 |
| [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,462 | 1,872,232 | V4 系列高效版本，下载量近 190 万，是性价比推理的热门选择 |
| [**nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 291 | 196,326 | NVIDIA 轻量级 MoE 模型（30B 总参 / 3B 激活），NVFP4 量化版 |
| [**nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 160 | 66,253 | 同上模型的 BF16 全精度版本，适合对精度要求更高的场景 |
| [**LiquidAI/LFM2.5-2.6B**](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 647 | 141,009 | Liquid AI 新代 2.6B 高效小模型，低资源部署潜力大 |

### 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 10,290 | 267,725 | Qwen 新一代 27B 旗舰多模态模型（图文双向理解），周榜断层第一 |
| [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,768 | 2,136,775 | Kimi 系列最新多模态模型，支持压缩张量加速，下载超 213 万 |
| [**meta-models/Muse-Glimmer-30B**](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,631 | 292,973 | 多模态对话模型，Meta 团队出品，支持图文理解与生成 |
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,030 | 2,307,541 | MiniMax 新一代视频生成模型，支持文生视频、图生视频，下载超 230 万 |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,028 | 424,099 | 新一代视频生成模型，覆盖文生/图生/视频生视频全场景 |
| [**MiniMaxAI/MiniMax-Music3**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 844 | 8,639 | 专业级文本到音乐生成模型，音乐创作领域标杆 |
| [**lightx2v/Minimax-h3-Turbo**](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 558 | 239,206 | MiniMax-H3 Turbo 加速版，主打低延迟视频生成 |
| [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,387 | 13,406,892 | ComfyUI 官方适配版 MiniMax-H3，下载量超 1,340 万，生态核心枢纽 |
| [**fal/MiniMax-H3-Realism-People-LoRA**](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 229 | 16,103 | 专为 MiniMax-H3 打造的写实人物风格 LoRA |
| [**larryvrh/MiniMax-H3-Turbo-Lora**](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 776 | 0 | 社区高质量 MiniMax-H3 Turbo LoRA，音视频联合生成 |
| [**unsloth/MiniMax-H3-GGUF**](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 175 | 204,344 | MiniMax-H3 的 GGUF 量化版，支持 stable-diffusion.cpp 本地推理 |
| [**Gazingstars123/Anima-2.9B**](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 223 | 20,860 | 文生图模型，ComfyUI 单文件格式，动漫风格生成 |

### 🔧 专用模型（功能 / 领域）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [**inclusionAI/Ling-3.0-tiny**](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 285 | 5,727 | 百灵混合架构（bailing_hybrid）小模型，MIT 开源协议 |
| [**dots-studio/dots3-note-prev**](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 186 | 393 | 面向笔记场景优化的轻量文本生成模型 |

### 📦 微调与量化（社区 / 高效部署）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,459 | 1,945,635 | Qwen3.8-27B 官方推荐 GGUF 量化版，本地部署首选 |
| [**Qwen/Qwen3.8-27B-FP8**](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 485 | 352,971 | 官方 FP8 量化版，精度/性能平衡极佳 |
| [**unsloth/Muse-Glimmer-30B-GGUF**](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 459 | 718,178 | Muse-Glimmer 的 GGUF 量化版，下载超 71 万 |
| [**meta-models/Muse-Glimmer-30B-GGUF**](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 298 | 357,877 | 官方出品的 Muse-Glimmer GGUF 量化版 |
| [**orcarouter/Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 345 | 4,285 | Qwen3.8-27B 的 abliterated（去审查）FP8 微调版 |
| [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 214 | 183,988 | Qwen3.8-27B Uncensored GGUF 版，支持 llama.cpp 与 MTP |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,096 | 3,020,070 | 社区现象级长尾命名 GGUF 微调版，下载超 302 万 |
| [**unsloth/Qwen3.8-27B-NVFP4**](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 202 | 276,269 | NVIDIA NVFP4 量化格式的 Qwen3.8-27B，RTX 显卡友好 |
| [**Qwen/Qwen3.8-2.4T-A95B-FP8**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 210 | 11,311 | Qwen 2.4T MoE 的官方 FP8 量化版 |
| [**Comfy-Org/MiniMax-Music-3**](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 152 | 0 | ComfyUI 适配的 MiniMax-Music3，Apache 2.0 协议 |


## 🔍 生态信号

**核心趋势：多模态全面爆发。** Qwen（Qwen3.8-27B）、MiniMax（H3 系列视频模型）、Moonshot（Kimi-K3）三大阵营同时在图文理解、视频生成和音乐合成领域发力，且均为 open-weight 发布，显著推动开源社区繁荣。**视频生成成为新焦点**：MiniMax-H3 系列（包含 Turbo、LoRA、ComfyUI 适配版）占据榜单近 1/3 席位，且 Comfy-Org 版本下载量突破 1,340 万，表明创作工具链整合是爆发关键催化。**量化生态持续壮大**：unsloth 继续扮演"压缩枢纽"角色，GGUF / FP8 / NVFP4 多格式覆盖，配合社区 Uncensored 微调版本（DavidAU 超 302 万下载）印证本地部署与个性化定制需求旺盛。DeepSeek V4 双型号（Pro + Flash）的差异化布局则显示头部厂商正同时押注"旗舰能力"与"效率优先"两条路线。


## 🧪 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周最强多模态模型，图文理解 + 对话能力全面领先，且已有完整的 GGUF/FP8 量化工具链与 Unsloth 微调支持，值得深入研究其架构设计。

2. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 引入 compressed-tensors（压缩张量）技术，在保持高精度的同时显著降低推理开销，下载超 213 万，值得关注其与传统量化路线的性能差异。

3. **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** — 视频生成生态的中枢节点（下载超 1,340 万），其 ComfyUI 整合模式为其他生成模型提供了工具链范本，值得体验其从文生视频到图生视频的完整工作流。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*