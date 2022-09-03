const Employee = require("../lib/employee");

// checks for object construction
test("creates an employee object", () => {
  const employee = new Employee("Bob Smith", "Bobsmith@email.com", 123456);

  expect(employee.name).toBe("Bob Smith");
  expect(employee.email).toBe("Bobsmith@email.com");
  expect(employee.id).toBe(123456);
});

// tests all methods
test("gets employee name", () => {
  const employee = new Employee("Bob Smith", "Bobsmith@email.com", "123456");

  expect(employee.getName()).toBe("Bob Smith");
});

test("gets employee email", () => {
  const employee = new Employee("Bob Smith", "Bobsmith@email.com", "123456");

  expect(employee.getEmail()).toBe("Bobsmith@email.com");
});

test("gets employee id number", () => {
  const employee = new Employee("Bob Smith", "Bobsmith@email.com", "123456");

  expect(employee.getId()).toBe("123456");
});

test("gets employee role", () => {
  const employee = new Employee("Bob Smith", "Bobsmith@email.com", "123456");

  expect(employee.getRole()).toBe("Employee");
});
