import { expect, test } from "vitest";

import { slugify } from "./slugify";

test("Should replace spaces with dashes", () => {
  expect(slugify("hello world and others")).toBe("hello-world-and-others");
  expect(slugify("     ")).toBe("-----");
});

test("Should remove all special characters, except - and _", () => {
  expect(slugify("hello_world-and others!@#$%^&*()+")).toBe(
    "hello_world-and-others",
  );
});

test("Should lowercase the string", () => {
  expect(slugify("Hello World")).toBe("hello-world");
});

test("Should handle empty string", () => {
  expect(slugify("")).toBe("");
});
