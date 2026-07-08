# Hugging Face 热门模型日报 2026-07-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-08 02:51 UTC

---

好的，作为AI模型生态分析师，以下是2026年7月8日的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-08**

#### **今日速览**

今日榜单呈现出三大核心趋势：**“小参数大性能”的MoE架构**与**极致量化**是社区追捧的绝对主流；**多模态、视觉与Agent**成为模型标配，纯文本模型榜单占比显著下降；**开源社区与顶级厂商（NVIDIA、腾讯、百度）同台竞技**，模型微调与量化版下载量远超基座模型，显示出社区对“即用型”权重的强烈偏好。特别值得关注的是，基于Qwen3.5/3.6的一系列幽默、创意及未审查变体（如“Mythos”、“Aggressive”、“Fable”）异常活跃，反映出用户对模型个性和“祛毒”的旺盛需求。

---

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** ([链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive))
  作者: HauhauCS | ❤️ 2,551 | ⬇️ 2,823,988
  **一句话说明**：基于Qwen3.6-35B-MoE的“激进”未审查版，凭借极强的话题包容性和3.5T激活参数的极效推理，成为周度下载量之王。

- **tencent/Hy3** ([链接](https://huggingface.co/tencent/Hy3))
  作者: tencent | ❤️ 490 | ⬇️ 121
  **一句话说明**：腾讯发布的混元（Hunyuan）系列第三代模型，标志着国产大厂在通用语言生成领域的持续布局，但下载量较低，表明当前热度更偏向社区微调版。

- **deepseek-ai/DeepSeek-V4-Pro-DSpark** ([链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark))
  作者: deepseek-ai | ❤️ 424 | ⬇️ 15,538
  **一句话说明**：DeepSeek最新的V4专业版，附有arXiv论文，是当前推理与代码领域的强大闭源替代，但其开放性（权重下载量）相比社区模型仍有差距。

- **meituan-longcat/LongCat-2.0** ([链接](https://huggingface.co/meituan-longcat/LongCat-2.0))
  作者: meituan-longcat | ❤️ 140 | ⬇️ 385
  **一句话说明**：美团推出的超长上下文聊天模型，针对对话场景优化，表明业界对长上下文记忆型应用仍有持续追求。

- **mistralai/Leanstral-1.5-119B-A6B** ([链接](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B))
  作者: mistralai | ❤️ 157 | ⬇️ 157
  **一句话说明**：Mistral的119B参数MoE模型（仅激活6B），是参数效率的极致，但权重尚处于基地模型阶段，缺乏社区优化，关注度有限。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **nvidia/LocateAnything-3B** ([链接](https://huggingface.co/nvidia/LocateAnything-3B))
  作者: nvidia | ❤️ 2,657 | ⬇️ 1,424,958
  **一句话说明**：NVIDIA发布的3B参数视觉定位模型，可零样本在图像中定位任何物体，是榜单上最热的多模态专业工具。

- **baidu/Unlimited-OCR** ([链接](https://huggingface.co/baidu/Unlimited-OCR))
  作者: baidu | ❤️ 1,834 | ⬇️ 1,084,945
  **一句话说明**：百度的通用OCR模型，支持图像到文本的端到端识别，以其强大的文字识别能力成为实用型热门下载。

- **krea/Krea-2-Turbo** ([链接](https://huggingface.co/krea/Krea-2-Turbo))
  作者: krea | ❤️ 541 | ⬇️ 123,729
  **一句话说明**：Krea-2的Turbo加速版，专为文生图任务优化，是创意社区快速出图的利器。

- **empero-ai/Qwythos-9B-Claude-Mythos-5-1M** (及GGUF版，[链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M))
  作者: empero-ai | ❤️ 723 | ⬇️ 152,516
  **一句话说明**：一个融合了Claude式“神话”风格的开源模型，因其创意写作能力和有趣的角色扮演风格，吸引大量用户。

- **Qwen/Qwen-AgentWorld-35B-A3B** ([链接](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B))
  作者: Qwen | ❤️ 560 | ⬇️ 60,736
  **一句话说明**：Qwen官方发布的Agent世界模型，专为智能体交互任务设计，体现了大模型从“答题”到“行动”的转变。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF** ([链接](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF))
  作者: yuxinlu1 | ❤️ 2,641 | ⬇️ 674,977
  **一句话说明**：基于Gemma-4-12B的代码生成模型，融合“Fable”故事化训练与“Composer”架构，是当前最热门的开源代码量化模型。

- **google/tabfm-1.0.0-pytorch** ([链接](https://huggingface.co/google/tabfm-1.0.0-pytorch))
  作者: google | ❤️ 289 | ⬇️ 9,458
  **一句话说明**：Google的表格数据基础模型，支持零样本分类与回归，是数据分析从业者实现快速基线预测的首选。

- **eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B** ([链接](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B))
  作者: eric-venti-seeds | ❤️ 97 | ⬇️ 0
  **一句话说明**：为Flux2模型定制的阳光方向控制LoRA，能够精细化调整生成图像的光影，是专业图像创作者的精细化工具。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **zai-org/GLM-5.2** ([链接](https://huggingface.co/zai-org/GLM-5.2))
  作者: zai-org | ❤️ 3,596 | ⬇️ 281,584
  **一句话说明**：GLM系列最新5.2版本的MoE版本，凭借周点赞数第一及巨大的社区期待，成为本周现象级发布。

- **nvidia/Qwen3.6-27B-NVFP4** ([链接](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4))
  作者: nvidia | ❤️ 315 | ⬇️ 538,687
  **一句话说明**：NVIDIA采用Model Optimizer对Qwen3.6-27B进行的NF4量化版，为高性能硬件提供极致推理速度。

- **unsloth/Qwen3.6-27B-MTP-GGUF** ([链接](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF))
  作者: unsloth | ❤️ 992 | ⬇️ 2,842,118
  **一句话说明**：Unsloth优化的Qwen3.6-27B MTP(GGUF)版，结合了最流行的量化格式与社区最主流的模型，成为本周总下载量亚军。

- **deepreinforce-ai/Ornith-1.0-9B/35B (及GGUF版本)** ([链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B), [35B版](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B))
  作者: deepreinforce-ai | ❤️ 9B: 452, 35B: 357 | ⬇️ 9B GGUF: 454k, 35B GGUF: 502k
  **一句话说明**：Ornith 1.0系列是Qwen3.5的微调模型，其GGUF量化版下载量远超基座，表明社区对“即开即用”的中小规模微调模型需求旺盛。

- **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF** ([链接](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF))
  作者: yuxinlu1 | ❤️ 1,077 | ⬇️ 384,383
  **一句话说明**：另一个Gemma-4-12B的“Agentic”变体，表明代码和Agent是微调市场的两大核心方向。

- **huihui-ai/Huihui-GLM-5.2-abliterated-GGUF** ([链接](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF))
  作者: huihui-ai | ❤️ 185 | ⬇️ 7,349
  **一句话说明**：对GLM-5.2进行了“去审查(abliterated)”和GGUF量化，反映了用户对更少限制AI的强烈偏好。

---

#### **生态信号**

**1. Qwen家族“一统天下”，MoE与量化成为生态核心。** 榜单上约有50%的模型基于Qwen3.5/3.6系列，且绝大多数是GGUF或NVFP4量化版。这表明**Qwen已经成为开源社区的“默认基座模型”**，而“小模型、大激活”的MoE架构（如35B-A3B）与**GGUF格式**的结合，是当前本地部署和推理的黄金标准。

**2. 开源权重与闭源API的博弈：微调版热度>基座版。** 像DeepSeek-V4和Mistral的Leanstral，虽然基座模型有研究和论文支撑，但其直接下载量远低于基于Qwen/GLM的社区量化微调模型。这揭示了一个信号：**社区更青睐可立即下载、部署和运行的“成品”，而非需要自行处理的基础模型**。开源权重生态正在从“发布模型”转向“发布解决方案”。

**3. “去中心化微调”与“娱乐化驱动”崛起。** “Uncensored”、“Mythos”、“Aggressive”、“Fable”等标签的模型高频出现，说明**用户不再满足于标准的“助手”角色，而是追求更具个性、创造力和边界更开阔的交互体验。** 这种娱乐化、定制化的微调趋势，已成为社区活力的重要来源。

---

#### **值得探索**

1.  **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** ([链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive))
    **理由**：作为本周下载量冠军，它是极致性能、极致量化和极致话题包容性的结合体。如果你想体验最强“祛毒”且高效的MoE模型，这是首选。

2.  **unsloth/Qwen3.6-27B-MTP-GGUF** ([链接](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF))
    **理由**：由最受欢迎的量化工具构建的最主流模型。它代表了本地部署的“安全牌”和“性能标杆”，适合所有需要跑通用聊天/指令任务的研究者和开发者。

3.  **nvidia/LocateAnything-3B** ([链接](https://huggingface.co/nvidia/LocateAnything-3B))
    **理由**：它跳出了纯粹的文本生成，代表多模态能力成为标配的趋势。对任何想探索图像分割、视觉问答或机器人应用的团队来说，这个3B小模型是极佳的功能起点。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*