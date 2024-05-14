import { describe, it, expect } from "vitest";
import { fetchConfig } from "../src/fetch.js";

describe("fetchConfig function", () => {
  it("should return options object with default GET method", () => {
    const options = fetchConfig();

    expect(options.method).toEqual("GET");
    expect(options.body).toBeUndefined();
  });

  it("should return options object with specified method and body", () => {
    const method = "POST";
    const body = { key: "value" };
    const options = fetchConfig({ method, body });

    expect(options.method).toEqual(method);
    expect(options.body).toEqual(JSON.stringify(body));
  });

  it("should handle case-insensitive method names", () => {
    const method = "pOsT";
    const body = { key: "value" };
    const options = fetchConfig({ method, body });

    expect(options.method).toEqual("POST");
    expect(options.body).toEqual(JSON.stringify(body));
  });

  it("should not include body for GET or HEAD requests", () => {
    const methods = ["GET", "HEAD"];
    methods.forEach((method) => {
      const body = { key: "value" };
      const options = fetchConfig({ method, body });

      expect(options.method).toEqual(method);
      expect(options.body).toBeUndefined();
    });
  });

  it("should not include body for nullish body", () => {
    const method = "POST";
    const options1 = fetchConfig({ method, body: null });
    const options2 = fetchConfig({ method, body: undefined });

    expect(options1.body).toBeUndefined();
    expect(options2.body).toBeUndefined();
  });

  it("should not include body for empty body", () => {
    const method = "POST";
    const options = fetchConfig({ method, body: "" });

    expect(options.body).toBeUndefined();
  });
});
