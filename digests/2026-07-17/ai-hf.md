# Hugging Face 热门模型日报 2026-07-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-17 02:46 UTC

---

好的，作为AI模型生态分析师，以下是基于您提供的2026-07-17数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-17**

#### **今日速览**

本周Hugging Face生态呈现几个显著趋势：**MoE（混合专家）架构**与**极低比特量化**成为社区热点，`zai-org/GLM-5.2` 高居点赞榜首，而 `prism-ml` 团队凭借其1-bit/2-bit三元量化模型取得了惊人的下载量。在功能层面，**视觉理解与OCR** 赛道竞争激烈，百度 `Unlimited-OCR` 与多个基于Qwen3.5/3.6的视觉模型展现了强大的多模态能力。此外，端侧推理成为焦点，`MinicPM5` 系列和 `Gemma-4` 的Agent微调版本获得了社区的积极关注。

---

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 👍: 4,030 | ⬇️: 513,061
  - 本周点赞量最高的模型，是智谱AI推出的基于MoE-DSA架构的新一代大模型，代表了国产开源LLM的最新进展。
- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | 作者: deepreinforce-ai | 👍: 902 | ⬇️: 1,785,575
  - 一款35B参数级模型的高效量化版本，下载量巨大，表明社区对中大规模“推理友好型”模型的需求旺盛。
- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** | 作者: InternScience | 👍: 568 | ⬇️: 33,400
  - 基于Qwen3.5-MoE的Agent专用模型，定位明确，为Agent应用提供了更强的原生能力。
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | 作者: froggeric | 👍: 924 | ⬇️: 0
  - 一个社区修复的Qwen聊天模板，虽然下载量为0（可能为功能性仓库），但高点赞数反映出开发者对官方工具链中模板问题的强烈痛点和修复需求。
- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | 作者: Cactus-Compute | 👍: 249 | ⬇️: 733
  - 基于JAX的专用函数调用与工具使用模型，代表了模型在小众、高性能计算场景的探索。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍: 2,787 | ⬇️: 2,328,315
  - 基于Qwen3.6的MoE视觉模型的无审查版GGUF量化版，下载量恐怖，用户对“无限制”多模态模型的热情极高。
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 作者: empero-ai | 👍: 2,238 | ⬇️: 2,042,670
  - 结合了Claude风格Mythos数据集的Qwen3.5视觉模型量化版，证明了数据蒸馏与风格迁移在视觉推理任务上的成功。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 👍: 2,011 | ⬇️: 1,722
  - 百度推出的通用OCR模型，下载量极高，标志着大模型在传统CV任务（尤其是OCR）上实现了“降维打击”。
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | 作者: tencent | 👍: 813 | ⬇️: 11,849
  - 腾讯混元系列的最新LLM基座模型，始终保持极高的关注度，是中文大模型领域的重要力量。
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | 作者: thinkingmachines | 👍: 820 | ⬇️: 4
  - 一款全新原生的多模态模型，尽管下载量不高，但初始点赞量揭示了市场对高质量、原生多模态模型的渴求。
- **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)** | 作者: unsloth | 👍: 216 | ⬇️: 1,712,974
  - Unsloth推出的NVIDIA FP4量化版本，凭借其极致的量化技术和高效率，成为高端显卡用户的首选。
- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** | 作者: Wan-AI | 👍: 92 | ⬇️: 1,884
  - 专注图像到视频生成的14B模型，针对“舞蹈”这类高动态场景进行优化，是视频生成细分领域的代表。

##### 🔧 专用模型（代码、数学、医疗、嵌入）
- **[ATII-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | 作者: ATH-MaaS | 👍: 136 | ⬇️: 3,678
  - 专注于OCR任务的视觉模型，表明在通用型多模态模型之外，任务专用模型依然是重要的细分市场。
- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | 作者: yuxinlu1 | 👍: 1,208 | ⬇️: 506,068
  - 对Gemma-4进行了大量Agentic微调（融合Fable5, Composer等数据）的GGUF版，代表了对前沿小模型进行“技能增强”的热潮，在代码/终端Agent场景表现突出。

##### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | 作者: prism-ml | 👍: 610 | ⬇️: 74,007
  - 2-bit三元量化模型的GGUF版，代表了量化技术的“天花板”，让大模型在低端设备上运行成为可能。
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | 作者: prism-ml | 👍: 343 | ⬇️: 559,267
  - 1-bit量化模型的GGUF版，虽然质量损失较大，但其极致的压缩比吸引了大量追求“万物皆可跑”的用户。
- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** | 作者: GnLOLot | 👍: 265 | ⬇️: 121,296
  - 对MiniCPM-5 1B模型进行Claude思维链数据蒸馏并量化的产物，是“小模型、大智慧”趋势的典型代表。
- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)** | 作者: jlnsrk | 👍: 121 | ⬇️: 2,621
  - 对GLM-5.2的极速INT4 CPU推理量化版，专为CPU和内存受限场景优化。
- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** | 作者: AngelSlim | 👍: 117 | ⬇️: 80,796
  - 对腾讯Hy3模型的GGUF量化版，满足了社区对高质量中文基座模型进行本地部署的需求。

---

#### **生态信号**

1.  **模型家族势头分析**：**Qwen3.x系列**（3.5/3.6）已经成为社区最核心的“母版”模型，无论基座(MoE)、视觉还是量化版本，都占据了榜单的多数席位。**GLM-5**系列紧随其后，凭借MoE-DSA架构和AI开源传统，展现强大生命力。**MiniCPM**系列则在“小参数、强能力”的小模型赛道上表现亮眼。

2.  **开源权重与传统偏好**：本周榜单中，GGUF量化版本几乎占据了下载量的半壁江山，特别是极低比特量化（1-bit/2-bit）的流行，表明社区正在从“追求参数”转向“追求效率与可部署性”。开源的权重依然集中在Top级大厂与明星组织，但个人开发者通过社区微调（如`GnLOLot`、`empero-ai`）贡献了巨大的活力。

3.  **量化与微调活动**：量化活动空前活跃，**GGUF** 是绝对主流格式，且精度竞赛从4-bit向1/2-bit延伸。同时，我们看到“思想链蒸馏”（如 `fable5` 系列）和“数据风格迁移”（`Claude-Mythos`）两种微调模式正在成为主流，旨在让开源模型学习闭源模型的“神韵”。

---

#### **值得探索**

1.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**：作为本周点赞冠军，它代表了国产MoE模型的最新高度。值得深入对比其在中文理解、推理和指令遵循上与Qwen3.x的差异，评估其作为核心开发基座的潜力。

2.  **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**：这是一个非常小众但极具价值的模型。它专为函数调用和工具使用而生，且基于JAX框架。如果你从事Agent或自动化流水线开发，可以探索其在性能优化和执行效率上的独特优势。

3.  **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)**：这是一个“小模型”的标杆之作。1B参数量的GGUF版本在端侧设备、浏览器或边缘计算场景拥有巨大潜力。其Claude思维链的蒸馏效果值得测试，是研究“如何用小模型获取高质量推理能力”的绝佳案例。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*