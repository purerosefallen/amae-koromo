(this["webpackJsonpamae-koromo"]=this["webpackJsonpamae-koromo"]||[]).push([[7],{236:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a),i=n(235),l=["#003f5c","#7a5195","#ef5675","#ffa600"],c=Math.PI/180,o=function(e){var t=e.lineHeight,n=void 0===t?24:t,a=e.innerLabelFontSize,i=void 0===a?"1rem":a;return function(e){var t=e.value;if(!t)return null;var a=t.toString().trim().split("\n"),l=e.viewBox,o=l.cx,u=l.cy,s=l.outerRadius,m=l.startAngle,f=function(e,t,n,a){return{x:e+Math.cos(-c*a)*n,y:t+Math.sin(-c*a)*n}}(o,u,s/2,m+function(e,t){return Math.sign(t-e)*Math.min(Math.abs(t-e),360)}(m,l.endAngle)/2),d=f.x,v=f.y-(a.length-1)*(n/2);return r.a.createElement("g",null,a.map((function(e,t){return r.a.createElement("text",{key:t,x:d,y:v+t*n,stroke:"#fff",strokeWidth:"0.5",fill:"#fff",fontSize:i,textAnchor:"middle",dominantBaseline:"central"},e)})))}};function u(e){return e.innerLabel||""}function s(e){return e.outerLabel||""}function m(e){var t=e.items,n=e.innerLabel,c=void 0===n?u:n,m=e.outerLabel,f=void 0===m?s:m,d=e.innerLabelLineHeight,v=void 0===d?24:d,b=e.startAngle,h=void 0===b?0:b,g=e.colors,p=void 0===g?l:g,E=e.innerLabelFontSize,L=void 0===E?"1rem":E,A=e.aspect,y=void 0===A?1:A,M=Object(a.useMemo)((function(){return Array(t.length).fill(0).map((function(e,t){return r.a.createElement(i.a,{fill:p[t%p.length],fillOpacity:1,key:"cell-".concat(t)})}))}),[t.length,p]),x=Object(a.useMemo)((function(){return o({lineHeight:v,innerLabelFontSize:L})}),[v,L]);return r.a.createElement(i.i,{width:"100%",aspect:y,height:"auto"},r.a.createElement(i.h,null,r.a.createElement(i.g,{isAnimationActive:!1,data:t,nameKey:"outerLabel",dataKey:"value",label:f,startAngle:h,endAngle:h+360},M,r.a.createElement(i.d,{valueAccessor:c,dataKey:void 0,position:"inside",fill:"#fff",content:x}))))}},546:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var a=n(0),r=n.n(a),i=n(236),l=n(26);function c(e,t,n){var a=Object(l.e)(t.map((function(t){return e[t]})));return t.map((function(t,r){return{value:e[t],outerLabel:n[r],innerLabel:Object(l.c)(e[t]/a)}}))}function o(e){var t=e.stats,n=Object(a.useMemo)((function(){return c(t,["\u7acb\u76f4\u548c\u4e86","\u526f\u9732\u548c\u4e86","\u9ed8\u542c\u548c\u4e86"],["\u7acb\u76f4","\u526f\u9732","\u9ed8\u542c"])}),[t]),l=Object(a.useMemo)((function(){return c(t,["\u653e\u94f3\u81f3\u7acb\u76f4","\u653e\u94f3\u81f3\u526f\u9732","\u653e\u94f3\u81f3\u9ed8\u542c"],["\u7acb\u76f4","\u526f\u9732","\u9ed8\u542c"])}),[t]);return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("h5",{className:"text-center mb-n3"},"\u548c\u724c\u65f6"),r.a.createElement(i.a,{aspect:1.5,items:n,startAngle:-45,innerLabelFontSize:"0.85rem"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("h5",{className:"text-center mb-n3"},"\u653e\u94f3\u81f3"),r.a.createElement(i.a,{aspect:1.5,items:l,startAngle:-45,innerLabelFontSize:"0.85rem"})))}}}]);
//# sourceMappingURL=7.e64ccd6c.chunk.js.map