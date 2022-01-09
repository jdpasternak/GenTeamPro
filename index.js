const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const { createTeam, generateHtml, writeHTML, copyCSS } = require("./src/utils");

let teamMembers = [];

const promptManager = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Enter the manager's name:",
        validate: (input) => {
          if (typeof input !== "string" || input.length < 3) {
            console.log("\nName must be at least three letters.");
            return false;
          }
          return true;
        },
      },
      {
        name: "id",
        type: "input",
        message: "Enter the manager's ID:",
        validate: (input) => {
          if (!input) {
            console.log("\nID is required!");
            return false;
          }
          return true;
        },
      },
      {
        name: "email",
        type: "input",
        message: "Enter the manager's email address:",
        validate: (input) => {
          if (!input.match(/[\w-]+@[\w-]+[.]\w+/)) {
            console.log("\nEmail must be in format x@x.x");
            return false;
          }
          return true;
        },
      },
      {
        name: "officeNumber",
        type: "input",
        message: "Enter the manager's office number:",
        validate: (input) => {
          if (!input) return false;
          return true;
        },
      },
      {
        name: "proceed",
        type: "list",
        message: "What's next?",
        choices: ["Add an engineer", "Add an intern", "I'm done"],
      },
    ])
    .then((info) => {
      info.role = "Manager";
      teamMembers.push(info);
      switch (info.proceed) {
        case "Add an engineer":
          return promptEngineer();
        case "Add an intern":
          return promptIntern();
        case "I'm done":
          break;
      }
    });
};

const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Enter the engineer's name:",
        validate: (input) => {
          if (typeof input !== "string" || input.length < 3) {
            console.log("\nName must be at least three letters.");
            return false;
          }
          return true;
        },
      },
      {
        name: "id",
        type: "input",
        message: "Enter the engineer's ID:",
        validate: (input) => {
          if (!input) {
            console.log("\nID is required!");
            return false;
          }
          return true;
        },
      },
      {
        name: "email",
        type: "input",
        message: "Enter the engineer's email address:",
        validate: (input) => {
          if (!input.match(/[\w-]+@[\w-]+[.]\w+/)) {
            console.log("\nEmail must be in format x@x.x");
            return false;
          }
          return true;
        },
      },
      {
        name: "github",
        type: "input",
        message: "Enter the engineer's GitHub username:",
        validate: (input) => {
          if (typeof input !== "string" || input.length < 2) {
            console.log("\nUsername must be at least two characters");
            return false;
          }
          return true;
        },
      },
      {
        name: "proceed",
        type: "list",
        message: "What's next?",
        choices: ["Add an engineer", "Add an intern", "I'm done"],
      },
    ])
    .then((info) => {
      info.role = "Engineer";
      teamMembers.push(info);
      switch (info.proceed) {
        case "Add an engineer":
          return promptEngineer();
        case "Add an intern":
          return promptIntern();
        case "I'm done":
          return false;
      }
    });
};

const promptIntern = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Enter the intern's name:",
        validate: (input) => {
          if (typeof input !== "string" || input.length < 3) {
            console.log("\nName must be at least three letters.");
            return false;
          }
          return true;
        },
      },
      {
        name: "id",
        type: "input",
        message: "Enter the intern's ID:",
        validate: (input) => {
          if (!input) {
            console.log("\nID is required!");
            return false;
          }
          return true;
        },
      },
      {
        name: "email",
        type: "input",
        message: "Enter the intern's email address:",
        validate: (input) => {
          if (!input.match(/[\w-]+@[\w-]+[.]\w+/)) {
            console.log("\nEmail must be in format x@x.x");
            return false;
          }
          return true;
        },
      },
      {
        name: "school",
        type: "input",
        message: "Enter the intern's school:",
        validate: (input) => {
          if (input.length < 2) {
            console.log("\nSchool name must be at least two characters");
            return false;
          }
          return true;
        },
      },
      {
        name: "proceed",
        type: "list",
        message: "What's next?",
        choices: ["Add an engineer", "Add an intern", "I'm done"],
      },
    ])
    .then((info) => {
      info.role = "Intern";
      teamMembers.push(info);
      switch (info.proceed) {
        case "Add an engineer":
          return promptEngineer();
        case "Add an intern":
          return promptIntern();
        case "I'm done":
          return false;
      }
    });
};

promptManager()
  .then(() => createTeam(teamMembers))
  .then((response) => {
    return generateHtml(response.data);
  })
  .then((response) => {
    return writeHTML(response.data);
  })
  .then(() => {
    return copyCSS();
  })
  .catch((err) => console.log(err));
