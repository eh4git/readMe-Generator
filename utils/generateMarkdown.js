
function generateMarkdown(data) {
  return `
# ${data.title}
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
### Table of Contents
* [Describtrion](#Describtrion)
* [Installation](#Installation)
* [Useage](#Useage)
* [Licence](#Licence)
* [Contributions](#Contributions)
* [Tests](#Tests)
* [Questions](#Questions)
  * [Profile Picture](#Profile_Picture)
  * [Github Email](#Github_Profile)
### Description
${data.description}
### Installation
${data.installation}
### Useage
${data.use}
### Licence
${data.license}
### Contributions
${data.contribution}
### Tests
${data.test}
### Questions
${data.questions}
##### Profile_Picture
${data.license}
##### Github_Profile
[eh4git](http://github.com/${data.gitHubUser})

`;
}

module.exports = generateMarkdown;
