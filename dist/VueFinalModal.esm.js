function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var s=function(e){return function(e,t){return r(e.querySelectorAll(t)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},l=function(e){return e==document.activeElement},c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var n,i,o;return n=e,(i=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||l(this.lastElement())?(this.firstElement().focus(),void e.preventDefault()):void 0;l(this.firstElement())&&(this.lastElement().focus(),e.preventDefault())}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(e){e&&(this.root=e,this.elements=s(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&t(n.prototype,i),o&&t(n,o),e}(),u=function(e){var t=e.targetTouches?e.targetTouches[0]:e;return{x:t.clientX,y:t.clientY}},f=function(e,t,n){return Math.min(Math.max(t,e),n)},d=function(e){return Number(e.replace(/px$/,""))||0},v={down:{pc:"mousedown",m:"touchstart"},move:{pc:"mousemove",m:"touchmove"},up:{pc:"mouseup",m:"touchend"}},h=function(e,t,n){t.addEventListener(v[e].pc,n),t.addEventListener(v[e].m,n,{passive:!1})},p=function(e,t,n){t.removeEventListener(v[e].pc,n),t.removeEventListener(v[e].m,n)},m=!1;if("undefined"!=typeof window){var y={get passive(){m=!0}};window.addEventListener("testPassive",null,y),window.removeEventListener("testPassive",null,y)}var g,b,w="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),S=[],x=!1,T=0,E=-1,C=function(e,t){var n=!1;return function(e){for(var t=[];e;){if(t.push(e),e.classList.contains("vfm"))return t;e=e.parentElement}return t}(e).forEach((function(e){(function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight})(e)&&function(e,t){return!(0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight+t>=e.scrollHeight&&t>0)}(e,t)&&(n=!0)})),n},z=function(e){return S.some((function(){return C(e,-T)}))},k=function(e){var t=e||window.event;return!!z(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},O=function(e,t){if(e){if(!S.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};S=[].concat(r(S),[n]),w?(e.ontouchstart=function(e){1===e.targetTouches.length&&(E=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){T=e.targetTouches[0].clientY-E,!z(e.target)&&(t&&0===t.scrollTop&&T>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&T<0?k(e):e.stopPropagation())}(t,e)},x||(document.addEventListener("touchmove",k,m?{passive:!1}:void 0),x=!0)):function(e){if(void 0===b){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var i=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);b=document.body.style.paddingRight,document.body.style.paddingRight="".concat(i+n,"px")}}void 0===g&&(g=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},_=function(e){e?(S=S.filter((function(t){return t.targetElement!==e})),w?(e.ontouchstart=null,e.ontouchmove=null,x&&0===S.length&&(document.removeEventListener("touchmove",k,m?{passive:!1}:void 0),x=!1)):S.length||(void 0!==b&&(document.body.style.paddingRight=b,b=void 0),void 0!==g&&(document.body.style.overflow=g,g=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},$=function(){},D="enter",M="entering",R="leave",j="leavng";var L={type:[String,Object,Array],default:""},A={t:"ns-resize",tr:"nesw-resize",r:"ew-resize",br:"nwse-resize",b:"ns-resize",bl:"nesw-resize",l:"ew-resize",tl:"nwse-resize"},P={props:{name:{type:String,default:null},value:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:L,overlayClass:L,contentClass:L,styles:L,overlayStyle:L,contentStyle:{type:[Object,Array],default:function(){return{}}},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(t){var n=e(t);return"boolean"===n||"string"===n||t.nodeType===Node.ELEMENT_NODE}},transition:{type:[String,Object],default:"vfm"},overlayTransition:{type:[String,Object],default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1},drag:{type:Boolean,default:!1},fitParent:{type:Boolean,default:!0},dragSelector:{type:[Boolean,String],default:!1},keepChangedStyle:{type:Boolean,default:!1},resizeDirections:{type:Array,default:function(){return[]},validator:function(e){return["t","tr","r","br","b","bl","l","tl"].filter((function(t){return-1!==e.indexOf(t)})).length===e.length}}},data:function(){return{modalStackIndex:null,visible:!1,visibility:{modal:!1,overlay:!1,resize:!1},overlayTransitionState:null,modalTransitionState:null,stopEvent:!1,params:{},wrapperStyle:{},resizeStyle:{},resizeContentStyle:{},resolveToggle:$,rejectToggle:$}},computed:{api:function(){return this[this.$_options.key]},isComponentReadyToBeDestroyed:function(){return(this.hideOverlay||this.overlayTransitionState===R)&&this.modalTransitionState===R},calculateZIndex:function(){return!1===this.zIndex?!!this.zIndexAuto&&+this.zIndexBase+2*(this.modalStackIndex||0):this.zIndex},bindStyle:function(){return o({},!1!==this.calculateZIndex&&{zIndex:this.calculateZIndex})},bindContentStyle:function(){var e=[this.resizeContentStyle];return Array.isArray(this.contentStyle)?e.push.apply(e,r(this.contentStyle)):e.push(this.contentStyle),e},computedTransition:function(){return"string"==typeof this.transition?{name:this.transition}:o({},this.transition)},computedOverlayTransition:function(){return"string"==typeof this.overlayTransition?{name:this.overlayTransition}:o({},this.overlayTransition)},resize:function(){return this.resizeDirections.length>0}},watch:{value:function(e){if(this.stopEvent)this.stopEvent=!1;else if(this.mounted(),!e){if(this.emitEvent("before-close",!0))return void this.rejectToggle("hide");this.close()}},lockScroll:"handleLockScroll",hideOverlay:function(e){this.value&&!e&&(this.visibility.overlay=!0)},attach:"mounted",isComponentReadyToBeDestroyed:function(e){e&&(this.visible=!1)},drag:function(e){this.visible&&(e?this.addDragDown():this.removeDragDown())},resize:function(e){this.visible&&(e?this.addResizeDown():this.removeResizeDown())}},created:function(){this.api.modals.push(this)},mounted:function(){this.$focusTrap=new c,this.mounted()},beforeDestroy:function(){var e,t=this;this.close(),this.lockScroll&&this.$refs.vfmContainer&&_(this.$refs.vfmContainer),null==this||null===(e=this.$el)||void 0===e||e.remove();var n=this.api.modals.findIndex((function(e){return e===t}));this.api.modals.splice(n,1)},methods:{mounted:function(){var e=this;if(this.value){if(this.emitEvent("before-open",!1))return void this.rejectToggle("show");var t=this.getAttachElement();if(t||!1===this.attach){!1!==this.attach&&t.appendChild(this.$el);var n=this.api.openedModals.findIndex((function(t){return t===e}));-1!==n&&this.api.openedModals.splice(n,1),this.api.openedModals.push(this),this.modalStackIndex=this.api.openedModals.length-1,this.handleLockScroll(),this.api.openedModals.filter((function(t){return t!==e})).forEach((function(e,n){e.getAttachElement()===t&&(e.modalStackIndex=n,e.visibility.overlay=!1)})),this.visible=!0,this.$nextTick((function(){e.startTransitionEnter()}))}else!1!==t&&console.warn("Unable to locate target ".concat(this.attach))}},close:function(){var e=this,t=this.api.openedModals.findIndex((function(t){return t===e}));if(-1!==t&&this.api.openedModals.splice(t,1),this.api.openedModals.length>0){var n=this.api.openedModals[this.api.openedModals.length-1];(n.focusRetain||n.focusTrap)&&n.$refs.vfmContainer.focus(),!n.hideOverlay&&(n.visibility.overlay=!0)}this.drag&&this.removeDragDown(),this.resize&&this.removeResizeDown(),this.startTransitionLeave()},startTransitionEnter:function(){this.visibility.overlay=!0,this.visibility.modal=!0},startTransitionLeave:function(){this.visibility.overlay=!1,this.visibility.modal=!1},handleLockScroll:function(){var e=this;this.value&&this.$nextTick((function(){e.lockScroll?O(e.$refs.vfmContainer,{reserveScrollBarGap:!0}):_(e.$refs.vfmContainer)}))},getAttachElement:function(){return!1!==this.attach&&("string"==typeof this.attach?!!window&&window.document.querySelector(this.attach):this.attach)},beforeOverlayEnter:function(){this.overlayTransitionState=M},afterOverlayEnter:function(){this.overlayTransitionState=D},beforeOverlayLeave:function(){this.overlayTransitionState=j},afterOverlayLeave:function(){this.overlayTransitionState=R},beforeModalEnter:function(){this.modalTransitionState=M},afterModalEnter:function(){this.modalTransitionState=D,(this.focusRetain||this.focusTrap)&&this.$refs.vfmContainer.focus(),this.focusTrap&&this.$focusTrap.enable(this.$refs.vfmContainer),this.drag&&this.addDragDown(),this.resize&&this.addResizeDown(),this.$emit("opened",this.createModalEvent({type:"opened"})),this.resolveToggle("show")},beforeModalLeave:function(){this.modalTransitionState=j,this.$focusTrap.enabled()&&this.$focusTrap.disable()},afterModalLeave:function(){this.modalTransitionState=R,this.modalStackIndex=null,this.lockScroll&&_(this.$refs.vfmContainer),this.keepChangedStyle||(this.wrapperStyle={},this.resizeContentStyle={});var e=!1,t=this.createModalEvent({type:"closed",stop:function(){e=!0}});this.$emit("closed",t),this.resolveToggle("hide"),e||(this.params={})},onClickContainer:function(){this.$emit("click-outside",this.createModalEvent({type:"click-outside"})),this.clickToClose&&this.$emit("input",!1)},onEsc:function(){this.visible&&this.escToClose&&this.$emit("input",!1)},createModalEvent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o({ref:this},e)},emitEvent:function(e,t){var n=!1,i=this.createModalEvent({type:e,stop:function(){n=!0}});return this.$emit(e,i),!!n&&(this.stopEvent=!0,this.$emit("input",t),!0)},toggle:function(e,t){var n=arguments,i=this;return new Promise((function(o,r){i.resolveToggle=function(e){o(e),i.resolveToggle=$},i.rejectToggle=function(e){r(e),i.rejectToggle=$};var a="boolean"==typeof e?e:!i.value;a&&2===n.length&&(i.params=t),i.$emit("input",a)}))},pointerDown:function(e){var t=this;e.stopPropagation();var n,i=this.$refs,r=i.vfmContainer,a=i.vfmWrapper,s=i.vfmContent,l=e.target.getAttribute("direction");if(l)n="resize";else{if(!function(e,t,n){return"string"!=typeof n||Array.apply(null,t.querySelectorAll(n)).includes(e.target)}(e,s,this.dragSelector))return;n="drag"}this.$emit("".concat(n,":start"),e);var c=u(e),v=this.fitParent&&function(e,t,n){var i=e.getBoundingClientRect(),o=n.getBoundingClientRect();return{rectContainer:i,rectContent:o,minTop:d(t.style.top)+i.top-o.top,minLeft:d(t.style.left)+i.left-o.left,maxTop:d(t.style.top)+i.bottom-o.bottom,maxLeft:d(t.style.left)+i.right-o.right}}(r,a,s),m={top:d(a.style.top),left:d(a.style.left)},y=window.getComputedStyle(s),g=y.position,b=y.width,w=y.height;b=d(b),w=d(w);var S,x,T,E,C,z,k="absolute"===g,O="resize"===n&&(S=document.body,x="cursor",T=A[l],E=S.style[x],S.style[x]=T,function(){S.style[x]=E});C=function(e){t.$emit("".concat(n,":move"),e),e.stopPropagation();var i=u(e),r={x:i.x-c.x,y:i.y-c.y};"resize"===n&&((r=t.getResizeOffset(l,r,v.rectContainer,v.rectContent,k)).width&&(t.resizeContentStyle.width=b-r.width+"px"),r.height&&(t.resizeContentStyle.height=w-r.height+"px")),t.wrapperStyle=function(e,t,n,i,r){var a=e.top+t.y,s=e.left+t.x;return n&&(a=f(i.minTop,a,i.maxTop),s=f(i.minLeft,s,i.maxLeft)),o({top:a+"px",left:s+"px",position:"relative",touchAction:"none"},r&&{height:"-webkit-fill-available",width:"-webkit-fill-available"})}(m,r,t.fitParent,v,k)},z=function(e){t.resize&&t.resetResizeStyle(),"resize"===n&&O&&O(),t.$emit("".concat(n,":end"),e)},h("move",document,C),h("up",document,(function e(t){z(t),p("move",document,C),p("up",document,e)}))},addDragDown:function(){h("down",this.$refs.vfmContent,this.pointerDown),this.wrapperStyle.touchAction="none"},removeDragDown:function(){p("down",this.$refs.vfmContent,this.pointerDown)},addResizeDown:function(){var e=this;this.resetResizeStyle(),window.addEventListener("resize",this.resetResizeStyle),this.visibility.resize=!0,this.$nextTick((function(){h("down",e.$refs.vfmResize,e.pointerDown)}))},removeResizeDown:function(){window.removeEventListener("resize",this.resetResizeStyle),p("down",this.$refs.vfmResize,this.pointerDown),this.visibility.resize=!1},resetResizeStyle:function(){var e=this.$refs.vfmContent.getBoundingClientRect(),t=e.width,n=e.height,i=e.top,o=e.left;this.resizeStyle={top:i+"px",left:o+"px",width:t+"px",height:n+"px",touchAction:"none"}},getResizeOffset:function(e,t,n,i,o){var r=this,a={x:0,y:0,width:0,height:0},s={t:function(){var e=r.fitParent?f(n.top-i.top,t.y,i.height):t.y;a.y=o?e:e/2,a.height=e},b:function(){var e=r.fitParent?f(-i.height,t.y,n.bottom-i.bottom):t.y;a.y=o?0:e/2,a.height=-e},l:function(){var e=r.fitParent?f(n.left-i.left,t.x,i.width):t.x;a.x=e/2,a.width=e},r:function(){var e=r.fitParent?f(-i.width,t.x,n.right-i.right):t.x;a.x=e/2,a.width=-e},tl:function(){s.t(),s.l()},tr:function(){s.t(),s.r()},br:function(){s.b(),s.r()},bl:function(){s.b(),s.l()}};return s[e](),a}}};var B,I=function(e,t,n,i,o,r,a,s,l,c){"boolean"!=typeof a&&(l=s,s=a,a=!1);var u,f="function"==typeof n?n.options:n;if(e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,o&&(f.functional=!0)),i&&(f._scopeId=i),r?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},f._ssrRegister=u):t&&(u=a?function(e){t.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),u)if(f.functional){var d=f.render;f.render=function(e,t){return u.call(t),d(e,t)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,u):[u]}return n},N="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var U={};var F=I({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.ssr||e.visible?n("div",{directives:[{name:"show",rawName:"v-show",value:!e.ssr||e.visible,expression:"!ssr || visible"}],staticClass:"vfm vfm--inset",class:[!1===e.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":e.preventClick}],style:e.bindStyle,on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.onEsc(t)}}},[n("transition",e._b({ref:"vfmOverlayTransition",on:{"before-enter":e.beforeOverlayEnter,"after-enter":e.afterOverlayEnter,"before-leave":e.beforeOverlayLeave,"after-leave":e.afterOverlayLeave}},"transition",e.computedOverlayTransition,!1),[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.hideOverlay&&e.visibility.overlay,expression:"!hideOverlay && visibility.overlay"}],staticClass:"vfm__overlay vfm--overlay vfm--absolute vfm--inset",class:e.overlayClass,style:e.overlayStyle})]),e._v(" "),n("transition",e._b({ref:"vfmTransition",on:{"before-enter":e.beforeModalEnter,"after-enter":e.afterModalEnter,"before-leave":e.beforeModalLeave,"after-leave":e.afterModalLeave}},"transition",e.computedTransition,!1),[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visibility.modal,expression:"visibility.modal"}],ref:"vfmContainer",staticClass:"vfm__container vfm--absolute vfm--inset vfm--outline-none",class:e.classes,style:e.styles,attrs:{"aria-expanded":e.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1"},on:{click:function(t){return t.target!==t.currentTarget?null:e.onClickContainer(t)}}},[n("div",{ref:"vfmWrapper",staticClass:"vfm__wrapper",style:e.wrapperStyle,on:{click:function(t){return t.target!==t.currentTarget?null:e.onClickContainer(t)}}},[n("div",{ref:"vfmContent",staticClass:"vfm__content",class:[e.contentClass,{"vfm--prevent-auto":e.preventClick}],style:e.bindContentStyle},[e._t("default",null,{params:e.params})],2)])])]),e._v(" "),e.visibility.resize&&e.visibility.modal?n("div",{ref:"vfmResize",staticClass:"vfm__resize vfm--fixed vfm--prevent-none vfm--select-none",style:e.resizeStyle},e._l(e.resizeDirections,(function(e){return n("div",{key:e,staticClass:"vfm--absolute vfm--prevent-auto",class:"vfm--resize-"+e,attrs:{direction:e}})})),0):e._e()],1):e._e()},staticRenderFns:[]},(function(e){e&&e("data-v-77f1c732_0",{source:".vfm--fixed[data-v-77f1c732]{position:fixed}.vfm--absolute[data-v-77f1c732]{position:absolute}.vfm--inset[data-v-77f1c732]{top:0;right:0;bottom:0;left:0}.vfm--overlay[data-v-77f1c732]{background-color:rgba(0,0,0,.5)}.vfm--prevent-none[data-v-77f1c732]{pointer-events:none}.vfm--prevent-auto[data-v-77f1c732]{pointer-events:auto}.vfm--outline-none[data-v-77f1c732]:focus{outline:0}.vfm-enter-active[data-v-77f1c732],.vfm-leave-active[data-v-77f1c732]{transition:opacity .2s}.vfm-enter[data-v-77f1c732],.vfm-leave-to[data-v-77f1c732]{opacity:0}.vfm--select-none[data-v-77f1c732]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vfm--resize-bl[data-v-77f1c732],.vfm--resize-br[data-v-77f1c732],.vfm--resize-tl[data-v-77f1c732],.vfm--resize-tr[data-v-77f1c732]{width:12px;height:12px;z-index:10}.vfm--resize-t[data-v-77f1c732]{top:-6px;left:0;width:100%;height:12px;cursor:ns-resize}.vfm--resize-tr[data-v-77f1c732]{top:-6px;right:-6px;cursor:nesw-resize}.vfm--resize-r[data-v-77f1c732]{top:0;right:-6px;width:12px;height:100%;cursor:ew-resize}.vfm--resize-br[data-v-77f1c732]{bottom:-6px;right:-6px;cursor:nwse-resize}.vfm--resize-b[data-v-77f1c732]{bottom:-6px;left:0;width:100%;height:12px;cursor:ns-resize}.vfm--resize-bl[data-v-77f1c732]{bottom:-6px;left:-6px;cursor:nesw-resize}.vfm--resize-l[data-v-77f1c732]{top:0;left:-6px;width:12px;height:100%;cursor:ew-resize}.vfm--resize-tl[data-v-77f1c732]{top:-6px;left:-6px;cursor:nwse-resize}",map:void 0,media:void 0})}),P,"data-v-77f1c732",false,undefined,!1,(function(e){return function(e,t){return function(e,t){var n=N?t.media||"default":e,i=U[n]||(U[n]={ids:new Set,styles:[]});if(!i.ids.has(e)){i.ids.add(e);var o=t.source;if(t.map&&(o+="\n/*# sourceURL="+t.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",t.media&&i.element.setAttribute("media",t.media),void 0===B&&(B=document.head||document.getElementsByTagName("head")[0]),B.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(o),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{var r=i.ids.size-1,a=document.createTextNode(o),s=i.element.childNodes;s[r]&&i.element.removeChild(s[r]),s.length?i.element.insertBefore(a,s[r]):i.element.appendChild(a)}}}(e,t)}}),void 0,void 0),H=I({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modals-container"},e._l(e.api.dynamicModals,(function(t,i){return n(t.component,e._g(e._b({key:t.id,tag:"component",on:{closed:function(t){return e.slice(i)},"before-open":function(n){return e.beforeOpen(n,t,i)},opened:t.opened},scopedSlots:e._u([e._l(t.slots,(function(t,i){return{key:i,fn:function(){return[e.isString(t)?n("div",{key:i,domProps:{innerHTML:e._s(t)}}):n(t.component,e._g(e._b({key:i,tag:"component"},"component",t.bind,!1),t.on))]},proxy:!0}}))],null,!0),model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"modal.value"}},"component",t.bind,!1),t.on))})),1)},staticRenderFns:[]},undefined,{props:{},computed:{api:function(){return this[this.$_options.key]}},methods:{slice:function(e){this.api.dynamicModals.splice(e,1)},beforeOpen:function(e,t,n){var i=this;e.ref.params=t.params,this.$nextTick((function(){t.value||(i.slice(n),t.reject("show"))}))},isString:function(e){return"string"==typeof e}}},undefined,false,undefined,!1,void 0,void 0,void 0);function K(e,t){var n=o({},e);return Object.assign(n.props,{$_options:{type:Object,default:function(){return t}}}),n}function V(t,n){var i=function(t,n){var i;return function(){return i={show:function(t){for(var i=this,o=arguments.length,r=new Array(o>1?o-1:0),a=1;a<o;a++)r[a-1]=arguments[a];switch(e(t)){case"string":return this.toggle.apply(this,[t,!0].concat(r));case"object":return Promise.allSettled([new Promise((function(e,o){var a={value:!0,id:Symbol("dynamicModal"),component:n.componentName,bind:{},slots:{},on:{},params:r[0],reject:o,opened:function(){e("show")}};i.dynamicModals.push(Object.assign(a,t))}))])}},hide:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.toggle(t,!1)},hideAll:function(){return this.hide.apply(this,r(this.openedModals.map((function(e){return e.name}))))},toggle:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var o=Array.isArray(e)?this.get.apply(this,r(e)):this.get(e);return Promise.allSettled(o.map((function(e){return e.toggle.apply(e,n)})))},get:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.modals.filter((function(e){return t.includes(e.name)}))},dynamicModals:[],openedModals:[],modals:[]},t.observable(i)}}(t,n)();Object.defineProperty(t.prototype,n.key,{get:function(){return i}})}var W={componentName:"VueFinalModal",dynamicContainerName:"ModalsContainer",key:"$vfm"};export default function(e){return{install:function(t,n){var i=Object.assign({},W,e,n);(function(e,t,n){return!(e||t||n)||("undefined"==typeof window||(e&&console.error("[vue-final-modal] Duplicate registration API key of VueFinalModal."),t&&console.error("[vue-final-modal] Duplicate registration componentName of VueFinalModal."),n&&console.error("[vue-final-modal] Duplicate registration dynamicContainerName of ModalsContainer.")),!1)})(t.prototype[i.key],t.options.components[i.componentName],t.options.components[i.dynamicContainerName])&&(V(t,i),function(e,t){e.component(t.componentName,K(F,t))}(t,i),function(e,t){e.component(t.dynamicContainerName,K(H,t))}(t,i))}}}
//# sourceMappingURL=VueFinalModal.esm.js.map
