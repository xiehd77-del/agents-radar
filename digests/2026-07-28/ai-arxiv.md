# ArXiv AI 研究日报 2026-07-28

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-28 02:39 UTC

---

# ArXiv AI 研究日报 | 2026-07-28

## 📌 今日速览

今日50篇投稿中，**智能体与多步工具使用**成为最热主题，多篇论文聚焦于AI agent的规划、授权与记忆机制。**持续测试时自适应（CTTA）** 与**离线-在线强化学习**在理论与应用层面均有显著进展。此外，**科学发现自动化的可信性**受到关注，包括PDE发现的后验评估与形式化验证。**金融风险预警**与**心理支持对话**等垂直领域应用也涌现出创新方法。值得注意的是，**分布式学习**与**频谱分析**方面的理论工作也为未来研究提供了新视角。

---

## 📑 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **Zing: Social Mind for LLMs**  
   [ArXiv](http://arxiv.org/abs/2607.23740v1)  
   Zing Team et al.  
   *提出“社会心智”框架，赋予LLM推断心理状态、追踪社会关系、推理规范的能力，是实现长期人机共存的里程碑式尝试。*

2. **The Illusion of Secure LLM Code: Closing the Security Gap via Iterative Reprompting**  
   [ArXiv](http://arxiv.org/abs/2607.23710v1)  
   Singh, Mahajan, Singh et al.  
   *系统评估5种主流AI编程助手生成认证代码的安全性，提出迭代重提示法显著缩小安全差距。*

3. **Language Shapes Instruction Hierarchy Compliance in Multilingual LLMs**  
   [ArXiv](http://arxiv.org/abs/2607.23545v1)  
   Moon, Hwang, Jung  
   *首次跨语言评估指令层级（IH）遵从性，发现语言选择显著影响模型的安全行为。*

4. **The Intruder Threshold: A Spectral Law for LoRA Fine-Tuning**  
   [ArXiv](http://arxiv.org/abs/2607.23711v1)  
   Peng Xie  
   *理论揭示了LoRA微调中“侵入维度”的产生机制——新奇异向量与预训练向量正交，导致灾难性遗忘，并提出谱律预测。*

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

5. **E-Bench: Benchmarking Multi-Step Tool-Use Agents in Real-World Product Scenarios**  
   [ArXiv](http://arxiv.org/abs/2607.23722v1)  
   Zheng, Zou, Ye et al.  
   *首个面向真实产品场景的多步工具使用基准，涵盖隐藏信息收集、工具组合与状态提交等关键能力。*

6. **Are You Still the Agent I Authorized? Earned Authority under a Fixed Ceiling for Evolving Agents**  
   [ArXiv](http://arxiv.org/abs/2607.23586v1)  
   Zhang, Zhang  
   *探讨长期运行的AI agent演化后产生的“授权漂移”问题，提出固定权限上限下的代理授权管理框架。*

7. **Focus Is All You Need: Adaptive Goal-aware Attention Orchestration for Multi-Agent Graph Systems**  
   [ArXiv](http://arxiv.org/abs/2607.23678v1)  
   Fan, Xu, Yuan  
   *提出自适应目标感知注意力编排机制，解决图结构多智能体系统中的注意力分散问题。*

8. **Plans Work in Mysterious Ways: Evaluating a Plan Mode for Spreadsheet Agents**  
   [ArXiv](http://arxiv.org/abs/2607.23670v1)  
   Kumar, Dutta, Gulwani et al.  
   *系统评估计划模式在电子表格agent中的效果，揭示其在实际终端用户编程中的收益与局限。*

### 🔧 方法与框架（新技术、基准测试、效率优化）

9. **Hierarchical Soft Actor-Critic for Sparse-Reward Long-Horizon Reinforcement Learning**  
   [ArXiv](http://arxiv.org/abs/2607.23726v1)  
   Elashaal, Hfaiedh, Khraief et al.  
   *双层分层强化学习框架，高层负责策略规划，低层使用SAC实现连续控制，有效解决稀疏奖励长期任务。*

10. **Offline-Online Curriculum RL for Multimodal Reasoning**  
    [ArXiv](http://arxiv.org/abs/2607.23700v1)  
    Deng, Du, Nan et al.  
    *提出离线-在线课程强化学习，纠正多模态大模型在推理中依赖虚假捷径的问题，提升可解释性。*

11. **Distributional Split Criteria for Random Forests: Extensions, Shrinkage, and the Robustness of Mean Splitting**  
    [ArXiv](http://arxiv.org/abs/2607.23721v1)  
    Silas Koemen  
    *系统研究分布随机森林的多种分裂准则，包括扩展、收缩以及均值分裂的鲁棒性分析。*

12. **Soft-Constrained Optimization of Latent Space in Variational Autoencoders**  
    [ArXiv](http://arxiv.org/abs/2607.23751v1)  
    Ye Shi  
    *提出软约束优化方法，在VAE中同时实现高编码容量与低维解耦表示，解决KL正则化瓶颈。*

### 📊 应用（垂直领域、多模态、代码生成）

13. **Extreme Volatility Warning under Label Scarcity via Multi-Source Anomaly Fusion**  
    [ArXiv](http://arxiv.org/abs/2607.23682v1)  
    Qian, Xiong, Li et al.  
    *在标签稀缺的金融波动预警场景中，提出多源异常融合方法，仅用80个正样本实现有效预警。*

14. **EmoTrace: An Emotion Trajectory-Centered Framework for Psychological Support Dialogue Generation**  
    [ArXiv](http://arxiv.org/abs/2607.23648v1)  
    Weng, Liu, Liu et al.  
    *以情感轨迹为中心的心理支持对话框架，构建高质量心理辅导语料库，促进咨询导向对话模型训练。*

15. **MS-GPT: Rethinking MS/MS De Novo Structure Elucidation as Spectrum-Induced Posterior Querying of a Molecule-Language Model**  
    [ArXiv](http://arxiv.org/abs/2607.23607v1)  
    Zhao, Liu, Li et al.  
    *将质谱从头结构解析重新定义为分子语言模型上的谱诱导后验查询，突破参考库依赖限制。*

16. **Formally Verified Synthesizable Floating-Point Data Types in ARCH HDL**  
    [ArXiv](http://arxiv.org/abs/2607.23715v1)  
    Shuqing Zhao  
    *在面向LLM生成的硬件描述语言中实现端到端验证的FP32/BF16运算，为AI生成硬件提供安全基础。*

---

## 📊 研究趋势信号

1. **AI agent的长期运行与演变**：从授权管理（#42）、社会心智（#3）到记忆契约（#17），研究者开始系统性地构建可持续运行、可信任的长周期agent体系。
2. **科学发现的可信自动化**：PDE发现的后验评估（#1）、量子场论对偶验证（#37）、形式化硬件验证（#12）显示出“可信AI for Science”正从口号走向严谨方法论。
3. **多模态与多源信息融合**：质谱+分子语言（#38）、EEG+HRV融合诊断（#49）、多信道S参数预测（#46）等跨模态方法成为应用创新热点。
4. **隐私与安全的新维度**：差分隐私贝叶斯学习（#25）、多语言LLM安全性（#50）、可释放的代理数据（#34）表明隐私保护正在从传统ML向LLM时代演进。

---

## ⭐ 值得精读

1. **On the post-hoc Evaluation of PDE Discovery: A Multifaceted Challenge of Scientific Advancement**  
   [ArXiv](http://arxiv.org/abs/2607.23753v1)  
   **理由**：作为物理信息机器学习的基石问题，该文对PDE发现的后验评估进行了系统性批判，揭示了现有评估范式的深层缺陷，对AI for Science领域的可信性建设具有指导意义。

2. **The Intruder Threshold: A Spectral Law for LoRA Fine-Tuning**  
   [ArXiv](http://arxiv.org/abs/2607.23711v1)  
   **理由**：首次从谱理论角度解释了LoRA微调中的“侵入维度”现象，提供了层次化的预测机制，对理解微调过程中的灾难性遗忘具有重要理论价值。

3. **E-Bench: Benchmarking Multi-Step Tool-Use Agents in Real-World Product Scenarios**  
   [ArXiv](http://arxiv.org/abs/2607.23722v1)  
   **理由**：填补了多步工具使用agent评估的空白，其真实产品场景设计使得基准结果具有直接的应用参考价值，是agent研究社区急需的标准化评估工具。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*