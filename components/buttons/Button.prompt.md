**Button** — the primary text button; use for every click action, from adding a record to exporting a PDF. Six colour variants and three sizes, all token-driven.

```jsx
<Button variant="primary" icon="＋">הוסף רשומה</Button>
<Button variant="ghost" size="xs">ביטול</Button>
<Button variant="dark" size="sm" block>PDF</Button>
```

- **variant**: `primary` (brand green CTA) · `gold` · `dark` (ink, for PDF export) · `teal` (invoice/receipt) · `ghost` (white, hairline border) · `utility` (elevated white header chip with hover lift).
- **size**: `md` (default) · `sm` · `xs`.
- **block** stretches to fill its flex/grid cell (matches the source's `.sm-btn` split export buttons).
- **icon** takes a leading unicode glyph — the app uses no icon font (₪ ⚙ ✓ ✎ ✕ ＋). RTL: the glyph sits on the right automatically.
- Disabled drops to 45% opacity; `primary`/`dark` darken on hover, `gold`/`teal` brighten via filter.
