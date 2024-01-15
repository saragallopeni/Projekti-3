const express = require('express');
const router = express.Router();
const databaza = require('./databaza');

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const produkti = req.body;

  const sql = 'UPDATE produkte SET emri = ?, cmimi = ?, sasia = ?, pershkrimi = ?, kategoria = ? WHERE produkti_id = ?';

  databaza.query(
    sql,
    [produkti.emri, produkti.cmimi, produkti.sasia, produkti.pershkrimi, produkti.kategoria, id],
    (error) => {
      if (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.json({ message: 'Produkti u ndryshua' });
    }
  );
});

module.exports = router;
