/* Accounts and sync (Firebase). The app keeps working from localStorage as before;
   this layer mirrors every gs-* key to the signed-in user's Firestore space and
   pulls newer copies from other devices. If Firebase cannot load (offline), the app
   simply runs device-only. */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult,
  sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, signOut } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore, collection, doc, getDocs, setDoc, deleteDoc, onSnapshot } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const app = initializeApp({
  apiKey: 'AIzaSyDMZX-H7vz_b5hG0qRLHJSCB3LBvJsFOnY',
  authDomain: 'gentle-start-65b43.firebaseapp.com',
  projectId: 'gentle-start-65b43',
  storageBucket: 'gentle-start-65b43.firebasestorage.app',
  messagingSenderId: '282272351023',
  appId: '1:282272351023:web:c1cec623ba6c05c3ec17da'
});
const auth = getAuth(app), db = getFirestore(app);

const META = 'gs-sync-meta';            // { key: lastWriteTime } for this device
const DIRTY = 'gs-sync-dirty';          // keys changed locally and not yet uploaded
const SKIP = { 'gs-sync-meta':1, 'gs-sync-dirty':1, 'gs-sync-email':1, 'gs-sync-pushall':1, 'gs-sync-uid':1, 'gs-tour-snap':1, 'gs-tour':1, 'gs-tour-new':1, 'gs-gosetup':1 };
/* during the tour the app holds practice data, so nothing goes up or comes down until it ends */
const touring = () => { try { return !!localStorage.getItem('gs-tour-snap') } catch (e) { return false } };
const rd = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } };
const wr = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)) } catch (e) {} };
const syncable = k => k && k.indexOf('gs-') === 0 && !SKIP[k];

const state = { ready: false, user: null, email: '', status: 'off', last: 0, error: '' };
let unsub = null, timer = null, pendingReload = false, applying = false;

function ui() { try { window.gsSyncChanged && window.gsSyncChanged() } catch (e) {} }
function setStatus(s, err) { state.status = s; state.error = err || ''; if (s === 'synced') state.last = Date.now(); ui() }

/* local edits -> upload (debounced) */
function touch(k) {
  if (!syncable(k) || applying || touring()) return;
  const m = rd(META, {}); m[k] = Date.now(); wr(META, m);
  const d = rd(DIRTY, {}); d[k] = 1; wr(DIRTY, d);
  if (state.user) { clearTimeout(timer); timer = setTimeout(flush, 1200); setStatus('pending') }
}
async function flush() {
  if (!state.user || touring()) return;
  const d = rd(DIRTY, {}), keys = Object.keys(d); if (!keys.length) { setStatus('synced'); return }
  setStatus('syncing');
  const m = rd(META, {}), uid = state.user.uid;
  try {
    for (const k of keys) {
      const v = localStorage.getItem(k), ref = doc(db, 'users', uid, 'data', k);
      if (v === null) await deleteDoc(ref); else await setDoc(ref, { v: v, t: m[k] || Date.now() });
      const dd = rd(DIRTY, {}); delete dd[k]; wr(DIRTY, dd);
    }
    setStatus('synced');
  } catch (e) { setStatus('error', 'Could not reach your account. Changes are kept and will upload later.') }
}

/* remote -> local */
function applyRemote(docs, first) {
  if (touring()) return false;
  const m = rd(META, {}), d = rd(DIRTY, {}); let changed = false;
  applying = true;
  docs.forEach(x => {
    const k = x.id, r = x.data(); if (!syncable(k) || !r) return;
    const lt = m[k] || 0;
    if (r.t > lt && !d[k]) { if (localStorage.getItem(k) !== r.v) { localStorage.setItem(k, r.v); changed = true } m[k] = r.t }
    else if (first && r.t < lt) { d[k] = 1 }
  });
  applying = false;
  wr(META, m); wr(DIRTY, d);
  return changed;
}
function reloadSoon() {
  pendingReload = true;
  const busy = () => document.querySelector('.backdrop') || (document.activeElement && /INPUT|TEXTAREA/.test(document.activeElement.tagName));
  const go = () => { if (!pendingReload) return; if (busy() && !document.hidden) { setTimeout(go, 1500); return } location.reload() };
  setTimeout(go, 300);
}

async function startSync(user) {
  if (touring()) { setStatus('paused'); return }
  setStatus('syncing');
  const uid = user.uid, prevUid = localStorage.getItem('gs-sync-uid');
  try {
    const col = collection(db, 'users', uid, 'data');
    const snap = await getDocs(col);
    if (prevUid !== uid) {
      /* first sign-in on this device: anything here that the account lacks gets uploaded */
      const remoteKeys = {}; snap.forEach(x => remoteKeys[x.id] = 1);
      const d = rd(DIRTY, {}), m = rd(META, {});
      for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (syncable(k) && !remoteKeys[k]) { d[k] = 1; if (!m[k]) m[k] = 1 } }
      wr(DIRTY, d); wr(META, m);
      localStorage.setItem('gs-sync-uid', uid);
    }
    if (localStorage.getItem('gs-sync-pushall')) {
      const d = rd(DIRTY, {}), m = rd(META, {}), now = Date.now();
      for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (syncable(k)) { d[k] = 1; m[k] = now } }
      wr(DIRTY, d); wr(META, m); localStorage.removeItem('gs-sync-pushall');
    }
    const changed = applyRemote(snap.docs, true);
    await flush();
    if (changed) { reloadSoon(); return }
    if (unsub) unsub();
    unsub = onSnapshot(col, s => {
      if (s.metadata.hasPendingWrites) return;
      if (applyRemote(s.docs, false)) reloadSoon();
    }, () => setStatus('error', 'Live updates paused. They will resume when you reconnect.'));
  } catch (e) { setStatus('error', 'Could not reach your account right now. The app keeps working on this device.') }
}

onAuthStateChanged(auth, user => {
  state.ready = true; state.user = user; state.email = user ? (user.email || '') : '';
  if (unsub) { unsub(); unsub = null }
  if (user) startSync(user); else setStatus('off');
});

/* finish an email-link sign-in */
if (isSignInWithEmailLink(auth, location.href)) {
  let email = localStorage.getItem('gs-sync-email') || window.prompt('Which email did you use to sign in?');
  if (email) signInWithEmailLink(auth, email, location.href)
    .then(() => { localStorage.removeItem('gs-sync-email'); history.replaceState(null, '', location.pathname) })
    .catch(() => { state.error = 'That sign-in link has expired or was already used. Send a new one.'; ui() });
}
getRedirectResult(auth).catch(e => { state.error = 'Google sign-in did not finish. Try again, or use an email link.'; ui() });

window.addEventListener('online', () => flush());
document.addEventListener('visibilitychange', () => { if (!document.hidden) flush() });

window.GSSync = {
  state,
  touch,
  async google() {
    state.error = ''; ui();
    const p = new GoogleAuthProvider();
    try { await signInWithPopup(auth, p) }
    catch (e) {
      if (e && (e.code === 'auth/popup-blocked' || e.code === 'auth/operation-not-supported-in-this-environment')) { try { await signInWithRedirect(auth, p) } catch (e2) {} }
      else if (e && e.code !== 'auth/popup-closed-by-user' && e.code !== 'auth/cancelled-popup-request') { state.error = 'Google sign-in did not work here. Try the email link instead.'; ui() }
    }
  },
  async emailLink(email) {
    state.error = ''; ui();
    try {
      await sendSignInLinkToEmail(auth, email, { url: location.origin + location.pathname, handleCodeInApp: true });
      localStorage.setItem('gs-sync-email', email); state.sent = email; ui();
    } catch (e) { state.error = 'Could not send the link. Check the address and try again.'; ui() }
  },
  async signOut() { await flush(); await signOut(auth); localStorage.removeItem('gs-sync-uid') },
  flush,
  async publishLive(id, body) {
    if (!state.user) return;
    try { await setDoc(doc(db, 'shares', id), { owner: state.user.uid, n: body.n || '', d: body.d || [], up: Date.now() }) } catch (e) {}
  },
  watchLive(id, cb) {
    return onSnapshot(doc(db, 'shares', id), s => cb(s.exists() ? s.data() : null), () => cb(null));
  }
};
ui();
