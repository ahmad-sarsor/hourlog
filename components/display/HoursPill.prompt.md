**HoursPill** — a soft rounded chip; its signature use is the live-computed session length beside the add button, flipping to a red `warn` tone when the end time is before the start.

```jsx
<HoursPill icon="⏱">8.5 שעות</HoursPill>
<HoursPill tone="warn">טווח לא תקין</HoursPill>
<HoursPill>הזן שעות</HoursPill>
```

- **tone**: `default` (soft green) · `warn` (red, invalid range) · `gold` (document context).
- **icon** takes a leading glyph (the app uses ⏱).
- Pair with two TimeFields to reproduce the add-hours form's live feedback.
