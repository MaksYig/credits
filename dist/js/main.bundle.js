!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=function(e,t){var n=document.querySelector(e),a=document.querySelector(t),r=document.querySelector(".header__contacts");console.log(a.classList.leght=1),n.addEventListener("click",(function(){a.classList.toggle("active"),n.classList.toggle("active"),a.classList.toggle("animate__animated"),n.classList.contains("active")?(r.classList.remove("animate__animated","animate__fadeInDown"),r.classList.add("animate__animated","animate__fadeOutUp"),document.querySelector("body").style.overflow=""):(r.classList.remove("animate__animated","animate__fadeOutUp"),r.classList.add("animate__animated","animate__fadeInDown"),document.querySelector("body").style.overflow="hidden")}))};window.addEventListener("DOMContentLoaded",(function(){a(".burger__menu",".header__menu")}))}]);
//# sourceMappingURL=main.bundle.js.map