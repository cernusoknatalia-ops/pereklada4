const User = require("../models/User");
const jwt = require("jsonwebtoken");

const SECRET = "supersecret";

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "Логін та пароль обов’язкові" });
    }

    await User.create(username, password);

    const token = jwt.sign({ username }, SECRET, { expiresIn: "1d" });

    res.cookie("auth", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(201).json({ message: "Реєстрація успішна", token });
  } catch (err) {
    if (err.message === "Користувач вже існує") {
      res.status(409).json({ error: err.message });
    } else {
      console.error(err);
      res.status(500).json({ error: "Помилка сервера" });
    }
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findByUsername(username);

    if (!user) {
      return res.status(401).json({ error: "Неправильний логін або пароль" });
    }

    const isMatch = await User.comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Неправильний логін або пароль" });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, SECRET, {
      expiresIn: "1d",
    });

    res.cookie("auth", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ message: "Успішний вхід", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Помилка сервера" });
  }
};

module.exports = { register, login };
