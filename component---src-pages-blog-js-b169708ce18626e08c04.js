(self.webpackChunkgatsby_starter_julia=self.webpackChunkgatsby_starter_julia||[]).push([[7],{7753:function(e,r,t){"use strict";t.r(r),t.d(r,{ArticleDate:function(){return G},Content:function(){return F},MarkerHeader:function(){return J},ReadingTime:function(){return K},default:function(){return Q}});var a=t(5761),n=t(7294),i=t(5444),c=t(3552);var s=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var r=e.prototype;return r.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var r,t=function(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),void 0!==e.nonce&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r}(this);r=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(t,r),this.tags.push(t)}var a=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}(a);try{var i=105===e.charCodeAt(1)&&64===e.charCodeAt(0);n.insertRule(e,i?0:n.cssRules.length)}catch(c){0}}else a.appendChild(document.createTextNode(e));this.ctr++},r.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}();var o=function(e){function r(e,a,o,l,h){for(var d,b,p,k,w,y=0,C=0,x=0,Z=0,$=0,z=0,M=p=d=0,T=0,D=0,B=0,L=0,P=o.length,H=P-1,q="",I="",F="",G="";T<P;){if(b=o.charCodeAt(T),T===H&&0!==C+Z+x+y&&(0!==C&&(b=47===C?10:47),Z=x=y=0,P++,H++),0===C+Z+x+y){if(T===H&&(0<D&&(q=q.replace(f,"")),0<q.trim().length)){switch(b){case 32:case 9:case 59:case 13:case 10:break;default:q+=o.charAt(T)}b=59}switch(b){case 123:for(d=(q=q.trim()).charCodeAt(0),p=1,L=++T;T<P;){switch(b=o.charCodeAt(T)){case 123:p++;break;case 125:p--;break;case 47:switch(b=o.charCodeAt(T+1)){case 42:case 47:e:{for(M=T+1;M<H;++M)switch(o.charCodeAt(M)){case 47:if(42===b&&42===o.charCodeAt(M-1)&&T+2!==M){T=M+1;break e}break;case 10:if(47===b){T=M+1;break e}}T=M}}break;case 91:b++;case 40:b++;case 34:case 39:for(;T++<H&&o.charCodeAt(T)!==b;);}if(0===p)break;T++}switch(p=o.substring(L,T),0===d&&(d=(q=q.replace(u,"").trim()).charCodeAt(0)),d){case 64:switch(0<D&&(q=q.replace(f,"")),b=q.charCodeAt(1)){case 100:case 109:case 115:case 45:D=a;break;default:D=S}if(L=(p=r(a,D,p,b,h+1)).length,0<N&&(w=s(3,p,D=t(S,q,B),a,_,O,L,b,h,l),q=D.join(""),void 0!==w&&0===(L=(p=w.trim()).length)&&(b=0,p="")),0<L)switch(b){case 115:q=q.replace(A,c);case 100:case 109:case 45:p=q+"{"+p+"}";break;case 107:p=(q=q.replace(v,"$1 $2"))+"{"+p+"}",p=1===E||2===E&&i("@"+p,3)?"@-webkit-"+p+"@"+p:"@"+p;break;default:p=q+p,112===l&&(I+=p,p="")}else p="";break;default:p=r(a,t(a,q,B),p,l,h+1)}F+=p,p=B=D=M=d=0,q="",b=o.charCodeAt(++T);break;case 125:case 59:if(1<(L=(q=(0<D?q.replace(f,""):q).trim()).length))switch(0===M&&(d=q.charCodeAt(0),45===d||96<d&&123>d)&&(L=(q=q.replace(" ",":")).length),0<N&&void 0!==(w=s(1,q,a,e,_,O,I.length,l,h,l))&&0===(L=(q=w.trim()).length)&&(q="\0\0"),d=q.charCodeAt(0),b=q.charCodeAt(1),d){case 0:break;case 64:if(105===b||99===b){G+=q+o.charAt(T);break}default:58!==q.charCodeAt(L-1)&&(I+=n(q,d,b,q.charCodeAt(2)))}B=D=M=d=0,q="",b=o.charCodeAt(++T)}}switch(b){case 13:case 10:47===C?C=0:0===1+d&&107!==l&&0<q.length&&(D=1,q+="\0"),0<N*R&&s(0,q,a,e,_,O,I.length,l,h,l),O=1,_++;break;case 59:case 125:if(0===C+Z+x+y){O++;break}default:switch(O++,k=o.charAt(T),b){case 9:case 32:if(0===Z+y+C)switch($){case 44:case 58:case 9:case 32:k="";break;default:32!==b&&(k=" ")}break;case 0:k="\\0";break;case 12:k="\\f";break;case 11:k="\\v";break;case 38:0===Z+C+y&&(D=B=1,k="\f"+k);break;case 108:if(0===Z+C+y+j&&0<M)switch(T-M){case 2:112===$&&58===o.charCodeAt(T-3)&&(j=$);case 8:111===z&&(j=z)}break;case 58:0===Z+C+y&&(M=T);break;case 44:0===C+x+Z+y&&(D=1,k+="\r");break;case 34:case 39:0===C&&(Z=Z===b?0:0===Z?b:Z);break;case 91:0===Z+C+x&&y++;break;case 93:0===Z+C+x&&y--;break;case 41:0===Z+C+y&&x--;break;case 40:if(0===Z+C+y){if(0===d)switch(2*$+3*z){case 533:break;default:d=1}x++}break;case 64:0===C+x+Z+y+M+p&&(p=1);break;case 42:case 47:if(!(0<Z+y+x))switch(C){case 0:switch(2*b+3*o.charCodeAt(T+1)){case 235:C=47;break;case 220:L=T,C=42}break;case 42:47===b&&42===$&&L+2!==T&&(33===o.charCodeAt(L+2)&&(I+=o.substring(L,T+1)),k="",C=0)}}0===C&&(q+=k)}z=$,$=b,T++}if(0<(L=I.length)){if(D=a,0<N&&(void 0!==(w=s(2,I,D,e,_,O,L,l,h,l))&&0===(I=w).length))return G+I+F;if(I=D.join(",")+"{"+I+"}",0!=E*j){switch(2!==E||i(I,2)||(j=0),j){case 111:I=I.replace(m,":-moz-$1")+I;break;case 112:I=I.replace(g,"::-webkit-input-$1")+I.replace(g,"::-moz-$1")+I.replace(g,":-ms-input-$1")+I}j=0}}return G+I+F}function t(e,r,t){var n=r.trim().split(p);r=n;var i=n.length,c=e.length;switch(c){case 0:case 1:var s=0;for(e=0===c?"":e[0]+" ";s<i;++s)r[s]=a(e,r[s],t).trim();break;default:var o=s=0;for(r=[];s<i;++s)for(var l=0;l<c;++l)r[o++]=a(e[l]+" ",n[s],t).trim()}return r}function a(e,r,t){var a=r.charCodeAt(0);switch(33>a&&(a=(r=r.trim()).charCodeAt(0)),a){case 38:return r.replace(k,"$1"+e.trim());case 58:return e.trim()+r.replace(k,"$1"+e.trim());default:if(0<1*t&&0<r.indexOf("\f"))return r.replace(k,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+r}function n(e,r,t,a){var c=e+";",s=2*r+3*t+4*a;if(944===s){e=c.indexOf(":",9)+1;var o=c.substring(e,c.length-1).trim();return o=c.substring(0,e).trim()+o+";",1===E||2===E&&i(o,1)?"-webkit-"+o+o:o}if(0===E||2===E&&!i(c,1))return c;switch(s){case 1015:return 97===c.charCodeAt(10)?"-webkit-"+c+c:c;case 951:return 116===c.charCodeAt(3)?"-webkit-"+c+c:c;case 963:return 110===c.charCodeAt(5)?"-webkit-"+c+c:c;case 1009:if(100!==c.charCodeAt(4))break;case 969:case 942:return"-webkit-"+c+c;case 978:return"-webkit-"+c+"-moz-"+c+c;case 1019:case 983:return"-webkit-"+c+"-moz-"+c+"-ms-"+c+c;case 883:if(45===c.charCodeAt(8))return"-webkit-"+c+c;if(0<c.indexOf("image-set(",11))return c.replace($,"$1-webkit-$2")+c;break;case 932:if(45===c.charCodeAt(4))switch(c.charCodeAt(5)){case 103:return"-webkit-box-"+c.replace("-grow","")+"-webkit-"+c+"-ms-"+c.replace("grow","positive")+c;case 115:return"-webkit-"+c+"-ms-"+c.replace("shrink","negative")+c;case 98:return"-webkit-"+c+"-ms-"+c.replace("basis","preferred-size")+c}return"-webkit-"+c+"-ms-"+c+c;case 964:return"-webkit-"+c+"-ms-flex-"+c+c;case 1023:if(99!==c.charCodeAt(8))break;return"-webkit-box-pack"+(o=c.substring(c.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+c+"-ms-flex-pack"+o+c;case 1005:return d.test(c)?c.replace(h,":-webkit-")+c.replace(h,":-moz-")+c:c;case 1e3:switch(r=(o=c.substring(13).trim()).indexOf("-")+1,o.charCodeAt(0)+o.charCodeAt(r)){case 226:o=c.replace(w,"tb");break;case 232:o=c.replace(w,"tb-rl");break;case 220:o=c.replace(w,"lr");break;default:return c}return"-webkit-"+c+"-ms-"+o+c;case 1017:if(-1===c.indexOf("sticky",9))break;case 975:switch(r=(c=e).length-10,s=(o=(33===c.charCodeAt(r)?c.substring(0,r):c).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|o.charCodeAt(7))){case 203:if(111>o.charCodeAt(8))break;case 115:c=c.replace(o,"-webkit-"+o)+";"+c;break;case 207:case 102:c=c.replace(o,"-webkit-"+(102<s?"inline-":"")+"box")+";"+c.replace(o,"-webkit-"+o)+";"+c.replace(o,"-ms-"+o+"box")+";"+c}return c+";";case 938:if(45===c.charCodeAt(5))switch(c.charCodeAt(6)){case 105:return o=c.replace("-items",""),"-webkit-"+c+"-webkit-box-"+o+"-ms-flex-"+o+c;case 115:return"-webkit-"+c+"-ms-flex-item-"+c.replace(C,"")+c;default:return"-webkit-"+c+"-ms-flex-line-pack"+c.replace("align-content","").replace(C,"")+c}break;case 973:case 989:if(45!==c.charCodeAt(3)||122===c.charCodeAt(4))break;case 931:case 953:if(!0===Z.test(e))return 115===(o=e.substring(e.indexOf(":")+1)).charCodeAt(0)?n(e.replace("stretch","fill-available"),r,t,a).replace(":fill-available",":stretch"):c.replace(o,"-webkit-"+o)+c.replace(o,"-moz-"+o.replace("fill-",""))+c;break;case 962:if(c="-webkit-"+c+(102===c.charCodeAt(5)?"-ms-"+c:"")+c,211===t+a&&105===c.charCodeAt(13)&&0<c.indexOf("transform",10))return c.substring(0,c.indexOf(";",27)+1).replace(b,"$1-webkit-$2")+c}return c}function i(e,r){var t=e.indexOf(1===r?":":"{"),a=e.substring(0,3!==r?t:10);return t=e.substring(t+1,e.length-1),M(2!==r?a:a.replace(x,"$1"),t,r)}function c(e,r){var t=n(r,r.charCodeAt(0),r.charCodeAt(1),r.charCodeAt(2));return t!==r+";"?t.replace(y," or ($1)").substring(4):"("+r+")"}function s(e,r,t,a,n,i,c,s,o,u){for(var f,h=0,d=r;h<N;++h)switch(f=z[h].call(l,e,d,t,a,n,i,c,s,o,u)){case void 0:case!1:case!0:case null:break;default:d=f}if(d!==r)return d}function o(e){return void 0!==(e=e.prefix)&&(M=null,e?"function"!=typeof e?E=1:(E=2,M=e):E=0),o}function l(e,t){var a=e;if(33>a.charCodeAt(0)&&(a=a.trim()),a=[a],0<N){var n=s(-1,t,a,a,_,O,0,0,0,0);void 0!==n&&"string"==typeof n&&(t=n)}var i=r(S,a,t,0,0);return 0<N&&(void 0!==(n=s(-2,i,a,a,_,O,i.length,0,0,0))&&(i=n)),"",j=0,O=_=1,i}var u=/^\0+/g,f=/[\0\r\f]/g,h=/: */g,d=/zoo|gra/,b=/([,: ])(transform)/g,p=/,\r+?/g,k=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,m=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,y=/([\s\S]*?);/g,C=/-self|flex-/g,x=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Z=/stretch|:\s*\w+\-(?:conte|avail)/,$=/([^-])(image-set\()/,O=1,_=1,j=0,E=1,S=[],z=[],N=0,M=null,R=0;return l.use=function e(r){switch(r){case void 0:case null:N=z.length=0;break;default:if("function"==typeof r)z[N++]=r;else if("object"==typeof r)for(var t=0,a=r.length;t<a;++t)e(r[t]);else R=0|!!r}return e},l.set=o,void 0!==e&&o(e),l},l="/*|*/";function u(e){e&&f.current.insert(e+"}")}var f={current:null},h=function(e,r,t,a,n,i,c,s,o,h){switch(e){case 1:switch(r.charCodeAt(0)){case 64:return f.current.insert(r+";"),"";case 108:if(98===r.charCodeAt(2))return""}break;case 2:if(0===s)return r+l;break;case 3:switch(s){case 102:case 112:return f.current.insert(t[0]+r),"";default:return r+(0===h?l:"")}case-2:r.split("/*|*/}").forEach(u)}},d=function(e){void 0===e&&(e={});var r,t=e.key||"css";void 0!==e.prefix&&(r={prefix:e.prefix});var a=new o(r);var n,i={};n=e.container||document.head;var c,l=document.querySelectorAll("style[data-emotion-"+t+"]");Array.prototype.forEach.call(l,(function(e){e.getAttribute("data-emotion-"+t).split(" ").forEach((function(e){i[e]=!0})),e.parentNode!==n&&n.appendChild(e)})),a.use(e.stylisPlugins)(h),c=function(e,r,t,n){var i=r.name;f.current=t,a(e,r.styles),n&&(u.inserted[i]=!0)};var u={key:t,sheet:new s({key:t,container:n,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:i,registered:{},insert:c};return u},b=(t(5354),t(3762)),p=t(4759),k=t(9933),v=/[A-Z]|^ms/g,g=/_EMO_([^_]+?)_([^]*?)_EMO_/g,m=function(e){return 45===e.charCodeAt(1)},w=function(e){return null!=e&&"boolean"!=typeof e},A=(0,k.Z)((function(e){return m(e)?e:e.replace(v,"-$&").toLowerCase()})),y=function(e,r){switch(e){case"animation":case"animationName":if("string"==typeof r)return r.replace(g,(function(e,r,t){return x={name:r,styles:t,next:x},r}))}return 1===p.Z[e]||m(e)||"number"!=typeof r||0===r?r:r+"px"};function C(e,r,t,a){if(null==t)return"";if(void 0!==t.__emotion_styles)return t;switch(typeof t){case"boolean":return"";case"object":if(1===t.anim)return x={name:t.name,styles:t.styles,next:x},t.name;if(void 0!==t.styles){var n=t.next;if(void 0!==n)for(;void 0!==n;)x={name:n.name,styles:n.styles,next:x},n=n.next;return t.styles+";"}return function(e,r,t){var a="";if(Array.isArray(t))for(var n=0;n<t.length;n++)a+=C(e,r,t[n],!1);else for(var i in t){var c=t[i];if("object"!=typeof c)null!=r&&void 0!==r[c]?a+=i+"{"+r[c]+"}":w(c)&&(a+=A(i)+":"+y(i,c)+";");else if(!Array.isArray(c)||"string"!=typeof c[0]||null!=r&&void 0!==r[c[0]]){var s=C(e,r,c,!1);switch(i){case"animation":case"animationName":a+=A(i)+":"+s+";";break;default:a+=i+"{"+s+"}"}}else for(var o=0;o<c.length;o++)w(c[o])&&(a+=A(i)+":"+y(i,c[o])+";")}return a}(e,r,t);case"function":if(void 0!==e){var i=x,c=t(e);return x=i,C(e,r,c,a)}break;case"string":}if(null==r)return t;var s=r[t];return void 0===s||a?t:s}var x,Z=/label:\s*([^\s;\n{]+)\s*;/g;var $=function(e,r,t){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var a=!0,n="";x=void 0;var i=e[0];null==i||void 0===i.raw?(a=!1,n+=C(t,r,i,!1)):n+=i[0];for(var c=1;c<e.length;c++)n+=C(t,r,e[c],46===n.charCodeAt(n.length-1)),a&&(n+=i[c]);Z.lastIndex=0;for(var s,o="";null!==(s=Z.exec(n));)o+="-"+s[1];return{name:(0,b.Z)(n)+o,styles:n,next:x}},O=(Object.prototype.hasOwnProperty,(0,n.createContext)("undefined"!=typeof HTMLElement?d():null)),_=(0,n.createContext)({}),j=(O.Provider,function(e){var r=function(r,t){return(0,n.createElement)(O.Consumer,null,(function(a){return e(r,a,t)}))};return(0,n.forwardRef)(r)});var E=function(e,r,t){var a=e.key+"-"+r.name;if(!1===t&&void 0===e.registered[a]&&(e.registered[a]=r.styles),void 0===e.inserted[r.name]){var n=r;do{e.insert("."+a,n,e.sheet,!0);n=n.next}while(void 0!==n)}};var S=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return $(r)},z=(n.Component,function e(r){for(var t=r.length,a=0,n="";a<t;a++){var i=r[a];if(null!=i){var c=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))c=e(i);else for(var s in c="",i)i[s]&&s&&(c&&(c+=" "),c+=s);break;default:c=i}c&&(n&&(n+=" "),n+=c)}}return n});function N(e,r,t){var a=[],n=function(e,r,t){var a="";return t.split(" ").forEach((function(t){void 0!==e[t]?r.push(e[t]):a+=t+" "})),a}(e,a,t);return a.length<2?t:n+r(a)}j((function(e,r){return(0,n.createElement)(_.Consumer,null,(function(t){var a=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=$(t,r.registered);return E(r,n,!1),r.key+"-"+n.name},n={css:a,cx:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return N(r.registered,a,z(t))},theme:t},i=e.children(n);return!0,i}))}));var M,R,T,D,B,L=t(2684),P=t(6179),H=t(3561),q=t.n(H),I=t(6144),F=q().div(M||(M=(0,a.Z)(["\n  margin: 0 auto;\n  max-width: 860px;\n  padding: 1.45rem 1.0875rem;\n"]))),G=q().h5(R||(R=(0,a.Z)(["\n  display: inline;\n  color: #606060;\n"]))),J=q().h3(T||(T=(0,a.Z)(["\n  display: inline;\n  border-radius: 1em 0 1em 0;\n  background-image: linear-gradient(\n    -100deg,\n    rgba(255, 250, 150, 0.15),\n    rgba(255, 250, 150, 0.8) 100%,\n    rgba(255, 250, 150, 0.25)\n  );\n"]))),K=q().h5(D||(D=(0,a.Z)(["\n  display: inline;\n  color: #606060;\n"]))),Q=function(e){var r=e.data;return(0,I.tZ)(L.Z,null,(0,I.tZ)(P.Z,{title:"Blog"}),(0,I.tZ)(F,null,(0,I.tZ)("h1",null,"Blog"),r.allMarkdownRemark.edges.filter((function(e){var r=e.node.frontmatter.rawDate;return new Date(r)<new Date})).map((function(e){var r=e.node;return(0,I.tZ)("div",{key:r.id},(0,I.tZ)(i.Link,{to:r.frontmatter.path,css:S(B||(B=(0,a.Z)(["\n                  text-decoration: none;\n                  color: inherit;\n                "])))},(0,I.tZ)(J,null,r.frontmatter.title)),(0,I.tZ)("div",null,(0,I.tZ)(G,null,r.frontmatter.date),(0,I.tZ)(K,null," - ",r.fields.readingTime.text)),(0,I.tZ)("p",null,r.excerpt))}))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-b169708ce18626e08c04.js.map