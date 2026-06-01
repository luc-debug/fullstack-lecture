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

# Framework

## Library vs Framework

> 📖 Library: dt. Bibliothek, eine Auswahl an Lösungen; in der Bibliothek gibt es Bücher mit verschiedenen Lösungen, aber niemand gibt uns vor, welche Lösung wir zu verwenden haben.

> 📖 Framework: dt. Rahmenwerk, ein Werk, das uns gewisse Regeln vorgibt. Hier wird eine gewisse Lösung vorgegeben, um ein Problem zu lösen.

---

### Beispiele

|               | Library                           | Framework                                                 |
| ------------- | --------------------------------- | --------------------------------------------------------- |
| **Kontrolle** | Du rufst die Library auf          | Das Framework ruft deinen Code auf (Inversion of Control) |
| **Struktur**  | Keine Vorgabe zur Projektstruktur | Gibt Projektstruktur und Konventionen vor                 |
| **Beispiel**  | React, Lodash, D3.js              | Angular, Next.js, Nuxt                                    |

> 💡 Merke: Bei einer Library hast **du** die Kontrolle. Bei einem Framework hat das **Framework** die Kontrolle (Inversion of Control).

---


## Einleitung

- Frameworks können natürlich auch alles was ein Built tool kann. Recap:
    - Static Assets Optimization 
      - CSS
      - Images
      - Fonts
      - Videos
    - JavaScript Optimizing
      - Bundling: Alle Module und Assets in ein oder mehrere Bundles packen
      - Minification: Code verkleinern, um die Ladezeit zu verbessern
      - Code Splitting: Code in kleinere Teile aufteilen, die bei Bedarf geladen werden können
      - Tree Shaking: Unbenutzten Code entfernen, um die Bundle-Größe zu reduzieren
      - Dev und Prod Mode: Unterschiedliche Konfigurationen sowie unterschiedliche Builds für Entwicklung und Produktion
    - DX
      - Hot Module Replacement: Änderungen am Code können ohne vollständigen Seitenreload angewendet werden
      - Source Maps: Erstellen von Source Maps, um das Debuggen zu erleichtern
      - Transpiling: z.B. TypeScript zu JavaScript, JSX zu JavaScript
      - Linting: Code-Qualität und Konsistenz sicherstellen
      - Formatting: Automatisches Formatieren von Code, z.B. mit Prettier
- Frameworks bieten zusätzlich:
    - Routing: Verwaltung von URL-Routen und Navigation
    - State Management: Verwaltung des Anwendungszustands
    - Server-Side Rendering (SSR): Möglichkeit, HTML auf dem Server zu generieren
    - API-Integration: Einfache Integration mit Backend-APIs
    - Testing: Eingebaute Tools für Unit-Tests, Integrationstests, etc.
    - Middleware: Möglichkeit, Anfragen und Antworten zu manipulieren, z.B. für Authentifizierung oder Logging

https://nextjs.org/docs/14