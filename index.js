const CustomError = require("./src/CustomError");
const fetch = require("./src/fetch");
const handledFetch = require("./src/handledFetch");

const { fetchConfig } = fetch;

module.exports = { fetch, fetchConfig, handledFetch, CustomError };
