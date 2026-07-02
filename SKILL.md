---
name: hourlog-il-design
description: Use this skill to generate well-branded interfaces and assets for HourLog IL — a right-to-left (Hebrew) time-tracking & invoicing web app with a calm "financial software" aesthetic — either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets
out and create static HTML files for the user to view. If working on production code,
you can copy assets and read the rules here to become an expert in designing with this
brand.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.

## Fast orientation

- **What it is:** Hebrew (RTL), 24-hour time logging → manager/client Excel reports
  + a tax-invoice/receipt PDF. Calm, exact, quiet. Cool blue-grey canvas, floating
  white cards, one green accent, tabular figures for all money/hours.
- **The one file consumers link:** `styles.css` (an `@import` manifest → tokens + fonts).
- **Typeface:** Heebo (Google Fonts CDN; weights 300–800). Not self-hosted — see the
  Fonts flag in `readme.md`.
- **Namespace:** components are on `window.HourLogILDesignSystem_d9be1f` after loading
  `_ds_bundle.js`. Primitives: Button, IconButton, Input, Select, TimeField, Checkbox,
  Card, HoursPill, Badge, SummaryRow, Modal.
- **Icons:** unicode glyphs only (₪ ⚙ ＋ ✓ ✎ ✕ ⏱ ↺ ▼ ▲). No icon font, no emoji, no logo.

## Rules of thumb

- Everything is `dir="rtl"` / `lang="he"`; keep numbers, times and currency LTR.
- Formal Hebrew, sentence case, no exclamation marks, no emoji.
- Use the tokens, never hard-coded hex. Money `260.00 ₪` (UI) / `₪ 260.00` (invoice).
- Green = primary/positive, gold = documents/caution, teal = tax-invoice only.
- Flat backgrounds; ink-tinted card shadows; 16px card radius; a single 0.15s ease.

## Files

- `readme.md` — full design guide (content, visual foundations, iconography, index).
- `tokens/` — colors, typography, spacing, effects, fonts, base reset.
- `components/` — the 11 React primitives (`.jsx` + `.d.ts` + `.prompt.md` each).
- `guidelines/` — foundation specimen cards.
- `ui_kits/hourlog/` — the full interactive product recreation (start here for screens).
