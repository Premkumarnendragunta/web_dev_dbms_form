const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Premm@2005',  
  database: 'workshop'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// API endpoint
app.post('/submit', (req, res) => {
  const { name, email, college } = req.body;
  const sql = 'INSERT INTO participants (name, email, college) VALUES (?, ?, ?)';
  db.query(sql, [name, email, college], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(' Error saving data');
    }
    res.send('Registration successful!');
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
