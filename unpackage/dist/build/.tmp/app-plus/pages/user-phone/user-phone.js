(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-phone/user-phone"],{4681:function(e,t,n){"use strict";(function(e){n("d1f3"),n("921b");o(n("66fd"));var t=o(n("ba70"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},8441:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{phone:"",code:"",codeTime:0}},computed:{disabled:function(){return""===this.phone||""===this.code}},methods:{check:function(){var t=/^1[34578]\d{9}$/;return!!t.test(this.phone)||(e.showToast({title:"手机号格式不正确",icon:"none"}),!1)},submit:function(){var t=this;this.check()&&this.$H.post("/user/bindphone",{phone:this.phone,code:this.code},{token:!0}).then((function(o){n("log","绑定成功",o," at pages\\user-phone\\user-phone.vue:53"),t.$store.commit("editUserInfo",{key:"phone",value:t.phone}),t.$store.commit("editUserInfo",{key:"id",value:o.user_id}),e.navigateBack({delta:1}),e.showToast({title:"绑定成功",icon:"none"})}))},getCode:function(){var t=this;this.codeTime>0||this.check()&&this.$H.post("/user/sendcode",{phone:this.phone},{native:!0}).then((function(n){e.showToast({title:n.data.msg,icon:"none"}),t.codeTime=60;var o=setInterval((function(){t.codeTime>=1?t.codeTime--:(t.codeTime=0,clearInterval(o))}),1e3)}))}}};t.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},a8b3:function(e,t,n){"use strict";n.r(t);var o=n("8441"),i=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,(function(){return o[e]}))}(c);t["default"]=i.a},ba70:function(e,t,n){"use strict";n.r(t);var o=n("c6f4"),i=n("a8b3");for(var c in i)"default"!==c&&function(e){n.d(t,e,(function(){return i[e]}))}(c);var u,a=n("f0c5"),r=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);t["default"]=r.exports},c6f4:function(e,t,n){"use strict";var o,i=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o}))}},[["4681","common/runtime","common/vendor"]]]);