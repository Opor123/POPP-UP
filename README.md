# POPP-UP

POPP-UP is a full-stack web application designed as a personalized content and interest platform. It brings together a modern frontend, a FastAPI backend, and a PostgreSQL database to create a simple but engaging experience where users can sign up, log in, explore categories like sweets recipes, stock investment, programming, and basketball, and view analytics through an admin dashboard.

At its core, this project is about helping users discover content based on their interests in a clean and intuitive way. The app blends browsing, authentication, and data visualization into one cohesive experience.

## Project overview

This project is structured as a three-part system:

- Frontend: Next.js with React and Material UI for the user-facing pages and dashboard
- Backend: FastAPI for authentication, user management, and analytics endpoints
- Database: PostgreSQL for storing users, content, categories, and interest metadata

The result is a lightweight content portal that feels like a polished prototype for a real-world personalized recommendation platform.

## What the app does

- Allows users to register and log in
- Routes different user types to different experiences
- Displays a welcome and landing page with themed content sections
- Supports browsing categories such as:
  - Sweet recipes
  - Stock and investment topics
  - Basketball content
  - Programming-related content
- Provides a dashboard with summary statistics and chart-based analytics
- Uses sample JSON datasets to model content, category mapping, and user interest records

## Tech stack

- Next.js 14
- React 18
- Material UI (MUI)
- Zustand for lightweight state management
- FastAPI
- PostgreSQL
- Docker and Docker Compose

## Project structure

```text
POPP-UP/
├── docker-compose.yaml
├── package.json
├── README.md
├── database/
│   ├── _content_.json
│   ├── contentcategories.json
│   ├── usercontent.json
│   ├── userinterests.json
│   └── users.json
├── fastapi/
│   ├── app.py
│   ├── database.py
│   ├── Dockerfile
│   ├── requirements.txt
│   └── routes/
│       └── users.py
└── nextjs/
    ├── Dockerfile
    ├── jsconfig.json
    ├── next.config.mjs
    ├── package.json
    ├── components/
    │   ├── Footer.js
    │   ├── layout.js
    │   └── NavigationBar.js
    ├── image/
    ├── pages/
    │   ├── _app.js
    │   ├── _document.js
    │   ├── dashboard.js
    │   ├── FinalProject.js
    │   ├── index.js
    │   └── UI.js
    ├── public/
    │   └── img/
    ├── store/
    │   └── useBearStore.js
    └── styles/
        └── globals.css
```

## Main application flow

1. Users land on the home page and can either sign up or log in.
2. The frontend sends authentication requests to the FastAPI API.
3. The backend checks user data in PostgreSQL and returns the appropriate response.
4. Based on the user type, the app sends the user to either the normal content experience or the admin dashboard.
5. The dashboard fetches statistics and chart data from backend endpoints and renders them visually.

## API and backend behavior

The FastAPI service exposes routes for:

- creating users
- listing users
- updating users
- deleting users
- logging in
- retrieving stats
- retrieving chart data for analytics

The backend is connected to PostgreSQL through the async database layer, and it uses the `users` route module to keep the API organized.

## Frontend experience

The Next.js frontend includes:

- a landing page and welcome experience
- a login/signup flow with modal dialogs
- a content-focused UI for browsing categories and interests
- a navigation and menu experience using Material UI
- an admin dashboard showing counts and time-based trends

## Local development setup

### Option 1: Run everything with Docker

From the project root:

```bash
docker compose up --build
```

Then open:

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API docs: http://localhost:8000/docs
- PostgreSQL: localhost:5432

### Option 2: Run frontend and backend separately

Install dependencies in the frontend:

```bash
cd nextjs
npm install
npm run dev
```

Then run the API:

```bash
cd fastapi
pip install -r requirements.txt
uvicorn app:app --host 0.0.0.0 --port 8000 --reload
```

## Database configuration

The Docker setup uses the following PostgreSQL credentials:

- Database: `advcompro`
- Username: `temp`
- Password: `temp`
- Host: `db` inside Docker, or `localhost` when running locally if configured accordingly

## Notes about the project

This is a prototype-style application meant to demonstrate a full-stack web project using realistic patterns: authentication, database access, category-based content, and dashboard analytics. It is a great starting point for a personalized content platform or recommendation-style app.

The included JSON data files also show how the project was designed to simulate different user interests and content categories, making it easier to understand how a real-world platform might connect users to content.

## Future improvements

Some natural next steps for this project could include:

- user-specific recommendations based on interests
- stronger password handling and security
- admin role management and permissions
- actual content detail pages
- search and filtering
- deployment-ready configuration for production

## Summary

POPP-UP is a user-centric web application that blends a polished frontend, API-driven backend, and database-backed content logic into one coherent project. It is a practical example of how a personalized digital platform can be built using modern web technologies while remaining approachable and easy to extend.
