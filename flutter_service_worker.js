'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b11568ede3f318ff3ffe3c2aa76800f3",
"assets/AssetManifest.bin.json": "7e01d0c734241b43e3f1090ecf243f5c",
"assets/AssetManifest.json": "036eeb31c5e751311276015bbeb7167f",
"assets/assets/audio/arrived.mp3": "0f9941e57512d8c098516ebf38fa121f",
"assets/assets/audio/background_music.mp3": "2ebeb0155753e80f09322fc7d8e2b319",
"assets/assets/audio/continue_straight.mp3": "166d9920ccdc530d5530dd6468e3b422",
"assets/assets/audio/straight.mp3": "85044bed40b9a320ebdafc1293d4c381",
"assets/assets/audio/turn_left.mp3": "47ff43fc505ac212a0c4ca2e90744e66",
"assets/assets/audio/turn_left_hard.mp3": "ae6fe06988eb2ae7ba4c9e01c8626d03",
"assets/assets/audio/turn_right.mp3": "d6c2a7829c4e1c18f6b6aa53ef22c374",
"assets/assets/audio/turn_right_hard.mp3": "fc9dd4b1a1e9191456be195487495cb6",
"assets/assets/data/buildings.json": "81458abadc1851b1e8436ebf19a9dd29",
"assets/assets/data/edges.json": "2fd7c493a813b90eef2f4b6147ec8ebf",
"assets/assets/data/mapping.json": "83a0ca583cab8894592e5f9851ebb408",
"assets/assets/data/nodes.json": "9ce205fa25fd590770b98bd058bdf22f",
"assets/assets/images/logo2025newww.png": "ada11358b281f4096d122a4f70f18145",
"assets/assets/images/map_background.png": "b1d756ddc359020c4aee52f1ada684e2",
"assets/assets/images/promo/promo_1.jpg": "7e027a6a367e6dca103728fe1c70f32e",
"assets/assets/images/promo/promo_2.jpg": "73704e31a21d1f9425cf15e9ccde627a",
"assets/assets/images/promo/promo_3.jpg": "656bfb3fc61b83ef21a21d449a580f5c",
"assets/assets/places/Alaa_ALdin_Cafe.jpeg": "6ae99e213b5bf06ad27256f8409ffe53",
"assets/assets/places/BADEL.jpeg": "1cf19f0f34b3f94d3ea5e81417ff3626",
"assets/assets/places/BANQUTE_OFFICE.jpeg": "91979250f2129da7539a7c85777bcbf0",
"assets/assets/places/BASKET_BALL.jpeg": "9b966e407c6c1444b922b1d9d86a7e20",
"assets/assets/places/BLUE_VIBES.jpeg": "7b70450ecf954787c617438a28f708db",
"assets/assets/places/Central_park.jpeg": "e361dcf6d697c1fd2a07166fc40515e7",
"assets/assets/places/CLINIC.jpeg": "63ac6b5f3d8791a8db48270ac375f934",
"assets/assets/places/FOOTBALL.jpg": "11311f6558147bdf2797a0b9bcd5f1c8",
"assets/assets/places/garage_gate.jpeg": "2e852d885e2e04335f16959953550014",
"assets/assets/places/GARDEN.jpeg": "ef54c029867c4b758d928acf01126d3e",
"assets/assets/places/garden_vip_1.jpeg": "44f4965a3f9002c9ba76e12be9b2c701",
"assets/assets/places/garden_vip_2.jpeg": "9c98c0a3c03e0e114432443724104914",
"assets/assets/places/gate1.jpeg": "74a7ce78042c0129de6cc76f2a05ddd1",
"assets/assets/places/gate3.jpeg": "9df61181940b2cd7f4e217a024724cbc",
"assets/assets/places/gate4.jpeg": "5c52f3828e8b1a323ff1c92a6c1d48e9",
"assets/assets/places/gate6.jpeg": "bb401e7ec8f9747dc60740fa60c5b2bb",
"assets/assets/places/gate7.jpeg": "fbc698481a337b850e40e849570aa82f",
"assets/assets/places/GRAND_CAFE.jpeg": "5012704d19d45fabebc61a53bc74d406",
"assets/assets/places/GRAND_Gardinea.jpeg": "957cfbe2fb7f33c0ad1db889aaab4cb4",
"assets/assets/places/GRAND_STORE.jpeg": "69085dd96e0a0653e500cbc6194ea8e7",
"assets/assets/places/Grand_Tiba_Pool.jpeg": "8d8c7db1514d0895cb4d7fc83e9aa64d",
"assets/assets/places/GRAND_Tiba_Rose_Hotel.jpeg": "b89c1c2f078b328432895881b0789102",
"assets/assets/places/H_GRAND_ORCHID.jpeg": "ab180159f865e84ac95d097f81b1d55d",
"assets/assets/places/H_PANSSIA.jpeg": "2f94be5ff7416f60c243486b9010eb03",
"assets/assets/places/H_TIBA_camilia_ENTRY.jpeg": "a155e254625644016c1684e2307de93b",
"assets/assets/places/H_TIBA_gladius_ENTRY.jpeg": "20d6c42ff0251cab860ba23d464e8e32",
"assets/assets/places/H_TIBA_passant.jpeg": "bd0f5f2b80922433eba136658d314400",
"assets/assets/places/H_TIBA_vip_ENTRY.jpeg": "95db1643339461aa08747ae352943257",
"assets/assets/places/H_VILLA_ROSE.jpeg": "9c47752762883c2a50bb7667e3b244ac",
"assets/assets/places/KIDS_AREA.jpeg": "25568ba16b2cb7d2e9823f8007bce685",
"assets/assets/places/LOPPY_TERRACE_CAFE.jpeg": "0e2a051c5ddb85e8593664626845dc8c",
"assets/assets/places/MARVEL.jpeg": "926cab1b203d1738626e2a5bb18b837d",
"assets/assets/places/MARVEL_bowling.jpeg": "c832f29a493dc5414c82b85bf55511e1",
"assets/assets/places/MICKEY_PARK.jpeg": "ca22be4a057cff42b4c87f3ebdeba33d",
"assets/assets/places/MOSQUE.jpeg": "0c2c047c96a4b11bd3ffb7379b7d6fcb",
"assets/assets/places/PARADISE.jpeg": "339f3fa2c642141cde78c0a3105ba351",
"assets/assets/places/Pradise_Pool.jpeg": "809083824b2e20e83c139444aae2e5e4",
"assets/assets/places/REAL_ESTATE-REGISTRY.jpeg": "a4c5be6d74d91fb1adabe907e6efede8",
"assets/assets/places/RECEPTION_GRAND.jpeg": "05002652f3670e723c59d0724948d3d9",
"assets/assets/places/SAFINA_RESTURANT.jpeg": "e7dc1b4144607dc4e5b5362899f342d1",
"assets/assets/places/SPORTS_ACADEMIES.jpeg": "f6b5780eafbfe258f0cd2c4bd62b73f7",
"assets/assets/places/SQUASH.jpeg": "cab4531a4570d1e01c84147f180a4785",
"assets/assets/places/SUBSCRIBTION_office.jpeg": "71e7335bef59bdfe111a0572dd24cd02",
"assets/assets/places/Take_AWay.jpeg": "6f333197308a49ec0d3a1cd826699889",
"assets/assets/places/TIBA_beonia_Resturant.jpeg": "f8b2a6aa7aa34a9d941d75d6e9dcbf18",
"assets/assets/places/TIBA_Hotel_Pool.jpeg": "27eea99f19f29028780f46cd68fec44d",
"assets/assets/places/Tiba_pool_cafe.jpeg": "72d04611e198efa79b79ffc3826e8973",
"assets/assets/places/TIBA_RECEPTION.jpeg": "0a214990820ec7b727b3cb834fd9e9cb",
"assets/assets/places/TIBA_Rose_Hotel.jpeg": "bf86826f3d120c246175afac46b51946",
"assets/assets/places/Tiba_Shallih.jpeg": "47a0c81a7343663e657c585d032a6037",
"assets/FontManifest.json": "2b52acee7bee9f34d372a965ef37754f",
"assets/fonts/MaterialIcons-Regular.otf": "71803b5ee4ddb5bb93687ebdf3f0a406",
"assets/NOTICES": "ff66deb1305f6114465ec16f584f2d76",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "915549fa6b7e895416689460eeea70d3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8c9da41fcd811e69c20e4b8155d3d5b9",
"/": "8c9da41fcd811e69c20e4b8155d3d5b9",
"main.dart.js": "f252559bd7ea6d6333579e68055cfb27",
"manifest.json": "586110e619970f089fbdaaf34b1cd17c",
"version.json": "a5846b675965a5ee6d735fa7e672bd67"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
