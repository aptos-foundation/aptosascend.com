import { expect, test } from "vitest";

import { filterBoolean } from "./filterBoolean";

test("Filter values which are coerced to 'false'", () => {
  const arr = [1, null, 2, undefined, 3, 0, "", 4, false, 5];

  expect(filterBoolean(arr)).toEqual([1, 2, 3, 4, 5]);
});
