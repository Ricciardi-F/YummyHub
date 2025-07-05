> 🇮🇹 Leggi questo file in italiano: [Italian](./LEGGIMI.md)

# Yummy-Hub App

[![Vercel Deploy](https://vercel.badge.ryanford.dev/api/pin?url=https://yummy-97jg1ks7l-ricciardi-fs-projects.vercel.app)](https://yummy-97jg1ks7l-ricciardi-fs-projects.vercel.app)
[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react)](https://reactjs.org/)
[![Bootstrap 5](https://img.shields.io/badge/Styled%20with-Bootstrap%205-7952B3?logo=bootstrap)](https://getbootstrap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#license)

A frontend application built with **React** and **Bootstrap** to explore culinary recipes.  
The interface is based on a **sidebar + details area** layout, inspired by a one-page design.  
This project was created as an educational exercise, developed alongside a **React course**, using a workflow inspired by **Agile methodology**.

---

## Project Goals

- Create a modern UI for browsing recipes  
- Start with static mock data (JSON), then integrate with [TheMealDB API](https://www.themealdb.com/api.php)  
- Use Bootstrap for layout and responsive design (desktop + mobile)  
- Organize the work in Sprints using an Agile Kanban approach  
- Document each project phase clearly and in a reusable way  

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite or Create React App)  
- **UI/Styling:** Bootstrap 5  
- **Mock API/Data:** Local JSON files, then TheMealDB integration  
- **Project Management:** Focalboard with Agile/Kanban methodology  

---


## 🚀 Roadmap (Sprint Planning)


### ✅ Sprint 1 – Setup & Base Layout
- [x] UI Mockup created (Excalidraw)  
- [x] React project setup with Bootstrap  
- [x] Base layout: Header, Sidebar, MainContent  
- [x] Recipe data from mock JSON file  
- [x] Basic mobile responsiveness (burger menu)  
- [x] Show recipe details on selection  
- [x] Reactive component structure  

### ✅ Sprint 2 – API Integration & UX Improvements
- [x] Implement search bar (UI + logic)  
- [x] Multiple API calls (by name, ingredient, category)  
- [x] Remove duplicates and limit results (max 10)  
- [x] Secondary call for recipe details by ID  
- [x] Dynamic rendering of selected recipe details  
- [x] Guide messages and fallback if no recipe is selected  
- [x] Fallback for optional ingredients  

### ✅ Sprint 3 – Refactoring & UI Optimization
- [x] Display ingredients with quantities (as per mock)  
- [x] Extract `IngredientList` component from `MainContent`  
- [x] Create `components/` directory and refactor files  
- [x] Clean up `App.jsx` and reorganize logic  
- [x] Desktop and mobile UI improvements  
- [x] Message for no search results  
- [x] Loading state and empty recipe state (backlog)  

### ⏳ Sprint 4 – Deployment & Publishing
- [x] Final code cleanup (console.log, unused comments)  
- [x] `.env` file for API URLs  
- [x] English translation of the interface  
- [x] Production build verification (`npm run build`)  
- [x] GitHub repo creation and project push  
- [x] Deploy to Vercel  
- [x] Final README.md written in English (with links)  

---

## 📷 Mockups

Mockups created with [Excalidraw](https://excalidraw.com) and static HTML version.  
They can be found in the [`/mockups`](./mockups) folder.

---

## 📦 Installation & Run

```bash
# Clone the project
git clone https://github.com/Ricciardi-F/recipes.git
cd recipes

# Install dependencies
npm install

# Run the project locally
npm start


---


## 🌐 Live Demo

Check out the live demo here:  
👉 [yummy-97jg1ks7l-ricciardi-fs-projects.vercel.app](https://yummy-97jg1ks7l-ricciardi-fs-projects.vercel.app)
---

## 👨‍🍳 Author

- **Federico** – curious and passionate developer, focused on educational projects and solid workflows.
- 🧑‍💻 GitHub: [github.com/Ricciardi-F](https://github.com/Ricciardi-F)

---

## 📄 License

Personal project with no commercial purpose, published for educational use.
Based on public data provided by TheMealDB.

---