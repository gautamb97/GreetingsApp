/* eslint-disable linebreak-style */

/**
 * @module logger
 * @file greet.js
 * @description it is creating logs of connecting with db and errors occurs
 * @author Gautam Biswal
 * @package winston
*/
const {
  createLogger,
  transports,
  format,
} = require("winston");

const logger = createLogger({
  transports: [
    new transports.File({
      filename: "./logger/info.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.File({
      filename: "./logger/error.log",
      level: "error",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

module.exports = logger;
