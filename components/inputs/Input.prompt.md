**Input** — a labelled text / number / date field, the backbone of every form and the settings modal.

```jsx
<Input label="לקוח" placeholder="שם הלקוח" />
<Input label="תעריף/שעה (ללא מע\"מ)" type="number" min="0" defaultValue="260" />
<Input label="תאריך" type="date" note="השעות בפורמט 24 שעות." />
```

- **label** stacks a 12.5px semibold label above the input (the standard forms layout). Omit it for a bare input.
- **note** adds muted helper text underneath (matches `.form-note`).
- Focus paints the accent-green border + a 3px `--accent-soft` ring.
- Forwards all native input props (`type`, `placeholder`, `min`, `step`, `list`, `value`, `onChange`…).
