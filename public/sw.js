// =========================================================================
// SERVICE WORKER - OFFLINE RESILIENCE & ZERO-LATENCY REPEAT VISITS
// Caching Strategies:
// 1. Immutable Assets (/assets/*): Cache-First (Instant 0ms delivery)
// 2. Navigation / HTML: Network-First with Cache Fallback (Always fresh, offline-ready)
// Strictly adheres to punctuation rule: NO em-dash or semicolon in sentences
// =========================================================================

const CACHE_NAME = "adyvka-portfolio-v1";

const PRECACHE_ASSETS = [
  "/",
  "/favicon.ico",
  "/favicon.svg",
  "/logo-192.png",
  "/site.webmanifest"
];

// 1. Install Event: Pre-cache core shell
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// 2. Activate Event: Clean up outdated caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch Event: Intelligent routing per asset type
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Only handle GET requests and http/https schemes
  if (request.method !== "GET" || !request.url.startsWith("http")) {
    return;
  }

  const url = new URL(request.url);

  // Ignore cross-origin third party requests (like Google Tag Manager, Formspree)
  if (url.origin !== self.location.origin || url.pathname === "/sw.js") {
    return;
  }

  // Strategy A: Versioned Immutable Assets (/assets/*) -> Cache-First
  if (url.pathname.startsWith("/assets/")) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // Strategy B: HTML Navigation Requests -> Network-First with Cache Fallback
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // If offline or network unavailable, serve cached version
          return caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // Fallback to cached home shell
            return caches.match("/");
          });
        })
    );
    return;
  }

  // Strategy C: Generic static resources -> Stale-While-Revalidate
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => null);

      return cachedResponse || fetchPromise;
    })
  );
});
