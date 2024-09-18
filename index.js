const CustomError = require("./src/CustomError");
const { axios, axiosHandled } = require("./src/axiosInstances");
const generateAxiosErrorSummary = require("./src/generateAxiosErrorSummary");
const { capitaliseFirst, kebabToCamel, camelToKebab } = require("./src/casing");
const filterNullEntries = require("./src/filterNullEntries");
const {
  formatDateText,
  formatDateNumbers,
  formatDateDashed,
  toDatePicker,
} = require("./src/formatDate");
const { poundsWithCommas } = require("./src/formatPrice");

module.exports = {
  axios,
  axiosHandled,
  CustomError,
  generateAxiosErrorSummary,
  capitaliseFirst,
  kebabToCamel,
  camelToKebab,
  filterNullEntries,
  formatDateText,
  formatDateNumbers,
  formatDateDashed,
  toDatePicker,
  poundsWithCommas,
};
