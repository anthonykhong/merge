const isEven = require("./even.js");

test("It should return true when called with an even number", () => {
  expect(isEven(2)).toBe(true);
});
