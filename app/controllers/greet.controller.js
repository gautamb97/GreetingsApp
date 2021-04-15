const Greet = require('../models/greet.models.js');

// Create and Save a new Greet
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Greet content can not be empty"
        });
    }

    // Create a Greet
    const note = new Greet({
        title: req.body.title || "Untitled Greet", 
        content: req.body.content
    });

    // Save Greet in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Greet."
        });
    });
};

// Retrieve and return all greets from the database.
exports.findAll = (req, res) => {
    Greet.find()
    .then(greets => {
        res.send(greets);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving greets."
        });
    });
};

// Find a single greet with a greetId
exports.findOne = (req, res) => {
    Greet.findById(req.params.greetId)
    .then(greet => {
        if(!greet) {
            return res.status(404).send({
                message: "Greet not found with id " + req.params.greetId
            });            
        }
        res.send(greet);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Greet not found with id " + req.params.greetId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving greet with id " + req.params.greetId
        });
    });
};

// Update a greet identified by the greetId in the request
exports.update = (req, res) => {

};

// Delete a greet with the specified greetId in the request
exports.delete = (req, res) => {

};