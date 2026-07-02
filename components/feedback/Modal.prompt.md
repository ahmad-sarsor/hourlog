**Modal** — a centered dialog over a dimmed overlay; the app uses it for the settings sheet. Backdrop click or Escape triggers `onClose`.

```jsx
<Modal
  open={settingsOpen}
  onClose={() => setSettingsOpen(false)}
  title="הגדרות"
  subtitle="פרטים אלה מופיעים בכותרת המערכת ובקבצי הייצוא."
  footer={<>
    <Button variant="ghost" size="xs">אפס את כל הנתונים</Button>
    <Button variant="primary">שמור וסגור</Button>
  </>}
>
  <Input label="שם העסק" />
  …
</Modal>
```

- **title** / **subtitle** render the header; **footer** is the space-between action row.
- Content scrolls to 88vh; lay dense settings out with a two-column grid (`display:grid;grid-template-columns:1fr 1fr;gap:12px`) as the source does.
- Compose the body from Input / Select — don't restyle fields inside.
