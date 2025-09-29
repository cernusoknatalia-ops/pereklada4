import React, { useState } from "react";

function Tests() {
  const words = [
    { en: "Apple", ua: "яблуко" },
    { en: "Dog", ua: "собака" },
    { en: "Book", ua: "книга" },
    { en: "House", ua: "дім" },
  ];

  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [finished, setFinished] = useState(false);

  const checkAnswer = () => {
    if (answer.toLowerCase() === words[step].ua) {
      setResult("✅ Правильно!");
      setCorrect(correct + 1);
    } else {
      setResult(`❌ Неправильно! Правильна відповідь: ${words[step].ua}`);
      setWrong(wrong + 1);
    }
  };

  const nextQuestion = () => {
    if (step < words.length - 1) {
      setStep(step + 1);
      setAnswer("");
      setResult("");
    } else {
      setFinished(true);
    }
  };

  const restartTest = () => {
    setStep(0);
    setAnswer("");
    setResult("");
    setCorrect(0);
    setWrong(0);
    setFinished(false);
  };

  return (
    <section id="tests" className="test-container">
      <h2>📝 Тестування слів</h2>

      {!finished ? (
        <>
          <p className="test-description">
            Перевір свої знання англійських слів. Введи переклад і перевір
            відповідь.
          </p>

          {/* Прогрес */}
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${((step + 1) / words.length) * 100}%` }}
            ></div>
          </div>
          <p>
            Питання {step + 1} з {words.length}
          </p>

          {/* Завдання */}
          <div className="test-card">
            <h3>`
              Переклади слово: <span className="word">{words[step].en}</span>
            </h3>
            <input
              type="text"
              value={answer}
              placeholder="Введіть переклад..."
              onChange={(e) => setAnswer(e.target.value)}
            />
            <div className="buttons">
              <button className="check-btn" onClick={checkAnswer}>
                Перевірити
              </button>
              <button className="skip-btn" onClick={nextQuestion}>
                Далі
              </button>
            </div>
          </div>

          {/* Результат */}
          <p className="result">{result}</p>
          <div className="results">
            ✅ Правильних: {correct} | ❌ Неправильних: {wrong}
          </div>
        </>
      ) : (
        <div className="final-screen">
          <h2>🎉 Тест завершено!</h2>
          <p>
            Ви відповіли правильно на <b>{correct}</b> з {words.length}{" "}
            слів.
          </p>
          <p>
            Помилок: <b>{wrong}</b>
          </p>
          <button className="check-btn" onClick={restartTest}>
            🔄 Пройти ще раз
          </button>
        </div>
      )}
    </section>
  );
}

export default Tests;