import { expect, test } from "vitest";

import { assertNonNullable } from "./assertNonNullable";

test("Must not throw an error if value is not null or undefined", () => {
  expect(() => assertNonNullable("", "test")).not.toThrow();
  expect(() => assertNonNullable(1, "test")).not.toThrow();
  expect(() => assertNonNullable(false, "test")).not.toThrow();
  expect(() => assertNonNullable(true, "test")).not.toThrow();
  expect(() => assertNonNullable({}, "test")).not.toThrow();
});

test("Must throw an error if value is null", () => {
  expect(() => assertNonNullable(null, "test")).toThrowError("test");
});

test("Must throw an error if value is undefined", () => {
  expect(() => assertNonNullable(undefined, "test")).toThrowError("test");
});
