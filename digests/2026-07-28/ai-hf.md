# Hugging Face 热门模型日报 2026-07-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-28 02:39 UTC

---

好的，作为AI模型生态分析师，以下是根据您提供的数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-28**

#### **今日速览**

本周Hugging Face生态呈现三大核心趋势：**多模态融合**与**极致量化**成为绝对主流。`Qwen` 家族继续统治榜单，其最新的MoE变体 `Qwen3.6-35B-A3B` 以压倒性的下载量证明了社区对高性能、稀疏激活模型的需求。与此同时，`Kimi-K3` 和 `GLM-5.2` 的强势表现标志着国产大模型在开源社区的全球影响力持续攀升。此外，围绕 `Laguna-S-2.1` 和 `Qwen3.x` 系列进行的社区量化（GGUF）和微调活动异常活跃，**“基础模型→社区量化→二次微调”的生态链条已高度成熟**。

---

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**  
  作者: moonshotai | 👍 6,419 | 📥 2,850  
  **说明**: 月之暗面最新旗舰多模态模型，以绝对点赞数领跑本周趋势榜，代表了国产模型在多模态理解与生成领域的最强竞争力。

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
  作者: zai-org | 👍 4,552 | 📥 1,003,547  
  **说明**: 智谱AI的最新一代通用大模型，采用MoE架构，以百万级下载量证明了其在中文社区的核心地位。

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**  
  作者: upstage | 👍 630 | 📥 3,761  
  **说明**: 韩国AI公司Upstage的250B参数开源大模型，代表了东亚地区在超大规模语言模型上的探索。

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**  
  作者: Nanbeige | 👍 494 | 📥 16,518  
  **说明**: 高效的3B级小型语言模型，适合资源受限场景，体现小模型专业化趋势。

- **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)**  
  作者: Motif-Technologies | 👍 199 | 📥 2,532  
  **说明**: 专注于特征提取的新架构模型，探索语言模型在非生成任务上的应用。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
  作者: baidu | 👍 3,337 | 📥 2,645,773  
  **说明**: 百度发布的通用OCR模型，以惊人的260万周下载量成为本周最“实用”的应用，证明了工业级文档理解模型的强劲需求。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  作者: HauhauCS | 👍 3,133 | 📥 1,894,395  
  **说明**: 基于Qwen3.6的社区微调版本，主打“无审查”和“激进”风格，下载量极高，反映了社区对个性化、无约束模型的需求。

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**  
  作者: Qwen | 👍 2,548 | 📥 6,187,853  
  **说明**: 本周下载量之王。Qwen的最新MoE多模态模型，3.5B激活参数即可达到35B模型的性能，是高效与强大的完美结合。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
  作者: empero-ai | 👍 2,491 | 📥 1,336,263  
  **说明**: 融合Claude风格调教的9B模型GGUF量化版，下载量巨大，表明结合优秀合成数据与高效推理格式的模型备受欢迎。

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**  
  作者: thinkingmachines | 👍 1,606 | 📥 36,196  
  **说明**: 新晋的多模态对话模型，强调视觉与文本理解能力，点赞数高，说明其对话体验受到认可。

- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**  
  作者: microsoft | 👍 392 | 📥 1,691  
  **说明**: 微软发布的新一代文生图模型，采用Flow-based架构，代表了图像生成领域的技术前沿。

- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)**  
  作者: owensong | 👍 225 | 📥 483  
  **说明**: 专为CPU和边缘设备设计的轻量级TTS模型，关注隐私和本地部署场景。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**  
  作者: moonshotai | 👍 1,323 | 📥 695,744  
  **说明**: Kimi系列的代码专用版本，下载量极高，表明针对特定编程任务的“代码专家”模型市场需求巨大。

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**  
  作者: Kwaipilot | 👍 243 | 📥 5,312  
  **说明**: 基于MoE架构的代码生成模型，专为开发者设计，体现代码智能领域的专业化细分。

- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)**  
  作者: fdtn-ai | 👍 207 | 📥 6,421  
  **说明**: 主打安全性的1B级别语言模型，是AI安全领域在开源社区的一次重要尝试。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**  
  作者: DavidAU | 👍 756 | 📥 634,146  
  **说明**: 社区微调与量化工程的极致体现，名字本身即是一种“宣言”，下载量极高，显示了“超大杯”社区版模型的吸引力。

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
  作者: prism-ml | 👍 1,069 | 📥 648,938  
  **说明**: 采用三值量化(2-bit)的27B模型，在极大压缩模型体积的同时保留性能，代表量化技术的极端前沿。

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**  
  作者: prism-ml | 👍 659 | 📥 2,257,928  
  **说明**: 1-bit量化的极限探索，刷新了模型压缩的边界，下载量超225万，证明社区对“极致小”模型有强烈兴趣。

---

#### **生态信号**

本周生态呈现 **“两极分化，中间繁荣”** 的格局。一方面，**基础模型层面**，`Qwen` 系列（特别是3.6系列）和 `Kimi-K3` 已形成头部效应，逐步取代过往的 Llama 生态。另一方面，**社区量化活动空前繁荣**，如 `prism-ml` 和 `DavidAU` 的量化/微调模型占据了下载量前列，说明**推理效率和个性化**已成为社区的核心关注点。开源权重模型的竞争力持续增强，在 `Kimi`、`GLM` 等模型上已展现出与闭源模型抗衡的潜力。值得注意的是，**“无审查”** 标签在社区微调模型中频繁出现，揭示了一个追求更高自由度的细分市场需求。

---

#### **值得探索**

1.  **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**：本周当之无愧的“机皇”。它证明了MoE架构在多模态领域的巨大潜力，是研究如何在有限算力下获得顶级模型性能的绝佳范例。

2.  **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**：探索模型压缩极限的产物。如果您对在普通消费级硬件（如MacBook或低端PC）上本地运行27B级模型感兴趣，这是您必须研究的对象。

3.  **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**：如果您是开发者，这款模型值得一试。它代表了“垂直领域专家模型”的趋势，在代码生成、理解和重构方面可能拥有比通用模型更强的专项能力。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*