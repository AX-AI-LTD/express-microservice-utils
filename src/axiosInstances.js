const createInstance = require("./createAxios");
const generateAxiosErrorSummary = require("./generateAxiosErrorSummary");

// An axios instance using regular promises to reject on errors
const axios = createInstance();
// Request interceptor
axios.interceptors.request.use(
  (config) => {
    // Any logic before request is sent
    const configToReturn = config;
    if (config.data?.timeout) configToReturn.timeout = config.data.timeout;
    return configToReturn;
  },
  (err) => {
    // Do something with request error
    const message = generateAxiosErrorSummary(err);
    if (process?.env?.AXAI_UTILS_LOG) {
      console.error(message);
    }
    err.summary = message;
    return Promise.reject(err);
  },
);
// Response interceptor
axios.interceptors.response.use(
  (response) => {
    // Any status code that lies within the range of 2xx causes this function to trigger
    return response;
  },
  (err) => {
    // Any status codes that falls outside the range of 2xx causes this function to trigger
    const message = generateAxiosErrorSummary(err);
    if (process?.env?.AXAI_UTILS_LOG) {
      console.error(message);
    }
    err.summary = message;
    err.status ??= err.response?.status;
    return Promise.reject(err);
  },
);

// An axios instance that instead returns an ok:false object instead of rejecting
const axiosHandled = createInstance();
// Request interceptor
axiosHandled.interceptors.request.use(
  (config) => {
    // Any logic before request is sent
    const configToReturn = config;
    if (config.data?.timeout) configToReturn.timeout = config.data.timeout;
    return configToReturn;
  },
  (err) => {
    // Do something with request error
    const message = generateAxiosErrorSummary(err);
    if (process?.env?.AXAI_UTILS_LOG) {
      console.error(message);
    }
    return {
      data: {
        ok: false,
        reason: err.message,
        status: err.response?.status,
        error: err,
        summary: message,
      },
    };
  },
);
// Response interceptor
axiosHandled.interceptors.response.use(
  (response) => {
    // Any status code that lies within the range of 2xx causes this function to trigger
    return response;
  },
  (err) => {
    // Any status codes that falls outside the range of 2xx causes this function to trigger
    const message = generateAxiosErrorSummary(err);
    if (process?.env?.AXAI_UTILS_LOG) {
      console.error(message);
    }
    return {
      data: {
        ok: false,
        reason: err.message,
        status: err.response?.status,
        error: err,
        summary: message,
      },
    };
  },
);

module.exports.axios = axios;
module.exports.axiosHandled = axiosHandled;
