/* ============================================================
   HourLog IL — Dashboard v2 · refined parts
   Header bar, form with prominent CTA, total-first summary with
   a reported-progress bar, and a stacked export panel. Reuses
   the same bundle primitives; v1 parts stay untouched.
   ============================================================ */
(function () {
const NS2 = window.HourLogILDesignSystem_d9be1f;
if (!NS2 || !window.HL) return; // bundle or data missing — skip quietly
const { Button, Card, Input, TimeField, HoursPill, SummaryRow } = NS2;
const HL2 = window.HL;

/* ---- Header bar ------------------------------------------ */
function AppHeaderV2({ businessName, monthLabel, onSettings }) {
  return (
    <header className="v2-head">
      <div className="brand">
        <div className="brand-mark">₪</div>
        <div>
          <div className="brand-name">{businessName}</div>
          <div className="brand-sub">דיווח שעות והפקת חשבוניות</div>
        </div>
      </div>
      <div className="v2-head-meta">
        <span className="v2-chip">{monthLabel}</span>
        <Button variant="utility" icon="⚙" onClick={onSettings}>הגדרות</Button>
      </div>
    </header>
  );
}

/* ---- Add-hours form (refined) ----------------------------- */
function AddHoursFormV2({ onAdd, defaultClient, defaultDesc, defaultRate }) {
  const [date, setDate] = React.useState('2026-06-25');
  const [client, setClient] = React.useState(defaultClient);
  const [desc, setDesc] = React.useState(defaultDesc);
  const [start, setStart] = React.useState('09:00');
  const [end, setEnd] = React.useState('17:00');
  const [rate, setRate] = React.useState(defaultRate);

  const toMin = (t) => { const p = t.split(':'); return +p[0] * 60 + +p[1]; };
  const hours = HL2.round2((toMin(end) - toMin(start)) / 60);
  const valid = hours > 0;

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
        <Input label="תאריך" type="date" className="f-date" value={date} onChange={(e) => setDate(e.target.value)} />
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
        <Button variant="primary" icon="＋" className="v2-cta" onClick={submit} disabled={!valid}>הוסף רשומה</Button>
        {valid
          ? <HoursPill icon="⏱">{HL2.nfH.format(hours) + ' שעות'}</HoursPill>
          : <HoursPill tone="warn">טווח לא תקין</HoursPill>}
      </div>
      <p className="form-note">השעות בפורמט 24 שעות. התעריף מוזן ללא מע"מ — המע"מ מתווסף אוטומטית לסכום הכולל.</p>
    </Card>
  );
}

/* ---- Summary (total first + reported progress) ------------ */
function SummaryPanelV2({ totals, vatRate, reportedHours, showProgress, monthLabel }) {
  const pct = totals.hours > 0 ? Math.round((reportedHours / totals.hours) * 100) : 0;
  return (
    <Card title={'סיכום · ' + monthLabel}>
      <div className="v2-total">
        <span className="v2-total-label">סה"כ כולל מע"מ</span>
        <span className="v2-total-value">{HL2.money(totals.total)}</span>
      </div>
      <SummaryRow label="שעות" value={HL2.nfH.format(totals.hours)} />
      <SummaryRow label='סכום לפני מע"מ' value={HL2.money(totals.subtotal)} />
      <SummaryRow label={'מע"מ ' + vatRate + '%'} value={HL2.money(totals.vat)} />
      {showProgress && (
        <div className="v2-progress">
          <div className="v2-bar"><i style={{ width: pct + '%' }}></i></div>
          <div className="v2-progress-cap">
            <span>דווחו {HL2.nfH.format(reportedHours)} מתוך {HL2.nfH.format(totals.hours)} שעות</span>
            <b className="num">{pct}%</b>
          </div>
        </div>
      )}
    </Card>
  );
}

/* ---- Export (stacked rows) -------------------------------- */
function ExportPanelV2({ disabled, onManager, onClient, onInvoice }) {
  return (
    <Card title="ייצוא">
      <div className="v2-export">
        <div className="v2-exrow">
          <span className="v2-exlabel">דוח שעות (מנהל)</span>
          <div className="v2-exbtns">
            <Button variant="primary" size="sm" block disabled={disabled} onClick={onManager}>Excel</Button>
            <Button variant="dark" size="sm" block disabled={disabled} onClick={onManager}>PDF</Button>
          </div>
        </div>
        <div className="v2-exrow">
          <span className="v2-exlabel">דוח שעות ללקוח</span>
          <div className="v2-exbtns">
            <Button variant="primary" size="sm" block disabled={disabled} onClick={onClient}>Excel</Button>
            <Button variant="dark" size="sm" block disabled={disabled} onClick={onClient}>PDF</Button>
          </div>
        </div>
        <div className="v2-exrow">
          <span className="v2-exlabel">חשבונית מס/קבלה</span>
          <div className="v2-exbtns single">
            <Button variant="teal" size="sm" block disabled={disabled} onClick={onInvoice}>הפקת PDF</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

Object.assign(window, { AppHeaderV2, AddHoursFormV2, SummaryPanelV2, ExportPanelV2 });
})();
