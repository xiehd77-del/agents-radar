# Hugging Face 热门模型日报 2026-08-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-23 01:25 UTC

---

# 🤖 Hugging Face 热门模型日报 | 2026-08-23

---

## 📌 今日速览

今日 Hugging Face 趋势榜**几乎被 Qwen 家族垄断**——Qwen3.8-27B 及其衍生版本占据 30 席中的 15 席以上，涵盖量化、去审查（abliterated）、蒸馏等多种社区二次开发形态，表明该模型已成为当前开源社区最活跃的基座。其次，**MiniMax 在视频与音乐生成双线发力**，MiniMax-H3 视频模型以 4338 点赞位居榜单前列，MiniMax-Music3 也在音频生成赛道崭露头角。值得关注的是，**DeepSeek-V4 系列与 Kimi-K3 作为头部闭源厂商的开源权重模型**同样表现强劲，显示头部 AI 实验室持续加码开源生态。此外，多模态成为绝对主流——前 30 名中超过 60% 的模型支持图像、视频或多模态输入，纯文本模型占比明显收窄，同时社区对 GGUF 量化格式的需求依旧旺盛，多个量化版本下载量远超原版。

---

## 🏆 热门模型

---

### 🧠 语言模型（LLM、对话模型、指令微调）

#### Qwen/Qwen3.8-27B
- [模型链接](https://huggingface.co/Qwen/Qwen3.8-27B) | 作者: Qwen
- 👍 12,139 | ⬇️ 2,090,699
- 今日榜单**冠军**。Qwen 最新一代多模态对话模型，支持图像与文本混合输入，是目前社区最炙手可热的开源基座模型，几乎所有衍生版本都以此为基础。

#### orcarouter/Qwen3.8-27B-Uncensored-MLX
- [模型链接](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | 作者: orcarouter
- 👍 887 | ⬇️ 34,909
- 基于 Qwen3.8-27B 的 **MLX 格式去审查版本**，针对 Apple Silicon 优化，移除了模型的安全对齐限制，满足特定创作需求。

#### orcarouter/Qwen3.8-27B-Uncensored-FP8
- [模型链接](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | 作者: orcarouter
- 👍 990 | ⬇️ 142,846
- 同样是去审查版本，但采用 **FP8 精度压缩**，在保持任务能力的同时显著降低显存占用，适合资源受限环境下的部署。

#### OBLITERATUS/Qwen3.8-27B-OBLITERATED
- [模型链接](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | 作者: OBLITERATUS
- 👍 533 | ⬇️ 164,950
- 社区"去审查"（abliteration）运动的代表性作品之一，以纯文本生成任务为主，同时提供 GGUF 和 MLX 多格式权重。

#### ornith-ai/Ornith-1.5-35B-A3B
- [模型链接](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | 作者: ornith-ai
- 👍 321 | ⬇️ 12,611
- **混合专家（MoE）架构模型**，总参数 35B 但仅激活 3B，基于 Qwen3.5 MoE 基座训练，兼顾多模态理解与高效推理，MIT 许可发布。

#### deepseek-ai/DeepSeek-V4-Pro-0813
- [模型链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | 作者: deepseek-ai
- 👍 719 | ⬇️ 54,566
- DeepSeek 第四代旗舰模型的 Pro 版本，专注于复杂推理与长上下文任务的高性能文本生成。

#### deepseek-ai/DeepSeek-V4-Flash-0731
- [模型链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | 作者: deepseek-ai
- 👍 3,632 | ⬇️ 2,976,281
- DeepSeek-V4 的轻量高效版本，下载量近 300 万，在性能与推理成本之间取得极佳平衡，是当前最受欢迎的开源文本生成模型之一。

#### Qwen/Qwen3.8-2.4T-A95B
- [模型链接](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | 作者: Qwen
- 👍 1,146 | ⬇️ 17,386
- **Qwen 超大规模 MoE 模型**：总参数 2.4T、激活 95B，纯文本任务，代表当前开源模型规模的天花板。

#### superwhisper/s1-mini
- [模型链接](https://huggingface.co/superwhisper/s1-mini) | 作者: superwhisper
- 👍 202 | ⬇️ 1,913
- 基于 Qwen3 的迷你语音识别模型，兼具 ASR 与文本生成能力，主打轻量高效。

#### empero-ai/Qwen3.8-9B-Distill
- [模型链接](https://huggingface.co/empero-ai/Qwen3.8-9B-Distill) | 作者: empero-ai
- 👍 165 | ⬇️ 9,260
- 从 Qwen3.8-27B **蒸馏而来的 9B 轻量版**，保留多模态能力，适合边缘设备部署。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

#### Lightricks/LTX-2.5
- [模型链接](https://huggingface.co/Lightricks/LTX-2.5) | 作者: Lightricks
- 👍 1,566 | ⬇️ 694,670
- 新一代**视频生成模型**，支持图生视频、文生视频及视频到视频多种模式，单文件架构便于本地部署。

#### MiniMaxAI/MiniMax-Music3
- [模型链接](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | 作者: MiniMaxAI
- 👍 1,183 | ⬇️ 16,644
- **音乐生成模型**，可根据文本描述直接创作音乐片段，基于扩散架构，是音频生成赛道的新锐力量。

#### MiniMaxAI/MiniMax-H3
- [模型链接](https://huggingface.co/MiniMaxAI/MiniMax-H3) | 作者: MiniMaxAI
- 👍 4,338 | ⬇️ 3,899,160
- MiniMax 的**视频生成旗舰模型**，支持文本到视频、图像到视频多模态转换，近 400 万下载量证明了其社区热度。

#### TenStrip/10Eros-Max
- [模型链接](https://huggingface.co/TenStrip/10Eros-Max) | 作者: TenStrip
- 👍 316 | ⬇️ 0（新发布）
- 基于 MiniMax-H3 的**社区微调版本**，专注于特定风格视频生成，刚发布暂无下载量，但点赞数已显示社区关注。

#### meta-models/Muse-Glimmer-30B
- [模型链接](https://huggingface.co/meta-models/Muse-Glimmer-30B) | 作者: meta-models
- 👍 1,756 | ⬇️ 517,564
- Meta 最新**多模态对话模型**（30B），融合图像理解与文本生成，定位为通用视觉语言助手。

#### moonshotai/Kimi-K3
- [模型链接](https://huggingface.co/moonshotai/Kimi-K3) | 作者: moonshotai
- 👍 10,929 | ⬇️ 2,612,739
- 月之暗面 Kimi 最新开源多模态模型，预印压缩权重格式，点赞数接近 1.1 万，是今日榜单上 Qwen 之外最大的亮点。

---

### 🔧 专用模型（代码、数学、医疗、嵌入等）

> 今日 Top 30 中未出现典型的专用领域模型（如代码模型、医疗模型等）。

> 说明：当前趋势榜以通用多模态基座模型及其衍生版本为主，专用模型尚未进入头部序列。嵌入模型、代码模型等领域的热度可能体现在特定榜单中，建议关注后续细分类目报告。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

#### unsloth/Qwen3.8-27B-GGUF
- [模型链接](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | 作者: unsloth
- 👍 2,627 | ⬇️ 6,320,542
- **量化下载量之王**（超 630 万），unsloth 出品的高质量 GGUF 量化版本，是本地部署 Qwen3.8-27B 的首选。

#### HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF
- [模型链接](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | 作者: HauhauCS
- 👍 487 | ⬇️ 486,221
- 集**去审查 + 激进多 token 预测（MTP）+ GGUF 量化**于一体的社区聚合版，为追求极致性能的本地用户打造。

#### JonathanColetti/Qwen3.8-27B-Uncensored-GGUF
- [模型链接](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | 作者: JonathanColetti
- 👍 623 | ⬇️ 1,223,422
- 下载量超 122 万的去审查 GGUF 版本，兼容 llama.cpp 生态，社区口碑良好。

#### orcarouter/Qwen3.8-27B-Uncensored-GGUF
- [模型链接](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | 作者: orcarouter
- 👍 336 | ⬇️ 85,371
- orcarouter 团队出品的去审查 GGUF 系列，与其他格式版本形成完整矩阵。

#### huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF
- [模型链接](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | 作者: huihui-ai
- 👍 255 | ⬇️ 635,416
- 知名量化社区 huihui-ai 的去审查 GGUF 版本，下载量超 63 万，属于该赛道头部作品。

#### huihui-ai/Huihui-Qwen3.8-27B-abliterated
- [模型链接](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | 作者: huihui-ai
- 👍 246 | ⬇️ 21,612
- 与上一条对应的**非量化 safetensors 版本**，适合直接微调或转其他格式。

#### Qwen/Qwen3.8-27B-FP8
- [模型链接](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | 作者: Qwen
- 👍 664 | ⬇️ 2,306,777
- 官方出品的 **FP8 量化版本**，在几乎不损失性能的前提下大幅降低显存需求，下载量超 230 万。

#### empero-ai/Qwen3.8-27B-Ridge-GGUF
- [模型链接](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | 作者: empero-ai
- 👍 245 | ⬇️ 97,247
- 社区量化版本，针对 llama.cpp 推理框架优化。

#### DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF
- [模型链接](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | 作者: DavidAU
- 👍 192 | ⬇️ 176,969
- 集成 **GAIN 训练、冷融合（Cold-Fusion）与 MTP 推理加速**多项技术，是社区技术实验的集大成者。

#### 0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF
- [模型链接](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 作者: 0bserverx
- 👍 227 | ⬇️ 505,813
- "Heretic"系列去审查 GGUF 版本，下载量超 50 万，延续了该系列在社区的强号召力。

#### z-lab/Qwen3.8-27B-DFlash2
- [模型链接](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | 作者: z-lab
- 👍 194 | ⬇️ 29,705
- 引入 **DFlash2 投机解码技术**的 Qwen3.8 变体，显著提升推理速度。

#### froggeric/Qwen-Fixed-Chat-Templates
- [模型链接](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | 作者: froggeric
- 👍 1,397 | ⬇️ 0
- **对话模板修复工具包**：修复 Qwen3.5 系列在 MLX、Jinja 环境下的聊天模板兼容问题。下载量为 0 但点赞超 1300，说明是开发者急需的实用工具。

#### LBH-123-AI/Minimax_h3_latent_Upscaler
- [模型链接](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | 作者: LBH-123-AI
- 👍 159 | ⬇️ 0（新发布）
- MiniMax-H3 的 **潜空间视频超分辨率模块**，用于提升生成视频的分辨率与细节。

---

## 📊 生态信号

**Qwen 生态一骑绝尘：** 榜单前 30 名中，Qwen 系列及其衍生模型占据约 50% 份额，围绕 Qwen3.8-27B 已形成完整的"基座模型 → 量化 → 去审查 → 推理加速 → 蒸馏"社区生链条。Qwen 之于今日开源社区，已相当于早期的 LLaMA 生态。

**"去审查"成为显学：** 榜单中出现至少 8 个 abliterated/uncensored 版本，占 Qwen 衍生模型的半数以上。社区对"无限制"模型的需求已经从边缘走向主流，多个去审查模型下载量突破百万。

**多模态全面渗透：** 纯文本模型在 Top 30 中占比不足三分之一。视频生成（MiniMax-H3、LTX-2.5）、音乐生成（MiniMax-Music3）、图像理解（Qwen3.8-VL、Kimi-K3）等多模态任务成为头部聚集地。

**开源权重 → 量化 → 多平台适配成为标准路径：** 头部权重发布后，紧接着出现 GGUF（llama.cpp）、MLX（Apple Silicon）、FP8（企业部署）等多个生态位版本，开源模型的"基础设施化"已高度成熟。头部厂商（Qwen、DeepSeek、Kimi、MiniMax）均以开源权重方式竞争，闭源模型空间进一步收窄。

---

## 🔬 值得探索

**1. Qwen/Qwen3.8-2.4T-A95B** — [链接](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
当前开源界罕见的 2.4T 超大规模 MoE 模型，代表了开源模型在规模上的极限探索。虽然推理门槛较高，但对于研究模型规模与能力关系、探索 MoE 架构上限具有极高的参考价值。

**2. moonshotai/Kimi-K3** — [链接](https://huggingface.co/moonshotai/Kimi-K3)
以近 1.1 万点赞位列第二，是今日榜单中除 Qwen 之外最受关注的模型。其"压缩张量"（compressed-tensors）权重格式值得深入研究，可能代表了下一代模型分发的新范式，同时也是 Kimi 系模型在开源社区的重要布局。

**3. ornith-ai/Ornith-1.5-35B-A3B** — [链接](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)
MIT 许可的 35B 总参/3B 激活 MoE 多模态模型。在保持多模态能力的同时实现了极低的推理成本，且无使用限制，是研究高效 MoE 架构与多模态融合的最佳实践样本。配套 [GGUF 量化版](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) 也已发布，适合实际部署验证。

---

*本报告基于 2026-08-23 Hugging Face 热门模型数据生成，仅供参考。*

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*