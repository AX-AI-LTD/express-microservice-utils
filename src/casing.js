const capitaliseFirst = (str) =>
  `${(str[0] ?? "").toUpperCase()}${str.slice(1).toLowerCase()}`;

const kebabToCamel = (str) =>
  str.replace(/-\w/g, ([, letter]) => letter.toUpperCase());

const camelToKebab = (str) =>
  str.replace(
    /([a-z])([A-Z])/g,
    (_, lower, upper) => `${lower}-${upper.toLowerCase()}`,
  );

module.exports = { capitaliseFirst, kebabToCamel, camelToKebab };
