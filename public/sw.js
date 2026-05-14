const CACHE_NAME = 'cejm-v1'

// Install: skip waiting and pre-cache the app shell
self.addEventListener('install', (event) => {
  self.skipWaiting()
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/CEJM-final/',
        '/CEJM-final/index.html',
      ])
    })
  )
})

// Activate: claim all clients and clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      clients.claim(),
      caches.keys().then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        )
      ),
    ])
  )
})

// Fetch: cache-first strategy with network fallback
self.addEventListener('fetch', (event) => {
  const { request } = event

  // Only handle GET requests
  if (request.method !== 'GET') return

  // Handle navigation requests — return index.html for SPA routing
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match('/CEJM-final/index.html').then((cached) => {
        if (cached) return cached
        return fetch(request).then((response) => {
          const clone = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
          return response
        })
      })
    )
    return
  }

  // Cache-first for all other GET requests
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached

      return fetch(request)
        .then((response) => {
          // Only cache valid responses from same origin or CDN fonts/assets
          if (
            !response ||
            response.status !== 200 ||
            (response.type !== 'basic' && response.type !== 'cors')
          ) {
            return response
          }

          const clone = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
          return response
        })
        .catch(() => {
          // For image requests, return a transparent fallback if available
          if (request.destination === 'image') {
            return caches.match('/CEJM-final/icons/icon-192.png')
          }
        })
    })
  )
})
