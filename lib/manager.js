const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, email, id, number) {
    super(name, id, email);

    if (!number) {
      throw new Error("Invalid!");
    }

    this.number = number;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
