"use strict";(self.webpackChunkgatsby_starter_julia=self.webpackChunkgatsby_starter_julia||[]).push([[678],{7814:function(t,e,r){r.d(e,{G:function(){return v}});var n=r(8947),a=r(5697),o=r.n(a),i=r(7294);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function p(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function m(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}var y=["style"];var d=!1;try{d=!0}catch(O){}function g(t){return t&&"object"===c(t)&&t.prefix&&t.iconName&&t.icon?t:n.parse.icon?n.parse.icon(t):null===t?null:t&&"object"===c(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function h(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?f({},t,e):{}}var x=["forwardedRef"];function v(t){var e=t.forwardedRef,r=u(t,x),a=r.icon,o=r.mask,i=r.symbol,s=r.className,c=r.title,b=r.titleId,m=r.maskId,y=g(a),O=h("classes",[].concat(p(function(t){var e,r=t.beat,n=t.fade,a=t.beatFade,o=t.bounce,i=t.shake,s=t.flash,l=t.spin,c=t.spinPulse,u=t.spinReverse,p=t.pulse,b=t.fixedWidth,m=t.inverse,y=t.border,d=t.listItem,g=t.flip,h=t.size,x=t.rotation,v=t.pull,w=(f(e={"fa-beat":r,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":b,"fa-inverse":m,"fa-border":y,"fa-li":d,"fa-flip":!0===g,"fa-flip-horizontal":"horizontal"===g||"both"===g,"fa-flip-vertical":"vertical"===g||"both"===g},"fa-".concat(h),null!=h),f(e,"fa-rotate-".concat(x),null!=x&&0!==x),f(e,"fa-pull-".concat(v),null!=v),f(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(w).map((function(t){return w[t]?t:null})).filter((function(t){return t}))}(r)),p(s.split(" ")))),j=h("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),k=h("mask",g(o)),z=(0,n.icon)(y,l(l(l(l({},O),j),k),{},{symbol:i,title:c,titleId:b,maskId:m}));if(!z)return function(){var t;!d&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",y),null;var P=z.abstract,I={ref:e};return Object.keys(r).forEach((function(t){v.defaultProps.hasOwnProperty(t)||(I[t]=r[t])})),w(P[0],I)}v.displayName="FontAwesomeIcon",v.propTypes={beat:o().bool,border:o().bool,beatFade:o().bool,bounce:o().bool,className:o().string,fade:o().bool,flash:o().bool,mask:o().oneOfType([o().object,o().array,o().string]),maskId:o().string,fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf([!0,!1,"horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),shake:o().bool,size:o().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,spinPulse:o().bool,spinReverse:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,titleId:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},v.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var w=function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return t(e,r)})),o=Object.keys(r.attributes||{}).reduce((function(t,e){var n=r.attributes[e];switch(e){case"class":t.attrs.className=n,delete r.attributes.class;break;case"style":t.attrs.style=n.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r,n=e.indexOf(":"),a=m(e.slice(0,n)),o=e.slice(n+1).trim();return a.startsWith("webkit")?t[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:t[a]=o,t}),{});break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=n:t.attrs[m(e)]=n}return t}),{attrs:{}}),i=n.style,s=void 0===i?{}:i,c=u(n,y);return o.attrs.style=l(l({},o.attrs.style),s),e.apply(void 0,[r.tag,l(l({},o.attrs),c)].concat(p(a)))}.bind(null,i.createElement)},8480:function(t,e,r){r.r(e),r.d(e,{default:function(){return v}});r(7294);var n=r(4854),a=r(4316);const o=(0,a.Z)("div",{target:"e1ky1pz85"})({name:"1bn6d0n",styles:"text-align:center;display:flex;justify-content:center;align-content:center;padding:1rem;margin-bottom:2rem"}),i=(0,a.Z)("div",{target:"e1ky1pz84"})({name:"1x5068p",styles:"display:flex;flex-direction:column;width:100%;padding:1rem"}),s=(0,a.Z)("span",{target:"e1ky1pz83"})({name:"u46kuk",styles:"align-self:center;font-size:2.5rem;margin-bottom:1rem;line-height:120%;text-align:center;max-width:768px;width:100%"}),l=(0,a.Z)("span",{target:"e1ky1pz82"})({name:"prw92t",styles:"color:#6c757d"}),c=(0,a.Z)("p",{target:"e1ky1pz81"})({name:"1ym3oa9",styles:"font-size:1.3rem;color:#6c757d;text-align:match-parent;padding:auto;align-self:center;margin-bottom:1rem;max-width:384px;width:100%"});var f=r(917);var u=()=>(0,f.jsx)(n.StaticQuery,{query:"2058310547",render:t=>(0,f.jsx)(o,null,(0,f.jsx)(i,null,(0,f.jsx)(s,null,t.site.siteMetadata.greeting,t.site.siteMetadata.title,(0,f.jsx)(l,null,t.site.siteMetadata.comma)),(0,f.jsx)(c,null,t.site.siteMetadata.subtitle)))}),p=r(5487),b=r(8183),m=r(7814),y=r(1417),d=r(1436);const g=(0,a.Z)("div",{target:"e2puxoz0"})({name:"12fiqaw",styles:"display:flex;justify-content:space-evenly;flex-wrap:wrap;align-content:flex-start;align-items:center;max-width:768px;width:calc(768px / 2);margin:0 auto;margin-bottom:1rem;text-align:center;padding:1rem 0;height:calc(100vh - 30rem);svg{font-size:1.75rem;:hover{color:#6c757d;transition-duration:0.2s;}}"}),h=[{href:"https://github.com/ggteixeira/",icon:y.zhw},{href:"https://github.com/divertimentos/",icon:d.qxT},{href:"https://www.linkedin.com/in/guiatf",icon:y.D9H},{href:"https://dev.to/guiteixeira",icon:y.zOJ},{href:"https://mastodon.com.br/@gui",icon:y.kyk},{href:"https://www.goodreads.com/guiemi",icon:y.ZjG},{href:"https://www.twitch.tv/guilhermestreams/",icon:y.z0T}];var x=()=>(0,f.jsx)(g,null,h.map((t=>(0,f.jsx)("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",key:t.icon+"-"+Math.floor(100*Math.random())},(0,f.jsx)(m.G,{icon:t.icon})))));var v=()=>(0,f.jsx)(p.Z,null,(0,f.jsx)(b.Z,{title:"Home",keywords:["gatsby","application","react"]}),(0,f.jsx)(u,null),(0,f.jsx)(x,null))}}]);
//# sourceMappingURL=component---src-pages-index-js-4821ef433fa2987e71df.js.map