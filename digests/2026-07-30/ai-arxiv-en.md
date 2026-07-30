# ArXiv AI Research Digest 2026-07-30

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-07-30 02:31 UTC

---

Okay, I will generate the structured ArXiv AI Research Digest based on the provided papers.

---

### Today’s Highlights

Today's submissions show a strong focus on the security, safety, and alignment of LLMs and their agentic extensions, with several dedicated benchmarks emerging for memory poisoning, backdoor attacks, and automatic CVE discovery. Another clear trend is the rigorous evaluation and benchmarking of LLMs in specialized domains, from scientific figure quality to financial literacy and complex trip planning. Methodologically, the community is making strides in scaling laws for non-convex optimization and cost-aware inference for agent tool use. The integration of physical world models with deep learning continues to mature, with physics-informed kernel methods and latent world models for robotics receiving significant attention.

### Key Papers

#### 🧠 Large Language Models (Architecture, Training, Alignment, Evaluation)

- **On-Policy Distillation for LLM Safety: A Routing Approach to Template-Robust Realignment** ([Link](http://arxiv.org/abs/2607.27081v1)) - *Yongjian Guo, Wanlun Ma, Lingyu Shen et al.*
  - Introduces a safety realignment method that distills robust safety behaviors from a strong LLM into a fine-tuned student model via on-policy distillation, mitigating the risk of malicious fine-tuning.

- **OptimismBench: Forecasting Bias and the Alignment Effect in Language Model Judgment** ([Link](http://arxiv.org/abs/2607.26981v1)) - *Seonglae Cho, Adriano Koshiyama*
  - Proposes a new benchmark to detect systematic directional bias (e.g., optimism) in LLM probability judgments, moving beyond simple calibration metrics to understand how alignment influences model predictions.

- **Evaluating Regional Bias in LLMs From Abstract Stereotype to Concrete Social Decision-Making** ([Link](http://arxiv.org/abs/2607.27022v1)) - *Jiayuan Di, Haoyi Yang, Yufei Luo et al.*
  - Introduces a comprehensive framework to evaluate regional bias in LLMs, connecting abstract stereotypes to concrete, consequential social decisions.

#### 🤖 Agents & Reasoning (Planning, Tool Use, Multi-Agent, Chain-of-Thought)

- **MemSecBench: Tracking Agent Memory Poisoning from Persistence to Consequence and Repair** ([Link](http://arxiv.org/abs/2607.27080v1)) - *Xuanze Chen, Xukang Xie, Wentao Fu et al.*
  - Establishes a crucial benchmark for a critical security vulnerability in LLM agents: the persistence of poisoned instructions in long-term memory and their downstream impact on agent behavior.

- **TREK: A Travel Reasoning and Evaluation Kit for LLM Agents in Complex Trip Planning** ([Link](http://arxiv.org/abs/2607.26977v1)) - *Jinhu Qi, Wentao Zhang, Siu Man Ng et al.*
  - Presents a demanding, constraint-rich benchmark for evaluating LLM agents on tool-using travel planning, where a single solution must satisfy correctness, budget, and physical feasibility.

- **Scores Are Not Decisions: Cost-Aware Stopping for Tool Acquisition in LLM Agents** ([Link](http://arxiv.org/abs/2607.27083v1)) - *Yicheng Feng, Yan Zhang, Yan Cheng et al.*
  - Tackles a fundamental challenge in agent design by proposing a cost-aware framework for deciding when to stop acquiring external tools, balancing informativeness against computational cost and privacy risk.

- **Two Calls Beat Five Agents: Evaluating Multi-Agent Pipelines Against Self-Refinement for Local Language Models** ([Link](http://arxiv.org/abs/2607.26922v1)) - *Ashish Prajapati, Om Mohite*
  - A practical study showing that for local LLMs, a simpler self-refinement strategy can outperform a complex multi-agent pipeline, challenging the current trend towards increasingly complex agent architectures.

- **AgentSnare: Learning to Delay, Divert, and Defuse Autonomous Penetration Agents** ([Link](http://arxiv.org/abs/2607.26998v1)) - *Ruoyu Wang, Heng Zhao, Renjie Wu et al.*
  - Develops a defensive LLM agent that learns to actively mislead and delay autonomous penetration testing agents by injecting deceptive observations, a novel approach to LLM-driven cyber defense.

#### 🔧 Methods & Frameworks (New Techniques, Benchmarks, Efficiency Improvements)

- **InferScale: GPU-Native KV Injection for Personalized LLM Serving** ([Link](http://arxiv.org/abs/2607.27090v1)) - *Peter Li, Prashant Pandey*
  - Proposes a system-level innovation for efficiently serving personalized LLMs by performing Key-Value (KV) cache injection directly on the GPU, significantly reducing latency and overhead for long, user-specific contexts.

- **Lottery Tickets Are Not Deployment Tickets** ([Link](http://arxiv.org/abs/2607.27031v1)) - *Bum Jun Kim*
  - Provides a critical analysis showing that the benefits of sparsification (e.g., lottery tickets) observed during training do not necessarily translate to deployment, where the model's decision logic interacts with changing input distributions.

- **GPTQ-2D: Cubic-Time Two-Sided Adaptive Rounding** ([Link](http://arxiv.org/abs/2607.27042v1)) - *Jiale Chen, Torsten Hoefler, Dan Alistarh*
  - Extends the popular GPTQ quantization method to incorporate a two-sided adaptive rounding strategy, achieving lower quantization error and complexity, a significant advancement for model compression.

- **BayesAME: Bayesian Active Model Evaluation** ([Link](http://arxiv.org/abs/2607.27023v1)) - *Paula Cordero Encinar, Taylan Cemgil, Arnaud Doucet et al.*
  - Introduces a principled active learning framework, based on Bayesian decision theory, for selecting the most informative subset of benchmark items to efficiently estimate a model's overall performance.

- **PIKS: Universal Physics-Informed Kernel Methods** ([Link](http://arxiv.org/abs/2607.27062v1)) - *Joachim Bona-Pellissier, Giacomo Meanti, Matteo Santacesaria et al.*
  - Proposes a robust and theoretically grounded alternative to Physics-Informed Neural Networks (PINNs) by formulating physics-constrained learning within kernel methods, training with convex optimization to guarantee convergence.

#### 📊 Applications (Domain-Specific, Multimodal, Code Generation)

- **Credit Cards, Confusion, Computation, and Consequences: What Can We Uncover About Language Model Reasoning?** ([Link](http://arxiv.org/abs/2607.26952v1)) - *Arnav Hiray, Agam Shah, Caleb Lu et al.*
  - Introduces CreditCardQA, a new financial literacy benchmark derived from real credit card agreements, designed to test LLM numerical reasoning on complex, real-world financial documents.

- **HoF-Bench: Rediscovering Real AI-Discovered CVEs Without Frontier Models** ([Link](http://arxiv.org/abs/2607.27030v1)) - *Petr Simecek, Elnaz Babayeva, Jiri Balhar et al.*
  - Creates a benchmark from 95 real-world CVEs discovered by AI, challenging the research community to replicate these findings with any model, thereby democratizing AI-driven vulnerability research.

### Research Trend Signal

A clear and pressing trend in today's papers is the **systematic exploration of security and safety for LLM-based agents**. The community is moving beyond simple prompt injection to studying persistent threats like memory poisoning (MemSecBench), backdoor attacks in federated learning, and the vulnerability of automated penetration testing tools (AgentSnare). Simultaneously, the focus on **cost-awareness and efficiency** for agentic systems is sharpening, with papers on tool acquisition (Scores Are Not Decisions) and GPU-native inference (InferScale) pointing toward a future where deployment constraints are as important as performance benchmarks. Finally, the proliferation of **high-quality, domain-specific benchmarks** (financial, medical, scientific figures, trip planning) signals a maturation of the field, moving from general capabilities to rigorous, verifiable application performance.

### Worth Deep Reading

1. **Lottery Tickets Are Not Deployment Tickets** ([Link](http://arxiv.org/abs/2607.27031v1))
   - This paper provides a much-needed reality check for the field of model compression. By examining model behavior under actual deployment conditions (e.g., threshold-based decision logic), it challenges the conventional wisdom that sparsified models are universally deployment-ready, making its findings critical for practitioners.

2. **MemSecBench: Tracking Agent Memory Poisoning from Persistence to Consequence and Repair** ([Link](http://arxiv.org/abs/2607.27080v1))
   - As agents with persistent memory become more common, this paper's comprehensive benchmark for memory poisoning is essential. It rigorously traces the lifecycle of an attack from insertion to long-term behavioral impact and explores potential repairs, laying the groundwork for future research in agent security.

3. **A Compositional Theory of Causally Masked Transformers** ([Link](http://arxiv.org/abs/2607.26988v1))
   - For those interested in formal understanding, this work offers a rigorous, theoretical analysis of the computational limits of finite-precision transformers. It moves beyond idealized arithmetic to explore how rounding and evaluation order affect reasoning, providing deep insights into the fundamental capabilities of modern LLMs.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*