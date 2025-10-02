import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* Герой секція */}
      <div className="hero">
        <div className="hero-content">
          <h1>LinguaLearn</h1>
          <p>Вчити англійську так само легко, як дивитись серіали 🎬</p>
          <button className="start-btn">Почати навчання</button>
        </div>
      </div>

      {/* Рівень англійської */}
      <div className="row">
        <h2>📖 Рівні англійської</h2>
        <div className="cards">
          <div className="card">My level</div>
          <div className="card">А1-А2</div>
          <div className="card">B1-B2</div>
          <div className="card">C1-C2</div>
        </div>
      </div>
    </div>
  );
}