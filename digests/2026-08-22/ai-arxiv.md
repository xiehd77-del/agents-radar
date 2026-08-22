# ArXiv AI 研究日报 2026-08-22

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-22 01:17 UTC

---

# 📊 ArXiv AI 研究日报 — 2026年8月22日

## 今日速览

今日论文聚焦于**递归自我改进（RSI）** 与**智能体能力评估**两大前沿方向。AI4AI-Bench 首次将 RSI 概念系统化为可评测基准，同时多篇论文探讨了 LLM 智能体的工具使用、技能迁移与自适应推理预算。在应用层面，医疗报告解读（G-CARL）、法律合约审查（ContractScrub）等垂直领域基准密集涌现。安全性方面，针对 LLM 遗忘机制（ConceptGuard）与自我改进审计（Phantom Gains）的研究值得关注。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. ConceptGuard: Benchmarking Context-Sensitive Unlearning in Large Language Models**
🔗 http://arxiv.org/abs/2608.20338v1
👤 Sahil Kale, Ian Harris
💡 首个针对上下文敏感遗忘的基准测试，弥补了现有方法仅评估“事实遗忘”而未考虑上下文中选择性遗忘的空白。

**2. Phantom Gains: Auditing Self-Improvement Against a Measured Null**
🔗 http://arxiv.org/abs/2608.20290v1
👤 Cheng Xu, Nan Yan, Liming Chen et al.
💡 揭示 LoRA 自我改进评估中的测量假象问题——通过差异两个含噪估计导致的“幻影增益”，提出对照审计方法。

**3. Which Eviction Policy Should an LLM Cache Use?**
🔗 http://arxiv.org/abs/2608.20280v1
👤 Yash Kulkarni, Shubham Harkare et al.
💡 基于 CLEVER 协议对七种语义缓存淘汰策略进行系统对比，为 LLM 服务缓存设计提供实证参照。

**4. When Text and Numbers Disagree: Evidence Arbitration in Large Language Models**
🔗 http://arxiv.org/abs/2608.20116v1
👤 Mattia Carletti, Edward Phillips et al.
💡 构建受控合成任务研究 LLM 在文本摘要与数值观测冲突时的证据仲裁行为，对 RAG 与工具调用场景意义重大。

**5. OenoBench: A Wine-Domain Benchmark for Knowledge-Grounded Evaluation of LLMs**
🔗 http://arxiv.org/abs/2608.20106v1
👤 Nikita Khudov
💡 基于38,104条溯源事实构建的葡萄酒领域基准，含3,266道多选题目，四个难度层级。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**6. AI4AI-Bench: Benchmarking LLM Agents in Algorithmic Design for Recursive Self-Improvement**
🔗 http://arxiv.org/abs/2608.20318v1
👤 Yizhe Chi, Wenyi Li, Deyao Hong et al.
💡 首次将递归自我改进（RSI）系统化：让智能体改进训练算法本身，评估下一代的“计算-能力”交换率提升。

**7. MidTool: Mid-training Data Synthesis for Agentic Tool Use**
🔗 http://arxiv.org/abs/2608.20314v1
👤 Fengqing Jiang, Yite Wang, Boyi Liu et al.
💡 针对智能体工具使用场景提出中期训练数据合成方法，强化 LLM 在工具选择与调用方面的能力。

**8. Break It Down, Pass It On: Cross-Task Skill Transfer in LLM Agents**
🔗 http://arxiv.org/abs/2608.20274v1
👤 Yiyang Feng, Biddut Sarker Bijoy et al.
💡 系统研究智能体诱导技能跨任务迁移的可靠性条件，发现不当迁移可能对接收智能体造成损害。

**9. Learning When to Think: Adaptive Reasoning for Test-Time Compute Allocation**
🔗 http://arxiv.org/abs/2608.20256v1
👤 Gijs Kassenaar, Zhao Yang, Vincent François-Lavet
💡 训练模型自适应分配思考预算——简单问题少算、难题多算，解决固定 token 预算带来的效率失衡。

**10. Inducing Task Models from Computer-Use Traces**
🔗 http://arxiv.org/abs/2608.20319v1
👤 Yucheng Jiang, Zora Zhiruo Wang et al.
💡 从自然计算使用轨迹中诱导符号化、可审计的任务模型，为计算机使用智能体的工作流学习铺路。

**11. Pandora's AI Model Routing Box: Efficient Allocation with Costly Value Estimation**
🔗 http://arxiv.org/abs/2608.20316v1
👤 Adam Fisch, Shubhendu Trivedi et al.
💡 解决异构模型路由中的“潘多拉盒子”问题：在评估专家价值本身有成本的条件下做最优分配。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

**12. FormalTCS: Benchmarking End-to-End Frontier Formal Theoretical Computer Science Research of LLMs**
🔗 http://arxiv.org/abs/2608.20153v1
👤 Dingzirui Wang, Xuanliang Zhang et al.
💡 专家验证的前沿理论计算机科学研究基准，衡量 LLM 在端到端形式化研究任务上的能力。

**13. InsufficiencyBench: Evaluating LLM Legal Advice on Underspecified User Queries**
🔗 http://arxiv.org/abs/2608.20220v1
👤 Samuel J. Vincent, Daniel Calloway et al.
💡 首个针对“查询侧信息不足”的法律基准，检验 LLM 是否能在用户遗漏关键事实时识别并追问。

**14. Daedalus-150M: A Convolution-Attention Hybrid Designed for CPU Inference**
🔗 http://arxiv.org/abs/2608.20210v1
👤 Christos Koutsiaris
💡 逆向设计流程：先确定 CPU 推理目标再选架构，仅18层中6层保留全注意力，为端侧部署提供新思路。

**15. DARS: Dual-Level Credit Assignment RL with Structured Reasoning for Instruction-Based Image Editing**
🔗 http://arxiv.org/abs/2608.20161v1
👤 Haoxiang Cao, Jiajiong Cao et al.
💡 针对“规划器-渲染器”图像编辑流水线提出双层信用分配 RL，解决最终奖励无法定位失败环节的问题。

---

### 📊 应用（垂直领域、多模态、代码生成）

**16. G-CARL: Grounded Checklist-Aligned Reward Learning for Patient-Oriented Medical Report Interpretation**
🔗 http://arxiv.org/abs/2608.20331v1
👤 Shiao Xie, Siyu Chen, Jianwei Lv et al.
💡 面向患者的医疗报告解读：同时保证循证医学事实性和个性化的医患沟通语境，填补医疗视觉语言任务空白。

**17. Multi-Agent Orchestration with Common-Sense Reasoning for Autonomous Driving**
🔗 http://arxiv.org/abs/2608.20129v1
👤 Mehdi Azarafza, Faezeh Pasandideh et al.
💡 利用 LLM 常识推理能力编排多智能体自动驾驶系统，弥补 RL 与规则方法在情境推理上的不足。

**18. Task-CoEvolve: Efficient Harness Optimization via Adaptive Validation Task Selection**
🔗 http://arxiv.org/abs/2608.20169v1
👤 Atsuyuki Miyai, Kiyoharu Aizawa et al.
💡 通过自适应验证任务选择提升 LLM 智能体外框架优化效率，不更新模型权重即可获得显著性能提升。

**19. DECOWAM: Decoupled Whole-Body World-Action Model for Legged Mobile Manipulation**
🔗 http://arxiv.org/abs/2608.20114v1
👤 Siyuan Ma, Boshi Zhang et al.
💡 解耦相机自运动与基座/机械臂动作的世界-动作模型，推进四足移动操作的世界模型建模。

---

## 研究趋势信号

今日投稿呈现三个值得关注的信号：**① 递归自我改进（RSI）成为新风口**——AI4AI-Bench 与 Phantom Gains 分别从基准构建和审计方法切入，呼应 AGI 讨论中自我改进安全性的核心关切；**② 查询侧不确定性成为基准测试的新维度**——InsufficiencyBench 与 ConceptGuard 不约而同挑战“查询信息完整”的传统假设；**③ 注意力机制的替代与改造仍在活跃探索**——Relation 和 Daedalus 从不同方向尝试突破注意力计算的效率与表示局限。整体来看，领域正从“模型能力提升”向“能力评估方法的严谨性”倾斜。

---

## 值得精读

| 论文 | 推荐理由 |
|------|----------|
| **AI4AI-Bench**（2608.20318） | 首次将递归自我改进转化为可评测任务，定义的“计算-能力交换率”指标可能成为后续 RSI 研究的标准度量。 |
| **Phantom Gains**（2608.20290） | 对自我改进评估中的度量假象进行了严谨的统计学审计，其“测量零假设”方法论适用于所有 LLM 迭代评估场景。 |
| **Pandora's AI Model Routing Box**（2608.20316） | 首次系统建模“价值估计成本”约束下的模型路由问题，兼具理论深度与工程实用价值。 |

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*