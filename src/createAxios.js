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
    shouldResetTimeout: true,
    retryCondition: (error) =>
      error.code === 'ECONNABORTED' || // Timeouts
      axiosRetry.isNetworkOrIdempotentRequestError(error) || // Network errors
      [503].includes(error.response?.status), // Particular status codes
  });

  return axiosInstance;
};

module.exports = createInstance;
