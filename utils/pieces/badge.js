module.exports = (gitName, title, license) => {
    // let licenseSrtMod = license.split(", ");
    // console.log(licenseSrtMod)
    // const gitUrl = `https://github.com/${gitName}/${title}`;
    //forloop loop through licenses and create these strings badges

    const licenseString = `![GitHub Badge](https://img.shields.io/badge/License-${license}-blue.svg)`;
    return licenseString;
}
