const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const path = require('path');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cookieParser());

app.use(express.json({ limit: '10mb' }));

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use('/api', authRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Сервер запущено на http:localhost:${PORT}`);
});