/* Offline support. Bump CACHE_VERSION whenever you upload a new version of the app. */
const CACHE_VERSION = 'v1';
const CACHE = 'stroke-odometer-' + CACHE_VERSION;
const ASSETS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'favicon.svg',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png',
  'fonts/bricolage-grotesque-latin-700-normal.woff2',
  'fonts/dm-sans-latin-400-normal.woff2',
  'fonts/dm-sans-latin-500-normal.woff2',
  'fonts/dm-sans-latin-600-normal.woff2',
  'fonts/jetbrains-mono-latin-700-normal.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('stroke-odometer-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Serve from cache first so the app opens instantly and works offline, and refresh the cache in the background. */
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    caches.open(CACHE).then((cache) =>
      cache.match(req, { ignoreSearch: true }).then((hit) => {
        const refresh = fetch(req).then((res) => {
          if (res && res.ok) cache.put(req, res.clone());
          return res;
        }).catch(() => null);
        if (hit) return hit;
        return refresh.then((res) => res || (req.mode === 'navigate' ? cache.match('index.html') : Response.error()));
      })
    )
  );
});
