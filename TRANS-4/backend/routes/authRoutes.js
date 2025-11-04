const express = require('express');
const rateLimit = require('express-rate-limit');
const { register, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Обмеження на спроби логіну
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 хв
  max: 5,
  message: 'Забагато спроб. Спробуйте пізніше.',
  standardHeaders: true,
  legacyHeaders: false,
});

// ====== Основні маршрути ======
router.post('/register', register);
router.post('/login', loginLimiter, login);

// ====== Захищений маршрут ======
router.get('/profile', authMiddleware, (req, res) => {
  res.json({
    message: `Це захищений профіль користувача: ${req.user.username}`,
    user: req.user,
  });
});

// ====== Вихід (очищення токена з cookie) ======
router.post('/logout', (req, res) => {
  res.clearCookie('auth', {
    httpOnly: true,
    secure: false, // true якщо HTTPS
    sameSite: 'lax',
  });
  res.json({ message: 'Вихід успішний' });
});

// ====== Перевірка авторизації ======
router.get('/check-auth', authMiddleware, (req, res) => {
  res.json({ authenticated: true, user: req.user });
});

module.exports = router;
