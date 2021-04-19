module.exports = (app) => {
    const greets = require('../controllers/greet.controller');

    // Create a new Greet
    app.post('/greets', greets.create);

    // Retrieve all Greet
    app.get('/greets', greets.findAll);

    // Retrieve a single Greet with greetId
    app.get('/greets/:greetId', greets.findOne);

    // Update a Greet with greetId
    app.put('/greets/:greetId', greets.update);

    // Delete a Greet with greetId
    app.delete('/greets/:greetId', greets.delete);
}