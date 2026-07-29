# Hugging Face 热门模型日报 2026-07-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-29 02:46 UTC

---

好的，作为AI模型生态分析师，以下是基于您提供的数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026年7月29日**

#### **今日速览**

本周 Hugging Face 生态呈现多强争霸格局：**月之暗面 (Moonshot AI)** 凭借旗舰多模态模型 **Kimi-K3** 和代码专用模型 **Kimi-K2.7-Code** 持续领跑，巩固其社区影响力；**百度** 的实用型OCR模型 **Unlimited-OCR** 以极高下载量验证了AI工具在垂直场景的刚需；**阿里Qwen** 的 **Qwen3.6-35B-A3B** MoE模型及其社区衍生版本（如无审查、量化版）构成了本周最活跃的微调生态；同时，以 **Inflect** 系列为代表的**边缘AI** TTS模型和 **prism-ml** 的 **1-bit** 极限量化模型，标志着社区正从“追求性能极限”向“追求部署普惠”加速转型。

---

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **moonshotai/Kimi-K3** ([链接](https://huggingface.co/moonshotai/Kimi-K3))
  - 作者: moonshotai | 点赞: 8,072 | 下载: 99,214
  - **说明**: 月之暗面最新旗舰多模态模型，凭借强大性能和对齐能力，成为本周无可争议的热度冠军。
- **upstage/Solar-Open2-250B** ([链接](https://huggingface.co/upstage/Solar-Open2-250B))
  - 作者: upstage | 点赞: 646 | 下载: 4,804
  - **说明**: Upstage 推出的 250B 参数开源大模型，展现了大模型领域除中美外韩系势力的强劲实力。
- **Nanbeige/Nanbeige4.2-3B** ([链接](https://huggingface.co/Nanbeige/Nanbeige4.2-3B))
  - 作者: Nanbeige | 点赞: 530 | 下载: 18,933
  - **说明**: 高口碑的小参数模型系列，以其高性价比吸引了对轻量级LLM感兴趣的开发者。
- **fdtn-ai/antares-1b** ([链接](https://huggingface.co/fdtn-ai/antares-1b))
  - 作者: fdtn-ai | 点赞: 223 | 下载: 7,666
  - **说明**: 专注于**安全**领域的新兴1B模型，针对安全知识进行了专项训练，是社区对细分垂直领域关注的体现。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **baidu/Unlimited-OCR** ([链接](https://huggingface.co/baidu/Unlimited-OCR))
  - 作者: baidu | 点赞: 3,423 | 下载: 2,694,935
  - **说明**: 百度推出的通用OCR模型，效果出色且实用，凭借极高的实用性成为本周下载量冠军。
- **microsoft/Mage-Flow** ([链接](https://huggingface.co/microsoft/Mage-Flow))
  - 作者: microsoft | 点赞: 418 | 下载: 2,007
  - **说明**: 微软的新一代文生图/图编辑管线，代表了MS在图像生成领域的前沿探索。
- **owensong/Inflect-Micro-v2** ([链接](https://huggingface.co/owensong/Inflect-Micro-v2))
  - 作者: owensong | 点赞: 268 | 下载: 645
  - **说明**: 专为**CPU**和**边缘设备**优化的轻量级TTS模型，标志着语音合成走向本地化和低功耗化。
- **microsoft/Fara1.5-27B** ([链接](https://huggingface.co/microsoft/Fara1.5-27B))
  - 作者: microsoft | 点赞: 179 | 下载: 1,543
  - **说明**: 微软基于Qwen架构开发的**计算机操控**多模态模型，是AI Agent落地的关键基础设施。
- **ATH-MaaS/OvisOCR2** ([链接](https://huggingface.co/ATH-MaaS/OvisOCR2))
  - 作者: ATH-MaaS | 点赞: 340 | 下载: 47,129
  - **说明**: 另一款专门用于OCR的多模态模型，与百度的Unlimited-OCR一同证明了OCR需求的旺盛。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **moonshotai/Kimi-K2.7-Code** ([链接](https://huggingface.co/moonshotai/Kimi-K2.7-Code))
  - 作者: moonshotai | 点赞: 1,332 | 下载: 681,111
  - **说明**: Kimi系列专用的代码增强版模型，在代码生成和理解任务上表现突出，吸引了大量开发者。
- **Kwaipilot/KAT-Coder-V2.5-Dev** ([链接](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev))
  - 作者: Kwaipilot | 点赞: 289 | 下载: 6,275
  - **说明**: 基于Qwen MoE架构的代码专用模型，开发版驱动了新一轮代码模型的社区微调热潮。
- **conradlocke/krea2-identity-edit** ([链接](https://huggingface.co/conradlocke/krea2-identity-edit))
  - 作者: conradlocke | 点赞: 565 | 下载: 0
  - **说明**: 为Krea-2模型设计的**身份保持**编辑LoRA，是社区对个性化图像编辑需求旺盛的体现。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **zai-org/GLM-5.2** ([链接](https://huggingface.co/zai-org/GLM-5.2))
  - 作者: zai-org | 点赞: 4,608 | 下载: 1,267,198
  - **说明**: 智谱GLM-5的社区衍生版，凭借高性能和媲美原版的社区口碑，成为本周的热门量化模型。
- **DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF** ([链接](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF))
  - 作者: DavidAU | 点赞: 856 | 下载: 736,692
  - **说明**: Qwen生态的典型社区魔改版，通过多模型融合和“无审查”训练，展现了社区对极强个性化的追求。
- **prism-ml/Ternary-Bonsai-27B-gguf** ([链接](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf))
  - 作者: prism-ml | 点赞: 1,085 | 下载: 665,427
  - **说明**: **2-bit** 三元量化模型的成功验证了在消费级硬件上运行大模型的可行性，是量化领域的一大突破。
- **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** ([链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF))
  - 作者: empero-ai | 点赞: 2,503 | 下载: 1,262,662
  - **说明**: 融合了Claude等模型风格的“神话”风味模型，体现了社区在角色扮演和创意写作方向上的强劲需求。
- **LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF** ([链接](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF))
  - 作者: LuffyTheFox | 点赞: 198 | 下载: 99,660
  - **说明**: Qwen 3.6 35B MoE模型的无审查Hermes风格量化版，进一步印证了Qwen衍生生态的繁荣。

---

#### **生态信号**

1.  **Qwen生态持续统治社区微调，MoE成主流**：本周热门榜被 **Qwen/Qwen3.6-35B-A3B** 及其衍生版本占据多个席位。社区偏好从单纯的模型容量转向 **MoE架构** 的“大参数、低激活”特性，同时“无审查 (Uncensored)”和“风格融合 (Hermes/Mythos)”代表了社区多元化的审美和功能需求。
2.  **实用主义与极致量化成为新主线**：**baidu/Unlimited-OCR** 和 **prism-ml/Bonsai** 系列分别代表了两个极端：一个是追求实用“好用”，另一个是追求极致部署“能用”。**1-bit / 2-bit** 量化的流行表明，社区正积极拥抱在低功耗、消费级设备（手机、笔记本）上运行AI的愿景。
3.  **多模态能力全面开花**：除了传统的LLM，本周热门模型覆盖了**图像理解 (Kimi-K3)**、**文本生成图像 (Mage-Flow)**、**语音合成 (Inflect)**、**OCR (Unlimited-OCR)** 和 **计算机操控 (Fara1.5)**。这表明多模态不再是附属功能，而是成为模型的核心竞争力，且AI Agent的部署（如Computer Use）开始获得广泛关注。

---

#### **值得探索**

1.  **moonshotai/Kimi-K3**: 作为周榜冠军和月之暗面最新的多模态大脑，非常值得研究其多模态对齐技术和整体性能上限，代表了闭源公司对开源社区的最大诚意。
2.  **prism-ml/Ternary-Bonsai-27B-gguf**: 极限量化的典范。对于研究模型压缩、推理优化或希望在低端GPU部署大模型的开发者，这个模型是必看案例，其2位量化技术近乎常识的突破。
3.  **microsoft/Fara1.5-27B**: 专注于“计算机操控”的AI模型。这是未来AI Agent自主执行任务的核心，关注该模型的技术报告和如何使用，能让你提前洞察下一代人机交互范式。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*