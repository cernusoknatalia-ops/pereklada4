import React from "react";
import "./Home.css";

function Home({ onStartLearning }) {
  const handleStartLearning = () => {
    onStartLearning();
  };

  return (
    <div className="Home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>QuapsE</h1>
          <p>Вивчати англійську так само просто, як дивитись серіали! 📺</p>

          {/* Кнопка Почати навчання */}
          <button className="start-btn" onClick={handleStartLearning}>
            Почати навчання
          </button>
        </div>
      </section>

      {/* Levels Section */}
      <section className="levels-section">
        <div className="container">
          <h2>📚 Рівні англійської</h2>
          <div className="cards">
            <div className="card">
              <div className="card-content">
                <h3>My level</h3>
                <p>Визнач свій поточний рівень</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3>A1-A2</h3>
                <p>Початковий рівень</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3>B1-B2</h3>
                <p>Середній рівень</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3>C1-C2</h3>
                <p>Просунутий рівень</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>✨ Чому QuapsE?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Інтерактивні тести</h3>
              <p>Перевір свої знання за допомогою цікавих тестів</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📖</div>
              <h3>Словник</h3>
              <p>Створюй власний словник та вивчай нові слова</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Перекладач</h3>
              <p>Миттєвий переклад англійською та українською</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Прогрес</h3>
              <p>Відстежуй свій прогрес у навчанні</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p></p>
      </footer>
    </div>
  );
}

export default Home;
