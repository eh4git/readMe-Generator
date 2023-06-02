//required moduels
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions");

(init = async () => {
  const { template } = await inquirer.prompt(questions.layout);
  let selectedTemplate = questions[template];

  const answers = await inquirer.prompt(selectedTemplate);

  fs.writeFileSync(
    path.join(process.cwd(), `dist/${answers.filename}.md`),
    generateMarkdown({ ...answers, template })
  );
})();
