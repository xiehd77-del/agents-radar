# Hugging Face 热门模型日报 2026-08-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-25 01:20 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-25

---

## 📌 今日速览

本周 Hugging Face 生态被 **Qwen3.8-27B** 家族全面霸榜，官方旗舰 + 社区量化/去审查变体合计占据 Top 30 中约 20 席，堪称"Qwen 周"。值得关注的是，榜单中出现了 **三个全新模型家族**：DeepSeek-V4-Flash 以 3,682 赞强势登场，Kimi-K3 以近 1.1 万赞稳居第二，MiniMax 则一口气推出 **H3 视频生成** 与 **Music3 音乐生成** 双模型。在技术趋势上，**多模态化**（图像+文本+视频）已成为旗舰模型的标配，而 **abliterated（去审查）** 与 **GGUF 量化** 则构成了社区二次创作的两大主旋律。此外，**D-Flash 投机解码** 和 **MoE 架构**（如 Ornith-1.5 系列）也在加速落地。

---

## 🏆 热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|---------|---------|------------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,515 | 2,645,226 | 新一代旗舰多模态 LLM，支持图像+文本理解与对话，本周绝对霸主。 |
| [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,682 | 3,274,129 | DeepSeek V4 系列 Flash 版本，主打高效推理与对话能力，快速攀升。 |
| [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,973 | 2,787,971 | Kimi 第三代多模态模型，采用压缩张量技术，关注度极高。 |
| [**ornith-ai/Ornith-1.5-35B-A3B**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 398 | 60,294 | 35B 总参数 MoE 模型（激活仅 3B），基于 Qwen3.5-MoE 架构，MIT 许可。 |
| [**ornith-ai/Ornith-1.5-9B**](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 203 | 83,192 | Ornith 系列小型版，多模态文本生成，兼顾性能与效率。 |
| [**superwhisper/s1-mini**](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 229 | 2,976 | 具备语音识别能力的轻量级文本生成模型，主打听觉+文本融合。 |
| [**z-lab/Qwen3.8-27B-DFlash2**](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 214 | 50,763 | 集成 D-Flash2 投机解码技术的 Qwen3.8-27B 变体，加速推理。 |
| [**incoai/Qwen3.8-27B-DFlash2**](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 173 | 85,034 | 与 z-lab 同期发布的 D-Flash2 投机解码版本，技术路线竞争激烈。 |

### 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|---------|---------|------------|
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,417 | 4,465,161 | 新一代图像+文本到视频生成模型，下载量超 446 万，视频生成赛道黑马。 |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,725 | 790,378 | 多功能视频生成模型（图生视频/文生视频/视频生视频），单文件扩散模型。 |
| [**MiniMaxAI/MiniMax-Music3**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,228 | 18,065 | MiniMax 进军音乐生成的首款模型，文本直接生成音乐，潜力巨大。 |
| [**Audio8/Audio8-TTS-Preview-0.1b**](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 146 | 2,775 | 基于 ArkTTS 架构的预览版语音合成模型，轻量级 TTS 新选择。 |

### 🔧 专用模型（工具 / 模板 / 加速）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|---------|---------|------------|
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,447 | 0 | 修复版 Qwen 聊天模板（Jinja），0 下载但高赞，开发者刚需工具。 |
| [**peculiar-ragdoll/Qwen-Sharp-Chat-Templates**](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates) | peculiar-ragdoll | 230 | 0 | 优化版 Qwen 聊天模板，与上述模板类模型形成竞争。 |
| [**LBH-123-AI/Minimax_h3_latent_Upscaler**](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 181 | 0 | MiniMax-H3 配套的潜在空间超分辨率放大器，尚未开放下载。 |

### 📦 微调与量化（社区微调 / GGUF / 去审查）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|---------|---------|------------|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,838 | 7,009,063 | 官方推荐量化版，下载量超 700 万，是 GGUF 生态的流量担当。 |
| [**Qwen/Qwen3.8-27B-FP8**](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 681 | 3,004,940 | 官方 FP8 精度版本，兼顾显存占用与推理质量。 |
| [**orcarouter/Qwen3.8-27B-Uncensored**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) 系列 | orcarouter | — | — | 包含 MLX / FP8 / GGUF 三种格式的去审查版本，全格式覆盖。 |
| [**OBLITERATUS/Qwen3.8-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 695 | 312,627 | 经典"抹除"系列，多格式去审查版本，社区影响力深厚。 |
| [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 690 | 1,456,700 | 支持 MTP 模式的去审查 GGUF，下载量超 145 万。 |
| [**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 580 | 761,975 | "激进版"MTP 去审查 GGUF，主打更高解码效率。 |
| [**huihui-ai/Huihui-Qwen3.8-27B-abliterated**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) 系列 | huihui-ai | — | — | 知名"abliterated"系列作者，GGUF 版下载量超 114 万。 |
| [**0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF**](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 260 | 654,805 | "异端"级激进去审查版本，命名风格延续社区亚文化。 |
| [**DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 226 | 209,017 | 融合 Cold-Fusion + GAIN 训练技术的 GGUF，命名极尽炫技。 |
| [**ornith-ai/Ornith-1.5-35B-A3B-GGUF**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 275 | 988,170 | Ornith MoE 模型的 GGUF 量化版，MIT 许可，下载近百万。 |
| [**ornith-ai/Ornith-1.5-9B-GGUF**](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 186 | 971,104 | Ornith 9B 版 GGUF，轻量级 MoE 量化首选。 |

---

## 🌐 生态信号

**Qwen 家族绝对统治**：Qwen3.8-27B 已形成"官方旗舰 + unsloth 量化 + 社区去审查 + 投机解码 + 模板修复"的完整生态链。值得注意的是，**去审查（abliterated/Uncensored）** 成为社区最活跃的二次创作方向——top 30 中近 1/3 与此相关，且格式全面覆盖 GGUF/MLX/FP8。

**新玩家三线突进**：DeepSeek-V4-Flash、Kimi-K3、MiniMax-H3 分别代表语言、多模态、视频三条赛道的平行发力。其中 **MiniMax-H3 下载量已超 446 万**，视频生成正成为继文本之后的下一个主战场。

**技术趋势**：MoE 架构（Ornith-1.5 系列）与投机解码（D-Flash2）正在从论文走向大规模落地；GGUF 依然是本地部署的绝对主流格式；**多模态能力正从"可选"变为"默认"**。

---

## 🔍 值得探索

1. **moonshotai/Kimi-K3** — 采用压缩张量技术，在保持多模态能力的同时优化存储与推理效率，代表了"更小更强"的探索方向，值得深入研究其架构设计。

2. **ornith-ai/Ornith-1.5-35B-A3B** — 仅激活 3B 参数的 35B MoE 模型，MIT 许可且提供 9B 小版本，是研究高效稀疏激活架构的绝佳样本，也是本地部署旗舰级能力的新选项。

3. **MiniMaxAI/MiniMax-Music3** — 文本直接生成音乐的跨模态尝试尚属前沿赛道，作为该领域少有的开源权重模型，值得音乐生成与跨模态研究者重点关注。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*