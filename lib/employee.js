class Employee {
  constructor(name, email, idNumber) {
    if (!name || !email || !idNumber) {
      throw new Error("Invalid!");
    }

    this.name = name;
    this.email = email;
    this.id = idNumber;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
