this.wp=this.wp||{},this.wp.annotations=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=417)}({1:function(t,n){!function(){t.exports=this.wp.i18n}()},14:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(41);function o(t,n){if(null==t)return{};var e,o,a=Object(r.a)(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}},17:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(27);var o=e(35),a=e(29);function i(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},192:function(t,n,e){"use strict";var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),o=new Uint8Array(16);function a(){if(!r)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}for(var i=[],u=0;u<256;++u)i[u]=(u+256).toString(16).substr(1);var c=function(t,n){var e=n||0,r=i;return[r[t[e++]],r[t[e++]],r[t[e++]],r[t[e++]],"-",r[t[e++]],r[t[e++]],"-",r[t[e++]],r[t[e++]],"-",r[t[e++]],r[t[e++]],"-",r[t[e++]],r[t[e++]],r[t[e++]],r[t[e++]],r[t[e++]],r[t[e++]]].join("")};n.a=function(t,n,e){var r=n&&e||0;"string"==typeof t&&(n="binary"===t?new Array(16):null,t=null);var o=(t=t||{}).random||(t.rng||a)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,n)for(var i=0;i<16;++i)n[r+i]=o[i];return n||c(o)}},2:function(t,n){!function(){t.exports=this.lodash}()},26:function(t,n){!function(){t.exports=this.wp.richText}()},27:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.d(n,"a",(function(){return r}))},29:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(27);function o(t,n){if(t){if("string"==typeof t)return Object(r.a)(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(r.a)(t,n):void 0}}},32:function(t,n){!function(){t.exports=this.wp.hooks}()},35:function(t,n,e){"use strict";function r(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}e.d(n,"a",(function(){return r}))},4:function(t,n){!function(){t.exports=this.wp.data}()},41:function(t,n,e){"use strict";function r(t,n){if(null==t)return{};var e,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}e.d(n,"a",(function(){return r}))},417:function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"__experimentalGetAnnotationsForBlock",(function(){return m})),e.d(r,"__experimentalGetAllAnnotationsForBlock",(function(){return g})),e.d(r,"__experimentalGetAnnotationsForRichText",(function(){return h})),e.d(r,"__experimentalGetAnnotations",(function(){return j}));var o={};e.r(o),e.d(o,"__experimentalAddAnnotation",(function(){return x})),e.d(o,"__experimentalRemoveAnnotation",(function(){return _})),e.d(o,"__experimentalUpdateAnnotationRange",(function(){return w})),e.d(o,"__experimentalRemoveAnnotationsBySource",(function(){return N}));var a=e(4),i=e(17),u=e(5),c=e(2);function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){Object(u.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){var e=t.filter(n);return t.length===e.length?t:e}function d(t){return Object(c.isNumber)(t.start)&&Object(c.isNumber)(t.end)&&t.start<=t.end}var p=function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ANNOTATION_ADD":var r=e.blockClientId,o={id:e.id,blockClientId:r,richTextIdentifier:e.richTextIdentifier,source:e.source,selector:e.selector,range:e.range};if("range"===o.selector&&!d(o.range))return n;var a=null!==(t=null==n?void 0:n[r])&&void 0!==t?t:[];return f({},n,Object(u.a)({},r,[].concat(Object(i.a)(a),[o])));case"ANNOTATION_REMOVE":return Object(c.mapValues)(n,(function(t){return s(t,(function(t){return t.id!==e.annotationId}))}));case"ANNOTATION_UPDATE_RANGE":return Object(c.mapValues)(n,(function(t){var n=!1,r=t.map((function(t){return t.id===e.annotationId?(n=!0,f({},t,{range:{start:e.start,end:e.end}})):t}));return n?r:t}));case"ANNOTATION_REMOVE_SOURCE":return Object(c.mapValues)(n,(function(t){return s(t,(function(t){return t.source!==e.source}))}))}return n},v=e(14),b=e(44);function O(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}var y=[],m=Object(b.a)((function(t,n){var e;return(null!==(e=null==t?void 0:t[n])&&void 0!==e?e:[]).filter((function(t){return"block"===t.selector}))}),(function(t,n){var e;return[null!==(e=null==t?void 0:t[n])&&void 0!==e?e:y]}));function g(t,n){var e;return null!==(e=null==t?void 0:t[n])&&void 0!==e?e:y}var h=Object(b.a)((function(t,n,e){var r;return(null!==(r=null==t?void 0:t[n])&&void 0!==r?r:[]).filter((function(t){return"range"===t.selector&&e===t.richTextIdentifier})).map((function(t){return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?O(Object(e),!0).forEach((function(n){Object(u.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):O(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},t.range,{},Object(v.a)(t,["range"]))}))}),(function(t,n){var e;return[null!==(e=null==t?void 0:t[n])&&void 0!==e?e:y]}));function j(t){return Object(c.flatMap)(t,(function(t){return t}))}var A=e(192);function x(t){var n=t.blockClientId,e=t.richTextIdentifier,r=void 0===e?null:e,o=t.range,a=void 0===o?null:o,i=t.selector,u=void 0===i?"range":i,c=t.source,l=void 0===c?"default":c,f=t.id,s={type:"ANNOTATION_ADD",id:void 0===f?Object(A.a)():f,blockClientId:n,richTextIdentifier:r,source:l,selector:u};return"range"===u&&(s.range=a),s}function _(t){return{type:"ANNOTATION_REMOVE",annotationId:t}}function w(t,n,e){return{type:"ANNOTATION_UPDATE_RANGE",annotationId:t,start:n,end:e}}function N(t){return{type:"ANNOTATION_REMOVE_SOURCE",source:t}}Object(a.registerStore)("core/annotations",{reducer:p,selectors:r,actions:o});var T=e(26),P=e(1);var E={name:"core/annotation",title:Object(P.__)("Annotation"),tagName:"mark",className:"annotation-text",attributes:{className:"class",id:"id"},edit:function(){return null},__experimentalGetPropsForEditableTreePreparation:function(t,n){var e=n.richTextIdentifier,r=n.blockClientId;return{annotations:t("core/annotations").__experimentalGetAnnotationsForRichText(r,e)}},__experimentalCreatePrepareEditableTree:function(t){var n=t.annotations;return function(t,e){if(0===n.length)return t;var r={formats:t,text:e};return(r=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.forEach((function(n){var e=n.start,r=n.end;e>t.text.length&&(e=t.text.length),r>t.text.length&&(r=t.text.length);var o="annotation-text-"+n.source,a="annotation-text-"+n.id;t=Object(T.applyFormat)(t,{type:"core/annotation",attributes:{className:o,id:a}},e,r)})),t}(r,n)).formats}},__experimentalGetPropsForEditableTreeChangeHandler:function(t){return{removeAnnotation:t("core/annotations").__experimentalRemoveAnnotation,updateAnnotationRange:t("core/annotations").__experimentalUpdateAnnotationRange}},__experimentalCreateOnChangeEditableValue:function(t){return function(n){var e=function(t){var n={};return t.forEach((function(t,e){(t=(t=t||[]).filter((function(t){return"core/annotation"===t.type}))).forEach((function(t){var r=t.attributes.id;r=r.replace("annotation-text-",""),n.hasOwnProperty(r)||(n[r]={start:e}),n[r].end=e+1}))})),n}(n),r=t.removeAnnotation,o=t.updateAnnotationRange;!function(t,n,e){var r=e.removeAnnotation,o=e.updateAnnotationRange;t.forEach((function(t){var e=n[t.id];if(e){var a=t.start,i=t.end;a===e.start&&i===e.end||o(t.id,e.start,e.end)}else r(t.id)}))}(t.annotations,e,{removeAnnotation:r,updateAnnotationRange:o})}}},I=E.name,R=Object(v.a)(E,["name"]);Object(T.registerFormatType)(I,R);var S=e(32);Object(S.addFilter)("editor.BlockListBlock","core/annotations",(function(t){return Object(a.withSelect)((function(t,n){var e=n.clientId,r=n.className;return{className:t("core/annotations").__experimentalGetAnnotationsForBlock(e).map((function(t){return"is-annotated-by-"+t.source})).concat(r).filter(Boolean).join(" ")}}))(t)}))},44:function(t,n,e){"use strict";var r,o;function a(t){return[t]}function i(){var t={clear:function(){t.head=null}};return t}function u(t,n,e){var r;if(t.length!==n.length)return!1;for(r=e;r<t.length;r++)if(t[r]!==n[r])return!1;return!0}r={},o="undefined"!=typeof WeakMap,n.a=function(t,n){var e,c;function l(){e=o?new WeakMap:i()}function f(){var e,r,o,a,i,l=arguments.length;for(a=new Array(l),o=0;o<l;o++)a[o]=arguments[o];for(i=n.apply(null,a),(e=c(i)).isUniqueByDependants||(e.lastDependants&&!u(i,e.lastDependants,0)&&e.clear(),e.lastDependants=i),r=e.head;r;){if(u(r.args,a,1))return r!==e.head&&(r.prev.next=r.next,r.next&&(r.next.prev=r.prev),r.next=e.head,r.prev=null,e.head.prev=r,e.head=r),r.val;r=r.next}return r={val:t.apply(null,a)},a[0]=null,r.args=a,e.head&&(e.head.prev=r,r.next=e.head),e.head=r,r.val}return n||(n=a),c=o?function(t){var n,o,a,u,c,l=e,f=!0;for(n=0;n<t.length;n++){if(o=t[n],!(c=o)||"object"!=typeof c){f=!1;break}l.has(o)?l=l.get(o):(a=new WeakMap,l.set(o,a),l=a)}return l.has(r)||((u=i()).isUniqueByDependants=f,l.set(r,u)),l.get(r)}:function(){return e},f.getDependants=n,f.clear=l,l(),f}},5:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return r}))}});