const express = require("express");
const rateLimit = require("express-rate-limit");
const { register, login } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

const loginLimiter = rateLimit({
  windowMs: 3 * 60 * 1000,
  max: 5,
  message: "Забагато спроб. Спробуйте пізніше.",
  standardHeaders: true,
  legacyHeaders: false,
});

router.post("/register", register);
router.post("/login", loginLimiter, login);

router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: `Це захищений профіль користувача: ${req.user.username}`,
    user: req.user,
  });
});

router.post("/logout", (req, res) => {
  res.clearCookie("auth", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });
  res.json({ message: "Вихід успішний" });
});
router.get("/check-auth", authMiddleware, (req, res) => {
  res.json({ authenticated: true, user: req.user });
});

module.exports = router;
