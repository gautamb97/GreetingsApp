/* eslint-disable linebreak-style */
/**
 * @file helper.js
 * @description for validating the data that we are getting from client
 * @package joi
 * @author Gautam Biswal
*/
const Joi = require("joi");

const authSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .required()
    .pattern(new RegExp("^[A-Z][a-z]{3,}$")),

  Greet: Joi.string()
    .required(),
});

module.exports = {
  authSchema,
};
