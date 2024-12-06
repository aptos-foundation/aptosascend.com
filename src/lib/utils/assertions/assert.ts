export function assert(value: boolean, message: string): asserts value is true {
  if (value !== true) {
    throw new Error(message);
  }
}
