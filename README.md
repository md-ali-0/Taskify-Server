# Task Manager Web App

## 🚀 Project Overview

Task Manager is a full-stack web application that allows users to **manage tasks** efficiently. It includes **user authentication, profile management, and full CRUD operations for tasks**. Built with **React/Next.js, Redux, Express/NestJS, and PostgreSQL/MySQL/MongoDB**, this app ensures a smooth and secure user experience.

## 📌 Features

### ✅ User Authentication & Profile Management

-   **Sign Up/Login** (JWT authentication)
-   **Forgot & Reset Password**
-   **View and Edit Profile**

### ✅ Task Management (CRUD Operations)

-   **Create, Read, Update, Delete Tasks**
-   **Task Filtering (Optional: By Status, Due Date)**
-   **Task Pagination**

### ✅ Additional Features

-   **Responsive UI** (Tailwind CSS/Bootstrap)
-   **Secure Password Hashing** (bcrypt)
-   **Middleware-Protected API Routes**

## 🛠 Tech Stack

**Frontend:** React/Next.js, Redux, Tailwind CSS/Bootstrap  
**Backend:** Express.js/NestJS, JWT, bcrypt  
**Database:** PostgreSQL/MySQL/MongoDB  
**State Management:** Redux Toolkit

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

### 2️⃣ Install Dependencies

#### Frontend

```bash
cd frontend
npm install  # or yarn install
```

#### Backend

```bash
cd backend
npm install  # or yarn install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the backend directory with:

```env
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Application

#### Backend

```bash
cd backend
npm run dev
```

#### Frontend

```bash
cd frontend
npm run dev
```

The app will be available at **`http://localhost:3000`**.

## 📌 API Endpoints

### 🛠 Authentication

-   `POST /auth/register` – Register new users
-   `POST /auth/login` – User login & return JWT
-   `GET /auth/profile` – Get user profile
-   `PUT /auth/profile` – Update user profile
-   `POST /auth/forgot-password` – Request password reset link
-   `POST /auth/reset-password` – Reset password with token

### 🛠 Task Management (Protected Routes)

-   `GET /tasks` – Get all tasks for authenticated user
-   `GET /tasks/:id` – Get task details
-   `POST /tasks` – Create a new task
-   `PUT /tasks/:id` – Update task
-   `DELETE /tasks/:id` – Delete task

## 🔐 Security Measures

-   **JWT Authentication** for protected routes
-   **bcrypt Password Hashing**
-   **Validation & Error Handling**

## 🔐 Credentials

### Admin:

-   Email: admin@gmail.com
-   Password: 123456

### Learner:

-   Email: learner@gmail.com
-   Password: 123456

### Teacher:

-   Email: teacher@gmail.com
-   Password: 123456

## 🚀 Deployment

-   **Frontend Deployment**: [Frontend Live URL](https://skill-sync-nine.vercel.app)
-   **Backend Deployment**: [Backend Live URL](https://skilsync-api.vercel.app/)

## 📜 License

This project is **MIT Licensed**.

---

### 💡 Need Help?

Feel free to open an issue or contribute to the project!
For queries or support, reach out via [Mohammad Ali](mailto:mohammad..98482@gmail.com). or the project repository.

---

🔥 **Happy Coding!** 🚀
