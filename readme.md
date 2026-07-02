# HourLog IL — Design System

A design system for **HourLog IL**, a right-to-left (Hebrew) time-tracking &
invoicing web app built for a freelance data/BI engineer. Users log daily work
hours (start–end, 24-hour), mark which entries were reported to their manager,
filter by month & client, and export **manager** and **client** hour reports
(Excel) plus a **tax-invoice / receipt** document (PDF). The aesthetic is calm,
exact "financial software": a cool blue-grey canvas, floating white cards, one
confident green accent, and tabular figures wherever money or hours appear.

> **Sample data:** the app ships with neutral placeholder business details —
> no real personal or financial data. Each signed-in user enters their own
> business info in Settings, stored privately per-user in Firestore.

---

## Sources

- **Codebase:** `hour log/time_tracker_8.html` — a single, self-contained
  ~990-line HTML file (the entire product: markup, CSS, and vanilla-JS logic).
  Everything in this system is derived directly from that file's `:root` tokens,
  component CSS, and export/document builders — copied verbatim, not re-guessed.
- **External libraries the app uses (runtime, not design):** ExcelJS (xlsx
  export) and html2pdf.js (PDF export), both via CDN. Not part of this system.
- **No Figma, no separate component library, no logo file** were provided.

---

## Fonts — substitution flag ⚠️

The product's single typeface is **Heebo** (a Hebrew + Latin Google font, weights
300–800). The source app links it from the **Google Fonts CDN**, and this system
does the same via `tokens/fonts.css` (`@import` of the Google stylesheet). The
webfont **binaries are therefore not self-hosted** in this project, so the
compiler reports "Fonts: 0" (no local `@font-face`).

**If you need offline / self-hosted fonts, please supply the Heebo `.woff2`
files** and I'll add real `@font-face` rules. Heebo is the genuine font, not a
lookalike substitute — only its hosting differs from a fully self-contained kit.

---

## Content fundamentals

**Language & direction.** Everything is Hebrew, `dir="rtl"`, `lang="he"`. Numbers,
times and the currency symbol are the only LTR islands (the time picker forces
`direction:ltr`).

**Voice.** Formal, precise, quietly reassuring — the register of trustworthy
accounting software. Sentence case, **no exclamation marks, no emoji, no hype.**
Short labels; full sentences only for notes and fine print.

**Second person, possessive.** Copy addresses the user directly and stresses that
their data is theirs: *"אתר עצמאי — הנתונים נשמרים בדפדפן **שלך** במכשיר זה."*
("An independent site — your data is saved in your browser on this device.")

**Financial vocabulary is exact and consistent.** Recurring terms:
- מע"מ (VAT), always shown with its rate: *מע"מ 18%*
- עוסק מורשה / ח.פ (licensed dealer / company number)
- חשבונית מס/קבלה (tax invoice / receipt)
- דווח / טרם דווחו (reported / not yet reported)
- סה"כ כולל מע"מ, סכום לפני מע"מ, סה"כ לתשלום (totals language)

**Action labels** are verb-first and often carry a leading glyph:
*＋ הוסף רשומה*, *✓ סמן הכל כדווח*, *הפקת PDF*, *⚙ הגדרות*.

**Numbers.** Always tabular figures. Hours use up to 2 decimals (`8.5`), money
uses exactly 2 (`260.00`), formatted with `Intl.NumberFormat('he-IL')`. The
currency symbol (₪ by default, configurable) sits **after** the amount in the UI
(`260.00 ₪`) and **before** it in the invoice document (`₪ 260.00`).

**Empty & status microcopy** is gentle and instructive, e.g.
*"עדיין אין רשומות בתצוגה זו. הוסף את הרשומה הראשונה בטופס למעלה."*

---

## Visual foundations

**Palette.** A near-monochrome ink/blue-grey base carries one **brand green**
accent (`#0E7C5E`), with **gold** (`#977423`) reserved for documents/caution and
**teal** (`#6E9B94`) reserved for the tax-invoice. Danger red (`#B54034`) and a
brighter weekend red (`#C0392B`) are the only other hues. See the Colors cards.

**Type.** One family (Heebo). Uppercase, `.06em`-tracked, muted **eyebrows** title
every card; the brand name gets tight `-0.2px` tracking; document titles are 800
weight. Money/hours always use `font-variant-numeric: tabular-nums`.

**Spacing.** An **organic scale** (5 / 6 / 9 / 11 / 14 / 16 / 18 / 22 px) copied
verbatim — deliberately *not* snapped to a 4/8 grid. The 16px grid gap and 18px
card padding set the overall calm density.

**Backgrounds.** Flat colour only. The app sits on `#E9EDF1`; cards are pure
white. **No gradients, no images, no textures, no patterns.** Documents preview
on a neutral grey stage (`#c8ced6`) to read as paper.

**Cards.** White, 1px `#DBE2E9` border, **16px** radius, and a soft two-layer
shadow *tinted with the ink navy* (`rgba(16,32,43,…)`) rather than neutral black —
this is what gives them their floating-paper calm. Cards never nest.

**Corner radii** climb by role: 7px checkbox → 9px input → 10px button → 12px
brand mark → 16px card → 18px modal. Panels are softened, never pill-round.

**Shadows.** Only two elevations: `shadow-card` (panels) and `shadow-modal`
(dialogs), plus a 3px `accent-soft` **focus ring**. No inner shadows, no glows.

**Borders & dividers.** Hairlines do most of the structural work: `#DBE2E9` for
outer borders and table header underlines, softer `#EFF2F5` / `#F0F3F6` for inner
row and summary dividers.

**Motion.** A single `0.15s ease` transition on interactive elements. The one
entrance animation is a 4px downward settle (`hl-fade-in`, 0.35s) on a newly added
row. **No bounces, no parallax, no decorative loops.** Everything is wrapped in
`@media (prefers-reduced-motion: reduce)`.

**Hover states.** Ghost/utility controls lift 1px and darken their border to
`#c3cdd6`; solid buttons darken (primary/dark) or brighten via `filter`
(gold/teal); table rows wash to `#F7F9FB`; the delete button turns red on hover.

**Press / active.** No shrink or scale — feedback is colour only (the darker
`accent-strong` fill), keeping the UI still and businesslike.

**Focus.** A 3px `accent-soft` ring plus an accent-green border on inputs, time
selects and the reported checkbox.

**Transparency & blur.** Used **once**: the modal backdrop, `rgba(16,32,43,.42)`.
No frosted glass, no translucent panels elsewhere.

**Layout rules.** A max-1340px centred column; on ≥940px it splits into a fluid
main column + a fixed **320px** right rail (filter / summary / export). The
records table has a 720px min-width and scrolls horizontally inside its card.
RTL throughout; numeric columns stay LTR.

**Imagery.** None. The brand has no photography or illustration; meaning is
carried entirely by type, colour, and the small unicode glyph set below.

---

## Iconography

**There is no icon font, no SVG set, and no PNG icons in the source.** Every
"icon" is a **unicode glyph** rendered in Heebo. Keep to this set; do not
introduce Lucide/Heroicons/etc. unless the brief changes. No emoji are ever used.

| Glyph | Meaning | Where |
|---|---|---|
| `₪` | currency / brand mark | header mark, money |
| `⚙` | settings | header button |
| `＋` | add | add-record button |
| `✓` | reported / done | checkbox on-state, "mark all" |
| `✎` | edit | row action |
| `✕` | delete | row action (danger) |
| `⏱` | hours | live hours pill |
| `↺` | undo / revert | "clear reported for view" |
| `▼ ▲` | expand / collapse | show-more toggle |
| `–` / `—` | empty value | tables & documents |
| `%` | VAT | summary/labels |

The **brand mark** is the active currency symbol set in a 12px-radius ink square
(`assets/`-free — it's pure CSS + a glyph). It swaps with the currency setting.
**No logo file was provided; do not invent one** — render the business name in
plain Heebo wherever a wordmark would go, exactly as the app does.

> `assets/` is intentionally empty: the source ships no logos, illustrations, or
> raster/vector icons to copy in.

---

## Components

Reusable React primitives, each `export function <Name>` with a sibling `.d.ts`
and `.prompt.md`. Import from the compiled bundle:
`const { Button } = window.HourLogILDesignSystem_d9be1f`.

**Buttons** (`components/buttons/`)
- **Button** — the text button; 6 variants (primary/gold/dark/teal/ghost/utility), 3 sizes, optional leading glyph.
- **IconButton** — square, icon-only action (table edit/delete); `default` / `danger`.

**Inputs** (`components/inputs/`)
- **Input** — labelled text/number/date field with the accent focus ring.
- **Select** — native dropdown styled to match Input (filters, settings).
- **TimeField** — the signature 24-hour inline time picker (HH : MM), forced LTR.
- **Checkbox** — the square "reported" toggle (green fill + white check when on).

**Display** (`components/display/`)
- **Card** — the surface panel with an optional uppercase eyebrow title + header action.
- **HoursPill** — soft chip for the live session length; `warn` (red) / `gold` tones.
- **Badge** — small status marker (reported/pending/weekend); `chip` or `text`.
- **SummaryRow** — label/value line for the summary & totals cards; `total` variant.

**Feedback** (`components/feedback/`)
- **Modal** — centred dialog over the dimmed ink overlay (the settings sheet).

*Intentional additions:* none beyond the source. The above map 1:1 onto the
primitives defined in `time_tracker_8.html`; nothing was invented.

---

## UI kits

- **HourLog App** (`ui_kits/hourlog/`) — the full, interactive product view:
  add-hours form, records table (toggle reported, delete, mark-all, expand),
  month/client filter, live summary, and previewable exports (manager report,
  client report, tax-invoice/receipt) plus the settings modal. See its
  `README.md`. This is a faithful recreation, not a redesign.
- **Dashboard v2 — Refined** (`ui_kits/hourlog/Dashboard v2.html`) — an
  elevated-craft iteration on the same brand: white header bar with month chip,
  total-first summary with a reported-progress bar, sticky table header,
  stacked export rows, softer borders/shadows, and Tweaks (density, progress
  bar, curated brand hue). Layered via `v2.css` + `parts2.js`; v1 untouched.

---

## Design System tab (specimen cards)

18 `@dsCard` specimens populate the Design System tab, grouped:
**Colors** (accent, ink & neutrals, surfaces & lines, gold/teal/danger),
**Type** (Heebo family, type scale, eyebrow & numerals),
**Spacing** (scale, radii, elevation & focus),
**Brand** (mark & lockup, iconography, voice),
**Components** (buttons, inputs, display, modal),
**HourLog App** (the dashboard).

---

## Root folder index

- `styles.css` — **the one file consumers link.** `@import` manifest only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `components/` — `buttons/`, `inputs/`, `display/`, `feedback/` (each: `.jsx` + `.d.ts` + `.prompt.md` + one `@dsCard` HTML).
- `guidelines/` — the foundation specimen cards (Colors / Type / Spacing / Brand).
- `ui_kits/hourlog/` — the product UI kit.
- `SKILL.md` — Agent-Skill entry point (portable to Claude Code).
- `readme.md` — this file.
- *Generated (do not edit):* `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`.
- `assets/` — intentionally empty (no source logos/illustrations/icons).
