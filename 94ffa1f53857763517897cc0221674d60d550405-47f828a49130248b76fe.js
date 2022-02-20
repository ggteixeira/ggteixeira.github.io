"use strict";(self.webpackChunkgatsby_starter_julia=self.webpackChunkgatsby_starter_julia||[]).push([[657],{7606:function(t,r,e){e.d(r,{G:function(){return O}});var n=e(4694),o=e(5697),a=e.n(o),i=e(7294);function l(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function s(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?l(Object(e),!0).forEach((function(r){c(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function c(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function u(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)e=a[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)e=a[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}function p(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return m(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return m(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function b(t){return r=t,(r-=0)==r?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,r){return r?r.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var r}var d=["style"];function y(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,r){var e,n=r.indexOf(":"),o=b(r.slice(0,n)),a=r.slice(n+1).trim();return o.startsWith("webkit")?t[(e=o,e.charAt(0).toUpperCase()+e.slice(1))]=a:t[o]=a,t}),{})}var g=!1;try{g=!0}catch(j){}function h(t){return t&&"object"===f(t)&&t.prefix&&t.iconName&&t.icon?t:n.parse.icon?n.parse.icon(t):null===t?null:t&&"object"===f(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function v(t,r){return Array.isArray(r)&&r.length>0||!Array.isArray(r)&&r?c({},t,r):{}}var x=["forwardedRef"];function O(t){var r=t.forwardedRef,e=u(t,x),o=e.icon,a=e.mask,i=e.symbol,l=e.className,f=e.title,m=e.titleId,b=h(o),d=v("classes",[].concat(p(function(t){var r,e=t.beat,n=t.fade,o=t.flash,a=t.spin,i=t.spinPulse,l=t.spinReverse,s=t.pulse,f=t.fixedWidth,u=t.inverse,p=t.border,m=t.listItem,b=t.flip,d=t.size,y=t.rotation,g=t.pull,h=(c(r={"fa-beat":e,"fa-fade":n,"fa-flash":o,"fa-spin":a,"fa-spin-reverse":l,"fa-spin-pulse":i,"fa-pulse":s,"fa-fw":f,"fa-inverse":u,"fa-border":p,"fa-li":m,"fa-flip-horizontal":"horizontal"===b||"both"===b,"fa-flip-vertical":"vertical"===b||"both"===b},"fa-".concat(d),null!=d),c(r,"fa-rotate-".concat(y),null!=y&&0!==y),c(r,"fa-pull-".concat(g),null!=g),c(r,"fa-swap-opacity",t.swapOpacity),r);return Object.keys(h).map((function(t){return h[t]?t:null})).filter((function(t){return t}))}(e)),p(l.split(" ")))),y=v("transform","string"==typeof e.transform?n.parse.transform(e.transform):e.transform),j=v("mask",h(a)),k=(0,n.icon)(b,s(s(s(s({},d),y),j),{},{symbol:i,title:f,titleId:m}));if(!k)return function(){var t;!g&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",b),null;var Z=k.abstract,P={ref:r};return Object.keys(e).forEach((function(t){O.defaultProps.hasOwnProperty(t)||(P[t]=e[t])})),w(Z[0],P)}O.displayName="FontAwesomeIcon",O.propTypes={beat:a().bool,border:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf(["horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},O.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var w=function t(r,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof e)return e;var o=(e.children||[]).map((function(e){return t(r,e)})),a=Object.keys(e.attributes||{}).reduce((function(t,r){var n=e.attributes[r];switch(r){case"class":t.attrs.className=n,delete e.attributes.class;break;case"style":t.attrs.style=y(n);break;default:0===r.indexOf("aria-")||0===r.indexOf("data-")?t.attrs[r.toLowerCase()]=n:t.attrs[b(r)]=n}return t}),{attrs:{}}),i=n.style,l=void 0===i?{}:i,f=u(n,d);return a.attrs.style=s(s({},a.attrs.style),l),r.apply(void 0,[e.tag,s(s({},a.attrs),f)].concat(p(o)))}.bind(null,i.createElement)},382:function(t,r,e){e.d(r,{Z:function(){return u}});e(7294);var n=e(6771);var o=(0,n.Z)("div",{target:"e1xaj3mt3"})({name:"2kwpyr",styles:"padding:2rem 0;max-width:1280px;margin:0.5rem auto;width:90%;display:grid;grid-template-rows:1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr;@media (max-width: 700px){width:90%;grid-template-columns:3fr;}@media (min-width: 701px) and (max-width: 1000px){width:90%;grid-template-columns:2fr 2fr;}"}),a=(0,n.Z)("a",{target:"e1xaj3mt2"})({name:"1j51llh",styles:"text-decoration:none;padding:0.5rem;margin:0.5rem;background:#fff;overflow:hidden;box-shadow:0 1px 6px 0 rgba(0, 0, 0, 0.11);h4{color:#212121;}p{color:#696969;}:hover{box-shadow:0 1px 6px 0 rgba(0, 0, 0, 0.31);transition-duration:0.2s;}"}),i=(0,n.Z)("div",{target:"e1xaj3mt1"})({name:"19sy9rz",styles:"padding:0.5rem 0.5rem 0 0.5rem;height:75%;h4,p{margin-bottom:0.5rem;height:max-content;}"}),l=(0,n.Z)("div",{target:"e1xaj3mt0"})({name:"1vd05cf",styles:"display:flex;align-items:center;justify-content:space-between;padding:0.5rem;height:25%;div{display:flex;flex-direction:row;&:first-child{margin-right:0.5rem;}h4{margin:0;}.icon{margin:0;height:auto;}span{color:#000;margin-left:0.5rem;margin:0.9rem;}}"}),s=e(7606),f=e(8014),c=e(3431),u=function(t){var r=t.reposList,e=t.isLoading;return(0,c.tZ)(o,null,r&&!e&&r.map((function(t,r){var e=t.name,n=t.description,o=t.language,u=t.html_url,p=t.stargazers_count,m=t.fork;return(0,c.tZ)(a,{"aria-current":!0,rel:"noopener noreferrer",target:"_blank",href:u,key:r},(0,c.tZ)(i,null,m?(0,c.tZ)("h4",null,e," ",(0,c.tZ)("span",null,"(forked)")):(0,c.tZ)("h4",null,e),(0,c.tZ)("p",null,n)),(0,c.tZ)(l,null,(0,c.tZ)("div",null,(0,c.tZ)(s.G,{className:"icon",icon:f.dT$,size:"1x"}),(0,c.tZ)("span",null,o)),(0,c.tZ)("div",null,(0,c.tZ)(s.G,{className:"icon",icon:f.Tab,size:"1x"}),(0,c.tZ)("span",null,p))))})))}}}]);
//# sourceMappingURL=94ffa1f53857763517897cc0221674d60d550405-47f828a49130248b76fe.js.map