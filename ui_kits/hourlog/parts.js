/* ============================================================
   HourLog IL — UI kit · presentational parts
   Header, add-hours form, filter, summary, export and the
   records table — all composed from the component bundle.
   Exposed on window for HourLogApp.jsx.
   ============================================================ */
(function () {
const NS = window.HourLogILDesignSystem_d9be1f;
if (!NS || !window.HL) return; // bundle or data missing — skip quietly
const { Button, IconButton, Card, Input, Select, TimeField, Checkbox, HoursPill, Badge, SummaryRow } = NS;
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
      startTime: start, endTime: end, hours, rate: +rate || 0, reported: false
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
function RecordsTable({ rows, unreported, showAll, page, onToggle, onEdit, onDelete, onMarkAll, onShowMore }) {
  const shown = showAll ? rows : rows.slice(0, page);
  const badge = unreported > 0
    ? <Badge tone="gold" variant="text">{' · טרם דווחו: ' + unreported}</Badge>
    : rows.length ? <Badge tone="green" variant="text">{' · הכל דווח ✓'}</Badge> : null;
  const markLabel = unreported > 0 ? '✓ סמן הכל כדווח' : '↺ בטל דיווח לתצוגה';

  const action = (
    <Button variant="ghost" size="xs" disabled={rows.length === 0} onClick={onMarkAll}>{markLabel}</Button>
  );

  return (
    <Card title={<>רשומות · {rows.length}{badge}</>} action={action}>
      <div className="table-scroll">
        <table className="tt-table">
          <colgroup>
            <col style={{ width: '9%' }} /><col style={{ width: '6%' }} /><col style={{ width: '17%' }} />
            <col style={{ width: '17%' }} /><col style={{ width: '11%' }} /><col style={{ width: '6%' }} />
            <col style={{ width: '8%' }} /><col style={{ width: '11%' }} /><col style={{ width: '6%' }} />
            <col style={{ width: '9%' }} />
          </colgroup>
          <thead>
            <tr>
              <th>תאריך</th><th>יום</th><th>לקוח</th><th>תיאור</th><th>משעה–עד</th>
              <th>שעות</th><th>תעריף</th><th>סכום</th><th>דווח</th><th></th>
            </tr>
          </thead>
          <tbody>
            {shown.length === 0 && (
              <tr><td colSpan="10"><div className="empty">עדיין אין רשומות בתצוגה זו.<br />הוסף את הרשומה הראשונה בטופס למעלה.</div></td></tr>
            )}
            {shown.map((e) => {
              const wk = HLh.isWeekend(e.date);
              return (
                <tr key={e.id} className={(e.reported ? 'reported' : '') + (e._new ? ' newrow' : '')}>
                  <td className="c-num">{HLh.fmtDate(e.date)}</td>
                  <td className={'c-day' + (wk ? ' weekend' : '')}>{HLh.dayName(e.date)}</td>
                  <td className="c-ell" title={e.client}>{e.client || <span className="dash">—</span>}</td>
                  <td className="c-ell" title={e.description}>{e.description || <span className="dash">—</span>}</td>
                  <td className="c-time">{e.startTime && e.endTime ? (e.startTime + '–' + e.endTime) : <span className="dash">—</span>}</td>
                  <td className="c-num">{HLh.nfH.format(e.hours)}</td>
                  <td className="c-num">{HLh.nf.format(e.rate)}</td>
                  <td className="c-amount">{HLh.money(e.hours * e.rate)}</td>
                  <td>
                    <Checkbox checked={e.reported} onChange={() => onToggle(e.id)}
                              title={e.reported ? 'דווח — לחץ לביטול' : 'סמן כדווח'} />
                  </td>
                  <td>
                    <div className="row-actions">
                      <IconButton glyph="✎" title="עריכה" onClick={() => onEdit(e.id)} />
                      <IconButton glyph="✕" variant="danger" title="מחיקה" onClick={() => onDelete(e.id)} />
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

/* ---- Clock in / clock out ------------------------------- */
function ClockPanel({ active, onClockIn, onClockOut }) {
  const [, tick] = React.useState(0);
  React.useEffect(() => {
    if (!active) return undefined;
    const t = setInterval(() => tick((n) => n + 1), 1000);
    return () => clearInterval(t);
  }, [active]);

  if (!active) {
    return (
      <Card title="מעקב זמן">
        <div className="form-actions">
          <Button variant="teal" icon="▶" onClick={onClockIn}>התחל מעקב</Button>
          <HoursPill icon="⏱">לחיצה מתחילה למדוד עכשיו</HoursPill>
        </div>
        <p className="form-note">בלחיצה נרשם זמן ההתחלה. בסיום — רשומה נוצרת אוטומטית עם השעות שנמדדו (לפי לקוח/תיאור/תעריף ברירת המחדל).</p>
      </Card>
    );
  }

  const totalSec = Math.max(0, Math.floor((Date.now() - active.startedAtMs) / 1000));
  const pad = (n) => (n < 10 ? '0' : '') + n;
  const elapsed = pad(Math.floor(totalSec / 3600)) + ':' + pad(Math.floor((totalSec % 3600) / 60)) + ':' + pad(totalSec % 60);

  return (
    <Card title="מעקב זמן — פעיל ●">
      <div className="form-actions" style={{ alignItems: 'center', gap: 12 }}>
        <Button variant="primary" icon="⏹" onClick={onClockOut}>סיים ורשום</Button>
        <HoursPill icon="⏱">{elapsed}</HoursPill>
        <span className="form-note" style={{ margin: 0 }}>התחלה: {active.startTime} · {HLh.fmtDate(active.date)}</span>
      </div>
      <p className="form-note">המעקב פועל. בלחיצה על "סיים ורשום" תיווצר רשומה עם השעות שנמדדו.</p>
    </Card>
  );
}

Object.assign(window, { AppHeader, AddHoursForm, ClockPanel, FilterPanel, SummaryPanel, ExportPanel, RecordsTable });
})();
