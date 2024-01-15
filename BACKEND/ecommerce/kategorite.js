const express = require('express');
const router = express.Router();
const databaza = require('./databaza');

router.get('/', (req, res) => {

    const sql = 'SELECT kategoria FROM kategoria';

    databaza.query(sql, (error, results) => {
      if (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(results);
    })

  });

  module.exports = router;