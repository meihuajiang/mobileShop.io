(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5578850b"],{"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,s={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==s.call(t)?i(t):o(r(t))}},"0d79":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("ade3");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var a=n("2f62"),i=n("781b"),c={components:{Loading:i["a"]},data:function(){return{loadingStatus:!0}},computed:s({},Object(a["c"])(["categoryList","locationCity","searchHistoryList","browseHistoryList","userToken","orderPaymentList","addressInfo","tempAddress"])),methods:s({},Object(a["d"])({setOrderPaymentList:"ORDER_PAYMENT_LIST",setTempAddress:"TEMP_ADDRESS"}),{},Object(a["b"])(["setCategoryList","setLocationCity","setSearchHistory","deleteSearchHistory","setBrowseHistory","deleteOneBrowseHistory","setUserToken","deleteUserToken","setAddressInfo","deleteAddressInfo"]),{goGoodsDetails:function(t){this.$router.push({name:"GoodsDetails",query:{goodsId:t.goodsId||t.id}})},back:function(){this.$router.go(-1)}})}},"11c7":function(t,e,n){},4779:function(t,e,n){t.exports=n.p+"img/loading2.69a70c73.gif"},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),s=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||a(e,t,{value:s.f(t)})}},"781b":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loadingStatus?n("div",{staticClass:"loading-container"},[n("van-loading",{staticClass:"loading"}),n("img",{staticClass:"loading-img",attrs:{src:t.loadingImg}})],1):t._e()},o=[],s={name:"Loading",props:{loadingStatus:{type:Boolean,default:!1}},data:function(){return{loadingImg:n("4779"),color:"#F79709"}}},a=s,i=(n("a667"),n("2877")),c=Object(i["a"])(a,r,o,!1,null,"41db654a",null);e["a"]=c.exports},"89cb":function(t,e,n){t.exports=n.p+"img/avatar.3f437a56.jpg"},a144:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user"},[r("top-bar",{attrs:{title:"个人中心"}}),t.userToken&&t.userInfo?r("section",{staticClass:"user-info"},[r("img",{staticClass:"avatar",attrs:{src:t.userInfo.avatar}}),r("p",{staticClass:"use-name"},[t._v("欢迎您："+t._s(t.userInfo.userName))]),r("p",{on:{click:t.logout}},[t._v("退出登录")]),r("van-icon",{staticClass:"setting",attrs:{name:"setting"},on:{click:function(e){t.isShowSetting=!0}}})],1):r("section",{staticClass:"user-info"},[r("img",{staticClass:"avatar",attrs:{src:n("89cb")}}),r("p",{on:{click:function(e){return t.$router.push({name:"Login"})}}},[t._v("登录 / 注册")])]),r("section",{staticClass:"order-index-wrapper"},[r("div",{staticClass:"order-index-list"},[r("section",{staticClass:"order-all",on:{click:function(e){return t.$router.push({name:"OrderManage"})}}},[r("span",[t._v("订单管理")]),r("van-icon",{staticClass:"icon",attrs:{name:"arrow"}})],1),r("ul",t._l(t.orderIndex,(function(e,n){return r("li",{key:e.status,staticClass:"order-index-item",on:{click:function(n){return t.goOrderManage(e.status)}}},[r("van-icon",{staticClass:"icon",attrs:{name:e.icon}}),r("p",{staticClass:"title"},[t._v(t._s(e.title))]),t.orderNum.length&&0!==t.orderNum[n]?r("span",{staticClass:"order-num"},[t._v(t._s(t.orderNum[n]))]):t._e()],1)})),0)])]),r("section",{staticClass:"other-entry"},[r("div",{staticClass:"collection",on:{click:function(e){return t.$router.push({name:"Collection"})}}},[r("van-icon",{staticClass:"small-icon",attrs:{name:"star-o"}}),r("span",[t._v("收藏商品")]),r("van-icon",{staticClass:"arrow-icon",attrs:{name:"arrow"}})],1),r("div",{staticClass:"address",on:{click:function(e){return t.$router.push({name:"AddressManage"})}}},[r("van-icon",{staticClass:"small-icon",attrs:{name:"location-o"}}),r("span",[t._v("地址管理")]),r("van-icon",{staticClass:"arrow-icon",attrs:{name:"arrow"}})],1),r("div",{staticClass:"browse-history",on:{click:function(e){return t.$router.push({name:"BrowseHistory"})}}},[r("van-icon",{staticClass:"small-icon",attrs:{name:"eye-o"}}),r("span",[t._v("最近浏览")]),r("van-icon",{staticClass:"arrow-icon",attrs:{name:"arrow"}})],1),r("div",{staticClass:"browse-history",on:{click:function(e){return t.$router.push({name:"BrowseHistory"})}}},[r("van-icon",{staticClass:"small-icon",attrs:{name:"gem-o"}}),r("span",[t._v("我的礼券")]),r("van-icon",{staticClass:"arrow-icon",attrs:{name:"arrow"}})],1),r("div",{staticClass:"browse-history",on:{click:function(e){return t.$router.push({name:"BrowseHistory"})}}},[r("van-icon",{staticClass:"small-icon",attrs:{name:"friends-o"}}),r("span",[t._v("关于我们")]),r("van-icon",{staticClass:"arrow-icon",attrs:{name:"arrow"}})],1),r("div",{staticClass:"browse-history",on:{click:function(e){return t.$router.push({name:"BrowseHistory"})}}},[r("van-icon",{staticClass:"small-icon",attrs:{name:"service-o"}}),r("span",[t._v("客服反馈")]),r("van-icon",{staticClass:"arrow-icon",attrs:{name:"arrow"}})],1)]),r("user-info",{attrs:{isShowSetting:t.isShowSetting},on:{closeSetting:function(e){t.isShowSetting=e}}})],1)},o=[],s=n("b084"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"login"})},i=[],c={name:"index"},u=c,l=n("2877"),f=Object(l["a"])(u,a,i,!1,null,"48671954",null),d=f.exports,p=n("0d79"),b={name:"User",mixins:[p["a"]],inject:["reload"],components:{TopBar:s["a"],UserInfo:d},data:function(){return{orderIndex:[{icon:"balance-pay",status:1,title:"待付款"},{icon:"logistics",status:2,title:"待发货"},{icon:"points",status:3,title:"待收货"},{icon:"like-o",status:4,title:"已完成"},{icon:"good-job-o",status:5,title:"评价"}],userInfo:null,orderNum:[],isShowSetting:!1}},watch:{},created:function(){},methods:{logout:function(){}}},m=b,v=(n("dd5c"),Object(l["a"])(m,r,o,!1,null,"0664bb50",null));e["default"]=v.exports},a31b:function(t,e,n){},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),s=n("d066"),a=n("c430"),i=n("83ab"),c=n("4930"),u=n("fdbf"),l=n("d039"),f=n("5135"),d=n("e8b5"),p=n("861d"),b=n("825a"),m=n("7b0b"),v=n("fc6a"),g=n("c04e"),h=n("5c6c"),y=n("7c73"),w=n("df75"),O=n("241c"),C=n("057f"),S=n("7418"),j=n("06cf"),k=n("9bf2"),_=n("d1e7"),P=n("9112"),B=n("6eeb"),E=n("5692"),$=n("f772"),I=n("d012"),x=n("90e3"),D=n("b622"),T=n("e538"),L=n("746f"),N=n("d44e"),A=n("69f3"),H=n("b727").forEach,M=$("hidden"),J="Symbol",U="prototype",F=D("toPrimitive"),R=A.set,G=A.getterFor(J),q=Object[U],Q=o.Symbol,W=s("JSON","stringify"),Y=j.f,z=k.f,K=C.f,V=_.f,X=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),nt=E("wks"),rt=o.QObject,ot=!rt||!rt[U]||!rt[U].findChild,st=i&&l((function(){return 7!=y(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Y(q,e);r&&delete q[e],z(t,e,n),r&&t!==q&&z(q,e,r)}:z,at=function(t,e){var n=X[t]=y(Q[U]);return R(n,{type:J,tag:t,description:e}),i||(n.description=e),n},it=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},ct=function(t,e,n){t===q&&ct(Z,e,n),b(t);var r=g(e,!0);return b(n),f(X,r)?(n.enumerable?(f(t,M)&&t[M][r]&&(t[M][r]=!1),n=y(n,{enumerable:h(0,!1)})):(f(t,M)||z(t,M,h(1,{})),t[M][r]=!0),st(t,r,n)):z(t,r,n)},ut=function(t,e){b(t);var n=v(e),r=w(n).concat(bt(n));return H(r,(function(e){i&&!ft.call(n,e)||ct(t,e,n[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},ft=function(t){var e=g(t,!0),n=V.call(this,e);return!(this===q&&f(X,e)&&!f(Z,e))&&(!(n||!f(this,e)||!f(X,e)||f(this,M)&&this[M][e])||n)},dt=function(t,e){var n=v(t),r=g(e,!0);if(n!==q||!f(X,r)||f(Z,r)){var o=Y(n,r);return!o||!f(X,r)||f(n,M)&&n[M][r]||(o.enumerable=!0),o}},pt=function(t){var e=K(v(t)),n=[];return H(e,(function(t){f(X,t)||f(I,t)||n.push(t)})),n},bt=function(t){var e=t===q,n=K(e?Z:v(t)),r=[];return H(n,(function(t){!f(X,t)||e&&!f(q,t)||r.push(X[t])})),r};if(c||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=x(t),n=function(t){this===q&&n.call(Z,t),f(this,M)&&f(this[M],e)&&(this[M][e]=!1),st(this,e,h(1,t))};return i&&ot&&st(q,e,{configurable:!0,set:n}),at(e,t)},B(Q[U],"toString",(function(){return G(this).tag})),B(Q,"withoutSetter",(function(t){return at(x(t),t)})),_.f=ft,k.f=ct,j.f=dt,O.f=C.f=pt,S.f=bt,T.f=function(t){return at(D(t),t)},i&&(z(Q[U],"description",{configurable:!0,get:function(){return G(this).description}}),a||B(q,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:Q}),H(w(nt),(function(t){L(t)})),r({target:J,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=Q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!i},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),r({target:"Object",stat:!0,forced:l((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(m(t))}}),W){var mt=!c||l((function(){var t=Q();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));r({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,n){var r,o=[t],s=1;while(arguments.length>s)o.push(arguments[s++]);if(r=e,(p(e)||void 0!==t)&&!it(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),o[1]=e,W.apply(null,o)}})}Q[U][F]||P(Q[U],F,Q[U].valueOf),N(Q,J),I[M]=!0},a667:function(t,e,n){"use strict";var r=n("a31b"),o=n.n(r);o.a},b084:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-bar",class:[t.hasBack||t.hasClose?"between":"center"]},[t.hasBack?n("van-icon",{staticClass:"back-icon",attrs:{name:"arrow-left"},on:{click:t.goBack}}):t._e(),t.hasClose?n("van-icon",{staticClass:"back-icon",attrs:{name:"arrow-left"},on:{click:function(e){return t.$emit("close",!1)}}}):t._e(),n("span",[t._v(t._s(t.title))]),n("div")],1)},o=[],s={name:"TopBar",props:{title:{type:String,default:""},hasBack:{type:Boolean,default:!1},hasClose:{type:Boolean,default:!1},outBrowse:{type:Boolean,default:!1},outOrder:{type:Boolean,default:!1},outAddressEdit:{type:Boolean,default:!1}},methods:{goBack:function(){this.outOrder?this.$emit("outOrderEvt"):this.outAddressEdit?this.$emit("outAddressEditEvt"):this.outBrowse?this.$router.push({name:"Me"}):this.$router.back()}}},a=s,i=(n("ba76"),n("2877")),c=Object(i["a"])(a,r,o,!1,null,"78164264",null);e["a"]=c.exports},b64b:function(t,e,n){var r=n("23e7"),o=n("7b0b"),s=n("df75"),a=n("d039"),i=a((function(){s(1)}));r({target:"Object",stat:!0,forced:i},{keys:function(t){return s(o(t))}})},ba76:function(t,e,n){"use strict";var r=n("11c7"),o=n.n(r);o.a},ccdc:function(t,e,n){},dbb4:function(t,e,n){var r=n("23e7"),o=n("83ab"),s=n("56ef"),a=n("fc6a"),i=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,r=a(t),o=i.f,u=s(r),l={},f=0;while(u.length>f)n=o(r,e=u[f++]),void 0!==n&&c(l,e,n);return l}})},dd5c:function(t,e,n){"use strict";var r=n("ccdc"),o=n.n(r);o.a},e439:function(t,e,n){var r=n("23e7"),o=n("d039"),s=n("fc6a"),a=n("06cf").f,i=n("83ab"),c=o((function(){a(1)})),u=!i||c;r({target:"Object",stat:!0,forced:u,sham:!i},{getOwnPropertyDescriptor:function(t,e){return a(s(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r}}]);
//# sourceMappingURL=chunk-5578850b.9da7f9b4.js.map