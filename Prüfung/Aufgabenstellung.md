# Prüfungsaufgabenstellung

## Rahmen

### Allgemeine Fokuspunkte

- Viel (funktionierenden) Code zu erzeugen ist heute keine wirkliche Leistung durch AI mehr!
- Ich lege Wert auf saubere, nach den hier in der Vorlesung besprochenen Best Practices implementierten Lösungen
- Halb-gare Funktionen werde ich nicht beachten
- Lieber wenige Funktionen, die funktionieren, gut durchdacht und vor allem bis zum Ende gedacht sind als viele halb gare

### AI-Regeln für die Prüfung:

- Readonly AI:
  - AI darf zum recherchieren Informationen aus dem Internet verwendet werden
  - AI darf zur Problembehandlung und Fehlersuche verwendet werden
  - AI darf NICHT zum Generieren von Code verwendet werden

> Warnung: Ich verwende Tools zum Erkennen von KI-generiertem Code, um sicherzustellen, dass die Regeln eingehalten werden. Wenn ich feststelle, dass KI-generierter Code verwendet wurde, kann dies zur Aberkennung der Prüfungsleistung führen. Bitte halten Sie sich an die Regeln und nutzen KI nur für die erlaubten Zwecke.

## Technologien, welche verwendet werden müssen:

- React als SPA-Framework
- TypeScript als Programmiersprache
- shadcn.ui als UI-Komponentenbibliothek
- Tailwind CSS als CSS-Framework
- drizzle als ORM

## Anforderungen an die Anwendung:

https://github.com/public-apis/public-apis

### Bewertung

#### Codequalität (5 BE)

- Implementierung eines Linters
- Implementierung eines Formatters
- Eingeschaltene Regeln
- Einhaltung der Regeln sowie Formatierung

#### Web Performance (5 BE)

- gute Performance der Anwendung
- Kein genauer Lighthouse Score oder ähnliches, da dieser zu stark von Gerät zu Gerät schwankt, aber ich werde die Performance anhand der in der Vorlesung besprochenen Konzepte bewerten

#### Frontend (10 BE)

- Überlegen Sie sich, wie Sie die Daten der API im Frontend sinnvoll visualisieren
- Implementieren Sie dies nach der in der Vorlesung besprochenen Bare-Bone-Methode
  - globale Statemanagement
  - Lift Up State
  - lokale State
  - Dokumentieren Sie diesen Prozess separat in einem Dokument, damit ich nachvollziehen kann, wie Sie vorgegangen sind

#### Funktionalität Frontend (10 BE)

- Implementieren Sie min. 2 Funktionen im Frontend wie Sortieren und Filtern

#### Funktionalität Backend (10 BE)

- Implementierung einer Funktion, welche Backend-Anbindung inkl. Datenbankeintrag benötigt
- Zum Beispiel die Abspeicherung von Favoriten pro User

#### Auth (10 BE)

Implementierung eines Auth-Prozesses
