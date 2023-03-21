const divide = require("./divide");

test("divides 9 / 3 to equal 3", () => {
  expect(divide(9, 3)).toBe(3);
});

test("divides 9 / 0 to equal Infinity", () => {
  expect(divide(9, 0)).toBe(Infinity);
});
