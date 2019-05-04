self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('fxcalc-v1')
            .then(cache => cache.addAll([
                '/',
                'index.html',
                'style.css',
                'app.js',
                'icon512.png',
                'icon16.png',
                'android-chrome-192x192.png',
                'android-chrome-512x512.png',
                'apple-touch-icon.png',
                'favicon-16x16.png',
                'favicon-32x32.png',
                'favicon.ico',
                'mstile-150x150.png',
                'safari-pinned-tab.svg',
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