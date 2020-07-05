(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/msg/msg-list"],{"5cec":function(e,t,n){"use strict";n.r(t);var u=n("d27e"),i=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,(function(){return u[e]}))}(r);t["default"]=i.a},"999f":function(e,t,n){"use strict";n.r(t);var u=n("d517"),i=n("5cec");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var a,c=n("f0c5"),s=Object(c["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);t["default"]=s.exports},d27e:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(n("91e3"));function i(e){return e&&e.__esModule?e:{default:e}}var r=function(){n.e("components/uni-ui/uni-badge/uni-badge").then(function(){return resolve(n("96fe"))}.bind(null,n)).catch(n.oe)},a={components:{uniBadge:r},props:{item:Object,index:Number},filters:{formatTime:function(e){return u.default.gettime(e)}},methods:{open:function(){var t=this,n={user_id:this.item.user_id,username:this.item.username,userpic:this.item.avatar};e.navigateTo({url:"../../pages/user-chat/user-chat?user="+JSON.stringify(n),success:function(){t.$store.dispatch("readChatMessage",t.item)}})}}};t.default=a}).call(this,n("6e42")["default"])},d517:function(e,t,n){"use strict";var u,i=function(){var e=this,t=e.$createElement,n=(e._self._c,e._f("formatTime")(e.item.update_time));e.$mp.data=Object.assign({},{$root:{f0:n}})},r=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return u}))}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/msg/msg-list-create-component',
    {
        'components/msg/msg-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("999f"))
        })
    },
    [['components/msg/msg-list-create-component']]
]);
