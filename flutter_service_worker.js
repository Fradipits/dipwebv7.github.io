'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "f5173be0c7043feac5326b828541853f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "02e88b69c63ebb62fd307d8445ea2ddb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "c946659fe595de6b0a74c3ec49dfd761",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4bb4d8c67292c58240b770ce1914fc13",
".git/logs/refs/heads/master": "4d372edf6f5549332218d9455496d886",
".git/logs/refs/heads/origin4": "14865e94be3338384125be8be787f412",
".git/logs/refs/remotes/origin/master": "7688154ed83719df52c25b1ebbd8906b",
".git/logs/refs/remotes/origin3/master": "bcc27c22e351277331fc506f64c43141",
".git/logs/refs/remotes/origin4/origin4": "a1e680c0fed7c427eab32f41568337f3",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/4808b583776abc80d23e56250b903c499e1faf": "e596489db1724511c2a51074caafc4bb",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/28/05f1610e61ea8f8eb49731eb10247f1fa01272": "171bdf19815c27a6915df3351ea99598",
".git/objects/28/649940eff6a10570bbb9d9cfdaab14d9263071": "6e96aeba3d8c4c331f7313e55daabcd9",
".git/objects/36/6bead455dc7d03cece847d9d9c73bbd4cf96c0": "d853f377d627a5c7054111634d8a7fae",
".git/objects/40/f0f44794af10253322e7a959a97171e1f30af0": "9b2a6beba07141f950b55d89ec015231",
".git/objects/41/34e6915a198cad172a390a8f0570094d5b95f4": "b6c9f1d2e0c21b52ad94a3ff7bb05854",
".git/objects/49/fdf0e4d2760320282f44cd383eb9f2d58da288": "95a166d5edf7e06784e01e100eadad85",
".git/objects/64/b644de96a857193eab86bb475460ce2073fac4": "a5b737deb775ee3c6e4901764fa4b0e7",
".git/objects/72/14a37e7f552f2bd0ef7417ce0982ef2154fbe4": "92f846245c43f54970e593838a1359c4",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/83/3139ad61fef834a89d7995e6c5634f0c887db4": "a2ab23e437037b1aa4d5bd0a45decab6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/aa/e63fbdd9b6b03d4c7625e29e2b7658e30d2369": "be50372fcb080aacee91267e8fc74b40",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/bd5d4a4fa376befc6f1edc4bedc3d24a0f12a2": "9ccd4b9ddc2e570da8317005eb5a3193",
".git/objects/be/9217e0f9fdf957c1bf2a678149bc0ab9c7e3ef": "e606e5d9f021e20eb8e4ae3895b11e75",
".git/objects/c9/8d53ba6fa9770a6a49d58864e593cb7b4a9a15": "5357f1b648308ffd62eb1cd3d1e339b8",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/eb/0c56ec179b7a2c59effa6896809674096fb4d2": "22d170952e44bd730de3468cc2696fdd",
".git/objects/f3/84bfa7b785bc5c2fffd85fc06e66c34479c40f": "063f080a7a27de15df1919970effacb0",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fd/534ed63120e02dedd97bc24bdafc3336873fc5": "474272f5ae81a5e32a13adf6fa9ea4f3",
".git/refs/heads/master": "09fc423f0f2acda3c5231efc24c5254e",
".git/refs/heads/origin4": "09fc423f0f2acda3c5231efc24c5254e",
".git/refs/remotes/origin/master": "09fc423f0f2acda3c5231efc24c5254e",
".git/refs/remotes/origin3/master": "09fc423f0f2acda3c5231efc24c5254e",
".git/refs/remotes/origin4/origin4": "09fc423f0f2acda3c5231efc24c5254e",
"assets/AssetManifest.json": "08dbeef91065f1439c47aba8b9c1df57",
"assets/assets/images/bgr.png": "f30ea8b1aa13ea5e2577b7e9e129d590",
"assets/assets/images/model.png": "887324e678d1d6ae03e4560ee413e75e",
"assets/assets/images/nvidia.png": "ecd08a148c98d0e922b439b767a01f16",
"assets/assets/images/nvidia2.png": "ecd08a148c98d0e922b439b767a01f16",
"assets/assets/images/pic.png": "0ab7aec252d06079afa92ac75c5334ca",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "78e31973d03a16cc2f88613a6be6b836",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2499ede6198e6a11e1627b77bf6a404b",
"/": "2499ede6198e6a11e1627b77bf6a404b",
"main.dart.js": "1140a9e373ae0d45ed0546cbc7293974",
"manifest.json": "85b4bd7c70bff5860032af5f21ec4740"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
