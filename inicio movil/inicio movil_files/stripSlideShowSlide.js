define("stripSlideShowSlide",["lodash","core","santaProps","prop-types","santa-components","skins","reactDOM","components","stripSlideShow"],function(e,t,n,i,o,r,s,l,d){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1689)}({0:function(t,n){t.exports=e},12:function(e,t){e.exports=s},1689:function(e,t,n){var i,o;i=[n(0),n(5),n(12),n(3),n(24),n(2),n(7),n(6),n(231),n(1690)],void 0===(o=function(e,t,n,i,o,r,s,l,d,p){"use strict";var a=l.mixins,u=a.inlineContentMixin,c=a.scrollMixin,f={displayName:"stripSlideShowSlide",mixins:[o.mediaCommon.mediaLogicMixins.fill,r.compMixins.skinBasedComp,c,r.compMixins.createChildComponentMixin,u],propTypes:{slideStyle:d.SlideShowSantaTypes.slideStyle,siteWidth:i.Types.siteWidth.isRequired,defaultContentArea:i.Types.Container.defaultContentArea.isRequired,shouldHideOverflowContent:t.bool,flexibleBoxHeight:t.bool,onMouseEnter:t.func,onMouseLeave:t.func,parentId:t.string},statics:{applyCompSpecificDomOnlyPatches:function(e,t){n.findDOMNode(e).setAttribute("data-min-height",t.minHeight)},compSpecificIsDomOnlyOverride:function(){return!1},behaviors:o.mediaCommon.mediaBehaviors.fill},isScreenWidth:function(){return!0},getSkinProperties:function(){var e=this.props.slideStyle.minHeight;return{"":{onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave,"data-flexibleboxheight":this.props.flexibleBoxHeight,"data-parent-id":this.props.parentId,"data-min-height":e,style:{minHeight:e,height:"100%"}},background:this.createFillLayers(),inlineContent:{children:this.getChildrenRenderer({contentArea:this.props.defaultContentArea})},inlineContentParent:{style:{overflowX:this.props.shouldHideOverflowContent?"hidden":"visible",overflowY:this.props.shouldHideOverflowContent&&!this.props.flexibleBoxHeight?"hidden":"visible"}}}}};return r.compRegistrar.register("wysiwyg.viewer.components.StripContainerSlideShowSlide",f),s.skinsMap.addBatch(p),f}.apply(t,i))||(e.exports=o)},1690:function(e,t,n){var i;void 0===(i=function(){"use strict";var e={"wysiwyg.common.components.stripSlideShowSlide.viewer.skins.stripSlideShowSlideSkin":{react:[["div","background",[],{},["div","backgroundMedia",[],{}]],["div","borderNode",[],{}],["div","inlineContentParent",[],{},["div","inlineContent",[],{}]]],params:{brw:"BORDER_SIZE",brd:"BORDER_COLOR_ALPHA"},paramsDefaults:{brw:"0",brd:"color_11"},css:{"%borderNode":"border:[brw] solid [brd];position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;","%inlineContent":"position:absolute;top:0;right:0;bottom:0;left:0;","%inlineContentParent":"position:absolute;top:0;right:0;bottom:0;left:0;",'%[data-shouldhideoverflowcontent="true"]':"overflow:hidden;"}}};return e}.apply(t,[]))||(e.exports=i)},2:function(e,n){e.exports=t},231:function(e,t){e.exports=d},24:function(e,t){e.exports=l},3:function(e,t){e.exports=n},5:function(e,t){e.exports=i},6:function(e,t){e.exports=o},7:function(e,t){e.exports=r}})});
//# sourceMappingURL=stripSlideShowSlide.min.js.map