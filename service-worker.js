"use strict";var precacheConfig=[["/index.html","d45540a293c012da3a1f426956787a2c"],["/static/css/main.4fb10b54.css","2442e6ae77b2852d7cd683c9672e9bf4"],["/static/js/main.c31e01f0.js","bb341d4a5f6fd5f13a867cf0a0a090e6"],["/static/media/arrow-dark-hover.0eb0d958.svg","0eb0d95895082a387a0bbb8c198ead0a"],["/static/media/arrow-dark.3290328d.svg","3290328d41d6dc0d13242e01b3e5525e"],["/static/media/arrow-hover.b85b7cfa.svg","b85b7cfacedbf5d1b9047fbe996bc476"],["/static/media/arrow.b35cffe2.svg","b35cffe20c22d64d598856a300b5fea4"],["/static/media/close-hover.74199273.svg","741992739a7d2b4cb80050731081c11b"],["/static/media/close.f40943b8.svg","f40943b870536a4530e35510e3a12eb2"],["/static/media/email-dark-hover.35e72913.svg","35e729133cf34a6a43f841093b1237d7"],["/static/media/email-dark.a911be6a.svg","a911be6a7ca55a97d33fa8df88fcdd55"],["/static/media/email-hover.21c5392b.svg","21c5392b2147870cca9329c20f44b257"],["/static/media/email.d8554d9c.svg","d8554d9c632bba10ccb50b87f9a1f4a9"],["/static/media/github-dark-hover.2e6b9967.svg","2e6b9967570f79ddc91836769034a187"],["/static/media/github-dark.568c7be9.svg","568c7be9086ca6c155e0e6f911397be1"],["/static/media/github-hover.30b5c873.svg","30b5c87360db7f4b5c3bc194488ad49a"],["/static/media/github.f0ed4eb6.svg","f0ed4eb64870a6648aa1d1738bc42079"],["/static/media/linkedIn-dark-hover.4abce8a3.svg","4abce8a3c67907f1f8ca5fe2c99db6a4"],["/static/media/linkedIn-dark.a218abd1.svg","a218abd18e4704a6dab6f7434edd4c39"],["/static/media/linkedIn-hover.3519d805.svg","3519d805ae9a0e3b76ca6f8da65ee2db"],["/static/media/linkedIn.9973a7f0.svg","9973a7f03c5bf507d10dec3d7b83582d"],["/static/media/meteor-defense-start.7a9b526a.png","7a9b526aea2a5fdd2790a7074803d7e3"],["/static/media/moth-glow.b4d670d0.png","b4d670d0944e2eebfbe0129ad04e3289"],["/static/media/moth.c00cb6a0.png","c00cb6a001ba97f29e39ae82c673e48e"],["/static/media/welcome-screen.4b8f65f2.png","4b8f65f2641e5e9c8fe1095e0bad8e0e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});