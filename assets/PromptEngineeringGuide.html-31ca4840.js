const t=JSON.parse('{"key":"v-4ef86a65","path":"/zh/posts/prompt/PromptEngineeringGuide.html","title":"Prompt工程指南","lang":"zh-CN","frontmatter":{"author":"hyb","icon":"wand-magic-sparkles","date":"2023-06-13T00:00:00.000Z","shortTitle":"Prompt工程指南","category":["提示技术"],"tag":["Prompt","CoT"],"description":"Prompt工程指南 Prompt工程是一种创新的自然语言生成技术，同时是一门比较新的学科。Prompt指通过提供简短的指令或问题，启发机器生成连贯的文本回复。Prompt工程通过开发和优化Prompt，从而有效地将语言模型 （LM） 用于各种应用程序和研究主题（如问答和算术推理）。","head":[["meta",{"property":"og:url","content":"https://github.com/HUSTAI/HUSTAI.github.io/zh/posts/prompt/PromptEngineeringGuide.html"}],["meta",{"property":"og:site_name","content":"知识分享"}],["meta",{"property":"og:title","content":"Prompt工程指南"}],["meta",{"property":"og:description","content":"Prompt工程指南 Prompt工程是一种创新的自然语言生成技术，同时是一门比较新的学科。Prompt指通过提供简短的指令或问题，启发机器生成连贯的文本回复。Prompt工程通过开发和优化Prompt，从而有效地将语言模型 （LM） 用于各种应用程序和研究主题（如问答和算术推理）。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T06:37:27.000Z"}],["meta",{"property":"article:author","content":"hyb"}],["meta",{"property":"article:tag","content":"Prompt"}],["meta",{"property":"article:tag","content":"CoT"}],["meta",{"property":"article:published_time","content":"2023-06-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T06:37:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Prompt工程指南\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-10T06:37:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"hyb\\"}]}"]]},"headers":[{"level":2,"title":"1 基础Prompt","slug":"_1-基础prompt","link":"#_1-基础prompt","children":[{"level":3,"title":"1.1 文本摘要","slug":"_1-1-文本摘要","link":"#_1-1-文本摘要","children":[]},{"level":3,"title":"1.2 信息抽取","slug":"_1-2-信息抽取","link":"#_1-2-信息抽取","children":[]},{"level":3,"title":"1.3 问答","slug":"_1-3-问答","link":"#_1-3-问答","children":[]},{"level":3,"title":"1.4 文本分类","slug":"_1-4-文本分类","link":"#_1-4-文本分类","children":[]},{"level":3,"title":"1.5 对话","slug":"_1-5-对话","link":"#_1-5-对话","children":[]},{"level":3,"title":"1.6 代码生成","slug":"_1-6-代码生成","link":"#_1-6-代码生成","children":[]},{"level":3,"title":"1.7 推理","slug":"_1-7-推理","link":"#_1-7-推理","children":[]}]},{"level":2,"title":"2 进阶Prompt","slug":"_2-进阶prompt","link":"#_2-进阶prompt","children":[{"level":3,"title":"2.1 Zero-shot Prompt","slug":"_2-1-zero-shot-prompt","link":"#_2-1-zero-shot-prompt","children":[]},{"level":3,"title":"2.2 Few-shot Prompt","slug":"_2-2-few-shot-prompt","link":"#_2-2-few-shot-prompt","children":[]},{"level":3,"title":"2.3 思维链 Prompt","slug":"_2-3-思维链-prompt","link":"#_2-3-思维链-prompt","children":[]},{"level":3,"title":"2.4 Zero-shot 思维链","slug":"_2-4-zero-shot-思维链","link":"#_2-4-zero-shot-思维链","children":[]},{"level":3,"title":"2.5 自洽性","slug":"_2-5-自洽性","link":"#_2-5-自洽性","children":[]},{"level":3,"title":"2.6 知识生成 Prompt","slug":"_2-6-知识生成-prompt","link":"#_2-6-知识生成-prompt","children":[]},{"level":3,"title":"2.7 自动提示工程师","slug":"_2-7-自动提示工程师","link":"#_2-7-自动提示工程师","children":[]}]},{"level":2,"title":"3 Prompt应用","slug":"_3-prompt应用","link":"#_3-prompt应用","children":[]},{"level":2,"title":"4 对抗性Prompt","slug":"_4-对抗性prompt","link":"#_4-对抗性prompt","children":[{"level":3,"title":"4.1 Prompt 注入","slug":"_4-1-prompt-注入","link":"#_4-1-prompt-注入","children":[]},{"level":3,"title":"4.2 Prompt 注入解决办法","slug":"_4-2-prompt-注入解决办法","link":"#_4-2-prompt-注入解决办法","children":[]},{"level":3,"title":"4.3 Prompt 泄露","slug":"_4-3-prompt-泄露","link":"#_4-3-prompt-泄露","children":[]}]},{"level":2,"title":"5 参考","slug":"_5-参考","link":"#_5-参考","children":[]}],"git":{"createdTime":1688961837000,"updatedTime":1688971047000,"contributors":[{"name":"Yibo He","email":"1137195420@qq.com","commits":3}]},"readingTime":{"minutes":20.5,"words":6149},"filePathRelative":"zh/posts/prompt/PromptEngineeringGuide.md","localizedDate":"2023年6月13日","excerpt":"<h1> Prompt工程指南</h1>\\n<p>Prompt工程是一种创新的自然语言生成技术，同时是一门比较新的学科。Prompt指通过提供简短的指令或问题，启发机器生成连贯的文本回复。Prompt工程通过开发和优化Prompt，从而有效地将语言模型 （LM） 用于各种应用程序和研究主题（如问答和算术推理）。</p>\\n","autoDesc":true}');export{t as data};