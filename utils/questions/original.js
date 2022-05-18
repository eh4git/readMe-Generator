module.exports = [
    {
        type: "input",
        message: "What do you want to name the this file?",
        name: "filename",
        default: "generated_README",
        filter(input) {
            if (/[a-z]*.[a-z]*/i.test(input)) {
                return input.substring(0, input.indexOf("."))
            }
            return input
        }
    },
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe the project.",
        name: "description",

    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install all dependencies?",
        default: "All dependencies listed in package.json. In your terminal enter: npm i"
    },
    {
        type: "input",
        message: "What is the primary usage for this app?",
        name: "use"
    },
    {
        type: "list",
        message: "What type of license will this project have?",
        choices: ["ISC", " MIT", " WTFPL", " GPL 3.0", " Apache 2.0", " GPL 2.0", " BSD 3", " LGPL 2.1", " Ms-Pl", " BSD 2", " Zlib", " Eclipse 1.0", " BSD 4"],
        name: "license",
        default: 1,
    },
    {
        type: "input",
        message: "What can be done to test the app?.",
        name: "test",
        default: "In your terminal enter: npm run test"
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
        name: "gitHubUser",
        default: "eh4git"
    },
    {
        type: "input",
        message: "What is your GitHub email?",
        name: "gitHubEmail",
        default: "ehirsch760@gmail.com"
    },

];