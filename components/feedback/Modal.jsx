import React from 'react';

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
export function Modal({
  open = true,
  onClose,
  title,
  subtitle,
  footer,
  children,
  width = 440,
  className = '',
}) {
  ensureHlModal();
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="hl-modalback" onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}>
      <div className={['hl-modal', className].filter(Boolean).join(' ')} style={{ maxWidth: width }} role="dialog" aria-modal="true">
        {title && <h3 className="hl-modal__title">{title}</h3>}
        {subtitle && <p className="hl-modal__sub">{subtitle}</p>}
        {children}
        {footer && <div className="hl-modal__foot">{footer}</div>}
      </div>
    </div>
  );
}
