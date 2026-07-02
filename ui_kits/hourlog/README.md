# HourLog IL — Product UI Kit

A high-fidelity, interactive recreation of the HourLog IL app: the single view a
freelance data/BI engineer uses to log hours and produce reports & invoices.

## Run
Open `index.html`. It loads the compiled component bundle (`_ds_bundle.js`),
then the kit scripts in order.

## What's interactive
- **Add hours** — pick a date, edit client/description, set from/to times (24h)
  and rate; the live pill shows the computed duration; **הוסף רשומה** prepends a row.
- **Records table** — toggle the green **דווח** checkbox per row, **✕** deletes,
  **✎** flashes the row, **סמן הכל כדווח** marks the whole view. Weekend days
  render red; reported rows tint green; **הצג את כל הימים** expands past 10.
- **Filter** — month & client selects recompute the table and summary.
- **Summary** — hours, subtotal, VAT (18%) and grand total.
- **Export** — the three actions open a **document preview**:
  - *דוח שעות (מנהל)* → ink hours report (`HoursReportDoc`, manager: dates + hours only)
  - *דוח שעות ללקוח* → ink hours report (client: adds amounts + VAT totals)
  - *חשבונית מס/קבלה* → teal tax-invoice/receipt (`InvoiceDoc`), grouped by task,
    with an optional "payment details" receipt section.
- **⚙ הגדרות** — the settings sheet (`SettingsModal` over the `Modal` primitive).

## Files
- `index.html` — entry; links `styles.css` + `kit.css`, loads the bundle & scripts.
- `kit.css` — screen-level CSS only (app layout, records table, the two documents).
- `data.js` — sample June 2026 entries + settings + formatting helpers on `window.HL`.
- `parts.js` — `AppHeader`, `AddHoursForm`, `FilterPanel`, `SummaryPanel`, `ExportPanel`, `RecordsTable`.
- `documents.js` — `HoursReportDoc`, `InvoiceDoc`, `SettingsModal`.
- `HourLogApp.js` — stateful composer + view switcher; mounts to `#hl-root`.

> The screen scripts contain JSX but use a `.js` extension **deliberately**: the
> design-system compiler bundles every `.jsx` in the project into `_ds_bundle.js`,
> and these are app screens with mount side-effects, not library primitives.
> Babel transpiles them via `type="text/babel"` regardless of extension.

## Composition
Every control is a bundle primitive — `Button`, `IconButton`, `Card`, `Input`,
`Select`, `TimeField`, `Checkbox`, `HoursPill`, `Badge`, `SummaryRow`, `Modal`.
The kit adds only screen-level layout and the printable-document markup; it does
not re-implement any primitive.
