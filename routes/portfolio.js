const express = require('express');

const portfolioController = require('../controllers/portfolio');

const router = express.Router();

router.get('/portfolio', portfolioController.getPortfolio)

module.exports = router;