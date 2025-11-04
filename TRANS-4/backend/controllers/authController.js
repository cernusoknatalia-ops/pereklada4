const User = require('../models/User');

const register = async (requestAnimationFrame, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ errror: 'Логін та пароль обов`язкові' });
        }
        await User.create(username, password);
        res.status(201).json({ message: 'Реєстрація успішна' });
    } catch (err) {
        if (err.message === 'Користувач вже існує') {
            res.status(409).json({ error: err.message });
        } else {
            console.error(err);
            res.status(500).json({ error: 'Помилка сервера' });
        }
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findByUsername(username);
        if (!user) {
            return res.status(401).json({ error: 'Неправильний логін або пароль' });
        }
        const isMatch = await User.comparePassword(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Неправильний логін або пароль' });
        }

        res.cookie('auth', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000,
            sameSite: 'lax'
        });
        res.json({ message: 'Успішний вхід' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Помилка сервера' });
    }
};

const logout = (req, res) => {
    res.clearCookie('auth', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
    });
    res.json({ message: 'Вихід успішний' });
};

const checkAuth = (req, res) => {
    res.json({ authenticated: !!req.cookies.auth });
};

module.exports = { register, login, logout, checkAuth };