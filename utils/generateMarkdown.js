const templates = require("../templates/template");

module.exports = data => {
  // console.log(data)
  switch (data.template) {
    case "Original":
      return templates.original(data);
    case "Starter":
      return templates.starter(data);
    default:
      return new Error("Incorrect template name?!? Who programmed this thing!")

  }
}