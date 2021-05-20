/* eslint-disable linebreak-style */
/**
 * @file service.js
 * @description it acts as middleware between models and controller
 * @author Gautam Biswal
*/
const Greet = require("../models/greet.js");

class GreetingApp {
    create = (req, res) => {
    // Validate request
      if (!req.body.Greet) {
        return res.status(400).send({
          message: "Greet content can not be empty",
        });
      }

      // Create a Greet
      const greet = new Greet({
        name: req.body.name || "Untitled Greet",
        Greet: req.body.Greet,
      });

      // Save Greet in the database
      greet.save()
        .then((data) => {
          res.status(200).send({
            success: true,
            message: "Greet added successfuly",
            data,
          });
        }).catch((err) => {
          res.status(500).send({
            message: err.message || "Some error occurred while creating the Greet.",
          });
        });
    };

    // Retrieve and return all greets from the database.
    findAll = (res) => {
      Greet.find()
        .select("name Greet _id")
        .then((greets) => {
          res.status(200).send({
            success: true,
            message: "Found all the Greets",
            data: greets,
          });
        }).catch((err) => {
          res.status(500).send({
            message: err.message || "Some error occurred while retrieving greets.",
          });
        });
    };

    // Find a single greet with a greetId
    findOne = (req, res) => {
      Greet.findById(req.params.greetId)
        .select("name Greet _id")
        .then((greet) => {
          if (!greet) {
            return res.status(404).send({
              message: `Greet not found with id ${req.params.greetId}`,
            });
          }
          return res.status(200).send({
            success: true,
            message: "Greet found successfuly",
            data: greet,
          });
        }).catch((err) => {
          if (err.kind === "ObjectId") {
            return res.status(404).send({
              message: `Greet not found with id ${req.params.greetId}`,
            });
          }
          return res.status(500).send({
            message: `Error retrieving greet with id ${req.params.greetId}`,
          });
        });
    };

    // Update a greet identified by the greetId in the request
    update = (req, res) => {
      // Validate Request
      if (!req.body.Greet) {
        return res.status(400).send({
          success: false,
          message: "Greet content can not be empty",
        });
      }

      // Find greet and update it with the request body
      Greet.findByIdAndUpdate(req.params.greetId, {
        name: req.body.name || "Untitled Greet",
        Greet: req.body.Greet,
      }, {
        new: true,
        useFindAndModify: false,
      }).select("name Greet _id")
        .then((greet) => {
          if (!greet) {
            return res.status(404).send({
              success: false,
              message: `Greet not found with id ${req.params.greetId}`,
            });
          }
          return res.status(200).send(greet);
        }).catch((err) => {
          if (err.kind === "ObjectId") {
            return res.status(404).send({
              success: false,
              message: `Greet not found with id ${req.params.greetId}`,
            });
          }
          return res.status(500).send({
            message: `Error updating greet with id ${req.params.greetId}`,
          });
        });
    };

    // Delete a greet with the specified greetId in the request
    delete = (req, res) => {
      Greet.findByIdAndRemove(req.params.greetId, {
        useFindAndModify: false,
      })
        .then((greet) => {
          if (!greet) {
            return res.status(404).send({
              message: `Greet not found with id ${req.params.greetId}`,
            });
          }
          return res.status(200).send({
            success: true,
            message: "Greet deleted successfully!",
          });
        }).catch((err) => {
          if (err.kind === "ObjectId" || err.name === "NotFound") {
            return res.status(404).send({
              message: `Greet not found with id ${req.params.greetId}`,
            });
          }
          return res.status(500).send({
            message: `Could not delete greet with id ${req.params.greetId}`,
          });
        });
    };
}

module.exports = new GreetingApp();
