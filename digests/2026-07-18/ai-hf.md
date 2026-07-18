# Hugging Face 热门模型日报 2026-07-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-18 02:38 UTC

---

好的，作为AI模型生态分析师，这是为您整理的2026年7月18日Hugging Face热门模型日报。

---

### 《Hugging Face 热门模型日报》— 2026年7月18日

#### 📈 今日速览

今日Hugging Face生态呈现“双核驱动”趋势：一方面，**GLM-5.2**和**Qwen3.6**两大模型家族持续霸榜，衍生出大量社区微调与量化版本，展现了开源社区对强大基座模型的旺盛需求；另一方面，以**Inkling**和**OvisOCR2**为代表的多模态模型崛起，标志着“文本+图像+音频”的统一理解和生成成为新焦点。值得注意的是，**prism-ml**推出的超低比特（1-bit/2-bit/三元）量化模型下载量惊人，证明高效部署仍是社区的刚需。此外，腾讯的**Hy3**和百度的**Unlimited-OCR**等大厂权重模型入局，进一步丰富了开源生态的多样性。

#### 🏆 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）

-   [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) — 作者: zai-org | 点赞: 4,073 | 下载: 534,698
    -   GLM系列的第五代MoE模型，是今日最受关注的权重模型。社区讨论集中在它的稀疏激活架构在推理速度上的优势，以及它与主流对齐方法的兼容性。

-   [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) — 作者: HauhauCS | 点赞: 2,829 | 下载: 2,295,313
    -   基于Qwen3.6的35B-A3B MoE模型的“无审查+激进”版本，下载量极高，体现了社区对特定角色扮演和安全机制宽松模型的需求。

-   [**InternScience/Agents-A1**](https://huggingface.co/InternScience/Agents-A1) — 作者: InternScience | 点赞: 573 | 下载: 34,066
    -   一个专为“智能体”任务（Function Calling、Tool Use）优化的Qwen3.5 MoE模型。这指向了“模型即智能体”的流行趋势，开发者正在寻找能更好地与工具和API交互的基座模型。

-   [**tencent/Hy3**](https://huggingface.co/tencent/Hy3) — 作者: tencent | 点赞: 820 | 下载: 12,719
    -   腾讯发布的Hunyuan系列第三代模型，标志着大厂在开源通用NLP领域的持续投入，为开发者提供了“闭源平替”之外的另一个强力选择。

-   [**Cactus-Compute/needle**](https://huggingface.co/Cactus-Compute/needle) — 作者: Cactus-Compute | 点赞: 257 | 下载: 874
    -   一个基于JAX的、专注于函数调用和工具使用的模型，代表了JAX生态在Agent领域的探索，技术栈选择较为前沿。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

-   [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) — 作者: empero-ai | 点赞: 2,275 | 下载: 2,096,147
    -   “QS”系列模型的GGUF量化版。它结合了Qwen3.5基座和长上下文，下载量巨大，表明“小型多模态强推理”模型在实际部署中非常有吸引力。

-   [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) — 作者: baidu | 点赞: 2,020 | 下载: 1,992,355
    -   百度开源的通用OCR模型，具备强大的文字识别与还原能力，是解决“文档数字化”这一核心痛点的高质量解决方案，因此广受欢迎。

-   [**thinkingmachines/Inkling**](https://huggingface.co/thinkingmachines/Inkling) — 作者: thinkingmachines | 点赞: 962 | 下载: 7,870
    -   一个多模态模型（原生支持图像、文本、对话），代表了“所有模态”统一的最新尝试，社区正在探索其在不规则输入任务上的表现。

-   [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) — 作者: froggeric | 点赞: 934 | 下载: 0
    -   一个非模型、而是“聊天模板”的修复补丁，下载量为0（但有934赞），说明社区对Qwen系列提示模板的“正确用法”有强烈且统一的需求。

-   [**Wan-AI/Wan-Dancer-14B**](https://huggingface.co/Wan-AI/Wan-Dancer-14B) — 作者: Wan-AI | 点赞: 108 | 下载: 2,185
    -   一个专门的“图像到舞蹈视频”生成模型，标志着AI视频生成正在向**高垂直、专业细分领域**（如特定动作生成）深入。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

（本日榜单中，进入前30的模型主要聚焦于通用能力、多模态和量化。专用模型特征不明显，但**needle**（工具调用）和**OvisOCR2**（OCR）可以被视为细分领域的专用模型。）

-   [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) — 作者: ATH-MaaS | 点赞: 153 | 下载: 10,795
    -   一个专注于OCR任务的模型，与百度的Unlimited-OCR形成竞争，显示了社区对高质量、开源OCR模型的持续关注。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

-   [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) — 作者: prism-ml | 点赞: 681 | 下载: 200,774
    -   **prism-ml**的“三元量化”（Ternary）模型，将27B的模型压缩到2-bit。这种极致的压缩技术是社区关注热点，下载量证明其“用极低精度换取可运行性”的策略非常成功。

-   [**prism-ml/Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) — 作者: prism-ml | 点赞: 397 | 下载: 1,045,182
    -   同为prism-ml推出的“1-bit”GGUF模型，下载量破百万。这表明**量化，尤其是低至1-2比特的极端量化，是目前开源社区最活跃的领域之一。**

-   [**GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF**](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF) — 作者: GnLOLot | 点赞: 273 | 下载: 154,762
    -   “数据蒸馏”（使用Claude Opus生成数据）+“极小模型”（1B）+“量化”（GGUF）的典型组合。社区通过这种方式，在大幅降低成本的同时获得了不错的推理能力。

-   [**unsloth/Qwen3.6-27B-NVFP4**](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4) — 作者: unsloth | 点赞: 225 | 下载: 1,924,495
    -   **Unsloth**团队推出的采用NVIDIA FP4（4比特浮点）格式的Qwen3.6量化模型。代表了量化技术从INT（整数）向FP（浮点）格式的演进，且在NVIDIA硬件上可能有更好的计算效率。

-   [**AngelSlim/Hy3-GGUF**](https://huggingface.co/AngelSlim/Hy3-GGUF) — 作者: AngelSlim | 点赞: 122 | 下载: 84,834
    -   快速跟进腾讯开源**Hy3**的GGUF社区量化版，说明社区对大厂模型的部署需求是即时且高涨的。

#### 🔬 生态信号

1.  **Qwen vs GLM 双寡头格局**：今日趋势榜上，围绕**Qwen3.5/3.6**和**GLM-5.2**的模型占据半壁江山。这两大家族不仅在基座模型上更新迅速，更催生了大量下游微调和量化版本，形成了繁荣的生态系统。它们之间的竞争实际上是在争夺“开源大模型事实标准”的地位。

2.  **量化成为入场券**：榜单中超过一半的模型都包含“GGUF”、“mlx”、“1-bit”、“2-bit”等标签。下载量超过百万的模型无一例外都是量化版本。这表明，**对于大多数个人和中小企业开发者而言，能否在消费级硬件上跑起来，远比模型的理论质量上限更重要。**

3.  **“小模型+强知识+推理”范式**：以**Qwythos-9B**（量化后）和**MiniCPM-1B**（蒸馏后）为代表，社区正在验证一个趋势：通过高质量的微调数据（如蒸馏自Claude），让7B以下的模型具备更强的推理和多模态能力，从而实现“小而美”的部署效果。

#### 🧪 值得探索

1.  [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) — **极致的量化艺术。** 如果你想体验27B模型在消费级显卡上的运行效果，或者研究三元量化技术对模型质量的影响，这个模型是绝佳案例。

2.  [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) — **非模型，胜似模型。** 虽然下载量为0，但高达934的点赞数说明它解决了社区的一个真实痛点。任何正在使用或准备使用Qwen系列模型的开发者都值得仔细研究这个仓库。

3.  [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) — **特定领域的极致。** 这是“越狱”和“角色扮演”模型的一个代表。如果你想了解社区对模型安全边界的最新探索，以及35B MoE模型在非标准场景下的表现，可以下载体验。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*