!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("doiuse"),require("postcss"),require("postcss-less")):"function"==typeof define&&define.amd?define([,,],n):"object"==typeof exports?exports["@browser-scan/scanner"]=n(require("doiuse"),require("postcss"),require("postcss-less")):e["@browser-scan/scanner"]=n(e.doiuse,e.postcss,e["postcss-less"])}(this,((e,n,s)=>(()=>{"use strict";var t={992:function(e,n,s){var t=this&&this.__awaiter||function(e,n,s,t){return new(s||(s=Promise))((function(r,o){function i(e){try{a(t.next(e))}catch(e){o(e)}}function c(e){try{a(t.throw(e))}catch(e){o(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof s?n:new s((function(e){e(n)}))).then(i,c)}a((t=t.apply(e,n||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.scanFile=void 0;const o=r(s(338)),i=r(s(236)),c=s(746),a=r(s(731)),u=s(147);n.scanFile=({params:e,done:n,error:s})=>t(void 0,void 0,void 0,(function*(){try{const{file:t,browser:r,version:l}=e,d={from:void 0},f={[t]:[]},p=(0,u.readFileSync)(t),h=[(0,o.default)({browsers:[`${r} ${l}`],ignore:["rem"],onFeatureUsage:function(e){const n=(0,c.parse_result)(e.message);f[t].push(n)}})];t.endsWith(".less")&&(d.syntax=a.default),yield(0,i.default)(h).process(p.toString(),d).catch((e=>{console.log(e),s("error occured while parsing =>"+t+"=> this file will be discarded")})),n({scanned_result:f})}catch(e){s(e)}}))},537:function(e,n,s){var t=this&&this.__awaiter||function(e,n,s,t){return new(s||(s=Promise))((function(r,o){function i(e){try{a(t.next(e))}catch(e){o(e)}}function c(e){try{a(t.throw(e))}catch(e){o(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof s?n:new s((function(e){e(n)}))).then(i,c)}a((t=t.apply(e,n||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.scanFilesInChunks=void 0;const o=s(17),i=s(147),c=r(s(338)),a=s(746),u=r(s(236)),l=r(s(731)),d=(e,n,s)=>t(void 0,void 0,void 0,(function*(){let t=yield i.promises.readdir(e,{withFileTypes:!0});for(const r of t){const t=(0,o.join)(e,r.name);r.name.match(/node_modules/)||r.name.match(/git/)||(r.isDirectory()&&(yield d(t,n,s)),(r.isFile()&&r.name.endsWith(".css")||r.name.endsWith(".scss")||r.name.endsWith(".less"))&&n.push(s(t)))}return n}));n.scanFilesInChunks=({params:e,stream:n,done:s,error:r})=>t(void 0,void 0,void 0,(function*(){try{const t={},{browser:o,version:f,path:p}=e;console.info("Scanning files...");const h=e=>new Promise((s=>{t[e]||(t[e]=[]);const d=[(0,c.default)({browsers:[`${o} ${f}`],ignore:["rem"],onFeatureUsage:function(n){const s=(0,a.parse_result)(n.message);t[e].push(s)}})];(0,i.readFile)(e,((o,i)=>{o&&(r(o),s(e));const c={from:void 0};e.endsWith("less")&&(c.syntax=l.default),(0,u.default)(d).process(i.toString(),c).catch((()=>{r("error occured while parsing =>"+e+"=> this file will be discarded"),s(e)})).then((()=>{t[e].length&&n({[e]:t[e]}),s(e)}))}))})),v=yield d(p,[],h);yield Promise.all(v),console.info("Scanning Complete"),s({scanned_result:t})}catch(e){r(e)}}))},746:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.parse_result=void 0,n.parse_result=e=>{const[n,s,t,...r]=e.split(":");return[`${s}:${t}`,r.join("")]}},147:e=>{e.exports=require("fs")},17:e=>{e.exports=require("path")},338:n=>{n.exports=e},236:e=>{e.exports=n},731:e=>{e.exports=s}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var s=r[e]={exports:{}};return t[e].call(s.exports,s,s.exports,o),s.exports}var i={};return(()=>{var e=i;Object.defineProperty(e,"__esModule",{value:!0}),e.scanFile=e.scanFilesInChunks=void 0;var n=o(537);Object.defineProperty(e,"scanFilesInChunks",{enumerable:!0,get:function(){return n.scanFilesInChunks}});var s=o(992);Object.defineProperty(e,"scanFile",{enumerable:!0,get:function(){return s.scanFile}})})(),i})()));
//# sourceMappingURL=index.js.map