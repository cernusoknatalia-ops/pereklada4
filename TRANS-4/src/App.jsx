import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Translator from "./components/Translator";
import Dictionary from "./components/Dictionary";
import Test from "./components/Test";
import Home from "./components/Home";
import "./App.css";

function App() {
  // Збереження теми
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
        {/* === Навігаційна панель === */}
        <nav className="navbar">
          <div className="logo">🌐 LinguaLearn</div>

          <div className="nav-links">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-btn active" : "nav-btn"
              }
            >
              Головна
            </NavLink>

            <NavLink
              to="/translator"
              className={({ isActive }) =>
                isActive ? "nav-btn active" : "nav-btn"
              }
            >
              Перекладач
            </NavLink>

            <NavLink
              to="/dictionary"
              className={({ isActive }) =>
                isActive ? "nav-btn active" : "nav-btn"
              }
            >
              Словник
            </NavLink>

            <NavLink
              to="/test"
              className={({ isActive }) =>
                isActive ? "nav-btn active" : "nav-btn"
              }
            >
              Тести
            </NavLink>
          </div>

          <button onClick={() => setDarkMode(!darkMode)} className="theme-btn">
            {darkMode ? "🌙 Темна" : "☀️ Світла" }
          </button>
        </nav>

        {/* === Основний контент === */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/translator" element={<Translator />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* === Футер === */}
        <footer>
          © 2025 | <strong>LinguaLearn</strong> — створюй, вивчай, вдосконалюй 🌟
        </footer>
      </div>
    </Router>
  );
}

export default App;