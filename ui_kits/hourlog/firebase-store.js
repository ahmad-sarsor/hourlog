/* ============================================================
   HourLog IL — Firestore data store
   Thin wrapper around Firebase Auth + Firestore so the React app
   never touches the SDK directly. Exposes window.HLStore.

   Data model (per user, isolated by the security rules):
     users/{uid}/entries/{autoId}   one time-entry per doc
     users/{uid}/meta/settings      single settings document
   ============================================================ */
(function () {
  if (!window.HLFB) {
    console.error('[HourLog] HLFB missing — firebase-config.js did not run.');
    return;
  }
  var auth = window.HLFB.auth;
  var db = window.HLFB.db;

  function entriesCol(uid) { return db.collection('users').doc(uid).collection('entries'); }
  function settingsDoc(uid) { return db.collection('users').doc(uid).collection('meta').doc('settings'); }

  // strip undefined values — Firestore rejects them
  function clean(obj) {
    var out = {};
    Object.keys(obj).forEach(function (k) {
      if (obj[k] !== undefined && k[0] !== '_' && k !== 'id') out[k] = obj[k];
    });
    return out;
  }

  // Apply write ops (each: function(batch){...}) in size-bounded chunks,
  // committing sequentially. Keeps us safely under any per-commit ceiling.
  var MAX_BATCH = 450;
  function commitChunked(ops) {
    var chunks = [];
    for (var i = 0; i < ops.length; i += MAX_BATCH) chunks.push(ops.slice(i, i + MAX_BATCH));
    return chunks.reduce(function (p, chunk) {
      return p.then(function () {
        var batch = db.batch();
        chunk.forEach(function (op) { op(batch); });
        return batch.commit();
      });
    }, Promise.resolve());
  }

  var Store = {
    // ---- auth ------------------------------------------------
    onAuth: function (cb) { return auth.onAuthStateChanged(cb); },
    login: function (email, password) { return auth.signInWithEmailAndPassword(email, password); },
    signup: function (email, password) { return auth.createUserWithEmailAndPassword(email, password); },
    resetPassword: function (email) { return auth.sendPasswordResetEmail(email); },
    logout: function () { return auth.signOut(); },
    currentUser: function () { return auth.currentUser; },

    // ---- entries (real-time) ---------------------------------
    subscribeEntries: function (uid, cb, onErr) {
      return entriesCol(uid).onSnapshot(function (snap) {
        var list = [];
        snap.forEach(function (doc) {
          var d = doc.data() || {};
          list.push({
            id: doc.id,
            date: d.date || '',
            client: d.client || '',
            description: d.description || '',
            location: d.location || '',
            startTime: d.startTime || '',
            endTime: d.endTime || '',
            hours: typeof d.hours === 'number' ? d.hours : (+d.hours || 0),
            rate: typeof d.rate === 'number' ? d.rate : (+d.rate || 0)
          });
        });
        cb(list);
      }, function (err) {
        console.error('[HourLog] entries listener error:', err && err.message);
        if (onErr) onErr(err);
      });
    },
    addEntry: function (uid, entry) {
      var data = clean(entry);
      data.createdAt = firebase.firestore.FieldValue.serverTimestamp();
      return entriesCol(uid).add(data).then(function (ref) { return ref.id; });
    },
    updateEntry: function (uid, id, patch) { return entriesCol(uid).doc(id).update(clean(patch)); },
    deleteEntry: function (uid, id) { return entriesCol(uid).doc(id).delete(); },

    // ---- settings (real-time) --------------------------------
    subscribeSettings: function (uid, cb, onErr) {
      return settingsDoc(uid).onSnapshot(function (doc) {
        cb(doc.exists ? doc.data() : null);
      }, function (err) {
        console.error('[HourLog] settings listener error:', err && err.message);
        if (onErr) onErr(err);
      });
    },
    saveSettings: function (uid, settings) { return settingsDoc(uid).set(clean(settings), { merge: true }); },
    seedSettingsIfMissing: function (uid, defaults) {
      var ref = settingsDoc(uid);
      return ref.get().then(function (doc) {
        if (!doc.exists) return ref.set(clean(defaults));
      });
    },

    // ---- danger: wipe everything for this user ---------------
    resetAll: function (uid, defaults) {
      return entriesCol(uid).get().then(function (snap) {
        var ops = [];
        snap.forEach(function (doc) { var ref = doc.ref; ops.push(function (batch) { batch.delete(ref); }); });
        ops.push(function (batch) { batch.set(settingsDoc(uid), clean(defaults)); });
        return commitChunked(ops);
      });
    }
  };

  window.HLStore = Store;
})();
