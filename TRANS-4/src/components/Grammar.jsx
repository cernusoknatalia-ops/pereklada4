import React, { useState } from "react";
import "./Grammar.css";

const grammarTopics = [
  {
    id: 1,
    title: "Present Simple",
    img: "https://picsum.photos/seed/presentSimple/400/300",
    rules: [
      "Використовується для регулярних дій та фактів.",
      "Структура: Subject + base verb (he/she/it + s/es).",
      "Вживається з частками: always, usually, every day.",
      "Не використовується для дій, що відбуваються зараз.",
      "Приклади: I work every day; She likes coffee.",
    ],
    videoEmbed: "https://www.youtube.com/embed/LjwqoF-ecvc",
  },
  {
    id: 2,
    title: "Present Continuous",
    img: "https://picsum.photos/seed/presentContinuous/400/300",
    rules: [
      "Дія відбувається зараз або тимчасово.",
      "Структура: Subject + am/is/are + verb‑ing.",
      "Може описувати майбутні плани.",
      "Не використовується для звичок та регулярних дій.",
      "Приклад: I am reading now.",
    ],
    videoEmbed: "https://www.youtube.com/embed/5PbaH1hAN4M",
  },
  {
    id: 3,
    title: "Past Simple",
    img: "https://picsum.photos/seed/pastSimple/400/300",
    rules: [
      "Дія сталася у минулому та завершилася.",
      "Структура: Subject + past verb (regular +ed / irregular).",
      "Вживаються слова: yesterday, ago, last year.",
      "Часто використовується для розповіді про минулі події.",
      "Приклади: I visited Paris; She went to school.",
    ],
    videoEmbed: "https://www.youtube.com/embed/lGDpVzuAw10",
  },
  {
    id: 4,
    title: "Past Continuous",
    img: "https://picsum.photos/seed/pastContinuous/400/300",
    rules: [
      "Тривала дія в минулому.",
      "Структура: Subject + was/were + verb‑ing.",
      "Використовується з while/when.",
      "Не використовується для коротких завершених дій.",
      "Приклад: I was reading at 8pm.",
    ],
    videoEmbed: "https://www.youtube.com/embed/Clbh9-7GUkE",
  },
  {
    id: 5,
    title: "Future Simple",
    img: "https://picsum.photos/seed/futureSimple/400/300",
    rules: [
      "Використовується для дій у майбутньому.",
      "Структура: Subject + will + base verb.",
      "Вживання: передбачення, обіцянки, спонтанні рішення.",
      "Не використовується для запланованих дій.",
      "Приклад: I will call you tomorrow.",
    ],
    videoEmbed: "https://www.youtube.com/embed/6_QV4yWKb9w",
  },
  {
    id: 6,
    title: "Future Continuous",
    img: "https://picsum.photos/seed/futureContinuous/400/300",
    rules: [
      "Тривала дія у майбутньому.",
      "Структура: Subject + will be + verb‑ing.",
      "Використовується для планування майбутніх дій у процесі.",
      "Може описувати передбачувану ситуацію.",
      "Приклад: I will be working at 6pm.",
    ],
    videoEmbed: "https://www.youtube.com/embed/jfK_aoFwoHQ",
  },
  {
    id: 7,
    title: "Present Perfect",
    img: "https://picsum.photos/seed/presentPerfect/400/300",
    rules: [
      "Дія, що відбулася у минулому, але важлива зараз.",
      "Структура: Subject + have/has + past participle.",
      "Вживання: досвід, зміни, незавершена дія.",
      "Не використовується з конкретним часом в минулому.",
      "Приклад: I have seen this movie.",
    ],
    videoEmbed: "https://www.youtube.com/embed/PeGqIg2DN84",
  },
  {
    id: 8,
    title: "Present Perfect Continuous",
    img: "https://picsum.photos/seed/presentPerfCont/400/300",
    rules: [
      "Тривала дія, що почалася в минулому і триває до тепер.",
      "Структура: Subject + have/has been + verb‑ing.",
      "Вживається для підкреслення тривалості.",
      "Може вказувати на результат дії.",
      "Приклад: I have been working all day.",
    ],
    videoEmbed: "https://www.youtube.com/embed/m8_4Dp2vMl8",
  },
  {
    id: 9,
    title: "Past Perfect",
    img: "https://picsum.photos/seed/pastPerfect/400/300",
    rules: [
      "Дія, що відбулася перед іншою дією у минулому.",
      "Структура: Subject + had + past participle.",
      "Вживається для хронології подій.",
      "Часто використовується з before/after/when.",
      "Приклад: I had finished my work before he came.",
    ],
    videoEmbed: "https://www.youtube.com/embed/UC9HHWCPk_A",
  },
  {
    id: 10,
    title: "Past Perfect Continuous",
    img: "https://picsum.photos/seed/pastPerfCont/400/300",
    rules: [
      "Тривала дія до певного моменту в минулому.",
      "Структура: Subject + had been + verb‑ing.",
      "Використовується для підкреслення тривалості минулої дії.",
      "Часто супроводжується before/for/since.",
      "Приклад: I had been waiting for an hour.",
    ],
    videoEmbed: "https://www.youtube.com/embed/JqrUzWQzWfA",
  },
  {
    id: 11,
    title: "Future Perfect",
    img: "https://picsum.photos/seed/futurePerfect/400/300",
    rules: [
      "Дія завершиться до певного моменту в майбутньому.",
      "Структура: Subject + will have + past participle.",
      "Використовується для прогнозів або планів.",
      "Часто вказує на очікуваний результат.",
      "Приклад: I will have finished by 6pm.",
    ],
    videoEmbed: "https://www.youtube.com/embed/KLALHwKPlxk",
  },
  {
    id: 12,
    title: "Future Perfect Continuous",
    img: "https://picsum.photos/seed/futurePerfectContinuous/400/300",
    rules: [
      "Тривала дія, що триватиме до певного моменту у майбутньому.",
      "Структура: Subject + will have been + verb‑ing.",
      "Використовується для підкреслення тривалості дії.",
      "Часто вказується за допомогою for/since.",
      "Приклад: I will have been working for 2 hours by noon.",
    ],
    videoEmbed: "https://www.youtube.com/embed/I_FI0soOnOc",
  },
];

export default function Grammar({ darkMode, designStyle = "classic" }) {
  const [selected, setSelected] = useState(null);
  const current = grammarTopics.find((t) => t.id === selected);

  return (
    <div className="grammar-page" data-theme={darkMode ? "dark" : "light"}>
      {!selected ? (
        <>
          <div className="grammar-banner">
            <h1>Граматика</h1>
            <p>Виберіть тему, щоб почати навчання.</p>
          </div>

          <h2 className="grammar-section-title">Теми граматика</h2>
          <div className="grammar-grid">
            {grammarTopics.map((topic) => (
              <div key={topic.id} className="grammar-card">
                <img
                  src={topic.img}
                  alt={topic.title}
                  style={{ width: "100%", height: "150px", objectFit: "cover" }}
                />
                <h3>{topic.title}</h3>
                <button onClick={() => setSelected(topic.id)}>Відкрити</button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="grammar-content">
          <button className="back-btn" onClick={() => setSelected(null)}>
            Назад
          </button>

          <h2 className="content-title">{current.title}</h2>

          <ul className="rules-list">
            {current.rules.map((rule, idx) => (
              <li key={idx} className="rule-item">
                {rule}
              </li>
            ))}
          </ul>

          <div className="video-container">
            <iframe
              src={current.videoEmbed}
              title={current.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
