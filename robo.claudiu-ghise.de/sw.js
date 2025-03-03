self.addEventListener("install", function (e) {
  console.log("Service Worker has been installed"); // This will be logged
  // Cache static assets
  e.waitUntil(
    caches.open("static").then(function (cache) {
      cache.addAll([
        "/",
        "/index.html",
        "/JS/robo_with_buttons.js",
        "/CSS/styles.css",
        "/icon512_maskable.png",
        "/icon512_rounded.png",
      ]);
    })
  );
});

self.addEventListener("activate", (e) => {
  console.log("Service Worker has been activated");
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
