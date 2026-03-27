# Teacher Management Dashboard

A full-stack web application built using Node.js (Express + TypeScript) for the backend and React (TypeScript + Redux Toolkit + Material UI) for the frontend.

---

## Project Overview

This project implements:

* User Authentication (JWT-based)
* Teacher Management (CRUD operations)
* Clean architecture using Controller-Service pattern
* Modern UI using Material UI
* State management using Redux Toolkit

---

## Tech Stack

### Frontend

* React with TypeScript
* Redux Toolkit
* Material UI
* Axios

### Backend

* Node.js with Express and TypeScript
* MongoDB using Mongoose
* JWT Authentication
* bcrypt for password hashing

---

## Project Structure

```
project-root/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── modules/
│   ├── middleware/
│   └── server.ts
│
├── frontend/
│   ├── src/
│   ├── features/
│   ├── pages/
│   └── app/
```

---

## Authentication

* JWT-based authentication is implemented
* Token is generated during login
* Protected routes are secured using middleware


## API Endpoints

### Auth

* POST /api/auth/register → Register user
* POST /api/auth/login → Login user

### Teachers

* GET /api/teachers → Get all teachers
* GET /api/teachers/:id → Get teacher by ID
* POST /api/teachers → Create teacher
* PUT /api/teachers/:id → Update teacher
* DELETE /api/teachers/:id → Delete teacher

---

## Setup Instructions


### 2. Backend Setup

```
cd backend
npm install
```


Run backend:

```
npm run dev
```

---

### 3. Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## Application URLs

* Frontend: http://localhost:5175
* Backend: http://localhost:5000

---

## Features

* User registration and login
* Secure password hashing
* JWT authentication
* Protected API routes
* Teacher CRUD operations
* Responsive UI using Material UI

---

## Design Decisions

* Controller-Service pattern for scalability
* Redux Toolkit for predictable state management
* Axios interceptors for handling authentication
* TypeScript for type safety

---


## Author

Sonu Sebastian

---
