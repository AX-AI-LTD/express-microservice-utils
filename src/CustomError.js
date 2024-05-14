/**
 * CustomError is a custom error class that extends the built-in Error class,
 * ensuring that the user receives a helpful error message that does
 * not expose sensitive information.
 *
 * It also adds a status property for HTTP status codes.
 *
 * @class
 * @extends {Error}
 */
class CustomError extends Error {
  /**
   * Creates a new CustomError instance.
   *
   * @param {Object} params - An object.
   * @param {string} params.message - The error message.
   * @param {number} params.status - The HTTP status code associated with the error.
   */
  constructor({ message, status } = {}) {
    super(message ?? "Internal Server Error");
    this.status = status ?? 500;
  }
}

module.exports = CustomError;
