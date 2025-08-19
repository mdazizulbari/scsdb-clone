# SCSDB Clone
A Netflix-inspired movie database application built as part of my MERN stack journey at Sheryians Coding School. This project fetches and displays detailed movie information from external APIs, delivering a sleek, user-friendly interface.

## 🌐 Live Project
[View SCSDB Clone Live](https://scsdb-clone.vercel.app) 

## 🛠 Technologies Used
- **Frontend**: React, Tailwind CSS, JavaScript (ES6)
- **API**: The Movie Database (TMDb) API
- **Tools**: Vite, Git, npm

## ✨ Core Features
- **Dynamic Movie Listings**: Fetches and displays movies with details like title, poster, and ratings.
- **Search Functionality**: Allows users to search for movies by title.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Smooth UI**: Netflix-style card-based layout with hover effects.

## 📦 Dependencies
```json
{
  "dependencies": {
    "@reduxjs/toolkit": "^2.2.7",
    "axios": "^1.7.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0",
    "react-infinite-scroll-component": "^6.1.0",
    "react-player": "^2.16.0",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.26.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.0",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.9.0",
    "eslint-plugin-react": "^7.35.0",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.9",
    "globals": "^15.9.0",
    "postcss": "^8.4.41",
    "tailwindcss": "^3.4.10",
    "vite": "^5.4.1"
  }
}
```

## 🚀 How to Run Locally
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mdazizulbari/scsdb-clone.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd scsdb-clone
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add your TMDb API key: `VITE_TMDB_API_KEY=your_api_key_here`
5. **Run the Application**:
   ```bash
   npm run dev
   ```
6. Open `http://localhost:5173` in your browser to view the app.

## 🔗 Resources
- [TMDb API Documentation](https://developers.themoviedb.org/3)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)
