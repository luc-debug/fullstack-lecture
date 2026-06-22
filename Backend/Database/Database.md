---
marp: true
theme: default
paginate: true
_class: title
style: |

  /* ─── Layout-Helfer ─── */
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }

  /* ─── Globale Stile & Farbpalette ─── */
  section {
    background-color: #020617;
    color: #f1f5f9;
    font-family: 'Urbanist', 'Segoe UI', sans-serif;
    padding: 60px;
  }

  h1, h2, h3 { color: #f8fafc; }

  h1 strong, h2 strong, h3 strong, em {
    color: #10b981;
    font-style: normal;
  }

  p, li { color: #cbd5e1; }

  /* ─── Titel-Folie ─── */
  section.title {
    background: radial-gradient(circle at 90% 10%, rgba(16, 185, 129, 0.12) 0%, #020617 60%);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  section.title h1 { font-size: 3.5rem; margin-bottom: 10px; }

  /* ─── Section Divider ─── */
  section.section-divider {
    background: radial-gradient(circle at 15% 85%, rgba(16, 185, 129, 0.08) 0%, #020617 65%);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  section.section-divider .num {
    font-size: 9rem;
    font-weight: 700;
    color: rgba(16, 185, 129, 0.10);
    line-height: 1;
    margin-bottom: -10px;
  }

  section.section-divider h1 {
    font-size: 2.8rem;
    border-left: 6px solid #10b981;
    padding-left: 24px;
    margin: 0;
  }

  section.section-divider p {
    padding-left: 30px;
    color: #475569;
    font-size: 1rem;
    margin-top: 12px;
  }

  /* ─── Inhalts-Folien Titel ─── */
  section:not(.title):not(.section-divider) h2 {
    border-left: 6px solid #10b981;
    padding-left: 25px;
    font-size: 1.8rem;
    margin-bottom: 30px;
  }

  /* ─── Blockquotes & Tiles ─── */
  blockquote, .tile {
    background: #0f172a;
    border-left: 4px solid #10b981;
    border-top: 1px solid rgba(255,255,255,0.05);
    border-right: 1px solid rgba(255,255,255,0.05);
    border-bottom: 1px solid rgba(255,255,255,0.05);
    border-radius: 0 12px 12px 0;
    padding: 18px 22px;
    margin: 12px 0;
  }

  blockquote p { color: #f1f5f9; margin: 0; font-style: italic; }

  .tile h3 { margin-top: 0; }
  .tile-blue   { border-left-color: #3b82f6 !important; }
  .tile-purple { border-left-color: #a855f7 !important; }
  .tile-yellow { border-left-color: #f59e0b !important; }
  .tile-red    { border-left-color: #ef4444 !important; }

  /* ─── Inline Code ─── */
  :not(pre) > code {
    background: rgba(16, 185, 129, 0.15);
    color: #34d399;
    border: 1px solid rgba(16, 185, 129, 0.3);
    border-radius: 6px;
    padding: 2px 8px;
    font-size: 0.95em;
    font-family: 'Courier New', Courier, monospace;
  }

  /* ─── Tabellen ─── */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
  th {
    background-color: #10b981;
    color: #020617;
    font-weight: bold;
    padding: 14px 18px;
    font-size: 1.1rem;
    text-align: left;
    border: 1px solid #10b981;
  }
  td {
    padding: 14px 18px;
    border: 1px solid #334155;
    background-color: #0f172a;
    color: #ffffff;
    font-size: 1.05rem;
  }
  tr:nth-child(even) td { background-color: #1e293b; }

  /* ─── ER-Diagramm ─── */
  .er-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin: 20px 0;
  }
  .er-box {
    background: #0f172a;
    border: 1px solid #334155;
    border-radius: 10px;
    overflow: hidden;
    min-width: 200px;
  }
  .er-head {
    background: #10b981;
    color: #020617;
    font-weight: bold;
    padding: 10px 16px;
    text-align: center;
    font-size: 1rem;
    letter-spacing: 0.05em;
  }
  .er-row {
    padding: 8px 16px;
    border-top: 1px solid #1e293b;
    color: #cbd5e1;
    font-size: 0.88rem;
    font-family: 'Courier New', monospace;
  }
  .er-row.pk { color: #10b981; font-weight: bold; }
  .er-row.fk { color: #f59e0b; }
  .er-conn {
    color: #475569;
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.8;
    padding: 0 8px;
  }

  /* ─── Warn-Box ─── */
  .warn {
    background: rgba(239, 68, 68, 0.08);
    border: 1px solid rgba(239, 68, 68, 0.3);
    border-left: 4px solid #ef4444;
    border-radius: 0 8px 8px 0;
    padding: 10px 16px;
    margin-top: 14px;
    color: #fca5a5;
    font-size: 0.9rem;
  }
---

# Databases **Fundamentals**

Die Grundlage für persistente Daten und stabile Geschäftsdomänen

---

<!-- _class: section-divider -->

<div class="num">01</div>

# SQL vs. **NoSQL**

Die zwei grundlegenden Paradigmen der Datenspeicherung

---

## Vergleich SQL und NoSQL

Datenbanken werden grundlegend in **relationale (SQL)** und **nicht-tabellarische (NoSQL)** Systeme unterteilt. Im echten Entwickleralltag überwiegt meist der relationale Ansatz, da sich Business-Logiken hervorragend über feste Beziehungen abbilden lassen.

<div class="grid-2" style="display: flex; gap: 40px; margin-top: 30px;">

<div class="tile" style="border-left: 4px solid #3b82f6;">
<h3 style="color: #60a5fa;">SQL (Relational)</h3>

<ul>
  <li>Basiert auf strikten <strong>Beziehungen</strong></li>
  <li>Festes, vordefiniertes <strong>Schema</strong></li>
  <li>Starke Datenintegrität</li>
  <li>Schwieriger horizontal zu skalieren</li>
  <li><em>Tech-Stack:</em> PostgreSQL, MySQL</li>
</ul>

</div>

<div class="tile" style="border-left: 4px solid #a855f7;">
<h3 style="color: #c084fc;">NoSQL (Non-Tabular)</h3>

<ul>
  <li>Keine starre Form (<strong>Schemalos</strong>)</li>
  <li>Eingeschränkte Beziehungslogik</li>
  <li>Sehr hohe Performance</li>
  <li>Hervorragend horizontal skalierbar</li>
  <li><em>Tech-Stack:</em> MongoDB, Neo4j</li>
</ul>

</div>
</div>

---

## Wann nutzt man was?

Die Wahl des Datenbanksystems hängt von den Anforderungen der Anwendung ab:

| Kriterium     | SQL-Datenbanken                   | NoSQL-Datenbanken                  |
| :------------ | :-------------------------------- | :--------------------------------- |
| **Fokus**     | Komplexe Beziehungen wichtig      | Maximale Performance & Durchsatz   |
| **Schema**    | Benötigt ein verlässliches Schema | Flexibel für unstrukturierte Daten |
| **Beispiele** | E-Commerce-Systeme, Banking       | CMS, Echtzeitdaten, Log-Storage    |

---

<!-- _class: section-divider -->

<div class="num">02</div>

# SQL **Grundlagen**

Struktur, Abfragelogik und die Anatomie einer Query

---

## SQL – Was ist das?

Im Kern ist SQL eine strukturierte Tabelle mit festen Spalten.

Unsere Beispieltabelle: `users`. Alle folgenden Beispiele arbeiten mit derselben Tabelle.

| id  | first_name | age | status   |
| --- | ---------- | --- | -------- |
| 1   | Anna       | 22  | active   |
| 2   | Ben        | 16  | active   |
| 3   | Clara      | 30  | inactive |

Jede Zeile repräsentiert einen Datensatz.

Jede Spalte beschreibt ein bestimmtes Attribut.

---

## CRUD – Die vier Grundoperationen

Jede Anwendung arbeitet permanent mit diesen vier Aktionen:

| Operation | Bedeutung           |
| --------- | ------------------- |
| CREATE    | Daten erstellen     |
| READ      | Daten lesen         |
| UPDATE    | Daten aktualisieren |
| DELETE    | Daten löschen       |

---

## 🟢 CREATE – Daten erstellen

### JavaScript

```javascript id="c1"
users.push({
  id: 4,
  first_name: "Tom",
  age: 20,
  status: "active",
});
```

```diff
const users = [
  { id: 1, first_name: "Anna", age: 22, status: "active" },
  { id: 2, first_name: "Ben", age: 16, status: "active" },
  { id: 3, first_name: "Clara", age: 30, status: "inactive" },
+ { id: 4, first_name: "Tom", age: 20, status: "active" },
];
```

➡️ `push()` fügt einen neuen Datensatz hinzu.

---

### SQL

```sql id="c2"
INSERT INTO users (id, first_name, age, status)
VALUES (4, 'Tom', 20, 'active');
```

```diff
 | id  | first_name | age | status   |
 | --- | ---------- | --- | -------- |
 | 1   | Anna       | 22  | active   |
 | 2   | Ben        | 16  | active   |
 | 3   | Clara      | 30  | inactive |
+| 4   | Tom        | 20  | active   |
```

➡️ SQL macht exakt dieselbe Operation persistent in der Datenbank.

---

## 🔵 READ – Daten lesen

### JavaScript

```javascript id="r1"
const users = [
  { id: 1, first_name: "Anna", age: 22, status: "active" },
  { id: 2, first_name: "Ben", age: 16, status: "active" },
  { id: 3, first_name: "Clara", age: 30, status: "inactive" },
];

// Hole Namen aller User
const result = users.map((u) => ({ first_name: u.first_name }));
// result = [{ first_name: "Anna" }, { first_name: "Ben" }, { first_name: "Clara" }]
```

➡️ `map()` = bestimmte Felder zurückgeben

---

### SQL

Die Anatomie einer Standard-SQL-Abfrage besteht immer aus diesen Klauseln:

- `SELECT`: Bestimmt, **welche Spalten** zurückgegeben werden.
- `FROM`: Bestimmt, aus **welcher Tabelle** gelesen wird.

```sql
-- Hole Namen aller User
SELECT first_name FROM users

  | first_name|
  | ----------|
  | Anna      |
  | Ben       |
  | Clara     |
```

oder alle Spalten

```sql
SELECT * FROM users
```

---

### Weitere Elemente eine Read Operation

Die Anatomie einer SQL-Abfrage:

| Klausel  | Bedeutung                                   |
| -------- | ------------------------------------------- |
| SELECT   | Welche Spalten sollen zurückgegeben werden? |
| FROM     | Aus welcher Tabelle wird gelesen?           |
| WHERE    | Welche Zeilen sollen gefiltert werden?      |
| ORDER BY | Wie sollen Ergebnisse sortiert werden?      |
| LIMIT    | Wie viele Ergebnisse sollen zurückkommen?   |

---

### JavaScript

```javascript
const users = [
  { id: 1, first_name: "Anna", age: 22, status: "active" },
  { id: 2, first_name: "Ben", age: 16, status: "active" },
  { id: 3, first_name: "Clara", age: 30, status: "inactive" },
];

const result = users
  .filter((u) => u.age > 18)
  .sort((a, b) => b.age - a.age)
  .slice(0, 5)
  .map((u) => ({ first_name: u.first_name }));

// result = [{ first_name: "Clara" }, { first_name: "Anna" }]
```

➡️ `filter()` = Datensätze auswählen

---

### SQL

```
| id  | first_name | age | status   |
| --- | ---------- | --- | -------- |
| 1   | Anna       | 22  | active   |
| 2   | Ben        | 16  | active   |
| 3   | Clara      | 30  | inactive |
```

```sql
SELECT first_name FROM users WHERE age > 18 ORDER BY age DESC LIMIT 5;
```

```
| first_name|
| ----------|
| Clara     |
| Anna      |


```

---

## 🟡 UPDATE – Daten aktualisieren

```sql
UPDATE users
SET age = 17
WHERE id = 2;
```

```diff
const users = [
  { id: 1, first_name: "Anna", age: 22 },
- { id: 2, first_name: "Ben", age: 16 },
+ { id: 2, first_name: "Ben", age: 17 },
  { id: 3, first_name: "Clara", age: 30 }
];
```

➡️ Wichtig: Ohne `WHERE` würden **alle Datensätze** geändert werden.

---

## 🔴 DELETE – Daten löschen

```sql
DELETE FROM users
WHERE id = 2;
```

```diff
const users = [
  { id: 1, first_name: "Anna" },
- { id: 2, first_name: "Ben" },
  { id: 3, first_name: "Clara" }
];
```

➡️ Der Datensatz wird vollständig entfernt.

<div class="warn">
⚠️ DELETE ohne WHERE löscht alle Datensätze der Tabelle.
</div>

---

## Zusammenfassung

SQL ist keine neue Denkweise

Das kennt ihr bereits aus JavaScript

| SQL    | JavaScript          |
| ------ | ------------------- |
| INSERT | `push()`            |
| SELECT | `map()`             |
| WHERE  | `filter()`          |
| UPDATE | `map() + condition` |
| DELETE | `filter()`          |

---

## Beispiel

```sql id="qa1"
SELECT first_name
FROM users
WHERE age > 18;
```

## JavaScript Denkweise dazu

```javascript id="qa2"
users
  .filter((u) => u.age > 18)
  .map((u) => ({
    first_name: u.first_name,
  }));
```

---

# Warum Datenbanken trotzdem wichtig sind

JavaScript Arrays:

- sind nur im RAM
- verschwinden beim Neustart
- sind nicht für Millionen Datensätze optimiert

Datenbanken bieten:

- Persistenz
- Performance
- Sicherheit
- Skalierung
- gemeinsame Datenquelle

---

## 💻 Aufgabe: Basic Read OPerationen üben

- gehen Sie auf https://www.sql-practice.com/
- Üben Sie die Read Operationen

---

<!-- _class: section-divider -->

<div class="num">03</div>

# Beziehungen zwischen Tabellen

Relationale Datenbanken werden mächtig, sobald Tabellen miteinander verbunden werden.

---

## Warum brauchen wir mehrere Tabellen?

Statt Daten mehrfach zu speichern, speichern relationale Datenbanken Beziehungen.

### Schlechte Lösung

| Order  | User |
| ------ | ---- |
| Laptop | Anna |
| Mouse  | Anna |

Der Name "Anna" wird mehrfach gespeichert.

---

### Gute Lösung

**users**

| id  | name |
| --- | ---- |
| 1   | Anna |

**orders**

| id  | user_id | product |
| --- | ------- | ------- |
| 1   | 1       | Laptop  |
| 2   | 1       | Mouse   |

➡️ Daten werden normalisiert gespeichert.

---

## Primary Key & Foreign Key

<div class="columns">

<div>
<div class="tile">

### 🔑 Primary Key (PK)

- Eindeutiger Bezeichner **pro Zeile**
- Darf nie `NULL` oder doppelt sein
- Meist eine Auto-Increment-ID
- Beispiel: `users.id`

</div>
</div>

<div>
<div class="tile tile-yellow">

### 🔗 Foreign Key (FK)

- Verweis auf einen PK **in einer anderen Tabelle**
- Stellt **referenzielle Integrität** sicher
- Definiert die Beziehung zwischen Entitäten
- Beispiel: `orders.user_id → users.id`

</div>
</div>

</div>

---

## Beispiel: Users & Orders

<div class="columns">

<div>

**users**

| id  | name |
| --- | ---- |
| 1   | Anna |
| 2   | Ben  |

</div>

<div>

**orders**

| id  | user_id | product  |
| --- | ------- | -------- |
| 1   | 1       | Laptop   |
| 2   | 1       | Mouse    |
| 3   | 2       | Keyboard |

</div>

</div>

`orders.user_id` verweist auf `users.id` → das ist ein **Foreign Key (FK)**

---

## Beziehungstypen

| Typ | Beispiel           |
| --- | ------------------ |
| 1:1 | User ↔ Profile     |
| 1:n | User ↔ Orders      |
| n:m | Students ↔ Courses |

---

### One-to-Many (1:n)

<div class="er-wrap">
  <div class="er-box">
    <div class="er-head">users</div>
    <div class="er-row pk">🔑 id (PK)</div>
    <div class="er-row">name</div>
    <div class="er-row">email</div>
  </div>
  <div class="er-conn">1<br>────<br>∞</div>
  <div class="er-box">
    <div class="er-head">orders</div>
    <div class="er-row pk">🔑 id (PK)</div>
    <div class="er-row fk">🔗 user_id (FK)</div>
    <div class="er-row">product</div>
    <div class="er-row">amount</div>
  </div>
</div>

- Ein User kann **viele** Orders besitzen → **1:n (One-to-Many)**
- Jede Order gehört **genau einem** User
- `FK` = Foreign Key (Verweis auf andere Tabelle)

---

### Many-to-Many (n:m)

Ein Student kann viele Kurse besuchen.

Ein Kurs hat viele Studenten.

Direkte Speicherung ist nicht möglich.

```text
students
   n
    \
     \
      enrollments
     /
    /
   n
courses
```

➡️ Dafür benötigt man eine Zwischentabelle.

---

#### Many-to-Many Beispiel

<div class="columns">

<div>

**students**

| id  | name |
| --- | ---- |
| 1   | Anna |
| 2   | Ben  |

</div>

<div>

**courses**

| id  | title |
| --- | ----- |
| 1   | SQL   |
| 2   | React |

</div>

</div>

**enrollments**

| student_id | course_id |
| ---------- | --------- |
| 1          | 1         |
| 1          | 2         |
| 2          | 1         |

Anna besucht SQL und React.

Ben besucht SQL.

---

#### ER-Diagramm für Many-to-Many

<div class="er-wrap">
  <div class="er-box">
    <div class="er-head">students</div>
    <div class="er-row pk">🔑 id</div>
    <div class="er-row">name</div>
  </div>

  <div class="er-conn">1<br />────<br />∞</div>

  <div class="er-box">
    <div class="er-head">enrollments</div>
    <div class="er-row fk">student_id</div>
    <div class="er-row fk">course_id</div>
  </div>

  <div class="er-conn">∞<br />────<br />1</div>

  <div class="er-box">
    <div class="er-head">courses</div>
    <div class="er-row pk">🔑 id</div>
    <div class="er-row">title</div>
  </div>
</div>

➡️ Eine n:m Beziehung wird immer über eine Zwischentabelle modelliert.

---

### One-to-One (1:1)

Ein Datensatz aus Tabelle A ist mit genau **einem** Datensatz aus Tabelle B verknüpft.

**Häufige Anwendungsfälle:**

- **Performance:** Auslagerung von selten genutzten, großen Texten oder Blobs.
- **Sicherheit:** Isolierte Speicherung sensibler Profildaten (z.B. User-Credentials getrennt von öffentlichen Infos).
- **Struktur:** Logische Aufteilung einer zu großen Entität.

---

#### One-to-One Beispiel

**users**

| id  | name |
| --- | ---- |
| 1   | Anna |
| 2   | Ben  |

**profiles**

| id  | user_id | website   |
| --- | ------- | --------- |
| 10  | 1       | anna.dev  |
| 11  | 2       | ben.codes |

➡️ Der Foreign Key `profiles.user_id` verweist auf `users.id`.
Damit es eine 1:1 Beziehung bleibt, muss diese Spalte **UNIQUE** sein!

---

#### ER-Diagramm für One-to-One

- Ein User hat **genau ein** Profil.
- Jedes Profil gehört zu **genau einem** User.
- Das `UNIQUE`-Constraint auf dem Foreign Key verhindert Duplikate.

---

## 💻 Aufgabe: ER-Diagramme

---

# JOIN – Tabellen verbinden

Mit `JOIN` kombiniert SQL Daten aus mehreren Tabellen.

```sql
SELECT users.name, orders.product
FROM users
JOIN orders
ON users.id = orders.user_id;
```

### Ergebnis

| name | product  |
| ---- | -------- |
| Anna | Laptop   |
| Anna | Mouse    |
| Ben  | Keyboard |

---

## INNER JOIN vs. LEFT JOIN

<div class="columns">

<div>

**INNER JOIN** – nur Schnittmenge

```sql
SELECT users.name, orders.product
FROM users
INNER JOIN orders
  ON users.id = orders.user_id;
```

| name | product  |
| ---- | -------- |
| Anna | Laptop   |
| Ben  | Keyboard |

❌ Clara – keine Orders → **fällt raus**

</div>

<div>

**LEFT JOIN** – alle linken Zeilen

```sql
SELECT users.name, orders.product
FROM users
LEFT JOIN orders
  ON users.id = orders.user_id;
```

| name  | product  |
| ----- | -------- |
| Anna  | Laptop   |
| Ben   | Keyboard |
| Clara | NULL     |

✅ Clara – keine Orders → **NULL**

</div>

</div>

---

## JOIN über mehrere Tabellen

<div class="columns">

Welche Kurse besucht Anna?

```sql
SELECT students.name, courses.title
FROM students
JOIN enrollments
  ON students.id = enrollments.student_id
JOIN courses
  ON courses.id = enrollments.course_id;
```

</div>
<div>
Ergebnis

| name | title |
| ---- | ----- |
| Anna | SQL   |
| Anna | React |
| Ben  | SQL   |

</div>
</div>

---

## 💻 Aufgabe: JOIN üben

- gehen Sie auf https://www.sql-practice.com/
- filtern Sie nach JOIN

---

<!-- _class: section-divider -->

<div class="num">04</div>

# Zusammenfassung

---

## Wichtig für echte Anwendungen

Datenbanken sind nicht nur Speicher.

Sie modellieren:

- Geschäftslogik
- Beziehungen
- Zustände
- Historie
- Sicherheit
- Konsistenz

---

## Zusammenfassung

- SQL Datenbank = strukturierte relationale Daten
- NoSQL Datenbank = flexible hochskalierbare Daten
- CRUD = Basis jeder Anwendung
- JOINs verbinden Geschäftslogik
- Datenabfragen sind reine Logik
- Gute Datenmodelle sind wichtiger als Frameworks
