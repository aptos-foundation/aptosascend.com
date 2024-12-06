import { expect, test } from "vitest";

import { assert } from "./assert";

test("Must not throw an error if value is true", () => {
  expect(() => assert(true, "test")).not.toThrow();
});

test("Must throw an error if value is false", () => {
  expect(() => assert(false, "test")).toThrowError("test");
});
