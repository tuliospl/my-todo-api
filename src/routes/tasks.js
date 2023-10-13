const express = require('express');
const router = express.Router();

router.get('/tasks', (req, res) => {
    res.send('Tela de tasks')
})

module.exports = router;