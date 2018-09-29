define("previewExtensionsCore",["lodash","core","compUtils","wixappsCore","components","santaPreviewComponents"],function(n,e,o,t,r,i){return function(n){var e={};function o(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=n,o.c=e,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o(o.s=1568)}({0:function(e,o){e.exports=n},13:function(n,e){n.exports=o},14:function(n,e){n.exports=t},1568:function(n,e,o){var t,r;t=[o(1569),o(1570)],void 0===(r=function(n,e){"use strict";return{hooks:n,registrar:e}}.apply(e,t))||(n.exports=r)},1569:function(n,e,o){var t,r;t=[o(0)],void 0===(r=function(n){"use strict";var e={ON_CLICK:"onClick"},o={},t={};return{registerSupportedHooks:function(n,e){o[n]=e},getHookFn:function(n,e){return t[n]&&t[n][e]||null},HOOK_NAMES:e,public:{setHookFn:function(e,r,i){if(!o[e])throw new Error("No supported hooks for component "+e);if(!n.includes(o[e],r))throw new Error("Unsupported hookName for component "+e+": "+r);t[e]=t[e]||{},t[e][r]=i},getSupportedHooksByCompType:function(n){return o[n]},HOOK_NAMES:e}}}.apply(e,t))||(n.exports=r)},1570:function(n,e,o){var t,r;t=[o(0),o(2),o(13),o(14),o(1571),o(24)],void 0===(r=function(n,e,o,t,r){"use strict";var i=t.proxyFactory,u=t.logicFactory,s={},c={},f={},p=[],a={"wysiwyg.viewer.components.HeaderContainer":r.components.HeaderContainerPreview,"wysiwyg.viewer.components.FooterContainer":r.components.FooterContainerPreview};return{extendCompClasses:function(){n.forEach(s,function(e,t){n.forEach(e,function(n){o.compFactory.extend(t,n)})})},registerPreviewClasses:function(){n.forOwn(a,function(n,o){return e.compRegistrar.register(o,n)})},registerCompExtension:function(n,e){s[n]=(s[n]||[]).concat([e])},registerProxyExtension:function(n,e){c[n]=e},registerMixinExtension:function(e,o){var t=n.find(p,function(n){return n.mixin===e});t?t.extension=o:p.push({mixin:e,extension:o})},extendProxyClasses:function(){n.forEach(c,function(n,e){i.extend(e,n)})},extendCompMixinClasses:function(){n.forEach(p,function(n){n.mixin.mixins=n.mixin.mixins||[],n.mixin.mixins.push(n.extension)})},registerLogicExtension:function(n,e){f[n]=e},extendLogicClasses:function(){n.forEach(f,function(n,e){u.extend(e,n)})},resetAllExtensions:function(){s={},c={},f={},n.forEach(p,function(e){n.remove(e.mixin.mixins,e.extension)}),p=[]}}}.apply(e,t))||(n.exports=r)},1571:function(n,e){n.exports=i},2:function(n,o){n.exports=e},24:function(n,e){n.exports=r}})});
//# sourceMappingURL=previewExtensionsCore.min.js.map