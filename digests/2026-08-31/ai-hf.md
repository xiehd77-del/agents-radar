# Hugging Face 热门模型日报 2026-08-31

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-31 04:19 UTC

---

# 🤖 Hugging Face 热门模型日报 | 2026-08-31

---

## 📌 今日速览

今日 Hugging Face 榜单由 **Qwen 家族** 全面领跑，最新旗舰 **Qwen3.8-27B** 以 13,361 周点赞、451 万下载的断层优势登顶，成为当前开源多模态对话模型的最强焦点。**Kimi K3**（11,105 赞）与 **GLM-5.3** 系列紧随其后，共同撑起国产开源大模型的三极格局。视频生成赛道迎来重磅更新，**MiniMax-H3** 以 4663 赞强势上榜并衍生出大量生态工具链。值得关注的是，**Qwen3.8-27B 的“abliterated”（去审查）衍生模型**已形成庞大的社区生态，至少有 6 个相关变体上榜，成为本周最显眼的微调趋势。量化领域，**unsloth 的 GGUF 版本下载量持续爆发**（Qwen3.8-27B-GGUF 下载 884 万），印证端侧部署需求强劲。

---

## 🏆 热门模型分类榜单

### 🧠 语言模型（LLM & 对话）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [**Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,361 | 4.51M | 本周绝对王者，新一代多模态对话大模型，集语言、视觉理解于一体 |
| [**Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,105 | 2.79M | 月之暗面旗舰新作，采用压缩张量技术，主打高性价比推理 |
| [**GLM-5.3**](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,357 | 50K | 智谱 AI 最新 MoE 架构模型，支持多模态输入 |
| [**GLM-5.3-Flash**](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,729 | 347K | GLM-5.3 的轻量快速版，主打低延迟推理场景 |
| [**DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,826 | 4.58M | DeepSeek 第四代模型的 Flash 版，推理效率大幅提升 |
| [**Qwen3.8-Flash-Next**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,402 | 122K | Qwen 新一代实验架构，属于 Qwen4 系列预览版 |
| [**Hy4-preview**](https://huggingface.co/tencent/Hy4-preview) | tencent | 321 | 2.1K | 腾讯混元大模型第四代预览版，目前处于早期发布阶段 |
| [**Thomson-1.0-Small**](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 159 | 1K | 汤森路透基于 Qwen3.5-MoE 底座打造的金融/法律领域轻量模型 |

### 🎨 多模态与生成（视频/图像/音频）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [**MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,663 | 5.26M | MiniMax 第三代视频生成大模型，支持文生视频与图生视频双模式 |
| [**LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,276 | 1.14M | 全能视频生成模型，覆盖图生视频、文生视频、视频编辑等全场景 |
| [**MiniMax-H3-experimental**](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 365 | 0 | MiniMax-H3 的实验性变体，探索功能扩展方向 |
| [**FastVideo-FastH3-4-step-Preview**](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 197 | 0 | 基于 MiniMax-H3 的加速推理方案，仅需 4 步即可完成视频生成 |
| [**MiniMax-H3-Fun-Controlnet-Union**](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 163 | 5.5K | 阿里 PAI 为 MiniMax-H3 适配的 ControlNet 统一控制网络 |
| [**MiniMax-H3-Acc-LoRAs**](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 153 | 23.7K | MiniMax-H3 的加速 LoRA 集合，用于提高生成速度与质量 |
| [**Breeze-TTS-2**](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 215 | 1.8K | BreezeBlue 全新 TTS 模型，主打自然语音合成 |

### 🔧 专用模型（代码/推理/语音）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [**phonellm-alpha-1**](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 153 | 4K | 基于 Nemotron 架构的电话语音对话模型，面向实时通话场景 |
| [**Tiel-Coder-35B-A3B-GGUF**](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 146 | 87.8K | 35B 参数 MoE 代码模型（激活 3B），GGUF 量化适用本地部署 |
| [**Ornith-1.5-35B-A3B**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 507 | 147K | 新一代 MoE 模型，35B 总参仅激活 3B，兼顾性能与效率 |

### 📦 微调与量化（GGUF/Abliterated）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [**Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,250 | 8.84M | 官方社区合作的 GGUF 量化版，下载量最高，是本地部署首选 |
| [**Qwen3.8-Flash-Next-GGUF**](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 605 | 328K | Flash-Next 的 GGUF 量化版本，适配低资源环境 |
| [**GLM-5.3-Flash-GGUF**](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 291 | 45.9K | GLM 轻量版的量化版本，便于本地快速部署 |
| [**Qwen3.8-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 951 | 726K | 社区去审查版，移除安全对齐限制，支持 MLX 与 GGUF 多格式 |
| [**Qwen3.8-27B-Uncensored-MLX**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,236 | 109K | 面向 Apple Silicon 的 MLX 格式去审查版本 |
| [**Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,289 | 302K | FP8 精度的去审查版本，兼顾质量与显存占用 |
| [**Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 585 | 238K | 去审查 + GGUF 量化，社区一键部署 |
| [**Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 790 | 1.16M | “激进版”去审查 + MTP 加速 GGUF，社区热门变体 |
| [**Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 855 | 1.99M | 高下载量的去审查 GGUF，适用于 llama.cpp 与 MTP 模式 |
| [**Qwen3.8-27B-abliterated-GGUF**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 459 | 1.62M | 知名社区作者 huihui-ai 的去审查量化版本 |
| [**Qwen3.8-Flash-Next-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 125 | 42.9K | Flash-Next 架构的去审查量化版 |
| [**Qwen3.8-Flash-Next-FP8**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) | Qwen | 163 | 77K | 官方 FP8 量化版，降低推理显存需求 |

---

## 🌐 生态信号

**Qwen 家族持续垄断开源榜首。** 从原版 Qwen3.8-27B 到 Flash-Next 再到社区衍生的各种量化/去审查版本，Qwen 生态包揽了榜单近三分之一席位，已成为当前开源社区的绝对主导力量。值得注意的是 **“去审查（Abliterated）”微调成为最热门的社区玩法**，围绕 Qwen3.8-27B 衍生出的 Uncensored 变体已形成完整矩阵（GGUF/MLX/FP8 多格式覆盖），下载量合计超 600 万，反映出用户对无限制对话的强烈需求。

在视频生成赛道，**MiniMax-H3 正在构建完整的工具生态**——从官方模型到加速方案（FastVideo）、控制网络（阿里 PAI）、LoRA 微调，再到实验性探索，其生态丰富度直追 Stable Diffusion 当年的发展轨迹。

值得注意的另一个信号是 **国产模型全面崛起**：Qwen、GLM、Kimi、DeepSeek、混元五大国产系列同时跻身榜单头部，开源权重模型的竞争力已与闭源模型形成正面对抗，且中文生态的完整度（量化、微调、文档）已明显领先其他语种。

---

## 🔬 值得探索

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周最强开源多模态模型，13K+ 点赞的断层领先已验证其综合实力。作为 Qwen3.5 代际的旗舰，其语言 + 视觉的融合能力值得所有开发者和研究者深入体验，也是社区各类衍生工作（量化、微调、去审查）的“母体”。

2. **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 视频生成赛道的现象级产品，4663 赞 + 526 万下载。其衍生生态（控制网络、加速推理、实验变体）正在快速成形，若你关注 AI 视频生成工具链的演进方向，这是本周最值得跟踪的模型。

3. **[Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — 以 884 万下载量高居所有量化模型之首。unsloth 团队对 Qwen3.8-27B 的量化优化极具代表性，无论你是想本地部署体验 SOTA 模型，还是研究 GGUF 量化技术的最佳实践，这个模型都值得深入研究。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*