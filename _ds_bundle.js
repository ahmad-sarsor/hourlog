/* @ds-bundle: {"format":3,"namespace":"HourLogILDesignSystem_d9be1f","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"HoursPill","sourcePath":"components/display/HoursPill.jsx"},{"name":"SummaryRow","sourcePath":"components/display/SummaryRow.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Checkbox","sourcePath":"components/inputs/Checkbox.jsx"},{"name":"Input","sourcePath":"components/inputs/Input.jsx"},{"name":"Select","sourcePath":"components/inputs/Select.jsx"},{"name":"TimeField","sourcePath":"components/inputs/TimeField.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"29fb11278811","components/buttons/IconButton.jsx":"809b529df300","components/display/Badge.jsx":"c2f2b68055a2","components/display/Card.jsx":"db449e1aba6e","components/display/HoursPill.jsx":"0a9ec426de57","components/display/SummaryRow.jsx":"9e3c6920970e","components/feedback/Modal.jsx":"bd9894df1696","components/inputs/Checkbox.jsx":"d1c343c6a89f","components/inputs/Input.jsx":"902159e3f3e0","components/inputs/Select.jsx":"b301964b8628","components/inputs/TimeField.jsx":"4dd35046e135","ui_kits/hourlog/HourLogApp.js":"27ae5180086d","ui_kits/hourlog/HourLogApp2.js":"c95ef4e03e56","ui_kits/hourlog/data.js":"8114f261728e","ui_kits/hourlog/documents.js":"c77c8e904b55","ui_kits/hourlog/parts.js":"cf92946e0123","ui_kits/hourlog/parts2.js":"65b2c402d18a","ui_kits/hourlog/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HourLogILDesignSystem_d9be1f = window.HourLogILDesignSystem_d9be1f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Self-contained styles, injected once. Values copied verbatim from the
   source app's .btn rules so consumers get pixel-identical controls. */
const HL_BTN_CSS = `
.hl-btn{
  font-family:var(--font-sans);font-size:var(--fs-body);font-weight:var(--fw-semibold);
  line-height:1;border-radius:var(--radius-lg);padding:9px 18px;cursor:pointer;
  border:1px solid transparent;transition:var(--transition);display:inline-flex;
  align-items:center;justify-content:center;gap:7px;white-space:nowrap;
}
.hl-btn__i{font-size:1.05em;line-height:1;display:inline-flex}
.hl-btn--primary{background:var(--accent);color:#fff}
.hl-btn--primary:hover{background:var(--accent-strong)}
.hl-btn--gold{background:var(--gold);color:#fff}
.hl-btn--gold:hover{filter:brightness(.94)}
.hl-btn--dark{background:var(--ink);color:#fff}
.hl-btn--dark:hover{background:#0d1720}
.hl-btn--teal{background:var(--teal);color:#fff}
.hl-btn--teal:hover{filter:brightness(.95)}
.hl-btn--ghost{background:#fff;color:var(--ink-2);border-color:var(--line)}
.hl-btn--ghost:hover{border-color:#c3cdd6}
.hl-btn--utility{background:var(--surface);color:var(--ink-2);border-color:var(--line);box-shadow:var(--shadow-card)}
.hl-btn--utility:hover{border-color:#c3cdd6;transform:var(--lift)}
.hl-btn--sm{padding:8px 18px;font-size:var(--fs-control-sm)}
.hl-btn--xs{padding:7px 14px;font-size:var(--fs-table)}
.hl-btn--block{width:100%}
.hl-btn:disabled{opacity:.45;cursor:not-allowed;transform:none;filter:none}
`;
let hlBtnDone = false;
function ensureHlBtn() {
  if (typeof document === 'undefined' || hlBtnDone) return;
  hlBtnDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'button');
  s.textContent = HL_BTN_CSS;
  document.head.appendChild(s);
}

/**
 * Button — the workhorse text button. Six brand variants, three sizes.
 * `icon` renders a leading unicode glyph (the app has no icon font).
 */
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  icon = null,
  children,
  className = '',
  ...rest
}) {
  ensureHlBtn();
  const cls = ['hl-btn', 'hl-btn--' + variant, size !== 'md' ? 'hl-btn--' + size : '', block ? 'hl-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), icon != null && /*#__PURE__*/React.createElement("span", {
    className: "hl-btn__i",
    "aria-hidden": "true"
  }, icon), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Square, icon-only action button — the row actions (edit / delete) in the
   records table. Verbatim from the source `.mini` / `.mini.del` rules. */
const HL_ICONBTN_CSS = `
.hl-iconbtn{
  border-radius:var(--radius-sm);border:1px solid var(--line);background:#fff;
  cursor:pointer;display:grid;place-items:center;color:var(--ink-2);
  transition:var(--transition);padding:0;line-height:1;
}
.hl-iconbtn--sm{width:var(--mini-size);height:var(--mini-size);font-size:14px}
.hl-iconbtn--md{width:var(--control-h);height:var(--control-h);font-size:15px;border-radius:var(--radius-md)}
.hl-iconbtn:hover{background:var(--surface-hover)}
.hl-iconbtn--danger:hover{color:var(--danger);border-color:var(--danger-border);background:var(--danger-soft)}
.hl-iconbtn:disabled{opacity:.45;cursor:not-allowed}
`;
let hlIconBtnDone = false;
function ensureHlIconBtn() {
  if (typeof document === 'undefined' || hlIconBtnDone) return;
  hlIconBtnDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'iconbutton');
  s.textContent = HL_ICONBTN_CSS;
  document.head.appendChild(s);
}

/**
 * IconButton — compact square button holding a single unicode glyph.
 * Used for the per-row edit (✎) and delete (✕) actions in the table.
 */
function IconButton({
  glyph,
  variant = 'default',
  size = 'sm',
  className = '',
  ...rest
}) {
  ensureHlIconBtn();
  const cls = ['hl-iconbtn', 'hl-iconbtn--' + size, variant === 'danger' ? 'hl-iconbtn--danger' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, glyph));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Small status marker. In the app these appear as coloured text ("טרם דווחו",
   the red weekend day) and as soft chips. Tones map to the semantic palette:
   green = reported/done, gold = pending, red = weekend/overdue, neutral. */
const HL_BADGE_CSS = `
.hl-badge{display:inline-flex;align-items:center;gap:5px;font-size:var(--fs-card-title);
  font-weight:var(--fw-semibold);line-height:1;white-space:nowrap}
.hl-badge--chip{border-radius:999px;padding:4px 10px}
.hl-badge--text{padding:0}
.hl-badge--green.hl-badge--chip{background:var(--accent-soft);color:var(--accent-strong)}
.hl-badge--green.hl-badge--text{color:var(--accent-strong)}
.hl-badge--gold.hl-badge--chip{background:var(--gold-soft);color:var(--gold-ink)}
.hl-badge--gold.hl-badge--text{color:var(--gold-ink)}
.hl-badge--red.hl-badge--chip{background:var(--danger-soft);color:var(--danger)}
.hl-badge--red.hl-badge--text{color:var(--weekend)}
.hl-badge--neutral.hl-badge--chip{background:var(--surface-hover);color:var(--muted)}
.hl-badge--neutral.hl-badge--text{color:var(--muted)}
`;
let hlBadgeDone = false;
function ensureHlBadge() {
  if (typeof document === 'undefined' || hlBadgeDone) return;
  hlBadgeDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'badge');
  s.textContent = HL_BADGE_CSS;
  document.head.appendChild(s);
}

/**
 * Badge — a small status marker. `variant="chip"` is a soft pill; `"text"` is
 * bold coloured text (the app's `טרם דווחו` count and red weekend labels).
 */
function Badge({
  tone = 'neutral',
  variant = 'chip',
  children,
  className = '',
  ...rest
}) {
  ensureHlBadge();
  const cls = ['hl-badge', 'hl-badge--' + variant, 'hl-badge--' + tone, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The surface card — floating white paper on the blue-grey canvas, with an
   optional uppercase eyebrow title and an optional right-aligned action.
   Verbatim from the source `.card` / `.card-title` / `.card-head` rules. */
const HL_CARD_CSS = `
.hl-card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-2xl);
  padding:18px 18px 20px;box-shadow:var(--shadow-card)}
.hl-card__title{margin:0 0 14px;font-size:var(--fs-card-title);font-weight:var(--fw-bold);
  letter-spacing:var(--ls-eyebrow);color:var(--muted);text-transform:uppercase}
.hl-card__head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:14px}
.hl-card__head .hl-card__title{margin:0}
`;
let hlCardDone = false;
function ensureHlCard() {
  if (typeof document === 'undefined' || hlCardDone) return;
  hlCardDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'card');
  s.textContent = HL_CARD_CSS;
  document.head.appendChild(s);
}

/**
 * Card — the primary surface container. Provide `title` for the uppercase
 * muted eyebrow; provide `action` alongside `title` to get the header row
 * (title on one side, a control on the other).
 */
function Card({
  title,
  action,
  children,
  className = '',
  style,
  ...rest
}) {
  ensureHlCard();
  return /*#__PURE__*/React.createElement("section", _extends({
    className: ['hl-card', className].filter(Boolean).join(' '),
    style: style
  }, rest), title && action ? /*#__PURE__*/React.createElement("div", {
    className: "hl-card__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "hl-card__title"
  }, title), action) : title ? /*#__PURE__*/React.createElement("h2", {
    className: "hl-card__title"
  }, title) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/HoursPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The live-hours pill: a soft-green rounded chip showing the computed
   duration, with a red "warn" tone for invalid ranges. Verbatim from the
   source `.hours-pill` / `.hours-pill.warn` rules. */
const HL_PILL_CSS = `
.hl-pill{display:inline-flex;align-items:center;gap:6px;background:var(--accent-soft);
  color:var(--accent-strong);font-size:var(--fs-table);font-weight:var(--fw-bold);
  border-radius:var(--radius-md);padding:9px 13px;line-height:1;white-space:nowrap}
.hl-pill--warn{background:var(--danger-soft);color:var(--danger)}
.hl-pill--gold{background:var(--gold-soft);color:var(--gold-ink)}
.hl-pill__i{font-size:1.05em;line-height:1}
`;
let hlPillDone = false;
function ensureHlPill() {
  if (typeof document === 'undefined' || hlPillDone) return;
  hlPillDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'pill');
  s.textContent = HL_PILL_CSS;
  document.head.appendChild(s);
}

/**
 * HoursPill — a soft rounded chip. In the product it shows the live computed
 * session length ("⏱ 8.5 שעות") next to the add button; the `warn` tone
 * flags an invalid time range. `gold` is available for document contexts.
 */
function HoursPill({
  tone = 'default',
  icon = null,
  children,
  className = '',
  ...rest
}) {
  ensureHlPill();
  const cls = ['hl-pill', tone === 'warn' ? 'hl-pill--warn' : '', tone === 'gold' ? 'hl-pill--gold' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon != null && /*#__PURE__*/React.createElement("span", {
    className: "hl-pill__i",
    "aria-hidden": "true"
  }, icon), children);
}
Object.assign(__ds_scope, { HoursPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/HoursPill.jsx", error: String((e && e.message) || e) }); }

// components/display/SummaryRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A label/value line for the summary & totals cards. Consecutive rows get a
   hairline divider; the `total` row gets a heavier rule and an accent value.
   Verbatim from the source `.sum-row` rules (sibling divider preserved). */
const HL_SUMROW_CSS = `
.hl-sumrow{display:flex;justify-content:space-between;align-items:baseline;padding:8px 0;
  font-size:var(--fs-body);color:var(--ink-2)}
.hl-sumrow + .hl-sumrow{border-top:1px solid var(--line-softer)}
.hl-sumrow b{font-size:var(--fs-value);font-weight:var(--fw-bold);color:var(--ink)}
.hl-sumrow.hl-sumrow--total{margin-top:4px;border-top:2px solid var(--line);padding-top:12px}
.hl-sumrow.hl-sumrow--total span{font-weight:var(--fw-bold)}
.hl-sumrow.hl-sumrow--total b{font-size:var(--fs-lead);color:var(--accent)}
`;
let hlSumrowDone = false;
function ensureHlSumrow() {
  if (typeof document === 'undefined' || hlSumrowDone) return;
  hlSumrowDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'summaryrow');
  s.textContent = HL_SUMROW_CSS;
  document.head.appendChild(s);
}

/**
 * SummaryRow — a label/value line for the summary and totals cards. Stack
 * several inside a Card; the last one with `total` shows the accent-green
 * grand total. Values are tabular-figure aligned.
 */
function SummaryRow({
  label,
  value,
  total = false,
  className = '',
  ...rest
}) {
  ensureHlSumrow();
  const cls = ['hl-sumrow', total ? 'hl-sumrow--total' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("b", {
    className: "num"
  }, value));
}
Object.assign(__ds_scope, { SummaryRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SummaryRow.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/* Centered dialog over a dimmed ink overlay. Verbatim from the source
   `.modal-back` / `.modal` rules — used for the settings sheet. */
const HL_MODAL_CSS = `
.hl-modalback{position:fixed;inset:0;background:var(--overlay);display:grid;place-items:center;
  padding:18px;z-index:50;animation:hl-fade-in .2s ease both}
.hl-modal{background:#fff;border-radius:var(--radius-3xl);padding:22px;width:100%;max-width:440px;
  max-height:88vh;overflow-y:auto;box-shadow:var(--shadow-modal);direction:rtl}
.hl-modal__title{margin:0 0 4px;font-size:var(--fs-lead);font-weight:var(--fw-bold);color:var(--ink)}
.hl-modal__sub{margin:0 0 16px;color:var(--muted);font-size:var(--fs-card-title)}
.hl-modal__foot{display:flex;justify-content:space-between;align-items:center;margin-top:8px;gap:10px}
`;
let hlModalDone = false;
function ensureHlModal() {
  if (typeof document === 'undefined' || hlModalDone) return;
  hlModalDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'modal');
  s.textContent = HL_MODAL_CSS;
  document.head.appendChild(s);
}

/**
 * Modal — a centered dialog over a dimmed overlay. Clicking the backdrop (or
 * pressing Escape) calls `onClose`. `title` / `subtitle` render the header;
 * `footer` renders the action row (typically a danger link + a primary save).
 */
function Modal({
  open = true,
  onClose,
  title,
  subtitle,
  footer,
  children,
  width = 440,
  className = ''
}) {
  ensureHlModal();
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "hl-modalback",
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: ['hl-modal', className].filter(Boolean).join(' '),
    style: {
      maxWidth: width
    },
    role: "dialog",
    "aria-modal": "true"
  }, title && /*#__PURE__*/React.createElement("h3", {
    className: "hl-modal__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "hl-modal__sub"
  }, subtitle), children, footer && /*#__PURE__*/React.createElement("div", {
    className: "hl-modal__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/inputs/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The reported-toggle checkbox: a 26px square that fills brand-green with a
   white check when on. Verbatim from the source `.chk` rule. */
const HL_CHECK_CSS = `
.hl-check{
  width:var(--check-size);height:var(--check-size);border-radius:var(--radius-xs);
  border:1.5px solid var(--line);background:#fff;cursor:pointer;display:grid;place-items:center;
  font-size:15px;font-weight:var(--fw-extrabold);color:transparent;transition:var(--transition);
  padding:0;line-height:1;
}
.hl-check:hover{border-color:var(--accent)}
.hl-check.on{background:var(--accent);border-color:var(--accent);color:#fff}
.hl-check:disabled{opacity:.45;cursor:not-allowed}
`;
let hlCheckDone = false;
function ensureHlCheck() {
  if (typeof document === 'undefined' || hlCheckDone) return;
  hlCheckDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'checkbox');
  s.textContent = HL_CHECK_CSS;
  document.head.appendChild(s);
}

/**
 * Checkbox — the square toggle used to mark a record as "reported". Off is a
 * hairline outline; on fills brand-green with a white check. Controlled via
 * `checked` / `onChange`.
 */
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  title,
  className = '',
  ...rest
}) {
  ensureHlCheck();
  const cls = ['hl-check', checked ? 'on' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "checkbox",
    "aria-checked": checked,
    className: cls,
    disabled: disabled,
    title: title,
    onClick: () => onChange && onChange(!checked)
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, checked ? '✓' : ''));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inputs/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/inputs/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Text/number/date field with optional stacked label. Verbatim from the
   source `input` + `.form-row label` rules, including the accent focus ring. */
const HL_INPUT_CSS = `
.hl-field{display:flex;flex-direction:column;gap:5px;font-size:var(--fs-label);
  font-weight:var(--fw-semibold);color:var(--ink-2);min-width:0}
.hl-input{
  font-family:var(--font-sans);font-size:var(--fs-body);color:var(--ink);background:#fff;
  border:1px solid var(--line);border-radius:var(--radius-md);padding:8px 10px;width:100%;
  transition:var(--transition);
}
.hl-input::placeholder{color:var(--muted)}
.hl-input:focus{outline:none;border-color:var(--accent);box-shadow:var(--shadow-focus)}
.hl-input:disabled{background:var(--surface-hover);color:var(--muted);cursor:not-allowed}
.hl-field__note{font-size:var(--fs-caption);font-weight:var(--fw-regular);color:var(--muted);margin-top:1px}
`;
let hlInputDone = false;
function ensureHlInput() {
  if (typeof document === 'undefined' || hlInputDone) return;
  hlInputDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'input');
  s.textContent = HL_INPUT_CSS;
  document.head.appendChild(s);
}

/**
 * Input — a labelled text / number / date field. Pass `label` to get the
 * stacked field-label layout used throughout the forms; omit it for a bare
 * input. `note` renders muted helper text beneath.
 */
function Input({
  label,
  note,
  type = 'text',
  className = '',
  style,
  ...rest
}) {
  ensureHlInput();
  const input = /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    className: ['hl-input', label ? '' : className].filter(Boolean).join(' ')
  }, rest));
  if (!label) return input;
  return /*#__PURE__*/React.createElement("label", {
    className: ['hl-field', className].filter(Boolean).join(' '),
    style: style
  }, label, input, note && /*#__PURE__*/React.createElement("span", {
    className: "hl-field__note"
  }, note));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inputs/Input.jsx", error: String((e && e.message) || e) }); }

// components/inputs/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Native <select>, styled to match the inputs. Shares the field-label
   layout with Input. Verbatim from the source `select` rules. */
const HL_SELECT_CSS = `
.hl-selfield{display:flex;flex-direction:column;gap:5px;font-size:var(--fs-label);
  font-weight:var(--fw-semibold);color:var(--ink-2);min-width:0}
.hl-select{
  font-family:var(--font-sans);font-size:var(--fs-body);color:var(--ink);background:#fff;
  border:1px solid var(--line);border-radius:var(--radius-md);padding:8px 10px;width:100%;
  transition:var(--transition);cursor:pointer;
}
.hl-select:focus{outline:none;border-color:var(--accent);box-shadow:var(--shadow-focus)}
.hl-select:disabled{background:var(--surface-hover);color:var(--muted);cursor:not-allowed}
`;
let hlSelectDone = false;
function ensureHlSelect() {
  if (typeof document === 'undefined' || hlSelectDone) return;
  hlSelectDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'select');
  s.textContent = HL_SELECT_CSS;
  document.head.appendChild(s);
}

/**
 * Select — a native <select> styled to match Input. Pass `options` as an
 * array of `{value,label}` (or plain strings), or provide <option> children.
 * `label` gives the stacked field layout used in the filter panel.
 */
function Select({
  label,
  options,
  children,
  className = '',
  style,
  ...rest
}) {
  ensureHlSelect();
  const opts = options ? options.map((o, i) => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: i,
      value: v
    }, l);
  }) : children;
  const select = /*#__PURE__*/React.createElement("select", _extends({
    className: ['hl-select', label ? '' : className].filter(Boolean).join(' ')
  }, rest), opts);
  if (!label) return select;
  return /*#__PURE__*/React.createElement("label", {
    className: ['hl-selfield', className].filter(Boolean).join(' '),
    style: style
  }, label, select);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inputs/Select.jsx", error: String((e && e.message) || e) }); }

// components/inputs/TimeField.jsx
try { (() => {
/* The signature 24-hour time picker: two inline selects (HH : MM) forced to
   LTR inside the RTL layout, from the source `.time-inline` rule. */
const HL_TIME_CSS = `
.hl-time{display:inline-flex;direction:ltr;align-items:center;gap:5px;justify-content:flex-start}
.hl-time__sel{
  font-family:var(--font-sans);font-size:var(--fs-body);color:var(--ink);background:#fff;
  border:1px solid var(--line);border-radius:var(--radius-md);padding:8px 6px;
  width:auto;min-width:60px;text-align:center;transition:var(--transition);cursor:pointer;
}
.hl-time__sel:focus{outline:none;border-color:var(--accent);box-shadow:var(--shadow-focus)}
.hl-time__sep{font-weight:var(--fw-bold);color:var(--muted)}
`;
let hlTimeDone = false;
function ensureHlTime() {
  if (typeof document === 'undefined' || hlTimeDone) return;
  hlTimeDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'timefield');
  s.textContent = HL_TIME_CSS;
  document.head.appendChild(s);
}
const pad = n => String(n).padStart(2, '0');

/**
 * TimeField — a 24-hour inline time picker (HH : MM) built from two selects.
 * Value is an "HH:MM" string. Minutes step by `minuteStep` (default 5).
 * The control is always LTR even inside the RTL page, matching the app.
 */
function TimeField({
  value = '09:00',
  onChange,
  minuteStep = 5,
  disabled = false,
  className = ''
}) {
  ensureHlTime();
  const [h, m] = (value || '09:00').split(':');
  const hours = [];
  for (let i = 0; i < 24; i++) hours.push(pad(i));
  const mins = [];
  for (let i = 0; i < 60; i += minuteStep) mins.push(pad(i));
  if (m && !mins.includes(m)) mins.push(m); // preserve an off-step value

  const emit = (nh, nm) => onChange && onChange(nh + ':' + nm);
  return /*#__PURE__*/React.createElement("div", {
    className: ['hl-time', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("select", {
    className: "hl-time__sel",
    value: h,
    disabled: disabled,
    onChange: e => emit(e.target.value, m),
    "aria-label": "\u05E9\u05E2\u05D4"
  }, hours.map(x => /*#__PURE__*/React.createElement("option", {
    key: x,
    value: x
  }, x))), /*#__PURE__*/React.createElement("span", {
    className: "hl-time__sep"
  }, ":"), /*#__PURE__*/React.createElement("select", {
    className: "hl-time__sel",
    value: m,
    disabled: disabled,
    onChange: e => emit(h, e.target.value),
    "aria-label": "\u05D3\u05E7\u05D5\u05EA"
  }, mins.map(x => /*#__PURE__*/React.createElement("option", {
    key: x,
    value: x
  }, x))));
}
Object.assign(__ds_scope, { TimeField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inputs/TimeField.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hourlog/HourLogApp.js
try { (() => {
/* ============================================================
   HourLog IL — UI kit · interactive app
   Ties the parts together with live state: add / toggle / delete
   records, filter by month & client, open settings, and preview
   the three exported documents. Mounts to #root.
   ============================================================ */
(function () {
  const {
    AppHeader,
    AddHoursForm,
    FilterPanel,
    SummaryPanel,
    ExportPanel,
    RecordsTable,
    HoursReportDoc,
    InvoiceDoc,
    SettingsModal
  } = window;
  if (!window.HL || !AppHeader || !window.HourLogILDesignSystem_d9be1f) return; // deps missing — skip quietly
  const {
    Button
  } = window.HourLogILDesignSystem_d9be1f;
  const H = window.HL;
  const HE_MONTHS = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];
  const monthLabel = ym => {
    const p = ym.split('-');
    return HE_MONTHS[+p[1] - 1] + ' ' + p[0];
  };
  const PAGE = 10;
  function HourLogApp() {
    const [entries, setEntries] = React.useState(H.entries);
    const [month, setMonth] = React.useState('2026-06');
    const [client, setClient] = React.useState('all');
    const [showAll, setShowAll] = React.useState(false);
    const [view, setView] = React.useState('app'); // app | manager | client | invoice
    const [settingsOpen, setSettingsOpen] = React.useState(false);
    const settings = H.settings;

    // derived
    const months = React.useMemo(() => {
      const s = {};
      entries.forEach(e => {
        s[e.date.slice(0, 7)] = 1;
      });
      const list = Object.keys(s).sort().reverse().map(m => ({
        value: m,
        label: monthLabel(m)
      }));
      return [{
        value: 'all',
        label: 'כל החודשים'
      }].concat(list);
    }, [entries]);
    const clients = React.useMemo(() => {
      const s = {};
      entries.forEach(e => {
        if (e.client) s[e.client] = 1;
      });
      const list = Object.keys(s).sort().map(c => ({
        value: c,
        label: c
      }));
      return [{
        value: 'all',
        label: 'כל הלקוחות'
      }].concat(list);
    }, [entries]);
    const rows = React.useMemo(() => entries.filter(e => (month === 'all' || e.date.slice(0, 7) === month) && (client === 'all' || e.client === client)).sort((a, b) => a.date < b.date ? 1 : a.date > b.date ? -1 : 0), [entries, month, client]);
    const totals = React.useMemo(() => {
      let hrs = 0,
        sub = 0;
      rows.forEach(e => {
        hrs += +e.hours;
        sub += e.hours * e.rate;
      });
      hrs = H.round2(hrs);
      sub = H.round2(sub);
      const vat = H.round2(sub * settings.vatRate / 100);
      return {
        hours: hrs,
        subtotal: sub,
        vat,
        total: H.round2(sub + vat)
      };
    }, [rows]);
    const unreported = rows.filter(e => !e.reported).length;
    const period = React.useMemo(() => {
      if (!rows.length) return {
        from: '2026-06-25',
        to: '2026-06-25'
      };
      const d = rows.map(e => e.date).sort();
      return {
        from: d[0],
        to: d[d.length - 1]
      };
    }, [rows]);
    const periodTxt = month === 'all' ? 'כל התקופות' : monthLabel(month);

    // actions
    const addEntry = e => {
      e._new = true;
      setEntries(cur => [e].concat(cur));
      setTimeout(() => {
        e._new = false;
        setEntries(cur => cur.slice());
      }, 450);
    };
    const toggle = id => setEntries(cur => cur.map(e => e.id === id ? Object.assign({}, e, {
      reported: !e.reported
    }) : e));
    const remove = id => setEntries(cur => cur.filter(e => e.id !== id));
    const markAll = () => {
      const ids = {};
      rows.forEach(e => {
        ids[e.id] = 1;
      });
      const anyUnrep = rows.some(e => !e.reported);
      setEntries(cur => cur.map(e => ids[e.id] ? Object.assign({}, e, {
        reported: anyUnrep
      }) : e));
    };
    const flash = id => {
      setEntries(cur => cur.map(e => e.id === id ? Object.assign({}, e, {
        _new: true
      }) : e));
      setTimeout(() => setEntries(cur => cur.map(e => e.id === id ? Object.assign({}, e, {
        _new: false
      }) : e)), 450);
    };

    // document view
    if (view !== 'app') {
      const backBar = /*#__PURE__*/React.createElement("div", {
        className: "tt-head",
        style: {
          marginBottom: 16
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "brand"
      }, /*#__PURE__*/React.createElement("div", {
        className: "brand-mark"
      }, "\u20AA"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "brand-name"
      }, view === 'manager' ? 'דוח שעות · מנהל' : view === 'client' ? 'דוח שעות · לקוח' : 'חשבונית מס/קבלה'), /*#__PURE__*/React.createElement("div", {
        className: "brand-sub"
      }, "\u05EA\u05E6\u05D5\u05D2\u05D4 \u05DE\u05E7\u05D3\u05D9\u05DE\u05D4 \u05E9\u05DC \u05D4\u05DE\u05E1\u05DE\u05DA \xB7 ", periodTxt))), /*#__PURE__*/React.createElement(Button, {
        variant: "utility",
        icon: "\u2192",
        onClick: () => setView('app')
      }, "\u05D7\u05D6\u05E8\u05D4 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA"));
      return /*#__PURE__*/React.createElement("div", {
        className: "tt-root"
      }, /*#__PURE__*/React.createElement("div", {
        className: "tt-wrap"
      }, backBar, /*#__PURE__*/React.createElement("div", {
        className: "doc-stage"
      }, view === 'invoice' ? /*#__PURE__*/React.createElement(InvoiceDoc, {
        rows: rows,
        totals: totals,
        settings: settings,
        invoiceNum: H.invoiceNum,
        period: period
      }) : /*#__PURE__*/React.createElement(HoursReportDoc, {
        kind: view,
        rows: rows.slice().reverse(),
        totals: totals,
        settings: settings,
        period: periodTxt
      }))));
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "tt-root"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tt-wrap"
    }, /*#__PURE__*/React.createElement(AppHeader, {
      businessName: settings.businessName,
      onSettings: () => setSettingsOpen(true)
    }), /*#__PURE__*/React.createElement("div", {
      className: "tt-grid"
    }, /*#__PURE__*/React.createElement("main", {
      className: "tt-main"
    }, /*#__PURE__*/React.createElement(AddHoursForm, {
      onAdd: addEntry,
      defaultClient: settings.clientDefault,
      defaultDesc: settings.defaultDescription,
      defaultRate: settings.defaultRate
    }), /*#__PURE__*/React.createElement(RecordsTable, {
      rows: rows,
      unreported: unreported,
      showAll: showAll,
      page: PAGE,
      onToggle: toggle,
      onEdit: flash,
      onDelete: remove,
      onMarkAll: markAll,
      onShowMore: () => setShowAll(v => !v)
    })), /*#__PURE__*/React.createElement("aside", {
      className: "tt-aside"
    }, /*#__PURE__*/React.createElement(FilterPanel, {
      months: months,
      clients: clients,
      month: month,
      client: client,
      onMonth: v => {
        setMonth(v);
        setShowAll(false);
      },
      onClient: v => {
        setClient(v);
        setShowAll(false);
      }
    }), /*#__PURE__*/React.createElement(SummaryPanel, {
      totals: totals,
      vatRate: settings.vatRate
    }), /*#__PURE__*/React.createElement(ExportPanel, {
      disabled: rows.length === 0,
      onManager: () => setView('manager'),
      onClient: () => setView('client'),
      onInvoice: () => setView('invoice')
    }), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "\u05D0\u05EA\u05E8 \u05E2\u05E6\u05DE\u05D0\u05D9 \u2014 \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E0\u05E9\u05DE\u05E8\u05D9\u05DD \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF \u05E9\u05DC\u05DA \u05D1\u05DE\u05DB\u05E9\u05D9\u05E8 \u05D6\u05D4. \u05E7\u05D5\u05D1\u05E6\u05D9 \u05D4\u05D3\u05D5\u05D7 (Excel/PDF) \u05DE\u05E9\u05DE\u05E9\u05D9\u05DD \u05D2\u05DD \u05DB\u05D2\u05D9\u05D1\u05D5\u05D9.")))), /*#__PURE__*/React.createElement(SettingsModal, {
      open: settingsOpen,
      onClose: () => setSettingsOpen(false),
      settings: settings
    }));
  }

  /* Mount once into the kit's own container (deliberately NOT #root: the
     ds-bundle may carry a compiled copy of this app; its getElementById('root')
     must find nothing so its synchronous createRoot(null) throw is swallowed by
     the bundle's per-module try/catch). */
  const hlContainer = document.getElementById('hl-root');
  if (hlContainer && !hlContainer.hasChildNodes()) {
    ReactDOM.createRoot(hlContainer).render(/*#__PURE__*/React.createElement(HourLogApp, null));
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hourlog/HourLogApp.js", error: String((e && e.message) || e) }); }

// ui_kits/hourlog/HourLogApp2.js
try { (() => {
/* ============================================================
   HourLog IL — Dashboard v2 · interactive app + Tweaks
   Same state logic as v1, composed from the refined V2 parts
   (header bar, CTA form, total-first summary, stacked export)
   while reusing the v1 RecordsTable / FilterPanel / documents.
   Tweaks: density, reported-progress bar, curated brand hue.
   ============================================================ */
(function () {
  const {
    AppHeaderV2,
    AddHoursFormV2,
    SummaryPanelV2,
    ExportPanelV2,
    RecordsTable,
    FilterPanel,
    HoursReportDoc,
    InvoiceDoc,
    SettingsModal,
    useTweaks,
    TweaksPanel,
    TweakSection,
    TweakRadio,
    TweakToggle,
    TweakColor
  } = window;
  if (!window.HL || !AppHeaderV2 || !RecordsTable || !useTweaks || !window.HourLogILDesignSystem_d9be1f) return;
  const {
    Button
  } = window.HourLogILDesignSystem_d9be1f;
  const H2 = window.HL;
  const HE_MONTHS2 = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];
  const monthLabel2 = ym => ym === 'all' ? 'כל החודשים' : HE_MONTHS2[+ym.split('-')[1] - 1] + ' ' + ym.split('-')[0];
  const PAGE2 = 10;
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "density": "רגילה",
    "showProgress": true,
    "brandPalette": ["#0E7C5E", "#0B6A50", "#E4F1EB", "#F4FBF8"]
  } /*EDITMODE-END*/;
  const BRAND_OPTIONS = [["#0E7C5E", "#0B6A50", "#E4F1EB", "#F4FBF8"], ["#0F6B6B", "#0C5858", "#E1F0F0", "#F2FAFA"], ["#1F7A46", "#196239", "#E4F2E9", "#F3FBF6"]];
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
      r.setProperty('--accent', p[0]);
      r.setProperty('--accent-strong', p[1]);
      r.setProperty('--accent-soft', p[2]);
      r.setProperty('--accent-tint', p[3]);
    }, [t.brandPalette]);
    const months = React.useMemo(() => {
      const s = {};
      entries.forEach(e => {
        s[e.date.slice(0, 7)] = 1;
      });
      return [{
        value: 'all',
        label: 'כל החודשים'
      }].concat(Object.keys(s).sort().reverse().map(m => ({
        value: m,
        label: monthLabel2(m)
      })));
    }, [entries]);
    const clients = React.useMemo(() => {
      const s = {};
      entries.forEach(e => {
        if (e.client) s[e.client] = 1;
      });
      return [{
        value: 'all',
        label: 'כל הלקוחות'
      }].concat(Object.keys(s).sort().map(c => ({
        value: c,
        label: c
      })));
    }, [entries]);
    const rows = React.useMemo(() => entries.filter(e => (month === 'all' || e.date.slice(0, 7) === month) && (client === 'all' || e.client === client)).sort((a, b) => a.date < b.date ? 1 : a.date > b.date ? -1 : 0), [entries, month, client]);
    const totals = React.useMemo(() => {
      let hrs = 0,
        sub = 0;
      rows.forEach(e => {
        hrs += +e.hours;
        sub += e.hours * e.rate;
      });
      hrs = H2.round2(hrs);
      sub = H2.round2(sub);
      const vat = H2.round2(sub * settings.vatRate / 100);
      return {
        hours: hrs,
        subtotal: sub,
        vat,
        total: H2.round2(sub + vat)
      };
    }, [rows]);
    const reportedHours = React.useMemo(() => H2.round2(rows.filter(e => e.reported).reduce((a, e) => a + +e.hours, 0)), [rows]);
    const unreported = rows.filter(e => !e.reported).length;
    const period = React.useMemo(() => {
      if (!rows.length) return {
        from: '2026-06-25',
        to: '2026-06-25'
      };
      const d = rows.map(e => e.date).sort();
      return {
        from: d[0],
        to: d[d.length - 1]
      };
    }, [rows]);
    const periodTxt = month === 'all' ? 'כל התקופות' : monthLabel2(month);
    const addEntry = e => {
      e._new = true;
      setEntries(cur => [e].concat(cur));
      setTimeout(() => {
        e._new = false;
        setEntries(cur => cur.slice());
      }, 450);
    };
    const toggle = id => setEntries(cur => cur.map(e => e.id === id ? Object.assign({}, e, {
      reported: !e.reported
    }) : e));
    const remove = id => setEntries(cur => cur.filter(e => e.id !== id));
    const markAll = () => {
      const ids = {};
      rows.forEach(e => {
        ids[e.id] = 1;
      });
      const anyUnrep = rows.some(e => !e.reported);
      setEntries(cur => cur.map(e => ids[e.id] ? Object.assign({}, e, {
        reported: anyUnrep
      }) : e));
    };
    const flash = id => {
      setEntries(cur => cur.map(e => e.id === id ? Object.assign({}, e, {
        _new: true
      }) : e));
      setTimeout(() => setEntries(cur => cur.map(e => e.id === id ? Object.assign({}, e, {
        _new: false
      }) : e)), 450);
    };
    const rootCls = 'tt-root' + (t.density === 'דחוסה' ? ' v2-compact' : '');
    const tweaks = /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
      label: "\u05EA\u05E6\u05D5\u05D2\u05D4"
    }), /*#__PURE__*/React.createElement(TweakRadio, {
      label: "\u05E6\u05E4\u05D9\u05E4\u05D5\u05EA",
      value: t.density,
      options: ['רגילה', 'דחוסה'],
      onChange: v => setTweak('density', v)
    }), /*#__PURE__*/React.createElement(TweakToggle, {
      label: "\u05E1\u05E8\u05D2\u05DC \u05D3\u05D9\u05D5\u05D5\u05D7 \u05D1\u05E1\u05D9\u05DB\u05D5\u05DD",
      value: t.showProgress,
      onChange: v => setTweak('showProgress', v)
    }), /*#__PURE__*/React.createElement(TweakSection, {
      label: "\u05DE\u05D5\u05EA\u05D2"
    }), /*#__PURE__*/React.createElement(TweakColor, {
      label: "\u05D2\u05D5\u05D5\u05DF",
      value: t.brandPalette,
      options: BRAND_OPTIONS,
      onChange: v => setTweak('brandPalette', v)
    }));
    if (view !== 'app') {
      return /*#__PURE__*/React.createElement("div", {
        className: rootCls
      }, /*#__PURE__*/React.createElement("div", {
        className: "tt-wrap"
      }, /*#__PURE__*/React.createElement("header", {
        className: "v2-head",
        style: {
          marginBottom: 18
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "brand"
      }, /*#__PURE__*/React.createElement("div", {
        className: "brand-mark"
      }, "\u20AA"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "brand-name"
      }, view === 'manager' ? 'דוח שעות · מנהל' : view === 'client' ? 'דוח שעות · לקוח' : 'חשבונית מס/קבלה'), /*#__PURE__*/React.createElement("div", {
        className: "brand-sub"
      }, "\u05EA\u05E6\u05D5\u05D2\u05D4 \u05DE\u05E7\u05D3\u05D9\u05DE\u05D4 \u05E9\u05DC \u05D4\u05DE\u05E1\u05DE\u05DA \xB7 ", periodTxt))), /*#__PURE__*/React.createElement(Button, {
        variant: "utility",
        icon: "\u2192",
        onClick: () => setView('app')
      }, "\u05D7\u05D6\u05E8\u05D4 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA")), /*#__PURE__*/React.createElement("div", {
        className: "doc-stage"
      }, view === 'invoice' ? /*#__PURE__*/React.createElement(InvoiceDoc, {
        rows: rows,
        totals: totals,
        settings: settings,
        invoiceNum: H2.invoiceNum,
        period: period
      }) : /*#__PURE__*/React.createElement(HoursReportDoc, {
        kind: view,
        rows: rows.slice().reverse(),
        totals: totals,
        settings: settings,
        period: periodTxt
      }))), tweaks);
    }
    return /*#__PURE__*/React.createElement("div", {
      className: rootCls
    }, /*#__PURE__*/React.createElement("div", {
      className: "tt-wrap"
    }, /*#__PURE__*/React.createElement(AppHeaderV2, {
      businessName: settings.businessName,
      monthLabel: periodTxt,
      onSettings: () => setSettingsOpen(true)
    }), /*#__PURE__*/React.createElement("div", {
      className: "tt-grid"
    }, /*#__PURE__*/React.createElement("main", {
      className: "tt-main"
    }, /*#__PURE__*/React.createElement(AddHoursFormV2, {
      onAdd: addEntry,
      defaultClient: settings.clientDefault,
      defaultDesc: settings.defaultDescription,
      defaultRate: settings.defaultRate
    }), /*#__PURE__*/React.createElement(RecordsTable, {
      rows: rows,
      unreported: unreported,
      showAll: showAll,
      page: PAGE2,
      onToggle: toggle,
      onEdit: flash,
      onDelete: remove,
      onMarkAll: markAll,
      onShowMore: () => setShowAll(v => !v)
    })), /*#__PURE__*/React.createElement("aside", {
      className: "tt-aside"
    }, /*#__PURE__*/React.createElement(SummaryPanelV2, {
      totals: totals,
      vatRate: settings.vatRate,
      reportedHours: reportedHours,
      showProgress: t.showProgress,
      monthLabel: periodTxt
    }), /*#__PURE__*/React.createElement(FilterPanel, {
      months: months,
      clients: clients,
      month: month,
      client: client,
      onMonth: v => {
        setMonth(v);
        setShowAll(false);
      },
      onClient: v => {
        setClient(v);
        setShowAll(false);
      }
    }), /*#__PURE__*/React.createElement(ExportPanelV2, {
      disabled: rows.length === 0,
      onManager: () => setView('manager'),
      onClient: () => setView('client'),
      onInvoice: () => setView('invoice')
    }), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "\u05D0\u05EA\u05E8 \u05E2\u05E6\u05DE\u05D0\u05D9 \u2014 \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E0\u05E9\u05DE\u05E8\u05D9\u05DD \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF \u05E9\u05DC\u05DA \u05D1\u05DE\u05DB\u05E9\u05D9\u05E8 \u05D6\u05D4. \u05E7\u05D5\u05D1\u05E6\u05D9 \u05D4\u05D3\u05D5\u05D7 (Excel/PDF) \u05DE\u05E9\u05DE\u05E9\u05D9\u05DD \u05D2\u05DD \u05DB\u05D2\u05D9\u05D1\u05D5\u05D9.")))), /*#__PURE__*/React.createElement(SettingsModal, {
      open: settingsOpen,
      onClose: () => setSettingsOpen(false),
      settings: settings
    }), tweaks);
  }
  const v2Container = document.getElementById('hl-root');
  if (v2Container && !v2Container.hasChildNodes()) {
    ReactDOM.createRoot(v2Container).render(/*#__PURE__*/React.createElement(HourLogAppV2, null));
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hourlog/HourLogApp2.js", error: String((e && e.message) || e) }); }

// ui_kits/hourlog/data.js
try { (() => {
/* ============================================================
   HourLog IL — UI kit sample data & formatting helpers
   Realistic seed data for a freelance data/BI engineer's June.
   Exposed on window.HL for the screen scripts.
   ============================================================ */
(function () {
  var HE_DAYS = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
  function dayIdx(ymd) {
    var p = ymd.split('-');
    return new Date(+p[0], +p[1] - 1, +p[2]).getDay();
  }
  function dayName(ymd) {
    return HE_DAYS[dayIdx(ymd)];
  }
  function isWeekend(ymd) {
    var g = dayIdx(ymd);
    return g === 5 || g === 6;
  }
  function fmtDate(ymd) {
    if (!ymd) return '';
    var p = ymd.split('-');
    return p[2] + '/' + p[1] + '/' + p[0];
  }
  var nf = new Intl.NumberFormat('he-IL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  var nfH = new Intl.NumberFormat('he-IL', {
    maximumFractionDigits: 2
  });
  function money(n) {
    return nf.format(n || 0) + ' ₪';
  }
  function invMoney(n) {
    return '₪ ' + nf.format(n || 0);
  }
  function round2(x) {
    return Math.round((x + Number.EPSILON) * 100) / 100;
  }
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
    includeReceipt: true
  };

  // date, description, start, end, hours, reported — client & rate are constant here
  var seed = [['2026-06-24', 'פיתוח דשבורד Power BI — מכירות', '09:00', '17:30', 8.5, false], ['2026-06-23', 'בניית מודל dbt לנתוני חיוב', '09:30', '17:00', 7.5, false], ['2026-06-22', 'אופטימיזציית שאילתות SQL', '10:00', '16:00', 6, false], ['2026-06-18', 'הקמת מחסן נתונים (DWH) — שלב א׳', '09:00', '18:00', 9, true], ['2026-06-17', 'ETL — טעינת נתוני CRM', '09:00', '17:00', 8, true], ['2026-06-16', 'ישיבת אפיון עם צוות הנתונים', '11:00', '14:00', 3, true], ['2026-06-15', 'בניית דוחות Tableau', '09:00', '17:30', 8.5, true], ['2026-06-11', 'תחזוקת פייפליין Airflow', '09:00', '16:30', 7.5, true], ['2026-06-10', 'מידול נתונים — סכמת כוכב', '09:00', '17:00', 8, true], ['2026-06-09', 'בדיקות איכות נתונים (DQ)', '10:00', '17:00', 7, true], ['2026-06-08', 'פיתוח API לשליפת נתונים', '09:00', '18:00', 9, true], ['2026-06-04', 'הטמעת Snowflake — הגדרות ראשוניות', '09:00', '17:00', 8, true], ['2026-06-03', 'ניתוח דרישות דוחות מנהלים', '09:30', '16:30', 7, true], ['2026-06-01', 'אפיון ארכיטקטורת נתונים', '09:00', '17:00', 8, true]];
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
    HE_DAYS: HE_DAYS,
    dayName: dayName,
    isWeekend: isWeekend,
    fmtDate: fmtDate,
    money: money,
    invMoney: invMoney,
    nf: nf,
    nfH: nfH,
    round2: round2,
    settings: settings,
    entries: entries,
    invoiceNum: 40006
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hourlog/data.js", error: String((e && e.message) || e) }); }

// ui_kits/hourlog/documents.js
try { (() => {
/* ============================================================
   HourLog IL — UI kit · documents & settings
   The two printable outputs (ink hours-report, teal tax-invoice)
   and the settings sheet. Ported from the source builders.
   ============================================================ */
(function () {
  const DNS = window.HourLogILDesignSystem_d9be1f;
  if (!DNS || !window.HL) return; // bundle or data missing — skip quietly
  const HLd = window.HL;

  /* ---- Hours report (manager / client) — ink -------------- */
  function HoursReportDoc({
    kind,
    rows,
    totals,
    settings,
    period
  }) {
    const isClient = kind === 'client';
    const title = isClient ? 'דוח שעות ללקוח' : 'דוח שעות';
    return /*#__PURE__*/React.createElement("div", {
      className: "doc-sheet"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pdf-doc"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pdf-head"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "pdf-biz-name"
    }, settings.businessName), settings.businessId && /*#__PURE__*/React.createElement("div", {
      className: "pdf-biz-id"
    }, "\u05E2\u05D5\u05E1\u05E7 / \u05D7.\u05E4: ", settings.businessId)), /*#__PURE__*/React.createElement("div", {
      className: "pdf-doc-meta"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pdf-doc-title"
    }, title), /*#__PURE__*/React.createElement("div", null, "\u05EA\u05E7\u05D5\u05E4\u05D4: ", period), isClient && /*#__PURE__*/React.createElement("div", null, "\u05DC\u05E7\u05D5\u05D7: ", settings.clientDefault), /*#__PURE__*/React.createElement("div", null, "\u05D4\u05D5\u05E4\u05E7: 2026-06-25"))), /*#__PURE__*/React.createElement("table", {
      className: "pdf-table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      className: "c"
    }, "\u05EA\u05D0\u05E8\u05D9\u05DA"), /*#__PURE__*/React.createElement("th", {
      className: "c"
    }, "\u05DE\u05E9\u05E2\u05D4"), /*#__PURE__*/React.createElement("th", {
      className: "c"
    }, "\u05E2\u05D3 \u05E9\u05E2\u05D4"), /*#__PURE__*/React.createElement("th", {
      className: "c"
    }, "\u05E9\u05E2\u05D5\u05EA"), isClient && /*#__PURE__*/React.createElement("th", null, "\u05E1\u05DB\u05D5\u05DD"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(e => /*#__PURE__*/React.createElement("tr", {
      key: e.id
    }, /*#__PURE__*/React.createElement("td", {
      className: "pdf-num"
    }, HLd.fmtDate(e.date)), /*#__PURE__*/React.createElement("td", {
      className: "pdf-num",
      style: {
        textAlign: 'center'
      }
    }, e.startTime), /*#__PURE__*/React.createElement("td", {
      className: "pdf-num",
      style: {
        textAlign: 'center'
      }
    }, e.endTime), /*#__PURE__*/React.createElement("td", {
      className: "pdf-num",
      style: {
        textAlign: 'center'
      }
    }, HLd.nfH.format(e.hours)), isClient && /*#__PURE__*/React.createElement("td", {
      className: "pdf-num"
    }, HLd.money(e.hours * e.rate)))))), /*#__PURE__*/React.createElement("div", {
      className: "pdf-totals-wrap"
    }, /*#__PURE__*/React.createElement("table", {
      className: "pdf-totals"
    }, /*#__PURE__*/React.createElement("tbody", null, isClient ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u05E1\u05D4\"\u05DB \u05E9\u05E2\u05D5\u05EA"), /*#__PURE__*/React.createElement("td", null, HLd.nfH.format(totals.hours))), /*#__PURE__*/React.createElement("tr", {
      className: "sep"
    }, /*#__PURE__*/React.createElement("td", null, "\u05E1\u05DB\u05D5\u05DD \u05DC\u05E4\u05E0\u05D9 \u05DE\u05E2\"\u05DE"), /*#__PURE__*/React.createElement("td", null, HLd.money(totals.subtotal))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u05DE\u05E2\"\u05DE ", settings.vatRate, "%"), /*#__PURE__*/React.createElement("td", null, HLd.money(totals.vat))), /*#__PURE__*/React.createElement("tr", {
      className: "grand"
    }, /*#__PURE__*/React.createElement("td", null, "\u05E1\u05D4\"\u05DB"), /*#__PURE__*/React.createElement("td", null, HLd.money(totals.total)))) : /*#__PURE__*/React.createElement("tr", {
      className: "grand"
    }, /*#__PURE__*/React.createElement("td", null, "\u05E1\u05D4\"\u05DB \u05E9\u05E2\u05D5\u05EA"), /*#__PURE__*/React.createElement("td", null, HLd.nfH.format(totals.hours)))))), /*#__PURE__*/React.createElement("div", {
      className: "pdf-foot"
    }, "\u05D4\u05D5\u05E4\u05E7 \u05DE\u05DE\u05E2\u05E8\u05DB\u05EA \u05D3\u05D9\u05D5\u05D5\u05D7 \u05D4\u05E9\u05E2\u05D5\u05EA.")));
  }

  /* ---- Tax-invoice / receipt — teal ----------------------- */
  function InvoiceDoc({
    rows,
    totals,
    settings,
    invoiceNum,
    period
  }) {
    // group by description + rate
    const groups = {};
    const order = [];
    rows.forEach(e => {
      const key = (e.description || settings.defaultDescription) + '||' + e.rate;
      if (!groups[key]) {
        groups[key] = {
          desc: e.description || settings.defaultDescription,
          rate: e.rate,
          hours: 0
        };
        order.push(key);
      }
      groups[key].hours += e.hours;
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "doc-sheet"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inv-doc"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "inv-bizname"
    }, settings.businessName), settings.businessId && /*#__PURE__*/React.createElement("div", {
      className: "inv-bizmeta"
    }, "\u05E2\u05D5\u05E1\u05E7 \u05DE\u05D5\u05E8\u05E9\u05D4 : ", settings.businessId), settings.businessEmail && /*#__PURE__*/React.createElement("div", {
      className: "inv-bizmeta"
    }, settings.businessEmail)), /*#__PURE__*/React.createElement("div", {
      className: "inv-titlerow"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inv-title"
    }, settings.invoiceTitle, " ", /*#__PURE__*/React.createElement("span", {
      className: "inv-num"
    }, invoiceNum))), /*#__PURE__*/React.createElement("div", {
      className: "inv-parties"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inv-client"
    }, /*#__PURE__*/React.createElement("div", null, "\u05DC\u05DB\u05D1\u05D5\u05D3 : ", settings.clientDefault), settings.clientAddress && /*#__PURE__*/React.createElement("div", null, settings.clientAddress), settings.clientDefaultId && /*#__PURE__*/React.createElement("div", null, "\u05D7.\u05E4 : ", settings.clientDefaultId)), /*#__PURE__*/React.createElement("div", {
      className: "inv-dates"
    }, /*#__PURE__*/React.createElement("div", null, "\u05EA\u05D0\u05E8\u05D9\u05DA ", HLd.fmtDate(period.from), " , \u05E2\u05D3 ", HLd.fmtDate(period.to)))), /*#__PURE__*/React.createElement("table", {
      className: "inv-table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      className: "r"
    }, "\u05E4\u05D9\u05E8\u05D5\u05D8"), /*#__PURE__*/React.createElement("th", null, "\u05DB\u05DE\u05D5\u05EA"), /*#__PURE__*/React.createElement("th", null, "\u05DE\u05D7\u05D9\u05E8 \u05DC\u05D9\u05D7\u05D9\u05D3\u05D4"), /*#__PURE__*/React.createElement("th", null, "\u05E1\u05D4\"\u05DB"))), /*#__PURE__*/React.createElement("tbody", null, order.map(key => {
      const g = groups[key];
      const h = HLd.round2(g.hours);
      return /*#__PURE__*/React.createElement("tr", {
        key: key
      }, /*#__PURE__*/React.createElement("td", {
        className: "r"
      }, g.desc), /*#__PURE__*/React.createElement("td", null, HLd.nfH.format(h)), /*#__PURE__*/React.createElement("td", {
        className: "money"
      }, HLd.invMoney(g.rate)), /*#__PURE__*/React.createElement("td", {
        className: "money"
      }, HLd.invMoney(HLd.round2(h * g.rate))));
    }), /*#__PURE__*/React.createElement("tr", {
      className: "inv-total-row"
    }, /*#__PURE__*/React.createElement("td", {
      colSpan: "2"
    }), /*#__PURE__*/React.createElement("td", {
      className: "lbl"
    }, "\u05E1\u05D4\"\u05DB"), /*#__PURE__*/React.createElement("td", {
      className: "val"
    }, HLd.invMoney(totals.subtotal))), /*#__PURE__*/React.createElement("tr", {
      className: "inv-total-row"
    }, /*#__PURE__*/React.createElement("td", {
      colSpan: "2"
    }), /*#__PURE__*/React.createElement("td", {
      className: "lbl"
    }, "\u05DE\u05E2\"\u05DE ", settings.vatRate, "%"), /*#__PURE__*/React.createElement("td", {
      className: "val"
    }, HLd.invMoney(totals.vat))), /*#__PURE__*/React.createElement("tr", {
      className: "inv-total-row grand"
    }, /*#__PURE__*/React.createElement("td", {
      colSpan: "2"
    }), /*#__PURE__*/React.createElement("td", {
      className: "lbl"
    }, "\u05E1\u05D4\"\u05DB \u05DC\u05EA\u05E9\u05DC\u05D5\u05DD"), /*#__PURE__*/React.createElement("td", {
      className: "val"
    }, HLd.invMoney(totals.total))))), settings.includeReceipt && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "inv-section"
    }, "\u05E4\u05E8\u05D8\u05D9 \u05EA\u05E9\u05DC\u05D5\u05DD"), /*#__PURE__*/React.createElement("table", {
      className: "inv-table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      className: "r"
    }, "\u05D0\u05DE\u05E6\u05E2\u05D9 \u05EA\u05E9\u05DC\u05D5\u05DD"), /*#__PURE__*/React.createElement("th", null, "\u05E4\u05D9\u05E8\u05D5\u05D8"), /*#__PURE__*/React.createElement("th", null, "\u05EA\u05D0\u05E8\u05D9\u05DA"), /*#__PURE__*/React.createElement("th", null, "\u05E1\u05DB\u05D5\u05DD"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      className: "r"
    }, settings.paymentMethod), /*#__PURE__*/React.createElement("td", null, settings.paymentDetails), /*#__PURE__*/React.createElement("td", null, HLd.fmtDate('2026-06-25')), /*#__PURE__*/React.createElement("td", {
      className: "money"
    }, HLd.invMoney(totals.total))), /*#__PURE__*/React.createElement("tr", {
      className: "inv-total-row grand"
    }, /*#__PURE__*/React.createElement("td", {
      colSpan: "2"
    }), /*#__PURE__*/React.createElement("td", {
      className: "lbl"
    }, "\u05E1\u05D4\"\u05DB \u05E9\u05D5\u05DC\u05DD"), /*#__PURE__*/React.createElement("td", {
      className: "val"
    }, HLd.invMoney(totals.total)))))), settings.invoiceNote && /*#__PURE__*/React.createElement("div", {
      className: "inv-notes"
    }, "\u05D4\u05E2\u05E8\u05D5\u05EA \u05DC\u05DE\u05E1\u05DE\u05DA :", /*#__PURE__*/React.createElement("br", null), settings.invoiceNote), /*#__PURE__*/React.createElement("div", {
      className: "inv-sign"
    }, "\u05D7\u05EA\u05D9\u05DE\u05D4 : ", /*#__PURE__*/React.createElement("span", {
      className: "line"
    })), /*#__PURE__*/React.createElement("div", {
      className: "inv-foot"
    }, "\u05DE\u05E1\u05DE\u05DA \u05D6\u05D4 \u05D4\u05D5\u05E4\u05E7 \u05DE\u05DE\u05E2\u05E8\u05DB\u05EA \u05D3\u05D9\u05D5\u05D5\u05D7 \u05D4\u05E9\u05E2\u05D5\u05EA \xB7 ", settings.invoiceTitle, " \u05DE\u05E1' ", invoiceNum, " \xB7 \u05E2\u05DE\u05D5\u05D3 1 \u05DE\u05EA\u05D5\u05DA 1")));
  }

  /* ---- Settings sheet ------------------------------------- */
  function SettingsModal({
    open,
    onClose,
    settings
  }) {
    const {
      Modal,
      Input,
      Button
    } = DNS;
    const [s, setS] = React.useState(settings);
    React.useEffect(() => {
      setS(settings);
    }, [settings, open]);
    const set = k => e => setS(Object.assign({}, s, {
      [k]: e.target.value
    }));
    const gridStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    };
    const gap = /*#__PURE__*/React.createElement("div", {
      style: {
        height: 12
      }
    });
    return /*#__PURE__*/React.createElement(Modal, {
      open: open,
      onClose: onClose,
      title: "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA",
      subtitle: "\u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05DC\u05D4 \u05DE\u05D5\u05E4\u05D9\u05E2\u05D9\u05DD \u05D1\u05DB\u05D5\u05EA\u05E8\u05EA \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05D5\u05D1\u05E7\u05D1\u05E6\u05D9 \u05D4\u05D9\u05D9\u05E6\u05D5\u05D0.",
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "xs",
        onClick: onClose
      }, "\u05D0\u05E4\u05E1 \u05D0\u05EA \u05DB\u05DC \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD"), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        onClick: onClose
      }, "\u05E9\u05DE\u05D5\u05E8 \u05D5\u05E1\u05D2\u05D5\u05E8"))
    }, /*#__PURE__*/React.createElement(Input, {
      label: "\u05E9\u05DD \u05D4\u05E2\u05E1\u05E7",
      value: s.businessName,
      onChange: set('businessName')
    }), gap, /*#__PURE__*/React.createElement(Input, {
      label: "\u05E2\u05D5\u05E1\u05E7 \u05DE\u05D5\u05E8\u05E9\u05D4 / \u05D7.\u05E4",
      value: s.businessId,
      onChange: set('businessId')
    }), gap, /*#__PURE__*/React.createElement(Input, {
      label: "\u05DC\u05E7\u05D5\u05D7 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC",
      value: s.clientDefault,
      onChange: set('clientDefault')
    }), gap, /*#__PURE__*/React.createElement(Input, {
      label: "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05E2\u05D1\u05D5\u05D3\u05D4 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC",
      value: s.defaultDescription,
      onChange: set('defaultDescription')
    }), gap, /*#__PURE__*/React.createElement("div", {
      style: gridStyle
    }, /*#__PURE__*/React.createElement(Input, {
      label: "\u05EA\u05E2\u05E8\u05D9\u05E3 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC",
      type: "number",
      value: s.defaultRate,
      onChange: set('defaultRate')
    }), /*#__PURE__*/React.createElement(Input, {
      label: "\u05DE\u05E2\"\u05DE %",
      type: "number",
      value: s.vatRate,
      onChange: set('vatRate')
    }), /*#__PURE__*/React.createElement(Input, {
      label: "\u05DE\u05D8\u05D1\u05E2",
      value: s.currency,
      onChange: set('currency')
    })), gap, /*#__PURE__*/React.createElement("div", {
      style: gridStyle
    }, /*#__PURE__*/React.createElement(Input, {
      label: "\u05DB\u05D5\u05EA\u05E8\u05EA \u05D4\u05DE\u05E1\u05DE\u05DA",
      value: s.invoiceTitle,
      onChange: set('invoiceTitle')
    }), /*#__PURE__*/React.createElement(Input, {
      label: "\u05DE\u05E1\u05E4\u05E8 \u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05EA \u05D4\u05D1\u05D0",
      type: "number",
      defaultValue: "40006"
    })), gap, /*#__PURE__*/React.createElement(Input, {
      label: "\u05D0\u05DE\u05E6\u05E2\u05D9 \u05EA\u05E9\u05DC\u05D5\u05DD",
      value: s.paymentMethod,
      onChange: set('paymentMethod')
    }), gap, /*#__PURE__*/React.createElement(Input, {
      label: "\u05E4\u05E8\u05D8\u05D9 \u05EA\u05E9\u05DC\u05D5\u05DD (\u05D1\u05E0\u05E7 / \u05D7\u05E9\u05D1\u05D5\u05DF)",
      value: s.paymentDetails,
      onChange: set('paymentDetails')
    }));
  }
  Object.assign(window, {
    HoursReportDoc,
    InvoiceDoc,
    SettingsModal
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hourlog/documents.js", error: String((e && e.message) || e) }); }

// ui_kits/hourlog/parts.js
try { (() => {
/* ============================================================
   HourLog IL — UI kit · presentational parts
   Header, add-hours form, filter, summary, export and the
   records table — all composed from the component bundle.
   Exposed on window for HourLogApp.jsx.
   ============================================================ */
(function () {
  const NS = window.HourLogILDesignSystem_d9be1f;
  if (!NS || !window.HL) return; // bundle or data missing — skip quietly
  const {
    Button,
    IconButton,
    Card,
    Input,
    Select,
    TimeField,
    Checkbox,
    HoursPill,
    Badge,
    SummaryRow
  } = NS;
  const HLh = window.HL;

  /* ---- App header ----------------------------------------- */
  function AppHeader({
    businessName,
    onSettings
  }) {
    return /*#__PURE__*/React.createElement("header", {
      className: "tt-head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "brand"
    }, /*#__PURE__*/React.createElement("div", {
      className: "brand-mark"
    }, "\u20AA"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "brand-name"
    }, businessName), /*#__PURE__*/React.createElement("div", {
      className: "brand-sub"
    }, "\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E9\u05E2\u05D5\u05EA \u05D5\u05D4\u05E4\u05E7\u05EA \u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05D5\u05EA"))), /*#__PURE__*/React.createElement(Button, {
      variant: "utility",
      icon: "\u2699",
      onClick: onSettings
    }, "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA"));
  }

  /* ---- Add-hours form ------------------------------------- */
  function AddHoursForm({
    onAdd,
    defaultClient,
    defaultDesc,
    defaultRate
  }) {
    const [date, setDate] = React.useState('2026-06-25');
    const [client, setClient] = React.useState(defaultClient);
    const [desc, setDesc] = React.useState(defaultDesc);
    const [start, setStart] = React.useState('09:00');
    const [end, setEnd] = React.useState('17:00');
    const [rate, setRate] = React.useState(defaultRate);
    const toMin = t => {
      const p = t.split(':');
      return +p[0] * 60 + +p[1];
    };
    const hours = HLh.round2((toMin(end) - toMin(start)) / 60);
    const valid = hours > 0;
    const pill = !isFinite(hours) ? /*#__PURE__*/React.createElement(HoursPill, null, "\u05D4\u05D6\u05DF \u05E9\u05E2\u05D5\u05EA") : hours <= 0 ? /*#__PURE__*/React.createElement(HoursPill, {
      tone: "warn"
    }, "\u05D8\u05D5\u05D5\u05D7 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF") : /*#__PURE__*/React.createElement(HoursPill, {
      icon: "\u23F1"
    }, HLh.nfH.format(hours) + ' שעות');
    const submit = () => {
      if (!valid) return;
      onAdd({
        id: 'n' + Date.now(),
        date,
        client: client.trim(),
        description: desc.trim(),
        startTime: start,
        endTime: end,
        hours,
        rate: +rate || 0,
        reported: false
      });
    };
    return /*#__PURE__*/React.createElement(Card, {
      title: "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E9\u05E2\u05D5\u05EA"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-row"
    }, /*#__PURE__*/React.createElement(Input, {
      label: "\u05EA\u05D0\u05E8\u05D9\u05DA",
      type: "date",
      value: date,
      onChange: e => setDate(e.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: "\u05DC\u05E7\u05D5\u05D7",
      className: "f-grow",
      value: client,
      placeholder: "\u05E9\u05DD \u05D4\u05DC\u05E7\u05D5\u05D7",
      onChange: e => setClient(e.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4",
      className: "f-grow",
      value: desc,
      placeholder: "\u05DC\u05DE\u05E9\u05DC: \u05E4\u05D9\u05EA\u05D5\u05D7 \u05D3\u05E9\u05D1\u05D5\u05E8\u05D3, \u05D1\u05E0\u05D9\u05D9\u05EA \u05DE\u05D5\u05D3\u05DC dbt\u2026",
      onChange: e => setDesc(e.target.value)
    }), /*#__PURE__*/React.createElement("label", {
      className: "fld f-tm"
    }, "\u05DE\u05E9\u05E2\u05D4", /*#__PURE__*/React.createElement(TimeField, {
      value: start,
      onChange: setStart
    })), /*#__PURE__*/React.createElement("label", {
      className: "fld f-tm"
    }, "\u05E2\u05D3 \u05E9\u05E2\u05D4", /*#__PURE__*/React.createElement(TimeField, {
      value: end,
      onChange: setEnd
    })), /*#__PURE__*/React.createElement(Input, {
      label: "\u05EA\u05E2\u05E8\u05D9\u05E3/\u05E9\u05E2\u05D4 (\u05DC\u05DC\u05D0 \u05DE\u05E2\"\u05DE)",
      className: "f-rate",
      type: "number",
      min: "0",
      value: rate,
      onChange: e => setRate(e.target.value)
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-actions"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "\uFF0B",
      onClick: submit,
      disabled: !valid
    }, "\u05D4\u05D5\u05E1\u05E3 \u05E8\u05E9\u05D5\u05DE\u05D4"), pill), /*#__PURE__*/React.createElement("p", {
      className: "form-note"
    }, "\u05D4\u05E9\u05E2\u05D5\u05EA \u05D1\u05E4\u05D5\u05E8\u05DE\u05D8 24 \u05E9\u05E2\u05D5\u05EA. \u05D4\u05EA\u05E2\u05E8\u05D9\u05E3 \u05DE\u05D5\u05D6\u05DF \u05DC\u05DC\u05D0 \u05DE\u05E2\"\u05DE \u2014 \u05D4\u05DE\u05E2\"\u05DE \u05DE\u05EA\u05D5\u05D5\u05E1\u05E3 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05DC\u05E1\u05DB\u05D5\u05DD \u05D4\u05DB\u05D5\u05DC\u05DC."));
  }

  /* ---- Filter panel --------------------------------------- */
  function FilterPanel({
    months,
    clients,
    month,
    client,
    onMonth,
    onClient
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      title: "\u05E1\u05D9\u05E0\u05D5\u05DF"
    }, /*#__PURE__*/React.createElement("div", {
      className: "filter-stack"
    }, /*#__PURE__*/React.createElement(Select, {
      label: "\u05D7\u05D5\u05D3\u05E9",
      value: month,
      onChange: e => onMonth(e.target.value),
      options: months
    }), /*#__PURE__*/React.createElement(Select, {
      label: "\u05DC\u05E7\u05D5\u05D7",
      value: client,
      onChange: e => onClient(e.target.value),
      options: clients
    })));
  }

  /* ---- Summary panel -------------------------------------- */
  function SummaryPanel({
    totals,
    vatRate
  }) {
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SummaryRow, {
      label: "\u05E9\u05E2\u05D5\u05EA",
      value: HLh.nfH.format(totals.hours)
    }), /*#__PURE__*/React.createElement(SummaryRow, {
      label: "\u05E1\u05DB\u05D5\u05DD \u05DC\u05E4\u05E0\u05D9 \u05DE\u05E2\"\u05DE",
      value: HLh.money(totals.subtotal)
    }), /*#__PURE__*/React.createElement(SummaryRow, {
      label: 'מע"מ ' + vatRate + '%',
      value: HLh.money(totals.vat)
    }), /*#__PURE__*/React.createElement(SummaryRow, {
      label: "\u05E1\u05D4\"\u05DB \u05DB\u05D5\u05DC\u05DC \u05DE\u05E2\"\u05DE",
      value: HLh.money(totals.total),
      total: true
    }));
  }

  /* ---- Export panel --------------------------------------- */
  function ExportPanel({
    disabled,
    onManager,
    onClient,
    onInvoice
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      title: "\u05D9\u05D9\u05E6\u05D5\u05D0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "export-group"
    }, /*#__PURE__*/React.createElement("span", {
      className: "export-label"
    }, "\u05D3\u05D5\u05D7 \u05E9\u05E2\u05D5\u05EA (\u05DE\u05E0\u05D4\u05DC)"), /*#__PURE__*/React.createElement("div", {
      className: "export-btns"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      block: true,
      disabled: disabled,
      onClick: onManager
    }, "Excel"), /*#__PURE__*/React.createElement(Button, {
      variant: "dark",
      size: "sm",
      block: true,
      disabled: disabled,
      onClick: onManager
    }, "PDF"))), /*#__PURE__*/React.createElement("div", {
      className: "export-group"
    }, /*#__PURE__*/React.createElement("span", {
      className: "export-label"
    }, "\u05D3\u05D5\u05D7 \u05E9\u05E2\u05D5\u05EA \u05DC\u05DC\u05E7\u05D5\u05D7"), /*#__PURE__*/React.createElement("div", {
      className: "export-btns"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      block: true,
      disabled: disabled,
      onClick: onClient
    }, "Excel"), /*#__PURE__*/React.createElement(Button, {
      variant: "dark",
      size: "sm",
      block: true,
      disabled: disabled,
      onClick: onClient
    }, "PDF"))), /*#__PURE__*/React.createElement("div", {
      className: "export-group"
    }, /*#__PURE__*/React.createElement("span", {
      className: "export-label"
    }, "\u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05EA \u05DE\u05E1/\u05E7\u05D1\u05DC\u05D4"), /*#__PURE__*/React.createElement("div", {
      className: "export-btns"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "teal",
      size: "sm",
      block: true,
      disabled: disabled,
      onClick: onInvoice
    }, "\u05D4\u05E4\u05E7\u05EA PDF"))));
  }

  /* ---- Records table -------------------------------------- */
  function RecordsTable({
    rows,
    unreported,
    showAll,
    page,
    onToggle,
    onEdit,
    onDelete,
    onMarkAll,
    onShowMore
  }) {
    const shown = showAll ? rows : rows.slice(0, page);
    const badge = unreported > 0 ? /*#__PURE__*/React.createElement(Badge, {
      tone: "gold",
      variant: "text"
    }, ' · טרם דווחו: ' + unreported) : rows.length ? /*#__PURE__*/React.createElement(Badge, {
      tone: "green",
      variant: "text"
    }, ' · הכל דווח ✓') : null;
    const markLabel = unreported > 0 ? '✓ סמן הכל כדווח' : '↺ בטל דיווח לתצוגה';
    const action = /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "xs",
      disabled: rows.length === 0,
      onClick: onMarkAll
    }, markLabel);
    return /*#__PURE__*/React.createElement(Card, {
      title: /*#__PURE__*/React.createElement(React.Fragment, null, "\u05E8\u05E9\u05D5\u05DE\u05D5\u05EA \xB7 ", rows.length, badge),
      action: action
    }, /*#__PURE__*/React.createElement("div", {
      className: "table-scroll"
    }, /*#__PURE__*/React.createElement("table", {
      className: "tt-table"
    }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
      style: {
        width: '9%'
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: '6%'
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: '17%'
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: '17%'
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: '11%'
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: '6%'
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: '8%'
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: '11%'
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: '6%'
      }
    }), /*#__PURE__*/React.createElement("col", {
      style: {
        width: '9%'
      }
    })), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u05EA\u05D0\u05E8\u05D9\u05DA"), /*#__PURE__*/React.createElement("th", null, "\u05D9\u05D5\u05DD"), /*#__PURE__*/React.createElement("th", null, "\u05DC\u05E7\u05D5\u05D7"), /*#__PURE__*/React.createElement("th", null, "\u05EA\u05D9\u05D0\u05D5\u05E8"), /*#__PURE__*/React.createElement("th", null, "\u05DE\u05E9\u05E2\u05D4\u2013\u05E2\u05D3"), /*#__PURE__*/React.createElement("th", null, "\u05E9\u05E2\u05D5\u05EA"), /*#__PURE__*/React.createElement("th", null, "\u05EA\u05E2\u05E8\u05D9\u05E3"), /*#__PURE__*/React.createElement("th", null, "\u05E1\u05DB\u05D5\u05DD"), /*#__PURE__*/React.createElement("th", null, "\u05D3\u05D5\u05D5\u05D7"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, shown.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: "10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "empty"
    }, "\u05E2\u05D3\u05D9\u05D9\u05DF \u05D0\u05D9\u05DF \u05E8\u05E9\u05D5\u05DE\u05D5\u05EA \u05D1\u05EA\u05E6\u05D5\u05D2\u05D4 \u05D6\u05D5.", /*#__PURE__*/React.createElement("br", null), "\u05D4\u05D5\u05E1\u05E3 \u05D0\u05EA \u05D4\u05E8\u05E9\u05D5\u05DE\u05D4 \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D4 \u05D1\u05D8\u05D5\u05E4\u05E1 \u05DC\u05DE\u05E2\u05DC\u05D4."))), shown.map(e => {
      const wk = HLh.isWeekend(e.date);
      return /*#__PURE__*/React.createElement("tr", {
        key: e.id,
        className: (e.reported ? 'reported' : '') + (e._new ? ' newrow' : '')
      }, /*#__PURE__*/React.createElement("td", {
        className: "c-num"
      }, HLh.fmtDate(e.date)), /*#__PURE__*/React.createElement("td", {
        className: 'c-day' + (wk ? ' weekend' : '')
      }, HLh.dayName(e.date)), /*#__PURE__*/React.createElement("td", {
        className: "c-ell",
        title: e.client
      }, e.client || /*#__PURE__*/React.createElement("span", {
        className: "dash"
      }, "\u2014")), /*#__PURE__*/React.createElement("td", {
        className: "c-ell",
        title: e.description
      }, e.description || /*#__PURE__*/React.createElement("span", {
        className: "dash"
      }, "\u2014")), /*#__PURE__*/React.createElement("td", {
        className: "c-time"
      }, e.startTime && e.endTime ? e.startTime + '–' + e.endTime : /*#__PURE__*/React.createElement("span", {
        className: "dash"
      }, "\u2014")), /*#__PURE__*/React.createElement("td", {
        className: "c-num"
      }, HLh.nfH.format(e.hours)), /*#__PURE__*/React.createElement("td", {
        className: "c-num"
      }, HLh.nf.format(e.rate)), /*#__PURE__*/React.createElement("td", {
        className: "c-amount"
      }, HLh.money(e.hours * e.rate)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Checkbox, {
        checked: e.reported,
        onChange: () => onToggle(e.id),
        title: e.reported ? 'דווח — לחץ לביטול' : 'סמן כדווח'
      })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
        className: "row-actions"
      }, /*#__PURE__*/React.createElement(IconButton, {
        glyph: "\u270E",
        title: "\u05E2\u05E8\u05D9\u05DB\u05D4",
        onClick: () => onEdit(e.id)
      }), /*#__PURE__*/React.createElement(IconButton, {
        glyph: "\u2715",
        variant: "danger",
        title: "\u05DE\u05D7\u05D9\u05E7\u05D4",
        onClick: () => onDelete(e.id)
      }))));
    })))), rows.length > page && /*#__PURE__*/React.createElement("div", {
      className: "show-more-wrap"
    }, /*#__PURE__*/React.createElement("button", {
      className: "show-more",
      onClick: onShowMore
    }, showAll ? '▲ הצג פחות' : '▼ הצג את כל הימים (עוד ' + (rows.length - page) + ')')));
  }
  Object.assign(window, {
    AppHeader,
    AddHoursForm,
    FilterPanel,
    SummaryPanel,
    ExportPanel,
    RecordsTable
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hourlog/parts.js", error: String((e && e.message) || e) }); }

// ui_kits/hourlog/parts2.js
try { (() => {
/* ============================================================
   HourLog IL — Dashboard v2 · refined parts
   Header bar, form with prominent CTA, total-first summary with
   a reported-progress bar, and a stacked export panel. Reuses
   the same bundle primitives; v1 parts stay untouched.
   ============================================================ */
(function () {
  const NS2 = window.HourLogILDesignSystem_d9be1f;
  if (!NS2 || !window.HL) return; // bundle or data missing — skip quietly
  const {
    Button,
    Card,
    Input,
    TimeField,
    HoursPill,
    SummaryRow
  } = NS2;
  const HL2 = window.HL;

  /* ---- Header bar ------------------------------------------ */
  function AppHeaderV2({
    businessName,
    monthLabel,
    onSettings
  }) {
    return /*#__PURE__*/React.createElement("header", {
      className: "v2-head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "brand"
    }, /*#__PURE__*/React.createElement("div", {
      className: "brand-mark"
    }, "\u20AA"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "brand-name"
    }, businessName), /*#__PURE__*/React.createElement("div", {
      className: "brand-sub"
    }, "\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E9\u05E2\u05D5\u05EA \u05D5\u05D4\u05E4\u05E7\u05EA \u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05D5\u05EA"))), /*#__PURE__*/React.createElement("div", {
      className: "v2-head-meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "v2-chip"
    }, monthLabel), /*#__PURE__*/React.createElement(Button, {
      variant: "utility",
      icon: "\u2699",
      onClick: onSettings
    }, "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA")));
  }

  /* ---- Add-hours form (refined) ----------------------------- */
  function AddHoursFormV2({
    onAdd,
    defaultClient,
    defaultDesc,
    defaultRate
  }) {
    const [date, setDate] = React.useState('2026-06-25');
    const [client, setClient] = React.useState(defaultClient);
    const [desc, setDesc] = React.useState(defaultDesc);
    const [start, setStart] = React.useState('09:00');
    const [end, setEnd] = React.useState('17:00');
    const [rate, setRate] = React.useState(defaultRate);
    const toMin = t => {
      const p = t.split(':');
      return +p[0] * 60 + +p[1];
    };
    const hours = HL2.round2((toMin(end) - toMin(start)) / 60);
    const valid = hours > 0;
    const submit = () => {
      if (!valid) return;
      onAdd({
        id: 'n' + Date.now(),
        date,
        client: client.trim(),
        description: desc.trim(),
        startTime: start,
        endTime: end,
        hours,
        rate: +rate || 0,
        reported: false
      });
    };
    return /*#__PURE__*/React.createElement(Card, {
      title: "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E9\u05E2\u05D5\u05EA"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-row"
    }, /*#__PURE__*/React.createElement(Input, {
      label: "\u05EA\u05D0\u05E8\u05D9\u05DA",
      type: "date",
      className: "f-date",
      value: date,
      onChange: e => setDate(e.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: "\u05DC\u05E7\u05D5\u05D7",
      className: "f-grow",
      value: client,
      placeholder: "\u05E9\u05DD \u05D4\u05DC\u05E7\u05D5\u05D7",
      onChange: e => setClient(e.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4",
      className: "f-grow",
      value: desc,
      placeholder: "\u05DC\u05DE\u05E9\u05DC: \u05E4\u05D9\u05EA\u05D5\u05D7 \u05D3\u05E9\u05D1\u05D5\u05E8\u05D3, \u05D1\u05E0\u05D9\u05D9\u05EA \u05DE\u05D5\u05D3\u05DC dbt\u2026",
      onChange: e => setDesc(e.target.value)
    }), /*#__PURE__*/React.createElement("label", {
      className: "fld f-tm"
    }, "\u05DE\u05E9\u05E2\u05D4", /*#__PURE__*/React.createElement(TimeField, {
      value: start,
      onChange: setStart
    })), /*#__PURE__*/React.createElement("label", {
      className: "fld f-tm"
    }, "\u05E2\u05D3 \u05E9\u05E2\u05D4", /*#__PURE__*/React.createElement(TimeField, {
      value: end,
      onChange: setEnd
    })), /*#__PURE__*/React.createElement(Input, {
      label: "\u05EA\u05E2\u05E8\u05D9\u05E3/\u05E9\u05E2\u05D4 (\u05DC\u05DC\u05D0 \u05DE\u05E2\"\u05DE)",
      className: "f-rate",
      type: "number",
      min: "0",
      value: rate,
      onChange: e => setRate(e.target.value)
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-actions"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "\uFF0B",
      className: "v2-cta",
      onClick: submit,
      disabled: !valid
    }, "\u05D4\u05D5\u05E1\u05E3 \u05E8\u05E9\u05D5\u05DE\u05D4"), valid ? /*#__PURE__*/React.createElement(HoursPill, {
      icon: "\u23F1"
    }, HL2.nfH.format(hours) + ' שעות') : /*#__PURE__*/React.createElement(HoursPill, {
      tone: "warn"
    }, "\u05D8\u05D5\u05D5\u05D7 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF")), /*#__PURE__*/React.createElement("p", {
      className: "form-note"
    }, "\u05D4\u05E9\u05E2\u05D5\u05EA \u05D1\u05E4\u05D5\u05E8\u05DE\u05D8 24 \u05E9\u05E2\u05D5\u05EA. \u05D4\u05EA\u05E2\u05E8\u05D9\u05E3 \u05DE\u05D5\u05D6\u05DF \u05DC\u05DC\u05D0 \u05DE\u05E2\"\u05DE \u2014 \u05D4\u05DE\u05E2\"\u05DE \u05DE\u05EA\u05D5\u05D5\u05E1\u05E3 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05DC\u05E1\u05DB\u05D5\u05DD \u05D4\u05DB\u05D5\u05DC\u05DC."));
  }

  /* ---- Summary (total first + reported progress) ------------ */
  function SummaryPanelV2({
    totals,
    vatRate,
    reportedHours,
    showProgress,
    monthLabel
  }) {
    const pct = totals.hours > 0 ? Math.round(reportedHours / totals.hours * 100) : 0;
    return /*#__PURE__*/React.createElement(Card, {
      title: 'סיכום · ' + monthLabel
    }, /*#__PURE__*/React.createElement("div", {
      className: "v2-total"
    }, /*#__PURE__*/React.createElement("span", {
      className: "v2-total-label"
    }, "\u05E1\u05D4\"\u05DB \u05DB\u05D5\u05DC\u05DC \u05DE\u05E2\"\u05DE"), /*#__PURE__*/React.createElement("span", {
      className: "v2-total-value"
    }, HL2.money(totals.total))), /*#__PURE__*/React.createElement(SummaryRow, {
      label: "\u05E9\u05E2\u05D5\u05EA",
      value: HL2.nfH.format(totals.hours)
    }), /*#__PURE__*/React.createElement(SummaryRow, {
      label: "\u05E1\u05DB\u05D5\u05DD \u05DC\u05E4\u05E0\u05D9 \u05DE\u05E2\"\u05DE",
      value: HL2.money(totals.subtotal)
    }), /*#__PURE__*/React.createElement(SummaryRow, {
      label: 'מע"מ ' + vatRate + '%',
      value: HL2.money(totals.vat)
    }), showProgress && /*#__PURE__*/React.createElement("div", {
      className: "v2-progress"
    }, /*#__PURE__*/React.createElement("div", {
      className: "v2-bar"
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        width: pct + '%'
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "v2-progress-cap"
    }, /*#__PURE__*/React.createElement("span", null, "\u05D3\u05D5\u05D5\u05D7\u05D5 ", HL2.nfH.format(reportedHours), " \u05DE\u05EA\u05D5\u05DA ", HL2.nfH.format(totals.hours), " \u05E9\u05E2\u05D5\u05EA"), /*#__PURE__*/React.createElement("b", {
      className: "num"
    }, pct, "%"))));
  }

  /* ---- Export (stacked rows) -------------------------------- */
  function ExportPanelV2({
    disabled,
    onManager,
    onClient,
    onInvoice
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      title: "\u05D9\u05D9\u05E6\u05D5\u05D0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "v2-export"
    }, /*#__PURE__*/React.createElement("div", {
      className: "v2-exrow"
    }, /*#__PURE__*/React.createElement("span", {
      className: "v2-exlabel"
    }, "\u05D3\u05D5\u05D7 \u05E9\u05E2\u05D5\u05EA (\u05DE\u05E0\u05D4\u05DC)"), /*#__PURE__*/React.createElement("div", {
      className: "v2-exbtns"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      block: true,
      disabled: disabled,
      onClick: onManager
    }, "Excel"), /*#__PURE__*/React.createElement(Button, {
      variant: "dark",
      size: "sm",
      block: true,
      disabled: disabled,
      onClick: onManager
    }, "PDF"))), /*#__PURE__*/React.createElement("div", {
      className: "v2-exrow"
    }, /*#__PURE__*/React.createElement("span", {
      className: "v2-exlabel"
    }, "\u05D3\u05D5\u05D7 \u05E9\u05E2\u05D5\u05EA \u05DC\u05DC\u05E7\u05D5\u05D7"), /*#__PURE__*/React.createElement("div", {
      className: "v2-exbtns"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      block: true,
      disabled: disabled,
      onClick: onClient
    }, "Excel"), /*#__PURE__*/React.createElement(Button, {
      variant: "dark",
      size: "sm",
      block: true,
      disabled: disabled,
      onClick: onClient
    }, "PDF"))), /*#__PURE__*/React.createElement("div", {
      className: "v2-exrow"
    }, /*#__PURE__*/React.createElement("span", {
      className: "v2-exlabel"
    }, "\u05D7\u05E9\u05D1\u05D5\u05E0\u05D9\u05EA \u05DE\u05E1/\u05E7\u05D1\u05DC\u05D4"), /*#__PURE__*/React.createElement("div", {
      className: "v2-exbtns single"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "teal",
      size: "sm",
      block: true,
      disabled: disabled,
      onClick: onInvoice
    }, "\u05D4\u05E4\u05E7\u05EA PDF")))));
  }
  Object.assign(window, {
    AppHeaderV2,
    AddHoursFormV2,
    SummaryPanelV2,
    ExportPanelV2
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hourlog/parts2.js", error: String((e && e.message) || e) }); }

// ui_kits/hourlog/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hourlog/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.HoursPill = __ds_scope.HoursPill;

__ds_ns.SummaryRow = __ds_scope.SummaryRow;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TimeField = __ds_scope.TimeField;

})();
