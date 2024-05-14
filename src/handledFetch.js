const CustomError = require("./CustomError");
const fetch = require("./fetch");

const { fetchConfig } = fetch;

/**
 * Factory function that creates a callback that makes an HTTP request to a specified URL with the specified body.
 *
 * @public
 * @function HandledFetchFactory
 * @namespace HandledFetchFactory
 * @param {Object} params - The params object.
 * @param {function} params.fetch - The function used to send HTTP requests.
 * @returns {function} A function that accepts parameters for making HTTP requests with response handling.
 */
const HandledFetchFactory =
  ({ fetch }) =>
  /**
   * Makes an HTTP request to the specified URL with response handling.
   *
   * @public
   * @async
   * @instance
   * @method
   * @memberof HandledFetchFactory
   * @function handledFetch
   * @param {Object} params - The params object.
   * @param {string} params.url - The URL to make the HTTP request to.
   * @param {string} params.method - The HTTP verb used to specify the type of HTTP request. Case insensitive.
   * @param {Object} params.body - The body of the HTTP request.
   * @param {string} [params.errMessage=null] - The error message to use if the request fails.
   * @returns {Promise<JSON>} A promise that resolves with the response data if the request is successful, or rejects with an error if the request fails.
   * @throws {CustomError} Throws a CustomError if the request fails.
   */
  async ({ url, method = "GET", body = null, errMessage = null }) => {
    const methodUpper = method.toUpperCase();
    if (!url) {
      throw new Error(`No URL specified for ${methodUpper} request`);
    }
    const result = await fetch(url, fetchConfig({ method: methodUpper, body }));
    if (result.ok) {
      return result.json();
    }
    throw new CustomError({
      message: errMessage ?? `Error during ${methodUpper} request to ${url}`,
      status: result.status,
    });
  };

const handledFetch = HandledFetchFactory({ fetch });

module.exports = handledFetch;
module.exports.HandledFetchFactory = HandledFetchFactory;
