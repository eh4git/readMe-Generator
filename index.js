var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
    {
      type: "input",
      message: "What is the title of the project?",
      name: "project-name"
    },
    {
      type: "input",
      message: "Describe the project.",
      name: "description"
    },
    {
      type: "input",
      message: "Installation?",
      name: "install"
    },
    {
        type: "input",
        message: "Usage",
        name: "use"
      },
      {
        type: "input",
        message: "What type of license will this project have?",
        name: "license"
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
  ])
  .then(function(response) {
    fs.writeFile(response.name + "README.txt", JSON.stringify(response,null, '\t'), function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success! "+ JSON.stringify(response));
      console.log(response)
      });
  });