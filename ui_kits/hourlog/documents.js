/* ============================================================
   HourLog IL — UI kit · documents & settings
   The two printable outputs (ink hours-report, teal tax-invoice)
   and the settings sheet. Ported from the source builders.
   ============================================================ */
(function () {
const DNS = window.HourLogILDesignSystem_d9be1f;
if (!DNS || !window.HL) return; // bundle or data missing — skip quietly
const HLd = window.HL;

// today's date as YYYY-MM-DD (documents show the real generation date)
const todayYMD = () => { const d = new Date(); const p = (n) => (n < 10 ? '0' : '') + n; return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()); };

/* ---- Hours report (manager / client) — ink -------------- */
function HoursReportDoc({ kind, rows, totals, settings, period }) {
  const isClient = kind === 'client';
  const title = isClient ? 'דוח שעות ללקוח' : 'דוח שעות';
  return (
    <div className="doc-sheet">
      <div className="pdf-doc">
        <div className="pdf-head">
          <div>
            <div className="pdf-biz-name">{settings.businessName}</div>
            {settings.businessId && <div className="pdf-biz-id">עוסק / ח.פ: {settings.businessId}</div>}
          </div>
          <div className="pdf-doc-meta">
            <div className="pdf-doc-title">{title}</div>
            <div>תקופה: {period}</div>
            {isClient && <div>לקוח: {settings.clientDefault}</div>}
            <div>הופק: {todayYMD()}</div>
          </div>
        </div>
        <table className="pdf-table">
          <thead>
            <tr>
              <th className="c">תאריך</th><th className="c">משעה</th><th className="c">עד שעה</th>
              <th className="c">שעות</th>{isClient && <th>סכום</th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((e) => (
              <tr key={e.id}>
                <td className="pdf-num">{HLd.fmtDate(e.date)}</td>
                <td className="pdf-num" style={{ textAlign: 'center' }}>{e.startTime}</td>
                <td className="pdf-num" style={{ textAlign: 'center' }}>{e.endTime}</td>
                <td className="pdf-num" style={{ textAlign: 'center' }}>{HLd.nfH.format(e.hours)}</td>
                {isClient && <td className="pdf-num">{HLd.money(e.hours * e.rate)}</td>}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pdf-totals-wrap">
          <table className="pdf-totals">
            <tbody>
              {isClient ? (
                <>
                  <tr><td>סה"כ שעות</td><td>{HLd.nfH.format(totals.hours)}</td></tr>
                  <tr className="sep"><td>סכום לפני מע"מ</td><td>{HLd.money(totals.subtotal)}</td></tr>
                  <tr><td>מע"מ {settings.vatRate}%</td><td>{HLd.money(totals.vat)}</td></tr>
                  <tr className="grand"><td>סה"כ</td><td>{HLd.money(totals.total)}</td></tr>
                </>
              ) : (
                <tr className="grand"><td>סה"כ שעות</td><td>{HLd.nfH.format(totals.hours)}</td></tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="pdf-foot">הופק ממערכת דיווח השעות.</div>
      </div>
    </div>
  );
}

/* ---- Tax-invoice / receipt — teal ----------------------- */
function InvoiceDoc({ rows, totals, settings, invoiceNum, period }) {
  // group by description + rate
  const groups = {}; const order = [];
  rows.forEach((e) => {
    const key = (e.description || settings.defaultDescription) + '||' + e.rate;
    if (!groups[key]) { groups[key] = { desc: e.description || settings.defaultDescription, rate: e.rate, hours: 0 }; order.push(key); }
    groups[key].hours += e.hours;
  });
  return (
    <div className="doc-sheet">
      <div className="inv-doc">
        <div>
          <div className="inv-bizname">{settings.businessName}</div>
          {settings.businessId && <div className="inv-bizmeta">עוסק מורשה : {settings.businessId}</div>}
          {settings.businessEmail && <div className="inv-bizmeta">{settings.businessEmail}</div>}
        </div>
        <div className="inv-titlerow">
          <div className="inv-title">{settings.invoiceTitle} <span className="inv-num">{invoiceNum}</span></div>
        </div>
        <div className="inv-parties">
          <div className="inv-client">
            <div>לכבוד : {settings.clientDefault}</div>
            {settings.clientAddress && <div>{settings.clientAddress}</div>}
            {settings.clientDefaultId && <div>ח.פ : {settings.clientDefaultId}</div>}
          </div>
          <div className="inv-dates"><div>תאריך {HLd.fmtDate(period.from)} , עד {HLd.fmtDate(period.to)}</div></div>
        </div>
        <table className="inv-table">
          <thead>
            <tr><th className="r">פירוט</th><th>כמות</th><th>מחיר ליחידה</th><th>סה"כ</th></tr>
          </thead>
          <tbody>
            {order.map((key) => {
              const g = groups[key]; const h = HLd.round2(g.hours);
              return (
                <tr key={key}>
                  <td className="r">{g.desc}</td>
                  <td>{HLd.nfH.format(h)}</td>
                  <td className="money">{HLd.invMoney(g.rate)}</td>
                  <td className="money">{HLd.invMoney(HLd.round2(h * g.rate))}</td>
                </tr>
              );
            })}
            <tr className="inv-total-row"><td colSpan="2"></td><td className="lbl">סה"כ</td><td className="val">{HLd.invMoney(totals.subtotal)}</td></tr>
            <tr className="inv-total-row"><td colSpan="2"></td><td className="lbl">מע"מ {settings.vatRate}%</td><td className="val">{HLd.invMoney(totals.vat)}</td></tr>
            <tr className="inv-total-row grand"><td colSpan="2"></td><td className="lbl">סה"כ לתשלום</td><td className="val">{HLd.invMoney(totals.total)}</td></tr>
          </tbody>
        </table>
        {settings.includeReceipt && (
          <>
            <div className="inv-section">פרטי תשלום</div>
            <table className="inv-table">
              <thead><tr><th className="r">אמצעי תשלום</th><th>פירוט</th><th>תאריך</th><th>סכום</th></tr></thead>
              <tbody>
                <tr>
                  <td className="r">{settings.paymentMethod}</td>
                  <td>{settings.paymentDetails}</td>
                  <td>{HLd.fmtDate(todayYMD())}</td>
                  <td className="money">{HLd.invMoney(totals.total)}</td>
                </tr>
                <tr className="inv-total-row grand"><td colSpan="2"></td><td className="lbl">סה"כ שולם</td><td className="val">{HLd.invMoney(totals.total)}</td></tr>
              </tbody>
            </table>
          </>
        )}
        {settings.invoiceNote && <div className="inv-notes">הערות למסמך :<br />{settings.invoiceNote}</div>}
        <div className="inv-sign">חתימה : <span className="line"></span></div>
        <div className="inv-foot">מסמך זה הופק ממערכת דיווח השעות · {settings.invoiceTitle} מס' {invoiceNum} · עמוד 1 מתוך 1</div>
      </div>
    </div>
  );
}

/* ---- Settings sheet ------------------------------------- */
function SettingsModal({ open, onClose, settings, onSave, onReset }) {
  const { Modal, Input, Button } = DNS;
  const [s, setS] = React.useState(settings);
  // Load current settings into the edit buffer when the modal opens; ignore
  // live-sync snapshots while it's open so in-progress edits aren't clobbered.
  React.useEffect(() => { if (open) setS(settings); }, [open]);
  const set = (k) => (e) => setS(Object.assign({}, s, { [k]: e.target.value }));
  const gridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 };
  const gap = <div style={{ height: 12 }} />;
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="הגדרות"
      subtitle="פרטים אלה מופיעים בכותרת המערכת ובקבצי הייצוא."
      footer={<>
        <Button variant="ghost" size="xs" onClick={onReset || onClose}>אפס את כל הנתונים</Button>
        <Button variant="primary" onClick={() => (onSave ? onSave(s) : onClose())}>שמור וסגור</Button>
      </>}
    >
      <Input label="שם העסק" value={s.businessName} onChange={set('businessName')} />{gap}
      <Input label="עוסק מורשה / ח.פ" value={s.businessId} onChange={set('businessId')} />{gap}
      <Input label="לקוח ברירת מחדל" value={s.clientDefault} onChange={set('clientDefault')} />{gap}
      <Input label='תיאור עבודה ברירת מחדל' value={s.defaultDescription} onChange={set('defaultDescription')} />{gap}
      <div style={gridStyle}>
        <Input label='תעריף ברירת מחדל' type="number" value={s.defaultRate} onChange={set('defaultRate')} />
        <Input label='מע"מ %' type="number" value={s.vatRate} onChange={set('vatRate')} />
        <Input label='מטבע' value={s.currency} onChange={set('currency')} />
      </div>{gap}
      <div style={gridStyle}>
        <Input label='כותרת המסמך' value={s.invoiceTitle} onChange={set('invoiceTitle')} />
        <Input label='מספר חשבונית הבא' type="number" value={s.invoiceNum} onChange={set('invoiceNum')} />
      </div>{gap}
      <Input label='אמצעי תשלום' value={s.paymentMethod} onChange={set('paymentMethod')} />{gap}
      <Input label='פרטי תשלום (בנק / חשבון)' value={s.paymentDetails} onChange={set('paymentDetails')} />
    </Modal>
  );
}

Object.assign(window, { HoursReportDoc, InvoiceDoc, SettingsModal });
})();
