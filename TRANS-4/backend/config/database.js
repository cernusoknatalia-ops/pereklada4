const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// шлях до файлу бази
const dbPath = path.join(__dirname, '../data/database.sqlite');

// створюємо підключення
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Помилка підключення до бази:', err.message);
  } else {
    console.log('✅ Підключено до бази даних SQLite');
  }
});

// створюємо таблицю користувачів, якщо її ще нема
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )
`);

module.exports = db;
