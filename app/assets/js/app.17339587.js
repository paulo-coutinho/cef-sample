(function(e){function t(t){for(var o,s,r=t[0],i=t[1],u=t[2],b=0,f=[];b<r.length;b++)s=r[b],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},c=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a=n("6c02"),c=n("9d64"),s=n.n(c),r=Object(o["z"])("data-v-4741b2a4");Object(o["r"])("data-v-4741b2a4");var i={class:"navbar is-light is-fixed-top",role:"navigation","aria-label":"main navigation"},u={class:"navbar-brand"},l=Object(o["f"])("img",{src:s.a,alt:"Logo",style:{"max-width":"50px"}},null,-1),b=Object(o["e"])(" My App "),f={class:"section",style:{"text-align":"center","margin-top":"50px"}},p={class:"container"},d=Object(o["f"])("h1",{class:"title"},"My App",-1),m=Object(o["f"])("div",{class:"columns is-mobile is-centered"},[Object(o["f"])("div",{class:"column is-full"},[Object(o["f"])("img",{alt:"Logo",src:s.a,style:{width:"100px"}})])],-1),v={class:"columns"},O={class:"column"},j={class:"column"},g={class:"column"},h={class:"column"},y={class:"column"},w=Object(o["e"])(" About "),x={key:0,class:"columns is-mobile is-centered",style:{"margin-top":"30px","margin-bottom":"30px"}},k={class:"column is-full"},A={class:"message is-info"},_={class:"message-body"};Object(o["p"])();var M=r((function(e,t,n,a,c,s){var M=Object(o["u"])("router-link");return Object(o["o"])(),Object(o["c"])("div",null,[Object(o["f"])("nav",i,[Object(o["f"])("div",u,[Object(o["f"])(M,{to:{name:"Home"},class:"navbar-item"},{default:r((function(){return[l,b]})),_:1})])]),Object(o["f"])("section",f,[Object(o["f"])("div",p,[d,m,Object(o["f"])("div",v,[Object(o["f"])("div",O,[Object(o["f"])("button",{class:"button is-primary",onClick:t[1]||(t[1]=function(e){return s.showStuffMessage()})}," Show stuff message ")]),Object(o["f"])("div",j,[Object(o["f"])("button",{class:"button is-info",onClick:t[2]||(t[2]=function(e){return s.showCurrentTime()})}," Show current time ")]),Object(o["f"])("div",g,[Object(o["f"])("button",{class:"button is-info",onClick:t[3]||(t[3]=function(e){return s.bindingReverseData()})}," Binding: Reserse data ")]),Object(o["f"])("div",h,[Object(o["f"])("button",{class:"button is-info",onClick:t[4]||(t[4]=function(e){return s.bindingNetworkRequest()})}," Binding: Network request ")]),Object(o["f"])("div",y,[Object(o["f"])(M,{to:{name:"About"},tag:"button",class:"button is-warning"},{default:r((function(){return[w]})),_:1})])]),c.message?(Object(o["o"])(),Object(o["c"])("div",x,[Object(o["f"])("div",k,[Object(o["f"])("article",A,[Object(o["f"])("div",_,Object(o["w"])(c.message),1)])])])):Object(o["d"])("",!0)])])])})),S={name:"Home",props:{},data:function(){return{message:""}},created:function(){},methods:{showStuffMessage:function(){this.message=MyApp.getStuffMessage()},showCurrentTime:function(){this.message=MyApp.getCurrentTime()},bindingReverseData:function(){var e=this;this.message="Loading...";var t="my message";window.cefQuery({request:"App::ReverseData:"+t,onSuccess:function(t){e.message="Response: "+t},onFailure:function(t,n){e.message="Error: "+t+" / "+n}})},bindingNetworkRequest:function(){var e=this;this.message="Loading...";var t="https://httpbin.org/post";window.cefQuery({request:"App::NetworkRequest:"+t,onSuccess:function(t){e.message="Response: "+t},onFailure:function(t,n){e.message="Error: "+t+" / "+n}})}}};S.render=M,S.__scopeId="data-v-4741b2a4";var R=S,C=Object(o["z"])("data-v-7f02f088");Object(o["r"])("data-v-7f02f088");var P={class:"navbar is-light is-fixed-top",role:"navigation","aria-label":"main navigation"},q={class:"navbar-brand"},H=Object(o["f"])("img",{src:s.a,alt:"Logo",style:{"max-width":"50px"}},null,-1),L=Object(o["e"])(" My App "),T={class:"section",style:{"text-align":"center","margin-top":"50px"}},N={class:"container"},B=Object(o["f"])("h1",{class:"title"},"About",-1),D=Object(o["f"])("div",{class:"columns is-mobile is-centered"},[Object(o["f"])("div",{class:"column is-full"},[Object(o["f"])("img",{alt:"Logo",src:s.a,style:{width:"100px"}})])],-1),z={class:"columns"},E={class:"column"};Object(o["p"])();var F=C((function(e,t,n,a,c,s){var r=Object(o["u"])("router-link");return Object(o["o"])(),Object(o["c"])("div",null,[Object(o["f"])("nav",P,[Object(o["f"])("div",q,[Object(o["f"])(r,{to:{name:"Home"},class:"navbar-item"},{default:C((function(){return[H,L]})),_:1})])]),Object(o["f"])("section",T,[Object(o["f"])("div",N,[B,D,Object(o["f"])("div",z,[Object(o["f"])("div",E,[Object(o["f"])("button",{class:"button is-primary",onClick:t[1]||(t[1]=function(e){return s.back()})},"Back")])])])])])})),I={name:"About",props:{},data:function(){return{}},created:function(){},methods:{back:function(){this.$router.push({name:"Home",params:{}})}}};I.render=F,I.__scopeId="data-v-7f02f088";var J=I;function Q(e,t){return Object(o["o"])(),Object(o["c"])("h1",null,"Oops, it looks like the page you're looking for doesn't exist.")}const $={};$.render=Q;var G=$,K=[{path:"/",name:"Home",component:R},{path:"/index.html",name:"Home",component:R},{path:"/about",name:"About",component:J},{path:"/:catchAll(.*)",component:G}],U=Object(a["a"])({history:Object(a["b"])(),routes:K}),V=U,W=n("bc3a"),X=n.n(W),Y=n("2106"),Z=n.n(Y);function ee(e,t,n,a,c,s){var r=Object(o["u"])("router-view");return Object(o["o"])(),Object(o["c"])(r)}var te={name:"App",components:{}};te.render=ee;var ne=te;n("a0d8");var oe=Object(o["b"])(ne);oe.use(V),oe.use(Z.a,X.a),oe.mount("#app")},"9d64":function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},a0d8:function(e,t,n){}});
//# sourceMappingURL=app.17339587.js.map