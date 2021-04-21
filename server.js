/* eslint-disable linebreak-style */
const express = require("express");
require("dotenv").config();
const swaggerUI = require("swagger-ui-express");
const mongoose = require("mongoose");
const logger = require("./app/logger/greet.logger");
const swaggerDoc = require("./app/swagger.json");

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(express.json());

// Configuring the database
const dbConfig = require("./config/database.config.js");

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Successfully connected to the database");
}).catch((err) => {
  console.log("Could not connect to the database. Exiting now...", err);
  process.exit();
});

// define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Greetings application." });
});

// Require Greet routes
require("./app/routes/greet.routes.js")(app);

app.use("/swagger", swaggerUI.serve, swaggerUI.setup(swaggerDoc));
// listen for requests
app.listen(process.env.PORT, () => {
  logger.log("info", "Server is listening on port 3000");
});
