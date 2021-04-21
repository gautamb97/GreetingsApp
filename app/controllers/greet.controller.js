/* eslint-disable linebreak-style */
const Greet = require('../services/greet.services.js');
const {authSchema } = require('../utility/helper')

class GreetingApp{
    create = (req, res) => {
    // Validate request
    if(!req.body.Greet) {
        return res.status(400).send({
            message: "Greet content can not be empty"
        });
    }

    // Create a Greet
    const greet = new Greet({
        name: req.body.name || "Untitled Greet", 
        Greet: req.body.Greet
    });

    const result = authSchema.validate(req.body)
    //message: 'Name sholud contain 3 characters and Starts with Caps'
    if(result.error){
        res.send(result)
    return
    }
    // Save Greet in the database
    greet.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Greet."
        });
    });
    };

    // Retrieve and return all greets from the database.
    findAll = (req, res) => {
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
    findOne = (req, res) => {
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
    update = (req, res) => {
        // Validate Request
        if(!req.body.content) {
            return res.status(400).send({
                message: "Greet content can not be empty"
            });
        }

        // Find greet and update it with the request body
        Greet.findByIdAndUpdate(req.params.greetId, {
            title: req.body.title || "Untitled Greet",
            content: req.body.content
        }, {new: true})
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
                message: "Error updating greet with id " + req.params.greetId
            });
        });
    };

    // Delete a greet with the specified greetId in the request
    delete = (req, res) => {
        Greet.findByIdAndRemove(req.params.greetId)
        .then(greet => {
            if(!greet) {
                return res.status(404).send({
                    message: "Greet not found with id " + req.params.greetId
                });
            }
            res.send({message: "Greet deleted successfully!"});
        }).catch(err => {
            if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Greet not found with id " + req.params.greetId
                });                
            }
            return res.status(500).send({
                message: "Could not delete greet with id " + req.params.greetId
            });
        });
    };
}

module.exports = new GreetingApp();