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
  img {
    max-width: 80%;
    max-height: 100%;
    object-fit: contain;
  }
---

# Auth

## Luca Berres

---

# Inhaltsverzeichnis

1. Einleitung - Was bedeutet Auth?
2. Authentication
   - Registrierung
   - Login
3. Token Authentication
   - Basic Auth
   - Opaque Tokens
   - JWT
4. Session Authentication
5. Authorization

---

# Einleitung - Was bedeutet Auth?

Authentifizierung bedeutet, zu beweisen, wer Sie sind.

Autorisierung bedeutet, festzulegen, was Sie tun dürfen.

---

# Authentication

## Authentication aus User-Sicht

### Registrierung (Register, Sign-up)

- Wenn noch kein Nutzer vorhanden
- Formular mit E-Mail Passwort
- Registrierung über

### Login (Login, Sign-in)

- Account-Erstellung bereits erfolgt
- Formular mit E-Mail und Passwort

---

## Authentication aus Entwickler-Sicht

### Sign-up

![alt text](image.png){height=100px}

---

# Token Authentication

## Einleitung

https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Authentication

---

## Basic Auth

---

## Opaque Tokens

---

## JWT (Json Web Tokens)

---

# 🧰 Aufgabe

---

# Session Authentication

- zustandsbehaftet
- server

## Abgrenzung zu Token Authentication

- zustandslos
- client

---

# Authorization
