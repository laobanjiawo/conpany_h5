"use strict";var precacheConfig=[["index.html","adb42fda748797fdd6e963eabf1d4eb5"],["service-worker.js","e110a5885347e1e2e8d1c05214a7a10a"],["static/cb.js","6722a16cbe0d1d26b9d849cdff2f2397"],["static/js/0.6349bf9bc04c468de15e.js","f3bb19b8de1dac00d214a11c41ffb0b2"],["static/js/1.1bd0221be8c9d6eff37b.js","95b1dc6fd416d44453797c6b0b497eff"],["static/js/2.c7acd7d820a4da18fd08.js","801a4429a067671a9a1c95c8cdf278b0"],["static/js/3.c7b496843b9751275c6f.js","53e805e1ed1251da807990829788b6a4"],["static/js/4.3b8beb8ea7cf417d938e.js","138c15a5f1acf765a9a3b135a22832ba"],["static/js/5.29aee9ea6b346a593b48.js","52db9a55b6ffbe8fadae2406e3032234"],["static/js/app.e878ffce7d7ec30f889a.js","0006820dda3c0f3f43fc40c1b67bdf7f"],["static/js/manifest.b7c676d9548100235593.js","27e01ead285421fa907fff9a344093af"],["static/r1.html","69bab935b3edada4ae700b41c060885d"],["static/register.html","c694aa495a8b02840543ffdc71a9b7c3"]],cacheName="sw-precache-v3-vue.xy.h5.pwa-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,!1);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});