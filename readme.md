# Project Documentation

## Overview

This project is a full-stack notes application with user registration, authentication, and note management.  
It uses React for the frontend and Node.js/Express for the backend, with MongoDB for data storage.

---

## Setup

### Backend

1. Navigate to the `server` folder.
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables in a `.env` file (see sample in `server/.env.example`).
4. Start the backend server:
   ```
   npm start
   ```

### Frontend

1. Navigate to the `client` folder.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the frontend:
   ```
   npm run dev
   ```

---

## API Endpoints

### User Registration

**POST** `/users/register`

Registers a new user.

**Request Body:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

**Success Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

**Error Response:**
```json
{
  "errors": [
    {
      "msg": "invalid email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

---

### Notes Endpoints

- **GET** `/notes` — Get all notes
- **POST** `/notes` — Create a new note
- **GET** `/notes/:id` — Get a note by ID
- **PUT** `/notes/:id` — Update a note by ID
- **DELETE** `/notes/:id` — Delete a note by ID

**Note Object Example:**
```json
{
  "_id": "note_id_here",
  "title": "Sample Note",
  "content": "This is a note.",
  "createdAt": "2025-09-04T12:00:00.000Z"
}
```

---

## Rate Limiting

The backend uses Upstash Redis for rate limiting.  
If too many requests are made, you will receive:

```json
{
  "message": "Too many requests, please try again later."
}
```

---

##