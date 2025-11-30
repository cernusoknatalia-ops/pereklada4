import React from "react";
import { NavLink } from "react-router-dom";

function Header({ toggleTheme, darkMode }) {
  return (
    <header>
      <h1 className="logo">🌐 QuapsE</h1>
      <nav className="navbar">
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
            to="/tests"
            className={({ isActive }) =>
              isActive ? "nav-btn active" : "nav-btn"
            }
          >
            Тести
          </NavLink>

          <NavLink
            to="/grammar"
            className={({ isActive }) =>
              isActive ? "nav-btn active" : "nav-btn"
            }
          >
            Граматика
          </NavLink>
        </div>

        <button onClick={toggleTheme} className="theme-btn">
          {darkMode ? "☀️ Світла" : "🌙 Темна"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
