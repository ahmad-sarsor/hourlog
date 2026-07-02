/* ============================================================
   HourLog IL — UI kit · interactive app (Firebase-backed)
   Auth gate + live Firestore state: add / toggle / delete
   records, edit settings, filter by month & client, and preview
   the three exported documents. Mounts to #hl-root.
   ============================================================ */
(function () {
const { AppHeader, AddHoursForm, ClockPanel, FilterPanel, SummaryPanel, ExportPanel, RecordsTable,
        HoursReportDoc, InvoiceDoc, SettingsModal } = window;
const DS = window.HourLogILDesignSystem_d9be1f;
if (!window.HL || !AppHeader || !DS) return; // deps missing — skip quietly
const { Button, Card, Input } = DS;
const H = window.HL;
const Store = window.HLStore;
const HLExport = window.HLExport;

const HE_MONTHS = ['ינואר','פברואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'];
const monthLabel = (ym) => { const p = ym.split('-'); return HE_MONTHS[(+p[1]) - 1] + ' ' + p[0]; };
const PAGE = 10;

/* ---- Auth screen (sign in / sign up / reset) ------------ */
const tabWrapStyle = { display: 'flex', gap: 5, background: 'var(--surface-hover, #eef2f6)', padding: 4, borderRadius: 'var(--radius-lg, 12px)', marginBottom: 16 };
const tabStyle = (active) => ({ flex: 1, padding: '9px 0', border: 'none', cursor: 'pointer', borderRadius: 'var(--radius-md, 8px)', fontFamily: 'inherit', fontWeight: 600, fontSize: 14, background: active ? '#fff' : 'transparent', color: active ? 'var(--ink, #16202a)' : 'var(--ink-2, #5b6b7a)', boxShadow: active ? 'var(--shadow-card, 0 1px 3px rgba(20,30,40,.12))' : 'none', transition: 'var(--transition, .15s)' });
const linkStyle = { color: 'var(--accent, #12a37f)', textDecoration: 'none', fontWeight: 600, cursor: 'pointer' };

function AuthScreen({ onSignIn, onSignUp, onReset, onClearMessages, busy, error, info }) {
  const [mode, setMode] = React.useState('signin'); // signin | signup
  const [email, setEmail] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [pw2, setPw2] = React.useState('');
  const [bizName, setBizName] = React.useState('');
  const [localErr, setLocalErr] = React.useState('');
  const isSignup = mode === 'signup';

  const switchMode = (m) => { setMode(m); setLocalErr(''); setPw(''); setPw2(''); setBizName(''); if (onClearMessages) onClearMessages(); };
  const submit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setLocalErr('');
    const em = email.trim();
    if (busy || !em || !pw) return;
    if (isSignup) {
      if (pw.length < 6) { setLocalErr('הסיסמה חייבת להכיל לפחות 6 תווים.'); return; }
      if (pw !== pw2) { setLocalErr('הסיסמאות אינן תואמות.'); return; }
      onSignUp(em, pw, bizName.trim());
    } else {
      onSignIn(em, pw);
    }
  };
  const doReset = () => {
    setLocalErr('');
    const em = email.trim();
    if (!em) { setLocalErr('הזן את כתובת האימייל שלך למעלה, ואז לחץ שוב לשחזור.'); return; }
    onReset(em);
  };
  const msg = localErr || error;

  return (
    <div className="tt-root">
      <div style={{ maxWidth: 420, margin: '8vh auto 0', padding: '0 20px' }}>
        <div className="tt-head" style={{ marginBottom: 18 }}>
          <div className="brand">
            <div className="brand-mark">₪</div>
            <div>
              <div className="brand-name">HourLog IL</div>
              <div className="brand-sub">דיווח שעות והפקת חשבוניות</div>
            </div>
          </div>
        </div>
        <Card title={isSignup ? 'יצירת חשבון חדש' : 'התחברות למערכת'}>
          <div style={tabWrapStyle}>
            <button type="button" style={tabStyle(!isSignup)} onClick={() => switchMode('signin')}>כניסה</button>
            <button type="button" style={tabStyle(isSignup)} onClick={() => switchMode('signup')}>הרשמה</button>
          </div>
          <form onSubmit={submit}>
            <Input label="אימייל" type="email" value={email} autoComplete="username"
                   placeholder="you@example.com" onChange={(e) => setEmail(e.target.value)} />
            <div style={{ height: 12 }} />
            <Input label="סיסמה" type="password" value={pw}
                   autoComplete={isSignup ? 'new-password' : 'current-password'}
                   onChange={(e) => setPw(e.target.value)} />
            {isSignup ? (
              <div>
                <div style={{ height: 12 }} />
                <Input label="אימות סיסמה" type="password" value={pw2} autoComplete="new-password"
                       onChange={(e) => setPw2(e.target.value)} />
                <div style={{ height: 12 }} />
                <Input label="שם העסק" value={bizName} placeholder="למשל: הסטודיו שלי (ניתן לשנות בהמשך)"
                       onChange={(e) => setBizName(e.target.value)} />
              </div>
            ) : null}
            {msg ? <p className="form-note" style={{ color: '#c0392b', marginTop: 10 }}>{msg}</p> : null}
            {info && !msg ? <p className="form-note" style={{ color: 'var(--accent, #12a37f)', marginTop: 10 }}>{info}</p> : null}
            <div className="form-actions" style={{ marginTop: 16 }}>
              <Button variant="primary" type="submit" icon="→" block
                      disabled={busy || !email.trim() || !pw || (isSignup && !pw2)}>
                {busy ? '…' : (isSignup ? 'יצירת חשבון' : 'כניסה')}
              </Button>
            </div>
          </form>
          {!isSignup ? (
            <p className="form-note" style={{ marginTop: 12 }}>
              <a style={linkStyle} onClick={doReset}>שכחת סיסמה?</a>
            </p>
          ) : null}
          <p className="form-note" style={{ marginTop: 10 }}>
            {isSignup ? 'כבר יש לך חשבון? ' : 'אין לך חשבון עדיין? '}
            <a style={linkStyle} onClick={() => switchMode(isSignup ? 'signin' : 'signup')}>
              {isSignup ? 'התחבר כאן' : 'הירשם כאן'}
            </a>
          </p>
          <p className="form-note" style={{ marginTop: 12, borderTop: '1px solid var(--line, #e3e9ef)', paddingTop: 12 }}>
            הגישה למערכת דורשת התחברות. לכל משתמש נתונים והגדרות פרטיים משלו, שמורים בענן ומסונכרנים בין המכשירים שלו.
          </p>
        </Card>
      </div>
    </div>
  );
}

function HourLogApp() {
  // ---- auth ----
  const [user, setUser] = React.useState(null);
  const [authReady, setAuthReady] = React.useState(false);
  const [loginBusy, setLoginBusy] = React.useState(false);
  const [loginErr, setLoginErr] = React.useState('');
  const [authInfo, setAuthInfo] = React.useState('');

  // ---- data ----
  const [entries, setEntries] = React.useState([]);
  const [settingsData, setSettingsData] = React.useState(null);
  const [dataReady, setDataReady] = React.useState(false);
  const [settingsReady, setSettingsReady] = React.useState(false);
  const [dataErr, setDataErr] = React.useState('');
  const [flashIds, setFlashIds] = React.useState(() => new Set());

  // ---- view ----
  const [month, setMonth] = React.useState('all');
  const [client, setClient] = React.useState('all');
  const [showAll, setShowAll] = React.useState(false);
  const [view, setView] = React.useState('app'); // app | manager | client | invoice
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [activeSession, setActiveSession] = React.useState(null);
  const docRef = React.useRef(null);
  const pendingBizRef = React.useRef(''); // business name captured at sign-up, folded into the first seed

  const settings = React.useMemo(() => Object.assign({}, H.settings, settingsData || {}), [settingsData]);
  const uid = user ? user.uid : null;

  // subscribe to auth once
  React.useEffect(() => {
    if (!Store) { setAuthReady(true); return; }
    return Store.onAuth((u) => { setUser(u || null); setAuthReady(true); });
  }, []);

  // subscribe to this user's data while logged in
  React.useEffect(() => {
    if (!Store || !uid) { setEntries([]); setSettingsData(null); setDataReady(false); setSettingsReady(false); return; }
    setDataReady(false); setSettingsReady(false); setDataErr('');
    Store.seedSettingsIfMissing(uid, Object.assign({}, H.settings, pendingBizRef.current ? { businessName: pendingBizRef.current } : {}))
      .then(() => { pendingBizRef.current = ''; })
      .catch((e) => console.warn('seed settings:', e && e.message));
    const unsubE = Store.subscribeEntries(uid, (list) => { setEntries(list); setDataReady(true); },
      (err) => { setDataReady(true); setDataErr(err && err.code === 'permission-denied'
        ? 'אין הרשאת גישה — ודא שחוקי ה-Firestore הוגדרו (ראה FIREBASE_SETUP.md).'
        : 'שגיאת טעינת נתונים: ' + (err && err.message)); });
    const unsubS = Store.subscribeSettings(uid, (s) => { setSettingsData(s); setSettingsReady(true); }, () => setSettingsReady(true));
    return () => { unsubE && unsubE(); unsubS && unsubS(); };
  }, [uid]);

  // restore an in-progress clock-in session for this user (device-local)
  React.useEffect(() => {
    if (!uid) { setActiveSession(null); return; }
    try { const raw = window.localStorage.getItem('hl_active_' + uid); setActiveSession(raw ? JSON.parse(raw) : null); }
    catch (e) { setActiveSession(null); }
  }, [uid]);

  // derived
  const months = React.useMemo(() => {
    const s = {}; entries.forEach((e) => { if (e.date) s[e.date.slice(0, 7)] = 1; });
    const list = Object.keys(s).sort().reverse().map((m) => ({ value: m, label: monthLabel(m) }));
    return [{ value: 'all', label: 'כל החודשים' }].concat(list);
  }, [entries]);
  const clients = React.useMemo(() => {
    const s = {}; entries.forEach((e) => { if (e.client) s[e.client] = 1; });
    const list = Object.keys(s).sort().map((c) => ({ value: c, label: c }));
    return [{ value: 'all', label: 'כל הלקוחות' }].concat(list);
  }, [entries]);

  const rows = React.useMemo(() => entries
    .filter((e) => (month === 'all' || e.date.slice(0, 7) === month) && (client === 'all' || e.client === client))
    .map((e) => (flashIds.has(e.id) ? Object.assign({}, e, { _new: true }) : e))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)), [entries, month, client, flashIds]);

  const totals = React.useMemo(() => {
    let hrs = 0, sub = 0;
    rows.forEach((e) => { hrs += +e.hours; sub += e.hours * e.rate; });
    hrs = H.round2(hrs); sub = H.round2(sub);
    const vat = H.round2(sub * settings.vatRate / 100);
    return { hours: hrs, subtotal: sub, vat, total: H.round2(sub + vat) };
  }, [rows, settings.vatRate]);

  const unreported = rows.filter((e) => !e.reported).length;
  const period = React.useMemo(() => {
    if (!rows.length) return { from: '', to: '' };
    const d = rows.map((e) => e.date).sort();
    return { from: d[0], to: d[d.length - 1] };
  }, [rows]);
  const periodTxt = month === 'all' ? 'כל התקופות' : monthLabel(month);

  // ---- flash helper ----
  const flashOn = (id) => {
    setFlashIds((s) => { const n = new Set(s); n.add(id); return n; });
    setTimeout(() => setFlashIds((s) => { const n = new Set(s); n.delete(id); return n; }), 450);
  };
  const fail = (label) => (err) => { console.error(label, err); alert(label + ': ' + (err && err.message ? err.message : err)); };

  // ---- actions (write to Firestore; the live listener updates the UI) ----
  const addEntry = (e) => {
    if (!uid) return;
    Store.addEntry(uid, e).then((id) => flashOn(id)).catch(fail('הוספת רשומה נכשלה'));
  };
  const toggle = (id) => {
    if (!uid) return;
    const cur = entries.find((e) => e.id === id);
    Store.setReported(uid, id, !(cur && cur.reported)).catch(fail('עדכון נכשל'));
  };
  const remove = (id) => {
    if (!uid) return;
    if (!window.confirm('למחוק את הרשומה?')) return;
    Store.deleteEntry(uid, id).catch(fail('מחיקה נכשלה'));
  };
  const markAll = () => {
    if (!uid || !rows.length) return;
    const anyUnrep = rows.some((e) => !e.reported);
    Store.markMany(uid, rows.map((e) => e.id), anyUnrep).catch(fail('עדכון נכשל'));
  };
  const flash = (id) => flashOn(id);

  // ---- clock in / out ----
  const clockIn = () => {
    if (!uid) return;
    const d = new Date(); const pad = (n) => (n < 10 ? '0' : '') + n;
    const sess = {
      date: d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()),
      startTime: pad(d.getHours()) + ':' + pad(d.getMinutes()),
      startedAtMs: Date.now()
    };
    setActiveSession(sess);
    try { window.localStorage.setItem('hl_active_' + uid, JSON.stringify(sess)); } catch (e) { /* ignore */ }
  };
  const clearSession = () => {
    setActiveSession(null);
    try { window.localStorage.removeItem('hl_active_' + uid); } catch (e) { /* ignore */ }
  };
  const clockOut = () => {
    if (!uid || !activeSession) return;
    const sess = activeSession;
    const d = new Date(); const pad = (n) => (n < 10 ? '0' : '') + n;
    const hours = H.round2(Math.max(0, (Date.now() - sess.startedAtMs) / 3600000));
    if (hours <= 0) { clearSession(); alert('חלף פחות מדקה — המעקב בוטל ולא נרשמה רשומה.'); return; }
    const entry = {
      date: sess.date,
      client: settings.clientDefault,
      description: settings.defaultDescription,
      startTime: sess.startTime,
      endTime: pad(d.getHours()) + ':' + pad(d.getMinutes()),
      hours: hours,
      rate: +settings.defaultRate || 0,
      reported: false
    };
    // Clear the session only after the write succeeds, so a failed write keeps the tracked time.
    Store.addEntry(uid, entry).then((id) => { clearSession(); flashOn(id); })
      .catch(fail('רישום הזמן נכשל — המעקב נשמר, אפשר לנסות שוב'));
  };

  // ---- exports ----
  const exportExcel = (kind) => {
    if (!HLExport) { alert('מודול הייצוא לא נטען.'); return; }
    if (!rows.length) return;
    const suffix = month === 'all' ? '' : '-' + month;
    HLExport.toExcel(rows, { kind: kind, filename: (kind === 'client' ? 'דוח-שעות-לקוח' : 'דוח-שעות-מנהל') + suffix });
  };
  const downloadDocPDF = () => {
    if (!HLExport) { alert('מודול הייצוא לא נטען.'); return; }
    const suffix = month === 'all' ? '' : '-' + month;
    const base = view === 'invoice' ? 'חשבונית' : view === 'client' ? 'דוח-שעות-לקוח' : 'דוח-שעות-מנהל';
    HLExport.toPDF(docRef.current, base + suffix);
  };

  const saveSettings = (next) => {
    if (!uid) { setSettingsOpen(false); return; }
    Store.saveSettings(uid, next).then(() => setSettingsOpen(false)).catch(fail('שמירת הגדרות נכשלה'));
  };
  const resetAll = () => {
    if (!uid) return;
    if (!window.confirm('פעולה זו תמחק את כל הרשומות ותאפס את ההגדרות. להמשיך?')) return;
    Store.resetAll(uid, H.settings).then(() => setSettingsOpen(false)).catch(fail('איפוס נכשל'));
  };
  const mapAuthErr = (err) => {
    switch (err && err.code) {
      case 'auth/invalid-credential':
      case 'auth/wrong-password':
      case 'auth/user-not-found': return 'אימייל או סיסמה שגויים.';
      case 'auth/email-already-in-use': return 'האימייל כבר רשום — נסה להתחבר.';
      case 'auth/invalid-email': return 'כתובת אימייל לא תקינה.';
      case 'auth/weak-password': return 'הסיסמה חלשה מדי (לפחות 6 תווים).';
      case 'auth/too-many-requests': return 'יותר מדי ניסיונות — נסה שוב מאוחר יותר.';
      case 'auth/network-request-failed': return 'בעיית רשת — בדוק את החיבור לאינטרנט.';
      case 'auth/operation-not-allowed': return 'התחברות במייל אינה מופעלת בפרויקט (ראה FIREBASE_SETUP.md).';
      default: return (err && err.message) || 'הפעולה נכשלה.';
    }
  };
  const runAuth = (promise, okInfo) => {
    setLoginBusy(true); setLoginErr(''); setAuthInfo('');
    promise.then(() => { if (okInfo) setAuthInfo(okInfo); })
      .catch((err) => { pendingBizRef.current = ''; setLoginErr(mapAuthErr(err)); })
      .finally(() => setLoginBusy(false));
  };
  const doSignIn = (email, pw) => { pendingBizRef.current = ''; return runAuth(Store.login(email, pw)); };
  const doSignUp = (email, pw, businessName) => {
    pendingBizRef.current = (businessName || '').trim();
    return runAuth(Store.signup(email, pw));
  };
  const doReset = (email) => runAuth(Store.resetPassword(email), 'שלחנו אימייל לשחזור סיסמה (בדוק גם בתיקיית הספאם).');
  const doLogout = () => { if (Store) Store.logout(); };

  // ---- gates ----
  if (!Store) {
    return <div className="tt-root"><div className="tt-wrap" style={{ padding: 24 }}>
      <Card title="שגיאה">Firebase לא נטען. בדוק את החיבור לאינטרנט ואת תגי ה-script.</Card>
    </div></div>;
  }
  if (!authReady) {
    return <div className="tt-root"><div className="tt-wrap" style={{ padding: 24 }}>טוען…</div></div>;
  }
  if (!user) {
    return <AuthScreen onSignIn={doSignIn} onSignUp={doSignUp} onReset={doReset}
                       onClearMessages={() => { setLoginErr(''); setAuthInfo(''); }}
                       busy={loginBusy} error={loginErr} info={authInfo} />;
  }
  if (!dataReady || !settingsReady) {
    return <div className="tt-root"><div className="tt-wrap" style={{ padding: 24 }}>טוען נתונים…</div></div>;
  }

  // ---- document view ----
  if (view !== 'app') {
    const backBar = (
      <div className="tt-head" style={{ marginBottom: 16 }}>
        <div className="brand">
          <div className="brand-mark">₪</div>
          <div>
            <div className="brand-name">
              {view === 'manager' ? 'דוח שעות · מנהל' : view === 'client' ? 'דוח שעות · לקוח' : 'חשבונית מס/קבלה'}
            </div>
            <div className="brand-sub">תצוגה מקדימה של המסמך · {periodTxt}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button variant="teal" icon="⬇" onClick={downloadDocPDF}>הורד PDF</Button>
          <Button variant="utility" icon="→" onClick={() => setView('app')}>חזרה למערכת</Button>
        </div>
      </div>
    );
    return (
      <div className="tt-root">
        <div className="tt-wrap">
          {backBar}
          <div className="doc-stage" ref={docRef}>
            {view === 'invoice'
              ? <InvoiceDoc rows={rows} totals={totals} settings={settings} invoiceNum={settings.invoiceNum || H.invoiceNum} period={period} />
              : <HoursReportDoc kind={view} rows={rows.slice().reverse()} totals={totals} settings={settings} period={periodTxt} />}
          </div>
        </div>
      </div>
    );
  }

  // ---- main app ----
  return (
    <div className="tt-root">
      <div className="tt-wrap">
        <AppHeader businessName={settings.businessName} onSettings={() => setSettingsOpen(true)} />
        <div className="tt-grid">
          <main className="tt-main">
            <ClockPanel active={activeSession} onClockIn={clockIn} onClockOut={clockOut} />
            <AddHoursForm key={settings.clientDefault + '|' + settings.defaultDescription + '|' + settings.defaultRate}
                          onAdd={addEntry} defaultClient={settings.clientDefault}
                          defaultDesc={settings.defaultDescription} defaultRate={settings.defaultRate} />
            {dataErr
              ? <Card title="בעיה בטעינת הנתונים"><p style={{ color: '#c0392b', margin: 0 }}>{dataErr}</p></Card>
              : <RecordsTable rows={rows} unreported={unreported} showAll={showAll} page={PAGE}
                          onToggle={toggle} onEdit={flash} onDelete={remove} onMarkAll={markAll}
                          onShowMore={() => setShowAll((v) => !v)} />}
          </main>
          <aside className="tt-aside">
            <FilterPanel months={months} clients={clients} month={month} client={client}
                         onMonth={(v) => { setMonth(v); setShowAll(false); }}
                         onClient={(v) => { setClient(v); setShowAll(false); }} />
            <SummaryPanel totals={totals} vatRate={settings.vatRate} />
            <ExportPanel disabled={rows.length === 0}
                         onManager={() => setView('manager')}
                         onClient={() => setView('client')}
                         onInvoice={() => setView('invoice')}
                         onExcel={exportExcel} />
            <div className="form-actions" style={{ justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
              <span className="fineprint" style={{ margin: 0 }}>{user.email}</span>
              <Button variant="ghost" size="xs" icon="⎋" onClick={doLogout}>התנתק</Button>
            </div>
            <p className="fineprint">הנתונים נשמרים בענן (Firebase) ומסונכרנים בין המכשירים שלך. קובצי הדוח (Excel/PDF) משמשים גם כגיבוי.</p>
          </aside>
        </div>
      </div>
      <SettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)}
                     settings={settings} onSave={saveSettings} onReset={resetAll} />
    </div>
  );
}

/* Mount once into the kit's own container. */
const hlContainer = document.getElementById('hl-root');
if (hlContainer && !hlContainer.hasChildNodes()) {
  ReactDOM.createRoot(hlContainer).render(<HourLogApp />);
}
})();
