# Hugging Face 热门模型日报 2026-08-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-10 01:55 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-10

## 📰 今日速览

本周 Hugging Face 热点呈现 **"多模态视频生成 + 大语言模型迭代"** 双轮驱动格局。**MiniMax-H3** 系列以绝对统治力霸榜——原始模型、ComfyUI 封装、LoRA 微调、GGUF 量化、NVFP4 压缩等衍生版本合计 9 个模型上榜，下载量突破 500 万，成为现象级视频生成基座。语言模型方面，**zai-org/GLM-5.2**（4.9K 赞）与 **moonshotai/Kimi-K3**（10.4K 赞）分别代表国产开源通用的两大方向，其中 Kimi-K3 以压缩张量技术实现高效推理引爆社区。**Qwen3.6 / Qwen3-VL** 生态持续活跃，多款基于 Qwen 的社区微调（含 Heretic/Uncensored 分支）上榜，显示开源指令微调生态高度繁荣。DeepSeek-V4、LiquidAI LFM2.5 等新架构也在快速扩散中。


## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [**Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10.4K | 146万 | 月之暗面下一代多模态大模型，采用压缩张量技术实现高效推理，本周点赞最高 |
| [**GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4.9K | 249万 | 智谱新一代 MoE（DSA 架构）对话模型，推理成本显著优化，下载量巨大 |
| [**DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2.9K | 87万 | DeepSeek V4 闪电版，对话生成优化，支持最新 transformers 集成 |
| [**LFM2.5-2.6B**](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 453 | 8.6万 | Liquid AI 液态神经网络 2.5 代，2.6B 超小参数实现高性价比推理 |
| [**Ling-3.0-flash**](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 245 | 4.7K | 零一万物 Ling 3.0 闪电版，百灵混合架构，兼顾效率与质量 |
| [**maple-preview**](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 290 | 1.1K | DeepGrove 预览版 MoE 模型，因果语言建模新架构探索 |
| [**Shieldstral-1.0-3B**](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 211 | 5.7K | Mistral 安全对齐模型，vLLM 兼容，用于内容审核与护栏 |
| [**BigBang-v1**](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 125 | 482 | 基于 Qwen3.5-MoE 的端侧多模态对话模型 |
| [**Mach-1-Additive-35B**](https://huggingface.co/SyzygyResearch/Mach-1-Additive-35B) | SyzygyResearch | 104 | 1.6K | 三元加法权重实验模型，探索极端量化新路径 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [**MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3.2K | 3.5万 | MiniMax 新一代图/文生视频基座，diffusers 原生支持，本周最强视频模型 |
| [**FLUX.1-dev**](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14.1K | 48.7万 | 黑森林实验室文生图标杆模型，开发版持续霸榜 |
| [**Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4.0K | 289万 | 百度通用 OCR 多模态模型，不限语言/版式一键识别 |
| [**Minimax-h3-Turbo**](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 233 | 6.1K | H3 加速版，支持 t2v / i2v / r2v 多种视频生成模式 |
| [**Audio8-TTS-Preview-0.6b**](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 333 | 1.3万 | ArkTTS 架构语音合成新秀，自然度与韵律表现亮眼 |
| [**NVIDIA-NemotronLabs-VoiceChat-11B**](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 260 | 543 | 英伟达语音对话一体化模型，语音识别+合成+对话 |

### 🔧 专用模型（代码、数学、医疗、嵌入等）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [**KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 552 | 1.9万 | 基于 Qwen3.5-MoE 的代码生成开发版，多模态输入支持 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1.1K | **495万** | ComfyUI 官方单文件封装版 H3，社区分发最广的视频模型（下载近 500 万） |
| [**Qwen3.6-27B-Fable-Fusion-711...GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1.8K | 239万 | Qwen 3.6 27B 社区重混微调 GGUF，Unsloth 量化，下载量爆发 |
| [**Qwen3.6-35B-A3B-Uncensored...GGUF**](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 455 | 39.6万 | Qwen3.6 MoE 无审查 Hermes 风 GGUF，社区微调路线成熟 |
| [**MiniMax-H3-Turbo-Lora**](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 545 | 0 | H3 Turbo LoRA 适配器，低成本风格迁移方案 |
| [**MiniMax-H3 GGUF 量化版**](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 188 | 16万 | H3 多精度 GGUF 包，ComfyUI 直接加载 |
| [**Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4**](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 143 | 0 | Qwen3-VL 文本编码器 NVFP4 量化版，面向 H3 视频工作流 |
| [**DeepSeek-V4-Flash-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 628 | 18.9万 | Unsloth 量化打包 DeepSeek V4，llama.cpp 本地部署首选 |
| [**LFM2.5-2.6B-GGUF**](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 175 | 6.8万 | 液态小模型 GGUF 版，边缘设备部署潜力股 |


## 🌐 生态信号

**① 模型家族势头**：MiniMax-H3 是最强生态——官方基座+ComfyUI 封装（495万下载）+LoRA+GGUF+INT8/FP4 量化，形成完整"模型即产品"链路，预示视频生成将走 Stable Diffusion 同款社区繁荣路线。Qwen 系（3.5/3.6/3.6-35B）与 GLM 5.2 继续收割微调与量化生态，开源权重已全面对齐闭源标杆。

**② 开源 vs 闭源**：开源权重全面胜利。本周 Top 30 无一闭源 API-only 模型，且 Kimi-K3、GLM-5.2、DeepSeek-V4 等国产模型开源节奏显著加快。多模态（视频+语音）权重模型正在收敛为可复现、可部署的产品级资产。

**③ 量化与微调活动**：GGUF 量化覆盖"大模型+多模态"全品类，Unsloth 成量化事实标准。Uncensored/Heretic 分支持续活跃反映沙盒需求。NVFP4（英伟达 FP4）从 GPU 推断走向端侧视频模型量化，值得关注。


## 🔬 值得探索

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 压缩张量技术落地多模态大模型，10.4K 点赞证明其价值，研究推理效率与多模态融合的必读样本。

2. **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** — 近 500 万下载验证了"单文件视频模型+ComfyUI"工作流的爆发力，是理解视频生成社区生态的最佳入口。

3. **[LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** — 2.6B 参数挑战百亿级性能，液态网络架构值得关注，尤其适合边缘部署与实时交互场景研究。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*