/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const GreetSchema = mongoose.Schema({
    name: String,
    Greet: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Greet', GreetSchema);