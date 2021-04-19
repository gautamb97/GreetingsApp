const Greet = require('../models/greet.models.js');
// const service = models.Greet;

// module.exports = {'service': service}
const {check,sanitizeBody} = require('express-validator');
exports.Greet=[
    check('name').notEmpty().withMessage('Name is required')
    .matches(/^[A-Z][a-z]{3,}$/).withMessage('Minimum three characters required and should have the first letter in uppercase'),
    check('Greet').notEmpty()
]