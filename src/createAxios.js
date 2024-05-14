const axios = require("axios").default;
const axiosRetry = require("axios-retry").default;

const createInstance = () => {
  // Create an axios instance
  const axiosInstance = axios.create({
    headers: { "Content-Type": "application/json" },
    timeout: 5 * 1000,
  });

  // Configure axios-retry
  axiosRetry(axiosInstance, {
    retries: 4,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: (error) =>
      // Retry on network errors, or 503 codes, or any 5xx code for idempotent methods
      axiosRetry.isNetworkOrIdempotentRequestError(error) ||
      [503].includes(error.response.status),
  });

  return axiosInstance;
};

module.exports = createInstance;
