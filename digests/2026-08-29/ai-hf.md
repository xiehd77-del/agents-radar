# Hugging Face 热门模型日报 2026-08-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-29 06:07 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-29

## 📌 今日速览

Qwen 成为今日绝对焦点：**Qwen3.8-27B** 以超 13K 周点赞和 **345 万下载量**断层登顶，其 GGUF 量化版亦以 775 万下载量独占量化榜首，显示社区对多模态模型的强烈渴求。**Kimi-K3**（Moonshot AI）以 11K 点赞紧随其后，主打压缩张量技术的高效推理。**MiniMax-H3** 视频生成模型表现抢眼（4.6K 赞 / 484 万下载），而 GLM-5.3 新系列（含 Flash 变体）为智谱最新布局的信号。DeepSeek-V4-Flash 作为 DeepSeek 新入口亦受广泛关注。值得注意的生态趋势：多模态（图像+文本）正在成为大模型标配架构，“去审查”（abliterated/uncensored）社区微调版本持续保持旺盛生命力，代表用户对模型自由度的刚性需求。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 👍赞 | 📥下载 | 简介 |
|------|------|------|--------|------|
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,527 | 34 | 智谱最新轻量级对话模型，兼顾性能与效率，发布即受关注 |
| [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,171 | 0 | GLM-5.3 旗舰版，采用 MoE-DSA 架构，代表智谱旗舰级新方向 |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,790 | 3,959,575 | DeepSeek V4 系列轻量版本，395 万下载印证开源社区的高度认可 |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,069 | 2,675,145 | Moonshot 下一代多模态大模型，压缩张量技术实现高效率推理 |
| [Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 252 | 0 | 腾讯混元最新 4 代预览版，关注其后续完整开放 |
| [mini-H3-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 486 | 88,102 | 35B 总量激活 3B 的 MoE 模型，兼顾性能与低成本部署 |
| [phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 121 | 64 | 电话语音对话 LLM，开源 AI 语音代理基础设施的有益补充 |

### 🎨 多模态与生成（图像、视频、文本到X）

| 模型 | 作者 | 👍赞 | 📥下载 | 简介 |
|------|------|------|--------|------|
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,162 | 3,457,687 | 今日榜王，Qwen 3.8 系列主力，多模态对话能力强悍 |
| [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,181 | 4,810 | Qwen4 实验性探索旗舰，超前的多模态架构融合 |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,589 | 4,848,404 | 视频生成领域领跑者，支持图像/文本/视频全模态生成 |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,032 | 912,729 | 单文件扩散视频模型，创意影像生成的专业之选 |
| [MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,289 | 19,726 | 音乐生成模型，为多模态生态补齐音频创作维度 |
| [Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 170 | 240 | 新一代开源 TTS，语音合成质量值得关注 |
| [MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 159 | 3,344 | 基于 MiniMax-H3 的 ControlNet 联合控制方案 |
| [MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 136 | 609 | 为 MiniMax-H3 提供加速 LoRA 集合 |
| [Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 146 | 349 | 路透社发布的专业领域多模态轻量模型 |

### 📦 微调与量化（社区微调、GGUF、FP8）

| 模型 | 作者 | 👍赞 | 📥下载 | 简介 |
|------|------|------|--------|------|
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,153 | 7,758,790 | 最优量化实现，775 万下载彰显本地部署刚需 |
| [Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 884 | 509,270 | “去除审查”版本，支持多格式多硬件 |
| [Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,194 | 83,352 | Uncensored 家族 MLX 版本，适配 Apple Silicon 平台 |
| [Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,237 | 273,577 | FP8 量化版大热，平衡体积与能力 |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 808 | 1,666,948 | llama.cpp 生态高下载量去审查量化版 |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 531 | 188,460 | 同模型另一 GGUF 赛道，附带 abliterated 技术 |
| [Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 531 | 4,354 | 前沿模型当日即量化，unsloth 行动力强悍 |
| [Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 425 | 1,355,482 | 老牌量化作者，社区信赖度极高 |
| [Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 729 | 938,219 | “激进”去审查+高压缩量化，可本地化运行 |
| [GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 250 | 0 | GLM 新模型闪电极速量化跟进 |
| [Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 201 | 18,598 | 基础版 uncensored 全精度版本 |
| [Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 333 | 1,469,059 | 官方 MoE 轻量化 GGUF 版本 |
| [Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,511 | 0 | 修复 Qwen 对话模板的关键工具，极客必备，社区热转 |

---

## 🔍 生态信号

1. **Qwen 生态全面爆发**：Qwen3.8-27B 已成为全球开源社区的事实标准，从原版到 GGUF、FP8、MLX、abliterated 等衍生版本形成完整生态链。Qwen3.8-Flash-Next 提前预定下一代旗舰热点。
2. **“去审查”(abliterated) 成为显学**：至少 6 个 uncensored 衍生版本上榜并获巨大下载，反映用户对模型对齐限制的反弹，社区正在形成并行“自由模型”生态。
3. **视频生成进入竞争白热化**：MiniMax-H3 (484 万下载) 与 LTX-2.5 对标，多模态矩阵成为厂商护城河。
4. **开源权重持续主导**：DeepSeek、Qwen、GLM、MiniMax 均有开源可用模型，Kimi-K3 以压缩张量技术落地效率路线。
5. **量化层愈发关键**：unsloth、huihui-ai 等量化服务商成为社区基础设施，量化版本下载量已远超原版数倍。

---

## 💡 值得探索

1. **[Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — 最具性价比的本地部署首选。775 万下载量的超高人气验证其易用性。对于独立开发者，这是目前最强的“开箱即用”多模态模型。

2. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 采用压缩张量技术的新型架构。如果你在关注推理效率与模型压缩的底层技术，这是绝佳的研究样本，或有潜力改变部署成本结构。

3. **[Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** — 35B 总参数仅激活 3B 的 MoE 新秀，MIT 许可更利于商业落地。100 万+下载说明社区对其认可度正快速上升，值得深度评测挖潜。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*