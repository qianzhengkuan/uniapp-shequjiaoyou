(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/more-share"],{"1add":function(e,n,t){"use strict";var o,r=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return o}))},"43f4":function(e,n,t){"use strict";t.r(n);var o=t("5ba4"),r=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=r.a},"5ba4":function(e,n,t){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("4795"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,o,r,a,i){try{var s=e[a](i),c=s.value}catch(u){return void t(u)}s.done?n(c):Promise.resolve(c).then(o,r)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(o,r){var a=e.apply(n,t);function s(e){i(a,o,r,s,c,"next",e)}function c(e){i(a,o,r,s,c,"throw",e)}s(void 0)}))}}var c=function(){t.e("components/uni-ui/uni-popup/uni-popup").then(function(){return resolve(t("ce13"))}.bind(null,t)).catch(t.oe)},u={components:{uniPopup:c},data:function(){return{title:"",shareText:"",href:"",image:"",shareType:0,providerList:[]}},computed:{isDisableButton:function(){return function(e){return 0===this.shareType&&"qq"===e.id||5===this.shareType&&"分享到微信好友"!==e.name}}},onShareAppMessage:function(){return{title:this.shareText?this.shareText:"欢迎体验uni-app",path:"/pages/tabBar/component/component",imageUrl:this.image?this.image:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png"}},beforeDestroy:function(){this.shareText="uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！",this.href="https://uniapp.dcloud.io",this.image=""},onReady:function(){var n=this;e.getProvider({service:"share",success:function(e){o("log",e," at components\\common\\more-share.vue:60");for(var t=[],r=0;r<e.provider.length;r++)switch(e.provider[r]){case"weixin":t.push({name:"微信好友",icon:"icon-weixin",color:"bg-success",id:"weixin",sort:0}),t.push({name:"朋友圈",icon:"icon-huati",color:"bg-dark",id:"weixin",type:"WXSenceTimeline",sort:1});break;case"sinaweibo":t.push({name:"新浪微博",icon:"icon-xinlangweibo",color:"bg-danger",id:"sinaweibo",sort:2});break;case"qq":t.push({name:"QQ好友",icon:"icon-QQ",color:"bg-primary",id:"qq",sort:3});break;default:break}n.providerList=t.sort((function(e,n){return e.sort-n.sort}))},fail:function(n){e.showModal({content:"获取分享通道失败",showCancel:!1})}})},methods:{open:function(e){this.title=e.title,this.shareText=e.shareText,this.href=e.href,this.image=e.image,this.$refs.popup.open()},close:function(){this.$refs.popup.close()},share:function(n){var t=this;return s(r.default.mark((function a(){var i;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(o("log","分享通道:"+n.id+"； 分享类型:"+t.shareType," at components\\common\\more-share.vue:127"),t.shareText||1!==t.shareType&&0!==t.shareType){r.next=4;break}return e.showModal({content:"分享内容不能为空",showCancel:!1}),r.abrupt("return");case 4:if(t.image||2!==t.shareType&&0!==t.shareType){r.next=7;break}return e.showModal({content:"分享图片不能为空",showCancel:!1}),r.abrupt("return");case 7:"qq"!==n.id&&"sinaweibo"!==n.id||(t.shareType=1),i={provider:n.id,scene:n.type&&"WXSenceTimeline"===n.type?"WXSenceTimeline":"WXSceneSession",type:t.shareType,success:function(n){o("log","success",n," at components\\common\\more-share.vue:156"),e.showModal({content:"分享成功",showCancel:!1})},fail:function(n){o("log","fail",n," at components\\common\\more-share.vue:163"),e.showModal({content:n.errMsg,showCancel:!1})},complete:function(){o("log","分享操作结束!"," at components\\common\\more-share.vue:170")}},r.t0=t.shareType,r.next=0===r.t0?12:1===r.t0?17:2===r.t0?19:5===r.t0?21:25;break;case 12:return i.summary=t.shareText,i.imageUrl=t.image,i.title="欢迎体验uniapp",i.href="https://uniapp.dcloud.io",r.abrupt("break",26);case 17:return i.summary=t.shareText,r.abrupt("break",26);case 19:return i.imageUrl=t.image,r.abrupt("break",26);case 21:return i.imageUrl=t.image?t.image:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png",i.title="欢迎体验uniapp",i.miniProgram={id:"gh_33446d7f7a26",path:"/pages/tabBar/component/component",webUrl:"https://uniapp.dcloud.io",type:0},r.abrupt("break",26);case 25:return r.abrupt("break",26);case 26:if(0!==i.type||"iOS"!==plus.os.name){r.next=30;break}return r.next=29,t.compress();case 29:i.imageUrl=r.sent;case 30:1===i.type&&"qq"===i.provider&&(i.href="https://uniapp.dcloud.io",i.title="欢迎体验uniapp"),e.share(i);case 32:case"end":return r.stop()}}),a)})))()},compress:function(){o("log","开始压缩"," at components\\common\\more-share.vue:211");var n=this.image;return new Promise((function(t){var r=plus.io.convertAbsoluteFileSystem(n.replace("file://",""));o("log","after"+r," at components\\common\\more-share.vue:215"),plus.io.resolveLocalFileSystemURL(r,(function(r){r.file((function(r){o("log","getFile:"+JSON.stringify(r)," at components\\common\\more-share.vue:219"),r.size>20480&&plus.zip.compressImage({src:n,dst:n.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG"),width:"10%",height:"10%",quality:1,overwrite:!0},(function(e){o("log","success zip****"+e.size," at components\\common\\more-share.vue:229");var r=n.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG");t(r)}),(function(n){e.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})}))}))}),(function(n){o("log","Resolve file URL failed: "+n.message," at components\\common\\more-share.vue:241"),e.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})}))}))}}};n.default=u}).call(this,t("6e42")["default"],t("0de9")["default"])},"6aa9":function(e,n,t){"use strict";t.r(n);var o=t("1add"),r=t("43f4");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);var i,s=t("f0c5"),c=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);n["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/more-share-create-component',
    {
        'components/common/more-share-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("6aa9"))
        })
    },
    [['components/common/more-share-create-component']]
]);
