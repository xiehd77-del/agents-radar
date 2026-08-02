# Hugging Face 热门模型日报 2026-08-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-02 02:55 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-02

---

## 📌 今日速览

本周榜单由 **Kimi-K3（9,494 赞）** 一骑绝尘领跑，标志着多模态理解模型正式登顶开源社区热度榜首。**DeepSeek-V4-Flash** 系列凭借 280 万+ 下载量验证了其推理场景的实用价值，同时衍生出 GGUF、微调等多层次生态。值得关注的是，**Qwen3.6 系列成为社区微调最活跃的基座**，多个“Uncensored”变体霸榜下载量前列。Z.ai 的 **GLM-5.2** 以 MoE 架构与对话能力斩获 4,737 赞，成为国产开源模型的有力竞争者。此外，**微软**连发三款模型（Mage-VL、Fara1.5-27B、VibeVoice-ASR），端侧 ASR 与 Agent 场景布局明显加速。

---

## 🔥 热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|---------|---------|-----------|
| [**DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 1,442 | 15,366 | V4 系列迭代版本，以推理效率与长文本能力登榜，附 arXiv 论文支持。 |
| [**GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,737 | 1,683,442 | Z.ai 旗舰对话模型，采用 MoE-DSA 架构，国产开源模型热度标杆。 |
| [**DeepSeek-V4-Flash**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,947 | 2,814,414 | 周下载量冠军，高性价比推理模型，社区部署首选。 |
| [**Solar-Open2-250B**](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 718 | 13,426 | Upstage 开源 250B 稠密模型，主打开放权重与多语言能力。 |
| [**Laguna-S-2.1**](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 868 | 77,021 | poolside 推出的编程/推理增强模型，企业级应用定位。 |
| [**Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 611 | 27,892 | 高性价比 3B 轻量 LLM，适合端侧与垂直场景部署。 |
| [**Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,672 | 59,076 | 多模态对话模型，通用指令跟随能力突出。 |
| [**Inkling-Small**](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 213 | 3,998 | 上述模型的轻量化版本，平衡性能与资源占用。 |

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到X）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|---------|---------|-----------|
| [**Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | **9,494** | 559,924 | 本周断层第一，Kimi 系列多模态理解模型，支持图像+文本联合推理。 |
| [**Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,714 | 2,457,387 | 百度开源 OCR 大模型，覆盖印刷体/手写体/复杂版面，下载量领先。 |
| [**Mage-VL**](https://huggingface.co/microsoft/Mage-VL) | microsoft | 173 | 10,525 | 微软多模态视觉语言模型，聚焦细粒度视觉理解。 |
| [**Fara1.5-27B**](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 242 | 2,775 | 面向 Computer-Use 场景的多模态模型，融合 Qwen3.5 基座。 |
| [**Inflect-Micro-v2**](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 364 | 1,565 | 可 CPU 运行的轻量 TTS 模型，主打本地化边缘部署。 |
| [**Audio8-TTS-Preview-0.6b**](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 167 | 3,254 | 0.6B 参数 TTS 模型，基于 ArkTTS 架构，兼顾质量与效率。 |
| [**VibeVoice-ASR-BitNet**](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 141 | 5,835 | 微软端侧 ASR 模型，采用 BitNet 与 GGUF 双格式支持。 |
| [**Kroma**](https://huggingface.co/lodestones/Kroma) | lodestones | 97 | 0 | 基于 Krea2 的图像生成 LoRA，适配 ComfyUI 工作流。 |

### 🔧 专用模型（代码 / 数学 / 嵌入）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|---------|---------|-----------|
| [**KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 391 | 10,771 | 基于 Qwen3.5-MoE 的代码生成模型，开发者预览版。 |
| [**XYZ-Aquila-mini**](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 358 | 650 | 主打代码/工具调用的 MoE 模型，Qwen3.5 架构衍生。 |
| [**XYZ-Aquila-pro**](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 331 | 923 | Aquila 专业版，强化 Agentic-Search 能力，面向复杂任务。 |

### 📦 微调与量化（社区微调 / GGUF / 量化）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|---------|---------|-----------|
| [**Qwen3.6-27B-Fable-Fusion-...-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,240 | 1,173,001 | Qwen3.6 社区激进微调版本，多技术栈融合，下载量破百万。 |
| [**Qwen3.6-35B-A3B-Uncensored-...-GGUF**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,226 | 1,823,436 | 35B-A3B MoE 非审查微调，兼顾视觉能力，社区热度极高。 |
| [**Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,135 | 716,341 | 27B 三值量化（2-bit）模型，以极致压缩比实现本地部署。 |
| [**DeepSeek-V4-Flash-0731-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 292 | 4,048 | unsloth 官方量化版，方便本地快速接入。 |
| [**Kimi-K3-GGUF**](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 243 | 41,337 | K3 的 GGUF 量化版本，扩展边缘部署场景。 |
| [**Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF**](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 289 | 228,610 | Hermes 风格非审查 MoE 量化版，社区下载活跃。 |
| [**Solar-Open2-250B-Nota-NVFP4**](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 152 | 22,396 | 面向 vLLM 的 NVFP4 量化版本，优化推理显存占用。 |
| [**Qwen3.6-35B-A3B-Escha-W2**](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 112 | 875 | Escha 实验室推出的 2-bit 量化 MoE 版本，极致压缩。 |
| [**Qwen3.5-9B-The-Defiant-Fable-...-GGUF**](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 188 | 267,572 | 9B 非审查微调 GGUF，轻量级选择，下载表现稳健。 |
| [**Qwythos-27B-v1**](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 89 | 941 | 基于 Qwen3.5 的 27B 多模态微调首版。 |

---

## 🌐 生态信号

**多模态成为绝对主场**：本周 TOP 30 中近半数模型支持 image-text-to-text，Kimi-K3 的断层领先与 Unlimited-OCR 的超高下载量共同指向多模态理解的主流化。**DeepSeek-V4-Flash 生态完整度高**，官方权重、GGUF 量化、论文配套齐备，验证了“旗舰模型+周边生态”的发布范式。**Qwen3.6 成为社区微调第一基座**，Uncensored 类衍生模型包揽多个高下载位次，反映出开源社区对“去审查+高能力”组合的持续需求。**量化技术路线百花齐放**：GGUF 仍是绝对主流，但 NVFP4（vLLM 生态）、Ternary 2-bit 等新方案开始走向实用，让 27B 级模型在消费级硬件上运行成为可能。**微软动作频繁**，四款模型覆盖多模态、Agent、端侧 ASR，闭源巨头正加速拥抱开源生态。值得注意的是，`Kroma`（LoRA）下载量为 0，提示图像生成赛道竞争格局已高度固化。整体看，中国团队（moonshotai、deepseek、zai-org、baidu）在开源影响力上已形成集群优势。

---

## 🔬 值得探索

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 本周断层第一，代表多模态理解的最新水平，且支持 compressed-tensors 技术，值得研究其架构设计与推理优化策略。

2. **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — 将 27B 模型压缩至 2-bit 级别仍保持对话能力，是极限量化的前沿样本，对本地部署与边缘计算极具参考价值。

3. **[Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)** — 面向 Computer-Use 场景的多模态模型，代表了 Agent 与 GUI 交互的前沿方向，微软在这一赛道的开源布局值得追踪。

---

*报告生成时间：2026-08-02 | 数据来源：Hugging Face Hub Weekly Trending*

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*