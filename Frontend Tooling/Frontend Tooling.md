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

--- 

## Einleitung


- in der Frontend Vorlesung haben wir ein Built-Tool kennengelernt: Vite
- Doch was macht ein Build Tool genau? Und welche anderen Tools gibt es noch?
- In diesem Vortrag möchte ich euch einen Überblick über die verschiedenen Arten von Frontend-Tools geben, die in der modernen Webentwicklung verwendet werden.

![alt text](image.png)

---

## Build Tooling



🚫 Problem: Im Gegensatz zu Sprachen wie C#, die von Anfang an als Enterprise-Programmiersprachen konzipiert wurden und daher bereits Lösungen für statische Typisierung, Modularität und Abwärtskompatibilität integriert hatten, wurde JavaScript ursprünglich in sehr kurzer Zeit als einfache Skriptsprache entwickelt.

➡️ Das führt dazu, dass JavaScript kontinuierlich weiterentwickelt wird und regelmäßig neue Features erhält, die jedoch nicht sofort von allen Browsern unterstützt werden. TypeScript erweitert JavaScript zwar um statische Typisierung und zusätzliche moderne Funktionen, wird jedoch ebenfalls nicht direkt von allen Browsern nativ ausgeführt und muss daher in kompatibles JavaScript transpiliert werden.

---

### ✅ Lösung: Transpiler


- Transpiler sind Tools, die modernen JavaScript-Code in eine ältere Version umwandeln, damit er in älteren Browsern funktioniert.
  - Tools: Babel, SWC
  - Sie nutzen dazu Polyfills, um fehlende Funktionen in älteren Browsern bereitzustellen
  - Nachteil Polyfills: Sie können die Größe des gebündelten Codes erhöhen, da sie zusätzlichen Code hinzufügen, um die fehlenden Funktionen bereitzustellen.
- Transpiler können auch andere Sprachen wie TypeScript oder JSX in JavaScript umwandeln. 
  - Tools: TypeScript Compiler, Babel mit entsprechenden Plugins

> 📖 Transpiler: Führen Code Transformationen durch, zum Beispiel TypScript zu JavaScript oder moderne JavaScript-Features in ältere Versionen umwandeln.

> 📖 Polyfills sind Code-Snippets, die fehlende Funktionen in älteren Browsern bereitstellen, damit moderne JavaScript-Features auch dort funktionieren. Zum Beispiel könnte ein Polyfill für `Array.prototype.includes` in älteren Browsern so aussehen:
> ```javascript
> if (!Array.prototype.includes) {
>   Array.prototype.includes = function(searchElement, fromIndex) {
>     if (this == null) {
>       throw new TypeError('"this" is null or not defined');
>     }
>     var o = Object(this);
>     var len = o.length >>> 0;
>     if (len === 0) {
>       return false;
>     }
---


### ✅ Lösung: Bundler

- Bundler sind Tools, die verschiedene JavaScript-Dateien und andere Ressourcen (wie CSS, Bilder) in eine oder mehrere Dateien bündeln, um die Ladezeit zu optimieren.
  - Tools: Webpack, Rollup, Parcel
  - 
#### Dependency Graph: 

🚫 Problem: TBD

Bundler analysieren die Abhängigkeiten zwischen den Modulen und erstellen einen Graphen, um die Reihenfolge der Bündelung zu bestimmen.

---

- Code Splitting: Bundler können den Code in kleinere Teile aufteilen, die nur bei Bedarf geladen werden, um die Ladezeit zu verbessern.
  - Route Based Splitting: Teile des Codes werden basierend auf den Routen der Anwendung aufgeteilt.
  - Dynamic Imports: Teile des Codes werden nur geladen, wenn sie tatsächlich benötigt werden, z.B. durch `import()`-Syntax.
- Tree Shaking: Bundler können ungenutzten Code entfernen, um die Größe der gebündelten Dateien zu reduzieren.
- Source Maps: Bundler können Source Maps generieren, um das Debuggen von gebündeltem Code zu erleichtern.

---

## 🧰 Aufgabe 

Leicht 🟢

 Click [here](https://babeljs.io/repl#?browsers=defaults%2C%20chrome%2020&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=MYewdgzgLgBBIFsCmB5ARgKxgXhgbwF8AoE0SEAGyQDoKQBzACmpfmXQwEog&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=true&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=true&targets=&version=7.23.6&externalPlugins=&assumptions=%7B%7D) to play with the live code for the Babel Example

Leicht 🟢
Check on which browsers you can use language features with [Can I Use](https://caniuse.com/).

--- 

## Source Code Quality Tooling