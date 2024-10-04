/**
 * This utility function will return a copy of the original object,
 * with any entries whose value is null or undefined removed
 *
 * @module filterNullEntries
 * @param {Object} obj - The object to be filtered
 * @returns {Object} - Returns the object without its null or undefined entries.
 * @namespace filterNullEntries
 *
 */
const filterNullEntries = (obj) =>
  Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== null && v !== undefined),
  );

module.exports = filterNullEntries;
