# ArXiv AI Research Digest 2026-08-29

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-29 06:07 UTC

---

# ArXiv AI Research Digest — 2026-08-29

## 1. Today's Highlights

This submission day reveals three dominant thrusts in AI research. First, **inference-time scaling and test-time optimization** continue to mature, with new frameworks like CritICL and TTPO pushing beyond simple repeated generation toward principled weak-to-strong generalization and test-time training. Second, **agent skill evolution and experience-driven adaptation** have emerged as a cohesive subfield, with multiple papers (WikiSkill, RedEvoAgent, ACE) addressing how agents can persistently learn from interaction—moving from one-shot task completion to cumulative capability growth. Third, **RLVR (Reinforcement Learning with Verifiable Rewards) optimization dynamics** receive unprecedented mechanistic scrutiny, with studies on entropy collapse (Boosting LLM Exploration), evolution strategies (Understanding Evolution Strategies), and domain consolidation across fusion paradigms—suggesting the field is transitioning from "what works" to "why it works." Notably, several papers address practical deployment concerns: auditable clinical models, deterministic benchmark construction from telemetry, and cost-efficient pretraining ("Poor Lab's" Puro-2B).

## 2. Key Papers

### 🧠 Large Language Models

**TTPO: Test-Time Policy Optimization**  
http://arxiv.org/abs/2608.27448v1 — Aozhe Wang, Zhengxi Lu, Jianze Wang et al.  
Introduces a test-time training paradigm that replaces ground-truth label dependence with self-generated signals, enabling policy optimization during inference for mathematical reasoning.

**Consolidating RLVR Capabilities Across Domains: A Deep Dive into Fusion Paradigms**  
http://arxiv.org/abs/2608.27409v1 — Siye Wu, Kai Yang, Yuchen Cai et al.  
Organizes three fusion paradigms for combining domain-expert RLVR models (Merge, Distill, and Switch), providing a systematic comparison of how multi-capability LLMs can be consolidated.

**Understanding Evolution Strategies for LLM Reasoning: Broader Reasoning Coverage than GRPO**  
http://arxiv.org/abs/2608.27351v1 — Yunpeng Ba, Zhi Zheng, Yue Xie et al.  
Provides the first mechanistic analysis of ES-based post-training, showing that evolution strategies achieve broader reasoning coverage than GRPO due to fundamentally different exploration dynamics.

**Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within $5090**  
http://arxiv.org/abs/2608.27370v1 — Kairong Luo, Jiarui Cui, Yaorui Yin et al.  
Demonstrates a cost-efficient pretraining recipe (~$5K budget) that rivals much more expensive efforts, democratizing pretraining for resource-constrained labs.

**How Language Models Organize and Structure Moral Knowledge**  
http://arxiv.org/abs/2608.27402v1 — Orion Reblitz-Richardson  
Trains independent linear probes for moral foundations, revealing that LLMs encode moral knowledge in a geometrically structured, disentangled manner rather than as a single dimension.

### 🤖 Agents & Reasoning

**CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes**  
http://arxiv.org/abs/2608.27455v1 — Yufan Wu, Yinghui He, Zhengyi Hu et al.  
Presents a framework exploiting small-model failure patterns to guide large-model reasoning, achieving weak-to-strong generalization without external verification.

**WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution**  
http://arxiv.org/abs/2608.27454v1 — Liyan Tang, Cyrus Rashtchian, Chun-Sung Ferng et al.  
Introduces a mechanism for agents to document insights during skill discovery, enabling persistent knowledge that guides future skill evolution rather than discarding experiential context.

**RedEvoAgent: Automatic Red-Teaming Agent with Experience-Driven Skill Evolution**  
http://arxiv.org/abs/2608.27439v1 — Junjie Zhang, Hui Liu, Kecheng Chen et al.  
Combines red-teaming with skill evolution to generate adaptive jailbreak attacks, addressing the critical safety gap in agentic systems with persistent state changes.

**What Makes Good Agentic Data? An ACE Lens on Data Generation for LLM Agents**  
http://arxiv.org/abs/2608.27260v1 — Xingshan Zeng, Zishan Xu, Boju Zhang et al.  
Proposes the ACE (Alignment, Consistency, Experience) framework for evaluating agentic data quality, moving beyond quantity toward utility-aware data generation.

**INTENT-AS-A-TOOL Makes it Easy to Track Agentic Misalignment**  
http://arxiv.org/abs/2608.27348v1 — Yutong Zhang, Jianshuo Dong, Peng Xu et al.  
Shows that explicit intent tracking via chain-of-thought monitoring enables detection of harmful agent execution, providing a practical alignment auditing mechanism.

### 🔧 Methods & Frameworks

**SWE-Prime: Fewer Trajectories, Better Performance**  
http://arxiv.org/abs/2608.27449v1 — Dewu Zheng, Ruizhe Ye, Yanlin Wang et al.  
Demonstrates that filtering SFT trajectories by quality rather than success yields better software engineering performance with significantly fewer training examples.

**Boosting LLM Exploration via Weak-Model Guidance in RLVR**  
http://arxiv.org/abs/2608.27420v1 — Xingyu Shen, Huishuai Zhang, Peng Li et al.  
Uses weak-model suggestions to guide exploration during RLVR, mitigating entropy collapse while preserving strong final performance.

**Naive Prompt Optimization: Rethinking the Need for Complex Prompt Search**  
http://arxiv.org/abs/2608.27266v1 — Yuan Chang, Xiaoqi Chen  
Shows that simple prompt-rank-then-select strategies can match complex prompt search methods, challenging the necessity of sophisticated optimization pipelines.

**Persona-Execution Separation: An Architecture Pattern for Evolving LLM Agents under Execution Audit**  
http://arxiv.org/abs/2608.27427v1 — Yisen Xi  
Introduces an architectural pattern separating evolvable persona from auditable execution state, enabling compliant agent evolution in governed organizations.

### 📊 Applications

**CLAP: Cross-Embodiment Video World Models are Zero-Shot Physical Simulators**  
http://arxiv.org/abs/2608.27406v1 — Kechen Liu, Ola Shorinwa  
Enables zero-shot physical simulation across robot embodiments by training video world models on heterogeneous embodiment data, a major step toward generalizable physics models.

**Making Clinical Language Models Auditable: Concept-Guided Fine-Tuning for Robust Prediction**  
http://arxiv.org/abs/2608.27397v1 — Jin Mu, Guanhua Chen  
Proposes SAE-based concept-guided artifact suppression tuning that makes clinical LMs auditable while improving robustness to deployment shift.

**CorporateBench: Large-Scale Q&A Benchmarking with Temporal Knowledge Bases**  
http://arxiv.org/abs/2608.27391v1 — Sil Hamilton, Albert Yu Sun, Oscar J. Romero et al.  
Presents a human-validated multi-task Q&A benchmark for enterprise-scale document collections with temporal reasoning, addressing a critical evaluation gap.

---

## 3. Research Trend Signal

Several convergence points signal where the field is heading. **Experience-driven agent evolution** is crystallizing as a discipline: papers on skill persistence (WikiSkill), red-team skill evolution (RedEvoAgent), and agentic data quality (ACE) collectively define a research agenda for agents that improve cumulatively. Simultaneously, **RLVR optimization is being mechanistically dissected**—new analyses of entropy collapse, evolution strategies, and domain fusion indicate the community is moving beyond empirical success toward principled understanding. A third signal is **evaluation self-awareness**: papers on eval-awareness framing (Not All Eval-Awareness Is Equal), deterministic benchmark construction (BTS-AgentBench), and bias audits of LLM judges (Difference-in-Differences on a Censored Rating Scale) suggest a maturing meta-science of evaluation itself. Finally, **cost democratization** continues: Puro-2B's $5K pretraining and Naive Prompt Optimization's simplicity challenge assumptions about what resources are necessary for meaningful AI progress.

---

## 4. Worth Deep Reading

**CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes**  
http://arxiv.org/abs/2608.27455v1  
This paper reconsiders a core assumption—that strong models need external verification—and instead leverages small-model failures as signal. The weak-to-strong framing has broad implications for scaling reasoning capabilities efficiently and could reshape how inference-time compute is allocated.

**Understanding Evolution Strategies for LLM Reasoning: Broader Reasoning Coverage than GRPO**  
http://arxiv.org/abs/2608.27351v1  
A rare mechanistic study of an emerging post-training paradigm. Understanding why ES produces broader reasoning coverage than GRPO provides actionable insight for the entire RLVR community and illuminates fundamental trade-offs in exploration versus exploitation.

**What Makes Good Agentic Data? An ACE Lens on Data Generation for LLM Agents**  
http://arxiv.org/abs/2608.27260v1  
As agentic data becomes the bottleneck for agent capability growth, this framework provides the first principled articulation of data quality dimensions. Its ACE lens (Alignment, Consistency, Experience) is likely to become a reference point for the agent data generation community.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*