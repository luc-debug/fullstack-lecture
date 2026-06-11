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

# Performance Optimizing

_Vorbemerkung: Die meisten der folgenden Konzepte sind allgemein. Sie lassen sich somit auf alle CMSs (zum Beispiel WordPress, TYPO3), SPAs (zum Beispiel React) oder MPAs (zum Beispiel ASP.NET Core) anwenden. Denn am Ende ist es egal, womit Sie Ihre Webseite bauen: Am Ende werden im Browser immer ausschließlich HTML, CSS und JavaScript ausgeführt._

---

## Inhaltsverzeichnis

1. The Core Web Vitals
2. The Critical Rendering Path
3. Fünf Schritte für die Performance-Optimierung
   - Performance Diagnosis
   - Optimierung des Servers
   - Optimierung der Assets
   - Optimierung des JavaScript-Bundles
     - Minification
     - Bundle Cleanup
     - Code Splitting

---

## 1. The Core Web Vitals

Verschiedene Metriken, die die Performance einer Webseite messen.

### 1.1 FCP (First Contentful Paint)

### 1.2 LCP (Largest Contentful Paint)

### 1.3 TBT (Total Blocking Time)

### 1.4 CLS (Cumulative Layout Shift)

### 1.5 SI (Speed Index)

---

## 2. The Critical Rendering Path

## 3. Fünf Schritte für die Performance-Optimierung

### 3.1 Performance Diagnosis

### 3.2 Optimierung des Servers

### 3.3 Optimierung der Assets (CSS, Schriftarten, Bilder)

---

### 3.4 Optimierung des JavaScript-Bundles

#### 3.4.1 Minification

🚫 Problem: 
- Für die bessere Lesbarkeit verwenden wir Leerzeichen, Zeilenumbrüche, lange Variablennamen
- Dies vergrößert die Bundle-Größe in der Produktion unnötig; wir haben davon nur einen Vorteil während der Entwicklung.

✅ Lösung:

Tools wie Terser oder oxc-minify:
- Leerzeichen und Zeilenumbrüche entfernen
- Variablennamen durch kürzere Namen ersetzen
- ... und vieles mehr, das zur Minification beiträgt

---

#### 3.4.2 Bundle Cleanup

##### 3.4.2.1 Manuelles Cleanup

🚫 Problem: Nicht jeder importierte Code wird tatsächlich verwendet – unnötiger Code vergrößert das Bundle.

✅ Lösung 1: Manuell die package.json durchsehen und nicht benötigte Pakete deinstallieren

✅ Lösung 2: Pakete, die zwar verwendet werden, von denen aber nur ein kleiner Teil tatsächlich genutzt wird, können durch nativen Code ersetzt werden.
Beispiel: eine UI-Bibliothek, von der nur eine Komponente verwendet wird. Ist es möglich, die Komponente selbst zu implementieren? Mittlerweile bietet HTML eine ganze Palette an nativen UI-Controls – es gibt zum Beispiel ein Accordion, das sogar ohne JavaScript funktioniert.

---

##### 3.4.2.2 Automatisches Cleanup – Tree Shaking

🚫 Problem: Nicht jeder importierte Code wird tatsächlich verwendet – unnötiger Code vergrößert das Bundle.

✅ Lösung: Bundler können anhand des Dependency Graphs automatisch ungenutzten Code erkennen und entfernen (sog. Tree Shaking), um die Bundle-Größe zu reduzieren.

---

### 3.4.3 Code Splitting

🚫 Problem: Ein einziges großes Bundle bedeutet, dass der Nutzer auch Code herunterlädt, den er auf der aktuellen Seite gar nicht braucht.

✅ Lösung: Bundler können den Code in kleinere Teile aufteilen, die nur bei Bedarf geladen werden:

- Route Based Splitting: Code wird basierend auf den Routen der Anwendung aufgeteilt.
- Dynamic Imports: Code wird erst geladen, wenn er tatsächlich benötigt wird, z. B. durch die `import()`-Syntax.

---
