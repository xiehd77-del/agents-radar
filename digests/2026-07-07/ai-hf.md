# Hugging Face 热门模型日报 2026-07-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-07 03:36 UTC

---

好的，作为AI模型生态分析师，这是为您生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-07**

#### **今日速览**

本周 Hugging Face 生态呈现两大核心趋势：**Qwen 家族的统治地位**和**社区微调与量化的极度活跃**。基于 Qwen 3.5/3.6 的衍生模型占据了榜单近半壁江山，特别是其 MoE（混合专家）架构的 35B-A3B 版本成为社区微调的热门基底。同时，技术与工具链高度成熟，GGUF 量化版本与原始模型并行发布已成常态，极大降低了本地部署的门槛。此外，Google 的 Gemma-4 和新晋的 Ornith 系列也展现了强劲的增长势头，预示着竞争格局的多极化。

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 👍 3,535 | ⬇️ 231,218
    *   **说明**: 智谱AI的最新旗舰开源对话模型，采用 MoE 架构，凭借强大的通用能力和社区关注度稳居本周热度榜首。
*   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | 作者: deepreinforce-ai | 👍 759 | ⬇️ 436,780
    *   **说明**: 新晋的 35B 级别 MoE 模型 Ornith 的 GGUF 量化版，以高下载量显示了社区对高性能、可本地部署模型的旺盛需求。
*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | 作者: deepseek-ai | 👍 409 | ⬇️ 14,276
    *   **说明**: DeepSeek 系列的最新版本 V4 Pro，预计在推理和代码能力上有所增强，是开源模型的重要竞争者。
*   **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** | 作者: meituan-longcat | 👍 117 | ⬇️ 43
    *   **说明**: 美团发布的长上下文模型二代，专注处理超长文本，初始下载量尚低但技术方向值得关注。
*   **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** | 作者: mistralai | 👍 143 | ⬇️ 106
    *   **说明**: Mistral 最新的旗舰级模型，119B 总参数、6B 激活参数的极致 MoE 模型，代表了在性能与效率间平衡的顶尖探索。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 👍 1,797 | ⬇️ 1,070,230
    *   **说明**: 百度的通用 OCR 模型，能处理海量场景的文字识别，技术实用性强，高下载量验证了其广泛应用价值。
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | 作者: nvidia | 👍 2,635 | ⬇️ 1,340,559
    *   **说明**: 英伟达的开放世界目标定位模型，用户可通过文本或图像提示精准定位目标，在具身智能和图像编辑领域潜力巨大。
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/krea-2-Turbo)** | 作者: krea | 👍 529 | ⬇️ 109,470
    *   **说明**: 创意工具公司 Krea 推出的下一代文本到图像模型，以其快速生成和高质量风格化图像受到设计师社区的追捧。
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 2,529 | ⬇️ 2,910,241
    *   **说明**: 基于 Qwen 3.6 的“去审查”视音频模型，虽存在争议，但极高的下载量反映了部分社区对模型自由度的追求。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | 作者: google | 👍 258 | ⬇️ 7,036
    *   **说明**: Google 开源的表格基础模型，支持零样本分类与回归，有望改变传统结构化数据的建模方式。
*   **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)** | 作者: nationaldesignstudio | 👍 136 | ⬇️ 3,821
    *   **说明**: 专为 PII（个人可识别信息）检测设计的 BERT 模型，可在浏览器端通过 ONNX 运行，对数据隐私保护有重要意义。
*   **[eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B)** | 作者: eric-venti-seeds | 👍 80 | ⬇️ 0
    *   **说明**: 用于 Flux 图像生成模型的 LoRA，可精确控制图像中的太阳方向/光照，展示了社区在可控图像生成上的精细化努力。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 作者: empero-ai | 👍 1,649 | ⬇️ 1,617,508
    *   **说明**: 基于 Qwen 3.5 的社区微调模型，融合了“Mythos”数据集的创意性，其 GGUF 版本是本周下载量最高的模型，体现了社区微调的巨大影响力。
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | 作者: yuxinlu1 | 👍 2,623 | ⬇️ 664,319
    *   **说明**: 基于 Google Gemma-4-12B 的代码微调模型，并结合了其他模型的优化，其 GGUF 版高点赞数证明 Gemma-4 正成为代码领域优秀的微调基底。
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | 作者: unsloth | 👍 974 | ⬇️ 2,818,499
    *   **说明**: 知名工具团队 Unsloth 对 Qwen 3.6 的官方量化版，通过优化的 MTP 格式，成为兼顾性能与下载方便性的主流选择。
*   **[DavidAU/Qwen3.5-9B-Claude-4.6-HighIQ-THINKING-HERETIC-UNCENSORED](https://huggingface.co/DavidAU/Qwen3.5-9B-Claude-4.6-HighIQ-THINKING-HERETIC-UNCENSORED)** | 作者: DavidAU | 👍 158 | ⬇️ 58,755
    *   **说明**: 名字极具冲击力的社区微调模型，融合了多种提示风格，反映了社区在探索模型个性化和创造“思维多样性”方面的尝试。
*   **[huihui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)** | 作者: huihui-ai | 👍 179 | ⬇️ 6,660
    *   **说明**: 对 GLM-5.2 进行“去审查”和量化处理的版本，直接回应了特定用户群体的核心诉求。

#### **生态信号**

本周生态信号非常明确：**Qwen 3.5/3.6 已成为开源社区的事实标准底座**，无论是“无审查”微调、对话创意融合还是量化部署，围绕其 MoE 版本的生态异常繁荣。**开源权重模型已成主流**，榜单前20名无一例外。值得注意的是，**GGUF 量化模型的总下载量远超其原始版本**，标志着模型消费正从“云端 API”快速转向“本地部署”。此外，**Ornith、Gemma-4 和 DeepSeek-V4** 的崛起预示着 Qwen 一家独大的格局正面临挑战，多强并立的局面有利于模型能力的持续进步。

#### **值得探索**

1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: 这是一个极具创新性的多模态模型。对于从事计算机视觉、自动驾驶或机器人研究的专业人士，它是探索开放世界感知的绝佳起点。
2.  **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**: 如果你在数据科学或金融领域工作，这个表格基础模型可能颠覆你对“无代码”预测模型的认知。其零样本能力值得深入测试。
3.  **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**: 结合了 Google 最新基础模型的优越性和社区代码微调的精华，是探索在本地机器上运行最新代码助手的优秀样本。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*