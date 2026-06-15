---
marp: true
theme: default
paginate: true
_class: title
style: |

  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  /* Globale Stile & Farbpalette */
  section {
    background-color: #020617; /* Deep Navy Black */
    color: #f1f5f9;            /* Light Gray Text */
    font-family: 'Urbanist', 'Segoe UI', sans-serif;
    padding: 60px;
  }

  /* Farbdefinitionen für Hervorhebungen */
  h1, h2, h3 {
    color: #f8fafc;
  }

  h1 strong, h2 strong, h3 strong, em {
    color: #10b981;          /* Emerald Green Accent */
    font-style: normal;
  }

  p, li {
    color: #cbd5e1;          /* Secondary Muted Text */
  }

  /* Titel-Folie (Spezial-Klasse) */
  section.title {
    background: radial-gradient(circle at 90% 10%, rgba(16, 185, 129, 0.12) 0%, #020617 60%);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  section.title h1 {
    font-size: 3.5rem;
    margin-bottom: 10px;
  }

  /* Inhalts-Folien Titel */
  section:not(.title) h2 {
    border-left: 6px solid #10b981;
    padding-left: 25px;
    font-size: 1.8rem;
    margin-bottom: 40px;
  }

  /* Kachel/Boxen-Stil für Listen oder Code */
    /* Große Textboxen / Zitate / Info-Meldungen */
    blockquote, .tile {
    background: #0f172a; /* Tieferes, edles Dunkelblau */
    border-left: 4px solid #10b981; /* Smaragdgrüne Akzentlinie links */
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 0 12px 12px 0;
    padding: 20px 25px;
    margin: 20px 0;
    }

    /* Dezent verfeinerter Text innerhalb von Blockquotes */
    blockquote p {
    color: #f1f5f9;
    margin: 0;
    font-style: italic;
    }

    /* Einzelne Code-Wörter im fließenden Text (Inline Code) */
    :not(pre) > code {
    background: rgba(16, 185, 129, 0.15); /* Transparentes Smaragd-Grün */
    color: #34d399; /* Etwas helleres, knackiges Grün für perfekte Lesbarkeit */
    border: 1px solid rgba(16, 185, 129, 0.3);
    border-radius: 6px;
    padding: 2px 8px;
    font-size: 0.95em;
    font-family: 'Courier New', Courier, monospace;
    }

    table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 30px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }
    th {
        background-color: #10b981; /* Knalliges Smaragdgrün */
        color: #020617;            /* Tiefschwarzer Text für perfekten Kontrast */
        font-weight: bold;
        padding: 18px;
        font-size: 1.3rem;
        text-align: left;
        border: 1px solid #10b981;
    }
    td {
        padding: 18px;
        border: 1px solid #334155;
        background-color: #0f172a; /* Etwas helleres Slate-Schwarz für den Zeilenhintergrund */
        color: #ffffff;            /* Kristallklares Weiß für optimale Lesbarkeit */
        font-size: 1.2rem;
    }
    tr:nth-child(even) td {
        background-color: #1e293b; /* Deutlich abgesetzte Zeilen für bessere Scanbarkeit */
    }
---

# Databases **Fundamentals**

Die Grundlage für persistente Daten und stabile Geschäftsdomänen

---

## SQL vs. NoSQL: Die zwei Welten

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

# CRUD – Die vier Grundoperationen

Jede Anwendung arbeitet permanent mit diesen vier Aktionen:

| Operation | Bedeutung           |
| --------- | ------------------- |
| CREATE    | Daten erstellen     |
| READ      | Daten lesen         |
| UPDATE    | Daten aktualisieren |
| DELETE    | Daten löschen       |

---

# 🟢 CREATE – Daten erstellen

## JavaScript

```javascript id="c1"
const users = [
  { id: 1, first_name: "Anna", age: 22, status: "active" },
  { id: 2, first_name: "Ben", age: 16, status: "active" },
  { id: 3, first_name: "Clara", age: 30, status: "inactive" },
];

users.push({
  id: 4,
  first_name: "Tom",
  age: 20,
  status: "active",
});
```

➡️ `push()` fügt einen neuen Datensatz hinzu.

---

## SQL

```sql id="c2"
INSERT INTO users (id, first_name, age, status)
VALUES (4, 'Tom', 20, 'active');
```

➡️ SQL macht exakt dieselbe Operation persistent in der Datenbank.

---

# 🔵 READ – Daten lesen

## JavaScript

```javascript id="r1"
const users = [
  { id: 1, first_name: "Anna", age: 22, status: "active" },
  { id: 2, first_name: "Ben", age: 16, status: "active" },
  { id: 3, first_name: "Clara", age: 30, status: "inactive" },
];

// Hole Namen aller User
const result = users.map((u) => ({ first_name: u.first_name }));
```

➡️ `map()` = bestimmte Felder zurückgeben

---

## SQL

Die Anatomie einer Standard-SQL-Abfrage besteht immer aus diesen Klauseln:

- `SELECT`: Bestimmt, **welche Spalten** zurückgegeben werden.
- `FROM`: Bestimmt, aus **welcher Tabelle** gelesen wird.

```sql
-- Hole Namen aller User
SELECT first_name FROM users
```

oder alle Spalten

```sql
SELECT * FROM users
```

---

# SQL Query Basics

Die Anatomie einer SQL-Abfrage:

| Klausel  | Bedeutung                                   |
| -------- | ------------------------------------------- |
| SELECT   | Welche Spalten sollen zurückgegeben werden? |
| FROM     | Aus welcher Tabelle wird gelesen?           |
| WHERE    | Welche Zeilen sollen gefiltert werden?      |
| ORDER BY | Wie sollen Ergebnisse sortiert werden?      |
| LIMIT    | Wie viele Ergebnisse sollen zurückkommen?   |

---

## Beispiel

```sql
SELECT first_name
FROM users
WHERE age > 18
ORDER BY age DESC
LIMIT 5;
```

---

## Select mit Constraints

```javascript
const result = users
  .filter((u) => u.age > 18 && u.status === "active")
  .map((u) => ({ first_name: u.first_name }));
```

```sql
SELECT first_name
FROM users
WHERE age > 18 AND status = 'active';
```

➡️ `filter()` = Datensätze auswählen

---

# 🟡 UPDATE – Daten aktualisieren

## JavaScript

```javascript id="u1"
const users = [
  { id: 1, first_name: "Anna", age: 22, status: "active" },
  { id: 2, first_name: "Ben", age: 16, status: "active" },
  { id: 3, first_name: "Clara", age: 30, status: "inactive" },
];

const updatedUsers = users.map((u) => (u.id === 2 ? { ...u, age: 17 } : u));
```

➡️ Datensatz gezielt verändern

---

## SQL

```sql id="u2"
UPDATE users
SET age = 17
WHERE id = 2;
```

---

# 🔴 DELETE – Daten löschen

## JavaScript

```javascript id="d1"
const users = [
  { id: 1, first_name: "Anna", age: 22, status: "active" },
  { id: 2, first_name: "Ben", age: 16, status: "active" },
  { id: 3, first_name: "Clara", age: 30, status: "inactive" },
];

const filteredUsers = users.filter((u) => u.id !== 2);
```

➡️ Alles behalten außer dem Treffer

---

## SQL

```sql id="d2"
DELETE FROM users
WHERE id = 2;
```

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

# Fazit

- SQL = strukturierte relationale Daten
- CRUD = Grundlage jeder Anwendung
- JavaScript Arrays = perfekte Vorbereitung auf SQL
- Datenbanken speichern Business-Logik dauerhaft
- Datenabfragen sind reine Logik

---

# Beziehungen zwischen Tabellen

Relationale Datenbanken werden mächtig, sobald Tabellen miteinander verbunden werden.

---

## Beispiel: Users & Orders

### users

| id  | name |
| --- | ---- |
| 1   | Anna |
| 2   | Ben  |

### orders

| id  | user_id | product  |
| --- | ------- | -------- |
| 1   | 1       | Laptop   |
| 2   | 1       | Mouse    |
| 3   | 2       | Keyboard |

---

# ER-Diagramm (Entity Relationship)

```text
users
-----
id (PK)
name

    1 ────────∞

orders
------
id (PK)
user_id (FK)
product
```

### Bedeutung

- Ein User kann viele Orders besitzen
- Jede Order gehört genau einem User
- `FK` = Foreign Key (Verweis auf andere Tabelle)

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

# SQL ist keine Magie

## Daten abfragen ist **Logik.**

Das Tool entscheidet nur über die Syntax.

---

# Wichtig für echte Anwendungen

Datenbanken sind nicht nur Speicher.

Sie modellieren:

- Geschäftslogik
- Beziehungen
- Zustände
- Historie
- Sicherheit
- Konsistenz

---

# Moderne Architektur

Typischer Stack:

```text
Frontend
   ↓
Backend/API
   ↓
Database
```

Die Datenbank ist die zentrale Wahrheit des Systems.

---

# Zusammenfassung

- SQL = strukturierte relationale Daten
- NoSQL = flexible hochskalierbare Daten
- CRUD = Basis jeder Anwendung
- JOINs verbinden Geschäftslogik
- Datenabfragen sind reine Logik
- Gute Datenmodelle sind wichtiger als Frameworks

---

# Daten abfragen ist **Logik.**

## Das Tool entscheidet nur über die Syntax.

---

## 💻 Aufgabe:

- **SQL Practice:**
  - Sie müssen SQL-Queries nicht zwingend auswendig im Schlaf schreiben können, aber das Verständnis für relationale Operationen ist Pflicht.
  - **Fokus im Interview:** Beherrschen Sie `INNER JOIN` und `LEFT JOIN` sicher auf einfachem bis mittlerem Schwierigkeitsgrad.
- **NoSQL (MongoDB) Practice:**
  - Machen Sie sich mit dokumentenorientierten Abfragen vertraut.
  - Nutzen Sie Tools wie `humongous.io`, um grundlegende CRUD-Queries gegen eine Live-NoSQL-Datenbank auszuführen und sich auf typische Screening-Fragen vorzubereiten.

---

## Das SQL-Datenbankschema

In der relationalen Welt ist das **Schema** das Fundament der Datenintegrität. Es beschreibt exakt die Struktur und die Datentypen aller Entitäten.

> "Ein Schema macht Datenbankabfragen verlässlich, typsicher und vorhersagbar."

- **Sicherer Vertrag:** Änderungen am Datenmodell erfordern explizite Migrationen (Hinzufügen von Tabellen, Spalten oder neuen Fremdschlüssel-Beziehungen).
- **Visuelle Modellierung:** Beziehungen zwischen Entitäten (z. B. wie ein `actor` mit `movies` verknüpft ist oder wo `movie_reviews` andocken) werden in Entity-Relationship-Diagrammen (ERD) strukturiert.

---

# Daten halten. **Struktur bewahren.**

Die Wahl der Datenbank bestimmt das Schicksal der Skalierung.

<div style="margin-top: 60px; font-size: 1.1rem; color: #64748b;">
PostgreSQL | MongoDB | ERD | Schema Design
</div>

---

## ORM

---

# Wrap it up

## MVC

![alt text h:500px](img/MVC.png)

---

- Model: Repräsentation der Daten
- View: Darstellung der Daten für den Benutzer
- Controller: Vermittler zwischen Model und View, verarbeitet Benutzereingaben; Geschäftslogik
- Früher war View ein HTML-Template, heute ist es oft die REST API. Zusätzlich gibt es dann eine Single Page Application (SPA) als Frontend für Nutzer.
  - zum Beispiel ASP.NET MVC, Spring MVC, Ruby on Rails
