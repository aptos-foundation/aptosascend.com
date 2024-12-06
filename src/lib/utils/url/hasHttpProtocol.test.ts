import { expect, test } from "vitest";

import { hasHttpProtocol } from "./hasHttpProtocol";

test("Should return true if url has http protocol", () => {
  expect(hasHttpProtocol("http://example.com")).toBe(true);
});

test("Should return true if url has https protocol", () => {
  expect(hasHttpProtocol("https://example.com")).toBe(true);
});

test("Should return false if url doesn't have http protocol", () => {
  expect(hasHttpProtocol("example.com")).toBe(false);
});

test("Should return false if url has another protocol", () => {
  expect(hasHttpProtocol("ftp://example.com")).toBe(false);
});
