const CustomError = require("./src/CustomError");
const { axios, axiosHandled } = require("./src/axiosInstances");
const axiosInstance = require("./src/createAxios");

module.exports = { axios, axiosHandled, CustomError };
