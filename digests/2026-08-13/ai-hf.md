# Hugging Face 热门模型日报 2026-08-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-13 02:06 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-13

> 收录周期：周点赞数排序 Top 30 | 数据来源：Hugging Face Hub


## 📌 今日速览

本周 Hugging Face 生态迎来三大信号：**Kimi-K3 以 10,584 周点赞断层登顶**，标志着端侧/压缩大模型的热度持续飙升；**MiniMax-H3 系列席卷全榜**，官方与社区衍生模型合计占据 10 席，视频生成赛道竞争白热化；**DeepSeek-V4-Flash 下载量突破 100 万**，印证推理侧高效模型的强需求。此外，Meta 的 Muse-Glimmer-30B（图像+文本对话）与 NVIDIA Nemotron 系列（语音/轻量推理）构成了大厂第二梯队。量化生态方面，GGUF 变体成为社区标配，Unsloth 贡献了多款主流模型的量化版本。


## 🏆 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|---|---|---|---|---|
| [**Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | **10,584** | 1,565,484 | 月之暗面端侧旗舰，主打压缩张量+特征提取，登顶本周热度榜 |
| [**DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,240 | **1,048,685** | 高效对话模型，百万级下载验证推理侧强需求 |
| [**Qwen3.8-2.4T-A95B**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 524 | 978 | 2.4T 参数 MoE 旗舰，95B 激活，千问 3.5 架构延续 |
| [**Qwen3.8-2.4T-A95B-FP8**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 119 | 3,851 | 旗舰 MoE 的 FP8 量化版，降低部署门槛 |
| [**LFM2.5-2.6B**](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 586 | 93,668 | Liquid AI 液体神经网络架构，2.6B 小参数高关注 |
| [**NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 116 | 15,740 | 30B 总参/3B 激活，NVIDIA 轻量推理主力 |
| [**NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 206 | 19,250 | 同上模型的 NVFP4 压缩版，更适合有限显存部署 |
| [**maple-preview**](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 346 | 2,049 | MoE 因果语言模型预览版，社区关注度上升中 |
| [**Ling-3.0-flash**](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 319 | 6,148 | Ling 系列轻量对话模型，主打 custom_code 灵活适配 |
| [**Ling-3.0-tiny**](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 192 | 0 | Ling 系列极小规模版本，MIT 协议完全开源 |


### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|---|---|---|---|---|
| [**MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,717 | 83,484 | 官方视频生成主力，支持图生视频+文生视频双模式 |
| [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,258 | **6,798,796** | ComfyUI 官方适配版，近 680 万下载生态渗透力惊人 |
| [**Muse-Glimmer-30B**](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,298 | 0 | Meta 图像+文本联合对话模型，多模态对话新方向 |
| [**MiniMax-H3-Turbo-Lora**](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 701 | 0 | 社区 LoRA 加速版，Turbo 化视频生成 |
| [**LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 573 | 39 | 全功能视频编辑模型（图生/文生/视频生视频） |
| [**Minimax-h3-Turbo**](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 411 | 20,376 | 社区 Turbo 版，支持图像/文本/参考视频到视频 |
| [**NVIDIA-NemotronLabs-VoiceChat-11B**](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 353 | 653 | 语音对话专用模型，Nemotron 生态多模态延伸 |
| [**MiniMax-H3-Turbo-Lora-ComfyUI**](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 301 | 0 | 面向 ComfyUI 的 Turbo LoRA 适配 |
| [**PinkCherry_MiniMax-H3**](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 287 | 0 | 风格化微调版本，Apache 2.0 协议 Endpoint 部署 |
| [**Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot**](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 477 | 0 | Qwen3-VL + MiniMax-H3 融合，INT8 量化 ComfyUI 集成 |
| [**BigBang-v1**](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 182 | 708 | Qwen3.5 MoE 多模态对话版，图像文本联合理解 |
| [**MiniMax-H3-Realism-People-LoRA**](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 147 | 0 | 人像写实增强 LoRA，聚焦人物生成质量 |
| [**MiniMax-H3-Prompt-Rewriter-LoRA**](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 141 | 353 | Prompt 改写专用 LoRA，优化视频生成指令质量 |
| [**MiniMax-H3-GGUF**](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 137 | 781 | GGUF 量化版，面向 stable-diffusion.cpp 生态 |


### 🔧 专用模型（代码、数学、医疗、嵌入等）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|---|---|---|---|---|
| [**NVIDIA-NemotronLabs-VoiceChat-11B**](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 353 | 653 | 语音对话专用场景，Nemotron 多模态扩展（已在上方列出） |
| [**MiniMax-H3-Prompt-Rewriter-LoRA**](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 141 | 353 | Prompt 改写工具链（已在上方列出） |

> 本周 Top 30 中暂无明显独立的代码/数学/医疗模型，该类目热度被多模态与 LLM 生态吸收。


### 📦 微调与量化（社区微调、GGUF、AWQ、LoRA）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|---|---|---|---|---|
| [**Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,958 | 2,521,093 | 社区微调+GGUF 顶流，主打低安全限制+250 万下载 |
| [**DeepSeek-V4-Flash-0731-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 666 | 207,990 | Unsloth 出品 DeepSeek 量化版，本地部署首选 |
| [**Muse-Glimmer-30B-GGUF (unsloth)**](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 360 | 0 | Meta 多模态模型的 GGUF 量化，本地运行多模态对话 |
| [**Muse-Glimmer-30B-GGUF (meta-models)**](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 241 | 0 | 官方自出 GGUF，附带完整学术引用 |
| [**MiniMax-H3-experimental**](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 214 | 0 | 社区实验版，探索 MiniMax-H3 更多可能性 |
| [**MiniMax-H3_comfy**](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 295 | 0 | ComfyUI 工作流适配版 |


## 🌐 生态信号

**模型家族格局**：MiniMax-H3 以官方+社区衍生覆盖全榜单 1/3，视频生成生态正在急速膨胀；**Kimi-K3 登顶**与 DeepSeek-V4 百万下载验证了端侧/推理高效模型的爆发力；Qwen3.8 MoE 家族（2.4T/FP8）展现千问在大模型层的持续统治力。

**开源 vs 闭源**：头部榜单全部为开源权重模型。值得注意的是，Meta、NVIDIA、月之暗面等闭源大厂正以开源权重为武器抢占生态位，完全闭源模型在 HF 热度榜已无立足之地。

**量化与微调双热**：GGUF 已成为主流格式（Unsloth 贡献超半数），INT8/NVFP4/FP8 等压缩方案多样化；社区微调呈现两个极端——DavidAU 的单模型 250 万下载（低限制类）与 LoRA 小型化（Prompt Rewriter 仅 141 赞）并存，说明创作者经济与工具链生态均在成熟。


## 🔬 值得探索

1. **Kimi-K3**（[链接](https://huggingface.co/moonshotai/Kimi-K3)）— 以 1 万+点赞断层登顶，`compressed-tensors` 新架构值得研究者深挖；百万级下载表明已在生产环境被验证。

2. **MiniMax-H3 全家族**（[官方](https://huggingface.co/MiniMaxAI/MiniMax-H3) / [Comfy-Org 版](https://huggingface.co/Comfy-Org/MiniMax-H3)）— 视频生成赛道核心标的。官方版 8 万下载 + 社区版 680 万下载，是观察视频生成采纳率的绝佳窗口。

3. **Qwen3.8-2.4T-A95B**（[链接](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)）— 2.4T 参数 MoE 代表当前开源 LLM 的规模天花板，关注其与 FP8 版本（[链接](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8)）的精度/性能权衡，是研究 MoE 缩放律的极佳样本。

---

*报告生成时间：2026-08-13 | 数据源：Hugging Face Hub Trending*

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*