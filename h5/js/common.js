/* store.js - Copyright (c) 2010-2017 Marcus Westin */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.store=e()}}(function(){var define,module,exports;return function e(t,n,r){function o(u,a){if(!n[u]){if(!t[u]){var c="function"==typeof require&&require;if(!a&&c)return c(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var s=n[u]={exports:{}};t[u][0].call(s.exports,function(e){var n=t[u][1][e];return o(n?n:e)},s,s.exports,e,t,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,t,n){"use strict";var r=e("../src/store-engine"),o=e("../storages/all"),i=[e("../plugins/json2")];t.exports=r.createStore(o,i)},{"../plugins/json2":2,"../src/store-engine":4,"../storages/all":6}],2:[function(e,t,n){"use strict";function r(){return e("./lib/json2"),{}}t.exports=r},{"./lib/json2":3}],3:[function(require,module,exports){"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};"object"!==("undefined"==typeof JSON?"undefined":_typeof(JSON))&&(JSON={}),function(){function f(e){return e<10?"0"+e:e}function this_value(){return this.valueOf()}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,o,i,u,a=gap,c=t[e];switch(c&&"object"===("undefined"==typeof c?"undefined":_typeof(c))&&"function"==typeof c.toJSON&&(c=c.toJSON(e)),"function"==typeof rep&&(c=rep.call(t,e,c)),"undefined"==typeof c?"undefined":_typeof(c)){case"string":return quote(c);case"number":return isFinite(c)?String(c):"null";case"boolean":case"null":return String(c);case"object":if(!c)return"null";if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(c)){for(i=c.length,n=0;n<i;n+=1)u[n]=str(n,c)||"null";return o=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+a+"]":"["+u.join(",")+"]",gap=a,o}if(rep&&"object"===("undefined"==typeof rep?"undefined":_typeof(rep)))for(i=rep.length,n=0;n<i;n+=1)"string"==typeof rep[n]&&(r=rep[n],o=str(r,c),o&&u.push(quote(r)+(gap?": ":":")+o));else for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(o=str(r,c),o&&u.push(quote(r)+(gap?": ":":")+o));return o=0===u.length?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+a+"}":"{"+u.join(",")+"}",gap=a,o}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,n){var r;if(gap="",indent="","number"==typeof n)for(r=0;r<n;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=t,t&&"function"!=typeof t&&("object"!==("undefined"==typeof t?"undefined":_typeof(t))||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,o=e[t];if(o&&"object"===("undefined"==typeof o?"undefined":_typeof(o)))for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(r=walk(o,n),void 0!==r?o[n]=r:delete o[n]);return reviver.call(e,t,o)}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}()},{}],4:[function(e,t,n){"use strict";function r(){var e="undefined"==typeof console?null:console;if(e){var t=e.warn?e.warn:e.log;t.apply(e,arguments)}}function o(e,t,n){n||(n=""),e&&!l(e)&&(e=[e]),t&&!l(t)&&(t=[t]);var o=n?"__storejs_"+n+"_":"",i=n?new RegExp("^"+o):null,v=/^[a-zA-Z0-9_\-]*$/;if(!v.test(n))throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");var h={_namespacePrefix:o,_namespaceRegexp:i,_testStorage:function(e){try{var t="__storejs__test__";e.write(t,t);var n=e.read(t)===t;return e.remove(t),n}catch(r){return!1}},_assignPluginFnProp:function(e,t){var n=this[t];this[t]=function(){function t(){if(n)return c(arguments,function(e,t){r[t]=e}),n.apply(o,r)}var r=u(arguments,0),o=this,i=[t].concat(r);return e.apply(o,i)}},_serialize:function(e){return JSON.stringify(e)},_deserialize:function(e,t){if(!e)return t;var n="";try{n=JSON.parse(e)}catch(r){n=e}return void 0!==n?n:t},_addStorage:function(e){this.enabled||this._testStorage(e)&&(this.storage=e,this.enabled=!0)},_addPlugin:function(e){var t=this;if(l(e))return void c(e,function(e){t._addPlugin(e)});var n=a(this.plugins,function(t){return e===t});if(!n){if(this.plugins.push(e),!p(e))throw new Error("Plugins must be function values that return objects");var r=e.call(this);if(!d(r))throw new Error("Plugins must return an object of function properties");c(r,function(n,r){if(!p(n))throw new Error("Bad plugin property: "+r+" from plugin "+e.name+". Plugins should only return functions.");t._assignPluginFnProp(n,r)})}},addStorage:function(e){r("store.addStorage(storage) is deprecated. Use createStore([storages])"),this._addStorage(e)}},m=s(h,g,{plugins:[]});return m.raw={},c(m,function(e,t){p(e)&&(m.raw[t]=f(m,e))}),c(e,function(e){m._addStorage(e)}),c(t,function(e){m._addPlugin(e)}),m}var i=e("./util"),u=i.slice,a=i.pluck,c=i.each,f=i.bind,s=i.create,l=i.isList,p=i.isFunction,d=i.isObject;t.exports={createStore:o};var g={version:"2.0.12",enabled:!1,get:function(e,t){var n=this.storage.read(this._namespacePrefix+e);return this._deserialize(n,t)},set:function(e,t){return void 0===t?this.remove(e):(this.storage.write(this._namespacePrefix+e,this._serialize(t)),t)},remove:function(e){this.storage.remove(this._namespacePrefix+e)},each:function(e){var t=this;this.storage.each(function(n,r){e.call(t,t._deserialize(n),(r||"").replace(t._namespaceRegexp,""))})},clearAll:function(){this.storage.clearAll()},hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},createStore:function(){return o.apply(this,arguments)},addPlugin:function(e){this._addPlugin(e)},namespace:function(e){return o(this.storage,this.plugins,e)}}},{"./util":5}],5:[function(e,t,n){(function(e){"use strict";function n(){return Object.assign?Object.assign:function(e,t,n,r){for(var o=1;o<arguments.length;o++)a(Object(arguments[o]),function(t,n){e[n]=t});return e}}function r(){if(Object.create)return function(e,t,n,r){var o=u(arguments,1);return d.apply(this,[Object.create(e)].concat(o))};var e=function(){};return function(t,n,r,o){var i=u(arguments,1);return e.prototype=t,d.apply(this,[new e].concat(i))}}function o(){return String.prototype.trim?function(e){return String.prototype.trim.call(e)}:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}}function i(e,t){return function(){return t.apply(e,Array.prototype.slice.call(arguments,0))}}function u(e,t){return Array.prototype.slice.call(e,t||0)}function a(e,t){f(e,function(e,n){return t(e,n),!1})}function c(e,t){var n=s(e)?[]:{};return f(e,function(e,r){return n[r]=t(e,r),!1}),n}function f(e,t){if(s(e)){for(var n=0;n<e.length;n++)if(t(e[n],n))return e[n]}else for(var r in e)if(e.hasOwnProperty(r)&&t(e[r],r))return e[r]}function s(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length}function l(e){return e&&"[object Function]"==={}.toString.call(e)}function p(e){return e&&"[object Object]"==={}.toString.call(e)}var d=n(),g=r(),v=o(),h="undefined"!=typeof window?window:e;t.exports={assign:d,create:g,trim:v,bind:i,slice:u,each:a,map:c,pluck:f,isList:s,isFunction:l,isObject:p,Global:h}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],6:[function(e,t,n){"use strict";t.exports=[e("./localStorage"),e("./oldFF-globalStorage"),e("./oldIE-userDataStorage"),e("./cookieStorage"),e("./sessionStorage"),e("./memoryStorage")]},{"./cookieStorage":7,"./localStorage":8,"./memoryStorage":9,"./oldFF-globalStorage":10,"./oldIE-userDataStorage":11,"./sessionStorage":12}],7:[function(e,t,n){"use strict";function r(e){if(!e||!c(e))return null;var t="(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(p.cookie.replace(new RegExp(t),"$1"))}function o(e){for(var t=p.cookie.split(/; ?/g),n=t.length-1;n>=0;n--)if(l(t[n])){var r=t[n].split("="),o=unescape(r[0]),i=unescape(r[1]);e(i,o)}}function i(e,t){e&&(p.cookie=escape(e)+"="+escape(t)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")}function u(e){e&&c(e)&&(p.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}function a(){o(function(e,t){u(t)})}function c(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(p.cookie)}var f=e("../src/util"),s=f.Global,l=f.trim;t.exports={name:"cookieStorage",read:r,write:i,each:o,remove:u,clearAll:a};var p=s.document},{"../src/util":5}],8:[function(e,t,n){"use strict";function r(){return s.localStorage}function o(e){return r().getItem(e)}function i(e,t){return r().setItem(e,t)}function u(e){for(var t=r().length-1;t>=0;t--){var n=r().key(t);e(o(n),n)}}function a(e){return r().removeItem(e)}function c(){return r().clear()}var f=e("../src/util"),s=f.Global;t.exports={name:"localStorage",read:o,write:i,each:u,remove:a,clearAll:c}},{"../src/util":5}],9:[function(e,t,n){"use strict";function r(e){return c[e]}function o(e,t){c[e]=t}function i(e){for(var t in c)c.hasOwnProperty(t)&&e(c[t],t)}function u(e){delete c[e]}function a(e){c={}}t.exports={name:"memoryStorage",read:r,write:o,each:i,remove:u,clearAll:a};var c={}},{}],10:[function(e,t,n){"use strict";function r(e){return s[e]}function o(e,t){s[e]=t}function i(e){for(var t=s.length-1;t>=0;t--){var n=s.key(t);e(s[n],n)}}function u(e){return s.removeItem(e)}function a(){i(function(e,t){delete s[e]})}var c=e("../src/util"),f=c.Global;t.exports={name:"oldFF-globalStorage",read:r,write:o,each:i,remove:u,clearAll:a};var s=f.globalStorage},{"../src/util":5}],11:[function(e,t,n){"use strict";function r(e,t){if(!v){var n=c(e);g(function(e){e.setAttribute(n,t),e.save(p)})}}function o(e){if(!v){var t=c(e),n=null;return g(function(e){n=e.getAttribute(t)}),n}}function i(e){g(function(t){for(var n=t.XMLDocument.documentElement.attributes,r=n.length-1;r>=0;r--){var o=n[r];e(t.getAttribute(o.name),o.name)}})}function u(e){var t=c(e);g(function(e){e.removeAttribute(t),e.save(p)})}function a(){g(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(p);for(var n=t.length-1;n>=0;n--)e.removeAttribute(t[n].name);e.save(p)})}function c(e){return e.replace(/^\d/,"___$&").replace(h,"___")}function f(){if(!d||!d.documentElement||!d.documentElement.addBehavior)return null;var e,t,n,r="script";try{t=new ActiveXObject("htmlfile"),t.open(),t.write("<"+r+">document.w=window</"+r+'><iframe src="/favicon.ico"></iframe>'),t.close(),e=t.w.frames[0].document,n=e.createElement("div")}catch(o){n=d.createElement("div"),e=d.body}return function(t){var r=[].slice.call(arguments,0);r.unshift(n),e.appendChild(n),n.addBehavior("#default#userData"),n.load(p),t.apply(this,r),e.removeChild(n)}}var s=e("../src/util"),l=s.Global;t.exports={name:"oldIE-userDataStorage",write:r,read:o,each:i,remove:u,clearAll:a};var p="storejs",d=l.document,g=f(),v=(l.navigator?l.navigator.userAgent:"").match(/ (MSIE 8|MSIE 9|MSIE 10)\./),h=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g")},{"../src/util":5}],12:[function(e,t,n){"use strict";function r(){return s.sessionStorage}function o(e){return r().getItem(e)}function i(e,t){return r().setItem(e,t)}function u(e){for(var t=r().length-1;t>=0;t--){var n=r().key(t);e(o(n),n)}}function a(e){return r().removeItem(e)}function c(){return r().clear()}var f=e("../src/util"),s=f.Global;t.exports={name:"sessionStorage",read:o,write:i,each:u,remove:a,clearAll:c}},{"../src/util":5}]},{},[1])(1)});
(function(){$.extend({removeModa:function(){$(".myModa").fadeOut(300);setTimeout(function(){$(".myModa").remove()},300)},myAlert:function(options){var option={title:"提示",message:"提示内容……",button:"确定",callback:function(){}};if(typeof(options)=="string"){option.message=options}else{option=$.extend(option,options)}var top=$(window).height()*0.3;$("body").append('<div class="myModa"><div class="myAlertBox"  style="margin-top:'+top+'px"><h6>'+option.title+"</h6><p>"+option.message+'</p><div class="col1"><div class="btn sure">'+option.button+"</div></div></div></div>");$("body").css("overflow-y","hidden");$(".btn.sure").click(function(){$.removeModa();$("body").css("overflow-y","scroll");option.callback()})},myConfirm:function(options){var option={title:"提示",message:"提示内容……",button:["取消","确定"],callback:function(){}};if(typeof(options)=="string"){option.message=options}else{option=$.extend(option,options)}var top=$(window).height()*0.3;$("body").append('<div class="myModa"><div class="myAlertBox" style="margin-top:'+top+'px"><h6>'+option.title+"</h6><p>"+option.message+'</p><div class="col2"><div class="col"><div class="btn exit">'+option.button[0]+'</div></div><div class="col"><div class="btn sure">'+option.button[1]+"</div></div></div></div></div>");$("body").css("overflow-y","hidden");$(".btn.exit").click(function(){$.removeModa();$("body").css("overflow-y","scroll")});$(".btn.sure").click(function(){$.removeModa();$("body").css("overflow-y","scroll");option.callback()})},myToast:function(message){var top=$(window).height()*0.3;$("body").append('<div class="myToast"><p>'+message+"</p></div>");var top=($(window).height()-$(".myToast").height())/2;var left=($("body").width()-$(".myToast").width())/2;$(".myToast").css({"top":top+"px","left":left+"px"});setTimeout(function(){$(".myToast").fadeOut(300);setTimeout(function(){$(".myToast").remove()},300)},1000)},myLoadding:function(message){var m=message||"加载中，请稍后...";var top=$(window).height()*0.3;$("body").append('<div class="myModa"><div class="myLoadding"><img src="data:image/gif;base64,R0lGODlhMgAyANUrAH19faqnp5CQkKakpJmYmJeWlo+Pj5iXl4+Ojn5+fp6cnIaGhoGBgZCPj5WUlJWVlauoqJaVlZ2cnKelpaqoqKSioqimppuamqKgoKGgoJybm5GQkJ+dnammpo2MjIKBgY2NjYiIiIODg4WFhYCAgI6NjYqKioKCgoqJia2qqo6Ojv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5QjNCN0FERDlERTNFNzExOTkzNURDQzYyNThDMzVGQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NkVFNTEzNEUzQTIxMUU3ODU3MUQ3MDZGMTE4RDZBOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NkVFNTEzM0UzQTIxMUU3ODU3MUQ3MDZGMTE4RDZBOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlCM0I3QUREOURFM0U3MTE5OTM1RENDNjI1OEMzNUZCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlCM0I3QUREOURFM0U3MTE5OTM1RENDNjI1OEMzNUZCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQ8AKwAsAAAAADIAMgAABv9AlXBILBpVDQajcWw6n1AVAwBgRK/YI5Wa7Wa3AK8YCh6btdvzU2HJCMhp6IECOWALqfzg7Sw/CXkpEFgHgSl7fXFNgIEUWAYDhohoXIuGKXZYApGBk0V+RoyBBF6bknxEoESieaRipp2oQqpCrCmuY7B6srS2uGa6h6hTVauXv2fBFUMGDB8GQw7HakXBTE0KhsjUKrATTw+j3EcGGhIbUA8KDuPt7u/w8UIFAZf2KQEFXvT3l/kq9fr58xJQYKAAAA0aQtiloEKE/B7q6xLR4D95GDNq3OhAQYQoAiRcgAZP1McnE3a9Y6XgSYNT7Wyxe1IBJjVfROhdFBLM0xhbnEQCMhzSU1YXoEQMGSkqBmnSQEeYZnH6NE8TqVEKaXOi9ConPSShONxWNcWTYJnEinvS1YmuiVB0ki3S1i2GDhzi1d14ZC9fulD/NvErWAjhwkILH9EJV7G8IAAh+QQFDwArACwWAAAAFAATAAAGYMBCIFBYGY/I5CqQSgWU0GOzGY1OU1XoNavccpHerIFBMoSjiAQAQDor02sAw42ErxMIutEOwK/0fH5/U29qdwhShHWGfYhHTE6LcYJHQkRHDYyUWR6Tjl8GapugHgZVQQAh+QQFDwArACwdAAYAFAAUAAAGWMCVcDg8UCAHonJJSDkhy+iq6UxRpEpqNYkVap2ErrcKFk/JqbD4mzaz1V0HGt5VkOndRxUvfigcZoGCg4RdDQwAiYqLiQwNRIiMko2Qk5MMRAaRlokfBkEAIfkEBQ8AKwAsHQAWABQAFAAABllAlVBVCKSOyOQxUBiqjMro0gmVKgPOojXJdHq/4LB4TFYZQKWydwQALAxqFaLdfsdDdDe8bFjk7Xx+dIBkfX97hYJ1iGOGg4xijotqkgAIcZINcWYoIh5gQQAh+QQFDwArACwWAB0AFQAUAAAGaUCVcCgUSC4GonIpnKRSAwFz2ng+o1NmxQqVKhsMRoMoGHCxRAYAwFCWz17her18W9GqOYBpv3r1U31deXNZggMGgIZmVgeKi1YFj4YYHRyEdFlMk5pDnJ2Ye6BEn51qbKNEBgwfSalCQQAh+QQFDwArACwGAB0AFAAUAAAGY8CVcDhseBrEpHKFSAAAyKWy+QR4pEnqMxHFMp1bBLEQCBSIWkBCTAykUoFheq18v4VzdtKe+lbpS3x5WHwff3qBdidhXit8DQwMBo2OdpREfJdDmZqVd52cmqGXbnCdK2RmQQAh+QQFDwArACwAABYAEwAUAAAGVcAGA0AsGomMxmo5PDqRy1XzeWREDVMq4GOIer/gsHhMLpsdiog5Ski51ea2O6WIz92OsnxO0N9TfWR7boFjg4B+d4ViB3+LYgGKa5GEaysFAQGPXkEAIfkEBQ8AKwAsAAAGABQAFAAABlpAlXCo8ohMBqJy2QA4F8mlFOF8RqXKRRUAxSoN2mrXOwRvx2SVWXwlr61p4Zvb9s5DcXnYicirwyN+RCB9goaHcQUBKYyNjowBBUSLj5WQk5aWAUSKmY6RREEAOw=="/><p>'+m+"</p></div></div>");var top=($(window).height()-$(".myLoadding").height())/2;var left=($("body").width()-$(".myLoadding").width())/2;$(".myLoadding").css({"top":top+"px","left":left+"px"})}})})(jQuery);
//窗口自适应事件
(function(win,doc){
    function change(){
          doc.documentElement.style.fontSize=doc.documentElement.clientWidth/750*100+'px';
    }
    change();
    win.addEventListener('resize',change,false);
})(window,document);

//动态异步加载脚本
function loadScript(url, callback) {
    var head = document.head || document.getElementsByTagName('head')[0] || document.documentElement,
    script,
    options,
    s;
    if (typeof url === 'object') {
        options = url;
        url = undefined;
    }
    s = options || {};
    url = url || s.url;
    callback = callback || s.success;
    script = document.createElement('script');
    script.async = s.async || false;
    script.type = 'text/javascript';
    if (s.charset) {
        script.charset = s.charset;
    }
    if (s.cache === false) {
        url = url + (/\?/.test(url) ? '&': '?') + '_=' + (new Date()).getTime();
    }
    script.src = url;
    head.insertBefore(script, head.firstChild);
    if (callback) {
        document.addEventListener ? script.addEventListener('load', callback, false) : script.onreadystatechange = function() {
            if (/loaded|complete/.test(script.readyState)) {
                script.onreadystatechange = callback()
            }
        }
    }
}


//	判断是否登录
function isLogin(data){
	if(data.code==1001){
		$.myAlert({
			title:'<img src="images/2-1xdlu.png" alt="" />',
			message:'请您先登录',
			button:['立即登录'],
			callback:function(){
				//store.remove('user');
				window.location.href='login.html'
			}
		});
		return false;
	}else if(data.code==1){
		return true;
	}else if(data.code==1002){
		$.myAlert({
			title:'<img src="images/2-1xdlu.png" alt="" />',
			message:'请您完善个人资料',
			button:['立即完善'],
			callback:function(){
				//store.remove('user');
				window.location.href='perfectInfo.html'
			}
		});
	}else{
		$.toastTip({
			img:'images/4-3gxfkui.png',
			imgW:'1.56rem',
			imgH:'1.5rem',
			text:[data.msg]
		})
		return false;
	}
}

function isTel(tel){
	if(tel==''|| tel.length!=11){
		$.toastTip({
			img:'images/4-3gxfkui.png',
			imgW:'1.56rem',
			imgH:'1.5rem',
			text:['手机号不正确']
		});
	}
}

//下拉底部显示
(function() {
    $.extend({
    	removesheet: function() {
    		$('body').css('overflow-y', 'scroll')
            $('.actionsheet').fadeOut(200);
            setTimeout(function() {
                $('.actionsheet').remove()
            }, 300)
        },

        shareAction:function(bol){
        	var link = window.location.href;
			var protocol = window.location.protocol;
			var host = window.location.host;
			var url = "";
			var uid = localStorage.getItem("uid");
        	wx.ready(function(){
        		//如果bol存在 或者为 true name跳转到首页面
        		if (bol) {
        			url = protocol+'//'+host+'/h5/index.html';
        		} else {
        			url = protocol+'//'+host+'/h5/share.html?uid='+uid;
        		}

        		//分享朋友圈
		        wx.onMenuShareTimeline({
		            title: '易创链-成为易创商务合伙人，分享IT开发项目线索，获得10%~30%提成',
		            link: url,
		            imgUrl: protocol+'//'+host+'/h5/images/logo.jpg',// 自定义图标
		            success: function (res) {
		                $.toastTip({
							img:'/h5/images/4-3gxfkui.png',
							imgW:'1.56rem',
							imgH:'1.5rem',
							text:['分享成功']
						});
		            },
		            cancel: function (res) {
		            },
		            fail: function (res) {
		            }
		        });
 				wx.onMenuShareAppMessage({
		            title: '易创链', // 分享标题
		            desc: '成为易创商务合伙人，分享IT开发项目线索，获得10%~30%提成', // 分享描述
		            link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		            imgUrl: protocol+'//'+host+'/h5/images/logo.jpg', // 自定义图标
		            type: 'link', // 分享类型,music、video或link，不填默认为link
		            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		            success: function () {
		                $.toastTip({
							img:'/h5/images/4-3gxfkui.png',
							imgW:'1.56rem',
							imgH:'1.5rem',
							text:['分享成功']
						});
		            },
		            cancel: function () {
		            }
		        });
		        wx.onMenuShareQQ({
					title: '易创链', // 分享标题
					desc: '成为易创商务合伙人，分享IT开发项目线索，获得10%~30%提成', // 分享描述
					link: url, // 分享链接
					imgUrl: protocol+'//'+host+'/h5/images/logo.jpg', // 分享图标
					success: function () {
						$.toastTip({
							img:'/h5/images/4-3gxfkui.png',
							imgW:'1.56rem',
							imgH:'1.5rem',
							text:['分享成功']
						});
					},
					cancel: function () {
					}
				});
				wx.onMenuShareQZone({
					title: '易创链', // 分享标题
					desc: '成为易创商务合伙人，分享IT开发项目线索，获得10%~30%提成', // 分享描述
					link: url, // 分享链接
					imgUrl: protocol+'//'+host+'/h5/images/logo.jpg', // 分享图标
					success: function () {
						$.toastTip({
							img:'/h5/images/4-3gxfkui.png',
							imgW:'1.56rem',
							imgH:'1.5rem',
							text:['分享成功']
						});
					},
					cancel: function () {
					}
				});
				wx.onMenuShareWeibo({
					title: '易创链', // 分享标题
					desc: '成为易创商务合伙人，分享IT开发项目线索，获得10%~30%提成', // 分享描述
					link: url, // 分享链接
					imgUrl: protocol+'//'+host+'/h5/images/logo.jpg', // 分享图标
					success: function () {
						$.toastTip({
							img:'/h5/images/4-3gxfkui.png',
							imgW:'1.56rem',
							imgH:'1.5rem',
							text:['分享成功']
						});
					},
					cancel: function () {
					// 用户取消分享后执行的回调函数
					}
				});
 			});
        },
        developSecondSales:function(bol){ //发展二级分销
        	loadScript('http://res.wx.qq.com/open/js/jweixin-1.0.0.js',function(){
        		$.ajax({
			        url: 'http://yichuanglian.huimor.com/index/development',
			        type:'get',
			        dataType:'json',
			        data:{
			        	url: window.location.href
			        },
			        xhrFields:{
						withCredentials:true
					},
			        success:function(data){
			        	var appId  = data.data.appId;
			        	var nonceStr  = data.data.nonceStr;
			        	var timestamp  = data.data.timestamp;
			        	var signature  = data.data.signature;
			        	var uid = data.data.userid;

			        	if(uid!="undefined"){
                            localStorage.setItem("uid",uid);
						}

			    		wx.config({
						    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
						    appId: appId, // 必填，公众号的唯一标识
						　　timestamp: timestamp, // 必填，生成签名的时间戳
						    nonceStr: nonceStr, // 必填，生成签名的随机串
						    signature: signature,// 必填，签名，见附录1
						    jsApiList: [
						    	'onMenuShareTimeline',
						    	'onMenuShareAppMessage',
						    	'onMenuShareQQ',
						    	'onMenuShareWeibo',
						    	'onMenuShareQZone'
					    	] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
						});
			    		$.shareAction(bol);
			        }
			    });
        	})
        },
        showShareBox:function(){
        	var html = [
     			'<div class="share_bg">',
     			'<img id="arrow" src="./images/sharearrows.png" />',
     			'</div>'
     		].join('');
     		var box = $(html);
        	$('body').append(box);
        	$('.share_bg').click(function(){
        		$(this).remove();
        	})
        	/*
        	var defalut = {
        		title:"分享至",
        		images:[
        			{des:"QQ好友",img:'/h5/images/1-5qq.png'},
        			{des:"QQ空间",img:'/h5/images/1-5qqkj.png'},
        			{des:"微信好友",img:'/h5/images/1-5wx.png'},
        			{des:"朋友圈",img:'/h5/images/1-5pyq.png'},
        			{des:"微博",img:'/h5/images/1-5wb.png'}
				],
        	}
        	var config = defalut;
        	if(options){
        		$.extend(config,defalut,options);
        	}
     		var link = window.location.href;
			var protocol = window.location.protocol;
			var host = window.location.host;
     		var html = [
     			'<div class="share_bg">',
     			'<div class="share_box" id="shareBox">',
     				'<div class="title"><h3>'+config.title+'</h3><span class="share_closer"></span></div>',
     				'<div class="list">',
	     				'<div class="item"><img src="'+config.images[0].img+'" ><span>'+config.images[0].des+'</span></div>',
	     				'<div class="item"><img src="'+config.images[1].img+'" ><span>'+config.images[1].des+'</span></div>',
	     				'<div class="item"><img src="'+config.images[2].img+'" ><span>'+config.images[2].des+'</span></div>',
	     				'<div class="item"><img src="'+config.images[3].img+'" ><span>'+config.images[3].des+'</span></div>',
	     				'<div class="item"><img src="'+config.images[4].img+'" ><span>'+config.images[4].des+'</span></div>',
     				'</div>',
     			'</div>',
     			'</div>'
     		].join('');
     		var box = $(html);

     		$('body').append(box);
     		$('.share_closer').click(function(){
     			$('.share_bg').remove();
     		})
     		$('#shareBox .item').eq(0).click(function(){

     		})
     		$('#shareBox .item').eq(1).click(function(){

     		})
     		$('#shareBox .item').eq(2).click(function(){
     		})
     		$('#shareBox .item').eq(3).click(function(){
     		})
     		$('#shareBox .item').eq(4).click(function(){

     		})
     		*/
        },
		actionsheet:function(options){
			var lists_str='';
			var lists=options.lists;
			var listsId=options.listsId;
			$.each(lists, function(i,v){
				if(options.active==v){
					lists_str+='<p class="active" data-id='+listsId[i]+'>'+v+'</p>';
				}else{
					lists_str+='<p data-id='+listsId[i]+'>'+v+'</p>';
				}
			});
			var actionsheetStr=$('<div class="actionsheet"><div class="actionsheetBox"><h3><span>'+options.title+'</span></h3><div class="actionsheetContent">'+lists_str+'</div></div></div>');
			$('body').append(actionsheetStr).css('overflow-y', 'hidden');
            $('.actionsheetContent p').click(function() {
                $.removesheet();
                var text=$(this).text();
                var id=$(this).attr('data-id');
                options.callback(text,id)
            });
            $('.actionsheet').click(function() {
                $.removesheet();
            });
            $('.actionsheetContent,.actionsheet h3').click(function(e) {
                e.stopPropagation()
            });
		},
		toastTip:function(options){
			var imgSrc=options.img;
			var text=options.text;
			var text_str='';
			options.delay = options.delay ? options.delay : 1500;

			$.each(text, function(i,v){
				text_str+='<p>'+v+'</p>';
			});
			var toastTipStr=$('<div class="toastTip"><div class="toastContent"><img src="'+imgSrc+'" />'+text_str+'</div></div>');
			toastTipStr.find('img').css({"width":options.imgW,"height":options.imgH});
			$('body').append(toastTipStr).css('overflow-y', 'hidden');
			var tipTop=($(window).height()-$(".toastContent").height())/2.5;
			$(".toastContent").css('top',tipTop);
			setTimeout(function(){$('.toastTip').fadeOut(300);$('body').css('overflow-y', 'scroll');$('.toastTip').remove();},options.delay)
		}
	})
})(jQuery);


function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
	var r = window.location.search.substr(1).match(reg);
	if (r!=null) return (r[2]); return null;
}


$(function(){
	var isAuth = localStorage.getItem('isauth');
	if(!isAuth){
		if(!GetQueryString('isauth')){
			var href = window.location.href
			//location.href="http://yichuanglian.huimor.com/index?fromurl="+href;
		}else{
			localStorage.setItem('isauth',1);
		}
	}
	$(document).on('click','#shareBtn , .shareBtn',function(){
		$.showShareBox();
	});
	//	发布线索 输入框点击
	$('.releaseInfo input').focus(function(){
		$(this).parents('dd').addClass('cur');
	});
	$('.releaseInfo input').blur(function(){
		$(this).parents('dd').removeClass('cur');
	});

	//	完善个人信息 是否同意阅读线上合同
	$('.agreeContract i').click(function(){
		$(this).toggleClass('active');
	})

	//	发布线索  行业选择弹出
	$('.industryAdd a').click(function(){
		$('.industryTanchu').show();
	});

	$('.industryTanchu').click(function(e){
		if(e.target==$('.industryTanchu')[0]){
			$(this).hide();
		}
	});
	$('.industryContent').delegate('span','click',function(){
		$('.industryBtn').removeClass('industryBtnOk');
		$(this).find('i').toggleClass('active');
		$('.industryContent i').each(function(){
			if($(this).hasClass('active')){
				$('.industryBtn').addClass('industryBtnOk');
			}
		})
	})
	//	发布线索 行业选择确定
	$('.industryBox').delegate('.industryBtnOk','click',function(){
		var industryArr=[],industryStr='',industryIdArr=[];
		$('.industryContent i').each(function(){
			if($(this).hasClass('active')){
				industryArr.push($(this).parent().text())
				industryIdArr.push($(this).parent().attr('data-id'))
			}
		});
		if(industryArr.length>5){
			$.myToast('最多可以选5个行业');
			return false;
		}
		$('.industryAdd ul,.industryAdd p').text('');
		if(industryArr.length==1){
			$('.industryAdd p').append('<em data-id='+industryIdArr[0]+'>'+industryArr[0]+'<i></i></em>');
		}else{
			$.each(industryArr, function(i,v) {
				industryStr+='<li><em data-id='+industryIdArr[i]+'>'+v+'<i></i></em></li>'
			});
			var industryUl='<ul>'+industryStr+'</ul>';
			$('.industryAdd').append(industryUl);
		}
		$('.industryTanchu').hide();
	})

	//	删除选择的行业
	$('.industryAdd').delegate('em i','click',function(){
		var this_em=$(this).parent('em');
		if($(this).parents('p').length>0){
			this_em.remove();
		}
		$('.industryContent i').each(function(){
			if($(this).parent('span').text()==this_em.text()){
				$(this).parent('span').find('i').removeClass('active');
			}
		})
		$(this).parents('li').remove();
		if($('.industryAdd em').length<1){
			$('.industryContent i').removeClass('active');
			$('.industryBtn').removeClass('industryBtnOk');
			$('.industryAdd ul').remove();
		}
	})

	//	发布线索  项目预算
	$('.selectBudget div').click(function(){
		var this_text=$(this).find('p').text();
		var lists=[],listsId=[];
		$.ajax({
	        url: 'http://yichuanglian.huimor.com/index/getBudget',
	        type:'get',
	        dataType:'json',
	        xhrFields:{
				withCredentials:true
			},
	        success:function(data){
	        	if(isLogin){
		        	var data=data.data;
		        	for(var i=0;i<data.length;i++){
		        		lists.push(data[i].name)
		        		listsId.push(data[i].id)
		        	}
		        	$.actionsheet({
						title:'请选择项目预算',
						active:this_text,
						lists:lists,
						listsId:listsId,
						callback:function(text,id){
							$('.selectBudget div p').text(text)
							$('.selectBudget div p').attr('data-id',id)
						}
					});
		        }
	        }
		});
	})
	// 发布线索  业务类型
	$('.selectBusiness div').click(function(){
		var this_text=$(this).find('p').text();
		var lists=[],listsId=[];
		$.ajax({
	        url: 'http://yichuanglian.huimor.com/index/getBusiness',
	        type:'get',
	        dataType:'json',
	        xhrFields:{
				withCredentials:true
			},
	        success:function(data){
	        	if(isLogin(data)){
        			var data=data.data;
		        	for(var i=0;i<data.length;i++){
		        		lists.push(data[i].name)
		        		listsId.push(data[i].id)
		        	}
		        	$.actionsheet({
						title:'请选择业务类型',
						active:this_text,
						lists:lists,
						listsId:listsId,
						callback:function(text,id){
							$('.selectBusiness div p').text(text)
							$('.selectBusiness div p').attr('data-id',id)
						}
					});
	        	}
	        }
		});
	});

	// 发布线索提交
	$('.release-btn button').click(function(){
		var projectName=$('input[name="projectName"]').val();
		var bus_id=$('.selectBusiness p').attr('data-id');
		var cate_id=[];
		var budget_id=$('.selectBudget p').attr('data-id');
		var proportion=$('input[name="proportion"]').val();
		var describes=$('textarea').val();

		if($('.industryAdd p em').length && $('.industryAdd p em').length<2){
			cate_id.push($('.industryAdd p em').attr('data-id'));
		}else{
			$('dd.industryAdd ul em').each(function(){
				cate_id.push($(this).attr('data-id'))
			})
		}

		if($('dd.industryAdd p').text()=='' && !$('dd.industryAdd ul li').length){
			$.toastTip({
				img:'images/4-3gxfkui.png',
				imgW:'1.56rem',
				imgH:'1.5rem',
				text:['请选择行业']
			});
		} else if(parseFloat(proportion)<0){
			$.toastTip({
				img:'images/4-3gxfkui.png',
				imgW:'1.56rem',
				imgH:'1.5rem',
				text:['期望提成比例不能为负数']
			});
		}else if (parseFloat(proportion)>=100){
			$.toastTip({
				img:'images/4-3gxfkui.png',
				imgW:'1.56rem',
				imgH:'1.5rem',
				text:['期望提成比例不能大于等于100的数据']
			});
		}else{
			$.ajax({
		        url: 'http://yichuanglian.huimor.com/index/release',
		        type:'post',
		        data:{
		        	projectname:projectName,
		        	bus_id:bus_id,
		        	cate_id:cate_id,
		        	budget_id:budget_id,
		        	proportion:proportion,
		        	describes:describes,
		        },
		        dataType:'json',
		        xhrFields:{
					withCredentials:true
				},
		        success:function(data){
		        	if(isLogin(data)){
		        		window.location.href='successRelease.html?adminId='+data.data;
		        	}
		        }
			});
		}
	})


	//	意见反馈提示
	/*
	$.toastTip({
		img:'images/4-3gxfkui.png',
		imgW:'1.56rem',
		imgH:'1.5rem',
		text:['感谢您的反馈！','我们会尽快安排专人与您联系~']
	});

		保存分销信息
	$.toastTip({
		img:'images/3-12bccg.png',
		imgW:'1.52rem',
		imgH:'1.34rem',
		text:['保存成功']
	});

		密码修改成功
	$.toastTip({
		img:'images/4-2xgcgong.png',
		imgW:'1.68rem',
		imgH:'1.49rem',
		text:['修改成功']
	});
	*/


    //完善个人信息 选择职业类型
	$('.selectProfession div').click(function(){
		var this_text=$(this).find('p').text();
		var lists=[],listsId=[];
		$.ajax({
	        url: 'http://yichuanglian.huimor.com/index/occategory',
	        type:'get',
	        dataType:'json',
	        xhrFields:{
				withCredentials:true
			},
	        success:function(data){
	        	if(isLogin(data)){
        			var data=data.data;
		        	for(var i=0;i<data.length;i++){
		        		lists.push(data[i].name)
		        		listsId.push(data[i].id)
		        	}
		        	$.actionsheet({
						title:'请选择职业类型',
						active:this_text,
						lists:lists,
						listsId:listsId,
						callback:function(text,id){
							$('.selectProfession div p').text(text)
							$('.selectProfession div p').attr('data-id',id)
						}
					});
	           	}
	        }
		});
	})

	//完善资料
	$('.perfect-btn button').click(function(){
		var name=$('input[name="name"]').val();
		var company=$('input[name="company"]').val();
		var occupation=$('.selectProfession p').attr('data-id');
		var agreement=0;
		if($('.selectProfession p').text()=='请选择职业类型'){
			$.toastTip({
				img:'images/4-3gxfkui.png',
				imgW:'1.56rem',
				imgH:'1.5rem',
				text:['请选择职业类型']
			});
			return false;
		}
		if($('.agreeContract i').hasClass('active')){
			agreement=1;
		}else{
			$.toastTip({
				img:'images/4-3gxfkui.png',
				imgW:'1.56rem',
				imgH:'1.5rem',
				text:['请阅读并同意签约《线上合同》']
			});
			return false;
		}
		$.ajax({
	        url: 'http://yichuanglian.huimor.com/index/perfectPerson',
	        type:'post',
	        data:{
	            username:name,
	            company:company,
	            occupationtype:occupation,
	            agreement:agreement
	        },
	        dataType:'json',
	        xhrFields:{
				withCredentials:true
			},
	        success:function(data){
	            if(isLogin(data)){
	            	window.location.href='successEnter.html'
	            }
	        }
	    });
    });

});
