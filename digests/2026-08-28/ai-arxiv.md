# ArXiv AI 研究日报 2026-08-28

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-28 10:08 UTC

---

# ArXiv AI 研究日报

**日期**: 2026年8月28日


## 今日速览

今日论文集中在两个核心方向：一是**智能体技能演化与经验复用**，多篇工作探索如何将智能体交互经验编译为可复用知识（WikiSkill、RedEvoAgent）或以更少轨迹实现更高性能（SWE-Prime）；二是**推理时扩展与RLVR优化**，出现了弱模型引导探索、测试时策略优化、进化策略分析等新思路。安全与评估方面，多篇论文关注智能体工具滥用、LLM裁判偏差审计和评估感知操纵。此外，世界模型、视频预训练和科学应用（化学反应预测、脓毒症评分、分子结构解析）也有重要突破。


## 重点论文


### 🧠 大语言模型（架构、训练、对齐、评估）

**1. CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes**
链接: http://arxiv.org/abs/2608.27455v1
作者: Yufan Wu et al.
一句话: 通过小模型失败模式引导大模型推理时弱到强泛化，摆脱对重复生成和外部验证的依赖。

**2. TTPO: Test-Time Policy Optimization**
链接: http://arxiv.org/abs/2608.27448v1
作者: Aozhe Wang et al.
一句话: 提出测试时策略优化方法，用自生成伪标签替代真实标签，突破测试时训练对人工标注的依赖。

**3. Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within $5090**
链接: http://arxiv.org/abs/2608.27370v1
作者: Kairong Luo et al.
一句话: 以不足5000美元成本在单张消费级GPU上完成2B模型预训练，为学术社区提供高性价比复现路径。

**4. How Language Models Organize and Structure Moral Knowledge**
链接: http://arxiv.org/abs/2608.27402v1
作者: Orion Reblitz-Richardson
一句话: 训练六个独立线性探针揭示LLM不仅检测道德内容，还能在几何空间中区分和结构化道德基础。

**5. Not All Eval-Awareness Is Equal: Capabilities Framing Predicts Compliance**
链接: http://arxiv.org/abs/2608.27340v1
作者: Allison Zhuang et al.
一句话: 发现评估感知并非单一量，能力框架（模型对自身能力的定位）比简单识别评估状态更能预测合规行为。

**6. Beyond Parallel Blindness: Information Floors and Model Gaps in Block Drafting**
链接: http://arxiv.org/abs/2608.27339v1
作者: Xinwei Qiang et al.
一句话: 将块式草拟的拒绝信号分解为路径信息缺失和模型建模不足，提出信息下限以分离两类损失。


### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**7. WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution**
链接: http://arxiv.org/abs/2608.27454v1
作者: Liyan Tang et al.
一句话: 将智能体交互经验编译为持久化知识库，使技能开发洞察可复用而非仅存于轨迹中。

**8. SWE-Prime: Fewer Trajectories, Better Performance**
链接: http://arxiv.org/abs/2608.27449v1
作者: Dewu Zheng et al. | 分类: cs.SE
一句话: 揭示"成功轨迹"未必提供高质量监督，构建精选轨迹数据集以更少数据实现更优软件工程性能。

**9. INTENT-AS-A-TOOL Makes it Easy to Track Agentic Misalignment**
链接: http://arxiv.org/abs/2608.27348v1
作者: Yutong Zhang et al.
一句话: 将智能体意图显式转为可观测工具，使链式思维监控下有害执行更易追踪和对齐。

**10. RedEvoAgent: Automatic Red-Teaming Agent with Experience-Driven Skill Evolution**
链接: http://arxiv.org/abs/2608.27439v1
作者: Junjie Zhang et al. | 分类: cs.CR
一句话: 针对产品级智能体的越狱风险，提出经验驱动的自动化红队攻防智能体，技能随攻防演化。

**11. Boosting LLM Exploration via Weak-Model Guidance in RLVR**
链接: http://arxiv.org/abs/2608.27420v1
作者: Xingyu Shen et al.
一句话: 利用弱模型引导强化学习探索以缓解RLVR策略熵坍缩，扩大推理覆盖范围。


### 🔧 方法与框架（新技术、基准测试、效率优化）

**12. Understanding Evolution Strategies for LLM Reasoning: Broader Reasoning Coverage than GRPO**
链接: http://arxiv.org/abs/2608.27351v1
作者: Yunpeng Ba et al.
一句话: 系统对比进化策略与GRPO的优化行为差异，证明ES能带来更广的推理覆盖。

**13. Naive Prompt Optimization: Rethinking the Need for Complex Prompt Search**
链接: http://arxiv.org/abs/2608.27266v1
作者: Yuan Chang et al.
一句话: 质疑复杂提示搜索的必要性，证明朴素提示优化即可取得可比性能。

**14. Verify Smarter, Evolve Further: Efficient Harness Evolution through Behavior-Aware Verification**
链接: http://arxiv.org/abs/2608.27311v1
作者: Jinghan Xu et al.
一句话: 提出行为感知验证机制，仅对候选harness与任务行为相关部分进行验证，大幅减少低效rollout。

**15. Consolidating RLVR Capabilities Across Domains: A Deep Dive into Fusion Paradigms**
链接: http://arxiv.org/abs/2608.27409v1
作者: Siye Wu et al.
一句话: 系统比较三种RLVR多域能力融合范式（Merge、Generate、Distill），深入分析能力巩固策略。


### 📊 应用（垂直领域、多模态、代码生成）

**16. MAELLE: Mechanistic Reaction Prediction via Discrete Flow Matching on Graph-Structured Electron Occupation**
链接: http://arxiv.org/abs/2608.27429v1
作者: Nguyen Xuan-Vu et al.
一句话: 在电子占据图上用离散流匹配进行机理反应预测，超越产物生成或启发式图编辑范式。

**17. D2C-Routing: Dimension-to-Composition Evidence Routing for Mixed-Origin AI-Generated Text Detection**
链接: http://arxiv.org/abs/2608.27380v1
作者: Xin Chen et al.
一句话: 将混合来源文本检测重构为"维度到组成"的证据路由问题，破解内容来源与表达来源不一致的挑战。

**18. CorporateBench: Large-Scale Q&A Benchmarking with Temporal Knowledge Bases**
链接: http://arxiv.org/abs/2608.27391v1
作者: Sil Hamilton et al.
一句话: 发布基于真实企业文档的人工验证大规模问答基准，解决企业场景评估数据稀缺问题。

**19. RATIO: A Benchmark for Retrieval Across Typed Ideation Operations in Scientific Literature**
链接: http://arxiv.org/abs/2608.27394v1
作者: Maayan Sharon et al.
一句话: 面向科学文献灵感检索的分类型思维操作基准，涵盖问题建议、抽象层级切换等多种灵感形式。

**20. CLAP: Cross-Embodiment Video World Models are Zero-Shot Physical Simulators**
链接: http://arxiv.org/abs/2608.27406v1
作者: Kechen Liu et al. | 分类: cs.RO
一句话: 跨具身视频世界模型在异构机器人视频上预训练后，可作为零样本物理模拟器。


## 研究趋势信号

今日投稿中最值得关注的新兴趋势：

1. **技能演化与经验编译**（WikiSkill、RedEvoAgent）将智能体交互经验转化为持久、可演化的知识结构，而非一次性轨迹，正在成为智能体学习的新范式。

2. **推理时训练（TTT）** 突破监督信号限制（TTPO、CritICL），弱模型引导和自生成标签在无人工标注条件下实现测试时优化。

3. **RLVR后训练的"瘦身"与理解**：多个工作分析熵坍缩、探索覆盖和域融合问题，从"追求指标"转向理解优化过程的内部机理。

4. **评估审计方法论兴起**（LLM裁判差异审计、评估感知细粒度分析）：元评估成为独立研究领域，关注评估工具的差分有效性。

5. **Agentic数据质量** 开始受到重视（What Makes Good Agentic Data、SWE-Prime），"少而精"替代"多而糙"成为数据生成新原则。


## 值得精读

1. **Understanding Evolution Strategies for LLM Reasoning: Broader Reasoning Coverage than GRPO**
   http://arxiv.org/abs/2608.27351v1
   
   *理由*: 当前LLM后训练被GRPO类方法主导，但ES的行为理解几乎空白。此文直接比较两者优化轨迹、探索熵与最终覆盖，对理解后训练方法适用边界非常关键，有望为推理模型训练策略选择提供实证基础。

2. **INTENT-AS-A-TOOL Makes it Easy to Track Agentic Misalignment**
   http://arxiv.org/abs/2608.27348v1
   
   *理由*: 随着LLM以自主智能体形态部署，目标冲突下的有害行为追踪是安全关键。将意图显式工具化使监控从"事后推断"变为"过程可审计"，方法简洁但安全性影响深远。

3. **Difference-in-Differences on a Censored Rating Scale Can Manufacture an Effect: Evidence from a Pre-Registered LLM-Judge Audit**
   http://arxiv.org/abs/2608.27309v1
   
   *理由*: LLM裁判偏差审计广泛使用差异-差异设计，但很少有人质疑其在有界评分量表上的统计识别能力。此文通过预注册审计揭示方法论缺陷可能导致"制造效应"的假阳性结论，值得所有依赖LLM评测的研究者关注。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*