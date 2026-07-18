# ArXiv AI Research Digest 2026-07-18

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-07-18 02:38 UTC

---

# ArXiv AI Research Digest — 2026-07-18

## Today's Highlights

Today's submissions reveal a strong pivot toward **context scaling for embodied AI**, with RoboTTT extending robot visuomotor context to 8K timesteps—three orders of magnitude beyond prior work—and DriftWorld tackling fast world modeling for robotic planning. A cluster of papers addresses **safety alignment beyond text level**, including BadWAM's discovery that world-action models can dream correct futures but act wrongly, and a probing framework showing that physically dangerous instructions can be linguistically benign. Meanwhile, **multi-agent research automation** is maturing, with AutoSynthesis for automated meta-analysis and BrainPilot for end-to-end brain discovery workflows. Notably, several papers confront **safety evaluation and bias delocalization** in both language models and reinforcement learning.

---

## Key Papers

### 🧠 Large Language Models

**1. Pretraining Data Can Be Poisoned through Computational Propaganda**
Link: http://arxiv.org/abs/2607.15267v1
Authors: Graf, Hajishirzi, Smith et al.
*Demonstrates that poisoning pretraining data through computational propaganda techniques—exploiting the heterogeneity of large-scale web corpora—can embed harmful behaviors in LMs that resist detection and mitigation.*

**2. In-Place Tokenizer Expansion for Pre-trained LLMs**
Link: http://arxiv.org/abs/2607.15232v1
Authors: Smith, Dakhran, Cabrera et al.
*Introduces a method to expand tokenizers post-pretraining without full retraining, addressing the latency and energy costs incurred when languages or domains not represented in the original corpus are added later.*

**3. Mask-Aware Policy Gradients for Diffusion Language Models**
Link: http://arxiv.org/abs/2607.15200v1
Authors: Raajesh, Shah, Klivans et al.
*Extends reinforcement learning to masked diffusion language models by deriving tractable policy gradients, overcoming the intractability of log-likelihood estimation that previously limited RL for MDLMs.*

**4. Can We Trust Item Response Theory for AI Evaluation?**
Link: http://arxiv.org/abs/2607.15190v1
Authors: Jiang, Kwon, Luo et al.
*Shows that AI benchmark data systematically departs from human testing assumptions underlying IRT models, questioning the reliability of IRT-based capability estimation and ranking for AI systems.*

**5. Long-Context Fine-Tuning with Limited VRAM**
Link: http://arxiv.org/abs/2607.15105v1
Authors: Fedosov, Sazhin, Grinenko et al.
*Combines hierarchical global attention with segment-wise backpropagation and tiered KV storage to enable long-context fine-tuning under constrained GPU memory, keeping only the active segment differentiable.*

### 🤖 Agents & Reasoning

**6. RoboTTT: Context Scaling for Robot Policies**
Link: http://arxiv.org/abs/2607.15275v1
Authors: Jiang, Chebotar, Zheng et al.
*Scales visuomotor context for robot foundation models to 8K timesteps (three orders of magnitude beyond SOTA) using test-time training, enabling long-horizon reasoning for robotic manipulation.*

**7. SearchOS-V1: Towards Robust Open-Domain Information-Seeking Agent Collaboration**
Link: http://arxiv.org/abs/2607.15257v1
Authors: Zhang, Gao, Wu et al.
*Proposes a multi-agent framework that addresses the tracking of task progress in long-horizon web search, tackling the degradation of single-agent performance as interaction histories grow.*

**8. AutoSynthesis: An Agentic System for Automated Meta-Analysis**
Link: http://arxiv.org/abs/2607.15247v1
Authors: Taherinezhad, Maier, Vitagliano et al.
*An end-to-end multi-agent system that automates quantitative evidence synthesis (meta-analysis), addressing a bottleneck in turning primary research into reliable knowledge for science and policy.*

**9. When Words Are Safe But Actions Kill: Probing Physical Danger Beyond Text Safety in Hidden-State Risk Space**
Link: http://arxiv.org/abs/2607.15218v1
Authors: Wang, Wang, Zhan et al.
*Identifies that linguistically benign instructions can become unsafe when grounded in physical world execution by embodied agents, showing this is a distinct safety problem from text-level content danger.*

### 🔧 Methods & Frameworks

**10. BadWAM: When World-Action Models Dream Right but Act Wrong**
Link: http://arxiv.org/abs/2607.15207v1
Authors: Li, Yang, Wang
*Reveals a critical failure mode in world-action models where the representation coupling action generation with world prediction can produce correct future predictions but incorrect actions, challenging safety assumptions in embodied control.*

**11. Beyond Success Rate: Cost-Aware Evaluation of Offensive and Defensive Security Agents**
Link: http://arxiv.org/abs/2607.15263v1
Authors: Kassianik, Nelson, Singer
*Proposes cost-aware evaluation metrics for security AI agents that account for reasoning steps, tool calls, and operational costs—arguing peak success rate under generous budgets is insufficient for real-world deployment.*

**12. On-Policy Delta Distillation**
Link: http://arxiv.org/abs/2607.15161v1
Authors: Heo, Hwang, Yun et al.
*Provides a principled analysis of on-policy distillation in reinforcement learning, showing it can alleviate reward model constraints through token-level supervision from a teacher while revealing fundamental properties of the approach.*

**13. SMC-ES: Automated Synthesis of Formally Verified Control Policies**
Link: http://arxiv.org/abs/2607.15003v1
Authors: Curcio, Mancini, Tronci
*Combines statistical model checking with evolutionary search to synthesize control policies that are both performant and provably safe for autonomous cyber-physical systems in safety-critical environments.*

### 📊 Applications

**14. MedFailBench: A Clinician-Built Open-Source Benchmark for Medical AI Safety Boundary Inspection**
Link: http://arxiv.org/abs/2607.15166v1
Authors: Ozkan
*A clinician-built benchmark that labels medical AI errors by severity (1–5) and safety gate type, shifting evaluation from "does the model know the answer?" to "which safety boundary failed?"*

**15. Benchmarking Multimodal Large Language Models for Scientific Visualization Literacy**
Link: http://arxiv.org/abs/2607.15176v1
Authors: Do, Ta, Wang
*Benchmarks six MLLMs on scientific visualization literacy, finding that current evaluations are overly chart-centric and provide limited evidence of understanding complex scientific visualizations.*

**16. DriftWorld: Fast World Modeling through Drifting**
Link: http://arxiv.org/abs/2607.15065v1
Authors: Lu, Chen, Ye et al.
*Introduces a diffusion-based world model that generates many rollouts quickly for robotic planning, addressing the bottleneck of expensive multistep sampling in predictive world models.*

---

## Research Trend Signal

A clear emerging trend is the **convergence of safety research across text, physical, and procedural domains**. Multiple papers today independently identify that safety failures manifest differently depending on whether the model generates text, plans physical actions, or executes multi-step procedures—and that conventional text-level safety alignment is insufficient. BadWAM shows world-action models can hallucinate correct futures while generating bad actions; the hidden-state risk space paper demonstrates linguistically safe instructions can be physically dangerous; MedFailBench shifts medical AI evaluation from correctness to safety gate failures. This suggests the field is moving toward **contextualized, multi-axis safety evaluation** that accounts for embodiment, execution cost, and operational environment rather than treating safety as a single-dimension text property. Additionally, several papers on automated research (AutoSynthesis, BrainPilot, Digital Pantheon) indicate a maturing of agentic scientific workflows, moving from proof-of-concept to systematic evaluation.

---

## Worth Deep Reading

1. **BadWAM: When World-Action Models Dream Right but Act Wrong** — This paper identifies a fundamental and previously underappreciated failure mode in a rapidly growing paradigm (world-action models for embodied control). The finding that correct future prediction can coexist with incorrect action generation has direct implications for safety in robotics, autonomous driving, and any deployment where world models serve as the basis for planning.

2. **RoboTTT: Context Scaling for Robot Policies** — The three-orders-of-magnitude extension of visuomotor context is a technical milestone. More importantly, the paper tests the limits of test-time training as a memory mechanism for robotics, addressing a core tension between long-horizon reasoning and real-time control that has constrained robot foundation models.

3. **Pretraining Data Can Be Poisoned through Computational Propaganda** — This paper raises the stakes for data curation by demonstrating that poisoning attacks can exploit the very heterogeneity and scale that define modern pretraining corpora. As web-scale data becomes the norm for frontier models, understanding these vulnerabilities is critical for both research and deployment security.

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*