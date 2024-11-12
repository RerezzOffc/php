const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

// Middleware untuk parsing data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Menggunakan EJS sebagai template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routing dasar
app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to My Website' });
});

// Menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
