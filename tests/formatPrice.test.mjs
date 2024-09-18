import { describe, it, expect } from "vitest";
import { poundsWithCommas } from "../src/formatPrice.js";

describe("poundsWithCommas", () => {
  it("should format a whole number with commas", () => {
    expect(poundsWithCommas(1000)).toBe("£1,000");
    expect(poundsWithCommas(1000000)).toBe("£1,000,000");
    expect(poundsWithCommas(123456789)).toBe("£123,456,789");
  });

  it("should format a number with decimals correctly", () => {
    expect(poundsWithCommas(1234.56)).toBe("£1,234.56");
    expect(poundsWithCommas(1000000.99)).toBe("£1,000,000.99");
    expect(poundsWithCommas(9876543.21)).toBe("£9,876,543.21");
  });

  it("should handle edge cases like small numbers", () => {
    expect(poundsWithCommas(0)).toBe("£0");
    expect(poundsWithCommas(5)).toBe("£5");
    expect(poundsWithCommas(99.99)).toBe("£99.99");
  });

  it("should handle negative numbers correctly", () => {
    expect(poundsWithCommas(-1000)).toBe("£-1,000");
    expect(poundsWithCommas(-1234567.89)).toBe("£-1,234,567.89");
  });

  it("should handle large numbers without decimals", () => {
    expect(poundsWithCommas(9876543210)).toBe("£9,876,543,210");
  });
});
