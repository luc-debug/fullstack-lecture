---
marp: true
theme: default
paginate: true
_class: title
style: |

  /* ─── Layout-Helfer ─── */
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }

  /* ─── Globale Stile & Farbpalette ─── */
  section {
    background-color: #020617;
    color: #f1f5f9;
    font-family: 'Urbanist', 'Segoe UI', sans-serif;
    padding: 60px;
  }

  h1, h2, h3 { color: #f8fafc; }

  h1 strong, h2 strong, h3 strong, em {
    color: #10b981;
    font-style: normal;
  }

  p, li { color: #cbd5e1; }

  /* ─── Titel-Folie ─── */
  section.title {
    background: radial-gradient(circle at 90% 10%, rgba(16, 185, 129, 0.12) 0%, #020617 60%);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  section.title h1 { font-size: 3.5rem; margin-bottom: 10px; }

  /* ─── Section Divider ─── */
  section.section-divider {
    background: radial-gradient(circle at 15% 85%, rgba(16, 185, 129, 0.08) 0%, #020617 65%);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  section.section-divider .num {
    font-size: 9rem;
    font-weight: 700;
    color: rgba(16, 185, 129, 0.10);
    line-height: 1;
    margin-bottom: -10px;
  }

  section.section-divider h1 {
    font-size: 2.8rem;
    border-left: 6px solid #10b981;
    padding-left: 24px;
    margin: 0;
  }

  section.section-divider p {
    padding-left: 30px;
    color: #475569;
    font-size: 1rem;
    margin-top: 12px;
  }

  /* ─── Inhalts-Folien Titel ─── */
  section:not(.title):not(.section-divider) h2 {
    border-left: 6px solid #10b981;
    padding-left: 25px;
    font-size: 1.8rem;
    margin-bottom: 30px;
  }

  /* ─── Blockquotes & Tiles ─── */
  blockquote, .tile {
    background: #0f172a;
    border-left: 4px solid #10b981;
    border-top: 1px solid rgba(255,255,255,0.05);
    border-right: 1px solid rgba(255,255,255,0.05);
    border-bottom: 1px solid rgba(255,255,255,0.05);
    border-radius: 0 12px 12px 0;
    padding: 18px 22px;
    margin: 12px 0;
  }

  section::after {
  content: attr(data-marpit-pagination) ' / ' attr(data-marpit-pagination-total);
  position: absolute;
  bottom: 24px;
  right: 40px;
  font-family: var(--font-mono);
  font-size: 1.4rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
  }

  blockquote p { color: #f1f5f9; margin: 0; font-style: italic; }

  .tile h3 { margin-top: 0; }
  .tile-blue   { border-left-color: #3b82f6 !important; }
  .tile-purple { border-left-color: #a855f7 !important; }
  .tile-yellow { border-left-color: #f59e0b !important; }
  .tile-red    { border-left-color: #ef4444 !important; }

  /* ─── Inline Code ─── */
  :not(pre) > code {
    background: rgba(16, 185, 129, 0.15);
    color: #34d399;
    border: 1px solid rgba(16, 185, 129, 0.3);
    border-radius: 6px;
    padding: 2px 8px;
    font-size: 0.95em;
    font-family: 'Courier New', Courier, monospace;
  }

  /* ─── Tabellen ─── */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
  th {
    background-color: #10b981;
    color: #020617;
    font-weight: bold;
    padding: 14px 18px;
    font-size: 1.1rem;
    text-align: left;
    border: 1px solid #10b981;
  }
  td {
    padding: 14px 18px;
    border: 1px solid #334155;
    background-color: #0f172a;
    color: #ffffff;
    font-size: 1.05rem;
  }
  tr:nth-child(even) td { background-color: #1e293b; }

  /* ─── ER-Diagramm ─── */
  .er-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin: 20px 0;
  }
  .er-box {
    background: #0f172a;
    border: 1px solid #334155;
    border-radius: 10px;
    overflow: hidden;
    min-width: 200px;
  }
  .er-head {
    background: #10b981;
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
    color: #cbd5e1;
    font-size: 0.88rem;
    font-family: 'Courier New', monospace;
  }
  .er-row.pk { color: #10b981; font-weight: bold; }
  .er-row.fk { color: #f59e0b; }
  .er-conn {
    color: #475569;
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.8;
    padding: 0 8px;
  }

  /* ─── Warn-Box ─── */
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
---

## 💻 Aufgabe: Middleware: Der VIP-Eingang

---

Erstellen Sie einen simplen Express-Server mit einer geschützten Route. Ziel ist es, die Verantwortlichkeiten strikt zwischen Middleware und Handler zu trennen.

<div class="grid-2">
<div class="tile" style="border-top: 4px solid #f87171;">
<h3>1. Die Middleware (Der Türsteher)</h3>
<p>Schreiben Sie eine Middleware-Funktion <code>checkAuth</code>. Sie prüft, ob der HTTP-Header <code>x-role</code> den Wert <code>"vip"</code> hat.</p>
<ul>
  <li>Wenn ja: Leiten Sie die Anfrage weiter.</li>
  <li>Wenn nein: Blockieren Sie die Anfrage mit Status <code>403 Forbidden</code> und einer Fehlermeldung.</li>
</ul>
</div>

---

<div class="tile" style="border-top: 4px solid #34d399;">
<h3>2. Der Request Handler (Die Party)</h3>
<p>Schreiben Sie eine Handler-Funktion <code>getVipData</code>. Diese wird nur aufgerufen, wenn die Middleware die Anfrage durchlässt.</p>
<ul>
  <li>Senden Sie den Status <code>200 OK</code>.</li>
  <li>Schicken Sie ein JSON-Objekt zurück: <code>{ message: "Willkommen in der VIP-Lounge!" }</code></li>
</ul>
</div>
</div>

**Route:** Verknüpfen Sie beide Funktionen auf der Route `GET /api/vip`.
