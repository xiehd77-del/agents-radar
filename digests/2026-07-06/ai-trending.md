# AI 开源趋势日报 2026-07-06

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-06 15:02 UTC

---

好的，作为专注于AI开源生态的技术分析师，以下是我为您生成的《AI开源趋势日报》。

---

## AI开源趋势日报 | 2026-07-06

### 1. 今日速览

今日AI开源社区呈现两大趋势：**智能体技能生态**井喷式发展，以及**本地化、隐私优先的AI应用**继续受到追捧。`system_prompts_leaks`项目以1386颗今日Stars登顶，揭示了社区对前沿模型系统提示词（System Prompt）的极大好奇。`agent-skills`系列库的涌现与扩散，标志着AI编码智能体正从“能用”向“有好品味、专业级”演进。此外，基于Rust构建的、支持本地部署的会议助手`Meetily`，以2493颗Stars的增速展现了开发者对隐私保护的刚需。

### 2. 各维度热门项目

#### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** ⭐145,818 (+834 today) | TS
  - **AI驱动的网络数据抓取与交互API**。它不仅今日Stars激增，更是一个因多智能体系统对数据需求而持续爆火的顶流工具，让AI能高效获取并理解互联网信息。
- **[openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc)** ⭐0 (+910 today) | JS
  - **跨Agent互操作的插件**。OpenAI官方的Codex插件，允许Claude Code调用Codex进行代码审查或任务委派，标志着不同AI编码Agent可以协同工作。
- **[steipete/CodexBar](https://github.com/steipete/CodexBar)** ⭐0 (+598 today) | Swift
  - **macOS菜单栏工具**。无需登录即可在菜单栏显示OpenAI Codex和Claude Code的使用统计数据，满足了开发者对AI工具用量管理的需求。
- **[ogulcancelik/herdr](https://github.com/ogulcancelik/herdr)** ⭐0 (+783 today) | Rust
  - **终端内的Agent多路复用器**。可以在终端中同时管理多个AI Agent（如Codex、Claude Code），是一个高效的Agent开发和管理基础设施。
- **[alibaba/zvec](https://github.com/alibaba/zvec)** ⭐13,234 (+355 today) | C++
  - **阿里开源的轻量级内存向量数据库**。主打“轻量、高速、进程内”，适合在性能敏感或资源受限的场景下，为AI应用提供高效的向量存储与检索能力。

#### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** ⭐0 (+1114 today) | Shell
  - **生产级AI编码Agent技能集合**。由Google Chrome工程经理创建，旨在为AI编码Agent提供专业工程技能的“最佳实践”合集，提升Agent代码质量。
- **[alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills)** ⭐0 (+611 today) | Python
  - **超全的Claude Code技能库**。包含337个技能、30+Agent适配，覆盖工程、营销、产品等多个领域，是当前“Agent-skill”生态的集大成者。
- **[Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily)** ⭐0 (+2493 today) | Rust
  - **隐私优先的AI会议助手**。基于Rust构建，100%本地处理，支持4倍速Whisper转录及Ollama总结。今日Stars增长最高，体现了用户对“不依赖云端，保护隐私”的强需求。
- **[gastownhall/gastown](https://github.com/gastownhall/gastown)** ⭐0 (+293 today) | Go
  - **多智能体工作区管理器**。为管理和协调多个AI Agent协同工作而设计，是解决复杂“多Agent编排”问题的实用工具。
- **[ruvnet/RuView](https://github.com/ruvnet/RuView)** ⭐0 (+471 today) | Rust
  - **使用WiFi信号进行空间感知**。颠覆性地将WiFi信号转化为实时空间智能，无需摄像头即可感知人员存在和生命体征，是AI感官能力的全新尝试。

#### 📦 AI 应用（具体应用产品、垂直场景解决方案）

- **[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)** ⭐0 (+1386 today) | JS
  - **知名AI模型System Prompt提取库**。汇集了Anthropic（Claude 5）、OpenAI（GPT-5.5）、Google（Gemini 3.5）等数十款最前沿模型的系统提示词。是了解大模型背后“指令灵魂”的珍贵资料库。
- **[Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)** ⭐0 (+1453 today) | JS
  - **提升AI输出“品味”的工具**。通过一组技能，让AI编码Agent生成的代码和内容摆脱“模板化”和“枯燥”，注入了“品味”。直击开发者对AI输出风格单调的痛点。
- **[bradautomates/claude-video](https://github.com/bradautomates/claude-video)** ⭐0 (+368 today) | Python
  - **让Claude“看懂”视频**。自动下载视频、提取帧、转录音频，然后将所有信息交给Claude进行分析和理解，拓展了多模态理解的应用边界。
- **[karakeep-app/karakeep](https://github.com/karakeep-app/karakeep)** ⭐0 (+178 today) | TS
  - **自托管的AI书签管理器**。利用AI自动为链接、笔记和图片打标签并进行全文搜索，是隐私至上的知识管理方案。

#### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** ⭐0 (+237 today) | Python
  - **AI Agent的“近期热点”研究技能**。能跨Reddit、X、YouTube等多个平台搜索热点话题，并整合成总结报告。本质上是一种高效的**时序RAG**工具，让Agent能获取最新信息。

### 3. 趋势信号分析

今日热榜释放出几个强烈的信号：

1.  **“Agent-Skill”生态爆发，从“会写代码”到“写好代码”**：`agent-skills`和`claude-skills`等项目的爆火，标志着社区对AI编码Agent的需求已从“有基础能力”转向“具有专业素养和美学品味”。开发者不想再看到千篇一律的“AI味”代码，而希望Agent能写出符合生产环境规范、甚至富有设计感的代码。这是一个从“功能满足”到“体验进阶”的关键跃迁。

2.  **Agent能力边界向多模态与物理世界延伸**：`claude-video`让AI能理解视频内容，`RuView`更是让AI可以不依赖传统摄像头，通过无线电波“感知”物理世界。这表明AI Agent的“感官”正在快速多元化，未来的Agent不仅能处理文本和代码，还将能理解视频、声音乃至空间电磁场。

3.  **隐私与本地化是永恒的核心诉求**：尽管基于云的AI服务强大，但`Meetily`的惊人增速证明了用户对数据隐私和离线可用性的强烈期待。纯本地、高性能、开源的解决方案将持续获得铁杆用户的追捧，尤其在会议记录等敏感场景。

### 4. 社区关注热点

- **🔥 `system_prompts_leaks`：大模型的“源代码”**：这是了解当前顶级AI模型世界观和最佳实践的绝佳窗口。无论你是研究员、提示工程师还是普通用户，研究它们都能极大提升你使用大模型的技巧。值得每位AI从业者收藏学习。
- **🤖 `agent-skills` / `claude-skills`：成为“Agent驯兽师”**：AI编码Agent的潜力远未被挖掘。关注这两个技能库，学习如何配置和组合这些“技能”，你会发现AI辅助开发的效率和质量可以有多大的飞跃。
- **🔒 `Meetily`：隐私保护与开源的胜利**：如果你想摆脱对云服务的依赖，或者对会议数据安全有极高要求，`Meetily`是完美的选择。它证明了在AI时代，本地化、高性能的开源方案具有极强的竞争力。
- **🧠 `alibaba/zvec`：轻量级向量存储的潜力股**：通常RAG系统依赖重量级的向量数据库。`zvec`作为“进程内”数据库，为嵌入式设备、边缘计算或对延迟极度敏感的应用提供了新选择。值得关注其社区反馈和性能表现。

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*