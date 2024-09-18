import { describe, it, expect } from "vitest";
import filterNullEntries from "../src/filterNullEntries.js";

describe("filterNullEntries", () => {
  it("should remove entries with null values", () => {
    const input = { a: 1, b: null, c: 3 };
    const expected = { a: 1, c: 3 };
    expect(filterNullEntries(input)).toEqual(expected);
  });

  it("should remove entries with undefined values", () => {
    const input = { a: undefined, b: "test", c: 3 };
    const expected = { b: "test", c: 3 };
    expect(filterNullEntries(input)).toEqual(expected);
  });

  it("should remove entries with both null and undefined values", () => {
    const input = { a: null, b: undefined, c: "hello", d: 0 };
    const expected = { c: "hello", d: 0 };
    expect(filterNullEntries(input)).toEqual(expected);
  });

  it("should return the original object if no null or undefined values", () => {
    const input = { a: 1, b: "string", c: true };
    const expected = { a: 1, b: "string", c: true };
    expect(filterNullEntries(input)).toEqual(expected);
  });

  it("should return an empty object if all values are null or undefined", () => {
    const input = { a: null, b: undefined };
    const expected = {};
    expect(filterNullEntries(input)).toEqual(expected);
  });

  it("should handle empty objects", () => {
    const input = {};
    const expected = {};
    expect(filterNullEntries(input)).toEqual(expected);
  });

  it("should not remove entries with falsy values other than null or undefined", () => {
    const input = { a: 0, b: "", c: false };
    const expected = { a: 0, b: "", c: false };
    expect(filterNullEntries(input)).toEqual(expected);
  });
});
