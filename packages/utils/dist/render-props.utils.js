!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(n.renderPropsUtils={})}(this,function(n){"use strict";function e(n){for(var e=arguments.length,t=Array(e>1?e-1:0),o=1;e>o;o++)t[o-1]=arguments[o];return"function"==typeof n?n.apply(void 0,t):void 0}function t(){}var o=window&&window.performance?window.performance:Date,r=(window.cancelAnimationFrame||window.mozCancelAnimationFrame).bind(window),i=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame).bind(window);function a(n){return n}function u(n,e,t){return n+(e-n)*t}function f(n,e,t){var o;if("object"==typeof n)for(var r in o=Array.isArray(n)?[]:{},n)o[r]=u(n[r],e[r],t);else o=u(n,e,t);return o}n.bound=function(n){var o=n.value,r=n.lower,i=n.upper,a=n.outOfUpper,u=n.outOfLower,f=n.inBounds,c=n.cast,w=void 0===c?parseInt:c;return o=w(o),r=w(r),i=w(i),f=f||t,isNaN(o)?f():!isNaN(i)&&o>i?e(a):!isNaN(r)&&r>o?e(u):f()},n.callIfExists=e,n.interpolate=function(n,e){var t=e.from,r=void 0===t?0:t,u=e.to,c=void 0===u?1:u,w=e.duration,l=void 0===w?240:w,d=e.timing,s=void 0===d?a:d,v=o.now(),m=v+l;!function e(){var t=1-(m-o.now())/(m-v),a=s(t);t>1?n(f(r,c,a>1?1:a)):(i(e),n(f(r,c,a)))}()},n.perf=o,n.requestAnimationFrame=i,n.requestInterval=function(n,e){if(!i)return window.setInterval(n,e);var t=o.now(),r={};return r.value=i(function a(){var u=o.now();e>u-t||(n.call(),t=o.now()),r.value=i(a)}),r},n.requestTimeout=function(n,e){if(!i)return window.setTimeout(n,e);var t=o.now(),r={};return r.value=i(function a(){var u=o.now();e>u-t?r.value=i(a):n.call()}),r},n.strictShallowEqual=function(n,e){var t=Object.keys(n);if(t.length!==Object.keys(e).length)return!1;for(var o=0;t.length>o;o++){var r=t[o];if(n[r]!==e[r])return!1}return!0},n.cancelAnimationFrame=r,n.clearRequestInterval=function(n){r?r(n.value):window.clearInterval(n)},n.clearRequestTimeout=function(n){r?r(n.value):window.clearTimeout(n)},Object.defineProperty(n,"__esModule",{value:!0})});
