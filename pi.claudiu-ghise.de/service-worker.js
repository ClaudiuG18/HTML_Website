self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
  event.waitUntil(
    caches
      .open("my-cache-v1")
      .then((cache) => {
        return cache.addAll([
          "/",
          "/index.html",
          "/styles.css",
          "/app.js",
          "/offline.html",
        ]);
      })
      .catch((error) => {
        console.error("Failed to open cache:", error);
      })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...");
  const cacheWhitelist = ["my-cache-v1"];
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!cacheWhitelist.includes(cacheName)) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .catch((error) => {
        console.error("Failed to clean up old caches:", error);
      })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request).catch((error) => {
          console.error("Failed to fetch from network:", error);
        })
      );
    })
  );
});
