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

Die zwei wichtigsten Skills als Frontend Dev:
- UI in Komponenten zerlegen
- State richtig verorten und managen

Sonst entstehen:

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

## Komponentenraster

- Untersuchen der Entwürfe nach Komponenten

TODO: Bild wo die UI in KOmpoennten gegliedert ist

---

## State

🛑 Problem
- willkürliche Änderungen am DOM
- schwer vorauszusagen wie die UI auf Änderungen reagiert
- unübersichtlicher Code
- schwer zu debuggen
- schwer zu testen
- schwer zu warten
- schwer zu erweitern
- schwer zu verstehen
- schwer zu optimieren
- globale Namespace verschmutzung

✅ Lösung: State-Management
- State ist die einzige Quelle der Wahrheit
- UI ist eine Funktion des State  
- State-Änderungen führen zu vorhersehbaren UI-Updates

💡 State machine pattern

---

## Where Does State Live?

### Local State

Local state means in the Context of a Component

🚫 **Problem:** How do you implement state for something like user input?
✅ **Solution:** Use the SPA framework’s local state utility (e.g. React → `useState`)

⚠️ **Anti-Pattern:** Essential vs. derived state
Prefer derived state whenever possible instead of duplicating state.

⚠️ **Best Practice:** Keep state as close as possible to where it originates.
In most cases, that means inside the component itself.

---

### Lifted State (Shared Parent State)

🚫 **Problem:** Two or more components need access to the same state.
✅ **Solution:** Lift the state up to the closest common ancestor and pass it down via props.

⚠️ **Anti-Pattern:** Prop drilling / lifting state too high
Avoid pushing state unnecessarily far up the tree — see Global State for alternatives.

---

### Global State

🚫 **Problem:** How do you avoid prop drilling across many component layers?

✅ **Solution:** Use a global state mechanism such as React Context API (or similar solutions in other SPAs).

⚠️ **Problem:** Context can trigger broad top-down re-renders.
✅ **Optimization:** Use tools like Redux, Zustand, or selector-based state managers to re-render only the components that actually depend on changed state.

---

## Where Is State Stored?

### In-Memory (Runtime State)

* Component state (`useState`, `useReducer`)
* Global stores (Redux, Zustand, Context)
* Exists only while the app is running

---

### Local Storage / Session Storage

* Persists in the browser
* Useful for user preferences, auth tokens, drafts
* `localStorage`: persists across sessions
* `sessionStorage`: cleared when the tab closes

---

### Server

* Persistent, centralized state
* Databases, user profiles, application data
* Shared across devices and sessions
* Often accessed through APIs

---

### URL

* State encoded in query params, path params, or hash
* Useful for filters, pagination, search state, deep linking
* Shareable and bookmarkable







---







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
