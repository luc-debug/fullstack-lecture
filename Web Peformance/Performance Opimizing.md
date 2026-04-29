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

# Performance OPtimizing

## 1. Diagnosis

## 2. Static Assets Optimization - CSS, Images & Fonts

## 3. JavaScript Optimization

### Tree Shaking

🚫 Problem: Nicht jeder importierte Code wird tatsächlich verwendet – unnötiger Code vergrößert das Bundle.

✅ Lösung: Bundler können anhand des Dependency Graphs ungenutzten Code erkennen und entfernen (sog. Tree Shaking), um die Bundle-Größe zu reduzieren.

---

### Code Splitting

🚫 Problem: Ein einziges großes Bundle bedeutet, dass der Nutzer auch Code herunterlädt, den er auf der aktuellen Seite gar nicht braucht.

✅ Lösung: Bundler können den Code in kleinere Teile aufteilen, die nur bei Bedarf geladen werden:

- Route Based Splitting: Code wird basierend auf den Routen der Anwendung aufgeteilt.
- Dynamic Imports: Code wird erst geladen, wenn er tatsächlich benötigt wird, z.B. durch `import()`-Syntax.

---
