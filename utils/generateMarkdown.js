
function generateMarkdown(data) {
  return `
# ${data.title}
[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
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
![Erik's Github Profile Picture](https://avatars0.githubusercontent.com/u/63175319?s=460&v=4)
##### Github_Profile
[eh4git](http://github.com/${data.gitHubUser})

`;
}

module.exports = generateMarkdown;
