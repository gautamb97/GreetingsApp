/**
 * @description it helps to connect with the database
 * @package dotenv, mongoose
 * @author Gautam Biswal
*/

require("dotenv").config();

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Successfully connected to the database");
}).catch((err) => {
  console.log("Could not connect to the database. Exiting now...", err);
  process.exit();
});
