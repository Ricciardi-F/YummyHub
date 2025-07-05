> 🇬🇧 This README is also available in [English](./README.md)

# Yummi-Hub App

[![Vercel Deploy](https://vercel.badge.ryanford.dev/api/pin?url=https://yummy-97jg1ks7l-ricciardi-fs-projects.vercel.app)](https://yummy-97jg1ks7l-ricciardi-fs-projects.vercel.app)
[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react)](https://reactjs.org/)
[![Bootstrap 5](https://img.shields.io/badge/Styled%20with-Bootstrap%205-7952B3?logo=bootstrap)](https://getbootstrap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#license)

Un'applicazione frontend creata con **React** e **Bootstrap** per esplorare ricette culinarie.  
L'interfaccia è basata su un layout a **sidebar** più un'area dettagli, ispirata al design one-page.  
Il progetto è pensato come esercizio educativo, creato parallelamente alla fruizione di un corso su **React**, utilizzando un flusso di sviluppo ispirato alla metodologia **Agile**.

---

## Obiettivi del progetto

- Creare una UI moderna per la consultazione di ricette
- Utilizzare dati statici (mock JSON) e successivamente integrarli con [TheMealDB API](https://www.themealdb.com/api.php)
- Gestire il layout con Bootstrap (desktop + mobile responsive)
- Organizzare il lavoro in Sprint usando un approccio Agile basato su Kanban
- Documentare ogni fase del progetto in modo chiaro e riutilizzabile

---

## 🛠️ Stack Tecnologico

- **Frontend:** React (Vite o Create React App)
- **UI/Styling:** Bootstrap 5
- **Mock API/Data:** JSON locale e successiva integrazione con TheMealDB
- **Gestione progetto:** Focalboard, metodologia Agile kanban

---


## 🚀 Roadmap (Sprint Planning)


### ✅ Sprint 1 – Setup e Layout Base
- [x] Mockup UI disegnato (Excalidraw)
- [x] Setup progetto React con Bootstrap
- [x] Creazione layout base con Header, Sidebar, MainContent
- [x] Visualizzazione dati da file JSON mock
- [x] Comportamento responsive di base su mobile (burger menu)
- [x] Visualizzazione dettagli ricetta su selezione
- [x] Struttura componenti reattiva

### ✅ Sprint 2 – Integrazione API e miglioramenti UX
- [x] Implementazione barra di ricerca (UI e logica)
- [x] Chiamate API multiple (nome, ingrediente, categoria)
- [x] Eliminazione duplicati e limitazione risultati (max 10)
- [x] Chiamata secondaria per dettagli ricetta tramite ID
- [x] Visualizzazione dinamica dei dettagli ricetta
- [x] Messaggi guida e fallback per ricetta non selezionata
- [x] Fallback per ingredienti opzionali

### ✅ Sprint 3 – Refactoring e ottimizzazione UI
- [x] Visualizzazione ingredienti con quantità (rispetto a mock)
- [x] Estrazione componente IngredientList da MainContent
- [x] Creazione directory components/ e refactor dei file
- [x] Pulizia codice App.jsx e riorganizzazione logica
- [x] Miglioramento UI desktop e mobile
- [x] Messaggio per ricerche senza risultati
- [x] Gestione stato loading e ricetta vuota (backlog)

### ⏳ Sprint 4 – Deploy e distribuzione
- [x] Pulizia finale del codice (console.log, commenti inutili)
- [x] Creazione file .env per URL API
- [x] Traduzione interfaccia in inglese
- [x] Verifica build di produzione (`npm run build`)
- [x] Creazione repo GitHub e push del progetto
- [x] Deploy su Vercel
- [x] Scrittura README.md finale in inglese (con link)

---

## 📷 Mockup

Mockup creato con [Excalidraw](https://excalidraw.com) e versione statica in HTML.  
Sono disponibili nella cartella [`/mockups`](./mockups).

---

## 📦 Installazione e Avvio

```bash
# Clona il progetto
git clone https://github.com/Ricciardi-F/recipes.git
cd recipes

# Installa le dipendenze
npm install

# Avvia il progetto in locale
npm start


---


## 🌐 Live Demo

Guarda la demo live qui:
👉 [yummy-97jg1ks7l-ricciardi-fs-projects.vercel.app](https://yummy-97jg1ks7l-ricciardi-fs-projects.vercel.app)
---

## 👨‍🍳 Autore

- **Federico** – sviluppatore curioso e appassionato, con focus su progetti educativi e solidi flussi di lavoro.  
- 🧑‍💻 GitHub: [github.com/Ricciardi-F](https://github.com/Ricciardi-F)

---

## 📄 Licenza

Progetto personale senza scopo di lucro, pubblicato a fini educativi.  
Basato su dati pubblici disponibili da TheMealDB.

---