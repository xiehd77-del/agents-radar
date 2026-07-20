# Hugging Face 热门模型日报 2026-07-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-20 03:21 UTC

---

好的，作为 AI 模型生态分析师，以下是基于您提供数据的《Hugging Face 热门模型日报》。

---

# Hugging Face 热门模型日报 | 2026-07-20

## 今日速览

今日 Hugging Face 生态呈现出三大显著趋势：**“超低比特”量化浪潮**与**多模态模型**的强势崛起并驾齐驱。以 `prism-ml` 为代表的团队将 1-bit/2-bit 量化推向了 27B 级别的大模型，引发了极高的社区下载量。同时，中国机构与大模型生态（如百度、智谱AI、Qwen系列）的多模态模型，特别是 OCR 和图像/视频理解领域，占据了榜单前列。此外，围绕 **Google Gemma 4** 和 **GLM-5.2** 等旗舰模型的开源社区微调与适配活动异常活跃。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** (作者: zai-org | 👍 4,172 | 📥 536,177)
  智谱AI发布的最新一代MoE大模型，凭借其强劲的综合能力，成为本周社区关注的焦点。
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** (作者: tencent | 👍 836 | 📥 13,698)
  腾讯最新发布的大语言模型，作为近期热门基础模型，引发了社区对其量化版本（如 #12）的广泛关注。
- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** (作者: InternScience | 👍 584 | 📥 35,833)
  基于Qwen3.5构建的Agent专用模型，标志着为执行复杂任务的“智能体”优化大模型正成为明确趋势。
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** (作者: google | 👍 3,275 | 📥 12,337,374)
  Google最新开源的多模态指令模型，凭借其巨大的下载量和Google的品牌效应，是当前最受瞩目的模型之一。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** (作者: empero-ai | 👍 2,349 | 📥 2,118,995)
  一个基于Qwen3.5的量化多模态模型，专注推理能力，高下载量表明社区对高质量混合模型的需求旺盛。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** (作者: baidu | 👍 2,198 | 📥 2,122,848)
  百度推出的通用OCR模型，在OCR任务上表现卓越，是当前最突出的专用多模态模型。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** (作者: HauhauCS | 👍 2,902 | 📥 2,084,530)
  基于Qwen3.6的“无审查”MoE视觉模型，此类模型在社区中始终拥有极高人气和下载量。
- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** (作者: Wan-AI | 👍 128 | 📥 2,408)
  专注于“图生视频”的舞蹈生成模型，是AI内容创作领域一个细分且有趣的应用方向。
- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** (作者: Alissonerdx | 👍 195 | 📥 0)
  一款专注于视频生成中保持人脸身份一致性的LoRA模型，解决了视频生成中的一个关键痛点。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **(今日榜单中暂无突出此分类的模型，但 `Cactus-Compute/needle` 可归入此类)**
- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** (作者: Cactus-Compute | 👍 279 | 📥 955)
  基于JAX开发的函数调用与工具使用模型，代表了大模型从“对话”走向“执行”的专用化趋势。

### 📦 微调与量化（社区微调、GGUF、GGML、AWQ）

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** (作者: prism-ml | 👍 795 | 📥 338,945)
  27B模型的三进制（Ternary）2-bit量化版本，极大降低部署门槛，是极致量化的代表。
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** (作者: prism-ml | 👍 501 | 📥 1,262,894)
  `Bonsai` 模型的1-bit GGUF量化版，下载量超百万，显示社区对在低端硬件上运行大模型的迫切需求。
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** (作者: froggeric | 👍 948 | 📥 0)
  修复Qwen模型对话模板的实用工作，虽无下载量，但高点赞数说明它精准解决了开发者痛点。
- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)** (作者: jlnsrk | 👍 142 | 📥 4,035)
  针对GLM-5.2的CPU友好型INT4量化版本，采用“专家流（expert-streaming）”技术，是边缘部署的有益探索。

## 生态信号

- **“超低比特”量化成为主流**：`prism-ml` 的1-bit/2-bit乃至三进制（Ternary）模型不仅获得了高点赞，更带来了百万级的下载量。这表明社区对“牺牲少量精度换取运行可能”的极端量化方案接受度极高，正推动大模型普及。
- **中国模型生态全面崛起**：除Google外，榜单前段几乎被中国机构占据。百度（OCR）、智谱AI（GLM-5.2）、腾讯（Hy3）、以及以Qwen为基座的社区模型，显示出中国在开源大模型生态中的主导力。
- **MoE架构与“无审查”模型依然火热**：GLM-5.2、HauhauCS的微调版等MoE模型备受关注。同时，“Uncensored”标签仍是获取社区免费下载量的重要密码。
- **多模态是核心战场**：“image-text-to-text”任务成为最拥挤的赛道，视觉与语言融合是当前最明确的技术方向。

## 值得探索

1.  **`prism-ml/Bonsai-27B-gguf`**: **最值得尝试的“极限”部署模型**。如果你的硬件资源有限，又希望体验接近30B级别模型的性能，这个1-bit量化版本是当前最佳选择，其百万级下载量是最好的背书。
2.  **`IceSofer/Qwen-Fixed-Chat-Templates`**: **开发者的“瑞士军刀”**。虽然它不是一个模型，但对于所有Qwen系列的用户来说，这是一个解决对话模板错乱问题的必备工具，能显著提升部署和开发效率。
3.  **`Wan-AI/Wan-Dancer-14B`**: **探索AI视频生成新边界**。这个专注于舞蹈生成的模型代表了AI视频生成进入垂直细分领域的趋势，对于研究人员和内容创作者来说，是一个探索动作生成和控制的有趣起点。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*