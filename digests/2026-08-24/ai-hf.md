# Hugging Face 热门模型日报 2026-08-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-24 01:22 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-24

## 📌 今日速览

本周 Hugging Face 热榜呈现**一超多强**格局：`Qwen/Qwen3.8-27B` 以 12,316 周赞的压倒性优势登顶，其生态系（GGUF 量化、abliterated 去审查、FP8 压缩、DFlash2 投机解码等）占据了榜单近半席位，形成完整衍生品矩阵。与此同时，**Kimi-K3** 以 10,950 赞紧随其后，**MiniMax-H3** 视频模型和 **DeepSeek-V4** 系列表现稳健，显示多模态与推理模型的持续热度。值得关注的是，本周涌现出大量针对 Qwen3.8 的社区微调与量化变体（至少 15 个），说明该模型的开发者渗透率极高，生态成熟度快速提升。


## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞/下载 | 说明 |
|------|------|-----------|------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,316 / 2,358,347 | 本周现象级多模态对话模型，原生支持图像输入，登顶热榜，生态衍生品极多 |
| [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,652 / 3,089,709 | DeepSeek V4 轻量版，高并发推理场景优化，下载量突破 300 万 |
| [**deepseek-ai/DeepSeek-V4-Pro-0813**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 734 / 57,928 | V4 专业版，定位复杂推理与长文本任务，但下载量远低于 Flash 版 |
| [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,950 / 2,727,920 | 月之暗面新一代多模态模型，采用压缩张量技术，周赞近 1.1 万，关注度极高 |
| [**ornith-ai/Ornith-1.5-35B-A3B**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 365 / 23,516 | 35B 总参数、3B 激活的 MoE 架构，Qwen3.5 MoE 系衍生，兼顾性能与推理效率 |
| [**ornith-ai/Ornith-1.5-9B**](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 183 / 31,496 | 同系列 9B 密集版，入门级多模态模型，MIT 协议友好 |
| [**superwhisper/s1-mini**](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 214 / 2,280 | 基于 Qwen3 的轻量级语音识别/生成模型，ASR 场景优化 |
| [**z-lab/Qwen3.8-27B-DFlash2**](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 203 / 36,234 | 引入 DFlash2 投机解码加速，提升推理吞吐，面向生产部署 |
| [**incoai/Qwen3.8-27B-DFlash2**](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 163 / 69,783 | 与 z-lab 同思路的 DFlash2 投机解码版本，社区并行探索 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞/下载 | 说明 |
|------|------|-----------|------|
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,378 / 4,039,236 | 视频生成新旗舰，周赞超 4,000，下载突破 400 万，热度与 Qwen3.8 并驾齐驱 |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,643 / 738,345 | 单文件扩散模型，支持图像/文本到视频多模态转换，创作工具链代表 |
| [**MiniMaxAI/MiniMax-Music3**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,205 / 17,421 | 文本生成音乐三代，更新频率快，音频生成赛道领跑者 |
| [**LBH-123-AI/Minimax_h3_latent_Upscaler**](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 166 / 0 | MiniMax-H3 配套的潜空间放大器，社区补全生态工具链 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞/下载 | 说明 |
|------|------|-----------|------|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,738 / 6,674,515 | 官方合作 GGUF 量化版，下载超 660 万，本地部署首选 |
| [**orcarouter/Qwen3.8-27B-Uncensored-MLX**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 959 / 47,098 | Apple 芯片专用 MLX 格式去审查版，abliterated 技术 |
| [**orcarouter/Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,050 / 190,062 | FP8 精度去审查版，在保持质量的同时大幅降低显存需求 |
| [**OBLITERATUS/Qwen3.8-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 634 / 244,834 | 多格式（MLX/GGUF/safetensors）去审查版，覆盖主流部署路径 |
| [**orcarouter/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 376 / 108,666 | GGUF 格式去审查版，与 MLX/FP8 版本形成多格式矩阵 |
| [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 650 / 1,334,820 | llama.cpp 系 GGUF 去审查版，下载超 130 万，含 MTP 优化 |
| [**huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 297 / 943,360 | 知名量化社区 huihui-ai 出品，GGUF 去审查版，下载近百万 |
| [**huihui-ai/Huihui-Qwen3.8-27B-abliterated**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 259 / 24,844 | 同系列非量化 safetensors 版本，面向完整精度部署 |
| [**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 538 / 676,697 | 激进去审查 + MTP 多 token 预测 GGUF，社区口碑型作品 |
| [**DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 210 / 193,794 | 搭载 GAIN 训练与 Cold-Fusion 技术的 GGUF 增强版，探索新训练范式 |
| [**empero-ai/Qwen3.8-27B-Ridge-GGUF**](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 249 / 131,435 | llama.cpp 量化变体，主打稳定性和兼容性 |
| [**0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF**](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 245 / 579,334 | "Heretic" 风格激进去审查版本，下载已超 57 万 |
| [**ornith-ai/Ornith-1.5-35B-A3B-GGUF**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 252 / 369,478 | MoE 架构 GGUF 量化版，MIT 协议，端侧友好 |
| [**ornith-ai/Ornith-1.5-9B-GGUF**](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 176 / 359,078 | 9B 版 GGUF 量化，轻量部署选择 |
| [**Qwen/Qwen3.8-27B-FP8**](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 672 / 2,653,678 | 官方 FP8 量化版，下载超 265 万，企业级部署标准件 |
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,421 / 0 | 修复 Qwen 系对话模板的 Jinja 补丁，零下载但高赞，开发者刚需工具 |
| [**peculiar-ragdoll/Qwen-Sharp-Chat-Templates**](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates) | peculiar-ragdoll | 200 / 0 | 类似模板修复工具，MLX 兼容优化，生态互补型项目 |


## 📊 生态信号

本周生态呈现三大明确趋势。**第一，Qwen3.8 已形成"母模型 + 衍生矩阵"的标准化生态范式**——单周涌现 15+ 衍生版本（GGUF/MLX/FP8/abliterated/speculative decoding），从量化格式到去审查微调再到推理加速，社区围绕单一基座构建起完整工具链，这在大模型开源史上极为罕见。**第二，"去审查（abliterated/uncensored）"成为社区最活跃的微调赛道**——榜单中 8 个去审查变体累计下载近 400 万，反映开发者对安全对齐收紧的应对需求。**第三，开源权重领域呈现"中国系厂商主导 + 多模态融合"格局**——Qwen、DeepSeek、Kimi、MiniMax 四家包揽闭源/开源前列；同时纯文本模型的统治力削弱，图像/视频/音频多模态能力逐渐成为旗舰标配。量化层面 GGUF 仍是本地部署绝对主流，FP8 在企业端加速渗透。


## 🔬 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周生态核心，原生多模态 27B 对话模型。无论你是想体验最新多模态能力、研究社区量化流程，还是构建垂直应用，它都是绕不开的基座。配合大幅降低的部署门槛，适合作为本地多模态助手的首选基座。建议同时关注其 [[FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) 与 [unsloth GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) 官方量化版本。

2. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 周赞逼近 Qwen3.8 的现象级多模态模型，采用压缩张量技术（compressed-tensors），在保持能力的同时显著降低存储与推理开销。10,950 周赞与 270 万下载量都指向一个信号：Kimi 基座模型的开源策略正在收获巨大社区反响。

3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 支持图像/文本/视频三向转换的单文件扩散模型，是一键式视频生成工具链的集大成者。与 MiniMax-H3 一起代表了视频生成模型"消费级易用 + 单文件分发"的新趋势，适合快速上手做创意验证。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*