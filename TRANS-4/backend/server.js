const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// ==== Безпека ====
app.use(helmet({
  crossOriginResourcePolicy: false,
}));
app.use(cookieParser());

// ==== CORS ДО маршрутів ====
app.use(cors({
  origin: "http://localhost:3000", // твій фронтенд
  credentials: true,               // дозволяє передавати cookie
}));

// ==== Парсер JSON ====
app.use(express.json({ limit: '10mb' }));

// ==== Маршрути бекенду ====
app.use('/api/auth', authRoutes);

// ==== Статичні файли (React build) ====
app.use(express.static(path.join(__dirname, '../frontend/build')));

// ==== Всі інші маршрути ведуть на React (Express 5 fix) ====
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// ==== Запуск сервера ====
app.listen(PORT, () => {
  console.log(`✅ Сервер запущено на http://localhost:${PORT}`);
});
