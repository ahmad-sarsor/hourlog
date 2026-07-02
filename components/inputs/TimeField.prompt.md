**TimeField** — the 24-hour inline time picker (HH : MM) used to log a work session's start and end. Two selects with a colon separator, always LTR even on the RTL page.

```jsx
<TimeField value={start} onChange={setStart} />
<TimeField value={end} onChange={setEnd} minuteStep={5} />
```

- **value** / **onChange** work with an `"HH:MM"` 24-hour string.
- **minuteStep** controls minute granularity (default 5); an off-step incoming value is preserved as an extra option.
- Wrap two of these with a `משעה` / `עד שעה` label to reproduce the add-hours form. Pair with a HoursPill to show the live computed duration.
