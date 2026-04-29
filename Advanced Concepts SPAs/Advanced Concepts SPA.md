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