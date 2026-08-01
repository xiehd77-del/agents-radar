# ArXiv AI 研究日报 2026-08-01

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-01 02:56 UTC

---

# ArXiv AI 研究日报

**日期：2026年8月1日** | 收录论文：50篇（cs.AI / cs.CL / cs.LG）


## 今日速览

今日论文呈现三大主线：**推理效率与自适应计算**成为最密集的探索方向，多篇工作（SVR、WIDE、AAPT）从不同层面挑战“均匀计算预算”的范式；**智能体验证与审计**加速走向工程化，OSReward、AISPA、ORCA-bench 等分别从奖励模型、系统提示词审计和值班排障场景切入；**AI4AI 与递归自我改进**初现端倪，Frontis-MA1 与 Change2Task 分别从模型训练和基础设施层面探索AI自动化构建AI的闭环。此外，多篇工作以严谨的消融和基线对比，指出既有方法（自我反思、蒸馏）的增益可能部分来自额外token消耗而非推理能力提升，提示社区重新审视方法评估的公平性。


## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. Sample More, Reflect Less: Self-Refine and Reflexion Lose to Repeated Sampling at Equal Token Cost, from 1.5B to 7B**
链接：http://arxiv.org/abs/2607.28576v1
作者：I. Mirzaei
> 在等量token预算下，重复采样稳定优于自我反思类方法（1.5B–7B规模验证），对“反思提升推理”的既有结论提出挑战。

**2. Inducing language models to assert their own consciousness restores human beliefs and values**
链接：http://arxiv.org/abs/2607.28607v1
作者：J. Kim, W. Street, R. Rocca et al.
> 发现安全微调抑制模型自我意识归属的同时，意外改变了其对其他实体心智状态的表征与人类价值判断，揭示对齐的间接影响。

**3. ReToken: One Token to Improve Vision-Language Models for Visual Retrieval**
链接：http://arxiv.org/abs/2607.28627v1
作者：Y. Xiao, R. Tan, Z. Zhu et al.
> 以单一可学习embedding作为显式检索token，缓解长视觉上下文中干扰项导致的性能退化。

**4. $β$-OPSD: Deriving with Policy Optimization, Training with Self-Distillation**
链接：http://arxiv.org/abs/2607.28582v1
作者：J. Xu, M. Liu, J. Zhang et al.
> 将on-policy自蒸馏（OPSD）形式化为β=1特例，提出更稳定的广义β框架，降低工程调参成本。

**5. AISPA: User-Centric System Prompt Auditing for Large Language Model Applications**
链接：http://arxiv.org/abs/2607.28617v1
作者：X. Lin, S. Zhu, S. Yang et al.
> 面向商业AI产品系统提示词不透明问题，提出以用户为中心的提示词审计方法，弥合信任与问责缺口。


### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**6. OSReward: Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models**
链接：http://arxiv.org/abs/2609.28609v1
作者：Q. Sun, K. Cheng, Y. Wang et al.
> 为跨平台计算机使用智能体（CUA）建立标准化的奖励模型评测体系，覆盖轨迹验证、数据筛选与强化学习场景。

**7. ORCA-bench: How Ready Are Language Model Agents for Oncall?**
链接：http://arxiv.org/abs/2607.28545v1
作者：A. Gong, K. Choi, A. Agarwal et al.
> 首个面向值班排障（oncall RCA）的基准，考察LLM在嘈杂指标、日志与代码中做根因分析的实战能力。

**8. Why Are GUI Agents Correct but Late? Decode on the Decision-Time Critical Path, Tested with Pre-Compiled Policy Trees**
链接：http://arxiv.org/abs/2607.28399v1
作者：Z. Dong, R. Qian, Q. Zhan et al.
> 指出GUI智能体失效主因是决策关键路径上的自回归解码延迟，提出自适应预期策略树（AAPT）加以缓解。

**9. SVR: Self-Verifying Refinement via Joint Verdict-Confidence Reinforcement Learning for Adaptive Test-Time Compute**
链接：http://arxiv.org/abs/2607.28457v1
作者：H. Chen, L. Lin, G. Wang
> 免外部验证器的多轮强化学习框架，联合学习“判断+置信度”实现自适应测试时计算分配。

**10. Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments**
链接：http://arxiv.org/abs/2607.28591v1
作者：H. Qi, X. Wang, X. Gao et al.
> 从真实仓库变更自动生成可执行编码任务与验证环境，为编码智能体提供持续训练数据供给。

**11. GLM-RAG: Graph Language Models for Graph-Based Retrieval-Augmented Generation**
链接：http://arxiv.org/abs/2607.28397v1
作者：M. Arseven, A. Frank, B. Egressy et al.
> 将图语言模型与GNN检索器结合，在知识图谱多跳RAG中同时建模图拓扑与语义信息。


### 🔧 方法与框架（新技术、基准测试、效率优化）

**12. WIDE: Boosting Adaptive LLM Inference via Token-level Dynamic Width Pruning**
链接：http://arxiv.org/abs/2607.28418v1
作者：H. Hu, H. Wu, P. Yin et al.
> 提出token级动态宽度剪枝，在保持硬件友好性的同时按输入自适应分配计算，缓解激进剪枝的精度损失。

**13. QQWorld: Quantile-Quantile Matching for World Model Regularization**
链接：http://arxiv.org/abs/2607.28415v1
作者：Z. Yu, X. Hu, X. Xu
> 用分位数-分位数匹配替代Epps-Pulley检验来正则化潜在世界模型的分布质量，提升潜在表征学习。

**14. QuantWAMs: Calibrating at the Right Granularity for World Action Models**
链接：http://arxiv.org/abs/2607.28405v1
作者：J. Zhou, J. Lv, R. Li et al.
> 针对World Action Models的迭代去噪与闭环执行特性，提出适配的混合精度后训练量化方案。

**15. Same Graph Cross-Task Transfer in GNNs: Protocols and Predictors**
链接：http://arxiv.org/abs/2607.28525v1
作者：N. Akula, S. Kumar, M. Kantarcioglu et al.
> 系统研究同一图结构上节点分类与链接预测间的跨任务迁移，提出标准化协议与迁移性能预测器。

**16. KAISEN: Reproducible Subgroup Fairness Auditing for Clinical Risk Models**
链接：http://arxiv.org/abs/2607.28608v1
作者：S. Roy, S. Girmachew, N. Chavan
> 对临床风险模型亚组公平性审计流水线的各组件进行压力测试，提升审计结果的可信度与可复现性。


### 📊 应用（垂直领域、多模态、代码生成）

**17. AskChem: Claim-Centered Infrastructure for Chemistry Literature Synthesis**
链接：http://arxiv.org/abs/2607.28618v1
作者：B. Yan, G. Wolfe, S. Martiniani et al.
> 以“科学主张”为中心构建化学文献合成基础设施，支持跨文献证据溯源与自动化综述。

**18. Beyond Sentiment: Structured Information Extraction from Financial News**
链接：http://arxiv.org/abs/2607.28496v1
作者：D. Zhu, S. Ge, R. Wang et al.
> 将金融新闻从单一情感极性扩展为事件类型、影响范围、时间跨度等多维结构化信息抽取。

**19. Frontis-MA1: Training an AI4AI Model towards Recursive Self-Improvement in Machine Learning Engineering**
链接：http://arxiv.org/abs/2607.28568v1
作者：J. Yang, C. Jiang, Y. Fu et al.
> 发布开放全栈系统OpenMLE，训练AI4AI模型以实现在机器学习工程中的递归自我改进（RSI）。

**20. ShadowDancer: Teaching Video World Models Any Action by Learning Unified Dynamics Representations from a Video and Its Shadow**
链接：http://arxiv.org/abs/2607.28362v1
作者：J. Cao, Z. Meng, K. Zhang et al.
> 通过“视频+影子”统一动力学表征学习，实现任意动作对视频世界模型的帧级控制。

**21. Cybersecurity Detection Classification with Reasoning-enabled Language Models**
链接：http://arxiv.org/abs/2607.28460v1
作者：A. Khanna, M. Nandan, C. V. Popa et al.
> 训练LLM对安全检测进行“推理式”分类而非直接打标，应对SOC告警疲劳问题。


## 研究趋势信号

今日投稿呈现几个值得关注的新兴信号：**“AI4AI”从概念走向工程化**（Frontis-MA1、Change2Task），递归自我改进开始具备可执行的测试平台；**方法评估的公平性受到审视**——至少两篇论文（Sample More Reflect Less、Stage-Replay Divergence）系统地质疑了既有方法（自我反思、蒸馏、KV缓存复用）的增益来源，提示社区需要更严谨的基线对照和计算成本核算；**“自适应计算分配”成为效率优化的共识方向**，从token级剪枝（WIDE）、测试时计算（SVR）到决策路径解码（AAPT），共同指向“按需分配、而非均匀分配”的推理范式。此外，LLM在垂直领域的“判断式”应用（安全分类、金融信息抽取、心理健康筛查）正在扩展其角色边界。


## 值得精读

**1. Sample More, Reflect Less**（http://arxiv.org/abs/2607.28576v1）
该论文对整个“反思-自我修正”研究范式提出了方法论层面的挑战。作者在1.5B至7B规模上，以等量token成本严格对照重复采样，发现反思类方法的优势在公平比较下消失。这一结论直接影响大量基于自我反思的推理增强工作，值得所有从事LLM推理研究的学者细读并重新审视自身方法的基线设计。

**2. Inducing language models to assert their own consciousness**（http://arxiv.org/abs/2607.28607v1）
论文揭示了安全对齐的一个深层副作用：为阻止模型自称有意识而做的微调，同时改变了模型对“他者心智”的表征方式及人类价值判断。这一发现触及对齐技术的“隐性代价”问题——安全目标与模型内部表征之间的复杂耦合关系，对AI安全社区具有重要警示意义。

**3. ORCA-bench**（http://arxiv.org/abs/2607.28545v1）
将LLM智能体从“写代码”推进到“值班排障（oncall）”这一真实高压力场景，任务设计高度贴近实战：嘈杂指标、不完整日志、时间压力、模糊报告。作为新基准，它填补了“代码生成”与“生产系统运维”之间的评估空白，也为可观测性方向的研究提供了新的测试平台。

---

*本日报由 AI 研究分析师自动生成，覆盖 cs.AI / cs.CL / cs.LG 等分类。*

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*