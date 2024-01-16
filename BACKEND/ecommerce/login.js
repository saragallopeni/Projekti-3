const express = require('express');
const router = express.Router();
const database = require('./databaza');
require('dotenv').config();
const jwt = require('jsonwebtoken');


router.use(express.json());

router.post('/', (req, res) => {
  try {
    const { email, password } = req.body;

    const query = 'SELECT * FROM perdoruesi WHERE email = ? AND fjalëkalimi = ?';
    database.query(query, [email, password], (err, rows) => {
      

      if (!rows) {
        return res.status(401).send('Emaili ose fjalëkalimi është gabim :( !!');
      } else if(rows.length === 0) {
        return res.status(404).send('Përdoruesi nuk ekziston në databazën tonë :( !!');
      }

      if (err) {
        console.error('Error ekzekutimi i query:', err);
        return res.status(500).send('Server error');
      }

      const user = rows[0];
      const { id, emri, roli } = user;

      const token = jwt.sign({ id, emri, roli }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.json({ token });
    });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
