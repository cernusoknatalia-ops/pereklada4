import React from "react";

function Header({ toggleTheme, darkMode }) {
  return (
    <header>
      <h1>🌍 LinguaLearn</h1>
      <nav>
        <a href="#translator">Переклад</a>
        <a href="#dictionary">Словник</a>
        <a href="#tests">Тести</a>
      </nav>
      <button onClick={toggleTheme}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
}

export default Header;