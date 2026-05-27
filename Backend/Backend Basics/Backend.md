---
marp: true
theme: default
paginate: true
_class: title
style: |
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
    font-size: 2.5rem;
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

# Backend Basics

---

# Einleitung

---

## MVC

![alt text h:500px](img/MVC.png)

---

- Model: Repräsentation der Daten
- View: Darstellung der Daten für den Benutzer
- Controller: Vermittler zwischen Model und View, verarbeitet Benutzereingaben; Geschäftslogik
- Früher war View ein HTML-Template, heute ist es oft die REST API. Zusätzlich gibt es dann eine Single Page Application (SPA) als User Frontend.
  - zum Beispiel ASP .NET MVC, Spring MVC, Ruby on Rails

---

# REST API

---

# Business Logic

---

# Business **Logic**

Vom HTTP-Request zur Datenbank und zurück

---

---

## Die Evolution der Business Logic

Im Grunde genommen macht jedes Backend das Gleiche: Es nimmt einen **HTTP-Request** entgegen, jagt ihn durch die Geschäftslogik und spuckt eine **HTTP-Response** aus. Spannend wird es bei der Frage, wie wir diesen Code strukturieren, wenn die App wächst.

<div class="grid-2">
<div class="tile" style="border-color: rgba(248, 113, 113, 0.3);">
<h3 style="color: #f87171;">Phase 1: Der Prototyp (if / else)</h3>
<p>Man startet mit einer einzigen Datei. Die Routen und die Logik werden direkt untereinander in simplen Verzweigungen abgehandelt. Wenn die URL <code>/users</code> ist, hol den User; wenn sie <code>/products</code> ist, hol das Produkt.</p>
<p><strong>Das Problem:</strong> Sobald Validierung, Error-Handling und Datenbanken dazukommen, bricht dieses File auseinander. Der Code wird unlesbar und lässt sich nicht mehr testen.</p>
</div>

---

<div class="tile" style="border-color: rgba(16, 185, 129, 0.3);">
<h3 style="color: #34d399;">Phase 2: Strukturierte Architektur</h3>
<p>Ab hier bricht man die Riesen-Logik in saubere, wiederverwendbare Bausteine auf. Je nach Team-Präferenz nutzt man dafür einen von zwei Wegen:</p>
<ul>
  <li><strong>Funktionsorientiert:</strong> Reine, entkoppelte Funktionen (z. B. typisch für Express-Controller oder Next.js Route Handler).</li>
  <li><strong>Klassenorientiert (OOP):</strong> Strukturierung über Controller- und Service-Klassen mit Dependency Injection (z. B. der Standard in NestJS).</li>
</ul>
</div>
</div>

---

## Das Middleware & Request Handler Pattern

Um diese Struktur zu erreichen, etablieren moderne Frameworks eine saubere Kette von Verantwortlichkeiten:

- **Middleware:** Eine Funktion, die HTTP-Anfragen abfängt, _bevor_ sie die eigentliche Geschäftslogik erreichen. Sie ist perfekt geeignet, um Requests zu modifizieren, Tokens zu authentifizieren oder Logs zu schreiben.
- **Request Handler:** Die finale Funktion am Ende der Kette. Sie enthält die eigentliche Geschäftslogik (z. B. den Datenbankaufruf) und sendet die fertige HTTP-Antwort (`Response`) an den Client zurück.
- **Request Handler Delegate:** Das Prinzip, diese Bausteine als Pipeline zu organisieren. Jede Middleware entscheidet aktiv, ob sie die Anfrage an den nächsten Block _delegiert_ (`next()`) oder abricht.

---

# Systemarchitektur: **Die Pipeline**

So durchläuft der Request das Backend

<br>

![width:900px](img/Middleware.png)

---

## 💻 Aufgabe: Der VIP-Eingang

Erstelle einen simplen Express-Server mit einer geschützten Route. Ziel ist es, die Verantwortlichkeiten strikt zwischen Middleware und Handler zu trennen.

<div class="grid-2">
<div class="tile" style="border-top: 4px solid #f87171;">
<h3>1. Die Middleware (Der Türsteher)</h3>
<p>Schreibe eine Middleware-Funktion <code>checkAuth</code>. Sie prüft, ob der HTTP-Header <code>x-role</code> den Wert <code>"vip"</code> hat.</p>
<ul>
  <li>Wenn ja: Reiche die Anfrage weiter.</li>
  <li>Wenn nein: Blockiere die Anfrage mit Status <code>403 Forbidden</code> und einer Fehlermeldung.</li>
</ul>
</div>

---

<div class="tile" style="border-top: 4px solid #34d399;">
<h3>2. Der Request Handler (Die Party)</h3>
<p>Schreibe eine Handler-Funktion <code>getVipData</code>. Diese wird nur aufgerufen, wenn die Middleware die Anfrage durchlässt.</p>
<ul>
  <li>Sende den Status <code>200 OK</code>.</li>
  <li>Schicke ein JSON-Objekt zurück: <code>{ message: "Willkommen in der VIP-Lounge!" }</code></li>
</ul>
</div>
</div>

**Route:** Verknüpfe beide Funktionen auf der Route `GET /api/vip`.

---

## ✅ Musterlösung

So sieht die saubere Trennung im Code aus:

```javascript
const express = require("express");
const app = express();

// 1. Middleware: Kontrolliert den Zugang
const checkAuth = (req, res, next) => {
  const role = req.headers["x-role"];

  if (role === "vip") {
    next(); // Erfolgreich: Delegiere an den nächsten Handler
  } else {
    // Abbruch: Der Request endet hier, der Handler wird nie erreicht
    res.status(403).json({ error: "Zugriff verweigert. Nur für VIPs!" });
  }
};

// 2. Request Handler: Kümmert sich nur um die Business Logik
const getVipData = (req, res) => {
  res.status(200).json({ message: "Willkommen in der VIP-Lounge!" });
};

// Verknüpfung der Pipeline
app.get("/api/vip", checkAuth, getVipData);

app.listen(3000, () => console.log("Server läuft auf Port 3000"));
```

Note to myself, eigentlich denke ich müsste man die zwei Sachen vertauschen. OOP oder Sfunktioniert orient dier sdann mit wimlane müsste man

---

# API Architektur & **Modellierung**

Struktur, Verhalten und Implementierungs-Stile

---

## Das "Duo" der Backend-Architektur

Um eine professionelle REST-API zu bauen, trennen wir zwischen der **technischen Struktur** und dem **logischen Ablauf**:

<div class="grid-2">
<div class="tile">
<h3>1. Die Struktur</h3>
<p>Das <strong>Middleware & Request Handler Pattern</strong> bildet das Skelett der API. Es definiert, wie ein Request die technische Pipeline (Auth, Validierung, Logging) durchläuft, bevor er die Logik erreicht.</p>
</div>

<div class="tile">
<h3>2. Das Verhalten</h3>
<p><strong>Sequenzdiagramme</strong> modellieren die eigentliche Business Logic. Sie zeigen visuell, wie Daten zwischen Middleware, Handlern, Services und Datenbanken fließen.</p>
</div>
</div>

---

## Modellierung mit Sequenzdiagrammen

Warum sind Sequenzdiagramme das perfekte Werkzeug für das Middleware-Pattern? Weil HTTP-Anfragen von Natur aus **sequentiell** ablaufen.

> Das Diagramm zeigt nicht "Wie wird sortiert?", sondern "**Wer spricht wann mit wem?**"

- **Visualisierung der Kette:** Man sieht sofort, wo eine Middleware den Request abbricht (z. B. 401 Unauthorized).
- **Zuständigkeiten:** Es wird klar, welche Komponente für die Datenvalidierung zuständig ist und welche für den Datenbank-Query.
- **Schnittstellen:** Die Pfeile im Diagramm definieren die Methoden-Aufrufe oder Funktions-Parameter.

---

## Architekturstile: FP vs. OOP

Beide Patterns (Middleware & Sequenz-Modellierung) funktionieren unabhängig vom gewählten Programmierstil. Der Unterschied liegt nur in der **Art der Bausteine**.

<div class="grid-2">
<div class="tile" style="border-top: 4px solid #10b981;">
<h3>Funktionsorientiert (FP)</h3>
<p>Typisch für <strong>Express.js</strong>.</p>
<ul>
  <li>Bausteine im Diagramm sind <strong>reine Funktionen</strong>.</li>
  <li>Der Request-Status wird als Datenobjekt durch eine Kette (Pipe) gereicht.</li>
  <li><code>req -> func1 -> func2 -> res</code></li>
</ul>
</div>

---

<div class="tile" style="border-top: 4px solid #10b981;">
<h3>Objektorientiert (OOP)</h3>
<p>Standard in <strong>NestJS / Spring Boot</strong>.</p>
<ul>
  <li>Bausteine im Diagramm sind <strong>Instanzen von Klassen</strong> (Objekte).</li>
  <li>Der Request triggert Methoden auf Objekten (Controller, Services, Guards).</li>
  <li><code>ObjectA.method() -> ObjectB.call()</code></li>
</ul>
</div>
</div>

---

## Zusammenfassung

1. Das **Middleware-Pattern** ist das infrastrukturelle Gerüst (Die Pipeline).
2. Das **Sequenzdiagramm** ist der Bauplan für den Datenfluss (Die Logik).
3. **FP oder OOP** sind lediglich die Werkzeuge, mit denen wir diese Architektur im Code umsetzen.

**Egal welcher Stil:** Das Ziel ist die Entkopplung von technischer Infrastruktur und fachlicher Business Logic.

---

# Databases **Fundamentals**

Die Grundlage für persistente Daten und stabile Geschäftsdomänen

---

## SQL vs. NoSQL: Die zwei Welten

Datenbanken werden grundlegend in **relationale (SQL)** und **nicht-tabellarische (NoSQL)** Systeme unterteilt. Im echten Entwickleralltag überwiegt meist der relationale Ansatz, da sich Business-Logiken hervorragend über feste Beziehungen abbilden lassen.

<div class="grid-2">
<div class="tile" style="border-left: 4px solid #3b82f6;">
<h3 style="color: #60a5fa;">SQL (Relational)</h3>
<ul>
  <li>Basiert auf strikten <strong>Beziehungen</strong></li>
  <li>Festes, vordefiniertes <strong>Schema</strong></li>
  <li>Geringere Roh-Performance</li>
  <li>Schwieriger horizontal zu skalieren</li>
  <li><em>Tech-Stack:</em> PostgreSQL, MySQL</li>
</ul>
</div>

---

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

| Kriterium     | SQL-Datenbanken                   | NoSQL-Datenbanken                     |
| :------------ | :-------------------------------- | :------------------------------------ |
| **Fokus**     | Komplexe Beziehungen wichtig      | Maximale Performance & Durchsatz      |
| **Schema**    | Benötigt ein verlässliches Schema | Flexibel für unstrukturierte Daten    |
| **Beispiele** | E-Commerce-Systeme, Banking       | Content-Management (CMS), Log-Storage |


## Query (Afrage Basics)

---

## 💻 Aufgabe:

Um in technischen Screenings und Live-Coding-Interviews zu bestehen, müssen beide Konzepte praktisch beherrscht werden:

- **SQL Practice:**
  - Du musst SQL-Queries nicht zwingend auswendig im Schlaf schreiben können, aber das Verständnis für relationale Operationen ist Pflicht.
  - **Fokus im Interview:** Beherrsche `INNER JOIN` und `LEFT JOIN` im Effeff auf einfachem bis mittlerem Schwierigkeitsgrad.
- **NoSQL (MongoDB) Practice:**
  - Mache dich mit dokumentenorientierten Abfragen vertraut.
  - Nutze Tools wie `humongous.io`, um grundlegende CRUD-Queries gegen eine Live-NoSQL-Datenbank auszuführen und dich auf typische Screening-Fragen vorzubereiten.

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
