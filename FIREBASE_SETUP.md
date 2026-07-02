# HourLog IL — הגדרת Firebase

המערכת שומרת נתונים ב-**Firebase Firestore** מאחורי **התחברות (Firebase Auth)**.
כדי שהכל יעבוד צריך לבצע פעם אחת שלושה דברים ב-Firebase Console.

הפרויקט: **hourlog-70cbd**

---

## 1. הפעלת התחברות (Authentication)

1. Console → **Build → Authentication → Get started**
2. בלשונית **Sign-in method** → הפעל **Email/Password** → **Save**

זהו. משתמשים **נרשמים לבד** דרך מסך ההרשמה באפליקציה (כפתור "הרשמה") — אין צורך
להוסיף משתמשים ידנית. כל משתמש חדש מקבל אוטומטית אזור נתונים והגדרות פרטיים משלו.
(אפשר עדיין לנהל/למחוק משתמשים בלשונית **Authentication → Users**.)

---

## 2. חוקי אבטחה של Firestore ⚠️ (חובה)

מסד הנתונים נוצר במצב *production*, שחוסם הכל כברירת מחדל — לכן בלי השלב הזה
האפליקציה תראה שגיאת "אין הרשאת גישה".

1. Console → **Build → Firestore Database → Rules**
2. מחק את מה שיש והדבק את התוכן של [`firestore.rules`](firestore.rules):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

3. לחץ **Publish**.

המשמעות: כל משתמש מחובר יכול לקרוא/לכתוב **רק** את הנתונים שלו תחת
`users/{ה-UID שלו}`. מבקרים אנונימיים (האתר פומבי) לא מקבלים כלום.

---

## 3. דומיין מורשה ל-Auth

כדי שההתחברות תעבוד מהאתר הפומבי:

1. Console → **Authentication → Settings → Authorized domains**
2. ודא שקיים `ahmad-sarsor.github.io` (אם לא — **Add domain**).

`localhost` כבר מורשה כברירת מחדל לפיתוח מקומי.

---

## איך זה בנוי בקוד

| קובץ | תפקיד |
|------|--------|
| `ui_kits/hourlog/firebase-config.js` | אתחול Firebase (config פומבי — לא סוד) |
| `ui_kits/hourlog/firebase-store.js`  | כל הפעולות מול Firestore (auth + CRUD) |
| `ui_kits/hourlog/HourLogApp.js`      | מסך התחברות + חיבור המצב ל-Firestore |
| `firestore.rules`                    | חוקי האבטחה להדבקה ב-Console |

**מודל הנתונים** (פר-משתמש):

```
users/{uid}/entries/{autoId}   רשומת שעות אחת לכל מסמך
users/{uid}/meta/settings      מסמך הגדרות יחיד (פרטי העסק)
```

בכניסה הראשונה מסמך ההגדרות נזרע מערכי ברירת מחדל ריקים — פתח **הגדרות**
במערכת, מלא את פרטי העסק האמיתיים שלך, ולחץ **שמור וסגור**. הם יישמרו במסד
המוגן ולא ב-repo הפומבי.
