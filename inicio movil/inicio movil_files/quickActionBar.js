define("quickActionBar",["lodash","utils","core","santaProps","coreUtils","prop-types","santa-components","skins","create-react-class","react"],function(t,i,o,e,n,a,r,c,s,l){return function(t){var i={};function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=i,o.d=function(t,i,e){o.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,i){if(1&i&&(t=o(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)o.d(e,n,function(i){return t[i]}.bind(null,n));return e},o.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(i,"a",i),i},o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},o.p="",o(o.s=1579)}({0:function(i,o){i.exports=t},1:function(t,o){t.exports=i},1579:function(t,i,o){var e,n;e=[o(1580),o(1583),o(7),o(1584)],void 0===(n=function(t,i,o,e){"use strict";return o.skinsMap.addBatch(e),{quickActionBar:t,quickActionBarItem:i}}.apply(i,e))||(t.exports=n)},1580:function(t,i,o){var e,n;e=[o(6),o(0),o(19),o(2),o(4),o(3),o(505),o(506),o(1581),o(1582)],void 0===(n=function(t,i,o,e,n,a,r,c,s){"use strict";var l={displayName:"QuickActionBar",mixins:[e.compMixins.skinBasedComp],propTypes:{isExperimentOpen:a.Types.isExperimentOpen,reportBI:a.Types.reportBI.isRequired,compProp:a.Types.Component.compProp.isRequired,colorScheme:a.Types.Component.styleParam.colorScheme,siteScrollingBlocker:a.Types.SiteAspects.siteScrollingBlocker.isRequired,windowScrollEventAspect:a.Types.SiteAspects.windowScrollEvent.isRequired,siteWidth:a.Types.siteWidth.isRequired,dynamicActions:a.Types.QuickActions.dynamicActions.isRequired,positionFixedShouldBeAbsoluteAtPageBottom:a.Types.BrowserFlags.positionFixedShouldBeAbsoluteAtPageBottom,componentViewMode:a.Types.RenderFlags.componentViewMode,componentPreviewState:a.Types.RenderFlags.componentPreviewState},getDefaultProps:function(){return{colorScheme:"brand inv"}},getInitialState:function(){return{isOpen:!1,shouldDisplay:!0,atPageBottom:!1}},toggleActionBarByPreviewStateIfNeeded:function(t){var i="open"===t,o=this.isOpen()&&!i;!this.isOpen()&&i?this.openActionBar():o&&this.closeActionBar()},componentWillReceiveProps:function(t){this.toggleActionBarByPreviewStateIfNeeded(t.componentPreviewState),!i.isEqual(this.props.componentViewMode,t.componentViewMode)&&this.closeActionBar()},isOpen:function(){return this.state.isOpen},toggleActionBar:function(){this.state.isOpen?this.closeActionBar():(this.props.reportBI(s.OPEN_FLOATING_QUICK_ACTION_BAR,{site_id:this.props.siteId,skin:this.props.skin}),this.openActionBar())},openActionBar:function(){this.safelySetState({isOpen:!0})},closeActionBar:function(){this.safelySetState({isOpen:!1})},componentDidUpdate:function(){this.props.siteScrollingBlocker.setSiteScrollingBlocked(this,this.isOpen())},safelySetState:function(t){this._isMounted&&this.setState(t)},componentWillUnmount:function(){this._isMounted=!1,this.props.siteScrollingBlocker.setSiteScrollingBlocked(this,!1)},componentDidMount:function(){this._isMounted=!0,this.props.siteScrollingBlocker.registerScrollBlockedListener({handleUnblockedBy:this.display,handleBlockedBy:this.hide}),this.props.windowScrollEventAspect.registerToScroll(this)},display:function(t){t!==this&&this.safelySetState({shouldDisplay:!0})},hide:function(t){t!==this&&this.safelySetState({shouldDisplay:!1})},onScroll:function(t){var i=t.progressY>=1;this.state.atPageBottom!==i&&this.safelySetState({atPageBottom:i})},createDynamicActionClickHandler:function(t,o){return function(e){i.isFunction(this.createActionClickHandlerInPreview)?this.createActionClickHandlerInPreview(e):(this.props.reportBI(s.DYNAMIC_QUICK_ACTION_CLICK,{site_id:this.props.siteId,appDefinitionId:o.appId,category:o.itemType,skin:this.props.skin,item_title:o.text}),this.handleAction(o.appId)),this.handleAction(n.constants.ACTION_TYPES.QUICK_ACTION_BAR_ITEM_CLICKED,{item:o,actionIndex:t})}.bind(this)},staticActionClickHandler:function(t,i){this.props.reportBI(s.QUICK_ACTION_ITEM_CLICK,{site_id:this.props.siteId,category:t.itemType,skin:this.props.skin,item_title:n.biLoggerSanitizer.sanitizePII(t.text)}),this.closeActionBar(),this.handleAction(n.constants.ACTION_TYPES.QUICK_ACTION_BAR_ITEM_CLICKED,{item:t,actionIndex:i})},createSingleStaticAction:function(t,e){var n={colorScheme:this.props.colorScheme.trim(),clickHandler:i.partialRight(this.staticActionClickHandler,e)};return o.cloneElement(t,n)},createSingleDynamicAction:function(t,o){var n=c.resolveIconColors(t.color,this.props.colorScheme.trim()),a=i.assign({},i.pick(t,["text","svgString","notificationCount","itemType"]),i.pick(n,["fillColor","backgroundColor","textColor"]),{clickHandler:this.createDynamicActionClickHandler(o,t)});return e.createReactElement(r,a)},getRootClasses:function(t){var i={"hide-text":this.props.compProp.hideText,closed:!this.isOpen()};return i["align-"+this.props.compProp.alignment]=!0,i["action-count-"+t]=!0,i["view-mode-"+this.props.componentViewMode]=!0,i},getMaxActionsInSkin:function(){return this.getSkinExports()["max-actions"]},getActions:function(){var t=this,e=o.Children.map(this.props.children,this.createSingleStaticAction)||[],n=this.props.dynamicActions?this.props.dynamicActions.length:0,a=this.getMaxActionsInSkin(),r=Math.min(a-n,e.length),c=i.map(this.props.dynamicActions,function(i,o){return t.createSingleDynamicAction(i,r+o)});return i(e).take(r).concat(c).value()},getChildren:function(o){return i.transform(o,function(i,o,e,n){i.push(o),e<n.length-1&&i.push(t.utils.createReactElement("div",{"data-quick-action":"separator"}))},[])},getOverlayStyle:function(){return{width:this.props.siteWidth,left:"calc(50% - "+this.props.siteWidth/2+"px)"}},shouldShowNotificationBadge:function(t){return i.some(t,function(t){return i.get(t,["props","notificationCount"],0)>0})&&!this.isOpen()},getSkinProperties:function(){var t=this.props.positionFixedShouldBeAbsoluteAtPageBottom&&this.state.atPageBottom,i=this.getActions(),o=this.getRootClasses(i.length);return{"":{style:{display:this.state.shouldDisplay?"":"none",position:t?"absolute":"fixed"},className:this.classSet(o)},overlay:{onClick:this.closeActionBar,style:this.getOverlayStyle()},controlButton:{onClick:this.toggleActionBar},notifications:{"data-quick-action":"notifications",key:"notifications",style:{display:this.shouldShowNotificationBadge(i)?"initial":"none"}},actionsContainer:{children:this.getChildren(i)}}}};return e.compRegistrar.register("wysiwyg.viewer.components.QuickActionBar",l),l}.apply(i,e))||(t.exports=n)},1581:function(t){t.exports={DYNAMIC_QUICK_ACTION_CLICK:{eventId:385,adapter:"ugc-viewer",params:{site_id:"site_id",appDefinitionId:"appDefinitionId",category:"category",skin:"skin",item_title:"item_title"}},OPEN_FLOATING_QUICK_ACTION_BAR:{eventId:325,adapter:"ugc-viewer",params:{site_id:"site_id",category:"category",skin:"skin"}},QUICK_ACTION_ITEM_CLICK:{eventId:324,adapter:"ugc-viewer",params:{site_id:"site_id",category:"category",skin:"skin",item_title:"item_title"}}}},1582:function(t,i,o){var e,n;e=[o(2),o(0),o(1)],void 0===(n=function(t,i,o){"use strict";var e=t.dataRequirementsChecker,n=o.constants.SUPPORTED_DYNAMIC_ACTIONS;function a(t,i){var e="svgshape.v2.Svg_"+i;return o.svg.createSvgFetchRequest(t.serviceTopology.mediaRootUrl,t,e)}e.registerCheckerForCompType("wysiwyg.viewer.components.QuickActionBarItem",function(t,o){return i.compact([a(t,o.data.icon)])}),e.registerCheckerForCompType("wysiwyg.viewer.components.QuickActionBar",function(t){var o=i.map(t.getClientSpecMap(),"appDefinitionId");return i(n).values().filter(function(t){return i.includes(o,t.appId)}).map(function(i){return a(t,i.icon)}).compact().value()})}.apply(i,e))||(t.exports=n)},1583:function(t,i,o){var e,n;e=[o(0),o(5),o(2),o(1),o(3),o(505),o(506)],void 0===(n=function(t,i,o,e,n,a,r){"use strict";var c=e.linkRenderer,s={displayName:"QuickActionBarItem",mixins:[o.compMixins.skinBasedComp],propTypes:{structuredAction:n.Types.QuickActions.structuredAction.isRequired,linkRenderInfo:n.Types.Link.linkRenderInfo,rootNavigationInfo:n.Types.Component.rootNavigationInfo,colorScheme:i.string,clickHandler:i.func.isRequired},onActionClick:function(){this.props.clickHandler(this.props.structuredAction)},createAction:function(){var i=r.resolveIconColors(this.props.structuredAction.color,this.props.colorScheme),e=t.assign({},t.pick(this.props.structuredAction,["text","svgString","itemType"]),t.pick(i,["fillColor","backgroundColor","textColor"]),{anchorData:c.renderLink(this.props.structuredAction.link,this.props.linkRenderInfo,this.props.rootNavigationInfo),clickHandler:this.onActionClick});return o.createReactElement(a,e)},getSkinProperties:function(){return{"":{parentConst:this.createAction}}}};return o.compRegistrar.register("wysiwyg.viewer.components.QuickActionBarItem",s),s}.apply(i,e))||(t.exports=n)},1584:function(t,i,o){var e;void 0===(e=function(){"use strict";var t={"wysiwyg.viewer.skins.quickActionBar.anchoredSkin":{react:[["div","overlay",[],{}],["div","controlButton",[],{}],["div","actionsContainer",[],{}]],exports:{"qab-left":0,"qab-bottom":0,"qab-width":320,"max-actions":5},params:{colorScheme:"COLOR_SCHEME",actionsSHD:"BOX_SHADOW",actionsBorderSize:"BORDER_SIZE",actionsBorderColor:"BORDER_COLOR_ALPHA"},paramsDefaults:{colorScheme:"BRAND",actionsSHD:"none",actionsBorderSize:"0",actionsBorderColor:"rgba(255, 255, 255, 0)"},css:{"%":"content:[colorScheme];display:-webkit-box;display:-webkit-flex;display:flex;height:59px;bottom:0;left:calc(50% - 160px);width:320px;",'% div[data-quick-action="notifications"]':"background-color:#fe2020;border-radius:50%;border:1px solid #fff;-webkit-animation:notify-chat 0.4s ease-in-out;animation:notify-chat 0.4s ease-in-out;height:8px;width:8px;top:calc(50% - 20px);right:calc(50% - 14px);position:absolute;","%actionsContainer":"bottom:0;pointer-events:none;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:100%;[actionsSHD]",'%actionsContainer a[data-quick-action="action"]':"padding:0;pointer-events:auto;position:relative;width:10%;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:5px 0;box-sizing:border-box;",'%actionsContainer a[data-quick-action="action"] div[data-quick-action="icon"]':"position:relative;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;-webkit-flex-basis:21px;flex-basis:21px;margin-top:2px;",'%actionsContainer a[data-quick-action="action"] div[data-quick-action="icon"] svg':"height:30px;width:50px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);",'%actionsContainer a[data-quick-action="action"] div[data-quick-action="text"]':"font:normal normal normal 12px / normal helvetica-w01-light, helvetica-w02-light, sans-serif;text-align:center;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;letter-spacing:0.2px;-webkit-flex-basis:15px;flex-basis:15px;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;padding:0 5px;",'%actionsContainer a[data-quick-action="action"]:active':"-webkit-filter:brightness(0.8);filter:brightness(0.8);",'%_hide-text %actionsContainer a[data-quick-action="action"] div[data-quick-action="text"]':"display:none;","%_view-mode-editor%_action-count-0":"display:none;","%_action-count-0":"display:none;","%overlay,%controlButton":"display:none;",'%actionsContainer div[data-quick-action="separator"]':"-webkit-box-flex:0;-webkit-flex:0 0 [actionsBorderSize];flex:0 0 [actionsBorderSize];background-color:[actionsBorderColor];","%_hide-text":"height:47px;",'%_hide-text div[data-quick-action="notifications"]':"top:calc(50% - 11px);","@-webkit-keyframes %notify-chat":"0%{-webkit-transform:scale(0);transform:scale(0);}50%{-webkit-transform:scale(1.3);transform:scale(1.3);}100%{-webkit-transform:scale(1);transform:scale(1);}","@keyframes %notify-chat":"0%{-webkit-transform:scale(0);transform:scale(0);}50%{-webkit-transform:scale(1.3);transform:scale(1.3);}100%{-webkit-transform:scale(1);transform:scale(1);}"}},"wysiwyg.viewer.skins.quickActionBar.floatingSkin":{react:[["div","overlay",[],{}],["div","controlButton",[],{},["div","notifications",[],{}],["ul",null,["_dots"],{},["li","firstDot",[],{}],["li","secondDot",[],{}],["li","thirdDot",[],{}]]],["div","actionsContainer",[],{}]],exports:{"qab-left":16,"qab-right":16,"qab-bottom":16,"has-alignment":!0,"text-overflow":!0,"max-actions":5,isVertical:!0},params:{colorScheme:"COLOR_SCHEME",controlButtonBG:"BG_COLOR_ALPHA",controlButtonFG:"TEXT_COLOR",controlButtonBorderSize:"BORDER_SIZE",controlButtonBorderColor:"BORDER_COLOR_ALPHA",controlButtonSHD:"BOX_SHADOW",actionsSHD:"BOX_SHADOW",actionsBorderSize:"BORDER_SIZE",actionsBorderColor:"BORDER_COLOR_ALPHA"},paramsDefaults:{colorScheme:"BRAND",controlButtonBG:"#fff",controlButtonFG:"#4682b4",controlButtonBorderSize:"0",controlButtonBorderColor:"rgba(255, 255, 255, 0)",controlButtonSHD:"none",actionsSHD:"none",actionsBorderSize:"0",actionsBorderColor:"rgba(255, 255, 255, 0)"},css:{"%":"content:[colorScheme];-webkit-transition:opacity .3s ease-in;transition:opacity .3s ease-in;width:50px;height:50px;left:calc(50% + 94px);bottom:16px;",'% div[data-quick-action="notifications"]':"background-color:#fe2020;border-radius:50%;border:1px solid #fff;-webkit-animation:notify-chat 0.4s ease-in-out;animation:notify-chat 0.4s ease-in-out;width:10px;height:10px;top:2px;left:1px;position:absolute;","%actionsContainer":"bottom:0;pointer-events:none;min-height:50px;min-width:50px;position:absolute;",'%actionsContainer a[data-quick-action="action"]':"padding:0;pointer-events:auto;position:relative;width:44px;height:44px;border-radius:50%;will-change:opacity;position:relative;display:block;margin:0 auto 14px;",'%actionsContainer a[data-quick-action="action"] div[data-quick-action="icon"]':"position:relative;width:100%;height:100%;border-radius:50%;[actionsSHD]      border:[actionsBorderSize] solid [actionsBorderColor];box-sizing:border-box;",'%actionsContainer a[data-quick-action="action"] div[data-quick-action="icon"] svg':"height:30px;width:50px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);",'%actionsContainer a[data-quick-action="action"] div[data-quick-action="text"]':"font:normal normal normal 12px / normal helvetica-w01-light, helvetica-w02-light, sans-serif;text-align:center;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;letter-spacing:0.2px;position:absolute;max-width:160px;top:50%;left:-16px;-webkit-transform:translate(-100%, -15px);transform:translate(-100%, -15px);padding:6px 8px;color:#1d2d3c;background-color:#fff;border-radius:4px;box-shadow:0 0 8px #ccc;-webkit-backface-visibility:hidden;backface-visibility:hidden;",'%actionsContainer a[data-quick-action="action"]:active':"-webkit-filter:brightness(0.8);filter:brightness(0.8);",'%_hide-text %actionsContainer a[data-quick-action="action"] div[data-quick-action="text"]':"display:none;","%_view-mode-editor%_action-count-0":"display:none;","%overlay":"background-color:#fff;opacity:0.9;position:fixed;top:0;right:0;bottom:0;left:0;z-index:-2;-webkit-transition:opacity .4s;transition:opacity .4s;will-change:opacity;","%controlButton":"width:100%;height:100%;border-radius:50%;background:[controlButtonBG];fill:[controlButtonFG];border:[controlButtonBorderSize] solid [controlButtonBorderColor];[controlButtonSHD]  box-sizing:border-box;","%controlButton %_dots":"list-style:none;width:100%;margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:flex;line-height:calc(50px - (2 * [controlButtonBorderSize]));-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;","%controlButton %_dots li:before":"content:'';height:6px;width:6px;display:inline-block;background:[controlButtonFG];border-radius:27px;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;","%controlButton %_dots li%firstDot:before":"width:17px;height:3px;-webkit-transform:translate(8.5px, -2px) rotate(-45deg);transform:translate(8.5px, -2px) rotate(-45deg);","%controlButton %_dots li%secondDot:before":"height:0;width:0;opacity:0;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;","%controlButton %_dots li%thirdDot:before":"width:17px;height:3px;margin-right:0;-webkit-transform:translate(-8.5px, -2px) rotate(45deg);transform:translate(-8.5px, -2px) rotate(45deg);",'%actionsContainer a[data-quick-action="action"]:nth-last-of-type(1)':"margin-bottom:66px;",'%actionsContainer a[data-quick-action="action"]:nth-of-type(1)':"-webkit-transition:opacity .3s .32s;transition:opacity .3s .32s;",'%actionsContainer a[data-quick-action="action"]:nth-of-type(2)':"-webkit-transition:opacity .3s .24s;transition:opacity .3s .24s;",'%actionsContainer a[data-quick-action="action"]:nth-of-type(3)':"-webkit-transition:opacity .3s .16s;transition:opacity .3s .16s;",'%actionsContainer a[data-quick-action="action"]:nth-of-type(4)':"-webkit-transition:opacity .3s .08s;transition:opacity .3s .08s;",'%actionsContainer a[data-quick-action="action"]:nth-of-type(5)':"-webkit-transition:opacity .3s;transition:opacity .3s;",'%actionsContainer div[data-quick-action="separator"]':"display:none;","%_closed %overlay":"opacity:0;pointer-events:none;","%_closed %controlButton %_dots li:before":"background:[controlButtonFG];content:'';height:6px;width:6px;display:inline-block;border-radius:27px;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;opacity:1;-webkit-transform:scale(1);transform:scale(1);","%_closed %controlButton %_dots li%firstDot:before,%_closed %controlButton %_dots li%secondDot:before":"margin-right:3px;",'%_closed:not(%_action-count-1) %actionsContainer a[data-quick-action="action"]':"pointer-events:none;opacity:0;height:0;width:0;margin-bottom:0;-webkit-transition-property:opacity, height, width, margin-bottom;transition-property:opacity, height, width, margin-bottom;-webkit-transition-duration:.3s, 0s, 0s, 0s;transition-duration:.3s, 0s, 0s, 0s;-webkit-transition-delay:0s, .3s, .3s, .3s;transition-delay:0s, .3s, .3s, .3s;",'%_closed:not(%_action-count-1) %actionsContainer a[data-quick-action="action"] div[data-quick-action="text"]':"visibility:hidden;-webkit-transition:visibility 0s .3s;transition:visibility 0s .3s;","%_action-count-0":"visibility:hidden;opacity:0;","%_action-count-1 %controlButton":"display:none;",'%_action-count-1 %actionsContainer a[data-quick-action="action"]:only-of-type':"width:50px;height:50px;margin-bottom:0;-webkit-transform:none;transform:none;visibility:visible;",'%_action-count-1 %actionsContainer a[data-quick-action="action"]:only-of-type div[data-quick-action="text"]':"visibility:hidden;max-width:0;","%_align-left":"left:calc(50% - 144px);",'%_align-left %actionsContainer a[data-quick-action="action"] div[data-quick-action="text"]':"right:-16px;left:auto;-webkit-transform:translate(100%, -15px);transform:translate(100%, -15px);","@-webkit-keyframes %notify-chat":"0%{-webkit-transform:scale(0);transform:scale(0);}50%{-webkit-transform:scale(1.3);transform:scale(1.3);}100%{-webkit-transform:scale(1);transform:scale(1);}","@keyframes %notify-chat":"0%{-webkit-transform:scale(0);transform:scale(0);}50%{-webkit-transform:scale(1.3);transform:scale(1.3);}100%{-webkit-transform:scale(1);transform:scale(1);}"}},"wysiwyg.viewer.skins.quickActionBar.ovalSkin":{react:[["div","overlay",[],{}],["div","controlButton",[],{}],["div","actionsContainer",[],{}]],exports:{"qab-bottom":12,"max-actions":4},params:{colorScheme:"COLOR_SCHEME",actionsSHD:"BOX_SHADOW",actionsBorderSize:"BORDER_SIZE",actionsBorderColor:"BORDER_COLOR_ALPHA"},paramsDefaults:{colorScheme:"BRAND",actionsSHD:"none",actionsBorderSize:"0",actionsBorderColor:"rgba(255, 255, 255, 0)"},css:{"%":"content:[colorScheme];display:-webkit-box;display:-webkit-flex;display:flex;height:59px;bottom:12px;border-radius:30px;",'% div[data-quick-action="notifications"]':"background-color:#fe2020;border-radius:50%;border:1px solid #fff;-webkit-animation:notify-chat 0.4s ease-in-out;animation:notify-chat 0.4s ease-in-out;height:8px;width:8px;top:calc(50% - 20px);right:calc(50% - 14px);position:absolute;","%actionsContainer":"bottom:0;pointer-events:none;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:100%;[actionsSHD]border-radius:30px;",'%actionsContainer a[data-quick-action="action"]':"padding:0;pointer-events:auto;position:relative;width:10%;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:5px 0;box-sizing:border-box;width:68px;",'%actionsContainer a[data-quick-action="action"] div[data-quick-action="icon"]':"position:relative;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;-webkit-flex-basis:21px;flex-basis:21px;margin-top:2px;",'%actionsContainer a[data-quick-action="action"] div[data-quick-action="icon"] svg':"height:30px;width:50px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);",'%actionsContainer a[data-quick-action="action"] div[data-quick-action="text"]':"font:normal normal normal 12px / normal helvetica-w01-light, helvetica-w02-light, sans-serif;text-align:center;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;letter-spacing:0.2px;-webkit-flex-basis:15px;flex-basis:15px;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;padding:0 5px;",'%actionsContainer a[data-quick-action="action"]:active':"-webkit-filter:brightness(0.8);filter:brightness(0.8);",'%_hide-text %actionsContainer a[data-quick-action="action"] div[data-quick-action="text"]':"display:none;","%_view-mode-editor%_action-count-0":"display:none;","%_action-count-0":"display:none;","%overlay,%controlButton":"display:none;",'%actionsContainer div[data-quick-action="separator"]':"-webkit-box-flex:0;-webkit-flex:0 0 [actionsBorderSize];flex:0 0 [actionsBorderSize];background-color:[actionsBorderColor];","%_hide-text":"height:47px;border-radius:23px;",'%_hide-text div[data-quick-action="notifications"]':"top:calc(50% - 11px);","%_action-count-1":"left:calc(50% - 49px);","%_action-count-2":"left:calc(50% - 77px);","%_action-count-3":"left:calc(50% - 111px);","%_action-count-4,%_action-count-5":"left:calc(50% - 145px);",'%actionsContainer a[data-quick-action="action"]:nth-of-type(1)':"width:77px;padding-left:9px;border-bottom-left-radius:30px;border-top-left-radius:30px;",'%actionsContainer a[data-quick-action="action"]:nth-of-type(4),%actionsContainer a[data-quick-action="action"]:nth-last-of-type(1)':"width:77px;padding-right:9px;border-bottom-right-radius:30px;border-top-right-radius:30px;",'%actionsContainer a[data-quick-action="action"]:only-of-type':"width:98px;border-radius:30px;",'%actionsContainer a[data-quick-action="action"]:only-of-type div[data-quick-action="notifications"]':"right:calc(50% - 14px);",'%actionsContainer a[data-quick-action="action"]:nth-of-type(5)':"display:none;",'%actionsContainer a[data-quick-action="action"] div[data-quick-action="notifications"]':"top:calc(50% - 21px);right:calc(50% - 8px);",'%actionsContainer div[data-quick-action="separator"]:nth-of-type(4)':"display:none;","%_hide-text %actionsContainer":"border-radius:23px;",'%_hide-text %actionsContainer a[data-quick-action="action"]':"width:66px;",'%_hide-text %actionsContainer a[data-quick-action="action"]:nth-of-type(1)':"width:72px;padding-left:6px;border-bottom-left-radius:23px;border-top-left-radius:23px;",'%_hide-text %actionsContainer a[data-quick-action="action"]:nth-of-type(4),%_hide-text %actionsContainer a[data-quick-action="action"]:nth-last-of-type(1)':"width:72px;padding-right:6px;border-bottom-right-radius:23px;border-top-right-radius:23px;",'%_hide-text %actionsContainer a[data-quick-action="action"]:only-of-type':"width:48px;border-radius:50%;",'%_hide-text %actionsContainer a[data-quick-action="action"]:only-of-type div[data-quick-action="notifications"]':"right:calc(50% - 14px);",'%_hide-text %actionsContainer a[data-quick-action="action"] div[data-quick-action="notifications"]':"top:calc(50% - 11px);right:calc(50% - 12px);","%_hide-text%_action-count-1":"left:calc(50% - 24px);","%_hide-text%_action-count-2":"left:calc(50% - 72px);","%_hide-text%_action-count-3":"left:calc(50% - 105px);","%_hide-text%_action-count-4,%_hide-text%_action-count-5":"left:calc(50% - 138px);","@-webkit-keyframes %notify-chat":"0%{-webkit-transform:scale(0);transform:scale(0);}50%{-webkit-transform:scale(1.3);transform:scale(1.3);}100%{-webkit-transform:scale(1);transform:scale(1);}","@keyframes %notify-chat":"0%{-webkit-transform:scale(0);transform:scale(0);}50%{-webkit-transform:scale(1.3);transform:scale(1.3);}100%{-webkit-transform:scale(1);transform:scale(1);}"}},"wysiwyg.viewer.skins.quickActionBar.rectSkin":{react:[["div","overlay",[],{}],["div","controlButton",[],{}],["div","actionsContainer",[],{}]],exports:{"qab-left":12,"qab-bottom":12,"qab-width":296,"max-actions":4},params:{colorScheme:"COLOR_SCHEME",actionsSHD:"BOX_SHADOW",actionsBorderSize:"BORDER_SIZE",actionsBorderColor:"BORDER_COLOR_ALPHA"},paramsDefaults:{colorScheme:"BRAND",actionsSHD:"none",actionsBorderSize:"0",actionsBorderColor:"rgba(255, 255, 255, 0)"},css:{"%":"content:[colorScheme];display:-webkit-box;display:-webkit-flex;display:flex;height:59px;width:296px;left:calc(50% - 148px);bottom:12px;",'% div[data-quick-action="notifications"]':"background-color:#fe2020;border-radius:50%;border:1px solid #fff;-webkit-animation:notify-chat 0.4s ease-in-out;animation:notify-chat 0.4s ease-in-out;height:8px;width:8px;top:calc(50% - 20px);right:calc(50% - 14px);position:absolute;","%actionsContainer":"bottom:0;pointer-events:none;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:100%;[actionsSHD]",'%actionsContainer a[data-quick-action="action"]':"padding:0;pointer-events:auto;position:relative;width:10%;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:5px 0;box-sizing:border-box;",'%actionsContainer a[data-quick-action="action"] div[data-quick-action="icon"]':"position:relative;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;-webkit-flex-basis:21px;flex-basis:21px;margin-top:2px;",'%actionsContainer a[data-quick-action="action"] div[data-quick-action="icon"] svg':"height:30px;width:50px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);",'%actionsContainer a[data-quick-action="action"] div[data-quick-action="text"]':"font:normal normal normal 12px / normal helvetica-w01-light, helvetica-w02-light, sans-serif;text-align:center;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;letter-spacing:0.2px;-webkit-flex-basis:15px;flex-basis:15px;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;padding:0 5px;",'%actionsContainer a[data-quick-action="action"]:active':"-webkit-filter:brightness(0.8);filter:brightness(0.8);",'%_hide-text %actionsContainer a[data-quick-action="action"] div[data-quick-action="text"]':"display:none;","%_view-mode-editor%_action-count-0":"display:none;","%_action-count-0":"display:none;","%overlay,%controlButton":"display:none;",'%actionsContainer div[data-quick-action="separator"]':"-webkit-box-flex:0;-webkit-flex:0 0 [actionsBorderSize];flex:0 0 [actionsBorderSize];background-color:[actionsBorderColor];","%_hide-text":"height:47px;",'%_hide-text div[data-quick-action="notifications"]':"top:calc(50% - 11px);",'%actionsContainer a[data-quick-action="action"]:nth-of-type(5)':"display:none;",'%actionsContainer div[data-quick-action="separator"]:nth-of-type(4)':"display:none;","@-webkit-keyframes %notify-chat":"0%{-webkit-transform:scale(0);transform:scale(0);}50%{-webkit-transform:scale(1.3);transform:scale(1.3);}100%{-webkit-transform:scale(1);transform:scale(1);}","@keyframes %notify-chat":"0%{-webkit-transform:scale(0);transform:scale(0);}50%{-webkit-transform:scale(1.3);transform:scale(1.3);}100%{-webkit-transform:scale(1);transform:scale(1);}"}},"wysiwyg.viewer.skins.quickActionBarItem":{react:[["div","icon",[],{"data-quick-action":"icon"}],["div","text",[],{"data-quick-action":"text"}],["div","notifications",[],{"data-quick-action":"notification"}]],css:{}}};return t}.apply(i,[]))||(t.exports=e)},18:function(t,i){t.exports=s},19:function(t,i){t.exports=l},2:function(t,i){t.exports=o},3:function(t,i){t.exports=e},4:function(t,i){t.exports=n},5:function(t,i){t.exports=a},505:function(t,i,o){var e,n;e=[o(6),o(0),o(5),o(18)],void 0===(n=function(t,i,o,e){"use strict";return e({displayName:"QuickAction",propTypes:{svgString:o.string.isRequired,fillColor:o.string.isRequired,backgroundColor:o.string.isRequired,textColor:o.string.isRequired,text:o.string.isRequired,itemType:o.string.isRequired,anchorData:o.object,clickHandler:o.func,notificationCount:o.number},render:function(){return t.utils.createReactElement("a",i.assign({},this.props.anchorData,{"data-quick-action":"action","data-aid":this.props.itemType,style:{backgroundColor:this.props.backgroundColor,color:this.props.textColor},onClick:this.props.clickHandler}),[t.utils.createReactElement("div",{"data-quick-action":"icon",key:"icon",style:{fill:this.props.fillColor},dangerouslySetInnerHTML:{__html:this.props.svgString}},null),t.utils.createReactElement("div",{"data-quick-action":"text",key:"text"},this.props.text),t.utils.createReactElement("div",{"data-quick-action":"notifications",key:"notifications",style:{display:i.get(this.props,"notificationCount",0)>0?"initial":"none"}},null)])}})}.apply(i,e))||(t.exports=n)},506:function(t,i,o){var e,n;e=[o(0)],void 0===(n=function(t){"use strict";var i={black:"#000000",grey:"#808080"},o=/^(brand|grey|black)(?:\s(inv))?$/;return{resolveIconColors:function(e,n){var a=function(i){var e=o.exec(t.trim(i));return{type:t.get(e,[1],"brand"),invert:!!t.get(e,[2])}}(n),r=t.get(i,a.type);return a.invert?{fillColor:"#fff",backgroundColor:r||e,textColor:"#fff"}:{fillColor:r||e,backgroundColor:"#fff",textColor:r||i.black}}}}.apply(i,e))||(t.exports=n)},6:function(t,i){t.exports=r},7:function(t,i){t.exports=c}})});
//# sourceMappingURL=quickActionBar.min.js.map