const mongoose = require('mongoose');

const GreetSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Greet', GreetSchema);