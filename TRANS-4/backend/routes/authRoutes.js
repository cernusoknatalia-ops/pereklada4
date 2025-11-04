const express = require('express');
const rateLimit = require('express-rate-limit');
const { register, login, logout, checkAuth } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();


const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Забагато спроб. Спробуйте пізніше.',
    standardHeaders: true,
    legacyHeaders: false,
});

router.post('/register', register);
router.post('/login', loginLimiter, login);
router.post('/logout', logout);
router.get('/check-auth', checkAuth);
router.get('/profile', authMiddleware, (req, res) => {
    res.json({ message: 'Це захищений профіль' });
});

module.exports = router;