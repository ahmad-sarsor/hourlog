/* ============================================================
   HourLog IL — UI kit · presentational parts
   Header, add-hours form, filter, summary, export and the
   records table — all composed from the component bundle.
   Exposed on window for HourLogApp.jsx.
   ============================================================ */
(function () {
const NS = window.HourLogILDesignSystem_d9be1f;
if (!NS || !window.HL) return; // bundle or data missing — skip quietly
const { Button, IconButton, Card, Input, Select, TimeField, HoursPill, SummaryRow } = NS;
const HLh = window.HL;
const todayYMD = () => { const d = new Date(); const p = (n) => (n < 10 ? '0' : '') + n; return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()); };

/* ---- App header ----------------------------------------- */
function AppHeader({ businessName, onSettings }) {
  return (
    <header className="tt-head">
      <div className="brand">
        <div className="brand-mark">₪</div>
        <div>
          <div className="brand-name">{businessName}</div>
          <div className="brand-sub">דיווח שעות והפקת חשבוניות</div>
        </div>
      </div>
      <Button variant="utility" icon="⚙" onClick={onSettings}>הגדרות</Button>
    </header>
  );
}

/* ---- Add-hours form ------------------------------------- */
function AddHoursForm({ onAdd, defaultClient, defaultDesc, defaultRate }) {
  const [date, setDate] = React.useState(todayYMD());
  const [client, setClient] = React.useState(defaultClient);
  const [desc, setDesc] = React.useState(defaultDesc);
  const [location, setLocation] = React.useState(HLh.defaultLocation);
  const [start, setStart] = React.useState('09:00');
  const [end, setEnd] = React.useState('17:00');
  const [rate, setRate] = React.useState(defaultRate);

  const toMin = (t) => { const p = t.split(':'); return +p[0] * 60 + +p[1]; };
  const hours = HLh.round2((toMin(end) - toMin(start)) / 60);
  const valid = hours > 0;

  const pill = !isFinite(hours)
    ? <HoursPill>הזן שעות</HoursPill>
    : hours <= 0
      ? <HoursPill tone="warn">טווח לא תקין</HoursPill>
      : <HoursPill icon="⏱">{HLh.nfH.format(hours) + ' שעות'}</HoursPill>;

  const submit = () => {
    if (!valid) return;
    onAdd({
      id: 'n' + Date.now(), date, client: client.trim(), description: desc.trim(),
      location, startTime: start, endTime: end, hours, rate: +rate || 0
    });
  };

  return (
    <Card title="הוספת שעות">
      <div className="form-row">
        <Input label="תאריך" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <Input label="לקוח" className="f-grow" value={client} placeholder="שם הלקוח"
               onChange={(e) => setClient(e.target.value)} />
        <Input label="תיאור העבודה" className="f-grow" value={desc}
               placeholder="למשל: פיתוח דשבורד, בניית מודל dbt…"
               onChange={(e) => setDesc(e.target.value)} />
        <Select label="מיקום העבודה" className="f-loc" value={location}
                onChange={(e) => setLocation(e.target.value)} options={HLh.locations} />
        <label className="fld f-tm">משעה<TimeField value={start} onChange={setStart} /></label>
        <label className="fld f-tm">עד שעה<TimeField value={end} onChange={setEnd} /></label>
        <Input label='תעריף/שעה (ללא מע"מ)' className="f-rate" type="number" min="0" value={rate}
               onChange={(e) => setRate(e.target.value)} />
      </div>
      <div className="form-actions">
        <Button variant="primary" icon="＋" onClick={submit} disabled={!valid}>הוסף רשומה</Button>
        {pill}
      </div>
      <p className="form-note">השעות בפורמט 24 שעות. התעריף מוזן ללא מע"מ — המע"מ מתווסף אוטומטית לסכום הכולל.</p>
    </Card>
  );
}

/* ---- Filter panel --------------------------------------- */
function FilterPanel({ months, clients, month, client, onMonth, onClient }) {
  return (
    <Card title="סינון">
      <div className="filter-stack">
        <Select label="חודש" value={month} onChange={(e) => onMonth(e.target.value)} options={months} />
        <Select label="לקוח" value={client} onChange={(e) => onClient(e.target.value)} options={clients} />
      </div>
    </Card>
  );
}

/* ---- Summary panel -------------------------------------- */
function SummaryPanel({ totals, vatRate }) {
  return (
    <Card>
      <SummaryRow label="שעות" value={HLh.nfH.format(totals.hours)} />
      <SummaryRow label='סכום לפני מע"מ' value={HLh.money(totals.subtotal)} />
      <SummaryRow label={'מע"מ ' + vatRate + '%'} value={HLh.money(totals.vat)} />
      <SummaryRow label='סה"כ כולל מע"מ' value={HLh.money(totals.total)} total />
    </Card>
  );
}

/* ---- Export panel --------------------------------------- */
function ExportPanel({ disabled, onManager, onClient, onInvoice, onExcel }) {
  return (
    <Card title="ייצוא">
      <div className="export-group">
        <span className="export-label">דוח שעות (מנהל)</span>
        <div className="export-btns">
          <Button variant="primary" size="sm" block disabled={disabled} onClick={() => onExcel('manager')}>Excel</Button>
          <Button variant="dark" size="sm" block disabled={disabled} onClick={onManager}>PDF</Button>
        </div>
      </div>
      <div className="export-group">
        <span className="export-label">דוח שעות ללקוח</span>
        <div className="export-btns">
          <Button variant="primary" size="sm" block disabled={disabled} onClick={() => onExcel('client')}>Excel</Button>
          <Button variant="dark" size="sm" block disabled={disabled} onClick={onClient}>PDF</Button>
        </div>
      </div>
      <div className="export-group">
        <span className="export-label">חשבונית מס/קבלה</span>
        <div className="export-btns">
          <Button variant="teal" size="sm" block disabled={disabled} onClick={onInvoice}>הפקת PDF</Button>
        </div>
      </div>
    </Card>
  );
}

/* ---- Records table -------------------------------------- */
function RecordsTable({ rows, showAll, page, onSaveEdit, onDelete, onShowMore }) {
  const shown = showAll ? rows : rows.slice(0, page);
  const [editId, setEditId] = React.useState(null);
  const [editDesc, setEditDesc] = React.useState('');
  const [editLoc, setEditLoc] = React.useState(HLh.defaultLocation);

  const startEdit = (e) => { setEditId(e.id); setEditDesc(e.description || ''); setEditLoc(e.location || ''); };
  const cancelEdit = () => setEditId(null);
  const saveEdit = () => {
    if (editId && onSaveEdit) {
      // don't backfill a location onto old records the user didn't touch
      const patch = { description: editDesc.trim() };
      if (editLoc) patch.location = editLoc;
      onSaveEdit(editId, patch);
    }
    setEditId(null);
  };
  const editKeys = (ev) => {
    if (ev.key === 'Enter') { ev.preventDefault(); saveEdit(); }
    if (ev.key === 'Escape') cancelEdit();
  };

  return (
    <Card title={<>רשומות · {rows.length}</>}>
      <div className="table-scroll">
        <table className="tt-table">
          <colgroup>
            <col style={{ width: '9%' }} /><col style={{ width: '6%' }} /><col style={{ width: '13%' }} />
            <col style={{ width: '17%' }} /><col style={{ width: '11%' }} /><col style={{ width: '11%' }} />
            <col style={{ width: '6%' }} /><col style={{ width: '7%' }} /><col style={{ width: '11%' }} />
            <col style={{ width: '9%' }} />
          </colgroup>
          <thead>
            <tr>
              <th>תאריך</th><th>יום</th><th>לקוח</th><th>תיאור</th><th>מיקום</th><th>משעה–עד</th>
              <th>שעות</th><th>תעריף</th><th>סכום</th><th></th>
            </tr>
          </thead>
          <tbody>
            {shown.length === 0 && (
              <tr><td colSpan="10"><div className="empty">עדיין אין רשומות בתצוגה זו.<br />הוסף את הרשומה הראשונה בטופס למעלה.</div></td></tr>
            )}
            {shown.map((e) => {
              const wk = HLh.isWeekend(e.date);
              const editing = editId === e.id;
              return (
                <tr key={e.id} className={(editing ? 'editing' : '') + (e._new ? ' newrow' : '')}>
                  <td className="c-num">{HLh.fmtDate(e.date)}</td>
                  <td className={'c-day' + (wk ? ' weekend' : '')}>{HLh.dayName(e.date)}</td>
                  <td className="c-ell" title={e.client}>{e.client || <span className="dash">—</span>}</td>
                  <td className={editing ? '' : 'c-ell'} title={editing ? undefined : e.description}>
                    {editing
                      ? <input className="cell-edit" value={editDesc} autoFocus
                               placeholder="תיאור העבודה"
                               onChange={(ev) => setEditDesc(ev.target.value)} onKeyDown={editKeys} />
                      : (e.description || <span className="dash">—</span>)}
                  </td>
                  <td className={editing ? '' : 'c-ell'} title={editing ? undefined : e.location}>
                    {editing
                      ? <select className="cell-edit" value={editLoc}
                                onChange={(ev) => setEditLoc(ev.target.value)}>
                          {!e.location && <option value="">—</option>}
                          {HLh.locations.map((l) => <option key={l} value={l}>{l}</option>)}
                        </select>
                      : (e.location || <span className="dash">—</span>)}
                  </td>
                  <td className="c-time">{e.startTime && e.endTime ? (e.startTime + '–' + e.endTime) : <span className="dash">—</span>}</td>
                  <td className="c-num">{HLh.nfH.format(e.hours)}</td>
                  <td className="c-num">{HLh.nf.format(e.rate)}</td>
                  <td className="c-amount">{HLh.money(e.hours * e.rate)}</td>
                  <td>
                    <div className="row-actions">
                      {editing ? (
                        <>
                          <IconButton glyph="✓" title="שמירת השינויים" onClick={saveEdit} />
                          <IconButton glyph="↩" title="ביטול עריכה" onClick={cancelEdit} />
                        </>
                      ) : (
                        <>
                          <IconButton glyph="✎" title="עריכת תיאור ומיקום" onClick={() => startEdit(e)} />
                          <IconButton glyph="✕" variant="danger" title="מחיקה" onClick={() => onDelete(e.id)} />
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {rows.length > page && (
        <div className="show-more-wrap">
          <button className="show-more" onClick={onShowMore}>
            {showAll ? '▲ הצג פחות' : ('▼ הצג את כל הימים (עוד ' + (rows.length - page) + ')')}
          </button>
        </div>
      )}
    </Card>
  );
}

/* ---- Clock in / pause / clock out ----------------------- */
function ClockPanel({ active, onClockIn, onPause, onResume, onClockOut }) {
  const [location, setLocation] = React.useState(HLh.defaultLocation);
  const paused = !!(active && active.pausedAtMs);
  const [, tick] = React.useState(0);
  // the pause/resume buttons swap in place — swallow the second click of a
  // double-click so it can't silently undo the first one
  const lastToggleRef = React.useRef(0);
  const toggleSafe = (fn) => () => {
    const now = Date.now();
    if (now - lastToggleRef.current < 400) return;
    lastToggleRef.current = now; fn();
  };
  React.useEffect(() => {
    if (!active || paused) return undefined;
    const t = setInterval(() => tick((n) => n + 1), 1000);
    return () => clearInterval(t);
  }, [active, paused]);

  if (!active) {
    return (
      <Card title="מעקב זמן">
        <div className="form-actions" style={{ alignItems: 'flex-end' }}>
          <Select label="מיקום העבודה" className="clock-loc" value={location}
                  onChange={(e) => setLocation(e.target.value)} options={HLh.locations} />
          <Button variant="teal" icon="▶" onClick={() => onClockIn(location)}>התחל מעקב</Button>
          <HoursPill icon="⏱">לחיצה מתחילה למדוד עכשיו</HoursPill>
        </div>
        <p className="form-note">בלחיצה נרשם זמן ההתחלה. אפשר להשהות להפסקה באמצע, ובסיום — רשומה נוצרת אוטומטית עם השעות שנמדדו (לפי לקוח/תיאור/תעריף ברירת המחדל).</p>
      </Card>
    );
  }

  const endMs = paused ? active.pausedAtMs : Date.now();
  const totalSec = Math.max(0, Math.floor((endMs - active.startedAtMs - (active.pausedTotalMs || 0)) / 1000));
  const pad = (n) => (n < 10 ? '0' : '') + n;
  const elapsed = pad(Math.floor(totalSec / 3600)) + ':' + pad(Math.floor((totalSec % 3600) / 60)) + ':' + pad(totalSec % 60);

  return (
    <Card title={paused ? 'מעקב זמן — בהפסקה ⏸' : 'מעקב זמן — פעיל ●'}>
      <div className="form-actions" style={{ alignItems: 'center', gap: 12 }}>
        {paused
          ? <Button variant="teal" icon="▶" onClick={toggleSafe(onResume)}>המשך מעקב</Button>
          : <Button variant="utility" icon="⏸" onClick={toggleSafe(onPause)}>הפסקה</Button>}
        <Button variant="primary" icon="⏹" onClick={onClockOut}>סיים ורשום</Button>
        <HoursPill icon="⏱">{elapsed}</HoursPill>
        <span className="form-note" style={{ margin: 0 }}>
          התחלה: {active.startTime} · {HLh.fmtDate(active.date)}{active.location ? ' · ' + active.location : ''}
        </span>
      </div>
      <p className="form-note">
        {paused
          ? 'המעקב מושהה — הזמן לא נספר עד לחיצה על "המשך מעקב". זמן ההפסקה יופחת מהרשומה.'
          : 'המעקב פועל. "הפסקה" עוצרת את הספירה (להפסקת צהריים וכד\'), ובלחיצה על "סיים ורשום" תיווצר רשומה עם שעות העבודה נטו.'}
      </p>
    </Card>
  );
}

Object.assign(window, { AppHeader, AddHoursForm, ClockPanel, FilterPanel, SummaryPanel, ExportPanel, RecordsTable });
})();
