const Messages = require('../models/messages');

const { validationResult } = require('express-validator');

exports.getContact = (req, res, next) => {
    res.render('contact', {
        pageTitle: 'Contact',
        path: '/contact',
        oldInput: {
            email: '',
            message: '',
            name: ''
        },
    });
}

exports.postContact = (req, res) => {
    let { name, email, message } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(422).render('contact', {
            path: '/contact',
            pageTitle: 'Contact',
            errorMessage: errors.array()[0].msg,
            oldInput: {
                email: email,
                message: message,
                name: name
            },
        })
    } else {
        const newMessage = new Messages(name, email, message)

        newMessage.save()

        res.redirect('/')
    }

}

