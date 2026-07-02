**Checkbox** — the square "reported" toggle on each records-table row. A hairline outline when off, brand-green with a white ✓ when on.

```jsx
<Checkbox checked={row.reported} onChange={(next) => setReported(row.id, next)}
          title={row.reported ? 'דווח — לחץ לביטול' : 'סמן כדווח'} />
```

- Controlled via **checked** / **onChange** (receives the next boolean).
- 26px square; hover shows the accent border. It is a `<button role="checkbox">`, not a native input, so it matches the app exactly.
- Give it a **title** describing the current action for accessibility.
