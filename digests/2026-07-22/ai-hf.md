# Hugging Face 热门模型日报 2026-07-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-22 02:47 UTC

---

好的，作为AI模型生态分析师，以下是基于您提供的2026-07-22数据生成的《Hugging Face热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-22**

#### **今日速览**

本周 Hugging Face 生态呈现三大显著趋势：**多模态模型** 与 **极致量化** 双星闪耀。百度出品的通用OCR模型 **Unlimited-OCR** 周点赞数高居榜首，展示了企业级AI在垂直场景的统治力。同时，以 **prism-ml** 为代表的社区力量，将1-bit/2-bit量化技术推向了27B参数级别，甚至在Apple Silicon上也能流畅运行 (MLX格式)，极大降低了部署门槛。此外，开源社区对 **Qwen3.x 系列** 的微调热情不减，涌现出多个高人气“无审查”变体。

#### **热门模型分类解读**

##### 🧠 语言模型 (LLM、对话模型、指令微调)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 点赞: 4,285 | 下载: 545,109
    国产大模型GLM的最新版本，采用MoE架构，凭借强大的综合对话能力在学术和工业界持续走红，是本周的绝对明星。

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | 作者: moonshotai | 点赞: 1,200 | 下载: 722,058
    月之暗面推出的专注代码任务的压缩版模型，展示了头部创业公司在高价值垂直领域的布局，下载量巨大。

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** | 作者: poolside | 点赞: 204 | 下载: 3,056
    Poolside推出的代码生成专用模型，显示了AI编程领域正在从通用模型向更专业、更细分的方向演进。

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** | 作者: Nanbeige | 点赞: 91 | 下载: 0
    一个新型的3B参数小模型，虽然刚发布尚无下载，但点赞说明社区对高效、轻量级语言模型始终抱有期待。

##### 🎨 多模态与生成 (图像、视频、音频、文本到X)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 点赞: 2,613 | 下载: 2,237,351
    **本周点赞王**。百度的通用OCR模型，在图像文字识别这一刚需场景上展现了巨大的实用价值，下载量突破两百万，实至名归。

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | 作者: google | 点赞: 3,314 | 下载: 12,113,203
    **本周下载王**。Google开源的最新指令微调多模态模型，强大的性能和Google的品牌效应使其成为社区必下的模型之一。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/Hauha2023.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 点赞: 2,971 | 下载: 1,997,690
    Qwen3.6的社区“无审查”版本，采用了激进的训练策略，点赞和下载数极高，反映了社区对模型行为多样性的强烈需求。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 作者: empero-ai | 点赞: 2,391 | 下载: 2,133,420
    基于Qwen3.5的“神话”风格角色扮演模型，说明在性能之外，模型的“风格”和“个性”正成为社区关注的焦点。

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | 作者: thinkingmachines | 点赞: 1,368 | 下载: 16,441
    新一代多模态模型（图像+音频+文本），拓展了AI交互的边界，预示着多模态融合将是下一个竞争高地。

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | 作者: nvidia | 点赞: 903 | 下载: 590,230
    英伟达推出的轻量级流式语音识别模型，针对实时场景进行了优化，体现了巨头在边缘计算和AI基础设施上的投入。

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | 作者: OpenMOSS-Team | 点赞: 299 | 下载: 92,265
    专注于音频转写与说话人分离的模型，为会议记录、媒体制作等场景提供了关键工具。

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | 作者: conradlocke | 点赞: 476 | 下载: 0
    基于Krea-2的图像编辑LoRA，专注于身份保留，由于是创意工具类模型，下载量为0但点赞颇高，说明社区对创新应用关注度高。

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** | 作者: openbmb | 点赞: 147 | 下载: 58
    基于MiniCPM的机器人操控模型，是“具身智能”落地的重要探索，虽然下载量小但科研价值极高。

- **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** | 作者: openbmb | 点赞: 107 | 下载: 72
    同样是MiniCPM系列，专注于机器人轨迹规划，与上述模型形成互补，展示了AI在机器人领域的渗透。

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** | 作者: Alissonerdx | 点赞: 223 | 下载: 0
    一个用于视频生成的身份保持LoRA，说明视频生成赛道也开始追求个性化控制。

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | 作者: Cactus-Compute | 点赞: 298 | 下载: 1,068
    一个基于JAX的工具调用模型，代表了模型从“生成文本”到“执行动作”的重要转型，是AI Agent生态的核心组件。

##### 🔧 专用模型 (代码、数学、医疗、嵌入)

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | 作者: ATH-MaaS | 点赞: 238 | 下载: 17,162
    基于Qwen3.5的OCR专用模型，是“Unlimited-OCR”之外的一个有力竞争者，显示了OCR赛道的热度。

- **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)** | 作者: nvidia | 点赞: 96 | 下载: 93,021
    英伟达推出的1B参数嵌入模型，专为语义相似度任务设计，是构建RAG系统的关键基础组件。

##### 📦 微调与量化 (社区微调、GGUF、AWQ)

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | 作者: prism-ml | 点赞: 899 | 下载: 432,196
    采用 **三值量化** 的27B大模型，将模型体积压缩到极致，是本地部署大模型的一次革命性尝试。

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | 作者: prism-ml | 点赞: 571 | 下载: 1,404,962
    与上述模型同系列，采用1-bit量化，下载量巨大，印证了社区对极致量化的追捧。

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/...)** | 作者: DavidAU | 点赞: 249 | 下载: 62,842
    又一个社区“无审查”微调模型，名字冗长而吸睛，是社区创造力与对“意志自由”追求的直接体现。

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF)** | 作者: GnLOLot | 点赞: 147 | 下载: 51,746
    将MiniCPM5 1B模型与小模型上的“思考”能力结合的GGUF版本，展现了在小参数模型上实现高级推理的探索。

- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** | 作者: AngelSlim | 点赞: 157 | 下载: 145,102
    腾讯Hy3模型的GGUF量化版本，让这个大模型在消费级硬件上运行成为可能。

#### **生态信号**

- **Qwen生态一家独大，MoE与压缩成主流**：本周榜单中，**Qwen 3.x** 家族（包括其微调版）占据了半壁江山。无论是原版、量化版、还是社区的无审查版，都显示其已成为开源社区的“地基模型”。同时，**GLM-5.2** 的成功也印证了MoE架构在平衡性能与效率方面的优势。以 **prism-ml** 为代表的1-bit/2-bit乃至三值量化方案，将大模型的本地化部署推向极致，未来“人人可用超大模型”的愿景正在变为现实。

- **企业力量 vs 社区野性**：榜单清晰地反映了两种力量。**Google、百度、NVIDIA、Moonshot** 等巨头发布的基础或专用模型，凭借其可靠性、完整性和强大性能，在点赞和下载量上占据绝对优势。而社区则通过“无审查”、“风格化”、“思想实验”等方式，探索模型能力的边界和多样性，形成了一个充满活力的“模型长尾市场”。

- **从语言聊天到“动手能力”**：值得关注的是，榜单中出现了 **机器人操控 (MiniCPM-RobotManip)**、**工具调用 (needle)** 等代表 AI Agent 能力方向的模型。这预示着模型生态正从纯粹的“语言智能”向“行动智能”转型，未来的热点将是模型如何与环境、工具和现实世界交互。

#### **值得探索**

1.  **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**：强烈推荐。这是目前在**极致量化**领域最前沿的工作。27B的模型被压缩到能在家用显卡甚至内存上运行，尽管精度会有所损失，但它是探索AI规模化民主化潜力的不二之选。如果你对本地部署和模型效率感兴趣，这个模型是必看的。

2.  **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**：强烈推荐给研究者和技术爱好者。这是**具身智能**领域的开源标杆。它展示了如何将一个小巧的语言-视觉模型 (MiniCPM) 用于真实的机器人操控任务。虽然离落地还有距离，但它代表了AI最令人兴奋的未来方向之一。

3.  **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**：这个模型非常值得开发者关注。它专注于 **function-calling (函数调用)** 和 **tool-use (工具使用)**，这是构建自主AI Agent的核心能力。如果你想探索如何让大模型真正为你“干活”，而不是仅仅“聊天”，这个模型是绝佳的起点。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*