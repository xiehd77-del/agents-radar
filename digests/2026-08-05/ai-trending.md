# AI 开源趋势日报 2026-08-05

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-05 02:39 UTC

---

# 🤖 AI 开源趋势日报 · 2026-08-05


## 一、今日速览

今日 AI 开源生态呈现两个显著特征：**AI Agent 记忆层**正在成为新基建，腾讯云发布团队级记忆中枢，mem0 等记忆项目热度持续攀升；**Agent 技能包（Skill）** 生态全面爆发，从极致 Token 节省（caveman）到安全渗透（reverse-skill）再到复合工程方法论（compound-engineering-plugin），以 Claude Code 为代表的 coding agent 技能生态正在快速成形。DeepSeek-Reasonix（Go 编写的终端 AI 编程代理）单日新增 922 stars，显示基于推理优化和前缀缓存稳定的编程代理正在成为新的竞争焦点。AI 视频编辑（browser-use/video-use）作为新兴方向首次登上热榜，值得关注。低资源推理（AirLLM 单卡 4GB 运行 70B 模型）继续保持强劲热度，单日新增 1711 stars。


## 二、各维度热门项目

### 🔧 AI 基础工具

- [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) — ⭐ 2,540 today · Rust 编写的 PDF 检测与分类库，智能识别扫描版 vs 文本版 PDF，为 RAG 管线路由决策提供关键前置能力
- [lyogavin/airllm](https://github.com/lyogavin/airllm) — ⭐ 1,711 today · 单张 4GB 显卡运行 70B 参数模型，大幅降低 LLM 推理硬件门槛，边缘部署重要工具
- [vllm-project/vllm](https://github.com/vllm-project/vllm) — ⭐ 88,200 · 高吞吐、内存高效的 LLM 推理与服务引擎，生产级部署标准选择
- [ollama/ollama](https://github.com/ollama/ollama) — ⭐ 177,800 · 本地一行命令运行主流开源模型，持续扩展模型生态
- [huggingface/transformers](https://github.com/huggingface/transformers) — ⭐ 163,338 · 模型定义与训练的标准框架，支持文本/视觉/音频/多模态
- [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) — ⭐ 8,172 · Rust 生态的模块化 LLM 应用框架，与 Rust 高性能特性结合，独特定位
- [Picovoice/picollm](https://github.com/Picovoice/picollm) — ⭐ 316 · 端侧设备 LLM 推理，X-Bit 量化技术支持嵌入式场景

### 🤖 AI 智能体/工作流

- [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) — ⭐ (+922 today) · DeepSeek 原生终端编程代理，围绕前缀缓存稳定性设计，长驻运行不中断
- [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) — ⭐ (+40 today) · Claude Code、Codex、Cursor 等复合工程方法论官方插件，代表 Agent 工作流工程化趋势
- [affaan-m/ECC](https://github.com/affaan-m/ECC) — ⭐ 237,727 · Agent 性能优化系统，提供技能、本能、记忆与安全能力的完整框架
- [livekit/agents](https://github.com/livekit/agents) — ⭐ (+432 today) · 实时语音 AI Agent 框架，音视频 + Agent 融合方向
- [browser-use/browser-use](https://github.com/browser-use/browser-use) — ⭐ 107,889 · 让网站对 AI Agent 可访问，实现浏览器任务自动化
- [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) — ⭐ (+2,297 today) · AI 驱动的逆向/渗透/安全测试技能路由包，支持多客户端，自动化工具链按需自举
- [obra/superpowers](https://github.com/obra/superpowers) — ⭐ (+653 today) · Agentic 技能框架与软件开发方法论
- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) — ⭐ 185,818 · 通用 AI Agent 平台，强调人人可用的 AI

### 📦 AI 应用

- [browser-use/video-use](https://github.com/browser-use/video-use) — ⭐ (+320 today) · 用编码 Agent 编辑视频，AI 视频处理进入 Agent 驱动时代
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — ⭐ 101,626 · AI 一键生成高清短视频，自动化工作流模板
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) — ⭐ 60,077 · LLM 驱动的多市场股票智能分析，多源行情与自动推送
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) — ⭐ 49,414 · AI 生产力工作台，集成 300+ 助手和主流 LLM
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) — ⭐ 43,031 · AI 文档/主题转原生 PPT，数据图表和动画自动生成
- [open-webui/open-webui](https://github.com/open-webui/open-webui) — ⭐ 147,865 · 用户友好的自托管 AI 交互界面，支持 Ollama 与 OpenAI API
- [santifer/career-ops](https://github.com/santifer/career-ops) — ⭐ 62,802 · 开源 AI 求职助手，JD 评分/简历定制/申请追踪自动化

### 🧠 大模型/训练（含安全与优化）

- [uber/ADR](https://github.com/uber/ADR) — ⭐ (+148 today) · Uber 开源的 Agent 安全防护，提供可观测性、安全基准测试和威胁检测
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — ⭐ 225,552 · 与用户共同成长的 Agent，持续自进化
- [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) — ⭐ 196,804 · 经典 ML 框架，持续更新
- [pytorch/pytorch](https://github.com/pytorch/pytorch) — ⭐ 102,183 · 动态神经网络与 GPU 加速，主流研究框架
- [open-compass/opencompass](https://github.com/open-compass/opencompass) — ⭐ 7,273 · LLM 评测平台，100+ 数据集全面评估
- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) — ⭐ 4,441 · 面向系统工程师的 LLM 推理课程，从零构建微型 vLLM
- [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) — ⭐ 62 · 纯 Rust 从零构建 Decoder-only LLM，25M 到 1.3B 规模

### 🔍 RAG/知识库

- [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) — ⭐ (+1,111 today) · 团队级 Agent 记忆中枢，四类可复用记忆资产（Chat Memory/Skill/LLM-Wiki/Code-Graph）
- [mem0ai/mem0](https://github.com/mem0ai/mem0) — ⭐ 62,534 · 通用 Agent 记忆层，跨会话持久化
- [langgenius/dify](https://github.com/langgenius/dify) — ⭐ 151,356 — Agentic 工作流 + RAG 管道一站式工作台，支持多种部署方式
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — ⭐ 86,833 · 领先的 RAG 引擎，深度融合 Agent 能力
- [milvus-io/milvus](https://github.com/milvus-io/milvus) — ⭐ 45,510 · 云原生向量数据库性能标杆
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) — ⭐ 89,581 · 捕获 Agent 会话内容并用 AI 压缩注入未来会话，打通跨会话记忆
- [qdrant/qdrant](https://github.com/qdrant/qdrant) — ⭐ 33,782 · 高性能向量数据库与搜索引擎
- [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) — ⭐ 12,760 · 97% 存储节省的端侧私有 RAG，MLsys2026 论文支持


## 三、趋势信号分析

**Agent 记忆与上下文管理成为今日最大热点**。腾讯云 TencentDB-Agent-Memory 单日 1,111 stars 登榜，配合 mem0、claude-mem、cognee 等项目，Agent 记忆层正从实验性走向基础设施化——团队级共享记忆、跨会话上下文注入、Token 压缩优化等方向密集发力。技能包生态沿多方向分化：一面是反向优化（caveman 省 65% Token、headroom 压缩 60-95%），一面是安全增强（reverse-skill 将渗透测试流程化、uber/ADR 做 Agent 安全防护），还有方法论沉淀（compound-engineering-plugin、superpowers）。编程代理步入“持久运行 + 前缀缓存稳定”新阶段，DeepSeek-Reasonix 案例表明推理缓存优化已成为关键工程方向。Rust 在 AI 基础设施中的渗透持续加深，pdf-inspector、rig、aarambh-studio 等项目从不同角度验证了这一趋势。**AI 视频编辑初登榜**（video-use），AI 应用叙事进入多模态生成下一幕。


## 四、社区关注热点

- ⚡ **Agent 记忆层密集创新**：TencentDB-Agent-Memory（团队级共享）、mem0（通用层）、claude-mem（会话压缩注入）——记忆是 Agent 从玩具走向生产力的关键关卡，值得深入调研
- 🛡️ **Agent 安全从“建议”到“标配”**：uber/ADR（企业级防护）与 reverse-skill（攻防技能包）同日登榜，攻防双方同步入场，企业级 Agent 部署必须拥抱安全框架
- 🦀 **Rust 在 AI 基础设施渗透加速**：pdf-inspector（PDF 智能处理）、rig（LLM 框架）、aarambh-studio（纯 Rust LLM）——Rust 的高性能特性正成为 AI 工具链的新选择
- 🔄 **Graphify 开创“无向量库”RAG**：10 万+ stars 的知识图谱 RAG 方案，无需向量库即可完成语义检索，可能重新定义轻量级 RAG 架构
- 🎬 **AI 视频编辑新兴赛道**：video-use 让编码 Agent 直接剪辑视频，若与浏览器自动化和多模态模型联动，有望开启“Agent 即导演”的新范式

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*