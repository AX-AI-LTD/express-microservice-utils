const poundsWithCommas = (number) =>
  `£${number
    .toString()
    .replace(
      /(?<=\d)(?<!\..*)(\d{3})(?=(?:,?\d{3})*(?:\.\d{2})?$)/g,
      (_, digits) => `,${digits}`,
    )}`;

module.exports = { poundsWithCommas };
