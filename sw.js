/* Hält die Seite für den Betrieb ohne Netz bereit: zuerst das Netz, sonst der Vorrat. Daten liegen hier keine. */
const VORRAT = 'sitzungstool-1';
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VORRAT).then((c) => c.addAll(['./', 'icon.png'])).catch(() => { /* Vorrat füllt sich beim nächsten Laden */ }).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET') return;
  let url;
  try { url = new URL(r.url); } catch (x) { return; }
  if (url.origin !== self.location.origin) return;
  e.respondWith((async () => {
    try {
      const antwort = await fetch(r);
      if (antwort && antwort.ok && antwort.type === 'basic') {
        const kopie = antwort.clone();
        e.waitUntil(caches.open(VORRAT).then((c) => c.put(r, kopie)).catch(() => { /* ohne Vorrat weiter */ }));
      }
      return antwort;
    } catch (fehler) {
      const c = await caches.open(VORRAT);
      const treffer = (await c.match(r, { ignoreSearch: true })) || (r.mode === 'navigate' ? await c.match(new URL('./', self.registration.scope).href) : null);
      if (treffer) return treffer;
      throw fehler;
    }
  })());
});
