# Chat App

A full-stack real-time messaging application built with the MERN stack. Users can sign up, log in, chat one-on-one in real time, share images, and see who's currently online.

## Features

- **Authentication** — Secure signup/login with JWT stored in HTTP-only cookies, password hashing with bcrypt
- **Real-time messaging** — Instant message delivery powered by Socket.IO
- **Online presence** — Live indicator of which users are currently online
- **Image sharing** — Send images in chat and update profile pictures via Cloudinary
- **Theming** — Multiple UI themes powered by daisyUI, with preference persisted client-side
- **Responsive UI** — Built with React 19, Tailwind CSS, and daisyUI

## Tech Stack

**Frontend**
- React 19 + Vite
- React Router
- Zustand (state management)
- Tailwind CSS + daisyUI
- Axios
- Socket.IO Client
- React Hot Toast

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- Socket.IO
- JSON Web Tokens (JWT)
- bcrypt
- Cloudinary (image storage)

## Project Structure

```
chat-app-main/
├── backend/
│   └── src/
│       ├── controllers/   # Route handlers (auth, messages)
│       ├── lib/           # DB connection, Socket.IO, Cloudinary, JWT helpers
│       ├── middleware/     # Auth middleware
│       ├── models/        # Mongoose schemas (User, Message)
│       ├── routes/        # Express routes
│       ├── seeds/         # Database seeding script
│       └── index.js       # App entry point
└── frontend/
    └── src/
        ├── components/    # Reusable UI components
        ├── constants/     # App-wide constants
        ├── lib/           # Axios instance, utility functions
        ├── pages/         # Route-level pages
        ├── store/         # Zustand stores (auth, chat, theme)
        └── App.jsx        # Root component & routing
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- A MongoDB instance (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- A [Cloudinary](https://cloudinary.com/) account for image uploads

### 1. Clone the repository

```bash
git clone <repository-url>
cd chat-app-main
```

### 2. Configure environment variables

Create a `.env` file inside the `backend/` directory:

```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=development
```

### 3. Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 4. Run the app

**Backend** (from `backend/`):
```bash
npm run dev
```

**Frontend** (from `frontend/`):
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`, and the backend API at `http://localhost:5001` (or whichever `PORT` you configured).

### 5. (Optional) Seed the database

To populate MongoDB with sample users for testing:

```bash
cd backend
node src/seeds/user.seed.js
```

## Building for Production

```bash
# Build the frontend
cd frontend
npm run build
```

When `NODE_ENV=production`, the Express server serves the built frontend from `frontend/dist`, so the app can be deployed as a single service.

## API Overview

| Method | Endpoint                     | Description                     | Auth Required |
|--------|-------------------------------|----------------------------------|:--------------:|
| POST   | `/api/auth/signup`            | Register a new user             | No             |
| POST   | `/api/auth/login`              | Log in                          | No             |
| POST   | `/api/auth/logout`             | Log out                         | No             |
| PUT    | `/api/auth/update-profile`     | Update profile picture          | Yes            |
| GET    | `/api/auth/check`              | Check current auth session      | Yes            |
| GET    | `/api/messages/users`          | Get list of users for sidebar   | Yes            |
| GET    | `/api/messages/:id`            | Get conversation with a user    | Yes            |
| POST   | `/api/messages/send/:id`       | Send a message to a user        | Yes            |
