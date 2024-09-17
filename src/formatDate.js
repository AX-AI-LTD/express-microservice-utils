// dd/mm/yyyy
const formatDateNumbers = (timestamp) =>
  ((date) => `${date.getDate()}/${1 + date.getMonth()}/${date.getFullYear()}`)(
    new Date(timestamp),
  );

// dd-mm-yyyy
const formatDateDashed = (timestamp) =>
  ((date) => `${date.getDate()}-${1 + date.getMonth()}-${date.getFullYear()}`)(
    new Date(timestamp),
  );

// Thu Jan 01 1970
const formatDateText = (timestamp) => new Date(timestamp).toDateString();

const toDatePicker = (timestamp) =>
  new Date(timestamp).toISOString().split("T")[0];

export { formatDateText, formatDateNumbers, formatDateDashed, toDatePicker };
