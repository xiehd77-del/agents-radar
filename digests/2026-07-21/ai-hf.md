# Hugging Face 热门模型日报 2026-07-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-21 02:49 UTC

---

好的，作为 AI 模型生态分析师，以下是根据您提供的数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026年7月21日**

#### **今日速览**

本周 Hugging Face 生态呈现出三大特征：**Google Gemma-4** 凭借官方权重与出色的多模态能力，摘得下载量桂冠，展现了顶级基础模型的强大号召力；**百度**的 OCR 模型成为实用主义明星，下载量同样突破百万，说明高质量专用模型需求旺盛；同时，**以 Qwen 3.6 和 Bonsai 系列为核心的社区微调与极致量化活动异常活跃**，尤其是 1-bit / 2-bit / Ternary 量化的模型在下载量上表现亮眼，标志着“模型瘦身”和“本地化部署”成为社区主流趋势。

---

#### **热门模型**

##### **🧠 语言模型（LLM、对话模型、指令微调）**

*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** (zai-org | 👍4,228 | ⬇️531,947)
    *   基于 MoE 架构的国产大模型新版本，本周点赞数最高，社区对高能力密度的原生多模态 MoE 模型兴趣浓厚。
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** (tencent | 👍848 | ⬇️13,698)
    *   腾讯出品的 HyV3 系列基础模型，标志着大型科技公司持续向开源社区输出高质量文本生成权重。
*   **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** (Cactus-Compute | 👍292 | ⬇️950)
    *   专为函数调用和工具使用优化的 JAX 模型，功能型小模型正在成为 Agent 生态的重要基础设施。
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** (OpenMOSS-Team | 👍293 | ⬇️87,533)
    *   集语音转录和说话人分离于一体的端到端模型，代表了语音处理任务向统一模型演进的趋势。

##### **🎨 多模态与生成（图像、视频、音频、文本到X）**

*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** (google | 👍3,298 | ⬇️11,987,240)
    *   谷歌的最新多模态指令模型，拥有惊人的千万级下载量，凭借顶级性能和官方背书成为本周绝对的现象级模型。
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** (baidu | 👍2,453 | ⬇️2,122,848)
    *   百度推出的通用 OCR 模型，下载量超 200 万，证明了在文档数字化、票据识别等场景中，高精度专用模型的市场价值。
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** (HauhauCS | 👍2,937 | ⬇️2,007,025)
    *   基于 Qwen 3.6 进行 MoE 化改造与去审查优化的社区版 Vision-Language 模型，下载量极高，体现了社区对“高能力 + 低审查”定制化多模态模型的强劲需求。
*   **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** (Wan-AI | 👍145 | ⬇️2,408)
    *   华为旗下的图像转视频模型，专注于舞蹈生成，代表了视频生成领域向垂直场景（如内容创作、娱乐）深入发展。
*   **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** (openbmb | 👍135 | ⬇️0)
    *   MiniCPM 系列下的机器人操作模型（VLA），虽然无下载记录，但其出现标志着开源社区开始向具身智能领域布局。

##### **🔧 专用模型（代码、数学、医疗、嵌入）**

*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** (moonshotai | 👍1,178 | ⬇️713,992)
    *   Moonshot AI 推出的代码专用模型，采用压缩张量技术，在保持代码能力的同时大幅降低显存占用，是该类模型的新标杆。
*   **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)** (nvidia | 👍87 | ⬇️61,708)
    *   英伟达发布的新一代 1B 句子嵌入模型，用于语义搜索和 RAG 场景，显示头部厂商依然在精炼基础模型。

##### **📦 微调与量化（社区微调、GGUF、AWQ）**

*   **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** (prism-ml | 👍857 | ⬇️338,945)
*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** (prism-ml | 👍542 | ⬇️1,262,894)
    *   **生态核心**。prism-ml 的 Bonsai 系列是本周量化界的 King。Bonsai-27B-gguf (1-bit) 下载量高达 126 万，而 Ternary-Bonsai (2-bit) 紧随其后。
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** (empero-ai | 👍2,371 | ⬇️2,117,323)
    *   基于 Qwen 3.5 微调融合 Claude 风格的推理模型，下载量超过 200 万，说明融合不同模型“智慧”的微调方式极受欢迎。
*   **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)** (unsloth | 👍111 | ⬇️6,771)
    *   知名微调工具团队 unsloth 出品的 Inkling 模型的 GGUF 版本，为热门模型提供开箱即用的量化版本。
*   **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V3-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V3-GGUF)** (LuffyTheFox | 👍85 | ⬇️15,148)
*   **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** (DavidAU | 👍159 | ⬇️16,719)
    *   围绕 Qwen 3.6 的大量社区“魔改”版本，其夸张的命名和下载量揭示了社区对个性化、高性能和去审查模型的极大热情。

---

#### **生态信号**

本周生态信号清晰。首先，**以 Qwen 3.6 和 Bonsai 模型家族为核心的量化与微调活动达到了新的高峰**，社区力量正在主导模型的私有化部署和个性化改造。其次，**开源权重模型（如 Gemma-4, GLM-5.2）相比闭源 API，在开发者和极客群体中依然拥有绝对号召力**，但高质量专属模型（如 Baidu OCR）的下载数据证明，解决具体问题的垂直模型能获得巨大商业价值。最后，**量化技术进入“比特战争”**，从标准的 4-bit 向 2-bit 甚至更极致的 1-bit Ternary 演进，而这背后的代价（如性能损失）并未压制社区的热度，说明当前社区更看重“可运行性”而非极致精度。

---

#### **值得探索**

1.  **值得研究**: **[prism-ml/Bonsai-27B-gguf (1-bit)](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** 与 **[Ternary-Bonsai-27B-gguf (2-bit)](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**。这两个模型是低比特量化的极限测试，研究它们的性能表现（尤其是在复杂推理任务上）和显存占用曲线，对于规划本地硬件投资和模型部署策略极具参考价值。

2.  **值得尝试**: **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**。这是一个结合了高性能编码能力和张量压缩技术的模型，对于需要构建本地代码助手的开发者来说，它提供了效率和效果之间的一个极佳平衡点，值得安装测试其实际编码和调试能力。

3.  **值得创新**: **Wan-AI/Wan-Dancer-14B**。虽然点赞不高，但这是一个非常垂直和有创意的方向。任何有兴趣在视频生成领域进行微调或制作特定动作 LoRA 的研究者或创作者，都应该从这个基础模型入手，探索其在短剧、虚拟人、游戏角色动画等场景的潜力。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*