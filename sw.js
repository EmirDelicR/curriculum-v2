if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const o=e=>s(e,n),b={module:{uri:n},exports:r,require:o};i[n]=Promise.all(a.map((e=>b[e]||o(e)))).then((e=>(c(...e),r)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/AnimatedText-df9051b3.js",revision:null},{url:"assets/AnimatedText-edb5c94a.css",revision:null},{url:"assets/Button-4a99699a.js",revision:null},{url:"assets/Button-e6e70d5a.css",revision:null},{url:"assets/Certificates-4a962a65.js",revision:null},{url:"assets/Certificates-9912f2ee.css",revision:null},{url:"assets/Close-24ac4610.js",revision:null},{url:"assets/Close-4da80220.css",revision:null},{url:"assets/Contact-b1f08433.css",revision:null},{url:"assets/Contact-ea8b07ae.js",revision:null},{url:"assets/GeneralLink-47eefb83.css",revision:null},{url:"assets/GeneralLink-59cc1470.js",revision:null},{url:"assets/Home-b95d1ee3.css",revision:null},{url:"assets/Home-f06a6fae.js",revision:null},{url:"assets/index-334d9b6d.css",revision:null},{url:"assets/index-428fcb1c.js",revision:null},{url:"assets/Portfolio-01c1cbf3.js",revision:null},{url:"assets/Portfolio-55d5ea13.css",revision:null},{url:"assets/Skills-7c6a1653.css",revision:null},{url:"assets/Skills-a45dd6dc.js",revision:null},{url:"assets/Tabs-26b53319.css",revision:null},{url:"assets/Tabs-909a1ef8.js",revision:null},{url:"assets/Timeline-7562921b.js",revision:null},{url:"assets/Timeline-c19aabf6.css",revision:null},{url:"assets/Tips-8de5bb07.css",revision:null},{url:"assets/Tips-fa8142de.js",revision:null},{url:"doc/CV.pdf",revision:"e51bc6068cf87506d27588ddc2152ab7"},{url:"favicon-16x16.png",revision:"aa838bdcda0f909368c28173a70854b3"},{url:"favicon-32x32.png",revision:"d0e8f755b6b26e39981733fe5124e75a"},{url:"favicon-96x96.png",revision:"98631c41795070dfaf918c8481638215"},{url:"favicon.ico",revision:"2b20dcc1969c822b3fb50351507dadba"},{url:"images/assets/certificates/FCC.webp",revision:"a62566da45983edf0c6825fc50b29ea1"},{url:"images/assets/certificates/JS.webp",revision:"b8dc8bc82b81e9a3a970be8248d8995e"},{url:"images/assets/certificates/Node.webp",revision:"1e84605e18f7936d7d30b4afeb03880a"},{url:"images/assets/certificates/PWA.webp",revision:"16350c44627552fbd2b27273b3582aeb"},{url:"images/assets/certificates/Python.webp",revision:"0ee3cb3f07ebe442360fd714ad0457e3"},{url:"images/assets/certificates/Python2.webp",revision:"276db60f9ef6b8b69c0d7994b6762e2b"},{url:"images/assets/certificates/React.webp",revision:"ab431adffed1d0fc13166ed7577bf53a"},{url:"images/assets/certificates/TS.webp",revision:"404cbb4727bf0595423598387c528a63"},{url:"images/assets/certificates/Vue.webp",revision:"d1f33aa5830a58cc88ea92c1d997d726"},{url:"images/assets/certificates/Vue2.webp",revision:"2a139b298f28bf80ffd69ccf35a057a9"},{url:"images/assets/me.webp",revision:"079c39ab12ead3bd4fac33993a233a7b"},{url:"images/assets/projects/bitmovin.webp",revision:"4bd5a5ee813aa15a4975df48f77f8f1e"},{url:"images/assets/projects/cv.webp",revision:"ce22e3f6754ec9fc36476d8534f1f196"},{url:"images/assets/projects/douglas.webp",revision:"2887bdd509270f14a99684d99cc19969"},{url:"images/assets/projects/has-to-be.webp",revision:"be12c690aabf2c4c5289e02024d3456a"},{url:"images/assets/projects/vite.webp",revision:"269d9504b7bbe914fba114dd0542cc31"},{url:"images/assets/projects/x-net.webp",revision:"142d3ee49af7fe958b9837ac04b033cb"},{url:"images/icons/android-icon-144x144.png",revision:"a98c2d3d87a58ab9552ede1f92585282"},{url:"images/icons/android-icon-192x192.png",revision:"a91c50ce72ad16c61699081c4e8d5f44"},{url:"images/icons/android-icon-36x36.png",revision:"914f768e9a325126a5a1545ba12a746b"},{url:"images/icons/android-icon-48x48.png",revision:"41afbedb22aaafab1e956d1c39be1c49"},{url:"images/icons/android-icon-72x72.png",revision:"57867193415c717225c0884cf34eb4f5"},{url:"images/icons/android-icon-96x96.png",revision:"d8e377c4eaf87b6f0a636d1e13eea85c"},{url:"images/icons/apple-icon-114x114.png",revision:"3c704ca9f838502fe64536eee0d02a4b"},{url:"images/icons/apple-icon-120x120.png",revision:"8a5be130d6e988a5962de890158e85d8"},{url:"images/icons/apple-icon-144x144.png",revision:"a98c2d3d87a58ab9552ede1f92585282"},{url:"images/icons/apple-icon-152x152.png",revision:"163287773c5e62852258aff75aeabca2"},{url:"images/icons/apple-icon-180x180.png",revision:"c7925c286e7b4704018e3c00a8b7c01d"},{url:"images/icons/apple-icon-57x57.png",revision:"4464bc74051c37dbcc2ab64c4dbe1c07"},{url:"images/icons/apple-icon-60x60.png",revision:"8d17e03d51ada896047314d8079bc82c"},{url:"images/icons/apple-icon-72x72.png",revision:"57867193415c717225c0884cf34eb4f5"},{url:"images/icons/apple-icon-76x76.png",revision:"9390ec360b577d231bc734209f5d0060"},{url:"images/icons/apple-icon-precomposed.png",revision:"9d5fd44383f668065a7a10b9fa6d56e3"},{url:"images/icons/apple-icon.png",revision:"9d5fd44383f668065a7a10b9fa6d56e3"},{url:"images/icons/icon-128x128.png",revision:"83a0c5b4bded75695db6dbd2905d9bf5"},{url:"images/icons/icon-144x144.png",revision:"c3c26a65739f64e5b362130d1a146ec4"},{url:"images/icons/icon-152x152.png",revision:"20adb8f98ef73a5055b9359b953b36ca"},{url:"images/icons/icon-192x192.png",revision:"b9c5aff2c493b9208f24504c255cbcbf"},{url:"images/icons/icon-384x384.png",revision:"accba976a7a4c3ff7799d9b5058d1f4a"},{url:"images/icons/icon-512x512.png",revision:"f2050faa75b22a3ffafa5505a508f69f"},{url:"images/icons/icon-72x72.png",revision:"6895ac9075591e9648b7b692bf201035"},{url:"images/icons/icon-96x96.png",revision:"0cf266400b547e9d33fe2642b271c2eb"},{url:"images/icons/ms-icon-144x144.png",revision:"a98c2d3d87a58ab9552ede1f92585282"},{url:"images/icons/ms-icon-150x150.png",revision:"548961de81354dd2b9fed77f925f9648"},{url:"images/icons/ms-icon-310x310.png",revision:"1dc413b47df71e8e0f348f0afb4ded00"},{url:"images/icons/ms-icon-70x70.png",revision:"d81f7770bbd70ebf3c9f7c2846f57d9a"},{url:"index.html",revision:"a12b2d92869ca4847f3ee1470339078f"},{url:"manifest.webmanifest",revision:"b07c8342e9aa5e2fc8a76a6dadccea73"},{url:"registerSW.js",revision:"453f2e8a363247b6f1be9cddf739d18d"},{url:"robots.txt",revision:"50d8a018e8ae96732c8a2ba663c61d4e"},{url:"images/icons/icon-72x72.png",revision:"6895ac9075591e9648b7b692bf201035"},{url:"images/icons/icon-96x96.png",revision:"0cf266400b547e9d33fe2642b271c2eb"},{url:"images/icons/icon-128x128.png",revision:"83a0c5b4bded75695db6dbd2905d9bf5"},{url:"favicon-16x16.png",revision:"aa838bdcda0f909368c28173a70854b3"},{url:"favicon-32x32.png",revision:"d0e8f755b6b26e39981733fe5124e75a"},{url:"favicon-96x96.png",revision:"98631c41795070dfaf918c8481638215"},{url:"favicon.ico",revision:"2b20dcc1969c822b3fb50351507dadba"},{url:"robots.txt",revision:"50d8a018e8ae96732c8a2ba663c61d4e"},{url:"doc/CV.pdf",revision:"e51bc6068cf87506d27588ddc2152ab7"},{url:"images/assets/me.webp",revision:"079c39ab12ead3bd4fac33993a233a7b"},{url:"images/icons/android-icon-144x144.png",revision:"a98c2d3d87a58ab9552ede1f92585282"},{url:"images/icons/android-icon-192x192.png",revision:"a91c50ce72ad16c61699081c4e8d5f44"},{url:"images/icons/android-icon-36x36.png",revision:"914f768e9a325126a5a1545ba12a746b"},{url:"images/icons/android-icon-48x48.png",revision:"41afbedb22aaafab1e956d1c39be1c49"},{url:"images/icons/android-icon-72x72.png",revision:"57867193415c717225c0884cf34eb4f5"},{url:"images/icons/android-icon-96x96.png",revision:"d8e377c4eaf87b6f0a636d1e13eea85c"},{url:"images/icons/apple-icon-114x114.png",revision:"3c704ca9f838502fe64536eee0d02a4b"},{url:"images/icons/apple-icon-120x120.png",revision:"8a5be130d6e988a5962de890158e85d8"},{url:"images/icons/apple-icon-144x144.png",revision:"a98c2d3d87a58ab9552ede1f92585282"},{url:"images/icons/apple-icon-152x152.png",revision:"163287773c5e62852258aff75aeabca2"},{url:"images/icons/apple-icon-180x180.png",revision:"c7925c286e7b4704018e3c00a8b7c01d"},{url:"images/icons/apple-icon-57x57.png",revision:"4464bc74051c37dbcc2ab64c4dbe1c07"},{url:"images/icons/apple-icon-60x60.png",revision:"8d17e03d51ada896047314d8079bc82c"},{url:"images/icons/apple-icon-72x72.png",revision:"57867193415c717225c0884cf34eb4f5"},{url:"images/icons/apple-icon-76x76.png",revision:"9390ec360b577d231bc734209f5d0060"},{url:"images/icons/apple-icon-precomposed.png",revision:"9d5fd44383f668065a7a10b9fa6d56e3"},{url:"images/icons/apple-icon.png",revision:"9d5fd44383f668065a7a10b9fa6d56e3"},{url:"images/icons/icon-144x144.png",revision:"c3c26a65739f64e5b362130d1a146ec4"},{url:"images/icons/icon-152x152.png",revision:"20adb8f98ef73a5055b9359b953b36ca"},{url:"images/icons/icon-192x192.png",revision:"b9c5aff2c493b9208f24504c255cbcbf"},{url:"images/icons/icon-384x384.png",revision:"accba976a7a4c3ff7799d9b5058d1f4a"},{url:"images/icons/icon-512x512.png",revision:"f2050faa75b22a3ffafa5505a508f69f"},{url:"images/icons/ms-icon-144x144.png",revision:"a98c2d3d87a58ab9552ede1f92585282"},{url:"images/icons/ms-icon-150x150.png",revision:"548961de81354dd2b9fed77f925f9648"},{url:"images/icons/ms-icon-310x310.png",revision:"1dc413b47df71e8e0f348f0afb4ded00"},{url:"images/icons/ms-icon-70x70.png",revision:"d81f7770bbd70ebf3c9f7c2846f57d9a"},{url:"images/assets/certificates/FCC.webp",revision:"a62566da45983edf0c6825fc50b29ea1"},{url:"images/assets/certificates/JS.webp",revision:"b8dc8bc82b81e9a3a970be8248d8995e"},{url:"images/assets/certificates/Node.webp",revision:"1e84605e18f7936d7d30b4afeb03880a"},{url:"images/assets/certificates/PWA.webp",revision:"16350c44627552fbd2b27273b3582aeb"},{url:"images/assets/certificates/Python.webp",revision:"0ee3cb3f07ebe442360fd714ad0457e3"},{url:"images/assets/certificates/Python2.webp",revision:"276db60f9ef6b8b69c0d7994b6762e2b"},{url:"images/assets/certificates/React.webp",revision:"ab431adffed1d0fc13166ed7577bf53a"},{url:"images/assets/certificates/TS.webp",revision:"404cbb4727bf0595423598387c528a63"},{url:"images/assets/certificates/Vue.webp",revision:"d1f33aa5830a58cc88ea92c1d997d726"},{url:"images/assets/certificates/Vue2.webp",revision:"2a139b298f28bf80ffd69ccf35a057a9"},{url:"images/assets/projects/bitmovin.webp",revision:"4bd5a5ee813aa15a4975df48f77f8f1e"},{url:"images/assets/projects/cv.webp",revision:"ce22e3f6754ec9fc36476d8534f1f196"},{url:"images/assets/projects/douglas.webp",revision:"2887bdd509270f14a99684d99cc19969"},{url:"images/assets/projects/has-to-be.webp",revision:"be12c690aabf2c4c5289e02024d3456a"},{url:"images/assets/projects/vite.webp",revision:"269d9504b7bbe914fba114dd0542cc31"},{url:"images/assets/projects/x-net.webp",revision:"142d3ee49af7fe958b9837ac04b033cb"},{url:"manifest.webmanifest",revision:"b07c8342e9aa5e2fc8a76a6dadccea73"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
