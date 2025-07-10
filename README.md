# 🌐 Client-Connect

Welcome to **Client-Connect**, a full-stack real estate and client management web application. Built using **React**, **Node.js**, **MongoDB**, and **Tailwind CSS**, this app allows you to showcase your services, manage clients and projects, collect contact queries, and handle newsletter subscribers — all through a powerful and user-friendly admin panel.

---

## 🗂️ Project Structure

### 🔹 Frontend (Client Side) — `frontend/`
Built using **Vite**, **React**, and **Tailwind CSS**.

frontend/
│
├── public/ # Static assets like background images
├── src/
│ ├── components/ # Navbar, Footer, Cards, etc.
│ ├── pages/ # LandingPage, Contact, AdminPanel
│ ├── App.jsx # Main component with routing
│ ├── main.jsx # Entry point
│ └── index.css # Tailwind base styles
│
├── .env # Environment variables (VITE_API_BASE_URL)
├── vite.config.js # Vite setup
└── tailwind.config.js # Tailwind setup

markdown
Copy
Edit

### 🔸 Backend (Server Side) — `backend/`
Built using **Express.js**, **MongoDB**, and **Multer** for file uploads.

backend/
│
├── controllers/ # Logic for contacts, clients, subscribers, projects
├── models/ # Mongoose schemas for each entity
├── routes/ # API route definitions
├── uploads/ # Image uploads served statically
├── .env # MongoDB URI, PORT
├── server.js # Express server entry point
└── middleware/ # Multer config for image uploads

yaml
Copy
Edit

---

## ⚙️ Tech Stack

### Frontend
- React + Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Multer (for handling image file uploads)
- dotenv

---

## 🚀 Features

- 🏠 Elegant landing page with modern design
- 📋 Admin panel for managing:
  - Projects (with image, name, description)
  - Clients (with image, name, designation, description)
  - Contact form submissions
  - Newsletter subscribers
- 📤 Image uploading using Multer
- 🔒 Role-based access control for admin/client dashboards
- 🌐 Deployable on Render (backend) and Vercel (frontend)

---

## 🛠️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Ansh3102/Client-Connect
cd Client-Connect
2️⃣ Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file:

ini
Copy
Edit
MONGO_URI=your_mongodb_atlas_uri
PORT=5000
Start the backend server:

bash
Copy
Edit
node server.js
3️⃣ Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install
Create a .env file:

ini
Copy
Edit
VITE_API_BASE_URL=http://localhost:5000
Run the frontend app:

bash
Copy
Edit
npm run dev
🌍 Deployment
Frontend (Vercel)
Set VITE_API_BASE_URL in Vercel to your Render backend URL.

Backend (Render)
Set MONGO_URI in Render environment variables.

Uploaded images will persist in the /uploads folder and are served statically via express.static.

📬 Contact
Built by Anshul Sharma
Open to feedback, improvements, and contributions.

