# 📝 Notes REST API (Assignment 6)

## 📌 Project Overview

This project is a RESTful API built using **Node.js and Express.js** to manage notes through CRUD (Create, Read, Update, Delete) operations.

The API allows users to create notes, retrieve all notes or a specific note, update existing notes, and delete notes. The project follows a modular architecture by separating routes, controllers, services, models, middleware, configuration, and utility functions.

## 🚀 Features

- **Create a Note:** Add a note with a title, content, and category.
- **Get All Notes:** Retrieve all available notes.
- **Get a Single Note:** Retrieve a specific note using its ID.
- **Update a Note:** Modify an existing note.
- **Delete a Note:** Remove a note using its ID.
- **Input Validation:** Validate note data using custom middleware.
- **Centralized Error Handling:** Handle errors through a dedicated error handler.
- **Modular Architecture:** Separate application responsibilities into organized folders.

## 🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript
- REST API
- Postman

## 📂 Project Structure

```text
Notes REST API (Assignment-6)/
├── config/
│   └── server.config.js
├── controllers/
│   └── notes.controller.js
├── middlewares/
│   └── notesValidation.js
├── models/
│   └── notes.models.js
├── routes/
│   └── notes.route.js
├── services/
│   └── notes.service.js
├── utils/
│   └── errorHandler.js
├── .env
├── .gitignore
├── main.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the Project Directory

```bash
cd <project-folder>
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Configure the required environment variables in your `.env` file according to your application setup.

For example:

```env
PORT=8081
```

### 5. Start the Server

Run the application using the start script defined in your `package.json`.

```bash
npm start
```

Alternatively, if your project does not have a start script:

```bash
node main.js
```

The API will be available at:

`http://localhost:8081`

## 🔗 API Endpoints

**Base URL:** `http://localhost:8081/api/notes`

| HTTP Method | Endpoint         | Description                    |
| ----------- | ---------------- | ------------------------------ |
| POST        | `/api/notes`     | Create a new note              |
| GET         | `/api/notes`     | Retrieve all notes             |
| GET         | `/api/notes/:id` | Retrieve a specific note by ID |
| PUT         | `/api/notes/:id` | Update an existing note        |
| DELETE      | `/api/notes/:id` | Delete a note by ID            |

_Note: These endpoints assume your routes are mounted at `/api/notes`._

## 📥 Sample Request Body

Use the following JSON body to create a new note using Postman.

```json
{
  "title": "Learning Express.js",
  "content": "Understanding REST APIs and middleware",
  "category": "Learning"
}
```

The API generates the note ID when a new note is created.

## 🧪 API Testing

Test the API endpoints using Postman.

- **POST:** Create a new note.
- **GET:** Retrieve all notes.
- **GET by ID:** Retrieve a specific note.
- **PUT:** Update an existing note.
- **DELETE:** Delete a note.
- **Error Handling:** Verify responses for invalid input and notes that do not exist.

## 🏗️ Architecture

The project uses a modular, layered structure to separate responsibilities.

| Folder/File    | Responsibility                                          |
| -------------- | ------------------------------------------------------- |
| `config/`      | Contains server configuration.                          |
| `controllers/` | Handles incoming HTTP requests and sends responses.     |
| `middlewares/` | Validates incoming note data.                           |
| `models/`      | Defines or stores the note data.                        |
| `routes/`      | Defines API endpoints and connects them to controllers. |
| `services/`    | Contains the business logic for note operations.        |
| `utils/`       | Provides reusable utilities, including error handling.  |
| `.env`         | Stores environment-specific configuration.              |
| `main.js`      | Application entry point.                                |

## 📚 Concepts Learned

- Node.js and Express.js fundamentals
- RESTful API development
- CRUD operations
- HTTP methods and status codes
- Route parameters and request bodies
- Controller-service-model architecture
- Middleware and input validation
- Centralized error handling
- Environment variable configuration
- Testing REST APIs with Postman

## 🎯 Learning Outcome

Through this assignment, I strengthened my understanding of backend development by building a Notes REST API using Node.js and Express.js. I learned how to implement CRUD operations, validate incoming requests, handle errors, and organize application logic using a modular architecture.

---

**Assignment:** 6  
**Project:** Notes REST API  
**Technologies:** Node.js, Express.js, JavaScript  
**Testing Tool:** Postman
