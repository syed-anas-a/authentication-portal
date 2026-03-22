# Authentication Portal

A full-stack authentication project built to demonstrate secure API design, protected frontend routing, and token-based authentication with a modern React interface.

## Overview

This project implements a simple authentication flow with:

- user registration
- user login with JWT tokens
- protected API access
- protected frontend routes
- token persistence in the browser

The backend is built with Django REST Framework and Simple JWT. The frontend is built with React and Vite.

## Tech Stack

- Frontend: React, Vite, React Router, Axios, Code(for design)
- Backend: Django, Django REST Framework
- Auth: JWT with `djangorestframework-simplejwt`
- Database: SQLite

## Features

- Register a new user account
- Log in with username and password
- Store access and refresh tokens
- Access protected backend endpoints
- Restrict dashboard access to authenticated users
- Clean multi-page frontend UI for home, login, register, and dashboard

## Project Structure

```text
AuthenticationPortal/
├── backend/
│   ├── accounts/
│   ├── api/
│   ├── auth/
│   └── manage.py
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Local Setup

### 1. Clone the project

```bash
git clone <your-repo-url>
cd AuthenticationPortal
```

### 2. Backend setup

Create `backend/.env`:

```env
SECRET_KEY=your-secret-key
DEBUG=True
```

Run the backend:

```bash
cd backend
../env/bin/python manage.py migrate
../env/bin/python manage.py runserver
```

### 3. Frontend setup

Create `frontend/.env`:

```env
VITE_BACKEND_BASE_API=http://127.0.0.1:8000/api/v1/
```

Run the frontend:

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

- `POST /api/v1/register/`
- `POST /api/v1/token/`
- `POST /api/v1/token/refresh/`
- `GET /api/v1/protected-view/`

## Notes

This project showcase:

- backend API authentication design
- frontend auth state handling
- protected route implementation
- environment-based configuration
- end-to-end integration between Django and React

## Future Improvements

- logout token invalidation
- form validation improvements
- better error feedback
- user profile management
- deployment configuration

