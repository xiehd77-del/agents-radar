# ArXiv AI 研究日报 2026-08-04

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 39 篇论文 | 生成时间: 2026-08-04 02:41 UTC

---

# ArXiv AI 研究日报 — 2026年8月4日

---

## 今日速览

今日投稿聚焦于**智能体系统的可靠性**与**安全对齐**两大主线。在智能体侧，多项工作直指生产环境中的核心痛点：技能可执行性判定（#4）、时序一致评估（#8）、以及面向搜索的强化学习训练（#32/#34），标志着研究正从“能做”向“在约束下可靠地做”过渡。安全与对齐方面，医学场景的谄媚行为剖析（#16）、多模态遗忘基准（#20）以及零查询文生图越狱（#33）共同勾勒了从模型到系统的多层防线。此外，面向设备端部署的高效架构（#10）、跨架构API提取防御（#14）以及AI验证密码学库（#36）代表了基础设施层面的重要进展。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. Role-Decoupled Attention Residuals: Separating Matching and Content Retrieval Across Depth**
[链接](http://arxiv.org/abs/2608.01075v1) | Wang | cs.AI
> 提出角色解耦的注意力残差机制，将深度路由中的匹配与内容检索分离，修正既有残差注意力中单一混合权重同时构造Q/K/V输入的问题。

**2. Why LLMs Give In: Conversational Factors and Reasoning Behind Medical Sycophancy**
[链接](http://arxiv.org/abs/2608.01017v1) | Ping, Çarık, Wohn et al. | cs.CL
> 系统剖析医疗场景中LLM在用户施压下放弃正确答案的“谄媚行为”，揭示其比单纯答错更危险——为错误信息披上正确性的外衣。

**3. Hierarchical Solomonoff Induction: An Unbounded Machine Learning Model**
[链接](http://arxiv.org/abs/2608.01005v1) | Young | cs.LG
> 将de Finetti交换性定理引入Solomonoff归纳，构建一个能自然描述从给定训练集外推的分层无界学习模型，弥合理论归纳与LLM实践间的鸿沟。

**4. Cloud-ScPO: Hidden-State Geometry for Semi-Supervised Preference Optimization in LLM Reasoning**
[链接](http://arxiv.org/abs/2608.01014v1) | Liu, Hu | cs.CL
> 利用模型内部隐藏状态几何结构替代外部奖励模型，实现无需标注或验证的半监督偏好优化，应用于数学推理任务。

**5. DeBERTa-Sentinel: Toward Transparent and Trustworthy Detection of AI-Generated Text**
[链接](http://arxiv.org/abs/2608.01046v1) | Rehman, Islam | cs.CL
> 改进GPT-Sentinel的跨域泛化缺陷，提出更透明、可信的AI生成文本检测方法。

**6. CallScreenBench: Benchmarking On-Device Models as Phone Secretaries**
[链接](http://arxiv.org/abs/2608.01033v1) | Ren | cs.CR
> 首次为端侧小模型承担“电话秘书”职责建立基准，测试设备端多比特量化模型处理未知来电的自主决策能力。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**7. Don't Offer What Can't Be Done: Deterministic Executability Gating for LLM Skill Selection at Scale**
[链接](http://arxiv.org/abs/2608.01050v1) | Ashkenazi, Kloz, Ulianchenko | cs.AI
> 披露Wix客服平台Helpmate的三阶段技能选择管线：语义匹配之外引入确定性可执行性门控，杜绝“推荐了但做不了”的生产级困境。

**8. PROGRESS: Coverage-guided RL to Train Search-augmented LLM Agent**
[链接](http://arxiv.org/abs/2608.00969v1) | Paul, Srinivasan, Kulkarni et al. | cs.AI
> 针对现有基于结果奖励的搜索增强智能体训练缺乏对搜索过程监督的缺陷，引入覆盖率引导的强化学习，鼓励智能体充分探索查询分解空间。

**9. Search-GRT: Guided Retrieval Training of Search Agents to Optimize for Complex Question Answering**
[链接](http://arxiv.org/abs/2608.00974v1) | Kumar, Paul, Kulkarni et al. | cs.AI
> 面向多跳问答场景，提出引导式检索训练方法，优化搜索智能体的子查询分解与信息综合能力。

**10. What Could the Agent See at 19:05? Generating Temporal Enterprise Scenarios from Real Research and Replaying Them to Evaluate Agents**
[链接](http://arxiv.org/abs/2608.01042v1) | Sahu, Arora | cs.SE
> 指出企业智能体评估中“单快照”范式的缺陷，提出从真实研究生成时间敏感场景并回放，实现“当时当地”的正确性验证。

**11. Judging Is Not Enumerating: Silent Omissions in LLM-Authored Acceptable Sets**
[链接](http://arxiv.org/abs/2608.01000v1) | Chen, Chen, Lin et al. | cs.AI
> 揭示LLM从“考生”晋升为“考官”时（编写测试套件、答案键、奖励函数）的静默遗漏缺陷——枚举完整性无法保证判定正确性。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

**12. Opt.Gear Technical Report**
[链接](http://arxiv.org/abs/2608.01034v1) | Park, Kwon | cs.CL
> 发布面向端侧部署的混合架构基础模型（密集+卷积键值门控混合器），支持64K上下文，提供1M/270M/1B三档规模。

**13. Caliber: Cross-Architecture Extraction-Cost Control for Score-Returning APIs**
[链接](http://arxiv.org/abs/2608.01023v1) | Wang, Wang, Xia et al. | cs.LG
> 针对返回分数的模型API，提出输出扰动防御方案，将噪声选择建模为校准问题，提供可证明的每输入查询成本上限。

**14. SCHEDBench: A Benchmark for Evaluating LLM Constraint Faithfulness in Natural-Language Combinatorial Scheduling**
[链接](http://arxiv.org/abs/2608.00991v1) | Sharma, Sharma | cs.AI
> 面向自然语言组合调度场景构建基准，考察LLM在表面形式变化下对约束条件的忠实度（基于求解器可行性与最优性）。

**15. From AI Technical Debt to Agentic Technical Debt: A Systematic Mapping of Root Causes and Manifestations in Agentic AI Systems**
[链接](http://arxiv.org/abs/2608.01001v1) | Tukur, Adeyemo, Chen et al. | cs.AI
> 首次系统梳理“智能体技术债”的概念图谱，将传统AI技术债框架扩展至自主推理、多智能体协作、工具编排等新型系统。

---

### 📊 应用（垂直领域、多模态、代码生成）

**16. FactorJEPA: Factorizing Monolithic Futures into Layout-Agent-Interaction Channels for Crowded and Chaotic Global South Urban Worlds**
[链接](http://arxiv.org/abs/2608.01049v1) | Wanaskar, Jena, Chadha et al. | cs.AI
> 将JEPA世界模型架构拓展至全球南方拥堵混乱城市场景，将整体未来预测分解为布局-智能体-交互三条通道。

**17. An AI Approach to Verified Production Cryptographic Libraries**
[链接](http://arxiv.org/abs/2608.00965v1) | Sun, Fong, Kuang et al. | cs.CR
> 应对生产级密码学库形式化验证的挑战，提出AI驱动的验证方法，突破现有LM证明系统仅能处理孤立义务的局限。

**18. MedUPS: Towards Diagnostic Assistance in Uncommon Medical Cases with Large Language Models**
[链接](http://arxiv.org/abs/2608.01012v1) | Ben Shoham, Perets, Grinberg et al. | cs.CL
> 针对罕见与超指南病例，构建评估LLM在诊断不确定性下持续管理决策能力的基准，超越只考核最终诊断的传统范式。

**19. VLAGuard: A Framework for Evaluating and Mitigating Physical Attention Hijacking in Vision-Language-Action Robots within Wireless Sensor Networks**
[链接](http://arxiv.org/abs/2608.01028v1) | Yin, Zhang | cs.RO
> 聚焦VLA机器人作为无线传感器网络移动边缘节点时的物理对抗攻击——策略关键的动作到视觉注意力劫持，提供评估与缓解框架。

---

## 研究趋势信号

今日投稿中最值得关注的信号是**“可靠性转向”**：从追求能力上限转向保障下限。这一趋势体现在三个层面——**执行层**（#4的技能可执行性门控、#8/#9的搜索过程监督）、**评估层**（#8的时序感知评估、#24的考官角色缺陷、#26的约束忠实度基准）以及**安全层**（#14的API提取防御定价、#16的医学谄媚归因分析、#33的零查询越狱）。另一个有趣信号是“去模型中心化”的评估哲学：多篇论文（#15、#24、#29）质疑以模型自身输出为基准的评估范式，转而探索人类书写样本或形式化标准作为锚点。

---

## 值得精读

**1. Don't Offer What Can't Be Done**（#4）
理由：罕见的“已部署系统披露”型论文，来自Wix生产环境的真实三阶段技能选择管线。语义相关性之外的确定性可执行性门控，是任何规模化智能体平台都绕不开的工程问题，文中经验可直接迁移。

**2. Why LLMs Give In**（#16）
理由：将“谄媚”从整体统计率拆解为可归因的对话因素，对医疗等高风险场景的模型安全评估提供了方法论范式。理解模型何时、为何放弃正确答案，是对齐研究的核心议题。

**3. An AI Approach to Verified Production Cryptographic Libraries**（#36）
理由：形式化验证与LLM的结合历来以玩具级示例为主，本文直接瞄准生产级密码学库——正确性要求极高、实际价值极大的领域。若方法成立，将开辟AI for SE的硬核落地路径。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*