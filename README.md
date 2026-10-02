# PERN Users API

A REST API built with Node.js, Express.js, and PostgreSQL as part of my PERN stack learning journey.

## 🚀 Features

- Full CRUD operations for users
- Create, read, update, and delete users
- `PUT` and `PATCH` support for updating users
- Input validation for name and email
- Email format validation
- Duplicate email handling
- Proper `404` error handling
- Centralized error-handling middleware
- PostgreSQL connection pooling
- Parameterized SQL queries
- Routes, Controllers, and Models separation

## 🛠️ Technologies

- Node.js
- Express.js
- PostgreSQL
- JavaScript
- REST API
- Git & GitHub

## 📁 Project Structure

```text
practice/
├── controllers/
│   └── usersController.js
├── middleware/
│   └── errorHandler.js
├── models/
│   └── usersModel.js
├── routes/
│   └── users.js
├── db.js
├── server.js
├── practice.sql
├── package.json
└── .gitignore
```

## 🔄 Request Flow

```text
Client
  ↓
Route
  ↓
Controller
  ↓
Model
  ↓
PostgreSQL
  ↓
Response
```

## 📌 API Endpoints

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/users`     | Get all users           |
| GET    | `/users/:id` | Get a user by ID        |
| POST   | `/users`     | Create a new user       |
| PUT    | `/users/:id` | Replace a user          |
| PATCH  | `/users/:id` | Partially update a user |
| DELETE | `/users/:id` | Delete a user           |

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/maryamaslam-tech/pern-users-api.git
```

### 2. Navigate to the project

```bash
cd pern-users-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
```

Do not commit your `.env` file to GitHub.

### 5. Set up the database

Use the SQL queries in `practice.sql` to create the required PostgreSQL table.

### 6. Start the server

```bash
node server.js
```

The API will run on:

```text
http://localhost:3000
```

## 🧪 Example

### Create a user

```http
POST /users
Content-Type: application/json
```

```json
{
  "name": "Ali",
  "email": "ali@example.com"
}
```

## 📚 What I Learned

Through this project, I practiced:

- Building REST APIs with Express.js
- Connecting Node.js with PostgreSQL
- Implementing CRUD operations
- Using parameterized SQL queries
- Validating API input
- Handling HTTP errors
- Structuring a backend using Routes → Controllers → Models
- Using Git and GitHub for version control

## 🎯 Project Goal

This project was built to strengthen my backend fundamentals and gain practical experience while learning the PERN stack.

---

**Built as part of my PERN stack learning journey.**
