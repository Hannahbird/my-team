const Employee = require("./employee");

class Assistant extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    if (!school) {
      throw new Error("Invalid!");
    }

    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Assistant";
  }
}

module.exports = Assistant;
