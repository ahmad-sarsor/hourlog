/* ============================================================
   HourLog IL — UI kit sample data & formatting helpers
   Realistic seed data for a freelance data/BI engineer's June.
   Exposed on window.HL for the screen scripts.
   ============================================================ */
(function () {
  var HE_DAYS = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];

  function dayIdx(ymd) { var p = ymd.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]).getDay(); }
  function dayName(ymd) { return HE_DAYS[dayIdx(ymd)]; }
  function isWeekend(ymd) { var g = dayIdx(ymd); return g === 5 || g === 6; }
  function fmtDate(ymd) { if (!ymd) return ''; var p = ymd.split('-'); return p[2] + '/' + p[1] + '/' + p[0]; }

  var nf = new Intl.NumberFormat('he-IL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  var nfH = new Intl.NumberFormat('he-IL', { maximumFractionDigits: 2 });
  function money(n) { return nf.format(n || 0) + ' ₪'; }
  function invMoney(n) { return '₪ ' + nf.format(n || 0); }
  function round2(x) { return Math.round((x + Number.EPSILON) * 100) / 100; }

  /* Placeholder defaults only — NO real personal/financial data here.
     Real business details are entered once in the app's Settings screen
     and stored per-user in Firestore (protected by auth + security rules),
     so they never live in this public repo. */
  var settings = {
    businessName: 'העסק שלי',
    businessId: '',
    businessEmail: '',
    businessPhone: '',
    clientDefault: 'לקוח לדוגמה',
    clientDefaultId: '',
    clientAddress: '',
    clientPhone: '',
    defaultRate: '0',
    defaultDescription: '',
    vatRate: 18,
    currency: '₪',
    invoiceTitle: 'חשבונית מס/קבלה',
    invoiceNote: 'התשלום שוטף + 30. תודה על שיתוף הפעולה.',
    paymentMethod: 'העברה בנקאית',
    paymentDetails: '',
    includeReceipt: true,
    invoiceNum: 40006
  };

  // date, description, start, end, hours, reported — client & rate are constant here
  var seed = [
    ['2026-06-24', 'פיתוח דשבורד Power BI — מכירות', '09:00', '17:30', 8.5, false],
    ['2026-06-23', 'בניית מודל dbt לנתוני חיוב', '09:30', '17:00', 7.5, false],
    ['2026-06-22', 'אופטימיזציית שאילתות SQL', '10:00', '16:00', 6, false],
    ['2026-06-18', 'הקמת מחסן נתונים (DWH) — שלב א׳', '09:00', '18:00', 9, true],
    ['2026-06-17', 'ETL — טעינת נתוני CRM', '09:00', '17:00', 8, true],
    ['2026-06-16', 'ישיבת אפיון עם צוות הנתונים', '11:00', '14:00', 3, true],
    ['2026-06-15', 'בניית דוחות Tableau', '09:00', '17:30', 8.5, true],
    ['2026-06-11', 'תחזוקת פייפליין Airflow', '09:00', '16:30', 7.5, true],
    ['2026-06-10', 'מידול נתונים — סכמת כוכב', '09:00', '17:00', 8, true],
    ['2026-06-09', 'בדיקות איכות נתונים (DQ)', '10:00', '17:00', 7, true],
    ['2026-06-08', 'פיתוח API לשליפת נתונים', '09:00', '18:00', 9, true],
    ['2026-06-04', 'הטמעת Snowflake — הגדרות ראשוניות', '09:00', '17:00', 8, true],
    ['2026-06-03', 'ניתוח דרישות דוחות מנהלים', '09:30', '16:30', 7, true],
    ['2026-06-01', 'אפיון ארכיטקטורת נתונים', '09:00', '17:00', 8, true]
  ];

  var entries = seed.map(function (r, i) {
    return {
      id: 'e' + i,
      date: r[0],
      client: settings.clientDefault,
      description: r[1],
      startTime: r[2],
      endTime: r[3],
      hours: r[4],
      rate: 260,
      reported: r[5]
    };
  });

  window.HL = {
    HE_DAYS: HE_DAYS, dayName: dayName, isWeekend: isWeekend, fmtDate: fmtDate,
    money: money, invMoney: invMoney, nf: nf, nfH: nfH, round2: round2,
    settings: settings, entries: entries, invoiceNum: 40006
  };
})();
