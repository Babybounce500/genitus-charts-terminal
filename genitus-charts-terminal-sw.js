// Minimal lifecycle worker. Deliberately does not cache the embedded terminal
// iframes or their API responses -- each one manages its own cache freshness.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', () => {}); // no-op: pass everything straight through
