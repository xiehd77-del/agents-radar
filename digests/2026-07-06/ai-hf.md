# Hugging Face 热门模型日报 2026-07-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-06 13:25 UTC

---

好的，这是为您生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-06**

#### **今日速览**

今日 Hugging Face 生态呈现出清晰的“多模态与量化齐飞”格局。**Qwen 家族**（3.5/3.6系列）及其衍生模型在榜单中占据绝对优势，多个基于 Qwen 的 MoE 模型（如 HauhauCS 的 35B-A3B 版本）和量化版本（如 unsloth 的 27B 版本）下载量惊人。**NVIDIA** 与 **Google** 等巨头持续输出专用模型，分别推出了超低精度的 **NVFP4** 量化模型和表格基础模型 **TabFM**。此外，安全与推理效率成为新热点，如 **BugTraceAI** 的网络安全专用模型和 **nvidia/LocateAnything-3B** 的高效视觉定位模型表现亮眼。社区量化活动（GGUF）依然活跃，而 **GLM-5.2** 和 **DeepSeek-V4-Pro** 作为中国厂商的代表，也进入了大众视野。

---

#### **热门模型**

##### 🧠 **语言模型（LLM、对话模型、指令微调）**

*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者：zai-org | 点赞：3,505 | 下载：231,218
    *   说明：智谱最新一代 MoE 对话模型，凭借强大的对话能力和创新的 Dense-Sparse Attention（DSA）架构在排行榜上人气极高。
*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
    *   作者：deepseek-ai | 点赞：400 | 下载：14,276
    *   说明：DeepSeek 最新发布的 V4 专业版，采用 DSpark 技术，是当前开源社区中推理能力最强的模型之一。
*   **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)**
    *   作者：mistralai | 点赞：127 | 下载：106
    *   说明：Mistral 推出的超大规模 MoE 模型（119B 参数，仅激活 6B），代表了极端效率的探索方向，目前仍处于早期发布阶段。
*   **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)**
    *   作者：meituan-longcat | 点赞：91 | 下载：43
    *   说明：美团推出的长上下文对话模型，专为需要处理极长历史对话的场景设计，目前可能处于小范围测试期。

##### 🎨 **多模态与生成（图像、视频、音频、文本到X）**

*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者：HauhauCS | 点赞：2,512 | 下载：2,910,241
    *   说明：基于 Qwen3.6 的 MoE 模型（35B总参/3B活跃），去审查且风格激进。极高的下载量表明多模态与“无审查”概念的强需求结合非常成功。
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   作者：nvidia | 点赞：2,627 | 下载：1,340,559
    *   说明：NVIDIA 推出的视觉定位小模型（3B），能根据文本描述在图像中精确找物体，因其高效和精准性成为多模态领域的明星。
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    *   作者：krea | 点赞：522 | 下载：109,470
    *   说明：Krea 推出的第二代文本到图像模型 Turbo 版，在生成速度和画质上取得了突破，是 AIGC 创作的热门选择。
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   作者：baidu | 点赞：1,772 | 下载：1,070,230
    *   说明：百度推出的全能 OCR 模型，支持超高分辨率和复杂场景的文字识别，下载量巨大，是行业应用的标杆。
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
    *   作者：Qwen | 点赞：551 | 下载：57,835
    *   说明：通义千问官方发布的智能体专用模型（35B总参/3B活跃），针对工具调用和环境交互进行了深度优化，标志着“模型即智能体”的趋势。

##### 🔧 **专用模型（代码、数学、医疗、嵌入）**

*   **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)**
    *   作者：BugTraceAI | 点赞：136 | 下载：12,438
    *   说明：专注于网络安全（尤其是漏洞分析与渗透测试）的量化模型，填补了开源安全大模型的空白。
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
    *   作者：google | 点赞：242 | 下载：7,036
    *   说明：Google 推出的表格数据基础模型，能够在零样本下完成分类与回归任务，是企业级结构化数据分析的利器。

##### 📦 **微调与量化（社区微调、GGUF、AWQ）**

*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   作者：yuxinlu1 | 点赞：2,612 | 下载：664,319
    *   说明：基于 Google Gemma 4 的社区微调代码版，集成 Fable5 和 Composer2.5 技术。高点赞数证明其在代码生成领域的优质表现。
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   作者：unsloth | 点赞：971 | 下载：2,818,499
    *   说明：Unsloth 团队专为本地部署优化的 Qwen3.6 量化版（多令牌预测）。极致的推理效率和便捷性使其成为榜单下载量冠军。
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   作者：empero-ai | 点赞：1,599 | 下载：1,617,508
    *   说明：结合了 Qwen 架构与 Mythos 风格数据集的社区微调模型，其 GGUF 量化版下载量超 160 万，是社区创作与部署的热点。
*   **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**
    *   作者：nvidia | 点赞：283 | 下载：430,676
    *   说明：NVIDIA 推出采用其专有 NVFP4 精度的 Qwen 模型。代表了超低精度量化（4位浮点）在保持性能上的重要进展。

---

#### **生态信号**

*   **模型家族势头：** **Qwen 3.x 系列**的影响力无可撼动，无论是官方（Qwen-AgentWorld）还是社区（HauhauCS, unsloth），都以 Qwen 为基底进行二次创作，形成了庞大的生态圈。**Gemma 4** 和 **GLM-5.2** 作为谷歌和智谱的强有力竞品，也建立了自己的活跃社区。
*   **开源 vs 闭源：** 开源权重模型（Safetensors/GGUF）依然是绝对主流。社区不再满足于基础模型，更活跃于**基于开源模型进行“微调”和“量化”** 的再创造，如去审查（Abliterated）、专用化（Coder）和本地化（GGUF）。**NVIDIA** 等硬件巨头也深度参与开源生态，提供针对其硬件优化的模型。
*   **量化与微调活动：** **GGUF 格式**和**本地部署**仍是社区的核心需求。下载量前十中，GGUF 模型占据半壁江山。此外，**NVFP4** 和 **MTP (Multi-Token Prediction)** 等新技术正在重塑效率的边界。社区微调呈现出“极端化”趋势：一端是极限性能（如 Leanstral），另一端是极致开放与本地化（如 GGUF 量化）。

---

#### **值得探索**

1.  **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**: 如果你从事数据分析或 Kaggle 竞赛，这个专门为表格数据设计的基础模型值得深入研究。它可能改变我们处理结构化数据的方式，实现零样本预测。
2.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：对于图像理解和多模态 RAG 应用开发者，这个 3B 的视觉定位模型是完美的组件。体积小、效果好，可以轻松部署并集成到现有流程中。
3.  **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)**：如果你是安全工程师或红蓝队成员，这是一个不容错过的利器。它代表了开源大模型在垂直、专业领域的深化，将 AI 能力精准赋能到网络安全一线。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*