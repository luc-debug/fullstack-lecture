
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
