import { describe, it, expect, vi, beforeEach } from "vitest";
import { HandledFetchFactory } from "../src/handledFetch.js";

describe("handledFetch", () => {
  const fetch = vi.fn(() => ({ ok: true, status: 200, json: () => ({}) }));
  const handledFetch = HandledFetchFactory({ fetch });

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should make an HTTP GET request with default parameters", async () => {
    const url = "https://example.com/api/resource";
    await handledFetch({ url });

    expect(fetch).toHaveBeenCalledWith(url, { method: "GET" });
  });

  it("should make an HTTP POST request with specified parameters", async () => {
    const url = "https://example.com/api/resource";
    const method = "POST";
    const body = { key: "value" };
    await handledFetch({ url, method, body });

    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  });

  it("should throw an error if no URL is specified", async () => {
    await expect(handledFetch({})).rejects.toThrowError(
      "No URL specified for GET request"
    );
  });

  it("should throw an Error if the request fails due to network error", async () => {
    const url = "https://example.com/api/resource";
    fetch.mockRejectedValueOnce(new Error("Network Error"));

    try {
      await handledFetch({ url });
    } catch (err) {
      expect(err.message).toEqual("Network Error");
    }
  });

  it("should throw a CustomError with custom error message and status", async () => {
    const url = "https://example.com/api/resource";
    const errorMessage = "Custom error message";
    const errorStatus = 499;
    fetch.mockReturnValue({ ok: false, status: errorStatus });

    try {
      await handledFetch({
        url,
        errMessage: errorMessage,
        errStatus: errorStatus,
      });
    } catch (err) {
      expect(err.message).toEqual(errorMessage);
      expect(err.status).toEqual(errorStatus);
    }
  });
});
