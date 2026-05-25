---
marp: true
theme: default
paginate: true
_class: title
style: |
  /* Globale Stile & Farbpalette */
  section {
    background-color: #020617; /* Deep Navy Black */
    color: #f1f5f9;            /* Light Gray Text */
    font-family: 'Urbanist', 'Segoe UI', sans-serif;
    padding: 60px;
  }

  /* Farbdefinitionen für Hervorhebungen */
  h1, h2, h3 {
    color: #f8fafc;
  }

  h1 strong, h2 strong, h3 strong, em {
    color: #10b981;          /* Emerald Green Accent */
    font-style: normal;
  }

  p, li {
    color: #cbd5e1;          /* Secondary Muted Text */
  }

  /* Titel-Folie (Spezial-Klasse) */
  section.title {
    background: radial-gradient(circle at 90% 10%, rgba(16, 185, 129, 0.12) 0%, #020617 60%);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  section.title h1 {
    font-size: 3.5rem;
    margin-bottom: 10px;
  }

  /* Inhalts-Folien Titel */
  section:not(.title) h2 {
    border-left: 6px solid #10b981;
    padding-left: 25px;
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  /* Kachel/Boxen-Stil für Listen oder Code */
    /* Große Textboxen / Zitate / Info-Meldungen */
    blockquote, .tile {
    background: #0f172a; /* Tieferes, edles Dunkelblau */
    border-left: 4px solid #10b981; /* Smaragdgrüne Akzentlinie links */
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 0 12px 12px 0;
    padding: 20px 25px;
    margin: 20px 0;
    }

    /* Dezent verfeinerter Text innerhalb von Blockquotes */
    blockquote p {
    color: #f1f5f9;
    margin: 0;
    font-style: italic;
    }

    /* Einzelne Code-Wörter im fließenden Text (Inline Code) */
    :not(pre) > code {
    background: rgba(16, 185, 129, 0.15); /* Transparentes Smaragd-Grün */
    color: #34d399; /* Etwas helleres, knackiges Grün für perfekte Lesbarkeit */
    border: 1px solid rgba(16, 185, 129, 0.3);
    border-radius: 6px;
    padding: 2px 8px;
    font-size: 0.95em;
    font-family: 'Courier New', Courier, monospace;
    }

    table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 30px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }
    th {
        background-color: #10b981; /* Knalliges Smaragdgrün */
        color: #020617;            /* Tiefschwarzer Text für perfekten Kontrast */
        font-weight: bold;
        padding: 18px;
        font-size: 1.3rem;
        text-align: left;
        border: 1px solid #10b981;
    }
    td {
        padding: 18px;
        border: 1px solid #334155;
        background-color: #0f172a; /* Etwas helleres Slate-Schwarz für den Zeilenhintergrund */
        color: #ffffff;            /* Kristallklares Weiß für optimale Lesbarkeit */
        font-size: 1.2rem;
    }
    tr:nth-child(even) td {
        background-color: #1e293b; /* Deutlich abgesetzte Zeilen für bessere Scanbarkeit */
    }
---

# Web Basics Advanced
---
# Wiederholung Web Basics

## Internet Protocol

- Internet Protocol (IP) ist ein Protokoll, das die Adressierung und Weiterleitung von Datenpaketen im Internet ermöglicht.
- Es gibt zwei Versionen von IP: IPv4 und IPv6.
- IPv4 verwendet 32-Bit-Adressen, während IPv6 128-Bit-Adressen verwendet, um die wachsende Anzahl von Geräten im Internet zu unterstützen.
- IP-Adressen werden in der Regel in vier Oktetten dargestellt, z.B.
  - IPv4: `192.168.1.1`
  - IPv6: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`
  - IP-Adressen können statisch oder dynamisch zugewiesen werden, abhängig von der Netzwerkkonfiguration.
- IP-Adressen können auch in privaten Netzwerken verwendet werden, die nicht direkt mit dem Internet verbunden sind, z.B. `192.168.x.x` oder `10.x.x.x`.

---

- IP-Adressen können auch in Kombination mit Subnetzen verwendet werden, um Netzwerke zu segmentieren und die Verwaltung zu erleichtern.
- IP operiert auf der Netzwerkschicht des OSI-Modells und ermöglicht die Kommunikation zwischen Geräten in verschiedenen Netzwerken.
- Ein IP Paket besteht aus einem Header (metadata oder Daten über Daten), der Informationen über die Quelle und das Ziel enthält, sowie einem Payload, der die eigentlichen Daten enthält.
  ![IP Paket](./img/IP.png)

---

## TCP Protocol

- Transmission Control Protocol (TCP) ist ein verbindungsorientiertes Protokoll, das eine zuverlässige Datenübertragung zwischen zwei Endpunkten ermöglicht.
- TCP verwendet eine Handshake-Mechanismus, um eine Verbindung zwischen Sender und Empfänger herzustellen, bevor Daten übertragen werden.
- TCP garantiert die Reihenfolge der Datenpakete und stellt sicher, dass alle Pakete korrekt empfangen werden, indem es Bestätigungen (ACKs) verwendet.
- TCP verwendet auch Flusskontrolle und Staukontrolle, um die Übertragungsgeschwindigkeit zu regulieren und Netzwerküberlastungen zu vermeiden.
- TCP ist eines der Hauptprotokolle, die im Internet verwendet werden, insbesondere für Anwendungen wie Webbrowser, E-Mail und Dateiübertragungen.

---

- TCP arbeitet auf der Transportschicht des OSI-Modells und verwendet Portnummern, um verschiedene Anwendungen zu identifizieren, z.B. Port 80 für HTTP und Port 443 für HTTPS.
- TCP ist ein zuverlässiges Protokoll, aber es kann aufgrund von Verbindungsproblemen oder Netzwerküberlastungen zu Verzögerungen kommen. In solchen Fällen kann das User Datagram Protocol (UDP) als Alternative verwendet werden, das eine schnellere, aber unzuverlässige Datenübertragung ermöglicht.

![TCP](./img/TCP.png)

---

## DNS

- Domain Name System (DNS) ist ein hierarchisches und dezentralisiertes System, das die Übersetzung von menschenlesbaren Domainnamen in IP-Adressen ermöglicht.
- DNS besteht aus verschiedenen Komponenten, darunter:
  - DNS-Resolver: Ein Client, der DNS-Anfragen stellt, um die IP-Adresse eines Domainnamens zu erhalten.
  - DNS-Server: Ein Server, der DNS-Anfragen empfängt und beantwortet. Es gibt verschiedene Arten von DNS-Servern, darunter autoritative Server, rekursive Server und Root-Server.
  - DNS-Zonen: Eine DNS-Zone ist ein Teil des DNS-Namensraums, der von einem bestimmten DNS-Server verwaltet wird. Jede Zone enthält Informationen über die Domainnamen und deren zugehörige IP-Adressen.
  - DNS-Einträge: DNS-Einträge sind Datensätze, die Informationen über Domainnamen und deren zugehörige IP-Adressen enthalten. Es gibt verschiedene Arten von DNS-Einträgen, darunter A-Einträge (IPv4-Adressen), AAAA-Einträge (IPv6-Adressen), CNAME-Einträge (Aliasnamen) und MX-Einträge (Mail-Exchanger).
- DNS ist ein wichtiger Bestandteil des Internets, da es die Benutzerfreundlichkeit verbessert, indem es ermöglicht, Domainnamen anstelle von IP-Adressen zu verwenden, um auf Websites und andere Online-Dienste zuzugreifen.
- DNS ist auch anfällig für Angriffe wie DNS-Spoofing und DDoS-Angriffe, weshalb Sicherheitsmaßnahmen wie DNSSEC (DNS Security Extensions) implementiert wurden, um die Integrität und Authentizität von DNS-Daten zu gewährleisten.

---

- DNS ist ein hierarchisches System, das aus verschiedenen Ebenen besteht, darunter die Root-Ebene, die Top-Level-Domain (TLD)-Ebene und die Second-Level-Domain (SLD)-Ebene. Jede Ebene hat ihre eigenen DNS-Server, die für die Verwaltung der entsprechenden Domainnamen verantwortlich sind.
- DNS-Anfragen werden in der Regel über das User Datagram Protocol (UDP) gesendet, können aber auch über das Transmission Control Protocol (TCP) gesendet werden, insbesondere für größere DNS-Antworten oder bei DNSSEC-Implementierungen.
- DNS ist ein kritischer Bestandteil der Internetinfrastruktur, und Ausfälle oder Angriffe auf DNS-Server können zu erheblichen Störungen im Internet führen, weshalb die Sicherheit und Zuverlässigkeit von DNS von großer Bedeutung sind.
- DNS ist auch ein wichtiger Bestandteil von Content Delivery Networks (CDNs), die DNS verwenden, um Benutzeranfragen an den nächstgelegenen Server weiterzuleiten, um die Ladezeiten von Websites zu verbessern und die Leistung zu optimieren.

---

![DNS](./img/DNS.png)
https://itnext.io/dns-the-best-explanation-ever-hopefully-13cea019b72b

---

## HTTP

- Hypertext Transfer Protocol (HTTP) ist ein Protokoll, das die Kommunikation zwischen Webbrowsern und Webservern ermöglicht.
- HTTP ist ein zustandsloses Protokoll, was bedeutet, dass jede Anfrage unabhängig von vorherigen Anfragen behandelt wird.
- HTTP ist auch die Grundlage für andere Protokolle wie HTTPS (HTTP Secure), das eine sichere Kommunikation über das Internet ermöglicht, indem es SSL/TLS-Verschlüsselung verwendet, um die Vertraulichkeit und Integrität der übertragenen Daten zu gewährleisten.
- HTTP ist ein offenes Protokoll, das von der Internet Engineering Task Force (IETF) standardisiert wird, und es gibt viele Implementierungen von HTTP-Servern und -Clients, die in verschiedenen Programmiersprachen und Plattformen verfügbar sind.

---

- HTTP ist ein wichtiger Bestandteil der modernen Webentwicklung, und das Verständnis von HTTP ist entscheidend für die Entwicklung von Webanwendungen, die effizient und sicher sind.
- HTTP ist auch ein wichtiger Bestandteil von APIs (Application Programming Interfaces), die es Entwicklern ermöglichen, auf Funktionen und Daten von Webdiensten zuzugreifen und diese zu nutzen, um innovative Anwendungen und Dienste zu erstellen.

---

## HTTP Requests/ Responses

- HTTP arbeitet auf der Anwendungsschicht des OSI-Modells. Es gruppiert mehrere TCP oder UDP Pakages in ein Request und Reponse Objekt. Somit wird die Entwicjklung von Webanwendungen vereinfacht, da Entwickler (wir!) sich nicht um unterliegende Netzwerkschichten kümmern müssen.
  ![alt text](img/Request_Response.png)

- Sowohl HTTP-Anfragen als auch HTTP-Antworten bestehen aus einem HTTP-BODY (optional), der Daten enthält einem und HTTP-HEADER, der die Anfrage/Antwort selbst beschreiben (Ursprung, Codierung, Sicherheit, Caching, Inhaltstyp).

---

### Der HTTP-Request (Die Anfrage)

Das schickt dein Browser (oder deine React-App via `fetch`), wenn ein Nutzer eine Webseite aufruft. Im Prinzip ist es en simples Textdokument, welches dann interpretiert wird.

```http
GET /artikel/http-basics HTTP/1.1
Host: www.theseniordev.de
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Accept-Language: de-DE,de;q=0.9
Connection: keep-alive
```

---

#### 🔍 Die Komponenten des Requests:

- **1. Request-Line (Startzeile):** Die allererste Zeile. Sie besteht aus drei Teilen:
- **Methode:** `GET` (Was soll passieren? Hier: Daten abrufen. Andere wären POST, PUT, DELETE).
- **Ziel (URI/Pfad):** `/artikel/http-basics` (Welche Ressource wird gesucht?).
- **Protokollversion:** `HTTP/1.1` (Welche HTTP-Version wird gesprochen?).

- **2. Header (Kopfzeilen):** Alles ab der zweiten Zeile bis zur Leerzeile. Es sind Metadaten in Form von `Schlüssel: Wert`-Paaren.
- _Host:_ An welchen Server richtet sich die Anfrage? (Zwingend erforderlich in HTTP/1.1).
- _User-Agent:_ Wer fragt an? (Infos über den Browser und das Betriebssystem).
- _Accept-Language:_ Welche Sprachen bevorzugt der Client?

- **3. Leerzeile (Blank Line):** Ein extrem wichtiges unsichtbares Element (`\r\n`). Sie signalisiert dem Server: _"Hier enden die Header, jetzt kommt nichts mehr (oder es folgt der Body)."_
- **4. Message Body (Nachrichtenrumpf):** Bei einem `GET`-Request meistens leer (wie in diesem Beispiel). Bei einem `POST`- oder `PUT`-Request würden hier die eigentlichen Daten stehen (z. B. ein JSON-Objekt aus einem Formular).

---

### Die HTTP-Response (Die Antwort)

Das schickt der Server zurück an den Client.

```http
HTTP/1.1 200 OK
Date: Sun, 24 May 2026 19:17:00 GMT
Server: Apache/2.4.41 (Ubuntu)
Content-Type: text/html; charset=UTF-8
Content-Length: 138

<!DOCTYPE html>
<html lang="de">
<head><title>HTTP Basics</title></head>
<body><h1>Willkommen zum HTTP-Tutorial!</h1></body>
</html>
```

---

#### 🔍 Die Komponenten der Response:

- **1. Status-Line (Statuszeile):** Die erste Zeile der Antwort. Auch sie hat drei Teile:
- **Protokollversion:** `HTTP/1.1`
- **Status Code:** `200` (Das maschinenlesbare Ergebnis. 2xx = Erfolg, 4xx = Client-Fehler, 5xx = Server-Fehler).
- **Reason Phrase:** `OK` (Die menschenlesbare Beschreibung des Codes, z. B. "OK" oder "Not Found").

- **2. Header (Kopfzeilen):** Wieder Metadaten, diesmal vom Server.
- _Content-Type:_ Extrem wichtig! Sagt dem Browser, wie er den Body interpretieren soll (Hier: Als HTML-Dokument. Könnte auch `application/json` für eine API sein).
- _Content-Length:_ Die Größe des Bodys in Bytes.
- _Server:_ Verrät (optional), welche Software der Server nutzt.

- **3. Leerzeile (Blank Line):** Trennt strikt die Header von den tatsächlichen Nutzdaten.
- **4. Message Body (Nachrichtenrumpf):** Die eigentlichen Nutzdaten der Antwort. In diesem Fall der HTML-Code, den der Browser rendern soll.

---

### HTTP Methoden

HTTP verwendet verschiedene Methoden, um Aktionen auf Ressourcen durchzuführen:

- **GET** - liest eine Ressource
- **POST** - erstellt eine neue Ressource
- **PUT** - aktualisiert eine bestehende Ressource, indem es die gesamte Ressource ersetzt
- **PATCH** - aktualisiert teilweise eine bestehende Ressource, indem es nur die angegebenen Felder ändert
- **DELETE** - löscht eine Ressource

---

### HTTP Statuscodes

HTTP verwendet Statuscodes, um den Erfolg oder Fehler einer Anfrage anzuzeigen

- **1xx** - Informational: Die Anfrage wurde empfangen und wird weiterverarbeitet, z.B. 100 Continue oder 101 Switching Protocols
- **2xx** - Success: Die Anfrage wurde erfolgreich verarbeitet, z.B. 200 OK oder 201 Created
- **3xx** - Redirection: Weitere Aktionen sind erforderlich, um die Anfrage abzuschließen, z.B. 301 Moved Permanently oder 302 Found
- **4xx** - Client Error: Es gab einen Fehler in der Anfrage des Clients, z.B. 400 Bad Request oder 404 Not Found
- **5xx** - Server Error: Es gab einen Fehler auf dem Server, der die Anfrage nicht verarbeiten konnte, z.B. 500 Internal Server Error oder 503 Service Unavailable

---

### HTTP Versionen

- HTTP/1.1 ist die am weitesten verbreitete Version von HTTP, die seit den 1990er Jahren verwendet wird und grundlegende Funktionen wie persistent connections, chunked transfer encoding und pipelining bietet, um die Leistung von Webanwendungen zu verbessern.
- HTTP/2 ist eine neuere Version von HTTP, die Verbesserungen in der Leistung und Effizienz bietet, z.B. durch die Verwendung von Multiplexing, Header-Komprimierung und Server-Push-Techniken, um die Ladezeiten von Websites zu reduzieren und die Benutzererfahrung zu verbessern.
- HTTP/3 ist die neueste Version von HTTP, die auf dem QUIC-Protokoll basiert und weitere Verbesserungen in der Leistung und Sicherheit bietet, z.B. durch die Verwendung von UDP anstelle von TCP, um die Latenz zu reduzieren und die Verbindungssicherheit zu erhöhen.

---

# HTTP Advanced

## Content Negotiation

Das Zusammenspiel dieser drei Konzepte ist im Grunde ein ständiger Dialog zwischen dem Client (z. B. einem Browser oder einer React-App) und dem Server. Das Ziel: Daten so effizient, passgenau und schnell wie möglich zu übertragen.

Man kann es sich wie eine Bestellung im Restaurant vorstellen: Du sagst dem Kellner, was du gerne hättest und ob du Allergien hast (**Content Negotiation**). Der Koch bereitet das Essen zu, verpackt es platzsparend für den Transport (**Content Compression**) und klebt ein Etikett auf die Box, damit du weißt, was drin ist (**Content Type**).

Im Folgenden ist die genaue Aufschlüsselung, wie diese drei Komponenten ineinandergreifen:

---

### 1. Content Negotiation (Die Verhandlung)

Bevor der Server überhaupt Daten schickt, teilt der Client ihm mit, was er _versteht_ und was er _bevorzugt_. Das passiert direkt im HTTP-Request über verschiedene `Accept`-Header. Der Client eröffnet also die Verhandlung.

- **`Accept`:** "Ich hätte gerne HTML, nehme aber auch reines JSON." (z. B. `Accept: text/html, application/json`)
- **`Accept-Encoding`:** "Ich beherrsche folgende Komprimierungsverfahren: Brotli und Gzip." (z. B. `Accept-Encoding: gzip, deflate, br`)
- **`Accept-Language`:** "Am liebsten auf Deutsch, Englisch geht zur Not auch." (z. B. `Accept-Language: de-DE, en-US;q=0.8`)

---

### 2. Content Type (Das tatsächliche Format)

Nachdem der Server den "Wunschzettel" (Content Negotiation) gelesen hat, entscheidet er, was er zurückschickt. Der Server packt die Daten zusammen und muss dem Client nun exakt sagen, um welches Datenformat es sich handelt, damit der Browser (oder dein JavaScript-Code) weiß, wie er die Bytes interpretieren muss.

- Im Response-Header: **`Content-Type: application/json; charset=utf-8`**
- **Der Zusammenhang:** Der `Content-Type` in der Response ist die direkte Antwort auf den `Accept`-Header im Request.
- [Media types (MIME types)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types) `Content-Type: type/subtype;parameter=value`
  - type: Hauptkategorie (z. B. `text`, `application`, `image`)
  - subtype: Spezifisches Format (z. B. `html`, `json`, `png`)
  - parameter: Zusätzliche Informationen (z. B. `charset=utf-8`)

---

### 3. Content Compression / Encoding (Die Transport-Optimierung)

Da Netzwerkanfragen teuer sind (Ladezeit, Bandbreite), entscheidet der Server oft, die Daten vor dem Senden zu komprimieren (z. B. eine große JSON-Datei aus einer API). Er darf das aber _nur_ tun, wenn der Client in der Negotiation (Schritt 1) gesagt hat, dass er diese Komprimierung auch entpacken kann.

- Der Server komprimiert die Daten und setzt den Response-Header: **`Content-Encoding: br`** (für Brotli).
- **Der Zusammenhang:** Das `Content-Encoding` in der Response ist die direkte Antwort auf den `Accept-Encoding`-Header im Request. Der `Content-Type` bleibt dabei unverändert (es ist immer noch JSON, nur eben komprimiertes JSON).

---

### Der gesamte Zyklus im Code

Wenn du Daten aus einem Backend abrufst, sieht das Zusammenspiel in den HTTP-Headern genau so aus:

**Der Request (Client ➡️ Server)**

```http
GET /api/users HTTP/1.1
Host: api.beispiel.de
Accept: application/json
Accept-Encoding: gzip, br

```

_(Der Client sagt: "Gib mir die User als JSON. Du darfst das Paket gerne mit Gzip oder Brotli komprimieren.")_

---

**Die Response (Server ➡️ Client)**

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Encoding: br
Content-Length: 4096

[... hier folgen die komprimierten Bytes des JSON-Arrays ...]

```

_(Der Server sagt: "Hier ist dein JSON (`Content-Type`). Ich habe es mit Brotli gepackt (`Content-Encoding`), weil du mir vorhin erlaubt hast, das zu tun.")_

---

### Warum das für die Entwicklung wichtig ist

In modernen Fullstack-Frameworks wie Next.js passieren viele dieser Schritte vollautomatisch im Hintergrund. Wenn du eine Next.js-Anwendung baust und deployest, liest der integrierte Node-Server automatisch den `Accept-Encoding`-Header des Browsers aus. Unterstützt der Browser Brotli (`br`), komprimiert Next.js die statischen Assets (HTML, CSS, JS) on-the-fly mit Brotli, setzt den entsprechenden `Content-Encoding`-Header und liefert die Dateien extrem bandbreitenschonend aus, während gleichzeitig der korrekte `Content-Type` für das Frontend deklariert wird.

---

# RESTful **Principles**

Die 6 Leitprinzipien für skalierbare Web-Services nach Roy Fielding

---

## Definition & Ursprung

- **Was ist REST?**
  Representational State Transfer ist kein Protokoll, sondern ein **Architekturstil** für verteilte Hypermedia-Systeme. Er nutzt bestehende Web-Standards (HTTP) optimal aus.

- **Die Herkunft:**
  Das Konzept wurde im Jahr 2000 von **Roy Fielding** in seiner Doktorarbeit vorgestellt. Es beschreibt die Kernmechanismen, die das World Wide Web skalierbar machen.

---

## Die 6 Prinzipien im Überblick

1. **Uniform Interface** (Einheitliche Schnittstelle)
2. **Client-Server** (Klare Trennung der Zuständigkeiten)
3. **Stateless** (Zustandslosigkeit)
4. **Cacheable** (Zwischenspeicherbarkeit)
5. **Layered System** (Mehrschichtige Architektur)
6. **Code on Demand** (Optional: Dynamische Code-Übertragung)

---

## 1. Uniform Interface

Alles klar, verstanden! Wir lassen RPC und Vergleiche mit anderen Architekturen komplett weg und fokussieren uns zu 100 % auf die reine REST-Lehre.

Hier ist die überarbeitete Version der Folien. Ich habe das "Falsch/Richtig"-Beispiel jetzt so umgebaut, dass es nur typische Fehler beim reinen REST-Design (wie das Einbauen von Verben in die URL) thematisiert.

---

# REST Guiding Principles

Wir beginnen mit einem Überblick über die grundlegenden Prinzipien, die RESTful-Architekturen definieren. Diese Prinzipien, die von Roy Fielding eingeführt wurden, sind der Schlüssel zu skalierbaren und robusten Web-APIs.

---

### 1. Uniform Interface

- **Vorteil:** Das System wird vorhersehbar, einheitlich und extrem einfach erweiterbar.
- **Wie wird es erreicht?** Durch strikte Einhaltung standardisierter Rege
- **RESTful Design:** Jede URI benennt **Substantive** (Ressourcen), auf die über standardisierte **HTTP-Verben** (wie `GET`, `POST`, `PUT`, `DELETE`) zugegriffen wird.

---

#### Beispiele für das URI-Design:

- `POST /createUser`
- `GET /getUserById?id=45`
- `POST /updateUser/45`
- `GET /deleteUser/45`

_Warum falsch?_ Das HTTP-Protokoll bringt die Aktions-Verben bereits mit. Zusätzliche Verben im Pfad machen die API unübersichtlich und redundant.

- `POST /users` (Erstelle einen Nutzer)
- `GET /users/45` (Hole Nutzer 45)
- `PUT /users/45` (Aktualisiere Nutzer 45)
- `DELETE /users/45` (Lösche Nutzer 45)

_Warum richtig?_ Die URI benennt nur das "Was" (die Ressource). Die HTTP-Methode definiert das "Wie" (die Aktion).

---

#### URI-Struktur erklärt

Dies zeigt, wie die verschiedenen Teile einer URI zusammenarbeiten, um Ressourcen zu identifizieren und Aktionen zu steuern.

- **Ressourcenidentifizierung:** Der `path` (Pfad) identifiziert die Ressource. Zum Beispiel `/users` für die Sammlung oder `/users/45` für eine bestimmte Instanz. Hier werden _ausschließlich_ Substantive verwendet.
- **Aktionssteuerung:** Die HTTP-Methode (z. B. `GET` oder `POST`, nicht Teil der URI) bestimmt die eigentliche Aktion.
- **Abfrageparameter:** Der `query` (Abfrage) wird verwendet, um Antworten zu filtern, zu sortieren oder zu paginieren (z. B. `?search=bogdan`). Dies hält die Basis-URIs sauber und übersichtlich.

---

#### Die 4 Uniform-Constraints

- **Ressourcen-Identifizierung:** Jede Ressource ist über eine eindeutige URI ansprechbar (z.B. `GET /api/users/42`).
- **Manipulation durch Repräsentation:** Der Client besitzt nicht die echten DB-Daten, sondern modifiziert Ressourcen via Repräsentationen (JSON, XML).
- **Selbstbeschreibende Nachrichten:** Jeder Request/Response enthält alle Metadaten (Headers), die erklären, wie die Nachricht zu interpretieren ist (z.B. `Content-Type`).
- **HATEOAS:** _Hypermedia as the Engine of Application State_. Der Server liefert Links zu weiteren Aktionen mit.

---

### 2. Client-Server-Trennung

- **Klare Zuständigkeiten:** Das Frontend (Client) kümmert sich ausschließlich um die Benutzeroberfläche und die User Experience. Das Backend (Server) übernimmt Datenhaltung, Sicherheit und Geschäftslogik.

- **Die Stärke:**
  Beide Systeme können unabhängig voneinander weiterentwickelt, skaliert oder technologisch ausgetauscht werden.

---

### 3. Zustandslosigkeit (Stateless)

- **Die Kernregel:** Der Server speichert **keinen** Sitzungskontext (Session-State) über den Client zwischen zwei Anfragen.

- **Jeder Request ist autark:**
  Jede einzelne HTTP-Anfrage muss alle Informationen enthalten, die für das Verstehen und Verarbeiten notwendig sind (z.B. Authentifizierungs-Token im Header).

- **Ergebnis:** Starke Skalierung möglich:
- Ein State (z.B. Login Zustand  ) würde massiven overhead erzeugen: DIes müsste im RAM oder in der Datenbank gespeichert werden. Wenn es gar keinen State (Zustand) gibt kann einfach sklaiert (=mehr Traffic auf Webse) werden

  - Massives **Load Balancing** wird möglich. Jeder Server im Cluster kann jeden Request sofort verarbeiten.

---

### 4. Cacheable

**Effizienz durch Caching:**
Server-Antworten müssen implizit oder explizit als cachebar deklariert werden. Das spart Bandbreite, schont Server-Ressourcen und senkt die Latenz drastisch.

### 5. Layered System

**Mehrschichtiges System (Layered System):**
Der Client kann nicht wissen, ob er direkt mit dem Endserver oder einem Proxy (= Stellvetreter z.B. Load Balancer, verteilt Traffic um auf verschiedene Server um Last zu verteiln) kommuniziert. Schichten verbessern die Sicherheit und die Skalierbarkeit.

---

### 6. Code on Demand (Optional)

- **Das Konzept:**
  Der Server kann die Funktionalität des Clients temporär erweitern, indem er ausführbare Logik direkt an ihn überträgt.

- **Praxisbeispiele:**
  - Senden von **JavaScript-Skripten**, die dynamisch im Browser des Nutzers ausgeführt werden.
  - Historisch: Java-Applets oder Flash.

- _Hinweis:_ Dies ist das einzige **optionale** Prinzip. Viele moderne APIs verzichten darauf.

---

### Zusammenfassung der Vorteile

| REST Prinzip          | Primärer Vorteil                                 |
| :-------------------- | :----------------------------------------------- |
| **Uniform Interface** | Einfachheit, Vorhersehbarkeit & Sichtbarkeit     |
| **Stateless**         | Unbegrenzte horizontale Skalierbarkeit           |
| **Client-Server**     | Portabilität der UI & Unabhängigkeit der Systeme |
| **Cacheable**         | Signifikante Steigerung der Netzwerk-Performance |

---

## Idempotenz

> "Eine Operation ist idempotent, wenn sie mehrfach ausgeführt werden kann, ohne dass das Ergebnis über die erste Ausführung hinaus verändert wird."

<div style="display: flex; gap: 40px; margin-top: 30px;">
<div style="flex: 1;">
<h3>Mathematischer Kontext</h3>
<p>Eine Funktion <code>f(x)</code> ist idempotent, wenn gilt:</p>
<p style="text-align: center; font-size: 1.5rem; color: #10b981;"><strong>f(f(x)) = f(x)</strong></p>
<p>Beispiele: Die Multiplikation mit 0 oder die Betragsfunktion <code>abs(x)</code>.</p>
</div>

<div style="flex: 1;">
<h3>HTTP & API Kontext</h3>
<p>Ein Request ist idempotent, wenn der <strong>Zustand auf dem Server</strong> bei identischen Folge-Requests unverändert bleibt.</p>
<p>Wichtig: Der HTTP-Response-Statuscode darf sich ändern, der Zustand der Ressource hingegen nicht.</p>
</div>
</div>

---

### Alltags-Analogie

<div style="display: flex; gap: 40px;">
<div style="flex: 1; background: #0f172a; padding: 25px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
<h3>🛗 Der Fahrstuhl-Knopf</h3>
<p><strong>Idempotent:</strong> Egal wie oft du den Knopf für das 5. Stockwerk drückst: Der Fahrstuhl fährt in das 5. Stockwerk. Das Ergebnis bleibt beim 2. oder 100. Klick absolut identisch.</p>
</div>

<div style="flex: 1; background: #0f172a; padding: 25px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
<h3>🍫 Der Snack-Automat</h3>
<p><strong>Nicht Idempotent:</strong> Jedes Mal, wenn du den Knopf drückst (und bezahlst), fällt ein neuer Snack heraus. Dein Kontostand sinkt weiter und der Vorrat im Automaten verringert sich.</p>
</div>
</div>

---

### Warum ist das wichtig?

Gefahrlose Retries im Frontend ermöglichen.
In instabilen Netzwerken sind **Retries** (Wiederholungsanfragen) unvermeidlich.

* **Das Problem:** Ein Client sendet einen Request, der Server verarbeitet ihn erfolgreich, aber die Server-Antwort geht auf dem Rückweg im Netzwerk verloren.
* **Die Lösung:** Ist die HTTP-Methode *idempotent*, darf der Client (oder die Axios/Fetch-Logik im Frontend) den Request bei einem Timeout einfach gefahrlos noch einmal senden.
* **Kritischer Anwendungsfall:** "Bestellung abschicken" (meist `POST`) vs. "Zahlungsstatus auf bezahlt setzen" (meist `PUT`). Du willst niemals versehentlich Doppelabbuchungen erzeugen.

---



### Methoden-Vergleich im Detail

<div style="display: flex; gap: 40px;">
<div style="flex: 1;">
<h3><code>PUT</code> (Idempotent)</h3>
<p style="color: #34d399;"><code>PUT /users/45</code></p>
<p>Wenn du diesen Request 10-mal hintereinander abschickst, wird der Datensatz mit der ID 45 jedes Mal mit exakt denselben Werten überschrieben. Der Endzustand der Datenbank nach dem ersten und dem zehnten Request ist absolut identisch.</p>
</div>

<div style="flex: 1;">
<h3><code>POST</code> (Nicht Idempotent)</h3>
<p style="color: #f87171;"><code>POST /users</code></p>
<p>Wenn du diesen Request 10-mal abschickst, erzeugst du im schlimmsten Fall 10 identische Nutzer mit 10 verschiedenen IDs in deiner Datenbank. Jede Wiederholung verändert den Zustand des Systems.</p>
</div>
</div>

---



# API **Dokumentation**
Der Vertrag zwischen Backend, Frontend und externen Entwicklern

---

## Warum ist API-Dokumentation wichtig?

> "Code beschreibt, wie das System funktioniert. Dokumentation beschreibt, wie man es benutzt, ohne den Code lesen zu müssen."

* **Das Frontend-Problem:** Ohne Dokumentation raten Frontend-Entwickler, welche Datenstrukturen (`Types`) ein Endpoint erwartet oder zurückgibt.
* **Effizienz:** Spart unzählige Slack-Nachrichten und Meetings der Marke *"Wie hieß das Feld für die ID nochmal?"*.
* **Onboarding:** Neue Teammitglieder können sofort autark mit der API arbeiten.

---

## Der moderne Standard: OpenAPI & Swagger

Heute schreibt niemand mehr API-Dokumentation händisch in Word-Dateien. Man nutzt die **OpenAPI-Spezifikation (OAS)**.

* **Was ist OpenAPI?** Ein standardisiertes Format (in JSON oder YAML), das REST-APIs maschinenlesbar beschreibt.
* **Was ist Swagger?**
  Das bekannteste Tooling-Ökosystem, das aus dieser OpenAPI-Datei automatisch eine **interaktive UI** generiert.
* **Der Vorteil:** Entwickler können direkt im Browser Test-Requests an die API senden ("Try it out").

---

## Core-Elemente einer guten Dokumentation

Jeder dokumentierte Endpoint sollte mindestens folgende 4 Informationen liefern:

1. **Basis-Metadaten:** Die HTTP-Methode und der exakte Pfad (z.B. `POST /api/v1/users`).
2. **Request-Parameter:** Welche Daten müssen in den `Query-Params`, den `Headers` oder im `Body` (Payload) mitgeschickt werden?
3. **Response-Beispiele:** Wie sieht das JSON-Objekt im Erfolgsfall (`200 OK` / `210 Created`) exakt aus?
4. **Fehler-Szenarien:** Welche Statuscodes (`400`, `401`, `404`, `500`) gibt es und wie sieht die Fehlermeldung aus?

---

## Dokumentation-Ansätze im Vergleich

<div style="display: flex; gap: 40px;">
<div style="flex: 1;">
<h3>Code-First Approach</h3>
<p>Die Dokumentation wird **direkt im Code** generiert (z.B. über JSDoc, Decorator in NestJS oder Bibliotheken in Next.js).</p>
<p style="color: #34d399;">✔ Bleibt aktuell, da sie nah am Code lebt.</p>
<p style="color: #f87171;">✘ Code kann durch massig Doku-Kommentare unübersichtlich werden.</p>
</div>

<div style="flex: 1;">
<h3>Design-First Approach</h3>
<p>Die API wird **zuerst** in einem Editor (z.B. Stoplight, Swagger Editor) spezifiziert, bevor Code geschrieben wird.</p>
<p style="color: #34d399;">✔ Frontend & Backend können ab Tag 1 parallel arbeiten (Mocking).</p>
<p style="color: #f87171;">✘ Gefahr, dass Code und Doku später auseinanderlaufen.</p>
</div>
</div>

---

## Best Practices für exzellente Docs

* **Nutze semantische HTTP-Statuscodes:** Dokumentiere nicht nur `200` und `500`. Zeige dem Frontend exakt, wann ein `422` (Unprocessable Entity) oder ein `409` (Conflict) fliegt.
* **Typsicherheit generieren:** Nutze Tools wie `openapi-typescript`. Damit lässt sich die OpenAPI-Doku einlesen, um automatisch **TypeScript-Typen fürs Frontend** zu generieren.
* **Authentifizierung klarmachen:** Es muss sofort ersichtlich sein, welche Endpoints öffentlich sind und welche ein `Authorization: Bearer <Token>` benötigen.

---

# APIs sind Produkte. **Docs die Verpackung.**
Gute Dokumentation entscheidet über den Erfolg einer Architektur.

<div style="margin-top: 60px; font-size: 1.1rem; color: #64748b;">
OpenAPI | Swagger | Readme.io | Redoc
</div>

---


# API **Versionierung**
Evolution ohne Frustration für Frontend und Clients

---

## Warum brauchen wir Versionierung?

> "Eine API ist ein verbindlicher Vertrag. Bricht das Backend den Vertrag, bricht unweigerlich das Frontend."

Software entwickelt sich weiter, und damit auch die Datenstruktur. Wir versionieren APIs, um **Abwärtskompatibilität (Backward Compatibility)** zu garantieren.
 
* Wenn eine React-App Version 1 der API nutzt, darf sie nicht abstürzen, nur weil das Backend-Team an Version 2 arbeitet.
* Beide Versionen müssen für eine Übergangszeit **parallel** betrieben werden.

---

## Wann ist eine Versionierung nötig?

Nicht jede Änderung erfordert eine neue API-Version (z.B. `v2`). Wir unterscheiden strikt:

<div style="display: flex; gap: 40px; margin-top: 30px;">
<div style="flex: 1; background: #0f172a; padding: 25px; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.3);">
<h3 style="color: #34d399;">✔ Non-Breaking Change</h3>
<p><em>Keine neue Version nötig.</em></p>
<ul style="font-size: 1.1rem;">
  <li>Hinzufügen eines <strong>neuen</strong> Feldes im JSON.</li>
  <li>Hinzufügen eines neuen Endpoints.</li>
  <li>Optionale Query-Parameter hinzufügen.</li>
</ul>
</div>

<div style="flex: 1; background: #0f172a; padding: 25px; border-radius: 12px; border: 1px solid rgba(248, 113, 113, 0.3);">
<h3 style="color: #f87171;">✘ Breaking Change</h3>
<p><em>Neue Version (`v2`) zwingend erforderlich!</em></p>
<ul style="font-size: 1.1rem;">
  <li><strong>Löschen</strong> oder <strong>Umbenennen</strong> von Feldern.</li>
  <li>Ändern des Datentyps (z.B. ID von `Int` auf `String`).</li>
  <li>Neue, verpflichtende Parameter/Payloads.</li>
</ul>
</div>
</div>

---

## Strategie 1: URI-Versionierung (Der Standard)

Die Versionsnummer wird direkt als Präfix in den URL-Pfad geschrieben.

* **Beispiel:** `GET https://api.example.com/v1/users`
* **Vorteile:** * Extrem einfach zu implementieren und im Browser zu testen.
  * Für Frontend-Entwickler sofort ersichtlich, welche API genutzt wird.
* **Nachteile:**
  * Bricht streng genommen die REST-Prinzipien (Eine Version ist eigentlich keine "Ressource").

---

## Strategie 2 & 3: Query & Header

<div style="display: flex; gap: 40px;">
<div style="flex: 1;">
<h3>Query Parameter</h3>
<p><code>GET /users?version=1</code></p>
<p>Die Version wird als Filter-Parameter an die URI gehängt.</p>
<p style="color: #34d399;">✔ URL-Pfad bleibt sauber.</p>
<p style="color: #f87171;">✘ Verwirrend, da Query-Parameter eigentlich für Dinge wie Suchen/Sortieren gedacht sind.</p>
</div>

<div style="flex: 1;">
<h3>Header (Content Negotiation)</h3>
<p><code>Accept: application/vnd.api.v1+json</code></p>
<p>Der Client fordert über den HTTP-Header eine spezifische Version an.</p>
<p style="color: #34d399;">✔ Der absolut sauberste "pure" REST-Weg.</p>
<p style="color: #f87171;">✘ Schwer zu debuggen, da man die API nicht mehr einfach in die Browser-URL tippen kann.</p>
</div>
</div>

---

## Vergleich der Strategien

| Methode | REST Konformität | Entwicklerfreundlichkeit | Caching im Browser |
| :--- | :---: | :---: | :---: |
| **URI Path** (`/v1/`) | Niedrig | Sehr hoch | Sehr einfach |
| **Query** (`?v=1`) | Mittel | Hoch | Gut |
| **Header** (`Accept: v1`) | Sehr hoch | Niedrig (Tooling nötig) | Komplexer |

*In der Praxis (z.B. bei Stripe, GitHub oder Twitter) hat sich die **URI-Versionierung** aufgrund der pragmatischen Handhabung klar durchgesetzt.*

---

## Best Practices für Versionierung

1. **Halte es simpel:** Nutze nur Major-Versionen (z.B. `v1`, `v2`). Ein Schema wie `v1.4.2` in der API ist Overkill und führt zu Chaos im Backend-Routing.
2. **Standard-Version definieren:** Wenn ein Client keinen Header oder Pfad angibt, route ihn entweder zur ältesten stabilen Version oder gib einen sauberen Error (`400 Bad Request`) zurück.
3. **Graceful Sunset:** Wenn du `v1` abschaltest, kündige es rechtzeitig an (Deprecation Notices). Nutze in HTTP-Responses den standardisierten `Sunset`-Header mit einem Datum.

---

# Stabile Verträge. **Gute APIs.**
Versionierung ist das Sicherheitsnetz deiner Architektur.

<div style="margin-top: 60px; font-size: 1.1rem; color: #64748b;">
URI Path | Query Params | Custom Headers
</div>