---
theme: the-unnamed
title: Fullstack Vorlesung
drawings:
  persist: false
transition: slide-left
comark: true
duration: 35min
---

# Web Basics Advanced


---


# Netzwerkklassen und Netzwerktechnologien

```mermaid
graph TD

    N[Netzwerkklassen]

    N --> PAN["PAN<br/>Personal Area Network"]
    N --> LAN["LAN<br/>Local Area Network"]
    N --> MAN["MAN<br/>Metropolitan Area Network"]
    N --> WAN["WAN<br/>Wide Area Network"]

    PAN --> WPAN["WPAN <br/>Wireless Personal Area Network"]

    WAN --> Internet[Internet]
    WAN --> Mobilfunk[Mobilfunk]
    WAN --> LPWAN["LPWAN<br/>Low Power Wide Area Network"]

    %% Technologien

    WPAN --> Bluetooth[Bluetooth]
    WPAN --> NFC[NFC]
    WPAN --> ZigBee[ZigBee]

    LAN --> Ethernet[Ethernet]
    LAN --> WLAN[WLAN]

    Mobilfunk --> G4[4G / LTE]
    Mobilfunk --> G5[5G]

    LPWAN --> LoRaWAN[LoRaWAN]
    LPWAN --> NBIoT[NB-IoT]
    LPWAN --> Sigfox[Sigfox]


    %% Farben Netzwerkklassen
    classDef netclass fill:#4A90E2,color:#fff,stroke:#1F4E79,stroke-width:2px;

    %% Farben Technologien
    classDef tech fill:#58D68D,color:#000,stroke:#1D8348,stroke-width:2px;

    %% Farben Funktechnologien/Protokolle
    classDef radio fill:#F5B041,color:#000,stroke:#AF601A,stroke-width:2px;

    class N,PAN,WPAN,LAN,MAN,WAN,Internet,Mobilfunk,LPWAN netclass;

    class Bluetooth,NFC,ZigBee,Ethernet,WLAN,G4,G5,NBIoT,Sigfox,LoRaWAN tech;

```

**PAN → LAN → MAN → WAN** beschreibt die zunehmende Reichweite.

🟦 Blau = Netzwerkklassen <br> 🟩 Grün = Netzwerktechnologien<br>

---

# Die relevanteste Netzwerkprotokoll-Familie: Die Internetprotokollfamilie

<table>
  <tbody>
    <tr>
      <th>OSI-Modell</th>
      <th>Technologie-Beispiele</th>
      <th>TCP/IP-Stack</th>
      <th>Technologie-Beispiele</th>
    </tr>
    <tr>
      <td>Anwendung (7)</td>
      <td>HTTP, HTTPS, DNS, SMTP</td>
      <td rowspan="3">Anwendung</td>
      <td rowspan="3">HTTP, HTTPS, DNS, SMTP</td>
    </tr>
    <tr>
      <td>Darstellung (6)</td>
      <td>TLS, JPEG, UTF-8</td>
    </tr>
    <tr>
      <td>Sitzung (5)</td>
      <td>RPC, NetBIOS</td>
    </tr>
    <tr>
      <td>Transport (4)</td> 
      <td>TCP, UDP</td>
      <td>Transport</td>
      <td>TCP, UDP</td>
    </tr>
    <tr>
      <td>Vermittlung (3)</td>
      <td>IP, ICMP, ARP</td>
      <td>Internet</td>
      <td>IP</td>
    </tr>
    <tr>
      <td>Sicherung (2)</td>
      <td>Ethernet, WLAN, LoRaWAN</td>
      <td rowspan="2">Netzzugang</td>
      <td rowspan="2">Ethernet</td>
    </tr>
    <tr>
      <td>Bitübertragung (1)</td>
      <td>Kabel, Glasfaser, Funk, LoRa</td>
    </tr>
  </tbody>
</table>

- **OSI** erklärt, **wie** Netzwerkkommunikation theoretisch funktioniert, **TCP/IP** beschreibt, **wie das Internet tatsächlich arbeitet**.
- Mehrere OSI-Schichten werden im TCP/IP-Stack zusammengefasst

---

## 2.1 Internet Protocol

🚫 **Problem:** Milliarden von Geräten sind weltweit vernetzt — aber wie findet ein Datenpaket seinen Weg vom Absender zum richtigen Empfänger?

✅ **Lösung:** Das Internet Protocol (IP) gibt jedem Gerät eine eindeutige Adresse und definiert, wie Datenpakete adressiert und über Netzwerke weitergeleitet werden.

Ein IP-Paket besteht aus einem **Header** (Metadaten über Quelle und Ziel in Form einer IP-Adresse) und einem **Payload** (die eigentlichen Nutzdaten).
![IP Paket](./img/IP.png)

---

### 🚫 Problem 1: Es gibt mehr Geräte als öffentliche IPv4-Adressen

IPv4 verwendet 32-Bit-Adressen und bietet damit nur rund 4,3 Milliarden mögliche Adressen.

#### ✅ Lösung A: Private Netzwerke + NAT

- Geräte in lokalen Netzwerken erhalten **private IP-Adressen**:
  - `10.0.0.0/8`
  - `172.16.0.0/12`
  - `192.168.0.0/16`
- Diese Adressbereiche können weltweit mehrfach verwendet werden.
- **NAT (Network Address Translation)** übersetzt die privaten Adressen beim Zugriff auf das Internet in eine öffentliche IP-Adresse.
- Dadurch können viele Geräte dieselbe öffentliche IPv4-Adresse teilen.

---

**Beispiel:**

```text
Laptop      192.168.1.10
Smartphone  192.168.1.11
Smart-TV    192.168.1.12
      │
      ▼
Router (NAT)
Öffentliche IP: 80.123.45.67
      │
      ▼
Internet
```

<br>

#### ✅ Lösung B: IPv6

- **IPv6** erweitert den Adressraum von 32 auf 128 Bit und schafft damit praktisch unbegrenzt viele Adressen.
  - IPv4: `192.168.1.1`
  - IPv6: `2001:db8:85a3::8a2e:370:7334`

💡 Fazit:
Private Netze + NAT = heutige praktische Lösung des IPv4-Mangels, da IPv6 noch aufgrund von u.a. Hardwarekompatibilität nicht flächendeckend eingesetzt wird.

IPv6 = langfristige architektonische Lösung des IPv4-Mangels

---

#### **🚫 Problem 2: Geräte wechseln ständig das Netzwerk**

Laptops und Smartphones verbinden sich regelmäßig mit unterschiedlichen Netzwerken. Eine manuelle Konfiguration wäre aufwendig und fehleranfällig.

#### **✅ Lösung: DHCP**

- **DHCP (Dynamic Host Configuration Protocol)** vergibt IP-Adressen automatisch.
- Geräte erhalten beim Verbinden eine passende Konfiguration.
- Statische IP-Adressen werden hauptsächlich für Server und Netzwerkkomponenten verwendet.

<br>

#### **🚫 Problem 3: Große Netzwerke werden unübersichtlich**

Wenn alle Geräte im selben Netzwerk liegen, steigen Verwaltungsaufwand und Netzwerkverkehr.

✅ Lösung: Subnetze

- Netzwerke werden in kleinere logische Bereiche aufgeteilt.
- Vorteile:
  - bessere Übersicht
  - einfachere Verwaltung

---

### 💡 Fazit

Die Skalierbarkeit des Internets basiert auf vier zentralen Konzepten:

- **IPv6** erweitert den verfügbaren Adressraum.
- **Private Netzwerke und NAT** reduzieren den Bedarf an öffentlichen IPv4-Adressen.
- **DHCP** automatisiert die Adressvergabe.
- **Subnetze** strukturieren große Netzwerke effizient.

---

## 2.2 TCP Protocol

- Transmission Control Protocol (TCP) ist ein verbindungsorientiertes Protokoll, das eine zuverlässige Datenübertragung zwischen zwei Endpunkten ermöglicht.
- TCP verwendet einen Handshake-Mechanismus, um eine Verbindung zwischen Sender und Empfänger herzustellen, bevor Daten übertragen werden.
- TCP garantiert die Reihenfolge der Datenpakete und stellt sicher, dass alle Pakete korrekt empfangen werden, indem es Bestätigungen (ACKs) verwendet.
- TCP verwendet auch Flusskontrolle und Staukontrolle, um die Übertragungsgeschwindigkeit zu regulieren und Netzwerküberlastungen zu vermeiden.
- TCP ist eines der Hauptprotokolle, die im Internet verwendet werden, insbesondere für Anwendungen wie Webbrowser, E-Mail und Dateiübertragungen.

---

- TCP arbeitet auf der Transportschicht des OSI-Modells und verwendet Portnummern, um verschiedene Anwendungen zu identifizieren, z.B. Port 80 für HTTP und Port 443 für HTTPS.
- TCP ist ein zuverlässiges Protokoll, aber es kann aufgrund von Verbindungsproblemen oder Netzwerküberlastungen zu Verzögerungen kommen. In solchen Fällen kann das User Datagram Protocol (UDP) als Alternative verwendet werden, das eine schnellere, aber unzuverlässige Datenübertragung ermöglicht.

![TCP](./img/TCP.png)

---

## 2.3 DNS

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

## 2.4 HTTP

- Hypertext Transfer Protocol (HTTP) ist ein Protokoll, das die Kommunikation zwischen Webbrowsern und Webservern ermöglicht.
- HTTP ist ein zustandsloses Protokoll, was bedeutet, dass jede Anfrage unabhängig von vorherigen Anfragen behandelt wird.
- HTTP ist auch die Grundlage für andere Protokolle wie HTTPS (HTTP Secure), das eine sichere Kommunikation über das Internet ermöglicht, indem es SSL/TLS-Verschlüsselung verwendet, um die Vertraulichkeit und Integrität der übertragenen Daten zu gewährleisten.
- HTTP ist ein offenes Protokoll, das von der Internet Engineering Task Force (IETF) standardisiert wird, und es gibt viele Implementierungen von HTTP-Servern und -Clients, die in verschiedenen Programmiersprachen und Plattformen verfügbar sind.

---

- HTTP ist ein wichtiger Bestandteil der modernen Webentwicklung, und das Verständnis von HTTP ist entscheidend für die Entwicklung von Webanwendungen, die effizient und sicher sind.
- HTTP ist auch ein wichtiger Bestandteil von APIs (Application Programming Interfaces), die es Entwicklern ermöglichen, auf Funktionen und Daten von Webdiensten zuzugreifen und diese zu nutzen, um innovative Anwendungen und Dienste zu erstellen.

---

### 2.4.1 HTTP Requests/ Responses

- HTTP arbeitet auf der Anwendungsschicht des OSI-Modells. Es gruppiert mehrere TCP oder UDP Pakages in ein Request und Reponse Objekt. Somit wird die Entwicklung von Webanwendungen vereinfacht, da Entwickler (wir!) sich nicht um zugrunde liegende Netzwerkschichten kümmern müssen.
  ![alt text](./img/Request_Response.png)

- Sowohl HTTP-Anfragen als auch HTTP-Antworten bestehen aus einem HTTP-BODY (optional), der Daten enthält einem und HTTP-HEADER, der die Anfrage/Antwort selbst beschreiben (Ursprung, Codierung, Sicherheit, Caching, Inhaltstyp).

---

## 2.4.1.1 Der HTTP-Request (Die Anfrage)

Das schickt Ihr Browser (oder Ihre React-App via `fetch`), wenn ein Nutzer eine Webseite aufruft. Im Prinzip ist es ein simples Textdokument, welches dann interpretiert wird.

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

## Aufgabe: HTTP-API mit dem nativen Node.js http-Modul

Erstelle einen einfachen HTTP-Server mit dem eingebauten Node.js `http`-Modul **ohne externe Frameworks** (kein Express, kein Fastify). Der Server soll folgende Endpunkte bereitstellen:

---

| Methode | Route        | Beschreibung                                                                |
| ------- | ------------ | --------------------------------------------------------------------------- |
| `GET`   | `/`          | Gibt eine HTML-Seite mit einer Übersicht aller Routen zurück                |
| `GET`   | `/health`    | Gibt ein JSON-Objekt mit dem Status und der Laufzeit (`uptime`) zurück      |
| `GET`   | `/users`     | Gibt alle Benutzer als JSON-Array zurück                                    |
| `GET`   | `/users/:id` | Gibt einen einzelnen Benutzer anhand der ID zurück (404 bei nicht gefunden) |
| `POST`  | `/users`     | Legt einen neuen Benutzer an (erwartet `name` und `role` im JSON-Body)      |

---

**Anforderungen:**

- Nutze passende HTTP-Statuscodes (200, 201, 400, 404)
- Für unbekannte Routen: antworte mit 404 und einer Fehlermeldung

Tipps:

- `const http = require('http')` lädt das eingebaute HTTP-Modul von Node.js
- Einen Server erstellst du mit `http.createServer((req, res) => { ... })`
- Den Pfad und Query-Parameter kannst du mit `url.parse(req.url, true)` auslesen
- Die HTTP-Methode steckt in `req.method`, der Pfad in `parsed.pathname`
- JSON-Antworten sendest du typischerweise mit `res.writeHead(...); res.end(JSON.stringify(data))`
- Für HTML kannst du `res.writeHead(...)` verwenden
- Bei `POST`-Requests liest du den Body oft über `req.on('data', ...)` und `req.on('end', ...)`
- IDs aus der URL kannst du z. B. mit einem Regex wie `pathname.match(/^\/users\/(\d+)$/)` auslesen

---

## Content Negotiation

Das Zusammenspiel dieser drei Konzepte ist im Grunde ein ständiger Dialog zwischen dem Client (z. B. einem Browser oder einer React-App) und dem Server. Das Ziel: Daten so effizient, passgenau und schnell wie möglich zu übertragen.

Man kann es sich wie eine Bestellung im Restaurant vorstellen: Sie sagen dem Kellner, was Sie möchten und ob Sie Allergien haben (**Content Negotiation**). Der Koch bereitet das Essen zu, verpackt es platzsparend für den Transport (**Content Compression**) und klebt ein Etikett auf die Box, damit Sie wissen, was drin ist (**Content Type**).

Im Folgenden ist die genaue Aufschlüsselung, wie diese drei Komponenten ineinandergreifen:

---

### 1. Content Negotiation (Die Verhandlung)

Bevor der Server überhaupt Daten schickt, teilt der Client ihm mit, was er _versteht_ und was er _bevorzugt_. Das passiert direkt im HTTP-Request über verschiedene `Accept`-Header. Der Client eröffnet also die Verhandlung.

- **`Accept`:** "Ich hätte gerne HTML, nehme aber auch reines JSON." (z. B. `Accept: text/html, application/json`)
- **`Accept-Encoding`:** "Ich beherrsche folgende Komprimierungsverfahren: Brotli und Gzip." (z. B. `Accept-Encoding: gzip, deflate, br`)
- **`Accept-Language`:** "Am liebsten auf Deutsch, Englisch geht zur Not auch." (z. B. `Accept-Language: de-DE, en-US;q=0.8`)

---

### 2. Content Type (Das tatsächliche Format)

Nachdem der Server den "Wunschzettel" (Content Negotiation) gelesen hat, entscheidet er, was er zurückschickt. Der Server packt die Daten zusammen und muss dem Client nun exakt sagen, um welches Datenformat es sich handelt, damit der Browser (oder Ihr JavaScript-Code) weiß, wie er die Bytes interpretieren muss.

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

Wenn Sie Daten aus einem Backend abrufen, sieht das Zusammenspiel in den HTTP-Headern genau so aus:

**Der Request (Client ➡️ Server)**

```http
GET /api/users HTTP/1.1
Host: api.beispiel.de
Accept: application/json
Accept-Encoding: gzip, br

```

_(Der Client sagt: "Gib mir die User als JSON. Sie dürfen das Paket gerne mit Gzip oder Brotli komprimieren.")_

---

**Die Response (Server ➡️ Client)**

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Encoding: br
Content-Length: 4096

[... hier folgen die komprimierten Bytes des JSON-Arrays ...]

```

_(Der Server sagt: "Hier ist Ihr JSON (`Content-Type`). Ich habe es mit Brotli gepackt (`Content-Encoding`), weil Sie mir vorhin erlaubt haben, das zu tun.")_

---

### Warum das für die Entwicklung wichtig ist

In modernen Fullstack-Frameworks wie Next.js passieren viele dieser Schritte vollautomatisch im Hintergrund. Wenn Sie eine Next.js-Anwendung bauen und deployen, liest der integrierte Node-Server automatisch den `Accept-Encoding`-Header des Browsers aus. Unterstützt der Browser Brotli (`br`), komprimiert Next.js die statischen Assets (HTML, CSS, JS) on-the-fly mit Brotli, setzt den entsprechenden `Content-Encoding`-Header und liefert die Dateien extrem bandbreitenschonend aus, während gleichzeitig der korrekte `Content-Type` für das Frontend deklariert wird.

---

## Demo

siehe Video

---

## Aufgabe: Content Negotiation & Compression

Erweitere einen bestehenden Node.js HTTP-Server (ohne Frameworks) um folgende Funktionen:

### 1. Content Negotiation (Accept Header)

Der Server muss den `Accept`-Header auswerten und das Antwortformat bestimmen.

### Unterstützte Formate:

- `application/json` → JSON-Antwort
- `text/html` → HTML-Antwort
- alles andere → `406 Not Acceptable`

---

### 2. Content Compression (Accept-Encoding)

Der Server soll zusätzlich den `Accept-Encoding`-Header unterstützen.

### Verhalten:

- Wenn `gzip` im `Accept-Encoding` enthalten ist:
  - Response wird mit gzip komprimiert
  - Header setzen:

    ```
    Content-Encoding: gzip
    ```

- sonst:
  - unkomprimierte Antwort

---

### 3. Wichtige Header

- `Accept` → bestimmt Format (JSON / HTML)
- `Accept-Encoding` → bestimmt Kompression
- `Content-Type` → Antwortformat
- `Content-Encoding` → Kompression
