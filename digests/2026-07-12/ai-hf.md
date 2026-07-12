# Hugging Face 热门模型日报 2026-07-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-12 02:55 UTC

---

好的，作为 AI 模型生态分析师，这是对 2026-07-12 Hugging Face 热门模型的深度日报分析。

---

# Hugging Face 热门模型日报 (2026-07-12)

### 今日速览

今日 Hugging Face 生态呈现三大亮点：**MoE（混合专家）架构全面开花**，从腾讯的 Hy3 到 NVIDIA 的 Audex，均采用了稀疏激活的 MoE 设计，追求极致的效率与性能平衡。**Qwen 3.5/3.6 系列微调与量化版本主导了榜单**，大量社区开发者基于其基座模型进行推理增强、去审查或 GGUF 量化，显示出其作为主力开源平台的强大生态。此外，**多模态和垂直领域模型强势崛起**，百度、NVIDIA 等大厂发布的 OCR 和通用定位模型下载量领先，标志着 AI 应用正从通用对话向更专业的视觉理解任务渗透。

### 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
  - 作者: tencent | 点赞: 698 | 下载: 8,210
  - 腾讯发布的最新 MoE 文本生成模型，作为混元大模型家族的新成员，其技术架构和性能备受业界关注。
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 点赞: 3,834 | 下载: 421,270
  - 智谱 AI 开源的最新版 GLM 模型，凭借其强大的对话能力和 MoE 架构，成为本周顶流。
- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)**
  - 作者: nvidia | 点赞: 122 | 下载: 743
  - NVIDIA 推出的 30B 总参数量、3B 激活参数的 MoE 模型，专注于提供高效的实验室级辅助能力。
- **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)**
  - 作者: nvidia | 点赞: 107 | 下载: 30,418
  - NVIDIA 又一款 75B 超大 MoE 模型，专为复杂逻辑推理和“拼图”类问题设计，展示了其在推理前沿的布局。
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
  - 作者: OpenMOSS-Team | 任务: audio-text-to-text | 点赞: 110 | 下载: 12,817
  - 一款集转录与说话人分离于一体的语音交互大模型，直接输出结构化文本，简化了语音处理pipeline。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  - 作者: empero-ai | 点赞: 2,015 | 下载: 1,944,961
  - 基于 Qwen3.5 的 9B 多模态模型量化版，融合了 Claude 风格的角色扮演与推理能力，因其高性能和低门槛备受社区追捧。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者: baidu | 点赞: 1,931 | 下载: 1,380,690
  - 百度推出的通用 OCR 模型，支持在任意场景下进行文字识别，强大且普适的实用性让其下载量飙升。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 点赞: 2,653 | 下载: 2,641,936
  - 基于 Qwen3.6 的去审查 MoE 模型量化版，以其“激进”和无限制的风格在特定用户群体中爆红，下载量惊人。
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 点赞: 2,707 | 下载: 1,472,194
  - NVIDIA 推出的 3B 通用目标定位模型，能够通过文本描述在图像中找到任何物体的位置，视觉理解能力极强。
- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
  - 作者: krea | 点赞: 588 | 下载: 168,154
  - Krea 发布的第二代文生图模型的加速版，在保持高质量生成的同时显著提升了推理速度。
- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**
  - 作者: Alissonerdx | 点赞: 100 | 下载: 0
  - 针对视频生成模型 LTX-2 的身份保留 LoRA，能确保生成的视频人物保持一致的面部特征。
- **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)**
  - 作者: CohereLabs | 点赞: 90 | 下载: 7,687
  - Cohere 推出的阿拉伯语专用语音识别模型，填补了非英语高资源语言模型的重要空白。
- **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)**
  - 作者: mistralai | 点赞: 189 | 下载: 350
  - Mistral AI 最新的超大 MoE 模型，以119B总参数量和6B激活参数，展示了其在极低推理成本下实现高性能的路线。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
  - 作者: google | 点赞: 349 | 下载: 20,110
  - Google 发布的表格数据基础模型，支持分类与回归，展示了零样本处理表格数据的能力，填补了行业空白。
- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
  - 作者: InternScience | 点赞: 495 | 下载: 28,141
  - 专为 Agent（智能体）场景设计的 MoE 模型，融合了文本与图像理解能力，旨在提升AI自主执行任务的效果。
- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
  - 作者: yuxinlu1 | 点赞: 1,150 | 下载: 436,530
  - 基于 Gemma-4 微调的 Agent 模型，强化了代码编写与终端操作能力，使其能在计算机上自主完成复杂任务。
- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)**
  - 作者: SupraLabs | 点赞: 99 | 下载: 1,275
  - 一个轻量级的路由模型，用于在大模型集群中智能调度请求，是构建高效推理系统的基础组件。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**（已在上文列出）
  - Qwen3.5 的 Claude 风格微调+GGUF量化，下载量近200万，是社区最活跃的衍生版本。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**（已在上文列出）
  - Qwen3.6 的去审查+GGUF量化，下载量超260万，体现了社区对开放性强大模型的强烈需求。
- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)**
  - 作者: unsloth | 点赞: 141 | 下载: 38,922
  - 知名加速库 Unsloth 发布的 DeepSeek-V4 的量化版，旨在让最新的大模型能在消费级硬件上高效运行。
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者: unsloth | 点赞: 1,049 | 下载: 2,904,169
  - Unsloth 对 Qwen3.6 的优化版量化模型，下载量极高，是高效玩家部署多模态模型的首选。
- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
  - 作者: deepreinforce-ai | 点赞: 852 | 下载: 1,216,495
  - 一款35B的通用文本生成模型量化版，以其 MIT 许可和高兼容性获得大量下载。
- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)**
  - 作者: GnLOLot | 点赞: 192 | 下载: 29,887
  - 基于 MiniCPM5 的1B小参数模型，融入了 Claude 风格的思考能力，是资源受限设备上部署推理模型的优秀范例。

### 生态信号

- **Qwen 家族成为社区基石**：从 3.5 到 3.6 版本，Qwen 系列模型在微调、量化、去审查等各个环节都占据了榜单核心位置。这表明 Qwen 已成为当前最具活力的开源 LLM 生态平台，其开放性直接催生了庞大的衍生模型生态。
- **MoE 架构正式成为主流**：无论是大厂（Tencent, NVIDIA, Mistral）还是独立开发者，都广泛采用 MoE 架构。这标志着业界对“更大总参数量、更低激活参数”这一效率路线的集体认可，未来推理成本与模型能力之间的矛盾将进一步缓解。
- **量化是社区参与的第一站**：GGUF 格式的模型占据了下载量的绝对高地。这说明 HPC 社区和普通用户对在本地运行大模型的热情极高。Unsloth 等工具的普及让量化门槛降至冰点，成为连接前沿研究与消费级硬件的最重要桥梁。

### 值得探索

1.  **[@nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    - **理由**：这是一个非常直接的“工业级”视觉模型，3B 的大小使其易于部署。它打破了传统目标检测需要预定义类别的限制，通过自然语言即可定位任意物体，对智能安防、机器人、内容审核等场景极具实用价值。

2.  **[@OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
    - **理由**：它将语音转录和说话人分离两大任务整合到一个模型中，直接输出结构化对话记录。这不仅简化了语音AI的开发流程，也预示了未来端到端多模态交互模型的发展方向，值得所有开发者体验。

3.  **[@supraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)**
    - **理由**：在大模型应用从单模型走向多模型编排的今天，一个智能的模型路由网关（Router）至关重要。这个 51M 的轻量级路由器是构建高性能、高可用 AI 服务系统的基础技术栈，值得所有关注工程化落地的团队研究。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*