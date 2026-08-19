# ArXiv AI 研究日报 2026-08-19

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-19 01:19 UTC

---

# ArXiv AI 研究日报 — 2026年8月19日

## 今日速览

今日 arXiv 投稿呈现百花齐放态势：**强化学习与 LLM 结合**持续深化，出现了将 RL 应用于智能体 harness 训练（ClawGym II）、利用价值函数提升 LLM RL 效率（Le Critique）等创新工作；**机器人操作与 VLA 模型**成为热点，长程操作、全身人形控制等方向均有重要突破；**模型安全性研究**出现新视角，包括针对 LLM 的"催眠"攻击、状态语义注入等；此外，矩阵乘法指数的理论突破和可解释性框架的拓展也值得关注。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. Model Hypnosis: Strong control of AI via additive subliminal effects**
链接：http://arxiv.org/abs/2608.16834v1
作者：E. Boix-Adsera 等
一句话：揭示了提示中看似无关的微弱线索可以系统性地组合，从而强有力地控制模型行为——一种被命名为"模型催眠"的新兴安全威胁。

**2. Le Critique: Privileged Value Functions for LLM Reinforcement Learning**
链接：http://arxiv.org/abs/2608.16739v1
作者：S. Venkatraman 等
一句话：引入特权价值函数进行方差缩减，为 LLM 强化学习提供了超越 GRPO 的细粒度序列级信用分配方案。

**3. Policy Iteration with Human Feedback: Bringing Post-Training RL to In-context Learning**
链接：http://arxiv.org/abs/2608.16831v1
作者：M.-H. Nguyen, C. Shyr
一句话：提出 PIHF，将后训练 RL 的收益带入上下文学习场景，使固定模型从人类反馈中动态调整策略。

**4. Towards Computational Provenance: Carrying Causal-State Evidence in Generated Text**
链接：http://arxiv.org/abs/2608.16868v1
作者：B. Belay
一句话：探索生成文本能否携带内部因果状态的可验证证据，为 LLM 输出溯源开辟新方向。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**5. Don't Drop the BATON: Long-Horizon Robot Manipulation via Agentic Subtask Exploration and Transition-aware Memory**
链接：http://arxiv.org/abs/2608.16889v1
作者：B. Xu 等
一句话：提出智能体性子任务探索与转移感知记忆机制，解决长程机器人操作中错误累积与子任务间隐式约束问题。

**6. ClawGym II: Exploring Black-Box RL on Agent Harness**
链接：http://arxiv.org/abs/2608.16798v1
作者：H. Song 等
一句话：首次系统性地探索在复杂智能体 harness 上进行黑盒强化学习训练的方法与挑战。

**7. HAF: Adapting Generalist VLAs to Humanoid Whole-Body Loco-manipulation via Hierarchical Action Flow and Spectral Latent RL**
链接：http://arxiv.org/abs/2608.16837v1
作者：L. Gu 等
一句话：通过层级动作流与谱潜在 RL，将通用 VLA 模型适配到人形机器人全身移动操作这一高维、强耦合任务。

**8. When Agents Coordinate: Measuring Coordination in Multi-Agent AI Coding**
链接：http://arxiv.org/abs/2608.16801v1
作者：G. Destefanis, T. Aste
一句话：提出量化 AI 编码智能体团队协作程度的度量工具，弥补当前评估只关心任务完成率与成本的空白。

**9. Neurosymbolic Embodied Agents**
链接：http://arxiv.org/abs/2608.16794v1
作者：M. Albinhassan 等
一句话：融合神经符号方法，将长程家庭任务分解为任务导向的视觉执行验证，确保规划的可执行性。

**10. When State Becomes an Attack Surface: State-Semantic Injection in LLM-Driven Embodied Agents**
链接：http://arxiv.org/abs/2608.16806v1
作者：J. Liu 等
一句话：揭示 LLM 驱动的具身智能体中，环境状态可作为攻击面进行语义注入的新型安全漏洞。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

**11. Improving the matrix multiplication exponent with modern optimization and AlphaEvolve**
链接：http://arxiv.org/abs/2608.16884v1
作者：E. Dupont 等
一句话：结合现代优化方法与 AlphaEvolve，改进矩阵乘法指数 ω 的当前最优上界——理论计算机科学的重要进展。

**12. Proteus: Incremental Memory Activation for Long-Context Sequence Modeling**
链接：http://arxiv.org/abs/2608.16844v1
作者：R. Bayat 等
一句话：提出增量式记忆激活机制，打破传统记忆模型静态记忆的限制，提升长上下文序列建模性能。

**13. CaliBench: Are the Stochastic Dynamics of Video World Models Physically Calibrated?**
链接：http://arxiv.org/abs/2608.16829v1
作者：J. Sadeghi 等
一句话：首个检验视频世界模型随机动力学物理校准度的基准，精确到特定物理现象的细粒度不确定性。

**14. AutoSR: Automatic Symbolic Regression by Searching Research States**
链接：http://arxiv.org/abs/2608.16876v1
作者：K. Zhang 等
一句话：将符号回归从搜索孤立方程升级为搜索持续科学研究状态，实现全自动化的新范式。

**15. Unsupervised Anomaly Detection for Image Dataset Quality Assurance in Multi-Center Breast MRI**
链接：http://arxiv.org/abs/2608.16725v1
作者：C. Tappermann 等
一句话：利用无监督异常检测实现多中心医学影像数据集自动质量保障，回应高风险管理 AI 的监管需求。

---

### 📊 应用（垂直领域、多模态、代码生成）

**16. TRACE-Bench: Decomposing and Diagnosing Multi-Reference Image Generation**
链接：http://arxiv.org/abs/2608.16765v1
作者：H. Wang 等
一句话：针对多参考图像生成提出可分解、可诊断的基准框架，弥补现有按任务类型组织的基准的碎片化缺陷。

**17. TDD-Agent: Test-Driven Reasoning for Code Generation**
链接：http://arxiv.org/abs/2608.16742v1
作者：H. Yu 等
一句话：将测试从静态后验验证器转为驱动的推理机制，提升仓库级代码生成正确性。

**18. MIRROR: Multimodal Intelligent Radiology Reasoning and Observation Reporter**
链接：http://arxiv.org/abs/2608.16709v1
作者：V. Nagarajan, S. Venkatapathy
一句话：分离"分类结果"与"自动生成的报告"，杜绝模型报告添加模型从未作出的声明的问题。

**19. Semantic Bandits: In-Context Exploration-Exploitation is Biased by Semantic Priors**
链接：http://arxiv.org/abs/2608.16707v1
作者：D. E. Austin 等
一句话：揭示 LLM 在上下文射击场中的探索-利用决策受语义先验系统性偏差影响。

---

## 研究趋势信号

今日投稿中最值得关注的新兴方向包括：**（1）LLM 安全性研究的"攻防升级"**——从直接的 prompt 注入转向更隐蔽的"模型催眠"和状态语义注入，表明安全对抗已进入"潜意识"层面；**（2）RL 与 LLM 的深度融合走向工程化**——从策略迭代到价值函数再到 harness 训练，RL 正成为 LLM 后训练的核心基础设施；**（3）可解释性从"理解模型"转向"验证证据"**——计算溯源、反事实可模拟性等概念开始为可解释性提供可检验标准；**（4）具身智能的"全身化"趋势**——人形机器人、长程操作挑战 VLA 从"感知-动作"向"全身协调"升级。

---

## 值得精读

1. **Model Hypnosis**（http://arxiv.org/abs/2608.16834v1）— 揭示了一种跨模型家族和规模的系统性安全脆弱性，对 AI 部署安全具有紧迫的实践启示。建议仔细阅读其机制分析及可能的防御方向。

2. **Improving the matrix multiplication exponent with modern optimization and AlphaEvolve**（http://arxiv.org/abs/2608.16884v1）— 将现代优化与 AI 搜索引入理论计算机科学的核心问题，是 AI-for-Math 方向的里程碑式工作。

3. **Don't Drop the BATON**（http://arxiv.org/abs/2608.16889v1）— 直面 VLA 长程操作的核心痛点，其子任务探索与转移感知记忆的框架对机器人操作社区有很强的参考价值，方法设计完整且工程落地潜力大。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*