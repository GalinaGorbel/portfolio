const express = require('express');

const { body } = require('express-validator');

const contactController = require('../controllers/contact');

const router = express.Router();

router.get('/contact', contactController.getContact)

router.post('/contact',
    [
        body('name')
            .isLength({ min: 3 })
            .trim()
            .withMessage('Please, enter a valid name'),
        body('email')
            .isEmail()
            .withMessage('Please, enter a valid Email')
            .normalizeEmail(),
        body('message', 'Please, enter a message')
            .isLength({ min: 1 })
            .isAlpha()
    ],
    contactController.postContact)

module.exports = router;