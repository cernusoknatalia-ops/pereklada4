const jwt = require('jsonwebtoken');
const SECRET = 'supersecret'; // має збігатися з контролером

const authMiddleware = (req, res, next) => {
  try {
    // токен може бути або в cookie, або в headers
    const token =
      req.cookies.auth ||
      (req.headers.authorization && req.headers.authorization.split(' ')[1]);

    if (!token) {
      return res.status(401).json({ error: 'Немає токена, доступ заборонено' });
    }

    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;

    next();
  } catch (err) {
    console.error('Помилка перевірки токена:', err);
    res.status(403).json({ error: 'Недійсний або прострочений токен' });
  }
};

module.exports = authMiddleware;
