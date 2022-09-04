const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, email, id, officeNumber) {
    super(name, id, email);

    if (!officeNumber) {
      throw new Error("Invalid!");
    }

    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
