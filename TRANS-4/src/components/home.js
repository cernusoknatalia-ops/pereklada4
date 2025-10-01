import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Ласкаво просимо до LinguaLearn!</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link to="/translator"><button>Перекладач</button></Link>
        <Link to="/dictionary"><button>Словник</button></Link>
        <Link to="/tests"><button>Тести</button></Link>
      </div>
    </div>
  );
}