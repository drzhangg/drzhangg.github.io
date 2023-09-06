const e=JSON.parse('{"key":"v-00d74a03","path":"/posts/create-home-gateway-with-surge-and-mac-mini.html","title":"\u4F7F\u7528 Surge && Mac mini \u6784\u5EFA\u5BB6\u5EAD\u7F51\u5173","lang":"zh-CN","frontmatter":{"title":"\u4F7F\u7528 Surge && Mac mini \u6784\u5EFA\u5BB6\u5EAD\u7F51\u5173","date":"2023-04-11T00:00:00.000Z","author":"\u8000\u8000","layout":"Post","useHeaderImage":true,"headerImage":"https://i.yaoyao.io/blog/unsplash-macmini-1.jpg","headerMask":"rgba(40,57,101, .4)","headerImageCredit":"Ed Orozco","headerImageCreditLink":"https://unsplash.com/photos/IITaO-_w58A","catalog":true,"hide":false},"excerpt":"","headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00","children":[]},{"level":2,"title":"\u6211\u7684\u8BBE\u5907","slug":"\u6211\u7684\u8BBE\u5907","children":[]},{"level":2,"title":"\u8BBE\u7F6E\u9759\u6001 IP","slug":"\u8BBE\u7F6E\u9759\u6001-ip","children":[]},{"level":2,"title":"\u914D\u7F6E DHCP \u670D\u52A1","slug":"\u914D\u7F6E-dhcp-\u670D\u52A1","children":[{"level":3,"title":"\u5F00\u542F DHCP \u670D\u52A1","slug":"\u5F00\u542F-dhcp-\u670D\u52A1","children":[]},{"level":3,"title":"\u9009\u62E9\u7F51\u7EDC\u8BBE\u5907","slug":"\u9009\u62E9\u7F51\u7EDC\u8BBE\u5907","children":[]},{"level":3,"title":"\u68C0\u67E5 DHCP","slug":"\u68C0\u67E5-dhcp","children":[]},{"level":3,"title":"\u914D\u7F6E DHCP \u7F51\u7EDC\u53C2\u6570","slug":"\u914D\u7F6E-dhcp-\u7F51\u7EDC\u53C2\u6570","children":[]},{"level":3,"title":"\u67E5\u770B\u8BBE\u5907","slug":"\u67E5\u770B\u8BBE\u5907","children":[]}]},{"level":2,"title":"\u5F00\u542F\u7F51\u5173\u6A21\u5F0F","slug":"\u5F00\u542F\u7F51\u5173\u6A21\u5F0F","children":[{"level":3,"title":"\u542F\u52A8\u589E\u5F3A\u6A21\u5F0F","slug":"\u542F\u52A8\u589E\u5F3A\u6A21\u5F0F","children":[]},{"level":3,"title":"\u624B\u52A8\u63A5\u7BA1\u8BBE\u5907","slug":"\u624B\u52A8\u63A5\u7BA1\u8BBE\u5907","children":[]},{"level":3,"title":"\u9009\u62E9\u7531 Surge \u63A5\u7BA1","slug":"\u9009\u62E9\u7531-surge-\u63A5\u7BA1","children":[]},{"level":3,"title":"\u91CD\u542F\u88AB\u63A5\u7BA1\u8BBE\u5907\u7F51\u7EDC","slug":"\u91CD\u542F\u88AB\u63A5\u7BA1\u8BBE\u5907\u7F51\u7EDC","children":[]},{"level":3,"title":"\u67E5\u770B\u88AB\u63A5\u7BA1\u8BBE\u5907\u6D41\u91CF","slug":"\u67E5\u770B\u88AB\u63A5\u7BA1\u8BBE\u5907\u6D41\u91CF","children":[]},{"level":3,"title":"\u8BBE\u7F6E\u56FA\u5B9A IP","slug":"\u8BBE\u7F6E\u56FA\u5B9A-ip","children":[]}]},{"level":2,"title":"\u7BA1\u7406 Surge","slug":"\u7BA1\u7406-surge","children":[{"level":3,"title":"\u7BA1\u7406\u914D\u7F6E\u6587\u4EF6","slug":"\u7BA1\u7406\u914D\u7F6E\u6587\u4EF6","children":[]},{"level":3,"title":"\u8FDC\u7A0B\u7BA1\u7406","slug":"\u8FDC\u7A0B\u7BA1\u7406","children":[]}]},{"level":2,"title":"\u4EE3\u7406\u7B56\u7565&&\u89C4\u5219","slug":"\u4EE3\u7406\u7B56\u7565-\u89C4\u5219","children":[{"level":3,"title":"\u4EE3\u7406\u7B56\u7565","slug":"\u4EE3\u7406\u7B56\u7565","children":[]},{"level":3,"title":"\u89C4\u5219","slug":"\u89C4\u5219","children":[]}]},{"level":2,"title":"Surge Ponte","slug":"surge-ponte","children":[{"level":3,"title":"\u542F\u7528 Surge Ponte","slug":"\u542F\u7528-surge-ponte","children":[]},{"level":3,"title":"\u901A\u8FC7\u4EE3\u7406\u8FDB\u884C NAT \u7A7F\u900F","slug":"\u901A\u8FC7\u4EE3\u7406\u8FDB\u884C-nat-\u7A7F\u900F","children":[]}]},{"level":2,"title":"\u603B\u89C8","slug":"\u603B\u89C8","children":[]},{"level":2,"title":"\u5E38\u89C1\u95EE\u9898","slug":"\u5E38\u89C1\u95EE\u9898","children":[{"level":3,"title":"\u88AB\u63A5\u7BA1\u7684\u8BBE\u5907\u4E0D\u8981\u624B\u52A8\u8BBE\u7F6EDNS","slug":"\u88AB\u63A5\u7BA1\u7684\u8BBE\u5907\u4E0D\u8981\u624B\u52A8\u8BBE\u7F6Edns","children":[]}]},{"level":2,"title":"\u53C2\u8003\u8D44\u6599","slug":"\u53C2\u8003\u8D44\u6599","children":[]}],"git":{},"readingTime":{"minutes":15,"words":3328},"filePathRelative":"posts/create-home-gateway-with-surge-and-mac-mini.md"}');export{e as data};
