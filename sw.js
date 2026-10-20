self.addEventListener('fetch', function(event) {
  // Eenvoudige service worker om PWA installatie mogelijk te maken
  event.respondWith(fetch(event.request));
});
