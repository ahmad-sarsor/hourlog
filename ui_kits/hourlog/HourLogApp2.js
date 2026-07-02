/* ============================================================
   HourLog IL — Dashboard v2 · interactive app + Tweaks
   Same state logic as v1, composed from the refined V2 parts
   (header bar, CTA form, total-first summary, stacked export)
   while reusing the v1 RecordsTable / FilterPanel / documents.
   Tweaks: density, reported-progress bar, curated brand hue.
   ============================================================ */
(function () {
const { AppHeaderV2, AddHoursFormV2, SummaryPanelV2, ExportPanelV2,
        RecordsTable, FilterPanel, HoursReportDoc, InvoiceDoc, SettingsModal,
        useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakColor } = window;
if (!window.HL || !AppHeaderV2 || !RecordsTable || !useTweaks || !window.HourLogILDesignSystem_d9be1f) return;
const { Button } = window.HourLogILDesignSystem_d9be1f;
const H2 = window.HL;

const HE_MONTHS2 = ['ינואר','פברואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'];
const monthLabel2 = (ym) => ym === 'all' ? 'כל החודשים'
  : HE_MONTHS2[(+ym.split('-')[1]) - 1] + ' ' + ym.split('-')[0];
const PAGE2 = 10;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "density": "רגילה",
  "showProgress": true,
  "brandPalette": ["#0E7C5E", "#0B6A50", "#E4F1EB", "#F4FBF8"]
}/*EDITMODE-END*/;

const BRAND_OPTIONS = [
  ["#0E7C5E", "#0B6A50", "#E4F1EB", "#F4FBF8"],
  ["#0F6B6B", "#0C5858", "#E1F0F0", "#F2FAFA"],
  ["#1F7A46", "#196239", "#E4F2E9", "#F3FBF6"]
];

function HourLogAppV2() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [entries, setEntries] = React.useState(H2.entries);
  const [month, setMonth] = React.useState('2026-06');
  const [client, setClient] = React.useState('all');
  const [showAll, setShowAll] = React.useState(false);
  const [view, setView] = React.useState('app');
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const settings = H2.settings;

  React.useEffect(() => {
    const p = t.brandPalette || BRAND_OPTIONS[0];
    const r = document.documentElement.style;
    r.setProperty('--accent', p[0]); r.setProperty('--accent-strong', p[1]);
    r.setProperty('--accent-soft', p[2]); r.setProperty('--accent-tint', p[3]);
  }, [t.brandPalette]);

  const months = React.useMemo(() => {
    const s = {}; entries.forEach((e) => { s[e.date.slice(0, 7)] = 1; });
    return [{ value: 'all', label: 'כל החודשים' }]
      .concat(Object.keys(s).sort().reverse().map((m) => ({ value: m, label: monthLabel2(m) })));
  }, [entries]);
  const clients = React.useMemo(() => {
    const s = {}; entries.forEach((e) => { if (e.client) s[e.client] = 1; });
    return [{ value: 'all', label: 'כל הלקוחות' }]
      .concat(Object.keys(s).sort().map((c) => ({ value: c, label: c })));
  }, [entries]);

  const rows = React.useMemo(() => entries
    .filter((e) => (month === 'all' || e.date.slice(0, 7) === month) && (client === 'all' || e.client === client))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)), [entries, month, client]);

  const totals = React.useMemo(() => {
    let hrs = 0, sub = 0;
    rows.forEach((e) => { hrs += +e.hours; sub += e.hours * e.rate; });
    hrs = H2.round2(hrs); sub = H2.round2(sub);
    const vat = H2.round2(sub * settings.vatRate / 100);
    return { hours: hrs, subtotal: sub, vat, total: H2.round2(sub + vat) };
  }, [rows]);

  const reportedHours = React.useMemo(
    () => H2.round2(rows.filter((e) => e.reported).reduce((a, e) => a + (+e.hours), 0)), [rows]);
  const unreported = rows.filter((e) => !e.reported).length;
  const period = React.useMemo(() => {
    if (!rows.length) return { from: '2026-06-25', to: '2026-06-25' };
    const d = rows.map((e) => e.date).sort();
    return { from: d[0], to: d[d.length - 1] };
  }, [rows]);
  const periodTxt = month === 'all' ? 'כל התקופות' : monthLabel2(month);

  const addEntry = (e) => { e._new = true; setEntries((cur) => [e].concat(cur)); setTimeout(() => { e._new = false; setEntries((cur) => cur.slice()); }, 450); };
  const toggle = (id) => setEntries((cur) => cur.map((e) => e.id === id ? Object.assign({}, e, { reported: !e.reported }) : e));
  const remove = (id) => setEntries((cur) => cur.filter((e) => e.id !== id));
  const markAll = () => {
    const ids = {}; rows.forEach((e) => { ids[e.id] = 1; });
    const anyUnrep = rows.some((e) => !e.reported);
    setEntries((cur) => cur.map((e) => ids[e.id] ? Object.assign({}, e, { reported: anyUnrep }) : e));
  };
  const flash = (id) => { setEntries((cur) => cur.map((e) => e.id === id ? Object.assign({}, e, { _new: true }) : e)); setTimeout(() => setEntries((cur) => cur.map((e) => e.id === id ? Object.assign({}, e, { _new: false }) : e)), 450); };

  const rootCls = 'tt-root' + (t.density === 'דחוסה' ? ' v2-compact' : '');

  const tweaks = (
    <TweaksPanel>
      <TweakSection label="תצוגה" />
      <TweakRadio label="צפיפות" value={t.density} options={['רגילה', 'דחוסה']}
                  onChange={(v) => setTweak('density', v)} />
      <TweakToggle label="סרגל דיווח בסיכום" value={t.showProgress}
                   onChange={(v) => setTweak('showProgress', v)} />
      <TweakSection label="מותג" />
      <TweakColor label="גוון" value={t.brandPalette} options={BRAND_OPTIONS}
                  onChange={(v) => setTweak('brandPalette', v)} />
    </TweaksPanel>
  );

  if (view !== 'app') {
    return (
      <div className={rootCls}>
        <div className="tt-wrap">
          <header className="v2-head" style={{ marginBottom: 18 }}>
            <div className="brand">
              <div className="brand-mark">₪</div>
              <div>
                <div className="brand-name">
                  {view === 'manager' ? 'דוח שעות · מנהל' : view === 'client' ? 'דוח שעות · לקוח' : 'חשבונית מס/קבלה'}
                </div>
                <div className="brand-sub">תצוגה מקדימה של המסמך · {periodTxt}</div>
              </div>
            </div>
            <Button variant="utility" icon="→" onClick={() => setView('app')}>חזרה למערכת</Button>
          </header>
          <div className="doc-stage">
            {view === 'invoice'
              ? <InvoiceDoc rows={rows} totals={totals} settings={settings} invoiceNum={H2.invoiceNum} period={period} />
              : <HoursReportDoc kind={view} rows={rows.slice().reverse()} totals={totals} settings={settings} period={periodTxt} />}
          </div>
        </div>
        {tweaks}
      </div>
    );
  }

  return (
    <div className={rootCls}>
      <div className="tt-wrap">
        <AppHeaderV2 businessName={settings.businessName} monthLabel={periodTxt}
                     onSettings={() => setSettingsOpen(true)} />
        <div className="tt-grid">
          <main className="tt-main">
            <AddHoursFormV2 onAdd={addEntry} defaultClient={settings.clientDefault}
                            defaultDesc={settings.defaultDescription} defaultRate={settings.defaultRate} />
            <RecordsTable rows={rows} unreported={unreported} showAll={showAll} page={PAGE2}
                          onToggle={toggle} onEdit={flash} onDelete={remove} onMarkAll={markAll}
                          onShowMore={() => setShowAll((v) => !v)} />
          </main>
          <aside className="tt-aside">
            <SummaryPanelV2 totals={totals} vatRate={settings.vatRate} reportedHours={reportedHours}
                            showProgress={t.showProgress} monthLabel={periodTxt} />
            <FilterPanel months={months} clients={clients} month={month} client={client}
                         onMonth={(v) => { setMonth(v); setShowAll(false); }}
                         onClient={(v) => { setClient(v); setShowAll(false); }} />
            <ExportPanelV2 disabled={rows.length === 0}
                           onManager={() => setView('manager')}
                           onClient={() => setView('client')}
                           onInvoice={() => setView('invoice')} />
            <p className="fineprint">אתר עצמאי — הנתונים נשמרים בדפדפן שלך במכשיר זה. קובצי הדוח (Excel/PDF) משמשים גם כגיבוי.</p>
          </aside>
        </div>
      </div>
      <SettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} settings={settings} />
      {tweaks}
    </div>
  );
}

const v2Container = document.getElementById('hl-root');
if (v2Container && !v2Container.hasChildNodes()) {
  ReactDOM.createRoot(v2Container).render(<HourLogAppV2 />);
}
})();
