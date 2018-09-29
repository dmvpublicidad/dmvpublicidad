define("wTwitterFollow",["lodash","utils","core","santaProps","skins","components","socialCommon"],function(e,t,r,o,n,i,s){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1908)}({0:function(t,r){t.exports=e},1:function(e,r){e.exports=t},1908:function(e,t,r){var o,n;o=[r(0),r(2),r(1),r(3),r(53),r(24),r(7),r(1909)],void 0===(n=function(e,t,r,o,n,i,s,a){"use strict";var p={displayName:"WTwitterFollow",mixins:[t.compMixins.skinBasedComp,n.twitterComponentMixin],propTypes:{compData:o.Types.Component.compData.isRequired,compProp:o.Types.Component.compProp.isRequired,id:o.Types.Component.id.isRequired,origin:o.Types.Location.origin,santaBase:o.Types.santaBase.isRequired},getIFrameSrc:function(){var e=function(e){return e.accountToFollow.replace("@","")}(this.props.compData),t={screen_name:e,href:"https://twitter.com/"+e,show_count:this.props.compProp.showCount.toString(),show_screen_name:this.props.compProp.showScreenName.toString(),lang:this.getLanguage(),align:"left",compId:this.props.id,origin:this.props.origin,widgetType:"FOLLOW"};return this.props.santaBase+"/static/external/twitter.html?"+r.urlUtils.toQueryString(t)},getIframeTitleName:function(){return"component_label_ twitterTweetTitle"}};return t.compRegistrar.register("wysiwyg.viewer.components.WTwitterFollow",p),i.translationRequirementsChecker.registerCommonLanguageRequirement("wysiwyg.viewer.components.WTwitterFollow",function(t,r){return e.get(r,["properties","dataLang"])}),s.skinsMap.addBatch(a),p}.apply(t,o))||(e.exports=n)},1909:function(e,t,r){var o;void 0===(o=function(){"use strict";var e={"skins.core.TwitterFollowSkin":{react:[["iframe","iframe",[],{allowFullScreen:!0,frameBorder:0,scrolling:"no"}]],css:{}}};return e}.apply(t,[]))||(e.exports=o)},2:function(e,t){e.exports=r},24:function(e,t){e.exports=i},3:function(e,t){e.exports=o},53:function(e,t){e.exports=s},7:function(e,t){e.exports=n}})});
//# sourceMappingURL=wTwitterFollow.min.js.map