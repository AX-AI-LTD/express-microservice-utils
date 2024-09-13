import { describe, it, expect } from "vitest";
import {
  formatDateText,
  formatDateNumbers,
  formatDateDashed,
  toDatePicker,
} from "../src/formatDate.js";

// Sample timestamp for testing (epoch time for consistency)
const sampleTimestamp = 0; // Thu Jan 01 1970 00:00:00 UTC
const specificTimestamp = new Date("2024-09-14T00:00:00Z").getTime();

describe("Date Formatting Functions", () => {
  it("should format the date as dd/mm/yyyy", () => {
    const formattedDate = formatDateNumbers(sampleTimestamp);
    expect(formattedDate).toBe("1/1/1970");
  });

  it("should format the date as dd-mm-yyyy", () => {
    const formattedDate = formatDateDashed(specificTimestamp);
    expect(formattedDate).toBe("14-9-2024");
  });

  it("should format the date as a readable string (Thu Jan 01 1970)", () => {
    const formattedTextDate = formatDateText(sampleTimestamp);
    expect(formattedTextDate).toBe("Thu Jan 01 1970");
  });

  it("should format the date for a date picker (yyyy-mm-dd)", () => {
    const datePickerFormat = toDatePicker(specificTimestamp);
    expect(datePickerFormat).toBe("2024-09-14");
  });
});
