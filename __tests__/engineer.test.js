const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");

// checks for object construction
test("constructs engineer object", () => {
  const engineer = new Engineer("Hannah", "1", "hey$", "Hannahbird");

  expect(engineer.github).toBe("Hannahbird");
});

// checks methods functionality
test("gets github username", () => {
  const engineer = new Engineer("Hannah", "1", "hey$", "Hannahbird");

  expect(engineer.getGithub()).toBe("Hannahbird");
});

test("gets employee company role", () => {
  const engineer = new Engineer("Hannah", "1", "hey$", "Hannahbird");

  expect(engineer.getRole()).toBe("Engineer");
});
