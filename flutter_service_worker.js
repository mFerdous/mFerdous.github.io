'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-maskable-512.png": "3ccaf3f615137edc18c16ab96c5e07fc",
"icons/Icon-maskable-192.png": "71243dd2c35cbedf95f9462d13f3dbc7",
"icons/Icon-512.png": "3ccaf3f615137edc18c16ab96c5e07fc",
"icons/Icon-192.png": "71243dd2c35cbedf95f9462d13f3dbc7",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/assets/pdf/CV_B_M_Ferdous_Mahmud.pdf": "d25cd802cfb47761b6d524c10dfb730a",
"assets/assets/images/face.png": "3e569c0b44e18cf4ac36c2f52ca2c4fc",
"assets/assets/images/ferdous.jpg": "68c18879b3b90de10eff4dafea995216",
"assets/assets/images/share.png": "7d05af750cd03cdda7f247d7dc8b532e",
"assets/assets/images/analytics.png": "610a95aedc2c0c32d1316562dc8ec248",
"assets/assets/images/dcourier_web.png": "cfde4a37abdd3d44a845a535ac1a4a82",
"assets/assets/images/beemabox_web.png": "4069f6738bee2ba4fc2e20cffd56ce20",
"assets/assets/images/coding.png": "af1b456dad3dd6f43f14994963b57316",
"assets/assets/images/acas.webp": "0968a2756763fa324690487aecfb448a",
"assets/assets/images/linkedin_banner.png": "fc989d893fe73efd472e98698b65157b",
"assets/assets/images/gitlab1.png": "06d4abc973616ca572b82ac4c7a2078b",
"assets/assets/images/beemabox.png": "0d0a7a52830afffbc1c568763cb021fd",
"assets/assets/images/gitlab.png": "271f984909f65847dc0f45cafbe40732",
"assets/assets/images/brush-stroke.png": "41854d93cc2b183ac9bf55e4b5097846",
"assets/assets/images/school_erp.png": "5a3e7b31de8d200f837ab5d3dbaf0fe0",
"assets/assets/images/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/images/dcourier.png": "38fa5001cd042e586236342f04e3798c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/NOTICES": "ebd9560a1a5543101c7bd960ee380b7a",
"assets/fonts/MaterialIcons-Regular.otf": "d4a7494383cab2e57456e112ffaeb17b",
"assets/AssetManifest.json": "de5702b21a3c99889121d2b6c050fe57",
"assets/AssetManifest.smcbin": "e830800ddc2cb3273e7f1d938aa2a584",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "0d7c2e198fc5420d3940de2d44c19023",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/canvaskit.js": "59ed8478b398a8966eee147930f3d966",
"canvaskit/chromium/canvaskit.js": "853c6cebea386c05aa9d954f11b2c1ca",
"canvaskit/chromium/canvaskit.wasm": "ffc522e9ff0a7bbe6bfd2a6f54f974e4",
"canvaskit/canvaskit.wasm": "641ba6d615314c42874bf914ef2d093e",
"version.json": "9b818ca9511483c901bed1545384376c",
"favicon.png": "0b7e24d8ee4e7dade5c286f69566736d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "34bbf06f32c7506eacfd968f20000e14",
".git/config": "5b603c2c0801a9ded3b79159fc38b404",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/99/f95c75ba0d0e4a0f777bd3226c88f04f7fbf65": "edd8cb3d77e1c5e8da40a9aa325f1ca2",
".git/objects/c2/437dbd7bfc81a67a9f0db6af0312f478c8d1f2": "4ef4458fc13e4e9c8880367a0ecaa8bd",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/74/fa7ac65c1e16cf387f428fe36c0fbcc69b53f7": "5ada5d306cdbf765e9f26df42d3a6a6a",
".git/objects/74/f68330789cdef86d5774c17fe98ced442e6c2d": "d7739cc831a3a8969e523939479a9b6a",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/79/24b12fb0c79cde273c4e71f85b3ff24bf055b7": "9b7922dd7291f60ce523d91d5be30d68",
".git/objects/0c/8eb66b2aef7527f566fab267c955e14a376614": "f9cb31cf672d601b3f30009da2c49fd5",
".git/objects/ff/378e794cbff91fa0a259639a6f0b20fc003026": "cc4fc8e7a6650922323cb88a69526ee2",
".git/objects/65/651eb84e735b1b461700ca9bdbf4089e41900a": "8b72a976437e0150050e8c3c80268d1a",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/88/854fb5203d80eccdb2c4c012eb1e52a8ffacb7": "dcbaf70c6ea136da84e32edb56bab6c5",
".git/objects/a5/bed28aa4b460c643f8db3bf95b1e3145c27b17": "dbb0601410273e9f78e99f8eeb7bc6c8",
".git/objects/80/dc0fb92bb706f74a6a7138a298b4136dfaf8a2": "21a6f4b68ebda0ed014ca659b78115c6",
".git/objects/aa/599485fb495635e48f338965af74172f411cb6": "dda7da6dac0ca9f6a706f10e8ce7ccc4",
".git/objects/29/9f7712fc9b0eb562888e70b868c38e503b5a9b": "33032e3bd34c82b7289bba83ce65d0f4",
".git/objects/05/86224f701656e1d5831692f103ab5ecb59b4ec": "161b3e312ae5ed139dd2e60f42b147ab",
".git/objects/50/ff279a841fdf43c51815a9f52044cd0829df08": "c26ddebfd49bf241ea21e4e473673223",
".git/objects/43/2b3bb42dc1c9c19755b82161c070848ac15585": "aa8565bcd73d6920d1923b4dd912424c",
".git/objects/cd/566f282ad1f58d714cbf0bdaf4350b8eced293": "c3025133d67da3007daa35a9a6a2247b",
".git/objects/ac/6c2f6318d835b814301e619bf2008b2048dbf1": "ed36105059ee64da797afa33271db73e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d3/0174aade7a1ad60a096e52f4ae164aaf351627": "8353374295414b5f032a96fee2d77b3e",
".git/objects/d0/71df168950aff2dee2fd550738ab01f6c52fd7": "732f86ec0d972158adec0652194acc1a",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/52/c8ffb63058aaa66b012d9300820735e7dfbc37": "29b50ee61f6af7a52e22da74e7f27dd5",
".git/objects/b4/816aa30260da62e238cebb392922b2a7248399": "d2b9f2ff53edccdb388da587d0e1632c",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/c5/40c26d645b4b7888ce01dfe64dafc354738ae3": "5224f61671c8da784caf093576927ed3",
".git/objects/3c/4488cdc0d9e19e98b2bbd4459ac8d39ca48b8b": "8262f73dd803cb0111a5798ce30b2dd5",
".git/objects/76/de09c3542259f516008ce525e8702588b5452b": "60473cacc556e439b12d7194ff86b7c0",
".git/objects/2c/33ab1dfdf43cfa3a16310846c1f30dcc364be8": "70837b37eea30132decc1e91f737b0cb",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/ad/059ac0ece57fade109146e4fb7e05e4069c3f7": "176dd960bf3f218afcc1a4a1a715cb30",
".git/objects/9a/5d01db4d6095dff51e88b4dd6f89b126b8188e": "3ae72a2245182365390708bf8fa4b782",
".git/objects/04/7accc2b6c9e041b9fa9469c5850d27040eeac4": "754f8131c4e0a3148cdb3ba2a200de27",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/23/83a5b12d313ccd5168224d8c468f6abd17609b": "0cfa20cdf41b091ecae6be8a2fce21b6",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/ee/3ca4a63b0cd7b9e60604c08bc511e7c4541906": "e97491e8972a234914841570da44bfb4",
".git/objects/94/cec89e472525e016ca84a93ae48de3613609ea": "589eb92fe20f9de302903f988da4c620",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/38/1063510dc5f78517d9af1dbe64a2b2de2575cc": "5ed6ed993fcd68dab1f44e77b2fd6656",
".git/objects/38/28d72071c41e9038133437412d66766536b306": "04cfa6ce8523d85da3128d07b41d4dd5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"main.dart.js": "dc74ae3778322239fac27a4d13712aa5",
"manifest.json": "5b370eaf3d5e5978cf7653695b021001",
"index.html": "d5920412e95154950e15d60116f9236a",
"/": "d5920412e95154950e15d60116f9236a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
