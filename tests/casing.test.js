import { describe, it, expect } from "vitest";
import { capitaliseFirst, kebabToCamel, camelToKebab } from "../src/casing.js";

describe("capitaliseFirst", () => {
  it("should capitalize the first letter of the string and lowercase the rest", () => {
    expect(capitaliseFirst("hello")).toBe("Hello");
    expect(capitaliseFirst("HELLO")).toBe("Hello");
    expect(capitaliseFirst("hELLO")).toBe("Hello");
  });

  it("should handle empty strings", () => {
    expect(capitaliseFirst("")).toBe("");
  });

  it("should handle single character strings", () => {
    expect(capitaliseFirst("a")).toBe("A");
    expect(capitaliseFirst("A")).toBe("A");
  });
});

describe("kebabToCamel", () => {
  it("should convert kebab-case to camelCase", () => {
    expect(kebabToCamel("kebab-case")).toBe("kebabCase");
    expect(kebabToCamel("multi-part-string")).toBe("multiPartString");
    expect(kebabToCamel("single")).toBe("single");
  });

  it("should handle empty strings", () => {
    expect(kebabToCamel("")).toBe("");
  });

  it("should handle strings without hyphens", () => {
    expect(kebabToCamel("simple")).toBe("simple");
  });
});

describe("camelToKebab", () => {
  it("should convert camelCase to kebab-case", () => {
    expect(camelToKebab("camelCase")).toBe("camel-case");
    expect(camelToKebab("multiPartString")).toBe("multi-part-string");
    expect(camelToKebab("single")).toBe("single");
  });

  it("should handle empty strings", () => {
    expect(camelToKebab("")).toBe("");
  });

  it("should handle strings without uppercase letters", () => {
    expect(camelToKebab("simple")).toBe("simple");
  });
});
