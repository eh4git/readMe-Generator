const getBadge = (gitName,title,license) => {
  const gitUrl = `https://github.com/${gitName}/${title}`;
  //forloop loop through licenses and create these strings badges
  console.log(license);
 
  const licenseString = `[![GitHub Badge](https://img.shields.io/badge/License-${license}-blue.svg)](${gitUrl})`;
  return licenseString;
}



function generateMarkdown(data) {
  return `
  # ${data.title}
  
${getBadge(data.gitHubUser,data.title,data.license)}
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
Follow the steps below to install the required node packages.
${data.installation}
### Useage
${data.use}
### Licence
This project uses the following licence(s):
${data.license}
### Contributions
${data.contribution}
### Tests
To test the application enter the following command into your terminal:
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
