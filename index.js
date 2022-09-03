const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
// const Intern = require("./lib/Assistant");
// const Engineer = require("./lib/engineer");

// import function that contructs my HTML
const generateHTML = require("./src/page-template");

let employeesArr = [];

const promptManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Managers's name? ",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Manager's email? ",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Manager's id number? ",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "number",
        message: "Manager's office number? ",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Provide an office number!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmMore",
        message: "Would you like to add more team members? ",
      },
    ])
    .then((data) => {
      let manager = new Manager(data.name, data.email, data.id, data.number);
      employeesArr.push(manager);
    });
};
const promptEmployee = (employeesArr) => {
  //prompts for adding employees

  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        message: "Employee's role? ",
        choices: ["Engineer", "Assistant"],
      },
      {
        type: "input",
        name: "name",
        message: "Employee's name? ",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Employee's email? ",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Employee's id number? ",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What school does the Assistant attend? ",
        when: ({ employeeType }) => {
          if (employeeType === "Assistant") {
            return true;
          }
        },
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please provide a school");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Employees Github account username? ",
        when: ({ employeeType }) => {
          if (employeeType === "Engineer") {
            return true;
          }
        },
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Provide a username");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmMore",
        message: "Do you have more team members to add? ",
      },
      // rerun prompts if there are more team members
    ])
    .then((data) => {
      // add new team memberto array
      if (data.employeeType === "Engineer") {
        let engineer = new Engineer(
          data.name,
          data.email,
          data.id,
          data.github
        );
        employeesArr.push(engineer);
      } else {
        let Assistant = new Assistant(
          data.name,
          data.email,
          data.id,
          data.school
        );
        employeesArr.push(Assistant);
      }

      console.log(employeesArr);
      if (data.confirmMore) {
        // rerun prompts to verify previous members are save
        return promptEmployee(employeesArr);
      } else {
        // if no more employees are added then return the array
        return employeesArr;
      }
    });
};

promptManager()
  .then((employeesArr) => {
    console.log(employeesArr);
    return generateHTML(employeesArr);
  })
  .then((pageHTML) => {});
