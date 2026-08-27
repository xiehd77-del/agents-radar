# Hugging Face 热门模型日报 2026-08-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-27 08:05 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-27

## 📌 今日速览

本周 HF 榜单呈现**后训练产物统治力**：Qwen3.8 系模型以 15 个席位（含原版、量化、去审查、微调）形成绝对垄断，**Kimi-K3（11k 赞）与 Qwen3.8-27B（12.9k 赞）** 双双发布即登顶，标志着**多模态对话模型**（image-text-to-text）已成为主流赛道。同时，**"去审查"（abliterated/uncensored）生态异常活跃**，orcarouter、OBLITERATUS、huihui-ai 等社区账号围绕 Qwen3.8-27B 发布 7+ 变体，累计下载量超 400 万次，反映开源社区对"无限制"模型的旺盛需求。此外，**MiniMax 视频模型（H3）、DeepSeek-V4-Flash、Ornith 1.5 MoE 系列**表现亮眼，显示视频生成与 MoE 架构仍是热点。


## 🧠 语言模型（LLM / 对话）

| 模型 | 作者 | 👍 赞 | ⬇️ 下载 | 一句话说明 |
|------|------|-------|---------|------------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,946 | 3.3M | 新一代 27B 多模态对话旗舰，本周最强流量之王，3.5 代架构 + 原生视觉支持。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,026 | 2.9M | Kimi 第三代多模态模型，引入压缩张量技术（compressed-tensors），K3 引领效率革命。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,746 | 3.9M | V4 系列 Flash 版，主打极速推理 + 对话，DeepSeek 强力回归趋势榜。 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,108 | 0 | GLM 第 5 代 Flash 版（原生多模态），zero-download 说明刚发布即被抢注关注。 |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 459 | 83K | 35B 总参数、3B 激活的 MoE 模型，Qwen3.5-MoE 底座，高效比代表。 |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 231 | 119K | Ornith 1.5 系列 9B 标准版，MIT 许可，社区友好。 |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 254 | 3.9K | 极小尺寸 ASR + 对话模型，Qwen3 底座，语音场景专用。 |


## 🎨 多模态与生成（视频 / 音频 / TTS）

| 模型 | 作者 | 👍 赞 | ⬇️ 下载 | 一句话说明 |
|------|------|-------|---------|------------|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,509 | 4.8M | 第三代视频生成模型，支持图/文/视频互转，下载量本周第 2 高。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,883 | 894K | 单文件视频生成模型（image/video-to-video），一键部署友好。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,266 | 19.5K | 文生音乐第 3 代，diffusers 管线，音乐生成新标杆。 |
| [sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | sensenova | 174 | 3.3K | 商汤 SenseNova 原生全模态（any-to-any）8B，任意模态互转。 |
| [Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 176 | 4.3K | 轻量 TTS 预览版（100M 级），arktts 架构，端侧友好。 |


## 🔧 专用模型（语音 / 控制 / 修复 / 音乐）

| 模型 | 作者 | 👍 赞 | ⬇️ 下载 | 一句话说明 |
|------|------|-------|---------|------------|
| [alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 142 | 3.1K | 阿里 PAI 为 MiniMax-H3 打造的 ControlNet-Union 控制版，精确视频控制。 |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,490 | 0 | 修复 Qwen 系列对话模板 bug 的专属仓库（Jinja），MLX 兼容。 |
| [sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | sensenova | 174 | 3.3K | 全模态特征提取 + 原生多模态推理。 |


## 📦 微调与量化（GGUF / 去审查 / 社区变体）

| 模型 | 作者 | 👍 赞 | ⬇️ 下载 | 一句话说明 |
|------|------|-------|---------|------------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,020 | 7.6M | 本周下载量 No.1 的 GGUF，unsloth 压制、量化极速。 |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 143 | 0 | GLM-5.3-Flash 同步 GGUF，多语言+强推理。 |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 389 | 0 | Flash-Next 量化版，高速响应定位。 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 821 | 469K | 招牌"去审查"版，多格式提供（MLX/GGUF）。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,187 | 270K | FP8 精度去审查版，精度与自由度兼得。 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,146 | 79K | Apple Silicon 玩家福音，MLX 原生去审查版。 |
| [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 194 | 17.6K | FP16 去审查原始权重版。 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 479 | 184K | GGUF 量化去审查，llama.cpp 直接运行。 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 669 | 912K | 激进 MTP 参数 + 去审查 + GGUF 三合一。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 761 | 1.6M | llama.cpp 系去审查，下载超 160 万。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 385 | 1.3M | huihui 社区招牌"删安全对齐"GGUF 版。 |
| [EschaLabs/Qwen3.8-27B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.8-27B-Escha-W2) | EschaLabs | 134 | 2.5K | 极致 2-bit 量化实验（27B→极低内存）。 |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 255 | 233K | GAIN 训练 + Cold-Fusion 融合，命名狂魔技术流。 |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 318 | 1.4M | 35B MoE 的 GGUF 版，高效推理首选。 |
| [ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 224 | 1.4M | 9B GGUF 版，轻量部署利器。 |


## 🌐 生态信号

1. **Qwen 一超多强**：Qwen3.8 几乎包揽前列，从原版、GGUF 到去审查版形成完整生态树，社区围绕单一基座疯狂产出，**已是事实上的开源多模态标准底座**。
2. **"去审查"成为刚需**：abliterated/uncensored 变体累计赞数 3.5k+、下载 400w+，说明用户对无条件对话有显著偏好，社区正在系统性补齐这一缺口。
3. **量化军备竞赛**：从 GGUF（unsloth 干到 760 万下载）到 FP8、2bit，再到 MTP 加速参数调优，量化精度与速度的平衡成为社区竞争焦点。
4. **MoE 已成主流架构**：Ornith-1.5（35B-A3B）、GLM-5.3-Flash、Qwen3.8-Flash 均采用 MoE/激活参数结构，**高性价比推理是端侧与云端共同追求**。
5. **视频生成竞争白热化**：MiniMax-H3、LTX-2.5 双双上榜且下载量领先，配合控制网络生态，视频生成从"能出片"走向"可控出片"。

## 💡 值得探索

| 模型 | 理由 |
|------|------|
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | 采用 compressed-tensors 压缩技术，11k 点赞直接登顶，代表国产多模态模型在"效率+能力"上的一次质变，值得深挖其架构细节。 |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | MIT 协议 + Qwen3.5-MoE 底座 + 先进稀疏激活（3B/35B），是个人开发者私有化部署的高性价比之选，GGUF 版已备好。 |
| [EschaLabs/Qwen3.8-27B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.8-27B-Escha-W2) | 2-bit 量化极限实验，27B 模型塞进消费级显卡成为可能，如果您关注 LLM 推理成本的物理下限，这个仓库是很好的研究样本。 |

---

> 日报数据源：Hugging Face Trending（2026-08-27）｜ 整理：AI 模型生态分析师

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*