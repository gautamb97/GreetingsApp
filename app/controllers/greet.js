/* eslint-disable linebreak-style */
/**
 * @module controllers
 * @file   greet.js
 * @description Controller class takes the request and sending response to client
 * @author Gautam Biswal
*/

const Greet = require("../services/greet.js");
const { authSchema } = require("../utility/helper");

class Controller {
  /**
   * @description creating and saving greet
   * @param req is used to get the request from client
   * @param res is used to give response to the client
  */
  create = (req, res) => {
    const result = authSchema.validate(req.body);
    if (result.error) {
      return res.send(result);
    }
    return Greet.create(req, res);
  };

  /**
   * @desciption finding all the greets the are present in DB
  */
  findAll = (req, res) => {
    Greet.findAll(req, res);
  };

  /**
   * @description finding one greet from the DB
  */

  findOne = (req, res) => {
    Greet.findOne(req, res);
  };

  /**
   * @description updating the greet that we have in the data base
  */
  update = (req, res) => {
    Greet.update(req, res);
  };
  /**
   * @description delete an existing greet from the database
  */

  delete = (req, res) => {
    Greet.delete(req, res);
  };
}

module.exports = new Controller();
