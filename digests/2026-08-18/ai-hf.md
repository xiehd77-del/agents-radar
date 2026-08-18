# Hugging Face 热门模型日报 2026-08-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-18 01:18 UTC

---

# Hugging Face 热门模型日报（2026-08-18）

## 今日速览

本周 HF 榜单呈现明显的“多模态+量化”双主线：**Moonshot AI 的 Kimi-K3** 以 10,802 周赞登顶，与 Qwen 最新旗舰 Qwen3.8-27B 形成头部双雄对峙。视频生成赛道，MiniMax-H3 系列表现迅猛，原版加社区量化、LoRA 衍生版合计收割超 6,300 赞，Comfy-Org 的封装版本下载量已突破 1,400 万次。DeepSeek 以 V4-Pro 与 V4-Flash 双型号强势入榜，后者以 3499 赞成为“性价比旗舰”。量化生态持续升温，unsloth 与第三方出品的 GGUF/FP8 版本占据榜单近三分之一席位，加速了开源模型在消费级硬件上的落地。


## 热门模型

### 🧠 语言模型

**1. moonshotai/Kimi-K3** ⭐ [链接](https://huggingface.co/moonshotai/Kimi-K3)
作者: moonshotai | 点赞: 10,802 | 下载: 2,163,953
> Moonshot 最新旗舰视觉-语言模型，走“高压缩率”路线，发布首周即获万赞，是本周最大黑马。

**2. deepseek-ai/DeepSeek-V4-Flash-0731** ⭐ [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)
作者: deepseek-ai | 点赞: 3,499 | 下载: 1,978,298
> DeepSeek V4 的轻量高速版，主打低延迟推理，下载量近 200 万次，是当前极具人气的实用型 LLM。

**3. deepseek-ai/DeepSeek-V4-Pro-0813** ⭐ [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)
作者: deepseek-ai | 点赞: 574 | 下载: 25,006
> 与 Flash 版同步迭代的高精度旗舰，适合复杂推理与长文生成场景，发布节点更新更早一周。

**4. Qwen/Qwen3.8-2.4T-A95B** ⭐ [链接](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
作者: Qwen | 点赞: 1,041 | 下载: 9,465
> Qwen3.8 的 2.4T 参数 MoE 巨兽，仅激活 95B，代表当前开源文本生成模型的天花板级别参数量。

**5. nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4** ⭐ [链接](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4)
作者: nvidia | 点赞: 307 | 下载: 231,271
> Nvidia 出品 30B 总参/3B 激活 MoE 模型，原生 NVFP4 量化设计，超低显存占用适合消费级显卡部署。

**6. nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16** ⭐ [链接](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16)
作者: nvidia | 点赞: 169 | 下载: 69,833
> 上述模型的 BF16 全精度版本，为追求更高生成质量且显存充裕的用户提供选择。

**7. LiquidAI/LFM2.5-2.6B** ⭐ [链接](https://huggingface.co/LiquidAI/LFM2.5-2.6B)
作者: LiquidAI | 点赞: 653 | 下载: 147,270
> Liquid AI 第二代液基架构模型，2.6B 小参数实现高性价比推理，是小模型赛道的有力竞争者。

**8. inclusionAI/Ling-3.0-tiny** ⭐ [链接](https://huggingface.co/inclusionAI/Ling-3.0-tiny)
作者: inclusionAI | 点赞: 307 | 下载: 6,266
> 国产混合架构（Bailing Hybrid）的轻量级开端，标志 Ling 3.0 系列正式开源，MIT 许可友好。


### 🎨 多模态与生成

**1. Qwen/Qwen3.8-27B** ⭐ [链接](https://huggingface.co/Qwen/Qwen3.8-27B)
作者: Qwen | 点赞: 10,720 | 下载: 415,039
> Qwen3.5 时代双模态旗舰（图+文→文），周赞破万，坐实 Qwen 系列当前最强开源全能与最大流量入口的地位。

**2. MiniMaxAI/MiniMax-H3** ⭐ [链接](https://huggingface.co/MiniMaxAI/MiniMax-H3)
作者: MiniMaxAI | 点赞: 4,088 | 下载: 2,403,238
> MiniMax 第三代视频生成模型，支持文生视频、图生视频多任务，覆盖多模态生成场景，下载超 240 万次。

**3. Lightricks/LTX-2.5** ⭐ [链接](https://huggingface.co/Lightricks/LTX-2.5)
作者: Lightricks | 点赞: 1,110 | 下载: 465,529
> 老牌视频生成模型全面升级，单文件即可运行全套图像/视频/转绘工作流，社区认可度高。

**4. meta-models/Muse-Glimmer-30B** ⭐ [链接](https://huggingface.co/meta-models/Muse-Glimmer-30B)
作者: meta-models | 点赞: 1,662 | 下载: 334,099
> Meta 内部“启明”项目（Muse）的重量级视觉语言模型，30B 足以承担复杂图文理解任务，被视为 Meta 对 GPT-4V 级别的开源回应。

**5. MiniMaxAI/MiniMax-Music3** ⭐ [链接](https://huggingface.co/MiniMaxAI/MiniMax-Music3)
作者: MiniMaxAI | 点赞: 906 | 下载: 10,375
> MiniMax 音乐生成模型第三代，基于扩散架构，直接以文本或旋律生成歌曲级音频，刷新音乐 AIGC 上限。

**6. lightx2v/Minimax-h3-Turbo** ⭐ [链接](https://huggingface.co/lightx2v/Minimax-h3-Turbo)
作者: lightx2v | 点赞: 586 | 下载: 264,351
> 社区加速版 MiniMax-H3，专为图生视频优化，适合高帧率、实时出片。

**7. LiquidAI/LFM2.5-VL-3B** ⭐ [链接](https://huggingface.co/LiquidAI/LFM2.5-VL-3B)
作者: LiquidAI | 点赞: 162 | 下载: 6,816
> LFM2.5 的视觉语言扩展。3B 低参数视觉理解模型，特别适合端侧与实时抓取场景。

**8. Gazingstars123/Anima-2.9B** ⭐ [链接](https://huggingface.co/Gazingstars123/Anima-2.9B)
作者: Gazingstars123 | 点赞: 233 | 下载: 23,202
> 轻量级动漫风格文生图模型，单文件 ComfyUI 即插即用，定位二次元内容生成垂直市场。

**9. fal/MiniMax-H3-Realism-People-LoRA** ⭐ [链接](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA)
作者: fal | 点赞: 244 | 下载: 18,562
> 专注于“真人人像”的 High3 LoRA 插件，为 H3 视频模型提供超写实人物脸型与动态加成。

**10. dots-studio/dots3-note-prev** ⭐ [链接](https://huggingface.co/dots-studio/dots3-note-prev)
作者: dots-studio | 点赞: 207 | 下载: 633
> 新兴“笔记理解”型多模态模型，未正式发布即上榜，值得关注其在文档与手写体 OCR 上的上限潜力。

**11. larryvrh/MiniMax-H3-Turbo-Lora** ⭐ [链接](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)
作者: larryvrh | 点赞: 786 | 下载: 0
> 稀有的“音频+视频”跨模态 LoRA，新增为 H3 注入音频引导的动态生成能力，新颖度极高。

**12. Comfy-Org/MiniMax-Music-3** ⭐ [链接](https://huggingface.co/Comfy-Org/MiniMax-Music-3)
作者: Comfy-Org | 点赞: 167 | 下载: 256,988
> ComfyUI 官方封装的 Music3 单文件版本，标签化为扩散单文件，大幅降低音乐生成模型部署门槛。


### 🔧 专用模型

（本周榜单未出现纯代码 / 数学 / 医疗重专模型，该分类空缺；**图像-文本理解**可视为多模态交叉方向。）

### 📦 微调与量化

**1. unsloth/Qwen3.8-27B-GGUF** ⭐ [链接](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)
作者: unsloth | 点赞: 1,633 | 下载: 2,727,609
> 官方最速量化套件出品的 Qwen3.8 GGUF，下载量高达 272 万，是本地部署 Qwen3.8 的首选格式。

**2. Comfy-Org/MiniMax-H3** ⭐ [链接](https://huggingface.co/Comfy-Org/MiniMax-H3)
作者: Comfy-Org | 点赞: 1,403 | 下载: 14,015,769
> ComfyUI 整合包级别形态的 H3 单文件模型，下载量超 1,400 万，是视频生成工作流的事实标准。

**3. froggeric/Qwen-Fixed-Chat-Templates** ⭐ [链接](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)
作者: froggeric | 点赞: 1,211 | 下载: 0
> 修复后的 Qwen 全系 Chat Template 集锦，解决官方模板在 MLX 等框架下的兼容问题，一次下齐。

**4. DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF** ⭐ [链接](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)
作者: DavidAU | 点赞: 2,120 | 下载: 3,033,928
> 社区魔改王 DavidAU 出品：层层融合的高强度长文模型量化包，主打“去审查+极致角色扮演”。

**5. Qwen/Qwen3.8-27B-FP8** ⭐ [链接](https://huggingface.co/Qwen/Qwen3.8-27B-FP8)
作者: Qwen | 点赞: 530 | 下载: 495,646
> 官方 FP8 半精度。

**6. unsloth/Qwen3.8-27B-NVFP4** ⭐ [链接](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4)
作者: unsloth | 点赞: 240 | 下载: 378,177
> 针对 RTX 40/50 系优化的 4bit 无损量化，老卡畅玩 27B 多模态模型的甜点方案。

**7. Qwen/Qwen3.8-2.4T-A95B-FP8** ⭐ [链接](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8)
作者: Qwen | 点赞: 220 | 下载: 12,295
> 当之无愧的“巨兽级” MoE 专用 FP8 版本显存优化方案。

**8. orcarouter/Qwen3.8-27B-Uncensored-FP8** ⭐ [链接](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)
作者: orcarouter | 点赞: 438 | 下载: 15,812
> Abliterated（去除拒绝机制）+ FP8 量化定制版，面向有对抗性测试需求的定向人群。

**9. JonathanColetti/Qwen3.8-27B-Uncensored-GGUF** ⭐ [链接](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)
作者: JonathanColetti | 点赞: 302 | 下载: 357,701
> 社区对齐移除版 GGUF，进一步拓宽 Qwen3.8 在开放域角色扮演和创意写作上的自由度。

**10. unsloth/Muse-Glimmer-30B-GGUF** ⭐ [链接](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF)
作者: unsloth | 点赞: 470 | 下载: 755,125
> Meta 大视觉模型 Glimmer-30B 的官方合作量化版，GGUF 格式兼顾 CPU/GPU 混合推理。

**11. meta-models/Muse-Glimmer-30B** ⭐ [链接](https://huggingface.co/meta-models/Muse-Glimmer-30B)
作者: meta-models | 点赞: 1,662 | 下载: 334,099
> Meta 主力视觉语言多模态模型（也收录于多模态，此处归入微调/量化便于格式对照）。


## 生态信号

**Qwen 家族**处于绝对主导地位：以 27B 为核心，衍生出 GGUF、FP8、NVFP4、Uncensored 等十几个高质量变体，外加 2.4T MoE 旗舰压阵，形成“基础模型+全格式覆盖”的完整矩阵。**MiniMax 在生成侧强势崛起**，H3 视频模型 + Music3 音频模型双线推进，且迅速被 Comfy-Org 官方封装，说明“多模态+工作流”整合已成为模型分发的关键路径。**DeepSeek 以 Flash 系列挑起性价比大旗**，与 Moonshot 的 Kimi-K3 在综合能力榜上直接对话，开源社区的“多强并立”格局已经形成。量化侧，原生 FP8/NVFP4 逐渐取代第三方后量化，标志硬件厂商（如 Nvidia）已深度介入开源生态，配合 unsloth 等基建方，模型分发正从“单一大文件”走向“多格式、多精度、多框架”的矩阵化运营。


## 值得探索

1. **moonshotai/Kimi-K3**（[链接](https://huggingface.co/moonshotai/Kimi-K3)）— 10,802 赞直接封王，高压缩率机制是极为罕见的技术路线，值得第一时间把玩。
2. **Lightricks/LTX-2.5**（[链接](https://huggingface.co/Lightricks/LTX-2.5)）— 单一文件同时搞定 t2v / i2v / v2v，作为 465K 下载的轻量替代，最适合做视频生成模型架构对比基线。
3. **froggeric/Qwen-Fixed-Chat-Templates**（[链接](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)）— 免费到手、0 下载却有 1,211 赞，这说明社区对 Qwen 应用层的痛点集中在此，做 LLM 应用工程的同学必须关注。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*