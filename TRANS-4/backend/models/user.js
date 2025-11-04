const db = require('../config/database');
const bcrypt = require('bcrypt');

class User {
    static async create(username, password) {
        const hashedPassword = await bcrypt.hash(password, 12);
        return new Promise((resolve, reject) => {
            db.run(
                'INSERT INTO users (username, password) VALUES (?, ?)', // ✅ виправлено дужку
                [username, hashedPassword],
                function (err) {
                    if (err) {
                        if (err.message.includes('UNIQUE constraint failed')) {
                            reject(new Error('Користувач вже існує'));
                        } else {
                            reject(err);
                        }
                    } else {
                        resolve({ id: this.lastID, username });
                    }
                }
            );
        });
    }

    static findByUsername(username) {
        return new Promise((resolve, reject) => {
            db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });
    }

    static async comparePassword(inputPassword, hashedPassword) {
        return await bcrypt.compare(inputPassword, hashedPassword);
    }
}

module.exports = User;
