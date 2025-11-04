const authMiddleware = (req, res, next) => {
    if (!req.cookies.auth) {
        return res.status(401).json({ error: 'Не авторизовано'});
    }
    next();
};

module.exports = authMiddleware;