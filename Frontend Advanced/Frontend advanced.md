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

# Komponentenorientierte Frontend-Entwicklung

Eine strukturierte Vorgehensweise zur Entwicklung einzelner Frontend-Komponenten.

---

## Motivation

| Ohne Methode                                        | Mit Lean Component Method                           | Auswirkung                                   | Design Pattern / Code Principle |
| --------------------------------------------------- | --------------------------------------------------- | -------------------------------------------- | ------------------------------- |
| Styling vor Struktur                                | Struktur vor Styling → verhindert zu frühes Styling | Klarere Priorisierung, weniger Rework        | Separation of Concerns          |
| Unklarer State / State-Chaos durch falsches Lifting | Klare State-Hierarchie                              | Vorhersehbare Datenflüsse, weniger Bugs      | Single Source of Truth          |
| Refactoring erst nach Feature-Fertigstellung        | Saubere Architektur von Anfang an                   | Weniger technische Schulden                  | Clean Architecture              |
| Tests schwer zu schreiben                           | Testbare Komponenten by Design                      | Höhere Testbarkeit, schnellere QA            | Testability by Design           |
| Lange Debug-Sessions                                | Klare Datenflüsse                                   | Schnellere Fehleranalyse                     | Unidirectional Data Flow        |
| Vermischte Verantwortlichkeiten                     | Trennung von Verantwortlichkeiten                   | Wiederverwendbarkeit, bessere Skalierbarkeit | Separation of Concerns          |
| Alle fangen an, aber nichts wird zu Ende gebracht   | Schrittweise Entwicklung mit Fokus                  | Höhere Abschlussrate, bessere Iteration      | Iterative Development           |
| Schwer wartbarer Code                               | Architektur by Design → Wartbarkeit                 | Langfristig stabilere Codebasis              | Maintainability                 |
| Nicht wissen, wo anfangen                           | Komplexität reduzieren durch Zerlegung              | Schnellere Entwicklungszeit                  | Divide and Conquer              |
| Chaotische Props                                    | Fest definierte Schnittstellen                      | Klarere Kommunikation zwischen Komponenten   | Interface Segregation Principle |

---

## Untersuchen der Entwürfe nach Komponenten

- Man muss die UI in KOmponenten runterbrechen

TODO: Bild wo die UI in KOmpoennten gegliedert ist

---

## State

### App State: URL als Single Source of Truth

Persistiere relevante State-Werte in der URL – das ermöglicht:

- Seite teilen / bookmarken
- Browser-Back funktioniert korrekt
- Deep Links (z.B. in Email-Kampagnen)

```tsx
// State aus URL lesen
const [searchParams, setSearchParams] = useSearchParams();
const searchText = searchParams.get("search") || "Star Wars";
const currentPage = Number(searchParams.get("page")) || 1;

// URL aktualisieren nach Fetch
setSearchParams({ search: searchText, page: String(currentPage) });
```

**Resultat:** `?search=Inception&page=3` ist ein vollständiger App-State.

---

### Parent Component State: Lift up state

### Component state

### Essential vs derived state

---

## Komponenten-Entwicklung

### Die 4 Schritte

```text
1. Component Structure
2. Data Flow
3. Functionality
4. Styling
```

Jede Komponente wird in genau dieser Reihenfolge entwickelt.

---

### Grundprinzip

```text
Skeleton
   ↓
Component API
   ↓
Behavior
   ↓
Appearance
```

Die Komponente wächst schrittweise.

---

# Beispiel-Komponente

## TodoItem

Wir entwickeln eine einzelne Komponente:

- Checkbox
- Todo-Text
- Delete-Button

---

# Schritt 1

# Component Structure

Zuerst nur die Grundstruktur.

Noch keine:

- Props
- Events
- Logik
- Styles

---

# React – Structure

```jsx
function TodoItem() {
  return (
    <div>
      <input type="checkbox" />
      <span>Todo Text</span>
      <button>Delete</button>
    </div>
  );
}
```

---

# Ziel von Structure

Fragen:

- Welche HTML-Elemente existieren?
- Welche Komponenten werden benötigt?
- Wie ist die Hierarchie?
- Welche Slots/Bereiche gibt es?

Die Komponente wird wie ein Wireframe aufgebaut.

---

# Schritt 2

# Data Flow

Jetzt definieren wir:

- Welche Daten kommen rein?
- Welche Events gehen raus?
- Wo liegt der State?

---

# React – Data Flow

```jsx
function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div>
      <input type="checkbox" checked={todo.done} />

      <span>{todo.text}</span>

      <button>Delete</button>
    </div>
  );
}
```

---

# Warum Data Flow wichtig ist

Viele Probleme entstehen durch:

- unklaren State
- doppelte Daten
- unklare Verantwortlichkeiten

Die Bare Bones Method löst zuerst die Architektur.

---

# Component API

Die Props definieren die API der Komponente.

```jsx
<TodoItem todo={todo} onDelete={handleDelete} onToggle={handleToggle} />
```

Dadurch wird die Komponente:

- wiederverwendbar
- testbar
- vorhersehbar

---

# Schritt 3

# Functionality

Erst jetzt wird Verhalten implementiert.

Zum Beispiel:

- Click Events
- API Calls
- Form Handling
- Validation
- State Updates

---

# React – Functionality

```jsx
function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />

      <span>{todo.text}</span>

      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}
```

---

# Vorteil dieser Reihenfolge

Die Funktionalität basiert jetzt auf:

- klarer Struktur
- sauberem Data Flow
- definierter Component API

Dadurch entstehen weniger Refactorings.

---

# Schritt 4

# Styling

Ganz am Ende:

- Layout
- Farben
- Animationen
- Responsiveness
- Design-Systeme

---

# React – Styling

```jsx
<div className="todo-item">
```

```css
.todo-item {
  display: flex;
  gap: 8px;
}
```

---

# Warum Styling zuletzt?

Zu frühes Styling führt oft zu:

- Ablenkung
- unnötigem Refactoring
- versteckten Architekturproblemen
- Fokusverlust

Die Methode priorisiert Funktion vor Design.

---

# Vue Beispiel

## Structure

```vue
<template>
  <div>
    <input type="checkbox" />
    <span></span>
    <button>Delete</button>
  </div>
</template>
```

---

# Vue Beispiel

## Data Flow

```vue
<script setup>
defineProps({
  todo: Object,
});

defineEmits(["delete", "toggle"]);
</script>
```

---

# Vue Beispiel

## Functionality

```vue
<input
  type="checkbox"
  :checked="todo.done"
  @change="$emit('toggle', todo.id)"
/>
```

---

# Vue Beispiel

## Styling

```vue
<style scoped>
.todo-item {
  display: flex;
}
</style>
```

---

# Typische Fehler ohne Bare Bones Method

- Sofort Styling beginnen
- Zu früh abstrahieren
- State unklar verteilen
- Komponenten zu groß machen
- Logik und UI vermischen

---

# Vorteile der Methode

## Technisch

- bessere Wartbarkeit
- sauberer Data Flow
- bessere Testbarkeit
- klarere Komponenten

## Im Team

- besseres Code Review
- einheitliche Struktur
- leichteres Onboarding

---

# Besonders geeignet für

- React
- Vue
- Svelte
- Component Libraries
- Design-Systeme
- moderne SPA-Entwicklung

---

# Fazit

Die Bare Bones Method ist:

- komponentenorientiert
- iterativ
- architekturfokussiert

Sie hilft dabei, Frontend-Komponenten:

- strukturiert
- verständlich
- wartbar
- skalierbar

zu entwickeln.

---

# Merksatz

```text
Structure first.
Data second.
Behavior third.
Design last.
```
