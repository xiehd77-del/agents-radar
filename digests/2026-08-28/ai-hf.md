# Hugging Face 热门模型日报 2026-08-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-28 10:08 UTC

---

# 🤖 Hugging Face 热门模型日报（2026-08-28）

## 📌 今日速览

本周榜单由 **Qwen3.8-27B** 领跑，周增 13,075 赞、累计下载突破 345 万次，成为多模态对话模型的绝对焦点。围绕 Qwen3.8-27B 衍生的量化（GGUF/Mlx/FP8）与“去审查”（abliterated/uncensored）生态异常活跃，占据榜单近三分之一席位，社区二次开发热度空前。与此同时，**MiniMax-H3**（视频生成）、**Kimi-K3**（多模态）、**DeepSeek-V4-Flash** 等头部厂商新作集中发布，表明开源权重模型已全面进入“多模态 + 高效推理”的竞争深水区。值得关注的是，**GLM-5.3-Flash** 与 **Qwen3.8-Flash-Next** 两款“轻量级多模态模型”同期亮相，预示着小参数高效模型的竞赛正式打响。

---

## 🏆 热门模型分类整理

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,405 | 34 | 智谱新一代轻量级多模态对话模型，主打极速推理与高效部署，刚刚发布即获大量关注（周点赞 1,405），但下载量极低，处于初期传播阶段。 |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,776 | 3,959,575 | DeepSeek V4 Flash 版本，以高效推理著称，发布仅月余即获得近 400 万下载，是当前开源 LLM 中性能/成本比最优的选择之一。 |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,047 | 2,675,145 | 月之暗面发布的第三代多模态模型，采用压缩张量技术（compressed-tensors），周增 11,047 点赞，是本周上升势头最猛的模型之一。 |
| [Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 135 | 349 | 汤森路透发布的 MoE 架构多模态对话模型，基于 Qwen3.5-MoE 架构，面向专业领域（金融/法律）场景，试水开源生态。 |
| [SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | sensenova | 185 | 4,232 | 商汤科技发布的“any-to-any”原生多模态模型，支持任意模态输入输出，代表多模态融合的最新方向。 |
| [Oracle 路由模型-Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,506 | 0 | 社区整理的 Qwen3.5 系列修正版 Jinja 对话模板，虽非模型本身，但解决了众多开发者的聊天模板兼容性问题，获得大量点赞。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,039 | 4,810 | 通义千问 Qwen4 系列的实验版（qwen4_exp），轻量级多模态对话模型，定位 Flash 快速推理。凭借 Qwen 品牌效应与全新架构吸引大量关注。 |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,075 | 3,457,687 | 通义千问 Qwen3.5 代的旗舰多模态对话模型，周增 1.3 万+ 点赞，是当前开源领域最热门的通用多模态模型。上下文、推理与多模态能力全面升级。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,549 | 4,848,404 | MiniMax 第三代视频生成模型，支持图像转视频、文本转视频，下载量居本周榜首（484 万），是视频生成赛道最热模型。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,952 | 912,729 | 图像/视频转视频模型，单文件扩散模型设计便于本地部署，Lightricks 深耕创意视频工具，适配广泛的视频编辑与合成场景。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,277 | 19,726 | MiniMax 第三代音乐生成模型（文本转音频），通过 diffusers 框架支持，填补了高质量开源音乐生成模型的缺口。 |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 137 | 240 | 新一代语音合成（TTS）模型，基于 transformers，提供高自然度语音合成能力。 |
| [Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 183 | 4,477 | 轻量级 TTS 预览模型（0.1B），基于 ArkTTS，主打低资源、高性能的语音合成应用。 |
| [十亿级视频控网模型](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 149 | 3,344 | 阿里 PAI 为 MiniMax-H3 开发的 ControlNet-Union 套件，支持视频到视频的精细控制生成，拓展了 H3 的创作边界。 |
| [视频生成 LoRA](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 123 | 609 | 阿里 PAI 为 MiniMax-H3 设计的加速 LoRA 集合，可降低推理成本、提速生成，适用于视频生成的批量化场景。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 160 | 0 | 腾讯混元大模型第四代预览版（Hunyuan V4），当前仅开放权重展示，下载/使用受限，但战略意义重大，代表国内大厂在开源 LLM 领域的持续投入。 |
| [Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 470 | 88,102 | 基于 Qwen3.5-MoE 的 35B 总量、3B 激活参数稀疏模型，兼顾性能与效率，并支持多模态输入。适用于高性价比的本地与云端部署。 |

### 📦 微调与量化（社区微调、GGUF、AWQ、MLX）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,097 | 7,758,790 | 社区量化标杆（unsloth 出品），下载量居本周全部模型第二（775 万），提供多档 GGUF 格式，是本地部署 Qwen3.8-27B 的首选。 |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 227 | 0 | GLM-5.3-Flash 的官方社区量化版本，发布极新（下载为 0），预示轻量级 GLM 即将迎来本地部署热潮。 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 866 | 509,270 | “去审查”（abliterated）模型代表，移除安全对齐限制，满足开放式创作与研究需求。多格式（Mlx/GGUF）支持，广受社区欢迎。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,215 | 273,577 | FP8 精度量化 + abliterated，兼顾身材与速度，适合高端 GPU 部署。 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,174 | 83,352 | Apple Silicon 专用 MLX 版去审查模型，为 Mac 用户提供高性能本地推理方案。 |
| [HauhauCS/Qwen3.8-27B-Uncensored-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 700 | 938,219 | 激进版去审查 + MTP（多令牌预测）GGUF 量化，兼顾自由与解码速度。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 788 | 1,666,948 | 高频下载的去审查 GGUF 版本，适配 llama.cpp，面向本地轻量部署。 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 503 | 188,460 | 另一主流 GGUF 去审查选择，覆盖多档量化。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 409 | 1,355,482 | 知名量化社区 huihui-ai 出品，Qwen3.8-27B 的 abliterated + GGUF 版本，下载量已超 135 万，口碑稳定。 |
| [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 199 | 18,598 | 去审查基础版（未量化），提供原始权重，供用户自行量化或微调。 |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 477 | 4,354 | Qwen3.8-Flash-Next 的 GGUF 版本，轻量级多模态本地部署，潜力极大。 |
| [Ornith GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 328 | 1,469,059 | 官方出品 GGUF 量化，MoE 高效模型 + 本地友好格式，下载迅猛。 |
| [SenseNova-U1.5-8B-MoT（前置标签）](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | sensenova | 185 | 4,232 | 原生多模态模型，处于早期发布阶段。 |

---

## 📊 生态信号分析

1. **Qwen 家族的“自我强化飞轮”**
   - Qwen3.8 系列（含 27B 与 Flash-Next）占据榜单 10+ 席位，官方发布 → unsloth GGUF → 社区去审查 → 多格式量化，形成一套完整的 **官方-社区协同生态链**。Qwen 已不仅是模型，更是开放的 **权重分发与二次开发标准**。

2. **去审查（abliteration）成为社区主流二创方向**
   - 榜单中 5 个 uncensored/abliterated 变体累计获赞超 3,600，下载超 400 万。社区对“无边界”模型的强劲需求，正在推动安全对齐与自由生成之间的持续博弈。

3. **视频与音乐生成进入“军备竞赛”**
   - MiniMax-H3（视频）单周下载 484 万，叠加 MiniMax-Music3（音乐）、LTX-2.5 等模型，生成式 AI 的应用重心正从“对话/图像”向 **“视频 + 音频 + 多轨创作”** 快速迁移。

4. **开源权重 vs 闭源生态**
   - DeepSeek、Qwen、MiniMax、Kimi 等头部玩家均选择 **开源权重**，且普遍支持多模态。开源模型的能力与闭源差距已基本持平，未来竞争焦点将转向 **推理成本** 与 **生态工具链**（量化、部署、微调）。

5. **高效/轻量模型趋势明显**
   - MoE（Ornith-1.5）、Flash 系列、0.1B TTS 等小参数/高稀疏模型频繁出现，预示资源受限场景（手机、边缘、端侧）将成为下一战场的核心方向。

---

## 🔭 值得探索

| 模型 | 推荐理由 |
|------|----------|
| [**SenseNova-U1.5-8B-MoT**](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | “any-to-any”原生多模态架构，真正实现任意模态输入/输出。若其宣称的 MoT（多模态思维）能力得到验证，将革新多模态推理范式，建议第一时间实测。 |
| [**Qwen3.8-Flash-Next**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen4 系列的“实验先锋”，Flash 定位意味着极速响应 + 多模态能力。适合端侧/实时交互场景测试，同时关注 FP8 版本 [Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) 的部署性能。 |
| [**MiniMax-Music3**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | 高质量开源音乐生成模型仍是稀缺资源。MiniMax-Music3 补齐了文本→音乐的关键缺口，是创作者与音乐 AI 研究者的重要起点。 |

---

*数据统计区间：2026-08-21 至 2026-08-28 · 来源：Hugging Face Trending*

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*