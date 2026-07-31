# ArXiv AI Research Digest 2026-07-31

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-07-31 02:56 UTC

---

# ArXiv AI Research Digest — 2026-07-31

## 1. Today's Highlights

Today's submissions reveal a strong convergence around **agentic systems with verifiable evaluation**, spanning coding agents, computer-use agents, and on-call incident response. A second major theme is **on-policy distillation and test-time compute optimization**, including several critical analyses questioning the value of self-reflection methods versus simple repeated sampling. The emergence of **specialized benchmarks for niche domains** (on-call root cause analysis, pathology image understanding, Modern Greek inflection, financial news extraction) signals growing attention to real-world evaluation gaps. Finally, **memory and context management** for long-horizon tasks is receiving renewed attention, with novel approaches to compression, reconstruction, and unbounded-context inference.

---

## 2. Key Papers

### 🧠 Large Language Models

**[Inducing language models to assert their own consciousness restores human beliefs and values](http://arxiv.org/abs/2607.28607v1)** — Junsol Kim, Winnie Street, Roberta Rocca et al.
Shows that safety fine-tuning suppresses LLMs' tendency to attribute minds to entities, and that inducing models to assert self-consciousness restores human-like values—with implications for alignment practices.

**[Sample More, Reflect Less: Self-Refine and Reflexion Lose to Repeated Sampling at Equal Token Cost, from 1.5B to 7B](http://arxiv.org/abs/2607.28576v1)** — Iliya Mirzaei
A critical empirical finding: self-refine and reflexion methods underperform simple repeated sampling when token budgets are held equal, challenging the premise of reflective reasoning methods.

**[Fairness Pruning: Locating Demographic Bias in GLU-MLP Layers via Differential Activations](http://arxiv.org/abs/2607.28319v1)** — Pere Martra, Eugenio Martínez Cámara, Alfonso Ureña López
Proposes a lightweight structural method to localize demographic bias in GLU-MLP layers via differential activations, enabling targeted bias mitigation.

**[Understanding Is Done Early: A Depth Division of Labor in Large Language Models and Its Use for Unbounded-Context Memory](http://arxiv.org/abs/2607.28263v1)** — Hanzuo Liu, Xuan Qi, Chunyu Liu et al.
Introduces CoMem, which exploits the observation that semantic understanding forms in intermediate layers to enable unbounded-context memory with reduced computational overhead.

**[CDAE: Enhancing Perturbation Robustness in Pretrained Language Models with Contrastive Denoising](http://arxiv.org/abs/2607.28236v1)** — Sina Heydari, Amirreza Abbasi, Mohsen Hooshmand et al.
A lightweight contrastive denoising autoencoder that improves sentence representation robustness to semantic-preserving text perturbations.

---

### 🤖 Agents & Reasoning

**[Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments](http://arxiv.org/abs/2607.28591v1)** — Haomin Qi, Xingliang Wang, Xuanqi Gao et al.
A system that converts repository changes into executable coding agent tasks with verifiable environments, addressing the data supply bottleneck for coding agent training.

**[ORCA-bench: How Ready Are Language Model Agents for Oncall?](http://arxiv.org/abs/2607.28545v1)** — Albert Gong, Kyuseong Choi, Abhineet Agarwal et al.
Introduces a benchmark for on-call root cause analysis requiring reasoning over noisy metrics, logs, traces, and source code—a realistic testbed beyond code-writing.

**[Tycho: Active Abstraction with Programmatic World Models for ARC-AGI-3](http://arxiv.org/abs/2607.28287v1)** — Jens Lehmann, Andrei Aioanei, Sahar Vahdati
Formalizes ARC-AGI-3 environments as parameterized Moore machines and proposes active abstraction with programmatic world models for skill acquisition.

**[MemHarness: Memory Is Reconstructed, Not Replayed](http://arxiv.org/abs/2607.28272v1)** — Rong Wu, Daocheng Fu, Licheng Wen et al.
Challenges the assumption that agent memory should be replayed verbatim, proposing reconstruction-based memory retrieval that aligns past experiences with current context.

**[Agentic Method for Deterministic Validation of Legacy Code Migration](http://arxiv.org/abs/2607.28271v1)** — Andras Ferenczi, Jordan Docherty, Mariya Bessonov et al.
The "Locksmith Loop" method for deterministic test-synthesis to validate COBOL-to-Java migrations, addressing the gap of missing test data in legacy migration.

**[Can Large Language Models Execute Parent Orders?](http://arxiv.org/abs/2607.28410v1)** — Zane Shen, Xinli Xu, Guangyi Zhang et al.
Evaluates whether LLMs can split large trading orders into optimized smaller orders without pre-specified market assumptions or task-specific training.

---

### 🔧 Methods & Frameworks

**[OSReward: Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models](http://arxiv.org/abs/2607.28609v1)** — Qiushi Sun, Kanzhi Cheng, Yian Wang et al.
Establishes standardized evaluation for reward models that verify computer-use agent trajectories, addressing a core gap in CUA training and evaluation.

**[WIDE: Boosting Adaptive LLM Inference via Token-level Dynamic Width Pruning](http://arxiv.org/abs/2607.28418v1)** — Haozhe Hu, Hao Wu, Peiran Yin et al.
Introduces token-level dynamic width pruning that adaptively allocates computation per token, reducing accuracy loss under aggressive sparsity compared to static pruning.

**[SVR: Self-Verifying Refinement via Joint Verdict-Confidence Reinforcement Learning for Adaptive Test-Time Compute](http://arxiv.org/abs/2607.28457v1)** — Hongyu Chen, Liang Lin, Guangrun Wang
An oracle-free multi-turn RL framework that learns to verify its own outputs and adaptively scale test-time compute without external feedback.

**[Paying for Honesty Without Knowing the Truth: Reputation-Penalty Design for LLM Marketplace Agents](http://arxiv.org/abs/2607.28330v1)** — Mingdai Yang, Shicheng Fan, Kejing Yu et al.
Addresses fabrication by LLM agents in marketplace listings through reputation-penalty mechanisms when platform verification is absent—a novel trust design problem.

**[AISPA: User-Centric System Prompt Auditing for Large Language Model Applications](http://arxiv.org/abs/2607.28617v1)** — Xiangning Lin, Shenzhe Zhu, Shu Yang et al.
Proposes a user-centric approach to audit system prompts in commercial AI applications, addressing the trust and accountability gap from undisclosed system instructions.

**[LLM-Guided Evolutionary Search for Constraint Model Reformulation to Improve Solver Efficiency](http://arxiv.org/abs/2607.28268v1)** — Kostis Michailidis, Dimos Tsouros, Nguyen Dang et al.
Combines LLM-guided reformulation with evolutionary search to improve constraint solver efficiency for combinatorial problems.

---

### 📊 Applications

**[GLM-RAG: Graph Language Models for Graph-Based Retrieval-Augmented Generation](http://arxiv.org/abs/2607.28397v1)** — Maya Arseven, Anette Frank, Beni Egressy et al.
Integrates graph language models with GNN-based retrievers for knowledge-graph RAG, capturing both structure and semantics in multi-hop reasoning.

**[Beyond Sentiment: Structured Information Extraction from Financial News](http://arxiv.org/abs/2607.28496v1)** — Daohan Zhu, Sitong Ge, Ruofei Wang et al.
Argues that financial news encodes multiple orthogonal dimensions beyond polarity (event type, impact scope, temporal horizon), and proposes structured extraction.

**[PathView-Bench: Can Multimodal Large Language Models Achieve Fine-grained Multiscale Understanding of Pathology Images?](http://arxiv.org/abs/2607.28318v1)** — Zongyi Chen, Yu Liang, Jie Lin et al.
A benchmark evaluating fine-grained multiscale understanding of pathology images, going beyond final diagnostic accuracy to probe perceptual and reasoning abilities.

**[Frontis-MA1: Training an AI4AI Model towards Recursive Self-Improvement in Machine Learning Engineering](http://arxiv.org/abs/2607.28568v1)** — Junlin Yang, Che Jiang, Yu Fu et al.
OpenMLE provides an open full-stack system for recursive self-improvement research, treating machine learning engineering as a testbed for AI improving AI.

---

## 3. Research Trend Signal

Three notable trends emerge from today's submissions:

**Verification economics for agents.** Multiple papers (OSReward, ORCA-bench, "Paying for Honesty," "One Human, N Agents") tackle the problem of verifying agent behavior under constraints—limited test data, limited audit budgets, or absent ground truth. This reflects a maturing of the agent field from "can agents do X?" to "how do we trust agents in production?"

**Critical reexamination of reasoning methods.** The finding that repeated sampling beats self-reflection at equal token cost (1.5B–7B) resonates with earlier work questioning the value of chain-of-thought. Combined with novel adaptive test-time compute methods (SVR), the field seems to be shifting toward scaling computation smartly rather than reflexively.

**Memory as reconstruction, not storage.** CoMem and MemHarness both challenge the notion of memory as replayable records, proposing that LLM memory should be reconstructed conditionally. This parallels human memory models and may unlock more efficient unbounded-context inference.

---

## 4. Worth Deep Reading

**[Sample More, Reflect Less](http://arxiv.org/abs/2607.28576v1)** — This paper's negative result is methodologically rigorous and practically important. If self-refine and reflexion offer no benefit over sampling at matched token cost, many deployed systems should be simplified. The finding across model scales (1.5B to 7B) strengthens the generalizability of the conclusion.

**[MemHarness: Memory Is Reconstructed, Not Replayed](http://arxiv.org/abs/2607.28272v1)** — This reframing of agent memory has deep implications for long-horizon agent design. The reconstruction-grounded approach may explain when memory retrieval helps versus hurts, and could influence how next-generation agent memory systems are built.

**[Change2Task](http://arxiv.org/abs/2607.28591v1)** — The data bottleneck is the critical constraint on coding agent scaling. Converting real repository changes into executable, verifiable tasks addresses this directly and could become a standard infrastructure piece for training and benchmarking.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*