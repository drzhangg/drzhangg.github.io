import{_ as p,r,o as l,c as o,a,b as e,w as n,d as t,e as c}from"./app.9117781d.js";const i={},m={class:"table-of-contents"},k=c(`<h3 id="_1-kubernetes-service\u5B9E\u73B0\u7EC6\u8282" tabindex="-1"><a class="header-anchor" href="#_1-kubernetes-service\u5B9E\u73B0\u7EC6\u8282" aria-hidden="true">#</a> 1.kubernetes service\u5B9E\u73B0\u7EC6\u8282</h3><h4 id="_1-1-iptables\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-1-iptables\u6A21\u5F0F" aria-hidden="true">#</a> 1.1 iptables\u6A21\u5F0F</h4><p>\u4E0B\u9762\u4EE5\u4E00\u4E2A service \u4E3A\u4F8B\uFF0C\u5206\u6790 kube-proxy \u521B\u5EFA\u7684 iptables \u89C4\u5219\uFF1A</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>service
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">role</span><span class="token punctuation">:</span> service
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">3306</span>
      <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">30964</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">mysql-service</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
</code></pre></div><p>\u5728\u672C\u4F8B\u4E2D\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A\u540D\u4E3Amysql-service\u7684\u670D\u52A1\u3002\u8BE5 \u670D\u52A1\u7684\u8BBF\u95EE\u7AEF\u53E3\u662F3306\uFF0CNodePort\u662F30964\uFF0C\u5BF9\u5E94\u7684\u540E\u7AEFPod\u7684\u7AEF\u53E3\u4E5F\u662F 3306\u3002\u53E6\u5916\uFF0C\u867D\u7136\u4E0A\u9762\u6CA1\u6709\u663E\u793A\uFF0C\u4F46\u662F\u8BE5\u670D\u52A1\u7684Cluster IP\u662F 10.254.162.44\u3002mysql-service\u670D\u52A1\u6709\u4E24\u4E2A\u540E\u7AEFPod\uFF0CIP\u5206\u522B\u662F 192.168.125.129\u548C192.168.125.131\u3002</p><p>kube-proxy \u4E3A\u8BE5\u670D\u52A1\u521B\u5EFA\u7684 iptables \u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># iptables -S -t nat</span>
<span class="token parameter variable">-A</span> PREROUTING <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;kubernetes service portals&quot;</span> <span class="token parameter variable">-j</span> KUBE-SERVICES
<span class="token parameter variable">-A</span> OUTPUT <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;kubernetes service portals&quot;</span> <span class="token parameter variable">-j</span> KUBE-SERVICES
<span class="token parameter variable">-A</span> POSTROUTING <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;kubernetes postrouting rules&quot;</span> <span class="token parameter variable">-j</span> KUBE-POSTROUTING
<span class="token parameter variable">-A</span> KUBE-MARK-MASQ <span class="token parameter variable">-j</span> MARK --set-xmark 0x4000/0x4000
<span class="token parameter variable">-A</span> KUBE-NODEPORTS <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;default/mysql-service:&quot;</span> <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">30964</span> <span class="token parameter variable">-j</span> KUBE-MARK-MASQ
<span class="token parameter variable">-A</span> KUBE-NODEPORTS <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;default/mysql-service:&quot;</span> <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">30964</span> <span class="token parameter variable">-j</span> KUBE-SVC-67RL4FN6JRUPOJYM
<span class="token parameter variable">-A</span> KUBE-SEP-ID6YWIT3F6WNZ47P <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.125.129/32 <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;default/mysql-service:&quot;</span> <span class="token parameter variable">-j</span> KUBE-MARK-MASQ
<span class="token parameter variable">-A</span> KUBE-SEP-ID6YWIT3F6WNZ47P <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;default/mysql-service:&quot;</span> <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">-j</span> DNAT --to-destination-s <span class="token number">192.168</span>.125.129:3306
<span class="token parameter variable">-A</span> KUBE-SEP-IN2YML2VIFH5RO2T <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.125.131/32 <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;default/mysql-service:&quot;</span> <span class="token parameter variable">-j</span> KUBE-MARK-MASQ
<span class="token parameter variable">-A</span> KUBE-SEP-IN2YML2VIFH5RO2T <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;default/mysql-service:&quot;</span> <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">-j</span> DNAT --to-destination-s <span class="token number">192.168</span>.125.131:3306
<span class="token parameter variable">-A</span> KUBE-SERVICES <span class="token parameter variable">-d</span> <span class="token number">10.254</span>.162.44/32 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;default/mysql-service: cluster IP&quot;</span> <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">3306</span> <span class="token parameter variable">-j</span> KUBE-SVC-67RL4FN6JRUPOJYM
<span class="token parameter variable">-A</span> KUBE-SERVICES <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;kubernetes service nodeports; NOTE: this must be the last rule in this chain&quot;</span> <span class="token parameter variable">-m</span> addrtype --dst-type LOCAL <span class="token parameter variable">-j</span> KUBE-NODEPORTS
<span class="token parameter variable">-A</span> KUBE-SVC-67RL4FN6JRUPOJYM <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;default/mysql-service:&quot;</span> <span class="token parameter variable">-m</span> statistic <span class="token parameter variable">--mode</span> random <span class="token parameter variable">--probability</span> <span class="token number">0.500000000</span> <span class="token parameter variable">-j</span> KUBE-SEP-ID6YWIT3F6WNZ47P
<span class="token parameter variable">-A</span> KUBE-SVC-67RL4FN6JRUPOJYM <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;default/mysql-service:&quot;</span> <span class="token parameter variable">-j</span> KUBE-SEP-IN2YML2VIFH5RO2T
<span class="token punctuation">..</span>.

</code></pre></div><p>\u4E0B\u9762\u4F1A\u9010\u6761\u5206\u6790\u3002\u9996\u5148\uFF0C\u5982\u679C\u901A\u8FC7\u8282\u70B9\u768430964\u7AEF\u53E3\u8BBF\u95EE NodePort\uFF0C\u5219\u4F1A\u8FDB\u5165\u4EE5\u4E0B\u94FE\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token parameter variable">-A</span> KUBE-NODEPORTS <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;default/mysql-service:&quot;</span> <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">30964</span> <span class="token parameter variable">-j</span> KUBE-MARK-MASQ
<span class="token parameter variable">-A</span> KUBE-NODEPORTS <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;default/mysql-service:&quot;</span> <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">30964</span> <span class="token parameter variable">-j</span> KUBE-SVC-67RL4FN6JRUPOJYM
</code></pre></div><p>kube-proxy \u9488\u5BF9 <strong>NodePort</strong> \u6D41\u91CF\u5165\u53E3\u4E13\u95E8\u521B\u5EFA\u4E86 <strong>KUBE-NODEPORTS</strong> \u94FE\u3002\u5728\u8FD9\u91CC\uFF0CKUBE-NODEPORTS \u94FE\u8FDB\u4E00\u6B65\u8DF3\u8F6C\u5230 KUBE-SVC-67RL4FN6JRUPOJYM\u94FE\u3002</p><p>\u518D\u770B\u4E0B\u9762\u7684 iptables\u89C4\u5219\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token parameter variable">-A</span> KUBE-SVC-67RL4FN6JRUPOJYM <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;default/mysql-service:&quot;</span> <span class="token parameter variable">-m</span> statistic <span class="token parameter variable">--mode</span> random <span class="token parameter variable">--probability</span> <span class="token number">0.500000000</span> <span class="token parameter variable">-j</span> KUBE-SEP-ID6YWIT3F6WNZ47P
<span class="token parameter variable">-A</span> KUBE-SVC-67RL4FN6JRUPOJYM <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;default/mysql-service:&quot;</span> <span class="token parameter variable">-j</span> KUBE-SEP-IN2YML2VIFH5RO2T
</code></pre></div><p>\u8FD9\u91CC\u5229\u7528 iptables \u7684random \u6A21\u5757\uFF0C\u4F7F\u8FDE\u63A5\u670950%\u7684\u6982\u7387\u8FDB\u5165 <strong>KUBE-SEP-ID6YWIT3F6WNZ47P</strong> \u94FE\uFF0C50%\u7684\u6982\u7387\u8FDB\u5165 <strong>KUBE-SEP-IN2YML2VIFH5RO2T</strong>\u3002\u56E0\u6B64\uFF0Ckube-proxy\u7684 iptables \u6A21\u5F0F\u91C7\u7528\u968F\u673A\u6570\u5B9E\u73B0\u4E86\u670D\u52A1\u7684\u8D1F\u8F7D\u5747\u8861\u3002</p><p>KUBE-SEP-ID6YWIT3F6WNZ47P \u94FE\u7684\u5177\u4F53\u4F5C\u7528\u5C31\u662F\u5C06\u8BF7\u6C42\u901A\u8FC7 DNAT \u53D1\u9001\u5230 192.168.125.129\u76843306\u7AEF\u53E3\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token parameter variable">-A</span> KUBE-SEP-ID6YWIT3F6WNZ47P <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.125.129/32 <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;default/mysql-service:&quot;</span> <span class="token parameter variable">-j</span> KUBE-MARK-MASQ
<span class="token parameter variable">-A</span> KUBE-SEP-ID6YWIT3F6WNZ47P <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;default/mysql-service:&quot;</span> <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">-j</span> DNAT --to-destination-s <span class="token number">192.168</span>.125.129:3306
</code></pre></div><p>\u540C\u7406\uFF0CKUBE-SEP-IN2YML2VIFH5RO2T \u7684\u4F5C\u7528\u662F\u901A\u8FC7 DNAT \u53D1\u9001\u5230 192.168.125.131\u76843306\u7AEF\u53E3\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token parameter variable">-A</span> KUBE-SEP-IN2YML2VIFH5RO2T <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.125.131/32 <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;default/mysql-service:&quot;</span> <span class="token parameter variable">-j</span> KUBE-MARK-MASQ
<span class="token parameter variable">-A</span> KUBE-SEP-IN2YML2VIFH5RO2T <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;default/mysql-service:&quot;</span> <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">-j</span> DNAT --to-destination-s <span class="token number">192.168</span>.125.131:3306
</code></pre></div><p>\u5206\u6790\u5B8C NodePort \u7684 iptables \u89C4\u5219\u540E\uFF0C\u63A5\u4E0B\u6765\u4ECB\u7ECD <strong>Cluster IP</strong> \u7684\u8BBF\u95EE\u65B9\u5F0F\u3002Cluster IP\u7684\u8BBF\u95EE\u5165\u53E3\u94FE\u662F <strong>KUBE-SERVICES</strong>\u3002\u76F4\u63A5\u8BBF\u95EECluster IP(10.254.162.44)\u76843306\u7AEF\u53E3\u4F1A\u8DF3\u8F6C\u5230 KUBE-SVC-67RL4FN6JRUPOJYM \u94FE\uFF0C\u5982\u4E0B\u6240\u793A:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token parameter variable">-A</span> KUBE-SERVICES <span class="token parameter variable">-d</span> <span class="token number">10.254</span>.162.44/32 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;default/mysql-service: cluster IP&quot;</span> <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">3306</span> <span class="token parameter variable">-j</span> KUBE-SVC-67RL4FN6JRUPOJYM
</code></pre></div><p>\u63A5\u4E0B\u6765\u7684\u8DF3\u8F6C\u65B9\u5F0F\u540C\u4E0A\u6587\u5206\u6790\u7684NodePort\u65B9\u5F0F\u7C7B\u4F3C\uFF0C\u8FD9\u91CC\u4E0D\u518D\u8D58\u8FF0\u3002</p><p>\u7EFC\u4E0A\u6240\u8FF0\uFF0Ciptables \u6A21\u5F0F\u6700\u4E3B\u8981\u7684\u94FE\u662F KUBE-SERVICES\u3001KUBE-SVC-* \u548C KUBE-SEP-*\u3002</p><ul><li>KUBE-SERVICES \u94FE\u662F\u8BBF\u95EE\u96C6\u7FA4\u5185\u670D\u52A1\u7684\u6570\u636E\u5305\u5165\u53E3\u70B9\uFF0C\u5B83\u4F1A\u6839\u636E\u5339\u914D\u5230\u7684\u76EE\u6807IP:port \u5C06\u6570\u636E\u5305\u5206\u53D1\u5230\u76F8\u5E94\u7684 KUBE-SVC-* \u94FE\u3002</li><li>KUBE-SVC-* \u94FE\u76F8\u5F53\u4E8E\u4E00\u4E2A\u8D1F\u8F7D\u5747\u8861\u5668\uFF0C\u5B83\u4F1A\u5C06\u6570\u636E\u5305\u5E73\u5747\u5206\u53D1\u5230 KUBE-SVC-* \u94FE\u3002\u6BCF\u4E2A KUBE-SVC-* \u94FE\u540E\u9762\u7684 KUBE-SEP-* \u94FE\u90FD\u548C Service \u7684\u540E\u7AEF Pod\u6570\u91CF\u4E00\u6837\u3002</li><li>KUBE-SEP-*\u94FE\u901A\u8FC7DNAT\u5C06\u8FDE\u63A5\u7684\u76EE\u7684\u5730\u5740\u548C\u7AEF\u53E3\u4ECEService\u7684 IP:port\u66FF\u6362\u4E3A\u540E\u7AEF Pod \u7684 IP:port\uFF0C\u4ECE\u800C\u5C06\u6D41\u91CF\u8F6C\u53D1\u5230\u76F8\u5E94\u7684Pod\u3002</li></ul><h4 id="cluster-ip\u7684iptables-\u8BF7\u6C42\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#cluster-ip\u7684iptables-\u8BF7\u6C42\u6D41\u7A0B" aria-hidden="true">#</a> Cluster ip\u7684iptables \u8BF7\u6C42\u6D41\u7A0B</h4><div class="language-bash ext-sh"><pre class="language-bash"><code>PREROUTING   -<span class="token operator">&gt;</span>   KUBE-SERVICES   -<span class="token operator">&gt;</span>   KUBE-SVC-XXX   -<span class="token operator">&gt;</span>   KUBE-SVC-XXX   -<span class="token operator">&gt;</span>   KUBE-SEP-XXX   -<span class="token operator">&gt;</span>   target ip:port
</code></pre></div><h4 id="nodeport-\u7684-iptables-\u8BF7\u6C42\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#nodeport-\u7684-iptables-\u8BF7\u6C42\u6D41\u7A0B" aria-hidden="true">#</a> NodePort \u7684 iptables \u8BF7\u6C42\u6D41\u7A0B</h4><div class="language-bash ext-sh"><pre class="language-bash"><code>PREROUTING   -<span class="token operator">&gt;</span>   KUBE-SERVICES   -<span class="token operator">&gt;</span>   KUBE-NODEPORTS   -<span class="token operator">&gt;</span>   KUBE-SVC-XXX   -<span class="token operator">&gt;</span>   KUBE-SEP-XXX   -<span class="token operator">&gt;</span>   target ip:port
</code></pre></div><blockquote><p>DNAT\uFF1A\u7531\u5916\u90E8\u8BBF\u95EE\u5185\u90E8\u670D\u52A1\u65F6\uFF0C\u4F1A\u5C06\u516C\u7F51ip\u8F6C\u6362\u4E3A\u79C1\u7F51ip</p></blockquote><h4 id="_1-2-ipvs" tabindex="-1"><a class="header-anchor" href="#_1-2-ipvs" aria-hidden="true">#</a> 1.2 ipvs</h4><p>zhelishi ipvs</p><h3 id="_2-calico" tabindex="-1"><a class="header-anchor" href="#_2-calico" aria-hidden="true">#</a> 2.calico</h3>`,30);function b(u,v){const s=r("router-link");return l(),o("div",null,[a("nav",m,[a("ul",null,[a("li",null,[e(s,{to:"#_1-kubernetes-service\u5B9E\u73B0\u7EC6\u8282"},{default:n(()=>[t("1.kubernetes service\u5B9E\u73B0\u7EC6\u8282")]),_:1})]),a("li",null,[e(s,{to:"#_2-calico"},{default:n(()=>[t("2.calico")]),_:1})])])]),k])}var E=p(i,[["render",b],["__file","2023-09-06-kubernetes-service-network.html.vue"]]);export{E as default};
