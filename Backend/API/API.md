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

# Backend Basics

---

# Inhaltsverzeichnis

1. MVC
2. REST API
3. RESTful Principles
4. Idempotenz
5. API Dokumentation
6. API Versionierung
7. Business Logic
8. Databases Fundamentals
9. Query Basics

---

# Einleitung

---

# REST API

---

## Einleitung

REST (Representational State Transfer)

- Representational: Daten

---

# RESTful **Principles**

Die 6 Leitprinzipien für skalierbare Web-Services nach Roy Fielding

---

## Definition & Ursprung

- **Was ist REST?**
  Representational State Transfer ist kein Protokoll, sondern ein **Architekturstil** für verteilte Hypermedia-Systeme. Er nutzt bestehende Web-Standards (HTTP) optimal aus.

- **Die Herkunft:**
  Das Konzept wurde im Jahr 2000 von **Roy Fielding** in seiner Doktorarbeit vorgestellt. Es beschreibt die Kernmechanismen, die das World Wide Web skalierbar machen.

---

## Die 6 Prinzipien im Überblick

1. **Uniform Interface** (Einheitliche Schnittstelle)
2. **Client-Server** (Klare Trennung der Zuständigkeiten)
3. **Stateless** (Zustandslosigkeit)
4. **Cacheable** (Zwischenspeicherbarkeit)
5. **Layered System** (Mehrschichtige Architektur)
6. **Code on Demand** (Optional: Dynamische Code-Übertragung)

---

## 1. Uniform Interface

Das Uniform Interface ist das zentrale REST-Prinzip: Ressourcen werden über eindeutige URIs adressiert und mit standardisierten HTTP-Methoden bearbeitet.

---

# REST Guiding Principles

Wir beginnen mit einem Überblick über die grundlegenden Prinzipien, die RESTful-Architekturen definieren. Diese Prinzipien, die von Roy Fielding eingeführt wurden, sind der Schlüssel zu skalierbaren und robusten Web-APIs.

---

### 1. Uniform Interface

- **Vorteil:** Das System wird vorhersehbar, einheitlich und extrem einfach erweiterbar.
- **Wie wird es erreicht?** Durch strikte Einhaltung standardisierter Regeln
- **RESTful Design:** Jede URI benennt **Substantive** (Ressourcen), auf die über standardisierte **HTTP-Verben** (wie `GET`, `POST`, `PUT`, `DELETE`) zugegriffen wird.

---

#### Beispiele für das URI-Design:

- `POST /createUser`
- `GET /getUserById?id=45`
- `POST /updateUser/45`
- `GET /deleteUser/45`

_Warum falsch?_ Das HTTP-Protokoll bringt die Aktions-Verben bereits mit. Zusätzliche Verben im Pfad machen die API unübersichtlich und redundant.

- `POST /users` (Nutzer erstellen)
- `GET /users/45` (Nutzer 45 abrufen)
- `PUT /users/45` (Nutzer 45 aktualisieren)
- `DELETE /users/45` (Nutzer 45 löschen)

_Warum richtig?_ Die URI benennt nur das "Was" (die Ressource). Die HTTP-Methode definiert das "Wie" (die Aktion).

---

#### URI-Struktur erklärt

Dies zeigt, wie die verschiedenen Teile einer URI zusammenarbeiten, um Ressourcen zu identifizieren und Aktionen zu steuern.

- **Ressourcenidentifizierung:** Der `path` (Pfad) identifiziert die Ressource. Zum Beispiel `/users` für die Sammlung oder `/users/45` für eine bestimmte Instanz. Hier werden _ausschließlich_ Substantive verwendet.
- **Aktionssteuerung:** Die HTTP-Methode (z. B. `GET` oder `POST`, nicht Teil der URI) bestimmt die eigentliche Aktion.
- **Abfrageparameter:** Der `query` (Abfrage) wird verwendet, um Antworten zu filtern, zu sortieren oder zu paginieren (z. B. `?search=bogdan`). Dies hält die Basis-URIs sauber und übersichtlich.

---

#### Die 4 Uniform-Constraints

- **Ressourcen-Identifizierung:** Jede Ressource ist über eine eindeutige URI ansprechbar (z.B. `GET /api/users/42`).
- **Manipulation durch Repräsentation:** Der Client besitzt nicht die echten DB-Daten, sondern modifiziert Ressourcen via Repräsentationen (JSON, XML).
- **Selbstbeschreibende Nachrichten:** Jeder Request/Response enthält alle Metadaten (Headers), die erklären, wie die Nachricht zu interpretieren ist (z.B. `Content-Type`).
- **HATEOAS:** _Hypermedia as the Engine of Application State_. Der Server liefert Links zu weiteren Aktionen mit.

---

### 2. Client-Server-Trennung

- **Klare Zuständigkeiten:** Das Frontend (Client) kümmert sich ausschließlich um die Benutzeroberfläche und die User Experience. Das Backend (Server) übernimmt Datenhaltung, Sicherheit und Geschäftslogik.

- **Die Stärke:**
  Beide Systeme können unabhängig voneinander weiterentwickelt, skaliert oder technologisch ausgetauscht werden.

---

### 3. Zustandslosigkeit (Stateless)

- **Die Kernregel:** Der Server speichert **keinen** Sitzungskontext (Session-State) über den Client zwischen zwei Anfragen.

- **Jeder Request ist autark:**
  Jede einzelne HTTP-Anfrage muss alle Informationen enthalten, die für das Verstehen und Verarbeiten notwendig sind (z.B. Authentifizierungs-Token im Header).

- **Ergebnis:** Starke Skalierung möglich:
- Ein Session-State (z. B. ein Login-Zustand) würde massiven Overhead erzeugen: Dies müsste im RAM oder in der Datenbank gespeichert werden. Wenn es gar keinen State (Zustand) gibt, kann einfach skaliert werden (= mehr Traffic auf die Webseite).
  - Massives **Load Balancing** wird möglich. Jeder Server im Cluster kann jeden Request sofort verarbeiten.

---

### 4. Cacheable

**Effizienz durch Caching:**
Server-Antworten müssen implizit oder explizit als cachebar deklariert werden. Das spart Bandbreite, schont Server-Ressourcen und senkt die Latenz drastisch.

### 5. Layered System

**Mehrschichtiges System (Layered System):**
Der Client kann nicht wissen, ob er direkt mit dem Endserver oder einem Proxy (= Stellvertreter, z. B. Load Balancer, die Traffic auf verschiedene Server verteilen) kommuniziert. Schichten verbessern die Sicherheit und die Skalierbarkeit.

---

### 6. Code on Demand (Optional)

- **Das Konzept:**
  Der Server kann die Funktionalität des Clients temporär erweitern, indem er ausführbare Logik direkt an ihn überträgt.

- **Praxisbeispiele:**
  - Senden von **JavaScript-Skripten**, die dynamisch im Browser des Nutzers ausgeführt werden.
  - Historisch: Java-Applets oder Flash.

- _Hinweis:_ Dies ist das einzige **optionale** Prinzip. Viele moderne APIs verzichten darauf.

---

### Zusammenfassung der Vorteile

| REST Prinzip          | Primärer Vorteil                                 |
| :-------------------- | :----------------------------------------------- |
| **Uniform Interface** | Einfachheit, Vorhersehbarkeit & Sichtbarkeit     |
| **Stateless**         | Unbegrenzte horizontale Skalierbarkeit           |
| **Client-Server**     | Portabilität der UI & Unabhängigkeit der Systeme |
| **Cacheable**         | Signifikante Steigerung der Netzwerk-Performance |

---

## Aufgabe: RESTful URL-Design

Hier sind mehrere API-Endpunkte aus einem (fiktiven) Bibliotheksverwaltungssystem. Analysiere jede URL und erkläre, **was gegen RESTful-Design-Prinzipien verstößt** und wie man es richtig formulieren würde.

**Endpunkte**

1. `GET /getAllBooks`
2. `POST /books/createNewBook`
3. `GET /books/5/delete`
4. `GET /Books/5`
5. `PUT /books/5/author/3`
6. `GET /books?id=5`

---

7. `DELETE /books/5/2024-01-01`
8. `POST /books/5`
9. `GET /authors/3/books/getBooksByAuthor`
10. `GET /books/active/true`

### Aufgabenstellung

Für jede URL:

- Benenne den konkreten Verstoß (z.B. Verb in URL, falsche HTTP-Methode, inkonsistente Großschreibung, falsche Hierarchie, etc.)
- Schreibe die korrigierte Version der URL inkl. der korrekten HTTP-Methode

### Bonusfrage

Bei Nummer 9 gibt es zwei mögliche "richtige" Lösungen, je nachdem, welche Ressource im Vordergrund steht. Nenne beide und erkläre den Unterschied.

---

## Idempotenz

> "Eine Operation ist idempotent, wenn sie mehrfach ausgeführt werden kann, ohne dass das Ergebnis über die erste Ausführung hinaus verändert wird."

<div style="display: flex; gap: 40px; margin-top: 30px;">
<div style="flex: 1;">
<h3>Mathematischer Kontext</h3>
<p>Eine Funktion <code>f(x)</code> ist idempotent, wenn gilt:</p>
<p style="text-align: center; font-size: 1.5rem; color: #10b981;"><strong>f(f(x)) = f(x)</strong></p>
<p>Beispiele: Die Multiplikation mit 0 oder die Betragsfunktion <code>abs(x)</code>.</p>
</div>

<div style="flex: 1;">
<h3>HTTP & API Kontext</h3>
<p>Ein Request ist idempotent, wenn der <strong>Zustand auf dem Server</strong> bei identischen Folge-Requests unverändert bleibt.</p>
<p>Wichtig: Der HTTP-Response-Statuscode darf sich ändern, der Zustand der Ressource hingegen nicht.</p>
</div>
</div>

---

### Alltags-Analogie

<div style="display: flex; gap: 40px;">
<div style="flex: 1; background: #0f172a; padding: 25px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
<h3>🛗 Der Fahrstuhl-Knopf</h3>
<p><strong>Idempotent:</strong> Egal wie oft Sie den Knopf für das 5. Stockwerk drücken: Der Fahrstuhl fährt in das 5. Stockwerk. Das Ergebnis bleibt beim 2. oder 100. Klick absolut identisch.</p>
</div>

<div style="flex: 1; background: #0f172a; padding: 25px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
<h3>🍫 Der Snack-Automat</h3>
<p><strong>Nicht Idempotent:</strong> Jedes Mal, wenn Sie den Knopf drücken (und bezahlen), fällt ein neuer Snack heraus. Ihr Kontostand sinkt weiter und der Vorrat im Automaten verringert sich.</p>
</div>
</div>

---

### Warum ist das wichtig?

Gefahrlose Retries im Frontend ermöglichen.
In instabilen Netzwerken sind **Retries** (Wiederholungsanfragen) unvermeidlich.

- **Das Problem:** Ein Client sendet einen Request, der Server verarbeitet ihn erfolgreich, aber die Server-Antwort geht auf dem Rückweg im Netzwerk verloren.
- **Die Lösung:** Ist die HTTP-Methode _idempotent_, darf der Client (oder die Axios/Fetch-Logik im Frontend) den Request bei einem Timeout einfach gefahrlos noch einmal senden.
- **Kritischer Anwendungsfall:** "Bestellung abschicken" (meist `POST`) vs. "Zahlungsstatus auf bezahlt setzen" (meist `PUT`). Sie wollen niemals versehentlich Doppelabbuchungen erzeugen.

---

### Methoden-Vergleich im Detail

<div style="display: flex; gap: 40px;">
<div style="flex: 1;">
<h3><code>PUT</code> (Idempotent)</h3>
<p style="color: #34d399;"><code>PUT /users/45</code></p>
<p>Wenn Sie diesen Request 10-mal hintereinander abschicken, wird der Datensatz mit der ID 45 jedes Mal mit exakt denselben Werten überschrieben. Der Endzustand der Datenbank nach dem ersten und dem zehnten Request ist absolut identisch.</p>
</div>

<div style="flex: 1;">
<h3><code>POST</code> (Nicht Idempotent)</h3>
<p style="color: #f87171;"><code>POST /users</code></p>
<p>Wenn Sie diesen Request 10-mal abschicken, erzeugen Sie im schlimmsten Fall 10 identische Nutzer mit 10 verschiedenen IDs in Ihrer Datenbank. Jede Wiederholung verändert den Zustand des Systems.</p>
</div>
</div>

---

# API **Dokumentation**

Der Vertrag zwischen Backend, Frontend und externen Entwicklern

---

## Warum ist API-Dokumentation wichtig?

> "Code beschreibt, wie das System funktioniert. Dokumentation beschreibt, wie man es benutzt, ohne den Code lesen zu müssen."

- **Das Frontend-Problem:** Ohne Dokumentation raten Frontend-Entwickler, welche Datenstrukturen (`Types`) ein Endpoint erwartet oder zurückgibt.
- **Effizienz:** Spart unzählige Slack-Nachrichten und Meetings der Marke _"Wie hieß das Feld für die ID nochmal?"_.
- **Onboarding:** Neue Teammitglieder können sofort autark mit der API arbeiten.

---

## Der moderne Standard: OpenAPI & Swagger

Heute schreibt niemand mehr API-Dokumentation händisch in Word-Dateien. Man nutzt die **OpenAPI-Spezifikation (OAS)**.

- **Was ist OpenAPI?** Ein standardisiertes Format (in JSON oder YAML), das REST-APIs maschinenlesbar beschreibt.
- **Was ist Swagger?**
  Das bekannteste Tooling-Ökosystem, das aus dieser OpenAPI-Datei automatisch eine **interaktive UI** generiert.
- **Der Vorteil:** Entwickler können direkt im Browser Test-Requests an die API senden ("Try it out").

---

## Core-Elemente einer guten Dokumentation

Jeder dokumentierte Endpoint sollte mindestens folgende 4 Informationen liefern:

1. **Basis-Metadaten:** Die HTTP-Methode und der exakte Pfad (z.B. `POST /api/v1/users`).
2. **Request-Parameter:** Welche Daten müssen in den `Query-Params`, den `Headers` oder im `Body` (Payload) mitgeschickt werden?
3. **Response-Beispiele:** Wie sieht das JSON-Objekt im Erfolgsfall (`200 OK` / `210 Created`) exakt aus?
4. **Fehler-Szenarien:** Welche Statuscodes (`400`, `401`, `404`, `500`) gibt es und wie sieht die Fehlermeldung aus?

---

## Dokumentation-Ansätze im Vergleich

<div style="display: flex; gap: 40px;">
<div style="flex: 1;">
<h3>Code-First Approach</h3>
<p>Die Dokumentation wird **direkt im Code** generiert (z.B. über JSDoc, Decorator in NestJS oder Bibliotheken in Next.js).</p>
<p style="color: #34d399;">✔ Bleibt aktuell, da sie nah am Code lebt.</p>
<p style="color: #f87171;">✘ Code kann durch massig Doku-Kommentare unübersichtlich werden.</p>
</div>

<div style="flex: 1;">
<h3>Design-First Approach</h3>
<p>Die API wird **zuerst** in einem Editor (z.B. Stoplight, Swagger Editor) spezifiziert, bevor Code geschrieben wird.</p>
<p style="color: #34d399;">✔ Frontend & Backend können ab Tag 1 parallel arbeiten (Mocking).</p>
<p style="color: #f87171;">✘ Gefahr, dass Code und Doku später auseinanderlaufen.</p>
</div>
</div>

---

## Best Practices für exzellente Docs

- **Nutzen Sie semantische HTTP-Statuscodes:** Dokumentieren Sie nicht nur `200` und `500`. Zeigen Sie dem Frontend exakt, wann ein `422` (Unprocessable Entity) oder ein `409` (Conflict) verwendet wird.
- **Typsicherheit generieren:** Nutzen Sie Tools wie `openapi-typescript`. Damit lässt sich die OpenAPI-Doku einlesen, um automatisch **TypeScript-Typen fürs Frontend** zu generieren.
- **Authentifizierung klarmachen:** Es muss sofort ersichtlich sein, welche Endpoints öffentlich sind und welche ein `Authorization: Bearer <Token>` benötigen.

---

### APIs sind Produkte. **Docs die Verpackung.**

Gute Dokumentation entscheidet über den Erfolg einer Architektur.

<div style="margin-top: 60px; font-size: 1.1rem; color: #64748b;">
OpenAPI | Swagger | Readme.io | Redoc
</div>

---

# API **Versionierung**

Evolution ohne Frustration für Frontend und Clients

---

## Warum brauchen wir Versionierung?

> "Eine API ist ein verbindlicher Vertrag. Bricht das Backend den Vertrag, bricht unweigerlich das Frontend."

Software entwickelt sich weiter, und damit auch die Datenstruktur. Wir versionieren APIs, um **Abwärtskompatibilität (Backward Compatibility)** zu garantieren.

- Wenn eine React-App Version 1 der API nutzt, darf sie nicht abstürzen, nur weil das Backend-Team an Version 2 arbeitet.
- Beide Versionen müssen für eine Übergangszeit **parallel** betrieben werden.

---

## Wann ist eine Versionierung nötig?

Nicht jede Änderung erfordert eine neue API-Version (z.B. `v2`). Wir unterscheiden strikt:

<div style="display: flex; gap: 40px; margin-top: 30px;">
<div style="flex: 1; background: #0f172a; padding: 25px; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.3);">
<h3 style="color: #34d399;">✔ Non-Breaking Change</h3>
<p><em>Keine neue Version nötig.</em></p>
<ul style="font-size: 1.1rem;">
  <li>Hinzufügen eines <strong>neuen</strong> Feldes im JSON.</li>
  <li>Hinzufügen eines neuen Endpoints.</li>
  <li>Optionale Query-Parameter hinzufügen.</li>
</ul>
</div>

<div style="flex: 1; background: #0f172a; padding: 25px; border-radius: 12px; border: 1px solid rgba(248, 113, 113, 0.3);">
<h3 style="color: #f87171;">✘ Breaking Change</h3>
<p><em>Neue Version (`v2`) zwingend erforderlich!</em></p>
<ul style="font-size: 1.1rem;">
  <li><strong>Löschen</strong> oder <strong>Umbenennen</strong> von Feldern.</li>
  <li>Ändern des Datentyps (z.B. ID von `Int` auf `String`).</li>
  <li>Neue, verpflichtende Parameter/Payloads.</li>
</ul>
</div>
</div>

---

## Strategie 1: URI-Versionierung (Der Standard)

Die Versionsnummer wird direkt als Präfix in den URL-Pfad geschrieben.

- **Beispiel:** `GET https://api.example.com/v1/users`
- **Vorteile:** \* Extrem einfach zu implementieren und im Browser zu testen.
  - Für Frontend-Entwickler sofort ersichtlich, welche API genutzt wird.
- **Nachteile:**
  - Bricht streng genommen die REST-Prinzipien (Eine Version ist eigentlich keine "Ressource").

---

## Strategie 2 & 3: Query & Header

<div style="display: flex; gap: 40px;">
<div style="flex: 1;">
<h3>Query Parameter</h3>
<p><code>GET /users?version=1</code></p>
<p>Die Version wird als Filter-Parameter an die URI gehängt.</p>
<p style="color: #34d399;">✔ URL-Pfad bleibt sauber.</p>
<p style="color: #f87171;">✘ Verwirrend, da Query-Parameter eigentlich für Dinge wie Suchen/Sortieren gedacht sind.</p>
</div>

<div style="flex: 1;">
<h3>Header (Content Negotiation)</h3>
<p><code>Accept: application/vnd.api.v1+json</code></p>
<p>Der Client fordert über den HTTP-Header eine spezifische Version an.</p>
<p style="color: #34d399;">✔ Der absolut sauberste "pure" REST-Weg.</p>
<p style="color: #f87171;">✘ Schwer zu debuggen, da man die API nicht mehr einfach in die Browser-URL tippen kann.</p>
</div>
</div>

---

## Vergleich der Strategien

| Methode                   | REST Konformität | Entwicklerfreundlichkeit | Caching im Browser |
| :------------------------ | :--------------: | :----------------------: | :----------------: |
| **URI Path** (`/v1/`)     |     Niedrig      |        Sehr hoch         |    Sehr einfach    |
| **Query** (`?v=1`)        |      Mittel      |           Hoch           |        Gut         |
| **Header** (`Accept: v1`) |    Sehr hoch     | Niedrig (Tooling nötig)  |     Komplexer      |

_In der Praxis (z.B. bei Stripe, GitHub oder Twitter) hat sich die **URI-Versionierung** aufgrund der pragmatischen Handhabung klar durchgesetzt._

---

## Best Practices für Versionierung

1. **Halten Sie es simpel:** Nutzen Sie nur Major-Versionen (z. B. `v1`, `v2`). Ein Schema wie `v1.4.2` in der API ist Overkill und führt zu Chaos im Backend-Routing.
2. **Standard-Version definieren:** Wenn ein Client keinen Header oder Pfad angibt, leiten Sie ihn entweder zur ältesten stabilen Version weiter oder geben Sie einen sauberen Error (`400 Bad Request`) zurück.
3. **Graceful Sunset:** Wenn Sie `v1` abschalten, kündigen Sie dies rechtzeitig an (Deprecation Notices). Nutzen Sie in HTTP-Responses den standardisierten `Sunset`-Header mit einem Datum.

---

# Stabile Verträge. **Gute APIs.**

Versionierung ist das Sicherheitsnetz Ihrer Architektur.

<div style="margin-top: 60px; font-size: 1.1rem; color: #64748b;">
URI Path | Query Params | Custom Headers
</div>

---