if(!self.define){let e,n={};const t=(t,s)=>(t=new URL(t+".js",s).href,n[t]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=n,document.head.appendChild(e)}else e=t,importScripts(t),n()})).then((()=>{let e=n[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(s,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let r={};const l=e=>t(e,o),d={module:{uri:o},exports:r,require:l};n[o]=Promise.all(s.map((e=>d[e]||l(e)))).then((e=>(i(...e),r)))}}define(["./workbox-11f2fe4b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"bundle.402d478bbca6d0bc0822.js",revision:null},{url:"index.html",revision:"dd6a82fa797d53af88240fecf063ecd9"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute(/.*.(html|css|js|json|png)/,new e.StaleWhileRevalidate,"GET")}));
