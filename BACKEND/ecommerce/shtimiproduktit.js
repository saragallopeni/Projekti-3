const express = require('express');
const router = express.Router();
const databaza = require('./databaza');
const fileUpload = require('express-fileupload');
const path = require('path');

router.use(fileUpload());

router.post('/', (req, res) => {
  try {
    const { emri, cmimi, sasia, pershkrimi, kategoria } = req.body;

    if (!emri || !cmimi || !sasia || !pershkrimi || !kategoria) {
      return res.status(400).json({ error: 'Ju lutem mbushni te gjitha fushat' });
    }
    
    let fotoUrl = '';
    
    if (req.files && req.files.photo) {
      const photo = req.files.photo;
      const uploadPath = path.join(__dirname, 'uploads', photo.name);
    
      photo.mv(uploadPath, (err) => {
        if (err) {
          return res.status(500).json({ error: 'Error uploading photo' });
        }
        fotoUrl = `/uploads/${photo.name}`;
    
        const sql = `INSERT INTO produkte (emri, cmimi, sasia, pershkrimi, kategoria, foto_url) VALUES (?, ?, ?, ?, ?, ?)`;
        databaza.query(sql, [emri, cmimi, sasia, pershkrimi, kategoria, fotoUrl], (error) => {
          if (error) {
            console.error('Error:', error);
            return res.status(500).json({ error: 'Internal server error' });
          }
          res.json({ message: 'Produkti u shtua me sukses', foto_url: fotoUrl });
        });
      });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
