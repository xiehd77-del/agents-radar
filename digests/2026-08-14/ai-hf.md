# Hugging Face 热门模型日报 2026-08-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-14 02:04 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-14

## 📰 今日速览

今日 Hugging Face 趋势榜呈现出**视频生成与多模态模型主导**的格局，MiniMax-H3 及其衍生生态（Turbo LoRA、ComfyUI 适配、GGUF 量化）占据近三分之一席位，展现出强劲的社区渗透力。语言模型方面，**DeepSeek-V4 系列与 Qwen3.8 MoE** 双雄并立，MoE 架构成为旗舰模型标配。值得关注的是，**Kimi-K3 以 10,623 周点赞断层登顶**，成为本周最大黑马——其作为多模态压缩模型，采用压缩张量技术路线，预示端侧高效多模态成为新竞争焦点。此外，NVIDIA Nemotron 3.5 Lightning 系列双精度版本齐发，Meta 的 Muse-Glimmer-30B 也通过多格式（GGUF）分发扩大影响力。

---

## 🏆 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,323 | 1.43M | DeepSeek V4 闪电版，以高效推理见长，迅速成为社区部署主流选择。 |
| [Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 789 | 1,012 | 2.4T 参数总量、95B 激活的 MoE 巨兽，Qwen 新一代旗舰语言基座。 |
| [DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 302 | 0 | V4 Pro 正式版，刚发布暂无下载，代表 DeepSeek 最强性能水准。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 603 | 116.6K | 2.6B 液态神经网络模型，以小体积提供高效推理能力。 |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 354 | 3,868 | MoE 架构预览模型，主打因果语言建模，引发架构探索讨论。 |
| [Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 160 | 4,000 | Qwen 巨兽的 FP8 量化版，降低部署门槛，适配更广泛硬件。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,826 | 1.61M | MiniMax 新一代视频生成旗舰，图文生视频，热度持续霸榜。 |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | **10,623** | 1.87M | **本周点赞冠军**，Moonshot 多模态压缩模型，压缩张量技术引领端侧 AI 新方向。 |
| [Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,423 | 121K | Meta 多模态对话模型，图文理解生成一体，与 K3 形成路线对比。 |
| [MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 339 | 25 | MiniMax 音乐生成新作，支持 SGLang-Omni 推理框架，文本到音乐。 |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 724 | 57.3K | 全能视频工具，支持图生视频、文生视频、视频到视频多任务。 |
| [Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 131 | 0 | 文生图扩散模型，提供单文件 ComfyUI 友好格式。 |

### 🔧 专用模型（嵌入、语音、图像理解等）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 229 | 44.9K | NVIDIA 30B-A3B MoE 模型 NVFP4 量化版，主打高能效部署。 |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 130 | 22.3K | 同系列 BF16 版本，提供完整精度的研究与微调基准。 |
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 372 | 1,164 | NVIDIA 语音对话专用模型，11B 参数支持自然语音交互。 |
| [Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 216 | 1,292 | 中科闻歌 Ling 系列小模型，bailing_hybrid 混合架构，MIT 协议。 |

### 📦 微调与量化（社区微调、GGUF、LoRA）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [MiniMax-H3 (Comfy-Org)](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,291 | **10.37M** | **下载量最高**，ComfyUI 官方适配版，推动 MiniMax 大规模社区应用。 |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,987 | 2.79M | 高热度社区微调 GGUF，主打无审查特性，引发讨论。 |
| [Muse-Glimmer-30B-GGUF (unsloth)](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 389 | 352K | unsloth 量化工具链产物，Meta 多模态模型的轻量化部署首选。 |
| [MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 726 | 0 | MiniMax 视频模型的 Turbo LoRA 插件，开发中但热度高。 |
| [Muse-Glimmer-30B-GGUF (meta-models)](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 257 | 137K | 官方 GGUF 版本，配合 arXiv 论文发布，学术与实践并重。 |
| [MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 314 | 0 | ComfyUI 深度整合的 Turbo LoRA，简化创作流程。 |
| [MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 149 | 111K | 视频模型的 GGUF 量化版，探索 diffusion 模型压缩边界。 |
| [MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 159 | 4.7K | fal 推出的写实人物生成 LoRA，面向影视级内容创作。 |
| [MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 149 | 652 | 提示词重写 LoRA，专为 MiniMax-H3 优化文本到视频提示质量。 |

---

## 📊 生态信号

- **MiniMax 生态势能极强**：MiniMax-H3 已从单一模型演变为完整生态（Turbo LoRA、ComfyUI 适配、GGUF 量化、Prompt Rewriter、Realism LoRA），以 9 个关联模型构成榜单最大家族，显示**视频生成进入平台化竞争阶段**。
- **MoE 架构成为旗舰标配**：DeepSeek-V4、Qwen3.8、NVIDIA Nemotron 3.5 Lightning 均采用 MoE，**高效推理与稀疏激活**成为大模型主流技术路线。
- **压缩与端侧智能崛起**：Kimi-K3 的压缩张量技术以 10.6K 点赞登顶，结合 Qwen FP8、NVIDIA NVFP4 等量化发布，**模型压缩从工程优化上升为核心研究方向**。
- **开源权重全面开花**：榜单几乎全部为开源权重模型，配合 GGUF/FP8/AWQ 等多格式分发，**开源生态的"基础设施化"趋势明显**。

---

## 🔭 值得探索

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 本周最大黑马。其压缩张量技术路线可能重新定义多模态模型在端侧的部署可能性，值得深入研究其压缩机制与推理效率的平衡点。

2. **[DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — 143 万下载验证了其社区价值。V4 系列延续 DeepSeek 开源最强性能的定位，Flash 版本体现"快而不妥协"的工程哲学。

3. **[MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF)** — 视频扩散模型的 GGUF 量化是一次大胆尝试。如果 stable-diffusion.cpp 推理路径被验证可行，将开启**视频生成模型本地化部署**的新纪元。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*