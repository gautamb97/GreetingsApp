/* eslint-disable linebreak-style */
/* eslint-disable global-require */

/**
 * @module routes
 * @file greet.js
 * @description using controller methods to do RESTful APIs
 * @package swagger-ui-express
 * @author Gautam Biswal
*/
module.exports = (app) => {
  const greets = require("../controllers/greet");
  require("swagger-ui-express");

  /**
   * @description using controller create method and performing post API
  */
  // Create a new Greet
  app.post("/greets", greets.create);

  /**
   * @description using controller findall method and performing get API
  */
  // Retrieve all Greet
  app.get("/greets", greets.findAll);

  /**
   * @description using controller findone method and performing get API to get a particular greet
  */
  // Retrieve a single Greet with greetId
  app.get("/greets/:greetId", greets.findOne);

  /**
   * @description using controller update method and performing put API to a particular greet
  */
  // Update a Greet with greetId
  app.put("/greets/:greetId", greets.update);

  /**
   * @description using controller delete method and performing delete API to the given id of greet
  */
  // Delete a Greet with greetId
  app.delete("/greets/:greetId", greets.delete);
};
