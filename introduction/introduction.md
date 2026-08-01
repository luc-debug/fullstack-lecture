---
theme: seriph
title: Fullstack Vorlesung
class: text-center
drawings:
  persist: false
transition: slide-left
comark: true
duration: 35min
---

<style>
  :root {
    --fs-bg: #020617;
    --fs-surface: #0f172a;
    --fs-text: #f1f5f9;
    --fs-muted: #cbd5e1;
    --fs-accent: #10b981;
    --fs-border: #334155;
  }

  .slidev-layout,
  .slidev-page {
    background-color: var(--fs-bg);
    color: var(--fs-text);
    font-family: 'Urbanist', 'Segoe UI', sans-serif;
  }

  .slidev-layout {
    padding: 3rem;
  }

  .slidev-layout h1,
  .slidev-layout h2,
  .slidev-layout h3 {
    color: #f8fafc;
  }

  .slidev-layout h1 strong,
  .slidev-layout h2 strong,
  .slidev-layout h3 strong,
  .slidev-layout em {
    color: var(--fs-accent);
    font-style: normal;
  }

  .slidev-layout p,
  .slidev-layout li {
    color: var(--fs-muted);
  }

  .slidev-layout h2 {
    border-left: 6px solid var(--fs-accent);
    padding-left: 25px;
    font-size: 1.8rem;
    margin-bottom: 30px;
  }

  .slidev-layout.text-center {
    background: radial-gradient(circle at 90% 10%, rgba(16, 185, 129, 0.12) 0%, var(--fs-bg) 60%);
  }

  .slidev-layout.section-divider {
    background: radial-gradient(circle at 15% 85%, rgba(16, 185, 129, 0.08) 0%, var(--fs-bg) 65%);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .slidev-layout.section-divider .num {
    font-size: 9rem;
    font-weight: 700;
    color: rgba(16, 185, 129, 0.1);
    line-height: 1;
    margin-bottom: -10px;
  }

  .slidev-layout.section-divider h1 {
    font-size: 2.8rem;
    border-left: 6px solid var(--fs-accent);
    padding-left: 24px;
    margin: 0;
  }

  .slidev-layout.section-divider p {
    padding-left: 30px;
    color: #475569;
    font-size: 1rem;
    margin-top: 12px;
  }

  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }

  blockquote,
  .tile {
    background: var(--fs-surface);
    border-left: 4px solid var(--fs-accent);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 0 12px 12px 0;
    padding: 18px 22px;
    margin: 12px 0;
  }

  blockquote p {
    color: var(--fs-text);
    margin: 0;
    font-style: italic;
  }

  .tile h3 {
    margin-top: 0;
  }

  .tile-blue {
    border-left-color: #3b82f6 !important;
  }

  .tile-purple {
    border-left-color: #a855f7 !important;
  }

  .tile-yellow {
    border-left-color: #f59e0b !important;
  }

  .tile-red {
    border-left-color: #ef4444 !important;
  }

  .slidev-layout :not(pre) > code {
    background: rgba(16, 185, 129, 0.15);
    color: #34d399;
    border: 1px solid rgba(16, 185, 129, 0.3);
    border-radius: 6px;
    padding: 2px 8px;
    font-size: 0.95em;
    font-family: 'Courier New', Courier, monospace;
  }

  .slidev-layout table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  .slidev-layout th {
    background-color: var(--fs-accent);
    color: #020617;
    font-weight: bold;
    padding: 14px 18px;
    font-size: 1.1rem;
    text-align: left;
    border: 1px solid var(--fs-accent);
  }

  .slidev-layout td {
    padding: 14px 18px;
    border: 1px solid var(--fs-border);
    background-color: var(--fs-surface);
    color: #ffffff;
    font-size: 1.05rem;
  }

  .slidev-layout tr:nth-child(even) td {
    background-color: #1e293b;
  }

  .er-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin: 20px 0;
  }

  .er-box {
    background: var(--fs-surface);
    border: 1px solid var(--fs-border);
    border-radius: 10px;
    overflow: hidden;
    min-width: 200px;
  }

  .er-head {
    background: var(--fs-accent);
    color: #020617;
    font-weight: bold;
    padding: 10px 16px;
    text-align: center;
    font-size: 1rem;
    letter-spacing: 0.05em;
  }

  .er-row {
    padding: 8px 16px;
    border-top: 1px solid #1e293b;
    color: var(--fs-muted);
    font-size: 0.88rem;
    font-family: 'Courier New', monospace;
  }

  .er-row.pk {
    color: var(--fs-accent);
    font-weight: bold;
  }

  .er-row.fk {
    color: #f59e0b;
  }

  .er-conn {
    color: #475569;
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.8;
    padding: 0 8px;
  }

  .warn {
    background: rgba(239, 68, 68, 0.08);
    border: 1px solid rgba(239, 68, 68, 0.3);
    border-left: 4px solid #ef4444;
    border-radius: 0 8px 8px 0;
    padding: 10px 16px;
    margin-top: 14px;
    color: #fca5a5;
    font-size: 0.9rem;
  }
</style>

# Fullstack Vorlesung

## Legende

🧰: Aufgabe

- 🟢 Leicht: Kann mit etwas Recherche und Hilfe gelöst werden
- 🟡 Mittel: Erfordert etwas mehr Aufwand oder spezifisches Wissen
- 🔴 Schwer: Erfordert umfangreiche Änderungen oder externe Unterstützung

🛠️: Tool (Werkzeug); ein Stück Software, das ein Problem löst
💡: Konzept, welches implementiert wird
🚫 Problembeschreibung des Problems, welches das Konzept löst
✅: Lösungsbeschriebung des Problems, welches das Konzept löst

---
<!-- 
## Inhaltsverzeichnis

- Motivation: Was ist Fullstack?
- Roadmap
  - Frontend Roadmap
  - Backend Roadmap

---

## Motivation: Was ist Fullstack?

TODO

- Jobmarkt fordert End-to-end delivery
  - Anforderungsanalyse
  - Projektmanagement (Scrum!)
  - Frontend
  - Backend
  - DevOps

TODO Videoinhaltergänzen Einleitung

---

TODO: Vorstellung der Roadmap als Mindmap

--- -->

## Roadmap

### Frontend Roadmap (12 UE)

- 🎓 Wiederholung und Erweiterung JavaScript (2UE)
  - 🧰 Wiederholung JavaScript (1UE)
- 🎓 Entwicklung der Web-Architektur
  - 🧰 Wiederholung Frontends durch kleine React ToDo App (2UE)
- 🎓 Frontend Tooling
  - 🧰 Challenge (4UE)
<!-- - Performance Optimizing & Challenge (4UE) -->
- 🎓 Frontend Training in Depth
  - 🧰 Challenge (4UE)

---

### Backend Roadmap (15 UE)

- [ ] 🎓 Web Basics Advanced (2 UE)
  - [ ] 🧰 HTTP-API mit nativem http-Modul (1 UE)
  - [ ] 🧰 Content Negotiation (0.5 UE) 
- Backend Basics (4UE)
  - [ ] 🎓 REST
    - [ ] 🧰 Restful Design (0.5 UE)
    - [ ] 🧰 kleine Express App mit Postman (1 UE)
  - [ ] 🎓 Business Logic (2 UE)
    - [x] 🧰 Middleware (0.5 UE) 
    - [ ] 🧰 Sequence Diagramm (0.5 UE)
  - [x] 🎓 Database Query Language (2 UE)
    -  [x] 🧰 SQL Aufgaben (0.75UE)
    -  [x] 🧰 ER-Diagramme (0.75 UE)
  - 🧰 Fullstack Challenge (1 UE)
<!-- - Backend Advanced (? fraglich ob nicht zu viel)
  - MVC
  - ORM Einführung
  - ORM - Migrations -->

Vorstellung Prüfungsleistung: Projektarbeit (1 UE)
