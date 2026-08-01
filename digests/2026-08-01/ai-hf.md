# Hugging Face 热门模型日报 2026-08-01

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-01 02:56 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-01

## 今日速览

今日榜单由 **Kimi-K3**（9,284 赞）断崖式领跑，该多模态特征提取模型热度极高；**DeepSeek-V4-Flash 系列** 凭借近 300 万下载量位居社区应用榜首，生态热度持续攀升。中文模型阵营（智谱 GLM-5.2、百度 OCR、月之暗面 Kimi）表现强势，占比显著提升。**Qwen3.6 社区微调生态**异常活跃，多款 Uncensored/MoE 变体集中上榜。值得关注的是，微软携 Fara1.5-27B（计算机视觉代理）和 VibeVoice（BitNet 语音识别）双双入围，量化模型（NVFP4、GGUF）亦占据多个席位。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|---------|-----------|
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 1,045 | 0 | V4 Flash 新版本，今日首发上传，是 DeepSeek V4 高性能闪速版本 |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,709 | 1.65M | 智谱旗舰对话模型，MoE+注意力架构（DSA），持续保持高热度 |
| [Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 863 | 76.2K | Poolside 编码领域旗舰模型，2.1 版本专注于生产级代码生成 |
| [Nanbeige4.2-3B](https://huggingface.co/Nanbeige/	Nanbeige4.2-3B) | Nanbeige | 595 | 26.9K | 轻量级中文 LLM、3B 参数，适合资源受限场景 |
| [Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 714 | 12.9K | Upstage 开源 250B 旗舰模型，关注多语言与长上下文 |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,924 | 2.92M | V4 Flash 基础版：下载量今日最高，社区广泛部署使用 |
| [Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,664 | 57.3K | 多模态对话模型高赞上榜，主打图文理解能力 |
| [Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 198 | 2.9K | Inkling 轻量版本，方便低资源环境的部署尝试 |

---

## 🎨 多模态与生成（视觉 / 语音 / 音频）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|---------|-----------|
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,284 | 493K | 今日之最：Kimi 最新的图生文+特征提取模型，结合压缩张量技术 |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,664 | 2.51M | 百度推出的高精度 OCR 模型，下载量逾 250 万，多场景实用工具 |
| [Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 235 | 2.7K | 微软的计算机视觉智能体（computer-use）多模态模型 |
| [Mage-VL](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 151 | 5.7K | 通用视觉语言多模态模型 |
| [Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 348 | 1.4K | 本地化 TTS 微型模型，面向 CPU 和边缘设备语音合成 |
| [Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2) | owensong | 121 | 802 | Inflect 的 Nano 版，更小体量的边缘设备 TTS 方案 |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 152 | 2.5K | 新一代 TTS，基于 arktts，支持特征提取 |
| [VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 135 | 5.5K | 微软 BitNet 极低比特语音识别模型，支持 GGUF/GGML |
| [Mage-Flow](https://huggingface.co/Comfy-Org/Mage-Flow) | Comfy-Org | 107 | 60.2K | 基于微软 Mage 的 ComfyUI 扩散模型流式工作流 |

---

## 🔧 专用模型（代码 / 搜索 / OCR 等）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|---------|-----------|
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 371 | 10.2K | 基于 Qwen3.5 MoE 架构的专用代码生成模型（Dev 版）；支持多模态输入 |
| [XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 327 | 869 | 面向 agentic search（智能体搜索）场景的专用模型 |
| [XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 353 | 579 | Aquila 轻量版，支持 qwen3.6 特性，聚焦检索/快任务 |

---

## 📦 微调与量化（社区微调 / GGUF / 压缩）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|---------|-----------|
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,153 | 1.12M | Qwen3.6 社区极高热度微调 + GGUF，Uncensored 及多种优化叠加 |
| [Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 228 | 36.2K | Unsloth 提供的 Kimi-K3 GGUF 量化版本，方便本地部署 |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 194 | 0 | DeepSeek V4 Flash 官方 GGUF 量化版（首日发布） |
| [Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,206 | 1.84M | 最具人气的 Qwen3.6 MoE 社区微调（Uncensored + Vision GGUF） |
| [Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 273 | 212K | Hermes 指令风格与 Qwen3.6 MoE 结合的 GGUF 微调项目 |
| [Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 107 | 599 | MoE 稀疏化 W2 量化实验项目，面向极低比特部署 |
| [Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 175 | 262K | 另一高下载 Qwen3.5 微调 GGUF，Imatrix 量化加持 |
| [Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 151 | 18.5K | Solar-Open2 的 NVFP4 低比特量化版（vLLM 兼容） |
| [Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,125 | 713K | 三值量化（2-bit / ternary）27B 模型的 GGUF，极具实验性 |

---

## 🌐 生态信号

**趋势一：开源多模态模型进入爆发期。** Kimi-K3 的 9K+ 点赞表明多模态特征提取成为新焦点；微软、百度等大厂密集进入多模态领域，加上 Qwen3.6 微调族的视觉支持，开源多模态生态正快速走向成熟。

**趋势二：大厂权重开源成为标配。** DeepSeek、智谱、微软、Moonshot 都持续发布旗舰级开源权重，且下载量高达数百万次，开源模型的性能与闭源差距正快速缩小。

**趋势三：国产模型崛起、社区微调高度繁荣。** 中文模型（Kimi、GLM、Qwen、Nanbeige）占据半壁江山；围绕 Qwen3.6 的社区二次创作生态活跃（尤其 GGUF + Uncensored 方向）。与此同时，量化技术走向多元化：除了常见 GGUF，NVFP4、BitNet 和 Ternary（三值量化）开始规模化应用，边缘部署成为重要方向。

---

## 🔬 值得探索

1. **moonshotai/Kimi-K3** — 本周最大热度焦点：将视觉、文本、特征提取和压缩张量技术融为一体，建议关注其多模态特征在 RAG 和多模态 Agent 中的应用潜力。

2. **microsoft/VibeVoice-ASR-BitNet** — BitNet 架构在 ASR 领域的首次大规模落地，以 1-bit 级量化实现语音识别。若效果稳定，将深刻改变终端与边缘设备上的语音 AI 形态。

3. **prism-ml/Ternary-Bonsai-27B-gguf** — 三值量化（2-bit）实验模型获得 70 万+ 下载，说明社区对极端压缩有着真实需求——性能损耗与压缩率之间的权衡值得深入评测。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*