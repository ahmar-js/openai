# Node + React Application with OpenAI

This is a full-stack web application built using **Node.js** for the backend and **React** (Vite) for the frontend. The project follows a structured folder system with separate `frontend` and `backend` directories.

## 📂 Project Structure

````
openai
├─ .gitignore
├─ backend
│  ├─ .env.example
│  ├─ index.js
│  ├─ package-lock.json
│  └─ package.json
└─ frontend
   └─ openai-gui
      ├─ eslint.config.js
      ├─ index.html
      ├─ package-lock.json
      ├─ package.json
      ├─ postcss.config.js
      ├─ public
      ├─ src
      │  ├─ App.css
      │  ├─ App.jsx
      │  ├─ assets
      │  │  └─ react.svg
      │  ├─ components
      │  │  ├─ Dalle.jsx
      │  │  └─ Gpt.jsx
      │  ├─ index.css
      │  └─ main.jsx
      ├─ tailwind.config.js
      └─ vite.config.js

````

## 🚀 Getting Started

Follow these steps to set up and run the project on your local machine.

### 1️⃣ Clone the Repository

```sh
git clone [https://github.com/your-username/your-repository.git](https://github.com/ahmar-js/openai.git)
cd openai
```

### 2️⃣ Setup Backend (Node.js)

```sh
cd backend
npm install  # Install dependencies
node index.js    # Start the backend server
```

> Add your `OPENAI_API_KEY` in `.env` file in your backend folder.

> The backend runs on **[http://localhost:4000](http://localhost:4000)**.

### 3️⃣ Setup Frontend (React)

```sh
cd ../frontend
npm install  # Install dependencies
npm run dev  # Start the development server
```

> The frontend runs on **[http://localhost:5173](http://localhost:5173)** by default.

## 🛠 Technologies Used

### **Frontend:**

- React (Vite)
- Tailwind CSS

### **Backend:**

- Node.js
- Express.js
- Open AI (gpt-4o-mini & Dall-E-3)

## 🤝 Contributing

Feel free to submit issues or pull requests to improve the project.

## 📜 License

This project is licensed under the **MIT License**.

---

Made with ❤️ by [ahmar-js]

