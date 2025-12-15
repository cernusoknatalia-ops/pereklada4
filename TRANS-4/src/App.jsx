import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import Translator from "./components/Translator";
import Dictionary from "./components/Dictionary";
import Test from "./components/Test";
import Home from "./components/Home";
import Grammar from "./components/Grammar";
import Auth from "./components/Auth";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );
  const [isAuth, setIsAuth] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);

  useEffect(() => localStorage.setItem("darkMode", darkMode), [darkMode]);

  const handleAccountClick = () => {
    if (!isAuth) setShowAuthModal(true);
    else setConfirmLogout(true);
  };

  const handleLogout = () => {
    setIsAuth(false);
    setConfirmLogout(false);
  };

  return (
    <Router>
      <div className={`app ${darkMode ? "dark" : "light"}`}>
        <nav className="navbar">
          <div className="navbar-top">
            <div className="logo">🌐 QuapsE</div>

            <div className="nav-actions">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="theme-btn"
                aria-label="Змінити тему"
              >
                {darkMode ? "🌙" : "☀️"}
              </button>

              <button
                className="account-btn"
                aria-label="Акаунт"
                onClick={handleAccountClick}
              >
                {isAuth ? "⏻" : "👤"}
              </button>
            </div>
          </div>

          <div className="nav-links">
            <NavLink to="/" end className="nav-btn">
              Головна
            </NavLink>
            <NavLink to="/translator" className="nav-btn">
              Перекладач
            </NavLink>
            <NavLink to="/dictionary" className="nav-btn">
              Словник
            </NavLink>
            <NavLink to="/grammar" className="nav-btn">
              Граматика
            </NavLink>
            <NavLink to="/test" className="nav-btn">
              Тести
            </NavLink>
          </div>
        </nav>

        <main>
          <Routes>
            <Route
              path="/"
              element={<Home onStartLearning={handleAccountClick} />}
            />
            <Route path="/translator" element={<Translator />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/grammar" element={<Grammar darkMode={darkMode} />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>

        <footer>
          © 2025 | <strong>QuapsE</strong>
        </footer>

        {/* Модалка авторизації */}
        {showAuthModal && (
          <div
            className="modal-overlay"
            onClick={() => setShowAuthModal(false)}
          >
            <div
              className="modal-container auth-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <Auth
                onClose={() => setShowAuthModal(false)}
                onSuccess={() => {
                  setIsAuth(true);
                  setShowAuthModal(false);
                }}
              />
            </div>
          </div>
        )}
        {confirmLogout && (
          <div
            className="modal-overlay"
            onClick={() => setConfirmLogout(false)}
          >
            <div
              className="modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              <p>Вийти з акаунта?</p>
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button className="logout-btn" onClick={handleLogout}>
                  Так
                </button>
                <button
                  className="cancel-btn"
                  onClick={() => setConfirmLogout(false)}
                >
                  Ні
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
