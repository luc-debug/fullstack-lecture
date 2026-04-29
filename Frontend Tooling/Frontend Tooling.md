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

# Frontend Tooling

_Vorabbemerkung: Die folgenden Konzepte sind allgemein für JavaScript. Sie lassen sich somit auf alle CMSs (zum Beispiel Wordpress, TYPO3), SPA (React) oder MPAs (zum Beispiel ASP .NET CORE) anwenden. Denn am Ende ist es egal womit DU deine Webseite baust: JavaScript wird immer im Browser ausgeführt_

---

## Einleitung

- In der Frontend Vorlesung haben wir ein Build-Tool kennengelernt: Vite
- Doch was macht ein Build Tool genau?
  - Wir haben beide Extreme kennengelernt: Von der manuellen Transpilierung von TypeScript bis hin zu einem Command (npm run dev), das TypeScript transpiliert, automatisch unsere Änderungen in HTML und CSS anwendet etc. etc.
  - Jetzt wollen wir verstehen, wie man von der manuellen Arbeit zur Automatisierung kommt: Welche Tools hat Vite vor uns versteckt und welche hat es für uns hinter dem einem Command zusammengebündelt? Vite (= ein Build Tool) hat für uns eine Toolchain (= einzelne Tools) vorgefertigt, die wir jetzt auseinander nehmen, um alle Konzepte zu verstehen.

---

- Welche anderen Tools gibt es noch?

![alt text](image.png)

---

## Build Tooling

### Allgemeine Einführung

🚫 Problem: Im Gegensatz zu Sprachen wie C#, die von Anfang an als Enterprise-Programmiersprachen konzipiert wurden und daher bereits Lösungen für statische Typisierung, Modularität und Abwärtskompatibilität integriert hatten, wurde JavaScript ursprünglich in sehr kurzer Zeit als einfache Skriptsprache entwickelt.

➡️ Das führt dazu, dass JavaScript kontinuierlich weiterentwickelt wird und regelmäßig neue Features erhält, die jedoch nicht sofort von allen Browsern unterstützt werden. TypeScript erweitert JavaScript zwar um statische Typisierung und zusätzliche moderne Funktionen, wird jedoch ebenfalls nicht direkt von allen Browsern nativ ausgeführt und muss daher in kompatibles JavaScript transpiliert werden.

---

### Transpiler

🚫 Problem: keine Abwärtskompatibilität
✅ Lösung: Transpiler sind Tools, die modernen JavaScript-Code (**Syntax**) in eine ältere Version umwandeln, damit er in älteren Browsern funktioniert.

- Tools: Babel, SWC, tsc (TypeScript Compiler)
- Beispiel: `const x = [1, 2, 3]` → `var x = [1, 2, 3]` oder Arrow Functions → `function`-Ausdrücke

🚫 Problem: keine Typisierung
✅ Lösung: Transpiler können auch andere Sprachen wie TypeScript oder JSX in JavaScript umwandeln.

- Tools: TypeScript Compiler, Babel mit entsprechenden Plugins

---

### Polyfills

🚫 Problem: Ältere Browser kennen bestimmte **Built-in-Funktionen** nicht (z.B. `Promise`, `Array.prototype.includes`). Diese lassen sich nicht durch Syntax-Umschreibung lösen.
✅ Lösung: Polyfills sind Code-Snippets, die fehlende APIs in älteren Browsern nachimplementieren.

- Tools: core-js, Babel mit `useBuiltIns`-Option
- Nachteil: Sie erhöhen die Bundle-Größe, da zusätzlicher Code mitgeliefert wird.

> 📖 Beispiel: Ein Polyfill für `Array.prototype.includes`:
>
> ```javascript
> if (!Array.prototype.includes) {
>   Array.prototype.includes = function (searchElement, fromIndex) {
>     if (this == null) {
>       throw new TypeError('"this" is null or not defined');
>     }
>     var o = Object(this);
>     var len = o.length >>> 0;
>     if (len === 0) {
>       return false;
>     }
>     // ... weitere Logik
>   };
> }
> ```

---

> ⚠️ Transpiler und Polyfills werden oft verwechselt, lösen aber unterschiedliche Probleme:
>
> - **Transpiler** wandeln **neue Syntax** in alte Syntax um (z.B. `class` → `function` + `prototype`)
> - **Polyfills** stellen **fehlende APIs** bereit (z.B. `Array.prototype.includes`, `fetch`)

## 🧰 Aufgabe

Leicht 🟢
Klicke [hier](https://babeljs.io/repl#?browsers=defaults%2C%20chrome%2020&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=MYewdgzgLgBBIFsCmB5ARgKxgXhgbwF8AoE0SEAGyQDoKQBzACmpfmXQwEog&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=true&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=true&targets=&version=7.23.6&externalPlugins=&assumptions=%7B%7D), um den Babel-Transpiler live auszuprobieren. Ändere die Ziel-Browser und beobachte, wie sich der Output verändert.

Leicht 🟢
Prüfe mit [Can I Use](https://caniuse.com/), ab welcher Browser-Version bestimmte JavaScript-Features unterstützt werden (z.B. `Promise`, `Array.prototype.includes`).

---

### Bundler

#### Was ist ein Bundler?

🚫 Problem 

- Was für die Entwicklung gut ist (Modularisierung des Codes) ist für den Browser schlecht: Viele einzelne Module bedeuten viele HTTP-Requests, was durch Latenz und Connection-Limits (bei HTTP/1.1) zu langen Ladezeiten führt.

> 💡 Hinweis: Auch mit HTTP/2 (Multiplexing) bleibt Bundling sinnvoll – Bundler ermöglichen zusätzlich Tree Shaking, Minification und Code Splitting, die über reine Request-Reduktion hinausgehen.

- Wie eingangs schon erwähnt wurde zu Beginn der Entwicklung von JAvaScript kein OPaketverwaltung implementiert. Es gab also keine Möglichkeit, Module zu importieren. Das führte dazu, dass Entwickler ihre eigenen Lösungen für Modularität und Abhängigkeiten entwickeln mussten (z.B. durch globale Variablen oder IIFEs). Mit der Einführung von ES6-Modulen (`import`/`export`) wurde zwar eine standardisierte Syntax für Module geschaffen, aber die Browserunterstützung war anfangs begrenzt, was die Notwendigkeit von Bundlern weiter verstärkte. Bis heute können zum die zwar eraltetet aber immer noch genutzte Modulsystem CommonJS im Browser nicht verwednet werden.

---

✅ Lösung: Bundler

- (Module) Bundler sind Tools, die verschiedene JavaScript-Dateien und andere Ressourcen (wie CSS, Bilder) in eine oder wenige Dateien bündeln, um die Anzahl der HTTP-Requests und damit die Ladezeit zu reduzieren.
- Tools: 
  - Webpack:alt und langsam aber immer noch  am meisten verbeitet 
  -  Rollup bzw. Rolldown: Rolldown ist der Nachfolger von roll up und so zimeloch State of the Art 
  -  Parcel: Einfache Konfiguration, aber weniger flexibel als Webpack
  -  Rspack: Webpack-Alternative mit Fokus auf Performance
  -  tsup bzw. tsdown: Bundler spezell für Libraries

---

#### Dependency Graph:

🚫 Problem: Module importieren andere Module, die wiederum weitere Module importieren – es entsteht ein komplexes Netz aus Abhängigkeiten, das manuell kaum zu überblicken ist.
TBD: Foto aus the seniorDev

✅ Lösung: Bundler analysieren die Abhängigkeiten zwischen den Modulen und erstellen einen Dependency Graph, um die Reihenfolge der Bündelung zu bestimmen.


#### Cache Busting

🚫 Problem: Browser cachen gebündelte Dateien, was zu Problemen führen kann, wenn neue Versionen der Dateien bereitgestellt werden (z.B. nach einem Deployment).
✅ Lösung: Bundler können nach jedem Build Hashes in die Dateinamen einfügen (z.B. `bundle.abc123.js`), um sicherzustellen, dass der Browser die neueste Version lädt.

---

#### Source Maps

🚫 Problem: Durch den Einsatz von Bundlern ist ein Problem entstanden, welches wir zuvor gar nicht hatten: Man kann den Quellcode nicht mehr so gut debuggen, da sich durch den Bundling-Prozess die erstellten Code-Dateien von den tatsächlich vom Browser interpretierten Code-Dateien **stark** unterscheiden.

✅ Lösung: Bundler können Source Maps (`.map`-Dateien) generieren. Diese bilden eine Zuordnung zwischen dem gebündelten Code und dem ursprünglichen Quellcode.

- In den Browser-DevTools (F12 → Sources) wird dann automatisch der **originale** Quellcode angezeigt – inklusive korrekter Dateinamen und Zeilennummern.
- Source Maps werden nur geladen, wenn die DevTools geöffnet sind → kein Performance-Nachteil für Endnutzer.

---

## 🧰 Aufgabe: Bundler

Leicht 🟢
Erstelle ein kleines Projekt mit mehreren JS-Dateien, die sich gegenseitig importieren. Führe `npm run build` (mit Vite) aus und inspiziere den Output im `dist/`-Ordner. Vergleiche die Anzahl der Dateien vorher und nachher.

Mittel 🟡
Öffne die DevTools (F12 → Sources) in einem gebündelten Projekt. Finde heraus, wo die Source Maps angezeigt werden und setze einen Breakpoint im originalen Quellcode.

---

## Source Code Quality Tooling

### Statische Codeanalyse

- Linter analysieren den Quellcode, ohne ihn auszuführen, und finden potenzielle Fehler, Code-Smells und Verstöße gegen Coding-Conventions.
  - Tools: ESLint, Biome

TBD Beispiele für Code Smells

---

### Formatting


- Formatter sorgen für ein einheitliches Code-Format (Einrückung, Zeilenlänge, etc.).
  - Tools: Prettier, Biome

- Vortiele
  - besser lesbar beim Coden
  - wenn uahc noch dasselbe Format verwendet wird besser vergleich opaar bei git diff bei einem pull request zum Beispiel

TBD: Bild von Pullrequest mit Formatierung vs. ohne Formatierung


---



# Performance OPtimizing

#### Tree Shaking

🚫 Problem: Nicht jeder importierte Code wird tatsächlich verwendet – unnötiger Code vergrößert das Bundle.

✅ Lösung: Bundler können anhand des Dependency Graphs ungenutzten Code erkennen und entfernen (sog. Tree Shaking), um die Bundle-Größe zu reduzieren.

---

#### Code Splitting

🚫 Problem: Ein einziges großes Bundle bedeutet, dass der Nutzer auch Code herunterlädt, den er auf der aktuellen Seite gar nicht braucht.

✅ Lösung: Bundler können den Code in kleinere Teile aufteilen, die nur bei Bedarf geladen werden:

- Route Based Splitting: Code wird basierend auf den Routen der Anwendung aufgeteilt.
- Dynamic Imports: Code wird erst geladen, wenn er tatsächlich benötigt wird, z.B. durch `import()`-Syntax.

---


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

## Zusammenfassung: Vites Toolchain

Zurück zur Ausgangsfrage: Welche Tools hat Vite für uns zusammengebündelt?

```
Quellcode (.ts, .tsx, .css, .html)
      │
      ▼
  Linter / Formatter  (ESLint, Prettier)
      │
      ▼
  Transpiler  (esbuild / SWC für Dev, TypeScript → JS, JSX → JS)
      │
      ▼
  Bundler  (Rollup für Production Build)
  ├── Dependency Graph
  ├── Tree Shaking
  ├── Code Splitting
  └── Minification
      │
      ▼
  Output (dist/) + Source Maps
```

➡️ Vite abstrahiert diese gesamte Toolchain hinter `npm run dev` (Entwicklung) und `npm run build` (Produktion).
