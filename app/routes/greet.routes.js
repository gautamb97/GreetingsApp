/* eslint-disable linebreak-style */
/* eslint-disable global-require */
module.exports = (app) => {
  const greets = require("../controllers/greet.controller");
  require("swagger-ui-express");

  // Create a new Greet
  app.post("/greets", greets.create);

  // Retrieve all Greet
  app.get("/greets", greets.findAll);

  // Retrieve a single Greet with greetId
  app.get("/greets/:greetId", greets.findOne);

  // Update a Greet with greetId
  app.put("/greets/:greetId", greets.update);

  // Delete a Greet with greetId
  app.delete("/greets/:greetId", greets.delete);
};
