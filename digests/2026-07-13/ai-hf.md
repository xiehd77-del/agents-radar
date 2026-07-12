# Hugging Face 热门模型日报 2026-07-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-12 22:34 UTC

---

好的，作为AI模型生态分析师，以下是根据您提供的2026-07-13数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-13**

#### **今日速览**

本周 Hugging Face 生态呈现三大亮点：**Qwen 3.5/3.6 家族**衍生模型继续霸榜，从通用对话到多模态推理，社区对其的二次创作热情极高；**NVIDIA** 强势崛起，凭借 `LocateAnything-3B` 和 `Nemotron-Labs` 系列在视觉定位与 MoE 大模型两条赛道同时发力。同时，**百度的 Unlimited-OCR** 和 **Cohere 的阿拉伯语语音识别模型** 表明，企业级垂直场景（OCR、ASR）的专用模型正成为新的增长点。

---

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）
*   **zai-org/GLM-5.2** ([链接](https://huggingface.co/zai-org/GLM-5.2))
    *   作者: zai-org | 点赞: 3,853 | 下载: 441,413
    *   💬 基于GLM架构的对话模型，以极高的点赞数成为本周最受关注的纯文本LLM，展现了其强大的对话能力。
*   **meituan-longcat/LongCat-2.0** ([链接](https://huggingface.co/meituan-longcat/LongCat-2.0))
    *   作者: meituan-longcat | 点赞: 182 | 下载: 1,767
    *   💬 美团推出的长上下文文本生成模型，专注于处理超长文档和复杂对话场景。
*   **SupraLabs/Supra-Router-51M** ([链接](https://huggingface.co/SupraLabs/Supra-Router-51M))
    *   作者: SupraLabs | 点赞: 106 | 下载: 1,434
    *   💬 一个轻量级（51M）的“路由器”模型，用于在多个专家模型间做智能调度，代表了MoE路由策略的精细化探索。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **baidu/Unlimited-OCR** ([链接](https://huggingface.co/baidu/Unlimited-OCR))
    *   作者: baidu | 点赞: 1,942 | 下载: 1,430,656
    *   🖼️ 百度推出的通用OCR模型，下载量超过140万，证明了其在复杂文档识别和图像文字提取场景下的强大实用性。
*   **nvidia/LocateAnything-3B** ([链接](https://huggingface.co/nvidia/LocateAnything-3B))
    *   作者: nvidia | 点赞: 2,714 | 下载: 1,501,653
    *   🖼️ NVIDIA的3B参数视觉定位模型，能根据自然语言在图像中精准定位物体，支持“指哪看哪”的交互体验。
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** ([链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF))
    *   作者: empero-ai | 点赞: 2,043 | 下载: 1,967,677
    *   🎬 基于Qwen 3.5的高下载量多模态模型（GGUF版），擅长处理图像与文本混合输入，并具备推理能力。
*   **Alissonerdx/LTX-Best-Face-ID** ([链接](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID))
    *   作者: Alissonerdx | 点赞: 107 | 下载: 0
    *   🎬 专注于文本到视频生成的LoRA模型，能保持特定人物身份特征，是视频生成领域个性化控制的重要尝试。
*   **robbyant/lingbot-world-v2-14b-causal-fast** ([链接](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast))
    *   作者: robbyant | 点赞: 82 | 下载: 0
    *   🎬 “世界模型”路线下的图像到视频生成模型，致力于根据静态图像预测和生成后续动态画面。
*   **CohereLabs/cohere-transcribe-arabic-07-2026** ([链接](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026))
    *   作者: CohereLabs | 点赞: 95 | 下载: 9,860
    *   🎤 Cohere Labs推出的阿拉伯语自动语音识别模型，针对该语种进行了专项优化，填补了小语种ASR领域的空白。
*   **nineninesix/gepard-1.0** ([链接](https://huggingface.co/nineninesix/gepard-1.0))
    *   作者: nineninesix | 点赞: 84 | 下载: 2,263
    *   🔊 文本到语音模型，致力于生成更自然、富有表现力的人声。

##### 🔧 专用模型（代码、数学、医疗、嵌入）
*   **google/tabfm-1.0.0-pytorch** ([链接](https://huggingface.co/google/tabfm-1.0.0-pytorch))
    *   作者: google | 点赞: 354 | 下载: 20,973
    *   📊 Google官方的表格数据基础模型，支持零样本分类与回归，标志着Foundation Model范式向表格数据的正式迁移。
*   **nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4** ([链接](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4))
    *   作者: nvidia | 点赞: 112 | 下载: 34,796
    *   🧩 NVIDIA推出的75B参数MoE模型，采用NVFP4新精度格式，专门用于复杂推理和“拼图”式问题解决。
*   **OpenMOSS-Team/MOSS-Transcribe-Diarize** ([链接](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize))
    *   作者: OpenMOSS-Team | 点赞: 126 | 下载: 14,491
    *   🎙️ MOSS团队推出的音频转写与说话人日志模型，能同时完成语音转文字和“谁说了什么”的任务。

##### 📦 微调与量化（社区微调、GGUF）
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** ([链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF))
    *   作者: empero-ai | 点赞: 2,043 | 下载: 1,967,677
    *   🚀 **本周下载量冠军**（近200万），Qwythos的GGUF量化版，专为本地部署优化，证明社区对“高性能+可部署”模型的需求旺盛。
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** ([链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive))
    *   作者: HauhauCS | 点赞: 2,673 | 下载: 2,596,384
    *   🚀 **本周下载量亚军**（近260万），基于Qwen 3.6的“无审查”MoE模型，以激进风格和视觉能力吸引大量关注。
*   **unsloth/Qwen3.6-27B-MTP-GGUF** ([链接](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF))
    *   作者: unsloth | 点赞: 1,057 | 下载: 2,905,019
    *   🚀 **本周下载量季军**（超290万），Unsloth团队官方出品，支持MTP（多记号预测）的Qwen3.6高分量化版，推理效率极高。
*   **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF** ([链接](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF))
    *   作者: yuxinlu1 | 点赞: 1,159 | 下载: 445,368
    *   🚀 基于Gemma 4的智能体（Agentic）模型GGUF版，针对编码和终端操作进行了优化，是Agent生态在个人设备落地的重要一步。
*   **deepreinforce-ai/Ornith-1.0-35B-GGUF** ([链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF))
    *   作者: deepreinforce-ai | 点赞: 855 | 下载: 1,347,036
    *   🚀 35B参数的通用对话模型GGUF版，下载量超过134万，表明35B级别是当前本地部署的“甜蜜点”。

---

#### **生态信号**

*   **Qwen 生态独领风骚**：榜单中近三分之一的模型基于Qwen 3.5或3.6进行微调或量化。从 `Qwythos` 到 `HauhauCS`，社区围绕Qwen形成了强大的二次开发生态，覆盖了从“全能通用”到“无审查激进”的各个细分需求。Qwen已成为当前开源LLM的“安卓”。
*   **“量化+本地化”是主旋律**：GGUF格式模型在下载量上具有压倒性优势。30个热门模型中有11个是GGUF格式，且占据了下载量前五中的四席。这清晰地表明市场需求正从“云端API调用”转向“高性价比的本地私有化部署”。
*   **企业力量与垂直场景**：百度、NVIDIA、Cohere等巨头的专业模型（OCR、视觉定位、ASR）在点赞和下载上表现抢眼。这释放了一个信号：大模型竞争已进入“深水区”，拥有场景数据和特定领域专精的公司，其模型价值正加速凸显。

---

#### **值得探索**

1.  **nvidia/LocateAnything-3B**：它是NVIDIA在感知AI领域的前沿作品。如果您对构建“能看懂图片的AI助手”或“具身智能机器人”感兴趣，这个模型是当前最先进的（SOTA）视觉定位开源方案之一。
2.  **unsloth/Qwen3.6-27B-MTP-GGUF**：对于希望以消费级硬件（如4090、3090）运行顶级模型的用户，这是**最具性价比**的选择。MTP技术能带来显著的生成速度提升，结合Unsloth的极致量化，代表了本地高性能推理的天花板。
3.  **zai-org/GLM-5.2**：在Qwen光芒下，GLM-5.2凭借纯文本对话的口碑获得了极高关注。它是探索“非Qwen”路线强大的中文对话能力、并与之对比的不二之选。

---
*本日报由 [agents-radar](https://github.com/kky-wollu/agents-radar) 自动生成。*