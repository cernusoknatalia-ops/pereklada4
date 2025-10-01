import React from "react";
import { Link } from "react-router-dom";

function Header({ toggleTheme, darkMode }) {
  return (
    <header>
      <h1>🌐 LinguaLearn</h1>
      <nav className="navbar">
        <div className="nav-links">
          <Link className="nav-btn" to="/">Головна</Link>
          <Link className="nav-btn" to="/translator">Перекладач</Link>
          <Link className="nav-btn" to="/dictionary">Словник</Link>
          <Link className="nav-btn" to="/tests">Тести</Link>
        </div>

        <button onClick={toggleTheme} className="theme-btn">
          {darkMode ? "🌙 Темна" : "☀️ Світла"}
        </button>
      </nav>
    </header>
  );
}

export default Header;