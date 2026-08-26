# Hugging Face 热门模型日报 2026-08-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-26 01:23 UTC

---

# Hugging Face 热门模型日报 2026-08-26

## 今日速览

本周 Hugging Face 生态呈现三大看点：**Qwen3.8-27B 系成为绝对统治级热点**，原版以 12.7k 周点赞登顶，围绕其涌现的 GGUF 量化、Uncensored 微调、投机解码等衍生模型占据榜单近半数席位；**多模态视频生成迎来高光**，Lightricks LTX-2.5 与 MiniMax-H3 双双入榜，后者下载量达 463 万；**DeepSeek-V4 与 Kimi-K3 两大国产模型正面交锋**，分别以 3.7k 和 11k 点赞位列文本/多模态赛道头部。值得注意的生态特征是：社区对 "abliterated/uncensored" 变体需求旺盛，且 GGUF 量化格式的下载量普遍远超原始权重。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 👍 12,712 | ⬇ 294.5万
  本周最热模型，Qwen 3.5 系列旗舰级多模态对话模型，27B 参数，承接 Qwen 家族统治力。
- **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** — MiniMaxAI | 👍 1,246 | ⬇ 1.9万
  专业音乐生成模型，支持文本到音乐，是音频生成赛道本周的代表性发布。
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI | 👍 4,457 | ⬇ 464万
  本周下载量之王（464 万），图像/文本到视频生成模型，支持多模态视频创作。
- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — deepseek-ai | 👍 3,714 | ⬇ 352.8万
  DeepSeek V4 系列 Flash 版，轻量化推理，下载量巨大（352.8 万）。
- **[deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)** — deepseek-ai | 👍 758 | ⬇ 7.5万
  DeepSeek V4 系列 Pro 版，全新基准测试发布，追求极致性能。
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — moonshotai | 👍 10,996 | ⬇ 286.5万
  Kimi K3 多模态模型，预训练 1T  token，采用压缩和稀疏注意力，支持 1M 上下文窗口。
- **[superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini)** — superwhisper | 👍 238 | ⬇ 3,474
  轻量级语音识别（ASR）模型，结合 qwen3 文本生成能力。
- **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** — ornith-ai | 👍 419 | ⬇ 7万
  MIT 许可的 MoE 架构模型，仅 3B 激活参数，工业级性能，支持多模态。
- **[ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B)** — ornith-ai | 👍 216 | ⬇ 9.8万
  轻量级通用语言模型，MIT 许可，延续 qwen3_5 架构。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 👍 1,800 | ⬇ 83.4万
  多功能视频生成模型，支持文本/图像/视频到视频，Diffusion 模型。
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI | 👍 4,457 | ⬇ 464万
  本月下载量王，图像/文本到视频生成，视频创作通用工具。
- **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** — MiniMaxAI | 👍 1,246 | ⬇ 1.9万
  音乐生成模型，文本到音乐，Diffusers 框架。
- **[Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b)** — Audio8 | 👍 156 | ⬇ 3,640
  文本到语音（TTS）预览版，基于 ArkTTS，端侧部署友好。
- **[sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT)** — sensenova | 👍 153 | ⬇ 2,682
  原生的原生多模态模型（Any-to-Any），支持文本、图像、音频等。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini)** — superwhisper | 👍 238 | ⬇ 3,474
  语音识别专用模型，适用于音频转录任务。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 👍 2,917 | ⬇ 733.5万
  社区量化衍生模型的销量冠军（733 万下载），Qwen3.8-27B 的 GGUF 量化版。
- **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** — OBLITERATUS | 👍 749 | ⬇ 39万
  Qwen3.8-27B 的 "abliterated"（审查移除）版本，社区热门玩法。
- **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** — orcarouter | 👍 1,096 | ⬇ 6.9万
  MLX 格式的 uncensored 版本，针对 Apple Silicon 优化。
- **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** — orcarouter | 👍 1,148 | ⬇ 25万
  FP8 量化的 uncensored 版本，精度与性能平衡。
- **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** — HauhauCS | 👍 623 | ⬇ 83.2万
  带 MTP（Multi-Token Prediction）的激进 uncensored 量化版。
- **[ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF)** — ornith-ai | 👍 297 | ⬇ 115.7万
  MoE 架构的 GGUF 量化版，MIT 许可，端侧部署友好。
- **[ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF)** — ornith-ai | 👍 201 | ⬇ 114.4万
  Ornith-1.5-9B 的 GGUF 量化版，轻量级 MIT 许可。
- **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** — JonathanColetti | 👍 722 | ⬇ 152.6万
  GGUF 量化 uncensored 版，下载量领先。
- **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** — orcarouter | 👍 452 | ⬇ 15.4万
  基于 abliterated 技术的 Qwen3.8-27B GGUF 量化版。
- **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** — huihui-ai | 👍 357 | ⬇ 123.1万
  abliterated 技术移除审查的 GGUF 版，下载量高。
- **[0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF)** — 0bserverx | 👍 277 | ⬇ 73.5万
   "Heretic" 极致 uncensored 版，激进程度更高的社区微调。
- **[z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2)** — z-lab | 👍 227 | ⬇ 6.5万
  DFlash2 投机解码优化版，用于加速推理。
- **[incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2)** — incoai | 👍 179 | ⬇ 10.6万
  同样基于 DFlash2 技术的加速推理版。
- **[DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF)** — DavidAU | 👍 240 | ⬇ 22.2万
  结合 GAIN 训练与冷融合技术的 GGUF 版，社区技术集大成者。
- **[EschaLabs/Qwen3.8-27B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.8-27B-Escha-W2)** — EschaLabs | 👍 127 | ⬇ 2,319
  Escha-W2 极低比特量化版本（2-bit），极致压缩探索。
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — froggeric | 👍 1,468 | ⬇ 0
  修复 Qwen 对话模板（Jinja）的工具，开发者工具类，关注度高。
- **[peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates)** — peculiar-ragdoll | 👍 244 | ⬇ 0
  优化 Qwen 对话模板的另一个版本，工具类。
- **[orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored)** — orcarouter | 👍 183 | ⬇ 1.5万
  uncensored 版本的原版，提供更安全的审查移除方案。

---

## 生态信号

**Qwen3.8-27B 家族一家独大**：原生模型 + 量化（GGUF/FP8/MLX）+ 微调（uncensored/abliterated）+ 性能优化（DFlash2/MTP）的生态链条极为完整，形成"基础模型+周边衍生"的闭环。**多模态视频生成进入爆发期**：MiniMax-H3 与 LTX-2.5 的下载量证明视频生成需求强劲。**开源权重主导 + 激进微调文化**：Kimi-K3、DeepSeek-V4、Qwen 等全部开放权重，而 uncensored/abliterated 类模型的高下载量反映了社区对审查移除的强烈偏好。**量化成为标配**：GGUF 格式几乎成为所有模型的必备配套，下载量普遍超过原版，说明端侧部署和消费级硬件推理是核心诉求。

---

## 值得探索

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 作为本周绝对热点，它是 Qwen 3.5 旗舰级多模态模型，承载了 27B 参数下的多模态对话能力。无论是想测试 SOTA 效果，还是作为量化/微调实验的基座，都值得深入研究。

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 以 1T token 预训练 + 压缩注意力 + 1M 上下文窗口的组合，代表了模型效率与长上下文的新方向。对于想探索"如何在降低计算成本的同时保持大容量记忆"的团队，是绝佳研究样本。

- **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** — MIT 许可 + MoE（仅 3B 激活参数）+ 工业级性能的组合，让它成为边缘部署和商业项目的高价值选择。GGUF 量化版的百万级下载量也验证了其实用性。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*