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
        name: "description",
        default: "When you need to create a ReadMe for a project this application will produce one quickly and easily. The user will answer prompts in the terminal and will receive a well laid out ReadMe that is unique to the project."
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install all dependencies?",
        default: "All dependencies listed in package.json. In your terminal enter: npm i"
    },
    {
        type: "input",
        message: "What is the primary useage for this app?",
        name: "use"
    },
    {
        type: "checkbox",
        message: "What type of license will this project have?",
        choices: [" ISC", " MIT"," WTFPL", " GPL 3.0",  " Apache 2.0", " GPL 2.0", " BSD 3", " LGPL 2.1", " Ms-Pl", " BSD 2", " Zlib", " Eclipse 1.0", " BSD 4"],
        name: "license",
        
    },
    {
        type: "input",
        message: "What can be done to test the app?.",
        name: "test",
        default:"In your terminal enter: npm test"
    },
    {
        type: "input",
        message: "What do you want people to know about contributing to this project?",
        name: "contribution",
        default: "Please feel free to contribute in any way you wish. Please read the documentation and submit a pull request. Any contributions are greatly appreciated. Feedback is also welcomed."
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
