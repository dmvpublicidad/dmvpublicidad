define("languageSelector",["lodash","core","santaProps","coreUtils","prop-types","santa-components","skins","coreMultilingual"],function(e,o,t,r,n,i,a,s){return function(e){var o={};function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)t.d(r,n,function(o){return e[o]}.bind(null,n));return r},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=1438)}({0:function(o,t){o.exports=e},1438:function(e,o,t){var r,n;r=[t(6),t(0),t(2),t(3),t(7),t(1439),t(483),t(1440)],void 0===(n=function(e,o,t,r,n,i,a){"use strict";var s=6,l=46,p=14,c={displayName:"LanguageSelector",mixins:[t.compMixins.skinBasedComp,t.compMixins.createChildComponentMixin],propTypes:{compProp:r.Types.Component.compProp.isRequired,compTheme:r.Types.Component.theme.isRequired,isExperimentOpen:r.Types.isExperimentOpen,isEnabled:r.Types.RendererModel.multilingual.isEnabled,languages:r.Types.RendererModel.multilingual.languages,currentLanguage:r.Types.RendererModel.multilingual.currentLanguage,setCurrentLanguageCode:r.Types.RendererModel.multilingual.setCurrentLanguageCode,scriptsLocationMap:r.Types.ServiceTopology.scriptsLocationMap,isPreviewMode:r.Types.isPreviewMode.isRequired},getMinContentHeight:function(){var e=this.props.compTheme.style.properties,t=e.itemFont,r=e.iconType,n=e.iconSize,i=function(e){return o.head(t.match(e)||[0])},a=parseInt(i(/\d+px/),10),s=parseFloat(i(/\d+\.?\d*em/)),l=Math.ceil(a*s),p="none"===r?0:o.parseInt(n,10);return Math.max(l,p)+20},getMinContentWidth:function(){var e=this.props.compTheme.style.properties,t=e.iconSize,r=e.iconType,n="iconOnly"!==this.props.compProp.itemFormat,i="none"!==r,a="circle"===r?1:13/8,c=o.parseInt(t,10)*a;return(i?c+s:0)+(n?p:0)+l},orderLanguages:function(e){var t=o.indexOf(this.props.compProp.languagesOrder,e.languageCode);return-1===t?1/0:t},createButton:function(e,t){return this.createChildComponent({language:e},"wysiwyg.viewer.components.LanguageButton","languageButton",o.assign({linguistFlags:this.props.scriptsLocationMap["linguist-flags"],id:this.props.id+e.languageCode+"Button"},t))},getOrderedLanguages:function(){return o.sortBy(this.props.languages,this.orderLanguages)},createDropdownButtons:function(e,t){var r=this,n=this.getOrderedLanguages(),i=this.props.currentLanguage,s=o.reject(n,this.props.currentLanguage);n=[i].concat(function(e){if(Array.isArray(e)){for(var o=0,t=Array(e.length);o<e.length;o++)t[o]=e[o];return t}return Array.from(e)}(s));var l=0;return t&&(n=n.reverse(),l=n.length-1),o.map(n,function(o,t){return r.createButton(o,{key:o.locale,style:{height:e},arrowIconMode:t===l?a.VISIBLE:a.HIDDEN,className:r.classSet({dropdownButton:!0,arrowButton:t===l}),selected:t===l,onClick:function(){r.props.setCurrentLanguageCode(o.languageCode),r.closeDropdown()}})})},getInitialState:function(){return{isDropdownOpen:!1,isDropdownReverted:!1}},toggleDropDown:function(){this.state.isDropdownOpen?this.closeDropdown():this.setState({isDropdownOpen:!0,isDropdownReverted:this.shouldDropdownOpenInReverse()})},closeDropdown:function(){this.setState({isDropdownOpen:!1})},shouldDropdownOpenInReverse:function(){if(!window)return!1;var e=window.innerHeight,o=this.refs[""].getBoundingClientRect(),t=o.top+o.height,r=e-o.top,n=this.getOrderedLanguages().length,i=2*parseInt(this.props.compTheme.style.properties.borderWidth,10),a=(this.props.style.height-i)*n+i;return t>=a&&!(r>=a)},getHorizontalComponent:function(){var t=o.map(this.getOrderedLanguages(),function(e){return this.createButton(e,{key:e.locale,arrowIconMode:a.HIDDEN,selected:e.locale===this.props.currentLanguage.locale,onClick:this.props.setCurrentLanguageCode,isHorizontal:!0})}.bind(this));return{"":{children:e.utils.createReactElement("div",{className:this.classSet({horizontal:!0}),children:t})}}},getDropdownComponent:function(){var o=this.props.componentPreviewState||this.state.isDropdownOpen,t=2*parseInt(this.props.compTheme.style.properties.borderWidth,10),r=this.props.style.height-t,n=this.getMinContentHeight()+t,i=this.getMinContentWidth()+t,s=this.state.isDropdownReverted,l={minWidth:this.props.style.width,left:0,top:s?"auto":0,bottom:s?0:"auto"};return{"":{tabIndex:1,className:this.classSet({dropdown:!0,open:o,revert:s}),onBlur:this.closeDropdown,style:{minHeight:n,minWidth:i},children:[this.createButton(this.props.currentLanguage,{className:this.classSet({currentLanguage:!0,hidden:o}),arrowIconMode:a.VISIBLE,onClick:this.toggleDropDown,ref:"currentLanguage"}),e.utils.createReactElement("div",{key:"dropdownWrapper",className:this.classSet({dropdownWrapper:!0,hidden:!o}),children:this.createDropdownButtons(r,s),ref:"dropdownWrapper",style:l})]}}},getMobileComponent:function(){var o=this;return{"":{className:this.classSet({mobileLanguageSelector:!0}),children:[this.createButton(this.props.currentLanguage,{className:this.classSet({currentLanguage:!0}),arrowIconMode:a.HIDDEN,onClick:function(){},ref:"currentLanguage"}),e.utils.createReactElement("select",{value:this.props.currentLanguage.languageCode,onChange:function(e){o.props.setCurrentLanguageCode(e.target.value)},children:this.getOrderedLanguages().map(function(o){return e.utils.createReactElement("option",{value:o.languageCode,children:o.name})})})]}}},getViewByCurrentMode:function(){return this.props.isMobileView?this.getMobileComponent():"dropdown"===this.props.compProp.displayMode?this.getDropdownComponent():this.getHorizontalComponent()},getSkinProperties:function(){if(this.props.isExperimentOpen("sv_multilingual")){var e=o.size(this.props.languages)>1,t=this.props.isPreviewMode||e;if(this.props.isEnabled&&!o.isEmpty(this.props.currentLanguage)&&t)return this.getViewByCurrentMode()}return{"":null}}};return t.compRegistrar.register("wysiwyg.viewer.components.LanguageSelector",c),n.skinsMap.addBatch(i),c}.apply(o,r))||(e.exports=n)},1439:function(e,o,t){var r;void 0===(r=function(){"use strict";var e={"wysiwyg.viewer.skins.LanguageButtonSkin":{react:[["div","icon",[],{}],["div","label",[],{}],["div","spacer",[],{}],["div","arrow-icon",[],{},["svg",null,[],{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 9.2828 4.89817"},["defs",null,[],{}],["title",null,[],{},"arrow&amp;v"],["path",null,["_cls-1"],{d:"M4.64116,4.89817a.5001.5001,0,0,1-.34277-.13574L.15727.86448A.50018.50018,0,0,1,.84282.136L4.64116,3.71165,8.44.136a.50018.50018,0,0,1,.68555.72852L4.98393,4.76243A.5001.5001,0,0,1,4.64116,4.89817Z"}]]]],params:{itemFont:"FONT",itemTextColor:"TEXT_COLOR",backgroundColor:"BG_COLOR_ALPHA",itemTextColorHover:"TEXT_COLOR",backgroundColorHover:"BG_COLOR_ALPHA",itemTextColorActive:"TEXT_COLOR",backgroundColorActive:"BG_COLOR_ALPHA",iconType:"ICON_TYPE",iconSize:"SIZE"},paramsDefaults:{itemFont:"font_0",itemTextColor:"color_1",backgroundColor:"color_4",itemTextColorHover:"color_1",backgroundColorHover:"color_4",itemTextColorActive:"color_1",backgroundColorActive:"color_4",iconType:"circle",iconSize:"16px"},css:{"%":"display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;cursor:pointer;line-height:0;[itemFont]  color:[itemTextColor];background-color:[backgroundColor];","% path":"fill:[itemTextColor];",'%:hover,%[data-preview="hover"]':"color:[itemTextColorHover];background-color:[backgroundColorHover];",'%:hover path,%[data-preview="hover"] path':"fill:[itemTextColorHover];",'%_selected:hover,%_selected[data-preview="hover"]':"color:[itemTextColorActive];background-color:[backgroundColorActive];",'%_selected:hover path,%_selected[data-preview="hover"] path':"fill:[itemTextColorActive];",'%:active,%[data-preview="active"],%_selected':"color:[itemTextColorActive];background-color:[backgroundColorActive];",'%:active path,%[data-preview="active"] path,%_selected path':"fill:[itemTextColorActive];","%_left":"-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;","%_left %spacer":"-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;","%_left %label%_has-text":"margin:0 0 0 14px;","%_left %icon%_has-icon":"margin:0 -6px 0 12px;","%_left %arrow-icon":"margin:0 14px 0 20px;","%_right":"-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;","%_right %spacer":"-webkit-box-ordinal-group:3;-webkit-order:2;order:2;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;","%_right %label%_has-text":"-webkit-box-ordinal-group:4;-webkit-order:3;order:3;margin:0 14px 0 0;","%_right %icon%_has-icon":"-webkit-box-ordinal-group:5;-webkit-order:4;order:4;margin:0 12px 0 -6px;","%_right %arrow-icon":"-webkit-box-ordinal-group:2;-webkit-order:1;order:1;margin:0 20px 0 14px;","%_center":"-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;","%_center%_horizontal %icon%_has-icon":"margin:0 4px 0 4px;","%_center%_horizontal %label%_has-text":"margin:0 4px 0 4px;","%_center %label%_has-text":"margin:0 0 0 14px;","%_center %icon%_has-icon":"margin:0 -6px 0 12px;","%_center %arrow-icon":"margin:0 14px 0 20px;","%_hidden %arrow-icon":"display:none;","%_hidden %spacer":"display:none;","%icon":"box-sizing:border-box;[iconType]","%icon %_iconImg":"display:block;height:[iconSize];","%arrow-icon":"line-height:0;","%arrow-icon svg":"min-width:12px;width:12px;height:auto;"}},"wysiwyg.viewer.skins.LanguageSelectorSkin":{react:[["div","beakerFitContentTestDiv",[],{}]],exports:{languageButton:{skin:"wysiwyg.viewer.skins.LanguageButtonSkin"}},params:{borderColor:"BORDER_COLOR_ALPHA",borderWidth:"BORDER_SIZE",borderRadius:"BORDER_RADIUS",boxShadow:"BOX_SHADOW",separatorColor:"COLOR_ALPHA"},paramsDefaults:{borderColor:"#202020",borderWidth:"1px",borderRadius:"5px",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.5)",separatorColor:"#fefefe"},css:{"%":"display:table;","%_horizontal":"display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:100%;box-sizing:border-box;border-style:solid;border-color:[borderColor];border-width:[borderWidth];overflow:hidden;[borderRadius]  [boxShadow]","%_horizontal > *":"-webkit-box-flex:1;-webkit-flex:auto;flex:auto;-webkit-box-align:center;-webkit-align-items:center;align-items:center;","%_horizontal %languageButton + %languageButton":"border-left-width:1px;border-left-style:solid;border-left-color:[separatorColor];","%_dropdown":"width:100%;position:relative;white-space:nowrap;display:block;","%_dropdown %_currentLanguage":"cursor:pointer;position:relative;height:100%;width:100%;box-sizing:border-box;border-style:solid;border-color:[borderColor];border-width:[borderWidth];[borderRadius]    [boxShadow]","%_dropdown %_dropdownWrapper":"z-index:99;overflow:hidden;position:absolute;[boxShadow]    box-sizing:border-box;border-style:solid;border-color:[borderColor];border-width:[borderWidth];[borderRadius]","%_dropdown %_dropdownWrapper %languageButton + %languageButton":"border-top-width:1px;border-top-style:solid;border-top-color:[separatorColor];","%_hidden":"display:none !important;","%_dropdownButton%_arrowButton %languageButtonarrow-icon":"-webkit-transform:scaleY(-1);transform:scaleY(-1);","%_currentLanguage %languageButtonlabel":"overflow:hidden;text-overflow:ellipsis;","%_open":"z-index:1002;","%_mobileLanguageSelector":"position:relative;z-index:auto;","%_mobileLanguageSelector %_currentLanguage":"cursor:pointer;position:relative;height:100%;width:100%;box-sizing:border-box;border-style:solid;border-color:[borderColor];border-width:[borderWidth];[borderRadius]    [boxShadow]","%_mobileLanguageSelector %languageButtonicon":"margin:0 !important;","%_mobileLanguageSelector select":"opacity:0;position:absolute;top:0;left:0;width:100%;height:100%;font-size:25px;"}}};return e}.apply(o,[]))||(e.exports=r)},1440:function(e,o,t){var r,n;function i(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}r=[t(6),t(0),t(4),t(2),t(5),t(3),t(76),t(483)],void 0===(n=function(e,o,t,r,n,a,s,l){"use strict";var p="shortName",c="fullName",d="iconOnly",u={displayName:"LanguageButton",mixins:[r.compMixins.skinBasedComp],propTypes:{compData:a.Types.Component.compData.isRequired,compProp:a.Types.Component.compProp.isRequired,compTheme:a.Types.Component.theme.isRequired,linguistFlags:n.string,onClick:n.func,arrowIconMode:n.string.isRequired,isHorizontal:n.bool},getTranslation:function(e){return t.translationsLoader.getTranslation("MULTILINGUAL","en",e)},getIconUrl:function(e){return s.utils.getFlagIconUrl(this.props.linguistFlags,e,this.props.compData.language.countryCode)},createLabel:function(){var e=this.props.compData.language,o=this.props.compProp.itemFormat;return o===p?e.languageCode.toUpperCase():o===c?e.name:void 0},createIcon:function(){var o=this.props.compTheme.style.properties.iconType,t=[e.utils.createReactElement("img",{src:this.getIconUrl(o),className:this.classSet({iconImg:!0})})];return{className:this.classSet({"has-icon":!0}),children:t}},onButtonClick:function(){this.props.onClick&&this.props.onClick(this.props.compData.language.languageCode)},getClassSet:function(){var e;return i(e={},this.props.compProp.alignTabs,!0),i(e,this.props.arrowIconMode,!0),i(e,"horizontal",this.props.isHorizontal),i(e,"selected",this.props.selected),e},getSkinProperties:function(){return{"":{className:this.classSet(this.getClassSet()),onClick:this.onButtonClick},label:{className:this.classSet({"has-text":this.props.compProp.itemFormat!==d}),children:this.createLabel()},icon:"none"===this.props.compTheme.style.properties.iconType?null:this.createIcon(),"arrow-icon":{hidden:this.props.arrowIconMode===l.HIDDEN}}}};return r.compRegistrar.register("wysiwyg.viewer.components.LanguageButton",u),u}.apply(o,r))||(e.exports=n)},2:function(e,t){e.exports=o},3:function(e,o){e.exports=t},4:function(e,o){e.exports=r},483:function(e,o,t){var r;void 0===(r=function(){"use strict";return{HIDDEN:"hidden",PLACEHOLDER:"placeholder",VISIBLE:"visible"}}.apply(o,[]))||(e.exports=r)},5:function(e,o){e.exports=n},6:function(e,o){e.exports=i},7:function(e,o){e.exports=a},76:function(e,o){e.exports=s}})});
//# sourceMappingURL=languageSelector.min.js.map