/* eslint-disable linebreak-style */
const Greet = require("../services/greet.services.js");
const { authSchema } = require("../utility/helper");

exports.create = (req, res) => {
  const result = authSchema.validate(req.body);
  // message: 'Name sholud contain 3 characters and Starts with Caps'
  if (result.error) {
    return res.send(result);
  }
  return Greet.create(req, res);
};

exports.findAll = (req, res) => {
  Greet.findAll(req, res);
};

exports.findOne = (req, res) => {
  Greet.findOne(req, res);
};

exports.update = (req, res) => {
  Greet.update(req, res);
};

exports.delete = (req, res) => {
  Greet.delete(req, res);
};
