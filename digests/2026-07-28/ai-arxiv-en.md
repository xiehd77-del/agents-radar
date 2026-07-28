# ArXiv AI Research Digest 2026-07-28

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-07-28 02:39 UTC

---

Here is the structured ArXiv AI Research Digest for July 28, 2026.

---

### Structured ArXiv AI Research Digest (2026-07-28)

#### 1. Today's Highlights

Today’s papers reveal a strong pivot toward **long-horizon and multi-step agency**, with significant work on agent authorization, memory management (KV-cache as memory), and structured planning in spreadsheets and routing problems. A second major trend is the **formalization and verification of AI outputs**, ranging from formally verified hardware code to symbolic verification of physics claims and security evaluations of LLM-generated code. Finally, the **challenge of evaluation** is a recurring theme, with papers critiquing the validity of flow surrogates for physics, proposing benchmarks for tool-use agents, and examining the illusory security of LLM-generated authentication code.

#### 2. Key Papers

##### 🧠 Large Language Models (architecture, training, alignment, evaluation)

- **Zing: Social Mind for LLMs**
  Link: http://arxiv.org/abs/2607.23740v1
  Authors: Zing Team et al.
  *Presents an integrated framework for endowing LLMs with social intelligence, including mental state inference and norm reasoning, crucial for long-term human interaction.*

- **Language Shapes Instruction Hierarchy Compliance in Multilingual LLMs**
  Link: http://arxiv.org/abs/2607.23545v1
  Authors: Jiwon Moon et al.
  *Demonstrates that LLM compliance with instruction hierarchies varies significantly by language, exposing a critical safety gap in multilingual deployment.*

- **EmoTrace: An Emotion Trajectory-Centered Framework for Psychological Support Dialogue Generation**
  Link: http://arxiv.org/abs/2607.23648v1
  Authors: Kaitong Weng et al.
  *Introduces a novel framework for psychological support dialogue that models and follows the user's emotion trajectory, improving the quality of counseling interactions.*

- **GEMCo: A Validated, Ethically Releasable Proxy for Inaccessible Counselling Data**
  Link: http://arxiv.org/abs/2607.23621v1
  Authors: Philipp Steigerwald et al.
  *Provides a validated, human-written proxy dataset for German e-mail counseling, addressing the critical data scarcity problem in sensitive domains like mental health.*

##### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

- **E-Bench: Benchmarking Multi-Step Tool-Use Agents in Real-World Product Scenarios**
  Link: http://arxiv.org/abs/2607.23722v1
  Authors: Weihuang Zheng et al.
  *Proposes a new benchmark focused on multi-step tool use, where agents must gather information and commit state changes, addressing key limitations of existing tool-use evaluations.*

- **Are You Still the Agent I Authorized? Earned Authority under a Fixed Ceiling for Evolving Agents**
  Link: http://arxiv.org/abs/2607.23586v1
  Authors: Zhaoxi Zhang et al.
  *Tackles the novel problem of authorization for long-lived AI agents that evolve post-deployment, proposing a framework for managing "earned authority" as agents acquire new skills.*

- **Compute Globally, Materialize Locally: The Memory Contract of Sparse Event-KV**
  Link: http://arxiv.org/abs/2607.23693v1
  Authors: Zefeng Cai et al.
  *Challenges a core assumption of KV-cache-based memory for long-horizon agents by testing whether retained events remain informative after subsequent observations that modify their context.*

- **Plans Work in Mysterious Ways: Evaluating a Plan Mode for Spreadsheet Agents**
  Link: http://arxiv.org/abs/2607.23670v1
  Authors: Aayush Kumar et al.
  *Empirically evaluates the effectiveness of "Plan Modes" in spreadsheet agent environments, finding that transparency benefits may not translate directly to end-user programming tasks.*

- **Focus Is All You Need: Adaptive Goal-aware Attention Orchestration for Multi-Agent Graph Systems**
  Link: http://arxiv.org/abs/2607.23678v1
  Authors: Mingzhou Fan et al.
  *Addresses the challenge of information flow in LLM-based multi-agent graph systems by introducing an adaptive attention orchestration mechanism that aligns agent focus with the overarching goal.*

##### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

- **The Illusion of Secure LLM Code: Closing the Security Gap via Iterative Reprompting**
  Link: http://arxiv.org/abs/2607.23710v1
  Authors: Ishpuneet Singh et al.
  *Evaluates authentication code from five leading LLMs, revealing significant security flaws that are only partially mitigated by iterative reprompting, highlighting the gap between perceived and actual security.*

- **SpecAHD: Localize to Specialize for Automated Heuristic Design in Large-Scale Routing Problems**
  Link: http://arxiv.org/abs/2607.23676v1
  Authors: Kezhao Lai et al.
  *Improves LLM-based automated heuristic design for large routing problems by focusing on localized problem reconstruction, showing that repair regions within a single solution can have different optimal strategies.*

- **DualityCert: Verifier-Gated Language-Model Repair of Broken Duality Claims in Quantum Field Theory**
  Link: http://arxiv.org/abs/2607.23614v1
  Authors: Xingyang Yu
  *Introduces a novel symbolic verifier for Seiberg duality in quantum field theory, using verifier-gated LLM repair to fix broken claims, demonstrating a powerful synergy between LLMs and formal methods.*

- **Formally Verified Synthesizable Floating-Point Data Types in ARCH HDL**
  Link: http://arxiv.org/abs/2607.23715v1
  Authors: Shuqing Zhao
  *Presents end-to-end formally verified FP32 and BF16 arithmetic for an LLM-friendly hardware description language, a critical step toward trustworthy AI-generated hardware.*

##### 📊 Applications (domain-specific, multimodal, code generation)

- **The Intruder Threshold: A Spectral Law for LoRA Fine-Tuning**
  Link: http://arxiv.org/abs/2607.23711v1
  Authors: Peng Xie
  *Provides a theoretical foundation for "intruder dimensions" in LoRA fine-tuning, predicting the spectral emergence of features that drive catastrophic forgetting, enabling safer model adaptation.*

- **Offline-to-Online Creative Optimization with Generative Models and Adaptive Testing**
  Link: http://arxiv.org/abs/2607.23696v1
  Authors: Kevin Lee et al.
  *Tackles the "evaluation bottleneck" in ad creative optimization by using historical A/B test data to guide generative models, creating a practical offline-to-online pipeline.*

- **CALMRec: Causally Aligned Language Memory for Long-Horizon Recommendation**
  Link: http://arxiv.org/abs/2607.23647v1
  Authors: Gengyu Zhan
  *Addresses feedback loops in LLM-based recommenders by separating user preferences into enduring, transient, and exposure-induced components, improving recommendation robustness and long-term performance.*

#### 3. Research Trend Signal

A clear emerging direction is **post-deployment adaptation and authorization**. Papers like *"Are You Still the Agent I Authorized?"* and *"Compute Globally, Materialize Locally"* signal that the field is moving beyond initial training and one-shot inference to grapple with the challenges of agents that learn, evolve, and operate over long time horizons. This shift creates new problems related to **memory validity**, **permission creep**, and **identity** that were not present in static models. This is complemented by a surge in **formal verification for high-stakes AI outputs**—from hardware (ARCh HDL) to physics (DualityCert) and software security (The Illusion of Secure LLM Code)—indicating that the community is actively seeking methods to provide guarantees for otherwise opaque generative processes.

#### 4. Worth Deep Reading

The following three papers are most recommended for full reading due to their high potential impact on future research:

1.  **Are You Still the Agent I Authorized? Earned Authority under a Fixed Ceiling for Evolving Agents** (http://arxiv.org/abs/2607.23586v1): This paper identifies a fundamental and largely unaddressed security problem for long-lived AI agents. Its framework for "earned authority" will likely become essential for anyone building deployable, evolving agent systems.

2.  **Compute Globally, Materialize Locally: The Memory Contract of Sparse Event-KV** (http://arxiv.org/abs/2607.23693v1): This paper directly tests a core assumption of KV-cache-based memory systems. It has the potential to reshape how we design memory and retrieval for long-horizon agents, moving beyond simple eviction policies to more context-aware mechanisms.

3.  **The Intruder Threshold: A Spectral Law for LoRA Fine-Tuning** (http://arxiv.org/abs/2607.23711v1): This paper provides a long-awaited theoretical explanation for a known empirical phenomenon. Understanding the "intruder threshold" offers a principled way to predict and mitigate catastrophic forgetting during parameter-efficient fine-tuning, which is the dominant method for adapting LLMs today.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*