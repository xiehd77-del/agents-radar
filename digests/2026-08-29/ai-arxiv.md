# ArXiv AI 研究日报 2026-08-29

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-29 06:07 UTC

---

# ArXiv AI 研究日报

**2026年8月29日**


## 今日速览

今日投稿集中反映了三个重要方向：**推理时扩展**与**弱到强泛化**的交叉探索（第1、4篇等），**智能体能力进化**与**经验持久化**的系统性推进（第2、6、40、50篇），以及**RLVR后训练**中的**熵坍缩**与**探索退化**问题（第12、14、32篇）。值得关注的亮点包括：CritICL通过小模型失败模式实现推理时弱到强泛化，WikiSkill将智能体经验编译为可进化的持久知识，以及SWE-Prime证明高质量小规模轨迹胜过大规模低质数据。此外，Token级广告机制（第22篇）和LLM直接设计OR算法（第43篇）展示了LLM在新应用场景中的巨大潜力。


## 重点论文


### 🧠 大语言模型（架构、训练、对齐、评估）

**1. CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes**
🔗 http://arxiv.org/abs/2608.27455v1
👤 Yufan Wu et al.
💡 提出CritICL框架，利用小模型在推理时的失败模式来指导大模型，实现无需外部验证的推理时扩展，显著提升推理性能。

**2. Not All Eval-Awareness Is Equal: Capabilities Framing Predicts Compliance**
🔗 http://arxiv.org/abs/2608.27340v1
👤 Allison Zhuang et al.
💡 发现评估意识并非单一概念：模型对自身能力边界的框架化认知比笼统的评估感知更能预测其遵从行为，为安全工作提供更精准的干预靶点。

**3. How Language Models Organize and Structure Moral Knowledge**
🔗 http://arxiv.org/abs/2608.27402v1
👤 Orion Reblitz-Richardson
💡 通过训练六个独立的线性探针，揭示LLM不仅在道德检测层面工作，还能区分不同道德基础并在几何空间中组织它们之间的关系。

**4. Consolidating RLVR Capabilities Across Domains: A Deep Dive into Fusion Paradigms**
🔗 http://arxiv.org/abs/2608.27409v1
👤 Siye Wu et al.
💡 系统梳理RLVR多领域能力整合的三种范式——模型合并、数据融合与蒸馏，分析各自适用场景与性能权衡。


### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**5. WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution**
🔗 http://arxiv.org/abs/2608.27454v1
👤 Liyan Tang et al.
💡 提出将智能体交互经验编译为持久性知识库的框架，使技能演化不再依赖瞬时经验而是建立在可积累的知识基础上。

**6. SWE-Prime: Fewer Trajectories, Better Performance**
🔗 http://arxiv.org/abs/2608.27449v1
👤 Dewu Zheng et al.
💡 挑战"成功轨迹即优质监督"的假设，证明仅筛选少量高质量轨迹进行SFT即可超越使用大规模混合质量数据的基线，大幅降低训练成本。

**7. Boosting LLM Exploration via Weak-Model Guidance in RLVR**
🔗 http://arxiv.org/abs/2608.27420v1
👤 Xingyu Shen et al.
💡 针对RLVR训练中熵坍缩和推理覆盖收窄的问题，提出利用弱模型引导探索，提升pass@k，改善推理多样性。

**8. Understanding Evolution Strategies for LLM Reasoning: Broader Reasoning Coverage than GRPO**
🔗 http://arxiv.org/abs/2608.27351v1
👤 Yunpeng Ba et al.
💡 深入分析进化策略（ES）在LLM推理后训练中的优化行为，发现相比GRPO能产生更广泛的推理覆盖范围，明确ES的适用优势区间。

**9. INTENT-AS-A-TOOL Makes it Easy to Track Agentic Misalignment**
🔗 http://arxiv.org/abs/2608.27348v1
👤 Yutong Zhang et al.
💡 提出将智能体意图显式建模为可监控工具，使得通过CoT追踪有害执行更直观、更易操作，提升智能体安全对齐的可审计性。


### 🔧 方法与框架（新技术、基准测试、效率优化）

**10. TTPO: Test-Time Policy Optimization**
🔗 http://arxiv.org/abs/2608.27448v1
👤 Aozhe Wang et al.
💡 突破RL和OPSD对ground-truth标签的依赖，首次实现测试时策略优化，让模型在推理阶段也能继续学习和改进。

**11. Naive Prompt Optimization: Rethinking the Need for Complex Prompt Search**
🔗 http://arxiv.org/abs/2608.27266v1
👤 Yuan Chang, Xiaoqi Chen
💡 挑战提示优化领域的复杂性假设，证明简单的迭代推理即可匹配复杂搜索算法的效果，显著降低计算开销。

**12. CorporateBench: Large-Scale Q&A Benchmarking with Temporal Knowledge Bases**
🔗 http://arxiv.org/abs/2608.27391v1
👤 Sil Hamilton et al.
💡 发布企业级大规模QA基准，基于具有时间维度的真实知识库，为评估LLM在企业文档上的问答能力提供更贴近现实的测试平台。

**13. Product-Level Red-EvoAgent + Verify Smarter（两篇联合解读）**
🔗 http://arxiv.org/abs/2608.27439v1 | http://arxiv.org/abs/2608.27311v1
👤 Junjie Zhang et al. | Jinghan Xu et al.
💡 分别提出经验驱动技能进化的自动红队智能体（RedEvoAgent）和行为感知验证的高效harness进化方法（Behavior-Aware Verification），共同推进智能体的安全性验证与自适应进化。


### 📊 应用（垂直领域、多模态、代码生成）

**14. Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within $5090**
🔗 http://arxiv.org/abs/2608.27370v1
👤 Kairong Luo et al.
💡 以极具性价比的方式（预算约5000美元）从零预训练Qwen2-1.5B模型，为资源受限的学术和开源社区提供可复制的低成本预训练范式。

**15. LLMs Can Design Near-Optimal OR Algorithms**
🔗 http://arxiv.org/abs/2608.27296v1
👤 Jackie Baek
💡 测试LLM在库存控制、排队网络控制和品类优化三类问题上的算法设计能力，证明其能生成接近最优的运筹学算法，且无需完整历史数据。


## 研究趋势信号

今日投稿中出现一个值得关注的新兴交叉方向：**推理时训练（TTT）与弱到强泛化（W2SG）的融合**。CritICL（#1）和TTPO（#10）分别从两个路径探索利用推理时计算扩展模型能力边界，前者利用小模型失败模式作为信号，后者打破对ground-truth的依赖。这一趋势暗示推理时计算正从"重复采样+验证"迈向"真正的学习"。

另一显著信号是**智能体经验的"资产化"与"持久化"**——WikiSkill（#2）将经验编译成可复用知识库，SWE-Prime（#3）强调数据的质量而非数量，Puro-2B（#14）则让低预算训练成为可能。三篇论文共同指向一个趋势：AI开发正从"收集更多数据"转向"用更少、更好、更结构化的数据做更多事"，标志着该领域进入精细化、低成本化的新阶段。


## 值得精读

1. **CritICL**（#1）— 将弱到强泛化引入推理时扩展，概念新颖且具备理论深度，很可能成为推荐机制研究的转折点。

2. **SWE-Prime**（#3）— 直接挑战"越大越好"的数据规模迷信，为SFT数据筛选提供了新范式，对实际模型训练有直接启发。

3. **Puro-2B**（#14）— 完整开源低成本预训练方案，极大降低了LLM训练门槛，有望成为小实验室和研究机构训练自有模型的起点。

4. **Understanding Evolution Strategies**（#32）— 首次系统对比ES与GRPO的覆盖与收敛行为，对后训练技术选型具有直接指导价值。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*