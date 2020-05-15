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
        message: "What command should be run to install all dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        message: "What is the primary useage for this app?",
        name: "use"
    },
    {
        type: "checkbox",
        message: "What type of license will this project have?",
        choices: ["ISC", "MIT", "GPL 3.0", "Apache 2.0", "GPL 2.0", "BSD 3", "LGPL 2.1", "Ms-Pl", "BSD 2", "Zlib", "Eclipse 1.0", "BSD 4"],
        name: "license",
        
    },
    {
        type: "input",
        message: "What can be done to test the app?.",
        name: "test"
    },
    {
        type: "input",
        message: "What do you want people to know about contributing?.",
        name: "contribution"
    },
    {
        type: "input",
        message: "Any questions?",
        name: "questions"
    },
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "gitHubUser"
    },
];

function writeToFile(fileName, data) {

    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


function init() {
    inquirer.prompt(questions).then((response) => {

        writeToFile("README.md", generateMarkdown({ ...response }));
    });
}

init();
