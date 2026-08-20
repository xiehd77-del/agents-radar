# Hugging Face 热门模型日报 2026-08-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-20 01:18 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-20

## 📌 今日速览

本周 Hugging Face 生态呈现**"多模态全面爆发、量化微调百花齐放"**的态势。**Qwen 家族**依然是最强生态霸主，全新发布的 **Qwen3.8-27B** 凭借 11.4K 周点赞断层第一，并已衍生出超过 8 个量化/去审查变体，生态护城河深不可测。**MiniMax 双雄出击**——音乐生成模型 MiniMax-Music3 与视频生成模型 MiniMax-H3 双双入榜，且后者下载量已突破 305 万次，正在重塑创作者工具链。**DeepSeek-V4 系列双版本**齐上榜单，V4-Pro 与 V4-Flash 分别对标旗舰与轻量市场。**Kimi-K3** 以 10.8K 点赞成为另一大亮点，采用压缩张量技术挑战传统 Transformer 架构。值得关注的是，**"Uncensored/去审查"微调模型已形成完整产业链**，仅 Qwen3.8-27B 就有至少 6 个独立团队发布了去审查版本，下载量普遍惊人。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,485 | 1,006,235 | 全能多模态对话旗舰，支持图像+文本输入，当前热度最高的开源模型 |
| [**deepseek-ai/DeepSeek-V4-Pro-0813**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 633 | 37,583 | DeepSeek V4 旗舰版，深度推理与代码能力主打 |
| [**Qwen/Qwen3.8-2.4T-A95B**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,100 | 12,699 | 2.4T 总参数 MoE 架构，仅激活 95B，性能对标更大稠密模型 |
| [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,548 | 2,330,940 | V4 轻量高性价比版，下载量已超 233 万 |
| [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,854 | 2,289,863 | Kimi 新一代多模态模型，创新采用压缩张量技术，效率大幅提升 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,182 | 3,055,205 | 文本/图像到视频生成，本周下载量突破 300 万，创作者新宠 |
| [**MiniMaxAI/MiniMax-Music3**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,037 | 13,138 | 第三代音乐生成模型，文本直接生成完整乐曲 |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,323 | 555,993 | 全能视频生成模型，支持图生视频/文生视频/视频生视频 |
| [**lightx2v/Minimax-h3-Turbo**](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 625 | 340,984 | H3 加速版本，面向实时视频生成场景 |
| [**Gazingstars123/Anima-2.9B**](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 270 | 26,566 | 动漫风格文生图模型，ComfyUI 单文件格式 |
| [**meta-models/Muse-Glimmer-30B**](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,702 | 430,313 | 多模态对话模型，定位"艺术创作"增强场景 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

*本日榜单暂无独立专用模型上榜，相关能力已整合至旗舰多模态模型中。*

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,083 | 4,318,134 | 官方合作量化版，下载量超 430 万，本地部署首选 |
| [**Qwen/Qwen3.8-27B-FP8**](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 600 | 1,063,646 | FP8 精度优化版，显存需求大幅降低但保精度 |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,165 | 3,033,363 | 超长命名的去审查融合版本，社区热度极高 |
| [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 467 | 766,812 | 去审查版量化，支持 MTP 加速解码 |
| [**orcarouter/Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 614 | 60,078 | 采用 abliterated 技术去除安全限制的 FP8 版 |
| [**unsloth/Qwen3.8-27B-NVFP4**](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 286 | 653,042 | 新一代 4-bit 量化，配合 NVIDIA 硬件优化 |
| [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,444 | 15,213,225 | ComfyUI 集成版视频模型，下载量突破 1,500 万 |
| [**Comfy-Org/MiniMax-Music-3**](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 193 | 325,083 | ComfyUI 音乐生成工作流 |
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,289 | 0 | 修复 Qwen 家族聊天模板的 Jinja 补丁包，技术爱好者关注 |
| [**huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 171 | 94,234 | 知名去审查团队 Huihui 出品 |

---

## 📊 生态信号

**Qwen 生态统治力空前强化**。Qwen3.8-27B 一周之内衍生出 GGUF（4 个）、FP8（1 个）、NVFP4（1 个）、MLX（1 个）等至少 7 个量化变体，外加 6+ 个去审查微调版本，形成了从官方到社区的全链路分发网络。其中 **abliterated（去审查）方向已形成规模化协作生态**——或路由器、DavidAU、Huihui、Blackfrost 等团队各自基于同源模型开发差异化版本，下载量从数万到数百万不等。**MiniMax 则在多模态赛道建立口碑**，H3 视频模型下载量已突破 1,500 万次（含 ComfyUI 版），音乐模型也收获良好反馈。**开源权重模型强势主导 HF 榜单**，30 个上榜模型中无一闭源，DeepSeek 和 Qwen 的开放策略持续挤压闭源模型的社区声量。

---

## 🔭 值得探索

1. **[MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** — 音乐生成是当下少见的蓝海赛道。该模型直接以文本生成完整乐曲，配合 [Comfy-Org 的工作流](https://huggingface.co/Comfy-Org/MiniMax-Music-3)，大幅降低了 AI 音乐创作门槛，值得音频方向的开发者深入研究。

2. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 标签为"feature-extraction + compressed-tensors"，暗示其内部可能采用了完全不同于传统 Transformer 的推理架构。在 MoE 与稀疏注意力之外，压缩张量路线是否代表下一代效率方案？这个模型值得技术型研究者拆解实验。

3. **[Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)** — 2.4 万亿参数的 MoE 巨兽仅激活 95B 参数。这类"总参数→激活参数"比值极高的模型在消费级推理设备上的实际可用性、量化后性能表现如何，值得部署工程师重点关注和实测。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*