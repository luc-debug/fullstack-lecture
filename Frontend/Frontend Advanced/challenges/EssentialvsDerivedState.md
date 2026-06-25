### Aufgabenstellung für die Studierenden

**Ziel:** Analysiert das UI-Mockup für den **Event-Catering-Planer**. Die Werte sind hier wild gemischt. Identifiziert für jede Zeile, ob es sich um **essenziellen State** (Eingabefeld via `useState`) oder **abgeleiteten State** (reine JavaScript-Berechnung während des Renders) handelt.

```text
┌──────────────────────────────────────────────┐
│ Event-Catering & Budget-Planer               │
│                                              │
│ Gästeanzahl:           [      50        ]    │ 
│ Portionen pro Gast:    [     1.5        ]    │ 
│ Gesamtportionen:       [      75        ]    │ 
│                                              │
│ Preis pro Portion:     [    4.50€       ]    │ 
│ Essenskosten (Netto):  [   337.50€      ]    │ 
│ MwSt.-Satz:            [      7%        ]    │ 
│ Gesamtkosten (Brutto): [   361.13€      ]    │ 
│                                              │
│ Budget-Limit:          [   500.00€      ]    │ 
│ Budget-Status:         [  +138.87€      ]    │ 
└──────────────────────────────────────────────┘

```

**Eure Aufgabe:**

1. Erstellt die nötigen `useState`-Hooks für die Werte, die der Nutzer direkt verändern kann.
2. Berechnet die restlichen Felder rein mit JavaScript Variablen.

---

### Musterlösung (Für dich als Dozent)

Hier siehst du, wie die Werte im UI verteilt sind. Das zwingt die Studierenden, die Zeilen logisch zu analysieren.

#### 1. Die Analyse des UI

```text
┌──────────────────────────────────────────────┐
│ Event-Catering & Budget-Planer               │
│                                              │
│ Gästeanzahl:           [      50        ]    │ ← Essenzieller State
│ Portionen pro Gast:    [     1.5        ]    │ ← Essenzieller State
│ Gesamtportionen:       [      75        ]    │ ← Abgeleiteter State
│                                              │
│ Preis pro Portion:     [    4.50€       ]    │ ← Essenzieller State
│ Essenskosten (Netto):  [   337.50€      ]    │ ← Abgeleiteter State
│ MwSt.-Satz:            [      7%        ]    │ ← Essenzieller State
│ Gesamtkosten (Brutto): [   361.13€      ]    │ ← Abgeleiteter State
│                                              │
│ Budget-Limit:          [   500.00€      ]    │ ← Essenzieller State
│ Budget-Status:         [  +138.87€      ]    │ ← Abgeleiteter State
└──────────────────────────────────────────────┘

```

#### 2. Der React-Code

**Essenzieller State (Die 5 echten Inputs):**

```jsx
const [gaeste, setGaeste] = useState(50);
const [portionenProGast, setPortionenProGast] = useState(1.5);
const [preisProPortion, setPreisProPortion] = useState(4.50);
const [mwstSatz, setMwstSatz] = useState(7);
const [budgetLimit, setBudgetLimit] = useState(500);

```

**Abgeleiteter State (Die 4 Berechnungen):**

```javascript
// Berechnungen brechen linear durch das UI auf:

// 1. Basiert auf essential State
const gesamtPortionen = gaeste * portionenProGast;

// 2. Basiert auf einem abgeleiteten Wert (gesamtPortionen) und essential State
const essenskostenNetto = gesamtPortionen * preisProPortion;

// 3. Basiert auf dem vorherigen abgeleiteten Wert
const gesamtkostenBrutto = essenskostenNetto * (1 + mwstSatz / 100);

// 4. Kombiniert essential State mit dem letzten abgeleiteten Wert
const budgetStatus = budgetLimit - gesamtkostenBrutto;

```

> **Dozenten-Tipp für die Besprechung:**
> Nutze dieses Beispiel, um zu zeigen, dass abgeleiteter State wunderbar **kaskadieren** kann. Man braucht keinen State für `gesamtPortionen`, nur weil man ihn als Zwischenschritt für die `essenskostenNetto` benötigt. React berechnet das von oben nach unten in einem Rutsch durch – synchron, sauber und ohne Seiteneffekte!