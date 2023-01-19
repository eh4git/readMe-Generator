const getBadge = require("../utils/pieces/badge");

module.exports = data => `
# ${data.title}

${getBadge(data.githubUser, data.title, data.license)}
### Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)
* [About Me](#git)
### Description
${data.description}
### Installation
Follow the steps below to install the required node packages.<br>
${data.installation}
### Usage
${data.use}
### License
This project uses the following license:<br>
${data.license}
### Contributions
${data.contribution}
### Tests
To test the application enter the following command into your terminal:<br>
${data.test}
### Questions
${data.questions}
<span id="git"></span>
##### My Github Profile
![${data.githubUser} Github Profile Picture](https://github.com/${
  data.githubUser
}.png?size=200)<br>
[My GitHub](http://github.com/${data.githubUser})
##### GitHub Email
${data.gitHubEmail}
`;
