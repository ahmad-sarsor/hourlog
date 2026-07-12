/* ============================================================
   HourLog IL — file exports
   Excel (.xlsx) via SheetJS (global XLSX) and PDF via html2pdf
   (global html2pdf). Exposes window.HLExport.
   ============================================================ */
(function () {
  function fmtDate(ymd) { if (!ymd) return ''; var p = String(ymd).split('-'); return p.length === 3 ? p[2] + '/' + p[1] + '/' + p[0] : ymd; }
  function round2(x) { return Math.round(((+x || 0) + Number.EPSILON) * 100) / 100; }
  function safe(name) { return String(name || 'export').replace(/[\\/:*?"<>|]+/g, '-').trim() || 'export'; }

  // rows: [{date,client,description,location,startTime,endTime,hours,rate}]
  // Columns mirror the on-screen reports:
  //   client  -> date, description, location, from, to, hours, amount   (NO internal rate)
  //   manager -> date, client, description, location, from, to, hours   (hours only, NO money)
  function toExcel(rows, opts) {
    opts = opts || {};
    if (typeof XLSX === 'undefined') { alert('ספריית האקסל לא נטענה — בדוק את החיבור לאינטרנט ונסה שוב.'); return; }
    rows = rows || [];
    var isClient = opts.kind === 'client';

    var totalHours = 0, totalSum = 0;
    var body = rows.map(function (e) {
      var hours = +e.hours || 0, sum = round2(hours * (+e.rate || 0));
      totalHours += hours; totalSum += sum;
      return isClient
        ? [fmtDate(e.date), e.description || '', e.location || '', e.startTime || '', e.endTime || '', hours, sum]
        : [fmtDate(e.date), e.client || '', e.description || '', e.location || '', e.startTime || '', e.endTime || '', hours];
    });

    var header, totalRow, cols;
    if (isClient) {
      header = ['תאריך', 'תיאור', 'מיקום', 'משעה', 'עד שעה', 'שעות', 'סכום (₪)'];
      totalRow = ['', '', '', '', 'סה"כ', round2(totalHours), round2(totalSum)];
      cols = [{ wch: 12 }, { wch: 36 }, { wch: 12 }, { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 13 }];
    } else {
      header = ['תאריך', 'לקוח', 'תיאור', 'מיקום', 'משעה', 'עד שעה', 'שעות'];
      totalRow = ['', '', '', '', '', 'סה"כ', round2(totalHours)];
      cols = [{ wch: 12 }, { wch: 22 }, { wch: 36 }, { wch: 12 }, { wch: 8 }, { wch: 8 }, { wch: 8 }];
    }

    var ws = XLSX.utils.aoa_to_sheet([header].concat(body).concat([totalRow]));
    ws['!cols'] = cols;
    var wb = XLSX.utils.book_new();
    wb.Workbook = { Views: [{ RTL: true }] }; // right-to-left sheet view
    XLSX.utils.book_append_sheet(wb, ws, 'שעות');
    XLSX.writeFile(wb, safe(opts.filename || 'דוח-שעות') + '.xlsx');
  }

  // node: a rendered DOM element (the document preview); filename without ext
  function toPDF(node, filename) {
    if (typeof html2pdf === 'undefined') { alert('ספריית ה-PDF לא נטענה — בדוק את החיבור לאינטרנט ונסה שוב.'); return Promise.resolve(); }
    if (!node) return Promise.resolve();
    var opt = {
      margin: [8, 8, 8, 8],
      filename: safe(filename) + '.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff', windowWidth: node.scrollWidth },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['css', 'legacy'] }
    };
    return html2pdf().set(opt).from(node).save();
  }

  window.HLExport = { toExcel: toExcel, toPDF: toPDF };
})();
