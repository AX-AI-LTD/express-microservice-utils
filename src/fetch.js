const crossFetch = require("cross-fetch");
const FetchFactory = require("fetch-retry");

/**
 * Creates a node compatible fetch implementation that retries on any network errors as well as any specified status codes.
 *
 * @public
 * @function fetch
 * @namespace fetch
 * @param {string} URL - The URL for the request to be sent to.
 * @param {Object} [options] - The options object of the fetch request.
 * @returns {Promise<any>} A Promise that resolves to the HTTP response or rejects on error
 */
const fetch = FetchFactory(crossFetch, {
  retries: 5,
  retryDelay: (attempt) => 2 ** attempt * 1000, // 1s, 2s, 4s, ...
  retryOn: [503], // Service unavailable
});

/**
 * Creates the options object to be passed to a fetch request.
 *
 * @public
 * @memberof fetch
 * @function fetchConfig
 * @param {Object} params - The parameters object.
 * @param {string} [params.method="GET"] - The HTTP method for the request. Defaults to "GET".
 * @param {any} [params.body=null] - The body content of the request. Should be JSON serializable.
 * @returns {Object} The options object for the fetch request.
 */
const fetchConfig = ({ method = "GET", body = null } = {}) => {
  // Case insensitivity
  const methodUpper = method.toUpperCase();
  const config = { method: methodUpper };
  if (
    // GET/HEAD methods do not respect body. See https://www.rfc-editor.org/rfc/rfc2616#section-4.3
    !["GET", "HEAD"].includes(method) &&
    ![null, undefined, ""].includes(body)
  ) {
    config.body = JSON.stringify(body);
    config.headers = {
      "Content-Type": "application/json",
    };
  }
  return config;
};

module.exports = fetch;
module.exports.fetchConfig = fetchConfig;
