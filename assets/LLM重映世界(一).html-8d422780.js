import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as r,c as o,a as e,b as t,d as s,f as l}from"./app-f72e4e13.js";const c="/assets/images/posts/2023-6/ntp_image1.png",p="/assets/images/posts/2023-6/ntp_image2.png",d="/assets/images/posts/2023-6/ntp_image3.png",h="/assets/images/posts/2023-6/ntp_image4.png",m={},g=e("h1",{id:"llm如何重映现实世界-一-llm中的信息压缩能力与思维回路假设",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#llm如何重映现实世界-一-llm中的信息压缩能力与思维回路假设","aria-hidden":"true"},"#"),t(" LLM如何重映现实世界（一）：LLM中的信息压缩能力与思维回路假设")],-1),u={href:"https://zhuanlan.zhihu.com/p/632795115",target:"_blank",rel:"noopener noreferrer"},_=e("br",null,null,-1),f=l('<p>一种观点认为GPT 4 这种 LLM 模型仅仅学会了语言中的单词共现等浅层的表面统计关系，其实并未具备智能，只是类似鹦鹉学舌的语言片段缝合怪而已；另外一种观点则认为：GPT 4 不仅学会了语言元素间的表面统计关系，而且学到了人类语言甚至包括物理世界的内在运行规律，文字是由内在智能产生的，所以 LLM 具备类人智能。</p><h2 id="一、预备知识" tabindex="-1"><a class="header-anchor" href="#一、预备知识" aria-hidden="true">#</a> 一、预备知识</h2><h3 id="_1-1-什么是ntp任务" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是ntp任务" aria-hidden="true">#</a> 1.1 什么是NTP任务</h3><p>目前规模够大的 LLM 模型，在训练基座模型的时候，都采用「Next Token Prediction，NTP」 (后文为了书写简洁，有时会简称为 NTP) 任务。Next Token Prediction 如此简单的操作，就是通过语言中前面的单词，来产生下一个单词</p><h3 id="_1-2-利用-llm-进行数据压缩" tabindex="-1"><a class="header-anchor" href="#_1-2-利用-llm-进行数据压缩" aria-hidden="true">#</a> 1.2 利用 LLM 进行数据压缩</h3><p>如果大语言模型具备越强的数据压缩能力，是否意味着它具备越强的 AGI 智能呢？<br> 可以举个例子来解释这种数据压缩能力 <br> 把LLM看做函数，根据已有的token，计算下一个token的在词表中的概率分布，根据输出的下一个token的概率分布进行算术编码，使用编码后的数据进行数据传输</p><h3 id="_1-3-压缩即智能" tabindex="-1"><a class="header-anchor" href="#_1-3-压缩即智能" aria-hidden="true">#</a> 1.3 压缩即智能</h3><p>如果 GPT 模型智能程度越高，NTP 预测得越准确，则其压缩效率就越高。所以，我们可以根据模型的压缩效率来评估模型的智能程度，模型压缩效率越高，则模型智能程度越高，这是目前 OpenAI 照此思路推进大模型研发方向的一个核心理念。</p><p>可以就这个思路深入思考两个相关问题。</p><ol><li>第一个问题：<br> 上面讲述内容是以数据压缩的视角来看待 LLM 的智能水准，问题是为何模型压缩能力越强，就代表了它具备更高的智能呢？</li></ol><p>相对大量数据，数据内在规律的描述，自然就短得多，而模型若能给出越短的描述，说明这个模型学到了更多的内在规律，所以就越聪明。是这个逻辑，举个例子。<br> 假设要传输的序列是连续质数数字序列<br> 下面是gpt-3.5-turbo和oasst两个模型的回答结果，</p><figure><img src="'+c+'" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>可以看出，gpt3.5 是学会了质数这种抽象概念的，否则这道题很难回答好，如果不理解这个概念，就会出现图右小模型这种不知所云的回答。这一方面说明大模型确实可以学习一些抽象概念，另一方面说明大模型在这方面表现确实比小模型要好。</p><ol start="2"><li>第二个问题：<br> 如果我们更严谨地来看，会发现尽管 LLM 训练过程可以看成是对数据的无损压缩，但是能够达成「无损」 的效果，并不单单靠 LLM，其实是「LLM + 算术编码」一起完成的。<br> 数据无损压缩 = LLM 模型的有损数据压缩能力 + 算术编码的编码补偿能力</li></ol><h2 id="二、gpt-模型对知识的提取过程" tabindex="-1"><a class="header-anchor" href="#二、gpt-模型对知识的提取过程" aria-hidden="true">#</a> 二、GPT 模型对知识的提取过程</h2><blockquote><p>论文：Dissecting Recall of Factual Associations in Auto-Regressive Language Models<br> 剖析自回归语言模型中事实关联的回忆</p></blockquote><figure><img src="'+p+'" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>经过研究，发现 GPT 在提取这条知识的时候，经历了明显的三阶段过程：</p><ol><li>主题补充<br> 单词 「music」是描述这个实体最后的、也是最关键的词汇，它的信息在顺着 Transformer block 往上走的过程中，先通过 Attention 把之前的修饰语「beats」 相关信息集成到「music」 对应位置。之后，随着 Transformer 层数越来越高，通过每个 Transformer Block 的 FFN 层，不断往「music」对应的 Embedding 里增加信息，所以随着信息往上层流动，「music」这个单词对应层数的 Embedding，能够触发越来越多的与「Beat music」 相关 「属性」 词汇。这是第一个步骤，整个过程总体发生在 Transformer 的低层。</li><li>关系传播<br> GPT 模型在 「by」单词这个位置，也就是 NTP 要产生输出 token 的最后一个位置，通过 Attention 把单词「own」 的信息集成到最后位置。这里需要注意一下，最后一个单词对应的 Transformer 位置是比较关键的，因为在它的最上层会给出 Next Token 输出。在推理过程中，GPT 会把输入上文中的重要信息通过 Attention 逐步集成到这个位置上来。这个操作也发生在 Transformer 的低层。</li><li>关系抽取<br> 在「by」 单词位置，也就是最后一个位置的 Transformer 高层，它在低层已经集成了单词「own」 的信息，这个信息在高层，通过 Attention 把「Beat music」 对应的属性「apple」 提取出来。具体提取动作是通过某个 Attention Head 来做到的，而且这篇文章证明了 Attention Head 里会编码 &lt; 实体 - 属性 &gt; 信息，具体例子可以参照下图，这点对应该是个新知识（过去一般认为 Attention 主要是用来进行信息比较和搬运的，它证明了 Attention 也会存储某种知识）</li></ol><h2 id="三、知识点在-transformer-中的分布" tabindex="-1"><a class="header-anchor" href="#三、知识点在-transformer-中的分布" aria-hidden="true">#</a> 三、知识点在 Transformer 中的分布</h2><figure><img src="'+d+'" alt="图片" tabindex="0" loading="lazy"><figcaption>单语义神经元与多语义神经元</figcaption></figure><p>目前发现 LLM 中存在很多单个的神经元，它们各自只对输入里某个特殊的知识点产生响应，也就是说只会被特定输入模式激活，对其它无关输入保持沉默。</p><ol><li>一个神经元编码一个知识，完美一一对应，这类 Transformer 中的神经元被称为 「单语义神经元」</li><li>很多不同语言含义的知识点都会激活某个神经元，这类神经元被称为「多语义神经元」。<br> Superposition 概念的含义是：假设要编码的特征的数量 n 远远多于网络参数 d，可找到办法，来用 d 维神经元编码比 d 数量大得多的 n 个特征，这种编码机制被称为 superposition，所以它是被发现存在 Transformer 结构里的一种信息压缩编码机制。</li></ol><figure><img src="'+h+'" alt="图片" tabindex="0" loading="lazy"><figcaption>重叠编码</figcaption></figure><p>Superposition 和「多语义神经元」 关系密切，目前发现 LLM 内部是这样做的（参考 Finding Neurons in a Haystack: Case Studies with Sparse Probing）：如上图所示，LLM 的 Superposition 机制是由多个「多语义神经元」 联合构成的，每个神经元会对输入中的多个不同知识点都有响应，所以仅仅通过一个 「多语义神经元」 是无法探测当前是对谁在做出响应，但是如果有多个对某个知识点都有响应的「多语义神经元」，在它们的响应之上做个线性组合，就能探测到输入中我们想识别的那个知识点（上图中蓝色部分)。也就是说，LLM 通过组合多个「多语义神经元」来对某个具体特征或知识点进行编码。所以，「多语义神经元」和知识点之间的关系是多对多的映射，一个知识点会激发很多对它进行编码的「多语义神经元」，而一个 「多语义神经元」也会对多个输入知识点产生响应。<br> 另外，「Polysemanticity and Capacity in Neural Networks」这个文章指出了：在模型学习过程中，为了增加模型参数的利用效率，</p><ul><li>「单语义神经元」 会被分配给重要特征，</li><li>「多语义神经元」会分配给不太重要的特征，</li></ul>',26);function L(b,T){const a=n("ExternalLinkIcon");return r(),o("div",null,[g,e("blockquote",null,[e("p",null,[t("知乎原文："),e("a",u,[t("https://zhuanlan.zhihu.com/p/632795115"),s(a)]),_,t(" 版权归属原作者，如涉侵权，请联系删除")])]),f])}const M=i(m,[["render",L],["__file","LLM重映世界(一).html.vue"]]);export{M as default};
