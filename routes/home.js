const express = require('express');

const router = express.Router();

router.get('/home', (req, res, next) => {
    res.redirect('/')
})

module.exports = router;