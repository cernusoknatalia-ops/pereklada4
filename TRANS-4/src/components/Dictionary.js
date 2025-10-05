import words from "../data/words.json";

function Dictionary() {
  return (
    <section id="dictionary" className="card">
      <h2 className="dictionary-title">📖 Мій словник</h2>

      <div className="dictionary-list">
        {words.length > 0 ? (
          words.map((item, i) => (
            <div key={i} className="dictionary-item">
              <span className="word">{item.word}</span>
              <span className="translation">{item.translation}</span>
              <span className="transcription">{item.transcription}</span>
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