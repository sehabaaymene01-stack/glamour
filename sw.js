const CACHE = 'glamour-v1';
const SHELL = ['./', 'index.html', 'styles.css', 'app.js', 'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

// Network first so updates arrive quickly; the cache keeps the app working offline.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
  );
});

/* Background check for due payments (only on browsers that support periodic sync). */
const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
function readAll() {
  return new Promise((res, rej) => {
    const r = indexedDB.open('glamour-bons', 1);
    r.onerror = () => rej(r.error);
    r.onsuccess = () => {
      const db = r.result;
      if (!db.objectStoreNames.contains('notes')) return res(null);
      const tr = db.transaction(['notes', 'meta'], 'readwrite');
      const notes = tr.objectStore('notes').getAll(), meta = tr.objectStore('meta').get('settings');
      tr.oncomplete = () => res({ db, notes: notes.result, settings: meta.result });
      tr.onerror = () => rej(tr.error);
    };
  });
}
async function dueCheck() {
  const data = await readAll();
  if (!data || !data.settings) return;
  const { db, notes, settings } = data, now = new Date(), today = iso(now);
  if (settings.lastNotified === today) return;
  const limit = iso(new Date(now.getFullYear(), now.getMonth(), now.getDate() + (settings.lead || 0)));
  const due = notes.filter(n => n.due && n.due <= limit && n.total - n.payments.reduce((a, p) => a + p.amount, 0) > 0.004);
  if (!due.length) return;
  const fr = settings.lang === 'fr';
  await self.registration.showNotification(fr ? 'Paiements fournisseurs' : 'Supplier payments', {
    body: fr ? `${due.length} paiement(s) à faire. Ouvrez l'application pour voir.` : `${due.length} payment(s) to make. Open the app to see them.`,
    icon: 'icons/icon-192.png', badge: 'icons/icon-192.png', tag: 'due',
  });
  settings.lastNotified = today;
  db.transaction('meta', 'readwrite').objectStore('meta').put(settings);
}
self.addEventListener('periodicsync', e => { if (e.tag === 'due-check') e.waitUntil(dueCheck()); });
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window' }).then(cs => (cs[0] ? cs[0].focus() : self.clients.openWindow('./'))));
});
