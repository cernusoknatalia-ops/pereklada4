import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Translator from "./components/Translator";
import Dictionary from "./components/Dictionary";
import Test from "./components/Test";
import Home from "./components/Home";
import Grammar from "./components/Grammar"; 
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className={`app ${darkMode ? "dark" : "light"}`}>
        <nav className="navbar">
          {/* Перший ряд: логотип + кнопка теми */}
          <div className="navbar-top">
            <div className="logo">🌐 QuapsE</div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="theme-btn"
              aria-label="Змінити тему"
              title="Змінити тему"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
          </div>

          {/* Другий ряд: вкладки */}
          <div className="nav-links">
            <NavLink to="/" end className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Головна</NavLink>
            <NavLink to="/translator" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Перекладач</NavLink>
            <NavLink to="/dictionary" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Словник</NavLink>
            <NavLink to="/grammar" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Граматика</NavLink>
            <NavLink to="/test" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Тести</NavLink>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/translator" element={<Translator />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/grammar" element={<Grammar darkMode={darkMode} />} /> {/* Маршрут для Граматики з темою */}
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <footer>
          © 2025 | <strong>QuapsE</strong> — створюй, вивчай, вдосконалюй 🌟
        </footer>
      </div>
    </Router>
  );
}

export default App;
