# Musterlösung

**1. `GET /getAllBooks`**
Verstoß: Verb in der URL. Die HTTP-Methode (GET) drückt die Aktion bereits aus, der Endpunkt sollte nur die Ressource benennen.
Korrekt: `GET /books`

**2. `POST /books/createNewBook`**
Verstoß: Wieder ein Verb in der URL ("createNewBook"). POST auf die Collection reicht aus, um "Erstellen" auszudrücken.
Korrekt: `POST /books`

**3. `GET /books/5/delete`**
Verstoß: Doppelt falsch – Verb in der URL und falsche HTTP-Methode (GET sollte niemals einen Zustand verändern).
Korrekt: `DELETE /books/5`

**4. `GET /Books/5`**
Verstoß: Inkonsistente Großschreibung ("Books" statt "books"). URLs sollten durchgängig klein geschrieben sein, da manche Server case-sensitive sind und es sonst zwei unterschiedliche Ressourcen suggeriert.
Korrekt: `GET /books/5`

**5. `PUT /books/5/author/3`**
Verstoß: Falsche Ressourcenhierarchie/-verschachtelung. Ein Buch hat einen Autor, aber `author/3` als Sub-Ressource des Buches zu modellieren ist hier missverständlich – es wirkt, als würde man eine Autoren-Ressource unter dem Buch updaten, tatsächlich will man aber wahrscheinlich nur das Attribut "author" des Buches ändern.
Korrekt: z.B. `PATCH /books/5` mit Body `{ "authorId": 3 }` (PATCH statt PUT, da nur ein Feld geändert wird, nicht die ganze Ressource ersetzt wird)

**6. `GET /books?id=5`**
Verstoß: Eine einzelne, eindeutig identifizierbare Ressource sollte über den Pfad adressiert werden, nicht über einen Query-Parameter. Query-Parameter sind für Filterung, Sortierung, Pagination etc. gedacht, nicht für die Identifikation einer einzelnen Ressource.
Korrekt: `GET /books/5`

**7. `DELETE /books/5/2024-01-01`**
Verstoß: Unklare Hierarchie – ein Datum als zusätzliches Pfadsegment beim Löschen einer Ressource ergibt keinen Sinn und ist nicht selbstbeschreibend (was soll das Datum bedeuten?).
Korrekt: `DELETE /books/5` (das Datum ist hier irrelevant/überflüssig – falls es sich um einen Verleihvorgang an diesem Datum handelt, wäre das eine eigene Sub-Ressource, z.B. `DELETE /books/5/loans/{loanId}`)

**8. `POST /books/5`**
Verstoß: Falsche HTTP-Methode für eine vollständige Aktualisierung einer bestehenden Ressource mit bekannter ID. POST wird typischerweise für die Erstellung neuer Ressourcen unter einer Collection verwendet (`POST /books`), nicht für eine Ressource mit fester ID.
Korrekt: `PUT /books/5` (vollständiges Ersetzen) oder `PATCH /books/5` (Teilupdate)

**9. `GET /authors/3/books/getBooksByAuthor`**
Verstoß: Verb in der URL ("getBooksByAuthor") und redundante Information (der Autor 3 ist bereits im Pfad enthalten).
Korrekt: `GET /authors/3/books`

**10. `GET /books/active/true`**
Verstoß: Filterkriterien werden als Pfadsegmente kodiert, statt als Query-Parameter. `/active/true` sieht aus wie eine Ressourcenhierarchie ("active" als ID, "true" als Sub-Ressource von "active"), ist aber eigentlich ein Filter.
Korrekt: `GET /books?active=true`

---

## Bonusfrage (zu Nummer 9)

Es gibt zwei mögliche Sichtweisen, je nachdem, welche Ressource im Fokus steht:

**a) Bücher als Hauptressource, gefiltert nach Autor (verschachtelte Ressource):**
`GET /authors/3/books`
→ Drückt aus: "Gib mir alle Bücher, die zu Autor 3 gehören." Die Bücher sind hier eine Sub-Ressource des Autors. Sinnvoll, wenn die Beziehung Autor→Bücher eine feste Containment-Hierarchie ist (z.B. ein Buch kann nur einem Autor zugeordnet sein).

**b) Bücher als Hauptressource mit Filter über Query-Parameter (flache Struktur):**
`GET /books?authorId=3`
→ Drückt aus: "Gib mir alle Bücher, bei denen das Feld authorId = 3 ist." Bücher sind eine eigenständige Top-Level-Ressource, der Autor ist nur ein Filterkriterium.

**Unterschied:** Variante (a) modelliert eine echte hierarchische Beziehung (Ownership/Containment) – z.B. nützlich, wenn Bücher *nur* im Kontext eines Autors existieren oder die Beziehung 1:n streng ist. Variante (b) ist flexibler, wenn Bücher mehrere Beziehungen haben können (z.B. mehrere Autoren, Verlage, Kategorien) und man Filterung allgemein über Query-Parameter lösen möchte. In der Praxis ist (b) oft die pragmatischere/skalierbarere Lösung, während (a) semantisch "schöner" sein kann, wenn die Hierarchie wirklich eindeutig ist.