import { expect, test } from "vitest";

import { widont } from "./widont";

test("Should return input as is if it isn't a string", () => {
  expect(widont(123)).toBe(123);
  expect(widont({})).toEqual({});
});

test("Should replace only the last space with non-breaking space", () => {
  expect(widont("Hello world, how are you?")).toBe(
    "Hello world, how are\u00a0you?",
  );
  expect(widont("Hello world, how are you?", "html")).toBe(
    "Hello world, how are&nbsp;you?",
  );
});

test("Should replace only hyphen with non-breaking analogue in the last word if it presents", () => {
  expect(widont("Hello world, how are-you?")).toBe(
    "Hello world, how are\u2011you?",
  );
  expect(widont("Hello world, how are-you?", "html")).toBe(
    "Hello world, how are&#8209;you?",
  );
});

test("Should keep whitespace after the last word", () => {
  expect(widont("Hello world, how are you? ")).toBe(
    "Hello world, how are\u00a0you? ",
  );
  expect(widont("Hello world, how are you? ", "html")).toBe(
    "Hello world, how are&nbsp;you? ",
  );
});
