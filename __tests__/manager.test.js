const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

// checks object construction
test("constructs manager object", () => {
  const manager = new Manager("Hannah", "1", "hey$", "123456");

  expect(manager.number).toBe("123456");
});

// checks methods
test("gets manager role", () => {
  const manager = new Manager("Hannah", "1", "hey$", "123456");

  expect(manager.getRole()).toBe("Manager");
});
