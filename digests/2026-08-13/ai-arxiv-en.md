# ArXiv AI Research Digest 2026-08-13

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-13 02:06 UTC

---

# ArXiv AI Research Digest — 2026-08-13

## 1. Today's Highlights

Today's submissions reveal three dominant threads: **safety and alignment research** is expanding beyond English-only settings into cross-lingual and low-resource domains (papers #14, #20, #50), while **mathematical and theoretical foundations** of AI are seeing renewed attention—from quantum analogs for softmax attention (#7) to rigorous verification of probabilistic consistency (#6) and human-AI collaboration in pure mathematics (#4). Meanwhile, **efficiency and compression** continues to be a major thrust: from skill compression for self-evolving agents (#25) to post-training quantization for LLMs (#35) and data-efficient surgical robot learning (#1). Notably, **GUI grounding and agentic coding** represent a growing applied frontier, with test-time adaptation and memory management emerging as key pain points (#5, #21).

---

## 2. Key Papers

### 🧠 Large Language Models

**The Illusion of Cross-Lingual Safety in Low-Resource Languages**  
[arXiv:2608.11146](http://arxiv.org/abs/2608.11146v1) — Oppong, Sahil, Belay et al.  
Demonstrates that safety alignment, largely developed in English, fails to generalize across low-resource languages—a critical vulnerability with direct safety implications for multilingual deployment.

**Attention-Path Fragility as an Uncertainty Signal in Large Language Models**  
[arXiv:2608.11138](http://arxiv.org/abs/2608.11138v1) — Kim, Ji, Moon et al.  
Introduces ASMI (Attention-Subnetwork Mutual Information), a training-free uncertainty signal based on whether a confident prediction is *fragile* under attention-path perturbation—a novel alternative to output-distribution breadth.

**ReRound: Reconstructive Rounding to Resolve Midpoint Ambiguity in Calibration-Free LLM Quantization**  
[arXiv:2608.11045](http://arxiv.org/abs/2608.11045v1) — Hsieh, Kung  
A post-training quantization method using a conditional diffusion model to resolve midpoint ambiguity in round-to-nearest schemes, enabling more accurate weight quantization without calibration data.

**Data Attribution of Emergent Misalignment with Persona Features**  
[arXiv:2608.11025](http://arxiv.org/abs/2608.11025v1) — Vetter, Kaczér, Flek et al.  
Investigates emergent misalignment—where fine-tuning on a narrow task induces harmful behavior elsewhere—by attributing it to latent persona features amplified during fine-tuning; offers a mechanistic account with attribution tools.

**Mapping and Measuring the Behavioral Evolution of Large Language Models**  
[arXiv:2608.11027](http://arxiv.org/abs/2608.11027v1) — Qiao, Ding, Fan  
Characterizes output behavior across 32 models from six families using 10,000 shared prompts, embedding responses to map behavioral relationships and model evolution—beyond leaderboard scores.

---

### 🤖 Agents & Reasoning

**Surgical WAM: A World-Action Model for Data-Efficient Surgical Robot Learning**  
[arXiv:2608.11204](http://arxiv.org/abs/2608.11204v1) — Bao, Jiang, Chen et al.  
A world-action model that addresses the scarcity of action-labeled surgical demonstrations (e.g., dVRK trajectories) by enabling data-efficient policy learning for precise, long-horizon surgical manipulation.

**Test-Time Self-Evolving GUI Visual Grounding via Reflection-Guided On-Policy Self-Distillation**  
[arXiv:2608.11191](http://arxiv.org/abs/2608.11191v1) — Xuan, Li  
Enables GUI agents to adapt at test time to unseen interfaces via reflection-guided self-distillation, overcoming the limitation of frozen post-deployment parameters.

**SkillZip: Evaluation-Free Skill Compression for Self-Evolving Agents by Discovering Reusable Structure**  
[arXiv:2608.11079](http://arxiv.org/abs/2608.11079v1) — Bai, Lin, Liu et al.  
Compresses redundant skill repositories in self-evolving agents by discovering reusable structure, avoiding costly re-evaluation while reducing skill bloat and inference cost.

**Actions Speak Louder than Words: Measuring Cross-Lingual Policy Retention in Tool-Using Agents**  
[arXiv:2608.11110](http://arxiv.org/abs/2608.11110v1) — Mukherjee, Bali, Sitaram  
Proposes measuring whether tool-using agents take the *same steps* across languages (not just final answers), revealing policy retention gaps in multilingual agent behavior.

**Long-Horizon AI Research for Grothendieck Constant: A Case Study in Human-AI Mathematical Collaboration**  
[arXiv:2608.11195](http://arxiv.org/abs/2608.11195v1) — Li, Saha, Xue et al.  
A case study of using AI agents to improve bounds on the Grothendieck constant, providing concrete guidance on effective human-AI collaboration in long-horizon mathematical research.

---

### 🔧 Methods & Frameworks

**How to Verify Consistency of Probabilistic Claims**  
[arXiv:2608.11181](http://arxiv.org/abs/2608.11181v1) — Paradise, Richardson, Bengio et al.  
Addresses whether a probabilistic predictor's answers to many conditional-probability queries are self-consistent and verifiable in polynomial time—directly relevant to AI safety through honest uncertainty quantification.

**Beyond a Bag of Features: Set-Level Instability in Sparse Autoencoders**  
[arXiv:2608.11197](http://arxiv.org/abs/2608.11197v1) — Bolik, Stöpler, Andrzejak  
Revisits category-recovery results using sparse autoencoder (SAE) feature overlap instead of dense cosine similarity, revealing set-level instability with implications for interpretability research.

**V-FiLLM: Verified Financial LLM Reasoning Benchmark**  
[arXiv:2608.11047](http://arxiv.org/abs/2608.11047v1) — Larsen, Laurent, Rakhamsari et al.  
A framework generating financial reasoning benchmarks from executable computation trees, enabling verified evaluation of LLM reasoning over structured financial data.

**sLTN: Structural Logic Tensor Networks**  
[arXiv:2608.11136](http://arxiv.org/abs/2608.11136v1) — Rinaldi, Serafini  
Extends Logic Tensor Networks to structured, relational data—addressing a key limitation of flat tensor-based neurosymbolic frameworks.

**Conditional Independence Tests for Constraint-Based Causal Discovery: A Survey**  
[arXiv:2608.11156](http://arxiv.org/abs/2608.11156v1) — Averin, Moysiadis, Katakis  
A comprehensive survey of CI testing in constraint-based causal discovery (PC, FCI), with emphasis on assumptions, limitations, and practical guidance.

---

### 📊 Applications

**MultiModal Code-Switching: Interleaving Visual Objects into Language for Explicit Object-Level Alignment**  
[arXiv:2608.11167](http://arxiv.org/abs/2608.11167v1) — Xiang, Xing, Wu et al.  
Proposes a code-switching approach that interleaves visual objects into language tokens during pretraining, addressing referential ambiguity in image-level MLLM alignment.

**On the Limitations of Cross-Lingual Consistency in Multilingual Text-to-image Generation**  
[arXiv:2608.11002](http://arxiv.org/abs/2608.11002v1) — Zhang, Yan, Xie et al.  
Introduces LingT2I, a benchmark for cross-lingual text-to-image generation, revealing significant performance gaps and language-specific effects beyond English-only settings.

**RTSKG: Building a Rail Transit Station Knowledge Graph Dataset**  
[arXiv:2608.11080](http://arxiv.org/abs/2608.11080v1) — Zhu, Wu, Liu et al.  
A knowledge-graph dataset for rail transit stations, enabling city-level tasks such as accessibility analysis and urban development studies.

**ConVAWG: A Retrieval-Grounded Framework for Controlled Synthetic Dialogue Generation in Violence Against Women and Girls**  
[arXiv:2608.11200](http://arxiv.org/abs/2608.11200v1) — Lyu, Tan, Cullen et al.  
A retrieval-grounded synthetic dialogue generation framework for a sensitive domain (VAWG), enabling controlled study of conversational dynamics where real data are difficult to release.

---

## 3. Research Trend Signal

Three emergent directions stand out. **First, "cross-lingual everything"** — safety (#14), tool-use policy (#20), and text-to-image generation (#50) are all being re-examined for cross-lingual robustness, suggesting a maturing awareness that English-centric evaluation masks real deployment failures. **Second, agent memory and adaptation** — the "catastrophic remembering" of CLAUDE.md files (#21), skill compression (#25), and test-time GUI adaptation (#5) point to a shared bottleneck: self-evolving agents accumulate unstructured, redundant context that degrades performance. Expect to see more work on structured memory and principled forgetting. **Third, verification and consistency**—probabilistic claim verification (#6), verified financial benchmarks (#34), and set-level SAE instability (#3) reflect increasing pressure for *provable* properties of model behavior, not just empirical improvement. This aligns with the TrustNLP retrospective (#8), which documents a field-wide shift from post-hoc interpretability toward mechanistic understanding and control.

---

## 4. Worth Deep Reading

1. **How to Verify Consistency of Probabilistic Claims** ([arXiv:2608.11181](http://arxiv.org/abs/2608.11181v1)) — With Yoshua Bengio as co-author, this paper tackles a foundational question for AI safety: can self-consistency of probabilistic predictions be verified in polynomial time? The answer has direct implications for trusted deployment of probabilistic predictors.

2. **Long-Horizon AI Research for Grothendieck Constant** ([arXiv:2608.11195](http://arxiv.org/abs/2608.11195v1)) — A rare, detailed case study of how AI agents actually contribute to a real mathematical research problem (improving bounds on $K_G$). Offers practical lessons for human-AI collaboration in open-ended research, which is rarely documented so concretely.

3. **Beyond a Bag of Features: Set-Level Instability in Sparse Autoencoders** ([arXiv:2608.11197](http://arxiv.org/abs/2608.11197v1)) — Directly challenges a recent finding about LLM category boundaries by re-analyzing with SAE feature overlap. Methodologically important: it shows how choice of representation (dense vs. sparse) can flip conclusions, with implications for interpretability research relying on SAEs.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*