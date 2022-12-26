//import demo from "./app.js";
function demo(value) {
  return `Demo: ${value}`;
}

describe("Пример теста", () => {
  test.each([
    { str: "Hello!", expected: "Demo: Hello!" },
    { str: "", expected: "Demo: " },
    { str: 100, expected: "Demo: 100" },
  ])("demo($str)", ({ str, expected }) => {
    expect(demo(str)).toBe(expected);
  });
});
