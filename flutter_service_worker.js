'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "65d8ba8c757066f97f56ec0179cb168f",
"index.html": "8225c1f3cedeb44ee5be8c4e9a200d4f",
"/": "8225c1f3cedeb44ee5be8c4e9a200d4f",
"main.dart.js": "0856861a2445bde0ce72c583569ea670",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"README.md": "9490ebbbdbde363a104e6a2de42de4ed",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d08cd3d43993878ea90b9b3f0fea0964",
".git/AUTO_MERGE": "2ba036dda208584dce34e3aefad3d094",
".git/ORIG_HEAD": "25edc04924478e036b00cf5af591ff32",
".git/config": "8ae112ff544839356c3b5201df876248",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/50/4cc03c942ef6b22b398e056c92ae6e9fcb88fa": "fd6e73bb80cc9e85995eddca7926ed5f",
".git/objects/57/dd3357df87993165db68f4f3c7b9482ade0b79": "da9a0083b7e6881efba952b8d7af419b",
".git/objects/04/eec49c2d1061cd7d46e94c40f6900ce2d0f7b5": "8d2c296e8ba5089f1d3c2f790376b8bc",
".git/objects/32/af06e80be5075a39de7c45eea2be3db3ceaf56": "b72ffa7da6147e79ef2df3b5b34bd2dc",
".git/objects/93/74f7c884a6291ac000cd69fdadc1b24aa5f8ea": "66535b0d47108c0d82bcdcec630e288f",
".git/objects/34/9068772d2fbb11639406e027110ca9adf596f1": "09b15cfff03dffd6ac8482a300ad597f",
".git/objects/5f/1ee192225fc0b3d2174928eea775e78184f1dc": "dc599011ddfb6c3f515a791d56baae56",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/a3/32b9f3b5364bb4e2dd4cff748d62df6b0468be": "fa27b2f5c68590bb03a66df7c25b5959",
".git/objects/d9/f6bdb7ca7c853fb8c187bc8af77d6053e2d760": "e851e7b1b1b26146e224d581f4553b8b",
".git/objects/d7/c7c19518a631bf74f5c03f1b08cb5c60360844": "2a5061bbcffee15d7e82a4e950180165",
".git/objects/d7/0aad7c414895764d01fc80a2d1b3eebf012bd4": "c73d89c280401e5c08e12812e15fd3e9",
".git/objects/bd/f14f4bb79bb64fdcb9ce822a7559b9875d68ad": "987826f7ab4456fdd35d60e196a56526",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/d237618c118489998351152f69c5b97a7173ff": "f0c52ed30296ad1c75f002e56dbbceb8",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a9b22b578c417c1b352d67e85b7b9eb3e5bf64": "ec9155322a4f21122e84c3a76f6a2130",
".git/objects/c6/411de1ea1aaf2c10589da7af45f2f31b5e3c78": "fe52ae04dfd7d59109dc0fdd6ccce815",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/8007eb1cc984373f36c1c3f7c25cd8fd00c1e2": "2dac511057293504ef57f21cdeca0853",
".git/objects/18/1023edb7956fb1632ca11ab6084fce29f8e824": "ce541c436bbdeb92921ca307b80f8463",
".git/objects/18/865686abf7163e9d03e05bc0342f80e4aadbd0": "6ce475992202f3b34a8bbde00cf80b5c",
".git/objects/27/e5f604c953aa48124c6c78be796aa43c104664": "4f3ed19ce6d65fccbdf475dd3dcef2e4",
".git/objects/27/c8d8f7bf9e823f3d2b89ed8efaf401baf4b942": "4d5b1ee9c17136dbb102e28f6a428542",
".git/objects/7d/ae40db1a65beab5ddaf303646977234c093e8c": "c8ed4c3f767ecc69717851aef61b66cc",
".git/objects/7b/a5db9bf407152a2124cc88b9a5245d69f3e732": "1500f4741af4e879528e8e9ff1037b71",
".git/objects/8f/e0857fdfb5e77965df794d827e25923223cb23": "54a163679d862d4745a767d4c834ed49",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/4e37047fcff27cdc0773eb6af2b15b767619fa": "65196fa302b5a39d2c737c7d52eca571",
".git/objects/21/61ae074b0c9722736bfe2d55302be8a5fe2291": "c46aa6fd3e063e9860fce3c47ae93ce8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/a9cfd2288c6125c1351ea3e731617d4f48276f": "716455b1b71fb61568ac631deaa3f17c",
".git/objects/6e/7207b5bc7bd0bc9c97307f35cdac2b2ba50f1f": "5e70f2ff63a51948c0b5cbd6452fe497",
".git/objects/9a/9d8d5587a6a4433d4aa06d0e5569d654abe48a": "6d0537fa56c98e1d7f6601e4a912d23e",
".git/objects/36/b74fa4325c53943410f134b5ff06e688445fc5": "8d92f4a72283df7d1dec4e6f59807255",
".git/objects/98/bc4b6af1514dabb0625a145e194577a0dd5dff": "6fd5be4c00d25c7f0b4bf11dc05f4ec7",
".git/objects/01/69717d2c6bc79750000c6c9dd519ab3f02a79e": "1817e7badc1737091648360e5e116c6a",
".git/objects/6c/c71eb2f0e276ddaaba5aa08794c5d7a17c50b0": "f621e9abe5e84acba10831dc4b80cab7",
".git/objects/39/ebf8f8002ea6299b9f2c13d6b6ab20443f541e": "d1d5546248095a42e5f3eeaec1981097",
".git/objects/39/94b309d2637aef3df8afb80e56efaf68a396dc": "ad5154845ef330d697848dd15b566db5",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/dc/d2d1eb4152eeec851f71c0689f1e8640972e91": "c7028dd8fc4e4a26bcbeaec76a91c682",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/eb4627894b7461d006b03b8c07f693aade85df": "5ac7f1e9e444b4eb1cbc8e38023e385f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/4c98d5561e4569a026f3d935d7456ace5a2898": "dd20929cef1082fd582a66b30938de33",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c3/303e7258e0ec94381fbbb28b3be0e299506980": "8169f8eee40b26a2f59f1fe0d8d43d7e",
".git/objects/e1/ac634de01a8f1bc1131b86e3f5caf093a97440": "4c0fc4bbce962cf76398a57188407ebc",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/f9/b8a7857d5bd9f107b3e90b769c5abf5787dbfb": "19cef7dfdd6da2809cc1a21c6b4e2199",
".git/objects/f9/48d6217bbb428ee2404819c089405a79c01db7": "cd8b3dffa0792e76df7b3db5178e578d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e7/985fc686738476516ca9f1c4896f6fd8ebd3ae": "39b0acd46f2b91e2338923bdf2b94d01",
".git/objects/f8/efa937658457b20a8d9883c3fd3fd55a94d4bc": "d9ecd78721296b331f10d7333579df63",
".git/objects/f8/71651d7fb2645ea402f1c4a5a611987957affc": "5408a5ed214230e69f06e14bbbf55d37",
".git/objects/46/148921291d81f1d7738fc0cbfb93c615990df6": "c40f7d63e8eafb913a9a07c997b4121e",
".git/objects/79/84d53ff7e9658124ada0f6e86fa4ccce770aca": "1785775be7d90e62f12d69786e85391e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/41/564a913d69cb935fb2086aa46d093ed600efa6": "d1e0ea9894af61d6eb7fb579611e09bf",
".git/objects/1e/a77534aa78b23efbb6f9c755d54537553a6094": "d3b9f52f4f0d747fc508c32d38512901",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/8c/b549955e58930cd190a7c21fcb9dcafba2cef1": "131f4ba69ee57fc46752302c8202a025",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/82/fa9ff4228113f2c5ae96d0d48325192ce9e0ee": "e1b053b57a2dcd1edb138a7104d2433a",
".git/objects/2b/3d307586d64b8434b118ffe28e728fae8b023a": "385646c05d267b480cb7654c1f5eb24c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d30c18e7af7f2423db284e30bc280de9",
".git/logs/refs/heads/master": "635245f422366ae86a8d5095c937ec89",
".git/logs/refs/remotes/origin/master": "b2de5f3314a945722db51d7401a35cbf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "317ed7f17d75ff23cef2be6c6bc1618f",
".git/refs/remotes/origin/master": "317ed7f17d75ff23cef2be6c6bc1618f",
".git/index": "881952364a82e83f1bfc575896cc6e62",
".git/COMMIT_EDITMSG": "cdf42c0724f2ac90230a303a55a85b0d",
".git/FETCH_HEAD": "d0cc5da60e87c645f5e0e65bc7a9c85f",
"assets/AssetManifest.json": "f108a6e936c672cc48cc73ff68b386d0",
"assets/NOTICES": "74a5bed8b0d964bf30fe1606ecdcdefe",
"assets/FontManifest.json": "073ea84265509e5b2dd0b0cc25ed033f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icons/remove_icon.png": "223079c76737b568e950ba4917056d9b",
"assets/assets/icons/2.0x/remove_icon.png": "905226b673fbbf6dcd859b40d76653f7",
"assets/assets/icons/2.0x/logo.png": "65bb9f918c202ef2690af3cc734ad00f",
"assets/assets/icons/3.0x/remove_icon.png": "0a974764171eb8f1ced908ea0096f36c",
"assets/assets/icons/3.0x/logo.png": "e4d6fa4fe10a657c7a2452b3c0cd8dc2",
"assets/assets/icons/4.0x/remove_icon.png": "b5e98580aa9024695a96de25c9bff038",
"assets/assets/icons/4.0x/logo.png": "ab1bd552cdf78116026f1de2b1c5b0b8",
"assets/assets/icons/logo.png": "2a4a1b6a98e85b6fa66d79221e72caf2",
"assets/assets/fonts/Proxima%2520Nova-Light.otf": "e2602b2f2c615d20c880911364b32191",
"assets/assets/fonts/Proxima%2520Nova-Bold.otf": "62d4d7d369292a9bf23762465ec6d704",
"assets/assets/fonts/Proxima%2520Nova-Regular.otf": "bf9f5d50c1b928ff21436517a1a95ad9",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
