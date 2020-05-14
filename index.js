//required moduels
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
//Questions saved as objects
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe the project.",
        name: "description"
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
      },
    {
        type: "input",
        message: "Usage",
        name: "use"
    },
    {
        type: "input",
        message: "What type of license will this project have?",
        name: "license",
       
    },
    {
        type: "input",
        message: "Contributing.",
        name: "contribution"
    },
    {
        type: "input",
        message: "Any questions?",
        name: "questions"
    },
];

function writeToFile(fileName, data) {
   
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}


function init() {
    inquirer.prompt(questions).then((response) => {
 
        writeToFile("README.md", generateMarkdown({ ...response }));
    });
}

init();
