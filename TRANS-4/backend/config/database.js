const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../../database/app.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Помилка підключення до БД:', err.message);
    } else {
        console.log('Підключено до SQLite');
    }
});


db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT ,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
});

module.exports = db;