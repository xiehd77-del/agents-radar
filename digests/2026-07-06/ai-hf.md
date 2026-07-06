# Hugging Face 热门模型日报 2026-07-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-06 15:02 UTC

---

好的，作为 AI 模型生态分析师，这是基于 2026-07-06 数据为您生成的《Hugging Face 热门模型日报》。

---

### 📈 Hugging Face 热门模型日报 (2026-07-06)

#### 1. 今日速览

今日 Hugging Face 生态呈现三大核心趋势：**Qwen 家族全面进化**成为绝对主角，其衍生模型及量化版本霸占了榜单多数席位；**多模态 MoE**（混合专家）架构成为主流，从 “Qwythos-9B” 到 “Agents-A1”，高参数的稀疏激活模型持续占据开发者心智；**社区微调与量化活动异常活跃**，尤其是针对 Qwen 和 GLM 的 “uncensored” 和高性能 GGUF 版本，反映出开发者对个性化、高效率本地部署的强烈需求。此外，NVIDIA 的 NVFP4 量化方案和 Google 的表格模型也释放了重要信号。

#### 2. 热门模型分类解析

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **zai-org/GLM-5.2** ([链接](https://huggingface.co/zai-org/GLM-5.2))
  - **作者**: zai-org | **点赞**: 3,508 | **下载**: 231,218
  - **一句话说明**: 智谱 GLM 系列的第五代 MoE 旗舰模型，凭借强大的中文理解和对话能力，成为榜单上点赞数最高的纯文本模型。
- **deepreinforce-ai/Ornith-1.0-35B-GGUF** ([链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF))
  - **作者**: deepreinforce-ai | **点赞**: 748 | **下载**: 436,780
  - **一句话说明**: ORNITH 系列 (Qwen 3.5 架构) 的 35B 参数量化版本，通过高性价比的参数量与 GGUF 格式组合，成为大模型本地部署的热门选择。
- **deepseek-ai/DeepSeek-V4-Pro-DSpark** ([链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark))
  - **作者**: deepseek-ai | **点赞**: 401 | **下载**: 14,276
  - **一句话说明**: DeepSeek 的 V4 专业版，带有 “DSpark” 加速特性，代表了闭源实验室以开源权重形式发布的高端推理模型，发布即受关注。
- **tencent/Hy3** ([链接](https://huggingface.co/tencent/Hy3))
  - **作者**: tencent | **点赞**: 255 | **下载**: 2
  - **一句话说明**: 腾讯 Hunyuan 家族的新一代混合模型，虽然下载量较低但点赞数高，标志着大厂在基础通用模型上的持续投入。
- **meituan-longcat/LongCat-2.0** ([链接](https://huggingface.co/meituan-longcat/LongCat-2.0))
  - **作者**: meituan-longcat | **点赞**: 101 | **下载**: 43
  - **一句话说明**: 美团发布的长上下文模型，专注于对话和长文本处理，代表了业界对超长序列处理能力的持续探索。

##### 🎨 多模态与生成（图像、文本到图像、OCR）

- **nvidia/LocateAnything-3B** ([链接](https://huggingface.co/nvidia/LocateAnything-3B))
  - **作者**: nvidia | **点赞**: 2,628 | **下载**: 1,340,559
  - **一句话说明**: NVIDIA 推出的通用目标定位模型，无需微调即可基于参考图像或文本提示定位任意物体，开创了 “视觉特征提取” 的新范式。
- **baidu/Unlimited-OCR** ([链接](https://huggingface.co/baidu/Unlimited-OCR))
  - **作者**: baidu | **点赞**: 1,773 | **下载**: 1,070,230
  - **一句话说明**: 百度推出的全能 OCR 模型，支持不限场景的文本识别，以实用性和高下载量成为图像处理领域的爆款。
- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** ([链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive))
  - **作者**: HauhauCS | **点赞**: 2,520 | **下载**: 2,910,241
  - **一句话说明**: 基于 Qwen 3.6 的 35B-A3B MoE 视觉模型的 “去审查” 猛男版，兼具顶级多模态能力和极爆裂输出风格，下载量与点赞数双炸裂。
- **krea/Krea-2-Turbo** ([链接](https://huggingface.co/krea/Krea-2-Turbo))
  - **作者**: krea | **点赞**: 523 | **下载**: 109,470
  - **一句话说明**: Krea AI 的 Turbo 版文生图模型，作为商业级图像生成的开源发布，成为设计圈的热门素材。

##### 🔧 专用模型（代码、表格、安全）

- **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF** ([链接](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF))
  - **作者**: yuxinlu1 | **点赞**: 2,617 | **下载**: 664,319
  - **一句话说明**: 基于 Google Gemma 4 的代码增强版，融合了 “fable5” 和 “composer2.5” 风格，专为代码生成和推理优化，是程序员之选。
- **google/tabfm-1.0.0-pytorch** ([链接](https://huggingface.co/google/tabfm-1.0.0-pytorch))
  - **作者**: google | **点赞**: 244 | **下载**: 7,036
  - **一句话说明**: Google 发布的表格基础模型，支持零样本表格分类与回归，有望改变传统结构化数据处理的 AI 范式。
- **BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6** ([链接](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6))
  - **作者**: BugTraceAI | **点赞**: 136 | **下载**: 12,438
  - **一句话说明**: 基于 Qwen 3 的网络安全专用模型，主打漏洞挖掘与渗透测试，代表了 AI 在垂直安全场景的深化。
- **nationaldesignstudio/rampart** ([链接](https://huggingface.co/nationaldesignstudio/rampart))
  - **作者**: nationaldesignstudio | **点赞**: 133 | **下载**: 3,821
  - **一句话说明**: 基于 BERT 的 PII（个人隐私信息）识别模型，专门用于敏感数据脱敏，因实用性而受关注。

##### 📦 微调与量化（社区微调、GGUF、NVFP4）

- **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** ([链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF))
  - **作者**: empero-ai | **点赞**: 1,606 | **下载**: 1,617,508
  - **一句话说明**: 融合了 Claude Mythos 风格的 Qwen 3.5 微调版GGUF，以高质量风格化和惊人的下载量领跑量化模型榜单。
- **unsloth/Qwen3.6-27B-MTP-GGUF** ([链接](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF))
  - **作者**: unsloth | **点赞**: 971 | **下载**: 2,818,491
  - **一句话说明**: 知名量化工具 Unsloth 为 Qwen 3.6 27B 量身定制的 GGUF 版本，代表了最高效的模型压缩与推理优化方案。
- **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF** ([链接](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF))
  - **作者**: yuxinlu1 | **点赞**: 1,039 | **下载**: 370,884
  - **一句话说明**: 另一款基于 Gemma 4 的微调版本，重点强化了Agent能力，将代码与终端操作结合，展示了 “模型即 Agent” 的趋势。
- **nvidia/Qwen3.6-27B-NVFP4** ([链接](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4))
  - **作者**: nvidia | **点赞**: 283 | **下载**: 430,676
  - **一句话说明**: NVIDIA 推出的 Qwen 3.6 的 NVFP4 量化版，利用 NVIDIA 独有的低精度格式，在保持性能的同时显著降低显存占用。
- **huihui-ai/Huihui-GLM-5.2-abliterated-GGUF** ([链接](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF))
  - **作者**: huihui-ai | **点赞**: 173 | **下载**: 6,660
  - **一句话说明**: 针对 GLM-5.2 的 “去审查” 微调（Abliterated）并转为 GGUF，反映了社区对内容限制的突破需求。

#### 3. 生态信号

- **Qwen 王朝崛起，MoE 成标配**: **Qwen** 系列（3.5/3.6）及其衍生模型占据榜单超过 1/3 席位，生态统治力显著。其 **MoE** (A3B) 架构形态已成为中大规模模型的标准配置，如 “Qwen3.6-35B-A3B” 和 “Nemotron-Labs-TwoTower-30B-A3B”，证明了稀疏激活在效率与效果上的优势。
- **量化格式大战升温**: **GGUF** 仍是本地部署的绝对王者，几乎所有热门模型都提供 GGUF 版本。值得关注的是，NVIDIA 推出的 **NVFP4** 格式正试图挑战 GGUF 在高端显卡上的地位，这可能是未来大厂主导量化标准的一个信号。
- **“去审查”与性能极致追求并行**: “Uncensored” 和 “Abliterated” 类模型（如 HauhauCS、DavidAU 版本）持续火爆，体现了开发者对模型输出自由度的强烈诉求。同时，针对特定场景（如Agent、代码、安全）的精细微调（如 `yuxinlu1` 和 `BugTraceAI` 的模型）正成为刚需。

#### 4. 值得探索

1.  **nvidia/LocateAnything-3B**: 这是一款极具潜力的小模型，它定义了“找到它”而非“生成它”的新交互方式。对于想开发视觉 AI 应用（如机器人、自动化 UI 操作）的开发者，这是必试模型。
2.  **google/tabfm-1.0.0-pytorch**: 传统机器学习社区与 LLM 生态交叉的重要实验。如果你的工作涉及表格数据处理，这个模型的零样本能力可能会颠覆你处理特征工程和预测的方式。
3.  **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**: 如果你想体验目前最前沿的、专为本地编码设计的 Agent 模型，从这个 Gemma 4 微调版入手是绝佳选择。其高点赞数验证了其代码能力的可靠性。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*