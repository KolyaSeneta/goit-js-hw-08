!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}function n(e){var t=localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}}var r={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,m=d||s||Function("return this")(),v=Object.prototype.toString,g=Math.max,b=Math.min,p=function(){return m.Date.now()};function y(e,t,n){var r,o,a,u,f,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function v(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function y(e){return l=e,f=setTimeout(h,t),d?v(e):u}function j(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function h(){var e=p();if(j(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return s?b(n,a-(e-l)):n}(e))}function w(e){return f=void 0,m&&r?v(e):(r=o=void 0,u)}function N(){var e=p(),n=j(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return y(c);if(s)return f=setTimeout(h,t),v(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=O(t)||0,S(n)&&(d=!!n.leading,a=(s="maxWait"in n)?g(O(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),N.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},N.flush=function(){return void 0===f?u:w(p())},N}function S(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(S(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=S(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var r=f.test(e);return r||c.test(e)?l(e.slice(2),r?2:8):u.test(e)?NaN:+e}r=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return S(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var j=JSON.parse(localStorage.getItem("feedback-form-state")),h=document.querySelector(".feedback-form"),w=document.querySelector("input[name=email]"),N=document.querySelector(".feedback-form textarea");h.addEventListener("input",r((function(e){T[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500));var T={};h.addEventListener("input",(function(e){var t,r,o,i=n("feedback-form-state")||{};i[e.target.name]=e.target.value,t="feedback-form-state",r=i,o=JSON.stringify(r),localStorage.setItem(t,o)})),h.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),h.reset()})),j&&(w.value=j.email,N.value=j.message)}();
//# sourceMappingURL=03-feedback.57ce0e58.js.map
