const getBadge = require("../utils/pieces/badge")

module.exports = data => `
# ${data.title}

${getBadge(data.gitHubUser, data.title, data.license)}
### Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributions](#Contributions)
* [Tests](#Tests)
* [Questions](#Questions)
* [Profile Picture](#My github Profile)
* [Github Email](#Github_Profile)
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
##### My github Profile
![${data.gitHubUser} Github Profile Picture](https://github.com/${data.gitHubUser}.png?size=200)<br>
GitHub Profile: [${data.gitHubUser}](http://github.com/${data.gitHubUser})
##### GitHub Email
${data.gitHubEmail}
`
