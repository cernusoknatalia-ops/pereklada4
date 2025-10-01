import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Translator from "./components/Translator";
import Dictionary from "./components/Dictionary";
import Test from "./components/Test";
import Home from "./components/home";
import "./App.css";

function App() {
  // тема з localStorage або за замовчуванням світла
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });

  // збереження теми при зміні
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className={`app ${darkMode ? "dark" : ""}`}>
        {/* Навбар */}
        <nav className="navbar">
          <Link to="/" className="nav-btn">Головна</Link>
          <Link to="/translator" className="nav-btn">Перекладач</Link>
          <Link to="/dictionary" className="nav-btn">Словник</Link>
          <Link to="/test" className="nav-btn">Тести</Link>

          {/* Кнопка перемикання теми */}
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="theme-toggle"
          >
            {darkMode ? "☀️ Світла" : "🌙 Темна"}
          </button>
        </nav>

        {/* Основний контент */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* титульна */}
            <Route path="/translator" element={<Translator />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>

        {/* Футер */}
        <footer>
          © 2025 | LinguaLearn
        </footer>
      </div>
    </Router>
  );
}

export default App;