const Manager = require("../lib/manager");
const Intern = require("../lib/intern");
const Engineer = require("../lib/engineer");
// filter function for specific employes
const filterCardInfo = (employeeArr, i) => {
  // function will return info for the different types of employees
  if (employeeArr[i].getRole() === "Manager") {
    return `Office Number: ${employeeArr[i].number}`;
  } else if (employeeArr[i].getRole() === "Engineer") {
    return `GitHub: ${employeeArr[i].getGithub()}`;
  } else {
    return `School: ${employeeArr[i].getSchool()}`;
  }
};

// this function will create all employee cards
const generateEmployeeItems = (employeesArr) => {
  // create employee card
  let icon = "";

  // manager listed as employee in order to show up on page
  for (let i = 0; i < employeesArr.length; i++) {
    if (employeesArr[i].getRole() === "Manager") {
      // sets icon of employeeType
      icon = `<i class="bi bi-cup-hot-fill"></i`;
    } else if (employeesArr[i].getRole() === "Intern") {
      icon = `<i class="bi bi-search"></i>`;
    } else {
      icon = `<i class="bi bi-book-half"></i>`;
    }

    return `
        <div class="col-12 col-lg-3 col-md-4">
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">${employeesArr[i].getName()}</div>
                <div class="card-body">
                    <h5 class="card-title">${icon}${employeesArr[
      i
    ].getRole()}</h5>
                    <div class="card-info">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${employeesArr[
                              i
                            ].getId()}</li>
                            <li class="list-group-item">Email: ${employeesArr[
                              i
                            ].getEmail()}</li>
                            <li class="list-group-item">${filterCardInfo(
                              employeesArr,
                              i
                            )}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `;
  }
};

const generateHTML = (employeesArr) => {
  `<!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team Members</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            <div class="header">
                <h1 class="page-title">
                    The Team
                </h1>
            </div>
        </header>
        <main class="container">
            <div class="row">
                ${generateEmployeeItems(employeesArr)}
            </div>                       
        </main>
    </body>
    </html>
    `;
};
module.exports = generateHTML;
