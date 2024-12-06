import { expect, test } from "vitest";

import { ensureNonNullable } from "./ensureNonNullable";

test("Must return value if it isn't null or undefined", () => {
  const strValue = "test";
  const numValue = 1;
  const boolValue = true;
  const objValue = {};

  expect(ensureNonNullable(strValue, "test")).toBe(strValue);
  expect(ensureNonNullable(numValue, "test")).toBe(numValue);
  expect(ensureNonNullable(boolValue, "test")).toBe(boolValue);
  expect(ensureNonNullable(objValue, "test")).toBe(objValue);
});

test("Must throw an error if value is null or undefined", () => {
  expect(() => ensureNonNullable(null, "test")).toThrowError("test");
  expect(() => ensureNonNullable(undefined, "test")).toThrowError("test");
});
