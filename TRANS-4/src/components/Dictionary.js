import words from "../data/words.json";

function Dictionary() {
  return (
    <section id="dictionary" className="card">
      <h2>📖 Мій словник</h2>
      <div className="word-cards">
        {words.map((item, i) => (
          <div key={i} className="word-card">
            {item.word} – {item.translation}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dictionary;