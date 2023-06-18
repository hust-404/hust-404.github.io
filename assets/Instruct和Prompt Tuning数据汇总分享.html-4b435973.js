import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as s,c,e as l,a as t,b as e,d as n,w as h,f as d}from"./app-b62be858.js";const u={},p=t("h1",{id:"指令数据集和提示数据集分享",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#指令数据集和提示数据集分享","aria-hidden":"true"},"#"),e(" 指令数据集和提示数据集分享")],-1),_=t("p",null,"指令数据集和提示数据集在模型微调方面，尤其是在模型与人类认识对齐方面，作用巨大。本文针对一些质量较高的指令数据集和提示数据集，进行了简要介绍。",-1),g=d('<table><thead><tr><th>数据集/项目名称</th><th>组织/作者</th><th>简介</th></tr></thead><tbody><tr><td>Natural Instruction / Super-Natural Instruction</td><td>Allen AI</td><td>包含61个NLP任务（Natural Instruction）和1600个NLP任务（Super-Natural Instruction）的指令数据</td></tr><tr><td>PromptSource / P3</td><td>BigScience</td><td>包含270个NLP任务的2000多个prompt模版（PromptSource）和规模在100M-1B之间的P3数据集</td></tr><tr><td>xMTF</td><td>BigScience</td><td>包含13个NLP任务、46种语言的多语言prompt数据</td></tr><tr><td>HH-RLHF</td><td>Anthropic</td><td>旨在训练Helpful and Harmless（HH）的LLMs的RLHF数据集</td></tr><tr><td>Unnatural Instruction</td><td>orhonovich</td><td>使用GPT3生成64k的instruction prompt数据，经改写后得到240k条instruction数据</td></tr><tr><td>Self-Instruct</td><td>yizhongw</td><td>使用LLMs生成prompt进行instruct-tuning的方法，引入Task pool和Quality filtering等概念</td></tr><tr><td>UnifiedSKG</td><td>HKU</td><td>在Text-to-Text框架中加入knowledge grounding，将结构化数据序列化并嵌入到prompt中</td></tr><tr><td>Flan Collection</td><td>Google</td><td>将Flan 2021数据与一些开源的instruction数据（P3，super-natural instruction等）进行合并</td></tr><tr><td>InstructDial</td><td>prakharguptaz</td><td>在特定的一种任务类型（对话指令）上进行指令微调的尝试</td></tr><tr><td>Alpaca</td><td>Stanford</td><td>53k 数据, 非常优秀的表现(GPT-3.5 level).</td></tr></tbody></table><h2 id="_1-super-natural-instruction-【allen-ai】" tabindex="-1"><a class="header-anchor" href="#_1-super-natural-instruction-【allen-ai】" aria-hidden="true">#</a> 1 Super-Natural Instruction 【Allen AI】</h2>',2),f=t("br",null,null,-1),b=t("h2",{id:"_2-promptsource【bigscience】",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2-promptsource【bigscience】","aria-hidden":"true"},"#"),e(" 2 PromptSource【BigScience】")],-1),m={href:"https://github.com/bigscience-workshop/promptsource",target:"_blank",rel:"noopener noreferrer"},k=t("br",null,null,-1),P=t("br",null,null,-1),L=t("h2",{id:"_3-p3【bigscience】",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_3-p3【bigscience】","aria-hidden":"true"},"#"),e(" 3 P3【BigScience】")],-1),S={href:"https://huggingface.co/datasets/bigscience/P3",target:"_blank",rel:"noopener noreferrer"},x=t("br",null,null,-1),I=t("br",null,null,-1),N=t("h2",{id:"_4-xmtf-【bigscience-包含中文】",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_4-xmtf-【bigscience-包含中文】","aria-hidden":"true"},"#"),e(" 4 xMTF 【BigScience，包含中文】")],-1),H={href:"https://huggingface.co/datasets/bigscience/P3",target:"_blank",rel:"noopener noreferrer"},T=t("p",null,[e("BigScience 在英语 prompt 的基础上，扩展其 prompt 到多种非英语语言。"),t("br"),e(" 该项目包含了 13 个 NLP 任务，并采用了 46 个不同的语言的版本。对应的 prompt 包含的语种个数不定。")],-1),z=t("h2",{id:"_5-hh-rlhf【anthropic】",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_5-hh-rlhf【anthropic】","aria-hidden":"true"},"#"),e(" 5 HH-RLHF【Anthropic】")],-1),B={href:"https://github.com/anthropics/hh-rlhf",target:"_blank",rel:"noopener noreferrer"},F=t("br",null,null,-1),w=t("br",null,null,-1),A=t("br",null,null,-1),G=t("br",null,null,-1),v=t("br",null,null,-1),y=t("br",null,null,-1),M={href:"https://huggingface.co/datasets/Anthropic/hh-rlhf",target:"_blank",rel:"noopener noreferrer"},C=t("h2",{id:"_6-unnatural-instruction【orhonovich】",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_6-unnatural-instruction【orhonovich】","aria-hidden":"true"},"#"),e(" 6 Unnatural Instruction【orhonovich】")],-1),U=t("p",null,[e("使用 LLMs 自主生成 instruction 数据是 instruct-tuning 领域较为活跃的一个方向。"),t("br"),e(" Unnatural Instruction 使用 GPT3（text-davinci-002）生成了 64k 的 instruction prompt 数据。并使用同样的模型将 64k 的 prompt 进行改写，最终得到了 240k 条 instruction 数据。"),t("br"),e(" 论文中显示，在 Instruct-Tuning 中 LLMs 自主生成的 prompt 表现出了良好的效果，甚至超过了在 P3 等数据上进行微调的 T0 等模型。")],-1),R=t("h2",{id:"_7-self-instruct【yizhongw】",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_7-self-instruct【yizhongw】","aria-hidden":"true"},"#"),e(" 7 Self-Instruct【yizhongw】")],-1),K={href:"https://github.com/yizhongw/self-instruct",target:"_blank",rel:"noopener noreferrer"},V=t("br",null,null,-1),D=t("br",null,null,-1),E=t("h2",{id:"_8-unifiedskg-【hku】",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_8-unifiedskg-【hku】","aria-hidden":"true"},"#"),e(" 8 UnifiedSKG 【HKU】")],-1),Q={href:"https://unifiedskg.com/",target:"_blank",rel:"noopener noreferrer"},j=t("p",null,"UnifiedSKG 在 Text-to-Text 的框架中加入了 knowledge grounding，也就是在 prompt-output 的框架中，加入了结构化数据做辅助，共21个任务数据集，",-1),q=t("p",null,"解决问题：做打破彼此任务之间的边界的第一次简单尝试，使得这些可以在同一个UnifiedSKG framework下进行学习并在这些任务上取得不错的结果",-1),J=t("h2",{id:"_9-flan-collection【google】",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_9-flan-collection【google】","aria-hidden":"true"},"#"),e(" 9 Flan Collection【Google】")],-1),O={href:"https://github.com/google-research/FLAN/tree/main/flan/v2",target:"_blank",rel:"noopener noreferrer"},W=t("br",null,null,-1),X=t("h2",{id:"_10-instructdial【prakharguptaz】",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_10-instructdial【prakharguptaz】","aria-hidden":"true"},"#"),e(" 10 InstructDial【prakharguptaz】")],-1),Y={href:"https://github.com/prakharguptaz/Instructdial/tree/main/datasets",target:"_blank",rel:"noopener noreferrer"},Z=t("br",null,null,-1),$={href:"https://zhuanlan.zhihu.com/p/615277009",target:"_blank",rel:"noopener noreferrer"};function tt(et,nt){const i=o("RouterLink"),r=o("ExternalLinkIcon");return s(),c("div",null,[p,_,l(" more "),g,t("p",null,[e("这些自然语言指令清楚而完整地描述了一项任务（传统上定义为将输入字符串映射到输出字符串）。配备“理解”语言说明的模型，如果提供了任务说明，应该可以成功解决任何看不见的任务。"),f,e(" 项目链接："),n(i,{to:"/zh/posts/dataset/%5Bhttps:/instructions.apps.allenai.org/"},{default:h(()=>[e("https://instructions.apps.allenai.org/")]),_:1})]),b,t("p",null,[e("项目链接："),t("a",m,[e("https://github.com/bigscience-workshop/promptsource"),n(r)]),k,e(" BigScience 由 Hugging Face 和法国 CNRS，IDRIS，GENCI 等联合组织，是当下最大的开源 LLMs 组织之一。"),P,e(" BigScience 在 2021 年末开发了PromptSource项目，开源了一系列工具 toolkits，帮助研究者基于现有NLP 任务构建 prompt。截止目前，PromptSource 项目包含了 270 个 NLP 任务的超过 2000 个 prompt 模版。")]),L,t("p",null,[e("项目链接："),t("a",S,[e("https://huggingface.co/datasets/bigscience/P3"),n(r)]),x,e(" 语言：英文"),I,e(" 在promptsource基础上，BigScience 构建了 P3 数据集。在 Hugging Face Hub 上你可以找到 P3 数据，P3 的数据规模在 100M-1B 之间。")]),N,t("p",null,[e("项目链接："),t("a",H,[e("https://huggingface.co/datasets/bigscience/P3"),n(r)])]),T,z,t("p",null,[e("项目链接："),t("a",B,[e("https://github.com/anthropics/hh-rlhf"),n(r)]),F,e(" 数量："),w,e(" 训练集：161k"),A,e(" 测试集：8.55k"),G,e(" Anthropic 公司旗下的 Claud 是 ChatGPT 的主要竞品之一。"),v,e(" Anthropic 开源了其在自己产品线中使用的 RLHF 数据集："),y,e(" 链接："),t("a",M,[e("https://huggingface.co/datasets/Anthropic/hh-rlhf"),n(r)])]),C,U,R,t("p",null,[e("项目链接："),t("a",K,[e("https://github.com/yizhongw/self-instruct"),n(r)]),V,e(" Self-Instruct 同样是使用 LLMs 生成 prompt 进行 instruct-tuning 的思路。不过使用了更 fine-grained 的生成流程。"),D,e(" Task pool 和 Quality filtering 等概念被引入，部分缓解了 self-intrauct 类型数据的 noise 问题")]),E,t("p",null,[e("项目主页 ："),t("a",Q,[e("https://unifiedskg.com/"),n(r)])]),j,q,J,t("p",null,[e("项目链接："),t("a",O,[e("https://github.com/google-research/FLAN/tree/main/flan/v2"),n(r)]),W,e(" Google 在这个项目中将自己的 Flan 2021 数据与一些开源的 instruction 数据（P3，super-natural instruction 等）进行了合并")]),X,t("p",null,[e("项目链接："),t("a",Y,[e("https://github.com/prakharguptaz/Instructdial/tree/main/datasets"),n(r)]),Z,e(" InstructDial 是在特定的一种任务类型上进行指令微调的尝试。实验结果表明，在对话指令数据上微调后，模型在对话任务上的表现强于在超大规模任务集上的结果")]),t("p",null,[t("strong",null,[t("a",$,[e("阅读原文"),n(r)])])])])}const it=a(u,[["render",tt],["__file","Instruct和Prompt Tuning数据汇总分享.html.vue"]]);export{it as default};
