/* eslint-disable linebreak-style */

/**
 * @module models
 * @file greet.js
 * @description creating schema in monodb and and validating it
 * @package mongoose
 * @author Gautam Biswal
*/
const mongoose = require("mongoose");

const GreetSchema = mongoose.Schema({
  name: { type: String, required: true },
  Greet: { type: String, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Greet", GreetSchema);
