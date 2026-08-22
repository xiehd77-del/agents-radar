# Hugging Face 热门模型日报 2026-08-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-22 01:17 UTC

---

# Hugging Face 热门模型日报（2026-08-22）

## 今日速览

今日 Hugging Face 热点几乎被 **Qwen3.8-27B** 及其衍生模型霸榜——前 30 名中超过一半与其直接相关，涵盖官方发布、量化版本和社区微调。**Kimi-K3**（10.9k 赞）与 **DeepSeek-V4** 系列紧随其后，构成三大国产开源势力的鼎立局面。多模态生成领域，**MiniMax-H3**（视频）与 **LTX-2.5** 表现亮眼，下载量分别突破 360 万和 65 万。值得注意的是，社区对"无审查"（abliterated/uncensored）变体的热情持续高涨，多个此类模型进入榜单。Qwen3.8 的多模态特性强化了"视觉—文本—对话"融合趋势，MoE 架构（Qwen3.8-2.4T-A95B、Ornith-1.5）也持续升温。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞/下载 | 一句话说明 |
|------|------|-----------|-----------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,966 / 172.7万 | Qwen 最新旗舰，原生多模态对话模型，单周近 1.2 万赞，是今日生态的核心源头 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 709 / 4.96万 | DeepSeek V4 系列专业版，延续推理增强路线，发布即受到开发者关注 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,612 / 283.3万 | V4 轻量高效版本，下载量 283 万，性价比路线的代表 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,913 / 244.9万 | Kimi 系列第三代，主打压缩张量技术与特征提取能力，点赞超 1 万 |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,139 / 1.57万 | 2.4T 总参数、95B 激活参数的 MoE 文本模型，原生支持多模态输入 |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 290 / 9,165 | 35B MoE 模型（3B 激活），基于 Qwen3.5 MoE 架构，MIT 许可 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞/下载 | 一句话说明 |
|------|------|-----------|-----------|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,294 / 361.4万 | 视频生成旗舰，支持文本/图像驱动视频，下载量超 360 万 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,163 / 1.57万 | 文本生成音乐模型，基于 diffusers 架构，音乐生成新势力 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,493 / 65.4万 | 多模态视频生成模型（图生视频/文生视频/视频生视频），单文件发布 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,738 / 50.5万 | 30B 多模态对话模型，关注度与下载量双高 |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 191 / 1,136 | 面向语音识别场景的轻量文本生成模型，兼具 ASR 能力 |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 311 / 0 | 基于 MiniMax-H3 的微调视频生成模型，专注图像/文本到视频 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞/下载 | 一句话说明 |
|------|------|-----------|-----------|
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,370 / 0 | 专门修复 Qwen 系列 Jinja 聊天模板的元模型，社区刚需工具 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞/下载 | 一句话说明 |
|------|------|-----------|-----------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,509 / 580.5万 | Qwen3.8 官方 GGUF 量化版，下载量断层第一（580 万+） |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 823 / 10.8万 | FP8 精度无审查版 Qwen3.8，Abliterated 技术去对齐 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 821 / 1.8万 | Apple MLX 框架优化版无审查 Qwen3.8，Mac 用户首选 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 570 / 112.6万 | 支持 MTP（多 token 预测）的 GGUF 无审查版，下载量超 112 万 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 660 / 194.0万 | 官方 FP8 量化版，下载量近 200 万 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 443 / 12.4万 | 同时提供 MLX/GGUF 多格式的无审查版 Qwen3.8 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 422 / 35.7万 | "激进"版 MTP 无审查 GGUF，强调生成效率 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 231 / 33.8万 | 知名社区量化学 huihui 的 abliterated GGUF 版本 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 229 / 1.75万 | 非量化版 huihui abliterated 模型 |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 237 / 7.4万 | llama.cpp 生态量化版 Qwen3.8，兼容性好 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 295 / 6.8万 | orcarouter 团队的 GGUF 无审查版本 |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 213 / 42.2万 | 更进一步"Heretic"级无审查 GGUF，下载超 42 万 |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 328 / 101.4万 | NVIDIA FP4 量化版，面向最新 GPU 的极致压缩 |
| [Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 201 / 19.8万 | ABLITERATED 技术 GGUF 版，dense 架构 |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 175 / 2.1万 | 引入 DFlash2 投机解码技术，加速推理 |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 170 / 15.5万 | 社区"缝合怪"式超长命名自研微调 GGUF，GAIN/冷融合训练 |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 207 / 12.3万 | MoE 模型的 GGUF 量化版，MIT 许可，兼容性好 |

## 生态信号

**Qwen3.8 家族空前团结**——一个模型衍生出至少 20 个变体，官方与社区联动形成完整生态闭环（原版→FP8→GGUF→NVFP4→MLX→各种无审查）。这种"旗舰驱动生态"的模式正在成为国产开源模型的新常态。**"无审查"切片市场**已经商品化，Abliterated 技术（移除模型安全对齐）从技术博客走向工业化，成为量化社区的标准服务项目。

**开源权重共识确立**：榜单 30 席几乎全部为开源权重模型，MiniMax、DeepSeek、Qwen、Kimi 之间的竞争已从"要不要开源"转向"开源多少、如何打造生态"。GGUF/MLX/FP8 等多格式量化已成为官方标配动作。MoE 架构明显升温——Qwen 2.4T-A95B、Ornith-1.5 均采用 MoE，性价比路线加速。

**多模态阈值正在被推高**：视频生成（H3、LTX-2.5）与音乐生成（MiniMax-Music3）同时进入热榜，国产模型在多模态生成领域的竞争力显著提升。

## 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 生态的中心点。想要理解本周 Hugging Face 的一切，从它开始。更推荐配合 [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) 在低资源环境体验。

2. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 标签中"compressed-tensors"值得注意：作为开源模型中少有的压缩张量路线，其与 Qwen 等 Dense 模型的架构对比，或许代表下一轮技术分叉。

3. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 视频生成下载量 360 万，GPT-4o 级别的关注度。无论是做研究还是做产品，它对多模态视频生成的前沿方向都有示范意义。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*