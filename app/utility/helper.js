const Joi = require('joi');

const authSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .required()
        .pattern(new RegExp('^[A-Z][a-z]{3,}$')),

    Greet: Joi.string()
        .required()
})

module.exports = {
    authSchema,
}