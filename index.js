//required moduels
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions/questions")

let template;
(init = () => inquirer.prompt(questions.layout).then(layout => {
     switch(layout.template){
         case "Original":
             template = "Original"
            return  questions.original
         case "starter":
             template = "Starter"
            return questions.starter
         break;
         default:
             console.log(layout)
             console.warn("Template name not found.")
             break;
     }
    }).then(questions => inquirer.prompt(questions).then(answers => fs.writeFileSync(path.join(process.cwd(), `dist/${answers.filename}.md`), generateMarkdown({ ...answers, template })))))();