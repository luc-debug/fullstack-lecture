---
marp: true
theme: default
paginate: true
style: |
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
---

# Prüfungsaufgabenstellung

---

## Inhaltsverzeichnis

- Rahmen
- Technologien, welche verwendet werden müssen
- Anforderungen an die Anwendung
- Bewertung
  - Codequalität
  - Web Performance
  - Frontend
  - Funktionalität Frontend
  - Funktionalität Backend
  - Auth

---

## Rahmen

### Allgemeine Fokuspunkte

- Viel funktionierenden Code zu erzeugen ist heute durch AI keine wirkliche Leistung mehr!
- Ich lege Wert auf saubere, nach den hier in der Vorlesung besprochenen Best Practices implementierte Lösungen.
- Halbgare Funktionen werde ich nicht beachten.
- Lieber wenige Funktionen, die funktionieren, gut durchdacht und vor allem bis zum Ende gedacht sind, als viele halbgare.

### AI-Regeln für die Prüfung

- Read-only AI:
  - AI darf zum Recherchieren von Informationen aus dem Internet verwendet werden.
  - AI darf zur Problembehandlung und Fehlersuche verwendet werden.
  - AI darf NICHT zum Generieren von Code verwendet werden.

> Warnung: Ich verwende Tools zum Erkennen von KI-generiertem Code, um sicherzustellen, dass die Regeln eingehalten werden. Wenn ich feststelle, dass KI-generierter Code verwendet wurde, kann dies zur Aberkennung der Prüfungsleistung führen. Bitte halten Sie sich an die Regeln und nutzen Sie KI nur für die erlaubten Zwecke.

---

## Technologien, welche verwendet werden müssen

- React als SPA-Framework
- TypeScript als Programmiersprache
- shadcn.ui als UI-Komponentenbibliothek
- Tailwind CSS als CSS-Framework
- drizzle als ORM

---

## Anforderungen an die Anwendung

https://github.com/public-apis/public-apis

---

### Bewertung

#### Codequalität (5 BE)

- Implementierung eines Linters
- Implementierung eines Formatters
- Eingeschaltete Regeln
- Einhaltung der Regeln sowie Formatierung

---

#### Web Performance (5 BE)

- Gute Performance der Anwendung
- Kein genauer Lighthouse-Score oder Ähnliches, da dieser zu stark von Gerät zu Gerät schwankt, aber ich werde die Performance anhand der in der Vorlesung besprochenen Konzepte bewerten.

---

#### Frontend (10 BE)

- Überlegen Sie sich, wie Sie die Daten der API im Frontend sinnvoll visualisieren.
- Implementieren Sie dies nach der in der Vorlesung besprochenen Bare-Bones-Methode.
  - globales Statemanagement
  - Lift Up State
  - lokaler State
- Dokumentieren Sie diesen Prozess separat in einem Dokument, damit ich nachvollziehen kann, wie Sie vorgegangen sind.

---

#### Funktionalität Frontend (10 BE)

- Implementieren Sie mindestens 2 Funktionen im Frontend, wie Sortieren und Filtern.

---

#### Funktionalität Backend (10 BE)

- Implementierung einer Funktion, welche Backend-Anbindung inkl. Datenbankeintrag benötigt.
- Zum Beispiel die Abspeicherung von Favoriten pro User.

---

#### Auth (10 BE)

Implementierung eines Auth-Prozesses
