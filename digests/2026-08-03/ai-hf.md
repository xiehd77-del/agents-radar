# Hugging Face 热门模型日报 2026-08-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-03 02:56 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-03

## 📌 今日速览

本周 Hugging Face 生态迎来**多模态全面爆发**：月之暗面 **Kimi-K3** 以 9,652 周点赞断层领跑，DeepSeek 也放出 **V4-Flash** 系列双版本。国内厂商表现强势——百度 **Unlimited-OCR** 与智谱 **GLM-5.2** 均收获数千点赞。多模态旗舰（image-text-to-text）已成绝对主流，占比过半。**Qwen3.6** 社区微调生态空前繁荣，涌现大量 GGUF/量化衍生版本。开源权重模型持续碾压闭源，推理侧量化加速落地。

---

## 🧠 语言模型（LLM / 对话 / 指令微调）

### 1. [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)
- 作者：moonshotai | 👍 9,652 | ⬇️ 837,202
- 本周热度冠军，月之暗面新一代多模态旗舰，支持图像+文本联合输入，采用压缩张量（compressed-tensors）技术，是本周现象级发布。

### 2. [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)
- 作者：deepseek-ai | 👍 1,757 | ⬇️ 156,173
- DeepSeek V4 系列的轻量 Flash 版本（0731 快照），延续高性能推理优势，是本周最受关注的纯文本生成模型之一。

### 3. [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)
- 作者：deepseek-ai | 👍 1,960 | ⬇️ 2,785,810
- V4-Flash 正式版，下载量逼近 280 万，是目前 Hugging Face 上下载最活跃的大模型之一。

### 4. [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)
- 作者：zai-org | 👍 4,756 | ⬇️ 2,050,533
- 智谱新一代 MoE 对话模型（glm_moe_dsa 架构），下载量超 205 万，国产开源模型影响力持续攀升。

### 5. [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)
- 作者：poolside | 👍 879 | ⬇️ 80,102
- poolside 推出的自研对话模型系列新一代，性能稳定，逐步积累社区口碑。

### 6. [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)
- 作者：Nanbeige | 👍 628 | ⬇️ 33,042
- 小尺寸高效 LLM（3B），主打低成本部署，在边缘场景有不错的表现。

### 7. [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)
- 作者：upstage | 👍 720 | ⬇️ 14,863
- Upstage 开源 250B 级旗舰模型，主打多语言能力，是本周最大参数规模的开源发布之一。

### 8. [amd/Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think)
- 作者：amd | 👍 123 | ⬇️ 1,957
- AMD 主导的 MoE 模型（16B 总参数/3B 激活），基于 DeepSeek-V3 架构适配，主打推理增强。

### 9. [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4)
- 作者：nota-ai | 👍 154 | ⬇️ 68,199
- Solar-Open2-250B 的 NVFP4 量化版本，针对 vLLM 推理优化，大幅降低部署门槛。

---

## 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到X）

### 1. [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)
- 作者：baidu | 👍 3,783 | ⬇️ 2,536,284
- 百度开源的高精度 OCR 多模态模型，下载量超 253 万，是本周下载量最高的模型之一。

### 2. [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)
- 作者：microsoft | 👍 191 | ⬇️ 272,148
- 微软推出的视觉语言多模态模型，下载量超 27 万，受到企业用户青睐。

### 3. [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)
- 作者：microsoft | 👍 250 | ⬇️ 2,938
- 基于 Qwen3.5 架构的计算机视觉操作模型（computer-use），面向 GUI 自动化智能体场景。

### 4. [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)
- 作者：thinkingmachines | 👍 230 | ⬇️ 6,839
- 多模态对话模型的小尺寸版本，偏向轻量级多模态交互场景。

### 5. [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)
- 作者：MiniMaxAI | 👍 115 | ⬇️ 0
- MiniMax 新一代图像/文本到视频生成模型，基于 diffusers 架构，视频生成赛道新选手。

### 6. [lodestones/Kroma](https://huggingface.co/lodestones/Kroma)
- 作者：lodestones | 👍 129 | ⬇️ 0
- 基于 Krea2 的 LoRA 文本到图像模型，专为 ComfyUI 工作流设计。

### 7. [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)
- 作者：owensong | 👍 372 | ⬇️ 1,825
- 轻量级本地 TTS 模型（文本转语音），支持 CPU 推理，边缘部署友好。

### 8. [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)
- 作者：Audio8 | 👍 179 | ⬇️ 4,314
- 基于 ArkTTS 架构的语音合成模型，主打高质量自然语音生成。

### 9. [microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet)
- 作者：microsoft | 👍 150 | ⬇️ 8,468
- 微软语音识别新作，采用 BitNet 架构和 GGUF 格式，是 ASR 领域引入 1-bit 量化的前沿探索。

---

## 🔧 专用模型（代码 / 嵌入 / 特定任务）

### 1. [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)
- 作者：Kwaipilot | 👍 402 | ⬇️ 13,164
- 基于 Qwen3.5 MoE 架构的代码生成模型，专注代码任务，是本周最受关注的编程模型。

### 2. [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini)
- 作者：XYZAILab | 👍 366 | ⬇️ 903
- Aquila 系列轻量版，基于 Qwen3.5 MoE，具备多模态与 Agentic 搜索能力。

### 3. [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro)
- 作者：XYZAILab | 👍 335 | ⬇️ 1,094
- Aquila 系列专业版，Agentic Search 专用，面向深度检索与信息抽取场景。

### 4. [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2)
- 作者：EschaLabs | 👍 120 | ⬇️ 2,550
- 基于 Qwen3.6 的 MoE 微调版本，社区自研权重优化方案，值得关注的实验性项目。

---

## 📦 微调与量化（社区微调 / GGUF / 量化）

### 1. [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)
- 作者：DavidAU | 👍 1,343 | ⬇️ 1,372,285
- Qwen3.6 社区微调+GGUF 量化打包，下载量超 137 万，是社区微调生态繁荣的缩影。

### 2. [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)
- 作者：HauhauCS | 👍 3,243 | ⬇️ 1,892,654
- Qwen3.6 MoE 的激进风格 Uncensored 微调版，下载量近 190 万，社区热度极高。

### 3. [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF)
- 作者：LuffyTheFox | 👍 304 | ⬇️ 259,237
- Hermes 风格微调 + GGUF 量化版本，Uncensored 系列又一力作。

### 4. [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF)
- 作者：DavidAU | 👍 209 | ⬇️ 292,511
- Qwen3.5 大小尺寸 GGUF 微调版本，支持 IMATRIX 与 MTP，社区口碑良好。

### 5. [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)
- 作者：unsloth | 👍 343 | ⬇️ 48,707
- unsloth 官方将 DeepSeek V4 Flash 转换为 GGUF，便捷部署方案。

### 6. [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF)
- 作者：unsloth | 👍 251 | ⬇️ 88,481
- Kimi-K3 的 GGUF 量化版本，大幅降低推理资源门槛。

### 7. [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3)
- 作者：unsloth | 👍 226 | ⬇️ 1,277
- unsloth 针对 Kimi-K3 的优化版本，用于微调与部署优化。

### 8. [empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1)
- 作者：empero-ai | 👍 96 | ⬇️ 1,279
- 基于 Qwen3.5 的 27B 多模态微调模型，社区实验性作品。

---

## 📊 生态信号

**热门模型家族表现**：本周最强劲的三大势力——**Kimi-K3**（月之暗面多模态旗舰）、**DeepSeek-V4**（推理性能标杆）、**Qwen3.6**（社区微调生态之王）。Qwen 系列衍生版本层出不穷，已形成类似 Linux 发行版的繁荣生态。

**多模态全面主导**：30 个热门模型中有一半以上属于 image-text-to-text 类别，传统纯文本模型正在被快速超越，多模态能力已成为新一代基座模型的标配。

**开源权重持续碾压**：本周热门模型 100% 为开源权重发布，无闭源 API-only 模型。参数量从 3B 到 250B 覆盖全面，开源社区正以前所未有的速度迭代。

**量化与微调热火朝天**：GGUF 格式已从"可选"变为"标配"，unsloth 等工具链厂商扮演关键角色。Uncensored 风格微调大行其道，占据多个高下载量席位，同时 NVFP4、BitNet、压缩张量等新一代量化技术开始渗透前沿。

---

## 🔭 值得探索

1. **moonshotai/Kimi-K3** — 本周现象级发布，点赞量是第二名 5 倍，代表国产多模态模型的新高度。压缩张量技术值得深入观察，建议立即上手体验。

2. **microsoft/VibeVoice-ASR-BitNet** — ASR 与 1-bit 量化的跨界融合，BitNet 架构在语音领域首次大规模亮相，对边缘端语音识别部署有重要参考价值。

3. **baidu/Unlimited-OCR** — 下载量超 253 万，OCR 赛道能力显著领先。无论你是做文档解析、票据识别还是多模态检索，都建议实测其效果。

---

*本日报基于 2026-08-03 Hugging Face Hub 热门模型榜单自动生成，数据实时更新，仅供参考。*

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*