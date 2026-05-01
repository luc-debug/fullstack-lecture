---
marp: true
paginate: true
size: 4:3
style: |
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
---

# JavaScript Advanced

## Luca Berres

---

# Inhaltsverzeichnis

**Bedingte Operatoren**

[1. Ternary Operator](#ternary-operator)
[2. Short-Circuit Evaluation](#short-circuit-evaluation)
[3. Nullish Coalescing](#nullish-coalescing)
[4. Optional Chaining](#optional-chaining)

**Daten entpacken und Objekte bearbeiten**
[5. Destructuring](#5-destructuring)
[5.1 Array Destructuring](#5.1-array-destructuring)
[5.2 Object Destructuring](#5.2-object-destructuring)
[7. Spread Operator für Objekte](#spread-operator-für-objekte)
[8. Rest Operator](#rest-operator)

**Sonstige**

[Array-Methoden](#array-methoden)
[Promises](#promises)

---

# Ternary Operator

---

<!-- header: Ternary Operator -->

## Ternary Operator

Der Ternary Operator ist eine kompakte Alternative zu `if/else` und gibt direkt einen Wert zurück.

```javascript
// Syntax
bedingung ? wertWennTrue : wertWennFalse;
```

```javascript
const alter = 20;

// Klassisch mit if/else
let status;
if (alter >= 18) {
  status = "Erwachsen";
} else {
  status = "Minderjährig";
}

// Mit Ternary Operator
const status = alter >= 18 ? "Erwachsen" : "Minderjährig";
```

---

## Ternary Operator — Weitere Beispiele

Der Ternary Operator kann überall verwendet werden, wo ein Ausdruck erwartet wird:

```javascript
// In Funktionsaufrufen
console.log(punkte >= 50 ? "Bestanden" : "Durchgefallen");

// In Template Literals
const nachricht = `Du bist ${alter >= 18 ? "volljährig" : "minderjährig"}.`;

// Als Rückgabewert
function getLabel(istAktiv) {
  return istAktiv ? "Aktiv" : "Inaktiv";
}
```

> **Wichtig:** Verschachtelte Ternary Operatoren vermeiden — sie werden schnell unlesbar!

```javascript
// ❌ Schwer lesbar
const ergebnis = a > b ? "a" : b > c ? "b" : "c";

// ✅ Besser: if/else oder separate Variablen verwenden
```

---

## ⚛️ Verwendung in React

In JSX kann kein `if/else` verwendet werden, da nur **Ausdrücke** (Expressions) erlaubt sind — der Ternary Operator ist deshalb das Standardmittel für bedingte Darstellung:

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Willkommen zurück!</h1> : <h1>Bitte einloggen</h1>}
    </div>
  );
}
```

```jsx
// Auch für Attribute nützlich
<button className={isActive ? "btn-primary" : "btn-secondary"}>
  Klick mich
</button>
```

---

## 🧰 Aufgabe — Ternary Operator

Schreibe eine Funktion `bewertung(punkte)`, die folgende Werte zurückgibt:

| Punkte       | Rückgabewert      |
| ------------ | ----------------- |
| 90 oder mehr | `"Sehr gut"`      |
| 50–89        | `"Bestanden"`     |
| unter 50     | `"Durchgefallen"` |

1. Implementiere die Funktion zuerst mit `if/else`.
2. Schreibe sie dann mit dem Ternary Operator um.
3. Überlege: An welchem Punkt wird der verschachtelte Ternary Operator unlesbar?

---

<!-- _header: "" -->

# Short-Circuit Evaluation

---

<!-- header: Short-Circuit Evaluation -->

## Short-Circuit Evaluation

Die logischen Operatoren `&&` und `||` geben in JavaScript **nicht** immer `true` oder `false` zurück — sie geben den **Wert** zurück, der das Ergebnis bestimmt.

> 📖 **Short-Circuit:** Die Auswertung stoppt, sobald das Ergebnis feststeht.

```javascript
// || gibt den ersten truthy Wert zurück (oder den letzten Wert)
"Hallo" || "Welt"; // → "Hallo"
0 || "Fallback"; // → "Fallback"
"" || null || "Default"; // → "Default"

// && gibt den ersten falsy Wert zurück (oder den letzten Wert)
"Hallo" && "Welt"; // → "Welt"
0 && "Welt"; // → 0
"A" && "B" && "C"; // → "C"
```

---

## Short-Circuit — Praktische Anwendung

```javascript
// Standardwerte mit ||
function greet(name) {
  const displayName = name || "Gast";
  console.log(`Hallo, ${displayName}!`);
}
greet("Anna"); // "Hallo, Anna!"
greet(""); // "Hallo, Gast!"  ⚠️ Leerer String ist falsy!
greet(undefined); // "Hallo, Gast!"

// Bedingte Ausführung mit &&
const user = { name: "Max", isAdmin: true };
user.isAdmin && console.log("Admin-Panel anzeigen");

// Nützlich für optionale Funktionsaufrufe
const callback = null;
callback && callback(); // Kein Fehler, wird einfach übersprungen
```

> **Wichtig:** `||` behandelt `0`, `""`, `false` und `NaN` als falsy — das kann zu unerwarteten Ergebnissen führen! (→ siehe Nullish Coalescing)

---

## ⚛️ Verwendung in React

`&&` ist das Standardmittel für **bedingtes Rendern**, wenn es keinen `else`-Fall gibt:

```jsx
function Dashboard({ user, notifications }) {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* Nur anzeigen wenn Benachrichtigungen vorhanden */}
      {notifications.length > 0 && (
        <p>Du hast {notifications.length} neue Nachrichten.</p>
      )}

      {/* Nur anzeigen wenn Admin */}
      {user.isAdmin && <AdminPanel />}
    </div>
  );
}
```

> **Wichtig:** Vermeide `{count && <Text />}` wenn `count` den Wert `0` haben kann — React rendert dann `0` auf dem Bildschirm! Besser: `{count > 0 && <Text />}`

---

## 🧰 Aufgabe — Short-Circuit Evaluation

Gegeben ist folgende Funktion:

```javascript
function getUserDisplay(user) {
  let displayName;
  if (user && user.nickname) {
    displayName = user.nickname;
  } else if (user && user.firstName) {
    displayName = user.firstName;
  } else {
    displayName = "Anonymer Nutzer";
  }
  return displayName;
}
```

1. Schreibe die Funktion mit `||` und `&&` so um, dass sie in **einer Zeile** passt.
2. Teste mit: `{ nickname: "CoolMax" }`, `{ firstName: "Max" }`, `null`, `{ nickname: "" }`
3. Welches Ergebnis liefert der Fall `{ nickname: "" }` — und warum könnte das problematisch sein?

---

<!-- _header: "" -->

# Nullish Coalescing

---

<!-- header: Nullish Coalescing -->

## Nullish Coalescing Operator (`??`)

Der `??`-Operator wurde in ES2020 eingeführt und löst ein Problem von `||`:

> 📖 `??` gibt die rechte Seite **nur** zurück, wenn die linke Seite `null` oder `undefined` ist — **nicht** bei `0`, `""` oder `false`.

<div class="columns">

```javascript
// || (Short-Circuit)
0 || 42; // → 42     ⚠️
"" || "Fallback"; // → "Fallback" ⚠️
false || true; // → true   ⚠️
null || "Wert"; // → "Wert" ✅
```

```javascript
// ?? (Nullish Coalescing)
0 ?? 42; // → 0      ✅
"" ?? "Fallback"; // → ""     ✅
false ?? true; // → false  ✅
null ?? "Wert"; // → "Wert" ✅
```

</div>

---

## `??` vs `||` — Wann was verwenden?

| Operator | Fallback wenn...                               | Anwendungsfall                                     |
| -------- | ---------------------------------------------- | -------------------------------------------------- |
| `\|\|`   | `null`, `undefined`, `0`, `""`, `false`, `NaN` | Allgemeiner Fallback, „irgendwas Truthy"           |
| `??`     | nur `null` oder `undefined`                    | Sichere Standardwerte, wo `0` und `""` gültig sind |

```javascript
// Beispiel: Benutzereinstellungen
const userVolume = 0; // Nutzer hat Lautstärke bewusst auf 0 gesetzt

const volume1 = userVolume || 50; // → 50  ❌ Nutzerwunsch ignoriert!
const volume2 = userVolume ?? 50; // → 0   ✅ Nutzereinstellung respektiert

// Beispiel: API-Daten
const apiResponse = { count: 0, label: "" };
const count = apiResponse.count ?? "Nicht verfügbar"; // → 0 ✅
const label = apiResponse.label ?? "Kein Label"; // → "" ✅
```

---

## ⚛️ Verwendung in React

`??` wird häufig für sichere Standardwerte bei Props, State und localStorage verwendet:

```jsx
function Counter({ initialCount, label }) {
  // initialCount könnte bewusst 0 sein
  const [count, setCount] = useState(initialCount ?? 0);

  return (
    <div>
      <h2>{label ?? "Zähler"}</h2>
      <p>Wert: {count}</p>
    </div>
  );
}
```

```javascript
// localStorage — gespeicherte Daten laden
const gespeichert = localStorage.getItem("todos");
const todos = JSON.parse(gespeichert) ?? [];

// API-Daten sicher verarbeiten
const username = userData.displayName ?? userData.email ?? "Unbekannt";
```

---

## 🧰 Aufgabe — Nullish Coalescing

Gegeben ist eine Funktion, die Benutzereinstellungen zusammenführt:

```javascript
function mergeSettings(userSettings) {
  return {
    theme: userSettings.theme || "light",
    fontSize: userSettings.fontSize || 16,
    showNotifications: userSettings.notifications || true,
    language: userSettings.language || "de",
  };
}
```

1. Teste die Funktion mit `{ theme: "", fontSize: 0, notifications: false, language: null }`.
2. Welche Werte sind falsch? Warum?
3. Ersetze `||` durch `??` wo nötig — aber **nicht überall**! Überlege bei jedem Feld, ob `||` oder `??` sinnvoller ist.

---

<!-- _header: "" -->

# Optional Chaining

---

<!-- header: Optional Chaining -->

## Optional Chaining (`?.`)

Der `?.`-Operator (ES2020) ermöglicht sicheren Zugriff auf verschachtelte Eigenschaften, ohne manuell auf `null`/`undefined` prüfen zu müssen.

```javascript
const user = {
  name: "Max",
  address: {
    city: "Stuttgart",
  },
};

// Ohne Optional Chaining — Fehler wenn address undefined
// user.address.city         ✅ "Stuttgart"
// user.contact.email        ❌ TypeError!

// Klassische Absicherung
const email = user.contact && user.contact.email; // → undefined

// Mit Optional Chaining
const email = user.contact?.email; // → undefined (kein Fehler!)
const city = user.address?.city; // → "Stuttgart"
```

---

## Optional Chaining — Varianten

```javascript
const data = {
  users: [
    {
      name: "Anna",
      greet() {
        return "Hallo!";
      },
    },
  ],
};

// Eigenschaftszugriff
data.users?.[0]?.name; // → "Anna"
data.users?.[5]?.name; // → undefined

// Methodenaufruf
data.users?.[0]?.greet?.(); // → "Hallo!"
data.users?.[0]?.missing?.(); // → undefined (kein Fehler)

// Kombiniert mit ?? für Standardwerte
const name = data.users?.[0]?.nickname ?? "Unbekannt"; // → "Unbekannt"
```

> 📖 `?.` stoppt die Auswertung und gibt `undefined` zurück, sobald ein Glied `null` oder `undefined` ist.

---

## ⚛️ Verwendung in React

Besonders nützlich bei API-Daten, die erst geladen werden oder unvollständig sein können:

```jsx
function UserProfile({ user }) {
  return (
    <div>
      <h1>{user?.name ?? "Lade..."}</h1>
      <p>Stadt: {user?.address?.city ?? "Nicht angegeben"}</p>
      <p>Rolle: {user?.roles?.[0] ?? "Keine Rolle"}</p>
    </div>
  );
}
```

```jsx
// In useEffect mit API-Daten
useEffect(() => {
  fetch("/api/user")
    .then((res) => res.json())
    .then((data) => {
      // Sicherer Zugriff auf verschachtelte Daten
      const avatar = data?.profile?.images?.[0]?.url ?? "/default-avatar.png";
      setAvatar(avatar);
    });
}, []);
```

---

## 🧰 Aufgabe — Optional Chaining

Gegeben ist ein verschachteltes API-Response-Objekt:

```javascript
const response = {
  data: {
    user: {
      id: 42,
      profile: {
        bio: "Entwickler aus Stuttgart",
        social: {
          github: "maxdev",
          // twitter fehlt absichtlich
        },
      },
      posts: [
        { title: "Erster Post", tags: ["javascript", "react"] },
        { title: "Zweiter Post" }, // tags fehlt absichtlich
      ],
    },
  },
};
```

Schreibe Ausdrücke, die folgende Werte sicher extrahieren (ohne Fehler!):

1. Die Bio des Users (oder `"Keine Bio"`)
2. Den Twitter-Handle (oder `"Nicht verknüpft"`)
3. Den ersten Tag des zweiten Posts (oder `"Kein Tag"`)
4. Eine nicht existierende Eigenschaft `response.data.user.settings.theme` (oder `"light"`)

---

<!-- _header: "" -->

# 5. Destructuring

---

<!-- header: 5. Destructuring -->

## 5.1 Array Destructuring

Destructuring erlaubt es, Werte aus Arrays in einzelne Variablen zu „entpacken":

```javascript
const farben = ["rot", "grün", "blau"];

// Klassisch
const erste = farben[0];
const zweite = farben[1];

// Mit Destructuring
const [erste, zweite, dritte] = farben;
console.log(erste); // "rot"
console.log(zweite); // "grün"
console.log(dritte); // "blau"
```

> 📖 Die Zuordnung erfolgt über die **Position** im Array.

---

### Array Destructuring — Erweiterte Syntax

```javascript
const zahlen = [1, 2, 3, 4, 5];

// Elemente überspringen
const [erste, , dritte] = zahlen; // erste=1, dritte=3

// Rest-Pattern (...rest)
const [head, ...rest] = zahlen; // head=1, rest=[2,3,4,5]

// Standardwerte
const [a, b, c = 99] = [10, 20]; // a=10, b=20, c=99

// Variablen tauschen (ohne Hilfsvariable!)
let x = "A",
  y = "B";
[x, y] = [y, x]; // x="B", y="A"
```

```javascript
// Funktionsrückgabewerte destructuren
function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

const [min, max] = getMinMax([3, 7, 1, 9]); // min=1, max=9
```

---

## ⚛️ Verwendung in React

Array Destructuring ist die Grundlage für **alle React Hooks**:

```jsx
// useState — gibt ein Array mit [wert, setterFunktion] zurück
const [count, setCount] = useState(0);
const [isOpen, setIsOpen] = useState(false);
const [todos, setTodos] = useState([]);
```

Warum verwendet React hier **Array** Destructuring statt Object Destructuring?

→ Weil man die Variablen **frei benennen** kann!

```jsx
// Array Destructuring — freie Namenswahl ✅
const [name, setName] = useState("");
const [email, setEmail] = useState("");

// Wäre es ein Objekt, bräuchte man jedes Mal Umbenennung:
// const { state: name, setState: setName } = useState("");  ❌ umständlich
```

---

### 🧰 Aufgabe — Array Destructuring

1. Schreibe eine Funktion `parseDate(dateString)`, die einen String wie `"06.02.2026"` erhält und per `split(".")` in Tag, Monat und Jahr destructuriert. Gib ein formatiertes Datum zurück: `"2026-02-06"`.

2. Schreibe eine Funktion `head(arr)`, die das **erste Element** und den **Rest** des Arrays zurückgibt:

```javascript
const [first, remaining] = head([10, 20, 30, 40]);
// first = 10, remaining = [20, 30, 40]
```

3. Gegeben ist ein Array mit RGB-Werten: `[255, 128, 0]`. Destructuriere es und erstelle daraus einen CSS-String: `"rgb(255, 128, 0)"`.

---

## 5.2 Object Destructuring

Ähnlich wie bei Arrays, aber die Zuordnung erfolgt über den **Eigenschaftsnamen**:

```javascript
const person = {
  name: "Anna",
  alter: 25,
  stadt: "Stuttgart",
};

// Klassisch
const name = person.name;
const alter = person.alter;

// Mit Destructuring
const { name, alter, stadt } = person;
console.log(name); // "Anna"
console.log(alter); // 25
console.log(stadt); // "Stuttgart"
```

> 📖 Die Reihenfolge spielt **keine** Rolle — nur der **Name** muss übereinstimmen.

---

### Object Destructuring — Erweiterte Syntax

```javascript
const produkt = {
  id: 1,
  title: "Laptop",
  price: 999,
  category: "Elektronik",
  stock: 42,
};

// Umbenennung (Alias)
const { title: produktName, price: preis } = produkt;
// produktName = "Laptop", preis = 999

// Standardwerte
const { rating = 0, title } = produkt;
// rating = 0 (existiert nicht im Objekt), title = "Laptop"

// Rest-Pattern
const { id, ...details } = produkt;
// id = 1, details = { title: "Laptop", price: 999, category: "Elektronik", stock: 42 }

// Verschachtelt
const user = { name: "Max", address: { city: "Berlin", zip: "10115" } };
const {
  address: { city, zip },
} = user;
// city = "Berlin", zip = "10115"
```

---

### ⚛️ Verwendung in React

Object Destructuring wird in React **überall** verwendet — besonders bei Props:

```jsx
// Props destructuren — das Standard-Pattern in React
function ProductCard({ title, price, imageUrl, onAddToCart }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{price} €</p>
      <button onClick={onAddToCart}>In den Warenkorb</button>
    </div>
  );
}

// Props mit Standardwerten
function Button({ label = "Klick", variant = "primary", onClick }) {
  return (
    <button className={`btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}
```

```jsx
// API-Response destructuren
const { data, error, isLoading } = useFetch("/api/products");
```

---

### 🧰 Aufgabe — Object Destructuring

Gegeben ist ein API-Response:

```javascript
const apiResponse = {
  status: 200,
  data: {
    user: {
      id: 42,
      username: "maxpower",
      email: "max@example.com",
      preferences: {
        theme: "dark",
        language: "de",
        notifications: true,
      },
    },
    meta: {
      requestId: "abc-123",
      timestamp: "2026-02-06T10:00:00Z",
    },
  },
};
```

1. Extrahiere `username` und `email` per Destructuring.
2. Extrahiere `theme` und `language` per verschachteltem Destructuring.
3. Extrahiere `status` und den gesamten Rest als `payload` per Rest-Pattern.
4. Benenne `username` in `name` um während des Destructurings.

---

<!-- _header: "" -->

# Spread Operator

---

<!-- header: Spread Operator -->

## Spread Operator für Arrays


Der Spread Operator für Arrays wurde bereits behandelt.

## Spread Operator für Objekte (`...`)

Der Spread Operator erlaubt es, Objekteigenschaften zu entpacken und zu kopieren.

```javascript
const original = { a: 1, b: 2, c: 3 };

// Shallow Copy — neues Objekt, gleicher Inhalt
const kopie = { ...original };
console.log(kopie); // { a: 1, b: 2, c: 3 }
console.log(kopie === original); // false (unterschiedliche Objekte)

// Eigenschaften zusammenführen
const obj1 = { name: "Max", age: 25 };
const obj2 = { city: "Berlin", country: "DE" };
const merged = { ...obj1, ...obj2 };
// merged = { name: "Max", age: 25, city: "Berlin", country: "DE" }

// Eigenschaften überschreiben
const updated = { ...original, b: 99, d: 4 };
// updated = { a: 1, b: 99, c: 3, d: 4 }
```

> 📖 Der Spread Operator erzeugt eine **Shallow Copy** — verschachtelte Objekte werden nicht tiefenweit kopiert.

---

### Spread Operator — Praktische Anwendungen

```javascript
const user = { name: "Anna", email: "anna@example.com", admin: false };

// Objekt klonen und ändern (immutable Update Pattern)
const updatedUser = { ...user, admin: true };
// Originales user-Objekt bleibt unverändert

// Bestimmte Eigenschaften entfernen (mit Destructuring)
const { admin, ...publicUser } = user;
// publicUser = { name: "Anna", email: "anna@example.com" }

// Default-Eigenschaften + Benutzer-Overrides
const defaults = { theme: "light", lang: "de", notifications: true };
const settings = { theme: "dark" }; // Nutzer ändert nur theme
const merged = { ...defaults, ...settings };
// merged = { theme: "dark", lang: "de", notifications: true }
```

---

### ⚛️ Verwendung in React

Der Spread Operator ist **das Standard-Pattern für immutable State Updates** in React:

```jsx
// State immutable updaten
const [user, setUser] = useState({ name: "Max", age: 25 });

// ❌ FALSCH — direktes Mutieren
user.age = 26;
setUser(user);

// ✅ RICHTIG — neues Objekt mit Spread Operator
setUser({ ...user, age: 26 });
```

```jsx
// Props weitergeben (Props Spreading)
function Button(props) {
  return <button {...props}>Klick</button>;
}

// Äquivalent zu:
function Button({ className, onClick, children }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
```

```jsx
// Default Props mit Spread
function Card({ title, description, fullWidth = false, ...rest }) {
  return (
    <div {...rest} className={fullWidth ? "full" : "half"}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
```

---

### 🧰 Aufgabe — Spread Operator

Gegeben ist ein Benutzer-Objekt:

```javascript
const user = {
  id: 1,
  name: "Lisa",
  email: "lisa@example.com",
  role: "user",
  createdAt: "2026-01-01",
};
```

1. Erstelle ein neues Objekt `publicUser`, das alle Eigenschaften außer `id` und `createdAt` enthält.
2. Erstelle ein neues Objekt `adminUser`, das auf `user` basiert, aber die `role` auf `"admin"` setzt.
3. Merge zwei Einstellungs-Objekte: `{ theme: "light", notifications: true }` und `{ theme: "dark" }`. Welche `theme` wird benutzt?
4. (optional) Erkläre, warum Shallow Copy ein Problem sein kann bei verschachtelten Objekten.

---

<!-- _header: "" -->

# 💡 Rest Operator

**Syntax:** `...`

**✅ Purpose:** Collect multiple values into one structure.

---

<!-- _header: "Rest Operator" -->

## 💡 Argumente sammeln (Collecting arguments)

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
```

## 💡 Rest with Array Destructuring

```js
const [first, ...rest] = [1, 2, 3];
```

## 💡 Rest with Object Destructuring

```js
const { name, ...others } = user;
```

---

<!-- _header: "" -->

# Array-Methoden

---

<!-- header: Array-Methoden -->

## Array-Methoden: `filter()`, `find()`, `reduce()`

Diese Methoden transformieren Arrays funktional und werden ständig in React verwendet:

```javascript
const zahlen = [1, 2, 3, 4, 5, 6];

// filter() — gibt ein neues Array mit gefilterten Elementen zurück
const gerade = zahlen.filter((n) => n % 2 === 0); // [2, 4, 6]

// find() — gibt das erste Element zurück, das die Bedingung erfüllt
const erste = zahlen.find((n) => n > 3); // 4

// reduce() — "reduziert" das Array zu einem einzelnen Wert
const summe = zahlen.reduce((acc, n) => acc + n, 0); // 21
```

> 📖 `map()` wurde bereits in den Grundlagen behandelt.

---

## `filter()` — Filtern

```javascript
const produkte = [
  { id: 1, name: "Laptop", preis: 999, verfügbar: true },
  { id: 2, name: "Maus", preis: 25, verfügbar: false },
  { id: 3, name: "Monitor", preis: 299, verfügbar: true },
];

// Nur verfügbare Produkte
const verfügbar = produkte.filter((p) => p.verfügbar);
// [{ id: 1, ... }, { id: 3, ... }]

// Produkte über 100€
const teuer = produkte.filter((p) => p.preis > 100);
// [{ id: 1, ... }, { id: 3, ... }]

// Nach Suchtext filtern
function searchProducts(term) {
  return produkte.filter((p) =>
    p.name.toLowerCase().includes(term.toLowerCase()),
  );
}
```

---

## `find()` — Erstes Element finden

```javascript
const users = [
  { id: 1, name: "Anna", role: "user" },
  { id: 2, name: "Bob", role: "admin" },
  { id: 3, name: "Charlie", role: "user" },
];

// User mit bestimmter ID (sehr häufig!)
const user = users.find((u) => u.id === 2); // Bob-Objekt

// Erstes Element mit Bedingung
const admin = users.find((u) => u.role === "admin"); // Bob

// Gibt undefined zurück, wenn nicht gefunden
const notFound = users.find((u) => u.id === 999); // undefined
```

---

## `reduce()` — Reduzieren zu einem Wert

```javascript
const zahlen = [1, 2, 3, 4, 5];

// Summe
const summe = zahlen.reduce((acc, n) => acc + n, 0);
// acc:0→1→3→6→10→15, Ergebnis: 15

// Objekt aus Array erstellen (sehr mächtig!)
const personen = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Bob" },
];
const indexById = personen.reduce((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {});
// { 1: {id:1, name:"Anna"}, 2: {id:2, name:"Bob"} }

// Verschachtelt: Map mit count
const items = ["a", "b", "a", "c", "b", "a"];
const count = items.reduce(
  (acc, item) => ({
    ...acc,
    [item]: (acc[item] ?? 0) + 1,
  }),
  {},
);
// { a: 3, b: 2, c: 1 }
```

---

## Verkettung (Chaining)

Diese Methoden können **verkettet** werden:

```javascript
const produkte = [
  { name: "Laptop", kategorie: "Elektronik", preis: 999 },
  { name: "Buch", kategorie: "Medien", preis: 15 },
  { name: "Monitor", kategorie: "Elektronik", preis: 299 },
];

// Elektronik-Produkte → Preise extrahieren → Summe bilden
const summeElektronik = produkte
  .filter((p) => p.kategorie === "Elektronik") // 2 Produkte
  .map((p) => p.preis) // [999, 299]
  .reduce((sum, preis) => sum + preis, 0); // 1298
```

---

## ⚛️ Verwendung in React

Der häufigste Use-Case in React: **Listen filtern und rendern**

```jsx
function ProductList({ products, searchTerm }) {
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      {filtered.length === 0 ? (
        <p>Keine Produkte gefunden</p>
      ) : (
        <ul>
          {filtered.map((p) => (
            <li key={p.id}>{p.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

```jsx
// Warenkorb-Total mit reduce
function Cart({ items }) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  return <h2>Total: € {total}</h2>;
}

// Einen bestimmten Artikel finden
const editItem = items.find((i) => i.id === selectedId);
```

---

## 🧰 Aufgabe — Array-Methoden

Gegeben ein Array von Filmen:

```javascript
const movies = [
  { title: "Dune", year: 2021, rating: 8, genres: ["Sci-Fi", "Action"] },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genres: ["Sci-Fi", "Thriller"],
  },
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genres: ["Sci-Fi", "Thriller"],
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    genres: ["Crime", "Drama"],
  },
  {
    title: "Oppenheimer",
    year: 2023,
    rating: 8.5,
    genres: ["Drama", "History"],
  },
];
```

1. Filtere alle Filme **ab dem Jahr 2000** heraus.
2. Finde den Film mit der **besten Bewertung**.
3. Erstelle ein Array nur der **Titel** aller Filme.
4. Berechne die **durchschnittliche Bewertung** aller Filme per `reduce`.
5. Verkette `filter` → `map` um nur die Titel der Sci-Fi-Filme zu bekommen.

---

<!-- _header: "" -->

# Promises

---

<!-- header: Promises -->

## Promises — Überblick

Eine `Promise` stellt ein Versprechen dar, dass eine asynchrone Operation irgendwann abgeschlossen ist oder scheitert.

> 📖 **Promise Zustände**: `pending` (läuft) → `fulfilled` (erfüllt) oder `rejected` (abgelehnt)

```javascript
// Promise erstellen
const myPromise = new Promise((resolve, reject) => {
  // asynchrone Operation...
  if (success) {
    resolve("Erfolg!"); // Promise erfüllt
  } else {
    reject("Fehler!"); // Promise abgelehnt
  }
});

// Promise verwenden
myPromise
  .then((result) => console.log(result)) // Falls erfüllt
  .catch((error) => console.error(error)) // Falls abgelehnt
  .finally(() => console.log("Fertig")); // Immer
```

---

## `.then()` / `.catch()` / `.finally()`

```javascript
// Fetch liefert ein Promise
fetch("https://api.example.com/data")
  .then((response) => response.json()) // Convert zu JSON
  .then((data) => {
    console.log("Daten:", data); // Daten verarbeiten
    return data; // Für nächsten .then()
  })
  .catch((error) => {
    console.error("Fehler:", error); // Fehlerbehandlung
  })
  .finally(() => {
    console.log("Request abgeschlossen"); // Cleanup
  });
```

> **Wichtig:** `.then()` gibt auch ein Promise zurück — Verkettung ist möglich!

---

## Mehrere Promises warten: `Promise.all()` und `Promise.race()`

```javascript
const p1 = fetch("/api/users");
const p2 = fetch("/api/posts");
const p3 = fetch("/api/comments");

// Promise.all() — warte auf ALLE
// Scheitert, wenn eine Promise scheitert
Promise.all([p1, p2, p3])
  .then(([users, posts, comments]) => {
    console.log("Alle Daten geladen");
  })
  .catch((err) => console.error("Mindestens eine fehlgeschlagen"));

// Promise.race() — warte auf ERSTE
const firstResponse = Promise.race([p1, p2, p3]);
firstResponse.then((first) => console.log("Erste Antwort kam an"));
```

---

## `async/await` — Syntactic Sugar für Promises

`async/await` ist die moderne, lesbarere Alternative zu `.then()/.catch()`:

```javascript
// Mit .then()
function loadData() {
  return fetch("/api/data")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

// Mit async/await
async function loadData() {
  try {
    const res = await fetch("/api/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

> 💡 `async/await` wurde in [JavaScript Grundlagen](../JavaScript.md#asynchrone-programmierung) bereits behandelt.

---

## ⚛️ Verwendung in React

`Promise.all()` ist super für paralleles Laden mehrerer API-Daten:

```jsx
useEffect(() => {
  Promise.all([
    fetch("/api/user").then((r) => r.json()),
    fetch("/api/settings").then((r) => r.json()),
    fetch("/api/posts").then((r) => r.json()),
  ])
    .then(([user, settings, posts]) => {
      setUser(user);
      setSettings(settings);
      setPosts(posts);
    })
    .catch((err) => setError(err));
}, []);
```

```jsx
// Modernes Pattern mit async/await
useEffect(() => {
  (async () => {
    try {
      const user = await fetch("/api/user").then((r) => r.json());
      const posts = await fetch("/api/posts").then((r) => r.json());
      setUser(user);
      setPosts(posts);
    } catch (err) {
      setError(err);
    }
  })();
}, []);
```

---

## 🧰 Aufgabe — Promises

1. Schreibe eine Funktion `delay(ms)`, die nach `ms` Millisekunden mit `"Fertig!"` erfüllt wird:

```javascript
delay(1000).then((msg) => console.log(msg)); // Nach 1s: "Fertig!"
```

2. Konvertiere diese `.then()`-Kette in `async/await`:

```javascript
fetch("/api/user")
  .then((res) => res.json())
  .then((user) => fetch(`/api/posts/${user.id}`))
  .then((res) => res.json())
  .then((posts) => console.log(posts));
```

3. Schreibe ein `Promise.race()` für einen **Timeout**: Falls ein Fetch länger als 5 Sekunden dauert, zeige "Timeout!".

---

<!-- _header: "" -->

# Zusammenfassung

---

## ✅ JavaScript Advanced — Zusammenfassung

Die 9 Konzepte dieser Vorlesung sind die **Grundlagen für professionelle React-Entwicklung**:

| Thema                          | Zweck                 | React-Anwendung                        |
| ------------------------------ | --------------------- | -------------------------------------- |
| **Ternary Operator**           | Bedingte Werte        | JSX conditional rendering              |
| **Short-Circuit `&&`, `\|\|`** | Bedingte Ausführung   | Stiles/Klassen, optionales Rendering   |
| **Nullish Coalescing `??`**    | Sichere Defaultwerte  | Props-Fallbacks, localStorage          |
| **Optional Chaining `?.`**     | Sichere Zugriffe      | Nested API-Daten                       |
| **Array Destructuring**        | Werte entpacken       | `useState` Hook                        |
| **Object Destructuring**       | Werte entpacken       | Props extrahieren                      |
| **Spread `...`**               | Shallow Copy, Merging | Immutable State Updates                |
| **Array-Methoden**             | Array transformieren  | Filtern, Mappen, Reduzieren von Listen |
| **Promises**                   | Async Operationen     | API-Fetching in `useEffect`            |

---

## Nächste Schritte

> **📖 Diese Vorlesung bildet die Grundlage für:**
>
> - **React Lecture** — Hooks, Props, State, Effects
> - **Fullstack Development** — Datenmanagement, API-Integration
> - **Production Code** — Best Practices und Fehlerbehandlung

> 💡 **Tipp:** Die meisten Fehler in React entstehen aus Missverständnissen dieser 9 Konzepte. Bei Fragen während der React-Vorlesung: Hier gibt es die Antworten!

---

## 🎯 Häufig verwendete Muster in React

```jsx
// 1. Props mit Defaults destructuren
function Card({ title = "Titel", onClick, className, ...rest }) { }

// 2. Bedingte Styles / Klassen
<button className={isActive ? "active" : ""}>

// 3. Bedingte Rendering
{items.length > 0 && <List items={items} />}

// 4. State immutable updaten
setUser({ ...user, name: "Neu" })

// 5. Array-Transformation
items.filter(i => i.active).map(i => i.name)

// 6. Sichere API-Daten
const name = data?.user?.profile?.name ?? "Unknown"

// 7. Parallele Fetches
Promise.all([fetch1, fetch2, fetch3])
```
