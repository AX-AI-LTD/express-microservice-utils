const createInstance = require("./createAxios");
const generateAxiosErrorSummary = require("./generateAxiosErrorSummary");

// An axios instance using regular promises to reject on errors
const axios = createInstance();
// Request interceptor
axios.interceptors.request.use(
  (config) => {
    // Any logic before request is sent
    return config;
  },
  (err) => {
    // Do something with request error
    console.error(generateAxiosErrorSummary(err));
    return Promise.reject(err);
  }
);
// Response interceptor
axios.interceptors.response.use(
  (response) => {
    // Any status code that lies within the range of 2xx causes this function to trigger
    return response;
  },
  (err) => {
    // Any status codes that falls outside the range of 2xx causes this function to trigger
    console.error(generateAxiosErrorSummary(err));
    return Promise.reject(err);
  }
);

// An axios instance that instead returns an ok:false object instead of rejecting
const axiosHandled = createInstance();
// Request interceptor
axiosHandled.interceptors.request.use(
  (config) => {
    // Any logic before request is sent
    return config;
  },
  (err) => {
    // Do something with request error
    const message = generateAxiosErrorSummary(err);
    console.error(message);
    return {
      data: { ok: false, reason: message, status: err.response?.status },
    };
  }
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
    console.error(message);
    return {
      data: { ok: false, reason: message, status: err.response?.status },
    };
  }
);

module.exports.axios = axios;
module.exports.axiosHandled = axiosHandled;
