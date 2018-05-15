/*!
 * HC-Sticky
 * =========
 * Version: 2.1.4
 * Author: Some Web Media
 * Author URL: http://somewebmedia.com
 * Plugin URL: https://github.com/somewebmedia/hc-sticky
 * Description: Cross-browser plugin that makes any element on your page visible while you scroll
 * License: MIT
 */
!function(t,e){"use strict";if("object"==typeof module&&"object"==typeof module.exports){if(!t.document)throw new Error("HC-Sticky requires a browser to run.");module.exports=e(t)}else"function"==typeof define&&define.amd?define("hcSticky",[],e(t)):e(t)}("undefined"!=typeof window?window:this,function(t){"use strict";var e={top:0,bottom:0,bottomEnd:0,innerTop:0,innerSticker:null,stickyClass:"sticky",stickTo:null,followScroll:!0,queries:null,queryFlow:"down",onStart:null,onStop:null,onBeforeResize:null,onResize:null,resizeDebounce:100,disable:!1},o=t.document,i=function(n,s){if("string"==typeof n&&(n=o.querySelector(n)),!n)return!1;var r={},l=i.Helpers,a=n.parentNode;"static"===l.getStyle(a,"position")&&(a.style.position="relative");var c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l.isEmptyObject(t)&&!l.isEmptyObject(r)||(r=Object.assign({},e,r,t))},f=function(){return r.disable},d=function(){if(r.queries){var o=t.innerWidth,i=r.queryFlow,n=r.queries;if(function(t){r=Object.assign({},e,t||{})}(s),"up"===i)for(var a in n)o>=a&&!l.isEmptyObject(n[a])&&c(n[a]);else{var f=[];for(var d in r.queries){var p={};p[d]=n[d],f.push(p)}for(var u=f.length-1;u>=0;u--){var m=f[u],g=Object.keys(m)[0];o<=g&&!l.isEmptyObject(m[g])&&c(m[g])}}}},p={css:{},position:null,stick:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l.hasClass(n,r.stickyClass)||(!1===u.isAttached&&u.attach(),p.position="fixed",n.style.position="fixed",n.style.left=u.offsetLeft+"px",n.style.width=u.width,void 0===t.bottom?n.style.bottom="auto":n.style.bottom=t.bottom+"px",void 0===t.top?n.style.top="auto":n.style.top=t.top+"px",n.classList?n.classList.add(r.stickyClass):n.className+=" "+r.stickyClass,r.onStart&&r.onStart.call(n,r))},reset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t.disable=t.disable||!1,"fixed"===p.position||null===p.position||!(void 0===t.top&&void 0===t.bottom||void 0!==t.top&&(parseInt(l.getStyle(n,"top"))||0)===t.top||void 0!==t.bottom&&(parseInt(l.getStyle(n,"bottom"))||0)===t.bottom)){!0===t.disable?!0===u.isAttached&&u.detach():!1===u.isAttached&&u.attach();var e=t.position||p.css.position;p.position=e,n.style.position=e,n.style.left=!0===t.disable?p.css.left:u.positionLeft+"px",n.style.width="absolute"!==e?p.css.width:u.width,void 0===t.bottom?n.style.bottom=!0===t.disable?"":"auto":n.style.bottom=t.bottom+"px",void 0===t.top?n.style.top=!0===t.disable?"":"auto":n.style.top=t.top+"px",n.classList?n.classList.remove(r.stickyClass):n.className=n.className.replace(new RegExp("(^|\\b)"+r.stickyClass.split(" ").join("|")+"(\\b|$)","gi")," "),r.onStop&&r.onStop.call(n,r)}}},u={el:o.createElement("div"),offsetLeft:null,positionLeft:null,width:null,isAttached:!1,init:function(){for(var t in p.css)u.el.style[t]=p.css[t];var e=l.getStyle(n);u.offsetLeft=l.offset(n).left-(parseInt(e.marginLeft)||0),u.positionLeft=l.position(n).left,u.width=l.getStyle(n,"width")},attach:function(){a.insertBefore(u.el,n.nextSibling),u.isAttached=!0},detach:function(){u.el=a.removeChild(u.el),u.isAttached=!1}},m=void 0,g=void 0,h=void 0,y=void 0,v=void 0,b=void 0,S=void 0,w=void 0,k=void 0,E=void 0,x=void 0,L=void 0,T=void 0,j=void 0,C=void 0,O=void 0,z=void 0,N=void 0,R=function(){p.css=function(t){var e=l.getCascadedStyle(t),o=l.getStyle(t),i={height:t.offsetHeight+"px",left:e.left,right:e.right,top:e.top,bottom:e.bottom,position:o.position,display:o.display,verticalAlign:o.verticalAlign,boxSizing:o.boxSizing,marginLeft:e.marginLeft,marginRight:e.marginRight,marginTop:e.marginTop,marginBottom:e.marginBottom,paddingLeft:e.paddingLeft,paddingRight:e.paddingRight};return e.float&&(i.float=e.float||"none"),e.cssFloat&&(i.cssFloat=e.cssFloat||"none"),o.MozBoxSizing&&(i.MozBoxSizing=o.MozBoxSizing),i.width="auto"!==e.width?e.width:"border-box"===i.boxSizing||"border-box"===i.MozBoxSizing?t.offsetWidth+"px":o.width,i}(n),u.init(),m=!(!r.stickTo||!("document"===r.stickTo||r.stickTo.nodeType&&9===r.stickTo.nodeType||"object"==typeof r.stickTo&&r.stickTo instanceof("undefined"!=typeof HTMLDocument?HTMLDocument:Document))),g=r.stickTo?m?o:"string"==typeof r.stickTo?o.querySelector(r.stickTo):r.stickTo:a,C=(N=function(){var t=n.offsetHeight+(parseInt(p.css.marginTop)||0)+(parseInt(p.css.marginBottom)||0),e=(C||0)-t;return e>=-1&&e<=1?C:t})(),y=(z=function(){return m?Math.max(o.documentElement.clientHeight,o.body.scrollHeight,o.documentElement.scrollHeight,o.body.offsetHeight,o.documentElement.offsetHeight):g.offsetHeight})(),v=m?0:l.offset(g).top,b=r.stickTo?m?0:l.offset(a).top:v,S=t.innerHeight,O=n.offsetTop-(parseInt(p.css.marginTop)||0),h=r.innerSticker?"string"==typeof r.innerSticker?o.querySelector(r.innerSticker):r.innerSticker:null,w=isNaN(r.top)&&r.top.indexOf("%")>-1?parseFloat(r.top)/100*S:r.top,k=isNaN(r.bottom)&&r.bottom.indexOf("%")>-1?parseFloat(r.bottom)/100*S:r.bottom,E=h?h.offsetTop:r.innerTop?r.innerTop:0,x=isNaN(r.bottomEnd)&&r.bottomEnd.indexOf("%")>-1?parseFloat(r.bottomEnd)/100*S:r.bottomEnd,L=v-w+E+O},H=t.pageYOffset||o.documentElement.scrollTop,A=0,B=void 0,I=function(){C=N(),y=z(),T=v+y-w-x,j=C>S;var e=t.pageYOffset||o.documentElement.scrollTop,i=Math.round(l.offset(n).top),s=i-e,c=void 0;B=e<H?"up":"down",A=e-H,H=e,e>L?T+w+(j?k:0)-(r.followScroll&&j?0:w)<=e+C-E-(C-E>S-(L-E)&&r.followScroll&&(c=C-S-E)>0?c:0)?p.reset({position:"absolute",bottom:b+a.offsetHeight-T-w}):j&&r.followScroll?"down"===B?s+C+k<=S?p.stick({bottom:k}):"fixed"===p.position&&p.reset({position:"absolute",top:i-w-L-A+E}):s+E<0&&"fixed"===p.position?p.reset({position:"absolute",top:i-w-L+E-A}):i>=e+w-E&&p.stick({top:w-E}):p.stick({top:w-E}):p.reset({disable:!0})},q=!1,F=!1,M=function(){q&&(l.event.unbind(t,"scroll",I),q=!1)},D=function(){R(),C>=y?M():(I(),q||(l.event.bind(t,"scroll",I),q=!0))},W=function(){n.style.position="",n.style.left="",n.style.top="",n.style.bottom="",n.style.width="",n.classList?n.classList.remove(r.stickyClass):n.className=n.className.replace(new RegExp("(^|\\b)"+r.stickyClass.split(" ").join("|")+"(\\b|$)","gi")," "),p.css={},p.position=null,!0===u.isAttached&&u.detach()},P=function(){W(),d(),f()?M():D()},V=function(){r.onBeforeResize&&r.onBeforeResize.call(n,r),P(),r.onResize&&r.onResize.call(n,r)},Y=r.resizeDebounce?l.debounce(V,r.resizeDebounce):V,$=function(){F&&(l.event.unbind(t,"resize",Y),F=!1),M()},Q=function(){F||(l.event.bind(t,"resize",Y),F=!0),d(),f()?M():D()};this.options=function(t){return t?r.option||null:Object.assign({},r)},this.reinit=P,this.update=function(t){c(t),P()},this.attach=Q,this.detach=$,this.destroy=function(){$(),W()},c(s),Q(),l.event.bind(t,"load",P)};if(void 0!==t.jQuery){var n=t.jQuery;n.fn.extend({hcSticky:function(t){return this.length?this.each(function(){var e=n.data(this,"hcSticky");e?e.update(t):(e=new i(this,t),n.data(this,"hcSticky",e))}):this}})}return t.hcSticky=t.hcSticky||i,i}),function(t){"use strict";var e=t.hcSticky,o=t.document;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var o=Object(t),i=1;i<arguments.length;i++){var n=arguments[i];if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(o[s]=n[s])}return o},writable:!0,configurable:!0}),Array.prototype.forEach||(Array.prototype.forEach=function(t){var e,o;if(null==this)throw new TypeError("this is null or not defined");var i=Object(this),n=i.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(arguments.length>1&&(e=arguments[1]),o=0;o<n;){var s;o in i&&(s=i[o],t.call(e,s,o,i)),o++}});var i=function(){function e(e){var o=t.event;return o.target=o.target||o.srcElement||e,o}var i=o.documentElement,n=function(){};i.addEventListener?n=function(t,e,o){t.addEventListener(e,o,!1)}:i.attachEvent&&(n=function(t,o,i){t[o+i]=i.handleEvent?function(){var o=e(t);i.handleEvent.call(i,o)}:function(){var o=e(t);i.call(t,o)},t.attachEvent("on"+o,t[o+i])});var s=function(){};return i.removeEventListener?s=function(t,e,o){t.removeEventListener(e,o,!1)}:i.detachEvent&&(s=function(t,e,o){t.detachEvent("on"+e,t[e+o]);try{delete t[e+o]}catch(i){t[e+o]=void 0}}),{bind:n,unbind:s}}(),n=function(e,i){return t.getComputedStyle?i?o.defaultView.getComputedStyle(e,null).getPropertyValue(i):o.defaultView.getComputedStyle(e,null):e.currentStyle?i?e.currentStyle[i.replace(/-\w/g,function(t){return t.toUpperCase().replace("-","")})]:e.currentStyle:void 0},s=function(e){var i=e.getBoundingClientRect(),n=t.pageYOffset||o.documentElement.scrollTop,s=t.pageXOffset||o.documentElement.scrollLeft;return{top:i.top+n,left:i.left+s}};e.Helpers={isEmptyObject:function(t){for(var e in t)return!1;return!0},debounce:function(t,e,o){var i=void 0;return function(){var n=this,s=arguments,r=o&&!i;clearTimeout(i),i=setTimeout(function(){i=null,o||t.apply(n,s)},e),r&&t.apply(n,s)}},hasClass:function(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)},offset:s,position:function(t){var e=t.offsetParent,o=s(e),i=s(t),r=n(e),l=n(t);return o.top+=parseInt(r.borderTopWidth)||0,o.left+=parseInt(r.borderLeftWidth)||0,{top:i.top-o.top-(parseInt(l.marginTop)||0),left:i.left-o.left-(parseInt(l.marginLeft)||0)}},getStyle:n,getCascadedStyle:function(e){var i=e.cloneNode(!0);i.style.display="none",Array.prototype.slice.call(i.querySelectorAll('input[type="radio"]')).forEach(function(t){t.removeAttribute("name")}),e.parentNode.insertBefore(i,e.nextSibling);var n=void 0;i.currentStyle?n=i.currentStyle:t.getComputedStyle&&(n=o.defaultView.getComputedStyle(i,null));var s={};for(var r in n)!isNaN(r)||"string"!=typeof n[r]&&"number"!=typeof n[r]||(s[r]=n[r]);if(Object.keys(s).length<3){s={};for(var l in n)isNaN(l)||(s[n[l].replace(/-\w/g,function(t){return t.toUpperCase().replace("-","")})]=n.getPropertyValue(n[l]))}if(s.margin||"auto"!==s.marginLeft?s.margin||s.marginLeft!==s.marginRight||s.marginLeft!==s.marginTop||s.marginLeft!==s.marginBottom||(s.margin=s.marginLeft):s.margin="auto",!s.margin&&"0px"===s.marginLeft&&"0px"===s.marginRight){var a=e.offsetLeft-e.parentNode.offsetLeft,c=a-(parseInt(s.left)||0)-(parseInt(s.right)||0),f=e.parentNode.offsetWidth-e.offsetWidth-a-(parseInt(s.right)||0)+(parseInt(s.left)||0)-c;0!==f&&1!==f||(s.margin="auto")}return i.parentNode.removeChild(i),i=null,s},event:i}}(window);