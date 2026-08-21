# Hugging Face 热门模型日报 2026-08-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-21 01:22 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-21

---

## 📌 今日速览

今日 Hugging Face 生态被 **Qwen3.8-27B** 及其衍生模型强势霸榜，原版模型以 11.7K 周点赞夺冠，同时催生了大量 GGUF 量化与 abliterated"去审查"微调变体。**MiniMax** 双线出击，视频生成模型 **MiniMax-H3**（4.2K 赞）与音乐生成模型 **MiniMax-Music3** 表现亮眼。**Kimi-K3** 以 10.9K 点赞紧随其后，成为多模态领域最大黑马。**DeepSeek-V4** 系列的双版本策略（Pro/Flash）也引发广泛关注，显示头部厂商正加速开源布局。

---

## 🏆 热门模型

### 🧠 语言模型（LLM、对话模型）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|---------|---------|------------|
| [**DeepSeek-V4-Pro-0813**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 681 | 43K | DeepSeek 第四代旗舰版本，专注复杂推理与长上下文对话能力 |
| [**DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,576 | 2.5M | V4 系列的轻量快速版，在效率与质量之间取得平衡，下载量极高 |
| [**Qwen3.8-2.4T-A95B**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,121 | 14.6K | Qwen3.8 系列的超大规模 MoE 版本，总参数 2.4T 但激活仅 95B |
| [**Ornith-1.5-35B-A3B**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 220 | 1.7K | 35B 总参数仅激活 3B 的 MoE 模型，支持视觉与文本多任务 |
| [**Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,883 | 2.3M | Kimi 新一代多模态模型，采用压缩张量技术，效果惊艳 |
| [**s1-mini**](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 156 | 348 | 基于 Qwen3 的轻量级语音识别/生成模型 |

### 🎨 多模态与生成（图像、视频、音频）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|---------|---------|------------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,748 | 1.4M | Qwen3.8 旗舰多模态模型，支持图像文本联合理解，本周霸榜冠军 |
| [**MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,242 | 3.3M | MiniMax 第三代视频生成模型，支持文本/图像/视频到视频，下载量惊人 |
| [**MiniMax-Music3**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,106 | 14.5K | 音乐生成模型，支持文本直接创作完整音乐作品 |
| [**LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,417 | 611K | Lightricks 视频生成模型，支持多模态视频到视频转换 |
| [**Minimax-h3-Turbo**](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 654 | 380K | MiniMax-H3 的高效加速版本，降低推理成本 |
| [**Muse-Glimmer-30B**](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,718 | 478K | Meta 推出的 30B 多模态模型，图像文本对话能力出色 |
| [**10Eros-Max**](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 299 | 0 | 基于 MiniMax-H3 的微调视频生成模型 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

> 今日榜单暂无典型专用模型（代码/数学/医疗/嵌入类）入列，多数上榜模型集中于多模态对话与视频生成。此位置将在专用模型亮相时更新。

### 📦 微调与量化（社区微调、GGUF）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|---------|---------|------------|
| [**Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,360 | 5.1M | 官方推荐量化版本，GGUF 格式便于 llama.cpp 本地部署 |
| [**Qwen3.8-27B-FP8**](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 633 | 1.5M | 官方 FP8 精度版本，兼顾性能与资源占用 |
| [**Qwen3.8-27B-NVFP4**](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 308 | 831K | NVIDIA 新一代 4-bit 浮点量化格式 |
| [**Qwen3.8-27B-Uncensored-MLX**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 714 | 2.6K | Apple Silicon 专用 MLX 格式，去审查版本 |
| [**Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 676 | 76K | FP8 量化 + 去审查组合 |
| [**Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 513 | 979K | 社区去审查微调 + GGUF 量化，下载量接近百万 |
| [**Qwen3.8-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 270 | 4.4K | 另一款 abliterated 路线去审查版本 |
| [**Qwen3.8-27B-Heretic-Abliterated-GGUF**](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-GGUF) | 0bserverx | 189 | 326K | "异端"风格去审查版本，社区热度高 |
| [**Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,339 | 0 | 修复 Qwen 系列对话模板的工具类模型，获大量点赞 |
| [**Huihui-Qwen3.8-27B-abliterated**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 202 | 10.5K | 知名社区作者 huihui 的去审查版本 |
| [**Ornith-1.5-35B-A3B-GGUF**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 163 | 53.7K | Ornith 的 GGUF 量化版，MIT 协议，兼容各类推理框架 |

---

## 📊 生态信号

**Qwen 家族呈现"独占鳌头"态势。** Qwen3.8-27B 直接霸占榜单前 30 中的近三分之一席位，从原版、官方量化（FP8/GGUF）、社区去审查（abliterated）到 MLX 格式全覆盖，形成了完整的"原版+量化+微调"生态闭环。`unsloth` 等第三方量化团队与原厂深度协作，构建了高效的模型分发渠道。

**MiniMax 与 DeepSeek 双雄并起。** MiniMax-H3 视频生成模型以 330 万下载量证明多模态生成赛道仍是流量高地；DeepSeek-V4 双版本策略（Pro 面向高要求场景、Flash 面向效率场景）反映开源模型正向"细分场景双轨制"演进。

**"去审查"(abliterated) 已成社区显学。** 榜单上至少出现 7 款 uncensored/abliterated 变体，覆盖 GGUF、MLX、FP8 等全部格式，反映开源社区对"无限制对话"的持续需求。这既是技术现象（权重编辑技术成熟），也是文化现象。

**MoE 架构持续升温。** Qwen3.8-2.4T-A95B 与 Ornith-1.5-35B-A3B 的背后逻辑一致：以更低激活参数实现更高总参数量，在推理成本与模型能力间寻求最优解。

---

## 🔭 值得探索

1. **[Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)** — 2.4T 总量仅激活 95B 的极致 MoE 设计，如果你关注大规模稀疏模型的技术边界，这是必看之作。

2. **[MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** — 文本直出完整音乐作品，AI 生成从文本/图像/视频走向音频全模态覆盖，值得体验其音乐创作能力。

3. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 10.9K 点赞证明其影响力，Kimi 在多模态理解上的"压缩张量"技术路线值得深入研究，可能与主流架构形成差异化。

---

*数据源：Hugging Face Hub 热门模型榜（按周点赞排序） | 统计时间：2026-08-21*

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*