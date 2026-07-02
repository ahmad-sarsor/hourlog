**Card** — the surface panel that holds every section of the app (add-hours form, records table, filter, summary, export). White paper, hairline border, 16px radius, soft ink shadow.

```jsx
<Card title="סינון">…filters…</Card>

<Card title="רשומות · 24" action={<Button variant="ghost" size="xs" icon="✓">סמן הכל כדווח</Button>}>
  …table…
</Card>
```

- **title** renders the uppercase, letter-spaced, muted eyebrow.
- **action** (with `title`) adds a header row: title on the start edge, the control on the end edge — the "records" card header pattern.
- Compose Cards vertically in the main column and the right rail; don't nest Cards.
