const express = require('express');
const router = express.Router();
const databaza = require('./databaza');

router.post('/', (req, res) => {

  console.log('Kërkesa:', req.body);

  const { emri, cmimi, sasia, pershkrimi, kategoria} = req.body;

  if (emri === '' || cmimi === 0 || sasia === 0 || pershkrimi === '' || kategoria === '' ) {
    return res.status(400).json({ error: 'Të lutem mbushi fushat e produktit' });
  }
  
  const sql = `INSERT INTO produkte (emri, cmimi, sasia, pershkrimi, kategoria) VALUES (?, ?, ?, ?, ?)`;

  console.log('Të dhënat e shtuara:', { emri, cmimi, sasia, pershkrimi, kategoria});

  databaza.query(sql, [emri, cmimi, sasia, pershkrimi, kategoria], (error) => {

    
    if (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }

 
    res.json({ message: 'Produkti u shtua me sukses' });
  });
});


module.exports = router;
