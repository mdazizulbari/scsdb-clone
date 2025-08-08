# SCSDB Clone
A Netflix-inspired movie database application built as part of my MERN stack journey at Sheryians Coding School. This project fetches and displays detailed movie information from external APIs, delivering a sleek, user-friendly interface.

## 📸 Screenshot
*Insert a clean screenshot of the project here*

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
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "axios": "^1.4.0",
    "tailwindcss": "^3.3.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.3.9"
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
