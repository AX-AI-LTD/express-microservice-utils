const createInstance = require("./createAxios");

// An axios instance using regular promises to reject on errors
const axios = createInstance();
// Request interceptor
axios.interceptors.request.use(
  (config) => {
    // Any logic before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    console.error(
      `${new Date().toISOString()}: Setting up request errored with ${error}`
    );
    return Promise.reject(error);
  }
);
// Response interceptor
axios.interceptors.response.use(
  (response) => {
    // Any status code that lies within the range of 2xx causes this function to trigger
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx causes this function to trigger
    console.error(
      `${new Date().toISOString()}: Error response with ${error} and status ${
        error.response?.status
      }`
    );
    return Promise.reject(error);
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
  (error) => {
    // Do something with request error
    console.error(
      `${new Date().toISOString()}: Setting up request errored with ${error}`
    );
    return { ok: false, reason: error.message };
  }
);
// Response interceptor
axiosHandled.interceptors.response.use(
  (response) => {
    // Any status code that lies within the range of 2xx causes this function to trigger
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx causes this function to trigger
    console.error(
      `${new Date().toISOString()}: Error response with ${error} and status ${
        error.response?.status
      }`
    );
    return { ok: false, reason: error.message, status: error.response?.status };
  }
);

module.exports.axios = axios;
module.exports.axiosHandled = axiosHandled;
