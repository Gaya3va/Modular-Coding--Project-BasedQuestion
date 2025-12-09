#  Modular Coding -Project-BasedQuestion

# 📘 Modular JavaScript Todos App

A minimal modular JavaScript project demonstrating authentication, component reuse, and API-driven UI rendering.

---

## ✨ Features

* ES Module structure (`import`/`export`)
* Signup/Login using **localStorage**
* Protected todos page (`todos.html`)
* Fetch & render todos from JSONPlaceholder
* Reusable components: **navbar**, **footer**, **displayTodos**

---

## 📁 Structure

```
components/  → navbar.js, footer.js
auth/        → signup.js, login.js
todos/       → todos.js, displayTodos.js
utils/       → storage.js
```

---

## 🚀 Run the Project

Serve using a local server (modules require it):

```
npx http-server
```

or

```
python -m http.server 3000
```

Then open:

```
http://localhost:3000/index.html
```

---

## 🔐 Auth Flow

Signup → Store user → Login → Redirect to todos → Block unauthenticated access.

---

If you'd like an **ultra-short version** or a **GitHub-optimized version**, tell me! 📦
