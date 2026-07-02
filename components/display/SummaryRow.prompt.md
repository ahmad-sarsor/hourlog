**SummaryRow** — a label/value line for the summary and totals cards. Stack them inside a Card; mark the last one `total` for the accent-green grand total.

```jsx
<Card>
  <SummaryRow label="שעות" value="180" />
  <SummaryRow label='סכום לפני מע"מ' value="46,800.00 ₪" />
  <SummaryRow label='מע"מ 18%' value="8,424.00 ₪" />
  <SummaryRow label='סה"כ כולל מע"מ' value="55,224.00 ₪" total />
</Card>
```

- Consecutive rows are divided by a hairline automatically (sibling rule).
- **total** adds the heavier top rule and shows the value in brand green at 18px.
- Values render with tabular figures so columns of money line up.
