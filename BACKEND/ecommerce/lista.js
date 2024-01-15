
const express = require('express');
const router = express.Router();
const databaza = require('./databaza');

router.get('/', (req, res) => {

    const sql = 'SELECT * FROM produkte';

    databaza.query(sql, (error, results) => {

      if(results.length === 0){

        return res.status(404).json({ message: 'Asnjë produkt nuk u gjet !' });
      }

      if (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(results);
    })

  
  });

  module.exports = router;