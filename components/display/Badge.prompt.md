**Badge** — a small status marker for reported/pending/weekend states. Two shapes: a soft `chip` pill or plain bold `text` (which is how the app shows the "not yet reported" count and the red weekend days).

```jsx
<Badge tone="green" variant="text">הכל דווח ✓</Badge>
<Badge tone="gold" variant="text">טרם דווחו: 3</Badge>
<Badge tone="green">דווח</Badge>
<Badge tone="red">שבת</Badge>
```

- **tone**: `green` (done) · `gold` (pending) · `red` (weekend/overdue) · `neutral`.
- **variant**: `chip` (soft pill) or `text` (coloured text only).
- For inline table use — a status word inside a row — reach for `variant="text"`.
