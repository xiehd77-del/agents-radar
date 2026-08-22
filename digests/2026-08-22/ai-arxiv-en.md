# ArXiv AI Research Digest 2026-08-22

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-22 01:17 UTC

---

# ArXiv AI Research Digest — 2026-08-22

## 1. Today's Highlights

Today's submissions show a pronounced shift toward **evaluation of agentic and self-improving systems**: three papers (AI4AI-Bench, Phantom Gains, and Task-CoEvolve) examine recursive self-improvement, auditing gains against statistical nulls, and harness-level optimization without weight updates. A second major theme is **memory and knowledge internalization** — from cache eviction policies (CLEVER) and cognitive traps in memory use (MemTrapBench) to retrieval-free document internalization via staged post-training. A third visible thread is **legal/domain-specific benchmarks** (InsufficiencyBench, ContractScrub, OenoBench, FormalTCS) that probe LLM performance under realistic, underspecified, or expert-level conditions. Finally, several papers tackle **efficiency-first design** — including a 150M-parameter hybrid model built specifically for CPU inference and adaptive test-time compute allocation.

---

## 2. Key Papers

### 🧠 Large Language Models

**AI4AI-Bench: Benchmarking LLM Agents in Algorithmic Design for Recursive Self-Improvement**  
[arxiv.org/abs/2608.20318v1](http://arxiv.org/abs/2608.20318v1) — Yizhe Chi, Wenyi Li, Deyao Hong et al.  
*First benchmark targeting recursive self-improvement of training algorithms themselves, probing whether LLMs can improve the compute-capability exchange rate.*

**Phantom Gains: Auditing Self-Improvement Against a Measured Null**  
[arxiv.org/abs/2608.20290v1](http://arxiv.org/abs/2608.20290v1) — Cheng Xu, Nan Yan, Liming Chen et al.  
*Identifies measurement artifacts in self-improvement claims by auditing LoRA rounds against a statistical null model — a cautionary and rigorous lens on transition-level accuracy gains.*

**InsufficiencyBench: Evaluating LLM legal advice on underspecified user queries**  
[arxiv.org/abs/2608.20220v1](http://arxiv.org/abs/2608.20220v1) — Samuel J. Vincent, Daniel Calloway, Fangyi Yu et al.  
*First legal benchmark targeting query-side insufficiency, revealing that state-of-the-art LLMs give overconfident answers to under-specified legal questions.*

**When Text and Numbers Disagree: Evidence Arbitration in Large Language Models**  
[arxiv.org/abs/2608.20116v1](http://arxiv.org/abs/2608.20116v1) — Mattia Carletti, Edward Phillips, Fredrik K. Gustafsson et al.  
*Controlled synthetic study of how LLMs adjudicate conflicts between textual summaries and numerical observations — important for tool-augmented and agentic deployments.*

### 🤖 Agents & Reasoning

**Inducing Task Models from Computer-Use Traces**  
[arxiv.org/abs/2608.20319v1](http://arxiv.org/abs/2608.20319v1) — Yucheng Jiang, Zora Zhiruo Wang, Ruishi Chen et al.  
*Derives symbolic, auditable task models from passive computer-use traces — a path to reusable procedural knowledge for computer-use agents.*

**Break It Down, Pass It On: Cross-Task Skill Transfer in LLM Agents**  
[arxiv.org/abs/2608.20274v1](http://arxiv.org/abs/2608.20274v1) — Yiyang Feng, Biddut Sarker Bijoy, Niranjan Balasubramanian et al.  
*Characterizes when agent-induced skills transfer reliably versus when they harm downstream performance — fills a critical gap in skill-reuse literature.*

**Which Eviction Policy Should an LLM Cache Use? A Systematic Study Across Workloads, Capacities, and Encoders**  
[arxiv.org/abs/2608.20280v1](http://arxiv.org/abs/2608.20280v1) — Yash Kulkarni, Shubham Harkare, Arvind Suresh Yogesh Babu et al.  
*First systematic comparison of semantic cache eviction policies under a unified protocol — practical guidance for LLM serving infrastructure.*

**Task-CoEvolve: Efficient Harness Optimization via Adaptive Validation Task Selection**  
[arxiv.org/abs/2608.20169v1](http://arxiv.org/abs/2608.20169v1) — Atsuyuki Miyai, Kiyoharu Aizawa, Toshihiko Yamasaki et al.  
*Rewrites agent harness code based on adaptive validation task selection, achieving performance gains without updating model weights.*

### 🔧 Methods & Frameworks

**Inject, Align, Recover: Staged Post-Training for Retrieval-Free Document Knowledge Internalization**  
[arxiv.org/abs/2608.20281v1](http://arxiv.org/abs/2608.20281v1) — Qian Kou, Xiaofeng Shi, Xiaosong Qiu et al.  
*Three-stage post-training approach that converts a fixed corpus into parametrically stored knowledge for retrieval-free QA — a path toward eliminating retrieval infrastructure.*

**Learning When to Think: Adaptive Reasoning for Test-Time Compute Allocation**  
[arxiv.org/abs/2608.20256v1](http://arxiv.org/abs/2608.20256v1) — Gijs Kassenaar, Zhao Yang, Vincent François-Lavet et al.  
*Models learn to allocate their own test-time compute adaptively, reducing over-computation on easy problems and under-computation on hard ones.*

**Pandora's AI Model Routing Box: Efficient Allocation with Costly Value Estimation**  
[arxiv.org/abs/2608.20316v1](http://arxiv.org/abs/2608.20316v1) — Adam Fisch, Shubhendu Trivedi, Fantine Huot et al.  
*Formalizes cost-aware routing across heterogeneous AI systems when estimating specialist value is expensive — with practical implications for model-marketplace efficiency.*

**MidTool: Mid-training Data Synthesis for Agentic Tool Use**  
[arxiv.org/abs/2608.20314v1](http://arxiv.org/abs/2608.20314v1) — Fengqing Jiang, Yite Wang, Boyi Liu et al.  
*Targeted synthetic mid-training data that strengthens agentic tool-use capabilities — a new axis for capability shaping between pretraining and fine-tuning.*

**Concise: DARS — Dual-Level Credit Assignment RL with Structured Reasoning for Instruction-Based Image Editing**  
[arxiv.org/abs/2608.20161v1](http://arxiv.org/abs/2608.20161v1) — Haoxiang Cao, Jiajiong Cao, Xuanpu Zhang et al.  
*Dual-level credit assignment makes planner-renderer image editing training far more sample-efficient than final-image-only rewards.*

### 📊 Applications & Evaluation

**ContractScrub: A benchmark for final review of legal contracts**  
[arxiv.org/abs/2608.20204v1](http://arxiv.org/abs/2608.20204v1) — Yejin Bang, Kirsty Fielding, Brandan Oliver et al.  
*Benchmark for error and inconsistency detection in final-contract review — a targeted, real-world legal task where LLMs show promise but need systematic evaluation.*

**FormalTCS: Benchmarking End-to-End Frontier Formal Theoretical Computer Science Research of Large Language Models**  
[arxiv.org/abs/2608.20153v1](http://arxiv.org/abs/2608.20153v1) — Dingzirui Wang, Xuanliang Zhang, Keyan Xu et al.  
*Expert-validated benchmark pushing LLMs to conduct realistic, end-to-end TCS research — beyond puzzle-style problems toward frontier research settings.*

**OenoBench: A Wine-Domain Benchmark for Knowledge-Grounded Evaluation of Large Language Models**  
[arxiv.org/abs/2608.20106v1](http://arxiv.org/abs/2608.20106v1) — Nikita Khudov  
*3,266 multiple-choice questions built from 38,104 source-anchored facts across six wine-domain pillars — a template for provenance-aware knowledge evaluation.*

---

## 3. Research Trend Signal

The strongest signal in today's batch is the **empirical problematization of self-improvement and agentic growth claims**. Phantom Gains and AI4AI-Bench attack the same question from opposite directions — statistical rigor against inflated progress, and a benchmark for verifiable algorithmic improvement. Expect a wave of work attempting to establish *measurable*, *reproducible* standards for capability growth in agentic systems.

A second trend is **benchmark design moving from task-level accuracy toward interaction-level realism**: InsufficiencyBench (underspecified legal queries), MemTrapBench (cognitive traps in memory use), and When Text and Numbers Disagree (evidence arbitration) all simulate situations where LLMs receive incomplete, contradictory, or internally inconsistent information. This suggests the community is shifting its evaluation emphasis from raw capability to *reliability under non-ideal input conditions*.

Third, **efficient serving infrastructure** is receiving serious attention: CLEVER cache eviction studies, Daedalus-150M for CPU inference, and adaptive test-time compute allocation collectively signal that inference cost — not just accuracy — is becoming a first-class citizen in LLM research.

---

## 4. Worth Deep Reading

**Phantom Gains** ([arxiv.org/abs/2608.20290v1](http://arxiv.org/abs/2608.20290v1)) — This paper could recalibrate how the entire field measures self-improvement. If transition-level accuracy differencing is vulnerable to the measurement artifacts described here, many published "improvements" from LoRA rounds and iterative fine-tuning need re-auditing. Methodologically careful, high-impact.

**AI4AI-Bench** ([arxiv.org/abs/2608.20318v1](http://arxiv.org/abs/2608.20318v1)) — The recursive self-improvement problem is often discussed abstractly; this work makes it concrete and measurable by targeting the training algorithm itself. A foundational benchmark that could define the next phase of AI self-optimization research.

**Pandora's AI Model Routing Box** ([arxiv.org/abs/2608.20316v1](http://arxiv.org/abs/2608.20316v1)) — As inference costs spread across heterogeneous model families, cost-aware routing becomes a critical economic layer. This paper formalizes the problem with value-estimation costs — directly relevant to practical system deployment.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*