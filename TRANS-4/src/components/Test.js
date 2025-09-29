import React, { useState } from "react";

function Tests() {
  const [question, setQuestion] = useState("Apple");
  const [answer, setAnswer] = useState(""); 
  const [result, setResult] = useState("");

  const checkAnswer = () => {
    if (answer.toLowerCase() === "яблуко") {
      setResult("✅ Правильно!");
    } else {
      setResult("❌ Спробуй ще раз!");
    }
  };

  return (
    <section id="tests" className="card">
      <h2>📝 Тестування</h2>
      <p>
        ➤ Переклади слово: <b>{question}</b>
      </p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={checkAnswer}>Перевірити</button>
      <p>{result}</p>
    </section>
  );
}

export default Tests;