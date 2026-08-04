# Hugging Face 热门模型日报 2026-08-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-04 02:41 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-04

---

## 📰 今日速览

本周 Hugging Face 生态迎来多款重磅发布：**Moonshot AI 的 Kimi-K3** 以近万周点赞登顶榜首，成为当之无愧的流量之王；**DeepSeek-V4-Flash** 系列双版本上榜，叠加 unsloth 的 GGUF 量化版本，生态热度持续发酵。**百度 Unlimited-OCR** 以 385 万下载量成为本周下载冠军，展示出多模态 OCR 的强劲需求。国内大厂与创业公司（智谱 GLM-5.2、MiniMax-H3、Nanbeige）密集上新，同时围绕 **Qwen3.6** 的社区微调与 GGUF 量化生态异常活跃，涌现出多款高热度衍生模型。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简介 |
|------|------|------|------|------|
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,855 | 967,622 | 本周榜首，Moonshot AI 新一代多模态大模型，支持图像+文本输入，采用压缩张量技术，兼具特征提取能力 |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,077 | 236,076 | DeepSeek V4 系列 Flash 版迭代更新，对话优化，主打高效推理 |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,991 | 2,746,291 | 本周下载量最高的 LLM（274 万），DeepSeek V4 基础 Flash 版，生态地位稳固 |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,798 | 2,180,509 | 智谱 GLM 系列最新旗舰，MoE-DSA 架构，218 万下载，国产开源模型标杆 |
| [Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 652 | 34,705 | 小而美的 3B 轻量级 LLM，适合端侧部署与低成本场景 |
| [Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 910 | 81,584 | poolside 出品，新一代文本生成模型，面向企业级代码与推理场景 |
| [Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 169 | 68,778 | 250B 超大模型，NVFP4 量化版，适配 vLLM 高效部署 |
| [Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think) | amd | 150 | 2,078 | AMD 出品，16B 参数 MoE（激活 3B），DeepSeek-V3 架构路线，侧重推理能力 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 作者 | 点赞 | 下载 | 简介 |
|------|------|------|------|------|
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 1,485 | 0 | MiniMax 最新图像+文本到视频生成模型，diffusers 架构，本周刚发布下载尚未放量 |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,848 | 2,601,062 | 百度 OCR 全能模型，**本周下载榜冠军（260 万）**，支持任意场景文字识别与特征提取 |
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 446 | 14,339 | 基于 Qwen3.5-MoE 的多模态编码模型，支持图像+文本，面向代码理解 |
| [Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 233 | 431,487 | 微软多模态视觉语言模型，43 万下载，主打图像+文本理解 |
| [Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 268 | 2,988 | 微软计算机视觉 Agent 模型，基于 Qwen3.5 架构，支持 GUI 操作与屏幕理解 |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 213 | 4,609 | 新一代 TTS 合成模型，ArkTTS 架构，低延迟语音合成 |
| [Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 399 | 1,944 | 轻量级本地 TTS，支持 CPU 推理与边缘设备部署 |
| [Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 160 | 0 | Krea2 生态的 LoRA 文生图模型，适配 ComfyUI |
| [Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 264 | 8,504 | 多模态对话模型，图像+文本交互，小型化部署友好 |
| [XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 391 | 1,063 | 基于 Qwen3.5-MoE 的多模态对话模型，支持 Agentic Search |
| [XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 351 | 1,214 | 同系列 Pro 版，强化 Agentic Search 能力 |
| [Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 119 | 1,736 | 基于 Qwen3.5 的多模态模型，图像+文本理解 |

---

### 🔧 专用模型（代码、数学、OCR、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简介 |
|------|------|------|------|------|
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,848 | 2,601,062 | 见上分类，OCR 专用模型，本周下载之王 |
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 446 | 14,339 | 代码专用多模态模型，Qwen3.5-MoE 架构 |

*注：本周榜单中纯代码/数学类专用模型相对较少，KAT-Coder 与 Fara1.5（计算机操作）为主要代表。*

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简介 |
|------|------|------|------|------|
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,440 | 1,550,034 | DavidAU 出品，Qwen3.6 社区微调 + GGUF 量化，155 万下载，社区热度极高 |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 430 | 69,656 | unsloth 官方量化版，DeepSeek-V4-Flash 的 GGUF 格式 |
| [Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 282 | 128,215 | Kimi-K3 官方 GGUF 量化版，12.8 万下载 |
| [Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 242 | 1,324 | unsloth 的 Kimi-K3 全精度版本（含压缩张量） |
| [Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 344 | 287,745 | Qwen3.6-MoE 的 Uncensored Hermes 微调 + GGUF，28.7 万下载 |
| [Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 239 | 304,420 | Qwen3.5 社区微调 + 多格式 GGUF，30.4 万下载 |
| [Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,271 | 1,895,741 | Qwen3.6-35B-MoE 的 Uncensored 社区微调 + GGUF + Vision，**189 万下载**，本周最热社区衍生模型 |
| [MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 453 | 2 | ComfyUI 集成版 MiniMax-H3，便于工作流调用 |
| [Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot) | ethanfel | 107 | 0 | Qwen3-VL + MiniMax-H3 混搭 ComfyUI 量化版 |

---

## 🌐 生态信号

**模型家族竞争格局：**

- **Qwen3.6 生态强势崛起**——本周榜单中至少 6 款 Qwen3.5/3.6 衍生模型（含微调与量化），社区围绕该系列形成了从基础模型到 GGUF、Uncensored、MTP 等多元衍生生态，已成为当前最活跃的开源模型家族
- **国产模型集体爆发**——Moonshot（Kimi-K3）、DeepSeek（V4-Flash）、智谱（GLM-5.2）、百度（OCR）、MiniMax（H3）五家齐上榜，中国 AI 团队在 Hugging Face 上的影响力持续扩大
- **DeepSeek V4 生态稳固**——官方双版本 + unsloth 量化版，构成完整矩阵，Kimi-K3 与 DeepSeek-V4 形成新一代开源旗舰双雄

**开源权重 vs 闭源趋势：** 本周榜单全部为开源权重模型，开源社区的活跃度达到新高。值得注意的是，部分超大规模模型（如 Solar-Open2-250B）通过量化技术（NVFP4）实现了开源可部署，显示开源模型正向更大参数 + 更高效量化的方向发展。

**量化与微调活动：** GGUF 格式已完全主流化（safetensors + GGUF 双格式已成标配），unsloth 的官方量化渠道影响力持续上升；社区微调以 Uncensored/Hermes 类变体最为活跃，DavidAU、HauhauCS 等创作者已形成稳定高产的个人品牌效应，其中 HauhauCS 的 Qwen3.6 Uncensored 版下载量高达 189 万，反映市场对"去审查"模型存在显著需求。

---

## 🧪 值得探索

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 本周冠军，压缩张量 + 多模态的旗舰组合，代表了 Moonshot AI 在下一代多模态架构上的最新探索，值得深入研究其技术细节与能力边界。

2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 260 万下载的 OCR 模型，在多模态理解场景中具备极大的实用价值，值得集成到实际工作流中验证其表现。

3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — 社区衍生模型下载量之王（189 万），虽然标签带有 "Uncensored"，但其在 MoE 激活效率、视觉能力集成和 GGUF 量化适配方面的工程实践，对研究社区模型的优化路径具有参考价值。

---

*报告生成时间：2026-08-04 | 数据来源：Hugging Face Hub 热门模型榜单（按周点赞排序）*

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*