const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.send('Tela de Login')
})

module.exports = router;