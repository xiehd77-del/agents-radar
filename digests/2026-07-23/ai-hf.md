# Hugging Face 热门模型日报 2026-07-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-23 02:53 UTC

---

好的，作为AI模型生态分析师，这是为您生成的2026年7月23日Hugging Face热门模型日报。

---

### **Hugging Face 热门模型日报 | 2026-07-23**

#### **今日速览**

本周榜单呈现出三大核心趋势：**模型规模的“两极分化”与极致量化**、**视觉语言模型（VLM）的全面普及**，以及**中国开源生态的强势崛起**。一方面，以 `zai-org/GLM-5.2` 和 `google/gemma-4-31B-it` 为代表的超大规模与高性能小模型同时获得极高关注；另一方面，超过一半的上榜模型具备图像处理能力。`prism-ml` 的 1-bit 和 2-bit 量化技术（Bonsai系列）证明了超低比特模型在消费级硬件上运行的可能性，而 `baidu/Unlimited-OCR` 和 `moonshotai/Kimi-K2.7-Code` 则展示了特定领域模型的强大吸引力。

---

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — 作者: zai-org | 👍 4,342 | ⬇️ 545,109
  - 一句话说明：ZAI 发布的下一代 MoE 架构旗舰大模型，凭借强大的综合对话能力与高关注度，稳居本周热度榜首。

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — 作者: google | 👍 3,330 | ⬇️ 12,113,203
  - 一句话说明：Google 的最新开源 VLM，31B 参数量级兼顾性能与效率，下载量破千万，是当前社区中最受欢迎的“官方”模型之一。

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — 作者: prism-ml | 👍 948 | ⬇️ 432,196
  - 一句话说明：采用创新的三值量化技术，将27B模型压缩至2-bit，在极低资源下运行，代表了量化技术的前沿探索。

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — 作者: prism-ml | 👍 598 | ⬇️ 1,404,962
  - 一句话说明：Bonsai系列的1-bit GGUF版本，是极致量化的代表，下载量已超百万，证明社区对在普通设备上运行大模型有强烈需求。

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** — 作者: upstage | 👍 308 | ⬇️ 0
  - 一句话说明：Upstage 推出的250B超大参数语言模型，尽管尚无下载，其发布本身就引发了社区对超大规模开源模型未来的讨论。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 作者: baidu | 👍 2,733 | ⬇️ 2,237,351
  - 一句话说明：百度出品的通用OCR模型，号称“无限制”识别，下载量超220万，是本周最成功的垂直领域多模态模型。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — 作者: HauhauCS | 👍 3,004 | ⬇️ 1,997,690
  - 一句话说明：基于Qwen3.6的“激进”MoE视觉模型，主打无审查和激烈风格，获得了近200万下载，反映了社区特定需求。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — 作者: empero-ai | 👍 2,418 | ⬇️ 2,133,420
  - 一句话说明：融合Qwen3.5和Claude Mythos风格的社区微调9B模型，提供GGUF量化版本，是社区二次创作的爆款案例。

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** — 作者: moonshotai | 👍 1,226 | ⬇️ 722,058
  - 一句话说明：月之暗面推出的代码专用多模态模型，性能强劲，是近期最受关注的代码助手之一。

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — 作者: nvidia | 👍 914 | ⬇️ 590,230
  - 一句话说明：NVIDIA 推出的流式语音识别模型，仅0.6B参数，将大模型能力高效应用于低延迟音频场景。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** — 作者: openbmb | 👍 155 | ⬇️ 58
  - 一句话说明：面向机器人操控任务的视觉-语言-动作（VLA）模型，体现了AI向具身智能渗透的趋势。

- **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** — 作者: openbmb | 👍 114 | ⬇️ 72
  - 一句话说明：与RobotManip同系列的机器人目标追踪模型，MiniCPM系列正成为边缘端机器人AI的重要基座。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — 作者: DavidAU | 👍 325 | ⬇️ 62,842
  - 一句话说明：社区“缝合怪”式微调的典型，将多个风格融合到Qwen基座并量化，体现了个人开发者对模型个性的极致探索。

- **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)** — 作者: prism-ml | 👍 165 | ⬇️ 25,273
  - 一句话说明：Bonsai模型的Apple Silicon (MLX) 1-bit版本，为Mac用户打开了运行大型本地模型的大门。

- **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)** — 作者: unsloth | 👍 120 | ⬇️ 7,377
  - 一句话说明：由知名微调工具团队unsloth提供的`Inkling`模型GGUF版本，降低了热门模型在本地部署的门槛。

---

#### **生态信号**

1.  **“中国力量”与“多模态”双轮驱动**：榜单上，`zai-org`、`baidu`、`moonshotai`、`Nanbeige` 等中国团队的模型占据了多个核心位置，且绝大多数是多模态模型。这表明中国AI开源社区不仅在模型规模上紧跟步伐，在应用场景（OCR、代码、视频生成）上更显务实和活跃。

2.  **开源权重模型依然是主流，但社区微调（“魔改”）生态空前繁荣**：Google的Gemma-4和ZAI的GLM-5.2直接提供原始权重，吸引了大量下载。同时，以 `DavidAU` 和 `empero-ai` 为代表的社区微调模型，通过独特的“人设”或风格（如“无审查”、“Aggressive”）和广泛的GGUF量化版本，创造了惊人的传播效果。

3.  **超低比特量化（<2-bit）成为新战场**：`prism-ml` 的Bonsai系列从1-bit到三值量化，该团队持续探索模型压缩的极限。这种量化方式牺牲了一定的模型质量，但换取了在手机、笔记本等设备上运行大型模型的可能性，可能预示着边缘AI部署的新范式。

---

#### **值得探索**

1.  **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — **理由**：作为Google官方开源的最新VLM，其综合性能、广泛的硬件支持和巨大的下载量已经证明了其作为多模态研究基座模型的潜力。建议所有从事VLM应用开发的团队将其作为首要评估对象。

2.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — **理由**：在文档理解、票据识别等实际业务中，一个强大且开箱即用的OCR模型是刚需。该模型超高的下载量预示着其优异的性能和泛化能力，是解决此类问题的首选工具。

3.  **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — **理由**：对于想研究**模型压缩前沿**或需要在**无GPU的本地环境**运行27B级模型的开发者，这个模型是必试的。考察其1-bit量化在保持多少能力的同时，带来了多大的效率提升，对边缘AI部署极具参考价值。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*