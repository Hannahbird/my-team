const Intern = require("../lib/intern");
const Employee = require("../lib/employee");

// checks object construction
test("constructs the object", () => {
  const intern = new Intern("Hannah", "1", "hey@", "UNC Chapel Hill");

  expect(intern.school).toBe("UNC Chapel Hill");
});

// checks methods
test("gets intern role", () => {
  const intern = new Intern("Hannah", "1", "hey@", "UNC Chapel Hill");

  expect(intern.getRole()).toBe("Intern");
});

test("gets intern's school", () => {
  const intern = new Intern("Hannah", "1", "hey@", "UNC Chapel Hill");

  expect(intern.getSchool()).toBe("UNC Chapel Hill");
});
