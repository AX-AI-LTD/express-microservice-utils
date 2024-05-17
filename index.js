const CustomError = require("./src/CustomError");
const { axios, axiosHandled } = require("./src/axiosInstances");
const generateAxiosErrorSummary = require("./src/generateAxiosErrorSummary");

module.exports = {
  axios,
  axiosHandled,
  CustomError,
  generateAxiosErrorSummary,
};
