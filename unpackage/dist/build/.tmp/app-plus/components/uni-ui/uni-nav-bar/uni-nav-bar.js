(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-ui/uni-nav-bar/uni-nav-bar"],{"12b7":function(t,n,e){"use strict";e.r(n);var u=e("e9e3"),i=e("2b6d");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("b972");var r,a=e("f0c5"),c=Object(a["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=c.exports},"2b6d":function(t,n,e){"use strict";e.r(n);var u=e("3cd0"),i=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);n["default"]=i.a},"3cd0":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){e.e("components/uni-ui/uni-status-bar/uni-status-bar").then(function(){return resolve(e("6da8"))}.bind(null,e)).catch(e.oe)},i=function(){e.e("components/uni-ui/uni-icons/uni-icons").then(function(){return resolve(e("5457"))}.bind(null,e)).catch(e.oe)},o={name:"UniNavBar",components:{uniStatusBar:u,uniIcons:i},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[String,Boolean],default:!0},border:{type:[String,Boolean],default:!0}},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")}}};n.default=o},b972:function(t,n,e){"use strict";var u=e("f47c"),i=e.n(u);i.a},e9e3:function(t,n,e){"use strict";var u,i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return u}))},f47c:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-ui/uni-nav-bar/uni-nav-bar-create-component',
    {
        'components/uni-ui/uni-nav-bar/uni-nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("12b7"))
        })
    },
    [['components/uni-ui/uni-nav-bar/uni-nav-bar-create-component']]
]);