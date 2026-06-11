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

# Auth

## Luca Berres

---

## Inhaltsverzeichnis

- Einleitung - Was bedeutet Auth?
- Token Authentication
  - Basic Auth
  - Opaque Tokens
  - JWT (JSON Web Tokens)
- Session Authentication
- Authentication
  - Authentifizierung aus User-Sicht
  - Authentifizierung aus Entwickler-Sicht
- Authorization

---

# Einleitung - Was bedeutet Auth?

Authentifizierung bedeutet, zu beweisen, wer Sie sind.

Autorisierung bedeutet, was Sie tun dürfen.

## Token Authentication

### Einleitung

https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Authentication

---

### Basic Auth

---

### Opaque Tokens

---

### JWT (JSON Web Tokens)

## Session Authentication

# Authentication

## Authentifizierung aus User-Sicht

### Registrierung (Register, Sign-up)

- Wenn noch kein Nutzer vorhanden ist
- Formular mit E-Mail und Passwort
- Registrierung über

### Login (Login, Sign-in)

- Account-Erstellung bereits erfolgt
- Formular mit E-Mail und Passwort

---

## Authentifizierung aus Entwickler-Sicht

### Sign-up

## ![alt text](image.png){height=100px}

---

## 🧰 Aufgabe

## Session Authentication

- zustandsbehaftet
- Server

## Token Authentication

- zustandslos
- Client

---

# Authorization
