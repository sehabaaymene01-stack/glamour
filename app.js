'use strict';

/* ---------- Translations ---------- */
const L = {
  en: {
    tabHome: 'To pay', tabNotes: 'Bons', tabSuppliers: 'Suppliers', tabSettings: 'Settings',
    totalOwed: 'Total left to pay', unpaidCount: '{0} unpaid bon(s) · {1} supplier(s)',
    overdue: 'Overdue', next7: 'Next 7 days', today: 'Today', thisWeek: 'This week', later: 'Later', noDate: 'No date fixed',
    bons: '{0} bon(s)', emptyTitle: 'No bons yet', emptyText: 'Tap + to scan your first delivery note.',
    allPaidTitle: 'Everything is paid', allPaidText: 'No money owed to suppliers.',
    search: 'Search supplier or bon number', fOpen: 'To pay', fPaid: 'Paid', fAll: 'All', nothing: 'Nothing found.',
    bon: 'Bon', bonNo: 'Bon n° {0}', paid: 'Paid', lateDays: 'Late {0} d', inDays: 'In {0} d', tomorrow: 'Tomorrow',
    newBon: 'New bon', editBon: 'Edit bon', takePhoto: 'Scan (camera)', fromGallery: 'Gallery',
    supplier: 'Supplier name', number: 'Bon number', date: 'Date', total: 'Total amount', advance: 'Paid now (advance)',
    due: 'Date to pay the rest', comment: 'Comment', save: 'Save', cancel: 'Cancel', optional: 'optional',
    days: '+{0} days', errSupplier: 'Enter the supplier name.', errTotal: 'Enter the total amount.',
    errAdvance: 'The advance cannot be more than the total.', errAmount: 'Enter an amount.',
    errTooMuch: 'That is more than what is left ({0}).', errBelowPaid: 'Total cannot be less than what is already paid ({0}).',
    remaining: 'Left to pay', alreadyPaid: 'Paid', dueDate: 'Pay by', payments: 'Payments', noPayments: 'No payment yet.',
    addPayment: 'Add payment', amount: 'Amount', nextDue: 'New date for the rest', payAll: 'Pay all',
    edit: 'Edit', del: 'Delete', calendar: 'Add reminder to calendar', advanceLabel: 'Advance',
    confirmDelBon: 'Delete this bon and its payments?', confirmDelPay: 'Delete this payment?',
    confirmDelSup: 'Delete this supplier?', supHasNotes: 'This supplier still has bons. Delete them first.',
    newSupplier: 'New supplier', editSupplier: 'Edit supplier', name: 'Name', phone: 'Phone', call: 'Call',
    owed: 'Owed', totalBought: 'Total of all bons', noSuppliers: 'No suppliers yet', noSuppliersText: 'They are added automatically when you save a bon.',
    errName: 'Enter a name.', errDup: 'A supplier with this name already exists.',
    language: 'Language', currency: 'Currency', reminders: 'Reminders', remindWhen: 'Remind me',
    sameDay: 'On the day', dBefore: '{0} day(s) before', enableNotif: 'Turn on notifications',
    notifOn: 'Notifications are on.', notifDenied: 'Notifications are blocked in the phone settings for this app.',
    notifNone: 'Notifications are not supported on this browser. Use the calendar button on each bon.',
    notifHelp: 'The app alerts you about payments that are due. For an alarm that always rings, even if the app has not been opened for days, use "Add reminder to calendar" on the bon.',
    backup: 'Backup', backupHelp: 'Everything is stored on this phone only. Save a backup file regularly (send it to yourself).',
    exportBtn: 'Save backup file', importBtn: 'Restore from backup', lastBackup: 'Last backup: {0}', never: 'never',
    confirmImport: 'Replace everything on this phone with the backup ({0} bons)?', importDone: 'Backup restored.', importBad: 'This file is not a valid backup.',
    install: 'Install on phone', installHelp: 'Android (Chrome): menu ⋮ → "Add to Home screen". iPhone (Safari): Share → "Add to Home Screen".',
    nTitle: 'Supplier payments', nBody: '{0} payment(s) to make · {1}', nLate: '{0} overdue',
    icsTitle: 'Pay {0} — {1}',
  },
  fr: {
    tabHome: 'À payer', tabNotes: 'Bons', tabSuppliers: 'Fournisseurs', tabSettings: 'Réglages',
    totalOwed: 'Total restant à payer', unpaidCount: '{0} bon(s) non payé(s) · {1} fournisseur(s)',
    overdue: 'En retard', next7: '7 prochains jours', today: "Aujourd'hui", thisWeek: 'Cette semaine', later: 'Plus tard', noDate: 'Sans date fixée',
    bons: '{0} bon(s)', emptyTitle: 'Aucun bon', emptyText: 'Appuyez sur + pour scanner votre premier bon.',
    allPaidTitle: 'Tout est payé', allPaidText: 'Vous ne devez rien aux fournisseurs.',
    search: 'Chercher fournisseur ou n° de bon', fOpen: 'À payer', fPaid: 'Payés', fAll: 'Tous', nothing: 'Aucun résultat.',
    bon: 'Bon', bonNo: 'Bon n° {0}', paid: 'Payé', lateDays: 'Retard {0} j', inDays: 'Dans {0} j', tomorrow: 'Demain',
    newBon: 'Nouveau bon', editBon: 'Modifier le bon', takePhoto: 'Scanner (caméra)', fromGallery: 'Galerie',
    supplier: 'Nom du fournisseur', number: 'N° du bon', date: 'Date', total: 'Montant total', advance: 'Payé maintenant (avance)',
    due: 'Date pour payer le reste', comment: 'Remarque', save: 'Enregistrer', cancel: 'Annuler', optional: 'facultatif',
    days: '+{0} jours', errSupplier: 'Entrez le nom du fournisseur.', errTotal: 'Entrez le montant total.',
    errAdvance: "L'avance ne peut pas dépasser le total.", errAmount: 'Entrez un montant.',
    errTooMuch: "C'est plus que le reste à payer ({0}).", errBelowPaid: 'Le total ne peut pas être inférieur à ce qui est déjà payé ({0}).',
    remaining: 'Reste à payer', alreadyPaid: 'Payé', dueDate: 'À payer avant le', payments: 'Versements', noPayments: 'Aucun versement.',
    addPayment: 'Ajouter un versement', amount: 'Montant', nextDue: 'Nouvelle date pour le reste', payAll: 'Tout payer',
    edit: 'Modifier', del: 'Supprimer', calendar: 'Ajouter un rappel au calendrier', advanceLabel: 'Avance',
    confirmDelBon: 'Supprimer ce bon et ses versements ?', confirmDelPay: 'Supprimer ce versement ?',
    confirmDelSup: 'Supprimer ce fournisseur ?', supHasNotes: "Ce fournisseur a encore des bons. Supprimez-les d'abord.",
    newSupplier: 'Nouveau fournisseur', editSupplier: 'Modifier le fournisseur', name: 'Nom', phone: 'Téléphone', call: 'Appeler',
    owed: 'Dû', totalBought: 'Total de tous les bons', noSuppliers: 'Aucun fournisseur', noSuppliersText: "Ils sont ajoutés automatiquement quand vous enregistrez un bon.",
    errName: 'Entrez un nom.', errDup: 'Un fournisseur avec ce nom existe déjà.',
    language: 'Langue', currency: 'Devise', reminders: 'Rappels', remindWhen: 'Me rappeler',
    sameDay: 'Le jour même', dBefore: '{0} jour(s) avant', enableNotif: 'Activer les notifications',
    notifOn: 'Les notifications sont activées.', notifDenied: "Les notifications sont bloquées dans les réglages du téléphone pour cette application.",
    notifNone: "Les notifications ne sont pas disponibles sur ce navigateur. Utilisez le bouton calendrier sur chaque bon.",
    notifHelp: "L'application vous alerte des paiements à échéance. Pour une alarme qui sonne toujours, même si l'application n'a pas été ouverte depuis des jours, utilisez « Ajouter un rappel au calendrier » sur le bon.",
    backup: 'Sauvegarde', backupHelp: 'Tout est enregistré sur ce téléphone uniquement. Faites une sauvegarde régulièrement (envoyez-la à vous-même).',
    exportBtn: 'Enregistrer une sauvegarde', importBtn: 'Restaurer une sauvegarde', lastBackup: 'Dernière sauvegarde : {0}', never: 'jamais',
    confirmImport: 'Remplacer tout le contenu de ce téléphone par la sauvegarde ({0} bons) ?', importDone: 'Sauvegarde restaurée.', importBad: "Ce fichier n'est pas une sauvegarde valide.",
    install: 'Installer sur le téléphone', installHelp: 'Android (Chrome) : menu ⋮ → « Ajouter à l\'écran d\'accueil ». iPhone (Safari) : Partager → « Sur l\'écran d\'accueil ».',
    nTitle: 'Paiements fournisseurs', nBody: '{0} paiement(s) à faire · {1}', nLate: '{0} en retard',
    icsTitle: 'Payer {0} — {1}',
  },
};

/* ---------- State & helpers ---------- */
const S = {
  suppliers: [], notes: [],
  settings: { key: 'settings', lang: (navigator.language || 'en').startsWith('fr') ? 'fr' : 'en', currency: 'DA', lead: 1, lastNotified: '', lastBackup: '' },
  ui: { q: '', filter: 'open' },
};
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const t = (k, ...a) => { let s = (L[S.settings.lang] || L.en)[k] ?? L.en[k] ?? k; a.forEach((v, i) => { s = s.replace('{' + i + '}', v); }); return s; };
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const today = () => iso(new Date());
const parts = s => s.split('-').map(Number);
const addDays = (s, n) => { const [y, m, d] = parts(s); return iso(new Date(y, m - 1, d + n)); };
const dayDiff = (a, b) => { const u = s => { const [y, m, d] = parts(s); return Date.UTC(y, m - 1, d); }; return Math.round((u(a) - u(b)) / 864e5); };
const locale = () => (S.settings.lang === 'fr' ? 'fr-FR' : 'en-GB');
const fmtDate = s => { if (!s) return ''; const [y, m, d] = parts(s); return new Date(y, m - 1, d).toLocaleDateString(locale(), { day: 'numeric', month: 'short', year: 'numeric' }); };
const money = n => new Intl.NumberFormat(locale(), { maximumFractionDigits: 2 }).format(n) + ' ' + S.settings.currency;
const num = v => { const x = parseFloat(String(v ?? '').replace(/[\s  ]/g, '').replace(',', '.')); return isFinite(x) && x >= 0 ? Math.round(x * 100) / 100 : NaN; };
const round2 = x => Math.round(x * 100) / 100;

const sup = id => S.suppliers.find(s => s.id === id);
const paidOf = n => round2(n.payments.reduce((a, p) => a + p.amount, 0));
const rest = n => Math.max(0, round2(n.total - paidOf(n)));
function status(n) {
  if (rest(n) <= 0) return 'paid';
  if (!n.due) return 'open';
  const d = dayDiff(n.due, today());
  return d < 0 ? 'late' : d === 0 ? 'today' : d <= 7 ? 'soon' : 'open';
}
const unpaid = () => S.notes.filter(n => rest(n) > 0);
const byDue = (a, b) => (a.due || '9999').localeCompare(b.due || '9999');

/* ---------- Storage (IndexedDB) ---------- */
let db;
function openDB() {
  return new Promise((res, rej) => {
    const r = indexedDB.open('glamour-bons', 1);
    r.onupgradeneeded = () => {
      const d = r.result;
      d.createObjectStore('suppliers', { keyPath: 'id' });
      d.createObjectStore('notes', { keyPath: 'id' });
      d.createObjectStore('photos', { keyPath: 'id' });
      d.createObjectStore('meta', { keyPath: 'key' });
    };
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
function tx(store, mode, fn) {
  return new Promise((res, rej) => {
    const tr = db.transaction(store, mode);
    const out = fn(tr.objectStore(store));
    tr.oncomplete = () => res(out && 'result' in out ? out.result : undefined);
    tr.onerror = tr.onabort = () => rej(tr.error);
  });
}
const dbAll = store => tx(store, 'readonly', s => s.getAll());
const dbGet = (store, key) => tx(store, 'readonly', s => s.get(key));
const dbPut = (store, val) => tx(store, 'readwrite', s => { s.put(val); });
const dbDel = (store, key) => tx(store, 'readwrite', s => { s.delete(key); });
const dbClear = store => tx(store, 'readwrite', s => { s.clear(); });

const saveSettings = () => dbPut('meta', S.settings);
async function saveNote(n) {
  await dbPut('notes', n);
  const i = S.notes.findIndex(x => x.id === n.id);
  if (i < 0) S.notes.push(n); else S.notes[i] = n;
}
async function saveSupplier(s) {
  await dbPut('suppliers', s);
  const i = S.suppliers.findIndex(x => x.id === s.id);
  if (i < 0) S.suppliers.push(s); else S.suppliers[i] = s;
}
async function deleteNote(n) {
  for (const id of n.photoIds) await dbDel('photos', id);
  await dbDel('notes', n.id);
  S.notes = S.notes.filter(x => x.id !== n.id);
}
const findSupplier = name => S.suppliers.find(s => s.name.trim().toLowerCase() === name.trim().toLowerCase());

/* ---------- Photos ---------- */
const photoURL = new Map();
async function hydratePhotos(root = document) {
  for (const img of root.querySelectorAll('img[data-photo]')) {
    const id = img.dataset.photo;
    if (!photoURL.has(id)) {
      const rec = await dbGet('photos', id);
      if (rec) photoURL.set(id, URL.createObjectURL(rec.blob));
    }
    if (photoURL.has(id)) img.src = photoURL.get(id);
  }
}
async function shrink(file) {
  let src;
  try { src = await createImageBitmap(file, { imageOrientation: 'from-image' }); }
  catch {
    src = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = URL.createObjectURL(file); });
  }
  const k = Math.min(1, 1600 / Math.max(src.width, src.height));
  const c = document.createElement('canvas');
  c.width = Math.round(src.width * k); c.height = Math.round(src.height * k);
  c.getContext('2d').drawImage(src, 0, 0, c.width, c.height);
  return new Promise(res => c.toBlob(b => res(b || file), 'image/jpeg', 0.8));
}
const blobToDataURL = blob => new Promise(res => { const r = new FileReader(); r.onload = () => res(r.result); r.readAsDataURL(blob); });
const dataURLToBlob = async url => (await fetch(url)).blob();

/* ---------- View pieces ---------- */
function chip(n) {
  const st = status(n);
  if (st === 'paid') return `<span class="chip paid">${t('paid')}</span>`;
  if (!n.due) return `<span class="chip">${t('noDate')}</span>`;
  const d = dayDiff(n.due, today());
  if (st === 'late') return `<span class="chip late">${t('lateDays', -d)}</span>`;
  if (st === 'today') return `<span class="chip today">${t('today')}</span>`;
  if (st === 'soon') return `<span class="chip soon">${d === 1 ? t('tomorrow') : t('inDays', d)}</span>`;
  return `<span class="chip">${fmtDate(n.due)}</span>`;
}
const bonLabel = n => (n.number ? t('bonNo', esc(n.number)) : t('bon'));
function noteRow(n, withSupplier = true) {
  const paid = status(n) === 'paid';
  return `<a class="row" href="#/note/${n.id}">
    <div class="row-main">
      <div class="row-title">${withSupplier ? esc(sup(n.supplierId)?.name) : bonLabel(n)}</div>
      <div class="row-sub">${withSupplier ? bonLabel(n) + ' · ' : ''}${fmtDate(n.date)}</div>
    </div>
    <div class="row-end"><div class="amt">${money(paid ? n.total : rest(n))}</div>${chip(n)}</div>
  </a>`;
}
const list = rows => `<div class="list">${rows.join('')}</div>`;
const sumRest = ns => round2(ns.reduce((a, n) => a + rest(n), 0));

/* ---------- Pages ---------- */
function pageHome() {
  const open = unpaid().sort(byDue);
  const head = `<div class="top"><h1>Glamour</h1><span class="sub">${fmtDate(today())}</span></div>`;
  if (!S.notes.length) return head + `<div class="empty"><b>${t('emptyTitle')}</b>${t('emptyText')}</div>`;
  const g = { late: [], today: [], soon: [], open: [], none: [] };
  open.forEach(n => { g[n.due ? status(n) : 'none'].push(n); });
  const week = [...g.today, ...g.soon];
  let html = head + `
    <div class="hero"><div class="label">${t('totalOwed')}</div><div class="big">${money(sumRest(open))}</div>
      <div class="hint">${t('unpaidCount', open.length, new Set(open.map(n => n.supplierId)).size)}</div></div>
    <div class="tiles">
      <div class="tile late"><div class="label">${t('overdue')}</div><div class="val">${money(sumRest(g.late))}</div><div class="hint">${t('bons', g.late.length)}</div></div>
      <div class="tile soon"><div class="label">${t('next7')}</div><div class="val">${money(sumRest(week))}</div><div class="hint">${t('bons', week.length)}</div></div>
    </div>`;
  if (!open.length) return html + `<div class="empty"><b>${t('allPaidTitle')}</b>${t('allPaidText')}</div>`;
  const sec = (key, cls, ns) => (ns.length ? `<div class="section ${cls}">${t(key)}</div>${list(ns.map(n => noteRow(n)))}` : '');
  html += sec('overdue', 'late', g.late) + sec('today', '', g.today) + sec('thisWeek', '', g.soon) + sec('later', '', g.open) + sec('noDate', '', g.none);
  return html;
}

function notesList() {
  const q = S.ui.q.trim().toLowerCase(), f = S.ui.filter;
  const ns = S.notes.filter(n => {
    const isPaid = rest(n) <= 0;
    if (f === 'open' && isPaid) return false;
    if (f === 'paid' && !isPaid) return false;
    return !q || (sup(n.supplierId)?.name || '').toLowerCase().includes(q) || (n.number || '').toLowerCase().includes(q);
  }).sort((a, b) => b.date.localeCompare(a.date) || b.createdAt - a.createdAt);
  return ns.length ? list(ns.map(n => noteRow(n))) : `<div class="empty">${t('nothing')}</div>`;
}
function pageNotes() {
  const seg = ['open', 'paid', 'all'].map(f => `<button type="button" data-act="filter" data-f="${f}" class="${S.ui.filter === f ? 'on' : ''}">${t('f' + f[0].toUpperCase() + f.slice(1))}</button>`).join('');
  return `<div class="top"><h1>${t('tabNotes')}</h1></div>
    <input type="search" id="q" placeholder="${t('search')}" value="${esc(S.ui.q)}" style="margin-bottom:12px">
    <div class="seg">${seg}</div><div id="notes-list">${notesList()}</div>`;
}

function pageSuppliers() {
  const head = `<div class="top"><h1>${t('tabSuppliers')}</h1><button class="btn small" data-act="new-supplier">+ ${t('newSupplier')}</button></div>`;
  if (!S.suppliers.length) return head + `<div class="empty"><b>${t('noSuppliers')}</b>${t('noSuppliersText')}</div>`;
  const rows = S.suppliers.map(s => {
    const open = unpaid().filter(n => n.supplierId === s.id);
    return { s, owed: sumRest(open), count: open.length };
  }).sort((a, b) => b.owed - a.owed || a.s.name.localeCompare(b.s.name)).map(({ s, owed, count }) => `
    <a class="row" href="#/supplier/${s.id}"><div class="avatar">${esc(s.name.trim()[0]?.toUpperCase() || '?')}</div>
      <div class="row-main"><div class="row-title">${esc(s.name)}</div><div class="row-sub">${t('bons', count)} · ${t('fOpen').toLowerCase()}</div></div>
      <div class="row-end"><div class="amt">${money(owed)}</div></div></a>`);
  return head + list(rows);
}

function pageSupplier(id) {
  const s = sup(id);
  if (!s) return pageSuppliers();
  const ns = S.notes.filter(n => n.supplierId === id).sort((a, b) => (rest(b) > 0) - (rest(a) > 0) || byDue(a, b));
  return `<div class="top"><a class="back" href="#/suppliers" aria-label="Back">‹</a><h1>${esc(s.name)}</h1></div>
    <div class="card">
      <div class="kv total"><span>${t('owed')}</span><span>${money(sumRest(ns))}</span></div>
      <div class="kv"><span>${t('totalBought')}</span><span>${money(round2(ns.reduce((a, n) => a + n.total, 0)))}</span></div>
      ${s.phone ? `<div class="kv"><span>${t('phone')}</span><span>${esc(s.phone)}</span></div>` : ''}
      <div class="btns">
        ${s.phone ? `<a class="btn" href="tel:${esc(s.phone.replace(/[^\d+]/g, ''))}">${t('call')}</a>` : ''}
        <button class="btn" data-act="edit-supplier" data-id="${s.id}">${t('edit')}</button>
        <button class="btn danger" data-act="del-supplier" data-id="${s.id}">${t('del')}</button>
      </div>
    </div>
    <button class="btn primary block" data-act="new-note" data-supplier="${s.id}">+ ${t('newBon')}</button>
    ${ns.length ? `<div class="section">${t('tabNotes')}</div>` + list(ns.map(n => noteRow(n, false))) : ''}`;
}

function pageNote(id) {
  const n = S.notes.find(x => x.id === id);
  if (!n) return pageNotes();
  const s = sup(n.supplierId), p = paidOf(n), r = rest(n);
  const pays = [...n.payments].sort((a, b) => b.date.localeCompare(a.date));
  return `<div class="top"><a class="back" href="#/notes" data-act="back" aria-label="Back">‹</a>
      <h1><a href="#/supplier/${s?.id}">${esc(s?.name)}</a></h1>${chip(n)}</div>
    <p class="muted" style="margin:-10px 0 14px 50px">${bonLabel(n)} · ${fmtDate(n.date)}</p>
    ${n.photoIds.length ? `<div class="card"><div class="photos">${n.photoIds.map(pid => `<div class="ph"><img data-photo="${pid}" data-act="view" alt=""></div>`).join('')}</div></div>` : ''}
    <div class="card">
      <div class="kv total"><span>${t('remaining')}</span><span>${money(r)}</span></div>
      <div class="bar"><i style="width:${n.total ? Math.min(100, (p / n.total) * 100) : 0}%"></i></div>
      <div class="kv"><span>${t('alreadyPaid')}</span><span>${money(p)}</span></div>
      <div class="kv"><span>${t('total')}</span><span>${money(n.total)}</span></div>
      ${r > 0 ? `<div class="kv"><span>${t('dueDate')}</span><span>${n.due ? fmtDate(n.due) : t('noDate')}</span></div>` : ''}
      ${n.comment ? `<p class="note-text muted" style="margin-top:8px">${esc(n.comment)}</p>` : ''}
      ${r > 0 ? `<div class="btns"><button class="btn primary" data-act="pay" data-id="${n.id}">${t('addPayment')}</button></div>` : ''}
      ${r > 0 && n.due ? `<div class="btns"><button class="btn" data-act="ics" data-id="${n.id}">${t('calendar')}</button></div>` : ''}
    </div>
    <div class="section">${t('payments')}</div>
    ${pays.length ? list(pays.map(x => `<div class="row"><div class="row-main"><div class="row-title">${money(x.amount)}</div>
        <div class="row-sub">${fmtDate(x.date)}${x.comment ? ' · ' + esc(x.comment) : ''}</div></div>
        <button class="btn small danger" data-act="del-pay" data-id="${n.id}" data-pay="${x.id}" aria-label="${t('del')}">×</button></div>`))
      : `<p class="muted" style="margin:0 4px">${t('noPayments')}</p>`}
    <div class="btns"><button class="btn" data-act="edit-note" data-id="${n.id}">${t('edit')}</button>
      <button class="btn danger" data-act="del-note" data-id="${n.id}">${t('del')}</button></div>`;
}

function pageSettings() {
  const st = S.settings;
  const perm = 'Notification' in window ? Notification.permission : 'none';
  const leadOpt = [0, 1, 2, 3, 7].map(d => `<option value="${d}" ${st.lead === d ? 'selected' : ''}>${d ? t('dBefore', d) : t('sameDay')}</option>`).join('');
  return `<div class="top"><h1>${t('tabSettings')}</h1></div>
    <div class="card">
      <label style="margin-top:0">${t('language')}</label>
      <select id="set-lang"><option value="en" ${st.lang === 'en' ? 'selected' : ''}>English</option><option value="fr" ${st.lang === 'fr' ? 'selected' : ''}>Français</option></select>
      <label>${t('currency')}</label><input type="text" id="set-cur" value="${esc(st.currency)}" maxlength="6">
    </div>
    <div class="section">${t('reminders')}</div>
    <div class="card">
      <label style="margin-top:0">${t('remindWhen')}</label><select id="set-lead">${leadOpt}</select>
      <p class="muted" style="margin-top:12px">${perm === 'granted' ? t('notifOn') : perm === 'denied' ? t('notifDenied') : perm === 'none' ? t('notifNone') : ''}</p>
      ${perm === 'default' ? `<div class="btns"><button class="btn primary" data-act="notif">${t('enableNotif')}</button></div>` : ''}
      <p class="muted" style="margin-top:12px">${t('notifHelp')}</p>
    </div>
    <div class="section">${t('backup')}</div>
    <div class="card"><p class="muted">${t('backupHelp')}</p>
      <p class="muted" style="margin-top:8px">${t('lastBackup', st.lastBackup ? fmtDate(st.lastBackup) : t('never'))}</p>
      <div class="btns"><button class="btn primary" data-act="export">${t('exportBtn')}</button></div>
      <div class="btns"><button class="btn" data-act="import">${t('importBtn')}</button></div>
      <input type="file" id="import-file" accept="application/json,.json" class="hidden-input">
    </div>
    <div class="section">${t('install')}</div>
    <div class="card"><p class="muted">${t('installHelp')}</p></div>`;
}

/* ---------- Router ---------- */
let lastHash = null;
function render() {
  const [, page = 'home', id] = location.hash.split('/');
  const pages = { home: pageHome, notes: pageNotes, suppliers: pageSuppliers, settings: pageSettings, note: () => pageNote(id), supplier: () => pageSupplier(id) };
  $('#app').innerHTML = (pages[page] || pageHome)();
  const tab = page === 'note' ? 'notes' : page === 'supplier' ? 'suppliers' : pages[page] ? page : 'home';
  document.querySelectorAll('#nav a').forEach(a => a.classList.toggle('on', a.dataset.tab === tab));
  document.querySelectorAll('[data-t]').forEach(e => { e.textContent = t(e.dataset.t); });
  $('#fab').hidden = !['home', 'notes', 'suppliers'].includes(page);
  document.documentElement.lang = S.settings.lang;
  if (lastHash !== location.hash) { scrollTo(0, 0); lastHash = location.hash; }
  hydratePhotos();
  updateBadge();
}
addEventListener('hashchange', render);

/* ---------- Sheets (forms) ---------- */
const sheet = $('#sheet'), form = $('#sheet-form');
let onSubmit = null;
function openSheet(html, submit) {
  form.innerHTML = html + `<p class="err" id="err"></p><div class="btns"><button type="button" class="btn" data-act="close">${t('cancel')}</button><button class="btn primary">${t('save')}</button></div>`;
  onSubmit = submit;
  sheet.showModal();
  sheet.scrollTop = 0;
}
form.addEventListener('submit', async e => {
  e.preventDefault();
  const error = await onSubmit(Object.fromEntries(new FormData(form)));
  if (error) { $('#err').textContent = error; return; }
  sheet.close();
  render();
});

function noteForm(n, presetSupplier) {
  const photos = (n?.photoIds || []).map(id => ({ id }));
  const removed = [];
  const drawThumbs = () => {
    $('#thumbs').innerHTML = photos.map((p, i) => `<div class="ph"><img data-photo="${p.id}" alt=""><button type="button" class="rm" data-i="${i}" aria-label="${t('del')}">×</button></div>`).join('');
    hydratePhotos(form);
  };
  openSheet(`<h2>${n ? t('editBon') : t('newBon')}</h2>
    <div class="btns" style="margin-top:14px">
      <button type="button" class="btn" id="b-cam">📷 ${t('takePhoto')}</button>
      <button type="button" class="btn" id="b-gal">🖼 ${t('fromGallery')}</button>
    </div>
    <input type="file" id="f-cam" accept="image/*" capture="environment" class="hidden-input">
    <input type="file" id="f-gal" accept="image/*" multiple class="hidden-input">
    <div class="photos" id="thumbs" style="margin-top:12px"></div>
    <label>${t('supplier')}</label>
    <input type="text" name="supplier" list="sup-list" autocomplete="off" value="${esc(n ? sup(n.supplierId)?.name : sup(presetSupplier)?.name)}">
    <datalist id="sup-list">${S.suppliers.map(s => `<option value="${esc(s.name)}">`).join('')}</datalist>
    <div class="two">
      <div><label>${t('number')} (${t('optional')})</label><input type="text" name="number" value="${esc(n?.number)}"></div>
      <div><label>${t('date')}</label><input type="date" name="date" value="${n?.date || today()}"></div>
    </div>
    <div class="two">
      <div><label>${t('total')} (${esc(S.settings.currency)})</label><input type="text" inputmode="decimal" name="total" value="${n ? n.total : ''}"></div>
      ${n ? '<div></div>' : `<div><label>${t('advance')}</label><input type="text" inputmode="decimal" name="advance" placeholder="0"></div>`}
    </div>
    <label>${t('due')}</label><input type="date" name="due" value="${n?.due || ''}">
    <div class="quick">${[7, 15, 30].map(d => `<button type="button" data-days="${d}">${t('days', d)}</button>`).join('')}</div>
    <label>${t('comment')} (${t('optional')})</label><textarea name="comment">${esc(n?.comment)}</textarea>`,
  async v => {
    const name = v.supplier.trim(), total = num(v.total), adv = v.advance ? num(v.advance) : 0;
    if (!name) return t('errSupplier');
    if (!(total > 0)) return t('errTotal');
    if (isNaN(adv) || adv > total) return t('errAdvance');
    if (n && total < paidOf(n)) return t('errBelowPaid', money(paidOf(n)));
    let s = findSupplier(name);
    if (!s) { s = { id: uid(), name, phone: '' }; await saveSupplier(s); }
    for (const p of photos) if (p.blob) await dbPut('photos', { id: p.id, blob: p.blob });
    for (const id of removed) await dbDel('photos', id);
    const note = n || { id: uid(), payments: [], createdAt: Date.now() };
    Object.assign(note, { supplierId: s.id, number: v.number.trim(), date: v.date || today(), total, due: v.due || '', comment: v.comment.trim(), photoIds: photos.map(p => p.id) });
    if (!n && adv > 0) note.payments.push({ id: uid(), date: note.date, amount: adv, comment: t('advanceLabel') });
    await saveNote(note);
    if (!n) location.hash = '#/note/' + note.id;
  });
  drawThumbs();
  $('#b-cam').onclick = () => $('#f-cam').click();
  $('#b-gal').onclick = () => $('#f-gal').click();
  const add = async e => {
    for (const f of e.target.files) {
      const blob = await shrink(f), id = uid();
      photoURL.set(id, URL.createObjectURL(blob));
      photos.push({ id, blob });
    }
    e.target.value = '';
    drawThumbs();
  };
  $('#f-cam').onchange = add; $('#f-gal').onchange = add;
  $('#thumbs').onclick = e => {
    const b = e.target.closest('.rm'); if (!b) return;
    const [p] = photos.splice(+b.dataset.i, 1);
    if (!p.blob) removed.push(p.id);
    drawThumbs();
  };
  form.querySelector('.quick').onclick = e => {
    const d = e.target.dataset.days; if (!d) return;
    form.elements.due.value = addDays(form.elements.date.value || today(), +d);
  };
}

function payForm(n) {
  const r = rest(n);
  openSheet(`<h2>${t('addPayment')}</h2>
    <p class="muted" style="margin-top:4px">${esc(sup(n.supplierId)?.name)} · ${t('remaining')}: <b>${money(r)}</b></p>
    <label>${t('amount')} (${esc(S.settings.currency)})</label><input type="text" inputmode="decimal" name="amount" autofocus>
    <div class="quick"><button type="button" id="pay-all">${t('payAll')} (${money(r)})</button></div>
    <label>${t('date')}</label><input type="date" name="date" value="${today()}">
    <label>${t('nextDue')}</label><input type="date" name="due" value="${n.due || ''}">
    <label>${t('comment')} (${t('optional')})</label><input type="text" name="comment">`,
  async v => {
    const amount = num(v.amount);
    if (!(amount > 0)) return t('errAmount');
    if (amount > r) return t('errTooMuch', money(r));
    n.payments.push({ id: uid(), date: v.date || today(), amount, comment: v.comment.trim() });
    n.due = v.due || '';
    await saveNote(n);
  });
  $('#pay-all').onclick = () => { form.elements.amount.value = r; };
}

function supplierForm(s) {
  openSheet(`<h2>${s ? t('editSupplier') : t('newSupplier')}</h2>
    <label>${t('name')}</label><input type="text" name="name" value="${esc(s?.name)}">
    <label>${t('phone')} (${t('optional')})</label><input type="tel" name="phone" value="${esc(s?.phone)}">`,
  async v => {
    const name = v.name.trim();
    if (!name) return t('errName');
    const other = findSupplier(name);
    if (other && other.id !== s?.id) return t('errDup');
    await saveSupplier({ ...(s || { id: uid() }), name, phone: v.phone.trim() });
  });
}

/* ---------- Reminders ---------- */
const dueNow = () => unpaid().filter(n => n.due && n.due <= addDays(today(), S.settings.lead));
function updateBadge() {
  const c = dueNow().length;
  if (navigator.setAppBadge) (c ? navigator.setAppBadge(c) : navigator.clearAppBadge()).catch(() => {});
}
async function checkReminders() {
  if (!('Notification' in window) || Notification.permission !== 'granted' || !navigator.serviceWorker) return;
  if (S.settings.lastNotified === today()) return;
  const due = dueNow();
  if (!due.length) return;
  const late = due.filter(n => n.due < today()).length;
  const reg = await navigator.serviceWorker.ready;
  await reg.showNotification(t('nTitle'), {
    body: t('nBody', due.length, money(sumRest(due))) + (late ? ' · ' + t('nLate', late) : ''),
    icon: 'icons/icon-192.png', badge: 'icons/icon-192.png', tag: 'due',
  });
  S.settings.lastNotified = today();
  saveSettings();
}
async function enableNotifications() {
  await Notification.requestPermission();
  try {
    const reg = await navigator.serviceWorker.ready;
    if (reg.periodicSync) await reg.periodicSync.register('due-check', { minInterval: 12 * 3600 * 1000 });
  } catch { /* background checks are not available on this browser */ }
  render();
  checkReminders();
}
function downloadFile(name, type, content) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([content], { type }));
  a.download = name;
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 10000);
}
function exportICS(n) {
  const d = s => s.replace(/-/g, '');
  const text = s => String(s).replace(/[\\;,]/g, m => '\\' + m).replace(/\n/g, '\\n');
  const title = text(t('icsTitle', sup(n.supplierId)?.name, money(rest(n))));
  const alarm = S.settings.lead ? `-PT${S.settings.lead * 24 - 9}H` : 'PT9H';
  const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Glamour Bons//EN', 'BEGIN:VEVENT',
    `UID:${n.id}-${n.due}@glamour-bons`, `DTSTAMP:${new Date().toISOString().replace(/[-:]|\.\d+/g, '')}`,
    `DTSTART;VALUE=DATE:${d(n.due)}`, `DTEND;VALUE=DATE:${d(addDays(n.due, 1))}`, `SUMMARY:${title}`,
    `DESCRIPTION:${text(bonLabel(n) + ' · ' + fmtDate(n.date))}`,
    'BEGIN:VALARM', 'ACTION:DISPLAY', `DESCRIPTION:${title}`, `TRIGGER:${alarm}`, 'END:VALARM',
    ...(S.settings.lead ? ['BEGIN:VALARM', 'ACTION:DISPLAY', `DESCRIPTION:${title}`, 'TRIGGER:PT9H', 'END:VALARM'] : []),
    'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
  downloadFile(`glamour-${n.due}.ics`, 'text/calendar', ics);
}

/* ---------- Backup ---------- */
async function exportBackup() {
  const photos = [];
  for (const p of await dbAll('photos')) photos.push({ id: p.id, data: await blobToDataURL(p.blob) });
  S.settings.lastBackup = today();
  await saveSettings();
  downloadFile(`glamour-backup-${today()}.json`, 'application/json',
    JSON.stringify({ app: 'glamour-bons', version: 1, exportedAt: new Date().toISOString(), settings: S.settings, suppliers: S.suppliers, notes: S.notes, photos }));
  render();
}
async function importBackup(file) {
  let data;
  try { data = JSON.parse(await file.text()); } catch { data = null; }
  if (!data || data.app !== 'glamour-bons' || !Array.isArray(data.notes) || !Array.isArray(data.suppliers)) return alert(t('importBad'));
  if (!confirm(t('confirmImport', data.notes.length))) return;
  for (const s of ['suppliers', 'notes', 'photos']) await dbClear(s);
  for (const s of data.suppliers) await dbPut('suppliers', s);
  for (const n of data.notes) await dbPut('notes', n);
  for (const p of data.photos || []) await dbPut('photos', { id: p.id, blob: await dataURLToBlob(p.data) });
  S.suppliers = data.suppliers; S.notes = data.notes;
  photoURL.clear();
  alert(t('importDone'));
  location.hash = '#/home';
  render();
}

/* ---------- Events ---------- */
document.addEventListener('click', async e => {
  const el = e.target.closest('[data-act]');
  if (!el) return;
  const act = el.dataset.act, note = S.notes.find(n => n.id === el.dataset.id);
  switch (act) {
    case 'new-note': {
      const [, page, id] = location.hash.split('/');
      if (page === 'suppliers') supplierForm(); else noteForm(null, el.dataset.supplier || (page === 'supplier' ? id : null));
      break;
    }
    case 'edit-note': noteForm(note); break;
    case 'del-note': if (confirm(t('confirmDelBon'))) { await deleteNote(note); location.hash = '#/notes'; } break;
    case 'pay': payForm(note); break;
    case 'del-pay': if (confirm(t('confirmDelPay'))) { note.payments = note.payments.filter(p => p.id !== el.dataset.pay); await saveNote(note); render(); } break;
    case 'ics': exportICS(note); break;
    case 'back': if (history.length > 1) { e.preventDefault(); history.back(); } break;
    case 'view': $('#viewer img').src = el.src; $('#viewer').showModal(); break;
    case 'close-viewer': $('#viewer').close(); break;
    case 'close': sheet.close(); break;
    case 'filter': S.ui.filter = el.dataset.f; render(); break;
    case 'new-supplier': supplierForm(); break;
    case 'edit-supplier': supplierForm(sup(el.dataset.id)); break;
    case 'del-supplier':
      if (S.notes.some(n => n.supplierId === el.dataset.id)) { alert(t('supHasNotes')); break; }
      if (confirm(t('confirmDelSup'))) { await dbDel('suppliers', el.dataset.id); S.suppliers = S.suppliers.filter(s => s.id !== el.dataset.id); location.hash = '#/suppliers'; }
      break;
    case 'notif': enableNotifications(); break;
    case 'export': exportBackup(); break;
    case 'import': $('#import-file').click(); break;
  }
});
document.addEventListener('input', e => {
  if (e.target.id === 'q') { S.ui.q = e.target.value; $('#notes-list').innerHTML = notesList(); }
});
document.addEventListener('change', async e => {
  const id = e.target.id;
  if (id === 'set-lang') S.settings.lang = e.target.value;
  else if (id === 'set-cur') S.settings.currency = e.target.value.trim() || 'DA';
  else if (id === 'set-lead') S.settings.lead = +e.target.value;
  else if (id === 'import-file') { if (e.target.files[0]) await importBackup(e.target.files[0]); return; }
  else return;
  await saveSettings();
  render();
});
document.addEventListener('visibilitychange', () => { if (!document.hidden && db) { render(); checkReminders(); } });

/* ---------- Start ---------- */
(async function start() {
  db = await openDB();
  const [suppliers, notes, settings] = await Promise.all([dbAll('suppliers'), dbAll('notes'), dbGet('meta', 'settings')]);
  S.suppliers = suppliers; S.notes = notes;
  if (settings) Object.assign(S.settings, settings); else await saveSettings();
  render();
  if (navigator.storage?.persist) navigator.storage.persist();
  if ('serviceWorker' in navigator) {
    try { await navigator.serviceWorker.register('sw.js'); checkReminders(); } catch { /* offline mode unavailable */ }
  }
})();
