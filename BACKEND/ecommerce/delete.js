// delete.js
const express = require('express');
const router = express.Router();
const databaza = require('./databaza');

router.delete('/:id', (req, res) => {
    
    const id = req.params.id;
    
    const sql = 'DELETE FROM produkte WHERE produkti_id = ?';

    console.log('Kërkesa për fshirjen e produktit :', id);

    databaza.query(sql, [id], (error, results) => {
       
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Asnjë produkt nuk u gjet !' });
        }
        
        if (error) {
            console.error('Error:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }

        res.json({ message: 'Produkti u fshi me sukses' });
    });
});

module.exports = router;
