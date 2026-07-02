**Select** — a native dropdown styled to match Input; used for the month / client filters and the settings dropdowns.

```jsx
<Select label="חודש" options={['כל החודשים', 'יוני 2026', 'מאי 2026']} />
<Select label="לקוח" options={[{value:'all', label:'כל הלקוחות'}, {value:'acme', label:'לקוח לדוגמה'}]} />
```

- **options** accepts plain strings or `{value,label}` objects; or pass `<option>` children directly.
- **label** stacks the field label above (filter-panel layout). Omit for a bare select.
- Same accent focus ring as Input.
