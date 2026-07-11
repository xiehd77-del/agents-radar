# Hugging Face 热门模型日报 2026-07-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-11 02:47 UTC

---

好的，作为AI模型生态分析师，以下是2026年7月11日的Hugging Face热门模型日报。

---

### **Hugging Face 热门模型日报 | 2026-07-11**

#### **今日速览**

本周Hugging Face生态呈现高度聚焦态势：**Qwen 3.6** 及其衍生模型与**NVIDIA**的系列模型占据了榜单的半壁江山，显示出大厂与旗舰家族的双重统治力。**GGUF量化版本**的下载量遥遥领先，社区对本地化、高效率推理的需求依然旺盛。此外，**多模态模型**（特别是视觉-语言）和**MoE（混合专家）架构**已经成为新发模型的标准配置，标志着行业已全面从单一文本竞赛转向效率与多模态能力的比拼。

---

#### **热门模型**

**🧠 语言模型（LLM、对话模型、指令微调）**

1.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 👍 3,786 | ⬇️ 392,655
    - 说明：GLM系列最新旗舰，主打对话与推理能力。凭借高点赞数，是本周社区最受关注的国产通用大模型之一，延续了GLM家族在学术与工业界的强影响力。

2.  **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | 作者: deepreinforce-ai | 👍 836 | ⬇️ 1,085,554
    - 说明：基于MIT许可的35B模型量化版。高下载量证明了其在社区中作为开放、可商用的中大规模LLM受欢迎程度。

3.  **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | 作者: deepseek-ai | 👍 463 | ⬇️ 33,088
    - 说明：DeepSeek V4系列的Pro优化版。尽管发布时间较早，但凭借其顶尖的性能和开创性的架构（如DSpark），依然保持较高热度。

4.  **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | 作者: conradlocke | 👍 161 | ⬇️ 0
    - 说明：针对Krea-2模型的身份保持编辑LoRA。虽然下载量为0，但点赞数表明社区对其“在不破坏身份的前提下进行图像编辑”的功能非常期待。

**🎨 多模态与生成（图像、视频、音频、文本到X）**

1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | 作者: nvidia | 👍 2,701 | ⬇️ 1,456,269
    - 说明：NVIDIA推出的3B参数引用分割与定位（Referring Segmentation）模型。高点赞与下载量表明，精细化的图像理解和交互能力是当前多模态领域的蓝海。

2.  **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 作者: empero-ai | 👍 1,980 | ⬇️ 1,909,705
    - 说明：基于Qwen模型进行多模态数据微调的9B推理模型量化版。极高的下载量揭示了“Qwen+推理+微调”组合的巨大社区吸引力。

3.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 👍 1,921 | ⬇️ 1,319,683
    - 说明：百度的“无限”OCR模型。作为解决复杂文档识别与理解的实际工具模型，其下载量紧随其后，说明实用的多模态功能需求巨大。

4.  **[AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces)** | 作者: AliesTaha | 👍 198 | ⬇️ 4,875
    - 说明：一个专注于“寓言”故事生成的微调模型。尽管体量小，但明确的任务定位表明了社区在垂直叙事场景上的探索兴趣。

**🔧 专用模型（代码、数学、医疗、嵌入）**

1.  **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | 作者: google | 👍 345 | ⬇️ 18,626
    - 说明：Google发布的表格基础模型。专注于零样本表格分类与回归，标志着基础模型范式正在从语言和图像向结构化数据领域渗透。

2.  **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | 作者: froggeric | 👍 836 | ⬇️ 0
    - 说明：为Qwen模型提供修正后的对话模板。虽然下载量为0，但点赞数高，反映了社区对模型易用性（尤其是模板标准化）的重视程度。

**📦 微调与量化（社区微调、GGUF、AWQ）**

1.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 2,626 | ⬇️ 2,660,170
    - 说明：基于Qwen 3.6的35B MoE模型的无限制版量化。**本周下载量冠军**，充分展示了社区对“最新版本+MoE+高性能”组合的狂热追捧。

2.  **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | 作者: unsloth | 👍 1,037 | ⬇️ 2,895,457
    - 说明：Unsloth社区量化版的Qwen 3.6 27B模型。Unsloth作为最活跃的量化社区之一，其版本总能获得极高的置信度和下载量。

3.  **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | 作者: yuxinlu1 | 👍 1,135 | ⬇️ 427,668
    - 说明：对Gemma 4 12B模型的深度微调版本，强调“代理（agentic）”和“创作”能力，是社区探索Agent应用的量化代表。

4.  **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** | 作者: GnLOLot | 👍 158 | ⬇️ 9,029
    - 说明：在MiniCPM 1B小模型上注入“思考”能力的微调版。低参数量模型经过精细微调，在小模型推理能力探索上具有代表性。

5.  **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** | 作者: unsloth | 👍 125 | ⬇️ 31,895
    - 说明：Unsloth对DeepSeek V4 Flash版本的量化。延续了“DeepSeek+Unsloth”这一黄金量化组合的热度。

#### **生态信号**

**模型家族统治力**：**Qwen 3.6** 无疑是最强音，从原始版、MoE版、无限制版到各类量化版（共6个相关模型上榜），形成庞大的生态矩阵。**NVIDIA** 则以“遍地开花”的态势，在定位（Locate）、量化（NVFP4）和专用模型（Audex、Puzzle）上多点布局，展示了其强大的技术渗透力。**MoE架构**已成为新模型标配，行业共识是：用更少的激活参数换取更大的模型容量和性能。

**开源 vs 闭源**：开源社区极度活跃，但开源模型公司（如DeepSeek, Alibaba, Zhipu AI）与硬件巨头（NVIDIA）正通过发布重磅基础模型占据上游。社区微调（如Unsloth、empero-ai）则在易用性和特定场景（如无审查）上持续创造价值，形成清晰的产业链条：**大厂造轮，社区调优，用户落地**。

**量化与微调活动**：**GGUF**是绝对的下载量王者，几乎每个高点赞模型都伴随着高下载的GGUF版本。社区对模型落地（消费级硬件、边缘计算）的渴望远超对原始模型的好奇。同时，“微调+量化”的二合一模式（如Qwythos）是最高效的社区贡献路径。

#### **值得探索**

1.  **nvidia/LocateAnything-3B**: 这不仅是NVIDIA技术实力的体现，更代表了一个新的AI用例类别——“精确的空间与视觉理解”。研究它可以帮助理解多模态模型的下一个前沿。
2.  **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**: 作为下载量冠军，它代表了社区对“最新、最强、无审查”模型的最真实渴望。研究其微调方法和性能曲线，能洞察开源模型社区的审美与需求。
3.  **froggeric/Qwen-Fixed-Chat-Templates**: 虽然不是一个重量级模型，但它高点赞、0下载的矛盾数据，揭示了AI工程化中“易用性鸿沟”的痛点。研究其修复的模板问题，对于构建稳定、标准化的AI应用有极高参考价值。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*