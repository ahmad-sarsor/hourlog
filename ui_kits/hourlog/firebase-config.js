/* ============================================================
   HourLog IL — Firebase bootstrap (compat build, no bundler)
   Loaded as a plain <script> after the firebase-*-compat CDN
   scripts. Exposes window.HLFB = { app, auth, db }.

   NOTE: the apiKey here is NOT a secret — it only identifies the
   Firebase project. Real access control lives in Firebase Auth +
   the Firestore security rules (see FIREBASE_SETUP.md). Safe to
   keep in a public repo.
   ============================================================ */
(function () {
  var firebaseConfig = {
    apiKey: 'AIzaSyAhnyb6m_Kw0A0-7Iwx2cOI5kOpP0Qykis',
    authDomain: 'hourlog-70cbd.firebaseapp.com',
    projectId: 'hourlog-70cbd',
    storageBucket: 'hourlog-70cbd.firebasestorage.app',
    messagingSenderId: '822022684992',
    appId: '1:822022684992:web:045335a6473afba0b27aa5',
    measurementId: 'G-EWBWD8SBY5'
  };

  if (typeof firebase === 'undefined') {
    console.error('[HourLog] Firebase SDK failed to load (check the CDN <script> tags).');
    return;
  }

  var app = firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth();
  var db = firebase.firestore();

  // Keep the session across refreshes / tabs.
  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(function (e) {
    console.warn('[HourLog] could not set auth persistence:', e && e.message);
  });

  window.HLFB = { app: app, auth: auth, db: db };
})();
