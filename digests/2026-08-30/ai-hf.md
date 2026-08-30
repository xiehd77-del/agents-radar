# Hugging Face 热门模型日报 2026-08-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-30 04:14 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-30

## 📰 今日速览

今日 HF 榜单由 **Qwen3.8-27B** 家族统治，其基础模型周点赞高达 13.2k，下载量突破 400 万，社区衍生微调/量化版本多达 9 个，生态热度一骑绝尘。**Kimi-K3**（11k 赞）与 **MiniMax-H3**（4.6k 赞）分别领跑多模态与视频生成赛道，中国模型厂商占据榜单核心位置。**DeepSeek-V4-Flash** 以 3.8k 赞位列第四，显示其在高效推理场景的持续号召力。本周 "Uncensored/abliterated" 社区微调异常活跃，围绕 Qwen3.8 出现 6 个相关变体，成为最强生态信号。

---

## 🔥 热门模型

### 🧠 语言模型

**Qwen/Qwen3.8-27B** — [链接](https://huggingface.co/Qwen/Qwen3.8-27B) · Qwen · 13,266 赞 / 402.9 万下载
> 开源多模态对话旗舰（27B），本周热度断层第一，驱动大量衍生模型生态。

**zai-org/GLM-5.3** — [链接](https://huggingface.co/zai-org/GLM-5.3) · zai-org · 1,278 赞 / 8,804 下载
> GLM 系列旗舰版（MoE-DSA 架构），性能对标顶级闭源模型，本周正式发布引发关注。

**zai-org/GLM-5.3-Flash** — [链接](https://huggingface.co/zai-org/GLM-5.3-Flash) · zai-org · 1,627 赞 / 19.0 万下载
> GLM-5.3 的轻量高速版，Flash 变体凭借极低延迟获得开发者青睐，下载量远超原版。

**tencent/Hy4-preview** — [链接](https://huggingface.co/tencent/Hy4-preview) · tencent · 285 赞 / 1,394 下载
> 腾讯混元 Hunyuan V4 预览版，延续 MoE 路线，新架构首次亮相。

**deepseek-ai/DeepSeek-V4-Flash-0731** — [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) · deepseek-ai · 3,810 赞 / 433 万下载
> DeepSeek V4 Flash 迭代版本，以极高推理效率著称，在企业级部署中表现亮眼。

**moonshotai/Kimi-K3** — [链接](https://huggingface.co/moonshotai/Kimi-K3) · moonshotai · 11,083 赞 / 270.1 万下载
> Kimi 第三代多模态模型，采用压缩张量技术大幅降低部署成本，社区反馈积极。

**pipecat-ai/phonellm-alpha-1** — [链接](https://huggingface.co/pipecat-ai/phonellm-alpha-1) · pipecat-ai · 136 赞 / 2,668 下载
> 电话场景专用语音语言模型（基于 Nemotron），聚焦实时语音交互优化。

---

### 🎨 多模态与生成

**Qwen/Qwen3.8-Flash-Next** — [链接](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) · Qwen · 4,300 赞 / 5.2 万下载
> Qwen 新一代实验性多模态（qwen4_exp），主打 Flash 级速度与视觉理解能力。

**Lightricks/LTX-2.5** — [链接](https://huggingface.co/Lightricks/LTX-2.5) · Lightricks · 2,144 赞 / 104.5 万下载
> 新一代图像转视频扩散模型，支持多模态输入（图/文/视频），单文件分发便于本地部署。

**MiniMaxAI/MiniMax-H3** — [链接](https://huggingface.co/MiniMaxAI/MiniMax-H3) · MiniMaxAI · 4,623 赞 / 501.9 万下载
> H3 视频生成模型，以高质量视频生成能力登顶视频赛道，下载量突破 500 万。

**BreezeBlue/Breeze-TTS-2** — [链接](https://huggingface.co/BreezeBlue/Breeze-TTS-2) · BreezeBlue · 193 赞 / 1,017 下载
> 新一代文本转语音模型，主打自然语音合成，新发布处于早期采纳阶段。

**alibaba-pai/MiniMax-H3-Fun-Controlnet-Union** — [链接](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) · alibaba-pai · 162 赞 / 4,250 下载
> MiniMax-H3 的控制网络适配器，支持视频生成中的精确姿势/结构控制。

**alibaba-pai/MiniMax-H3-Acc-LoRAs** — [链接](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) · alibaba-pai · 143 赞 / 13,767 下载
> MiniMax-H3 加速 LoRA 集合，可显著提升视频生成速度。

**FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree** — [链接](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) · FastVideo · 154 赞 / 0 下载
> MiniMax-H3 的 4 步加速蒸馏版本，主打数据无关的快速推理管线。

---

### 🔧 专用模型

**ornith-ai/Ornith-1.5-35B-A3B** — [链接](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) · ornith-ai · 498 赞 / 10.7 万下载
> 35B 总量 3B 激活的 MoE 多模态模型，延续 Qwen3.5-MoE 架构，面向高效推理场景。

**thomsonreuters/Thomson-1.0-Small** — [链接](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) · thomsonreuters · 152 赞 / 831 下载
> 汤森路透推出的垂直领域模型（金融/法律），基于 Qwen3.5-MoE 微调。

**peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF** — [链接](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) · peculiar-ragdoll · 125 赞 / 4.8 万下载
> 代码专用 35B-A3B MoE 模型的 GGUF 量化版，适用于本地代码辅助。

---

### 📦 微调与量化

**unsloth/Qwen3.8-27B-GGUF** — [链接](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) · unsloth · 3,189 赞 / 836.3 万下载
> Qwen3.8-27B 社区最流行的 GGUF 量化版，下载量居所有衍生模型之首。

**unsloth/Qwen3.8-Flash-Next-GGUF** — [链接](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) · unsloth · 570 赞 / 18.8 万下载
> Flash-Next 官方量化版，将实验性模型快速转化为可本地部署格式。

**unsloth/GLM-5.3-Flash-GGUF** — [链接](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) · unsloth · 274 赞 / 2.7 万下载
> GLM-5.3-Flash 的 GGUF 量化版本，扩展该模型的本地部署覆盖。

**OBLITERATUS/Qwen3.8-27B-OBLITERATED** — [链接](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) · OBLITERATUS · 922 赞 / 64.6 万下载
> "去审查"社区代表作品（abliterated），移除安全对齐限制，广受本地部署用户欢迎。

**orcarouter/Qwen3.8-27B-Uncensored-MLX** — [链接](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) · orcarouter · 1,218 赞 / 9.8 万下载
> Qwen3.8 的 Uncorrected MLX 版本（Apple Silicon 优化），将 uncensored 生态扩展到 Mac 平台。

**orcarouter/Qwen3.8-27B-Uncensored-FP8** — [链接](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) · orcarouter · 1,261 赞 / 29.0 万下载
> FP8 精度量化版本，兼顾显存效率与输出质量，适合单卡部署。

**orcarouter/Qwen3.8-27B-Uncensored-GGUF** — [链接](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) · orcarouter · 559 赞 / 21.6 万下载
> GGUF 量化版本，配合 llama.cpp 实现跨平台本地运行。

**orcarouter/Qwen3.8-27B-Uncensored** — [链接](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) · orcarouter · 210 赞 / 4.3 万下载
> orcarouter 系列原始 Uncorrected 版本，基准模型。

**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF** — [链接](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) · HauhauCS · 749 赞 / 106.2 万下载
> "激进"去审查 + MTP 多 token 预测优化，下载量突破百万，社区热度极高。

**huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF** — [链接](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) · huihui-ai · 440 赞 / 148.6 万下载
> huihui-ai 出品的经典 abliterated GGUF，长期稳定热门之选。

**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF** — [链接](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) · JonathanColetti · 826 赞 / 184.3 万下载
> 另一主流 Uncorrected GGUF 版本，支持 MTP 特性，下载量位居前列。

**froggeric/Qwen-Fixed-Chat-Templates** — [链接](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) · froggeric · 1,518 赞 / 0 下载
> 修复 Qwen 系列聊天模板的 Jinja 文件合集，解决开发者的格式痛点，极受欢迎。

**Qwen/Qwen3.8-Flash-Next-FP8** — [链接](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) · Qwen · 155 赞 / 4.4 万下载
> 官方 FP8 量化版 Flash-Next，推理加速且显存占用减半。

---

## 📊 生态信号

**Qwen 家族绝对统治**：Qwen3.8-27B 及其衍生版本占据榜单 30% 席位，基础模型 + GGUF + FP8 + MLX + unceensored 的完整生态矩阵，使 Qwen 成为当前开源社区的事实标准。**视频生成赛道爆发**：MiniMax-H3 系列（基础版 + ControlNet + LoRAs + 加速版）形成完整工具链，配合 LTX-2.5、FastVideo 等加速方案，标志视频生成进入"模型 + 生态"竞争阶段。**中国厂商主导开源**：Qwen、GLM、DeepSeek、MiniMax、Kimi 五大国产模型占据榜单核心，开源权重策略持续收获社区红利。**"去审查"文化活跃**：围绕 Qwen3.8 出现 6 个 uncensored/abliterated 变体，累计下载超 500 万，反映本地部署用户对无限制模型的需求日益旺盛。量化生态方面，GGUF 依旧占据主流，FP8 与 MLX 分场景并行发展。

---

## 💡 值得探索

1. **Qwen/Qwen3.8-27B** — [链接](https://huggingface.co/Qwen/Qwen3.8-27B)
   当前开源多模态标杆，13.2k 点赞 + 402 万下载验证其影响力。生态完整、量化方案成熟，值得作为多模态应用的最优选。

2. **MiniMaxAI/MiniMax-H3** — [链接](https://huggingface.co/MiniMaxAI/MiniMax-H3)
   视频生成新王者（500 万下载），周内衍生出 ControlNet/LoRA/加速四个生态配套，建议重点关注其视频生成质量与生态扩展速度。

3. **moonshotai/Kimi-K3** — [链接](https://huggingface.co/moonshotai/Kimi-K3)
   11k 点赞的多模态新贵，压缩张量技术是最大亮点——研究其如何在保持精度的同时降低部署成本，对大模型落地极具参考价值。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*