(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var s=n(537),i=n.n(s),r=n(645),o=n.n(r)()(i());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",s=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),s&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),s&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,s,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(s)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);s&&o[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),e.push(u))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),r="/*# ".concat(i," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",s="second",i="minute",r="hour",o="day",a="week",c="month",l="quarter",u="year",d="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},_={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(s,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(s,c),r=n-i<0,o=e.clone().add(s+(r?-1:1),c);return+(-(s+(n-i)/(r?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:u,w:a,d:o,D:d,h:r,m:i,s,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=v;var g=function(t){return t instanceof D},b=function t(e,n,s){var i;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();$[r]&&(i=r),n&&($[r]=n,i=r);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var a=e.name;$[a]=e,i=a}return!s&&i&&(y=i),i||!s&&y},M=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},w=_;w.l=b,w.i=g,w.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function v(t){this.$L=b(t.locale,null,!0),this.parse(t)}var m=v.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(p);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return w},m.isValid=function(){return!(this.$d.toString()===f)},m.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return M(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<M(t)},m.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,l=!!w.u(e)||e,f=w.p(t),p=function(t,e){var s=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return l?s:s.endOf(o)},h=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case u:return l?p(1,0):p(31,11);case c:return l?p(1,m):p(0,m+1);case a:var $=this.$locale().weekStart||0,g=(v<$?v+7:v)-$;return p(l?_-g:_+(6-g),m);case o:case d:return h(y+"Hours",0);case r:return h(y+"Minutes",1);case i:return h(y+"Seconds",2);case s:return h(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var a,l=w.p(t),f="set"+(this.$u?"UTC":""),p=(a={},a[o]=f+"Date",a[d]=f+"Date",a[c]=f+"Month",a[u]=f+"FullYear",a[r]=f+"Hours",a[i]=f+"Minutes",a[s]=f+"Seconds",a[n]=f+"Milliseconds",a)[l],h=l===o?this.$D+(e-this.$W):e;if(l===c||l===u){var v=this.clone().set(d,1);v.$d[p](h),v.init(),this.$d=v.set(d,Math.min(this.$D,v.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[w.p(t)]()},m.add=function(n,l){var d,f=this;n=Number(n);var p=w.p(l),h=function(t){var e=M(f);return w.w(e.date(e.date()+Math.round(t*n)),f)};if(p===c)return this.set(c,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===o)return h(1);if(p===a)return h(7);var v=(d={},d[i]=t,d[r]=e,d[s]=1e3,d)[p]||1,m=this.$d.getTime()+n*v;return w.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),r=this.$H,o=this.$m,a=this.$M,c=n.weekdays,l=n.months,u=n.meridiem,d=function(t,n,i,r){return t&&(t[n]||t(e,s))||i[n].slice(0,r)},p=function(t){return w.s(r%12||12,t,"0")},v=u||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s};return s.replace(h,(function(t,s){return s||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return a+1;case"MM":return w.s(a+1,2,"0");case"MMM":return d(n.monthsShort,a,l,3);case"MMMM":return d(l,a);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,c,2);case"ddd":return d(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(r);case"HH":return w.s(r,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return v(r,o,!0);case"A":return v(r,o,!1);case"m":return String(o);case"mm":return w.s(o,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,d,f){var p,h=this,v=w.p(d),m=M(n),_=(m.utcOffset()-this.utcOffset())*t,y=this-m,$=function(){return w.m(h,m)};switch(v){case u:p=$()/12;break;case c:p=$();break;case l:p=$()/3;break;case a:p=(y-_)/6048e5;break;case o:p=(y-_)/864e5;break;case r:p=y/e;break;case i:p=y/t;break;case s:p=y/1e3;break;default:p=y}return f?p:w.a(p)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return $[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=b(t,e,!0);return s&&(n.$L=s),n},m.clone=function(){return w.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),k=D.prototype;return M.prototype=k,[["$ms",n],["$s",s],["$m",i],["$H",r],["$W",o],["$M",c],["$y",u],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,D,M),t.$i=!0),M},M.locale=b,M.isDayjs=g,M.unix=function(t){return M(1e3*t)},M.en=$[y],M.Ls=$,M.p={},M}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,s=6e4,i=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,c=2592e6,l=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:a,months:c,days:r,hours:i,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof y},f=function(t,e,n){return new y(t,n,e.$l)},p=function(t){return e.p(t)+"s"},h=function(t){return t<0},v=function(t){return h(t)?Math.ceil(t):Math.floor(t)},m=function(t){return Math.abs(t)},_=function(t,e){return t?h(t)?{negative:!0,format:""+m(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},y=function(){function h(t,e,n){var s=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return f(t*u[p(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){s.$d[p(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var i=t.match(l);if(i){var r=i.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var m=h.prototype;return m.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*u[n]}),0)},m.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=v(t/a),t%=a,this.$d.months=v(t/c),t%=c,this.$d.days=v(t/r),t%=r,this.$d.hours=v(t/i),t%=i,this.$d.minutes=v(t/s),t%=s,this.$d.seconds=v(t/n),t%=n,this.$d.milliseconds=t},m.toISOString=function(){var t=_(this.$d.years,"Y"),e=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=_(n,"D"),i=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=_(o,"S"),c=t.negative||e.negative||s.negative||i.negative||r.negative||a.negative,l=i.format||r.format||a.format?"T":"",u=(c?"-":"")+"P"+t.format+e.format+s.format+l+i.format+r.format+a.format;return"P"===u||"-P"===u?"P0D":u},m.toJSON=function(){return this.toISOString()},m.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(s[t])}))},m.as=function(t){return this.$ms/u[p(t)]},m.get=function(t){var e=this.$ms,n=p(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?v(e/u[n]):this.$d[n],0===e?0:e},m.add=function(t,e,n){var s;return s=e?t*u[p(e)]:d(t)?t.$ms:f(t,this).$ms,f(this.$ms+s*(n?-1:1),this)},m.subtract=function(t,e){return this.add(t,e,!0)},m.locale=function(t){var e=this.clone();return e.$l=t,e},m.clone=function(){return f(this.$ms,this)},m.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},m.valueOf=function(){return this.asMilliseconds()},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},h}(),$=function(t,e,n){return t.add(e.years()*n,"y").add(e.months()*n,"M").add(e.days()*n,"d").add(e.hours()*n,"h").add(e.minutes()*n,"m").add(e.seconds()*n,"s").add(e.milliseconds()*n,"ms")};return function(n,s,i){t=i,e=i().$utils(),i.duration=function(t,e){var n=i.locale();return f(t,{$l:n},e)},i.isDuration=d;var r=s.prototype.add,o=s.prototype.subtract;s.prototype.add=function(t,e){return d(t)?$(this,t,1):r.bind(this)(t,e)},s.prototype.subtract=function(t,e){return d(t)?$(this,t,-1):o.bind(this)(t,e)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,s=0;s<e.length;s++)if(e[s].identifier===t){n=s;break}return n}function s(t,s){for(var r={},o=[],a=0;a<t.length;a++){var c=t[a],l=s.base?c[0]+s.base:c[0],u=r[l]||0,d="".concat(l," ").concat(u);r[l]=u+1;var f=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var h=i(p,s);s.byIndex=a,e.splice(a,0,{identifier:d,updater:h,references:1})}o.push(d)}return o}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=s(t=t||[],i=i||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var c=s(t,i),l=0;l<r.length;l++){var u=n(r[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=c}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var s=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,i&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(s,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={id:s,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),s=n(795),i=n.n(s),r=n(569),o=n.n(r),a=n(565),c=n.n(a),l=n(216),u=n.n(l),d=n(589),f=n.n(d),p=n(10),h={};h.styleTagTransform=f(),h.setAttributes=c(),h.insert=o().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u(),e()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const v="shake";class m{#t=null;constructor(){if(new.target===m)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(v),setTimeout((()=>{this.element.classList.remove(v),t?.()}),600)}}function _(t,e,n="beforeend"){if(!(t instanceof m))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function y(t,e){if(!(t instanceof m&&e instanceof m))throw new Error("Can replace only components");const n=t.element,s=e.element,i=s.parentElement;if(null===i)throw new Error("Parent element doesn't exist");i.replaceChild(n,s)}class $ extends m{get template(){return'<ul class="trip-events__list"></ul>'}}class g extends m{get template(){return'<p class="trip-events__msg">Click New Event to create your first point</p>'}}var b=n(484),M=n.n(b),w=n(646),D=n.n(w);M().extend(D());const k=36e5,C=(t=0,e=1)=>{const n=Math.ceil(Math.min(t,e)),s=Math.floor(Math.max(t,e));return Math.floor(n+Math.random()*(s-n+1))},S=t=>t[C(0,t.length-1)],A=t=>M()(t).format("YYYY-MM-DDTHH:mm"),E=t=>M()(t).format("DD/MM/YY HH:mm"),O=t=>M()(t).format("HH:mm"),x=t=>`${t[0].toUpperCase()}${t.slice(1)}`,H=({point:t,pointDestination:e,pointOffers:n})=>{const{basePrice:s,dateFrom:i,dateTo:r,type:o,isFavorite:a}=t;return`<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="${A(i)}">${c=i,M()(c).format("MMM DD")}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${o}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${x(o)} ${e.name}</h3>\n        ${((t,e)=>`<div class="event__schedule">\n  <p class="event__time">\n    <time class="event__start-time" datetime="${A(t)}">${O(t)}</time>\n    &mdash;\n    <time class="event__end-time" datetime="${A(e)}">${O(e)}</time>\n  </p>\n  <p class="event__duration">${((t,e)=>{const n=M()(e).diff(M()(t));return n>=864e5?M().duration(n).format("DD[D] HH[H] mm[M]"):n>=k?M().duration(n).format("HH[H] mm[M]"):n<k?M().duration(n).format("mm[M]"):void 0})(t,e)}</p>\n</div>`)(i,r)}\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${s}</span>\n        </p>\n        ${(t=>{const e=t.reduce(((t,{title:e,price:n})=>`${t}\n     <li class="event__offer">\n      <span class="event__offer-title">${e}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${n}</span>\n    </li>`),"");return t.length>0?`\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n      ${e}\n    </ul>\n    `:""})(((t,e)=>{const n=[];return t.forEach((({id:t,title:s,price:i})=>{e.find((e=>e===t))&&n.push({price:i,title:s})})),n})(n,t.offers))}\n        <button class="event__favorite-btn ${a?" event__favorite-btn--active":""}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`;var c};class T extends m{#e=null;#n=null;#s=null;#i=null;constructor({point:t,pointDestination:e,pointOffers:n,onEditClick:s}){super(),this.#e=t,this.#n=e,this.#s=n,this.#i=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#r)}get template(){return H({point:this.#e,pointDestination:this.#n,pointOffers:this.#s})}#r=t=>{t.preventDefault(),this.#i()}}const Y=["Paris","London","Chicago","Tokio","New York","Moscow","Amsterdam","San-Francisco"],I=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],L=["everything","future","present","past"];class B extends m{#e=null;#n=null;#s=null;#o=null;#a=null;constructor({point:t,pointDestination:e,pointOffers:n,onCloseClick:s,onSubmitForm:i}){super(),this.#e=t,this.#n=e,this.#s=n,this.#o=s,this.#a=i,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#c),this.element.querySelector(".event.event--edit").addEventListener("submit",this.#l)}get template(){return(({point:t,pointDestination:e,pointOffers:n})=>{const{type:s,basePrice:i,dateFrom:r,dateTo:o,offers:a}=t;return`<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${s}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n                ${l=I,u=s,l.reduce(((t,e)=>`${t}\n  <div class="event__type-item">\n    <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}" ${e===u?"checked":""}>\n    <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${x(e)}</label>\n  </div>`),"")}\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${x(s)}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${e.name}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              ${c=Y,c.reduce(((t,e)=>`${t}<option value="${x(e)}"></option>`),"")}\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${E(r)}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${E(o)}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${i}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Delete</button>\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>\n        </header>\n        <section class="event__details">\n          ${((t,e)=>{const n=t.reduce(((t,{id:n,title:s,price:i})=>`${t}\n    <div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${n}-1" type="checkbox" name="event-offer-${n}" ${e.find((t=>t===n))?"checked":""}>\n      <label class="event__offer-label" for="event-offer-${n}-1">\n        <span class="event__offer-title">${s}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${i}</span>\n      </label>\n    </div>`),"");return t.length>0?`\n    <section class="event__section  event__section--offers">\n      <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n      <div class="event__available-offers">\n      ${n}\n      </div>\n    </section>\n    `:""})(n,a)}\n          <section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">${e.description}</p>\n\n            ${(t=>{const e=t.pictures.reduce(((t,{src:e,description:n})=>`${t}\n  <img class="event__photo" src="${e}" alt="${n}">`),"");return t.pictures.length>0?`\n    <div class="event__photos-container">\n      <div class="event__photos-tape">\n      ${e}\n      </div>\n    </div>\n    `:""})(e)}\n          </section>\n        </section>\n      </form>\n    </li>`;var c,l,u})({point:this.#e,pointDestination:this.#n,pointOffers:this.#s})}#c=t=>{t.preventDefault(),this.#o()};#l=t=>{t.preventDefault(),this.#a()}}class F extends m{get template(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n  <div class="trip-sort__item  trip-sort__item--day">\n    <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n    <label class="trip-sort__btn" for="sort-day">Day</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--event">\n    <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n    <label class="trip-sort__btn" for="sort-event">Event</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--time">\n    <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n    <label class="trip-sort__btn" for="sort-time">Time</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--price">\n    <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n    <label class="trip-sort__btn" for="sort-price">Price</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--offer">\n    <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n    <label class="trip-sort__btn" for="sort-offer">Offers</label>\n  </div>\n</form>'}}class P extends m{get template(){return`<form class="trip-filters" action="#" method="get">\n    ${t=L,t.reduce(((t,e,n)=>`${t}\n  <div class="trip-filters__filter">\n    <input id="filter-${e}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${e}" ${0===n?"checked":""}>\n    <label class="trip-filters__filter-label" for="filter-${e}">${x(e)}</label>\n  </div>`),"")}\n    <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>`;var t}}const U=document.querySelector(".trip-controls__filters");class N extends m{get template(){return'<section class="trip-main__trip-info  trip-info">\n  <div class="trip-info__main">\n    <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n    <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n  </div>\n  <p class="trip-info__cost">\n    Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n  </p>\n</section>'}}const j=document.querySelector(".trip-main");let W=M()().subtract(C(0,3),"day").toDate();const q=({next:t})=>{const e=C(0,3),n=C(1,5),s=C(0,59);return t&&(W=M()(W).add(s,"minute").add(n,"hour").add(e,"day").toDate()),W},Z=document.querySelector(".trip-events"),z=new class{destinations=[];offers=[];points=[];constructor(){this.destinations=this.generateDestinations(),this.offers=this.generateOffers(),this.points=this.generatePoints()}getPoints(){return this.points}getDestinations(){return this.destinations}getOffers(){return this.offers}generateDestinations(){return Array.from({length:10},(()=>(()=>{const t=S(Y);return{id:crypto.randomUUID(),name:t,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto labore atque!",pictures:Array.from({length:C(0,4)},(()=>({src:`https://loremflickr.com/248/152?${crypto.randomUUID()}`,description:`It is ${t} description`})))}})()))}generateOffers(){return I.map((t=>({type:t,offers:Array.from({length:C(0,7)},(()=>(t=>({id:crypto.randomUUID(),title:`Offer ${t}`,price:C(1,50)}))(t)))})))}generatePoints(){return Array.from({length:5},(()=>{const t=S(I),e=S(this.destinations),n=this.offers.find((e=>e.type===t)),s=new Set;Array.from({length:C(1,n.offers.length)},(()=>{s.add(S(n.offers))}));const i=s.size>0&&[...s][0]?[...s].map((t=>t.id)):[];return((t,e,n)=>({id:crypto.randomUUID(),basePrice:C(1,500),dateFrom:q({next:!1}),dateTo:q({next:!0}),destination:e,isFavorite:Boolean(C(0,1)),offers:n,type:t}))(t,e.id,i)}))}},J=new class{constructor(t){this.service=t,this.destinations=this.service.getDestinations()}get(){return this.destinations}getById(t){return this.destinations.find((e=>e.id===t))}}(z),X=new class{constructor(t){this.service=t,this.offers=this.service.getOffers()}get(){return this.offers}getByType(t){return this.offers.find((e=>e.type===t)).offers}}(z),R=new class{constructor(t){this.service=t,this.points=this.service.points}get(){return this.points}}(z),V=new class{#u=null;#d=null;#f=null;#p=null;#h=[];#v=new $;#m=new F;constructor({pointsContainer:t,pointsModel:e,offersModel:n,destinationsModel:s}){this.#u=t,this.#d=e,this.#f=s,this.#p=n,this.#h=[...this.#d.get()]}init(){this.#h.length?(_(this.#m,this.#u),_(this.#v,this.#u),this.#h.forEach((t=>{this.#_(t)}))):_(new g,this.#u)}#_=t=>{const e=new T({point:t,pointDestination:this.#f.getById(t.destination),pointOffers:this.#p.getByType(t.type),onEditClick:function(){y(n,e),document.addEventListener("keydown",s)}}),n=new B({point:t,pointDestination:this.#f.getById(t.destination),pointOffers:this.#p.getByType(t.type),onCloseClick:function(){i(),document.removeEventListener("keydown",s)},onSubmitForm:function(){i(),document.removeEventListener("keydown",s)}}),s=t=>{"Escape"===t.key&&(t.preventDefault(),i(),document.removeEventListener("keydown",s))};function i(){y(e,n)}_(e,this.#v.element)}}({pointsContainer:Z,destinationsModel:J,offersModel:X,pointsModel:R}),G=new class{init(){_(new P,U)}},K=new class{init(){_(new N,j,"afterbegin")}};V.init(),G.init(),K.init()})()})();
//# sourceMappingURL=bundle.150132c279685725f858.js.map