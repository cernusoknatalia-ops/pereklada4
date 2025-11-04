import words from "../data/words.json";

function Dictionary() {
  return (
    <section id="dictionary" className="card">
      <h2 className="dictionary-title">📖 Мій словник</h2>

      <div className="dictionary-list">
        {words.length > 0 ? (
          words.map((item, i) => (
            <div key={i} className="dictionary-item">
              {/* Перший рядок: слово + переклад */}
              <div className="word-translation">
                <span className="word">{item.word}</span> —{" "}
                <span className="translation">{item.translation}</span>
              </div>
              {/* Другий рядок: транскрипція */}
              <div className="transcription">{item.transcription}</div>
            </div>
          ))
        ) : (
          <p className="no-words">Поки що немає доданих слів 😅</p>
        )}
      </div>
    </section>
  );
}

export default Dictionary;
