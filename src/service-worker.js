// @flow

import {
  isAPI,
  isSameOrigin,
} from './utils/urls';

const CACHE_NAME = 'artwork-cache-v1';
const urlsToCache = [
  '/',
  '/static/app.css',
  '/static/client.js',
];

self.addEventListener('install', async () => {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(urlsToCache);
  return await self.skipWaiting();
});

self.addEventListener('activate', async () => {
  const keys = await caches.keys();
  const promises = [];
  keys.forEach(cacheName => {
    if (CACHE_NAME === cacheName) return;
    promises.push( caches.delete(cacheName) );
  });
  return Promise.all(promises);
});

self.addEventListener('fetch', (ev: FetchEvent) => {
  if (!isSameOrigin(ev.request.url)) return;

  ev.respondWith(
    (isAPI(ev.request.url) ?
      fetchAndCache(ev.request)
        .catch(() => caches.match(ev.request))
      :
      caches.match(ev.request)
        .then(res => res || fetchAndCache(ev.request))
    )
  );
});

async function fetchAndCache(req: Request): Promise<Response> {
  const res = await fetch(req);
  caches.open(CACHE_NAME)
    .then(cache => {
      cache.add(req.url);
    });
  return res;
}
