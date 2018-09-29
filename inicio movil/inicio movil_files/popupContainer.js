define("popupContainer",["lodash","core","santaProps","reactDOM","components"],function(e,n,t,i,o){return function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1567)}({0:function(n,t){n.exports=e},12:function(e,n){e.exports=i},1567:function(e,n,t){var i,o;i=[t(0),t(12),t(2),t(3),t(24)],void 0===(o=function(e,n,t,i,o){"use strict";var r=t.compMixins,s={displayName:"PopupContainer",mixins:[o.mediaCommon.mediaLogicMixins.fill,r.skinBasedComp,r.cyclicTabbingMixin,r.createChildComponentMixin,r.inlineContentMixin],propTypes:{isSiteMembersDialogOpen:i.Types.SiteMembersSantaTypes.isSiteMembersDialogOpen,closePopupPage:i.Types.popupPage.close,windowKeyboardEvent:i.Types.SiteAspects.windowKeyboardEvent.isRequired,isViewerMode:i.Types.isViewerMode.isRequired,defaultContentArea:i.Types.Container.defaultContentArea.isRequired},statics:{behaviors:o.mediaCommon.mediaBehaviors.fill},forceRedrawOnAnimationEnded:!0,previousVisibilityState:"hidden",getDefaultSkinName:function(){return"wysiwyg.viewer.skins.stripContainer.DefaultStripContainer"},componentWillMount:function(){this.props.windowKeyboardEvent&&this.props.windowKeyboardEvent.registerToEscapeKey(this),this.props.isViewerMode&&this.registerOnAnimationEnd(function(){var e=this.refs[""];e&&n.findDOMNode(e).focus(),this.unregisterOnAnimationEnd()})},componentDidMount:function(){(this._focusedElementBeforeLightbox=e.get(window,"document.activeElement"),this.props.isViewerMode)&&(n.findDOMNode(this.refs[""]).contains(window.document.activeElement)||n.findDOMNode(this.refs[""]).focus())},componentWillUnmount:function(){this.props.windowKeyboardEvent&&this.props.windowKeyboardEvent.unRegisterKeys(this),this.forceRedrawOnAnimationEnded=!1,this._focusedElementBeforeLightbox&&this._focusedElementBeforeLightbox.focus()},isScreenWidth:function(){return"fullWidth"===e.get(this.props,"compProp.alignmentType")},onEscapeKey:function(){this.props.closePopupPage()},getSkinProperties:function(){return{"":{onKeyDown:this.preventTabbingOut,role:"dialog",style:{pointerEvents:"auto"},tabIndex:-1},background:this.createFillLayers(),inlineContent:{children:this.getChildrenRenderer(this.isScreenWidth()&&{contentArea:this.props.defaultContentArea})}}}};return t.compRegistrar.register("wysiwyg.viewer.components.PopupContainer",s),s}.apply(n,i))||(e.exports=o)},2:function(e,t){e.exports=n},24:function(e,n){e.exports=o},3:function(e,n){e.exports=t}})});
//# sourceMappingURL=popupContainer.min.js.map