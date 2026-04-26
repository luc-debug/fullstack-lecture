---
marp: true
paginate: true
size: 4:3
style: |
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
  img {
    max-width: 80%;
    max-height: 100%;
    object-fit: contain;
  }
---

# Auth

## Luca Berres

---

# Einleitung - Was bedeutet Auth?

Authentifizierung bedeutet, zu beweisen, wer du bist.

Autorisierung bedeutet, was du tun darfst.

## Token Authentication

### Einleitung

https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Authentication

---

### Basic Auth

---

### Opaque Tokens

---

### JWT (Json Web Tokens)

## Session Authentication

# Authentication

## Authenticatuion aus User-Sicht

### Registrierung (Register, Sign-up)

- Wenn noch kein Nutzer vorhanden
- Formular mit E-Mail Passwort
- Registrierung über

### Login (Login, Sign-in)

- Account-Erstellung bereits erfolgt
- Formualr mit E-Mail und Passwort

---

## Authentication aus Entwickler-Sicht

### Sign-up

## ![alt text](image.png){height=100px}


---

## 🧰 Aufgabe


## Session Authentication

- zustandsbehaftet
- server

## Token Authentication

- zustandslos
- client

###

---

# Authorization
