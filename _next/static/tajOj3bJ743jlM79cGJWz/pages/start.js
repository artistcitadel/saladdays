(window.webpackJsonp=window.webpackJsonp||[]).push([["e842"],{DDuk:function(e,t,n){"use strict";var r=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("pbKT")),i=r(n("0iUn")),a=r(n("sLSF")),s=r(n("Tit0")),u=r(n("MI3g")),c=r(n("a7VT")),l=r(n("q1tI")),f=r(n("eXxR")),p=r(n("m/Pd")),d=r(n("ELEi")),y=n("b6Qr");function h(e){var t=function(){if("undefined"==typeof Reflect||!o.default)return!1;if(o.default.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call((0,o.default)(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=(0,o.default)(r,arguments,i)}else n=r.apply(this,arguments);return(0,u.default)(this,n)}}var m=l.default.createElement("div",null,"The Leading React SOFTWARE Follower.");function v(e){return m}var b={overflow:"hidden",backgroundSize:"cover",backgroundPosition:"center center"},g="/static/media/videos/intro.mp4",w=l.default.createElement("link",{rel:"stylesheet",href:"/static/media/css/fonts/foundation-icons/foundation-icons.css"}),k=l.default.createElement("link",{rel:"stylesheet",href:"/static/media/css/base.css"}),S=l.default.createElement("link",{rel:"stylesheet",href:"/static/media/css/petra.css"}),O=l.default.createElement("link",{rel:"stylesheet",href:"/static/media/css/rk.css"}),P=l.default.createElement("video",{id:"movie",className:"masthead-video",style:{position:"absolute",transform:"translate(-50%, -50%)",top:"50%",left:"50%",width:"auto",height:"843px"},autoPlay:!0,loop:!0,muted:!0},l.default.createElement("source",{src:g,type:"video/mp4"}),l.default.createElement("source",{src:g,type:"video/webm"})),E=l.default.createElement(v,null),C=l.default.createElement("br",null),T=function(e){(0,s.default)(n,e);var t=h(n);function n(e){var r;return(0,i.default)(this,n),(r=t.call(this,e)).vid1=function(){console.log("vid1")},r.vid=function(e){var t=e;r.props.changeOvid(t),setTimeout(function(){r.setState({loaded:!0})},350)},r.state={loaded:!1},r}return(0,a.default)(n,[{key:"componentDidMount",value:function(){var e=document.getElementById("movie");this.vid(e)}},{key:"render",value:function(){var e=this.state.loaded;return l.default.createElement("div",null,l.default.createElement(p.default,null,w,k,S,O),l.default.createElement("section",{id:"home",className:"home"},l.default.createElement("div",{className:"image",style:b},P,l.default.createElement("div",{className:"overlay"},l.default.createElement("div",{className:"text"},l.default.createElement("div",{className:"inner"},l.default.createElement("h1",{id:"taglineDesktop"},e&&E,C),l.default.createElement("div",null,!y.isIE&&e&&l.default.createElement(d.default,{loop:!0,typeSpeed:60,backSpeed:60,strings:["Developer","Tech Lover","Team Player","Spring","Raphael","ReactJs","Java"],backDelay:1,loopCount:0,showCursor:!0,cursorChar:"|"})),l.default.createElement("div",{className:"firstClassText"},l.default.createElement("p",null,e&&"I am architecting scalable internet applications."))))))))}}]),n}(l.default.Component),j=(0,f.default)(T);t.default=j},ELEi:function(e,t,n){var r;e.exports=(r=n("q1tI"),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(e,t,n){var r=n(3);e.exports=n(8)(r.isElement,!0)},function(e,t){e.exports=r},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports=n(7)},function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=n(3),a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o.initializer.load(this,n,t),this.begin()}return r(e,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var e=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var e=this;this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){e.currentElContent&&0!==e.currentElContent.length?e.backspace(e.currentElContent,e.currentElContent.length):e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos)},this.startDelay)}},{key:"typewrite",value:function(e,t){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),o=1;!0!==this.pause.status?this.timeout=setTimeout(function(){t=i.htmlParser.typeHtmlChars(e,t,n);var r=0,a=e.substr(t);if("^"===a.charAt(0)&&/^\^\d+/.test(a)){var s=1;s+=(a=/\d+/.exec(a)[0]).length,r=parseInt(a),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),e=e.substring(0,t)+e.substring(t+s),n.toggleBlinking(!0)}if("`"===a.charAt(0)){for(;"`"!==e.substr(t+o).charAt(0)&&!(t+ ++o>e.length););var u=e.substring(0,t),c=e.substring(u.length+1,t+o),l=e.substring(t+o+1);e=u+c+l,o--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),t>=e.length?n.doneTyping(e,t):n.keepTyping(e,t,o),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},r)},r):this.setPauseStatus(e,t,!0)}},{key:"keepTyping",value:function(e,t,n){0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),t+=n;var r=e.substr(0,t);this.replaceText(r),this.typewrite(e,t)}},{key:"doneTyping",value:function(e,t){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){n.backspace(e,t)},this.backDelay))}},{key:"backspace",value:function(e,t){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){t=i.htmlParser.backSpaceHtmlChars(e,t,n);var r=e.substr(0,t);if(n.replaceText(r),n.smartBackspace){var o=n.strings[n.arrayPos+1];o&&r===o.substr(0,t)?n.stopNum=t:n.stopNum=0}t>n.stopNum?(t--,n.backspace(e,t)):t<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],t))},r)}else this.setPauseStatus(e,t,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(e,t,n){this.pause.typewrite=n,this.pause.curString=e,this.pause.curStrPos=t}},{key:"toggleBlinking",value:function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(e){return Math.round(Math.random()*e/2)+e}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.el.innerHTML=e:this.el.textContent=e}},{key:"bindFocusEvents",value:function(){var e=this;this.isInput&&(this.el.addEventListener("focus",function(t){e.stop()}),this.el.addEventListener("blur",function(t){e.el.value&&0!==e.el.value.length||e.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),e}();t.default=a,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),s=(r=a)&&r.__esModule?r:{default:r},u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,[{key:"load",value:function(e,t,n){if(e.el="string"==typeof n?document.querySelector(n):n,e.options=o({},s.default,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map(function(e){return e.trim()}),"string"==typeof e.options.stringsElement?e.stringsElement=document.querySelector(e.options.stringsElement):e.stringsElement=e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.display="none";var r=Array.prototype.slice.apply(e.stringsElement.children),i=r.length;if(i)for(var a=0;a<i;a+=1){var u=r[a];e.strings.push(u.innerHTML.trim())}}for(var a in e.strPos=0,e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.sequence=[],e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.strings)e.sequence[a]=a;e.currentElContent=this.getCurrentElContent(e),e.autoInsertCss=e.options.autoInsertCss,this.appendAnimationCss(e)}},{key:"getCurrentElContent",value:function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent}},{key:"appendAnimationCss",value:function(e){if(e.autoInsertCss&&(e.showCursor||e.fadeOut)&&!document.querySelector("[data-typed-js-css]")){var t=document.createElement("style");t.type="text/css",t.setAttribute("data-typed-js-css",!0);var n="";e.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),e.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==t.length&&(t.innerHTML=n,document.body.appendChild(t))}}}]),e}();t.default=u;var c=new u;t.initializer=c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}},e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"typeHtmlChars",value:function(e,t,n){if("html"!==n.contentType)return t;var r=e.substr(t).charAt(0);if("<"===r||"&"===r){var o="";for(o="<"===r?">":";";e.substr(t+1).charAt(0)!==o&&!(++t+1>e.length););t++}return t}},{key:"backSpaceHtmlChars",value:function(e,t,n){if("html"!==n.contentType)return t;var r=e.substr(t).charAt(0);if(">"===r||";"===r){var o="";for(o=">"===r?"<":"&";e.substr(t-1).charAt(0)!==o&&!(--t<0););t--}return t}}]),e}();t.default=r;var o=new r;t.htmlParser=o}])},e.exports=r()},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(0),a=n.n(i),s=n(4),u=n.n(s);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){var e,n,r,i,a,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,l=new Array(u),f=0;f<u;f++)l[f]=arguments[f];return n=!(r=(e=p(t)).call.apply(e,[this].concat(l)))||"object"!==c(r)&&"function"!=typeof r?d(this):r,i=d(n),a="rootElement",s=o.a.createRef(),a in i?Object.defineProperty(i,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[a]=s,n}var n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.Component),n=t,(i=[{key:"componentDidMount",value:function(){var e=this.props,t=(e.style,e.typedRef,e.stopped),n=(e.className,l(e,["style","typedRef","stopped","className"]));this.constructTyped(n),t&&this.typed.stop()}},{key:"constructTyped",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.props,r=(n.style,n.typedRef,n.stopped,n.className,l(n,["style","typedRef","stopped","className"]));this.typed&&this.typed.destroy(),this.typed=new u.a(this.rootElement.current,Object.assign(r,t)),this.props.typedRef&&this.props.typedRef(this.typed),this.typed.reConstruct=function(t){e.constructTyped(t)}}},{key:"shouldComponentUpdate",value:function(e){var t=this;if(this.props!==e){e.style,e.typedRef,e.stopped,e.className;var n=l(e,["style","typedRef","stopped","className"]);return this.typed.options=Object.assign(this.typed.options,n),!Object.keys(e).every(function(n){return!t.props[n]&&e[n]?(t.constructTyped(e),!1):(t.typed[n]&&(t.typed[n]=e[n]),!0)})||this.props.strings.length===e.strings.length||this.constructTyped(e),!0}return!1}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.className,r=e.children,i=o.a.createElement("span",{ref:this.rootElement});return r&&(i=o.a.cloneElement(r,{ref:this.rootElement})),o.a.createElement("span",{style:t,className:n},i)}}])&&f(n.prototype,i),t}();h.propTypes={style:a.a.object,className:a.a.string,children:a.a.object,typedRef:a.a.func,stopped:a.a.bool,strings:a.a.arrayOf(a.a.string),typeSpeed:a.a.number,startDelay:a.a.number,backSpeed:a.a.number,smartBackspace:a.a.bool,shuffle:a.a.bool,backDelay:a.a.number,fadeOut:a.a.bool,fadeOutClass:a.a.string,fadeOutDelay:a.a.number,loop:a.a.bool,loopCount:a.a.number,showCursor:a.a.bool,cursorChar:a.a.string,autoInsertCss:a.a.bool,attr:a.a.string,bindInputFocusEvents:a.a.bool,contentType:a.a.oneOf(["html",""]),onComplete:a.a.func,preStringTyped:a.a.func,onStringTyped:a.a.func,onLastStringBackspaced:a.a.func,onTypingPaused:a.a.func,onTypingResumed:a.a.func,onReset:a.a.func,onStop:a.a.func,onStart:a.a.func,onDestroy:a.a.func},t.default=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case a:case u:case s:case y:return e;default:switch(e=e&&e.$$typeof){case l:case d:case c:return e;default:return t}}case v:case m:case i:return t}}}function k(e){return w(e)===p}t.typeOf=w,t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=c,t.Element=o,t.ForwardRef=d,t.Fragment=a,t.Lazy=v,t.Memo=m,t.Portal=i,t.Profiler=u,t.StrictMode=s,t.Suspense=y,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===p||e===u||e===s||e===y||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===m||e.$$typeof===c||e.$$typeof===l||e.$$typeof===d||e.$$typeof===b||e.$$typeof===g)},t.isAsyncMode=function(e){return k(e)||w(e)===f},t.isConcurrentMode=k,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===a},t.isLazy=function(e){return w(e)===v},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===i},t.isProfiler=function(e){return w(e)===u},t.isStrictMode=function(e){return w(e)===s},t.isSuspense=function(e){return w(e)===y}},function(e,t,n){"use strict";!function(){Object.defineProperty(t,"__esModule",{value:!0});var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=function(e,t){if(void 0===t)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];(function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.warn(i);try{throw new Error(i)}catch(e){}}).apply(void 0,[t].concat(r))}};function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var d=e.type;switch(d){case c:case l:case o:case a:case i:case p:return d;default:var m=d&&d.$$typeof;switch(m){case u:case f:case s:return m;default:return t}}case h:case y:case r:return t}}}var w=c,k=l,S=u,O=s,P=n,E=f,C=o,T=h,j=y,x=r,I=a,_=i,R=p,N=!1;function M(e){return g(e)===l}t.typeOf=g,t.AsyncMode=w,t.ConcurrentMode=k,t.ContextConsumer=S,t.ContextProvider=O,t.Element=P,t.ForwardRef=E,t.Fragment=C,t.Lazy=T,t.Memo=j,t.Portal=x,t.Profiler=I,t.StrictMode=_,t.Suspense=R,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===l||e===a||e===i||e===p||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===y||e.$$typeof===s||e.$$typeof===u||e.$$typeof===f||e.$$typeof===m||e.$$typeof===v)},t.isAsyncMode=function(e){return N||(N=!0,b(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),M(e)||g(e)===c},t.isConcurrentMode=M,t.isContextConsumer=function(e){return g(e)===u},t.isContextProvider=function(e){return g(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return g(e)===f},t.isFragment=function(e){return g(e)===o},t.isLazy=function(e){return g(e)===h},t.isMemo=function(e){return g(e)===y},t.isPortal=function(e){return g(e)===r},t.isProfiler=function(e){return g(e)===a},t.isStrictMode=function(e){return g(e)===i},t.isSuspense=function(e){return g(e)===p}}()},function(e,t,n){"use strict";var r=n(3),o=n(9),i=n(2),a=n(10),s=Function.call.bind(Object.prototype.hasOwnProperty),u=function(){};function c(){return null}u=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,l="@@iterator",f="<<anonymous>>",p={array:m("array"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:h(c),arrayOf:function(e){return h(function(t,n,r,o,a){if("function"!=typeof e)return new y("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new y("Invalid "+o+" `"+a+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var u=0;u<s.length;u++){var c=e(s,u,r,o,a+"["+u+"]",i);if(c instanceof Error)return c}return null})},element:h(function(t,n,r,o,i){var a=t[n];return e(a)?null:new y("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}),elementType:h(function(e,t,n,o,i){var a=e[t];return r.isValidElementType(a)?null:new y("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")}),instanceOf:function(e){return h(function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||f;return new y("Invalid "+o+" `"+i+"` of type `"+function(e){return e.constructor&&e.constructor.name?e.constructor.name:f}(t[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null})},node:h(function(e,t,n,r,o){return v(e[t])?null:new y("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}),objectOf:function(e){return h(function(t,n,r,o,a){if("function"!=typeof e)return new y("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],c=b(u);if("object"!==c)return new y("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var l in u)if(s(u,l)){var f=e(u,l,r,o,a+"."+l,i);if(f instanceof Error)return f}return null})},oneOf:function(e){return Array.isArray(e)?h(function(t,n,r,o,i){for(var a=t[n],s=0;s<e.length;s++)if(d(a,e[s]))return null;var u=JSON.stringify(e,function(e,t){return"symbol"===g(t)?String(t):t});return new y("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+u+".")}):(arguments.length>1?u("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):u("Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return u("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return u("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(n)+" at index "+t+"."),c}return h(function(t,n,r,o,a){for(var s=0;s<e.length;s++)if(null==(0,e[s])(t,n,r,o,a,i))return null;return new y("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")})},shape:function(e){return h(function(t,n,r,o,a){var s=t[n],u=b(s);if("object"!==u)return new y("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var l=e[c];if(l){var f=l(s,c,r,o,a+"."+c,i);if(f)return f}}return null})},exact:function(e){return h(function(t,n,r,a,s){var u=t[n],c=b(u);if("object"!==c)return new y("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");var l=o({},t[n],e);for(var f in l){var p=e[f];if(!p)return new y("Invalid "+a+" `"+s+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var d=p(u,f,r,a,s+"."+f,i);if(d)return d}return null})}};function d(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function y(e){this.message=e,this.stack=""}function h(e){var n={},r=0;function o(o,a,s,c,l,p,d){if(c=c||f,p=p||s,d!==i){if(t){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}if("undefined"!=typeof console){var m=c+":"+s;!n[m]&&r<3&&(u("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[m]=!0,r++)}}return null==a[s]?o?null===a[s]?new y("The "+l+" `"+p+"` is marked as required in `"+c+"`, but its value is `null`."):new y("The "+l+" `"+p+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,l,p)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function m(e){return h(function(t,n,r,o,i,a){var s=t[n];return b(s)!==e?new y("Invalid "+o+" `"+i+"` of type `"+g(s)+"` supplied to `"+r+"`, expected `"+e+"`."):null})}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[l]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!v(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function g(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=g(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return y.prototype=Error.prototype,p.checkPropTypes=a,p.resetWarningCache=a.resetWarningCache,p.PropTypes=p,p}},function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in n=Object(arguments[u]))o.call(n,c)&&(s[c]=n[c]);if(r){a=r(n);for(var l=0;l<a.length;l++)i.call(n,a[l])&&(s[a[l]]=n[a[l]])}}return s}},function(e,t,n){"use strict";var r=function(){},o=n(2),i={},a=Function.call.bind(Object.prototype.hasOwnProperty);function s(e,t,n,s,u){for(var c in e)if(a(e,c)){var l;try{if("function"!=typeof e[c]){var f=Error((s||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.");throw f.name="Invariant Violation",f}l=e[c](t,c,s,n,null,o)}catch(e){l=e}if(!l||l instanceof Error||r((s||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in i)){i[l.message]=!0;var p=u?u():"";r("Failed "+n+" type: "+l.message+(null!=p?p:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},function(e,t,n){"use strict";var r=n(2);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}}]))},PDlB:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/start",function(){var e=n("DDuk");return{page:e.default||e}}])},eXxR:function(e,t,n){"use strict";var r=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("pbKT")),i=r(n("kOwS")),a=r(n("0iUn")),s=r(n("sLSF")),u=r(n("AT/M")),c=r(n("Tit0")),l=r(n("MI3g")),f=r(n("a7VT")),p=r(n("q1tI"));function d(e){var t=function(){if("undefined"==typeof Reflect||!o.default)return!1;if(o.default.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call((0,o.default)(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=(0,f.default)(e);if(t){var i=(0,f.default)(this).constructor;n=(0,o.default)(r,arguments,i)}else n=r.apply(this,arguments);return(0,l.default)(this,n)}}var y=function(e){return function(t){(0,c.default)(r,t);var n=d(r);function r(e){var t;return(0,a.default)(this,r),(t=n.call(this,e)).state={ovid:null},t.initVid=t.initVid.bind((0,u.default)(t)),t.sizeVideo=t.sizeVideo.bind((0,u.default)(t)),t.changeOvid=t.changeOvid.bind((0,u.default)(t)),t}return(0,s.default)(r,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.sizeVideo)}},{key:"changeOvid",value:function(e){this.setState({ovid:e},this.initVid)}},{key:"initVid",value:function(){this.sizeVideo();var e=this.state.ovid;e.style.position="absolute",e.style.top="50%",e.style.left="50%",e.style["-webkit-transform"]="translate(-50%, -50%)",e.style["-ms-transform"]="translate(-50%, -50%)",e.style.transform="translate(-50%, -50%)",e.parentNode.style.overflow="hidden";var t=void 0!==e.canPlayType,n=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);t&&!n||t||e&&e.parentNode&&e.parentNode.removeChild(e)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.sizeVideo)}},{key:"debounce",value:function(){}},{key:"sizeVideo",value:function(){setTimeout(function(){},50);var e=this.state.ovid,t=e.parentNode.offsetHeight;t<e.offsetHeight&&(t=e.offsetHeight+100);var n=t,r=e.parentNode.offsetWidth;r/640>n/480?(e.style.height="auto",e.style.width="".concat(r,"px")):(e.style.height="".concat(n,"px"),e.style.width="auto")}},{key:"render",value:function(){return p.default.createElement(e,(0,i.default)({},this.props,this.state,{changeOvid:this.changeOvid}))}}]),r}(p.default.Component)};t.default=y}},[["PDlB","5d41","9da1"]]]);