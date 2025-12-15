import React, { useState, useEffect } from "react";
import "../App.css";

const testsData = [
  {
    id: "level-test",
    type: "multiple-choice",
    title: "Мій рівень",
    icon: "🧠",
    questions: [
      { q: "I ___ a student.", options: ["am", "is", "are"], answer: "am" },
      {
        q: "She ___ to the store.",
        options: ["go", "goes", "going"],
        answer: "goes",
      },
      {
        q: "They ___ playing football.",
        options: ["is", "are", "am"],
        answer: "are",
      },
      { q: "He ___ a teacher.", options: ["is", "am", "are"], answer: "is" },
      { q: "We ___ friends.", options: ["is", "am", "are"], answer: "are" },
      { q: "I ___ from Ukraine.", options: ["is", "am", "are"], answer: "am" },
      {
        q: "She ___ a book.",
        options: ["read", "reads", "reading"],
        answer: "reads",
      },
      {
        q: "They ___ at the park.",
        options: ["is", "are", "am"],
        answer: "are",
      },
      { q: "He ___ a car.", options: ["have", "has", "having"], answer: "has" },
      {
        q: "We ___ to school.",
        options: ["go", "goes", "going"],
        answer: "go",
      },
      {
        q: "I ___ like coffee.",
        options: ["do", "does", "doing"],
        answer: "do",
      },
      {
        q: "She ___ a dog.",
        options: ["have", "has", "having"],
        answer: "has",
      },
      { q: "They ___ happy.", options: ["is", "are", "am"], answer: "are" },
      { q: "He ___ a pen.", options: ["have", "has", "having"], answer: "has" },
      {
        q: "We ___ in the city.",
        options: ["live", "lives", "living"],
        answer: "live",
      },
      { q: "I ___ a teacher.", options: ["am", "is", "are"], answer: "am" },
      {
        q: "She ___ to work by car.",
        options: ["go", "goes", "going"],
        answer: "goes",
      },
      { q: "They ___ at home.", options: ["is", "are", "am"], answer: "are" },
      {
        q: "He ___ a book.",
        options: ["read", "reads", "reading"],
        answer: "reads",
      },
      {
        q: "We ___ to the movies.",
        options: ["go", "goes", "going"],
        answer: "go",
      },
      { q: "I ___ a student.", options: ["am", "is", "are"], answer: "am" },
      { q: "She ___ a teacher.", options: ["is", "am", "are"], answer: "is" },
      {
        q: "They ___ playing football.",
        options: ["is", "are", "am"],
        answer: "are",
      },
      { q: "He ___ a student.", options: ["is", "am", "are"], answer: "is" },
    ],
  },
  {
    id: "a1-flashcards",
    type: "multiple-choice",
    title: "A1 Grammar",
    icon: "📘",
    questions: [
      { q: "I ___ a student.", options: ["am", "is", "are"], answer: "am" },
      {
        q: "She ___ a book.",
        options: ["read", "reads", "reading"],
        answer: "reads",
      },
      {
        q: "They ___ at the park.",
        options: ["is", "are", "am"],
        answer: "are",
      },
      { q: "He ___ a car.", options: ["have", "has", "having"], answer: "has" },
      {
        q: "We ___ to school.",
        options: ["go", "goes", "going"],
        answer: "go",
      },
      {
        q: "I ___ like coffee.",
        options: ["do", "does", "doing"],
        answer: "do",
      },
      {
        q: "She ___ a dog.",
        options: ["have", "has", "having"],
        answer: "has",
      },
      { q: "They ___ happy.", options: ["is", "are", "am"], answer: "are" },
      { q: "He ___ a pen.", options: ["have", "has", "having"], answer: "has" },
      { q: "We ___ friends.", options: ["is", "am", "are"], answer: "are" },
      { q: "I ___ from Ukraine.", options: ["is", "am", "are"], answer: "am" },
      {
        q: "She ___ to the store every day.",
        options: ["go", "goes", "going"],
        answer: "goes",
      },
    ],
  },
  {
    id: "b1-grammar",
    type: "multiple-choice",
    title: "B1 Grammar",
    icon: "✍️",
    questions: [
      {
        q: "I ___ finished my homework.",
        options: ["have", "has", "had"],
        answer: "have",
      },
      {
        q: "She ___ never been to France.",
        options: ["have", "has", "had"],
        answer: "has",
      },
      {
        q: "We ___ going to the cinema.",
        options: ["is", "are", "am"],
        answer: "are",
      },
      {
        q: "He said he ___ seen it.",
        options: ["have", "has", "had"],
        answer: "had",
      },
      {
        q: "If I ___ more time, I would travel.",
        options: ["have", "has", "had"],
        answer: "had",
      },
      {
        q: "They ___ playing football now.",
        options: ["is", "are", "am"],
        answer: "are",
      },
      {
        q: "She ___ working here since 2015.",
        options: ["is", "has been", "have been"],
        answer: "has been",
      },
      {
        q: "I ___ my keys yesterday.",
        options: ["lost", "lose", "losing"],
        answer: "lost",
      },
      {
        q: "We ___ to London last summer.",
        options: ["went", "go", "gone"],
        answer: "went",
      },
      {
        q: "He ___ already eaten.",
        options: ["have", "has", "had"],
        answer: "has",
      },
      {
        q: "If it rains, we ___ stay home.",
        options: ["will", "would", "should"],
        answer: "will",
      },
      {
        q: "She ___ reading when I called.",
        options: ["was", "were", "is"],
        answer: "was",
      },
    ],
  },
  {
    id: "c1-grammar",
    type: "multiple-choice",
    title: "C1 Grammar",
    icon: "📗",
    questions: [
      {
        q: "Had I known, I ___ helped you.",
        options: ["would have", "will", "would"],
        answer: "would have",
      },
      {
        q: "She insists that he ___ on time.",
        options: ["be", "is", "was"],
        answer: "be",
      },
      {
        q: "If he ___ harder, he could succeed.",
        options: ["works", "worked", "had worked"],
        answer: "worked",
      },
      {
        q: "He acts as if he ___ the boss.",
        options: ["is", "were", "was"],
        answer: "were",
      },
      {
        q: "By next year, I ___ completed my degree.",
        options: ["will have", "would have", "have"],
        answer: "will have",
      },
      {
        q: "I suggest that she ___ careful.",
        options: ["be", "is", "was"],
        answer: "be",
      },
      {
        q: "Had they left earlier, they ___ caught the train.",
        options: ["would have", "will", "would"],
        answer: "would have",
      },
      {
        q: "If I ___ you, I would apologize.",
        options: ["am", "were", "was"],
        answer: "were",
      },
      {
        q: "It is time that he ___ to bed.",
        options: ["go", "goes", "went"],
        answer: "went",
      },
      {
        q: "I wish I ___ more patience.",
        options: ["have", "had", "has"],
        answer: "had",
      },
      {
        q: "She would rather that he ___ here.",
        options: ["be", "is", "was"],
        answer: "be",
      },
      {
        q: "If only I ___ listened.",
        options: ["have", "had", "has"],
        answer: "had",
      },
    ],
  },
  {
    id: "vocabulary-food",
    type: "flashcards",
    title: "Слова: Їжа",
    icon: "🥪",
    questions: [
      { word: "Bread", translation: "Хліб" },
      { word: "Milk", translation: "Молоко" },
      { word: "Cheese", translation: "Сир" },
      { word: "Egg", translation: "Яйце" },
      { word: "Butter", translation: "Масло" },
      { word: "Tomato", translation: "Помідор" },
      { word: "Onion", translation: "Цибуля" },
      { word: "Apple", translation: "Яблуко" },
      { word: "Banana", translation: "Банан" },
      { word: "Carrot", translation: "Морква" },
    ],
  },
  {
    id: "grammar-present-simple",
    type: "multiple-choice",
    title: "Present Simple",
    icon: "✍️",
    questions: [
      {
        q: "I ___ to school every day.",
        options: ["go", "goes", "going", "gone"],
        answer: "go",
      },
      {
        q: "She ___ breakfast at 7am.",
        options: ["eat", "eats", "eating", "ate"],
        answer: "eats",
      },
      {
        q: "We ___ happy yesterday.",
        options: ["is", "are", "was", "were"],
        answer: "were",
      },
      {
        q: "He ___ football on Sundays.",
        options: ["play", "plays", "playing", "played"],
        answer: "plays",
      },
      {
        q: "They ___ TV every night.",
        options: ["watch", "watches", "watching", "watched"],
        answer: "watch",
      },
      {
        q: "I ___ English.",
        options: ["study", "studies", "studying", "studied"],
        answer: "study",
      },
      {
        q: "She ___ to work by car.",
        options: ["go", "goes", "going", "went"],
        answer: "goes",
      },
      {
        q: "We ___ coffee in the morning.",
        options: ["drink", "drinks", "drinking", "drank"],
        answer: "drink",
      },
      {
        q: "He ___ very fast.",
        options: ["runs", "run", "running", "ran"],
        answer: "runs",
      },
      {
        q: "They ___ in a big house.",
        options: ["live", "lives", "living", "lived"],
        answer: "live",
      },
      {
        q: "I ___ often read books.",
        options: ["do", "does", "doing", "did"],
        answer: "do",
      },
      {
        q: "She ___ go to gym on weekends.",
        options: ["does", "do", "did", "doing"],
        answer: "does",
      },
    ],
  },
];

function Test({ darkMode }) {
  const [currentTest, setCurrentTest] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const [questionOrder, setQuestionOrder] = useState([]);

  const [customQuestions, setCustomQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({
    q: "",
    options: [],
    answer: "",
    word: "",
    translation: "",
  });
  const [creatingTest, setCreatingTest] = useState(false);
  const [testType, setTestType] = useState("");

  useEffect(() => {
    if (currentTest) {
      setCurrentIndex(0);
      setShowTranslation(false);
      setSelectedOption(null);
      setScore(0);
      setCompleted(false);

      if (currentTest.type === "flashcards") {
        setQuestionOrder(currentTest.questions.map((_, idx) => idx));
      }
    }
  }, [currentTest]);

  const handleFlashcardAnswer = (know) => {
    if (know) setScore((prev) => prev + 1);

    setQuestionOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const currentQuestionIdx = newOrder[currentIndex];

      if (!know) {
        newOrder.splice(currentIndex, 1);
        newOrder.push(currentQuestionIdx);
      } else {
        newOrder.splice(currentIndex, 1);
      }

      if (newOrder.length === 0) {
        setCompleted(true);
        return [];
      }

      return newOrder;
    });

    setCurrentIndex((prev) => {
      return questionOrder.length > 1 ? prev : 0;
    });

    setShowTranslation(false);
  };
  const handleChoiceAnswer = (option) => {
    setSelectedOption(option);
    if (option === currentTest.questions[currentIndex].answer)
      setScore((prev) => prev + 1);
  };

  const nextChoiceQuestion = () => {
    setSelectedOption(null);
    if (currentIndex + 1 >= currentTest.questions.length) setCompleted(true);
    else setCurrentIndex((prev) => prev + 1);
  };

  const restartTest = () => {
    setCurrentIndex(0);
    setShowTranslation(false);
    setSelectedOption(null);
    setScore(0);
    setCompleted(false);

    if (currentTest.type === "flashcards") {
      setQuestionOrder(currentTest.questions.map((_, idx) => idx));
    }
  };

  const addCustomQuestion = () => {
    if (testType === "multiple-choice") {
      if (
        !newQuestion.q ||
        newQuestion.options.length < 2 ||
        !newQuestion.answer
      )
        return;
    } else {
      if (!newQuestion.word || !newQuestion.translation) return;
    }
    setCustomQuestions([...customQuestions, { ...newQuestion }]);
    setNewQuestion({
      q: "",
      options: [],
      answer: "",
      word: "",
      translation: "",
    });
  };

  const startCustomTest = () => {
    if (customQuestions.length === 0) return;
    setCurrentTest({
      id: "custom",
      type: testType,
      title: "Мій тест",
      icon: "📝",
      questions: customQuestions,
    });
    setCreatingTest(false);
  };

  if (!currentTest && !creatingTest) {
    return (
      <section className={`flashcard-container ${darkMode ? "dark" : "light"}`}>
        <h2>📚 Оберіть тест</h2>
        <div className="test-menu">
          {testsData.map((test) => (
            <div
              key={test.id}
              className="test-card"
              onClick={() => setCurrentTest(test)}
            >
              <div className="test-icon">{test.icon}</div>
              <div className="test-title">{test.title}</div>
            </div>
          ))}
        </div>
        <div className="create-test-bottom">
          <button onClick={() => setCreatingTest(true)}>
            ➕ Створити свій тест
          </button>
        </div>
      </section>
    );
  }

  if (creatingTest) {
    return (
      <section className={`flashcard-container ${darkMode ? "dark" : "light"}`}>
        <h2>🛠 Створення тесту</h2>
        {!testType ? (
          <div className="choose-type">
            <button onClick={() => setTestType("flashcards")}>Флешкарти</button>
            <button onClick={() => setTestType("multiple-choice")}>
              Граматика / Multiple-choice
            </button>
          </div>
        ) : (
          <div className="custom-test">
            {testType === "multiple-choice" ? (
              <>
                <input
                  type="text"
                  placeholder="Питання"
                  value={newQuestion.q}
                  onChange={(e) =>
                    setNewQuestion({ ...newQuestion, q: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Опція 1"
                  onChange={(e) =>
                    setNewQuestion({
                      ...newQuestion,
                      options: [
                        e.target.value,
                        ...newQuestion.options.slice(1),
                      ],
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Опція 2"
                  onChange={(e) =>
                    setNewQuestion({
                      ...newQuestion,
                      options: [newQuestion.options[0], e.target.value],
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Правильна відповідь"
                  value={newQuestion.answer}
                  onChange={(e) =>
                    setNewQuestion({ ...newQuestion, answer: e.target.value })
                  }
                />
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Слово / Фронт"
                  value={newQuestion.word}
                  onChange={(e) =>
                    setNewQuestion({ ...newQuestion, word: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Переклад / Бек"
                  value={newQuestion.translation}
                  onChange={(e) =>
                    setNewQuestion({
                      ...newQuestion,
                      translation: e.target.value,
                    })
                  }
                />
              </>
            )}
            <button className="restart-btn" onClick={addCustomQuestion}>
              Додати питання
            </button>
            {customQuestions.length > 0 && (
              <button className="restart-btn" onClick={startCustomTest}>
                Розпочати тест
              </button>
            )}
            <button
              className="restart-btn"
              onClick={() => setCreatingTest(false)}
            >
              🔙 Повернутися до меню
            </button>
          </div>
        )}
      </section>
    );
  }

  const question =
    currentTest.type === "flashcards"
      ? currentTest.questions[questionOrder[currentIndex]]
      : currentTest.questions[currentIndex];

  return (
    <section className={`flashcard-container ${darkMode ? "dark" : "light"}`}>
      <h2>
        {currentTest.icon} {currentTest.title}
      </h2>
      <p className="progress-text">
        {currentTest.type === "flashcards"
          ? `Вибрано знаю: ${score}/${currentTest.questions.length}`
          : `Питання ${currentIndex + 1} з ${currentTest.questions.length}`}
      </p>

      {currentTest.type === "flashcards" && !completed && question && (
        <>
          <div className="card-wrapper">
            <div
              className={`flashcard ${showTranslation ? "flipped" : ""}`}
              onClick={() => setShowTranslation(!showTranslation)}
            >
              <div className="front">{question.word}</div>
              <div className="back">{question.translation}</div>
            </div>
          </div>
          <div className="buttons-wrapper">
            <button
              className="btn dont-know"
              onClick={() => handleFlashcardAnswer(false)}
            >
              ❌ Не знаю
            </button>
            <button
              className="btn know"
              onClick={() => handleFlashcardAnswer(true)}
            >
              ✅ Знаю
            </button>
          </div>
        </>
      )}

      {currentTest.type === "multiple-choice" && !completed && (
        <>
          <p>{question.q || question.question}</p>
          <div className="buttons-wrapper">
            {question.options.map((opt) => (
              <button
                key={opt}
                className={`btn ${selectedOption === opt ? "selected" : ""}`}
                onClick={() => handleChoiceAnswer(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="navigation">
            {selectedOption && (
              <button className="restart-btn" onClick={nextChoiceQuestion}>
                ➡️ Наступне
              </button>
            )}
          </div>
        </>
      )}

      {completed && (
        <>
          <h3>Тест завершено!</h3>
          <p>
            Ваші бали: {score}/{currentTest.questions.length}
          </p>
          <button className="restart-btn" onClick={restartTest}>
            🔄 Пройти знову
          </button>
          <button className="restart-btn" onClick={() => setCurrentTest(null)}>
            🏠 Повернутися до меню
          </button>
        </>
      )}
    </section>
  );
}

export default Test;
