# ArXiv AI 研究日报 2026-07-18

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-18 02:38 UTC

---

好的，这是为您生成的《ArXiv AI 研究日报》。

---

### 📅 ArXiv AI 研究日报 ｜ 2026-07-18

#### **今日速览**

今日投稿中，机器人领域迎来重大突破，**RoboTTT** 通过测试时训练将机器人策略的视觉运动上下文扩展至8000步，远超现有方法。同时，AI 安全与对齐研究继续深化，**BadWAM** 揭示了世界模型“想得对但做错”的隐患，而**Symbal** 则系统性地检测多模态模型在图像描述中的系统化错误。此外，**SearchOS-V1** 展示了AI智能体在复杂信息检索任务中的协作潜力，**AutoSynthesis** 则通过多智能体系统实现了全自动元分析，标志着科学自动化进程的加速。最后，一项关于**预训练数据投毒**的研究利用“计算宣传”方法，揭示了新的大规模数据污染风险。

#### **重点论文**

##### 🧠 大语言模型（架构、训练、对齐、评估）

1.  **In-Place Tokenizer Expansion for Pre-trained LLMs**
    - 作者: Jimmy T. H. Smith et al.
    - 一句话说明：提出一种无需重训练即可扩展LLM词表的方法，解决后续添加语言（如小语种）时分词效率低的问题，降低计算和延迟成本。

2.  **Mask-Aware Policy Gradients for Diffusion Language Models**
    - 作者: Haran Raajesh et al.
    - 一句话说明：为掩码扩散语言模型（MDLM）引入强化学习，通过巧妙的策略梯度估计来克服其对数似然评估的难题，提升了模型在推理任务上的表现。

3.  **Can We Trust Item Response Theory for AI Evaluation?**
    - 作者: Han Jiang et al.
    - 一句话说明：系统地质疑了将心理测量学中的项目反应理论（IRT）直接用于AI基准测试的有效性，指出AI评估数据与人类测试数据的差异可能导致能力估算偏差，值得所有AI评测者警惕。

4.  **Delocalization of bias in unadjusted Hamiltonian Monte Carlo and underdamped Langevin**
    - 作者: Yifan Chen et al.
    - 一句话说明：在统计学和机器学习理论中，证明了未经调整的哈密尔顿蒙特卡洛和朗之万采样器的偏差会随着维度增加而“去局域化”，揭示了这些高效采样方法在应用中的理论局限性。

##### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

5.  **SearchOS-V1: Towards Robust Open-Domain Information-Seeking Agent Collaboration**
    - 作者: Yuyao Zhang et al.
    - 一句话说明：提出一种新型多智能体系统，通过协作机制和信息追踪，有效解决了长时间信息搜索任务中智能体“遗忘”目标和搜索失败的问题，提升了开放域信息检索的鲁棒性。

6.  **AutoSynthesis: An agentic system for automated meta-analysis**
    - 作者: Moein Taherinezhad et al.
    - 一句话说明：开发了端到端的全自动元分析多智能体系统，能够自主完成从文献检索到效应量计算的整个流程，有望极大加速循证科学（医学、教育等）的研究效率。

7.  **Plover: Steering GUI Agents through Plan-Centric Interaction**
    - 作者: Madhumitha Venkatesan et al.
    - 一句话说明：提出一种以计划为中心的GUI智能体交互框架，通过将用户意图转化为显式计划，让智能体在动态变化的用户界面中保持目标一致性，显著减少操作漂移。

8.  **When Words Are Safe But Actions Kill: Probing Physical Danger Beyond Text Safety in Hidden-State Risk Space**
    - 作者: Weimeng Wang et al.
    - 一句话说明：揭示了一个关键安全问题：LLM作为具身智能体的规划器时，其生成的文本可能“安全”，但对应的动作在物理世界中可能是危险的。论文通过构建“隐状态风险空间”来探测这种物理层面的风险。

##### 🔧 方法与框架（新技术、基准测试、效率优化）

9.  **SciDiagramEdit: Learning to Edit Scientific Diagrams from Paper Revisions**
    - 作者: Yasheng Sun et al.
    - 一句话说明：首个根据自然语言指令自动编辑科研图表（如调整标签、重组面板）的任务和数据集，通过从论文修订历史中学习，为学术写作自动化开辟了新方向。

10. **MM-IssueLoc: A Controlled Benchmark for Evaluating Visual Evidence in Multimodal Repository-Level Issue Localization**
    - 作者: Shaoxiong Zhan et al.
    - 一句话说明：发布了首个专注于多模态仓库级问题定位的基准，强调代码库中的截图、错误弹窗等视觉证据对定位Bug至关重要，为评估AI在软件工程中的多模态理解能力提供了标准化测试。

11. **MedFailBench: A Clinician-Built Open-Source Benchmark for Medical AI Safety Boundary Inspection**
    - 作者: Goktug Ozkan
    - 一句话说明：一个由临床医生构建的合成测试集与“失效图谱”，专门用于探测医疗AI模型在不同严重等级和安全性“阀门”上的失败模式，是评估临床AI安全边界的实用工具。

12. **BadWAM: When World-Action Models Dream Right but Act Wrong**
    - 作者: Qi Li et al.
    - 一句话说明：首次系统性地研究世界-动作模型（WAM）的“知行不一”问题，揭示其在某些情境下能准确预测未来世界状态（想得对），却输出错误动作（做得错）的脆弱性，挑战了将“预测”与“控制”耦合的可靠性。

13. **T^2MLR: Transformer with Temporal Middle-Layer Recurrence**
    - 作者: Ziyang Cai et al.
    - 一句话说明：在Transformer架构中引入中层时间循环，允许中间推理状态跨时间步持续存在，从而缓解了自回归解码中信息压缩的瓶颈，提升了长序列推理能力。

##### 📊 应用（垂直领域、多模态、代码生成）

14. **SceneBind: Binding What and Where Across Vision, Audio and Language**
    - 作者: Mingfei Chen et al.
    - 一句话说明：提出全模态表示学习框架SceneBind，将视觉、音频和语言的语义信息（“是什么”）与三维空间位置信息（“在哪里”）结合，实现了对真实场景更全面的联合理解。

15. **BrainPilot: Automating Brain Discovery with Agentic Research**
    - 作者: Haoxuan Li et al.
    - 一句话说明：开发了用于神经科学研究的AI智能体“BrainPilot”，可以自主完成从文献调研、执行分析到结果解读的全链路科研流程，是AI驱动科学发现的一个典型范例。

16. **Digital Pantheon: Simulating and Auditing Coalition Formation with LLM Agents**
    - 作者: Dylan Van Mulders et al.
    - 一句话说明：利用LLM智能体模拟政治联盟的形成过程，为计算政治学研究提供了新工具。同时，论文重点关注了LLM内置的“中立性”偏见对模拟结果的影响，并进行了审计。

#### **研究趋势信号**

今日投稿呈现出几个鲜明的新趋势：**“测试时训练（TTT）”持续升温**，不仅在机器人领域（RoboTTT），在多视角视频渲染（Online Neural Space Time Memory）等领域也展现出强大的上下文扩展能力。**“多智能体系统”正从概念走向解决真实世界复杂任务**，如自动元分析（AutoSynthesis）和信息检索（SearchOS-V1）。此外，**针对AI系统“知行不一”和系统化错误的评估与诊断**成为热点，涌现了诸如BadWAM、Symbal和MedFailBench等工作，反映出领域从追求“能力上限”转向更关注“鲁棒性与安全边界”的成熟化发展。

#### **值得精读**

1.  **RoboTTT: Context Scaling for Robot Policies**
    - **理由**：该工作极有可能改变机器人策略的学习范式。将上下文窗口从几十步扩展到8000步，赋予了机器人前所未有的长期记忆和任务跟踪能力，是迈向通用机器人规划的关键一步。对于任何关注机器人、RL和长序列建模的研究者都是必读。

2.  **Pretraining Data Can Be Poisoned through Computational Propaganda**
    - **理由**：该论文揭示了一种新型、隐蔽且大规模的预训练数据投毒方式。与传统通过篡改高信誉数据源不同，“计算宣传”利用网络上的自动生成内容即可实现投毒，对当前依赖大规模互联网数据预训练的模式构成根本性威胁，具有极高的警醒意义。

3.  **Symbal: Detecting Systematic Misalignments in Model-Generated Captions**
    - **理由**：不同于检测偶发错误，Symbal关注的是多模态大模型在生成描述时出现的“系统性”对齐错误（如总把一种东西错认为另一种）。这种错误模式更致命、更难被常规方法发现。论文提出的方法与思路对改进多模态模型的可靠性和评估方法至关重要。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*