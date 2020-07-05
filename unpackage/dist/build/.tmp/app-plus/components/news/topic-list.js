(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/news/topic-list"],{"0de6":function(t,e,n){"use strict";n.r(e);var i=n("c5c4"),c=n("7248");for(var o in c)"default"!==o&&function(t){n.d(e,t,(function(){return c[t]}))}(o);var u,a=n("f0c5"),r=Object(a["a"])(c["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=r.exports},7248:function(t,e,n){"use strict";n.r(e);var i=n("7c4c"),c=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=c.a},"7c4c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{item:Object,index:Number,choose:{type:Boolean,default:!1}},methods:{open:function(){if(this.choose)return t.$emit("chooseTopic",{id:this.item.id,title:this.item.title}),t.navigateBack({delta:1});t.navigateTo({url:"../../pages/topic-detail/topic-detail?detail="+JSON.stringify(this.item)})}}};e.default=n}).call(this,n("6e42")["default"])},c5c4:function(t,e,n){"use strict";var i,c=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/news/topic-list-create-component',
    {
        'components/news/topic-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("0de6"))
        })
    },
    [['components/news/topic-list-create-component']]
]);
