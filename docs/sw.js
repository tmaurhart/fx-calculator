self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('fxcalc-v1')
            .then(cache => cache.addAll([
                '/',
                'index.html',
                'style.css',
                'app.js',
                'icons/icon512.png',
                'icons/icon16.png',
                'icons/android-chrome-192x192.png',
                'icons/android-chrome-512x512.png',
                'icons/apple-touch-icon.png',
                'icons/favicon-16x16.png',
                'icons/favicon-32x32.png',
                'icons/favicon.ico',
                'icons/mstile-150x150.png',
                'icons/safari-pinned-tab.svg',
                'manifest.webmanifest',
                'rates.json'
            ]))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.open('fxcalc-v1')
            .then(cache => cache.match(event.request))
    );
});