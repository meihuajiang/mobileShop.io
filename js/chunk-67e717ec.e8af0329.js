(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67e717ec"],{"11c7":function(t,s,a){},"15f0":function(t,s,a){"use strict";var i=a("b3ec"),c=a.n(i);c.a},"56fe":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"cart"}},[a("topbar",{attrs:{title:"购物车",hasBack:""}}),a("section",{staticClass:"cartMain"},[a("div",{staticClass:"cartMain_hd"},[a("ul",{staticClass:"order_lists cartTop"},[a("li",{staticClass:"list_chk"},[a("input",{staticClass:"whole_check",attrs:{type:"checkbox",id:"all"},on:{click:function(s){return t.cartChoose()}}}),a("label",{class:t.status?"mark":"",attrs:{for:"all"}},[t._v("全选")])])])]),a("br"),a("br"),t._l(t.list,(function(s,i){return a("div",{key:i,staticClass:"cartBox"},[a("li",{staticClass:"list_chk"},[a("input",{staticClass:"son_check",attrs:{type:"checkbox",id:"checkbox_2"},on:{click:function(a){return t.choose(s)}}}),a("a",{class:s.checked?"mark":"",attrs:{for:"checkbox_2"}})]),a("li",{staticClass:"list_con"},[a("div",{staticClass:"list_img"},[a("a",{attrs:{href:"javascript:;"}},[a("img",{attrs:{src:s.imgUl,alt:""}})])]),a("div",{staticClass:"list_text"},[a("a",{attrs:{href:"javascript:;"}},[t._v(t._s(s.title))]),a("span",{staticClass:"list_custom"})])]),a("li",{staticClass:"list_price"},[a("p",{staticClass:"price"},[t._v("单价：￥"+t._s(s.price))]),t._m(0,!0)]),a("li",{staticClass:"list_amount"},[a("div",{staticClass:"amount_box"},[a("a",{staticClass:"reduce reSty",attrs:{href:"javascript:;"},on:{click:function(a){return t.reduce(s)}}},[t._v("数量：-")]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.num,expression:"item.num"}],staticClass:"sum",attrs:{type:"text"},domProps:{value:s.num},on:{input:function(a){a.target.composing||t.$set(s,"num",a.target.value)}}}),a("a",{staticClass:"plus",attrs:{href:"javascript:;"},on:{click:function(a){return t.add(s)}}},[t._v("+")])])]),a("li",{staticClass:"list_sum"},[a("p",{staticClass:"sum_price"},[t._v("商品金额：￥"+t._s(s.sum))])]),t._m(1,!0),a("br"),a("br"),a("br")])})),a("br"),a("br"),a("div",{staticClass:"bar-wrapper"},[a("div",{staticClass:"bar-right"},[a("div",{staticClass:"piece"},[t._v(" 已选商品"),a("strong",{staticClass:"piece_num"},[t._v(t._s(this.allnum))]),t._v("件 ")]),a("div",{staticClass:"totalMoney"},[t._v(" 共计: "),a("strong",{staticClass:"total_text"},[t._v("￥"+t._s(this.allsum))])]),t._m(2)])])],2),a("section",{staticClass:"model_bg"}),t._m(3)],1)},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"charge"},[a("p",[t._v("更多促销")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"list_op"},[a("p",{staticClass:"collect"},[a("a",{staticClass:"colBtn",attrs:{href:"javascript:;"}},[t._v("加入收藏夹")])]),a("p",{staticClass:"del"},[a("a",{staticClass:"delBtn",attrs:{href:"javascript:;"}},[t._v("移除该商品")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"calBtn"},[a("a",{attrs:{href:"javascript:;"}},[t._v("去结算")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"my_model"},[a("p",{staticClass:"title"},[t._v("删除宝贝"),a("span",{staticClass:"closeModel"})]),a("p",[t._v("您确认要删除该宝贝吗？")]),a("div",{staticClass:"opBtn"},[a("a",{staticClass:"dialog-sure",attrs:{href:"javascript:;"}},[t._v("确定")]),a("br"),a("a",{staticClass:"dialog-close",attrs:{href:"javascript:;"}},[t._v("关闭")])])])}],e=(a("4160"),a("159b"),a("b084")),l={components:{Topbar:e["a"]},data:function(){return{status:!1,allsum:0,allnum:0,list:[{title:"李清照传",text:"4377人评价",price:99,imgUrl:"./static/img/coll-r-2.jpg",link:"http://product.dangdang.com/24166592.html#ddclick_reco_book",num:1,sum:99,checked:!1},{title:"哈利·波特与被诅咒的孩子",text:"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",price:29.37,imgUrl:"./static/img/m-c-1.png",link:"http://product.dangdang.com/25583206.html",num:1,sum:29.37,checked:!1},{title:"云边有个小卖部",text:"2381人评价",price:49,imgUrl:"./static/img/parts-r-1.jpg",link:"http://product.dangdang.com/25295369.html",num:1,sum:49,checked:!1},{title:"空间简史",text:"434人好评",price:29,imgUrl:"./static/img/rec-1.jpg",link:"http://product.dangdang.com/25546541.html",num:1,sum:29,checked:!1},{title:"夏目友人帐",text:"只要有想见的人，就不再会是孤身一人了",price:29,imgUrl:"./static/img/xiamu.png",link:"http://product.dangdang.com/24017532.html",num:1,sum:29,checked:!1},{title:" 龙族3黑月之潮·下",text:"我们都是小怪兽，都将被正义的奥特曼，杀死！",price:149,imgUrl:"./static/img/intel-r-1.jpg",link:"http://product.dangdang.com/23414990.html#ddclick_http://book.dangdang.com/01.01.htm",num:1,img:"./static/img/intel-r-1.jpg",sum:149,checked:!1},{title:"你当像鸟飞往你的山",text:"我们要背叛多少曾经，才能找到真正的自我！",price:39,imgUrl:"./static/img/nidangxiangniao.png",link:"http://product.dangdang.com/28473192.html",num:1,img:"./images/7.png",sum:39,checked:!1}]}},methods:{chooseTrue:function(t){t.checked=!0,this.allsum+=t.sum,this.allnum+=t.num},chooseFalse:function(t){t.checked=!1,this.status=!1,this.allsum-=t.sum,this.allnum-=t.num},choose:function(t){t.checked?this.chooseFalse(t):this.chooseTrue(t),t=5},cartChoose:function(){var t=this;this.status=!this.status,this.status?this.list.forEach((function(s){return t.choose(s)})):this.list.forEach((function(s){return t.chooseFalse(s)}))},add:function(t){t.num++,t.sum+=t.price,t.checked&&(this.allsum+=t.price,this.allnum++)},reduce:function(t){1!==t.num&&(t.num--,t.sum-=t.price,t.checked&&(this.allsum-=t.price,this.allnum--))},updateOrder:function(){},calculate:function(t){var s=t.sum,a=s/t.price;t.num=parseInt(t.num),t.num>0?t.sum=t.num*t.price:t.num=a;var i=t.sum-s,c=t.num-a;t.checked&&(this.allsum+=i,this.allnum+=c)}}},n=l,r=(a("15f0"),a("2877")),o=Object(r["a"])(n,i,c,!1,null,"4eb7a13e",null);s["default"]=o.exports},b084:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"top-bar",class:[t.hasBack||t.hasClose?"between":"center"]},[t.hasBack?a("van-icon",{staticClass:"back-icon",attrs:{name:"arrow-left"},on:{click:t.goBack}}):t._e(),t.hasClose?a("van-icon",{staticClass:"back-icon",attrs:{name:"arrow-left"},on:{click:function(s){return t.$emit("close",!1)}}}):t._e(),a("span",[t._v(t._s(t.title))]),a("div")],1)},c=[],e={name:"TopBar",props:{title:{type:String,default:""},hasBack:{type:Boolean,default:!1},hasClose:{type:Boolean,default:!1},outBrowse:{type:Boolean,default:!1},outOrder:{type:Boolean,default:!1},outAddressEdit:{type:Boolean,default:!1}},methods:{goBack:function(){this.outOrder?this.$emit("outOrderEvt"):this.outAddressEdit?this.$emit("outAddressEditEvt"):this.outBrowse?this.$router.push({name:"Me"}):this.$router.back()}}},l=e,n=(a("ba76"),a("2877")),r=Object(n["a"])(l,i,c,!1,null,"78164264",null);s["a"]=r.exports},b3ec:function(t,s,a){},ba76:function(t,s,a){"use strict";var i=a("11c7"),c=a.n(i);c.a}}]);
//# sourceMappingURL=chunk-67e717ec.e8af0329.js.map