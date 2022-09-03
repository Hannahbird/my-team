const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
// const Intern = require("./lib/intern");
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
