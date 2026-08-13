# ArXiv AI 研究日报 2026-08-13

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-13 02:06 UTC

---

# 📡 ArXiv AI 研究日报 — 2026-08-13

> 共收录 50 篇新论文（cs.AI / cs.CL / cs.LG），覆盖 LLM、智能体、因果发现、时序预测、多模态对齐等方向。


## 今日速览

今日投稿呈现三条主线：其一是**测试时自适应与持续学习**——GUI 视觉定位、量化感知等方向均出现无需重训即可动态适配的探索；其二是**可解释性与安全性的纵深**——从 SAE 集级不稳定性、注意力路径脆弱性到跨语言安全错觉，透明度研究正从静态分析走向动态归因与一致性验证；其三是**结构化与多模态融合**——LLM 训练异常定位、GUI 智能体、医学影像 GNN 等领域都在将先验结构和模态间约束注入模型。此外，**因果关系与概率校准**在供应链决策、数学协作证实等场景中持续获得关注，共同指向“可行动、可验证、可解释”的下一代 AI 系统方向。


## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. Beyond a Bag of Features: Set-Level Instability in Sparse Autoencoders**  
*Bolik et al.*  
[链接](http://arxiv.org/abs/2608.11197v1)  
→ 揭示稀疏自编码器（SAE）在集合层面上的不稳定性，指出基于重叠系数的分析可能推翻此前基于余弦相似度的结论。

**2. The Illusion of Cross-Lingual Safety in Low-Resource Languages**  
*Oppong et al.*  
[链接](http://arxiv.org/abs/2608.11146v1)  
→ 系统性验证英语安全对齐在低资源语言上的失效，暴露跨语言安全迁移的脆弱性。

**3. Attention-Path Fragility as an Uncertainty Signal in Large Language Models**  
*Kim et al.*  
[链接](http://arxiv.org/abs/2608.11138v1)  
→ 提出 ASMI 指标——通过注意力子网络互信息将“预测脆弱性”作为不确定性信号，补充输出分布宽度的信息。

**4. Data Attribution of Emergent Misalignment with Persona Features**  
*Vetter et al.*  
[链接](http://arxiv.org/abs/2608.11025v1)  
→ 用“人物特征（persona features）”机制解释“涌现性错位”，并追溯训练数据贡献度，为对齐失败提供归因方法。

**5. Mapping and Measuring the Behavioral Evolution of Large Language Models**  
*Qiao et al.*  
[链接](http://arxiv.org/abs/2608.11027v1)  
→ 对 32 个模型（6 个家族）在 1 万条 prompts 上的输出行为做嵌入图谱，量化跨代行为演变。


### 🤖 智能体与推理（规划、工具使用、思维链）

**6. SkillZip: Evaluation-Free Skill Compression for Self-Evolving Agents by Discovering Reusable Structure**  
*Bai et al.*  
[链接](http://arxiv.org/abs/2608.11079v1)  
→ 免评估地从自进化智能体技能库中压缩重复结构，解决 CLAUDE.md 一类“灾难性记忆增长”问题。

**7. Why Does CLAUDE.md Keep Growing? Catastrophic Remembering in Agentic Coding**  
*Chakrabarti*  
[链接](http://arxiv.org/abs/2608.11095v1)  
→ 诊断智能体编码中记忆文件无限膨胀的根本原因：追加成本低、删除成本高，提出“灾难性记住”概念并给出缓解思路。

**8. Long-Horizon AI Research for Grothendieck Constant: A Case Study in Human-AI Mathematical Collaboration**  
*Li et al.*  
[链接](http://arxiv.org/abs/2608.11195v1)  
→ 以改进 Grothendieck 常数为案例，系统呈现长时程 AI 数学协作的工作流与经验。

**9. Actions Speak Louder than Words: Measuring Cross-Lingual Policy Retention in Tool-Using Agents**  
*Mukherjee et al.*  
[链接](http://arxiv.org/abs/2608.11110v1)  
→ 首次从<b>动作序列一致性</b>而非最终答案维度衡量工具型智能体的跨语言策略保持力。

**10. Test-Time Self-Evolving GUI Visual Grounding via Reflection-Guided On-Policy Self-Distillation**  
*Xuan & Li*  
[链接](http://arxiv.org/abs/2608.11191v1)  
→ 测试时通过反思引导的在线自蒸馏实现 GUI 视觉定位的自适应，无需更新参数即可适配新界面。


### 🔧 方法与框架（新技术、基准测试、效率优化）

**11. ConVAWG: A Retrieval-Grounded Framework for Controlled Synthetic Dialogue Generation in Violence Against Women and Girls**  
*Lyu et al.*  
[链接](http://arxiv.org/abs/2608.11200v1)  
→ 面向敏感领域对话的受控合成生成框架，以检索锚定保证内容可控性，填补真实数据难获取场景的空白。

**12. Conditional Independence Tests for Constraint-Based Causal Discovery: A Survey**  
*Averin et al.*  
[链接](http://arxiv.org/abs/2608.11156v1)  
→ 系统梳理 PC/FCI 等约束式因果发现中的条件独立性检验方法、假设与局限。

**13. ReRound: Reconstructive Rounding to Resolve Midpoint Ambiguity in Calibration-Free LLM Quantization**  
*Hsieh & Kung*  
[链接](http://arxiv.org/abs/2608.11045v1)  
→ 用条件扩散模型解决权重量化中“中点歧义”问题，免校准的后训练量化精度提升显著。

**14. Workflow Cards: Structured Summaries of Workflow Executions Using Provenance Data**  
*Marchioro et al.*  
[链接](http://arxiv.org/abs/2608.11022v1)  
→ 借鉴 Model/Data Cards 思想，用溯源数据为工作流执行创建结构化摘要卡，提升 ML 流程可复现性。

**15. DACRI: Decision-Aware Causal Intervention Ranking for Critical Supply Chains**  
*Huang et al.*  
[链接](http://arxiv.org/abs/2608.11154v1)  
→ 发布 CriticalSCM-Bench v1 合成基准，将因果发现与干预排序结合，直接优化干预净价值。


### 📊 应用（垂直领域、多模态、代码生成）

**16. Surgical WAM: A World-Action Model for Data-Efficient Surgical Robot Learning**  
*Bao et al.*  
[链接](http://arxiv.org/abs/2608.11204v1)  
→ 面向手术机器人构建“世界-动作联合模型”，大幅降低遥操作演示数据需求。

**17. R4DSG: Relative 4D Scene Graph Memory for Object-Centric Question Answering in Long Egocentric Video**  
*Ma et al.*  
[链接](http://arxiv.org/abs/2608.11017v1)  
→ 用相对 4D 场景图内存为长时程第一视角视频中的物体级问答提供持久身份追踪。

**18. MultiModal Code-Switching: Interleaving Visual Objects into Language for Explicit Object-Level Alignment**  
*Xiang et al.*  
[链接](http://arxiv.org/abs/2608.11167v1)  
→ 将视觉对象以“代码切换”方式插入文本序列，实现 MLLM 中显式的物体级对齐而非全局图像级对齐。

**19. V-FiLLM: Verified Financial LLM Reasoning Benchmark**  
*Larsen et al.*  
[链接](http://arxiv.org/abs/2608.11047v1)  
→ 从可执行计算树构建金融推理基准，所有答案可自动验证，填补金融 LLM 评估空白。

**20. On the Limitations of Cross-Lingual Consistency in Multilingual Text-to-image Generation**  
*Zhang et al.*  
[链接](http://arxiv.org/abs/2608.11002v1)  
→ 发布 LingT2I 基准，量化文本到图像生成中跨语言一致性的不足。


## 研究趋势信号

今日投稿透露出三个新兴方向：第一，**“测试时不重训”的自适应范式**正在蔓延——从 GUI 智能体（#5）到 LLM 量化（#13），都是在推理阶段动态调整而冻结权重；第二，**动作序列成为评估核心对象**——多语言策略保持（#9）和长时程数学研究（#8）都跳出“最终答案正确率”的窠臼，转而度量过程一致性；第三，**“记忆管理”成为智能体核心议题**——无论是指令文件的无界膨胀（#7）还是技能库的结构压缩（#6），都指向一个事实：可持续智能体的瓶颈已从“学不会”转向“忘不掉”。此外，因果性与决策的耦合（#15）和可验证基准的兴起（#19）验证了“可行动、可验证”的趋势。


## 值得精读

1. **Surgical WAM**（[链接](http://arxiv.org/abs/2608.11204v1)）— 将“世界模型 + 动作模型”联合范式引入高精度手术机器人领域，数据效率提升思路可能外溢到其他难以采集演示的机器人任务。

2. **Why Does CLAUDE.md Keep Growing? Catastrophic Remembering in Agentic Coding**（[链接](http://arxiv.org/abs/2608.11095v1)）— 用一个几乎所有 Agentic 开发者都会遇到的痛点切入，给出了“灾难性记住”这一凝练概念与诊断框架，对智能体系统设计具有直接指导价值。

3. **Cross-View Feature Matching**（[链接](http://arxiv.org/abs/2608.11093v1)）— 对跨视角特征匹配十年进展的系统综述 + 基准测试，梳理从专用模型到基础模型（foundation model）的演进路径，适合作为该领域的入门与导航文献。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*