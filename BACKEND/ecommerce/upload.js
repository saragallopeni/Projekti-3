const express = require('express');
const router = express.Router();
const databaza = require('./databaza');
const expressFileUpload = require('express-fileupload');

router.use(expressFileUpload());

router.post('/', (req, res) => {
  try {
    const { file } = req.files;

    if (!file) {
      return res.status(400).json({ error: 'Asnje foto nuk u vendos.' });
    }

    const uploadPath = __dirname + 'uploads' + file.name;

    file.mv(uploadPath, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error upload.' });
      }
      const fotoUrl = uploadPath;
      res.json({ message: 'Pordukti u shtua me sukses.' });
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error.' });
  }
});

module.exports = router;
