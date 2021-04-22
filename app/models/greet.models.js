/* eslint-disable linebreak-style */
const mongoose = require("mongoose");

const GreetSchema = mongoose.Schema({
  name: { type: String, required: true },
  Greet: { type: String, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Greet", GreetSchema);
