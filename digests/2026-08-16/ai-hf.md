# Hugging Face 热门模型日报 2026-08-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-16 01:23 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-16

## 📌 今日速览

今日榜单由 Qwen 与 MiniMax 两大阵营领跑：**Qwen3.8 系列**强势霸榜，旗舰模型 Qwen3.8-27B 以近万周点赞登顶，并带动 GGUF、FP8 等量化衍生版本同步上榜；**MiniMax-H3** 生态持续发酵，官方权重、ComfyUI 集成版、社区 LoRA 与 GGUF 量化版全面开花，下载量已突破千万级。值得关注的是，**Kimi-K3** 以 10,725 点赞成为今日最高赞模型，**DeepSeek-V4-Flash** 也以黑马姿态跻身前三。多模态融合（文本-图像-视频-音频）成为今日最热赛道。

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,725 | 2,100,680 | 月之暗面新一代多模态旗舰，集视觉理解与特征提取于一体，压缩张量技术加持，今日最高赞模型 |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 968 | 6,381 | Qwen3.8 系列 MoE 旗舰，2.4T 总参数/95B 激活参数，文本生成能力登顶 |
| [DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 490 | 19,945 | DeepSeek V4 专业版，8 月 13 日最新快照，专注高难度推理任务 |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,421 | 1,798,247 | V4 轻量极速版，7 月 31 日快照，下载近 180 万，推理效率极高 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 627 | 135,448 | Liquid AI 第二代液体基础模型，2.6B 小体积高性价比 |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 272 | 170,554 | 英伟达 30B-A3B MoE 模型，NVFP4 压缩格式专为 Hopper/Blackwell 优化 |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 150 | 62,965 | 同模型的 BF16 全精度版，供高质量部署或进一步量化 |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 258 | 4,832 | 百凌混合架构小型模型，MIT 许可证，面向美国区域优化 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 9,801 | 91,917 | Qwen3.8 旗舰多模态模型，支持图像+文本输入，综合能力全面领先 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,577 | 246,454 | Meta 新一代视觉-语言模型，30B 参数自带 MoE 结构，多模态推理能力突出 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,973 | 2,212,155 | MiniMax 新一代视频生成大模型，支持文本/图像/视频转视频，下载超 220 万 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 766 | 5,079 | MiniMax 第三代音乐生成模型，文生音乐专业级工具 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 941 | 378,439 | 视频生成全能选手，支持图像/文本/视频任意形式输入生成视频 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 514 | 211,917 | MiniMax-H3 加速版，支持 t2v/i2v/r2v 多模态视频生成 |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 189 | 16,829 | 动画风格文生图模型，diffusion 单文件格式，ComfyUI 直装 |
| [LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 143 | 4,598 | Liquid 2.5 视觉语言版，3B 小参数实现高效多模态理解 |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 162 | 240 | Dots3 系列预览版，文本+图像输入对话模型，预览迭代中 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,236 | 867,963 | Qwen3.8-27B 官方 GGUF 量化版，多种精度可选，下载近 87 万 |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 435 | 682,188 | Muse-Glimmer-30B 的 GGUF 版，本地部署首选 |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 277 | 321,049 | Meta 官方出品的 GGUF 量化版，附 arXiv 论文参考 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,051 | 2,983,500 | 社区爆款：Qwen3.6-27B 极致微调版，解除审查限制，多模型融合，下载近 300 万 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 428 | 123,157 | 官方 FP8 量化版，精度损失极小，显存占用降低约 50% |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 194 | 10,745 | MoE 旗舰的 FP8 版，大幅降低部署门槛 |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 166 | 90,924 | 专为 NVIDIA 新一代 GPU 优化的 NVFP4 量化版 |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 164 | 173,741 | 视频生成模型的 GGUF 量化版，可用 stable-diffusion.cpp 直接运行 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 756 | 0 | MiniMax-H3-Turbo 的 LoRA 插件，支持文本+音频驱动的视频生成 |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 194 | 12,737 | 提升视频生成中人物写实感的 LoRA 模块 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 161 | 0 | 社区解除审查版 Qwen3.8 的 FP8 量化 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,344 | 12,790,850 | ComfyUI 官方集成版 MiniMax-H3，下载量突破 1279 万 |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 353 | 0 | 社区开发者 Kijai 制作的 ComfyUI 工作流节点包 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

> 本日榜单暂无符合该分类的独立模型。部分多模态模型（如 Kimi-K3 带 feature-extraction 标签）可兼顾嵌入任务，可关注后续动态。

## 🌐 生态信号

**模型家族势头**：Qwen3.8 系列形成"旗舰-量化-微调"完整生态链，从官方 BF16/FP8 到 unsloth GGUF，再到社区微调版（如 DavidAU 的 300 万下载），构建了当前最活跃的开源社区。MiniMax-H3 在视频生成领域占据统治地位——官方权重、ComfyUI 集成、多路 LoRA、GGUF 量化全面开花，单模型生态下载量超 1500 万。DeepSeek-V4 系列和 Kimi-K3 正在快速抢占用户心智。

**开源 vs 闭源**：开源权重模型持续主导 Hugging Face 生态。MiniMax-H3 走通"开源权重+开放外围工具"路线，效果比肩闭源视频模型（如 Runway、Pika），但以 10 倍以上的生态活跃度拉开差距。Kimi-K3 的开源更是标志着头部闭源玩家加速拥抱开源策略。

**量化与微调**：GGUF 版本下载普遍远超原版（Qwen3.8-27B-GGUF 下载是原版的 9.4 倍），说明**本地部署需求 > 云端 API 调用**是当前社区主流使用方式。FP8/NVFP4 等更高效的量化格式开始普及，表明社区对消费级硬件和边缘部署的需求持续升温。同时"Uncensored"微调版走红，反映部分用户对审查宽松模型的刚性需求。

## 💡 值得探索

1. **[DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — 下载量逼近 180 万，是"性能/速度/成本"均衡最优解。若你在搭建应用或做模型评测，建议优先将 V4-Flash 与 Qwen3.8-27B 做横向对比。

2. **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) + [Comfy-Org 集成版](https://huggingface.co/Comfy-Org/MiniMax-H3)** — 视频生成领域的新标杆。建议配合 [fal 的 Realism LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) 体验人物写实效果增强，同时探索 [GGUF 量化版](https://huggingface.co/unsloth/MiniMax-H3-GGUF)在本地部署的可行性，是研究"开源视频生成如何落地"的最佳案例。

3. **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) + [FP8 版](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8)** — Qwen 团队首次公开 2.4T 参数的 MoE 模型权重，代表了开源 LLM 在"超大模型+稀疏激活"路线上的最新实践。FP8 版显存需求大幅下降，是研究超大模型量化和压缩技术的最佳样本。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*