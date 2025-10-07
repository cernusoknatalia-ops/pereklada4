import React, { useState, useEffect } from "react";
import wordsData from "../data/words.json";
import "../App.css";

function Test({ darkMode }) {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {
    setWords([...wordsData]);
    setCurrentIndex(0);
  }, []);

  const handleAnswer = (know) => {
    if (words.length === 0) return;

    const updatedWords = [...words];
    const currentWord = updatedWords[currentIndex];

    if (know) {
      updatedWords.splice(currentIndex, 1);
    } else {
      updatedWords.splice(currentIndex, 1);
      updatedWords.push(currentWord);
    }

    setWords(updatedWords);
    setCurrentIndex(0);
    setShowTranslation(false);
  };

  const restartTest = () => {
    setWords([...wordsData]);
    setCurrentIndex(0);
    setShowTranslation(false);
  };

  if (words.length === 0) {
    return (
      <section className={`flashcard-container ${darkMode ? "dark" : "light"}`}>
        <h2>🎉 Усі слова вивчені!</h2>
        <button className="restart-btn" onClick={restartTest}>
          🔄 Почати заново
        </button>
      </section>
    );
  }

  const currentWord = words[currentIndex];
  const progress = ((wordsData.length - words.length) / wordsData.length) * 100;
  const currentNumber = wordsData.length - words.length + 1;

  return (
    <section className={`flashcard-container ${darkMode ? "dark" : "light"}`}>
      <h2 className="test-title">🧠 Тест на знання слів</h2>

      {/* Прогрес бар */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: progress + "%" }}></div>
      </div>

      {/* Картка */}
      <div className="card-wrapper">
        <div
          className={`flashcard ${showTranslation ? "flipped" : ""}`}
          onClick={() => setShowTranslation(!showTranslation)}
        >
          <div className="front">
            <div className="word">{currentWord.word}</div>
            <div className="transcription">{currentWord.transcription}</div>
          </div>
          <div className="back">
            <div className="translation">{currentWord.translation}</div>
          </div>
        </div>
      </div>

      {/* Кнопки Знаю/Не знаю */}
      <div className="buttons-wrapper">
        <button className="btn dont-know" onClick={() => handleAnswer(false)}>
          ❌ Не знаю
        </button>
        <button className="btn know" onClick={() => handleAnswer(true)}>
          ✅ Знаю
        </button>
      </div>

      <p className="progress-text">
        Слово {currentNumber} / {wordsData.length}
      </p>

      {/* Кнопка почати заново внизу */}
      <button className="restart-btn-bottom" onClick={restartTest}>
        🔄 Почати заново
      </button>
    </section>
  );
}

export default Test;