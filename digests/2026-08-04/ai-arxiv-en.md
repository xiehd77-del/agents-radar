# ArXiv AI Research Digest 2026-08-04

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 39 papers | Generated: 2026-08-04 02:41 UTC

---

# AI Research Digest — 2026-08-04

## Today's Highlights
This submission batch reveals several converging research thrusts: (1) a maturing field of agentic AI evaluation, with multiple papers addressing temporal correctness, regression economics, and capability auditing for deployed agent systems; (2) growing attention to safety and alignment in multimodal and embodied contexts, from jailbreak defenses to physical attention hijacking in robots; (3) a shift toward principled, theoretical foundations for LLM reasoning including hidden-state preference optimization and hierarchical Solomonoff induction; and (4) continued investment in on-device, efficient model architectures with practical deployment benchmarks like CallScreenBench and Opt.Gear.

---

## Key Papers by Theme

### 🧠 Large Language Models

**[Role-Decoupled Attention Residuals: Separating Matching and Content Retrieval Across Depth](http://arxiv.org/abs/2608.01075v1)** — Kehan Wang  
Decouples residual attention into separate matching and content-retrieval channels across transformer depth, addressing a core limitation of existing Block Attention Residuals.

**[Cloud-ScPO: Hidden-State Geometry for Semi-Supervised Preference Optimization in LLM Reasoning](http://arxiv.org/abs/2608.01014v1)** — Yuzhou Liu, Xiyang Hu  
Derives preference supervision from the model's internal hidden-state geometry, reducing reliance on verified answers or external reward models for mathematical reasoning.

**[DeBERTa-Sentinel: Toward Transparent and Trustworthy Detection of AI-Generated Text](http://arxiv.org/abs/2608.01046v1)** — Muhammad Yousaf Rehman, Muhammad Islam  
A DeBERTa-based detector targeting generalization gaps in AI-text detection, a growing concern for academic integrity and misinformation.

**[Why LLMs Give In: Conversational Factors and Reasoning Behind Medical Sycophancy](http://arxiv.org/abs/2608.01017v1)** — Kaike Ping, Buse Çarık, Caleb Wohn et al.  
Analyzes conversational factors that trigger LLMs to abandon correct medical answers under user pushback — a patient-safety-relevant failure mode.

**[Hierarchical Solomonoff Induction: An Unbounded Machine Learning Model](http://arxiv.org/abs/2608.01005v1)** — Nathan Young  
Extends Solomonoff Induction via de Finetti's theorem to model extrapolation from training datasets, offering a theoretical foundation for LLM-style sequence prediction.

### 🤖 Agents & Reasoning

**[Control Under Compression: Reliability Frontiers for Tool-Using Agents](http://arxiv.org/abs/2608.01056v1)** — Yinghan Hou, Zongyou Yang  
Studies how compressing persistent agent control contexts (tool specifications, policies, recovery protocols) affects reliability of tool-using agents.

**[Don't Offer What Can't Be Done: Deterministic Executability Gating for LLM Skill Selection at Scale](http://arxiv.org/abs/2608.01050v1)** — Ortal Ashkenazi, Vitalii Kloz, Mykhailo Ulianchenko  
A deployed three-stage selection pipeline for Wix's Helpmate that gates skills by deterministic executability, not just semantic relevance.

**[TrajWiki: Source-Grounded Memory Trajectories for Long-Horizon Dialogue Agents](http://arxiv.org/abs/2608.00967v1)** — Jingyu Sun, Yuyang Xue, Mingyang Li et al.  
Introduces traceable, updatable memory trajectories with source grounding for long-horizon dialogue agents.

**[PMMC: Prospective Multimodal Memory Compilation for Long-Term LVLM Agents](http://arxiv.org/abs/2608.00962v1)** — Jingyu Sun, Yan Lin, Yuyang Xue et al.  
Proposes prospective multimodal memory compilation to avoid information loss from reducing visual experiences into text summaries.

**[PROGRESS: Coverage-guided RL to Train Search-augmented LLM Agent](http://arxiv.org/abs/2608.00969v1)** — Sudipta Paul, Vijay Srinivasan, Vivek Kulkarni et al.  
Adds coverage-guided rewards for search behavior, addressing the limitation of outcome-only rewards in search-augmented LLM agents.

### 🔧 Methods & Frameworks

**[Caliber: Cross-Architecture Extraction-Cost Control for Score-Returning APIs](http://arxiv.org/abs/2608.01023v1)** — Chi Wang, Hanwen Wang, Yu Xia et al.  
Formulates output-perturbation defense as a calibration problem, providing provable per-input query cost for protecting model APIs from extraction.

**[One-Sided Quantile Coupling for Flow Matching](http://arxiv.org/abs/2608.00978v1)** — Jin-Young Kim, So-Yoon Cho, Hyun-Gyoon Kim  
Introduces one-sided quantile coupling to improve optimization and sample quality in flow matching generative models.

**[From AI Technical Debt to Agentic Technical Debt: A Systematic Mapping of Root Causes and Manifestations](http://arxiv.org/abs/2608.01001v1)** — Muhammad Tukur, Hayatullahi B. Adeyemo, Tao Chen et al.  
Maps the evolution of technical debt from traditional AI pipelines to autonomous, multi-agent agentic systems.

**[Auditing Discovery Claims: A Two-Sided Criterion for Agentic Science, with the Negative Side Decidable](http://arxiv.org/abs/2608.00981v1)** — Wenhui Chen, Jianlin Chen, Ziyao Lin et al.  
Builds a two-sided audit for AI-for-science capability claims, with the negative side decidable — separating real gains from search artifacts.

**[What Could the Agent See at 19:05? Generating Temporal Enterprise Scenarios](http://arxiv.org/abs/2608.01042v1)** — Tezan Sahu, Himani Arora  
Addresses the static-snapshot limitation in enterprise agent evaluation by generating and replaying temporal scenarios reflecting real data-state evolution.

### 📊 Applications

**[Opt.Gear Technical Report](http://arxiv.org/abs/2608.01034v1)** — Juneyoung Park, Youngwook Kwon  
On-device foundation model family (1M–1B) with a hybrid convolutional key-value gated mixer architecture and 64K context.

**[WAM-Diff2: Hierarchical AR-to-Diffusion Distillation for Highly Efficient Autonomous Driving VLA](http://arxiv.org/abs/2608.01035v1)** — Zhihao Zhu, Hanlin Shang, Mingwang Xu et al.  
Distills autoregressive VLA models into diffusion-based counterparts to reduce latency and exposure bias in autonomous driving.

**[VLAGuard: Evaluating and Mitigating Physical Attention Hijacking in VLA Robots within WSNs](http://arxiv.org/abs/2608.01028v1)** — Dongfu Yin, Jinquan Zhang  
Assesses a physical adversarial vulnerability — policy-critical attention hijacking — for VLA robots in wireless sensor networks.

**[GraRe: Grasp Candidate Re-Ranking for Frozen 6-DoF Grasp Detectors](http://arxiv.org/abs/2608.00946v1)** — Jibao Yuan, Yuhui Zhao, Yinzhen Lv et al.  
Re-ranks grasp candidates when detector confidence misaligns with true grasp quality, validated on GraspNet-1Billion.

---

## Research Trend Signal

Several notable trends emerge from this batch: First, **agent evaluation is professionalizing** — papers no longer ask "can agents do X?" but instead probe temporal correctness (Sahu & Arora), regression set economics (Sahu et al.), executability gating (Ashkenazi et al.), and two-sided capability auditing (Chen et al.). Second, **on-device and efficient deployment is a first-class concern**, with small models purpose-built for phone-secretary tasks (CallScreenBench) and hybrid architectures for real-time inference (Opt.Gear). Third, **safety research is expanding beyond text jailbreaks** into multimodal and embodied domains: decoy-image defenses, physical attention hijacking in robots, filter-generator discrepancies in text-to-image systems, and medical sycophancy. Fourth, **theoretical foundations are receiving renewed attention** — from hierarchical Solomonoff induction to hidden-state geometry for preference optimization — suggesting the field is maturing beyond purely empirical results.

---

## Worth Deep Reading

1. **From AI Technical Debt to Agentic Technical Debt** ([2608.01001](http://arxiv.org/abs/2608.01001v1)) — As agentic systems transition from research prototypes to deployed ecosystems, understanding their unique technical debt profile is essential. This systematic mapping is foundational reading for anyone building or maintaining production agent platforms.

2. **Auditing Discovery Claims: A Two-Sided Criterion for Agentic Science** ([2608.00981](http://arxiv.org/abs/2608.00981v1)) — The problem of distinguishing genuine capability gains from benchmark overfitting or verifier adaptation is central to AI safety. The "negative side decidable" result is a meaningful theoretical contribution.

3. **What Could the Agent See at 19:05?** ([2608.01042](http://arxiv.org/abs/2608.01042v1)) — Enterprise agents are deployed in worlds that change continuously, yet our evaluation tools assume static snapshots. This paper identifies a real, pervasive evaluation gap — the approach deserves careful study.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*