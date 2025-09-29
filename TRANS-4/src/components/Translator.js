import React, { useState } from "react";
import words from "../data/words.json";

function Translator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const translateWord = () => {
    const word = words.find(
      (w) =>
        w.word.toLowerCase() === input.toLowerCase() ||
        w.translation.toLowerCase() === input.toLowerCase()
    );

    if (word) {
      setResult(`${word.word} — ${word.translation}`);
    } else {
      setResult("Слово не знайдено");
    }
  };

  return (
    <section id="translator" className="card">
      <h2>Переклад</h2>
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введіть слово..."
        />
        <button onClick={translateWord}>Перекласти</button>
      </div>
      <p className="translation">{result}</p>
    </section>
  );
}

export default Translator;