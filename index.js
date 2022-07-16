// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "title of the project",
    name: "title",
  },
  {
    type: "input",
    message: "description of the project ",
    name: "description",
}, 
{
    type: "input",
    message: " installation instructions",
    name: "installation",
},
{
    type: "input",
    message: "usage information",
    name: "usage",
},
{
    type: "input",
    message: "contribution guidelines",
    name: "contributing",
},
{
    type: "input",
    message: "testing instructions",
    name: "testing",
},
{
    type: "input",
    message: "what is your github username",
    name: "username",
},
{
    type: "input",
    message: "what is your email addres",
    name: "email",
},
{
    type: 'list',
    message: 'What is your preferred github license',
    name: 'license',
    choices: ['Apache_License_2.0', 'MIT_License', 'Mozilla_Public_License 2.0','GNU_AGPLv3', 'no license'],
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
      console.log(responses)
    writeToFile("README.md", generateMarkdown(responses));
  });
}

// Function call to initialize app
init();
