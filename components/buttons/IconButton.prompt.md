**IconButton** — a square, icon-only button for compact actions; in the product these are the edit (✎) and delete (✕) buttons on each table row.

```jsx
<IconButton glyph="✎" title="עריכה" />
<IconButton glyph="✕" variant="danger" title="מחיקה" />
```

- **glyph** is any unicode character (the app uses no icon font).
- **variant**: `default` (neutral grey hover) or `danger` (red text + wash on hover, for delete).
- **size**: `sm` (30px, table rows) or `md` (38px).
- Always pass a `title` for the tooltip / accessibility, since there is no text label.
