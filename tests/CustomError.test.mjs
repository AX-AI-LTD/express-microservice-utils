import { describe, it, expect } from "vitest";
import CustomError from "../src/CustomError.js";

describe("CustomError class", () => {
  it("should create a new CustomError instance with default status code 500 if not specified", () => {
    const errorMessage = "An error occurred";
    const error = new CustomError({ message: errorMessage });

    expect(error instanceof Error).toBe(true);
    expect(error instanceof CustomError).toBe(true);
    expect(error.message).toEqual(errorMessage);
    expect(error.status).toEqual(500);
  });

  it("should create a new CustomError instance with default message 'Internal Server Error' if message is not specified", () => {
    const status = 404;
    const error = new CustomError({ status });

    expect(error instanceof Error).toBe(true);
    expect(error instanceof CustomError).toBe(true);
    expect(error.message).toEqual("Internal Server Error");
    expect(error.status).toEqual(status);
  });

  it("should create a new CustomError instance with default message 'Internal Server Error' and status code 500 if neither message nor status are specified", () => {
    const error = new CustomError();

    expect(error instanceof Error).toBe(true);
    expect(error instanceof CustomError).toBe(true);
    expect(error.message).toEqual("Internal Server Error");
    expect(error.status).toEqual(500);
  });
});
