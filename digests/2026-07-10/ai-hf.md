# Hugging Face 热门模型日报 2026-07-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-10 03:31 UTC

---

好的，作为AI模型生态分析师，以下是根据您提供的2026年7月10日数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026年7月10日**

#### **今日速览**

本周 Hugging Face 生态呈现“极致性能”与“极致量化”双轮驱动格局。腾讯、深度求索、英伟达等巨头的新一代大规模MoE模型（Hy3、DeepSeek-V4、Nemotron系列）成为社区焦点。与此同时，社区对模型进行GGUF量化、微调和无审查版本的需求极其旺盛，多个高下载量模型均为量化版，反映了边缘部署和个人使用的强烈渴望。此外，**“Fable”系列微调**和**“Krea-2”图像生成生态**的爆发，标志着社区微调进入了高度专业化和IP化的新阶段。

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞/下载 | 一句话说明 |
| :--- | :--- | :--- | :--- |
| **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | tencent | 617 / 5,572 | 腾讯最新混元大模型，推测为新一代MoE架构，技术风向标。 |
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org | 3,732 / 362,300 | 智谱AI的GLM系列最新迭代，本周点赞榜首，对话能力极强，社区认可度高。 |
| **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | deepseek-ai | 459 / 29,230 | 深度求索发布的V4 Pro版，附带技术论文（arxiv:2606.19348），代表前沿开源能力。 |
| **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** | nvidia | 87 / 16,959 | 英伟达超大规模MoE模型，75B参数仅9B激活，配合NVFP4量化，极致推理效率。 |
| **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** | nvidia | 333 / 748,054 | 英伟达优化的Qwen3.6量化版，NVFP4格式，针对自家硬件深度优化，下载量巨大。 |
| **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** | mistralai | 179 / 258 | Mistral发布的119B MoE模型，仅6B激活，表明其持续探索稀疏模型的极致比例。 |
| **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)** | open-gigaai | 96 / 0 | 一个可能用于世界模型或大型仿真训练的基础模型，概念超前。 |

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞/下载 | 一句话说明 |
| :--- | :--- | :--- | :--- |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 2,687 / 1,447,244 | 英伟达的高效目标定位模型，将视觉定位能力推向3B轻量级，应用场景广泛。 |
| **[Krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | krea | 570 / 157,302 | Krea-2系列的Turbo加速版，图像生成速度更快，带动了整个Krea-2生态（ControlNet、LoRA）。 |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** | empero-ai | 749 / 179,378 | 基于Qwen3.5的“神话”系列微调，具备图像理解能力，GGUF版本下载量极高。 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 2,599 / 2,716,428 | 热度极高的无审查版Qwen3.6 MoE模型，下载量仅次于量化版，反映部分用户对“无限制”的需求。 |
| **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | OpenMOSS-Team | 75 / 2,537 | 复旦大学MOSS团队的语音转录+说话人分离模型，将音频处理能力与文本生成结合。 |
| **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** | bottlecapai | 188 / 2,189 | 为Qwen3.6增加了先进的“思考”能力，多模态推理更深入。 |

##### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞/下载 | 一句话说明 |
| :--- | :--- | :--- | :--- |
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 1,904 / 1,246,042 | 百度的“无限”OCR模型，可能是超长文档处理或多场景识别的突破性应用。 |
| **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | google | 330 / 16,374 | Google发布的表格基础模型，实现表格数据的零样本分类与回归，意义重大。 |
| **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | yuxinlu1 | 2,670 / 703,735 | 基于Gemma-4微调的强大代码模型，结合Fable系统，GGUF量化后下载量爆棚。 |
| **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | yuxinlu1 | 1,117 / 418,171 | 同一作者基于Gemma-4构建的智能体导向模型，专注于终端和工具调用。 |
| **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** | InternScience | 437 / 23,112 | 书生团队的智能体专用模型，基于Qwen3.5 MoE架构，聚焦Agent能力。 |

##### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞/下载 | 一句话说明 |
| :--- | :--- | :--- | :--- |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero-ai | 1,938 / 1,875,602 | **本周下载量之王**，社区对高质量、量化版多模态模型的渴望达到顶峰。 |
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 1,025 / 2,894,918 | **本周下载量亚军**，Unsloth团队高效量化的Qwen3.6版，是本地部署的首选之一。 |
| **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | deepreinforce-ai | 821 / 957,721 | 一个独立的35B模型的全系列量化发布，下载量极高，表明社区对非主流强模型同样关注。 |
| **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** | GnLOLot | 143 / 2,239 | 极小模型（1B）的“思考”能力微调，证明“蒸馏”和“小模型大能力”是重要趋势。 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 822 / 0| 一个修复聊天模板的轻量级项目，获得高赞，说明社区对模型可用性和标准化的强烈诉求。 |

#### **生态信号**

1.  **模型家族“百家争鸣”，但Qwen生态一枝独秀**：Qwen3.5/3.6系列及其衍生模型（微调、量化、无审查）占据了榜单的半壁江山，形成了类似Linux内核的庞大生态。英伟达的Nemotron和Google的Gemma-4紧随其后，显示出大厂开源模型对社区微调方向的强引导力。
2.  **“Fable”微调框架异军突起**：榜单中出现多个以“Fable”命名的模型（如Qwythos中的Mythos-5-1M, Gemma-4的Fable5系列），表明一个强大的、系统性的微调配方（可能结合了高质量的合成数据与RL）正在社区中流传并取得巨大成功。
3.  **从“跑起来”到“跑得爽”**：量化（GGUF）已成为基操，但有趣的信号是，**NVFP4**（英伟达私有格式）模型开始占据大量下载，这意味着模型部署正从CPU友好向特定硬件加速演进。同时，针对Agent和Code的专用微调模型的出现，表明AI应用正从聊天机器人向更复杂的“数字员工”进化。

#### **值得探索**

1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：建议尝试。它将顶尖的视觉定位能力压缩到3B参数，非常适合在边缘设备或实时系统中集成“用语言找东西”的功能，极有可能成为下一阶段AI硬件应用的标准组件。
2.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**：作为本周点赞第一的模型，值得下载体验其对话能力。它在兼顾了“中文原生”和“通用对话”两大优势，是对抗Llama和Qwen的国内重要力量，其技术细节值得深入研究。
3.  **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**：强烈推荐给研究Agent和自动化的开发者。这个模型代表了当前社区最前沿的微调方向——将模型的能力从“聊”导向“做”，并进行了高效量化，是构建终端Agent的绝佳起点。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*